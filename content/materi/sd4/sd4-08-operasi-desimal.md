---
id: sd4-08-operasi-desimal
judul: Operasi Hitung Desimal
jenjang: sd4
moe: "Primary 4 · Number and Algebra · Decimals"
prasyarat: [sd4-07-desimal, sd4-03-kali-bagi-lanjut]
durasi_menit: 40
---

## Kenapa belajar ini?

Ibu membeli 3 bungkus tepung, masing-masing 1,25 kg. Pita 6,05 m dipotong menjadi 3 bagian sama panjang. Untuk menghitung ukuran seperti ini, kamu perlu menjumlah, mengurang, mengali, dan membagi bilangan desimal.

## Analogi

Kita pakai lagi **meteran**. Ingat: 1 m = 100 cm, jadi 0,01 m = 1 cm.

Menghitung desimal sama seperti menghitung **meter dengan meter, sentimeter dengan sentimeter**. Kamu tidak boleh menjumlahkan sentimeter ke kolom meter.

Karena itu, **koma harus selalu sejajar**. Koma adalah "pagar" antara meter dan potongan meter. Kalau pagarnya lurus, setiap angka berada di kolom yang benar.

```visual
{"type": "table", "head": ["Meter", ",", "Persepuluhan (10 cm)", "Perseratusan (1 cm)"], "rows": [["2", ",", "3", "5"], ["1", ",", "8", "0"]], "caption": "2,35 m dan 1,8 m: koma sejajar, 1,8 ditulis 1,80"}
```

Kalau ragu, ubah ke sentimeter. Misalnya $2{,}35 \text{ m} + 1{,}8 \text{ m} = 235 \text{ cm} + 180 \text{ cm} = 415 \text{ cm} = 4{,}15 \text{ m}$.

```anim
{"type": "susun", "op": "+", "a": 235, "b": 180, "title": "Dalam sentimeter: 235 cm + 180 cm = 415 cm, yaitu 4,15 m"}
```

## Konsep

### Menjumlah dan mengurang

1. Tulis bersusun dengan **koma sejajar**.
2. Kalau banyak angka di belakang koma berbeda, tambahkan 0 supaya sama. Bilangan bulat seperti 10 bisa ditulis 10,00.
3. Hitung seperti biasa dari kanan, dengan menyimpan atau meminjam.
4. Tulis koma di hasil, tepat di bawah koma yang lain.

### Mengali desimal dengan bilangan 1 angka

Kalikan seperti bilangan bulat. Lalu letakkan koma sehingga banyak angka di belakang koma **sama** dengan bilangan desimalnya.

```anim
{"type": "susun", "op": "×", "a": 326, "b": 4, "title": "326 × 4 = 1.304, jadi 3,26 × 4 = 13,04 (2 angka di belakang koma)"}
```

Perkiraan membantu: $3{,}26$ kira-kira 3, dan $3 \times 4 = 12$. Jadi jawabannya pasti sekitar 12, bukan 130 atau 1,3.

### Membagi desimal dengan bilangan 1 angka

Pakai porogapit. Tulis koma di hasil bagi **tepat di atas** koma yang dibagi. Selebihnya sama: **Bagi, Kali, Kurang, Turun**.

```anim
{"type": "porogapit", "a": 945, "b": 7, "title": "945 ÷ 7 = 135, jadi 9,45 ÷ 7 = 1,35 (koma tepat di atas koma)"}
```

### Pembagian dengan hasil desimal

Kalau masih ada sisa, jangan berhenti. Tambahkan 0 di belakang koma, lalu lanjutkan membagi. Seperti menukar 1 m menjadi 10 bagian 10 cm.

```anim
{"type": "porogapit", "a": 700, "b": 4, "title": "7 ditulis 7,00. Bagi seperti 700 ÷ 4 = 175, jadi 7 ÷ 4 = 1,75"}
```

Kadang pembagian tidak pernah habis. Contoh: $10 \div 3 = 3{,}333\ldots$ Hasil seperti ini **dibulatkan** sesuai permintaan soal. Hitung satu tempat lebih banyak dari yang diminta, lalu bulatkan.

