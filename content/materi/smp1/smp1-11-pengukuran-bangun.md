---
id: smp1-11-pengukuran-bangun
judul: "Luas dan Volume: Jajargenjang, Trapesium, Prisma, Tabung"
jenjang: smp1
moe: "Secondary 1 · Geometry and Measurement · G5 Mensuration"
prasyarat: [sd4-09-luas-keliling-gabungan, sd5-08-luas-segitiga, sd5-12-jajargenjang-belah-ketupat-trapesium, sd6-05-lingkaran, sd6-06-volume-lanjut]
durasi_menit: 60
---

## Kenapa belajar ini?

Berapa liter air untuk mengisi kolam renang? Berapa luas seng untuk membuat tandon air? Berapa kotak keramik untuk lantai berbentuk trapesium? Semua pertanyaan ini dijawab dengan rumus luas dan volume. Kalau kamu paham asal rumusnya, kamu tidak perlu menghafal buta.

## Analogi

Kita memakai dua gerakan dengan **kertas dan gunting**:

1. **Potong dan geser** untuk luas. Bangun yang miring dipotong, lalu potongannya digeser sehingga menjadi persegi panjang yang luasnya mudah dihitung. Luas tidak berubah, karena tidak ada kertas yang hilang.
2. **Tumpuk** untuk volume. Prisma dan tabung seperti **tumpukan roti tawar**: setiap lembar bentuknya sama persis. Volume = luas satu lembar × tinggi tumpukan.

```visual
{"type": "solid", "solid": "tabung", "caption": "Tabung seperti tumpukan lembaran lingkaran yang sama: volume = luas satu lembar × tinggi"}
```

Untuk luas permukaan, bayangkan **membuka bungkus kado** sampai menjadi lembaran datar (jaring-jaring), lalu hitung luas semua bagiannya.

## Konsep

### Luas jajargenjang

Potong segitiga di satu ujung jajargenjang, lalu geser ke ujung lain. Hasilnya persegi panjang dengan panjang = alas dan lebar = tinggi.

```anim
{"type": "bangun", "title": "Potong dan geser jajargenjang", "titik": {"A": [0, 0], "B": [6, 0], "C": [8, 3], "D": [2, 3], "H": [2, 0], "E": [8, 0]}, "sisi": [["A", "B", "a"], ["B", "C"], ["C", "D"], ["D", "A"], ["D", "H", "t"], ["B", "E"], ["E", "C"]], "sudut": [{"di": "H", "dari": "B", "ke": "D", "siku": true}], "langkah": [{"say": "Jajargenjang ABCD dengan alas a.", "sisi": 4}, {"say": "Tinggi t adalah garis DH yang tegak lurus alas.", "sisi": 5, "sudut": 1, "sorot": ["DH"]}, {"say": "Potong segitiga ADH, lalu geser ke kanan menempel di sisi BC.", "sisi": 7, "sudut": 1, "sorot": ["BE", "EC"]}, {"say": "Terbentuk persegi panjang HECD dengan panjang a dan lebar t. Luasnya a × t.", "sisi": 7, "sudut": 1, "sorot": ["DH", "EC"]}]}
```

$$L = a \times t$$

**Tinggi** adalah jarak tegak lurus antara alas dan sisi di depannya, bukan panjang sisi miring.

### Luas trapesium

Ambil dua trapesium yang sama. Putar salah satunya, lalu tempelkan. Hasilnya jajargenjang dengan alas $(a + b)$ dan tinggi $t$. Satu trapesium adalah setengahnya:

$$L = \frac{1}{2} (a + b) \times t$$

dengan $a$ dan $b$ panjang dua sisi yang sejajar.

```anim
{"type": "bangun", "title": "Dua trapesium menjadi jajargenjang", "titik": {"A": [0, 0], "B": [5, 0], "C": [4, 3], "D": [1, 3], "E": [9, 3], "F": [8, 0]}, "sisi": [["A", "B", "b"], ["B", "C"], ["C", "D", "a"], ["D", "A"], ["C", "E", "b"], ["E", "F"], ["F", "B", "a"]], "langkah": [{"say": "Trapesium ABCD dengan sisi sejajar a dan b, tinggi t.", "sisi": 4}, {"say": "Salinannya diputar setengah putaran dan ditempel di sisi BC.", "sisi": 7, "sorot": ["CE", "FB"]}, {"say": "Hasilnya jajargenjang dengan alas a + b. Satu trapesium = setengahnya: ½(a + b) × t.", "sisi": 7, "sorot": ["AB", "FB"]}]}
```

