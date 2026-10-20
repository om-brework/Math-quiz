---
id: sd2-07-tambah-kurang-pecahan-senama
judul: Penjumlahan dan Pengurangan Pecahan Senama
jenjang: sd2
moe: "Primary 2 · Number and Algebra · Fractions"
prasyarat: [sd2-06-pecahan-bagian-utuh]
durasi_menit: 30
---

## Kenapa belajar ini?

Kakak makan $\frac{2}{8}$ kue, adik makan $\frac{3}{8}$ kue. Berapa bagian kue yang sudah dimakan? Berapa yang masih tersisa? Menjumlah dan mengurang pecahan membantu kamu menjawabnya.

## Analogi

Bayangkan **satu cokelat batangan** yang terbagi menjadi kotak-kotak kecil yang sama besar. Misalnya ada 7 kotak.

- Setiap kotak adalah $\frac{1}{7}$ cokelat.
- Kalau kamu mengambil 2 kotak, lalu mengambil 3 kotak lagi, kamu punya 5 kotak.
- **Ukuran kotaknya tidak berubah.** Tetap $\frac{1}{7}$ per kotak.

```anim
{"type": "pecahan", "parts": 7, "shaded": 5, "shape": "batang", "name": "cokelat", "title": "Cokelat 7 kotak: ambil 2, lalu 3 lagi"}
```

Jadi yang kita jumlahkan adalah **banyak kotak** (pembilang). Ukuran kotak (penyebut) tetap.

## Konsep

### Menjumlah pecahan senama

Pecahan senama punya penyebut sama. Jumlahkan pembilangnya saja. Penyebutnya tetap.

$$\frac{2}{7} + \frac{3}{7} = \frac{5}{7}$$

```visual
{"type": "fraction", "shape": "bar", "parts": 7, "shaded": 2, "caption": "2/7"}
```

```visual
{"type": "fraction", "shape": "bar", "parts": 7, "shaded": 3, "caption": "3/7"}
```

```visual
{"type": "fraction", "shape": "bar", "parts": 7, "shaded": 5, "caption": "2/7 + 3/7 = 5/7"}
```

2 kotak + 3 kotak = 5 kotak. Kotaknya tetap berukuran $\frac{1}{7}$.

### Mengurang pecahan senama

Kurangkan pembilangnya saja. Penyebutnya tetap.

$$\frac{6}{7} - \frac{4}{7} = \frac{2}{7}$$

```anim
{"type": "garis", "from": 0, "to": 7, "start": 6, "jumps": [-4], "title": "Dari 6 kotak mundur 4 kotak: tinggal 2 kotak (2/7)"}
```

### Satu utuh

Satu cokelat utuh berisi semua kotaknya. Kalau ada 7 kotak, satu utuh sama dengan $\frac{7}{7}$.

```visual
{"type": "fraction", "shape": "bar", "parts": 7, "shaded": 7, "caption": "7/7 = 1 utuh"}
```

$$1 = \frac{2}{2} = \frac{5}{5} = \frac{7}{7} = \frac{12}{12}$$

### Menggenapkan menjadi 1 utuh

Berapa yang kurang agar menjadi 1 utuh? Hitung kotak yang belum ada.

```visual
{"type": "fraction", "shape": "bar", "parts": 7, "shaded": 5, "caption": "5/7 diarsir, 2 kotak kosong"}
```

Kalau kamu punya $\frac{5}{7}$, masih kurang 7 − 5 = 2 kotak. Jadi $\frac{5}{7} + \frac{2}{7} = 1$.

