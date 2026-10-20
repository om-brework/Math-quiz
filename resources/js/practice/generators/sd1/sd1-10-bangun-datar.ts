/* sd1-10 Bangun Datar: mengenali, menggolongkan, menyusun dari potongan, menyalin pada kertas berpetak. */
import type { ErrorCode, Generator, ShapeName, Step, TopicDef } from '../../types';
import { NAMA, berbeda, pilihan, pilihanTetap } from './common';

interface Info { nama: string; lurus: number; lengkung: number; pojok: number }
const INFO: Record<ShapeName, Info> = {
    persegi: { nama: 'persegi', lurus: 4, lengkung: 0, pojok: 4 },
    'persegi-panjang': { nama: 'persegi panjang', lurus: 4, lengkung: 0, pojok: 4 },
    segitiga: { nama: 'segitiga', lurus: 3, lengkung: 0, pojok: 3 },
    lingkaran: { nama: 'lingkaran', lurus: 0, lengkung: 1, pojok: 0 },
    'setengah-lingkaran': { nama: 'setengah lingkaran', lurus: 1, lengkung: 1, pojok: 2 },
    'seperempat-lingkaran': { nama: 'seperempat lingkaran', lurus: 2, lengkung: 1, pojok: 3 },
};
const SEMUA = Object.keys(INFO) as ShapeName[];
const WARNA = ['merah', 'biru', 'kuning', 'hijau', 'oranye', 'ungu'];

/** Pengecoh nama bangun dengan kode kesalahan yang sesuai. */
function pengecohNama(s: ShapeName): [string, ErrorCode][] {
    const out: [string, ErrorCode][] = [];
    if (s === 'persegi') out.push(['persegi panjang', 'tertukar-persegi-persegi-panjang']);
    if (s === 'persegi-panjang') out.push(['persegi', 'tertukar-persegi-persegi-panjang']);
    if (s === 'setengah-lingkaran') out.push(['lingkaran', 'lupa-sisi-lurus-lengkung'], ['seperempat lingkaran', 'tertukar-bagian-lingkaran']);
    if (s === 'seperempat-lingkaran') out.push(['segitiga', 'lupa-sisi-lurus-lengkung'], ['setengah lingkaran', 'tertukar-bagian-lingkaran']);
    if (s === 'lingkaran') out.push(['setengah lingkaran', 'tertukar-bagian-lingkaran']);
    if (s === 'segitiga') out.push(['seperempat lingkaran', 'lupa-sisi-lurus-lengkung']);
    for (const o of SEMUA) if (o !== s) out.push([INFO[o].nama, 'salah-kenali-bangun']);
    return out;
}

const BENDA: { k: string; s: ShapeName }[] = [
    { k: 'ubin lantai yang keempat sisinya sama panjang', s: 'persegi' },
    { k: 'sapu tangan yang keempat sisinya sama panjang', s: 'persegi' },
    { k: 'pintu kelas', s: 'persegi-panjang' },
    { k: 'buku tulis', s: 'persegi-panjang' },
    { k: 'papan tulis', s: 'persegi-panjang' },
    { k: 'koin', s: 'lingkaran' },
    { k: 'tutup toples', s: 'lingkaran' },
    { k: 'jam dinding', s: 'lingkaran' },
    { k: 'roti tawar yang dipotong dari pojok ke pojok (satu potong)', s: 'segitiga' },
    { k: 'rambu peringatan di jalan', s: 'segitiga' },
    { k: 'kue bolu bundar yang dipotong dua sama besar (satu potong)', s: 'setengah-lingkaran' },
    { k: 'kipas lipat yang dibuka setengah putaran', s: 'setengah-lingkaran' },
    { k: 'kue bolu bundar yang dipotong empat sama besar (satu potong)', s: 'seperempat-lingkaran' },
];

