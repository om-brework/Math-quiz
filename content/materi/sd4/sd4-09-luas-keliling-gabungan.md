---
id: sd4-09-luas-keliling-gabungan
judul: Luas dan Keliling Bangun Gabungan
jenjang: sd4
moe: "Primary 4 · Measurement and Geometry · Area and Perimeter"
prasyarat: [sd3-11-luas-keliling]
durasi_menit: 35
---

## Kenapa belajar ini?

Pak Wayan ingin menanam rumput di taman dan memasang pagar di sekelilingnya. Berapa meter persegi rumput yang dibeli? Berapa meter pagarnya? Bentuk taman atau ruangan sering bukan persegi panjang biasa, melainkan gabungan beberapa bangun.

## Analogi

Bayangkan sebuah **lantai** yang akan dipasang **ubin** dan **pagar**.

- **Luas** adalah banyak **ubin persegi** (1 cm × 1 cm atau 1 m × 1 m) yang menutupi seluruh lantai. Satuannya cm² atau m².
- **Keliling** adalah panjang **pagar** yang mengelilingi lantai, dari satu titik berjalan menyusuri tepi sampai kembali lagi. Satuannya cm atau m.

```visual
{"type": "grid", "width": 5, "height": 3, "showDims": true, "unit": "cm", "caption": "Lantai 5 cm × 3 cm: ubin di dalam (luas), garis tebal di tepi (keliling)"}
```

Pagar hanya ada di **tepi luar**. Ubin menutupi **seluruh bagian dalam**.

## Konsep

### Rumus yang sudah kamu kenal

Persegi panjang dengan panjang $p$ dan lebar $l$:

$$\text{Luas} = p \times l \qquad \text{Keliling} = 2 \times (p + l)$$

Persegi dengan sisi $s$:

$$\text{Luas} = s \times s \qquad \text{Keliling} = 4 \times s$$

### Mencari sisi dari luas

Kalau luas dan satu sisi persegi panjang diketahui, pakai pembagian:

$$l = \text{Luas} \div p$$

Untuk persegi, cari bilangan yang **dikali dirinya sendiri** sama dengan luasnya. Misalnya luas 64 cm², karena $8 \times 8 = 64$, sisinya 8 cm.

### Mencari sisi dari keliling

Pada persegi panjang, **setengah keliling** sama dengan panjang + lebar. Ini seperti berjalan dari satu sudut ke sudut seberangnya: lewat satu panjang dan satu lebar.

$$l = (\text{Keliling} \div 2) - p$$

Untuk persegi, keempat sisi sama:

$$s = \text{Keliling} \div 4$$

### Bangun gabungan

**Luas**: potong bangun menjadi beberapa persegi atau persegi panjang. Hitung luas setiap bagian, lalu jumlahkan. Cara lain: hitung persegi panjang besar, lalu kurangi bagian yang hilang.

```visual
{"type": "grid", "width": 7, "height": 6, "shade": [{"x": 0, "y": 0, "w": 3, "h": 4}, {"x": 0, "y": 4, "w": 7, "h": 2}], "showDims": true, "unit": "cm", "caption": "Bangun L dipotong menjadi 3 × 4 dan 7 × 2: luas = 12 + 14 = 26 cm²"}
```

**Keliling**: jumlahkan **semua sisi luar**. Kalau ada sisi yang panjangnya belum tertulis, cari dulu dari sisi yang sejajar dengannya. Garis potong di dalam bangun **tidak** dihitung, karena pagar hanya di tepi.

