/* sd3-13 Garis sejajar dan tegak lurus: mengenali, pada bangun, dan menggambar dengan langkah petak. */
import type { Generator, Step, TopicDef } from '../../types';
import { NAMA, fixed, num, pick } from './util';

const SEJAJAR = 'sejajar', TEGAK = 'tegak lurus', POTONG = 'berpotongan, tidak tegak lurus';
const REL = { parallel: SEJAJAR, perpendicular: TEGAK, intersecting: POTONG } as const;

/** Mengenali pasangan garis dari gambar. */
const kenali: Generator = (rng, level) => {
    const relation = level === 1 ? rng.pick(['parallel', 'perpendicular'] as const) : rng.pick(['parallel', 'perpendicular', 'intersecting'] as const);
    const rotate = level === 1 ? rng.pick([0, 90, 180, 270]) : rng.int(1, 17) * 5;
    const ans = REL[relation];
    const steps: Step[] = [
        fixed({ id: 'bertemu', prompt: 'Kalau diperpanjang terus, apakah kedua garis akan bertemu?', options: ['ya', 'tidak'], answer: relation === 'parallel' ? 'tidak' : 'ya', error: 'sejajar-tegak-lurus-tertukar',
            hint: 'Bayangkan garisnya diperpanjang. Apakah jaraknya selalu sama, seperti rel kereta?', explain: relation === 'parallel' ? 'Jaraknya selalu sama, jadi tidak pernah bertemu.' : 'Kedua garis bertemu di satu titik.' }),
    ];
    if (relation !== 'parallel') steps.push(fixed({ id: 'siku', prompt: 'Apakah kedua garis membentuk sudut siku-siku?', options: ['ya', 'tidak'], answer: relation === 'perpendicular' ? 'ya' : 'tidak',
        error: 'berpotongan-dianggap-tegak-lurus', hint: 'Tempelkan alat siku di titik pertemuannya.', explain: relation === 'perpendicular' ? 'Sudutnya pas dengan alat siku.' : 'Sudutnya tidak pas dengan alat siku.' }));
    steps.push(pick(rng, { id: 'jawab', prompt: 'Jadi kedua garis itu ...', answer: ans,
        wrong: [SEJAJAR, TEGAK, POTONG].filter((x) => x !== ans).map((x) => [x, ans === POTONG && x === TEGAK ? 'berpotongan-dianggap-tegak-lurus' : ans === TEGAK && x === POTONG && rotate % 90 ? 'tegak-lurus-harus-berdiri' : 'sejajar-tegak-lurus-tertukar'] as [string, string]),
        error: 'sejajar-tegak-lurus-tertukar', hint: 'Tidak bertemu: sejajar. Bertemu dan siku-siku: tegak lurus. Bertemu tapi tidak siku-siku: berpotongan.',
        explain: ans === TEGAK && rotate % 90 ? 'Tegak lurus walaupun miring, karena membentuk siku-siku.' : `Kedua garis ${ans}.` }));
    return { text: level === 3 ? 'Perhatikan dua garis miring di bawah ini. Apakah keduanya sejajar, tegak lurus, atau berpotongan?' : 'Perhatikan dua garis di bawah ini.',
        visual: { type: 'lines', relation, rotate }, steps, conclusion: `Jadi kedua garis ${ans}.` };
};

const SISI = { AB: 'DC', DC: 'AB', AD: 'BC', BC: 'AD' } as const;
const TEGAK_DARI = { AB: ['AD', 'BC'], DC: ['AD', 'BC'], AD: ['AB', 'DC'], BC: ['AB', 'DC'] } as const;
const LETAK = 'A di kiri atas, B di kanan atas, C di kanan bawah, dan D di kiri bawah';

