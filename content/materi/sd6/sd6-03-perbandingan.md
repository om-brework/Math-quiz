---
id: sd6-03-perbandingan
judul: Perbandingan (Rasio)
jenjang: sd6
moe: "Primary 6 · Number and Algebra · Ratio"
prasyarat: [sd3-06-pecahan-senilai, sd4-02-faktor-kelipatan, sd5-04-operasi-pecahan]
durasi_menit: 45
---

## Kenapa belajar ini?

Ibu membuat es sirup dengan 1 gelas sirup untuk setiap 4 gelas air. Kalau tamunya banyak, Ibu perlu tahu berapa sirup dan air yang dicampur supaya rasanya tetap sama. Perbandingan juga dipakai untuk membagi uang, membuat adonan kue, dan membaca resep.

## Analogi

Bayangkan kamu membuat **es sirup** dengan **gelas takar**.

Resepnya: **2 gelas sirup dan 5 gelas air**. Satu gelas takar kita sebut **1 unit**.

- Kalau resep dibuat 2 kali lipat, jadi 4 gelas sirup dan 10 gelas air. Rasanya tetap sama.
- Kalau seluruh campuran ada 14 gelas, satu "paket resep" berisi $2 + 5 = 7$ gelas. Jadi ada 2 paket.

Setiap unit nanti kita gambar sebagai **satu kotak** di model batang.

```anim
{"type": "batang", "title": "Resep es sirup 2 : 5", "bars": [{"label": "Sirup", "units": 2, "unitValue": "1 gelas"}, {"label": "Air", "units": 5, "unitValue": "1 gelas"}], "total": "7 gelas", "langkah": [{"say": "Sirup: 2 gelas takar, jadi 2 unit.", "bars": 1}, {"say": "Air: 5 gelas takar, jadi 5 unit.", "bars": 2}, {"say": "Satu paket resep berisi 2 + 5 = 7 gelas.", "bars": 2, "total": true}]}
```

## Konsep

### Notasi perbandingan

Perbandingan sirup dan air ditulis **2 : 5**, dibaca "2 banding 5".

- **Urutan penting.** Sirup : air = 2 : 5, tetapi air : sirup = 5 : 2.
- **Tidak memakai satuan.** Kita tulis 2 : 5, bukan 2 gelas : 5 gelas.
- **Satuan harus sama dulu.** 50 cm : 2 m diubah menjadi 50 cm : 200 cm = 50 : 200.

Perbandingan bisa berisi tiga besaran: **a : b : c**. Contoh: tepung : gula : mentega = 4 : 2 : 1.

### Perbandingan senilai dan bentuk paling sederhana

**Perbandingan senilai** didapat dengan mengalikan atau membagi semua suku dengan bilangan yang sama.

$$2 : 5 = 4 : 10 = 6 : 15$$

Ini seperti resep es sirup yang dilipatgandakan. Rasanya tidak berubah.

```visual
{"type": "table", "head": ["Paket resep", "Sirup", "Air", "Perbandingan"], "rows": [["1", "2", "5", "2 : 5"], ["2", "4", "10", "4 : 10"], ["3", "6", "15", "6 : 15"]], "caption": "Semua suku dikali bilangan yang sama: perbandingannya senilai."}
```

**Bentuk paling sederhana**: semua suku dibagi dengan **FPB**-nya (faktor persekutuan terbesar) sampai tidak bisa dibagi lagi.

- $18 : 24$. FPB dari 18 dan 24 adalah 6. Jadi $18 : 24 = 3 : 4$.
- $12 : 18 : 30$. FPB ketiganya adalah 6. Jadi $12 : 18 : 30 = 2 : 3 : 5$.

### Mencari suku yang hilang

$3 : 5 = 12 : \ldots$

Dari 3 menjadi 12, dikali 4. Maka 5 juga dikali 4: $5 \times 4 = 20$. Jadi $3 : 5 = 12 : 20$.

### Hubungan perbandingan dan pecahan

Jika sirup : air = 2 : 5, gambarnya:

```visual
{"type": "barModel", "bars": [{"label": "Sirup", "units": 2}, {"label": "Air", "units": 5}], "total": "7 unit", "caption": "Sirup 2 unit, air 5 unit, seluruh campuran 7 unit."}
```

- Sirup adalah $\frac{2}{5}$ dari air.
- Air adalah $\frac{5}{2}$ dari sirup.
- Seluruh campuran = $2 + 5 = 7$ unit. Sirup adalah $\frac{2}{7}$ dari seluruh campuran.

