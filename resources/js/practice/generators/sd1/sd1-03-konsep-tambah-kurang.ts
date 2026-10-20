/* sd1-03 Konsep Penjumlahan dan Pengurangan: menggabungkan/mengambil, +, −, =, keluarga bilangan, tiga bilangan. */
import type { Generator, ObjectName, Step, TopicDef } from '../../types';
import { NAMA, pilihan, pilihanTetap } from './common';

const BENDA: { item: ObjectName; nama: string }[] = [
    { item: 'kelereng', nama: 'kelereng' }, { item: 'permen', nama: 'permen' }, { item: 'kue', nama: 'kue' },
    { item: 'apel', nama: 'apel' }, { item: 'jeruk', nama: 'jeruk' }, { item: 'bunga', nama: 'bunga' }, { item: 'ikan', nama: 'ikan' },
];

const OP_TAMBAH = 'Penjumlahan (menggabungkan)';
const OP_KURANG = 'Pengurangan (mengambil)';

/** Soal cerita menggabungkan atau mengambil. */
const gabungAmbil: Generator = (rng, level) => {
    if (level === 3) return mulaMula(rng, level);
    const tambah = rng.chance(0.5);
    const nama = rng.pick(NAMA);
    const b = rng.pick(BENDA);
    let x: number, y: number;
    if (level === 1) {
        if (tambah) { x = rng.int(2, 7); y = rng.int(1, 9 - x + 1); if (x + y > 10) y = 10 - x; }
        else { x = rng.int(4, 10); y = rng.int(1, x - 1); }
    } else {
        if (tambah) { x = rng.int(5, 12); y = rng.int(Math.max(2, 11 - x), Math.min(9, 20 - x)); }
        else { x = rng.int(11, 20); y = rng.int(2, 9); }
    }
    const hasil = tambah ? x + y : x - y;
    const ceritaTambah = [
        `${nama} punya ${x} ${b.nama}. Ibu memberi ${y} ${b.nama} lagi. Berapa ${b.nama} ${nama} sekarang?`,
        `Di toples ada ${x} ${b.nama}. ${nama} memasukkan ${y} ${b.nama} lagi. Berapa ${b.nama} di toples sekarang?`,
        `${nama} memetik ${x} ${b.nama}. Kakak memetik ${y} ${b.nama}. Semua dikumpulkan di satu keranjang. Berapa semuanya?`,
    ];
    const ceritaKurang = [
        `Di toples ada ${x} ${b.nama}. ${nama} mengambil ${y} ${b.nama}. Berapa ${b.nama} yang tersisa?`,
        `${nama} punya ${x} ${b.nama}. Sebanyak ${y} ${b.nama} diberikan kepada adik. Berapa ${b.nama} ${nama} sekarang?`,
        `Ada ${x} ${b.nama} di meja. ${y} ${b.nama} dimakan. Berapa ${b.nama} yang masih ada?`,
    ];
    const text = tambah ? rng.pick(ceritaTambah) : rng.pick(ceritaKurang);
    const kalimat = tambah ? `${x} + ${y}` : `${x} − ${y}`;
    const steps: Step[] = [
        { kind: 'choice', id: 'operasi', prompt: 'Pahami soal. Ini penjumlahan atau pengurangan?', ...pilihanTetap(tambah ? OP_TAMBAH : OP_KURANG, [OP_TAMBAH, OP_KURANG]),
          hint: tambah ? 'Benda dimasukkan atau digabung. Isinya bertambah.' : 'Benda diambil atau keluar. Isinya berkurang.',
          explain: tambah ? 'Dua kelompok digabung, jadi penjumlahan.' : 'Ada yang diambil, jadi pengurangan.', error: 'salah-pilih-tambah-kurang' },
        { kind: 'choice', id: 'kalimat', prompt: 'Tulis kalimat matematikanya.',
          ...pilihan(rng, kalimat, tambah
              ? [[`${x} − ${y}`, 'salah-pilih-tambah-kurang'], [`${x + y} − ${y}`, 'salah-pilih-tambah-kurang']]
              : [[`${y} − ${x}`, 'kurang-urutan-terbalik'], [`${x} + ${y}`, 'salah-pilih-tambah-kurang']]),
          hint: tambah ? 'Pakai lambang + untuk menggabungkan.' : 'Bilangan seluruh ditulis di depan, lalu −.', explain: `Kalimatnya ${kalimat} = …`, error: tambah ? 'salah-pilih-tambah-kurang' : 'kurang-urutan-terbalik' },
        { kind: 'number', id: 'hasil', prompt: `Hitung: ${kalimat} = ?`, answer: String(hasil), suffix: b.nama,
          hint: tambah ? `Mulai dari ${x}, bilang maju ${y} kali. Jangan ikut menghitung ${x}.` : `Mulai dari ${x}, bilang mundur ${y} kali.`,
          explain: tambah ? `${kalimat} = ${hasil}. Cek: ${hasil} − ${y} = ${x}.` : `${kalimat} = ${hasil}. Cek: ${hasil} + ${y} = ${x}.`, error: tambah ? 'salah-fakta-tambah' : 'salah-fakta-kurang' },
    ];
    const visual = level === 1 ? (tambah ? { type: 'objects' as const, item: b.item, count: x + y, group: x } : { type: 'objects' as const, item: b.item, count: x, crossed: y }) : undefined;
    return { text, visual, steps, conclusion: `Jadi ${kalimat} = ${hasil}. Jawabannya ${hasil} ${b.nama}.` };
};

