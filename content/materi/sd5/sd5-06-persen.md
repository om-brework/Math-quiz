---
id: sd5-06-persen
judul: Persen
jenjang: sd5
moe: "Primary 5 · Number and Algebra · Percentage"
prasyarat: [sd4-07-desimal, sd5-03-pecahan-dan-pembagian, sd5-04-operasi-pecahan]
durasi_menit: 45
---

## Kenapa belajar ini?

Di toko ada tulisan "Diskon 20%". Di struk restoran ada "PPN 11%". Di buku tabungan ada "bunga 4% per tahun". Semua itu memakai **persen**. Dengan memahami persen, kamu bisa tahu berapa yang sebenarnya kamu bayar atau dapatkan.

## Analogi

Bayangkan sebuah **papan berpetak 10 × 10**, jadi ada **100 petak** sama besar. Papan ini selalu mewakili **keseluruhan**: semua siswa, seluruh harga, atau seluruh tabungan.

- **1%** adalah **1 petak** dari 100 petak.
- **25%** adalah 25 petak, yaitu seperempat papan.
- **100%** adalah seluruh papan.

```visual
{"type": "grid", "width": 10, "height": 10, "shade": [{"x": 0, "y": 0, "w": 10, "h": 2}, {"x": 0, "y": 2, "w": 5, "h": 1}], "caption": "25 petak dari 100 petak = 25%, seperempat papan"}
```

Kalau keseluruhannya Rp200.000, setiap petak bernilai $200.000 \div 100 = 2.000$. Jadi 1% dari Rp200.000 adalah Rp2.000. Hampir semua soal persen bisa dikerjakan dengan bertanya: **"Satu petak nilainya berapa?"**

## Konsep

### Arti persen

**Persen** artinya **per seratus**. Lambangnya **%**.

$$35\% = \frac{35}{100} = 0{,}35$$

```visual
{"type": "grid", "width": 10, "height": 10, "shade": [{"x": 0, "y": 0, "w": 10, "h": 3}, {"x": 0, "y": 3, "w": 5, "h": 1}], "caption": "35% = 35 petak dari 100"}
```

### Mengubah bagian menjadi persen

- **Dari pecahan:** jadikan penyebut 100. $\frac{3}{5} = \frac{60}{100} = 60\%$.
- **Dari desimal:** geser koma 2 tempat ke kanan (kali 100). $0{,}4 = 40\%$, $0{,}07 = 7\%$.
- **Dari soal cerita:** tulis dulu bagian sebagai pecahan dari keseluruhan, lalu ubah ke persen.

### Mencari persen dari keseluruhan

$$a\% \text{ dari keseluruhan} = \frac{a}{100} \times \text{keseluruhan}$$

Cara petak: cari nilai 1 petak (keseluruhan ÷ 100), lalu kalikan dengan banyak petak. Cara cepat lain: cari 10% (bagi 10) atau 5% (setengah dari 10%), lalu gabungkan.

### Diskon

**Diskon** adalah potongan harga. Petak diskon dibuang dari papan.

- Diskon = persen diskon × harga awal
- Harga bayar = harga awal − diskon

```anim
{"type": "batang", "title": "Diskon 30% dari Rp100.000", "bars": [{"label": "Harga awal", "units": 10, "unitValue": "10%"}, {"label": "Diskon", "units": 3, "unitValue": "10%"}, {"label": "Dibayar", "units": 7, "unitValue": "10%"}], "total": "Rp100.000", "langkah": [{"say": "Harga awal adalah 100%, yaitu 10 kotak masing-masing 10%.", "bars": 1, "total": true}, {"say": "Diskon 30% = 3 kotak. Satu kotak Rp10.000, jadi diskonnya Rp30.000.", "bars": 2, "total": true}, {"say": "Sisanya 7 kotak = 70% yang dibayar: Rp70.000.", "bars": 3, "total": true}]}
```

### PPN