const TEKA: Record<ShapeName, string> = {
    persegi: 'Aku punya 4 sisi lurus yang sama panjang dan 4 pojok.',
    'persegi-panjang': 'Aku punya 4 sisi lurus: dua sisi panjang dan dua sisi pendek. Pojokku 4.',
    segitiga: 'Aku punya 3 sisi lurus dan 3 pojok.',
    lingkaran: 'Aku bulat. Aku tidak punya sisi lurus dan tidak punya pojok.',
    'setengah-lingkaran': 'Aku punya 1 sisi lurus, 1 sisi lengkung, dan 2 pojok.',
    'seperempat-lingkaran': 'Aku punya 2 sisi lurus, 1 sisi lengkung, dan 3 pojok.',
};

const ADA_LENGKUNG = 'ada sisi lengkung';
const SEMUA_LURUS = 'semua sisi lurus';

/** Mengenali bangun dari sisi dan pojoknya. */
const kenali: Generator = (rng, level) => {
    if (level === 3) {
        const s = rng.pick(SEMUA);
        const inf = INFO[s];
        const steps: Step[] = [
            { kind: 'choice', id: 'lengkung', prompt: 'Apakah aku punya sisi lengkung?', ...pilihanTetap(inf.lengkung ? ADA_LENGKUNG : SEMUA_LURUS, [ADA_LENGKUNG, SEMUA_LURUS]),
              hint: 'Baca lagi petunjuknya. Adakah kata "lengkung" atau "bulat"?', explain: inf.lengkung ? 'Aku punya sisi lengkung, seperti tepi kue bolu.' : 'Semua sisiku lurus.', error: 'lupa-sisi-lurus-lengkung' },
            { kind: 'number', id: 'pojok', prompt: 'Berapa pojokku?', answer: String(inf.pojok),
              hint: 'Pojok adalah tempat dua sisi bertemu.', explain: `Aku punya ${inf.pojok} pojok.`, error: 'salah-hitung-pojok' },
            { kind: 'choice', id: 'nama', prompt: 'Siapakah aku?', ...pilihan(rng, inf.nama, pengecohNama(s)),
              hint: 'Cocokkan sisi lurus, sisi lengkung, dan pojok dengan tabel bangun.', explain: `${TEKA[s]} Itu ${inf.nama}.`, error: 'salah-kenali-bangun' },
        ];
        return { text: `Tebak bangun! ${TEKA[s]} Siapakah aku?`, steps, conclusion: `Jawabannya ${inf.nama}.` };
    }
    if (level === 2) {
        const b = rng.pick(BENDA);
        const inf = INFO[b.s];
        const steps: Step[] = [
            { kind: 'choice', id: 'sisi', prompt: `Lihat tepi ${b.k.split(' yang')[0]}. Sisinya …`, ...pilihanTetap(inf.lengkung ? ADA_LENGKUNG : SEMUA_LURUS, [ADA_LENGKUNG, SEMUA_LURUS]),
              hint: 'Bayangkan meraba tepinya. Lurus seperti penggaris, atau melengkung?', explain: inf.lengkung ? 'Tepinya ada yang melengkung.' : 'Semua tepinya lurus.', error: 'lupa-sisi-lurus-lengkung' },
            { kind: 'number', id: 'pojok', prompt: 'Berapa pojoknya?', answer: String(inf.pojok),
              hint: 'Hitung tempat dua sisi bertemu.', explain: `Ada ${inf.pojok} pojok.`, error: 'salah-hitung-pojok' },
            { kind: 'choice', id: 'nama', prompt: 'Cocokkan dengan bangun datar. Bentuknya …', ...pilihan(rng, inf.nama, pengecohNama(b.s)),
              hint: inf.lurus === 4 ? 'Cek: apakah keempat sisinya sama panjang?' : 'Cocokkan sisi dan pojok dengan tabel bangun.', explain: `${b.k[0].toUpperCase() + b.k.slice(1)} berbentuk ${inf.nama}.`, error: 'salah-kenali-bangun' },
        ];
        return { text: `Apa bentuk ${b.k}?`, steps, conclusion: `Jadi ${b.k.split(' (')[0]} berbentuk ${inf.nama}.` };
    }
    const s = rng.pick(SEMUA);
    const inf = INFO[s];
    const rotate = rng.pick([0, 0, 45, 90, 180]);
    const steps: Step[] = [
        { kind: 'number', id: 'lurus', prompt: 'Hitung sisi lurusnya.', answer: String(inf.lurus),
          hint: 'Sisi lurus seperti garis penggaris. Tepi yang melengkung tidak dihitung.', explain: `Ada ${inf.lurus} sisi lurus${inf.lengkung ? ' dan 1 sisi lengkung' : ''}.`, error: 'salah-hitung-sisi' },
        { kind: 'number', id: 'pojok', prompt: 'Hitung pojoknya.', answer: String(inf.pojok),
          hint: 'Pojok adalah tempat dua sisi bertemu.', explain: `Ada ${inf.pojok} pojok.`, error: 'salah-hitung-pojok' },
        { kind: 'choice', id: 'nama', prompt: 'Apa nama bangun ini?', ...pilihan(rng, inf.nama, pengecohNama(s)),
          hint: s === 'persegi' || s === 'persegi-panjang' ? 'Cek: apakah keempat sisinya sama panjang?' : 'Cocokkan sisi dan pojok dengan tabel bangun.',
          explain: `${inf.lurus} sisi lurus, ${inf.lengkung} sisi lengkung, ${inf.pojok} pojok: ${inf.nama}.${rotate ? ' Bangun yang diputar tetap sama namanya.' : ''}`, error: 'salah-kenali-bangun' },
    ];
    return { text: 'Lihat bangun ini. Apa namanya?', visual: { type: 'shapes', items: [{ shape: s, color: rng.pick(WARNA), size: 'big', rotate }] }, steps,
        conclusion: `Jadi bangun ini ${inf.nama}.` };
};

