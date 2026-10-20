---
id: sma3-05-kaidah-pencacahan
judul: Permutasi dan Kombinasi
jenjang: sma3
moe: "H2 Mathematics 9758 · Probability and Statistics · Probability (permutations and combinations)"
prasyarat: [sma1-09-binomial-newton, smp2-12-peluang-dasar]
durasi_menit: 60
---

## Kenapa belajar ini?

Berapa banyak kode PIN yang mungkin? Berapa cara memilih 5 pengurus OSIS dari 12 calon? Menuliskan semua kemungkinan satu per satu tidak praktis. Kaidah pencacahan memberi cara menghitung banyaknya susunan dengan cepat dan pasti, dan menjadi dasar untuk menghitung peluang.

## Analogi

Bayangkan kamu mengisi **deretan kursi kosong** satu per satu. Untuk kursi pertama ada sejumlah pilihan orang. Setelah satu orang duduk, pilihan untuk kursi kedua berkurang satu, dan seterusnya.

- Kalau **kursinya bernomor** (kursi ketua, sekretaris, bendahara), urutan duduk penting. Ini **permutasi**.
- Kalau kursinya hanya **bangku panjang tanpa nomor**, yang penting hanya siapa yang duduk, bukan urutannya. Ini **kombinasi**.
- Kalau kursinya **mengelilingi meja bundar**, tidak ada kursi "pertama". Ini **susunan melingkar**.

Seluruh materi ini adalah variasi dari cara mengisi kursi.

```visual
{"type": "table", "head": ["Kursi", "Urutan penting?", "Nama", "Contoh"], "rows": [["bernomor (ketua, sekretaris, bendahara)", "ya", "permutasi", "pilih 3 pengurus berjabatan dari 8 orang"], ["bangku panjang tanpa nomor", "tidak", "kombinasi", "pilih 3 anggota tim dari 8 orang"], ["mengelilingi meja bundar", "hanya posisi relatif", "susunan melingkar", "8 orang duduk di meja bundar"]], "caption": "Tiga cara mengisi kursi"}
```

## Konsep

### Aturan perkalian

Jika suatu proses terdiri atas tahap 1 dengan $n_1$ cara, lalu tahap 2 dengan $n_2$ cara (apa pun hasil tahap 1), dan seterusnya, maka banyak cara seluruh proses adalah

$$n_1 \times n_2 \times \cdots \times n_k.$$

Dalam analogi kursi: setiap kursi adalah satu tahap, dan banyak pilihan per kursi dikalikan.

```anim
{"type": "persamaan", "title": "Mengisi 3 kursi bernomor dari 6 orang", "baris": [{"tex": "\\underline{\\ 6\\ }\\ \\times\\ \\underline{\\quad}\\ \\times\\ \\underline{\\quad}", "say": "Kursi ketua: 6 pilihan orang."}, {"tex": "\\underline{\\ 6\\ }\\ \\times\\ \\underline{\\ 5\\ }\\ \\times\\ \\underline{\\quad}", "say": "Satu orang sudah duduk, kursi sekretaris tinggal 5 pilihan.", "op": "−1 orang"}, {"tex": "\\underline{\\ 6\\ }\\ \\times\\ \\underline{\\ 5\\ }\\ \\times\\ \\underline{\\ 4\\ }", "say": "Kursi bendahara tinggal 4 pilihan.", "op": "−1 orang"}, {"tex": "6 \\times 5 \\times 4 = 120 = {}^{6}P_{3}", "say": "Kalikan banyak pilihan setiap kursi."}]}
```

Jika proses bisa terjadi melalui beberapa **kasus terpisah** yang tidak tumpang-tindih, banyak cara tiap kasus **dijumlahkan** (aturan penjumlahan). Ingat: "dan kemudian" berarti kali, "atau" (kasus terpisah) berarti tambah.

### Faktorial dan permutasi

Menyusun $n$ benda berbeda dalam $n$ kursi bernomor: kursi pertama $n$ pilihan, kedua $n-1$, sampai kursi terakhir 1 pilihan. Jadi banyak susunan adalah

$$n! = n(n-1)(n-2)\cdots 2 \cdot 1, \qquad 0! = 1.$$

Jika hanya ada $r$ kursi bernomor untuk $n$ benda berbeda ($r \le n$), kita berhenti setelah $r$ faktor:

$$^{n}P_{r} = n(n-1)\cdots(n-r+1) = \frac{n!}{(n-r)!}.$$

Bentuk pecahan muncul karena $\frac{n!}{(n-r)!}$ "membuang" faktor $(n-r)!$ dari kursi yang tidak ada.

