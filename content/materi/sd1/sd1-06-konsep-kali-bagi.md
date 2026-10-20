---
id: sd1-06-konsep-kali-bagi
judul: Konsep Perkalian dan Pembagian
jenjang: sd1
moe: "Primary 1 · Number and Algebra · Multiplication and Division"
prasyarat: [sd1-03-konsep-tambah-kurang]
durasi_menit: 30
---

## Kenapa belajar ini?

Ibu menata kue di beberapa piring, setiap piring isinya sama. Berapa semua kuenya? Atau kamu ingin membagi permen sama rata dengan teman. Perkalian dan pembagian membantu menghitung **kelompok yang sama banyak** dengan cepat.

## Analogi

Bayangkan **piring-piring kue** di meja makan.

- Setiap piring berisi kue yang **sama banyak**.
- Banyak piring adalah **banyak kelompok**.
- Kue di satu piring adalah **isi setiap kelompok**.

Perkalian: kita tahu banyak piring dan isi tiap piring. Kita mencari **semua kue**.

```anim
{"type": "benda", "op": "×", "a": 3, "b": 4, "item": "kue", "title": "3 piring, setiap piring 4 kue"}
```

Pembagian: kita tahu semua kue. Kita membaginya ke piring-piring **sama banyak**.

```anim
{"type": "benda", "op": "÷", "a": 12, "b": 3, "item": "kue", "title": "12 kue dibagi sama banyak ke 3 piring"}
```

## Konsep

### Kelompok sama banyak

```visual
{"type": "objects", "item": "kue", "count": 12, "group": 4, "caption": "3 piring, setiap piring berisi 4 kue"}
```

Ada **3 piring**. Setiap piring berisi **4 kue**. Kita sebut "3 kelompok 4".

### Perkalian sebagai penjumlahan berulang

Untuk menghitung semua kue, jumlahkan isi setiap piring:

4 + 4 + 4 = 12

Penjumlahan berulang ini bisa ditulis lebih singkat dengan lambang **×** (dibaca "kali"):

**3 × 4 = 12**

- 3 adalah banyak piring (banyak kelompok).
- 4 adalah isi setiap piring.
- 12 adalah semua kue.

Jadi 3 × 4 artinya 4 dijumlahkan 3 kali.

### Hitung loncat

Cara cepat menghitung penjumlahan berulang adalah **hitung loncat**. Untuk 3 × 4, loncat 4 sebanyak 3 kali: 4, 8, 12.

```anim
{"type": "garis", "from": 0, "to": 12, "start": 0, "jumps": [4, 4, 4], "title": "3 × 4: loncat 4 sebanyak 3 kali"}
```

### Pembagian: membagi sama banyak

Ada 12 kue dan 3 piring. Bagikan kue satu per satu ke setiap piring, berputar, sampai kue habis. Setiap piring mendapat 4 kue.

Kita katakan: **12 dibagi sama banyak ke 3 piring, setiap piring mendapat 4**.

### Pembagian: mengelompokkan

Ada 12 kue. Setiap piring harus berisi 3 kue. Ambil 3 kue, taruh di satu piring. Ulangi sampai kue habis. Ternyata butuh 4 piring.

```visual
{"type": "objects", "item": "kue", "count": 12, "group": 3, "caption": "12 kue dikelompokkan 3-3: ada 4 piring"}
```

Kita katakan: **12 kue dikelompokkan 3-3, menjadi 4 kelompok**.

Dua cara pembagian ini berbeda pertanyaannya:

- **Membagi sama banyak:** banyak piring sudah tahu, cari isi tiap piring.
- **Mengelompokkan:** isi tiap piring sudah tahu, cari banyak piring.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menulis perkalian

```soal
{
 "title": "Contoh 1",
 "text": "Ada 4 kantong. Setiap kantong berisi 5 kelereng. Tulis penjumlahan berulang dan perkaliannya. Berapa semua kelereng?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Berapa banyak kelompok (kantong)?",
   "answer": "4",
   "hint": "Hitung kantongnya.",
   "explain": "Ada 4 kantong, seperti 4 piring.",
   "error": "tertukar-arti-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Berapa isi setiap kantong?",
   "answer": "5",
   "hint": "Baca lagi soalnya.",
   "explain": "Setiap kantong berisi 5 kelereng.",
   "error": "tertukar-arti-kali"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Penjumlahan berulangnya adalah ...",
   "options": [
    "5 + 5 + 5 + 5",
    "4 + 4 + 4 + 4 + 4",
    "4 + 5"
   ],
   "answer": "5 + 5 + 5 + 5",
   "hint": "Isi kantong dijumlahkan sebanyak kantongnya.",
   "explain": "5 dijumlahkan 4 kali: 5 + 5 + 5 + 5.",
   "error": "tambah-bukan-kali"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Perkaliannya adalah ...",
   "options": [
    "4 × 5",
    "5 × 4",
    "4 + 5"
   ],
   "answer": "4 × 5",
   "hint": "Angka pertama adalah banyak kelompok.",
   "explain": "4 kelompok berisi 5: 4 × 5.",
   "error": "tertukar-arti-kali"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung loncat 5 sebanyak 4 kali: 5, 10, 15, ...?",
   "answer": "20",
   "hint": "Loncat 5 sekali lagi dari 15.",
   "explain": "5, 10, 15, 20. Jadi 4 × 5 = 20.",
   "error": "salah-hitung-loncat"
  }
 ],
 "conclusion": "Jadi 5 + 5 + 5 + 5 = 20, atau 4 × 5 = 20 kelereng.",
 "visual": {
  "type": "objects",
  "item": "kelereng",
  "count": 20,
  "group": 5
 }
}
```

