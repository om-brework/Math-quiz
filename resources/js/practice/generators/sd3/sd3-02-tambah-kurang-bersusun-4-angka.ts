/* sd3-02 Penjumlahan dan pengurangan bersusun 4 angka, cek dengan operasi kebalikan, hitung cepat. */
import { fmt } from '../../format';
import type { Generator, Step, TopicDef, Visual } from '../../types';
import { NAMA, borrowsSub, carriesAdd, col, digitAt, fixed, num, pick, until } from './util';

/** Jumlah tanpa menyimpan (kesalahan khas "lupa simpan"). */
const noCarrySum = (a: number, b: number) => [0, 1, 2, 3].reduce((s, i) => s + ((digitAt(a, i) + digitAt(b, i)) % 10) * 10 ** i, 0);
/** Selisih per kolom dengan angka kecil dikurangi angka besar (kesalahan "kurang terbalik"). */
const flipSub = (a: number, b: number) => [0, 1, 2, 3].reduce((s, i) => s + Math.abs(digitAt(a, i) - digitAt(b, i)) * 10 ** i, 0);

const CERITA_TAMBAH = [
    (n: string, a: string, b: string) => `Perpustakaan sekolah ${n} punya ${a} buku. Lalu datang ${b} buku baru. Berapa buku semuanya?`,
    (n: string, a: string, b: string) => `Minggu lalu kelas ${n} mengumpulkan ${a} botol plastik. Minggu ini terkumpul ${b} botol. Berapa botol semuanya?`,
    (n: string, a: string, b: string) => `Pada hari Sabtu ada ${a} penonton di lapangan. Hari Minggu ada ${b} penonton. Berapa penonton pada kedua hari itu?`,
    (n: string, a: string, b: string) => `Kebun ${n} menghasilkan ${a} jeruk bulan ini dan ${b} jeruk bulan lalu. Berapa jeruk seluruhnya?`,
];
const SATUAN_TAMBAH = ['buku', 'botol', 'penonton', 'jeruk'];
const CERITA_KURANG = [
    (n: string, a: string, b: string) => `Perpustakaan punya ${a} buku. Sebanyak ${b} buku sedang dipinjam siswa. Berapa buku yang masih ada di rak?`,
    (n: string, a: string, b: string) => `Toko ${n} punya ${a} butir telur. Hari ini terjual ${b} butir. Berapa butir telur yang tersisa?`,
    (n: string, a: string, b: string) => `Jarak yang harus ditempuh ${n} dalam lomba sepeda ${a} m. Ia sudah menempuh ${b} m. Berapa meter lagi yang harus ditempuh?`,
    (n: string, a: string, b: string) => `Panitia mencetak ${a} tiket. Sudah terjual ${b} tiket. Berapa tiket yang belum terjual?`,
];
const SATUAN_KURANG = ['buku', 'butir', 'm', 'tiket'];

