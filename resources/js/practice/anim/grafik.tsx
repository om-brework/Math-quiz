/* Animasi grafik fungsi: sumbu muncul, kurva tergambar perlahan, lalu titik-titik penting diberi tanda. */
import { motion } from 'motion/react';
import { MathText } from '../MathText';
import { compile } from './expr';
import { AnimFrame, type AnimStep } from './frame';

export interface GrafikSpec {
    xmin: number; xmax: number; ymin: number; ymax: number;
    /** f: ekspresi dalam x, label: teks LaTeX tanpa $ (opsional) */
    kurva: { f: string; label?: string; warna?: string; dari?: number; sampai?: number }[];
    titik?: { x: number; y: number; label?: string }[];
    /** garis lurus tambahan, misalnya asimtot: x = a (tegak) atau y = b (datar) */
    garis?: { x?: number; y?: number; label?: string }[];
    /** langkah: berapa kurva / titik / garis yang sudah tampak + keterangannya */
    langkah?: { say: string; kurva?: number; titik?: number; garis?: number }[];
    title?: string;
}

const W = 440, H = 300, PAD = 30;
const COLORS = ['#4467E0', '#E2761F', '#279469', '#7E5FC0'];

function niceStep(range: number) {
    const raw = range / 8, p = 10 ** Math.floor(Math.log10(raw)), m = raw / p;
    return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p;
}