### Contoh 2: Menghitung perkalian

```soal
{
 "title": "Contoh 2",
 "text": "Hitung $6 \\times 3$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Baca artinya. 6 × 3 artinya ...",
   "options": [
    "6 piring, setiap piring 3 kue",
    "3 piring, setiap piring 6 kue",
    "6 kue dan 3 kue"
   ],
   "answer": "6 piring, setiap piring 3 kue",
   "hint": "Angka pertama adalah banyak piring.",
   "explain": "6 × 3 artinya 6 kelompok berisi 3.",
   "error": "tertukar-arti-kali"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Penjumlahan berulangnya adalah ...",
   "options": [
    "3 + 3 + 3 + 3 + 3 + 3",
    "6 + 6 + 6",
    "6 + 3"
   ],
   "answer": "3 + 3 + 3 + 3 + 3 + 3",
   "hint": "Isi piring dijumlahkan sebanyak piringnya.",
   "explain": "3 dijumlahkan 6 kali.",
   "error": "tambah-bukan-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung loncat 3 sebanyak 6 kali: 3, 6, 9, 12, 15, ...?",
   "answer": "18",
   "hint": "Loncat 3 dari 15.",
   "explain": "3, 6, 9, 12, 15, 18. Ada 6 loncatan.",
   "error": "salah-hitung-loncat"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: jumlahkan berpasangan. 6 + 6 + 6 = ?",
   "answer": "18",
   "hint": "3 + 3 = 6, dan ada tiga pasang.",
   "explain": "6 + 6 + 6 = 18. Sama.",
   "error": "salah-fakta-tambah"
  }
 ],
 "conclusion": "Jadi 6 × 3 = 18."
}
```

### Contoh 3: Membagi sama banyak

```soal
{
 "title": "Contoh 3",
 "text": "Ada 15 permen. Permen dibagi sama banyak kepada 3 anak: Budi, Siti, dan Made. Berapa permen yang didapat setiap anak?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Banyak anak sudah tahu. Ini ...",
   "options": [
    "membagi sama banyak",
    "mengelompokkan"
   ],
   "answer": "membagi sama banyak",
   "hint": "Kita mencari isi tiap anak.",
   "explain": "Banyak anak diketahui, cari isi tiap anak: membagi sama banyak.",
   "error": "tertukar-jenis-bagi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Bagikan berputar, 1 permen untuk setiap anak. Satu putaran memakai berapa permen?",
   "answer": "3",
   "hint": "Ada berapa anak?",
   "explain": "Satu putaran: 1 untuk Budi, 1 untuk Siti, 1 untuk Made = 3 permen.",
   "error": "bagi-tidak-rata"
  },
  {
   "kind": "number",
   "prompt": "Terpakai 3, 6, 9, 12, 15. Berapa putaran sampai permen habis?",
   "answer": "5",
   "hint": "Hitung bilangan dalam hitung loncat itu.",
   "explain": "Ada 5 putaran.",
   "error": "salah-hitung-loncat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Setiap anak mendapat berapa permen?",
   "answer": "5",
   "hint": "Setiap putaran, satu anak dapat 1 permen.",
   "explain": "5 putaran, jadi setiap anak dapat 5 permen.",
   "error": "bagi-tidak-rata"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 5 + 5 + 5 = ?",
   "answer": "15",
   "hint": "Jumlahkan permen ketiga anak.",
   "explain": "5 + 5 + 5 = 15. Benar.",
   "error": "salah-fakta-tambah"
  }
 ],
 "conclusion": "Jadi setiap anak mendapat 5 permen.",
 "visual": {
  "type": "objects",
  "item": "permen",
  "count": 15,
  "group": 5
 }
}
```

