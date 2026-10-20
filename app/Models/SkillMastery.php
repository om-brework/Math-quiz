<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SkillMastery extends Model
{
    protected $guarded = [];

    protected $attributes = ['level' => 1, 'streak' => 0, 'attempts' => 0, 'correct' => 0, 'recent' => '', 'mastery' => 0];

    /**
     * Catat satu hasil soal dan tentukan tingkat berikutnya:
     * 3 benar berturut-turut → naik tingkat, 2 salah dari 3 terakhir → turun tingkat.
     * Penguasaan = persentase benar dari 10 soal terakhir, dibobot tingkat (tingkat 3 dihitung penuh).
     */
    public function record(bool $correct, int $level): void
    {
        $this->attempts++;
        $this->correct += $correct ? 1 : 0;
        $this->recent = substr($this->recent.($correct ? '1' : '0'), -10);
        $this->streak = $correct ? $this->streak + 1 : 0;

        $last3 = substr($this->recent, -3);
        if ($this->streak >= 3 && $this->level < 3) {
            $this->level++;
            $this->streak = 0;
        } elseif (strlen($last3) === 3 && substr_count($last3, '0') >= 2 && $this->level > 1) {
            $this->level--;
            $this->streak = 0;
        }

        $rate = substr_count($this->recent, '1') / max(1, strlen($this->recent));
        $weight = [1 => 0.6, 2 => 0.85, 3 => 1.0][max(1, min(3, $level))];
        $confidence = min(1, strlen($this->recent) / 5); // butuh minimal 5 soal untuk nilai penuh
        $this->mastery = (int) round(100 * $rate * $weight * $confidence);
    }
}
