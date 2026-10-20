---
id: sd3-02-tambah-kurang-bersusun-4-angka
judul: Penjumlahan dan Pengurangan Bersusun 4 Angka
jenjang: sd3
moe: "Primary 3 · Number and Algebra · Addition and Subtraction"
prasyarat: [sd3-01-bilangan-sampai-10000, sd2-02-tambah-kurang-bersusun-1000]
durasi_menit: 35
---

## Kenapa belajar ini?

Perpustakaan sekolah punya 2.475 buku, lalu mendapat 1.380 buku baru. Berapa semuanya? Bilangan sebesar ini sulit dihitung di kepala. Hitung bersusun membantu kita menghitung dengan rapi, satu tempat demi satu tempat.

## Analogi

Ingat lagi **pabrik permen**:

- 10 permen lepas = 1 bungkus
- 10 bungkus = 1 kotak
- 10 kotak = 1 kardus

**Menyimpan** itu seperti mengemas. Kalau permen lepas ada 10 atau lebih, 10 di antaranya dikemas menjadi 1 bungkus. Bungkus itu pindah ke kolom bungkus.

```anim
{"type": "stik", "op": "+", "a": 8, "b": 5, "title": "8 + 5: sepuluh stik diikat menjadi 1 ikat"}
```

**Meminjam** itu seperti membongkar. Kalau permen lepas kurang untuk diambil, kita bongkar 1 bungkus menjadi 10 permen lepas.

Kalau bungkusnya kosong (angka 0), kita bongkar kotak dulu. 1 kotak menjadi 10 bungkus. Baru 1 bungkus dibongkar menjadi 10 permen. Inilah **meminjam melewati nol**.

```visual
{"type": "base10", "thousands": 5, "hundreds": 0, "tens": 0, "ones": 3, "caption": "5.003: tidak ada kotak dan bungkus. Untuk meminjam, bongkar 1 kardus dulu."}
```

## Konsep

### Aturan hitung bersusun

1. Tulis bilangan rata kanan. Satuan di bawah satuan, puluhan di bawah puluhan, dan seterusnya.
2. Mulai dari **satuan** (paling kanan), lalu bergerak ke kiri.
3. Saat bersusun, angka ditulis tanpa titik ribuan.

### Menyimpan berkali-kali

Pada penjumlahan, setiap kolom bisa menghasilkan 10 atau lebih. Tulis angka satuannya di bawah. Angka puluhannya disimpan (ditulis kecil) di atas kolom sebelah kiri. Ini bisa terjadi di beberapa kolom berturut-turut.

```anim
{"type": "susun", "op": "+", "a": 3658, "b": 2475, "title": "3.658 + 2.475: menyimpan tiga kali"}
```

### Meminjam melewati nol

Pada pengurangan, kalau angka atas lebih kecil dari angka bawah, pinjam 1 dari kolom kiri. Kalau kolom kiri berisi 0, terus ke kiri sampai menemukan angka yang bukan 0. Bongkar angka itu, lalu turunkan pinjaman satu per satu ke kanan.

Contoh: pada 5.003, pinjaman dari ribuan membuat angka atas menjadi 4, 9, 9, 13.

```anim
{"type": "susun", "op": "-", "a": 5003, "b": 1278, "title": "5.003 − 1.278: meminjam melewati nol"}
```

### Cek dengan operasi kebalikan

Penjumlahan dan pengurangan saling membalik.

- Cek penjumlahan dengan pengurangan: kalau 3.658 + 2.475 = 6.133, maka 6.133 − 2.475 harus 3.658.
- Cek pengurangan dengan penjumlahan: kalau 5.003 − 1.278 = 3.725, maka 3.725 + 1.278 harus 5.003.

### Hitung cepat dua bilangan 2 angka

Untuk bilangan 2 angka, kita bisa menghitung di kepala dengan **membulatkan ke puluhan terdekat**, lalu membetulkan.

- 47 + 38: 38 dekat dengan 40. 47 + 40 = 87. Karena kita menambah 2 terlalu banyak, kurangi 2: 85.

```anim
{"type": "garis", "from": 45, "to": 90, "start": 47, "jumps": [40, -2], "step": 1, "title": "47 + 38 = 47 + 40 − 2"}
```
- 83 − 29: 29 dekat dengan 30. 83 − 30 = 53. Karena kita mengurangi 1 terlalu banyak, tambah 1: 54.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Penjumlahan dengan menyimpan berkali-kali

