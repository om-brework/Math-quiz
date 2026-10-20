---
id: sd2-02-tambah-kurang-bersusun-1000
judul: Penjumlahan dan Pengurangan Bersusun sampai 1.000
jenjang: sd2
moe: "Primary 2 · Number and Algebra · Addition and Subtraction"
prasyarat: [sd1-04-tambah-kurang-bersusun-100, sd2-01-bilangan-sampai-1000]
durasi_menit: 35
---

## Kenapa belajar ini?

Toko buku punya 325 buku, lalu datang 186 buku lagi. Berapa semuanya? Bilangannya terlalu besar untuk dihitung dengan jari. Hitung bersusun membantu kamu menjumlah dan mengurang dengan rapi, kolom demi kolom.

## Analogi

Ingat lagi toko permen:

- **Butir** = satuan.
- **Bungkus** berisi 10 butir = puluhan.
- **Kotak** berisi 10 bungkus = ratusan.

```visual
{"type": "base10", "hundreds": 3, "tens": 2, "ones": 5, "caption": "325 = 3 kotak, 2 bungkus, 5 butir"}
```

**Menyimpan:** kalau butir terkumpul 10 atau lebih, 10 butir dibungkus menjadi 1 bungkus. Bungkus itu pindah ke kolom puluhan.

**Meminjam:** kalau butir tidak cukup untuk diambil, buka 1 bungkus. Isinya 10 butir pindah ke kolom satuan.

**Meminjam melewati nol:** kalau bungkusnya kosong, buka 1 kotak dulu. Kotak itu menjadi 10 bungkus. Baru buka 1 bungkus.

```visual
{"type": "base10", "hundreds": 5, "tens": 0, "ones": 0, "caption": "500: bungkus dan butirnya kosong, jadi kotak harus dibuka dulu"}
```

## Konsep

### Menyusun menurut nilai tempat

Tulis satuan di bawah satuan, puluhan di bawah puluhan, ratusan di bawah ratusan. Mulai menghitung dari **kanan** (satuan).

### Penjumlahan dengan menyimpan

Jika jumlah satu kolom 10 atau lebih, tulis satuannya saja. Angka 1 disimpan ke kolom kirinya. Angka simpanan ditulis kecil di atas.

```anim
{"type": "susun", "op": "+", "a": 365, "b": 278, "title": "Dua kali menyimpan: 365 + 278"}
```

### Pengurangan dengan meminjam

Jika angka atas lebih kecil dari angka bawah, pinjam 1 dari kolom kirinya. Angka di kolom kiri berkurang 1. Angka di kolom ini bertambah 10.

```anim
{"type": "susun", "op": "-", "a": 724, "b": 358, "title": "Dua kali meminjam: 724 − 358"}
```

### Meminjam melewati nol

Pada 500 − 237, satuan dan puluhan sama-sama 0. Pinjam dari ratusan: 5 menjadi 4. Puluhan menjadi 10, lalu dipinjam 1 lagi, jadi 9. Satuan menjadi 10.

```anim
{"type": "susun", "op": "-", "a": 500, "b": 237, "title": "Meminjam melewati nol: 500 − 237"}
```

### Model batang

Untuk soal cerita, gambar **model batang**. Batang-batang bagian dijajarkan, dan kurung di kanan menunjukkan keseluruhan. Gambar ini membantu kamu memilih: tambah atau kurang.