const tambahSusun: Generator = (rng, level) => {
    const [a, b] = level === 1
        ? until(() => [rng.int(1000, 6999), rng.int(100, 2999)], ([x, y]) => carriesAdd(x, y) === 1 && x + y <= 9999)
        : until(() => [rng.int(1000, 6999), rng.int(1000, 4999)], ([x, y]) => carriesAdd(x, y) >= 3 && x + y <= 9999);
    const s = a + b;
    const columnStep = col({ id: 'susun', prompt: 'Jumlahkan bersusun. Mulai dari satuan, simpan kalau 10 atau lebih.', op: '+', a, b,
        hint: 'Kalau jumlah satu kolom 10 atau lebih, tulis satuannya dan simpan 1 di kolom kiri.', explain: `${fmt(a)} + ${fmt(b)} = ${fmt(s)}.` });
    const cek = num({ id: 'cek', prompt: `Cek dengan pengurangan: ${fmt(s)} − ${fmt(b)} = ?`, answer: a, error: 'salah-operasi-kebalikan',
        hint: `Hasilnya harus sama dengan bilangan pertama, ${fmt(a)}? Hitung dulu, jangan menebak.`, explain: `${fmt(s)} − ${fmt(b)} = ${fmt(a)}, sama dengan bilangan pertama. Jawaban benar.` });
    if (level < 3) return { text: `Hitung $${fmt(a)} + ${fmt(b)}$.`, steps: [columnStep, cek], conclusion: `Jadi ${fmt(a)} + ${fmt(b)} = ${fmt(s)}.` };
    const k = rng.int(0, CERITA_TAMBAH.length - 1);
    const visual: Visual = { type: 'barModel', bars: [{ label: 'pertama', units: Math.max(1, Math.round(a / 1000)), known: fmt(a) }, { label: 'kedua', units: Math.max(1, Math.round(b / 1000)), known: fmt(b) }], total: '?' };
    const steps: Step[] = [
        pick(rng, { id: 'operasi', prompt: 'Hitungan apa yang dipakai?', answer: `${fmt(a)} + ${fmt(b)}`, wrong: [[`${fmt(a)} − ${fmt(b)}`, 'salah-pilih-operasi'], [`${fmt(b)} − ${fmt(a)}`, 'salah-pilih-operasi']],
            error: 'salah-pilih-operasi', hint: 'Dua bagian digabung menjadi semuanya.', explain: 'Mencari semuanya berarti menjumlahkan kedua bagian.' }),
        columnStep, cek,
        num({ id: 'jawab', prompt: 'Tulis jawabannya.', answer: s, suffix: SATUAN_TAMBAH[k], error: 'salah-fakta-tambah', hint: 'Pakai hasil hitung bersusun tadi.', explain: `Semuanya ${fmt(s)} ${SATUAN_TAMBAH[k]}.` }),
    ];
    return { text: CERITA_TAMBAH[k](rng.pick(NAMA), fmt(a), fmt(b)), visual, steps, conclusion: `Jadi semuanya ${fmt(s)} ${SATUAN_TAMBAH[k]}.` };
};

const kurangSusun: Generator = (rng, level) => {
    const [a, b] = level === 1
        ? until(() => [rng.int(2000, 9999), rng.int(100, 1999)], ([x, y]) => !String(x).includes('0') && borrowsSub(x, y) >= 1 && borrowsSub(x, y) <= 2 && x > y)
        : until(() => {
            const pat = rng.pick(['X00Y', 'X0Y0', 'X000', 'XY00', 'X0YZ']);
            const x = Number(pat.replace('X', String(rng.int(2, 9))).replace('Y', String(rng.int(1, 9))).replace('Z', String(rng.int(0, 9))));
            return [x, rng.int(level === 2 ? 100 : 1000, x - 100)];
        }, ([x, y]) => x > y && borrowsSub(x, y) >= 2 && y % 10 !== 0);
    const d = a - b;
    const zeros = String(a).slice(1).includes('0');
    const columnStep = col({ id: 'susun', prompt: 'Kurangkan bersusun. Mulai dari satuan, pinjam kalau angka atas lebih kecil.', op: '-', a, b,
        hint: zeros ? 'Kalau kolom kiri berisi 0, terus ke kiri sampai ada angka bukan 0. Setiap 0 yang dilewati menjadi 9.' : 'Kalau angka atas lebih kecil, pinjam 1 dari kolom kiri: kolom kiri berkurang 1, kolom ini bertambah 10.',
        explain: `${fmt(a)} − ${fmt(b)} = ${fmt(d)}.` });
    const cek = num({ id: 'cek', prompt: `Cek dengan penjumlahan: ${fmt(d)} + ${fmt(b)} = ?`, answer: a, error: 'salah-operasi-kebalikan',
        hint: 'Jumlahkan hasil pengurangan dengan bilangan yang dikurangkan.', explain: `${fmt(d)} + ${fmt(b)} = ${fmt(a)}, sama dengan bilangan awal. Jawaban benar.` });
    if (level < 3) return { text: `Hitung $${fmt(a)} - ${fmt(b)}$.`, steps: [columnStep, cek], conclusion: `Jadi ${fmt(a)} − ${fmt(b)} = ${fmt(d)}.` };
    const k = rng.int(0, CERITA_KURANG.length - 1);
    const visual: Visual = { type: 'barModel', bars: [{ label: 'semua', units: Math.max(2, Math.round(a / 1000)), known: fmt(a) }, { label: 'berkurang', units: Math.max(1, Math.min(Math.round(a / 1000) - 1, Math.round(b / 1000))), known: fmt(b) }], question: 'sisa = ?' };
    const steps: Step[] = [
        pick(rng, { id: 'operasi', prompt: 'Hitungan apa yang dipakai?', answer: `${fmt(a)} − ${fmt(b)}`, wrong: [[`${fmt(a)} + ${fmt(b)}`, 'salah-pilih-operasi'], [`${fmt(b)} − ${fmt(a)}`, 'kurang-terbalik']],
            error: 'salah-pilih-operasi', hint: '"Masih ada", "tersisa", "belum" berarti mencari sisa.', explain: `Sisa = semua − yang diambil = ${fmt(a)} − ${fmt(b)}.` }),
        columnStep, cek,
        num({ id: 'jawab', prompt: 'Tulis jawabannya.', answer: d, suffix: SATUAN_KURANG[k], error: 'salah-fakta-kurang', hint: 'Pakai hasil hitung bersusun tadi.', explain: `Sisanya ${fmt(d)} ${SATUAN_KURANG[k]}.` }),
    ];
    return { text: CERITA_KURANG[k](rng.pick(NAMA), fmt(a), fmt(b)), visual, steps, conclusion: `Jadi sisanya ${fmt(d)} ${SATUAN_KURANG[k]}.` };
};

