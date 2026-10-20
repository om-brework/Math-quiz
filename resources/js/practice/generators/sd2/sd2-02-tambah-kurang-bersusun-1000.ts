/* sd2-02 Penjumlahan dan pengurangan bersusun sampai 1.000, termasuk soal cerita dua langkah. */
import type { Generator, Rng, Step, TopicDef, Visual } from '../../types';
import { isi, NAMA, pilih } from './_bantu';

const d = (n: number, i: number) => Math.floor(n / 10 ** i) % 10;
/** banyak simpanan pada a + b: [satuan→puluhan, puluhan→ratusan] */
function simpanan(a: number, b: number): [boolean, boolean] {
    const c1 = d(a, 0) + d(b, 0) >= 10;
    const c2 = d(a, 1) + d(b, 1) + (c1 ? 1 : 0) >= 10;
    return [c1, c2];
}
/** peminjaman pada a − b: [satuan pinjam, puluhan pinjam] */
function pinjaman(a: number, b: number): [boolean, boolean] {
    const p1 = d(a, 0) < d(b, 0);
    const p2 = d(a, 1) - (p1 ? 1 : 0) < d(b, 1);
    return [p1, p2];
}

function soalTambah(rng: Rng, mode: 'satu' | 'dua'): [number, number] {
    for (;;) {
        const a = rng.int(100, 899);
        const b = rng.chance(0.3) ? rng.int(12, 99) : rng.int(100, 899);
        if (a + b > 999) continue;
        const [c1, c2] = simpanan(a, b);
        if (mode === 'satu' && c1 !== c2) return [a, b];
        if (mode === 'dua' && c1 && c2) return [a, b];
    }
}

function soalKurang(rng: Rng, mode: 'satu' | 'dua' | 'nol'): [number, number] {
    for (;;) {
        const a = mode === 'nol' ? rng.int(2, 9) * 100 + (rng.chance(0.5) ? 0 : rng.int(1, 8)) : rng.int(200, 999);
        const b = rng.int(mode === 'satu' && rng.chance(0.3) ? 12 : 101, a - 11);
        if (b >= a || b < 12) continue;
        const [p1, p2] = pinjaman(a, b);
        if (mode === 'satu' && p1 !== p2 && d(a, 1) !== 0) return [a, b];
        if (mode === 'dua' && p1 && p2 && d(a, 1) !== 0) return [a, b];
        if (mode === 'nol' && d(a, 1) === 0 && p1 && b >= 100) return [a, b];
    }
}

const SUSUN_TAMBAH = 'Kerjakan bersusun dari kanan: satuan, puluhan, lalu ratusan. Tulis simpanan di kotak kecil.';
const SUSUN_KURANG = 'Kerjakan bersusun dari kanan. Kalau angka atas lebih kecil, pinjam 1 dari kiri dan tulis angka barunya di kotak kecil.';

const tambah: Generator = (rng, level) => {
    if (level <= 2) {
        const [a, b] = soalTambah(rng, level === 1 ? 'satu' : 'dua');
        const s = a + b;
        const so = d(a, 0) + d(b, 0);
        const steps: Step[] = [
            isi('satuan', `Mulai dari satuan: ${d(a, 0)} + ${d(b, 0)} = ?`, so, { hint: 'Jumlahkan angka paling kanan dari kedua bilangan.',
                explain: so >= 10 ? `${so} lebih dari 9. Tulis ${so % 10}, simpan 1 ke puluhan.` : `${so} kurang dari 10, jadi tidak perlu menyimpan.`, error: 'salah-fakta-tambah' }),
            { kind: 'column', id: 'susun', op: '+', a, b, prompt: SUSUN_TAMBAH, hint: 'Kalau satu kolom 10 atau lebih, tulis satuannya dan simpan 1 ke kolom kiri.', explain: `${a} + ${b} = ${s}.` },
            isi('cek', `Cek dengan pengurangan: ${s} − ${b} = ?`, a, { hint: 'Kalau hasilnya kembali ke bilangan pertama, jawabanmu benar.', explain: `${s} − ${b} = ${a}, sama dengan bilangan pertama. Benar.`, error: 'salah-fakta-kurang' }),
        ];
        return { text: `Hitung $${a} + ${b}$ dengan cara bersusun.`, steps, conclusion: `Jadi ${a} + ${b} = ${s}.` };
    }
    // tingkat 3: bilangan yang hilang, ? − b = c
    const [c, b] = soalTambah(rng, 'dua');
    const a = c + b;
    const steps: Step[] = [
        pilih(rng, 'operasi', 'Bilangan yang dicari dikurangi ' + b + ' menjadi ' + c + '. Hitungan apa yang dipakai untuk mencarinya?', `${c} + ${b}`, [[`${c} − ${b}`, 'salah-pilih-operasi'], [`${b} − ${c}`, 'salah-pilih-operasi']], {
            hint: 'Bilangan itu dikurangi lalu tinggal ' + c + '. Kembalikan yang dikurangi.', explain: `Bilangan yang dicari = ${c} + ${b}.`, error: 'salah-pilih-operasi' }),
        { kind: 'column', id: 'susun', op: '+', a: c, b, prompt: SUSUN_TAMBAH, hint: 'Ingat simpanan di puluhan dan ratusan.', explain: `${c} + ${b} = ${a}.` },
        isi('cek', `Cek: ${a} − ${b} = ?`, c, { hint: `Hasilnya harus ${c}.`, explain: `${a} − ${b} = ${c}. Benar.`, error: 'salah-fakta-kurang' }),
    ];
    return { text: `Isi titik-titik: $\\dots - ${b} = ${c}$`, steps, conclusion: `Jadi ${a} − ${b} = ${c}. Bilangan yang dicari ${a}.` };
};

