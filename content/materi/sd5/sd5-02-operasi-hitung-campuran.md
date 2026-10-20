---
id: sd5-02-operasi-hitung-campuran
judul: Operasi Hitung Campuran
jenjang: sd5
moe: "Primary 5 · Number and Algebra · Whole Numbers"
prasyarat: [sd4-03-kali-bagi-lanjut, sd5-01-bilangan-sampai-10-juta]
durasi_menit: 35
---

## Kenapa belajar ini?

Saat berbelanja, kamu sering menghitung beberapa barang sekaligus, lalu menghitung kembalian. Semua itu bisa ditulis dalam satu kalimat hitung. Supaya semua orang mendapat jawaban yang sama, ada **aturan urutan** yang harus diikuti.

## Analogi

Bayangkan sebuah **kereta**. Setiap angka adalah **penumpang** yang duduk di kursi bernomor: kursi satuan, puluhan, ratusan, ribuan, dan seterusnya.

- **Dikali 10** berarti semua penumpang **pindah satu kursi ke kiri**. Kursi satuan yang kosong diisi 0.
- **Dibagi 10** berarti semua penumpang **pindah satu kursi ke kanan**.

```visual
{"type": "table", "head": ["", "Ribuan", "Ratusan", "Puluhan", "Satuan"], "rows": [["56", "", "", "5", "6"], ["56 × 10", "", "5", "6", "0"], ["56 × 100", "5", "6", "0", "0"]], "caption": "Setiap dikali 10, penumpang pindah satu kursi ke kiri"}
```

Kereta ini juga punya **kondektur** yang melayani penumpang dengan urutan tetap:

1. **Gerbong prioritas** (tanda kurung) dilayani paling dulu.
2. Lalu penumpang **kali dan bagi**, dari kiri ke kanan.
3. Terakhir penumpang **tambah dan kurang**, dari kiri ke kanan.

## Konsep

### Mengalikan dan membagi dengan 10, 100, 1.000

- $\times 10$: geser satu kursi ke kiri. $56 \times 10 = 560$
- $\times 100$: geser dua kursi. $56 \times 100 = 5.600$
- $\times 1.000$: geser tiga kursi. $56 \times 1.000 = 56.000$
- $\div 10$, $\div 100$, $\div 1.000$: geser ke kanan. $45.000 \div 100 = 450$

### Dengan kelipatan 10, 100, 1.000

Angka 300 sama dengan $3 \times 100$. Jadi kalikan dengan 3 dulu, lalu geser dua kursi:

$$46 \times 300 = 46 \times 3 \times 100 = 138 \times 100 = 13.800$$

Untuk pembagian, buang nol yang **sama banyak** dari kedua bilangan:

$$72.000 \div 900 = 720 \div 9 = 80$$

```anim
{"type": "persamaan", "title": "Kali dengan kelipatan 100", "baris": [{"tex": "25 \\times 400", "say": "Soalnya: 25 dikali 400."}, {"tex": "25 \\times 4 \\times 100", "say": "Pecah 400 menjadi 4 × 100.", "op": "pecah 400"}, {"tex": "100 \\times 100", "say": "Kalikan angka bukan nol dulu: 25 × 4 = 100."}, {"tex": "10.000", "say": "Geser dua kursi ke kiri (tambah dua nol)."}]}
```

Ini boleh karena kedua bilangan sama-sama dibagi 100. Seperti membagi 72.000 kelereng ke 900 anak sama saja dengan 720 kelereng ke 9 anak.

### Urutan operasi hitung

1. Kerjakan yang ada di dalam **kurung** dulu.
2. Kerjakan **kali dan bagi** dari kiri ke kanan. Kali dan bagi **setara**, tidak ada yang lebih dulu.
3. Kerjakan **tambah dan kurang** dari kiri ke kanan. Keduanya juga setara.

