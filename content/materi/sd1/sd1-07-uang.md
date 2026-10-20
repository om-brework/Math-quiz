---
id: sd1-07-uang
judul: Mengenal Uang
jenjang: sd1
moe: "Primary 1 · Number and Algebra · Money"
prasyarat: [sd1-01-bilangan-sampai-100, sd1-03-konsep-tambah-kurang]
durasi_menit: 30
---

## Kenapa belajar ini?

Kamu membawa uang jajan ke sekolah. Cukupkah untuk membeli roti di kantin? Mana yang lebih murah, pensil atau penghapus? Mengenal uang membantumu menghitung uang dan memilih barang dengan bijak.

## Analogi

Bayangkan menghitung uang seperti **katak yang melompat** di atas batu-batu.

Setiap lembar atau koin adalah **satu lompatan**. Uang yang besar membuat lompatan besar. Uang yang kecil membuat lompatan kecil.

Supaya mudah, katak selalu melompat **yang besar dulu**, baru yang kecil. Di mana katak berhenti, itulah jumlah uangnya.

```visual
{"type": "money", "items": [20000, 10000, 5000, 2000, 2000], "caption": "Uang di dompet Siti"}
```

```anim
{"type": "garis", "from": 0, "to": 40, "start": 0, "jumps": [20, 10, 5, 2, 2], "title": "Katak melompat (dalam ribu): 20, 30, 35, 37, 39", "step": 5}
```

## Konsep

### Mengenal uang Rupiah

Uang Indonesia disebut **Rupiah**, ditulis **Rp**.

**Uang koin** (logam):

```visual
{"type": "money", "items": [100, 200, 500, 1000], "caption": "Koin Rp100, Rp200, Rp500, dan Rp1.000"}
```

**Uang kertas:**

```visual
{"type": "money", "items": [1000, 2000, 5000, 10000, 20000, 50000, 100000], "caption": "Uang kertas Rp1.000 sampai Rp100.000"}
```

Rp1.000 ada dalam bentuk koin dan kertas. Nilainya sama.

Cara membaca:

- Rp500 dibaca **lima ratus rupiah**.
- Rp5.000 dibaca **lima ribu rupiah**.
- Rp50.000 dibaca **lima puluh ribu rupiah**.
- Rp100.000 dibaca **seratus ribu rupiah**.

Titik pada Rp5.000 memisahkan ribuan. Tanpa titik, angka besar sulit dibaca.

### Menghitung uang kertas dengan "ribu"

Uang kertas semuanya bernilai **ribuan**. Jadi kita bisa menghitung dengan kata "ribu" saja, seperti menghitung bilangan biasa.

Rp20.000 + Rp5.000 dipikirkan sebagai 20 ribu + 5 ribu = **25 ribu**, yaitu Rp25.000.

Dengan cara ini, bilangannya tetap sampai 100, seperti yang sudah kamu kenal.

### Menghitung uang koin

Uang koin Rp100, Rp200, dan Rp500 dihitung dengan "ratus".

Rp500 + Rp200 dipikirkan sebagai 5 ratus + 2 ratus = **7 ratus**, yaitu Rp700.

```visual
{"type": "money", "items": [500, 200], "caption": "5 ratus + 2 ratus = 7 ratus, yaitu Rp700"}
```

Hitung uang koin bersama koin, dan uang kertas bersama uang kertas.

### Membandingkan harga

Untuk tahu barang mana yang lebih mahal, bandingkan harganya seperti membandingkan bilangan.

- Harga **lebih besar** berarti **lebih mahal**.
- Harga **lebih kecil** berarti **lebih murah**.

Untuk tahu apakah uangmu cukup, bandingkan uangmu dengan harga barang. Kalau uangmu **sama dengan atau lebih dari** harga, uangmu cukup.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menghitung koin

```soal
{
 "title": "Contoh 1",
 "text": "Dodi punya koin Rp200, Rp500, Rp100, dan Rp200. Berapa jumlah uangnya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Koin mana yang dihitung lebih dulu?",
   "options": [
    "Rp500",
    "Rp200",
    "Rp100"
   ],
   "answer": "Rp500",
   "hint": "Mulai dari yang terbesar.",
   "explain": "Urutannya Rp500, Rp200, Rp200, Rp100.",
   "error": "salah-urut-lompat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Lompat. 500, lalu tambah 200 menjadi?",
   "answer": "700",
   "hint": "5 ratus + 2 ratus.",
   "explain": "500 + 200 = 700.",
   "error": "salah-fakta-tambah",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Tambah 200 lagi menjadi?",
   "answer": "900",
   "hint": "7 ratus + 2 ratus.",
   "explain": "700 + 200 = 900.",
   "error": "salah-fakta-tambah",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tambah 100. Jumlahnya?",
   "answer": "1.000",
   "hint": "9 ratus + 1 ratus = 10 ratus.",
   "explain": "900 + 100 = 1.000. Jumlahnya Rp1.000.",
   "error": "campur-ratus-ribu",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: dalam ratus, 2 + 5 + 1 + 2 = ?",
   "answer": "10",
   "hint": "Jumlahkan angka ratusannya.",
   "explain": "10 ratus = seribu. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "ratus"
  }
 ],
 "conclusion": "Jadi uang Dodi Rp1.000.",
 "visual": {
  "type": "money",
  "items": [
   200,
   500,
   100,
   200
  ]
 }
}
```

