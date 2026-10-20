/* sd3-09 Satuan panjang, massa, volume: km dan mL, satuan gabungan, mengubah ke satuan kecil. */
import { fmt } from '../../format';
import type { Generator, Rng, Step, TopicDef, Visual } from '../../types';
import { NAMA, col, fixed, num, pick, until } from './util';

type Jenis = 'panjang' | 'massa' | 'volume';
const JENIS_LABEL: Record<Jenis, string> = { panjang: 'panjang', massa: 'massa (berat)', volume: 'volume (isi)' };
const SATUAN: Record<Jenis, string[]> = { panjang: ['km', 'm', 'cm'], massa: ['kg', 'g'], volume: ['ℓ', 'mL'] };

interface Benda { teks: string; jenis: Jenis; satuan: string; sulit?: boolean }
const BENDA: Benda[] = [
    { teks: 'panjang sebatang pensil', jenis: 'panjang', satuan: 'cm' },
    { teks: 'tinggi pintu kelas', jenis: 'panjang', satuan: 'm' },
    { teks: 'jarak kota Denpasar ke kota Singaraja', jenis: 'panjang', satuan: 'km' },
    { teks: 'panjang lapangan sepak bola', jenis: 'panjang', satuan: 'm', sulit: true },
    { teks: 'jarak rumah ke sekolah yang ditempuh 30 menit naik sepeda', jenis: 'panjang', satuan: 'km', sulit: true },
    { teks: 'lebar buku tulis', jenis: 'panjang', satuan: 'cm' },
    { teks: 'panjang jalan tol', jenis: 'panjang', satuan: 'km', sulit: true },
    { teks: 'berat sekarung beras', jenis: 'massa', satuan: 'kg' },
    { teks: 'berat sebutir telur', jenis: 'massa', satuan: 'g' },
    { teks: 'berat sebuah semangka', jenis: 'massa', satuan: 'kg', sulit: true },
    { teks: 'berat sebuah penghapus', jenis: 'massa', satuan: 'g', sulit: true },
    { teks: 'berat badan Ayah', jenis: 'massa', satuan: 'kg' },
    { teks: 'air di dalam ember', jenis: 'volume', satuan: 'ℓ' },
    { teks: 'obat dalam satu sendok', jenis: 'volume', satuan: 'mL' },
    { teks: 'susu dalam kotak kecil', jenis: 'volume', satuan: 'mL', sulit: true },
    { teks: 'air di bak mandi', jenis: 'volume', satuan: 'ℓ' },
    { teks: 'bensin di tangki motor', jenis: 'volume', satuan: 'ℓ', sulit: true },
    { teks: 'air dalam satu gelas', jenis: 'volume', satuan: 'mL', sulit: true },
];

/** Pasangan satuan besar–kecil dan angka tukarnya. */
interface Pasang { besar: string; kecil: string; tukar: number; jenis: Jenis; benda: string }
const PASANG: Pasang[] = [
    { besar: 'm', kecil: 'cm', tukar: 100, jenis: 'panjang', benda: 'pita' },
    { besar: 'km', kecil: 'm', tukar: 1000, jenis: 'panjang', benda: 'jalan' },
    { besar: 'kg', kecil: 'g', tukar: 1000, jenis: 'massa', benda: 'tepung' },
    { besar: 'ℓ', kecil: 'mL', tukar: 1000, jenis: 'volume', benda: 'air' },
];
const gab = (p: Pasang, B: number, k: number) => (k ? `${B} ${p.besar} ${k} ${p.kecil}` : `${B} ${p.besar}`);

/** Bagian kecil acak: tingkat 1 tanpa nol di tengah, tingkat 2 dengan nol di tengah (50 m, 8 g). */
const bagianKecil = (rng: Rng, p: Pasang, nol: boolean) =>
    p.tukar === 100
        ? (nol ? rng.int(1, 9) : rng.int(11, 99))
        : (nol ? rng.pick([rng.int(1, 9), rng.int(1, 9) * 10, rng.int(11, 99)]) : rng.int(1, 9) * 100 + rng.pick([0, 0, rng.int(1, 9) * 10, rng.int(11, 99)]));

const tukarStep = (p: Pasang): Step =>
    fixed({ id: 'tukar', prompt: `1 ${p.besar} = ? ${p.kecil}`, options: ['10', '100', '1.000'], answer: fmt(p.tukar), error: 'salah-angka-tukar',
        hint: 'Hanya m ke cm yang memakai 100. km ke m, kg ke g, dan ℓ ke mL memakai 1.000.', explain: `1 ${p.besar} = ${fmt(p.tukar)} ${p.kecil}.` });

