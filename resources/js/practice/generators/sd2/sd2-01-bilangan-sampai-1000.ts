/* sd2-01 Bilangan sampai 1.000: nilai tempat, membaca-menulis, membandingkan, pola, ganjil-genap. */
import { fmt, terbilang } from '../../format';
import type { Generator, Step, TopicDef } from '../../types';
import { berbeda, isi, lambang, NAMA, pilih, URUT_LAMBANG } from './_bantu';

const nilaiAngka = (h: number, t: number, o: number) => h * 100 + t * 10 + o;

/** Menulis bilangan dari kotak-bungkus-butir atau dari kata, dan membacanya. */
const tulisBaca: Generator = (rng, level) => {
    const nama = rng.pick(NAMA);
    if (level === 1) {
        const h = rng.int(1, 9), t = rng.int(1, 9), o = rng.int(1, 9);
        const n = nilaiAngka(h, t, o);
        const salahBaca = [terbilang(nilaiAngka(h, o, t)), terbilang(h * 10 + t), terbilang(nilaiAngka(t, h, o)), terbilang(nilaiAngka(o, t, h))];
        const steps: Step[] = [
            isi('ratusan', `Hitung kotak (ratusan). ${h} ratusan bernilai berapa?`, h * 100, { hint: `1 ratusan = 100. Hitung loncat 100 sebanyak ${h} kali.`, explain: `${h} kotak = ${h} ratusan = ${h * 100}.`, error: 'salah-nilai-tempat' }),
            isi('puluhan', `Hitung bungkus (puluhan). ${t} puluhan bernilai berapa?`, t * 10, { hint: `1 puluhan = 10. Hitung loncat 10 sebanyak ${t} kali.`, explain: `${t} bungkus = ${t} puluhan = ${t * 10}.`, error: 'salah-nilai-tempat' }),
            isi('tulis', `Tulis bilangannya: ${h * 100} + ${t * 10} + ${o} = ?`, n, { hint: 'Tulis dari kiri: angka ratusan, angka puluhan, lalu angka satuan.', explain: `Ratusan ${h}, puluhan ${t}, satuan ${o}. Jadi ${n}.`, error: 'salah-nilai-tempat' }),
            pilih(rng, 'baca', `Bagaimana ${n} dibaca?`, terbilang(n), salahBaca.map((s) => [s, 'salah-baca-bilangan'] as [string, string]).slice(0, 3), { hint: 'Baca dari ratusan, lalu puluhan, lalu satuan.', explain: `${n} dibaca ${terbilang(n)}.`, error: 'salah-baca-bilangan' }),
        ];
        return { text: `${nama} punya ${h} kotak, ${t} bungkus, dan ${o} butir permen. Satu kotak berisi 100 permen, satu bungkus berisi 10 permen. Tulis banyak permennya dengan angka, lalu baca.`,
            visual: { type: 'base10', hundreds: h, tens: t, ones: o }, steps, conclusion: `Jadi ${nama} punya ${n} permen, dibaca ${terbilang(n)}.` };
    }
    if (level === 2) {
        // bilangan dengan nol atau belasan: 407, 610, 112, 900
        let h = 0, t = 0, o = 0;
        do { h = rng.int(1, 9); t = rng.pick([0, 0, 1, rng.int(2, 9)]); o = rng.pick([0, rng.int(1, 9), rng.int(1, 9)]); } while (t !== 0 && o !== 0 && t !== 1);
        const n = nilaiAngka(h, t, o);
        const adaNol = t === 0 || o === 0;
        const steps: Step[] = [
            isi('ratusan', 'Berapa angka ratusannya?', h, { hint: `Lihat kata "ratus". ${h === 1 ? '"Seratus" artinya 1 ratusan.' : 'Angka di depan kata "ratus" adalah ratusannya.'}`, explain: `Ada ${h} ratusan.`, error: 'salah-nilai-tempat' }),
            isi('puluhan', 'Berapa angka puluhannya? Kalau tidak ada puluhan, tulis 0.', t, { hint: t === 1 ? '"Sepuluh", "sebelas", dan "belas" berarti ada 1 puluhan.' : 'Cari kata "puluh". Kalau tidak ada, puluhannya 0.', explain: t === 0 ? 'Tidak ada puluhan, jadi tempat puluhan diisi 0.' : `Ada ${t} puluhan.`, error: t === 0 ? 'lupa-nol-tempat' : 'salah-nilai-tempat' }),
            isi('satuan', 'Berapa angka satuannya? Kalau tidak ada satuan, tulis 0.', o, { hint: 'Lihat kata paling akhir.', explain: o === 0 ? 'Tidak ada satuan, jadi tempat satuan diisi 0.' : `Ada ${o} satuan.`, error: o === 0 ? 'lupa-nol-tempat' : 'salah-nilai-tempat' }),
            isi('tulis', 'Tulis bilangannya dengan angka.', n, { hint: `Bilangan ratusan selalu punya 3 angka: ${h}, ${t}, ${o}.`, explain: `${h} ratusan, ${t} puluhan, ${o} satuan = ${n}.${adaNol ? ' Angka 0 tidak boleh dibuang.' : ''}`, error: adaNol ? 'lupa-nol-tempat' : 'salah-nilai-tempat' }),
        ];
        return { text: `Tulis dengan angka: **${terbilang(n)}**.`, steps, conclusion: `Jadi ${terbilang(n)} ditulis ${n}.` };
    }
    // tingkat 3: puluhan lebih dari 9, harus ditukar menjadi ratusan
    const h = rng.int(1, 7), t = rng.int(10, 19), o = rng.int(0, 9);
    const n = nilaiAngka(h, t, o);
    const steps: Step[] = [
        isi('ratusan', `${h} kotak (ratusan) bernilai berapa?`, h * 100, { hint: '1 kotak = 100.', explain: `${h} kotak = ${h * 100}.`, error: 'salah-nilai-tempat' }),
        isi('puluhan', `${t} bungkus (puluhan) bernilai berapa?`, t * 10, { hint: `10 bungkus = 100. Sisanya ${t - 10} bungkus = ${(t - 10) * 10}.`, explain: `${t} bungkus = ${t * 10}. Sepuluh bungkus sama dengan 1 kotak baru.`, error: 'lupa-tukar-sepuluh-puluhan' }),
        isi('tulis', `Jumlahkan: ${h * 100} + ${t * 10} + ${o} = ?`, n, { hint: `${h * 100} + 100 = ${h * 100 + 100}, lalu tambah ${(t - 10) * 10} dan ${o}.`, explain: `Ratusan menjadi ${h + 1}, puluhan ${t - 10}, satuan ${o}. Jadi ${n}.`, error: 'lupa-tukar-sepuluh-puluhan' }),
    ];
    return { text: `${nama} punya ${h} kotak, ${t} bungkus, dan ${o} butir permen. Satu kotak berisi 100, satu bungkus berisi 10. Berapa permen ${nama} semuanya?`,
        visual: { type: 'base10', hundreds: h, tens: t, ones: o }, steps, conclusion: `Jadi ${nama} punya ${n} permen (${terbilang(n)}).` };
};

