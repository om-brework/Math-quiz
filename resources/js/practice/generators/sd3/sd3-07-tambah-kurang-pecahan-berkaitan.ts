/* sd3-07 Penjumlahan dan pengurangan pecahan berkaitan (penyebut sampai 12) dalam satu keseluruhan. */
import type { Generator, Rng, Step, TopicDef } from '../../types';
import { F, NAMA, fr, gcd, num, until } from './util';

interface Pair { a: number; b: number; c: number; B: number; k: number }

/** a/b (penyebut kecil) dan c/B (penyebut besar), B = b × k ≤ 12. */
function pasangan(rng: Rng, opt: { unit?: boolean; maxB: number; ok: (p: Pair) => boolean }): Pair {
    return until(() => {
        const b = rng.int(2, 6);
        const k = rng.int(2, 6);
        const B = b * k;
        const a = opt.unit ? 1 : rng.int(1, b - 1);
        const c = rng.int(1, B - 1);
        return { a, b, c, B, k };
    }, (p) => p.B <= opt.maxB && gcd(p.a, p.b) === 1 && gcd(p.c, p.B) === 1 && opt.ok(p));
}

const samakan = (p: Pair): Step[] => [
    num({ id: 'penyebut', prompt: `Penyebutnya ${p.b} dan ${p.B}. Penyebut bersamanya berapa?`, answer: p.B, error: 'penyebut-tidak-disamakan',
        hint: `${p.b} × ${p.k} = ${p.B}. Pakai penyebut yang besar.`, explain: `${p.b} × ${p.k} = ${p.B}, jadi kedua pecahan berkaitan. Penyebut bersama ${p.B}.` }),
    num({ id: 'ubah', prompt: `Ubah ${F(p.a, p.b)} menjadi per-${p.B}. Pembilangnya berapa?`, answer: p.a * p.k, error: 'senilai-satu-angka',
        hint: `Penyebut dikali ${p.k}, maka pembilang juga dikali ${p.k}.`, explain: `${F(p.a, p.b)} = ${F(p.a * p.k, p.B)}.` }),
];

/** Langkah hitung pembilang + langkah sederhanakan (kalau perlu). */
function hasil(n: number, d: number, op: '+' | '−', l: number, r: number): Step[] {
    const g = gcd(n, d);
    const steps: Step[] = [
        fr({ id: 'hitung', prompt: `${op === '+' ? 'Jumlahkan' : 'Kurangkan'} pembilangnya: ${F(l, d)} ${op} ${F(r, d)} = ?`, n, d, error: op === '+' ? 'jumlah-penyebut' : 'penyebut-tidak-disamakan',
            hint: `Penyebut tetap ${d}. Hanya pembilang yang di${op === '+' ? 'jumlah' : 'kurang'}kan: ${l} ${op} ${r}.`, explain: `${l} ${op} ${r} = ${n}, jadi hasilnya ${F(n, d)}.` }),
    ];
    if (g > 1) steps.push(fr({ id: 'sederhana', prompt: `Sederhanakan ${F(n, d)}.`, n: n / g, d: d / g, simplest: true, error: 'pecahan-belum-sederhana',
        hint: `${n} dan ${d} sama-sama bisa dibagi ${g}.`, explain: `${F(n, d)} = ${F(n / g, d / g)}.` }));
    return steps;
}

const tambah: Generator = (rng, level) => {
    const p = pasangan(rng, {
        unit: level === 1, maxB: level === 1 ? 10 : 12,
        ok: (q) => { const s = q.a * q.k + q.c; return s < q.B && (level === 1 ? gcd(s, q.B) === 1 : level === 3 ? gcd(s, q.B) > 1 : true); },
    });
    const s = p.a * p.k + p.c, g = gcd(s, p.B);
    const swap = rng.chance(0.5);
    const [L, R] = swap ? [F(p.c, p.B), F(p.a, p.b)] : [F(p.a, p.b), F(p.c, p.B)];
    const steps: Step[] = [...samakan(p), ...(swap ? hasil(s, p.B, '+', p.c, p.a * p.k) : hasil(s, p.B, '+', p.a * p.k, p.c))];
    return { text: `Hitung ${L} + ${R}.`, steps, conclusion: `Jadi ${L} + ${R} = ${F(s / g, p.B / g)}.`,
        visual: level === 1 ? { type: 'fraction', shape: 'bar', parts: p.b, shaded: p.a } : undefined };
};

