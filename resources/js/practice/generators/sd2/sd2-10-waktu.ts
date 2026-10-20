/* sd2-10 Waktu: membaca jam sampai menit, jam ↔ menit, lama waktu dengan garis waktu. */
import type { Generator, Step, TopicDef } from '../../types';
import { dua, isi, NAMA, pilih, pukul } from './_bantu';

const bacaJam: Generator = (rng, level) => {
    const h = rng.int(1, 11);
    let m = 0;
    if (level === 1) m = rng.int(1, 11) * 5;
    else if (level === 2) do m = rng.int(6, 39); while (m % 5 === 0);
    else do m = rng.int(41, 58); while (m % 5 === 0);
    const angka = Math.floor(m / 5), garis = m % 5;
    const benar = pukul(h, m);
    const salah: [string, string][] = [[pukul(h + 1, m), 'salah-baca-jarum-pendek'], [pukul(h, angka), 'menit-tidak-loncat-5']];
    if (angka >= 1 && angka <= 12 && h * 5 < 60) salah.push([pukul(angka, h * 5), 'tertukar-jarum-jam']);
    const steps: Step[] = [
        isi('jam', 'Lihat jarum pendek. Angka berapa yang sudah dilewati?', h, { hint: 'Jarum pendek menunjukkan jam. Pilih angka yang sudah dilewati, bukan angka berikutnya.', explain: `Jarum pendek sudah lewat ${h}${m >= 40 ? `, hampir sampai ${h + 1}, tetapi belum` : ''}. Jamnya ${h}.`, error: m >= 40 ? 'salah-baca-jarum-pendek' : 'tertukar-jarum-jam' }),
    ];
    if (level === 1) {
        steps.push(isi('menit', `Jarum panjang di angka ${angka}. Hitung loncat 5 sebanyak ${angka} kali. Berapa menit?`, m, { suffix: 'menit', hint: 'Setiap angka besar bernilai 5 menit: 5, 10, 15, ...', explain: `${Array.from({ length: angka }, (_, i) => 5 * (i + 1)).join(', ')}. Jadi ${m} menit.`, error: 'menit-tidak-loncat-5' }));
    } else {
        steps.push(isi('angka', 'Jarum panjang sudah melewati angka berapa?', angka, { hint: 'Lihat angka besar terakhir sebelum jarum panjang.', explain: `Jarum panjang sudah lewat angka ${angka}, yaitu ${angka * 5} menit.`, error: 'menit-tidak-loncat-5' }));
        steps.push(isi('menit', `${angka * 5} menit ditambah ${garis} garis kecil. Berapa menit?`, m, { suffix: 'menit', hint: 'Setiap garis kecil bernilai 1 menit.', explain: `${angka * 5} + ${garis} = ${m} menit.`, error: 'menit-tidak-loncat-5' }));
    }
    steps.push(pilih(rng, 'waktu', 'Pukul berapa?', benar, salah, { hint: 'Tulis jam, titik, lalu menit dengan dua angka.', explain: `Jam ${h}, menit ${m}: ${benar}.`, error: 'salah-tulis-menit' }));
    if (level === 3) steps.push(isi('menuju', `Berapa menit lagi menuju ${pukul(h + 1, 0)}?`, 60 - m, { suffix: 'menit', hint: '1 jam = 60 menit. Hitung maju dari menit sekarang sampai 60.', explain: `60 − ${m} = ${60 - m} menit lagi.`, error: 'satu-jam-100-menit' }));
    return { text: level === 3 ? `Jam dinding di kelas menunjukkan waktu seperti gambar. Pukul berapa? Berapa menit lagi menuju ${pukul(h + 1, 0)}?` : 'Pukul berapa yang ditunjukkan jam ini?',
        visual: { type: 'clock', hour: h, minute: m }, steps, conclusion: `Jam menunjukkan ${benar}${level === 3 ? `, ${60 - m} menit lagi menuju ${pukul(h + 1, 0)}` : ''}.` };
};

