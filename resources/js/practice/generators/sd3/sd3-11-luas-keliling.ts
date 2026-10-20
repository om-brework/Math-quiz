/* sd3-11 Luas dan keliling: persegi panjang, persegi, bangun bersudut siku, satuan persegi. */
import type { Generator, Step, TopicDef, Visual } from '../../types';
import { NAMA, col, fixed, num, pick, until } from './util';

const ARTI = fixed({ id: 'arti', prompt: 'Keliling adalah ...', options: ['panjang seluruh tepi bangun', 'banyak petak di dalam bangun'], answer: 'panjang seluruh tepi bangun',
    error: 'keliling-luas-tertukar', hint: 'Bayangkan memasang lis di pinggir bangun.', explain: 'Keliling = jumlah panjang semua sisi.' });

/** Keliling persegi panjang dan persegi. */
const keliling: Generator = (rng, level) => {
    if (level === 1) {
        const w = rng.int(3, 8), h = rng.int(2, 6);
        const visual: Visual = { type: 'grid', width: w, height: h, shade: [{ x: 0, y: 0, w, h }] };
        const steps: Step[] = [
            ARTI,
            num({ id: 'pl', prompt: `Hitung panjang + lebar: ${w} + ${h} = ?`, answer: w + h, suffix: 'cm', error: 'salah-fakta-tambah', hint: 'Hitung petak di tepi atas dan tepi samping.', explain: `${w} + ${h} = ${w + h} cm. Itu baru setengah keliling.` }),
            num({ id: 'jawab', prompt: `Jumlahkan keempat sisi: ${w} + ${h} + ${w} + ${h} = ?`, answer: 2 * (w + h), suffix: 'cm', error: 'keliling-dua-sisi',
                hint: 'Persegi panjang punya 4 sisi: 2 panjang dan 2 lebar.', explain: `${w} + ${h} + ${w} + ${h} = ${2 * (w + h)} cm.` }),
        ];
        return { text: `Setiap petak bersisi 1 cm. Berapa keliling persegi panjang yang diarsir?`, visual, steps, conclusion: `Jadi kelilingnya ${2 * (w + h)} cm.` };
    }
    const unit = rng.pick(['cm', 'm']);
    const persegi = rng.chance(0.4);
    if (level === 2) {
        if (persegi) {
            const s = rng.int(4, 15);
            const steps: Step[] = [
                fixed({ id: 'sisi', prompt: 'Sisi-sisi persegi ...', options: ['sama panjang semua', 'dua panjang, dua pendek'], answer: 'sama panjang semua', error: 'keliling-dua-sisi', hint: 'Ingat bentuk persegi.', explain: `Keempat sisinya ${s} ${unit}.` }),
                num({ id: 'jawab', prompt: `Keliling = 4 × ${s} = ?`, answer: 4 * s, suffix: unit, error: 'keliling-dua-sisi', hint: `${s} + ${s} + ${s} + ${s}`, explain: `4 × ${s} = ${4 * s} ${unit}.` }),
            ];
            return { text: `Sebuah persegi bersisi ${s} ${unit}. Berapa kelilingnya?`, visual: { type: 'rect', width: s, height: s, unit }, steps, conclusion: `Jadi kelilingnya ${4 * s} ${unit}.` };
        }
        const [p, l] = until(() => [rng.int(6, 25), rng.int(3, 15)], ([x, y]) => x > y);
        const steps: Step[] = [
            num({ id: 'pl', prompt: `Panjang + lebar = ?`, answer: p + l, suffix: unit, error: 'salah-fakta-tambah', hint: `${p} + ${l}`, explain: `${p} + ${l} = ${p + l} ${unit}.` }),
            num({ id: 'jawab', prompt: `Keliling = ${p} + ${l} + ${p} + ${l} = ?`, answer: 2 * (p + l), suffix: unit, error: 'keliling-dua-sisi',
                hint: `Dua kali (panjang + lebar): ${p + l} + ${p + l}.`, explain: `${p + l} + ${p + l} = ${2 * (p + l)} ${unit}.` }),
        ];
        return { text: `Sebuah persegi panjang punya panjang ${p} ${unit} dan lebar ${l} ${unit}. Berapa kelilingnya?`, visual: { type: 'rect', width: p, height: l, unit }, steps,
            conclusion: `Jadi kelilingnya ${2 * (p + l)} ${unit}.` };
    }
    // tingkat 3: keliling diketahui, cari sisi
    if (persegi) {
        const s = rng.int(4, 15);
        const steps: Step[] = [
            fixed({ id: 'cara', prompt: `Keliling persegi = 4 × sisi. Untuk mencari sisi, ${4 * s} ...`, options: ['dibagi 4', 'dikali 4', 'dikurangi 4'], answer: 'dibagi 4', error: 'salah-pilih-operasi',
                hint: 'Kebalikan dari kali adalah bagi.', explain: `Sisi = ${4 * s} ÷ 4.` }),
            num({ id: 'jawab', prompt: `${4 * s} ÷ 4 = ?`, answer: s, suffix: unit, error: 'salah-fakta-bagi', hint: `4 × ? = ${4 * s}`, explain: `4 × ${s} = ${4 * s}, jadi sisinya ${s} ${unit}. Cek: ${s} + ${s} + ${s} + ${s} = ${4 * s}.` }),
        ];
        return { text: `Keliling sebuah persegi ${4 * s} ${unit}. Berapa panjang sisinya?`, visual: { type: 'rect', width: s, height: s, unit, hideWidth: true, hideHeight: true }, steps, conclusion: `Jadi sisinya ${s} ${unit}.` };
    }
    const [p, l] = until(() => [rng.int(6, 20), rng.int(3, 12)], ([x, y]) => x > y);
    const K = 2 * (p + l);
    const steps: Step[] = [
        num({ id: 'setengah', prompt: `Panjang + lebar = setengah keliling. ${K} ÷ 2 = ?`, answer: p + l, suffix: unit, error: 'keliling-dua-sisi',
            hint: 'Keliling terdiri dari dua kali (panjang + lebar).', explain: `${K} ÷ 2 = ${p + l} ${unit}.` }),
        num({ id: 'jawab', prompt: `Lebar = ${p + l} − ${p} = ?`, answer: l, suffix: unit, error: 'salah-fakta-kurang', hint: 'Kurangkan panjangnya.', explain: `Lebar ${l} ${unit}. Cek: ${p} + ${l} + ${p} + ${l} = ${K}.` }),
    ];
    return { text: `Keliling sebuah persegi panjang ${K} ${unit}. Panjangnya ${p} ${unit}. Berapa lebarnya?`, visual: { type: 'rect', width: p, height: l, unit, hideHeight: true }, steps, conclusion: `Jadi lebarnya ${l} ${unit}.` };
};

