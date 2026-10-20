/* sd2-07 Penjumlahan dan pengurangan pecahan senama, menggenapkan menjadi 1 utuh. */
import type { Generator, Step, TopicDef } from '../../types';
import { berbeda, fr, isi, NAMA, pecahan } from './_bantu';

const penyebutTetap = (n: number, kurang = false) =>
    isi('penyebut', `Cek penyebut: sama-sama ${n}. Penyebut hasilnya berapa?`, n, {
        hint: 'Ukuran potongan tidak berubah, jadi penyebutnya tetap.', explain: `Pecahan senama, penyebut tetap ${n}.`, error: kurang ? 'pecahan-penyebut-dikurang' : 'pecahan-penyebut-dijumlah' });

const satuUtuh = (n: number) =>
    isi('satu-utuh', `Ubah 1 utuh menjadi pecahan berpenyebut ${n}: 1 = ?/${n}`, n, {
        hint: `1 utuh berisi semua potongan, yaitu ${n} potong.`, explain: `1 = ${fr(n, n)}.`, error: 'lupa-ubah-satu-utuh' });

const tambah: Generator = (rng, level) => {
    if (level <= 2) {
        const k = level === 1 ? 2 : 3;
        const n = rng.int(level === 1 ? 3 : 5, 12);
        let parts: number[] = [];
        do parts = Array.from({ length: k }, () => rng.int(1, n - 2)); while (parts.reduce((a, b) => a + b, 0) >= n);
        const s = parts.reduce((a, b) => a + b, 0);
        const steps: Step[] = [
            penyebutTetap(n),
            isi('pembilang', `Jumlahkan pembilang: ${parts.join(' + ')} = ?`, s, { hint: 'Hitung banyak potongan semuanya.', explain: `${parts.join(' + ')} = ${s} potong.`, error: 'salah-fakta-tambah' }),
            pecahan('hasil', 'Tulis hasilnya.', s, n, { hint: `Pembilang ${s}, penyebut tetap ${n}.`, explain: `Hasilnya ${fr(s, n)}.`, error: 'pecahan-penyebut-dijumlah' }),
        ];
        return { text: `Hitung $${parts.map((a) => `\\frac{${a}}{${n}}`).join(' + ')}$`, visual: level === 1 ? { type: 'fraction', shape: 'bar', parts: n, shaded: parts[0] } : undefined, steps,
            conclusion: `Jadi ${parts.map((a) => fr(a, n)).join(' + ')} = ${fr(s, n)}.` };
    }
    // tingkat 3: dua langkah, "lebih banyak dari"
    const n = rng.int(6, 12);
    let a = 0, b = 0;
    do { a = rng.int(1, 4); b = rng.int(1, 4); } while (2 * a + b >= n);
    const nama = rng.pick(NAMA);
    const benda = rng.pick(['pagar', 'tembok kelas', 'papan']);
    const sel = a + b, total = a + sel;
    const steps: Step[] = [
        pecahan('selasa', `Langkah 1: bagian yang dicat hari Selasa. ${fr(a, n)} + ${fr(b, n)} = ?`, sel, n, { hint: 'Penyebut tetap, jumlahkan pembilang.', explain: `Hari Selasa ${fr(sel, n)}.`, error: 'pecahan-penyebut-dijumlah' }),
        isi('pembilang', `Langkah 2: jumlahkan pembilang Senin dan Selasa: ${a} + ${sel} = ?`, total, { hint: 'Banyak potong hari Senin ditambah hari Selasa.', explain: `${a} + ${sel} = ${total}.`, error: 'salah-fakta-tambah' }),
        pecahan('hasil', `Berapa bagian ${benda} yang sudah dicat?`, total, n, { hint: `Pembilang ${total}, penyebut tetap ${n}.`, explain: `${fr(a, n)} + ${fr(sel, n)} = ${fr(total, n)}.`, error: 'pecahan-penyebut-dijumlah' }),
    ];
    return { text: `${nama} mengecat ${fr(a, n)} ${benda} hari Senin. Hari Selasa ia mengecat ${fr(b, n)} lebih banyak dari hari Senin. Berapa bagian ${benda} yang sudah dicat?`, steps,
        conclusion: `Selasa ${fr(sel, n)}. Semuanya ${fr(a, n)} + ${fr(sel, n)} = ${fr(total, n)}.` };
};

