/* sd2-12 Bangun ruang: kubus, balok, tabung, kerucut, bola. Tes gelinding, hitung sisi datar, golongkan. */
import type { Generator, SolidName, Step, TopicDef } from '../../types';
import { berbeda, isi, NAMA, pilih } from './_bantu';

interface Info { datar: number; lengkung: number; bentukDatar: string; contoh: string[]; kelompok: string }
const KEL = { datar: 'hanya sisi datar', campur: 'sisi datar dan sisi lengkung', lengkung: 'hanya sisi lengkung' };
const URUT_KEL = [KEL.datar, KEL.campur, KEL.lengkung];
const RUANG: Record<SolidName, Info> = {
    kubus: { datar: 6, lengkung: 0, bentukDatar: 'persegi', contoh: ['dadu', 'kotak rubik', 'kotak kado kecil yang semua sisinya sama', 'es batu kotak'], kelompok: KEL.datar },
    balok: { datar: 6, lengkung: 0, bentukDatar: 'persegi panjang', contoh: ['kotak susu', 'batu bata', 'kotak sepatu', 'lemari', 'kotak tisu', 'kotak pensil'], kelompok: KEL.datar },
    tabung: { datar: 2, lengkung: 1, bentukDatar: 'lingkaran', contoh: ['kaleng susu', 'pipa', 'drum', 'bedug', 'kaleng cat', 'gelas'], kelompok: KEL.campur },
    kerucut: { datar: 1, lengkung: 1, bentukDatar: 'lingkaran', contoh: ['tumpeng', 'topi ulang tahun', 'cone es krim', 'caping petani'], kelompok: KEL.campur },
    bola: { datar: 0, lengkung: 1, bentukDatar: '-', contoh: ['bola sepak', 'kelereng', 'jeruk', 'bola voli', 'bola basket'], kelompok: KEL.lengkung },
};
const SOLIDS = Object.keys(RUANG) as SolidName[];
const DATAR = ['persegi', 'lingkaran', 'segitiga'];
const gelinding = (s: SolidName) => RUANG[s].lengkung > 0;
const kodeTertukar = (benar: SolidName, salah: string) =>
    (['kubus', 'balok'].includes(benar) && ['kubus', 'balok'].includes(salah) ? 'kubus-balok-tertukar'
        : ['tabung', 'kerucut'].includes(benar) && ['tabung', 'kerucut'].includes(salah) ? 'tabung-kerucut-tertukar' : DATAR.includes(salah) ? 'sebut-bangun-datar' : 'salah-nama-bangun-ruang');
const opsiNama = (rng: Parameters<typeof pilih>[0], s: SolidName) => {
    const lain = rng.shuffle(SOLIDS.filter((x) => x !== s)).slice(0, 2);
    const kembar = s === 'kubus' ? 'balok' : s === 'balok' ? 'kubus' : s === 'tabung' ? 'kerucut' : s === 'kerucut' ? 'tabung' : 'lingkaran';
    const datar = s === 'kubus' ? 'persegi' : s === 'bola' || s === 'tabung' ? 'lingkaran' : rng.pick(DATAR);
    return [...new Set([kembar, datar, ...lain])].filter((x) => x !== s).slice(0, 3).map((x) => [x, kodeTertukar(s, x)] as [string, string]);
};
const tesGelinding = (rng: Parameters<typeof pilih>[0], s: SolidName, benda = 'bangun ini') =>
    pilih(rng, 'gelinding', `Tes gelinding: bisakah ${benda} menggelinding?`, gelinding(s) ? 'Ya' : 'Tidak', [['Ya', 'salah-sisi-lengkung'], ['Tidak', 'salah-sisi-lengkung']], {
        hint: 'Benda yang punya sisi lengkung bisa menggelinding.', explain: gelinding(s) ? 'Bisa menggelinding, jadi ada sisi lengkung.' : 'Tidak bisa menggelinding, jadi tidak ada sisi lengkung.', error: 'salah-sisi-lengkung', urut: ['Ya', 'Tidak'] });
