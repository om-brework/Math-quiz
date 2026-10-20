---
id: smp3-04-grafik-fungsi-lanjut
judul: Grafik Fungsi Lanjut
jenjang: smp3
moe: "Secondary 3 · Number and Algebra · N6 Functions and graphs"
prasyarat: [smp2-04-fungsi-kuadrat, smp3-01-bentuk-baku-eksponen, smp3-02-persamaan-kuadrat-lanjut]
durasi_menit: 50
---

## Kenapa belajar ini?

Grafik membuat rumus bisa "dilihat". Dari bentuk grafik kita tahu kapan biaya paling kecil, seberapa cepat bakteri berkembang, atau bagaimana waktu tempuh berubah saat kecepatan naik. Kamu juga belajar mengukur seberapa curam sebuah kurva di satu titik.

## Analogi

Bayangkan grafik sebagai **profil jalan** yang dilalui seorang pesepeda dari kiri ke kanan.

- Ada jalan yang turun lalu naik, membentuk **lembah** (parabola terbuka ke atas). Titik terendahnya disebut **titik balik**.
- Ada jalan yang makin lama makin curam, seperti tanjakan ke Kintamani (grafik eksponen).
- **Kemiringan jalan** tepat di bawah roda adalah **gradien kurva** di titik itu. Untuk mengukurnya, tempelkan sebuah **penggaris lurus** yang hanya menyentuh jalan di titik roda. Penggaris itu adalah **garis singgung**.

```anim
{"type": "grafik", "title": "Profil jalan dan penggaris di bawah roda", "xmin": -3, "xmax": 3, "ymin": -2, "ymax": 8, "kurva": [{"f": "x^2", "label": "\\text{jalan: } y = x^2"}, {"f": "2x-1", "label": "\\text{penggaris (garis singgung)}", "dari": -0.5, "sampai": 3}], "titik": [{"x": 0, "y": 0, "label": "titik balik"}, {"x": 1, "y": 1, "label": "roda di (1, 1)"}], "langkah": [{"say": "Jalan berbentuk lembah: turun lalu naik.", "kurva": 1, "titik": 0}, {"say": "Dasar lembah adalah titik balik, di $(0, 0)$.", "kurva": 1, "titik": 1}, {"say": "Pesepeda berada di $(1, 1)$.", "kurva": 1, "titik": 2}, {"say": "Tempelkan penggaris yang hanya menyentuh jalan di titik roda. Gradiennya 2: kemiringan jalan di situ.", "kurva": 2, "titik": 2}]}
```

Setiap keluarga rumus punya "bentuk jalan" yang khas. Kalau kamu hafal bentuknya, kamu bisa membuat sketsa tanpa menghitung banyak titik.

## Konsep

### Bentuk $y = (x - p)^2 + q$

Karena $(x - p)^2 \ge 0$ untuk semua $x$, nilai $y$ paling kecil adalah $q$, dan itu terjadi saat $x = p$. Jadi:

- **Titik balik (minimum):** $(p, q)$, dasar lembah.
- **Sumbu simetri:** garis $x = p$.
- **Titik potong sumbu-$y$:** substitusi $x = 0$, didapat $y = p^2 + q$.

Kalau bentuknya $y = -(x - p)^2 + q$, jalannya dibalik menjadi **bukit**: titik $(p, q)$ adalah titik maksimum.

Hati-hati dengan tanda: $y = (x + 2)^2 - 5$ sama dengan $y = (x - (-2))^2 - 5$, jadi $p = -2$.

```anim
{"type": "grafik", "title": "y = (x + 2)² − 5: lembah bergeser", "xmin": -6, "xmax": 3, "ymin": -6, "ymax": 6, "kurva": [{"f": "x^2", "label": "y = x^2"}, {"f": "(x+2)^2-5", "label": "y = (x+2)^2 - 5"}], "garis": [{"x": -2}], "titik": [{"x": -2, "y": -5, "label": "(−2, −5)"}, {"x": 0, "y": -1, "label": "(0, −1)"}], "langkah": [{"say": "Mulai dari $y = x^2$, titik baliknya $(0, 0)$.", "kurva": 1}, {"say": "$(x + 2)^2 - 5$: geser 2 ke kiri ($p = -2$) dan 5 ke bawah ($q = -5$).", "kurva": 2}, {"say": "Sumbu simetrinya $x = -2$.", "kurva": 2, "garis": 1}, {"say": "Titik balik $(-2, -5)$; potong sumbu-$y$ di $p^2 + q = 4 - 5 = -1$.", "kurva": 2, "garis": 1, "titik": 2}]}
```

