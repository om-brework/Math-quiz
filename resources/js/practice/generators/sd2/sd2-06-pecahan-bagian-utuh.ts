/* sd2-06 Pecahan sebagai bagian dari keseluruhan: pembilang-penyebut, mengarsir, membandingkan, mengurutkan. */
import type { Generator, Step, TopicDef } from '../../types';
import { berbeda, fr, isi, lambang, NAMA, pecahan, pilih, URUT_LAMBANG } from './_bantu';

const BENTUK = ['bar', 'circle', 'rect'] as const;
const NAMA_BENTUK = { bar: 'batang', circle: 'lingkaran', rect: 'persegi panjang' } as const;

const dariGambar: Generator = (rng, level) => {
    if (level <= 2) {
        const p = level === 1 ? rng.int(2, 8) : rng.int(4, 12);
        const s = rng.int(1, p - 1);
        const shape = rng.pick(BENTUK);
        const tanya = level === 1 ? s : p - s;
        const steps: Step[] = [
            isi('penyebut', 'Hitung semua bagian yang sama besar. Ada berapa?', p, { hint: 'Hitung semua bagian, yang diarsir dan yang tidak.', explain: `Ada ${p} bagian sama besar. Penyebutnya ${p}.`, error: 'penyebut-bukan-semua-bagian' }),
            isi('arsir', 'Berapa bagian yang diarsir?', s, { hint: 'Hitung bagian yang berwarna satu per satu.', explain: `Ada ${s} bagian diarsir.`, error: 'salah-hitung-gambar' }),
        ];
        if (level === 2) steps.push(isi('tidak', `Berapa bagian yang tidak diarsir? ${p} − ${s} = ?`, p - s, { hint: 'Semua bagian dikurangi bagian yang diarsir.', explain: `${p} − ${s} = ${p - s} bagian tidak diarsir.`, error: 'salah-fakta-kurang' }));
        steps.push(pecahan('pecahan', `Tulis pecahan untuk bagian yang ${level === 1 ? '' : 'tidak '}diarsir.`, tanya, p, {
            hint: 'Pembilang (atas) = bagian yang ditanya. Penyebut (bawah) = semua bagian.', explain: `${tanya} bagian dari ${p} bagian = ${fr(tanya, p)}.`, error: level === 2 ? 'penyebut-bukan-semua-bagian' : 'pembilang-penyebut-tertukar' }));
        return { text: `Lihat ${NAMA_BENTUK[shape]} ini. Tulis pecahan untuk bagian yang ${level === 1 ? '' : 'tidak '}diarsir.`, visual: { type: 'fraction', shape, parts: p, shaded: s }, steps,
            conclusion: `Bagian yang ${level === 1 ? '' : 'tidak '}diarsir adalah ${fr(tanya, p)}.` };
    }
    // tingkat 3: soal cerita, bagian yang belum dimakan
    const p = rng.int(6, 12);
    const [a, b] = [rng.int(1, Math.floor(p / 2) - 1), rng.int(1, Math.floor(p / 2) - 1)];
    const [n1, n2] = berbeda(rng, 2, 0, NAMA.length - 1).map((i) => NAMA[i]);
    const kue = rng.pick(['kue bolu', 'martabak', 'pizza', 'kue lapis']);
    const sisa = p - a - b;
    const steps: Step[] = [
        isi('penyebut', `${kue[0].toUpperCase() + kue.slice(1)} dipotong menjadi berapa bagian sama besar?`, p, { hint: 'Itulah penyebutnya.', explain: `Penyebutnya ${p}.`, error: 'penyebut-bukan-semua-bagian' }),
        isi('dimakan', `Berapa potong yang dimakan? ${a} + ${b} = ?`, a + b, { hint: `${n1} dan ${n2} sama-sama makan.`, explain: `${a} + ${b} = ${a + b} potong dimakan.`, error: 'salah-fakta-tambah' }),
        isi('sisa', `Berapa potong yang belum dimakan? ${p} − ${a + b} = ?`, sisa, { hint: 'Semua potong dikurangi yang dimakan.', explain: `${p} − ${a + b} = ${sisa} potong.`, error: 'salah-fakta-kurang' }),
        pecahan('pecahan', `Tulis pecahan ${kue} yang belum dimakan.`, sisa, p, { hint: `${sisa} potong dari ${p} potong.`, explain: `${sisa} dari ${p} bagian = ${fr(sisa, p)}.`, error: 'penyebut-bukan-semua-bagian' }),
    ];
    return { text: `Ibu memotong ${kue} menjadi ${p} bagian sama besar. ${n1} makan ${a} potong. ${n2} makan ${b} potong. Berapa bagian ${kue} yang belum dimakan? Tulis sebagai pecahan.`, steps,
        conclusion: `Yang belum dimakan ${sisa} dari ${p} potong, yaitu ${fr(sisa, p)}.` };
};

