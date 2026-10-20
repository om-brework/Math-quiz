/* Porogapit dengan langkah Bagi → Kali → Kurang → Turun. Satu kotak aktif setiap saat; tiap kotak dinilai langsung. */
import { cn } from '@/lib/utils';
import { useMemo, useState } from 'react';
import { divisionDigitError, divisionPlan } from '../check';
import type { LongDivisionStep, StepResult } from '../types';
import { Keypad } from './Keypad';
import { MAX_TRIES } from './ColumnWidget';

type Field = { cycle: number; kind: 'q' | 'p' | 'r'; want: number };

export function LongDivisionWidget({ step, onDone }: { step: LongDivisionStep; onDone: (r: Omit<StepResult, 'id'>) => void }) {
    const plan = useMemo(() => divisionPlan(step.dividend, step.divisor), [step.dividend, step.divisor]);
    const ds = String(step.dividend).split('');
    const fields = useMemo<Field[]>(() => plan.cycles.flatMap((c, k) => [
        { cycle: k, kind: 'q' as const, want: c.quotientDigit },
        { cycle: k, kind: 'p' as const, want: c.product },
        { cycle: k, kind: 'r' as const, want: c.remainder },
    ]), [plan]);

    const [pos, setPos] = useState(0);
    const [typed, setTyped] = useState('');
    const [values, setValues] = useState<Record<string, { v: number; shown?: boolean }>>({});
    const [tries, setTries] = useState(0);
    const [wrong, setWrong] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);
    const [firstTry, setFirstTry] = useState(true);
    const done = pos >= fields.length;
    const f = fields[pos];
    const key = (fl: Field) => `${fl.kind}${fl.cycle}`;

    function commit() {
        if (!f || typed === '') return;
        const g = Number(typed);
        if (g === f.want) {
            advance({ v: g });
            return;
        }
        const c = plan.cycles[f.cycle];
        const code = f.kind === 'q' ? divisionDigitError(c, step.divisor, g) : f.kind === 'p' ? 'salah-kali-porogapit' : 'salah-kurang-porogapit';
        if (tries === 0) setErrors((e) => (e.includes(code) ? e : [...e, code]));
        setFirstTry(false);
        setWrong(true);
        if (tries + 1 >= MAX_TRIES) { advance({ v: f.want, shown: true }); return; }
        setTries(tries + 1);
        setTyped('');
    }
    function advance(val: { v: number; shown?: boolean }) {
        const nextValues = { ...values, [key(f)]: val };
        setValues(nextValues);
        setTyped(''); setTries(0); setWrong(false);
        const np = pos + 1;
        setPos(np);
        if (np >= fields.length) {
            const revealed = Object.values(nextValues).some((x) => x.shown);
            onDone({ ok: firstTry && f.want === val.v && !val.shown, tries: 1, revealed, errors, given: String(plan.quotient) });
        }
    }

    const hint = !f ? '' : (() => {
        const c = plan.cycles[f.cycle];
        if (f.kind === 'q') return c.part < step.divisor ? `${c.part} lebih kecil dari ${step.divisor}. Berapa kali ${step.divisor} muat di ${c.part}?` : `Bagi: ${step.divisor} muat berapa kali di ${c.part}?`;
        if (f.kind === 'p') return `Kali: ${c.quotientDigit} × ${step.divisor} = ?`;
        return `Kurang: ${c.part} − ${c.product} = ?`;
    })();

    // tata letak: kolom grid = angka yang dibagi; bilangan ditulis rata kanan berakhir di kolom `at`
    const cols = ds.length;
    const place = (num: number | string, at: number, cls = '', k = '') => {
        const s = String(num);
        return s.split('').map((ch, j) => (
            <span key={`${k}${j}`} className={cn('text-center', cls)} style={{ gridColumn: at - s.length + j + 4 }}>{ch}</span>
        ));
    };
    const active = (fl: Field) => !done && f && key(f) === key(fl);
    const cell = (fl: Field, at: number) => {
        const v = values[key(fl)];
        const isActive = active(fl);
        const text = v ? String(v.v) : isActive ? typed : '';
        const width = Math.max(String(fl.want).length, 1);
        return (
            <span key={key(fl)} style={{ gridColumn: `${at - width + 4} / span ${width}` }}
                className={cn('flex h-10 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 text-2xl font-bold',
                    isActive && 'border-solid border-sky-500 bg-sky-50 ring-4 ring-sky-200 dark:bg-sky-950',
                    isActive && wrong && 'border-rose-500 bg-rose-50',
                    v && !v.shown && 'border-solid border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950',
                    v?.shown && 'border-solid border-amber-400 bg-amber-50 text-amber-800',
                    !v && !isActive && 'opacity-0')}>
                {text}
            </span>
        );
    };

    const rows: React.ReactNode[] = [];
    plan.cycles.forEach((c, k) => {
        const [qf, pf, rf] = fields.slice(k * 3, k * 3 + 3);
        const reached = pos >= k * 3 + 1;
        if (!reached) return;
        rows.push(<div key={`p${k}`} className="contents">{cell(pf, c.at)}</div>);
        rows.push(<i key={`l${k}`} className="h-0.5 bg-slate-700 dark:bg-slate-300" style={{ gridColumn: `${c.at - String(c.part).length + 4} / span ${String(c.part).length}` }} />);
        if (pos >= k * 3 + 2) {
            const next = plan.cycles[k + 1];
            const rv = values[key(rf)];
            if (next && rv) {
                // hasil kurang + angka yang diturunkan
                rows.push(<div key={`r${k}`} className="contents">{place(next.part, next.at, 'text-2xl font-bold', `nx${k}`)}</div>);
            } else {
                rows.push(<div key={`r${k}`} className="contents">{cell(rf, c.at)}</div>);
            }
        }
        void qf;
    });

    return (
        <div className="flex flex-col items-center gap-4 outline-none" tabIndex={0}
            onKeyDown={(e) => {
                if (/^[0-9]$/.test(e.key)) { e.preventDefault(); setWrong(false); setTyped((t) => (t + e.key).slice(0, 4)); }
                else if (e.key === 'Backspace') { e.preventDefault(); setTyped((t) => t.slice(0, -1)); }
                else if (e.key === 'Enter') { e.preventDefault(); commit(); }
            }}>
            <div className="grid items-center gap-x-1 gap-y-1 font-mono tabular-nums" style={{ gridTemplateColumns: `2.5rem 0.75rem repeat(${cols}, 2.25rem)` }}>
                {/* baris hasil bagi */}
                <span /><span />
                {ds.map((_, at) => {
                    const k = plan.cycles.findIndex((c) => c.at === at);
                    if (k < 0) return <span key={`q${at}`} className="h-10" />;
                    const qf = fields[k * 3];
                    return <div key={`q${at}`} className="contents">{cell(qf, at)}</div>;
                })}
                {/* pembagi ) yang dibagi */}
                <b className="text-right text-3xl">{step.divisor}</b>
                <span className="h-12 border-l-4 border-t-4 border-slate-800 [border-top-left-radius:1rem] dark:border-slate-200" />
                {ds.map((d, at) => <b key={`d${at}`} className="border-t-4 border-slate-800 pt-1 text-center text-3xl dark:border-slate-200">{d}</b>)}
                {rows}
            </div>
            {!done ? (
                <>
                    <p className={cn('text-center font-semibold', wrong ? 'text-rose-600' : 'text-slate-600 dark:text-slate-300')}>
                        {wrong ? `Belum tepat. ${hint}` : hint}
                    </p>
                    <div className="flex items-center gap-3">
                        <span className="min-w-16 rounded-xl border-2 border-sky-400 px-3 py-2 text-center text-2xl font-bold">{typed || ' '}</span>
                        <button type="button" onClick={commit} disabled={!typed} className="rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white disabled:opacity-40">Periksa</button>
                    </div>
                    <Keypad onDigit={(d) => { setWrong(false); setTyped((t) => (t + d).slice(0, 4)); }} onErase={() => setTyped((t) => t.slice(0, -1))} />
                </>
            ) : (
                <p className="font-semibold text-emerald-700">
                    {step.dividend} ÷ {step.divisor} = {plan.quotient}{plan.remainder ? ` sisa ${plan.remainder}` : ''}
                </p>
            )}
        </div>
    );
}
