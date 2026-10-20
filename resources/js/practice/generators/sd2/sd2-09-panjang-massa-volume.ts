/* sd2-09 Panjang (m), massa (kg, g), volume cairan (ℓ): memilih satuan, membaca alat ukur, membandingkan. */
import type { Generator, Step, TopicDef } from '../../types';
import { berbeda, isi, NAMA, pilih } from './_bantu';

type Besaran = 'panjang' | 'massa' | 'volume';
const NAMA_BESARAN: Record<Besaran, string> = { panjang: 'panjang', massa: 'massa (berat)', volume: 'volume cairan' };
const URUT_BESARAN = Object.values(NAMA_BESARAN);
const SATUAN = ['m', 'kg', 'g', 'ℓ'];

const BENDA: { teks: string; besaran: Besaran; satuan: string; angka: number }[] = [
    { teks: 'panjang lapangan sepak bola', besaran: 'panjang', satuan: 'm', angka: 100 },
    { teks: 'panjang tali jemuran', besaran: 'panjang', satuan: 'm', angka: 6 },
    { teks: 'panjang kain batik', besaran: 'panjang', satuan: 'm', angka: 2 },
    { teks: 'panjang pagar sekolah', besaran: 'panjang', satuan: 'm', angka: 50 },
    { teks: 'panjang papan tulis', besaran: 'panjang', satuan: 'm', angka: 3 },
    { teks: 'massa sekarung beras', besaran: 'massa', satuan: 'kg', angka: 25 },
    { teks: 'massa sebuah semangka', besaran: 'massa', satuan: 'kg', angka: 3 },
    { teks: 'massa tas sekolah', besaran: 'massa', satuan: 'kg', angka: 4 },
    { teks: 'massa seekor kambing', besaran: 'massa', satuan: 'kg', angka: 30 },
    { teks: 'massa sebutir permen', besaran: 'massa', satuan: 'g', angka: 5 },
    { teks: 'massa sebutir telur', besaran: 'massa', satuan: 'g', angka: 60 },
    { teks: 'massa sebatang pensil', besaran: 'massa', satuan: 'g', angka: 10 },
    { teks: 'massa sebuah penghapus', besaran: 'massa', satuan: 'g', angka: 20 },
    { teks: 'banyak air dalam ember', besaran: 'volume', satuan: 'ℓ', angka: 10 },
    { teks: 'banyak minyak goreng dalam botol besar', besaran: 'volume', satuan: 'ℓ', angka: 2 },
    { teks: 'banyak air dalam galon', besaran: 'volume', satuan: 'ℓ', angka: 19 },
    { teks: 'banyak air dalam bak mandi', besaran: 'volume', satuan: 'ℓ', angka: 80 },
    { teks: 'banyak air dalam akuarium', besaran: 'volume', satuan: 'ℓ', angka: 40 },
    { teks: 'banyak bensin dalam tangki motor', besaran: 'volume', satuan: 'ℓ', angka: 4 },
    { teks: 'banyak air dalam teko besar', besaran: 'volume', satuan: 'ℓ', angka: 2 },
    { teks: 'banyak air dalam drum', besaran: 'volume', satuan: 'ℓ', angka: 100 },
    { teks: 'panjang kolam renang', besaran: 'panjang', satuan: 'm', angka: 25 },
    { teks: 'tinggi tiang bendera', besaran: 'panjang', satuan: 'm', angka: 7 },
    { teks: 'panjang jalan di depan rumah', besaran: 'panjang', satuan: 'm', angka: 80 },
    { teks: 'panjang selang air', besaran: 'panjang', satuan: 'm', angka: 10 },
    { teks: 'massa sekeranjang mangga', besaran: 'massa', satuan: 'kg', angka: 8 },
    { teks: 'massa sebuah sepeda', besaran: 'massa', satuan: 'kg', angka: 12 },
    { teks: 'massa sekarung pupuk', besaran: 'massa', satuan: 'kg', angka: 20 },
    { teks: 'massa sebuah sendok', besaran: 'massa', satuan: 'g', angka: 30 },
    { teks: 'massa sebutir kelereng', besaran: 'massa', satuan: 'g', angka: 5 },
    { teks: 'massa sepotong roti', besaran: 'massa', satuan: 'g', angka: 50 },
];
const ALASAN: Record<string, string> = {
    m: 'Panjang benda yang panjang diukur dengan meter (m).',
    kg: 'Benda ini berat, jadi massanya diukur dengan kilogram (kg).',
    g: 'Benda ini ringan, jadi massanya diukur dengan gram (g).',
    'ℓ': 'Cairan diukur dengan liter (ℓ).',
};