Di materi ini, semua hasil tetap di dalam satu keseluruhan. Hasilnya tidak lebih dari 1.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menjumlah

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung $\\frac{2}{7}$ + $\\frac{3}{7}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Cek penyebut. Apakah keduanya pecahan senama?",
   "options": [
    "Ya, penyebutnya sama-sama 7",
    "Tidak"
   ],
   "answer": "Ya, penyebutnya sama-sama 7",
   "hint": "Lihat angka bawah.",
   "explain": "Penyebut sama, jadi bisa langsung dijumlah.",
   "error": "salah-banding-pecahan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jumlahkan banyak kotak. 2 + 3 = ?",
   "answer": "5",
   "hint": "Jumlahkan pembilangnya saja.",
   "explain": "2 + 3 = 5 kotak.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Tulis hasilnya.",
   "answer": {
    "num": 5,
    "den": 7
   },
   "hint": "Penyebut tetap 7, tidak dijumlah.",
   "explain": "Hasilnya 5/7.",
   "error": "pecahan-penyebut-dijumlah",
   "simplest": true
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: 2 kotak dan 3 kotak menjadi berapa kotak dari 7?",
   "options": [
    "5 kotak dari 7",
    "5 kotak dari 14"
   ],
   "answer": "5 kotak dari 7",
   "hint": "Cokelatnya tetap satu batang berisi 7 kotak.",
   "explain": "5 kotak dari 7. Benar.",
   "error": "pecahan-penyebut-dijumlah"
  }
 ],
 "conclusion": "Jadi $\\frac{2}{7}$ + $\\frac{3}{7}$ = $\\frac{5}{7}$.",
 "visual": {
  "type": "fraction",
  "shape": "bar",
  "parts": 7,
  "shaded": 2
 }
}
```

### Contoh 2: Mengurang

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung $\\frac{8}{11}$ − $\\frac{3}{11}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Cek penyebut. Penyebut keduanya berapa?",
   "answer": "11",
   "hint": "Angka bawah.",
   "explain": "Keduanya 11. Pecahan senama.",
   "error": "pembilang-penyebut-tertukar"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kurangkan banyak kotak. 8 − 3 = ?",
   "answer": "5",
   "hint": "Punya 8 kotak, diambil 3.",
   "explain": "8 − 3 = 5.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Tulis hasilnya.",
   "answer": {
    "num": 5,
    "den": 11
   },
   "hint": "Penyebut tetap 11, tidak dikurangi.",
   "explain": "Hasilnya 5/11.",
   "error": "pecahan-penyebut-dikurang",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Cek jawaban: $\\frac{5}{11}$ + $\\frac{3}{11}$ = ?",
   "answer": {
    "num": 8,
    "den": 11
   },
   "hint": "Jumlahkan pembilang, penyebut tetap.",
   "explain": "5/11 + 3/11 = 8/11. Kembali ke awal, jadi benar.",
   "error": "pecahan-penyebut-dijumlah",
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\frac{8}{11}$ − $\\frac{3}{11}$ = $\\frac{5}{11}$.",
 "visual": {
  "type": "fraction",
  "shape": "bar",
  "parts": 11,
  "shaded": 8
 }
}
```

### Contoh 3: Menggenapkan dan mengurang dari 1

```soal
{
 "title": "Kerjakan bersama",
 "text": "(a) $\\frac{5}{12}$ + ... = 1. (b) 1 − $\\frac{3}{5}$ = ...",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Ubah 1 utuh (a). 1 = ?/12. Isi pembilangnya.",
   "answer": "12",
   "hint": "Satu utuh berisi semua kotak.",
   "explain": "1 = 12/12.",
   "error": "lupa-ubah-satu-utuh"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Hitung kotak yang kurang (a). Pecahan yang kurang?",
   "answer": {
    "num": 7,
    "den": 12
   },
   "hint": "12 − 5 kotak.",
   "explain": "12 − 5 = 7, jadi yang kurang 7/12.",
   "error": "salah-genapkan-satu",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Ubah 1 utuh (b). 1 = ?/5. Isi pembilangnya.",
   "answer": "5",
   "hint": "Penyebutnya 5.",
   "explain": "1 = 5/5.",
   "error": "lupa-ubah-satu-utuh"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Kurangkan (b). $\\frac{5}{5}$ − $\\frac{3}{5}$ = ?",
   "answer": {
    "num": 2,
    "den": 5
   },
   "hint": "5 − 3 kotak, penyebut tetap.",
   "explain": "5/5 − 3/5 = 2/5.",
   "error": "pecahan-penyebut-dikurang",
   "simplest": true
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: apakah $\\frac{5}{12}$ + $\\frac{7}{12}$ dan $\\frac{2}{5}$ + $\\frac{3}{5}$ sama-sama 1?",
   "options": [
    "Ya, 12/12 dan 5/5",
    "Tidak"
   ],
   "answer": "Ya, 12/12 dan 5/5",
   "hint": "Jumlahkan pembilangnya.",
   "explain": "12/12 = 1 dan 5/5 = 1. Keduanya benar.",
   "error": "salah-genapkan-satu"
  }
 ],
 "conclusion": "(a) $\\frac{7}{12}$. (b) $\\frac{2}{5}$.",
 "visual": {
  "type": "fraction",
  "shape": "bar",
  "parts": 12,
  "shaded": 5
 }
}
```