/** Luas persegi panjang dan persegi. */
const luas: Generator = (rng, level) => {
    if (level === 1) {
        const w = rng.int(3, 9), h = rng.int(2, 6);
        const steps: Step[] = [
            num({ id: 'baris', prompt: 'Ada berapa baris petak?', answer: h, error: 'keliling-luas-tertukar', hint: 'Hitung dari atas ke bawah.', explain: `${h} baris.` }),
            num({ id: 'per-baris', prompt: 'Ada berapa petak di setiap baris?', answer: w, error: 'keliling-luas-tertukar', hint: 'Hitung dari kiri ke kanan.', explain: `${w} petak.` }),
            num({ id: 'jawab', prompt: `Luas = ${h} × ${w} = ?`, answer: w * h, suffix: 'cm²', error: 'salah-fakta-kali', hint: `Hitung loncat ${w} sebanyak ${h} kali.`, explain: `${h} × ${w} = ${w * h}. Luasnya ${w * h} cm².` }),
        ];
        return { text: 'Setiap petak adalah persegi 1 cm × 1 cm (1 cm²). Berapa luas bangun yang diarsir?', visual: { type: 'grid', width: w, height: h, shade: [{ x: 0, y: 0, w, h }] }, steps,
            conclusion: `Jadi luasnya ${w * h} cm².` };
    }
    const unit = rng.pick(['cm', 'm']);
    const persegi = rng.chance(0.35);
    if (level === 2) {
        const [p, l] = persegi ? (() => { const s = rng.int(4, 12); return [s, s]; })() : until(() => [rng.int(5, 15), rng.int(3, 9)], ([x, y]) => x > y);
        const satuan = pick(rng, { id: 'satuan', prompt: 'Satuan luasnya apa?', answer: `${unit}²`, wrong: [[unit, 'salah-satuan-luas'], [unit === 'cm' ? 'm²' : 'cm²', 'salah-satuan-luas']],
            error: 'salah-satuan-luas', hint: 'Luas diukur dengan persegi satuan.', explain: `Luas memakai ${unit}² (${unit === 'cm' ? 'sentimeter' : 'meter'} persegi).` });
        const steps: Step[] = [satuan];
        if (p >= 10 && l <= 9) steps.push(col({ id: 'susun', prompt: `Hitung ${p} × ${l} bersusun.`, op: '×', a: p, b: l, hint: 'Kalikan satuan dulu, simpan, lalu puluhan.', explain: `${p} × ${l} = ${p * l}.` }));
        steps.push(num({ id: 'jawab', prompt: persegi ? `Luas = sisi × sisi = ${p} × ${l} = ?` : `Luas = panjang × lebar = ${p} × ${l} = ?`, answer: p * l, suffix: `${unit}²`, error: 'keliling-luas-tertukar',
            hint: persegi ? 'Kalikan sisi dengan sisi, bukan dijumlahkan.' : 'Kalikan panjang dan lebar, bukan dijumlahkan.', explain: `${p} × ${l} = ${p * l} ${unit}².` }));
        return { text: persegi ? `Sebuah persegi bersisi ${p} ${unit}. Berapa luasnya?` : `Sebuah persegi panjang punya panjang ${p} ${unit} dan lebar ${l} ${unit}. Berapa luasnya?`,
            visual: { type: 'rect', width: p, height: l, unit }, steps, conclusion: `Jadi luasnya ${p * l} ${unit}².` };
    }
    // tingkat 3: luas diketahui, cari sisi
    if (persegi) {
        const s = rng.int(3, 10);
        const steps: Step[] = [
            pick(rng, { id: 'cara', prompt: `Luas persegi = sisi × sisi. Bilangan apa dikali dirinya sendiri sama dengan ${s * s}?`, answer: String(s),
                wrong: [[String(s + 1), 'salah-fakta-kali'], [String(s - 1), 'salah-fakta-kali'], [String(2 * s), 'keliling-luas-tertukar']], error: 'salah-fakta-kali',
                hint: `Coba ${s - 1} × ${s - 1}, ${s} × ${s}, ${s + 1} × ${s + 1}.`, explain: `${s} × ${s} = ${s * s}, jadi sisinya ${s} ${unit}.` }),
            num({ id: 'jawab', prompt: `Jadi keliling persegi itu = 4 × ${s} = ?`, answer: 4 * s, suffix: unit, error: 'keliling-luas-tertukar', hint: 'Keliling persegi = 4 × sisi.', explain: `4 × ${s} = ${4 * s} ${unit}.` }),
        ];
        return { text: `Luas sebuah persegi ${s * s} ${unit}². Berapa sisinya? Lalu berapa kelilingnya?`, visual: { type: 'rect', width: s, height: s, unit, hideWidth: true, hideHeight: true }, steps,
            conclusion: `Sisinya ${s} ${unit}, jadi kelilingnya ${4 * s} ${unit}.` };
    }
    const [p, l] = until(() => [rng.int(4, 9), rng.int(2, 9)], ([x, y]) => x > y);
    const steps: Step[] = [
        pick(rng, { id: 'cara', prompt: 'Kalimat mana yang cocok?', answer: `${p} × ? = ${p * l}`, wrong: [[`${p} + ? = ${p * l}`, 'keliling-luas-tertukar'], [`${p * l} × ${p} = ?`, 'salah-pilih-operasi']],
            error: 'salah-pilih-operasi', hint: 'Luas = panjang × lebar.', explain: `${p} × lebar = ${p * l}.` }),
        num({ id: 'jawab', prompt: `${p} × ? = ${p * l}. Berapa lebarnya?`, answer: l, suffix: unit, error: 'salah-fakta-bagi', hint: `Hitung loncat ${p} sampai ${p * l}.`, explain: `${p} × ${l} = ${p * l}, jadi lebarnya ${l} ${unit}.` }),
    ];
    return { text: `Luas sebuah persegi panjang ${p * l} ${unit}². Panjangnya ${p} ${unit}. Berapa lebarnya?`, visual: { type: 'rect', width: p, height: l, unit, hideHeight: true }, steps,
        conclusion: `Jadi lebarnya ${l} ${unit}.` };
};

