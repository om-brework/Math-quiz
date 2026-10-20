/* sd2-08 Menghitung uang: kumpulan uang, membandingkan, menukar, kembalian (hitung maju). */
import { rupiah } from '../../format';
import type { Generator, Rng, Step, TopicDef } from '../../types';
import { berbeda, isi, NAMA, pilih } from './_bantu';

const jumlah = (l: number[]) => l.reduce((a, b) => a + b, 0);
const besarDulu = (l: number[]) => [...l].sort((a, b) => b - a);
const lembar = (v: number) => (v <= 1000 ? 'koin' : 'lembar');
/** "2 lembar Rp5.000 dan 1 koin Rp500" */
function uraikan(items: number[]): string {
    const c = new Map<number, number>();
    for (const v of besarDulu(items)) c.set(v, (c.get(v) ?? 0) + 1);
    const parts = [...c].map(([v, k]) => `${k} ${lembar(v)} ${rupiah(v)}`);
    return parts.length > 1 ? `${parts.slice(0, -1).join(', ')} dan ${parts[parts.length - 1]}` : parts[0];
}
/** hitung maju: "Rp20.000 → Rp25.000 → Rp27.000" */
const maju = (items: number[]) => {
    let s = 0;
    return besarDulu(items).map((v) => rupiah((s += v))).join(' → ');
};

function kumpulan(rng: Rng, banyak: number, pilihan: number[], ulang: boolean): number[] {
    for (;;) {
        const items = ulang ? Array.from({ length: banyak }, () => rng.pick(pilihan)) : berbeda(rng, banyak, 0, pilihan.length - 1).map((i) => pilihan[i]);
        if (jumlah(items) <= 100000 && (!ulang || new Set(items).size >= Math.min(3, banyak - 1))) return rng.shuffle(items);
    }
}

const hitungUang: Generator = (rng, level) => {
    const nama = rng.pick(NAMA);
    const items = level === 1 ? kumpulan(rng, rng.int(3, 4), [1000, 2000, 5000, 10000, 20000], false)
        : kumpulan(rng, rng.int(5, 7), level === 2 ? [500, 1000, 2000, 5000, 10000, 20000] : [500, 1000, 2000, 5000, 10000], true);
    const tot = jumlah(items);
    const urut = besarDulu(items);
    const steps: Step[] = [
        pilih(rng, 'terbesar', 'Urutkan dari nilai terbesar. Uang mana yang dihitung pertama?', rupiah(urut[0]), [...new Set(items)].map((v) => [rupiah(v), 'salah-urut-lompat'] as [string, string]), {
            hint: 'Cari uang dengan nilai paling besar, bukan yang paling banyak.', explain: `Mulai dari ${rupiah(urut[0])}.`, error: 'salah-urut-lompat' }),
        isi('dua', `Hitung maju: ${rupiah(urut[0])} + ${rupiah(urut[1])} = ?`, urut[0] + urut[1], { prefix: 'Rp', hint: `Mulai dari ${rupiah(urut[0])}, maju ${rupiah(urut[1])}.`, explain: `${rupiah(urut[0])} + ${rupiah(urut[1])} = ${rupiah(urut[0] + urut[1])}.`, error: 'salah-hitung-maju-uang' }),
    ];
    if (level <= 2) {
        steps.push(isi('total', 'Lanjutkan hitung maju sampai habis. Berapa semuanya?', tot, { prefix: 'Rp', hint: `Lanjutkan dari ${rupiah(urut[0] + urut[1])}.`, explain: `${maju(items)}. Jadi ${rupiah(tot)}.`, error: 'salah-hitung-maju-uang' }));
        return { text: `Di celengan ${nama} ada ${uraikan(items)}. Berapa uang ${nama}?`, visual: { type: 'money', items }, steps, conclusion: `Uang ${nama} ${rupiah(tot)}.` };
    }
    // tingkat 3: cukup atau tidak untuk membeli barang?
    const barang = rng.pick(['mainan mobil', 'tas sekolah', 'kotak pensil', 'buku cerita', 'botol minum']);
    let harga = 0;
    do harga = Math.round((tot + rng.int(-8, 8) * 500) / 500) * 500; while (harga === tot || harga <= 1000);
    const cukup = tot >= harga;
    steps.push(isi('total', 'Berapa uang semuanya?', tot, { prefix: 'Rp', hint: 'Lanjutkan hitung maju sampai habis.', explain: `${maju(items)}.`, error: 'salah-hitung-maju-uang' }));
    steps.push(pilih(rng, 'cukup', `Harga ${barang} ${rupiah(harga)}. Apakah uangnya cukup?`, cukup ? 'Cukup' : 'Tidak cukup', [['Cukup', 'salah-cukup-uang'], ['Tidak cukup', 'salah-cukup-uang']], {
        hint: `Bandingkan ${rupiah(tot)} dan ${rupiah(harga)}.`, explain: `${rupiah(tot)} ${cukup ? 'lebih dari' : 'kurang dari'} ${rupiah(harga)}.`, error: 'salah-cukup-uang', urut: ['Cukup', 'Tidak cukup'] }));
    steps.push(isi('selisih', cukup ? 'Berapa sisa uangnya setelah membeli?' : 'Berapa kekurangannya?', Math.abs(tot - harga), { prefix: 'Rp', hint: `Hitung maju dari ${rupiah(Math.min(tot, harga))} ke ${rupiah(Math.max(tot, harga))}.`, explain: `${rupiah(Math.max(tot, harga))} − ${rupiah(Math.min(tot, harga))} = ${rupiah(Math.abs(tot - harga))}.`, error: 'salah-hitung-kembalian' }));
    return { text: `${nama} punya ${uraikan(items)}. Ia ingin membeli ${barang} seharga ${rupiah(harga)}.`, visual: { type: 'money', items }, steps,
        conclusion: `Uang ${nama} ${rupiah(tot)}. ${cukup ? `Cukup, sisa ${rupiah(tot - harga)}.` : `Tidak cukup, kurang ${rupiah(harga - tot)}.`}` };
};

