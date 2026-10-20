/* Bagian bersama untuk semua gambar soal: bingkai SVG, teks, warna, kurung kurawal. */
import type { ReactNode, SVGProps } from 'react';

/** Lebar kanvas standar (unit viewBox). Satu unit = 1 px pada lebar maksimum (28rem = 448px). */
export const W = 440;

/**
 * Bingkai SVG responsif. Warna garis/teks memakai currentColor (ikut mode terang/gelap),
 * warna latar dan arsir memakai variabel CSS yang diset di pembungkus <Visual>.
 */
export function Svg({ w = W, h, label, children, maxWidth }: { w?: number; h: number; label: string; children: ReactNode; maxWidth?: number }) {
    return (
        <svg
            viewBox={`0 0 ${fmt(w)} ${fmt(h)}`}
            width="100%"
            role="img"
            aria-label={label}
            className="mx-auto block h-auto select-none"
            style={{ maxWidth: maxWidth ?? w }}
            fontFamily="inherit"
        >
            <title>{label}</title>
            {children}
        </svg>
    );
}

/** Teks SVG dengan bawaan yang enak dibaca. */
export function T({ x, y, children, size = 15, anchor = 'middle', weight = 600, fill = 'currentColor', baseline = 'central', ...rest }: {
    x: number; y: number; children: ReactNode; size?: number; anchor?: 'start' | 'middle' | 'end'; weight?: number; fill?: string; baseline?: 'central' | 'auto' | 'hanging';
} & Omit<SVGProps<SVGTextElement>, 'x' | 'y' | 'children'>) {
    return (
        <text x={fmt(x)} y={fmt(y)} fontSize={size} textAnchor={anchor} fontWeight={weight} fill={fill} dominantBaseline={baseline} {...rest}>
            {children}
        </text>
    );
}

/** Kotak tanda tanya untuk nilai yang disembunyikan. */
export function QBox({ x, y, w = 26, h = 22 }: { x: number; y: number; w?: number; h?: number }) {
    return (
        <g>
            <rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={5} fill="var(--v-q-bg)" stroke="var(--v-q)" strokeWidth={1.8} />
            <T x={x} y={y + 0.5} size={15} weight={700} fill="var(--v-q)">?</T>
        </g>
    );
}

export const fmt = (n: number) => Math.round(n * 100) / 100;

/** Format bilangan gaya Indonesia: 12.500 dan 2,5 */
export function idNum(n: number): string {
    return n.toLocaleString('id-ID', { maximumFractionDigits: 2 });
}

/** Warna bernama (bahasa Indonesia) → [isi, garis]. */
const PALETTE: Record<string, [string, string]> = {
    merah: ['#ef4444', '#b91c1c'],
    biru: ['#3b82f6', '#1d4ed8'],
    kuning: ['#facc15', '#a16207'],
    hijau: ['#22c55e', '#15803d'],
    oranye: ['#fb923c', '#c2410c'],
    jingga: ['#fb923c', '#c2410c'],
    ungu: ['#a855f7', '#7e22ce'],
    'merah muda': ['#f472b6', '#be185d'],
    pink: ['#f472b6', '#be185d'],
    coklat: ['#a16207', '#713f12'],
    cokelat: ['#a16207', '#713f12'],
    hitam: ['#334155', '#0f172a'],
    putih: ['#f8fafc', '#64748b'],
    abu: ['#94a3b8', '#475569'],
    'abu-abu': ['#94a3b8', '#475569'],
    tosca: ['#14b8a6', '#0f766e'],
};
const DEFAULT_ORDER = ['biru', 'merah', 'kuning', 'hijau', 'ungu', 'oranye'];

export function colorOf(name?: string, i = 0): [string, string] {
    if (name) {
        const key = name.trim().toLowerCase();
        if (PALETTE[key]) return PALETTE[key];
        if (/^#|^rgb|^hsl/.test(key)) return [name, 'currentColor'];
    }
    return PALETTE[DEFAULT_ORDER[i % DEFAULT_ORDER.length]];
}

/**
 * Kurung kurawal mendatar dari x1 ke x2. Kaki di y, ujung di y + dir*h (dir -1 = menghadap ke atas).
 */
export function braceH(x1: number, x2: number, y: number, dir: 1 | -1, h = 10): string {
    const m = (x1 + x2) / 2;
    const q = Math.min(h / 2, (x2 - x1) / 4);
    const yh = y + (dir * h) / 2;
    const yt = y + dir * h;
    return `M${fmt(x1)},${fmt(y)} Q${fmt(x1)},${fmt(yh)} ${fmt(x1 + q)},${fmt(yh)} L${fmt(m - q)},${fmt(yh)} Q${fmt(m)},${fmt(yh)} ${fmt(m)},${fmt(yt)} Q${fmt(m)},${fmt(yh)} ${fmt(m + q)},${fmt(yh)} L${fmt(x2 - q)},${fmt(yh)} Q${fmt(x2)},${fmt(yh)} ${fmt(x2)},${fmt(y)}`;
}

/** Kurung kurawal tegak dari y1 ke y2. Kaki di x, ujung di x + dir*h (dir 1 = menghadap ke kanan). */
export function braceV(y1: number, y2: number, x: number, dir: 1 | -1, h = 10): string {
    const m = (y1 + y2) / 2;
    const q = Math.min(h / 2, (y2 - y1) / 4);
    const xh = x + (dir * h) / 2;
    const xt = x + dir * h;
    return `M${fmt(x)},${fmt(y1)} Q${fmt(xh)},${fmt(y1)} ${fmt(xh)},${fmt(y1 + q)} L${fmt(xh)},${fmt(m - q)} Q${fmt(xh)},${fmt(m)} ${fmt(xt)},${fmt(m)} Q${fmt(xh)},${fmt(m)} ${fmt(xh)},${fmt(m + q)} L${fmt(xh)},${fmt(y2 - q)} Q${fmt(xh)},${fmt(y2)} ${fmt(x)},${fmt(y2)}`;
}

/** Perkiraan lebar teks (unit viewBox) untuk tata letak. */
export function textW(s: string, size = 15): number {
    return s.length * size * 0.56;
}

/** Pecah label panjang jadi paling banyak 2 baris berdasarkan spasi. */
export function wrap2(s: string, maxChars: number): string[] {
    if (s.length <= maxChars || !s.includes(' ')) return [s];
    const words = s.split(' ');
    let best: string[] = [s];
    let bestLen = Infinity;
    for (let i = 1; i < words.length; i++) {
        const a = words.slice(0, i).join(' ');
        const b = words.slice(i).join(' ');
        const l = Math.max(a.length, b.length);
        if (l < bestLen) { bestLen = l; best = [a, b]; }
    }
    return best;
}

/** Kartu kosong untuk visual yang datanya tidak masuk akal. */
export function Fallback({ text }: { text: string }) {
    return <div className="rounded-lg border border-dashed border-slate-300 p-3 text-center text-sm text-slate-500 dark:border-slate-600">{text}</div>;
}