### Bentuk $y = (x - a)(x - b)$

Saat $y = 0$, salah satu faktor harus nol, jadi $x = a$ atau $x = b$. Itulah **titik potong sumbu-$x$**.

- Lembah berada tepat di tengah kedua titik potong, karena parabola simetris. Sumbu simetrinya $x = \frac{a + b}{2}$.
- Titik potong sumbu-$y$: $y = (0 - a)(0 - b) = ab$.
- Nilai minimum didapat dengan memasukkan $x = \frac{a+b}{2}$ ke rumus.

### Grafik $y = ax^n$ untuk $n = -2, -1, 0, 1, 2, 3$

Ambil $a > 0$ dulu. Kalau $a < 0$, grafiknya dicerminkan terhadap sumbu-$x$.

- **$n = 0$:** $y = a$. Garis mendatar, jalan yang rata sempurna.
- **$n = 1$:** $y = ax$. Garis lurus melalui $(0, 0)$ dengan gradien $a$.
- **$n = 2$:** $y = ax^2$. Parabola dengan titik balik $(0, 0)$, simetris terhadap sumbu-$y$.
- **$n = 3$:** $y = ax^3$. Kurva berbentuk "S" melalui $(0, 0)$. Naik dari kiri bawah ke kanan atas, dan sempat landai di titik asal.
- **$n = -1$:** $y = \frac{a}{x}$. Ada dua cabang, di kuadran I dan III. Nilai $x = 0$ tidak boleh (pembagian nol), jadi grafik tidak pernah menyentuh sumbu-$y$. Grafik juga tidak pernah menyentuh sumbu-$x$, karena $\frac{a}{x}$ tidak pernah nol. Kedua sumbu disebut **asimtot**: garis yang didekati terus tetapi tidak pernah disentuh.
- **$n = -2$:** $y = \frac{a}{x^2}$. Karena $x^2 > 0$, nilai $y$ selalu positif. Dua cabang di kuadran I dan II, simetris terhadap sumbu-$y$. Asimtotnya juga kedua sumbu.

```anim
{"type": "grafik", "title": "y = 1/x dan y = 1/x²: kedua sumbu adalah asimtot", "xmin": -4, "xmax": 4, "ymin": -4, "ymax": 4, "kurva": [{"f": "1/x", "label": "y = \\frac{1}{x}"}, {"f": "1/x^2", "label": "y = \\frac{1}{x^2}"}], "langkah": [{"say": "$y = \\frac{1}{x}$: dua cabang di kuadran I dan III.", "kurva": 1}, {"say": "$y = \\frac{1}{x^2}$: selalu positif, cabang di kuadran I dan II.", "kurva": 2}, {"say": "Keduanya mendekati sumbu-$x$ dan sumbu-$y$ tanpa pernah menyentuh.", "kurva": 2}]}
```

```anim
{"type": "grafik", "title": "y = axⁿ untuk n = 1, 2, 3", "xmin": -2.5, "xmax": 2.5, "ymin": -5, "ymax": 5, "kurva": [{"f": "x", "label": "n = 1:\\ y = x"}, {"f": "x^2", "label": "n = 2:\\ y = x^2"}, {"f": "x^3", "label": "n = 3:\\ y = x^3"}], "langkah": [{"say": "$n = 1$: garis lurus melalui $(0, 0)$.", "kurva": 1}, {"say": "$n = 2$: parabola, simetris terhadap sumbu-$y$.", "kurva": 2}, {"say": "$n = 3$: kurva S, dari kiri bawah ke kanan atas, landai di titik asal.", "kurva": 3}]}
```

### Grafik eksponen $y = ka^x$

