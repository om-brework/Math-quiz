---
id: sd2-13-diagram-gambar-skala
judul: Diagram Gambar dengan Skala
jenjang: sd2
moe: "Primary 2 · Statistics · Picture Graphs"
prasyarat: [sd1-11-diagram-gambar, sd2-04-perkalian-2-3-4-5-10]
durasi_menit: 30
---

## Kenapa belajar ini?

Kalau ada 80 pengunjung perpustakaan, menggambar 80 orang tentu melelahkan. Diagram gambar dengan skala memakai satu gambar untuk mewakili beberapa benda. Diagramnya jadi lebih pendek dan mudah dibaca.

## Analogi

Bayangkan setiap gambar adalah **sebuah kantong**. Setiap kantong berisi benda yang sama banyak.

- Kalau tiap kantong berisi 2 kue, maka 4 kantong berisi 2, 4, 6, 8 kue.
- Kalau tiap kantong berisi 10 kelapa, maka 3 kantong berisi 10, 20, 30 kelapa.

```anim
{"type": "benda", "op": "×", "a": 4, "b": 2, "item": "kue", "title": "4 kantong, tiap kantong berisi 2 kue"}
```

Isi tiap kantong ditulis di **keterangan** di bawah diagram. Tanpa membaca keterangan, kamu tidak tahu isi kantongnya.

## Konsep

### Keterangan (skala)

Setiap diagram gambar dengan skala punya keterangan, misalnya:

```visual
{"type": "pictogram", "item": "bintang", "scale": 5, "rows": [{"label": "Kelas 2A", "value": 30}, {"label": "Kelas 2B", "value": 20}], "title": "Siswa yang ikut pramuka", "caption": "Keterangan: setiap bintang mewakili 5 siswa"}
```

Artinya satu gambar bintang adalah satu kantong berisi 5 siswa.

### Membaca banyak benda

1. Baca keterangan. Berapa isi satu kantong?
2. Hitung banyak gambar pada baris itu.
3. Kalikan banyak gambar dengan isi tiap kantong. Bisa juga dengan hitung loncat.

Contoh: ada 6 gambar, tiap gambar mewakili 5. Hitung loncat 5: 5, 10, 15, 20, 25, 30. Jadi 30.

```anim
{"type": "garis", "from": 0, "to": 30, "start": 0, "jumps": [5, 5, 5, 5, 5, 5], "step": 5, "title": "Kelas 2A: 6 gambar, hitung loncat 5"}
```

### Menjumlah

Jumlahkan banyak benda dari tiap baris. Atau jumlahkan dulu semua gambar, lalu kalikan dengan isi kantong.

### Mencari selisih

Kurangkan banyak benda dua baris. Atau cari dulu selisih gambar, lalu kalikan dengan isi kantong.

### Paling banyak dan paling sedikit

Baris dengan gambar terbanyak adalah yang paling banyak. Baris dengan gambar paling sedikit adalah yang paling sedikit. Ini berlaku karena semua kantong isinya sama.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Skala 2

```soal
{
 "title": "Contoh 1",
 "text": "Diagram ini menunjukkan banyak telur yang dikumpulkan tiga anak. Setiap gambar mewakili 2 telur. Berapa telur yang dikumpulkan Siti? Siapa yang paling banyak? Berapa telur semuanya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Baca keterangan. Satu gambar berisi berapa telur?",
   "answer": "2",
   "hint": "Lihat tulisan Keterangan di bawah diagram.",
   "explain": "Setiap kantong berisi 2 telur.",
   "error": "lupa-skala-piktogram",
   "suffix": "telur"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Ada berapa gambar di baris Siti?",
   "answer": "7",
   "hint": "Tunjuk gambar satu per satu.",
   "explain": "Ada 7 gambar.",
   "error": "salah-hitung-gambar",
   "suffix": "gambar"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Berapa telur Siti? 7 × 2 = ?",
   "answer": "14",
   "hint": "7 kantong, tiap kantong 2 telur.",
   "explain": "7 × 2 = 14 telur.",
   "error": "lupa-skala-piktogram",
   "suffix": "telur"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Siapa yang mengumpulkan paling banyak?",
   "options": [
    "Budi",
    "Siti",
    "Made"
   ],
   "answer": "Siti",
   "hint": "Cari baris dengan gambar terbanyak.",
   "explain": "Siti punya gambar terbanyak (7).",
   "error": "salah-paling-banyak-sedikit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Budi 4 gambar dan Made 3 gambar. Berapa telur Budi dan Made bersama?",
   "answer": "14",
   "hint": "Budi 4 × 2, Made 3 × 2, lalu jumlahkan.",
   "explain": "8 + 6 = 14 telur.",
   "error": "lupa-skala-piktogram",
   "suffix": "telur"
  },
  {
   "kind": "number",
   "prompt": "Langkah 6: Berapa telur semuanya?",
   "answer": "28",
   "hint": "Telur Siti ditambah telur Budi dan Made.",
   "explain": "14 + 14 = 28 telur.",
   "error": "salah-langkah-materi",
   "suffix": "telur"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: semua ada 4 + 7 + 3 = 14 gambar. 14 kantong isi 2 = ?",
   "answer": "28",
   "hint": "14 + 14.",
   "explain": "28 telur. Sama. Benar.",
   "error": "lupa-skala-piktogram",
   "suffix": "telur"
  }
 ],
 "conclusion": "Siti mengumpulkan 14 telur dan paling banyak. Semuanya 28 telur.",
 "visual": {
  "type": "pictogram",
  "item": "bintang",
  "scale": 2,
  "rows": [
   {
    "label": "Budi",
    "value": 8
   },
   {
    "label": "Siti",
    "value": 14
   },
   {
    "label": "Made",
    "value": 6
   }
  ],
  "title": "Telur yang dikumpulkan"
 }
}
```

