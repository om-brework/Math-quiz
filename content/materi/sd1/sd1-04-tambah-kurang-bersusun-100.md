---
id: sd1-04-tambah-kurang-bersusun-100
judul: Penjumlahan dan Pengurangan Bersusun sampai 100
jenjang: sd1
moe: "Primary 1 · Number and Algebra · Addition and Subtraction"
prasyarat: [sd1-01-bilangan-sampai-100, sd1-03-konsep-tambah-kurang]
durasi_menit: 35
---

## Kenapa belajar ini?

Bu guru punya 47 buku tulis dan membeli 38 lagi. Berapa semuanya? Bilangan seperti ini sulit dihitung dengan jari. Cara bersusun membuat hitungan rapi dan jarang salah.

## Analogi

Ingat lagi **stik es krim**. Setiap 10 stik diikat menjadi **1 ikat** (puluhan). Stik yang belum cukup 10 dibiarkan **lepas** (satuan).

Kita punya dua kotak:

- **kotak kanan** untuk stik lepas (satuan),
- **kotak kiri** untuk ikatan (puluhan).

Dua aturan penting:

- **Menyimpan.** Kalau stik lepas sudah ada 10 atau lebih, ikat 10 stik menjadi 1 ikat. Pindahkan ikatan itu ke kotak puluhan.
- **Meminjam.** Kalau stik lepas kurang untuk diambil, buka 1 ikat. Sekarang ada 10 stik lepas tambahan.

Lihat cara **menyimpan**: 10 stik lepas diikat menjadi 1 ikat.

```anim
{"type": "stik", "op": "+", "a": 47, "b": 38, "title": "Menyimpan: 47 + 38"}
```

Lihat cara **meminjam**: 1 ikat dibuka menjadi 10 stik lepas.

```anim
{"type": "stik", "op": "-", "a": 73, "b": 28, "title": "Meminjam: 73 − 28"}
```

## Konsep

### Menyusun menurut nilai tempat

Tulis bilangan **satu di bawah yang lain**. Satuan di bawah satuan. Puluhan di bawah puluhan.

```visual
{"type": "base10", "tens": 4, "ones": 7, "caption": "47 = 4 puluhan dan 7 satuan"}
```

```
  Puluhan  Satuan
     4       7
+    3       8
```

Bilangan satu angka ditulis di kolom **satuan**, yaitu di kanan:

```
  4 5
+   3
-----
  4 8
```

### Selalu mulai dari kanan

Hitung kolom **satuan dulu**, baru puluhan. Ini sama seperti mengurus stik lepas dulu. Dengan begitu kita tahu apakah perlu menyimpan atau meminjam.

### Penjumlahan dengan menyimpan

Kalau jumlah satuan **10 atau lebih**, tulis angka satuannya saja. Angka puluhannya (biasanya 1) **disimpan** di atas kolom puluhan. Ini seperti mengikat 10 stik dan memindahkannya ke kotak kiri.

### Pengurangan dengan meminjam

Kalau angka satuan atas **lebih kecil** dari angka satuan bawah, kita **meminjam** 1 puluhan. Angka puluhan atas berkurang 1. Angka satuan atas bertambah 10. Ini seperti membuka 1 ikat menjadi 10 stik lepas.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Penjumlahan tanpa menyimpan

