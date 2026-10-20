/* Animasi pecahan: potong satu benda utuh menjadi bagian sama besar, lalu arsir bagian satu per satu. */
import { motion } from 'motion/react';
import { useMemo } from 'react';
import { AnimFrame, type AnimStep } from './frame';

export function PecahanAnim({ parts, shaded, shape = 'lingkaran', name, title }: { parts: number; shaded: number; shape?: 'lingkaran' | 'batang'; name?: string; title?: string }) {
    const benda = name ?? (shape === 'lingkaran' ? 'martabak' : 'cokelat');
    const states = useMemo(() => {
        const out: (AnimStep & { cut: boolean; n: number })[] = [
            { say: `Ini 1 ${benda} utuh.`, tag: 'Utuh', cut: false, n: 0 },
            { say: `Potong menjadi ${parts} bagian yang sama besar. Penyebutnya ${parts}.`, tag: 'Potong', cut: true, n: 0 },
        ];
        for (let k = 1; k <= shaded; k++) out.push({ say: `Ambil ${k} bagian: $\\frac{${k}}{${parts}}$`, tag: `${k} bagian`, cut: true, n: k });
        out.push({ say: `${shaded} dari ${parts} bagian = $\\frac{${shaded}}{${parts}}$. Pembilang ${shaded} (yang diambil), penyebut ${parts} (semua bagian).`, tag: 'Pecahan', cut: true, n: shaded });
        return out;
    }, [parts, shaded, benda]);
    const fill = shape === 'lingkaran' ? '#EFAA3C' : '#a16207', on = shape === 'lingkaran' ? '#D9503D' : '#f472b6';
    return (
        <AnimFrame title={title ?? 'Animasi pecahan'} steps={states} interval={1700}>
            {(i) => {
                const s = states[i];
                if (shape === 'batang') {
                    const w = 360, h = 90, x0 = 40, pw = w / parts;
                    return (
                        <svg viewBox="0 0 440 130" width="100%" style={{ maxWidth: 440 }} role="img" aria-label={s.say}>
                            <rect x={x0} y={20} width={w} height={h} rx={10} fill={fill} />
                            {Array.from({ length: parts }, (_, k) => (
                                <motion.rect key={k} x={x0 + k * pw} y={20} width={pw} height={h} rx={k === 0 || k === parts - 1 ? 10 : 0} initial={false} animate={{ fill: k < s.n ? on : fill, opacity: 1 }} />
                            ))}
                            {s.cut && Array.from({ length: parts - 1 }, (_, k) => (
                                <motion.line key={k} x1={x0 + (k + 1) * pw} x2={x0 + (k + 1) * pw} y1={20} y2={20 + h} stroke="#fff" strokeWidth={4} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: k * 0.08 }} />
                            ))}
                            <rect x={x0} y={20} width={w} height={h} rx={10} fill="none" stroke="#713f12" strokeWidth={3} />
                        </svg>
                    );
                }
                const cx = 220, cy = 105, r = 90;
                const pt = (t: number) => [cx + r * Math.sin(t * 2 * Math.PI), cy - r * Math.cos(t * 2 * Math.PI)];
                return (
                    <svg viewBox="0 0 440 210" width="100%" style={{ maxWidth: 440 }} role="img" aria-label={s.say}>
                        <circle cx={cx} cy={cy} r={r} fill={fill} stroke="#b45309" strokeWidth={4} />
                        {Array.from({ length: parts }, (_, k) => {
                            const [x1, y1] = pt(k / parts), [x2, y2] = pt((k + 1) / parts);
                            const large = 1 / parts > 0.5 ? 1 : 0;
                            return <motion.path key={k} d={parts === 1 ? '' : `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`} initial={false} animate={{ fill: k < s.n ? on : 'rgba(0,0,0,0)', scale: k < s.n ? 1.04 : 1 }} style={{ originX: `${cx}px`, originY: `${cy}px` }} />;
                        })}
                        {s.cut && Array.from({ length: parts }, (_, k) => {
                            const [x, y] = pt(k / parts);
                            return <motion.line key={k} x1={cx} y1={cy} x2={x} y2={y} stroke="#fff" strokeWidth={4} strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: k * 0.08 }} />;
                        })}
                        {/* titik-titik topping supaya terlihat seperti martabak/pizza */}
                        {[[-40, -30], [30, -45], [45, 20], [-20, 40], [0, 0], [-55, 15], [20, 55]].map(([dx, dy], k) => <circle key={k} cx={cx + dx} cy={cy + dy} r={5} fill="#92400e" opacity={0.5} />)}
                    </svg>
                );
            }}
        </AnimFrame>
    );
}
