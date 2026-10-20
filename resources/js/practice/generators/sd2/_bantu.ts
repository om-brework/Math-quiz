/* Pembantu bersama untuk generator SD2: membuat langkah isian, pilihan, dan pecahan dengan ringkas. */
import type { ChoiceStep, ErrorCode, FractionStep, NumberStep, Rng } from '../../types';

export const NAMA = ['Budi', 'Siti', 'Made', 'Putu', 'Rina', 'Andi', 'Dewi', 'Wayan'] as const;

interface Teks { hint: string; explain: string; error: ErrorCode }

/** Langkah isian angka. */
export function isi(id: string, prompt: string, answer: number, t: Teks & { prefix?: string; suffix?: string }): NumberStep {
    return { kind: 'number', id, prompt, answer: String(answer), hint: t.hint, explain: t.explain, error: t.error, prefix: t.prefix, suffix: t.suffix };
}

/**
 * Langkah pilihan ganda. `salah` berisi pilihan salah, boleh dengan kode kesalahan khusus: [teks, kode].
 * Pilihan diacak, kecuali `urut` diberikan (urutan tetap, misalnya lambang > < =).
 */
export function pilih(rng: Rng, id: string, prompt: string, answer: string, salah: (string | [string, ErrorCode])[], t: Teks & { urut?: string[] }): ChoiceStep {
    const distractorErrors: Record<string, ErrorCode> = {};
    const wrong: string[] = [];
    for (const s of salah) {
        const [txt, code] = Array.isArray(s) ? s : [s, undefined];
        if (txt === answer || wrong.includes(txt)) continue;
        wrong.push(txt);
        if (code) distractorErrors[txt] = code;
    }
    const options = t.urut ? [...t.urut] : rng.shuffle([answer, ...wrong]);
    const step: ChoiceStep = { kind: 'choice', id, prompt, options, answer, hint: t.hint, explain: t.explain, error: t.error };
    if (Object.keys(distractorErrors).length) step.distractorErrors = distractorErrors;
    return step;
}

/** Langkah jawaban pecahan. */
export function pecahan(id: string, prompt: string, num: number, den: number, t: Teks & { simplest?: boolean }): FractionStep {
    return { kind: 'fraction', id, prompt, answer: { num, den }, hint: t.hint, explain: t.explain, error: t.error, simplest: t.simplest };
}

/** Pecahan siap tampil (LaTeX): "$\frac{3}{4}$" */
export const fr = (n: number, d: number) => `$\\frac{${n}}{${d}}$`;

/** Lambang pembanding sebagai pilihan (LaTeX, supaya ">" tidak dibaca Markdown sebagai kutipan). */
export const LAMBANG = { lebih: '$>$', kurang: '$<$', sama: '$=$' } as const;
export const URUT_LAMBANG = [LAMBANG.lebih, LAMBANG.kurang, LAMBANG.sama];
export const lambang = (a: number, b: number) => (a > b ? LAMBANG.lebih : a < b ? LAMBANG.kurang : LAMBANG.sama);

/** n bilangan bulat berbeda di antara a..b */
export function berbeda(rng: Rng, n: number, a: number, b: number): number[] {
    const out: number[] = [];
    while (out.length < n) {
        const x = rng.int(a, b);
        if (!out.includes(x)) out.push(x);
    }
    return out;
}

/** 7 → "07" */
export const dua = (n: number) => String(n).padStart(2, '0');
/** pukul 08.05 */
export const pukul = (h: number, m: number) => `pukul ${dua(h)}.${dua(m)}`;
