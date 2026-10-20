---
id: sd2-05-pembagian
judul: Pembagian dan Hubungannya dengan Perkalian
jenjang: sd2
moe: "Primary 2 · Number and Algebra · Multiplication and Division"
prasyarat: [sd1-06-konsep-kali-bagi, sd2-04-perkalian-2-3-4-5-10]
durasi_menit: 30
---

## Kenapa belajar ini?

Ibu punya 12 kue untuk 3 anak. Agar adil, setiap anak harus mendapat sama banyak. Pembagian membantu kamu membagi dengan adil. Pembagian juga erat sekali dengan perkalian yang sudah kamu pelajari.

## Analogi

Bayangkan **kue dan piring**. Ada dua cara membagi kue:

**Cara 1: Membagi sama banyak.** Ada 12 kue dan 3 piring. Taruh 1 kue di tiap piring, berulang-ulang, sampai kue habis. Tiap piring berisi 4 kue.

```anim
{"type": "benda", "op": "÷", "a": 12, "b": 3, "item": "kue", "title": "12 kue dibagi rata ke 3 piring"}
```

**Cara 2: Mengelompokkan.** Ada 12 kue. Setiap piring harus berisi 3 kue. Isi piring satu per satu sampai kue habis. Kamu butuh 4 piring.

```visual
{"type": "objects", "item": "kue", "count": 12, "group": 3, "caption": "12 kue, tiap piring 3 kue: butuh 4 piring"}
```

Kedua cara ditulis dengan kalimat yang sama: **12 ÷ 3 = 4**.

## Konsep

### Lambang ÷

12 ÷ 3 = 4 dibaca "dua belas dibagi tiga sama dengan empat".

- 12 adalah banyak kue **semuanya**.
- 3 adalah banyak piring, atau isi tiap piring.
- 4 adalah hasilnya.

Pembagian selalu dimulai dari **banyak semuanya**.

### Membagi sama banyak

Kita tahu banyak kelompok. Kita mencari isi tiap kelompok. Pada animasi kue di atas, 12 kue dibagi ke 3 piring, tiap piring mendapat 4 kue: 12 ÷ 3 = 4.

### Mengelompokkan

Kita tahu isi tiap kelompok. Kita mencari banyak kelompok. Ambil 3 kue berulang-ulang dari 12 sampai habis. Setiap loncatan adalah 1 piring.

```anim
{"type": "garis", "from": 0, "to": 12, "start": 12, "jumps": [-3, -3, -3, -3], "title": "12 dikurangi 3 berulang: 4 kali, jadi 4 piring"}
```

### Keluarga fakta kali-bagi

Gambar kue di atas punya empat kalimat matematika:

```visual
{"type": "table", "head": ["Perkalian", "Pembagian"], "rows": [["3 × 4 = 12", "12 ÷ 3 = 4"], ["4 × 3 = 12", "12 ÷ 4 = 3"]], "caption": "Keluarga fakta 3, 4, dan 12"}
```

Keempatnya disebut **keluarga fakta**. Bilangannya sama: 3, 4, dan 12.

### Membagi dengan tabel perkalian

Untuk menghitung 35 ÷ 5, tanyakan: **5 × berapa = 35?** Dari tabel 5, 5 × 7 = 35. Jadi 35 ÷ 5 = 7.

Pembagian adalah perkalian yang dibalik.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Membagi sama banyak

