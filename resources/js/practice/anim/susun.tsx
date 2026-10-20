/* Animasi hitung susun (tambah, kurang, kali satu angka): kolom demi kolom, simpanan terbang ke kolom kiri,
   pinjaman mencoret angka atas. */
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useMemo } from 'react';
import { AnimFrame, pop, type AnimStep } from './frame';

const PLACE = ['satuan', 'puluhan', 'ratusan', 'ribuan', 'puluh ribuan'];
const SHORT = ['S', 'P', 'R', 'Rb', 'PRb'];
const cap = (s: string) => s[0].toUpperCase() + s.slice(1);
const digits = (n: number, len: number) => Array.from({ length: len }, (_, i) => Math.floor(n / 10 ** i) % 10);

interface State extends AnimStep {
    focus: number | null;
    result: (string | null)[];
    aux: (string | null)[];
    struck: boolean[];
    /** kolom yang simpanannya baru saja dibuat (untuk animasi terbang) */
    flew: number | null;
    done?: boolean;
}

function plan(op: '+' | '-' | '×', a: number, b: number): { cols: number; as: number[]; bs: number[]; states: State[]; answer: number } {
    const answer = op === '+' ? a + b : op === '-' ? a - b : a * b;
    const cols = op === '-' ? String(a).length : Math.max(String(a).length, String(b).length, String(answer).length);
    const as = digits(a, cols), bs = op === '×' ? [b, ...Array(cols - 1).fill(0)] : digits(b, cols);
    const result: (string | null)[] = Array(cols).fill(null);
    const aux: (string | null)[] = Array(cols).fill(null);
    const struck: boolean[] = Array(cols).fill(false);
    const snap = (s: Omit<State, 'result' | 'aux' | 'struck'>): State => ({ ...s, result: [...result], aux: [...aux], struck: [...struck] });
    const states: State[] = [];
    const opWord = op === '+' ? 'jumlahkan' : op === '-' ? 'kurangkan' : 'kalikan';
    states.push(snap({ focus: null, flew: null, say: op === '×' ? `Tulis bersusun. Kita kalikan ${b} dengan setiap angka di atas, mulai dari satuan.` : `Tulis bersusun: satuan di bawah satuan, puluhan di bawah puluhan. Lalu ${opWord} mulai dari kanan.`, tag: 'Susun' }));

    if (op === '+' || op === '×') {
        const len = op === '+' ? Math.max(String(a).length, String(b).length) : String(a).length;
        let carry = 0;
        for (let i = 0; i < len; i++) {
            const v = op === '+' ? as[i] + bs[i] + carry : as[i] * b + carry;
            const expr = op === '+' ? `${carry ? `${carry} (simpanan) + ` : ''}${as[i]} + ${bs[i]}` : `${as[i]} × ${b}${carry ? ` + ${carry} (simpanan)` : ''}`;
            result[i] = String(v % 10);
            const nc = Math.floor(v / 10);
            let say = `${cap(PLACE[i])}: ${expr} = ${v}.`;
            if (nc) { aux[i + 1] = String(nc); say += ` Tulis ${v % 10}, simpan ${nc} di atas ${PLACE[i + 1]}.`; }
            else say += ` Tulis ${v}.`;
            states.push(snap({ focus: i, flew: nc ? i + 1 : null, say, tag: cap(PLACE[i]) }));
            carry = nc;
        }
        if (carry) {
            result[len] = String(carry);
            states.push(snap({ focus: len, flew: null, say: `Tidak ada lagi yang di${op === '+' ? 'jumlah' : 'kali'}. Turunkan simpanan ${carry} ke ${PLACE[len]}.`, tag: cap(PLACE[len]) }));
        }
    } else {
        const top = [...as];
        for (let i = 0; i < cols; i++) {
            if (top[i] < bs[i]) {
                let j = i + 1;
                while (top[j] === 0) j++;
                const lenderBefore = top[j];
                top[j] -= 1; aux[j] = String(top[j]); struck[j] = true;
                for (let k = j - 1; k > i; k--) { top[k] = 9; aux[k] = '9'; struck[k] = true; }
                const before = top[i];
                top[i] += 10; aux[i] = String(top[i]); struck[i] = true;
                const lewat = j > i + 1 ? ` ${cap(PLACE[i + 1])} 0, jadi pinjam dari ${PLACE[j]}: ${lenderBefore} jadi ${lenderBefore - 1}, angka 0 di tengah jadi 9.` : ` Pinjam 1 dari ${PLACE[j]}: ${lenderBefore} jadi ${lenderBefore - 1}.`;
                states.push(snap({ focus: i, flew: null, say: `${cap(PLACE[i])}: ${before} kurang dari ${bs[i]}.${lewat} ${before} jadi ${top[i]}.`, tag: 'Pinjam' }));
            }
            result[i] = String(top[i] - bs[i]);
            const emptyBottom = i >= String(b).length;
            states.push(snap({ focus: i, flew: null, say: emptyBottom ? `${cap(PLACE[i])}: ${top[i]}, tidak ada yang dikurangi. Tulis ${top[i]}.` : `${cap(PLACE[i])}: ${top[i]} − ${bs[i]} = ${top[i] - bs[i]}. Tulis ${top[i] - bs[i]}.`, tag: cap(PLACE[i]) }));
        }
    }
    const sym = op === '×' ? '×' : op === '+' ? '+' : '−';
    const check = op === '-' ? ` Cek: ${answer} + ${b} = ${a}.` : op === '+' ? ` Cek: ${answer} − ${b} = ${a}.` : '';
    states.push(snap({ focus: null, flew: null, done: true, say: `Jadi ${a} ${sym} ${b} = ${answer}.${check}`, tag: 'Selesai' }));
    return { cols, as, bs, states, answer };
}