```anim
{"type": "bangun", "title": "Berjalan menyusuri pagar bangun L", "titik": {"P": [0, 0], "Q": [7, 0], "R": [7, 2], "S": [3, 2], "T": [3, 6], "U": [0, 6]}, "sisi": [["P", "Q", "7 cm"], ["Q", "R", "2 cm"], ["R", "S", "?"], ["S", "T", "?"], ["T", "U", "3 cm"], ["U", "P", "6 cm"]], "langkah": [{"say": "Bangun L ini punya 6 sisi. Kita berjalan menyusuri pagarnya dari P.", "sisi": 6}, {"say": "PQ = 7 cm.", "sorot": ["PQ"]}, {"say": "QR = 2 cm.", "sorot": ["QR"]}, {"say": "RS belum tertulis: 7 − 3 = 4 cm.", "sorot": ["RS", "TU", "PQ"]}, {"say": "ST belum tertulis: 6 − 2 = 4 cm.", "sorot": ["ST", "UP", "QR"]}, {"say": "TU = 3 cm, lalu UP = 6 cm, kembali ke P.", "sorot": ["TU", "UP"]}, {"say": "Keliling = 7 + 2 + 4 + 4 + 3 + 6 = 26 cm. Garis potong di dalam tidak ikut.", "sorot": ["PQ", "QR", "RS", "ST", "TU", "UP"]}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Lebar dari luas

```soal
{
 "title": "Kerjakan bersama",
 "text": "Luas sebuah persegi panjang 48 cm². Panjangnya 8 cm. Berapa lebarnya? Berapa kelilingnya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tulis yang diketahui. 48 ubin disusun 8 ubin per baris. Hitungan apa untuk mencari banyak baris?",
   "options": [
    "48 ÷ 8",
    "48 − 8",
    "48 × 8"
   ],
   "answer": "48 ÷ 8",
   "hint": "Setiap baris berisi 8 ubin.",
   "explain": "Banyak baris = 48 ÷ 8.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Cari lebar. 48 ÷ 8 = ?",
   "answer": "6",
   "hint": "8 × berapa = 48?",
   "explain": "Ada 6 baris, jadi lebar 6 cm.",
   "error": "salah-fakta-bagi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Cari keliling. Panjang + lebar = 8 + 6 = ?",
   "answer": "14",
   "hint": "Setengah keliling adalah panjang + lebar.",
   "explain": "8 + 6 = 14 cm.",
   "error": "salah-fakta-tambah",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Keliling = 2 × 14 = ?",
   "answer": "28",
   "hint": "Keliling memuat dua panjang dan dua lebar.",
   "explain": "2 × 14 = 28 cm.",
   "error": "keliling-dua-sisi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 8 × 6 = ?",
   "answer": "48",
   "hint": "Kalikan panjang dan lebar.",
   "explain": "8 × 6 = 48 cm², sama dengan luas yang diketahui.",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Lebar 6 cm, keliling 28 cm.",
 "visual": {
  "type": "rect",
  "width": 8,
  "height": 6,
  "unit": "cm",
  "hideHeight": true
 }
}
```

### Contoh 2: Lebar dari keliling

```soal
{
 "title": "Kerjakan bersama",
 "text": "Keliling sebuah persegi panjang 30 cm. Panjangnya 9 cm. Berapa lebar dan luasnya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Cari setengah keliling. 30 ÷ 2 = ?",
   "answer": "15",
   "hint": "Keliling = panjang + lebar + panjang + lebar.",
   "explain": "15 cm = panjang + lebar.",
   "error": "keliling-dua-sisi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Cari lebar. 15 − 9 = ?",
   "answer": "6",
   "hint": "Setengah keliling dikurangi panjang.",
   "explain": "Lebar 6 cm.",
   "error": "salah-fakta-kurang",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Cari luas. 9 × 6 = ?",
   "answer": "54",
   "hint": "Luas = panjang × lebar.",
   "explain": "Luas 54 cm².",
   "error": "keliling-luas-tertukar",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 9 + 6 + 9 + 6 = ?",
   "answer": "30",
   "hint": "Jumlahkan keempat sisi.",
   "explain": "30 cm, sama dengan keliling yang diketahui.",
   "error": "keliling-dua-sisi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Lebar 6 cm, luas 54 cm².",
 "visual": {
  "type": "rect",
  "width": 9,
  "height": 6,
  "unit": "cm",
  "hideHeight": true
 }
}
```

### Contoh 3: Sisi persegi dari luas

```soal
{
 "title": "Kerjakan bersama",
 "text": "Luas sebuah persegi 64 cm². Berapa panjang sisinya dan kelilingnya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Bagaimana mencari sisi persegi dari luasnya?",
   "options": [
    "Cari bilangan yang dikali dirinya sendiri = 64",
    "64 ÷ 4",
    "64 ÷ 2"
   ],
   "answer": "Cari bilangan yang dikali dirinya sendiri = 64",
   "hint": "Luas persegi = sisi × sisi.",
   "explain": "Banyak ubin per baris sama dengan banyak baris, jadi sisi × sisi = 64.",
   "error": "keliling-luas-tertukar"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 7 × 7 = 49 masih kurang. Berapa sisinya?",
   "answer": "8",
   "hint": "Coba bilangan berikutnya.",
   "explain": "8 × 8 = 64. Sisi 8 cm.",
   "error": "salah-fakta-kali",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Cari keliling. 4 × 8 = ?",
   "answer": "32",
   "hint": "Persegi punya 4 sisi sama panjang.",
   "explain": "Keliling 32 cm.",
   "error": "keliling-dua-sisi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 8 × 8 = ?",
   "answer": "64",
   "hint": "Kalikan sisi dengan sisi.",
   "explain": "64 cm², cocok.",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Sisi 8 cm, keliling 32 cm.",
 "visual": {
  "type": "rect",
  "width": 8,
  "height": 8,
  "unit": "cm",
  "hideWidth": true,
  "hideHeight": true
 }
}
```

### Contoh 4: Bangun gabungan bentuk L

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung keliling dan luas bangun L ini. Semua sudutnya siku-siku. Bagian atas (B) lebarnya 4 cm dan tingginya 5 cm. Bagian bawah (A) panjangnya 10 cm dan tingginya 3 cm. Sisi kiri 8 cm.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Cari sisi datar di tengah yang belum tertulis. 10 − 4 = ?",
   "answer": "6",
   "hint": "Sisi atas B dan sisi datar tengah sejajar dengan alas 10 cm.",
   "explain": "Sisi datar tengah 6 cm.",
   "error": "lupa-sisi-bangun",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Cek sisi tegak: 5 + 3 = ?",
   "answer": "8",
   "hint": "Sisi tegak kanan B ditambah sisi tegak kanan A.",
   "explain": "8 cm, sama dengan sisi kiri.",
   "error": "lupa-sisi-bangun",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Keliling. 10 + 3 + 6 + 5 + 4 + 8 = ?",
   "answer": "36",
   "hint": "Ada 6 sisi luar. Beri tanda setiap sisi yang sudah dijumlah.",
   "explain": "Keliling 36 cm.",
   "error": "lupa-sisi-bangun",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Luas bagian A = 10 × 3 = ?",
   "answer": "30",
   "hint": "Panjang × lebar.",
   "explain": "30 cm².",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Luas bagian B = 4 × 5 = ?",
   "answer": "20",
   "hint": "Panjang × lebar.",
   "explain": "20 cm².",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Luas seluruhnya = 30 + 20 = ?",
   "answer": "50",
   "hint": "Jumlahkan luas kedua bagian.",
   "explain": "Luas 50 cm².",
   "error": "salah-satuan-luas",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Cek dengan cara lain: 10 × 8 − 6 × 5 = ?",
   "answer": "50",
   "hint": "Persegi panjang besar 80 cm², bagian kosong 30 cm².",
   "explain": "80 − 30 = 50 cm². Sama.",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Keliling 36 cm, luas 50 cm².",
 "visual": {
  "type": "grid",
  "width": 10,
  "height": 8,
  "shade": [
   {
    "x": 0,
    "y": 0,
    "w": 4,
    "h": 5
   },
   {
    "x": 0,
    "y": 5,
    "w": 10,
    "h": 3
   }
  ],
  "showDims": true,
  "unit": "cm"
 }
}
```

