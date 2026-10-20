---
id: sd4-04-pecahan-campuran
judul: Pecahan Campuran dan Pecahan Biasa
jenjang: sd4
moe: "Primary 4 · Number and Algebra · Fractions"
prasyarat: [sd3-06-pecahan-senilai, sd3-05-pembagian-bersusun]
durasi_menit: 30
---

## Kenapa belajar ini?

Di meja ada 2 martabak utuh dan sepotong lagi. Kamu bisa menyebutnya "2 martabak lebih sepertiga", atau "7 potong sepertiga". Keduanya benar. Kamu perlu bisa berpindah dari satu cara ke cara lain, karena keduanya sering dipakai dalam berhitung.

## Analogi

Bayangkan **martabak manis** yang setiap loyangnya dipotong sama besar. Misalnya setiap martabak dipotong 3, jadi setiap potong adalah $\frac{1}{3}$ martabak.

```anim
{"type": "pecahan", "parts": 3, "shaded": 1, "shape": "lingkaran", "name": "martabak", "title": "Satu potong = sepertiga martabak"}
```

- Kalau kamu menghitung **jumlah potongan** saja, misalnya 7 potong, kamu menulis $\frac{7}{3}$.
- Kalau kamu **menyusun potongan kembali menjadi martabak utuh**, 7 potong menjadi 2 martabak utuh dan 1 potong. Kamu menulis $2\frac{1}{3}$.

```visual
{"type": "fraction", "shape": "circle", "parts": 3, "shaded": 7, "wholes": 3, "caption": "7 potong sepertiga = 2 martabak utuh dan 1 potong"}
```

Banyak martabaknya sama. Hanya cara menghitungnya yang berbeda.

## Konsep

### Tiga jenis pecahan

- **Pecahan sejati**: pembilang lebih kecil dari penyebut. Nilainya kurang dari 1. Contoh: $\frac{2}{3}$, $\frac{5}{8}$.
- **Pecahan tidak sejati** (pecahan biasa yang lebih dari atau sama dengan 1): pembilang sama dengan atau lebih besar dari penyebut. Contoh: $\frac{7}{3}$, $\frac{9}{4}$, $\frac{5}{5}$.
- **Pecahan campuran**: bilangan cacah ditambah pecahan sejati. Contoh: $2\frac{1}{3}$, dibaca "dua sepertiga" atau "dua satu per tiga".

Ingat: **pembilang** adalah angka di atas (banyak potong yang diambil). **Penyebut** adalah angka di bawah (setiap utuh dipotong menjadi berapa).

### Pecahan tidak sejati menjadi pecahan campuran

Bagi pembilang dengan penyebut.

- **Hasil bagi** = banyak martabak utuh.
- **Sisa** = banyak potongan yang tersisa (menjadi pembilang baru).
- **Penyebut tetap**, karena ukuran potongannya tidak berubah.

$$\frac{7}{3}: \quad 7 \div 3 = 2 \text{ sisa } 1 \quad \Rightarrow \quad 2\frac{1}{3}$$

```anim
{"type": "benda", "op": "÷", "a": 7, "b": 3, "item": "kue", "title": "7 potong dikelompokkan 3-3: 2 kelompok utuh, sisa 1"}
```

### Pecahan campuran menjadi pecahan tidak sejati

Potong semua martabak utuh menjadi potongan, lalu tambahkan potongan yang sudah ada.

$$2\frac{1}{3} = \frac{2 \times 3 + 1}{3} = \frac{7}{3}$$

### Pecahan pada garis bilangan

Setiap jarak 0 ke 1, 1 ke 2, dan seterusnya dibagi sama rata sesuai penyebut. Untuk perempatan, setiap 1 dibagi menjadi 4 bagian. Batang di bawah ini seperti garis bilangan yang dipotong per satu utuh: setiap petak bernilai $\frac{1}{4}$.

