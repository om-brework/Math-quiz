/* sd2-11 Pola bangun datar: cari unit ulang, lalu lanjutkan; satu atau dua sifat (bentuk, ukuran, warna, arah). */
import type { Generator, Rng, ShapeName, Step, TopicDef, Visual } from '../../types';
import { isi, pilih } from './_bantu';

interface Bangun { shape: ShapeName; warna: string; size: 'small' | 'big'; rotate: number }

const WARNA: Record<string, string> = { merah: '#D9503D', biru: '#3b82f6', kuning: '#eab308', hijau: '#279469', ungu: '#7E5FC0' };
const NAMA_WARNA = Object.keys(WARNA);
const BENTUK: ShapeName[] = ['persegi', 'segitiga', 'lingkaran', 'persegi-panjang', 'setengah-lingkaran'];
const namaBentuk = (s: ShapeName) => s.replace(/-/g, ' ');
const ARAH: Record<number, string> = { 0: '↑ (atas)', 90: '→ (kanan)', 180: '↓ (bawah)', 270: '← (kiri)' };
const URUT_ARAH = [0, 90, 180, 270].map((r) => ARAH[r]);

type Sifat = 'bentuk' | 'warna' | 'ukuran' | 'arah';
/** deskripsi bangun memakai sifat yang berubah dalam pola */
function desk(b: Bangun, sifat: Sifat[]): string {
    if (sifat.includes('arah')) return ARAH[b.rotate];
    const parts: string[] = [namaBentuk(b.shape)];
    if (sifat.includes('ukuran')) parts.push(b.size === 'big' ? 'besar' : 'kecil');
    if (sifat.includes('warna')) parts.push(b.warna);
    return parts.join(' ');
}
const visual = (seq: Bangun[], missing?: number): Visual => ({
    type: 'shapes', items: seq.map((b) => ({ shape: b.shape, color: WARNA[b.warna], size: b.size, rotate: b.rotate || undefined })), ...(missing !== undefined ? { missing } : {}),
});

/** Pola unit: daftar indeks nilai, bangun pertama unik di dalam unit (supaya aturan "cari kapan muncul lagi" berlaku). */
const POLA_UNIT = [[0, 1], [0, 1, 2], [0, 1, 1], [0, 1, 2, 2], [0, 1, 1, 2], [0, 1, 2, 1], [0, 1, 2, 3]];

function ambilNilai<T>(rng: Rng, list: readonly T[], k: number): T[] {
    return rng.shuffle(list).slice(0, k);
}

/** Bangun satu unit untuk satu sifat yang berubah. */
function unitSatuSifat(rng: Rng, sifat: Sifat, pola: number[]): Bangun[] {
    const k = Math.max(...pola) + 1;
    const dasar: Bangun = { shape: rng.pick(BENTUK.slice(0, 3)), warna: rng.pick(NAMA_WARNA), size: 'big', rotate: 0 };
    if (sifat === 'bentuk') { const v = ambilNilai(rng, BENTUK, k); return pola.map((i) => ({ ...dasar, shape: v[i] })); }
    if (sifat === 'warna') { const v = ambilNilai(rng, NAMA_WARNA, k); return pola.map((i) => ({ ...dasar, warna: v[i] })); }
    if (sifat === 'ukuran') { const v = rng.shuffle(['big', 'small'] as const); return pola.map((i) => ({ ...dasar, size: v[i] })); }
    const v = ambilNilai(rng, [0, 90, 180, 270], k);
    return pola.map((i) => ({ ...dasar, shape: 'segitiga', rotate: v[i] }));
}

const ulang = (unit: Bangun[], n: number) => Array.from({ length: n }, (_, i) => unit[i % unit.length]);

