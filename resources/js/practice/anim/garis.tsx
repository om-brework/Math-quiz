/* Animasi garis bilangan: katak melompat dari `start` sesuai daftar lompatan (+/−). */
import { motion } from 'motion/react';
import { AnimFrame, type AnimStep } from './frame';

const W = 440, L = 24, R = W - 24, Y = 96;

export function GarisAnim({ from, to, start, jumps, step = 1, title }: { from: number; to: number; start: number; jumps: number[]; step?: number; title?: string }) {
    const xs = (v: number) => L + ((v - from) / (to - from)) * (R - L);
    const states = (() => {
        const out: (AnimStep & { at: number; arcs: { a: number; b: number }[] })[] = [{ say: `Mulai dari ${start}.`, tag: 'Mulai', at: start, arcs: [] }];
        let cur = start;
        const arcs: { a: number; b: number }[] = [];
        for (const j of jumps) {
            const nx = cur + j;
            arcs.push({ a: cur, b: nx });
            out.push({ say: `${j > 0 ? 'Maju' : 'Mundur'} ${Math.abs(j)}: ${cur} ${j > 0 ? '+' : '−'} ${Math.abs(j)} = ${nx}.`, tag: j > 0 ? `+${j}` : `${j}`, at: nx, arcs: [...arcs] });
            cur = nx;
        }
        const sum = jumps.map((j, i) => (i === 0 ? '' : j > 0 ? ' + ' : ' − ') + Math.abs(j)).join('');
        out.push({ say: `Sampai di ${cur}. Jadi ${start}${jumps.map((j) => (j > 0 ? ` + ${j}` : ` − ${-j}`)).join('')} = ${cur}.`, tag: 'Selesai', at: cur, arcs: [...arcs] });
        void sum;
        return out;
    })();
    const ticks: number[] = [];
    for (let v = from; v <= to; v += step) ticks.push(v);
    const labelEvery = ticks.length > 21 ? (ticks.length > 50 ? 10 : 5) : 1;
    return (
        <AnimFrame title={title ?? 'Animasi garis bilangan'} steps={states} interval={1900}>
            {(i) => {
                const s = states[i];
                return (
                    <svg viewBox={`0 0 ${W} 140`} width="100%" style={{ maxWidth: W }} role="img" aria-label={s.say}>
                        <line x1={L - 10} x2={R + 10} y1={Y} y2={Y} stroke="currentColor" strokeWidth={2.5} />
                        {ticks.map((v, k) => (
                            <g key={v}>
                                <line x1={xs(v)} x2={xs(v)} y1={Y - 7} y2={Y + 7} stroke="currentColor" strokeWidth={v === s.at ? 3 : 1.5} />
                                {(k % labelEvery === 0 || v === start || v === s.at) && <text x={xs(v)} y={Y + 24} textAnchor="middle" fontSize={13} fontWeight={v === s.at ? 800 : 600} fill={v === s.at ? '#1A7A56' : 'currentColor'}>{v}</text>}
                            </g>
                        ))}
                        {s.arcs.map((a, k) => {
                            const x1 = xs(a.a), x2 = xs(a.b), mid = (x1 + x2) / 2, hgt = Math.min(60, 18 + Math.abs(x2 - x1) * 0.35);
                            const d = `M ${x1} ${Y - 8} Q ${mid} ${Y - 8 - hgt * 2} ${x2} ${Y - 8}`;
                            const up = a.b > a.a;
                            return (
                                <g key={k}>
                                    <motion.path d={d} fill="none" stroke={up ? '#4467E0' : '#E2761F'} strokeWidth={3} strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7 }} />
                                    <text x={mid} y={Y - 14 - hgt} textAnchor="middle" fontSize={13} fontWeight={800} fill={up ? '#2440B4' : '#c2410c'}>{up ? '+' : '−'}{Math.abs(a.b - a.a)}</text>
                                </g>
                            );
                        })}
                        <motion.g initial={false} animate={{ x: xs(s.at), y: Y - 22 }} transition={{ type: 'spring', stiffness: 90, damping: 12 }}>
                            <ellipse cx={0} cy={4} rx={13} ry={10} fill="#279469" stroke="#15803d" strokeWidth={2} />
                            <circle cx={-6} cy={-5} r={4.5} fill="#fff" stroke="#15803d" strokeWidth={1.5} /><circle cx={6} cy={-5} r={4.5} fill="#fff" stroke="#15803d" strokeWidth={1.5} />
                            <circle cx={-6} cy={-5} r={2} fill="#111" /><circle cx={6} cy={-5} r={2} fill="#111" />
                        </motion.g>
                    </svg>
                );
            }}
        </AnimFrame>
    );
}