### Contoh 2: Menghitung uang kertas

```soal
{
 "title": "Contoh 2",
 "text": "Di dompet Siti ada uang kertas Rp2.000, Rp10.000, Rp20.000, Rp2.000, dan Rp5.000. Berapa jumlahnya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Urutkan dari yang terbesar.",
   "options": [
    "20, 10, 5, 2, 2 (ribu)",
    "2, 10, 20, 2, 5 (ribu)",
    "2, 2, 5, 10, 20 (ribu)"
   ],
   "answer": "20, 10, 5, 2, 2 (ribu)",
   "hint": "Lompatan besar dulu.",
   "explain": "Rp20.000, Rp10.000, Rp5.000, Rp2.000, Rp2.000.",
   "error": "salah-urut-lompat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Lompat. 20, lalu 30, lalu 35, ... Katak berhenti di berapa ribu?",
   "answer": "39",
   "hint": "35 + 2 + 2.",
   "explain": "20, 30, 35, 37, 39 ribu.",
   "error": "salah-fakta-tambah",
   "suffix": "ribu"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tulis dalam Rupiah.",
   "answer": "39.000",
   "hint": "39 ribu ditulis dengan tiga angka 0.",
   "explain": "39 ribu = Rp39.000.",
   "error": "lupa-ribu",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: urutan lain. 2 + 2 + 5 + 10 + 20 = ?",
   "answer": "39",
   "hint": "4, lalu 9, lalu 19, ...",
   "explain": "4, 9, 19, 39. Sama.",
   "error": "salah-fakta-tambah",
   "suffix": "ribu"
  }
 ],
 "conclusion": "Jadi jumlahnya Rp39.000.",
 "visual": {
  "type": "money",
  "items": [
   2000,
   10000,
   20000,
   2000,
   5000
  ]
 }
}
```

### Contoh 3: Menyusun Rp100.000

```soal
{
 "title": "Contoh 3",
 "text": "Made punya uang kertas Rp50.000, Rp20.000, Rp20.000, dan Rp10.000. Apakah uangnya sama dengan selembar Rp100.000?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Lompat dari yang terbesar (ribu): 50, lalu 70, lalu?",
   "answer": "90",
   "hint": "70 + 20.",
   "explain": "70 + 20 = 90.",
   "error": "salah-fakta-tambah",
   "suffix": "ribu"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Tambah 10. Jumlahnya berapa ribu?",
   "answer": "100",
   "hint": "90 + 10.",
   "explain": "90 + 10 = 100 ribu.",
   "error": "salah-fakta-tambah",
   "suffix": "ribu"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Bandingkan. Apakah sama dengan Rp100.000?",
   "options": [
    "Ya, sama",
    "Tidak, lebih sedikit",
    "Tidak, lebih banyak"
   ],
   "answer": "Ya, sama",
   "hint": "100 ribu = Rp100.000.",
   "explain": "100 ribu sama dengan Rp100.000.",
   "error": "hitung-lembar-bukan-nilai"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban dengan pasangan: (50 + 10) + (20 + 20) = 60 + 40 = ?",
   "answer": "100",
   "hint": "60 + 40.",
   "explain": "60 + 40 = 100. Sama.",
   "error": "salah-fakta-tambah",
   "suffix": "ribu"
  }
 ],
 "conclusion": "Jadi uang Made sama dengan Rp100.000.",
 "visual": {
  "type": "money",
  "items": [
   50000,
   20000,
   20000,
   10000
  ]
 }
}
```

### Contoh 4: Membandingkan harga

