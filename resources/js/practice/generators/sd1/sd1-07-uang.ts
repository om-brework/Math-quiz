/* sd1-07 Mengenal Uang: koin dan uang kertas Rupiah, menghitung jumlah uang sampai Rp100.000, membandingkan harga. */
import { fmt, rupiah, terbilang } from '../../format';
import type { Generator, Step, TopicDef } from '../../types';
import { NAMA, pilihan, pilihanTetap } from './common';

const KOIN = [100, 200, 500, 1000];
const KERTAS = [1000, 2000, 5000, 10000, 20000, 50000, 100000];

/** "lima ratus rupiah", "dua puluh ribu rupiah" */
const baca = (n: number) => `${terbilang(n)} rupiah`;
const satuanKata = (n: number) => (n < 1000 ? 'ratus' : 'ribu');
const angkaKata = (n: number) => (n < 1000 ? n / 100 : n / 1000);

/** Mengenal dan membaca uang; menukar uang. */
const kenal: Generator = (rng, level) => {
    if (level === 1) {
        const n = rng.pick([...KOIN.slice(0, 3), ...KERTAS]);
        const salah = n < 1000 ? n * 10 : n >= 10000 ? n / 10 : n * 10;
        const steps: Step[] = [
            { kind: 'choice', id: 'ratus-ribu', prompt: `Uang ini bernilai ratusan atau ribuan?`, ...pilihanTetap(satuanKata(n), ['ratus', 'ribu'], { [n < 1000 ? 'ribu' : 'ratus']: 'campur-ratus-ribu' }),
              hint: 'Lihat banyak angka 0 di belakang. Dua nol: ratus. Tiga nol: ribu.', explain: `${rupiah(n)} bernilai ${angkaKata(n)} ${satuanKata(n)}.`, error: 'campur-ratus-ribu' },
            { kind: 'choice', id: 'baca', prompt: `Bagaimana ${rupiah(n)} dibaca?`,
              ...pilihan(rng, baca(n), [[baca(salah), 'salah-baca-nilai-uang'], [`${terbilang(angkaKata(n))} ${n < 1000 ? 'ribu' : 'ratus'} rupiah`, 'campur-ratus-ribu'], [baca(n === 100000 ? 10000 : n * 2), 'salah-baca-nilai-uang']]),
              hint: `${angkaKata(n)} ${satuanKata(n)}.`, explain: `${rupiah(n)} dibaca ${baca(n)}.`, error: 'salah-baca-nilai-uang' },
        ];
        return { text: `Bacalah uang ini.`, visual: { type: 'money', items: [n] }, steps, conclusion: `Jadi ${rupiah(n)} dibaca ${baca(n)}.` };
    }
    if (level === 2) {
        const n = rng.pick([...KOIN.slice(0, 3), ...KERTAS.slice(1), 1000]);
        const k = angkaKata(n);
        const steps: Step[] = [
            { kind: 'number', id: 'berapa', prompt: `"${baca(n)}". Berapa ${satuanKata(n)}?`, answer: String(k), suffix: satuanKata(n),
              hint: `Lihat kata sebelum "${satuanKata(n)}".`, explain: `${terbilang(k)} ${satuanKata(n)} = ${k} ${satuanKata(n)}.`, error: 'salah-baca-nilai-uang' },
            { kind: 'choice', id: 'tulis', prompt: 'Tulis dengan angka.',
              ...pilihan(rng, rupiah(n), [[rupiah(n * 10), 'salah-baca-nilai-uang'], [rupiah(n < 1000 ? k * 1000 : k * 100), 'campur-ratus-ribu'], [`Rp${k}`, 'lupa-ribu'], [rupiah(n / 10), 'salah-baca-nilai-uang']]),
              hint: n < 1000 ? 'Ratus ditulis dengan dua angka 0.' : 'Ribu ditulis dengan tiga angka 0 dan titik.', explain: `${baca(n)} ditulis ${rupiah(n)}.`, error: 'salah-baca-nilai-uang' },
        ];
        return { text: `Tulis dengan angka: ${baca(n)}.`, steps, conclusion: `Jadi ${baca(n)} ditulis ${rupiah(n)}.` };
    }
    // tingkat 3: menukar uang
    const TUKAR: [number, number][] = [[10000, 2000], [10000, 5000], [20000, 5000], [20000, 10000], [50000, 10000], [100000, 20000], [100000, 50000],
        [1000, 500], [1000, 200], [1000, 100], [500, 100], [2000, 1000], [20000, 2000], [10000, 1000], [50000, 5000], [100000, 10000]];
    const [besar, kecil] = rng.pick(TUKAR);
    const sat = besar < 1000 || kecil < 1000 ? 'ratus' : 'ribu';
    const div = sat === 'ratus' ? 100 : 1000;
    const B = besar / div, K = kecil / div, n = B / K;
    const nama = rng.pick(NAMA);
    const jenis = kecil <= 500 ? 'koin' : 'lembar';
    const steps: Step[] = [
        { kind: 'number', id: 'besar', prompt: `Ubah ke "${sat}". ${rupiah(besar)} = berapa ${sat}?`, answer: String(B), suffix: sat,
          hint: `Buang ${sat === 'ratus' ? 'dua' : 'tiga'} angka 0 di belakang.`, explain: `${rupiah(besar)} = ${B} ${sat}.`, error: 'campur-ratus-ribu' },
        { kind: 'choice', id: 'lompat', prompt: `Lompat ${K} ${sat} sampai ${B} ${sat}.`,
          ...pilihan(rng, Array.from({ length: n }, (_, i) => K * (i + 1)).join(', '),
              [[Array.from({ length: n + 1 }, (_, i) => K * (i + 1)).join(', '), 'hitung-lembar-bukan-nilai'], [Array.from({ length: Math.max(1, n - 1) }, (_, i) => K * (i + 1)).join(', '), 'hitung-lembar-bukan-nilai'], [Array.from({ length: n }, (_, i) => K + i).join(', '), 'hitung-lembar-bukan-nilai']]),
          hint: `Mulai dari ${K}, tambah ${K} setiap kali.`, explain: `Lompat ${K}: ${Array.from({ length: n }, (_, i) => K * (i + 1)).join(', ')}.`, error: 'hitung-lembar-bukan-nilai' },
        { kind: 'number', id: 'banyak', prompt: `Jadi berapa ${jenis} ${rupiah(kecil)}?`, answer: String(n), suffix: jenis,
          hint: 'Hitung banyak lompatannya.', explain: `Ada ${n} lompatan, jadi ${n} ${jenis}.`, error: 'hitung-lembar-bukan-nilai' },
    ];
    return { text: `${nama} menukar 1 ${besar <= 500 ? 'koin' : 'lembar'} ${rupiah(besar)} dengan ${jenis === 'koin' ? 'koin' : 'uang'} ${rupiah(kecil)}. Berapa ${jenis} ${rupiah(kecil)} yang ia dapat?`,
        visual: { type: 'money', items: [besar] }, steps, conclusion: `Jadi ${rupiah(besar)} sama dengan ${n} ${jenis} ${rupiah(kecil)}.` };
};

