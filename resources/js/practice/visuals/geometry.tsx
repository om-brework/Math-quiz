/* Visual geometri: bangun datar, bangun ruang, kertas berpetak, persegi panjang berlabel, sudut, garis. */
import { useId } from 'react';
import type { ShapeName, SolidName } from '../types';
import { colorOf, Fallback, fmt, idNum, QBox, Svg, T, W } from './core';

const SHAPE_LABEL: Record<ShapeName, string> = {
    persegi: 'persegi', 'persegi-panjang': 'persegi panjang', segitiga: 'segitiga', lingkaran: 'lingkaran',
    'setengah-lingkaran': 'setengah lingkaran', 'seperempat-lingkaran': 'seperempat lingkaran',
};

/** Jalur bangun datar dengan kotak batas (0,0)-(w,h). `s` = ukuran dasar. */
function shapeGeom(shape: ShapeName, s: number): { d: string; w: number; h: number } {
    switch (shape) {
        case 'persegi':
            return { d: `M0 0 H${s} V${s} H0Z`, w: s, h: s };
        case 'persegi-panjang':
            return { d: `M0 0 H${fmt(s * 1.6)} V${fmt(s * 0.9)} H0Z`, w: s * 1.6, h: s * 0.9 };
        case 'segitiga': {
            const h = s * 0.92;
            return { d: `M${fmt(s * 0.55)} 0 L${fmt(s * 1.1)} ${fmt(h)} H0Z`, w: s * 1.1, h };
        }
        case 'lingkaran': {
            const r = s / 2;
            return { d: `M0 ${r} A${r} ${r} 0 1 1 ${s} ${r} A${r} ${r} 0 1 1 0 ${r}Z`, w: s, h: s };
        }
        case 'setengah-lingkaran': {
            const r = s * 0.62;
            return { d: `M0 ${fmt(r)} A${fmt(r)} ${fmt(r)} 0 0 1 ${fmt(2 * r)} ${fmt(r)}Z`, w: 2 * r, h: r };
        }
        case 'seperempat-lingkaran': {
            const r = s;
            return { d: `M0 0 A${r} ${r} 0 0 1 ${r} ${r} H0Z`, w: r, h: r };
        }
    }
}

export function Shape({ shape, label, color }: { shape: ShapeName; label?: string; color?: string }) {
    const g = shapeGeom(shape, 120);
    const [fill, stroke] = colorOf(color);
    const pad = 6;
    const labH = label ? 30 : 0;
    const w = Math.max(g.w, 120) + pad * 2;
    const h = g.h + pad * 2 + labH;
    return (
        <Svg w={w} h={h} label={`Bangun ${SHAPE_LABEL[shape]}${color ? ` berwarna ${color}` : ''}${label ? `, ${label}` : ''}`} maxWidth={w * 1.3}>
            <path d={g.d} transform={`translate(${fmt((w - g.w) / 2)} ${pad})`} fill={fill} stroke={stroke} strokeWidth={3} strokeLinejoin="round" />
            {label && <T x={w / 2} y={g.h + pad * 2 + 13} size={16} weight={700}>{label}</T>}
        </Svg>
    );
}

