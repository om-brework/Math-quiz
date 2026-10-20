/* sd2-03 Hitung cepat bilangan 3 angka: buka laci yang tepat, dan isi sampai bulat kalau laci penuh. */
import type { Generator, Rng, Step, TopicDef } from '../../types';
import { isi, pilih } from './_bantu';

const LACI = ['satuan', 'puluhan', 'ratusan'] as const;
const dg = (n: number, i: number) => Math.floor(n / 10 ** i) % 10;
const URUT_LACI = ['laci ratusan', 'laci puluhan', 'laci satuan'];

/** Bilangan n dan tambahan k × 10^p tanpa melewati (laci tidak penuh/kosong). */
function tanpaLewat(rng: Rng, tambah: boolean, p: number): { n: number; k: number } {
    for (;;) {
        const n = rng.int(101, 989);
        const k = rng.int(1, 8);
        const x = dg(n, p);
        if (tambah ? x + k <= 9 : x - k >= 0) {
            if (p === 2 && !tambah && x - k === 0) continue; // tetap 3 angka
            return { n, k };
        }
    }
}

const bukaLaci: Generator = (rng, level) => {
    const p = rng.int(0, 2);
    const tambah = level === 1 ? true : rng.chance(0.5);
    const { n, k } = tanpaLewat(rng, tambah, p);
    const v = k * 10 ** p;
    const r = tambah ? n + v : n - v;
    const op = tambah ? '+' : '−';
    const salahLaci = LACI.filter((_, i) => i !== p).map((l) => [`laci ${l}`, 'ubah-tempat-salah'] as [string, string]);
    if (level <= 2) {
        const steps: Step[] = [
            pilih(rng, 'laci', `Kita ${tambah ? 'menambah' : 'mengurangi'} ${v}. Laci mana yang dibuka?`, `laci ${LACI[p]}`, salahLaci, {
                hint: `${v} itu ${k} ${LACI[p]}.`, explain: `${v} = ${k} ${LACI[p]}, jadi hanya laci ${LACI[p]} yang berubah.`, error: 'ubah-tempat-salah', urut: URUT_LACI }),
            isi('isi', `Laci ${LACI[p]} berisi ${dg(n, p)}. Hitung: ${dg(n, p)} ${op} ${k} = ?`, tambah ? dg(n, p) + k : dg(n, p) - k, {
                hint: `${tambah ? 'Tambahkan' : 'Kurangkan'} ${k} pada ${dg(n, p)}.`, explain: `Laci ${LACI[p]} sekarang berisi ${tambah ? dg(n, p) + k : dg(n, p) - k}.`, error: tambah ? 'salah-fakta-tambah' : 'salah-fakta-kurang' }),
            isi('hasil', `Jadi ${n} ${op} ${v} = ?`, r, { hint: 'Laci lainnya tidak berubah. Tulis lagi angkanya.', explain: `${n} ${op} ${v} = ${r}.`, error: 'ubah-tempat-salah' }),
        ];
        if (level === 2) steps.push(isi('cek', `Cek dengan kebalikannya: ${r} ${tambah ? '−' : '+'} ${v} = ?`, n, { hint: `Hasilnya harus kembali ke ${n}.`, explain: `${r} ${tambah ? '−' : '+'} ${v} = ${n}. Benar.`, error: tambah ? 'salah-fakta-kurang' : 'salah-fakta-tambah' }));
        return { text: `Hitung di kepala: $${n} ${tambah ? '+' : '-'} ${v}$`, steps, conclusion: `Jadi ${n} ${op} ${v} = ${r}.` };
    }
    // tingkat 3: bilangan yang hilang, n ± ? = r
    const steps: Step[] = [
        pilih(rng, 'laci', `Bandingkan ${n} dan ${r}. Laci mana yang berubah?`, `laci ${LACI[p]}`, salahLaci, {
            hint: 'Bandingkan angka ratusan, puluhan, dan satuan satu per satu.', explain: `Hanya angka ${LACI[p]} yang berbeda: ${dg(n, p)} dan ${dg(r, p)}.`, error: 'ubah-tempat-salah', urut: URUT_LACI }),
        isi('beda', `Laci ${LACI[p]} berubah dari ${dg(n, p)} menjadi ${dg(r, p)}. Berubah berapa?`, k, { hint: `Hitung selisih ${dg(n, p)} dan ${dg(r, p)}.`, explain: `Berubah ${k} ${LACI[p]}.`, error: 'salah-fakta-kurang' }),
        isi('jawab', `Jadi ${n} ${op} ? = ${r}. Bilangan yang hilang adalah ...`, v, { hint: `${k} ${LACI[p]} itu berapa?`, explain: `${k} ${LACI[p]} = ${v}.`, error: 'ubah-tempat-salah' }),
    ];
    return { text: `Isi titik-titik: $${n} ${tambah ? '+' : '-'} \\dots = ${r}$`, steps, conclusion: `Jadi ${n} ${op} ${v} = ${r}.` };
};

/** Menambah/mengurang yang membuat laci penuh atau kosong: isi sampai bulat dulu. */
function lewat(rng: Rng, p: 0 | 1, tambah: boolean) {
    for (;;) {
        const n = rng.int(110, 889);
        const k = rng.int(2, 9);
        const x = dg(n, p);
        if (tambah) {
            if (x + k < 10 || x === 0) continue;
            if (p === 0 && dg(n, 1) === 9) continue; // jangan sampai ratusan ikut berubah dua kali
            const first = (10 - x) * 10 ** p;
            return { n, v: k * 10 ** p, first, rest: k * 10 ** p - first };
        }
        if (x >= k || x === 0) continue;
        if (p === 0 && dg(n, 1) === 0) continue;
        if (p === 1 && dg(n, 2) <= 1) continue;
        const first = x * 10 ** p;
        return { n, v: k * 10 ** p, first, rest: k * 10 ** p - first };
    }
}