```visual
{"type": "fraction", "shape": "bar", "parts": 4, "shaded": 7, "wholes": 2, "caption": "7 petak seperempat = 1 utuh dan 3 perempat = 1 3/4"}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Pecahan tidak sejati menjadi pecahan campuran

```soal
{
 "title": "Contoh 1",
 "text": "Ubah $\\frac{7}{3}$ menjadi pecahan campuran.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Baca artinya. Ada berapa potong sepertiga?",
   "answer": "7",
   "hint": "Lihat pembilangnya.",
   "explain": "7/3 artinya 7 potong, setiap potong sepertiga martabak.",
   "error": "salah-membaca-pecahan",
   "suffix": "potong"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Setiap 3 potong = 1 martabak. 7 ÷ 3 = ... (hasil bagi)",
   "answer": "2",
   "hint": "3, 6, ... berapa kelompok 3 yang muat di 7?",
   "explain": "7 ÷ 3 = 2 sisa 1: 2 martabak utuh.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Berapa sisanya?",
   "answer": "1",
   "hint": "7 − 6.",
   "explain": "Sisa 1 potong menjadi pembilang baru.",
   "error": "salah-tafsir-sisa"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Tulis pecahan campurannya.",
   "answer": {
    "num": 1,
    "den": 3,
    "whole": 2
   },
   "hint": "Hasil bagi = utuh, sisa = pembilang, penyebut tetap.",
   "explain": "2 utuh dan 1/3.",
   "error": "salah-langkah-materi",
   "mixed": true,
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 2 × 3 + 1 = ?",
   "answer": "7",
   "hint": "Ubah balik ke potongan.",
   "explain": "7 potong, jadi 7/3. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\frac{7}{3} = 2\\frac{1}{3}$.",
 "visual": {
  "type": "fraction",
  "shape": "circle",
  "parts": 3,
  "shaded": 7,
  "wholes": 3
 }
}
```

### Contoh 2: Pecahan campuran menjadi pecahan tidak sejati

```soal
{
 "title": "Contoh 2",
 "text": "Ubah $3\\frac{2}{5}$ menjadi pecahan tidak sejati.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Apa arti 3 2/5?",
   "options": [
    "3 martabak utuh dan 2 potong seperlima",
    "3 potong dan 2 martabak",
    "5 martabak utuh"
   ],
   "answer": "3 martabak utuh dan 2 potong seperlima",
   "hint": "Bilangan besar di depan = utuh.",
   "explain": "3 utuh dan 2 potong seperlima.",
   "error": "salah-membaca-pecahan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Potong yang utuh. 3 × 5 = ?",
   "answer": "15",
   "hint": "Setiap martabak menjadi 5 potong.",
   "explain": "3 martabak = 15 potong seperlima.",
   "error": "salah-fakta-kali",
   "suffix": "potong"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tambah potongan yang sudah ada. 15 + 2 = ?",
   "answer": "17",
   "hint": "Ada 2 potong lagi.",
   "explain": "15 + 2 = 17 potong.",
   "error": "salah-fakta-tambah",
   "suffix": "potong"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Tulis sebagai pecahan tidak sejati.",
   "answer": {
    "num": 17,
    "den": 5
   },
   "hint": "Penyebut tetap 5.",
   "explain": "17/5.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 17 ÷ 5 = 3 sisa berapa?",
   "answer": "2",
   "hint": "5 × 3 = 15.",
   "explain": "Sisa 2, jadi 3 2/5. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $3\\frac{2}{5} = \\frac{17}{5}$."
}
```

### Contoh 3: Garis bilangan

```soal
{
 "title": "Contoh 3",
 "text": "Tandai $1\\frac{3}{4}$ dan $\\frac{9}{4}$ pada garis bilangan. Mana yang lebih besar?",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Langkah 1: Penyebutnya 4. Setiap garis kecil bernilai berapa?",
   "answer": {
    "num": 1,
    "den": 4
   },
   "hint": "Setiap jarak 0 ke 1 dibagi 4 bagian.",
   "explain": "Setiap garis kecil bernilai 1/4.",
   "error": "penyebut-bukan-semua-bagian",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Untuk 1 3/4, mulai dari 1 lalu maju berapa garis kecil?",
   "answer": "3",
   "hint": "Lihat pembilangnya.",
   "explain": "Dari 1, maju 3 garis kecil.",
   "error": "hitung-garis-tanda"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Ubah 9/4 menjadi pecahan campuran.",
   "answer": {
    "num": 1,
    "den": 4,
    "whole": 2
   },
   "hint": "9 ÷ 4 = 2 sisa ...",
   "explain": "9/4 = 2 1/4: dari 2, maju 1 garis kecil.",
   "error": "salah-langkah-materi",
   "mixed": true,
   "simplest": true
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Mana yang lebih besar?",
   "options": [
    "$\\frac{9}{4}$",
    "$1\\frac{3}{4}$",
    "Sama besar"
   ],
   "answer": "$\\frac{9}{4}$",
   "hint": "Yang lebih kanan di garis bilangan lebih besar.",
   "explain": "2 1/4 ada di kanan 1 3/4.",
   "error": "salah-banding-pecahan"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 1 3/4 = ?/4",
   "answer": "7",
   "hint": "1 × 4 + 3.",
   "explain": "1 3/4 = 7/4, dan 9 > 7. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\frac{9}{4} > 1\\frac{3}{4}$.",
 "visual": {
  "type": "fraction",
  "shape": "bar",
  "parts": 4,
  "shaded": 9,
  "wholes": 3
 }
}
```

### Contoh 4: Soal cerita dengan bentuk paling sederhana

```soal
{
 "title": "Contoh 4",
 "text": "Bu Putu memotong setiap loyang kue lapis menjadi 8 potong sama besar. Di meja tersisa 20 potong. Berapa loyang kue lapis yang tersisa? Tulis sebagai pecahan campuran paling sederhana.",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Langkah 1: 20 potong seperdelapan adalah berapa loyang? Tulis pecahan tidak sejati.",
   "answer": {
    "num": 20,
    "den": 8
   },
   "hint": "Pembilang = banyak potong, penyebut = 8.",
   "explain": "20 potong = 20/8 loyang.",
   "error": "pembilang-penyebut-tertukar"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 20 ÷ 8 = 2 sisa berapa?",
   "answer": "4",
   "hint": "8 × 2 = 16.",
   "explain": "Sisa 4, jadi 2 4/8 loyang.",
   "error": "salah-tafsir-sisa"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Sederhanakan 2 4/8.",
   "answer": {
    "num": 1,
    "den": 2,
    "whole": 2
   },
   "hint": "Bagi pembilang dan penyebut dengan 4.",
   "explain": "4/8 = 1/2, jadi 2 1/2 loyang.",
   "error": "pecahan-belum-sederhana",
   "mixed": true,
   "simplest": true
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: loyang ke-3 berisi 4 dari 8 potong. Itu ...",
   "options": [
    "Setengah loyang",
    "Seperempat loyang",
    "Satu loyang"
   ],
   "answer": "Setengah loyang",
   "hint": "4 adalah separuh dari 8.",
   "explain": "4 dari 8 = setengah. Cocok.",
   "error": "salah-membaca-pecahan"
  }
 ],
 "conclusion": "Tersisa $2\\frac{1}{2}$ loyang kue lapis.",
 "visual": {
  "type": "fraction",
  "shape": "bar",
  "parts": 8,
  "shaded": 20,
  "wholes": 3
 }
}
```

## Kesalahan yang sering terjadi

- **Mengubah penyebut.** Menulis $\frac{7}{3} = 2\frac{1}{2}$. Penyebut tidak boleh berubah, karena ukuran potongan martabak tetap sepertiga. Yang benar $2\frac{1}{3}$.
- **Menjumlahkan, bukan mengalikan.** Menghitung $3\frac{2}{5}$ sebagai $\frac{3 + 2}{5} = \frac{5}{5}$. Bilangan utuh harus **dikalikan** dengan penyebut dulu: $3 \times 5 + 2 = 17$.
- **Memakai hasil bagi sebagai pembilang.** Menulis $\frac{7}{3} = 1\frac{2}{3}$ atau tertukar antara hasil bagi dan sisa. Ingat: hasil bagi menjadi bilangan utuh, sisa menjadi pembilang.
- **Tidak menyederhanakan.** Berhenti di $2\frac{4}{8}$. Bentuk paling sederhana adalah $2\frac{1}{2}$.
- **Salah menghitung garis kecil.** Menghitung tanda garis, termasuk garis 0, sebagai "1". Hitung **lompatan**, bukan garisnya.

## Ringkasan

- Pecahan tidak sejati: pembilang $\geq$ penyebut. Pecahan campuran: bilangan utuh + pecahan sejati.
- Tidak sejati ke campuran: bagi pembilang dengan penyebut. Hasil bagi = utuh, sisa = pembilang baru, penyebut tetap.
- Campuran ke tidak sejati: (utuh × penyebut) + pembilang, penyebut tetap.
- Pada garis bilangan, setiap 1 dibagi sesuai penyebut. Yang lebih kanan lebih besar.
- Tulis jawaban dalam bentuk paling sederhana.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Ubah $\\frac{13}{5}$ menjadi pecahan campuran.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 13 ÷ 5 = ... (hasil bagi)",
   "answer": "2",
   "hint": "5 × 2 = 10, 5 × 3 = 15.",
   "explain": "Hasil bagi 2, sisa 3.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Tulis pecahan campurannya.",
   "answer": {
    "num": 3,
    "den": 5,
    "whole": 2
   },
   "hint": "Sisa menjadi pembilang, penyebut tetap.",
   "explain": "13/5 = 2 3/5.",
   "error": "salah-langkah-materi",
   "mixed": true,
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\frac{13}{5} = 2\\frac{3}{5}$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Ubah $4\\frac{1}{3}$ menjadi pecahan tidak sejati.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 4 × 3 + 1 = ?",
   "answer": "13",
   "hint": "Kalikan utuh dengan penyebut, lalu tambah pembilang.",
   "explain": "12 + 1 = 13.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Tulis pecahannya.",
   "answer": {
    "num": 13,
    "den": 3
   },
   "hint": "Penyebut tetap 3.",
   "explain": "4 1/3 = 13/3.",
   "error": "salah-langkah-materi",
   "simplest": true
  }
 ],
 "conclusion": "Jadi $4\\frac{1}{3} = \\frac{13}{3}$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Ubah $\\frac{18}{8}$ menjadi pecahan campuran paling sederhana.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 18 ÷ 8 = 2 sisa berapa?",
   "answer": "2",
   "hint": "8 × 2 = 16.",
   "explain": "Sisa 2, jadi 2 2/8.",
   "error": "salah-tafsir-sisa"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Sederhanakan 2 2/8.",
   "answer": {
    "num": 1,
    "den": 4,
    "whole": 2
   },
   "hint": "Bagi pembilang dan penyebut dengan 2.",
   "explain": "2/8 = 1/4, jadi 2 1/4.",
   "error": "pecahan-belum-sederhana",
   "mixed": true,
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\frac{18}{8} = 2\\frac{1}{4}$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Setiap batang di gambar adalah 1 utuh yang dibagi menjadi 5 bagian sama, seperti garis bilangan dari 0 ke 1 dan dari 1 ke 2. Bagian yang diarsir sampai ke titik P. Titik P menunjukkan bilangan berapa?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Hitung lompatan seperlima dari 0 sampai P.",
   "answer": "8",
   "hint": "Batang pertama 5 bagian, batang kedua berapa yang diarsir?",
   "explain": "5 + 3 = 8 lompatan.",
   "error": "hitung-garis-tanda"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Tulis sebagai pecahan tidak sejati.",
   "answer": {
    "num": 8,
    "den": 5
   },
   "hint": "Banyak lompatan per 5.",
   "explain": "P = 8/5.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Tulis sebagai pecahan campuran.",
   "answer": {
    "num": 3,
    "den": 5,
    "whole": 1
   },
   "hint": "8 ÷ 5 = 1 sisa 3.",
   "explain": "P = 1 3/5.",
   "error": "salah-langkah-materi",
   "mixed": true,
   "simplest": true
  }
 ],
 "conclusion": "Titik P menunjukkan $\\frac{8}{5} = 1\\frac{3}{5}$.",
 "visual": {
  "type": "fraction",
  "shape": "bar",
  "parts": 5,
  "shaded": 8,
  "wholes": 2
 }
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Made minum 9 gelas air. Setiap gelas berisi $\\frac{1}{4}$ liter. Berapa liter air yang ia minum? Tulis sebagai pecahan campuran.",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Langkah 1: 9 gelas seperempat liter = ? liter (pecahan tidak sejati)",
   "answer": {
    "num": 9,
    "den": 4
   },
   "hint": "Pembilang = banyak gelas.",
   "explain": "9/4 liter.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Ubah menjadi pecahan campuran.",
   "answer": {
    "num": 1,
    "den": 4,
    "whole": 2
   },
   "hint": "9 ÷ 4 = 2 sisa 1.",
   "explain": "9/4 = 2 1/4 liter.",
   "error": "salah-langkah-materi",
   "mixed": true,
   "simplest": true
  }
 ],
 "conclusion": "Made minum $2\\frac{1}{4}$ liter air."
}
```
