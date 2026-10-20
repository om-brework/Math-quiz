---
id: sd1-11-diagram-gambar
judul: Diagram Gambar
jenjang: sd1
moe: "Primary 1 · Statistics · Data Representation and Interpretation"
prasyarat: [sd1-01-bilangan-sampai-100, sd1-03-konsep-tambah-kurang]
durasi_menit: 25
---

## Kenapa belajar ini?

Bu guru ingin tahu buah apa yang paling disukai siswa. Kalau datanya hanya ditulis panjang, sulit dibaca. Diagram gambar menunjukkan data dengan gambar, sehingga kita bisa langsung melihat mana yang paling banyak dan paling sedikit.

## Analogi

Bayangkan setiap siswa menempelkan **satu stiker** di papan, di baris buah kesukaannya.

- Satu stiker = satu siswa.
- Baris yang stikernya **paling panjang** adalah yang **paling banyak** dipilih.
- Baris yang stikernya **paling pendek** adalah yang **paling sedikit** dipilih.

```visual
{"type": "pictogram", "item": "bintang", "scale": 1, "title": "Papan Stiker", "rows": [{"label": "Mangga", "value": 3}, {"label": "Pisang", "value": 1}, {"label": "Jeruk", "value": 4}], "caption": "Satu stiker = satu siswa. Baris jeruk paling panjang."}
```

Papan stiker itulah **diagram gambar** atau **piktogram**.

## Konsep

### Bagian-bagian diagram gambar

```visual
{"type": "pictogram", "item": "bintang", "scale": 1, "title": "Buah Kesukaan Siswa Kelas 1A", "rows": [{"label": "Mangga", "value": 6}, {"label": "Pisang", "value": 4}, {"label": "Jeruk", "value": 8}, {"label": "Apel", "value": 3}], "caption": "Setiap gambar mewakili 1 siswa."}
```

- **Judul**: memberi tahu isi diagram (buah kesukaan siswa kelas 1A).
- **Nama kelompok**: mangga, pisang, jeruk, apel.
- **Gambar**: setiap bintang adalah satu stiker.
- **Keterangan**: memberi tahu satu gambar mewakili berapa. Di sini 1 gambar = 1 siswa.

Gambar harus ditempel **rapi dan sejajar**. Kalau tidak sejajar, panjang baris sulit dibandingkan.

### Membaca banyaknya

Hitung gambar di satu baris. Dari diagram di atas: mangga 6, pisang 4, jeruk 8, apel 3.

### Paling banyak dan paling sedikit

- **Paling banyak**: baris terpanjang, bilangannya terbesar.
- **Paling sedikit**: baris terpendek, bilangannya terkecil.

### Selisih

Selisih menjawab "berapa **lebih banyak**?" atau "berapa **lebih sedikit**?". Kurangkan bilangan yang besar dengan yang kecil.

Bisa juga dengan melihat stiker yang **tidak punya pasangan** saat dua baris dibandingkan.

```visual
{"type": "barModel", "bars": [{"label": "Jeruk", "units": 8, "known": "8"}, {"label": "Mangga", "units": 6, "known": "6"}], "total": "8", "question": "?", "caption": "Stiker jeruk yang tidak punya pasangan adalah selisihnya."}
```

### Jumlah

Jumlah menjawab "berapa **semuanya**?". Jumlahkan banyak gambar dari baris-baris yang diminta.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

Pakai diagram buah kesukaan kelas 1A di bagian Konsep. Diagram itu juga muncul di setiap soal.

### Contoh 1: Membaca satu baris

