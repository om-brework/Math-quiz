/* sd3-04 Perkalian bersusun: sampai 3 angka × 1 angka, menyimpan, cek dengan memecah, soal cerita. */
import { fmt, rupiah } from '../../format';
import type { Generator, Rng, Step, TopicDef, Visual } from '../../types';
import { NAMA, carriesMul, col, digitAt, num, pick, until } from './util';

/** Langkah cek dengan memecah menurut nilai tempat: 368 × 7 = 2.100 + 420 + 56. */
const cekPecah = (a: number, m: number): Step => {
    const parts = [2, 1, 0].filter((i) => a >= 10 ** i).map((i) => digitAt(a, i) * 10 ** i).filter((v) => v > 0);
    const prod = parts.map((v) => v * m);
    return num({ id: 'cek', prompt: `Cek dengan memecah: ${parts.map((v) => `${fmt(v)} × ${m}`).join(' + ')} = ?`, answer: a * m, error: 'salah-fakta-kali',
        hint: `Hitung tiap bagian dulu: ${parts.map((v, k) => `${fmt(v)} × ${m} = ${fmt(prod[k])}`).join(', ')}. Lalu jumlahkan.`,
        explain: `${prod.map(fmt).join(' + ')} = ${fmt(a * m)}. Sama dengan hasil bersusun, jadi benar.` });
};

const susun = (a: number, m: number): Step =>
    col({ id: 'susun', prompt: 'Kalikan bersusun. Mulai dari satuan. Kalikan dulu, baru tambah simpanan.', op: '×', a, b: m,
        hint: 'Tulis satuan hasil kali di bawah, simpan puluhannya di atas kolom kiri. Simpanan tidak ikut dikalikan.',
        explain: `${fmt(a)} × ${m} = ${fmt(a * m)}.` });

/** 2 angka × 1 angka. */
const kaliDua: Generator = (rng, level) => {
    const [a, m] = level === 1
        ? until(() => [rng.int(11, 49), rng.int(2, 4)], ([x, y]) => carriesMul(x, y) === 0 && x % 10 !== 0)
        : level === 2
            ? until(() => [rng.int(12, 49), rng.int(3, 6)], ([x, y]) => digitAt(x, 0) * y >= 10)
            : until(() => [rng.int(23, 99), rng.int(6, 9)], ([x, y]) => (digitAt(x, 0) * y >= 10) && x % 10 !== 0);
    const o = digitAt(a, 0), t = digitAt(a, 1);
    const steps: Step[] = [
        num({ id: 'satuan', prompt: `Kalikan satuan dulu: ${o} × ${m} = ?`, answer: o * m, error: 'salah-fakta-kali',
            hint: `Hitung loncat ${m} sebanyak ${o} kali.`, explain: o * m >= 10 ? `${o * m}: tulis ${(o * m) % 10}, simpan ${Math.floor((o * m) / 10)} di atas puluhan.` : `${o * m} kurang dari 10, tidak ada yang disimpan.` }),
        susun(a, m),
        level === 3 ? cekPecah(a, m) : num({ id: 'cek', prompt: `Cek: ${t * 10} × ${m} + ${o} × ${m} = ?`, answer: a * m, error: 'salah-fakta-kali',
            hint: `${t * 10} × ${m} = ${t * 10 * m} dan ${o} × ${m} = ${o * m}.`, explain: `${t * 10 * m} + ${o * m} = ${a * m}. Benar.` }),
    ];
    return { text: `Hitung $${a} \\times ${m}$ dengan cara bersusun.`, steps, conclusion: `Jadi ${a} × ${m} = ${fmt(a * m)}.` };
};

