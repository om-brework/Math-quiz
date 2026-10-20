---
id: sd1-08-panjang-cm
judul: Panjang dalam Sentimeter
jenjang: sd1
moe: "Primary 1 · Measurement and Geometry · Length"
prasyarat: [sd1-01-bilangan-sampai-100, sd1-03-konsep-tambah-kurang]
durasi_menit: 30
---

## Kenapa belajar ini?

Pensil siapa yang lebih panjang, pensilmu atau pensil temanmu? Berapa panjang pita untuk hiasan kelas? Dengan penggaris, kita bisa mengukur panjang dengan tepat dan memakai satuan yang sama untuk semua orang.

## Analogi

Bayangkan seekor **semut kecil** berjalan di sepanjang penggaris.

Setiap langkah semut selalu **sama panjang**. Satu langkah semut itu kita sebut **1 sentimeter**.

```anim
{"type": "garis", "from": 0, "to": 8, "start": 0, "jumps": [1, 1, 1, 1, 1, 1], "title": "Semut melangkah 1 cm, 6 kali: 6 cm"}
```

Mengukur panjang artinya menghitung **berapa langkah semut** dari ujung ke ujung benda. Semut selalu mulai berjalan dari angka **0**.

## Konsep

### Sentimeter dan singkatannya

**Sentimeter** adalah satuan panjang untuk benda-benda kecil. Singkatannya **cm**.

- 5 sentimeter ditulis **5 cm**.
- 12 sentimeter ditulis **12 cm**.

Jarak dari satu angka ke angka berikutnya di penggaris adalah **1 cm**. Itu satu langkah semut.

```visual
{"type": "numberLine", "from": 0, "to": 5, "step": 1, "jumps": [{"from": 0, "to": 1, "label": "1 cm"}, {"from": 1, "to": 2, "label": "1 cm"}, {"from": 2, "to": 3, "label": "1 cm"}, {"from": 3, "to": 4, "label": "1 cm"}, {"from": 4, "to": 5, "label": "1 cm"}], "caption": "Dari 0 ke 5 ada 5 langkah, masing-masing 1 cm"}
```

### Cara mengukur dengan penggaris

1. Letakkan ujung benda tepat di angka **0**. Angka 0 bisa sedikit masuk dari tepi penggaris.
2. Pastikan benda lurus di sepanjang penggaris.
3. Lihat ujung benda yang lain. Baca angka di situ.
4. Tulis angkanya dengan **cm**.

```visual
{"type": "ruler", "start": 0, "end": 6, "item": "pensil", "caption": "Ujung kiri pensil di 0, ujung kanan di 6. Panjangnya 6 cm."}
```

### Kalau benda tidak mulai dari 0

Kadang benda diletakkan mulai dari angka lain. Jangan baca angka ujungnya saja. **Hitung langkah semut** dari ujung awal ke ujung akhir.

```visual
{"type": "ruler", "start": 2, "end": 7, "item": "pensil", "caption": "Mulai di 2, berakhir di 7. Ada 5 langkah, jadi 5 cm."}
```

### Membandingkan dan mengurutkan panjang

Setelah diukur, bandingkan angkanya.

- Angka lebih besar berarti **lebih panjang**.
- Angka lebih kecil berarti **lebih pendek**.

Untuk tahu **berapa lebih panjang**, kurangkan panjang yang besar dengan panjang yang kecil.

```visual
{"type": "barModel", "bars": [{"label": "Budi", "units": 14, "known": "14 cm"}, {"label": "Siti", "units": 9, "known": "9 cm"}], "total": "14 cm", "question": "lebih panjang ?", "caption": "Pensil Budi lebih panjang. Selisihnya adalah bagian yang tidak ada pada pensil Siti."}
```

Mengurutkan bisa dari **terpendek ke terpanjang** atau sebaliknya.

### Menggambar garis dengan panjang tertentu

1. Buat titik tepat di angka **0**.
2. Cari angka panjang yang diminta.
3. Buat titik kedua di angka itu.
4. Hubungkan kedua titik dengan garis lurus, memakai tepi penggaris.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Mengukur dari 0