```visual
{"type": "barModel", "bars": [{"label": "Awal", "units": 3, "known": "325"}, {"label": "Datang", "units": 2, "known": "186"}], "total": "?", "caption": "Bagian-bagian diketahui, keseluruhan ditanya: jumlahkan."}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menjumlah dengan dua kali menyimpan

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung $365 + 278$ dengan cara bersusun.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Susun. Angka 8 (satuan dari 278) ditulis di bawah angka berapa?",
   "options": [
    "5",
    "6",
    "3"
   ],
   "answer": "5",
   "hint": "Satuan di bawah satuan.",
   "explain": "8 di bawah 5, 7 di bawah 6, 2 di bawah 3.",
   "error": "susun-tidak-lurus"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jumlah satuan. 5 + 8 = ?",
   "answer": "13",
   "hint": "Buat 10 dulu: 5 + 5 = 10, lalu tambah 3.",
   "explain": "5 + 8 = 13. Tulis 3, simpan 1 di puluhan.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Jumlah puluhan dengan simpanan. 6 + 7 + 1 = ?",
   "answer": "14",
   "hint": "Jangan lupa simpanan 1 dari satuan.",
   "explain": "6 + 7 + 1 = 14. Tulis 4, simpan 1 di ratusan.",
   "error": "lupa-simpan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Jumlah ratusan dengan simpanan. 3 + 2 + 1 = ?",
   "answer": "6",
   "hint": "Ada simpanan 1 dari puluhan.",
   "explain": "3 + 2 + 1 = 6. Tulis 6.",
   "error": "lupa-simpan"
  },
  {
   "kind": "column",
   "op": "+",
   "a": 365,
   "b": 278,
   "prompt": "Langkah 5: Sekarang tulis semuanya di susunan. Isi kotak simpanan sendiri.",
   "hint": "Satuan 3, puluhan 4, ratusan 6. Simpanan 1 di puluhan dan ratusan.",
   "explain": "365 + 278 = 643."
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 643 − 278 = ?",
   "answer": "365",
   "hint": "Kalau benar, hasilnya kembali ke bilangan pertama.",
   "explain": "643 − 278 = 365. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 365 + 278 = 643.",
 "visual": {
  "type": "base10",
  "hundreds": 3,
  "tens": 6,
  "ones": 5
 }
}
```

### Contoh 2: Mengurang dengan dua kali meminjam

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung $724 - 358$ dengan cara bersusun.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Satuan 4 − 8. Perlu meminjam?",
   "options": [
    "Ya, pinjam 1",
    "Tidak perlu meminjam"
   ],
   "answer": "Ya, pinjam 1",
   "hint": "Bisakah mengambil 8 butir dari 4 butir?",
   "explain": "4 lebih kecil dari 8. Buka 1 bungkus: puluhan 2 menjadi 1, satuan menjadi 14.",
   "error": "lupa-pinjam"
  },
  {
   "kind": "number",
   "prompt": "Satuan sekarang: 14 − 8 = ?",
   "answer": "6",
   "hint": "Mundur 8 dari 14.",
   "explain": "14 − 8 = 6.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Puluhan tinggal 1, dikurangi 5. Perlu meminjam?",
   "options": [
    "Ya, pinjam 1",
    "Tidak perlu meminjam"
   ],
   "answer": "Ya, pinjam 1",
   "hint": "Puluhan 2 sudah dipinjam 1.",
   "explain": "1 lebih kecil dari 5. Buka 1 kotak: ratusan 7 menjadi 6, puluhan menjadi 11.",
   "error": "salah-pinjam"
  },
  {
   "kind": "number",
   "prompt": "Puluhan sekarang: 11 − 5 = ?",
   "answer": "6",
   "hint": "Dari 11 ambil 5.",
   "explain": "11 − 5 = 6.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Ratusan tinggal 6. 6 − 3 = ?",
   "answer": "3",
   "hint": "Ratusan 7 sudah dipinjam 1.",
   "explain": "6 − 3 = 3.",
   "error": "salah-pinjam"
  },
  {
   "kind": "column",
   "op": "-",
   "a": 724,
   "b": 358,
   "prompt": "Langkah 4: Tulis semuanya di susunan. Ketuk kotak kecil untuk menulis pinjaman.",
   "hint": "Puluhan 1 dan satuan 14, lalu ratusan 6 dan puluhan 11.",
   "explain": "724 − 358 = 366."
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 366 + 358 = ?",
   "answer": "724",
   "hint": "Jumlahkan balik.",
   "explain": "366 + 358 = 724. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 724 − 358 = 366."
}
```

### Contoh 3: Meminjam melewati nol

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung $500 - 237$ dengan cara bersusun.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Satuan 0 − 7. Dari mana kita bisa meminjam?",
   "options": [
    "Dari ratusan, karena puluhan kosong",
    "Dari puluhan",
    "Tidak perlu meminjam"
   ],
   "answer": "Dari ratusan, karena puluhan kosong",
   "hint": "Puluhan 500 isinya 0 bungkus.",
   "explain": "Puluhan kosong, jadi buka 1 kotak dulu.",
   "error": "salah-pinjam-lewat-nol"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Buka 1 kotak. Ratusan 5 menjadi berapa?",
   "answer": "4",
   "hint": "Satu kotak diambil.",
   "explain": "5 − 1 = 4. Puluhan menjadi 10.",
   "error": "salah-pinjam-lewat-nol"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Buka 1 bungkus untuk satuan. Puluhan 10 menjadi berapa?",
   "answer": "9",
   "hint": "Satu bungkus diambil dari 10 bungkus.",
   "explain": "10 − 1 = 9. Satuan menjadi 10.",
   "error": "salah-pinjam-lewat-nol"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Satuan 10 − 7 = ?",
   "answer": "3",
   "hint": "Satuan sekarang 10.",
   "explain": "10 − 7 = 3.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "number",
   "prompt": "Puluhan 9 − 3 = ?",
   "answer": "6",
   "hint": "Pakai 9, bukan 10.",
   "explain": "9 − 3 = 6.",
   "error": "salah-pinjam-lewat-nol"
  },
  {
   "kind": "number",
   "prompt": "Ratusan 4 − 2 = ?",
   "answer": "2",
   "hint": "Pakai 4, bukan 5.",
   "explain": "4 − 2 = 2. Hasilnya 263.",
   "error": "salah-pinjam"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 263 + 237 = ?",
   "answer": "500",
   "hint": "Jumlahkan balik.",
   "explain": "263 + 237 = 500. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 500 − 237 = 263."
}
```