const hitungDatar = (s: SolidName, benda: string) =>
    isi('datar', `Hitung sisi datar ${benda}.`, RUANG[s].datar, { hint: s === 'tabung' ? 'Jangan lupa tutup atas dan alas bawah.' : s === 'bola' ? 'Adakah bagian yang rata?' : 'Hitung atas, bawah, depan, belakang, kiri, kanan.', explain: `${benda[0].toUpperCase() + benda.slice(1)} punya ${RUANG[s].datar} sisi datar.`, error: 'salah-hitung-sisi-datar' });

const kenali: Generator = (rng, level) => {
    const s = rng.pick(SOLIDS);
    const info = RUANG[s];
    if (level === 1) {
        const steps: Step[] = [tesGelinding(rng, s), pilih(rng, 'nama', 'Apa nama bangun ruang ini?', s, opsiNama(rng, s), {
            hint: `Bangun ini punya ${info.datar} sisi datar dan ${info.lengkung} sisi lengkung.`, explain: `Ini ${s}: ${info.datar} sisi datar, ${info.lengkung} sisi lengkung.`, error: 'salah-nama-bangun-ruang' })];
        return { text: 'Perhatikan bangun ruang ini. Apa namanya?', visual: { type: 'solid', solid: s }, steps, conclusion: `Bangun ini adalah ${s}.` };
    }
    if (level === 2) {
        const benda = rng.pick(info.contoh);
        const steps: Step[] = [tesGelinding(rng, s, benda), hitungDatar(s, benda), pilih(rng, 'nama', `Jadi ${benda} berbentuk bangun ruang apa?`, s, opsiNama(rng, s), {
            hint: s === 'kubus' || s === 'balok' ? 'Semua sisi persegi sama besar berarti kubus. Ada sisi persegi panjang berarti balok.' : s === 'tabung' || s === 'kerucut' ? 'Dua sisi datar berarti tabung. Satu sisi datar dan ujung runcing berarti kerucut.' : 'Tidak ada sisi datar sama sekali.',
            explain: `${benda[0].toUpperCase() + benda.slice(1)} berbentuk ${s}.`, error: 'salah-nama-bangun-ruang' })];
        return { text: `${benda[0].toUpperCase() + benda.slice(1)} berbentuk bangun ruang apa?`, steps, conclusion: `${benda[0].toUpperCase() + benda.slice(1)} berbentuk ${s}.` };
    }
    // tingkat 3: tebak dari ciri-ciri, lalu pilih benda sehari-hari
    const ciri = s === 'bola' ? 'Aku tidak punya sisi datar. Aku hanya punya 1 sisi lengkung.'
        : `Aku punya ${info.datar} sisi datar berbentuk ${info.bentukDatar}${info.lengkung ? ` dan ${info.lengkung} sisi lengkung` : ', tanpa sisi lengkung'}.${s === 'kerucut' ? ' Bagian atasku runcing.' : ''}`;
    const benar = rng.pick(info.contoh);
    const lain = rng.shuffle(SOLIDS.filter((x) => x !== s)).slice(0, 3).map((x) => [rng.pick(RUANG[x].contoh), kodeTertukar(s, x)] as [string, string]);
    const steps: Step[] = [
        pilih(rng, 'nama', 'Bangun ruang apakah aku?', s, opsiNama(rng, s), { hint: 'Cocokkan banyak sisi datar dan sisi lengkung.', explain: `${info.datar} sisi datar dan ${info.lengkung} sisi lengkung: ${s}.`, error: 'salah-nama-bangun-ruang' }),
        pilih(rng, 'benda', `Benda mana yang berbentuk ${s}?`, benar, lain, { hint: `Bayangkan bentuk tiap benda. Mana yang seperti ${s}?`, explain: `${benar[0].toUpperCase() + benar.slice(1)} berbentuk ${s}.`, error: 'salah-nama-bangun-ruang' }),
    ];
    return { text: `Tebak aku! ${ciri}`, steps, conclusion: `Aku ${s}, contohnya ${benar}.` };
};

