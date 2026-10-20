/* sd1-04 Penjumlahan dan Pengurangan Bersusun sampai 100: susun menurut nilai tempat, menyimpan, meminjam, soal cerita. */
import type { Generator, Rng, Step, TopicDef } from '../../types';
import { NAMA, pilihan, pilihanTetap, pul, sat } from './common';

const YA_SIMPAN = 'Ya, simpan 1 ke puluhan';
const TIDAK_SIMPAN = 'Tidak perlu menyimpan';
const YA_PINJAM = 'Ya, pinjam 1 puluhan';
const TIDAK_PINJAM = 'Tidak perlu meminjam';

/** Pasangan bilangan untuk penjumlahan; `carry` menentukan perlu menyimpan atau tidak. */
function pasanganTambah(rng: Rng, carry: boolean, satuAngka = false): [number, number] {
    for (;;) {
        const a = rng.int(satuAngka ? 21 : 11, 89);
        const b = satuAngka ? rng.int(2, 9) : rng.int(11, 89);
        const s = sat(a) + sat(b);
        if (a + b > 100) continue;
        if (carry ? s < 10 : s >= 10) continue;
        if (!carry && (sat(a) === 0 || sat(b) === 0) && rng.chance(0.7)) continue;
        return [a, b];
    }
}

/** Pasangan untuk pengurangan a − b; `borrow` menentukan perlu meminjam. */
function pasanganKurang(rng: Rng, borrow: boolean, jenis: 'biasa' | 'puluhan-bulat' | 'satu-angka' = 'biasa'): [number, number] {
    for (;;) {
        const a = jenis === 'puluhan-bulat' ? rng.int(3, 9) * 10 : rng.int(21, 99);
        const b = jenis === 'satu-angka' ? rng.int(2, 9) : rng.int(11, a - 1);
        if (b >= a) continue;
        if (borrow ? sat(a) >= sat(b) : sat(a) < sat(b)) continue;
        if (jenis === 'biasa' && pul(b) === 0) continue;
        return [a, b];
    }
}

const tambah: Generator = (rng, level) => {
    const [a, b] = level === 3 ? (rng.chance(0.6) ? pasanganTambah(rng, true, true) : pasanganTambah(rng, true)) : pasanganTambah(rng, level === 2);
    const sa = sat(a), sb = sat(b), s = sa + sb, carry = s >= 10;
    const steps: Step[] = [];
    if (b < 10) {
        steps.push({ kind: 'choice', id: 'susun', prompt: `Susun lurus. Angka ${b} adalah satuan. Tulis di bawah angka berapa pada ${a}?`,
            ...pilihanTetap(`di bawah ${sa} (satuan)`, [`di bawah ${pul(a)} (puluhan)`, `di bawah ${sa} (satuan)`], { [`di bawah ${pul(a)} (puluhan)`]: 'susun-tidak-lurus' }),
            hint: 'Satuan di bawah satuan, yaitu di kolom kanan.', explain: `${b} ditulis di bawah ${sa}, kolom satuan.`, error: 'susun-tidak-lurus' });
    }
    steps.push(
        { kind: 'number', id: 'satuan', prompt: `Mulai dari kanan. Jumlahkan satuan: ${sa} + ${sb} = ?`, answer: String(s),
          hint: 'Kolom satuan dulu, baru puluhan.', explain: `${sa} + ${sb} = ${s}.`, error: 'salah-fakta-tambah' },
        { kind: 'choice', id: 'simpan', prompt: `Satuannya ${s}. Perlu menyimpan?`, ...pilihanTetap(carry ? YA_SIMPAN : TIDAK_SIMPAN, [YA_SIMPAN, TIDAK_SIMPAN]),
          hint: 'Kalau hasil satuan 10 atau lebih, ikat 10 menjadi 1 puluhan.', explain: carry ? `${s} = 10 + ${s - 10}. Tulis ${s - 10}, simpan 1 di atas puluhan.` : `${s} kurang dari 10. Tidak perlu menyimpan.`,
          error: carry ? 'lupa-simpan' : 'simpan-tidak-perlu' },
        { kind: 'column', id: 'susun-tambah', op: '+', a, b, prompt: `Kerjakan bersusun ${a} + ${b}. Isi satuan dulu, lalu puluhan${carry ? '. Jangan lupa angka simpanan' : ''}.`,
          hint: carry ? `Puluhan: 1 (simpanan) + ${pul(a)} + ${pul(b)}.` : `Puluhan: ${pul(a)} + ${pul(b)}.`,
          explain: `${a} + ${b} = ${a + b}. Cek: ${a + b} − ${b} = ${a}.` },
    );
    return { text: `Hitung dengan cara bersusun: ${a} + ${b} = …`, steps, conclusion: `Jadi ${a} + ${b} = ${a + b}.`,
        visual: level === 1 ? { type: 'base10', tens: pul(a), ones: sa } : undefined };
};