```soal
{
 "title": "Contoh 1",
 "text": "Berapa siswa yang menyukai mangga?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Baca keterangan. Satu gambar mewakili ...",
   "options": [
    "1 siswa",
    "2 siswa",
    "10 siswa"
   ],
   "answer": "1 siswa",
   "hint": "Lihat kalimat di bawah diagram.",
   "explain": "Setiap gambar = 1 siswa.",
   "error": "abaikan-keterangan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung gambar di baris Mangga.",
   "answer": "6",
   "hint": "Tunjuk setiap gambar sambil menghitung.",
   "explain": "1, 2, 3, 4, 5, 6. Ada 6 gambar.",
   "error": "salah-hitung-gambar",
   "suffix": "siswa"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung lagi dari kanan ke kiri. Ada berapa?",
   "answer": "6",
   "hint": "Hasilnya harus sama.",
   "explain": "Tetap 6. Benar.",
   "error": "salah-hitung-gambar"
  }
 ],
 "conclusion": "Jadi 6 siswa menyukai mangga.",
 "visual": {
  "type": "pictogram",
  "item": "bintang",
  "scale": 1,
  "title": "Buah Kesukaan Siswa Kelas 1A",
  "rows": [
   {
    "label": "Mangga",
    "value": 6
   },
   {
    "label": "Pisang",
    "value": 4
   },
   {
    "label": "Jeruk",
    "value": 8
   },
   {
    "label": "Apel",
    "value": 3
   }
  ],
  "caption": "Setiap gambar mewakili 1 siswa."
 }
}
```

### Contoh 2: Paling banyak dan paling sedikit

```soal
{
 "title": "Contoh 2",
 "text": "Buah apa yang paling banyak disukai? Buah apa yang paling sedikit disukai?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Hitung setiap baris. Berapa gambar di baris Jeruk?",
   "answer": "8",
   "hint": "Tunjuk dan hitung.",
   "explain": "Jeruk 8. Mangga 6, pisang 4, apel 3.",
   "error": "salah-hitung-gambar"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Buah apa yang paling banyak disukai?",
   "options": [
    "Jeruk",
    "Mangga",
    "Apel"
   ],
   "answer": "Jeruk",
   "hint": "Cari bilangan terbesar.",
   "explain": "8 paling besar, jadi jeruk paling banyak.",
   "error": "salah-paling-banyak-sedikit"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Buah apa yang paling sedikit disukai?",
   "options": [
    "Apel",
    "Pisang",
    "Jeruk"
   ],
   "answer": "Apel",
   "hint": "Cari bilangan terkecil.",
   "explain": "3 paling kecil, jadi apel paling sedikit.",
   "error": "salah-paling-banyak-sedikit"
  }
 ],
 "conclusion": "Jadi paling banyak jeruk (8 siswa), paling sedikit apel (3 siswa).",
 "visual": {
  "type": "pictogram",
  "item": "bintang",
  "scale": 1,
  "title": "Buah Kesukaan Siswa Kelas 1A",
  "rows": [
   {
    "label": "Mangga",
    "value": 6
   },
   {
    "label": "Pisang",
    "value": 4
   },
   {
    "label": "Jeruk",
    "value": 8
   },
   {
    "label": "Apel",
    "value": 3
   }
  ],
  "caption": "Setiap gambar mewakili 1 siswa."
 }
}
```

### Contoh 3: Selisih

```soal
{
 "title": "Contoh 3",
 "text": "Berapa siswa lebih banyak yang menyukai jeruk daripada mangga?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Baca baris Jeruk.",
   "answer": "8",
   "hint": "Hitung gambarnya.",
   "explain": "Jeruk 8.",
   "error": "salah-hitung-gambar"
  },
  {
   "kind": "number",
   "prompt": "Baca baris Mangga.",
   "answer": "6",
   "hint": "Hitung gambarnya.",
   "explain": "Mangga 6.",
   "error": "salah-hitung-gambar"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: “Lebih banyak” berarti ...",
   "options": [
    "8 − 6",
    "8 + 6"
   ],
   "answer": "8 − 6",
   "hint": "Kita mencari selisih.",
   "explain": "Selisih dicari dengan pengurangan.",
   "error": "jumlah-bukan-selisih"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung. 8 − 6 = ?",
   "answer": "2",
   "hint": "Hitung stiker jeruk yang tidak punya pasangan.",
   "explain": "8 − 6 = 2.",
   "error": "salah-fakta-kurang",
   "suffix": "siswa"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 6 + 2 = ?",
   "answer": "8",
   "hint": "Mangga ditambah selisihnya.",
   "explain": "6 + 2 = 8. Benar.",
   "error": "salah-fakta-tambah"
  }
 ],
 "conclusion": "Jadi 2 siswa lebih banyak menyukai jeruk daripada mangga.",
 "visual": {
  "type": "pictogram",
  "item": "bintang",
  "scale": 1,
  "title": "Buah Kesukaan Siswa Kelas 1A",
  "rows": [
   {
    "label": "Mangga",
    "value": 6
   },
   {
    "label": "Pisang",
    "value": 4
   },
   {
    "label": "Jeruk",
    "value": 8
   },
   {
    "label": "Apel",
    "value": 3
   }
  ],
  "caption": "Setiap gambar mewakili 1 siswa."
 }
}
```

