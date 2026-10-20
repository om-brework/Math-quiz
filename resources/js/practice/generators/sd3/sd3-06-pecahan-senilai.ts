/* sd3-06 Pecahan senilai, bentuk paling sederhana, membandingkan dan mengurutkan pecahan (penyebut sampai 12). */
import type { Generator, Rng, Step, TopicDef } from '../../types';
import { F, NAMA, fixed, fr, gcd, num, pick, until } from './util';

/** Pecahan sejati paling sederhana a/b dengan penyebut di `dens`. */
const sederhana = (rng: Rng, dens: number[]) => until(() => { const b = rng.pick(dens); return [rng.int(1, b - 1), b]; }, ([a, b]) => gcd(a, b) === 1);

/** Melengkapi pecahan senilai: pembilang atau penyebut belum diketahui. */
const lengkapi: Generator = (rng, level) => {
    const [a, b] = sederhana(rng, level === 1 ? [2, 3, 4, 5, 6] : [2, 3, 4, 5, 6]);
    const k = rng.int(2, Math.floor(12 / b));
    const A = a * k, B = b * k;
    const missNum = level === 1 ? true : rng.chance(0.5);
    // tingkat 3: arah membagi (pecahan besar diketahui, cari yang kecil)
    if (level === 3) {
        const text = missNum ? `Isilah: $\\frac{${A}}{${B}} = \\frac{\\square}{${b}}$` : `Isilah: $\\frac{${A}}{${B}} = \\frac{${a}}{\\square}$`;
        const steps: Step[] = [
            num({ id: 'pembagi', prompt: missNum ? `Penyebut ${B} menjadi ${b}. Dibagi berapa?` : `Pembilang ${A} menjadi ${a}. Dibagi berapa?`, answer: k, error: 'salah-pengali-senilai',
                hint: missNum ? `${B} ÷ ? = ${b}. Pikirkan ${b} × ? = ${B}.` : `${A} ÷ ? = ${a}. Pikirkan ${a} × ? = ${A}.`, explain: `Dibagi ${k}. Potongan kecil digabung, setiap ${k} potong menjadi 1.` }),
            num({ id: 'jawab', prompt: missNum ? `Pembilang juga dibagi ${k}: ${A} ÷ ${k} = ?` : `Penyebut juga dibagi ${k}: ${B} ÷ ${k} = ?`, answer: missNum ? a : b, error: 'senilai-satu-angka',
                hint: 'Pembilang dan penyebut harus dibagi dengan bilangan yang sama.', explain: `${F(A, B)} = ${F(a, b)}. Cek: ${a} × ${k} = ${A} dan ${b} × ${k} = ${B}.` }),
        ];
        return { text, steps, conclusion: `Jadi ${F(A, B)} = ${F(a, b)}.`, visual: { type: 'fraction', shape: 'bar', parts: B, shaded: A } };
    }
    const text = missNum ? `Isilah: $\\frac{${a}}{${b}} = \\frac{\\square}{${B}}$` : `Isilah: $\\frac{${a}}{${b}} = \\frac{${A}}{\\square}$`;
    const steps: Step[] = [];
    if (level === 1) steps.push(pick(rng, { id: 'aturan', prompt: 'Supaya pecahannya tetap senilai, pembilang dan penyebut harus ...', answer: 'dikali bilangan yang sama',
        wrong: [['ditambah bilangan yang sama', 'senilai-ditambah'], ['hanya penyebut yang dikali', 'senilai-satu-angka'], ['hanya pembilang yang dikali', 'senilai-satu-angka']],
        error: 'senilai-ditambah', hint: 'Ingat martabak: setiap potong dipotong lagi menjadi beberapa bagian.', explain: 'Pecahan senilai dibuat dengan mengali (atau membagi) pembilang dan penyebut dengan bilangan yang sama.' }));
    steps.push(
        num({ id: 'pengali', prompt: missNum ? `Penyebut ${b} menjadi ${B}. Dikali berapa?` : `Pembilang ${a} menjadi ${A}. Dikali berapa?`, answer: k, error: 'salah-pengali-senilai',
            hint: missNum ? `${b} × ? = ${B}` : `${a} × ? = ${A}`, explain: `Dikali ${k}. Setiap potong dipotong lagi menjadi ${k}.` }),
        num({ id: 'jawab', prompt: missNum ? `Pembilang juga dikali ${k}: ${a} × ${k} = ?` : `Penyebut juga dikali ${k}: ${b} × ${k} = ?`, answer: missNum ? A : B, error: 'senilai-satu-angka',
            hint: 'Kalikan pembilang dan penyebut dengan bilangan yang sama, bukan ditambah.', explain: `${F(a, b)} = ${F(A, B)}. Cek: ${A} ÷ ${k} = ${a} dan ${B} ÷ ${k} = ${b}.` }),
    );
    return { text, steps, conclusion: `Jadi ${F(a, b)} = ${F(A, B)}.`, visual: level === 1 ? { type: 'fraction', shape: 'bar', parts: b, shaded: a } : undefined };
};

