---
id: sd5-07-laju
judul: Laju (Rate)
jenjang: sd5
moe: "Primary 5 · Number and Algebra · Rate"
prasyarat: [sd4-03-kali-bagi-lanjut, sd5-02-operasi-hitung-campuran]
durasi_menit: 35
---

## Kenapa belajar ini?

"Rp14.000 per kg", "45 lembar per menit", "14 km per liter". Semua ini adalah **laju**. Dengan laju, kamu bisa menghitung harga belanja, lama waktu mencetak, atau jarak yang bisa ditempuh kendaraan.

## Analogi

Bayangkan sebuah **keran air** yang mengisi ember. Keran itu mengalirkan air dengan kecepatan tetap, misalnya **12 liter setiap menit**.

- Banyak air **setiap 1 menit** adalah **laju** keran.
- Lama keran dibuka adalah **banyak satuan** (berapa menit).
- Seluruh air yang terkumpul adalah **jumlah total**.

Kalau keran dibuka 1 menit, ember berisi 12 liter. Dibuka 2 menit, 24 liter. Dibuka 5 menit, 60 liter. Setiap menit, air yang masuk selalu sama.

```anim
{"type": "batang", "title": "Keran 12 liter per menit", "bars": [{"label": "1 menit", "units": 1, "unitValue": "12 ℓ"}, {"label": "2 menit", "units": 2, "unitValue": "12 ℓ"}, {"label": "5 menit", "units": 5, "unitValue": "12 ℓ"}], "langkah": [{"say": "Dibuka 1 menit: 12 liter. Inilah lajunya.", "bars": 1}, {"say": "Dibuka 2 menit: 2 × 12 = 24 liter.", "bars": 2}, {"say": "Dibuka 5 menit: 5 × 12 = 60 liter. Setiap menit menambah 12 liter.", "bars": 3}]}
```

## Konsep

### Arti laju

**Laju** adalah banyaknya sesuatu **untuk setiap 1 satuan**. Kata kuncinya adalah **"per"** atau **"setiap"**.

- 12 liter **per** menit (satuannya menit)
- Rp14.000 **per** kg (satuannya kg)
- 45 kata **per** menit (satuannya menit)

### Tiga besaran yang saling terkait

$$\text{jumlah total} = \text{laju} \times \text{banyak satuan}$$

$$\text{laju} = \text{jumlah total} \div \text{banyak satuan}$$

$$\text{banyak satuan} = \text{jumlah total} \div \text{laju}$$

Jika dua besaran diketahui, besaran ketiga bisa dicari.

### Tabel laju

Tabel membantu melihat hubungan. Baris pertama selalu untuk **1 satuan**.

```visual
{"type": "table", "head": ["Waktu (menit)", "Air (liter)"], "rows": [["1", "12"], ["2", "24"], ["5", "60"]], "caption": "Baris pertama: laju, yaitu air untuk 1 menit"}
```
## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Mencari laju

```soal
{
 "title": "Contoh 1",
 "text": "Sebuah keran mengisi 72 liter air dalam 6 menit. Berapa laju keran itu?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Yang dicari laju (liter per menit). Hitungan apa yang dipakai?",
   "options": [
    "72 ÷ 6",
    "6 ÷ 72",
    "72 × 6"
   ],
   "answer": "72 ÷ 6",
   "hint": "Laju = jumlah total ÷ banyak satuan.",
   "explain": "Air untuk 1 menit: 72 ÷ 6.",
   "error": "bagi-urutan-terbalik"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung 72 ÷ 6.",
   "answer": "12",
   "hint": "6 × berapa = 72?",
   "explain": "72 ÷ 6 = 12.",
   "error": "salah-fakta-bagi",
   "suffix": "liter per menit"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 12 × 6 = ?",
   "answer": "72",
   "hint": "Laju dikali banyak menit.",
   "explain": "12 × 6 = 72 liter. Benar.",
   "error": "salah-fakta-kali",
   "suffix": "liter"
  }
 ],
 "conclusion": "Laju keran 12 liter per menit."
}
```

### Contoh 2: Mencari jumlah total

```soal
{
 "title": "Contoh 2",
 "text": "Mesin fotokopi mencetak 45 lembar per menit. Berapa lembar yang dicetak dalam 8 menit?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Hitungan apa yang dipakai?",
   "options": [
    "45 × 8",
    "45 ÷ 8",
    "45 + 8"
   ],
   "answer": "45 × 8",
   "hint": "Jumlah total = laju × banyak satuan.",
   "explain": "Seperti keran yang dibuka 8 menit: 45 × 8.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "column",
   "op": "×",
   "a": 45,
   "b": 8,
   "prompt": "Langkah 2: Hitung 45 × 8.",
   "hint": "5 × 8 = 40, simpan 4.",
   "explain": "45 × 8 = 360."
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 360 ÷ 8 = ?",
   "answer": "45",
   "hint": "Hasilnya harus sama dengan laju.",
   "explain": "360 ÷ 8 = 45 lembar per menit. Sesuai.",
   "error": "salah-fakta-bagi"
  }
 ],
 "conclusion": "Dalam 8 menit tercetak 360 lembar."
}
```

