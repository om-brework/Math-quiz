---
id: sd2-01-bilangan-sampai-1000
judul: Bilangan sampai 1.000
jenjang: sd2
moe: "Primary 2 · Number and Algebra · Whole Numbers"
prasyarat: [sd1-01-bilangan-sampai-100]
durasi_menit: 30
---

## Kenapa belajar ini?

Di sekolahmu mungkin ada 450 siswa. Di perpustakaan mungkin ada 800 buku. Bilangan sampai 1.000 membantu kamu membaca, menulis, dan membandingkan jumlah sebanyak itu.

## Analogi

Bayangkan sebuah toko permen. Permen dijual dengan tiga cara:

- **Butir**: 1 permen.
- **Bungkus**: berisi 10 permen.
- **Kotak**: berisi 10 bungkus, yaitu 100 permen.

Kalau kamu punya 3 kotak, 4 bungkus, dan 7 butir, kamu punya 347 permen. Kotak adalah **ratusan**, bungkus adalah **puluhan**, butir adalah **satuan**.

```visual
{"type": "base10", "hundreds": 3, "tens": 4, "ones": 7, "caption": "3 kotak (ratusan), 4 bungkus (puluhan), 7 butir (satuan) = 347"}
```

Sepuluh bungkus sama dengan satu kotak. Lihat: 10 kelompok berisi 10 menjadi 100.

```anim
{"type": "benda", "op": "×", "a": 10, "b": 10, "item": "permen", "title": "10 bungkus berisi 10 = 100 permen"}
```

## Konsep

### Membilang loncat 10 dan 100

Menambah 1 bungkus berarti loncat 10:

```anim
{"type": "garis", "from": 230, "to": 280, "start": 230, "jumps": [10, 10, 10, 10], "step": 10, "title": "230, 240, 250, 260, 270"}
```

Menambah 1 kotak berarti loncat 100:

```anim
{"type": "garis", "from": 100, "to": 600, "start": 150, "jumps": [100, 100, 100, 100], "step": 50, "title": "150, 250, 350, 450, 550"}
```

Hati-hati saat melewati ratusan. Setelah 390, tambah 1 bungkus lagi menjadi 400. Sepuluh bungkus sudah menjadi 1 kotak baru.

```visual
{"type": "numberLine", "from": 370, "to": 410, "step": 10, "jumps": [{"from": 370, "to": 380}, {"from": 380, "to": 390}, {"from": 390, "to": 400, "label": "+10"}, {"from": 400, "to": 410}], "caption": "370, 380, 390, 400, 410"}
```

### Nilai tempat

Setiap angka punya tempat. Tempatnya menentukan nilainya.

```visual
{"type": "table", "head": ["Ratusan", "Puluhan", "Satuan"], "rows": [["3", "4", "7"], ["300", "40", "7"]], "caption": "347 = 300 + 40 + 7"}
```

- Angka 3 bernilai 300 (3 kotak).
- Angka 4 bernilai 40 (4 bungkus).
- Angka 7 bernilai 7 (7 butir).

Kalau tidak ada bungkus, tulis **0** di tempat puluhan. Contoh: 4 kotak dan 7 butir ditulis 407.

```visual
{"type": "base10", "hundreds": 4, "tens": 0, "ones": 7, "caption": "4 kotak, 0 bungkus, 7 butir = 407"}
```

### Membaca dan menulis bilangan

Baca dari ratusan, lalu puluhan, lalu satuan.

- 347 dibaca **tiga ratus empat puluh tujuh**.
- 100 dibaca **seratus**, bukan "satu ratus".
- 112 dibaca **seratus dua belas**.
- 610 dibaca **enam ratus sepuluh**.
- 407 dibaca **empat ratus tujuh**.
- 1.000 dibaca **seribu**. Ini sama dengan 10 kotak.

### Membandingkan dan mengurutkan

Bandingkan **kotak dulu** (ratusan). Yang kotaknya lebih banyak, permennya lebih banyak. Kalau kotaknya sama, bandingkan bungkus (puluhan). Kalau masih sama, bandingkan butir (satuan).

```visual
{"type": "table", "head": ["Bilangan", "Ratusan", "Puluhan", "Satuan"], "rows": [["582", "5", "8", "2"], ["528", "5", "2", "8"]], "caption": "Ratusan sama, puluhan 8 lebih dari 2. Jadi 582 > 528."}
```

Lambang yang dipakai:

- **>** artinya lebih dari. Contoh: 582 > 528.
- **<** artinya kurang dari. Contoh: 528 < 582.
- **=** artinya sama dengan.

Ujung lambang yang terbuka selalu menghadap bilangan yang lebih besar.

