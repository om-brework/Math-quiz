/* sd3-10 Waktu: detik, lama waktu, waktu mulai/selesai, sistem 24 jam. */
import type { Generator, Rng, Step, TopicDef } from '../../types';
import { NAMA, durasi, fixed, num, pick, tm, until } from './util';

/** Bagian hari untuk jam 0–23. */
const bagian = (h: number) => (h < 1 ? 'tengah malam' : h < 11 ? 'pagi' : h < 15 ? 'siang' : h < 19 ? 'sore' : 'malam');
/** "8.10 malam" (gaya 12 jam). */
const jam12 = (h: number, m: number) => `${h % 12 === 0 ? 12 : h % 12}.${String(m).padStart(2, '0')} ${bagian(h)}`;
const t = (x: number) => tm(Math.floor(x / 60) % 24, x % 60);
const menit5 = (rng: Rng, lo = 0, hi = 55) => rng.int(lo / 5, hi / 5) * 5;

/** Sistem 24 jam. */
const jam24: Generator = (rng, level) => {
    if (level === 1) {
        const sore = rng.chance(0.7);
        const h = sore ? rng.int(13, 23) : rng.int(5, 11);
        const m = menit5(rng);
        const steps: Step[] = [
            fixed({ id: 'lewat', prompt: 'Apakah sudah lewat pukul 12 siang?', options: ['ya', 'tidak'], answer: sore ? 'ya' : 'tidak', error: 'salah-jam-24',
                hint: 'Pagi belum lewat pukul 12 siang. Siang (setelah pukul 1), sore, dan malam sudah lewat.', explain: sore ? `${bagian(h)[0].toUpperCase()}${bagian(h).slice(1)}, jadi sudah lewat.` : 'Pagi, jadi belum lewat.' }),
            num({ id: 'jam', prompt: sore ? `Tambah 12 pada angka jam: ${h - 12} + 12 = ?` : 'Angka jamnya tetap. Berapa angka jamnya?', answer: h, error: 'salah-jam-24',
                hint: sore ? 'Mulai pukul 1 siang, angka jam ditambah 12.' : 'Sebelum pukul 13.00 angka jamnya sama.', explain: `Angka jamnya ${h}.` }),
            num({ id: 'jawab', prompt: 'Tulis dalam sistem 24 jam (jam.menit).', answer: tm(h, m), error: 'salah-jam-24',
                hint: `Jam ${String(h).padStart(2, '0')}, menit ${String(m).padStart(2, '0')}. Menit selalu 2 angka.`, explain: `${jam12(h, m)} = ${tm(h, m)}.` }),
        ];
        return { text: `Tulis pukul ${jam12(h, m)} dalam sistem 24 jam.`, visual: { type: 'clock', hour: h % 12 === 0 ? 12 : h % 12, minute: m }, steps, conclusion: `Jadi ${jam12(h, m)} ditulis ${tm(h, m)}.` };
    }
    if (level === 2) {
        const h = rng.int(13, 23), m = menit5(rng);
        const steps: Step[] = [
            num({ id: 'jam', prompt: `Angka jam ${h} lebih dari 12. Kurangi 12: ${h} − 12 = ?`, answer: h - 12, error: 'salah-jam-24',
                hint: 'Untuk jam 13 sampai 23, kurangi 12.', explain: `${h} − 12 = ${h - 12}.` }),
            pick(rng, { id: 'jawab', prompt: `Pukul ${tm(h, m)} sama dengan ...`, answer: jam12(h, m),
                wrong: [[`${h - 12}.${String(m).padStart(2, '0')} pagi`, 'salah-jam-24'], [`${h - 10}.${String(m).padStart(2, '0')} ${bagian(h)}`, 'salah-jam-24'], [`${(h - 12) % 12 + 1}.${String(m).padStart(2, '0')} ${bagian(h)}`, 'salah-jam-24'], [`${h - 12}.${String(m).padStart(2, '0')} ${bagian(h) === 'malam' ? 'sore' : 'malam'}`, 'salah-jam-24']],
                error: 'salah-jam-24', hint: `Setelah dikurangi 12, pikirkan: pukul ${h - 12} itu siang, sore, atau malam?`, explain: `${tm(h, m)} = ${jam12(h, m)}.` }),
        ];
        return { text: `Pukul ${tm(h, m)}. Tulis dalam sistem 12 jam.`, visual: { type: 'clock', hour: h - 12, minute: m }, steps, conclusion: `Jadi ${tm(h, m)} adalah pukul ${jam12(h, m)}.` };
    }
    // tingkat 3: tengah malam dan cerita jadwal
    const m = menit5(rng, 5, 55);
    if (rng.chance(0.5)) {
        const to24 = rng.chance(0.5);
        const steps: Step[] = [
            fixed({ id: 'jam', prompt: 'Pada sistem 24 jam, pukul 12 tengah malam ditulis ...', options: ['00.00', '12.00', '24.00'], answer: '00.00', error: 'salah-jam-24',
                distractorErrors: { '24.00': 'salah-jam-24' }, hint: 'Hari baru dimulai dari jam 0.', explain: '12 tengah malam = 00.00.' }),
            to24
                ? num({ id: 'jawab', prompt: `Tulis pukul 12.${String(m).padStart(2, '0')} tengah malam dalam sistem 24 jam.`, answer: tm(0, m), error: 'salah-jam-24',
                    hint: 'Angka jam 12 tengah malam menjadi 00.', explain: `12.${String(m).padStart(2, '0')} tengah malam = ${tm(0, m)}.` })
                : pick(rng, { id: 'jawab', prompt: `Pukul ${tm(0, m)} sama dengan ...`, answer: `12.${String(m).padStart(2, '0')} tengah malam`,
                    wrong: [[`12.${String(m).padStart(2, '0')} siang`, 'salah-jam-24'], [`0.${String(m).padStart(2, '0')} pagi`, 'salah-jam-24'], [`${m} menit sebelum tengah malam`, 'salah-jam-24']],
                    error: 'salah-jam-24', hint: '00 adalah jam pertama setelah tengah malam.', explain: `${tm(0, m)} = 12.${String(m).padStart(2, '0')} tengah malam.` }),
        ];
        return { text: to24 ? `Kereta malam berangkat pukul 12.${String(m).padStart(2, '0')} tengah malam. Tulis dalam sistem 24 jam.` : `Tiket bus tertulis pukul ${tm(0, m)}. Pukul berapa itu?`, steps,
            conclusion: `Jadi 12.${String(m).padStart(2, '0')} tengah malam ditulis ${tm(0, m)}.` };
    }
    const nama = rng.pick(NAMA);
    const h = rng.int(19, 23);
    const steps: Step[] = [
        fixed({ id: 'bagian', prompt: `Pukul ${h - 12}.${String(m).padStart(2, '0')} malam. Sudah lewat pukul 12 siang?`, options: ['ya', 'tidak'], answer: 'ya', error: 'salah-jam-24',
            hint: 'Malam selalu sesudah siang.', explain: 'Malam sudah lewat pukul 12 siang, jadi angka jam ditambah 12.' }),
        num({ id: 'jam', prompt: `${h - 12} + 12 = ?`, answer: h, error: 'salah-jam-24', hint: 'Tambahkan 12.', explain: `${h - 12} + 12 = ${h}.` }),
        pick(rng, { id: 'jawab', prompt: 'Jadwal mana yang cocok?', answer: tm(h, m), wrong: [[tm(h - 12, m), 'salah-jam-24'], [tm(h - 10, m), 'salah-jam-24'], [tm(h + 1 > 23 ? h - 1 : h + 1, m), 'salah-jam-24']],
            error: 'salah-jam-24', hint: `Cari jadwal pukul ${h}.${String(m).padStart(2, '0')}.`, explain: `${h - 12}.${String(m).padStart(2, '0')} malam = ${tm(h, m)}.` }),
    ];
    return { text: `${nama} ingin naik kapal yang berangkat pukul ${h - 12}.${String(m).padStart(2, '0')} malam. Jadwal di pelabuhan memakai sistem 24 jam. Pukul berapa yang harus ${nama} cari?`, steps,
        conclusion: `Jadi ${nama} mencari jadwal pukul ${tm(h, m)}.` };
};

