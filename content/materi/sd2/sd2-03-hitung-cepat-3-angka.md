---
id: sd2-03-hitung-cepat-3-angka
judul: Hitung Cepat Bilangan 3 Angka
jenjang: sd2
moe: "Primary 2 · Number and Algebra · Addition and Subtraction (Mental Calculation)"
prasyarat: [sd1-05-hitung-cepat, sd2-01-bilangan-sampai-1000]
durasi_menit: 25
---

## Kenapa belajar ini?

Kadang kamu tidak punya kertas. Misalnya, ada 486 buku, lalu datang 200 buku lagi. Kamu bisa langsung tahu jawabannya di kepala. Hitung cepat membuatmu lebih cepat dan lebih yakin.

## Analogi

Bayangkan sebuah **lemari dengan tiga laci**:

- Laci kiri berisi **ratusan**.
- Laci tengah berisi **puluhan**.
- Laci kanan berisi **satuan**.

Bilangan 523 artinya laci kiri berisi 5, laci tengah 2, laci kanan 3.

```visual
{"type": "table", "head": ["Laci ratusan", "Laci puluhan", "Laci satuan"], "rows": [["5", "2", "3"]], "caption": "523 di dalam lemari tiga laci"}
```

Kalau kamu menambah puluhan, **buka laci puluhan saja**. Laci lain tidak disentuh.

```visual
{"type": "base10", "hundreds": 5, "tens": 2, "ones": 3, "caption": "523: tambah 40 berarti menambah 4 batang puluhan saja"}
```

Satu laci hanya muat 9. Kalau isinya menjadi 10, kesepuluh barang itu ditukar menjadi 1 barang di laci sebelah kiri.

## Konsep

### Menambah atau mengurang satuan

Hanya laci satuan yang berubah, selama tidak lewat 10.

- 432 + 5 = 437
- 438 − 6 = 432

### Menambah atau mengurang puluhan

Hanya laci puluhan yang berubah.

- 432 + 40 = 472 (puluhan 3 + 4 = 7)
- 476 − 30 = 446 (puluhan 7 − 3 = 4)

```anim
{"type": "garis", "from": 430, "to": 480, "start": 432, "jumps": [10, 10, 10, 10], "step": 10, "title": "432 + 40: loncat 10 empat kali"}
```

### Menambah atau mengurang ratusan

Hanya laci ratusan yang berubah.

- 432 + 300 = 732
- 865 − 400 = 465

### Kalau laci penuh atau kosong: lewat puluhan atau ratusan bulat

Pecah bilangan yang ditambahkan. Pertama, isi sampai laci tepat bulat. Lalu tambahkan sisanya.

- 248 + 6: tambah 2 dulu menjadi 250. Sisa 4, jadi 254.

```anim
{"type": "garis", "from": 245, "to": 256, "start": 248, "jumps": [2, 4], "title": "248 + 6 = 248 + 2 + 4"}
```

- 253 − 7: kurangi 3 dulu menjadi 250. Sisa 4, jadi 246.

```anim
{"type": "garis", "from": 244, "to": 255, "start": 253, "jumps": [-3, -4], "title": "253 − 7 = 253 − 3 − 4"}
```

- 380 + 50: tambah 20 dulu menjadi 400. Sisa 30, jadi 430.

