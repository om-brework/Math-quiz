---
id: smp2-06-sistem-persamaan-linear
judul: Sistem Persamaan Linear Dua Variabel
jenjang: smp2
moe: "Secondary 2 · Number and Algebra · N7 Equations and inequalities"
prasyarat: [smp1-08-fungsi-linear, smp1-09-persamaan-linear]
durasi_menit: 50
---

## Kenapa belajar ini?

Kadang ada dua hal yang belum diketahui sekaligus, misalnya harga tahu dan harga tempe. Satu nota belanja saja tidak cukup untuk mengetahui keduanya. Dengan dua nota, kita bisa menemukan dua harga itu. Cara berpikir ini dipakai untuk menghitung harga, tiket, campuran, dan banyak soal lain.

## Analogi

Bayangkan kamu memegang **dua nota belanja** dari warung Bu Made.

- Nota A: 3 tahu dan 2 tempe, total Rp11.000.
- Nota B: 2 tahu dan 4 tempe, total Rp14.000.

Dari satu nota, ada banyak kemungkinan harga. Tetapi dua nota bersama hanya cocok dengan **satu** pasangan harga. Ada dua cara pintar memakai nota:

- **Membandingkan nota** (eliminasi): buat banyak tempe di kedua nota sama, lalu kurangkan. Selisih harga pasti hanya karena tahu.
- **Menukar barang** (substitusi): kalau sudah tahu "1 tempe = sekian", ganti setiap tempe dengan nilainya, sehingga nota hanya berisi tahu.

Dua cara ini akan kita pakai terus di contoh.

```anim
{"type": "persamaan", "title": "Membandingkan dua nota (contoh lain)", "baris": [{"tex": "2\\text{ tahu} + 1\\text{ tempe} = 6.000", "say": "Nota C: 2 tahu dan 1 tempe, Rp6.000."}, {"tex": "1\\text{ tahu} + 1\\text{ tempe} = 4.500", "say": "Nota D: 1 tahu dan 1 tempe, Rp4.500. Banyak tempenya sudah sama."}, {"tex": "1\\text{ tahu} = 1.500", "say": "Kurangkan nota: tempe saling hilang, selisih harga hanya karena 1 tahu.", "op": "C - D"}, {"tex": "1\\text{ tempe} = 4.500 - 1.500 = 3.000", "say": "Tukar tahu dengan nilainya di nota D: harga tempe ketemu.", "op": "\\text{substitusi}"}]}
```

## Konsep

### Persamaan linear dua variabel dan grafiknya

Persamaan seperti $2x + 3y = 12$ disebut **persamaan linear dua variabel**. Penyelesaiannya adalah pasangan $(x, y)$ yang membuat persamaan benar, misalnya $(6, 0)$, $(0, 4)$, dan $(3, 2)$. Ada tak hingga banyak pasangan seperti itu, sama seperti satu nota yang cocok dengan banyak kemungkinan harga.

Semua pasangan itu terletak pada **satu garis lurus**. Cara cepat menggambarnya adalah mencari dua titik potong sumbu:

- Ambil $x = 0$: $3y = 12$, jadi $y = 4$. Titik $(0, 4)$.
- Ambil $y = 0$: $2x = 12$, jadi $x = 6$. Titik $(6, 0)$.

Hubungkan kedua titik dengan penggaris.

```anim
{"type": "grafik", "title": "Grafik 2x + 3y = 12", "xmin": -1, "xmax": 7, "ymin": -1, "ymax": 5, "kurva": [{"f": "(12-2x)/3", "label": "2x + 3y = 12"}], "titik": [{"x": 0, "y": 4, "label": "(0, 4)"}, {"x": 6, "y": 0, "label": "(6, 0)"}, {"x": 3, "y": 2, "label": "(3, 2)"}], "langkah": [{"say": "Ambil $x = 0$: $y = 4$. Titik $(0, 4)$.", "kurva": 0, "titik": 1}, {"say": "Ambil $y = 0$: $x = 6$. Titik $(6, 0)$.", "kurva": 0, "titik": 2}, {"say": "Hubungkan dengan penggaris.", "kurva": 1, "titik": 2}, {"say": "Titik lain di garis, misalnya $(3, 2)$, juga memenuhi: $6 + 6 = 12$.", "kurva": 1, "titik": 3}]}
```