/** Lama waktu: jalan ke jam bulat, naik jam penuh, jalan sisa menit. */
const lamaWaktu: Generator = (rng, level) => {
    if (level === 1) {
        const h = rng.int(6, 20), m1 = menit5(rng, 25, 55), m2 = menit5(rng, 5, 40);
        const s = h * 60 + m1, e = (h + 1) * 60 + m2;
        const steps: Step[] = [
            num({ id: 'ke-bulat', prompt: `Dari ${t(s)} ke ${tm(h + 1, 0)}, berapa menit?`, answer: 60 - m1, suffix: 'menit', error: 'salah-hitung-waktu',
                hint: `${m1} + ? = 60`, explain: `${m1} + ${60 - m1} = 60, jadi ${60 - m1} menit.` }),
            num({ id: 'sisa', prompt: `Dari ${tm(h + 1, 0)} ke ${t(e)}, berapa menit?`, answer: m2, suffix: 'menit', error: 'salah-hitung-waktu', hint: 'Lihat angka menitnya.', explain: `${m2} menit.` }),
            num({ id: 'jawab', prompt: 'Jumlahkan. Berapa menit semuanya?', answer: e - s, suffix: 'menit', error: 'waktu-seperti-desimal',
                hint: `${60 - m1} + ${m2}`, explain: `${60 - m1} + ${m2} = ${e - s} menit.` }),
        ];
        return { text: `Les menggambar mulai pukul ${t(s)} dan selesai pukul ${t(e)}. Berapa menit lamanya?`, steps, conclusion: `Jadi lamanya ${e - s} menit.` };
    }
    const h1 = rng.int(6, level === 3 ? 18 : 17), m1 = menit5(rng, 5, 55);
    const hours = rng.int(1, 3);
    const h2 = h1 + hours + 1 > 23 ? h1 + hours : h1 + hours + 1;
    const m2 = until(() => menit5(rng, 0, 55), (x) => x < m1 || rng.chance(0.3));
    const s = h1 * 60 + m1, e = h2 * 60 + m2, d = e - s;
    const full = h2 - h1 - 1;
    const dec = [h2 - h1, m2 - m1]; // jawaban "seperti desimal"
    const wrong: [string, string][] = [];
    if (dec[1] < 0) wrong.push([`${dec[0] - 1} jam ${dec[1] + 100} menit`, 'waktu-seperti-desimal']);
    wrong.push([durasi(d + 60), 'salah-hitung-waktu'], [durasi(Math.max(5, d - 60)), 'salah-hitung-waktu'], [durasi(d + 10), 'salah-hitung-waktu']);
    const steps: Step[] = [];
    let text = `Film mulai pukul ${t(s)} dan selesai pukul ${t(e)}. Berapa lama film itu?`;
    if (level === 3) {
        const nama = rng.pick(NAMA);
        text = `${nama} mulai bermain di rumah nenek pukul ${t(s)}. Ia pulang pukul ${jam12(h2, m2)}. Berapa lama ${nama} di rumah nenek?`;
        steps.push(num({ id: 'ubah', prompt: `Ubah pukul ${jam12(h2, m2)} ke sistem 24 jam (jam.menit).`, answer: t(e), error: 'salah-jam-24',
            hint: h2 >= 13 ? 'Sudah lewat pukul 12 siang, tambah 12 pada angka jam.' : 'Belum lewat pukul 12 siang, angka jam tetap.', explain: `${jam12(h2, m2)} = ${t(e)}.` }));
    }
    steps.push(
        num({ id: 'ke-bulat', prompt: `Jalan ke jam bulat: dari ${t(s)} ke ${tm(h1 + 1, 0)}, berapa menit?`, answer: 60 - m1, suffix: 'menit', error: 'salah-hitung-waktu',
            hint: `${m1} + ? = 60`, explain: `${60 - m1} menit.` }),
        num({ id: 'jam-penuh', prompt: `Naik jam penuh: dari ${tm(h1 + 1, 0)} ke ${tm(h2, 0)}, berapa jam?`, answer: full, suffix: 'jam', error: 'salah-hitung-waktu',
            hint: `${h2} − ${h1 + 1}`, explain: `${full} jam.` }),
        num({ id: 'sisa', prompt: `Jalan sisa menit: dari ${tm(h2, 0)} ke ${t(e)}, berapa menit?`, answer: m2, suffix: 'menit', error: 'salah-hitung-waktu', hint: 'Lihat angka menitnya.', explain: `${m2} menit.` }),
        pick(rng, { id: 'jawab', prompt: 'Jumlahkan. Berapa lama semuanya?', answer: durasi(d), wrong, error: 'waktu-seperti-desimal',
            hint: `${full} jam + ${60 - m1} menit + ${m2} menit. Ingat 60 menit = 1 jam.`, explain: `${full} jam + ${60 - m1 + m2} menit = ${durasi(d)}. Cek: ${t(s)} + ${durasi(d)} = ${t(e)}.` }),
    );
    return { text, steps, conclusion: `Jadi lamanya ${durasi(d)}.` };
};

