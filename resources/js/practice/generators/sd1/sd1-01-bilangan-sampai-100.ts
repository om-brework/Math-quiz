/* sd1-01 Bilangan sampai 100: membilang, membaca/menulis, nilai tempat, membandingkan, mengurutkan, pola. */
import { terbilang } from '../../format';
import type { Generator, Step, TopicDef } from '../../types';
import { NAMA, berbeda, pilihan, pilihanTetap, pul, sat } from './common';

const tukar = (n: number) => sat(n) * 10 + pul(n);

/** Membilang dengan ikatan (puluhan) dan stik lepas (satuan). */
const membilang: Generator = (rng, level) => {
    const nama = rng.pick(NAMA);
    if (level === 3) {
        // stik lepas lebih dari 10: harus diikat dulu
        const ikat = rng.int(2, 7);
        const lepas = rng.int(11, 19);
        const ikatBaru = ikat + 1, sisa = lepas - 10, total = ikat * 10 + lepas;
        const steps: Step[] = [
            { kind: 'number', id: 'ikat-baru', prompt: `Ada ${lepas} stik lepas. Ikat 10 stik. Sekarang ada berapa ikat?`, answer: String(ikatBaru), suffix: 'ikat',
              hint: `${lepas} stik lepas cukup untuk 1 ikat baru. Tambahkan ke ${ikat} ikat.`, explain: `${lepas} = 10 + ${sisa}. Ikatan bertambah 1: ${ikat} + 1 = ${ikatBaru} ikat.`, error: 'lupa-ikat-sepuluh' },
            { kind: 'number', id: 'lepas', prompt: 'Berapa stik yang masih lepas?', answer: String(sisa), suffix: 'stik',
              hint: `${lepas} − 10 = ?`, explain: `Setelah diikat, sisa ${sisa} stik lepas.`, error: 'lupa-ikat-sepuluh' },
            { kind: 'number', id: 'total', prompt: `Jadi berapa semua stik ${nama}?`, answer: String(total), suffix: 'stik',
              hint: `${ikatBaru} ikat = ${ikatBaru * 10}. Lanjutkan ${sisa} lagi.`, explain: `${ikatBaru} puluhan dan ${sisa} satuan adalah ${total}.`, error: 'tertukar-puluhan-satuan' },
        ];
        return { text: `${nama} punya ${ikat} ikat stik dan ${lepas} stik lepas. Setiap ikat berisi 10 stik. Berapa semua stiknya?`, steps,
            conclusion: `Jadi ${nama} punya ${total} stik (${terbilang(total)}).`, visual: { type: 'base10', tens: ikat, ones: lepas } };
    }
    const tens = level === 1 ? rng.int(1, 4) : rng.int(3, 9);
    const ones = rng.int(level === 1 ? 0 : 1, 9);
    const n = tens * 10 + ones;
    const [grup, lepas] = level === 1 ? ['kelompok', 'kelereng lepas'] : ['batang panjang', 'kotak kecil'];
    const steps: Step[] = [
        { kind: 'number', id: 'ikat', prompt: `Hitung puluhan dulu. Ada berapa ${grup}?`, answer: String(tens), suffix: grup.split(' ')[0],
          hint: `Satu ${grup} berisi 10. Hitung ${grup} saja dulu.`, explain: `Ada ${tens} ${grup}, yaitu ${tens} puluhan.`, error: 'salah-membilang-benda' },
        { kind: 'number', id: 'loncat', prompt: `Hitung loncat sepuluh sebanyak ${tens} kali. Sampai berapa?`, answer: String(tens * 10),
          hint: `10, 20, 30, … sebanyak ${tens} kali.`, explain: `${tens} puluhan = ${tens * 10}.`, error: 'salah-membilang-benda' },
        { kind: 'number', id: 'jumlah', prompt: ones ? `Lanjutkan dengan ${ones} ${lepas}. Berapa semuanya?` : `Tidak ada ${lepas}. Berapa semuanya?`, answer: String(n),
          hint: ones ? `Mulai dari ${tens * 10}, bilang maju ${ones} kali.` : `Tidak ada satuan.`, explain: `${tens * 10} lalu maju ${ones} menjadi ${n}.`, error: 'tertukar-puluhan-satuan' },
    ];
    return {
        text: level === 1 ? 'Berapa banyak kelereng ini? Setiap kelompok berisi 10.' : 'Berapa bilangan yang ditunjukkan blok ini? Batang panjang = 10, kotak kecil = 1.',
        visual: level === 1 ? { type: 'objects', item: 'kelereng', count: n, group: 10 } : { type: 'base10', tens, ones },
        steps, conclusion: `Jadi banyaknya ${n} (${terbilang(n)}).`,
    };
};