### Contoh 4: Soal cerita dua langkah

```soal
{
 "title": "Kerjakan bersama",
 "text": "Ibu membuat 1 loyang kue. Kue dipotong 8 bagian sama besar. Budi makan $\\frac{2}{8}$ kue. Siti makan $\\frac{3}{8}$ kue. Berapa bagian kue yang dimakan mereka berdua? Berapa bagian yang tersisa?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Apa urutan hitungannya?",
   "options": [
    "Jumlahkan yang dimakan, lalu kurangkan dari 1 loyang",
    "Kurangkan saja",
    "Jumlahkan saja"
   ],
   "answer": "Jumlahkan yang dimakan, lalu kurangkan dari 1 loyang",
   "hint": "Ada dua pertanyaan.",
   "explain": "Pertama jumlah yang dimakan, kedua sisa dari 1 loyang.",
   "error": "salah-pilih-tambah-kurang"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Jumlahkan yang dimakan. $\\frac{2}{8}$ + $\\frac{3}{8}$ = ?",
   "answer": {
    "num": 5,
    "den": 8
   },
   "hint": "Pembilang 2 + 3, penyebut tetap.",
   "explain": "2/8 + 3/8 = 5/8.",
   "error": "pecahan-penyebut-dijumlah",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Ubah 1 loyang. 1 = ?/8. Isi pembilangnya.",
   "answer": "8",
   "hint": "Satu loyang berisi semua potongan.",
   "explain": "1 loyang = 8/8.",
   "error": "lupa-ubah-satu-utuh"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Hitung sisa. $\\frac{8}{8}$ − $\\frac{5}{8}$ = ?",
   "answer": {
    "num": 3,
    "den": 8
   },
   "hint": "8 − 5 potong, penyebut tetap.",
   "explain": "8/8 − 5/8 = 3/8.",
   "error": "pecahan-penyebut-dikurang",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 5 potong dimakan + 3 potong sisa = ? potong",
   "answer": "8",
   "hint": "Harus sama dengan 1 loyang.",
   "explain": "5 + 3 = 8 potong = 1 loyang. Benar.",
   "error": "salah-genapkan-satu"
  }
 ],
 "conclusion": "Dimakan $\\frac{5}{8}$ kue, tersisa $\\frac{3}{8}$ kue.",
 "visual": {
  "type": "fraction",
  "shape": "rect",
  "parts": 8,
  "shaded": 5
 }
}
```

## Kesalahan yang sering terjadi

- **Menjumlah penyebut juga.** $\frac{2}{7} + \frac{3}{7}$ dijawab $\frac{5}{14}$. Ukuran kotak cokelat tidak berubah saat kamu mengambil lebih banyak. Penyebut tetap 7, jadi $\frac{5}{7}$.
- **Mengurang penyebut juga.** $\frac{8}{11} - \frac{3}{11}$ dijawab $\frac{5}{0}$. Penyebut tetap 11. Jawabannya $\frac{5}{11}$.
- **Lupa mengubah 1 menjadi pecahan.** $1 - \frac{3}{5}$ dihitung 3 − 1 atau 1 − 3. Ubah dulu 1 menjadi $\frac{5}{5}$, lalu 5 − 3 = 2.
- **Salah menghitung yang kurang.** $\frac{5}{12} + ... = 1$ dijawab $\frac{5}{12}$ atau $\frac{1}{12}$. Hitung kotak yang belum ada: 12 − 5 = 7.

## Ringkasan

