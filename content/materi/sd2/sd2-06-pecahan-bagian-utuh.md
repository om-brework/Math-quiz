---
id: sd2-06-pecahan-bagian-utuh
judul: Pecahan sebagai Bagian dari Keseluruhan
jenjang: sd2
moe: "Primary 2 · Number and Algebra · Fractions"
prasyarat: [sd2-05-pembagian]
durasi_menit: 35
---

## Kenapa belajar ini?

Ayah membeli satu martabak, lalu memotongnya untuk keluarga. Berapa bagian yang kamu makan? Pecahan dipakai untuk menyebut bagian dari satu benda utuh.

## Analogi

Bayangkan **satu martabak manis** berbentuk persegi panjang. Martabak itu dipotong menjadi beberapa potong yang **sama besar**.

- Banyak potongan seluruhnya menjadi **penyebut** (angka bawah).
- Banyak potongan yang kamu ambil menjadi **pembilang** (angka atas).

Kalau martabak dipotong 4 sama besar dan kamu makan 1 potong, kamu makan $\frac{1}{4}$ martabak.

```anim
{"type": "pecahan", "parts": 4, "shaded": 1, "shape": "batang", "name": "martabak", "title": "Martabak dipotong 4, dimakan 1"}
```

## Konsep

### Pembilang dan penyebut

$$\frac{3}{4}$$

```visual
{"type": "fraction", "shape": "rect", "parts": 4, "shaded": 3, "caption": "3 dari 4 bagian sama besar diarsir"}
```

- **4** adalah penyebut: martabak dipotong menjadi 4 bagian sama besar.
- **3** adalah pembilang: ada 3 bagian yang diambil atau diarsir.

$\frac{3}{4}$ dibaca "tiga per empat" atau "tiga perempat".

Ingat: potongan **harus sama besar**. Kalau tidak sama besar, itu bukan pecahan.

### Menggambar pecahan

Untuk menggambar $\frac{3}{8}$:

1. Gambar satu persegi panjang. Itu satu martabak utuh.
2. Bagi menjadi 8 bagian sama besar. Angka 8 dari penyebut.
3. Arsir 3 bagian. Angka 3 dari pembilang.

```anim
{"type": "pecahan", "parts": 8, "shaded": 3, "shape": "batang", "name": "martabak", "title": "Menggambar 3/8"}
```

### Pecahan satuan

Pecahan dengan pembilang 1 disebut **pecahan satuan**. Contoh: $\frac{1}{2}$, $\frac{1}{5}$, $\frac{1}{12}$.

Semakin banyak potongan, semakin kecil tiap potongan. Martabak untuk 2 orang potongannya besar. Martabak yang sama untuk 8 orang potongannya kecil.

```visual
{"type": "fraction", "shape": "bar", "parts": 2, "shaded": 1, "caption": "1/2"}
```

```visual
{"type": "fraction", "shape": "bar", "parts": 4, "shaded": 1, "caption": "1/4"}
```

```visual
{"type": "fraction", "shape": "bar", "parts": 8, "shaded": 1, "caption": "1/8"}
```

Jadi untuk pecahan satuan: **penyebut lebih besar, pecahan lebih kecil**. $\frac{1}{2} > \frac{1}{4} > \frac{1}{8}$.

### Pecahan senama

Pecahan senama punya **penyebut yang sama**. Contoh: $\frac{2}{9}$ dan $\frac{5}{9}$.

```visual
{"type": "fraction", "shape": "bar", "parts": 9, "shaded": 2, "caption": "2/9"}
```

```visual
{"type": "fraction", "shape": "bar", "parts": 9, "shaded": 5, "caption": "5/9"}
```

Ukuran potongannya sama. Jadi cukup bandingkan banyak potongan. **Pembilang lebih besar, pecahan lebih besar**. $\frac{5}{9} > \frac{2}{9}$.

Dalam materi ini, penyebutnya sampai 12.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menulis pecahan dari gambar