### Permutasi dengan unsur yang sama

Susun huruf kata "PAPUA". Jika kedua P dianggap berbeda ($P_1, P_2$) dan kedua A juga berbeda, ada $5!$ susunan. Tetapi menukar $P_1$ dan $P_2$ tidak menghasilkan kata baru, jadi setiap kata terhitung $2!$ kali karena P dan $2!$ kali karena A. Secara umum, untuk $n$ benda dengan $p$ benda sama jenis pertama, $q$ benda sama jenis kedua, dan seterusnya:

$$\frac{n!}{p!\,q!\cdots}.$$

### Kombinasi

Sekarang $r$ kursi menjadi bangku panjang tanpa nomor. Setiap kelompok berisi $r$ orang dapat duduk di kursi bernomor dengan $r!$ urutan. Jadi setiap kelompok terhitung $r!$ kali di dalam $^{n}P_{r}$:

$$^{n}C_{r} = \binom{n}{r} = \frac{^{n}P_{r}}{r!} = \frac{n!}{r!\,(n-r)!}.$$

Sifat yang berguna: $\binom{n}{r} = \binom{n}{n-r}$, karena memilih $r$ orang yang ikut sama dengan memilih $n-r$ orang yang tidak ikut.

```anim
{"type": "persamaan", "title": "Dari permutasi ke kombinasi", "baris": [{"tex": "{}^{5}P_{3} = 5 \\times 4 \\times 3 = 60", "say": "Pilih 3 dari 5 orang untuk kursi bernomor: 60 cara."}, {"tex": "\\{A, B, C\\}:\\ ABC, ACB, BAC, BCA, CAB, CBA", "say": "Satu kelompok yang sama muncul dalam $3! = 6$ urutan."}, {"tex": "\\binom{5}{3} = \\frac{60}{3!} = \\frac{60}{6}", "say": "Di bangku panjang, keenam urutan itu satu kelompok saja: bagi dengan $3!$.", "op": "$\\div\\, 3!$"}, {"tex": "\\binom{5}{3} = 10", "say": "Ada 10 kelompok berbeda."}]}
```

### Susunan dengan syarat

Selalu **penuhi syarat terlebih dahulu**, baru isi kursi sisanya.

- **Posisi tertentu:** isi dulu kursi yang dibatasi (misalnya angka terakhir harus genap).
- **Harus berdampingan:** ikat benda-benda itu menjadi satu **blok**, susun blok bersama benda lain, lalu kalikan dengan banyak susunan di dalam blok.
- **Tidak boleh berdampingan:** hitung (semua susunan) − (susunan yang berdampingan). Cara lain: susun benda lain dulu, lalu sisipkan benda terlarang ke **celah** di antaranya.
- **Paling sedikit / paling banyak:** pecah menjadi kasus, atau pakai komplemen (total dikurangi kasus yang tidak diinginkan).

### Susunan melingkar

Di meja bundar, susunan yang hanya **diputar** dianggap sama, karena setiap orang tetap punya tetangga kiri dan kanan yang sama. Dari $n!$ susunan berderet, setiap susunan melingkar muncul $n$ kali (satu untuk setiap putaran). Jadi

$$\text{banyak susunan melingkar } n \text{ benda berbeda} = \frac{n!}{n} = (n-1)!.$$

Cara praktis: **dudukkan satu orang lebih dulu** sebagai patokan, lalu susun $n-1$ orang lainnya secara berderet relatif terhadap dia.

