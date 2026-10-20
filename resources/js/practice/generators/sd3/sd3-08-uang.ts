/* sd3-08 Penjumlahan dan pengurangan uang: harga, belanja, kembalian, soal cerita dua langkah. */
import { rupiah } from '../../format';
import type { Generator, Rng, Step, TopicDef, Visual } from '../../types';
import { NAMA, carriesAdd, col, fixed, num, pick, until } from './util';

const BARANG = ['pensil', 'penghapus', 'buku tulis', 'penggaris', 'roti', 'susu kotak', 'layang-layang', 'kelereng', 'bola plastik', 'jepit rambut', 'topi', 'gelas'];
const R = rupiah;

/** Harga dalam ratusan (atau kelipatan 50), antara lo dan hi rupiah. */
const harga = (rng: Rng, lo: number, hi: number, step = 100) => rng.int(lo / step, hi / step) * step;

const tabel = (items: [string, number][]): Visual => ({ type: 'table', head: ['Barang', 'Harga'], rows: items.map(([n, p]) => [n, R(p)]) });

const tambahStep = (a: number, b: number, id = 'jumlah') =>
    col({ id, prompt: `Jumlahkan bersusun: ${a} + ${b} (tanpa Rp dan titik).`, op: '+', a, b, hint: 'Tulis rata kanan, mulai dari satuan, simpan kalau 10 atau lebih.', explain: `${R(a)} + ${R(b)} = ${R(a + b)}.` });
const kurangStep = (a: number, b: number, id = 'kurang') =>
    col({ id, prompt: `Kurangkan bersusun: ${a} − ${b} (tanpa Rp dan titik).`, op: '-', a, b, hint: 'Pinjam kalau angka atas lebih kecil. Setiap 0 yang dilewati menjadi 9.', explain: `${R(a)} − ${R(b)} = ${R(a - b)}.` });

/** Menjumlahkan harga barang. */
const jumlahHarga: Generator = (rng, level) => {
    const nama = rng.pick(NAMA);
    const [b1, b2, b3] = rng.shuffle(BARANG);
    if (level < 3) {
        const [p, q] = level === 1
            ? until(() => [harga(rng, 1000, 5900), harga(rng, 500, 3900)], ([x, y]) => carriesAdd(x, y) === 1 && x + y <= 9900)
            : until(() => [harga(rng, 1000, 6950, 50), harga(rng, 1000, 3950, 50)], ([x, y]) => carriesAdd(x, y) >= 2 && x + y <= 9950 && (x % 100 !== 0 || y % 100 !== 0));
        const steps: Step[] = [
            pick(rng, { id: 'operasi', prompt: 'Hitungan apa yang dipakai?', answer: `${R(p)} + ${R(q)}`, wrong: [[`${R(p)} − ${R(q)}`, 'salah-pilih-operasi'], [`${R(q)} − ${R(p)}`, 'salah-pilih-operasi']],
                error: 'salah-pilih-operasi', hint: '"Harga semuanya" berarti dijumlahkan.', explain: `Harga semuanya = ${R(p)} + ${R(q)}.` }),
            tambahStep(p, q),
            num({ id: 'jawab', prompt: 'Berapa harga semuanya?', answer: p + q, prefix: 'Rp', error: 'salah-nol-rupiah', hint: 'Tulis lagi hasil bersusun tadi. Hitung banyak angkanya.', explain: `Harga semuanya ${R(p + q)}.` }),
        ];
        return { text: `${nama} membeli ${b1} seharga ${R(p)} dan ${b2} seharga ${R(q)}. Berapa harga semuanya?`, steps, conclusion: `Jadi harga semuanya ${R(p + q)}.` };
    }
    const [p, q, r] = until(() => [harga(rng, 1000, 3950, 50), harga(rng, 500, 2950, 50), harga(rng, 500, 2950, 50)], ([x, y, z]) => x + y + z <= 9950 && carriesAdd(x, y) >= 1 && carriesAdd(x + y, z) >= 1);
    const steps: Step[] = [
        tambahStep(p, q, 'jumlah1'),
        tambahStep(p + q, r, 'jumlah2'),
        num({ id: 'jawab', prompt: 'Berapa harga ketiga barang?', answer: p + q + r, prefix: 'Rp', error: 'lupa-barang-belanja', hint: 'Pastikan ketiga barang sudah dijumlahkan.', explain: `${R(p)} + ${R(q)} + ${R(r)} = ${R(p + q + r)}.` }),
    ];
    return { text: `${nama} membeli ${b1}, ${b2}, dan ${b3}. Lihat daftar harga. Berapa harga semuanya?`, visual: tabel([[b1, p], [b2, q], [b3, r]]), steps,
        conclusion: `Jadi harga ketiga barang ${R(p + q + r)}.` };
};

