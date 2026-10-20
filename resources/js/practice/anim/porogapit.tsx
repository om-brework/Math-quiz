/* Animasi porogapit: Bagi → Kali → Kurang → Turun, putaran demi putaran. */
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useMemo } from 'react';
import { divisionPlan } from '../check';
import { AnimFrame, pop, type AnimStep } from './frame';

type Sub = 'bagi' | 'kali' | 'kurang' | 'turun';
interface State extends AnimStep { k: number; sub: Sub | 'awal' | 'selesai' }

export function PorogapitAnim({ a, b, title }: { a: number; b: number; title?: string }) {
    const plan = useMemo(() => divisionPlan(a, b), [a, b]);
    const ds = String(a).split('');
    const states = useMemo<State[]>(() => {
        const out: State[] = [{ k: -1, sub: 'awal', tag: 'Susun', say: `Tulis ${b} di kiri, ${a} di dalam "kurung". Ingat urutannya: Bagi, Kali, Kurang, Turun.` }];
        plan.cycles.forEach((c, k) => {
            const first = k === 0 && c.at > 0 ? ` (${ds.slice(0, c.at).join('')} lebih kecil dari ${b}, jadi kita lihat ${c.part})` : '';
            out.push({ k, sub: 'bagi', tag: 'Bagi', say: `${b} muat berapa kali di ${c.part}?${first} ${c.quotientDigit} kali, karena ${b} × ${c.quotientDigit} = ${c.product}${c.quotientDigit < 9 ? ` dan ${b} × ${c.quotientDigit + 1} = ${b * (c.quotientDigit + 1)} kebesaran` : ''}.` });
            out.push({ k, sub: 'kali', tag: 'Kali', say: `${c.quotientDigit} × ${b} = ${c.product}. Tulis di bawah ${c.part}.` });
            out.push({ k, sub: 'kurang', tag: 'Kurang', say: `${c.part} − ${c.product} = ${c.remainder}.${c.remainder < b ? ` ${c.remainder} lebih kecil dari ${b}, bagus.` : ''}` });
            const next = plan.cycles[k + 1];
            if (next) out.push({ k, sub: 'turun', tag: 'Turun', say: `Turunkan angka ${ds[next.at]}. Sekarang ada ${next.part}.` });
        });
        out.push({ k: plan.cycles.length, sub: 'selesai', tag: 'Selesai', say: `Jadi ${a} ÷ ${b} = ${plan.quotient}${plan.remainder ? ` sisa ${plan.remainder}` : ''}. Cek: ${plan.quotient} × ${b}${plan.remainder ? ` + ${plan.remainder}` : ''} = ${a}.` });
        return out;
    }, [plan, a, b, ds]);

    const order: Sub[] = ['bagi', 'kali', 'kurang', 'turun'];
    // sudah sampai tahap `sub` pada putaran `k`?
    const reached = (s: State, k: number, sub: Sub) => s.sub === 'selesai' || s.k > k || (s.k === k && s.sub !== 'awal' && order.indexOf(s.sub as Sub) >= order.indexOf(sub));
    const col = (at: number, len: number) => ({ gridColumn: `${at - len + 4} / span ${len}` });

    return (
        <AnimFrame title={title ?? 'Animasi porogapit'} steps={states} interval={2600}>
            {(i) => {
                const s = states[i];
                return (
                    <div className="grid items-center gap-y-1 font-mono text-slate-800 tabular-nums dark:text-slate-100" style={{ gridTemplateColumns: `2.75rem 0.75rem repeat(${ds.length}, 2.5rem)` }}>
                        <span /><span />
                        {ds.map((_, at) => {
                            const k = plan.cycles.findIndex((c) => c.at === at);
                            const show = k >= 0 && reached(s, k, 'bagi');
                            return (
                                <span key={`q${at}`} className="flex h-11 items-center justify-center">
                                    {show && <motion.span {...pop} className={cn('text-3xl font-bold', s.sub === 'selesai' ? 'text-emerald-600' : 'text-sky-600')}>{plan.quotientDigits[at]}</motion.span>}
                                </span>
                            );
                        })}
                        <b className="text-right text-3xl">{b}</b>
                        <span className="h-12 border-t-4 border-l-4 border-slate-800 [border-top-left-radius:1rem] dark:border-slate-200" />
                        {ds.map((d, at) => {
                            const k = s.sub === 'awal' || s.sub === 'selesai' ? -1 : s.k;
                            const c = k >= 0 ? plan.cycles[k] : null;
                            const hot = c && at <= c.at && at > c.at - String(c.part).length && s.k === k && s.sub === 'bagi' && k === 0;
                            const down = plan.cycles.some((cy, kk) => kk > 0 && cy.at === at && reached(s, kk - 1, 'turun'));
                            return (
                                <b key={`d${at}`} className={cn('border-t-4 border-slate-800 pt-1 text-center text-3xl dark:border-slate-200', hot && 'rounded-b-lg bg-amber-100 dark:bg-amber-900/40', down && 'text-slate-300 dark:text-slate-600')}>{d}</b>
                            );
                        })}
                        {plan.cycles.map((c, k) => {
                            if (!reached(s, k, 'kali')) return null;
                            const pLen = String(c.part).length;
                            const next = plan.cycles[k + 1];
                            return (
                                <div key={`c${k}`} className="contents">
                                    <motion.span {...pop} className="flex justify-end pr-1 text-3xl font-bold text-rose-600" style={col(c.at, Math.max(String(c.product).length, 1))}>{c.product}</motion.span>
                                    <motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} className="h-1 origin-right rounded bg-slate-700 dark:bg-slate-300" style={col(c.at, pLen)} />
                                    {reached(s, k, 'kurang') && (
                                        <span className="flex h-11 items-center justify-end" style={col(next ? next.at : c.at, next && reached(s, k, 'turun') ? String(next.part).length : Math.max(1, String(c.remainder).length))}>
                                            <motion.span {...pop} className={cn('pr-1 text-3xl font-bold', !next && s.sub === 'selesai' ? 'text-emerald-600' : 'text-violet-600')}>
                                                {next && reached(s, k, 'turun') ? (
                                                    <>{c.remainder ? c.remainder : ''}<motion.span initial={{ y: -40 * (k * 3 + 3), opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 90, damping: 14 }} className="inline-block text-sky-600">{ds[next.at]}</motion.span></>
                                                ) : c.remainder}
                                            </motion.span>
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                );
            }}
        </AnimFrame>
    );
}
