---
id: smp2-08-kongruen-sebangun
judul: Kekongruenan dan Kesebangunan
jenjang: smp2
moe: "Secondary 2 · Geometry and Measurement · G2 Congruence and similarity"
prasyarat: [smp1-04-perbandingan, smp1-10-sudut-segitiga-poligon]
durasi_menit: 40
---

## Kenapa belajar ini?

Foto yang dicetak lebih besar, denah rumah, model mobil mainan, dan ubin lantai yang sama persis semuanya berhubungan dengan bangun yang "sama bentuk". Dengan memahami kekongruenan dan kesebangunan, kamu bisa menghitung ukuran yang belum diketahui hanya dari bentuk yang mirip.

## Analogi

Bayangkan **mesin fotokopi** dengan tombol pengatur ukuran (zoom).

- Jika kamu memfotokopi sebuah gambar dengan pengaturan **100%**, hasilnya **sama persis**: bentuk sama, ukuran sama. Ini **kongruen**.
- Jika kamu memakai pengaturan **150%** atau **50%**, hasilnya **lebih besar atau lebih kecil**, tetapi bentuknya tidak berubah. Semua panjang dikali angka yang sama, dan semua sudut tetap. Ini **sebangun**.

Angka pengatur ukuran itu disebut **faktor skala**. Ingat mesin fotokopi ini setiap kali kita mencari sisi yang hilang.

```anim
{"type": "bangun", "title": "Fotokopi 100% dan 150%", "titik": {"A": [0, 0], "B": [4, 0], "C": [0, 3], "D": [5, 0], "E": [9, 0], "F": [5, 3], "P": [10, 0], "Q": [16, 0], "R": [10, 4.5]}, "sisi": [["A", "B", "4"], ["B", "C", "5"], ["C", "A", "3"], ["D", "E", "4"], ["E", "F", "5"], ["F", "D", "3"], ["P", "Q", "6"], ["Q", "R", "7{,}5"], ["R", "P", "4{,}5"]], "sudut": [{"di": "B", "dari": "C", "ke": "A", "label": "\\alpha"}, {"di": "E", "dari": "F", "ke": "D", "label": "\\alpha"}, {"di": "Q", "dari": "R", "ke": "P", "label": "\\alpha"}], "langkah": [{"say": "Gambar asli: segitiga $ABC$ dengan sisi 3, 4, 5.", "sisi": 3, "sudut": 1}, {"say": "Fotokopi 100%: segitiga $DEF$ sama persis. Ini kongruen.", "sisi": 6, "sudut": 2, "sorot": ["DE", "EF", "FD"]}, {"say": "Fotokopi 150%: segitiga $PQR$. Semua sisi dikali 1,5: 4 menjadi 6, 3 menjadi 4,5, 5 menjadi 7,5.", "sisi": 9, "sudut": 2, "sorot": ["PQ", "QR", "RP"]}, {"say": "Sudutnya tidak berubah, tetap $\\alpha$. Ini sebangun.", "sisi": 9, "sudut": 3, "sorot": ["B", "E", "Q"]}]}
```

## Konsep

### Bangun kongruen

Dua bangun **kongruen** jika bentuk dan ukurannya sama persis. Satu bangun bisa ditempatkan tepat menutupi bangun lainnya (mungkin setelah digeser, diputar, atau dibalik).

Pada dua bangun kongruen:

- **sudut-sudut yang bersesuaian sama besar**, dan
- **sisi-sisi yang bersesuaian sama panjang**.

Lambangnya $\cong$. Penulisan $\triangle ABC \cong \triangle PQR$ berarti titik-titiknya berpasangan **sesuai urutan**: $A$ dengan $P$, $B$ dengan $Q$, $C$ dengan $R$. Jadi $AB = PQ$, $BC = QR$, $AC = PR$, dan $\angle A = \angle P$, $\angle B = \angle Q$, $\angle C = \angle R$.