**Soal.** 34 + 25 = ...

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung $34 + 25$ dengan cara bersusun.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Susun. Angka 5 (dari 25) ditulis di bawah angka berapa?",
   "options": [
    "4 (satuan)",
    "3 (puluhan)"
   ],
   "answer": "4 (satuan)",
   "hint": "5 adalah satuan. Satuan ditulis di bawah satuan.",
   "explain": "Satuan di bawah satuan: 5 di bawah 4. Puluhan di bawah puluhan: 2 di bawah 3.",
   "error": "susun-tidak-lurus"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jumlahkan satuan. 4 + 5 = ?",
   "answer": "9",
   "hint": "Hitung stik lepas: 4 stik ditambah 5 stik.",
   "explain": "4 + 5 = 9. Kurang dari 10, jadi tidak perlu menyimpan. Tulis 9.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "choice",
   "prompt": "Apakah perlu menyimpan?",
   "options": [
    "Ya, simpan 1 ke puluhan",
    "Tidak perlu menyimpan"
   ],
   "answer": "Tidak perlu menyimpan",
   "hint": "Menyimpan hanya kalau hasil satuan 10 atau lebih.",
   "explain": "9 kurang dari 10, jadi tidak ada yang disimpan.",
   "error": "simpan-tidak-perlu"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Jumlahkan puluhan. 3 + 2 = ?",
   "answer": "5",
   "hint": "Hitung ikatan: 3 ikat ditambah 2 ikat.",
   "explain": "3 + 2 = 5. Tulis 5 di kolom puluhan.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "number",
   "prompt": "Jadi 34 + 25 = ?",
   "answer": "59",
   "hint": "Puluhan 5, satuan 9.",
   "explain": "5 puluhan dan 9 satuan = 59.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 59 − 25 = ?",
   "answer": "34",
   "hint": "Kalau benar, hasilnya kembali ke 34.",
   "explain": "59 − 25 = 34, kembali ke bilangan awal. Jawaban benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 34 + 25 = 59."
}
```

### Contoh 2: Penjumlahan dengan menyimpan

**Soal.** 47 + 38 = ...

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung $47 + 38$ dengan cara bersusun.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Jumlahkan satuan. 7 + 8 = ?",
   "answer": "15",
   "hint": "Buat 10 dulu: 7 + 3 = 10, lalu tambah 5 lagi.",
   "explain": "7 + 8 = 15 stik lepas: cukup untuk 1 ikat dan 5 lepas.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "choice",
   "prompt": "15 lebih dari 9. Apa yang dilakukan?",
   "options": [
    "Ya, simpan 1 ke puluhan",
    "Tidak perlu menyimpan"
   ],
   "answer": "Ya, simpan 1 ke puluhan",
   "hint": "Kalau hasil satuan 10 atau lebih, ikat 10 stik menjadi 1 ikat.",
   "explain": "Tulis 5 di satuan, simpan 1 di atas puluhan.",
   "error": "lupa-simpan"
  },
  {
   "kind": "column",
   "op": "+",
   "a": 47,
   "b": 38,
   "prompt": "Langkah 2: Kerjakan bersusun. Tulis satuan dulu, lalu ketuk kotak kecil di atas puluhan dan tulis simpanannya.",
   "hint": "Satuan 5, simpanan 1, puluhan 1 + 4 + 3.",
   "explain": "Satuan 5, simpan 1, puluhan 1 + 4 + 3 = 8."
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 85 − 38 = ?",
   "answer": "47",
   "hint": "Kurangkan bersusun: 15 − 8, lalu 7 − 3.",
   "explain": "85 − 38 = 47. Kembali ke bilangan awal, jadi benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 47 + 38 = 85."
}
```

### Contoh 3: Pengurangan tanpa meminjam

