/* sd3-01 Bilangan sampai 10.000: nilai tempat, membaca/menulis, membandingkan, pola loncat 100 dan 1.000. */
import { fmt, terbilang } from '../../format';
import type { Generator, Step, TopicDef } from '../../types';
import { NAMA, PLACE, PLACE_VAL, digitAt, fixed, num, pick, until } from './util';

const TEMPAT = ['Ribuan', 'Ratusan', 'Puluhan', 'Satuan'];
const cap = (s: string) => s[0].toUpperCase() + s.slice(1);
const digits = (n: number) => [3, 2, 1, 0].map((i) => digitAt(n, i)); // ribuan..satuan
const panjang = (n: number) => [3, 2, 1, 0].filter((i) => digitAt(n, i)).map((i) => fmt(digitAt(n, i) * PLACE_VAL[i])).join(' + ');

/** Nilai tempat: membaca blok, nilai angka, bentuk panjang. */
const nilaiTempat: Generator = (rng, level) => {
    if (level === 1) {
        const [r, h, t, o] = [rng.int(1, 5), rng.int(0, 5), rng.int(1, 5), rng.int(1, 9)];
        const n = r * 1000 + h * 100 + t * 10 + o;
        const steps: Step[] = [
            num({ id: 'ribuan', prompt: 'Hitung blok ribuan (kardus). Ada berapa ribuan?', answer: r, error: 'salah-nilai-tempat',
                hint: 'Blok ribuan adalah kubus besar. Satu kubus besar = 1.000.', explain: `Ada ${r} ribuan, nilainya ${fmt(r * 1000)}.` }),
            num({ id: 'ratusan', prompt: 'Hitung blok ratusan (kotak). Ada berapa ratusan?', answer: h, error: h ? 'salah-nilai-tempat' : 'lupa-nol-tempat',
                hint: h ? 'Blok ratusan adalah papan persegi. Satu papan = 100.' : 'Lihat baik-baik. Kalau tidak ada papan ratusan, tulis 0.', explain: h ? `Ada ${h} ratusan, nilainya ${h * 100}.` : 'Tidak ada ratusan, jadi angka ratusannya 0.' }),
            num({ id: 'bilangan', prompt: 'Tulis bilangannya.', answer: n, error: h ? 'salah-nilai-tempat' : 'lupa-nol-tempat',
                hint: `Tulis dari kiri: ribuan ${r}, ratusan ${h}, puluhan ${t}, satuan ${o}.`, explain: `${panjang(n)} = ${fmt(n)}.` }),
        ];
        return { text: 'Bilangan berapa yang ditunjukkan blok di bawah ini?', visual: { type: 'base10', thousands: r, hundreds: h, tens: t, ones: o }, steps,
            conclusion: `Jadi bilangannya ${fmt(n)}.` };
    }
    if (level === 2) {
        const n = until(() => rng.int(1000, 9999), (x) => new Set(digits(x)).size === 4 && !digits(x).includes(0));
        const i = rng.int(0, 3);
        const d = digitAt(n, i), v = d * PLACE_VAL[i];
        const steps: Step[] = [
            fixed({ id: 'tempat', prompt: `Angka ${d} ada di tempat apa?`, options: TEMPAT, answer: cap(PLACE[i]), error: 'salah-nilai-tempat',
                hint: 'Dari kanan: satuan, puluhan, ratusan, ribuan.', explain: `Pada ${fmt(n)}, angka ${d} ada di tempat ${PLACE[i]}.` }),
            num({ id: 'nilai', prompt: `Berapa nilai angka ${d}?`, answer: v, error: 'salah-nilai-tempat',
                hint: `1 ${PLACE[i]} bernilai ${fmt(PLACE_VAL[i])}. Jadi ${d} ${PLACE[i]} bernilai ${d} × ${fmt(PLACE_VAL[i])}.`,
                explain: `${d} di tempat ${PLACE[i]} bernilai ${fmt(v)}. Bentuk panjang: ${panjang(n)}.` }),
        ];
        return { text: `Perhatikan bilangan ${fmt(n)}. Berapa nilai angka ${d}?`, steps, conclusion: `Jadi nilai angka ${d} pada ${fmt(n)} adalah ${fmt(v)}.` };
    }
    // tingkat 3: bentuk panjang acak dengan satu tempat kosong
    const zero = rng.pick([1, 2]);
    const n = until(() => rng.int(1000, 9999), (x) => [0, 1, 2, 3].every((i) => (i === zero ? digitAt(x, i) === 0 : digitAt(x, i) > 0)));
    const parts = rng.shuffle([0, 1, 2, 3].filter((i) => i !== zero).map((i) => fmt(digitAt(n, i) * PLACE_VAL[i])));
    const salah = Number(String(n).replace('0', ''));
    const steps: Step[] = [
        fixed({ id: 'kosong', prompt: 'Tempat mana yang tidak ada di penjumlahan itu?', options: TEMPAT, answer: cap(PLACE[zero]), error: 'lupa-nol-tempat',
            hint: 'Cek satu per satu: adakah ribuan? ratusan? puluhan? satuan?', explain: `Tidak ada ${PLACE[zero]}.` }),
        num({ id: 'angka-kosong', prompt: `Angka apa yang ditulis di tempat ${PLACE[zero]}?`, answer: 0, error: 'lupa-nol-tempat',
            hint: 'Tempat yang kosong tetap harus diisi angka supaya angka lain tidak bergeser.', explain: `Tempat ${PLACE[zero]} diisi 0.` }),
        num({ id: 'bilangan', prompt: 'Tulis bilangannya.', answer: n, error: 'lupa-nol-tempat',
            hint: `Bilangannya punya 4 angka. Jangan menulis ${fmt(salah)}.`, explain: `Ribuan ${digitAt(n, 3)}, ratusan ${digitAt(n, 2)}, puluhan ${digitAt(n, 1)}, satuan ${digitAt(n, 0)}: ${fmt(n)}.` }),
    ];
    return { text: `Tulis sebagai satu bilangan: ${parts.join(' + ')} = ?`, steps, conclusion: `Jadi ${parts.join(' + ')} = ${fmt(n)}.` };
};