```anim
{"type": "garis", "from": 370, "to": 440, "start": 380, "jumps": [20, 30], "step": 10, "title": "380 + 50 = 380 + 20 + 30"}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Satuan, puluhan, ratusan

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung 523 + 4, 523 + 40, dan 523 + 400.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Kenali isi laci. Berapa isi laci puluhan pada 523?",
   "answer": "2",
   "hint": "Laci tengah.",
   "explain": "523: ratusan 5, puluhan 2, satuan 3.",
   "error": "tertukar-puluhan-satuan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Tambah 4 ke laci satuan. 523 + 4 = ?",
   "answer": "527",
   "hint": "Satuan 3 + 4. Laci lain tetap.",
   "explain": "3 + 4 = 7, jadi 527.",
   "error": "lupa-tukar-laci"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tambah 4 puluhan. 523 + 40 = ?",
   "answer": "563",
   "hint": "Hanya laci puluhan yang berubah: 2 + 4.",
   "explain": "Puluhan menjadi 6, jadi 563.",
   "error": "lupa-tukar-laci"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Tambah 4 ratusan. 523 + 400 = ?",
   "answer": "923",
   "hint": "Hanya laci ratusan: 5 + 4.",
   "explain": "Ratusan menjadi 9, jadi 923.",
   "error": "lupa-tukar-laci"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 923 − 400 = ?",
   "answer": "523",
   "hint": "Kurangkan balik dari laci ratusan.",
   "explain": "923 − 400 = 523. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 523 + 4 = 527, 523 + 40 = 563, dan 523 + 400 = 923.",
 "visual": {
  "type": "base10",
  "hundreds": 5,
  "tens": 2,
  "ones": 3
 }
}
```

### Contoh 2: Melewati puluhan

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung $247 + 8$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Laci satuan berisi 7, ditambah 8. Apa yang terjadi?",
   "options": [
    "Laci penuh, lewat 10",
    "Masih muat di laci satuan"
   ],
   "answer": "Laci penuh, lewat 10",
   "hint": "Apakah 7 + 8 lebih dari 9?",
   "explain": "7 + 8 lebih dari 9, jadi laci akan penuh.",
   "error": "lupa-tukar-sepuluh-puluhan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 7 perlu berapa lagi untuk menjadi 10?",
   "answer": "3",
   "hint": "Pasangan sepuluh dari 7.",
   "explain": "7 + 3 = 10. Pecah 8 menjadi 3 dan 5.",
   "error": "salah-pasangan-sepuluh"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tambah 3 dulu. 247 + 3 = ?",
   "answer": "250",
   "hint": "Satuan menjadi 10, ditukar menjadi 1 puluhan.",
   "explain": "247 + 3 = 250.",
   "error": "lupa-tukar-sepuluh-puluhan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Tambah sisanya. 250 + 5 = ?",
   "answer": "255",
   "hint": "Sisa dari 8 setelah dipakai 3.",
   "explain": "250 + 5 = 255.",
   "error": "lupa-sisa-ambil"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 255 − 8 = ?",
   "answer": "247",
   "hint": "Kurangi 5 menjadi 250, lalu kurangi 3.",
   "explain": "255 − 8 = 247. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 247 + 8 = 255.",
 "visual": {
  "type": "numberLine",
  "from": 245,
  "to": 256,
  "jumps": [
   {
    "from": 247,
    "to": 250,
    "label": "+3"
   },
   {
    "from": 250,
    "to": 255,
    "label": "+5"
   }
  ],
  "hide": [
   250,
   255
  ]
 }
}
```

### Contoh 3: Mengurang melewati ratusan

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung $734 - 60$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Laci puluhan berisi 3. Kita ambil 6 puluhan. Cukup?",
   "options": [
    "Tidak cukup",
    "Cukup"
   ],
   "answer": "Tidak cukup",
   "hint": "Bandingkan 3 dan 6.",
   "explain": "3 puluhan kurang dari 6 puluhan.",
   "error": "salah-lewat-ratusan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Ambil yang ada dulu. 734 − 30 = ?",
   "answer": "704",
   "hint": "Kosongkan laci puluhan.",
   "explain": "734 − 30 = 704. Masih harus mengambil 30 lagi.",
   "error": "salah-lewat-ratusan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Ambil sisanya. 704 − 30 = ?",
   "answer": "674",
   "hint": "Tukar 1 ratusan menjadi 10 puluhan, lalu ambil 3.",
   "explain": "704 − 30 = 674.",
   "error": "salah-lewat-ratusan"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 674 + 60 = ?",
   "answer": "734",
   "hint": "Tambah 30 menjadi 704, tambah 30 lagi.",
   "explain": "674 + 60 = 734. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 734 − 60 = 674.",
 "visual": {
  "type": "numberLine",
  "from": 670,
  "to": 740,
  "step": 10,
  "jumps": [
   {
    "from": 734,
    "to": 704,
    "label": "−30"
   },
   {
    "from": 704,
    "to": 674,
    "label": "−30"
   }
  ],
  "marks": [
   734,
   704,
   674
  ],
  "hide": [
   704,
   674
  ]
 }
}
```

