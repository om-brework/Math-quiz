---
id: sma3-10-korelasi-regresi
judul: Korelasi dan Regresi Linear
jenjang: sma3
moe: "H2 Mathematics 9758 · Probability and Statistics · Correlation and linear regression"
prasyarat: [sma1-04-ukuran-penyebaran, smp3-06-geometri-koordinat, sma1-10-eksponen-logaritma, sma2-04-turunan]
durasi_menit: 70
---

## Kenapa belajar ini?

Apakah makin lama belajar, nilai makin tinggi? Berapa kira-kira harga motor bekas umur 3,5 tahun? Korelasi mengukur seberapa kuat hubungan linear dua besaran. Regresi memberi rumus garis untuk memperkirakan satu besaran dari besaran lain.

## Analogi

Bayangkan setiap data adalah **paku** yang ditancapkan di papan. Kita ingin memasang **sebatang penggaris** yang mewakili pola paku-paku itu. Setiap paku dihubungkan ke penggaris dengan **pegas tegak lurus ke atas atau ke bawah**. Pegas yang lebih teregang menarik lebih kuat, dan energinya sebanding dengan **kuadrat** panjang regangan.

- Penggaris akan berhenti di posisi yang membuat **total energi pegas paling kecil**. Itulah **garis regresi**.
- Jika paku-paku berbaris rapat di sekitar penggaris, pegas hampir tidak teregang: **korelasi kuat**.
- Jika paku-paku tersebar seperti awan bulat, penggaris tidak banyak membantu: **korelasi lemah**.

```anim
{"type": "grafik", "title": "Paku dan penggaris", "xmin": 0, "xmax": 6, "ymin": 0, "ymax": 7, "kurva": [{"f": "1.3+0.9x", "label": "y = 1{,}3 + 0{,}9x"}], "titik": [{"x": 1, "y": 2, "label": ""}, {"x": 2, "y": 3, "label": ""}, {"x": 3, "y": 5, "label": ""}, {"x": 4, "y": 4, "label": ""}, {"x": 5, "y": 6, "label": ""}], "langkah": [{"say": "Lima paku ditancapkan di papan: data $(x, y)$.", "kurva": 0, "titik": 5}, {"say": "Penggaris berhenti di posisi dengan total energi pegas (kuadrat jarak tegak) paling kecil.", "kurva": 1, "titik": 5}, {"say": "Paku-paku cukup dekat dengan penggaris: korelasi positif yang kuat ($r \\approx 0{,}9$).", "kurva": 1, "titik": 5}]}
```

## Konsep

### Diagram pencar

Data berpasangan $(x, y)$ digambar sebagai titik pada **diagram pencar**. Perhatikan polanya:

- naik dari kiri ke kanan: korelasi linear **positif**;
- turun: korelasi linear **negatif**;
- tidak berpola: **tidak ada** korelasi linear;
- melengkung: hubungan **tak linear**, yang mungkin bisa diluruskan dengan transformasi.

### Koefisien korelasi $r$

Definisikan jumlah-jumlah berikut:

$$S_{xx} = \sum (x - \bar{x})^2 = \sum x^2 - \frac{(\sum x)^2}{n}, \qquad S_{yy} = \sum y^2 - \frac{(\sum y)^2}{n},$$

$$S_{xy} = \sum (x - \bar{x})(y - \bar{y}) = \sum xy - \frac{(\sum x)(\sum y)}{n}.$$

**Kenapa $S_{xy}$?** Tarik garis bantu $x = \bar{x}$ dan $y = \bar{y}$. Titik di kanan-atas dan kiri-bawah membuat $(x - \bar{x})(y - \bar{y})$ positif. Titik di kiri-atas dan kanan-bawah membuatnya negatif. Jadi tanda $S_{xy}$ menunjukkan arah hubungan.

