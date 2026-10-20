---
id: sd2-08-uang
judul: Menghitung Uang
jenjang: sd2
moe: "Primary 2 · Measurement and Geometry · Money"
prasyarat: [sd1-07-uang, sd2-02-tambah-kurang-bersusun-1000]
durasi_menit: 30
---

## Kenapa belajar ini?

Kamu jajan di kantin, menabung di celengan, atau membantu Ibu berbelanja. Kamu perlu tahu berapa uangmu, uang siapa yang lebih banyak, dan berapa kembalian yang harus kamu terima.

## Analogi

Bayangkan uang seperti **tumpukan balok mainan**. Satu balok besar bisa ditukar dengan beberapa balok kecil, asal tingginya sama.

Satu lembar Rp10.000 seperti satu balok besar.

```visual
{"type": "money", "items": [10000], "caption": "1 lembar Rp10.000"}
```

Ia bisa ditukar dengan 2 lembar Rp5.000. Banyak lembarnya berubah, tetapi **nilainya tetap sama**.

```visual
{"type": "money", "items": [5000, 5000], "caption": "2 lembar Rp5.000, nilainya juga Rp10.000"}
```

Yang penting bukan banyak lembarnya, tetapi **nilai** tiap lembar.

## Konsep

### Uang Rupiah

- Koin: Rp100, Rp200, Rp500, Rp1.000.
- Uang kertas: Rp2.000, Rp5.000, Rp10.000, Rp20.000, Rp50.000, Rp100.000.

```visual
{"type": "money", "items": [100, 200, 500, 1000], "caption": "Koin Rp100, Rp200, Rp500, Rp1.000"}
```

### Menghitung kumpulan uang

1. Urutkan uang dari nilai **terbesar** ke terkecil.
2. Mulai dari yang terbesar, lalu hitung maju.

Contoh: Rp10.000, Rp5.000, Rp2.000.

```visual
{"type": "money", "items": [10000, 5000, 2000]}
```

```visual
{"type": "numberLine", "from": 0, "to": 20, "step": 1, "marks": [10, 15, 17], "jumps": [{"from": 0, "to": 10, "label": "+Rp10.000"}, {"from": 10, "to": 15, "label": "+Rp5.000"}, {"from": 15, "to": 17, "label": "+Rp2.000"}], "caption": "Hitung maju: Rp10.000, Rp15.000, Rp17.000 (angka dalam ribuan rupiah)"}
```

Jumlahnya Rp17.000.

### Membandingkan jumlah uang

Hitung dulu jumlah uang masing-masing. Lalu bandingkan nilainya, bukan banyak lembarnya.

### Menukar uang

Nilai sebelum dan sesudah ditukar harus sama.

```visual
{"type": "table", "head": ["Uang", "Sama nilainya dengan"], "rows": [["1 lembar Rp10.000", "2 lembar Rp5.000"], ["1 lembar Rp10.000", "5 lembar Rp2.000"], ["1 lembar Rp20.000", "2 lembar Rp10.000"], ["1 lembar Rp50.000", "5 lembar Rp10.000"], ["1 lembar Rp100.000", "2 lembar Rp50.000"], ["1 koin Rp1.000", "2 koin Rp500"]]}
```

### Kembalian

Kembalian adalah uang yang dibayar dikurangi harga.

**kembalian = uang yang dibayar − harga**

Cara mudah: **hitung maju** dari harga sampai ke uang yang dibayar. Seperti penjual di warung.

Harga Rp14.000, dibayar Rp20.000:

```visual
{"type": "numberLine", "from": 14, "to": 20, "step": 1, "marks": [14, 15, 20], "jumps": [{"from": 14, "to": 15, "label": "+Rp1.000"}, {"from": 15, "to": 20, "label": "+Rp5.000"}], "caption": "Hitung maju dari Rp14.000 ke Rp20.000 (angka dalam ribuan rupiah)"}
```

Kembaliannya Rp1.000 + Rp5.000 = Rp6.000.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menghitung kumpulan uang