/** Kembalian: hitung naik (tingkat 1), bersusun (tingkat 2), cukup atau kurang (tingkat 3). */
const kembalian: Generator = (rng, level) => {
    const nama = rng.pick(NAMA);
    const barang = rng.pick(BARANG);
    if (level === 3) {
        const punya = harga(rng, 2000, 8500, 500);
        const enough = rng.chance(0.3);
        const price = until(() => harga(rng, 1500, 9900, 100), (x) => (enough ? x < punya : x > punya) && Math.abs(x - punya) >= 300 && x % 1000 !== 0);
        const steps: Step[] = [
            fixed({ id: 'cukup', prompt: `Apakah uang ${nama} cukup?`, options: ['cukup', 'tidak cukup'], answer: enough ? 'cukup' : 'tidak cukup', error: 'salah-uang-cukup',
                hint: `Bandingkan ${R(punya)} dan ${R(price)} mulai dari ribuan.`, explain: `${R(punya)} ${enough ? 'lebih dari' : 'kurang dari'} ${R(price)}.` }),
            enough ? kurangStep(punya, price) : kurangStep(price, punya),
            num({ id: 'jawab', prompt: enough ? `Berapa sisa uang ${nama} setelah membeli?` : `Berapa kekurangannya?`, answer: Math.abs(price - punya), prefix: 'Rp', error: 'kembalian-terbalik',
                hint: enough ? 'Sisa = uang yang dimiliki − harga.' : 'Kekurangan = harga − uang yang dimiliki.', explain: `${enough ? 'Sisa' : 'Kekurangannya'} ${R(Math.abs(price - punya))}. Cek: ${enough ? `${R(price)} + ${R(punya - price)} = ${R(punya)}` : `${R(punya)} + ${R(price - punya)} = ${R(price)}`}.` }),
        ];
        return { text: `${nama} punya uang ${R(punya)}. Ia ingin membeli ${barang} seharga ${R(price)}. Apakah uangnya cukup? Kalau cukup, berapa sisanya? Kalau tidak, berapa kekurangannya?`, steps,
            conclusion: enough ? `Uangnya cukup, sisanya ${R(punya - price)}.` : `Uangnya tidak cukup, kurang ${R(price - punya)}.` };
    }
    const pay = level === 1 ? rng.pick([5000, 10000]) : 10000;
    const price = level === 1
        ? until(() => harga(rng, 1100, pay - 100), (x) => x % 1000 !== 0)
        : until(() => harga(rng, 2050, 9950, 50), (x) => x % 100 !== 0 || x % 1000 !== 0);
    const change = pay - price;
    const visual: Visual = { type: 'money', items: [pay] };
    const formula = pick(rng, { id: 'rumus', prompt: 'Bagaimana menghitung kembalian?', answer: `${R(pay)} − ${R(price)}`, wrong: [[`${R(price)} − ${R(pay)}`, 'kembalian-terbalik'], [`${R(pay)} + ${R(price)}`, 'salah-pilih-operasi']],
        error: 'kembalian-terbalik', hint: 'Kembalian = uang yang dibayar − harga.', explain: `Kembalian = ${R(pay)} − ${R(price)}.` });
    if (level === 1) {
        const nextK = Math.ceil(price / 1000) * 1000;
        const steps: Step[] = [
            formula,
            num({ id: 'naik1', prompt: `Hitung naik: dari ${R(price)} ke ${R(nextK)}, tambah berapa?`, answer: nextK - price, prefix: 'Rp', error: 'salah-hitung-naik',
                hint: `${price % 1000} + ? = 1.000`, explain: `${R(price)} + ${R(nextK - price)} = ${R(nextK)}.` }),
            num({ id: 'naik2', prompt: `Dari ${R(nextK)} ke ${R(pay)}, tambah berapa?`, answer: pay - nextK, prefix: 'Rp', error: 'salah-hitung-naik',
                hint: 'Hitung ribuannya saja.', explain: `${R(nextK)} + ${R(pay - nextK)} = ${R(pay)}.` }),
            num({ id: 'jawab', prompt: 'Jumlahkan loncatannya. Berapa kembaliannya?', answer: change, prefix: 'Rp', error: 'salah-hitung-naik',
                hint: `${R(nextK - price)} + ${R(pay - nextK)}`, explain: `Kembalian ${R(change)}. Cek: ${R(price)} + ${R(change)} = ${R(pay)}.` }),
        ];
        return { text: `${nama} membeli ${barang} seharga ${R(price)}. Ia membayar dengan uang ${R(pay)}. Berapa kembaliannya?`, visual, steps, conclusion: `Jadi kembaliannya ${R(change)}.` };
    }
    const steps: Step[] = [
        formula, kurangStep(pay, price),
        num({ id: 'jawab', prompt: 'Berapa kembaliannya?', answer: change, prefix: 'Rp', error: 'salah-nol-rupiah', hint: 'Tulis hasil bersusun tadi dengan Rp.', explain: `Kembalian ${R(change)}. Cek dengan hitung naik: ${R(price)} + ${R(change)} = ${R(pay)}.` }),
    ];
    return { text: `${nama} membeli ${barang} seharga ${R(price)}. Ia membayar dengan uang ${R(pay)}. Berapa kembaliannya?`, visual, steps, conclusion: `Jadi kembaliannya ${R(change)}.` };
};