const pilihSatuan: Generator = (rng, level) => {
    const pool = level === 1 ? BENDA.filter((b) => b.satuan !== 'g') : BENDA;
    const b = rng.pick(pool);
    const steps: Step[] = [
        pilih(rng, 'besaran', `Apa yang diukur pada "${b.teks}"?`, NAMA_BESARAN[b.besaran], URUT_BESARAN.map((x) => [x, 'salah-pilih-besaran'] as [string, string]), {
            hint: 'Panjang = seberapa panjang. Massa = seberapa berat. Volume = banyak cairan.', explain: `Yang diukur adalah ${NAMA_BESARAN[b.besaran]}.`, error: 'salah-pilih-besaran', urut: URUT_BESARAN }),
        pilih(rng, 'satuan', level === 1 ? 'Pilih satuan yang cocok.' : `Lengkapi: ${b.teks[0].toUpperCase() + b.teks.slice(1)} kira-kira ${b.angka} ...`, b.satuan, SATUAN.map((x) => [x, 'salah-pilih-satuan'] as [string, string]), {
            hint: b.besaran === 'massa' ? 'Benda berat memakai kg, benda ringan memakai g.' : b.besaran === 'panjang' ? 'Satuan panjang adalah m.' : 'Satuan cairan adalah ℓ.', explain: ALASAN[b.satuan], error: 'salah-pilih-satuan', urut: SATUAN }),
    ];
    if (level === 3) {
        // kalimat yang masuk akal
        const lain = BENDA.filter((x) => x.besaran !== b.besaran || x.satuan !== b.satuan);
        const salah = SATUAN.filter((s) => s !== b.satuan).map((s) => `${b.teks[0].toUpperCase() + b.teks.slice(1)} ${b.angka} ${s}`);
        const benar = `${b.teks[0].toUpperCase() + b.teks.slice(1)} ${b.angka} ${b.satuan}`;
        const o = rng.pick(lain);
        steps.push(pilih(rng, 'masuk-akal', 'Kalimat mana yang masuk akal?', benar, [...rng.shuffle(salah).slice(0, 2).map((x) => [x, 'salah-pilih-satuan'] as [string, string]), [`${o.teks[0].toUpperCase() + o.teks.slice(1)} ${o.angka} ${b.satuan === o.satuan ? SATUAN.find((s) => s !== o.satuan)! : b.satuan}`, 'salah-pilih-satuan']], {
            hint: 'Cek dua hal: apa yang diukur, dan satuannya cocok atau tidak.', explain: `"${benar}" masuk akal. ${ALASAN[b.satuan]}`, error: 'salah-pilih-satuan' }));
    }
    return { text: level === 1 ? `Pilih satuan yang cocok untuk ${b.teks}: m, kg, g, atau ℓ?` : level === 2 ? `Lengkapi kalimat: ${b.teks[0].toUpperCase() + b.teks.slice(1)} kira-kira ${b.angka} ...` : `Pilih kalimat yang masuk akal tentang ${b.teks}.`,
        steps, conclusion: `${b.teks[0].toUpperCase() + b.teks.slice(1)} diukur dalam ${b.satuan}, misalnya ${b.angka} ${b.satuan}.` };
};