### Contoh 3: Mencari banyak satuan

```soal
{
 "title": "Contoh 3",
 "text": "Harga telur Rp2.500 per butir. Bu Siti punya Rp40.000. Berapa butir telur yang bisa ia beli?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Hitungan apa yang dipakai?",
   "options": [
    "40.000 ÷ 2.500",
    "2.500 ÷ 40.000",
    "40.000 × 2.500"
   ],
   "answer": "40.000 ÷ 2.500",
   "hint": "Banyak satuan = jumlah total ÷ laju.",
   "explain": "Uang dibagi harga satu butir.",
   "error": "bagi-urutan-terbalik"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Buang nol yang sama banyak. Soalnya menjadi?",
   "options": [
    "400 ÷ 25",
    "40 ÷ 25",
    "4.000 ÷ 25"
   ],
   "answer": "400 ÷ 25",
   "hint": "2.500 punya dua nol.",
   "explain": "Buang dua nol: 400 ÷ 25.",
   "error": "lupa-nol-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: 400 ÷ 25 = ?",
   "answer": "16",
   "hint": "4 × 25 = 100.",
   "explain": "400 ÷ 25 = 16.",
   "error": "salah-fakta-bagi",
   "suffix": "butir"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 16 × 2.500 = ?",
   "answer": "40.000",
   "hint": "16 × 25 = 400, lalu tambah dua nol.",
   "explain": "16 × 2.500 = 40.000. Benar.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Bu Siti bisa membeli 16 butir telur."
}
```

### Contoh 4: Dua langkah, laju dicari dulu

```soal
{
 "title": "Contoh 4",
 "text": "Printer A mencetak 150 lembar dalam 5 menit. Berapa menit yang dibutuhkan untuk mencetak 840 lembar?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Cari laju. 150 ÷ 5 = ?",
   "answer": "30",
   "hint": "Lembar untuk 1 menit.",
   "explain": "Laju 30 lembar per menit.",
   "error": "salah-fakta-bagi",
   "suffix": "lembar per menit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Banyak menit = 840 ÷ 30 = ?",
   "answer": "28",
   "hint": "Buang satu nol: 84 ÷ 3.",
   "explain": "840 ÷ 30 = 28 menit.",
   "error": "salah-fakta-bagi",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 30 × 28 = ?",
   "answer": "840",
   "hint": "3 × 28 = 84, lalu tambah nol.",
   "explain": "30 × 28 = 840 lembar. Benar.",
   "error": "salah-fakta-kali"
  }
 ],
 "conclusion": "Dibutuhkan 28 menit.",
 "visual": {
  "type": "table",
  "head": [
   "Waktu (menit)",
   "Lembar"
  ],
  "rows": [
   [
    "5",
    "150"
   ],
   [
    "1",
    "?"
   ],
   [
    "?",
    "840"
   ]
  ]
 }
}
```

### Contoh 5: Soal cerita tarif ojek

```soal
{
 "title": "Contoh 5",
 "text": "Tarif ojek daring: Rp8.000 untuk 2 km pertama, lalu Rp3.500 untuk setiap km berikutnya. Dayu naik ojek sejauh 12 km. Berapa ongkosnya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Berapa km berikutnya (setelah 2 km pertama)?",
   "answer": "10",
   "hint": "Kurangi 12 dengan 2.",
   "explain": "12 − 2 = 10 km.",
   "error": "salah-langkah-materi",
   "suffix": "km"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Ongkos 10 km berikutnya = 10 × 3.500 = ?",
   "answer": "35.000",
   "hint": "Dikali 10: tambah satu nol.",
   "explain": "10 × 3.500 = 35.000.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Ongkos seluruhnya = 8.000 + 35.000 = ?",
   "answer": "43.000",
   "hint": "Jangan lupa tarif 2 km pertama.",
   "explain": "8.000 + 35.000 = 43.000.",
   "error": "salah-fakta-tambah",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Ongkos Dayu Rp43.000.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "2 km pertama",
    "units": 1,
    "unitValue": "8.000"
   },
   {
    "label": "10 km berikutnya",
    "units": 10,
    "unitValue": "3.500"
   }
  ],
  "total": "ongkos ?"
 }
}
```

## Kesalahan yang sering terjadi

