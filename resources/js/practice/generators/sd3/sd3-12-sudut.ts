/* sd3-12 Sudut: titik dan kaki sudut, sudut siku-siku, lebih besar/kecil dari siku-siku, sudut di sekitar kita. */
import type { Generator, Rng, Step, TopicDef } from '../../types';
import { NAMA, fixed, num, pick } from './util';

const KECIL = 'lebih kecil dari siku-siku', SIKU = 'siku-siku', BESAR = 'lebih besar dari siku-siku';
const jenis = (deg: number) => (deg < 90 ? KECIL : deg === 90 ? SIKU : BESAR);
const ALAT = ['tersembunyi di bawah alat', 'tepat menempel sisi alat', 'berada di luar alat'];
const alatUntuk = (j: string) => (j === KECIL ? ALAT[0] : j === SIKU ? ALAT[1] : ALAT[2]);

const banding = (rng: Rng, j: string, explain: string, hint = 'Bandingkan dengan pojok buku. Gunting yang terbuka sedikit: lebih kecil. Terbuka lebar: lebih besar.'): Step =>
    pick(rng, { id: 'jawab', prompt: 'Jadi sudut ini ...', answer: j, wrong: [KECIL, SIKU, BESAR].filter((x) => x !== j).map((x) => [x, 'salah-banding-siku'] as [string, string]),
        error: 'salah-banding-siku', hint, explain });

/** Membandingkan sudut dengan siku-siku memakai alat siku kertas. */
const bandingSiku: Generator = (rng, level) => {
    if (level < 3) {
        const r = rng.int(0, 2);
        const deg = r === 1 ? 90 : r === 0 ? (level === 1 ? rng.int(25, 60) : rng.int(68, 84)) : (level === 1 ? rng.int(120, 160) : rng.int(96, 112));
        const j = jenis(deg);
        const steps: Step[] = [
            pick(rng, { id: 'alat', prompt: 'Tempelkan pojok alat siku di titik sudut dan satu sisi alat di satu kaki. Kaki yang lain ...', answer: alatUntuk(j),
                wrong: ALAT.filter((x) => x !== alatUntuk(j)).map((x) => [x, 'salah-banding-siku'] as [string, string]), error: 'salah-banding-siku',
                hint: 'Lihat kaki yang miring: apakah masuk ke dalam pojok alat, pas di tepinya, atau keluar?', explain: `Kaki yang lain ${alatUntuk(j)}.` }),
            banding(rng, j, j === SIKU ? 'Kakinya tepat menempel, jadi siku-siku.' : j === KECIL ? 'Kakinya tersembunyi di bawah alat, jadi lebih kecil dari siku-siku.' : 'Kakinya di luar alat, jadi lebih besar dari siku-siku.'),
        ];
        return { text: 'Bandingkan sudut di bawah ini dengan sudut siku-siku.', visual: { type: 'angle', degrees: deg, showRightMark: level === 1 && deg === 90 }, steps, conclusion: `Jadi sudut itu ${j}.` };
    }
    // tingkat 3: panjang kaki tidak menentukan besar sudut
    const [P, Q] = rng.shuffle(['P', 'Q', 'R', 'S', 'K', 'L']).slice(0, 2);
    const kecilPanjang = rng.int(6, 12), besarPendek = rng.int(2, 4);
    const pBesar = rng.chance(0.5);
    const [bigName, smallName] = pBesar ? [P, Q] : [Q, P];
    const desc = (n: string) => (n === bigName ? `kakinya ${besarPendek} cm dan terbuka lebih lebar dari siku-siku` : `kakinya ${kecilPanjang} cm dan terbuka lebih sempit dari siku-siku`);
    const steps: Step[] = [
        fixed({ id: 'arti', prompt: 'Besar sudut ditentukan oleh ...', options: ['lebar bukaan kedua kaki', 'panjang kaki sudut'], answer: 'lebar bukaan kedua kaki', error: 'sudut-kaki-panjang',
            hint: 'Gunting kecil yang terbuka lebar punya sudut lebih besar daripada gunting besar yang hampir tertutup.', explain: 'Besar sudut adalah lebar bukaan, bukan panjang kaki.' }),
        fixed({ id: 'banding-p', prompt: `Sudut ${P} dibandingkan dengan siku-siku?`, options: [KECIL, SIKU, BESAR], answer: P === bigName ? BESAR : KECIL, error: 'salah-banding-siku',
            hint: `Baca lagi keterangan sudut ${P}.`, explain: `Sudut ${P} ${P === bigName ? BESAR : KECIL}.` }),
        fixed({ id: 'jawab', prompt: 'Sudut mana yang lebih besar?', options: [P, Q], answer: bigName, error: 'sudut-kaki-panjang',
            hint: 'Sudut yang lebih besar dari siku-siku pasti lebih besar dari sudut yang lebih kecil dari siku-siku.', explain: `Sudut ${bigName} lebih besar, walaupun kakinya lebih pendek.` }),
    ];
    return { text: `Sudut ${P}: ${desc(P)}. Sudut ${Q}: ${desc(Q)}. Sudut mana yang lebih besar?`, steps, conclusion: `Jadi sudut ${bigName} lebih besar dari sudut ${smallName}.` };
};

