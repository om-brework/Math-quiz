---
id: smp1-08-fungsi-linear
judul: Koordinat dan Grafik Fungsi Linear
jenjang: smp1
moe: "Secondary 1 · Number and Algebra · N6 Functions and graphs"
prasyarat: [smp1-02-bilangan-bulat-real, smp1-07-bentuk-aljabar]
durasi_menit: 50
---

## Kenapa belajar ini?

Tarif taksi online, tagihan air, dan tabungan yang bertambah tetap setiap bulan semuanya membentuk garis lurus kalau digambar. Dengan grafik, kamu bisa melihat sekilas mana yang naik cepat, mana yang turun, dan berapa nilainya untuk angka tertentu.

## Analogi

Bayangkan sebuah **gedung parkir bertingkat**. Untuk menemukan mobil, kamu perlu dua petunjuk:

1. **Berjalan di lantai dasar** ke kanan atau ke kiri dari pintu masuk. Ini koordinat $x$.
2. **Naik atau turun lift** dari lantai dasar. Ini koordinat $y$.

Urutannya selalu **jalan dulu, baru naik lift**. Pintu masuk di lantai dasar adalah titik asal $(0, 0)$. Lantai di bawah tanah dan arah ke kiri diberi tanda negatif.

```anim
{"type": "grafik", "title": "Mencari mobil di gedung parkir", "xmin": -5, "xmax": 5, "ymin": -4, "ymax": 4, "kurva": [{"f": "0", "dari": 0, "sampai": 3}], "titik": [{"x": 3, "y": 0, "label": "jalan 3"}, {"x": 3, "y": 2, "label": "naik 2: (3, 2)"}, {"x": -2, "y": -3, "label": "(−2, −3)"}], "langkah": [{"say": "Pintu masuk di titik asal (0, 0).", "kurva": 0}, {"say": "Jalan dulu 3 petak ke kanan di lantai dasar.", "kurva": 1, "titik": 1}, {"say": "Lalu naik lift 2 lantai. Mobil ada di (3, 2).", "kurva": 1, "titik": 2}, {"say": "Mobil lain di (−2, −3): jalan 2 ke kiri, turun 3 lantai.", "kurva": 1, "titik": 3}]}
```

Untuk garis, bayangkan **tangga** di gedung itu. **Gradien** menjawab: setiap kamu melangkah 1 petak ke kanan, kamu naik (atau turun) berapa lantai?

## Konsep

### Bidang Kartesius dan pasangan berurutan

Bidang Kartesius dibentuk oleh dua garis bilangan: **sumbu-$x$** mendatar dan **sumbu-$y$** tegak. Keduanya berpotongan di **titik asal** $O(0, 0)$.

Setiap titik ditulis sebagai **pasangan berurutan** $(x, y)$. Disebut "berurutan" karena urutannya penting: $(2, 5)$ dan $(5, 2)$ adalah dua titik berbeda.

Kedua sumbu membagi bidang menjadi empat **kuadran**:

```visual
{"type": "table", "head": ["Kuadran", "Tanda x", "Tanda y", "Letak"], "rows": [["I", "+", "+", "kanan atas"], ["II", "−", "+", "kiri atas"], ["III", "−", "−", "kiri bawah"], ["IV", "+", "−", "kanan bawah"]], "caption": "Kuadran dinomori berlawanan arah jarum jam, mulai dari kanan atas"}
```

Titik yang berada tepat di sumbu tidak termasuk kuadran mana pun.

### Fungsi linear

**Fungsi** adalah aturan yang memasangkan setiap nilai $x$ dengan tepat satu nilai $y$. Fungsi linear berbentuk

$$y = ax + b$$

dengan $a$ dan $b$ bilangan tetap. Grafiknya selalu **garis lurus**. Kenapa lurus? Karena setiap $x$ bertambah 1, $y$ selalu bertambah tepat $a$. Langkah tangganya sama terus, tidak berubah-ubah.

- $b$ adalah nilai $y$ saat $x = 0$. Di sinilah garis memotong sumbu-$y$.
- $a$ adalah **gradien**, yaitu kemiringan garis.

### Gradien

$$\text{gradien} = \frac{\text{perubahan tegak}}{\text{perubahan mendatar}} = \frac{y_2 - y_1}{x_2 - x_1}$$

Selalu baca grafik **dari kiri ke kanan**, seperti berjalan maju:

- **Gradien positif**: garis naik. Tangga menanjak.
- **Gradien negatif**: garis turun. Tangga menurun.
- **Gradien nol**: garis mendatar. Lantai rata.