```soal
{
 "title": "Contoh 1",
 "text": "Di celengan Putu ada 1 lembar Rp20.000, 2 lembar Rp5.000, 3 lembar Rp2.000, dan 1 koin Rp500. Berapa uang Putu?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Urutkan. Uang mana yang dihitung pertama?",
   "options": [
    "Rp20.000",
    "Rp5.000",
    "Rp500"
   ],
   "answer": "Rp20.000",
   "hint": "Mulai dari nilai yang paling besar.",
   "explain": "Rp20.000 nilainya paling besar, jadi dihitung pertama.",
   "error": "salah-hitung-maju-uang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung maju dua lembar Rp5.000. Rp20.000, Rp25.000, ...?",
   "answer": "30000",
   "hint": "Tambah Rp5.000 dua kali.",
   "explain": "Rp20.000 → Rp25.000 → Rp30.000.",
   "error": "salah-hitung-maju-uang",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung maju tiga lembar Rp2.000 dari Rp30.000.",
   "answer": "36000",
   "hint": "Rp32.000, Rp34.000, lalu satu lagi.",
   "explain": "Rp30.000 → Rp32.000 → Rp34.000 → Rp36.000.",
   "error": "salah-hitung-maju-uang",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Tambah koin Rp500. Rp36.000 + Rp500 = ?",
   "answer": "36500",
   "hint": "Lima ratus rupiah ditaruh di belakang ribuan.",
   "explain": "Rp36.000 + Rp500 = Rp36.500.",
   "error": "salah-hitung-maju-uang",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung per kelompok. Rp20.000 + Rp10.000 + Rp6.000 + Rp500 = ?",
   "answer": "36500",
   "hint": "Jumlahkan ribuannya dulu: 20 + 10 + 6.",
   "explain": "Hasilnya sama, Rp36.500. Benar.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Uang Putu Rp36.500.",
 "visual": {
  "type": "money",
  "items": [
   20000,
   5000,
   5000,
   2000,
   2000,
   2000,
   500
  ]
 }
}
```

### Contoh 2: Membandingkan tiga jumlah uang

```soal
{
 "title": "Contoh 2",
 "text": "Made punya 2 lembar Rp10.000 dan 1 lembar Rp2.000. Wayan punya 4 lembar Rp5.000. Putu punya 1 lembar Rp20.000 dan 3 koin Rp1.000. Siapa yang uangnya paling banyak? Siapa yang paling sedikit?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Hitung uang Made.",
   "answer": "22000",
   "hint": "Rp10.000 + Rp10.000, lalu tambah Rp2.000.",
   "explain": "Rp10.000 + Rp10.000 + Rp2.000 = Rp22.000.",
   "error": "salah-hitung-maju-uang",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung uang Wayan.",
   "answer": "20000",
   "hint": "Hitung loncat Rp5.000 empat kali.",
   "explain": "Rp5.000, Rp10.000, Rp15.000, Rp20.000.",
   "error": "hitung-lembar-bukan-nilai",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung uang Putu.",
   "answer": "23000",
   "hint": "Rp20.000 lalu tambah Rp1.000 tiga kali.",
   "explain": "Rp20.000 + Rp3.000 = Rp23.000.",
   "error": "salah-hitung-maju-uang",
   "prefix": "Rp"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Siapa yang uangnya paling banyak?",
   "options": [
    "Made",
    "Wayan",
    "Putu"
   ],
   "answer": "Putu",
   "hint": "Bandingkan nilainya: Rp22.000, Rp20.000, Rp23.000.",
   "explain": "Rp23.000 paling besar, jadi Putu.",
   "error": "hitung-lembar-bukan-nilai"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: Siapa yang paling sedikit, walaupun lembarnya paling banyak?",
   "options": [
    "Made",
    "Wayan",
    "Putu"
   ],
   "answer": "Wayan",
   "hint": "Lihat nilai, bukan banyak lembar.",
   "explain": "Wayan punya 4 lembar, tetapi nilainya hanya Rp20.000.",
   "error": "hitung-lembar-bukan-nilai"
  }
 ],
 "conclusion": "Paling banyak Putu (Rp23.000). Paling sedikit Wayan (Rp20.000)."
}
```

### Contoh 3: Menukar uang

```soal
{
 "title": "Contoh 3",
 "text": "Ayah menukar 1 lembar Rp20.000 dengan lembar Rp2.000. Berapa lembar Rp2.000 yang Ayah terima?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Pahami soal. Setelah ditukar, nilainya harus tetap berapa?",
   "answer": "20000",
   "hint": "Menukar tidak mengubah nilai.",
   "explain": "Nilainya tetap Rp20.000.",
   "error": "salah-tukar-uang",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung loncat Rp2.000 sampai Rp20.000. Ada berapa loncatan?",
   "answer": "10",
   "hint": "Rp2.000, Rp4.000, Rp6.000, ... sampai Rp20.000. Hitung loncatannya.",
   "explain": "Ada 10 loncatan, jadi 10 lembar.",
   "error": "salah-tukar-uang",
   "suffix": "lembar"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 10 × Rp2.000 = ?",
   "answer": "20000",
   "hint": "Sepuluh kali dua ribu.",
   "explain": "Rp20.000, sama dengan nilai awal. Benar.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Ayah menerima 10 lembar Rp2.000.",
 "visual": {
  "type": "money",
  "items": [
   20000
  ]
 }
}
```

