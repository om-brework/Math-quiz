/* sd1-02 Bilangan Urutan: pertama–kesepuluh, kata dan lambang, posisi dari depan dan dari belakang. */
import type { Generator, ObjectName, Step, TopicDef } from '../../types';
import { namaAcak, pilihan, pilihanTetap, terbilangKecil, urutanKata } from './common';

const BENDA: { item: ObjectName; nama: string }[] = [
    { item: 'kelereng', nama: 'kelereng' }, { item: 'bola', nama: 'bola' }, { item: 'mobil', nama: 'mobil' }, { item: 'apel', nama: 'apel' }, { item: 'bunga', nama: 'bunga' },
];

/** Kata dan lambang bilangan urutan; membedakan banyak dan posisi. */
const kataLambang: Generator = (rng, level) => {
    if (level === 3) {
        const b = rng.pick(BENDA);
        const n = rng.int(6, 10);
        const k = rng.int(2, n - 1);
        const posisi = rng.chance(0.6);
        const kalimat = posisi ? `Warnai ${b.nama} ${urutanKata(k)} dari kiri.` : `Warnai ${k} ${b.nama} dari kiri.`;
        const steps: Step[] = [
            { kind: 'choice', id: 'jenis', prompt: `"${posisi ? `${b.nama} ${urutanKata(k)}` : `${k} ${b.nama}`}" menunjukkan apa?`,
              ...pilihanTetap(posisi ? 'posisi (yang ke berapa)' : 'banyak (berapa banyak)', ['banyak (berapa banyak)', 'posisi (yang ke berapa)']),
              hint: posisi ? `Kata "${urutanKata(k)}" adalah bilangan urutan.` : `"${k} ${b.nama}" tidak memakai "ke-".`,
              explain: posisi ? `"${urutanKata(k)}" menunjuk satu ${b.nama} di posisi ke-${k}.` : `"${k} ${b.nama}" berarti ada ${k} buah.`, error: 'tertukar-banyak-urutan' },
            { kind: 'number', id: 'jumlah', prompt: `Berapa ${b.nama} yang diwarnai?`, answer: String(posisi ? 1 : k), suffix: b.nama,
              hint: posisi ? 'Bilangan urutan hanya menunjuk satu benda.' : `Warnai ${k} buah dari kiri.`,
              explain: posisi ? `Hanya 1 ${b.nama}, yaitu ${b.nama} ke-${k} dari kiri.` : `${k} ${b.nama}: ke-1 sampai ke-${k}.`, error: 'tertukar-banyak-urutan' },
        ];
        return { text: `Ada ${n} ${b.nama} berjajar. ${kalimat}`, visual: { type: 'objects', item: b.item, count: n }, steps,
            conclusion: posisi ? `Jadi hanya 1 ${b.nama} yang diwarnai, yaitu ${b.nama} ke-${k}.` : `Jadi ${k} ${b.nama} yang diwarnai.` };
    }
    const k = rng.int(1, 10);
    if (level === 1) {
        // lambang → kata
        const wrong: [string, string][] = [];
        if (k === 1) wrong.push(['kesatu', 'salah-kata-urutan'], ['satu', 'tertukar-banyak-urutan']);
        else wrong.push([terbilangKecil(k), 'tertukar-banyak-urutan']);
        wrong.push([urutanKata(k === 10 ? 9 : k + 1), 'salah-kata-urutan'], [urutanKata(k === 1 ? 3 : k - 1), 'salah-kata-urutan']);
        const steps: Step[] = [
            { kind: 'number', id: 'bilangan', prompt: `Lambang ke-${k} berasal dari bilangan berapa?`, answer: String(k),
              hint: 'Lihat angka sesudah "ke-".', explain: `ke-${k} berasal dari ${k}.`, error: 'salah-kata-urutan' },
            { kind: 'choice', id: 'kata', prompt: `Tulis ke-${k} dengan kata.`, ...pilihan(rng, urutanKata(k), wrong),
              hint: k === 1 ? 'ke-1 punya kata khusus.' : `Tambahkan "ke" di depan "${terbilangKecil(k)}".`, explain: `ke-${k} dibaca ${urutanKata(k)}.`, error: 'salah-kata-urutan' },
        ];
        return { text: `Bagaimana menulis ke-${k} dengan kata?`, steps, conclusion: `Jadi ke-${k} ditulis ${urutanKata(k)}.` };
    }
    // tingkat 2: kata → lambang
    const steps: Step[] = [
        { kind: 'number', id: 'bilangan', prompt: `"${urutanKata(k)}" berasal dari bilangan berapa?`, answer: String(k),
          hint: k === 1 ? '"Pertama" adalah urutan paling awal.' : `Buang "ke" di depan kata.`, explain: `"${urutanKata(k)}" berasal dari ${k}.`, error: 'salah-kata-urutan' },
        { kind: 'choice', id: 'lambang', prompt: `Tulis "${urutanKata(k)}" dengan lambang.`,
          ...pilihan(rng, `ke-${k}`, [[`ke${k}`, 'lambang-urutan-tanpa-hubung'], [String(k), 'tertukar-banyak-urutan'], [`ke-${k === 10 ? 9 : k + 1}`, 'salah-kata-urutan']]),
          hint: 'Lambang bilangan urutan memakai "ke" dan tanda hubung.', explain: `"${urutanKata(k)}" ditulis ke-${k}.`, error: 'lambang-urutan-tanpa-hubung' },
    ];
    return { text: `Tulis "${urutanKata(k)}" dengan lambang.`, steps, conclusion: `Jadi ${urutanKata(k)} ditulis ke-${k}.` };
};