/** Membaca dan menulis bilangan, nilai tempat. */
const nilaiTempat: Generator = (rng, level) => {
    if (level === 1) {
        // angka → kata
        const n = rng.chance(0.15) ? rng.pick([11, 100, 10]) : rng.int(21, 99);
        const p = pul(n), s = sat(n);
        const wrong: [string, string][] = [];
        if (n === 100) wrong.push(['satu ratus', 'salah-baca-bilangan-kata'], ['sepuluh', 'salah-baca-bilangan-kata']);
        else if (n === 11) wrong.push(['satu puluh satu', 'salah-baca-bilangan-kata'], ['satu satu', 'salah-baca-bilangan-kata']);
        else if (n === 10) wrong.push(['satu puluh', 'salah-baca-bilangan-kata'], ['seratus', 'salah-baca-bilangan-kata']);
        else {
            if (s && p !== s) wrong.push([terbilang(tukar(n)), 'tertukar-puluhan-satuan']);
            wrong.push([`${terbilang(p)} ${s ? terbilang(s) : 'nol'}`, 'salah-baca-bilangan-kata']);
            wrong.push([terbilang(n === 99 ? 98 : n + 1), 'salah-baca-bilangan-kata']);
        }
        const steps: Step[] = n >= 21 && n <= 99 ? [
            { kind: 'number', id: 'puluhan', prompt: `Pisahkan tempatnya. Angka puluhan pada ${n} adalah?`, answer: String(p),
              hint: 'Angka puluhan ada di kiri.', explain: `Angka kiri ${p} adalah puluhan, dibaca ${terbilang(p * 10)}.`, error: 'tertukar-puluhan-satuan' },
            { kind: 'number', id: 'satuan', prompt: `Angka satuan pada ${n} adalah?`, answer: String(s),
              hint: 'Angka satuan ada di kanan.', explain: s ? `Angka kanan ${s} adalah satuan, dibaca ${terbilang(s)}.` : 'Satuannya 0, tidak dibaca.', error: 'tertukar-puluhan-satuan' },
            { kind: 'choice', id: 'kata', prompt: `Gabungkan. Bagaimana ${n} dibaca?`, ...pilihan(rng, terbilang(n), wrong),
              hint: 'Baca puluhan dulu, lalu satuan.', explain: `${n} dibaca ${terbilang(n)}.`, error: 'salah-baca-bilangan-kata' },
        ] : [
            { kind: 'choice', id: 'khusus', prompt: `Bilangan ${n} punya nama khusus. Bagaimana dibaca?`, ...pilihan(rng, terbilang(n), wrong),
              hint: 'Ingat tiga kata khusus: sepuluh, sebelas, seratus.', explain: `${n} dibaca ${terbilang(n)}.`, error: 'salah-baca-bilangan-kata' },
        ];
        return { text: `Tulis bilangan ${n} dengan kata.`, steps, conclusion: `Jadi ${n} dibaca ${terbilang(n)}.` };
    }
    if (level === 2) {
        // kata → angka
        let n: number;
        do n = rng.int(12, 99); while (sat(n) === pul(n));
        const p = pul(n), s = sat(n);
        const steps: Step[] = [
            { kind: 'number', id: 'puluhan', prompt: `"${terbilang(n)}". Ada berapa puluhan?`, answer: String(p), suffix: 'puluhan',
              hint: n < 20 ? 'Belasan artinya 1 puluhan.' : `Lihat kata sebelum "puluh".`, explain: `${n < 20 ? 'Belasan' : terbilang(p * 10)} berarti ${p} puluhan.`, error: 'salah-baca-bilangan-kata' },
            { kind: 'number', id: 'satuan', prompt: 'Ada berapa satuan?', answer: String(s), suffix: 'satuan',
              hint: n < 20 ? 'Lihat kata sebelum "belas".' : `Lihat kata sesudah "puluh".`, explain: s ? `Satuannya ${s}.` : 'Tidak ada kata satuan, jadi satuannya 0.', error: 'salah-baca-bilangan-kata' },
            { kind: 'number', id: 'angka', prompt: 'Tulis bilangannya dengan angka.', answer: String(n),
              hint: 'Puluhan di kiri, satuan di kanan.', explain: `${p} puluhan dan ${s} satuan ditulis ${n}.`, error: 'tertukar-puluhan-satuan' },
        ];
        return { text: `Tulis dengan angka: ${terbilang(n)}.`, steps, conclusion: `Jadi ${terbilang(n)} ditulis ${n}.` };
    }
    // tingkat 3: teka-teki nilai tempat
    const p = rng.int(3, 9);
    const beda = rng.int(1, p - 1);
    const lebih = rng.chance(0.5) && p + beda <= 9;
    const s = lebih ? p + beda : p - beda;
    const n = p * 10 + s;
    const steps: Step[] = [
        { kind: 'number', id: 'puluhan', prompt: 'Berapa angka puluhannya?', answer: String(p),
          hint: `Bilangan ini punya ${p} puluhan.`, explain: `Angka puluhan ${p}, bernilai ${p * 10}.`, error: 'salah-nilai-angka' },
        { kind: 'number', id: 'satuan', prompt: `Angka satuannya ${beda} ${lebih ? 'lebih besar' : 'lebih kecil'} dari ${p}. Berapa angka satuannya?`, answer: String(s),
          hint: `${p} ${lebih ? '+' : '−'} ${beda} = ?`, explain: `${p} ${lebih ? '+' : '−'} ${beda} = ${s}.`, error: lebih ? 'salah-fakta-tambah' : 'salah-fakta-kurang' },
        { kind: 'number', id: 'bilangan', prompt: 'Bilangan apakah aku?', answer: String(n),
          hint: 'Tulis puluhan di kiri, satuan di kanan.', explain: `${p} puluhan dan ${s} satuan = ${p * 10} + ${s} = ${n}.`, error: 'tertukar-puluhan-satuan' },
    ];
    return { text: `Tebak bilanganku! Aku punya ${p} puluhan. Angka satuanku ${beda} ${lebih ? 'lebih besar' : 'lebih kecil'} dari angka puluhanku.`, steps,
        conclusion: `Jadi bilangannya ${n} (${terbilang(n)}).` };
};

