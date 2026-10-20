---
id: sd5-09-volume-kubus-balok
judul: Volume Kubus dan Balok
jenjang: sd5
moe: "Primary 5 · Measurement and Geometry · Volume of Cube and Cuboid"
prasyarat: [sd2-12-bangun-ruang, sd3-09-satuan-ukur, sd3-11-luas-keliling, sd4-13-jaring-jaring]
durasi_menit: 45
---

## Kenapa belajar ini?

Berapa banyak air yang muat di bak mandi? Berapa kotak susu yang muat di sebuah kardus? Pertanyaan seperti ini dijawab dengan **volume**, yaitu besarnya ruang yang ditempati sebuah benda.

## Analogi

Bayangkan kamu menata **kotak-kotak kecil berbentuk dadu** ke dalam sebuah **kardus**.

- Pertama, kamu menutup **dasar kardus** dengan satu **lapisan** dadu. Banyak dadu di satu lapisan = banyak di sepanjang panjang × banyak di sepanjang lebar.
- Lalu kamu menumpuk **lapisan demi lapisan** sampai kardus penuh. Banyak lapisan = tinggi kardus.
- Jumlah seluruh dadu adalah **volume** kardus.

```visual
{"type": "grid", "width": 5, "height": 3, "shade": [{"x": 0, "y": 0, "w": 5, "h": 3}], "caption": "Satu lapisan di dasar kardus: 5 × 3 = 15 dadu"}
```

```anim
{"type": "batang", "title": "Menumpuk lapisan dadu", "bars": [{"label": "Lapis 1", "units": 1, "unitValue": "15"}, {"label": "Lapis 2", "units": 1, "unitValue": "15"}, {"label": "Lapis 3", "units": 1, "unitValue": "15"}], "langkah": [{"say": "Lapis pertama berisi 15 dadu.", "bars": 1}, {"say": "Tumpuk lapis kedua: 15 + 15 = 30 dadu.", "bars": 2}, {"say": "Tiga lapis: 3 × 15 = 45 dadu. Volume = isi satu lapisan × banyak lapisan.", "bars": 3}]}
```

Ingat kalimat ini: **volume = isi satu lapisan × banyak lapisan.**

## Konsep

### Kubus satuan, cm³ dan m³

- **Kubus satuan** 1 cm adalah kubus dengan rusuk 1 cm. Volumenya **1 sentimeter kubik**, ditulis $1\ \text{cm}^3$.
- Kubus dengan rusuk 1 m volumenya **1 meter kubik**, ditulis $1\ \text{m}^3$. Satuan ini dipakai untuk benda besar seperti kolam, truk, atau ruangan.

Volume sebuah benda yang tersusun dari kubus satuan sama dengan **banyak kubus satuannya**. Bangun dengan bentuk berbeda bisa punya volume sama, asal banyak kubusnya sama.

### Menggambar di kertas isometrik

Kertas isometrik berisi titik-titik yang membentuk segitiga. Aturannya:

1. Garis **tegak** (tinggi) digambar tegak lurus ke atas.
2. Garis **panjang** dan **lebar** digambar miring mengikuti titik, satu miring ke kanan dan satu miring ke kiri.
3. Setiap ruas di antara dua titik bersebelahan = 1 satuan.
4. Gambar dari kubus paling depan dulu, lalu yang di belakangnya. Garis yang tertutup kubus lain tidak digambar.

Dengan cara ini, kubus tampak tiga dimensi: kamu melihat sisi atas, sisi depan kiri, dan sisi depan kanan.

### Rumus volume

Isi satu lapisan = panjang × lebar. Banyak lapisan = tinggi. Jadi:

$$\text{Volume balok} = \text{panjang} \times \text{lebar} \times \text{tinggi}$$

```visual
{"type": "solid", "solid": "balok", "caption": "Balok: panjang, lebar, tinggi"}
```

```anim
{"type": "persamaan", "title": "Volume balok 6 cm × 2 cm × 4 cm", "baris": [{"tex": "V = 6 \\times 2 \\times 4", "say": "Panjang 6, lebar 2, tinggi 4."}, {"tex": "V = 12 \\times 4", "say": "Isi satu lapisan: 6 × 2 = 12 kubus.", "op": "satu lapisan"}, {"tex": "V = 48 \\text{ cm}^3", "say": "Ada 4 lapisan: 12 × 4 = 48 kubus satuan."}]}
```