### Sistem persamaan

**Sistem persamaan linear dua variabel** (SPLDV) adalah dua persamaan yang harus benar **bersamaan**. Penyelesaiannya adalah pasangan $(x, y)$ yang memenuhi kedua persamaan sekaligus.

Secara grafik, setiap persamaan adalah sebuah garis. Pasangan yang memenuhi keduanya adalah **titik potong** kedua garis. Itulah sebabnya dua nota bisa menentukan satu pasangan harga: dua garis yang tidak sejajar berpotongan tepat di satu titik.

```anim
{"type": "grafik", "title": "Dua garis, satu titik potong", "xmin": -1, "xmax": 8, "ymin": -1, "ymax": 8, "kurva": [{"f": "x+1", "label": "y = x + 1"}, {"f": "7-x", "label": "x + y = 7"}], "titik": [{"x": 3, "y": 4, "label": "(3, 4)"}], "langkah": [{"say": "Garis pertama: $y = x + 1$. Banyak sekali titik di garis ini.", "kurva": 1}, {"say": "Garis kedua: $x + y = 7$.", "kurva": 2}, {"say": "Hanya satu titik yang ada di kedua garis: $(3, 4)$. Cek: $4 = 3 + 1$ dan $3 + 4 = 7$.", "kurva": 2, "titik": 1}]}
```

### Tiga metode

1. **Metode grafik.** Gambar kedua garis, baca titik potongnya. Bagus untuk melihat gambaran, tetapi kurang tepat jika jawabannya pecahan.
2. **Metode substitusi.** Nyatakan satu variabel dalam variabel lain dari satu persamaan, lalu masukkan ke persamaan yang lain. Cocok jika salah satu persamaan sudah berbentuk $y = \ldots$ atau $x = \ldots$.
3. **Metode eliminasi.** Kalikan persamaan agar koefisien satu variabel sama (atau berlawanan), lalu kurangkan (atau jumlahkan) untuk menghilangkan variabel itu.

### Kenapa eliminasi boleh?

Jika $A = B$ dan $C = D$, maka $A + C = B + D$ dan $A - C = B - D$. Menjumlah atau mengurangkan dua persamaan sama seperti menggabungkan atau membandingkan dua nota. Hasilnya tetap benar.

## Contoh langkah demi langkah

Urutan berpikir: **pilih metode → hilangkan satu variabel → cari variabel pertama → cari variabel kedua → cek di kedua persamaan**.

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Substitusi

```soal
{
 "title": "Substitusi",
 "text": "Selesaikan $y = 2x - 1$ dan $3x + y = 14$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Metode yang paling cocok?",
   "options": [
    "Substitusi",
    "Eliminasi",
    "Grafik"
   ],
   "answer": "Substitusi",
   "hint": "Lihat persamaan pertama: sudah berbentuk $y = \\ldots$",
   "explain": "Persamaan pertama sudah $y = \\ldots$, jadi substitusi.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Tukar $y$ di persamaan kedua.",
   "options": [
    "$3x + (2x - 1) = 14$",
    "$3(2x - 1) + y = 14$",
    "$3x + 2x = 14$"
   ],
   "answer": "$3x + (2x - 1) = 14$",
   "hint": "Ganti $y$ dengan $2x - 1$, utuh.",
   "explain": "$3x + (2x - 1) = 14$, jadi $5x - 1 = 14$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Dari $5x - 1 = 14$, cari $x$.",
   "answer": "3",
   "hint": "Tambah 1, lalu bagi 5.",
   "explain": "5x = 15, x = 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Cari $y = 2(3) - 1$.",
   "answer": "5",
   "hint": "6 − 1.",
   "explain": "y = 5.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $3(3) + 5 = ?$",
   "answer": "14",
   "hint": "Masukkan ke persamaan kedua.",
   "explain": "9 + 5 = 14. Benar di kedua persamaan.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x = 3$, $y = 5$."
}
```

