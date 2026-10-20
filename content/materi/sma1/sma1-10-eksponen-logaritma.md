---
id: sma1-10-eksponen-logaritma
judul: Fungsi Eksponen dan Logaritma
jenjang: sma1
moe: "Additional Mathematics · A6 Exponential and logarithmic functions"
prasyarat: [smp3-01-bentuk-baku-eksponen, smp3-02-persamaan-kuadrat-lanjut]
durasi_menit: 75
---

## Kenapa belajar ini?

Pertumbuhan bakteri, bunga majemuk, jumlah penduduk, dan peluruhan obat dalam darah semuanya berubah secara eksponensial. Fungsi eksponen menjawab "berapa banyak setelah sekian waktu". Logaritma menjawab kebalikannya: "berapa lama sampai mencapai sekian".

## Analogi

Bayangkan **satu bakteri** di laboratorium sekolah yang membelah menjadi dua setiap jam.

- Setelah $x$ jam, jumlahnya $2^x$. Ini **fungsi eksponen**: kita tahu waktu, mencari jumlah.
- Pertanyaan sebaliknya: "Berapa jam sampai ada 1.024 bakteri?" Jawabannya 10, karena $2^{10} = 1.024$. Ini **logaritma**: $\log_2 1.024 = 10$. Kita tahu jumlah, mencari waktu.

```visual
{"type": "barChart", "scaleStep": 8, "max": 32, "title": "Bakteri membelah setiap jam", "unit": "bakteri", "bars": [{"label": "jam ke-0", "value": 1}, {"label": "jam ke-1", "value": 2}, {"label": "jam ke-2", "value": 4}, {"label": "jam ke-3", "value": 8}, {"label": "jam ke-4", "value": 16}, {"label": "jam ke-5", "value": 32}], "caption": "Eksponen: tahu jam, cari jumlah (2^x). Logaritma: tahu jumlah, cari jam (log₂ 32 = 5)."}
```

Jadi logaritma adalah **penghitung banyaknya penggandaan**. Analogi ini akan menjelaskan semua sifat logaritma.

## Konsep

### Fungsi eksponen $y = a^x$

Untuk $a > 0$ dan $a \ne 1$, fungsi $y = a^x$ berlaku untuk semua $x$ real. Sifat grafiknya:

- Selalu melalui $(0, 1)$, karena $a^0 = 1$.
- Selalu di atas sumbu $x$: $a^x > 0$. Sumbu $x$ ($y = 0$) adalah asimtot.
- Jika $a > 1$, grafik naik (pertumbuhan). Jika $0 < a < 1$, grafik turun (peluruhan).

```visual
{"type": "table", "head": ["x", "-2", "-1", "0", "1", "2", "3"], "rows": [["2^x", "0,25", "0,5", "1", "2", "4", "8"], ["(1/2)^x", "4", "2", "1", "0,5", "0,25", "0,125"]]}
```

```anim
{"type": "grafik", "title": "Pertumbuhan dan peluruhan", "xmin": -3, "xmax": 3.5, "ymin": -1, "ymax": 9, "kurva": [{"f": "2^x", "label": "y = 2^x"}, {"f": "(1/2)^x", "label": "y = \\left(\\tfrac{1}{2}\\right)^x"}], "titik": [{"x": 0, "y": 1, "label": "(0, 1)"}, {"x": 3, "y": 8}, {"x": -3, "y": 8}], "garis": [{"y": 0}], "langkah": [{"say": "$y = 2^x$ naik: setiap langkah ke kanan, nilainya dua kali lipat.", "kurva": 1, "titik": 0, "garis": 0}, {"say": "$y = (\\frac{1}{2})^x$ turun: setiap langkah ke kanan, nilainya separuh.", "kurva": 2, "titik": 0, "garis": 0}, {"say": "Keduanya melalui $(0, 1)$ karena $a^0 = 1$.", "kurva": 2, "titik": 1, "garis": 0}, {"say": "Keduanya tidak pernah menyentuh sumbu $x$: $y = 0$ adalah asimtot.", "kurva": 2, "titik": 3, "garis": 1}]}
```

