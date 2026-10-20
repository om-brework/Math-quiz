/* Visual untuk membilang: benda, blok basis sepuluh, piktogram, uang. */
import { useId, type ReactNode } from 'react';
import type { ObjectName } from '../types';
import { Fallback, fmt, idNum, Svg, T, textW, W } from './core';
import { OBJECT_LABEL, ObjectIcon } from './icons';

/* ---------- Benda ---------- */

export function Objects({ item, count, group, crossed = 0 }: { item: ObjectName; count: number; group?: number; crossed?: number }) {
    const n = Math.max(0, Math.floor(count));
    if (n === 0) return <Fallback text={`0 ${OBJECT_LABEL[item]}`} />;
    const cell = n > 60 ? 36 : 44;
    const icon = cell - 4;
    const items: { x: number; y: number }[] = [];
    const boxes: { x: number; y: number; w: number; h: number }[] = [];
    let width = 0;
    let height = 0;

    const g = group && group >= 1 ? Math.floor(group) : 0;
    if (g > 0) {
        const pad = 7;
        const gap = 12;
        const cols = Math.min(g, 5);
        const rowsIn = Math.ceil(g / 5);
        const boxW = cols * cell + pad * 2;
        const boxH = rowsIn * cell + pad * 2;
        const full = Math.floor(n / g);
        const rem = n % g;
        const slots = full + (rem > 0 ? 1 : 0);
        let perRow = Math.max(1, Math.floor((W + gap) / (boxW + gap)));
        const rows = Math.ceil(slots / perRow);
        perRow = Math.ceil(slots / rows);
        for (let k = 0; k < slots; k++) {
            const bx = (k % perRow) * (boxW + gap);
            const by = Math.floor(k / perRow) * (boxH + gap);
            const inThis = k < full ? g : rem;
            if (k < full) boxes.push({ x: bx, y: by, w: boxW, h: boxH });
            for (let i = 0; i < inThis; i++) items.push({ x: bx + pad + (i % 5) * cell + 2, y: by + pad + Math.floor(i / 5) * cell + 2 });
        }
        width = Math.min(slots, perRow) * (boxW + gap) - gap;
        height = rows * (boxH + gap) - gap;
    } else {
        const perRow = n <= 5 ? n : n <= 10 ? 5 : 10;
        const split = perRow === 10 ? 10 : 0;
        for (let i = 0; i < n; i++) {
            const c = i % perRow;
            items.push({ x: c * cell + (c >= 5 ? split : 0) + 2, y: Math.floor(i / perRow) * cell + 2 });
        }
        width = perRow * cell + (perRow === 10 ? split : 0);
        height = Math.ceil(n / perRow) * cell;
    }

    const m = 4;
    const cross = Math.max(0, Math.min(n, Math.floor(crossed)));
    let label = `${n} ${OBJECT_LABEL[item]}`;
    if (g > 0) label += `, dikelompokkan ${g}-${g}: ${Math.floor(n / g)} kelompok${n % g ? ` dan sisa ${n % g}` : ''}`;
    if (cross) label += `, ${cross} di antaranya dicoret`;

    return (
        <Svg w={width + m * 2} h={height + m * 2} label={label}>
            <g transform={`translate(${m} ${m})`}>
                {boxes.map((b, i) => (
                    <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} rx={12} fill="var(--v-soft)" stroke="var(--v-accent)" strokeWidth={2} strokeDasharray="6 4" />
                ))}
                {items.map((p, i) => (
                    <g key={i}>
                        <ObjectIcon name={item} x={p.x} y={p.y} size={icon} />
                        {i >= n - cross && (
                            <g strokeLinecap="round">
                                <path d={`M${p.x + 4} ${p.y + 4} L${p.x + icon - 4} ${p.y + icon - 4} M${p.x + icon - 4} ${p.y + 4} L${p.x + 4} ${p.y + icon - 4}`} stroke="var(--v-paper)" strokeWidth={7} />
                                <path d={`M${p.x + 4} ${p.y + 4} L${p.x + icon - 4} ${p.y + icon - 4} M${p.x + icon - 4} ${p.y + 4} L${p.x + 4} ${p.y + icon - 4}`} stroke="#C23B29" strokeWidth={3.5} />
                            </g>
                        )}
                    </g>
                ))}
            </g>
        </Svg>
    );
}

