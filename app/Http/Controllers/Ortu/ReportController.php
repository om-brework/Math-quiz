<?php

namespace App\Http\Controllers\Ortu;

use App\Http\Controllers\Controller;
use App\Models\Student;
use App\Models\Topic;
use App\Services\ReportService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ReportController extends Controller
{
    public function show(Request $request, Student $student, ReportService $reports): Response
    {
        abort_unless($student->parent_id === $request->user()->id || $request->user()->isAdmin(), 403);
        $days = in_array((int) $request->query('hari'), [7, 30, 90], true) ? (int) $request->query('hari') : 30;

        return Inertia::render('orang-tua/laporan', [
            'student' => ['id' => $student->id, 'name' => $student->name, 'grade' => $student->grade, 'gradeName' => Topic::GRADES[$student->grade] ?? $student->grade, 'avatar' => $student->avatar],
            'report' => $reports->build($student, $days),
        ]);
    }
}