**PPN** (Pajak Pertambahan Nilai) adalah pajak yang **ditambahkan** ke harga. Di Indonesia PPN sebesar **11%**. Papan mendapat 11 petak tambahan.

- PPN = 11% × harga
- Total bayar = harga + PPN

### Bunga tabungan per tahun

Bank memberi **bunga** kepada penabung. Bunga 4% per tahun artinya setelah 1 tahun, tabungan bertambah 4% dari tabungan awal.

- Bunga 1 tahun = persen bunga × tabungan awal
- Tabungan setelah 1 tahun = tabungan awal + bunga

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Bagian sebagai persen

```soal
{
 "title": "Contoh 1",
 "text": "Di kelas 5A ada 25 siswa. Sebanyak 9 siswa suka berenang. Berapa persen siswa yang suka berenang?",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Langkah 1: Tulis sebagai pecahan dari keseluruhan.",
   "answer": {
    "num": 9,
    "den": 25
   },
   "hint": "9 dari 25 siswa.",
   "explain": "Bagiannya $\\frac{9}{25}$.",
   "error": "pembilang-penyebut-tertukar"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 25 dikali berapa supaya menjadi 100?",
   "answer": "4",
   "hint": "25 × ? = 100.",
   "explain": "25 × 4 = 100.",
   "error": "salah-pengali-senilai"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\frac{9}{25} = \\frac{?}{100}$",
   "answer": "36",
   "hint": "Pembilang juga dikali 4.",
   "explain": "$\\frac{9 \\times 4}{25 \\times 4} = \\frac{36}{100}$.",
   "error": "salah-pengali-senilai"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Tulis sebagai persen.",
   "answer": "36",
   "hint": "Per seratus berarti persen.",
   "explain": "$\\frac{36}{100} = 36\\%$.",
   "error": "salah-langkah-materi",
   "suffix": "%"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 36% dari 25 siswa = ?",
   "answer": "9",
   "hint": "$\\frac{36}{100} \\times 25$.",
   "explain": "36% dari 25 = 9 siswa. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "siswa"
  }
 ],
 "conclusion": "Jadi 36% siswa suka berenang."
}
```

### Contoh 2: Persen dari keseluruhan

```soal
{
 "title": "Contoh 2",
 "text": "Berapa 15% dari Rp240.000?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Nilai 1 petak (1%) = 240.000 ÷ 100 = ?",
   "answer": "2.400",
   "hint": "Bagi 100 berarti buang dua nol.",
   "explain": "1% = Rp2.400.",
   "error": "lupa-nol-tempat",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 15 petak = 15 × 2.400 = ?",
   "answer": "36.000",
   "hint": "10 × 2.400 = 24.000 dan 5 × 2.400 = 12.000.",
   "explain": "15 × 2.400 = 36.000.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 10% dari 240.000 = ?",
   "answer": "24.000",
   "hint": "Bagi 10.",
   "explain": "10% = 24.000, 5% = 12.000, jumlahnya 36.000. Sama.",
   "error": "lupa-nol-tempat",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Jadi 15% dari Rp240.000 adalah Rp36.000."
}
```

### Contoh 3: Diskon

```soal
{
 "title": "Contoh 3",
 "text": "Harga sepasang sepatu Rp350.000. Toko memberi diskon 20%. Berapa harga yang harus dibayar?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Berapa persen harga yang dibayar?",
   "answer": "80",
   "hint": "Harga awal 100%, diskon 20% dibuang.",
   "explain": "100% − 20% = 80%.",
   "error": "salah-langkah-materi",
   "suffix": "%"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Nilai 1 petak = 350.000 ÷ 100 = ?",
   "answer": "3.500",
   "hint": "Buang dua nol.",
   "explain": "1% = Rp3.500.",
   "error": "lupa-nol-tempat",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Diskon = 20 × 3.500 = ?",
   "answer": "70.000",
   "hint": "2 × 3.500 = 7.000, lalu × 10.",
   "explain": "Diskonnya Rp70.000.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Harga bayar = 350.000 − 70.000 = ?",
   "answer": "280.000",
   "hint": "Diskon dikurangkan dari harga awal.",
   "explain": "Harga bayar Rp280.000.",
   "error": "salah-pilih-operasi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 80 × 3.500 = ?",
   "answer": "280.000",
   "hint": "80% dari harga awal.",
   "explain": "80 × 3.500 = 280.000. Sama.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Harga yang dibayar Rp280.000.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Diskon",
    "units": 2,
    "unitValue": "10%"
   },
   {
    "label": "Dibayar",
    "units": 8,
    "unitValue": "10%"
   }
  ],
  "total": "Rp350.000"
 }
}
```