### Contoh 2: Eliminasi langsung

```soal
{
 "title": "Eliminasi langsung",
 "text": "Selesaikan $2x + 3y = 12$ dan $4x - 3y = 6$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Koefisien $y$ adalah $+3$ dan $-3$. Apa yang dilakukan?",
   "options": [
    "Jumlahkan kedua persamaan",
    "Kurangkan kedua persamaan"
   ],
   "answer": "Jumlahkan kedua persamaan",
   "hint": "Koefisien berlawanan saling menghapus kalau dijumlah.",
   "explain": "$3y + (-3y) = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Setelah dijumlah, $6x = ?$",
   "answer": "18",
   "hint": "12 + 6.",
   "explain": "$6x = 18$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Cari $x$.",
   "answer": "3",
   "hint": "18 ÷ 6.",
   "explain": "x = 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $2(3) + 3y = 12$. Cari $y$.",
   "answer": "2",
   "hint": "3y = 6.",
   "explain": "y = 2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $4(3) - 3(2) = ?$",
   "answer": "6",
   "hint": "12 − 6.",
   "explain": "Hasilnya 6, cocok dengan persamaan kedua.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x = 3$, $y = 2$."
}
```

### Contoh 3: Eliminasi dengan mengalikan dulu

```soal
{
 "title": "Eliminasi dengan mengalikan dulu",
 "text": "Selesaikan $3x + 2y = 16$ dan $5x - 3y = 14$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Hilangkan $y$. KPK dari 2 dan 3?",
   "answer": "6",
   "hint": "Kelipatan persekutuan terkecil.",
   "explain": "KPK = 6.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Persamaan pertama dikali 3 menjadi?",
   "options": [
    "$9x + 6y = 48$",
    "$9x + 6y = 16$",
    "$9x + 2y = 48$"
   ],
   "answer": "$9x + 6y = 48$",
   "hint": "Fotokopi seluruh nota, termasuk totalnya.",
   "explain": "$9x + 6y = 48$. Persamaan kedua dikali 2: $10x - 6y = 28$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Jumlahkan. $19x = ?$",
   "answer": "76",
   "hint": "48 + 28.",
   "explain": "$19x = 76$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3 (lanjutan): Cari $x$.",
   "answer": "4",
   "hint": "76 ÷ 19.",
   "explain": "x = 4.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $3(4) + 2y = 16$. Cari $y$.",
   "answer": "2",
   "hint": "2y = 4.",
   "explain": "y = 2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $5(4) - 3(2) = ?$",
   "answer": "14",
   "hint": "20 − 6.",
   "explain": "14, cocok dengan persamaan kedua.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x = 4$, $y = 2$."
}
```

### Contoh 4: Metode grafik

```soal
{
 "title": "Metode grafik",
 "text": "Selesaikan $x + y = 5$ dan $x - y = 1$ dengan grafik. Tabel menunjukkan nilai $y$ kedua garis.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Garis $x + y = 5$ memotong sumbu-$y$ di $(0, ?)$.",
   "answer": "5",
   "hint": "Ambil $x = 0$.",
   "explain": "Titik (0, 5); titik lainnya (5, 0).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Garis $x - y = 1$ memotong sumbu-$y$ di $(0, ?)$.",
   "answer": "-1",
   "hint": "Ambil $x = 0$: $-y = 1$.",
   "explain": "Titik (0, −1); titik lainnya (1, 0).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Pada tabel, di nilai $x$ berapa kedua garis punya $y$ yang sama?",
   "answer": "3",
   "hint": "Cari kolom yang dua angkanya sama.",
   "explain": "Di x = 3, keduanya y = 2. Itulah titik potongnya.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Titik potongnya?",
   "options": [
    "$(3, 2)$",
    "$(2, 3)$",
    "$(5, 0)$"
   ],
   "answer": "$(3, 2)$",
   "hint": "Tulis $(x, y)$.",
   "explain": "(3, 2).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $3 - 2 = ?$",
   "answer": "1",
   "hint": "Masukkan ke persamaan kedua.",
   "explain": "3 − 2 = 1 dan 3 + 2 = 5. Benar di keduanya.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x = 3$, $y = 2$.",
 "visual": {
  "type": "table",
  "head": [
   "x",
   "0",
   "1",
   "2",
   "3",
   "4",
   "5"
  ],
  "rows": [
   [
    "y (x + y = 5)",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0"
   ],
   [
    "y (x − y = 1)",
    "−1",
    "0",
    "1",
    "2",
    "3",
    "4"
   ]
  ]
 }
}
```