### Bilangan $e$ dan fungsi $e^x$

Simpan Rp1 dengan bunga 100% per tahun. Jika bunga dihitung $n$ kali setahun, saldo akhir tahun $\left(1 + \frac{1}{n}\right)^n$. Untuk $n = 12$ hasilnya 2,6130; untuk $n = 365$ hasilnya 2,7146. Makin besar $n$, nilainya mendekati bilangan tetap:

$$
e = 2{,}71828\ldots
$$

Fungsi $y = e^x$ disebut fungsi eksponen alami. Grafiknya naik, melalui $(0, 1)$, dengan asimtot $y = 0$.

### Logaritma

**Definisi.** Untuk $a > 0$, $a \ne 1$, dan $x > 0$:

$$
y = \log_a x \iff a^y = x
$$

Di buku Indonesia, $\log_a x$ juga ditulis ${}^a\!\log x$. Dua basis khusus: $\lg x = \log_{10} x$ dan $\ln x = \log_e x$ (logaritma alami).

Grafik $y = \log_a x$ adalah pencerminan $y = a^x$ terhadap garis $y = x$. Jadi:

- Hanya terdefinisi untuk $x > 0$ (jumlah bakteri harus positif).
- Melalui $(1, 0)$, karena $a^0 = 1$.
- Sumbu $y$ ($x = 0$) adalah asimtot.
- Untuk $a > 1$ (termasuk $\ln x$), grafik naik, tetapi makin lama makin landai.

```anim
{"type": "grafik", "title": "Logaritma adalah cermin eksponen", "xmin": -3, "xmax": 8, "ymin": -3, "ymax": 8, "kurva": [{"f": "2^x", "label": "y = 2^x"}, {"f": "x", "label": "y = x", "warna": "#94a3b8"}, {"f": "ln(x)/ln(2)", "label": "y = \\log_2 x"}], "titik": [{"x": 0, "y": 1, "label": "(0, 1)"}, {"x": 1, "y": 0, "label": "(1, 0)"}, {"x": 2, "y": 4, "label": "(2, 4)"}, {"x": 4, "y": 2, "label": "(4, 2)"}], "garis": [{"x": 0}], "langkah": [{"say": "Grafik $y = 2^x$ melalui $(0, 1)$ dan $(2, 4)$.", "kurva": 1, "titik": 0, "garis": 0}, {"say": "Garis cermin $y = x$.", "kurva": 2, "titik": 0, "garis": 0}, {"say": "Tukar $x$ dan $y$: $(0, 1)$ menjadi $(1, 0)$, $(2, 4)$ menjadi $(4, 2)$. Inilah $y = \\log_2 x$.", "kurva": 3, "titik": 4, "garis": 0}, {"say": "Logaritma hanya ada untuk $x > 0$; sumbu $y$ adalah asimtotnya.", "kurva": 3, "titik": 4, "garis": 1}]}
```

### Sifat-sifat logaritma

Dari $a^0 = 1$ dan $a^1 = a$: $\log_a 1 = 0$ dan $\log_a a = 1$.

**Hukum perkalian.** Misalkan $\log_a x = p$ dan $\log_a y = q$, jadi $x = a^p$ dan $y = a^q$. Maka $xy = a^{p+q}$, sehingga

$$
\log_a (xy) = \log_a x + \log_a y
$$

```anim
{"type": "persamaan", "title": "Hukum perkalian dengan bakteri", "baris": [{"tex": "\\log_2 (8 \\times 4)", "say": "Berapa kali menggandakan untuk mencapai $8 \\times 4 = 32$?"}, {"tex": "= \\log_2 8 + \\log_2 4", "say": "Gandakan 3 kali (sampai 8), lalu 2 kali lagi (kali 4).", "op": "hukum perkalian"}, {"tex": "= 3 + 2 = 5", "say": "Total 5 kali penggandaan.", "op": "hitung"}, {"tex": "2^5 = 32", "say": "Cek: $2^5 = 32$. Cocok."}]}
```