/** Langkah-langkah umum: cari unit ulang, (posisi dalam unit), lalu pilih bangun. */
function langkahPola(rng: Rng, unit: Bangun[], sifat: Sifat[], target: number, mode: 'lanjut' | 'hilang' | 'ke'): Step[] {
    const U = unit.length;
    const ans = unit[target % U];
    const semua = (sifat.includes('arah') ? [0, 90, 180, 270].map((r) => ({ ...unit[0], rotate: r })) : unit).map((b) => desk(b, sifat));
    const opsi = [...new Set(semua)];
    // tambahkan pilihan yang hanya benar satu sifatnya (untuk pola dua sifat)
    const salah: [string, string][] = opsi.map((o) => [o, mode === 'ke' ? 'salah-hitung-urutan-pola' : 'salah-lanjut-pola-bangun']);
    if (sifat.length === 2) {
        for (const b of unit) {
            const campur = { ...ans, ...(sifat.includes('bentuk') ? { shape: b.shape } : {}), ...(sifat.includes('ukuran') ? { size: b.size } : {}) };
            salah.push([desk(campur, sifat), 'pola-satu-sifat-saja']);
            const campur2 = { ...b, warna: ans.warna };
            salah.push([desk(campur2, sifat), 'pola-satu-sifat-saja']);
        }
    }
    // paling banyak 3 pilihan salah, yang khas didahulukan
    const pilihanSalah = sifat.includes('arah') ? salah : (() => {
        const seen = new Set([desk(ans, sifat)]);
        const out: [string, string][] = [];
        for (const x of [...rng.shuffle(salah.filter((z) => z[1] === 'pola-satu-sifat-saja')), ...rng.shuffle(salah)]) {
            if (seen.has(x[0]) || out.length >= 3) continue;
            seen.add(x[0]); out.push(x);
        }
        return out;
    })();
    const steps: Step[] = [
        isi('unit', 'Cari unit ulang: kapan bangun pertama muncul lagi dengan semua sifat yang sama? Berapa bangun dalam satu unit?', U, {
            hint: 'Lihat bangun pertama. Cari bangun yang sama persis berikutnya. Bangun-bangun sebelumnya adalah satu unit.', explain: `Unit ulangnya ${U} bangun: ${unit.map((b) => desk(b, sifat)).join(', ')}.`, error: 'unit-ulang-terlalu-cepat' }),
    ];
    if (mode === 'ke') {
        const pos = (target % U) + 1;
        steps.push(isi('posisi', `Bangun ke-${target + 1} adalah bangun ke berapa di dalam unitnya?`, pos, {
            hint: `Kelompokkan per ${U}: unit 1 = urutan 1 sampai ${U}, unit 2 = urutan ${U + 1} sampai ${2 * U}, dan seterusnya.`, explain: `Urutan ke-${target + 1} jatuh pada bangun ke-${pos} di dalam unit.`, error: 'salah-hitung-urutan-pola' }));
    }
    steps.push(pilih(rng, 'bangun', mode === 'lanjut' ? 'Bangun apa berikutnya?' : mode === 'hilang' ? 'Bangun apa yang hilang?' : `Seperti apa bangun ke-${target + 1}?`, desk(ans, sifat), pilihanSalah, {
        hint: mode === 'hilang' ? `Bangun ke-${target + 1} sama dengan bangun ke-${(target % U) + 1}.` : 'Pakai unit ulang yang sudah kamu temukan.',
        explain: `Bangun ke-${target + 1} adalah ${desk(ans, sifat)}.`, error: mode === 'ke' ? 'salah-hitung-urutan-pola' : 'salah-lanjut-pola-bangun',
        ...(sifat.includes('arah') && sifat.length === 1 ? { urut: URUT_ARAH } : {}) }));
    return steps;
}

function buat(rng: Rng, level: 1 | 2 | 3, unit: Bangun[], sifat: Sifat[], intro: string) {
    const U = unit.length;
    if (level === 1) {
        const len = 2 * U + rng.int(0, U - 1);
        const seq = ulang(unit, len + 1);
        return { text: `${intro} Bangun apa berikutnya?`, visual: visual(seq, len), steps: langkahPola(rng, unit, sifat, len, 'lanjut'), conclusion: `Unit ulangnya ${U} bangun. Berikutnya ${desk(unit[len % U], sifat)}.` };
    }
    if (level === 2) {
        const len = 2 * U + rng.int(1, U);
        const miss = rng.int(U, len - 1);
        const seq = ulang(unit, len);
        return { text: `${intro} Satu bangun hilang. Bangun apa yang hilang?`, visual: visual(seq, miss), steps: langkahPola(rng, unit, sifat, miss, 'hilang'), conclusion: `Bangun yang hilang: ${desk(unit[miss % U], sifat)}.` };
    }
    const seq = ulang(unit, 2 * U);
    const target = rng.int(2 * U + 1, 19);
    return { text: `${intro} Pola ini terus berulang. Seperti apa bangun ke-${target + 1}?`, visual: visual(seq), steps: langkahPola(rng, unit, sifat, target, 'ke'), conclusion: `Bangun ke-${target + 1} adalah ${desk(unit[target % U], sifat)}.` };
}

const satuSifat: Generator = (rng, level) => {
    const sifat: Sifat = level === 1 ? 'bentuk' : rng.pick(['bentuk', 'warna', 'ukuran'] as const);
    let pola = rng.pick(level === 1 ? POLA_UNIT.slice(0, 2) : POLA_UNIT);
    if (sifat === 'ukuran') pola = rng.pick([[0, 1], [0, 1, 1]]);
    const unit = unitSatuSifat(rng, sifat, pola);
    return buat(rng, level, unit, [sifat], `Perhatikan pola ${sifat} ini.`);
};

const arah: Generator = (rng, level) => {
    let unit: Bangun[];
    const dasar: Bangun = { shape: 'segitiga', warna: rng.pick(NAMA_WARNA), size: 'big', rotate: 0 };
    const start = rng.pick([0, 90, 180, 270]);
    const jenis = level === 1 ? rng.pick(['kanan', 'kiri']) : rng.pick(['kanan', 'kiri', 'setengah', 'ulang']);
    if (jenis === 'kanan' || jenis === 'kiri') unit = [0, 1, 2, 3].map((i) => ({ ...dasar, rotate: (start + (jenis === 'kanan' ? 90 : 270) * i) % 360 }));
    else if (jenis === 'setengah') unit = [0, 1].map((i) => ({ ...dasar, rotate: (start + 180 * i) % 360 }));
    else unit = unitSatuSifat(rng, 'arah', rng.pick([[0, 1, 1], [0, 1, 2, 2], [0, 1, 1, 2]])).map((b) => ({ ...b, warna: dasar.warna }));
    const intro = jenis === 'kanan' ? 'Segitiga ini terus diputar seperempat putaran searah jarum jam.' : jenis === 'kiri' ? 'Segitiga ini terus diputar seperempat putaran berlawanan arah jarum jam.' : 'Perhatikan arah segitiga pada pola ini.';
    const q = buat(rng, level, unit, ['arah'], level === 1 ? intro : 'Perhatikan arah segitiga pada pola ini.');
    return { ...q, text: `${q.text} Arah ditulis dengan panah.` };
};

