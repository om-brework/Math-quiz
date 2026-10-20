/* Visual bilangan: garis bilangan, jam, pecahan, model batang, diagram batang, tabel. */
import { braceH, braceV, Fallback, fmt, idNum, QBox, Svg, T, textW, W, wrap2 } from './core';

const near = (a: number, b: number) => Math.abs(a - b) < 1e-9;

/* ---------- Garis bilangan ---------- */

export function NumberLine({ from, to, step: stepIn, marks = [], jumps = [], hide = [] }: {
    from: number; to: number; step?: number; marks?: number[]; jumps?: { from: number; to: number; label?: string }[]; hide?: number[];
}) {
    if (!(to > from)) return <Fallback text={`Garis bilangan ${from}–${to}`} />;
    const step = stepIn && stepIn > 0 ? stepIn : 1;
    const nTicks = Math.min(200, Math.round((to - from) / step));
    const vals = Array.from({ length: nTicks + 1 }, (_, i) => Math.round((from + i * step) * 1e9) / 1e9);
    const L = 30;
    const R = W - 30;
    const x = (v: number) => L + ((v - from) / (to - from)) * (R - L);
    const isHidden = (v: number) => hide.some((h) => near(h, v));
    const isMark = (v: number) => marks.some((m) => near(m, v));

    // label tiap k tick supaya tidak bertumpuk
    const maxLen = Math.max(...vals.map((v) => idNum(v).length));
    const pxPerTick = (R - L) / Math.max(1, nTicks);
    const need = Math.max(22, maxLen * 8 + 6);
    let k = 1;
    for (const c of [1, 2, 5, 10, 20, 25, 50, 100]) { k = c; if (pxPerTick * c >= need) break; }
    const labelled = (i: number, v: number) => i % k === 0 || i === nTicks || isMark(v) || isHidden(v);
    const fontSize = pxPerTick * k >= 34 ? 14 : 12.5;

    const hs = jumps.map((j) => Math.max(18, Math.min(56, Math.abs(x(j.to) - x(j.from)) * 0.42)));
    const top = (hs.length ? Math.max(...hs) : 0) + (jumps.some((j) => j.label) ? 26 : 8);
    const y0 = top + 4;
    const h = y0 + 44;

    const jumpTxt = jumps.map((j) => `${isHidden(j.from) ? '?' : idNum(j.from)} ke ${isHidden(j.to) ? '?' : idNum(j.to)}${j.label ? ` (${j.label})` : ''}`);
    const label = `Garis bilangan dari ${idNum(from)} sampai ${idNum(to)}${jumps.length ? `, lompatan ${jumpTxt.join(', ')}` : ''}${hide.length ? ', ada angka yang ditanyakan' : ''}`;

    return (
        <Svg h={h} label={label}>
            <line x1={L - 18} x2={R + 18} y1={y0} y2={y0} stroke="currentColor" strokeWidth={2.4} />
            <path d={`M${L - 22} ${y0} l9 -5.5 v11Z M${R + 22} ${y0} l-9 -5.5 v11Z`} fill="currentColor" />
            {vals.map((v, i) => {
                const lab = labelled(i, v);
                const xx = x(v);
                return (
                    <g key={i}>
                        <line x1={xx} x2={xx} y1={y0 - (lab ? 8 : 5)} y2={y0 + (lab ? 8 : 5)} stroke="currentColor" strokeWidth={lab ? 2 : 1.3} />
                        {lab && !isHidden(v) && <T x={xx} y={y0 + 22} size={fontSize} weight={isMark(v) ? 800 : 600}>{idNum(v)}</T>}
                        {isHidden(v) && <QBox x={xx} y={y0 + 24} />}
                    </g>
                );
            })}
            {/* angka tersembunyi yang bukan kelipatan langkah */}
            {hide.filter((hv) => !vals.some((v) => near(v, hv)) && hv >= from && hv <= to).map((hv, i) => (
                <g key={`h${i}`}><line x1={x(hv)} x2={x(hv)} y1={y0 - 8} y2={y0 + 8} stroke="currentColor" strokeWidth={2} /><QBox x={x(hv)} y={y0 + 24} /></g>
            ))}
            {marks.filter((m) => m >= from && m <= to).map((m, i) => <circle key={`m${i}`} cx={x(m)} cy={y0} r={5.5} fill="var(--v-accent)" stroke="var(--v-paper)" strokeWidth={1.5} />)}
            {jumps.map((j, i) => {
                const x1 = x(j.from);
                const x2 = x(j.to);
                const mid = (x1 + x2) / 2;
                const hh = hs[i];
                const cy = y0 - 4 - 2 * hh;
                const ys = y0 - 4;
                // arah ujung panah = garis singgung di titik akhir (dari titik kendali ke ujung)
                const dx = x2 - mid;
                const dy = ys - cy;
                const len = Math.hypot(dx, dy) || 1;
                const ux = dx / len;
                const uy = dy / len;
                const a = 9;
                const p1 = `${fmt(x2 - a * ux + a * 0.5 * uy)},${fmt(ys - a * uy - a * 0.5 * ux)}`;
                const p2 = `${fmt(x2 - a * ux - a * 0.5 * uy)},${fmt(ys - a * uy + a * 0.5 * ux)}`;
                return (
                    <g key={`j${i}`}>
                        <path d={`M${fmt(x1)} ${ys} Q${fmt(mid)} ${fmt(cy)} ${fmt(x2 - ux * 3)} ${fmt(ys - uy * 3)}`} fill="none" stroke="var(--v-jump)" strokeWidth={2.4} strokeLinecap="round" />
                        <polygon points={`${fmt(x2)},${ys} ${p1} ${p2}`} fill="var(--v-jump)" />
                        {j.label && (j.label === '?' ? <QBox x={mid} y={ys - hh - 13} /> : <T x={mid} y={ys - hh - 12} size={14} weight={700} fill="var(--v-jump)">{j.label}</T>)}
                    </g>
                );
            })}
        </Svg>
    );
}