/** Sisi sejajar dan tegak lurus pada persegi dan persegi panjang. */
const sisiBangun: Generator = (rng, level) => {
    const bangun = rng.pick(['persegi', 'persegi panjang']);
    if (level === 1) {
        const s = rng.pick(Object.keys(SISI) as (keyof typeof SISI)[]);
        const teg = rng.pick(TEGAK_DARI[s]);
        const steps: Step[] = [
            pick(rng, { id: 'sejajar', prompt: `Sisi mana yang sejajar dengan ${s}?`, answer: SISI[s], wrong: TEGAK_DARI[s].map((x) => [x, 'sejajar-tegak-lurus-tertukar'] as [string, string]), error: 'sejajar-tegak-lurus-tertukar',
                hint: 'Sisi yang sejajar letaknya berhadapan, seperti rel kereta.', explain: `${s} berhadapan dengan ${SISI[s]}, jaraknya selalu sama.` }),
            pick(rng, { id: 'jawab', prompt: `Sisi mana yang tegak lurus dengan ${s}?`, answer: teg, wrong: [[SISI[s], 'sejajar-tegak-lurus-tertukar'], [s === 'AB' || s === 'DC' ? 'AC' : 'BD', 'berpotongan-dianggap-tegak-lurus']], error: 'sejajar-tegak-lurus-tertukar',
                hint: `Cari sisi yang bertemu dengan ${s} di pojok. Pojok ${bangun} selalu siku-siku.`, explain: `${teg} bertemu ${s} di pojok dan membentuk siku-siku.` }),
        ];
        return { text: `${bangun[0].toUpperCase()}${bangun.slice(1)} ABCD: ${LETAK}.`, visual: { type: 'shape', shape: bangun === 'persegi' ? 'persegi' : 'persegi-panjang', label: 'ABCD' }, steps,
            conclusion: `Jadi ${s} sejajar ${SISI[s]}, dan ${s} tegak lurus ${teg}.` };
    }
    if (level === 2) {
        const pojok = rng.pick(['A', 'B', 'C', 'D']);
        const pair = { A: 'AB dan AD', B: 'AB dan BC', C: 'BC dan DC', D: 'DC dan AD' }[pojok]!;
        const steps: Step[] = [
            num({ id: 'sejajar', prompt: 'Ada berapa pasang sisi yang sejajar?', answer: 2, error: 'sejajar-tegak-lurus-tertukar', hint: 'Cari sisi yang berhadapan: atas-bawah, kiri-kanan.', explain: 'AB sejajar DC, dan AD sejajar BC: 2 pasang.' }),
            pick(rng, { id: 'pojok', prompt: `Di pojok ${pojok}, sisi mana yang saling tegak lurus?`, answer: pair, wrong: Object.values({ A: 'AB dan AD', B: 'AB dan BC', C: 'BC dan DC', D: 'DC dan AD' }).filter((x) => x !== pair).map((x) => [x, 'sejajar-tegak-lurus-tertukar'] as [string, string]).concat([['AB dan DC', 'sejajar-tegak-lurus-tertukar']]),
                error: 'sejajar-tegak-lurus-tertukar', hint: `Dua sisi yang bertemu di titik ${pojok}.`, explain: `Di ${pojok} bertemu ${pair}, membentuk siku-siku.` }),
            num({ id: 'jawab', prompt: 'Ada berapa pasang sisi yang tegak lurus semuanya?', answer: 4, error: 'sejajar-tegak-lurus-tertukar', hint: 'Setiap pojok punya satu pasang. Ada berapa pojok?', explain: '4 pojok, jadi 4 pasang sisi tegak lurus.' }),
        ];
        return { text: `${bangun[0].toUpperCase()}${bangun.slice(1)} ABCD: ${LETAK}.`, visual: { type: 'shape', shape: bangun === 'persegi' ? 'persegi' : 'persegi-panjang', label: 'ABCD' }, steps,
            conclusion: 'Jadi ada 2 pasang sisi sejajar dan 4 pasang sisi tegak lurus.' };
    }
    // tingkat 3: periksa sejajar dengan mengukur jarak di dua tempat
    const nama = rng.pick(NAMA);
    const kiri = rng.int(2, 6);
    const sama = rng.chance(0.5);
    const kanan = sama ? kiri : kiri + rng.pick([-1, 1]);
    const steps: Step[] = [
        fixed({ id: 'cara', prompt: 'Bagaimana memeriksa dua garis sejajar?', options: ['ukur jaraknya di dua tempat', 'lihat apakah garisnya lurus', 'ukur panjang garisnya'], answer: 'ukur jaraknya di dua tempat', error: 'sejajar-tegak-lurus-tertukar',
            hint: 'Garis sejajar jaraknya selalu sama.', explain: 'Hitung jarak di dua tempat. Kalau sama, sejajar.' }),
        fixed({ id: 'banding', prompt: `Jarak di kiri ${kiri} petak, di kanan ${kanan} petak. Jaraknya ...`, options: ['sama', 'berbeda'], answer: sama ? 'sama' : 'berbeda', error: 'sejajar-tegak-lurus-tertukar',
            hint: `Bandingkan ${kiri} dan ${kanan}.`, explain: sama ? 'Jaraknya sama.' : 'Jaraknya berbeda.' }),
        fixed({ id: 'jawab', prompt: 'Apakah kedua garis sejajar?', options: ['ya', 'tidak'], answer: sama ? 'ya' : 'tidak', error: 'sejajar-tegak-lurus-tertukar',
            hint: 'Garis yang jaraknya makin dekat pasti akan bertemu kalau diperpanjang.', explain: sama ? 'Jaraknya sama, jadi sejajar.' : 'Jaraknya berubah, jadi kalau diperpanjang akan bertemu. Tidak sejajar.' }),
    ];
    return { text: `${nama} menggambar dua garis mendatar di kertas berpetak. Di ujung kiri, jarak kedua garis ${kiri} petak. Di ujung kanan, jaraknya ${kanan} petak. Apakah kedua garis sejajar?`, steps,
        conclusion: sama ? 'Ya, kedua garis sejajar.' : 'Tidak, kedua garis tidak sejajar.' };
};