### Membagi jumlah menurut perbandingan

Langkah tetapnya:

1. Jumlahkan unit semua bagian.
2. Cari nilai 1 unit = jumlah total ÷ jumlah unit.
3. Kalikan nilai 1 unit dengan unit tiap bagian.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Bentuk paling sederhana

```soal
{
 "title": "Contoh 1",
 "text": "Di kebun Pak Wayan ada 45 pohon pisang dan 60 pohon pepaya. Tulis perbandingan pohon pisang dan pepaya dalam bentuk paling sederhana.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tulis sesuai urutan. Pisang : pepaya = ...",
   "options": [
    "45 : 60",
    "60 : 45",
    "45 : 105"
   ],
   "answer": "45 : 60",
   "hint": "Pisang disebut lebih dulu.",
   "explain": "Pisang : pepaya = 45 : 60.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Cari FPB dari 45 dan 60.",
   "answer": "15",
   "hint": "Daftar faktor 45: 1, 3, 5, 9, 15, 45. Mana yang terbesar yang juga membagi 60?",
   "explain": "FPB dari 45 dan 60 adalah 15.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Bagi suku pertama dengan FPB. 45 ÷ 15 = ?",
   "answer": "3",
   "hint": "Hitung 15, 30, 45.",
   "explain": "45 ÷ 15 = 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Bagi suku kedua dengan FPB. 60 ÷ 15 = ?",
   "answer": "4",
   "hint": "Hitung 15, 30, 45, 60.",
   "explain": "60 ÷ 15 = 4. Hasilnya 3 : 4.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: apakah 3 : 4 sudah paling sederhana?",
   "options": [
    "Ya, 3 dan 4 hanya punya faktor sekutu 1",
    "Belum, masih bisa dibagi 2"
   ],
   "answer": "Ya, 3 dan 4 hanya punya faktor sekutu 1",
   "hint": "Adakah bilangan selain 1 yang membagi 3 dan 4?",
   "explain": "3 dan 4 hanya habis dibagi 1 bersama-sama, jadi sudah paling sederhana.",
   "error": "pecahan-belum-sederhana"
  }
 ],
 "conclusion": "Jadi pisang : pepaya = 3 : 4."
}
```

### Contoh 2: Mencari suku yang hilang

```soal
{
 "title": "Contoh 2",
 "text": "Resep es sirup memakai sirup dan air dengan perbandingan 2 : 5. Siti memakai 8 gelas sirup. Berapa gelas air yang ia perlukan?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tulis perbandingan senilai.",
   "options": [
    "2 : 5 = 8 : ...",
    "2 : 5 = ... : 8",
    "5 : 2 = 8 : ..."
   ],
   "answer": "2 : 5 = 8 : ...",
   "hint": "8 gelas itu sirup. Sirup ada di suku pertama.",
   "explain": "Sirup di depan: 2 : 5 = 8 : ...",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Dari 2 gelas menjadi 8 gelas, resep dikali berapa?",
   "answer": "4",
   "hint": "8 ÷ 2.",
   "explain": "Resep dikali 4.",
   "error": "salah-pengali-senilai"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Kalikan suku air dengan pengali yang sama.",
   "answer": "20",
   "hint": "5 × 4.",
   "explain": "Air = 5 × 4 = 20 gelas.",
   "error": "senilai-ditambah",
   "suffix": "gelas"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: 8 : 20 disederhanakan menjadi ...",
   "options": [
    "2 : 5",
    "4 : 10",
    "8 : 20"
   ],
   "answer": "2 : 5",
   "hint": "Bagi keduanya dengan FPB 4.",
   "explain": "8 : 20 = 2 : 5, sama dengan resep. Benar.",
   "error": "pecahan-belum-sederhana"
  }
 ],
 "conclusion": "Jadi Siti memerlukan 20 gelas air."
}
```

### Contoh 3: Membagi uang menurut perbandingan

