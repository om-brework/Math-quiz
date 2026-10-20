/* Alat bantu bersama untuk generator SD3. */
import type { ChoiceStep, ColumnStep, ErrorCode, FractionStep, NumberStep, Rng } from '../../types';

export const NAMA = ['Budi', 'Siti', 'Made', 'Putu', 'Rina', 'Andi', 'Wayan', 'Dewi', 'Komang', 'Ayu'] as const;

export const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));

/** Jam gaya Indonesia: tm(7, 5) → "07.05" */
export const tm = (h: number, m: number) => `${String(h).padStart(2, '0')}.${String(m).padStart(2, '0')}`;

/** Lama waktu dalam kata: 95 → "1 jam 35 menit" */
export const durasi = (menit: number) => {
    const h = Math.floor(menit / 60), m = menit % 60;
    if (!h) return `${m} menit`;
    return m ? `${h} jam ${m} menit` : `${h} jam`;
};

/** Pecahan LaTeX siap tampil: "$\frac{3}{4}$" */
export const F = (n: number, d: number) => `$\\frac{${n}}{${d}}$`;

interface Base { id: string; prompt: string; hint: string; explain: string }

export const num = (b: Base & { answer: number | string; error: ErrorCode; prefix?: string; suffix?: string }): NumberStep => ({
    kind: 'number', ...b, answer: String(b.answer),
});

export const col = (b: Base & { op: '+' | '-' | '×'; a: number; b: number; error?: ErrorCode }): ColumnStep => ({ kind: 'column', ...b });

export const fr = (b: Base & { n: number; d: number; error: ErrorCode; simplest?: boolean }): FractionStep => {
    const { n, d, simplest, ...rest } = b;
    return { kind: 'fraction', ...rest, answer: { num: n, den: d }, ...(simplest ? { simplest: true } : {}) };
};

/**
 * Pilihan ganda. `wrong` berisi pengecoh, boleh dengan kode kesalahan khusus: ["8 − 3", "kurang-terbalik"].
 * Pengecoh yang sama dengan jawaban atau kembar dibuang; maksimal `max` pilihan.
 */
export function pick(
    rng: Rng,
    b: Base & { answer: string; wrong: (string | [string, ErrorCode])[]; error: ErrorCode; max?: number; keepOrder?: boolean },
): ChoiceStep {
    const seen = new Set([b.answer]);
    const errs: Record<string, ErrorCode> = {};
    const wrong: string[] = [];
    for (const w of b.wrong) {
        const [text, code] = Array.isArray(w) ? w : [w, undefined];
        if (seen.has(text)) continue;
        seen.add(text);
        wrong.push(text);
        if (code) errs[text] = code;
    }
    const chosen = wrong.slice(0, (b.max ?? 4) - 1);
    const options = b.keepOrder ? [b.answer, ...chosen] : rng.shuffle([b.answer, ...chosen]);
    const distractorErrors: Record<string, ErrorCode> = {};
    for (const o of chosen) if (errs[o]) distractorErrors[o] = errs[o];
    const step: ChoiceStep = { kind: 'choice', id: b.id, prompt: b.prompt, options, answer: b.answer, hint: b.hint, explain: b.explain, error: b.error };
    if (Object.keys(distractorErrors).length) step.distractorErrors = distractorErrors;
    return step;
}

/** Urutkan opsi tetap (misalnya tanda > < =, atau nama tempat) tanpa diacak. */
export function fixed(b: Base & { options: string[]; answer: string; error: ErrorCode; distractorErrors?: Record<string, ErrorCode> }): ChoiceStep {
    const de: Record<string, ErrorCode> = {};
    for (const [k, v] of Object.entries(b.distractorErrors ?? {})) if (k !== b.answer && b.options.includes(k)) de[k] = v;
    const step: ChoiceStep = { kind: 'choice', id: b.id, prompt: b.prompt, options: b.options, answer: b.answer, hint: b.hint, explain: b.explain, error: b.error };
    if (Object.keys(de).length) step.distractorErrors = de;
    return step;
}

/** Bilangan acak dengan syarat; mencoba sampai syarat terpenuhi. */
export function until<T>(make: () => T, ok: (v: T) => boolean): T {
    for (let i = 0; i < 10000; i++) {
        const v = make();
        if (ok(v)) return v;
    }
    throw new Error('until: syarat tidak terpenuhi');
}

/** Apakah a + b perlu menyimpan di kolom ke-i (0 = satuan)? */
export const carriesAdd = (a: number, b: number) => {
    let c = 0, n = 0;
    for (let i = 0; i < 5; i++) {
        const s = (Math.floor(a / 10 ** i) % 10) + (Math.floor(b / 10 ** i) % 10) + c;
        c = s >= 10 ? 1 : 0;
        n += c;
    }
    return n;
};

/** Banyak kolom yang meminjam pada a − b. */
export const borrowsSub = (a: number, b: number) => {
    let br = 0, n = 0;
    for (let i = 0; i < 5; i++) {
        const d = (Math.floor(a / 10 ** i) % 10) - br - (Math.floor(b / 10 ** i) % 10);
        br = d < 0 ? 1 : 0;
        n += br;
    }
    return n;
};

/** Banyak simpanan pada perkalian a × b (b satu angka). */
export const carriesMul = (a: number, b: number) => {
    let c = 0, n = 0;
    for (let x = a; x > 0; x = Math.floor(x / 10)) {
        c = Math.floor(((x % 10) * b + c) / 10);
        if (c) n++;
    }
    return n;
};

export const PLACE = ['satuan', 'puluhan', 'ratusan', 'ribuan'] as const;
export const PLACE_VAL = [1, 10, 100, 1000] as const;
export const digitAt = (n: number, i: number) => Math.floor(n / 10 ** i) % 10;
