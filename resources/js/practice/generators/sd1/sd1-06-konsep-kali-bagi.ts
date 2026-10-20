/* sd1-06 Konsep Perkalian dan Pembagian: kelompok sama banyak, penjumlahan berulang, ×, membagi sama banyak, mengelompokkan. */
import type { Generator, ObjectName, Step, TopicDef } from '../../types';
import { NAMA, loncat, namaAcak, pilihan, pilihanTetap } from './common';

const ulang = (isi: number, kali: number) => Array(kali).fill(isi).join(' + ');

const WADAH: { wadah: string; isi: string; item: ObjectName }[] = [
    { wadah: 'piring', isi: 'kue', item: 'kue' },
    { wadah: 'kantong', isi: 'kelereng', item: 'kelereng' },
    { wadah: 'vas', isi: 'bunga', item: 'bunga' },
    { wadah: 'akuarium', isi: 'ikan', item: 'ikan' },
    { wadah: 'keranjang', isi: 'apel', item: 'apel' },
    { wadah: 'kotak', isi: 'pensil', item: 'pensil' },
];

/** Perkalian sebagai kelompok sama banyak dan penjumlahan berulang. */
const kelompok: Generator = (rng, level) => {
    const w = rng.pick(WADAH);
    let g: number, s: number;
    do {
        g = rng.int(2, level === 1 ? 4 : 6);
        s = rng.int(2, level === 1 ? 5 : 10);
    } while (g * s > (level === 1 ? 20 : 40) || g === s);
    const total = g * s;
    const jumlahUlang = ulang(s, g);
    if (level === 3) {
        const nama = rng.pick(NAMA);
        const steps: Step[] = [
            { kind: 'choice', id: 'kalimat', prompt: 'Pahami soal. Kalimat matematika apa yang cocok?',
              ...pilihan(rng, `${g} × ${s}`, [[`${g} + ${s}`, 'tambah-bukan-kali'], [`${s} − ${g}`, 'tambah-bukan-kali'], [ulang(g, 2), 'tertukar-arti-kali']]),
              hint: `Ada ${g} ${w.wadah}, setiap ${w.wadah} berisi ${s}. Kelompoknya sama banyak.`, explain: `${g} kelompok, isi ${s}: ${g} × ${s}.`, error: 'tambah-bukan-kali' },
            { kind: 'choice', id: 'ulang', prompt: `${g} × ${s} sama dengan …`,
              ...pilihan(rng, jumlahUlang, [[ulang(g, s), 'tertukar-arti-kali'], [`${g} + ${s}`, 'tambah-bukan-kali'], [ulang(s, g + 1), 'salah-hitung-loncat']]),
              hint: `${s} dijumlahkan ${g} kali.`, explain: `${g} × ${s} = ${jumlahUlang}.`, error: 'tertukar-arti-kali' },
            { kind: 'number', id: 'total', prompt: `Hitung loncat ${s} sebanyak ${g} kali. Berapa semua ${w.isi}?`, answer: String(total), suffix: w.isi,
              hint: `${s}, ${2 * s}, … sebanyak ${g} loncatan.`, explain: `${loncat(s, g)}. Jadi ${g} × ${s} = ${total}.`, error: 'salah-hitung-loncat' },
        ];
        return { text: `${nama} punya ${g} ${w.wadah}. Setiap ${w.wadah} berisi ${s} ${w.isi}. Berapa semua ${w.isi} ${nama}?`, steps,
            conclusion: `Jadi ${g} × ${s} = ${total}. Ada ${total} ${w.isi}.` };
    }
    const steps: Step[] = [
        { kind: 'number', id: 'banyak-kelompok', prompt: `Ada berapa ${w.wadah} (kelompok)?`, answer: String(g), suffix: w.wadah,
          hint: 'Hitung kelompoknya, bukan bendanya.', explain: `Ada ${g} kelompok.`, error: 'tertukar-arti-kali' },
        { kind: 'number', id: 'isi', prompt: `Setiap ${w.wadah} berisi berapa ${w.isi}?`, answer: String(s), suffix: w.isi,
          hint: 'Hitung benda di satu kelompok saja.', explain: `Setiap kelompok berisi ${s}.`, error: 'tertukar-arti-kali' },
        level === 1
            ? { kind: 'choice', id: 'ulang', prompt: 'Tulis penjumlahan berulangnya.', ...pilihan(rng, jumlahUlang, [[ulang(g, s), 'tertukar-arti-kali'], [`${g} + ${s}`, 'tambah-bukan-kali']]),
                hint: `Isi setiap ${w.wadah} dijumlahkan sebanyak ${g} kali.`, explain: `${jumlahUlang}.`, error: 'tertukar-arti-kali' }
            : { kind: 'choice', id: 'kali', prompt: 'Tulis perkaliannya.', ...pilihan(rng, `${g} × ${s}`, [[`${g} + ${s}`, 'tambah-bukan-kali'], [`${g + 1} × ${s}`, 'salah-hitung-loncat'], [`${g} × ${s + 1}`, 'salah-hitung-loncat']]),
                hint: 'Banyak kelompok × isi setiap kelompok.', explain: `${g} kelompok isi ${s} ditulis ${g} × ${s}.`, error: 'tertukar-arti-kali' },
        { kind: 'number', id: 'total', prompt: `Hitung loncat ${s}. Berapa semuanya?`, answer: String(total), suffix: w.isi,
          hint: `${s}, ${2 * s}, … sebanyak ${g} kali.`, explain: `${loncat(s, g)}. Jadi ${g} × ${s} = ${total}.`, error: 'salah-hitung-loncat' },
    ];
    return { text: `Lihat gambar. Ada ${g} ${w.wadah}, isinya sama banyak. Berapa semua ${w.isi}?`, visual: { type: 'objects', item: w.item, count: total, group: s }, steps,
        conclusion: `Jadi ${jumlahUlang} = ${total}, atau ${g} × ${s} = ${total}.` };
};