export function Shapes({ items, missing }: { items: { shape: ShapeName; color?: string; size?: 'small' | 'big'; rotate?: number }[]; missing?: number }) {
    const list = [...items];
    const missIdx = missing !== undefined && missing >= 0 ? missing : -1;
    const n = Math.max(list.length, missIdx + 1);
    if (!n) return <Fallback text="(tidak ada bangun)" />;
    const base = 64;
    const cells = Array.from({ length: n }, (_, i) => {
        const it = list[i];
        if (!it || i === missIdx) return { w: base, h: base, it: null };
        const g = shapeGeom(it.shape, it.size === 'small' ? base * 0.6 : base);
        const rot = it.rotate ?? 0;
        const span = rot % 180 !== 0 ? Math.hypot(g.w, g.h) : Math.max(g.w, g.h);
        return { w: Math.max(span, base * 0.7), h: Math.max(span, base * 0.7), it, g, rot };
    });
    const gap = 14;
    const rowH = Math.max(...cells.map((c) => c.h));
    let x = 0;
    const placed = cells.map((c) => {
        const p = { ...c, x };
        x += c.w + gap;
        return p;
    });
    const width = x - gap + 8;
    const h = rowH + 8;
    const desc = cells.map((c, i) => (c.it ? `${c.it.size === 'small' ? `${SHAPE_LABEL[c.it.shape]} kecil` : SHAPE_LABEL[c.it.shape]}${c.it.color ? ` ${c.it.color}` : ''}` : i === missIdx ? 'tanda tanya' : '')).join(', ');
    return (
        <Svg w={Math.max(width, W * 0.4)} h={h} label={`Deretan bangun: ${desc}`} maxWidth={Math.min(W, width * 1.15)}>
            <g transform={`translate(${fmt(Math.max(0, (W * 0.4 - width) / 2) + 4)} 4)`}>
                {placed.map((c, i) => {
                    const cy = rowH / 2;
                    const cx = c.x + c.w / 2;
                    if (!c.it || !c.g) {
                        return (
                            <g key={i}>
                                <rect x={c.x + 2} y={cy - base / 2 + 2} width={base - 4} height={base - 4} rx={10} fill="var(--v-q-bg)" stroke="var(--v-q)" strokeWidth={2.2} strokeDasharray="6 4" />
                                <T x={cx} y={cy + 1} size={30} weight={800} fill="var(--v-q)">?</T>
                            </g>
                        );
                    }
                    const [fill, stroke] = colorOf(c.it.color, i);
                    return (
                        <g key={i} transform={`translate(${fmt(cx)} ${fmt(cy)}) rotate(${c.rot ?? 0}) translate(${fmt(-c.g.w / 2)} ${fmt(-c.g.h / 2)})`}>
                            <path d={c.g.d} fill={fill} stroke={stroke} strokeWidth={2.5} strokeLinejoin="round" />
                        </g>
                    );
                })}
            </g>
        </Svg>
    );
}

/* ---------- Bangun ruang ---------- */

const SOLID_LABEL: Record<SolidName, string> = { kubus: 'kubus', balok: 'balok', kerucut: 'kerucut', tabung: 'tabung', bola: 'bola' };

