---
id: sd6-02-persen-lanjut
judul: Persen Lanjut
jenjang: sd6
moe: "Primary 6 · Number and Algebra · Percentage"
prasyarat: [sd5-06-persen]
durasi_menit: 45
---

## Kenapa belajar ini?

Toko menulis "diskon 20%", berita menulis "harga cabai naik 15%". Kadang kita tahu bagiannya, tetapi tidak tahu jumlah seluruhnya. Di materi ini kamu belajar mencari keseluruhan dari persen, dan menghitung persen kenaikan atau penurunan.

## Analogi

Bayangkan keseluruhan sebagai **satu batang cokelat** yang dibagi menjadi **10 kotak sama besar**.

- Satu batang utuh = **100%**.
- Satu kotak = **10%**.

Kalau kamu tahu nilai beberapa kotak, kamu bisa mencari nilai **satu kotak** dulu. Setelah itu, nilai satu batang (100%) tinggal dikalikan.

Batang cokelat ini kita gambar sebagai **model batang** di setiap contoh.

```visual
{"type": "fraction", "shape": "bar", "parts": 10, "shaded": 3, "caption": "Satu batang utuh = 100%. Satu kotak = 10%. Tiga kotak yang diarsir = 30%."}
```

## Konsep

### Mengingat kembali: persen

**Persen** artinya "per seratus". $25\% = \frac{25}{100}$.

Mencari persen dari suatu jumlah: $20\%$ dari $300 = \frac{20}{100} \times 300 = 60$.

### Mencari keseluruhan jika bagian dan persen diketahui

Contoh: $30\%$ dari tabungan Siti adalah Rp45.000. Berapa seluruh tabungannya?

```anim
{"type": "batang", "title": "30% tabungan = Rp45.000", "bars": [{"label": "30%", "units": 3, "unitValue": "10%", "known": "Rp45.000"}, {"label": "Seluruh", "units": 10, "unitValue": "10%"}], "total": "100% = ?", "langkah": [{"say": "Tiga kotak (30%) bernilai Rp45.000.", "bars": 1}, {"say": "Satu kotak (10%) = Rp45.000 ÷ 3 = Rp15.000.", "bars": 1}, {"say": "Batang utuh punya 10 kotak.", "bars": 2}, {"say": "100% = Rp15.000 × 10 = Rp150.000.", "bars": 2, "total": true}]}
```

- 30% = Rp45.000
- 10% = Rp45.000 ÷ 3 = Rp15.000 (nilai satu kotak)
- 100% = Rp15.000 × 10 = Rp150.000

Cara lain lewat 1%: $1\% = 45.000 \div 30 = 1.500$, lalu $100\% = 1.500 \times 100 = 150.000$.

Pilih cara yang angkanya paling mudah. Langkah kuncinya selalu sama: **cari nilai satu bagian kecil dulu**.

### Persentase kenaikan

Kalau suatu nilai naik, kita bandingkan **besar kenaikannya** dengan **nilai awal**.

$$\text{persentase kenaikan} = \frac{\text{kenaikan}}{\text{nilai awal}} \times 100\%$$

### Persentase penurunan

$$\text{persentase penurunan} = \frac{\text{penurunan}}{\text{nilai awal}} \times 100\%$$

Kenapa selalu dibagi **nilai awal**? Karena nilai awal adalah batang cokelat utuh kita, yaitu 100%. Perubahan diukur terhadap batang awal itu.

