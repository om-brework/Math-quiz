---
id: sd3-04-perkalian-bersusun
judul: Perkalian Bersusun
jenjang: sd3
moe: "Primary 3 · Number and Algebra · Multiplication and Division"
prasyarat: [sd3-03-perkalian-6-7-8-9, sd3-01-bilangan-sampai-10000]
durasi_menit: 35
---

## Kenapa belajar ini?

Satu rak perpustakaan berisi 125 buku. Ada 6 rak. Berapa buku semuanya? Kita tidak mungkin menghafal 125 × 6. Dengan perkalian bersusun, kita cukup memakai tabel perkalian yang sudah kita hafal, sedikit demi sedikit.

## Analogi

Kembali ke **pabrik permen**: 10 permen lepas = 1 bungkus, 10 bungkus = 1 kotak, 10 kotak = 1 kardus.

Seorang pedagang memesan barang yang sama beberapa kali. Misalnya satu pesanan berisi 3 kotak, 6 bungkus, dan 8 permen lepas (368 permen). Pesanan itu dikirim 7 kali.

```visual
{"type": "base10", "hundreds": 3, "tens": 6, "ones": 8, "caption": "Satu pesanan: 3 kotak, 6 bungkus, 8 permen lepas = 368 permen"}
```

Petugas gudang menghitung **permen lepas dulu**. Kalau permen lepas menjadi 10 atau lebih, ia **mengemasnya** menjadi bungkus. Bungkus itu dipindah ke tumpukan bungkus. Lalu ia menghitung bungkus, mengemasnya menjadi kotak, dan seterusnya.

Perkalian bersusun bekerja persis seperti itu. Kalikan dari kanan, dan **simpan** hasil kemasan ke kolom kiri.

```anim
{"type": "susun", "op": "×", "a": 368, "b": 7, "title": "368 × 7: kalikan dari kanan, simpan ke kiri"}
```

## Konsep

### Bagian-bagian perkalian bersusun

- Bilangan yang besar ditulis di atas.
- Pengali (1 angka) ditulis di bawah, rata kanan, tepat di bawah satuan.
- Hitung mulai dari **satuan**, lalu puluhan, lalu ratusan.

### Menyimpan pada perkalian

Kalau hasil kali satu kolom 10 atau lebih:

1. Tulis angka **satuan** dari hasil itu di bawah garis.
2. **Simpan** angka puluhannya di atas kolom berikutnya di kiri.
3. Di kolom berikutnya, **kalikan dulu, baru tambahkan simpanan**.

Urutan nomor 3 sangat penting. Simpanan adalah bungkus yang sudah jadi. Bungkus itu tidak ikut dikalikan.

```anim
{"type": "susun", "op": "×", "a": 47, "b": 6, "title": "47 × 6: kalikan dulu, baru tambah simpanan"}
```

### Memecah menurut nilai tempat

Perkalian bersusun sebenarnya memecah bilangan:

368 × 7 = (300 × 7) + (60 × 7) + (8 × 7)

```visual
{"type": "table", "head": ["Bagian", "Hasil"], "rows": [["300 × 7", "2.100"], ["60 × 7", "420"], ["8 × 7", "56"], ["Jumlah", "2.576"]]}
```

Cara memecah ini juga bagus untuk **mengecek** jawaban.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Tanpa menyimpan

```soal
{
 "title": "Contoh 1",
 "text": "Hitung $23 \\times 3$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Kalikan satuan. 3 × 3 = ?",
   "answer": "9",
   "hint": "Tiga kali tiga.",
   "explain": "9, kurang dari 10. Tulis 9, tidak ada simpanan.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kalikan puluhan. 2 × 3 = ?",
   "answer": "6",
   "hint": "Dua kali tiga.",
   "explain": "6. Tulis 6 di puluhan.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "column",
   "op": "×",
   "a": 23,
   "b": 3,
   "prompt": "Langkah 3: Tulis di hitung susun.",
   "hint": "Satuan 9, puluhan 6.",
   "explain": "23 × 3 = 69."
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 60 + 9 = ?",
   "answer": "69",
   "hint": "20 × 3 = 60 dan 3 × 3 = 9.",
   "explain": "60 + 9 = 69. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 23 × 3 = 69."
}
```

### Contoh 2: Menyimpan satu kali

