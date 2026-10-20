/* Halaman pengembang: coba semua generator soal tanpa login. Hanya aktif di APP_ENV=local. */
import { TOPICS } from '@/practice/generators';
import { QuestionPlayer } from '@/practice/QuestionPlayer';
import { makeRng, newSeed } from '@/practice/rng';
import type { Question, QuestionResult } from '@/practice/types';
import { Head } from '@inertiajs/react';
import { useMemo, useState } from 'react';

export default function CobaSoal() {
    const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const [topic, setTopic] = useState(params.get('topik') ?? TOPICS[0]?.topic ?? '');
    const def = TOPICS.find((t) => t.topic === topic);
    const [skill, setSkill] = useState(params.get('skill') ?? '');
    const [level, setLevel] = useState<1 | 2 | 3>((Number(params.get('level')) || 1) as 1 | 2 | 3);
    const [seed, setSeed] = useState(Number(params.get('seed')) || newSeed());
    const [result, setResult] = useState<QuestionResult | null>(null);
    const sk = def?.skills.find((s) => s.code === skill) ?? def?.skills[0];

    const question: Question | null = useMemo(() => {
        if (!def || !sk) return null;
        return { topic: def.topic, skill: sk.code, level, seed, ...sk.gen(makeRng(seed), level) };
    }, [def, sk, level, seed]);

    return (
        <div className="mx-auto max-w-2xl p-4">
            <Head title="Coba soal" />
            <div className="mb-4 flex flex-wrap gap-2 text-sm">
                <select className="rounded border p-2" value={topic} onChange={(e) => { setTopic(e.target.value); setSkill(''); setResult(null); }}>
                    {TOPICS.map((t) => <option key={t.topic}>{t.topic}</option>)}
                </select>
                <select className="rounded border p-2" value={sk?.code} onChange={(e) => { setSkill(e.target.value); setResult(null); }}>
                    {def?.skills.map((s) => <option key={s.code} value={s.code}>{s.name}</option>)}
                </select>
                <select className="rounded border p-2" value={level} onChange={(e) => { setLevel(Number(e.target.value) as 1 | 2 | 3); setResult(null); }}>
                    <option value={1}>Tingkat 1</option><option value={2}>Tingkat 2</option><option value={3}>Tingkat 3</option>
                </select>
                <button className="rounded bg-slate-800 px-3 text-white" onClick={() => { setSeed(newSeed()); setResult(null); }}>Soal lain</button>
                <span className="self-center text-slate-400">seed {seed}</span>
            </div>
            {question ? <QuestionPlayer key={`${question.skill}-${level}-${seed}`} question={question} onFinish={setResult} /> : <p>Belum ada generator.</p>}
            {result && <pre className="mt-4 overflow-auto rounded bg-slate-100 p-3 text-xs" data-testid="result">{JSON.stringify(result, null, 2)}</pre>}
        </div>
    );
}