/** 3 angka × 1 angka. */
const kaliTiga: Generator = (rng, level) => {
    const [a, m] = level === 1
        ? until(() => [rng.int(101, 499), rng.int(2, 5)], ([x, y]) => carriesMul(x, y) === 1 && x * y < 2000)
        : level === 2
            ? until(() => [rng.int(102, 999), rng.int(3, 9)], ([x, y]) => carriesMul(x, y) >= 2 && !String(x).includes('0'))
            : until(() => [rng.int(102, 999), rng.int(4, 9)], ([x, y]) => digitAt(x, 1) === 0 && digitAt(x, 0) * y >= 10);
    const steps: Step[] = [susun(a, m), cekPecah(a, m)];
    if (level === 3) {
        const o = digitAt(a, 0), c = Math.floor((o * m) / 10);
        steps.unshift(num({ id: 'puluhan', prompt: `Di kolom puluhan ada angka 0. 0 × ${m} = 0, lalu ditambah simpanan dari satuan (${o} × ${m} = ${o * m}). Berapa yang ditulis di puluhan?`,
            answer: c % 10, error: 'lupa-simpan-kali', hint: `0 + ${c}.`, explain: `0 × ${m} + ${c} = ${c}. Tulis ${c} di puluhan.` }));
    }
    return { text: `Hitung $${a} \\times ${m}$ dengan cara bersusun.`, steps, conclusion: `Jadi ${a} × ${m} = ${fmt(a * m)}.` };
};

const BENDA = [
    { kel: 'gerbong', satuan: 'kursi', besar: false, teks: (n: string, a: number, m: number) => `Satu gerbong kereta punya ${a} kursi. Kereta itu punya ${m} gerbong. Berapa kursi semuanya?` },
    { kel: 'kardus', satuan: 'buku', besar: false, teks: (n: string, a: number, m: number) => `Satu kardus berisi ${a} buku. ${n} menerima ${m} kardus. Berapa buku semuanya?` },
    { kel: 'rak', satuan: 'botol', besar: false, teks: (n: string, a: number, m: number) => `Toko ${n} punya ${m} rak. Setiap rak berisi ${a} botol minum. Berapa botol semuanya?` },
    { kel: 'truk', satuan: 'karung', besar: true, teks: (n: string, a: number, m: number) => `Sebuah truk mengangkut ${a} karung beras. Ada ${m} truk yang muatannya sama. Berapa karung beras semuanya?` },
    { kel: 'hari', satuan: 'roti', besar: true, teks: (n: string, a: number, m: number) => `Toko roti ${n} membuat ${a} roti setiap hari. Berapa roti yang dibuat dalam ${m} hari?` },
    { kel: 'perjalanan', satuan: 'penumpang', besar: true, teks: (n: string, a: number, m: number) => `Sebuah kapal feri membawa ${a} penumpang setiap kali berlayar. Hari ini kapal itu berlayar ${m} kali dengan penuh. Berapa penumpang semuanya?` },
];

const operasi = (rng: Rng, a: number, m: number) =>
    pick(rng, { id: 'operasi', prompt: 'Hitungan apa yang dipakai?', answer: `${a} × ${m}`, wrong: [[`${a} + ${m}`, 'salah-pilih-operasi'], [`${a} ÷ ${m}`, 'salah-pilih-operasi'], [`${a} − ${m}`, 'salah-pilih-operasi']],
        error: 'salah-pilih-operasi', hint: 'Ada beberapa kelompok yang sama besar.', explain: `${m} kelompok yang masing-masing ${a}: ${a} × ${m}.` });

