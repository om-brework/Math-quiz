/* Soal interaktif di dalam materi (blok ```soal): dikerjakan langkah demi langkah dengan QuestionPlayer.
 * Jawaban tidak pernah langsung tampak: setiap langkah harus dicoba dulu; petunjuk muncul setelah salah,
 * dan jawaban baru ditunjukkan setelah 3 kali salah.
 *
 *   ```soal
 *   {"title": "Contoh 2", "text": "Hitung $47 + 38$.", "steps": [
 *     {"kind": "number", "prompt": "Satuan: 7 + 8 = ?", "answer": "15", "hint": "...", "explain": "..."},
 *     {"kind": "column", "op": "+", "a": 47, "b": 38, "prompt": "Kerjakan bersusun.", "hint": "...", "explain": "..."}
 *   ], "conclusion": "Jadi 47 + 38 = 85."}
 *   ```
 *
 * `id` dan `error` boleh dihilangkan (diisi otomatis). Hasilnya tidak dikirim ke server.
 */
import { PencilLine, RotateCcw } from 'lucide-react';
import { useMemo, useState } from 'react';
import { QuestionPlayer } from '../QuestionPlayer';
import type { Question, Step, Visual } from '../types';

export interface SoalSpec {
    title?: string;
    text: string;
    visual?: Visual;
    steps: (Partial<Pick<Step, 'id'>> & Record<string, unknown>)[];
    conclusion: string;
}

/** Lengkapi id dan kode kesalahan yang tidak ditulis di materi. */
export function toQuestion(spec: SoalSpec): Question {
    const steps = spec.steps.map((s, i) => ({ id: `l${i + 1}`, error: 'salah-langkah-materi', ...s })) as Step[];
    return { topic: 'materi', skill: 'materi', level: 1, seed: 0, text: spec.text, visual: spec.visual, steps, conclusion: spec.conclusion };
}

export function SoalBlock({ source }: { source: string }) {
    const parsed = useMemo(() => { try { return JSON.parse(source) as SoalSpec; } catch { return null; } }, [source]);
    const [round, setRound] = useState(0);
    const [done, setDone] = useState(false);
    if (!parsed) return <div className="my-3 rounded-xl border-2 border-dashed border-rose-300 bg-rose-50 p-3 text-sm text-rose-700">Soal tidak bisa ditampilkan: format JSON salah.</div>;
    const q = toQuestion(parsed);
    return (
        <div className="not-prose my-4 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center gap-2 border-b border-slate-200 bg-brand-50 px-4 py-2 text-brand-800 dark:border-slate-700 dark:bg-brand-950 dark:text-brand-100">
                <PencilLine className="size-4" />
                <b className="flex-1">{parsed.title ?? 'Coba kerjakan'}</b>
                {done && (
                    <button type="button" onClick={() => { setRound(round + 1); setDone(false); }} className="flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-semibold ring-1 ring-brand-200 hover:bg-brand-100 dark:bg-brand-900 dark:ring-brand-800">
                        <RotateCcw className="size-3.5" /> Ulangi
                    </button>
                )}
            </div>
            <div className="p-3 sm:p-4">
                <QuestionPlayer key={round} question={q} onFinish={() => setDone(true)} />
            </div>
        </div>
    );
}
