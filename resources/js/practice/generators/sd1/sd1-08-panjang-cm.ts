/* sd1-08 Panjang dalam Sentimeter: mengukur dengan penggaris, cm, membandingkan dan mengurutkan, menggambar garis. */
import type { Generator, Step, TopicDef } from '../../types';
import { NAMA, berbeda, pilihan, pilihanTetap } from './common';

const BENDA = ['pensil', 'krayon', 'spidol', 'sedotan', 'lidi'];

/** Mengukur panjang benda dengan penggaris. */
const ukur: Generator = (rng, level) => {
    const benda = rng.pick(BENDA);
    if (level === 1) {
        const n = rng.int(3, 15);
        const steps: Step[] = [
            { kind: 'number', id: 'awal', prompt: `Cek ujung awal. Ujung kiri ${benda} ada di angka berapa?`, answer: '0',
              hint: 'Lihat angka tepat di bawah ujung kiri.', explain: 'Ujung kiri tepat di angka 0. Bagus.', error: 'ukur-tidak-dari-nol' },
            { kind: 'number', id: 'akhir', prompt: `Baca ujung akhir. Ujung kanan ${benda} di angka berapa?`, answer: String(n),
              hint: 'Lihat angka tepat di bawah ujung kanan.', explain: `Ujung kanan di angka ${n}.`, error: 'salah-baca-penggaris' },
            { kind: 'choice', id: 'satuan', prompt: 'Tulis panjangnya dengan satuan.', ...pilihan(rng, `${n} cm`, [[String(n), 'lupa-satuan-cm'], [`${n + 1} cm`, 'hitung-garis-tanda'], [`${n - 1} cm`, 'salah-baca-penggaris']]),
              hint: 'Panjang ditulis dengan angka dan "cm".', explain: `Dari 0 ke ${n} ada ${n} langkah semut: ${n} cm.`, error: 'lupa-satuan-cm' },
        ];
        return { text: `Berapa panjang ${benda} ini?`, visual: { type: 'ruler', start: 0, end: n, item: 'pensil' }, steps, conclusion: `Jadi panjang ${benda} ${n} cm.` };
    }
    const s = rng.int(1, level === 2 ? 5 : 8);
    const n = rng.int(3, level === 2 ? 10 : 12);
    const e = s + n;
    const steps: Step[] = [];
    if (level === 3) {
        const nama = rng.pick(NAMA);
        steps.push({ kind: 'choice', id: 'benar', prompt: `${nama} bilang panjangnya ${e} cm. Benarkah?`, ...pilihanTetap('Salah', ['Benar', 'Salah'], { Benar: 'baca-ujung-saja' }),
            hint: `Lihat ujung kiri ${benda}. Apakah di angka 0?`, explain: `${nama} hanya membaca ujung kanan. ${benda[0].toUpperCase() + benda.slice(1)} tidak mulai dari 0.`, error: 'baca-ujung-saja' });
    }
    steps.push(
        { kind: 'number', id: 'awal', prompt: `Cek ujung awal. Ujung kiri di angka berapa?`, answer: String(s),
          hint: 'Lihat angka tepat di bawah ujung kiri.', explain: `Ujung kiri di angka ${s}, bukan 0.`, error: 'ukur-tidak-dari-nol' },
        { kind: 'number', id: 'akhir', prompt: 'Cek ujung akhir. Ujung kanan di angka berapa?', answer: String(e),
          hint: 'Lihat angka tepat di bawah ujung kanan.', explain: `Ujung kanan di angka ${e}.`, error: 'salah-baca-penggaris' },
        { kind: 'number', id: 'panjang', prompt: `Hitung langkah semut dari ${s} ke ${e}. Berapa panjangnya?`, answer: String(n), suffix: 'cm',
          hint: `Mulai dari ${s}: ${s + 1}, ${s + 2}, … sampai ${e}. Atau ${e} − ${s}.`, explain: `Ada ${n} langkah. Cek: ${e} − ${s} = ${n}.`, error: 'baca-ujung-saja' },
    );
    return { text: level === 3 ? `${benda[0].toUpperCase() + benda.slice(1)} diletakkan di penggaris seperti gambar. Berapa panjang sebenarnya?` : `Berapa panjang ${benda} ini? Perhatikan ujung kirinya.`,
        visual: { type: 'ruler', start: s, end: e, item: 'pensil' }, steps, conclusion: `Jadi panjang ${benda} ${n} cm, bukan ${e} cm.` };
};

