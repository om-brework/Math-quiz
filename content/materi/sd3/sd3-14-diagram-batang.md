---
id: sd3-14-diagram-batang
judul: Diagram Batang
jenjang: sd3
moe: "Primary 3 · Statistics · Data Representation and Interpretation"
prasyarat: [sd2-13-diagram-gambar-skala, sd3-02-tambah-kurang-bersusun-4-angka]
durasi_menit: 35
---

## Kenapa belajar ini?

Guru ingin tahu buah kesukaan siswa kelas 3. Toko ingin tahu hari apa paling ramai. Data seperti ini lebih mudah dibaca kalau digambar. **Diagram batang** membuat kita bisa melihat dengan sekali pandang mana yang paling banyak dan mana yang paling sedikit.

## Analogi

Bayangkan setiap batang adalah **menara balok** yang disusun ke atas.

Di sebelah kiri ada **penggaris tinggi** yang ditempel di dinding. Penggaris itu punya garis-garis bertanda angka. Untuk tahu tinggi menara, lihat **puncaknya**, lalu tarik garis lurus ke penggaris di kiri dan baca angkanya.

```visual
{"type": "barChart", "scaleStep": 1, "max": 6, "bars": [{"label": "Menara A", "value": 3}, {"label": "Menara B", "value": 5}, {"label": "Menara C", "value": 2}], "title": "Tiga menara balok", "unit": "balok", "caption": "Penggaris naik 1, 2, 3, ... Menara B paling tinggi."}
```

Penggaris tidak selalu naik 1, 2, 3. Kadang naik 2, 4, 6, atau 100, 200, 300. Itulah **skala**. Sebelum membaca menara mana pun, lihat dulu penggarisnya naik berapa setiap garis.

## Konsep

### Bagian-bagian diagram batang

- **Judul**: memberi tahu isi diagram.
- **Sumbu tegak** (penggaris di kiri): menunjukkan banyaknya, dengan angka skala.
- **Sumbu mendatar** (di bawah): nama-nama kelompok, misalnya nama buah atau nama hari.
- **Batang**: setiap kelompok punya satu batang. Makin tinggi batang, makin banyak.

### Skala

**Skala** adalah besar loncatan angka pada sumbu tegak.

- Angka 0, 2, 4, 6, ... berarti skalanya **2**. Setiap garis bernilai 2 lebih banyak.
- Angka 0, 5, 10, 15, ... berarti skalanya **5**.
- Angka 0, 100, 200, 300, ... berarti skalanya **100**.

```visual
{"type": "barChart", "scaleStep": 5, "max": 30, "bars": [{"label": "Senin", "value": 10}, {"label": "Selasa", "value": 25}, {"label": "Rabu", "value": 15}], "title": "Skala 5", "unit": "anak", "caption": "Garis-garisnya naik 5. Puncak Selasa ada di garis ke-5, jadi nilainya 5 × 5 = 25, bukan 5."}
```

Kalau puncak batang berada di tengah-tengah dua garis, nilainya di tengah-tengah. Misalnya di tengah 10 dan 20, nilainya 15.

```visual
{"type": "barChart", "scaleStep": 10, "max": 30, "bars": [{"label": "Bola", "value": 20}, {"label": "Raket", "value": 15}, {"label": "Tali", "value": 30}], "title": "Puncak di tengah dua garis", "unit": "buah", "caption": "Puncak Raket di tengah garis 10 dan 20, jadi nilainya 15."}
```

### Pertanyaan yang sering muncul

- **Berapa banyak?** Baca puncak satu batang.
- **Paling banyak atau paling sedikit?** Cari batang paling tinggi atau paling pendek.
- **Berapa selisihnya?** Kurangkan nilai batang yang tinggi dengan yang pendek.
- **Berapa totalnya?** Jumlahkan nilai semua batang.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Skala 2