```soal
{
 "title": "Contoh 3",
 "text": "Nenek memberi uang Rp72.000 kepada Budi dan Siti dengan perbandingan 4 : 5. Berapa uang masing-masing?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Jumlahkan unit Budi dan Siti.",
   "answer": "9",
   "hint": "Budi 4 unit, Siti 5 unit.",
   "explain": "4 + 5 = 9 unit = Rp72.000.",
   "error": "salah-langkah-materi",
   "suffix": "unit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Cari nilai 1 unit.",
   "answer": "8.000",
   "hint": "Bagi total uang dengan jumlah unit.",
   "explain": "72.000 ÷ 9 = 8.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Uang Budi (4 unit) = ?",
   "answer": "32.000",
   "hint": "4 × nilai 1 unit.",
   "explain": "4 × 8.000 = Rp32.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Uang Siti (5 unit) = ?",
   "answer": "40.000",
   "hint": "5 × nilai 1 unit.",
   "explain": "5 × 8.000 = Rp40.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: uang Budi + uang Siti = ?",
   "answer": "72.000",
   "hint": "32.000 + 40.000.",
   "explain": "72.000, sama dengan uang dari Nenek. Benar.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Jadi Budi mendapat Rp32.000 dan Siti Rp40.000.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Budi",
    "units": 4,
    "unitValue": "u"
   },
   {
    "label": "Siti",
    "units": 5,
    "unitValue": "u"
   }
  ],
  "total": "Rp72.000"
 }
}
```

### Contoh 4: Soal cerita tiga besaran dengan selisih

```soal
{
 "title": "Contoh 4",
 "text": "Perbandingan kelereng Made, Putu, dan Ketut adalah 2 : 3 : 5. Kelereng Ketut 36 butir lebih banyak daripada kelereng Made. Berapa jumlah kelereng mereka bertiga?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Ketut 5 unit, Made 2 unit. Selisihnya berapa unit?",
   "answer": "3",
   "hint": "5 − 2.",
   "explain": "Selisihnya 3 unit, dan 3 unit = 36 butir.",
   "error": "selisih-dijumlah",
   "suffix": "unit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Cari nilai 1 unit.",
   "answer": "12",
   "hint": "36 dibagi selisih unit.",
   "explain": "36 ÷ 3 = 12 butir.",
   "error": "salah-langkah-materi",
   "suffix": "butir"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Berapa total unit ketiganya?",
   "answer": "10",
   "hint": "2 + 3 + 5.",
   "explain": "Total 10 unit.",
   "error": "salah-langkah-materi",
   "suffix": "unit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Jumlah kelereng mereka bertiga = ?",
   "answer": "120",
   "hint": "Total unit × nilai 1 unit.",
   "explain": "10 × 12 = 120 butir.",
   "error": "salah-langkah-materi",
   "suffix": "butir"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: Ketut (5 unit) dikurangi Made (2 unit) = ? butir",
   "answer": "36",
   "hint": "Ketut 60, Made 24.",
   "explain": "60 − 24 = 36. Sesuai soal. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "butir"
  }
 ],
 "conclusion": "Jadi jumlah kelereng mereka 120 butir.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Made",
    "units": 2,
    "unitValue": "u"
   },
   {
    "label": "Putu",
    "units": 3,
    "unitValue": "u"
   },
   {
    "label": "Ketut",
    "units": 5,
    "unitValue": "u"
   }
  ]
 }
}
```

## Kesalahan yang sering terjadi

- **Urutan tertukar.** Soal menanya "pepaya : pisang", tetapi menjawab 3 : 4. Benar: 4 : 3. Selalu tulis sesuai urutan nama di soal.
- **Satuan tidak disamakan.** Menulis 50 cm : 2 m = 50 : 2 = 25 : 1. Salah. Ubah dulu: 50 cm : 200 cm = 1 : 4.
- **Membagi total dengan salah satu suku saja.** Pada Contoh 3, menghitung $72.000 \div 4$ untuk Budi. Total harus dibagi jumlah semua unit, yaitu 9.
- **Selisih dianggap total.** Pada Contoh 4, menganggap 36 sebagai 10 unit. Padahal 36 adalah selisih, yaitu 3 unit. Tandai di model batang bagian mana yang diketahui.
- **Pecahan yang salah.** Dari Budi : Siti = 4 : 5, menyimpulkan uang Budi $\frac{4}{5}$ dari total. Salah. Budi $\frac{4}{5}$ dari uang Siti, tetapi $\frac{4}{9}$ dari total.

## Ringkasan