const kurang: Generator = (rng, level) => {
    if (level === 1) {
        const n = rng.int(3, 12);
        const [x, y] = berbeda(rng, 2, 1, n - 1);
        const a = Math.max(x, y), b = Math.min(x, y);
        const steps: Step[] = [
            penyebutTetap(n, true),
            isi('pembilang', `Kurangkan pembilang: ${a} − ${b} = ?`, a - b, { hint: `Punya ${a} potong, diambil ${b} potong.`, explain: `${a} − ${b} = ${a - b}.`, error: 'salah-fakta-kurang' }),
            pecahan('hasil', 'Tulis hasilnya.', a - b, n, { hint: `Pembilang ${a - b}, penyebut tetap ${n}.`, explain: `Hasilnya ${fr(a - b, n)}. Cek: ${fr(a - b, n)} + ${fr(b, n)} = ${fr(a, n)}.`, error: 'pecahan-penyebut-dikurang' }),
        ];
        return { text: `Hitung $\\frac{${a}}{${n}} - \\frac{${b}}{${n}}$`, visual: { type: 'fraction', shape: 'bar', parts: n, shaded: a }, steps, conclusion: `Jadi ${fr(a, n)} − ${fr(b, n)} = ${fr(a - b, n)}.` };
    }
    if (level === 2) {
        const n = rng.int(3, 12), a = rng.int(1, n - 1);
        const steps: Step[] = [
            satuUtuh(n),
            isi('pembilang', `Kurangkan pembilang: ${n} − ${a} = ?`, n - a, { hint: `${fr(n, n)} dikurangi ${fr(a, n)}.`, explain: `${n} − ${a} = ${n - a}.`, error: 'salah-fakta-kurang' }),
            pecahan('hasil', 'Tulis hasilnya.', n - a, n, { hint: `Penyebut tetap ${n}.`, explain: `${fr(n, n)} − ${fr(a, n)} = ${fr(n - a, n)}.`, error: 'pecahan-penyebut-dikurang' }),
        ];
        return { text: `Hitung $1 - \\frac{${a}}{${n}}$`, steps, conclusion: `Jadi 1 − ${fr(a, n)} = ${fr(n - a, n)}.` };
    }
    // tingkat 3: dua kali mengurangi, lalu cek
    const n = rng.int(8, 12);
    let a = 0, b = 0, c = 0;
    do { a = rng.int(5, n - 1); b = rng.int(1, 3); c = rng.int(1, 3); } while (a - b - c < 1);
    const [nm, t1, t2] = berbeda(rng, 3, 0, NAMA.length - 1).map((i) => NAMA[i]);
    const s1 = a - b, s2 = s1 - c;
    const steps: Step[] = [
        pecahan('sisa1', `Langkah 1: setelah diberikan ke ${t1}. ${fr(a, n)} − ${fr(b, n)} = ?`, s1, n, { hint: 'Penyebut tetap, kurangkan pembilang.', explain: `${a} − ${b} = ${s1}. Sisa ${fr(s1, n)}.`, error: 'pecahan-penyebut-dikurang' }),
        pecahan('sisa2', `Langkah 2: setelah diberikan ke ${t2}. ${fr(s1, n)} − ${fr(c, n)} = ?`, s2, n, { hint: 'Penyebut tetap, kurangkan pembilang.', explain: `${s1} − ${c} = ${s2}. Sisa ${fr(s2, n)}.`, error: 'pecahan-penyebut-dikurang' }),
        isi('cek', `Cek: ${s2} + ${b} + ${c} = ?`, a, { hint: `Sisa ditambah yang diberikan harus kembali ke ${a} potong.`, explain: `${s2} + ${b} + ${c} = ${a}. Benar.`, error: 'salah-fakta-tambah' }),
    ];
    return { text: `Sebatang cokelat dibagi ${n} kotak sama besar. ${nm} punya ${fr(a, n)} cokelat itu. Ia memberi ${fr(b, n)} kepada ${t1} dan ${fr(c, n)} kepada ${t2}. Berapa bagian cokelat ${nm} sekarang?`,
        visual: { type: 'fraction', shape: 'bar', parts: n, shaded: a }, steps, conclusion: `Sisa cokelat ${nm}: ${fr(s2, n)}.` };
};