```anim
{"type": "bangun", "title": "Pasangan titik sesuai urutan", "titik": {"A": [0, 0], "B": [5, 0], "C": [1.5, 3], "P": [7, 0], "Q": [12, 0], "R": [8.5, 3]}, "sisi": [["A", "B"], ["B", "C"], ["C", "A"], ["P", "Q"], ["Q", "R"], ["R", "P"]], "langkah": [{"say": "$\\triangle ABC \\cong \\triangle PQR$.", "sisi": 6}, {"say": "Huruf pertama berpasangan: $A \\leftrightarrow P$. Jadi $\\angle A = \\angle P$.", "sisi": 6, "sorot": ["A", "P"]}, {"say": "Dua huruf pertama: $AB = PQ$.", "sisi": 6, "sorot": ["AB", "PQ"]}, {"say": "Dua huruf terakhir: $BC = QR$.", "sisi": 6, "sorot": ["BC", "QR"]}]}
```

### Bangun sebangun

Dua bangun **sebangun** jika yang satu adalah pembesaran atau pengecilan dari yang lain. Syaratnya **dua-duanya** harus dipenuhi:

1. **sudut-sudut yang bersesuaian sama besar**, dan
2. **sisi-sisi yang bersesuaian sebanding** (perbandingannya sama).

Lambangnya $\sim$. Jika $ABCD \sim PQRS$, maka

$$\frac{PQ}{AB} = \frac{QR}{BC} = \frac{RS}{CD} = \frac{SP}{DA} = k$$

dengan $k$ adalah faktor skala dari $ABCD$ ke $PQRS$.

### Kenapa dua syarat itu perlu?

- Persegi dengan sisi 4 cm dan persegi panjang 4 cm × 8 cm punya sudut yang sama (semua $90^\circ$), tetapi sisinya tidak sebanding. Mereka **tidak sebangun**.
- Persegi dengan sisi 5 cm dan belah ketupat dengan sisi 10 cm punya sisi sebanding (semua dikali 2), tetapi sudut belah ketupat bukan $90^\circ$. Mereka juga **tidak sebangun**.

Mesin fotokopi tidak pernah meregangkan gambar ke satu arah saja, dan tidak pernah membengkokkan sudut. Karena itu kedua syarat harus dipenuhi.

```anim
{"type": "bangun", "title": "Sudut sama, tetapi tidak sebangun", "titik": {"A": [0, 0], "B": [4, 0], "C": [4, 4], "D": [0, 4], "P": [6, 0], "Q": [14, 0], "R": [14, 4], "S": [6, 4]}, "sisi": [["A", "B", "4"], ["B", "C", "4"], ["C", "D"], ["D", "A"], ["P", "Q", "8"], ["Q", "R", "4"], ["R", "S"], ["S", "P"]], "sudut": [{"di": "A", "dari": "B", "ke": "D", "siku": true}, {"di": "P", "dari": "Q", "ke": "S", "siku": true}], "langkah": [{"say": "Persegi 4 cm dan persegi panjang 4 cm × 8 cm.", "sisi": 8}, {"say": "Semua sudutnya $90^\\circ$. Syarat sudut terpenuhi.", "sisi": 8, "sudut": 2}, {"say": "Sisi panjang: $\\frac{8}{4} = 2$. Sisi pendek: $\\frac{4}{4} = 1$. Tidak sama!", "sisi": 8, "sudut": 2, "sorot": ["AB", "PQ", "BC", "QR"]}, {"say": "Gambarnya diregangkan ke satu arah saja, jadi tidak sebangun.", "sisi": 8, "sudut": 2}]}
```

### Pembesaran dan pengecilan

Faktor skala $k$ dihitung dari:

$$k = \frac{\text{panjang pada bangun baru}}{\text{panjang yang bersesuaian pada bangun asli}}$$

- $k > 1$: **pembesaran** (seperti zoom 150%, $k = 1{,}5$).
- $0 < k < 1$: **pengecilan** (seperti zoom 50%, $k = 0{,}5$).
- $k = 1$: ukuran sama, yaitu **kongruen**. Jadi bangun kongruen adalah kasus khusus bangun sebangun.

Sudut **tidak pernah** dikali $k$. Sudut $60^\circ$ tetap $60^\circ$ setelah difotokopi 200%.

```visual
{"type": "table", "head": ["Zoom", "Faktor skala k", "Sisi 4 cm menjadi", "Sudut 60° menjadi"], "rows": [["50%", "0,5", "2 cm", "60°"], ["100%", "1", "4 cm", "60°"], ["150%", "1,5", "6 cm", "60°"], ["200%", "2", "8 cm", "60°"]], "caption": "Sisi dikali k, sudut tetap."}
```

