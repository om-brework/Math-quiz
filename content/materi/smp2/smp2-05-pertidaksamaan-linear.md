---
id: smp2-05-pertidaksamaan-linear
judul: Pertidaksamaan Linear
jenjang: smp2
moe: "Secondary 2 · Number and Algebra · N7 Equations and inequalities"
prasyarat: [smp1-02-bilangan-bulat-real, smp1-09-persamaan-linear]
durasi_menit: 45
---

## Kenapa belajar ini?

Banyak keputusan sehari-hari berbentuk "paling banyak" atau "paling sedikit". Uangmu Rp50.000, berapa buku paling banyak yang bisa kamu beli? Berapa minggu paling sedikit kamu harus menabung? Pertanyaan seperti ini dijawab dengan pertidaksamaan, bukan persamaan.

## Analogi

Bayangkan sebuah **timbangan yang miring**. Piring kiri lebih berat daripada piring kanan, jadi timbangan miring ke kiri.

- Kalau kamu **menambah atau mengambil beban yang sama** di kedua piring, timbangan tetap miring ke arah yang sama.
- Kalau kamu **melipatgandakan** isi kedua piring (misalnya jadi 3 kali), sisi yang berat tetap lebih berat.

Tetapi ada satu gerakan aneh: **mengalikan dengan bilangan negatif**. Bayangkan isi piring berubah menjadi **utang**. Punya Rp5.000 lebih banyak daripada punya Rp3.000. Tetapi **utang** Rp5.000 lebih buruk (lebih kecil nilainya) daripada utang Rp3.000. Begitu diubah menjadi negatif, arah timbangan **terbalik**.

```anim
{"type": "persamaan", "title": "Harta berubah menjadi utang", "baris": [{"tex": "5.000 > 3.000", "say": "Punya Rp5.000 lebih banyak daripada punya Rp3.000."}, {"tex": "5.000 + 1.000 > 3.000 + 1.000", "say": "Tambah beban yang sama di kedua piring: arah tetap.", "op": "+1.000"}, {"tex": "5.000 \\times 3 > 3.000 \\times 3", "say": "Kali bilangan positif: arah tetap.", "op": "\\times 3"}, {"tex": "-5.000 < -3.000", "say": "Kali $-1$: harta menjadi utang. Utang Rp5.000 lebih buruk, jadi arah terbalik.", "op": "\\times (-1)"}]}
```

Ingat timbangan ini di setiap langkah: semua gerakan aman, kecuali kali atau bagi bilangan negatif, yang membalik arah.

## Konsep

### Arti pertidaksamaan

Pertidaksamaan adalah kalimat matematika yang membandingkan dua bentuk dengan salah satu lambang berikut.

| Lambang | Dibaca | Contoh |
|---|---|---|
| $<$ | kurang dari | $x < 4$ |
| $>$ | lebih dari | $x > -1$ |
| $\le$ | kurang dari atau sama dengan (paling banyak) | $x \le 7$ |
| $\ge$ | lebih dari atau sama dengan (paling sedikit) | $x \ge 2$ |

Persamaan $x + 2 = 5$ hanya punya satu jawaban, yaitu $x = 3$. Pertidaksamaan $x + 2 > 5$ punya **tak hingga banyak** jawaban: $x = 3{,}1$, $x = 4$, $x = 100$, dan seterusnya. Semua jawaban itu disebut **penyelesaian**, dan kita tulis ringkas sebagai $x > 3$.

**Pertidaksamaan linear** adalah pertidaksamaan yang variabelnya berpangkat satu, misalnya $3x - 4 \le 11$.

### Aturan yang boleh dilakukan

Untuk menyelesaikan pertidaksamaan, kita memakai gerakan yang sama seperti pada persamaan, dengan satu pengecualian.

1. **Tambah atau kurangi** kedua ruas dengan bilangan yang sama: tanda **tetap**.
2. **Kali atau bagi** kedua ruas dengan bilangan **positif**: tanda **tetap**.
3. **Kali atau bagi** kedua ruas dengan bilangan **negatif**: tanda **dibalik** ($<$ menjadi $>$, $\le$ menjadi $\ge$, dan sebaliknya).

