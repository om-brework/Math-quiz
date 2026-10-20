/* sd1-11 Diagram Gambar (piktogram): membaca, paling banyak/sedikit, selisih, jumlah. Satu gambar = 1. */
import type { Generator, ObjectName, Rng, Step, TopicDef, Visual } from '../../types';
import { berbeda, pilihan, pilihanTetap } from './common';

interface Data { title: string; item: ObjectName; unit: string; labels: string[]; tanya: (l: string) => string }
const DATA: Data[] = [
    { title: 'Buah Kesukaan Siswa Kelas 1A', item: 'bintang', unit: 'siswa', labels: ['Mangga', 'Pisang', 'Jeruk', 'Apel', 'Salak'], tanya: (l) => `menyukai ${l.toLowerCase()}` },
    { title: 'Kendaraan yang Lewat di Depan Sekolah', item: 'mobil', unit: 'kendaraan', labels: ['Mobil', 'Motor', 'Sepeda', 'Bus', 'Truk'], tanya: (l) => `berupa ${l.toLowerCase()}` },
    { title: 'Ikan yang Ditangkap di Kolam', item: 'ikan', unit: 'ikan', labels: ['Budi', 'Siti', 'Made', 'Putu', 'Rina'], tanya: (l) => `ditangkap ${l}` },
    { title: 'Buku yang Dibaca Minggu Ini', item: 'buku', unit: 'buku', labels: ['Andi', 'Dewi', 'Wayan', 'Ani', 'Eko'], tanya: (l) => `dibaca ${l}` },
    { title: 'Kue yang Terjual di Warung Bu Made', item: 'kue', unit: 'kue', labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'], tanya: (l) => `terjual hari ${l}` },
    { title: 'Bunga yang Ditanam Siswa', item: 'bunga', unit: 'bunga', labels: ['Kelas 1A', 'Kelas 1B', 'Kelas 1C', 'Kelas 1D'], tanya: (l) => `ditanam ${l}` },
];

function buat(rng: Rng, rows: number, max = 10) {
    const d = rng.pick(DATA);
    const labels = d.labels.slice(0, Math.min(rows, d.labels.length));
    const values = berbeda(rng, labels.length, 1, max);
    const visual: Visual = { type: 'pictogram', item: d.item, scale: 1, title: d.title, rows: labels.map((label, i) => ({ label, value: values[i] })) };
    return { d, labels, values, visual };
}

const KET = (unit: string): Step => ({ kind: 'number', id: 'keterangan', prompt: 'Baca keterangan. Setiap gambar mewakili berapa?', answer: '1', suffix: unit,
    hint: 'Lihat tulisan "setiap gambar mewakili …" di bawah diagram.', explain: `Setiap gambar mewakili 1 ${unit}.`, error: 'abaikan-keterangan' });

/** Membaca banyaknya pada satu baris. */
const baca: Generator = (rng, level) => {
    if (level === 3) {
        // satu baris belum ditempel: cari dari jumlah seluruhnya
        const { d, labels, values, visual } = buat(rng, 4, 9);
        const hilang = rng.int(0, labels.length - 1);
        const ada = values.reduce((a, b, i) => (i === hilang ? a : a + b), 0);
        const total = ada + values[hilang];
        if (visual.type === 'pictogram') visual.rows = visual.rows.map((r, i) => (i === hilang ? { ...r, value: 0 } : r));
        const steps: Step[] = [
            { kind: 'number', id: 'ada', prompt: 'Jumlahkan baris yang sudah ada gambarnya.', answer: String(ada), suffix: d.unit,
              hint: `Hitung setiap baris, lalu jumlahkan: ${labels.filter((_, i) => i !== hilang).join(', ')}.`, explain: `${values.filter((_, i) => i !== hilang).join(' + ')} = ${ada}.`, error: 'lupa-satu-baris' },
            { kind: 'choice', id: 'cara', prompt: `Semuanya ${total}. Baris ${labels[hilang]} dicari dengan …`, ...pilihan(rng, `${total} − ${ada}`, [[`${total} + ${ada}`, 'jumlah-bukan-selisih'], [`${ada} − ${total}`, 'kurang-urutan-terbalik']]),
              hint: 'Seluruh − bagian yang diketahui = bagian yang hilang.', explain: `${total} − ${ada}.`, error: 'jumlah-bukan-selisih' },
            { kind: 'number', id: 'hilang', prompt: `${total} − ${ada} = ?`, answer: String(values[hilang]), suffix: d.unit,
              hint: `Bilang maju dari ${ada} sampai ${total}.`, explain: `${total} − ${ada} = ${values[hilang]}. Cek: ${ada} + ${values[hilang]} = ${total}.`, error: 'salah-fakta-kurang' },
        ];
        return { text: `Ada ${total} ${d.unit} semuanya, tetapi gambar untuk ${labels[hilang]} belum ditempel. Berapa ${d.unit} yang ${d.tanya(labels[hilang])}?`, visual, steps,
            conclusion: `Jadi ada ${values[hilang]} ${d.unit} yang ${d.tanya(labels[hilang])}.` };
    }
    const { d, labels, values, visual } = buat(rng, level === 1 ? 3 : 5, level === 1 ? 8 : 10);
    const i = rng.int(0, labels.length - 1);
    if (level === 2) {
        const steps: Step[] = [
            KET(d.unit),
            { kind: 'choice', id: 'baris', prompt: `Hitung setiap baris. Baris mana yang punya ${values[i]} gambar?`, ...pilihanTetap(labels[i], labels, Object.fromEntries(labels.filter((_, j) => j !== i).map((l) => [l, 'salah-hitung-gambar']))),
              hint: 'Tunjuk setiap gambar sambil menghitung.', explain: labels.map((l, j) => `${l} ${values[j]}`).join(', ') + '.', error: 'salah-hitung-gambar' },
        ];
        return { text: `Lihat diagram gambar. Baris mana yang punya tepat ${values[i]} gambar?`, visual, steps, conclusion: `Jadi ${labels[i]} punya ${values[i]} gambar.` };
    }
    const steps: Step[] = [
        KET(d.unit),
        { kind: 'number', id: 'hitung', prompt: `Cari baris "${labels[i]}". Hitung gambarnya.`, answer: String(values[i]), suffix: d.unit,
          hint: 'Tunjuk setiap gambar sambil menghitung. Cek lagi dari kanan ke kiri.', explain: `Ada ${values[i]} gambar, jadi ${values[i]} ${d.unit}.`, error: 'salah-hitung-gambar' },
    ];
    return { text: `Berapa ${d.unit} yang ${d.tanya(labels[i])}?`, visual, steps, conclusion: `Jadi ada ${values[i]} ${d.unit} yang ${d.tanya(labels[i])}.` };
};

/** Paling banyak dan paling sedikit; mengurutkan. */
const paling: Generator = (rng, level) => {
    const { d, labels, values, visual } = buat(rng, level === 1 ? 4 : 5);
    const order = labels.map((_, i) => i).sort((a, b) => values[b] - values[a]);
    const hi = order[0], lo = order[order.length - 1];
    const wrongs = (ans: number, code: string) => Object.fromEntries(labels.filter((_, j) => j !== ans).map((l) => [l, code]));
    if (level === 3) {
        const ans = order.map((i) => labels[i]).join(', ');
        const steps: Step[] = [
            { kind: 'choice', id: 'banyak', prompt: 'Mana yang paling banyak?', ...pilihanTetap(labels[hi], labels, { ...wrongs(hi, 'salah-hitung-gambar'), [labels[lo]]: 'salah-paling-banyak-sedikit' }),
              hint: 'Hitung setiap baris, cari bilangan terbesar.', explain: `${labels[hi]}: ${values[hi]}, paling besar.`, error: 'salah-paling-banyak-sedikit' },
            { kind: 'choice', id: 'kedua', prompt: 'Mana yang terbanyak kedua?', ...pilihanTetap(labels[order[1]], labels, wrongs(order[1], 'salah-hitung-gambar')),
              hint: `Selain ${labels[hi]}, cari bilangan terbesar.`, explain: `${labels[order[1]]}: ${values[order[1]]}.`, error: 'salah-hitung-gambar' },
            { kind: 'choice', id: 'urut', prompt: 'Urutkan dari yang paling banyak.',
              ...pilihan(rng, ans, [[[...order].reverse().map((i) => labels[i]).join(', '), 'salah-paling-banyak-sedikit'], [labels.join(', '), 'salah-hitung-gambar'], [[order[1], order[0], ...order.slice(2)].map((i) => labels[i]).join(', '), 'salah-hitung-gambar']]),
              hint: `Mulai dari ${labels[hi]}.`, explain: order.map((i) => `${labels[i]} ${values[i]}`).join(', ') + '.', error: 'salah-hitung-gambar' },
        ];
        return { text: `${d.title}. Urutkan dari yang paling banyak.`, visual, steps, conclusion: `Urutannya: ${ans}.` };
    }
    const sedikit = level === 2 ? rng.chance(0.6) : false;
    const target = sedikit ? lo : hi;
    const steps: Step[] = [
        { kind: 'choice', id: 'arti', prompt: `"Paling ${sedikit ? 'sedikit' : 'banyak'}" berarti bilangan yang …`, ...pilihanTetap(sedikit ? 'terkecil' : 'terbesar', ['terbesar', 'terkecil']),
          hint: sedikit ? 'Baris yang paling pendek.' : 'Baris yang paling panjang.', explain: sedikit ? 'Paling sedikit = bilangan terkecil.' : 'Paling banyak = bilangan terbesar.', error: 'salah-paling-banyak-sedikit' },
        { kind: 'number', id: 'nilai', prompt: `Hitung setiap baris. Berapa bilangan ${sedikit ? 'terkecil' : 'terbesar'}?`, answer: String(values[target]), suffix: d.unit,
          hint: 'Hitung gambar di setiap baris dulu.', explain: labels.map((l, j) => `${l} ${values[j]}`).join(', ') + '.', error: 'salah-hitung-gambar' },
        { kind: 'choice', id: 'label', prompt: `Jadi yang paling ${sedikit ? 'sedikit' : 'banyak'} adalah …`, ...pilihanTetap(labels[target], labels, { ...wrongs(target, 'salah-hitung-gambar'), [labels[sedikit ? hi : lo]]: 'salah-paling-banyak-sedikit' }),
          hint: `Cari baris dengan ${values[target]} gambar.`, explain: `${labels[target]} punya ${values[target]}.`, error: 'salah-paling-banyak-sedikit' },
    ];
    return { text: `${d.title}. Mana yang paling ${sedikit ? 'sedikit' : 'banyak'}?`, visual, steps, conclusion: `Jadi yang paling ${sedikit ? 'sedikit' : 'banyak'} adalah ${labels[target]} (${values[target]} ${d.unit}).` };
};

/** Selisih dan jumlah. */
const selisihJumlah: Generator = (rng, level) => {
    if (level === 1) {
        const { d, labels, values, visual } = buat(rng, 4);
        const [i, j] = rng.shuffle(labels.map((_, k) => k)).slice(0, 2).sort((a, b) => values[b] - values[a]);
        const a = values[i], b = values[j];
        const steps: Step[] = [
            { kind: 'number', id: 'baris-1', prompt: `Baca baris ${labels[i]}.`, answer: String(a), suffix: d.unit, hint: 'Hitung gambarnya.', explain: `${labels[i]}: ${a}.`, error: 'salah-hitung-gambar' },
            { kind: 'number', id: 'baris-2', prompt: `Baca baris ${labels[j]}.`, answer: String(b), suffix: d.unit, hint: 'Hitung gambarnya.', explain: `${labels[j]}: ${b}.`, error: 'salah-hitung-gambar' },
            { kind: 'choice', id: 'cara', prompt: '"Berapa lebih banyak" dicari dengan …', ...pilihan(rng, `${a} − ${b}`, [[`${a} + ${b}`, 'jumlah-bukan-selisih'], [`${b} − ${a}`, 'kurang-urutan-terbalik']]),
              hint: 'Lebih banyak berarti selisih: besar dikurangi kecil.', explain: `Selisih = ${a} − ${b}.`, error: 'jumlah-bukan-selisih' },
            { kind: 'number', id: 'selisih', prompt: `${a} − ${b} = ?`, answer: String(a - b), suffix: d.unit,
              hint: `Pasangkan gambar ${labels[i]} dengan ${labels[j]}. Berapa yang tidak punya pasangan?`, explain: `${a} − ${b} = ${a - b}. Cek: ${b} + ${a - b} = ${a}.`, error: 'salah-fakta-kurang' },
        ];
        return { text: `Berapa ${d.unit} lebih banyak yang ${d.tanya(labels[i])} daripada yang ${d.tanya(labels[j])}?`, visual, steps,
            conclusion: `Jadi ${a - b} ${d.unit} lebih banyak.` };
    }
    if (level === 2) {
        const { d, labels, values, visual } = buat(rng, 4);
        // urutkan supaya ada pasangan 10 kalau memungkinkan
        const total = values.reduce((x, y) => x + y, 0);
        const s1 = values[0] + values[1];
        const steps: Step[] = [
            { kind: 'choice', id: 'cara', prompt: '"Berapa semuanya" dicari dengan …', ...pilihanTetap('menjumlahkan semua baris', ['menjumlahkan semua baris', 'mengurangkan baris terbesar dan terkecil', 'menghitung baris terpanjang saja'], { 'mengurangkan baris terbesar dan terkecil': 'jumlah-bukan-selisih', 'menghitung baris terpanjang saja': 'lupa-satu-baris' }),
              hint: 'Semuanya berarti semua baris digabung.', explain: 'Jumlahkan banyak gambar dari semua baris.', error: 'jumlah-bukan-selisih' },
            { kind: 'number', id: 'dua', prompt: `Jumlahkan dua baris pertama: ${labels[0]} + ${labels[1]}.`, answer: String(s1), suffix: d.unit,
              hint: `${labels[0]} ${values[0]}, ${labels[1]} ${values[1]}.`, explain: `${values[0]} + ${values[1]} = ${s1}.`, error: 'salah-fakta-tambah' },
            { kind: 'number', id: 'semua', prompt: `Tambahkan ${labels[2]} dan ${labels[3]}. Berapa semuanya?`, answer: String(total), suffix: d.unit,
              hint: `${s1} + ${values[2]} + ${values[3]}. Coret baris yang sudah dipakai.`, explain: `${values.join(' + ')} = ${total}.`, error: 'lupa-satu-baris' },
        ];
        return { text: `${d.title}. Berapa ${d.unit} semuanya?`, visual, steps, conclusion: `Jadi semuanya ada ${total} ${d.unit}.` };
    }
    // tingkat 3: gabungan dua baris dibandingkan dengan baris lain
    let built;
    do built = buat(rng, 4); while (built.values[0] + built.values[1] <= built.values[2] || built.values[0] + built.values[1] - built.values[2] < 2);
    const { d, labels, values, visual } = built;
    const gab = values[0] + values[1], c = values[2];
    const steps: Step[] = [
        { kind: 'number', id: 'gabung', prompt: `Jumlahkan ${labels[0]} dan ${labels[1]}.`, answer: String(gab), suffix: d.unit,
          hint: `${values[0]} + ${values[1]}. Coba membuat 10.`, explain: `${values[0]} + ${values[1]} = ${gab}.`, error: 'salah-fakta-tambah' },
        { kind: 'number', id: 'baris', prompt: `Baca baris ${labels[2]}.`, answer: String(c), suffix: d.unit, hint: 'Hitung gambarnya.', explain: `${labels[2]}: ${c}.`, error: 'salah-hitung-gambar' },
        { kind: 'number', id: 'selisih', prompt: `Berapa lebih banyak? ${gab} − ${c} = ?`, answer: String(gab - c), suffix: d.unit,
          hint: 'Lebih banyak berarti selisih.', explain: `${gab} − ${c} = ${gab - c}. Cek: ${c} + ${gab - c} = ${gab}.`, error: 'jumlah-bukan-selisih' },
    ];
    return { text: `Lihat diagram "${d.title}". Banyak ${d.unit} ${labels[0]} dan ${labels[1]} digabung. Berapa ${d.unit} lebih banyak daripada ${labels[2]}?`, visual, steps,
        conclusion: `${labels[0]} dan ${labels[1]} ada ${gab}, ${gab - c} lebih banyak daripada ${labels[2]}.` };
};

export const topic: TopicDef = {
    topic: 'sd1-11-diagram-gambar',
    skills: [
        { code: 'baca-piktogram', name: 'Membaca diagram gambar', gen: baca },
        { code: 'paling-banyak-sedikit', name: 'Paling banyak dan paling sedikit', gen: paling },
        { code: 'selisih-jumlah', name: 'Selisih dan jumlah', gen: selisihJumlah },
    ],
};
