/* Animasi stik es krim (puluhan = ikat 10 stik, satuan = stik lepas):
   tambah → gabungkan, ikat 10 stik lepas menjadi 1 ikat; kurang → buka 1 ikat kalau stik lepas kurang, lalu ambil. */
import { motion } from 'motion/react';
import { useMemo } from 'react';
import { AnimFrame, type AnimStep } from './frame';

const W = 440;
const ZONE_T = { x: 12, w: 196 }, ZONE_S = { x: 232, w: 196 };
const STICK = { w: 7, h: 58, gap: 12 }, BUNDLE = { w: 34, gap: 38 };
const COLOR = { a: ['#f59e0b', '#b45309'], b: ['#38bdf8', '#0369a1'], n: ['#a3e635', '#4d7c0f'] } as const;

type Kind = 'stick' | 'bundle';
interface Item { id: string; kind: Kind; color: keyof typeof COLOR; x: number; y: number; gone?: boolean; packed?: boolean }
interface State extends AnimStep { items: Item[]; band?: { x: number; y: number } | null; total?: string }

/** posisi ke-i dalam petak zona: ikat 5 per baris, stik 10 per baris (jeda setelah 5) */
const bundleAt = (i: number, top: number) => ({ x: ZONE_T.x + 6 + (i % 5) * BUNDLE.gap, y: top + Math.floor(i / 5) * (STICK.h + 10) });
const stickAt = (i: number, top: number) => ({ x: ZONE_S.x + 8 + (i % 10) * STICK.gap + (i % 10 >= 5 ? 10 : 0), y: top + Math.floor(i / 10) * (STICK.h + 10) });

function build(op: '+' | '-', a: number, b: number): { states: State[]; height: number } {
    const at = Math.floor(a / 10), ao = a % 10, bt = Math.floor(b / 10), bo = b % 10;
    const rowsA = Math.max(Math.ceil(at / 5), 1), rowA = 34, rowB = rowA + rowsA * (STICK.h + 10) + 26;
    const height = op === '+' ? rowB + Math.max(Math.ceil(bt / 5), 1) * (STICK.h + 10) + 20 : rowA + Math.max(Math.ceil((at) / 5), 2) * (STICK.h + 10) + 30;
    const items: Item[] = [];
    for (let i = 0; i < at; i++) items.push({ id: `a-t${i}`, kind: 'bundle', color: 'a', ...bundleAt(i, rowA) });
    for (let i = 0; i < ao; i++) items.push({ id: `a-s${i}`, kind: 'stick', color: 'a', ...stickAt(i, rowA) });
    const states: State[] = [];
    const snap = (say: string, tag: string, extra: Partial<State> = {}) => states.push({ say, tag, items: items.map((x) => ({ ...x })), ...extra });

    if (op === '+') {
        for (let i = 0; i < bt; i++) items.push({ id: `b-t${i}`, kind: 'bundle', color: 'b', ...bundleAt(i, rowB) });
        for (let i = 0; i < bo; i++) items.push({ id: `b-s${i}`, kind: 'stick', color: 'b', ...stickAt(i, rowB) });
        snap(`${a} = ${at} ikat dan ${ao} stik lepas. ${b} = ${bt} ikat dan ${bo} stik lepas.`, 'Lihat');
        // gabungkan stik lepas
        const loose = items.filter((x) => x.kind === 'stick');
        loose.forEach((x, i) => Object.assign(x, stickAt(i, rowA)));
        snap(`Satuan dulu: gabungkan stik lepas. ${ao} + ${bo} = ${ao + bo} stik.`, 'Satuan');
        let tensTotal = at + bt;
        if (ao + bo >= 10) {
            // kumpulkan 10 stik pertama menjadi rapat, lalu jadikan satu ikat di zona puluhan
            const ten = loose.slice(0, 10);
            ten.forEach((x, i) => Object.assign(x, { x: ZONE_S.x + 50 + i * 5, packed: true }));
            loose.slice(10).forEach((x, i) => Object.assign(x, stickAt(i + 12, rowA)));
            snap(`Ada ${ao + bo} stik lepas, lebih dari 9. Ikat 10 stik menjadi 1 ikat!`, 'Ikat 10', { band: { x: ZONE_S.x + 50, y: rowA } });
            ten.forEach((x) => { x.gone = true; });
            items.push({ id: 'n-t', kind: 'bundle', color: 'n', ...bundleAt(at, rowA) });
            loose.slice(10).forEach((x, i) => Object.assign(x, stickAt(i, rowA)));
            items.filter((x) => x.id.startsWith('b-t')).forEach((x, i) => Object.assign(x, bundleAt(at + 1 + i, rowA)));
            tensTotal += 1;
            snap(`Ikatan baru pindah ke kotak puluhan. Ini yang disebut menyimpan 1. Sisa ${ao + bo - 10} stik lepas.`, 'Simpan');
        } else {
            items.filter((x) => x.id.startsWith('b-t')).forEach((x, i) => Object.assign(x, bundleAt(at + i, rowA)));
        }
        snap(`Puluhan: gabungkan semua ikat. Ada ${tensTotal} ikat.`, 'Puluhan');
        snap(`${tensTotal} ikat dan ${(ao + bo) % 10} stik lepas = ${a + b}. Jadi ${a} + ${b} = ${a + b}.`, 'Selesai', { total: String(a + b) });
    } else {
        snap(`${a} = ${at} ikat dan ${ao} stik lepas. Kita akan mengambil ${b} (${bt} ikat dan ${bo} stik).`, 'Lihat');
        let loose = items.filter((x) => x.kind === 'stick');
        if (ao < bo) {
            const open = items.filter((x) => x.kind === 'bundle').at(-1)!;
            Object.assign(open, { x: ZONE_S.x + 50, y: rowA, packed: true });
            snap(`Satuan: ${ao} stik lepas tidak cukup untuk diambil ${bo}. Buka 1 ikat!`, 'Pinjam');
            open.gone = true;
            for (let i = 0; i < 10; i++) items.push({ id: `n-s${i}`, kind: 'stick', color: 'n', ...stickAt(ao + i, rowA) });
            loose = items.filter((x) => x.kind === 'stick' && !x.gone);
            snap(`1 ikat menjadi 10 stik lepas. Sekarang ada ${ao + 10} stik lepas dan ${at - 1} ikat. Ini yang disebut meminjam.`, 'Pinjam');
        }
        const have = loose.length;
        loose.slice(have - bo).forEach((x) => { x.gone = true; });
        snap(`Ambil ${bo} stik lepas. ${have} − ${bo} = ${have - bo} stik lepas.`, 'Satuan');
        const bundles = items.filter((x) => x.kind === 'bundle' && !x.gone);
        bundles.slice(bundles.length - bt).forEach((x) => { x.gone = true; });
        snap(`Puluhan: ambil ${bt} ikat. Sisa ${bundles.length - bt} ikat.`, 'Puluhan');
        // rapikan sisa
        items.filter((x) => x.kind === 'bundle' && !x.gone).forEach((x, i) => Object.assign(x, bundleAt(i, rowA)));
        items.filter((x) => x.kind === 'stick' && !x.gone).forEach((x, i) => Object.assign(x, stickAt(i, rowA)));
        snap(`Sisa ${bundles.length - bt} ikat dan ${have - bo} stik lepas = ${a - b}. Jadi ${a} − ${b} = ${a - b}.`, 'Selesai', { total: String(a - b) });
    }
    return { states, height };
}