/** Mencari waktu selesai (maju) atau waktu mulai (mundur). */
const mulaiSelesai: Generator = (rng, level) => {
    const nama = rng.pick(NAMA);
    const arah = (maju: boolean) => fixed({ id: 'arah', prompt: 'Kita berjalan maju atau mundur di garis waktu?', options: ['maju', 'mundur'], answer: maju ? 'maju' : 'mundur', error: 'salah-arah-waktu',
        hint: maju ? 'Waktu mulai diketahui, kita cari waktu selesai.' : 'Waktu selesai diketahui, kita cari waktu mulai.', explain: maju ? 'Mencari waktu selesai: maju.' : 'Mencari waktu mulai: mundur dari waktu selesai.' });
    if (level === 1) {
        const h = rng.int(6, 20), m = menit5(rng, 20, 55);
        const dur = until(() => menit5(rng, 15, 55), (x) => m + x > 60);
        const s = h * 60 + m, e = s + dur;
        const steps: Step[] = [
            arah(true),
            num({ id: 'ke-bulat', prompt: `Dari ${t(s)} ke ${tm(h + 1, 0)} ada berapa menit?`, answer: 60 - m, suffix: 'menit', error: 'salah-hitung-waktu', hint: `${m} + ? = 60`, explain: `${60 - m} menit. Sisa ${dur} − ${60 - m} = ${dur - 60 + m} menit.` }),
            num({ id: 'jawab', prompt: `Maju lagi ${dur - 60 + m} menit dari ${tm(h + 1, 0)}. Pukul berapa? (jam.menit)`, answer: t(e), error: 'salah-hitung-waktu',
                hint: `${tm(h + 1, 0)} lewat ${dur - 60 + m} menit.`, explain: `${t(s)} + ${dur} menit = ${t(e)}.` }),
        ];
        return { text: `${nama} mulai mengerjakan PR pukul ${t(s)}. Ia belajar selama ${dur} menit. Pukul berapa ${nama} selesai?`, steps, conclusion: `Jadi ${nama} selesai pukul ${t(e)}.` };
    }
    const H = rng.int(1, 2), M = menit5(rng, 10, 55);
    const dur = H * 60 + M;
    if (level === 2) {
        const h = rng.int(6, 19), m = until(() => menit5(rng, 5, 55), (x) => x + M > 60);
        const s = h * 60 + m, e = s + dur, afterH = s + H * 60;
        const toBulat = 60 - (afterH % 60);
        const steps: Step[] = [
            arah(true),
            num({ id: 'jam-penuh', prompt: `Lompat jam penuh dulu: ${t(s)} + ${H} jam = ? (jam.menit)`, answer: t(afterH), error: 'salah-hitung-waktu', hint: `Tambah ${H} pada angka jam.`, explain: `${t(s)} + ${H} jam = ${t(afterH)}. Sisa ${M} menit.` }),
            num({ id: 'ke-bulat', prompt: `Dari ${t(afterH)} ke ${t(afterH + toBulat)}, berapa menit?`, answer: toBulat, suffix: 'menit', error: 'salah-hitung-waktu', hint: `${afterH % 60} + ? = 60`, explain: `${toBulat} menit. Sisa ${M} − ${toBulat} = ${M - toBulat} menit.` }),
            num({ id: 'jawab', prompt: `Maju ${M - toBulat} menit lagi. Pukul berapa? (jam.menit)`, answer: t(e), error: 'salah-hitung-waktu', hint: `${t(afterH + toBulat)} lewat ${M - toBulat} menit.`, explain: `Selesai pukul ${t(e)}.` }),
        ];
        return { text: `${nama} mulai belajar pukul ${t(s)}. Ia belajar selama ${durasi(dur)}. Pukul berapa ${nama} selesai?`, steps, conclusion: `Jadi ${nama} selesai pukul ${t(e)}.` };
    }
    const h = rng.int(8, 21), m = until(() => menit5(rng, 5, 50), (x) => x < M);
    const e = h * 60 + m, s = e - dur, backH = e - H * 60;
    const steps: Step[] = [
        arah(false),
        num({ id: 'jam-penuh', prompt: `Mundur jam penuh dulu: ${t(e)} − ${H} jam = ? (jam.menit)`, answer: t(backH), error: 'salah-arah-waktu', hint: `Kurangi ${H} dari angka jam.`, explain: `${t(e)} − ${H} jam = ${t(backH)}. Sisa mundur ${M} menit.` }),
        num({ id: 'ke-bulat', prompt: `Dari ${t(backH)} mundur ke ${t(backH - m)}, berapa menit?`, answer: m, suffix: 'menit', error: 'salah-hitung-waktu', hint: 'Lihat angka menitnya.', explain: `${m} menit. Sisa mundur ${M} − ${m} = ${M - m} menit.` }),
        num({ id: 'jawab', prompt: `Mundur ${M - m} menit lagi dari ${t(backH - m)}. Pukul berapa? (jam.menit)`, answer: t(s), error: 'salah-arah-waktu', hint: `60 − ${M - m} = ${60 - M + m}.`, explain: `Berangkat pukul ${t(s)}. Cek: ${t(s)} + ${durasi(dur)} = ${t(e)}.` }),
    ];
    return { text: `Bus ${nama} tiba di Denpasar pukul ${t(e)}. Perjalanannya ${durasi(dur)}. Pukul berapa bus itu berangkat?`, steps, conclusion: `Jadi bus berangkat pukul ${t(s)}.` };
};