### Contoh 4: Jumlah semua

```soal
{
 "title": "Contoh 4",
 "text": "Berapa jumlah siswa di kelas 1A yang ikut memilih?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Cari pasangan 10. Mangga 6 + pisang 4 = ?",
   "answer": "10",
   "hint": "6 dan 4 berpasangan.",
   "explain": "6 + 4 = 10.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jumlahkan sisanya. Jeruk 8 + apel 3 = ?",
   "answer": "11",
   "hint": "8 + 2 = 10, lalu tambah 1.",
   "explain": "8 + 3 = 11.",
   "error": "lupa-satu-baris"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Gabungkan. 10 + 11 = ?",
   "answer": "21",
   "hint": "Tambah 10 ke 11.",
   "explain": "10 + 11 = 21.",
   "error": "salah-fakta-tambah",
   "suffix": "siswa"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: urut dari atas. 6 + 4 = 10, 10 + 8 = 18, 18 + 3 = ?",
   "answer": "21",
   "hint": "Jangan lupa baris terakhir.",
   "explain": "18 + 3 = 21. Sama.",
   "error": "lupa-satu-baris"
  }
 ],
 "conclusion": "Jadi ada 21 siswa yang ikut memilih.",
 "visual": {
  "type": "pictogram",
  "item": "bintang",
  "scale": 1,
  "title": "Buah Kesukaan Siswa Kelas 1A",
  "rows": [
   {
    "label": "Mangga",
    "value": 6
   },
   {
    "label": "Pisang",
    "value": 4
   },
   {
    "label": "Jeruk",
    "value": 8
   },
   {
    "label": "Apel",
    "value": 3
   }
  ],
  "caption": "Setiap gambar mewakili 1 siswa."
 }
}
```

### Contoh 5: Soal cerita dengan diagram lain

```soal
{
 "title": "Contoh 5",
 "text": "Putu mencatat kendaraan yang lewat di depan sekolah selama 10 menit. Berapa kendaraan beroda dua yang lewat? (Motor dan sepeda beroda dua.)",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Baris mana yang dijumlahkan?",
   "options": [
    "Motor dan Sepeda",
    "Mobil dan Bus",
    "semua baris"
   ],
   "answer": "Motor dan Sepeda",
   "hint": "Kendaraan beroda dua.",
   "explain": "Kita mencari jumlah motor dan sepeda.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Baca diagram. Berapa motor?",
   "answer": "9",
   "hint": "Hitung gambar di baris Motor.",
   "explain": "Motor 9.",
   "error": "salah-hitung-gambar"
  },
  {
   "kind": "number",
   "prompt": "Berapa sepeda?",
   "answer": "7",
   "hint": "Hitung gambar di baris Sepeda.",
   "explain": "Sepeda 7.",
   "error": "salah-hitung-gambar"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Buat 10. 9 + 1 = 10, sisa dari 7 adalah 6. 10 + 6 = ?",
   "answer": "16",
   "hint": "Tambahkan sisanya ke 10.",
   "explain": "9 + 7 = 16.",
   "error": "salah-fakta-tambah",
   "suffix": "kendaraan"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 16 − 7 = ?",
   "answer": "9",
   "hint": "Harus sama dengan banyak motor.",
   "explain": "16 − 7 = 9. Benar.",
   "error": "salah-fakta-kurang"
  }
 ],
 "conclusion": "Jadi ada 16 kendaraan beroda dua.",
 "visual": {
  "type": "pictogram",
  "item": "mobil",
  "scale": 1,
  "title": "Kendaraan yang Lewat di Depan Sekolah",
  "rows": [
   {
    "label": "Mobil",
    "value": 5
   },
   {
    "label": "Motor",
    "value": 9
   },
   {
    "label": "Sepeda",
    "value": 7
   },
   {
    "label": "Bus",
    "value": 2
   }
  ],
  "caption": "Setiap gambar mewakili 1 kendaraan."
 }
}
```