$$10 \div 3 = 3{,}333\ldots \approx 3{,}33 \quad \text{(2 tempat desimal)}$$

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Penjumlahan

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung $4{,}7 + 2{,}85$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Sejajarkan koma. 4,7 ditulis menjadi bilangan apa supaya punya 2 angka di belakang koma?",
   "options": [
    "4,70",
    "4,07",
    "0,47"
   ],
   "answer": "4,70",
   "hint": "Tambahkan 0 di ujung kanan, jangan di tengah.",
   "explain": "4,7 = 4,70. Sekarang koma 4,70 dan 2,85 bisa sejajar.",
   "error": "susun-tidak-lurus"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jumlahkan perseratusan. 0 + 5 = ?",
   "answer": "5",
   "hint": "Angka paling kanan: 0 dari 4,70 dan 5 dari 2,85.",
   "explain": "0 + 5 = 5. Tulis 5 di kolom perseratusan.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Jumlahkan persepuluhan. 7 + 8 = ?",
   "answer": "15",
   "hint": "Buat 10 dulu: 7 + 3 = 10, lalu tambah 5.",
   "explain": "7 + 8 = 15 persepuluhan, yaitu 1 satuan dan 5 persepuluhan.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "choice",
   "prompt": "Hasilnya 15. Apa yang ditulis di kolom persepuluhan?",
   "options": [
    "Tulis 5, simpan 1 ke satuan",
    "Tulis 15",
    "Tulis 1, simpan 5"
   ],
   "answer": "Tulis 5, simpan 1 ke satuan",
   "hint": "Satu kolom hanya boleh berisi satu angka.",
   "explain": "Seperti 15 potongan 10 cm: 1 m dan 5 potongan. Tulis 5, simpan 1.",
   "error": "lupa-simpan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Jumlahkan satuan. 4 + 2 + simpanan 1 = ?",
   "answer": "7",
   "hint": "Jangan lupa simpanan dari persepuluhan.",
   "explain": "4 + 2 + 1 = 7.",
   "error": "lupa-simpan"
  },
  {
   "kind": "number",
   "prompt": "Jadi 4,7 + 2,85 = ?",
   "answer": "7,55",
   "hint": "Satuan, koma, persepuluhan, perseratusan.",
   "explain": "Hasilnya 7,55. Koma tepat di bawah koma yang lain.",
   "error": "susun-tidak-lurus"
  },
  {
   "kind": "column",
   "op": "+",
   "a": 470,
   "b": 285,
   "prompt": "Cek jawaban dalam cm: hitung 470 cm + 285 cm bersusun.",
   "hint": "Kerjakan dari kanan: 0 + 5, lalu 7 + 8, simpan 1.",
   "explain": "470 + 285 = 755 cm, yaitu 7,55 m. Cocok."
  }
 ],
 "conclusion": "Jadi 4,7 + 2,85 = 7,55."
}
```

### Contoh 2: Pengurangan dari bilangan bulat

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung $10 - 3{,}46$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: 10 ditulis sebagai apa supaya koma dan kolom sejajar dengan 3,46?",
   "options": [
    "10,00",
    "1,00",
    "0,10"
   ],
   "answer": "10,00",
   "hint": "Nilai 10 tidak boleh berubah. Tambahkan koma dan dua angka 0 di kanan.",
   "explain": "10 = 10,00. Sekarang keduanya punya 2 angka di belakang koma.",
   "error": "susun-tidak-lurus"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Perseratusan 0 − 6 tidak bisa. Dari mana kamu meminjam?",
   "options": [
    "Dari puluhan, karena satuan dan persepuluhan isinya 0",
    "Dari persepuluhan langsung",
    "Tidak perlu meminjam, tulis 6"
   ],
   "answer": "Dari puluhan, karena satuan dan persepuluhan isinya 0",
   "hint": "Kolom yang isinya 0 tidak bisa dipinjami.",
   "explain": "Pinjam dari puluhan: 10 satuan menjadi 9 satuan, 9 persepuluhan, dan 10 perseratusan.",
   "error": "salah-pinjam-lewat-nol"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Kurangkan perseratusan. 10 − 6 = ?",
   "answer": "4",
   "hint": "Perseratusan sekarang berisi 10.",
   "explain": "10 − 6 = 4.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "number",
   "prompt": "Persepuluhan: 9 − 4 = ?",
   "answer": "5",
   "hint": "Persepuluhan sudah menjadi 9 setelah dipinjam.",
   "explain": "9 − 4 = 5.",
   "error": "salah-pinjam-lewat-nol"
  },
  {
   "kind": "number",
   "prompt": "Satuan: 9 − 3 = ?",
   "answer": "6",
   "hint": "Satuan juga sudah menjadi 9.",
   "explain": "9 − 3 = 6.",
   "error": "salah-pinjam-lewat-nol"
  },
  {
   "kind": "number",
   "prompt": "Jadi 10 − 3,46 = ?",
   "answer": "6,54",
   "hint": "Satuan 6, persepuluhan 5, perseratusan 4.",
   "explain": "Hasilnya 6,54.",
   "error": "susun-tidak-lurus"
  },
  {
   "kind": "column",
   "op": "+",
   "a": 654,
   "b": 346,
   "prompt": "Cek jawaban: jumlahkan balik dalam cm, 654 + 346.",
   "hint": "Kalau benar, hasilnya 1.000 cm, yaitu 10 m.",
   "explain": "654 + 346 = 1.000 cm = 10,00 m. Cocok."
  }
 ],
 "conclusion": "Jadi 10 − 3,46 = 6,54."
}
```