### Contoh 4: Soal cerita

```soal
{
 "title": "Kerjakan bersama",
 "text": "Perpustakaan sekolah punya 486 buku cerita. Sekolah membeli 200 buku lagi. Lalu 9 buku rusak dan dibuang. Berapa buku cerita sekarang?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Hitungan apa saja?",
   "options": [
    "Tambah 200, lalu kurang 9",
    "Tambah 200 dan tambah 9",
    "Kurang 200, lalu tambah 9"
   ],
   "answer": "Tambah 200, lalu kurang 9",
   "hint": "Membeli berarti bertambah, dibuang berarti berkurang.",
   "explain": "Ada dua hitungan: tambah 200, lalu kurang 9.",
   "error": "salah-pilih-tambah-kurang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Tambah ratusan. 486 + 200 = ?",
   "answer": "686",
   "hint": "Buka laci ratusan saja: 4 + 2.",
   "explain": "486 + 200 = 686.",
   "error": "lupa-tukar-laci"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Kurangi 6 dulu supaya bulat. 686 − 6 = ?",
   "answer": "680",
   "hint": "Kosongkan laci satuan.",
   "explain": "686 − 6 = 680. Masih harus mengurangi 3 lagi.",
   "error": "salah-pecah-bilangan"
  },
  {
   "kind": "number",
   "prompt": "Lalu kurangi sisanya. 680 − 3 = ?",
   "answer": "677",
   "hint": "9 = 6 + 3.",
   "explain": "680 − 3 = 677.",
   "error": "lupa-sisa-ambil",
   "suffix": "buku"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 677 + 9 = ?",
   "answer": "686",
   "hint": "Tambah balik buku yang dibuang.",
   "explain": "677 + 9 = 686, lalu 686 − 200 = 486. Kembali ke awal, jadi benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Sekarang ada 677 buku cerita."
}
```

## Kesalahan yang sering terjadi

- **Membuka laci yang salah.** 432 + 40 ditulis 436. Angka 4 dimasukkan ke laci satuan. Padahal 40 adalah 4 puluhan. Yang benar 472.
- **Lupa menukar saat laci penuh.** 247 + 8 ditulis 2415, atau 245. Laci satuan tidak boleh berisi 15. Pakai cara isi sampai bulat: 250, lalu 255.
- **Membalik pengurangan satuan.** 253 − 7 dijawab 254, karena menghitung 7 − 3 = 4. Yang benar: 253 − 3 = 250, lalu 250 − 4 = 246.
- **Mengurangi ratusan padahal yang diminta puluhan.** 734 − 60 dijawab 134. Itu sama dengan mengurangi 600. Lihat lagi: 60 adalah 6 puluhan.

## Ringkasan