const ubahSteps = (p: Pasang, B: number, k: number, id = ''): Step[] => [
    num({ id: `besar${id}`, prompt: `Tukar bagian besar: ${B} ${p.besar} = ? ${p.kecil}`, answer: B * p.tukar, suffix: p.kecil, error: 'salah-angka-tukar',
        hint: `${B} × ${fmt(p.tukar)}`, explain: `${B} ${p.besar} = ${fmt(B * p.tukar)} ${p.kecil}.` }),
    num({ id: `gabung${id}`, prompt: `Gabungkan: ${fmt(B * p.tukar)} ${p.kecil} + ${k} ${p.kecil} = ?`, answer: B * p.tukar + k, suffix: p.kecil, error: k < p.tukar / 10 ? 'lupa-nol-satuan' : 'salah-angka-tukar',
        hint: `Tulis ${k} rata kanan di bawah ${fmt(B * p.tukar)}.${k < p.tukar / 10 ? ' Tempat yang kosong tetap 0.' : ''}`, explain: `${gab(p, B, k)} = ${fmt(B * p.tukar + k)} ${p.kecil}.` }),
];

/** Memilih satuan yang cocok, dan membaca timbangan atau gelas ukur. */
const pilihSatuan: Generator = (rng, level) => {
    if (level < 3) {
        const b = rng.pick(BENDA.filter((x) => (level === 1 ? !x.sulit : x.sulit)));
        const all = ['km', 'm', 'cm', 'kg', 'g', 'ℓ', 'mL'];
        const wrong = rng.shuffle(all.filter((u) => u !== b.satuan)).sort((x, y) => Number(SATUAN[b.jenis].includes(y)) - Number(SATUAN[b.jenis].includes(x)))
            .map((u) => [u, SATUAN[b.jenis].includes(u) ? 'satuan-kurang-cocok' : 'salah-jenis-satuan'] as [string, string]);
        const steps: Step[] = [
            fixed({ id: 'jenis', prompt: 'Apa yang diukur?', options: Object.values(JENIS_LABEL), answer: JENIS_LABEL[b.jenis], error: 'salah-jenis-satuan',
                hint: 'Panjang: seberapa jauh/tinggi. Massa: seberapa berat. Volume: seberapa banyak isinya.', explain: `Yang diukur ${JENIS_LABEL[b.jenis]}.` }),
            pick(rng, { id: 'satuan', prompt: 'Satuan mana yang paling cocok?', answer: b.satuan, wrong, error: 'satuan-kurang-cocok',
                hint: b.jenis === 'panjang' ? 'cm untuk benda kecil, m untuk ruangan dan lapangan, km untuk jarak jauh.' : b.jenis === 'massa' ? 'g untuk benda ringan, kg untuk benda berat.' : 'mL untuk isi sedikit, ℓ untuk isi banyak.',
                explain: `${b.teks[0].toUpperCase()}${b.teks.slice(1)} paling cocok diukur dengan ${b.satuan}.` }),
        ];
        return { text: `Satuan apa yang paling cocok untuk mengukur ${b.teks}?`, steps, conclusion: `Jadi ${b.teks} diukur dengan ${b.satuan}.` };
    }
    const mass = rng.chance(0.5);
    const [stepV, max] = rng.pick([[100, 2000], [250, 3000], [200, 3000], [500, 5000]] as const);
    const value = until(() => rng.int(5, max / stepV) * stepV, (v) => v > 1000 && v % 1000 !== 0);
    const visual: Visual = { type: 'scale', kind: mass ? 'mass' : 'volume', value, unit: mass ? 'g' : 'mL', max, step: stepV };
    const [besar, kecil] = mass ? ['kg', 'g'] : ['ℓ', 'mL'];
    const B = Math.floor(value / 1000), k = value % 1000;
    const steps: Step[] = [
        num({ id: 'baca', prompt: `Baca ${mass ? 'timbangan' : 'gelas ukur'}. Berapa ${kecil}?`, answer: value, suffix: kecil, error: 'salah-baca-skala-ukur',
            hint: `Setiap garis bernilai ${stepV} ${kecil}. Hitung dari angka terdekat di bawah ${mass ? 'jarum' : 'permukaan air'}.`, explain: `${mass ? 'Jarumnya' : 'Permukaan airnya'} menunjuk ${fmt(value)} ${kecil}.` }),
        num({ id: 'besar', prompt: `${fmt(value)} ${kecil} = ? ${besar} ... ${kecil}. Berapa ${besar}?`, answer: B, suffix: besar, error: 'salah-angka-tukar',
            hint: `1 ${besar} = 1.000 ${kecil}. Ada berapa ribuan di ${fmt(value)}?`, explain: `${fmt(B * 1000)} ${kecil} = ${B} ${besar}.` }),
        num({ id: 'kecil', prompt: `Sisanya berapa ${kecil}?`, answer: k, suffix: kecil, error: 'salah-angka-tukar',
            hint: `${fmt(value)} − ${fmt(B * 1000)}`, explain: `${fmt(value)} ${kecil} = ${B} ${besar} ${k} ${kecil}.` }),
    ];
    return { text: `${mass ? `Berapa massa tepung di timbangan` : `Berapa volume air di gelas ukur`}? Tulis dalam ${kecil}, lalu dalam ${besar} dan ${kecil}.`, visual, steps,
        conclusion: `Jadi ${mass ? 'massanya' : 'volumenya'} ${fmt(value)} ${kecil} = ${B} ${besar} ${k} ${kecil}.` };
};

