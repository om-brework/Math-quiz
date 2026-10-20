---
id: sma3-06-peluang-lanjut
judul: Peluang Lanjut
jenjang: sma3
moe: "H2 Mathematics 9758 · Probability and Statistics · Probability"
prasyarat: [smp3-10-peluang-majemuk, smp3-05-himpunan, sma3-05-kaidah-pencacahan]
durasi_menit: 60
---

## Kenapa belajar ini?

Prakiraan cuaca, hasil tes kesehatan, dan keputusan asuransi semuanya memakai peluang yang **berubah setelah ada informasi baru**. Misalnya, peluang kamu terlambat ke sekolah berbeda jika kamu sudah tahu hari ini hujan. Materi ini mengajarkan cara menghitung peluang seperti itu dengan rapi.

## Analogi

Bayangkan satu **aula berisi 100 siswa**. Setiap siswa mewakili satu hasil yang sama mungkin. Peluang suatu kejadian adalah **proporsi siswa** di aula yang memenuhi kejadian itu.

Sekarang ada **pintu penyaring**: "hanya siswa yang memakai kacamata boleh tetap di aula." Siswa lain keluar. Aula menjadi lebih kecil. Peluang bersyarat adalah proporsi yang dihitung **di dalam aula yang sudah disaring**.

Analogi aula dan pintu penyaring ini dipakai terus di bawah.

```anim
{"type": "batang", "title": "Aula dan pintu penyaring", "bars": [{"label": "Aula", "units": 10, "unitValue": "10", "known": "100 siswa"}, {"label": "Berkacamata", "units": 4, "unitValue": "10", "known": "40 siswa"}, {"label": "Kacamata, pramuka", "units": 1, "unitValue": "10", "known": "10 siswa"}], "langkah": [{"say": "Aula berisi 100 siswa. Setiap siswa sama mungkin terpilih.", "bars": 1}, {"say": "Pintu penyaring: hanya 40 siswa berkacamata yang tetap di aula.", "bars": 2}, {"say": "Dari 40 siswa itu, 10 ikut pramuka. Peluang pramuka dengan syarat berkacamata $= \\frac{10}{40} = \\frac{1}{4}$, bukan $\\frac{10}{100}$.", "bars": 3}]}
```

## Konsep

### Mengingat dasar: komplemen dan aturan penjumlahan

Untuk kejadian $A$ dan $B$ dalam ruang sampel $S$:

