---
id: sd2-04-perkalian-2-3-4-5-10
judul: Perkalian 2, 3, 4, 5, dan 10
jenjang: sd2
moe: "Primary 2 · Number and Algebra · Multiplication and Division"
prasyarat: [sd1-06-konsep-kali-bagi]
durasi_menit: 35
---

## Kenapa belajar ini?

Ibu membeli 6 bungkus roti. Tiap bungkus berisi 5 roti. Berapa roti semuanya? Kamu bisa menjumlah 5 + 5 + 5 + 5 + 5 + 5. Tetapi perkalian jauh lebih cepat: 6 × 5 = 30.

## Analogi

Bayangkan **keranjang jeruk**. Setiap keranjang berisi jeruk yang **sama banyak**.

3 × 4 artinya **3 keranjang, tiap keranjang berisi 4 jeruk**.

```anim
{"type": "benda", "op": "×", "a": 3, "b": 4, "item": "jeruk", "title": "3 keranjang, tiap keranjang 4 jeruk"}
```

Jumlahnya 4 + 4 + 4 = 12. Jadi 3 × 4 = 12.

Bilangan pertama adalah **banyak keranjang**. Bilangan kedua adalah **isi tiap keranjang**.

## Konsep

### Tabel perkalian 2, 3, 4, 5, dan 10

```visual
{"type": "table", "head": ["× 2", "× 3", "× 4", "× 5", "× 10"], "rows": [["1 × 2 = 2", "1 × 3 = 3", "1 × 4 = 4", "1 × 5 = 5", "1 × 10 = 10"], ["2 × 2 = 4", "2 × 3 = 6", "2 × 4 = 8", "2 × 5 = 10", "2 × 10 = 20"], ["3 × 2 = 6", "3 × 3 = 9", "3 × 4 = 12", "3 × 5 = 15", "3 × 10 = 30"], ["4 × 2 = 8", "4 × 3 = 12", "4 × 4 = 16", "4 × 5 = 20", "4 × 10 = 40"], ["5 × 2 = 10", "5 × 3 = 15", "5 × 4 = 20", "5 × 5 = 25", "5 × 10 = 50"], ["6 × 2 = 12", "6 × 3 = 18", "6 × 4 = 24", "6 × 5 = 30", "6 × 10 = 60"], ["7 × 2 = 14", "7 × 3 = 21", "7 × 4 = 28", "7 × 5 = 35", "7 × 10 = 70"], ["8 × 2 = 16", "8 × 3 = 24", "8 × 4 = 32", "8 × 5 = 40", "8 × 10 = 80"], ["9 × 2 = 18", "9 × 3 = 27", "9 × 4 = 36", "9 × 5 = 45", "9 × 10 = 90"], ["10 × 2 = 20", "10 × 3 = 30", "10 × 4 = 40", "10 × 5 = 50", "10 × 10 = 100"]]}
```

Cara mengingat: **hitung loncat**. Untuk tabel 3, loncat 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30.

```anim
{"type": "garis", "from": 0, "to": 30, "start": 0, "jumps": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], "title": "Hitung loncat 3 sampai 30"}
```

### Pola dalam tabel

- **Tabel 2**: hasilnya selalu bilangan genap.
- **Tabel 5**: angka satuan hasilnya selalu 5 atau 0, bergantian.
- **Tabel 10**: hasilnya selalu berakhir 0. Contoh 7 × 10 = 70.
- **Tabel 4**: hasilnya dua kali hasil tabel 2. Contoh 6 × 2 = 12, jadi 6 × 4 = 24.
- **Tabel 10 dan 5**: hasil tabel 5 adalah setengah dari tabel 10. Contoh 8 × 10 = 80, jadi 8 × 5 = 40.

### Sifat pertukaran

Tukar urutan bilangan, hasilnya tetap sama.

```visual
{"type": "objects", "item": "jeruk", "count": 12, "group": 4, "caption": "3 × 4: 3 kelompok, isi 4"}
```

```visual
{"type": "objects", "item": "jeruk", "count": 12, "group": 3, "caption": "4 × 3: 4 kelompok, isi 3"}
```