```soal
{
 "title": "Kerjakan bersama",
 "text": "Tulis pecahan untuk bagian yang diarsir dan yang tidak diarsir.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Hitung semua bagian. Berapa penyebutnya?",
   "answer": "5",
   "hint": "Hitung semua kotak, yang diarsir dan yang tidak.",
   "explain": "Ada 5 bagian sama besar. Penyebutnya 5.",
   "error": "penyebut-bukan-semua-bagian"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Hitung bagian yang diarsir. Tulis pecahannya.",
   "answer": {
    "num": 2,
    "den": 5
   },
   "hint": "Pembilang = bagian yang diarsir, penyebut = semua bagian.",
   "explain": "Ada 2 bagian diarsir dari 5. Jadi 2/5.",
   "error": "pembilang-penyebut-tertukar"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Bagian yang tidak diarsir: 5 − 2 = 3. Tulis pecahannya.",
   "answer": {
    "num": 3,
    "den": 5
   },
   "hint": "Penyebutnya tetap semua bagian.",
   "explain": "3 bagian dari 5: 3/5.",
   "error": "penyebut-bukan-semua-bagian"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 2 bagian + 3 bagian = ?",
   "answer": "5",
   "hint": "Harus sama dengan semua bagian.",
   "explain": "2 + 3 = 5. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "bagian"
  }
 ],
 "conclusion": "Diarsir 2/5, tidak diarsir 3/5.",
 "visual": {
  "type": "fraction",
  "shape": "bar",
  "parts": 5,
  "shaded": 2
 }
}
```

### Contoh 2: Membandingkan pecahan satuan

```soal
{
 "title": "Kerjakan bersama",
 "text": "Mana yang lebih besar, $\\frac{1}{4}$ atau $\\frac{1}{6}$?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Kenali jenis pecahan. Keduanya punya pembilang 1. Ini pecahan apa?",
   "options": [
    "Pecahan satuan",
    "Pecahan senama"
   ],
   "answer": "Pecahan satuan",
   "hint": "Pecahan senama punya penyebut sama.",
   "explain": "Pembilang 1 berarti pecahan satuan.",
   "error": "salah-banding-pecahan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Martabak yang sama dibagi 4 orang atau 6 orang. Potongan mana yang lebih besar?",
   "options": [
    "Dibagi 4 orang",
    "Dibagi 6 orang"
   ],
   "answer": "Dibagi 4 orang",
   "hint": "Makin banyak orang, makin kecil tiap potong.",
   "explain": "Dibagi ke lebih sedikit orang, potongannya lebih besar.",
   "error": "penyebut-besar-dikira-besar"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Jadi $\\frac{1}{4}$ ... $\\frac{1}{6}$?",
   "options": [
    ">",
    "<"
   ],
   "answer": ">",
   "hint": "Lihat langkah 2.",
   "explain": "$\\frac{1}{4} > \\frac{1}{6}$.",
   "error": "penyebut-besar-dikira-besar"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: lihat gambar dua batang yang sama panjang. Bagian mana yang lebih panjang?",
   "options": [
    "$\\frac{1}{4}$",
    "$\\frac{1}{6}$"
   ],
   "answer": "$\\frac{1}{4}$",
   "hint": "Bandingkan satu kotak yang diarsir dari tiap batang.",
   "explain": "Bagian 1/4 memang lebih panjang. Benar.",
   "error": "penyebut-besar-dikira-besar"
  }
 ],
 "conclusion": "Jadi $\\frac{1}{4} > \\frac{1}{6}$.",
 "visual": {
  "type": "fraction",
  "shape": "bar",
  "parts": 4,
  "shaded": 1
 }
}
```

### Contoh 3: Mengurutkan pecahan