/** Menggolongkan bangun dalam satu deret. */
const golongkan: Generator = (rng, level) => {
    const n = rng.int(6, 8);
    let items: ShapeName[];
    do items = Array.from({ length: n }, () => rng.pick(SEMUA)); while (new Set(items).size < 4);
    const visual = { type: 'shapes' as const, items: items.map((s) => ({ shape: s, color: rng.pick(WARNA), size: rng.pick(['small', 'big'] as const), rotate: rng.pick([0, 0, 90, 180]) })) };
    if (level === 1) {
        const target = rng.pick(items);
        const c = items.filter((x) => x === target).length;
        const inf = INFO[target];
        const steps: Step[] = [
            { kind: 'number', id: 'ciri', prompt: `Ingat ciri ${inf.nama}. Berapa pojoknya?`, answer: String(inf.pojok),
              hint: 'Pojok adalah tempat dua sisi bertemu.', explain: `${inf.nama[0].toUpperCase() + inf.nama.slice(1)}: ${inf.lurus} sisi lurus, ${inf.lengkung} sisi lengkung, ${inf.pojok} pojok.`, error: 'salah-hitung-pojok' },
            { kind: 'number', id: 'hitung', prompt: `Tunjuk satu per satu. Ada berapa ${inf.nama}?`, answer: String(c),
              hint: 'Besar, kecil, atau diputar, namanya tetap sama.', explain: `Ada ${c} ${inf.nama}.`, error: target === 'persegi' || target === 'persegi-panjang' ? 'tertukar-persegi-persegi-panjang' : 'salah-golongkan-bangun' },
        ];
        return { text: `Berapa ${inf.nama} pada gambar?`, visual, steps, conclusion: `Jadi ada ${c} ${inf.nama}.` };
    }
    if (level === 2) {
        const lengkung = items.filter((x) => INFO[x].lengkung).length, lurus = n - lengkung;
        const tanya = rng.chance(0.5);
        const GRUP_L = 'lingkaran, setengah lingkaran, seperempat lingkaran', GRUP_S = 'persegi, persegi panjang, segitiga';
        const steps: Step[] = [
            { kind: 'choice', id: 'kelompok', prompt: 'Bangun apa saja yang punya sisi lengkung?', ...pilihanTetap(GRUP_L, [GRUP_L, GRUP_S, 'lingkaran saja'], { [GRUP_S]: 'salah-golongkan-bangun', 'lingkaran saja': 'lupa-sisi-lurus-lengkung' }),
              hint: 'Setengah dan seperempat lingkaran juga punya tepi bolu yang melengkung.', explain: `Sisi lengkung: ${GRUP_L}.`, error: 'lupa-sisi-lurus-lengkung' },
            { kind: 'number', id: tanya ? 'lurus' : 'lengkung', prompt: `Berapa bangun yang ${tanya ? 'semua sisinya lurus' : 'punya sisi lengkung'}?`, answer: String(tanya ? lurus : lengkung),
              hint: 'Periksa setiap bangun, lalu coret yang sudah dihitung.', explain: `${lengkung} bangun bersisi lengkung, ${lurus} bangun bersisi lurus semua. Cek: ${lengkung} + ${lurus} = ${n}.`, error: 'salah-golongkan-bangun' },
        ];
        return { text: `Kelompokkan bangun-bangun ini. Berapa bangun yang ${tanya ? 'semua sisinya lurus' : 'punya sisi lengkung'}?`, visual, steps,
            conclusion: `Jadi ada ${tanya ? lurus : lengkung} bangun yang ${tanya ? 'semua sisinya lurus' : 'punya sisi lengkung'}.` };
    }
    // tingkat 3: menggolongkan menurut banyak pojok (jebakan: segitiga dan seperempat lingkaran sama-sama 3 pojok)
    const p = rng.pick([3, 4]);
    const cocok = SEMUA.filter((s) => INFO[s].pojok === p);
    // pastikan kedua bangun yang cocok muncul, supaya jebakannya terasa
    if (!items.includes(cocok[0])) items[0] = cocok[0];
    if (!items.includes(cocok[1])) items[n - 1] = cocok[1];
    visual.items = items.map((s, i) => ({ ...visual.items[i], shape: s }));
    const c = items.filter((x) => INFO[x].pojok === p).length;
    const grupBenar = cocok.map((s) => INFO[s].nama).join(' dan ');
    const steps: Step[] = [
        { kind: 'choice', id: 'kelompok', prompt: `Bangun apa saja yang punya ${p} pojok?`,
          ...pilihan(rng, grupBenar, [[INFO[cocok[0]].nama + ' saja', 'salah-hitung-pojok'], [p === 3 ? 'segitiga dan setengah lingkaran' : 'persegi dan segitiga', 'salah-hitung-pojok'], [p === 3 ? 'persegi dan persegi panjang' : 'segitiga dan seperempat lingkaran', 'salah-hitung-pojok']]),
          hint: p === 3 ? 'Seperempat lingkaran punya 2 sisi lurus dan 1 sisi lengkung. Hitung pojoknya.' : 'Persegi dan persegi panjang sama-sama punya 4 sisi.', explain: `${grupBenar} punya ${p} pojok.`, error: 'salah-hitung-pojok' },
        { kind: 'number', id: 'hitung', prompt: `Berapa bangun pada gambar yang punya ${p} pojok?`, answer: String(c),
          hint: `Hitung semua ${grupBenar}.`, explain: `${cocok.map((s) => `${items.filter((x) => x === s).length} ${INFO[s].nama}`).join(' + ')} = ${c}.`, error: 'salah-golongkan-bangun' },
    ];
    return { text: `Berapa bangun yang punya tepat ${p} pojok?`, visual, steps, conclusion: `Jadi ada ${c} bangun yang punya ${p} pojok.` };
};