const langkah = (r: number, u: number) => `kanan ${r}, ${u >= 0 ? 'naik' : 'turun'} ${Math.abs(u)}`;

/** Menggambar garis sejajar atau tegak lurus dengan langkah petak. */
const langkahPetak: Generator = (rng, level) => {
    const nama = rng.pick(NAMA);
    if (level === 1) {
        const n = rng.int(3, 7), k = rng.int(1, 4);
        const steps: Step[] = [
            pick(rng, { id: 'langkah', prompt: 'Bedeng kedua harus sejajar dan sama panjang. Dari C, langkah petaknya ...', answer: `${n} petak ke kanan`,
                wrong: [[`${n} petak ke bawah`, 'sejajar-tegak-lurus-tertukar'], [`${n + 1} petak ke kanan`, 'salah-langkah-petak'], [`${k} petak ke kanan`, 'salah-langkah-petak']],
                error: 'salah-langkah-petak', hint: 'Garis sejajar memakai langkah petak yang sama, hanya mulai dari titik lain.', explain: `Sama seperti AB: ${n} petak ke kanan.` }),
            num({ id: 'jarak', prompt: 'Titik D ada berapa petak di bawah B?', answer: k, suffix: 'petak', error: 'salah-langkah-petak', hint: 'Jarak kedua garis sejajar selalu sama.', explain: `D ada ${k} petak di bawah B, sama seperti C di bawah A.` }),
            fixed({ id: 'jawab', prompt: 'Selang AC lurus ke bawah. Apakah AC tegak lurus dengan AB?', options: ['ya', 'tidak'], answer: 'ya', error: 'sejajar-tegak-lurus-tertukar',
                hint: 'Garis tegak dan garis mendatar bertemu membentuk siku-siku.', explain: 'AC tegak dan AB mendatar, jadi tegak lurus.' }),
        ];
        return { text: `${nama} menggambar rencana kebun di kertas berpetak. Bedeng pertama dari A ke B, ${n} petak ke kanan. Bedeng kedua mulai dari C, ${k} petak tepat di bawah A. Selang air dipasang dari A ke C.`,
            steps, conclusion: `Bedeng kedua dari C, ${n} petak ke kanan sampai D. AC tegak lurus AB.` };
    }
    if (level === 2) {
        const r = rng.int(1, 3), u = rng.pick([1, 2, 3]) * rng.pick([1, -1]);
        const kali = rng.int(2, 3);
        const steps: Step[] = [
            pick(rng, { id: 'langkah', prompt: `Garis AB berjalan ${langkah(r, u)}, diulang ${kali} kali. Garis dari C yang sejajar AB berjalan ...`, answer: langkah(r, u),
                wrong: [[langkah(r, -u), 'sejajar-tegak-lurus-tertukar'], [langkah(Math.abs(u), r * Math.sign(u)), 'salah-langkah-petak'], [langkah(r + 1, u), 'salah-langkah-petak']],
                error: 'salah-langkah-petak', hint: 'Garis sejajar memakai langkah petak yang sama persis.', explain: `Sama seperti AB: ${langkah(r, u)}.` }),
            num({ id: 'kanan', prompt: `Langkah itu diulang ${kali} kali dari C. Titik D ada berapa petak di kanan C?`, answer: r * kali, suffix: 'petak', error: 'salah-langkah-petak', hint: `${kali} × ${r}`, explain: `${kali} × ${r} = ${r * kali} petak ke kanan.` }),
            num({ id: 'jawab', prompt: `Titik D ada berapa petak ${u > 0 ? 'di atas' : 'di bawah'} C?`, answer: Math.abs(u) * kali, suffix: 'petak', error: 'salah-langkah-petak', hint: `${kali} × ${Math.abs(u)}`, explain: `${kali} × ${Math.abs(u)} = ${Math.abs(u) * kali} petak ${u > 0 ? 'ke atas' : 'ke bawah'}.` }),
        ];
        return { text: `Di kertas berpetak, ${nama} menggambar garis AB. Ia ingin menggambar garis CD yang sejajar dengan AB.`, steps,
            conclusion: `Jadi D ada ${r * kali} petak di kanan dan ${Math.abs(u) * kali} petak ${u > 0 ? 'di atas' : 'di bawah'} C.` };
    }
    // tingkat 3: tegak lurus pada garis miring atau mendatar
    const miring = rng.chance(0.6);
    const naik = rng.chance(0.5);
    const kali = rng.int(2, 4);
    const ab = miring ? langkah(1, naik ? 1 : -1) : 'kanan 1, naik 0';
    const jawab = miring ? langkah(1, naik ? -1 : 1) : 'lurus ke bawah (atau ke atas)';
    const steps: Step[] = [
        pick(rng, { id: 'aturan', prompt: `Garis AB berjalan ${miring ? ab : 'mendatar'}. Garis yang tegak lurus dengan AB berjalan ...`, answer: jawab,
            wrong: miring ? [[ab, 'sejajar-tegak-lurus-tertukar'], ['kanan 2, naik 1', 'salah-langkah-petak'], ['mendatar ke kanan', 'salah-langkah-petak']] : [['mendatar ke kanan', 'sejajar-tegak-lurus-tertukar'], ['kanan 1, naik 1', 'berpotongan-dianggap-tegak-lurus'], ['kanan 1, turun 1', 'berpotongan-dianggap-tegak-lurus']],
            error: 'salah-langkah-petak', hint: miring ? 'Garis "kanan 1, naik 1" tegak lurus dengan garis "kanan 1, turun 1".' : 'Garis mendatar tegak lurus dengan garis tegak.',
            explain: `Tegak lurus dengan AB: ${jawab}.` }),
        miring
            ? num({ id: 'jawab', prompt: `Dari P, langkah itu diulang ${kali} kali sampai Q. Q ada berapa petak ${naik ? 'di bawah' : 'di atas'} P?`, answer: kali, suffix: 'petak', error: 'salah-langkah-petak',
                hint: `Setiap langkah ${naik ? 'turun' : 'naik'} 1.`, explain: `${kali} langkah, jadi ${kali} petak ${naik ? 'ke bawah' : 'ke atas'} dan ${kali} petak ke kanan.` })
            : pick(rng, { id: 'jawab', prompt: `Garis PQ panjangnya ${kali} petak dan tegak lurus dengan AB. Di mana titik Q?`, answer: `${kali} petak tepat di bawah P`,
                wrong: [[`${kali} petak di kanan P`, 'sejajar-tegak-lurus-tertukar'], [`${kali} petak ke kanan dan ${kali} petak ke bawah dari P`, 'berpotongan-dianggap-tegak-lurus']],
                error: 'salah-langkah-petak', hint: 'AB mendatar, jadi PQ harus tegak.', explain: `Q ada ${kali} petak tepat di bawah P.` }),
    ];
    return { text: `Titik P ada pada garis AB. ${nama} ingin menggambar garis PQ yang tegak lurus dengan AB di kertas berpetak.`, steps,
        conclusion: miring ? `Jadi PQ berjalan ${jawab}, dan Q ada ${kali} petak ${naik ? 'di bawah' : 'di atas'} P.` : 'Jadi PQ adalah garis tegak, Q tepat di bawah P.' };
};

export const topic: TopicDef = {
    topic: 'sd3-13-garis-sejajar-tegak-lurus',
    skills: [
        { code: 'kenali-garis', name: 'Mengenali garis sejajar, tegak lurus, dan berpotongan', gen: kenali },
        { code: 'sisi-bangun', name: 'Sisi sejajar dan tegak lurus pada bangun', gen: sisiBangun },
        { code: 'langkah-petak', name: 'Menggambar garis dengan langkah petak', gen: langkahPetak },
    ],
};