const kurang: Generator = (rng, level) => {
    const [a, b] = soalKurang(rng, level === 1 ? 'satu' : level === 2 ? 'dua' : 'nol');
    const s = a - b;
    const [p1] = pinjaman(a, b);
    const first: Step = level === 3
        ? pilih(rng, 'pinjam', `Satuan: ${d(a, 0)} − ${d(b, 0)} tidak cukup, dan puluhan ${a} adalah 0. Pinjam dari mana?`, 'Pinjam dari ratusan dulu', [['Pinjam dari puluhan saja', 'salah-pinjam-lewat-nol'], ['Tidak perlu meminjam', 'kurang-terbalik']], {
            hint: 'Puluhan kosong, tidak ada bungkus yang bisa dibuka.', explain: `Buka 1 ratusan: ratusan ${d(a, 2)} menjadi ${d(a, 2) - 1}, puluhan menjadi 10. Lalu pinjam 1 puluhan: puluhan menjadi 9, satuan bertambah 10.`, error: 'salah-pinjam-lewat-nol' })
        : pilih(rng, 'pinjam', `Lihat satuan: ${d(a, 0)} − ${d(b, 0)}. Perlu meminjam?`, p1 ? 'Ya, pinjam dari puluhan' : 'Tidak perlu', [['Ya, pinjam dari puluhan', 'pinjam-tidak-perlu'], ['Tidak perlu', 'lupa-pinjam']], {
            hint: 'Apakah angka atas lebih kecil dari angka bawah?', explain: p1 ? `${d(a, 0)} lebih kecil dari ${d(b, 0)}, jadi pinjam 1 puluhan: satuan menjadi ${d(a, 0) + 10}.` : `${d(a, 0)} tidak lebih kecil dari ${d(b, 0)}, jadi satuan tidak perlu meminjam.`, error: p1 ? 'lupa-pinjam' : 'pinjam-tidak-perlu', urut: ['Ya, pinjam dari puluhan', 'Tidak perlu'] });
    const steps: Step[] = [
        first,
        { kind: 'column', id: 'susun', op: '-', a, b, prompt: SUSUN_KURANG, hint: level === 3 ? 'Angka 0 di puluhan menjadi 9 setelah dipinjam.' : 'Setelah meminjam, angka di kiri berkurang 1.', explain: `${a} − ${b} = ${s}.` },
        isi('cek', `Cek dengan penjumlahan: ${s} + ${b} = ?`, a, { hint: 'Hasil kurang ditambah bilangan pengurang harus kembali ke bilangan awal.', explain: `${s} + ${b} = ${a}. Benar.`, error: 'salah-fakta-tambah' }),
    ];
    return { text: `Hitung $${a} - ${b}$ dengan cara bersusun.`, steps, conclusion: `Jadi ${a} − ${b} = ${s}.` };
};

const BENDA = [
    { benda: 'buku tulis', tempat: 'Toko Pak Budi', keluar: 'terjual' },
    { benda: 'buku cerita', tempat: 'Perpustakaan sekolah', keluar: 'dipinjam' },
    { benda: 'kue', tempat: 'Toko kue Bu Rina', keluar: 'terjual' },
    { benda: 'bibit pohon', tempat: 'Kebun Pak Wayan', keluar: 'ditanam' },
    { benda: 'botol air', tempat: 'Warung Bu Dewi', keluar: 'terjual' },
];
const satuanBatang = (v: number, max: number) => Math.max(1, Math.round((v / max) * 6));