/* ---------- Jam analog ---------- */

export function Clock({ hour, minute }: { hour: number; minute: number }) {
    const c = 110;
    const R = 100;
    const mm = ((Math.round(minute) % 60) + 60) % 60;
    const hh = ((hour % 12) + 12) % 12;
    const hourAngle = (hh + mm / 60) * 30;
    const minAngle = mm * 6;
    const pt = (deg: number, r: number) => [c + r * Math.sin((deg * Math.PI) / 180), c - r * Math.cos((deg * Math.PI) / 180)] as const;
    const hand = (deg: number, len: number, back: number) => {
        const [x1, y1] = pt(deg + 180, back);
        const [x2, y2] = pt(deg, len);
        return { x1: fmt(x1), y1: fmt(y1), x2: fmt(x2), y2: fmt(y2) };
    };
    const hPos = hh + mm / 60;
    const h12 = (n: number) => (n === 0 ? 12 : n);
    const hourDesc = mm === 0 ? `jarum pendek menunjuk angka ${h12(hh)}` : `jarum pendek di antara angka ${h12(Math.floor(hPos))} dan ${h12((Math.floor(hPos) + 1) % 12)}`;
    const minDesc = mm % 5 === 0 ? `jarum panjang menunjuk angka ${h12(mm / 5)}` : `jarum panjang menunjuk garis menit ke-${mm}`;
    return (
        <Svg w={220} h={220} label={`Jam analog: ${hourDesc}, ${minDesc}`} maxWidth={240}>
            <circle cx={c} cy={c} r={R + 4} fill="var(--v-soft)" />
            <circle cx={c} cy={c} r={R} fill="var(--v-paper)" stroke="currentColor" strokeWidth={4} />
            {Array.from({ length: 60 }, (_, i) => {
                const big = i % 5 === 0;
                const [x1, y1] = pt(i * 6, R - (big ? 12 : 7));
                const [x2, y2] = pt(i * 6, R - 3);
                return <line key={i} x1={fmt(x1)} y1={fmt(y1)} x2={fmt(x2)} y2={fmt(y2)} stroke="currentColor" strokeWidth={big ? 2.6 : 1.1} strokeLinecap="round" />;
            })}
            {Array.from({ length: 12 }, (_, i) => {
                const n = i + 1;
                const [x, y] = pt(n * 30, R - 27);
                return <T key={n} x={x} y={y + 1} size={19} weight={700}>{n}</T>;
            })}
            <line {...hand(hourAngle, 50, 10)} stroke="var(--v-hour)" strokeWidth={8} strokeLinecap="round" />
            <line {...hand(minAngle, 84, 12)} stroke="var(--v-minute)" strokeWidth={4.5} strokeLinecap="round" />
            <circle cx={c} cy={c} r={7} fill="currentColor" />
            <circle cx={c} cy={c} r={2.5} fill="var(--v-paper)" />
        </Svg>
    );
}