```soal
{
 "title": "Contoh 1",
 "text": "Berapa panjang pensil ini?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Cek ujung awal. Ujung kiri pensil di angka berapa?",
   "answer": "0",
   "hint": "Lihat angka di bawah ujung kiri.",
   "explain": "Ujung kiri tepat di 0. Bagus.",
   "error": "ukur-tidak-dari-nol"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Baca ujung akhir. Ujung kanan pensil di angka berapa?",
   "answer": "6",
   "hint": "Lihat angka di bawah ujung kanan.",
   "explain": "Ujung kanan di angka 6.",
   "error": "salah-baca-penggaris"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tulis panjangnya dengan satuan.",
   "answer": "6",
   "hint": "Mulai di 0, jadi panjangnya sama dengan angka ujung kanan.",
   "explain": "Panjang pensil 6 cm.",
   "error": "lupa-satuan-cm",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung langkah semut dari 0 ke 6. Ada berapa langkah?",
   "answer": "6",
   "hint": "Hitung jarak, bukan garis tanda.",
   "explain": "1, 2, 3, 4, 5, 6. Ada 6 langkah. Benar.",
   "error": "hitung-garis-tanda"
  }
 ],
 "conclusion": "Jadi panjang pensil 6 cm.",
 "visual": {
  "type": "ruler",
  "start": 0,
  "end": 6,
  "item": "pensil"
 }
}
```

### Contoh 2: Tidak mulai dari 0

```soal
{
 "title": "Contoh 2",
 "text": "Berapa panjang krayon ini?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Cek ujung awal. Ujung kiri krayon di angka berapa?",
   "answer": "2",
   "hint": "Lihat angka di bawah ujung kiri.",
   "explain": "Ujung kiri di angka 2, bukan 0.",
   "error": "ukur-tidak-dari-nol"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Cek ujung akhir. Ujung kanan di angka berapa?",
   "answer": "7",
   "hint": "Lihat angka di bawah ujung kanan.",
   "explain": "Ujung kanan di angka 7.",
   "error": "salah-baca-penggaris"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung langkah semut dari 2 ke 7.",
   "answer": "5",
   "hint": "3, 4, 5, 6, 7. Hitung langkahnya.",
   "explain": "Ada 5 langkah, jadi 5 cm.",
   "error": "baca-ujung-saja",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 7 − 2 = ?",
   "answer": "5",
   "hint": "Kurangkan angka ujung dengan angka awal.",
   "explain": "7 − 2 = 5. Sama dengan hitungan langkah.",
   "error": "baca-ujung-saja"
  }
 ],
 "conclusion": "Jadi panjang krayon 5 cm, bukan 7 cm.",
 "visual": {
  "type": "ruler",
  "start": 2,
  "end": 7,
  "item": "pensil"
 }
}
```

### Contoh 3: Membandingkan dan mengurutkan

```soal
{
 "title": "Contoh 3",
 "text": "Pita merah 9 cm. Pita biru 12 cm. Pita kuning 7 cm. Mana yang terpanjang dan terpendek? Urutkan dari yang terpendek.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pita mana yang terpanjang?",
   "options": [
    "merah",
    "biru",
    "kuning"
   ],
   "answer": "biru",
   "hint": "Cari angka terbesar: 9, 12, 7.",
   "explain": "12 paling besar, jadi pita biru terpanjang.",
   "error": "salah-bandingkan-panjang"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Pita mana yang terpendek?",
   "options": [
    "merah",
    "biru",
    "kuning"
   ],
   "answer": "kuning",
   "hint": "Cari angka terkecil.",
   "explain": "7 paling kecil, jadi pita kuning terpendek.",
   "error": "salah-bandingkan-panjang"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Urutkan dari yang terpendek.",
   "options": [
    "kuning, merah, biru",
    "biru, merah, kuning",
    "merah, kuning, biru"
   ],
   "answer": "kuning, merah, biru",
   "hint": "Urutkan angkanya: 7, 9, 12.",
   "explain": "7, 9, 12: kuning, merah, biru.",
   "error": "salah-bandingkan-panjang"
  }
 ],
 "conclusion": "Jadi terpanjang biru, terpendek kuning. Urutannya kuning, merah, biru.",
 "visual": {
  "type": "barChart",
  "scaleStep": 2,
  "max": 12,
  "unit": "cm",
  "bars": [
   {
    "label": "merah",
    "value": 9
   },
   {
    "label": "biru",
    "value": 12
   },
   {
    "label": "kuning",
    "value": 7
   }
  ]
 }
}
```

### Contoh 4: Menggambar garis 8 cm

