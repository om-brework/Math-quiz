---
id: sd4-03-kali-bagi-lanjut
judul: Perkalian dan Pembagian Lanjut
jenjang: sd4
moe: "Primary 4 · Number and Algebra · Whole Numbers"
prasyarat: [sd3-04-perkalian-bersusun, sd3-05-pembagian-bersusun]
durasi_menit: 40
---

## Kenapa belajar ini?

Koperasi sekolah membeli 135 kotak pensil, masing-masing berisi 12 pensil. Berapa pensil seluruhnya? Lalu pensil itu dibagi ke 6 kelas. Soal seperti ini butuh perkalian dan pembagian bilangan besar, ditambah kemampuan memilih operasi yang tepat.

## Analogi

Bayangkan uang yang terdiri dari lembaran **Rp1.000**, koin **Rp100**, **Rp10**, dan **Rp1**.

- **Menyimpan** saat mengalikan seperti **menukar** 10 koin kecil menjadi 1 uang yang lebih besar. Misalnya 42 koin Rp1 ditukar menjadi 4 koin Rp10, dan tersisa 2 koin Rp1.

```visual
{"type": "money", "items": [10, 10, 10, 10, 1, 1], "caption": "42 koin Rp1 ditukar: 4 koin Rp10 dan 2 koin Rp1"}
```

- **Mengalikan dengan bilangan 2 angka**, misalnya 36, seperti belanja dua kali: belanja 30 barang, lalu belanja 6 barang, kemudian totalnya dijumlahkan.

```visual
{"type": "barModel", "bars": [{"label": "36 barang", "units": 6, "known": "30 + 6"}], "total": "30 barang + 6 barang", "caption": "36 dipecah menjadi 30 dan 6"}
```

- **Membagi** seperti membagi uang ke beberapa teman: bagi uang besar dulu, tukar sisanya ke uang lebih kecil, lalu bagi lagi.

## Konsep

### Perkalian 4 angka × 1 angka

Kalikan mulai dari **satuan**, ke kiri. Setiap hasil lebih dari 9 ditulis satuannya, puluhannya **disimpan** ke kolom kiri. Simpanan ditambahkan **setelah** mengalikan kolom berikutnya.

```anim
{"type": "susun", "op": "×", "a": 4327, "b": 6, "title": "4.327 × 6 kolom demi kolom"}
```

### Perkalian 3 angka × 2 angka

Pecah pengali 2 angka menjadi puluhan dan satuan. Contoh: $36 = 30 + 6$.

$$248 \times 36 = (248 \times 6) + (248 \times 30)$$

Saat mengalikan dengan 30, tulis **0 di kolom satuan** dulu. Itu karena mengalikan dengan puluhan membuat hasilnya bergeser satu tempat ke kiri.

```visual
{"type": "table", "head": ["Bagian", "Hitungan", "Hasil"], "rows": [["248 × 6", "248 × 6", "1.488"], ["248 × 30", "248 × 3, lalu tulis 0", "7.440"], ["Jumlah", "1.488 + 7.440", "8.928"]], "caption": "248 × 36 dipecah menjadi dua perkalian"}
```

### Pembagian 4 angka ÷ 1 angka

Pakai porogapit seperti di kelas 3, dengan urutan yang selalu sama: **Bagi, Kali, Kurang, Turun**. Kalau angka pertama lebih kecil dari pembagi, gabungkan dengan angka berikutnya. Kalau di tengah ada angka yang tidak muat, tulis **0** di hasil bagi.

```anim
{"type": "porogapit", "a": 4235, "b": 7, "title": "4.235 ÷ 7: ada 0 di tengah hasil bagi"}
```

### Soal cerita empat operasi

Ikuti empat tahap:

1. **Pahami**: apa yang diketahui, apa yang ditanya?
2. **Rencanakan**: gambar model batang, pilih operasi (tambah, kurang, kali, bagi).
3. **Hitung** langkah demi langkah.
4. **Cek**: apakah jawabannya masuk akal?

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: 4 angka × 1 angka