/** Bentuk paling sederhana. */
const palingSederhana: Generator = (rng, level) => {
    const [a, b] = sederhana(rng, [2, 3, 4, 5, 6]);
    const k = rng.int(2, Math.floor(12 / b));
    const [p, q] = level === 1 ? until(() => { const [x, y] = sederhana(rng, [2, 3, 4, 5, 6]); return [2 * x, 2 * y]; }, ([, y]) => y <= 12) : [a * k, b * k];
    const g = gcd(p, q), s = [p / g, q / g];
    const commons = [2, 3, 4, 5, 6].filter((x) => p % x === 0 && q % x === 0);
    const steps: Step[] = [];
    if (level === 3) {
        const nama = rng.pick(NAMA);
        const text = `${nama} memotong sebuah martabak menjadi ${q} potong sama besar. ${nama} makan ${p} potong. Tulis bagian martabak yang dimakan dalam bentuk paling sederhana.`;
        steps.push(
            fr({ id: 'pecahan', prompt: 'Tulis bagian yang dimakan sebagai pecahan.', n: p, d: q, error: 'salah-membaca-pecahan',
                hint: 'Pembilang = potong yang dimakan, penyebut = semua potong.', explain: `${p} dari ${q} potong: ${F(p, q)}.` }),
            num({ id: 'fpb', prompt: `Bilangan terbesar yang bisa membagi ${p} dan ${q}?`, answer: g, error: 'pecahan-belum-sederhana',
                hint: `Coba bagi dengan 2, 3, 4, … sampai ${p}. Pilih yang terbesar.`, explain: `${p} dan ${q} sama-sama bisa dibagi ${g}.` }),
            fr({ id: 'jawab', prompt: 'Tulis dalam bentuk paling sederhana.', n: s[0], d: s[1], simplest: true, error: 'senilai-satu-angka',
                hint: `Bagi pembilang dan penyebut dengan ${g}.`, explain: `${F(p, q)} = ${F(s[0], s[1])}. ${s[0]} dan ${s[1]} tidak bisa dibagi lagi.` }),
        );
        return { text, visual: { type: 'fraction', shape: 'circle', parts: q, shaded: p }, steps, conclusion: `Jadi ${nama} makan ${F(s[0], s[1])} martabak.` };
    }
    if (level === 1) {
        steps.push(pick(rng, { id: 'pembagi', prompt: `Bilangan apa yang bisa membagi ${p} dan ${q}?`, answer: '2', wrong: ['3', '5', '7', '4', '6'].filter((x) => !commons.includes(Number(x))).map((x) => [x, 'salah-pembagi-sama'] as [string, string]),
            error: 'salah-pembagi-sama', hint: 'Keduanya bilangan genap.', explain: `${p} dan ${q} sama-sama bisa dibagi 2.` }));
    } else {
        steps.push(pick(rng, { id: 'fpb', prompt: `Bilangan terbesar yang bisa membagi ${p} dan ${q}?`, answer: String(g),
            wrong: [...commons.filter((x) => x !== g).map((x) => [String(x), 'pecahan-belum-sederhana'] as [string, string]), ...[2, 3, 4, 5, 6, 7].filter((x) => !commons.includes(x)).map((x) => [String(x), 'salah-pembagi-sama'] as [string, string])],
            error: 'pecahan-belum-sederhana', hint: 'Coba 2, 3, 4, 5, 6. Pilih yang terbesar supaya cepat.', explain: `Pembagi yang sama: ${commons.join(', ')}. Yang terbesar ${g}.` }));
    }
    steps.push(fr({ id: 'jawab', prompt: `Tulis ${F(p, q)} dalam bentuk paling sederhana.`, n: s[0], d: s[1], simplest: true, error: 'senilai-satu-angka',
        hint: `Bagi pembilang dan penyebut dengan ${g}: ${p} ÷ ${g} dan ${q} ÷ ${g}.`, explain: `${F(p, q)} = ${F(s[0], s[1])}. Cek: ${s[0]} × ${g} = ${p}, ${s[1]} × ${g} = ${q}.` }));
    return { text: `Tulis ${F(p, q)} dalam bentuk paling sederhana.`, visual: { type: 'fraction', shape: 'bar', parts: q, shaded: p }, steps, conclusion: `Jadi ${F(p, q)} = ${F(s[0], s[1])}.` };
};