interface Susun { potong: ShapeName; n: number; hasil: string; hasilShape?: ShapeName }
const SUSUN: Susun[] = [
    { potong: 'setengah-lingkaran', n: 2, hasil: 'lingkaran' },
    { potong: 'seperempat-lingkaran', n: 4, hasil: 'lingkaran' },
    { potong: 'seperempat-lingkaran', n: 2, hasil: 'setengah lingkaran' },
    { potong: 'segitiga', n: 2, hasil: 'persegi' },
    { potong: 'persegi', n: 2, hasil: 'persegi panjang' },
];

/** Menyusun bangun dari potongan. */
const susun: Generator = (rng, level) => {
    if (level === 1) {
        const x = rng.pick(SUSUN);
        const steps: Step[] = [
            { kind: 'choice', id: 'potongan', prompt: 'Potongan ini bentuknya apa?', ...pilihan(rng, INFO[x.potong].nama, pengecohNama(x.potong)),
              hint: 'Hitung sisi lurus, sisi lengkung, dan pojoknya.', explain: `Potongannya ${INFO[x.potong].nama}.`, error: 'salah-kenali-bangun' },
            { kind: 'choice', id: 'hasil', prompt: `${x.n} potongan sama besar ditempel. Menjadi bangun apa?`,
              ...pilihan(rng, x.hasil, ['lingkaran', 'setengah lingkaran', 'persegi', 'persegi panjang', 'segitiga'].filter((h) => h !== x.hasil).map((h) => [h, 'salah-susun-potongan'] as [string, string])),
              hint: x.potong === 'segitiga' ? 'Ingat roti tawar yang dipotong dari pojok ke pojok.' : x.potong === 'persegi' ? 'Dua ubin persegi ditempel berdampingan.' : 'Ingat potongan kue bolu bundar.',
              explain: `${x.n} ${INFO[x.potong].nama} sama besar membentuk ${x.hasil}.`, error: 'salah-susun-potongan' },
        ];
        const color = rng.pick(WARNA);
        return { text: `Ada ${x.n} potongan seperti ini. Kalau ditempel, menjadi bangun apa?`, visual: { type: 'shapes', items: Array.from({ length: x.n }, (_, i) => ({ shape: x.potong, color, rotate: (i * (x.potong === 'seperempat-lingkaran' ? 90 : 180)) % 360 })) }, steps,
            conclusion: `Jadi ${x.n} ${INFO[x.potong].nama} menjadi ${x.hasil}.` };
    }
    if (level === 2) {
        const x = rng.pick(SUSUN);
        const bagian = x.n === 4 ? 'seperempat (1 dari 4 bagian)' : 'setengah (1 dari 2 bagian)';
        const steps: Step[] = [
            { kind: 'choice', id: 'bagian', prompt: `Satu ${INFO[x.potong].nama} adalah berapa bagian dari ${x.hasil}?`,
              ...pilihanTetap(bagian, ['setengah (1 dari 2 bagian)', 'seperempat (1 dari 4 bagian)'], { [x.n === 4 ? 'setengah (1 dari 2 bagian)' : 'seperempat (1 dari 4 bagian)']: 'tertukar-bagian-lingkaran' }),
              hint: 'Bayangkan memotong bangun itu menjadi bagian sama besar.', explain: `${INFO[x.potong].nama[0].toUpperCase() + INFO[x.potong].nama.slice(1)} adalah ${bagian} dari ${x.hasil}.`, error: 'tertukar-bagian-lingkaran' },
            { kind: 'number', id: 'banyak', prompt: `Jadi berapa ${INFO[x.potong].nama} untuk membuat 1 ${x.hasil}?`, answer: String(x.n),
              hint: 'Potongan harus sama besar dan menutup seluruh bangun.', explain: `${x.n} potongan sama besar membentuk 1 ${x.hasil}.`, error: 'salah-susun-potongan' },
        ];
        return { text: `Berapa ${INFO[x.potong].nama} sama besar yang dibutuhkan untuk membuat 1 ${x.hasil}?`, visual: { type: 'shape', shape: x.potong, color: rng.pick(WARNA) }, steps,
            conclusion: `Jadi butuh ${x.n} ${INFO[x.potong].nama}.` };
    }
    // tingkat 3: soal cerita, beberapa kue dipotong
    const x = rng.pick(SUSUN.filter((s) => s.hasil === 'lingkaran' || s.potong === 'segitiga'));
    const k = rng.int(2, x.n === 4 ? 5 : 9);
    const kue = x.potong === 'segitiga' ? 'roti tawar persegi' : 'kue bolu bundar';
    const cara = x.potong === 'segitiga' ? 'dari pojok ke pojok menjadi 2 potong' : `menjadi ${x.n} potong sama besar`;
    const nama = rng.pick(NAMA);
    const steps: Step[] = [
        { kind: 'choice', id: 'bentuk', prompt: 'Setiap potong berbentuk apa?', ...pilihan(rng, INFO[x.potong].nama, pengecohNama(x.potong)),
          hint: x.potong === 'segitiga' ? 'Roti persegi dipotong dari pojok ke pojok.' : `Lingkaran dibagi ${x.n} sama besar.`, explain: `Setiap potong berbentuk ${INFO[x.potong].nama}.`, error: 'tertukar-bagian-lingkaran' },
        { kind: 'number', id: 'per-kue', prompt: `Satu ${kue} menjadi berapa potong?`, answer: String(x.n),
          hint: 'Baca lagi cara memotongnya.', explain: `Satu ${kue} menjadi ${x.n} potong.`, error: 'salah-susun-potongan' },
        { kind: 'number', id: 'total', prompt: `Ada ${k} ${kue}. Hitung loncat ${x.n}. Berapa potong semuanya?`, answer: String(k * x.n), suffix: 'potong',
          hint: `${x.n}, ${2 * x.n}, … sebanyak ${k} kali.`, explain: `${Array.from({ length: k }, (_, i) => x.n * (i + 1)).join(', ')}. Ada ${k * x.n} potong.`, error: 'salah-hitung-loncat' },
    ];
    return { text: `Ibu ${nama} memotong ${k} ${kue}. Setiap ${kue} dipotong ${cara}. Bentuk apa setiap potong? Berapa potong semuanya?`, steps,
        conclusion: `Setiap potong berbentuk ${INFO[x.potong].nama}. Semuanya ada ${k * x.n} potong.` };
};