Keduanya 12 jeruk. Jadi 3 × 4 = 4 × 3. Kalau kamu lupa 4 × 3, pakai 3 × 4 yang kamu ingat.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Hitung loncat

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung $5 \\times 3$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Baca soal dengan analogi. 5 × 3 artinya?",
   "options": [
    "5 keranjang, tiap keranjang 3 jeruk",
    "3 keranjang, tiap keranjang 5 jeruk",
    "5 jeruk ditambah 3 jeruk"
   ],
   "answer": "5 keranjang, tiap keranjang 3 jeruk",
   "hint": "Bilangan pertama banyak keranjang, kedua isinya.",
   "explain": "5 keranjang, isi 3.",
   "error": "tertukar-arti-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung loncat 3 sebanyak 5 kali: 3, 6, 9, 12, ...",
   "answer": "15",
   "hint": "Tambah 3 lagi dari 12.",
   "explain": "3, 6, 9, 12, 15. Jadi 5 × 3 = 15.",
   "error": "salah-hitung-loncat"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 3 × 5, loncat 5 tiga kali: 5, 10, ...",
   "answer": "15",
   "hint": "Tambah 5 dari 10.",
   "explain": "5, 10, 15. Hasilnya sama.",
   "error": "salah-sifat-pertukaran"
  }
 ],
 "conclusion": "Jadi 5 × 3 = 15.",
 "visual": {
  "type": "objects",
  "item": "jeruk",
  "count": 15,
  "group": 3
 }
}
```

### Contoh 2: Memakai pola dobel

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung $4 \\times 7$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Berapa banyak keranjang?",
   "answer": "4",
   "hint": "Bilangan pertama.",
   "explain": "4 keranjang, tiap keranjang 7 jeruk.",
   "error": "tertukar-arti-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung 2 keranjang dulu. 2 × 7 = ?",
   "answer": "14",
   "hint": "Dari tabel 2: 7 + 7.",
   "explain": "2 × 7 = 14.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Gandakan. 14 + 14 = ?",
   "answer": "28",
   "hint": "4 keranjang = 2 keranjang + 2 keranjang.",
   "explain": "14 + 14 = 28.",
   "error": "salah-sesuaikan-dobel"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: loncat 4 tujuh kali: 4, 8, 12, 16, 20, 24, ...",
   "answer": "28",
   "hint": "Tambah 4 dari 24.",
   "explain": "Loncatan ketujuh adalah 28. Sama.",
   "error": "salah-hitung-loncat"
  }
 ],
 "conclusion": "Jadi 4 × 7 = 28."
}
```

### Contoh 3: Sifat pertukaran

```soal
{
 "title": "Kerjakan bersama",
 "text": "Apakah $3 \\times 8$ sama dengan $8 \\times 3$? Berapa hasilnya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Gambar 3 × 8. Seperti apa gambarnya?",
   "options": [
    "3 kelompok, tiap kelompok 8",
    "8 kelompok, tiap kelompok 3"
   ],
   "answer": "3 kelompok, tiap kelompok 8",
   "hint": "Bilangan pertama banyak kelompok.",
   "explain": "3 kelompok berisi 8, seperti pada gambar.",
   "error": "tertukar-arti-kali"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Kalau gambarnya diputar menjadi 8 kelompok isi 3, apakah banyak benda berubah?",
   "options": [
    "Tidak berubah",
    "Berubah"
   ],
   "answer": "Tidak berubah",
   "hint": "Tidak ada benda yang ditambah atau diambil.",
   "explain": "Banyak benda tetap. Jadi 3 × 8 = 8 × 3.",
   "error": "salah-sifat-pertukaran"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung 8 × 3 dengan tabel 3.",
   "answer": "24",
   "hint": "Loncat 3 delapan kali.",
   "explain": "8 × 3 = 24.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: loncat 8 tiga kali: 8, 16, ...",
   "answer": "24",
   "hint": "Tambah 8 dari 16.",
   "explain": "8, 16, 24. Sama.",
   "error": "salah-hitung-loncat"
  }
 ],
 "conclusion": "Ya, 3 × 8 = 8 × 3 = 24.",
 "visual": {
  "type": "objects",
  "item": "bintang",
  "count": 24,
  "group": 8
 }
}
```

### Contoh 4: Soal cerita dua bagian

```soal
{
 "title": "Kerjakan bersama",
 "text": "Di depan sekolah ada 4 sepeda dan 7 becak. Satu sepeda punya 2 roda. Satu becak punya 3 roda. Berapa roda semuanya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Apa yang dikerjakan?",
   "options": [
    "Hitung roda sepeda dan roda becak, lalu jumlahkan",
    "Kalikan 4 × 7",
    "Jumlahkan 4 + 7 + 2 + 3"
   ],
   "answer": "Hitung roda sepeda dan roda becak, lalu jumlahkan",
   "hint": "Ada dua kelompok kendaraan.",
   "explain": "Hitung masing-masing, lalu jumlahkan.",
   "error": "tambah-bukan-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Roda sepeda. 4 × 2 = ?",
   "answer": "8",
   "hint": "4 sepeda, tiap sepeda 2 roda.",
   "explain": "4 × 2 = 8.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Roda becak. 7 × 3 = ?",
   "answer": "21",
   "hint": "Loncat 3 tujuh kali.",
   "explain": "7 × 3 = 21.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Jumlahkan. 8 + 21 = ?",
   "answer": "29",
   "hint": "Roda sepeda ditambah roda becak.",
   "explain": "8 + 21 = 29.",
   "error": "salah-fakta-tambah",
   "suffix": "roda"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: loncat 3: 3, 6, 9, 12, 15, 18, ... Loncatan ketujuh?",
   "answer": "21",
   "hint": "Tambah 3 dari 18.",
   "explain": "21 benar, dan 21 + 8 = 29.",
   "error": "salah-hitung-loncat"
  }
 ],
 "conclusion": "Ada 29 roda."
}
```

