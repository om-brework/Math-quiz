/* Hitung susun: tambah, kurang, dan kali satu angka. Kotak hasil diisi dari kanan; kotak simpanan/pinjaman diisi sendiri. */
import { cn } from '@/lib/utils';
import { useMemo, useState } from 'react';
import { checkColumn, columnPlan, type ColumnCheck } from '../check';
import type { ColumnStep, StepResult } from '../types';
import { Keypad } from './Keypad';

const PLACE = ['Satuan', 'Puluhan', 'Ratusan', 'Ribuan', 'Puluh ribuan'];
const SHORT = ['S', 'P', 'R', 'Rb', 'PRb'];
export const MAX_TRIES = 3;

export function ColumnWidget({ step, onDone }: { step: ColumnStep; onDone: (r: Omit<StepResult, 'id'>) => void }) {
    const plan = useMemo(() => columnPlan(step.op, step.a, step.b), [step.op, step.a, step.b]);
    const n = plan.cols;
    const [result, setResult] = useState<string[]>(Array(n).fill(''));
    const [aux, setAux] = useState<string[]>(Array(n).fill(''));
    const [sel, setSel] = useState<string>('r0');
    const [tries, setTries] = useState(0);
    const [check, setCheck] = useState<ColumnCheck | null>(null);
    const [firstErrors, setFirstErrors] = useState<string[] | null>(null);
    const [done, setDone] = useState<null | 'ok' | 'revealed'>(null);

    const sub = step.op === '-';
    const auxLabel = sub ? 'pinjaman' : 'simpanan';
    const order = Array.from({ length: n }, (_, k) => n - 1 - k); // kiri ke kanan

    const put = (d: string) => {
        if (done) return;
        setCheck(null);
        const i = Number(sel.slice(1));
        if (sel[0] === 'r') {
            const next = [...result]; next[i] = d; setResult(next);
            if (i < n - 1) setSel(`r${i + 1}`);
        } else {
            const next = [...aux];
            // pinjaman bisa dua angka (misalnya 12): ketik angka kedua untuk menyambung
            next[i] = sub && next[i].length === 1 && next[i] === '1' ? next[i] + d : d;
            setAux(next);
        }
    };
    const erase = () => {
        if (done) return;
        setCheck(null);
        const i = Number(sel.slice(1));
        if (sel[0] === 'r') {
            if (result[i] === '' && i > 0) { const next = [...result]; next[i - 1] = ''; setResult(next); setSel(`r${i - 1}`); return; }
            const next = [...result]; next[i] = ''; setResult(next);
        } else { const next = [...aux]; next[i] = ''; setAux(next); }
    };

    function submit() {
        if (done) return;
        const c = checkColumn(plan, { result, aux });
        const t = tries + 1;
        setTries(t);
        const errs = firstErrors ?? c.errors;
        if (!firstErrors) setFirstErrors(c.errors);
        if (c.ok) {
            setCheck(c); setDone('ok');
            onDone({ ok: t === 1, tries: t, revealed: false, errors: t === 1 ? [] : errs, given: result.slice().reverse().join('') });
            return;
        }
        if (t >= MAX_TRIES) {
            setResult(plan.result);
            setAux(plan.aux.map((v) => (v === null || v === 0 ? '' : String(v))));
            setCheck(null); setDone('revealed');
            onDone({ ok: false, tries: t, revealed: true, errors: errs, given: result.slice().reverse().join('') });
            return;
        }
        setCheck(c);
    }

    const onKey = (e: React.KeyboardEvent) => {
        if (/^[0-9]$/.test(e.key)) { e.preventDefault(); put(e.key); }
        else if (e.key === 'Backspace') { e.preventDefault(); erase(); }
        else if (e.key === 'Enter') { e.preventDefault(); submit(); }
    };

    const boxState = (kind: 'r' | 'x', i: number) => {
        if (done === 'revealed') return 'shown';
        if (done === 'ok') return 'right';
        if (check) return (kind === 'r' ? check.resultOk[i] : check.auxOk[i]) ? '' : 'wrong';
        return sel === `${kind}${i}` ? 'sel' : '';
    };
    const tone: Record<string, string> = {
        sel: 'border-solid border-sky-500 bg-sky-50 ring-4 ring-sky-200 dark:bg-sky-950 dark:ring-sky-900',
        wrong: 'border-solid border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-950',
        right: 'border-solid border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950',
        shown: 'border-solid border-amber-400 bg-amber-50 text-amber-800 dark:bg-amber-950',
        '': '',
    };
    const focusCol = Number(sel.slice(1));
    const topDigits = String(step.a).length, botDigits = String(step.b).length;

    return (
        <div className="flex flex-col items-center gap-4 outline-none" tabIndex={0} onKeyDown={onKey}>
            <div className="grid items-center justify-items-center gap-x-2 gap-y-1.5 font-mono tabular-nums" style={{ gridTemplateColumns: `2.5rem repeat(${n}, 3.5rem)` }}>
                <span />
                {order.map((i) => (
                    <span key={`h${i}`} title={PLACE[i]} className={cn('text-xs font-bold text-slate-400', !done && focusCol === i && 'text-sky-600')}>{SHORT[i]}</span>
                ))}
                <span />
                {order.map((i) => {
                    const hidden = sub ? i >= topDigits : i === 0;
                    if (hidden) return <span key={`x${i}`} className="h-10 w-10" />;
                    return (
                        <button key={`x${i}`} type="button" onClick={() => !done && setSel(`x${i}`)} aria-label={`Kotak ${auxLabel} ${PLACE[i].toLowerCase()}`}
                            className={cn('flex h-10 w-10 items-center justify-center rounded-lg border-2 border-dashed text-lg font-bold', sub ? 'border-violet-300 bg-violet-50 text-violet-700 dark:bg-violet-950' : 'border-orange-300 bg-orange-50 text-orange-700 dark:bg-orange-950', tone[boxState('x', i)])}>
                            {aux[i]}
                        </button>
                    );
                })}
                <span />
                {order.map((i) => (
                    <b key={`a${i}`} className={cn('text-4xl', sub && aux[i] !== '' && 'text-slate-400 line-through decoration-2')}>{i < topDigits ? plan.as[i] : ''}</b>
                ))}
                <b className="text-3xl text-sky-600">{step.op}</b>
                {order.map((i) => (
                    <b key={`b${i}`} className="text-4xl">{i < botDigits ? (step.op === '×' ? (i === 0 ? step.b : '') : plan.bs[i]) : ''}</b>
                ))}
                <i className="h-1 w-full rounded bg-slate-800 dark:bg-slate-200" style={{ gridColumn: '1 / -1' }} />
                <span />
                {order.map((i) => (
                    <button key={`r${i}`} type="button" onClick={() => !done && setSel(`r${i}`)} aria-label={`Hasil ${PLACE[i].toLowerCase()}`}
                        className={cn('flex h-16 w-14 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 text-4xl font-bold dark:border-slate-600 dark:bg-slate-900', tone[boxState('r', i)])}>
                        {result[i]}
                    </button>
                ))}
            </div>
            {!done && (
                <>
                    <p className="text-center text-sm text-slate-500">
                        {sel[0] === 'x'
                            ? sub ? `Tulis nilai baru angka ${PLACE[focusCol].toLowerCase()} setelah meminjam.` : `Tulis ${auxLabel} untuk kolom ${PLACE[focusCol].toLowerCase()}.`
                            : `Isi hasil kolom ${PLACE[focusCol].toLowerCase()}. Ketuk kotak kecil kalau perlu ${sub ? 'meminjam' : 'menyimpan'}.`}
                    </p>
                    <Keypad onDigit={put} onErase={erase} />
                    <button type="button" onClick={submit} disabled={result.every((r) => r === '')}
                        className="w-full max-w-sm rounded-xl bg-brand-600 py-3 text-lg font-bold text-white disabled:opacity-40">
                        Periksa
                    </button>
                    {check && <p className="text-sm font-semibold text-rose-600">Kotak merah belum tepat. Coba lagi ({MAX_TRIES - tries} kesempatan).</p>}
                </>
            )}
        </div>
    );
}