### Bangun datar gabungan

Bangun gabungan dipecah menjadi bangun-bangun yang kita kenal. Luas totalnya dijumlah. Kalau ada bagian berlubang, luas lubang dikurangkan.

### Volume prisma dan tabung

**Prisma** adalah bangun ruang yang penampangnya sama di sepanjang tubuhnya. Alasnya bisa segitiga, persegi panjang, trapesium, dan lain-lain. **Tabung** adalah "prisma" dengan alas lingkaran. Dengan analogi tumpukan roti:

$$V_{\text{prisma}} = \text{luas alas} \times \text{tinggi}$$
$$V_{\text{tabung}} = \pi r^2 t$$

### Luas permukaan prisma dan tabung

Buka bungkusnya:

- **Prisma**: dua alas yang sama, ditambah sisi-sisi tegak. Jika semua sisi tegak dibuka berjajar, mereka membentuk satu persegi panjang dengan panjang = keliling alas dan lebar = tinggi prisma.
$$LP_{\text{prisma}} = 2 \times \text{luas alas} + \text{keliling alas} \times \text{tinggi}$$
- **Tabung**: dua lingkaran ditambah selimut. Selimut tabung dibuka menjadi persegi panjang dengan panjang = keliling lingkaran $2\pi r$ dan lebar $t$.
$$LP_{\text{tabung}} = 2\pi r^2 + 2\pi r t$$

### Bangun ruang gabungan

Bangun ruang gabungan, misalnya balok dengan atap setengah tabung, dipecah menjadi bagian-bagian. Volumenya dijumlahkan. Untuk luas permukaan, hitung hanya bagian yang **terlihat dari luar**. Bidang tempel di dalam tidak ikut dihitung.

### Mengubah satuan luas dan volume

```visual
{"type": "table", "head": ["Satuan", "Dikali", "Hasil"], "rows": [["1 m", "100", "100 cm"], ["1 m²", "100 × 100", "10.000 cm²"], ["1 m³", "100 × 100 × 100", "1.000.000 cm³"]], "caption": "Setiap dimensi dikali 100"}
```

$1 \text{ m} = 100 \text{ cm}$. Satu persegi berukuran $1 \text{ m} \times 1 \text{ m}$ sama dengan $100 \text{ cm} \times 100 \text{ cm}$. Jadi

$$1 \text{ m}^2 = 10.000 \text{ cm}^2, \qquad 1 \text{ m}^3 = 100 \times 100 \times 100 = 1.000.000 \text{ cm}^3$$

Juga $1 \text{ liter} = 1.000 \text{ cm}^3$, sehingga $1 \text{ m}^3 = 1.000$ liter.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Luas bangun datar gabungan

```soal
{
 "title": "Contoh 1",
 "text": "Sebuah lahan terdiri dari jajargenjang (alas 12 m, tinggi 7 m) yang menempel pada trapesium (sisi sejajar 8 m dan 14 m, tinggi 6 m). Hitung luas lahan.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Luas lahan dihitung sebagai",
   "options": [
    "luas jajargenjang + luas trapesium",
    "luas jajargenjang − luas trapesium",
    "luas jajargenjang × luas trapesium"
   ],
   "answer": "luas jajargenjang + luas trapesium",
   "hint": "Lahan terdiri dari dua bagian yang menempel.",
   "explain": "Pecah, lalu jumlahkan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Luas jajargenjang?",
   "answer": "84",
   "hint": "Alas × tinggi.",
   "explain": "12 × 7 = 84 m².",
   "error": "salah-langkah-materi",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Luas trapesium?",
   "answer": "66",
   "hint": "½ × (8 + 14) × 6.",
   "explain": "½ × 22 × 6 = 66 m².",
   "error": "salah-langkah-materi",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Luas lahan?",
   "answer": "150",
   "hint": "Jumlahkan.",
   "explain": "84 + 66 = 150 m².",
   "error": "salah-langkah-materi",
   "suffix": "m²"
  }
 ],
 "conclusion": "Luas lahan 150 m²."
}
```

### Contoh 2: Prisma segitiga