### Pola bilangan

Pola bilangan bertambah atau berkurang dengan jumlah yang sama. Cari dulu loncatannya.

```anim
{"type": "garis", "from": 210, "to": 235, "start": 215, "jumps": [5, 5, 5], "step": 5, "title": "215, 220, 225, 230: loncat tambah 5"}
```

```anim
{"type": "garis", "from": 500, "to": 1000, "start": 900, "jumps": [-100, -100, -100], "step": 100, "title": "900, 800, 700, 600: loncat kurang 100"}
```

### Bilangan ganjil dan genap

Bilangan **genap** bisa dipasangkan berdua tanpa sisa. Bilangan **ganjil** selalu tersisa satu.

```anim
{"type": "benda", "op": "÷", "a": 7, "b": 2, "item": "kelereng", "title": "7 kelereng dibagi berdua: sisa 1, jadi 7 ganjil"}
```

Cukup lihat **angka satuan**:

- Satuan 0, 2, 4, 6, 8 berarti genap.
- Satuan 1, 3, 5, 7, 9 berarti ganjil.

Kenapa cukup satuan? Kotak dan bungkus selalu bisa dipasangkan berdua. Yang menentukan hanya butirnya.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menulis dan membaca bilangan

```soal
{
 "title": "Kerjakan bersama",
 "text": "Budi punya 5 kotak, 0 bungkus, dan 9 butir permen. Tulis banyak permennya dengan angka dan dengan kata.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Hitung tiap tempat. Berapa angka di tempat puluhan?",
   "answer": "0",
   "hint": "Ada berapa bungkus?",
   "explain": "Tidak ada bungkus, jadi puluhan = 0. Ratusan 5, satuan 9.",
   "error": "tertukar-puluhan-satuan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Tulis angkanya dari kiri: ratusan, puluhan, satuan.",
   "answer": "509",
   "hint": "Tulis 5, lalu 0, lalu 9. Angka 0 jangan dibuang.",
   "explain": "5 ratusan, 0 puluhan, 9 satuan = 509.",
   "error": "salah-nilai-angka"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Bagaimana 509 dibaca?",
   "options": [
    "lima ratus sembilan",
    "lima puluh sembilan",
    "lima ratus sembilan puluh"
   ],
   "answer": "lima ratus sembilan",
   "hint": "500 dibaca lima ratus, 9 dibaca sembilan.",
   "explain": "Lima ratus sembilan. Puluhan 0 tidak dibaca.",
   "error": "salah-baca-bilangan-kata"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 500 + 0 + 9 = ?",
   "answer": "509",
   "hint": "Jumlahkan nilai setiap tempat.",
   "explain": "500 + 0 + 9 = 509. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 509, dibaca lima ratus sembilan.",
 "visual": {
  "type": "base10",
  "hundreds": 5,
  "tens": 0,
  "ones": 9
 }
}
```

### Contoh 2: Membandingkan dan melanjutkan pola

```soal
{
 "title": "Kerjakan bersama",
 "text": "(a) Isi dengan > atau <: 482 ... 428. (b) Lanjutkan pola: 455, 465, 475, ..., ..., 505.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Bandingkan ratusan. 482 dan 428 sama-sama 4 ratusan. Apa yang dibandingkan berikutnya?",
   "options": [
    "Puluhan",
    "Satuan"
   ],
   "answer": "Puluhan",
   "hint": "Urutannya ratusan, puluhan, lalu satuan.",
   "explain": "Ratusan sama, jadi lanjut ke puluhan.",
   "error": "bandingkan-satuan-dulu"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Puluhan 482 adalah 8, puluhan 428 adalah 2. Jadi 482 ... 428?",
   "options": [
    ">",
    "<",
    "="
   ],
   "answer": ">",
   "hint": "8 bungkus lebih banyak dari 2 bungkus.",
   "explain": "8 > 2, jadi 482 > 428.",
   "error": "salah-banding-bilangan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Cari loncatan pola. 465 − 455 = ?",
   "answer": "10",
   "hint": "Kurangkan dua bilangan yang berurutan.",
   "explain": "Loncatannya tambah 10.",
   "error": "salah-aturan-pola"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Lanjutkan. 475 + 10 = ?",
   "answer": "485",
   "hint": "Tambah 1 bungkus ke 475.",
   "explain": "475 + 10 = 485.",
   "error": "salah-lanjutkan-pola"
  },
  {
   "kind": "number",
   "prompt": "Bilangan berikutnya: 485 + 10 = ?",
   "answer": "495",
   "hint": "Puluhan 8 menjadi 9.",
   "explain": "485 + 10 = 495.",
   "error": "salah-lanjutkan-pola"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 495 + 10 = ?",
   "answer": "505",
   "hint": "Hasilnya harus sama dengan bilangan terakhir di soal.",
   "explain": "495 + 10 = 505. Cocok dengan soal, jadi benar.",
   "error": "salah-lewat-ratusan"
  }
 ],
 "conclusion": "Jadi 482 > 428, dan pola dilanjutkan dengan 485 dan 495."
}
```