/** Tantangan: bagian yang tidak diketahui ada di awal atau di tengah cerita; dicari dengan pengurangan. */
const mulaMula: Generator = (rng) => {
    const nama = rng.pick(NAMA);
    const b = rng.pick(BENDA);
    const z = rng.int(11, 19), y = rng.int(3, 9), x = z - y;
    const awal = rng.chance(0.5);
    const text = awal
        ? `${nama} punya beberapa ${b.nama}. Ibu memberi ${y} ${b.nama} lagi. Sekarang ${nama} punya ${z} ${b.nama}. Berapa ${b.nama} ${nama} mula-mula?`
        : `${nama} punya ${z} ${b.nama}. Ia memberikan beberapa ${b.nama} kepada teman. Sekarang tersisa ${x} ${b.nama}. Berapa ${b.nama} yang diberikan?`;
    const bagian = awal ? y : x, cari = awal ? x : y;
    const steps: Step[] = [
        { kind: 'number', id: 'seluruh', prompt: 'Pahami soal. Berapa bilangan seluruhnya (yang terbesar)?', answer: String(z),
          hint: awal ? 'Seluruh adalah banyak benda sesudah diberi.' : 'Seluruh adalah banyak benda sebelum diberikan.', explain: `Seluruhnya ${z}.`, error: 'salah-keluarga-bilangan' },
        { kind: 'choice', id: 'kalimat', prompt: 'Bagian yang dicari dihitung dengan …',
          ...pilihan(rng, `${z} − ${bagian}`, [[`${z} + ${bagian}`, 'salah-pilih-tambah-kurang'], [`${bagian} − ${z}`, 'kurang-urutan-terbalik'], [`${bagian} + ${z}`, 'salah-pilih-tambah-kurang']]),
          hint: 'Seluruh − bagian yang diketahui = bagian yang dicari.', explain: `Seluruh ${z}, bagian yang diketahui ${bagian}. Jadi ${z} − ${bagian}.`, error: 'salah-pilih-tambah-kurang' },
        { kind: 'number', id: 'hasil', prompt: `Hitung: ${z} − ${bagian} = ?`, answer: String(cari), suffix: b.nama,
          hint: `Bilang maju dari ${bagian} sampai ${z}. Berapa langkah?`, explain: `${z} − ${bagian} = ${cari}. Cek: ${awal ? `${x} + ${y} = ${z}` : `${z} − ${y} = ${x}`}.`, error: 'salah-fakta-kurang' },
    ];
    return { text, steps, conclusion: awal ? `Jadi mula-mula ${nama} punya ${x} ${b.nama}.` : `Jadi ${nama} memberikan ${y} ${b.nama}.` };
};