Di sini $x$ berada di **pangkat**. Ambil $k > 0$, $a > 0$, dan $a \ne 1$.

- Saat $x = 0$, $a^0 = 1$, jadi $y = k$. Grafik selalu memotong sumbu-$y$ di $(0, k)$.
- Jika $a > 1$: grafik **naik makin curam** (pertumbuhan). Seperti tanjakan yang makin terjal.
- Jika $0 < a < 1$: grafik **turun makin landai** (peluruhan).
- $a^x$ selalu positif, jadi grafik selalu di atas sumbu-$x$. Sumbu-$x$ adalah asimtot.

```anim
{"type": "grafik", "title": "Pertumbuhan dan peluruhan", "xmin": -3, "xmax": 3, "ymin": -1, "ymax": 8, "kurva": [{"f": "2^x", "label": "y = 2^x"}, {"f": "0.5^x", "label": "y = \\left(\\tfrac{1}{2}\\right)^x"}], "titik": [{"x": 0, "y": 1, "label": "(0, 1)"}], "langkah": [{"say": "$a = 2 > 1$: naik makin curam.", "kurva": 1}, {"say": "$a = \\frac{1}{2}$: turun makin landai.", "kurva": 2}, {"say": "Keduanya melalui $(0, k) = (0, 1)$ dan tidak pernah menyentuh sumbu-$x$.", "kurva": 2, "titik": 1}]}
```

### Gradien kurva dengan garis singgung

Gradien garis lurus sama di semua titik. Gradien kurva berubah-ubah, seperti kemiringan jalan berbukit. Untuk mengukurnya di satu titik:

1. Gambar kurva dengan teliti di kertas berpetak.
2. Letakkan penggaris yang menyentuh kurva **hanya di titik itu**, lalu tarik garis singgung.
3. Pilih dua titik yang jauh satu sama lain pada garis singgung.
4. Hitung $\text{gradien} = \frac{\text{perubahan } y}{\text{perubahan } x}$.

Hasilnya perkiraan, karena bergantung pada ketelitian gambar.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Sketsa bentuk $(x - p)^2 + q$

```soal
{
 "title": "Contoh 1",
 "text": "Buat sketsa $y = (x - 3)^2 - 4$. Tentukan titik balik, sumbu simetri, dan titik potong dengan kedua sumbu.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Bandingkan dengan $(x - p)^2 + q$. Berapa $p$?",
   "answer": "3",
   "hint": "$x - 3 = x - p$.",
   "explain": "$p = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Berapa $q$?",
   "answer": "-4",
   "hint": "Angka di luar kurung, beserta tandanya.",
   "explain": "$q = -4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Titik balik dan sumbu simetri?",
   "options": [
    "$(3, -4)$ dan $x = 3$",
    "$(-3, -4)$ dan $x = -3$",
    "$(3, 4)$ dan $x = 3$"
   ],
   "answer": "$(3, -4)$ dan $x = 3$",
   "hint": "Titik balik $(p, q)$, sumbu $x = p$.",
   "explain": "Dasar lembah di $(3, -4)$, sumbu simetri $x = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Potong sumbu-$y$. Nilai $y$ saat $x = 0$?",
   "answer": "5",
   "hint": "$(0 - 3)^2 - 4$.",
   "explain": "$9 - 4 = 5$, titik $(0, 5)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Potong sumbu-$x$. Dari $(x - 3)^2 = 4$ didapat ...",
   "options": [
    "$x = 1$ atau $x = 5$",
    "$x = 5$ saja",
    "$x = 7$ atau $x = -1$"
   ],
   "answer": "$x = 1$ atau $x = 5$",
   "hint": "$x - 3 = 2$ atau $x - 3 = -2$.",
   "explain": "$x = 5$ atau $x = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: ekspansi $(x - 3)^2 - 4$ sama dengan ...",
   "options": [
    "$(x - 1)(x - 5)$",
    "$(x + 1)(x + 5)$",
    "$(x - 1)(x + 5)$"
   ],
   "answer": "$(x - 1)(x - 5)$",
   "hint": "$(x - 3)^2 - 4 = x^2 - 6x + 5$.",
   "explain": "$x^2 - 6x + 5 = (x - 1)(x - 5)$, cocok dengan titik potong 1 dan 5.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Titik balik $(3, -4)$, sumbu $x = 3$, memotong sumbu-$y$ di $(0, 5)$ dan sumbu-$x$ di $(1, 0)$ dan $(5, 0)$."
}
```

