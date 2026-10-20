/* sd1-09 Membaca Jam: kelipatan 5 menit, pagi/siang/sore/malam (am/pm), singkatan j dan mnt, lamanya 1 jam dan setengah jam. */
import type { Generator, Step, TopicDef } from '../../types';
import { NAMA, pilihan, pilihanTetap } from './common';

const mm = (m: number) => String(m).padStart(2, '0');
const jam = (h: number, m: number) => `${h}.${mm(m)}`;
const next = (h: number) => (h % 12) + 1;
/** angka yang ditunjuk jarum panjang */
const angkaMenit = (m: number) => (m === 0 ? 12 : m / 5);

/** Membaca jam analog: siput (jarum pendek) lalu kelinci (jarum panjang). */
const baca: Generator = (rng, level) => {
    const h = rng.int(1, 12);
    const m = level === 1 ? rng.pick([0, 30]) : level === 2 ? rng.pick([5, 10, 15, 20, 25]) : rng.pick([35, 40, 45, 50, 55]);
    const pos = angkaMenit(m);
    const wrong: [string, string][] = [
        [`pukul ${jam(next(h), m)}`, 'salah-baca-jarum-pendek'],
        [`pukul ${h}.${mm(pos)}`, 'menit-tidak-loncat-5'],
        [`pukul ${pos}.${mm((h * 5) % 60)}`, 'tertukar-jarum-jam'],
    ];
    if (m < 10 && m > 0) wrong.unshift([`pukul ${h}.${m}`, 'salah-tulis-menit']);
    const steps: Step[] = [
        { kind: 'number', id: 'jam', prompt: 'Baca siput (jarum pendek). Jam berapa?', answer: String(h), suffix: 'jam',
          hint: m === 0 ? 'Jarum pendek tepat di sebuah angka.' : 'Lihat angka yang sudah dilewati jarum pendek, bukan angka sesudahnya.',
          explain: m === 0 ? `Jarum pendek tepat di ${h}.` : `Jarum pendek sudah lewat ${h}, belum sampai ${next(h)}. Jamnya ${h}.`, error: m >= 30 ? 'salah-baca-jarum-pendek' : 'tertukar-jarum-jam' },
        { kind: 'number', id: 'angka-panjang', prompt: 'Kelinci (jarum panjang) menunjuk angka berapa?', answer: String(pos),
          hint: 'Jarum panjang adalah jarum yang lebih panjang.', explain: `Jarum panjang di angka ${pos}.`, error: 'tertukar-jarum-jam' },
        { kind: 'number', id: 'menit', prompt: `Hitung loncat 5 sampai angka ${pos}. Berapa menit?`, answer: String(m), suffix: 'menit',
          hint: pos === 12 ? 'Jarum panjang di 12 artinya tepat, 0 menit.' : `5, 10, 15, … sebanyak ${pos} loncatan.`,
          explain: pos === 12 ? 'Di 12 berarti 0 menit (tepat).' : `${Array.from({ length: pos }, (_, i) => 5 * (i + 1)).join(', ')}. Jadi ${m} menit.`, error: 'menit-tidak-loncat-5' },
        { kind: 'choice', id: 'tulis', prompt: 'Tulis waktunya.', ...pilihan(rng, `pukul ${jam(h, m)}`, wrong),
          hint: 'Tulis jam, titik, lalu menit dengan dua angka.', explain: `${h} jam lewat ${m} menit ditulis pukul ${jam(h, m)}.`, error: 'salah-tulis-menit' },
    ];
    return { text: level === 3 ? 'Pukul berapa? Hati-hati, jarum pendek sudah dekat ke angka berikutnya.' : 'Pukul berapa jam ini?', visual: { type: 'clock', hour: h, minute: m }, steps,
        conclusion: `Jadi jam menunjukkan pukul ${jam(h, m)}.` };
};

type Bagian = 'pagi' | 'siang' | 'sore' | 'malam';
const KEGIATAN: { k: string; b: Bagian; h: number[] }[] = [
    { k: 'bangun tidur', b: 'pagi', h: [5, 6] },
    { k: 'berangkat sekolah', b: 'pagi', h: [6, 7] },
    { k: 'senam di sekolah', b: 'pagi', h: [7, 8] },
    { k: 'menjemput adik di TK', b: 'siang', h: [12, 1] },
    { k: 'pulang sekolah', b: 'siang', h: [12, 1] },
    { k: 'bermain layang-layang', b: 'sore', h: [4, 5] },
    { k: 'bersepeda di taman', b: 'sore', h: [4, 5] },
    { k: 'menonton kartun sesudah tidur siang', b: 'sore', h: [3, 4] },
    { k: 'makan bersama keluarga sesudah magrib', b: 'malam', h: [7, 8] },
    { k: 'belajar sebelum tidur', b: 'malam', h: [7, 8] },
    { k: 'menggosok gigi sebelum tidur', b: 'malam', h: [8, 9] },
];
const MATAHARI: Record<Bagian, string> = { pagi: 'baru terbit', siang: 'tinggi di atas', sore: 'mulai turun, belum gelap', malam: 'sudah terbenam' };
const BAGIAN: Bagian[] = ['pagi', 'siang', 'sore', 'malam'];
const isAm = (b: Bagian, h: number) => b === 'pagi' && h !== 12;