Semakin besar angka gradiennya (tanpa melihat tanda), semakin curam garisnya.

```anim
{"type": "grafik", "title": "Gradien positif, negatif, dan nol", "xmin": -4, "xmax": 4, "ymin": -4, "ymax": 4, "kurva": [{"f": "2x", "label": "y = 2x"}, {"f": "-x+1", "label": "y = -x + 1"}, {"f": "-3", "label": "y = -3"}], "langkah": [{"say": "Gradien 2: setiap 1 petak ke kanan, naik 2. Garis menanjak.", "kurva": 1}, {"say": "Gradien −1: setiap 1 petak ke kanan, turun 1. Garis menurun.", "kurva": 2}, {"say": "Gradien 0: tidak naik, tidak turun. Garis mendatar.", "kurva": 3}]}
```

### Menggambar grafik fungsi linear

1. Buat tabel nilai: pilih beberapa nilai $x$, hitung $y$.
2. Gambar titik-titiknya pada bidang Kartesius.
3. Hubungkan dengan penggaris menjadi satu garis lurus.

```anim
{"type": "grafik", "title": "Grafik y = 2x − 1 dari tabel nilai", "xmin": -2, "xmax": 4, "ymin": -4, "ymax": 6, "kurva": [{"f": "2x-1", "label": "y = 2x - 1"}], "titik": [{"x": -1, "y": -3, "label": "(−1, −3)"}, {"x": 0, "y": -1, "label": "(0, −1)"}, {"x": 1, "y": 1, "label": "(1, 1)"}, {"x": 2, "y": 3, "label": "(2, 3)"}, {"x": 3, "y": 5, "label": "(3, 5)"}], "langkah": [{"say": "Gambar titik-titik dari tabel nilai.", "kurva": 0, "titik": 5}, {"say": "Hubungkan dengan penggaris. Semua titik segaris.", "kurva": 1, "titik": 5}]}
```

Dua titik sudah cukup untuk membuat garis, tetapi tiga titik lebih aman. Kalau tiga titik tidak segaris, pasti ada yang salah hitung.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Membaca koordinat dan kuadran

```soal
{
 "title": "Contoh 1",
 "text": "Tentukan kuadran atau letak titik $A(3, 2)$, $B(-2, 4)$, $C(-3, -1)$, dan $D(4, 0)$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Titik mana yang x-nya negatif (jalan ke kiri)?",
   "options": [
    "B dan C",
    "A dan D",
    "C saja"
   ],
   "answer": "B dan C",
   "hint": "Lihat angka pertama.",
   "explain": "B(−2, 4) dan C(−3, −1).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: A(3, 2) ada di",
   "options": [
    "Kuadran I",
    "Kuadran II",
    "Kuadran III",
    "Kuadran IV"
   ],
   "answer": "Kuadran I",
   "hint": "x positif, y positif.",
   "explain": "(+, +) adalah kuadran I.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "B(−2, 4) ada di",
   "options": [
    "Kuadran I",
    "Kuadran II",
    "Kuadran III",
    "Kuadran IV"
   ],
   "answer": "Kuadran II",
   "hint": "x negatif, y positif.",
   "explain": "(−, +) adalah kuadran II.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "C(−3, −1) ada di",
   "options": [
    "Kuadran I",
    "Kuadran II",
    "Kuadran III",
    "Kuadran IV"
   ],
   "answer": "Kuadran III",
   "hint": "Keduanya negatif.",
   "explain": "(−, −) adalah kuadran III.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: D(4, 0) ada di",
   "options": [
    "Kuadran I",
    "Kuadran IV",
    "Pada sumbu-x",
    "Pada sumbu-y"
   ],
   "answer": "Pada sumbu-x",
   "hint": "y = 0 berarti tidak naik atau turun.",
   "explain": "D tepat di sumbu-x, tidak termasuk kuadran mana pun.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "A kuadran I, B kuadran II, C kuadran III, D pada sumbu-x."
}
```

### Contoh 2: Menggambar y = 2x − 1