/* ---------- Blok basis sepuluh ---------- */

const U = 8;
const B10 = {
    thousand: ['#c084fc', '#7e22ce'],
    hundred: ['#fdba74', '#c2410c'],
    ten: ['#86efac', '#15803d'],
    one: ['#93c5fd', '#1d4ed8'],
} as const;

function Cube({ x, y }: { x: number; y: number }) {
    const s = 10 * U;
    const d = 26;
    const [f, st] = B10.thousand;
    const lines: string[] = [];
    for (let i = 1; i < 10; i++) {
        const t = i * U;
        lines.push(`M${x + t} ${y + d} V${y + d + s}`, `M${x} ${y + d + t} H${x + s}`); // depan
        lines.push(`M${x + t} ${y + d} L${x + t + d} ${y}`); // atas, tegak ke belakang
        const k = (i / 10) * d;
        lines.push(`M${fmt(x + k)} ${fmt(y + d - k)} H${fmt(x + s + k)}`); // atas, mendatar
        lines.push(`M${fmt(x + s + k)} ${fmt(y + d - k)} V${fmt(y + d - k + s)}`); // samping, tegak
        lines.push(`M${x + s} ${y + d + t} L${x + s + d} ${y + t}`); // samping, mendatar
    }
    return (
        <g strokeLinejoin="round">
            <path d={`M${x} ${y + d} L${x + d} ${y} H${x + s + d} L${x + s} ${y + d}Z`} fill="#e9d5ff" stroke={st} strokeWidth={1.4} />
            <path d={`M${x + s} ${y + d} L${x + s + d} ${y} V${y + s} L${x + s} ${y + d + s}Z`} fill="#7E5FC0" stroke={st} strokeWidth={1.4} />
            <rect x={x} y={y + d} width={s} height={s} fill={f} stroke={st} strokeWidth={1.4} />
            <path d={lines.join(' ')} stroke={st} strokeWidth={0.6} opacity={0.7} fill="none" />
        </g>
    );
}

function Flat({ x, y }: { x: number; y: number }) {
    const s = 10 * U;
    const [f, st] = B10.hundred;
    const lines: string[] = [];
    for (let i = 1; i < 10; i++) lines.push(`M${x + i * U} ${y} V${y + s}`, `M${x} ${y + i * U} H${x + s}`);
    return (
        <g>
            <rect x={x} y={y} width={s} height={s} fill={f} stroke={st} strokeWidth={1.4} />
            <path d={lines.join(' ')} stroke={st} strokeWidth={0.6} opacity={0.75} />
        </g>
    );
}

function Rod({ x, y }: { x: number; y: number }) {
    const [f, st] = B10.ten;
    const lines: string[] = [];
    for (let i = 1; i < 10; i++) lines.push(`M${x} ${y + i * U} H${x + U}`);
    return (
        <g>
            <rect x={x} y={y} width={U} height={10 * U} fill={f} stroke={st} strokeWidth={1.3} />
            <path d={lines.join(' ')} stroke={st} strokeWidth={0.7} />
        </g>
    );
}

function Unit({ x, y }: { x: number; y: number }) {
    const [f, st] = B10.one;
    return <rect x={x} y={y} width={U} height={U} fill={f} stroke={st} strokeWidth={1.3} />;
}