/* ---------- Pecahan ---------- */

function gridDims(p: number): [number, number] {
    let r = 1;
    for (let i = 1; i * i <= p; i++) if (p % i === 0) r = i;
    return [r, p / r];
}

export function Fraction({ shape, parts: partsIn, shaded: shadedIn, wholes: wholesIn }: { shape: 'bar' | 'circle' | 'rect'; parts: number; shaded: number; wholes?: number }) {
    const parts = Math.max(1, Math.floor(partsIn));
    const shaded = Math.max(0, Math.floor(shadedIn));
    const wholes = Math.max(1, Math.floor(wholesIn ?? 0), Math.ceil(shaded / parts));
    const isOn = (w: number, i: number) => w * parts + i < shaded;
    const fillOf = (on: boolean) => (on ? 'var(--v-shade)' : 'var(--v-paper)');
    const label = `${wholes > 1 ? `${wholes} bangun utuh, masing-masing` : 'Bangun'} ${shape === 'circle' ? 'lingkaran' : shape === 'bar' ? 'batang' : 'persegi panjang'} dibagi ${parts} bagian sama besar, ${shaded} bagian diarsir`;
    const sw = 2;

    if (shape === 'bar') {
        const bw = W - 8;
        const bh = 44;
        const gap = 12;
        const h = wholes * bh + (wholes - 1) * gap + 8;
        return (
            <Svg h={h} label={label}>
                {Array.from({ length: wholes }, (_, w) => {
                    const y = 4 + w * (bh + gap);
                    const pw = bw / parts;
                    return (
                        <g key={w}>
                            {Array.from({ length: parts }, (_, i) => <rect key={i} x={fmt(4 + i * pw)} y={y} width={fmt(pw)} height={bh} fill={fillOf(isOn(w, i))} stroke="currentColor" strokeWidth={sw / 1.5} />)}
                            <rect x={4} y={y} width={bw} height={bh} fill="none" stroke="currentColor" strokeWidth={sw * 1.2} rx={1} />
                        </g>
                    );
                })}
            </Svg>
        );
    }

    if (shape === 'circle') {
        const gap = 16;
        const perRow = Math.min(wholes, 3);
        const r = Math.min(80, (W - (perRow - 1) * gap) / perRow / 2 - 3);
        const rows = Math.ceil(wholes / perRow);
        const width = perRow * (2 * r + 6) + (perRow - 1) * gap;
        const h = rows * (2 * r + 6) + (rows - 1) * gap;
        return (
            <Svg w={width} h={h} label={label}>
                {Array.from({ length: wholes }, (_, w) => {
                    const cx = (w % perRow) * (2 * r + 6 + gap) + r + 3;
                    const cy = Math.floor(w / perRow) * (2 * r + 6 + gap) + r + 3;
                    if (parts === 1) return <circle key={w} cx={cx} cy={cy} r={r} fill={fillOf(isOn(w, 0))} stroke="currentColor" strokeWidth={sw * 1.2} />;
                    return (
                        <g key={w}>
                            {Array.from({ length: parts }, (_, i) => {
                                const a0 = (i / parts) * 2 * Math.PI - Math.PI / 2;
                                const a1 = ((i + 1) / parts) * 2 * Math.PI - Math.PI / 2;
                                const large = a1 - a0 > Math.PI ? 1 : 0;
                                const d = `M${fmt(cx)} ${fmt(cy)} L${fmt(cx + r * Math.cos(a0))} ${fmt(cy + r * Math.sin(a0))} A${fmt(r)} ${fmt(r)} 0 ${large} 1 ${fmt(cx + r * Math.cos(a1))} ${fmt(cy + r * Math.sin(a1))}Z`;
                                return <path key={i} d={d} fill={fillOf(isOn(w, i))} stroke="currentColor" strokeWidth={sw / 1.5} strokeLinejoin="round" />;
                            })}
                            <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth={sw * 1.2} />
                        </g>
                    );
                })}
            </Svg>
        );
    }

    // rect: kisi baris × kolom
    const [rows, cols] = gridDims(parts);
    const cell = Math.min(40, 200 / cols, 140 / rows);
    const rw = cols * cell;
    const rh = rows * cell;
    const gap = 18;
    const perRow = Math.max(1, Math.min(wholes, Math.floor((W + gap) / (rw + gap))));
    const nRows = Math.ceil(wholes / perRow);
    const width = perRow * rw + (perRow - 1) * gap + 6;
    const h = nRows * rh + (nRows - 1) * gap + 6;
    return (
        <Svg w={width} h={h} label={label}>
            {Array.from({ length: wholes }, (_, w) => {
                const ox = 3 + (w % perRow) * (rw + gap);
                const oy = 3 + Math.floor(w / perRow) * (rh + gap);
                return (
                    <g key={w}>
                        {Array.from({ length: parts }, (_, i) => (
                            <rect key={i} x={fmt(ox + (i % cols) * cell)} y={fmt(oy + Math.floor(i / cols) * cell)} width={fmt(cell)} height={fmt(cell)} fill={fillOf(isOn(w, i))} stroke="currentColor" strokeWidth={sw / 1.5} />
                        ))}
                        <rect x={ox} y={oy} width={fmt(rw)} height={fmt(rh)} fill="none" stroke="currentColor" strokeWidth={sw * 1.2} />
                    </g>
                );
            })}
        </Svg>
    );
}