```soal
{
 "title": "Contoh 2",
 "text": "Hitung $47 \\times 6$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Kalikan satuan. 7 × 6 = ?",
   "answer": "42",
   "hint": "Pakai strategi: 5 × 6 + 2 × 6.",
   "explain": "42. Tulis 2, simpan 4 di atas puluhan.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kalikan puluhan dulu. 4 × 6 = ?",
   "answer": "24",
   "hint": "Kalikan angka puluhan saja, simpanan belum ditambah.",
   "explain": "4 × 6 = 24.",
   "error": "salah-simpan-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tambahkan simpanan. 24 + 4 = ?",
   "answer": "28",
   "hint": "Simpanan dari satuan adalah 4.",
   "explain": "28. Tulis 8 di puluhan dan 2 di ratusan.",
   "error": "lupa-simpan-kali"
  },
  {
   "kind": "column",
   "op": "×",
   "a": 47,
   "b": 6,
   "prompt": "Langkah 4: Tulis di hitung susun.",
   "hint": "Jangan lupa simpanan kecil di atas puluhan.",
   "explain": "47 × 6 = 282."
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 240 + 42 = ?",
   "answer": "282",
   "hint": "40 × 6 = 240 dan 7 × 6 = 42.",
   "explain": "240 + 42 = 282. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 47 × 6 = 282."
}
```

### Contoh 3: Bilangan 3 angka, menyimpan dua kali

```soal
{
 "title": "Contoh 3",
 "text": "Hitung $368 \\times 7$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Kalikan satuan. 8 × 7 = ?",
   "answer": "56",
   "hint": "5 × 8 + 2 × 8.",
   "explain": "56. Tulis 6, simpan 5.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Puluhan. 6 × 7 + 5 (simpanan) = ?",
   "answer": "47",
   "hint": "Kalikan dulu: 6 × 7 = 42, lalu tambah simpanan.",
   "explain": "42 + 5 = 47. Tulis 7, simpan 4.",
   "error": "lupa-simpan-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Ratusan. 3 × 7 + 4 (simpanan) = ?",
   "answer": "25",
   "hint": "3 × 7 = 21, lalu tambah simpanan.",
   "explain": "21 + 4 = 25. Tulis 25.",
   "error": "lupa-simpan-kali"
  },
  {
   "kind": "column",
   "op": "×",
   "a": 368,
   "b": 7,
   "prompt": "Langkah 4: Tulis di hitung susun.",
   "hint": "Isi dari kanan, simpanan di atas.",
   "explain": "368 × 7 = 2.576."
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 2.100 + 420 + 56 = ?",
   "answer": "2.576",
   "hint": "300 × 7, 60 × 7, dan 8 × 7.",
   "explain": "2.100 + 420 + 56 = 2.576. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 368 × 7 = 2.576.",
 "visual": {
  "type": "base10",
  "hundreds": 3,
  "tens": 6,
  "ones": 8
 }
}
```

### Contoh 4: Soal cerita

```soal
{
 "title": "Contoh 4",
 "text": "Sebuah truk mengangkut 245 karung beras. Ada 4 truk yang muatannya sama. Berapa karung beras semuanya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Hitungan apa yang dipakai?",
   "options": [
    "245 × 4",
    "245 + 4",
    "245 ÷ 4"
   ],
   "answer": "245 × 4",
   "hint": "Ada 4 kelompok yang sama.",
   "explain": "4 kelompok berisi 245: 245 × 4.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Satuan. 5 × 4 = ?",
   "answer": "20",
   "hint": "Lima kali empat.",
   "explain": "20. Tulis 0, simpan 2.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Puluhan. 4 × 4 + 2 (simpanan) = ?",
   "answer": "18",
   "hint": "4 × 4 = 16, lalu tambah simpanan.",
   "explain": "18. Tulis 8, simpan 1.",
   "error": "lupa-simpan-kali"
  },
  {
   "kind": "column",
   "op": "×",
   "a": 245,
   "b": 4,
   "prompt": "Langkah 4: Kerjakan hitung susunnya.",
   "hint": "Ratusan: 2 × 4 + 1.",
   "explain": "245 × 4 = 980."
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 800 + 160 + 20 = ?",
   "answer": "980",
   "hint": "200 × 4, 40 × 4, dan 5 × 4.",
   "explain": "800 + 160 + 20 = 980. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "karung"
  }
 ],
 "conclusion": "Semuanya ada 980 karung beras."
}
```

## Kesalahan yang sering terjadi

- **Lupa menambah simpanan.** Pada 47 × 6, menulis 242 karena 4 × 6 = 24 tanpa ditambah 4. Selalu tulis simpanan kecil di atas kolom supaya tidak lupa.
- **Simpanan ikut dikalikan.** Pada 47 × 6, menghitung (4 + 4) × 6 = 48. Simpanan adalah bungkus yang sudah jadi, jadi hanya ditambahkan **setelah** mengali: 4 × 6 + 4 = 28.
- **Lupa menulis 0.** Pada 245 × 4, hasil satuan 20 ditulis "20" semuanya di bawah. Yang ditulis hanya 0, angka 2 disimpan. Begitu juga pada 405 × 6: puluhan 0 × 6 = 0, ditambah simpanan 3 menjadi 3. Hasilnya 2.430.
- **Salah tabel perkalian.** Menulis 8 × 7 = 54. Kalau ragu, pakai strategi: 5 × 8 + 2 × 8 = 40 + 16 = 56.