```soal
{
 "title": "Contoh 4",
 "text": "Di toko buku: buku tulis Rp8.000, pensil Rp3.000, penghapus Rp2.000. Mana yang paling mahal dan paling murah? Urutkan dari yang termurah.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Barang mana yang paling mahal?",
   "options": [
    "buku tulis",
    "pensil",
    "penghapus"
   ],
   "answer": "buku tulis",
   "hint": "Dalam ribu: 8, 3, 2. Cari yang terbesar.",
   "explain": "8 ribu paling besar, jadi buku tulis paling mahal.",
   "error": "salah-bandingkan-harga"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Barang mana yang paling murah?",
   "options": [
    "buku tulis",
    "pensil",
    "penghapus"
   ],
   "answer": "penghapus",
   "hint": "Cari yang terkecil.",
   "explain": "2 ribu paling kecil, jadi penghapus paling murah.",
   "error": "salah-bandingkan-harga"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Urutkan dari yang termurah.",
   "options": [
    "penghapus, pensil, buku tulis",
    "buku tulis, pensil, penghapus",
    "pensil, penghapus, buku tulis"
   ],
   "answer": "penghapus, pensil, buku tulis",
   "hint": "Dalam ribu: 2, 3, 8.",
   "explain": "Penghapus (Rp2.000), pensil (Rp3.000), buku tulis (Rp8.000).",
   "error": "salah-bandingkan-harga"
  }
 ],
 "conclusion": "Jadi buku tulis paling mahal dan penghapus paling murah. Urutannya: penghapus, pensil, buku tulis.",
 "visual": {
  "type": "table",
  "head": [
   "Barang",
   "Harga"
  ],
  "rows": [
   [
    "Buku tulis",
    "Rp8.000"
   ],
   [
    "Pensil",
    "Rp3.000"
   ],
   [
    "Penghapus",
    "Rp2.000"
   ]
  ]
 }
}
```

### Contoh 5: Soal cerita, cukupkah uangnya?

```soal
{
 "title": "Contoh 5",
 "text": "Dewi punya uang kertas Rp10.000, Rp5.000, dan Rp2.000. Ia ingin membeli mainan seharga Rp15.000 atau boneka seharga Rp20.000. Mana yang bisa ia beli?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Hitung uang Dewi. 10, lalu 15, lalu ...?",
   "answer": "17.000",
   "hint": "15 ribu + 2 ribu.",
   "explain": "Uang Dewi 17 ribu, yaitu Rp17.000.",
   "error": "lupa-ribu",
   "prefix": "Rp"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Apakah cukup untuk mainan Rp15.000?",
   "options": [
    "Cukup",
    "Tidak cukup"
   ],
   "answer": "Cukup",
   "hint": "Bandingkan 17 ribu dengan 15 ribu.",
   "explain": "17 ribu lebih dari 15 ribu, jadi cukup.",
   "error": "salah-cukup-uang"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Apakah cukup untuk boneka Rp20.000?",
   "options": [
    "Cukup",
    "Tidak cukup"
   ],
   "answer": "Tidak cukup",
   "hint": "Bandingkan 17 ribu dengan 20 ribu.",
   "explain": "17 ribu kurang dari 20 ribu, jadi tidak cukup.",
   "error": "salah-cukup-uang"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung dari yang kecil. 2 + 5 + 10 = ?",
   "answer": "17",
   "hint": "7, lalu 17.",
   "explain": "2 + 5 = 7, 7 + 10 = 17. Uangnya benar 17 ribu.",
   "error": "salah-fakta-tambah",
   "suffix": "ribu"
  }
 ],
 "conclusion": "Jadi Dewi bisa membeli mainan, tetapi tidak bisa membeli boneka.",
 "visual": {
  "type": "money",
  "items": [
   10000,
   5000,
   2000
  ]
 }
}
```

## Kesalahan yang sering terjadi

- **Menghitung banyak lembar, bukan nilainya.** Mengira 3 lembar uang pasti lebih banyak dari 1 lembar. Padahal 3 lembar Rp2.000 (Rp6.000) lebih sedikit dari 1 lembar Rp10.000. Lihat angka di uangnya.
- **Lupa "ribu".** Menjawab "39" padahal maksudnya Rp39.000. Setelah menghitung dengan "ribu", tulis lagi dalam Rupiah.
- **Mencampur ratus dan ribu.** Menghitung Rp500 + Rp5.000 sebagai 10 ribu. Rp500 adalah lima **ratus**, bukan lima ribu.
- **Salah memilih yang lebih mahal.** Mengira Rp9.000 lebih mahal dari Rp12.000 karena 9 lebih besar dari 1. Bandingkan bilangan utuhnya: 12 ribu lebih besar dari 9 ribu.

## Ringkasan

