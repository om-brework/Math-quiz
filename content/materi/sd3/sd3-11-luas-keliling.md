---
id: sd3-11-luas-keliling
judul: Luas dan Keliling
jenjang: sd3
moe: "Primary 3 · Measurement and Geometry · Area and Perimeter"
prasyarat: [sd1-10-bangun-datar, sd3-03-perkalian-6-7-8-9]
durasi_menit: 40
---

## Kenapa belajar ini?

Pak Made ingin memagari kebunnya dan menanam rumput di dalamnya. Berapa meter pagar yang ia beli? Berapa banyak rumput yang ia perlukan? Pagar berkaitan dengan **keliling**, dan rumput berkaitan dengan **luas**. Keduanya sering tertukar, jadi mari kita pelajari bedanya.

## Analogi

Bayangkan **lantai kamar** yang akan diperbaiki.

- **Keliling** seperti **lis** (pinggiran kayu) yang dipasang di sepanjang tepi lantai, menempel di dinding. Kita mengukur panjang **tepinya** saja.
- **Luas** seperti **ubin** yang menutupi seluruh lantai. Kita menghitung **berapa ubin** yang dibutuhkan untuk menutup permukaannya.

Lihat lis dipasang satu per satu di tepi lantai:

```anim
{"type": "bangun", "titik": {"A": [0, 0], "B": [4, 0], "C": [4, 3], "D": [0, 3]}, "sisi": [["A", "B", "4\\text{ m}"], ["B", "C", "3\\text{ m}"], ["C", "D", "4\\text{ m}"], ["D", "A", "3\\text{ m}"]], "langkah": [{"say": "Lantai kamar 4 m × 3 m. Lis pertama di tepi bawah: 4 m.", "sisi": 1, "sorot": ["AB"]}, {"say": "Lis kedua di tepi kanan: 3 m.", "sisi": 2, "sorot": ["BC"]}, {"say": "Lis ketiga di tepi atas: 4 m.", "sisi": 3, "sorot": ["CD"]}, {"say": "Lis keempat di tepi kiri: 3 m. Panjang semua lis: 4 + 3 + 4 + 3 = 14 m. Itulah keliling.", "sisi": 4, "sorot": ["DA"]}], "title": "Lis di tepi lantai = keliling"}
```

Sekarang lantai yang sama ditutup ubin 1 m × 1 m:

```visual
{"type": "grid", "width": 4, "height": 3, "showDims": true, "unit": "m", "caption": "12 ubin menutupi lantai. Itulah luas: 12 m²"}
```

Lis berjalan di pinggir. Ubin mengisi bagian dalam. Ingat dua gambaran ini setiap kali menghitung.

## Konsep

### Keliling

**Keliling** adalah panjang seluruh tepi sebuah bangun. Cara mencarinya: **jumlahkan panjang semua sisi**. Satuannya satuan panjang, misalnya cm atau m.

- **Persegi panjang** punya 2 sisi panjang dan 2 sisi lebar. Keliling = panjang + lebar + panjang + lebar.
- **Persegi** punya 4 sisi yang sama panjang. Keliling = sisi + sisi + sisi + sisi = 4 × sisi.

```visual
{"type": "rect", "width": 8, "height": 5, "unit": "cm", "caption": "Keliling = 8 + 5 + 8 + 5"}
```

### Bangun bersudut siku

**Bangun bersudut siku** adalah bangun yang semua sudutnya siku-siku, seperti huruf L. Kelilingnya juga dicari dengan menjumlahkan semua sisi. Kadang ada sisi yang belum diketahui. Sisi itu bisa dicari dari sisi yang berhadapan:

- Semua sisi yang menghadap ke atas panjangnya sama dengan semua sisi yang menghadap ke bawah.
- Semua sisi kiri panjangnya sama dengan semua sisi kanan.

