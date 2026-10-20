/* Satu soal, dikerjakan langkah demi langkah. Langkah berikutnya baru muncul setelah langkah sekarang selesai. */
import { cn } from '@/lib/utils';
import { CheckCircle2, Lightbulb, Eye } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { checkFraction, sameNumber } from './check';
import { MathText } from './MathText';
import type { ChoiceStep, FractionStep, NumberStep, Question, QuestionResult, Step, StepResult } from './types';
import { Visual } from './Visual';
import { ColumnWidget, MAX_TRIES } from './widgets/ColumnWidget';
import { LongDivisionWidget } from './widgets/LongDivisionWidget';

type Done = Omit<StepResult, 'id'>;

export function QuestionPlayer({ question, onFinish }: { question: Question; onFinish: (r: QuestionResult) => void }) {
    const [results, setResults] = useState<StepResult[]>([]);
    const started = useRef(Date.now());
    const [hints, setHints] = useState(0);
    const current = results.length;
    const finished = current >= question.steps.length;

    function stepDone(step: Step, r: Done) {
        const next = [...results, { id: step.id, ...r }];
        setResults(next);
        if (r.tries > 1 || r.revealed) setHints((h) => h + 1);
        if (next.length >= question.steps.length) {
            onFinish({
                topic: question.topic, skill: question.skill, level: question.level, seed: question.seed, text: question.text,
                correct: next.every((s) => s.ok), steps: next, hintsUsed: hints + (r.tries > 1 ? 1 : 0), durationMs: Date.now() - started.current,
            });
        }
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="text-lg leading-relaxed font-semibold sm:text-xl"><MathText>{question.text}</MathText></div>
            {question.visual && <div className="flex justify-center"><Visual spec={question.visual} /></div>}

            <ol className="flex flex-col gap-3">
                {question.steps.map((step, i) => {
                    if (i > current) return null;
                    const r = results[i];
                    return (
                        <li key={step.id} className={cn('rounded-2xl border-2 p-4', !r ? 'border-sky-300 bg-white dark:bg-slate-900' : r.ok ? 'border-emerald-200 bg-emerald-50/60 dark:bg-emerald-950/40' : 'border-amber-200 bg-amber-50/60 dark:bg-amber-950/40')}>
                            <div className="mb-2 flex items-start gap-2">
                                <span className={cn('flex size-7 flex-none items-center justify-center rounded-full text-sm font-bold text-white', !r ? 'bg-sky-500' : r.ok ? 'bg-emerald-500' : 'bg-amber-500')}>
                                    {r ? (r.revealed ? <Eye className="size-4" /> : <CheckCircle2 className="size-4" />) : i + 1}
                                </span>
                                <div className="font-semibold"><MathText>{step.prompt}</MathText></div>
                            </div>
                            {!r ? <StepInput key={step.id} step={step} onDone={(d) => stepDone(step, d)} /> : (
                                <div className="pl-9 text-sm text-slate-700 dark:text-slate-300">
                                    {step.kind !== 'column' && step.kind !== 'longdiv' && <p className="font-bold">{answerText(step)}</p>}
                                    <MathText>{step.explain}</MathText>
                                </div>
                            )}
                        </li>
                    );
                })}
            </ol>
            {!finished && <p className="text-center text-sm text-slate-500">Langkah {current + 1} dari {question.steps.length}</p>}
            {finished && (
                <div className="rounded-2xl bg-emerald-600 p-4 text-white">
                    <MathText className="text-lg font-bold">{question.conclusion}</MathText>
                </div>
            )}
        </div>
    );
}

export function answerText(step: Step): string {
    if (step.kind === 'fraction') {
        const a = step.answer;
        return `Jawaban: ${a.whole ? `${a.whole} ` : ''}${a.num}/${a.den}`;
    }
    if (step.kind === 'number') return `Jawaban: ${step.prefix ?? ''}${step.answer}${step.suffix ? ` ${step.suffix}` : ''}`;
    if (step.kind === 'choice') return `Jawaban: ${step.answer}`;
    return '';
}

function StepInput({ step, onDone }: { step: Step; onDone: (r: Done) => void }) {
    if (step.kind === 'column') return <ColumnWidget step={step} onDone={onDone} />;
    if (step.kind === 'longdiv') return <LongDivisionWidget step={step} onDone={onDone} />;
    return <SimpleStep step={step} onDone={onDone} />;
}