const kurang: Generator = (rng, level) => {
    const [a, b] = level === 3 ? pasanganKurang(rng, true, rng.pick(['puluhan-bulat', 'satu-angka'] as const)) : pasanganKurang(rng, level === 2);
    const sa = sat(a), sb = sat(b), borrow = sa < sb;
    const steps: Step[] = [
        { kind: 'choice', id: 'pinjam', prompt: `Lihat satuan. Atas ${sa}, bawah ${sb}. Perlu meminjam?`, ...pilihanTetap(borrow ? YA_PINJAM : TIDAK_PINJAM, [YA_PINJAM, TIDAK_PINJAM]),
          hint: 'Kalau satuan atas lebih kecil dari satuan bawah, pinjam 1 puluhan.', explain: borrow ? `${sa} lebih kecil dari ${sb}, jadi pinjam 1 puluhan.` : `${sa} tidak lebih kecil dari ${sb}. Tidak perlu meminjam.`,
          error: borrow ? 'lupa-pinjam' : 'pinjam-tidak-perlu' },
    ];
    if (borrow) {
        steps.push(
            { kind: 'number', id: 'puluhan-baru', prompt: `Buka 1 ikat. Puluhan atas ${pul(a)} menjadi?`, answer: String(pul(a) - 1),
              hint: '1 puluhan dipinjam, jadi puluhan berkurang 1.', explain: `${pul(a)} − 1 = ${pul(a) - 1}.`, error: 'salah-pinjam' },
            { kind: 'number', id: 'satuan-baru', prompt: `Satuan atas ${sa} menjadi?`, answer: String(sa + 10),
              hint: '1 ikat berisi 10 stik lepas.', explain: `${sa} + 10 = ${sa + 10}. Sekarang ${sa + 10} − ${sb} = ${sa + 10 - sb}.`, error: 'salah-pinjam' },
        );
    } else {
        steps.push({ kind: 'number', id: 'satuan', prompt: `Kurangkan satuan: ${sa} − ${sb} = ?`, answer: String(sa - sb),
            hint: 'Satuan atas dikurangi satuan bawah.', explain: `${sa} − ${sb} = ${sa - sb}.`, error: 'salah-fakta-kurang' });
    }
    steps.push({ kind: 'column', id: 'susun-kurang', op: '-', a, b, prompt: `Kerjakan bersusun ${a} − ${b}. Mulai dari satuan.${borrow ? ' Tulis angka pinjaman di kotak kecil.' : ''}`,
        hint: borrow ? `Satuan: ${sa + 10} − ${sb}. Puluhan: ${pul(a) - 1} − ${pul(b)}.` : `Puluhan: ${pul(a)} − ${pul(b)}.`,
        explain: `${a} − ${b} = ${a - b}. Cek: ${a - b} + ${b} = ${a}.` });
    return { text: `Hitung dengan cara bersusun: ${a} − ${b} = …`, steps, conclusion: `Jadi ${a} − ${b} = ${a - b}.`,
        visual: level === 1 ? { type: 'base10', tens: pul(a), ones: sa } : undefined };
};

const CERITA_TAMBAH = [
    (n: string, a: number, b: number) => ({ t: `Bu guru punya ${a} buku tulis. Ia membeli ${b} buku tulis lagi. Berapa buku tulis semuanya?`, u: 'buku' }),
    (n: string, a: number, b: number) => ({ t: `Ada ${a} penumpang di kereta. Di stasiun, ${b} orang naik. Tidak ada yang turun. Berapa penumpang sekarang?`, u: 'orang' }),
    (n: string, a: number, b: number) => ({ t: `${n} mengumpulkan ${a} kelereng. Kakak memberinya ${b} kelereng. Berapa kelereng ${n} sekarang?`, u: 'kelereng' }),
];
const CERITA_KURANG = [
    (n: string, a: number, b: number) => ({ t: `Bu ${n} punya ${a} telur. Sebanyak ${b} telur terjual. Berapa telur yang tersisa?`, u: 'telur' }),
    (n: string, a: number, b: number) => ({ t: `Di perpustakaan ada ${a} buku cerita. Sebanyak ${b} buku dipinjam. Berapa buku yang masih ada?`, u: 'buku' }),
    (n: string, a: number, b: number) => ({ t: `Ada ${a} kursi di aula. Sebanyak ${b} kursi sudah diduduki. Berapa kursi yang masih kosong?`, u: 'kursi' }),
];

const OP_T = 'Penjumlahan (+)', OP_K = 'Pengurangan (−)';