/** Mengubah satuan gabungan ke satuan kecil; tingkat 3 membandingkan. */
const ubahKecil: Generator = (rng, level) => {
    const p = rng.pick(PASANG);
    const B = rng.int(1, p.tukar === 100 ? 9 : 8);
    if (level < 3) {
        const k = bagianKecil(rng, p, level === 2);
        const steps: Step[] = [tukarStep(p), ...ubahSteps(p, B, k)];
        return { text: `Ubah ${gab(p, B, k)} menjadi ${p.kecil}.`, steps, conclusion: `Jadi ${gab(p, B, k)} = ${fmt(B * p.tukar + k)} ${p.kecil}.` };
    }
    const k = bagianKecil(rng, p, true);
    const v1 = B * p.tukar + k;
    // pembanding dalam satuan kecil: sedikit lebih besar atau lebih kecil, kadang menjebak (lebih besar walau tanpa satuan besar)
    const v2 = until(() => B * p.tukar + rng.int(1, p.tukar - 1), (v) => v !== v1 && Math.abs(v - v1) >= (p.tukar === 100 ? 5 : 50));
    const kata = p.jenis === 'panjang' ? ['lebih panjang', 'Mana yang lebih panjang?'] : p.jenis === 'massa' ? ['lebih berat', 'Mana yang lebih berat?'] : ['lebih banyak', 'Mana yang isinya lebih banyak?'];
    const [x, y] = rng.chance(0.5) ? [gab(p, B, k), `${fmt(v2)} ${p.kecil}`] : [`${fmt(v2)} ${p.kecil}`, gab(p, B, k)];
    const bigger = v1 > v2 ? gab(p, B, k) : `${fmt(v2)} ${p.kecil}`;
    const smaller = v1 > v2 ? `${fmt(v2)} ${p.kecil}` : gab(p, B, k);
    const steps: Step[] = [
        ...ubahSteps(p, B, k),
        fixed({ id: 'banding', prompt: kata[1], options: [x, y], answer: bigger, error: 'banding-tanpa-samakan-satuan',
            hint: `Bandingkan ${fmt(v1)} ${p.kecil} dengan ${fmt(v2)} ${p.kecil}.`, explain: `${fmt(Math.max(v1, v2))} ${p.kecil} > ${fmt(Math.min(v1, v2))} ${p.kecil}, jadi ${bigger} ${kata[0]} dari ${smaller}.` }),
    ];
    return { text: `${kata[1]} ${x} atau ${y}?`, steps, conclusion: `Jadi ${bigger} ${kata[0]}.` };
};

