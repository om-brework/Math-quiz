/* Animasi benda: menggabungkan (+), mengambil (−), kelompok sama banyak (×), dan membagi rata ke piring (÷). */
import { motion } from 'motion/react';
import { useMemo } from 'react';
import type { ObjectName } from '../types';
import { ObjectIcon } from '../visuals/icons';
import { AnimFrame, type AnimStep } from './frame';

const W = 440, S = 34, GAP = 40;
interface Pos { x: number; y: number; gone?: boolean; hl?: boolean }
interface State extends AnimStep { pos: Pos[]; boxes?: { x: number; y: number; w: number; h: number; label?: string }[]; height: number; total?: string }

const NAMA: Record<string, string> = { apel: 'apel', jeruk: 'jeruk', kelereng: 'kelereng', permen: 'permen', bintang: 'bintang', buku: 'buku', pensil: 'pensil', bola: 'bola', kue: 'kue', ikan: 'ikan', bunga: 'bunga', mobil: 'mobil' };

/** baris rapi berisi n benda mulai di (x0, y0), `per` benda per baris */
const grid = (n: number, x0: number, y0: number, per = 5) => Array.from({ length: n }, (_, i) => ({ x: x0 + (i % per) * GAP, y: y0 + Math.floor(i / per) * GAP }));

function build(op: '+' | '-' | '×' | '÷', a: number, b: number, item: string): { states: State[]; n: number } {
    const nm = NAMA[item] ?? 'benda';
    const states: State[] = [];
    if (op === '+') {
        const n = a + b;
        const left = grid(a, 12, 20), right = grid(b, 240, 20);
        const h = 40 + Math.ceil(Math.max(a, b) / 5) * GAP;
        states.push({ say: `Ada ${a} ${nm} di kiri dan ${b} ${nm} di kanan.`, tag: 'Lihat', pos: [...left, ...right], height: h });
        const all = grid(n, (W - Math.min(n, 10) * GAP) / 2, 20, 10);
        states.push({ say: `Gabungkan semuanya.`, tag: 'Gabung', pos: all, height: 40 + Math.ceil(n / 10) * GAP });
        states.push({ say: `Hitung semua: ${a} + ${b} = ${n} ${nm}.`, tag: 'Hitung', pos: all.map((p) => ({ ...p, hl: true })), height: 40 + Math.ceil(n / 10) * GAP, total: `${a} + ${b} = ${n}` });
        return { states, n };
    }
    if (op === '-') {
        const all = grid(a, (W - Math.min(a, 10) * GAP) / 2, 20, 10);
        const h = 40 + Math.ceil(a / 10) * GAP;
        states.push({ say: `Ada ${a} ${nm}.`, tag: 'Lihat', pos: all, height: h });
        states.push({ say: `Ambil ${b} ${nm}.`, tag: 'Ambil', pos: all.map((p, i) => (i >= a - b ? { ...p, gone: true } : p)), height: h });
        states.push({ say: `Sisa ${a - b} ${nm}. Jadi ${a} − ${b} = ${a - b}.`, tag: 'Sisa', pos: all.map((p, i) => (i >= a - b ? { ...p, gone: true } : { ...p, hl: true })), height: h, total: `${a} − ${b} = ${a - b}` });
        return { states, n: a };
    }
    if (op === '×') {
        // a kelompok, masing-masing b benda
        const n = a * b;
        const perRow = Math.max(1, Math.floor((W - 20) / (b * GAP + 24)));
        const boxAt = (g: number) => ({ x: 10 + (g % perRow) * (b * GAP + 24), y: 14 + Math.floor(g / perRow) * (GAP + 28) });
        const h = 30 + Math.ceil(a / perRow) * (GAP + 28);
        const pos = Array.from({ length: n }, (_, i) => { const g = Math.floor(i / b), k = i % b, bx = boxAt(g); return { x: bx.x + 8 + k * GAP, y: bx.y + 10 }; });
        for (let g = 1; g <= a; g++) {
            states.push({
                say: g === 1 ? `1 kelompok berisi ${b} ${nm}.` : `${g} kelompok: ${Array(g).fill(b).join(' + ')} = ${g * b}.`, tag: `${g} × ${b}`,
                pos: pos.map((p, i) => (i < g * b ? p : { ...p, gone: true })), height: h,
                boxes: Array.from({ length: g }, (_, k) => ({ ...boxAt(k), w: b * GAP + 12, h: GAP + 16 })),
            });
        }
        states.push({ say: `${a} kelompok berisi ${b}: ${a} × ${b} = ${n} ${nm}.`, tag: 'Hasil', pos: pos.map((p) => ({ ...p, hl: true })), height: h, total: `${a} × ${b} = ${n}`,
            boxes: Array.from({ length: a }, (_, k) => ({ ...boxAt(k), w: b * GAP + 12, h: GAP + 16 })) });
        return { states, n };
    }
    // ÷: a benda dibagi rata ke b piring
    const q = Math.floor(a / b);
    const pile = grid(a, (W - Math.min(a, 10) * GAP) / 2, 20, 10);
    const pileH = 30 + Math.ceil(a / 10) * GAP;
    const plateW = Math.min(130, (W - 20) / b - 10);
    const per = Math.max(1, Math.floor((plateW - 8) / 30));
    const plateAt = (p: number) => ({ x: 10 + p * (plateW + 10), y: pileH + 20 });
    const plateH = 30 + Math.ceil(q / per) * 32;
    const h = pileH + plateH + 40;
    const target = (i: number) => { const p = i % b, k = Math.floor(i / b), pl = plateAt(p); return { x: pl.x + 6 + (k % per) * 30, y: pl.y + 8 + Math.floor(k / per) * 32 }; };
    // benda yang belum dibagi dirapikan lagi di tengah atas
    const restAt = (k: number, left: number) => grid(left, (W - Math.min(left, 10) * GAP) / 2, 20, 10)[k];
    const plates = Array.from({ length: b }, (_, p) => ({ ...plateAt(p), w: plateW, h: plateH, label: `Piring ${p + 1}` }));
    states.push({ say: `Ada ${a} ${nm}, akan dibagi rata ke ${b} piring.`, tag: 'Lihat', pos: pile, height: h, boxes: plates });
    for (let r = 1; r <= q; r++) {
        states.push({ say: r === 1 ? `Bagikan satu-satu ke setiap piring.` : `Putaran ${r}: setiap piring dapat 1 lagi.`, tag: `Putaran ${r}`,
            pos: pile.map((_, i) => (i < r * b ? target(i) : restAt(i - r * b, a - r * b))), height: h, boxes: plates });
    }
    const rem = a - q * b;
    states.push({ say: `Setiap piring dapat ${q} ${nm}${rem ? `, sisa ${rem}` : ''}. Jadi ${a} ÷ ${b} = ${q}${rem ? ` sisa ${rem}` : ''}.`, tag: 'Hasil',
        pos: pile.map((_, i) => (i < q * b ? { ...target(i), hl: true } : restAt(i - q * b, a - q * b))), height: h, boxes: plates, total: `${a} ÷ ${b} = ${q}${rem ? ` sisa ${rem}` : ''}` });
    return { states, n: a };
}