```anim
{"type": "bangun", "title": "Meja bundar 4 orang", "titik": {"A": [0, 2], "B": [2, 0], "C": [0, -2], "D": [-2, 0]}, "sisi": [["A", "B"], ["B", "C"], ["C", "D"], ["D", "A"]], "lingkaran": [{"pusat": [0, 0], "r": 2}], "langkah": [{"say": "Empat orang A, B, C, D duduk mengelilingi meja bundar.", "lingkaran": 1, "sisi": 0}, {"say": "Setiap orang punya tetangga kiri dan kanan.", "lingkaran": 1, "sisi": 4}, {"say": "Kalau semua bergeser satu kursi, tetangga tiap orang tetap sama: susunannya dianggap sama.", "lingkaran": 1, "sisi": 4, "sorot": ["A", "B", "C", "D"]}, {"say": "Jadi dudukkan A sebagai patokan. B, C, D disusun berderet relatif terhadap A: $3! = 6$ cara, yaitu $\\frac{4!}{4}$.", "lingkaran": 1, "sisi": 4, "sorot": ["A"]}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Bilangan tiga angka

```soal
{
 "title": "Contoh 1",
 "text": "Dari angka 1, 2, 3, 4, 5 akan dibentuk bilangan tiga angka tanpa pengulangan. (a) Berapa banyak bilangan yang dapat dibentuk? (b) Berapa banyak di antaranya yang genap?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Apakah urutan angka penting?",
   "options": [
    "Ya, 123 berbeda dari 321",
    "Tidak, sama saja"
   ],
   "answer": "Ya, 123 berbeda dari 321",
   "hint": "Bandingkan bilangan 123 dan 321.",
   "explain": "Ada 3 kursi bernomor: ratusan, puluhan, satuan. Ini permutasi.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: (a) Tanpa syarat: $5 \\times 4 \\times 3$ = ?",
   "answer": "60",
   "hint": "Ratusan 5 pilihan, puluhan 4, satuan 3.",
   "explain": "$^{5}P_{3} = 60$.",
   "error": "salah-langkah-materi",
   "suffix": "bilangan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: (b) Penuhi syarat dulu. Ada berapa pilihan angka satuan agar genap?",
   "answer": "2",
   "hint": "Angka genap di antara 1 sampai 5.",
   "explain": "Angka 2 atau 4: 2 pilihan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Isi kursi sisanya: ratusan lalu puluhan. Banyak bilangan genap = ?",
   "answer": "24",
   "hint": "Satuan 2 pilihan, ratusan 4, puluhan 3.",
   "explain": "$2 \\times 4 \\times 3 = 24$.",
   "error": "salah-langkah-materi",
   "suffix": "bilangan"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: proporsi genap seharusnya $\\frac{2}{5}$ dari 60. Hasilnya = ?",
   "answer": "24",
   "hint": "$60 \\div 5 \\times 2$.",
   "explain": "24. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi ada 60 bilangan, dan 24 di antaranya genap."
}
```

### Contoh 2: Huruf yang berulang dan syarat berdampingan

```soal
{
 "title": "Contoh 2",
 "text": "Huruf-huruf pada kata \"BANYUWANGI\" disusun ulang. (a) Berapa banyak susunan berbeda? (b) Berapa susunan dengan kedua huruf A berdampingan? (c) Berapa susunan dengan kedua huruf A tidak berdampingan?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Inventaris huruf. Ada berapa huruf seluruhnya?",
   "answer": "10",
   "hint": "Hitung B, A, N, Y, U, W, A, N, G, I.",
   "explain": "10 huruf; A muncul 2 kali dan N muncul 2 kali.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: (a) $\\frac{10!}{2!\\,2!}$ = ?",
   "answer": "907.200",
   "hint": "$10! = 3.628.800$, dibagi 4.",
   "explain": "907.200 susunan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: (b) Ikat \"AA\" menjadi satu blok. Sekarang ada berapa unit?",
   "answer": "9",
   "hint": "Blok AA dihitung satu unit, ditambah 8 huruf lain.",
   "explain": "9 unit: [AA], B, N, Y, U, W, N, G, I.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Banyak susunan $\\frac{9!}{2!}$ = ?",
   "answer": "181.440",
   "hint": "$9! = 362.880$; N masih kembar. Di dalam blok AA hanya 1 susunan.",
   "explain": "181.440 susunan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: (c) Komplemen: 907.200 − 181.440 = ?",
   "answer": "725.760",
   "hint": "Semua dikurangi yang berdampingan.",
   "explain": "725.760 susunan.",
   "error": "selisih-dijumlah"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban (cara celah): 8 huruf selain A disusun $\\frac{8!}{2!}$ cara = ?",
   "answer": "20.160",
   "hint": "$8! = 40.320$.",
   "explain": "20.160 cara, menyisakan 9 celah.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Pilih 2 dari 9 celah untuk A: $\\binom{9}{2}$ = ?",
   "answer": "36",
   "hint": "$\\frac{9 \\times 8}{2}$.",
   "explain": "$20.160 \\times 36 = 725.760$. Sama.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi (a) 907.200, (b) 181.440, (c) 725.760."
}
```

### Contoh 3: Memilih panitia dengan syarat "paling sedikit"

```soal
{
 "title": "Contoh 3",
 "text": "Panitia pentas seni beranggotakan 5 orang dipilih dari 7 siswa putra dan 5 siswi putri. Berapa banyak cara memilih panitia jika paling sedikit 2 anggotanya putri?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pilih alat.",
   "options": [
    "Kombinasi",
    "Permutasi",
    "Susunan melingkar"
   ],
   "answer": "Kombinasi",
   "hint": "Apakah panitia punya jabatan?",
   "explain": "Tanpa jabatan, urutan tidak penting: kombinasi.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kasus 2 putri, 3 putra: $\\binom{5}{2}\\binom{7}{3}$ = ?",
   "answer": "350",
   "hint": "$10 \\times 35$.",
   "explain": "350 cara.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Kasus 3 putri, 2 putra: $\\binom{5}{3}\\binom{7}{2}$ = ?",
   "answer": "210",
   "hint": "$10 \\times 21$.",
   "explain": "210 cara.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Kasus 4 putri, 1 putra: $\\binom{5}{4}\\binom{7}{1}$ = ?",
   "answer": "35",
   "hint": "$5 \\times 7$.",
   "explain": "35 cara.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Kasus 5 putri: $\\binom{5}{5}$ = ?",
   "answer": "1",
   "hint": "Semua putri terpilih.",
   "explain": "1 cara.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Kasus terpisah dijumlahkan. Totalnya = ?",
   "answer": "596",
   "hint": "350 + 210 + 35 + 1.",
   "explain": "596 cara.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: semua panitia $\\binom{12}{5}$ = ?",
   "answer": "792",
   "hint": "$\\frac{12 \\times 11 \\times 10 \\times 9 \\times 8}{120}$.",
   "explain": "$792 - \\binom{7}{5} - \\binom{5}{1}\\binom{7}{4} = 792 - 21 - 175 = 596$. Sama.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi ada 596 cara."
}
```

### Contoh 4: Meja bundar dengan syarat

```soal
{
 "title": "Contoh 4",
 "text": "Empat siswa putra dan empat siswi putri, termasuk Budi dan Siti, duduk mengelilingi meja bundar. Berapa banyak susunan jika (a) bebas, (b) putra dan putri duduk selang-seling, (c) Budi dan Siti harus bersebelahan?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: (a) 8 orang di meja bundar: $(8 - 1)!$ = ?",
   "answer": "5040",
   "hint": "$7! = 7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1$.",
   "explain": "5.040 susunan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: (b) Dudukkan 4 putra melingkar dulu: $(4 - 1)!$ = ?",
   "answer": "6",
   "hint": "$3!$.",
   "explain": "6 cara.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Keempat kursi kosong di antara putra kini bernomor. Putri mengisinya dengan berapa cara?",
   "answer": "24",
   "hint": "$4!$.",
   "explain": "24 cara.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Total (b) = $6 \\times 24$ = ?",
   "answer": "144",
   "hint": "Kalikan.",
   "explain": "144 susunan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: (c) Ikat Budi dan Siti menjadi satu blok. Sekarang ada berapa unit melingkar?",
   "answer": "7",
   "hint": "Blok dihitung satu, ditambah 6 orang lain.",
   "explain": "7 unit, disusun $(7 - 1)! = 720$ cara.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Kalikan dengan susunan di dalam blok ($2!$): $720 \\times 2$ = ?",
   "answer": "1440",
   "hint": "Budi–Siti atau Siti–Budi.",
   "explain": "1.440 susunan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban (c): dudukkan Budi sebagai patokan; Siti 2 pilihan; 6 orang lain $6!$. Totalnya = ?",
   "answer": "1440",
   "hint": "$2 \\times 720$.",
   "explain": "1.440. Sama.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi (a) 5.040, (b) 144, (c) 1.440."
}
```

## Kesalahan yang sering terjadi

- **Memakai permutasi untuk kelompok tanpa jabatan.** Memilih 3 anggota tim dari 8 orang dihitung $^{8}P_{3} = 336$. Padahal tim {Ani, Budi, Citra} sama dengan {Citra, Ani, Budi}. Yang benar $\binom{8}{3} = 56$. Tanyakan: apakah menukar urutan menghasilkan hal baru?
- **Mengisi kursi bebas sebelum kursi bersyarat.** Pada Contoh 1(b), mengisi ratusan dulu membuat pilihan untuk satuan bergantung pada angka yang sudah terpakai. Selalu isi kursi bersyarat terlebih dahulu.
- **Lupa susunan di dalam blok.** Pada Contoh 4(c), menjawab 720. Budi–Siti dan Siti–Budi adalah dua susunan berbeda, jadi kalikan $2!$.
- **Menghitung ganda pada "paling sedikit".** Memilih 2 putri dulu ($\binom{5}{2}$), lalu 3 orang bebas dari 10 sisanya ($\binom{10}{3}$), sehingga $10 \times 120 = 1200$. Panitia dengan 3 putri terhitung lebih dari sekali. Pakai pemecahan kasus atau komplemen.
- **Memakai $n!$ untuk meja bundar.** Putaran susunan yang sama dihitung berulang. Untuk $n$ orang di meja bundar, gunakan $(n-1)!$.

## Ringkasan

- Aturan perkalian: tahap berurutan dikalikan; kasus terpisah dijumlahkan.
- Permutasi (urutan penting): $^{n}P_{r} = \frac{n!}{(n-r)!}$. Dengan unsur sama: $\frac{n!}{p!\,q!\cdots}$.
- Kombinasi (urutan tidak penting): $\binom{n}{r} = \frac{n!}{r!(n-r)!}$, yaitu permutasi dibagi $r!$.
- Syarat dipenuhi dulu: posisi khusus diisi lebih dulu, "berdampingan" pakai blok, "tidak berdampingan" pakai komplemen atau celah.
- Susunan melingkar $n$ benda berbeda: $(n-1)!$, dengan satu orang sebagai patokan.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Ada berapa cara menyusun 6 buku berbeda dalam satu deret di rak?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Rumus yang tepat?",
   "options": [
    "$6!$",
    "$\\binom{6}{6}$",
    "$(6 - 1)!$"
   ],
   "answer": "$6!$",
   "hint": "Deret, semua buku berbeda, urutan penting.",
   "explain": "Susunan berderet $n$ benda berbeda: $n!$.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "$6!$ = ?",
   "answer": "720",
   "hint": "$6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1$.",
   "explain": "720 cara.",
   "error": "salah-langkah-materi",
   "suffix": "cara"
  }
 ],
 "conclusion": "Jadi ada 720 cara."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Dari 8 anggota kelompok belajar akan dipilih ketua, sekretaris, dan bendahara. Ada berapa cara?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Permutasi atau kombinasi?",
   "options": [
    "Permutasi",
    "Kombinasi"
   ],
   "answer": "Permutasi",
   "hint": "Apakah jabatannya berbeda-beda?",
   "explain": "Jabatan berbeda, jadi urutan penting.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "$^{8}P_{3} = 8 \\times 7 \\times 6$ = ?",
   "answer": "336",
   "hint": "Kalikan.",
   "explain": "336 cara.",
   "error": "salah-langkah-materi",
   "suffix": "cara"
  }
 ],
 "conclusion": "Jadi ada 336 cara."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Berapa banyak susunan berbeda dari huruf-huruf kata \"PAPUA\"?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Huruf P muncul berapa kali?",
   "answer": "2",
   "hint": "P-A-P-U-A.",
   "explain": "P muncul 2 kali; A juga 2 kali.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\frac{5!}{2!\\,2!}$ = ?",
   "answer": "30",
   "hint": "$\\frac{120}{4}$.",
   "explain": "30 susunan.",
   "error": "salah-langkah-materi",
   "suffix": "susunan"
  }
 ],
 "conclusion": "Jadi ada 30 susunan."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Seorang siswa harus menjawab 3 dari 10 soal, dan soal nomor 1 wajib dikerjakan. Ada berapa cara memilih soal?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Soal 1 sudah pasti. Masih harus memilih berapa soal lagi?",
   "answer": "2",
   "hint": "3 − 1.",
   "explain": "2 soal lagi.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Dipilih dari berapa soal yang tersisa?",
   "answer": "9",
   "hint": "10 soal dikurangi soal nomor 1.",
   "explain": "9 soal.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\binom{9}{2}$ = ?",
   "answer": "36",
   "hint": "$\\frac{9 \\times 8}{2}$.",
   "explain": "36 cara.",
   "error": "salah-langkah-materi",
   "suffix": "cara"
  }
 ],
 "conclusion": "Jadi ada 36 cara."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Enam orang, termasuk Made dan Putu, duduk mengelilingi meja bundar. Ada berapa susunan jika Made dan Putu tidak boleh bersebelahan?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Semua susunan melingkar $(6 - 1)!$ = ?",
   "answer": "120",
   "hint": "$5!$.",
   "explain": "120 susunan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Made dan Putu bersebelahan: blok, $(5 - 1)! \\times 2$ = ?",
   "answer": "48",
   "hint": "$4! \\times 2!$.",
   "explain": "$24 \\times 2 = 48$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Tidak bersebelahan = ?",
   "answer": "72",
   "hint": "Semua dikurangi yang bersebelahan.",
   "explain": "$120 - 48 = 72$.",
   "error": "salah-langkah-materi",
   "suffix": "susunan"
  }
 ],
 "conclusion": "Jadi ada 72 susunan."
}
```
