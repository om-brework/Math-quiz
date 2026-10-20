/* Visual pengukuran: penggaris (cm), timbangan jarum, gelas ukur. */
import type { ObjectName } from '../types';
import { fmt, idNum, Svg, T, W } from './core';
import { OBJECT_LABEL, ObjectIcon } from './icons';

/** Batas kiri-kanan gambar ikon (di kotak 40×40), supaya ujung benda tepat di angka penggaris. */
const ICON_X: Record<ObjectName, [number, number]> = {
    apel: [5, 35], jeruk: [6, 34], kelereng: [6, 34], permen: [1.5, 38.5], bintang: [3.8, 36.2], buku: [9, 32],
    pensil: [0, 40], bola: [6, 34], kue: [7, 33], ikan: [3, 38], bunga: [7.1, 32.9], mobil: [3, 37],
};
const ICON_Y: Record<ObjectName, [number, number]> = {
    apel: [3.5, 35.5], jeruk: [4.5, 36], kelereng: [6, 34], permen: [12.5, 27.5], bintang: [4.5, 36], buku: [4.5, 35.5],
    pensil: [0, 40], bola: [6, 34], kue: [1, 36], ikan: [10, 30], bunga: [7, 38], mobil: [10.5, 33.6],
};

function Pencil({ x1, x2, y, h }: { x1: number; x2: number; y: number; h: number }) {
    const len = x2 - x1;
    const er = Math.min(14, len * 0.08);
    const fe = Math.min(9, len * 0.05);
    const tip = Math.min(26, len * 0.16);
    const b0 = x1 + er + fe;
    const b1 = x2 - tip;
    return (
        <g strokeLinejoin="round">
            <rect x={x1} y={y} width={er + 2} height={h} rx={3} fill="#f472b6" stroke="#9d174d" strokeWidth={1.2} />
            <rect x={x1 + er} y={y} width={fe} height={h} fill="#cbd5e1" stroke="#64748b" strokeWidth={1.2} />
            <rect x={b0} y={y} width={b1 - b0} height={h} fill="#facc15" stroke="#a16207" strokeWidth={1.2} />
            <path d={`M${b0} ${y + h / 3} H${b1} M${b0} ${y + (2 * h) / 3} H${b1}`} stroke="#eab308" strokeWidth={1} />
            <path d={`M${b1} ${y} L${x2} ${y + h / 2} L${b1} ${y + h}Z`} fill="#fde7c3" stroke="#a16207" strokeWidth={1.2} />
            <path d={`M${x2 - tip * 0.3} ${y + h / 2 - h * 0.15} L${x2} ${y + h / 2} L${x2 - tip * 0.3} ${y + h / 2 + h * 0.15}Z`} fill="#334155" />
        </g>
    );
}

