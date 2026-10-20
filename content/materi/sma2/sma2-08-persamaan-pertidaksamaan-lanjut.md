---
id: sma2-08-persamaan-pertidaksamaan-lanjut
judul: Persamaan dan Pertidaksamaan Lanjut
jenjang: sma2
moe: "H2 Mathematics 9758 · Pure Mathematics · Functions and Graphs (Equations and Inequalities)"
prasyarat: [sma1-06-diskriminan-pertidaksamaan-kuadrat, sma2-07-fungsi-transformasi]
durasi_menit: 75
---

## Kenapa belajar ini?

Banyak keputusan berbentuk pertidaksamaan: "biaya rata-rata harus di bawah Rp5.000", "selisih ukuran tidak boleh lebih dari 2 mm". Sistem tiga persamaan muncul saat kita punya tiga besaran yang tidak diketahui, misalnya harga tiga barang dari tiga nota belanja.

## Analogi

Bayangkan garis bilangan sebagai **jalan raya panjang** yang dibagi oleh beberapa **gerbang tol**. Di antara dua gerbang, "warna" jalan (tanda positif atau negatif sebuah ekspresi) **tidak pernah berubah**. Warna hanya bisa berganti tepat di gerbang.

Gerbang itu adalah **titik kritis**: tempat pembilang bernilai nol, penyebut bernilai nol, atau dua kurva berpotongan. Jadi untuk menyelesaikan pertidaksamaan, kita cukup:

1. menemukan semua gerbang,
2. memeriksa warna satu titik di setiap ruas jalan,
3. memilih ruas yang warnanya sesuai.

Gerbang yang berasal dari penyebut nol adalah **gerbang tertutup**: tidak pernah boleh dilewati sebagai jawaban.

```visual
{"type": "numberLine", "from": -4, "to": 6, "step": 1, "marks": [-1, 3], "caption": "Contoh: (x + 1)(x − 3) punya gerbang di −1 dan 3. Warnanya: + di kiri −1, − di antara gerbang, + di kanan 3."}
```

## Konsep

### Pertidaksamaan rasional

Bentuknya seperti $\dfrac{x + 3}{x - 2} \leq 2$. Aturan emas: **jangan mengalikan kedua ruas dengan penyebut yang tandanya belum diketahui**. Jika penyebut negatif, tanda pertidaksamaan harus dibalik, dan kita tidak tahu kapan itu terjadi.

Cara aman:

1. Pindahkan semua suku ke satu ruas sehingga ruas lain nol.
2. Satukan menjadi satu pecahan, lalu faktorkan pembilang dan penyebut.
3. Tandai titik kritis. Akar penyebut **selalu dikecualikan**.
4. Buat tabel tanda dan pilih ruas yang cocok.

Cara lain: kalikan kedua ruas dengan **kuadrat** penyebut, yang selalu positif, sehingga tanda tidak berubah.

### Pertidaksamaan nilai mutlak

$|x - a|$ adalah **jarak** antara $x$ dan $a$ pada garis bilangan. Untuk $b > 0$:
$$ |x - a| < b \iff a - b < x < a + b $$
$$ |x - a| > b \iff x < a - b \ \text{atau}\ x > a + b $$
Contoh: $|x - 5| < 2$ berarti jarak $x$ ke 5 kurang dari 2, jadi $3 < x < 7$.

```visual
{"type": "numberLine", "from": 0, "to": 10, "step": 1, "marks": [3, 5, 7], "jumps": [{"from": 5, "to": 7, "label": "2"}, {"from": 5, "to": 3, "label": "2"}], "caption": "|x − 5| < 2: semua titik yang jaraknya ke 5 kurang dari 2, yaitu 3 < x < 7."}
```

Jika kedua ruas nilai mutlak, seperti $|f(x)| \geq |g(x)|$, keduanya tak negatif, jadi **boleh dikuadratkan**: $f(x)^2 \geq g(x)^2$. Jika ruas kanan bukan nilai mutlak, pecah menjadi kasus $f(x) \geq 0$ dan $f(x) < 0$.

### Sistem persamaan linear tiga variabel