/** Membandingkan dan mengurutkan. */
const bandingkan: Generator = (rng, level) => {
    if (level === 1) {
        const [pa, pb] = berbeda(rng, 2, 1, 9);
        let a = pa * 10 + rng.int(0, 9), b = pb * 10 + rng.int(0, 9);
        if (rng.chance(0.5) && sat(a) !== pa && sat(a) !== 0) b = tukar(a); // jebakan angka tertukar
        if (pul(a) === pul(b)) b = (pul(b) % 9 + 1) * 10 + sat(b);
        const besar = Math.max(a, b), kecil = Math.min(a, b);
        const steps: Step[] = [
            { kind: 'choice', id: 'puluhan', prompt: `Bandingkan puluhan dulu. Mana yang puluhannya lebih besar?`, ...pilihanTetap(String(besar), [String(a), String(b)], { [String(kecil)]: 'bandingkan-satuan-dulu' }),
              hint: `Puluhan ${a} adalah ${pul(a)}, puluhan ${b} adalah ${pul(b)}.`, explain: `${pul(besar)} puluhan lebih banyak dari ${pul(kecil)} puluhan.`, error: 'bandingkan-satuan-dulu' },
            { kind: 'choice', id: 'kata', prompt: `${a} … ${b}`, ...pilihanTetap(a > b ? 'lebih besar dari' : 'lebih kecil dari', ['lebih besar dari', 'lebih kecil dari', 'sama dengan']),
              hint: `Yang puluhannya lebih besar adalah bilangan yang lebih besar.`, explain: `${a} ${a > b ? 'lebih besar dari' : 'lebih kecil dari'} ${b}.`, error: 'bandingkan-satuan-dulu' },
        ];
        return { text: `Bandingkan ${a} dan ${b}.`, steps, conclusion: `Jadi ${a} ${a > b ? 'lebih besar dari' : 'lebih kecil dari'} ${b}.` };
    }
    // tiga bilangan: dua puluhannya sama, satu bilangan dengan angka tertukar
    let a: number, b: number, c: number;
    for (;;) {
        const p = rng.int(2, 8), s1 = rng.int(1, 9), s2 = rng.int(0, 9);
        a = p * 10 + s1; b = p * 10 + s2; c = tukar(a);
        if (s1 !== s2 && s1 !== p && new Set([a, b, c]).size === 3 && c >= 10) break;
    }
    const nums = rng.shuffle([a, b, c]);
    const naik = level === 2 ? true : rng.chance(0.5);
    const sorted = [...nums].sort((x, y) => (naik ? x - y : y - x));
    const key = (arr: number[]) => arr.join(', ');
    const ans = key(sorted);
    const asc = [...nums].sort((x, y) => x - y);
    const kebalik = key(naik ? [...asc].reverse() : asc);
    // pengecoh: urut menurut satuan saja
    const bySat = key([...nums].sort((x, y) => (naik ? sat(x) - sat(y) || x - y : sat(y) - sat(x) || y - x)));
    const swapMid = key([sorted[0], sorted[2], sorted[1]]);
    const terbesar = Math.max(...nums), terkecil = Math.min(...nums);
    const sama = nums.filter((x) => pul(x) === pul(a));
    const nama = rng.pick(NAMA), nama2 = rng.pick(NAMA.filter((x) => x !== nama));
    const steps: Step[] = [
        { kind: 'choice', id: 'terbesar', prompt: 'Bandingkan puluhan. Mana yang terbesar?', ...pilihanTetap(String(terbesar), nums.map(String), Object.fromEntries(nums.filter((x) => x !== terbesar).map((x) => [String(x), 'bandingkan-satuan-dulu']))),
          hint: 'Lihat angka puluhan (angka kiri) setiap bilangan.', explain: `${terbesar} punya puluhan paling besar.`, error: 'bandingkan-satuan-dulu' },
        { kind: 'choice', id: 'puluhan-sama', prompt: `${sama[0]} dan ${sama[1]} puluhannya sama. Mana yang lebih kecil?`, ...pilihanTetap(String(Math.min(...sama)), sama.map(String)),
          hint: 'Puluhan sama, jadi bandingkan satuannya.', explain: `Satuan ${sat(Math.min(...sama))} lebih kecil dari ${sat(Math.max(...sama))}.`, error: 'bandingkan-satuan-dulu' },
        { kind: 'choice', id: 'urutan', prompt: `Susun dari yang ${naik ? 'terkecil' : 'terbesar'}.`, ...pilihan(rng, ans, [[kebalik, 'salah-urutkan-bilangan'], [bySat, 'bandingkan-satuan-dulu'], [swapMid, 'salah-urutkan-bilangan']]),
          hint: naik ? `Mulai dari ${terkecil}.` : `Mulai dari ${terbesar}.`, explain: `Urutannya ${ans}.`, error: 'salah-urutkan-bilangan' },
    ];
    const text = level === 2
        ? `Urutkan dari yang terkecil: ${nums.join(', ')}.`
        : `${nama} mengumpulkan ${nums[0]} kelereng, ${nama2} ${nums[1]} kelereng, dan Kakak ${nums[2]} kelereng. Urutkan banyak kelereng mereka dari yang ${naik ? 'terkecil' : 'terbesar'}.`;
    return { text, steps, conclusion: `Jadi urutannya ${ans}.` };
};