```anim
{"type": "bangun", "titik": {"A": [0, 0], "B": [10, 0], "C": [10, 3], "D": [4, 3], "E": [4, 8], "F": [0, 8]}, "sisi": [["A", "B", "10\\text{ cm}"], ["B", "C", "3\\text{ cm}"], ["C", "D", "?"], ["D", "E", "?"], ["E", "F", "4\\text{ cm}"], ["F", "A", "8\\text{ cm}"]], "langkah": [{"say": "Bangun L punya 6 sisi. Dua sisi belum diketahui.", "sisi": 6}, {"say": "Sisi bawah AB (10 cm) sama panjang dengan gabungan sisi atas EF dan CD.", "sorot": ["AB", "EF", "CD"]}, {"say": "Sisi kiri FA (8 cm) sama panjang dengan gabungan sisi kanan DE dan BC.", "sorot": ["FA", "DE", "BC"]}], "title": "Mencari sisi yang hilang"}
```

### Luas dan satuan persegi

**Luas** adalah besar permukaan di dalam bangun. Luas diukur dengan **persegi satuan**, seperti ubin.

- Persegi dengan sisi 1 cm punya luas **1 sentimeter persegi**, ditulis **1 cm²**.
- Persegi dengan sisi 1 m punya luas **1 meter persegi**, ditulis **1 m²**.

Persegi panjang di bawah ini ditutup ubin 1 cm × 1 cm:

```visual
{"type": "grid", "width": 4, "height": 3, "showDims": true, "unit": "cm"}
```

Ada 3 baris, tiap baris 4 ubin. Luasnya 3 × 4 = 12 cm². Kelilingnya 4 + 3 + 4 + 3 = 14 cm.

### Rumus luas

- **Luas persegi panjang = panjang × lebar**
- **Luas persegi = sisi × sisi**

Rumus ini sama dengan menghitung ubin baris demi baris.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Keliling dan luas persegi panjang

```soal
{
 "title": "Contoh 1",
 "text": "Sebuah persegi panjang punya panjang 8 cm dan lebar 5 cm. Hitung keliling dan luasnya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Keliling dicari dengan ...",
   "options": [
    "Menjumlahkan keempat sisi",
    "Mengalikan panjang × lebar"
   ],
   "answer": "Menjumlahkan keempat sisi",
   "hint": "Keliling seperti lis di tepi.",
   "explain": "Keliling = jumlah semua sisi. Panjang × lebar dipakai untuk luas.",
   "error": "keliling-luas-tertukar"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung keliling. 8 + 5 + 8 + 5 = ?",
   "answer": "26",
   "hint": "Ada empat sisi: dua panjang dan dua lebar.",
   "explain": "Kelilingnya 26 cm.",
   "error": "keliling-dua-sisi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung luas. 8 × 5 = ?",
   "answer": "40",
   "hint": "Ada 5 baris, tiap baris 8 ubin.",
   "explain": "Luasnya 40 cm².",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Satuan luasnya ...",
   "options": [
    "cm²",
    "cm"
   ],
   "answer": "cm²",
   "hint": "Luas dihitung dengan ubin persegi.",
   "explain": "Luas memakai cm², keliling memakai cm.",
   "error": "salah-satuan-luas"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: keliling = dua kali (panjang + lebar). 13 + 13 = ?",
   "answer": "26",
   "hint": "8 + 5 = 13.",
   "explain": "26, sama dengan Langkah 2. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "cm"
  }
 ],
 "conclusion": "Keliling 26 cm, luas 40 cm².",
 "visual": {
  "type": "rect",
  "width": 8,
  "height": 5,
  "unit": "cm"
 }
}
```

### Contoh 2: Persegi

