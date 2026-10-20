<?php

namespace App\Services;

use App\Models\Payment;
use App\Models\Subscription;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class SubscriptionService
{
    /** Masa coba gratis untuk orang tua baru (sekali saja). */
    public function startTrial(User $user): ?Subscription
    {
        if ($user->subscriptions()->exists()) {
            return null;
        }

        return $user->subscriptions()->create([
            'status' => 'trial',
            'starts_at' => now(),
            'ends_at' => now()->addDays((int) config('langkah.trial_days')),
            'note' => 'Coba gratis',
        ]);
    }

    /**
     * Pembayaran lunas → perpanjang langganan. Idempoten: pembayaran yang sudah diproses tidak diproses lagi.
     * Masa berlaku baru dimulai dari akhir langganan berbayar yang masih aktif (tidak hangus), atau dari sekarang.
     */
    public function activateFromPayment(Payment $payment): Subscription
    {
        return DB::transaction(function () use ($payment) {
            $payment = Payment::whereKey($payment->id)->lockForUpdate()->firstOrFail();
            if ($payment->subscription_id) {
                return Subscription::findOrFail($payment->subscription_id);
            }
            $user = $payment->user;
            $plan = $payment->plan;
            $current = $user->subscriptions()->where('status', 'active')->where('ends_at', '>', now())->orderByDesc('ends_at')->first();
            $start = $current?->ends_at ?? now();

            // trial yang masih berjalan diakhiri saat langganan berbayar dimulai
            $user->subscriptions()->where('status', 'trial')->where('ends_at', '>', now())->update(['status' => 'expired', 'ends_at' => now()]);

            $sub = $user->subscriptions()->create([
                'plan_id' => $plan->id,
                'status' => 'active',
                'starts_at' => $start,
                'ends_at' => $start->copy()->addMonthsNoOverflow($plan->period_months),
                'note' => "Pembayaran {$payment->order_id}",
            ]);
            $payment->update(['subscription_id' => $sub->id, 'status' => 'paid', 'paid_at' => $payment->paid_at ?? now()]);

            return $sub;
        });
    }

    /** Perpanjangan manual oleh admin (misalnya transfer bank atau kompensasi). */
    public function grant(User $user, int $days, ?int $planId, string $note): Subscription
    {
        $current = $user->subscriptions()->whereIn('status', ['active', 'trial'])->where('ends_at', '>', now())->orderByDesc('ends_at')->first();
        $start = $current?->ends_at ?? now();

        return $user->subscriptions()->create([
            'plan_id' => $planId,
            'status' => 'active',
            'starts_at' => $start,
            'ends_at' => $start->copy()->addDays($days),
            'note' => $note,
        ]);
    }

    /** Tandai langganan yang lewat masa berlaku (dijalankan terjadwal). */
    public function expireOld(): int
    {
        return Subscription::whereIn('status', ['trial', 'active'])->where('ends_at', '<=', now())->update(['status' => 'expired']);
    }
}
