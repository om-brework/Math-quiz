/** Format angka gaya Indonesia: 12500 → "12.500", 2.5 → "2,5". */
export const fmt = (n: number) => n.toLocaleString('id-ID', { maximumFractionDigits: 3 });
/** 12500 → "Rp12.500" */
export const rupiah = (n: number) => `Rp${fmt(n)}`;
/** Pecahan LaTeX: frac(3, 4) → "\\frac{3}{4}" (tanpa $) */
export const frac = (num: number, den: number, whole?: number) => `${whole ? `${whole}` : ''}\\frac{${num}}{${den}}`;
const SATUAN = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
/** Bilangan dalam kata, 0–9.999.999: 345 → "tiga ratus empat puluh lima" */
export function terbilang(n: number): string {
    if (n === 0) return 'nol';
    const w = (x: number): string => {
        if (x < 12) return SATUAN[x];
        if (x < 20) return `${SATUAN[x - 10]} belas`;
        if (x < 100) return `${SATUAN[Math.floor(x / 10)]} puluh${x % 10 ? ` ${SATUAN[x % 10]}` : ''}`;
        if (x < 200) return `seratus${x > 100 ? ` ${w(x - 100)}` : ''}`;
        if (x < 1000) return `${SATUAN[Math.floor(x / 100)]} ratus${x % 100 ? ` ${w(x % 100)}` : ''}`;
        if (x < 2000) return `seribu${x > 1000 ? ` ${w(x - 1000)}` : ''}`;
        if (x < 1_000_000) return `${w(Math.floor(x / 1000))} ribu${x % 1000 ? ` ${w(x % 1000)}` : ''}`;
        return `${w(Math.floor(x / 1_000_000))} juta${x % 1_000_000 ? ` ${w(x % 1_000_000)}` : ''}`;
    };
    return w(n);
}