### Contoh 2: Sketsa bentuk $(x - a)(x - b)$

```soal
{
 "title": "Contoh 2",
 "text": "Buat sketsa $y = (x + 2)(x - 4)$ dan tentukan nilai minimumnya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Titik potong sumbu-$x$?",
   "options": [
    "$x = -2$ atau $x = 4$",
    "$x = 2$ atau $x = -4$",
    "$x = -8$"
   ],
   "answer": "$x = -2$ atau $x = 4$",
   "hint": "Salah satu faktor harus nol.",
   "explain": "$x + 2 = 0$ atau $x - 4 = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Sumbu simetri $x = \\frac{-2 + 4}{2}$ = ?",
   "answer": "1",
   "hint": "Tepat di tengah kedua titik potong.",
   "explain": "$x = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Nilai minimum. Berapa $y$ saat $x = 1$?",
   "answer": "-9",
   "hint": "$(1 + 2)(1 - 4)$.",
   "explain": "$3 \\times (-3) = -9$. Titik balik $(1, -9)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Potong sumbu-$y$. Berapa $y$ saat $x = 0$?",
   "answer": "-8",
   "hint": "$(2)(-4)$.",
   "explain": "Titik $(0, -8)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: cerminan $(0, -8)$ terhadap $x = 1$ adalah $(2, ?)$. Hitung $y$ saat $x = 2$.",
   "answer": "-8",
   "hint": "$(2 + 2)(2 - 4)$.",
   "explain": "$4 \\times (-2) = -8$. Cocok dengan simetri.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Memotong sumbu-$x$ di −2 dan 4, sumbu-$y$ di −8, nilai minimum −9 saat $x = 1$."
}
```

### Contoh 3: Mengenali grafik $y = ax^n$

```soal
{
 "title": "Contoh 3",
 "text": "Sebuah grafik tidak pernah menyentuh kedua sumbu, berada di kuadran I dan II, dan melalui $(2, 3)$. Rumusnya berbentuk $y = ax^n$. Tentukan $n$ dan $a$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tidak menyentuh kedua sumbu. $n$ yang mungkin?",
   "options": [
    "$n = -1$ atau $n = -2$",
    "$n = 2$ atau $n = 3$",
    "$n = 0$"
   ],
   "answer": "$n = -1$ atau $n = -2$",
   "hint": "Grafik mana yang punya asimtot di kedua sumbu?",
   "explain": "Hanya $n$ negatif yang punya asimtot di kedua sumbu.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Grafiknya di kuadran I dan II. Berapa $n$?",
   "answer": "-2",
   "hint": "$\\frac{a}{x}$ di kuadran I dan III; $\\frac{a}{x^2}$ selalu positif.",
   "explain": "$n = -2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $3 = \\frac{a}{2^2}$. Berapa $a$?",
   "answer": "12",
   "hint": "Kalikan kedua ruas dengan 4.",
   "explain": "$a = 12$, jadi $y = \\frac{12}{x^2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: berapa $y$ saat $x = -2$?",
   "answer": "3",
   "hint": "$\\frac{12}{(-2)^2}$.",
   "explain": "$y = 3 > 0$, titik di kuadran II. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $y = \\frac{12}{x^2}$: $n = -2$ dan $a = 12$."
}
```

### Contoh 4: Soal cerita eksponen dan garis singgung