const bandingUang: Generator = (rng, level) => {
    const k = level === 1 ? 2 : 3;
    const orang = berbeda(rng, k, 0, NAMA.length - 1).map((i) => NAMA[i]);
    let dompet: number[][] = [];
    for (;;) {
        dompet = orang.map(() => kumpulan(rng, rng.int(2, 5), [1000, 2000, 5000, 10000, 20000], true));
        const tot = dompet.map(jumlah);
        if (new Set(tot).size < k) continue;
        // sering kali yang lembarnya paling banyak justru nilainya paling kecil
        const banyakLembar = dompet.map((d) => d.length);
        const iMaxLembar = banyakLembar.indexOf(Math.max(...banyakLembar));
        if (rng.chance(0.6) && tot[iMaxLembar] !== Math.min(...tot)) continue;
        break;
    }
    const tot = dompet.map(jumlah);
    const iMax = tot.indexOf(Math.max(...tot)), iMin = tot.indexOf(Math.min(...tot));
    const steps: Step[] = orang.map((o, i) => isi(`uang-${i}`, `Hitung uang ${o}.`, tot[i], { prefix: 'Rp', hint: 'Mulai dari uang terbesar, lalu hitung maju.', explain: `${maju(dompet[i])}. Uang ${o} ${rupiah(tot[i])}.`, error: 'salah-hitung-maju-uang' }));
    const tanyaSedikit = level === 3;
    const target = tanyaSedikit ? iMin : iMax;
    const paling = k === 2 ? 'lebih' : 'paling';
    steps.push(pilih(rng, 'banding', `Siapa yang uangnya ${paling} ${tanyaSedikit ? 'sedikit' : 'banyak'}?`, orang[target], orang.map((o) => [o, 'hitung-lembar-bukan-nilai'] as [string, string]), {
        hint: 'Bandingkan nilainya, bukan banyak lembarnya.', explain: `${orang.map((o, i) => `${o} ${rupiah(tot[i])}`).join(', ')}. ${k === 2 ? 'Lebih' : 'Paling'} ${tanyaSedikit ? 'sedikit' : 'banyak'}: ${orang[target]}.`, error: 'hitung-lembar-bukan-nilai', urut: orang }));
    if (level === 3) steps.push(isi('selisih', `Berapa selisih uang ${orang[iMax]} dan ${orang[iMin]}?`, tot[iMax] - tot[iMin], { prefix: 'Rp', hint: `Hitung maju dari ${rupiah(tot[iMin])} ke ${rupiah(tot[iMax])}.`, explain: `${rupiah(tot[iMax])} − ${rupiah(tot[iMin])} = ${rupiah(tot[iMax] - tot[iMin])}.`, error: 'salah-hitung-kembalian' }));
    return { text: `${orang.map((o, i) => `${o} punya ${uraikan(dompet[i])}.`).join(' ')} Siapa yang uangnya ${paling} ${tanyaSedikit ? 'sedikit' : 'banyak'}?${level === 3 ? ' Berapa selisih uang yang paling banyak dan paling sedikit?' : ''}`, steps,
        conclusion: `${k === 2 ? 'Lebih' : 'Paling'} ${tanyaSedikit ? 'sedikit' : 'banyak'}: ${orang[target]} (${rupiah(tot[target])}).${level === 3 ? ` Selisihnya ${rupiah(tot[iMax] - tot[iMin])}.` : ''}` };
};

