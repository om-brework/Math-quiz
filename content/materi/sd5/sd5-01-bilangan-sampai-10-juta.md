---
id: sd5-01-bilangan-sampai-10-juta
judul: Bilangan sampai 10 Juta
jenjang: sd5
moe: "Primary 5 · Number and Algebra · Whole Numbers"
prasyarat: [sd4-01-bilangan-sampai-100000]
durasi_menit: 30
---

## Kenapa belajar ini?

Harga sepeda motor, gaji orang tua, atau jumlah penduduk sebuah kota sering bernilai jutaan. Kamu perlu bisa membaca dan menulis bilangan sebesar itu dengan benar. Salah satu angka nol saja bisa membuat harga berbeda jauh.

## Analogi

Bayangkan setiap bilangan besar tinggal di sebuah **kompleks perumahan**. Di kompleks itu ada beberapa **rumah**, dan setiap rumah punya **tiga kamar**.

- Rumah paling kanan bernama **Rumah Satuan**. Kamarnya: ratusan, puluhan, satuan.
- Rumah di tengah bernama **Rumah Ribu**. Kamarnya: ratus ribuan, puluh ribuan, ribuan.
- Rumah paling kiri bernama **Rumah Juta**. Kamarnya: ratus jutaan, puluh jutaan, jutaan. Untuk bilangan sampai 10 juta, kita hanya memakai kamar puluh jutaan dan jutaan.

**Titik** pada bilangan adalah **pagar** di antara rumah. Pagar selalu dipasang setiap tiga angka, dihitung dari kanan.

Cara membaca bilangan besar: baca angka di dalam satu rumah, lalu sebut **nama rumahnya**. Kerjakan dari rumah paling kiri.

```visual
{"type": "table", "head": ["", "Rumah Juta", "Rumah Ribu", "Rumah Satuan"], "rows": [["Isi rumah", "4", "705", "320"], ["Dibaca", "empat juta", "tujuh ratus lima ribu", "tiga ratus dua puluh"]], "caption": "4.705.320 dibaca per rumah, dari kiri ke kanan"}
```

## Konsep

### Nilai tempat sampai puluh jutaan

Lihat bilangan 10.000.000 (sepuluh juta). Bilangan ini punya 8 angka.

```visual
{"type": "table", "head": ["PJt", "Jt", "RRb", "PRb", "Rb", "R", "P", "S"], "rows": [["1", "0", "0", "0", "0", "0", "0", "0"]], "caption": "Rumah Juta (PJt, Jt) | Rumah Ribu (RRb, PRb, Rb) | Rumah Satuan (R, P, S)"}
```

Keterangan: PJt = puluh jutaan, Jt = jutaan, RRb = ratus ribuan, PRb = puluh ribuan, Rb = ribuan, R = ratusan, P = puluhan, S = satuan.

Setiap kamar nilainya **10 kali** kamar di kanannya:

- 10 ratus ribu = 1 juta, atau $10 \times 100.000 = 1.000.000$

```visual
{"type": "money", "items": [100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000], "caption": "10 lembar Rp100.000 = Rp1.000.000"}
```

- 10 juta = $10 \times 1.000.000 = 10.000.000$

### Angka dan nilainya

Setiap angka punya **nilai** sesuai kamarnya. Pada 8.352.614:

```visual
{"type": "table", "head": ["Jt", "RRb", "PRb", "Rb", "R", "P", "S"], "rows": [["8", "3", "5", "2", "6", "1", "4"], ["8.000.000", "300.000", "50.000", "2.000", "600", "10", "4"]], "caption": "Baris atas: angka. Baris bawah: nilainya."}
```


- angka 8 ada di kamar jutaan, nilainya 8.000.000
- angka 3 ada di kamar ratus ribuan, nilainya 300.000
- angka 5 ada di kamar puluh ribuan, nilainya 50.000

Bilangan bisa ditulis dalam **bentuk panjang** (penjumlahan nilai setiap angka):

$$8.352.614 = 8.000.000 + 300.000 + 50.000 + 2.000 + 600 + 10 + 4$$

### Membaca dan menulis dengan kata

Ingat aturan kata "se-":

- 1.000 dibaca **seribu**, 100 dibaca **seratus**, 10 dibaca **sepuluh**.
- 1.000.000 biasanya dibaca **satu juta**.
- Rumah yang isinya 000 **tidak dibaca** sama sekali.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Membaca bilangan

