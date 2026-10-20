---
id: sd3-08-uang
judul: Penjumlahan dan Pengurangan Uang
jenjang: sd3
moe: "Primary 3 · Number and Algebra · Money"
prasyarat: [sd2-08-uang, sd3-02-tambah-kurang-bersusun-4-angka]
durasi_menit: 35
---

## Kenapa belajar ini?

Setiap kali jajan di kantin atau belanja di warung, kita menghitung uang. Berapa harga semuanya? Berapa kembaliannya? Apakah uangku cukup? Dengan berhitung uang yang benar, kamu tidak akan rugi saat berbelanja.

## Analogi

Bayangkan kamu menjadi **kasir di warung Bu Made**.

Saat pembeli membawa beberapa barang, kasir **menjumlahkan** semua harganya. Saat pembeli membayar dengan uang yang lebih besar, kasir **mengurangkan** untuk mencari kembalian.

Misalnya pembeli membayar dengan selembar uang ini untuk barang seharga Rp3.700:

```visual
{"type": "money", "items": [5000], "caption": "Uang yang dibayar: Rp5.000"}
```

Kasir yang pintar juga punya cara kedua untuk kembalian: **menghitung naik**. Ia mulai dari harga barang, lalu menambah uang kembalian sedikit demi sedikit sampai sama dengan uang yang dibayar.

```visual
{"type": "money", "items": [1000, 200, 100], "caption": "Kembalian: Rp1.000 + Rp200 + Rp100 = Rp1.300"}
```

Kamu akan memakai kedua cara kasir ini.

## Konsep

### Menulis uang Rupiah

- Uang ditulis dengan "Rp" di depan dan titik pemisah ribuan: Rp7.500.
- Rp7.500 dibaca **tujuh ribu lima ratus rupiah**.
- Saat bersusun, tulis angkanya saja tanpa Rp dan tanpa titik. Tulis lagi Rp pada jawaban akhir.

```visual
{"type": "money", "items": [5000, 2000, 500], "caption": "Rp5.000 + Rp2.000 + Rp500 = Rp7.500"}
```

### Menjumlahkan uang

Menjumlahkan harga sama dengan penjumlahan bersusun biasa. Tulis rata kanan, hitung dari satuan, dan simpan kalau perlu.

```anim
{"type": "susun", "op": "+", "a": 2500, "b": 1800, "title": "Rp2.500 + Rp1.800 bersusun"}
```

### Mengurangkan uang dan kembalian

**Kembalian = uang yang dibayar − harga.**

Cara 1: **Pengurangan bersusun.** Hati-hati meminjam melewati nol, karena uang yang dibayar sering berupa angka bulat seperti Rp5.000 atau Rp10.000.

Cara 2: **Menghitung naik.** Mulai dari harga, loncat ke ratusan bulat, lalu ke ribuan bulat, lalu ke uang yang dibayar. Jumlahkan semua loncatan.

Contoh: harga Rp3.700, dibayar Rp5.000. Lihat loncatan dari harga ke uang yang dibayar:

```visual
{"type": "numberLine", "from": 3700, "to": 5000, "step": 100, "marks": [3700, 4000, 5000], "jumps": [{"from": 3700, "to": 4000, "label": "+300"}, {"from": 4000, "to": 5000, "label": "+1.000"}], "caption": "Menghitung naik dari Rp3.700 ke Rp5.000"}
```

Kembalian = Rp300 + Rp1.000 = Rp1.300.

### Soal cerita dua langkah

Banyak soal belanja perlu dua langkah. Misalnya:

1. Jumlahkan harga semua barang.
2. Kurangkan dari uang yang dibayar untuk mencari kembalian.

```visual
{"type": "barModel", "bars": [{"label": "Uang dibayar", "units": 5}, {"label": "Belanja", "units": 4, "known": "harga semua barang"}], "total": "Rp10.000", "question": "kembalian", "caption": "Uang dibayar = harga belanja + kembalian"}
```

Baca soal dengan teliti. Tanyakan: **apa yang harus dihitung dulu?**

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menjumlahkan harga