export function Base10({ thousands = 0, hundreds = 0, tens, ones }: { thousands?: number; hundreds?: number; tens: number; ones: number }) {
    type Block = { w: number; h: number; draw: (x: number, y: number) => ReactNode; gapBefore: number };
    const blocks: Block[] = [];
    const cat = (n: number, make: (i: number) => Block) => {
        for (let i = 0; i < n; i++) blocks.push(make(i));
    };
    const catGap = 24;
    let first = true;
    const gapFor = (i: number, same: number) => (i === 0 ? (first ? 0 : catGap) : same);
    cat(thousands, (i) => ({ w: 10 * U + 26, h: 10 * U + 26, gapBefore: gapFor(i, 8), draw: (x, y) => <Cube x={x} y={y} /> }));
    if (thousands) first = false;
    cat(hundreds, (i) => ({ w: 10 * U, h: 10 * U, gapBefore: gapFor(i, 6), draw: (x, y) => <Flat x={x} y={y} /> }));
    if (hundreds) first = false;
    cat(tens, (i) => ({ w: U, h: 10 * U, gapBefore: gapFor(i, 5), draw: (x, y) => <Rod x={x} y={y} /> }));
    if (tens) first = false;
    // satuan: kolom berisi 5 kubus supaya mudah dihitung
    const cols = Math.ceil(ones / 5);
    cat(cols, (i) => {
        const inCol = Math.min(5, ones - i * 5);
        return {
            w: U, h: 5 * U + 4 * 3, gapBefore: gapFor(i, 5),
            draw: (x, y) => <>{Array.from({ length: inCol }, (_, k) => <Unit key={k} x={x} y={y + (4 - k) * (U + 3)} />)}</>,
        };
    });

    // tata letak mengalir dengan pindah baris; benda di satu baris rata bawah
    const lines: { items: { b: Block; x: number }[]; h: number; w: number }[] = [];
    let cur: (typeof lines)[number] = { items: [], h: 0, w: 0 };
    for (const b of blocks) {
        const x = cur.items.length ? cur.w + b.gapBefore : 0;
        if (cur.items.length && x + b.w > W) {
            lines.push(cur);
            cur = { items: [], h: 0, w: 0 };
            cur.items.push({ b, x: 0 });
            cur.w = b.w;
        } else {
            cur.items.push({ b, x });
            cur.w = x + b.w;
        }
        cur.h = Math.max(cur.h, b.h);
    }
    if (cur.items.length) lines.push(cur);
    const lineGap = 12;
    const width = Math.max(...lines.map((l) => l.w), 20);
    const height = lines.reduce((s, l) => s + l.h, 0) + lineGap * Math.max(0, lines.length - 1);
    const m = 4;
    const parts = [thousands && `${thousands} ribuan`, hundreds && `${hundreds} ratusan`, `${tens} puluhan`, `${ones} satuan`].filter(Boolean).join(', ');
    let yy = 0;
    return (
        <Svg w={width + 2 * m} h={height + 2 * m} label={`Blok basis sepuluh: ${parts}`}>
            <g transform={`translate(${m} ${m})`}>
                {lines.map((l, li) => {
                    const top = yy;
                    yy += l.h + lineGap;
                    return <g key={li}>{l.items.map(({ b, x }, i) => <g key={i}>{b.draw(x, top + l.h - b.h)}</g>)}</g>;
                })}
            </g>
        </Svg>
    );
}

/* ---------- Piktogram ---------- */

