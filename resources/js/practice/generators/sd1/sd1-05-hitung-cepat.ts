/* sd1-05 Hitung Cepat: membuat 10, dobel, mengurangi lewat 10, tambah/kurang satuan dan puluhan. */
import type { Generator, Step, TopicDef } from '../../types';
import { NAMA, pilihan, pilihanTetap, pul, sat } from './common';

/** Membuat 10: penuhi rak dulu, lalu tambah sisanya. */
const buat10: Generator = (rng, level) => {
    let x: number, y: number;
    do {
        x = level === 1 ? rng.int(8, 9) : rng.int(6, level === 2 ? 8 : 9);
        y = rng.int(level === 3 ? 2 : 3, x);
    } while (x + y <= 10 || x === y);
    // tingkat 3: bilangan kecil ditulis duluan; anak harus memilih rak yang dipenuhi
    const [p, q] = level === 3 ? [y, x] : rng.chance(0.5) ? [x, y] : [y, x];
    const big = Math.max(p, q), small = Math.min(p, q);
    const butuh = 10 - big, sisa = small - butuh, total = p + q;
    const steps: Step[] = [];
    if (level === 3) {
        steps.push({ kind: 'choice', id: 'pilih-rak', prompt: 'Rak mana yang lebih mudah dipenuhi dulu?', ...pilihanTetap(String(big), [String(p), String(q)], { [String(small)]: 'salah-pecah-bilangan' }),
            hint: 'Bilangan yang lebih dekat ke 10 butuh lebih sedikit.', explain: `${big} hanya butuh ${butuh} untuk menjadi 10.`, error: 'salah-pecah-bilangan' });
    }
    steps.push(
        { kind: 'number', id: 'butuh', prompt: `Rak berisi ${big}. Butuh berapa lagi supaya penuh (10)?`, answer: String(butuh),
          hint: `Pasangan 10 dari ${big}.`, explain: `${big} + ${butuh} = 10.`, error: 'salah-pasangan-sepuluh' },
        { kind: 'number', id: 'pecah', prompt: `Pecah ${small} menjadi ${butuh} dan …`, answer: String(sisa),
          hint: `${butuh} + ? = ${small}`, explain: `${small} = ${butuh} + ${sisa}.`, error: 'salah-pecah-bilangan' },
        { kind: 'number', id: 'hasil', prompt: `Penuhi rak, lalu tambah sisanya: 10 + ${sisa} = ?`, answer: String(total),
          hint: '10 ditambah satuan menjadi belasan.', explain: `${big} + ${butuh} = 10, lalu 10 + ${sisa} = ${total}. Cek: ${total} − ${small} = ${big}.`, error: 'salah-fakta-tambah' },
    );
    const nama = rng.pick(NAMA);
    const text = rng.chance(0.5)
        ? `Hitung di kepala dengan membuat 10: ${p} + ${q} = …`
        : `${nama} punya dua rak telur. Rak pertama berisi ${p} telur, rak kedua berisi ${q} telur. Berapa semua telurnya? Hitung dengan membuat 10.`;
    return { text, steps, conclusion: `Jadi ${p} + ${q} = ${total}.` };
};