```soal
{
 "title": "Contoh 4",
 "text": "Gambarlah garis sepanjang 8 cm.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Titik awal dibuat di angka berapa?",
   "answer": "0",
   "hint": "Semut selalu mulai dari ...",
   "explain": "Titik pertama tepat di angka 0.",
   "error": "ukur-tidak-dari-nol"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Titik akhir dibuat di angka berapa?",
   "answer": "8",
   "hint": "Cari angka panjang yang diminta.",
   "explain": "Titik kedua di angka 8.",
   "error": "salah-baca-penggaris"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Bagaimana menghubungkan kedua titik?",
   "options": [
    "Garis lurus menempel tepi penggaris",
    "Garis bebas tanpa penggaris"
   ],
   "answer": "Garis lurus menempel tepi penggaris",
   "hint": "Garis harus lurus.",
   "explain": "Tarik garis lurus memakai tepi penggaris.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: ukur garismu. Ada berapa langkah semut dari 0 ke 8?",
   "answer": "8",
   "hint": "Hitung langkah, bukan tanda.",
   "explain": "Ada 8 langkah, jadi 8 cm. Benar.",
   "error": "hitung-garis-tanda",
   "suffix": "cm"
  }
 ],
 "conclusion": "Jadi garisnya dari angka 0 sampai angka 8 pada penggaris.",
 "visual": {
  "type": "ruler",
  "start": 0,
  "end": 8,
  "item": "pensil"
 }
}
```

### Contoh 5: Soal cerita

```soal
{
 "title": "Contoh 5",
 "text": "Pensil Budi panjangnya 14 cm. Pensil Siti panjangnya 9 cm. Pensil siapa yang lebih panjang? Berapa cm lebih panjang?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pensil siapa yang lebih panjang?",
   "options": [
    "Budi",
    "Siti"
   ],
   "answer": "Budi",
   "hint": "Bandingkan 14 dan 9.",
   "explain": "14 lebih besar dari 9, jadi pensil Budi lebih panjang.",
   "error": "salah-bandingkan-panjang"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Untuk mencari selisihnya, hitung ...",
   "options": [
    "14 − 9",
    "14 + 9",
    "9 − 14"
   ],
   "answer": "14 − 9",
   "hint": "Panjang yang besar dikurangi yang kecil.",
   "explain": "Selisih dicari dengan 14 − 9.",
   "error": "salah-pilih-tambah-kurang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung. 14 − 4 = 10, lalu 10 − 5 = ?",
   "answer": "5",
   "hint": "9 = 4 + 5.",
   "explain": "14 − 9 = 5.",
   "error": "salah-fakta-kurang",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 9 + 5 = ?",
   "answer": "14",
   "hint": "Pensil Siti ditambah selisihnya.",
   "explain": "9 + 5 = 14. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "cm"
  }
 ],
 "conclusion": "Jadi pensil Budi lebih panjang 5 cm.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Budi",
    "units": 14
   },
   {
    "label": "Siti",
    "units": 9
   }
  ],
  "total": "14 cm",
  "question": "?"
 }
}
```

## Kesalahan yang sering terjadi

- **Mulai dari angka 1 atau dari tepi penggaris.** Kalau ujung benda di angka 1, hasilnya kelebihan 1 cm. Ujung benda harus di angka **0**.
- **Membaca angka ujung saja.** Pada contoh 2, menjawab 7 cm. Krayon mulai di angka 2, jadi hitung langkah dari 2 ke 7: 5 cm.
- **Menghitung garis kecil, bukan jaraknya.** Menghitung garis tanda dari 0 sampai 6 menghasilkan 7 tanda. Yang dihitung adalah **langkah** di antara tanda: 6 langkah.
- **Lupa menulis cm.** Menjawab "6" saja. Tulis selalu dengan satuan: 6 cm.
- **Benda miring.** Penggaris tidak lurus dengan benda, hasilnya salah. Letakkan penggaris tepat di sepanjang benda.

## Ringkasan