$$P(A') = 1 - P(A).$$

Untuk menghitung $P(A \cup B)$, kita menjumlah siswa di $A$ dan siswa di $B$. Siswa yang berada di keduanya terhitung dua kali, jadi dikurangi sekali:

$$P(A \cup B) = P(A) + P(B) - P(A \cap B).$$

Ini **aturan penjumlahan**. Gambarlah diagram Venn: irisan adalah daerah yang terhitung dua kali.

### Kejadian saling lepas

$A$ dan $B$ **saling lepas** jika tidak mungkin terjadi bersamaan: $A \cap B = \varnothing$, sehingga $P(A \cap B) = 0$ dan

$$P(A \cup B) = P(A) + P(B).$$

Di aula: tidak ada satu siswa pun yang berada di $A$ sekaligus di $B$.

### Peluang bersyarat

Peluang $A$ **dengan syarat** $B$ sudah terjadi ditulis $P(A \mid B)$. Pintu penyaring hanya meloloskan siswa di $B$. Di aula baru itu, siswa yang juga di $A$ adalah siswa di $A \cap B$. Jika semua hasil sama mungkin:

$$P(A \mid B) = \frac{n(A \cap B)}{n(B)} = \frac{n(A \cap B)/n(S)}{n(B)/n(S)} = \frac{P(A \cap B)}{P(B)}, \qquad P(B) > 0.$$

Rumus terakhir dipakai sebagai definisi umum.

```visual
{"type": "table", "head": ["", "Pramuka", "Bukan pramuka", "Jumlah"], "rows": [["Berkacamata", "10", "30", "40"], ["Tidak berkacamata", "20", "40", "60"], ["Jumlah", "30", "70", "100"]], "caption": "Aula 100 siswa: P(pramuka | kacamata) = 10/40, hanya baris berkacamata yang dilihat"}
```

### Aturan perkalian

Dengan menyusun ulang definisi tadi:

$$P(A \cap B) = P(B)\,P(A \mid B) = P(A)\,P(B \mid A).$$

Artinya: peluang keduanya terjadi = peluang lolos penyaring pertama × peluang lolos penyaring kedua di dalam aula yang sudah disaring.

### Kejadian saling bebas

$A$ dan $B$ **saling bebas** jika informasi tentang $B$ tidak mengubah peluang $A$: penyaring $B$ tidak mengubah proporsi siswa $A$ di aula.

$$P(A \mid B) = P(A) \quad\Longleftrightarrow\quad P(A \cap B) = P(A)\,P(B).$$

Untuk membuktikan dua kejadian saling bebas, cek salah satu persamaan di atas dengan angka.

**Saling lepas berbeda dengan saling bebas.** Jika $P(A) > 0$, $P(B) > 0$, dan $A, B$ saling lepas, maka $P(A \mid B) = 0 \ne P(A)$. Jadi kejadian saling lepas justru **tidak** saling bebas: mengetahui $B$ terjadi memberi tahu bahwa $A$ pasti tidak terjadi.

### Diagram pohon

Diagram pohon menyajikan kejadian bertahap. Cabang pada tahap kedua adalah **peluang bersyarat** terhadap cabang sebelumnya.

- **Kalikan** peluang sepanjang satu jalur (aturan perkalian).
- **Jumlahkan** hasil beberapa jalur yang berbeda (jalur-jalur itu saling lepas).
- Jumlah peluang cabang yang keluar dari satu titik selalu 1.

```anim
{"type": "bangun", "title": "Pohon: ambil 2 kelereng dari 3 merah dan 2 biru", "titik": {"S": [0, 0], "M": [4, 2], "B": [4, -2], "MM": [8, 3], "MB": [8, 1], "BM": [8, -1], "BB": [8, -3]}, "sisi": [["S", "M", "\\frac{3}{5}"], ["S", "B", "\\frac{2}{5}"], ["M", "MM", "\\frac{2}{4}"], ["M", "MB", "\\frac{2}{4}"], ["B", "BM", "\\frac{3}{4}"], ["B", "BB", "\\frac{1}{4}"]], "langkah": [{"say": "Tahap 1: kelereng pertama merah ($\\frac{3}{5}$) atau biru ($\\frac{2}{5}$). Jumlahnya 1.", "sisi": 2}, {"say": "Tahap 2: cabang adalah peluang bersyarat. Setelah merah terambil, sisa 2 merah dan 2 biru.", "sisi": 4, "sorot": ["M"]}, {"say": "Setelah biru terambil, sisa 3 merah dan 1 biru.", "sisi": 6, "sorot": ["B"]}, {"say": "Kalikan sepanjang jalur: $P(MM) = \\frac{3}{5} \\times \\frac{2}{4} = \\frac{3}{10}$.", "sisi": 6, "sorot": ["S", "M", "MM"]}, {"say": "Jumlahkan antarjalur: $P(\\text{satu merah, satu biru}) = \\frac{3}{10} + \\frac{3}{10} = \\frac{3}{5}$.", "sisi": 6, "sorot": ["MB", "BM"]}]}
```

Untuk "membalik" syarat, misalnya mencari $P(\text{tahap 1} \mid \text{tahap 2})$, pakai definisi: peluang jalur yang diinginkan dibagi jumlah peluang semua jalur yang memenuhi syarat.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Dua dadu

```soal
{
 "title": "Contoh 1",
 "text": "Dua dadu dilempar. $A$: jumlah mata dadu 8. $B$: mata dadu pertama genap. Tentukan $P(A \\mid B)$ dan selidiki apakah $A$ dan $B$ saling bebas.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Banyak pasangan dalam ruang sampel = ?",
   "answer": "36",
   "hint": "$6 \\times 6$.",
   "explain": "36 pasangan yang sama mungkin.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Banyak anggota $A$ (jumlah 8) = ?",
   "answer": "5",
   "hint": "Daftar: (2,6), (3,5), ...",
   "explain": "$A = \\{(2,6), (3,5), (4,4), (5,3), (6,2)\\}$, jadi $P(A) = \\frac{5}{36}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Banyak anggota $B$ (mata pertama genap) = ?",
   "answer": "18",
   "hint": "Mata pertama 2, 4, atau 6; mata kedua bebas.",
   "explain": "$3 \\times 6 = 18$, jadi $P(B) = \\frac{1}{2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Banyak anggota $A \\cap B$ = ?",
   "answer": "3",
   "hint": "Dari daftar $A$, pilih yang mata pertamanya genap.",
   "explain": "(2,6), (4,4), (6,2): 3 pasangan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: $P(A \\mid B) = \\frac{n(A \\cap B)}{n(B)}$ = ?",
   "answer": {
    "num": 1,
    "den": 6
   },
   "hint": "Di aula tersaring ada 18 pasangan.",
   "explain": "$\\frac{3}{18} = \\frac{1}{6}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Apakah $A$ dan $B$ saling bebas?",
   "options": [
    "Tidak, karena $P(A \\mid B) \\ne P(A)$",
    "Ya, karena $P(A \\mid B) = P(A)$",
    "Ya, karena keduanya bisa terjadi bersamaan"
   ],
   "answer": "Tidak, karena $P(A \\mid B) \\ne P(A)$",
   "hint": "Bandingkan $\\frac{1}{6} \\approx 0{,}167$ dengan $\\frac{5}{36} \\approx 0{,}139$.",
   "explain": "Informasi $B$ mengubah peluang $A$, jadi tidak saling bebas.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $P(A \\mid B) = \\frac{1}{6}$, dan $A$, $B$ tidak saling bebas."
}
```

### Contoh 2: Memakai aturan penjumlahan

```soal
{
 "title": "Contoh 2",
 "text": "Diketahui $P(A) = 0{,}4$, $P(B) = 0{,}5$, dan $P(A \\cup B) = 0{,}7$. Tentukan $P(A \\cap B)$, $P(A \\mid B)$, dan $P(A' \\cap B)$. Apakah $A$ dan $B$ saling bebas?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: $0{,}7 = 0{,}4 + 0{,}5 - P(A \\cap B)$. $P(A \\cap B)$ = ?",
   "answer": "0,2",
   "hint": "$0{,}9 - 0{,}7$.",
   "explain": "$P(A \\cap B) = 0{,}2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $P(A \\mid B) = \\frac{0{,}2}{0{,}5}$ = ?",
   "answer": "0,4",
   "hint": "Penyebutnya peluang syarat $B$.",
   "explain": "$P(A \\mid B) = 0{,}4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $P(A' \\cap B) = P(B) - P(A \\cap B)$ = ?",
   "answer": "0,3",
   "hint": "$0{,}5 - 0{,}2$.",
   "explain": "Daerah $B$ tanpa $A$: 0,3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $P(A) \\times P(B)$ = ?",
   "answer": "0,2",
   "hint": "$0{,}4 \\times 0{,}5$.",
   "explain": "$0{,}2 = P(A \\cap B)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Jadi $A$ dan $B$...",
   "options": [
    "saling bebas",
    "tidak saling bebas",
    "saling lepas"
   ],
   "answer": "saling bebas",
   "hint": "Bandingkan $P(A)P(B)$ dengan $P(A \\cap B)$.",
   "explain": "Keduanya 0,2, jadi saling bebas. Bukan saling lepas, karena irisannya tidak 0.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: di diagram Venn, peluang di luar $A$ dan $B$ = ?",
   "answer": "0,3",
   "hint": "$1 - P(A \\cup B)$.",
   "explain": "$1 - 0{,}7 = 0{,}3$; total $0{,}2 + 0{,}2 + 0{,}3 + 0{,}3 = 1$. Konsisten.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $P(A \\cap B) = 0{,}2$, $P(A \\mid B) = 0{,}4$, $P(A' \\cap B) = 0{,}3$, dan $A$, $B$ saling bebas."
}
```

### Contoh 3: Soal cerita dengan diagram pohon

```soal
{
 "title": "Contoh 3",
 "text": "Di Jakarta, peluang hari hujan adalah 0,3. Jika hujan, peluang Rina terlambat ke sekolah 0,4. Jika tidak hujan, peluangnya 0,1. (a) Berapa peluang Rina terlambat? (b) Diketahui Rina terlambat, berapa peluang hari itu hujan?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Jalur hujan lalu terlambat: $P(H \\cap T) = 0{,}3 \\times 0{,}4$ = ?",
   "answer": "0,12",
   "hint": "Kalikan sepanjang jalur.",
   "explain": "$0{,}12$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Jalur tidak hujan lalu terlambat: $0{,}7 \\times 0{,}1$ = ?",
   "answer": "0,07",
   "hint": "$P(H') = 1 - 0{,}3$.",
   "explain": "$0{,}07$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: (a) $P(T)$ = ?",
   "answer": "0,19",
   "hint": "Jumlahkan jalur yang berakhir di $T$.",
   "explain": "$0{,}12 + 0{,}07 = 0{,}19$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: (b) $P(H \\mid T) = \\frac{P(H \\cap T)}{P(T)}$ = ?",
   "answer": {
    "num": 12,
    "den": 19
   },
   "hint": "Penyebutnya peluang syarat: terlambat.",
   "explain": "$\\frac{0{,}12}{0{,}19} = \\frac{12}{19}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Nilai $\\frac{12}{19}$, bulatkan ke 3 desimal.",
   "answer": "0,632",
   "hint": "Bagi 12 dengan 19.",
   "explain": "$\\approx 0{,}632$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: jumlah keempat ujung jalur 0,12 + 0,18 + 0,07 + 0,63 = ?",
   "answer": "1",
   "hint": "Jumlahkan.",
   "explain": "Hasilnya 1. Konsisten.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi (a) $P(T) = 0{,}19$ dan (b) $P(H \\mid T) = \\frac{12}{19} \\approx 0{,}632$.",
 "visual": {
  "type": "table",
  "head": [
   "Cuaca",
   "Peluang cuaca",
   "Peluang terlambat"
  ],
  "rows": [
   [
    "Hujan (H)",
    "0,3",
    "0,4"
   ],
   [
    "Tidak hujan (H')",
    "0,7",
    "0,1"
   ]
  ]
 }
}
```

### Contoh 4: Tanpa pengembalian, memakai kombinasi

```soal
{
 "title": "Contoh 4",
 "text": "Sebuah kantong berisi 5 kelereng merah dan 3 kelereng biru. Tiga kelereng diambil sekaligus secara acak. (a) Tentukan peluang terambil tepat 2 merah. (b) Diketahui paling sedikit 2 kelereng merah, tentukan peluang ketiganya merah.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Ruang sampel $\\binom{8}{3}$ = ?",
   "answer": "56",
   "hint": "$\\frac{8 \\times 7 \\times 6}{6}$.",
   "explain": "56 cara yang sama mungkin.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Tepat 2 merah: $\\binom{5}{2}\\binom{3}{1}$ = ?",
   "answer": "30",
   "hint": "$10 \\times 3$.",
   "explain": "30 cara.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Peluang (a), paling sederhana = ?",
   "answer": {
    "num": 15,
    "den": 28
   },
   "hint": "$\\frac{30}{56}$, sederhanakan.",
   "explain": "$\\frac{30}{56} = \\frac{15}{28}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tiga merah: $\\binom{5}{3}$ = ?",
   "answer": "10",
   "hint": "$\\frac{5 \\times 4 \\times 3}{6}$.",
   "explain": "10 cara.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Paling sedikit 2 merah = ?",
   "answer": "40",
   "hint": "Tepat 2 merah ditambah tiga merah.",
   "explain": "$30 + 10 = 40$ cara.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: (b) Peluang ketiganya merah di aula tersaring = ?",
   "answer": {
    "num": 1,
    "den": 4
   },
   "hint": "Aula hanya berisi 40 hasil; berapa yang semuanya merah?",
   "explain": "$\\frac{10}{40} = \\frac{1}{4}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  }
 ],
 "conclusion": "Jadi (a) $\\frac{15}{28}$ dan (b) $\\frac{1}{4}$."
}
```

## Kesalahan yang sering terjadi

- **Menyamakan saling lepas dengan saling bebas.** Menulis $P(A \cap B) = P(A)P(B)$ untuk kejadian yang tidak bisa terjadi bersamaan. Kejadian saling lepas memiliki $P(A \cap B) = 0$. Cek definisinya masing-masing.
- **Membagi dengan peluang yang salah.** Menghitung $P(H \mid T)$ sebagai $\frac{0{,}12}{0{,}3}$. Itu $P(T \mid H)$. Penyebut selalu peluang **syarat**, yaitu kejadian di belakang garis tegak.
- **Lupa mengurangi irisan.** Menulis $P(A \cup B) = P(A) + P(B)$ untuk kejadian yang tidak saling lepas, sehingga hasilnya bisa lebih dari 1.
- **Menganggap pengambilan tanpa pengembalian saling bebas.** Peluang kelereng kedua merah bergantung pada kelereng pertama. Pakai peluang bersyarat di cabang pohon, atau pakai kombinasi.
- **Cabang pohon tidak berjumlah 1.** Menulis 0,4 dan 0,1 sebagai dua cabang dari titik yang sama. Cabang dari satu titik harus lengkap, misalnya 0,4 dan 0,6.

## Ringkasan

- Aturan penjumlahan: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$; untuk saling lepas, irisannya 0.
- Peluang bersyarat: $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$, yaitu proporsi di dalam aula yang sudah disaring oleh $B$.
- Aturan perkalian: $P(A \cap B) = P(B)\,P(A \mid B)$.
- Saling bebas: $P(A \cap B) = P(A)P(B)$, atau $P(A \mid B) = P(A)$.
- Diagram pohon: kalikan sepanjang jalur, jumlahkan antarjalur; untuk membalik syarat, bagi peluang jalur dengan jumlah jalur yang memenuhi syarat.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "$A$ dan $B$ saling lepas dengan $P(A) = 0{,}3$ dan $P(B) = 0{,}5$. Tentukan $P(A \\cup B)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Untuk kejadian saling lepas, $P(A \\cap B)$ = ?",
   "answer": "0",
   "hint": "Bisakah keduanya terjadi bersamaan?",
   "explain": "Tidak bisa, jadi irisannya 0.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$P(A \\cup B)$ = ?",
   "answer": "0,8",
   "hint": "$0{,}3 + 0{,}5 - 0$.",
   "explain": "$0{,}8$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $P(A \\cup B) = 0{,}8$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "$A$ dan $B$ saling bebas dengan $P(A) = 0{,}3$ dan $P(B) = 0{,}5$. Tentukan $P(A \\cup B)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Saling bebas: $P(A \\cap B) = P(A)P(B)$ = ?",
   "answer": "0,15",
   "hint": "$0{,}3 \\times 0{,}5$.",
   "explain": "$0{,}15$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$P(A \\cup B)$ = ?",
   "answer": "0,65",
   "hint": "$0{,}3 + 0{,}5 - 0{,}15$.",
   "explain": "$0{,}65$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $P(A \\cup B) = 0{,}65$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Diketahui $P(A \\cap B) = 0{,}12$ dan $P(B) = 0{,}4$. Tentukan $P(A \\mid B)$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Rumus yang tepat?",
   "options": [
    "$\\frac{P(A \\cap B)}{P(B)}$",
    "$\\frac{P(B)}{P(A \\cap B)}$",
    "$P(A \\cap B) \\times P(B)$"
   ],
   "answer": "$\\frac{P(A \\cap B)}{P(B)}$",
   "hint": "Penyebutnya peluang syarat.",
   "explain": "$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$P(A \\mid B)$ = ?",
   "answer": "0,3",
   "hint": "$\\frac{0{,}12}{0{,}4}$.",
   "explain": "$0{,}3$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $P(A \\mid B) = 0{,}3$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Sebuah dadu dilempar dan diketahui hasilnya lebih dari 3. Berapa peluang hasilnya genap?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Aula tersaring {hasil > 3} berisi berapa hasil?",
   "answer": "3",
   "hint": "Hasil lebih dari 3.",
   "explain": "{4, 5, 6}: 3 hasil.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Berapa yang genap?",
   "answer": "2",
   "hint": "Dari {4, 5, 6}.",
   "explain": "{4, 6}: 2 hasil.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Peluangnya = ?",
   "answer": {
    "num": 2,
    "den": 3
   },
   "hint": "Bagi dengan ukuran aula tersaring.",
   "explain": "$\\frac{2}{3}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  }
 ],
 "conclusion": "Jadi peluangnya $\\frac{2}{3}$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Kotak I berisi 3 bola merah dan 2 putih. Kotak II berisi 1 bola merah dan 4 putih. Sebuah koin dilempar: jika muncul angka, satu bola diambil dari kotak I; jika gambar, dari kotak II. Tentukan peluang bola merah, dan peluang bola berasal dari kotak I jika diketahui bola itu merah.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jalur kotak I lalu merah: $0{,}5 \\times \\frac{3}{5}$ = ?",
   "answer": "0,3",
   "hint": "$\\frac{3}{5} = 0{,}6$.",
   "explain": "$0{,}5 \\times 0{,}6 = 0{,}3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Jalur kotak II lalu merah: $0{,}5 \\times \\frac{1}{5}$ = ?",
   "answer": "0,1",
   "hint": "$\\frac{1}{5} = 0{,}2$.",
   "explain": "$0{,}5 \\times 0{,}2 = 0{,}1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$P(\\text{merah})$ = ?",
   "answer": "0,4",
   "hint": "Jumlahkan kedua jalur.",
   "explain": "$0{,}3 + 0{,}1 = 0{,}4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$P(\\text{kotak I} \\mid \\text{merah})$ = ?",
   "answer": "0,75",
   "hint": "$\\frac{0{,}3}{0{,}4}$.",
   "explain": "$0{,}75$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $P(\\text{merah}) = 0{,}4$ dan $P(\\text{kotak I} \\mid \\text{merah}) = 0{,}75$."
}
```
