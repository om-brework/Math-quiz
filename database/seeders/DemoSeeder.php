<?php

namespace Database\Seeders;

use App\Models\Attempt;
use App\Models\Payment;
use App\Models\Plan;
use App\Models\PracticeSession;
use App\Models\SkillMastery;
use App\Models\Student;
use App\Models\User;
use App\Services\SubscriptionService;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

/**
 * Data contoh untuk pengembangan lokal (php artisan db:seed).
 * Login: admin@langkah.test / password, ortu@langkah.test / password, siswa: putu / 1234.
 */
class DemoSeeder extends Seeder
{
    public function run(): void
    {
        mt_srand(42);
        $subs = app(SubscriptionService::class);

        User::updateOrCreate(['email' => 'admin@langkah.test'], ['name' => 'Admin Langkah', 'role' => 'admin', 'password' => 'password', 'email_verified_at' => now()]);

        $parent = User::updateOrCreate(['email' => 'ortu@langkah.test'], ['name' => 'Nyoman', 'role' => 'parent', 'phone' => '081234567890', 'password' => 'password', 'email_verified_at' => now()]);
        $plan = Plan::where('slug', 'bulanan')->first();
        if ($plan && ! $parent->payments()->exists()) {
            $p = $parent->payments()->create(['plan_id' => $plan->id, 'order_id' => 'LKH-DEMO-0001', 'amount' => $plan->price, 'status' => 'pending', 'method' => 'qris', 'paid_at' => now()->subDays(12), 'created_at' => now()->subDays(12)]);
            $subs->activateFromPayment($p);
        }
        $putu = $parent->students()->updateOrCreate(['username' => 'putu'], ['name' => 'Putu', 'grade' => 'sd3', 'pin' => '1234', 'avatar' => 'roket']);
        $parent->students()->updateOrCreate(['username' => 'kadek'], ['name' => 'Kadek', 'grade' => 'sd1', 'pin' => '1234', 'avatar' => 'kucing']);

        // Orang tua lain untuk halaman admin
        $names = ['Siti Rahma', 'Budi Santoso', 'Made Wirawan', 'Rina Kartika', 'Andi Pratama', 'Dewi Lestari', 'Agus Saputra', 'Ketut Ariani'];
        $plans = Plan::orderBy('sort')->get();
        foreach ($names as $i => $name) {
            $u = User::updateOrCreate(['email' => Str::slug($name, '.').'@contoh.id'], ['name' => $name, 'role' => 'parent', 'password' => 'password', 'created_at' => now()->subDays(40 - $i * 4)]);
            if ($u->payments()->exists() || $u->subscriptions()->exists()) {
                continue;
            }
            if ($i % 3 === 2) {
                $subs->startTrial($u);
            } else {
                $pl = $plans[$i % $plans->count()];
                $pay = $u->payments()->create(['plan_id' => $pl->id, 'order_id' => sprintf('LKH-DEMO-%04d', $i + 2), 'amount' => $pl->price, 'status' => 'pending', 'method' => ['qris', 'gopay', 'bank_transfer'][$i % 3], 'paid_at' => now()->subDays($i * 3 + 1), 'created_at' => now()->subDays($i * 3 + 1)]);
                $subs->activateFromPayment($pay);
            }
            if ($i === 4) {
                $u->payments()->create(['plan_id' => $plans[0]->id, 'order_id' => 'LKH-DEMO-PEND', 'amount' => $plans[0]->price, 'status' => 'pending']);
            }
            $u->students()->updateOrCreate(['username' => Str::slug(explode(' ', $name)[0]).'.anak'], ['name' => 'Anak '.explode(' ', $name)[0], 'grade' => ['sd1', 'sd2', 'sd3'][$i % 3], 'pin' => '1234']);
        }

        if (! $putu->attempts()->exists()) {
            $this->history($putu);
        }
    }