```soal
{
 "title": "Contoh 1",
 "text": "Siti membeli pensil seharga Rp2.500 dan penghapus seharga Rp1.800. Berapa harga semuanya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Hitungan apa yang dipakai?",
   "options": [
    "Rp2.500 + Rp1.800",
    "Rp2.500 − Rp1.800"
   ],
   "answer": "Rp2.500 + Rp1.800",
   "hint": "Kata \"harga semuanya\" berarti semua harga digabung.",
   "explain": "Harga semuanya berarti dijumlahkan: Rp2.500 + Rp1.800.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jumlahkan ratusan. 5 + 8 = ?",
   "answer": "13",
   "hint": "Satuan dan puluhan sama-sama 0. Sekarang lihat angka ratusan.",
   "explain": "5 + 8 = 13. Tulis 3 di ratusan, simpan 1 ke ribuan.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Jumlahkan ribuan, jangan lupa simpanan. 2 + 1 + 1 = ?",
   "answer": "4",
   "hint": "Ada angka 1 yang disimpan dari ratusan.",
   "explain": "2 + 1 + 1 = 4. Tulis 4 di ribuan.",
   "error": "lupa-simpan"
  },
  {
   "kind": "column",
   "op": "+",
   "a": 2500,
   "b": 1800,
   "prompt": "Langkah 4: Tulis lengkap dengan bersusun.",
   "hint": "Mulai dari kolom paling kanan, isi kotak simpanan kalau perlu.",
   "explain": "2.500 + 1.800 = 4.300."
  },
  {
   "kind": "number",
   "prompt": "Jadi harga semuanya berapa?",
   "answer": "4.300",
   "hint": "Tulis empat ribu tiga ratus dengan titik ribuan.",
   "explain": "Harga semuanya Rp4.300.",
   "error": "salah-nol-rupiah",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung naik. Rp2.500 + Rp1.500 = ?",
   "answer": "4.000",
   "hint": "Rp2.500 ditambah seribu lima ratus.",
   "explain": "Rp4.000, lalu tambah Rp300 menjadi Rp4.300. Sama.",
   "error": "salah-hitung-naik",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Jadi harga semuanya Rp4.300.",
 "visual": {
  "type": "money",
  "items": [
   2000,
   500,
   1000,
   500,
   200,
   100
  ]
 }
}
```

### Contoh 2: Mencari kembalian

```soal
{
 "title": "Contoh 2",
 "text": "Budi membeli layang-layang seharga Rp6.750. Ia membayar dengan uang Rp10.000. Berapa kembaliannya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Kembalian dihitung dengan cara apa?",
   "options": [
    "Rp10.000 − Rp6.750",
    "Rp6.750 − Rp10.000",
    "Rp10.000 + Rp6.750"
   ],
   "answer": "Rp10.000 − Rp6.750",
   "hint": "Kembalian = uang yang dibayar dikurangi harga.",
   "explain": "Uang dibayar lebih besar, jadi Rp10.000 − Rp6.750.",
   "error": "kembalian-terbalik"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Di puluhan, 0 − 5 tidak bisa. Ratusan dan ribuan juga 0. Dari mana kita meminjam?",
   "options": [
    "Dari puluh ribuan (angka 1)",
    "Dari ratusan",
    "Tidak perlu meminjam"
   ],
   "answer": "Dari puluh ribuan (angka 1)",
   "hint": "Cari angka bukan nol terdekat di sebelah kiri.",
   "explain": "Pinjam dari angka 1 di puluh ribuan. Nol-nol di tengah menjadi 9, puluhan menjadi 10.",
   "error": "salah-pinjam-lewat-nol"
  },
  {
   "kind": "column",
   "op": "-",
   "a": 10000,
   "b": 6750,
   "prompt": "Langkah 3: Kurangkan bersusun.",
   "hint": "Isi kotak pinjaman: 1 menjadi 0, nol di tengah menjadi 9, puluhan menjadi 10.",
   "explain": "10.000 − 6.750 = 3.250."
  },
  {
   "kind": "number",
   "prompt": "Jadi kembaliannya berapa?",
   "answer": "3.250",
   "hint": "Baca hasil pengurangan, tulis dengan titik ribuan.",
   "explain": "Kembalian Budi Rp3.250.",
   "error": "salah-hitung-kembalian",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung naik. Dari Rp6.750 ke Rp7.000 berapa?",
   "answer": "250",
   "hint": "Berapa yang perlu ditambah supaya 750 menjadi 1.000?",
   "explain": "Rp250. Lalu dari Rp7.000 ke Rp10.000 ada Rp3.000. Rp250 + Rp3.000 = Rp3.250. Sama.",
   "error": "salah-hitung-naik",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Jadi kembaliannya Rp3.250.",
 "visual": {
  "type": "money",
  "items": [
   10000
  ]
 }
}
```

