---
id: sd4-01-bilangan-sampai-100000
judul: Bilangan sampai 100.000 dan Pembulatan
jenjang: sd4
moe: "Primary 4 · Number and Algebra · Whole Numbers"
prasyarat: [sd3-01-bilangan-sampai-10000]
durasi_menit: 35
---

## Kenapa belajar ini?

Penonton sepak bola di stadion bisa mencapai puluhan ribu orang. Harga sepeda bisa puluhan ribu Rupiah lebih. Kamu perlu bisa membaca bilangan besar dan memperkirakannya dengan cepat, misalnya "kira-kira 49.000 orang".

## Analogi

Bayangkan kamu menghitung uang di celengan. Uangnya ada lima jenis: lembaran **Rp10.000**, lembaran **Rp1.000**, koin **Rp100**, koin **Rp10**, dan koin **Rp1**.

Setiap jenis uang punya **kotaknya sendiri**. Angka pada sebuah bilangan memberi tahu berapa lembar atau koin di setiap kotak. Misalnya uang di bawah ini: 2 lembar Rp10.000, 1 lembar Rp1.000, dan 3 koin Rp100. Jumlahnya Rp21.300.

```visual
{"type": "money", "items": [10000, 10000, 1000, 100, 100, 100], "caption": "2 × Rp10.000 + 1 × Rp1.000 + 3 × Rp100 = Rp21.300"}
```

Saat **membulatkan**, kamu bertanya: "Uang ini paling dekat dengan berapa lembar Rp1.000 (atau Rp100, atau Rp10) yang pas?" Kamu tidak menghitung koin kecil satu per satu. Kamu memilih jumlah bulat yang paling dekat. Rp21.300 lebih dekat ke Rp21.000 daripada ke Rp22.000.

```visual
{"type": "numberLine", "from": 21000, "to": 22000, "step": 100, "marks": [21300], "caption": "21.300 lebih dekat ke 21.000 daripada ke 22.000"}
```

## Konsep

### Nilai tempat sampai puluh ribuan

Bilangan 5 angka punya lima tempat. Contohnya 47.253:

```visual
{"type": "table", "head": ["Tempat", "Puluh ribuan", "Ribuan", "Ratusan", "Puluhan", "Satuan"], "rows": [["Angka", "4", "7", "2", "5", "3"], ["Nilai", "40.000", "7.000", "200", "50", "3"]], "caption": "Tabel nilai tempat 47.253"}
```

**Nilai tempat** adalah nama kotaknya (misalnya ribuan). **Nilai angka** adalah berapa angka itu bernilai. Pada 47.253, angka 7 ada di tempat ribuan, jadi nilainya 7.000. Seperti 7 lembar Rp1.000.

```visual
{"type": "base10", "thousands": 7, "hundreds": 2, "tens": 5, "ones": 3, "caption": "Tanpa 40.000: 7 ribuan, 2 ratusan, 5 puluhan, 3 satuan = 7.253"}
```

Bentuk panjangnya:

$$47.253 = 40.000 + 7.000 + 200 + 50 + 3$$

Dibaca: **empat puluh tujuh ribu dua ratus lima puluh tiga**.

Bilangan 100.000 dibaca **seratus ribu**. Itu sama dengan 10 lembar Rp10.000.

### Membandingkan dan mengurutkan

Bandingkan angka dari **tempat paling kiri**. Ini seperti membandingkan dua celengan: lihat dulu siapa yang punya lembaran Rp10.000 lebih banyak. Kalau sama, baru lihat lembaran Rp1.000, dan seterusnya.

- Lambang $>$ artinya "lebih dari".
- Lambang $<$ artinya "kurang dari".

### Pola bilangan

Pada pola, cari **berapa yang ditambah atau dikurangi** setiap langkah. Contoh: 25.300, 26.300, 27.300, ... Setiap langkah bertambah 1.000. Bilangan berikutnya 28.300.