## Kesalahan yang sering terjadi

- **Menjumlah, bukan mengali.** 3 × 4 dijawab 7. Ingat keranjang: 3 keranjang isi 4 adalah 4 + 4 + 4 = 12, bukan 3 + 4.
- **Melompati satu loncatan.** Menghitung loncat 4: 4, 8, 16. Angka 12 terlewat. Pakai jari untuk setiap loncatan.
- **Mengira urutan mengubah hasil.** Menganggap 5 × 7 berbeda dengan 7 × 5. Keduanya 35. Gambar barisnya kalau ragu.
- **Salah pada tabel 10.** 10 × 6 dijawab 16. Itu 10 + 6. Yang benar: 6 puluhan, yaitu 60.

## Ringkasan

- a × b artinya a kelompok, tiap kelompok berisi b.
- Hafalkan tabel 2, 3, 4, 5, 10 dengan hitung loncat.
- Pola: tabel 2 genap, tabel 5 berakhir 0 atau 5, tabel 10 berakhir 0, tabel 4 = dobel tabel 2.
- Sifat pertukaran: 3 × 4 = 4 × 3.
- Soal cerita: cari banyak kelompok dan isi tiap kelompok, lalu kalikan.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung $3 \\times 6$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "3 × 6 artinya?",
   "options": [
    "3 kelompok, tiap kelompok 6",
    "3 + 6"
   ],
   "answer": "3 kelompok, tiap kelompok 6",
   "hint": "Ingat keranjang.",
   "explain": "3 kelompok berisi 6.",
   "error": "tambah-bukan-kali"
  },
  {
   "kind": "number",
   "prompt": "Loncat 6 tiga kali, atau loncat 3 enam kali. Hasilnya?",
   "answer": "18",
   "hint": "3, 6, 9, 12, 15, ...",
   "explain": "3 × 6 = 18.",
   "error": "salah-hitung-loncat"
  }
 ],
 "conclusion": "Jadi 3 × 6 = 18."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $4 \\times 9$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Hitung 2 × 9 dulu.",
   "answer": "18",
   "hint": "9 + 9.",
   "explain": "2 × 9 = 18.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Gandakan: 18 + 18 = ?",
   "answer": "36",
   "hint": "4 kelompok = 2 kelompok + 2 kelompok.",
   "explain": "18 + 18 = 36.",
   "error": "salah-sesuaikan-dobel"
  }
 ],
 "conclusion": "Jadi 4 × 9 = 36."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung $10 \\times 8$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "10 × 8 sama dengan 8 × 10. Itu berapa puluhan?",
   "options": [
    "8 puluhan",
    "18 satuan",
    "1 puluhan"
   ],
   "answer": "8 puluhan",
   "hint": "Tabel 10: setiap kelompok berisi 10.",
   "explain": "8 × 10 = 8 puluhan.",
   "error": "salah-sifat-pertukaran"
  },
  {
   "kind": "number",
   "prompt": "10 × 8 = ?",
   "answer": "80",
   "hint": "8 puluhan ditulis dengan 0 di belakang.",
   "explain": "8 puluhan = 80.",
   "error": "salah-fakta-kali"
  }
 ],
 "conclusion": "Jadi 10 × 8 = 80."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Isi titik-titik: 5 × 7 = 7 × .... Berapa hasilnya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Isi titik-titiknya.",
   "answer": "5",
   "hint": "Sifat pertukaran: urutan ditukar.",
   "explain": "5 × 7 = 7 × 5.",
   "error": "salah-sifat-pertukaran"
  },
  {
   "kind": "number",
   "prompt": "Berapa hasilnya?",
   "answer": "35",
   "hint": "Tabel 5: 5, 10, 15, 20, 25, 30, ...",
   "explain": "7 × 5 = 35.",
   "error": "salah-fakta-kali"
  }
 ],
 "conclusion": "Jadi 5 × 7 = 7 × 5 = 35."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Di kelas ada 6 meja. Tiap meja punya 4 kaki. Berapa kaki meja semuanya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Kalimat matematikanya?",
   "options": [
    "6 × 4",
    "6 + 4",
    "4 − 6"
   ],
   "answer": "6 × 4",
   "hint": "6 kelompok, tiap kelompok 4.",
   "explain": "6 meja isi 4 kaki: 6 × 4.",
   "error": "tambah-bukan-kali"
  },
  {
   "kind": "number",
   "prompt": "6 × 4 = ?",
   "answer": "24",
   "hint": "6 × 2 = 12, lalu gandakan.",
   "explain": "12 + 12 = 24.",
   "error": "salah-fakta-kali",
   "suffix": "kaki"
  }
 ],
 "conclusion": "Ada 24 kaki meja."
}
```