```anim
{"type": "grafik", "title": "Empat kuadran di sekitar titik rata-rata", "xmin": 0, "xmax": 6, "ymin": 0, "ymax": 7, "kurva": [], "titik": [{"x": 3, "y": 4, "label": "(x̄, ȳ)"}, {"x": 1, "y": 2, "label": ""}, {"x": 2, "y": 3, "label": ""}, {"x": 3, "y": 5, "label": ""}, {"x": 4, "y": 4, "label": ""}, {"x": 5, "y": 6, "label": ""}], "garis": [{"x": 3}, {"y": 4}], "langkah": [{"say": "Data yang sama: (1, 2), (2, 3), (3, 5), (4, 4), (5, 6). Rata-ratanya $\\bar{x} = 3$, $\\bar{y} = 4$.", "kurva": 0, "titik": 6}, {"say": "Tarik garis bantu $x = \\bar{x}$ dan $y = \\bar{y}$.", "kurva": 0, "titik": 6, "garis": 2}, {"say": "Titik kiri-bawah dan kanan-atas menyumbang hasil kali positif: $(-2)(-2) + (-1)(-1) + (2)(2) = 9$. Jadi $S_{xy} = 9 > 0$, hubungan positif.", "kurva": 0, "titik": 6, "garis": 2}]}
```

Supaya tidak bergantung pada satuan, $S_{xy}$ dibagi dengan ukuran penyebaran masing-masing:

$$r = \frac{S_{xy}}{\sqrt{S_{xx}\,S_{yy}}}, \qquad -1 \le r \le 1.$$

- $r$ dekat $1$: hubungan linear positif kuat; $r$ dekat $-1$: negatif kuat.
- $r$ dekat $0$: **tidak ada hubungan linear**. Bisa saja ada hubungan melengkung yang kuat.
- **Korelasi bukan sebab-akibat.** Penjualan es krim dan kasus tenggelam sama-sama naik di musim panas, tetapi yang satu tidak menyebabkan yang lain.

### Garis regresi $y$ atas $x$

Kita mencari garis $y = a + bx$ yang meminimumkan total energi pegas, yaitu jumlah kuadrat jarak **tegak**:

$$Q(a, b) = \sum (y - a - bx)^2.$$

Turunkan $Q$ terhadap $a$ (dengan $b$ dianggap tetap) dan samakan dengan nol:

$$-2\sum (y - a - bx) = 0 \;\Longrightarrow\; \bar{y} = a + b\bar{x}.$$

Jadi garis regresi **selalu melalui titik rata-rata** $(\bar{x}, \bar{y})$. Turunkan terhadap $b$ (dengan $a$ tetap):

$$-2\sum x(y - a - bx) = 0 \;\Longrightarrow\; \sum xy = a\sum x + b\sum x^2.$$

Substitusi $a = \bar{y} - b\bar{x}$, lalu sederhanakan:

$$b = \frac{S_{xy}}{S_{xx}}, \qquad a = \bar{y} - b\bar{x}.$$

Garis ini disebut **garis regresi kuadrat terkecil $y$ atas $x$**. Garis ini dipakai untuk memperkirakan $y$ dari $x$, terutama jika $x$ adalah variabel yang dikendalikan atau bebas.

### Menafsirkan dan memperkirakan

- **Gradien $b$**: setiap $x$ naik 1 satuan, $y$ diperkirakan berubah $b$ satuan.
- **Interpolasi** (nilai $x$ di dalam rentang data) dapat dipercaya jika $|r|$ dekat 1.
- **Ekstrapolasi** (nilai $x$ di luar rentang data) tidak dapat dipercaya, karena pola belum tentu berlanjut.

### Transformasi ke bentuk linear

Jika diagram pencar melengkung, ubah variabel supaya titik-titik berbaris lurus.

```visual
{"type": "table", "head": ["Model", "Bentuk linear", "Variabel yang diregresikan"], "rows": [["y = a + b x²", "y = a + b (x²)", "y atas x²"], ["y = a + b ln x", "y = a + b (ln x)", "y atas ln x"], ["y = a eᵇˣ", "ln y = ln a + b x", "ln y atas x"], ["y = a xᵇ", "ln y = ln a + b (ln x)", "ln y atas ln x"]], "caption": "Meluruskan pola melengkung"}
```

Pilih model yang $|r|$-nya paling dekat dengan 1, dan yang diagram pencarnya paling lurus. Setelah mendapat garis, kembalikan ke model asal.