/** Dobel dan hampir dobel. */
const dobel: Generator = (rng, level) => {
    const d = rng.int(level === 1 ? 2 : level === 2 ? 4 : 3, level === 1 ? 6 : 9);
    const besarDulu = rng.chance(0.5);
    const [p, q] = besarDulu ? [d + 1, d] : [d, d + 1];
    const total = 2 * d + 1;
    if (level === 3) {
        // mulai dari dobel bilangan yang lebih besar: harus dikurangi 1
        const D = d + 1;
        const steps: Step[] = [
            { kind: 'number', id: 'dobel', prompt: `Pakai dobel ${D}: ${D} + ${D} = ?`, answer: String(2 * D),
              hint: `Dobel artinya ditambah dirinya sendiri.`, explain: `${D} + ${D} = ${2 * D}.`, error: 'salah-fakta-tambah' },
            { kind: 'choice', id: 'sesuaikan', prompt: `${p} + ${q} itu 1 lebih sedikit atau 1 lebih banyak dari ${D} + ${D}?`,
              ...pilihanTetap('1 lebih sedikit', ['1 lebih sedikit', '1 lebih banyak'], { '1 lebih banyak': 'salah-sesuaikan-dobel' }),
              hint: `${d} adalah ${D} − 1.`, explain: `Salah satu bilangan ${d}, yaitu ${D} − 1. Jadi hasilnya 1 lebih sedikit.`, error: 'salah-sesuaikan-dobel' },
            { kind: 'number', id: 'hasil', prompt: `${2 * D} − 1 = ?`, answer: String(total),
              hint: `Mundur 1 dari ${2 * D}.`, explain: `${p} + ${q} = ${2 * D} − 1 = ${total}. Cek dengan dobel ${d}: ${2 * d} + 1 = ${total}.`, error: 'salah-sesuaikan-dobel' },
        ];
        const nama = rng.pick(NAMA);
        const text = rng.chance(0.5)
            ? `Hitung di kepala memakai dobel ${D}: ${p} + ${q} = …`
            : `${nama} punya ${p} kue di piring dan ${q} kue di kotak. Hitung semua kuenya memakai dobel ${D}.`;
        return { text, steps, conclusion: `Jadi ${p} + ${q} = ${total}.` };
    }
    if (level === 1 && rng.chance(0.4)) {
        const steps: Step[] = [
            { kind: 'number', id: 'loncat', prompt: `Dobel ${d} artinya ${d} + ${d}. Mulai dari ${d}, bilang maju ${d} kali. Sampai berapa?`, answer: String(2 * d),
              hint: `Dari ${d}: ${d + 1}, ${d + 2}, … sebanyak ${d} kali.`, explain: `${d} + ${d} = ${2 * d}.`, error: 'salah-fakta-tambah' },
            { kind: 'number', id: 'dobel-lagi', prompt: `Kalau ${d} + ${d} = ${2 * d}, berapa ${d} + ${d + 1}?`, answer: String(total),
              hint: `${d + 1} adalah 1 lebih dari ${d}.`, explain: `${d} + ${d + 1} = ${2 * d} + 1 = ${total}.`, error: 'salah-sesuaikan-dobel' },
        ];
        return { text: `Hitung dobel ${d}, lalu pakai untuk ${d} + ${d + 1}.`, steps, conclusion: `Jadi ${d} + ${d} = ${2 * d} dan ${d} + ${d + 1} = ${total}.`,
            visual: { type: 'objects', item: 'kue', count: 2 * d, group: d } };
    }
    const steps: Step[] = [
        { kind: 'choice', id: 'pilih-dobel', prompt: 'Cari dobel terdekat dari bilangan yang lebih kecil.', ...pilihan(rng, `${d} + ${d}`, [[`${d + 1} + ${d + 1}`, 'salah-sesuaikan-dobel'], [`${d - 1} + ${d - 1}`, 'salah-sesuaikan-dobel']]),
          hint: `Bilangan yang lebih kecil adalah ${d}.`, explain: `Dobel ${d} adalah ${d} + ${d}.`, error: 'salah-sesuaikan-dobel' },
        { kind: 'number', id: 'dobel', prompt: `${d} + ${d} = ?`, answer: String(2 * d), hint: `Dobel ${d}.`, explain: `${d} + ${d} = ${2 * d}.`, error: 'salah-fakta-tambah' },
        { kind: 'number', id: 'hasil', prompt: `${d + 1} = ${d} + 1, jadi tambah 1: ${2 * d} + 1 = ?`, answer: String(total),
          hint: `Maju 1 dari ${2 * d}.`, explain: `${p} + ${q} = ${2 * d} + 1 = ${total}.`, error: 'salah-sesuaikan-dobel' },
    ];
    return { text: `Hitung di kepala dengan hampir dobel: ${p} + ${q} = …`, steps, conclusion: `Jadi ${p} + ${q} = ${total}.` };
};