/** Sudut antara dua jarum jam pada jam tepat. */
const sudutJam: Generator = (rng, level) => {
    const jenisJam = (h: number) => (h === 3 || h === 9 ? SIKU : h < 3 || h > 9 ? KECIL : BESAR);
    if (level < 3) {
        const h = level === 1 ? rng.pick([1, 2, 3, 4, 5]) : rng.pick([7, 8, 9, 10, 11]);
        const j = jenisJam(h);
        const patokan = h <= 5 ? 3 : 9;
        const steps: Step[] = [
            num({ id: 'jarum', prompt: 'Jarum panjang menunjuk angka 12. Jarum pendek menunjuk angka berapa?', answer: h, error: 'salah-baca-jam', hint: 'Jarum pendek menunjukkan jam.', explain: `Jarum pendek menunjuk angka ${h}.` }),
            fixed({ id: 'patokan', prompt: `Dari angka 12 ke angka berapa jarum membentuk siku-siku${h <= 5 ? ' (searah jarum jam)' : ' (berlawanan arah jarum jam)'}?`, options: ['3', '6', '9'], answer: String(patokan), error: 'salah-banding-siku',
                hint: 'Seperempat putaran jam adalah satu sudut siku-siku.', explain: `Dari 12 ke ${patokan} adalah seperempat putaran: siku-siku.` }),
            banding(rng, j, h === patokan ? `Jarum pendek tepat di angka ${patokan}, jadi siku-siku.` : `Angka ${h} ${Math.abs(h - 12 * Number(h > 6)) < 3 ? 'belum sampai' : 'sudah melewati'} angka ${patokan}, jadi ${j}.`,
                `Bandingkan angka ${h} dengan angka ${patokan}. Belum sampai: lebih kecil. Melewati: lebih besar.`),
        ];
        return { text: `Pukul ${h}.00. Bandingkan sudut antara dua jarum jam dengan sudut siku-siku.`, visual: { type: 'clock', hour: h, minute: 0 }, steps, conclusion: `Jadi pada pukul ${h}.00 sudutnya ${j}.` };
    }
    // tingkat 3: pilih jam yang sesuai
    const target = rng.pick([SIKU, KECIL, BESAR]);
    const hours = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11];
    const ans = rng.pick(hours.filter((h) => jenisJam(h) === target));
    const wrong = rng.shuffle(hours.filter((h) => jenisJam(h) !== target)).slice(0, 3);
    const steps: Step[] = [
        fixed({ id: 'patokan', prompt: 'Pada pukul berapa jarum jam pasti membentuk sudut siku-siku?', options: ['3.00 dan 9.00', '6.00 dan 12.00', '1.00 dan 2.00'], answer: '3.00 dan 9.00', error: 'salah-banding-siku',
            hint: 'Seperempat putaran: dari 12 ke 3, atau dari 12 ke 9.', explain: 'Pukul 3.00 dan 9.00 membentuk siku-siku.' }),
        pick(rng, { id: 'jawab', prompt: `Pada pukul berapa sudut kedua jarum ${target}?`, answer: `${ans}.00`, wrong: wrong.map((h) => [`${h}.00`, 'salah-banding-siku'] as [string, string]),
            error: 'salah-banding-siku', hint: 'Bayangkan setiap jam. Bandingkan jarum pendek dengan angka 3 atau angka 9.', explain: `Pada pukul ${ans}.00 sudutnya ${target}.` }),
    ];
    return { text: `Pilih jam yang dua jarumnya membentuk sudut ${target}.`, steps, conclusion: `Jadi jawabannya pukul ${ans}.00.` };
};

const BANGUN = [
    { teks: 'ubin lantai berbentuk persegi', sudut: 4, siku: 4 },
    { teks: 'papan tulis berbentuk persegi panjang', sudut: 4, siku: 4 },
    { teks: 'sampul buku tulis berbentuk persegi panjang', sudut: 4, siku: 4 },
    { teks: 'penggaris segitiga siku-siku', sudut: 3, siku: 1 },
    { teks: 'bendera segitiga di perahu (bukan segitiga siku-siku)', sudut: 3, siku: 0 },
    { teks: 'saputangan berbentuk persegi', sudut: 4, siku: 4 },
];