Tiga persamaan dengan tiga variabel $x, y, z$ diselesaikan dengan **eliminasi**:

1. Pilih dua pasang persamaan, eliminasi variabel yang sama dari keduanya. Hasilnya dua persamaan dua variabel.
2. Selesaikan sistem dua variabel itu.
3. Substitusi balik untuk mendapat variabel ketiga.
4. Cek ke **ketiga** persamaan asal.

```anim
{"type": "persamaan", "title": "Eliminasi: dari tiga variabel ke dua", "baris": [{"tex": "x + y + z = 6,\\quad 2x - y + z = 3,\\quad x + 2y - z = 2", "say": "Tiga persamaan, tiga bidang."}, {"tex": "(x + y + z) + (x + 2y - z) = 6 + 2 \\Rightarrow 2x + 3y = 8", "say": "Jumlahkan dua persamaan agar $z$ hilang.", "op": "(1) + (3)"}, {"tex": "(2x - y + z) + (x + 2y - z) = 3 + 2 \\Rightarrow 3x + y = 5", "say": "Pasangan lain, eliminasi $z$ lagi.", "op": "(2) + (3)"}, {"tex": "2x + 3y = 8,\\quad 3x + y = 5", "say": "Sekarang tinggal sistem dua variabel. (Selesaikan di Soal 4.)"}]}
```

Secara geometris, setiap persamaan adalah sebuah bidang. Jawaban tunggal adalah satu titik tempat ketiga bidang bertemu. Sistem bisa juga tidak punya jawaban atau punya tak hingga jawaban.

### Penyelesaian dengan grafik

Untuk $f(x) > g(x)$, gambar $y = f(x)$ dan $y = g(x)$. Jawabannya adalah nilai $x$ tempat grafik $f$ berada **di atas** grafik $g$. Titik potong kedua grafik adalah gerbang tol. Grafik memberi gambaran, lalu aljabar memberi nilai titik potong yang tepat. Di ujian H2, kalkulator grafik boleh dipakai untuk mencari titik potong yang sulit.