const arsir: Generator = (rng, level) => {
    const p = rng.int(level === 1 ? 2 : 4, level === 1 ? 8 : 12);
    const shape = rng.pick(BENTUK);
    if (level === 1) {
        const a = rng.int(1, p - 1);
        const steps: Step[] = [
            pilih(rng, 'istilah', `Pada pecahan ${fr(a, p)}, angka ${p} disebut ...`, 'penyebut', [['pembilang', 'pembilang-penyebut-tertukar']], {
                hint: 'Angka di bawah garis menunjukkan semua bagian.', explain: `${p} adalah penyebut: ${NAMA_BENTUK[shape]} dibagi ${p} bagian sama besar. ${a} adalah pembilang.`, error: 'pembilang-penyebut-tertukar', urut: ['pembilang', 'penyebut'] }),
            isi('cek-bagian', `${NAMA_BENTUK[shape][0].toUpperCase() + NAMA_BENTUK[shape].slice(1)} ini dibagi menjadi berapa bagian sama besar?`, p, { hint: 'Hitung semua bagian.', explain: `Ada ${p} bagian, cocok dengan penyebut ${p}.`, error: 'penyebut-bukan-semua-bagian' }),
            isi('arsir', `Berapa bagian yang harus diarsir untuk menunjukkan ${fr(a, p)}?`, a, { hint: 'Lihat pembilangnya, angka di atas.', explain: `Arsir ${a} bagian dari ${p} bagian.`, error: 'pembilang-penyebut-tertukar' }),
        ];
        return { text: `Kamu ingin mengarsir ${fr(a, p)} dari ${NAMA_BENTUK[shape]} ini.`, visual: { type: 'fraction', shape, parts: p, shaded: 0 }, steps,
            conclusion: `Untuk ${fr(a, p)}, arsir ${a} dari ${p} bagian.` };
    }
    if (level === 2) {
        const s = rng.int(1, p - 2), a = rng.int(s + 1, p - 1);
        const steps: Step[] = [
            isi('target', `Untuk ${fr(a, p)}, berapa bagian yang harus diarsir semuanya?`, a, { hint: 'Lihat pembilangnya.', explain: `Pembilang ${a}, jadi ${a} bagian harus diarsir.`, error: 'pembilang-penyebut-tertukar' }),
            isi('sudah', 'Berapa bagian yang sudah diarsir di gambar?', s, { hint: 'Hitung bagian yang sudah berwarna.', explain: `Sudah ada ${s} bagian.`, error: 'salah-hitung-gambar' }),
            isi('tambah', `Berapa bagian lagi yang harus diarsir? ${a} − ${s} = ?`, a - s, { hint: 'Yang harus dikurangi yang sudah.', explain: `${a} − ${s} = ${a - s} bagian lagi.`, error: 'salah-fakta-kurang' }),
        ];
        return { text: `${NAMA_BENTUK[shape][0].toUpperCase() + NAMA_BENTUK[shape].slice(1)} ini sudah diarsir sebagian. Berapa bagian lagi harus diarsir supaya yang diarsir menjadi ${fr(a, p)}?`,
            visual: { type: 'fraction', shape, parts: p, shaded: s }, steps, conclusion: `Arsir ${a - s} bagian lagi, supaya ${a} dari ${p} bagian diarsir: ${fr(a, p)}.` };
    }
    // tingkat 3: yang TIDAK diarsir harus menjadi u/p
    const u = rng.int(1, p - 3), s = rng.int(1, p - u - 1);
    const harus = p - u;
    const steps: Step[] = [
        isi('harus', `Kalau ${u} bagian tidak diarsir, berapa bagian yang diarsir? ${p} − ${u} = ?`, harus, { hint: 'Semua bagian = yang diarsir + yang tidak diarsir.', explain: `${p} − ${u} = ${harus} bagian harus diarsir.`, error: 'penyebut-bukan-semua-bagian' }),
        isi('sudah', 'Berapa bagian yang sudah diarsir?', s, { hint: 'Hitung bagian yang berwarna di gambar.', explain: `Sudah ada ${s} bagian.`, error: 'salah-hitung-gambar' }),
        isi('tambah', `Berapa bagian lagi yang harus diarsir? ${harus} − ${s} = ?`, harus - s, { hint: 'Yang harus dikurangi yang sudah.', explain: `${harus} − ${s} = ${harus - s} bagian lagi.`, error: 'salah-fakta-kurang' }),
    ];
    return { text: `Rina ingin bagian yang **tidak** diarsir menjadi ${fr(u, p)}. Berapa bagian lagi yang harus ia arsir?`, visual: { type: 'fraction', shape, parts: p, shaded: s }, steps,
        conclusion: `Arsir ${harus - s} bagian lagi. Diarsir ${fr(harus, p)}, tidak diarsir ${fr(u, p)}.` };
};

