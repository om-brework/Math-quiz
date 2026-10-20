<?php

namespace App\Services;

use App\Models\Attempt;
use App\Models\AttemptError;
use App\Models\ErrorCode;
use App\Models\PracticeSession;
use App\Models\SkillMastery;
use App\Models\Student;
use App\Models\Topic;
use Carbon\CarbonImmutable;

/** Laporan per anak untuk orang tua: ringkasan, kesalahan yang sering terjadi, keterampilan lemah, dan saran. */
class ReportService
{
    public function build(Student $student, int $days = 30): array
    {
        $from = CarbonImmutable::now()->subDays($days)->startOfDay();
        $skillNames = $this->skillNames();
        $topics = Topic::query()->get(['id', 'title', 'grade', 'number'])->keyBy('id');

        $attempts = Attempt::where('student_id', $student->id)->where('created_at', '>=', $from)
            ->get(['id', 'topic_id', 'skill', 'level', 'correct', 'duration_ms', 'created_at', 'question_text']);
        $total = $attempts->count();
        $correct = $attempts->where('correct', true)->count();

        // Ringkasan
        $summary = [
            'questions' => $total,
            'accuracy' => $total ? (int) round(100 * $correct / $total) : null,
            'minutes' => (int) round($attempts->sum('duration_ms') / 60000),
            'activeDays' => $attempts->groupBy(fn ($a) => $a->created_at->toDateString())->count(),
            'sessions' => PracticeSession::where('student_id', $student->id)->where('created_at', '>=', $from)->where('total', '>', 0)->count(),
            'streak' => $this->streak($student),
        ];

        // Aktivitas harian (14 hari terakhir)
        $daily = [];
        for ($i = 13; $i >= 0; $i--) {
            $d = CarbonImmutable::now()->subDays($i)->toDateString();
            $day = $attempts->filter(fn ($a) => $a->created_at->toDateString() === $d);
            $daily[] = ['date' => $d, 'questions' => $day->count(), 'correct' => $day->where('correct', true)->count()];
        }

        // Kesalahan yang paling sering: kode → nama, penjelasan, saran, contoh terakhir
        $errorRows = AttemptError::where('student_id', $student->id)->where('created_at', '>=', $from)->get();
        $codes = ErrorCode::whereIn('code', $errorRows->pluck('code')->unique())->get()->keyBy('code');
        $attemptText = Attempt::whereIn('id', $errorRows->pluck('attempt_id')->unique())->pluck('question_text', 'id');
        $errors = $errorRows->groupBy('code')->map(function ($rows, $code) use ($codes, $topics, $attemptText, $skillNames) {
            $last = $rows->sortByDesc('id')->first();
            $c = $codes[$code] ?? null;

            return [
                'code' => $code,
                'count' => $rows->count(),
                'name' => $c?->name ?? $code,
                'category' => $c?->category ?? 'Lainnya',
                'explanation' => $c?->explanation,
                'advice' => $c?->advice,
                'topics' => $rows->pluck('topic_id')->unique()->map(fn ($t) => ['id' => $t, 'title' => $topics[$t]->title ?? $t])->values(),
                'example' => ['question' => $attemptText[$last->attempt_id] ?? null, 'given' => $last->given, 'skill' => $skillNames[$last->topic_id][$last->skill] ?? $last->skill],
            ];
        })->sortByDesc('count')->values()->take(8);

        // Penguasaan per topik dan keterampilan
        $masteries = SkillMastery::where('student_id', $student->id)->get();
        $byTopic = $masteries->groupBy('topic_id')->map(function ($ms, $topicId) use ($topics, $skillNames, $attempts) {
            $t = $topics[$topicId] ?? null;
            $ta = $attempts->where('topic_id', $topicId);

            return [
                'id' => $topicId,
                'title' => $t->title ?? $topicId,
                'grade' => $t->grade ?? null,
                'mastery' => (int) round($ms->avg('mastery')),
                'questions' => $ms->sum('attempts'),
                'recentAccuracy' => $ta->count() ? (int) round(100 * $ta->where('correct', true)->count() / $ta->count()) : null,
                'lastPracticed' => $ms->max('updated_at')?->toIso8601String(),
                'skills' => $ms->map(fn ($m) => [
                    'code' => $m->skill, 'name' => $skillNames[$topicId][$m->skill] ?? $m->skill,
                    'mastery' => $m->mastery, 'level' => $m->level, 'attempts' => $m->attempts,
                ])->sortBy('mastery')->values(),
            ];
        })->sortBy([['grade', 'asc'], ['id', 'asc']])->values();

        $weak = $masteries->filter(fn ($m) => $m->attempts >= 3 && $m->mastery < 60)->sortBy('mastery')->take(5)
            ->map(fn ($m) => [
                'topic' => $m->topic_id, 'topicTitle' => $topics[$m->topic_id]->title ?? $m->topic_id,
                'skill' => $skillNames[$m->topic_id][$m->skill] ?? $m->skill, 'mastery' => $m->mastery, 'level' => $m->level,
            ])->values();
        $strong = $masteries->filter(fn ($m) => $m->mastery >= 80)->sortByDesc('mastery')->take(5)
            ->map(fn ($m) => ['topicTitle' => $topics[$m->topic_id]->title ?? $m->topic_id, 'skill' => $skillNames[$m->topic_id][$m->skill] ?? $m->skill, 'mastery' => $m->mastery])->values();

        return [
            'periodDays' => $days,
            'summary' => $summary,
            'daily' => $daily,
            'errors' => $errors,
            'topics' => $byTopic,
            'weak' => $weak,
            'strong' => $strong,
            'recommendations' => $this->recommend($summary, $errors->all(), $weak->all(), $student),
        ];
    }