```soal
{
 "title": "Contoh 2",
 "text": "Sebuah lapangan berbentuk persegi punya sisi 7 m. Hitung keliling dan luasnya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Ingat sifat persegi. Panjang sisi-sisinya ...",
   "options": [
    "Keempatnya 7 m",
    "Dua sisi 7 m, dua sisi lain belum tahu"
   ],
   "answer": "Keempatnya 7 m",
   "hint": "Persegi punya 4 sisi yang sama panjang.",
   "explain": "Keempat sisi persegi sama, yaitu 7 m.",
   "error": "tertukar-persegi-persegi-panjang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung keliling. 4 × 7 = ?",
   "answer": "28",
   "hint": "Ada 4 sisi yang sama.",
   "explain": "Kelilingnya 28 m.",
   "error": "salah-fakta-kali",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung luas. 7 × 7 = ?",
   "answer": "49",
   "hint": "Sisi × sisi. Hitung loncat 7 sebanyak 7 kali.",
   "explain": "Luasnya 49 m².",
   "error": "salah-fakta-kali",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 7 + 7 + 7 + 7 = ?",
   "answer": "28",
   "hint": "Jumlahkan keempat sisi.",
   "explain": "28 m, sama dengan 4 × 7. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "m"
  }
 ],
 "conclusion": "Keliling 28 m, luas 49 m².",
 "visual": {
  "type": "grid",
  "width": 7,
  "height": 7,
  "showDims": true,
  "unit": "m"
 }
}
```

### Contoh 3: Keliling bangun bersudut siku

```anim
{"type": "bangun", "titik": {"A": [0, 0], "B": [10, 0], "C": [10, 3], "D": [4, 3], "E": [4, 8], "F": [0, 8]}, "sisi": [["A", "B", "10\\text{ cm}"], ["B", "C", "3\\text{ cm}"], ["C", "D", "b"], ["D", "E", "a"], ["E", "F", "4\\text{ cm}"], ["F", "A", "8\\text{ cm}"]], "langkah": [{"say": "Bangun berbentuk L dengan 6 sisi. Sisi a dan b belum diketahui. (Gambar tidak sesuai ukuran sebenarnya.)", "sisi": 6}, {"say": "Sisi tegak: kiri 8 cm, kanan a dan 3 cm.", "sorot": ["FA", "DE", "BC"]}, {"say": "Sisi mendatar: bawah 10 cm, atas 4 cm dan b.", "sorot": ["AB", "EF", "CD"]}], "title": "Bangun L"}
```

```soal
{
 "title": "Contoh 3",
 "text": "Hitung keliling bangun berbentuk L pada gambar di atas.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Cari sisi a. Sisi kiri 8 cm = a + 3 cm. Jadi a = ?",
   "answer": "5",
   "hint": "a = 8 − 3.",
   "explain": "a = 5 cm.",
   "error": "lupa-sisi-bangun",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Cari sisi b. Sisi bawah 10 cm = 4 cm + b. Jadi b = ?",
   "answer": "6",
   "hint": "b = 10 − 4.",
   "explain": "b = 6 cm.",
   "error": "lupa-sisi-bangun",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Jumlahkan semua sisi. 10 + 8 + 4 + 5 + 6 + 3 = ?",
   "answer": "36",
   "hint": "Ada 6 sisi. Jangan lupa a dan b.",
   "explain": "Kelilingnya 36 cm.",
   "error": "lupa-sisi-bangun",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: jumlah sisi mendatar saja. 10 + 4 + 6 = ?",
   "answer": "20",
   "hint": "Sisi mendatar: bawah, atas, dan b.",
   "explain": "20. Sisi tegak 8 + 5 + 3 = 16. Total 20 + 16 = 36. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "cm"
  }
 ],
 "conclusion": "Keliling bangun L adalah 36 cm."
}
```

### Contoh 4: Soal cerita