/** Keluarga bilangan: bagian + bagian = seluruh. */
const keluarga: Generator = (rng, level) => {
    let a: number, b: number;
    do { a = rng.int(2, 9); b = rng.int(2, 9); } while (a === b || (level > 1 && a + b < 10));
    const c = a + b;
    if (level === 1) {
        const tiga = rng.shuffle([a, b, c]);
        const steps: Step[] = [
            { kind: 'number', id: 'seluruh', prompt: 'Cari bilangan seluruh (isi toples). Bilangan mana yang terbesar?', answer: String(c),
              hint: 'Bilangan seluruh adalah yang paling besar.', explain: `${c} adalah seluruh. ${a} dan ${b} adalah bagian.`, error: 'salah-keluarga-bilangan' },
            { kind: 'number', id: 'tambah', prompt: `Bagian + bagian = seluruh. ${a} + ${b} = ?`, answer: String(c),
              hint: `Mulai dari ${a}, bilang maju ${b} kali.`, explain: `${a} + ${b} = ${c}, dan ${b} + ${a} = ${c} juga.`, error: 'salah-fakta-tambah' },
            { kind: 'number', id: 'kurang', prompt: `Seluruh − bagian = bagian lain. ${c} − ${a} = ?`, answer: String(b),
              hint: `Ambil bagian ${a} dari seluruh ${c}. Sisanya bagian yang lain.`, explain: `${c} − ${a} = ${b}, dan ${c} − ${b} = ${a}.`, error: 'salah-keluarga-bilangan' },
        ];
        return { text: `Lengkapi keluarga bilangan dari ${tiga.join(', ')}.`, steps,
            conclusion: `Keluarga bilangannya: ${a} + ${b} = ${c}, ${b} + ${a} = ${c}, ${c} − ${a} = ${b}, ${c} − ${b} = ${a}.` };
    }
    if (level === 2) {
        const kiri = rng.chance(0.5);
        const soal = kiri ? `${a} + … = ${c}` : `… + ${a} = ${c}`;
        const steps: Step[] = [
            { kind: 'number', id: 'seluruh', prompt: `Pada ${soal}, berapa bilangan seluruhnya?`, answer: String(c),
              hint: 'Bilangan seluruh ada sesudah tanda =.', explain: `Seluruhnya ${c}. Satu bagian ${a}.`, error: 'salah-keluarga-bilangan' },
            { kind: 'choice', id: 'kalimat', prompt: 'Bagian yang hilang dicari dengan …',
              ...pilihan(rng, `${c} − ${a}`, [[`${a} − ${c}`, 'kurang-urutan-terbalik'], [`${c} + ${a}`, 'salah-keluarga-bilangan'], [`${a} + ${c}`, 'salah-keluarga-bilangan']]),
              hint: 'Seluruh − bagian = bagian lain.', explain: `Bagian yang hilang = ${c} − ${a}.`, error: 'salah-keluarga-bilangan' },
            { kind: 'number', id: 'hilang', prompt: `${c} − ${a} = ?`, answer: String(b),
              hint: `Bilang maju dari ${a} sampai ${c}. Berapa kali?`, explain: `${c} − ${a} = ${b}. Cek: ${kiri ? `${a} + ${b}` : `${b} + ${a}`} = ${c}.`, error: 'salah-fakta-kurang' },
        ];
        return { text: `Isi titik-titik: ${soal}`, steps, conclusion: `Jadi ${kiri ? `${a} + ${b}` : `${b} + ${a}`} = ${c}. Bilangan yang hilang ${b}.` };
    }
    // tingkat 3: kalimat mana yang bukan anggota keluarga
    const benar = [`${a} + ${b} = ${c}`, `${b} + ${a} = ${c}`, `${c} − ${a} = ${b}`, `${c} − ${b} = ${a}`];
    const salah = rng.pick([`${a} − ${c} = ${b}`, `${b} − ${a} = ${c}`, `${c} + ${a} = ${b}`]);
    const opsi = rng.shuffle([...rng.shuffle(benar).slice(0, 3), salah]);
    const steps: Step[] = [
        { kind: 'number', id: 'seluruh', prompt: `Keluarga ${a}, ${b}, dan ${c}. Mana bilangan seluruhnya?`, answer: String(c),
          hint: 'Bilangan seluruh adalah yang terbesar.', explain: `${c} adalah seluruh.`, error: 'salah-keluarga-bilangan' },
        { kind: 'choice', id: 'aturan', prompt: 'Pada pengurangan, bilangan apa yang selalu ditulis paling depan?', ...pilihanTetap('bilangan seluruh', ['bilangan seluruh', 'bilangan bagian']),
          hint: 'Kita mengambil dari isi seluruh toples.', explain: `Pengurangan selalu dimulai dari seluruh: ${c} − …`, error: 'kurang-urutan-terbalik' },
        { kind: 'choice', id: 'bukan', prompt: 'Mana yang BUKAN anggota keluarga bilangan ini?', options: opsi, answer: salah,
          hint: 'Cek setiap kalimat: bagian + bagian = seluruh, seluruh − bagian = bagian lain.', explain: `${salah} salah. Kalimat lainnya benar.`, error: 'salah-keluarga-bilangan' },
    ];
    return { text: `${a}, ${b}, dan ${c} adalah satu keluarga bilangan. Kalimat mana yang bukan anggotanya?`, steps,
        conclusion: `Jadi ${salah} bukan anggota keluarga ${a}, ${b}, ${c}.` };
};

