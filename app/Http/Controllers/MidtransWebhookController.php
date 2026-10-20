<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Services\MidtransService;
use App\Services\SubscriptionService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

/** Notifikasi HTTP dari Midtrans (Payment Notification URL: https://domain/midtrans/notifikasi). */
class MidtransWebhookController extends Controller
{
    public function __invoke(Request $request, MidtransService $midtrans, SubscriptionService $subs): JsonResponse
    {
        $n = $request->all();
        if (! $midtrans->validSignature($n)) {
            Log::warning('Midtrans: tanda tangan tidak valid', ['order_id' => $n['order_id'] ?? null]);

            return response()->json(['message' => 'invalid signature'], 403);
        }
        $payment = Payment::where('order_id', $n['order_id'] ?? '')->first();
        if (! $payment) {
            return response()->json(['message' => 'unknown order'], 404);
        }
        if ((int) round((float) ($n['gross_amount'] ?? 0)) !== $payment->amount) {
            Log::warning('Midtrans: jumlah tidak cocok', ['order_id' => $payment->order_id]);

            return response()->json(['message' => 'amount mismatch'], 422);
        }

        $status = $midtrans->mapStatus($n);
        $payment->fill([
            'method' => $n['payment_type'] ?? $payment->method,
            'gateway_transaction_id' => $n['transaction_id'] ?? $payment->gateway_transaction_id,
            'payload' => $n,
        ]);
        // status lunas tidak boleh mundur karena notifikasi yang datang terlambat
        if ($payment->status !== 'paid' || $status === 'refunded') {
            $payment->status = $status;
        }
        if ($status === 'paid' && ! $payment->paid_at) {
            $payment->paid_at = $n['settlement_time'] ?? now();
        }
        $payment->save();

        if ($status === 'paid') {
            $subs->activateFromPayment($payment);
        }
        if ($status === 'refunded' && $payment->subscription_id) {
            \App\Models\Subscription::whereKey($payment->subscription_id)->update(['status' => 'cancelled', 'ends_at' => now()]);
        }

        return response()->json(['message' => 'ok']);
    }
}