/** Soal cerita dua langkah: jumlahkan dulu, lalu cari kembalian atau sisa. */
const duaLangkah: Generator = (rng, level) => {
    const nama = rng.pick(NAMA);
    const [b1, b2] = rng.shuffle(BARANG);
    const rencana = (first: string, wrong: string[]) => pick(rng, { id: 'rencana', prompt: 'Apa yang dihitung lebih dulu?', answer: first, wrong: wrong.map((w) => [w, 'lupa-barang-belanja'] as [string, string]),
        error: 'lupa-barang-belanja', hint: 'Kembalian baru bisa dihitung kalau harga semuanya sudah diketahui.', explain: `Pertama: ${first}. Lalu cari kembaliannya.` });
    if (level === 3) {
        const own = harga(rng, 2000, 5000, 500), gift = harga(rng, 1000, 4000, 500);
        const total = own + gift;
        const p = until(() => harga(rng, 1500, total - 500, 50), (x) => x % 100 !== 0 || rng.chance(0.3));
        const left = total - p;
        const visual: Visual = { type: 'barModel', bars: [{ label: 'uang', units: 2, known: `${R(own)} + ${R(gift)}` }, { label: b1, units: 1, known: R(p) }], question: 'sisa = ?' };
        const steps: Step[] = [
            rencana(`uang ${nama} semuanya`, [`sisa uang ${nama}`, `harga ${b1}`]),
            tambahStep(own, gift, 'uang'),
            kurangStep(total, p, 'sisa'),
            num({ id: 'jawab', prompt: `Berapa sisa uang ${nama}?`, answer: left, prefix: 'Rp', error: 'salah-urutan-langkah', hint: 'Pakai hasil pengurangan tadi.', explain: `Sisa ${R(left)}. Cek: ${R(p)} + ${R(left)} = ${R(total)}.` }),
        ];
        return { text: `${nama} punya uang ${R(own)}. Ibu memberinya ${R(gift)} lagi. Lalu ${nama} membeli ${b1} seharga ${R(p)}. Berapa sisa uang ${nama}?`, visual, steps,
            conclusion: `Uang ${nama} ${R(total)}, jadi sisanya ${R(left)}.` };
    }
    const pay = 10000;
    const two = level === 2;
    const [p, q] = until(() => [harga(rng, 1000, 4500, two ? 50 : 100), harga(rng, 500, 3500, two ? 50 : 100)], ([x, y]) => (two ? 2 * x + y : x + y) < pay && (two ? 2 * x + y : x + y) % 1000 !== 0 && carriesAdd(two ? 2 * x : x, y) >= 1);
    const sub = two ? 2 * p : p;
    const total = sub + q, change = pay - total;
    const steps: Step[] = [rencana('harga semua belanjaan', ['kembalian', `harga ${b2} saja`])];
    if (two) steps.push(num({ id: 'dua', prompt: `Harga 2 ${b1}: ${R(p)} + ${R(p)} = ?`, answer: sub, prefix: 'Rp', error: 'salah-fakta-tambah', hint: `Dobelkan ${R(p)}.`, explain: `2 ${b1} = ${R(sub)}.` }));
    steps.push(
        tambahStep(sub, q),
        kurangStep(pay, total, 'kembalian'),
        num({ id: 'jawab', prompt: 'Berapa kembaliannya?', answer: change, prefix: 'Rp', error: 'salah-urutan-langkah', hint: 'Pakai hasil pengurangan tadi.', explain: `Kembalian ${R(change)}. Cek: ${R(total)} + ${R(change)} = ${R(pay)}.` }),
    );
    const visual: Visual = two ? tabel([[b1, p], [b2, q]]) : { type: 'money', items: [pay] };
    return {
        text: two
            ? `${nama} membeli 2 ${b1} dan 1 ${b2}. Lihat daftar harga. Ia membayar dengan uang ${R(pay)}. Berapa kembaliannya?`
            : `${nama} membeli ${b1} seharga ${R(p)} dan ${b2} seharga ${R(q)}. Ia membayar dengan uang ${R(pay)}. Berapa kembaliannya?`,
        visual, steps, conclusion: `Harga semuanya ${R(total)}, jadi kembaliannya ${R(change)}.`,
    };
};

export const topic: TopicDef = {
    topic: 'sd3-08-uang',
    skills: [
        { code: 'jumlah-harga', name: 'Menjumlahkan harga', gen: jumlahHarga },
        { code: 'kembalian', name: 'Menghitung kembalian dan kekurangan uang', gen: kembalian },
        { code: 'belanja-dua-langkah', name: 'Soal cerita belanja dua langkah', gen: duaLangkah },
    ],
};
