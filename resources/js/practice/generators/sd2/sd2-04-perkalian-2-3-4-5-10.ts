/* sd2-04 Perkalian 2, 3, 4, 5, dan 10: hitung loncat, dobel, sifat pertukaran, pola, soal cerita. */
import { rupiah } from '../../format';
import type { Generator, ObjectName, Step, TopicDef, Visual } from '../../types';
import { isi, NAMA, pilih } from './_bantu';

const TABEL = [2, 3, 4, 5, 10];
const loncat = (t: number, n: number) => Array.from({ length: n }, (_, i) => t * (i + 1)).join(', ');
const WADAH: { wadah: string; isi: string; item: ObjectName }[] = [
    { wadah: 'keranjang', isi: 'jeruk', item: 'jeruk' },
    { wadah: 'piring', isi: 'kue', item: 'kue' },
    { wadah: 'kotak', isi: 'pensil', item: 'pensil' },
    { wadah: 'vas', isi: 'bunga', item: 'bunga' },
    { wadah: 'akuarium', isi: 'ikan', item: 'ikan' },
    { wadah: 'kantong', isi: 'kelereng', item: 'kelereng' },
];
const gambar = (item: ObjectName, n: number, t: number): Visual | undefined => (n * t <= 50 ? { type: 'objects', item, count: n * t, group: t } : undefined);

const tabelKali: Generator = (rng, level) => {
    const w = rng.pick(WADAH);
    if (level === 1) {
        const t = rng.pick([2, 5, 10]), n = rng.int(2, 10);
        const p = n * t;
        const steps: Step[] = [
            pilih(rng, 'arti', `${n} × ${t} artinya ...`, `${n} kelompok, tiap kelompok ${t}`, [[`${n} ditambah ${t}`, 'tambah-bukan-kali'], ...(n !== t ? [[`${t} kelompok, tiap kelompok ${n}`, 'salah-sifat-pertukaran'] as [string, string]] : [])], {
                hint: `Ada ${n} ${w.wadah}, tiap ${w.wadah} berisi ${t} ${w.isi}.`, explain: `${n} × ${t} = ${n} kelompok berisi ${t}, yaitu ${Array(n).fill(t).join(' + ')}.`, error: 'tambah-bukan-kali' }),
            isi('loncat', `Hitung loncat ${t} sebanyak ${n} kali. Berapa loncatan terakhir?`, p, { hint: `Mulai: ${loncat(t, Math.min(3, n))}, ... Pakai jari untuk setiap loncatan.`, explain: `${loncat(t, n)}. Jadi ${n} × ${t} = ${p}.`, error: 'salah-hitung-loncat' }),
        ];
        return { text: `Ada ${n} ${w.wadah}. Tiap ${w.wadah} berisi ${t} ${w.isi}. Hitung $${n} \\times ${t}$.`, visual: gambar(w.item, n, t), steps, conclusion: `Jadi ${n} × ${t} = ${p}.` };
    }
    if (level === 2) {
        // tabel 3 dan 4 dengan strategi dobel: 4 = 2 + 2, 3 = 2 + 1
        const t = rng.pick([3, 4]), n = rng.int(4, 10);
        const two = 2 * n, p = t * n;
        const steps: Step[] = [
            isi('dua', `Hitung 2 ${w.wadah} dulu: 2 × ${n} = ?`, two, { hint: `Dobel ${n}: ${n} + ${n}.`, explain: `2 × ${n} = ${two}.`, error: 'salah-fakta-kali' }),
            t === 4
                ? isi('gandakan', `4 ${w.wadah} = 2 ${w.wadah} + 2 ${w.wadah}. Hitung ${two} + ${two} = ?`, p, { hint: `Dobel ${two}.`, explain: `${two} + ${two} = ${p}.`, error: 'salah-fakta-tambah' })
                : isi('tambah-satu', `3 ${w.wadah} = 2 ${w.wadah} + 1 ${w.wadah}. Hitung ${two} + ${n} = ?`, p, { hint: `Tambahkan isi 1 ${w.wadah} lagi.`, explain: `${two} + ${n} = ${p}.`, error: 'salah-fakta-tambah' }),
            isi('cek', `Cek dengan sifat pertukaran: ${n} × ${t} = ?`, p, { hint: `Hitung loncat ${t} sebanyak ${n} kali: ${loncat(t, 3)}, ...`, explain: `${loncat(t, n)}. Hasilnya sama, ${p}.`, error: 'salah-hitung-loncat' }),
        ];
        return { text: `Ada ${t} ${w.wadah}. Tiap ${w.wadah} berisi ${n} ${w.isi}. Hitung $${t} \\times ${n}$.`, visual: gambar(w.item, t, n), steps, conclusion: `Jadi ${t} × ${n} = ${p}.` };
    }
    // tingkat 3: faktor yang hilang
    const t = rng.pick(TABEL), n = rng.int(2, 10), p = t * n;
    const kiri = rng.chance(0.5);
    const steps: Step[] = [
        isi('loncat', `Hitung loncat ${t} sampai ${p}. Ada berapa loncatan?`, n, { hint: `${loncat(t, 3)}, ... Hitung setiap loncatan dengan jari sampai ${p}.`, explain: `${loncat(t, n)}. Ada ${n} loncatan.`, error: 'salah-hitung-loncat' }),
        isi('cek', `Cek: ${kiri ? `${t} × ${n}` : `${n} × ${t}`} = ?`, p, { hint: `Harus sama dengan ${p}.`, explain: `${kiri ? `${t} × ${n}` : `${n} × ${t}`} = ${p}. Benar.`, error: 'salah-fakta-kali' }),
    ];
    return { text: `Isi titik-titik: $${kiri ? `${t} \\times \\dots` : `\\dots \\times ${t}`} = ${p}$`, steps, conclusion: `Jadi ${kiri ? `${t} × ${n}` : `${n} × ${t}`} = ${p}.` };
};