### Contoh 4: Mengelompokkan

```soal
{
 "title": "Contoh 4",
 "text": "Ada 20 kelereng. Setiap kantong diisi 4 kelereng. Berapa kantong yang dibutuhkan?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Isi tiap kantong sudah tahu. Ini ...",
   "options": [
    "membagi sama banyak",
    "mengelompokkan"
   ],
   "answer": "mengelompokkan",
   "hint": "Kita mencari banyak kantong.",
   "explain": "Isi kantong diketahui, cari banyak kantong: mengelompokkan.",
   "error": "tertukar-jenis-bagi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung loncat 4 sampai 20: 4, 8, 12, ...?",
   "answer": "16",
   "hint": "Loncat 4 dari 12.",
   "explain": "4, 8, 12, 16, 20.",
   "error": "salah-hitung-loncat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Ada berapa loncatan (kantong)?",
   "answer": "5",
   "hint": "Hitung bilangan 4, 8, 12, 16, 20.",
   "explain": "Ada 5 loncatan, jadi 5 kantong.",
   "error": "salah-hitung-loncat"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 4 + 4 + 4 + 4 + 4 = ?",
   "answer": "20",
   "hint": "Hitung loncat 4 lima kali.",
   "explain": "4 + 4 + 4 + 4 + 4 = 20. Benar.",
   "error": "salah-fakta-tambah"
  }
 ],
 "conclusion": "Jadi dibutuhkan 5 kantong."
}
```

### Contoh 5: Soal cerita

```soal
{
 "title": "Contoh 5",
 "text": "Ibu membeli 5 bungkus roti. Setiap bungkus berisi 8 roti. Berapa roti semuanya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Kalimat matematikanya adalah ...",
   "options": [
    "5 × 8",
    "5 + 8",
    "8 × 5"
   ],
   "answer": "5 × 8",
   "hint": "5 kelompok, setiap kelompok 8.",
   "explain": "5 bungkus berisi 8: 5 × 8.",
   "error": "tambah-bukan-kali"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Penjumlahan berulangnya adalah ...",
   "options": [
    "8 + 8 + 8 + 8 + 8",
    "5 + 5 + 5 + 5 + 5 + 5 + 5 + 5",
    "5 + 8"
   ],
   "answer": "8 + 8 + 8 + 8 + 8",
   "hint": "Isi bungkus dijumlahkan sebanyak bungkusnya.",
   "explain": "8 dijumlahkan 5 kali.",
   "error": "tertukar-arti-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung loncat 8: 8, 16, 24, 32, ...?",
   "answer": "40",
   "hint": "32 + 8 = ?",
   "explain": "8, 16, 24, 32, 40.",
   "error": "salah-hitung-loncat",
   "suffix": "roti"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban dengan dobel: 8 + 8 = 16, 16 + 16 = 32, lalu 32 + 8 = ?",
   "answer": "40",
   "hint": "Tambah satu bungkus lagi.",
   "explain": "32 + 8 = 40. Sama.",
   "error": "salah-fakta-tambah"
  }
 ],
 "conclusion": "Jadi ada 40 roti."
}
```

## Kesalahan yang sering terjadi

- **Kelompok tidak sama banyak.** Menulis 3 + 4 + 5 sebagai perkalian. Perkalian hanya untuk kelompok yang **sama** isinya.
- **Menjumlahkan, bukan mengalikan.** Untuk "4 kantong berisi 5", menjawab 4 + 5 = 9. Yang benar 5 dijumlahkan 4 kali: 20.
- **Salah arti 3 × 4.** Menggambar 4 piring berisi 3. Yang benar, 3 × 4 artinya 3 piring, setiap piring berisi 4 (4 + 4 + 4). Angka pertama adalah banyak piring.
- **Tertukar dua jenis pembagian.** Pada contoh 4, membagi 20 kelereng ke 4 kantong lalu menjawab 5 kelereng. Jawabannya kebetulan sama angkanya, tetapi yang ditanya adalah **banyak kantong**. Baca lagi yang ditanya.
- **Bagian tidak sama rata.** Saat membagi, memberi satu anak lebih banyak. Bagikan berputar satu per satu supaya adil.

## Ringkasan