/** Pagi, siang, sore, malam, serta am dan pm. */
const bagianHari: Generator = (rng, level) => {
    const keg = rng.pick(KEGIATAN);
    const nama = rng.pick(NAMA);
    const h = rng.pick(keg.h);
    const m = level === 1 ? 0 : rng.pick([0, 15, 30, 45]);
    const am = isAm(keg.b, h);
    const tag = am ? 'am' : 'pm';
    if (level === 1) {
        const steps: Step[] = [
            { kind: 'choice', id: 'matahari', prompt: `Saat ${nama} ${keg.k}, matahari …`, ...pilihanTetap(MATAHARI[keg.b], BAGIAN.map((b) => MATAHARI[b])),
              hint: 'Bayangkan langit saat kegiatan itu.', explain: `Saat ${keg.k}, matahari ${MATAHARI[keg.b]}.`, error: 'salah-pagi-siang-malam' },
            { kind: 'choice', id: 'bagian', prompt: 'Jadi itu terjadi pada …', ...pilihanTetap(keg.b, BAGIAN),
              hint: 'Pagi: matahari terbit. Siang: tengah hari. Sore: sebelum gelap. Malam: sesudah matahari terbenam.', explain: `${keg.k[0].toUpperCase() + keg.k.slice(1)} terjadi pada ${keg.b} hari.`, error: 'salah-pagi-siang-malam' },
        ];
        return { text: `${nama} ${keg.k} pukul ${jam(h, m)}. Pagi, siang, sore, atau malam?`, steps, conclusion: `Jadi ${nama} ${keg.k} pukul ${jam(h, m)} ${keg.b}.` };
    }
    const steps: Step[] = [];
    if (level === 3) {
        steps.push({ kind: 'number', id: 'jam', prompt: 'Baca jamnya dulu. Jarum pendek menunjuk jam berapa?', answer: String(h), suffix: 'jam',
            hint: 'Lihat angka yang sudah dilewati jarum pendek.', explain: `Jamnya ${h}, pukul ${jam(h, m)}.`, error: 'salah-baca-jarum-pendek' });
        steps.push({ kind: 'choice', id: 'bagian', prompt: `${nama} sedang ${keg.k}. Itu pagi, siang, sore, atau malam?`, ...pilihanTetap(keg.b, BAGIAN),
            hint: 'Pikirkan kapan kegiatan itu biasanya dilakukan.', explain: `${keg.k[0].toUpperCase() + keg.k.slice(1)} pada ${keg.b} hari.`, error: 'salah-pagi-siang-malam' });
    }
    steps.push(
        { kind: 'choice', id: 'tengah-hari', prompt: 'Sebelum atau sesudah tengah hari (pukul 12 siang)?', ...pilihanTetap(am ? 'sebelum tengah hari' : 'sesudah tengah hari', ['sebelum tengah hari', 'sesudah tengah hari']),
          hint: 'Pagi sebelum tengah hari. Siang (mulai pukul 12), sore, dan malam sesudahnya.', explain: am ? `Pukul ${jam(h, m)} ${keg.b} masih sebelum tengah hari.` : `Pukul ${jam(h, m)} ${keg.b} sudah sesudah tengah hari.`, error: 'tertukar-am-pm' },
        { kind: 'choice', id: 'ampm', prompt: 'Tulis dengan am atau pm.', ...pilihanTetap(`${jam(h, m)} ${tag}`, [`${jam(h, m)} am`, `${jam(h, m)} pm`], { [`${jam(h, m)} ${am ? 'pm' : 'am'}`]: 'tertukar-am-pm' }),
          hint: 'am: sebelum tengah hari. pm: sesudah tengah hari.', explain: `${am ? 'Sebelum' : 'Sesudah'} tengah hari ditulis ${tag}.`, error: 'tertukar-am-pm' },
    );
    return { text: level === 3 ? `Jam ini menunjukkan waktu ${nama} ${keg.k}. Tulis waktunya dengan am atau pm.` : `${nama} ${keg.k} pukul ${jam(h, m)} ${keg.b}. Tulis dengan am atau pm.`,
        visual: level === 3 ? { type: 'clock', hour: h, minute: m } : undefined, steps, conclusion: `Jadi pukul ${jam(h, m)} ${keg.b} ditulis ${jam(h, m)} ${tag}.` };
};

const SATU = 'satu putaran penuh (60 menit)';
const SETENGAH = 'setengah putaran (30 menit)';