    /** Riwayat latihan 30 hari untuk Putu (kelas 3): lemah di meminjam dan porogapit, kuat di perkalian. */
    private function history(Student $s): void
    {
        $plan = [
            // topik, keterampilan, peluang benar, kode kesalahan yang mungkin
            ['sd3-02-tambah-kurang-bersusun-4-angka', 'kurang-susun', 0.55, ['lupa-pinjam', 'salah-pinjam-lewat-nol', 'kurang-terbalik']],
            ['sd3-02-tambah-kurang-bersusun-4-angka', 'tambah-susun', 0.85, ['lupa-simpan']],
            ['sd3-05-pembagian-bersusun', 'porogapit', 0.5, ['lupa-nol-hasil-bagi', 'tebakan-bagi-kebesaran', 'salah-kurang-porogapit']],
            ['sd3-05-pembagian-bersusun', 'cerita-sisa', 0.6, ['salah-tafsir-sisa']],
            ['sd3-03-perkalian-6-7-8-9', 'kali-dobel', 0.9, ['salah-fakta-kali']],
            ['sd3-11-luas-keliling', 'luas-atau-keliling', 0.65, ['keliling-luas-tertukar']],
        ];
        for ($day = 29; $day >= 0; $day--) {
            if (mt_rand(0, 9) < 3) {
                continue; // tidak latihan setiap hari
            }
            [$topic, $skill, $p, $codes] = $plan[mt_rand(0, count($plan) - 1)];
            $p = min(0.95, $p + (29 - $day) * 0.008); // pelan-pelan membaik
            $at = now()->subDays($day)->setTime(18 + mt_rand(0, 2), mt_rand(0, 59));
            $session = PracticeSession::create(['student_id' => $s->id, 'topic_id' => $topic, 'created_at' => $at, 'updated_at' => $at, 'finished_at' => $at->copy()->addMinutes(12)]);
            $m = SkillMastery::firstOrNew(['student_id' => $s->id, 'topic_id' => $topic, 'skill' => $skill]);
            for ($q = 0; $q < 10; $q++) {
                $ok = mt_rand() / mt_getrandmax() < $p;
                $code = $codes[mt_rand(0, count($codes) - 1)];
                $level = $m->level ?? 1;
                $a = Attempt::create([
                    'student_id' => $s->id, 'practice_session_id' => $session->id, 'topic_id' => $topic, 'skill' => $skill, 'level' => $level,
                    'seed' => mt_rand(1, 1_000_000), 'question_text' => $this->sampleText($skill), 'correct' => $ok, 'hints_used' => $ok ? 0 : 1,
                    'duration_ms' => mt_rand(30, 120) * 1000, 'created_at' => $at->copy()->addMinutes($q),
                    'steps' => [['id' => 'langkah', 'ok' => $ok, 'tries' => $ok ? 1 : 2, 'revealed' => false, 'errors' => $ok ? [] : [$code]]],
                ]);
                if (! $ok) {
                    $a->errors()->create(['student_id' => $s->id, 'topic_id' => $topic, 'skill' => $skill, 'step_id' => 'langkah', 'code' => $code, 'given' => (string) mt_rand(10, 99), 'created_at' => $a->created_at]);
                }
                $m->record($ok, $level);
                $session->total++;
                $session->correct += $ok ? 1 : 0;
                $session->duration_ms += $a->duration_ms;
            }
            $m->save();
            $session->save();
            $s->update(['last_active_at' => $at]);
        }
    }

    private function sampleText(string $skill): string
    {
        return match ($skill) {
            'kurang-susun' => 'Hitung $4.003 - 1.578$ dengan cara bersusun.',
            'tambah-susun' => 'Hitung $2.465 + 3.879$ dengan cara bersusun.',
            'porogapit' => 'Hitung $412 \div 4$ dengan cara bersusun.',
            'cerita-sisa' => 'Ada 130 siswa naik bus mini. Satu bus memuat 8 siswa. Berapa bus yang dibutuhkan?',
            'kali-dobel' => 'Hitung $8 \times 7$ dengan strategi dobel.',
            default => 'Kebun Pak Made berukuran 12 m × 8 m. Berapa panjang pagar yang dibutuhkan?',
        };
    }
}