const pertukaranPola: Generator = (rng, level) => {
    if (level === 1) {
        const t = rng.pick(TABEL);
        let a = 0;
        do a = rng.int(2, 10); while (a === t);
        const p = a * t;
        const steps: Step[] = [
            isi('tukar', `Isi titik-titik: ${a} × ${t} = ${t} × ...`, a, { hint: 'Urutan perkalian boleh ditukar. Hasilnya tetap sama.', explain: `${a} × ${t} = ${t} × ${a}. Gambar barisnya diputar, banyaknya tidak berubah.`, error: 'salah-sifat-pertukaran' }),
            isi('hasil', `Hitung ${a} × ${t} dengan tabel ${t}.`, p, { hint: `Hitung loncat ${t}: ${loncat(t, 3)}, ...`, explain: `${loncat(t, a)}. Jadi ${a} × ${t} = ${p}.`, error: 'salah-fakta-kali' }),
        ];
        return { text: `Apakah ${a} × ${t} sama dengan ${t} × ${a}? Isi titik-titik, lalu hitung hasilnya.`, visual: p <= 50 ? { type: 'objects', item: rng.pick(['bintang', 'apel', 'bola'] as const), count: p, group: t } : undefined, steps,
            conclusion: `Ya, ${a} × ${t} = ${t} × ${a} = ${p}.` };
    }
    if (level === 2) {
        const t = rng.pick(TABEL), k = rng.int(1, 5);
        const seq = Array.from({ length: 6 }, (_, i) => t * (k + i));
        const [h1, h2] = rng.pick([[2, 4], [2, 5], [3, 5], [1, 4], [3, 4]]);
        const shown = seq.map((x, i) => (i === h1 || i === h2 ? '...' : String(x))).join(', ');
        const steps: Step[] = [
            isi('loncat', 'Pola ini dari tabel perkalian. Loncatnya berapa?', t, { hint: 'Kurangkan dua bilangan yang berdampingan.', explain: `Loncatnya ${t}. Ini tabel ${t}.`, error: 'salah-hitung-loncat' }),
            isi('isi-1', `Isi titik-titik pertama: ${seq[h1 - 1]} + ${t} = ?`, seq[h1], { hint: `Loncat ${t} dari ${seq[h1 - 1]}.`, explain: `${seq[h1 - 1]} + ${t} = ${seq[h1]} (${k + h1} × ${t}).`, error: 'salah-hitung-loncat' }),
            isi('isi-2', `Isi titik-titik kedua: ${seq[h2 - 1]} + ${t} = ?`, seq[h2], { hint: `Loncat ${t} dari ${seq[h2 - 1]}.`, explain: `${seq[h2 - 1]} + ${t} = ${seq[h2]} (${k + h2} × ${t}).`, error: 'salah-hitung-loncat' }),
        ];
        return { text: `Lengkapi pola dari tabel perkalian: ${shown}`, steps, conclusion: `Bilangan yang hilang: ${seq[h1]} dan ${seq[h2]}.` };
    }
    // tingkat 3: hasil kali yang sama (pola dobel dan separuh)
    const m = rng.int(2, 5);
    const bentuk = rng.pick([
        { a: 5, b: 2 * m, c: 10, ans: m, why: `5 itu separuh dari 10, jadi faktor lainnya juga separuh dari ${2 * m}.` },
        { a: 4, b: m, c: 2, ans: 2 * m, why: `2 itu separuh dari 4, jadi faktor lainnya dobel dari ${m}.` },
        { a: 10, b: m, c: 5, ans: 2 * m, why: `5 itu separuh dari 10, jadi faktor lainnya dobel dari ${m}.` },
        { a: 2, b: 2 * m, c: 4, ans: m, why: `4 itu dobel dari 2, jadi faktor lainnya separuh dari ${2 * m}.` },
    ]);
    const p = bentuk.a * bentuk.b;
    const balik = rng.chance(0.5);
    const steps: Step[] = [
        isi('kiri', balik ? `Hitung ruas kanan dulu: ${bentuk.b} × ${bentuk.a} = ?` : `Hitung ruas kiri dulu: ${bentuk.a} × ${bentuk.b} = ?`, p, { hint: `Pakai tabel ${TABEL.includes(bentuk.a) ? bentuk.a : bentuk.b}.`, explain: `${balik ? `${bentuk.b} × ${bentuk.a}` : `${bentuk.a} × ${bentuk.b}`} = ${p}.`, error: 'salah-fakta-kali' }),
        isi('kanan', balik ? `Sekarang cari: ? × ${bentuk.c} = ${p}` : `Sekarang cari: ${bentuk.c} × ? = ${p}`, bentuk.ans, { hint: `Hitung loncat ${bentuk.c} sampai ${p}.`, explain: `${bentuk.c} × ${bentuk.ans} = ${p}. ${bentuk.why}`, error: 'salah-hitung-loncat' }),
    ];
    return { text: balik ? `Isi titik-titik: $\\dots \\times ${bentuk.c} = ${bentuk.b} \\times ${bentuk.a}$` : `Isi titik-titik: $${bentuk.a} \\times ${bentuk.b} = ${bentuk.c} \\times \\dots$`, steps, conclusion: balik ? `Jadi ${bentuk.ans} × ${bentuk.c} = ${bentuk.b} × ${bentuk.a} = ${p}.` : `Jadi ${bentuk.a} × ${bentuk.b} = ${bentuk.c} × ${bentuk.ans} = ${p}.` };
};

