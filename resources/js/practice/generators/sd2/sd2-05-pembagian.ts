/* sd2-05 Pembagian: membagi sama banyak, mengelompokkan, keluarga fakta kali-bagi (tabel 2, 3, 4, 5, 10). */
import type { Generator, ObjectName, Step, TopicDef } from '../../types';
import { isi, NAMA, pilih } from './_bantu';

const TABEL = [2, 3, 4, 5, 10];
const loncat = (t: number, n: number) => Array.from({ length: n }, (_, i) => t * (i + 1)).join(', ');
const BENDA: { benda: string; item: ObjectName }[] = [
    { benda: 'permen', item: 'permen' }, { benda: 'kue', item: 'kue' }, { benda: 'apel', item: 'apel' },
    { benda: 'kelereng', item: 'kelereng' }, { benda: 'jeruk', item: 'jeruk' }, { benda: 'pensil', item: 'pensil' },
];

/** Pilihan kalimat pembagian dengan kesalahan khas: urutan terbalik dan mengurang. */
const kalimat = (rng: Parameters<typeof pilih>[0], n: number, k: number, hint: string, explain: string) =>
    pilih(rng, 'kalimat', 'Kalimat pembagian yang tepat?', `${n} ÷ ${k}`, [[`${k} ÷ ${n}`, 'bagi-urutan-terbalik'], [`${n} − ${k}`, 'bagi-dikurang'], [`${n} × ${k}`, 'salah-pilih-operasi']], { hint, explain, error: 'bagi-urutan-terbalik' });

const samaBanyak: Generator = (rng, level) => {
    const b = rng.pick(BENDA);
    const nama = rng.pick(NAMA);
    if (level <= 2) {
        const k = level === 1 ? rng.pick([2, 3, 5]) : rng.pick(TABEL);
        const q = level === 1 ? rng.int(2, 6) : rng.int(3, 10);
        const n = k * q;
        const penerima = k === 2 ? `${nama} dan ${rng.pick(NAMA.filter((x) => x !== nama))}` : `${k} anak`;
        const steps: Step[] = [
            kalimat(rng, n, k, `Semuanya ${n} ${b.benda}, dibagi ke ${k} anak. Pembagian dimulai dari banyak semuanya.`, `${n} ${b.benda} dibagi sama banyak ke ${k} anak: ${n} ÷ ${k}.`),
            isi('tabel', `Pakai tabel ${k}: ${k} × berapa = ${n}?`, q, { suffix: b.benda, hint: `Hitung loncat ${k}: ${loncat(k, 3)}, ... sampai ${n}.`, explain: `${k} × ${q} = ${n}, jadi ${n} ÷ ${k} = ${q}.`, error: 'salah-fakta-bagi' }),
        ];
        if (level === 2) steps.push(isi('cek', `Cek: ${k} anak × ${q} ${b.benda} = ?`, n, { hint: 'Kalikan banyak anak dengan bagian tiap anak.', explain: `${k} × ${q} = ${n}, sama dengan banyak ${b.benda} semuanya. Benar.`, error: 'salah-fakta-kali' }));
        return { text: `Ada ${n} ${b.benda}. ${b.benda[0].toUpperCase() + b.benda.slice(1)} dibagi sama banyak kepada ${penerima}. Berapa ${b.benda} yang didapat masing-masing?`,
            visual: level === 1 ? { type: 'objects', item: b.item, count: n } : undefined, steps, conclusion: `${n} ÷ ${k} = ${q}. Masing-masing mendapat ${q} ${b.benda}.` };
    }
    // tingkat 3: kali dulu, lalu bagi
    let a = 0, isiKotak = 0, k = 0, total = 0;
    do { a = rng.int(2, 5); isiKotak = rng.pick([2, 3, 4, 5, 6, 8, 10]); k = rng.pick([2, 3, 4, 5]); total = a * isiKotak; } while (total % k !== 0 || total / k > 10 || total / k < 2 || total > 50);
    const q = total / k;
    const wadah = rng.pick(['kotak', 'bungkus', 'kantong']);
    const steps: Step[] = [
        isi('semua', `Langkah 1: hitung semua ${b.benda}. ${a} × ${isiKotak} = ?`, total, { hint: `Hitung loncat ${isiKotak} sebanyak ${a} kali.`, explain: `${loncat(isiKotak, a)}. Ada ${total} ${b.benda}.`, error: 'salah-fakta-kali' }),
        isi('bagi', `Langkah 2: bagi ke ${k} piring. ${total} ÷ ${k} = ?`, q, { suffix: b.benda, hint: `${k} × berapa = ${total}?`, explain: `${k} × ${q} = ${total}, jadi ${total} ÷ ${k} = ${q}.`, error: 'salah-fakta-bagi' }),
        isi('cek', `Cek: ${k} piring × ${q} = ?`, total, { hint: `Hasilnya harus ${total}.`, explain: `${k} × ${q} = ${total}. Sama dengan ${a} ${wadah} isi ${isiKotak}. Benar.`, error: 'salah-fakta-kali' }),
    ];
    return { text: `Ibu membeli ${a} ${wadah} ${b.benda}. Setiap ${wadah} berisi ${isiKotak} ${b.benda}. Semua ${b.benda} dibagi sama banyak ke ${k} piring. Berapa ${b.benda} di tiap piring?`, steps,
        conclusion: `${a} × ${isiKotak} = ${total}, lalu ${total} ÷ ${k} = ${q}. Tiap piring berisi ${q} ${b.benda}.` };
};