### Contoh 3: Perkalian

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung $3{,}26 \\times 4$.",
 "steps": [
  {
   "kind": "column",
   "op": "×",
   "a": 326,
   "b": 4,
   "prompt": "Langkah 1–3: Kalikan dulu tanpa koma, 326 × 4, bersusun.",
   "hint": "Mulai dari kanan: 6 × 4 = 24, tulis 4 simpan 2.",
   "explain": "326 × 4 = 1.304."
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Ada berapa angka di belakang koma pada 3,26?",
   "answer": "2",
   "hint": "Hitung angka setelah tanda koma.",
   "explain": "Ada 2 angka (2 dan 6), jadi hasilnya juga punya 2 angka di belakang koma.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "Letakkan koma pada 1304. Jadi 3,26 × 4 = ?",
   "answer": "13,04",
   "hint": "Hitung 2 angka dari kanan, lalu taruh koma.",
   "explain": "1304 menjadi 13,04.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: perkiraan 3 × 4 = 12. Hasil mana yang masuk akal?",
   "options": [
    "13,04",
    "130,4",
    "1,304"
   ],
   "answer": "13,04",
   "hint": "Cari yang paling dekat dengan 12.",
   "explain": "13,04 dekat dengan 12. Hasil 130,4 terlalu besar.",
   "error": "salah-nilai-tempat"
  }
 ],
 "conclusion": "Jadi 3,26 × 4 = 13,04."
}
```

### Contoh 4: Pembagian

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung $9{,}45 \\div 7$ dengan porogapit.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Bagi satuan. 7 muat berapa kali di 9?",
   "answer": "1",
   "hint": "7 × 1 = 7, 7 × 2 = 14.",
   "explain": "7 muat 1 kali di 9. Tulis 1 di atas 9.",
   "error": "tebakan-bagi-kebesaran"
  },
  {
   "kind": "number",
   "prompt": "Sisanya: 9 − 7 = ?",
   "answer": "2",
   "hint": "Kurangkan hasil kali dari 9.",
   "explain": "Sisa 2 satuan.",
   "error": "salah-kurang-porogapit"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Di mana koma hasil bagi ditulis?",
   "options": [
    "Tepat di atas koma 9,45",
    "Di ujung kanan hasil bagi",
    "Tidak perlu ditulis"
   ],
   "answer": "Tepat di atas koma 9,45",
   "hint": "Koma hasil bagi mengikuti koma bilangan yang dibagi.",
   "explain": "Koma ditulis tepat di atas koma, setelah angka 1.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Turunkan 4. Sisa 2 satuan menjadi 20 persepuluhan, ditambah 4. Ada berapa persepuluhan?",
   "answer": "24",
   "hint": "2 satuan = 20 persepuluhan.",
   "explain": "20 + 4 = 24 persepuluhan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "24 ÷ 7 = ? (hasil bagi saja)",
   "answer": "3",
   "hint": "7 × 3 = 21, 7 × 4 = 28.",
   "explain": "7 muat 3 kali di 24, sisa 3.",
   "error": "tebakan-bagi-kekecilan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Turunkan 5, menjadi 35 perseratusan. 35 ÷ 7 = ?",
   "answer": "5",
   "hint": "Hitung loncat 7 sampai 35.",
   "explain": "35 ÷ 7 = 5, sisa 0.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "number",
   "prompt": "Jadi 9,45 ÷ 7 = ?",
   "answer": "1,35",
   "hint": "Baca hasil bagi: 1, koma, 3, 5.",
   "explain": "Hasilnya 1,35.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "column",
   "op": "×",
   "a": 135,
   "b": 7,
   "prompt": "Cek jawaban: hitung 135 × 7 bersusun.",
   "hint": "Kalau benar, hasilnya 945, yaitu 9,45.",
   "explain": "135 × 7 = 945, jadi 1,35 × 7 = 9,45. Cocok."
  }
 ],
 "conclusion": "Jadi 9,45 ÷ 7 = 1,35."
}
```