### Contoh 5: Soal cerita

```soal
{
 "title": "Kerjakan bersama",
 "text": "Taman Pak Wayan berbentuk persegi panjang, 12 m × 9 m. Di dalamnya ada kolam persegi dengan sisi 3 m. Seluruh taman selain kolam ditanami rumput, dan taman dipagari di sekeliling tepinya. (a) Berapa m² rumput? (b) Berapa meter pagar?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Rumput dan pagar masing-masing dihitung dengan apa?",
   "options": [
    "Rumput: luas. Pagar: keliling",
    "Rumput: keliling. Pagar: luas",
    "Keduanya luas"
   ],
   "answer": "Rumput: luas. Pagar: keliling",
   "hint": "Rumput menutupi bagian dalam, pagar ada di tepi.",
   "explain": "Rumput seperti ubin (luas), pagar di tepi (keliling).",
   "error": "keliling-luas-tertukar"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Luas taman = 12 × 9 = ?",
   "answer": "108",
   "hint": "12 × 9 = 12 × 10 − 12.",
   "explain": "108 m².",
   "error": "salah-fakta-kali",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Luas kolam = 3 × 3 = ?",
   "answer": "9",
   "hint": "Sisi × sisi.",
   "explain": "9 m².",
   "error": "salah-fakta-kali",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Luas rumput = 108 − 9 = ?",
   "answer": "99",
   "hint": "Luas taman dikurangi kolam.",
   "explain": "99 m² rumput.",
   "error": "salah-fakta-kurang",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Keliling taman = 2 × (12 + 9) = ?",
   "answer": "42",
   "hint": "Kolam ada di dalam, tidak memengaruhi pagar.",
   "explain": "42 m pagar.",
   "error": "keliling-dua-sisi",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: rumput + kolam = 99 + 9 = ?",
   "answer": "108",
   "hint": "Harus sama dengan luas taman.",
   "explain": "108 m². Cocok.",
   "error": "salah-fakta-tambah",
   "suffix": "m²"
  }
 ],
 "conclusion": "(a) 99 m² rumput. (b) 42 m pagar.",
 "visual": {
  "type": "grid",
  "width": 12,
  "height": 9,
  "shade": [
   {
    "x": 4,
    "y": 3,
    "w": 3,
    "h": 3
   }
  ]
 }
}
```