### Kenapa tandanya dibalik?

Ambil pertidaksamaan yang jelas benar: $2 < 5$. Kalikan kedua ruas dengan $-1$. Kita dapat $-2$ dan $-5$. Pada garis bilangan, $-2$ ada di sebelah **kanan** $-5$, jadi $-2 > -5$.

Mengalikan dengan bilangan negatif sama seperti **mencerminkan** semua bilangan terhadap titik 0. Yang tadinya di kiri pindah ke kanan. Karena urutannya terbalik, tandanya juga harus dibalik.

```visual
{"type": "numberLine", "from": -6, "to": 6, "marks": [-5, -2, 2, 5], "jumps": [{"from": 2, "to": -2, "label": "×(−1)"}, {"from": 5, "to": -5, "label": "×(−1)"}], "caption": "2 di kiri 5, tetapi setelah dicerminkan −2 di kanan −5. Urutannya terbalik."}
```anim
{"type": "grafik", "title": "Garis bilangan x ≤ 5", "xmin": 0, "xmax": 8, "ymin": -1, "ymax": 2, "kurva": [{"f": "0.5", "dari": 0, "sampai": 5, "label": "x \\le 5"}], "titik": [{"x": 5, "y": 0.5, "label": "5 (termasuk)"}], "langkah": [{"say": "Tandai batas 5. Lambang $\\le$: 5 termasuk, jadi bulatan penuh.", "kurva": 0, "titik": 1}, {"say": "Semua bilangan yang kurang dari 5: panah ke kiri.", "kurva": 1, "titik": 1}]}
```
<===================●
 ---+---+---+---+---+---+---+---
    1   2   3   4   5   6   7
```anim
{"type": "grafik", "title": "Garis bilangan x > -3", "xmin": -7, "xmax": 3, "ymin": -1, "ymax": 2, "kurva": [{"f": "0.5", "dari": -3, "sampai": 3, "label": "x > -3"}], "titik": [{"x": -3, "y": 0.5, "label": "−3 (tidak termasuk)"}], "langkah": [{"say": "Tandai batas $-3$. Lambang $>$: $-3$ tidak termasuk, jadi bulatan kosong saat kamu menggambar di buku.", "kurva": 0, "titik": 1}, {"say": "Semua bilangan yang lebih dari $-3$: panah ke kanan.", "kurva": 1, "titik": 1}]}
```
                o========================>
 ---+---+---+---+---+---+---+---+---+---
   -6  -5  -4  -3  -2  -1   0   1   2
```

Pada gambar kedua, bulatan kosong ada di $-3$, dan panah mengarah ke kanan.

## Contoh langkah demi langkah

Setiap contoh memakai urutan yang sama: **pisahkan variabel → bagi koefisien (awasi tandanya) → gambar → cek**.

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Satu langkah

```soal
{
 "title": "Satu langkah",
 "text": "Selesaikan $x + 5 > 12$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Kurangi kedua ruas dengan 5. Ruas kanan menjadi?",
   "answer": "7",
   "hint": "12 − 5.",
   "explain": "Ruas kanan 7. Tanda tetap karena kita hanya mengurangi.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Penyelesaiannya?",
   "options": [
    "$x > 7$",
    "$x < 7$",
    "$x \\ge 7$",
    "$x > 17$"
   ],
   "answer": "$x > 7$",
   "hint": "Mengurangi tidak mengubah arah tanda.",
   "explain": "x > 7.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Gambar di garis bilangan?",
   "options": [
    "Bulatan kosong di 7, panah ke kanan",
    "Bulatan penuh di 7, panah ke kanan",
    "Bulatan kosong di 7, panah ke kiri"
   ],
   "answer": "Bulatan kosong di 7, panah ke kanan",
   "hint": "Lambang $>$ tidak memuat sama dengan.",
   "explain": "7 tidak termasuk, dan 'lebih dari' berarti ke kanan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: apakah $x = 7$ memenuhi $x + 5 > 12$?",
   "options": [
    "Tidak, karena 12 > 12 salah",
    "Ya, karena 12 = 12"
   ],
   "answer": "Tidak, karena 12 > 12 salah",
   "hint": "Masukkan 7.",
   "explain": "7 + 5 = 12, dan 12 > 12 salah. Jadi 7 tidak termasuk, cocok dengan bulatan kosong.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x > 7$."
}
```