```soal
{
 "title": "Contoh 1",
 "text": "Hitung $3.658 + 2.475$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Jumlahkan satuan. 8 + 5 = ?",
   "answer": "13",
   "hint": "Hitung 8 + 2 dulu, lalu tambah 3.",
   "explain": "13. Tulis 3, simpan 1 di atas puluhan.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jumlahkan puluhan. 5 + 7 + 1 (simpanan) = ?",
   "answer": "13",
   "hint": "Jangan lupa simpanan 1 dari satuan.",
   "explain": "13. Tulis 3, simpan 1 di atas ratusan.",
   "error": "lupa-simpan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Jumlahkan ratusan. 6 + 4 + 1 (simpanan) = ?",
   "answer": "11",
   "hint": "6 + 4 = 10, lalu tambah simpanan.",
   "explain": "11. Tulis 1, simpan 1 di atas ribuan.",
   "error": "lupa-simpan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Jumlahkan ribuan. 3 + 2 + 1 (simpanan) = ?",
   "answer": "6",
   "hint": "Ada simpanan dari ratusan.",
   "explain": "6. Tulis 6.",
   "error": "lupa-simpan"
  },
  {
   "kind": "column",
   "op": "+",
   "a": 3658,
   "b": 2475,
   "prompt": "Langkah 5: Tulis semuanya di hitung susun.",
   "hint": "Isi kolom dari kanan, simpanan di atas.",
   "explain": "3.658 + 2.475 = 6.133."
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 6.133 − 2.475 = ?",
   "answer": "3.658",
   "hint": "Kalau benar, hasilnya bilangan pertama.",
   "explain": "6.133 − 2.475 = 3.658. Benar.",
   "error": "salah-operasi-kebalikan"
  }
 ],
 "conclusion": "Jadi 3.658 + 2.475 = 6.133."
}
```

### Contoh 2: Pengurangan dengan meminjam melewati nol

```soal
{
 "title": "Contoh 2",
 "text": "Hitung $5.003 - 1.278$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Lihat satuan, 3 − 8. Apa yang dilakukan?",
   "options": [
    "Pinjam dari kiri",
    "Hitung 8 − 3 = 5"
   ],
   "answer": "Pinjam dari kiri",
   "hint": "Angka atas 3 lebih kecil dari angka bawah 8.",
   "explain": "3 lebih kecil dari 8, jadi kita perlu meminjam.",
   "error": "kurang-terbalik"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Puluhan dan ratusan 0. Dari mana kita meminjam?",
   "options": [
    "Ribuan",
    "Puluhan",
    "Ratusan"
   ],
   "answer": "Ribuan",
   "hint": "Cari angka bukan 0 terdekat di kiri.",
   "explain": "Bongkar 1 kardus. Ribuan menjadi 4.",
   "error": "salah-pinjam-lewat-nol"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Setelah dibongkar, angka puluhan menjadi berapa?",
   "answer": "9",
   "hint": "1 kotak menjadi 10 bungkus, lalu 1 bungkus dipinjam satuan.",
   "explain": "10 − 1 = 9. Ratusan juga menjadi 9.",
   "error": "salah-pinjam-lewat-nol"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Satuan sekarang berapa?",
   "answer": "13",
   "hint": "3 ditambah 10 permen dari bungkus yang dibongkar.",
   "explain": "3 + 10 = 13, dan 13 − 8 = 5.",
   "error": "lupa-pinjam"
  },
  {
   "kind": "column",
   "op": "-",
   "a": 5003,
   "b": 1278,
   "prompt": "Langkah 5: Kerjakan hitung susunnya.",
   "hint": "Angka atas setelah dibongkar: 4, 9, 9, 13.",
   "explain": "5.003 − 1.278 = 3.725."
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 3.725 + 1.278 = ?",
   "answer": "5.003",
   "hint": "Jumlahkan hasil dengan bilangan pengurang.",
   "explain": "3.725 + 1.278 = 5.003. Benar.",
   "error": "salah-operasi-kebalikan"
  }
 ],
 "conclusion": "Jadi 5.003 − 1.278 = 3.725."
}
```

### Contoh 3: Soal cerita