/** Menyalin persegi dan persegi panjang pada kertas berpetak. */
const salin: Generator = (rng, level) => {
    let w: number, h: number;
    if (rng.chance(0.3)) w = h = rng.int(2, 6);
    else [w, h] = berbeda(rng, 2, 2, 7);
    const nama = INFO[w === h ? 'persegi' : 'persegi-panjang'].nama;
    const visual = { type: 'grid' as const, width: w, height: h, showDims: false };
    const namaStep: Step = { kind: 'choice', id: 'nama', prompt: 'Bangun apa yang kamu salin?', ...pilihanTetap(nama, ['persegi', 'persegi panjang'], { [nama === 'persegi' ? 'persegi panjang' : 'persegi']: 'tertukar-persegi-persegi-panjang' }),
        hint: 'Bandingkan sisi atas dan sisi kiri. Sama panjang atau tidak?', explain: w === h ? `Semua sisi ${w} kotak, jadi persegi.` : `Sisi atas ${w} kotak, sisi kiri ${h} kotak. Tidak sama, jadi persegi panjang.`, error: 'tertukar-persegi-persegi-panjang' };
    if (level === 2) {
        const steps: Step[] = [
            { kind: 'number', id: 'kanan', prompt: 'Mulai di pojok kiri atas. Gambar sisi atas: ke kanan berapa kotak?', answer: String(w), suffix: 'kotak',
              hint: 'Hitung kotak di sepanjang sisi atas.', explain: `Ke kanan ${w} kotak.`, error: 'hitung-titik-bukan-jarak' },
            { kind: 'number', id: 'bawah', prompt: 'Gambar sisi kanan: ke bawah berapa kotak?', answer: String(h), suffix: 'kotak',
              hint: 'Hitung kotak di sepanjang sisi kanan.', explain: `Ke bawah ${h} kotak.`, error: 'hitung-titik-bukan-jarak' },
            { kind: 'number', id: 'kiri', prompt: 'Gambar sisi bawah: ke kiri berapa kotak?', answer: String(w), suffix: 'kotak',
              hint: 'Sisi bawah sama panjang dengan sisi atas.', explain: `Ke kiri ${w} kotak, sama dengan sisi atas.`, error: 'salah-salin-bangun' },
            { kind: 'number', id: 'atas', prompt: 'Gambar sisi kiri sampai kembali ke pojok awal: ke atas berapa kotak?', answer: String(h), suffix: 'kotak',
              hint: 'Sisi kiri sama panjang dengan sisi kanan.', explain: `Ke atas ${h} kotak. Kembali ke pojok awal. Ada 4 pojok.`, error: 'salah-salin-bangun' },
        ];
        return { text: `Salin ${nama} ini di kertas berpetak. Ikuti sisinya satu per satu.`, visual, steps, conclusion: `Jadi ${nama} ini ${w} kotak kali ${h} kotak.` };
    }
    if (level === 3) {
        const anak = rng.pick(NAMA);
        const steps: Step[] = [
            { kind: 'choice', id: 'cara', prompt: 'Saat menyalin, yang dihitung adalah …', ...pilihanTetap('lompatan antar titik', ['banyak titik', 'lompatan antar titik'], { 'banyak titik': 'hitung-titik-bukan-jarak' }),
              hint: 'Sisi 1 kotak punya 2 titik di ujungnya, tetapi hanya 1 lompatan.', explain: `${anak} menghitung titik. Yang benar menghitung lompatan, jadi selalu 1 lebih sedikit dari banyak titik.`, error: 'hitung-titik-bukan-jarak' },
            { kind: 'number', id: 'atas', prompt: `Sisi atas punya ${w + 1} titik. Berapa kotak panjangnya?`, answer: String(w), suffix: 'kotak',
              hint: `${w + 1} titik, lompatannya 1 lebih sedikit.`, explain: `${w + 1} − 1 = ${w} kotak.`, error: 'hitung-titik-bukan-jarak' },
            { kind: 'number', id: 'kiri', prompt: `Sisi kiri punya ${h + 1} titik. Berapa kotak panjangnya?`, answer: String(h), suffix: 'kotak',
              hint: `${h + 1} titik, lompatannya 1 lebih sedikit.`, explain: `${h + 1} − 1 = ${h} kotak.`, error: 'hitung-titik-bukan-jarak' },
            namaStep,
        ];
        return { text: `${anak} menyalin bangun ini. Ia bilang sisi atasnya ${w + 1} kotak karena ada ${w + 1} titik. Bantu ${anak} menghitung dengan benar.`, visual, steps,
            conclusion: `Sisi atas ${w} kotak dan sisi kiri ${h} kotak. Bangunnya ${nama}.` };
    }
    const steps: Step[] = [
        { kind: 'number', id: 'atas', prompt: 'Hitung sisi atas. Berapa kotak?', answer: String(w), suffix: 'kotak',
          hint: 'Hitung kotak di sepanjang sisi atas, bukan garisnya.', explain: `Sisi atas ${w} kotak.`, error: 'hitung-titik-bukan-jarak' },
        { kind: 'number', id: 'kiri', prompt: 'Hitung sisi kiri. Berapa kotak?', answer: String(h), suffix: 'kotak',
          hint: 'Hitung kotak di sepanjang sisi kiri.', explain: `Sisi kiri ${h} kotak.`, error: 'hitung-titik-bukan-jarak' },
        namaStep,
    ];
    return { text: 'Kamu akan menyalin bangun ini di kertas berpetak. Hitung dulu sisinya.', visual, steps, conclusion: `Bangun ini ${nama}, ${w} kotak kali ${h} kotak.` };
};

export const topic: TopicDef = {
    topic: 'sd1-10-bangun-datar',
    skills: [
        { code: 'kenali-bangun', name: 'Mengenali bangun datar', gen: kenali },
        { code: 'golongkan-bangun', name: 'Menggolongkan bangun datar', gen: golongkan },
        { code: 'susun-potongan', name: 'Menyusun bangun dari potongan', gen: susun },
        { code: 'salin-berpetak', name: 'Menyalin bangun di kertas berpetak', gen: salin },
    ],
};