```soal
{
 "title": "Contoh 1",
 "text": "Hitung $4.327 \\times 6$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Kalikan satuan. 7 × 6 = ?",
   "answer": "42",
   "hint": "Tujuh kali enam.",
   "explain": "42: tulis 2, simpan 4 di puluhan. Seperti 42 koin Rp1 ditukar menjadi 4 koin Rp10 dan 2 koin Rp1.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kalikan puluhan lalu tambah simpanan. 2 × 6 + 4 = ?",
   "answer": "16",
   "hint": "Kalikan dulu, baru tambah simpanan.",
   "explain": "12 + 4 = 16: tulis 6, simpan 1.",
   "error": "salah-simpan-kali"
  },
  {
   "kind": "column",
   "op": "×",
   "a": 4327,
   "b": 6,
   "prompt": "Langkah 3: Selesaikan perkalian bersusun. Isi juga kotak simpanan.",
   "hint": "Ratusan: 3 × 6 + 1. Ribuan: 4 × 6 + 1.",
   "explain": "Ratusan 19 (tulis 9 simpan 1), ribuan 25. Hasilnya 25.962."
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: perkirakan 4.000 × 6 = 24.000. Apakah 25.962 masuk akal?",
   "options": [
    "Ya, dekat dengan 24.000",
    "Tidak, terlalu jauh"
   ],
   "answer": "Ya, dekat dengan 24.000",
   "hint": "4.327 sedikit lebih dari 4.000.",
   "explain": "Hasilnya sedikit lebih dari 24.000, jadi masuk akal.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 4.327 × 6 = 25.962."
}
```

### Contoh 2: 3 angka × 2 angka

```soal
{
 "title": "Contoh 2",
 "text": "Hitung $248 \\times 36$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pecah pengalinya. 36 = ?",
   "options": [
    "30 + 6",
    "3 + 6",
    "30 + 60"
   ],
   "answer": "30 + 6",
   "hint": "36 punya 3 puluhan dan 6 satuan.",
   "explain": "36 = 30 + 6.",
   "error": "salah-pecah-bilangan"
  },
  {
   "kind": "column",
   "op": "×",
   "a": 248,
   "b": 6,
   "prompt": "Langkah 2: Kalikan 248 dengan 6.",
   "hint": "8 × 6 = 48, tulis 8 simpan 4.",
   "explain": "248 × 6 = 1.488."
  },
  {
   "kind": "column",
   "op": "×",
   "a": 248,
   "b": 3,
   "prompt": "Langkah 3: Kalikan 248 dengan 3 (untuk 30).",
   "hint": "8 × 3 = 24, tulis 4 simpan 2.",
   "explain": "248 × 3 = 744."
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Jadi 248 × 30 = ?",
   "answer": "7.440",
   "hint": "Tulis 0 di satuan, lalu 744.",
   "explain": "248 × 30 = 7.440, bukan 744.",
   "error": "lupa-nol-satuan"
  },
  {
   "kind": "column",
   "op": "+",
   "a": 1488,
   "b": 7440,
   "prompt": "Langkah 5: Jumlahkan 1.488 + 7.440.",
   "hint": "Mulai dari satuan: 8 + 0.",
   "explain": "1.488 + 7.440 = 8.928."
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 250 × 36 = 9.000. Kurangi 2 × 36. Hasilnya?",
   "answer": "8.928",
   "hint": "9.000 − 72.",
   "explain": "9.000 − 72 = 8.928. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 248 × 36 = 8.928."
}
```

### Contoh 3: 4 angka ÷ 1 angka

```soal
{
 "title": "Contoh 3",
 "text": "Hitung $5.184 \\div 6$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Angka ribuan 5. Apakah 6 muat di 5?",
   "options": [
    "Tidak, gabungkan menjadi 51",
    "Ya, 1 kali"
   ],
   "answer": "Tidak, gabungkan menjadi 51",
   "hint": "Bandingkan 5 dan 6.",
   "explain": "5 < 6, seperti 5 lembar Rp1.000 yang tidak cukup untuk 6 orang. Lihat 51.",
   "error": "tebakan-bagi-kebesaran"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 6 muat berapa kali di 51?",
   "answer": "8",
   "hint": "6 × 8 = 48, 6 × 9 = 54.",
   "explain": "8 kali, sisa 51 − 48 = 3.",
   "error": "tebakan-bagi-kekecilan"
  },
  {
   "kind": "longdiv",
   "dividend": 5184,
   "divisor": 6,
   "prompt": "Langkah 3: Selesaikan porogapitnya.",
   "hint": "Turunkan 8 menjadi 38, lalu turunkan 4.",
   "explain": "8, 48, sisa 3; 38: 6, 36, sisa 2; 24: 4, 24, sisa 0. Hasilnya 864."
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 864 × 6 = ?",
   "answer": "5.184",
   "hint": "800 × 6 + 64 × 6.",
   "explain": "4.800 + 384 = 5.184. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 5.184 ÷ 6 = 864."
}
```