### Contoh 5: Soal cerita

```soal
{
 "title": "Soal cerita",
 "text": "Di warung Bu Made, 3 tahu dan 2 tempe harganya Rp11.000. Sementara 2 tahu dan 4 tempe harganya Rp14.000. Berapa harga 1 tahu dan 1 tempe?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1–2: Dua persamaannya ($t$ = tahu, $p$ = tempe)?",
   "options": [
    "$3t + 2p = 11.000$ dan $2t + 4p = 14.000$",
    "$3t + 2t = 11.000$ dan $2p + 4p = 14.000$",
    "$3t + 2p = 14.000$ dan $2t + 4p = 11.000$"
   ],
   "answer": "$3t + 2p = 11.000$ dan $2t + 4p = 14.000$",
   "hint": "Satu nota menjadi satu persamaan.",
   "explain": "Nota A dan nota B.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Samakan banyak tempe. Nota A dikali 2 menjadi?",
   "options": [
    "$6t + 4p = 22.000$",
    "$6t + 4p = 11.000$",
    "$6t + 2p = 22.000$"
   ],
   "answer": "$6t + 4p = 22.000$",
   "hint": "Seluruh nota dikali 2.",
   "explain": "$6t + 4p = 22.000$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Kurangkan nota B. $4t = ?$",
   "answer": "8.000",
   "hint": "22.000 − 14.000.",
   "explain": "4t = 8.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4 (lanjutan): Harga 1 tahu?",
   "answer": "2.000",
   "hint": "8.000 ÷ 4.",
   "explain": "t = 2.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: $3(2.000) + 2p = 11.000$. Harga 1 tempe?",
   "answer": "2.500",
   "hint": "2p = 5.000.",
   "explain": "p = 2.500.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: nota B, 2 tahu + 4 tempe = ?",
   "answer": "14.000",
   "hint": "4.000 + 10.000.",
   "explain": "Rp14.000. Cocok dengan nota B.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "1 tahu Rp2.000 dan 1 tempe Rp2.500."
}
```

## Kesalahan yang sering terjadi

- **Hanya mengalikan satu ruas.** Mengalikan $3x + 2y = 16$ dengan 3 menjadi $9x + 6y = 16$. Seluruh nota harus difotokopi, termasuk totalnya: $9x + 6y = 48$.
- **Salah tanda saat mengurangkan.** Dari $(6t + 4p) - (2t + 4p)$, ada yang menulis $4t + 8p$. Kurung di depan tanda minus membuat setiap suku berganti tanda: $6t - 2t + 4p - 4p = 4t$.
- **Menjumlah padahal koefisien sama tandanya.** Jika koefisien $y$ adalah $+4$ dan $+4$, menjumlahkan menghasilkan $8y$, bukan 0. Koefisien **sama** → kurangkan; koefisien **berlawanan** → jumlahkan.
- **Berhenti setelah satu variabel.** Menjawab "$x = 4$" saja. Sistem ini meminta pasangan $(x, y)$, jadi cari juga $y$.
- **Cek hanya di satu persamaan.** Jawaban harus memenuhi **kedua** persamaan. Hitungan yang salah sering tetap cocok di persamaan yang dipakai untuk mencari variabel kedua.