function langkahLewat(rng: Rng, n: number, v: number, first: number, rest: number, tambah: boolean, p: 0 | 1): Step[] {
    const mid = tambah ? n + first : n - first;
    const r = tambah ? mid + rest : mid - rest;
    const op = tambah ? '+' : '−';
    return [
        isi('bulat', tambah ? `Laci ${LACI[p]} akan penuh. Isi sampai bulat dulu: ${n} + ? = ${mid}` : `Laci ${LACI[p]} tidak cukup. Ambil yang ada dulu: ${n} − ? = ${mid}`, first, {
            hint: tambah ? `${dg(n, p)} ${LACI[p]} perlu berapa lagi supaya menjadi 10 ${LACI[p]}?` : `Laci ${LACI[p]} berisi ${dg(n, p)}. Kosongkan dulu.`,
            explain: tambah ? `${n} + ${first} = ${mid}. Sepuluh ${LACI[p]} ditukar menjadi 1 ${LACI[p + 1]}.` : `${n} − ${first} = ${mid}. Laci ${LACI[p]} sekarang kosong.`, error: 'lupa-tukar-laci' }),
        isi('sisa', `${v} sudah dipakai ${first}. Sisanya berapa? ${v} − ${first} = ?`, rest, { hint: `Pecah ${v} menjadi ${first} dan sisanya.`, explain: `${v} = ${first} + ${rest}.`, error: 'salah-fakta-kurang' }),
        isi('hasil', `Sekarang ${tambah ? 'tambahkan' : 'kurangkan'} sisanya: ${mid} ${op} ${rest} = ?`, r, {
            hint: tambah ? `Hanya laci ${LACI[p]} yang berubah.` : `Tukar 1 ${LACI[p + 1]} menjadi 10 ${LACI[p]}.`, explain: `${mid} ${op} ${rest} = ${r}.`, error: tambah ? 'salah-fakta-tambah' : 'lupa-tukar-laci' }),
    ];
}

const lewatBulat: Generator = (rng, level) => {
    if (level <= 2) {
        const p: 0 | 1 = level === 1 ? 0 : 1;
        const tambah = rng.chance(0.5);
        const { n, v, first, rest } = lewat(rng, p, tambah);
        const r = tambah ? n + v : n - v;
        const steps = langkahLewat(rng, n, v, first, rest, tambah, p);
        if (level === 2) steps.push(isi('cek', `Cek dengan kebalikannya: ${r} ${tambah ? '−' : '+'} ${v} = ?`, n, { hint: `Hasilnya harus kembali ke ${n}.`, explain: `${r} ${tambah ? '−' : '+'} ${v} = ${n}. Benar.`, error: tambah ? 'salah-fakta-kurang' : 'salah-fakta-tambah' }));
        return { text: `Hitung di kepala: $${n} ${tambah ? '+' : '-'} ${v}$`, steps, conclusion: `Jadi ${n} ${tambah ? '+' : '−'} ${v} = ${r}.` };
    }
    // tingkat 3: soal cerita dua langkah: ± ratusan, lalu ± satuan/puluhan yang melewati bulat
    const CERITA = [
        { awal: 'Perpustakaan sekolah punya', benda: 'buku cerita', naik: 'Sekolah membeli', turun: 'buku rusak dan dibuang' },
        { awal: 'Di lapangan ada', benda: 'penonton', naik: 'Lalu datang', turun: 'penonton pulang' },
        { awal: 'Kebun Pak Made punya', benda: 'pohon cabai', naik: 'Pak Made menanam', turun: 'pohon cabai layu dan dicabut' },
    ];
    const c = rng.pick(CERITA);
    const p: 0 | 1 = rng.chance(0.5) ? 0 : 1;
    let n0 = 0, H = 0, sol: ReturnType<typeof lewat> | null = null;
    for (;;) {
        sol = lewat(rng, p, false);
        H = rng.int(1, 4) * 100;
        n0 = sol.n - H;
        if (n0 >= 100) break;
    }
    const { n, v, first, rest } = sol;
    const r = n - v;
    const steps: Step[] = [
        isi('ratusan', `Langkah 1: buka laci ratusan saja. ${n0} + ${H} = ?`, n, { hint: `${H} adalah ${H / 100} ratusan.`, explain: `${n0} + ${H} = ${n}.`, error: 'ubah-tempat-salah' }),
        ...langkahLewat(rng, n, v, first, rest, false, p),
    ];
    return { text: `${c.awal} ${n0} ${c.benda}. ${c.naik} ${H} ${c.benda} lagi. Lalu ${v} ${c.turun}. Berapa ${c.benda} sekarang?`, steps,
        conclusion: `${n0} + ${H} = ${n}, lalu ${n} − ${v} = ${r}. Sekarang ada ${r} ${c.benda}.` };
};

export const topic: TopicDef = {
    topic: 'sd2-03-hitung-cepat-3-angka',
    skills: [
        { code: 'buka-laci', name: 'Menambah dan mengurang satuan, puluhan, ratusan di kepala', gen: bukaLaci },
        { code: 'lewat-bulat', name: 'Hitung cepat melewati puluhan atau ratusan', gen: lewatBulat },
    ],
};