```soal
{
 "title": "Contoh 3",
 "text": "Perpustakaan sekolah punya 4.060 buku. Sebanyak 1.385 buku sedang dipinjam siswa. Berapa buku yang masih ada di rak?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Hitungan apa yang dipakai?",
   "options": [
    "4.060 − 1.385",
    "4.060 + 1.385"
   ],
   "answer": "4.060 − 1.385",
   "hint": "\"Masih ada\" berarti sisa.",
   "explain": "Sisa dicari dengan pengurangan.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Satuan 0 − 5 tidak bisa. Pinjam dari puluhan. Satuan menjadi 10. 10 − 5 = ?",
   "answer": "5",
   "hint": "Sepuluh dikurangi lima.",
   "explain": "5. Puluhan tinggal 5.",
   "error": "lupa-pinjam"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Puluhan 5 − 8 tidak bisa. Pinjam dari ribuan melewati ratusan 0. Puluhan menjadi 15. 15 − 8 = ?",
   "answer": "7",
   "hint": "15 − 5 = 10, lalu kurangi 3 lagi.",
   "explain": "7. Ratusan menjadi 9, ribuan menjadi 3.",
   "error": "salah-pinjam-lewat-nol"
  },
  {
   "kind": "column",
   "op": "-",
   "a": 4060,
   "b": 1385,
   "prompt": "Langkah 4: Kerjakan hitung susunnya.",
   "hint": "Ingat, 0 di ratusan berubah menjadi 9.",
   "explain": "4.060 − 1.385 = 2.675."
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 2.675 + 1.385 = ?",
   "answer": "4.060",
   "hint": "Jumlahkan sisa dengan yang dipinjam.",
   "explain": "Hasilnya 4.060. Benar.",
   "error": "salah-operasi-kebalikan"
  }
 ],
 "conclusion": "Masih ada 2.675 buku di rak."
}
```

### Contoh 4: Hitung cepat

```soal
{
 "title": "Contoh 4",
 "text": "Hitung di kepala: a) $56 + 37$, b) $92 - 48$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: a) 37 dibulatkan menjadi 40. 56 + 40 = ?",
   "answer": "96",
   "hint": "Tambah 4 puluhan pada 56.",
   "explain": "56 + 40 = 96.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: a) Kita menambah 3 terlalu banyak. 96 − 3 = ?",
   "answer": "93",
   "hint": "Kurangi kelebihannya.",
   "explain": "96 − 3 = 93.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: b) 48 dibulatkan menjadi 50. 92 − 50 = ?",
   "answer": "42",
   "hint": "Kurangi 5 puluhan dari 92.",
   "explain": "92 − 50 = 42.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: b) Kita mengurangi 2 terlalu banyak. 42 + 2 = ?",
   "answer": "44",
   "hint": "Kembalikan yang terlalu banyak diambil.",
   "explain": "42 + 2 = 44.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 44 + 48 = ?",
   "answer": "92",
   "hint": "Kalau benar, hasilnya 92.",
   "explain": "44 + 48 = 92. Benar.",
   "error": "salah-operasi-kebalikan"
  }
 ],
 "conclusion": "Jadi a) 56 + 37 = 93, b) 92 − 48 = 44."
}
```

## Kesalahan yang sering terjadi

- **Lupa menambah simpanan.** Pada 3.658 + 2.475, menulis puluhan 5 + 7 = 12 lalu lupa 1 simpanan dari satuan. Biasakan menulis angka simpanan kecil di atas kolom.
- **Mengurangi angka kecil dari angka besar.** Pada satuan 3 − 8, ada yang menulis 8 − 3 = 5. Itu salah. Angka atas selalu dikurangi angka bawah. Kalau tidak cukup, pinjam.
- **Melompati nol saat meminjam.** Pada 5.003 − 1.278, langsung meminjam dari ribuan ke satuan, lalu angka 0 di tengah tetap 0. Yang benar, setiap 0 yang dilewati berubah menjadi 9.
- **Bilangan tidak rata kanan.** Menulis 1.385 di bawah 4.060 tetapi bergeser satu kolom. Satuan harus tepat di bawah satuan.
- **Salah arah membetulkan saat hitung cepat.** Pada 83 − 29, setelah 83 − 30 = 53, malah dikurangi 1 lagi menjadi 52. Kita sudah mengurangi terlalu banyak, jadi harus ditambah 1: 54.

## Ringkasan