/** Membandingkan: ratusan dulu, lalu puluhan, lalu satuan. Tingkat 3 mengurutkan tiga bilangan. */
const bandingkan: Generator = (rng, level) => {
    const SAMA = 'Sama';
    const lebihBesar = (x: number, y: number) => (x > y ? String(x) : x < y ? String(y) : SAMA);
    if (level <= 2) {
        let a = 0, b = 0;
        if (level === 1) {
            do { a = rng.int(100, 999); b = rng.int(100, 999); } while (Math.floor(a / 100) === Math.floor(b / 100));
        } else {
            const h = rng.int(1, 9);
            if (rng.chance(0.6)) {
                // angka puluhan dan satuan bertukar: 482 dan 428
                let x = 0, y = 0;
                do { x = rng.int(1, 9); y = rng.int(0, 9); } while (x === y);
                a = nilaiAngka(h, x, y); b = nilaiAngka(h, y, x);
            } else {
                const t = rng.int(0, 9);
                const [x, y] = berbeda(rng, 2, 0, 9);
                a = nilaiAngka(h, t, x); b = nilaiAngka(h, t, y);
            }
        }
        const da = [Math.floor(a / 100), Math.floor(a / 10) % 10, a % 10], db = [Math.floor(b / 100), Math.floor(b / 10) % 10, b % 10];
        const tempat = ['ratusan', 'puluhan', 'satuan'];
        const steps: Step[] = [];
        for (let i = 0; i < 3; i++) {
            const ans = lebihBesar(da[i], db[i]) === SAMA ? SAMA : da[i] > db[i] ? String(a) : String(b);
            steps.push(pilih(rng, `banding-${tempat[i]}`, `Bandingkan angka ${tempat[i]}: ${a} punya ${da[i]}, ${b} punya ${db[i]}. Mana yang lebih besar?`, ans, [String(a), String(b), SAMA].map((o) => [o, i === 0 ? 'banding-dari-kanan' : 'salah-nilai-tempat'] as [string, string]), {
                hint: `Bandingkan ${da[i]} dan ${db[i]}.`, explain: ans === SAMA ? `Angka ${tempat[i]}nya sama-sama ${da[i]}. Lanjut ke tempat berikutnya.` : `${Math.max(da[i], db[i])} lebih dari ${Math.min(da[i], db[i])}, jadi ${ans} lebih besar.`, error: 'banding-dari-kanan', urut: [String(a), String(b), SAMA] }));
            if (ans !== SAMA) break;
        }
        steps.push(pilih(rng, 'lambang', `Isi dengan lambang yang benar: ${a} ... ${b}`, lambang(a, b), [[lambang(b, a), 'salah-banding-bilangan']], {
            hint: 'Ujung lambang yang terbuka menghadap bilangan yang lebih besar.', explain: `${a} ${a > b ? '>' : '<'} ${b}, karena ${Math.max(a, b)} lebih besar.`, error: 'salah-banding-bilangan', urut: URUT_LAMBANG }));
        return { text: `Bandingkan ${a} dan ${b}. Isi dengan > atau <.`, steps, conclusion: `Jadi ${a} ${a > b ? '>' : '<'} ${b}.` };
    }
    // tingkat 3: urutkan tiga bilangan yang angkanya sama tetapi tempatnya berbeda
    const dg = berbeda(rng, 3, 1, 9);
    const perms = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]].map(([i, j, k]) => nilaiAngka(dg[i], dg[j], dg[k]));
    const nums = rng.shuffle(perms).slice(0, 3);
    const besarDulu = rng.chance(0.5);
    const sorted = [...nums].sort((x, y) => (besarDulu ? y - x : x - y));
    const kanan = [...nums].sort((x, y) => (besarDulu ? (y % 10) - (x % 10) : (x % 10) - (y % 10)));
    const urutan = (l: number[]) => l.join(', ');
    const kelas = rng.pick(['tutup botol', 'daun kering', 'sedotan bekas', 'kertas bekas']);
    const steps: Step[] = [
        pilih(rng, 'pertama', `Mana yang paling ${besarDulu ? 'besar' : 'kecil'}? Bandingkan ratusan dulu.`, String(sorted[0]), nums.map((x) => [String(x), 'banding-dari-kanan'] as [string, string]), {
            hint: `Lihat angka ratusan ketiga bilangan. Kalau sama, lihat puluhan.`, explain: `${sorted[0]} paling ${besarDulu ? 'besar' : 'kecil'}.`, error: 'banding-dari-kanan', urut: nums.map(String) }),
        pilih(rng, 'terakhir', `Mana yang paling ${besarDulu ? 'kecil' : 'besar'}?`, String(sorted[2]), nums.map((x) => [String(x), 'banding-dari-kanan'] as [string, string]), {
            hint: 'Bandingkan ratusan dulu, lalu puluhan.', explain: `${sorted[2]} paling ${besarDulu ? 'kecil' : 'besar'}.`, error: 'banding-dari-kanan', urut: nums.map(String) }),
        pilih(rng, 'urutan', `Urutkan dari yang paling ${besarDulu ? 'besar' : 'kecil'}.`, urutan(sorted), [[urutan([...sorted].reverse()), 'salah-urutan-bilangan'], [urutan(kanan), 'banding-dari-kanan'], [urutan(nums), 'salah-urutan-bilangan']], {
            hint: `Mulai dari ${sorted[0]}, akhiri dengan ${sorted[2]}.`, explain: `Urutannya ${urutan(sorted)}.`, error: 'salah-urutan-bilangan' }),
    ];
    return { text: `Kelas 2A mengumpulkan ${nums[0]} ${kelas}, kelas 2B ${nums[1]}, dan kelas 2C ${nums[2]}. Urutkan banyaknya dari yang paling ${besarDulu ? 'besar' : 'kecil'}.`, steps,
        conclusion: `Urutannya: ${urutan(sorted)}.` };
};

