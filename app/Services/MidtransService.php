<?php

namespace App\Services;

use App\Models\Payment;
use Illuminate\Support\Facades\Http;
use RuntimeException;

/** Integrasi Midtrans Snap: buat transaksi, verifikasi notifikasi, petakan status. */
class MidtransService
{
    public function configured(): bool
    {
        return filled(config('services.midtrans.server_key')) && filled(config('services.midtrans.client_key'));
    }

    public function snapJsUrl(): string
    {
        return config('services.midtrans.is_production')
            ? 'https://app.midtrans.com/snap/snap.js'
            : 'https://app.sandbox.midtrans.com/snap/snap.js';
    }

    private function snapApi(): string
    {
        return config('services.midtrans.is_production')
            ? 'https://app.midtrans.com/snap/v1/transactions'
            : 'https://app.sandbox.midtrans.com/snap/v1/transactions';
    }

    /** @return array{token: string, redirect_url: string} */
    public function createTransaction(Payment $payment): array
    {
        $user = $payment->user;
        $response = Http::withBasicAuth((string) config('services.midtrans.server_key'), '')
            ->acceptJson()
            ->timeout(20)
            ->post($this->snapApi(), [
                'transaction_details' => ['order_id' => $payment->order_id, 'gross_amount' => $payment->amount],
                'item_details' => [[
                    'id' => $payment->plan->slug,
                    'price' => $payment->amount,
                    'quantity' => 1,
                    'name' => mb_substr("Langganan {$payment->plan->name}", 0, 50),
                ]],
                'customer_details' => ['first_name' => $user->name, 'email' => $user->email, 'phone' => $user->phone],
                'callbacks' => ['finish' => route('billing.finish')],
                'expiry' => ['unit' => 'hour', 'duration' => 24],
            ]);

        if (! $response->successful() || ! $response->json('token')) {
            throw new RuntimeException('Midtrans menolak transaksi: '.$response->body());
        }

        return ['token' => $response->json('token'), 'redirect_url' => $response->json('redirect_url')];
    }

    /** signature_key = SHA512(order_id + status_code + gross_amount + server_key) */
    public function validSignature(array $n): bool
    {
        $expected = hash('sha512', ($n['order_id'] ?? '').($n['status_code'] ?? '').($n['gross_amount'] ?? '').config('services.midtrans.server_key'));

        return isset($n['signature_key']) && hash_equals($expected, (string) $n['signature_key']);
    }

    /** Petakan status Midtrans ke status pembayaran kita. */
    public function mapStatus(array $n): string
    {
        $status = $n['transaction_status'] ?? '';
        $fraud = $n['fraud_status'] ?? 'accept';

        return match (true) {
            $status === 'capture' && $fraud === 'accept', $status === 'settlement' => 'paid',
            $status === 'capture' && $fraud === 'challenge' => 'pending',
            $status === 'pending' => 'pending',
            $status === 'expire' => 'expired',
            in_array($status, ['refund', 'partial_refund'], true) => 'refunded',
            in_array($status, ['deny', 'cancel', 'failure'], true) => 'failed',
            default => 'pending',
        };
    }
}
