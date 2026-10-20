---
id: sma2-02-koordinat-lingkaran
judul: "Geometri Koordinat: Garis dan Lingkaran"
jenjang: sma2
moe: "Additional Mathematics · G2 Coordinate geometry in two dimensions"
prasyarat: [smp3-06-geometri-koordinat, sma1-05-fungsi-kuadrat-lanjut, sma1-10-eksponen-logaritma]
durasi_menit: 75
---

## Kenapa belajar ini?

Peta digital di ponselmu menyimpan setiap tempat sebagai pasangan koordinat. Dengan koordinat, kita bisa menghitung luas sawah dari titik-titik batasnya, menentukan jangkauan sinyal menara, dan menemukan rumus tersembunyi dari data percobaan.

## Analogi

Bayangkan kamu bekerja dengan **peta digital berpetak** (seperti peta GPS) kota Denpasar. Setiap tempat punya alamat $(x, y)$.

- **Gradien** adalah kemiringan jalan lurus di peta.
- **Titik tengah** adalah tempat janjian yang adil bagi dua teman.
- **Luas** dihitung dari koordinat sudut-sudut sawah.
- **Lingkaran** adalah batas jangkauan sinyal menara BTS: semua titik yang berjarak sama dari menara.
- **Hukum linear** seperti mengganti skala peta. Kurva yang melengkung bisa terlihat lurus jika sumbunya diganti dengan skala logaritma.

```anim
{"type": "bangun", "title": "Jangkauan sinyal menara BTS", "titik": {"M": [0, 0], "P": [3, 4], "Q": [-4, 3], "S": [0, -5]}, "sisi": [["M", "P", "r"], ["M", "Q", "r"], ["M", "S", "r"]], "lingkaran": [{"pusat": [0, 0], "r": 5}], "langkah": [{"say": "Menara $M$ ada di pusat peta.", "sisi": 0, "lingkaran": 0}, {"say": "Rumah $P$ tepat di batas jangkauan, berjarak $r$ dari menara.", "sisi": 1, "lingkaran": 0, "sorot": ["MP"]}, {"say": "Rumah $Q$ dan $S$ juga berjarak $r$.", "sisi": 3, "lingkaran": 0}, {"say": "Semua titik yang berjarak $r$ dari $M$ membentuk lingkaran.", "sisi": 3, "lingkaran": 1}]}
```

## Konsep

### Gradien, garis sejajar, dan garis tegak lurus

Gradien garis melalui $(x_1, y_1)$ dan $(x_2, y_2)$:

$$
m = \frac{y_2 - y_1}{x_2 - x_1}
$$

- Dua garis **sejajar** jika gradiennya sama: $m_1 = m_2$.
- Dua garis **tegak lurus** jika $m_1 m_2 = -1$.

Alasan syarat tegak lurus: garis bergradien $m$ searah dengan langkah $(1, m)$ di peta. Putar langkah ini $90°$, hasilnya $(-m, 1)$. Gradien langkah baru $\frac{1}{-m}$. Jadi $m_2 = -\frac{1}{m_1}$, atau $m_1 m_2 = -1$.

Persamaan garis melalui $(x_1, y_1)$ dengan gradien $m$: $y - y_1 = m(x - x_1)$.

### Titik tengah

Titik tengah ruas garis $AB$ dengan $A(x_1, y_1)$ dan $B(x_2, y_2)$ adalah rata-rata koordinatnya:

$$
M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)
$$

**Garis sumbu** $AB$ adalah garis yang melalui $M$ dan tegak lurus $AB$. Setiap titik di garis ini berjarak sama ke $A$ dan $B$.

