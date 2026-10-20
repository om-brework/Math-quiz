---
id: sd6-08-rata-rata
judul: Rata-rata
jenjang: sd6
moe: "Primary 6 · Statistics · Average"
prasyarat: [sd5-02-operasi-hitung-campuran]
durasi_menit: 40
---

## Kenapa belajar ini?

Guru menghitung nilai rata-rata ulanganmu untuk rapor. Ibu menghitung rata-rata belanja per hari. Rata-rata membantu kita melihat satu angka yang mewakili banyak angka. Di materi ini kamu juga belajar mencari nilai yang hilang dan menghitung rata-rata baru jika ada data tambahan.

## Analogi

Bayangkan ada **beberapa gelas berisi air**, tingginya tidak sama.

Kamu menuang air dari gelas yang penuh ke gelas yang sedikit, sampai **semua gelas sama tinggi**. Tinggi air yang sama itulah **rata-rata**.

Perhatikan dua hal:

- **Jumlah air seluruhnya tidak berubah.** Air hanya dipindah, tidak ditambah atau dibuang.
- Jumlah air = tinggi rata-rata × banyak gelas.

Gelas-gelas ini kita pakai di setiap contoh.

```anim
{"type": "batang", "title": "Air di tiga gelas", "bars": [{"label": "Gelas A", "units": 6}, {"label": "Gelas B", "units": 8}, {"label": "Gelas C", "units": 10}], "total": "24 cm air", "langkah": [{"say": "Gelas A berisi air setinggi 6 cm.", "bars": 1}, {"say": "Gelas B berisi 8 cm.", "bars": 2}, {"say": "Gelas C berisi 10 cm.", "bars": 3}, {"say": "Seluruhnya 6 + 8 + 10 = 24 cm air. Jumlah ini tidak berubah saat air dituang.", "bars": 3, "total": true}]}
```

## Konsep

### Rumus rata-rata

$$\text{rata-rata} = \frac{\text{jumlah semua nilai}}{\text{banyak data}}$$

Contoh: nilai 6, 8, dan 10. Jumlahnya $6 + 8 + 10 = 24$. Banyak data 3. Rata-rata $= 24 \div 3 = 8$.

Seperti gelas berisi 6, 8, dan 10 cm air. Setelah diratakan, tiap gelas berisi 8 cm.

```visual
{"type": "barChart", "title": "Sebelum diratakan", "unit": "cm", "scaleStep": 2, "max": 10, "bars": [{"label": "A", "value": 6}, {"label": "B", "value": 8}, {"label": "C", "value": 10}], "caption": "Tinggi air berbeda-beda: 6, 8, dan 10 cm."}
```

```visual
{"type": "barChart", "title": "Sesudah diratakan", "unit": "cm", "scaleStep": 2, "max": 10, "bars": [{"label": "A", "value": 8}, {"label": "B", "value": 8}, {"label": "C", "value": 8}], "caption": "Gelas C memberi 2 cm ke gelas A. Sekarang semua 8 cm: itulah rata-ratanya."}
```

### Segitiga hubungan

Tiga besaran saling berhubungan:

$$\text{jumlah} = \text{rata-rata} \times \text{banyak data}$$

$$\text{rata-rata} = \text{jumlah} \div \text{banyak data}$$

$$\text{banyak data} = \text{jumlah} \div \text{rata-rata}$$

Kalau dua diketahui, yang ketiga bisa dicari.

### Kunci soal cerita: cari jumlahnya dulu

Di soal nilai yang hilang atau data tambahan, rata-rata **tidak bisa langsung dijumlah atau dikurang**. Ubah dulu rata-rata menjadi **jumlah** (total air), baru dihitung.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menghitung rata-rata

```soal
{
 "title": "Contoh 1",
 "text": "Nilai ulangan Siti: 7, 9, 6, 10, dan 8. Berapa rata-ratanya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Jumlahkan semua nilai.",
   "answer": "40",
   "hint": "7 + 9 + 6 + 10 + 8. Pasangkan 7 + 9 dan 6 + 10 dulu.",
   "explain": "Jumlahnya 40, ini total air di semua gelas.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Ada berapa banyak data?",
   "answer": "5",
   "hint": "Hitung banyak nilai, bukan jumlahnya.",
   "explain": "Ada 5 nilai, seperti 5 gelas.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Bagi jumlah dengan banyak data.",
   "answer": "8",
   "hint": "40 ÷ 5.",
   "explain": "Rata-ratanya 8.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: apakah 8 masuk akal?",
   "options": [
    "Ya, 8 ada di antara 6 dan 10",
    "Tidak, harus lebih dari 10"
   ],
   "answer": "Ya, 8 ada di antara 6 dan 10",
   "hint": "Rata-rata selalu di antara nilai terkecil dan terbesar.",
   "explain": "8 di antara 6 dan 10, dan 8 × 5 = 40. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi rata-rata nilai Siti 8.",
 "visual": {
  "type": "barChart",
  "title": "Nilai ulangan Siti",
  "scaleStep": 2,
  "max": 10,
  "bars": [
   {
    "label": "U1",
    "value": 7
   },
   {
    "label": "U2",
    "value": 9
   },
   {
    "label": "U3",
    "value": 6
   },
   {
    "label": "U4",
    "value": 10
   },
   {
    "label": "U5",
    "value": 8
   }
  ]
 }
}
```