export function Pictogram({ item, scale, rows, title }: { item: ObjectName; scale: number; rows: { label: string; value: number }[]; title?: string }) {
    const uid = useId().replace(/:/g, '');
    const sc = scale > 0 ? scale : 1;
    const counts = rows.map((r) => r.value / sc);
    const maxIcons = Math.max(1, ...counts.map((c) => Math.ceil(c)));
    const labelW = Math.max(60, ...rows.map((r) => textW(r.label, 14))) + 16;
    const avail = W - labelW - 12;
    const step = Math.min(34, avail / maxIcons);
    const icon = Math.min(30, step - 2);
    const rowH = Math.max(icon + 10, 34);
    const top = title ? 30 : 0;
    const tableH = rows.length * rowH;
    const keyY = top + tableH + 14;
    const h = keyY + 34;
    const tableW = labelW + maxIcons * step + 12;
    const width = Math.max(tableW, 240);
    return (
        <Svg w={width + 2} h={h} label={`Piktogram${title ? ` ${title}` : ''}. ${rows.map((r) => `${r.label}: ${idNum(r.value / sc)} gambar`).join('; ')}. Satu gambar mewakili ${idNum(sc)}.`}>
            <g transform="translate(1 0)">
                {title && <T x={width / 2} y={13} size={15} weight={700}>{title}</T>}
                <rect x={0} y={top} width={tableW} height={tableH} rx={8} fill="var(--v-paper)" stroke="var(--v-line)" strokeWidth={1.2} />
                {rows.map((r, i) => {
                    const y = top + i * rowH;
                    const c = counts[i];
                    const full = Math.floor(c + 1e-9);
                    const frac = c - full;
                    return (
                        <g key={i}>
                            {i % 2 === 1 && <rect x={1} y={y} width={tableW - 2} height={rowH} fill="var(--v-soft)" opacity={0.6} />}
                            {i > 0 && <line x1={0} x2={tableW} y1={y} y2={y} stroke="var(--v-line)" strokeWidth={0.8} />}
                            <T x={10} y={y + rowH / 2} size={14} anchor="start">{r.label}</T>
                            {Array.from({ length: full }, (_, k) => <ObjectIcon key={k} name={item} x={labelW + 6 + k * step} y={y + (rowH - icon) / 2} size={icon} />)}
                            {frac > 0.01 && (
                                <>
                                    <clipPath id={`${uid}-c${i}`}><rect x={labelW + 6 + full * step} y={y} width={icon * frac} height={rowH} /></clipPath>
                                    <g clipPath={`url(#${uid}-c${i})`}><ObjectIcon name={item} x={labelW + 6 + full * step} y={y + (rowH - icon) / 2} size={icon} /></g>
                                </>
                            )}
                        </g>
                    );
                })}
                <line x1={labelW} x2={labelW} y1={top} y2={top + tableH} stroke="var(--v-line)" strokeWidth={1} />
                <T x={0} y={keyY + 14} size={14} anchor="start" weight={500}>Keterangan:</T>
                <ObjectIcon name={item} x={92} y={keyY} size={28} />
                <T x={126} y={keyY + 14} size={15} anchor="start" weight={700}>= {idNum(sc)}</T>
            </g>
        </Svg>
    );
}

/* ---------- Uang Rupiah ---------- */

const COINS: Record<number, { r: number; fill: string; inner?: string; stroke: string }> = {
    100: { r: 21, fill: '#e5e7eb', stroke: '#6b7280' },
    200: { r: 23, fill: '#cbd5e1', stroke: '#475569' },
    500: { r: 25, fill: '#fcd34d', stroke: '#a16207' },
    1000: { r: 27, fill: '#e2e8f0', inner: '#EFAA3C', stroke: '#64748b' },
};
const NOTES: Record<number, { fill: string; dark: string }> = {
    1000: { fill: '#b5d3a8', dark: '#3f6212' },
    2000: { fill: '#c4c9d4', dark: '#374151' },
    5000: { fill: '#d6b48a', dark: '#78350f' },
    10000: { fill: '#c9b2f0', dark: '#5b21b6' },
    20000: { fill: '#86e0b4', dark: '#065f46' },
    50000: { fill: '#93c5f5', dark: '#1e3a8a' },
    100000: { fill: '#f9a8a8', dark: '#991b1b' },
};

/** Nilai yang dianggap koin. Rp1.000 digambar sebagai koin. */
const isCoin = (v: number) => v < 1000 || v === 1000;

