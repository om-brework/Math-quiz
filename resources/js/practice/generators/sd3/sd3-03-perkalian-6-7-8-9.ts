/* sd3-03 Perkalian 6, 7, 8, 9: strategi dobel, 5 + 2, dekat 10, pola jari 9, pembagian dalam tabel. */
import type { Generator, Step, TopicDef } from '../../types';
import { NAMA, num, pick } from './util';

const STRATEGI: Record<number, string> = { 6: 'dobel kali 3', 8: 'dobel kali 4', 7: 'kali 5 + kali 2', 9: 'kali 10 dikurangi satu kali' };
const strategi = (rng: Parameters<Generator>[0], a: number): Step =>
    pick(rng, { id: 'strategi', prompt: `Strategi apa yang cocok untuk kali ${a}?`, answer: STRATEGI[a], wrong: Object.values(STRATEGI).filter((x) => x !== STRATEGI[a]).map((x) => [x, 'salah-strategi-kali'] as [string, string]),
        error: 'salah-strategi-kali', hint: 'Kali 6 dan 8: dobel. Kali 7: pecah 5 dan 2. Kali 9: dekat dengan kali 10.',
        explain: `Untuk kali ${a} kita pakai ${STRATEGI[a]}.` });

const CERITA_KALI: Record<number, { teks: (n: string, b: number) => string; satuan: string }[]> = {
    6: [
        { teks: (n, b) => `Satu kotak telur berisi 6 butir. ${n} membeli ${b} kotak. Berapa butir telur semuanya?`, satuan: 'butir' },
        { teks: (n, b) => `Satu serangga punya 6 kaki. Di kebun ${n} ada ${b} serangga. Berapa kaki semuanya?`, satuan: 'kaki' },
    ],
    8: [
        { teks: (n, b) => `Seekor laba-laba punya 8 kaki. ${n} melihat ${b} laba-laba. Berapa kaki semuanya?`, satuan: 'kaki' },
        { teks: (n, b) => `Satu bungkus berisi 8 permen. ${n} membeli ${b} bungkus. Berapa permen semuanya?`, satuan: 'permen' },
    ],
    7: [
        { teks: (n, b) => `Satu minggu ada 7 hari. ${n} berlibur selama ${b} minggu. Berapa hari ${n} berlibur?`, satuan: 'hari' },
        { teks: (n, b) => `Setiap hari ${n} membaca 7 halaman buku. Berapa halaman yang dibaca dalam ${b} hari?`, satuan: 'halaman' },
    ],
    9: [
        { teks: (n, b) => `Satu tim kasti berisi 9 anak. Ada ${b} tim. Berapa anak semuanya?`, satuan: 'anak' },
        { teks: (n, b) => `${n} menanam ${b} baris jagung. Setiap baris ada 9 batang. Berapa batang jagung semuanya?`, satuan: 'batang' },
    ],
};

const operasi = (rng: Parameters<Generator>[0], a: number, b: number): Step =>
    pick(rng, { id: 'operasi', prompt: 'Hitungan apa yang dipakai?', answer: `${a} × ${b}`, wrong: [[`${a} + ${b}`, 'salah-pilih-operasi'], [`${a} × ${b + 1}`, 'salah-pilih-operasi'], [`${b} − ${a}`, 'salah-pilih-operasi']],
        error: 'salah-pilih-operasi', hint: 'Ada beberapa kelompok yang sama besar. Itu perkalian.', explain: `${b} kelompok, masing-masing ${a}: ${a} × ${b}.` });

/** Kali 6 dan 8 dengan strategi dobel (kali 3, kali 4). */
const dobel: Generator = (rng, level) => {
    const a = rng.pick([6, 8]);
    const h = a / 2;
    const b = level === 1 ? rng.int(2, 5) : rng.int(6, 9);
    const hb = h * b, p = a * b;
    const steps: Step[] = [];
    let text = `Hitung ${a} × ${b} dengan strategi dobel.`;
    if (level === 2 && rng.chance(0.5)) {
        text = `Hitung ${b} × ${a} dengan strategi dobel.`;
        steps.push(num({ id: 'tukar', prompt: `Urutan perkalian boleh ditukar. ${b} × ${a} = ${a} × ?`, answer: b, error: 'salah-strategi-kali',
            hint: 'Loyang yang diputar tetap berisi kue yang sama banyak.', explain: `${b} × ${a} = ${a} × ${b}.` }));
    }
    let unit = '';
    if (level === 3) {
        const c = rng.pick(CERITA_KALI[a]);
        text = c.teks(rng.pick(NAMA), b);
        unit = c.satuan;
        steps.push(operasi(rng, a, b));
    }
    steps.push(strategi(rng, a));
    steps.push(
        num({ id: 'separuh', prompt: `Kali ${a} adalah dobel kali ${h}. Hitung ${h} × ${b}.`, answer: hb, error: 'salah-fakta-kali',
            hint: `Hitung loncat ${b} sebanyak ${h} kali.`, explain: `${h} × ${b} = ${hb}. Ini separuh loyang.` }),
        num({ id: 'dobel', prompt: `Dobelkan: ${hb} + ${hb} = ?`, answer: p, error: 'salah-strategi-kali', suffix: unit || undefined,
            hint: `Dua bagian yang sama: ${hb} ditambah ${hb}.`, explain: `${hb} + ${hb} = ${p}, jadi ${a} × ${b} = ${p}.` }),
    );
    return { text, steps, conclusion: unit ? `Jadi ada ${p} ${unit}.` : `Jadi ${a} × ${b} = ${p}.`,
        visual: level === 1 ? { type: 'objects', item: 'kue', count: p, group: b } : undefined };
};