/** Lamanya 1 jam dan setengah jam; singkatan j dan mnt. */
const lama: Generator = (rng, level) => {
    const nama = rng.pick(NAMA);
    const keg = rng.pick(['les menggambar', 'latihan menari', 'bermain sepak bola', 'mengaji', 'les berenang', 'membaca di perpustakaan']);
    const h = rng.int(1, 12);
    let m: number, satuJam: boolean;
    if (level === 1) { m = 0; satuJam = true; }
    else if (level === 2) { satuJam = rng.chance(0.5); m = satuJam ? rng.pick([15, 30, 45]) : 0; }
    else { satuJam = rng.chance(0.3); m = satuJam ? rng.pick([10, 20, 40, 50]) : rng.pick([30, 35, 40, 45]); }
    const tot = m + (satuJam ? 60 : 30);
    const h2 = tot >= 60 ? next(h) : h, m2 = tot % 60;
    const pakaiSingkatan = rng.chance(0.5);
    const lamaTeks = satuJam ? (pakaiSingkatan ? '1 j' : '1 jam') : (pakaiSingkatan ? '30 mnt' : 'setengah jam');
    const steps: Step[] = [];
    if (pakaiSingkatan) {
        steps.push({ kind: 'number', id: 'singkatan', prompt: `"${lamaTeks}" artinya berapa menit?`, answer: satuJam ? '60' : '30', suffix: 'menit',
            hint: '"j" adalah jam, "mnt" adalah menit. 1 jam = 60 menit.', explain: satuJam ? '1 j = 1 jam = 60 menit.' : '30 mnt = 30 menit = setengah jam.', error: 'salah-singkatan-waktu' });
    }
    steps.push({ kind: 'choice', id: 'putaran', prompt: `Selama ${lamaTeks}, kelinci (jarum panjang) berlari …`, ...pilihanTetap(satuJam ? SATU : SETENGAH, [SATU, SETENGAH], { [satuJam ? SETENGAH : SATU]: 'salah-lama-waktu' }),
        hint: '1 jam = satu putaran penuh. Setengah jam = dari 12 ke 6.', explain: satuJam ? 'Satu putaran penuh, kelinci kembali ke angka yang sama.' : 'Setengah putaran = 30 menit.', error: 'salah-lama-waktu' });
    steps.push({ kind: 'number', id: 'menit', prompt: 'Menit selesai berapa?', answer: String(m2), suffix: 'menit',
        hint: satuJam ? 'Kelinci kembali ke tempat semula, menit tidak berubah.' : `${m} + 30 = ${m + 30}.${m + 30 >= 60 ? ' Lewat 60 berarti jam berganti; kurangi 60.' : ''}`,
        explain: satuJam ? `Menit tetap ${m2}.` : m + 30 >= 60 ? `${m} + 30 = ${m + 30} = 60 + ${m2}. Menit menjadi ${m2}, jam maju 1.` : `${m} + 30 = ${m2}.`, error: 'salah-lama-waktu' });
    if (level === 3 || satuJam) {
        steps.push({ kind: 'number', id: 'jam', prompt: 'Jam selesai berapa?', answer: String(h2), suffix: 'jam',
            hint: h2 !== h ? 'Kelinci melewati angka 12, jadi siput maju satu angka.' : 'Kelinci belum melewati 12, jadi jamnya tetap.',
            explain: h2 !== h ? `Jam ${h} maju menjadi ${h2}.` : `Jam tetap ${h}.`, error: 'salah-baca-jarum-pendek' });
    }
    const benar = `pukul ${jam(h2, m2)}`;
    steps.push({ kind: 'choice', id: 'selesai', prompt: 'Jadi selesai pukul berapa?',
        ...pilihan(rng, benar, [[`pukul ${jam(h, m2)}`, 'salah-baca-jarum-pendek'], [`pukul ${jam(next(h2), m2)}`, 'salah-lama-waktu'], [`pukul ${jam(satuJam ? h : next(h), (m + (satuJam ? 30 : 0)) % 60)}`, 'salah-lama-waktu'], [`pukul ${h2}.${m2}`, 'salah-tulis-menit']]),
        hint: 'Gabungkan jam dan menit selesai.', explain: `Mulai pukul ${jam(h, m)}, ditambah ${lamaTeks}, selesai pukul ${jam(h2, m2)}.`, error: 'salah-lama-waktu' });
    return { text: `${nama} mulai ${keg} pukul ${jam(h, m)}. Kegiatan itu berlangsung ${lamaTeks}. Pukul berapa selesai?`, visual: { type: 'clock', hour: h, minute: m }, steps,
        conclusion: `Jadi ${keg} selesai pukul ${jam(h2, m2)}.` };
};

export const topic: TopicDef = {
    topic: 'sd1-09-waktu',
    skills: [
        { code: 'baca-jam', name: 'Membaca jam sampai 5 menit', gen: baca },
        { code: 'pagi-siang-malam', name: 'Pagi, siang, sore, malam (am dan pm)', gen: bagianHari },
        { code: 'lama-waktu', name: 'Lamanya 1 jam dan setengah jam', gen: lama },
    ],
};