### Contoh 2: Dua langkah dengan $\le$

```soal
{
 "title": "Dua langkah dengan ≤",
 "text": "Selesaikan $3x - 4 \\le 11$ dan gambar di garis bilangan.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Tambahkan 4 ke kedua ruas. $3x \\le ?$",
   "answer": "15",
   "hint": "11 + 4.",
   "explain": "$3x \\le 15$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Bagi dengan 3. Tanda?",
   "options": [
    "Tetap, karena 3 positif",
    "Dibalik, karena 3 positif"
   ],
   "answer": "Tetap, karena 3 positif",
   "hint": "Tanda dibalik hanya jika pembaginya negatif.",
   "explain": "$x \\le 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Gambar?",
   "options": [
    "Bulatan penuh di 5, panah ke kiri",
    "Bulatan kosong di 5, panah ke kiri",
    "Bulatan penuh di 5, panah ke kanan"
   ],
   "answer": "Bulatan penuh di 5, panah ke kiri",
   "hint": "$\\le$ berarti 5 termasuk.",
   "explain": "Bulatan penuh, dan 'kurang dari' ke kiri.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung $3(6) - 4$ untuk $x = 6$ di luar daerah.",
   "answer": "14",
   "hint": "18 − 4.",
   "explain": "14 ≤ 11 salah, jadi 6 memang tidak termasuk. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x \\le 5$."
}
```

### Contoh 3: Koefisien negatif

```soal
{
 "title": "Koefisien negatif",
 "text": "Selesaikan $5 - 2x < 11$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Kurangi kedua ruas dengan 5. $-2x < ?$",
   "answer": "6",
   "hint": "11 − 5.",
   "explain": "$-2x < 6$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Bagi dengan $-2$. Hasilnya?",
   "options": [
    "$x > -3$",
    "$x < -3$",
    "$x > 3$",
    "$x < 3$"
   ],
   "answer": "$x > -3$",
   "hint": "Pembaginya negatif: harta menjadi utang.",
   "explain": "$6 \\div (-2) = -3$ dan tanda dibalik: $x > -3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Gambar?",
   "options": [
    "Bulatan kosong di −3, panah ke kanan",
    "Bulatan penuh di −3, panah ke kanan",
    "Bulatan kosong di −3, panah ke kiri"
   ],
   "answer": "Bulatan kosong di −3, panah ke kanan",
   "hint": "Lambangnya $>$.",
   "explain": "Batas −3 tidak termasuk, arah ke kanan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung $5 - 2(-4)$ untuk $x = -4$ di luar daerah.",
   "answer": "13",
   "hint": "5 + 8.",
   "explain": "13 < 11 salah, jadi −4 tidak termasuk. Pembalikan tanda memang perlu.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x > -3$."
}
```

### Contoh 4: Variabel di dua ruas dan pecahan

```soal
{
 "title": "Variabel di dua ruas dan pecahan",
 "text": "Selesaikan $\\dfrac{2x + 1}{3} \\ge x - 2$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Kalikan kedua ruas dengan 3.",
   "options": [
    "$2x + 1 \\ge 3x - 6$",
    "$2x + 1 \\ge 3x - 2$",
    "$2x + 1 \\le 3x - 6$"
   ],
   "answer": "$2x + 1 \\ge 3x - 6$",
   "hint": "Seluruh ruas kanan dikali 3; 3 positif.",
   "explain": "$2x + 1 \\ge 3x - 6$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Kumpulkan $x$ di kiri dan angka di kanan.",
   "options": [
    "$-x \\ge -7$",
    "$-x \\ge -5$",
    "$x \\ge 7$"
   ],
   "answer": "$-x \\ge -7$",
   "hint": "Kurangi $3x$ dan 1 dari kedua ruas.",
   "explain": "$2x - 3x \\ge -6 - 1$, jadi $-x \\ge -7$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Bagi dengan $-1$.",
   "options": [
    "$x \\le 7$",
    "$x \\ge 7$",
    "$x \\le -7$"
   ],
   "answer": "$x \\le 7$",
   "hint": "Pembagi negatif: tanda dibalik.",
   "explain": "$x \\le 7$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: di batas $x = 7$, hitung ruas kiri $\\frac{2(7) + 1}{3}$.",
   "answer": "5",
   "hint": "15 ÷ 3.",
   "explain": "Kiri 5, kanan $7 - 2 = 5$. $5 \\ge 5$ benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x \\le 7$."
}
```