**Soal.** 68 − 23 = ...

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung $68 - 23$ dengan cara bersusun.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Lihat satuan. Atas 8, bawah 3. Perlu meminjam?",
   "options": [
    "Ya, pinjam 1 dari puluhan",
    "Tidak perlu meminjam"
   ],
   "answer": "Tidak perlu meminjam",
   "hint": "Meminjam hanya kalau angka atas lebih kecil dari angka bawah.",
   "explain": "8 lebih besar dari 3, jadi tidak perlu meminjam.",
   "error": "pinjam-tidak-perlu"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kurangkan satuan. 8 − 3 = ?",
   "answer": "5",
   "hint": "Ambil 3 stik dari 8 stik.",
   "explain": "8 − 3 = 5. Tulis 5.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Kurangkan puluhan. 6 − 2 = ?",
   "answer": "4",
   "hint": "Ambil 2 ikat dari 6 ikat.",
   "explain": "6 − 2 = 4. Tulis 4.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "number",
   "prompt": "Jadi 68 − 23 = ?",
   "answer": "45",
   "hint": "Puluhan 4, satuan 5.",
   "explain": "4 puluhan dan 5 satuan = 45.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 45 + 23 = ?",
   "answer": "68",
   "hint": "Kalau benar, hasilnya 68.",
   "explain": "45 + 23 = 68. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 68 − 23 = 45."
}
```

### Contoh 4: Pengurangan dengan meminjam

**Soal.** 73 − 28 = ...

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung $73 - 28$ dengan cara bersusun.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Lihat satuan. Atas 3, bawah 8. Perlu meminjam?",
   "options": [
    "Ya, pinjam 1 dari puluhan",
    "Tidak perlu meminjam"
   ],
   "answer": "Ya, pinjam 1 dari puluhan",
   "hint": "3 stik tidak cukup untuk diambil 8.",
   "explain": "3 lebih kecil dari 8, jadi pinjam 1 ikat dari puluhan.",
   "error": "lupa-pinjam"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Pinjam. Puluhan 7 menjadi berapa?",
   "answer": "6",
   "hint": "Satu ikat diambil dari 7 ikat.",
   "explain": "7 − 1 = 6. Coret 7, tulis 6.",
   "error": "salah-pinjam"
  },
  {
   "kind": "number",
   "prompt": "Satuan 3 menjadi berapa?",
   "answer": "13",
   "hint": "Satu ikat dibuka menjadi 10 stik, ditambah 3 stik yang sudah ada.",
   "explain": "3 + 10 = 13.",
   "error": "salah-pinjam"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Kurangkan satuan. 13 − 8 = ?",
   "answer": "5",
   "hint": "Dari 13 mundur 8 langkah, atau 8 + ? = 13.",
   "explain": "13 − 8 = 5. Tulis 5.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Kurangkan puluhan. 6 − 2 = ?",
   "answer": "4",
   "hint": "Pakai 6, bukan 7, karena satu ikat sudah dipinjam.",
   "explain": "6 − 2 = 4. Tulis 4.",
   "error": "salah-pinjam"
  },
  {
   "kind": "number",
   "prompt": "Jadi 73 − 28 = ?",
   "answer": "45",
   "hint": "Puluhan 4, satuan 5.",
   "explain": "4 puluhan dan 5 satuan = 45.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 45 + 28 = ?",
   "answer": "73",
   "hint": "Jumlahkan bersusun: 5 + 8 = 13, simpan 1.",
   "explain": "45 + 28 = 73. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 73 − 28 = 45."
}
```

### Contoh 5: Soal cerita

**Soal.** Bu Siti punya 52 telur. Sebanyak 37 telur terjual. Berapa telur yang tersisa?

```soal
{
 "title": "Kerjakan bersama",
 "text": "Bu Siti punya 52 telur. Sebanyak 37 telur terjual. Berapa telur yang tersisa?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Hitungan apa yang dipakai?",
   "options": [
    "52 + 37",
    "52 − 37"
   ],
   "answer": "52 − 37",
   "hint": "Telur yang terjual diambil dari 52.",
   "explain": "Terjual berarti diambil, jadi pengurangan: 52 − 37.",
   "error": "salah-pilih-tambah-kurang"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Lihat satuan. Atas 2, bawah 7. Perlu meminjam?",
   "options": [
    "Ya, pinjam 1 dari puluhan",
    "Tidak perlu meminjam"
   ],
   "answer": "Ya, pinjam 1 dari puluhan",
   "hint": "Bandingkan 2 dan 7.",
   "explain": "2 lebih kecil dari 7, jadi pinjam 1 puluhan.",
   "error": "lupa-pinjam"
  },
  {
   "kind": "column",
   "op": "-",
   "a": 52,
   "b": 37,
   "prompt": "Langkah 3: Kerjakan bersusun. Ketuk kotak kecil untuk menulis pinjaman: puluhan 5 menjadi 4, satuan 2 menjadi 12.",
   "hint": "Puluhan 4, satuan 12. Lalu 12 − 7 dan 4 − 3.",
   "explain": "12 − 7 = 5, lalu 4 − 3 = 1. Hasilnya 15."
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Tulis jawabannya. Sisa berapa telur?",
   "answer": "15",
   "hint": "Hasil pengurangan tadi.",
   "explain": "Sisa 15 telur.",
   "error": "salah-langkah-materi",
   "suffix": "telur"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 15 + 37 = ?",
   "answer": "52",
   "hint": "Telur sisa ditambah telur terjual.",
   "explain": "15 + 37 = 52. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Sisa 15 telur.",
 "visual": {
  "type": "objects",
  "item": "kue",
  "count": 52,
  "crossed": 37
 }
}
```