## Ringkasan

- Tulis pengali di bawah satuan, lalu kalikan dari kanan ke kiri.
- Kalau hasil satu kolom 10 atau lebih, tulis satuannya dan simpan puluhannya ke kolom kiri.
- Urutan di setiap kolom: **kalikan dulu, lalu tambah simpanan**.
- Cek dengan memecah menurut nilai tempat: 368 × 7 = 2.100 + 420 + 56.
- Soal cerita "ada beberapa kelompok yang sama" diselesaikan dengan perkalian.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung $34 \\times 2$.",
 "steps": [
  {
   "kind": "column",
   "op": "×",
   "a": 34,
   "b": 2,
   "prompt": "Langkah 1: Kerjakan hitung susun.",
   "hint": "4 × 2, lalu 3 × 2.",
   "explain": "4 × 2 = 8 dan 3 × 2 = 6, tanpa menyimpan. Hasilnya 68."
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Cek: 60 + 8 = ?",
   "answer": "68",
   "hint": "30 × 2 = 60 dan 4 × 2 = 8.",
   "explain": "60 + 8 = 68. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 34 × 2 = 68."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $58 \\times 4$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Satuan. 8 × 4 = ?",
   "answer": "32",
   "hint": "Dobel dari 8 × 2.",
   "explain": "32. Tulis 2, simpan 3.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Puluhan. 5 × 4 + 3 (simpanan) = ?",
   "answer": "23",
   "hint": "Kalikan dulu, baru tambah simpanan.",
   "explain": "20 + 3 = 23.",
   "error": "salah-simpan-kali"
  },
  {
   "kind": "column",
   "op": "×",
   "a": 58,
   "b": 4,
   "prompt": "Langkah 3: Tulis di hitung susun.",
   "hint": "Satuan 2, lalu 23.",
   "explain": "58 × 4 = 232."
  }
 ],
 "conclusion": "Jadi 58 × 4 = 232."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung $207 \\times 5$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Satuan. 7 × 5 = ?",
   "answer": "35",
   "hint": "Tujuh kali lima.",
   "explain": "35. Tulis 5, simpan 3.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Puluhan. 0 × 5 + 3 (simpanan) = ?",
   "answer": "3",
   "hint": "0 × 5 = 0, tetapi simpanan tetap ditambahkan.",
   "explain": "0 + 3 = 3. Tulis 3.",
   "error": "lupa-simpan-kali"
  },
  {
   "kind": "column",
   "op": "×",
   "a": 207,
   "b": 5,
   "prompt": "Langkah 3: Kerjakan hitung susunnya.",
   "hint": "Ratusan: 2 × 5 = 10.",
   "explain": "207 × 5 = 1.035."
  }
 ],
 "conclusion": "Jadi 207 × 5 = 1.035."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Hitung $476 \\times 8$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Satuan. 6 × 8 = ?",
   "answer": "48",
   "hint": "Dobel 3 × 8.",
   "explain": "48. Tulis 8, simpan 4.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Puluhan. 7 × 8 + 4 (simpanan) = ?",
   "answer": "60",
   "hint": "7 × 8 = 56, lalu tambah simpanan.",
   "explain": "56 + 4 = 60. Tulis 0, simpan 6.",
   "error": "lupa-simpan-kali"
  },
  {
   "kind": "column",
   "op": "×",
   "a": 476,
   "b": 8,
   "prompt": "Langkah 3: Kerjakan hitung susunnya.",
   "hint": "Ratusan: 4 × 8 + 6.",
   "explain": "32 + 6 = 38. Hasilnya 3.808."
  }
 ],
 "conclusion": "Jadi 476 × 8 = 3.808."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Satu rak perpustakaan berisi 125 buku. Ada 6 rak. Berapa buku semuanya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Hitungan apa yang dipakai?",
   "options": [
    "125 × 6",
    "125 + 6",
    "125 ÷ 6"
   ],
   "answer": "125 × 6",
   "hint": "Ada 6 rak yang isinya sama.",
   "explain": "6 kelompok berisi 125: 125 × 6.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "column",
   "op": "×",
   "a": 125,
   "b": 6,
   "prompt": "Langkah 2: Kerjakan hitung susunnya.",
   "hint": "5 × 6 = 30: tulis 0, simpan 3.",
   "explain": "2 × 6 + 3 = 15, 1 × 6 + 1 = 7. Hasilnya 750."
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Berapa buku semuanya?",
   "answer": "750",
   "hint": "Baca hasil hitung susun.",
   "explain": "125 × 6 = 750 buku.",
   "error": "salah-langkah-materi",
   "suffix": "buku"
  }
 ],
 "conclusion": "Semuanya ada 750 buku."
}
```