const kurang: Generator = (rng, level) => {
    if (level === 3 && rng.chance(0.5)) {
        // 1 − pecahan
        const d = rng.int(3, 12);
        const n = until(() => rng.int(1, d - 1), (x) => gcd(x, d) === 1);
        const r = d - n, g = gcd(r, d);
        const steps: Step[] = [
            num({ id: 'utuh', prompt: `Tulis 1 utuh sebagai pecahan per-${d}. Pembilangnya?`, answer: d, error: 'satu-utuh-pecahan',
                hint: `1 martabak utuh = semua potongnya, yaitu ${d} dari ${d}.`, explain: `1 = ${F(d, d)}.` }),
            ...hasil(r, d, '−', d, n),
        ];
        return { text: `Hitung $1 - \\frac{${n}}{${d}}$.`, steps, conclusion: `Jadi $1 - \\frac{${n}}{${d}}$ = ${F(r / g, d / g)}.` };
    }
    const bigFirst = rng.chance(0.5); // pecahan berpenyebut kecil dulu atau besar dulu
    const p = pasangan(rng, {
        unit: level === 1, maxB: 12,
        ok: (q) => {
            const diff = bigFirst ? q.c - q.a * q.k : q.a * q.k - q.c;
            return diff > 0 && (level === 1 ? gcd(diff, q.B) === 1 : level === 3 ? gcd(diff, q.B) > 1 : true);
        },
    });
    const A = p.a * p.k;
    const diff = bigFirst ? p.c - A : A - p.c, g = gcd(diff, p.B);
    const [L, R] = bigFirst ? [F(p.c, p.B), F(p.a, p.b)] : [F(p.a, p.b), F(p.c, p.B)];
    const steps: Step[] = [...samakan(p), ...(bigFirst ? hasil(diff, p.B, '−', p.c, A) : hasil(diff, p.B, '−', A, p.c))];
    return { text: `Hitung ${L} − ${R}.`, steps, conclusion: `Jadi ${L} − ${R} = ${F(diff / g, p.B / g)}.` };
};

const BENDA = ['kue', 'martabak', 'pizza', 'roti'];

/** Soal cerita dua bagian: dimakan (dijumlah) lalu sisa (1 − jumlah). */
const cerita: Generator = (rng, level) => {
    const p = pasangan(rng, {
        unit: level === 1, maxB: level === 1 ? 8 : 12,
        ok: (q) => { const s = q.a * q.k + q.c; return s < q.B && (level === 1 ? gcd(s, q.B) === 1 && gcd(q.B - s, q.B) === 1 : level === 3 ? gcd(s, q.B) > 1 || gcd(q.B - s, q.B) > 1 : true); },
    });
    const nama = rng.pick(NAMA);
    const benda = rng.pick(BENDA);
    const s = p.a * p.k + p.c, r = p.B - s;
    const gs = gcd(s, p.B), gr = gcd(r, p.B);
    const steps: Step[] = [
        ...samakan(p),
        fr({ id: 'dimakan', prompt: `Berapa bagian ${benda} yang dimakan mereka berdua?`, n: s / gs, d: p.B / gs, simplest: true, error: 'jumlah-penyebut',
            hint: `${F(p.a * p.k, p.B)} + ${F(p.c, p.B)}. Penyebut tetap, jumlahkan pembilang, lalu sederhanakan.`, explain: `${F(p.a * p.k, p.B)} + ${F(p.c, p.B)} = ${F(s, p.B)}${gs > 1 ? ` = ${F(s / gs, p.B / gs)}` : ''}.` }),
        fr({ id: 'sisa', prompt: `Berapa bagian ${benda} yang tersisa?`, n: r / gr, d: p.B / gr, simplest: true, error: 'satu-utuh-pecahan',
            hint: `1 ${benda} utuh = ${F(p.B, p.B)}. Kurangkan ${F(s, p.B)}.`, explain: `${F(p.B, p.B)} − ${F(s, p.B)} = ${F(r, p.B)}${gr > 1 ? ` = ${F(r / gr, p.B / gr)}` : ''}. Cek: ${F(s, p.B)} + ${F(r, p.B)} = 1.` }),
    ];
    return {
        text: `${nama} makan ${F(p.a, p.b)} ${benda}. Adiknya makan ${F(p.c, p.B)} ${benda} yang sama. Berapa bagian yang mereka makan, dan berapa bagian yang tersisa?`,
        steps, conclusion: `Mereka makan ${F(s / gs, p.B / gs)} ${benda}, dan tersisa ${F(r / gr, p.B / gr)} ${benda}.`,
        visual: { type: 'fraction', shape: 'rect', parts: p.B, shaded: 0 },
    };
};

export const topic: TopicDef = {
    topic: 'sd3-07-tambah-kurang-pecahan-berkaitan',
    skills: [
        { code: 'tambah-berkaitan', name: 'Menjumlahkan pecahan berkaitan', gen: tambah },
        { code: 'kurang-berkaitan', name: 'Mengurangkan pecahan berkaitan dan dari 1 utuh', gen: kurang },
        { code: 'cerita-pecahan', name: 'Soal cerita: bagian yang dimakan dan sisa', gen: cerita },
    ],
};