/** Membaca dan menulis bilangan dengan kata-kata. */
const bacaTulis: Generator = (rng, level) => {
    if (level <= 2) {
        const n = level === 1
            ? until(() => rng.int(1000, 9999), (x) => !digits(x).includes(0))
            : until(() => rng.int(1000, 9999), (x) => { const z = digits(x).filter((d) => d === 0).length; return z === 1 && digitAt(x, 0) !== 0; });
        const zero = [2, 1].find((i) => digitAt(n, i) === 0);
        const ask = level === 1 ? 2 : zero!;
        const words = terbilang(n);
        const steps: Step[] = [
            num({ id: 'ribuan', prompt: 'Berapa angka di tempat ribuan?', answer: digitAt(n, 3), error: 'salah-nilai-tempat',
                hint: 'Cari kata "ribu". Angka sebelum kata itu adalah ribuan. "Seribu" berarti 1.', explain: `Ribuannya ${digitAt(n, 3)}.` }),
            num({ id: PLACE[ask], prompt: `Berapa angka di tempat ${PLACE[ask]}?`, answer: digitAt(n, ask), error: level === 2 ? 'lupa-nol-tempat' : 'salah-nilai-tempat',
                hint: level === 2 ? `Adakah kata "${ask === 2 ? 'ratus' : 'puluh'}" di soal? Kalau tidak ada, angkanya 0.` : 'Cari kata "ratus". "Seratus" berarti 1.',
                explain: digitAt(n, ask) ? `Angka ${PLACE[ask]}nya ${digitAt(n, ask)}.` : `Tidak ada kata "${ask === 2 ? 'ratus' : 'puluh'}", jadi angka ${PLACE[ask]}nya 0.` }),
            num({ id: 'bilangan', prompt: 'Tulis bilangannya dengan angka.', answer: n, error: level === 2 ? 'lupa-nol-tempat' : 'salah-nilai-tempat',
                hint: 'Isi ribuan, ratusan, puluhan, satuan. Bilangannya harus 4 angka.', explain: `Ribuan ${digitAt(n, 3)}, ratusan ${digitAt(n, 2)}, puluhan ${digitAt(n, 1)}, satuan ${digitAt(n, 0)}: ${fmt(n)}.` }),
        ];
        return { text: `Tulis dengan angka: **${words}**.`, steps, conclusion: `Jadi ${words} ditulis ${fmt(n)}.` };
    }
    // tingkat 3: pilih cara membaca yang benar
    const n = until(() => rng.int(1000, 9999), (x) => digitAt(x, 2) !== digitAt(x, 1) && (digitAt(x, 1) === 0 || digitAt(x, 2) === 0 || digitAt(x, 3) === 1) && digitAt(x, 0) !== 0);
    const words = terbilang(n);
    const swap = digitAt(n, 3) * 1000 + digitAt(n, 1) * 100 + digitAt(n, 2) * 10 + digitAt(n, 0);
    const wrong: [string, string][] = [];
    if (digitAt(n, 3) === 1) wrong.push([words.replace(/^seribu/, 'satu ribu'), 'salah-baca-bilangan']);
    const noZero = Number(String(n).replace(/0/g, ''));
    if (noZero !== n) wrong.push([terbilang(noZero), 'lupa-nol-tempat']);
    wrong.push([terbilang(swap), 'salah-nilai-tempat'], [terbilang(n + (rng.chance(0.5) ? 1000 : -100 + (digitAt(n, 2) ? 0 : 200))), 'salah-baca-bilangan'], [terbilang(n + 10 * (digitAt(n, 1) < 9 ? 1 : -1)), 'salah-baca-bilangan']);
    const steps: Step[] = [
        num({ id: 'ratusan', prompt: `Pada ${fmt(n)}, berapa nilai angka di tempat ratusan?`, answer: digitAt(n, 2) * 100, error: 'salah-nilai-tempat',
            hint: 'Angka kedua dari kiri adalah ratusan. Kalikan dengan 100.', explain: digitAt(n, 2) ? `Nilainya ${digitAt(n, 2) * 100}, dibaca "${terbilang(digitAt(n, 2) * 100)}".` : 'Nilainya 0, jadi kata "ratus" tidak dibaca.' }),
        pick(rng, { id: 'baca', prompt: `Pilih cara membaca ${fmt(n)} yang benar.`, answer: words, wrong, error: 'salah-baca-bilangan',
            hint: 'Baca dari kiri: ribuan, ratusan, puluhan, satuan. 1.000 dibaca "seribu", 100 dibaca "seratus". Angka 0 tidak dibaca.',
            explain: `${panjang(n)}, dibaca ${words}.` }),
    ];
    return { text: `Bagaimana membaca bilangan ${fmt(n)}?`, steps, conclusion: `Jadi ${fmt(n)} dibaca ${words}.` };
};