export function SusunAnim({ op, a, b, title }: { op: '+' | '-' | '×'; a: number; b: number; title?: string }) {
    const p = useMemo(() => plan(op, a, b), [op, a, b]);
    const order = Array.from({ length: p.cols }, (_, k) => p.cols - 1 - k);
    const topLen = String(a).length, botLen = String(b).length, ansLen = String(p.answer).length;
    const sub = op === '-';
    return (
        <AnimFrame title={title ?? (sub ? 'Animasi pengurangan bersusun' : op === '+' ? 'Animasi penjumlahan bersusun' : 'Animasi perkalian bersusun')} steps={p.states}>
            {(i) => {
                const s = p.states[i];
                return (
                    <div className="grid items-center justify-items-center gap-x-2 gap-y-1 font-mono text-slate-800 tabular-nums dark:text-slate-100" style={{ gridTemplateColumns: `2.5rem repeat(${p.cols}, 3.25rem)` }}>
                        <span />
                        {order.map((c) => <span key={`h${c}`} className={cn('text-xs font-bold text-slate-400', s.focus === c && 'text-sky-600')}>{SHORT[c]}</span>)}
                        <span />
                        {order.map((c) => (
                            <span key={`x${c}-${s.aux[c] ?? ''}`} className="flex h-9 items-center justify-center">
                                {s.aux[c] !== null && (
                                    <motion.span
                                        initial={s.flew === c ? { x: 60, y: 125, opacity: 0, scale: 0.6 } : pop.initial}
                                        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                                        transition={{ type: 'spring', stiffness: 160, damping: 16 }}
                                        className={cn('rounded-lg px-1.5 text-lg font-bold', sub ? 'bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300' : 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300')}
                                    >{s.aux[c]}</motion.span>
                                )}
                            </span>
                        ))}
                        <span />
                        {order.map((c) => (
                            <span key={`a${c}`} className={cn('relative flex h-14 w-12 items-center justify-center rounded-xl text-4xl font-bold transition-colors', s.focus === c && 'bg-amber-100 dark:bg-amber-900/40')}>
                                <span className={cn(s.struck[c] && 'text-slate-400')}>{c < topLen ? p.as[c] : ''}</span>
                                {s.struck[c] && <motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} className="absolute top-1/2 left-2 h-1 w-8 origin-left -rotate-12 rounded bg-violet-500" />}
                            </span>
                        ))}
                        <b className="text-3xl text-sky-600">{op === '-' ? '−' : op}</b>
                        {order.map((c) => (
                            <span key={`b${c}`} className={cn('flex h-14 w-12 items-center justify-center rounded-xl text-4xl font-bold transition-colors', s.focus === c && 'bg-amber-100 dark:bg-amber-900/40')}>
                                {op === '×' ? (c === 0 ? b : '') : c < botLen ? p.bs[c] : ''}
                            </span>
                        ))}
                        <i className="h-1 w-full rounded bg-slate-800 dark:bg-slate-200" style={{ gridColumn: '1 / -1' }} />
                        <span />
                        {order.map((c) => {
                            const r = s.result[c];
                            const lead = sub && c >= ansLen && c > 0;
                            return (
                                <span key={`r${c}`} className={cn('flex h-16 w-12 items-center justify-center rounded-xl border-2 border-dashed text-4xl font-bold', r === null ? 'border-slate-300 dark:border-slate-600' : s.done ? 'border-solid border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950' : 'border-solid border-sky-400 bg-sky-50 text-sky-700 dark:bg-sky-950', lead && r !== null && 'text-slate-300')}>
                                    {r !== null && <motion.span key={r} {...pop}>{r}</motion.span>}
                                </span>
                            );
                        })}
                    </div>
                );
            }}
        </AnimFrame>
    );
}
