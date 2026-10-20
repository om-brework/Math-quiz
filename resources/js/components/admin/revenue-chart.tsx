import { rupiah, rupiahRingkas, tanggal, tanggalPendek } from '@/lib/format';
import { useEffect, useMemo, useRef, useState } from 'react';

export interface RevenuePoint {
    date: string;
    amount: number;
}

/** Langkah "bagus" untuk sumbu Y: 1, 2, 2.5, 5 × 10^n */
function niceMax(max: number, ticks = 4): { top: number; step: number } {
    if (max <= 0) return { top: 100_000 * ticks, step: 100_000 };
    const raw = max / ticks;
    const pow = Math.pow(10, Math.floor(Math.log10(raw)));
    const mult = [1, 2, 2.5, 5, 10].find((m) => m * pow >= raw) ?? 10;
    const step = mult * pow;
    return { top: step * Math.ceil(max / step), step };
}

/**
 * Grafik batang pendapatan harian (SVG, tanpa dependensi).
 * Arahkan kursor / fokus keyboard (Tab, ←/→) ke batang untuk melihat nilainya.
 */
export function RevenueChart({ data, height = 240 }: { data: RevenuePoint[]; height?: number }) {
    const wrap = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(640);
    const [active, setActive] = useState<number | null>(null);

    useEffect(() => {
        const el = wrap.current;
        if (!el) return;
        const ro = new ResizeObserver(([e]) => setWidth(Math.max(280, Math.floor(e.contentRect.width))));
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const max = Math.max(0, ...data.map((d) => d.amount));
    const { top, step } = useMemo(() => niceMax(max), [max]);
    const ticks = useMemo(() => {
        const t: number[] = [];
        for (let v = 0; v <= top + 1; v += step) t.push(v);
        return t;
    }, [top, step]);

    const padL = width < 420 ? 52 : 64;
    const padR = 8;
    const padT = 12;
    const padB = 26;
    const plotW = width - padL - padR;
    const plotH = height - padT - padB;
    const n = data.length || 1;
    const slot = plotW / n;
    const gap = Math.max(2, Math.min(6, slot * 0.25));
    const barW = Math.max(2, slot - gap);
    const y = (v: number) => padT + plotH - (v / top) * plotH;
    const labelEvery = width < 420 ? 7 : width < 700 ? 5 : 3;

    const a = active !== null ? data[active] : null;
    const tipX = active !== null ? padL + active * slot + slot / 2 : 0;

    const onKey = (e: React.KeyboardEvent, i: number) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            e.preventDefault();
            const next = Math.min(n - 1, Math.max(0, i + (e.key === 'ArrowRight' ? 1 : -1)));
            const nodes = wrap.current?.querySelectorAll<SVGGElement>('[data-bar]');
            nodes?.[next]?.focus();
        }
    };

    const total = data.reduce((s, d) => s + d.amount, 0);

    return (
        <div ref={wrap} className="relative w-full select-none">
            <svg
                width={width}
                height={height}
                role="img"
                aria-label={`Pendapatan harian 30 hari terakhir, total ${rupiah(total)}`}
                className="block overflow-visible"
                onMouseLeave={() => setActive(null)}
            >
                {/* grid + label sumbu Y */}
                {ticks.map((t) => (
                    <g key={t}>
                        <line
                            x1={padL}
                            x2={width - padR}
                            y1={y(t)}
                            y2={y(t)}
                            className={t === 0 ? 'stroke-zinc-300 dark:stroke-zinc-600' : 'stroke-zinc-200/80 dark:stroke-zinc-800'}
                            strokeDasharray={t === 0 ? undefined : '2 4'}
                        />
                        <text
                            x={padL - 8}
                            y={y(t)}
                            dy="0.32em"
                            textAnchor="end"
                            className="fill-zinc-500 text-[11px] tabular-nums dark:fill-zinc-400"
                        >
                            {t === 0 ? 'Rp0' : rupiahRingkas(t)}
                        </text>
                    </g>
                ))}

                {/* batang */}
                {data.map((d, i) => {
                    const x = padL + i * slot + gap / 2;
                    const h = Math.max(0, padT + plotH - y(d.amount));
                    const r = Math.min(4, barW / 2, h);
                    const yTop = padT + plotH - h;
                    const isActive = active === i;
                    return (
                        <g
                            key={d.date}
                            data-bar
                            tabIndex={0}
                            role="img"
                            aria-label={`${tanggal(d.date)}: ${rupiah(d.amount)}`}
                            onMouseEnter={() => setActive(i)}
                            onFocus={() => setActive(i)}
                            onBlur={() => setActive((v) => (v === i ? null : v))}
                            onKeyDown={(e) => onKey(e, i)}
                            className="cursor-default outline-none"
                        >
                            {/* area sentuh selebar slot, setinggi plot */}
                            <rect x={padL + i * slot} y={padT} width={slot} height={plotH} className={isActive ? 'fill-zinc-500/10' : 'fill-transparent'} />
                            {h > 0 && (
                                <path
                                    d={`M${x},${padT + plotH} V${yTop + r} Q${x},${yTop} ${x + r},${yTop} H${x + barW - r} Q${x + barW},${yTop} ${x + barW},${yTop + r} V${padT + plotH} Z`}
                                    className={
                                        isActive
                                            ? 'fill-brand-700 dark:fill-brand-100'
                                            : 'fill-brand-600 dark:fill-brand-500'
                                    }
                                />
                            )}
                            {(i % labelEvery === (n - 1) % labelEvery) && (
                                <text
                                    x={padL + i * slot + slot / 2}
                                    y={height - 8}
                                    textAnchor="middle"
                                    className="fill-zinc-500 text-[11px] tabular-nums dark:fill-zinc-400"
                                >
                                    {tanggalPendek(d.date)}
                                </text>
                            )}
                        </g>
                    );
                })}
            </svg>

            {a && (
                <div
                    className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md border bg-white px-2.5 py-1.5 text-xs shadow-md dark:border-zinc-700 dark:bg-zinc-900"
                    style={{ left: Math.min(Math.max(tipX, 70), width - 70), top: Math.max(y(a.amount) - 6, 40) }}
                >
                    <div className="text-muted-foreground">{tanggal(a.date)}</div>
                    <div className="font-semibold tabular-nums">{rupiah(a.amount)}</div>
                </div>
            )}
        </div>
    );
}