```soal
{
 "title": "Contoh 4",
 "text": "Kebun Pak Made berbentuk persegi panjang dengan panjang 12 m dan lebar 9 m. Ia ingin memasang pagar di sekeliling kebun dan menanam rumput di seluruh kebun. a) Berapa meter pagar yang dibutuhkan? b) Berapa luas kebun yang ditanami rumput?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pagar dipasang di tepi kebun. Pagar berkaitan dengan ...",
   "options": [
    "Keliling",
    "Luas"
   ],
   "answer": "Keliling",
   "hint": "Pagar seperti lis.",
   "explain": "Pagar ada di tepi, jadi kita cari keliling.",
   "error": "keliling-luas-tertukar"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung keliling. 12 + 9 + 12 + 9 = ?",
   "answer": "42",
   "hint": "Jumlahkan keempat sisi.",
   "explain": "Pagarnya 42 m.",
   "error": "keliling-dua-sisi",
   "suffix": "m"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Rumput menutupi seluruh kebun. Rumput berkaitan dengan ...",
   "options": [
    "Luas",
    "Keliling"
   ],
   "answer": "Luas",
   "hint": "Rumput seperti ubin.",
   "explain": "Rumput menutupi permukaan, jadi kita cari luas.",
   "error": "keliling-luas-tertukar"
  },
  {
   "kind": "column",
   "op": "×",
   "a": 12,
   "b": 9,
   "prompt": "Langkah 4: Hitung luas dengan bersusun: 12 × 9.",
   "hint": "2 × 9 = 18, tulis 8 simpan 1.",
   "explain": "1 × 9 + 1 = 10. Hasilnya 108."
  },
  {
   "kind": "number",
   "prompt": "Jadi luas kebun ...",
   "answer": "108",
   "hint": "Baca hasil perkalian.",
   "explain": "Luasnya 108 m².",
   "error": "salah-fakta-kali",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: pecah 12 menjadi 10 dan 2. 90 + 18 = ?",
   "answer": "108",
   "hint": "10 × 9 = 90 dan 2 × 9 = 18.",
   "explain": "108. Benar.",
   "error": "salah-fakta-tambah"
  }
 ],
 "conclusion": "a) 42 m pagar, b) 108 m².",
 "visual": {
  "type": "rect",
  "width": 12,
  "height": 9,
  "unit": "m"
 }
}
```

## Kesalahan yang sering terjadi

- **Tertukar luas dan keliling.** Menjawab pagar kebun 108 m. Pagar ada di tepi, jadi pakai keliling (42 m). Ubin atau rumput di dalam, jadi pakai luas.
- **Hanya menjumlahkan dua sisi.** Menghitung keliling persegi panjang 8 cm × 5 cm sebagai 8 + 5 = 13 cm. Persegi panjang punya empat sisi: 26 cm.
- **Satuan salah.** Menulis luas 40 cm, atau keliling 26 cm². Keliling memakai cm atau m. Luas memakai cm² atau m².
- **Lupa sisi yang tidak tertulis.** Pada bangun L, hanya menjumlahkan sisi yang ada angkanya: 10 + 8 + 4 + 3 = 25 cm. Bangun L punya 6 sisi. Cari dulu sisi a dan b.

## Ringkasan