### Contoh 5: Soal cerita dengan pembulatan

```soal
{
 "title": "Kerjakan bersama",
 "text": "Bu Ani punya dua gulung pita, panjangnya 3,6 m dan 2,45 m. Seluruh pita dipotong menjadi 3 bagian sama panjang. Berapa panjang setiap bagian? Bulatkan ke 2 tempat desimal.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Bagaimana urutan hitungnya?",
   "options": [
    "Jumlahkan, lalu bagi 3, lalu bulatkan",
    "Bagi 3, lalu jumlahkan",
    "Kurangkan, lalu bagi 3"
   ],
   "answer": "Jumlahkan, lalu bagi 3, lalu bulatkan",
   "hint": "Seluruh pita digabung dulu, baru dipotong.",
   "explain": "Cari panjang seluruh pita, bagi 3, lalu bulatkan.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jumlahkan. 3,60 + 2,45 = ?",
   "answer": "6,05",
   "hint": "Persepuluhan 6 + 4 = 10, tulis 0 simpan 1.",
   "explain": "3,60 + 2,45 = 6,05 m.",
   "error": "lupa-simpan",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Bagi 3. Satuan: 6 ÷ 3 = ?",
   "answer": "2",
   "hint": "Fakta bagi 3.",
   "explain": "6 ÷ 3 = 2. Tulis koma setelah 2.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "number",
   "prompt": "Persepuluhan: 0 ÷ 3 = ?",
   "answer": "0",
   "hint": "3 tidak muat di 0.",
   "explain": "Tulis 0 di hasil bagi. Jangan dilewati.",
   "error": "lupa-nol-hasil-bagi"
  },
  {
   "kind": "number",
   "prompt": "Perseratusan: 5 ÷ 3 = ? (hasil bagi saja)",
   "answer": "1",
   "hint": "3 × 1 = 3, 3 × 2 = 6.",
   "explain": "5 ÷ 3 = 1 sisa 2. Hasil sejauh ini 2,01 sisa 2.",
   "error": "tebakan-bagi-kebesaran"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Tambahkan 0, sisa 2 menjadi 20. 20 ÷ 3 = ? (hasil bagi saja)",
   "answer": "6",
   "hint": "3 × 6 = 18.",
   "explain": "20 ÷ 3 = 6 sisa 2. Hasilnya 2,016...",
   "error": "tebakan-bagi-kekecilan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Bulatkan 2,016 ke 2 tempat desimal.",
   "answer": "2,02",
   "hint": "Lihat angka perseribuan. 5 atau lebih berarti naik.",
   "explain": "Perseribuan 6, jadi perseratusan 1 naik menjadi 2: 2,02 m.",
   "error": "salah-pembulatan",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 2,02 × 3 = ?",
   "answer": "6,06",
   "hint": "202 × 3 = 606.",
   "explain": "6,06 sangat dekat dengan 6,05. Selisih kecil karena pembulatan.",
   "error": "salah-fakta-kali"
  }
 ],
 "conclusion": "Setiap bagian kira-kira 2,02 m.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Pita",
    "units": 3,
    "unitValue": "?"
   }
  ],
  "total": "3,6 m + 2,45 m"
 }
}
```