### Contoh 4: Soal cerita dua langkah

```anim
{"type": "batang", "bars": [{"label": "Awal", "units": 3, "known": "325"}, {"label": "Datang", "units": 2, "known": "186"}], "total": "?", "langkah": [{"say": "Mula-mula ada 325 buku.", "bars": 1}, {"say": "Datang 186 buku lagi.", "bars": 2}, {"say": "Semuanya belum diketahui: jumlahkan.", "bars": 2, "total": true}], "title": "Model batang langkah pertama"}
```

```soal
{
 "title": "Kerjakan bersama",
 "text": "Toko Pak Budi punya 325 buku tulis. Hari Senin datang 186 buku lagi. Hari Selasa terjual 248 buku. Berapa buku yang tersisa?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Ada berapa hitungan?",
   "options": [
    "Dua: tambah lalu kurang",
    "Satu: tambah saja",
    "Satu: kurang saja"
   ],
   "answer": "Dua: tambah lalu kurang",
   "hint": "Buku datang, lalu buku terjual.",
   "explain": "Buku bertambah, lalu berkurang. Jadi ada dua hitungan.",
   "error": "salah-pilih-tambah-kurang"
  },
  {
   "kind": "column",
   "op": "+",
   "a": 325,
   "b": 186,
   "prompt": "Langkah 2: Hitung 325 + 186 bersusun.",
   "hint": "Satuan 5 + 6 = 11, tulis 1 simpan 1.",
   "explain": "Satuan 1, puluhan 2 + 8 + 1 = 11, ratusan 3 + 1 + 1 = 5. Hasilnya 511."
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Dari 511 buku, 248 terjual. Hitungan apa?",
   "options": [
    "511 − 248",
    "511 + 248"
   ],
   "answer": "511 − 248",
   "hint": "Terjual berarti buku diambil.",
   "explain": "Terjual berarti dikurangi: 511 − 248.",
   "error": "salah-pilih-tambah-kurang"
  },
  {
   "kind": "column",
   "op": "-",
   "a": 511,
   "b": 248,
   "prompt": "Langkah 4: Hitung 511 − 248 bersusun.",
   "hint": "Satuan 1 − 8 tidak bisa, pinjam. Puluhan tinggal 0, pinjam dari ratusan.",
   "explain": "11 − 8 = 3, 10 − 4 = 6, 4 − 2 = 2. Hasilnya 263."
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Berapa buku yang tersisa?",
   "answer": "263",
   "hint": "Hasil langkah kedua.",
   "explain": "Sisa 263 buku.",
   "error": "salah-langkah-materi",
   "suffix": "buku"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 263 + 248 = ?",
   "answer": "511",
   "hint": "Sisa ditambah yang terjual.",
   "explain": "263 + 248 = 511, lalu 511 − 186 = 325. Kembali ke awal, jadi benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Sisa 263 buku tulis.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Terjual",
    "units": 2,
    "known": "248"
   },
   {
    "label": "Sisa",
    "units": 3,
    "known": "?"
   }
  ],
  "total": "511"
 }
}
```

