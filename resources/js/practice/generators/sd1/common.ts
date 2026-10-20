/* Bantuan bersama untuk generator SD1. */
import type { ChoiceStep, ErrorCode, Rng } from '../../types';

export const NAMA = ['Budi', 'Siti', 'Made', 'Putu', 'Rina', 'Andi', 'Wayan', 'Dewi', 'Ani', 'Dodi', 'Eko', 'Kadek'] as const;

/** n nama berbeda, urutan acak. */
export const namaAcak = (rng: Rng, n: number): string[] => rng.shuffle(NAMA).slice(0, n);

/**
 * Susun pilihan ganda: jawaban + pengecoh (tanpa kembar, tanpa sama dengan jawaban), diacak.
 * Pengecoh boleh membawa kode kesalahan khusus.
 */
export function pilihan(
    rng: Rng,
    answer: string,
    wrong: (string | [string, ErrorCode])[],
    max = 4,
): Pick<ChoiceStep, 'options' | 'answer' | 'distractorErrors'> {
    const seen = new Set<string>([answer]);
    const opts: string[] = [answer];
    const errs: Record<string, ErrorCode> = {};
    for (const w of wrong) {
        const [text, code] = Array.isArray(w) ? w : [w, undefined];
        if (seen.has(text) || opts.length >= max) continue;
        seen.add(text);
        opts.push(text);
        if (code) errs[text] = code;
    }
    return { options: rng.shuffle(opts), answer, ...(Object.keys(errs).length ? { distractorErrors: errs } : {}) };
}

/** Pilihan dengan urutan tetap (misalnya Ya/Tidak, puluhan/satuan). */
export function pilihanTetap(answer: string, options: string[], errs?: Record<string, ErrorCode>): Pick<ChoiceStep, 'options' | 'answer' | 'distractorErrors'> {
    return { options, answer, ...(errs ? { distractorErrors: errs } : {}) };
}

/** Puluhan dan satuan dari bilangan 0–99. */
export const pul = (n: number) => Math.floor(n / 10);
export const sat = (n: number) => n % 10;

/** "3, 6, 9, 12" — hitung loncat. */
export const loncat = (step: number, times: number, start = 0) => Array.from({ length: times }, (_, i) => start + step * (i + 1)).join(', ');

/** Kata bilangan urutan: 1 → "pertama", 7 → "ketujuh". */
export const urutanKata = (n: number) => (n === 1 ? 'pertama' : `ke${terbilangKecil(n)}`);
const KECIL = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh'];
export const terbilangKecil = (n: number) => KECIL[n];

/** Ambil k angka berbeda dalam rentang a..b. */
export function berbeda(rng: Rng, k: number, a: number, b: number, ok: (n: number, sudah: number[]) => boolean = () => true): number[] {
    const out: number[] = [];
    let guard = 0;
    while (out.length < k && guard++ < 500) {
        const n = rng.int(a, b);
        if (!out.includes(n) && ok(n, out)) out.push(n);
    }
    // cadangan deterministik kalau syarat terlalu ketat
    for (let n = a; out.length < k && n <= b; n++) if (!out.includes(n)) out.push(n);
    return out;
}
