<?php

namespace App\Console\Commands;

use App\Models\ErrorCode;
use App\Models\Topic;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

/** Impor kurikulum, materi, kode kesalahan, dan daftar latihan dari folder content/ ke database. */
class ImportContent extends Command
{
    protected $signature = 'konten:impor';

    protected $description = 'Impor kurikulum, materi, dan kode kesalahan dari folder content/';

    public function handle(): int
    {
        $base = base_path('content');
        $kurikulum = json_decode(file_get_contents("$base/kurikulum.json"), true, flags: JSON_THROW_ON_ERROR);
        $latihan = json_decode(file_get_contents("$base/latihan.json"), true, flags: JSON_THROW_ON_ERROR);
        $free = (int) config('langkah.free_topics_per_grade');

        DB::transaction(function () use ($kurikulum, $latihan, $free, $base) {
            $ids = [];
            foreach ($kurikulum['jenjang'] as $grade) {
                foreach ($grade['topik'] as $i => $t) {
                    $file = "$base/materi/{$grade['id']}/{$t['id']}.md";
                    if (! is_file($file)) {
                        $this->warn("Materi belum ada: {$t['id']}");
                        continue;
                    }
                    [$meta, $body] = self::frontmatter(file_get_contents($file));
                    Topic::updateOrCreate(['id' => $t['id']], [
                        'grade' => $grade['id'],
                        'number' => $i + 1,
                        'title' => $t['judul'],
                        'scope' => $t['cakupan'],
                        'moe' => $meta['moe'] ?? null,
                        'prerequisites' => $meta['prasyarat'] ?? [],
                        'minutes' => (int) ($meta['durasi_menit'] ?? 30),
                        'has_practice' => isset($latihan[$t['id']]),
                        'is_free' => $i < $free,
                        'body' => $body,
                    ]);
                    $ids[] = $t['id'];
                }
            }
            Topic::whereNotIn('id', $ids)->delete();

            foreach (glob("$base/kesalahan/*.json") as $f) {
                foreach (json_decode(file_get_contents($f), true, flags: JSON_THROW_ON_ERROR) as $code => $e) {
                    ErrorCode::updateOrCreate(['code' => $code], [
                        'name' => $e['nama'], 'category' => $e['kategori'], 'explanation' => $e['penjelasan'], 'advice' => $e['saran'],
                    ]);
                }
            }
        });

        $this->info(sprintf('%d topik (%d dengan latihan), %d kode kesalahan.', Topic::count(), Topic::where('has_practice', true)->count(), ErrorCode::count()));

        return self::SUCCESS;
    }

    /** Frontmatter sederhana: "kunci: nilai", "kunci: [a, b]", nilai boleh berkutip. */
    public static function frontmatter(string $text): array
    {
        if (! preg_match('/\A---\R(.*?)\R---\R(.*)\z/s', $text, $m)) {
            return [[], $text];
        }
        $meta = [];
        foreach (preg_split('/\R/', $m[1]) as $line) {
            if (! preg_match('/^([a-z_]+):\s*(.*)$/', $line, $kv)) {
                continue;
            }
            $v = trim($kv[2]);
            if (str_starts_with($v, '[')) {
                $v = array_values(array_filter(array_map(fn ($x) => trim($x, " \"'"), explode(',', trim($v, '[]')))));
            } else {
                $v = trim($v, "\"'");
            }
            $meta[$kv[1]] = $v;
        }

        return [$meta, ltrim($m[2])];
    }
}