Kubus punya rusuk sama panjang (s):

$$\text{Volume kubus} = s \times s \times s$$

```visual
{"type": "solid", "solid": "kubus", "caption": "Kubus: semua rusuk sama panjang"}
```

### Volume air dan liter

$$1\ \ell = 1.000\ \text{cm}^3 \qquad 1\ \text{mL} = 1\ \text{cm}^3$$

Volume air dalam bak dihitung seperti balok, tetapi **tingginya memakai tinggi air**, bukan tinggi bak.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menghitung kubus satuan

```soal
{
 "title": "Contoh 1",
 "text": "Sebuah balok disusun dari kubus satuan 1 cm. Panjangnya 4 kubus, lebarnya 3 kubus, dan tingginya 2 lapis. Berapa volumenya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Isi satu lapisan = 4 × 3 = ?",
   "answer": "12",
   "hint": "Hitung petak pada gambar tampak atas.",
   "explain": "Satu lapisan berisi 12 kubus.",
   "error": "salah-fakta-kali",
   "suffix": "kubus"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Ada 2 lapis. Banyak kubus = 12 × 2 = ?",
   "answer": "24",
   "hint": "Isi satu lapisan × banyak lapisan.",
   "explain": "24 kubus satuan = 24 cm³.",
   "error": "salah-fakta-kali",
   "suffix": "cm³"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 12 + 12 = ?",
   "answer": "24",
   "hint": "Jumlahkan per lapis.",
   "explain": "12 + 12 = 24. Sama.",
   "error": "salah-fakta-tambah",
   "suffix": "cm³"
  }
 ],
 "conclusion": "Volume balok 24 cm³.",
 "visual": {
  "type": "grid",
  "width": 4,
  "height": 3,
  "shade": [
   {
    "x": 0,
    "y": 0,
    "w": 4,
    "h": 3
   }
  ],
  "showDims": true
 }
}
```

### Contoh 2: Volume kubus

```soal
{
 "title": "Contoh 2",
 "text": "Sebuah kotak kado berbentuk kubus dengan rusuk 5 cm. Berapa volumenya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Hitungan yang tepat?",
   "options": [
    "5 × 5 × 5",
    "5 × 3",
    "5 + 5 + 5"
   ],
   "answer": "5 × 5 × 5",
   "hint": "Kubus: rusuk × rusuk × rusuk.",
   "explain": "Volume kubus = s × s × s.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Isi satu lapisan = 5 × 5 = ?",
   "answer": "25",
   "hint": "Lima kali lima.",
   "explain": "25 kubus satuan per lapis.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Ada 5 lapis. 25 × 5 = ?",
   "answer": "125",
   "hint": "Isi satu lapisan × banyak lapisan.",
   "explain": "25 × 5 = 125 cm³.",
   "error": "salah-fakta-kali",
   "suffix": "cm³"
  }
 ],
 "conclusion": "Volume kotak kado 125 cm³.",
 "visual": {
  "type": "solid",
  "solid": "kubus"
 }
}
```

### Contoh 3: Volume balok dan liter

```soal
{
 "title": "Contoh 3",
 "text": "Sebuah kotak penyimpanan berbentuk balok berukuran 25 cm × 20 cm × 12 cm. Berapa volumenya dalam cm³ dan dalam liter?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Isi satu lapisan = 25 × 20 = ?",
   "answer": "500",
   "hint": "25 × 2 = 50, lalu × 10.",
   "explain": "500 kubus satuan per lapis.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Volume = 500 × 12 = ?",
   "answer": "6.000",
   "hint": "5 × 12 = 60, lalu tambah dua nol.",
   "explain": "500 × 12 = 6.000 cm³.",
   "error": "salah-fakta-kali",
   "suffix": "cm³"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Ubah ke liter.",
   "answer": "6",
   "hint": "1 ℓ = 1.000 cm³, jadi bagi 1.000.",
   "explain": "6.000 ÷ 1.000 = 6 ℓ.",
   "error": "salah-pilih-satuan",
   "suffix": "ℓ"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: urutan lain. 20 × 12 = 240, lalu 240 × 25 = ?",
   "answer": "6.000",
   "hint": "240 × 100 ÷ 4.",
   "explain": "240 × 25 = 6.000. Sama.",
   "error": "salah-fakta-kali",
   "suffix": "cm³"
  }
 ],
 "conclusion": "Volume kotak 6.000 cm³ = 6 ℓ.",
 "visual": {
  "type": "solid",
  "solid": "balok"
 }
}
```