## Kesalahan yang sering terjadi

- **Salah menghitung gambar.** Melompati satu O atau menghitung dua kali. Tunjuk setiap gambar sambil menghitung, atau coret pelan dengan pensil.
- **Menilai dari lebar, bukan banyak.** Kalau gambar tidak sejajar, baris yang terlihat panjang belum tentu paling banyak. Selalu hitung bilangannya.
- **Menjumlahkan saat ditanya selisih.** Untuk "berapa lebih banyak jeruk daripada mangga", menjawab 8 + 6 = 14. Kata "lebih banyak" berarti selisih: 8 − 6 = 2.
- **Lupa satu baris saat menjumlah.** Menjumlahkan semua tetapi melewatkan apel. Coret setiap bilangan yang sudah dipakai.
- **Tidak membaca keterangan.** Selalu lihat satu gambar mewakili berapa. Di diagram kelas 1, satu gambar mewakili 1.

## Ringkasan

- Diagram gambar (piktogram) memakai gambar untuk menunjukkan banyak benda.
- Baca **judul** dan **keterangan** dulu. Di sini 1 gambar = 1 benda.
- Paling banyak: bilangan terbesar. Paling sedikit: bilangan terkecil.
- Selisih ("berapa lebih banyak/sedikit"): kurangkan.
- Jumlah ("berapa semuanya"): jumlahkan.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat. Semua soal memakai diagram ini.