```soal
{
 "title": "Contoh 1",
 "text": "Tulis 4.705.320 dengan kata-kata.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pisahkan per rumah. Mana yang benar?",
   "options": [
    "4 | 705 | 320",
    "47 | 053 | 20",
    "470 | 532 | 0"
   ],
   "answer": "4 | 705 | 320",
   "hint": "Titik adalah pagar antarrumah, dipasang tiap tiga angka dari kanan.",
   "explain": "Pagarnya sudah ada: 4 | 705 | 320.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Baca Rumah Juta.",
   "options": [
    "empat juta",
    "empat ribu",
    "empat puluh juta"
   ],
   "answer": "empat juta",
   "hint": "Isinya 4, lalu sebut nama rumahnya.",
   "explain": "Rumah Juta berisi 4: empat juta.",
   "error": "salah-baca-bilangan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Baca Rumah Ribu.",
   "options": [
    "tujuh ratus lima ribu",
    "tujuh puluh lima ribu",
    "tujuh ratus nol lima ribu"
   ],
   "answer": "tujuh ratus lima ribu",
   "hint": "Isinya 705. Angka 0 di tengah tidak dibaca.",
   "explain": "705 dibaca tujuh ratus lima, ditambah nama rumah: tujuh ratus lima ribu.",
   "error": "salah-baca-bilangan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Baca Rumah Satuan.",
   "options": [
    "tiga ratus dua puluh",
    "tiga puluh dua",
    "tiga ribu dua ratus"
   ],
   "answer": "tiga ratus dua puluh",
   "hint": "Isinya 320. Nama Rumah Satuan tidak disebut.",
   "explain": "320 dibaca tiga ratus dua puluh.",
   "error": "salah-baca-bilangan"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: ubah kembali ke angka. 4 juta + 705 ribu + 320 = ?",
   "answer": "4.705.320",
   "hint": "Tulis tiap rumah berurutan dengan titik.",
   "explain": "Hasilnya 4.705.320, sama dengan soal.",
   "error": "salah-baca-bilangan"
  }
 ],
 "conclusion": "Jadi 4.705.320 dibaca empat juta tujuh ratus lima ribu tiga ratus dua puluh.",
 "visual": {
  "type": "table",
  "head": [
   "Rumah Juta",
   "Rumah Ribu",
   "Rumah Satuan"
  ],
  "rows": [
   [
    "4",
    "705",
    "320"
   ]
  ]
 }
}
```

### Contoh 2: Menulis bilangan yang banyak nolnya

```soal
{
 "title": "Contoh 2",
 "text": "Tulis dengan angka: enam juta delapan puluh ribu sembilan.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Rumah Juta berisi angka berapa?",
   "answer": "6",
   "hint": "Lihat kata sebelum \"juta\".",
   "explain": "\"Enam juta\", jadi Rumah Juta berisi 6.",
   "error": "salah-baca-bilangan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Rumah Ribu ditulis bagaimana?",
   "options": [
    "080",
    "80",
    "800"
   ],
   "answer": "080",
   "hint": "Rumah selain yang paling kiri harus penuh tiga kamar.",
   "explain": "Delapan puluh ribu: kamar ratus ribuan kosong, jadi ditulis 080.",
   "error": "lupa-nol-tempat"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Rumah Satuan ditulis bagaimana?",
   "options": [
    "009",
    "9",
    "900"
   ],
   "answer": "009",
   "hint": "Sembilan hanya mengisi kamar satuan.",
   "explain": "Isinya 9, ditulis 009.",
   "error": "lupa-nol-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Gabungkan dengan pagar. Bilangannya?",
   "answer": "6.080.009",
   "hint": "Tulis 6, lalu 080, lalu 009, dipisah titik.",
   "explain": "6 | 080 | 009 = 6.080.009.",
   "error": "lupa-nol-tempat"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: bilangan jutaan ini punya berapa angka?",
   "answer": "7",
   "hint": "Hitung semua angka pada 6080009.",
   "explain": "Ada 7 angka, sesuai bilangan jutaan.",
   "error": "lupa-nol-tempat"
  }
 ],
 "conclusion": "Jadi enam juta delapan puluh ribu sembilan ditulis 6.080.009."
}
```

### Contoh 3: Nilai angka dan bentuk panjang

```soal
{
 "title": "Contoh 3",
 "text": "Pada bilangan 9.046.207, berapa nilai angka 4? Tulis juga bentuk panjangnya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Angka 4 ada di kamar apa?",
   "options": [
    "puluh ribuan",
    "ribuan",
    "ratus ribuan",
    "puluhan"
   ],
   "answer": "puluh ribuan",
   "hint": "Pisahkan 9 | 046 | 207. Angka 4 ada di Rumah Ribu, kamar tengah.",
   "explain": "Kamar tengah Rumah Ribu adalah puluh ribuan.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Berapa nilai angka 4?",
   "answer": "40.000",
   "hint": "4 puluh ribuan.",
   "explain": "4 puluh ribuan = 40.000.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Pilih bentuk panjang yang benar.",
   "options": [
    "9.000.000 + 40.000 + 6.000 + 200 + 7",
    "9.000.000 + 400.000 + 6.000 + 200 + 7",
    "9 + 4 + 6 + 2 + 7",
    "9.000.000 + 46.000 + 207 + 0"
   ],
   "answer": "9.000.000 + 40.000 + 6.000 + 200 + 7",
   "hint": "Tulis nilai setiap angka yang bukan nol.",
   "explain": "Setiap angka ditulis dengan nilainya: 9.000.000, 40.000, 6.000, 200, dan 7.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 9.000.000 + 40.000 + 6.000 + 200 + 7 = ?",
   "answer": "9.046.207",
   "hint": "Jumlahkan sedikit demi sedikit.",
   "explain": "Hasilnya 9.046.207, sama dengan bilangan semula.",
   "error": "salah-nilai-tempat"
  }
 ],
 "conclusion": "Jadi nilai angka 4 adalah 40.000."
}
```