## Kesalahan yang sering terjadi

- **Menyusun tidak lurus.** Menulis 45 + 3 dengan 3 di bawah 4, lalu menjawab 75. Angka 3 adalah satuan, jadi tulis di bawah 5. Jawaban benar 48.
- **Lupa angka simpanan.** Pada 47 + 38, menjawab 75 karena lupa menambah 1. Ikatan baru harus ikut dihitung.
- **Membalik pengurangan satuan.** Pada 73 − 28, menghitung 8 − 3 = 5 di satuan, lalu menjawab 55. Satuan atas selalu dikurangi satuan bawah. Kalau tidak cukup, pinjam dulu.
- **Lupa mengurangi puluhan setelah meminjam.** Sudah meminjam, tetapi tetap memakai 7 puluhan sehingga menjawab 55. Ikatan yang dibuka harus dicoret: 7 menjadi 6.
- **Mulai dari kiri.** Menjumlahkan puluhan dulu membuat simpanan tidak tercatat. Selalu mulai dari satuan.

## Ringkasan

- Susun lurus: satuan di bawah satuan, puluhan di bawah puluhan.
- Selalu mulai dari kolom **satuan** (kanan).
- Menyimpan: satuan 10 atau lebih, tulis satuannya, simpan 1 ke puluhan.
- Meminjam: satuan atas kurang, puluhan atas dikurangi 1, satuan atas ditambah 10.
- Cek penjumlahan dengan pengurangan, dan cek pengurangan dengan penjumlahan.

## Cek pemahaman

Kerjakan sendiri langkah demi langkah.

```soal
{
 "title": "Soal 1",
 "text": "Hitung $42 + 36$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Satuan: 2 + 6. Perlu menyimpan?",
   "options": [
    "Ya, simpan 1 ke puluhan",
    "Tidak perlu menyimpan"
   ],
   "answer": "Tidak perlu menyimpan",
   "hint": "Hitung 2 + 6 dulu.",
   "explain": "2 + 6 = 8, kurang dari 10.",
   "error": "simpan-tidak-perlu"
  },
  {
   "kind": "column",
   "op": "+",
   "a": 42,
   "b": 36,
   "prompt": "Kerjakan bersusun.",
   "hint": "Satuan 2 + 6, puluhan 4 + 3.",
   "explain": "Satuan 8, puluhan 7. Hasilnya 78."
  }
 ],
 "conclusion": "Jadi 42 + 36 = 78."
}
```