const antreanTeks = (names: string[]) => `Antrean dari depan: ${names.join(', ')}.`;

/** Menunjuk posisi dalam antrean dari depan atau dari belakang. */
const posisi: Generator = (rng, level) => {
    const n = level === 1 ? rng.int(4, 6) : rng.int(6, level === 2 ? 8 : 10);
    const names = namaAcak(rng, n);
    const dariBelakang = level === 3;
    const k = rng.int(2, n - 1);
    const idx = dariBelakang ? n - k : k - 1;
    const ujung = dariBelakang ? names[n - 1] : names[0];
    const lain = dariBelakang ? names[0] : names[n - 1];
    const salahUjung = dariBelakang ? names[k - 1] : names[n - k];
    const steps: Step[] = [
        { kind: 'choice', id: 'ujung', prompt: `Tentukan ujungnya. "Dari ${dariBelakang ? 'belakang' : 'depan'}" mulai dari siapa?`,
          ...pilihanTetap(ujung, [names[0], names[n - 1]], { [lain]: 'salah-ujung-antrean' }),
          hint: dariBelakang ? 'Dari belakang berarti mulai dari anak paling ujung, paling jauh dari depan.' : 'Dari depan berarti mulai dari anak pertama di daftar.',
          explain: `${ujung} adalah yang pertama dari ${dariBelakang ? 'belakang' : 'depan'}.`, error: 'salah-ujung-antrean' },
    ];
    if (level === 2) {
        steps.push({ kind: 'number', id: 'hitung', prompt: `Tunjuk dan hitung dari ${ujung}. ${names[idx]} urutan ke berapa dari depan?`, answer: String(k), prefix: 'ke-',
            hint: `${names[0]} ke-1, ${names[1]} ke-2, … teruskan sampai ${names[idx]}.`, explain: `${names.slice(0, k).map((x, i) => `${x} ke-${i + 1}`).join(', ')}.`, error: 'salah-hitung-posisi' });
        steps.push({ kind: 'choice', id: 'kata', prompt: `Tulis dengan kata: ${names[idx]} adalah anak …`, ...pilihan(rng, urutanKata(k), [[urutanKata(k + 1), 'salah-hitung-posisi'], [urutanKata(k - 1), 'salah-hitung-posisi'], [urutanKata(n - k + 1), 'salah-ujung-antrean']]),
            hint: `ke-${k} dibaca dengan "ke" di depan bilangannya.`, explain: `ke-${k} = ${urutanKata(k)}.`, error: 'salah-kata-urutan' });
        return { text: `${antreanTeks(names)} ${names[idx]} urutan ke berapa dari depan?`, steps, conclusion: `Jadi ${names[idx]} ${urutanKata(k)} (ke-${k}) dari depan.` };
    }
    const urut = dariBelakang ? [...names].reverse() : names;
    steps.push({ kind: 'choice', id: 'siapa', prompt: `Tunjuk dan hitung. Siapa anak ${urutanKata(k)} dari ${dariBelakang ? 'belakang' : 'depan'}?`,
        ...pilihan(rng, names[idx], [[salahUjung, 'salah-ujung-antrean'], [urut[k], 'salah-hitung-posisi'], [urut[k - 2], 'salah-hitung-posisi']]),
        hint: `Mulai dari ${ujung} sebagai pertama, lalu hitung sampai ${urutanKata(k)}.`, explain: `${urut.slice(0, k).map((x, i) => `${x} ke-${i + 1}`).join(', ')}.`, error: 'salah-hitung-posisi' });
    return { text: `${antreanTeks(names)} Siapa anak ${urutanKata(k)} dari ${dariBelakang ? 'belakang' : 'depan'}?`, steps,
        conclusion: `Jadi anak ${urutanKata(k)} dari ${dariBelakang ? 'belakang' : 'depan'} adalah ${names[idx]}.` };
};

