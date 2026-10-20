---
id: sd3-09-satuan-ukur
judul: Satuan Panjang, Massa, dan Volume
jenjang: sd3
moe: "Primary 3 · Measurement and Geometry · Length, Mass and Volume"
prasyarat: [sd2-09-panjang-massa-volume, sd3-01-bilangan-sampai-10000]
durasi_menit: 35
---

## Kenapa belajar ini?

Jarak rumah ke sekolah diukur dalam kilometer. Obat sirup diminum beberapa mililiter. Tinggi badanmu mungkin 1 m 32 cm. Materi ini mengajarkan satuan baru dan cara mengubah ukuran gabungan menjadi satu satuan saja, supaya mudah dibandingkan dan dihitung.

## Analogi

Bayangkan **dompet berisi lembaran uang dan koin**.

Satuan besar (km, m, kg, ℓ) seperti **uang besar**. Satuan kecil (m, cm, g, mL) seperti **koin kecil**.

Kalau kamu punya 2 uang Rp1.000 dan koin Rp350, berapa uangmu dalam rupiah? Kamu **tukar uang besar menjadi rupiah**: 2 × Rp1.000 = Rp2.000. Lalu gabung dengan koin: Rp2.000 + Rp350 = Rp2.350.

```visual
{"type": "money", "items": [1000, 1000, 200, 100, 50], "caption": "Rp2.000 + Rp350 = Rp2.350"}
```

Mengubah satuan gabungan bekerja sama persis: **tukar satuan besar menjadi satuan kecil, lalu tambahkan satuan kecil yang sudah ada.**

```visual
{"type": "barModel", "bars": [{"label": "2 m 35 cm", "units": 3, "known": "200 cm + 35 cm"}], "question": "235 cm", "caption": "2 m ditukar menjadi 200 cm, lalu ditambah 35 cm"}
```

## Konsep

### Satuan baru: kilometer dan mililiter

- **Kilometer (km)** dipakai untuk jarak jauh, misalnya jarak antarkota. Berjalan 1 km kira-kira butuh 15 menit.
- **Mililiter (mL)** dipakai untuk isi yang sedikit. Satu sendok obat berisi 5 mL. Satu kotak susu kecil berisi sekitar 200 mL.

```visual
{"type": "scale", "kind": "volume", "value": 200, "unit": "mL", "max": 1000, "step": 100, "caption": "Gelas ukur berisi 200 mL, seperti satu kotak susu kecil"}
```

### Tabel tukar satuan

```visual
{"type": "table", "head": ["Besaran", "Satuan besar", "Satuan kecil"], "rows": [["Panjang", "1 km", "1.000 m"], ["Panjang", "1 m", "100 cm"], ["Massa", "1 kg", "1.000 g"], ["Volume", "1 ℓ", "1.000 mL"]]}
```

Perhatikan: hanya **m ke cm** yang memakai 100. Yang lain memakai 1.000.

### Satuan gabungan

**Satuan gabungan** adalah ukuran yang memakai dua satuan sekaligus. Contoh:

- 2 m 35 cm (dibaca dua meter tiga puluh lima sentimeter)
- 3 kg 400 g
- 1 ℓ 250 mL

```visual
{"type": "scale", "kind": "mass", "value": 3400, "unit": "g", "max": 5000, "step": 100, "caption": "Jarum menunjuk 3.400 g, yaitu 3 kg 400 g"}
```

### Mengubah satuan gabungan ke satuan kecil

1. Ubah bagian satuan besar menjadi satuan kecil (kalikan dengan 100 atau 1.000).
2. Tambahkan bagian satuan kecil.

Contoh: 2 m 35 cm = 200 cm + 35 cm = 235 cm.

Hati-hati kalau bagian kecilnya hanya 1 atau 2 angka pada satuan 1.000. Misalnya 3 km 50 m = 3.000 m + 50 m = **3.050 m**, bukan 350 m. Lihat bagaimana angka 50 ditulis rata kanan:

```anim
{"type": "susun", "op": "+", "a": 3000, "b": 50, "title": "3.000 m + 50 m"}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Meter dan sentimeter

```soal
{
 "title": "Contoh 1",
 "text": "Tinggi Budi 1 m 35 cm. Berapa sentimeter tinggi Budi?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Pisahkan dua bagian. Bagian kecilnya berapa sentimeter?",
   "answer": "35",
   "hint": "Bagian kecil adalah angka di depan \"cm\".",
   "explain": "Bagian besar 1 m, bagian kecil 35 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Tukar bagian besar. 1 m = ... cm",
   "answer": "100",
   "hint": "Ingat: hanya m ke cm yang memakai 100.",
   "explain": "1 m = 100 cm, seperti menukar uang besar menjadi koin.",
   "error": "salah-angka-tukar",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Gabungkan. 100 cm + 35 cm = ?",
   "answer": "135",
   "hint": "Tambahkan kedua bagian.",
   "explain": "100 + 35 = 135 cm.",
   "error": "salah-fakta-tambah",
   "suffix": "cm"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: 135 cm sama dengan ...",
   "options": [
    "1 m 35 cm",
    "13 m 5 cm",
    "1 m 3 cm"
   ],
   "answer": "1 m 35 cm",
   "hint": "Pisahkan 100 cm dari 135 cm.",
   "explain": "135 cm = 100 cm + 35 cm = 1 m 35 cm. Kembali ke soal semula. Benar.",
   "error": "salah-angka-tukar"
  }
 ],
 "conclusion": "Tinggi Budi 135 cm."
}
```

### Contoh 2: Kilometer dan meter, ada nol di tengah

```soal
{
 "title": "Contoh 2",
 "text": "Ubah 3 km 50 m menjadi meter.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pilih angka tukar. 1 km = ...",
   "options": [
    "1.000 m",
    "100 m",
    "10 m"
   ],
   "answer": "1.000 m",
   "hint": "Kilo berarti seribu.",
   "explain": "1 km = 1.000 m.",
   "error": "salah-angka-tukar"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Tukar bagian besar. 3 km = ... m",
   "answer": "3.000",
   "hint": "3 × 1.000.",
   "explain": "3 km = 3.000 m.",
   "error": "salah-angka-tukar",
   "suffix": "m"
  },
  {
   "kind": "column",
   "op": "+",
   "a": 3000,
   "b": 50,
   "prompt": "Langkah 3: Gabungkan dengan bersusun: 3.000 + 50.",
   "hint": "Tulis 50 rata kanan, di bawah puluhan dan satuan.",
   "explain": "3.000 + 50 = 3.050. Ratusan tetap 0."
  },
  {
   "kind": "number",
   "prompt": "Jadi 3 km 50 m = ... m",
   "answer": "3.050",
   "hint": "Jangan lupa angka 0 di ratusan.",
   "explain": "3 km 50 m = 3.050 m.",
   "error": "lupa-nol-satuan",
   "suffix": "m"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: pada 3.050, angka ribuan 3 berarti ...",
   "options": [
    "3.000 m atau 3 km",
    "3 m",
    "300 m"
   ],
   "answer": "3.000 m atau 3 km",
   "hint": "Lihat nilai tempat angka 3.",
   "explain": "Ribuan 3 berarti 3.000 m = 3 km, sisanya 50 m. Benar.",
   "error": "salah-nilai-tempat"
  }
 ],
 "conclusion": "3 km 50 m = 3.050 m."
}
```

### Contoh 3: Massa dan volume

```soal
{
 "title": "Contoh 3",
 "text": "Ubah ke satuan kecil: a) 4 kg 8 g, b) 1 ℓ 250 mL.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: a) Tukar bagian besar. 4 kg = ... g",
   "answer": "4.000",
   "hint": "1 kg = 1.000 g.",
   "explain": "4 kg = 4.000 g.",
   "error": "salah-angka-tukar",
   "suffix": "g"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: a) Gabungkan. 4.000 g + 8 g = ?",
   "answer": "4.008",
   "hint": "Angka 8 ada di tempat satuan. Puluhan dan ratusan tetap 0.",
   "explain": "4.000 + 8 = 4.008 g.",
   "error": "lupa-nol-satuan",
   "suffix": "g"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: b) Tukar bagian besar. 1 ℓ = ... mL",
   "answer": "1.000",
   "hint": "Mili berarti seperseribu. 1 ℓ berisi seribu mL.",
   "explain": "1 ℓ = 1.000 mL.",
   "error": "salah-angka-tukar",
   "suffix": "mL"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: b) Gabungkan. 1.000 mL + 250 mL = ?",
   "answer": "1.250",
   "hint": "Tambahkan 250 ke 1.000.",
   "explain": "1.000 + 250 = 1.250 mL.",
   "error": "salah-fakta-tambah",
   "suffix": "mL"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: 4.008 g sama dengan ...",
   "options": [
    "4 kg 8 g",
    "4 kg 800 g",
    "48 g"
   ],
   "answer": "4 kg 8 g",
   "hint": "Ribuan 4 berarti 4 kg. Sisanya berapa gram?",
   "explain": "4.008 g = 4 kg + 8 g. Benar.",
   "error": "lupa-nol-satuan"
  }
 ],
 "conclusion": "a) 4 kg 8 g = 4.008 g, b) 1 ℓ 250 mL = 1.250 mL.",
 "visual": {
  "type": "scale",
  "kind": "volume",
  "value": 1250,
  "unit": "mL",
  "max": 2000,
  "step": 250
 }
}
```

### Contoh 4: Soal cerita

```soal
{
 "title": "Contoh 4",
 "text": "Jarak rumah Siti ke sekolah 2 km 400 m. Pagi ini Siti sudah berjalan 900 m. Berapa meter lagi yang harus ia tempuh?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Apa yang dilakukan sebelum mengurangkan?",
   "options": [
    "Samakan satuan menjadi meter",
    "Langsung kurangkan 400 − 900",
    "Kurangkan 2 − 900"
   ],
   "answer": "Samakan satuan menjadi meter",
   "hint": "Satu jarak memakai km dan m, yang lain hanya m.",
   "explain": "Satuannya harus sama dulu: ubah 2 km 400 m menjadi meter.",
   "error": "banding-tanpa-samakan-satuan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 2 km 400 m = ... m",
   "answer": "2.400",
   "hint": "2 km = 2.000 m, lalu tambah 400 m.",
   "explain": "2.000 + 400 = 2.400 m.",
   "error": "salah-angka-tukar",
   "suffix": "m"
  },
  {
   "kind": "column",
   "op": "-",
   "a": 2400,
   "b": 900,
   "prompt": "Langkah 3: Kurangkan bersusun: 2.400 − 900.",
   "hint": "Di ratusan 4 − 9 tidak bisa. Pinjam 1 dari ribuan.",
   "explain": "Ratusan menjadi 14, 14 − 9 = 5. Ribuan 1. Hasilnya 1.500."
  },
  {
   "kind": "number",
   "prompt": "Jadi sisa jaraknya ... m",
   "answer": "1.500",
   "hint": "Baca hasil pengurangan.",
   "explain": "Siti harus berjalan 1.500 m lagi.",
   "error": "salah-pinjam",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 1.500 m + 900 m = ?",
   "answer": "2.400",
   "hint": "Sisa jarak ditambah yang sudah ditempuh.",
   "explain": "2.400 m = 2 km 400 m. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "m"
  }
 ],
 "conclusion": "Siti harus berjalan 1.500 m lagi."
}
```

## Kesalahan yang sering terjadi

- **Memakai angka tukar yang salah.** Menulis 3 kg = 300 g. Hanya m ke cm yang memakai 100. Untuk kg ke g, km ke m, dan ℓ ke mL, pakai 1.000. Jadi 3 kg = 3.000 g.
- **Lupa nol di tengah.** Menulis 3 km 50 m = 350 m. Itu bahkan kurang dari 1 km! Yang benar 3.000 + 50 = 3.050 m.
- **Menempelkan angka begitu saja.** Menulis 5 m 8 cm = 58 cm. Yang benar 500 cm + 8 cm = 508 cm.
- **Membandingkan tanpa menyamakan satuan.** Mengira 1 kg 90 g lebih berat dari 1.200 g karena ada "kg". Ubah dulu: 1 kg 90 g = 1.090 g, dan 1.090 g < 1.200 g. Samakan satuan sebelum membandingkan atau menghitung.

## Ringkasan

- 1 km = 1.000 m, 1 m = 100 cm, 1 kg = 1.000 g, 1 ℓ = 1.000 mL.
- km untuk jarak jauh, mL untuk isi yang sedikit.
- Satuan gabungan memakai dua satuan, misalnya 2 m 35 cm.
- Ubah ke satuan kecil: tukar bagian besar (kali 100 atau 1.000), lalu tambahkan bagian kecil.
- Samakan satuan sebelum menjumlah, mengurang, atau membandingkan.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "5 m 8 cm = ... cm",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 5 m = ... cm",
   "answer": "500",
   "hint": "1 m = 100 cm.",
   "explain": "5 × 100 = 500 cm.",
   "error": "salah-angka-tukar",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 500 cm + 8 cm = ?",
   "answer": "508",
   "hint": "Angka 8 ada di tempat satuan.",
   "explain": "500 + 8 = 508 cm, bukan 58 cm.",
   "error": "lupa-nol-satuan",
   "suffix": "cm"
  }
 ],
 "conclusion": "5 m 8 cm = 508 cm."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "6 km 275 m = ... m",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: 1 km = ...",
   "options": [
    "1.000 m",
    "100 m"
   ],
   "answer": "1.000 m",
   "hint": "Kilo berarti seribu.",
   "explain": "1 km = 1.000 m.",
   "error": "salah-angka-tukar"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 6 km = ... m",
   "answer": "6.000",
   "hint": "6 × 1.000.",
   "explain": "6.000 m.",
   "error": "salah-angka-tukar",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: 6.000 m + 275 m = ?",
   "answer": "6.275",
   "hint": "Tambahkan bagian kecil.",
   "explain": "6.275 m.",
   "error": "salah-fakta-tambah",
   "suffix": "m"
  }
 ],
 "conclusion": "6 km 275 m = 6.275 m."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "3 kg 40 g = ... g",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 3 kg = ... g",
   "answer": "3.000",
   "hint": "1 kg = 1.000 g.",
   "explain": "3.000 g.",
   "error": "salah-angka-tukar",
   "suffix": "g"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 3.000 g + 40 g = ?",
   "answer": "3.040",
   "hint": "40 ditulis rata kanan, ratusan tetap 0.",
   "explain": "3.040 g, bukan 340 g.",
   "error": "lupa-nol-satuan",
   "suffix": "g"
  }
 ],
 "conclusion": "3 kg 40 g = 3.040 g."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "2 ℓ 5 mL = ... mL",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 2 ℓ = ... mL",
   "answer": "2.000",
   "hint": "1 ℓ = 1.000 mL.",
   "explain": "2.000 mL.",
   "error": "salah-angka-tukar",
   "suffix": "mL"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 2.000 mL + 5 mL = ?",
   "answer": "2.005",
   "hint": "Angka 5 ada di tempat satuan.",
   "explain": "2.005 mL.",
   "error": "lupa-nol-satuan",
   "suffix": "mL"
  }
 ],
 "conclusion": "2 ℓ 5 mL = 2.005 mL."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Ibu membeli beras 2 kg 300 g dan gula 850 g. Berapa gram berat belanjaan Ibu semuanya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Apa yang dilakukan dulu?",
   "options": [
    "Ubah 2 kg 300 g menjadi gram",
    "Langsung 300 + 850",
    "Langsung 2 + 850"
   ],
   "answer": "Ubah 2 kg 300 g menjadi gram",
   "hint": "Satuannya harus sama sebelum dijumlahkan.",
   "explain": "Ubah beras ke gram dulu.",
   "error": "banding-tanpa-samakan-satuan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 2 kg 300 g = ... g",
   "answer": "2.300",
   "hint": "2.000 g + 300 g.",
   "explain": "2.300 g.",
   "error": "salah-angka-tukar",
   "suffix": "g"
  },
  {
   "kind": "column",
   "op": "+",
   "a": 2300,
   "b": 850,
   "prompt": "Langkah 3: Jumlahkan bersusun: 2.300 + 850.",
   "hint": "Di ratusan 3 + 8 = 11, simpan 1 ke ribuan.",
   "explain": "2.300 + 850 = 3.150."
  },
  {
   "kind": "number",
   "prompt": "Jadi berat belanjaan semuanya ... g",
   "answer": "3.150",
   "hint": "Baca hasil penjumlahan.",
   "explain": "3.150 g.",
   "error": "salah-fakta-tambah",
   "suffix": "g"
  }
 ],
 "conclusion": "Berat belanjaan Ibu 3.150 g."
}
```