## Kesalahan yang sering terjadi

- **Menyejajarkan angka paling kanan, bukan koma.** Menulis 2,85 di bawah 4,7 rata kanan, sehingga 5 di bawah 7. Angka 7 persepuluhan jadi dijumlah dengan 5 perseratusan, dan hasilnya salah (misalnya 3,32). Yang harus sejajar adalah **koma**, seperti meter di bawah meter.
- **Lupa meminjam melewati 0.** Pada $10 - 3{,}46$, menulis $0 - 6 = 6$. Bilangan atas lebih kecil, jadi harus meminjam.
- **Salah meletakkan koma pada perkalian.** Menulis $3{,}26 \times 4 = 130{,}4$. Banyak angka di belakang koma hasil harus sama dengan 3,26, yaitu 2. Perkiraan ($3 \times 4 = 12$) juga menunjukkan 130,4 terlalu besar.
- **Lupa koma di hasil bagi.** Menulis $9{,}45 \div 7 = 135$. Koma di hasil bagi harus tepat di atas koma yang dibagi.
- **Membulatkan terlalu awal.** Pada contoh 5, membagi hanya sampai 2,01 lalu berhenti. Untuk membulatkan ke 2 tempat desimal, hitung sampai 3 tempat desimal dulu.

## Ringkasan