### Contoh 4: Soal cerita dengan beberapa operasi

```soal
{
 "title": "Contoh 4",
 "text": "Koperasi sekolah membeli 135 kotak pensil. Setiap kotak berisi 12 pensil. Ternyata 36 pensil rusak. Sisanya dibagikan sama banyak ke 6 kelas. Berapa pensil yang diterima setiap kelas?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Urutan operasinya?",
   "options": [
    "Kali, kurang, lalu bagi",
    "Tambah, kurang, lalu bagi",
    "Bagi, kali, lalu tambah"
   ],
   "answer": "Kali, kurang, lalu bagi",
   "hint": "Cari semua pensil dulu, buang yang rusak, lalu bagikan.",
   "explain": "135 × 12, lalu − 36, lalu ÷ 6.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "column",
   "op": "×",
   "a": 135,
   "b": 2,
   "prompt": "Langkah 2a: Hitung 135 × 2.",
   "hint": "5 × 2 = 10, tulis 0 simpan 1.",
   "explain": "135 × 2 = 270."
  },
  {
   "kind": "column",
   "op": "+",
   "a": 270,
   "b": 1350,
   "prompt": "Langkah 2b: 135 × 10 = 1.350. Jumlahkan 270 + 1.350.",
   "hint": "Mulai dari satuan.",
   "explain": "270 + 1.350 = 1.620 pensil."
  },
  {
   "kind": "column",
   "op": "-",
   "a": 1620,
   "b": 36,
   "prompt": "Langkah 3: Kurangi pensil yang rusak. 1.620 − 36.",
   "hint": "0 − 6 tidak bisa, pinjam dari puluhan.",
   "explain": "1.620 − 36 = 1.584 pensil baik."
  },
  {
   "kind": "longdiv",
   "dividend": 1584,
   "divisor": 6,
   "prompt": "Langkah 4: Bagi 1.584 ke 6 kelas.",
   "hint": "6 tidak muat di 1, jadi lihat 15.",
   "explain": "2 sisa 3, 38: 6 sisa 2, 24: 4. Hasilnya 264."
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 264 × 6 + 36 = ?",
   "answer": "1.620",
   "hint": "264 × 6 = 1.584.",
   "explain": "1.584 + 36 = 1.620, sama dengan 135 × 12. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Setiap kelas menerima 264 pensil.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Pensil",
    "units": 6,
    "unitValue": "?"
   }
  ],
  "total": "1.620 − 36 pensil"
 }
}
```

## Kesalahan yang sering terjadi

- **Lupa menulis 0 saat mengalikan puluhan.** Pada $248 \times 36$, baris kedua ditulis 744 sejajar dengan 1.488. Hasilnya salah menjadi 2.232. Ingat, ini $248 \times 30$, bukan $248 \times 3$. Tulis 0 di satuan dulu: 7.440.
- **Menambah simpanan sebelum mengalikan.** Pada $4.327 \times 6$, menghitung $(2 + 4) \times 6 = 36$. Yang benar: kalikan dulu ($2 \times 6 = 12$), baru tambah simpanan ($12 + 4 = 16$).
- **Lupa 0 di tengah hasil bagi.** Pada $4.235 \div 7$: $42 \div 7 = 6$, lalu angka 3 tidak muat 7. Banyak yang langsung menggabungkan 35 dan menulis 65. Yang benar: tulis **0** di atas angka 3, turunkan 5 menjadi 35, lalu $35 \div 7 = 5$. Jawabannya 605.
- **Salah memilih operasi di soal cerita.** Menjumlahkan 135 dan 12 padahal "setiap kotak berisi 12" artinya perkalian. Gambar model batang dulu supaya terlihat jelas.
- **Tidak mengecek jawaban.** Selalu cek dengan perkiraan atau operasi kebalikan (kali untuk bagi, bagi untuk kali).

## Ringkasan