export function Ruler({ start, end, item = 'pensil' }: { start: number; end: number; item?: ObjectName }) {
    const a = Math.min(start, end);
    const b = Math.max(start, end);
    const len = Math.min(30, Math.max(10, Math.ceil(b) + 1));
    const pad = 16;
    const cm = (W - pad * 2 - 20) / len;
    const rx = pad;
    const x = (v: number) => rx + 10 + v * cm;
    const x1 = x(a);
    const x2 = x(b);
    const span = x2 - x1;

    // ukuran benda
    let objH: number;
    let draw: (top: number) => React.ReactNode;
    if (item === 'pensil') {
        objH = 22;
        draw = (top) => <Pencil x1={x1} x2={x2} y={top} h={objH} />;
    } else {
        const [xa, xb] = ICON_X[item];
        const [ya, yb] = ICON_Y[item];
        const sx = span / (xb - xa);
        const sy = Math.min(sx, 96 / (yb - ya));
        objH = (yb - ya) * sy;
        draw = (top) => (
            <g transform={`translate(${fmt(x1 - xa * sx)} ${fmt(top - ya * sy)}) scale(${fmt(sx)} ${fmt(sy)})`}>
                <ObjectIcon name={item} x={0} y={0} size={40} />
            </g>
        );
    }
    const objTop = 6;
    const rulerTop = objTop + objH + 14;
    const rh = 50;
    const h = rulerTop + rh + 6;
    const ticks: React.ReactNode[] = [];
    const showMm = cm >= 18;
    for (let i = 0; i <= len * 10; i++) {
        const isCm = i % 10 === 0;
        const isHalf = i % 5 === 0;
        if (!isCm && !showMm && !isHalf) continue;
        const xx = x(i / 10);
        const th = isCm ? 17 : isHalf ? 11 : 6.5;
        ticks.push(<line key={i} x1={fmt(xx)} x2={fmt(xx)} y1={rulerTop} y2={rulerTop + th} stroke="#1f2937" strokeWidth={isCm ? 1.6 : 0.9} />);
        if (isCm) ticks.push(<T key={`l${i}`} x={xx} y={rulerTop + 29} size={len > 20 ? 10.5 : 13} weight={700} fill="#1f2937">{i / 10}</T>);
    }
    return (
        <Svg h={h} label={`${OBJECT_LABEL[item]} di atas penggaris, dari angka ${idNum(a)} sampai ${idNum(b)} cm`}>
            {draw(objTop)}
            <path d={`M${fmt(x1)} ${objTop + objH / 2} V${rulerTop} M${fmt(x2)} ${objTop + objH / 2} V${rulerTop}`} stroke="var(--v-q)" strokeWidth={1.5} strokeDasharray="4 3" />
            <rect x={rx} y={rulerTop} width={fmt(len * cm + 20)} height={rh} rx={4} fill="#fde68a" stroke="#a16207" strokeWidth={1.5} />
            {ticks}
            <T x={rx + len * cm + 16} y={rulerTop + rh - 10} size={11} anchor="end" weight={700} fill="#78350f">cm</T>
        </Svg>
    );
}

/** Pilih selang label supaya tidak lebih dari ~10 label. */
function labelEvery(n: number): number {
    for (const k of [1, 2, 4, 5, 10, 20, 25, 50]) if (n / k <= 10) return k;
    return Math.ceil(n / 10);
}