### Contoh 4: Soal cerita uang

```soal
{
 "title": "Contoh 4",
 "text": "Pak Wayan mengumpulkan 6 amplop berisi Rp1.000.000, 9 lembar Rp100.000, dan 8 lembar Rp10.000. Berapa uang Pak Wayan?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 6 amplop × Rp1.000.000 = ?",
   "answer": "6.000.000",
   "hint": "Enam kali satu juta.",
   "explain": "6 × 1.000.000 = 6.000.000.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 9 lembar × Rp100.000 = ?",
   "answer": "900.000",
   "hint": "Sembilan kali seratus ribu.",
   "explain": "9 × 100.000 = 900.000.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: 8 lembar × Rp10.000 = ?",
   "answer": "80.000",
   "hint": "Delapan kali sepuluh ribu.",
   "explain": "8 × 10.000 = 80.000.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Jumlahkan ketiganya.",
   "answer": "6.980.000",
   "hint": "Rumah Juta 6, Rumah Ribu 980, Rumah Satuan 000.",
   "explain": "6.000.000 + 900.000 + 80.000 = 6.980.000.",
   "error": "lupa-nol-tempat",
   "prefix": "Rp"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Tulis dengan kata.",
   "options": [
    "enam juta sembilan ratus delapan puluh ribu rupiah",
    "enam juta sembilan delapan ribu rupiah",
    "enam juta sembilan ratus delapan puluh ribu nol rupiah"
   ],
   "answer": "enam juta sembilan ratus delapan puluh ribu rupiah",
   "hint": "Rumah berisi 000 tidak dibaca.",
   "explain": "6 | 980 | 000: enam juta sembilan ratus delapan puluh ribu.",
   "error": "salah-baca-bilangan"
  }
 ],
 "conclusion": "Uang Pak Wayan Rp6.980.000, enam juta sembilan ratus delapan puluh ribu rupiah."
}
```

## Kesalahan yang sering terjadi

- **Lupa angka nol penjaga kamar.** "Enam juta delapan puluh ribu sembilan" ditulis 6.80.9 atau 680.009. Salah, karena setiap rumah selain yang paling kiri harus berisi tiga angka. Yang benar 6.080.009.
- **Memasang titik dari kiri.** Menulis 6980.000 atau 69.80.000. Pagar dipasang setiap tiga angka **dari kanan**: 6.980.000.
- **Tertukar angka dan nilai.** Ditanya nilai angka 4 pada 9.046.207, menjawab "4". Angka 4 bernilai 40.000 karena ada di kamar puluh ribuan.
- **Membaca rumah kosong.** 3.000.250 dibaca "tiga juta nol ribu dua ratus lima puluh". Rumah berisi 000 dilewati saja: "tiga juta dua ratus lima puluh".
- **Salah memakai "se-".** Menulis "satu ribu" atau "satu ratus". Yang baku "seribu" dan "seratus".

## Ringkasan