/** Kali 7 = kali 5 + kali 2; kali 9 = kali 10 dikurangi satu kali, atau pola jari. */
const tujuhSembilan: Generator = (rng, level) => {
    const a = rng.pick([7, 9]);
    const b = level === 1 ? rng.int(2, 5) : rng.int(6, 9);
    const p = a * b;
    const steps: Step[] = [];
    let text = `Hitung ${a} × ${b}.`;
    let unit = '';
    if (level === 3) {
        const c = rng.pick(CERITA_KALI[a]);
        text = c.teks(rng.pick(NAMA), b);
        unit = c.satuan;
        steps.push(operasi(rng, a, b));
    }
    const suffix = unit || undefined;
    const jari = a === 9 && level === 2 && rng.chance(0.4);
    if (!jari) steps.push(strategi(rng, a));
    if (a === 7) {
        steps.push(
            num({ id: 'kali5', prompt: `Pecah 7 menjadi 5 dan 2. Hitung 5 × ${b}.`, answer: 5 * b, error: 'salah-fakta-kali',
                hint: `Hitung loncat 5 sebanyak ${b} kali.`, explain: `5 × ${b} = ${5 * b}.` }),
            num({ id: 'kali2', prompt: `Hitung 2 × ${b}.`, answer: 2 * b, error: 'salah-fakta-kali', hint: `Dobel ${b}.`, explain: `2 × ${b} = ${2 * b}.` }),
            num({ id: 'gabung', prompt: `Gabungkan: ${5 * b} + ${2 * b} = ?`, answer: p, error: 'salah-strategi-kali', suffix,
                hint: 'Jumlahkan kedua bagian loyang.', explain: `${5 * b} + ${2 * b} = ${p}, jadi 7 × ${b} = ${p}.` }),
        );
        return { text, steps, conclusion: unit ? `Jadi ada ${p} ${unit}.` : `Jadi 7 × ${b} = ${p}.` };
    }
    if (jari) {
        text = `Hitung 9 × ${b} dengan pola jari.`;
        steps.push(
            num({ id: 'kiri', prompt: `Buka 10 jari dan lipat jari nomor ${b}. Ada berapa jari di kiri lipatan?`, answer: b - 1, error: 'salah-strategi-kali',
                hint: `Jari nomor 1 sampai ${b - 1} ada di kiri jari nomor ${b}.`, explain: `Ada ${b - 1} jari di kiri. Itu angka puluhan.` }),
            num({ id: 'kanan', prompt: 'Ada berapa jari di kanan lipatan?', answer: 10 - b, error: 'salah-strategi-kali',
                hint: `Jari nomor ${b + 1} sampai 10.`, explain: `Ada ${10 - b} jari di kanan. Itu angka satuan.` }),
            num({ id: 'hasil', prompt: `Jadi 9 × ${b} = ?`, answer: p, error: 'salah-fakta-kali',
                hint: `Puluhan ${b - 1}, satuan ${10 - b}.`, explain: `9 × ${b} = ${p}. Cek: 10 × ${b} − ${b} = ${10 * b} − ${b} = ${p}.` }),
        );
        return { text, steps, conclusion: `Jadi 9 × ${b} = ${p}.` };
    }
    steps.push(
        num({ id: 'kali10', prompt: `Kali 9 dekat dengan kali 10. Hitung 10 × ${b}.`, answer: 10 * b, error: 'salah-fakta-kali',
            hint: `Tulis ${b} lalu tambahkan 0 di belakangnya.`, explain: `10 × ${b} = ${10 * b}.` }),
        num({ id: 'ambil', prompt: `Ambil satu baris berisi ${b}: ${10 * b} − ${b} = ?`, answer: p, error: 'salah-strategi-kali', suffix,
            hint: `Yang diambil satu baris berisi ${b}, bukan 9.`, explain: `${10 * b} − ${b} = ${p}, jadi 9 × ${b} = ${p}.` }),
    );
    return { text, steps, conclusion: unit ? `Jadi ada ${p} ${unit}.` : `Jadi 9 × ${b} = ${p}.` };
};