### Contoh 4: Soal cerita kembalian

```soal
{
 "title": "Contoh 4",
 "text": "Siti membeli buku tulis seharga Rp8.500 dan pensil seharga Rp3.000. Ia membayar dengan 1 lembar Rp20.000. Berapa kembaliannya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Apa yang dicari dulu?",
   "options": [
    "Total harga",
    "Kembalian langsung dari Rp8.500",
    "Jumlah Rp20.000 + Rp8.500"
   ],
   "answer": "Total harga",
   "hint": "Siti membeli dua barang.",
   "explain": "Cari total harga dulu, baru kembalian.",
   "error": "kembalian-dijumlah"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung total harga. Rp8.500 + Rp3.000 = ?",
   "answer": "11500",
   "hint": "Tambah 3 ribu ke 8 ribu 500.",
   "explain": "Total harga Rp11.500.",
   "error": "salah-hitung-maju-uang",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung maju dari Rp11.500 ke Rp12.000. Berapa lompatannya?",
   "answer": "500",
   "hint": "Berapa lagi supaya 500 menjadi seribu penuh?",
   "explain": "Rp11.500 + Rp500 = Rp12.000.",
   "error": "salah-hitung-kembalian",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Dari Rp12.000 ke Rp15.000, lalu dari Rp15.000 ke Rp20.000. Berapa jumlah dua lompatan itu?",
   "answer": "8000",
   "hint": "Rp3.000 dan Rp5.000.",
   "explain": "Rp3.000 + Rp5.000 = Rp8.000.",
   "error": "salah-hitung-kembalian",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Jumlahkan semua lompatan: Rp500 + Rp8.000 = ?",
   "answer": "8500",
   "hint": "Gabungkan ratusan dan ribuan.",
   "explain": "Kembaliannya Rp8.500.",
   "error": "salah-hitung-kembalian",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: harga + kembalian. Rp11.500 + Rp8.500 = ?",
   "answer": "20000",
   "hint": "Harusnya sama dengan uang yang dibayar.",
   "explain": "Rp20.000, sama dengan uang yang dibayar. Benar.",
   "error": "kembalian-dijumlah",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Kembaliannya Rp8.500."
}
```

## Kesalahan yang sering terjadi

- **Menghitung lembar, bukan nilai.** Mengira 4 lembar Rp5.000 lebih banyak dari 1 lembar Rp20.000 + 3 koin Rp1.000. Hitung nilainya: Rp20.000 kurang dari Rp23.000.
- **Salah menukar.** Menganggap 1 lembar Rp10.000 = 5 lembar Rp5.000. Hitung: 5 lembar Rp5.000 = Rp25.000. Yang benar hanya 2 lembar.
- **Menjumlah saat mencari kembalian.** Harga Rp14.000 dibayar Rp20.000, lalu dijawab Rp34.000. Kembalian selalu lebih kecil dari uang yang dibayar. Kurangi, atau hitung maju.
- **Salah membaca nol.** Rp2.000 dibaca Rp20.000. Lihat gambar dan angka pada uang dengan teliti.
- **Mulai dari uang terkecil.** Menghitung koin Rp500 dulu membuat hitungan sulit. Mulai dari yang terbesar.

## Ringkasan