function Coin({ v, cx, cy }: { v: number; cx: number; cy: number }) {
    const c = COINS[v] ?? { r: 22, fill: '#e5e7eb', stroke: '#6b7280' };
    return (
        <g>
            <circle cx={cx} cy={cy} r={c.r} fill={c.fill} stroke={c.stroke} strokeWidth={2} />
            {c.inner && <circle cx={cx} cy={cy} r={c.r - 7} fill={c.inner} stroke="#b45309" strokeWidth={1} />}
            {!c.inner && <circle cx={cx} cy={cy} r={c.r - 4} fill="none" stroke={c.stroke} strokeWidth={0.8} opacity={0.7} />}
            <T x={cx} y={cy - 7} size={8} weight={600} fill="#1f2937">Rp</T>
            <T x={cx} y={cy + 4} size={v >= 1000 ? 12 : 13} weight={800} fill="#111827">{idNum(v)}</T>
        </g>
    );
}

const NW = 128;
const NH = 60;
function Note({ v, x, y }: { v: number; x: number; y: number }) {
    const c = NOTES[v] ?? { fill: '#e5e7eb', dark: '#374151' };
    return (
        <g>
            <rect x={x} y={y} width={NW} height={NH} rx={5} fill={c.fill} stroke={c.dark} strokeWidth={1.6} />
            <rect x={x + 4} y={y + 4} width={NW - 8} height={NH - 8} rx={3} fill="none" stroke={c.dark} strokeWidth={0.7} opacity={0.6} />
            <circle cx={x + 26} cy={y + NH / 2} r={14} fill="#fff" opacity={0.35} stroke={c.dark} strokeWidth={0.6} />
            <T x={x + 26} y={y + NH / 2} size={9} weight={700} fill={c.dark}>RI</T>
            <T x={x + NW - 8} y={y + 13} size={9} weight={700} anchor="end" fill={c.dark}>RUPIAH</T>
            <T x={x + 82} y={y + NH / 2 + 6} size={v >= 100000 ? 16 : 17} weight={800} fill="#111827">{`Rp${idNum(v)}`}</T>
        </g>
    );
}

export function Money({ items }: { items: number[] }) {
    if (!items.length) return <Fallback text="(tidak ada uang)" />;
    const gap = 10;
    type It = { v: number; w: number; h: number };
    const its: It[] = items.map((v) => (isCoin(v) ? { v, w: (COINS[v]?.r ?? 22) * 2, h: (COINS[v]?.r ?? 22) * 2 } : { v, w: NW, h: NH }));
    const lines: { items: { it: It; x: number }[]; w: number; h: number }[] = [];
    let cur: (typeof lines)[number] = { items: [], w: 0, h: 0 };
    for (const it of its) {
        const x = cur.items.length ? cur.w + gap : 0;
        if (cur.items.length && x + it.w > W) {
            lines.push(cur);
            cur = { items: [{ it, x: 0 }], w: it.w, h: it.h };
        } else {
            cur.items.push({ it, x });
            cur.w = x + it.w;
            cur.h = Math.max(cur.h, it.h);
        }
    }
    lines.push(cur);
    const width = Math.max(...lines.map((l) => l.w));
    const height = lines.reduce((s, l) => s + l.h, 0) + gap * (lines.length - 1);
    const m = 3;
    let yy = 0;
    return (
        <Svg w={width + 2 * m} h={height + 2 * m} label={`Uang: ${items.map((v) => `${isCoin(v) ? 'koin' : 'uang kertas'} Rp${idNum(v)}`).join(', ')}`}>
            <g transform={`translate(${m} ${m})`}>
                {lines.map((l, li) => {
                    const top = yy;
                    yy += l.h + gap;
                    return (
                        <g key={li}>
                            {l.items.map(({ it, x }, i) => isCoin(it.v)
                                ? <Coin key={i} v={it.v} cx={x + it.w / 2} cy={top + l.h / 2} />
                                : <Note key={i} v={it.v} x={x} y={top + (l.h - it.h) / 2} />)}
                        </g>
                    );
                })}
            </g>
        </Svg>
    );
}