/** Keliling bangun bersudut siku (bentuk L). */
const bangunSiku: Generator = (rng, level) => {
    const big = level === 1 ? [4, 9, 3, 7] : [6, 20, 4, 15];
    const [W, H] = [rng.int(big[0], big[1]), rng.int(big[2], big[3])];
    const top = rng.int(1, W - 2) + 0, right = rng.int(1, H - 2);
    const a = H - right, b = W - top;
    const unit = level === 3 ? 'm' : 'cm';
    const K = 2 * (W + H);
    const known = `Sisi kiri ${H} ${unit}, sisi bawah ${W} ${unit}, sisi atas ${top} ${unit}, dan sisi kanan bawah ${right} ${unit}.`;
    const visual: Visual = { type: 'grid', width: W, height: H, shade: [{ x: 0, y: 0, w: top, h: a }, { x: 0, y: a, w: W, h: right }] };
    const steps: Step[] = [
        num({ id: 'sisi-a', prompt: `Cari sisi tegak yang belum diketahui (sisi a): ${H} − ${right} = ?`, answer: a, suffix: unit, error: 'lupa-sisi-bangun',
            hint: `Sisi kiri ${H} sama dengan gabungan sisi kanan: a + ${right}.`, explain: `a = ${H} − ${right} = ${a} ${unit}.` }),
        num({ id: 'sisi-b', prompt: `Cari sisi mendatar yang belum diketahui (sisi b): ${W} − ${top} = ?`, answer: b, suffix: unit, error: 'lupa-sisi-bangun',
            hint: `Sisi bawah ${W} sama dengan gabungan sisi atas: ${top} + b.`, explain: `b = ${W} − ${top} = ${b} ${unit}.` }),
        num({ id: 'jawab', prompt: `Jumlahkan keenam sisi: ${W} + ${H} + ${top} + ${a} + ${b} + ${right} = ?`, answer: K, suffix: unit, error: 'lupa-sisi-bangun',
            hint: 'Jumlahkan sedikit demi sedikit. Jangan ada sisi yang terlewat.', explain: `Mendatar: ${W} + ${top} + ${b} = ${2 * W}. Tegak: ${H} + ${a} + ${right} = ${2 * H}. Total ${K} ${unit}.` }),
    ];
    if (level === 3) {
        const nama = rng.pick(NAMA);
        return { text: `Kebun ${nama} berbentuk huruf L (semua sudutnya siku-siku). ${known} ${nama} ingin memasang pagar di sekeliling kebun. Berapa meter pagar yang dibutuhkan?`,
            steps: [fixed({ id: 'jenis', prompt: 'Pagar dipasang di tepi kebun. Yang dihitung ...', options: ['keliling', 'luas'], answer: 'keliling', error: 'keliling-luas-tertukar', hint: 'Pagar seperti lis di pinggir.', explain: 'Pagar di tepi, jadi kita hitung keliling.' }), ...steps],
            conclusion: `Jadi dibutuhkan ${K} m pagar.` };
    }
    return { text: level === 1 ? `Setiap petak bersisi 1 cm. Bangun berbentuk L di bawah ini. ${known} Berapa kelilingnya?` : `Bangun berbentuk L (semua sudutnya siku-siku). ${known} Berapa kelilingnya?`,
        visual: level === 1 ? visual : undefined, steps, conclusion: `Jadi kelilingnya ${K} ${unit}.` };
};