/** Menghitung perkalian dengan hitung loncat; tantangan: mencari banyak loncatan. */
const hitungLoncat: Generator = (rng, level) => {
    let a: number, b: number;
    do {
        b = level === 1 ? rng.pick([2, 5, 10]) : rng.int(2, 10);
        a = rng.int(2, level === 1 ? 5 : 9);
    } while (a * b > 40 || a === b || (level === 2 && [2, 10].includes(b) && rng.chance(0.7)));
    const n = a * b;
    if (level === 3) {
        const steps: Step[] = [
            { kind: 'choice', id: 'loncat', prompt: `Hitung loncat ${b} sampai ${n}.`,
              ...pilihan(rng, loncat(b, a), [[loncat(b, a - 1), 'salah-hitung-loncat'], [loncat(b, a + 1), 'salah-hitung-loncat'], [`${b}, ${b + 1}, ${b + 2}, ${b + 3}`, 'salah-hitung-loncat']]),
              hint: `Mulai dari ${b}, tambah ${b} setiap kali, berhenti di ${n}.`, explain: `${loncat(b, a)}.`, error: 'salah-hitung-loncat' },
            { kind: 'number', id: 'banyak', prompt: 'Ada berapa loncatan?', answer: String(a),
              hint: 'Hitung bilangan di barisan loncat tadi.', explain: `Ada ${a} loncatan, jadi ${a} × ${b} = ${n}.`, error: 'salah-hitung-loncat' },
        ];
        return { text: `… × ${b} = ${n}. Berapa bilangan yang hilang?`, visual: { type: 'numberLine', from: 0, to: n + b, step: b }, steps,
            conclusion: `Jadi ${a} × ${b} = ${n}.` };
    }
    const steps: Step[] = [
        { kind: 'choice', id: 'arti', prompt: `${a} × ${b} artinya …`,
          ...pilihan(rng, ulang(b, a), [[ulang(a, b), 'tertukar-arti-kali'], [`${a} + ${b}`, 'tambah-bukan-kali']]),
          hint: `${a} kelompok, setiap kelompok ${b}.`, explain: `${a} × ${b} = ${ulang(b, a)}.`, error: 'tertukar-arti-kali' },
        { kind: 'number', id: 'tengah', prompt: `Hitung loncat ${b}. Loncatan ke-2 sampai di?`, answer: String(2 * b),
          hint: `${b} + ${b}.`, explain: `${b}, ${2 * b}.`, error: 'salah-hitung-loncat' },
        { kind: 'number', id: 'hasil', prompt: `Teruskan sampai ${a} loncatan. ${a} × ${b} = ?`, answer: String(n),
          hint: `Loncat ${b} lagi sampai ada ${a} loncatan.`, explain: `${loncat(b, a)}. Jadi ${a} × ${b} = ${n}.`, error: 'salah-hitung-loncat' },
    ];
    return { text: `Hitung dengan hitung loncat: ${a} × ${b} = …`, steps, conclusion: `Jadi ${a} × ${b} = ${n}.`,
        visual: level === 1 ? { type: 'numberLine', from: 0, to: n + b, step: b, jumps: Array.from({ length: a }, (_, i) => ({ from: i * b, to: (i + 1) * b, label: `+${b}` })) } : undefined };
};