export function Solid({ solid }: { solid: SolidName }) {
    const uid = useId().replace(/:/g, '');
    const st = '#334155';
    const dash = { stroke: st, strokeWidth: 1.6, strokeDasharray: '6 5', fill: 'none', opacity: 0.75 } as const;
    const edge = { stroke: st, strokeWidth: 2.2, strokeLinejoin: 'round' as const };
    let body: React.ReactNode = null;
    let w = 220;
    let h = 200;
    switch (solid) {
        case 'kubus': {
            const [x, y, s, dx, dy] = [30, 70, 110, 50, -45];
            body = (
                <>
                    <path d={`M${x} ${y} L${x + dx} ${y + dy} H${x + dx + s} L${x + s} ${y}Z`} fill="#bfdbfe" {...edge} />
                    <path d={`M${x + s} ${y} L${x + s + dx} ${y + dy} V${y + dy + s} L${x + s} ${y + s}Z`} fill="#3b82f6" {...edge} />
                    <rect x={x} y={y} width={s} height={s} fill="#60a5fa" {...edge} />
                    <path d={`M${x + dx} ${y + dy + s} L${x} ${y + s} M${x + dx} ${y + dy + s} H${x + dx + s} M${x + dx} ${y + dy + s} V${y + dy}`} {...dash} />
                </>
            );
            break;
        }
        case 'balok': {
            const [x, y, bw, bh, dx, dy] = [20, 80, 170, 90, 50, -42];
            w = 260;
            body = (
                <>
                    <path d={`M${x} ${y} L${x + dx} ${y + dy} H${x + dx + bw} L${x + bw} ${y}Z`} fill="#bbf7d0" {...edge} />
                    <path d={`M${x + bw} ${y} L${x + bw + dx} ${y + dy} V${y + dy + bh} L${x + bw} ${y + bh}Z`} fill="#1A7A56" {...edge} />
                    <rect x={x} y={y} width={bw} height={bh} fill="#4ade80" {...edge} />
                    <path d={`M${x + dx} ${y + dy + bh} L${x} ${y + bh} M${x + dx} ${y + dy + bh} H${x + dx + bw} M${x + dx} ${y + dy + bh} V${y + dy}`} {...dash} />
                </>
            );
            break;
        }
        case 'kerucut': {
            const [cx, by, rx, ry, ay] = [110, 160, 80, 20, 14];
            body = (
                <>
                    <linearGradient id={`${uid}-k`} x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0" stopColor="#fdba74" /><stop offset="0.45" stopColor="#fb923c" /><stop offset="1" stopColor="#c2410c" />
                    </linearGradient>
                    <path d={`M${cx - rx} ${by} L${cx} ${ay} L${cx + rx} ${by} A${rx} ${ry} 0 0 1 ${cx - rx} ${by}Z`} fill={`url(#${uid}-k)`} {...edge} />
                    <path d={`M${cx} ${ay} V${by} H${cx + rx}`} stroke={st} strokeWidth={1.2} strokeDasharray="3 4" fill="none" opacity={0.6} />
                    <path d={`M${cx - rx} ${by} A${rx} ${ry} 0 0 1 ${cx + rx} ${by}`} {...dash} />
                </>
            );
            h = 190;
            break;
        }
        case 'tabung': {
            const [cx, ty, by, rx, ry] = [110, 36, 160, 72, 20];
            body = (
                <>
                    <linearGradient id={`${uid}-t`} x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0" stopColor="#c4b5fd" /><stop offset="0.45" stopColor="#a78bfa" /><stop offset="1" stopColor="#6d28d9" />
                    </linearGradient>
                    <path d={`M${cx - rx} ${ty} V${by} A${rx} ${ry} 0 0 0 ${cx + rx} ${by} V${ty}`} fill={`url(#${uid}-t)`} {...edge} />
                    <ellipse cx={cx} cy={ty} rx={rx} ry={ry} fill="#ddd6fe" {...edge} />
                    <path d={`M${cx - rx} ${by} A${rx} ${ry} 0 0 1 ${cx + rx} ${by}`} {...dash} />
                </>
            );
            h = 190;
            break;
        }
        case 'bola': {
            const [cx, cy, r] = [110, 100, 85];
            body = (
                <>
                    <radialGradient id={`${uid}-b`} cx="0.36" cy="0.32" r="0.75">
                        <stop offset="0" stopColor="#fecaca" /><stop offset="0.5" stopColor="#f87171" /><stop offset="1" stopColor="#b91c1c" />
                    </radialGradient>
                    <circle cx={cx} cy={cy} r={r} fill={`url(#${uid}-b)`} {...edge} />
                    <path d={`M${cx - r} ${cy} A${r} ${r * 0.25} 0 0 1 ${cx + r} ${cy}`} stroke={st} strokeWidth={1.5} strokeDasharray="6 5" fill="none" opacity={0.7} />
                    <path d={`M${cx - r} ${cy} A${r} ${r * 0.25} 0 0 0 ${cx + r} ${cy}`} stroke={st} strokeWidth={1.6} fill="none" />
                </>
            );
            break;
        }
    }
    return (
        <Svg w={w} h={h} label={`Bangun ruang ${SOLID_LABEL[solid]}`} maxWidth={w * 1.1}>
            {body}
        </Svg>
    );
}