const ubahSatuan: Generator = (rng, level) => {
    if (level === 1) {
        const h = rng.int(1, 3), m = rng.int(1, 11) * 5;
        const steps: Step[] = [
            isi('jam', `Ubah jam ke menit: ${h} jam = ? menit`, h * 60, { suffix: 'menit', hint: `1 jam = 60 menit. ${h} jam = ${Array(h).fill(60).join(' + ')}.`, explain: `${h} jam = ${h * 60} menit.`, error: 'satu-jam-100-menit' }),
            isi('total', `Tambahkan menitnya: ${h * 60} + ${m} = ?`, h * 60 + m, { suffix: 'menit', hint: `Tambahkan ${m} menit.`, explain: `${h * 60} + ${m} = ${h * 60 + m} menit.`, error: 'salah-fakta-tambah' }),
        ];
        return { text: `${h} jam ${m} menit = ... menit`, steps, conclusion: `${h} jam ${m} menit = ${h * 60 + m} menit.` };
    }
    if (level === 2) {
        let M = 0;
        do M = rng.int(65, 175); while (M % 60 === 0);
        const h = Math.floor(M / 60), s = M % 60;
        const steps: Step[] = [
            isi('jam', `Ambil 60 menit sebanyak mungkin dari ${M} menit. Dapat berapa jam?`, h, { suffix: 'jam', hint: `60 menit = 1 jam, 120 menit = 2 jam. Mana yang tidak melebihi ${M}?`, explain: `${h} jam = ${h * 60} menit.`, error: 'salah-ubah-menit-ke-jam' }),
            isi('sisa', `Sisa menitnya: ${M} − ${h * 60} = ?`, s, { suffix: 'menit', hint: `Kurangkan ${h * 60} dari ${M}.`, explain: `Sisa ${s} menit, kurang dari 60. Berhenti.`, error: 'salah-ubah-menit-ke-jam' }),
            isi('cek', `Cek: ${h} jam ${s} menit = ? menit`, M, { suffix: 'menit', hint: `${h * 60} + ${s}.`, explain: `${h * 60} + ${s} = ${M}. Benar.`, error: 'satu-jam-100-menit' }),
        ];
        return { text: `${M} menit = ... jam ... menit`, steps, conclusion: `${M} menit = ${h} jam ${s} menit.` };
    }
    // tingkat 3: bandingkan dua lama kegiatan
    const [a, b] = rng.shuffle(NAMA).slice(0, 2);
    const keg = rng.pick(['belajar', 'membaca buku', 'bermain bola', 'menggambar']);
    let h = 0, m = 0, M = 0;
    do { h = 1; m = rng.int(1, 11) * 5; M = rng.int(13, 23) * 5; } while (M === 60 + m || Math.abs(60 + m - M) < 5);
    const A = h * 60 + m;
    const lebih = A > M ? a : b;
    const steps: Step[] = [
        isi('ubah', `Ubah waktu ${a} ke menit: 1 jam ${m} menit = ? menit`, A, { suffix: 'menit', hint: '1 jam = 60 menit.', explain: `60 + ${m} = ${A} menit.`, error: 'satu-jam-100-menit' }),
        pilih(rng, 'siapa', `${a} ${A} menit, ${b} ${M} menit. Siapa yang lebih lama?`, lebih, [[a, 'satu-jam-100-menit'], [b, 'satu-jam-100-menit']], { hint: 'Bandingkan dalam menit.', explain: `${Math.max(A, M)} menit lebih lama dari ${Math.min(A, M)} menit.`, error: 'satu-jam-100-menit', urut: [a, b] }),
        isi('selisih', `Berapa menit selisihnya? ${Math.max(A, M)} − ${Math.min(A, M)} = ?`, Math.abs(A - M), { suffix: 'menit', hint: 'Kurangkan yang besar dengan yang kecil.', explain: `Selisihnya ${Math.abs(A - M)} menit.`, error: 'salah-fakta-kurang' }),
    ];
    return { text: `${a} ${keg} selama 1 jam ${m} menit. ${b} ${keg} selama ${M} menit. Siapa yang lebih lama, dan berapa menit selisihnya?`, steps,
        conclusion: `${lebih} lebih lama ${Math.abs(A - M)} menit.` };
};