## Contoh langkah demi langkah

Urutan berpikir: **pasangkan titik yang bersesuaian → cari faktor skala (jika sebangun) → hitung → cek**.

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Memakai kekongruenan

```soal
{
 "title": "Memakai kekongruenan",
 "text": "Diketahui $\\triangle ABC \\cong \\triangle PQR$, dengan $AB = 5$ cm, $BC = 7$ cm, $\\angle A = 60^\\circ$, dan $\\angle B = 75^\\circ$. Tentukan $PQ$, $QR$, $\\angle P$, dan $\\angle R$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pasangan titik yang benar?",
   "options": [
    "$A \\leftrightarrow P$, $B \\leftrightarrow Q$, $C \\leftrightarrow R$",
    "$A \\leftrightarrow R$, $B \\leftrightarrow Q$, $C \\leftrightarrow P$",
    "$A \\leftrightarrow Q$, $B \\leftrightarrow P$, $C \\leftrightarrow R$"
   ],
   "answer": "$A \\leftrightarrow P$, $B \\leftrightarrow Q$, $C \\leftrightarrow R$",
   "hint": "Ikuti urutan huruf.",
   "explain": "Huruf ke-1 dengan ke-1, dan seterusnya.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $PQ = ?$",
   "answer": "5",
   "hint": "PQ berpasangan dengan AB.",
   "explain": "PQ = AB = 5 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2 (lanjutan): $QR = ?$",
   "answer": "7",
   "hint": "QR berpasangan dengan BC.",
   "explain": "QR = 7 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2 (lanjutan): $\\angle P = ?$",
   "answer": "60",
   "hint": "∠P berpasangan dengan ∠A.",
   "explain": "∠P = 60°.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\angle R = \\angle C = 180^\\circ - 60^\\circ - 75^\\circ$.",
   "answer": "45",
   "hint": "Jumlah sudut segitiga 180°.",
   "explain": "∠R = 45°.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $60^\\circ + 75^\\circ + 45^\\circ = ?$",
   "answer": "180",
   "hint": "Jumlahkan.",
   "explain": "180°. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "$PQ = 5$ cm, $QR = 7$ cm, $\\angle P = 60^\\circ$, $\\angle R = 45^\\circ$."
}
```

### Contoh 2: Apakah dua persegi panjang sebangun?

```soal
{
 "title": "Apakah dua persegi panjang sebangun?",
 "text": "Persegi panjang I berukuran 4 cm × 6 cm, II berukuran 6 cm × 9 cm, III berukuran 6 cm × 8 cm. Mana yang sebangun dengan I?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Apakah syarat sudut terpenuhi untuk ketiganya?",
   "options": [
    "Ya, semua sudut 90°",
    "Tidak"
   ],
   "answer": "Ya, semua sudut 90°",
   "hint": "Sudut persegi panjang selalu siku-siku.",
   "explain": "Semua sudut 90°.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: I ke II, sisi pendek $\\frac{6}{4} = ?$",
   "answer": "1,5",
   "hint": "Bagi.",
   "explain": "1,5.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "I ke II, sisi panjang $\\frac{9}{6} = ?$",
   "answer": "1,5",
   "hint": "Bagi.",
   "explain": "1,5. Sama dengan sisi pendek, jadi I dan II sebangun.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "I ke III, sisi panjang $\\frac{8}{6}$, bulatkan ke 2 desimal.",
   "answer": "1,33",
   "hint": "8 ÷ 6.",
   "explain": "1,33, tidak sama dengan 1,5. I dan III tidak sebangun.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Kesimpulan?",
   "options": [
    "Hanya II",
    "Hanya III",
    "II dan III"
   ],
   "answer": "Hanya II",
   "hint": "Bandingkan perbandingan sisinya.",
   "explain": "Hanya II. Cek: zoom 150% mengubah 4 × 6 menjadi 6 × 9.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Hanya persegi panjang II yang sebangun dengan I.",
 "visual": {
  "type": "table",
  "head": [
   "Persegi panjang",
   "Sisi pendek",
   "Sisi panjang"
  ],
  "rows": [
   [
    "I",
    "4 cm",
    "6 cm"
   ],
   [
    "II",
    "6 cm",
    "9 cm"
   ],
   [
    "III",
    "6 cm",
    "8 cm"
   ]
  ]
 }
}
```

