<?php

namespace App\Http\Controllers\Ortu;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use App\Models\Plan;
use App\Services\MidtransService;
use App\Services\SubscriptionService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

class BillingController extends Controller
{
    public function index(Request $request, MidtransService $midtrans): Response
    {
        $user = $request->user();
        $sub = $user->currentSubscription();

        return Inertia::render('orang-tua/langganan', [
            'plans' => Plan::where('is_active', true)->orderBy('sort')->get()->map(fn (Plan $p) => [
                'id' => $p->id, 'name' => $p->name, 'description' => $p->description, 'price' => $p->price, 'monthly' => $p->monthlyPrice(),
                'months' => $p->period_months, 'maxStudents' => $p->max_students, 'features' => $p->features ?? [],
            ]),
            'subscription' => $sub ? ['status' => $sub->status, 'plan' => $sub->plan?->name, 'endsAt' => $sub->ends_at->toIso8601String()] : null,
            'payments' => $user->payments()->with('plan:id,name')->latest()->take(20)->get()->map(fn (Payment $p) => [
                'id' => $p->id, 'orderId' => $p->order_id, 'plan' => $p->plan?->name, 'amount' => $p->amount, 'status' => $p->status,
                'method' => $p->method, 'createdAt' => $p->created_at->toIso8601String(), 'paidAt' => $p->paid_at?->toIso8601String(),
                'snapToken' => $p->status === 'pending' ? $p->snap_token : null,
            ]),
            'midtrans' => ['configured' => $midtrans->configured(), 'clientKey' => config('services.midtrans.client_key'), 'snapJs' => $midtrans->snapJsUrl()],
            'canSimulate' => app()->environment('local') && ! $midtrans->configured(),
        ]);
    }

    /** Buat pesanan dan token Snap. Halaman langganan lalu membuka popup pembayaran Midtrans. */
    public function checkout(Request $request, MidtransService $midtrans): RedirectResponse
    {
        $plan = Plan::where('is_active', true)->findOrFail($request->validate(['plan_id' => 'required|integer'])['plan_id']);
        $user = $request->user();
        $payment = $user->payments()->create([
            'plan_id' => $plan->id,
            'order_id' => 'LKH-'.now()->format('ymd').'-'.Str::upper(Str::random(8)),
            'amount' => $plan->price,
            'status' => 'pending',
        ]);

        if (! $midtrans->configured()) {
            return back()->with('error', 'Pembayaran online belum diaktifkan. Hubungi admin.')->with('pay', ['paymentId' => $payment->id]);
        }
        try {
            $snap = $midtrans->createTransaction($payment);
        } catch (Throwable $e) {
            report($e);
            $payment->update(['status' => 'failed']);

            return back()->with('error', 'Gagal menghubungi Midtrans. Coba beberapa saat lagi.');
        }
        $payment->update(['snap_token' => $snap['token'], 'redirect_url' => $snap['redirect_url']]);

        return back()->with('pay', ['snapToken' => $snap['token'], 'redirectUrl' => $snap['redirect_url'], 'orderId' => $payment->order_id]);
    }

    /** Halaman kembali dari Midtrans. Status sebenarnya ditentukan oleh notifikasi server-ke-server. */
    public function finish(Request $request): RedirectResponse
    {
        $payment = $request->user()->payments()->where('order_id', (string) $request->query('order_id'))->first();
        $msg = match ($payment?->status) {
            'paid' => 'Pembayaran berhasil. Terima kasih! Langganan sudah aktif.',
            null => 'Kembali dari halaman pembayaran.',
            default => 'Pembayaran sedang diproses. Status akan diperbarui otomatis setelah Midtrans mengonfirmasi.',
        };

        return redirect()->route('billing.index')->with('success', $msg);
    }

    /** Hanya di lokal tanpa kunci Midtrans: tandai lunas untuk menguji alur. */
    public function simulate(Request $request, Payment $payment, SubscriptionService $subs, MidtransService $midtrans): RedirectResponse
    {
        abort_unless(app()->environment('local') && ! $midtrans->configured(), 404);
        abort_unless($payment->user_id === $request->user()->id && $payment->status === 'pending', 403);
        $payment->update(['method' => 'simulasi', 'paid_at' => now()]);
        $subs->activateFromPayment($payment);

        return back()->with('success', 'Simulasi: pembayaran lunas, langganan aktif.');
    }
}