const CARI_ISI = 'isi setiap kelompok';
const CARI_BANYAK = 'banyak kelompok';

/** Pembagian: membagi sama banyak (banyak kelompok diketahui). */
const bagiRata: Generator = (rng, level) => {
    let n: number, k: number;
    do { n = rng.int(2, 5); k = rng.int(2, level === 1 ? 5 : 9); } while (n * k > (level === 1 ? 10 : 20) || (level > 1 && n * k < 10));
    const total = n * k;
    const anak = namaAcak(rng, n);
    const benda = rng.pick(['permen', 'kue', 'kelereng', 'jeruk'] as const);
    const item: ObjectName = benda === 'kue' ? 'kue' : benda === 'jeruk' ? 'jeruk' : benda === 'kelereng' ? 'kelereng' : 'permen';
    const steps: Step[] = [
        { kind: 'choice', id: 'jenis', prompt: 'Pahami soal. Yang dicari apa?', ...pilihanTetap(CARI_ISI, [CARI_ISI, CARI_BANYAK], { [CARI_BANYAK]: 'tertukar-jenis-bagi' }),
          hint: `Banyak anak sudah diketahui (${n}).`, explain: `Banyak anak sudah tahu, kita mencari bagian setiap anak. Ini membagi sama banyak.`, error: 'tertukar-jenis-bagi' },
        { kind: 'number', id: 'putaran', prompt: `Bagikan berputar, 1 ${benda} untuk setiap anak. Satu putaran memakai berapa ${benda}?`, answer: String(n), suffix: benda,
          hint: 'Setiap anak mendapat 1 pada satu putaran.', explain: `Ada ${n} anak, jadi satu putaran memakai ${n}.`, error: 'bagi-tidak-rata' },
    ];
    if (level === 3) {
        const makan = rng.int(1, k - 1);
        steps.push(
            { kind: 'number', id: 'bagian', prompt: `Hitung loncat ${n} sampai ${total}. Setiap anak mendapat berapa?`, answer: String(k), suffix: benda,
              hint: `${loncat(n, 2)}, … sampai ${total}. Hitung loncatannya.`, explain: `${loncat(n, k)}: ${k} putaran. Cek: ${n} × ${k} = ${total}.`, error: 'bagi-tidak-rata' },
            { kind: 'number', id: 'sisa', prompt: `${anak[0]} memakan ${makan} ${benda} bagiannya. Berapa sisa ${benda} ${anak[0]}?`, answer: String(k - makan), suffix: benda,
              hint: `${k} − ${makan}.`, explain: `${k} − ${makan} = ${k - makan}.`, error: 'salah-fakta-kurang' },
        );
        return { text: `Ada ${total} ${benda}. ${benda[0].toUpperCase() + benda.slice(1)} dibagi sama banyak kepada ${n} anak: ${anak.join(', ')}. Lalu ${anak[0]} memakan ${makan} ${benda} bagiannya. Berapa ${benda} ${anak[0]} sekarang?`,
            steps, conclusion: `Setiap anak mendapat ${k} ${benda}. Sisa ${benda} ${anak[0]} ${k - makan}.` };
    }
    steps.push({ kind: 'number', id: 'bagian', prompt: `Bagikan sampai habis. Setiap anak mendapat berapa ${benda}?`, answer: String(k), suffix: benda,
        hint: `Hitung loncat ${n}: ${loncat(n, 2)}, … sampai ${total}. Berapa putaran?`, explain: `${loncat(n, k)}: ada ${k} putaran. Cek: ${ulang(k, n)} = ${total}.`, error: 'bagi-tidak-rata' });
    return { text: `Ada ${total} ${benda}. Semuanya dibagi sama banyak kepada ${n} anak. Berapa ${benda} yang didapat setiap anak?`, visual: { type: 'objects', item, count: total }, steps,
        conclusion: `Jadi setiap anak mendapat ${k} ${benda}.` };
};