/** Pembagian dalam tabel 6–9: ubah menjadi pertanyaan perkalian. */
const bagiTabel: Generator = (rng, level) => {
    const d = rng.int(6, 9);
    const q = level === 1 ? rng.int(2, 6) : rng.int(3, 9);
    const n = d * q;
    if (level === 2) {
        const steps: Step[] = [
            num({ id: 'kali', prompt: `${d} × ${q} = ?`, answer: n, error: 'salah-fakta-kali', hint: `Pakai strategi: dobel, 5 + 2, atau dekat 10.`, explain: `${d} × ${q} = ${n}.` }),
            num({ id: 'bagi1', prompt: `${n} ÷ ${d} = ?`, answer: q, error: 'salah-fakta-bagi', hint: `${d} kali berapa sama dengan ${n}?`, explain: `${d} × ${q} = ${n}, jadi ${n} ÷ ${d} = ${q}.` }),
            num({ id: 'bagi2', prompt: `${n} ÷ ${q} = ?`, answer: d, error: 'salah-fakta-bagi', hint: `${q} kali berapa sama dengan ${n}?`, explain: `${q} × ${d} = ${n}, jadi ${n} ÷ ${q} = ${d}.` }),
        ];
        return { text: `Lengkapi keluarga fakta dari ${d} dan ${q}.`, steps, conclusion: `Keluarga fakta: ${d} × ${q} = ${n}, ${q} × ${d} = ${n}, ${n} ÷ ${d} = ${q}, ${n} ÷ ${q} = ${d}.` };
    }
    const steps: Step[] = [];
    let text = `Hitung ${n} ÷ ${d}.`;
    let unit = '';
    if (level === 3) {
        const nama = rng.pick(NAMA);
        const bagiRata = rng.chance(0.5);
        text = bagiRata
            ? `Ada ${n} siswa dibagi menjadi ${d} kelompok sama banyak. Berapa siswa di setiap kelompok?`
            : `${nama} membuat ${n} kue. Setiap kotak berisi ${d} kue. Berapa kotak yang dibutuhkan?`;
        unit = bagiRata ? 'siswa' : 'kotak';
        steps.push(pick(rng, { id: 'operasi', prompt: 'Hitungan apa yang dipakai?', answer: `${n} ÷ ${d}`, wrong: [[`${n} × ${d}`, 'salah-pilih-operasi'], [`${n} − ${d}`, 'salah-pilih-operasi'], [`${n} + ${d}`, 'salah-pilih-operasi']],
            error: 'salah-pilih-operasi', hint: bagiRata ? 'Dibagi sama banyak berarti pembagian.' : 'Kita membuat kelompok berisi sama banyak.', explain: `${n} dibagi ${d}: ${n} ÷ ${d}.` }));
    }
    steps.push(
        pick(rng, { id: 'ubah', prompt: `Ubah menjadi pertanyaan perkalian.`, answer: `${d} × ? = ${n}`, wrong: [[`${n} × ${d} = ?`, 'salah-fakta-bagi'], [`${d} + ? = ${n}`, 'salah-fakta-bagi'], [`? − ${d} = ${n}`, 'salah-fakta-bagi']],
            error: 'salah-fakta-bagi', hint: 'Pembagian adalah kebalikan perkalian.', explain: `${n} ÷ ${d} = ? artinya ${d} × ? = ${n}.` }),
        num({ id: 'jawab', prompt: `${d} × ? = ${n}. Jadi ${n} ÷ ${d} = ?`, answer: q, error: 'salah-fakta-bagi', suffix: unit || undefined,
            hint: `Hitung loncat ${d}: ${d}, ${2 * d}, ${3 * d}, … sampai ${n}. Berapa kali loncat?`, explain: `${d} × ${q} = ${n}, jadi ${n} ÷ ${d} = ${q}.` }),
    );
    return { text, steps, conclusion: unit ? `Jadi jawabannya ${q} ${unit}.` : `Jadi ${n} ÷ ${d} = ${q}.`,
        visual: level === 1 ? { type: 'objects', item: 'kue', count: n, group: d } : undefined };
};

export const topic: TopicDef = {
    topic: 'sd3-03-perkalian-6-7-8-9',
    skills: [
        { code: 'kali-dobel', name: 'Kali 6 dan 8 dengan strategi dobel', gen: dobel },
        { code: 'kali-7-9', name: 'Kali 7 (5 + 2) dan kali 9 (dekat 10, pola jari)', gen: tujuhSembilan },
        { code: 'bagi-tabel', name: 'Pembagian dalam tabel 6, 7, 8, 9', gen: bagiTabel },
    ],
};