const TUKAR: [number, number][] = [
    [10000, 5000], [10000, 2000], [10000, 1000], [20000, 10000], [20000, 5000], [20000, 2000], [50000, 10000], [50000, 5000],
    [100000, 50000], [100000, 20000], [100000, 10000], [5000, 1000], [2000, 1000], [1000, 500], [1000, 200], [1000, 100], [5000, 500],
];

const tukar: Generator = (rng, level) => {
    const nama = rng.pick(['Ayah', 'Ibu', 'Kakak', ...NAMA]);
    if (level === 1) {
        const [B, S] = rng.pick(TUKAR);
        const n = B / S;
        const steps: Step[] = [
            pilih(rng, 'nilai', 'Setelah ditukar, nilai uangnya harus ...', 'tetap sama', [['bertambah', 'salah-tukar-uang'], ['berkurang', 'salah-tukar-uang']], { hint: 'Menukar uang tidak membuat uang bertambah atau berkurang.', explain: `Nilainya tetap ${rupiah(B)}.`, error: 'salah-tukar-uang', urut: ['bertambah', 'tetap sama', 'berkurang'] }),
            isi('loncat', `Hitung loncat ${rupiah(S)} sampai ${rupiah(B)}. Ada berapa loncatan?`, n, { suffix: lembar(S), hint: `${Array.from({ length: Math.min(3, n) }, (_, i) => rupiah(S * (i + 1))).join(', ')}, ...`, explain: `Ada ${n} loncatan, jadi ${n} ${lembar(S)}.`, error: 'salah-tukar-uang' }),
            isi('cek', `Cek: ${n} × ${rupiah(S)} = ?`, B, { prefix: 'Rp', hint: 'Hasilnya harus sama dengan uang yang ditukar.', explain: `${n} × ${rupiah(S)} = ${rupiah(B)}. Nilainya sama. Benar.`, error: 'salah-fakta-kali' }),
        ];
        return { text: `${nama} menukar 1 ${lembar(B)} ${rupiah(B)} dengan ${lembar(S)} ${rupiah(S)}. Berapa ${lembar(S)} ${rupiah(S)} yang diterima?`, visual: { type: 'money', items: [B] }, steps,
            conclusion: `1 ${lembar(B)} ${rupiah(B)} = ${n} ${lembar(S)} ${rupiah(S)}.` };
    }
    if (level === 2) {
        let B = 0, M = 0, S = 0;
        do { B = rng.pick([10000, 20000, 50000, 100000]); M = rng.pick([5000, 10000, 20000, 50000]); S = rng.pick([1000, 2000, 5000, 10000]); }
        while (M >= B || S >= M || (B - M) % S !== 0 || (B - M) / S > 10 || (B - M) / S < 2);
        const sisa = B - M, n = sisa / S;
        const steps: Step[] = [
            isi('sisa', `Setelah mendapat 1 lembar ${rupiah(M)}, sisa nilai yang harus ditukar: ${rupiah(B)} − ${rupiah(M)} = ?`, sisa, { prefix: 'Rp', hint: `Hitung maju dari ${rupiah(M)} ke ${rupiah(B)}.`, explain: `${rupiah(B)} − ${rupiah(M)} = ${rupiah(sisa)}.`, error: 'salah-tukar-uang' }),
            isi('lembar', `Hitung loncat ${rupiah(S)} sampai ${rupiah(sisa)}. Berapa ${lembar(S)}?`, n, { suffix: lembar(S), hint: `${rupiah(S)}, ${rupiah(2 * S)}, ...`, explain: `${n} ${lembar(S)} ${rupiah(S)} = ${rupiah(sisa)}.`, error: 'salah-tukar-uang' }),
            isi('cek', `Cek: ${rupiah(M)} + ${n} × ${rupiah(S)} = ?`, B, { prefix: 'Rp', hint: 'Hasilnya harus sama dengan uang yang ditukar.', explain: `${rupiah(M)} + ${rupiah(sisa)} = ${rupiah(B)}. Benar.`, error: 'salah-tukar-uang' }),
        ];
        return { text: `${nama} menukar 1 lembar ${rupiah(B)}. Ia menerima 1 lembar ${rupiah(M)} dan beberapa ${lembar(S)} ${rupiah(S)}. Berapa ${lembar(S)} ${rupiah(S)} yang diterima?`, visual: { type: 'money', items: [B] }, steps,
            conclusion: `${rupiah(B)} = 1 lembar ${rupiah(M)} + ${n} ${lembar(S)} ${rupiah(S)}.` };
    }
    // tingkat 3: kumpulan uang ditukar seluruhnya ke satu jenis
    const S = rng.pick([5000, 10000]);
    let items: number[] = [];
    do items = kumpulan(rng, rng.int(3, 6), S === 5000 ? [1000, 2000, 5000] : [2000, 5000, 10000], true); while (jumlah(items) % S !== 0 || jumlah(items) / S < 2 || jumlah(items) / S > 10);
    const tot = jumlah(items), n = tot / S;
    const steps: Step[] = [
        isi('total', 'Langkah 1: hitung semua uangnya.', tot, { prefix: 'Rp', hint: 'Mulai dari uang terbesar, lalu hitung maju.', explain: `${maju(items)}. Jadi ${rupiah(tot)}.`, error: 'salah-hitung-maju-uang' }),
        isi('lembar', `Langkah 2: ${rupiah(tot)} sama dengan berapa lembar ${rupiah(S)}?`, n, { suffix: 'lembar', hint: `Hitung loncat ${rupiah(S)}: ${rupiah(S)}, ${rupiah(2 * S)}, ...`, explain: `${n} × ${rupiah(S)} = ${rupiah(tot)}.`, error: 'salah-tukar-uang' }),
    ];
    return { text: `${nama} punya ${uraikan(items)}. Semua uang itu ditukar dengan lembar ${rupiah(S)}. Berapa lembar yang diterima?`, visual: { type: 'money', items }, steps,
        conclusion: `${rupiah(tot)} = ${n} lembar ${rupiah(S)}.` };
};