```visual
{"type": "barModel", "bars": [{"label": "Nilai awal", "units": 10, "unitValue": "10%"}, {"label": "Nilai baru", "units": 12, "unitValue": "10%"}], "caption": "Nilai awal = 10 kotak (100%). Nilai baru bertambah 2 kotak, jadi naik 20% dari nilai awal."}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Mencari keseluruhan

```soal
{
 "title": "Contoh 1",
 "text": "Di kelas Bu Rina, 25% siswa memilih voli. Banyaknya 10 siswa. Berapa jumlah seluruh siswa?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tulis yang diketahui. Angka 10 siswa itu berapa persen?",
   "options": [
    "25%",
    "100%",
    "75%"
   ],
   "answer": "25%",
   "hint": "Baca lagi: siapa yang berjumlah 10?",
   "explain": "10 siswa adalah yang memilih voli, yaitu 25%. Yang dicari 100%.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Batang utuh (100%) terdiri dari berapa bagian 25%?",
   "answer": "4",
   "hint": "25% + 25% + ... sampai 100%.",
   "explain": "100% ÷ 25% = 4 bagian.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Satu bagian = 10 siswa. Berapa siswa dalam 4 bagian?",
   "answer": "40",
   "hint": "4 × 10.",
   "explain": "100% = 4 × 10 = 40 siswa.",
   "error": "salah-langkah-materi",
   "suffix": "siswa"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 25% dari 40 = ?",
   "answer": "10",
   "hint": "$\\frac{25}{100} \\times 40$, atau seperempat dari 40.",
   "explain": "Hasilnya 10 siswa. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi jumlah seluruh siswa 40 orang.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Voli",
    "units": 1,
    "unitValue": "25%",
    "known": "10 anak"
   },
   {
    "label": "Semua",
    "units": 4,
    "unitValue": "25%"
   }
  ],
  "total": "100% = ?"
 }
}
```

### Contoh 2: Persentase kenaikan

```soal
{
 "title": "Contoh 2",
 "text": "Harga semangkuk bakso naik dari Rp20.000 menjadi Rp23.000. Berapa persen kenaikannya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Cari besar kenaikan.",
   "answer": "3.000",
   "hint": "Harga baru dikurangi harga lama.",
   "explain": "23.000 − 20.000 = 3.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Nilai awal (100%) adalah ...",
   "options": [
    "Rp20.000",
    "Rp23.000",
    "Rp3.000"
   ],
   "answer": "Rp20.000",
   "hint": "Nilai awal adalah harga sebelum naik.",
   "explain": "Harga sebelum naik, Rp20.000, menjadi batang utuh.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung $\\frac{3.000}{20.000} \\times 100\\%$.",
   "answer": "15",
   "hint": "$\\frac{3.000}{20.000} = \\frac{3}{20}$, lalu kali 100.",
   "explain": "$\\frac{3}{20} \\times 100\\% = 15\\%$.",
   "error": "salah-langkah-materi",
   "suffix": "%"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 15% dari Rp20.000 = ?",
   "answer": "3.000",
   "hint": "10% = 2.000, 5% = 1.000.",
   "explain": "2.000 + 1.000 = 3.000, dan 20.000 + 3.000 = 23.000. Benar.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Jadi harga bakso naik 15%."
}
```

### Contoh 3: Persentase penurunan

```soal
{
 "title": "Contoh 3",
 "text": "Bulan lalu ada 1.250 pengunjung perpustakaan. Bulan ini ada 1.000 pengunjung. Berapa persen penurunannya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Cari besar penurunan.",
   "answer": "250",
   "hint": "Bulan lalu dikurangi bulan ini.",
   "explain": "1.250 − 1.000 = 250 pengunjung.",
   "error": "salah-langkah-materi",
   "suffix": "orang"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Nilai awal (100%) adalah ...",
   "options": [
    "1.250",
    "1.000",
    "250"
   ],
   "answer": "1.250",
   "hint": "Nilai awal adalah keadaan sebelum berubah.",
   "explain": "Bulan lalu, 1.250, adalah nilai awal. Bukan 1.000.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung $\\frac{250}{1.250} \\times 100\\%$.",
   "answer": "20",
   "hint": "250 masuk berapa kali ke 1.250?",
   "explain": "$\\frac{250}{1.250} = \\frac{1}{5}$, dan $\\frac{1}{5} \\times 100\\% = 20\\%$.",
   "error": "salah-langkah-materi",
   "suffix": "%"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 1.250 − (20% dari 1.250) = ?",
   "answer": "1.000",
   "hint": "20% dari 1.250 = 250.",
   "explain": "1.250 − 250 = 1.000. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi jumlah pengunjung turun 20%."
}
```

### Contoh 4: Soal cerita diskon, mencari harga awal

```soal
{
 "title": "Contoh 4",
 "text": "Made membeli sepatu dengan diskon 20%. Setelah diskon, ia membayar Rp240.000. Berapa harga sepatu sebelum diskon?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Harga awal = 100%. Yang dibayar Made berapa persen dari harga awal?",
   "answer": "80",
   "hint": "Harga awal dikurangi diskon.",
   "explain": "100% − 20% = 80%. Jadi Rp240.000 adalah 80%, bukan 100%.",
   "error": "salah-langkah-materi",
   "suffix": "%"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Batang dibagi 10 kotak, tiap kotak 10%. 80% terdiri dari berapa kotak?",
   "answer": "8",
   "hint": "Satu kotak 10%.",
   "explain": "80% = 8 kotak.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Cari nilai satu kotak (10%).",
   "answer": "30.000",
   "hint": "240.000 ÷ 8.",
   "explain": "10% = Rp30.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Cari harga awal (100%).",
   "answer": "300.000",
   "hint": "10 kotak × nilai satu kotak.",
   "explain": "100% = 30.000 × 10 = Rp300.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: harga awal dikurangi diskon 20% = ?",
   "answer": "240.000",
   "hint": "20% dari 300.000 = 60.000.",
   "explain": "300.000 − 60.000 = 240.000. Benar.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Jadi harga sepatu sebelum diskon Rp300.000.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Dibayar",
    "units": 8,
    "unitValue": "10%",
    "known": "Rp240.000"
   },
   {
    "label": "Harga awal",
    "units": 10,
    "unitValue": "10%"
   }
  ],
  "total": "100% = ?"
 }
}
```

## Kesalahan yang sering terjadi

- **Membagi dengan nilai akhir.** Pada Contoh 3, menghitung $\frac{250}{1.000} = 25\%$. Salah, karena perubahan dibandingkan dengan nilai awal. Benar: $\frac{250}{1.250} = 20\%$.
- **Menghitung persen dari angka yang diketahui.** Pada Contoh 4, menghitung $20\%$ dari Rp240.000 lalu ditambahkan, hasilnya Rp288.000. Salah, karena Rp240.000 bukan 100%, melainkan 80%. Selalu tanyakan: "Angka ini berapa persen?"
- **Lupa mengurangi untuk mencari kenaikan.** Menghitung $\frac{23.000}{20.000} \times 100\% = 115\%$ lalu menjawab "naik 115%". Itu persentase harga baru terhadap harga lama. Kenaikannya hanya $115\% - 100\% = 15\%$.
- **Lupa menulis tanda %.** Menjawab "15" padahal yang ditanya persen. Tulis "15%".

## Ringkasan

- Keseluruhan selalu 100%. Kalau bagiannya diketahui, cari nilai satu bagian kecil dulu (1% atau 10%), lalu kalikan ke 100%.
- Diskon $d\%$ artinya harga bayar $= (100 - d)\%$ dari harga awal.
- Persentase kenaikan $= \frac{\text{kenaikan}}{\text{nilai awal}} \times 100\%$.
- Persentase penurunan $= \frac{\text{penurunan}}{\text{nilai awal}} \times 100\%$.
- Selalu bagi dengan **nilai awal**.
- Gambar model batang untuk soal cerita.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "15% dari suatu bilangan adalah 30. Berapa bilangan itu?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Cari nilai 1%.",
   "answer": "2",
   "hint": "15% = 30, jadi 1% = 30 ÷ 15.",
   "explain": "1% = 2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cari nilai 100%.",
   "answer": "200",
   "hint": "Kalikan nilai 1% dengan 100.",
   "explain": "100% = 2 × 100 = 200.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi bilangan itu 200."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Harga sekilo jeruk naik dari Rp50.000 menjadi Rp56.000. Berapa persen kenaikannya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa besar kenaikannya?",
   "answer": "6.000",
   "hint": "Harga baru dikurangi harga lama.",
   "explain": "56.000 − 50.000 = 6.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Berapa persen kenaikannya?",
   "answer": "12",
   "hint": "$\\frac{6.000}{50.000} \\times 100\\%$. Bagi dengan nilai awal.",
   "explain": "$\\frac{6}{50} \\times 100\\% = 12\\%$.",
   "error": "salah-langkah-materi",
   "suffix": "%"
  }
 ],
 "conclusion": "Jadi harga jeruk naik 12%."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Berat badan Pak Dodi turun dari 80 kg menjadi 72 kg. Berapa persen penurunannya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa besar penurunannya?",
   "answer": "8",
   "hint": "80 − 72.",
   "explain": "Turun 8 kg.",
   "error": "salah-langkah-materi",
   "suffix": "kg"
  },
  {
   "kind": "number",
   "prompt": "Berapa persen penurunannya?",
   "answer": "10",
   "hint": "$\\frac{8}{80} \\times 100\\%$.",
   "explain": "$\\frac{8}{80} = \\frac{1}{10} = 10\\%$.",
   "error": "salah-langkah-materi",
   "suffix": "%"
  }
 ],
 "conclusion": "Jadi berat badan Pak Dodi turun 10%."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Putu sudah membaca 35% halaman sebuah buku, yaitu 84 halaman. Berapa halaman buku itu seluruhnya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "35% terdiri dari berapa bagian 5%?",
   "answer": "7",
   "hint": "35 ÷ 5.",
   "explain": "35% = 7 × 5%.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Berapa halaman dalam 5%?",
   "answer": "12",
   "hint": "84 ÷ 7.",
   "explain": "5% = 12 halaman.",
   "error": "salah-langkah-materi",
   "suffix": "halaman"
  },
  {
   "kind": "number",
   "prompt": "Berapa halaman dalam 100%?",
   "answer": "240",
   "hint": "100% terdiri dari 20 bagian 5%.",
   "explain": "100% = 12 × 20 = 240 halaman.",
   "error": "salah-langkah-materi",
   "suffix": "halaman"
  }
 ],
 "conclusion": "Jadi buku itu 240 halaman."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Setelah diskon 25%, sebuah tas dijual Rp180.000. Berapa harga tas sebelum diskon?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Rp180.000 itu berapa persen dari harga awal?",
   "answer": "75",
   "hint": "100% dikurangi diskon.",
   "explain": "100% − 25% = 75%.",
   "error": "salah-langkah-materi",
   "suffix": "%"
  },
  {
   "kind": "number",
   "prompt": "Berapa nilai 25%?",
   "answer": "60.000",
   "hint": "75% = 3 bagian 25%. Bagi 180.000 dengan 3.",
   "explain": "25% = Rp60.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Berapa harga sebelum diskon (100%)?",
   "answer": "240.000",
   "hint": "100% = 4 bagian 25%.",
   "explain": "60.000 × 4 = Rp240.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Jadi harga tas sebelum diskon Rp240.000.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Dibayar",
    "units": 3,
    "unitValue": "25%",
    "known": "Rp180.000"
   },
   {
    "label": "Harga awal",
    "units": 4,
    "unitValue": "25%"
   }
  ],
  "total": "100% = ?"
 }
}
```