- Pecahan senama: penyebutnya sama, ukuran kotaknya sama.
- Menjumlah: jumlahkan pembilang, penyebut tetap.
- Mengurang: kurangkan pembilang, penyebut tetap.
- Satu utuh = penyebut per penyebut, misalnya $1 = \frac{8}{8}$.
- Menggenapkan: kotak yang kurang = penyebut − pembilang.
- Cek: hasil kurang + yang diambil = yang semula.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung $\\frac{1}{6}$ + $\\frac{4}{6}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jumlahkan pembilangnya. 1 + 4 = ?",
   "answer": "5",
   "hint": "Penyebut tidak ikut dijumlah.",
   "explain": "1 + 4 = 5.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "fraction",
   "prompt": "Tulis hasilnya.",
   "answer": {
    "num": 5,
    "den": 6
   },
   "hint": "Penyebut tetap 6.",
   "explain": "Hasilnya 5/6.",
   "error": "pecahan-penyebut-dijumlah",
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\frac{1}{6}$ + $\\frac{4}{6}$ = $\\frac{5}{6}$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $\\frac{11}{12}$ − $\\frac{4}{12}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Kurangkan pembilangnya. 11 − 4 = ?",
   "answer": "7",
   "hint": "Penyebut tidak ikut dikurangi.",
   "explain": "11 − 4 = 7.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "fraction",
   "prompt": "Tulis hasilnya.",
   "answer": {
    "num": 7,
    "den": 12
   },
   "hint": "Penyebut tetap 12.",
   "explain": "Hasilnya 7/12.",
   "error": "pecahan-penyebut-dikurang",
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\frac{11}{12}$ − $\\frac{4}{12}$ = $\\frac{7}{12}$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung $\\frac{3}{9}$ + $\\frac{4}{9}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jumlahkan pembilangnya. 3 + 4 = ?",
   "answer": "7",
   "hint": "Banyak kotak ditambah banyak kotak.",
   "explain": "3 + 4 = 7.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "fraction",
   "prompt": "Tulis hasilnya.",
   "answer": {
    "num": 7,
    "den": 9
   },
   "hint": "Penyebut tetap 9.",
   "explain": "Hasilnya 7/9.",
   "error": "pecahan-penyebut-dijumlah",
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\frac{3}{9}$ + $\\frac{4}{9}$ = $\\frac{7}{9}$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "$\\frac{2}{5}$ + ... = 1",
 "steps": [
  {
   "kind": "number",
   "prompt": "Ubah 1 utuh: 1 = ?/5. Isi pembilangnya.",
   "answer": "5",
   "hint": "Satu utuh berisi semua bagian.",
   "explain": "1 = 5/5.",
   "error": "lupa-ubah-satu-utuh"
  },
  {
   "kind": "fraction",
   "prompt": "Pecahan yang kurang?",
   "answer": {
    "num": 3,
    "den": 5
   },
   "hint": "Hitung kotak yang belum diarsir: 5 − 2.",
   "explain": "5 − 2 = 3, jadi 3/5.",
   "error": "salah-genapkan-satu",
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\frac{2}{5}$ + $\\frac{3}{5}$ = 1.",
 "visual": {
  "type": "fraction",
  "shape": "bar",
  "parts": 5,
  "shaded": 2
 }
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Made punya 1 gulung pita yang dipotong 10 bagian sama panjang. Ia memakai $\\frac{3}{10}$ pita untuk kado dan $\\frac{4}{10}$ pita untuk hiasan. Berapa bagian pita yang tersisa?",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Langkah 1: Pita yang dipakai. $\\frac{3}{10}$ + $\\frac{4}{10}$ = ?",
   "answer": {
    "num": 7,
    "den": 10
   },
   "hint": "Pembilang 3 + 4, penyebut tetap.",
   "explain": "3/10 + 4/10 = 7/10.",
   "error": "pecahan-penyebut-dijumlah",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Ubah 1 gulung: 1 = ?/10. Isi pembilangnya.",
   "answer": "10",
   "hint": "Satu gulung berisi semua potongan.",
   "explain": "1 = 10/10.",
   "error": "lupa-ubah-satu-utuh"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Sisa pita. $\\frac{10}{10}$ − $\\frac{7}{10}$ = ?",
   "answer": {
    "num": 3,
    "den": 10
   },
   "hint": "10 − 7 potong.",
   "explain": "10/10 − 7/10 = 3/10.",
   "error": "pecahan-penyebut-dikurang",
   "simplest": true
  }
 ],
 "conclusion": "Pita yang tersisa $\\frac{3}{10}$ bagian."
}
```