### Contoh 3: Soal cerita

```soal
{
 "title": "Kerjakan bersama",
 "text": "Kelas 2A mengumpulkan 438 tutup botol. Kelas 2B mengumpulkan 483. Kelas 2C mengumpulkan 384. Urutkan dari yang paling banyak. Apakah tutup botol kelas 2A bisa dipasangkan berdua tanpa sisa?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Bandingkan ratusan. Mana yang paling sedikit?",
   "options": [
    "384",
    "438",
    "483"
   ],
   "answer": "384",
   "hint": "Cari yang ratusannya paling kecil.",
   "explain": "384 hanya punya 3 ratusan, yang lain 4 ratusan.",
   "error": "bandingkan-satuan-dulu"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Bandingkan puluhan 438 dan 483. Mana yang paling banyak?",
   "options": [
    "483",
    "438"
   ],
   "answer": "483",
   "hint": "Puluhan 438 adalah 3, puluhan 483 adalah 8.",
   "explain": "8 puluhan lebih dari 3 puluhan, jadi 483 paling banyak.",
   "error": "bandingkan-satuan-dulu"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Urutkan dari yang paling banyak.",
   "options": [
    "483, 438, 384",
    "384, 438, 483",
    "438, 483, 384"
   ],
   "answer": "483, 438, 384",
   "hint": "Mulai dari yang paling banyak.",
   "explain": "483, 438, 384.",
   "error": "salah-urutkan-bilangan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Satuan 438 adalah 8. Apakah 438 genap?",
   "options": [
    "Ya, genap",
    "Tidak, ganjil"
   ],
   "answer": "Ya, genap",
   "hint": "Lihat angka satuan saja: 0, 2, 4, 6, 8 berarti genap.",
   "explain": "8 genap, jadi 438 bisa dipasangkan tanpa sisa.",
   "error": "ganjil-genap-angka-depan"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: apakah 483 > 438 dan 438 > 384?",
   "options": [
    "Ya, keduanya benar",
    "Tidak"
   ],
   "answer": "Ya, keduanya benar",
   "hint": "Bandingkan ratusan dulu, lalu puluhan.",
   "explain": "Keduanya benar, jadi urutannya tepat.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Urutannya 2B (483), 2A (438), 2C (384). Tutup botol 2A bisa dipasangkan tanpa sisa karena 438 genap."
}
```

## Kesalahan yang sering terjadi

- **Membuang angka 0.** "Empat ratus tujuh" ditulis 47. Itu salah, karena 47 hanya 4 bungkus dan 7 butir. Tidak ada bungkus berarti tulis 0: 407.
- **Menulis seperti diucapkan.** "Empat ratus tujuh" ditulis 4007. Bilangan ratusan hanya punya tiga angka: ratusan, puluhan, satuan. Tulis 407.
- **Membandingkan dari kanan.** Menganggap 199 > 201 karena 9 lebih dari 1. Selalu mulai dari ratusan: 1 kotak kurang dari 2 kotak, jadi 199 < 201.
- **Melihat angka depan untuk ganjil-genap.** Menganggap 312 ganjil karena ada angka 3. Yang dilihat hanya satuan. Satuannya 2, jadi 312 genap.
- **Salah loncat melewati ratusan.** Menulis 390, 3100. Yang benar 390, 400.

## Ringkasan