```anim
{"type": "grafik", "title": "Titik tengah dan garis sumbu AB", "xmin": -3, "xmax": 8, "ymin": -1, "ymax": 9, "kurva": [{"f": "2/3*x+8/3", "label": "AB:\\ m=\\tfrac{2}{3}", "dari": -1, "sampai": 5}, {"f": "7-1.5x", "label": "\\text{garis sumbu}:\\ m=-\\tfrac{3}{2}"}], "titik": [{"x": -1, "y": 2, "label": "A(−1, 2)"}, {"x": 5, "y": 6, "label": "B(5, 6)"}, {"x": 2, "y": 4, "label": "M(2, 4)"}], "langkah": [{"say": "Ruas garis $AB$ dengan gradien $\\frac{2}{3}$.", "kurva": 1, "titik": 2}, {"say": "Titik tengah $M$ adalah rata-rata koordinat $A$ dan $B$.", "kurva": 1, "titik": 3}, {"say": "Garis sumbu melalui $M$ dengan gradien $-\\frac{3}{2}$, karena $\\frac{2}{3} \\times (-\\frac{3}{2}) = -1$.", "kurva": 2, "titik": 3}]}
```

### Luas bangun dengan koordinat

Untuk poligon dengan titik sudut $(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)$ yang **diurutkan** keliling (searah atau berlawanan jarum jam):

$$
L = \frac{1}{2}\left|(x_1y_2 + x_2y_3 + \dots + x_ny_1) - (y_1x_2 + y_2x_3 + \dots + y_nx_1)\right|
$$

Cara praktis: tulis koordinat dalam dua baris, ulangi titik pertama di ujung, lalu kalikan menyilang.

```visual
{"type": "table", "caption": "Tulis koordinat dalam dua baris, ulangi titik pertama di ujung", "head": ["", "titik 1", "titik 2", "titik 3", "...", "titik 1"], "rows": [["x", "x1", "x2", "x3", "...", "x1"], ["y", "y1", "y2", "y3", "...", "y1"]]}
```

Jumlahkan hasil kali "turun ke kanan" ($x_1y_2, x_2y_3, \dots$), kurangi jumlah hasil kali "naik ke kanan" ($y_1x_2, y_2x_3, \dots$), ambil nilai mutlak, lalu bagi 2.

### Persamaan lingkaran

Titik $(x, y)$ ada pada lingkaran berpusat $(a, b)$ dan berjari-jari $r$ jika jaraknya ke pusat $r$. Dengan rumus jarak, lalu dikuadratkan:

$$
(x - a)^2 + (y - b)^2 = r^2
$$

```anim
{"type": "bangun", "title": "Rumus jarak menjadi persamaan lingkaran", "titik": {"C": [3, -2], "H": [6, -2], "P": [6, 2]}, "sisi": [["C", "H", "x-a"], ["H", "P", "y-b"], ["C", "P", "r"]], "sudut": [{"di": "H", "dari": "C", "ke": "P", "siku": true}], "lingkaran": [{"pusat": [3, -2], "r": 5}], "langkah": [{"say": "Pusat $C(a, b)$ dan titik $P(x, y)$ pada lingkaran.", "sisi": 0, "lingkaran": 1}, {"say": "Selisih mendatar $x - a$ dan selisih tegak $y - b$.", "sisi": 2, "sudut": 1, "sorot": ["CH", "HP"]}, {"say": "Pythagoras: $(x-a)^2 + (y-b)^2 = r^2$. Contoh: pusat $(3, -2)$, $P(6, 2)$: $3^2 + 4^2 = 5^2$.", "sisi": 3, "sudut": 1, "sorot": ["CP"]}]}
```

Jika diuraikan, bentuknya menjadi **bentuk umum**:

$$
x^2 + y^2 + 2gx + 2fy + c = 0, \quad \text{pusat } (-g, -f), \quad r = \sqrt{g^2 + f^2 - c}
$$

Dari bentuk umum, kita kembali ke bentuk pusat-jari-jari dengan melengkapkan kuadrat. Ingat juga: garis singgung lingkaran tegak lurus jari-jari di titik singgungnya.

### Hukum linear