const lamaWaktu: Generator = (rng, level) => {
    const nama = rng.pick(NAMA);
    const KEG = [['les menari', 'mulai', 'selesai'], ['naik bus ke rumah Nenek', 'berangkat', 'tiba'], ['bermain di taman', 'mulai', 'pulang'], ['les renang', 'mulai', 'selesai']];
    const [keg, mulai, akhir] = rng.pick(KEG);
    if (level <= 2) {
        let h1 = 0, m1 = 0, h2 = 0, m2 = 0;
        if (level === 1) do { h1 = rng.int(7, 14); m1 = rng.int(0, 9) * 5; h2 = h1 + rng.int(1, 3); m2 = rng.int(0, 11) * 5; } while (m2 <= m1);
        else do { h1 = rng.int(7, 14); m1 = rng.int(4, 11) * 5; h2 = h1 + rng.int(2, 3); m2 = rng.int(1, 8) * 5; } while (m2 >= m1);
        const steps: Step[] = [];
        if (level === 1) {
            steps.push(isi('jam', `Loncat per jam dari ${pukul(h1, m1)} sampai ${pukul(h2, m1)}. Berapa jam?`, h2 - h1, { suffix: 'jam', hint: 'Hitung loncatan 1 jam satu per satu.', explain: `${pukul(h1, m1)} sampai ${pukul(h2, m1)} = ${h2 - h1} jam.`, error: 'salah-loncat-garis-waktu' }));
            steps.push(isi('menit', `Loncat per menit dari ${pukul(h2, m1)} sampai ${pukul(h2, m2)}. Berapa menit?`, m2 - m1, { suffix: 'menit', hint: `${m2} − ${m1}.`, explain: `${m2} − ${m1} = ${m2 - m1} menit.`, error: 'salah-loncat-garis-waktu' }));
        } else {
            steps.push(isi('bulat', `Loncat sampai jam bulat: ${pukul(h1, m1)} → ${pukul(h1 + 1, 0)}. Berapa menit?`, 60 - m1, { suffix: 'menit', hint: `Berapa menit lagi dari ${m1} sampai 60?`, explain: `60 − ${m1} = ${60 - m1} menit.`, error: 'salah-lewat-jam-bulat' }));
            steps.push(isi('jam', `Loncat per jam: ${pukul(h1 + 1, 0)} → ${pukul(h2, 0)}. Berapa jam?`, h2 - h1 - 1, { suffix: 'jam', hint: 'Hitung loncatan 1 jam.', explain: `${h2 - h1 - 1} jam.`, error: 'salah-loncat-garis-waktu' }));
            steps.push(isi('sisa', `Loncat sisa menit: ${pukul(h2, 0)} → ${pukul(h2, m2)}. Berapa menit?`, m2, { suffix: 'menit', hint: 'Dari menit 0 sampai menit akhir.', explain: `${m2} menit.`, error: 'salah-loncat-garis-waktu' }));
            steps.push(isi('gabung', `Gabungkan menitnya: ${60 - m1} + ${m2} = ?`, 60 - m1 + m2, { suffix: 'menit', hint: 'Jumlahkan kedua loncatan menit.', explain: `${60 - m1} + ${m2} = ${60 - m1 + m2} menit. Jadi lamanya ${h2 - h1 - 1} jam ${60 - m1 + m2} menit.`, error: 'salah-lewat-jam-bulat' }));
        }
        const j = level === 1 ? h2 - h1 : h2 - h1 - 1, mm = level === 1 ? m2 - m1 : 60 - m1 + m2;
        return { text: `${nama} ${keg}. ${mulai[0].toUpperCase() + mulai.slice(1)} ${pukul(h1, m1)}, ${akhir} ${pukul(h2, m2)}. Berapa lama?`,
            visual: { type: 'clock', hour: h1 > 12 ? h1 - 12 : h1, minute: m1 }, steps, conclusion: `Lamanya ${j} jam ${mm} menit.` };
    }
    // tingkat 3: cari waktu selesai dari waktu mulai dan lama
    let h1 = 0, m1 = 0, dj = 0, dm = 0;
    do { h1 = rng.int(7, 13); m1 = rng.int(7, 11) * 5; dj = rng.int(1, 2); dm = rng.int(3, 10) * 5; } while (m1 + dm <= 60 || m1 + dm >= 120);
    const h2 = h1 + dj, ke = 60 - m1, sisa = dm - ke;
    const akhirBenar = pukul(h2 + 1, sisa);
    const steps: Step[] = [
        isi('jam', `Tambah ${dj} jam dulu: ${pukul(h1, m1)} + ${dj} jam = pukul ?.${dua(m1)}`, h2, { hint: 'Menitnya tetap, jamnya bertambah.', explain: `${pukul(h1, m1)} + ${dj} jam = ${pukul(h2, m1)}.`, error: 'salah-loncat-garis-waktu' }),
        isi('bulat', `Dari ${pukul(h2, m1)}, berapa menit sampai ${pukul(h2 + 1, 0)}?`, ke, { suffix: 'menit', hint: `60 − ${m1}.`, explain: `${ke} menit sampai jam bulat.`, error: 'salah-lewat-jam-bulat' }),
        isi('sisa', `Dari ${dm} menit sudah dipakai ${ke} menit. Sisanya berapa?`, sisa, { suffix: 'menit', hint: `${dm} − ${ke}.`, explain: `${dm} − ${ke} = ${sisa} menit.`, error: 'salah-fakta-kurang' }),
        pilih(rng, 'selesai', 'Jadi pukul berapa selesai?', akhirBenar, [[pukul(h2, m1 + dm - 60), 'salah-lewat-jam-bulat'], [pukul(h2, (m1 + dm) % 100), 'satu-jam-100-menit'], [pukul(h2 + 1, sisa + 5), 'salah-loncat-garis-waktu']], {
            hint: `${pukul(h2 + 1, 0)} ditambah ${sisa} menit.`, explain: `${pukul(h2 + 1, 0)} + ${sisa} menit = ${akhirBenar}.`, error: 'salah-lewat-jam-bulat' }),
    ];
    return { text: `${nama} ${keg}. ${mulai[0].toUpperCase() + mulai.slice(1)} ${pukul(h1, m1)}, lamanya ${dj} jam ${dm} menit. Pukul berapa ${akhir}?`, steps,
        conclusion: `${nama} ${akhir} ${akhirBenar}.` };
};

export const topic: TopicDef = {
    topic: 'sd2-10-waktu',
    skills: [
        { code: 'baca-jam', name: 'Membaca jam sampai menit', gen: bacaJam },
        { code: 'jam-menit', name: 'Mengubah jam ke menit dan sebaliknya', gen: ubahSatuan },
        { code: 'lama-waktu', name: 'Menghitung lama waktu', gen: lamaWaktu },
    ],
};
