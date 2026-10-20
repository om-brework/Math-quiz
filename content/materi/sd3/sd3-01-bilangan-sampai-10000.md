---
id: sd3-01-bilangan-sampai-10000
judul: Bilangan sampai 10.000
jenjang: sd3
moe: "Primary 3 · Number and Algebra · Numbers up to 10 000"
prasyarat: [sd2-01-bilangan-sampai-1000]
durasi_menit: 30
---

## Kenapa belajar ini?

Di sekitar kita banyak bilangan besar. Harga mainan Rp7.500. Penonton di lapangan ada 2.350 orang. Supaya bisa membaca, menulis, dan membandingkan bilangan seperti itu, kita perlu mengenal bilangan sampai 10.000.

## Analogi

Bayangkan sebuah **pabrik permen**. Permen dikemas dengan aturan yang selalu sama:

- 10 permen lepas dimasukkan ke 1 **bungkus**.
- 10 bungkus dimasukkan ke 1 **kotak**. Jadi 1 kotak berisi 100 permen.
- 10 kotak dimasukkan ke 1 **kardus**. Jadi 1 kardus berisi 1.000 permen.

Untuk menghitung semua permen, kita cukup menghitung kardus, kotak, bungkus, dan permen lepas. Setiap angka pada bilangan 4 angka menunjukkan satu jenis kemasan.

Lihat gudang yang berisi 2 kardus, 3 kotak, 4 bungkus, dan 5 permen lepas:

```visual
{"type": "base10", "thousands": 2, "hundreds": 3, "tens": 4, "ones": 5, "caption": "2 kardus, 3 kotak, 4 bungkus, 5 permen lepas = 2.345 permen"}
```

## Konsep

### Nilai tempat

Bilangan 4 angka punya empat tempat:

```visual
{"type": "table", "head": ["Ribuan", "Ratusan", "Puluhan", "Satuan"], "rows": [["kardus", "kotak", "bungkus", "permen lepas"], ["1.000", "100", "10", "1"]]}
```

Contoh: pada bilangan 3.725

```visual
{"type": "base10", "thousands": 3, "hundreds": 7, "tens": 2, "ones": 5, "caption": "3.725 = 3 ribuan, 7 ratusan, 2 puluhan, 5 satuan"}
```

- angka 3 ada di tempat ribuan, nilainya 3.000
- angka 7 ada di tempat ratusan, nilainya 700
- angka 2 ada di tempat puluhan, nilainya 20
- angka 5 ada di tempat satuan, nilainya 5

Jadi 3.725 = 3.000 + 700 + 20 + 5. Bentuk ini disebut **bentuk panjang**.

Bilangan 4 angka terbesar adalah 9.999. Kalau ditambah 1, kita dapat **10.000** (sepuluh ribu). Itu sama dengan 10 kardus.

### Membaca dan menulis

Baca dari kiri: ribuan dulu, lalu ratusan, puluhan, dan satuan.

- 3.725 dibaca **tiga ribu tujuh ratus dua puluh lima**.
- 1.000 dibaca **seribu**, bukan "satu ribu".
- 100 dibaca **seratus**, dan 11 dibaca **sebelas**.

Kalau ada tempat yang kosong, tulis **0**. Angka 0 menjaga angka lain tetap di tempatnya. Kita memakai titik untuk memisahkan ribuan: 3.725.

### Membandingkan dan mengurutkan

Untuk tahu mana yang lebih banyak, bandingkan **kardus dulu**. Kalau kardusnya sama, bandingkan kotak. Kalau masih sama, bandingkan bungkus, lalu permen lepas.

Tanda yang dipakai:

- `>` artinya lebih dari
- `<` artinya kurang dari
- `=` artinya sama dengan

### Pola bilangan dan membilang loncat

Membilang loncat 100 artinya menambah 1 kotak setiap kali. Angka ratusan naik 1:

```anim
{"type": "garis", "from": 2450, "to": 2850, "start": 2450, "jumps": [100, 100, 100], "step": 100, "title": "Loncat 100 dari 2.450"}
```

Membilang loncat 1.000 artinya menambah 1 kardus setiap kali. Angka ribuan naik 1:

```anim
{"type": "garis", "from": 1308, "to": 5308, "start": 1308, "jumps": [1000, 1000, 1000], "step": 1000, "title": "Loncat 1.000 dari 1.308"}
```

Pola juga bisa turun, misalnya loncat mundur 100: 5.900, 5.800, 5.700.