- Keliling = panjang seluruh tepi (seperti lis). Jumlahkan semua sisi. Satuan cm atau m.
- Keliling persegi = 4 × sisi.
- Luas = banyak persegi satuan yang menutupi bangun (seperti ubin). Satuan cm² atau m².
- Luas persegi panjang = panjang × lebar. Luas persegi = sisi × sisi.
- Pada bangun bersudut siku, cari sisi yang hilang dari sisi yang berhadapan.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung keliling persegi dengan sisi 9 cm.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Keliling persegi = ...",
   "options": [
    "4 × sisi",
    "sisi × sisi",
    "2 × sisi"
   ],
   "answer": "4 × sisi",
   "hint": "Persegi punya 4 sisi yang sama.",
   "explain": "Keliling persegi = 4 × sisi.",
   "error": "keliling-luas-tertukar"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 4 × 9 = ?",
   "answer": "36",
   "hint": "Hitung loncat 9 sebanyak 4 kali.",
   "explain": "Kelilingnya 36 cm.",
   "error": "salah-fakta-kali",
   "suffix": "cm"
  }
 ],
 "conclusion": "Kelilingnya 36 cm."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung luas persegi panjang dengan panjang 7 cm dan lebar 6 cm.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Luas persegi panjang = ...",
   "options": [
    "panjang × lebar",
    "panjang + lebar + panjang + lebar"
   ],
   "answer": "panjang × lebar",
   "hint": "Luas = banyak ubin.",
   "explain": "Luas = panjang × lebar.",
   "error": "keliling-luas-tertukar"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 7 × 6 = ?",
   "answer": "42",
   "hint": "6 baris, tiap baris 7 ubin.",
   "explain": "Luasnya 42 cm².",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Luasnya 42 cm².",
 "visual": {
  "type": "grid",
  "width": 7,
  "height": 6,
  "showDims": true,
  "unit": "cm"
 }
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung luas persegi dengan sisi 8 m.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Luas persegi = ...",
   "options": [
    "sisi × sisi",
    "4 × sisi"
   ],
   "answer": "sisi × sisi",
   "hint": "4 × sisi dipakai untuk keliling.",
   "explain": "Luas persegi = sisi × sisi.",
   "error": "keliling-luas-tertukar"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 8 × 8 = ?",
   "answer": "64",
   "hint": "Hitung loncat 8 sebanyak 8 kali.",
   "explain": "Luasnya 64 m².",
   "error": "salah-fakta-kali",
   "suffix": "m²"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Satuannya ...",
   "options": [
    "m²",
    "m"
   ],
   "answer": "m²",
   "hint": "Luas diukur dengan ubin persegi.",
   "explain": "64 m².",
   "error": "salah-satuan-luas"
  }
 ],
 "conclusion": "Luasnya 64 m²."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Sebuah bangun berbentuk L punya 6 sisi. Panjang sisinya berurutan: 6 cm, 2 cm, 4 cm, 3 cm, 2 cm, dan 5 cm. Berapa kelilingnya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Jumlahkan tiga sisi pertama. 6 + 2 + 4 = ?",
   "answer": "12",
   "hint": "Jumlahkan sedikit demi sedikit.",
   "explain": "12.",
   "error": "salah-fakta-tambah",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jumlahkan tiga sisi berikutnya. 3 + 2 + 5 = ?",
   "answer": "10",
   "hint": "Jangan lewatkan satu sisi pun.",
   "explain": "10.",
   "error": "lupa-sisi-bangun",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Kelilingnya 12 + 10 = ?",
   "answer": "22",
   "hint": "Gabungkan kedua hasil.",
   "explain": "Kelilingnya 22 cm.",
   "error": "salah-fakta-tambah",
   "suffix": "cm"
  }
 ],
 "conclusion": "Kelilingnya 22 cm."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Lantai kamar Siti berbentuk persegi panjang, 4 m × 3 m. Lantainya akan ditutup ubin berukuran 1 m × 1 m. Berapa ubin yang dibutuhkan? Berapa meter lis untuk tepi lantai?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Banyak ubin dicari dengan ...",
   "options": [
    "Luas",
    "Keliling"
   ],
   "answer": "Luas",
   "hint": "Ubin menutupi permukaan.",
   "explain": "Banyak ubin = luas lantai.",
   "error": "keliling-luas-tertukar"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Banyak ubin = 4 × 3 = ?",
   "answer": "12",
   "hint": "3 baris, tiap baris 4 ubin.",
   "explain": "12 ubin, karena luasnya 12 m².",
   "error": "salah-fakta-kali",
   "suffix": "ubin"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Panjang lis = 4 + 3 + 4 + 3 = ?",
   "answer": "14",
   "hint": "Lis ada di keempat tepi.",
   "explain": "14 m lis.",
   "error": "keliling-dua-sisi",
   "suffix": "m"
  }
 ],
 "conclusion": "12 ubin dan 14 m lis.",
 "visual": {
  "type": "grid",
  "width": 4,
  "height": 3,
  "showDims": true,
  "unit": "m"
 }
}
```