/** Menjumlahkan tiga bilangan satu angka dengan mencari pasangan 10. */
const tigaBilangan: Generator = (rng, level) => {
    const a = rng.pick([1, 2, 3, 4, 6, 7, 8, 9]), b = 10 - a;
    let c: number;
    do c = rng.int(2, 9); while (c === a || c === b);
    const urut = level === 1 ? rng.pick([[a, b, c], [c, a, b]]) : rng.chance(0.5) ? [a, c, b] : [b, c, a];
    const total = 10 + c;
    const pairs = [[urut[0], urut[1]], [urut[1], urut[2]], [urut[0], urut[2]]].map(([x, y]) => `${x} dan ${y}`);
    const benar = pairs.find((p) => p === `${a} dan ${b}` || p === `${b} dan ${a}`)!;
    const nama = [...NAMA];
    const [n1, n2, n3] = rng.shuffle(nama).slice(0, 3);
    const buah = rng.pick(['mangga', 'jeruk', 'jambu', 'salak']);
    const text = level === 3
        ? `${n1} memetik ${urut[0]} ${buah}. ${n2} memetik ${urut[1]} ${buah}. ${n3} memetik ${urut[2]} ${buah}. Semua dimasukkan ke satu keranjang. Berapa ${buah} di keranjang?`
        : `Hitung: ${urut.join(' + ')} = …`;
    const steps: Step[] = [
        { kind: 'choice', id: 'pasangan', prompt: 'Cari pasangan 10. Dua bilangan mana yang jumlahnya 10?', options: pairs, answer: benar,
          distractorErrors: Object.fromEntries(pairs.filter((p) => p !== benar).map((p) => [p, 'salah-pasangan-sepuluh'])),
          hint: 'Ingat pasangan 10: 1 dan 9, 2 dan 8, 3 dan 7, 4 dan 6, 5 dan 5.', explain: `${a} + ${b} = 10.`, error: 'salah-pasangan-sepuluh' },
        { kind: 'number', id: 'sepuluh', prompt: `Jumlahkan pasangan dulu: ${benar.replace(' dan ', ' + ')} = ?`, answer: '10',
          hint: 'Ini pasangan 10.', explain: `${benar.replace(' dan ', ' + ')} = 10.`, error: 'salah-fakta-tambah' },
        { kind: 'number', id: 'sisa', prompt: 'Bilangan mana yang belum dipakai?', answer: String(c),
          hint: 'Coret dua bilangan yang sudah dijumlahkan.', explain: `${c} belum dipakai.`, error: 'lupa-bilangan-ketiga' },
        { kind: 'number', id: 'total', prompt: `Tambah bilangan sisanya: 10 + ${c} = ?`, answer: String(total), ...(level === 3 ? { suffix: buah } : {}),
          hint: `10 ditambah ${c} menjadi belasan.`, explain: `10 + ${c} = ${total}. Cek urut dari kiri: ${urut[0]} + ${urut[1]} = ${urut[0] + urut[1]}, lalu + ${urut[2]} = ${total}.`, error: 'salah-fakta-tambah' },
    ];
    return { text, steps, conclusion: level === 3 ? `Jadi ada ${total} ${buah} di keranjang.` : `Jadi ${urut.join(' + ')} = ${total}.` };
};

export const topic: TopicDef = {
    topic: 'sd1-03-konsep-tambah-kurang',
    skills: [
        { code: 'gabung-ambil', name: 'Menggabungkan dan mengambil', gen: gabungAmbil },
        { code: 'keluarga-bilangan', name: 'Keluarga bilangan', gen: keluarga },
        { code: 'tiga-bilangan', name: 'Menjumlahkan tiga bilangan', gen: tigaBilangan },
    ],
};