- **Membagi terbalik.** Laju keran dihitung $6 \div 72$. Laju adalah jumlah **untuk 1 menit**, jadi jumlah total dibagi banyak menit: $72 \div 6 = 12$.
- **Lupa menulis satuan laju.** Menjawab "12" saja. Tulis lengkap: 12 liter per menit.
- **Langsung membagi dengan angka di soal.** Pada contoh 4, menghitung $840 \div 150$. Laju harus untuk 1 menit, jadi cari dulu $150 \div 5 = 30$.
- **Menghitung semua km dengan tarif yang sama.** Pada contoh 5, menghitung $12 \times 3.500 = 42.000$. Padahal 2 km pertama sudah dihitung dalam Rp8.000.
- **Lupa mengurangi bagian pertama.** Menghitung $8.000 + 12 \times 3.500$. Km berikutnya hanya $12 - 2 = 10$ km.

## Ringkasan

- Laju = banyaknya sesuatu untuk **1 satuan** (kata kunci "per" atau "setiap").
- Jumlah total = laju × banyak satuan.
- Laju = jumlah total ÷ banyak satuan.
- Banyak satuan = jumlah total ÷ laju.
- Jika laju belum diketahui, cari dulu nilai untuk 1 satuan. Tabel membantu menyusun langkah.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Sebuah mobil menempuh 14 km untuk setiap liter bensin. Berapa km yang ditempuh dengan 9 liter?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Hitungan apa yang dipakai?",
   "options": [
    "14 × 9",
    "14 ÷ 9",
    "14 + 9"
   ],
   "answer": "14 × 9",
   "hint": "Jumlah total = laju × banyak satuan.",
   "explain": "14 km per liter, sebanyak 9 liter.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "Hitung jaraknya.",
   "answer": "126",
   "hint": "10 × 9 = 90 dan 4 × 9 = 36.",
   "explain": "14 × 9 = 126 km.",
   "error": "salah-fakta-kali",
   "suffix": "km"
  }
 ],
 "conclusion": "Mobil menempuh 126 km."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Siti mengetik 270 kata dalam 6 menit. Berapa kata per menit?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Hitungan apa yang dipakai?",
   "options": [
    "270 ÷ 6",
    "6 ÷ 270",
    "270 × 6"
   ],
   "answer": "270 ÷ 6",
   "hint": "Laju = jumlah total ÷ banyak satuan.",
   "explain": "Kata untuk 1 menit: 270 ÷ 6.",
   "error": "bagi-urutan-terbalik"
  },
  {
   "kind": "number",
   "prompt": "Hitung lajunya.",
   "answer": "45",
   "hint": "6 × 45 = ?",
   "explain": "270 ÷ 6 = 45.",
   "error": "salah-fakta-bagi",
   "suffix": "kata per menit"
  }
 ],
 "conclusion": "Siti mengetik 45 kata per menit."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Air mengalir ke bak dengan laju 15 liter per menit. Bak berisi 360 liter jika penuh. Berapa menit sampai bak penuh?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Hitungan apa yang dipakai?",
   "options": [
    "360 ÷ 15",
    "15 ÷ 360",
    "360 × 15"
   ],
   "answer": "360 ÷ 15",
   "hint": "Banyak satuan = jumlah total ÷ laju.",
   "explain": "360 ÷ 15.",
   "error": "bagi-urutan-terbalik"
  },
  {
   "kind": "number",
   "prompt": "Hitung banyak menit.",
   "answer": "24",
   "hint": "15 × 20 = 300, sisa 60 = 15 × 4.",
   "explain": "360 ÷ 15 = 24 menit.",
   "error": "salah-fakta-bagi",
   "suffix": "menit"
  }
 ],
 "conclusion": "Bak penuh dalam 24 menit."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Harga 4 kg jeruk Rp56.000. Berapa harga 7 kg jeruk?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Cari laju: harga 1 kg = 56.000 ÷ 4 = ?",
   "answer": "14.000",
   "hint": "Setengah dari 56.000, lalu setengah lagi.",
   "explain": "Rp14.000 per kg.",
   "error": "salah-fakta-bagi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Harga 7 kg = 14.000 × 7 = ?",
   "answer": "98.000",
   "hint": "14 × 7 = 98.",
   "explain": "14.000 × 7 = 98.000.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Harga 7 kg jeruk Rp98.000."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Sewa sepeda di taman: Rp10.000 untuk jam pertama dan Rp6.000 untuk setiap jam berikutnya. Budi menyewa 5 jam. Berapa biayanya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa jam berikutnya (setelah jam pertama)?",
   "answer": "4",
   "hint": "5 − 1.",
   "explain": "Ada 4 jam berikutnya.",
   "error": "salah-langkah-materi",
   "suffix": "jam"
  },
  {
   "kind": "number",
   "prompt": "Biaya jam berikutnya = 4 × 6.000 = ?",
   "answer": "24.000",
   "hint": "4 × 6 = 24.",
   "explain": "4 × 6.000 = 24.000.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Biaya seluruhnya?",
   "answer": "34.000",
   "hint": "Tambahkan biaya jam pertama.",
   "explain": "10.000 + 24.000 = 34.000.",
   "error": "salah-fakta-tambah",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Biaya sewa Rp34.000."
}
```