- Tambah dan kurang: **koma sejajar**, isi tempat kosong dengan 0.
- Kali dengan 1 angka: kalikan seperti biasa, lalu banyak angka di belakang koma hasil sama dengan bilangan desimalnya.
- Bagi dengan 1 angka: koma hasil bagi tepat di atas koma yang dibagi.
- Kalau masih bersisa, tambahkan 0 dan lanjutkan membagi.
- Untuk membulatkan hasil, hitung satu tempat lebih banyak dari yang diminta.
- Cek dengan perkiraan atau operasi kebalikan.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung $5{,}6 + 3{,}75$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: 5,6 ditulis menjadi apa supaya koma sejajar?",
   "options": [
    "5,60",
    "5,06",
    "0,56"
   ],
   "answer": "5,60",
   "hint": "Tambahkan 0 di ujung kanan.",
   "explain": "5,6 = 5,60.",
   "error": "susun-tidak-lurus"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Persepuluhan 6 + 7 = ?",
   "answer": "13",
   "hint": "Buat 10 dulu: 6 + 4, lalu tambah 3.",
   "explain": "13: tulis 3, simpan 1 ke satuan.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Satuan 5 + 3 + simpanan 1 = ?",
   "answer": "9",
   "hint": "Ingat simpanan.",
   "explain": "5 + 3 + 1 = 9.",
   "error": "lupa-simpan"
  },
  {
   "kind": "number",
   "prompt": "Jadi 5,6 + 3,75 = ?",
   "answer": "9,35",
   "hint": "Perseratusan 0 + 5 = 5.",
   "explain": "Hasilnya 9,35.",
   "error": "susun-tidak-lurus"
  }
 ],
 "conclusion": "Jadi 5,6 + 3,75 = 9,35."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $8 - 2{,}07$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: 8 ditulis sebagai apa?",
   "options": [
    "8,00",
    "0,08",
    "8,07"
   ],
   "answer": "8,00",
   "hint": "Tambahkan koma dan dua angka 0.",
   "explain": "8 = 8,00.",
   "error": "susun-tidak-lurus"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Pinjam melewati 0. Perseratusan menjadi 10. 10 − 7 = ?",
   "answer": "3",
   "hint": "Satuan 8 dipinjam, persepuluhan menjadi 9, perseratusan menjadi 10.",
   "explain": "10 − 7 = 3.",
   "error": "salah-pinjam-lewat-nol"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Persepuluhan 9 − 0 = ?",
   "answer": "9",
   "hint": "Persepuluhan sudah menjadi 9.",
   "explain": "9 − 0 = 9.",
   "error": "salah-pinjam-lewat-nol"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Satuan 7 − 2 = ?",
   "answer": "5",
   "hint": "Satuan 8 sudah dipinjam 1.",
   "explain": "7 − 2 = 5.",
   "error": "lupa-pinjam"
  },
  {
   "kind": "number",
   "prompt": "Jadi 8 − 2,07 = ?",
   "answer": "5,93",
   "hint": "Cek: hasil + 2,07 harus 8.",
   "explain": "5,93 + 2,07 = 8,00. Benar.",
   "error": "susun-tidak-lurus"
  }
 ],
 "conclusion": "Jadi 8 − 2,07 = 5,93."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung $2{,}45 \\times 6$.",
 "steps": [
  {
   "kind": "column",
   "op": "×",
   "a": 245,
   "b": 6,
   "prompt": "Langkah 1: Kalikan tanpa koma: 245 × 6.",
   "hint": "5 × 6 = 30, tulis 0 simpan 3.",
   "explain": "245 × 6 = 1.470."
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Berapa angka di belakang koma pada 2,45?",
   "answer": "2",
   "hint": "Hitung angka setelah koma.",
   "explain": "Ada 2 angka di belakang koma.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Jadi 2,45 × 6 = ?",
   "answer": "14,7",
   "hint": "1470 dengan 2 angka di belakang koma: 14,70.",
   "explain": "14,70 sama dengan 14,7. Perkiraan 2 × 6 = 12, dekat.",
   "error": "salah-nilai-tempat"
  }
 ],
 "conclusion": "Jadi 2,45 × 6 = 14,7."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Hitung $7{,}38 \\div 6$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 7 ÷ 6 = ? (hasil bagi saja)",
   "answer": "1",
   "hint": "6 muat berapa kali di 7?",
   "explain": "1, sisa 1. Tulis koma setelah 1.",
   "error": "tebakan-bagi-kebesaran"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Turunkan 3 menjadi 13. 13 ÷ 6 = ? (hasil bagi saja)",
   "answer": "2",
   "hint": "6 × 2 = 12.",
   "explain": "2, sisa 1.",
   "error": "tebakan-bagi-kekecilan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Turunkan 8 menjadi 18. 18 ÷ 6 = ?",
   "answer": "3",
   "hint": "Fakta bagi 6.",
   "explain": "18 ÷ 6 = 3, sisa 0.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "number",
   "prompt": "Jadi 7,38 ÷ 6 = ?",
   "answer": "1,23",
   "hint": "Koma tepat di atas koma.",
   "explain": "Hasilnya 1,23. Cek: 1,23 × 6 = 7,38.",
   "error": "salah-nilai-tempat"
  }
 ],
 "conclusion": "Jadi 7,38 ÷ 6 = 1,23."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Ada 2 liter jus. Jus itu dibagi sama banyak ke 3 gelas. Berapa liter jus di setiap gelas? Bulatkan ke 2 tempat desimal.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Hitungan apa yang dipakai?",
   "options": [
    "2 ÷ 3",
    "3 ÷ 2",
    "2 × 3"
   ],
   "answer": "2 ÷ 3",
   "hint": "Jus dibagi ke 3 gelas.",
   "explain": "2 liter dibagi 3: 2 ÷ 3.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Tulis 2 sebagai 2,000 dan bagi sampai 3 tempat desimal. 2 ÷ 3 = ?",
   "answer": "0,666",
   "hint": "2 ÷ 3 = 0 sisa 2, lalu 20 ÷ 3 = 6 sisa 2, dan seterusnya.",
   "explain": "2 ÷ 3 = 0,666... (selalu bersisa 2).",
   "error": "lupa-nol-hasil-bagi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Bulatkan 0,666 ke 2 tempat desimal.",
   "answer": "0,67",
   "hint": "Perseribuan 6, jadi perseratusan naik.",
   "explain": "Perseratusan 6 naik menjadi 7: 0,67.",
   "error": "salah-pembulatan",
   "suffix": "liter"
  }
 ],
 "conclusion": "Setiap gelas berisi kira-kira 0,67 liter."
}
```