Dalam analogi: menggandakan $p$ kali lalu $q$ kali sama dengan menggandakan $p + q$ kali. Dengan cara sama:

$$
\log_a \frac{x}{y} = \log_a x - \log_a y, \qquad \log_a x^k = k \log_a x
$$

### Perubahan basis

Misalkan $y = \log_a x$, jadi $a^y = x$. Ambil $\log_b$ kedua ruas: $y \log_b a = \log_b x$. Maka

$$
\log_a x = \frac{\log_b x}{\log_b a}
$$

Rumus ini membuat kita bisa menghitung logaritma basis apa pun dengan tombol $\ln$ atau $\log$ di kalkulator.

### Menyelesaikan persamaan

- **Basis bisa disamakan:** $a^{f(x)} = a^{g(x)} \Rightarrow f(x) = g(x)$.
- **Basis tidak bisa disamakan:** ambil logaritma kedua ruas.
- **Bentuk kuadrat terselubung:** misalnya $3^{2x} = (3^x)^2$. Misalkan $u = 3^x$ (ingat $u > 0$).
- **Persamaan logaritma:** gabungkan dengan sifat logaritma, ubah ke bentuk eksponen, lalu **cek** bahwa semua bilangan di dalam log positif.

### Model pertumbuhan dan peluruhan

Bentuk umum: $N = N_0 e^{kt}$ atau $N = N_0 a^t$. $N_0$ adalah nilai awal (saat $t = 0$). Jika $k > 0$ (atau $a > 1$), terjadi pertumbuhan. Jika $k < 0$ (atau $0 < a < 1$), terjadi peluruhan. Waktu paruh peluruhan $N_0 e^{-\lambda t}$ adalah $\frac{\ln 2}{\lambda}$.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menyederhanakan logaritma

```soal
{
 "title": "Contoh 1",
 "text": "Hitung $2\\log_3 6 - \\log_3 4$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Hukum pangkat. $2\\log_3 6$ = ...",
   "options": [
    "$\\log_3 36$",
    "$\\log_3 12$",
    "$\\log_3 8$"
   ],
   "answer": "$\\log_3 36$",
   "hint": "$k\\log_a x = \\log_a x^k$.",
   "explain": "$\\log_3 6^2 = \\log_3 36$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Hukum pembagian. $\\log_3 36 - \\log_3 4$ = ...",
   "options": [
    "$\\log_3 9$",
    "$\\log_3 32$",
    "$\\frac{\\log_3 36}{\\log_3 4}$"
   ],
   "answer": "$\\log_3 9$",
   "hint": "Selisih log menjadi log hasil bagi.",
   "explain": "$\\log_3 \\frac{36}{4} = \\log_3 9$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\log_3 9$ = ?",
   "answer": "2",
   "hint": "3 dipangkatkan berapa menjadi 9?",
   "explain": "$3^2 = 9$, jadi 2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $2(1{,}6309) - 1{,}2619$ = ? (4 desimal)",
   "answer": "1,9999",
   "hint": "$\\log_3 6 \\approx 1{,}6309$ dan $\\log_3 4 \\approx 1{,}2619$ (perubahan basis).",
   "explain": "$\\approx 2$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$2\\log_3 6 - \\log_3 4 = 2$."
}
```

### Contoh 2: Persamaan eksponen bentuk kuadrat