Jika data $(x, y)$ tidak membentuk garis lurus, kita bisa mengubah variabelnya menjadi $Y = mX + c$.

- $y = ax^n$. Ambil $\lg$: $\lg y = n\lg x + \lg a$. Gambar $Y = \lg y$ terhadap $X = \lg x$. Gradien $= n$, potongan sumbu $Y$ $= \lg a$.
- $y = kb^x$. Ambil $\lg$: $\lg y = (\lg b)x + \lg k$. Gambar $Y = \lg y$ terhadap $X = x$. Gradien $= \lg b$, potongan $= \lg k$.

Dalam analogi peta: kita tidak mengubah datanya, hanya "skala sumbunya", sehingga kurva tampak lurus dan konstanta bisa dibaca dari gradien serta potongan sumbu.

```anim
{"type": "grafik", "title": "Kurva eksponen di sumbu biasa", "xmin": 0, "xmax": 5.5, "ymin": 0, "ymax": 1800, "kurva": [{"f": "50*2^x", "label": "N = 50 \\cdot 2^t"}], "titik": [{"x": 1, "y": 100}, {"x": 2, "y": 200}, {"x": 3, "y": 400}, {"x": 4, "y": 800}, {"x": 5, "y": 1600}], "langkah": [{"say": "Data bakteri $N = 50 \\cdot 2^t$ di sumbu biasa.", "kurva": 0, "titik": 5}, {"say": "Titik-titiknya membentuk kurva melengkung, sulit membaca konstantanya.", "kurva": 1, "titik": 5}]}
```