const sisi: Generator = (rng, level) => {
    if (level === 1) {
        const s = rng.pick(SOLIDS);
        const steps: Step[] = [
            tesGelinding(rng, s),
            isi('lengkung', 'Berapa sisi lengkungnya?', RUANG[s].lengkung, { hint: 'Sisi lengkung membuat benda bisa menggelinding.', explain: `${s[0].toUpperCase() + s.slice(1)} punya ${RUANG[s].lengkung} sisi lengkung.`, error: 'salah-sisi-lengkung' }),
            hitungDatar(s, s),
        ];
        const benda = rng.pick(RUANG[s].contoh);
        return { text: `${benda[0].toUpperCase() + benda.slice(1)} berbentuk ${s}, seperti gambar ini. Berapa sisi datar dan sisi lengkung ${s}?`, visual: { type: 'solid', solid: s }, steps, conclusion: `${s[0].toUpperCase() + s.slice(1)}: ${RUANG[s].datar} sisi datar, ${RUANG[s].lengkung} sisi lengkung.` };
    }
    if (level === 2) {
        const s = rng.pick(SOLIDS.filter((x) => x !== 'bola'));
        const benda = rng.pick(RUANG[s].contoh);
        const steps: Step[] = [
            pilih(rng, 'nama', `${benda[0].toUpperCase() + benda.slice(1)} berbentuk apa?`, s, opsiNama(rng, s), { hint: 'Tes gelinding dan lihat sisi datarnya.', explain: `${benda[0].toUpperCase() + benda.slice(1)} berbentuk ${s}.`, error: 'salah-nama-bangun-ruang' }),
            hitungDatar(s, benda),
            pilih(rng, 'bentuk', 'Sisi datarnya berbentuk apa?', RUANG[s].bentukDatar, [['persegi', 'salah-bentuk-sisi'], ['persegi panjang', 'salah-bentuk-sisi'], ['lingkaran', 'salah-bentuk-sisi'], ['segitiga', 'salah-bentuk-sisi']], {
                hint: 'Bayangkan bekas cap sisi itu di atas kertas.', explain: `Sisi datar ${s} berbentuk ${RUANG[s].bentukDatar}.`, error: 'salah-bentuk-sisi', urut: ['persegi', 'persegi panjang', 'lingkaran', 'segitiga'] }),
        ];
        return { text: `Ceritakan sisi-sisi ${benda}: bangunnya, banyak sisi datar, dan bentuk sisi datarnya.`, steps, conclusion: `${benda[0].toUpperCase() + benda.slice(1)} berbentuk ${s} dengan ${RUANG[s].datar} sisi datar berbentuk ${RUANG[s].bentukDatar}.` };
    }
    // tingkat 3: jumlah sisi datar beberapa benda
    const [i1, i2] = berbeda(rng, 2, 0, 3);
    const [s1, s2] = [SOLIDS[i1], SOLIDS[i2]];
    const [n1, n2] = [rng.int(1, 3), rng.int(1, 3)];
    const [b1, b2] = [rng.pick(RUANG[s1].contoh), rng.pick(RUANG[s2].contoh)];
    const t1 = n1 * RUANG[s1].datar, t2 = n2 * RUANG[s2].datar;
    const nama = rng.pick(NAMA);
    const steps: Step[] = [
        isi('satu', `Sisi datar ${n1} ${b1} (${s1}): ${n1} × ${RUANG[s1].datar} = ?`, t1, { hint: `Satu ${s1} punya ${RUANG[s1].datar} sisi datar.`, explain: `${n1} × ${RUANG[s1].datar} = ${t1}.`, error: 'salah-hitung-sisi-datar' }),
        isi('dua', `Sisi datar ${n2} ${b2} (${s2}): ${n2} × ${RUANG[s2].datar} = ?`, t2, { hint: `Satu ${s2} punya ${RUANG[s2].datar} sisi datar.`, explain: `${n2} × ${RUANG[s2].datar} = ${t2}.`, error: 'salah-hitung-sisi-datar' }),
        isi('total', `Jumlahkan: ${t1} + ${t2} = ?`, t1 + t2, { suffix: 'sisi datar', hint: 'Gabungkan keduanya.', explain: `${t1} + ${t2} = ${t1 + t2}.`, error: 'salah-fakta-tambah' }),
    ];
    return { text: `${nama} punya ${n1} ${b1} dan ${n2} ${b2}. Ia mau mengecat semua sisi datarnya. Berapa sisi datar semuanya?`, steps, conclusion: `Semuanya ${t1 + t2} sisi datar.` };
};

