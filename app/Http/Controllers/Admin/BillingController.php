<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use App\Models\Plan;
use App\Models\Subscription;
use App\Models\User;
use App\Services\SubscriptionService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BillingController extends Controller
{
    public function payments(Request $request): Response
    {
        $status = $request->query('status');
        $q = trim((string) $request->query('q'));

        return Inertia::render('admin/pembayaran', [
            'filters' => ['status' => $status, 'q' => $q],
            'payments' => Payment::with('user:id,name,email', 'plan:id,name')
                ->when($status, fn ($w) => $w->where('status', $status))
                ->when($q !== '', fn ($w) => $w->where(fn ($x) => $x->where('order_id', 'like', "%$q%")->orWhereHas('user', fn ($u) => $u->where('email', 'like', "%$q%")->orWhere('name', 'like', "%$q%"))))
                ->latest()->paginate(25)->withQueryString()
                ->through(fn ($p) => [
                    'id' => $p->id, 'orderId' => $p->order_id, 'user' => $p->user?->only(['id', 'name', 'email']), 'plan' => $p->plan?->name,
                    'amount' => $p->amount, 'status' => $p->status, 'method' => $p->method,
                    'createdAt' => $p->created_at->toIso8601String(), 'paidAt' => $p->paid_at?->toIso8601String(),
                ]),
            'totals' => [
                'paid' => (int) Payment::where('status', 'paid')->sum('amount'),
                'paidCount' => Payment::where('status', 'paid')->count(),
            ],
        ]);
    }

    public function subscribers(Request $request): Response
    {
        $q = trim((string) $request->query('q'));
        $users = User::where('role', 'parent')
            ->when($q !== '', fn ($w) => $w->where(fn ($x) => $x->where('email', 'like', "%$q%")->orWhere('name', 'like', "%$q%")))
            ->withCount('students')
            ->latest()->paginate(25)->withQueryString()
            ->through(function (User $u) {
                $sub = $u->currentSubscription();

                return [
                    'id' => $u->id, 'name' => $u->name, 'email' => $u->email, 'phone' => $u->phone, 'students' => $u->students_count,
                    'createdAt' => $u->created_at->toIso8601String(),
                    'subscription' => $sub ? ['status' => $sub->status, 'plan' => $sub->plan?->name, 'endsAt' => $sub->ends_at->toIso8601String()] : null,
                    'paid' => (int) $u->payments()->where('status', 'paid')->sum('amount'),
                ];
            });

        return Inertia::render('admin/pelanggan', [
            'filters' => ['q' => $q],
            'users' => $users,
            'plans' => Plan::orderBy('sort')->get(['id', 'name']),
        ]);
    }

    /** Tambah masa langganan secara manual (transfer bank, kompensasi, sekolah mitra). */
    public function grant(Request $request, User $user, SubscriptionService $subs): RedirectResponse
    {
        $data = $request->validate(['days' => 'required|integer|between:1,730', 'plan_id' => 'nullable|exists:plans,id', 'note' => 'required|string|max:200']);
        $subs->grant($user, $data['days'], $data['plan_id'] ?? null, 'Manual: '.$data['note'].' (oleh '.$request->user()->email.')');

        return back()->with('success', "Langganan {$user->name} ditambah {$data['days']} hari.");
    }

    public function cancel(Request $request, Subscription $subscription): RedirectResponse
    {
        $subscription->update(['status' => 'cancelled', 'ends_at' => now(), 'note' => trim(($subscription->note ?? '').' · dibatalkan oleh '.$request->user()->email)]);

        return back()->with('success', 'Langganan dibatalkan.');
    }
}