```anim
{"type": "garis", "from": 25000, "to": 29000, "start": 25300, "jumps": [1000, 1000, 1000], "step": 500, "title": "Pola: setiap langkah +1.000"}
```

### Membulatkan

**Membulatkan** artinya mengganti bilangan dengan bilangan bulat terdekat yang lebih mudah, misalnya kelipatan 10, 100, atau 1.000. Lambang $\approx$ artinya "kira-kira sama dengan".

Aturan membulatkan:

1. Tentukan tempat tujuan (puluhan, ratusan, atau ribuan).
2. Lihat **satu angka di kanannya**.
3. Kalau angka itu **0, 1, 2, 3, atau 4**, angka tujuan tetap. Semua angka di kanannya menjadi 0.
4. Kalau angka itu **5, 6, 7, 8, atau 9**, angka tujuan naik 1. Semua angka di kanannya menjadi 0.

Kenapa 5 naik? Karena 5 tepat di tengah. Kesepakatannya, yang di tengah dibulatkan **ke atas**.

```visual
{"type": "numberLine", "from": 36400, "to": 36500, "step": 10, "marks": [36450, 36470], "caption": "36.472 sudah lewat titik tengah 36.450, jadi dibulatkan ke 36.500"}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Membaca, menulis, dan nilai angka

```soal
{
 "title": "Contoh 1",
 "text": "Tulis 70.508 dengan kata-kata. Berapa nilai angka 5?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Masukkan ke tabel nilai tempat. Berapa angka di tempat ribuan?",
   "answer": "0",
   "hint": "Hitung dari kanan: satuan, puluhan, ratusan, ribuan.",
   "explain": "70.508: 7 puluh ribuan, 0 ribuan, 5 ratusan, 0 puluhan, 8 satuan.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Baca per bagian. Bagaimana 70.508 dibaca?",
   "options": [
    "Tujuh puluh ribu lima ratus delapan",
    "Tujuh ribu lima ratus delapan",
    "Tujuh puluh ribu lima puluh delapan"
   ],
   "answer": "Tujuh puluh ribu lima ratus delapan",
   "hint": "Baca 70 sebagai 'tujuh puluh ribu', lalu baca 508.",
   "explain": "70 dibaca tujuh puluh ribu, 508 dibaca lima ratus delapan. Tempat berisi 0 tidak dibaca.",
   "error": "salah-baca-bilangan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Angka 5 ada di tempat ratusan. Berapa nilainya?",
   "answer": "500",
   "hint": "Seperti 5 koin Rp100.",
   "explain": "5 ratusan = 500.",
   "error": "salah-nilai-angka"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 70.000 + 500 + 8 = ?",
   "answer": "70.508",
   "hint": "Jumlahkan bentuk panjangnya.",
   "explain": "70.000 + 500 + 8 = 70.508. Cocok dengan bilangan awal.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "70.508 dibaca tujuh puluh ribu lima ratus delapan, dan angka 5 bernilai 500.",
 "visual": {
  "type": "table",
  "head": [
   "Puluh ribuan",
   "Ribuan",
   "Ratusan",
   "Puluhan",
   "Satuan"
  ],
  "rows": [
   [
    "7",
    "?",
    "5",
    "0",
    "8"
   ]
  ]
 }
}
```

### Contoh 2: Mengurutkan bilangan

```soal
{
 "title": "Contoh 2",
 "text": "Urutkan dari yang terkecil: 45.381, 54.183, 45.318.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Bandingkan puluh ribuan. Bilangan mana yang paling besar?",
   "options": [
    "54.183",
    "45.381",
    "45.318"
   ],
   "answer": "54.183",
   "hint": "Lihat angka paling kiri: 4, 5, atau 4.",
   "explain": "54.183 punya 5 puluh ribuan, yang lain hanya 4.",
   "error": "banding-dari-kanan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: 45.381 dan 45.318 sama di puluh ribuan, ribuan, dan ratusan. Tempat mana yang dilihat berikutnya?",
   "options": [
    "Puluhan",
    "Satuan",
    "Ribuan"
   ],
   "answer": "Puluhan",
   "hint": "Bergerak satu tempat ke kanan dari ratusan.",
   "explain": "Setelah ratusan, kita lihat puluhan.",
   "error": "banding-dari-kanan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Puluhannya 8 dan 1. Mana yang lebih kecil?",
   "options": [
    "45.318",
    "45.381"
   ],
   "answer": "45.318",
   "hint": "1 puluhan lebih sedikit dari 8 puluhan.",
   "explain": "45.318 < 45.381 karena 1 < 8 di tempat puluhan.",
   "error": "salah-banding-bilangan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Tulis urutan dari yang terkecil.",
   "options": [
    "45.318, 45.381, 54.183",
    "45.381, 45.318, 54.183",
    "54.183, 45.381, 45.318"
   ],
   "answer": "45.318, 45.381, 54.183",
   "hint": "Mulai dari yang paling kecil, akhiri dengan yang paling besar.",
   "explain": "45.318 < 45.381 < 54.183.",
   "error": "salah-urutkan-bilangan"
  }
 ],
 "conclusion": "Urutan dari yang terkecil: 45.318, 45.381, 54.183."
}
```

### Contoh 3: Membulatkan ke tiga tempat berbeda

```soal
{
 "title": "Contoh 3",
 "text": "Bulatkan 36.472 ke puluhan, ratusan, dan ribuan terdekat.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Ke puluhan terdekat. Angka di kanan puluhan adalah 2. Hasilnya?",
   "answer": "36.470",
   "hint": "2 lebih kecil dari 5, jadi angka puluhan tetap.",
   "explain": "Angka 7 tetap, satuan menjadi 0: 36.470.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Ke ratusan terdekat. Angka di kanan ratusan adalah 7. Hasilnya?",
   "answer": "36.500",
   "hint": "7 termasuk 5 sampai 9, jadi angka ratusan naik 1.",
   "explain": "Angka 4 naik menjadi 5, kanannya menjadi 0: 36.500.",
   "error": "salah-arah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Ke ribuan terdekat. Lihat angka ratusan, yaitu 4. Hasilnya?",
   "answer": "36.000",
   "hint": "4 lebih kecil dari 5.",
   "explain": "Angka 6 tetap, kanannya menjadi 0: 36.000.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: titik tengah antara 36.400 dan 36.500 adalah?",
   "answer": "36.450",
   "hint": "Tengah-tengah dari 400 dan 500.",
   "explain": "36.472 lewat dari 36.450, jadi memang lebih dekat ke 36.500.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "36.472 ≈ 36.470 (puluhan), ≈ 36.500 (ratusan), ≈ 36.000 (ribuan).",
 "visual": {
  "type": "numberLine",
  "from": 36400,
  "to": 36500,
  "step": 10,
  "marks": [
   36470
  ]
 }
}
```

### Contoh 4: Soal cerita

```soal
{
 "title": "Contoh 4",
 "text": "Penduduk Desa Sukamaju 23.845 orang. Penduduk Desa Sukamakmur 23.854 orang. Desa mana yang penduduknya lebih banyak? Bulatkan kedua bilangan ke ratusan terdekat.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Apa saja tugasnya?",
   "options": [
    "Membandingkan, lalu membulatkan ke ratusan",
    "Menjumlahkan kedua bilangan",
    "Membulatkan ke ribuan saja"
   ],
   "answer": "Membandingkan, lalu membulatkan ke ratusan",
   "hint": "Baca lagi dua pertanyaan di soal.",
   "explain": "Ada dua tugas: membandingkan dan membulatkan ke ratusan.",
   "error": "abaikan-keterangan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Bandingkan. Desa mana yang lebih banyak?",
   "options": [
    "Sukamakmur (23.854)",
    "Sukamaju (23.845)"
   ],
   "answer": "Sukamakmur (23.854)",
   "hint": "Puluh ribuan, ribuan, ratusan sama. Lihat puluhan: 4 dan 5.",
   "explain": "5 puluhan > 4 puluhan, jadi 23.854 > 23.845.",
   "error": "salah-banding-bilangan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Bulatkan 23.845 ke ratusan terdekat.",
   "answer": "23.800",
   "hint": "Angka di kanan ratusan adalah 4.",
   "explain": "4 < 5, angka 8 tetap: 23.800.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Bulatkan 23.854 ke ratusan terdekat.",
   "answer": "23.900",
   "hint": "Angka di kanan ratusan adalah 5.",
   "explain": "5 dibulatkan ke atas, 8 naik menjadi 9: 23.900.",
   "error": "salah-arah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: selisih aslinya 23.854 − 23.845 = ?",
   "answer": "9",
   "hint": "Kurangkan satuan dan puluhannya saja.",
   "explain": "Selisihnya hanya 9 orang, tetapi setelah dibulatkan terlihat 100. Wajar, pembulatan hanya perkiraan.",
   "error": "salah-fakta-kurang",
   "suffix": "orang"
  }
 ],
 "conclusion": "Sukamakmur lebih banyak. 23.845 ≈ 23.800 dan 23.854 ≈ 23.900."
}
```

## Kesalahan yang sering terjadi

- **Lupa angka 0 saat menulis.** "Enam puluh ribu empat ratus sembilan" ditulis 6.409. Itu salah, karena puluh ribuan dan ribuan hilang. Pakai tabel nilai tempat: 6 puluh ribuan, 0 ribuan, 4 ratusan, 0 puluhan, 9 satuan. Jadi 60.409.
- **Membandingkan dari kanan.** Menganggap 45.319 lebih besar dari 54.183 karena 9 lebih besar dari 3. Selalu mulai dari tempat paling kiri.
- **Melihat angka yang salah saat membulatkan.** Untuk ribuan terdekat pada 36.472, yang dilihat adalah angka ratusan (4), bukan angka satuan. Lihat **satu angka tepat di kanan** tempat tujuan.
- **Lupa menyimpan saat angka 9 naik.** Membulatkan 39.960 ke ratusan terdekat menjadi "39.1000". Angka 9 ratusan naik menjadi 10 ratusan, yaitu 1 ribuan tambahan. Hasil yang benar 40.000.
- **Tidak mengganti angka di kanan dengan 0.** Membulatkan 36.472 ke ratusan menjadi 36.572. Setelah membulatkan, semua angka di kanan tempat tujuan menjadi 0: 36.500.

## Ringkasan

- Bilangan 5 angka punya tempat puluh ribuan, ribuan, ratusan, puluhan, dan satuan.
- Nilai angka = angka × nilai tempatnya. Pada 47.253, angka 7 bernilai 7.000.
- Bandingkan bilangan dari tempat paling kiri.
- Pada pola, cari berapa yang ditambah atau dikurangi setiap langkah.
- Membulatkan: lihat satu angka di kanan tempat tujuan. 0–4 tetap, 5–9 naik 1. Angka di kanannya menjadi 0.
- Lambang $\approx$ artinya "kira-kira sama dengan".

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tulis dengan angka: enam puluh ribu empat ratus sembilan.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Berapa angka di tempat puluh ribuan?",
   "answer": "6",
   "hint": "Enam puluh ribu.",
   "explain": "Enam puluh ribu = 6 puluh ribuan.",
   "error": "salah-baca-bilangan-kata"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Berapa angka di tempat ribuan?",
   "answer": "0",
   "hint": "Setelah 'enam puluh' tidak ada ribuan lagi.",
   "explain": "Tidak ada ribuan tambahan, jadi tulis 0.",
   "error": "lupa-nol-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tulis bilangannya.",
   "answer": "60.409",
   "hint": "6 puluh ribuan, 0 ribuan, 4 ratusan, 0 puluhan, 9 satuan.",
   "explain": "Bilangannya 60.409.",
   "error": "lupa-nol-tempat"
  }
 ],
 "conclusion": "Enam puluh ribu empat ratus sembilan = 60.409."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Berapa nilai angka 8 pada 38.215?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Angka 8 ada di tempat apa?",
   "options": [
    "Ribuan",
    "Puluh ribuan",
    "Ratusan"
   ],
   "answer": "Ribuan",
   "hint": "Hitung dari kanan: satuan, puluhan, ratusan, ribuan.",
   "explain": "Angka 8 di tempat ribuan.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Berapa nilainya?",
   "answer": "8.000",
   "hint": "8 ribuan.",
   "explain": "8 × 1.000 = 8.000.",
   "error": "salah-nilai-angka"
  }
 ],
 "conclusion": "Nilai angka 8 pada 38.215 adalah 8.000."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Urutkan dari yang terbesar: 70.099, 79.000, 70.909.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Puluh ribuan semuanya 7. Lihat ribuan. Mana yang terbesar?",
   "options": [
    "79.000",
    "70.909",
    "70.099"
   ],
   "answer": "79.000",
   "hint": "Ribuan: 0, 9, atau 0.",
   "explain": "79.000 punya 9 ribuan.",
   "error": "banding-dari-kanan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Bandingkan 70.909 dan 70.099 di ratusan. Mana yang lebih besar?",
   "options": [
    "70.909",
    "70.099"
   ],
   "answer": "70.909",
   "hint": "Ratusan: 9 dan 0.",
   "explain": "9 ratusan > 0 ratusan, jadi 70.909 > 70.099.",
   "error": "salah-banding-bilangan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Tulis urutan dari yang terbesar.",
   "options": [
    "79.000, 70.909, 70.099",
    "70.099, 70.909, 79.000",
    "79.000, 70.099, 70.909"
   ],
   "answer": "79.000, 70.909, 70.099",
   "hint": "Mulai dari yang paling besar.",
   "explain": "79.000 > 70.909 > 70.099.",
   "error": "salah-urutkan-bilangan"
  }
 ],
 "conclusion": "Urutannya 79.000, 70.909, 70.099."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Lanjutkan pola: 41.250, 41.500, 41.750, ..., ...",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Setiap langkah bertambah berapa?",
   "answer": "250",
   "hint": "41.500 − 41.250 = ?",
   "explain": "Setiap langkah bertambah 250.",
   "error": "salah-aturan-pola"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Bilangan berikutnya setelah 41.750?",
   "answer": "42.000",
   "hint": "41.750 + 250. Hati-hati melewati ribuan.",
   "explain": "41.750 + 250 = 42.000.",
   "error": "salah-pola-lewat-ribuan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Bilangan sesudahnya?",
   "answer": "42.250",
   "hint": "Tambah 250 lagi.",
   "explain": "42.000 + 250 = 42.250.",
   "error": "salah-lanjutkan-pola"
  }
 ],
 "conclusion": "Pola berlanjut 42.000 dan 42.250."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Bulatkan 58.651 ke ratusan terdekat dan ke ribuan terdekat.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Untuk ratusan, lihat angka puluhan. Berapa angkanya?",
   "answer": "5",
   "hint": "Satu angka tepat di kanan ratusan.",
   "explain": "Angka puluhan 5, jadi ratusan naik.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hasil pembulatan ke ratusan terdekat?",
   "answer": "58.700",
   "hint": "Angka ratusan 6 naik menjadi 7.",
   "explain": "58.651 ≈ 58.700.",
   "error": "salah-arah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hasil pembulatan ke ribuan terdekat?",
   "answer": "59.000",
   "hint": "Lihat angka ratusan, yaitu 6.",
   "explain": "6 ≥ 5, ribuan 8 naik menjadi 9: 59.000.",
   "error": "salah-arah-pembulatan"
  }
 ],
 "conclusion": "58.651 ≈ 58.700 (ratusan) dan ≈ 59.000 (ribuan)."
}
```