```soal
{
 "title": "Contoh 2",
 "text": "Selesaikan $3^{2x} - 4 \\cdot 3^x + 3 = 0$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Misalkan $u = 3^x$. Persamaannya menjadi ...",
   "options": [
    "$u^2 - 4u + 3 = 0$",
    "$2u - 4u + 3 = 0$",
    "$u^2 - 4u = 0$"
   ],
   "answer": "$u^2 - 4u + 3 = 0$",
   "hint": "$3^{2x} = (3^x)^2$.",
   "explain": "$3^{2x} = u^2$, dengan $u > 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Nilai $u$ ...",
   "options": [
    "$u = 1$ atau $u = 3$",
    "$u = -1$ atau $u = -3$",
    "$u = 1$ saja"
   ],
   "answer": "$u = 1$ atau $u = 3$",
   "hint": "Faktorkan $(u - 1)(u - 3)$.",
   "explain": "Keduanya positif, jadi sah.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $3^x = 1$, jadi $x$ = ?",
   "answer": "0",
   "hint": "$a^0 = 1$.",
   "explain": "$x = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$3^x = 3$, jadi $x$ = ?",
   "answer": "1",
   "hint": "$3^1 = 3$.",
   "explain": "$x = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: substitusi $x = 1$, $9 - 12 + 3$ = ?",
   "answer": "0",
   "hint": "Hitung biasa.",
   "explain": "0. Untuk $x = 0$: $1 - 4 + 3 = 0$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x = 0$ atau $x = 1$."
}
```

### Contoh 3: Persamaan logaritma

```soal
{
 "title": "Contoh 3",
 "text": "Selesaikan $\\log_2(x + 2) + \\log_2(x - 2) = 5$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Gabungkan dengan hukum perkalian.",
   "options": [
    "$\\log_2[(x + 2)(x - 2)] = 5$",
    "$\\log_2(2x) = 5$",
    "$\\log_2(x + 2)(x - 2) = 10$"
   ],
   "answer": "$\\log_2[(x + 2)(x - 2)] = 5$",
   "hint": "Jumlah log = log hasil kali.",
   "explain": "$\\log_2[(x + 2)(x - 2)] = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Ubah ke bentuk eksponen: $x^2 - 4 = 2^5$. Berapa $x^2$?",
   "answer": "36",
   "hint": "$2^5 = 32$.",
   "explain": "$x^2 = 32 + 4 = 36$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Nilai $x$ ...",
   "options": [
    "$x = 6$ atau $x = -6$",
    "$x = 6$ saja",
    "$x = 18$"
   ],
   "answer": "$x = 6$ atau $x = -6$",
   "hint": "Bilangan yang kuadratnya 36 ada dua.",
   "explain": "$x = \\pm 6$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Syarat log: $x + 2 > 0$ dan $x - 2 > 0$. Maka ...",
   "options": [
    "$x = -6$ ditolak",
    "$x = 6$ ditolak",
    "Keduanya diterima"
   ],
   "answer": "$x = -6$ ditolak",
   "hint": "Bilangan di dalam log harus positif.",
   "explain": "Perlu $x > 2$, jadi $x = -6$ ditolak.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $x = 6$ memberi $\\log_2 8 + \\log_2 4$ = ?",
   "answer": "5",
   "hint": "$2^3 = 8$, $2^2 = 4$.",
   "explain": "$3 + 2 = 5$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x = 6$."
}
```

### Contoh 4: Soal cerita, obat dalam darah