/* ---------- Kertas berpetak ---------- */

export function Grid({ width, height, shade, showDims, unit }: { width: number; height: number; shade?: { x: number; y: number; w: number; h: number }[]; showDims?: boolean; unit?: string }) {
    const gw = Math.max(1, Math.floor(width));
    const gh = Math.max(1, Math.floor(height));
    const cell = Math.min(36, (W - 70) / gw, 280 / gh);
    const left = showDims ? 8 : 6;
    const top = showDims ? 36 : 6;
    const rightM = showDims ? 62 : 6;
    const svgW = left + gw * cell + rightM;
    const svgH = top + gh * cell + 6;
    const shades = shade && shade.length ? shade : null;
    // label ukuran: untuk satu arsiran, ukuran arsiran itu; selain itu ukuran seluruh petak
    const target = shades && shades.length === 1 ? shades[0] : { x: 0, y: 0, w: gw, h: gh };
    const u = unit ? ` ${unit}` : '';
    const lines: string[] = [];
    for (let i = 0; i <= gw; i++) lines.push(`M${fmt(left + i * cell)} ${top} V${fmt(top + gh * cell)}`);
    for (let j = 0; j <= gh; j++) lines.push(`M${left} ${fmt(top + j * cell)} H${fmt(left + gw * cell)}`);
    const shadedCells = shades ? shades.reduce((s, r) => s + r.w * r.h, 0) : gw * gh;
    const tx = left + target.x * cell;
    const ty = top + target.y * cell;
    return (
        <Svg w={svgW} h={svgH} label={`Kertas berpetak ${gw} × ${gh}${shades ? `, ${shadedCells} petak diarsir` : ''}${showDims ? `, panjang ${target.w}${u}, lebar ${target.h}${u}` : ''}`}>
            <rect x={left} y={top} width={fmt(gw * cell)} height={fmt(gh * cell)} fill="var(--v-paper)" />
            {shades
                ? shades.map((r, i) => <rect key={i} x={fmt(left + r.x * cell)} y={fmt(top + r.y * cell)} width={fmt(r.w * cell)} height={fmt(r.h * cell)} fill="var(--v-shade)" />)
                : <rect x={left} y={top} width={fmt(gw * cell)} height={fmt(gh * cell)} fill="var(--v-shade)" opacity={0.55} />}
            <path d={lines.join(' ')} stroke="var(--v-line)" strokeWidth={1} />
            {shades
                ? shades.map((r, i) => <rect key={i} x={fmt(left + r.x * cell)} y={fmt(top + r.y * cell)} width={fmt(r.w * cell)} height={fmt(r.h * cell)} fill="none" stroke="var(--v-accent-strong)" strokeWidth={3} />)
                : <rect x={left} y={top} width={fmt(gw * cell)} height={fmt(gh * cell)} fill="none" stroke="var(--v-accent-strong)" strokeWidth={3} />}
            {showDims && (
                <>
                    <path d={`M${fmt(tx)} ${top - 9} H${fmt(tx + target.w * cell)} M${fmt(tx)} ${top - 14} v10 M${fmt(tx + target.w * cell)} ${top - 14} v10`} stroke="currentColor" strokeWidth={1.4} />
                    <T x={tx + (target.w * cell) / 2} y={top - 23} size={14} weight={700}>{`${idNum(target.w)}${u}`}</T>
                    <path d={`M${fmt(left + gw * cell + 12)} ${fmt(ty)} V${fmt(ty + target.h * cell)} M${fmt(left + gw * cell + 7)} ${fmt(ty)} h10 M${fmt(left + gw * cell + 7)} ${fmt(ty + target.h * cell)} h10`} stroke="currentColor" strokeWidth={1.4} />
                    <T x={left + gw * cell + 20} y={ty + (target.h * cell) / 2} size={14} weight={700} anchor="start">{`${idNum(target.h)}${u}`}</T>
                </>
            )}
        </Svg>
    );
}