- Perbandingan $a : b$ atau $a : b : c$ membandingkan besaran dengan satuan yang sama. Urutan penting.
- Kalikan atau bagi semua suku dengan bilangan yang sama untuk mendapat perbandingan senilai.
- Bentuk paling sederhana: bagi semua suku dengan FPB.
- Jika $A : B = a : b$, maka $A = \frac{a}{b}$ dari $B$, dan $A = \frac{a}{a+b}$ dari total.
- Soal cerita: gambar model batang, cari nilai 1 unit, lalu kalikan.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Sederhanakan 45 : 60 : 75.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Cari FPB dari 45, 60, dan 75.",
   "answer": "15",
   "hint": "Bilangan terbesar yang membagi ketiganya. Coba 15.",
   "explain": "FPB-nya 15.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Bagi semua suku dengan FPB. Hasilnya ...",
   "options": [
    "3 : 4 : 5",
    "9 : 12 : 15",
    "15 : 20 : 25"
   ],
   "answer": "3 : 4 : 5",
   "hint": "45 ÷ 15, 60 ÷ 15, 75 ÷ 15.",
   "explain": "45 : 60 : 75 = 3 : 4 : 5.",
   "error": "pecahan-belum-sederhana"
  }
 ],
 "conclusion": "Jadi 45 : 60 : 75 = 3 : 4 : 5."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Lengkapi: $2 : 7 = \\ldots : 35$",
 "steps": [
  {
   "kind": "number",
   "prompt": "Dari 7 menjadi 35, dikali berapa?",
   "answer": "5",
   "hint": "35 ÷ 7.",
   "explain": "Dikali 5.",
   "error": "salah-pengali-senilai"
  },
  {
   "kind": "number",
   "prompt": "Suku yang hilang = ?",
   "answer": "10",
   "hint": "Kalikan 2 dengan pengali yang sama.",
   "explain": "2 × 5 = 10.",
   "error": "senilai-ditambah"
  }
 ],
 "conclusion": "Jadi 2 : 7 = 10 : 35."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Uang Rp150.000 dibagi kepada Andi dan Rina dengan perbandingan 2 : 3. Berapa uang Rina?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa jumlah unitnya?",
   "answer": "5",
   "hint": "2 + 3.",
   "explain": "5 unit = Rp150.000.",
   "error": "salah-langkah-materi",
   "suffix": "unit"
  },
  {
   "kind": "number",
   "prompt": "Berapa nilai 1 unit?",
   "answer": "30.000",
   "hint": "150.000 ÷ 5.",
   "explain": "1 unit = Rp30.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Berapa uang Rina?",
   "answer": "90.000",
   "hint": "Rina 3 unit.",
   "explain": "3 × 30.000 = Rp90.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Jadi uang Rina Rp90.000."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Perbandingan tepung dan gula adalah 3 : 5.",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Tepung adalah pecahan berapa dari gula?",
   "answer": {
    "num": 3,
    "den": 5
   },
   "hint": "Tepung dibandingkan dengan gula saja.",
   "explain": "Tepung $= \\frac{3}{5}$ dari gula.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Seluruh campuran ada berapa unit?",
   "answer": "8",
   "hint": "3 + 5.",
   "explain": "Total 8 unit.",
   "error": "salah-langkah-materi",
   "suffix": "unit"
  },
  {
   "kind": "fraction",
   "prompt": "Tepung adalah pecahan berapa dari seluruh campuran?",
   "answer": {
    "num": 3,
    "den": 8
   },
   "hint": "Tepung 3 unit dari total unit.",
   "explain": "Tepung $= \\frac{3}{8}$ dari seluruh campuran.",
   "error": "salah-langkah-materi",
   "simplest": true
  }
 ],
 "conclusion": "Jadi tepung $\\frac{3}{5}$ dari gula dan $\\frac{3}{8}$ dari seluruh campuran.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Tepung",
    "units": 3
   },
   {
    "label": "Gula",
    "units": 5
   }
  ]
 }
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Perbandingan uang Dewi dan Fajar adalah 5 : 2. Uang Dewi Rp24.000 lebih banyak daripada uang Fajar. Berapa jumlah uang mereka berdua?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Selisih uang mereka berapa unit?",
   "answer": "3",
   "hint": "5 − 2.",
   "explain": "3 unit = Rp24.000.",
   "error": "selisih-dijumlah",
   "suffix": "unit"
  },
  {
   "kind": "number",
   "prompt": "Berapa nilai 1 unit?",
   "answer": "8.000",
   "hint": "24.000 ÷ 3.",
   "explain": "1 unit = Rp8.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Berapa jumlah uang mereka berdua?",
   "answer": "56.000",
   "hint": "Total 5 + 2 = 7 unit.",
   "explain": "7 × 8.000 = Rp56.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Jadi jumlah uang mereka Rp56.000."
}
```