```soal
{
 "title": "Kerjakan bersama",
 "text": "Ada 10 permen. Permen dibagi sama banyak kepada Budi dan Siti. Berapa permen yang didapat masing-masing?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Kalimat pembagiannya?",
   "options": [
    "10 ÷ 2",
    "2 ÷ 10",
    "10 − 2"
   ],
   "answer": "10 ÷ 2",
   "hint": "Mulai dari banyak semuanya, yaitu 10. Ada 2 anak.",
   "explain": "10 permen dibagi ke 2 anak: 10 ÷ 2.",
   "error": "bagi-urutan-terbalik"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Bagikan satu per satu sampai habis. Masing-masing dapat berapa?",
   "answer": "5",
   "hint": "Budi 1, Siti 1, Budi 2, Siti 2, dan seterusnya.",
   "explain": "Masing-masing mendapat 5.",
   "error": "bagi-tidak-rata"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Pakai tabel. 2 × berapa = 10?",
   "answer": "5",
   "hint": "Tabel 2: 2, 4, 6, 8, 10.",
   "explain": "2 × 5 = 10, jadi 10 ÷ 2 = 5.",
   "error": "salah-keluarga-fakta"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 2 anak × 5 permen = ?",
   "answer": "10",
   "hint": "Kalikan banyak anak dengan isi tiap anak.",
   "explain": "2 × 5 = 10. Benar.",
   "error": "salah-fakta-kali"
  }
 ],
 "conclusion": "Masing-masing mendapat 5 permen.",
 "visual": {
  "type": "objects",
  "item": "permen",
  "count": 10
 }
}
```

### Contoh 2: Mengelompokkan

```soal
{
 "title": "Kerjakan bersama",
 "text": "Ada 20 jeruk. Setiap kantong berisi 4 jeruk. Berapa kantong yang dibutuhkan?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Apa yang dicari?",
   "options": [
    "Banyak kantong",
    "Isi tiap kantong"
   ],
   "answer": "Banyak kantong",
   "hint": "Isi tiap kantong sudah diketahui, yaitu 4.",
   "explain": "Kita mencari banyak kantong: 20 ÷ 4.",
   "error": "tertukar-jenis-bagi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung loncat 4 sampai 20: 4, 8, 12, 16, 20. Ada berapa loncatan?",
   "answer": "5",
   "hint": "Hitung bilangan yang disebut.",
   "explain": "Ada 5 loncatan, jadi 5 kantong.",
   "error": "salah-hitung-loncat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tulis kalimat pembagian. 20 ÷ 4 = ?",
   "answer": "5",
   "hint": "Banyak loncatan tadi.",
   "explain": "20 ÷ 4 = 5.",
   "error": "bagi-dikurang"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 5 kantong × 4 jeruk = ?",
   "answer": "20",
   "hint": "Kalikan.",
   "explain": "5 × 4 = 20. Benar.",
   "error": "salah-fakta-kali"
  }
 ],
 "conclusion": "Dibutuhkan 5 kantong.",
 "visual": {
  "type": "objects",
  "item": "jeruk",
  "count": 20,
  "group": 4
 }
}
```

### Contoh 3: Keluarga fakta

```soal
{
 "title": "Kerjakan bersama",
 "text": "Tulis keluarga fakta untuk bilangan 5, 6, dan 30. Lalu hitung $30 \\div 5$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Cari perkaliannya. Bilangan mana yang menjadi hasil kali?",
   "options": [
    "30",
    "6",
    "5"
   ],
   "answer": "30",
   "hint": "Hasil kali adalah bilangan terbesar.",
   "explain": "6 × 5 = 30.",
   "error": "salah-keluarga-fakta"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Tukar urutan perkaliannya.",
   "options": [
    "5 × 6 = 30",
    "30 × 5 = 6",
    "5 × 30 = 6"
   ],
   "answer": "5 × 6 = 30",
   "hint": "Hanya urutan 6 dan 5 yang ditukar.",
   "explain": "5 × 6 = 30.",
   "error": "salah-keluarga-fakta"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Balik menjadi pembagian. Mana yang benar?",
   "options": [
    "30 ÷ 5 = 6 dan 30 ÷ 6 = 5",
    "5 ÷ 30 = 6 dan 6 ÷ 30 = 5",
    "30 ÷ 5 = 6 dan 6 ÷ 5 = 30"
   ],
   "answer": "30 ÷ 5 = 6 dan 30 ÷ 6 = 5",
   "hint": "Pembagian dimulai dari bilangan terbesar.",
   "explain": "30 ÷ 5 = 6 dan 30 ÷ 6 = 5.",
   "error": "bagi-urutan-terbalik"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Jawab pertanyaan. 30 ÷ 5 = ?",
   "answer": "6",
   "hint": "5 × berapa = 30?",
   "explain": "30 ÷ 5 = 6.",
   "error": "salah-keluarga-fakta"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: loncat 5 sampai 30: 5, 10, 15, 20, 25, 30. Ada berapa loncatan?",
   "answer": "6",
   "hint": "Hitung bilangan yang disebut.",
   "explain": "6 loncatan. Benar.",
   "error": "salah-hitung-loncat"
  }
 ],
 "conclusion": "Keluarga faktanya 6 × 5 = 30, 5 × 6 = 30, 30 ÷ 5 = 6, 30 ÷ 6 = 5. Jadi 30 ÷ 5 = 6."
}
```