```soal
{
 "title": "Contoh 4",
 "text": "Setelah Pak Wayan minum obat, massa obat dalam darahnya $t$ jam kemudian adalah $M = 400e^{-0{,}2t}$ mg. (a) Berapa massa obat setelah 3 jam? (b) Kapan massa obat tinggal 100 mg?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Massa awal ($t = 0$) = ?",
   "answer": "400",
   "hint": "$e^0 = 1$.",
   "explain": "400 mg. Eksponen negatif berarti peluruhan.",
   "error": "salah-langkah-materi",
   "suffix": "mg"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $e^{-0{,}6}$ = ? (4 desimal)",
   "answer": "0,5488",
   "hint": "Pakai tombol $e^x$ di kalkulator.",
   "explain": "$e^{-0{,}6} \\approx 0{,}5488$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Massa setelah 3 jam = ? (1 desimal)",
   "answer": "219,5",
   "hint": "$400 \\times 0{,}5488$.",
   "explain": "$\\approx 219{,}5$ mg.",
   "error": "salah-langkah-materi",
   "suffix": "mg"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Persamaan untuk (b) ...",
   "options": [
    "$e^{-0{,}2t} = 0{,}25$",
    "$e^{-0{,}2t} = 4$",
    "$e^{-0{,}2t} = 300$"
   ],
   "answer": "$e^{-0{,}2t} = 0{,}25$",
   "hint": "Bagi kedua ruas $400e^{-0{,}2t} = 100$ dengan 400.",
   "explain": "$\\frac{100}{400} = 0{,}25$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $-0{,}2t = \\ln 0{,}25 \\approx -1{,}3863$. $t$ = ? (2 desimal)",
   "answer": "6,93",
   "hint": "Bagi $-1{,}3863$ dengan $-0{,}2$.",
   "explain": "$t \\approx 6{,}93$ jam.",
   "error": "salah-langkah-materi",
   "suffix": "jam"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: waktu paruh $\\frac{\\ln 2}{0{,}2}$ = ? (2 desimal)",
   "answer": "3,47",
   "hint": "$\\ln 2 \\approx 0{,}6931$.",
   "explain": "400 ke 100 mg adalah dua kali paruh: $2 \\times 3{,}47 \\approx 6{,}93$ jam. Cocok.",
   "error": "salah-langkah-materi",
   "suffix": "jam"
  }
 ],
 "conclusion": "(a) Sekitar 219,5 mg; (b) sekitar 6,93 jam."
}
```

## Kesalahan yang sering terjadi

- **Memecah log penjumlahan.** Menulis $\log(x + y) = \log x + \log y$. Hukum perkalian berlaku untuk $\log(xy)$, bukan $\log(x + y)$.
- **Salah membagi log.** Menulis $\frac{\log_a x}{\log_a y} = \log_a \frac{x}{y}$. Yang benar $\log_a x - \log_a y = \log_a \frac{x}{y}$. Bentuk $\frac{\log_a x}{\log_a y}$ sama dengan $\log_y x$.
- **Tidak mengecek syarat.** Jawaban yang membuat bilangan di dalam log nol atau negatif harus ditolak, seperti $x = -6$ pada contoh 3.
- **Menerima $a^x$ negatif.** Pada substitusi $u = 3^x$, nilai $u \le 0$ harus ditolak, karena $3^x$ selalu positif.
- **Salah memindahkan pangkat.** $\log_a x^2 = 2\log_a x$, tetapi $(\log_a x)^2 \ne 2\log_a x$.

## Ringkasan