```soal
{
 "title": "Contoh 2",
 "text": "Buat tabel nilai $y = 2x - 1$ untuk $x$ dari $-1$ sampai 3, lalu tentukan gradien dan titik potong dengan sumbu-$y$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Untuk x = −1, y = ?",
   "answer": "-3",
   "hint": "2(−1) − 1.",
   "explain": "y = −3, titiknya (−1, −3).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Untuk x = 3, y = ?",
   "answer": "5",
   "hint": "2(3) − 1.",
   "explain": "y = 5. Tabel lengkap: −3, −1, 1, 3, 5.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Untuk menggambar (−1, −3), kamu",
   "options": [
    "jalan 1 ke kiri, lalu turun 3",
    "turun 1, lalu jalan 3 ke kiri",
    "jalan 3 ke kiri, lalu turun 1"
   ],
   "answer": "jalan 1 ke kiri, lalu turun 3",
   "hint": "Jalan dulu (x), baru naik/turun lift (y).",
   "explain": "x = −1 dulu, lalu y = −3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Setiap x bertambah 1, y bertambah? (gradien)",
   "answer": "2",
   "hint": "Lihat tabel: −3, −1, 1, ...",
   "explain": "Gradien 2, garis naik.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Saat x = 0, y = ? (titik potong sumbu-y)",
   "answer": "-1",
   "hint": "Lihat tabel di kolom x = 0.",
   "explain": "Titik potong (0, −1).",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Gradien 2, memotong sumbu-y di (0, −1).",
 "visual": {
  "type": "table",
  "head": [
   "x",
   "−1",
   "0",
   "1",
   "2",
   "3"
  ],
  "rows": [
   [
    "y",
    "?",
    "−1",
    "1",
    "3",
    "?"
   ]
  ]
 }
}
```

### Contoh 3: Gradien dari dua titik

```soal
{
 "title": "Contoh 3",
 "text": "Hitung gradien garis yang melalui $P(1, 5)$ dan $Q(4, -1)$. Apakah garisnya naik atau turun?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Perubahan mendatar 4 − 1 = ?",
   "answer": "3",
   "hint": "Dari x = 1 ke x = 4.",
   "explain": "Jalan 3 ke kanan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Perubahan tegak −1 − 5 = ?",
   "answer": "-6",
   "hint": "Dari y = 5 ke y = −1.",
   "explain": "Turun 6 lantai.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Gradien = −6 ÷ 3 = ?",
   "answer": "-2",
   "hint": "Tegak dibagi mendatar.",
   "explain": "Gradien −2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Garisnya",
   "options": [
    "turun dari kiri ke kanan",
    "naik dari kiri ke kanan",
    "mendatar"
   ],
   "answer": "turun dari kiri ke kanan",
   "hint": "Lihat tanda gradien.",
   "explain": "Gradien negatif berarti turun.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung terbalik (5 − (−1)) ÷ (1 − 4) = ?",
   "answer": "-2",
   "hint": "6 ÷ (−3).",
   "explain": "Sama: −2.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Gradien −2, garis turun."
}
```

### Contoh 4: Soal cerita tarif taksi online

```soal
{
 "title": "Contoh 4",
 "text": "Tarif taksi online Rp10.000 untuk naik, ditambah Rp4.000 per km. (a) Tulis fungsi biaya y untuk jarak x km. (b) Berapa biaya untuk 7 km? (c) Apa arti gradiennya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Bagian tetap (b) yang dibayar walau x = 0?",
   "answer": "10000",
   "hint": "Biaya naik.",
   "explain": "b = 10.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Tambahan per km (gradien a)?",
   "answer": "4000",
   "hint": "Setiap 1 km.",
   "explain": "a = 4.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Fungsinya",
   "options": [
    "$y = 4.000x + 10.000$",
    "$y = 10.000x + 4.000$",
    "$y = 14.000x$"
   ],
   "answer": "$y = 4.000x + 10.000$",
   "hint": "Gradien dikalikan x, bagian tetap ditambahkan.",
   "explain": "y = 4.000x + 10.000.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Biaya untuk 7 km?",
   "answer": "38000",
   "hint": "4.000 × 7 + 10.000.",
   "explain": "Rp38.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Gradien 4.000 berarti",
   "options": [
    "biaya naik Rp4.000 untuk setiap tambahan 1 km",
    "biaya awal Rp4.000",
    "biaya total Rp4.000"
   ],
   "answer": "biaya naik Rp4.000 untuk setiap tambahan 1 km",
   "hint": "Gradien = perubahan y untuk setiap x bertambah 1.",
   "explain": "Setiap km menambah Rp4.000.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "y = 4.000x + 10.000; 7 km Rp38.000; gradien = tambahan biaya per km."
}
```

## Kesalahan yang sering terjadi