/* ---------- Model batang ---------- */

const BAR_COLORS = [
    ['#bae6fd', '#0369a1'],
    ['#fde68a', '#a16207'],
    ['#bbf7d0', '#15803d'],
    ['#fbcfe8', '#be185d'],
] as const;

function Lbl({ x, y, text, anchor = 'middle', size = 14 }: { x: number; y: number; text: string; anchor?: 'start' | 'middle' | 'end'; size?: number }) {
    if (text.trim() === '?') return <QBox x={anchor === 'start' ? x + 13 : x} y={y} />;
    return <T x={x} y={y} size={size} weight={700} anchor={anchor}>{text}</T>;
}

export function BarModel({ bars, total, question }: { bars: { label: string; units: number; unitValue?: string; known?: string }[]; total?: string; question?: string }) {
    if (!bars.length) return <Fallback text="(model batang kosong)" />;
    const maxUnits = Math.max(1, ...bars.map((b) => b.units));
    // tanya: di tempat total kalau total kosong; kalau tidak, pada selisih batang terpendek
    const totalText = total ?? question;
    const diffQ = total !== undefined && question !== undefined;
    const shortIdx = diffQ ? bars.reduce((bi, b, i) => (b.units < bars[bi].units ? i : bi), 0) : -1;
    const hasGap = diffQ && bars[shortIdx].units < maxUnits;
    const multi = bars.length > 1;
    const totalLines = totalText ? wrap2(totalText, 12) : [];
    const totalW = totalText ? Math.max(...totalLines.map((l) => textW(l, 14)), 26) : 0;
    const labelW = Math.max(...bars.map((b) => textW(b.label, 14)), 20) + 12;
    const rightM = multi && totalText ? totalW + 30 : 8;
    const x0 = labelW;
    const uw = Math.min(64, (W - x0 - rightM) / maxUnits);
    const barH = 36;
    const above = bars.some((b) => b.known) || hasGap ? 30 : 0;
    const rowGap = 12;
    const rowH = above + barH + rowGap;
    const bottom = !multi && totalText ? 40 : 0;
    const h = 4 + bars.length * rowH - rowGap + bottom + 4;
    const label = `Model batang. ${bars.map((b) => `${b.label}: ${b.units} bagian${b.unitValue ? ` masing-masing ${b.unitValue}` : ''}${b.known ? `, ${b.known}` : ''}`).join('; ')}${total ? `. Jumlah ${total}` : ''}${question ? `. Ditanya ${question}` : ''}`;
    const unitFont = uw < 30 ? 11 : 13;
    const rightEdge = x0 + maxUnits * uw;
    const firstTop = 4 + above;
    const lastBottom = 4 + (bars.length - 1) * rowH + above + barH;

    return (
        <Svg h={h} label={label}>
            {bars.map((b, bi) => {
                const y = 4 + bi * rowH + above;
                const [fill, stroke] = BAR_COLORS[bi % BAR_COLORS.length];
                const end = x0 + b.units * uw;
                return (
                    <g key={bi}>
                        <T x={labelW - 10} y={y + barH / 2} size={14} anchor="end">{b.label}</T>
                        {Array.from({ length: b.units }, (_, i) => (
                            <g key={i}>
                                <rect x={fmt(x0 + i * uw)} y={y} width={fmt(uw)} height={barH} fill={fill} stroke={stroke} strokeWidth={1.6} />
                                {b.unitValue && <T x={x0 + (i + 0.5) * uw} y={y + barH / 2} size={unitFont} fill="#0f172a" weight={700}>{b.unitValue}</T>}
                            </g>
                        ))}
                        {b.known && (
                            <>
                                <path d={braceH(x0, end, y - 3, -1, 9)} fill="none" stroke="currentColor" strokeWidth={1.6} />
                                <Lbl x={(x0 + end) / 2} y={y - 21} text={b.known} />
                            </>
                        )}
                        {bi === shortIdx && hasGap && (
                            <>
                                <rect x={end} y={y} width={rightEdge - end} height={barH} fill="none" stroke="currentColor" strokeWidth={1.4} strokeDasharray="5 4" />
                                <path d={braceH(end, rightEdge, y - 3, -1, 9)} fill="none" stroke="var(--v-q)" strokeWidth={1.6} />
                                <Lbl x={(end + rightEdge) / 2} y={y - 21} text={question!} />
                            </>
                        )}
                    </g>
                );
            })}
            {totalText && multi && (
                <>
                    <path d={braceV(firstTop, lastBottom, rightEdge + 6, 1, 12)} fill="none" stroke="currentColor" strokeWidth={1.8} />
                    {totalLines.length === 1
                        ? <Lbl x={rightEdge + 22} y={(firstTop + lastBottom) / 2} text={totalText} anchor="start" />
                        : totalLines.map((l, i) => <T key={i} x={rightEdge + 22} y={(firstTop + lastBottom) / 2 + (i - 0.5) * 17} size={14} weight={700} anchor="start">{l}</T>)}
                </>
            )}
            {totalText && !multi && (
                <>
                    <path d={braceH(x0, x0 + bars[0].units * uw, lastBottom + 3, 1, 10)} fill="none" stroke="currentColor" strokeWidth={1.8} />
                    <Lbl x={x0 + (bars[0].units * uw) / 2} y={lastBottom + 26} text={totalText} />
                </>
            )}
        </Svg>
    );
}