const SIGN = ['$>$', '$<$', '$=$'];

/** Membandingkan dan mengurutkan pecahan. */
const bandingkan: Generator = (rng, level) => {
    if (level === 1) {
        const samaPenyebut = rng.chance(0.5);
        let a1: number, b1: number, a2: number, b2: number;
        if (samaPenyebut) {
            b1 = b2 = rng.int(4, 12);
            [a1, a2] = until(() => [rng.int(1, b1 - 1), rng.int(1, b1 - 1)], ([x, y]) => x !== y);
        } else {
            a1 = a2 = rng.int(1, 4);
            [b1, b2] = until(() => [rng.int(a1 + 1, 12), rng.int(a1 + 1, 12)], ([x, y]) => x !== y);
        }
        const big = a1 * b2 > a2 * b1;
        const sign = big ? '$>$' : '$<$';
        const steps: Step[] = [
            fixed({ id: 'sama', prompt: 'Bagian mana yang sama?', options: ['penyebut', 'pembilang'], answer: samaPenyebut ? 'penyebut' : 'pembilang', error: 'banding-pecahan',
                hint: 'Pembilang di atas, penyebut di bawah.', explain: samaPenyebut ? `Penyebutnya sama, ${b1}. Ukuran potongannya sama.` : `Pembilangnya sama, ${a1}. Banyak potongnya sama.` }),
            fixed({ id: 'tanda', prompt: `Pilih tanda: ${F(a1, b1)} ? ${F(a2, b2)}`, options: SIGN, answer: sign, error: 'banding-pecahan',
                distractorErrors: { [big ? '$<$' : '$>$']: samaPenyebut ? 'banding-pecahan' : 'penyebut-besar-pecahan-besar' },
                hint: samaPenyebut ? 'Potongannya sama besar. Bandingkan banyak potongnya (pembilang).' : 'Makin besar penyebut, makin kecil tiap potongnya.',
                explain: samaPenyebut ? `${a1} potong ${big ? 'lebih banyak' : 'lebih sedikit'} dari ${a2} potong.` : `Potongan per-${b1} ${b1 < b2 ? 'lebih besar' : 'lebih kecil'} dari potongan per-${b2}.` }),
        ];
        return { text: `Bandingkan ${F(a1, b1)} dan ${F(a2, b2)}.`, steps, conclusion: `Jadi $\\frac{${a1}}{${b1}} ${big ? '>' : '<'} \\frac{${a2}}{${b2}}$.` };
    }
    if (level === 2) {
        const [b, k] = until(() => [rng.int(2, 6), rng.int(2, 4)], ([x, y]) => x * y <= 12);
        const B = b * k;
        const [a, A] = until(() => [rng.int(1, b - 1), rng.int(1, B - 1)], ([x, y]) => gcd(x, b) === 1 && x * k !== y && gcd(y, B) === 1);
        const flip = rng.chance(0.5);
        const [l, r] = flip ? [[A, B], [a, b]] : [[a, b], [A, B]];
        const big = l[0] * r[1] > r[0] * l[1];
        const steps: Step[] = [
            num({ id: 'penyebut', prompt: `Penyebutnya ${b} dan ${B}. Penyebut bersamanya berapa?`, answer: B, error: 'banding-tanpa-samakan',
                hint: `${b} × ${k} = ${B}. Penyebut yang besar bisa dipakai.`, explain: `Penyebut bersama ${B}.` }),
            num({ id: 'ubah', prompt: `Ubah ${F(a, b)} menjadi per-${B}. Pembilangnya?`, answer: a * k, error: 'senilai-satu-angka',
                hint: `Penyebut dikali ${k}, pembilang juga dikali ${k}.`, explain: `${F(a, b)} = ${F(a * k, B)}.` }),
            fixed({ id: 'tanda', prompt: `Pilih tanda: ${F(l[0], l[1])} ? ${F(r[0], r[1])}`, options: SIGN, answer: big ? '$>$' : '$<$', error: 'banding-pecahan',
                hint: `Bandingkan ${a * k} dan ${A} (sama-sama per-${B}).`, explain: `${F(a * k, B)} ${big !== flip ? '>' : '<'} ${F(A, B)}, jadi ${F(l[0], l[1])} ${big ? '>' : '<'} ${F(r[0], r[1])}.` }),
        ];
        return { text: `Bandingkan ${F(l[0], l[1])} dan ${F(r[0], r[1])}.`, steps, conclusion: `Jadi $\\frac{${l[0]}}{${l[1]}} ${big ? '>' : '<'} \\frac{${r[0]}}{${r[1]}}$.` };
    }
    // tingkat 3: urutkan tiga pecahan dari keluarga penyebut yang sama
    const fam = rng.pick([[2, 4, 8], [2, 3, 6], [3, 6, 12], [2, 4, 12], [2, 5, 10], [3, 4, 12]]);
    const D = fam[2];
    const fs = until(() => fam.map((b) => { const a = until(() => rng.int(1, b - 1), (x) => gcd(x, b) === 1); return [a, b]; }), (l) => new Set(l.map(([a, b]) => (a * D) / b)).size === 3);
    const asc = rng.chance(0.5);
    const sorted = [...fs].sort((x, y) => (asc ? 1 : -1) * (x[0] / x[1] - y[0] / y[1]));
    const show = (l: number[][]) => l.map(([a, b]) => F(a, b)).join(', ');
    const shown = rng.shuffle(fs);
    const byDen = [...fs].sort((x, y) => (asc ? 1 : -1) * (y[1] - x[1]));
    const byNum = [...fs].sort((x, y) => (asc ? 1 : -1) * (x[0] - y[0]));
    const steps: Step[] = [
        num({ id: 'penyebut', prompt: `Penyebutnya ${fam.join(', ')}. Penyebut bersama yang paling kecil?`, answer: D, error: 'banding-tanpa-samakan',
            hint: `Cari bilangan di tabel ${fam.join(', ')} sekaligus. Coba penyebut yang paling besar.`, explain: `${fam.slice(0, 2).map((b) => `${b} × ${D / b} = ${D}`).join(', ')}. Penyebut bersama ${D}.` }),
        pick(rng, { id: 'ujung', prompt: `Ubah semua ke per-${D}. Mana yang paling ${asc ? 'kecil' : 'besar'}?`, answer: F(sorted[0][0], sorted[0][1]), wrong: fs.filter((f) => f !== sorted[0]).map(([a, b]) => [F(a, b), 'banding-tanpa-samakan'] as [string, string]),
            error: 'banding-tanpa-samakan', hint: `${fs.map(([a, b]) => `${F(a, b)} = ${F((a * D) / b, D)}`).join(', ')}.`, explain: `Pembilang per-${D}: ${fs.map(([a, b]) => (a * D) / b).join(', ')}.` }),
        pick(rng, { id: 'urutan', prompt: `Urutkan dari yang ${asc ? 'terkecil' : 'terbesar'}.`, answer: show(sorted),
            wrong: [[show([...sorted].reverse()), 'banding-pecahan'], [show(byDen), 'penyebut-besar-pecahan-besar'], [show(byNum), 'banding-tanpa-samakan'], [show([sorted[1], sorted[0], sorted[2]]), 'banding-pecahan'], [show([sorted[0], sorted[2], sorted[1]]), 'banding-pecahan']],
            error: 'banding-pecahan', hint: 'Urutkan pembilang per-' + D + ', lalu kembalikan ke pecahan asal.', explain: `${sorted.map(([a, b]) => F((a * D) / b, D)).join(', ')} → ${show(sorted)}.` }),
    ];
    return { text: `Urutkan dari yang ${asc ? 'terkecil' : 'terbesar'}: ${show(shown)}.`, steps, conclusion: `Jadi urutannya ${show(sorted)}.` };
};

export const topic: TopicDef = {
    topic: 'sd3-06-pecahan-senilai',
    skills: [
        { code: 'lengkapi-senilai', name: 'Melengkapi pecahan senilai', gen: lengkapi },
        { code: 'paling-sederhana', name: 'Bentuk paling sederhana', gen: palingSederhana },
        { code: 'bandingkan-pecahan', name: 'Membandingkan dan mengurutkan pecahan', gen: bandingkan },
    ],
};