- **Menukar urutan koordinat.** Menggambar $(2, 5)$ dengan naik 2 lalu ke kanan 5. Ingat: jalan dulu ($x$), baru naik lift ($y$).
- **Tanda negatif pada gradien hilang.** Pada Contoh 3 menulis gradien 2. Garis yang turun dari kiri ke kanan selalu bergradien negatif.
- **Mencampur urutan titik.** Menghitung $\frac{-1 - 5}{1 - 4}$. Pembilang dari $Q$ ke $P$, penyebut dari $P$ ke $Q$. Hasilnya $+2$, salah. Urutan titik di atas dan di bawah harus sama.
- **Menghubungkan titik dengan garis bengkok.** Kalau titik tidak segaris, periksa lagi tabelmu. Grafik fungsi linear selalu lurus.

## Ringkasan

- Titik ditulis $(x, y)$: $x$ mendatar dulu, lalu $y$ tegak.
- Empat kuadran: I $(+, +)$, II $(-, +)$, III $(-, -)$, IV $(+, -)$.
- Fungsi linear $y = ax + b$ grafiknya garis lurus. $b$ adalah titik potong sumbu-$y$.
- Gradien $= \frac{y_2 - y_1}{x_2 - x_1}$. Positif berarti naik, negatif berarti turun.
- Gambar grafik dari tabel nilai, minimal tiga titik.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Di kuadran mana titik $(-5, 3)$?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Tanda x dan y",
   "options": [
    "(−, +)",
    "(+, −)",
    "(−, −)"
   ],
   "answer": "(−, +)",
   "hint": "−5 dan 3.",
   "explain": "x negatif, y positif.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Kuadrannya",
   "options": [
    "Kuadran I",
    "Kuadran II",
    "Kuadran III",
    "Kuadran IV"
   ],
   "answer": "Kuadran II",
   "hint": "Kiri atas.",
   "explain": "(−, +) adalah kuadran II.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Kuadran II."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Lengkapi tabel $y = 3x + 1$ untuk $x = -2$, $0$, dan $2$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "x = −2, y = ?",
   "answer": "-5",
   "hint": "3(−2) + 1.",
   "explain": "−6 + 1 = −5.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "x = 0, y = ?",
   "answer": "1",
   "hint": "3(0) + 1.",
   "explain": "y = 1.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "x = 2, y = ?",
   "answer": "7",
   "hint": "3(2) + 1.",
   "explain": "6 + 1 = 7.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "y = −5, 1, dan 7."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung gradien garis yang melalui $(2, 3)$ dan $(6, 11)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Perubahan tegak 11 − 3 = ?",
   "answer": "8",
   "hint": "Kurangkan y.",
   "explain": "Naik 8.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Perubahan mendatar 6 − 2 = ?",
   "answer": "4",
   "hint": "Kurangkan x dengan urutan sama.",
   "explain": "Jalan 4 ke kanan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Gradien?",
   "answer": "2",
   "hint": "8 ÷ 4.",
   "explain": "Gradien 2.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Gradien 2."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Hitung gradien garis yang melalui $(-1, 4)$ dan $(3, -4)$. Naik atau turun?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Perubahan tegak −4 − 4 = ?",
   "answer": "-8",
   "hint": "Kurangkan y.",
   "explain": "Turun 8.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Perubahan mendatar 3 − (−1) = ?",
   "answer": "4",
   "hint": "Mengurangi negatif sama dengan menambah.",
   "explain": "3 + 1 = 4.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Gradien?",
   "answer": "-2",
   "hint": "−8 ÷ 4.",
   "explain": "−2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Garisnya",
   "options": [
    "turun",
    "naik"
   ],
   "answer": "turun",
   "hint": "Tanda gradien.",
   "explain": "Gradien negatif: turun.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Gradien −2, garis turun."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Untuk $y = -x + 5$, tentukan gradien dan titik potong sumbu-$y$. Apakah titik $(2, 3)$ terletak pada garis ini?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Gradien?",
   "answer": "-1",
   "hint": "Koefisien x pada −x.",
   "explain": "−x berarti −1 × x.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Titik potong sumbu-y di (0, ?)",
   "answer": "5",
   "hint": "Nilai y saat x = 0.",
   "explain": "(0, 5).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Apakah (2, 3) pada garis?",
   "options": [
    "Ya, karena −2 + 5 = 3",
    "Tidak, karena 2 + 5 = 7",
    "Tidak, karena 3 ≠ 2"
   ],
   "answer": "Ya, karena −2 + 5 = 3",
   "hint": "Masukkan x = 2 ke rumus.",
   "explain": "y = −2 + 5 = 3, cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Gradien −1, memotong sumbu-y di (0, 5), dan (2, 3) ada pada garis."
}
```