- $y = \log_a x \iff a^y = x$; logaritma menghitung "berapa kali dikalikan".
- Grafik $a^x$ melalui $(0, 1)$ dengan asimtot $y = 0$; grafik $\log_a x$ melalui $(1, 0)$ dengan asimtot $x = 0$; keduanya cermin terhadap $y = x$.
- $\log_a(xy) = \log_a x + \log_a y$, $\log_a \frac{x}{y} = \log_a x - \log_a y$, $\log_a x^k = k\log_a x$.
- Perubahan basis: $\log_a x = \frac{\log_b x}{\log_b a}$.
- Model $N = N_0 e^{kt}$: tumbuh jika $k > 0$, meluruh jika $k < 0$.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung $\\log_4 64$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "$\\log_4 64 = y$ berarti ...",
   "options": [
    "$4^y = 64$",
    "$64^y = 4$",
    "$y^4 = 64$"
   ],
   "answer": "$4^y = 64$",
   "hint": "Ubah ke bentuk eksponen.",
   "explain": "$4^y = 64$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$y$ = ?",
   "answer": "3",
   "hint": "$4 \\times 4 \\times 4$.",
   "explain": "$4^3 = 64$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\log_4 64 = 3$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Sederhanakan $\\lg 5 + \\lg 8 - \\lg 4$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Gabungkan menjadi satu log.",
   "options": [
    "$\\lg \\frac{5 \\times 8}{4}$",
    "$\\lg (5 + 8 - 4)$",
    "$\\lg \\frac{5 + 8}{4}$"
   ],
   "answer": "$\\lg \\frac{5 \\times 8}{4}$",
   "hint": "Jumlah menjadi kali, selisih menjadi bagi.",
   "explain": "$\\lg 10$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\lg 10$ = ?",
   "answer": "1",
   "hint": "$10^1 = 10$.",
   "explain": "$\\lg 10 = 1$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Hasilnya 1."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Selesaikan $2^{x+1} = 7$, sampai 3 angka desimal.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Ambil log kedua ruas.",
   "options": [
    "$x + 1 = \\frac{\\ln 7}{\\ln 2}$",
    "$x + 1 = \\frac{7}{2}$",
    "$x + 1 = \\ln 7 - \\ln 2$"
   ],
   "answer": "$x + 1 = \\frac{\\ln 7}{\\ln 2}$",
   "hint": "$(x + 1)\\ln 2 = \\ln 7$.",
   "explain": "$x + 1 = \\log_2 7 = \\frac{\\ln 7}{\\ln 2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\frac{\\ln 7}{\\ln 2}$ = ? (3 desimal)",
   "answer": "2,807",
   "hint": "$\\ln 7 \\approx 1{,}9459$, $\\ln 2 \\approx 0{,}6931$.",
   "explain": "$\\approx 2{,}807$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$x$ = ? (3 desimal)",
   "answer": "1,807",
   "hint": "Kurangi 1.",
   "explain": "$x \\approx 1{,}807$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x \\approx 1{,}807$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Selesaikan $\\lg x + \\lg(x - 3) = 1$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Ubah ke bentuk tanpa log.",
   "options": [
    "$x(x - 3) = 10$",
    "$x(x - 3) = 1$",
    "$x + x - 3 = 10$"
   ],
   "answer": "$x(x - 3) = 10$",
   "hint": "$\\lg[x(x - 3)] = 1$ dan $10^1 = 10$.",
   "explain": "$x(x - 3) = 10$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Calon penyelesaian ...",
   "options": [
    "$x = 5$ atau $x = -2$",
    "$x = -5$ atau $x = 2$",
    "$x = 10$ atau $x = 3$"
   ],
   "answer": "$x = 5$ atau $x = -2$",
   "hint": "$x^2 - 3x - 10 = 0$, faktorkan.",
   "explain": "$(x - 5)(x + 2) = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Penyelesaian yang sah $x$ = ?",
   "answer": "5",
   "hint": "Bilangan di dalam log harus positif.",
   "explain": "$x = -2$ ditolak karena $\\lg(-2)$ tidak terdefinisi.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x = 5$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Penduduk sebuah kota $P = 2.000.000 \\times 1{,}02^t$, dengan $t$ dalam tahun. Setelah berapa tahun penuh penduduknya pertama kali melebihi 3.000.000?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Pertidaksamaannya ...",
   "options": [
    "$1{,}02^t > 1{,}5$",
    "$1{,}02^t > 3$",
    "$1{,}02^t > 1.000.000$"
   ],
   "answer": "$1{,}02^t > 1{,}5$",
   "hint": "Bagi kedua ruas dengan 2.000.000.",
   "explain": "$\\frac{3.000.000}{2.000.000} = 1{,}5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$t > \\frac{\\ln 1{,}5}{\\ln 1{,}02}$ = ? (2 desimal)",
   "answer": "20,48",
   "hint": "$\\ln 1{,}5 \\approx 0{,}4055$, $\\ln 1{,}02 \\approx 0{,}0198$.",
   "explain": "$t > 20{,}48$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Tahun penuh pertama = ?",
   "answer": "21",
   "hint": "Bilangan bulat terkecil yang lebih dari 20,48.",
   "explain": "$t = 20$: sekitar 2,97 juta; $t = 21$: sekitar 3,03 juta.",
   "error": "salah-langkah-materi",
   "suffix": "tahun"
  }
 ],
 "conclusion": "Setelah 21 tahun."
}
```