/** Mengecek jawaban dengan operasi kebalikan, dan mencari bilangan yang hilang. */
const cekKebalikan: Generator = (rng, level) => {
    if (level <= 2) {
        const add = level === 1;
        const [a, b] = add
            ? until(() => [rng.int(1000, 6999), rng.int(1000, 2999)], ([x, y]) => carriesAdd(x, y) >= 2 && x + y <= 9999)
            : until(() => [rng.int(3000, 9999), rng.int(1000, 2999)], ([x, y]) => borrowsSub(x, y) >= 2 && x > y);
        const real = add ? a + b : a - b;
        const wrongVal = add ? noCarrySum(a, b) : flipSub(a, b);
        const shown = rng.chance(0.5) && wrongVal !== real ? wrongVal : real;
        const ok = shown === real;
        const op = add ? '+' : '−';
        // cek: penjumlahan dicek dengan pengurangan (hasil − b), pengurangan dicek dengan penjumlahan (hasil + b)
        const ckA = shown, ckB = b, ckOp = add ? '−' : '+';
        const ckRes = add ? shown - b : shown + b;
        const target = a;
        const steps: Step[] = [
            pick(rng, { id: 'pilih-cek', prompt: 'Hitungan apa yang dipakai untuk mengecek?', answer: `${fmt(ckA)} ${ckOp} ${fmt(ckB)}`,
                wrong: [[`${fmt(ckA)} ${op} ${fmt(ckB)}`, 'salah-operasi-kebalikan'], [`${fmt(a)} ${ckOp} ${fmt(b)}`, 'salah-operasi-kebalikan']],
                error: 'salah-operasi-kebalikan', hint: add ? 'Penjumlahan dicek dengan pengurangan: hasil dikurangi bilangan kedua.' : 'Pengurangan dicek dengan penjumlahan: hasil ditambah bilangan yang dikurangkan.',
                explain: `Kebalikan dari ${add ? 'penjumlahan adalah pengurangan' : 'pengurangan adalah penjumlahan'}: ${fmt(ckA)} ${ckOp} ${fmt(ckB)}.` }),
            ckRes >= 0
                ? col({ id: 'hitung-cek', prompt: `Hitung bersusun: ${fmt(ckA)} ${ckOp} ${fmt(ckB)}`, op: add ? '-' : '+', a: ckA, b: ckB,
                    hint: add ? 'Pinjam kalau angka atas lebih kecil.' : 'Simpan kalau jumlah kolom 10 atau lebih.', explain: `${fmt(ckA)} ${ckOp} ${fmt(ckB)} = ${fmt(ckRes)}.` })
                : num({ id: 'hitung-cek', prompt: `Hitung: ${fmt(ckA)} ${ckOp} ${fmt(ckB)}`, answer: ckRes, error: 'salah-fakta-kurang', hint: 'Hitung bersusun di kertas.', explain: `Hasilnya ${fmt(ckRes)}.` }),
            fixed({ id: 'benar', prompt: `Bandingkan hasil cek dengan ${fmt(target)}. Apakah ${fmt(a)} ${op} ${fmt(b)} = ${fmt(shown)} benar?`, options: ['benar', 'salah'], answer: ok ? 'benar' : 'salah',
                error: 'salah-operasi-kebalikan', hint: `Bandingkan hasil cek ${fmt(ckRes)} dengan ${fmt(target)}.`,
                explain: ok ? `${fmt(ckRes)} = ${fmt(target)}, jadi jawabannya benar.` : `${fmt(ckRes)} tidak sama dengan ${fmt(target)}, jadi jawabannya salah. Yang benar ${fmt(real)}.` }),
        ];
        return { text: `${rng.pick(NAMA)} menulis $${fmt(a)} ${add ? '+' : '-'} ${fmt(b)} = ${fmt(shown)}$. Cek jawabannya dengan operasi kebalikan.`, steps,
            conclusion: ok ? `Jadi jawaban ${fmt(shown)} benar.` : `Jadi jawaban ${fmt(shown)} salah. Yang benar ${fmt(a)} ${op} ${fmt(b)} = ${fmt(real)}.` };
    }
    // tingkat 3: bilangan yang hilang
    const form = rng.pick(['?+b', 'a-?', '?-b'] as const);
    const [x, y] = until(() => [rng.int(1000, 6999), rng.int(1000, 2999)], ([p, q]) => carriesAdd(p, q) >= 2 && p + q <= 9999);
    let text = '', op: '+' | '-' = '+', A = 0, B = 0, ans = 0, why = '';
    if (form === '?+b') { text = `? + ${fmt(y)} = ${fmt(x + y)}`; op = '-'; A = x + y; B = y; ans = x; why = 'Bilangan yang hilang = jumlah − bilangan yang diketahui.'; }
    else if (form === 'a-?') { text = `${fmt(x + y)} − ? = ${fmt(x)}`; op = '-'; A = x + y; B = x; ans = y; why = 'Yang dikurangkan = bilangan awal − hasil.'; }
    else { text = `? − ${fmt(y)} = ${fmt(x)}`; op = '+'; A = x; B = y; ans = x + y; why = 'Bilangan awal = hasil + yang dikurangkan.'; }
    const opText = op === '+' ? '+' : '−';
    const steps: Step[] = [
        pick(rng, { id: 'pilih', prompt: 'Hitungan apa untuk mencari bilangan yang hilang?', answer: `${fmt(A)} ${opText} ${fmt(B)}`,
            wrong: [[`${fmt(A)} ${op === '+' ? '−' : '+'} ${fmt(B)}`, 'salah-operasi-kebalikan'], [`${fmt(B)} − ${fmt(A)}`, 'salah-operasi-kebalikan']],
            error: 'salah-operasi-kebalikan', hint: why, explain: `${why} Jadi ${fmt(A)} ${opText} ${fmt(B)}.` }),
        col({ id: 'susun', prompt: `Hitung bersusun: ${fmt(A)} ${opText} ${fmt(B)}`, op, a: A, b: B, hint: op === '+' ? 'Simpan kalau jumlah kolom 10 atau lebih.' : 'Pinjam kalau angka atas lebih kecil.',
            explain: `${fmt(A)} ${opText} ${fmt(B)} = ${fmt(ans)}.` }),
        num({ id: 'cek', prompt: `Cek: masukkan ${fmt(ans)} ke tempat tanda tanya. ${text.replace('?', fmt(ans)).split('=')[0].trim()} = ?`,
            answer: form === '?+b' ? x + y : x, error: op === '+' ? 'salah-fakta-kurang' : 'salah-fakta-tambah',
            hint: 'Hitung kalimat itu. Hasilnya harus sama dengan angka di sebelah kanan tanda =.', explain: 'Hasilnya cocok, jadi bilangan yang hilang benar.' }),
    ];
    return { text: `Cari bilangan yang hilang: $${text.replace('?', '\\square').replace('−', '-')}$`, steps, conclusion: `Jadi bilangan yang hilang adalah ${fmt(ans)}.` };
};