```visual
{"type": "pictogram", "item": "bintang", "scale": 1, "title": "Hewan Peliharaan Siswa Kelas 1B", "rows": [{"label": "Kucing", "value": 7}, {"label": "Ikan", "value": 5}, {"label": "Burung", "value": 3}, {"label": "Kelinci", "value": 4}], "caption": "Setiap gambar mewakili 1 siswa."}
```

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Berapa siswa yang memelihara ikan?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Satu gambar mewakili ...",
   "options": [
    "1 siswa",
    "5 siswa"
   ],
   "answer": "1 siswa",
   "hint": "Lihat keterangan.",
   "explain": "Setiap gambar = 1 siswa.",
   "error": "abaikan-keterangan"
  },
  {
   "kind": "number",
   "prompt": "Hitung gambar di baris Ikan.",
   "answer": "5",
   "hint": "Tunjuk setiap gambar.",
   "explain": "Ada 5 gambar.",
   "error": "salah-hitung-gambar",
   "suffix": "siswa"
  }
 ],
 "conclusion": "Jadi 5 siswa memelihara ikan.",
 "visual": {
  "type": "pictogram",
  "item": "bintang",
  "scale": 1,
  "title": "Hewan Peliharaan Siswa Kelas 1B",
  "rows": [
   {
    "label": "Kucing",
    "value": 7
   },
   {
    "label": "Ikan",
    "value": 5
   },
   {
    "label": "Burung",
    "value": 3
   },
   {
    "label": "Kelinci",
    "value": 4
   }
  ],
  "caption": "Setiap gambar mewakili 1 siswa."
 }
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hewan apa yang paling banyak dipelihara?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa gambar di baris terpanjang?",
   "answer": "7",
   "hint": "Cari baris terpanjang, lalu hitung.",
   "explain": "Baris kucing punya 7 gambar.",
   "error": "salah-hitung-gambar"
  },
  {
   "kind": "choice",
   "prompt": "Hewan yang paling banyak dipelihara adalah ...",
   "options": [
    "Kucing",
    "Ikan",
    "Kelinci"
   ],
   "answer": "Kucing",
   "hint": "Bilangan terbesar.",
   "explain": "Kucing, 7 siswa.",
   "error": "salah-paling-banyak-sedikit"
  }
 ],
 "conclusion": "Jadi kucing paling banyak dipelihara.",
 "visual": {
  "type": "pictogram",
  "item": "bintang",
  "scale": 1,
  "title": "Hewan Peliharaan Siswa Kelas 1B",
  "rows": [
   {
    "label": "Kucing",
    "value": 7
   },
   {
    "label": "Ikan",
    "value": 5
   },
   {
    "label": "Burung",
    "value": 3
   },
   {
    "label": "Kelinci",
    "value": 4
   }
  ],
  "caption": "Setiap gambar mewakili 1 siswa."
 }
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hewan apa yang paling sedikit dipelihara?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa gambar di baris terpendek?",
   "answer": "3",
   "hint": "Cari baris terpendek, lalu hitung.",
   "explain": "Baris burung punya 3 gambar.",
   "error": "salah-hitung-gambar"
  },
  {
   "kind": "choice",
   "prompt": "Hewan yang paling sedikit dipelihara adalah ...",
   "options": [
    "Burung",
    "Kelinci",
    "Kucing"
   ],
   "answer": "Burung",
   "hint": "Bilangan terkecil.",
   "explain": "Burung, 3 siswa.",
   "error": "salah-paling-banyak-sedikit"
  }
 ],
 "conclusion": "Jadi burung paling sedikit dipelihara.",
 "visual": {
  "type": "pictogram",
  "item": "bintang",
  "scale": 1,
  "title": "Hewan Peliharaan Siswa Kelas 1B",
  "rows": [
   {
    "label": "Kucing",
    "value": 7
   },
   {
    "label": "Ikan",
    "value": 5
   },
   {
    "label": "Burung",
    "value": 3
   },
   {
    "label": "Kelinci",
    "value": 4
   }
  ],
  "caption": "Setiap gambar mewakili 1 siswa."
 }
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Berapa siswa lebih banyak yang memelihara kucing daripada burung?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Hitungan apa yang dipakai?",
   "options": [
    "7 − 3",
    "7 + 3"
   ],
   "answer": "7 − 3",
   "hint": "“Lebih banyak” berarti selisih.",
   "explain": "Selisih dicari dengan pengurangan: 7 − 3.",
   "error": "jumlah-bukan-selisih"
  },
  {
   "kind": "number",
   "prompt": "7 − 3 = ?",
   "answer": "4",
   "hint": "Hitung gambar kucing yang tidak punya pasangan.",
   "explain": "7 − 3 = 4.",
   "error": "salah-fakta-kurang",
   "suffix": "siswa"
  },
  {
   "kind": "number",
   "prompt": "Cek: 3 + 4 = ?",
   "answer": "7",
   "hint": "Burung ditambah selisihnya.",
   "explain": "3 + 4 = 7. Benar.",
   "error": "salah-fakta-tambah"
  }
 ],
 "conclusion": "Jadi 4 siswa lebih banyak memelihara kucing daripada burung.",
 "visual": {
  "type": "pictogram",
  "item": "bintang",
  "scale": 1,
  "title": "Hewan Peliharaan Siswa Kelas 1B",
  "rows": [
   {
    "label": "Kucing",
    "value": 7
   },
   {
    "label": "Ikan",
    "value": 5
   },
   {
    "label": "Burung",
    "value": 3
   },
   {
    "label": "Kelinci",
    "value": 4
   }
  ],
  "caption": "Setiap gambar mewakili 1 siswa."
 }
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Berapa jumlah semua siswa di diagram ini?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Pasangan 10: kucing 7 + burung 3 = ?",
   "answer": "10",
   "hint": "7 dan 3 berpasangan.",
   "explain": "7 + 3 = 10.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "number",
   "prompt": "Ikan 5 + kelinci 4 = ?",
   "answer": "9",
   "hint": "Jangan lupa baris kelinci.",
   "explain": "5 + 4 = 9.",
   "error": "lupa-satu-baris"
  },
  {
   "kind": "number",
   "prompt": "10 + 9 = ?",
   "answer": "19",
   "hint": "Gabungkan.",
   "explain": "10 + 9 = 19.",
   "error": "salah-fakta-tambah",
   "suffix": "siswa"
  }
 ],
 "conclusion": "Jadi ada 19 siswa.",
 "visual": {
  "type": "pictogram",
  "item": "bintang",
  "scale": 1,
  "title": "Hewan Peliharaan Siswa Kelas 1B",
  "rows": [
   {
    "label": "Kucing",
    "value": 7
   },
   {
    "label": "Ikan",
    "value": 5
   },
   {
    "label": "Burung",
    "value": 3
   },
   {
    "label": "Kelinci",
    "value": 4
   }
  ],
  "caption": "Setiap gambar mewakili 1 siswa."
 }
}
```