### Contoh 3: Soal cerita dua langkah

```soal
{
 "title": "Contoh 3",
 "text": "Di kantin, Putu membeli roti seharga Rp4.500 dan susu seharga Rp3.200. Ia membayar dengan uang Rp10.000. Berapa kembalian Putu?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Apa yang dihitung dulu?",
   "options": [
    "Jumlahkan harga roti dan susu",
    "Langsung Rp10.000 − Rp4.500"
   ],
   "answer": "Jumlahkan harga roti dan susu",
   "hint": "Putu membeli dua barang. Keduanya harus dibayar.",
   "explain": "Pertama cari harga semua belanjaan, baru kembaliannya.",
   "error": "lupa-barang-belanja"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jumlahkan harga. Rp4.500 + Rp3.200 = ?",
   "answer": "7.700",
   "hint": "Ratusan 5 + 2, ribuan 4 + 3.",
   "explain": "Rp4.500 + Rp3.200 = Rp7.700.",
   "error": "salah-fakta-tambah",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung naik. Dari Rp7.700 ke Rp8.000 berapa?",
   "answer": "300",
   "hint": "Berapa yang perlu ditambah supaya 700 menjadi 1.000?",
   "explain": "Rp300.",
   "error": "salah-hitung-naik",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Dari Rp8.000 ke Rp10.000 berapa?",
   "answer": "2.000",
   "hint": "Hitung ribuannya: 8 ke 10.",
   "explain": "Rp2.000.",
   "error": "salah-hitung-naik",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Jumlahkan loncatannya. Kembaliannya berapa?",
   "answer": "2.300",
   "hint": "Rp300 + Rp2.000.",
   "explain": "Kembalian Putu Rp2.300.",
   "error": "salah-hitung-kembalian",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: harga belanja + kembalian. Rp7.700 + Rp2.300 = ?",
   "answer": "10.000",
   "hint": "Hasilnya harus sama dengan uang yang dibayar.",
   "explain": "Rp10.000, sama dengan uang yang dibayar. Benar.",
   "error": "salah-fakta-tambah",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Jadi kembalian Putu Rp2.300.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Roti",
    "units": 3,
    "known": "Rp4.500"
   },
   {
    "label": "Susu",
    "units": 2,
    "known": "Rp3.200"
   }
  ],
  "question": "?"
 }
}
```

### Contoh 4: Apakah uangnya cukup?

```soal
{
 "title": "Contoh 4",
 "text": "Made punya uang Rp6.500. Ia ingin membeli tas seharga Rp9.200. Apakah uangnya cukup? Kalau tidak, berapa kekurangannya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Bandingkan Rp6.500 dan Rp9.200. Apakah uang Made cukup?",
   "options": [
    "Cukup",
    "Tidak cukup"
   ],
   "answer": "Tidak cukup",
   "hint": "Bandingkan angka ribuannya dulu: 6 dan 9.",
   "explain": "6 ribu lebih kecil dari 9 ribu, jadi uangnya tidak cukup.",
   "error": "salah-uang-cukup"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Kekurangan dihitung dengan cara apa?",
   "options": [
    "Rp9.200 − Rp6.500",
    "Rp6.500 − Rp9.200",
    "Rp9.200 + Rp6.500"
   ],
   "answer": "Rp9.200 − Rp6.500",
   "hint": "Kekurangan = harga − uang yang dimiliki.",
   "explain": "Harga lebih besar, jadi Rp9.200 − Rp6.500.",
   "error": "kembalian-terbalik"
  },
  {
   "kind": "column",
   "op": "-",
   "a": 9200,
   "b": 6500,
   "prompt": "Langkah 3: Kurangkan bersusun.",
   "hint": "Di ratusan, 2 − 5 tidak bisa. Pinjam dari ribuan.",
   "explain": "Ratusan menjadi 12, 12 − 5 = 7. Ribuan 8 − 6 = 2. Hasilnya 2.700."
  },
  {
   "kind": "number",
   "prompt": "Jadi kekurangannya berapa?",
   "answer": "2.700",
   "hint": "Baca hasil pengurangan.",
   "explain": "Made kekurangan Rp2.700.",
   "error": "salah-hitung-kembalian",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: Rp6.500 + Rp2.700 = ?",
   "answer": "9.200",
   "hint": "Uang Made ditambah kekurangannya harus sama dengan harga tas.",
   "explain": "Rp9.200, sama dengan harga tas. Benar.",
   "error": "salah-fakta-tambah",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Uang Made tidak cukup. Ia kekurangan Rp2.700.",
 "visual": {
  "type": "money",
  "items": [
   5000,
   1000,
   500
  ]
 }
}
```