### Contoh 4: PPN

```soal
{
 "title": "Contoh 4",
 "text": "Keluarga Putu makan di restoran. Harga makanan Rp180.000, belum termasuk PPN 11%. Berapa yang harus dibayar?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: PPN ditambahkan atau dikurangkan?",
   "options": [
    "ditambahkan ke harga",
    "dikurangkan dari harga"
   ],
   "answer": "ditambahkan ke harga",
   "hint": "PPN adalah pajak.",
   "explain": "Pajak ditambahkan: total = 111% dari harga.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Nilai 1 petak = 180.000 ÷ 100 = ?",
   "answer": "1.800",
   "hint": "Buang dua nol.",
   "explain": "1% = Rp1.800.",
   "error": "lupa-nol-tempat",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: PPN = 11 × 1.800 = ?",
   "answer": "19.800",
   "hint": "10 × 1.800 + 1.800.",
   "explain": "PPN = Rp19.800.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Total = 180.000 + 19.800 = ?",
   "answer": "199.800",
   "hint": "Jumlahkan harga dan PPN.",
   "explain": "Total Rp199.800.",
   "error": "salah-fakta-tambah",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 111 × 1.800 = ?",
   "answer": "199.800",
   "hint": "100 × 1.800 + 11 × 1.800.",
   "explain": "180.000 + 19.800 = 199.800. Sama.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Keluarga Putu membayar Rp199.800."
}
```

### Contoh 5: Bunga tabungan

```soal
{
 "title": "Contoh 5",
 "text": "Pak Wayan menabung Rp2.500.000 di bank dengan bunga 4% per tahun. Berapa bunga setelah 1 tahun? Berapa jumlah tabungannya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Nilai 1 petak = 2.500.000 ÷ 100 = ?",
   "answer": "25.000",
   "hint": "Buang dua nol.",
   "explain": "1% = Rp25.000.",
   "error": "lupa-nol-tempat",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Bunga = 4 × 25.000 = ?",
   "answer": "100.000",
   "hint": "Empat kali dua puluh lima ribu.",
   "explain": "Bunga 1 tahun Rp100.000.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tabungan akhir = 2.500.000 + 100.000 = ?",
   "answer": "2.600.000",
   "hint": "Bunga ditambahkan ke tabungan awal.",
   "explain": "Tabungan menjadi Rp2.600.000.",
   "error": "salah-fakta-tambah",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: tabungan akhir = 104%. 104 × 25.000 = ?",
   "answer": "2.600.000",
   "hint": "100 × 25.000 + 4 × 25.000.",
   "explain": "2.500.000 + 100.000 = 2.600.000. Sama.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Bunganya Rp100.000, tabungan menjadi Rp2.600.000."
}
```

## Kesalahan yang sering terjadi

- **Salah menggeser koma.** $0{,}4 = 4\%$. Salah, 0,4 adalah 40 per seratus. Kali 100: $0{,}4 = 40\%$.
- **Mengurangi persen langsung dari harga.** Rp350.000 diskon 20% ditulis $350.000 - 20$. Persen harus diubah menjadi rupiah dulu: diskon Rp70.000.
- **Menjawab diskonnya, bukan harga bayar.** Soal bertanya harga bayar, tetapi menjawab Rp70.000. Baca lagi pertanyaannya.
- **Mengurangi PPN.** PPN adalah pajak, jadi **ditambahkan** ke harga, bukan dikurangi.
- **Mengira bunga adalah tabungan akhir.** Bunga 4% dari Rp2.500.000 adalah Rp100.000. Tabungan akhirnya Rp2.600.000, bukan Rp100.000.