/** Mengubah urutan dari depan menjadi dari belakang. */
const depanBelakang: Generator = (rng, level) => {
    if (level === 1) {
        const n = rng.int(5, 7);
        const names = namaAcak(rng, n);
        const d = rng.int(2, n - 1);
        const x = names[d - 1], bel = n - d + 1;
        const steps: Step[] = [
            { kind: 'choice', id: 'ujung', prompt: '"Dari belakang" mulai dari siapa?', ...pilihanTetap(names[n - 1], [names[0], names[n - 1]], { [names[0]]: 'salah-ujung-antrean' }),
              hint: 'Anak paling ujung adalah yang pertama dari belakang.', explain: `${names[n - 1]} pertama dari belakang.`, error: 'salah-ujung-antrean' },
            { kind: 'number', id: 'hitung', prompt: `Hitung dari ${names[n - 1]} sampai ${x}. ${x} ke berapa dari belakang?`, answer: String(bel), prefix: 'ke-',
              hint: `${names[n - 1]} ke-1, ${names[n - 2]} ke-2, … sampai ${x}.`, explain: `${[...names].reverse().slice(0, bel).map((y, i) => `${y} ke-${i + 1}`).join(', ')}.`, error: d === bel ? 'salah-hitung-posisi' : 'salah-urutan-dari-belakang' },
        ];
        return { text: `${antreanTeks(names)} ${x} urutan ke berapa dari belakang?`, steps, conclusion: `Jadi ${x} ${urutanKata(bel)} (ke-${bel}) dari belakang.` };
    }
    const n = rng.int(6, 10);
    const nama = namaAcak(rng, 1)[0];
    if (level === 2) {
        const d = rng.int(2, n - 1);
        const belakang = n - d, bel = belakang + 1;
        const steps: Step[] = [
            { kind: 'number', id: 'di-depan', prompt: `Ada berapa anak di depan ${nama}?`, answer: String(d - 1), suffix: 'anak',
              hint: `${nama} ke-${d}. Anak sebelum dia ada berapa?`, explain: `Di depan ${nama} ada ${d - 1} anak.`, error: 'salah-hitung-posisi' },
            { kind: 'number', id: 'di-belakang', prompt: `Ada berapa anak di belakang ${nama}?`, answer: String(belakang), suffix: 'anak',
              hint: `Semua ${n} anak, kurangi ${d - 1} anak di depan dan ${nama} sendiri.`, explain: `${n} − ${d - 1} − 1 = ${belakang} anak.`, error: 'salah-hitung-posisi' },
            { kind: 'number', id: 'dari-belakang', prompt: `Jadi ${nama} urutan ke berapa dari belakang?`, answer: String(bel), prefix: 'ke-',
              hint: `${nama} datang sesudah ${belakang} anak itu.`, explain: `Sesudah ${belakang} anak, ${nama} ke-${bel}. Cek: ${d - 1} + 1 + ${belakang} = ${n}.`,
              error: 'salah-urutan-dari-belakang' },
        ];
        return { text: `Ada ${n} anak antre membeli bakso. ${nama} berada di urutan ke-${d} dari depan. ${nama} urutan ke berapa dari belakang?`,
            steps, conclusion: `Jadi ${nama} ${urutanKata(bel)} (ke-${bel}) dari belakang.` };
    }
    // tingkat 3: cari banyak anak dari dua posisi
    const d = rng.int(2, 6);
    const bel = rng.int(2, 11 - d);
    const total = d + bel - 1;
    const steps: Step[] = [
        { kind: 'number', id: 'di-depan', prompt: `${nama} ke-${d} dari depan. Ada berapa anak di depannya?`, answer: String(d - 1), suffix: 'anak',
          hint: `Anak ke-1 sampai ke-${d - 1} ada di depan ${nama}.`, explain: `Di depan ${nama} ada ${d - 1} anak.`, error: 'salah-hitung-posisi' },
        { kind: 'number', id: 'di-belakang', prompt: `${nama} ke-${bel} dari belakang. Ada berapa anak di belakangnya?`, answer: String(bel - 1), suffix: 'anak',
          hint: `Dari belakang, ada ${bel - 1} anak sebelum ${nama}.`, explain: `Di belakang ${nama} ada ${bel - 1} anak.`, error: 'salah-hitung-posisi' },
        { kind: 'number', id: 'total', prompt: `Jumlahkan: anak di depan + ${nama} + anak di belakang.`, answer: String(total), suffix: 'anak',
          hint: `${d - 1} + 1 + ${bel - 1} = ?`, explain: `${d - 1} + 1 + ${bel - 1} = ${total}. Jangan lupa ${nama} sendiri.`, error: 'salah-hitung-posisi' },
    ];
    return { text: `Anak-anak antre naik perosotan. ${nama} urutan ke-${d} dari depan dan ke-${bel} dari belakang. Berapa anak dalam antrean itu?`, steps,
        conclusion: `Jadi ada ${total} anak dalam antrean.` };
};

export const topic: TopicDef = {
    topic: 'sd1-02-bilangan-urutan',
    skills: [
        { code: 'kata-lambang-urutan', name: 'Kata dan lambang bilangan urutan', gen: kataLambang },
        { code: 'posisi-antrean', name: 'Mencari posisi dalam antrean', gen: posisi },
        { code: 'depan-belakang', name: 'Urutan dari depan dan dari belakang', gen: depanBelakang },
    ],
};