const kelompok: Generator = (rng, level) => {
    const b = rng.pick(BENDA);
    const wadah = rng.pick(['kantong', 'kotak', 'piring']);
    if (level <= 2) {
        const g = level === 1 ? rng.pick([2, 5, 10]) : rng.pick([3, 4, 5, 10]);
        const q = level === 1 ? rng.int(2, 6) : rng.int(4, 10);
        const n = g * q;
        const steps: Step[] = [
            kalimat(rng, n, g, `Semuanya ${n}. Isi tiap ${wadah} sudah diketahui, yaitu ${g}.`, `Mengelompokkan ${n} ${b.benda}, tiap ${wadah} ${g}: ${n} ÷ ${g}.`),
            isi('loncat', `Hitung loncat ${g} sampai ${n}. Ada berapa loncatan?`, q, { suffix: wadah, hint: `${loncat(g, Math.min(3, q))}, ... Setiap loncatan adalah 1 ${wadah}.`, explain: `${loncat(g, q)}. Ada ${q} loncatan, jadi ${n} ÷ ${g} = ${q}.`, error: 'salah-hitung-loncat' }),
        ];
        if (level === 2) steps.push(isi('cek', `Cek: ${q} ${wadah} × ${g} ${b.benda} = ?`, n, { hint: 'Kalikan banyak kelompok dengan isi tiap kelompok.', explain: `${q} × ${g} = ${n}. Benar.`, error: 'salah-fakta-kali' }));
        return { text: `Ada ${n} ${b.benda}. Setiap ${wadah} diisi ${g} ${b.benda}. Berapa ${wadah} yang dibutuhkan?`,
            visual: level === 1 ? { type: 'numberLine', from: 0, to: n, step: g } : undefined, steps, conclusion: `${n} ÷ ${g} = ${q}. Dibutuhkan ${q} ${wadah}.` };
    }
    // tingkat 3: kurangi dulu, lalu kelompokkan
    const g = rng.pick([2, 3, 4, 5, 10]), q = rng.int(3, 10);
    const r = g * q, s = rng.int(2, 9), T = r + s;
    const nama = rng.pick(NAMA);
    const steps: Step[] = [
        isi('sisa', `Langkah 1: ${b.benda} yang tersisa. ${T} − ${s} = ?`, r, { hint: `${nama} memakai ${s} ${b.benda} dulu.`, explain: `${T} − ${s} = ${r}.`, error: 'salah-fakta-kurang' }),
        isi('bagi', `Langkah 2: kelompokkan. ${r} ÷ ${g} = ?`, q, { suffix: wadah, hint: `Hitung loncat ${g} sampai ${r}.`, explain: `${g} × ${q} = ${r}, jadi ${r} ÷ ${g} = ${q}.`, error: 'salah-fakta-bagi' }),
        isi('cek', `Cek: ${q} × ${g} + ${s} = ?`, T, { hint: `Hasilnya harus kembali ke ${T}.`, explain: `${q} × ${g} = ${r}, ditambah ${s} = ${T}. Benar.`, error: 'salah-fakta-kali' }),
    ];
    return { text: `${nama} punya ${T} ${b.benda}. Sebanyak ${s} ${b.benda} dimakan adiknya. Sisanya dimasukkan ke ${wadah}, setiap ${wadah} berisi ${g}. Berapa ${wadah} yang terisi?`.replace(/(\d+ (pensil|kelereng)) dimakan adiknya/, '$1 diberikan ke adiknya'), steps,
        conclusion: `${T} − ${s} = ${r}, lalu ${r} ÷ ${g} = ${q}. Ada ${q} ${wadah}.` };
};