### Contoh 2: Mencari nilai yang hilang

```soal
{
 "title": "Contoh 2",
 "text": "Rata-rata uang jajan Budi dari Senin sampai Jumat adalah Rp12.000 per hari. Senin sampai Kamis ia menghabiskan Rp10.000, Rp15.000, Rp12.000, dan Rp9.000. Berapa uang jajannya hari Jumat?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Cari jumlah uang jajan 5 hari.",
   "answer": "60.000",
   "hint": "Jumlah = rata-rata × banyak hari.",
   "explain": "12.000 × 5 = Rp60.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jumlahkan uang Senin sampai Kamis.",
   "answer": "46.000",
   "hint": "10.000 + 15.000 + 12.000 + 9.000.",
   "explain": "Jumlahnya Rp46.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Uang jajan hari Jumat = ?",
   "answer": "14.000",
   "hint": "Jumlah seluruhnya dikurangi yang diketahui.",
   "explain": "60.000 − 46.000 = Rp14.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 60.000 ÷ 5 = ?",
   "answer": "12.000",
   "hint": "Jumlah semua 5 hari dibagi 5.",
   "explain": "Rp12.000, sama dengan rata-rata di soal. Benar.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Jadi uang jajan Budi hari Jumat Rp14.000."
}
```

### Contoh 3: Data ditambah

```soal
{
 "title": "Contoh 3",
 "text": "Rata-rata nilai 4 ulangan Siti adalah 75. Pada ulangan ke-5, ia mendapat 90. Berapa rata-rata nilainya sekarang?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Cari jumlah nilai 4 ulangan.",
   "answer": "300",
   "hint": "Rata-rata × banyak ulangan.",
   "explain": "75 × 4 = 300.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Tambahkan nilai baru.",
   "answer": "390",
   "hint": "300 + 90.",
   "explain": "Jumlah baru 390.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Sekarang ada berapa ulangan?",
   "answer": "5",
   "hint": "4 ulangan lama ditambah 1 ulangan baru.",
   "explain": "Ada 5 ulangan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Rata-rata baru = ?",
   "answer": "78",
   "hint": "390 ÷ 5.",
   "explain": "Rata-rata baru 78.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: kenapa rata-rata naik dari 75 ke 78?",
   "options": [
    "Nilai baru 90 lebih tinggi dari 75",
    "Karena banyak data bertambah",
    "Rata-rata selalu naik"
   ],
   "answer": "Nilai baru 90 lebih tinggi dari 75",
   "hint": "Bandingkan nilai baru dengan rata-rata lama.",
   "explain": "Gelas baru lebih tinggi, jadi rata-rata naik sedikit. Masuk akal.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi rata-rata nilai Siti sekarang 78."
}
```

### Contoh 4: Soal cerita, anggota baru bergabung

```soal
{
 "title": "Contoh 4",
 "text": "Rata-rata berat 6 anak di regu pramuka adalah 32 kg. Setelah Dimas bergabung, rata-rata berat regu menjadi 33 kg. Berapa berat Dimas?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Jumlah berat 6 anak sebelum Dimas = ?",
   "answer": "192",
   "hint": "32 × 6.",
   "explain": "192 kg.",
   "error": "salah-langkah-materi",
   "suffix": "kg"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Setelah Dimas bergabung, ada berapa anak?",
   "answer": "7",
   "hint": "6 anak ditambah Dimas.",
   "explain": "Ada 7 anak.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Jumlah berat 7 anak = ?",
   "answer": "231",
   "hint": "33 × 7.",
   "explain": "231 kg.",
   "error": "salah-langkah-materi",
   "suffix": "kg"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Berat Dimas = ?",
   "answer": "39",
   "hint": "Selisih jumlah sesudah dan sebelum.",
   "explain": "231 − 192 = 39 kg.",
   "error": "salah-langkah-materi",
   "suffix": "kg"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: (192 + 39) ÷ 7 = ?",
   "answer": "33",
   "hint": "231 ÷ 7.",
   "explain": "33 kg, sama dengan rata-rata baru. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "kg"
  }
 ],
 "conclusion": "Jadi berat Dimas 39 kg."
}
```