const PITA = ['merah', 'biru', 'kuning', 'hijau', 'ungu'];

/** Membandingkan dan mengurutkan panjang; selisih. */
const bandingkan: Generator = (rng, level) => {
    if (level === 1) {
        const [a, b] = berbeda(rng, 2, 3, 20);
        const [x, y] = rng.shuffle(PITA).slice(0, 2);
        const tanya = rng.chance(0.5) ? 'panjang' : 'pendek';
        const ans = (tanya === 'panjang') === (a > b) ? x : y;
        const steps: Step[] = [
            { kind: 'choice', id: 'angka', prompt: `Bandingkan angkanya: ${a} cm dan ${b} cm. Mana yang lebih ${tanya === 'panjang' ? 'besar' : 'kecil'}?`,
              ...pilihanTetap(`${tanya === 'panjang' ? Math.max(a, b) : Math.min(a, b)} cm`, [`${a} cm`, `${b} cm`]),
              hint: 'Bandingkan puluhan dulu, lalu satuan.', explain: `${Math.max(a, b)} lebih besar dari ${Math.min(a, b)}.`, error: 'salah-bandingkan-panjang' },
            { kind: 'choice', id: 'pita', prompt: `Jadi pita mana yang lebih ${tanya}?`, ...pilihanTetap(ans, [x, y], { [ans === x ? y : x]: 'salah-bandingkan-panjang' }),
              hint: tanya === 'panjang' ? 'Angka lebih besar berarti lebih panjang.' : 'Angka lebih kecil berarti lebih pendek.', explain: `Pita ${ans} lebih ${tanya}.`, error: 'salah-bandingkan-panjang' },
        ];
        return { text: `Pita ${x} panjangnya ${a} cm. Pita ${y} panjangnya ${b} cm. Pita mana yang lebih ${tanya}?`, steps, conclusion: `Jadi pita ${ans} lebih ${tanya}.` };
    }
    if (level === 2) {
        const len = berbeda(rng, 3, 4, 20);
        const pita = rng.shuffle(PITA).slice(0, 3);
        const idx = [0, 1, 2].sort((i, j) => len[i] - len[j]);
        const ans = idx.map((i) => pita[i]).join(', ');
        const steps: Step[] = [
            { kind: 'choice', id: 'terpanjang', prompt: 'Pita mana yang terpanjang?', ...pilihanTetap(pita[idx[2]], pita, Object.fromEntries(pita.filter((_, i) => i !== idx[2]).map((p) => [p, 'salah-bandingkan-panjang']))),
              hint: 'Cari angka terbesar.', explain: `${len[idx[2]]} cm paling besar: pita ${pita[idx[2]]}.`, error: 'salah-bandingkan-panjang' },
            { kind: 'choice', id: 'terpendek', prompt: 'Pita mana yang terpendek?', ...pilihanTetap(pita[idx[0]], pita, Object.fromEntries(pita.filter((_, i) => i !== idx[0]).map((p) => [p, 'salah-bandingkan-panjang']))),
              hint: 'Cari angka terkecil.', explain: `${len[idx[0]]} cm paling kecil: pita ${pita[idx[0]]}.`, error: 'salah-bandingkan-panjang' },
            { kind: 'choice', id: 'urut', prompt: 'Urutkan dari yang terpendek.',
              ...pilihan(rng, ans, [[[...idx].reverse().map((i) => pita[i]).join(', '), 'salah-bandingkan-panjang'], [[idx[0], idx[2], idx[1]].map((i) => pita[i]).join(', '), 'salah-bandingkan-panjang'], [pita.join(', '), 'salah-bandingkan-panjang']]),
              hint: `Mulai dari pita ${pita[idx[0]]}.`, explain: `${idx.map((i) => `${pita[i]} (${len[i]} cm)`).join(', ')}.`, error: 'salah-bandingkan-panjang' },
        ];
        return { text: `Pita ${pita[0]} ${len[0]} cm, pita ${pita[1]} ${len[1]} cm, pita ${pita[2]} ${len[2]} cm. Urutkan dari yang terpendek.`,
            visual: { type: 'barChart', scaleStep: 5, max: 20, unit: 'cm', bars: pita.map((p, i) => ({ label: p, value: len[i] })), title: 'Panjang pita' }, steps, conclusion: `Urutan dari yang terpendek: ${ans}.` };
    }
    // tingkat 3: berapa cm lebih panjang
    const [n1, n2] = rng.shuffle(NAMA).slice(0, 2);
    let a: number, b: number;
    do { a = rng.int(8, 20); b = rng.int(4, 19); } while (a === b || Math.abs(a - b) < 2);
    const benda = rng.pick(['pensil', 'penggaris', 'pita', 'tali']);
    const besar = a > b ? n1 : n2;
    const d = Math.abs(a - b), hi = Math.max(a, b), lo = Math.min(a, b);
    const steps: Step[] = [
        { kind: 'choice', id: 'siapa', prompt: `${benda[0].toUpperCase() + benda.slice(1)} siapa yang lebih panjang?`, ...pilihanTetap(besar, [n1, n2], { [besar === n1 ? n2 : n1]: 'salah-bandingkan-panjang' }),
          hint: 'Angka lebih besar berarti lebih panjang.', explain: `${hi} lebih besar dari ${lo}.`, error: 'salah-bandingkan-panjang' },
        { kind: 'choice', id: 'operasi', prompt: 'Cari selisihnya dengan …', ...pilihan(rng, `${hi} − ${lo}`, [[`${hi} + ${lo}`, 'salah-pilih-tambah-kurang'], [`${lo} − ${hi}`, 'kurang-urutan-terbalik']]),
          hint: 'Berapa lebih panjang = yang panjang dikurangi yang pendek.', explain: `Selisih = ${hi} − ${lo}.`, error: 'salah-pilih-tambah-kurang' },
        { kind: 'number', id: 'selisih', prompt: `${hi} − ${lo} = ?`, answer: String(d), suffix: 'cm',
          hint: hi > 10 && lo < 10 && hi - 10 < lo ? `Turun ke 10 dulu: ${hi} − ${hi - 10} = 10.` : `Bilang maju dari ${lo} sampai ${hi}.`, explain: `${hi} − ${lo} = ${d}. Cek: ${lo} + ${d} = ${hi}.`, error: 'salah-fakta-kurang' },
    ];
    return { text: `${benda[0].toUpperCase() + benda.slice(1)} ${n1} panjangnya ${a} cm. ${benda[0].toUpperCase() + benda.slice(1)} ${n2} panjangnya ${b} cm. ${benda[0].toUpperCase() + benda.slice(1)} siapa yang lebih panjang? Berapa cm lebih panjang?`,
        steps, conclusion: `Jadi ${benda} ${besar} lebih panjang ${d} cm.` };
};