- Urutkan uang dari nilai terbesar, lalu hitung maju.
- Bandingkan jumlah uang dari nilainya, bukan banyak lembarnya.
- Menukar uang: banyak lembar berubah, nilai tetap sama.
- Kembalian = uang yang dibayar − harga. Bisa dicari dengan hitung maju.
- Cek kembalian: harga + kembalian = uang yang dibayar.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Berapa jumlah 3 lembar Rp10.000, 1 lembar Rp5.000, dan 2 koin Rp500?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Hitung tiga lembar Rp10.000.",
   "answer": "30000",
   "hint": "Rp10.000, Rp20.000, ...",
   "explain": "Rp30.000.",
   "error": "salah-hitung-maju-uang",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Tambah Rp5.000.",
   "answer": "35000",
   "hint": "Rp30.000 + Rp5.000.",
   "explain": "Rp35.000.",
   "error": "salah-hitung-maju-uang",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Tambah dua koin Rp500. Berapa jumlah semuanya?",
   "answer": "36000",
   "hint": "Dua koin Rp500 sama dengan Rp1.000.",
   "explain": "Rp35.000 + Rp1.000 = Rp36.000.",
   "error": "salah-hitung-maju-uang",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Jumlahnya Rp36.000.",
 "visual": {
  "type": "money",
  "items": [
   10000,
   10000,
   10000,
   5000,
   500,
   500
  ]
 }
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Mana yang lebih banyak: 4 lembar Rp5.000 atau 9 lembar Rp2.000?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa nilai 4 lembar Rp5.000?",
   "answer": "20000",
   "hint": "Hitung loncat Rp5.000 empat kali.",
   "explain": "Rp20.000.",
   "error": "hitung-lembar-bukan-nilai",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Berapa nilai 9 lembar Rp2.000?",
   "answer": "18000",
   "hint": "9 × Rp2.000.",
   "explain": "Rp18.000.",
   "error": "hitung-lembar-bukan-nilai",
   "prefix": "Rp"
  },
  {
   "kind": "choice",
   "prompt": "Mana yang lebih banyak?",
   "options": [
    "4 lembar Rp5.000",
    "9 lembar Rp2.000",
    "Sama banyak"
   ],
   "answer": "4 lembar Rp5.000",
   "hint": "Bandingkan Rp20.000 dan Rp18.000.",
   "explain": "Rp20.000 lebih banyak dari Rp18.000, walaupun lembarnya lebih sedikit.",
   "error": "hitung-lembar-bukan-nilai"
  }
 ],
 "conclusion": "4 lembar Rp5.000 lebih banyak."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "1 lembar Rp100.000 = ... lembar Rp20.000.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Hitung loncat Rp20.000 sampai Rp100.000. Berapa lembar?",
   "answer": "5",
   "hint": "Rp20.000, Rp40.000, Rp60.000, ...",
   "explain": "Ada 5 loncatan, jadi 5 lembar.",
   "error": "salah-tukar-uang",
   "suffix": "lembar"
  },
  {
   "kind": "number",
   "prompt": "Cek: 5 × Rp20.000 = ?",
   "answer": "100000",
   "hint": "Lima kali dua puluh ribu.",
   "explain": "Rp100.000, nilainya sama. Benar.",
   "error": "salah-tukar-uang",
   "prefix": "Rp"
  }
 ],
 "conclusion": "1 lembar Rp100.000 = 5 lembar Rp20.000."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Budi membeli tas seharga Rp36.000. Ia membayar dengan Rp50.000. Berapa kembaliannya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Hitung maju dari Rp36.000 ke Rp40.000. Berapa lompatannya?",
   "answer": "4000",
   "hint": "36, 37, 38, 39, 40 ribu.",
   "explain": "Lompatannya Rp4.000.",
   "error": "salah-hitung-kembalian",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Dari Rp40.000 ke Rp50.000. Berapa lompatannya?",
   "answer": "10000",
   "hint": "Dari 40 ribu ke 50 ribu.",
   "explain": "Lompatannya Rp10.000.",
   "error": "salah-hitung-kembalian",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Berapa kembaliannya?",
   "answer": "14000",
   "hint": "Jumlahkan kedua lompatan.",
   "explain": "Rp4.000 + Rp10.000 = Rp14.000.",
   "error": "kembalian-dijumlah",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek: Rp36.000 + Rp14.000 = ?",
   "answer": "50000",
   "hint": "Harusnya sama dengan uang yang dibayar.",
   "explain": "Rp50.000. Benar.",
   "error": "salah-hitung-kembalian",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Kembaliannya Rp14.000."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Uang Dewi Rp12.000, uang Rina Rp9.500, uang Andi Rp15.000. Urutkan dari yang paling banyak.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Siapa yang uangnya paling banyak?",
   "options": [
    "Dewi",
    "Rina",
    "Andi"
   ],
   "answer": "Andi",
   "hint": "Bandingkan ribuannya: 12, 9, 15.",
   "explain": "Rp15.000 paling besar, jadi Andi.",
   "error": "salah-urut-lompat"
  },
  {
   "kind": "choice",
   "prompt": "Siapa yang uangnya paling sedikit?",
   "options": [
    "Dewi",
    "Rina",
    "Andi"
   ],
   "answer": "Rina",
   "hint": "Rp9.500 belum sampai Rp10.000.",
   "explain": "Rp9.500 paling kecil, jadi Rina.",
   "error": "salah-urut-lompat"
  },
  {
   "kind": "choice",
   "prompt": "Jadi urutan dari yang paling banyak adalah ...",
   "options": [
    "Andi, Dewi, Rina",
    "Rina, Dewi, Andi",
    "Dewi, Andi, Rina"
   ],
   "answer": "Andi, Dewi, Rina",
   "hint": "Paling banyak di depan, paling sedikit di belakang.",
   "explain": "Andi (Rp15.000), Dewi (Rp12.000), Rina (Rp9.500).",
   "error": "salah-urut-lompat"
  }
 ],
 "conclusion": "Urutannya Andi, Dewi, Rina."
}
```