const CERITA = [
    { teks: 'memasang pagar di sekeliling kebun', jenis: 'keliling' as const, benda: 'kebun', u: 'm' },
    { teks: 'memasang lis di pinggir bingkai foto', jenis: 'keliling' as const, benda: 'bingkai', u: 'cm' },
    { teks: 'menempel pita di sekeliling kartu ucapan', jenis: 'keliling' as const, benda: 'kartu', u: 'cm' },
    { teks: 'menanam rumput di seluruh halaman', jenis: 'luas' as const, benda: 'halaman', u: 'm' },
    { teks: 'menutup lantai kamar dengan karpet', jenis: 'luas' as const, benda: 'lantai', u: 'm' },
    { teks: 'menutup meja dengan kertas kado', jenis: 'luas' as const, benda: 'meja', u: 'cm' },
];

/** Soal cerita: luas atau keliling? */
const luasAtauKeliling: Generator = (rng, level) => {
    const nama = rng.pick(NAMA);
    const c = rng.pick(CERITA);
    const [p, l] = until(() => [rng.int(4, level === 1 ? 9 : 15), rng.int(2, 9)], ([x, y]) => x > y);
    const isK = c.jenis === 'keliling';
    const jenis = fixed({ id: 'jenis', prompt: 'Yang dihitung keliling atau luas?', options: ['keliling', 'luas'], answer: c.jenis, error: 'keliling-luas-tertukar',
        hint: 'Di tepi (pagar, lis, pita) berarti keliling. Menutup permukaan (rumput, karpet, ubin) berarti luas.', explain: isK ? 'Dipasang di tepi, jadi keliling.' : 'Menutup permukaan, jadi luas.' });
    if (level === 3) {
        const q = until(() => [rng.int(6, 15), rng.int(3, 9)], ([x, y]) => x > y);
        const steps: Step[] = [
            fixed({ id: 'jenis', prompt: 'Pagar dipasang di tepi. Yang dihitung ...', options: ['keliling', 'luas'], answer: 'keliling', error: 'keliling-luas-tertukar', hint: 'Pagar seperti lis di pinggir.', explain: 'Pagar di tepi, jadi keliling.' }),
            num({ id: 'keliling', prompt: `Keliling seluruh kebun = ${q[0]} + ${q[1]} + ${q[0]} + ${q[1]} = ?`, answer: 2 * (q[0] + q[1]), suffix: 'm', error: 'keliling-dua-sisi', hint: 'Jumlahkan keempat sisi.', explain: `Keliling ${2 * (q[0] + q[1])} m.` }),
            num({ id: 'jawab', prompt: `Satu sisi panjang sudah ada tembok. Pagar = ${2 * (q[0] + q[1])} − ${q[0]} = ?`, answer: 2 * (q[0] + q[1]) - q[0], suffix: 'm', error: 'salah-urutan-langkah',
                hint: 'Sisi yang menempel tembok tidak perlu dipagari.', explain: `${2 * (q[0] + q[1])} − ${q[0]} = ${q[0] + 2 * q[1]} m. Cek: ${q[0]} + ${q[1]} + ${q[1]} = ${q[0] + 2 * q[1]}.` }),
        ];
        return { text: `Kebun ${nama} berbentuk persegi panjang, panjang ${q[0]} m dan lebar ${q[1]} m. Satu sisi panjangnya menempel tembok rumah. Sisi lainnya akan dipagari. Berapa meter pagar yang dibutuhkan?`,
            visual: { type: 'rect', width: q[0], height: q[1], unit: 'm' }, steps, conclusion: `Jadi dibutuhkan ${q[0] + 2 * q[1]} m pagar.` };
    }
    const ans = isK ? 2 * (p + l) : p * l;
    const steps: Step[] = [jenis];
    if (level === 2) steps.push(isK
        ? num({ id: 'pl', prompt: `Panjang + lebar = ?`, answer: p + l, suffix: c.u, error: 'salah-fakta-tambah', hint: `${p} + ${l}`, explain: `${p + l} ${c.u}, setengah keliling.` })
        : pick(rng, { id: 'satuan', prompt: 'Satuan jawabannya?', answer: `${c.u}²`, wrong: [[c.u, 'salah-satuan-luas'], [`${c.u === 'm' ? 'cm' : 'm'}²`, 'salah-satuan-luas']], error: 'salah-satuan-luas', hint: 'Luas memakai satuan persegi.', explain: `Satuan luas ${c.u}².` }));
    steps.push(num({ id: 'jawab', prompt: isK ? `Keliling = ${p} + ${l} + ${p} + ${l} = ?` : `Luas = ${p} × ${l} = ?`, answer: ans, suffix: isK ? c.u : `${c.u}²`, error: isK ? 'keliling-dua-sisi' : 'keliling-luas-tertukar',
        hint: isK ? 'Jumlahkan keempat sisi.' : 'Panjang × lebar.', explain: `${isK ? 'Keliling' : 'Luas'} = ${ans} ${isK ? c.u : `${c.u}²`}.` }));
    return { text: `${nama} ingin ${c.teks}. ${c.benda[0].toUpperCase()}${c.benda.slice(1)} itu berbentuk persegi panjang, panjang ${p} ${c.u} dan lebar ${l} ${c.u}. Berapa ${isK ? `${c.u === 'm' ? 'meter' : 'sentimeter'} yang dibutuhkan` : 'luas yang harus ditutup'}?`,
        visual: { type: 'rect', width: p, height: l, unit: c.u }, steps, conclusion: `Jadi ${isK ? 'kelilingnya' : 'luasnya'} ${ans} ${isK ? c.u : `${c.u}²`}.` };
};

export const topic: TopicDef = {
    topic: 'sd3-11-luas-keliling',
    skills: [
        { code: 'keliling', name: 'Keliling persegi panjang dan persegi', gen: keliling },
        { code: 'luas', name: 'Luas persegi panjang dan persegi', gen: luas },
        { code: 'keliling-bangun-siku', name: 'Keliling bangun bersudut siku', gen: bangunSiku },
        { code: 'luas-atau-keliling', name: 'Soal cerita: luas atau keliling?', gen: luasAtauKeliling },
    ],
};
