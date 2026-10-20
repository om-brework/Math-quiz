/* sd2-13 Diagram gambar (piktogram) dengan skala 2, 5, 10: membaca, menjumlah, mencari selisih. */
import type { Generator, ObjectName, Rng, Step, TopicDef, Visual } from '../../types';
import { berbeda, isi, NAMA, pilih } from './_bantu';

interface Konteks { judul: string; item: ObjectName; satuan: string; baris: string[] }
const KONTEKS: Konteks[] = [
    { judul: 'Buku yang dibaca bulan ini', item: 'buku', satuan: 'buku', baris: [...NAMA] },
    { judul: 'Kelereng milik anak-anak', item: 'kelereng', satuan: 'kelereng', baris: [...NAMA] },
    { judul: 'Kue yang terjual', item: 'kue', satuan: 'kue', baris: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'] },
    { judul: 'Ikan yang ditangkap', item: 'ikan', satuan: 'ikan', baris: ['Pak Made', 'Pak Wayan', 'Pak Budi', 'Pak Andi', 'Pak Putu'] },
    { judul: 'Bunga yang ditanam', item: 'bunga', satuan: 'bunga', baris: ['Kelas 2A', 'Kelas 2B', 'Kelas 2C', 'Kelas 2D'] },
    { judul: 'Pengunjung perpustakaan', item: 'bintang', satuan: 'pengunjung', baris: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'] },
    { judul: 'Buah kesukaan siswa kelas 2B', item: 'apel', satuan: 'siswa', baris: ['Mangga', 'Pisang', 'Rambutan', 'Jeruk', 'Salak'] },
];

/**
 * Data piktogram. `value` di visual adalah banyak benda sebenarnya (gambar × skala),
 * jadi penggambar membuat value ÷ scale gambar.
 */
function data(rng: Rng, nBaris: number, skala: number, beda = true) {
    const k = rng.pick(KONTEKS.filter((c) => c.baris.length >= nBaris));
    const labels = rng.shuffle(k.baris).slice(0, nBaris);
    // urutan hari/kelas dipertahankan
    labels.sort((a, b) => k.baris.indexOf(a) - k.baris.indexOf(b));
    const gambar = beda ? berbeda(rng, nBaris, 1, 9) : labels.map(() => rng.int(1, 9));
    const vis: Visual = { type: 'pictogram', item: k.item, scale: skala, title: k.judul, rows: labels.map((label, i) => ({ label, value: gambar[i] * skala })) };
    return { k, labels, gambar, vis };
}
const skalaStep = (skala: number, satuan: string) =>
    isi('skala', 'Baca keterangan. Satu gambar mewakili berapa?', skala, { suffix: satuan, hint: 'Lihat tulisan "Keterangan" di bawah diagram.', explain: `Setiap gambar mewakili ${skala} ${satuan}.`, error: 'abaikan-keterangan' });
const loncat = (s: number, n: number) => Array.from({ length: n }, (_, i) => s * (i + 1)).join(', ');

const baca: Generator = (rng, level) => {
    const skala = level === 1 ? rng.pick([2, 5]) : level === 2 ? rng.pick([5, 10]) : rng.pick([2, 5, 10]);
    if (level <= 2) {
        const { k, labels, gambar, vis } = data(rng, level === 1 ? 3 : 4, skala);
        const steps: Step[] = [skalaStep(skala, k.satuan)];
        let i = rng.int(0, labels.length - 1);
        let tanya = `Berapa ${k.satuan} pada baris ${labels[i]}?`;
        if (level === 2) {
            const banyak = rng.chance(0.5);
            i = gambar.indexOf(banyak ? Math.max(...gambar) : Math.min(...gambar));
            tanya = `Baris mana yang paling ${banyak ? 'banyak' : 'sedikit'}, dan berapa ${k.satuan}?`;
            steps.push(pilih(rng, 'paling', `Baris mana yang paling ${banyak ? 'banyak' : 'sedikit'}?`, labels[i], labels.map((l) => [l, 'salah-paling-banyak-sedikit'] as [string, string]), {
                hint: `Cari baris dengan gambar paling ${banyak ? 'banyak' : 'sedikit'}. Semua gambar isinya sama.`, explain: `${labels[i]} punya ${gambar[i]} gambar, paling ${banyak ? 'banyak' : 'sedikit'}.`, error: 'salah-hitung-gambar', urut: labels }));
        }
        steps.push(isi('gambar', `Hitung gambar pada baris ${labels[i]}.`, gambar[i], { suffix: 'gambar', hint: 'Tunjuk gambar satu per satu dengan jari.', explain: `Ada ${gambar[i]} gambar.`, error: 'salah-hitung-gambar' }));
        steps.push(isi('nilai', `${gambar[i]} gambar, tiap gambar ${skala}. Berapa ${k.satuan}?`, gambar[i] * skala, { suffix: k.satuan, hint: `Hitung loncat ${skala} sebanyak ${gambar[i]} kali.`, explain: `${loncat(skala, gambar[i])}. Jadi ${gambar[i] * skala} ${k.satuan}.`, error: 'lupa-skala-piktogram' }));
        return { text: `Lihat diagram gambar "${k.judul}". ${tanya}`, visual: vis, steps, conclusion: `${labels[i]}: ${gambar[i]} gambar × ${skala} = ${gambar[i] * skala} ${k.satuan}.` };
    }
    // tingkat 3: baris yang belum digambar, diketahui jumlah semuanya
    const { k, labels, gambar, vis } = data(rng, 4, skala, false);
    const hilang = labels.length - 1;
    const nilai = gambar.map((g) => g * skala);
    const total = nilai.reduce((a, b) => a + b, 0);
    const known = nilai.slice(0, hilang).reduce((a, b) => a + b, 0);
    const shown: Visual = { ...(vis as Extract<Visual, { type: 'pictogram' }>), rows: (vis as Extract<Visual, { type: 'pictogram' }>).rows.slice(0, hilang) };
    const steps: Step[] = [
        isi('diketahui', `Jumlahkan ${k.satuan} dari baris yang sudah digambar: ${labels.slice(0, hilang).join(', ')}.`, known, { suffix: k.satuan, hint: `Ubah tiap baris dulu: banyak gambar × ${skala}.`, explain: `${nilai.slice(0, hilang).join(' + ')} = ${known}.`, error: 'lupa-skala-piktogram' }),
        isi('sisa', `${k.satuan[0].toUpperCase() + k.satuan.slice(1)} untuk ${labels[hilang]}: ${total} − ${known} = ?`, nilai[hilang], { suffix: k.satuan, hint: 'Semuanya dikurangi yang sudah diketahui.', explain: `${total} − ${known} = ${nilai[hilang]}.`, error: 'salah-fakta-kurang' }),
        isi('gambar', `Berapa gambar yang harus digambar untuk ${labels[hilang]}?`, gambar[hilang], { suffix: 'gambar', hint: `Setiap gambar mewakili ${skala}. Hitung loncat ${skala} sampai ${nilai[hilang]}.`, explain: `${nilai[hilang]} ÷ ${skala} = ${gambar[hilang]} gambar.`, error: 'lupa-skala-piktogram' }),
    ];
    return { text: `Diagram "${k.judul}" belum selesai. Baris ${labels[hilang]} belum digambar. Jumlah semuanya ${total} ${k.satuan}. Berapa gambar untuk ${labels[hilang]}?`, visual: shown, steps,
        conclusion: `${labels[hilang]}: ${nilai[hilang]} ${k.satuan}, jadi ${gambar[hilang]} gambar.` };
};

const jumlahSelisih: Generator = (rng, level) => {
    // tingkat 3 menjumlah semua gambar lalu dikali skala: pakai skala 2 (dobel) atau 10 (puluhan) supaya tetap dalam jangkauan kelas 2
    const skala = level === 3 ? rng.pick([2, 10]) : rng.pick([2, 5, 10]);
    if (level === 1) {
        const { k, labels, gambar, vis } = data(rng, 3, skala);
        const [a, b] = berbeda(rng, 2, 0, 2).sort();
        const va = gambar[a] * skala, vb = gambar[b] * skala;
        const steps: Step[] = [
            isi('a', `Berapa ${k.satuan} ${labels[a]}?`, va, { suffix: k.satuan, hint: `${gambar[a]} gambar, tiap gambar ${skala}.`, explain: `${gambar[a]} × ${skala} = ${va}.`, error: 'lupa-skala-piktogram' }),
            isi('b', `Berapa ${k.satuan} ${labels[b]}?`, vb, { suffix: k.satuan, hint: `${gambar[b]} gambar, tiap gambar ${skala}.`, explain: `${gambar[b]} × ${skala} = ${vb}.`, error: 'lupa-skala-piktogram' }),
            isi('jumlah', `Jumlahkan: ${va} + ${vb} = ?`, va + vb, { suffix: k.satuan, hint: 'Gabungkan keduanya.', explain: `${va} + ${vb} = ${va + vb}. Cek: ${gambar[a] + gambar[b]} gambar × ${skala} = ${va + vb}.`, error: 'salah-fakta-tambah' }),
        ];
        return { text: `Lihat diagram "${k.judul}". Berapa ${k.satuan} ${labels[a]} dan ${labels[b]} semuanya?`, visual: vis, steps, conclusion: `${labels[a]} dan ${labels[b]}: ${va + vb} ${k.satuan}.` };
    }
    if (level === 2) {
        const { k, labels, gambar, vis } = data(rng, 4, skala);
        const [a, b] = berbeda(rng, 2, 0, 3);
        const hi = gambar[a] > gambar[b] ? a : b, lo = hi === a ? b : a;
        const dg = gambar[hi] - gambar[lo];
        const steps: Step[] = [
            skalaStep(skala, k.satuan),
            isi('selisih-gambar', `Hitung gambar ${labels[hi]} dan ${labels[lo]}, lalu kurangkan. Berapa selisih gambarnya?`, dg, { suffix: 'gambar', hint: 'Tunjuk gambar tiap baris satu per satu, lalu kurangkan.', explain: `${labels[hi]} ${gambar[hi]} gambar, ${labels[lo]} ${gambar[lo]} gambar. ${gambar[hi]} − ${gambar[lo]} = ${dg} gambar.`, error: 'salah-hitung-gambar' }),
            isi('selisih', `Ubah selisih gambar menjadi ${k.satuan}: ${dg} × ${skala} = ?`, dg * skala, { suffix: k.satuan, hint: `Setiap gambar mewakili ${skala}.`, explain: `${dg} × ${skala} = ${dg * skala}. Cek: ${gambar[hi] * skala} − ${gambar[lo] * skala} = ${dg * skala}.`, error: 'selisih-gambar-tidak-diubah' }),
        ];
        return { text: `Lihat diagram "${k.judul}". Berapa ${k.satuan} lebih banyak ${labels[hi]} daripada ${labels[lo]}?`, visual: vis, steps,
            conclusion: `${labels[hi]} ${dg * skala} ${k.satuan} lebih banyak daripada ${labels[lo]}.` };
    }
    // tingkat 3: jumlah semua baris (4–5 baris)
    const { k, labels, gambar, vis } = data(rng, rng.pick([4, 5]), skala, false);
    const tg = gambar.reduce((a, b) => a + b, 0);
    const steps: Step[] = [
        skalaStep(skala, k.satuan),
        isi('total-gambar', 'Hitung gambar tiap baris, lalu jumlahkan. Ada berapa gambar semuanya?', tg, { suffix: 'gambar', hint: 'Tulis banyak gambar tiap baris dulu, lalu jumlahkan.', explain: `${gambar.join(' + ')} = ${tg} gambar.`, error: 'salah-hitung-gambar' }),
        isi('total', `${tg} gambar, tiap gambar ${skala}. Berapa ${k.satuan} semuanya?`, tg * skala, { suffix: k.satuan, hint: skala === 10 ? `${tg} puluhan.` : `${tg} × ${skala}. Boleh hitung tiap baris dulu lalu dijumlah.`, explain: `${tg} × ${skala} = ${tg * skala}. Cek: ${gambar.map((g) => g * skala).join(' + ')} = ${tg * skala}.`, error: 'lupa-skala-piktogram' }),
    ];
    return { text: `Lihat diagram "${k.judul}". Berapa ${k.satuan} semuanya?`, visual: vis, steps, conclusion: `Semuanya ${tg * skala} ${k.satuan}.` };
};

export const topic: TopicDef = {
    topic: 'sd2-13-diagram-gambar-skala',
    skills: [
        { code: 'baca-piktogram', name: 'Membaca piktogram berskala', gen: baca },
        { code: 'jumlah-selisih-piktogram', name: 'Menjumlah dan mencari selisih pada piktogram', gen: jumlahSelisih },
    ],
};