- Tulis rata kanan, hitung mulai dari satuan.
- Menyimpan = mengemas 10 menjadi 1 di kolom kiri. Bisa terjadi berkali-kali.
- Meminjam = membongkar 1 dari kolom kiri menjadi 10. Setiap 0 yang dilewati menjadi 9.
- Cek penjumlahan dengan pengurangan, cek pengurangan dengan penjumlahan.
- Hitung cepat: bulatkan ke puluhan terdekat, hitung, lalu betulkan.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung $2.786 + 4.548$.",
 "steps": [
  {
   "kind": "column",
   "op": "+",
   "a": 2786,
   "b": 4548,
   "prompt": "Langkah 1: Kerjakan hitung susun.",
   "hint": "Mulai dari satuan: 6 + 8 = 14, tulis 4 simpan 1.",
   "explain": "Simpan di satuan, puluhan, dan ratusan. Hasilnya 7.334."
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Cek: 7.334 − 4.548 = ?",
   "answer": "2.786",
   "hint": "Hasilnya harus bilangan pertama.",
   "explain": "7.334 − 4.548 = 2.786. Benar.",
   "error": "salah-operasi-kebalikan"
  }
 ],
 "conclusion": "Jadi 2.786 + 4.548 = 7.334."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $6.000 - 2.457$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Setelah meminjam melewati nol, angka atas satuan menjadi berapa?",
   "answer": "10",
   "hint": "0 ditambah 10 dari bungkus yang dibongkar.",
   "explain": "Angka atas menjadi 5, 9, 9, 10.",
   "error": "salah-pinjam-lewat-nol"
  },
  {
   "kind": "column",
   "op": "-",
   "a": 6000,
   "b": 2457,
   "prompt": "Langkah 2: Kerjakan hitung susun.",
   "hint": "Setiap 0 yang dilewati menjadi 9.",
   "explain": "6.000 − 2.457 = 3.543."
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Cek: 3.543 + 2.457 = ?",
   "answer": "6.000",
   "hint": "Jumlahkan hasil dengan pengurang.",
   "explain": "Hasilnya 6.000. Benar.",
   "error": "salah-operasi-kebalikan"
  }
 ],
 "conclusion": "Jadi 6.000 − 2.457 = 3.543."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung $7.205 - 3.869$.",
 "steps": [
  {
   "kind": "column",
   "op": "-",
   "a": 7205,
   "b": 3869,
   "prompt": "Langkah 1: Kerjakan hitung susun.",
   "hint": "Satuan 5 − 9 tidak bisa. Puluhan 0, jadi pinjam lewat nol.",
   "explain": "7.205 − 3.869 = 3.336."
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Cek: 3.336 + 3.869 = ?",
   "answer": "7.205",
   "hint": "Jumlahkan hasil dengan pengurang.",
   "explain": "Hasilnya 7.205. Benar.",
   "error": "salah-operasi-kebalikan"
  }
 ],
 "conclusion": "Jadi 7.205 − 3.869 = 3.336."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Hitung di kepala: a) $56 + 29$, b) $71 - 38$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: a) 56 + 30 = ?",
   "answer": "86",
   "hint": "29 dibulatkan menjadi 30.",
   "explain": "56 + 30 = 86.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: a) Betulkan. Berapa 56 + 29?",
   "answer": "85",
   "hint": "Kita menambah 1 terlalu banyak.",
   "explain": "86 − 1 = 85.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: b) 71 − 40 = ?",
   "answer": "31",
   "hint": "38 dibulatkan menjadi 40.",
   "explain": "71 − 40 = 31.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: b) Betulkan. Berapa 71 − 38?",
   "answer": "33",
   "hint": "Kita mengurangi 2 terlalu banyak, jadi tambahkan kembali.",
   "explain": "31 + 2 = 33.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi a) 85, b) 33."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Minggu lalu sekolah mengumpulkan 2.347 botol plastik. Minggu ini terkumpul 1.968 botol. Berapa botol semuanya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Hitungan apa yang dipakai?",
   "options": [
    "2.347 + 1.968",
    "2.347 − 1.968"
   ],
   "answer": "2.347 + 1.968",
   "hint": "\"Semuanya\" berarti digabung.",
   "explain": "Menggabungkan dua kumpulan: penjumlahan.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "column",
   "op": "+",
   "a": 2347,
   "b": 1968,
   "prompt": "Langkah 2: Kerjakan hitung susun.",
   "hint": "Mulai dari satuan: 7 + 8 = 15.",
   "explain": "2.347 + 1.968 = 4.315."
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Cek: 4.315 − 1.968 = ?",
   "answer": "2.347",
   "hint": "Hasilnya harus bilangan pertama.",
   "explain": "4.315 − 1.968 = 2.347. Benar.",
   "error": "salah-operasi-kebalikan"
  }
 ],
 "conclusion": "Semuanya ada 4.315 botol."
}
```
