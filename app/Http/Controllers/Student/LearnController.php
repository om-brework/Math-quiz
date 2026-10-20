<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\SkillMastery;
use App\Models\Topic;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LearnController extends Controller
{
    /** Peta topik satu kelas, dengan penguasaan siswa per topik. */
    public function home(Request $request): Response
    {
        $student = $request->user('student');
        $grade = array_key_exists((string) $request->query('kelas'), Topic::GRADES) ? $request->query('kelas') : $student->grade;
        $access = $student->parent->hasAccess();
        $mastery = SkillMastery::where('student_id', $student->id)->get()->groupBy('topic_id')->map(fn ($ms) => (int) round($ms->avg('mastery')));

        return Inertia::render('siswa/beranda', [
            'grade' => $grade,
            'grades' => Topic::GRADES,
            'hasAccess' => $access,
            'topics' => Topic::where('grade', $grade)->orderBy('number')->get(['id', 'number', 'title', 'scope', 'minutes', 'has_practice', 'is_free'])
                ->map(fn (Topic $t) => [
                    'id' => $t->id, 'number' => $t->number, 'title' => $t->title, 'scope' => $t->scope, 'minutes' => $t->minutes,
                    'hasPractice' => $t->has_practice, 'locked' => ! $t->is_free && ! $access, 'mastery' => $mastery[$t->id] ?? null,
                ]),
        ]);
    }

    public function topic(Request $request, Topic $topic): Response
    {
        $student = $request->user('student');
        $locked = ! $student->canOpen($topic);
        $siblings = Topic::where('grade', $topic->grade)->orderBy('number')->get(['id', 'number', 'title']);
        $i = $siblings->search(fn ($t) => $t->id === $topic->id);

        return Inertia::render('siswa/materi', [
            'topic' => [
                'id' => $topic->id, 'title' => $topic->title, 'grade' => $topic->grade, 'gradeName' => Topic::GRADES[$topic->grade],
                'number' => $topic->number, 'minutes' => $topic->minutes, 'hasPractice' => $topic->has_practice, 'moe' => $topic->moe,
                'body' => $locked ? null : $topic->body,
                'prerequisites' => Topic::whereIn('id', $topic->prerequisites ?? [])->get(['id', 'title']),
            ],
            'locked' => $locked,
            'prev' => $i > 0 ? $siblings[$i - 1]->only(['id', 'title']) : null,
            'next' => $i !== false && $i < $siblings->count() - 1 ? $siblings[$i + 1]->only(['id', 'title']) : null,
        ]);
    }
}