/* ---------- Diagram batang ---------- */

export function BarChart({ scaleStep, max, bars, title, unit }: { scaleStep: number; max: number; bars: { label: string; value: number }[]; title?: string; unit?: string }) {
    if (!bars.length) return <Fallback text="(diagram kosong)" />;
    const step = scaleStep > 0 ? scaleStep : 1;
    const top = Math.max(step, Math.ceil(Math.max(max, ...bars.map((b) => b.value)) / step) * step);
    const nLines = Math.round(top / step);
    const labEvery = nLines > 12 ? Math.ceil(nLines / 10) : 1;
    const yLabW = Math.max(...Array.from({ length: nLines + 1 }, (_, i) => textW(idNum(i * step), 12))) + 12;
    const titleH = title ? 26 : 0;
    const unitH = unit ? 18 : 4;
    const pTop = titleH + unitH + 8;
    const plotH = 190;
    const L = yLabW + 4;
    const R = W - 6;
    const slot = (R - L) / bars.length;
    const maxChars = Math.max(6, Math.floor(slot / 7.2));
    const labels = bars.map((b) => wrap2(b.label, maxChars));
    const twoLines = labels.some((l) => l.length > 1);
    const h = pTop + plotH + (twoLines ? 40 : 26);
    const y = (v: number) => pTop + plotH - (v / top) * plotH;
    const bw = Math.min(54, slot * 0.6);
    const lblSize = slot < 50 ? 11.5 : 13;
    return (
        <Svg h={h} label={`Diagram batang${title ? ` ${title}` : ''}. ${bars.map((b) => `${b.label}: ${idNum(b.value)}${unit ? ` ${unit}` : ''}`).join('; ')}`}>
            {title && <T x={W / 2} y={12} size={15} weight={700}>{title}</T>}
            {unit && <T x={4} y={titleH + 8} size={12} anchor="start" weight={600} fill="var(--v-muted)">{`(${unit})`}</T>}
            {Array.from({ length: nLines + 1 }, (_, i) => {
                const yy = y(i * step);
                return (
                    <g key={i}>
                        <line x1={L} x2={R} y1={yy} y2={yy} stroke="var(--v-grid)" strokeWidth={i === 0 ? 0 : 1} />
                        <line x1={L - 4} x2={L} y1={yy} y2={yy} stroke="currentColor" strokeWidth={1.2} />
                        {i % labEvery === 0 && <T x={L - 7} y={yy} size={12} anchor="end" weight={500}>{idNum(i * step)}</T>}
                    </g>
                );
            })}
            {bars.map((b, i) => {
                const cx = L + (i + 0.5) * slot;
                const yy = y(Math.max(0, b.value));
                return (
                    <g key={i}>
                        <rect x={fmt(cx - bw / 2)} y={fmt(yy)} width={fmt(bw)} height={fmt(pTop + plotH - yy)} fill="#60a5fa" stroke="#1d4ed8" strokeWidth={1.3} rx={2} />
                        <T x={cx} y={yy - 9} size={12.5} weight={700}>{idNum(b.value)}</T>
                        {labels[i].map((l, k) => <T key={k} x={cx} y={pTop + plotH + 14 + k * 15} size={lblSize} weight={600}>{l}</T>)}
                    </g>
                );
            })}
            <line x1={L} x2={L} y1={pTop - 6} y2={pTop + plotH} stroke="currentColor" strokeWidth={1.8} />
            <line x1={L} x2={R} y1={pTop + plotH} y2={pTop + plotH} stroke="currentColor" strokeWidth={1.8} />
        </Svg>
    );
}

/* ---------- Tabel ---------- */

export function Table({ head, rows }: { head: string[]; rows: string[][] }) {
    return (
        <div className="w-full overflow-x-auto">
            <table className="mx-auto min-w-[12rem] border-collapse overflow-hidden rounded-lg text-center text-base">
                <thead>
                    <tr>{head.map((c, i) => <th key={i} className="border border-slate-300 bg-sky-100 px-3 py-2 font-bold text-slate-800 dark:border-slate-600 dark:bg-sky-900/60 dark:text-slate-100">{c}</th>)}</tr>
                </thead>
                <tbody>
                    {rows.map((r, i) => (
                        <tr key={i} className="odd:bg-white even:bg-slate-50 dark:odd:bg-slate-900 dark:even:bg-slate-800">
                            {r.map((c, k) => <td key={k} className={`border border-slate-300 px-3 py-2 dark:border-slate-600 ${k === 0 ? 'font-semibold' : ''}`}>{c.trim() === '?' ? <span className="inline-block rounded border-2 border-rose-500 px-2 font-bold text-rose-600 dark:text-rose-400">?</span> : c}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