/** Soal cerita perkalian, tingkat 3 dua langkah. */
const cerita: Generator = (rng, level) => {
    const nama = rng.pick(NAMA);
    if (level < 3) {
        const b = rng.pick(BENDA.filter((x) => x.besar === (level === 2)));
        const [a, m] = level === 1
            ? until(() => [rng.int(12, 98), rng.int(3, 9)], ([x, y]) => carriesMul(x, y) >= 1)
            : until(() => [rng.int(112, 999), rng.int(3, 9)], ([x, y]) => carriesMul(x, y) >= 2 && x * y <= 9999);
        const visual: Visual = { type: 'barModel', bars: [{ label: b.kel, units: m, unitValue: String(a) }], total: '?' };
        const steps: Step[] = [
            operasi(rng, a, m), susun(a, m),
            num({ id: 'jawab', prompt: 'Tulis jawabannya.', answer: a * m, suffix: b.satuan, error: 'salah-fakta-kali', hint: 'Pakai hasil hitung bersusun.', explain: `${fmt(a * m)} ${b.satuan}.` }),
        ];
        return { text: b.teks(nama, a, m), visual, steps, conclusion: `Jadi ada ${fmt(a * m)} ${b.satuan}.` };
    }
    // dua langkah: kali lalu kurang (kembalian atau sisa)
    if (rng.chance(0.5)) {
        const m = rng.int(3, 6);
        const price = until(() => rng.int(5, 19) * 100 + rng.pick([0, 50]), (p) => p * m < 10000 && carriesMul(p, m) >= 1);
        const pay = Math.ceil((price * m + 1) / 5000) * 5000;
        const total = price * m, change = pay - total;
        const visual: Visual = { type: 'barModel', bars: [{ label: 'buku', units: m, unitValue: rupiah(price) }], total: '?' };
        const steps: Step[] = [
            operasi(rng, price, m),
            susun(price, m),
            col({ id: 'kembali', prompt: `Hitung kembalian: ${fmt(pay)} − ${fmt(total)}`, op: '-', a: pay, b: total, hint: 'Kembalian = uang dibayar − harga semuanya. Hati-hati meminjam melewati nol.', explain: `${rupiah(pay)} − ${rupiah(total)} = ${rupiah(change)}.` }),
            num({ id: 'jawab', prompt: 'Berapa kembaliannya?', answer: change, prefix: 'Rp', error: 'salah-urutan-langkah', hint: 'Pakai hasil pengurangan tadi.', explain: `Kembaliannya ${rupiah(change)}.` }),
        ];
        return { text: `${nama} membeli ${m} buku tulis. Harga satu buku ${rupiah(price)}. Ia membayar dengan uang ${rupiah(pay)}. Berapa kembaliannya?`, visual, steps,
            conclusion: `Harga ${m} buku ${rupiah(total)}, jadi kembaliannya ${rupiah(change)}.` };
    }
    const m = rng.int(3, 8);
    const a = until(() => rng.int(112, 999), (x) => x * m <= 9999 && carriesMul(x, m) >= 1);
    const total = a * m;
    const out = until(() => rng.int(1, Math.floor(total / 100) - 1) * 100 + rng.pick([0, 25, 50, 75]), (x) => x < total && x > 100);
    const left = total - out;
    const visual: Visual = { type: 'barModel', bars: [{ label: 'karung', units: m, unitValue: String(a) }], total: '?' };
    const steps: Step[] = [
        operasi(rng, a, m),
        susun(a, m),
        col({ id: 'sisa', prompt: `Hitung yang belum diturunkan: ${fmt(total)} − ${fmt(out)}`, op: '-', a: total, b: out, hint: 'Sisa = semua − yang sudah diturunkan.', explain: `${fmt(total)} − ${fmt(out)} = ${fmt(left)}.` }),
        num({ id: 'jawab', prompt: 'Berapa karung yang belum diturunkan?', answer: left, suffix: 'karung', error: 'salah-urutan-langkah', hint: 'Pakai hasil pengurangan tadi.', explain: `Masih ${fmt(left)} karung.` }),
    ];
    return { text: `Ada ${m} truk. Setiap truk mengangkut ${a} karung beras. Sebanyak ${fmt(out)} karung sudah diturunkan di gudang ${nama}. Berapa karung yang belum diturunkan?`, visual, steps,
        conclusion: `Semuanya ${fmt(total)} karung, jadi yang belum diturunkan ${fmt(left)} karung.` };
};

export const topic: TopicDef = {
    topic: 'sd3-04-perkalian-bersusun',
    skills: [
        { code: 'kali-2-angka', name: 'Perkalian bersusun 2 angka × 1 angka', gen: kaliDua },
        { code: 'kali-3-angka', name: 'Perkalian bersusun 3 angka × 1 angka', gen: kaliTiga },
        { code: 'cerita-kali', name: 'Soal cerita perkalian', gen: cerita },
    ],
};