/** Membandingkan dua bilangan dan mengurutkan beberapa bilangan. */
const bandingkan: Generator = (rng, level) => {
    if (level <= 2) {
        let a = 0, b = 0, at = 3;
        if (level === 1) {
            at = rng.pick([3, 2]);
            a = rng.int(1000, 9999);
            do b = rng.int(1000, 9999); while ([3, 2, 1, 0].find((i) => digitAt(a, i) !== digitAt(b, i)) !== at);
        } else {
            // jebakan: tempat kiri berbeda, tetapi angka di kanan terlihat lebih besar
            at = rng.pick([3, 2, 1]);
            const big = until(() => rng.int(1000, 9999), (x) => digitAt(x, at) < 9 && x % 10 ** at > 0);
            a = big;
            b = (Math.floor(a / 10 ** (at + 1)) * 10 + digitAt(a, at) + 1) * 10 ** at + rng.int(0, (a % 10 ** at) - 1);
            if (rng.chance(0.5)) [a, b] = [b, a];
        }
        const sign = a > b ? '>' : '<';
        const trap = (a % 10 ** at > b % 10 ** at) !== a > b;
        const steps: Step[] = [
            fixed({ id: 'tempat', prompt: 'Bandingkan dari kiri. Di tempat mana angkanya pertama kali berbeda?', options: TEMPAT, answer: cap(PLACE[at]),
                error: 'banding-dari-kanan', hint: 'Mulai dari ribuan. Kalau sama, geser ke ratusan, lalu puluhan.',
                explain: `${at < 3 ? `Angka di depannya sama. ` : ''}Di tempat ${PLACE[at]}: ${digitAt(a, at)} dan ${digitAt(b, at)}.` }),
            fixed({ id: 'tanda', prompt: `Pilih tanda yang tepat: ${fmt(a)} ? ${fmt(b)}`, options: ['$>$', '$<$', '$=$'], answer: `$${sign}$`,
                error: 'salah-banding-bilangan', distractorErrors: { [`$${sign === '>' ? '<' : '>'}$`]: trap ? 'banding-dari-kanan' : 'salah-banding-bilangan' },
                hint: `Yang angka ${PLACE[at]}nya lebih besar, bilangannya lebih besar. Angka di sebelah kanannya tidak penting lagi.`,
                explain: `${digitAt(a, at)} ${sign} ${digitAt(b, at)} di tempat ${PLACE[at]}, jadi ${fmt(a)} ${sign} ${fmt(b)}.` }),
        ];
        return { text: `Bandingkan ${fmt(a)} dan ${fmt(b)}.`, steps, conclusion: `Jadi ${fmt(a)} ${sign === '>' ? 'lebih dari' : 'kurang dari'} ${fmt(b)}, ditulis $${fmt(a)} ${sign} ${fmt(b)}$.` };
    }
    // tingkat 3: urutkan 4 bilangan dengan angka yang mirip
    const T = rng.int(1, 9);
    const ds = until(() => [rng.int(0, 9), rng.int(0, 9), rng.int(0, 9)], (x) => new Set(x).size === 3);
    const perms = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]].map((p) => T * 1000 + ds[p[0]] * 100 + ds[p[1]] * 10 + ds[p[2]]);
    const ns = rng.shuffle(perms).slice(0, 4);
    const asc = rng.chance(0.5);
    const sorted = [...ns].sort((x, y) => (asc ? x - y : y - x));
    const show = (l: number[]) => l.map(fmt).join(', ');
    const fromRight = [...ns].sort((x, y) => { const rx = Number(String(x).split('').reverse().join('')), ry = Number(String(y).split('').reverse().join('')); return asc ? rx - ry : ry - rx; });
    const steps: Step[] = [
        pick(rng, { id: 'ujung', prompt: `Mana yang paling ${asc ? 'kecil' : 'besar'}?`, answer: fmt(sorted[0]), wrong: ns.filter((x) => x !== sorted[0]).map((x) => [fmt(x), 'banding-dari-kanan'] as [string, string]),
            error: 'salah-banding-bilangan', hint: `Ribuannya sama. Bandingkan ratusan dulu, cari yang paling ${asc ? 'kecil' : 'besar'}.`,
            explain: `${fmt(sorted[0])} punya ratusan ${digitAt(sorted[0], 2)}${ns.filter((x) => digitAt(x, 2) === digitAt(sorted[0], 2)).length > 1 ? `, dan puluhannya ${digitAt(sorted[0], 1)}` : ''}.` }),
        pick(rng, { id: 'urutan', prompt: `Urutkan dari yang ${asc ? 'terkecil' : 'terbesar'}.`, answer: show(sorted),
            wrong: [[show([...sorted].reverse()), 'salah-urutan-bilangan'], [show(fromRight), 'banding-dari-kanan'], [show([sorted[0], sorted[2], sorted[1], sorted[3]]), 'salah-banding-bilangan'], [show([sorted[1], sorted[0], sorted[2], sorted[3]]), 'salah-banding-bilangan']],
            error: 'salah-urutan-bilangan', hint: 'Bandingkan ratusan. Kalau ratusannya sama, bandingkan puluhan.', explain: `Urutan dari yang ${asc ? 'terkecil' : 'terbesar'}: ${show(sorted)}.` }),
    ];
    return { text: `Urutkan dari yang ${asc ? 'terkecil' : 'terbesar'}: ${show(ns)}.`, steps, conclusion: `Jadi urutannya ${show(sorted)}.` };
};