```soal
{
 "title": "Contoh 1",
 "text": "Diagram ini menunjukkan buah kesukaan siswa kelas 3A. a) Buah apa yang paling disukai? b) Berapa siswa lebih banyak menyukai jeruk daripada salak?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Baca skala. Angka di penggaris naik berapa setiap garis?",
   "answer": "2",
   "hint": "Lihat angka: 0, 2, 4, ...",
   "explain": "Skalanya 2.",
   "error": "salah-baca-skala"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Puncak batang Mangga ada di garis ke-4. Berapa nilainya?",
   "answer": "8",
   "hint": "Setiap garis bernilai 2. Hitung 4 × 2.",
   "explain": "Mangga 8. Dengan cara yang sama: Pisang 6, Jeruk 12, Salak 4.",
   "error": "salah-baca-skala",
   "suffix": "siswa"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: a) Buah apa yang paling disukai?",
   "options": [
    "Jeruk",
    "Mangga",
    "Pisang",
    "Salak"
   ],
   "answer": "Jeruk",
   "hint": "Cari menara tertinggi.",
   "explain": "Jeruk, dengan 12 siswa.",
   "error": "salah-paling-banyak-sedikit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: b) Jeruk − Salak = 12 − 4 = ?",
   "answer": "8",
   "hint": "\"Lebih banyak\" berarti mengurangkan.",
   "explain": "8 siswa.",
   "error": "selisih-dijumlah",
   "suffix": "siswa"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: dari puncak Salak ke puncak Jeruk ada 4 loncatan garis. 4 × 2 = ?",
   "answer": "8",
   "hint": "Setiap loncatan bernilai 2.",
   "explain": "8, sama dengan Langkah 4. Benar.",
   "error": "salah-baca-skala"
  }
 ],
 "conclusion": "a) Jeruk. b) 8 siswa.",
 "visual": {
  "type": "barChart",
  "scaleStep": 2,
  "max": 12,
  "bars": [
   {
    "label": "Mangga",
    "value": 8
   },
   {
    "label": "Pisang",
    "value": 6
   },
   {
    "label": "Jeruk",
    "value": 12
   },
   {
    "label": "Salak",
    "value": 4
   }
  ],
  "title": "Buah kesukaan siswa kelas 3A",
  "unit": "siswa"
 }
}
```

### Contoh 2: Skala 5

```soal
{
 "title": "Contoh 2",
 "text": "Diagram ini menunjukkan banyak buku yang dipinjam di perpustakaan selama satu minggu. a) Berapa selisih buku yang dipinjam pada hari Rabu dan Selasa? b) Berapa buku yang dipinjam dalam seminggu?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Baca skala. Angka naik berapa setiap garis?",
   "answer": "5",
   "hint": "Lihat angka: 0, 5, 10, ...",
   "explain": "Skalanya 5.",
   "error": "salah-baca-skala"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Puncak batang Senin ada di garis ke-5. Berapa nilainya?",
   "answer": "25",
   "hint": "Bukan 5! Setiap garis bernilai 5.",
   "explain": "5 × 5 = 25 buku. Selasa 15, Rabu 35, Kamis 20, Jumat 30.",
   "error": "salah-baca-skala",
   "suffix": "buku"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: a) Rabu − Selasa = 35 − 15 = ?",
   "answer": "20",
   "hint": "Selisih berarti mengurangkan.",
   "explain": "Selisihnya 20 buku.",
   "error": "selisih-dijumlah",
   "suffix": "buku"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: b) Jumlahkan tiga hari pertama. 25 + 15 + 35 = ?",
   "answer": "75",
   "hint": "25 + 15 = 40, lalu tambah 35.",
   "explain": "75.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Tambahkan Kamis dan Jumat. 75 + 20 + 30 = ?",
   "answer": "125",
   "hint": "Jangan lupa satu batang pun.",
   "explain": "125 buku dalam seminggu.",
   "error": "lupa-batang",
   "suffix": "buku"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: jumlahkan dengan urutan lain. (25 + 35) + (15 + 20 + 30) = 60 + 65 = ?",
   "answer": "125",
   "hint": "Hasilnya harus sama.",
   "explain": "125. Sama.",
   "error": "salah-fakta-tambah"
  }
 ],
 "conclusion": "a) Selisihnya 20 buku. b) 125 buku.",
 "visual": {
  "type": "barChart",
  "scaleStep": 5,
  "max": 35,
  "bars": [
   {
    "label": "Senin",
    "value": 25
   },
   {
    "label": "Selasa",
    "value": 15
   },
   {
    "label": "Rabu",
    "value": 35
   },
   {
    "label": "Kamis",
    "value": 20
   },
   {
    "label": "Jumat",
    "value": 30
   }
  ],
  "title": "Buku yang dipinjam dalam satu minggu",
  "unit": "buku"
 }
}
```

### Contoh 3: Soal cerita dengan skala 100