/** Soal cerita dengan model batang: satu langkah (tingkat 1), dua langkah (2), membandingkan lalu menjumlah (3). */
const cerita: Generator = (rng, level) => {
    const { benda, tempat, keluar } = rng.pick(BENDA);
    if (level === 1) {
        const tambahkah = rng.chance(0.5);
        const [x, y] = tambahkah ? soalTambah(rng, rng.chance(0.5) ? 'satu' : 'dua') : soalKurang(rng, rng.chance(0.5) ? 'satu' : 'dua');
        const hasil = tambahkah ? x + y : x - y;
        const text = tambahkah ? `${tempat} punya ${x} ${benda}. Lalu datang ${y} ${benda} lagi. Berapa ${benda} semuanya?` : `${tempat} punya ${x} ${benda}. Sebanyak ${y} ${benda} ${keluar}. Berapa ${benda} yang tersisa?`;
        const visual: Visual = tambahkah
            ? { type: 'barModel', bars: [{ label: 'Mula-mula', units: satuanBatang(x, x + y), known: String(x) }, { label: 'Datang', units: satuanBatang(y, x + y), known: String(y) }], total: '?', question: 'Semuanya?' }
            : { type: 'barModel', bars: [{ label: keluar[0].toUpperCase() + keluar.slice(1), units: satuanBatang(y, x), known: String(y) }, { label: 'Sisa', units: satuanBatang(x - y, x), known: '?' }], total: String(x), question: 'Sisa?' };
        const steps: Step[] = [
            pilih(rng, 'operasi', 'Lihat model batang. Hitungan apa yang dipakai?', tambahkah ? `${x} + ${y}` : `${x} − ${y}`, [[tambahkah ? `${x} − ${y}` : `${x} + ${y}`, 'salah-pilih-operasi']], {
                hint: tambahkah ? 'Dua bagian digabung menjadi keseluruhan.' : 'Keseluruhan diambil sebagian. Yang dicari bagian sisanya.', explain: tambahkah ? `Bagian digabung: ${x} + ${y}.` : `Keseluruhan dikurangi bagian yang ${keluar}: ${x} − ${y}.`, error: 'salah-pilih-operasi' }),
            { kind: 'column', id: 'susun', op: tambahkah ? '+' : '-', a: x, b: y, prompt: tambahkah ? SUSUN_TAMBAH : SUSUN_KURANG, hint: 'Mulai dari satuan.', explain: `${x} ${tambahkah ? '+' : '−'} ${y} = ${hasil}.` },
            isi('jawab', `Jadi berapa ${benda} ${tambahkah ? 'semuanya' : 'yang tersisa'}?`, hasil, { suffix: benda, hint: 'Tulis hasil hitung susunmu.', explain: `Ada ${hasil} ${benda}.`, error: 'salah-pilih-operasi' }),
        ];
        return { text, visual, steps, conclusion: `Jawaban: ${hasil} ${benda}.` };
    }
    if (level === 2) {
        // tambah dulu, lalu kurang (seperti contoh buku tulis)
        let x = 0, y = 0, z = 0;
        for (;;) {
            [x, y] = soalTambah(rng, rng.chance(0.5) ? 'satu' : 'dua');
            const t = x + y;
            z = rng.int(101, t - 20);
            const [p1, p2] = pinjaman(t, z);
            if (p1 || p2) break;
        }
        const t = x + y, sisa = t - z;
        const hari = rng.pick([['Hari Senin', 'Hari Selasa'], ['Pagi hari', 'Sore hari'], ['Hari Rabu', 'Hari Kamis']]);
        const steps: Step[] = [
            pilih(rng, 'langkah1', `Langkah pertama: cari banyak ${benda} setelah datang. Hitungan apa?`, `${x} + ${y}`, [[`${x} − ${y}`, 'salah-pilih-operasi'], [`${y} − ${z}`, 'salah-pilih-operasi']], {
                hint: `${benda} bertambah, jadi digabung.`, explain: `Mula-mula ${x}, datang ${y}: ${x} + ${y}.`, error: 'salah-pilih-operasi' }),
            { kind: 'column', id: 'susun1', op: '+', a: x, b: y, prompt: SUSUN_TAMBAH, hint: 'Ingat simpanan.', explain: `${x} + ${y} = ${t}. Sekarang ada ${t} ${benda}.` },
            { kind: 'column', id: 'susun2', op: '-', a: t, b: z, prompt: `Langkah kedua: ${t} − ${z}. ${SUSUN_KURANG}`, hint: 'Ingat meminjam.', explain: `${t} − ${z} = ${sisa}.` },
            isi('jawab', `Jadi berapa ${benda} yang tersisa?`, sisa, { suffix: benda, hint: 'Pertanyaannya adalah sisa, jadi jawabannya hasil langkah kedua.', explain: `Tersisa ${sisa} ${benda}.`, error: 'salah-urutan-langkah' }),
        ];
        return { text: `${tempat} punya ${x} ${benda}. ${hari[0]} datang ${y} ${benda} lagi. ${hari[1]} ${keluar} ${z} ${benda}. Berapa ${benda} yang tersisa?`,
            visual: { type: 'barModel', bars: [{ label: 'Mula-mula', units: satuanBatang(x, t), known: String(x) }, { label: 'Datang', units: satuanBatang(y, t), known: String(y) }], total: '?', question: 'Setelah datang?' },
            steps, conclusion: `${x} + ${y} = ${t}, lalu ${t} − ${z} = ${sisa}. Jawaban: ${sisa} ${benda}.` };
    }
    // tingkat 3: "lebih banyak/lebih sedikit dari", lalu jumlah berdua
    const a = rng.pick(NAMA);
    const b = rng.pick(NAMA.filter((n) => n !== a));
    let x = 0, beda = 0, y = 0, lebih = true;
    for (;;) {
        lebih = rng.chance(0.6);
        x = rng.int(120, 450); beda = rng.int(25, lebih ? 300 : x - 40);
        y = lebih ? x + beda : x - beda;
        if (y < 30 || x + y > 999 || beda >= (lebih ? 999 : x)) continue;
        const [c1, c2] = lebih ? simpanan(x, beda) : [false, false];
        const ok = lebih ? c1 || c2 : pinjaman(x, beda).some(Boolean);
        if (ok && simpanan(x, y).some(Boolean)) break;
    }
    const total = x + y;
    const steps: Step[] = [
        pilih(rng, 'langkah1', `Langkah pertama: cari kelereng ${b}. Hitungan apa?`, lebih ? `${x} + ${beda}` : `${x} − ${beda}`, [[lebih ? `${x} − ${beda}` : `${x} + ${beda}`, 'salah-pilih-operasi'], [`${beda} + ${beda}`, 'salah-pilih-operasi']], {
            hint: `Kelereng ${b} ${lebih ? 'lebih banyak' : 'lebih sedikit'} dari ${a}. Lihat batangnya: ${lebih ? 'lebih panjang' : 'lebih pendek'}.`, explain: `Kelereng ${b} = ${x} ${lebih ? '+' : '−'} ${beda}.`, error: 'salah-pilih-operasi' }),
        { kind: 'column', id: 'susun1', op: lebih ? '+' : '-', a: x, b: beda, prompt: `Hitung kelereng ${b}. ${lebih ? SUSUN_TAMBAH : SUSUN_KURANG}`, hint: 'Mulai dari satuan.', explain: `Kelereng ${b} ada ${y}.` },
        { kind: 'column', id: 'susun2', op: '+', a: x, b: y, prompt: `Langkah kedua: kelereng berdua, ${x} + ${y}. ${SUSUN_TAMBAH}`, hint: 'Jumlahkan kelereng kedua anak.', explain: `${x} + ${y} = ${total}.` },
        isi('jawab', 'Jadi berapa kelereng mereka berdua?', total, { suffix: 'kelereng', hint: 'Yang ditanya kelereng berdua, bukan kelereng satu anak.', explain: `Berdua punya ${total} kelereng.`, error: 'salah-urutan-langkah' }),
    ];
    const ux = satuanBatang(x, Math.max(x, y)), uy = satuanBatang(y, Math.max(x, y));
    return { text: `${a} punya ${x} kelereng. Kelereng ${b} ${beda} ${lebih ? 'lebih banyak' : 'lebih sedikit'} dari kelereng ${a}. Berapa kelereng mereka berdua?`,
        visual: { type: 'barModel', bars: [{ label: a, units: ux, known: String(x) }, { label: b, units: uy === ux ? Math.max(1, uy + (lebih ? 1 : -1)) : uy, known: '?' }], total: '?', question: 'Berdua?' },
        steps, conclusion: `Kelereng ${b} = ${y}. Berdua: ${x} + ${y} = ${total} kelereng.` };
};

export const topic: TopicDef = {
    topic: 'sd2-02-tambah-kurang-bersusun-1000',
    skills: [
        { code: 'tambah-susun', name: 'Penjumlahan bersusun dengan menyimpan', gen: tambah },
        { code: 'kurang-susun', name: 'Pengurangan bersusun dengan meminjam (termasuk melewati nol)', gen: kurang },
        { code: 'cerita-model-batang', name: 'Soal cerita dua langkah dengan model batang', gen: cerita },
    ],
};