export function Scale({ kind, value, unit, max, step }: { kind: 'mass' | 'volume'; value: number; unit: string; max: number; step: number }) {
    const st = step > 0 ? step : max / 10 || 1;
    const n = Math.max(1, Math.round(max / st));
    const k = labelEvery(n);
    const v = Math.max(0, Math.min(max, value));

    if (kind === 'mass') {
        const cx = 140;
        const cy = 156;
        const face = 112;
        const R = 80; // ujung luar garis skala; angka di luar garis supaya tidak tertutup jarum
        const a0 = -135;
        const ang = (val: number) => a0 + (val / max) * 270;
        const pt = (deg: number, r: number) => [cx + r * Math.sin((deg * Math.PI) / 180), cy - r * Math.cos((deg * Math.PI) / 180)] as const;
        const [nx, ny] = pt(ang(v), R - 2);
        const [bx, by] = pt(ang(v) + 180, 14);
        return (
            <Svg w={280} h={286} label={`Timbangan jarum, skala 0 sampai ${idNum(max)} ${unit}, jarum menunjuk ${idNum(value)} ${unit}`} maxWidth={300}>
                <rect x={60} y={6} width={160} height={18} rx={9} fill="#94a3b8" stroke="#475569" strokeWidth={1.5} />
                <rect x={128} y={22} width={24} height={14} fill="#64748b" />
                <rect x={20} y={34} width={240} height={246} rx={36} fill="#e11d48" stroke="#9f1239" strokeWidth={2} />
                <circle cx={cx} cy={cy} r={face} fill="#f8fafc" stroke="#9f1239" strokeWidth={3} />
                <path d={`M${fmt(pt(a0, R)[0])} ${fmt(pt(a0, R)[1])} A${R} ${R} 0 1 1 ${fmt(pt(135, R)[0])} ${fmt(pt(135, R)[1])}`} fill="none" stroke="#1f2937" strokeWidth={1.4} />
                {Array.from({ length: n + 1 }, (_, i) => {
                    const major = i % k === 0 || i === n;
                    const [x1, y1] = pt(ang(i * st), R - (major ? 14 : 9));
                    const [x2, y2] = pt(ang(i * st), R);
                    return <line key={i} x1={fmt(x1)} y1={fmt(y1)} x2={fmt(x2)} y2={fmt(y2)} stroke="#1f2937" strokeWidth={major ? 2.4 : 1.4} />;
                })}
                {Array.from({ length: n + 1 }, (_, i) => {
                    if (i % k !== 0 && i !== n) return null;
                    const [x, y] = pt(ang(i * st), R + 16);
                    return <T key={i} x={x} y={y} size={n > 12 ? 12 : 13.5} weight={700} fill="#1f2937">{idNum(Math.round(i * st * 1000) / 1000)}</T>;
                })}
                <T x={cx} y={cy + 46} size={16} weight={800} fill="#475569">{unit}</T>
                <line x1={fmt(bx)} y1={fmt(by)} x2={fmt(nx)} y2={fmt(ny)} stroke="#dc2626" strokeWidth={3.5} strokeLinecap="round" />
                <circle cx={cx} cy={cy} r={8} fill="#1f2937" />
            </Svg>
        );
    }

    // gelas ukur
    const tubeX = 130;
    const tubeW = 90;
    const top = 40;
    const bottom = 300;
    const y = (val: number) => bottom - (val / max) * (bottom - top);
    const ly = y(v);
    return (
        <Svg w={300} h={330} label={`Gelas ukur, skala 0 sampai ${idNum(max)} ${unit}, berisi air sampai ${idNum(value)} ${unit}`} maxWidth={280}>
            <path d={`M${tubeX} ${ly} H${tubeX + tubeW} V${bottom + 6} Q${tubeX + tubeW} ${bottom + 12} ${tubeX + tubeW - 6} ${bottom + 12} H${tubeX + 6} Q${tubeX} ${bottom + 12} ${tubeX} ${bottom + 6}Z`} fill="#7dd3fc" opacity={0.85} />
            <path d={`M${tubeX} ${ly - 3} Q${tubeX + tubeW / 2} ${ly + 5} ${tubeX + tubeW} ${ly - 3}`} fill="none" stroke="#0284c7" strokeWidth={2} />
            <path d={`M${tubeX - 4} ${top - 22} H${tubeX} V${bottom + 6} Q${tubeX} ${bottom + 12} ${tubeX + 6} ${bottom + 12} H${tubeX + tubeW - 6} Q${tubeX + tubeW} ${bottom + 12} ${tubeX + tubeW} ${bottom + 6} V${top - 22} Q${tubeX + tubeW + 4} ${top - 28} ${tubeX + tubeW + 12} ${top - 30}`} fill="none" stroke="currentColor" strokeWidth={3} strokeLinejoin="round" />
            <rect x={tubeX - 30} y={bottom + 12} width={tubeW + 60} height={12} rx={4} fill="var(--v-line)" />
            {Array.from({ length: n + 1 }, (_, i) => {
                const major = i % k === 0 || i === n;
                const yy = y(i * st);
                return <line key={i} x1={tubeX} x2={tubeX + (major ? 30 : 18)} y1={fmt(yy)} y2={fmt(yy)} stroke="currentColor" strokeWidth={major ? 2.2 : 1.3} />;
            })}
            {Array.from({ length: n + 1 }, (_, i) => {
                if (i % k !== 0 && i !== n) return null;
                if (i === 0) return null;
                return <T key={i} x={tubeX - 10} y={y(i * st)} size={14} weight={700} anchor="end">{idNum(Math.round(i * st * 1000) / 1000)}</T>;
            })}
            <T x={tubeX + tubeW + 14} y={bottom - 10} size={16} weight={800} anchor="start">{unit}</T>
        </Svg>
    );
}