## Ringkasan

- Persen artinya per seratus: $a\% = \frac{a}{100}$.
- Bagian menjadi persen: jadikan penyebut 100, atau kalikan desimal dengan 100.
- a% dari keseluruhan: cari nilai 1% (bagi 100), lalu kali a.
- Diskon dikurangkan dari harga. PPN 11% ditambahkan ke harga.
- Bunga per tahun ditambahkan ke tabungan awal.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Ubah $\\frac{7}{20}$ menjadi persen.",
 "steps": [
  {
   "kind": "number",
   "prompt": "20 dikali berapa supaya menjadi 100?",
   "answer": "5",
   "hint": "20 × ? = 100.",
   "explain": "20 × 5 = 100.",
   "error": "salah-pengali-senilai"
  },
  {
   "kind": "number",
   "prompt": "Jadi $\\frac{7}{20}$ = ? %",
   "answer": "35",
   "hint": "Pembilang juga dikali 5.",
   "explain": "$\\frac{7}{20} = \\frac{35}{100} = 35\\%$.",
   "error": "salah-pengali-senilai",
   "suffix": "%"
  }
 ],
 "conclusion": "Jadi $\\frac{7}{20} = 35\\%$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Berapa 30% dari 450?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Nilai 1% = 450 ÷ 100 = ?",
   "answer": "4,5",
   "hint": "Geser koma 2 tempat ke kiri.",
   "explain": "1% dari 450 = 4,5.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "30% = 30 × 4,5 = ?",
   "answer": "135",
   "hint": "Atau 10% = 45, lalu dikali 3.",
   "explain": "30 × 4,5 = 135.",
   "error": "salah-fakta-kali"
  }
 ],
 "conclusion": "Jadi 30% dari 450 adalah 135."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Harga tas Rp220.000 dengan diskon 15%. Berapa harga yang dibayar?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Nilai 1% = ?",
   "answer": "2.200",
   "hint": "220.000 ÷ 100.",
   "explain": "1% = Rp2.200.",
   "error": "lupa-nol-tempat",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Diskon = 15 × 2.200 = ?",
   "answer": "33.000",
   "hint": "10 × 2.200 + 5 × 2.200.",
   "explain": "Diskon Rp33.000.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Harga bayar?",
   "answer": "187.000",
   "hint": "Harga awal dikurangi diskon.",
   "explain": "220.000 − 33.000 = 187.000.",
   "error": "salah-pilih-operasi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Harga yang dibayar Rp187.000."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Bu Siti berbelanja Rp300.000, belum termasuk PPN 11%. Berapa total yang ia bayar?",
 "steps": [
  {
   "kind": "number",
   "prompt": "PPN = 11 × 3.000 = ?",
   "answer": "33.000",
   "hint": "1% dari 300.000 adalah 3.000.",
   "explain": "PPN Rp33.000.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Total bayar?",
   "answer": "333.000",
   "hint": "PPN ditambahkan ke harga.",
   "explain": "300.000 + 33.000 = 333.000.",
   "error": "salah-pilih-operasi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Total yang dibayar Rp333.000."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Made menabung Rp1.800.000 dengan bunga 5% per tahun. Berapa tabungannya setelah 1 tahun?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Bunga = 5 × 18.000 = ?",
   "answer": "90.000",
   "hint": "1% dari 1.800.000 adalah 18.000.",
   "explain": "Bunga Rp90.000.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Tabungan setelah 1 tahun?",
   "answer": "1.890.000",
   "hint": "Bunga ditambahkan ke tabungan awal.",
   "explain": "1.800.000 + 90.000 = 1.890.000.",
   "error": "salah-fakta-tambah",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Tabungan Made menjadi Rp1.890.000."
}
```