### Contoh 5: Soal cerita

```soal
{
 "title": "Soal cerita",
 "text": "Siti membawa Rp50.000. Ia sudah membeli pulpen Rp8.000. Sisanya untuk buku tulis Rp6.500 per buah. Berapa buku tulis paling banyak yang bisa dibeli?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pertidaksamaannya ($n$ = banyak buku)?",
   "options": [
    "$6.500n + 8.000 \\le 50.000$",
    "$6.500n + 8.000 \\ge 50.000$",
    "$6.500n \\le 50.000$"
   ],
   "answer": "$6.500n + 8.000 \\le 50.000$",
   "hint": "Total belanja tidak boleh lebih dari uangnya; pulpen ikut dihitung.",
   "explain": "Total ≤ 50.000.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kurangi 8.000. $6.500n \\le ?$",
   "answer": "42.000",
   "hint": "50.000 − 8.000.",
   "explain": "6.500n ≤ 42.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $n \\le \\frac{42.000}{6.500}$. Bulatkan hasil bagi ke 2 desimal.",
   "answer": "6,46",
   "hint": "42 ÷ 6,5.",
   "explain": "n ≤ 6,46 (kira-kira).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Banyak buku paling banyak?",
   "answer": "6",
   "hint": "Buku harus utuh dan tidak boleh lebih dari 6,46.",
   "explain": "Bilangan bulat terbesar yang ≤ 6,46 adalah 6.",
   "error": "salah-pembulatan",
   "suffix": "buku"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: total belanja jika membeli 6 buku?",
   "answer": "47.000",
   "hint": "6 × 6.500 + 8.000.",
   "explain": "Rp47.000, cukup. Dengan 7 buku jadi Rp53.500, tidak cukup.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Siti paling banyak membeli 6 buku tulis."
}
```

## Kesalahan yang sering terjadi

- **Lupa membalik tanda.** Dari $-2x < 6$ menulis $x < -3$. Cek dengan $x = -4$: $-2(-4) = 8 < 6$ salah. Ingat timbangan: dibagi bilangan negatif, arah dibalik, jadi $x > -3$.
- **Membalik tanda padahal tidak perlu.** Dari $-6 < 2x$ menulis $x < -3$ karena melihat angka negatif. Yang dibagi adalah koefisien $2$, positif, jadi tanda tetap: $-3 < x$, atau $x > -3$. Tanda dibalik hanya jika **pengali atau pembaginya** negatif.
- **Salah memilih bulatan.** Menggambar $x \le 5$ dengan bulatan kosong. Lambang $\le$ berarti 5 termasuk, jadi pakai bulatan penuh.
- **Salah membulatkan di soal cerita.** Menjawab "7 buku" karena $6{,}46$ dibulatkan ke 7. Pada soal "paling banyak", kita ambil bilangan bulat di **bawah**. Selalu cek dengan memasukkan jawaban ke soal.
- **Menukar ruas tanpa membalik arah.** $7 > x$ ditulis menjadi $x > 7$. Kalau ruas ditukar, ujung lancip lambang harus tetap menunjuk ke yang lebih kecil: $7 > x$ sama dengan $x < 7$.

## Ringkasan