const SATUAN = 'pecahan satuan (pembilang 1)';
const SENAMA = 'pecahan senama (penyebut sama)';

const bandingkan: Generator = (rng, level) => {
    if (level <= 2) {
        const satuan = level === 1;
        let x: [number, number], y: [number, number];
        if (satuan) {
            const [a, b] = berbeda(rng, 2, 2, 12);
            x = [1, a]; y = [1, b];
        } else {
            const n = rng.int(4, 12);
            const [a, b] = berbeda(rng, 2, 1, n - 1);
            x = [a, n]; y = [b, n];
        }
        const vx = x[0] / x[1], vy = y[0] / y[1];
        const besar = vx > vy ? x : y, kecil = vx > vy ? y : x;
        const nm = rng.pick(NAMA);
        const steps: Step[] = [
            pilih(rng, 'jenis', 'Kenali dulu. Kedua pecahan ini termasuk ...', satuan ? SATUAN : SENAMA, [satuan ? SENAMA : SATUAN], {
                hint: satuan ? 'Lihat pembilangnya.' : 'Lihat penyebutnya.', explain: satuan ? 'Pembilangnya sama-sama 1, jadi pecahan satuan. Bandingkan penyebutnya.' : `Penyebutnya sama-sama ${x[1]}, jadi pecahan senama. Bandingkan pembilangnya.`, error: 'salah-banding-pecahan', urut: [SATUAN, SENAMA] }),
            pilih(rng, 'besar', 'Mana yang lebih besar?', fr(...besar), [[fr(...kecil), satuan ? 'penyebut-besar-dikira-besar' : 'salah-banding-pecahan']], {
                hint: satuan ? 'Martabak yang dibagi ke lebih sedikit orang, potongannya lebih besar.' : 'Potongannya sama besar. Lebih banyak potong berarti lebih besar.',
                explain: satuan ? `Penyebut ${besar[1]} lebih kecil dari ${kecil[1]}, jadi potongannya lebih besar: ${fr(...besar)}.` : `${besar[0]} potong lebih banyak dari ${kecil[0]} potong, jadi ${fr(...besar)} lebih besar.`,
                error: satuan ? 'penyebut-besar-dikira-besar' : 'salah-banding-pecahan', urut: [fr(...x), fr(...y)] }),
            pilih(rng, 'lambang', `Isi lambang: ${fr(...x)} ... ${fr(...y)}`, lambang(vx, vy), [[lambang(vy, vx), 'salah-banding-pecahan']], {
                hint: 'Ujung yang terbuka menghadap pecahan yang lebih besar.', explain: `${fr(...x)} ${vx > vy ? '>' : '<'} ${fr(...y)}.`, error: 'salah-banding-pecahan', urut: URUT_LAMBANG }),
        ];
        const text = satuan
            ? `Bandingkan ${fr(...x)} dan ${fr(...y)}. Isi dengan > atau <.`
            : `${nm} makan ${fr(...x)} kue. Adiknya makan ${fr(...y)} kue yang sama. Bandingkan kedua pecahan itu.`;
        return { text, steps, conclusion: `${fr(...x)} ${vx > vy ? '>' : '<'} ${fr(...y)}.` };
    }
    // tingkat 3: urutkan 4 pecahan satuan atau senama
    const satuan = rng.chance(0.5);
    const n = rng.int(7, 12);
    const fs: [number, number][] = satuan ? berbeda(rng, 4, 2, 12).map((d) => [1, d]) : berbeda(rng, 4, 1, n - 1).map((a) => [a, n]);
    const kecilDulu = rng.chance(0.5);
    const sorted = [...fs].sort((p, q) => (kecilDulu ? p[0] / p[1] - q[0] / q[1] : q[0] / q[1] - p[0] / p[1]));
    const tulis = (l: [number, number][]) => l.map((f) => fr(...f)).join(', ');
    // salah khas: mengurutkan menurut penyebut (untuk pecahan satuan) atau terbalik
    const salahPenyebut = [...fs].sort((p, q) => (kecilDulu ? p[1] - q[1] : q[1] - p[1]));
    const steps: Step[] = [
        pilih(rng, 'jenis', 'Kenali dulu. Pecahan-pecahan ini termasuk ...', satuan ? SATUAN : SENAMA, [satuan ? SENAMA : SATUAN], {
            hint: 'Lihat apa yang sama: pembilang atau penyebut?', explain: satuan ? 'Semua pembilangnya 1. Pecahan satuan: makin besar penyebut, makin kecil pecahannya.' : `Semua penyebutnya ${n}. Pecahan senama: cukup urutkan pembilangnya.`, error: 'salah-banding-pecahan', urut: [SATUAN, SENAMA] }),
        pilih(rng, 'pertama', `Mana yang paling ${kecilDulu ? 'kecil' : 'besar'}?`, fr(...sorted[0]), fs.map((f) => [fr(...f), satuan ? 'penyebut-besar-dikira-besar' : 'salah-banding-pecahan'] as [string, string]), {
            hint: satuan ? `Paling ${kecilDulu ? 'kecil' : 'besar'} berarti penyebutnya paling ${kecilDulu ? 'besar' : 'kecil'}.` : `Cari pembilang paling ${kecilDulu ? 'kecil' : 'besar'}.`, explain: `${fr(...sorted[0])} paling ${kecilDulu ? 'kecil' : 'besar'}.`, error: satuan ? 'penyebut-besar-dikira-besar' : 'salah-banding-pecahan', urut: fs.map((f) => fr(...f)) }),
        pilih(rng, 'urutan', `Urutkan dari yang paling ${kecilDulu ? 'kecil' : 'besar'}.`, tulis(sorted), [[tulis([...sorted].reverse()), 'salah-urut-pecahan'], [satuan ? tulis(salahPenyebut) : tulis(fs), satuan ? 'penyebut-besar-dikira-besar' : 'salah-urut-pecahan'], [tulis(rng.shuffle(fs)), 'salah-urut-pecahan']], {
            hint: `Mulai dari ${fr(...sorted[0])}.`, explain: `Urutannya ${tulis(sorted)}.`, error: 'salah-urut-pecahan' }),
    ];
    return { text: `Urutkan dari yang paling ${kecilDulu ? 'kecil' : 'besar'}: ${tulis(fs)}`, steps, conclusion: `Urutannya: ${tulis(sorted)}.` };
};

export const topic: TopicDef = {
    topic: 'sd2-06-pecahan-bagian-utuh',
    skills: [
        { code: 'pecahan-dari-gambar', name: 'Pembilang, penyebut, dan pecahan dari gambar', gen: dariGambar },
        { code: 'arsir-pecahan', name: 'Menggambar (mengarsir) pecahan', gen: arsir },
        { code: 'bandingkan-urutkan-pecahan', name: 'Membandingkan dan mengurutkan pecahan', gen: bandingkan },
    ],
};