```soal
{
 "title": "Contoh 2",
 "text": "Sebuah prisma beralas segitiga siku-siku dengan sisi 6 cm, 8 cm, dan 10 cm. Tinggi prisma 15 cm. Hitung volume dan luas permukaannya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Luas alas segitiga?",
   "answer": "24",
   "hint": "Sisi siku-sikunya 6 dan 8; 10 cm adalah sisi miring.",
   "explain": "½ × 6 × 8 = 24 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Volume?",
   "answer": "360",
   "hint": "Luas alas × tinggi.",
   "explain": "24 × 15 = 360 cm³.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Keliling alas?",
   "answer": "24",
   "hint": "Jumlah ketiga sisi.",
   "explain": "6 + 8 + 10 = 24 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Luas permukaan?",
   "answer": "408",
   "hint": "2 × luas alas + keliling alas × tinggi.",
   "explain": "48 + 360 = 408 cm².",
   "error": "lupa-sisi-bangun",
   "suffix": "cm²"
  }
 ],
 "conclusion": "V = 360 cm³ dan LP = 408 cm²."
}
```

### Contoh 3: Tabung

```soal
{
 "title": "Contoh 3",
 "text": "Sebuah kaleng berbentuk tabung dengan jari-jari 7 cm dan tinggi 10 cm. Gunakan $\\pi = \\frac{22}{7}$. Hitung volume dan luas permukaannya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Luas alas $\\pi r^2$?",
   "answer": "154",
   "hint": "$\\frac{22}{7} \\times 7 \\times 7$.",
   "explain": "154 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Volume?",
   "answer": "1540",
   "hint": "Luas alas × tinggi.",
   "explain": "154 × 10 = 1.540 cm³.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Keliling alas $2\\pi r$?",
   "answer": "44",
   "hint": "$2 \\times \\frac{22}{7} \\times 7$.",
   "explain": "44 cm; selimut = 44 × 10 = 440 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Luas permukaan = 2 × 154 + 440 = ?",
   "answer": "748",
   "hint": "Dua alas ditambah selimut.",
   "explain": "308 + 440 = 748 cm².",
   "error": "lupa-sisi-bangun",
   "suffix": "cm²"
  }
 ],
 "conclusion": "V = 1.540 cm³ dan LP = 748 cm².",
 "visual": {
  "type": "solid",
  "solid": "tabung"
 }
}
```

### Contoh 4: Soal cerita kolam renang

```soal
{
 "title": "Contoh 4",
 "text": "Kolam renang anak panjangnya 10 m dan lebarnya 4 m. Dasarnya miring: di ujung dangkal kedalamannya 0,8 m dan di ujung dalam 1,6 m. Berapa liter air untuk mengisi penuh kolam?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Penampang samping kolam berbentuk",
   "options": [
    "trapesium",
    "persegi panjang",
    "segitiga"
   ],
   "answer": "trapesium",
   "hint": "Dua sisi tegak (0,8 m dan 1,6 m) sejajar.",
   "explain": "Kolam adalah prisma trapesium dengan tebal 4 m.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Luas penampang ½ × (0,8 + 1,6) × 10 = ?",
   "answer": "12",
   "hint": "½ × 2,4 × 10.",
   "explain": "12 m².",
   "error": "salah-langkah-materi",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Volume = 12 × 4 = ?",
   "answer": "48",
   "hint": "Luas penampang × lebar kolam.",
   "explain": "48 m³.",
   "error": "salah-langkah-materi",
   "suffix": "m³"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Ubah ke liter.",
   "answer": "48000",
   "hint": "1 m³ = 1.000 liter.",
   "explain": "48 × 1.000 = 48.000 liter.",
   "error": "salah-pilih-satuan",
   "suffix": "liter"
  }
 ],
 "conclusion": "Perlu 48.000 liter air."
}
```

## Kesalahan yang sering terjadi

- **Memakai sisi miring sebagai tinggi.** Pada jajargenjang, tinggi harus tegak lurus alas. Sisi miring selalu lebih panjang dari tinggi.
- **Lupa $\frac{1}{2}$ pada trapesium.** Menulis $(8 + 14) \times 6 = 132$. Itu luas dua trapesium yang ditempel.
- **Salah konversi satuan.** Menulis $1 \text{ m}^2 = 100 \text{ cm}^2$. Karena panjang dan lebar sama-sama dikali 100, hasilnya $100 \times 100 = 10.000$.
- **Lupa satu alas pada luas permukaan.** Prisma dan tabung tertutup punya **dua** alas. Kalau soalnya tabung tanpa tutup, baru hanya satu.
- **Menghitung bidang tempel pada bangun gabungan.** Bidang yang menempel di dalam tidak terlihat, jadi tidak masuk luas permukaan.

## Ringkasan