## Ringkasan

- Grafik $ax + by = c$ adalah garis lurus; gambar dengan titik potong sumbu ($x = 0$ dan $y = 0$).
- Penyelesaian SPLDV adalah pasangan $(x, y)$ yang memenuhi kedua persamaan, yaitu titik potong kedua garis.
- Substitusi: tukar satu variabel dengan bentuk yang setara.
- Eliminasi: samakan koefisien satu variabel, lalu jumlahkan atau kurangkan.
- Soal cerita: tentukan dua variabel, tulis dua persamaan dari dua informasi, selesaikan, lalu cek di kedua persamaan.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Selesaikan dengan substitusi: $y = x + 2$ dan $2x + y = 11$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Substitusi memberi $3x + 2 = 11$. Cari $x$.",
   "answer": "3",
   "hint": "3x = 9.",
   "explain": "x = 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cari $y$.",
   "answer": "5",
   "hint": "y = 3 + 2.",
   "explain": "y = 5.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x = 3$, $y = 5$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Selesaikan dengan eliminasi: $x + 2y = 10$ dan $x - 2y = 2$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jumlahkan: $2x = 12$. Cari $x$.",
   "answer": "6",
   "hint": "12 ÷ 2.",
   "explain": "x = 6.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$6 + 2y = 10$. Cari $y$.",
   "answer": "2",
   "hint": "2y = 4.",
   "explain": "y = 2.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x = 6$, $y = 2$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Selesaikan $2x + 5y = 1$ dan $3x - 2y = 11$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Untuk menghilangkan $x$, kalikan persamaan pertama dengan 3 dan kedua dengan 2. Hasil kurangannya?",
   "options": [
    "$19y = -19$",
    "$11y = -19$",
    "$19y = 19$"
   ],
   "answer": "$19y = -19$",
   "hint": "$(6x + 15y) - (6x - 4y) = 3 - 22$.",
   "explain": "$15y + 4y = 19y$ dan $3 - 22 = -19$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cari $y$.",
   "answer": "-1",
   "hint": "−19 ÷ 19.",
   "explain": "y = −1.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$2x + 5(-1) = 1$. Cari $x$.",
   "answer": "3",
   "hint": "2x = 6.",
   "explain": "x = 3. Cek: 3(3) − 2(−1) = 11, benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x = 3$, $y = -1$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Garis $y = 2x$ dan garis $x + y = 6$ berpotongan di titik mana?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Substitusi: $x + 2x = 6$. Cari $x$.",
   "answer": "2",
   "hint": "3x = 6.",
   "explain": "x = 2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cari $y$.",
   "answer": "4",
   "hint": "y = 2x.",
   "explain": "y = 4.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Titik potongnya?",
   "options": [
    "$(2, 4)$",
    "$(4, 2)$",
    "$(2, 6)$"
   ],
   "answer": "$(2, 4)$",
   "hint": "Tulis $(x, y)$.",
   "explain": "(2, 4).",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Titik potongnya $(2, 4)$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Tiket kebun binatang untuk 2 dewasa dan 3 anak Rp95.000. Untuk 1 dewasa dan 2 anak Rp55.000. Berapa harga tiket dewasa dan anak?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Persamaan kedua dikali 2 menjadi?",
   "options": [
    "$2d + 4a = 110.000$",
    "$2d + 4a = 55.000$",
    "$2d + 2a = 110.000$"
   ],
   "answer": "$2d + 4a = 110.000$",
   "hint": "Seluruh persamaan dikali 2.",
   "explain": "$2d + 4a = 110.000$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Kurangkan dengan $2d + 3a = 95.000$. Harga tiket anak?",
   "answer": "15.000",
   "hint": "110.000 − 95.000.",
   "explain": "a = 15.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "$d + 2(15.000) = 55.000$. Harga tiket dewasa?",
   "answer": "25.000",
   "hint": "55.000 − 30.000.",
   "explain": "d = 25.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Dewasa Rp25.000, anak Rp15.000."
}
```