Hati-hati saat melewati ribuan. 10 kotak menjadi 1 kardus baru, jadi setelah 6.900 datang **7.000**, bukan 6.1000.

```anim
{"type": "garis", "from": 6600, "to": 7200, "start": 6700, "jumps": [100, 100, 100], "step": 100, "title": "Melewati ribuan: 6.700, 6.800, 6.900, 7.000"}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Membaca bilangan dan nilai tempat

```soal
{
 "title": "Contoh 1",
 "text": "Tulis 4.528 dengan kata-kata. Berapa nilai angka 5?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Pisahkan per tempat. Angka berapa di tempat ribuan?",
   "answer": "4",
   "hint": "Tempat ribuan adalah angka paling kiri.",
   "explain": "Angka ribuan 4, artinya 4 kardus.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Angka berapa di tempat ratusan?",
   "answer": "5",
   "hint": "Ratusan ada tepat di kanan ribuan.",
   "explain": "Angka ratusan 5, artinya 5 kotak.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Baca dari kiri. Bagaimana 4.528 dibaca?",
   "options": [
    "empat ribu lima ratus dua puluh delapan",
    "empat ribu lima ratus delapan puluh dua",
    "empat lima dua delapan"
   ],
   "answer": "empat ribu lima ratus dua puluh delapan",
   "hint": "Baca ribuan, ratusan, puluhan, lalu satuan.",
   "explain": "4 ribu, 5 ratus, 2 puluh, 8: empat ribu lima ratus dua puluh delapan.",
   "error": "salah-baca-bilangan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Berapa nilai angka 5?",
   "answer": "500",
   "hint": "Angka 5 ada di tempat ratusan, seperti 5 kotak berisi 100.",
   "explain": "5 kotak = 5 × 100 = 500.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 4.000 + 500 + 20 + 8 = ?",
   "answer": "4528",
   "hint": "Gabungkan bentuk panjangnya.",
   "explain": "Hasilnya 4.528, sama dengan bilangan awal.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 4.528 dibaca empat ribu lima ratus dua puluh delapan, dan nilai angka 5 adalah 500.",
 "visual": {
  "type": "base10",
  "thousands": 4,
  "hundreds": 5,
  "tens": 2,
  "ones": 8
 }
}
```

### Contoh 2: Menulis bilangan yang punya tempat kosong

```soal
{
 "title": "Contoh 2",
 "text": "Tulis dengan angka: tujuh ribu enam puluh lima.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Tujuh ribu. Angka ribuannya berapa?",
   "answer": "7",
   "hint": "Tujuh ribu berarti 7 kardus.",
   "explain": "Ribuan 7.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Angka ratusannya berapa?",
   "answer": "0",
   "hint": "Apakah ada kata \"ratus\" di soal?",
   "explain": "Tidak ada kata ratus, jadi ratusan 0.",
   "error": "lupa-nol-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Enam puluh. Angka puluhannya berapa?",
   "answer": "6",
   "hint": "Enam puluh berarti 6 bungkus.",
   "explain": "Puluhan 6.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Tulis bilangannya.",
   "answer": "7.065",
   "hint": "Susun ribuan, ratusan, puluhan, satuan. Jangan lupa angka 0.",
   "explain": "7.065. Angka 0 menjaga 6 tetap di tempat puluhan.",
   "error": "lupa-nol-tempat"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: Bagaimana 7.065 dibaca?",
   "options": [
    "tujuh ribu enam puluh lima",
    "tujuh ratus enam puluh lima",
    "tujuh ribu enam ratus lima"
   ],
   "answer": "tujuh ribu enam puluh lima",
   "hint": "Baca dari ribuan.",
   "explain": "Cocok dengan soal.",
   "error": "salah-baca-bilangan"
  }
 ],
 "conclusion": "Jadi tujuh ribu enam puluh lima ditulis 7.065."
}
```

### Contoh 3: Mengurutkan bilangan

```soal
{
 "title": "Contoh 3",
 "text": "Urutkan dari yang terkecil: 3.586, 3.658, 3.568.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Bandingkan ribuan. Apakah angka ribuannya sama?",
   "options": [
    "Ya, semua 3",
    "Tidak"
   ],
   "answer": "Ya, semua 3",
   "hint": "Lihat angka paling kiri tiap bilangan.",
   "explain": "Semua punya 3 kardus, jadi lanjut ke ratusan.",
   "error": "banding-dari-kanan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Bandingkan ratusan. Bilangan mana yang terbesar?",
   "options": [
    "3.658",
    "3.586",
    "3.568"
   ],
   "answer": "3.658",
   "hint": "Angka ratusannya 5, 6, dan 5.",
   "explain": "3.658 punya 6 kotak, paling banyak.",
   "error": "salah-banding-bilangan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Bandingkan puluhan 3.586 dan 3.568. Mana yang lebih kecil?",
   "options": [
    "3.568",
    "3.586"
   ],
   "answer": "3.568",
   "hint": "Puluhannya 8 dan 6.",
   "explain": "6 bungkus lebih sedikit dari 8 bungkus, jadi 3.568 lebih kecil.",
   "error": "banding-dari-kanan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Susun dari yang terkecil.",
   "options": [
    "3.568, 3.586, 3.658",
    "3.586, 3.568, 3.658",
    "3.658, 3.586, 3.568"
   ],
   "answer": "3.568, 3.586, 3.658",
   "hint": "Mulai dari yang paling kecil yang kamu temukan di Langkah 3.",
   "explain": "3.568 < 3.586 < 3.658.",
   "error": "salah-urutan-bilangan"
  }
 ],
 "conclusion": "Jadi urutannya 3.568, 3.586, 3.658."
}
```

### Contoh 4: Soal cerita dan pola

```soal
{
 "title": "Contoh 4",
 "text": "Gudang Pak Budi berisi 3 kardus, 6 kotak, dan 4 permen lepas. Tidak ada bungkus. Setiap hari datang 1 kotak baru (100 permen).",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Berapa permen di gudang sekarang?",
   "answer": "3.604",
   "hint": "Ribuan 3, ratusan 6, puluhan 0, satuan 4.",
   "explain": "3.000 + 600 + 0 + 4 = 3.604.",
   "error": "lupa-nol-tempat",
   "suffix": "permen"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Berapa permen setelah 1 hari?",
   "answer": "3.704",
   "hint": "Tambah 1 kotak: hanya angka ratusan yang naik 1.",
   "explain": "3.604 + 100 = 3.704.",
   "error": "salah-pola-bilangan",
   "suffix": "permen"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Berapa permen setelah 2 hari?",
   "answer": "3.804",
   "hint": "Loncat 100 lagi.",
   "explain": "3.704 + 100 = 3.804.",
   "error": "salah-pola-bilangan",
   "suffix": "permen"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Berapa permen setelah 3 hari?",
   "answer": "3.904",
   "hint": "Loncat 100 lagi.",
   "explain": "3.804 + 100 = 3.904.",
   "error": "salah-pola-bilangan",
   "suffix": "permen"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 3 loncatan × 100 = ?",
   "answer": "300",
   "hint": "Dari 3.604 ke 3.904 bertambah berapa?",
   "explain": "3 × 100 = 300, dan 3.604 + 300 = 3.904. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi ada 3.604 permen, lalu 3.704, 3.804, dan 3.904 permen setelah 1, 2, dan 3 hari.",
 "visual": {
  "type": "base10",
  "thousands": 3,
  "hundreds": 6,
  "tens": 0,
  "ones": 4
 }
}
```

## Kesalahan yang sering terjadi

- **Lupa menulis 0.** "Tujuh ribu enam puluh lima" ditulis 765. Itu hanya tujuh ratus enam puluh lima. Tempat ratusan kosong harus diisi 0: 7.065.
- **Membandingkan dari kanan.** Mengira 2.999 > 3.001 karena 999 terlihat besar. Selalu mulai dari ribuan: 2 kardus < 3 kardus, jadi 2.999 < 3.001.
- **Salah menyebut nilai angka.** Menjawab nilai angka 5 pada 4.528 adalah 5. Yang ditanya nilainya, yaitu 500, karena 5 ada di tempat ratusan.
- **Salah saat pola melewati ribuan.** Menulis 6.800, 6.900, 6.1000. Yang benar 7.000, karena 10 kotak menjadi 1 kardus.

## Ringkasan

- Bilangan 4 angka punya tempat ribuan, ratusan, puluhan, dan satuan (kardus, kotak, bungkus, permen lepas).
- Baca dan tulis dari kiri. Tempat yang kosong diisi 0.
- Bentuk panjang: 3.725 = 3.000 + 700 + 20 + 5.
- Bandingkan mulai dari ribuan, lalu ke kanan sampai menemukan angka yang berbeda.
- Loncat 100: angka ratusan naik 1. Loncat 1.000: angka ribuan naik 1.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tulis 6.209 dengan kata-kata.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Angka berapa di tempat puluhan?",
   "answer": "0",
   "hint": "Puluhan ada di kanan ratusan.",
   "explain": "Puluhan 0, jadi tidak dibaca.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Bagaimana 6.209 dibaca?",
   "options": [
    "enam ribu dua ratus sembilan",
    "enam ribu dua ratus sembilan puluh",
    "enam ribu dua puluh sembilan"
   ],
   "answer": "enam ribu dua ratus sembilan",
   "hint": "6 ribu, 2 ratus, 0 puluh, 9.",
   "explain": "Enam ribu dua ratus sembilan. Tempat puluhan bernilai 0, jadi tidak dibaca.",
   "error": "salah-baca-bilangan"
  }
 ],
 "conclusion": "6.209 dibaca enam ribu dua ratus sembilan."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Berapa nilai angka 7 pada bilangan 3.752?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Angka 7 ada di tempat apa?",
   "options": [
    "ribuan",
    "ratusan",
    "puluhan",
    "satuan"
   ],
   "answer": "ratusan",
   "hint": "Hitung tempat dari kanan: satuan, puluhan, ratusan, ribuan.",
   "explain": "Angka 7 ada di tempat ratusan.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Berapa nilainya?",
   "answer": "700",
   "hint": "7 kotak, tiap kotak 100.",
   "explain": "7 × 100 = 700.",
   "error": "salah-nilai-tempat"
  }
 ],
 "conclusion": "Nilai angka 7 pada 3.752 adalah 700."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Urutkan dari yang terbesar: 5.091, 5.910, 5.190, 5.019.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Ribuan semuanya 5. Dari ratusan, bilangan mana yang terbesar?",
   "options": [
    "5.910",
    "5.190",
    "5.091"
   ],
   "answer": "5.910",
   "hint": "Angka ratusannya 0, 9, 1, 0.",
   "explain": "5.910 punya 9 ratusan.",
   "error": "salah-banding-bilangan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: 5.091 dan 5.019 punya ratusan 0. Mana yang lebih besar?",
   "options": [
    "5.091",
    "5.019"
   ],
   "answer": "5.091",
   "hint": "Bandingkan puluhannya: 9 dan 1.",
   "explain": "9 puluhan lebih banyak dari 1 puluhan.",
   "error": "banding-dari-kanan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Susun dari yang terbesar.",
   "options": [
    "5.910, 5.190, 5.091, 5.019",
    "5.910, 5.091, 5.190, 5.019",
    "5.019, 5.091, 5.190, 5.910"
   ],
   "answer": "5.910, 5.190, 5.091, 5.019",
   "hint": "Ratusan: 9, lalu 1, lalu yang 0.",
   "explain": "5.910, 5.190, 5.091, 5.019.",
   "error": "salah-urutan-bilangan"
  }
 ],
 "conclusion": "Urutan dari terbesar: 5.910, 5.190, 5.091, 5.019."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Lanjutkan polanya: 2.075, 3.075, 4.075, ..., ...",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Polanya loncat berapa?",
   "answer": "1000",
   "hint": "Hitung 3.075 − 2.075.",
   "explain": "Loncat 1.000, angka ribuan naik 1.",
   "error": "salah-pola-bilangan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Bilangan berikutnya?",
   "answer": "5.075",
   "hint": "Tambah 1.000 pada 4.075.",
   "explain": "4.075 + 1.000 = 5.075.",
   "error": "salah-pola-bilangan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Bilangan sesudahnya?",
   "answer": "6.075",
   "hint": "Tambah 1.000 lagi.",
   "explain": "5.075 + 1.000 = 6.075.",
   "error": "salah-pola-bilangan"
  }
 ],
 "conclusion": "Polanya berlanjut 5.075 dan 6.075."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Bu Siti punya 4 kardus, 9 bungkus, dan 3 permen lepas. Tidak ada kotak. Berapa permen Bu Siti?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Angka ratusannya berapa?",
   "answer": "0",
   "hint": "Kotak = ratusan. Ada berapa kotak?",
   "explain": "Tidak ada kotak, jadi ratusan 0.",
   "error": "lupa-nol-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Berapa permen semuanya?",
   "answer": "4.093",
   "hint": "Ribuan 4, ratusan 0, puluhan 9, satuan 3.",
   "explain": "4.000 + 0 + 90 + 3 = 4.093.",
   "error": "lupa-nol-tempat",
   "suffix": "permen"
  }
 ],
 "conclusion": "Bu Siti punya 4.093 permen."
}
```