/** Pola bilangan: cari loncatan, lalu lanjutkan. */
const pola: Generator = (rng, level) => {
    let d = 0, seq: number[] = [], hidden: number[] = [];
    for (;;) {
        d = level === 1 ? rng.pick([10, 100]) : level === 2 ? rng.pick([5, 10, 10, 100]) : rng.pick([2, 5, 10, 20, 50, 100]);
        const turun = level === 1 ? false : rng.chance(0.5);
        const start = rng.int(1, 99) * (d >= 10 ? 10 : d === 5 ? 5 : 2) + (d === 100 ? rng.int(0, 9) * (rng.chance(0.5) ? 1 : 0) : 0);
        const step = turun ? -d : d;
        seq = Array.from({ length: 6 }, (_, i) => start + i * step);
        if (seq.some((x) => x < 100 || x > 1000)) continue;
        const ratus = seq.map((x) => Math.floor(x / 100));
        const lewat = new Set(ratus).size > 1;
        if (level === 1) {
            if (d === 10 && lewat) continue;
            hidden = [4, 5];
        } else if (level === 2) {
            hidden = [4, 5];
            // jawaban harus melewati ratusan (kecuali loncat 100)
            if (d !== 100 && !(ratus[3] !== ratus[4] || ratus[4] !== ratus[5])) continue;
        } else {
            hidden = rng.pick([[1, 4], [2, 4], [1, 3], [2, 5]]);
            if (d !== 100 && !lewat) continue;
        }
        break;
    }
    const turun = seq[1] < seq[0];
    const shown = seq.map((x, i) => (hidden.includes(i) ? '...' : fmt(x))).join(', ');
    // dua bilangan berdampingan yang terlihat, untuk mencari loncatan
    const r0 = [0, 1, 2, 3, 4].find((i) => !hidden.includes(i) && !hidden.includes(i + 1))!;
    const ref = [r0, r0 + 1];
    const [h1, h2] = hidden;
    const lewatRatus = (i: number) => d < 100 && Math.floor(seq[i] / 100) !== Math.floor(seq[i - 1] / 100);
    const steps: Step[] = [];
    if (level >= 2) steps.push(pilih(rng, 'arah', 'Polanya bertambah atau berkurang?', turun ? 'berkurang' : 'bertambah', ['bertambah', 'berkurang'], {
        hint: `Bandingkan ${fmt(seq[ref[0]])} dan ${fmt(seq[ref[1]])}.`, explain: `Bilangannya makin ${turun ? 'kecil' : 'besar'}, jadi polanya ${turun ? 'berkurang' : 'bertambah'}.`, error: 'salah-pola-bilangan', urut: ['bertambah', 'berkurang'] }));
    steps.push(isi('loncat', `Cari loncatannya: ${turun ? `${fmt(seq[ref[0]])} − ${fmt(seq[ref[1]])}` : `${fmt(seq[ref[1]])} − ${fmt(seq[ref[0]])}`} = ?`, d, {
        hint: 'Kurangkan bilangan yang besar dengan yang kecil.', explain: `Loncatannya ${turun ? 'kurang' : 'tambah'} ${d}.`, error: 'salah-pola-bilangan' }));
    for (const [k, i] of [[1, h1], [2, h2]] as const) {
        const prev = i - 1;
        steps.push(isi(`isi-${k}`, `Isi titik-titik ke-${k}: ${fmt(seq[prev])} ${turun ? '−' : '+'} ${d} = ?`, seq[i], {
            hint: lewatRatus(i) ? 'Hati-hati, bilangannya melewati ratusan. Sepuluh puluhan menjadi 1 ratusan.' : `Loncat ${d} dari ${fmt(seq[prev])}.`,
            explain: `${fmt(seq[prev])} ${turun ? '−' : '+'} ${d} = ${fmt(seq[i])}.`, error: lewatRatus(i) ? 'salah-lewat-ratusan' : 'salah-pola-bilangan' }));
    }
    return { text: `Lengkapi pola bilangan: ${shown}`, steps,
        visual: level === 1 ? { type: 'numberLine', from: seq[0], to: seq[5], step: d, marks: seq, hide: [seq[4], seq[5]] } : undefined,
        conclusion: `Loncatannya ${turun ? 'kurang' : 'tambah'} ${d}. Bilangan yang hilang: ${fmt(seq[h1])} dan ${fmt(seq[h2])}.` };
};