/** Pembagian: mengelompokkan (isi setiap kelompok diketahui). */
const kelompokkan: Generator = (rng, level) => {
    const w = rng.pick(WADAH);
    let s: number, k: number;
    do { s = rng.int(2, 5); k = rng.int(2, level === 1 ? 6 : 9); } while (s * k > (level === 1 ? 12 : 20) || s === k);
    const total = s * k;
    const steps: Step[] = [
        { kind: 'choice', id: 'jenis', prompt: 'Pahami soal. Yang dicari apa?', ...pilihanTetap(CARI_BANYAK, [CARI_ISI, CARI_BANYAK], { [CARI_ISI]: 'tertukar-jenis-bagi' }),
          hint: `Isi setiap ${w.wadah} sudah diketahui (${s}).`, explain: `Isi setiap ${w.wadah} sudah tahu, kita mencari banyak ${w.wadah}. Ini mengelompokkan.`, error: 'tertukar-jenis-bagi' },
        { kind: 'choice', id: 'loncat', prompt: `Buat kelompok ${s}. Hitung loncat ${s} sampai ${total}.`,
          ...pilihan(rng, loncat(s, k), [[loncat(s, k - 1), 'salah-hitung-loncat'], [loncat(s, k + 1), 'salah-hitung-loncat'], [loncat(k, s), 'tertukar-jenis-bagi']]),
          hint: `Mulai dari ${s}, tambah ${s} setiap kali sampai ${total}.`, explain: `${loncat(s, k)}.`, error: 'salah-hitung-loncat' },
        { kind: 'number', id: 'banyak', prompt: `Ada berapa loncatan? Itu banyak ${w.wadah}.`, answer: String(k), suffix: w.wadah,
          hint: 'Hitung bilangan pada hitung loncat tadi.', explain: `Ada ${k} loncatan. Cek: ${k} × ${s} = ${total}.`, error: 'salah-hitung-loncat' },
    ];
    if (level === 3) {
        const punya = rng.int(1, k - 1);
        steps.push({ kind: 'number', id: 'kurang', prompt: `Ibu baru punya ${punya} ${w.wadah}. Berapa ${w.wadah} lagi yang dibutuhkan?`, answer: String(k - punya), suffix: w.wadah,
            hint: `${k} − ${punya}.`, explain: `Butuh ${k} ${w.wadah}, sudah ada ${punya}. ${k} − ${punya} = ${k - punya}.`, error: 'salah-fakta-kurang' });
        return { text: `Ibu punya ${total} ${w.isi}. Setiap ${w.wadah} diisi ${s} ${w.isi}. Ibu baru punya ${punya} ${w.wadah}. Berapa ${w.wadah} lagi yang dibutuhkan?`, steps,
            conclusion: `Butuh ${k} ${w.wadah} semuanya, jadi kurang ${k - punya} ${w.wadah} lagi.` };
    }
    return { text: `Ada ${total} ${w.isi}. Setiap ${w.wadah} diisi ${s} ${w.isi}. Berapa ${w.wadah} yang dibutuhkan?`,
        visual: { type: 'objects', item: w.item, count: total, ...(level === 1 ? { group: s } : {}) }, steps, conclusion: `Jadi dibutuhkan ${k} ${w.wadah}.` };
};

export const topic: TopicDef = {
    topic: 'sd1-06-konsep-kali-bagi',
    skills: [
        { code: 'kelompok-sama-banyak', name: 'Perkalian: kelompok sama banyak', gen: kelompok },
        { code: 'hitung-loncat', name: 'Perkalian dengan hitung loncat', gen: hitungLoncat },
        { code: 'bagi-sama-banyak', name: 'Pembagian: membagi sama banyak', gen: bagiRata },
        { code: 'mengelompokkan', name: 'Pembagian: mengelompokkan', gen: kelompokkan },
    ],
};