/** Banyak sudut dan sudut siku-siku pada bangun. */
const sudutBangun: Generator = (rng, level) => {
    const nama = rng.pick(NAMA);
    if (level === 1) {
        const b = rng.pick(BANGUN);
        const steps: Step[] = [
            num({ id: 'sudut', prompt: 'Ada berapa titik sudut (pojok)?', answer: b.sudut, error: 'salah-hitung-sudut', hint: 'Titik sudut adalah tempat dua sisi bertemu. Hitung pojoknya.', explain: `Ada ${b.sudut} pojok, jadi ${b.sudut} sudut.` }),
            num({ id: 'jawab', prompt: 'Berapa sudut yang siku-siku?', answer: b.siku, error: 'salah-hitung-sudut', hint: 'Periksa setiap pojok dengan alat siku. Tidak semua pojok segitiga siku-siku.',
                explain: b.siku === b.sudut ? 'Semua pojoknya siku-siku, seperti pojok buku.' : b.siku ? 'Hanya satu pojok yang siku-siku.' : 'Tidak ada pojok yang siku-siku.' }),
        ];
        return { text: `${nama} mengamati ${b.teks}. Berapa sudutnya, dan berapa yang siku-siku?`, steps, conclusion: `Jadi ada ${b.sudut} sudut, ${b.siku} di antaranya siku-siku.` };
    }
    if (level === 2) {
        const np = rng.int(2, 4), ns = rng.int(1, 3);
        const steps: Step[] = [
            num({ id: 'persegi', prompt: `Satu persegi punya berapa sudut siku-siku?`, answer: 4, error: 'salah-hitung-sudut', hint: 'Semua pojok persegi seperti pojok buku.', explain: 'Persegi punya 4 sudut siku-siku.' }),
            num({ id: 'segitiga', prompt: 'Satu segitiga siku-siku punya berapa sudut siku-siku?', answer: 1, error: 'salah-hitung-sudut', hint: 'Namanya segitiga siku-siku karena satu pojoknya siku-siku.', explain: 'Hanya 1 sudut siku-siku.' }),
            num({ id: 'jawab', prompt: `Jumlahkan: ${np} × 4 + ${ns} × 1 = ?`, answer: np * 4 + ns, error: 'salah-hitung-sudut', hint: `${np * 4} + ${ns}`, explain: `${np * 4} + ${ns} = ${np * 4 + ns}.` }),
        ];
        return { text: `${nama} menggunting ${np} kertas berbentuk persegi dan ${ns} kertas berbentuk segitiga siku-siku. Berapa sudut siku-siku semuanya?`, steps, conclusion: `Jadi ada ${np * 4 + ns} sudut siku-siku.` };
    }
    // tingkat 3: bangun bentuk L
    const W = rng.int(4, 8), H = rng.int(4, 7), top = rng.int(1, W - 2), right = rng.int(1, H - 2);
    const steps: Step[] = [
        num({ id: 'sudut', prompt: 'Ada berapa titik sudut (pojok) pada bangun L itu?', answer: 6, error: 'salah-hitung-sudut', hint: 'Telusuri tepinya dan hitung setiap belokan.', explain: 'Ada 6 pojok.' }),
        fixed({ id: 'dalam', prompt: 'Pojok yang menjorok ke dalam (di lekukan huruf L), sudut di dalam bangunnya ...', options: [KECIL, SIKU, BESAR], answer: BESAR, error: 'salah-banding-siku',
            hint: 'Di lekukan, bagian dalam bangun terbuka sangat lebar, lebih dari pojok buku.', explain: 'Sudut di lekukan lebih besar dari siku-siku.' }),
        num({ id: 'jawab', prompt: 'Jadi berapa sudut siku-siku di dalam bangun itu?', answer: 5, error: 'salah-hitung-sudut', hint: '6 pojok, satu di antaranya lebih besar dari siku-siku.', explain: '6 − 1 = 5 sudut siku-siku.' }),
    ];
    return { text: `${nama} menggambar bangun berbentuk huruf L di kertas berpetak. Berapa sudut siku-siku di dalam bangun itu?`,
        visual: { type: 'grid', width: W, height: H, shade: [{ x: 0, y: 0, w: top, h: H - right }, { x: 0, y: H - right, w: W, h: right }] }, steps, conclusion: 'Jadi bangun L punya 6 sudut, 5 di antaranya siku-siku.' };
};