```soal
{
 "title": "Contoh 3",
 "text": "Empat kelas mengumpulkan botol plastik untuk didaur ulang. Targetnya 3.000 botol. a) Kelas mana yang mengumpulkan 300 botol lebih banyak dari kelas 3A? b) Apakah target tercapai? Kalau belum, berapa botol lagi yang dibutuhkan?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Baca skala. Angka naik berapa setiap garis?",
   "answer": "100",
   "hint": "Lihat angka: 0, 100, 200, ...",
   "explain": "Skalanya 100.",
   "error": "salah-baca-skala"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: a) Kelas 3A mengumpulkan 400 botol. 400 + 300 = ?",
   "answer": "700",
   "hint": "\"300 lebih banyak\" berarti tambah 300.",
   "explain": "700 botol.",
   "error": "salah-fakta-tambah",
   "suffix": "botol"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Batang mana yang tingginya 700?",
   "options": [
    "3B",
    "3C",
    "3D"
   ],
   "answer": "3B",
   "hint": "Cari puncak di garis 700.",
   "explain": "Kelas 3B.",
   "error": "salah-baca-skala"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: b) Hitung total. 400 + 700 + 500 + 900 = ?",
   "answer": "2.500",
   "hint": "Jumlahkan keempat batang, coret yang sudah dihitung.",
   "explain": "2.500 botol.",
   "error": "lupa-batang",
   "suffix": "botol"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Target 3.000 botol. Apakah target tercapai?",
   "options": [
    "Belum tercapai",
    "Sudah tercapai"
   ],
   "answer": "Belum tercapai",
   "hint": "Bandingkan 2.500 dengan 3.000.",
   "explain": "2.500 lebih kecil dari 3.000. Belum tercapai.",
   "error": "salah-banding-bilangan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 6: Berapa botol lagi? 3.000 − 2.500 = ?",
   "answer": "500",
   "hint": "Target dikurangi yang sudah terkumpul.",
   "explain": "500 botol lagi.",
   "error": "salah-fakta-kurang",
   "suffix": "botol"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 2.500 + 500 = ?",
   "answer": "3.000",
   "hint": "Hasilnya harus sama dengan target.",
   "explain": "3.000. Benar.",
   "error": "salah-fakta-tambah"
  }
 ],
 "conclusion": "a) Kelas 3B. b) Belum tercapai, masih kurang 500 botol.",
 "visual": {
  "type": "barChart",
  "scaleStep": 100,
  "max": 900,
  "bars": [
   {
    "label": "3A",
    "value": 400
   },
   {
    "label": "3B",
    "value": 700
   },
   {
    "label": "3C",
    "value": 500
   },
   {
    "label": "3D",
    "value": 900
   }
  ],
  "title": "Botol plastik yang dikumpulkan",
  "unit": "botol"
 }
}
```

## Kesalahan yang sering terjadi

- **Mengira skala selalu 1.** Pada contoh 2, membaca batang Senin sebagai 5 karena puncaknya di garis kelima. Lihat angka di penggaris dulu. Garis kelima pada skala 5 bernilai 25.
- **Menghitung baris, bukan membaca angka.** Pada contoh 3, menjawab 3D = 9. Itu banyaknya garis, bukan banyaknya botol. Nilainya 900.
- **Selisih dihitung dengan menjumlah.** "Berapa lebih banyak" ditanyakan, tetapi kedua nilai dijumlahkan. Kata "lebih banyak", "lebih sedikit", dan "selisih" berarti mengurangkan.
- **Lupa satu batang saat menjumlah total.** Coret setiap batang yang sudah dijumlahkan, lalu hitung berapa batang yang sudah dicoret.

## Ringkasan

- Diagram batang memakai batang (seperti menara) untuk menunjukkan banyaknya.
- Selalu baca skala dulu: naik 1, 2, 5, 10, atau 100?
- Baca nilai batang dengan menarik garis dari puncak ke sumbu tegak.
- Selisih = nilai besar − nilai kecil. Total = jumlah semua nilai.
- Cek jawaban dengan operasi kebalikan atau urutan menjumlah yang berbeda.

## Cek pemahaman