- Pertidaksamaan memakai $<, >, \le, \ge$ dan biasanya punya tak hingga banyak penyelesaian.
- Tambah, kurang, kali, atau bagi dengan bilangan **positif**: tanda tetap.
- Kali atau bagi dengan bilangan **negatif**: tanda **dibalik**, karena urutan bilangan tercermin terhadap 0.
- Garis bilangan: bulatan kosong untuk $<, >$, bulatan penuh untuk $\le, \ge$.
- Langkah kunci: pisahkan variabel → bagi koefisien (awasi tanda) → gambar → cek dengan satu bilangan di dalam dan satu di luar.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Selesaikan $x - 4 < 9$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Tambahkan 4 ke kedua ruas. Ruas kanan?",
   "answer": "13",
   "hint": "9 + 4.",
   "explain": "13.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Penyelesaiannya?",
   "options": [
    "$x < 13$",
    "$x > 13$",
    "$x < 5$"
   ],
   "answer": "$x < 13$",
   "hint": "Menambah tidak mengubah tanda.",
   "explain": "x < 13.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x < 13$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Selesaikan $4x + 3 \\ge 19$ dan sebutkan jenis bulatan di garis bilangan.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Kurangi 3. $4x \\ge ?$",
   "answer": "16",
   "hint": "19 − 3.",
   "explain": "$4x \\ge 16$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Penyelesaian dan bulatannya?",
   "options": [
    "$x \\ge 4$, bulatan penuh",
    "$x \\ge 4$, bulatan kosong",
    "$x \\le 4$, bulatan penuh"
   ],
   "answer": "$x \\ge 4$, bulatan penuh",
   "hint": "Bagi 4 (positif). Lambang $\\ge$ memuat sama dengan.",
   "explain": "$x \\ge 4$, bulatan penuh di 4.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x \\ge 4$, bulatan penuh di 4."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Selesaikan $7 - 3x > 22$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Kurangi 7. $-3x > ?$",
   "answer": "15",
   "hint": "22 − 7.",
   "explain": "$-3x > 15$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Bagi dengan $-3$.",
   "options": [
    "$x < -5$",
    "$x > -5$",
    "$x < 5$"
   ],
   "answer": "$x < -5$",
   "hint": "Pembagi negatif: balik tanda.",
   "explain": "15 ÷ (−3) = −5, tanda dibalik.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x < -5$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Selesaikan $2(x - 3) \\le 5x + 9$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Buka kurung, lalu kumpulkan $x$ di kiri:",
   "options": [
    "$-3x \\le 15$",
    "$-3x \\le 3$",
    "$3x \\le 15$"
   ],
   "answer": "$-3x \\le 15$",
   "hint": "$2x - 6 \\le 5x + 9$, lalu kurangi $5x$ dan tambah 6.",
   "explain": "$2x - 5x \\le 9 + 6$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Bagi dengan $-3$.",
   "options": [
    "$x \\ge -5$",
    "$x \\le -5$",
    "$x \\ge 5$"
   ],
   "answer": "$x \\ge -5$",
   "hint": "Balik tanda.",
   "explain": "$x \\ge -5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek: di batas $x = -5$, ruas kiri $2(-5 - 3) = ?$",
   "answer": "-16",
   "hint": "2 × (−8).",
   "explain": "Kiri −16, kanan $5(-5) + 9 = -16$. Sama, jadi batas termasuk.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x \\ge -5$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Putu punya tabungan Rp120.000 dan menabung Rp15.000 setiap minggu. Ia ingin tabungannya paling sedikit Rp310.000. Berapa minggu paling sedikit ia harus menabung?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Pertidaksamaannya ($m$ = minggu)?",
   "options": [
    "$120.000 + 15.000m \\ge 310.000$",
    "$120.000 + 15.000m \\le 310.000$",
    "$15.000m \\ge 310.000$"
   ],
   "answer": "$120.000 + 15.000m \\ge 310.000$",
   "hint": "\"Paling sedikit\" berarti ≥; tabungan awal ikut dihitung.",
   "explain": "120.000 + 15.000m ≥ 310.000.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$15.000m \\ge ?$",
   "answer": "190.000",
   "hint": "310.000 − 120.000.",
   "explain": "15.000m ≥ 190.000, jadi m ≥ 12,67 (kira-kira).",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Paling sedikit berapa minggu?",
   "answer": "13",
   "hint": "Dengan 12 minggu, tabungannya berapa? Cukup atau belum?",
   "explain": "12 minggu baru Rp300.000; 13 minggu Rp315.000. Jadi 13 minggu.",
   "error": "salah-pembulatan",
   "suffix": "minggu"
  }
 ],
 "conclusion": "Paling sedikit 13 minggu."
}
```