### Contoh 2: Skala 5 dan selisih

```soal
{
 "title": "Contoh 2",
 "text": "Diagram ini menunjukkan buah kesukaan siswa kelas 2B. Setiap gambar mewakili 5 siswa. Berapa siswa yang suka rambutan? Berapa siswa lebih banyak yang suka mangga daripada jeruk?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Baca keterangan. Satu gambar mewakili berapa siswa?",
   "answer": "5",
   "hint": "Lihat Keterangan di bawah diagram.",
   "explain": "Setiap kantong berisi 5 siswa.",
   "error": "lupa-skala-piktogram",
   "suffix": "siswa"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Rambutan ada 5 gambar. Berapa siswa yang suka rambutan?",
   "answer": "25",
   "hint": "Hitung loncat 5 sebanyak 5 kali.",
   "explain": "5, 10, 15, 20, 25. Jadi 25 siswa.",
   "error": "lupa-skala-piktogram",
   "suffix": "siswa"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Mangga 6 gambar, jeruk 2 gambar. Berapa selisih gambarnya?",
   "answer": "4",
   "hint": "6 − 2.",
   "explain": "Selisihnya 4 gambar.",
   "error": "salah-hitung-gambar",
   "suffix": "gambar"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Ubah selisih gambar menjadi siswa. 4 × 5 = ?",
   "answer": "20",
   "hint": "Selisih 4 gambar belum berarti 4 siswa.",
   "explain": "4 kantong isi 5 = 20 siswa.",
   "error": "selisih-gambar-tidak-diubah",
   "suffix": "siswa"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: mangga 30 siswa, jeruk 10 siswa. 30 − 10 = ?",
   "answer": "20",
   "hint": "Kurangkan langsung.",
   "explain": "20 siswa. Sama. Benar.",
   "error": "jumlah-bukan-selisih",
   "suffix": "siswa"
  }
 ],
 "conclusion": "25 siswa suka rambutan. Yang suka mangga 20 siswa lebih banyak daripada yang suka jeruk.",
 "visual": {
  "type": "pictogram",
  "item": "apel",
  "scale": 5,
  "rows": [
   {
    "label": "Mangga",
    "value": 30
   },
   {
    "label": "Pisang",
    "value": 15
   },
   {
    "label": "Rambutan",
    "value": 25
   },
   {
    "label": "Jeruk",
    "value": 10
   }
  ],
  "title": "Buah kesukaan kelas 2B"
 }
}
```

### Contoh 3: Soal cerita skala 10