const cerita: Generator = (rng, level) => {
    const nama = rng.pick(NAMA);
    if (level === 3) {
        // dua langkah: naik lalu turun
        let a: number, b: number, c: number;
        do { [a, b] = pasanganTambah(rng, true); c = rng.int(11, a + b - 5); } while (sat(a + b) >= sat(c) || a + b > 99);
        const mid = a + b, end = mid - c;
        const steps: Step[] = [
            { kind: 'choice', id: 'rencana', prompt: 'Pahami soal. Ada dua kejadian. Hitungan apa saja?',
              ...pilihan(rng, `${a} + ${b}, lalu − ${c}`, [[`${a} − ${b}, lalu + ${c}`, 'salah-pilih-tambah-kurang'], [`${a} + ${b}, lalu + ${c}`, 'salah-pilih-tambah-kurang'], [`${a} − ${b}, lalu − ${c}`, 'salah-pilih-tambah-kurang']]),
              hint: 'Naik berarti bertambah. Turun berarti berkurang.', explain: `${b} naik: tambah. ${c} turun: kurang.`, error: 'salah-pilih-tambah-kurang' },
            { kind: 'column', id: 'langkah-1', op: '+', a, b, prompt: `Langkah 1: hitung bersusun ${a} + ${b}.`, hint: 'Satuan dulu. Hasil 10 atau lebih? Simpan 1.', explain: `${a} + ${b} = ${mid}.` },
            { kind: 'column', id: 'langkah-2', op: '-', a: mid, b: c, prompt: `Langkah 2: hitung bersusun ${mid} − ${c}.`, hint: 'Satuan atas lebih kecil? Pinjam 1 puluhan.', explain: `${mid} − ${c} = ${end}.` },
            { kind: 'number', id: 'jawaban', prompt: 'Jadi berapa penumpang sekarang?', answer: String(end), suffix: 'orang',
              hint: 'Hasil langkah 2.', explain: `Cek mundur: ${end} + ${c} = ${mid}, lalu ${mid} − ${b} = ${a}.`, error: 'salah-fakta-kurang' },
        ];
        return { text: `Ada ${a} penumpang di bus. Di halte pertama, ${b} orang naik. Di halte kedua, ${c} orang turun. Berapa penumpang sekarang?`, steps,
            conclusion: `Jadi ada ${end} penumpang sekarang.` };
    }
    const isTambah = rng.chance(0.5);
    const [a, b] = isTambah ? pasanganTambah(rng, level === 2) : pasanganKurang(rng, level === 2);
    const { t, u } = (isTambah ? rng.pick(CERITA_TAMBAH) : rng.pick(CERITA_KURANG))(nama, a, b);
    const hasil = isTambah ? a + b : a - b;
    const steps: Step[] = [
        { kind: 'choice', id: 'operasi', prompt: 'Pahami soal. Hitungan apa yang dipakai?', ...pilihanTetap(isTambah ? OP_T : OP_K, [OP_T, OP_K]),
          hint: isTambah ? 'Ada yang ditambahkan atau digabung.' : 'Ada yang terjual, dipinjam, atau diambil.', explain: isTambah ? `Digabung: ${a} + ${b}.` : `Diambil: ${a} − ${b}.`, error: 'salah-pilih-tambah-kurang' },
        { kind: 'column', id: 'susun', op: isTambah ? '+' : '-', a, b, prompt: `Hitung bersusun ${a} ${isTambah ? '+' : '−'} ${b}.`,
          hint: isTambah ? 'Satuan dulu. Hasil 10 atau lebih? Simpan 1.' : 'Satuan dulu. Atas lebih kecil? Pinjam 1 puluhan.', explain: `${a} ${isTambah ? '+' : '−'} ${b} = ${hasil}.` },
        { kind: 'number', id: 'cek', prompt: isTambah ? `Cek dengan pengurangan: ${hasil} − ${b} = ?` : `Cek dengan penjumlahan: ${hasil} + ${b} = ?`, answer: String(a),
          hint: 'Hasilnya harus kembali ke bilangan awal.', explain: `Hasilnya ${a}, sama dengan bilangan awal. Benar.`, error: isTambah ? 'salah-fakta-kurang' : 'salah-fakta-tambah' },
        { kind: 'number', id: 'jawaban', prompt: 'Tulis jawabannya.', answer: String(hasil), suffix: u,
          hint: 'Pakai hasil hitung bersusun.', explain: `Jawabannya ${hasil} ${u}.`, error: isTambah ? 'salah-fakta-tambah' : 'salah-fakta-kurang' },
    ];
    return { text: t, steps, conclusion: `Jadi ${a} ${isTambah ? '+' : '−'} ${b} = ${hasil}. Jawabannya ${hasil} ${u}.` };
};

export const topic: TopicDef = {
    topic: 'sd1-04-tambah-kurang-bersusun-100',
    skills: [
        { code: 'tambah-bersusun', name: 'Penjumlahan bersusun', gen: tambah },
        { code: 'kurang-bersusun', name: 'Pengurangan bersusun', gen: kurang },
        { code: 'cerita-bersusun', name: 'Soal cerita bersusun', gen: cerita },
    ],
};