```anim
{"type": "grafik", "title": "Setelah sumbu tegak diganti lg N", "xmin": 0, "xmax": 5.5, "ymin": 0, "ymax": 3.6, "kurva": [{"f": "0.30103x+1.69897", "label": "\\lg N = 0{,}301t + 1{,}699"}], "titik": [{"x": 1, "y": 2.0}, {"x": 2, "y": 2.301}, {"x": 3, "y": 2.602}, {"x": 4, "y": 2.903}, {"x": 5, "y": 3.204}, {"x": 0, "y": 1.699, "label": "potongan = lg k"}], "langkah": [{"say": "Gambar $\\lg N$ terhadap $t$.", "kurva": 0, "titik": 5}, {"say": "Titik-titiknya segaris! Gradien $0{,}301 = \\lg b$.", "kurva": 1, "titik": 5}, {"say": "Potongan sumbu tegak $1{,}699 = \\lg k$, jadi $k = 10^{1{,}699} \\approx 50$.", "kurva": 1, "titik": 6}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Garis sumbu ruas garis

```soal
{
 "title": "Contoh 1",
 "text": "Diketahui $A(-1, 2)$ dan $B(5, 6)$. Tentukan persamaan garis sumbu $AB$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Titik tengah $M$. Berapa koordinat $x$-nya?",
   "answer": "2",
   "hint": "Rata-rata $-1$ dan $5$.",
   "explain": "$\\frac{-1 + 5}{2} = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Berapa koordinat $y$ titik tengah?",
   "answer": "4",
   "hint": "Rata-rata $2$ dan $6$.",
   "explain": "$\\frac{2 + 6}{2} = 4$, jadi $M(2, 4)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Hitung gradien $AB$. Tulis paling sederhana.",
   "answer": {
    "num": 2,
    "den": 3
   },
   "hint": "$\\frac{y_2 - y_1}{x_2 - x_1} = \\frac{6 - 2}{5 - (-1)}$.",
   "explain": "$\\frac{4}{6} = \\frac{2}{3}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Gradien garis yang tegak lurus $AB$?",
   "options": [
    "$-\\frac{3}{2}$",
    "$\\frac{3}{2}$",
    "$-\\frac{2}{3}$"
   ],
   "answer": "$-\\frac{3}{2}$",
   "hint": "Balik pecahannya dan ubah tandanya.",
   "explain": "$\\frac{2}{3} \\times \\left(-\\frac{3}{2}\\right) = -1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Tulis persamaan $y - 4 = -\\frac{3}{2}(x - 2)$ tanpa pecahan.",
   "options": [
    "$3x + 2y = 14$",
    "$3x - 2y = -2$",
    "$2x + 3y = 16$",
    "$3x + 2y = 10$"
   ],
   "answer": "$3x + 2y = 14$",
   "hint": "Kalikan kedua ruas dengan 2, lalu kumpulkan $x$ dan $y$ di kiri.",
   "explain": "$2y - 8 = -3x + 6$, jadi $3x + 2y = 14$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: titik $(0, y)$ ada di garis ini. Berapa $y$?",
   "answer": "7",
   "hint": "Substitusi $x = 0$ ke $3x + 2y = 14$.",
   "explain": "$2y = 14$, jadi $y = 7$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Hitung kuadrat jarak $(0, 7)$ ke $A(-1, 2)$.",
   "answer": "26",
   "hint": "$1^2 + 5^2$.",
   "explain": "$26$. Ke $B(5, 6)$: $5^2 + 1^2 = 26$ juga. Sama, sesuai sifat garis sumbu.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi garis sumbu $AB$ adalah $3x + 2y = 14$."
}
```

### Contoh 2: Soal cerita, luas sawah Pak Wayan

```anim
{"type": "bangun", "title": "Sawah Pak Wayan di peta", "titik": {"P": [1, 1], "Q": [6, 2], "R": [5, 6], "S": [2, 5]}, "sisi": [["P", "Q"], ["Q", "R"], ["R", "S"], ["S", "P"], ["P", "R"]], "langkah": [{"say": "Sudut sawah $P(1,1)$, $Q(6,2)$, $R(5,6)$, $S(2,5)$, dikelilingi berurutan.", "sisi": 4}, {"say": "Untuk mengecek, sawah bisa dibagi menjadi segitiga $PQR$ dan $PRS$.", "sisi": 5, "sorot": ["PR"]}]}
```

```soal
{
 "title": "Contoh 2",
 "text": "Pada peta berskala 1 satuan = 10 m, sudut-sudut sawah Pak Wayan adalah $P(1, 1)$, $Q(6, 2)$, $R(5, 6)$, dan $S(2, 5)$. Tentukan luas sawah sebenarnya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Bagaimana urutan titik di tabel?",
   "options": [
    "P, Q, R, S, lalu P lagi",
    "P, R, Q, S",
    "P, Q, R, S tanpa mengulang"
   ],
   "answer": "P, Q, R, S, lalu P lagi",
   "hint": "Titik harus berurutan mengelilingi bangun, dan titik pertama diulang.",
   "explain": "$P \\to Q \\to R \\to S \\to P$ mengelilingi sawah.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jumlah hasil kali turun ke kanan: $1 \\cdot 2 + 6 \\cdot 6 + 5 \\cdot 5 + 2 \\cdot 1$.",
   "answer": "65",
   "hint": "Hitung keempat perkalian dulu.",
   "explain": "$2 + 36 + 25 + 2 = 65$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Jumlah hasil kali naik ke kanan: $1 \\cdot 6 + 2 \\cdot 5 + 6 \\cdot 2 + 5 \\cdot 1$.",
   "answer": "33",
   "hint": "Hitung keempat perkalian dulu.",
   "explain": "$6 + 10 + 12 + 5 = 33$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Luas di peta?",
   "answer": "16",
   "hint": "$\\frac{1}{2}|65 - 33|$.",
   "explain": "$\\frac{32}{2} = 16$ satuan$^2$.",
   "error": "salah-langkah-materi",
   "suffix": "satuan²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Luas sebenarnya?",
   "answer": "1.600",
   "hint": "1 satuan$^2$ = $10 \\times 10$ m$^2$.",
   "explain": "$16 \\times 100 = 1.600$ m$^2$.",
   "error": "salah-langkah-materi",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: luas segitiga $PQR$?",
   "answer": "10,5",
   "hint": "$\\frac{1}{2}|1(2 - 6) + 6(6 - 1) + 5(1 - 2)|$.",
   "explain": "$\\frac{1}{2}|-4 + 30 - 5| = 10{,}5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Luas segitiga $PRS$?",
   "answer": "5,5",
   "hint": "$\\frac{1}{2}|1(6 - 5) + 5(5 - 1) + 2(1 - 6)|$.",
   "explain": "$\\frac{11}{2} = 5{,}5$. Jumlahnya $10{,}5 + 5{,}5 = 16$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Luas sawah Pak Wayan $1.600$ m$^2$.",
 "visual": {
  "type": "table",
  "head": [
   "",
   "P",
   "Q",
   "R",
   "S",
   "P"
  ],
  "rows": [
   [
    "x",
    "1",
    "6",
    "5",
    "2",
    "1"
   ],
   [
    "y",
    "1",
    "2",
    "6",
    "5",
    "1"
   ]
  ]
 }
}
```

### Contoh 3: Lingkaran dan garis singgung

```soal
{
 "title": "Contoh 3",
 "text": "Lingkaran $x^2 + y^2 - 6x + 4y - 12 = 0$. (a) Tentukan pusat dan jari-jari. (b) Tunjukkan $(6, 2)$ pada lingkaran, lalu tentukan garis singgung di titik itu.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Lengkapkan kuadrat. Bentuknya menjadi?",
   "options": [
    "$(x - 3)^2 + (y + 2)^2 = 25$",
    "$(x + 3)^2 + (y - 2)^2 = 25$",
    "$(x - 3)^2 + (y + 2)^2 = 12$",
    "$(x - 6)^2 + (y + 4)^2 = 12$"
   ],
   "answer": "$(x - 3)^2 + (y + 2)^2 = 25$",
   "hint": "$x^2 - 6x = (x - 3)^2 - 9$ dan $y^2 + 4y = (y + 2)^2 - 4$.",
   "explain": "$12 + 9 + 4 = 25$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Pusatnya?",
   "options": [
    "$(3, -2)$",
    "$(-3, 2)$",
    "$(-6, 4)$"
   ],
   "answer": "$(3, -2)$",
   "hint": "Pusat $(a, b)$ dari $(x - a)^2 + (y - b)^2$.",
   "explain": "Tanda di dalam kurung dibalik: pusat $(3, -2)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Jari-jarinya?",
   "answer": "5",
   "hint": "$r^2 = 25$.",
   "explain": "$r = \\sqrt{25} = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung $(6 - 3)^2 + (2 + 2)^2$.",
   "answer": "25",
   "hint": "$9 + 16$.",
   "explain": "Hasilnya 25 $= r^2$, jadi $(6, 2)$ pada lingkaran.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Gradien jari-jari dari pusat $(3, -2)$ ke $(6, 2)$?",
   "answer": {
    "num": 4,
    "den": 3
   },
   "hint": "$\\frac{2 - (-2)}{6 - 3}$.",
   "explain": "$m = \\frac{4}{3}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Garis singgung tegak lurus jari-jari. Persamaannya?",
   "options": [
    "$3x + 4y = 26$",
    "$4x - 3y = 18$",
    "$3x + 4y = 14$",
    "$3x - 4y = 10$"
   ],
   "answer": "$3x + 4y = 26$",
   "hint": "Gradiennya $-\\frac{3}{4}$. Pakai $y - 2 = -\\frac{3}{4}(x - 6)$, lalu kalikan 4.",
   "explain": "$4y - 8 = -3x + 18$, jadi $3x + 4y = 26$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung $3(6) + 4(2)$.",
   "answer": "26",
   "hint": "Substitusi titik singgung.",
   "explain": "Hasilnya 26, jadi garis melalui $(6, 2)$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "(a) Pusat $(3, -2)$, $r = 5$. (b) Garis singgung $3x + 4y = 26$."
}
```

### Contoh 4: Hukum linear $y = ax^n$

```soal
{
 "title": "Contoh 4",
 "text": "Data percobaan diduga mengikuti $y = ax^n$. Grafik $\\lg y$ terhadap $\\lg x$ berupa garis lurus melalui $(0{,}2;\\ 0{,}901)$ dan $(0{,}6;\\ 2{,}101)$. Tentukan $a$ dan $n$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Bentuk linearnya?",
   "options": [
    "$\\lg y = n\\lg x + \\lg a$",
    "$\\lg y = a\\lg x + n$",
    "$y = n\\lg x + a$"
   ],
   "answer": "$\\lg y = n\\lg x + \\lg a$",
   "hint": "Ambil $\\lg$ kedua ruas $y = ax^n$.",
   "explain": "Gradien $= n$, potongan $= \\lg a$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung gradien $n$.",
   "answer": "3",
   "hint": "$\\frac{2{,}101 - 0{,}901}{0{,}6 - 0{,}2}$.",
   "explain": "$\\frac{1{,}2}{0{,}4} = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Dari $0{,}901 = 3(0{,}2) + \\lg a$, berapa $\\lg a$?",
   "answer": "0,301",
   "hint": "$0{,}901 - 0{,}6$.",
   "explain": "$\\lg a = 0{,}301$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Berapa $a = 10^{0{,}301}$? Bulatkan ke bilangan bulat.",
   "answer": "2",
   "hint": "Hitung $10^{0{,}301}$ dengan kalkulator.",
   "explain": "$a \\approx 2{,}00$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung $3(0{,}6) + 0{,}301$.",
   "answer": "2,101",
   "hint": "$1{,}8 + 0{,}301$.",
   "explain": "Sama dengan titik kedua. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $a \\approx 2$ dan $n = 3$, yaitu $y = 2x^3$."
}
```

### Contoh 5: Hukum linear $y = kb^x$, bakteri di lab

```soal
{
 "title": "Contoh 5",
 "text": "Banyak bakteri $N$ setelah $t$ jam tercatat di tabel. Tunjukkan bahwa $N = kb^t$, tentukan $k$ dan $b$, lalu taksir $N$ saat $t = 8$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Gambar apa terhadap apa agar lurus?",
   "options": [
    "$\\lg N$ terhadap $t$",
    "$\\lg N$ terhadap $\\lg t$",
    "$N$ terhadap $t$"
   ],
   "answer": "$\\lg N$ terhadap $t$",
   "hint": "$\\lg N = (\\lg b)t + \\lg k$. Variabel $X$-nya apa?",
   "explain": "Pangkatnya $t$, jadi $X = t$ dan $Y = \\lg N$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Selisih $\\lg N$ berturut-turut?",
   "answer": "0,301",
   "hint": "$2{,}301 - 2{,}000$.",
   "explain": "Selalu $0{,}301$, jadi titik-titiknya segaris.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Gradien $\\lg b = 0{,}301$. Berapa $b$?",
   "answer": "2",
   "hint": "$b = 10^{0{,}301}$.",
   "explain": "$b = 2$: bakteri berlipat dua tiap jam.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Potongan $\\lg k$ (nilai $\\lg N$ saat $t = 0$)?",
   "answer": "1,699",
   "hint": "Mundur satu jam dari $t = 1$: $2{,}000 - 0{,}301$.",
   "explain": "$\\lg k = 1{,}699$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Berapa $k = 10^{1{,}699}$? Bulatkan ke bilangan bulat.",
   "answer": "50",
   "hint": "Pakai kalkulator.",
   "explain": "$k \\approx 50$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Taksir $N(8) = 50 \\times 2^8$.",
   "answer": "12.800",
   "hint": "$2^8 = 256$.",
   "explain": "$50 \\times 256 = 12.800$.",
   "error": "salah-langkah-materi",
   "suffix": "bakteri"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $N(3) = 50 \\times 2^3$?",
   "answer": "400",
   "hint": "$2^3 = 8$.",
   "explain": "400, sesuai tabel. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$N = 50 \\times 2^t$; saat $t = 8$ ada sekitar 12.800 bakteri.",
 "visual": {
  "type": "table",
  "head": [
   "t",
   "1",
   "2",
   "3",
   "4",
   "5"
  ],
  "rows": [
   [
    "N",
    "100",
    "200",
    "400",
    "800",
    "1600"
   ],
   [
    "lg N",
    "2,000",
    "2,301",
    "2,602",
    "2,903",
    "3,204"
   ]
  ]
 }
}
```

## Kesalahan yang sering terjadi

- **Gradien tegak lurus hanya dibalik.** Dari $m = \frac{2}{3}$ menulis $\frac{3}{2}$. Harus dibalik **dan** diberi tanda berlawanan: $-\frac{3}{2}$.
- **Titik sudut tidak berurutan.** Rumus luas memberi hasil salah jika titik diloncati. Urutkan keliling dan ulangi titik pertama.
- **Salah tanda pusat lingkaran.** Dari $(x - 3)^2 + (y + 2)^2 = 25$ menulis pusat $(-3, 2)$. Pusatnya $(3, -2)$.
- **Lupa akar pada jari-jari.** Dari $(x - 3)^2 + (y + 2)^2 = 25$ menulis $r = 25$. Yang benar $r = 5$.
- **Salah membaca potongan pada hukum linear.** Potongan sumbu adalah $\lg a$, bukan $a$. Ingat menghitung $a = 10^{\text{potongan}}$.

## Ringkasan

- Sejajar: $m_1 = m_2$. Tegak lurus: $m_1 m_2 = -1$.
- Titik tengah: rata-rata koordinat.
- Luas poligon: $\frac{1}{2}|\text{jumlah turun kanan} - \text{jumlah naik kanan}|$, titik berurutan.
- Lingkaran: $(x - a)^2 + (y - b)^2 = r^2$, atau $x^2 + y^2 + 2gx + 2fy + c = 0$ dengan pusat $(-g, -f)$ dan $r = \sqrt{g^2 + f^2 - c}$.
- Hukum linear: $y = ax^n \to \lg y = n\lg x + \lg a$; $y = kb^x \to \lg y = (\lg b)x + \lg k$.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Diketahui $A(2, -3)$ dan $B(8, 5)$. Tentukan titik tengah dan gradien $AB$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Koordinat $x$ titik tengah?",
   "answer": "5",
   "hint": "Rata-rata 2 dan 8.",
   "explain": "$\\frac{2 + 8}{2} = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Koordinat $y$ titik tengah?",
   "answer": "1",
   "hint": "Rata-rata $-3$ dan 5.",
   "explain": "$\\frac{-3 + 5}{2} = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Gradien $AB$, paling sederhana?",
   "answer": {
    "num": 4,
    "den": 3
   },
   "hint": "$\\frac{5 - (-3)}{8 - 2}$.",
   "explain": "$\\frac{8}{6} = \\frac{4}{3}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "Titik tengah $(5, 1)$, gradien $\\frac{4}{3}$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Tentukan persamaan garis melalui $(1, 4)$ yang tegak lurus garis $2x - y = 3$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Gradien garis $2x - y = 3$?",
   "answer": "2",
   "hint": "Ubah ke bentuk $y = mx + c$.",
   "explain": "$y = 2x - 3$, gradien 2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Gradien garis yang tegak lurus?",
   "options": [
    "$-\\frac{1}{2}$",
    "$\\frac{1}{2}$",
    "$-2$"
   ],
   "answer": "$-\\frac{1}{2}$",
   "hint": "$m_1 m_2 = -1$.",
   "explain": "$2 \\times \\left(-\\frac{1}{2}\\right) = -1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Persamaannya?",
   "options": [
    "$x + 2y = 9$",
    "$2x + y = 6$",
    "$x - 2y = -7$",
    "$x + 2y = 7$"
   ],
   "answer": "$x + 2y = 9$",
   "hint": "$y - 4 = -\\frac{1}{2}(x - 1)$, kalikan 2.",
   "explain": "$2y - 8 = -x + 1$, jadi $x + 2y = 9$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Persamaannya $x + 2y = 9$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Tentukan luas segitiga dengan titik sudut $(0, 0)$, $(4, 1)$, dan $(1, 5)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jumlah turun ke kanan: $0 \\cdot 1 + 4 \\cdot 5 + 1 \\cdot 0$?",
   "answer": "20",
   "hint": "Ulangi titik $(0, 0)$ di ujung.",
   "explain": "$0 + 20 + 0 = 20$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Jumlah naik ke kanan: $0 \\cdot 4 + 1 \\cdot 1 + 5 \\cdot 0$?",
   "answer": "1",
   "hint": "Kalikan $y$ dengan $x$ titik berikutnya.",
   "explain": "$0 + 1 + 0 = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Luasnya?",
   "answer": "9,5",
   "hint": "$\\frac{1}{2}|20 - 1|$.",
   "explain": "$\\frac{19}{2} = 9{,}5$ satuan$^2$.",
   "error": "salah-langkah-materi",
   "suffix": "satuan²"
  }
 ],
 "conclusion": "Luas segitiga $9{,}5$ satuan$^2$.",
 "visual": {
  "type": "table",
  "head": [
   "",
   "titik 1",
   "titik 2",
   "titik 3",
   "titik 1"
  ],
  "rows": [
   [
    "x",
    "0",
    "4",
    "1",
    "0"
   ],
   [
    "y",
    "0",
    "1",
    "5",
    "0"
   ]
  ]
 }
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Tentukan pusat dan jari-jari lingkaran $x^2 + y^2 + 4x - 10y + 13 = 0$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Pusatnya?",
   "options": [
    "$(-2, 5)$",
    "$(2, -5)$",
    "$(4, -10)$",
    "$(-4, 10)$"
   ],
   "answer": "$(-2, 5)$",
   "hint": "$2g = 4$ dan $2f = -10$; pusat $(-g, -f)$.",
   "explain": "$g = 2$, $f = -5$, jadi pusat $(-2, 5)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Jari-jarinya?",
   "answer": "4",
   "hint": "$r = \\sqrt{g^2 + f^2 - c}$ dengan $c = 13$.",
   "explain": "$\\sqrt{4 + 25 - 13} = \\sqrt{16} = 4$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Pusat $(-2, 5)$ dan $r = 4$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Grafik $\\lg y$ terhadap $x$ berupa garis lurus melalui $(0;\\ 0{,}477)$ dan $(2;\\ 1{,}431)$. Jika $y = kb^x$, tentukan $k$ dan $b$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Potongan $\\lg k = 0{,}477$. Berapa $k$? Bulatkan ke bilangan bulat.",
   "answer": "3",
   "hint": "$k = 10^{0{,}477}$.",
   "explain": "$k \\approx 3$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Gradien $\\lg b$?",
   "answer": "0,477",
   "hint": "$\\frac{1{,}431 - 0{,}477}{2 - 0}$.",
   "explain": "$\\frac{0{,}954}{2} = 0{,}477$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Berapa $b$? Bulatkan ke bilangan bulat.",
   "answer": "3",
   "hint": "$b = 10^{0{,}477}$.",
   "explain": "$b \\approx 3$, jadi $y = 3 \\cdot 3^x$.",
   "error": "salah-pembulatan"
  }
 ],
 "conclusion": "Jadi $k = 3$ dan $b = 3$."
}
```
