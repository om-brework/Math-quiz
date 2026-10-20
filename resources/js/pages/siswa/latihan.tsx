/* Sesi latihan: 10 soal bertahap. Soal dibuat di peramban; tingkat tiap keterampilan mengikuti hasil dari server. */
import SiswaLayout from '@/layouts/siswa-layout';
import { postJson } from '@/lib/http';
import { topicDef } from '@/practice/generators';
import { QuestionPlayer } from '@/practice/QuestionPlayer';
import { makeRng, newSeed } from '@/practice/rng';
import type { Question, QuestionResult } from '@/practice/types';
import { Link, router } from '@inertiajs/react';
import { ArrowRight, X } from 'lucide-react';
import { useMemo, useState } from 'react';

interface Props {
    session: number;
    topic: { id: string; title: string; grade: string };
    size: number;
    masteries: Record<string, { skill: string; level: number; mastery: number }>;
}

const LEVEL_NAME = { 1: 'Dasar', 2: 'Sedang', 3: 'Tantangan' } as const;

export default function Latihan({ session, topic, size, masteries }: Props) {
    const def = topicDef(topic.id);
    // keterampilan yang paling lemah didahulukan, lalu bergiliran
    const order = useMemo(() => (def ? [...def.skills].sort((a, b) => (masteries[a.code]?.mastery ?? 0) - (masteries[b.code]?.mastery ?? 0)) : []), [def, masteries]);
    const [levels, setLevels] = useState<Record<string, number>>(() => Object.fromEntries(Object.values(masteries).map((m) => [m.skill, m.level])));
    const [index, setIndex] = useState(0);
    const [results, setResults] = useState<boolean[]>([]);
    const [done, setDone] = useState(false);
    const [saveError, setSaveError] = useState(false);

    const question: Question | null = useMemo(() => {
        if (!def || order.length === 0) return null;
        const sk = order[index % order.length];
        const level = (levels[sk.code] ?? 1) as 1 | 2 | 3;
        const seed = newSeed();
        return { topic: topic.id, skill: sk.code, level, seed, ...sk.gen(makeRng(seed), level) };
        // soal baru hanya saat pindah nomor
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index, def]);

    if (!def || !question) return <SiswaLayout title="Latihan"><p>Latihan untuk topik ini belum tersedia.</p></SiswaLayout>;

    async function finished(r: QuestionResult) {
        setDone(true);
        setResults((x) => [...x, r.correct]);
        try {
            const res = await postJson<{ skill: string; level: number }>(route('siswa.answer', session), r);
            setLevels((l) => ({ ...l, [res.skill]: res.level }));
            setSaveError(false);
        } catch {
            setSaveError(true);
        }
    }
    function next() {
        if (index + 1 >= size) {
            router.post(route('siswa.finish', session));
            return;
        }
        setIndex(index + 1);
        setDone(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const skillName = def.skills.find((s) => s.code === question.skill)?.name;

    return (
        <SiswaLayout title={`Latihan: ${topic.title}`}>
            <div className="pb-24">
            <div className="mb-4 flex items-center gap-3">
                <Link href={route('siswa.topic', topic.id)} aria-label="Keluar dari latihan" className="flex size-10 items-center justify-center rounded-xl bg-white text-slate-500 shadow-sm dark:bg-slate-900"><X className="size-5" /></Link>
                <div className="flex flex-1 gap-1" role="progressbar" aria-valuemin={0} aria-valuemax={size} aria-valuenow={results.length} aria-label="Kemajuan latihan">
                    {Array.from({ length: size }, (_, i) => (
                        <i key={i} className={`h-2.5 flex-1 rounded-full ${i < results.length ? (results[i] ? 'bg-emerald-500' : 'bg-amber-400') : i === index ? 'bg-sky-400' : 'bg-slate-200 dark:bg-slate-700'}`} />
                    ))}
                </div>
                <span className="font-display text-lg font-bold tabular-nums">{Math.min(index + 1, size)}/{size}</span>
            </div>
            <p className="mb-3 text-sm font-semibold text-slate-500">
                {topic.title} · {skillName} · <span className="text-brand-700 dark:text-brand-400">Tingkat {question.level} ({LEVEL_NAME[question.level]})</span>
            </p>
            <div className="rounded-2xl border border-brand-100 bg-white p-4 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
                <QuestionPlayer key={`${index}-${question.seed}`} question={question} onFinish={finished} />
            </div>
            </div>
            {done && (
                <div className="fixed inset-x-0 bottom-0 z-10 mx-auto max-w-3xl px-4 pb-4">
                    {saveError && <p className="mb-2 rounded-lg bg-rose-50 p-2 text-center text-sm font-semibold text-rose-700">Hasil soal ini gagal tersimpan. Periksa koneksi internet.</p>}
                    <button type="button" onClick={next} autoFocus className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 py-4 text-lg font-bold text-white shadow-sm active:translate-y-0.5">
                        {index + 1 >= size ? 'Lihat hasil' : 'Soal berikutnya'} <ArrowRight className="size-5" />
                    </button>
                </div>
            )}
        </SiswaLayout>
    );
}