/* ---------- Persegi panjang berlabel ---------- */

export function Rect({ width, height, unit, hideWidth, hideHeight }: { width: number; height: number; unit: string; hideWidth?: boolean; hideHeight?: boolean }) {
    let ratio = width > 0 && height > 0 ? width / height : 1.6;
    ratio = Math.min(2.6, Math.max(0.5, ratio));
    let rw = 260;
    let rh = rw / ratio;
    if (rh > 160) { rh = 160; rw = rh * ratio; }
    const x = 20;
    const y = 10;
    const svgW = x + rw + 90;
    const svgH = y + rh + 40;
    const m = 14;
    return (
        <Svg w={svgW} h={svgH} label={`Persegi panjang dengan panjang ${hideWidth ? 'ditanyakan' : `${idNum(width)} ${unit}`} dan lebar ${hideHeight ? 'ditanyakan' : `${idNum(height)} ${unit}`}`}>
            <rect x={x} y={y} width={fmt(rw)} height={fmt(rh)} fill="var(--v-shade-soft)" stroke="currentColor" strokeWidth={3} strokeLinejoin="round" />
            {[[x, y, 1, 1], [x + rw, y, -1, 1], [x, y + rh, 1, -1], [x + rw, y + rh, -1, -1]].map(([cx, cy, sx, sy], i) => (
                <path key={i} d={`M${fmt(cx + sx * m)} ${fmt(cy)} V${fmt(cy + sy * m)} H${fmt(cx)}`} fill="none" stroke="currentColor" strokeWidth={1.3} />
            ))}
            {hideWidth ? <QBox x={x + rw / 2} y={y + rh + 20} w={30} h={24} /> : <T x={x + rw / 2} y={y + rh + 20} size={16} weight={700}>{`${idNum(width)} ${unit}`}</T>}
            {hideHeight ? <QBox x={x + rw + 26} y={y + rh / 2} w={30} h={24} /> : <T x={x + rw + 10} y={y + rh / 2} size={16} weight={700} anchor="start">{`${idNum(height)} ${unit}`}</T>}
        </Svg>
    );
}

/* ---------- Sudut ---------- */

export function Angle({ degrees, showRightMark }: { degrees: number; showRightMark?: boolean }) {
    const deg = Math.max(1, Math.min(359, degrees));
    const rad = (deg * Math.PI) / 180;
    const L = 150;
    const u1 = [1, 0];
    const u2 = [Math.cos(rad), -Math.sin(rad)];
    const pts = [[0, 0], [L, 0], [L * u2[0], L * u2[1]]];
    if (deg > 90) pts.push([-30, 0]);
    if (deg > 180) pts.push([0, 30]);
    const pad = 14;
    const minX = Math.min(...pts.map((p) => p[0])) - pad;
    const maxX = Math.max(...pts.map((p) => p[0])) + pad;
    const minY = Math.min(...pts.map((p) => p[1]), -40) - pad;
    const maxY = Math.max(...pts.map((p) => p[1])) + pad;
    const vx = -minX;
    const vy = -minY;
    const r = deg < 30 ? 56 : 36;
    const isRight = showRightMark && Math.abs(deg - 90) < 0.5;
    const s = 20;
    const arc = `M${fmt(vx + r)} ${fmt(vy)} A${r} ${r} 0 ${deg > 180 ? 1 : 0} 0 ${fmt(vx + r * u2[0])} ${fmt(vy + r * u2[1])}`;
    const sector = `M${fmt(vx)} ${fmt(vy)} L${fmt(vx + r)} ${fmt(vy)} A${r} ${r} 0 ${deg > 180 ? 1 : 0} 0 ${fmt(vx + r * u2[0])} ${fmt(vy + r * u2[1])}Z`;
    return (
        <Svg w={maxX - minX} h={maxY - minY} label={`Sudut${isRight ? ' siku-siku' : ''} yang dibentuk dua garis dari satu titik`} maxWidth={Math.min(W, (maxX - minX) * 1.2)}>
            {isRight ? (
                <>
                    <path d={`M${vx} ${vy} L${vx + s * u1[0]} ${vy} L${fmt(vx + s * u1[0] + s * u2[0])} ${fmt(vy + s * u2[1])} L${fmt(vx + s * u2[0])} ${fmt(vy + s * u2[1])}Z`} fill="var(--v-shade-soft)" />
                    <path d={`M${vx + s * u1[0]} ${vy} L${fmt(vx + s * u1[0] + s * u2[0])} ${fmt(vy + s * u2[1])} L${fmt(vx + s * u2[0])} ${fmt(vy + s * u2[1])}`} fill="none" stroke="var(--v-q)" strokeWidth={2.2} />
                </>
            ) : (
                <>
                    <path d={sector} fill="var(--v-shade-soft)" />
                    <path d={arc} fill="none" stroke="var(--v-q)" strokeWidth={2.4} />
                </>
            )}
            <line x1={vx} y1={vy} x2={vx + L} y2={vy} stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" />
            <line x1={vx} y1={vy} x2={fmt(vx + L * u2[0])} y2={fmt(vy + L * u2[1])} stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" />
            <circle cx={vx} cy={vy} r={5} fill="currentColor" />
        </Svg>
    );
}

