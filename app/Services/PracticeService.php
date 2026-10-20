<?php

namespace App\Services;

use App\Models\Attempt;
use App\Models\PracticeSession;
use App\Models\SkillMastery;
use Illuminate\Support\Facades\DB;

class PracticeService
{
    /**
     * Simpan satu soal yang selesai dikerjakan: percobaan, kode kesalahan per langkah, dan penguasaan keterampilan.
     *
     * @param  array{skill:string, level:int, seed:int, text:string, correct:bool, hintsUsed:int, durationMs:int, steps:array}  $data
     */
    public function record(PracticeSession $session, array $data): SkillMastery
    {
        return DB::transaction(function () use ($session, $data) {
            $attempt = Attempt::create([
                'student_id' => $session->student_id,
                'practice_session_id' => $session->id,
                'topic_id' => $session->topic_id,
                'skill' => $data['skill'],
                'level' => $data['level'],
                'seed' => $data['seed'],
                'question_text' => mb_substr($data['text'], 0, 2000),
                'correct' => $data['correct'],
                'hints_used' => min(255, $data['hintsUsed']),
                'duration_ms' => min(3_600_000, $data['durationMs']),
                'steps' => $data['steps'],
            ]);

            foreach ($data['steps'] as $step) {
                foreach (array_unique($step['errors'] ?? []) as $code) {
                    $attempt->errors()->create([
                        'student_id' => $session->student_id,
                        'topic_id' => $session->topic_id,
                        'skill' => $data['skill'],
                        'step_id' => mb_substr($step['id'], 0, 60),
                        'code' => mb_substr($code, 0, 60),
                        'given' => isset($step['given']) ? mb_substr((string) $step['given'], 0, 255) : null,
                    ]);
                }
            }

            $session->increment('total');
            if ($data['correct']) {
                $session->increment('correct');
            }
            $session->increment('duration_ms', min(3_600_000, $data['durationMs']));

            $m = SkillMastery::firstOrNew(['student_id' => $session->student_id, 'topic_id' => $session->topic_id, 'skill' => $data['skill']]);
            $m->record($data['correct'], $data['level']);
            $m->save();
            $session->student->forceFill(['last_active_at' => now()])->save();

            return $m;
        });
    }
}