```soal
{
 "title": "Kerjakan bersama",
 "text": "(a) Urutkan dari yang terkecil: $\\frac{5}{9}$, $\\frac{2}{9}$, $\\frac{7}{9}$, $\\frac{4}{9}$. (b) Urutkan dari yang terbesar: $\\frac{1}{3}$, $\\frac{1}{12}$, $\\frac{1}{7}$, $\\frac{1}{2}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Semua pecahan (a) berpenyebut 9. Apa yang dibandingkan?",
   "options": [
    "Pembilangnya",
    "Penyebutnya"
   ],
   "answer": "Pembilangnya",
   "hint": "Potongannya sama besar.",
   "explain": "Pecahan senama: bandingkan pembilang.",
   "error": "salah-banding-pecahan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Urutkan (a) dari yang terkecil.",
   "options": [
    "$\\frac{2}{9}$, $\\frac{4}{9}$, $\\frac{5}{9}$, $\\frac{7}{9}$",
    "$\\frac{7}{9}$, $\\frac{5}{9}$, $\\frac{4}{9}$, $\\frac{2}{9}$",
    "$\\frac{5}{9}$, $\\frac{2}{9}$, $\\frac{7}{9}$, $\\frac{4}{9}$"
   ],
   "answer": "$\\frac{2}{9}$, $\\frac{4}{9}$, $\\frac{5}{9}$, $\\frac{7}{9}$",
   "hint": "Urutkan pembilang 2, 4, 5, 7.",
   "explain": "Pembilang kecil, pecahan kecil.",
   "error": "salah-urut-pecahan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Semua pecahan (b) berpembilang 1. Pecahan terbesar punya penyebut ...",
   "options": [
    "terkecil",
    "terbesar"
   ],
   "answer": "terkecil",
   "hint": "Ingat martabak yang dibagi sedikit orang.",
   "explain": "Pecahan satuan: penyebut kecil, pecahan besar.",
   "error": "penyebut-besar-dikira-besar"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Urutkan (b) dari yang terbesar.",
   "options": [
    "$\\frac{1}{2}$, $\\frac{1}{3}$, $\\frac{1}{7}$, $\\frac{1}{12}$",
    "$\\frac{1}{12}$, $\\frac{1}{7}$, $\\frac{1}{3}$, $\\frac{1}{2}$",
    "$\\frac{1}{3}$, $\\frac{1}{12}$, $\\frac{1}{7}$, $\\frac{1}{2}$"
   ],
   "answer": "$\\frac{1}{2}$, $\\frac{1}{3}$, $\\frac{1}{7}$, $\\frac{1}{12}$",
   "hint": "Penyebut dari kecil ke besar: 2, 3, 7, 12.",
   "explain": "1/2 terbesar, 1/12 terkecil.",
   "error": "salah-urut-pecahan"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: martabak untuk berapa orang yang potongannya paling kecil?",
   "options": [
    "12 orang",
    "2 orang"
   ],
   "answer": "12 orang",
   "hint": "Makin banyak orang, makin kecil potongannya.",
   "explain": "12 orang, jadi 1/12 paling kecil. Sesuai.",
   "error": "penyebut-besar-dikira-besar"
  }
 ],
 "conclusion": "(a) $\\frac{2}{9}$, $\\frac{4}{9}$, $\\frac{5}{9}$, $\\frac{7}{9}$. (b) $\\frac{1}{2}$, $\\frac{1}{3}$, $\\frac{1}{7}$, $\\frac{1}{12}$."
}
```

### Contoh 4: Soal cerita

```soal
{
 "title": "Kerjakan bersama",
 "text": "Ibu memotong kue bolu menjadi 10 bagian sama besar. Made makan 3 potong. Putu makan 2 potong. Tulis pecahan bagian yang dimakan masing-masing. Siapa yang makan lebih banyak?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Berapa penyebutnya?",
   "answer": "10",
   "hint": "Kue dipotong menjadi berapa bagian?",
   "explain": "Kue dipotong 10 bagian, jadi penyebutnya 10.",
   "error": "penyebut-bukan-semua-bagian"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Tulis pecahan bagian Made.",
   "answer": {
    "num": 3,
    "den": 10
   },
   "hint": "Made makan 3 dari 10 potong.",
   "explain": "Made: 3/10.",
   "error": "pembilang-penyebut-tertukar"
  },
  {
   "kind": "fraction",
   "prompt": "Tulis pecahan bagian Putu.",
   "answer": {
    "num": 2,
    "den": 10
   },
   "hint": "Putu makan 2 dari 10 potong.",
   "explain": "Putu: 2/10.",
   "error": "pembilang-penyebut-tertukar"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Siapa yang makan lebih banyak?",
   "options": [
    "Made",
    "Putu"
   ],
   "answer": "Made",
   "hint": "Penyebutnya sama, bandingkan pembilang.",
   "explain": "3 lebih dari 2, jadi 3/10 > 2/10.",
   "error": "salah-banding-pecahan"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: dalam gambar batang 10 kotak, bagian siapa yang lebih panjang?",
   "options": [
    "Made, 3 kotak",
    "Putu, 2 kotak"
   ],
   "answer": "Made, 3 kotak",
   "hint": "Arsir 3 kotak untuk Made dan 2 kotak untuk Putu.",
   "explain": "Bagian Made lebih panjang. Benar.",
   "error": "salah-banding-pecahan"
  }
 ],
 "conclusion": "Made makan $\\frac{3}{10}$, Putu makan $\\frac{2}{10}$. Made makan lebih banyak.",
 "visual": {
  "type": "fraction",
  "shape": "bar",
  "parts": 10,
  "shaded": 3
 }
}
```

