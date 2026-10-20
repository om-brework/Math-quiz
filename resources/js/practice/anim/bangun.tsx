/* Animasi bangun geometri: titik, sisi, dan sudut muncul bertahap; bagian yang sedang dibahas disorot. */
import { motion } from 'motion/react';
import { MathText } from '../MathText';
import { AnimFrame } from './frame';

export interface BangunSpec {
    /** koordinat titik (sumbu y ke atas), satuan bebas — akan diskalakan agar muat */
    titik: Record<string, [number, number]>;
    /** sisi/ruas garis: [A, B, label?] */
    sisi: [string, string, string?][];
    /** sudut di titik `di`, diapit `dari` dan `ke` */
    sudut?: { di: string; dari: string; ke: string; label?: string; siku?: boolean }[];
    /** lingkaran opsional: pusat dan jari-jari (satuan yang sama dengan titik) */
    lingkaran?: { pusat: [number, number]; r: number }[];
    langkah: { say: string; sisi?: number; sudut?: number; sorot?: string[]; lingkaran?: number }[];
    title?: string;
}

const W = 440, H = 280, PAD = 34;

export function BangunAnim({ titik, sisi, sudut = [], lingkaran = [], langkah, title }: BangunSpec) {
    const pts = Object.values(titik).concat(lingkaran.flatMap((c) => [[c.pusat[0] - c.r, c.pusat[1] - c.r], [c.pusat[0] + c.r, c.pusat[1] + c.r]] as [number, number][]));
    const minX = Math.min(...pts.map((p) => p[0])), maxX = Math.max(...pts.map((p) => p[0]));
    const minY = Math.min(...pts.map((p) => p[1])), maxY = Math.max(...pts.map((p) => p[1]));
    const k = Math.min((W - 2 * PAD) / Math.max(1e-6, maxX - minX), (H - 2 * PAD) / Math.max(1e-6, maxY - minY));
    const ox = (W - (maxX - minX) * k) / 2, oy = (H - (maxY - minY) * k) / 2;
    const P = (name: string) => { const [x, y] = titik[name]; return [ox + (x - minX) * k, H - (oy + (y - minY) * k)] as const; };
    const cx = Object.keys(titik).reduce((s, n) => s + P(n)[0], 0) / Object.keys(titik).length;
    const cy = Object.keys(titik).reduce((s, n) => s + P(n)[1], 0) / Object.keys(titik).length;

    return (
        <AnimFrame title={title ?? 'Animasi bangun'} steps={langkah} interval={2500}>
            {(i) => {
                const s = langkah[i];
                const ns = s.sisi ?? sisi.length, na = s.sudut ?? 0, nl = s.lingkaran ?? lingkaran.length;
                const hot = new Set(s.sorot ?? []);
                return (
                    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: W }} className="text-slate-700 dark:text-slate-200" role="img" aria-label={s.say}>
                        {lingkaran.slice(0, nl).map((c, j) => {
                            const [x, y] = [ox + (c.pusat[0] - minX) * k, H - (oy + (c.pusat[1] - minY) * k)];
                            return <motion.circle key={`l${j}`} cx={x} cy={y} r={c.r * k} fill="none" stroke="#38bdf8" strokeWidth={2.5} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }} />;
                        })}
                        {sisi.slice(0, ns).map(([a, b, label], j) => {
                            const [x1, y1] = P(a), [x2, y2] = P(b);
                            const on = hot.has(`${a}${b}`) || hot.has(`${b}${a}`);
                            const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
                            const nx = mx - cx, ny = my - cy, len = Math.hypot(nx, ny) || 1;
                            return (
                                <g key={`s${j}`}>
                                    <motion.line x1={x1} y1={y1} x2={x2} y2={y2} stroke={on ? '#f97316' : 'currentColor'} strokeWidth={on ? 5 : 3} strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }} />
                                    {label && <foreignObject x={mx + (nx / len) * 18 - 40} y={my + (ny / len) * 18 - 12} width={80} height={24}><div className={`text-center text-sm font-bold ${on ? 'text-orange-600' : ''}`}><MathText>{`$${label}$`}</MathText></div></foreignObject>}
                                </g>
                            );
                        })}
                        {sudut.slice(0, na).map((g, j) => {
                            const [x, y] = P(g.di), [x1, y1] = P(g.dari), [x2, y2] = P(g.ke);
                            const a1 = Math.atan2(y1 - y, x1 - x), a2 = Math.atan2(y2 - y, x2 - x);
                            let d = a2 - a1; while (d <= -Math.PI) d += 2 * Math.PI; while (d > Math.PI) d -= 2 * Math.PI;
                            const r = 24, on = hot.has(g.di);
                            const p1 = [x + r * Math.cos(a1), y + r * Math.sin(a1)], p2 = [x + r * Math.cos(a1 + d), y + r * Math.sin(a1 + d)];
                            const mid = a1 + d / 2;
                            const path = g.siku
                                ? `M ${x + 14 * Math.cos(a1)} ${y + 14 * Math.sin(a1)} L ${x + 14 * Math.cos(a1) + 14 * Math.cos(a1 + d)} ${y + 14 * Math.sin(a1) + 14 * Math.sin(a1 + d)} L ${x + 14 * Math.cos(a1 + d)} ${y + 14 * Math.sin(a1 + d)}`
                                : `M ${p1[0]} ${p1[1]} A ${r} ${r} 0 0 ${d > 0 ? 1 : 0} ${p2[0]} ${p2[1]}`;
                            return (
                                <g key={`a${j}`}>
                                    <motion.path d={path} fill="none" stroke={on ? '#f97316' : '#a855f7'} strokeWidth={2.6} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
                                    {g.label && <foreignObject x={x + 44 * Math.cos(mid) - 34} y={y + 44 * Math.sin(mid) - 12} width={68} height={24}><div className="text-center text-sm font-bold text-violet-600 dark:text-violet-300"><MathText>{`$${g.label}$`}</MathText></div></foreignObject>}
                                </g>
                            );
                        })}
                        {Object.keys(titik).map((n) => {
                            const [x, y] = P(n), dx = x - cx, dy = y - cy, len = Math.hypot(dx, dy) || 1;
                            return (
                                <g key={n}>
                                    <circle cx={x} cy={y} r={4} fill="currentColor" />
                                    <text x={x + (dx / len) * 16} y={y + (dy / len) * 16 + 5} textAnchor="middle" fontSize={15} fontWeight={800} fill={hot.has(n) ? '#ea580c' : 'currentColor'}>{n}</text>
                                </g>
                            );
                        })}
                    </svg>
                );
            }}
        </AnimFrame>
    );
}