### Contoh 3: Mencari sisi yang hilang

```soal
{
 "title": "Mencari sisi yang hilang",
 "text": "Segiempat $ABCD \\sim PQRS$. Diketahui $AB = 6$ cm, $BC = 4$ cm, $PQ = 9$ cm, dan $RS = 12$ cm. Tentukan $QR$ dan $CD$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: $CD$ berpasangan dengan sisi apa?",
   "options": [
    "$RS$",
    "$QR$",
    "$SP$"
   ],
   "answer": "$RS$",
   "hint": "Huruf ke-3 dan ke-4.",
   "explain": "$CD \\leftrightarrow RS$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Faktor skala $k = \\frac{PQ}{AB}$.",
   "answer": "1,5",
   "hint": "9 ÷ 6.",
   "explain": "k = 1,5. PQRS adalah ABCD dengan zoom 150%.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $QR = k \\times BC$.",
   "answer": "6",
   "hint": "Dari kecil ke besar: kali k.",
   "explain": "1,5 × 4 = 6 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $CD = \\frac{RS}{k}$.",
   "answer": "8",
   "hint": "Dari besar ke kecil: bagi k.",
   "explain": "12 ÷ 1,5 = 8 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $\\frac{12}{8} = ?$",
   "answer": "1,5",
   "hint": "Perbandingannya harus sama dengan k.",
   "explain": "1,5. Semua perbandingan sama.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$QR = 6$ cm dan $CD = 8$ cm."
}
```

### Contoh 4: Soal cerita pembesaran foto

```soal
{
 "title": "Soal cerita pembesaran foto",
 "text": "Foto Made berukuran 4 cm × 6 cm dicetak ulang sehingga sisi 4 cm menjadi 10 cm, tanpa mengubah bentuk. Berapa panjang sisi lainnya? Berapa besar sudut di pojok foto baru?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: \"Tanpa mengubah bentuk\" artinya?",
   "options": [
    "Foto baru sebangun dengan foto lama",
    "Foto baru kongruen dengan foto lama",
    "Setiap sisi ditambah 6 cm"
   ],
   "answer": "Foto baru sebangun dengan foto lama",
   "hint": "Ukurannya berubah, bentuknya tidak.",
   "explain": "Sebangun.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Faktor skala $k = \\frac{10}{4}$.",
   "answer": "2,5",
   "hint": "Panjang baru dibagi panjang asli.",
   "explain": "k = 2,5, pembesaran.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Sisi lainnya?",
   "answer": "15",
   "hint": "6 × 2,5.",
   "explain": "15 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Sudut pojok foto baru?",
   "answer": "90",
   "hint": "Pembesaran tidak mengubah sudut.",
   "explain": "Tetap 90°.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $\\frac{15}{6} = ?$",
   "answer": "2,5",
   "hint": "Bandingkan dengan k.",
   "explain": "2,5. Sama, jadi sebangun.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Sisi lainnya 15 cm dan sudut pojok tetap 90°."
}
```

## Kesalahan yang sering terjadi

- **Salah memasangkan titik.** Dari $\triangle ABC \cong \triangle PQR$, menganggap $AB = QR$. Pasangan mengikuti urutan huruf: $AB$ dengan $PQ$. Tulis dulu $A \leftrightarrow P$, $B \leftrightarrow Q$, $C \leftrightarrow R$.
- **Mengalikan sudut dengan faktor skala.** Menganggap sudut $40^\circ$ menjadi $80^\circ$ saat diperbesar 2 kali. Mesin fotokopi tidak mengubah sudut, jadi tetap $40^\circ$.
- **Hanya memeriksa satu syarat.** Menyimpulkan dua bangun sebangun karena sudutnya sama (seperti persegi dan persegi panjang). Untuk segiempat dan bangun lain, periksa sudut **dan** perbandingan sisi.
- **Memakai selisih, bukan perbandingan.** Mengira 4 cm × 6 cm sebangun dengan 6 cm × 8 cm karena "keduanya ditambah 2". Sebangun berarti **dikali** angka yang sama, bukan ditambah.
- **Faktor skala terbalik.** Mengalikan $k$ ketika berpindah dari bangun besar ke kecil. Dari kecil ke besar, kali $k$; dari besar ke kecil, bagi $k$.