/** Mengurangi lewat 10: turun ke 10 dulu, lalu ambil sisanya. */
const kurang10: Generator = (rng, level) => {
    let a: number, b: number;
    do { a = rng.int(11, level === 1 ? 14 : 18); b = rng.int(level === 1 ? 2 : 3, 9); } while (sat(a) >= b || a - b < 1);
    const turun = sat(a), lagi = b - turun, hasil = a - b;
    const nama = rng.pick(NAMA);
    const benda = rng.pick(['telur', 'jambu', 'kue', 'kelereng']);
    const text = level === 3
        ? `${nama} punya ${a} ${benda}. Sebanyak ${b} ${benda} diberikan kepada tetangga. Berapa ${benda} yang tersisa? Hitung di kepala.`
        : `Hitung di kepala dengan turun ke 10: ${a} − ${b} = …`;
    const steps: Step[] = [
        { kind: 'number', id: 'turun', prompt: `Turun ke 10 dulu. ${a} − ? = 10`, answer: String(turun),
          hint: `Ambil semua satuan dari ${a}.`, explain: `${a} − ${turun} = 10. Tinggal 1 rak penuh.`, error: 'salah-pecah-bilangan' },
        { kind: 'number', id: 'lagi', prompt: `${b} = ${turun} + ?  Masih harus diambil berapa lagi?`, answer: String(lagi),
          hint: `${turun} + ? = ${b}`, explain: `${b} = ${turun} + ${lagi}. Masih ada ${lagi} yang harus diambil.`, error: 'lupa-sisa-ambil' },
        { kind: 'number', id: 'hasil', prompt: `Ambil sisanya: 10 − ${lagi} = ?`, answer: String(hasil), ...(level === 3 ? { suffix: benda } : {}),
          hint: `Pasangan 10 dari ${lagi}.`, explain: `10 − ${lagi} = ${hasil}. Cek: ${hasil} + ${b} = ${a}.`, error: 'salah-fakta-kurang' },
    ];
    return { text, steps, conclusion: `Jadi ${a} − ${b} = ${hasil}.`, visual: level === 1 ? { type: 'objects', item: 'bola', count: a, group: 10, crossed: b } : undefined };
};

const UBAH_SAT = 'Satuan saja (puluhan tetap)';
const UBAH_PUL = 'Puluhan saja (satuan tetap)';

