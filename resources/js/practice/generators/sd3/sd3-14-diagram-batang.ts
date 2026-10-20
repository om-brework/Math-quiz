/* sd3-14 Diagram batang: membaca skala, paling banyak/sedikit, selisih, total. */
import { fmt } from '../../format';
import type { Generator, Rng, Step, TopicDef, Visual } from '../../types';
import { num, pick, fixed, until } from './util';

interface Tema { title: string; unit: string; labels: string[]; benda: string }
const TEMA: Tema[] = [
    { title: 'Buah kesukaan siswa kelas 3A', unit: 'siswa', labels: ['Mangga', 'Pisang', 'Jeruk', 'Salak', 'Rambutan'], benda: 'siswa' },
    { title: 'Buku yang dipinjam dalam satu minggu', unit: 'buku', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'], benda: 'buku' },
    { title: 'Botol plastik yang dikumpulkan', unit: 'botol', labels: ['3A', '3B', '3C', '3D', '3E'], benda: 'botol' },
    { title: 'Es krim yang terjual', unit: 'es krim', labels: ['Cokelat', 'Vanila', 'Stroberi', 'Durian', 'Kelapa'], benda: 'es krim' },
    { title: 'Hewan peliharaan siswa', unit: 'siswa', labels: ['Kucing', 'Anjing', 'Ikan', 'Burung', 'Kelinci'], benda: 'siswa' },
];

interface Data { tema: Tema; scale: number; bars: { label: string; value: number }[]; visual: Visual }

/** Diagram dengan `n` batang; nilai kelipatan skala (atau setengah skala kalau `half`), semua berbeda. */
function data(rng: Rng, scales: number[], n: number, half = false, maxK = 9): Data {
    const scale = rng.pick(scales);
    const tema = rng.pick(TEMA.filter((t) => t.unit !== 'siswa' || scale <= 10));
    const values = until(() => Array.from({ length: n }, () => rng.int(1, maxK) * scale + (half && rng.chance(0.4) ? scale / 2 : 0)), (v) => new Set(v).size === n && (!half || v.some((x) => x % scale !== 0)));
    const bars = tema.labels.slice(0, n).map((label, i) => ({ label, value: values[i] }));
    const max = (Math.max(...values) / scale >= maxK ? Math.ceil(Math.max(...values) / scale) + 1 : maxK) * scale;
    return { tema, scale, bars, visual: { type: 'barChart', scaleStep: scale, max, bars, title: tema.title, unit: tema.unit } };
}

const skalaStep = (d: Data): Step =>
    num({ id: 'skala', prompt: 'Lihat angka di sumbu tegak. Skalanya berapa?', answer: d.scale, error: 'salah-baca-skala',
        hint: 'Skala adalah besar loncatan dari satu garis ke garis berikutnya: 0, ?, …', explain: `Angkanya 0, ${fmt(d.scale)}, ${fmt(2 * d.scale)}, … jadi skalanya ${fmt(d.scale)}.` });
const bacaStep = (d: Data, i: number, id = 'baca'): Step =>
    num({ id, prompt: `Berapa nilai batang ${d.bars[i].label}?`, answer: d.bars[i].value, suffix: d.tema.unit, error: 'salah-baca-skala',
        hint: d.bars[i].value % d.scale ? 'Puncaknya di tengah-tengah dua garis. Nilainya di tengah dua angka itu.' : 'Tarik garis dari puncak batang ke kiri, lalu baca angkanya.',
        explain: `Batang ${d.bars[i].label} bernilai ${fmt(d.bars[i].value)}.` });

/** Membaca skala dan nilai batang. */
const bacaSkala: Generator = (rng, level) => {
    if (level < 3) {
        const d = level === 1 ? data(rng, [2, 5], 4) : data(rng, [10, 100, 20], 4, true);
        const i = level === 2 ? Math.max(0, d.bars.findIndex((b) => b.value % d.scale !== 0)) : rng.int(0, 3);
        return { text: `Diagram batang ini menunjukkan ${d.tema.title.toLowerCase()}. Berapa nilai batang ${d.bars[i].label}?`, visual: d.visual, steps: [skalaStep(d), bacaStep(d, i)],
            conclusion: `Jadi ${d.bars[i].label}: ${fmt(d.bars[i].value)} ${d.tema.unit}.` };
    }
    const d = data(rng, [5, 50, 100], 5);
    const i = rng.int(0, 4);
    const k = d.bars[i].value / d.scale;
    const steps: Step[] = [
        skalaStep(d),
        num({ id: 'garis', prompt: `Puncak batang ${d.bars[i].label} ada di garis ke-${k}. Berapa nilainya?`, answer: d.bars[i].value, suffix: d.tema.unit, error: 'salah-baca-skala',
            hint: `Bukan ${k}. Setiap garis bernilai ${fmt(d.scale)}: ${k} × ${fmt(d.scale)}.`, explain: `${k} × ${fmt(d.scale)} = ${fmt(d.bars[i].value)}.` }),
        pick(rng, { id: 'jawab', prompt: `Batang mana yang nilainya ${fmt(d.bars[(i + 1) % 5].value)}?`, answer: d.bars[(i + 1) % 5].label,
            wrong: d.bars.filter((_, j) => j !== (i + 1) % 5).map((b) => [b.label, 'salah-baca-skala'] as [string, string]), error: 'salah-baca-skala',
            hint: `Cari angka ${fmt(d.bars[(i + 1) % 5].value)} di sumbu tegak, lalu lihat batang yang puncaknya setinggi itu.`, explain: `Batang ${d.bars[(i + 1) % 5].label} setinggi ${fmt(d.bars[(i + 1) % 5].value)}.` }),
    ];
    return { text: `Perhatikan diagram ${d.tema.title.toLowerCase()}.`, visual: d.visual, steps, conclusion: `${d.bars[i].label} = ${fmt(d.bars[i].value)}, dan ${d.bars[(i + 1) % 5].label} = ${fmt(d.bars[(i + 1) % 5].value)}.` };
};

/** Paling banyak/sedikit dan selisih. */
const bandingSelisih: Generator = (rng, level) => {
    if (level === 1) {
        const d = data(rng, [2, 5, 10], 4);
        const most = rng.chance(0.5);
        const idx = d.bars.reduce((best, b, j) => ((most ? b.value > d.bars[best].value : b.value < d.bars[best].value) ? j : best), 0);
        const steps: Step[] = [
            pick(rng, { id: 'cari', prompt: `Mana yang paling ${most ? 'banyak' : 'sedikit'}?`, answer: d.bars[idx].label, wrong: d.bars.filter((_, j) => j !== idx).map((b) => [b.label, 'salah-baca-skala'] as [string, string]),
                error: 'salah-baca-skala', hint: `Cari batang yang paling ${most ? 'tinggi' : 'pendek'}.`, explain: `Batang ${d.bars[idx].label} paling ${most ? 'tinggi' : 'pendek'}.` }),
            bacaStep(d, idx, 'jawab'),
        ];
        return { text: `Lihat diagram ${d.tema.title.toLowerCase()}. Mana yang paling ${most ? 'banyak' : 'sedikit'}, dan berapa banyaknya?`, visual: d.visual, steps,
            conclusion: `Jadi ${d.bars[idx].label} paling ${most ? 'banyak' : 'sedikit'}, yaitu ${fmt(d.bars[idx].value)} ${d.tema.unit}.` };
    }
    if (level === 2) {
        const d = data(rng, [5, 10, 50], 5);
        const [i, j] = until(() => [rng.int(0, 4), rng.int(0, 4)], ([a, b]) => d.bars[a].value > d.bars[b].value);
        const diff = d.bars[i].value - d.bars[j].value;
        const steps: Step[] = [
            bacaStep(d, i, 'baca1'), bacaStep(d, j, 'baca2'),
            num({ id: 'jawab', prompt: `Selisihnya: ${fmt(d.bars[i].value)} − ${fmt(d.bars[j].value)} = ?`, answer: diff, suffix: d.tema.unit, error: 'selisih-dijumlah',
                hint: '"Berapa lebih banyak" berarti mengurangkan, bukan menjumlahkan.', explain: `${fmt(d.bars[i].value)} − ${fmt(d.bars[j].value)} = ${fmt(diff)}.` }),
        ];
        return { text: `Lihat diagram ${d.tema.title.toLowerCase()}. Berapa ${d.tema.benda} lebih banyak pada ${d.bars[i].label} daripada ${d.bars[j].label}?`, visual: d.visual, steps,
            conclusion: `Jadi ${d.bars[i].label} ${fmt(diff)} ${d.tema.unit} lebih banyak daripada ${d.bars[j].label}.` };
    }
    const d = data(rng, [100, 50], 4);
    const [i, j] = until(() => [rng.int(0, 3), rng.int(0, 3)], ([a, b]) => d.bars[b].value > d.bars[a].value);
    const diff = d.bars[j].value - d.bars[i].value;
    const steps: Step[] = [
        bacaStep(d, i, 'baca1'),
        num({ id: 'target', prompt: `${fmt(diff)} lebih banyak dari ${d.bars[i].label}: ${fmt(d.bars[i].value)} + ${fmt(diff)} = ?`, answer: d.bars[j].value, error: 'selisih-dijumlah',
            hint: '"Lebih banyak dari" berarti ditambahkan.', explain: `${fmt(d.bars[i].value)} + ${fmt(diff)} = ${fmt(d.bars[j].value)}.` }),
        pick(rng, { id: 'jawab', prompt: `Batang mana yang tingginya ${fmt(d.bars[j].value)}?`, answer: d.bars[j].label, wrong: d.bars.filter((_, x) => x !== j).map((b) => [b.label, 'salah-baca-skala'] as [string, string]),
            error: 'salah-baca-skala', hint: `Cari angka ${fmt(d.bars[j].value)} di sumbu tegak.`, explain: `Batang ${d.bars[j].label} bernilai ${fmt(d.bars[j].value)}.` }),
    ];
    return { text: `Lihat diagram ${d.tema.title.toLowerCase()}. Mana yang ${fmt(diff)} ${d.tema.benda} lebih banyak daripada ${d.bars[i].label}?`, visual: d.visual, steps,
        conclusion: `Jadi jawabannya ${d.bars[j].label} (${fmt(d.bars[j].value)}).` };
};

/** Total dan soal cerita target. */
const total: Generator = (rng, level) => {
    if (level < 3) {
        const n = level === 1 ? 3 : 5;
        const d = data(rng, level === 1 ? [2, 5] : [5, 10], n);
        const vals = d.bars.map((b) => b.value);
        const sum = vals.reduce((a, b) => a + b, 0);
        const part = vals.slice(0, n - 1).reduce((a, b) => a + b, 0);
        const steps: Step[] = [];
        if (level === 2) steps.push(skalaStep(d));
        steps.push(
            num({ id: 'sebagian', prompt: `Jumlahkan dulu ${d.bars.slice(0, n - 1).map((b) => b.label).join(', ')}.`, answer: part, suffix: d.tema.unit, error: 'salah-baca-skala',
                hint: 'Baca nilai tiap batang (tarik garis dari puncak ke kiri), lalu jumlahkan sedikit demi sedikit.', explain: `${vals.slice(0, n - 1).map(fmt).join(' + ')} = ${fmt(part)}.` }),
            num({ id: 'jawab', prompt: `Tambahkan ${d.bars[n - 1].label}. Berapa totalnya?`, answer: sum, suffix: d.tema.unit, error: 'lupa-batang',
                hint: `${fmt(part)} + nilai batang ${d.bars[n - 1].label}.`, explain: `${fmt(part)} + ${fmt(vals[n - 1])} = ${fmt(sum)}. Ada ${n} batang dan semua sudah dijumlahkan.` }),
        );
        return { text: `Lihat diagram ${d.tema.title.toLowerCase()}. Berapa ${d.tema.benda} semuanya?`, visual: d.visual, steps, conclusion: `Jadi totalnya ${fmt(sum)} ${d.tema.unit}.` };
    }
    const tema = TEMA[2];
    const vals = until(() => Array.from({ length: 4 }, () => rng.int(2, 9) * 100), (v) => new Set(v).size === 4);
    const sum = vals.reduce((a, b) => a + b, 0);
    const T = (Math.floor(sum / 500) + rng.int(1, 2)) * 500;
    const bars = tema.labels.slice(0, 4).map((label, i) => ({ label, value: vals[i] }));
    const visual: Visual = { type: 'barChart', scaleStep: 100, max: 1000, bars, title: tema.title, unit: 'botol' };
    const steps: Step[] = [
        num({ id: 'total', prompt: 'Berapa botol yang terkumpul semuanya?', answer: sum, suffix: 'botol', error: 'lupa-batang', hint: `Baca keempat batang lalu jumlahkan: ${vals.map(() => '?').join(' + ')}.`, explain: `${vals.map(fmt).join(' + ')} = ${fmt(sum)}.` }),
        fixed({ id: 'tercapai', prompt: `Target ${fmt(T)} botol. Sudah tercapai?`, options: ['sudah', 'belum'], answer: 'belum', error: 'salah-banding-bilangan', hint: `Bandingkan ${fmt(sum)} dengan ${fmt(T)}.`, explain: `${fmt(sum)} < ${fmt(T)}, jadi belum tercapai.` }),
        num({ id: 'jawab', prompt: 'Berapa botol lagi yang dibutuhkan?', answer: T - sum, suffix: 'botol', error: 'selisih-dijumlah', hint: `${fmt(T)} − ${fmt(sum)}`, explain: `${fmt(T)} − ${fmt(sum)} = ${fmt(T - sum)}. Cek: ${fmt(sum)} + ${fmt(T - sum)} = ${fmt(T)}.` }),
    ];
    return { text: `Empat kelas mengumpulkan botol plastik untuk didaur ulang. Targetnya ${fmt(T)} botol. Apakah target tercapai? Kalau belum, berapa botol lagi yang dibutuhkan?`, visual, steps,
        conclusion: `Terkumpul ${fmt(sum)} botol. Target belum tercapai, kurang ${fmt(T - sum)} botol.` };
};

export const topic: TopicDef = {
    topic: 'sd3-14-diagram-batang',
    skills: [
        { code: 'baca-skala', name: 'Membaca skala dan nilai batang', gen: bacaSkala },
        { code: 'banding-selisih', name: 'Paling banyak, paling sedikit, dan selisih', gen: bandingSelisih },
        { code: 'total-diagram', name: 'Total dan soal cerita diagram batang', gen: total },
    ],
};