/* ---------- Dua garis ---------- */

export function Lines({ relation, rotate = 0 }: { relation: 'parallel' | 'perpendicular' | 'intersecting'; rotate?: number }) {
    const l = 100;
    let a: number[];
    let b: number[];
    if (relation === 'parallel') {
        a = [-l, -32, l, -32];
        b = [-l, 32, l, 32];
    } else if (relation === 'perpendicular') {
        a = [-l, 25, l, 25];
        b = [-30, -l + 10, -30, l];
    } else {
        const t = (35 * Math.PI) / 180;
        a = [-l, 20, l, 20];
        b = [-l * Math.cos(t) + 20, 20 + l * Math.sin(t), l * Math.cos(t) + 20, 20 - l * Math.sin(t)];
    }
    const r = (rotate * Math.PI) / 180;
    const rot = (p: number[]) => [p[0] * Math.cos(r) - p[1] * Math.sin(r), p[0] * Math.sin(r) + p[1] * Math.cos(r), p[2] * Math.cos(r) - p[3] * Math.sin(r), p[2] * Math.sin(r) + p[3] * Math.cos(r)];
    a = rot(a);
    b = rot(b);
    const xs = [a[0], a[2], b[0], b[2]];
    const ys = [a[1], a[3], b[1], b[3]];
    const pad = 12;
    const minX = Math.min(...xs) - pad;
    const minY = Math.min(...ys) - pad;
    const w = Math.max(...xs) + pad - minX;
    const h = Math.max(...ys) + pad - minY;
    const name = { parallel: 'sejajar', perpendicular: 'tegak lurus', intersecting: 'berpotongan' }[relation];
    const seg = (p: number[], color: string) => (
        <g>
            <line x1={fmt(p[0] - minX)} y1={fmt(p[1] - minY)} x2={fmt(p[2] - minX)} y2={fmt(p[3] - minY)} stroke={color} strokeWidth={4} strokeLinecap="round" />
            <circle cx={fmt(p[0] - minX)} cy={fmt(p[1] - minY)} r={4.5} fill={color} />
            <circle cx={fmt(p[2] - minX)} cy={fmt(p[3] - minY)} r={4.5} fill={color} />
        </g>
    );
    return (
        <Svg w={w} h={h} label={`Dua garis lurus (${name})`} maxWidth={Math.min(W, w * 1.15)}>
            {seg(a, 'var(--v-line-a)')}
            {seg(b, 'var(--v-line-b)')}
        </Svg>
    );
}