- Satuan panjang untuk benda kecil adalah **sentimeter**, disingkat **cm**.
- Jarak antara dua angka di penggaris = 1 cm (satu langkah semut).
- Mengukur: ujung benda di **0**, baca angka di ujung lainnya.
- Kalau tidak mulai dari 0, hitung langkahnya atau kurangkan kedua angka.
- Angka lebih besar berarti lebih panjang. Selisih panjang dicari dengan pengurangan.
- Menggambar garis: titik di 0, titik di angka yang diminta, lalu hubungkan.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Berapa panjang pensil kecil ini?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Ujung kiri di angka 0. Ujung kanan di angka berapa?",
   "answer": "4",
   "hint": "Lihat angka di bawah ujung kanan.",
   "explain": "Ujung kanan di angka 4.",
   "error": "salah-baca-penggaris"
  },
  {
   "kind": "number",
   "prompt": "Berapa panjangnya?",
   "answer": "4",
   "hint": "Mulai dari 0.",
   "explain": "Panjangnya 4 cm.",
   "error": "lupa-satuan-cm",
   "suffix": "cm"
  }
 ],
 "conclusion": "Jadi panjangnya 4 cm.",
 "visual": {
  "type": "ruler",
  "start": 0,
  "end": 4,
  "item": "pensil"
 }
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Berapa panjang krayon ini?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Ujung kiri di angka berapa?",
   "answer": "3",
   "hint": "Krayon tidak mulai dari 0.",
   "explain": "Ujung kiri di angka 3.",
   "error": "ukur-tidak-dari-nol"
  },
  {
   "kind": "number",
   "prompt": "Ujung kanan di angka berapa?",
   "answer": "8",
   "hint": "Lihat ujung kanan.",
   "explain": "Ujung kanan di angka 8.",
   "error": "salah-baca-penggaris"
  },
  {
   "kind": "number",
   "prompt": "Berapa panjangnya? 8 − 3 = ?",
   "answer": "5",
   "hint": "Hitung langkah dari 3 ke 8.",
   "explain": "8 − 3 = 5. Panjangnya 5 cm.",
   "error": "baca-ujung-saja",
   "suffix": "cm"
  }
 ],
 "conclusion": "Jadi panjangnya 5 cm.",
 "visual": {
  "type": "ruler",
  "start": 3,
  "end": 8,
  "item": "pensil"
 }
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Urutkan dari yang terpendek: 12 cm, 8 cm, 21 cm.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Panjang mana yang terpendek?",
   "answer": "8",
   "hint": "Cari angka terkecil.",
   "explain": "8 cm paling pendek.",
   "error": "salah-bandingkan-panjang",
   "suffix": "cm"
  },
  {
   "kind": "choice",
   "prompt": "Urutan dari yang terpendek adalah ...",
   "options": [
    "8 cm, 12 cm, 21 cm",
    "12 cm, 8 cm, 21 cm",
    "21 cm, 12 cm, 8 cm"
   ],
   "answer": "8 cm, 12 cm, 21 cm",
   "hint": "Mulai dari yang terkecil.",
   "explain": "8 terkecil, lalu 12, lalu 21.",
   "error": "salah-bandingkan-panjang"
  }
 ],
 "conclusion": "Jadi urutannya 8 cm, 12 cm, 21 cm."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Pita Ani 20 cm. Pita Rina 13 cm. Berapa cm pita Ani lebih panjang?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Hitungan apa yang dipakai?",
   "options": [
    "20 − 13",
    "20 + 13"
   ],
   "answer": "20 − 13",
   "hint": "Mencari selisih.",
   "explain": "Selisih dicari dengan pengurangan.",
   "error": "salah-pilih-tambah-kurang"
  },
  {
   "kind": "number",
   "prompt": "20 − 13 = ?",
   "answer": "7",
   "hint": "20 − 10 = 10, lalu kurangi 3 lagi.",
   "explain": "20 − 13 = 7.",
   "error": "salah-fakta-kurang",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Cek: 13 + 7 = ?",
   "answer": "20",
   "hint": "Pita Rina ditambah selisihnya.",
   "explain": "13 + 7 = 20. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "cm"
  }
 ],
 "conclusion": "Jadi pita Ani lebih panjang 7 cm."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Made ingin menggambar garis 10 cm. Ia membuat titik pertama di angka 0. Di angka berapa ia harus membuat titik kedua?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Di angka berapa titik kedua dibuat?",
   "answer": "10",
   "hint": "Dari 0, melangkah sebanyak panjang yang diminta.",
   "explain": "Dari 0 sampai 10 ada 10 langkah, yaitu 10 cm.",
   "error": "ukur-tidak-dari-nol"
  },
  {
   "kind": "choice",
   "prompt": "Lalu apa yang dilakukan?",
   "options": [
    "Hubungkan kedua titik dengan garis lurus",
    "Buat titik ketiga di angka 11"
   ],
   "answer": "Hubungkan kedua titik dengan garis lurus",
   "hint": "Garis menghubungkan dua titik.",
   "explain": "Tarik garis lurus dari 0 ke 10.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi titik kedua dibuat di angka 10.",
 "visual": {
  "type": "ruler",
  "start": 0,
  "end": 10,
  "item": "pensil"
 }
}
```