const golongkan: Generator = (rng, level) => {
    if (level === 1) {
        const s = rng.pick(SOLIDS);
        const steps: Step[] = [
            pilih(rng, 'datar', `Apakah ${s} punya sisi datar?`, RUANG[s].datar ? 'Ya' : 'Tidak', [['Ya', 'salah-hitung-sisi-datar'], ['Tidak', 'salah-hitung-sisi-datar']], { hint: 'Sisi datar rata seperti meja.', explain: RUANG[s].datar ? `Ya, ${RUANG[s].datar} sisi datar.` : 'Tidak ada sisi datar.', error: 'salah-hitung-sisi-datar', urut: ['Ya', 'Tidak'] }),
            pilih(rng, 'lengkung', `Apakah ${s} punya sisi lengkung?`, RUANG[s].lengkung ? 'Ya' : 'Tidak', [['Ya', 'salah-sisi-lengkung'], ['Tidak', 'salah-sisi-lengkung']], { hint: 'Bisa menggelinding berarti ada sisi lengkung.', explain: RUANG[s].lengkung ? 'Ya, ada sisi lengkung.' : 'Tidak ada sisi lengkung.', error: 'salah-sisi-lengkung', urut: ['Ya', 'Tidak'] }),
            pilih(rng, 'kelompok', `Jadi ${s} masuk kelompok ...`, RUANG[s].kelompok, URUT_KEL.map((k) => [k, 'salah-golongkan-bangun-ruang'] as [string, string]), { hint: 'Gabungkan dua jawabanmu tadi.', explain: `${s[0].toUpperCase() + s.slice(1)}: ${RUANG[s].kelompok}.`, error: 'salah-golongkan-bangun-ruang', urut: URUT_KEL }),
        ];
        const benda = rng.pick(RUANG[s].contoh);
        return { text: `${benda[0].toUpperCase() + benda.slice(1)} berbentuk ${s}. Golongkan ${s} menurut sisinya.`, visual: { type: 'solid', solid: s }, steps, conclusion: `${s[0].toUpperCase() + s.slice(1)} termasuk kelompok ${RUANG[s].kelompok}.` };
    }
    if (level === 2) {
        const kel = rng.pick(URUT_KEL);
        const anggota = SOLIDS.filter((x) => RUANG[x].kelompok === kel);
        const bukan = SOLIDS.filter((x) => RUANG[x].kelompok !== kel);
        const sBenar = rng.pick(anggota);
        const benar = rng.pick(RUANG[sBenar].contoh);
        const salah = rng.shuffle(bukan).slice(0, 3).map((x) => [rng.pick(RUANG[x].contoh), 'salah-golongkan-bangun-ruang'] as [string, string]);
        const daftar = (l: SolidName[]) => (l.length === 1 ? l[0] : `${l[0]} dan ${l[1]}`);
        const steps: Step[] = [
            pilih(rng, 'bangun', `Bangun ruang apa yang termasuk kelompok "${kel}"?`, daftar(anggota), [['kubus dan balok', 'salah-golongkan-bangun-ruang'], ['tabung dan kerucut', 'salah-golongkan-bangun-ruang'], ['bola', 'salah-golongkan-bangun-ruang']], {
                hint: 'Ingat tes gelinding dan hitung sisi datarnya.', explain: `Kelompok "${kel}": ${daftar(anggota)}.`, error: 'salah-golongkan-bangun-ruang', urut: ['kubus dan balok', 'tabung dan kerucut', 'bola'] }),
            pilih(rng, 'benda', `Benda mana yang termasuk kelompok "${kel}"?`, benar, salah, { hint: `Cari benda yang berbentuk ${daftar(anggota)}.`, explain: `${benar[0].toUpperCase() + benar.slice(1)} berbentuk ${sBenar}, jadi masuk kelompok "${kel}".`, error: 'salah-golongkan-bangun-ruang' }),
        ];
        return { text: `Mana benda yang punya ${kel}?`, steps, conclusion: `${benar[0].toUpperCase() + benar.slice(1)} (${sBenar}) punya ${kel}.` };
    }
    // tingkat 3: menyusun menara
    const nama = rng.pick(NAMA);
    const tanya = rng.pick(['atas', 'sulit', 'bawah'] as const);
    const bawah = rng.pick(['kubus', 'balok', 'tabung'] as SolidName[]);
    const opsi: SolidName[] = tanya === 'bawah' ? [bawah, 'kerucut', 'bola'] : rng.shuffle(SOLIDS).slice(0, 4);
    const ans: SolidName = tanya === 'atas' ? 'kerucut' : tanya === 'sulit' ? 'bola' : bawah;
    if (!opsi.includes(ans)) opsi[0] = ans;
    const syarat = {
        atas: ['Ujungnya runcing, tidak ada yang bisa ditaruh di atasnya', 'Punya sisi datar di atas dan di bawah', 'Tidak punya sisi datar sama sekali'],
        sulit: ['Tidak punya sisi datar sama sekali', 'Punya sisi datar di atas dan di bawah', 'Ujungnya runcing, tidak ada yang bisa ditaruh di atasnya'],
        bawah: ['Punya sisi datar di atas dan di bawah', 'Ujungnya runcing, tidak ada yang bisa ditaruh di atasnya', 'Tidak punya sisi datar sama sekali'],
    }[tanya];
    const pertanyaan = tanya === 'atas' ? 'hanya cocok ditaruh di paling atas' : tanya === 'sulit' ? 'paling sulit dipakai karena akan menggelinding jatuh' : 'bisa ditaruh di paling bawah';
    const steps: Step[] = [
        pilih(rng, 'syarat', 'Ciri bangun yang dicari?', syarat[0], syarat.slice(1).map((x) => [x, 'salah-tumpuk-bangun'] as [string, string]), { hint: 'Benda yang ditumpuk harus bersentuhan di sisi datar.', explain: `${syarat[0]}.`, error: 'salah-tumpuk-bangun' }),
        pilih(rng, 'jawab', `Mainan mana yang ${pertanyaan}?`, ans, opsi.map((x) => [x, 'salah-tumpuk-bangun'] as [string, string]), { hint: 'Cocokkan ciri tadi dengan sisi tiap bangun.', explain: `${ans[0].toUpperCase() + ans.slice(1)}: ${RUANG[ans].datar} sisi datar, ${RUANG[ans].lengkung} sisi lengkung.`, error: 'salah-tumpuk-bangun' }),
    ];
    return { text: `${nama} menyusun menara dari mainan berbentuk ${opsi.join(', ')}. Mainan mana yang ${pertanyaan}?`, steps, conclusion: `Jawabannya ${ans}.` };
};

export const topic: TopicDef = {
    topic: 'sd2-12-bangun-ruang',
    skills: [
        { code: 'kenali-bangun-ruang', name: 'Mengenali bangun ruang dan benda sehari-hari', gen: kenali },
        { code: 'sisi-datar-lengkung', name: 'Sisi datar dan sisi lengkung', gen: sisi },
        { code: 'golongkan-bangun-ruang', name: 'Menggolongkan bangun ruang dan menyusun menara', gen: golongkan },
    ],
};