export function BendaAnim({ op, a, b, item = 'apel', title }: { op: '+' | '-' | '×' | '÷'; a: number; b: number; item?: ObjectName; title?: string }) {
    const { states, n } = useMemo(() => build(op, a, b, item), [op, a, b, item]);
    return (
        <AnimFrame title={title ?? 'Animasi'} steps={states} interval={op === '÷' ? 1600 : 2200}>
            {(i) => {
                const s = states[i];
                const h = s.height + (s.total ? 36 : 0);
                return (
                    <svg viewBox={`0 0 ${W} ${h}`} width="100%" style={{ maxWidth: W }} role="img" aria-label={s.say}>
                        {s.boxes?.map((bx, k) => (
                            <motion.g key={`box${k}`} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                                <rect x={bx.x} y={bx.y} width={bx.w} height={bx.h} rx={op === '÷' ? bx.h / 2.5 : 12} fill={op === '÷' ? '#f1f5f9' : 'none'} stroke={op === '÷' ? '#cbd5e1' : '#6F8BEA'} strokeWidth={2} strokeDasharray={op === '÷' ? undefined : '6 5'} />
                                {bx.label && <text x={bx.x + bx.w / 2} y={bx.y + bx.h + 16} textAnchor="middle" fontSize={12} fontWeight={700} fill="#64748b">{bx.label}</text>}
                            </motion.g>
                        ))}
                        {Array.from({ length: n }, (_, k) => {
                            const p = s.pos[k];
                            if (!p) return null;
                            return (
                                <motion.g key={k} initial={false} animate={{ x: p.x, y: p.gone ? p.y - 30 : p.y, opacity: p.gone ? 0 : 1 }} transition={{ type: 'spring', stiffness: 110, damping: 16, delay: op === '÷' ? (k % b) * 0.08 : k * 0.015 }}>
                                    <ObjectIcon name={item} x={0} y={0} size={S} />
                                </motion.g>
                            );
                        })}
                        {s.total && <motion.text initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} x={W / 2} y={h - 12} textAnchor="middle" fontSize={22} fontWeight={800} fill="#1A7A56">{s.total}</motion.text>}
                    </svg>
                );
            }}
        </AnimFrame>
    );
}