```soal
{
 "title": "Contoh 4",
 "text": "Jumlah bakteri dalam tempe yang sedang difermentasi dimodelkan $N = 200 \\times 2^t$, dengan $t$ dalam jam. Siti menggambar grafiknya, lalu menarik garis singgung di $t = 2$. Garis itu melalui $(1, 245)$ dan $(3, 1.355)$. Perkirakan laju pertumbuhan bakteri saat $t = 2$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Kenali bentuk grafiknya.",
   "options": [
    "Naik makin curam, memotong sumbu tegak di 200",
    "Turun makin landai, memotong di 200",
    "Garis lurus melalui (0, 0)"
   ],
   "answer": "Naik makin curam, memotong sumbu tegak di 200",
   "hint": "Bentuknya $ka^x$ dengan $k = 200$ dan $a = 2$.",
   "explain": "$a = 2 > 1$: pertumbuhan, dan $N = 200$ saat $t = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Lengkapi tabel. $N$ saat $t = 2$?",
   "answer": "800",
   "hint": "$200 \\times 2^2$.",
   "explain": "$200 \\times 4 = 800$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $N$ saat $t = 3$?",
   "answer": "1.600",
   "hint": "$200 \\times 2^3$.",
   "explain": "$200 \\times 8 = 1.600$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Gradien garis singgung $\\frac{1.355 - 245}{3 - 1}$ = ?",
   "answer": "555",
   "hint": "Selisih $N$ dibagi selisih $t$.",
   "explain": "$\\frac{1.110}{2} = 555$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Apa arti gradien 555?",
   "options": [
    "Bakteri bertambah sekitar 555 per jam saat $t = 2$",
    "Ada 555 bakteri saat $t = 2$",
    "Bakteri bertambah 555 setiap 2 jam"
   ],
   "answer": "Bakteri bertambah sekitar 555 per jam saat $t = 2$",
   "hint": "Gradien = perubahan $N$ per perubahan $t$.",
   "explain": "Gradien adalah laju: bakteri per jam, tepat di $t = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: gradien rata-rata dari $t = 1$ ke $t = 3$, yaitu $\\frac{1.600 - 400}{2}$ = ?",
   "answer": "600",
   "hint": "Pakai nilai di tabel.",
   "explain": "600, dekat dengan 555. Masuk akal.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Laju pertumbuhan sekitar 555 bakteri per jam pada $t = 2$.",
 "visual": {
  "type": "table",
  "head": [
   "t (jam)",
   "0",
   "1",
   "2",
   "3",
   "4"
  ],
  "rows": [
   [
    "N",
    "200",
    "400",
    "?",
    "?",
    "3.200"
   ]
  ]
 }
}
```

## Kesalahan yang sering terjadi

- **Salah tanda titik balik.** Pada $y = (x + 2)^2 - 5$, menulis titik balik $(2, -5)$. Bentuknya $(x - p)^2$, jadi $x + 2 = x - (-2)$ dan titik baliknya $(-2, -5)$.
- **Mengira $y = \frac{a}{x}$ menyentuh sumbu.** Grafik ini tidak punya nilai di $x = 0$ dan tidak pernah bernilai 0. Gambar cabangnya mendekati sumbu tanpa menyentuh.
- **Tertukar $y = \frac{a}{x}$ dan $y = \frac{a}{x^2}$.** Ingat: $x^2$ selalu positif, jadi $\frac{a}{x^2}$ (dengan $a > 0$) selalu di atas sumbu-$x$.
- **Grafik eksponen dibuat menembus sumbu-$x$.** $ka^x$ dengan $k > 0$ tidak pernah nol atau negatif.
- **Garis singgung memotong kurva di titik itu.** Penggaris harus "menempel", bukan menyilang. Pilih dua titik yang jauh di garis singgung agar gradien lebih teliti.

## Ringkasan