- Bilangan besar dibagi menjadi rumah tiga angka: Rumah Juta, Rumah Ribu, Rumah Satuan. Titik dipasang setiap tiga angka dari kanan.
- Baca isi setiap rumah lalu sebut nama rumahnya, mulai dari kiri.
- Rumah selain yang paling kiri selalu berisi tiga angka; isi dengan 0 bila perlu.
- Nilai sebuah angka bergantung pada kamarnya. Setiap kamar bernilai 10 kali kamar di kanannya.
- 10.000.000 dibaca sepuluh juta dan punya 8 angka.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tulis dengan kata: 3.040.500.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Pisahkan per rumah.",
   "options": [
    "3 | 040 | 500",
    "30 | 405 | 00",
    "304 | 050 | 0"
   ],
   "answer": "3 | 040 | 500",
   "hint": "Hitung tiga angka dari kanan.",
   "explain": "Rumahnya 3 | 040 | 500.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "choice",
   "prompt": "Bagaimana Rumah Ribu dibaca?",
   "options": [
    "empat puluh ribu",
    "empat ratus ribu",
    "nol empat puluh ribu"
   ],
   "answer": "empat puluh ribu",
   "hint": "040 sama dengan 40.",
   "explain": "040 dibaca empat puluh, lalu \"ribu\".",
   "error": "salah-baca-bilangan"
  },
  {
   "kind": "choice",
   "prompt": "Tulis lengkap dengan kata.",
   "options": [
    "tiga juta empat puluh ribu lima ratus",
    "tiga juta empat ratus ribu lima ratus",
    "tiga juta empat puluh lima ratus"
   ],
   "answer": "tiga juta empat puluh ribu lima ratus",
   "hint": "Gabungkan bacaan tiap rumah, dari kiri.",
   "explain": "Tiga juta, empat puluh ribu, lima ratus.",
   "error": "salah-baca-bilangan"
  }
 ],
 "conclusion": "3.040.500 dibaca tiga juta empat puluh ribu lima ratus."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Tulis dengan angka: sembilan juta dua ratus ribu tujuh puluh.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Rumah Satuan ditulis bagaimana?",
   "options": [
    "070",
    "70",
    "700"
   ],
   "answer": "070",
   "hint": "Rumah selain yang paling kiri berisi tiga angka.",
   "explain": "Tujuh puluh ditulis 070.",
   "error": "lupa-nol-tempat"
  },
  {
   "kind": "number",
   "prompt": "Tulis bilangannya.",
   "answer": "9.200.070",
   "hint": "Rumah Juta 9, Rumah Ribu 200, Rumah Satuan 070.",
   "explain": "9 | 200 | 070 = 9.200.070.",
   "error": "lupa-nol-tempat"
  }
 ],
 "conclusion": "Jadi bilangannya 9.200.070."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Berapa nilai angka 6 pada bilangan 2.615.483?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Angka 6 ada di kamar apa?",
   "options": [
    "ratus ribuan",
    "puluh ribuan",
    "jutaan",
    "ratusan"
   ],
   "answer": "ratus ribuan",
   "hint": "Pisahkan 2 | 615 | 483. Angka 6 kamar paling kiri Rumah Ribu.",
   "explain": "Kamar paling kiri Rumah Ribu adalah ratus ribuan.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "Berapa nilainya?",
   "answer": "600.000",
   "hint": "6 ratus ribuan.",
   "explain": "Nilai angka 6 adalah 600.000.",
   "error": "salah-nilai-tempat"
  }
 ],
 "conclusion": "Nilai angka 6 adalah 600.000."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Tulis bentuk panjang dari 5.007.230.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa nilai angka 7?",
   "answer": "7.000",
   "hint": "Pisahkan 5 | 007 | 230. Angka 7 di kamar ribuan.",
   "explain": "Angka 7 bernilai 7.000.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "choice",
   "prompt": "Pilih bentuk panjang yang benar.",
   "options": [
    "5.000.000 + 7.000 + 200 + 30",
    "5.000.000 + 70.000 + 200 + 30",
    "5.000.000 + 7.000 + 230 + 0",
    "5 + 7 + 2 + 3"
   ],
   "answer": "5.000.000 + 7.000 + 200 + 30",
   "hint": "Tulis nilai setiap angka yang bukan nol.",
   "explain": "Angka nol tidak perlu ditulis: 5.000.000 + 7.000 + 200 + 30.",
   "error": "salah-nilai-tempat"
  }
 ],
 "conclusion": "5.007.230 = 5.000.000 + 7.000 + 200 + 30."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Siti menghitung uang kas: 4 amplop berisi Rp1.000.000, 15 lembar Rp100.000, dan 3 lembar Rp10.000. Berapa jumlah uangnya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "15 lembar × Rp100.000 = ?",
   "answer": "1.500.000",
   "hint": "15 ratus ribu sama dengan 1 juta 5 ratus ribu.",
   "explain": "15 × 100.000 = 1.500.000.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Jumlahkan semuanya: 4.000.000 + 1.500.000 + 30.000 = ?",
   "answer": "5.530.000",
   "hint": "Jumlahkan jutaan dulu, lalu ribuan.",
   "explain": "Totalnya 5.530.000.",
   "error": "salah-fakta-tambah",
   "prefix": "Rp"
  },
  {
   "kind": "choice",
   "prompt": "Tulis dengan kata.",
   "options": [
    "lima juta lima ratus tiga puluh ribu rupiah",
    "lima juta lima tiga puluh ribu rupiah",
    "lima ratus lima puluh tiga ribu rupiah"
   ],
   "answer": "lima juta lima ratus tiga puluh ribu rupiah",
   "hint": "Rumahnya 5 | 530 | 000.",
   "explain": "Lima juta, lima ratus tiga puluh ribu.",
   "error": "salah-baca-bilangan"
  }
 ],
 "conclusion": "Uang kas Rp5.530.000, lima juta lima ratus tiga puluh ribu rupiah."
}
```