const SEKITAR = [
    { teks: 'Pintu kamar dibuka sedikit, hanya selebar badan kucing.', titik: 'engsel pintu', salah: ['gagang pintu', 'lantai'], j: KECIL },
    { teks: 'Pintu kamar dibuka sampai tegak lurus dengan dinding.', titik: 'engsel pintu', salah: ['gagang pintu', 'lantai'], j: SIKU },
    { teks: 'Pintu kamar dibuka lebar-lebar, melewati posisi tegak lurus dengan dinding.', titik: 'engsel pintu', salah: ['gagang pintu', 'lantai'], j: BESAR },
    { teks: 'Gunting dibuka sedikit untuk memotong kertas.', titik: 'paku gunting', salah: ['ujung gunting', 'pegangan gunting'], j: KECIL },
    { teks: 'Pojok sebuah buku tulis.', titik: 'pojok buku', salah: ['tengah halaman', 'punggung buku'], j: SIKU },
    { teks: 'Laptop dibuka lebar, layarnya miring ke belakang.', titik: 'engsel laptop', salah: ['ujung layar', 'papan ketik'], j: BESAR },
    { teks: 'Tiang bendera berdiri tegak di tanah lapangan yang datar.', titik: 'kaki tiang di tanah', salah: ['puncak tiang', 'bendera'], j: SIKU },
    { teks: 'Kipas tangan dibuka hanya sedikit.', titik: 'pangkal kipas', salah: ['ujung kipas', 'tengah kipas'], j: KECIL },
    { teks: 'Sandaran kursi malas dimiringkan jauh ke belakang dari dudukannya.', titik: 'sambungan sandaran dan dudukan', salah: ['ujung sandaran', 'kaki kursi'], j: BESAR },
];

/** Sudut di benda sekitar. */
const sudutSekitar: Generator = (rng, level) => {
    const nama = rng.pick(NAMA);
    if (level < 3) {
        const pool = level === 1 ? SEKITAR.filter((_, i) => [0, 1, 3, 4, 6].includes(i)) : SEKITAR;
        const s = rng.pick(pool);
        const steps: Step[] = [
            pick(rng, { id: 'titik', prompt: 'Di mana titik sudutnya?', answer: s.titik, wrong: s.salah.map((x) => [x, 'salah-titik-sudut'] as [string, string]), error: 'salah-titik-sudut',
                hint: 'Titik sudut adalah tempat dua kaki bertemu, seperti paku gunting.', explain: `Titik sudutnya di ${s.titik}.` }),
            banding(rng, s.j, `Sudutnya ${s.j}.`),
        ];
        return { text: `${s.teks} Bandingkan sudutnya dengan sudut siku-siku.`, steps, conclusion: `Jadi sudutnya ${s.j}.` };
    }
    const awal = rng.pick([KECIL, BESAR]);
    const akhir = awal === KECIL ? BESAR : KECIL;
    const kata = (j: string) => (j === KECIL ? 'hanya sedikit, selebar badan kucing' : 'lebar-lebar, melewati posisi tegak lurus dengan dinding');
    const steps: Step[] = [
        pick(rng, { id: 'titik', prompt: 'Di mana titik sudut antara pintu dan dinding?', answer: 'engsel pintu', wrong: [['gagang pintu', 'salah-titik-sudut'], ['ujung pintu', 'salah-titik-sudut']], error: 'salah-titik-sudut',
            hint: 'Pintu berputar di titik sudutnya.', explain: 'Titik sudutnya di engsel. Kakinya daun pintu dan dinding.' }),
        fixed({ id: 'pertama', prompt: 'Keadaan pertama, sudutnya ...', options: [KECIL, SIKU, BESAR], answer: awal, error: 'salah-banding-siku', hint: 'Pintu tegak lurus dinding = siku-siku.', explain: `Pertama ${awal}.` }),
        fixed({ id: 'jawab', prompt: 'Keadaan kedua, sudutnya ...', options: [KECIL, SIKU, BESAR], answer: akhir, error: 'salah-banding-siku', hint: 'Pintu tegak lurus dinding = siku-siku.', explain: `Kedua ${akhir}.` }),
    ];
    return { text: `${nama} membuka pintu kamar ${kata(awal)}. Lalu ia membuka pintu ${kata(akhir)}. Bandingkan sudut antara pintu dan dinding dengan sudut siku-siku pada kedua keadaan.`, steps,
        conclusion: `Pertama ${awal}, kedua ${akhir}.` };
};

export const topic: TopicDef = {
    topic: 'sd3-12-sudut',
    skills: [
        { code: 'banding-siku', name: 'Membandingkan sudut dengan siku-siku', gen: bandingSiku },
        { code: 'sudut-jam', name: 'Sudut pada jarum jam', gen: sudutJam },
        { code: 'sudut-bangun', name: 'Sudut pada bangun datar', gen: sudutBangun },
        { code: 'sudut-sekitar', name: 'Sudut di benda sekitar', gen: sudutSekitar },
    ],
};