### Contoh 4: Soal cerita, kali lalu bagi

```soal
{
 "title": "Kerjakan bersama",
 "text": "Ibu membeli 3 kotak donat. Setiap kotak berisi 6 donat. Semua donat dibagi sama banyak ke 2 piring. Berapa donat di tiap piring?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Apa urutan hitungannya?",
   "options": [
    "Kali dulu, lalu bagi",
    "Bagi dulu, lalu kali",
    "Tambah saja"
   ],
   "answer": "Kali dulu, lalu bagi",
   "hint": "Cari banyak donat semuanya dulu.",
   "explain": "Pertama 3 × 6, lalu hasilnya dibagi 2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung semua donat. 3 × 6 = ?",
   "answer": "18",
   "hint": "Loncat 6 tiga kali.",
   "explain": "6, 12, 18. Ada 18 donat.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Bagi ke 2 piring. 2 × berapa = 18?",
   "answer": "9",
   "hint": "Tabel 2: 2, 4, 6, ..., 18.",
   "explain": "2 × 9 = 18, jadi 18 ÷ 2 = 9.",
   "error": "salah-keluarga-fakta",
   "suffix": "donat"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 2 piring × 9 donat = ?",
   "answer": "18",
   "hint": "Harus sama dengan banyak semua donat.",
   "explain": "2 × 9 = 18, sama dengan 3 kotak isi 6. Benar.",
   "error": "salah-fakta-kali"
  }
 ],
 "conclusion": "Tiap piring berisi 9 donat."
}
```

## Kesalahan yang sering terjadi

- **Urutan terbalik.** Menulis 3 ÷ 12 untuk "12 kue dibagi ke 3 piring". Pembagian selalu dimulai dari banyak semuanya: 12 ÷ 3.
- **Mengurang, bukan membagi.** 20 ÷ 4 dijawab 16. Itu 20 − 4. Pembagian bertanya: berapa kali 4 muat dalam 20? Jawabannya 5.
- **Salah memilih bilangan dari tabel.** Untuk 28 ÷ 4, menjawab 4 karena melihat angka 4 di soal. Tanyakan: 4 × berapa = 28? Jawabannya 7.
- **Mengira dua cara membagi itu beda operasi.** Membagi sama banyak dan mengelompokkan sama-sama ditulis dengan ÷.

## Ringkasan