/** Pola bilangan dan membilang loncat 100 dan 1.000. */
const pola: Generator = (rng, level) => {
    if (level === 1) {
        const step = rng.pick([100, 1000]);
        const i = step === 100 ? 2 : 3;
        const s = until(() => rng.int(1000, 9999), (x) => digitAt(x, i) <= 5 && (i === 3 ? digitAt(x, 3) >= 1 : true));
        const seq = [0, 1, 2].map((k) => s + k * step);
        const next = s + 3 * step;
        const steps: Step[] = [
            fixed({ id: 'loncat', prompt: 'Polanya loncat berapa?', options: ['naik 10', 'naik 100', 'naik 1.000'], answer: `naik ${fmt(step)}`, error: 'salah-pola-bilangan',
                hint: `Bandingkan ${fmt(seq[0])} dan ${fmt(seq[1])}. Angka di tempat mana yang berubah?`, explain: `Angka ${PLACE[i]} naik 1 setiap kali, jadi loncat ${fmt(step)}.` }),
            num({ id: 'berikut', prompt: 'Bilangan berikutnya?', answer: next, error: 'salah-pola-bilangan',
                hint: `Tambah ${fmt(step)} pada ${fmt(seq[2])}: angka ${PLACE[i]} naik 1.`, explain: `${fmt(seq[2])} + ${fmt(step)} = ${fmt(next)}.` }),
        ];
        return { text: `Lanjutkan polanya: ${seq.map(fmt).join(', ')}, ?`, steps, conclusion: `Jadi bilangan berikutnya ${fmt(next)}.` };
    }
    if (level === 2) {
        const up = rng.chance(0.6);
        const step = up ? 100 : rng.pick([100, 1000]);
        const d = up ? step : -step;
        // melewati ribuan (loncat 100) atau mundur
        const s = step === 100
            ? until(() => rng.int(1000, 8999), (x) => (up ? digitAt(x, 2) >= 7 : digitAt(x, 2) <= 2) && x - 500 > 1000)
            : until(() => rng.int(5000, 9999), () => true);
        const seq = [0, 1, 2, 3, 4].map((k) => s + k * d);
        const hide = rng.int(2, 4);
        const crosses = Math.floor(seq[hide] / 1000) !== Math.floor(seq[hide - 1] / 1000) && step === 100;
        const shown = seq.map((x, k) => (k === hide ? '?' : fmt(x)));
        const steps: Step[] = [
            fixed({ id: 'loncat', prompt: 'Polanya bagaimana?', options: ['naik 100', 'turun 100', 'naik 1.000', 'turun 1.000'], answer: `${up ? 'naik' : 'turun'} ${fmt(step)}`, error: 'salah-pola-bilangan',
                hint: `Bandingkan ${fmt(seq[0])} dan ${fmt(seq[1])}. Bilangannya makin besar atau makin kecil?`, explain: `Setiap kali ${up ? 'bertambah' : 'berkurang'} ${fmt(step)}.` }),
            num({ id: 'hilang', prompt: 'Bilangan berapa yang hilang?', answer: seq[hide], error: crosses ? 'salah-pola-lewat-ribuan' : 'salah-pola-bilangan',
                hint: crosses ? `${fmt(seq[hide - 1])} ${up ? '+' : '−'} 100. Ingat, 10 ratusan menjadi 1 ribuan.` : `${fmt(seq[hide - 1])} ${up ? '+' : '−'} ${fmt(step)}.`,
                explain: `${fmt(seq[hide - 1])} ${up ? '+' : '−'} ${fmt(step)} = ${fmt(seq[hide])}.${crosses ? ' Angka ribuannya ikut berubah.' : ''}` }),
        ];
        return { text: `Lengkapi polanya: ${shown.join(', ')}.`, steps, conclusion: `Jadi bilangan yang hilang adalah ${fmt(seq[hide])}.` };
    }
    // tingkat 3: cerita gudang permen
    const nama = rng.pick(NAMA);
    const k = rng.int(1, 6), r = rng.int(0, 9), p = rng.int(1, 9);
    const big = rng.chance(0.4);
    const unit = big ? 1000 : 100;
    const n0 = k * 1000 + r * 100 + p;
    const days = rng.int(2, big ? Math.min(3, 9 - k) : 5);
    const add = rng.chance(0.65) || n0 - days * unit < 100;
    const n1 = add ? n0 + days * unit : n0 - days * unit;
    const kata = big ? 'kardus (1.000 permen)' : 'kotak (100 permen)';
    const steps: Step[] = [
        num({ id: 'awal', prompt: 'Berapa permen di gudang mula-mula?', answer: n0, error: 'lupa-nol-tempat',
            hint: `Ribuan ${k}, ratusan ${r}, puluhan 0 (tidak ada bungkus), satuan ${p}.`, explain: `${k} kardus, ${r} kotak, 0 bungkus, ${p} permen lepas = ${fmt(n0)}.` }),
        num({ id: 'loncat', prompt: `Dalam ${days} hari, berapa permen yang ${add ? 'datang' : 'dikirim keluar'}?`, answer: days * unit, error: 'salah-pola-bilangan',
            hint: `${days} kali loncat ${fmt(unit)}.`, explain: `${days} × ${fmt(unit)} = ${fmt(days * unit)}.` }),
        num({ id: 'akhir', prompt: `Berapa permen setelah ${days} hari?`, answer: n1, error: Math.floor(n1 / 1000) !== Math.floor(n0 / 1000) && !big ? 'salah-pola-lewat-ribuan' : 'salah-pola-bilangan',
            hint: `Loncat ${add ? 'maju' : 'mundur'} ${fmt(unit)} sebanyak ${days} kali dari ${fmt(n0)}. Hanya angka ${big ? 'ribuan' : 'ratusan'} yang berubah, kecuali melewati ribuan.`,
            explain: `${[...Array(days + 1)].map((_, j) => fmt(n0 + (add ? 1 : -1) * j * unit)).join(', ')}.` }),
    ];
    return {
        text: `Gudang ${nama} berisi ${k} kardus, ${r} kotak, dan ${p} permen lepas. Tidak ada bungkus. (1 kardus = 1.000, 1 kotak = 100, 1 bungkus = 10.) Setiap hari ${add ? 'datang' : 'dikirim keluar'} 1 ${kata}. Berapa permen setelah ${days} hari?`,
        steps, conclusion: `Jadi setelah ${days} hari ada ${fmt(n1)} permen.`,
    };
};

export const topic: TopicDef = {
    topic: 'sd3-01-bilangan-sampai-10000',
    skills: [
        { code: 'nilai-tempat', name: 'Nilai tempat dan bentuk panjang', gen: nilaiTempat },
        { code: 'baca-tulis', name: 'Membaca dan menulis bilangan', gen: bacaTulis },
        { code: 'bandingkan-urutkan', name: 'Membandingkan dan mengurutkan bilangan', gen: bandingkan },
        { code: 'pola-loncat', name: 'Pola bilangan: loncat 100 dan 1.000', gen: pola },
    ],
};