- $y = (x - p)^2 + q$: titik balik $(p, q)$, sumbu simetri $x = p$.
- $y = (x - a)(x - b)$: memotong sumbu-$x$ di $a$ dan $b$, sumbu simetri $x = \frac{a + b}{2}$, memotong sumbu-$y$ di $ab$.
- $y = ax^n$: $n = 0$ garis datar, $n = 1$ garis miring, $n = 2$ parabola, $n = 3$ kurva S, $n = -1$ dan $n = -2$ punya asimtot di kedua sumbu.
- $y = ka^x$: melalui $(0, k)$, naik jika $a > 1$, turun jika $0 < a < 1$, tidak pernah menyentuh sumbu-$x$.
- Gradien kurva di satu titik = gradien garis singgung di titik itu.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tentukan titik balik, sumbu simetri, dan titik potong sumbu-$y$ dari $y = (x - 5)^2 + 2$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Titik balik?",
   "options": [
    "$(5, 2)$",
    "$(-5, 2)$",
    "$(5, -2)$"
   ],
   "answer": "$(5, 2)$",
   "hint": "Titik balik $(p, q)$.",
   "explain": "$p = 5$, $q = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Sumbu simetri $x$ = ?",
   "answer": "5",
   "hint": "Sumbu $x = p$.",
   "explain": "$x = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Titik potong sumbu-$y$: $y$ = ?",
   "answer": "27",
   "hint": "$(0 - 5)^2 + 2$.",
   "explain": "$25 + 2 = 27$, titik $(0, 27)$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Titik balik $(5, 2)$, sumbu $x = 5$, memotong sumbu-$y$ di $(0, 27)$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Untuk $y = (x - 1)(x - 7)$, tentukan titik potong sumbu-$x$, sumbu simetri, dan nilai minimum.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Titik potong sumbu-$x$?",
   "options": [
    "$x = 1$ dan $x = 7$",
    "$x = -1$ dan $x = -7$",
    "$x = 7$ saja"
   ],
   "answer": "$x = 1$ dan $x = 7$",
   "hint": "Faktor nol.",
   "explain": "$x - 1 = 0$ atau $x - 7 = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Sumbu simetri $x$ = ?",
   "answer": "4",
   "hint": "Tengah-tengah 1 dan 7.",
   "explain": "$\\frac{1 + 7}{2} = 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Nilai minimum?",
   "answer": "-9",
   "hint": "Masukkan $x = 4$.",
   "explain": "$(3)(-3) = -9$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Memotong di 1 dan 7, sumbu $x = 4$, minimum −9."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Untuk $y = 3 \\times 2^x$, hitung $y$ saat $x = 0, 1, 2, 3$. Di mana grafik memotong sumbu-$y$?",
 "steps": [
  {
   "kind": "number",
   "prompt": "$y$ saat $x = 2$?",
   "answer": "12",
   "hint": "$3 \\times 2^2$.",
   "explain": "$3 \\times 4 = 12$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$y$ saat $x = 3$?",
   "answer": "24",
   "hint": "$3 \\times 2^3$.",
   "explain": "$3 \\times 8 = 24$. Nilainya 3, 6, 12, 24.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Grafik memotong sumbu-$y$ di ...",
   "options": [
    "$(0, 3)$",
    "$(0, 0)$",
    "$(0, 6)$",
    "$(0, 1)$"
   ],
   "answer": "$(0, 3)$",
   "hint": "Saat $x = 0$, $2^0 = 1$.",
   "explain": "$y = 3 \\times 1 = 3$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Nilainya 3, 6, 12, 24; memotong sumbu-$y$ di $(0, 3)$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Untuk $y = \\frac{4}{x}$, hitung $y$ saat $x = -2$. Di kuadran mana saja grafik ini berada?",
 "steps": [
  {
   "kind": "number",
   "prompt": "$y$ saat $x = -2$?",
   "answer": "-2",
   "hint": "$\\frac{4}{-2}$.",
   "explain": "$y = -2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Kuadran grafiknya?",
   "options": [
    "I dan III",
    "I dan II",
    "II dan IV",
    "I saja"
   ],
   "answer": "I dan III",
   "hint": "$a = 4 > 0$; $x$ negatif memberi $y$ negatif.",
   "explain": "Grafik $\\frac{a}{x}$ dengan $a > 0$ ada di kuadran I dan III.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$y = -2$; grafik di kuadran I dan III."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Garis singgung kurva $y = x^2$ di titik $(2, 4)$ juga melalui $(4, 12)$. Berapa gradien kurva di $(2, 4)$?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Perubahan $y$ = ?",
   "answer": "8",
   "hint": "12 − 4.",
   "explain": "Perubahan $y$ = 8.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Gradien = ?",
   "answer": "4",
   "hint": "Bagi perubahan $y$ dengan perubahan $x$ (4 − 2).",
   "explain": "$\\frac{8}{2} = 4$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Gradien kurva di $(2, 4)$ adalah 4."
}
```
