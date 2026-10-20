<?php

namespace App\Http\Controllers\Ortu;

use App\Http\Controllers\Controller;
use App\Models\Attempt;
use App\Models\Topic;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(Request $request): Response
    {
        $user = $request->user();
        $sub = $user->currentSubscription();
        $students = $user->students()->orderBy('name')->get()->map(function ($s) {
            $week = Attempt::where('student_id', $s->id)->where('created_at', '>=', now()->subDays(7));
            $total = (clone $week)->count();
            $correct = (clone $week)->where('correct', true)->count();

            return [
                'id' => $s->id, 'name' => $s->name, 'grade' => $s->grade, 'gradeName' => Topic::GRADES[$s->grade] ?? $s->grade,
                'username' => $s->username, 'avatar' => $s->avatar,
                'lastActive' => $s->last_active_at?->toIso8601String(),
                'week' => ['questions' => $total, 'accuracy' => $total ? (int) round(100 * $correct / $total) : null],
            ];
        });

        return Inertia::render('orang-tua/dashboard', [
            'students' => $students,
            'subscription' => $sub ? [
                'status' => $sub->status, 'plan' => $sub->plan?->name, 'endsAt' => $sub->ends_at->toIso8601String(),
                'daysLeft' => (int) ceil(now()->floatDiffInDays($sub->ends_at)),
            ] : null,
            'maxStudents' => $user->maxStudents(),
            'grades' => Topic::GRADES,
        ]);
    }
}