export function GrafikAnim(spec: GrafikSpec) {
    const { xmin, xmax, ymin, ymax, kurva, titik = [], garis = [] } = spec;
    const sx = (x: number) => PAD + ((x - xmin) / (xmax - xmin)) * (W - 2 * PAD);
    const sy = (y: number) => H - PAD - ((y - ymin) / (ymax - ymin)) * (H - 2 * PAD);
    const paths = kurva.map((k) => {
        const f = compile(k.f);
        const a = k.dari ?? xmin, b = k.sampai ?? xmax, n = 240;
        let d = '', pen = false;
        for (let i = 0; i <= n; i++) {
            const x = a + ((b - a) * i) / n, y = f(x);
            const ok = Number.isFinite(y) && y > ymin - 2 * (ymax - ymin) && y < ymax + 2 * (ymax - ymin);
            if (!ok) { pen = false; continue; }
            d += `${pen ? 'L' : 'M'} ${sx(x).toFixed(1)} ${sy(y).toFixed(1)} `;
            pen = true;
        }
        return d;
    });
    const steps = spec.langkah ?? [
        { say: 'Ini bidang koordinat.', kurva: 0, titik: 0, garis: 0 },
        ...kurva.map((k, i) => ({ say: k.label ? `Gambar $${k.label}$.` : 'Gambar kurvanya.', kurva: i + 1, titik: 0, garis: 0 })),
        ...(garis.length ? [{ say: 'Tambahkan garis bantu.', kurva: kurva.length, titik: 0, garis: garis.length }] : []),
        ...(titik.length ? [{ say: 'Tandai titik-titik penting.', kurva: kurva.length, titik: titik.length, garis: garis.length }] : []),
    ];
    const sxStep = niceStep(xmax - xmin), syStep = niceStep(ymax - ymin);
    const ticksX: number[] = [], ticksY: number[] = [];
    for (let v = Math.ceil(xmin / sxStep) * sxStep; v <= xmax + 1e-9; v += sxStep) ticksX.push(+v.toFixed(6));
    for (let v = Math.ceil(ymin / syStep) * syStep; v <= ymax + 1e-9; v += syStep) ticksY.push(+v.toFixed(6));
    const ax = Math.min(Math.max(0, ymin), ymax), ay = Math.min(Math.max(0, xmin), xmax);

    return (
        <AnimFrame title={spec.title ?? 'Animasi grafik'} steps={steps as AnimStep[]} interval={2400}>
            {(i) => {
                const s = steps[i];
                const nk = s.kurva ?? kurva.length, nt = s.titik ?? 0, ng = s.garis ?? 0;
                return (
                    <div className="w-full">
                        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: W }} className="mx-auto block text-slate-700 dark:text-slate-200" role="img" aria-label={s.say}>
                            {ticksX.map((v) => <line key={`gx${v}`} x1={sx(v)} x2={sx(v)} y1={PAD} y2={H - PAD} stroke="currentColor" strokeOpacity={0.08} />)}
                            {ticksY.map((v) => <line key={`gy${v}`} y1={sy(v)} y2={sy(v)} x1={PAD} x2={W - PAD} stroke="currentColor" strokeOpacity={0.08} />)}
                            <line x1={PAD - 6} x2={W - PAD + 8} y1={sy(ax)} y2={sy(ax)} stroke="currentColor" strokeWidth={1.6} markerEnd="url(#panah)" />
                            <line y1={H - PAD + 6} y2={PAD - 8} x1={sx(ay)} x2={sx(ay)} stroke="currentColor" strokeWidth={1.6} markerEnd="url(#panah)" />
                            <defs><clipPath id="area-grafik"><rect x={PAD} y={PAD - 4} width={W - 2 * PAD} height={H - 2 * PAD + 8} /></clipPath><marker id="panah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor" /></marker></defs>
                            <text x={W - PAD + 4} y={sy(ax) - 8} fontSize={13} fontStyle="italic" fill="currentColor">x</text>
                            <text x={sx(ay) + 8} y={PAD - 6} fontSize={13} fontStyle="italic" fill="currentColor">y</text>
                            {ticksX.filter((v) => v !== 0).map((v) => <text key={`tx${v}`} x={sx(v)} y={sy(ax) + 15} fontSize={10} textAnchor="middle" fill="currentColor" opacity={0.7}>{String(v).replace('.', ',')}</text>)}
                            {ticksY.filter((v) => v !== 0).map((v) => <text key={`ty${v}`} x={sx(ay) - 5} y={sy(v) + 3} fontSize={10} textAnchor="end" fill="currentColor" opacity={0.7}>{String(v).replace('.', ',')}</text>)}
                            {garis.slice(0, ng).map((g, k) => g.x !== undefined
                                ? <motion.line key={`g${k}`} x1={sx(g.x)} x2={sx(g.x)} y1={PAD} y2={H - PAD} stroke="#94a3b8" strokeWidth={2} strokeDasharray="6 5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
                                : <motion.line key={`g${k}`} y1={sy(g.y!)} y2={sy(g.y!)} x1={PAD} x2={W - PAD} stroke="#94a3b8" strokeWidth={2} strokeDasharray="6 5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />)}
                            <g clipPath="url(#area-grafik)">{paths.slice(0, nk).map((d, k) => (
                                <motion.path key={`k${k}`} d={d} fill="none" stroke={kurva[k].warna ?? COLORS[k % COLORS.length]} strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round"
                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, ease: 'easeInOut' }} />
                            ))}</g>
                            {titik.slice(0, nt).map((t, k) => (
                                <motion.g key={`t${k}`} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: k * 0.25, type: 'spring' }} style={{ originX: `${sx(t.x)}px`, originY: `${sy(t.y)}px` }}>
                                    <circle cx={sx(t.x)} cy={sy(t.y)} r={5.5} fill="#C23B29" stroke="#fff" strokeWidth={2} />
                                    {t.label && <text x={sx(t.x) + 8} y={sy(t.y) - 8} fontSize={12} fontWeight={700} fill="#A12F21">{t.label}</text>}
                                </motion.g>
                            ))}
                        </svg>
                        <div className="mt-1 flex flex-wrap justify-center gap-3 text-sm">
                            {kurva.slice(0, nk).filter((k) => k.label).map((k, j) => (
                                <span key={j} className="flex items-center gap-1.5"><i className="inline-block h-1 w-5 rounded" style={{ background: k.warna ?? COLORS[j % COLORS.length] }} /><MathText>{`$${k.label}$`}</MathText></span>
                            ))}
                        </div>
                    </div>
                );
            }}
        </AnimFrame>
    );
}