- 1 kotak = 10 bungkus = 100 butir. Ratusan, puluhan, satuan.
- Nilai angka tergantung tempatnya: 347 = 300 + 40 + 7.
- Tempat kosong ditulis 0, misalnya 407.
- Membandingkan: ratusan dulu, lalu puluhan, lalu satuan. Pakai >, <, =.
- Pola: cari loncatannya dulu, lalu lanjutkan.
- Ganjil atau genap ditentukan oleh angka satuan.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tulis dengan angka: 6 ratusan, 0 puluhan, 9 satuan. Lalu tulis dengan kata.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Tulis dengan angka.",
   "answer": "609",
   "hint": "Tidak ada puluhan, jadi tempat puluhan diisi 0.",
   "explain": "6 ratusan, 0 puluhan, 9 satuan = 609.",
   "error": "salah-nilai-angka"
  },
  {
   "kind": "choice",
   "prompt": "Bagaimana 609 dibaca?",
   "options": [
    "enam ratus sembilan",
    "enam puluh sembilan",
    "enam ratus sembilan puluh"
   ],
   "answer": "enam ratus sembilan",
   "hint": "Baca ratusan, lalu satuan. Puluhan 0 tidak dibaca.",
   "explain": "Enam ratus sembilan.",
   "error": "salah-baca-bilangan-kata"
  }
 ],
 "conclusion": "Jadi 609, dibaca enam ratus sembilan."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Tulis dengan angka: delapan ratus dua belas.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Delapan ratus bernilai berapa?",
   "answer": "800",
   "hint": "8 kotak.",
   "explain": "Delapan ratus = 800.",
   "error": "salah-nilai-angka"
  },
  {
   "kind": "number",
   "prompt": "Tulis bilangannya: 800 + 12 = ?",
   "answer": "812",
   "hint": "Dua belas = 1 puluhan dan 2 satuan.",
   "explain": "800 + 12 = 812.",
   "error": "salah-baca-bilangan-kata"
  }
 ],
 "conclusion": "Jadi delapan ratus dua belas = 812."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Isi dengan > atau <: 699 ... 701.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Apa yang dibandingkan lebih dulu?",
   "options": [
    "Ratusan: 6 dan 7",
    "Satuan: 9 dan 1"
   ],
   "answer": "Ratusan: 6 dan 7",
   "hint": "Selalu mulai dari tempat paling kiri.",
   "explain": "Bandingkan ratusan dulu: 6 dan 7.",
   "error": "bandingkan-satuan-dulu"
  },
  {
   "kind": "choice",
   "prompt": "Jadi 699 ... 701?",
   "options": [
    "<",
    ">",
    "="
   ],
   "answer": "<",
   "hint": "6 ratusan atau 7 ratusan, mana yang lebih sedikit?",
   "explain": "6 ratusan kurang dari 7 ratusan, jadi 699 < 701.",
   "error": "bandingkan-satuan-dulu"
  }
 ],
 "conclusion": "Jadi 699 < 701."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Lanjutkan pola: 960, 970, 980, ..., ...",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa loncatannya? 970 − 960 = ?",
   "answer": "10",
   "hint": "Kurangkan dua bilangan yang berurutan.",
   "explain": "Loncatannya tambah 10.",
   "error": "salah-aturan-pola"
  },
  {
   "kind": "number",
   "prompt": "Bilangan berikutnya: 980 + 10 = ?",
   "answer": "990",
   "hint": "Tambah 1 puluhan.",
   "explain": "980 + 10 = 990.",
   "error": "salah-lanjutkan-pola"
  },
  {
   "kind": "number",
   "prompt": "Bilangan sesudahnya: 990 + 10 = ?",
   "answer": "1000",
   "hint": "Sepuluh kotak menjadi seribu.",
   "explain": "990 + 10 = 1.000.",
   "error": "salah-lewat-ratusan"
  }
 ],
 "conclusion": "Jadi polanya dilanjutkan dengan 990 dan 1.000.",
 "visual": {
  "type": "numberLine",
  "from": 950,
  "to": 1000,
  "step": 10,
  "jumps": [
   {
    "from": 960,
    "to": 970
   },
   {
    "from": 970,
    "to": 980
   }
  ],
  "hide": [
   990,
   1000
  ]
 }
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Urutkan dari yang terbesar: 356, 365, 536. Mana yang ganjil?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Mana yang terbesar?",
   "options": [
    "536",
    "365",
    "356"
   ],
   "answer": "536",
   "hint": "Bandingkan ratusan dulu.",
   "explain": "536 punya 5 ratusan, yang lain 3 ratusan.",
   "error": "bandingkan-satuan-dulu"
  },
  {
   "kind": "choice",
   "prompt": "Urutkan dari yang terbesar.",
   "options": [
    "536, 365, 356",
    "536, 356, 365",
    "356, 365, 536"
   ],
   "answer": "536, 365, 356",
   "hint": "Untuk 356 dan 365, bandingkan puluhan: 5 dan 6.",
   "explain": "536, 365, 356.",
   "error": "salah-urutkan-bilangan"
  },
  {
   "kind": "choice",
   "prompt": "Mana yang ganjil?",
   "options": [
    "365",
    "356",
    "536"
   ],
   "answer": "365",
   "hint": "Lihat angka satuan saja.",
   "explain": "Satuan 365 adalah 5, jadi ganjil. 356 dan 536 bersatuan 6, genap.",
   "error": "ganjil-genap-angka-depan"
  }
 ],
 "conclusion": "Urutannya 536, 365, 356. Yang ganjil hanya 365."
}
```