- Perkalian = penjumlahan berulang dari kelompok **sama banyak**.
- 3 × 4 artinya 3 kelompok, setiap kelompok 4: 4 + 4 + 4 = 12.
- Hitung loncat membantu menghitung perkalian.
- Membagi sama banyak: banyak kelompok diketahui, cari isi tiap kelompok.
- Mengelompokkan: isi tiap kelompok diketahui, cari banyak kelompok.
- Cek pembagian dengan perkalian atau penjumlahan berulang.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tulis $2 + 2 + 2 + 2 + 2$ sebagai perkalian, lalu hitung hasilnya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Ada berapa kelompok berisi 2?",
   "answer": "5",
   "hint": "Hitung angka 2 yang dijumlahkan.",
   "explain": "Ada 5 angka 2, jadi 5 kelompok.",
   "error": "tertukar-arti-kali"
  },
  {
   "kind": "choice",
   "prompt": "Perkaliannya adalah ...",
   "options": [
    "5 × 2",
    "2 × 5",
    "5 + 2"
   ],
   "answer": "5 × 2",
   "hint": "Banyak kelompok ditulis lebih dulu.",
   "explain": "5 kelompok berisi 2: 5 × 2.",
   "error": "tertukar-arti-kali"
  },
  {
   "kind": "number",
   "prompt": "Hitung loncat 2: 2, 4, 6, 8, ...?",
   "answer": "10",
   "hint": "Loncat 2 dari 8.",
   "explain": "2, 4, 6, 8, 10. Jadi 5 × 2 = 10.",
   "error": "salah-hitung-loncat"
  }
 ],
 "conclusion": "Jadi 5 × 2 = 10."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $3 \\times 7$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "3 × 7 sama dengan ...",
   "options": [
    "7 + 7 + 7",
    "3 + 3 + 3",
    "3 + 7"
   ],
   "answer": "7 + 7 + 7",
   "hint": "3 kelompok berisi 7.",
   "explain": "7 dijumlahkan 3 kali.",
   "error": "tertukar-arti-kali"
  },
  {
   "kind": "number",
   "prompt": "Hitung loncat 7: 7, 14, ...?",
   "answer": "21",
   "hint": "14 + 7 = ?",
   "explain": "7, 14, 21.",
   "error": "salah-hitung-loncat"
  }
 ],
 "conclusion": "Jadi 3 × 7 = 21."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Ada 18 jeruk. Jeruk dibagi sama banyak ke dalam 2 keranjang. Berapa jeruk di setiap keranjang?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Ini termasuk ...",
   "options": [
    "membagi sama banyak",
    "mengelompokkan"
   ],
   "answer": "membagi sama banyak",
   "hint": "Banyak keranjang sudah tahu.",
   "explain": "Banyak keranjang diketahui, cari isi tiap keranjang.",
   "error": "tertukar-jenis-bagi"
  },
  {
   "kind": "number",
   "prompt": "Bilangan apa yang dijumlahkan dengan dirinya sendiri menjadi 18? ? + ? = 18",
   "answer": "9",
   "hint": "Pikirkan dobel.",
   "explain": "9 + 9 = 18.",
   "error": "bagi-tidak-rata",
   "suffix": "jeruk"
  }
 ],
 "conclusion": "Jadi setiap keranjang berisi 9 jeruk.",
 "visual": {
  "type": "objects",
  "item": "jeruk",
  "count": 18
 }
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Ada 16 kue. Setiap piring diisi 4 kue. Berapa piring yang dibutuhkan?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Ini termasuk ...",
   "options": [
    "membagi sama banyak",
    "mengelompokkan"
   ],
   "answer": "mengelompokkan",
   "hint": "Isi tiap piring sudah tahu.",
   "explain": "Isi piring diketahui, cari banyak piring.",
   "error": "tertukar-jenis-bagi"
  },
  {
   "kind": "number",
   "prompt": "Hitung loncat 4 sampai 16: 4, 8, 12, 16. Ada berapa loncatan?",
   "answer": "4",
   "hint": "Hitung bilangannya.",
   "explain": "Ada 4 loncatan, jadi 4 piring.",
   "error": "salah-hitung-loncat",
   "suffix": "piring"
  }
 ],
 "conclusion": "Jadi dibutuhkan 4 piring.",
 "visual": {
  "type": "objects",
  "item": "kue",
  "count": 16,
  "group": 4
 }
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Di kelas ada 4 meja. Setiap meja punya 6 kursi. Berapa kursi semuanya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Kalimat matematikanya adalah ...",
   "options": [
    "4 × 6",
    "4 + 6",
    "6 × 4"
   ],
   "answer": "4 × 6",
   "hint": "4 kelompok berisi 6.",
   "explain": "4 meja, setiap meja 6 kursi: 4 × 6.",
   "error": "tambah-bukan-kali"
  },
  {
   "kind": "number",
   "prompt": "Hitung loncat 6: 6, 12, 18, ...?",
   "answer": "24",
   "hint": "18 + 6 = ?",
   "explain": "6, 12, 18, 24.",
   "error": "salah-hitung-loncat",
   "suffix": "kursi"
  }
 ],
 "conclusion": "Jadi ada 24 kursi."
}
```