```soal
{
 "title": "Contoh 3",
 "text": "Bu Dewi mencatat pengunjung perpustakaan sekolah selama satu minggu. Setiap gambar mewakili 10 pengunjung. (a) Hari apa pengunjungnya paling sedikit, dan berapa orang? (b) Berapa pengunjung lebih banyak pada hari Jumat daripada hari Rabu? (c) Berapa pengunjung selama satu minggu?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Baca keterangan. Satu gambar mewakili berapa pengunjung?",
   "answer": "10",
   "hint": "Lihat Keterangan di bawah diagram.",
   "explain": "Setiap kantong berisi 10 pengunjung.",
   "error": "lupa-skala-piktogram",
   "suffix": "orang"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2 (a): Hari apa pengunjungnya paling sedikit?",
   "options": [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat"
   ],
   "answer": "Rabu",
   "hint": "Cari baris dengan gambar paling sedikit.",
   "explain": "Rabu hanya 4 gambar.",
   "error": "salah-paling-banyak-sedikit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3 (a): Berapa pengunjung hari Rabu?",
   "answer": "40",
   "hint": "4 gambar, tiap gambar 10.",
   "explain": "4 × 10 = 40 pengunjung.",
   "error": "lupa-skala-piktogram",
   "suffix": "orang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4 (b): Jumat 8 gambar, Rabu 4 gambar. Selisihnya berapa pengunjung?",
   "answer": "40",
   "hint": "Cari selisih gambar dulu, lalu kalikan 10.",
   "explain": "8 − 4 = 4 gambar. 4 × 10 = 40 pengunjung.",
   "error": "selisih-gambar-tidak-diubah",
   "suffix": "orang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5 (c): Berapa gambar semuanya? 7 + 5 + 4 + 6 + 8 = ?",
   "answer": "30",
   "hint": "Jumlahkan sedikit demi sedikit.",
   "explain": "Ada 30 gambar.",
   "error": "salah-hitung-gambar",
   "suffix": "gambar"
  },
  {
   "kind": "number",
   "prompt": "Langkah 6 (c): 30 kantong isi 10 = ... pengunjung?",
   "answer": "300",
   "hint": "30 puluhan.",
   "explain": "30 × 10 = 300 pengunjung.",
   "error": "lupa-skala-piktogram",
   "suffix": "orang"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 70 + 50 + 40 + 60 + 80 = ?",
   "answer": "300",
   "hint": "Jumlahkan banyak pengunjung tiap hari.",
   "explain": "300. Sama. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "orang"
  }
 ],
 "conclusion": "(a) Rabu, 40 pengunjung. (b) 40 pengunjung lebih banyak. (c) 300 pengunjung.",
 "visual": {
  "type": "pictogram",
  "item": "buku",
  "scale": 10,
  "rows": [
   {
    "label": "Senin",
    "value": 70
   },
   {
    "label": "Selasa",
    "value": 50
   },
   {
    "label": "Rabu",
    "value": 40
   },
   {
    "label": "Kamis",
    "value": 60
   },
   {
    "label": "Jumat",
    "value": 80
   }
  ],
  "title": "Pengunjung perpustakaan"
 }
}
```

## Kesalahan yang sering terjadi

- **Lupa membaca keterangan.** Pada contoh 1, menjawab Siti mengumpulkan 7 telur. Itu banyak gambar, bukan banyak telur. Setiap gambar berisi 2, jadi 14.
- **Selisih gambar tidak diubah.** Pada contoh 2, menjawab selisihnya 4 siswa. Itu 4 gambar. Kalikan dengan 5: 20 siswa.
- **Salah menghitung gambar.** Baris panjang dihitung terburu-buru. Tunjuk setiap gambar satu per satu dengan jari atau pensil.
- **Memakai skala yang salah.** Membaca diagram skala 10 dengan isi 5. Setiap diagram punya keterangan sendiri. Baca keterangan di diagram itu.

## Ringkasan