const bacaAlat: Generator = (rng, level) => {
    const massa = rng.chance(0.5);
    const benda = massa ? rng.pick(['semangka', 'sekantong beras', 'nangka', 'sekeranjang jeruk', 'labu']) : rng.pick(['ember', 'panci', 'baskom', 'gentong kecil']);
    if (level <= 2) {
        let unit: 'kg' | 'g' | 'ℓ', max: number, step: number, value: number;
        if (level === 1) { unit = massa ? 'kg' : 'ℓ'; max = rng.pick([5, 10]); step = 1; value = rng.int(1, max - 1); }
        else if (massa && rng.chance(0.5)) { unit = 'g'; max = 1000; step = 100; value = rng.int(1, 9) * 100; }
        else { unit = massa ? 'kg' : 'ℓ'; max = 20; step = 2; value = rng.int(1, 9) * 2; }
        const benda2 = unit === 'g' ? rng.pick(['sebungkus kerupuk', 'sebungkus gula', 'sepotong keju', 'sebungkus kacang']) : benda;
        const steps: Step[] = [
            pilih(rng, 'satuan', `Lihat ${massa ? 'timbangan' : 'gelas ukur'}. Satuannya apa?`, unit, SATUAN.map((s) => [s, 'salah-pilih-satuan'] as [string, string]), {
                hint: 'Baca tulisan di samping angka pada alat ukur.', explain: `Alat ukur ini memakai ${unit}.`, error: 'salah-pilih-satuan', urut: SATUAN }),
        ];
        if (level === 2) steps.push(isi('garis', 'Setiap garis bernilai berapa? Lihat dua angka yang berdekatan.', step, { suffix: unit, hint: `Dari 0 ke garis berikutnya bernilai berapa?`, explain: `Setiap garis bernilai ${step} ${unit}.`, error: 'salah-baca-alat-ukur' }));
        steps.push(isi('baca', `Berapa ${massa ? 'massa' : 'volume air'} yang ditunjukkan?`, value, { suffix: unit, hint: massa ? 'Lihat garis tempat jarum berhenti.' : 'Lihat garis tempat permukaan air berhenti.', explain: `${massa ? 'Jarum' : 'Permukaan air'} tepat di ${value} ${unit}.`, error: 'salah-baca-alat-ukur' }));
        return { text: massa ? `Ibu menimbang ${benda2}. Berapa massanya?` : `${rng.pick(NAMA)} mengisi ${benda} dengan air. Berapa liter airnya?`,
            visual: { type: 'scale', kind: massa ? 'mass' : 'volume', value, unit, max, step }, steps, conclusion: `${massa ? 'Massanya' : 'Volumenya'} ${value} ${unit}.` };
    }
    // tingkat 3: baca, lalu kurangi wadah atau tambah tuangan
    const unit = massa ? 'kg' : 'ℓ';
    const value = rng.int(4, 9), wadah = rng.int(1, value - 2);
    const nama = rng.pick(NAMA);
    const steps: Step[] = [
        isi('baca', `Baca ${massa ? 'timbangan' : 'gelas ukur'}. Berapa ${massa ? 'massa semuanya' : 'air di dalamnya'}?`, value, { suffix: unit, hint: 'Hitung garis dari 0.', explain: `${massa ? 'Jarum' : 'Permukaan air'} di ${value} ${unit}.`, error: 'salah-baca-alat-ukur' }),
        massa
            ? isi('hitung', `Massa keranjang ${wadah} kg. Massa buahnya: ${value} − ${wadah} = ?`, value - wadah, { suffix: unit, hint: 'Massa semuanya dikurangi massa keranjang.', explain: `${value} kg − ${wadah} kg = ${value - wadah} kg.`, error: 'salah-fakta-kurang' })
            : isi('hitung', `${nama} menuang ${wadah} ℓ ke botol. Air yang tersisa: ${value} − ${wadah} = ?`, value - wadah, { suffix: unit, hint: 'Air semula dikurangi air yang dituang.', explain: `${value} ℓ − ${wadah} ℓ = ${value - wadah} ℓ.`, error: 'salah-fakta-kurang' }),
    ];
    return { text: massa ? `Jeruk ditimbang bersama keranjangnya. Massa keranjang ${wadah} kg. Berapa massa jeruknya saja?` : `Gelas ukur berisi air. ${nama} menuang ${wadah} ℓ ke dalam botol. Berapa liter air yang tersisa di gelas ukur?`,
        visual: { type: 'scale', kind: massa ? 'mass' : 'volume', value, unit, max: 10, step: 1 }, steps, conclusion: `Jawabannya ${value - wadah} ${unit}.` };
};