const genapkan: Generator = (rng, level) => {
    if (level <= 2) {
        const n = rng.int(level === 1 ? 3 : 5, 12);
        let parts: number[] = [];
        do parts = Array.from({ length: level }, () => rng.int(1, n - 2)); while (parts.reduce((a, b) => a + b, 0) >= n);
        const s = parts.reduce((a, b) => a + b, 0);
        const steps: Step[] = [satuUtuh(n)];
        if (level === 2) steps.push(isi('punya', `Jumlahkan yang sudah ada: ${parts.join(' + ')} = ?`, s, { hint: 'Jumlahkan pembilangnya.', explain: `Sudah ada ${s} potong, yaitu ${fr(s, n)}.`, error: 'salah-fakta-tambah' }));
        steps.push(isi('kurang', `Berapa potong lagi supaya penuh? ${n} − ${s} = ?`, n - s, { hint: `Penuh = ${n} potong. Sudah ada ${s}.`, explain: `${n} − ${s} = ${n - s}.`, error: 'salah-genapkan-satu' }));
        steps.push(pecahan('hasil', 'Tulis pecahan yang hilang.', n - s, n, { hint: `Pembilang ${n - s}, penyebut ${n}.`, explain: `${parts.map((a) => fr(a, n)).join(' + ')} + ${fr(n - s, n)} = ${fr(n, n)} = 1.`, error: 'salah-genapkan-satu' }));
        return { text: `Isi titik-titik: $${parts.map((a) => `\\frac{${a}}{${n}}`).join(' + ')} + \\dots = 1$`, visual: { type: 'fraction', shape: rng.pick(['bar', 'circle'] as const), parts: n, shaded: s }, steps,
            conclusion: `Yang hilang adalah ${fr(n - s, n)}.` };
    }
    // tingkat 3: dimakan dua anak, berapa sisa dari 1 loyang
    const n = rng.int(6, 12);
    let a = 0, b = 0;
    do { a = rng.int(1, n - 2); b = rng.int(1, n - 2); } while (a + b >= n);
    const [n1, n2] = berbeda(rng, 2, 0, NAMA.length - 1).map((i) => NAMA[i]);
    const kue = rng.pick(['loyang kue', 'loyang martabak', 'loyang pizza']);
    const s = a + b;
    const steps: Step[] = [
        pecahan('dimakan', `Langkah 1: yang dimakan berdua. ${fr(a, n)} + ${fr(b, n)} = ?`, s, n, { hint: 'Penyebut tetap, jumlahkan pembilang.', explain: `Dimakan ${fr(s, n)}.`, error: 'pecahan-penyebut-dijumlah' }),
        satuUtuh(n),
        pecahan('sisa', `Langkah 2: sisanya. ${fr(n, n)} − ${fr(s, n)} = ?`, n - s, n, { hint: `${n} − ${s} potong.`, explain: `Sisa ${fr(n - s, n)}. Cek: ${fr(s, n)} + ${fr(n - s, n)} = ${fr(n, n)} = 1.`, error: 'lupa-ubah-satu-utuh' }),
    ];
    return { text: `Ibu membuat 1 ${kue}, dipotong ${n} bagian sama besar. ${n1} makan ${fr(a, n)} bagian. ${n2} makan ${fr(b, n)} bagian. Berapa bagian yang tersisa?`, steps,
        conclusion: `Dimakan ${fr(s, n)}, tersisa ${fr(n - s, n)}.` };
};

export const topic: TopicDef = {
    topic: 'sd2-07-tambah-kurang-pecahan-senama',
    skills: [
        { code: 'tambah-senama', name: 'Menjumlahkan pecahan senama', gen: tambah },
        { code: 'kurang-senama', name: 'Mengurangkan pecahan senama (termasuk dari 1 utuh)', gen: kurang },
        { code: 'genapkan-satu', name: 'Menggenapkan menjadi 1 utuh', gen: genapkan },
    ],
};