const keluargaFakta: Generator = (rng, level) => {
    const b = rng.pick(TABEL);
    let a = 0;
    do a = rng.int(2, 10); while (a === b);
    const p = a * b;
    if (level === 1) {
        const steps: Step[] = [
            pilih(rng, 'hasil-kali', `Pada ${a} × ${b} = ${p}, bilangan mana yang menjadi hasil kali?`, String(p), [[String(a), 'salah-keluarga-fakta'], [String(b), 'salah-keluarga-fakta']], {
                hint: 'Hasil kali adalah bilangan terbesar.', explain: `${p} adalah hasil kali. Pembagian dimulai dari ${p}.`, error: 'salah-keluarga-fakta', urut: [String(a), String(b), String(p)] }),
            isi('bagi', `Jadi ${p} ÷ ${b} = ?`, a, { hint: `${b} × berapa = ${p}? Lihat perkalian di soal.`, explain: `${a} × ${b} = ${p}, jadi ${p} ÷ ${b} = ${a}.`, error: 'salah-keluarga-fakta' }),
        ];
        return { text: `Diketahui $${a} \\times ${b} = ${p}$. Hitung $${p} \\div ${b}$.`, steps, conclusion: `${a} × ${b} = ${p}, jadi ${p} ÷ ${b} = ${a}.` };
    }
    if (level === 2) {
        const steps: Step[] = [
            isi('kali', `Cari perkaliannya: ${a} × ${b} = ?`, p, { hint: `Pakai tabel ${b}.`, explain: `${a} × ${b} = ${p}.`, error: 'salah-fakta-kali' }),
            isi('tukar', `Tukar urutan: ${b} × ${a} = ?`, p, { hint: 'Urutan perkalian ditukar, hasilnya sama.', explain: `${b} × ${a} = ${p}.`, error: 'salah-sifat-pertukaran' }),
            isi('bagi1', `Balik menjadi pembagian: ${p} ÷ ${a} = ?`, b, { hint: `${a} × berapa = ${p}?`, explain: `${p} ÷ ${a} = ${b}.`, error: 'salah-keluarga-fakta' }),
            isi('bagi2', `${p} ÷ ${b} = ?`, a, { hint: `${b} × berapa = ${p}?`, explain: `${p} ÷ ${b} = ${a}.`, error: 'salah-keluarga-fakta' }),
        ];
        return { text: `Tulis keluarga fakta untuk bilangan ${a}, ${b}, dan ${p}.`, steps, conclusion: `${a} × ${b} = ${p}, ${b} × ${a} = ${p}, ${p} ÷ ${a} = ${b}, ${p} ÷ ${b} = ${a}.` };
    }
    // tingkat 3: ? ÷ b = a, cari bilangan yang dibagi
    const steps: Step[] = [
        pilih(rng, 'kalimat', `Bilangan yang dicari dibagi ${b} hasilnya ${a}. Perkalian mana yang membantu?`, `${b} × ${a}`, [[`${a} + ${b}`, 'tambah-bukan-kali'], [`${Math.max(a, b)} − ${Math.min(a, b)}`, 'salah-keluarga-fakta']], {
            hint: 'Pembagian adalah kebalikan perkalian.', explain: `Kalau ? ÷ ${b} = ${a}, maka ? = ${b} × ${a}.`, error: 'salah-keluarga-fakta' }),
        isi('hasil', `Hitung ${b} × ${a}.`, p, { hint: `Hitung loncat ${b} sebanyak ${a} kali.`, explain: `${b} × ${a} = ${p}.`, error: 'salah-fakta-kali' }),
        isi('cek', `Cek: ${p} ÷ ${b} = ?`, a, { hint: `Hasilnya harus ${a}.`, explain: `${p} ÷ ${b} = ${a}. Benar.`, error: 'salah-fakta-bagi' }),
    ];
    return { text: `Isi titik-titik: $\\dots \\div ${b} = ${a}$`, steps, conclusion: `Jadi ${p} ÷ ${b} = ${a}.` };
};

export const topic: TopicDef = {
    topic: 'sd2-05-pembagian',
    skills: [
        { code: 'bagi-sama-banyak', name: 'Membagi sama banyak', gen: samaBanyak },
        { code: 'mengelompokkan', name: 'Pembagian sebagai mengelompokkan', gen: kelompok },
        { code: 'keluarga-fakta', name: 'Keluarga fakta perkalian dan pembagian', gen: keluargaFakta },
    ],
};