## Kesalahan yang sering terjadi

- **Salah menulis nol.** Menulis Rp4.300 sebagai Rp430. Rp430 artinya empat ratus tiga puluh rupiah. Hitung angkanya: empat ribu tiga ratus punya 4 angka.
- **Salah meminjam melewati nol.** Pada Rp10.000 − Rp6.750, menulis Rp4.350 karena nol-nol tidak diubah menjadi 9. Selalu cek dengan menghitung naik.
- **Langsung mengurangi tanpa menjumlah dulu.** Pada contoh 3, menghitung Rp10.000 − Rp4.500 saja dan lupa harga susu. Tandai semua barang yang dibeli sebelum menghitung.
- **Tertukar urutan pengurangan.** Kembalian dihitung "harga − uang dibayar". Yang benar uang dibayar − harga, karena uang yang dibayar selalu lebih besar.

## Ringkasan

- Tulis uang dengan Rp dan titik ribuan: Rp7.500. Saat bersusun, tulis angkanya saja, rata kanan.
- Harga semuanya = jumlahkan semua harga.
- Kembalian = uang dibayar − harga.
- Menghitung naik: dari harga, loncat ke angka bulat, lalu ke uang yang dibayar.
- Cek: harga + kembalian = uang yang dibayar.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung Rp3.450 + Rp2.380.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Jumlahkan puluhan. 5 + 8 = ?",
   "answer": "13",
   "hint": "Satuan 0 + 0 = 0. Sekarang angka puluhan.",
   "explain": "13. Tulis 3, simpan 1 ke ratusan.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "column",
   "op": "+",
   "a": 3450,
   "b": 2380,
   "prompt": "Langkah 2: Kerjakan bersusun.",
   "hint": "Jangan lupa simpanan dari puluhan ke ratusan.",
   "explain": "Ratusan 4 + 3 + 1 = 8, ribuan 3 + 2 = 5. Hasilnya 5.830."
  },
  {
   "kind": "number",
   "prompt": "Jadi Rp3.450 + Rp2.380 = ?",
   "answer": "5.830",
   "hint": "Tulis dengan titik ribuan.",
   "explain": "Rp5.830.",
   "error": "salah-nol-rupiah",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Rp3.450 + Rp2.380 = Rp5.830."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung Rp7.000 − Rp2.650 dengan menghitung naik.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Dari Rp2.650 ke Rp3.000 berapa?",
   "answer": "350",
   "hint": "Berapa yang perlu ditambah supaya 650 menjadi 1.000?",
   "explain": "Rp350.",
   "error": "salah-hitung-naik",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Dari Rp3.000 ke Rp7.000 berapa?",
   "answer": "4.000",
   "hint": "Hitung ribuannya: 3 ke 7.",
   "explain": "Rp4.000.",
   "error": "salah-hitung-naik",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Jumlahkan loncatannya.",
   "answer": "4.350",
   "hint": "Rp350 + Rp4.000.",
   "explain": "Rp7.000 − Rp2.650 = Rp4.350.",
   "error": "salah-hitung-kembalian",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Rp7.000 − Rp2.650 = Rp4.350."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Siti membeli buku seharga Rp3.850 dan membayar dengan Rp5.000. Berapa kembaliannya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Kembalian dihitung dengan cara apa?",
   "options": [
    "Rp5.000 − Rp3.850",
    "Rp3.850 − Rp5.000",
    "Rp5.000 + Rp3.850"
   ],
   "answer": "Rp5.000 − Rp3.850",
   "hint": "Uang dibayar dikurangi harga.",
   "explain": "Rp5.000 − Rp3.850.",
   "error": "kembalian-terbalik"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung naik. Dari Rp3.850 ke Rp4.000 berapa?",
   "answer": "150",
   "hint": "850 perlu tambah berapa supaya menjadi 1.000?",
   "explain": "Rp150.",
   "error": "salah-hitung-naik",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Dari Rp4.000 ke Rp5.000 berapa?",
   "answer": "1.000",
   "hint": "Ribuannya 4 ke 5.",
   "explain": "Rp1.000.",
   "error": "salah-hitung-naik",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Jadi kembaliannya berapa?",
   "answer": "1.150",
   "hint": "Rp150 + Rp1.000.",
   "explain": "Kembalian Siti Rp1.150.",
   "error": "salah-hitung-kembalian",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Kembalian Siti Rp1.150.",
 "visual": {
  "type": "money",
  "items": [
   5000
  ]
 }
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Dimas punya Rp9.000. Ia membeli buku tulis seharga Rp4.750 dan pulpen seharga Rp2.300. Berapa sisa uang Dimas?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Apa yang dihitung dulu?",
   "options": [
    "Jumlahkan harga buku tulis dan pulpen",
    "Langsung Rp9.000 − Rp4.750"
   ],
   "answer": "Jumlahkan harga buku tulis dan pulpen",
   "hint": "Dimas membeli dua barang.",
   "explain": "Cari dulu harga semua belanjaan.",
   "error": "lupa-barang-belanja"
  },
  {
   "kind": "column",
   "op": "+",
   "a": 4750,
   "b": 2300,
   "prompt": "Langkah 2: Jumlahkan harga belanjaan bersusun.",
   "hint": "Di ratusan 7 + 3 = 10, simpan 1 ke ribuan.",
   "explain": "4.750 + 2.300 = 7.050."
  },
  {
   "kind": "column",
   "op": "-",
   "a": 9000,
   "b": 7050,
   "prompt": "Langkah 3: Kurangkan dari uang Dimas.",
   "hint": "Di puluhan 0 − 5 tidak bisa. Pinjam lewat nol dari ribuan.",
   "explain": "9.000 − 7.050 = 1.950."
  },
  {
   "kind": "number",
   "prompt": "Jadi sisa uang Dimas berapa?",
   "answer": "1.950",
   "hint": "Baca hasil pengurangan.",
   "explain": "Sisa uang Dimas Rp1.950.",
   "error": "salah-hitung-kembalian",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Sisa uang Dimas Rp1.950."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Uang Rina Rp6.500. Ibu memberinya Rp2.000 lagi. Lalu Rina membeli jus seharga Rp3.750. Berapa sisa uang Rina?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Uang Rina setelah diberi Ibu berapa?",
   "answer": "8.500",
   "hint": "Diberi berarti bertambah: Rp6.500 + Rp2.000.",
   "explain": "Rp8.500.",
   "error": "salah-pilih-operasi",
   "prefix": "Rp"
  },
  {
   "kind": "column",
   "op": "-",
   "a": 8500,
   "b": 3750,
   "prompt": "Langkah 2: Kurangkan harga jus.",
   "hint": "Di puluhan 0 − 5 tidak bisa, pinjam dari ratusan.",
   "explain": "8.500 − 3.750 = 4.750."
  },
  {
   "kind": "number",
   "prompt": "Jadi sisa uang Rina berapa?",
   "answer": "4.750",
   "hint": "Baca hasil pengurangan.",
   "explain": "Sisa uang Rina Rp4.750.",
   "error": "salah-hitung-kembalian",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Sisa uang Rina Rp4.750."
}
```