- Kalikan dari kanan ke kiri. Kalikan dulu, baru tambahkan simpanan.
- 3 angka × 2 angka: pecah pengali menjadi puluhan dan satuan, kalikan masing-masing, lalu jumlahkan. Jangan lupa 0 saat mengalikan puluhan.
- Pembagian bersusun: **Bagi, Kali, Kurang, Turun**. Tulis 0 di hasil bagi kalau angka tidak muat.
- Cek pembagian: hasil bagi × pembagi + sisa = yang dibagi.
- Soal cerita: pahami, rencanakan dengan model batang, hitung, lalu cek.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung $3.068 \\times 7$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 8 × 7 = ? (tulis satuannya, simpan puluhannya)",
   "answer": "56",
   "hint": "Delapan kali tujuh.",
   "explain": "56: tulis 6, simpan 5.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "column",
   "op": "×",
   "a": 3068,
   "b": 7,
   "prompt": "Langkah 2: Selesaikan perkalian bersusun.",
   "hint": "Puluhan: 6 × 7 + 5. Ratusan: 0 × 7 + 4.",
   "explain": "Puluhan 47, ratusan 4, ribuan 21. Hasilnya 21.476."
  }
 ],
 "conclusion": "Jadi 3.068 × 7 = 21.476."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $427 \\times 53$.",
 "steps": [
  {
   "kind": "column",
   "op": "×",
   "a": 427,
   "b": 3,
   "prompt": "Langkah 1: 427 × 3.",
   "hint": "7 × 3 = 21, tulis 1 simpan 2.",
   "explain": "427 × 3 = 1.281."
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 427 × 50 = ?",
   "answer": "21.350",
   "hint": "427 × 5 = 2.135, lalu tulis 0 di belakang.",
   "explain": "427 × 50 = 21.350.",
   "error": "lupa-nol-satuan"
  },
  {
   "kind": "column",
   "op": "+",
   "a": 1281,
   "b": 21350,
   "prompt": "Langkah 3: Jumlahkan 1.281 + 21.350.",
   "hint": "Mulai dari satuan.",
   "explain": "1.281 + 21.350 = 22.631."
  }
 ],
 "conclusion": "Jadi 427 × 53 = 22.631."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung $7.452 \\div 9$.",
 "steps": [
  {
   "kind": "longdiv",
   "dividend": 7452,
   "divisor": 9,
   "prompt": "Langkah 1: Kerjakan porogapit. 9 tidak muat di 7, jadi mulai dari 74.",
   "hint": "9 × 8 = 72.",
   "explain": "74: 8 sisa 2, 25: 2 sisa 7, 72: 8. Hasilnya 828."
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Cek. 828 × 9 = ?",
   "answer": "7.452",
   "hint": "800 × 9 + 28 × 9.",
   "explain": "7.200 + 252 = 7.452. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 7.452 ÷ 9 = 828."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Hitung $3.250 \\div 4$.",
 "steps": [
  {
   "kind": "longdiv",
   "dividend": 3250,
   "divisor": 4,
   "prompt": "Langkah 1: Kerjakan porogapit.",
   "hint": "4 tidak muat di 3, jadi mulai dari 32.",
   "explain": "32: 8, 5: 1 sisa 1, 10: 2 sisa 2."
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Berapa sisanya?",
   "answer": "2",
   "hint": "Angka paling bawah.",
   "explain": "Sisa 2.",
   "error": "salah-tafsir-sisa"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Cek. 812 × 4 + 2 = ?",
   "answer": "3.250",
   "hint": "812 × 4 = 3.248.",
   "explain": "3.248 + 2 = 3.250. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 3.250 ÷ 4 = 812 sisa 2."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Sebuah toko roti membuat 1.248 roti. Roti dikemas 8 buah per kantong. Sebanyak 37 kantong sudah terjual. Berapa kantong yang belum terjual?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Operasi pertama?",
   "options": [
    "1.248 ÷ 8",
    "1.248 × 8",
    "1.248 − 37"
   ],
   "answer": "1.248 ÷ 8",
   "hint": "Cari dulu berapa kantong seluruhnya.",
   "explain": "Banyak kantong = 1.248 ÷ 8.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "longdiv",
   "dividend": 1248,
   "divisor": 8,
   "prompt": "Langkah 2: Hitung 1.248 ÷ 8.",
   "hint": "8 muat berapa kali di 12?",
   "explain": "1 sisa 4, 44: 5 sisa 4, 48: 6. Ada 156 kantong."
  },
  {
   "kind": "column",
   "op": "-",
   "a": 156,
   "b": 37,
   "prompt": "Langkah 3: Kurangi yang terjual. 156 − 37.",
   "hint": "6 − 7 tidak bisa, pinjam dari puluhan.",
   "explain": "156 − 37 = 119 kantong."
  }
 ],
 "conclusion": "Ada 119 kantong yang belum terjual."
}
```