```soal
{
 "title": "Soal 2",
 "text": "Hitung $59 + 27$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Satuan: 9 + 7 = ?",
   "answer": "16",
   "hint": "Buat 10: 9 + 1 = 10, lalu tambah 6.",
   "explain": "9 + 7 = 16.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "choice",
   "prompt": "Perlu menyimpan?",
   "options": [
    "Ya, simpan 1 ke puluhan",
    "Tidak perlu menyimpan"
   ],
   "answer": "Ya, simpan 1 ke puluhan",
   "hint": "16 lebih dari 9.",
   "explain": "Tulis 6, simpan 1.",
   "error": "lupa-simpan"
  },
  {
   "kind": "column",
   "op": "+",
   "a": 59,
   "b": 27,
   "prompt": "Kerjakan bersusun. Jangan lupa kotak simpanan.",
   "hint": "Satuan 6, simpanan 1, puluhan 1 + 5 + 2.",
   "explain": "Satuan 6, puluhan 8. Hasilnya 86."
  }
 ],
 "conclusion": "Jadi 59 + 27 = 86."
}
```

```soal
{
 "title": "Soal 3",
 "text": "Hitung $87 - 54$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Satuan: atas 7, bawah 4. Perlu meminjam?",
   "options": [
    "Ya, pinjam 1 dari puluhan",
    "Tidak perlu meminjam"
   ],
   "answer": "Tidak perlu meminjam",
   "hint": "Bandingkan 7 dan 4.",
   "explain": "7 lebih besar dari 4.",
   "error": "pinjam-tidak-perlu"
  },
  {
   "kind": "column",
   "op": "-",
   "a": 87,
   "b": 54,
   "prompt": "Kerjakan bersusun.",
   "hint": "Satuan 7 − 4, puluhan 8 − 5.",
   "explain": "Satuan 3, puluhan 3. Hasilnya 33."
  }
 ],
 "conclusion": "Jadi 87 − 54 = 33."
}
```

```soal
{
 "title": "Soal 4",
 "text": "Hitung $60 - 24$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Satuan: atas 0, bawah 4. Perlu meminjam?",
   "options": [
    "Ya, pinjam 1 dari puluhan",
    "Tidak perlu meminjam"
   ],
   "answer": "Ya, pinjam 1 dari puluhan",
   "hint": "Bisakah mengambil 4 dari 0?",
   "explain": "0 lebih kecil dari 4, jadi pinjam.",
   "error": "lupa-pinjam"
  },
  {
   "kind": "number",
   "prompt": "Setelah meminjam, satuan 0 menjadi berapa?",
   "answer": "10",
   "hint": "Satu ikat dibuka menjadi 10 stik.",
   "explain": "0 + 10 = 10.",
   "error": "salah-pinjam"
  },
  {
   "kind": "column",
   "op": "-",
   "a": 60,
   "b": 24,
   "prompt": "Kerjakan bersusun. Tulis pinjamannya di kotak kecil.",
   "hint": "Puluhan 5, satuan 10. Lalu 10 − 4 dan 5 − 2.",
   "explain": "Satuan 6, puluhan 3. Hasilnya 36."
  }
 ],
 "conclusion": "Jadi 60 − 24 = 36."
}
```

```soal
{
 "title": "Soal 5",
 "text": "Ada 46 penumpang di kereta. Di stasiun, 18 orang naik lagi. Tidak ada yang turun. Berapa penumpang sekarang?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Hitungan apa yang dipakai?",
   "options": [
    "46 + 18",
    "46 − 18"
   ],
   "answer": "46 + 18",
   "hint": "Penumpang naik berarti bertambah.",
   "explain": "Bertambah, jadi penjumlahan.",
   "error": "salah-pilih-tambah-kurang"
  },
  {
   "kind": "column",
   "op": "+",
   "a": 46,
   "b": 18,
   "prompt": "Kerjakan bersusun.",
   "hint": "Satuan 6 + 8 = 14, tulis 4 simpan 1.",
   "explain": "Satuan 4, puluhan 1 + 4 + 1 = 6. Hasilnya 64."
  },
  {
   "kind": "number",
   "prompt": "Berapa penumpang sekarang?",
   "answer": "64",
   "hint": "Hasil penjumlahan tadi.",
   "explain": "Ada 64 penumpang.",
   "error": "salah-langkah-materi",
   "suffix": "orang"
  }
 ],
 "conclusion": "Sekarang ada 64 penumpang."
}
```