### Contoh 4: Soal cerita air dalam bak

```soal
{
 "title": "Contoh 4",
 "text": "Bak mandi di rumah Putu berukuran panjang 80 cm, lebar 50 cm, dan tinggi 60 cm. Bak berisi air setinggi 45 cm. (a) Berapa liter air di dalam bak? (b) Berapa liter air lagi agar bak penuh?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Isi satu lapisan (1 cm tinggi air) = 80 × 50 = ?",
   "answer": "4.000",
   "hint": "8 × 5 = 40, lalu tambah dua nol.",
   "explain": "4.000 cm³ untuk setiap 1 cm tinggi air.",
   "error": "salah-fakta-kali",
   "suffix": "cm³"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Volume air = 4.000 × 45 = ?",
   "answer": "180.000",
   "hint": "Pakai tinggi air 45 cm, bukan tinggi bak.",
   "explain": "4.000 × 45 = 180.000 cm³.",
   "error": "salah-fakta-kali",
   "suffix": "cm³"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: (a) Ubah ke liter.",
   "answer": "180",
   "hint": "Bagi 1.000.",
   "explain": "180.000 ÷ 1.000 = 180 ℓ.",
   "error": "salah-pilih-satuan",
   "suffix": "ℓ"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Tinggi bagian kosong = 60 − 45 = ?",
   "answer": "15",
   "hint": "Tinggi bak dikurangi tinggi air.",
   "explain": "Bagian kosong setinggi 15 cm.",
   "error": "salah-fakta-kurang",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: (b) Air yang perlu ditambah = 4.000 × 15 cm³ = ? ℓ",
   "answer": "60",
   "hint": "4.000 × 15 = 60.000 cm³, lalu bagi 1.000.",
   "explain": "60.000 cm³ = 60 ℓ.",
   "error": "salah-pilih-satuan",
   "suffix": "ℓ"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: bak penuh = 4.000 × 60 cm³ = ? ℓ",
   "answer": "240",
   "hint": "Lalu cek 180 + 60.",
   "explain": "240 ℓ = 180 + 60. Cocok.",
   "error": "salah-fakta-kali",
   "suffix": "ℓ"
  }
 ],
 "conclusion": "(a) Ada 180 ℓ air; (b) perlu 60 ℓ lagi.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Air",
    "units": 3,
    "unitValue": "15 cm"
   },
   {
    "label": "Kosong",
    "units": 1,
    "unitValue": "15 cm"
   }
  ],
  "total": "tinggi bak 60 cm"
 }
}
```

## Kesalahan yang sering terjadi

- **Menjumlah ukuran, bukan mengalikan.** Volume balok 4 × 3 × 2 dihitung $4 + 3 + 2 = 9$. Volume adalah banyak kubus: $4 \times 3 \times 2 = 24$.
- **Memakai tinggi bak untuk volume air.** Pada contoh 4, menghitung $80 \times 50 \times 60$. Yang ditanya air, jadi pakai tinggi air 45 cm.
- **Kubus dihitung $s \times 3$.** Rusuk 5 cm, volume ditulis $5 \times 3 = 15$. Yang benar $5 \times 5 \times 5 = 125$.
- **Salah konversi ke liter.** Menulis $6.000\ \text{cm}^3 = 60\ \ell$. Ingat $1\ \ell = 1.000\ \text{cm}^3$, jadi bagi 1.000: $6\ \ell$.
- **Satuan salah.** Menulis volume dalam $\text{cm}^2$. Luas memakai $\text{cm}^2$, volume memakai $\text{cm}^3$.

## Ringkasan