- Bilangan 3 angka seperti lemari dengan laci ratusan, puluhan, dan satuan.
- Menambah atau mengurang satuan, puluhan, atau ratusan: buka laci yang sesuai saja.
- Kalau laci penuh atau kurang, pecah bilangannya: isi atau kosongkan sampai bulat dulu, lalu lanjutkan sisanya.
- Cek dengan operasi kebalikan: tambah dicek dengan kurang.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung $318 + 60$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Laci mana yang berubah?",
   "options": [
    "Laci puluhan",
    "Laci satuan",
    "Laci ratusan"
   ],
   "answer": "Laci puluhan",
   "hint": "60 adalah 6 puluhan.",
   "explain": "Hanya laci puluhan: 1 + 6 = 7.",
   "error": "lupa-tukar-laci"
  },
  {
   "kind": "number",
   "prompt": "318 + 60 = ?",
   "answer": "378",
   "hint": "Puluhan 1 + 6.",
   "explain": "318 + 60 = 378.",
   "error": "lupa-tukar-laci"
  }
 ],
 "conclusion": "Jadi 318 + 60 = 378."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $476 + 300$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Laci mana yang berubah?",
   "options": [
    "Laci ratusan",
    "Laci puluhan",
    "Laci satuan"
   ],
   "answer": "Laci ratusan",
   "hint": "300 adalah 3 ratusan.",
   "explain": "Hanya laci ratusan: 4 + 3 = 7.",
   "error": "lupa-tukar-laci"
  },
  {
   "kind": "number",
   "prompt": "476 + 300 = ?",
   "answer": "776",
   "hint": "Ratusan 4 + 3.",
   "explain": "476 + 300 = 776.",
   "error": "lupa-tukar-laci"
  }
 ],
 "conclusion": "Jadi 476 + 300 = 776."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung $902 - 5$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Kurangi 2 dulu supaya bulat. 902 − 2 = ?",
   "answer": "900",
   "hint": "Kosongkan laci satuan.",
   "explain": "902 − 2 = 900. Masih harus mengurangi 3.",
   "error": "salah-pecah-bilangan"
  },
  {
   "kind": "number",
   "prompt": "Kurangi sisanya. 900 − 3 = ?",
   "answer": "897",
   "hint": "Tukar 1 ratusan menjadi 9 puluhan dan 10 satuan.",
   "explain": "900 − 3 = 897.",
   "error": "salah-lewat-ratusan"
  }
 ],
 "conclusion": "Jadi 902 − 5 = 897.",
 "visual": {
  "type": "numberLine",
  "from": 895,
  "to": 903,
  "jumps": [
   {
    "from": 902,
    "to": 900,
    "label": "−2"
   },
   {
    "from": 900,
    "to": 897,
    "label": "−3"
   }
  ],
  "hide": [
   900,
   897
  ]
 }
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Hitung $559 + 70$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Isi sampai ratusan bulat dulu. 559 + 40 = ?",
   "answer": "599",
   "hint": "Laci puluhan 5 perlu 4 lagi untuk menjadi 9.",
   "explain": "559 + 40 = 599. Sisa 30 lagi.",
   "error": "salah-pecah-bilangan"
  },
  {
   "kind": "number",
   "prompt": "Tambah sisanya. 599 + 30 = ?",
   "answer": "629",
   "hint": "Puluhan 9 + 3 lewat 10, ratusan bertambah 1.",
   "explain": "599 + 30 = 629.",
   "error": "salah-lewat-ratusan"
  }
 ],
 "conclusion": "Jadi 559 + 70 = 629."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Ada 834 penonton di lapangan. Sebanyak 50 penonton pulang. Berapa penonton yang masih ada?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Hitungan apa yang dipakai?",
   "options": [
    "834 − 50",
    "834 + 50"
   ],
   "answer": "834 − 50",
   "hint": "Pulang berarti berkurang.",
   "explain": "834 − 50.",
   "error": "salah-pilih-tambah-kurang"
  },
  {
   "kind": "number",
   "prompt": "Ambil 30 dulu. 834 − 30 = ?",
   "answer": "804",
   "hint": "Laci puluhan berisi 3.",
   "explain": "834 − 30 = 804. Sisa 20 lagi.",
   "error": "salah-pecah-bilangan"
  },
  {
   "kind": "number",
   "prompt": "Ambil sisanya. 804 − 20 = ?",
   "answer": "784",
   "hint": "Tukar 1 ratusan menjadi 10 puluhan.",
   "explain": "804 − 20 = 784.",
   "error": "salah-lewat-ratusan",
   "suffix": "penonton"
  }
 ],
 "conclusion": "Masih ada 784 penonton."
}
```