## Kesalahan yang sering terjadi

- **Tertukar luas dan keliling.** Menulis keliling dengan satuan cm². Luas dihitung dengan ubin (cm², m²). Keliling dihitung dengan pagar (cm, m).
- **Lupa membagi 2 pada keliling.** Pada Contoh 2, menghitung $30 - 9 = 21$ cm untuk lebar. Keliling memuat dua panjang dan dua lebar, jadi bagi 2 dulu.
- **Mencari sisi persegi dengan membagi 2 atau 4.** Menulis sisi persegi berluas 64 cm² adalah $64 \div 4 = 16$ cm. Itu cara untuk keliling. Untuk luas, cari bilangan yang dikali dirinya sendiri: $8 \times 8 = 64$.
- **Ada sisi yang terlewat.** Bangun L punya 6 sisi. Hitung sisinya sebelum menjumlah, dan beri tanda pada setiap sisi yang sudah dijumlah.
- **Menghitung garis potong dalam keliling.** Garis titik-titik di Contoh 4 ada di dalam bangun, bukan pagar. Jangan dijumlahkan.

## Ringkasan

- Luas persegi panjang $= p \times l$, keliling $= 2 \times (p + l)$.
- Luas persegi $= s \times s$, keliling $= 4 \times s$.
- Sisi dari luas: bagi luas dengan sisi lain. Untuk persegi, cari bilangan yang dikali dirinya sendiri.
- Sisi dari keliling: setengah keliling dikurangi sisi lain. Untuk persegi, keliling dibagi 4.
- Bangun gabungan: luas = jumlah luas bagian-bagiannya. Keliling = jumlah semua sisi luar saja.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Luas sebuah persegi panjang 54 cm² dan lebarnya 6 cm. Berapa panjangnya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Hitungan apa yang dipakai?",
   "options": [
    "54 ÷ 6",
    "54 − 6",
    "54 ÷ 2"
   ],
   "answer": "54 ÷ 6",
   "hint": "Luas = panjang × lebar.",
   "explain": "Panjang = luas ÷ lebar.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 54 ÷ 6 = ?",
   "answer": "9",
   "hint": "6 × berapa = 54?",
   "explain": "Panjang 9 cm. Cek: 9 × 6 = 54.",
   "error": "salah-fakta-bagi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Panjangnya 9 cm."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Keliling sebuah persegi panjang 40 cm dan panjangnya 12 cm. Berapa lebarnya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Setengah keliling = 40 ÷ 2 = ?",
   "answer": "20",
   "hint": "Setengah keliling = panjang + lebar.",
   "explain": "20 cm.",
   "error": "keliling-dua-sisi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Lebar = 20 − 12 = ?",
   "answer": "8",
   "hint": "Kurangi dengan panjang.",
   "explain": "Lebar 8 cm. Cek: 12 + 8 + 12 + 8 = 40.",
   "error": "keliling-dua-sisi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Lebarnya 8 cm."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Keliling sebuah persegi 28 cm. Berapa panjang sisi dan luasnya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Sisi = 28 ÷ 4 = ?",
   "answer": "7",
   "hint": "Persegi punya 4 sisi sama panjang.",
   "explain": "Sisi 7 cm.",
   "error": "salah-fakta-bagi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Luas = 7 × 7 = ?",
   "answer": "49",
   "hint": "Sisi × sisi.",
   "explain": "Luas 49 cm².",
   "error": "keliling-luas-tertukar",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Sisi 7 cm, luas 49 cm²."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Bangun ini terdiri dari persegi bersisi 5 cm di atas persegi panjang 8 cm × 3 cm. Sisi kirinya rata. Hitung luas dan kelilingnya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Luas persegi = 5 × 5 = ?",
   "answer": "25",
   "hint": "Sisi × sisi.",
   "explain": "25 cm².",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Luas persegi panjang = 8 × 3 = ?",
   "answer": "24",
   "hint": "Panjang × lebar.",
   "explain": "24 cm².",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Luas seluruhnya = ?",
   "answer": "49",
   "hint": "Jumlahkan kedua luas.",
   "explain": "25 + 24 = 49 cm².",
   "error": "salah-satuan-luas",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Sisi datar di tengah = 8 − 5 = ?",
   "answer": "3",
   "hint": "Sisi itu sejajar dengan alas 8 cm.",
   "explain": "3 cm. Sisi kiri = 5 + 3 = 8 cm.",
   "error": "lupa-sisi-bangun",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Keliling = 8 + 3 + 3 + 5 + 5 + 8 = ?",
   "answer": "32",
   "hint": "Ada 6 sisi luar.",
   "explain": "Keliling 32 cm.",
   "error": "lupa-sisi-bangun",
   "suffix": "cm"
  }
 ],
 "conclusion": "Luas 49 cm², keliling 32 cm.",
 "visual": {
  "type": "grid",
  "width": 8,
  "height": 8,
  "shade": [
   {
    "x": 0,
    "y": 0,
    "w": 5,
    "h": 5
   },
   {
    "x": 0,
    "y": 5,
    "w": 8,
    "h": 3
   }
  ],
  "showDims": true,
  "unit": "cm"
 }
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Selembar karton berukuran 20 cm × 15 cm. Dari salah satu sudutnya dipotong persegi bersisi 5 cm. Berapa luas dan keliling karton yang tersisa?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Luas karton utuh = 20 × 15 = ?",
   "answer": "300",
   "hint": "20 × 15 = 2 × 15 × 10.",
   "explain": "300 cm².",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Luas potongan = 5 × 5 = ?",
   "answer": "25",
   "hint": "Sisi × sisi.",
   "explain": "25 cm².",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Luas sisa = 300 − 25 = ?",
   "answer": "275",
   "hint": "Luas utuh dikurangi potongan.",
   "explain": "275 cm².",
   "error": "salah-fakta-kurang",
   "suffix": "cm²"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Bagaimana keliling setelah sudut dipotong?",
   "options": [
    "Tetap sama",
    "Berkurang 10 cm",
    "Bertambah 10 cm"
   ],
   "answer": "Tetap sama",
   "hint": "Dua sisi 5 cm yang hilang diganti dua sisi baru di lekukan.",
   "explain": "Dua sisi baru di lekukan juga 5 cm, jadi kelilingnya tetap.",
   "error": "lupa-sisi-bangun"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Keliling = 2 × (20 + 15) = ?",
   "answer": "70",
   "hint": "Hitung seperti persegi panjang utuh.",
   "explain": "Keliling 70 cm.",
   "error": "keliling-dua-sisi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Luas 275 cm², keliling 70 cm.",
 "visual": {
  "type": "grid",
  "width": 20,
  "height": 15,
  "shade": [
   {
    "x": 0,
    "y": 0,
    "w": 15,
    "h": 5
   },
   {
    "x": 0,
    "y": 5,
    "w": 20,
    "h": 10
   }
  ]
 }
}
```