/** Detik dan menit. */
const detik: Generator = (rng, level) => {
    const nama = rng.pick(NAMA);
    if (level === 1) {
        const a = rng.int(1, 4), b = rng.int(5, 55);
        const steps: Step[] = [
            num({ id: 'menit', prompt: `${a} menit = ? detik`, answer: a * 60, suffix: 'detik', error: 'salah-tukar-detik', hint: `1 menit = 60 detik. ${a} × 60.`, explain: `${a} menit = ${a * 60} detik.` }),
            num({ id: 'jawab', prompt: `${a * 60} detik + ${b} detik = ?`, answer: a * 60 + b, suffix: 'detik', error: 'salah-tukar-detik', hint: 'Jumlahkan.', explain: `${a} menit ${b} detik = ${a * 60 + b} detik.` }),
        ];
        return { text: `${nama} berlari mengelilingi lapangan selama ${a} menit ${b} detik. Berapa detik itu?`, steps, conclusion: `Jadi ${a} menit ${b} detik = ${a * 60 + b} detik.` };
    }
    if (level === 2) {
        const [n1, n2] = rng.shuffle(NAMA).slice(0, 2);
        const b = rng.int(2, 40);
        const x = until(() => rng.int(45, 99), (v) => v !== 60 + b && Math.abs(v - 60 - b) >= 3);
        const faster = x < 60 + b ? n1 : n2;
        const steps: Step[] = [
            num({ id: 'ubah', prompt: `Ubah waktu ${n2}: 1 menit ${b} detik = ? detik`, answer: 60 + b, suffix: 'detik', error: 'salah-tukar-detik', hint: '1 menit = 60 detik.', explain: `60 + ${b} = ${60 + b} detik.` }),
            fixed({ id: 'jawab', prompt: 'Siapa yang lebih cepat sampai?', options: [n1, n2], answer: faster, error: 'salah-banding-waktu',
                hint: 'Lebih cepat sampai berarti waktunya lebih sedikit.', explain: `${n1} ${x} detik, ${n2} ${60 + b} detik. ${faster} butuh waktu lebih sedikit.` }),
        ];
        return { text: `Dalam lomba lari, ${n1} sampai dalam ${x} detik. ${n2} sampai dalam 1 menit ${b} detik. Siapa yang lebih cepat?`, steps, conclusion: `Jadi ${faster} lebih cepat.` };
    }
    // tingkat 3: detik → menit dan detik
    const total = until(() => rng.int(70, 290), (v) => v % 60 !== 0 && v % 60 >= 5);
    const mm = Math.floor(total / 60), ss = total % 60;
    const steps: Step[] = [
        num({ id: 'menit', prompt: `Ada berapa kali 60 detik di dalam ${total} detik?`, answer: mm, suffix: 'menit', error: 'salah-tukar-detik', hint: `60, 120, 180, 240 … mana yang terbesar tapi tidak lebih dari ${total}?`, explain: `${mm} × 60 = ${mm * 60}.` }),
        num({ id: 'sisa', prompt: `Sisa detiknya? ${total} − ${mm * 60} = ?`, answer: ss, suffix: 'detik', error: 'salah-tukar-detik', hint: 'Kurangkan.', explain: `Sisa ${ss} detik.` }),
        pick(rng, { id: 'jawab', prompt: `Jadi ${total} detik = ...`, answer: `${mm} menit ${ss} detik`,
            wrong: [[`${Math.floor(total / 100)} menit ${total % 100} detik`, 'waktu-seperti-desimal'], [`${mm + 1} menit ${ss} detik`, 'salah-tukar-detik'], [`${mm} menit ${Math.abs(60 - ss)} detik`, 'salah-tukar-detik'], [`${mm - 1 > 0 ? mm - 1 : mm + 2} menit ${ss} detik`, 'salah-tukar-detik']],
            error: 'salah-tukar-detik', hint: '1 menit = 60 detik, bukan 100 detik.', explain: `${total} detik = ${mm} menit ${ss} detik.` }),
    ];
    return { text: `${nama} menyanyikan satu lagu selama ${total} detik. Berapa menit dan berapa detik itu?`, steps, conclusion: `Jadi ${total} detik = ${mm} menit ${ss} detik.` };
};

export const topic: TopicDef = {
    topic: 'sd3-10-waktu',
    skills: [
        { code: 'jam-24', name: 'Sistem 24 jam', gen: jam24 },
        { code: 'lama-waktu', name: 'Mencari lama waktu', gen: lamaWaktu },
        { code: 'mulai-selesai', name: 'Mencari waktu selesai atau waktu mulai', gen: mulaiSelesai },
        { code: 'detik-menit', name: 'Detik dan menit', gen: detik },
    ],
};
