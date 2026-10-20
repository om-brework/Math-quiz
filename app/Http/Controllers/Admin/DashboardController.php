<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Attempt;
use App\Models\Payment;
use App\Models\Student;
use App\Models\Subscription;
use App\Models\Topic;
use App\Models\User;
use Carbon\CarbonImmutable;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(): Response
    {
        $active = Subscription::where('status', 'active')->where('ends_at', '>', now())->with('plan')->get();
        $paid30 = Payment::where('status', 'paid')->where('paid_at', '>=', now()->subDays(30))->get(['amount', 'paid_at']);

        $revenue = [];
        for ($i = 29; $i >= 0; $i--) {
            $d = CarbonImmutable::now()->subDays($i)->toDateString();
            $revenue[] = ['date' => $d, 'amount' => (int) $paid30->filter(fn ($p) => $p->paid_at->toDateString() === $d)->sum('amount')];
        }

        return Inertia::render('admin/dashboard', [
            'stats' => [
                'parents' => User::where('role', 'parent')->count(),
                'students' => Student::count(),
                'activeSubscribers' => $active->pluck('user_id')->unique()->count(),
                'trials' => Subscription::where('status', 'trial')->where('ends_at', '>', now())->count(),
                // pendapatan bulanan berulang: harga paket dibagi lama periode, untuk tiap langganan aktif
                'mrr' => (int) round($active->sum(fn ($s) => $s->plan ? $s->plan->price / max(1, $s->plan->period_months) : 0)),
                'revenue30' => (int) $paid30->sum('amount'),
                'signups30' => User::where('role', 'parent')->where('created_at', '>=', now()->subDays(30))->count(),
                'pendingPayments' => Payment::where('status', 'pending')->where('created_at', '>=', now()->subDay())->count(),
                'questions7' => Attempt::where('created_at', '>=', now()->subDays(7))->count(),
                'expiringSoon' => Subscription::where('status', 'active')->whereBetween('ends_at', [now(), now()->addDays(7)])->count(),
            ],
            'revenue' => $revenue,
            'content' => ['topics' => Topic::count(), 'withPractice' => Topic::where('has_practice', true)->count()],
            'recentPayments' => Payment::with('user:id,name,email', 'plan:id,name')->latest()->take(8)->get()->map(fn ($p) => [
                'id' => $p->id, 'orderId' => $p->order_id, 'user' => $p->user?->name, 'plan' => $p->plan?->name, 'amount' => $p->amount, 'status' => $p->status, 'createdAt' => $p->created_at->toIso8601String(),
            ]),
        ]);
    }
}