    /** Saran yang bisa langsung dilakukan orang tua, urut dari yang paling berdampak. */
    private function recommend(array $summary, array $errors, array $weak, Student $student): array
    {
        $out = [];
        if ($summary['questions'] === 0) {
            return [['title' => 'Mulai latihan rutin', 'body' => "{$student->name} belum mengerjakan latihan pada periode ini. Ajak latihan 10–15 menit sehari di jam yang sama, misalnya setelah makan malam."]];
        }
        foreach (array_slice($errors, 0, 2) as $e) {
            if ($e['count'] >= 2 && $e['advice']) {
                $out[] = ['title' => "Perbaiki: {$e['name']}", 'body' => $e['advice'], 'topic' => $e['topics'][0]['id'] ?? null];
            }
        }
        foreach (array_slice($weak, 0, 2) as $w) {
            $out[] = ['title' => "Ulangi materi {$w['topicTitle']}", 'body' => "Penguasaan \"{$w['skill']}\" baru {$w['mastery']}%. Baca lagi bagian contoh langkah demi langkah, lalu latihan sampai naik ke tingkat berikutnya.", 'topic' => $w['topic']];
        }
        if ($summary['activeDays'] < 3 && $summary['questions'] > 0) {
            $out[] = ['title' => 'Latihan lebih sering, lebih singkat', 'body' => 'Latihan 10 menit setiap hari lebih efektif daripada satu jam seminggu sekali.'];
        }
        if (($summary['accuracy'] ?? 0) >= 85 && count($weak) === 0) {
            $out[] = ['title' => 'Siap naik tantangan', 'body' => "{$student->name} sudah sangat lancar. Coba topik berikutnya atau soal tingkat 3."];
        }

        return array_slice($out, 0, 4);
    }

    /** Hari berturut-turut ada latihan, sampai hari ini atau kemarin. */
    private function streak(Student $student): int
    {
        $days = Attempt::where('student_id', $student->id)->where('created_at', '>=', now()->subDays(60))
            ->pluck('created_at')->map(fn ($d) => $d->toDateString())->unique()->flip();
        $n = 0;
        $d = CarbonImmutable::now();
        if (! isset($days[$d->toDateString()])) {
            $d = $d->subDay();
        }
        while (isset($days[$d->toDateString()])) {
            $n++;
            $d = $d->subDay();
        }

        return $n;
    }

    /** topik → kode keterampilan → nama, dari content/latihan.json */
    public function skillNames(): array
    {
        static $cache = null;
        if ($cache === null) {
            $raw = json_decode((string) file_get_contents(base_path('content/latihan.json')), true) ?: [];
            $cache = array_map(fn ($skills) => array_column($skills, 'name', 'code'), $raw);
        }

        return $cache;
    }
}