/** Hitung cepat dua bilangan 2 angka: bulatkan, hitung, betulkan. */
const hitungCepat: Generator = (rng, level) => {
    const add = level === 1 ? true : level === 2 ? false : rng.chance(0.5);
    const down = level === 3 && rng.chance(0.5);
    const b = until(() => rng.int(11, level === 1 ? 69 : add ? 89 : 79), (y) => (down ? [1, 2].includes(y % 10) : [7, 8, 9].includes(y % 10)));
    const R = down ? b - (b % 10) : b + 10 - (b % 10);
    const k = Math.abs(R - b);
    const a = until(() => rng.int(21, 99), (x) => (add ? (level === 1 ? x + b < 100 : true) && x % 10 !== 0 : x - b >= 15 && (down || x % 10 < b % 10)));
    const mid = add ? a + R : a - R;
    const res = add ? a + b : a - b;
    // tambah dibulatkan naik → kebanyakan → kurangi; kurang dibulatkan naik → terlalu banyak dikurangi → tambah
    const fixAdd = add ? down : !down;
    const opText = add ? '+' : '−';
    const steps: Step[] = [
        num({ id: 'bulat', prompt: `Bulatkan ${b} ke puluhan terdekat.`, answer: R, error: 'salah-pembulatan',
            hint: `${b} ada di antara ${b - (b % 10)} dan ${b - (b % 10) + 10}. Mana yang lebih dekat?`, explain: `${b} dekat dengan ${R}.` }),
        num({ id: 'hitung', prompt: `Hitung ${a} ${opText} ${R}.`, answer: mid, error: add ? 'salah-fakta-tambah' : 'salah-fakta-kurang',
            hint: `Cukup ubah angka puluhan: ${opText === '+' ? 'tambah' : 'kurangi'} ${R / 10} puluhan.`, explain: `${a} ${opText} ${R} = ${mid}.` }),
        fixed({ id: 'betulkan', prompt: `Tadi kita memakai ${R}, bukan ${b}. Lalu harus bagaimana?`, options: [`kurangi ${k}`, `tambah ${k}`], answer: `${fixAdd ? 'tambah' : 'kurangi'} ${k}`,
            error: 'salah-arah-pembulatan', distractorErrors: { [`${fixAdd ? 'kurangi' : 'tambah'} ${k}`]: 'salah-arah-pembulatan' },
            hint: add ? `Kita ${R > b ? 'menambah terlalu banyak' : 'menambah terlalu sedikit'}.` : `Kita ${R > b ? 'mengurangi terlalu banyak' : 'mengurangi terlalu sedikit'}.`,
            explain: `${R} ${R > b ? 'lebih' : 'kurang'} ${k} dari ${b}, jadi hasilnya harus di${fixAdd ? 'tambah' : 'kurangi'} ${k}.` }),
        num({ id: 'jawab', prompt: `Jadi ${a} ${opText} ${b} = ?`, answer: res, error: 'salah-arah-pembulatan',
            hint: `${mid} ${fixAdd ? '+' : '−'} ${k}.`, explain: `${mid} ${fixAdd ? '+' : '−'} ${k} = ${res}. Cek: ${add ? `${res} − ${b} = ${a}` : `${res} + ${b} = ${a}`}.` }),
    ];
    const nama = rng.pick(NAMA);
    const text = level < 3 ? `Hitung di kepala: ${a} ${opText} ${b}`
        : add ? `${nama} punya ${a} kelereng. Kakaknya memberi ${b} kelereng lagi. Berapa kelereng ${nama} sekarang? Hitung di kepala.`
            : `${nama} punya ${a} kelereng. Sebanyak ${b} kelereng diberikan kepada adiknya. Berapa kelereng yang tersisa? Hitung di kepala.`;
    return { text, steps, conclusion: level < 3 ? `Jadi ${a} ${opText} ${b} = ${res}.` : `${a} ${opText} ${b} = ${res}. Jadi ${add ? 'sekarang ada' : 'tersisa'} ${res} kelereng.` };
};

export const topic: TopicDef = {
    topic: 'sd3-02-tambah-kurang-bersusun-4-angka',
    skills: [
        { code: 'tambah-susun', name: 'Penjumlahan bersusun sampai 4 angka', gen: tambahSusun },
        { code: 'kurang-susun', name: 'Pengurangan bersusun dan meminjam melewati nol', gen: kurangSusun },
        { code: 'cek-kebalikan', name: 'Cek jawaban dengan operasi kebalikan', gen: cekKebalikan },
        { code: 'hitung-cepat', name: 'Hitung cepat dua bilangan 2 angka', gen: hitungCepat },
    ],
};