## Kesalahan yang sering terjadi

- **Lupa menambah simpanan.** Pada 365 + 278, menulis puluhan 6 + 7 = 13, lalu tulis 3. Simpanan 1 dari satuan terlupa. Yang benar 6 + 7 + 1 = 14.
- **Membalik pengurangan.** Pada 724 − 358, menulis 8 − 4 = 4 di satuan. Angka atas yang dikurangi, bukan sebaliknya. Kalau tidak cukup, pinjam.
- **Lupa mengubah 0 menjadi 9.** Pada 500 − 237, menulis puluhan 10 − 3 = 7. Padahal 1 bungkus sudah dibuka untuk satuan. Puluhan tinggal 9, jadi 9 − 3 = 6.
- **Kolom tidak sejajar.** Menulis 32 di bawah 40 pada soal 405 + 32. Satuan 2 harus tepat di bawah 5.
- **Hanya mengerjakan satu langkah.** Pada contoh 4, berhenti di 511. Baca soal lagi: pertanyaannya adalah sisa buku.

## Ringkasan

- Susun angka sesuai nilai tempat. Hitung dari kanan.
- Menyimpan: jika satu kolom 10 atau lebih, tulis satuannya, simpan 1 ke kiri.
- Meminjam: jika atas lebih kecil, pinjam 1 dari kiri, kolom ini tambah 10.
- Melewati nol: pinjam dari ratusan dulu, puluhan menjadi 9, satuan bertambah 10.
- Soal dua langkah: gambar model batang untuk tiap langkah.
- Cek: hasil tambah dicek dengan kurang, hasil kurang dicek dengan tambah.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung $457 + 368$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Satuan: 7 + 8 = ?",
   "answer": "15",
   "hint": "Buat 10: 7 + 3, lalu tambah 5.",
   "explain": "15: tulis 5, simpan 1.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "number",
   "prompt": "Puluhan: 5 + 6 + 1 = ?",
   "answer": "12",
   "hint": "Tambahkan simpanan.",
   "explain": "12: tulis 2, simpan 1.",
   "error": "lupa-simpan"
  },
  {
   "kind": "column",
   "op": "+",
   "a": 457,
   "b": 368,
   "prompt": "Kerjakan bersusun.",
   "hint": "Ratusan 4 + 3 + 1.",
   "explain": "Hasilnya 825."
  }
 ],
 "conclusion": "Jadi 457 + 368 = 825."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $812 - 547$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Satuan 2 − 7. Perlu meminjam?",
   "options": [
    "Ya, pinjam 1",
    "Tidak perlu meminjam"
   ],
   "answer": "Ya, pinjam 1",
   "hint": "Bandingkan 2 dan 7.",
   "explain": "2 lebih kecil dari 7, pinjam: satuan menjadi 12.",
   "error": "lupa-pinjam"
  },
  {
   "kind": "column",
   "op": "-",
   "a": 812,
   "b": 547,
   "prompt": "Kerjakan bersusun.",
   "hint": "Setelah meminjam, puluhan tinggal 0. Pinjam lagi dari ratusan.",
   "explain": "12 − 7 = 5, 10 − 4 = 6, 7 − 5 = 2. Hasilnya 265."
  },
  {
   "kind": "number",
   "prompt": "Cek: 265 + 547 = ?",
   "answer": "812",
   "hint": "Jumlahkan balik.",
   "explain": "265 + 547 = 812. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 812 − 547 = 265."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung $703 - 285$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Satuan 3 − 5 perlu pinjam, tetapi puluhan 0. Setelah meminjam lewat nol, puluhan menjadi berapa?",
   "answer": "9",
   "hint": "Ratusan 7 menjadi 6, puluhan menjadi 10, lalu dipinjam 1 lagi.",
   "explain": "Puluhan menjadi 9, satuan menjadi 13.",
   "error": "salah-pinjam-lewat-nol"
  },
  {
   "kind": "column",
   "op": "-",
   "a": 703,
   "b": 285,
   "prompt": "Kerjakan bersusun.",
   "hint": "13 − 5, lalu 9 − 8, lalu 6 − 2.",
   "explain": "13 − 5 = 8, 9 − 8 = 1, 6 − 2 = 4. Hasilnya 418."
  },
  {
   "kind": "number",
   "prompt": "Cek: 418 + 285 = ?",
   "answer": "703",
   "hint": "Jumlahkan balik.",
   "explain": "418 + 285 = 703. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 703 − 285 = 418."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Hitung $600 - 158$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Pinjam melewati dua nol. Ratusan 6 menjadi berapa?",
   "answer": "5",
   "hint": "Satu kotak dibuka.",
   "explain": "6 − 1 = 5. Puluhan menjadi 9, satuan 10.",
   "error": "salah-pinjam-lewat-nol"
  },
  {
   "kind": "column",
   "op": "-",
   "a": 600,
   "b": 158,
   "prompt": "Kerjakan bersusun.",
   "hint": "10 − 8, lalu 9 − 5, lalu 5 − 1.",
   "explain": "10 − 8 = 2, 9 − 5 = 4, 5 − 1 = 4. Hasilnya 442."
  },
  {
   "kind": "number",
   "prompt": "Cek: 442 + 158 = ?",
   "answer": "600",
   "hint": "Jumlahkan balik.",
   "explain": "442 + 158 = 600. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 600 − 158 = 442."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Made punya 236 kelereng. Kelereng Putu 175 lebih banyak dari kelereng Made. Berapa kelereng mereka berdua?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Berapa kelereng Putu? 236 + 175 = ?",
   "answer": "411",
   "hint": "Lebih banyak berarti tambahkan.",
   "explain": "Putu punya 236 + 175 = 411 kelereng.",
   "error": "salah-pilih-tambah-kurang",
   "suffix": "kelereng"
  },
  {
   "kind": "column",
   "op": "+",
   "a": 236,
   "b": 411,
   "prompt": "Langkah 2: Jumlahkan kelereng berdua: 236 + 411.",
   "hint": "Satuan 6 + 1, puluhan 3 + 1, ratusan 2 + 4.",
   "explain": "236 + 411 = 647."
  },
  {
   "kind": "number",
   "prompt": "Berapa kelereng mereka berdua?",
   "answer": "647",
   "hint": "Hasil langkah 2, bukan langkah 1.",
   "explain": "Berdua punya 647 kelereng.",
   "error": "salah-langkah-materi",
   "suffix": "kelereng"
  }
 ],
 "conclusion": "Mereka berdua punya 647 kelereng.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Made",
    "units": 2,
    "known": "236"
   },
   {
    "label": "Putu",
    "units": 4,
    "known": "236 + 175"
   }
  ],
  "question": "?"
 }
}
```