## Kesalahan yang sering terjadi

- **Lupa ada data bernilai 0.** Nilai 8, 0, 7 dirata-rata dengan $15 \div 2$. Salah. Ada 3 data, jadi $15 \div 3 = 5$. Gelas kosong tetap gelas.
- **Merata-rata dua rata-rata.** Pada Contoh 3, menghitung $(75 + 90) \div 2 = 82{,}5$. Salah, karena 75 mewakili 4 ulangan, bukan 1. Ubah dulu ke jumlah: 300.
- **Lupa menambah banyak data.** Pada Contoh 4, menghitung $33 \times 6$. Setelah Dimas bergabung, ada 7 anak.
- **Mengurangkan rata-rata.** Menjawab berat Dimas $33 - 32 = 1$ kg. Tidak masuk akal. Selalu ubah rata-rata menjadi jumlah dulu.
- **Tidak mengecek kewajaran.** Rata-rata harus di antara nilai terkecil dan terbesar. Kalau rata-rata nilai 6 sampai 10 hasilnya 12, pasti ada yang salah.

## Ringkasan

- Rata-rata $=$ jumlah semua nilai $\div$ banyak data.
- Jumlah $=$ rata-rata $\times$ banyak data.
- Rata-rata seperti menyamakan tinggi air di gelas. Jumlah airnya tetap.
- Nilai yang hilang $=$ jumlah seharusnya $-$ jumlah yang diketahui.
- Data ditambah: cari jumlah lama, tambahkan data baru, bagi dengan banyak data baru.
- Rata-rata selalu di antara nilai terkecil dan terbesar.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung rata-rata dari 12, 15, 9, 20, dan 14.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jumlah semua nilai = ?",
   "answer": "70",
   "hint": "12 + 15 + 9 + 20 + 14.",
   "explain": "Jumlahnya 70.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Rata-rata = ?",
   "answer": "14",
   "hint": "Ada 5 data.",
   "explain": "70 ÷ 5 = 14.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi rata-ratanya 14."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Rata-rata 8 bilangan adalah 25. Berapa jumlah kedelapan bilangan itu?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Rumus yang dipakai adalah ...",
   "options": [
    "jumlah = rata-rata × banyak data",
    "jumlah = rata-rata ÷ banyak data",
    "jumlah = rata-rata + banyak data"
   ],
   "answer": "jumlah = rata-rata × banyak data",
   "hint": "Total air = tinggi rata-rata × banyak gelas.",
   "explain": "Jumlah = 25 × 8.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "Jumlah kedelapan bilangan = ?",
   "answer": "200",
   "hint": "25 × 8.",
   "explain": "25 × 8 = 200.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi jumlahnya 200."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Tinggi 3 tanaman cabai Bu Ani rata-rata 20 cm. Dua tanaman tingginya 18 cm dan 24 cm. Berapa tinggi tanaman ketiga?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jumlah tinggi 3 tanaman = ?",
   "answer": "60",
   "hint": "20 × 3.",
   "explain": "60 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Tinggi tanaman ketiga = ?",
   "answer": "18",
   "hint": "60 − 18 − 24.",
   "explain": "60 − 42 = 18 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Jadi tinggi tanaman ketiga 18 cm."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Rata-rata nilai 5 ulangan Budi adalah 76. Nilai ulangan ke-6 adalah 88. Berapa rata-rata nilainya sekarang?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jumlah nilai 5 ulangan = ?",
   "answer": "380",
   "hint": "76 × 5.",
   "explain": "380.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Jumlah nilai 6 ulangan = ?",
   "answer": "468",
   "hint": "380 + 88.",
   "explain": "468.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Rata-rata baru = ?",
   "answer": "78",
   "hint": "Bagi dengan 6, bukan 5.",
   "explain": "468 ÷ 6 = 78.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi rata-rata nilai Budi sekarang 78."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Rata-rata tabungan 4 anak adalah Rp45.000. Setelah tabungan Dina ikut dihitung, rata-rata tabungan 5 anak menjadi Rp48.000. Berapa tabungan Dina?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jumlah tabungan 4 anak = ?",
   "answer": "180.000",
   "hint": "45.000 × 4.",
   "explain": "Rp180.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Jumlah tabungan 5 anak = ?",
   "answer": "240.000",
   "hint": "48.000 × 5.",
   "explain": "Rp240.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Tabungan Dina = ?",
   "answer": "60.000",
   "hint": "Selisih kedua jumlah.",
   "explain": "240.000 − 180.000 = Rp60.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Jadi tabungan Dina Rp60.000."
}
```