const duaSifat: Generator = (rng, level) => {
    let unit: Bangun[], sifat: Sifat[];
    const [w1, w2] = ambilNilai(rng, NAMA_WARNA, 2);
    if (level === 1) {
        // kedua sifat berubah bersamaan: persegi merah, lingkaran kuning, ...
        const bs = ambilNilai(rng, BENTUK, rng.pick([2, 3]));
        const ws = ambilNilai(rng, NAMA_WARNA, bs.length);
        unit = bs.map((s, i) => ({ shape: s, warna: ws[i], size: 'big', rotate: 0 }));
        sifat = ['bentuk', 'warna'];
    } else if (level === 2) {
        // satu sifat berganti tiap 2 bangun, sifat lain berganti tiap 1 bangun (unit 4)
        const [s1, s2] = ambilNilai(rng, BENTUK, 2);
        if (rng.chance(0.5)) {
            unit = [[s1, w1], [s1, w2], [s2, w1], [s2, w2]].map(([s, w]) => ({ shape: s as ShapeName, warna: w, size: 'big', rotate: 0 }));
            sifat = ['bentuk', 'warna'];
        } else {
            const s = rng.pick(BENTUK.slice(0, 3));
            unit = [['big', w1], ['small', w1], ['big', w2], ['small', w2]].map(([z, w]) => ({ shape: s, warna: w, size: z as 'big' | 'small', rotate: 0 }));
            sifat = ['ukuran', 'warna'];
        }
    } else {
        // seperti bendera: besar merah, kecil putih, kecil putih
        const s = rng.pick(BENTUK.slice(0, 3));
        const pola = rng.pick([[['big', w1], ['small', w2], ['small', w2]], [['small', w1], ['big', w2], ['big', w2]], [['big', w1], ['big', w2], ['small', w1], ['small', w2]]]);
        unit = pola.map(([z, w]) => ({ shape: s, warna: w, size: z as 'big' | 'small', rotate: 0 }));
        sifat = ['ukuran', 'warna'];
    }
    const q = buat(rng, level, unit, sifat, `Pola ini memakai dua sifat: ${sifat.join(' dan ')}.`);
    if (level === 2) {
        // tambahkan langkah memeriksa tiap sifat sebelum memilih bangun
        const miss = (q.visual as Extract<Visual, { type: 'shapes' }>).missing!;
        const ans = unit[miss % unit.length];
        const satu = sifat[0];
        const nilai = satu === 'bentuk' ? namaBentuk(ans.shape) : ans.size === 'big' ? 'besar' : 'kecil';
        const semua = satu === 'bentuk' ? [...new Set(unit.map((b) => namaBentuk(b.shape)))] : ['besar', 'kecil'];
        const cek1 = pilih(rng, 'sifat-1', `Perhatikan ${satu} saja. ${satu === 'bentuk' ? 'Bentuk' : 'Ukuran'} bangun yang hilang?`, nilai, semua.map((x) => [x, 'pola-satu-sifat-saja'] as [string, string]), {
            hint: satu === 'bentuk' ? 'Bentuk berganti setiap 2 bangun.' : 'Ukuran berganti setiap 1 bangun.', explain: `${satu === 'bentuk' ? 'Bentuknya' : 'Ukurannya'} ${nilai}.`, error: 'pola-satu-sifat-saja', urut: semua });
        const cek2 = pilih(rng, 'sifat-2', 'Perhatikan warna saja. Warna bangun yang hilang?', ans.warna, [w1, w2].map((x) => [x, 'pola-satu-sifat-saja'] as [string, string]), {
            hint: satu === 'bentuk' ? 'Warna berganti setiap 1 bangun.' : 'Warna berganti setiap 2 bangun.', explain: `Warnanya ${ans.warna}.`, error: 'pola-satu-sifat-saja', urut: [w1, w2] });
        q.steps = [q.steps[0], cek1, cek2, q.steps[q.steps.length - 1]];
    }
    return q;
};

export const topic: TopicDef = {
    topic: 'sd2-11-pola-bangun',
    skills: [
        { code: 'pola-satu-sifat', name: 'Pola satu sifat: bentuk, ukuran, warna', gen: satuSifat },
        { code: 'pola-arah', name: 'Pola arah (putaran)', gen: arah },
        { code: 'pola-dua-sifat', name: 'Pola dua sifat', gen: duaSifat },
    ],
};