```anim
{"type": "grafik", "title": "Menyelesaikan x² < x + 2 dengan grafik", "xmin": -3, "xmax": 3.5, "ymin": -1, "ymax": 7, "kurva": [{"f": "x^2", "label": "y = x^2"}, {"f": "x+2", "label": "y = x + 2"}], "titik": [{"x": -1, "y": 1, "label": "(−1, 1)"}, {"x": 2, "y": 4, "label": "(2, 4)"}], "langkah": [{"say": "Gambar $y = x^2$.", "kurva": 1}, {"say": "Gambar $y = x + 2$.", "kurva": 2}, {"say": "Titik potong: $x^2 = x + 2$, yaitu $x = -1$ dan $x = 2$. Inilah gerbangnya.", "kurva": 2, "titik": 2}, {"say": "Parabola di bawah garis di antara gerbang, jadi $x^2 < x + 2$ untuk $-1 < x < 2$.", "kurva": 2, "titik": 2}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Pertidaksamaan rasional

```soal
{
 "title": "Contoh 1",
 "text": "Selesaikan $\\dfrac{x + 3}{x - 2} \\leq 2$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Kurangi 2 lalu satukan pecahannya.",
   "options": [
    "$\\frac{7 - x}{x - 2} \\leq 0$",
    "$\\frac{x + 7}{x - 2} \\leq 0$",
    "$\\frac{-x - 1}{x - 2} \\leq 0$"
   ],
   "answer": "$\\frac{7 - x}{x - 2} \\leq 0$",
   "hint": "$\\frac{x + 3 - 2(x - 2)}{x - 2}$. Hati-hati dengan $-2 \\times (-2)$.",
   "explain": "$x + 3 - 2x + 4 = 7 - x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Kalikan $-1$ agar koefisien $x$ positif.",
   "options": [
    "$\\frac{x - 7}{x - 2} \\geq 0$",
    "$\\frac{x - 7}{x - 2} \\leq 0$",
    "$\\frac{x + 7}{x - 2} \\geq 0$"
   ],
   "answer": "$\\frac{x - 7}{x - 2} \\geq 0$",
   "hint": "Mengalikan bilangan negatif membalik tanda pertidaksamaan.",
   "explain": "$\\leq$ menjadi $\\geq$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Gerbang mana yang boleh masuk jawaban?",
   "options": [
    "$x = 7$ boleh, $x = 2$ tertutup",
    "$x = 2$ boleh, $x = 7$ tertutup",
    "Keduanya boleh"
   ],
   "answer": "$x = 7$ boleh, $x = 2$ tertutup",
   "hint": "Penyebut tidak boleh nol.",
   "explain": "Di $x = 7$ pecahan bernilai 0 (memenuhi $\\geq 0$); di $x = 2$ tidak terdefinisi.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Tanda pecahan pada $2 < x < 7$?",
   "options": [
    "Negatif",
    "Positif",
    "Nol"
   ],
   "answer": "Negatif",
   "hint": "Di ruas ini $x - 7 < 0$ dan $x - 2 > 0$.",
   "explain": "Negatif dibagi positif: negatif. Di dua ruas lain positif.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Penyelesaiannya?",
   "options": [
    "$x < 2$ atau $x \\geq 7$",
    "$x \\leq 2$ atau $x \\geq 7$",
    "$2 < x \\leq 7$",
    "$x \\geq 7$"
   ],
   "answer": "$x < 2$ atau $x \\geq 7$",
   "hint": "Pilih ruas bertanda $+$ dan gerbang yang boleh.",
   "explain": "$x = 2$ dikecualikan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung $\\frac{x + 3}{x - 2}$ di $x = 7$.",
   "answer": "2",
   "hint": "$\\frac{10}{5}$.",
   "explain": "Nilainya 2, memenuhi $\\leq 2$. Uji $x = 0$: $-1{,}5 \\leq 2$, juga benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Penyelesaiannya $x < 2$ atau $x \\geq 7$.",
 "visual": {
  "type": "table",
  "head": [
   "",
   "x < 2",
   "2 < x < 7",
   "x > 7"
  ],
  "rows": [
   [
    "x − 7",
    "−",
    "−",
    "+"
   ],
   [
    "x − 2",
    "−",
    "+",
    "+"
   ],
   [
    "pecahan",
    "?",
    "?",
    "?"
   ]
  ]
 }
}
```

### Contoh 2: Dua nilai mutlak

```soal
{
 "title": "Contoh 2",
 "text": "Selesaikan $|2x - 3| \\geq |x + 1|$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Mengapa boleh menguadratkan kedua ruas?",
   "options": [
    "Kedua ruas tak negatif",
    "Semua pertidaksamaan boleh dikuadratkan",
    "Karena ada tanda $\\geq$"
   ],
   "answer": "Kedua ruas tak negatif",
   "hint": "Kuadrat menjaga urutan hanya untuk bilangan tak negatif.",
   "explain": "Nilai mutlak selalu $\\geq 0$, jadi aman.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Setelah dikuadratkan dan disederhanakan?",
   "options": [
    "$3x^2 - 14x + 8 \\geq 0$",
    "$3x^2 - 10x + 8 \\geq 0$",
    "$5x^2 - 10x + 10 \\geq 0$"
   ],
   "answer": "$3x^2 - 14x + 8 \\geq 0$",
   "hint": "$4x^2 - 12x + 9 \\geq x^2 + 2x + 1$.",
   "explain": "$3x^2 - 14x + 8 \\geq 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Faktorkan.",
   "options": [
    "$(3x - 2)(x - 4)$",
    "$(3x + 2)(x + 4)$",
    "$(3x - 4)(x - 2)$"
   ],
   "answer": "$(3x - 2)(x - 4)$",
   "hint": "Cari faktor yang hasil kalinya $3x^2 + 8$ dan suku tengah $-14x$.",
   "explain": "Gerbang $x = \\frac{2}{3}$ dan $x = 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Penyelesaiannya?",
   "options": [
    "$x \\leq \\frac{2}{3}$ atau $x \\geq 4$",
    "$\\frac{2}{3} \\leq x \\leq 4$",
    "$x \\geq 4$"
   ],
   "answer": "$x \\leq \\frac{2}{3}$ atau $x \\geq 4$",
   "hint": "Parabola terbuka ke atas: positif di luar akar-akarnya.",
   "explain": "Di luar kedua gerbang, gerbang ikut karena $\\geq$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: untuk $x = 5$, hitung $|2x - 3|$.",
   "answer": "7",
   "hint": "$|10 - 3|$.",
   "explain": "$7 \\geq |5 + 1| = 6$, benar. Untuk $x = 1$: $1 \\geq 2$ salah, dan 1 memang di antara gerbang.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Penyelesaiannya $x \\leq \\frac{2}{3}$ atau $x \\geq 4$."
}
```

### Contoh 3: Penyelesaian dengan grafik

```soal
{
 "title": "Contoh 3",
 "text": "Selesaikan $|x^2 - 4| < 3x$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Bentuk grafik $y = |x^2 - 4|$?",
   "options": [
    "Seperti huruf W, puncak lokal $(0, 4)$",
    "Parabola terbuka ke bawah",
    "Seperti huruf V"
   ],
   "answer": "Seperti huruf W, puncak lokal $(0, 4)$",
   "hint": "Bagian parabola antara $-2$ dan $2$ dicerminkan ke atas.",
   "explain": "Lembah $(0, -4)$ menjadi puncak lokal $(0, 4)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Di mana garis $y = 3x$ bisa berada di atas W?",
   "options": [
    "Hanya di $x > 0$",
    "Hanya di $x < 0$",
    "Di mana saja"
   ],
   "answer": "Hanya di $x > 0$",
   "hint": "Untuk $x \\leq 0$, $3x \\leq 0$ sedangkan W tak negatif.",
   "explain": "Potongan hanya di $x > 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Bagian cermin: $4 - x^2 = 3x$. Akar yang berada di $0 < x < 2$?",
   "answer": "1",
   "hint": "$x^2 + 3x - 4 = (x + 4)(x - 1)$.",
   "explain": "$x = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Bagian asli: $x^2 - 4 = 3x$. Akar yang berada di $x > 2$?",
   "answer": "4",
   "hint": "$x^2 - 3x - 4 = (x - 4)(x + 1)$.",
   "explain": "$x = 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Penyelesaiannya?",
   "options": [
    "$1 < x < 4$",
    "$x < 1$ atau $x > 4$",
    "$1 \\leq x \\leq 4$"
   ],
   "answer": "$1 < x < 4$",
   "hint": "Garis di atas W di antara kedua titik potong; tanda $<$ tegas.",
   "explain": "Di antara gerbang, gerbang tidak ikut.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung $|x^2 - 4|$ di $x = 2$.",
   "answer": "0",
   "hint": "$|4 - 4|$.",
   "explain": "$0 < 6$, benar. Di $x = 5$: $21 < 15$ salah. Sesuai.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Penyelesaiannya $1 < x < 4$."
}
```

### Contoh 4: Tiga nota belanja

```soal
{
 "title": "Contoh 4",
 "text": "Di toko bahan kue di Denpasar, Siti membeli 2 kg tepung, 1 kg gula, 1 kg mentega seharga Rp67.000. Putu membeli 1 kg tepung, 2 kg gula, 2 kg mentega seharga Rp98.000. Made membeli 3 kg tepung, 1 kg gula, 2 kg mentega seharga Rp107.000. Tentukan harga per kg masing-masing (dalam ribuan rupiah: tepung $x$, gula $y$, mentega $z$).",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: $2 \\times (1) - (2)$ menghapus $y$ dan $z$ sekaligus. $3x = ?$",
   "answer": "36",
   "hint": "$2 \\times 67 - 98$.",
   "explain": "$134 - 98 = 36$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Berapa $x$?",
   "answer": "12",
   "hint": "Bagi dengan 3.",
   "explain": "Tepung Rp12.000 per kg.",
   "error": "salah-langkah-materi",
   "suffix": "ribu"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $(3) - (1)$ memberi $x + z = 40$. Berapa $z$?",
   "answer": "28",
   "hint": "Substitusi $x = 12$.",
   "explain": "Mentega Rp28.000 per kg.",
   "error": "salah-langkah-materi",
   "suffix": "ribu"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Substitusi ke (1): $24 + y + 28 = 67$. Berapa $y$?",
   "answer": "15",
   "hint": "$67 - 52$.",
   "explain": "Gula Rp15.000 per kg.",
   "error": "salah-langkah-materi",
   "suffix": "ribu"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: nota Putu $12 + 2(15) + 2(28) = ?$",
   "answer": "98",
   "hint": "$12 + 30 + 56$.",
   "explain": "Hasilnya 98, dan nota Made $36 + 15 + 56 = 107$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Tepung Rp12.000/kg, gula Rp15.000/kg, mentega Rp28.000/kg.",
 "visual": {
  "type": "table",
  "head": [
   "Nota",
   "Tepung (kg)",
   "Gula (kg)",
   "Mentega (kg)",
   "Total"
  ],
  "rows": [
   [
    "(1) Siti",
    "2",
    "1",
    "1",
    "Rp67.000"
   ],
   [
    "(2) Putu",
    "1",
    "2",
    "2",
    "Rp98.000"
   ],
   [
    "(3) Made",
    "3",
    "1",
    "2",
    "Rp107.000"
   ]
  ]
 }
}
```

## Kesalahan yang sering terjadi

- **Mengalikan silang penyebut.** Dari $\frac{x + 3}{x - 2} \leq 2$ langsung menulis $x + 3 \leq 2(x - 2)$, sehingga $x \geq 7$. Jawaban $x < 2$ hilang karena saat $x - 2 < 0$ tanda harus dibalik. Selalu nolkan ruas kanan dulu.
- **Memasukkan akar penyebut.** Menulis $x \leq 2$ pada Contoh 1. Di $x = 2$ pecahan tidak terdefinisi, jadi gerbang itu selalu tertutup.
- **Salah arti nilai mutlak.** Dari $|x - 5| > 2$ menulis $3 < x < 7$. Itu kebalikannya. "Jarak lebih dari 2" berarti $x < 3$ atau $x > 7$.
- **Menguadratkan saat satu ruas bisa negatif.** Pada $|x^2 - 4| < 3x$, ruas kanan bisa negatif, jadi kuadratkan langsung berisiko. Pakai kasus atau grafik.
- **Tidak mengecek ke semua persamaan.** Pada sistem tiga variabel, jawaban yang cocok di dua persamaan belum tentu cocok di yang ketiga.

## Ringkasan

- Pertidaksamaan rasional: nolkan satu ruas, jadikan satu pecahan, cari titik kritis, buat tabel tanda. Akar penyebut selalu dikecualikan.
- $|x - a| < b \iff a - b < x < a + b$; $|x - a| > b \iff x < a - b$ atau $x > a + b$.
- Dua ruas nilai mutlak boleh dikuadratkan; selain itu pakai kasus atau grafik.
- Sistem tiga variabel: eliminasi menjadi dua variabel, selesaikan, substitusi balik, cek ketiga persamaan.
- Secara grafik, $f(x) > g(x)$ adalah bagian $x$ tempat kurva $f$ di atas kurva $g$; batasnya titik potong.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Selesaikan $\\dfrac{x - 1}{x + 4} > 0$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Titik kritisnya?",
   "options": [
    "$x = 1$ dan $x = -4$",
    "$x = -1$ dan $x = 4$",
    "$x = 1$ saja"
   ],
   "answer": "$x = 1$ dan $x = -4$",
   "hint": "Pembilang nol dan penyebut nol.",
   "explain": "$-4$ selalu dikecualikan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Penyelesaiannya?",
   "options": [
    "$x < -4$ atau $x > 1$",
    "$-4 < x < 1$",
    "$x \\leq -4$ atau $x \\geq 1$"
   ],
   "answer": "$x < -4$ atau $x > 1$",
   "hint": "Uji $x = 0$: $\\frac{-1}{4}$ negatif.",
   "explain": "Positif di luar kedua titik kritis.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x < -4$ atau $x > 1$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Selesaikan $|3x - 2| \\leq 7$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Ubah menjadi pertidaksamaan ganda.",
   "options": [
    "$-7 \\leq 3x - 2 \\leq 7$",
    "$3x - 2 \\leq -7$ atau $3x - 2 \\geq 7$",
    "$3x - 2 \\leq 7$ saja"
   ],
   "answer": "$-7 \\leq 3x - 2 \\leq 7$",
   "hint": "\"Jarak kurang dari atau sama dengan\" berarti terjepit.",
   "explain": "Lalu tambah 2: $-5 \\leq 3x \\leq 9$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Penyelesaiannya?",
   "options": [
    "$-\\frac{5}{3} \\leq x \\leq 3$",
    "$-3 \\leq x \\leq \\frac{5}{3}$",
    "$x \\leq -\\frac{5}{3}$ atau $x \\geq 3$"
   ],
   "answer": "$-\\frac{5}{3} \\leq x \\leq 3$",
   "hint": "Bagi setiap ruas dengan 3.",
   "explain": "Terjepit di antara $-\\frac{5}{3}$ dan 3.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$-\\frac{5}{3} \\leq x \\leq 3$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Selesaikan $\\dfrac{2x}{x - 3} \\geq 1$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Setelah dikurangi 1 dan disatukan?",
   "options": [
    "$\\frac{x + 3}{x - 3} \\geq 0$",
    "$\\frac{x - 3}{x - 3} \\geq 0$",
    "$\\frac{3x - 3}{x - 3} \\geq 0$"
   ],
   "answer": "$\\frac{x + 3}{x - 3} \\geq 0$",
   "hint": "$\\frac{2x - (x - 3)}{x - 3}$.",
   "explain": "$2x - x + 3 = x + 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Penyelesaiannya?",
   "options": [
    "$x \\leq -3$ atau $x > 3$",
    "$x \\leq -3$ atau $x \\geq 3$",
    "$-3 \\leq x < 3$"
   ],
   "answer": "$x \\leq -3$ atau $x > 3$",
   "hint": "Gerbang $3$ tertutup.",
   "explain": "Positif di luar gerbang; $-3$ ikut, $3$ tidak.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x \\leq -3$ atau $x > 3$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Selesaikan sistem $x + y + z = 6$, $2x - y + z = 3$, $x + 2y - z = 2$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Dari (1) + (3): $2x + 3y = 8$, dan dari (2) + (3): $3x + y = 5$. Berapa $x$?",
   "answer": "1",
   "hint": "Kalikan $3x + y = 5$ dengan 3, lalu kurangkan $2x + 3y = 8$.",
   "explain": "$9x - 2x = 15 - 8$, jadi $x = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Berapa $y$?",
   "answer": "2",
   "hint": "Substitusi ke $3x + y = 5$.",
   "explain": "$y = 5 - 3 = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Berapa $z$?",
   "answer": "3",
   "hint": "Substitusi ke persamaan (1).",
   "explain": "$z = 6 - 1 - 2 = 3$. Cek (2): $2 - 2 + 3 = 3$. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x = 1$, $y = 2$, $z = 3$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Selesaikan $|x + 1| > 2x - 4$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Kasus $x \\geq -1$: $x + 1 > 2x - 4$ memberi $x < ?$",
   "answer": "5",
   "hint": "Pindahkan $x$ ke kanan.",
   "explain": "$5 > x$. Jadi $-1 \\leq x < 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Kasus $x < -1$: $-x - 1 > 2x - 4$ memberi $x < 1$. Bagian mana yang memenuhi?",
   "options": [
    "Semua $x < -1$",
    "Tidak ada",
    "$-1 < x < 1$"
   ],
   "answer": "Semua $x < -1$",
   "hint": "Gabungkan syarat kasus dengan hasil $x < 1$.",
   "explain": "Setiap $x < -1$ juga $< 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Gabungan penyelesaiannya?",
   "options": [
    "$x < 5$",
    "$-1 \\leq x < 5$",
    "$x < 1$"
   ],
   "answer": "$x < 5$",
   "hint": "Gabungkan kedua kasus.",
   "explain": "Semua $x < -1$ ditambah $-1 \\leq x < 5$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Penyelesaiannya $x < 5$."
}
```