/** Bilangan dua angka ditambah/dikurangi satuan atau puluhan tanpa menyimpan/meminjam. */
const satuanPuluhan: Generator = (rng, level) => {
    const plus = level === 1 ? true : level === 2 ? false : true;
    const satuan = rng.chance(0.5);
    let a: number, b: number;
    if (satuan) {
        do { a = rng.int(21, 98); b = rng.int(1, 9); } while (plus ? sat(a) + b > 9 : sat(a) < b);
    } else {
        do { a = rng.int(12, 89); b = rng.int(1, 8) * 10; } while (plus ? a + b > 99 : a - b < 10);
    }
    const one = (x: number, y: number, op: '+' | '−', isSat: boolean, prefix: string, last: boolean): Step[] => {
        const r = op === '+' ? x + y : x - y;
        return [
            { kind: 'choice', id: `${prefix}tempat`, prompt: `${x} ${op} ${y}: tempat mana yang berubah?`, ...pilihanTetap(isSat ? UBAH_SAT : UBAH_PUL, [UBAH_SAT, UBAH_PUL]),
              hint: isSat ? `${y} adalah satuan (telur lepas).` : `${y} adalah ${y / 10} puluhan (rak penuh).`, explain: isSat ? 'Yang berubah hanya satuan.' : 'Yang berubah hanya puluhan.', error: 'ubah-tempat-salah' },
            isSat
                ? { kind: 'number', id: `${prefix}hitung`, prompt: `Satuan: ${sat(x)} ${op} ${y} = ?`, answer: String(op === '+' ? sat(x) + y : sat(x) - y),
                    hint: 'Hitung satuannya saja.', explain: `Satuan menjadi ${sat(r)}, puluhan tetap ${pul(x)}.`, error: op === '+' ? 'salah-fakta-tambah' : 'salah-fakta-kurang' }
                : { kind: 'number', id: `${prefix}hitung`, prompt: `Puluhan: ${pul(x)} ${op} ${y / 10} = ?`, answer: String(op === '+' ? pul(x) + y / 10 : pul(x) - y / 10),
                    hint: 'Hitung puluhannya saja.', explain: `Puluhan menjadi ${pul(r)}, satuan tetap ${sat(x)}.`, error: op === '+' ? 'salah-fakta-tambah' : 'salah-fakta-kurang' },
            { kind: 'number', id: `${prefix}hasil`, prompt: last ? `Jadi ${x} ${op} ${y} = ?` : `Hasil sementara: ${x} ${op} ${y} = ?`, answer: String(r),
              hint: 'Gabungkan puluhan dan satuan yang baru.', explain: `${x} ${op} ${y} = ${r}.`, error: 'ubah-tempat-salah' },
        ];
    };
    if (level === 3) {
        // cerita dua kejadian: dapat puluhan, lalu memberi satuan
        let s: number, p: number, c: number;
        do { s = rng.int(21, 69); p = rng.int(1, 3) * 10; c = rng.int(1, 8); } while (s + p > 99 || sat(s + p) < c);
        const mid = s + p, end = mid - c;
        const nama = rng.pick(NAMA);
        const steps: Step[] = [
            { kind: 'number', id: 'dapat', prompt: `Tambah puluhan: ${s} + ${p} = ?`, answer: String(mid),
              hint: `Satuan tetap ${sat(s)}. Puluhan ${pul(s)} + ${p / 10}.`, explain: `${s} + ${p} = ${mid}.`, error: 'ubah-tempat-salah' },
            { kind: 'number', id: 'satuan', prompt: `Kurangi satuan: satuan ${sat(mid)} − ${c} = ?`, answer: String(sat(mid) - c),
              hint: `Puluhan tetap ${pul(mid)}.`, explain: `Satuan menjadi ${sat(mid) - c}.`, error: 'salah-fakta-kurang' },
            { kind: 'number', id: 'hasil', prompt: `Jadi berapa stiker ${nama} sekarang?`, answer: String(end), suffix: 'stiker',
              hint: `${pul(mid)} puluhan dan ${sat(mid) - c} satuan.`, explain: `${mid} − ${c} = ${end}. Cek mundur: ${end} + ${c} = ${mid}, ${mid} − ${p} = ${s}.`, error: 'ubah-tempat-salah' },
        ];
        return { text: `${nama} punya ${s} stiker. Kakak memberinya ${p} stiker. Lalu ${nama} memberi ${c} stiker kepada adiknya. Berapa stiker ${nama} sekarang?`, steps,
            conclusion: `Jadi stiker ${nama} sekarang ${end}.` };
    }
    const op = plus ? '+' : '−';
    return { text: `Hitung di kepala: ${a} ${op} ${b} = …`, steps: one(a, b, op, satuan, '', true), conclusion: `Jadi ${a} ${op} ${b} = ${plus ? a + b : a - b}.`,
        visual: { type: 'base10', tens: pul(a), ones: sat(a) } };
};

export const topic: TopicDef = {
    topic: 'sd1-05-hitung-cepat',
    skills: [
        { code: 'membuat-10', name: 'Membuat 10', gen: buat10 },
        { code: 'dobel', name: 'Dobel dan hampir dobel', gen: dobel },
        { code: 'kurang-lewat-10', name: 'Mengurangi lewat 10', gen: kurang10 },
        { code: 'satuan-puluhan', name: 'Menambah dan mengurangi satuan atau puluhan', gen: satuanPuluhan },
    ],
};