const KATA: Record<Besaran, { satuan: string; lebih: string; kurang: string; benda: string[]; jenis: string }> = {
    panjang: { satuan: 'm', lebih: 'panjang', kurang: 'pendek', benda: ['Tali', 'Pita', 'Kain', 'Selang'], jenis: 'panjang' },
    massa: { satuan: 'kg', lebih: 'berat', kurang: 'ringan', benda: ['Karung', 'Kardus', 'Tas', 'Keranjang'], jenis: 'massa' },
    volume: { satuan: 'ℓ', lebih: 'banyak airnya', kurang: 'sedikit airnya', benda: ['Ember', 'Bak', 'Drum', 'Galon'], jenis: 'volume air' },
};

const bandingkan: Generator = (rng, level) => {
    const bs = rng.pick(['panjang', 'massa', 'volume'] as Besaran[]);
    const k = KATA[bs];
    const n = level === 1 ? 2 : 3;
    const label = rng.chance(0.5) ? ['A', 'B', 'C'] : berbeda(rng, 3, 0, NAMA.length - 1).map((i) => NAMA[i]);
    const wadah = rng.pick(k.benda);
    const nm = label.slice(0, n).map((l) => (l.length === 1 ? `${wadah} ${l}` : `${wadah} ${l}`));
    const vals = berbeda(rng, n, 2, bs === 'panjang' ? 30 : 20);
    const desk = nm.map((x, i) => `${x}: ${vals[i]} ${k.satuan}`).join(', ');
    const iMax = vals.indexOf(Math.max(...vals)), iMin = vals.indexOf(Math.min(...vals));
    if (level === 1) {
        const tanyaLebih = rng.chance(0.5);
        const ans = tanyaLebih ? iMax : iMin;
        const steps: Step[] = [
            pilih(rng, 'satuan', 'Cek satuannya dulu. Apakah satuannya sama?', `Ya, sama-sama ${k.satuan}`, [['Tidak sama', 'salah-banding-ukuran']], { hint: 'Lihat huruf di belakang angka.', explain: `Keduanya dalam ${k.satuan}, jadi bisa langsung dibandingkan.`, error: 'salah-banding-ukuran', urut: [`Ya, sama-sama ${k.satuan}`, 'Tidak sama'] }),
            pilih(rng, 'banding', `Mana yang lebih ${tanyaLebih ? k.lebih : k.kurang}?`, nm[ans], nm.map((x) => [x, 'salah-banding-ukuran'] as [string, string]), {
                hint: `Bandingkan ${vals[0]} dan ${vals[1]}. Bilangan lebih besar berarti lebih ${k.lebih}.`, explain: `${Math.max(...vals)} > ${Math.min(...vals)}, jadi ${nm[iMax]} lebih ${k.lebih} dan ${nm[iMin]} lebih ${k.kurang}.`, error: 'salah-banding-ukuran', urut: nm }),
        ];
        return { text: `${desk}. Mana yang lebih ${tanyaLebih ? k.lebih : k.kurang}?`, steps, conclusion: `${nm[ans]} lebih ${tanyaLebih ? k.lebih : k.kurang}.` };
    }
    if (level === 2) {
        const naik = rng.chance(0.5);
        const order = [...vals.keys()].sort((a, b) => (naik ? vals[a] - vals[b] : vals[b] - vals[a]));
        const tulis = (o: number[]) => o.map((i) => nm[i]).join(', ');
        const kata = naik ? (bs === 'volume' ? 'paling sedikit' : `paling ${k.kurang}`) : (bs === 'volume' ? 'paling banyak' : `paling ${k.lebih}`);
        const steps: Step[] = [
            pilih(rng, 'pertama', `Mana yang ${kata}?`, nm[order[0]], nm.map((x) => [x, 'salah-banding-ukuran'] as [string, string]), {
                hint: `Satuannya sama (${k.satuan}). Cari bilangan paling ${naik ? 'kecil' : 'besar'}.`, explain: `${nm[order[0]]} (${vals[order[0]]} ${k.satuan}).`, error: 'salah-banding-ukuran', urut: nm }),
            pilih(rng, 'urutan', `Urutkan dari yang ${kata}.`, tulis(order), [[tulis([...order].reverse()), 'salah-urut-ukuran'], [tulis([0, 1, 2]), 'salah-urut-ukuran'], [tulis([order[0], order[2], order[1]]), 'salah-urut-ukuran']], {
                hint: `${[...vals].sort((a, b) => (naik ? a - b : b - a)).join(naik ? ' < ' : ' > ')}`, explain: `Urutannya ${tulis(order)}.`, error: 'salah-urut-ukuran' }),
        ];
        return { text: `${desk}. Urutkan dari yang ${kata}.`, steps, conclusion: `Urutannya: ${tulis(order)}.` };
    }
    // tingkat 3: paling sedikit, lalu selisih
    const kataMin = bs === 'volume' ? 'paling sedikit airnya' : `paling ${k.kurang}`;
    const steps: Step[] = [
        pilih(rng, 'paling', `Mana yang ${kataMin}?`, nm[iMin], nm.map((x) => [x, 'salah-banding-ukuran'] as [string, string]), { hint: 'Cari bilangan paling kecil.', explain: `${nm[iMin]}: ${vals[iMin]} ${k.satuan}.`, error: 'salah-banding-ukuran', urut: nm }),
        isi('selisih', `Berapa selisih ${nm[iMax]} dan ${nm[iMin]}? ${vals[iMax]} − ${vals[iMin]} = ?`, vals[iMax] - vals[iMin], { suffix: k.satuan, hint: 'Kurangkan yang besar dengan yang kecil.', explain: `${vals[iMax]} ${k.satuan} − ${vals[iMin]} ${k.satuan} = ${vals[iMax] - vals[iMin]} ${k.satuan}.`, error: 'salah-fakta-kurang' }),
        isi('cek', `Cek: ${vals[iMin]} + ${vals[iMax] - vals[iMin]} = ?`, vals[iMax], { suffix: k.satuan, hint: `Hasilnya harus ${vals[iMax]}.`, explain: `${vals[iMin]} + ${vals[iMax] - vals[iMin]} = ${vals[iMax]}. Benar.`, error: 'salah-fakta-tambah' }),
    ];
    return { text: `${desk}. Mana yang ${kataMin}? Berapa ${k.satuan} selisih ${k.jenis} yang terbesar dan yang terkecil?`, steps,
        conclusion: `${nm[iMin]} ${kataMin}. Selisihnya ${vals[iMax] - vals[iMin]} ${k.satuan}.` };
};

export const topic: TopicDef = {
    topic: 'sd2-09-panjang-massa-volume',
    skills: [
        { code: 'pilih-satuan', name: 'Memilih satuan m, kg, g, ℓ', gen: pilihSatuan },
        { code: 'baca-alat-ukur', name: 'Membaca timbangan dan gelas ukur', gen: bacaAlat },
        { code: 'bandingkan-ukuran', name: 'Membandingkan dan mengurutkan ukuran', gen: bandingkan },
    ],
};