/** Soal cerita: ubah ke satuan kecil, lalu jumlah atau kurang. */
const cerita: Generator = (rng, level) => {
    const nama = rng.pick(NAMA);
    if (level === 1) {
        const p = PASANG[0];
        const B = rng.int(1, 4), k = rng.int(11, 95), c = rng.int(15, 95);
        const total = B * 100 + k + c;
        const steps: Step[] = [
            ...ubahSteps(p, B, k),
            col({ id: 'jumlah', prompt: `Jumlahkan: ${B * 100 + k} + ${c}`, op: '+', a: B * 100 + k, b: c, hint: 'Satuannya sudah sama (cm). Jumlahkan bersusun.', explain: `${B * 100 + k} + ${c} = ${total}.` }),
            num({ id: 'jawab', prompt: 'Berapa sentimeter panjang semuanya?', answer: total, suffix: 'cm', error: 'salah-fakta-tambah', hint: 'Pakai hasil bersusun tadi.', explain: `Panjang semuanya ${fmt(total)} cm.` }),
        ];
        return { text: `${nama} punya pita merah ${gab(p, B, k)} dan pita biru ${c} cm. Berapa sentimeter panjang kedua pita?`, steps, conclusion: `Jadi panjang kedua pita ${fmt(total)} cm.` };
    }
    if (level === 2) {
        const p = rng.pick([PASANG[2], PASANG[3]]);
        const B = rng.int(1, 4), k = rng.pick([0, 100, 200, 250, 400, 500, 600, 750]);
        const whole = B * 1000 + k;
        const used = until(() => rng.int(2, 19) * 50, (u) => u < whole - 100 && u % 1000 > k % 1000);
        const left = whole - used;
        const kalimat = p.jenis === 'massa'
            ? `Ibu ${nama} punya ${gab(p, B, k)} tepung. Sebanyak ${fmt(used)} g dipakai untuk membuat kue. Berapa gram tepung yang tersisa?`
            : `Botol ${nama} berisi ${gab(p, B, k)} air. ${nama} meminum ${fmt(used)} mL. Berapa mililiter air yang tersisa?`;
        const steps: Step[] = [
            ...(k ? ubahSteps(p, B, k) : [num({ id: 'besar', prompt: `Ubah: ${B} ${p.besar} = ? ${p.kecil}`, answer: whole, suffix: p.kecil, error: 'salah-angka-tukar', hint: `${B} × 1.000`, explain: `${B} ${p.besar} = ${fmt(whole)} ${p.kecil}.` })]),
            col({ id: 'kurang', prompt: `Kurangkan: ${whole} − ${used}`, op: '-', a: whole, b: used, hint: 'Satuannya sudah sama. Pinjam kalau angka atas lebih kecil.', explain: `${fmt(whole)} − ${fmt(used)} = ${fmt(left)}.` }),
            num({ id: 'jawab', prompt: `Berapa ${p.kecil} yang tersisa?`, answer: left, suffix: p.kecil, error: 'salah-fakta-kurang', hint: 'Pakai hasil bersusun tadi.', explain: `Tersisa ${fmt(left)} ${p.kecil}.` }),
        ];
        return { text: kalimat, steps, conclusion: `Jadi tersisa ${fmt(left)} ${p.kecil}.` };
    }
    const p = PASANG[1];
    const B = rng.int(2, 5), k = rng.pick([50, 80, 100, 200, 300, 400, 450, 600]);
    const whole = B * 1000 + k;
    const done = until(() => rng.int(6, 19) * 100 + rng.pick([0, 50]), (u) => u < whole && u % 1000 > k % 1000);
    const left = whole - done;
    const visual: Visual = { type: 'barModel', bars: [{ label: 'jarak', units: 4, known: gab(p, B, k) }, { label: 'sudah', units: 1, known: `${fmt(done)} m` }], question: 'sisa = ?' };
    visual.bars[1].units = Math.max(1, Math.round((done / whole) * 4));
    const steps: Step[] = [
        ...ubahSteps(p, B, k),
        col({ id: 'kurang', prompt: `Kurangkan: ${whole} − ${done}`, op: '-', a: whole, b: done, hint: 'Satuannya sudah sama (m). Pinjam kalau perlu.', explain: `${fmt(whole)} − ${fmt(done)} = ${fmt(left)}.` }),
        num({ id: 'jawab', prompt: 'Berapa meter lagi yang harus ditempuh?', answer: left, suffix: 'm', error: 'salah-urutan-langkah', hint: 'Pakai hasil pengurangan tadi.', explain: `Masih ${fmt(left)} m. Cek: ${fmt(left)} m + ${fmt(done)} m = ${fmt(whole)} m = ${gab(p, B, k)}.` }),
    ];
    return { text: `Jarak rumah ${nama} ke pantai ${gab(p, B, k)}. ${nama} sudah bersepeda ${fmt(done)} m. Berapa meter lagi yang harus ditempuh?`, visual, steps,
        conclusion: `Jadi ${nama} harus bersepeda ${fmt(left)} m lagi.` };
};

export const topic: TopicDef = {
    topic: 'sd3-09-satuan-ukur',
    skills: [
        { code: 'pilih-satuan', name: 'Memilih satuan dan membaca alat ukur', gen: pilihSatuan },
        { code: 'ubah-satuan-kecil', name: 'Mengubah satuan gabungan ke satuan kecil', gen: ubahKecil },
        { code: 'cerita-satuan', name: 'Soal cerita satuan gabungan', gen: cerita },
    ],
};
