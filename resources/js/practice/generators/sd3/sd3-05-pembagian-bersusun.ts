/* Contoh pola generator: sd3-05 Pembagian Bersusun (Porogapit). */
import { divisionPlan } from '../../check';
import type { Generator, Step, TopicDef } from '../../types';

const NAMA = ['Budi', 'Siti', 'Made', 'Putu', 'Rina', 'Andi'];

/** Pembagian dengan sisa di kepala (tabel perkalian), dua langkah: cari kelipatan terdekat, lalu sisa. */
const sisaTabel: Generator = (rng, level) => {
    const divisor = rng.int(level === 1 ? 2 : 3, level === 1 ? 5 : 9);
    const q = rng.int(2, 9);
    const r = rng.int(1, divisor - 1);
    const n = divisor * q + r;
    const steps: Step[] = [
        { kind: 'number', id: 'kelipatan', prompt: `Cari kelipatan ${divisor} terbesar yang tidak lebih dari ${n}: ${divisor} × ? ≤ ${n}`, answer: String(q),
          hint: `Hitung loncat ${divisor}: ${divisor}, ${divisor * 2}, ${divisor * 3}, … berhenti sebelum melewati ${n}.`, explain: `${divisor} × ${q} = ${divisor * q}, dan ${divisor} × ${q + 1} = ${divisor * (q + 1)} sudah lebih dari ${n}.`, error: 'tebakan-bagi-kebesaran' },
        { kind: 'number', id: 'sisa', prompt: `Berapa sisanya? ${n} − ${divisor * q} = ?`, answer: String(r),
          hint: `Kurangkan ${n} dengan ${divisor * q}.`, explain: `Sisa ${r}, dan ${r} lebih kecil dari ${divisor}, jadi sudah benar.`, error: 'salah-kurang-porogapit' },
    ];
    return { text: `Hitung $${n} \\div ${divisor}$. Tulis hasil bagi dan sisanya.`, steps, conclusion: `Jadi ${n} ÷ ${divisor} = ${q} sisa ${r}.`,
        visual: level === 1 ? { type: 'objects', item: 'kelereng', count: n, group: divisor } : undefined };
};

/** Porogapit penuh: 2 atau 3 angka ÷ 1 angka, lalu tulis hasil akhir. */
const porogapit: Generator = (rng, level) => {
    let dividend = 0, divisor = 0;
    for (;;) {
        divisor = rng.int(2, level === 1 ? 5 : 9);
        dividend = level === 1 ? rng.int(20, 99) : rng.int(100, 999);
        const p = divisionPlan(dividend, divisor);
        if (p.quotient < 10) continue;
        if (level === 1 && p.remainder !== 0) continue;
        if (level === 3 && !p.quotientDigits.includes('0') && !(p.quotientDigits[0] === '')) continue; // tantangan: ada 0 di hasil atau angka pertama tidak muat
        break;
    }
    const plan = divisionPlan(dividend, divisor);
    const steps: Step[] = [
        { kind: 'longdiv', id: 'porogapit', prompt: 'Kerjakan dengan porogapit: Bagi → Kali → Kurang → Turun.', dividend, divisor,
          hint: 'Mulai dari angka paling kiri. Kalau tidak muat, gabungkan dengan angka berikutnya.', explain: `Hasil bagi ${plan.quotient}${plan.remainder ? `, sisa ${plan.remainder}` : ', tanpa sisa'}.` },
        { kind: 'number', id: 'cek', prompt: `Cek dengan perkalian: ${plan.quotient} × ${divisor}${plan.remainder ? ` + ${plan.remainder}` : ''} = ?`, answer: String(dividend),
          hint: 'Kalikan hasil bagi dengan pembagi, lalu tambahkan sisanya.', explain: `Hasilnya ${dividend}, sama dengan bilangan yang dibagi. Jawaban benar.`, error: 'salah-fakta-kali' },
    ];
    return { text: `Hitung $${dividend} \\div ${divisor}$ dengan cara bersusun.`, steps, conclusion: `Jadi ${dividend} ÷ ${divisor} = ${plan.quotient}${plan.remainder ? ` sisa ${plan.remainder}` : ''}.` };
};

/** Soal cerita: tafsirkan sisa (dibulatkan ke atas atau diabaikan). */
const cerita: Generator = (rng, level) => {
    const nama = rng.pick(NAMA);
    const divisor = rng.int(level === 1 ? 3 : 4, level === 1 ? 6 : 9);
    let total = 0;
    do total = rng.int(level === 1 ? 25 : 60, level === 1 ? 60 : 300); while (total % divisor === 0 || Math.floor(total / divisor) < 4);
    const q = Math.floor(total / divisor), r = total % divisor;
    const naik = rng.chance(0.5);
    const text = naik
        ? `${nama} mengantar ${total} kardus. Mobil bak bisa membawa ${divisor} kardus sekali jalan. Berapa kali mobil harus jalan supaya semua kardus terangkut?`
        : `${nama} punya ${total} kue. Setiap kotak diisi ${divisor} kue. Berapa kotak yang bisa diisi penuh?`;
    const steps: Step[] = [
        { kind: 'choice', id: 'operasi', prompt: 'Hitungan apa yang dipakai?', options: [`${total} ÷ ${divisor}`, `${total} × ${divisor}`, `${total} − ${divisor}`], answer: `${total} ÷ ${divisor}`,
          hint: 'Kita membagi sejumlah benda ke kelompok yang sama besar.', explain: `Membagi ${total} ke kelompok berisi ${divisor} → ${total} ÷ ${divisor}.`, error: 'salah-pilih-operasi' },
        { kind: 'number', id: 'hasil', prompt: `${total} ÷ ${divisor} = ? (hasil bagi saja)`, answer: String(q),
          hint: 'Pakai porogapit atau hitung loncat.', explain: `${total} ÷ ${divisor} = ${q} sisa ${r}.`, error: 'salah-fakta-kali' },
        { kind: 'number', id: 'sisa', prompt: 'Berapa sisanya?', answer: String(r), hint: `${total} − ${q} × ${divisor}`, explain: `Sisa ${r}.`, error: 'salah-kurang-porogapit' },
        naik
            ? { kind: 'number', id: 'tafsir', prompt: `Sisa ${r} kardus juga harus diangkut. Jadi mobil jalan berapa kali?`, answer: String(q + 1), suffix: 'kali',
                hint: 'Sisa kardus butuh satu kali jalan lagi.', explain: `${q} kali jalan penuh, ditambah 1 kali untuk sisa ${r} kardus.`, error: 'salah-tafsir-sisa' }
            : { kind: 'number', id: 'tafsir', prompt: `Sisa ${r} kue tidak cukup untuk satu kotak penuh. Jadi berapa kotak penuh?`, answer: String(q), suffix: 'kotak',
                hint: 'Kotak yang tidak penuh tidak dihitung.', explain: `Hanya ${q} kotak yang penuh; ${r} kue tersisa.`, error: 'salah-tafsir-sisa' },
    ];
    return { text, steps, conclusion: naik ? `Jawaban: ${q + 1} kali jalan.` : `Jawaban: ${q} kotak penuh, sisa ${r} kue.` };
};

export const topic: TopicDef = {
    topic: 'sd3-05-pembagian-bersusun',
    skills: [
        { code: 'bagi-sisa-tabel', name: 'Pembagian dengan sisa', gen: sisaTabel },
        { code: 'porogapit', name: 'Pembagian bersusun (porogapit)', gen: porogapit },
        { code: 'cerita-sisa', name: 'Soal cerita: memaknai sisa', gen: cerita },
    ],
};