/** Pola barisan bilangan. */
const pola: Generator = (rng, level) => {
    const step = level === 1 ? rng.pick([1, 2, 10]) : level === 2 ? rng.pick([2, 5, 10]) : rng.pick([3, 4, 5, 10]);
    const naik = level === 1 ? true : level === 2 ? false : rng.chance(0.5);
    const len = 6;
    let start: number;
    if (naik) start = rng.int(level === 1 ? 1 : 3, 100 - step * (len - 1));
    else start = rng.int(step * (len - 1) + (level === 2 ? 0 : 1), 100);
    if (step === 5) start = naik ? Math.max(5, start - (start % 5)) : Math.max(start - (start % 5), step * (len - 1));
    const seq = Array.from({ length: len }, (_, i) => start + (naik ? 1 : -1) * step * i);
    // posisi kosong: tingkat 1 dan 2 di belakang, tingkat 3 di tengah
    const blanks = level === 3 ? [1, 3] : level === 2 ? [3, 4] : [4];
    const shown = seq.map((n, i) => (blanks.includes(i) ? '…' : String(n))).join(', ');
    const aturan = `${naik ? 'tambah' : 'kurang'} ${step}`;
    const salahArah = `${naik ? 'kurang' : 'tambah'} ${step}`;
    const known = seq.findIndex((_, i) => !blanks.includes(i) && !blanks.includes(i + 1) && i + 1 < len);
    const steps: Step[] = [
        { kind: 'choice', id: 'aturan', prompt: 'Cari aturannya. Bandingkan dua bilangan yang berdekatan.',
          ...pilihan(rng, aturan, [[salahArah, 'salah-aturan-pola'], [`${naik ? 'tambah' : 'kurang'} ${step === 1 ? 2 : step === 10 ? 1 : step === 2 ? 1 : step - 1}`, 'salah-aturan-pola'], [`${naik ? 'tambah' : 'kurang'} ${step === 10 ? 5 : step + 1}`, 'salah-aturan-pola']]),
          hint: `Dari ${seq[known]} ke ${seq[known + 1]}, bertambah atau berkurang? Berapa?`, explain: `${seq[known]} ${naik ? '+' : '−'} ${step} = ${seq[known + 1]}. Aturannya ${aturan}.`, error: 'salah-aturan-pola' },
    ];
    blanks.forEach((bi, k) => {
        const prev = seq[bi - 1];
        steps.push({ kind: 'number', id: `kosong-${k + 1}`, prompt: level === 1 ? `Isi titik-titik: ${prev} ${naik ? '+' : '−'} ${step} = ?` : `Isi titik-titik ${k === 0 ? 'pertama' : 'kedua'}.`, answer: String(seq[bi]),
            hint: `Pakai aturan ${aturan} dari ${prev}.`, explain: `${prev} ${naik ? '+' : '−'} ${step} = ${seq[bi]}.`, error: 'salah-lanjutkan-pola' });
    });
    return { text: `Lengkapi pola: ${shown}`, steps, conclusion: `Jadi polanya ${seq.join(', ')} (aturan ${aturan}).`,
        visual: level === 1 ? { type: 'numberLine', from: seq[0] - (seq[0] % 10), to: Math.min(100, seq[0] - (seq[0] % 10) + (step === 10 ? 60 : 20)), step: step === 10 ? 10 : 1, marks: seq.filter((_, i) => !blanks.includes(i)) } : undefined };
};

export const topic: TopicDef = {
    topic: 'sd1-01-bilangan-sampai-100',
    skills: [
        { code: 'membilang-puluhan', name: 'Membilang dengan puluhan dan satuan', gen: membilang },
        { code: 'baca-tulis-nilai-tempat', name: 'Membaca, menulis, dan nilai tempat', gen: nilaiTempat },
        { code: 'bandingkan-urutkan', name: 'Membandingkan dan mengurutkan bilangan', gen: bandingkan },
        { code: 'pola-bilangan', name: 'Pola barisan bilangan', gen: pola },
    ],
};