- Koin: Rp100, Rp200, Rp500, Rp1.000. Kertas: Rp1.000 sampai Rp100.000.
- Hitung uang dengan melompat dari nilai **terbesar** ke terkecil.
- Uang kertas mudah dihitung dengan kata "ribu"; koin dengan kata "ratus".
- Harga lebih besar berarti lebih mahal.
- Uang cukup kalau sama dengan atau lebih dari harga barang.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Berapa jumlah koin Rp500, Rp100, Rp100, dan Rp100?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Mulai dari Rp500. Lompat 100 tiga kali: 600, 700, ...?",
   "answer": "800",
   "hint": "Satu lompatan 100 lagi.",
   "explain": "500, 600, 700, 800.",
   "error": "salah-fakta-tambah",
   "prefix": "Rp"
  },
  {
   "kind": "choice",
   "prompt": "Jumlahnya ditulis ...",
   "options": [
    "Rp800",
    "Rp8.000",
    "Rp80"
   ],
   "answer": "Rp800",
   "hint": "Koin ini dihitung dengan ratus.",
   "explain": "8 ratus = Rp800.",
   "error": "campur-ratus-ribu"
  }
 ],
 "conclusion": "Jadi jumlahnya Rp800.",
 "visual": {
  "type": "money",
  "items": [
   500,
   100,
   100,
   100
  ]
 }
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Berapa jumlah uang kertas Rp50.000, Rp20.000, Rp5.000, dan Rp1.000?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Lompat dalam ribu: 50, 70, 75, ...?",
   "answer": "76",
   "hint": "75 + 1.",
   "explain": "50, 70, 75, 76 ribu.",
   "error": "salah-fakta-tambah",
   "suffix": "ribu"
  },
  {
   "kind": "number",
   "prompt": "Tulis dalam Rupiah.",
   "answer": "76.000",
   "hint": "76 ribu.",
   "explain": "76 ribu = Rp76.000.",
   "error": "lupa-ribu",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Jadi jumlahnya Rp76.000.",
 "visual": {
  "type": "money",
  "items": [
   50000,
   20000,
   5000,
   1000
  ]
 }
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Mana yang lebih mahal, Rp45.000 atau Rp54.000?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Dalam ribu, bandingkan puluhannya: 45 dan 54. Mana yang lebih besar?",
   "options": [
    "54",
    "45"
   ],
   "answer": "54",
   "hint": "Puluhan 5 dan 4.",
   "explain": "Puluhan 5 lebih besar dari 4, jadi 54 lebih besar.",
   "error": "bandingkan-satuan-dulu"
  },
  {
   "kind": "choice",
   "prompt": "Yang lebih mahal adalah ...",
   "options": [
    "Rp54.000",
    "Rp45.000"
   ],
   "answer": "Rp54.000",
   "hint": "Harga lebih besar berarti lebih mahal.",
   "explain": "Rp54.000 lebih mahal.",
   "error": "salah-bandingkan-harga"
  }
 ],
 "conclusion": "Jadi Rp54.000 lebih mahal."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Urutkan harga dari yang termurah: Rp12.000, Rp9.000, Rp21.000.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Harga mana yang paling murah?",
   "options": [
    "Rp9.000",
    "Rp12.000",
    "Rp21.000"
   ],
   "answer": "Rp9.000",
   "hint": "Dalam ribu: 12, 9, 21. Bandingkan bilangan utuhnya.",
   "explain": "9 ribu paling kecil.",
   "error": "salah-bandingkan-harga"
  },
  {
   "kind": "choice",
   "prompt": "Urutan dari yang termurah adalah ...",
   "options": [
    "Rp9.000, Rp12.000, Rp21.000",
    "Rp12.000, Rp9.000, Rp21.000",
    "Rp21.000, Rp12.000, Rp9.000"
   ],
   "answer": "Rp9.000, Rp12.000, Rp21.000",
   "hint": "Dalam ribu: 9, 12, 21.",
   "explain": "9 ribu, 12 ribu, 21 ribu.",
   "error": "salah-bandingkan-harga"
  }
 ],
 "conclusion": "Jadi urutannya Rp9.000, Rp12.000, Rp21.000."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Putu punya 3 lembar Rp10.000 dan 1 lembar Rp5.000. Harga sepatu Rp40.000. Apakah uang Putu cukup?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Hitung uang Putu dalam ribu: 10 + 10 + 10 + 5 = ?",
   "answer": "35",
   "hint": "Hitung loncat 10 tiga kali, lalu tambah 5.",
   "explain": "10, 20, 30, 35 ribu.",
   "error": "hitung-lembar-bukan-nilai",
   "suffix": "ribu"
  },
  {
   "kind": "choice",
   "prompt": "Apakah uang Putu cukup untuk sepatu Rp40.000?",
   "options": [
    "Cukup",
    "Tidak cukup"
   ],
   "answer": "Tidak cukup",
   "hint": "Bandingkan 35 ribu dengan 40 ribu.",
   "explain": "35 ribu kurang dari 40 ribu.",
   "error": "salah-cukup-uang"
  }
 ],
 "conclusion": "Jadi uang Putu (Rp35.000) tidak cukup untuk membeli sepatu.",
 "visual": {
  "type": "money",
  "items": [
   10000,
   10000,
   10000,
   5000
  ]
 }
}
```