function Stick({ color, h = STICK.h, w = STICK.w }: { color: keyof typeof COLOR; h?: number; w?: number }) {
    const [f, s] = COLOR[color];
    return <rect width={w} height={h} rx={w / 2} fill={f} stroke={s} strokeWidth={1.4} />;
}

function Bundle({ color }: { color: keyof typeof COLOR }) {
    const [f, s] = COLOR[color];
    return (
        <g>
            {Array.from({ length: 10 }, (_, i) => <rect key={i} x={i * 3.2} width={5} height={STICK.h} rx={2.5} fill={f} stroke={s} strokeWidth={1} />)}
            <rect x={-2} y={STICK.h / 2 - 5} width={BUNDLE.w + 2} height={10} rx={3} fill="#e11d48" />
        </g>
    );
}

export function StikAnim({ op, a, b, title }: { op: '+' | '-'; a: number; b: number; title?: string }) {
    const { states, height } = useMemo(() => build(op, a, b), [op, a, b]);
    const ids = useMemo(() => [...new Set(states.flatMap((s) => s.items.map((x) => x.id)))], [states]);
    return (
        <AnimFrame title={title ?? 'Animasi stik es krim'} steps={states} interval={2600}>
            {(i) => {
                const s = states[i];
                const byId = new Map(s.items.map((x) => [x.id, x]));
                return (
                    <svg viewBox={`0 0 ${W} ${height}`} width="100%" style={{ maxWidth: W }} role="img" aria-label={s.say}>
                        <rect x={ZONE_T.x} y={4} width={ZONE_T.w} height={height - 8} rx={14} fill="#fff7ed" stroke="#fed7aa" strokeWidth={2} />
                        <rect x={ZONE_S.x} y={4} width={ZONE_S.w} height={height - 8} rx={14} fill="#f0f9ff" stroke="#bae6fd" strokeWidth={2} />
                        <text x={ZONE_T.x + ZONE_T.w / 2} y={22} textAnchor="middle" fontSize={14} fontWeight={800} fill="#9a3412">PULUHAN (ikat)</text>
                        <text x={ZONE_S.x + ZONE_S.w / 2} y={22} textAnchor="middle" fontSize={14} fontWeight={800} fill="#075985">SATUAN (lepas)</text>
                        {ids.map((id) => {
                            const it = byId.get(id);
                            if (!it) return null;
                            return (
                                <motion.g key={id} initial={{ x: it.x, y: it.y - 30, opacity: 0 }}
                                    animate={{ x: it.x, y: it.gone ? it.y - 40 : it.y, opacity: it.gone ? 0 : 1, scale: it.gone ? 0.6 : 1 }}
                                    transition={{ type: 'spring', stiffness: 120, damping: 18 }}>
                                    {it.kind === 'bundle' ? <Bundle color={it.color} /> : <Stick color={it.color} w={it.packed ? 5 : STICK.w} />}
                                </motion.g>
                            );
                        })}
                        {s.band && <motion.rect initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} x={s.band.x - 3} y={s.band.y + STICK.h / 2 - 5} width={52} height={10} rx={3} fill="#e11d48" />}
                        {s.total && <motion.text initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} x={W / 2} y={height - 12} textAnchor="middle" fontSize={22} fontWeight={800} fill="#059669">= {s.total}</motion.text>}
                    </svg>
                );
            }}
        </AnimFrame>
    );
}