## Kesalahan yang sering terjadi

- **Potongan tidak sama besar.** Satu kue dipotong 4 tetapi ukurannya beda-beda, lalu satu potong disebut $\frac{1}{4}$. Pecahan hanya berlaku untuk bagian yang sama besar.
- **Mengira penyebut besar berarti pecahan besar.** Menganggap $\frac{1}{8} > \frac{1}{4}$ karena 8 > 4. Ingat martabak: dibagi 8 orang, potongannya lebih kecil.
- **Penyebut diisi bagian yang tidak diarsir.** Ada 2 bagian diarsir dari 5, lalu ditulis $\frac{2}{3}$. Penyebut adalah **semua** bagian, yaitu 5. Jadi $\frac{2}{5}$.
- **Pembilang dan penyebut tertukar.** Menulis $\frac{5}{2}$ untuk 2 bagian dari 5. Bagian yang diambil selalu di atas.

## Ringkasan

- Pecahan menyebut bagian dari satu benda utuh yang dipotong sama besar.
- Penyebut (bawah) = banyak bagian seluruhnya. Pembilang (atas) = banyak bagian yang diambil.
- Menggambar pecahan: bagi sesuai penyebut, arsir sesuai pembilang.
- Pecahan satuan: penyebut lebih besar, pecahan lebih kecil.
- Pecahan senama: pembilang lebih besar, pecahan lebih besar.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Sebuah batang dibagi 7 bagian sama besar. Ada 4 bagian diarsir. Tulis pecahan bagian yang diarsir dan yang tidak diarsir.",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Bagian yang diarsir.",
   "answer": {
    "num": 4,
    "den": 7
   },
   "hint": "Pembilang = bagian diarsir, penyebut = semua bagian.",
   "explain": "4 dari 7: 4/7.",
   "error": "pembilang-penyebut-tertukar"
  },
  {
   "kind": "fraction",
   "prompt": "Bagian yang tidak diarsir.",
   "answer": {
    "num": 3,
    "den": 7
   },
   "hint": "7 − 4 = 3 bagian. Penyebut tetap 7.",
   "explain": "3 dari 7: 3/7.",
   "error": "penyebut-bukan-semua-bagian"
  }
 ],
 "conclusion": "Diarsir 4/7, tidak diarsir 3/7.",
 "visual": {
  "type": "fraction",
  "shape": "bar",
  "parts": 7,
  "shaded": 4
 }
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Isi dengan > atau <: $\\frac{1}{5}$ ... $\\frac{1}{9}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Dibagi 5 atau dibagi 9, potongan mana lebih besar?",
   "options": [
    "Dibagi 5",
    "Dibagi 9"
   ],
   "answer": "Dibagi 5",
   "hint": "Makin banyak bagian, makin kecil tiap bagian.",
   "explain": "Dibagi 5 bagian, potongannya lebih besar.",
   "error": "penyebut-besar-dikira-besar"
  },
  {
   "kind": "choice",
   "prompt": "$\\frac{1}{5}$ ... $\\frac{1}{9}$",
   "options": [
    ">",
    "<"
   ],
   "answer": ">",
   "hint": "Pecahan satuan: penyebut kecil, pecahan besar.",
   "explain": "1/5 > 1/9.",
   "error": "penyebut-besar-dikira-besar"
  }
 ],
 "conclusion": "Jadi $\\frac{1}{5} > \\frac{1}{9}$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Isi dengan > atau <: $\\frac{7}{11}$ ... $\\frac{9}{11}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Penyebutnya sama. Apa yang dibandingkan?",
   "options": [
    "Pembilang: 7 dan 9",
    "Penyebut: 11 dan 11"
   ],
   "answer": "Pembilang: 7 dan 9",
   "hint": "Pecahan senama.",
   "explain": "Bandingkan pembilang.",
   "error": "salah-banding-pecahan"
  },
  {
   "kind": "choice",
   "prompt": "$\\frac{7}{11}$ ... $\\frac{9}{11}$",
   "options": [
    "<",
    ">"
   ],
   "answer": "<",
   "hint": "7 kurang dari 9.",
   "explain": "7/11 < 9/11.",
   "error": "salah-banding-pecahan"
  }
 ],
 "conclusion": "Jadi $\\frac{7}{11} < \\frac{9}{11}$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Urutkan dari yang terkecil: $\\frac{1}{4}$, $\\frac{1}{10}$, $\\frac{1}{2}$, $\\frac{1}{6}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Mana yang terkecil?",
   "options": [
    "$\\frac{1}{10}$",
    "$\\frac{1}{2}$",
    "$\\frac{1}{4}$"
   ],
   "answer": "$\\frac{1}{10}$",
   "hint": "Penyebut terbesar, potongan terkecil.",
   "explain": "1/10 paling kecil.",
   "error": "penyebut-besar-dikira-besar"
  },
  {
   "kind": "choice",
   "prompt": "Urutkan dari yang terkecil.",
   "options": [
    "$\\frac{1}{10}$, $\\frac{1}{6}$, $\\frac{1}{4}$, $\\frac{1}{2}$",
    "$\\frac{1}{2}$, $\\frac{1}{4}$, $\\frac{1}{6}$, $\\frac{1}{10}$",
    "$\\frac{1}{10}$, $\\frac{1}{4}$, $\\frac{1}{6}$, $\\frac{1}{2}$"
   ],
   "answer": "$\\frac{1}{10}$, $\\frac{1}{6}$, $\\frac{1}{4}$, $\\frac{1}{2}$",
   "hint": "Urutkan penyebut dari besar ke kecil.",
   "explain": "Penyebut 10, 6, 4, 2.",
   "error": "salah-urut-pecahan"
  }
 ],
 "conclusion": "Urutannya $\\frac{1}{10}$, $\\frac{1}{6}$, $\\frac{1}{4}$, $\\frac{1}{2}$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Sebuah pita dipotong menjadi 12 bagian sama panjang. Siti mengambil 5 bagian. Putu mengambil 7 bagian. Tulis pecahannya. Siapa yang mengambil lebih banyak?",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Pecahan bagian Siti.",
   "answer": {
    "num": 5,
    "den": 12
   },
   "hint": "5 dari 12 bagian.",
   "explain": "Siti: 5/12.",
   "error": "pembilang-penyebut-tertukar"
  },
  {
   "kind": "fraction",
   "prompt": "Pecahan bagian Putu.",
   "answer": {
    "num": 7,
    "den": 12
   },
   "hint": "7 dari 12 bagian.",
   "explain": "Putu: 7/12.",
   "error": "pembilang-penyebut-tertukar"
  },
  {
   "kind": "choice",
   "prompt": "Siapa yang mengambil lebih banyak?",
   "options": [
    "Putu",
    "Siti"
   ],
   "answer": "Putu",
   "hint": "Penyebutnya sama, bandingkan pembilang.",
   "explain": "7 lebih dari 5, jadi Putu.",
   "error": "salah-banding-pecahan"
  }
 ],
 "conclusion": "Siti $\\frac{5}{12}$, Putu $\\frac{7}{12}$. Putu mengambil lebih banyak."
}
```