/** Menghitung jumlah uang: lompat dari yang terbesar. */
const hitung: Generator = (rng, level) => {
    let items: number[];
    if (level === 1) {
        do items = Array.from({ length: rng.int(3, 4) }, () => rng.pick([100, 200, 500])); while (items.reduce((a, b) => a + b, 0) > 1000 || new Set(items).size < 2);
    } else {
        const max = level === 2 ? 100000 : 95000;
        do items = Array.from({ length: rng.int(3, level === 2 ? 5 : 4) }, () => rng.pick([1000, 2000, 5000, 10000, 20000, 50000])); while (items.reduce((a, b) => a + b, 0) > max || new Set(items).size < 3);
    }
    const sorted = [...items].sort((a, b) => b - a);
    const total = items.reduce((a, b) => a + b, 0);
    const sat = level === 1 ? 'ratus' : 'ribu';
    const div = level === 1 ? 100 : 1000;
    const loncatan: number[] = [];
    sorted.reduce((acc, x) => { loncatan.push(acc + x / div); return acc + x / div; }, 0);
    const T = total / div;
    const nama = rng.pick(NAMA);
    const steps: Step[] = [
        { kind: 'choice', id: 'mulai', prompt: 'Urutkan dari yang terbesar. Katak mulai melompat dari uang yang mana?',
          ...pilihanTetap(rupiah(sorted[0]), [...new Set(items)].sort((a, b) => a - b).map(rupiah), Object.fromEntries([...new Set(items)].filter((x) => x !== sorted[0]).map((x) => [rupiah(x), 'salah-urut-lompat']))),
          hint: 'Cari uang dengan nilai paling besar, bukan yang paling banyak.', explain: `Urutannya: ${sorted.map(rupiah).join(', ')}.`, error: 'salah-urut-lompat' },
        { kind: 'number', id: 'jumlah', prompt: `Lompat dengan "${sat}": ${sorted.map((x) => x / div).join(', ')}. Sampai berapa ${sat}?`, answer: String(T), suffix: sat,
          hint: `${loncatan.slice(0, 2).join(', lalu ')}, … teruskan.`, explain: `${loncatan.join(', lalu ')}.`, error: level === 1 ? 'salah-fakta-tambah' : 'hitung-lembar-bukan-nilai' },
    ];
    if (level === 3) {
        steps.push(
            { kind: 'number', id: 'kurang', prompt: `Berapa ${sat} lagi supaya menjadi 100 ${sat}?`, answer: String(100 - T), suffix: sat,
              hint: `${T} + ? = 100. Pakai pasangan 10 untuk puluhannya.`, explain: `${T} + ${100 - T} = 100.`, error: 'salah-fakta-kurang' },
            { kind: 'number', id: 'rupiah', prompt: 'Tulis dalam Rupiah.', answer: fmt((100 - T) * div), prefix: 'Rp',
              hint: `${100 - T} ribu ditulis dengan tiga angka 0.`, explain: `${100 - T} ribu = ${rupiah((100 - T) * div)}.`, error: 'lupa-ribu' },
        );
        return { text: `${nama} punya uang seperti di gambar. Ia ingin menabung sampai Rp100.000. Berapa rupiah lagi yang ia butuhkan?`,
            visual: { type: 'money', items }, steps, conclusion: `Uang ${nama} ${rupiah(total)}. Ia butuh ${rupiah(100000 - total)} lagi.` };
    }
    steps.push({ kind: 'number', id: 'rupiah', prompt: 'Tulis jumlahnya dalam Rupiah.', answer: fmt(total), prefix: 'Rp',
        hint: `${T} ${sat} ditulis dengan ${level === 1 ? 'dua' : 'tiga'} angka 0.`, explain: `${T} ${sat} = ${rupiah(total)}.`, error: level === 1 ? 'campur-ratus-ribu' : 'lupa-ribu' });
    return { text: `Di dompet ${nama} ada uang ${level === 1 ? 'koin' : 'kertas'} seperti di gambar. Berapa jumlahnya?`, visual: { type: 'money', items }, steps,
        conclusion: `Jadi jumlah uang ${nama} ${rupiah(total)}.` };
};