const BARANG = ['buku tulis', 'pensil', 'roti', 'susu kotak', 'penggaris', 'kue', 'es krim', 'jepit rambut'];
const ke = (x: number, m: number) => Math.ceil(x / m) * m;

const kembalian: Generator = (rng, level) => {
    const nama = rng.pick(NAMA);
    if (level <= 2) {
        let P = 0, bayar = 0;
        if (level === 1) do { P = rng.int(1, 19) * 1000; bayar = rng.pick([10000, 20000]); } while (P >= bayar || P % 5000 === 0 || ke(P, 5000) >= bayar);
        else do { P = rng.int(2, 39) * 1000 + 500; bayar = rng.pick([20000, 50000]); } while (P >= bayar || ke(P, 1000) % 5000 === 0 || ke(P, 5000) >= bayar);
        const titik = level === 1 ? [P, ke(P, 5000), bayar] : [P, ke(P, 1000), ke(P, 5000), bayar];
        const lompat = titik.slice(1).map((t, i) => t - titik[i]);
        const k = bayar - P;
        const barang = rng.pick(BARANG);
        const steps: Step[] = [
            pilih(rng, 'cara', 'Kembalian dihitung dengan ...', 'uang dibayar − harga', [['uang dibayar + harga', 'kembalian-dijumlah'], ['harga − uang dibayar', 'salah-hitung-kembalian']], {
                hint: 'Kembalian selalu lebih kecil dari uang yang dibayar.', explain: `Kembalian = ${rupiah(bayar)} − ${rupiah(P)}. Kita hitung maju dari harga.`, error: 'kembalian-dijumlah' }),
            ...lompat.map((j, i) => isi(`lompat-${i + 1}`, `Hitung maju: ${rupiah(titik[i])} → ${rupiah(titik[i + 1])}. Lompat berapa?`, j, { prefix: 'Rp', hint: `Dari ${rupiah(titik[i])} sampai ${rupiah(titik[i + 1])}.`, explain: `${rupiah(titik[i])} + ${rupiah(j)} = ${rupiah(titik[i + 1])}.`, error: 'salah-hitung-kembalian' })),
            isi('kembalian', `Jumlahkan lompatannya: ${lompat.map(rupiah).join(' + ')} = ?`, k, { prefix: 'Rp', hint: 'Tambahkan semua lompatan.', explain: `Kembaliannya ${rupiah(k)}. Cek: ${rupiah(P)} + ${rupiah(k)} = ${rupiah(bayar)}.`, error: 'salah-hitung-kembalian' }),
        ];
        return { text: `${nama} membeli ${barang} seharga ${rupiah(P)}. Ia membayar dengan 1 lembar ${rupiah(bayar)}. Berapa kembaliannya?`, visual: { type: 'money', items: [bayar] }, steps,
            conclusion: `Kembaliannya ${rupiah(k)}.` };
    }
    // tingkat 3: dua barang, total dulu, lalu kembalian
    let p1 = 0, p2 = 0, bayar = 0;
    const [b1, b2] = berbeda(rng, 2, 0, BARANG.length - 1).map((i) => BARANG[i]);
    do { p1 = rng.int(2, 15) * 1000 + rng.pick([0, 500]); p2 = rng.int(1, 9) * 1000 + rng.pick([0, 500]); bayar = rng.pick([20000, 50000]); } while (p1 + p2 >= bayar || (p1 + p2) % 1000 === 0 && rng.chance(0.5));
    const T = p1 + p2, k = bayar - T;
    const steps: Step[] = [
        isi('total', `Langkah 1: total harga. ${rupiah(p1)} + ${rupiah(p2)} = ?`, T, { prefix: 'Rp', hint: 'Jumlahkan harga kedua barang.', explain: `Total ${rupiah(T)}.`, error: 'salah-hitung-maju-uang' }),
        isi('kembalian', `Langkah 2: kembalian. Hitung maju dari ${rupiah(T)} ke ${rupiah(bayar)}.`, k, { prefix: 'Rp', hint: `Lompat dulu ke ribuan atau puluh ribuan yang bulat, lalu ke ${rupiah(bayar)}.`, explain: `${rupiah(bayar)} − ${rupiah(T)} = ${rupiah(k)}.`, error: 'salah-hitung-kembalian' }),
        isi('cek', `Cek: harga + kembalian = ${rupiah(T)} + ${rupiah(k)} = ?`, bayar, { prefix: 'Rp', hint: 'Hasilnya harus sama dengan uang yang dibayar.', explain: `${rupiah(T)} + ${rupiah(k)} = ${rupiah(bayar)}. Benar.`, error: 'salah-hitung-kembalian' }),
    ];
    return { text: `${nama} membeli ${b1} seharga ${rupiah(p1)} dan ${b2} seharga ${rupiah(p2)}. Ia membayar dengan 1 lembar ${rupiah(bayar)}. Berapa kembaliannya?`, steps,
        conclusion: `Total ${rupiah(T)}, kembaliannya ${rupiah(k)}.` };
};

export const topic: TopicDef = {
    topic: 'sd2-08-uang',
    skills: [
        { code: 'hitung-uang', name: 'Menghitung kumpulan uang', gen: hitungUang },
        { code: 'bandingkan-uang', name: 'Membandingkan jumlah uang', gen: bandingUang },
        { code: 'tukar-uang', name: 'Menukar uang', gen: tukar },
        { code: 'kembalian', name: 'Menghitung kembalian', gen: kembalian },
    ],
};
