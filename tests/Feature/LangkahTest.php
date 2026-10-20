<?php

namespace Tests\Feature;

use App\Models\Payment;
use App\Models\Plan;
use App\Models\PracticeSession;
use App\Models\Student;
use App\Models\Topic;
use App\Models\User;
use App\Services\ReportService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use Tests\TestCase;

class LangkahTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->withoutVite();
        Artisan::call('konten:impor');
        config(['services.midtrans.server_key' => 'SB-Mid-server-test', 'services.midtrans.client_key' => 'SB-Mid-client-test']);
    }

    private function parent(): User
    {
        $u = User::factory()->create(['role' => 'parent']);
        app(\App\Services\SubscriptionService::class)->startTrial($u);

        return $u;
    }

    private function plan(): Plan
    {
        return Plan::create(['slug' => 'bulanan', 'name' => 'Bulanan', 'price' => 79000, 'period_months' => 1, 'max_students' => 3]);
    }

    public function test_konten_terimpor(): void
    {
        $this->assertSame(136, Topic::count());
        $this->assertTrue(Topic::find('sd3-05-pembagian-bersusun')->has_practice);
        $this->assertTrue(Topic::find('sd1-01-bilangan-sampai-100')->is_free);
        $this->assertStringContainsString('Bagi, Kali, Kurang, Turun', Topic::find('sd3-05-pembagian-bersusun')->body);
    }

    public function test_daftar_orang_tua_mendapat_trial(): void
    {
        $this->post('/register', ['name' => 'Ibu Sari', 'email' => 'sari@contoh.id', 'password' => 'rahasia123', 'password_confirmation' => 'rahasia123'])
            ->assertRedirect(route('parent.dashboard'));
        $u = User::where('email', 'sari@contoh.id')->first();
        $this->assertSame('parent', $u->role);
        $this->assertSame('trial', $u->currentSubscription()->status);
        $this->assertTrue($u->hasAccess());
    }

    public function test_orang_tua_membuat_anak_dan_anak_login_dengan_pin(): void
    {
        $u = $this->parent();
        $this->actingAs($u)->post(route('students.store'), ['name' => 'Putu', 'grade' => 'sd3', 'username' => 'Putu.K', 'pin' => '4321'])->assertSessionHas('success');
        $s = Student::firstWhere('username', 'putu.k');
        $this->assertNotNull($s);
        $this->post('/keluar');
        auth()->logout();

        $this->post(route('siswa.login.store'), ['username' => 'putu.k', 'pin' => '0000'])->assertSessionHasErrors('pin');
        $this->post(route('siswa.login.store'), ['username' => 'putu.k', 'pin' => '4321'])->assertRedirect(route('siswa.home'));
        $this->assertAuthenticatedAs($s, 'student');
    }

    public function test_batas_jumlah_anak(): void
    {
        $u = $this->parent(); // trial: maksimal 2 anak
        foreach (['anak1', 'anak2', 'anak3'] as $n) {
            $r = $this->actingAs($u)->post(route('students.store'), ['name' => $n, 'grade' => 'sd1', 'username' => $n, 'pin' => '1111']);
            $r->assertSessionHasNoErrors();
        }
        $this->assertSame(2, $u->students()->count());
    }

    public function test_orang_tua_lain_tidak_bisa_melihat_laporan(): void
    {
        $a = $this->parent();
        $s = $a->students()->create(['name' => 'X', 'grade' => 'sd1', 'username' => 'x1', 'pin' => '1111']);
        $this->actingAs($this->parent())->get(route('students.report', $s))->assertForbidden();
        $this->actingAs($a)->get(route('students.report', $s))->assertOk();
    }

    public function test_latihan_mencatat_kesalahan_dan_laporan(): void
    {
        $u = $this->parent();
        $s = $u->students()->create(['name' => 'Putu', 'grade' => 'sd3', 'username' => 'putu', 'pin' => '1234']);
        $this->actingAs($s, 'student')->get(route('siswa.practice', 'sd3-05-pembagian-bersusun'))->assertOk();
        $session = PracticeSession::firstOrFail();

        $wrong = ['skill' => 'porogapit', 'level' => 1, 'seed' => 7, 'text' => 'Hitung 96 ÷ 4', 'correct' => false, 'hintsUsed' => 1, 'durationMs' => 40000,
            'steps' => [['id' => 'porogapit', 'ok' => false, 'tries' => 1, 'revealed' => false, 'errors' => ['lupa-nol-hasil-bagi'], 'given' => '13']]];
        $right = array_merge($wrong, ['correct' => true, 'steps' => [['id' => 'porogapit', 'ok' => true, 'tries' => 1, 'revealed' => false, 'errors' => []]]]);

        $first = $this->postJson(route('siswa.answer', $session), $wrong);
        $first->assertOk();
        $first->assertJson(['level' => 1]);
        $this->postJson(route('siswa.answer', $session), $wrong)->assertOk();
        foreach (range(1, 3) as $_) {
            $res = $this->postJson(route('siswa.answer', $session), $right)->assertOk();
        }
        $res->assertJson(['level' => 2]); // 3 benar berturut-turut → naik tingkat

        $report = app(ReportService::class)->build($s->fresh(), 30);
        $this->assertSame(5, $report['summary']['questions']);
        $this->assertSame(60, $report['summary']['accuracy']);
        $this->assertSame('lupa-nol-hasil-bagi', $report['errors'][0]['code']);
        $this->assertSame(2, $report['errors'][0]['count']);
        $this->assertSame('Lupa menulis 0 di hasil bagi', $report['errors'][0]['name']);
        $this->assertNotEmpty($report['recommendations']);
        $this->assertSame('Pembagian bersusun (porogapit)', $report['topics'][0]['skills'][0]['name']);
    }

    public function test_topik_terkunci_tanpa_langganan(): void
    {
        $u = User::factory()->create(['role' => 'parent']); // tanpa trial
        $s = $u->students()->create(['name' => 'A', 'grade' => 'sd3', 'username' => 'aa', 'pin' => '1111']);
        $this->actingAs($s, 'student')->get(route('siswa.practice', 'sd3-05-pembagian-bersusun'))->assertRedirect();
        $this->actingAs($s, 'student')->get(route('siswa.practice', 'sd3-01-bilangan-sampai-10000'))->assertOk(); // topik gratis
    }

    private function notify(Payment $p, string $status, ?string $key = null, ?int $amount = null): \Illuminate\Testing\TestResponse
    {
        $gross = number_format($amount ?? $p->amount, 2, '.', '');
        $code = $status === 'settlement' ? '200' : '201';

        return $this->postJson('/midtrans/notifikasi', [
            'order_id' => $p->order_id, 'status_code' => $code, 'gross_amount' => $gross, 'transaction_status' => $status,
            'payment_type' => 'qris', 'transaction_id' => 'trx-1', 'fraud_status' => 'accept',
            'signature_key' => $key ?? hash('sha512', $p->order_id.$code.$gross.'SB-Mid-server-test'),
        ]);
    }

    public function test_notifikasi_midtrans_mengaktifkan_langganan_sekali(): void
    {
        $u = $this->parent();
        $plan = $this->plan();
        $p = $u->payments()->create(['plan_id' => $plan->id, 'order_id' => 'LKH-TEST-1', 'amount' => 79000]);

        $this->notify($p, 'settlement', 'salah')->assertForbidden();
        $this->notify($p, 'settlement', null, 1000)->assertStatus(422);
        $this->notify($p, 'pending')->assertOk();
        $this->assertSame('pending', $p->fresh()->status);

        $this->notify($p, 'settlement')->assertOk();
        $this->notify($p, 'settlement')->assertOk(); // notifikasi ganda
        $this->notify($p, 'pending')->assertOk();   // notifikasi terlambat tidak menurunkan status

        $p->refresh();
        $this->assertSame('paid', $p->status);
        $this->assertSame('qris', $p->method);
        $this->assertSame(1, $u->subscriptions()->where('status', 'active')->count());
        $sub = $u->currentSubscription();
        $this->assertSame('active', $sub->status);
        $this->assertTrue($sub->ends_at->between(now()->addDays(27), now()->addDays(32)));
        $this->assertSame(0, $u->subscriptions()->where('status', 'trial')->where('ends_at', '>', now())->count());
    }

    public function test_perpanjangan_menumpuk_di_akhir_langganan(): void
    {
        $u = $this->parent();
        $plan = $this->plan();
        foreach (['LKH-A', 'LKH-B'] as $id) {
            $p = $u->payments()->create(['plan_id' => $plan->id, 'order_id' => $id, 'amount' => 79000]);
            $this->notify($p, 'settlement')->assertOk();
        }
        $this->assertTrue($u->currentSubscription()->ends_at->between(now()->addDays(58), now()->addDays(63)));
    }

    public function test_checkout_membuat_token_snap(): void
    {
        \Illuminate\Support\Facades\Http::fake(['app.sandbox.midtrans.com/*' => \Illuminate\Support\Facades\Http::response(['token' => 'tok-123', 'redirect_url' => 'https://app.sandbox.midtrans.com/snap/v4/redirection/tok-123'], 201)]);
        $u = $this->parent();
        $plan = $this->plan();
        $this->actingAs($u)->post(route('billing.checkout'), ['plan_id' => $plan->id])->assertSessionHas('pay.snapToken', 'tok-123');
        $p = Payment::firstOrFail();
        $this->assertSame(79000, $p->amount);
        \Illuminate\Support\Facades\Http::assertSent(fn ($r) => $r['transaction_details']['gross_amount'] === 79000 && $r->hasHeader('Authorization'));
    }

    public function test_hanya_admin_membuka_admin(): void
    {
        $this->actingAs($this->parent())->get('/admin')->assertForbidden();
        $admin = User::factory()->create(['role' => 'admin']);
        $this->actingAs($admin)->get('/admin')->assertOk();
        $this->actingAs($admin)->get('/admin/pembayaran')->assertOk();
        $this->actingAs($admin)->get('/admin/pelanggan')->assertOk();
        $this->actingAs($admin)->get('/admin/paket')->assertOk();
    }

    public function test_admin_menambah_masa_langganan(): void
    {
        $admin = User::factory()->create(['role' => 'admin']);
        $u = User::factory()->create(['role' => 'parent']);
        $this->actingAs($admin)->post(route('admin.subscribers.grant', $u), ['days' => 30, 'note' => 'Transfer BCA'])->assertSessionHas('success');
        $this->assertTrue($u->hasAccess());
    }
}
