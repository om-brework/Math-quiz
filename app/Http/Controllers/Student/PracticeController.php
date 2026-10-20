<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\PracticeSession;
use App\Models\SkillMastery;
use App\Models\Topic;
use App\Services\PracticeService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PracticeController extends Controller
{
    /** Mulai sesi latihan baru untuk satu topik. Soal dibuat di peramban dari generator; server mencatat hasil. */
    public function start(Request $request, Topic $topic): Response|RedirectResponse
    {
        $student = $request->user('student');
        abort_unless($topic->has_practice, 404);
        if (! $student->canOpen($topic)) {
            return redirect()->route('siswa.topic', $topic)->with('error', 'Topik ini butuh langganan aktif. Minta orang tua untuk berlangganan.');
        }
        $session = PracticeSession::create(['student_id' => $student->id, 'topic_id' => $topic->id]);

        return Inertia::render('siswa/latihan', [
            'session' => $session->id,
            'topic' => ['id' => $topic->id, 'title' => $topic->title, 'grade' => $topic->grade],
            'size' => (int) config('langkah.session_size'),
            'masteries' => SkillMastery::where('student_id', $student->id)->where('topic_id', $topic->id)->get(['skill', 'level', 'mastery'])->keyBy('skill'),
        ]);
    }

    /** Catat satu soal (dipanggil dengan fetch JSON). Mengembalikan tingkat berikutnya untuk keterampilan itu. */
    public function answer(Request $request, PracticeSession $session, PracticeService $practice): JsonResponse
    {
        abort_unless($session->student_id === $request->user('student')->id && ! $session->finished_at, 403);
        $data = $request->validate([
            'skill' => 'required|string|max:60',
            'level' => 'required|integer|between:1,3',
            'seed' => 'required|integer|min:0',
            'text' => 'required|string|max:5000',
            'correct' => 'required|boolean',
            'hintsUsed' => 'required|integer|min:0',
            'durationMs' => 'required|integer|min:0',
            'steps' => 'required|array|max:20',
            'steps.*.id' => 'required|string|max:60',
            'steps.*.ok' => 'required|boolean',
            'steps.*.tries' => 'required|integer|min:0|max:20',
            'steps.*.revealed' => 'required|boolean',
            'steps.*.errors' => 'present|array|max:10',
            'steps.*.errors.*' => 'string|max:60',
            'steps.*.given' => 'nullable|string|max:255',
        ]);
        abort_if($session->total >= 50, 422, 'Sesi sudah penuh.');
        $m = $practice->record($session, $data);

        return response()->json(['skill' => $m->skill, 'level' => $m->level, 'mastery' => $m->mastery]);
    }

    public function finish(Request $request, PracticeSession $session): RedirectResponse
    {
        abort_unless($session->student_id === $request->user('student')->id, 403);
        $session->update(['finished_at' => $session->finished_at ?? now()]);

        return redirect()->route('siswa.result', $session);
    }

    public function result(Request $request, PracticeSession $session): Response
    {
        abort_unless($session->student_id === $request->user('student')->id, 403);
        $session->load('topic:id,title,grade');
        $errors = $session->attempts()->with('errors')->get()->flatMap->errors->groupBy('code')->map->count();
        $names = \App\Models\ErrorCode::whereIn('code', $errors->keys())->pluck('name', 'code');

        return Inertia::render('siswa/hasil', [
            'session' => ['id' => $session->id, 'total' => $session->total, 'correct' => $session->correct, 'minutes' => (int) round($session->duration_ms / 60000)],
            'topic' => $session->topic,
            'errors' => $errors->map(fn ($n, $code) => ['name' => $names[$code] ?? $code, 'count' => $n])->values(),
            'masteries' => SkillMastery::where('student_id', $session->student_id)->where('topic_id', $session->topic_id)->get(['skill', 'level', 'mastery']),
        ]);
    }
}