## Ringkasan

- **Kongruen** ($\cong$): bentuk dan ukuran sama; sudut dan sisi bersesuaian sama.
- **Sebangun** ($\sim$): sudut bersesuaian sama **dan** sisi bersesuaian sebanding.
- Faktor skala $k = \dfrac{\text{panjang baru}}{\text{panjang asli}}$; $k > 1$ pembesaran, $0 < k < 1$ pengecilan, $k = 1$ kongruen.
- Sudut tidak berubah oleh pembesaran atau pengecilan.
- Langkah: pasangkan titik → cari $k$ → kali atau bagi $k$ → cek perbandingan.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "$\\triangle KLM \\cong \\triangle XYZ$. Diketahui $KL = 8$ cm dan $\\angle M = 40^\\circ$. Tentukan $XY$ dan $\\angle Z$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$XY = ?$",
   "answer": "8",
   "hint": "XY berpasangan dengan KL.",
   "explain": "XY = 8 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "$\\angle Z = ?$",
   "answer": "40",
   "hint": "Z berpasangan dengan M.",
   "explain": "∠Z = 40°.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "$XY = 8$ cm, $\\angle Z = 40^\\circ$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Apakah persegi panjang 3 cm × 5 cm sebangun dengan persegi panjang 6 cm × 10 cm?",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\frac{6}{3} = ?$",
   "answer": "2",
   "hint": "Sisi pendek.",
   "explain": "6 ÷ 3 = 2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\frac{10}{5} = ?$",
   "answer": "2",
   "hint": "Sisi panjang.",
   "explain": "10 ÷ 5 = 2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Kesimpulan?",
   "options": [
    "Sebangun",
    "Tidak sebangun"
   ],
   "answer": "Sebangun",
   "hint": "Sudut sama; bandingkan kedua perbandingan.",
   "explain": "Sudut semua 90° dan perbandingannya sama, 2.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Ya, sebangun dengan faktor skala 2."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Apakah persegi panjang 5 cm × 8 cm sebangun dengan persegi panjang 10 cm × 14 cm?",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\frac{10}{5} = ?$",
   "answer": "2",
   "hint": "Sisi pendek.",
   "explain": "10 ÷ 5 = 2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\frac{14}{8} = ?$",
   "answer": "1,75",
   "hint": "Sisi panjang.",
   "explain": "1,75.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Kesimpulan?",
   "options": [
    "Tidak sebangun",
    "Sebangun"
   ],
   "answer": "Tidak sebangun",
   "hint": "Perbandingannya harus sama.",
   "explain": "2 ≠ 1,75, jadi tidak sebangun.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Tidak sebangun."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "$ABCD \\sim EFGH$. Diketahui $AB = 12$ cm, $EF = 8$ cm, dan $FG = 6$ cm. Tentukan $BC$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Faktor skala dari $EFGH$ ke $ABCD$: $\\frac{12}{8}$.",
   "answer": "1,5",
   "hint": "AB dibagi EF.",
   "explain": "1,5.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$BC = ?$",
   "answer": "9",
   "hint": "BC berpasangan dengan FG; kalikan dengan 1,5.",
   "explain": "1,5 × 6 = 9 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "$BC = 9$ cm."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Poster 60 cm × 90 cm diperkecil untuk brosur tanpa mengubah bentuk, sehingga sisi 60 cm menjadi 20 cm. Berapa panjang sisi lainnya, dan berapa faktor skalanya?",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Faktor skala $k = \\frac{20}{60}$ (paling sederhana).",
   "answer": {
    "num": 1,
    "den": 3
   },
   "hint": "Sederhanakan dengan membagi 20.",
   "explain": "$k = \\frac{1}{3}$, pengecilan.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Sisi lainnya?",
   "answer": "30",
   "hint": "90 × 1/3.",
   "explain": "30 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Sisi lainnya 30 cm, faktor skala $\\frac{1}{3}$."
}
```