/** Isian angka, pilihan ganda, dan pecahan: maksimal MAX_TRIES percobaan, petunjuk muncul setelah salah pertama. */
function SimpleStep({ step, onDone }: { step: NumberStep | ChoiceStep | FractionStep; onDone: (r: Done) => void }) {
    const [value, setValue] = useState('');
    const [frac, setFrac] = useState({ whole: '', num: '', den: '' });
    const [tries, setTries] = useState(0);
    const [wrongMsg, setWrongMsg] = useState<string | null>(null);
    const [first, setFirst] = useState<{ given: string; error: string } | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => { inputRef.current?.focus(); }, []);

    function evaluate(raw?: string): { ok: boolean; error: string; given: string; msg?: string } {
        if (step.kind === 'number') {
            const v = raw ?? value;
            return { ok: sameNumber(v, step.answer), error: step.error, given: v };
        }
        if (step.kind === 'choice') {
            const v = raw ?? value;
            return { ok: v === step.answer, error: step.distractorErrors?.[v] ?? step.error, given: v };
        }
        const g = { whole: frac.whole === '' ? undefined : Number(frac.whole), num: Number(frac.num), den: Number(frac.den) };
        const c = checkFraction(g, step.answer, step.simplest);
        const given = `${frac.whole ? `${frac.whole} ` : ''}${frac.num}/${frac.den}`;
        return { ok: c.ok, error: c.reason === 'belum-sederhana' ? 'pecahan-belum-sederhana' : step.error, given, msg: c.reason === 'belum-sederhana' ? 'Nilainya sudah benar, tetapi sederhanakan lagi.' : undefined };
    }

    function submit(raw?: string) {
        const r = evaluate(raw);
        const t = tries + 1;
        const firstWrong = first ?? (r.ok ? null : { given: r.given, error: r.error });
        if (!first && !r.ok) setFirst(firstWrong);
        if (r.ok) {
            onDone({ ok: t === 1, tries: t, revealed: false, errors: firstWrong ? [firstWrong.error] : [], given: firstWrong?.given ?? r.given });
            return;
        }
        if (t >= MAX_TRIES) {
            onDone({ ok: false, tries: t, revealed: true, errors: [firstWrong!.error], given: firstWrong!.given });
            return;
        }
        setTries(t);
        setWrongMsg(r.msg ?? 'Belum tepat.');
        if (step.kind !== 'choice') { setValue(''); }
    }

    const feedback = wrongMsg && (
        <div className="mt-3 flex gap-2 rounded-xl bg-amber-50 p-3 text-sm text-amber-900 dark:bg-amber-950 dark:text-amber-200">
            <Lightbulb className="mt-0.5 size-4 flex-none" />
            <div><b>{wrongMsg}</b> <MathText>{step.hint}</MathText> <span className="text-amber-700">({MAX_TRIES - tries} kesempatan lagi)</span></div>
        </div>
    );

    if (step.kind === 'choice') {
        return (
            <div className="pl-9">
                <div className="flex flex-wrap gap-2" role="radiogroup">
                    {step.options.map((o) => (
                        <button key={o} type="button" onClick={() => { setValue(o); submit(o); }}
                            className="min-w-16 rounded-xl border-2 border-b-4 border-sky-300 bg-white px-4 py-2 text-lg font-bold hover:bg-sky-50 dark:bg-slate-900">
                            <MathText>{o}</MathText>
                        </button>
                    ))}
                </div>
                {feedback}
            </div>
        );
    }

    const box = 'h-12 rounded-xl border-2 border-sky-400 bg-white px-3 text-center text-2xl font-bold outline-none focus:ring-4 focus:ring-sky-200 dark:bg-slate-950';
    return (
        <form className="pl-9" onSubmit={(e) => { e.preventDefault(); submit(); }}>
            <div className="flex flex-wrap items-center gap-2">
                {step.kind === 'number' ? (
                    <>
                        {step.prefix && <span className="text-xl font-bold">{step.prefix}</span>}
                        <input ref={inputRef} className={cn(box, 'w-36')} inputMode="decimal" autoComplete="off" value={value} onChange={(e) => { setValue(e.target.value); setWrongMsg(null); }} aria-label="Jawaban" />
                        {step.suffix && <span className="text-xl font-bold">{step.suffix}</span>}
                    </>
                ) : (
                    <div className="flex items-center gap-2">
                        {step.mixed && <input className={cn(box, 'w-16')} inputMode="numeric" value={frac.whole} onChange={(e) => setFrac({ ...frac, whole: e.target.value })} aria-label="Bilangan bulat" />}
                        <div className="flex flex-col items-center gap-1">
                            <input ref={inputRef} className={cn(box, 'w-16')} inputMode="numeric" value={frac.num} onChange={(e) => { setFrac({ ...frac, num: e.target.value }); setWrongMsg(null); }} aria-label="Pembilang" />
                            <i className="h-1 w-16 rounded bg-slate-800 dark:bg-slate-200" />
                            <input className={cn(box, 'w-16')} inputMode="numeric" value={frac.den} onChange={(e) => { setFrac({ ...frac, den: e.target.value }); setWrongMsg(null); }} aria-label="Penyebut" />
                        </div>
                    </div>
                )}
                <button type="submit" disabled={step.kind === 'number' ? !value.trim() : !frac.num || !frac.den} className="h-12 rounded-xl bg-emerald-600 px-5 font-bold text-white disabled:opacity-40">Periksa</button>
            </div>
            {feedback}
        </form>
    );
}