```anim
{"type": "persamaan", "title": "Kondektur melayani sesuai urutan", "baris": [{"tex": "30 + 12 \\div 3 \\times 2 - 5", "say": "Tidak ada kurung. Layani kali dan bagi dari kiri."}, {"tex": "30 + 4 \\times 2 - 5", "say": "Yang paling kiri: 12 ÷ 3 = 4.", "op": "12 \\div 3"}, {"tex": "30 + 8 - 5", "say": "Lanjut kali: 4 × 2 = 8.", "op": "4 \\times 2"}, {"tex": "38 - 5", "say": "Sekarang tambah dan kurang dari kiri: 30 + 8 = 38.", "op": "30 + 8"}, {"tex": "33", "say": "Terakhir 38 − 5 = 33."}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Perkalian dengan kelipatan 100

```soal
{
 "title": "Contoh 1",
 "text": "Hitung $46 \\times 300$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pecah 300.",
   "options": [
    "3 × 100",
    "30 × 100",
    "3 × 10"
   ],
   "answer": "3 × 100",
   "hint": "Ada berapa nol di 300?",
   "explain": "300 = 3 × 100.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "column",
   "op": "×",
   "a": 46,
   "b": 3,
   "prompt": "Langkah 2: Kalikan angka bukan nol: 46 × 3.",
   "hint": "Mulai dari satuan: 6 × 3 = 18, simpan 1.",
   "explain": "46 × 3 = 138."
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Geser dua kursi ke kiri. 138 × 100 = ?",
   "answer": "13.800",
   "hint": "Dikali 100 berarti tambah dua nol.",
   "explain": "138 × 100 = 13.800.",
   "error": "lupa-nol-tempat"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 13.800 ÷ 300 = ?",
   "answer": "46",
   "hint": "Buang dua nol: 138 ÷ 3.",
   "explain": "138 ÷ 3 = 46. Benar.",
   "error": "salah-fakta-bagi"
  }
 ],
 "conclusion": "Jadi 46 × 300 = 13.800."
}
```

### Contoh 2: Pembagian dengan kelipatan 100

```soal
{
 "title": "Contoh 2",
 "text": "Hitung $72.000 \\div 900$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 900 punya berapa nol?",
   "answer": "2",
   "hint": "Hitung angka nol di belakang 9.",
   "explain": "900 punya dua nol.",
   "error": "lupa-nol-tempat"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Buang dua nol dari kedua bilangan. Soalnya menjadi?",
   "options": [
    "720 ÷ 9",
    "72 ÷ 9",
    "7.200 ÷ 9"
   ],
   "answer": "720 ÷ 9",
   "hint": "Buang nol yang sama banyak dari kedua bilangan.",
   "explain": "72.000 menjadi 720, dan 900 menjadi 9.",
   "error": "lupa-nol-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: 720 ÷ 9 = ?",
   "answer": "80",
   "hint": "Ingat 9 × 8 = 72.",
   "explain": "720 ÷ 9 = 80.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 80 × 900 = ?",
   "answer": "72.000",
   "hint": "8 × 9 = 72, lalu tambah tiga nol.",
   "explain": "80 × 900 = 72.000. Benar.",
   "error": "lupa-nol-tempat"
  }
 ],
 "conclusion": "Jadi 72.000 ÷ 900 = 80."
}
```

### Contoh 3: Urutan operasi tanpa kurung

```soal
{
 "title": "Contoh 3",
 "text": "Hitung $60 - 24 \\div 4 \\times 3 + 5$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tidak ada kurung. Operasi mana yang dikerjakan pertama?",
   "options": [
    "24 ÷ 4",
    "60 − 24",
    "4 × 3",
    "3 + 5"
   ],
   "answer": "24 ÷ 4",
   "hint": "Kali dan bagi dilayani lebih dulu, dari kiri.",
   "explain": "Kali-bagi paling kiri adalah 24 ÷ 4.",
   "error": "salah-urutan-langkah"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 24 ÷ 4 = ?",
   "answer": "6",
   "hint": "Empat kali berapa sama dengan 24?",
   "explain": "24 ÷ 4 = 6. Soal menjadi 60 − 6 × 3 + 5.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Lanjut kali. 6 × 3 = ?",
   "answer": "18",
   "hint": "Enam kali tiga.",
   "explain": "6 × 3 = 18. Soal menjadi 60 − 18 + 5.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Tambah dan kurang dari kiri. 60 − 18 = ?",
   "answer": "42",
   "hint": "Kurangi dulu, baru tambah.",
   "explain": "60 − 18 = 42.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: 42 + 5 = ?",
   "answer": "47",
   "hint": "Tinggal satu operasi.",
   "explain": "42 + 5 = 47.",
   "error": "salah-fakta-tambah"
  }
 ],
 "conclusion": "Jadi 60 − 24 ÷ 4 × 3 + 5 = 47."
}
```

### Contoh 4: Urutan operasi dengan kurung

```soal
{
 "title": "Contoh 4",
 "text": "Hitung $8 \\times (15 - 7) + 36 \\div (2 + 4)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Kurung pertama. 15 − 7 = ?",
   "answer": "8",
   "hint": "Kurung selalu dikerjakan pertama.",
   "explain": "15 − 7 = 8.",
   "error": "salah-urutan-langkah"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kurung kedua. 2 + 4 = ?",
   "answer": "6",
   "hint": "Kerjakan isi kurung.",
   "explain": "2 + 4 = 6. Soal menjadi 8 × 8 + 36 ÷ 6.",
   "error": "salah-urutan-langkah"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Kali. 8 × 8 = ?",
   "answer": "64",
   "hint": "Delapan kali delapan.",
   "explain": "8 × 8 = 64.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Bagi. 36 ÷ 6 = ?",
   "answer": "6",
   "hint": "Enam kali berapa sama dengan 36?",
   "explain": "36 ÷ 6 = 6.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Tambah. 64 + 6 = ?",
   "answer": "70",
   "hint": "Tambah dikerjakan terakhir.",
   "explain": "64 + 6 = 70.",
   "error": "salah-fakta-tambah"
  }
 ],
 "conclusion": "Jadi 8 × (15 − 7) + 36 ÷ (2 + 4) = 70."
}
```

### Contoh 5: Soal cerita belanja

```soal
{
 "title": "Contoh 5",
 "text": "Bu Siti membeli 3 kotak teh seharga Rp12.000 per kotak dan 2 kg gula seharga Rp17.000 per kg. Ia membayar dengan uang Rp100.000. Berapa kembaliannya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pilih kalimat hitung yang benar.",
   "options": [
    "100.000 − (3 × 12.000 + 2 × 17.000)",
    "100.000 − 3 × 12.000 + 2 × 17.000",
    "(100.000 − 3) × 12.000 + 2 × 17.000"
   ],
   "answer": "100.000 − (3 × 12.000 + 2 × 17.000)",
   "hint": "Total belanja harus dihitung dulu, jadi perlu kurung.",
   "explain": "Kembalian = uang dibayar − (total belanja).",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Harga teh. 3 × 12.000 = ?",
   "answer": "36.000",
   "hint": "3 × 12 = 36, lalu tambah tiga nol.",
   "explain": "3 × 12.000 = 36.000.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Harga gula. 2 × 17.000 = ?",
   "answer": "34.000",
   "hint": "2 × 17 = 34.",
   "explain": "2 × 17.000 = 34.000.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Selesaikan kurung. 36.000 + 34.000 = ?",
   "answer": "70.000",
   "hint": "Jumlahkan harga teh dan gula.",
   "explain": "Total belanja Rp70.000.",
   "error": "salah-fakta-tambah",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Kembalian. 100.000 − 70.000 = ?",
   "answer": "30.000",
   "hint": "Uang dibayar dikurangi total belanja.",
   "explain": "Kembaliannya Rp30.000.",
   "error": "salah-hitung-kembalian",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 70.000 + 30.000 = ?",
   "answer": "100.000",
   "hint": "Belanja + kembalian harus sama dengan uang dibayar.",
   "explain": "Hasilnya Rp100.000. Benar.",
   "error": "salah-fakta-tambah",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Kembalian Bu Siti Rp30.000.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Teh",
    "units": 3,
    "unitValue": "12.000"
   },
   {
    "label": "Gula",
    "units": 2,
    "unitValue": "17.000"
   }
  ],
  "total": "belanja ?"
 }
}
```

## Kesalahan yang sering terjadi

- **Mengerjakan dari kiri tanpa aturan.** Pada $60 - 24 \div 4 \times 3 + 5$, menghitung $60 - 24 = 36$ dulu. Salah, karena bagi dan kali harus dilayani sebelum kurang. Jawaban yang benar 47.
- **Mengira kali selalu sebelum bagi.** Pada $48 \div 4 \times 2$, menghitung $4 \times 2 = 8$ lalu $48 \div 8 = 6$. Salah. Kali dan bagi setara, kerjakan dari kiri: $48 \div 4 = 12$, lalu $12 \times 2 = 24$.
- **Jumlah nol salah.** Menulis $46 \times 300 = 1.380$. Setelah $46 \times 3 = 138$, kamu harus menggeser **dua** kursi karena 300 punya dua nol: 13.800.
- **Membuang nol tidak sama banyak.** Pada $72.000 \div 900$, membuang tiga nol dari 72.000 tetapi dua nol dari 900. Buang nol yang sama banyak dari kedua bilangan.
- **Lupa kurung di soal cerita.** Menulis $100.000 - 3 \times 12.000 + 2 \times 17.000$. Hasilnya 98.000, bukan kembalian. Total belanja harus dikurung.

## Ringkasan

- $\times 10, 100, 1.000$: geser angka 1, 2, 3 tempat ke kiri. $\div 10, 100, 1.000$: geser ke kanan.
- Kali kelipatan (misalnya 300): kali angka depannya dulu (3), lalu geser sesuai banyak nol.
- Bagi kelipatan: buang nol yang sama banyak dari kedua bilangan, lalu bagi.
- Urutan: **kurung**, lalu **kali dan bagi** dari kiri, lalu **tambah dan kurang** dari kiri.
- Di soal cerita, beri kurung pada bagian yang harus dihitung lebih dulu.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung $58 \\times 400$.",
 "steps": [
  {
   "kind": "column",
   "op": "×",
   "a": 58,
   "b": 4,
   "prompt": "Kalikan angka bukan nol dulu: 58 × 4.",
   "hint": "8 × 4 = 32, simpan 3.",
   "explain": "58 × 4 = 232."
  },
  {
   "kind": "number",
   "prompt": "Geser dua kursi. 232 × 100 = ?",
   "answer": "23.200",
   "hint": "400 punya dua nol.",
   "explain": "232 × 100 = 23.200.",
   "error": "lupa-nol-tempat"
  }
 ],
 "conclusion": "Jadi 58 × 400 = 23.200."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $63.000 \\div 700$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Buang nol yang sama banyak. Soalnya menjadi?",
   "options": [
    "630 ÷ 7",
    "63 ÷ 7",
    "6.300 ÷ 7"
   ],
   "answer": "630 ÷ 7",
   "hint": "700 punya dua nol.",
   "explain": "Buang dua nol: 630 ÷ 7.",
   "error": "lupa-nol-tempat"
  },
  {
   "kind": "number",
   "prompt": "630 ÷ 7 = ?",
   "answer": "90",
   "hint": "7 × 9 = 63.",
   "explain": "630 ÷ 7 = 90.",
   "error": "salah-fakta-bagi"
  }
 ],
 "conclusion": "Jadi 63.000 ÷ 700 = 90."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung $45 + 15 \\times 4 - 20 \\div 5$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Kali dulu. 15 × 4 = ?",
   "answer": "60",
   "hint": "Kali dan bagi sebelum tambah dan kurang.",
   "explain": "15 × 4 = 60.",
   "error": "salah-urutan-langkah"
  },
  {
   "kind": "number",
   "prompt": "Bagi. 20 ÷ 5 = ?",
   "answer": "4",
   "hint": "Lima kali berapa sama dengan 20?",
   "explain": "20 ÷ 5 = 4.",
   "error": "salah-urutan-langkah"
  },
  {
   "kind": "number",
   "prompt": "Sekarang 45 + 60 − 4 = ?",
   "answer": "101",
   "hint": "Kerjakan dari kiri.",
   "explain": "45 + 60 = 105, lalu 105 − 4 = 101.",
   "error": "salah-fakta-kurang"
  }
 ],
 "conclusion": "Jadi hasilnya 101."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Hitung $(120 - 48) \\div 8 \\times 3$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Kurung dulu. 120 − 48 = ?",
   "answer": "72",
   "hint": "Kerjakan isi kurung.",
   "explain": "120 − 48 = 72.",
   "error": "salah-urutan-langkah"
  },
  {
   "kind": "number",
   "prompt": "Dari kiri: 72 ÷ 8 = ?",
   "answer": "9",
   "hint": "Bagi dulu karena ada di kiri.",
   "explain": "72 ÷ 8 = 9.",
   "error": "salah-urutan-langkah"
  },
  {
   "kind": "number",
   "prompt": "9 × 3 = ?",
   "answer": "27",
   "hint": "Tinggal satu operasi.",
   "explain": "9 × 3 = 27.",
   "error": "salah-fakta-kali"
  }
 ],
 "conclusion": "Jadi hasilnya 27."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Made membeli 4 buku seharga Rp8.500 per buku dan 3 pulpen seharga Rp4.000 per pulpen. Ia membayar Rp50.000. Berapa kembaliannya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Harga buku: 4 × 8.500 = ?",
   "answer": "34.000",
   "hint": "4 × 8.000 = 32.000 dan 4 × 500 = 2.000.",
   "explain": "4 × 8.500 = 34.000.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Harga pulpen: 3 × 4.000 = ?",
   "answer": "12.000",
   "hint": "3 × 4 = 12.",
   "explain": "3 × 4.000 = 12.000.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Total belanja?",
   "answer": "46.000",
   "hint": "Jumlahkan harga buku dan pulpen.",
   "explain": "34.000 + 12.000 = 46.000.",
   "error": "salah-fakta-tambah",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Kembalian?",
   "answer": "4.000",
   "hint": "Uang dibayar dikurangi total belanja.",
   "explain": "50.000 − 46.000 = 4.000.",
   "error": "salah-hitung-kembalian",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Kembalian Made Rp4.000."
}
```