- Volume = banyak kubus satuan yang mengisi bangun. Satuannya $\text{cm}^3$ atau $\text{m}^3$.
- Volume = isi satu lapisan × banyak lapisan.
- Volume balok $= p \times l \times t$. Volume kubus $= s \times s \times s$.
- $1\ \ell = 1.000\ \text{cm}^3$ dan $1\ \text{mL} = 1\ \text{cm}^3$.
- Volume air memakai tinggi air, bukan tinggi wadah.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Sebuah balok disusun dari kubus satuan 1 cm: panjang 5 kubus, lebar 2 kubus, tinggi 3 lapis. Berapa volumenya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Isi satu lapisan?",
   "answer": "10",
   "hint": "5 × 2.",
   "explain": "Satu lapis 10 kubus.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Volume?",
   "answer": "30",
   "hint": "Isi satu lapisan × banyak lapisan.",
   "explain": "10 × 3 = 30 cm³.",
   "error": "salah-fakta-kali",
   "suffix": "cm³"
  }
 ],
 "conclusion": "Volume balok 30 cm³."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung volume kubus dengan rusuk 7 cm.",
 "steps": [
  {
   "kind": "number",
   "prompt": "7 × 7 = ?",
   "answer": "49",
   "hint": "Isi satu lapisan.",
   "explain": "49.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "column",
   "op": "×",
   "a": 49,
   "b": 7,
   "prompt": "49 × 7 = ? (ada 7 lapis)",
   "hint": "9 × 7 = 63, simpan 6.",
   "explain": "49 × 7 = 343 cm³."
  }
 ],
 "conclusion": "Volume kubus 343 cm³."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Sebuah kolam ikan berbentuk balok berukuran 4 m × 3 m × 2 m. Berapa volumenya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "4 × 3 = ?",
   "answer": "12",
   "hint": "Isi satu lapisan.",
   "explain": "12 m³ per lapis 1 m.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Volume kolam?",
   "answer": "24",
   "hint": "Kali tinggi 2 m.",
   "explain": "12 × 2 = 24 m³.",
   "error": "salah-fakta-kali",
   "suffix": "m³"
  }
 ],
 "conclusion": "Volume kolam 24 m³."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Ubah 2.500 cm³ ke liter dan ke mL.",
 "steps": [
  {
   "kind": "number",
   "prompt": "2.500 cm³ = ? ℓ",
   "answer": "2,5",
   "hint": "1 ℓ = 1.000 cm³, jadi bagi 1.000.",
   "explain": "2.500 ÷ 1.000 = 2,5 ℓ.",
   "error": "salah-pilih-satuan",
   "suffix": "ℓ"
  },
  {
   "kind": "number",
   "prompt": "2.500 cm³ = ? mL",
   "answer": "2.500",
   "hint": "1 cm³ = 1 mL.",
   "explain": "2.500 cm³ = 2.500 mL.",
   "error": "salah-pilih-satuan",
   "suffix": "mL"
  }
 ],
 "conclusion": "2.500 cm³ = 2,5 ℓ = 2.500 mL."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Akuarium Budi berukuran 40 cm × 25 cm × 30 cm. Akuarium berisi air setinggi 20 cm. Berapa liter air di dalamnya? Berapa liter lagi agar penuh?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Isi satu lapisan = 40 × 25 = ?",
   "answer": "1.000",
   "hint": "4 × 25 = 100.",
   "explain": "1.000 cm³ per 1 cm tinggi.",
   "error": "salah-fakta-kali",
   "suffix": "cm³"
  },
  {
   "kind": "number",
   "prompt": "Air di dalam akuarium = ? ℓ",
   "answer": "20",
   "hint": "1.000 × 20 cm³, lalu bagi 1.000.",
   "explain": "20.000 cm³ = 20 ℓ.",
   "error": "salah-pilih-satuan",
   "suffix": "ℓ"
  },
  {
   "kind": "number",
   "prompt": "Air yang perlu ditambah = ? ℓ",
   "answer": "10",
   "hint": "Bagian kosong setinggi 30 − 20 = 10 cm.",
   "explain": "1.000 × 10 = 10.000 cm³ = 10 ℓ.",
   "error": "salah-langkah-materi",
   "suffix": "ℓ"
  }
 ],
 "conclusion": "Ada 20 ℓ air, perlu 10 ℓ lagi agar penuh."
}
```