/** Menggambar garis dengan panjang tertentu. */
const gambar: Generator = (rng, level) => {
    const n = rng.int(3, 15);
    if (level === 1) {
        const steps: Step[] = [
            { kind: 'number', id: 'titik-1', prompt: 'Buat titik pertama. Di angka berapa?', answer: '0',
              hint: 'Garis selalu dimulai dari angka 0.', explain: 'Titik pertama tepat di angka 0.', error: 'ukur-tidak-dari-nol' },
            { kind: 'number', id: 'titik-2', prompt: 'Buat titik kedua. Di angka berapa?', answer: String(n),
              hint: 'Cari angka panjang yang diminta.', explain: `Titik kedua di angka ${n}.`, error: 'salah-baca-penggaris' },
            { kind: 'number', id: 'cek', prompt: `Hubungkan dua titik. Ada berapa langkah semut dari 0 ke ${n}?`, answer: String(n),
              hint: 'Hitung jarak antar garis tanda, bukan banyak garis tanda.', explain: `Dari 0 ke ${n} ada ${n} langkah, jadi garisnya ${n} cm.`, error: 'hitung-garis-tanda' },
        ];
        const nama = rng.pick(NAMA);
        return { text: `${nama} ingin menggambar garis sepanjang ${n} cm dengan penggaris. Bantu ${nama}.`, steps, conclusion: `Jadi garis ${n} cm dibuat dari angka 0 sampai angka ${n}.` };
    }
    const s = rng.int(1, 6);
    const nama = rng.pick(NAMA);
    if (level === 2) {
        const steps: Step[] = [
            { kind: 'choice', id: 'cara', prompt: 'Titik kedua dicari dengan …', ...pilihan(rng, `${s} + ${n}`, [[String(n), 'baca-ujung-saja'], [`${n} − ${s}`, 'salah-pilih-tambah-kurang']]),
              hint: `Mulai dari ${s}, maju ${n} langkah semut.`, explain: `Maju ${n} langkah dari ${s}: ${s} + ${n}.`, error: 'baca-ujung-saja' },
            { kind: 'number', id: 'titik-2', prompt: 'Titik kedua di angka berapa?', answer: String(s + n),
              hint: `${s} + ${n} = ?`, explain: `${s} + ${n} = ${s + n}. Cek: ${s + n} − ${s} = ${n}.`, error: 'salah-fakta-tambah' },
        ];
        return { text: `Ujung penggaris ${nama} patah, jadi ia mulai menggambar dari angka ${s}. Garisnya harus ${n} cm. Di angka berapa titik kedua?`, steps,
            conclusion: `Jadi titik kedua di angka ${s + n}.` };
    }
    // tingkat 3: memperpanjang garis
    const sekarang = rng.int(2, n - 1);
    const e = s + sekarang;
    const steps: Step[] = [
        { kind: 'number', id: 'sekarang', prompt: 'Berapa panjang garis sekarang?', answer: String(sekarang), suffix: 'cm',
          hint: `Hitung langkah semut dari ${s} ke ${e}.`, explain: `${e} − ${s} = ${sekarang} cm.`, error: 'baca-ujung-saja' },
        { kind: 'number', id: 'tambah', prompt: `Garis harus ${n} cm. Berapa cm lagi?`, answer: String(n - sekarang), suffix: 'cm',
          hint: `${sekarang} + ? = ${n}`, explain: `${n} − ${sekarang} = ${n - sekarang} cm lagi.`, error: 'salah-fakta-kurang' },
        { kind: 'number', id: 'ujung', prompt: 'Ujung garis yang baru di angka berapa?', answer: String(e + n - sekarang),
          hint: `Dari ${e}, maju ${n - sekarang} langkah.`, explain: `${e} + ${n - sekarang} = ${e + n - sekarang}. Cek: dari ${s} ke ${e + n - sekarang} ada ${n} langkah.`, error: 'salah-fakta-tambah' },
    ];
    return { text: `${nama} menggambar garis dari angka ${s} sampai angka ${e}. Garis itu harus diperpanjang menjadi ${n} cm. Sampai angka berapa?`,
        visual: { type: 'ruler', start: s, end: e }, steps, conclusion: `Jadi garis diperpanjang sampai angka ${e + n - sekarang}.` };
};

export const topic: TopicDef = {
    topic: 'sd1-08-panjang-cm',
    skills: [
        { code: 'ukur-penggaris', name: 'Mengukur dengan penggaris', gen: ukur },
        { code: 'bandingkan-panjang', name: 'Membandingkan dan mengurutkan panjang', gen: bandingkan },
        { code: 'gambar-garis', name: 'Menggambar garis', gen: gambar },
    ],
};