- Lambang ÷ berarti membagi. Mulai dari banyak semuanya.
- Membagi sama banyak: tahu banyak kelompok, cari isi tiap kelompok.
- Mengelompokkan: tahu isi tiap kelompok, cari banyak kelompok.
- Keluarga fakta: 3 × 4 = 12, 4 × 3 = 12, 12 ÷ 3 = 4, 12 ÷ 4 = 3.
- Untuk membagi, tanyakan "pembagi × berapa = bilangan yang dibagi?"
- Cek: hasil × pembagi = bilangan yang dibagi.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung $18 \\div 2$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Tanyakan pada dirimu:",
   "options": [
    "2 × berapa = 18?",
    "18 − 2 = berapa?",
    "18 × 2 = berapa?"
   ],
   "answer": "2 × berapa = 18?",
   "hint": "Pembagian adalah perkalian yang dibalik.",
   "explain": "Cari 2 × ... = 18.",
   "error": "bagi-dikurang"
  },
  {
   "kind": "number",
   "prompt": "18 ÷ 2 = ?",
   "answer": "9",
   "hint": "Tabel 2: 2, 4, 6, 8, 10, 12, 14, 16, 18.",
   "explain": "2 × 9 = 18, jadi 18 ÷ 2 = 9.",
   "error": "salah-keluarga-fakta"
  }
 ],
 "conclusion": "Jadi 18 ÷ 2 = 9."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $45 \\div 5$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Loncat 5 sampai 45. Ada berapa loncatan?",
   "answer": "9",
   "hint": "5, 10, 15, 20, 25, 30, 35, 40, 45.",
   "explain": "9 loncatan.",
   "error": "salah-hitung-loncat"
  },
  {
   "kind": "number",
   "prompt": "45 ÷ 5 = ?",
   "answer": "9",
   "hint": "Banyak loncatan tadi.",
   "explain": "5 × 9 = 45, jadi 45 ÷ 5 = 9.",
   "error": "salah-keluarga-fakta"
  }
 ],
 "conclusion": "Jadi 45 ÷ 5 = 9."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung $28 \\div 4$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Tanyakan pada dirimu:",
   "options": [
    "4 × berapa = 28?",
    "28 − 4 = berapa?"
   ],
   "answer": "4 × berapa = 28?",
   "hint": "Pembagian adalah perkalian yang dibalik.",
   "explain": "Cari 4 × ... = 28.",
   "error": "bagi-dikurang"
  },
  {
   "kind": "number",
   "prompt": "28 ÷ 4 = ?",
   "answer": "7",
   "hint": "Tabel 4: 4, 8, 12, 16, 20, 24, 28.",
   "explain": "4 × 7 = 28, jadi 28 ÷ 4 = 7.",
   "error": "salah-keluarga-fakta"
  }
 ],
 "conclusion": "Jadi 28 ÷ 4 = 7."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Tulis keluarga fakta untuk 3, 7, dan 21.",
 "steps": [
  {
   "kind": "number",
   "prompt": "3 × 7 = ?",
   "answer": "21",
   "hint": "Loncat 3 tujuh kali.",
   "explain": "3 × 7 = 21, dan 7 × 3 = 21.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "21 ÷ 3 = ?",
   "answer": "7",
   "hint": "3 × berapa = 21?",
   "explain": "21 ÷ 3 = 7.",
   "error": "salah-keluarga-fakta"
  },
  {
   "kind": "number",
   "prompt": "21 ÷ 7 = ?",
   "answer": "3",
   "hint": "7 × berapa = 21?",
   "explain": "21 ÷ 7 = 3.",
   "error": "salah-keluarga-fakta"
  },
  {
   "kind": "choice",
   "prompt": "Mana yang BUKAN anggota keluarga fakta ini?",
   "options": [
    "3 ÷ 21 = 7",
    "7 × 3 = 21",
    "21 ÷ 7 = 3"
   ],
   "answer": "3 ÷ 21 = 7",
   "hint": "Pembagian dimulai dari bilangan terbesar.",
   "explain": "3 ÷ 21 urutannya terbalik.",
   "error": "bagi-urutan-terbalik"
  }
 ],
 "conclusion": "Keluarga faktanya 3 × 7 = 21, 7 × 3 = 21, 21 ÷ 3 = 7, 21 ÷ 7 = 3."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Ada 60 kelereng. Setiap kantong diisi 10 kelereng. Berapa kantong yang dibutuhkan?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Kalimat pembagiannya?",
   "options": [
    "60 ÷ 10",
    "10 ÷ 60",
    "60 − 10"
   ],
   "answer": "60 ÷ 10",
   "hint": "Mulai dari banyak semuanya.",
   "explain": "60 ÷ 10.",
   "error": "bagi-urutan-terbalik"
  },
  {
   "kind": "number",
   "prompt": "10 × berapa = 60?",
   "answer": "6",
   "hint": "Tabel 10: 10, 20, 30, 40, 50, 60.",
   "explain": "10 × 6 = 60, jadi 60 ÷ 10 = 6.",
   "error": "salah-keluarga-fakta",
   "suffix": "kantong"
  }
 ],
 "conclusion": "Dibutuhkan 6 kantong.",
 "visual": {
  "type": "objects",
  "item": "kelereng",
  "count": 60,
  "group": 10
 }
}
```