```anim
{"type": "grafik", "title": "Pola melengkung diluruskan", "xmin": 0, "xmax": 5, "ymin": 0, "ymax": 12, "kurva": [{"f": "exp(0.5x)", "label": "y = e^{0{,}5x}"}, {"f": "0.5x", "label": "\\ln y = 0{,}5x"}], "langkah": [{"say": "Data mengikuti $y = e^{0{,}5x}$: melengkung, garis lurus kurang cocok.", "kurva": 1}, {"say": "Ambil ln: $\\ln y = 0{,}5x$. Sekarang polanya lurus, jadi regresikan $\\ln y$ atas $x$.", "kurva": 2}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menghitung $r$ dari ringkasan data

```soal
{
 "title": "Contoh 1",
 "text": "Untuk 8 siswa, $x$ adalah jam bermain gim per minggu dan $y$ adalah skor kuis (skala 20). Diketahui $\\sum x = 40$, $\\sum y = 96$, $\\sum x^2 = 240$, $\\sum y^2 = 1240$, $\\sum xy = 440$. Hitung $r$ dan tafsirkan.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: $S_{xx} = 240 - \\frac{40^2}{8}$ = ?",
   "answer": "40",
   "hint": "$\\frac{1600}{8} = 200$.",
   "explain": "$S_{xx} = 40$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$S_{yy} = 1240 - \\frac{96^2}{8}$ = ?",
   "answer": "88",
   "hint": "$\\frac{9216}{8} = 1152$.",
   "explain": "$S_{yy} = 88$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $S_{xy} = 440 - \\frac{40 \\times 96}{8}$ = ?",
   "answer": "-40",
   "hint": "Jangan lupa membagi dengan $n = 8$.",
   "explain": "$440 - 480 = -40$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $r = \\frac{-40}{\\sqrt{40 \\times 88}}$, bulatkan ke 3 desimal.",
   "answer": "-0,674",
   "hint": "$\\sqrt{3520} \\approx 59{,}33$.",
   "explain": "$r \\approx -0{,}674$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Tafsiran yang tepat?",
   "options": [
    "Korelasi linear negatif sedang; bukan bukti sebab-akibat",
    "Bermain gim menyebabkan skor turun",
    "Tidak ada hubungan sama sekali"
   ],
   "answer": "Korelasi linear negatif sedang; bukan bukti sebab-akibat",
   "hint": "Lihat tanda dan besar $r$; ingat korelasi bukan sebab-akibat.",
   "explain": "Siswa yang lebih lama bermain gim cenderung mendapat skor lebih rendah, tetapi ini tidak membuktikan gim penyebabnya.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $r \\approx -0{,}674$: korelasi linear negatif sedang."
}
```

### Contoh 2: Garis regresi dan perkiraan

```soal
{
 "title": "Contoh 2",
 "text": "Data jam belajar tambahan per minggu ($x$) dan nilai ujian ($y$) enam siswa ada di tabel. Tentukan $r$, garis regresi $y$ atas $x$, lalu perkirakan nilai untuk $x = 4{,}5$ dan komentari perkiraan untuk $x = 12$. Diketahui $\\sum x = 21$, $\\sum y = 394$, $\\sum x^2 = 91$, $\\sum y^2 = 26.434$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: $\\sum xy$ = ?",
   "answer": "1477",
   "hint": "52 + 116 + 183 + 280 + 360 + 486.",
   "explain": "$\\sum xy = 1.477$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $S_{xx} = 91 - \\frac{21^2}{6}$ = ?",
   "answer": "17,5",
   "hint": "$\\frac{441}{6} = 73{,}5$.",
   "explain": "$S_{xx} = 17{,}5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$S_{xy} = 1477 - \\frac{21 \\times 394}{6}$ = ?",
   "answer": "98",
   "hint": "$\\frac{8274}{6} = 1379$.",
   "explain": "$S_{xy} = 98$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Dengan $S_{yy} \\approx 561{,}33$, $r = \\frac{98}{\\sqrt{17{,}5 \\times 561{,}33}}$, bulatkan ke 3 desimal.",
   "answer": "0,989",
   "hint": "$\\sqrt{9823{,}3} \\approx 99{,}11$.",
   "explain": "$r \\approx 0{,}989$: positif sangat kuat.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $b = \\frac{S_{xy}}{S_{xx}}$ = ?",
   "answer": "5,6",
   "hint": "$\\frac{98}{17{,}5}$.",
   "explain": "$b = 5{,}6$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$a = \\bar{y} - b\\bar{x}$ dengan $\\bar{y} = \\frac{394}{6}$, $\\bar{x} = 3{,}5$. Bulatkan ke 2 desimal.",
   "answer": "46,07",
   "hint": "$65{,}667 - 19{,}6$.",
   "explain": "$a \\approx 46{,}07$, garisnya $y = 46{,}07 + 5{,}6x$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Perkiraan untuk $x = 4{,}5$, bulatkan ke 2 desimal.",
   "answer": "71,27",
   "hint": "$46{,}07 + 5{,}6 \\times 4{,}5$.",
   "explain": "$46{,}07 + 25{,}2 = 71{,}27$. Interpolasi dengan $r$ dekat 1: dapat dipercaya.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "choice",
   "prompt": "Perkiraan untuk $x = 12$ sekitar 113. Komentarnya?",
   "options": [
    "Tidak dapat dipercaya: ekstrapolasi dan melebihi nilai maksimum 100",
    "Dapat dipercaya karena r dekat 1",
    "Dapat dipercaya karena garisnya lurus"
   ],
   "answer": "Tidak dapat dipercaya: ekstrapolasi dan melebihi nilai maksimum 100",
   "hint": "Apakah $x = 12$ di dalam rentang data 1 sampai 6?",
   "explain": "Di luar rentang data, pola belum tentu berlanjut; nilai 113 bahkan mustahil.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $r \\approx 0{,}989$, garisnya $y = 46{,}07 + 5{,}6x$, perkiraan untuk $x = 4{,}5$ sekitar 71,3, dan perkiraan untuk $x = 12$ tidak dapat dipercaya.",
 "visual": {
  "type": "table",
  "head": [
   "x",
   "1",
   "2",
   "3",
   "4",
   "5",
   "6"
  ],
  "rows": [
   [
    "y",
    "52",
    "58",
    "61",
    "70",
    "72",
    "81"
   ]
  ]
 }
}
```

### Contoh 3: Harga motor bekas, model eksponensial

```soal
{
 "title": "Contoh 3",
 "text": "Harga pasaran ($y$, juta rupiah) sebuah model motor menurut umurnya ($x$, tahun) ada di tabel. Bandingkan model $y = a + bx$ dan $y = ae^{bx}$, pilih yang lebih cocok, lalu perkirakan harga motor berumur 3,5 tahun.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Model $y = ae^{bx}$ diluruskan menjadi?",
   "options": [
    "$\\ln y = \\ln a + bx$",
    "$y = \\ln a + b\\ln x$",
    "$\\ln y = a + b\\ln x$"
   ],
   "answer": "$\\ln y = \\ln a + bx$",
   "hint": "Ambil ln kedua ruas.",
   "explain": "$\\ln y = \\ln a + bx$, jadi regresikan $\\ln y$ atas $x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Hitung $\\ln y$ untuk $x = 1$ ($y = 16$), bulatkan ke 4 desimal.",
   "answer": "2,7726",
   "hint": "$\\ln 16$.",
   "explain": "$\\ln 16 \\approx 2{,}7726$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Kalkulator memberi $r = -0{,}9900$ (linear) dan $r = -0{,}9996$ ($\\ln y$ atas $x$). Model mana yang lebih cocok?",
   "options": [
    "Eksponensial",
    "Linear"
   ],
   "answer": "Eksponensial",
   "hint": "Pilih $|r|$ yang paling dekat 1.",
   "explain": "$0{,}9996 > 0{,}9900$. Masuk akal: harga turun dengan persentase yang kira-kira sama tiap tahun.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Garisnya $\\ln y = 2{,}9369 - 0{,}1694x$. Nilai $a = e^{2{,}9369}$, bulatkan ke 2 desimal.",
   "answer": "18,86",
   "hint": "Titik potong garis adalah $\\ln a$.",
   "explain": "$a \\approx 18{,}86$, jadi $y = 18{,}86\\,e^{-0{,}1694x}$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Untuk $x = 3{,}5$, $\\ln y$ = ? (4 desimal)",
   "answer": "2,344",
   "hint": "$2{,}9369 - 0{,}1694 \\times 3{,}5$.",
   "explain": "$2{,}9369 - 0{,}5929 = 2{,}3440$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Harga $y$ (juta rupiah), bulatkan ke 2 desimal.",
   "answer": "10,42",
   "hint": "Kembalikan transformasi: $y = e^{2{,}3440}$.",
   "explain": "$y \\approx 10{,}42$ juta. Jangan berhenti di 2,344, itu nilai $\\ln y$.",
   "error": "salah-pembulatan",
   "suffix": "juta"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: apakah 10,42 masuk akal?",
   "options": [
    "Ya, di antara harga umur 3 tahun (11,2) dan 4 tahun (9,6)",
    "Tidak, harus lebih dari 11,2",
    "Tidak, harus kurang dari 9,6"
   ],
   "answer": "Ya, di antara harga umur 3 tahun (11,2) dan 4 tahun (9,6)",
   "hint": "Bandingkan dengan data di tabel.",
   "explain": "Umur 3,5 di antara 3 dan 4, harganya juga di antara. Interpolasi.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi model $y = 18{,}86\\,e^{-0{,}1694x}$ lebih cocok, dan harga motor umur 3,5 tahun sekitar Rp10,4 juta.",
 "visual": {
  "type": "table",
  "head": [
   "x",
   "1",
   "2",
   "3",
   "4",
   "5",
   "6"
  ],
  "rows": [
   [
    "y",
    "16,0",
    "13,5",
    "11,2",
    "9,6",
    "8,0",
    "6,9"
   ]
  ]
 }
}
```

## Kesalahan yang sering terjadi

- **Menganggap $r \approx 0$ berarti tidak ada hubungan.** Data $(-2, 4), (-1, 1), (0, 0), (1, 1), (2, 4)$ memiliki $r = 0$, padahal $y = x^2$ tepat. $r$ hanya mengukur hubungan **linear**. Selalu lihat diagram pencarnya.
- **Menyimpulkan sebab-akibat dari $r$ yang kuat.** Korelasi tinggi bisa disebabkan faktor ketiga. Tulis "berkorelasi", bukan "menyebabkan".
- **Lupa membagi dengan $n$ di $S_{xy}$.** Menulis $S_{xy} = \sum xy - \sum x \sum y$. Rumus yang benar: $\sum xy - \frac{(\sum x)(\sum y)}{n}$.
- **Mempercayai ekstrapolasi.** Seperti nilai 113 pada Contoh 2. Garis hanya dapat dipercaya di dalam rentang data.
- **Lupa mengembalikan transformasi.** Pada Contoh 3, menjawab harga 2,344 juta. Itu nilai $\ln y$; harganya $e^{2{,}344} \approx 10{,}42$ juta.

## Ringkasan

- Diagram pencar dulu: lihat arah, kekuatan, dan apakah polanya lurus atau melengkung.
- $r = \frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}$ dengan $-1 \le r \le 1$; mengukur kekuatan hubungan **linear**, bukan sebab-akibat.
- Garis regresi $y$ atas $x$: $b = \frac{S_{xy}}{S_{xx}}$, $a = \bar{y} - b\bar{x}$; selalu melalui $(\bar{x}, \bar{y})$.
- Interpolasi dapat dipercaya jika $|r|$ dekat 1; ekstrapolasi tidak.
- Hubungan melengkung diluruskan dengan transformasi ($x^2$, $\ln x$, $\ln y$); pilih model dengan $|r|$ paling dekat 1.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Diketahui $S_{xx} = 40$, $S_{yy} = 90$, $S_{xy} = 54$. Hitung $r$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\sqrt{40 \\times 90}$ = ?",
   "answer": "60",
   "hint": "$\\sqrt{3600}$.",
   "explain": "60.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$r$ = ?",
   "answer": "0,9",
   "hint": "$\\frac{54}{60}$.",
   "explain": "$r = 0{,}9$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $r = 0{,}9$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Dengan data nomor 1, $\\bar{x} = 5$ dan $\\bar{y} = 20$. Tentukan garis regresi $y$ atas $x$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$b = \\frac{S_{xy}}{S_{xx}}$ = ?",
   "answer": "1,35",
   "hint": "$\\frac{54}{40}$.",
   "explain": "$b = 1{,}35$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$a = \\bar{y} - b\\bar{x}$ = ?",
   "answer": "13,25",
   "hint": "$20 - 1{,}35 \\times 5$.",
   "explain": "$a = 13{,}25$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Garis regresinya?",
   "options": [
    "$y = 13{,}25 + 1{,}35x$",
    "$y = 1{,}35 + 13{,}25x$",
    "$x = 13{,}25 + 1{,}35y$"
   ],
   "answer": "$y = 13{,}25 + 1{,}35x$",
   "hint": "Bentuknya $y = a + bx$.",
   "explain": "$y = 13{,}25 + 1{,}35x$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $y = 13{,}25 + 1{,}35x$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Dengan garis dari nomor 2, perkirakan $y$ untuk $x = 7$ (nilai $x$ data berkisar 1 sampai 10).",
 "steps": [
  {
   "kind": "number",
   "prompt": "$y$ = ?",
   "answer": "22,7",
   "hint": "$13{,}25 + 1{,}35 \\times 7$.",
   "explain": "$13{,}25 + 9{,}45 = 22{,}7$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Seberapa dapat dipercaya?",
   "options": [
    "Cukup dapat dipercaya: interpolasi dan r = 0,9",
    "Tidak dapat dipercaya: ekstrapolasi",
    "Pasti tepat"
   ],
   "answer": "Cukup dapat dipercaya: interpolasi dan r = 0,9",
   "hint": "Apakah 7 di dalam rentang 1 sampai 10?",
   "explain": "7 di dalam rentang data dan korelasinya kuat.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $y \\approx 22{,}7$, cukup dapat dipercaya."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Model $y = ax^b$ ingin diuji. Variabel apa yang harus dihitung koefisien korelasinya, dan apa arti gradien serta titik potong garisnya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Bentuk linearnya?",
   "options": [
    "$\\ln y = \\ln a + b\\ln x$",
    "$\\ln y = \\ln a + bx$",
    "$y = a + b\\ln x$"
   ],
   "answer": "$\\ln y = \\ln a + b\\ln x$",
   "hint": "Ambil ln kedua ruas; $\\ln x^b = b\\ln x$.",
   "explain": "$\\ln y = \\ln a + b\\ln x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Korelasi dihitung antara...",
   "options": [
    "$\\ln y$ dan $\\ln x$",
    "$\\ln y$ dan $x$",
    "$y$ dan $\\ln x$"
   ],
   "answer": "$\\ln y$ dan $\\ln x$",
   "hint": "Lihat variabel di bentuk linear.",
   "explain": "Regresikan $\\ln y$ atas $\\ln x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Gradien dan titik potongnya?",
   "options": [
    "gradien $b$, titik potong $\\ln a$",
    "gradien $\\ln b$, titik potong $a$",
    "gradien $a$, titik potong $b$"
   ],
   "answer": "gradien $b$, titik potong $\\ln a$",
   "hint": "Cocokkan dengan $Y = c + mX$.",
   "explain": "Gradien $b$, titik potong $\\ln a$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi hitung $r$ antara $\\ln y$ dan $\\ln x$; gradiennya $b$ dan titik potongnya $\\ln a$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Hitung $r$ untuk data $(-2, 4), (-1, 1), (0, 0), (1, 1), (2, 4)$, lalu jelaskan artinya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\sum x$ = ?",
   "answer": "0",
   "hint": "−2 − 1 + 0 + 1 + 2.",
   "explain": "$\\sum x = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\sum xy$ = ?",
   "answer": "0",
   "hint": "−8 − 1 + 0 + 1 + 8.",
   "explain": "$\\sum xy = 0$, jadi $S_{xy} = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$r$ = ?",
   "answer": "0",
   "hint": "$S_{xy} = 0$.",
   "explain": "$r = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Artinya?",
   "options": [
    "Tidak ada hubungan linear, tetapi ada hubungan kuadrat sempurna",
    "Tidak ada hubungan sama sekali",
    "Hubungan linear sempurna"
   ],
   "answer": "Tidak ada hubungan linear, tetapi ada hubungan kuadrat sempurna",
   "hint": "Lihat polanya: $y = x^2$.",
   "explain": "$r$ hanya mengukur hubungan linear; datanya tepat di $y = x^2$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $r = 0$: tidak ada hubungan linear, tetapi ada hubungan kuadrat sempurna $y = x^2$."
}
```