/** Ganjil dan genap: cukup lihat angka satuan. */
const ganjilGenap: Generator = (rng, level) => {
    const jenis = (n: number) => (n % 2 === 0 ? 'genap' : 'ganjil');
    if (level === 1) {
        const n = rng.int(11, 40);
        const steps: Step[] = [
            isi('satuan', `Lihat angka satuan ${n}. Berapa angka satuannya?`, n % 10, { hint: 'Angka satuan adalah angka paling kanan.', explain: `Angka satuan ${n} adalah ${n % 10}.`, error: 'salah-nilai-tempat' }),
            pilih(rng, 'jenis', `Satuannya ${n % 10}. Jadi ${n} bilangan apa?`, jenis(n), ['ganjil', 'genap'], {
                hint: 'Satuan 0, 2, 4, 6, 8 berarti genap. Satuan 1, 3, 5, 7, 9 berarti ganjil.', explain: `${n % 10} adalah angka ${jenis(n)}, jadi ${n} bilangan ${jenis(n)}.${n % 2 ? ' Kalau dipasangkan berdua, tersisa satu.' : ' Semua bisa dipasangkan berdua.'}`, error: 'ganjil-genap-angka-depan', urut: ['ganjil', 'genap'] }),
        ];
        return { text: `Ada ${n} kelereng. Apakah ${n} bilangan ganjil atau genap?`, visual: { type: 'objects', item: 'kelereng', count: n, group: 2 }, steps,
            conclusion: `Jadi ${n} adalah bilangan ${jenis(n)}.` };
    }
    if (level === 2) {
        const cari = rng.pick(['ganjil', 'genap'] as const);
        const mau = cari === 'ganjil' ? 1 : 0;
        // satu bilangan sesuai, tiga lainnya tidak; angka ratusan dan puluhan sengaja menjebak
        const make = (par: number) => {
            const h = rng.int(1, 9), t = rng.int(0, 9);
            const o = rng.pick([0, 2, 4, 6, 8]) + par;
            return { n: nilaiAngka(h, t, o) };
        };
        const ans = make(mau).n;
        const others: number[] = [];
        while (others.length < 3) { const x = make(1 - mau).n; if (!others.includes(x)) others.push(x); }
        const steps: Step[] = [
            pilih(rng, 'aturan', 'Untuk tahu ganjil atau genap, angka mana yang dilihat?', 'angka satuan', [['angka ratusan', 'ganjil-genap-angka-depan'], ['angka puluhan', 'ganjil-genap-angka-depan']], {
                hint: 'Ratusan dan puluhan selalu bisa dipasangkan berdua.', explain: 'Cukup lihat angka satuan, angka paling kanan.', error: 'ganjil-genap-angka-depan', urut: ['angka ratusan', 'angka puluhan', 'angka satuan'] }),
            pilih(rng, 'pilih', `Mana bilangan ${cari}?`, String(ans), others.map((x) => [String(x), 'ganjil-genap-angka-depan'] as [string, string]), {
                hint: `Cari bilangan dengan satuan ${cari === 'ganjil' ? '1, 3, 5, 7, atau 9' : '0, 2, 4, 6, atau 8'}.`, explain: `Satuan ${ans} adalah ${ans % 10}, angka ${cari}. Bilangan lain satuannya ${cari === 'ganjil' ? 'genap' : 'ganjil'}.`, error: 'ganjil-genap-angka-depan' }),
        ];
        return { text: `Di antara ${[ans, ...others].sort((x, y) => x - y).join(', ')}, hanya satu yang bilangan ${cari}. Mana?`, steps, conclusion: `Jadi ${ans} adalah bilangan ${cari}.` };
    }
    // tingkat 3: susun kartu angka menjadi bilangan genap/ganjil terbesar/terkecil
    const cari = rng.pick(['genap', 'ganjil'] as const);
    const terbesar = rng.chance(0.5);
    let dg: number[] = [];
    do dg = berbeda(rng, 3, 1, 9); while (!dg.some((x) => x % 2 === (cari === 'genap' ? 0 : 1)) || dg.every((x) => x % 2 === (cari === 'genap' ? 0 : 1)));
    const cocok = dg.filter((x) => x % 2 === (cari === 'genap' ? 0 : 1));
    // terbesar: satuan memakai angka cocok terkecil; terkecil: satuan memakai angka cocok terbesar
    const satuan = terbesar ? Math.min(...cocok) : Math.max(...cocok);
    const sisa = dg.filter((x) => x !== satuan).sort((x, y) => (terbesar ? y - x : x - y));
    const n = nilaiAngka(sisa[0], sisa[1], satuan);
    const nama = rng.pick(NAMA);
    const steps: Step[] = [
        isi('satuan', `Bilangan ${cari} ditentukan oleh satuannya. Angka berapa yang ditaruh di satuan?`, satuan, {
            hint: `Pilih angka ${cari}.${cocok.length > 1 ? ` Supaya bilangannya paling ${terbesar ? 'besar' : 'kecil'}, simpan angka yang ${terbesar ? 'besar' : 'kecil'} untuk ratusan.` : ''}`,
            explain: `Satuan harus ${cari}, jadi satuannya ${satuan}.`, error: 'ganjil-genap-angka-depan' }),
        isi('ratusan', `Dua angka sisanya ${sisa.slice().sort((x, y) => x - y).join(' dan ')}. Angka berapa yang ditaruh di ratusan?`, sisa[0], {
            hint: `Supaya paling ${terbesar ? 'besar' : 'kecil'}, ratusan diisi angka yang paling ${terbesar ? 'besar' : 'kecil'}.`, explain: `Ratusan ${sisa[0]}, puluhan ${sisa[1]}.`, error: 'salah-susun-kartu-angka' }),
        isi('bilangan', 'Tulis bilangannya.', n, { hint: `Ratusan ${sisa[0]}, puluhan ${sisa[1]}, satuan ${satuan}.`, explain: `Bilangannya ${n}, dan satuannya ${satuan} adalah ${cari}.`, error: 'salah-susun-kartu-angka' }),
    ];
    return { text: `${nama} punya tiga kartu angka: ${dg.join(', ')}. Setiap kartu dipakai sekali. Susun bilangan ${cari} yang paling ${terbesar ? 'besar' : 'kecil'}.`, steps,
        conclusion: `Jadi bilangan ${cari} ${terbesar ? 'terbesar' : 'terkecil'} adalah ${n}.` };
};

export const topic: TopicDef = {
    topic: 'sd2-01-bilangan-sampai-1000',
    skills: [
        { code: 'tulis-baca', name: 'Nilai tempat, menulis dan membaca bilangan', gen: tulisBaca },
        { code: 'bandingkan-urutkan', name: 'Membandingkan dan mengurutkan bilangan', gen: bandingkan },
        { code: 'pola-loncat', name: 'Membilang loncat dan pola bilangan', gen: pola },
        { code: 'ganjil-genap', name: 'Bilangan ganjil dan genap', gen: ganjilGenap },
    ],
};