- Dalam diagram gambar dengan skala, satu gambar mewakili beberapa benda, seperti kantong berisi benda.
- Selalu baca keterangan dulu: 1 gambar mewakili berapa?
- Banyak benda = banyak gambar × isi tiap gambar.
- Paling banyak atau paling sedikit: lihat baris dengan gambar terbanyak atau tersedikit.
- Selisih dan jumlah bisa dihitung dari gambar dulu, lalu dikalikan dengan isi tiap gambar.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat. Soal 1 sampai 4 memakai diagram botol plastik, setiap gambar mewakili 10 botol.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Berapa botol yang dikumpulkan kelas 2A?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Ada berapa gambar di baris kelas 2A?",
   "answer": "6",
   "hint": "Tunjuk gambar satu per satu.",
   "explain": "Ada 6 gambar.",
   "error": "salah-hitung-gambar",
   "suffix": "gambar"
  },
  {
   "kind": "number",
   "prompt": "Berapa botolnya?",
   "answer": "60",
   "hint": "Setiap gambar mewakili 10 botol.",
   "explain": "6 × 10 = 60 botol.",
   "error": "lupa-skala-piktogram",
   "suffix": "botol"
  }
 ],
 "conclusion": "Kelas 2A mengumpulkan 60 botol.",
 "visual": {
  "type": "pictogram",
  "item": "bintang",
  "scale": 10,
  "rows": [
   {
    "label": "Kelas 2A",
    "value": 60
   },
   {
    "label": "Kelas 2B",
    "value": 40
   },
   {
    "label": "Kelas 2C",
    "value": 90
   }
  ],
  "title": "Botol plastik yang dikumpulkan"
 }
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Kelas mana yang mengumpulkan paling sedikit?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Kelas mana yang gambarnya paling sedikit?",
   "options": [
    "Kelas 2A",
    "Kelas 2B",
    "Kelas 2C"
   ],
   "answer": "Kelas 2B",
   "hint": "Bandingkan banyak gambar tiap baris.",
   "explain": "Kelas 2B hanya 4 gambar.",
   "error": "salah-paling-banyak-sedikit"
  },
  {
   "kind": "number",
   "prompt": "Berapa botol yang dikumpulkan kelas itu?",
   "answer": "40",
   "hint": "4 gambar, tiap gambar 10.",
   "explain": "4 × 10 = 40 botol.",
   "error": "lupa-skala-piktogram",
   "suffix": "botol"
  }
 ],
 "conclusion": "Kelas 2B paling sedikit, 40 botol.",
 "visual": {
  "type": "pictogram",
  "item": "bintang",
  "scale": 10,
  "rows": [
   {
    "label": "Kelas 2A",
    "value": 60
   },
   {
    "label": "Kelas 2B",
    "value": 40
   },
   {
    "label": "Kelas 2C",
    "value": 90
   }
  ],
  "title": "Botol plastik yang dikumpulkan"
 }
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Berapa botol lebih banyak yang dikumpulkan kelas 2C daripada kelas 2B?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Kelas 2C 9 gambar, kelas 2B 4 gambar. Berapa selisih gambarnya?",
   "answer": "5",
   "hint": "9 − 4.",
   "explain": "Selisihnya 5 gambar.",
   "error": "jumlah-bukan-selisih",
   "suffix": "gambar"
  },
  {
   "kind": "number",
   "prompt": "Ubah menjadi botol.",
   "answer": "50",
   "hint": "Selisih gambar dikali isi tiap gambar.",
   "explain": "5 × 10 = 50 botol.",
   "error": "selisih-gambar-tidak-diubah",
   "suffix": "botol"
  }
 ],
 "conclusion": "Kelas 2C mengumpulkan 50 botol lebih banyak.",
 "visual": {
  "type": "pictogram",
  "item": "bintang",
  "scale": 10,
  "rows": [
   {
    "label": "Kelas 2A",
    "value": 60
   },
   {
    "label": "Kelas 2B",
    "value": 40
   },
   {
    "label": "Kelas 2C",
    "value": 90
   }
  ],
  "title": "Botol plastik yang dikumpulkan"
 }
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Berapa botol yang dikumpulkan ketiga kelas?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa gambar semuanya? 6 + 4 + 9 = ?",
   "answer": "19",
   "hint": "Jumlahkan gambar semua baris.",
   "explain": "Ada 19 gambar.",
   "error": "salah-hitung-gambar",
   "suffix": "gambar"
  },
  {
   "kind": "number",
   "prompt": "19 kantong isi 10 = ... botol?",
   "answer": "190",
   "hint": "19 puluhan.",
   "explain": "19 × 10 = 190 botol.",
   "error": "lupa-skala-piktogram",
   "suffix": "botol"
  },
  {
   "kind": "number",
   "prompt": "Cek: 60 + 40 + 90 = ?",
   "answer": "190",
   "hint": "Jumlahkan botol tiap kelas.",
   "explain": "190. Sama. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "botol"
  }
 ],
 "conclusion": "Ketiga kelas mengumpulkan 190 botol.",
 "visual": {
  "type": "pictogram",
  "item": "bintang",
  "scale": 10,
  "rows": [
   {
    "label": "Kelas 2A",
    "value": 60
   },
   {
    "label": "Kelas 2B",
    "value": 40
   },
   {
    "label": "Kelas 2C",
    "value": 90
   }
  ],
  "title": "Botol plastik yang dikumpulkan"
 }
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Pada diagram lain, setiap gambar mewakili 2 kue. Baris milik Ani berisi 9 gambar. Berapa kue milik Ani?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Satu gambar mewakili berapa kue?",
   "answer": "2",
   "hint": "Baca keterangan.",
   "explain": "Setiap gambar 2 kue.",
   "error": "lupa-skala-piktogram",
   "suffix": "kue"
  },
  {
   "kind": "number",
   "prompt": "Berapa kue milik Ani? 9 × 2 = ?",
   "answer": "18",
   "hint": "Hitung loncat 2 sebanyak 9 kali.",
   "explain": "9 × 2 = 18 kue.",
   "error": "lupa-skala-piktogram",
   "suffix": "kue"
  }
 ],
 "conclusion": "Ani punya 18 kue.",
 "visual": {
  "type": "pictogram",
  "item": "kue",
  "scale": 2,
  "rows": [
   {
    "label": "Ani",
    "value": 18
   }
  ]
 }
}
```