const BAGIAN = [
    { benda: 'sepeda', isi: 'roda', n: 2 }, { benda: 'becak', isi: 'roda', n: 3 }, { benda: 'mobil', isi: 'roda', n: 4 },
    { benda: 'bangku', isi: 'kaki', n: 3 }, { benda: 'meja', isi: 'kaki', n: 4 }, { benda: 'motor', isi: 'roda', n: 2 },
];

const ceritaKali: Generator = (rng, level) => {
    const nama = rng.pick(NAMA);
    if (level === 1) {
        const w = rng.pick(WADAH), t = rng.pick(TABEL), n = rng.int(2, 9);
        const p = n * t;
        const steps: Step[] = [
            pilih(rng, 'operasi', 'Kalimat matematika yang tepat?', `${n} × ${t}`, [[`${n} + ${t}`, 'tambah-bukan-kali'], [`${Math.max(n, t)} − ${Math.min(n, t)}`, 'salah-pilih-operasi']], {
                hint: `Ada ${n} kelompok yang sama, tiap kelompok ${t}.`, explain: `${n} ${w.wadah} masing-masing ${t} ${w.isi}: ${n} × ${t}.`, error: 'tambah-bukan-kali' }),
            isi('hasil', `Hitung ${n} × ${t}.`, p, { suffix: w.isi, hint: `Hitung loncat ${t}: ${loncat(t, 3)}, ...`, explain: `${loncat(t, n)}. Jadi ${p} ${w.isi}.`, error: 'salah-fakta-kali' }),
        ];
        return { text: `${nama} punya ${n} ${w.wadah}. Setiap ${w.wadah} berisi ${t} ${w.isi}. Berapa ${w.isi} semuanya?`, steps, conclusion: `${n} × ${t} = ${p}. Ada ${p} ${w.isi}.` };
    }
    if (level === 2) {
        const harga = rng.pick([2, 3, 4, 5, 10]), n = rng.int(3, 9);
        const barang = rng.pick(['buku tulis', 'pensil warna', 'roti', 'jepit rambut', 'penghapus besar']);
        const p = n * harga;
        const steps: Step[] = [
            pilih(rng, 'operasi', 'Kalimat matematika yang tepat?', `${n} × ${rupiah(harga * 1000)}`, [[`${n} + ${rupiah(harga * 1000)}`, 'tambah-bukan-kali'], [`${rupiah(harga * 1000)} − ${n}`, 'salah-pilih-operasi']], {
                hint: `Ada ${n} ${barang}, masing-masing ${rupiah(harga * 1000)}.`, explain: `${n} barang dengan harga sama: ${n} × ${rupiah(harga * 1000)}.`, error: 'tambah-bukan-kali' }),
            isi('ribuan', `Hitung dalam ribuan: ${n} × ${harga} ribu = ? ribu`, p, { suffix: 'ribu', hint: `Pakai tabel ${harga}: ${loncat(harga, 3)}, ...`, explain: `${n} × ${harga} = ${p}, jadi ${p} ribu.`, error: 'salah-fakta-kali' }),
            isi('rupiah', 'Tulis harganya dalam rupiah.', p * 1000, { prefix: 'Rp', hint: `${p} ribu ditulis ${p} lalu tiga angka 0.`, explain: `${p} ribu = ${rupiah(p * 1000)}.`, error: 'salah-nilai-tempat' }),
        ];
        return { text: `Harga 1 ${barang} ${rupiah(harga * 1000)}. ${nama} membeli ${n} ${barang}. Berapa yang harus dibayar?`, steps,
            conclusion: `${n} × ${rupiah(harga * 1000)} = ${rupiah(p * 1000)}.` };
    }
    // tingkat 3: dua kelompok, kalikan masing-masing lalu jumlahkan
    let A = rng.pick(BAGIAN), B = rng.pick(BAGIAN);
    while (B.benda === A.benda || B.isi !== A.isi) { A = rng.pick(BAGIAN); B = rng.pick(BAGIAN); }
    const na = rng.int(2, 9), nb = rng.int(2, 9);
    const pa = na * A.n, pb = nb * B.n;
    const steps: Step[] = [
        isi('bagian1', `${A.isi[0].toUpperCase() + A.isi.slice(1)} ${A.benda}: ${na} × ${A.n} = ?`, pa, { hint: `Hitung loncat ${A.n} sebanyak ${na} kali.`, explain: `${loncat(A.n, na)}. Ada ${pa} ${A.isi} ${A.benda}.`, error: 'salah-fakta-kali' }),
        isi('bagian2', `${B.isi[0].toUpperCase() + B.isi.slice(1)} ${B.benda}: ${nb} × ${B.n} = ?`, pb, { hint: `Hitung loncat ${B.n} sebanyak ${nb} kali.`, explain: `${loncat(B.n, nb)}. Ada ${pb} ${B.isi} ${B.benda}.`, error: 'salah-fakta-kali' }),
        isi('jumlah', `Jumlahkan: ${pa} + ${pb} = ?`, pa + pb, { suffix: A.isi, hint: 'Gabungkan kedua kelompok.', explain: `${pa} + ${pb} = ${pa + pb}.`, error: 'salah-fakta-tambah' }),
    ];
    return { text: `Di halaman ada ${na} ${A.benda} dan ${nb} ${B.benda}. Satu ${A.benda} punya ${A.n} ${A.isi}. Satu ${B.benda} punya ${B.n} ${B.isi}. Berapa ${A.isi} semuanya?`, steps,
        conclusion: `${na} × ${A.n} = ${pa} dan ${nb} × ${B.n} = ${pb}. Semuanya ${pa + pb} ${A.isi}.` };
};

export const topic: TopicDef = {
    topic: 'sd2-04-perkalian-2-3-4-5-10',
    skills: [
        { code: 'tabel-kali', name: 'Tabel perkalian 2, 3, 4, 5, 10', gen: tabelKali },
        { code: 'pertukaran-pola', name: 'Sifat pertukaran dan pola dalam tabel', gen: pertukaranPola },
        { code: 'cerita-kali', name: 'Soal cerita perkalian', gen: ceritaKali },
    ],
};