const BARANG = ['buku tulis', 'pensil', 'penghapus', 'penggaris', 'kotak pensil', 'botol minum', 'tas kecil', 'krayon', 'mainan mobil', 'boneka', 'bola', 'layang-layang'];

/** Membandingkan harga dan memeriksa cukup tidaknya uang. */
const harga: Generator = (rng, level) => {
    if (level === 1) {
        const [x, y] = rng.shuffle(BARANG).slice(0, 2);
        let a: number, b: number;
        // sering memakai jebakan: 9 ribu vs 12 ribu (angka depan lebih kecil tapi nilainya lebih besar)
        do { a = rng.int(2, 9); b = rng.int(10, 30); } while (a === b);
        const [hx, hy] = rng.chance(0.5) ? [a, b] : [b, a];
        const mahal = hx > hy ? x : y, murah = hx > hy ? y : x;
        const steps: Step[] = [
            { kind: 'number', id: 'ribu', prompt: `Ubah ke "ribu". ${x}: ${rupiah(hx * 1000)} = berapa ribu?`, answer: String(hx), suffix: 'ribu',
              hint: 'Buang tiga angka 0 di belakang.', explain: `${rupiah(hx * 1000)} = ${hx} ribu, dan ${rupiah(hy * 1000)} = ${hy} ribu.`, error: 'lupa-ribu' },
            { kind: 'choice', id: 'mahal', prompt: `${hx} ribu atau ${hy} ribu. Barang mana yang lebih mahal?`, ...pilihanTetap(mahal, [x, y], { [murah]: 'salah-bandingkan-harga' }),
              hint: 'Harga yang lebih besar berarti lebih mahal. Bandingkan bilangan utuhnya.', explain: `${Math.max(hx, hy)} ribu lebih besar dari ${Math.min(hx, hy)} ribu.`, error: 'salah-bandingkan-harga' },
        ];
        return { text: `Harga ${x} ${rupiah(hx * 1000)}. Harga ${y} ${rupiah(hy * 1000)}. Mana yang lebih mahal?`, steps,
            visual: { type: 'table', head: ['Barang', 'Harga'], rows: [[x, rupiah(hx * 1000)], [y, rupiah(hy * 1000)]] }, conclusion: `Jadi ${mahal} lebih mahal.` };
    }
    if (level === 2) {
        const brg = rng.shuffle(BARANG).slice(0, 3);
        let p: number[];
        do p = [rng.int(1, 9), rng.int(1, 20), rng.int(10, 30)]; while (new Set(p).size < 3);
        p = rng.shuffle(p);
        const idx = [0, 1, 2].sort((i, j) => p[i] - p[j]);
        const urut = idx.map((i) => brg[i]).join(', ');
        const terbalik = [...idx].reverse().map((i) => brg[i]).join(', ');
        const salahDigit = [0, 1, 2].sort((i, j) => String(p[i]).localeCompare(String(p[j]))).map((i) => brg[i]).join(', ');
        const steps: Step[] = [
            { kind: 'choice', id: 'mahal', prompt: 'Mana yang paling mahal?', ...pilihanTetap(brg[idx[2]], brg, Object.fromEntries(brg.filter((b) => b !== brg[idx[2]]).map((b) => [b, 'salah-bandingkan-harga']))),
              hint: 'Ubah ke "ribu", lalu cari bilangan terbesar.', explain: `${p[idx[2]]} ribu paling besar: ${brg[idx[2]]}.`, error: 'salah-bandingkan-harga' },
            { kind: 'choice', id: 'murah', prompt: 'Mana yang paling murah?', ...pilihanTetap(brg[idx[0]], brg, Object.fromEntries(brg.filter((b) => b !== brg[idx[0]]).map((b) => [b, 'salah-bandingkan-harga']))),
              hint: 'Cari bilangan terkecil.', explain: `${p[idx[0]]} ribu paling kecil: ${brg[idx[0]]}.`, error: 'salah-bandingkan-harga' },
            { kind: 'choice', id: 'urut', prompt: 'Urutkan dari yang termurah.', ...pilihan(rng, urut, [[terbalik, 'salah-bandingkan-harga'], [salahDigit, 'salah-bandingkan-harga'], [[brg[idx[1]], brg[idx[0]], brg[idx[2]]].join(', '), 'salah-bandingkan-harga']]),
              hint: `Mulai dari ${brg[idx[0]]}.`, explain: `${idx.map((i) => `${brg[i]} (${rupiah(p[i] * 1000)})`).join(', ')}.`, error: 'salah-bandingkan-harga' },
        ];
        return { text: 'Lihat daftar harga di toko. Urutkan barang dari yang termurah.', visual: { type: 'table', head: ['Barang', 'Harga'], rows: brg.map((b, i) => [b, rupiah(p[i] * 1000)]) },
            steps, conclusion: `Urutan dari yang termurah: ${urut}.` };
    }
    // tingkat 3: cukupkah uangnya?
    const nama = rng.pick(NAMA);
    let items: number[];
    do items = Array.from({ length: 3 }, () => rng.pick([1000, 2000, 5000, 10000, 20000])); while (new Set(items).size < 2);
    const T = items.reduce((a, b) => a + b, 0) / 1000;
    const [x, y] = rng.shuffle(BARANG).slice(0, 2);
    const hx = Math.max(1, T - rng.int(1, Math.min(5, T - 1))), hy = T + rng.int(1, 6);
    const [A, hA, B, hB] = rng.chance(0.5) ? [x, hx, y, hy] : [y, hy, x, hx];
    const bisa = hA <= T ? A : B;
    const steps: Step[] = [
        { kind: 'number', id: 'uang', prompt: `Hitung uang ${nama}. Lompat dari yang terbesar. Berapa ribu?`, answer: String(T), suffix: 'ribu',
          hint: `Urutkan: ${[...items].sort((a, b) => b - a).map((v) => v / 1000).join(', ')} ribu.`, explain: `Uang ${nama} ${T} ribu = ${rupiah(T * 1000)}.`, error: 'hitung-lembar-bukan-nilai' },
        { kind: 'choice', id: 'cek-a', prompt: `Harga ${A} ${hA} ribu. Apakah uang ${nama} cukup?`, ...pilihanTetap(hA <= T ? 'cukup' : 'tidak cukup', ['cukup', 'tidak cukup']),
          hint: 'Cukup kalau uangnya sama dengan atau lebih dari harga.', explain: `${T} ribu ${hA <= T ? 'lebih dari' : 'kurang dari'} ${hA} ribu.`, error: 'salah-cukup-uang' },
        { kind: 'choice', id: 'beli', prompt: `Jadi barang mana yang bisa dibeli ${nama}?`, ...pilihanTetap(bisa, [A, B], { [bisa === A ? B : A]: 'salah-cukup-uang' }),
          hint: `Bandingkan ${T} ribu dengan ${hA} ribu dan ${hB} ribu.`, explain: `${bisa} seharga ${Math.min(hA, hB)} ribu, uang ${nama} cukup. Barang yang lain lebih mahal dari ${T} ribu.`, error: 'salah-cukup-uang' },
    ];
    return { text: `${nama} punya uang seperti di gambar. Ia ingin membeli ${A} seharga ${rupiah(hA * 1000)} atau ${B} seharga ${rupiah(hB * 1000)}. Mana yang bisa ia beli?`,
        visual: { type: 'money', items }, steps, conclusion: `Jadi ${nama} bisa membeli ${bisa}.` };
};

export const topic: TopicDef = {
    topic: 'sd1-07-uang',
    skills: [
        { code: 'kenal-uang', name: 'Mengenal dan membaca uang', gen: kenal },
        { code: 'hitung-uang', name: 'Menghitung jumlah uang', gen: hitung },
        { code: 'bandingkan-harga', name: 'Membandingkan harga', gen: harga },
    ],
};