Gunakan diagram batang hewan peliharaan siswa kelas 3B untuk menjawab soal 1 sampai 5. Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Berapa siswa yang memelihara ikan?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Angka di penggaris naik berapa setiap garis?",
   "answer": "4",
   "hint": "Lihat angka: 0, 4, 8, ...",
   "explain": "Skalanya 4.",
   "error": "salah-baca-skala"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Puncak batang Ikan ada di garis ke-3. Berapa nilainya?",
   "answer": "12",
   "hint": "Setiap garis bernilai 4. Hitung 3 × 4.",
   "explain": "12 siswa.",
   "error": "salah-baca-skala",
   "suffix": "siswa"
  }
 ],
 "conclusion": "12 siswa memelihara ikan.",
 "visual": {
  "type": "barChart",
  "scaleStep": 4,
  "max": 20,
  "bars": [
   {
    "label": "Kucing",
    "value": 16
   },
   {
    "label": "Ikan",
    "value": 12
   },
   {
    "label": "Burung",
    "value": 8
   },
   {
    "label": "Kelinci",
    "value": 20
   }
  ],
  "title": "Hewan peliharaan siswa kelas 3B",
  "unit": "siswa"
 }
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hewan apa yang paling sedikit dipelihara?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Cari batang paling pendek.",
   "options": [
    "Burung",
    "Ikan",
    "Kucing",
    "Kelinci"
   ],
   "answer": "Burung",
   "hint": "Paling sedikit berarti menara paling rendah.",
   "explain": "Burung.",
   "error": "salah-paling-banyak-sedikit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Berapa siswa yang memelihara burung?",
   "answer": "8",
   "hint": "Puncaknya di garis ke-2, skala 4.",
   "explain": "8 siswa.",
   "error": "salah-baca-skala",
   "suffix": "siswa"
  }
 ],
 "conclusion": "Burung, dengan 8 siswa.",
 "visual": {
  "type": "barChart",
  "scaleStep": 4,
  "max": 20,
  "bars": [
   {
    "label": "Kucing",
    "value": 16
   },
   {
    "label": "Ikan",
    "value": 12
   },
   {
    "label": "Burung",
    "value": 8
   },
   {
    "label": "Kelinci",
    "value": 20
   }
  ],
  "title": "Hewan peliharaan siswa kelas 3B",
  "unit": "siswa"
 }
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Berapa selisih siswa yang memelihara kelinci dan burung?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Selisih dicari dengan ...",
   "options": [
    "Mengurangkan",
    "Menjumlahkan"
   ],
   "answer": "Mengurangkan",
   "hint": "Selisih = nilai besar − nilai kecil.",
   "explain": "Kurangkan nilai yang besar dengan yang kecil.",
   "error": "selisih-dijumlah"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kelinci 20, burung 8. 20 − 8 = ?",
   "answer": "12",
   "hint": "Kurangkan.",
   "explain": "Selisihnya 12 siswa.",
   "error": "salah-fakta-kurang",
   "suffix": "siswa"
  }
 ],
 "conclusion": "Selisihnya 12 siswa.",
 "visual": {
  "type": "barChart",
  "scaleStep": 4,
  "max": 20,
  "bars": [
   {
    "label": "Kucing",
    "value": 16
   },
   {
    "label": "Ikan",
    "value": 12
   },
   {
    "label": "Burung",
    "value": 8
   },
   {
    "label": "Kelinci",
    "value": 20
   }
  ],
  "title": "Hewan peliharaan siswa kelas 3B",
  "unit": "siswa"
 }
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Berapa banyak siswa semuanya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Kucing + Ikan = 16 + 12 = ?",
   "answer": "28",
   "hint": "Jumlahkan dua batang pertama.",
   "explain": "28.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Burung + Kelinci = 8 + 20 = ?",
   "answer": "28",
   "hint": "Jumlahkan dua batang lainnya.",
   "explain": "28.",
   "error": "lupa-batang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Total 28 + 28 = ?",
   "answer": "56",
   "hint": "Gabungkan kedua hasil.",
   "explain": "56 siswa.",
   "error": "salah-fakta-tambah",
   "suffix": "siswa"
  }
 ],
 "conclusion": "Ada 56 siswa semuanya.",
 "visual": {
  "type": "barChart",
  "scaleStep": 4,
  "max": 20,
  "bars": [
   {
    "label": "Kucing",
    "value": 16
   },
   {
    "label": "Ikan",
    "value": 12
   },
   {
    "label": "Burung",
    "value": 8
   },
   {
    "label": "Kelinci",
    "value": 20
   }
  ],
  "title": "Hewan peliharaan siswa kelas 3B",
  "unit": "siswa"
 }
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Hewan apa yang dipelihara oleh siswa 2 kali lebih banyak daripada burung?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Burung 8 siswa. 2 × 8 = ?",
   "answer": "16",
   "hint": "Dua kali berarti dikali 2.",
   "explain": "16 siswa.",
   "error": "salah-fakta-kali",
   "suffix": "siswa"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Batang mana yang nilainya 16?",
   "options": [
    "Kucing",
    "Ikan",
    "Kelinci"
   ],
   "answer": "Kucing",
   "hint": "Cari puncak di garis 16.",
   "explain": "Kucing.",
   "error": "salah-baca-skala"
  }
 ],
 "conclusion": "Kucing, karena 2 × 8 = 16.",
 "visual": {
  "type": "barChart",
  "scaleStep": 4,
  "max": 20,
  "bars": [
   {
    "label": "Kucing",
    "value": 16
   },
   {
    "label": "Ikan",
    "value": 12
   },
   {
    "label": "Burung",
    "value": 8
   },
   {
    "label": "Kelinci",
    "value": 20
   }
  ],
  "title": "Hewan peliharaan siswa kelas 3B",
  "unit": "siswa"
 }
}
```