- Jajargenjang: $L = a \times t$. Trapesium: $L = \frac{1}{2}(a + b) \times t$.
- Prisma: $V = \text{luas alas} \times \text{tinggi}$. Tabung: $V = \pi r^2 t$.
- Prisma: $LP = 2 \times \text{luas alas} + \text{keliling alas} \times \text{tinggi}$. Tabung: $LP = 2\pi r^2 + 2\pi r t$.
- Bangun gabungan: pecah, hitung tiap bagian, jumlahkan (kurangi lubang).
- $1 \text{ m}^2 = 10.000 \text{ cm}^2$, $1 \text{ m}^3 = 1.000.000 \text{ cm}^3 = 1.000$ liter.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung luas trapesium dengan sisi sejajar 9 cm dan 15 cm serta tinggi 8 cm.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jumlah sisi sejajar?",
   "answer": "24",
   "hint": "9 + 15.",
   "explain": "24 cm.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Luas?",
   "answer": "96",
   "hint": "½ × 24 × 8.",
   "explain": "12 × 8 = 96 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Luasnya 96 cm²."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Ubah $3{,}5 \\text{ m}^2$ ke $\\text{cm}^2$, dan ubah $2.400.000 \\text{ cm}^3$ ke $\\text{m}^3$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "3,5 m² = ? cm²",
   "answer": "35000",
   "hint": "1 m² = 10.000 cm².",
   "explain": "3,5 × 10.000 = 35.000 cm².",
   "error": "salah-satuan-luas",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "2.400.000 cm³ = ? m³",
   "answer": "2,4",
   "hint": "1 m³ = 1.000.000 cm³.",
   "explain": "2.400.000 ÷ 1.000.000 = 2,4 m³.",
   "error": "salah-satuan-luas",
   "suffix": "m³"
  }
 ],
 "conclusion": "35.000 cm² dan 2,4 m³."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Sebuah prisma memiliki alas dengan luas $30 \\text{ cm}^2$ dan tinggi 12 cm. Hitung volumenya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Rumus volume prisma",
   "options": [
    "luas alas × tinggi",
    "keliling alas × tinggi",
    "½ × luas alas × tinggi"
   ],
   "answer": "luas alas × tinggi",
   "hint": "Tumpukan lembar yang sama.",
   "explain": "Luas alas × tinggi.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Volume?",
   "answer": "360",
   "hint": "30 × 12.",
   "explain": "360 cm³.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  }
 ],
 "conclusion": "Volumenya 360 cm³."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Sebuah tabung berjari-jari 14 cm dan tinggi 20 cm. Dengan $\\pi = \\frac{22}{7}$, hitung volume dan luas permukaannya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Luas alas?",
   "answer": "616",
   "hint": "$\\frac{22}{7} \\times 14 \\times 14$.",
   "explain": "616 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Volume?",
   "answer": "12320",
   "hint": "616 × 20.",
   "explain": "12.320 cm³.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  },
  {
   "kind": "number",
   "prompt": "Keliling alas?",
   "answer": "88",
   "hint": "$2 \\times \\frac{22}{7} \\times 14$.",
   "explain": "88 cm; selimut 88 × 20 = 1.760 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Luas permukaan?",
   "answer": "2992",
   "hint": "2 × 616 + 1.760.",
   "explain": "1.232 + 1.760 = 2.992 cm².",
   "error": "lupa-sisi-bangun",
   "suffix": "cm²"
  }
 ],
 "conclusion": "V = 12.320 cm³ dan LP = 2.992 cm²."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Kotak pensil berbentuk balok $20 \\text{ cm} \\times 14 \\text{ cm} \\times 10 \\text{ cm}$ dengan atap setengah tabung berdiameter 14 cm dan panjang 20 cm yang menempel pas di atas balok. Dengan $\\pi = \\frac{22}{7}$, hitung volume kotak pensil.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Volume balok?",
   "answer": "2800",
   "hint": "20 × 14 × 10.",
   "explain": "2.800 cm³.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  },
  {
   "kind": "number",
   "prompt": "Jari-jari setengah tabung?",
   "answer": "7",
   "hint": "Setengah diameter.",
   "explain": "r = 7 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Volume setengah tabung?",
   "answer": "1540",
   "hint": "$\\frac{1}{2} \\times \\frac{22}{7} \\times 7^2 \\times 20$.",
   "explain": "1.540 cm³.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  },
  {
   "kind": "number",
   "prompt": "Volume kotak pensil?",
   "answer": "4340",
   "hint": "Jumlahkan.",
   "explain": "2.800 + 1.540 = 4.340 cm³.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  }
 ],
 "conclusion": "Volume kotak pensil 4.340 cm³."
}
```
