---
id: smp1-05-persentase
judul: Persentase
jenjang: smp1
moe: "Secondary 1 · Number and Algebra · N3 Percentage"
prasyarat: [sd6-02-persen-lanjut, smp1-04-perbandingan]
durasi_menit: 45
---

## Kenapa belajar ini?

Diskon di toko, kenaikan harga beras, bunga tabungan, dan hasil survei hampir selalu ditulis dalam persen. Kalau kamu paham persen, kamu bisa menilai apakah sebuah diskon benar-benar hemat, atau apakah berita "naik 10%" itu besar atau kecil.

## Analogi

Bayangkan setiap besaran adalah **sebatang cokelat yang dipotong menjadi 100 kotak kecil** yang sama besar. Persen artinya "dari setiap 100". Jadi 30% artinya 30 kotak dari 100 kotak.

```visual
{"type": "grid", "width": 10, "height": 10, "shade": [{"x": 0, "y": 0, "w": 10, "h": 3}], "caption": "30% = 30 kotak dari 100 kotak"}
```

Hal terpenting: **besaran awal selalu kita anggap 100 kotak.**

- Naik 20% berarti kita menambah 20 kotak. Sekarang ada 120 kotak.
- Turun 15% berarti kita mengambil 15 kotak. Sekarang tersisa 85 kotak.
- Kalau kita tahu berapa nilai beberapa kotak, kita bisa mencari nilai 1 kotak, lalu nilai 100 kotak.

```anim
{"type": "batang", "title": "Naik 20% dan turun 15%", "bars": [{"label": "Awal", "units": 20, "known": "100 kotak"}, {"label": "Naik 20%", "units": 24, "known": "120 kotak"}, {"label": "Turun 15%", "units": 17, "known": "85 kotak"}], "langkah": [{"say": "Besaran awal selalu 100 kotak. Setiap bagian batang berisi 5 kotak.", "bars": 1}, {"say": "Naik 20%: tambah 20 kotak (4 bagian), menjadi 120 kotak.", "bars": 2}, {"say": "Turun 15% dari awal: ambil 15 kotak (3 bagian), tersisa 85 kotak.", "bars": 3}]}
```

Analogi ini akan kita pakai di setiap contoh.

## Konsep

### Satu besaran sebagai persen dari besaran lain

Untuk menyatakan $A$ sebagai persen dari $B$, kita bertanya: "Kalau $B$ adalah 100 kotak, $A$ itu berapa kotak?"

$$\text{persen} = \frac{A}{B} \times 100\%$$

$B$ adalah besaran **pembanding** (yang dianggap 100 kotak). Kata kunci biasanya "dari": "18 **dari** 24" berarti $B = 24$.

### Persen lebih dari 100%

Kalau $A$ lebih besar dari $B$, hasilnya lebih dari 100%. Ini wajar. Misalnya tinggi Budi 150 cm dan tinggi adiknya 100 cm. Tinggi Budi adalah $\frac{150}{100} \times 100\% = 150\%$ dari tinggi adiknya. Artinya Budi "punya" 150 kotak, sedangkan adiknya 100 kotak.

### Kenaikan dan penurunan persen

Perubahan selalu dibandingkan dengan **nilai awal**, karena nilai awal itulah yang dianggap 100 kotak.

$$\text{persen perubahan} = \frac{\text{nilai baru} - \text{nilai awal}}{\text{nilai awal}} \times 100\%$$

Kalau hasilnya positif, itu kenaikan. Kalau negatif, itu penurunan.

Cara cepat: nilai setelah naik $r\%$ adalah $(100 + r)\%$ dari nilai awal. Nilai setelah turun $r\%$ adalah $(100 - r)\%$ dari nilai awal.

### Poin persen

Kalau dua besaran **sudah berbentuk persen**, selisihnya disebut **poin persen**. Misalnya persentase siswa yang lulus naik dari 40% menjadi 50%. Selisihnya 10 **poin persen**. Tetapi kenaikan persennya adalah $\frac{10}{40} \times 100\% = 25\%$. Dua angka ini berbeda, jadi berita harus jelas memakai yang mana.

### Persen balik (reverse percentage)

Kadang kita hanya tahu nilai **sesudah** naik atau turun, lalu diminta nilai awal. Pakai analogi kotak:

1. Tentukan nilai akhir itu sama dengan berapa kotak (misalnya 85 kotak).
2. Cari nilai 1 kotak dengan membagi.
3. Kalikan 100 untuk mendapat nilai awal.

```anim
{"type": "persamaan", "title": "Persen balik dengan metode satuan", "baris": [{"tex": "85 \\text{ kotak} = \\text{Rp}229.500", "say": "Setelah diskon 15%, yang dibayar tinggal 85 kotak."}, {"tex": "1 \\text{ kotak} = \\text{Rp}2.700", "say": "Bagi kedua ruas dengan 85.", "op": "÷ 85"}, {"tex": "100 \\text{ kotak} = \\text{Rp}270.000", "say": "Kalikan 100 untuk mendapat harga awal.", "op": "× 100"}]}
```

Ini disebut **metode satuan**. Alasannya: nilai awal selalu 100 kotak, jadi cukup cari harga satu kotak.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menyatakan sebagai persen

```soal
{
 "title": "Contoh 1",
 "text": "Siti menjawab benar 18 dari 24 soal. Berapa persen jawabannya yang benar?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Pembandingnya (100 kotak) adalah berapa soal?",
   "answer": "24",
   "hint": "Lihat kata \"dari\".",
   "explain": "24 soal = 100 kotak.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Tulis $\\frac{18}{24}$ dalam bentuk paling sederhana.",
   "answer": {
    "num": 3,
    "den": 4
   },
   "hint": "Bagi pembilang dan penyebut dengan 6.",
   "explain": "$\\frac{18}{24} = \\frac{3}{4}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\frac{3}{4} \\times 100\\% = ?$",
   "answer": "75",
   "hint": "Seperempat dari 100 adalah 25.",
   "explain": "75%.",
   "error": "salah-langkah-materi",
   "suffix": "%"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 75% dari 24 = ?",
   "answer": "18",
   "hint": "$0{,}75 \\times 24$.",
   "explain": "18, sama dengan soal.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jawaban Siti 75% benar."
}
```

### Contoh 2: Persen kenaikan

```soal
{
 "title": "Contoh 2",
 "text": "Harga beras naik dari Rp12.000 menjadi Rp13.800 per kg. Berapa persen kenaikannya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Nilai yang dianggap 100 kotak adalah",
   "options": [
    "Rp12.000",
    "Rp13.800",
    "Rp1.800"
   ],
   "answer": "Rp12.000",
   "hint": "Perubahan dibandingkan dengan nilai awal.",
   "explain": "Nilai awal Rp12.000.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Besar kenaikan?",
   "answer": "1800",
   "hint": "13.800 − 12.000.",
   "explain": "Rp1.800.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\frac{1.800}{12.000} \\times 100\\% = ?$",
   "answer": "15",
   "hint": "Bagi dengan nilai awal.",
   "explain": "$0{,}15 \\times 100\\% = 15\\%$.",
   "error": "salah-langkah-materi",
   "suffix": "%"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: Rp12.000 × 1,15 = ?",
   "answer": "13800",
   "hint": "Naik 15% berarti 115%.",
   "explain": "Rp13.800. Benar.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Harga beras naik 15%."
}
```

### Contoh 3: Poin persen dan persen

```soal
{
 "title": "Contoh 3",
 "text": "Persentase siswa yang membawa bekal naik dari 40% menjadi 50%. Nyatakan kenaikan ini dalam poin persen dan dalam persen.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Selisih langsung 50% − 40% = ? poin persen",
   "answer": "10",
   "hint": "Kurangkan saja.",
   "explain": "10 poin persen.",
   "error": "salah-langkah-materi",
   "suffix": "poin persen"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Nilai awal (100 kotak) untuk persen perubahan adalah ...%",
   "answer": "40",
   "hint": "Yang lama.",
   "explain": "40% dianggap 100 kotak.",
   "error": "salah-langkah-materi",
   "suffix": "%"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\frac{10}{40} \\times 100\\% = ?$",
   "answer": "25",
   "hint": "Bagi 10 dengan 40.",
   "explain": "Naik 25%.",
   "error": "salah-langkah-materi",
   "suffix": "%"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 40 × 1,25 = ?",
   "answer": "50",
   "hint": "Naik 25% dari 40.",
   "explain": "50. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Naik 10 poin persen, atau naik 25%."
}
```

### Contoh 4: Soal cerita persen balik

```soal
{
 "title": "Contoh 4",
 "text": "Putu membeli sepatu dengan diskon 15%. Ia membayar Rp229.500. Berapa harga sepatu sebelum diskon?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Rp229.500 adalah harga",
   "options": [
    "sesudah diskon",
    "sebelum diskon",
    "besar diskon"
   ],
   "answer": "sesudah diskon",
   "hint": "Putu membayar setelah dipotong.",
   "explain": "Kita mencari harga awal.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Harga yang dibayar setara berapa kotak?",
   "answer": "85",
   "hint": "100 kotak dikurangi 15 kotak diskon.",
   "explain": "85 kotak.",
   "error": "salah-langkah-materi",
   "suffix": "kotak"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Nilai 1 kotak?",
   "answer": "2700",
   "hint": "229.500 ÷ 85.",
   "explain": "Rp2.700.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Harga awal (100 kotak)?",
   "answer": "270000",
   "hint": "Kalikan 100.",
   "explain": "Rp270.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: Rp270.000 − 15% × Rp270.000 = ?",
   "answer": "229500",
   "hint": "Diskon Rp40.500.",
   "explain": "Rp229.500. Cocok.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Harga sebelum diskon Rp270.000."
}
```

## Kesalahan yang sering terjadi

- **Membagi dengan nilai baru.** Pada Contoh 2, menghitung $\frac{1.800}{13.800}$. Ini salah karena pembanding harus nilai awal (100 kotak). Selalu bagi dengan nilai awal.
- **Persen balik dengan menambah persen ke harga akhir.** Menghitung $229.500 + 15\% \times 229.500 = 263.925$. Salah, karena 15% itu dihitung dari harga awal, bukan dari harga diskon. Pakai metode satuan: 85 kotak = Rp229.500.
- **Menganggap naik lalu turun dengan persen sama kembali ke awal.** Rp100.000 naik 20% menjadi Rp120.000, lalu turun 20% menjadi Rp96.000, bukan Rp100.000. Turunnya dihitung dari 120.000, yang punya "kotak" lebih besar.
- **Mencampur poin persen dan persen.** Dari 40% ke 50% bukan "naik 10%". Itu naik 10 poin persen, atau naik 25%.
- **Mengira persen tidak boleh lebih dari 100%.** Persen bagian dari keseluruhan memang paling banyak 100%. Tetapi perbandingan dua besaran atau kenaikan boleh lebih dari 100%.

## Ringkasan

- Persen artinya "per seratus". Anggap nilai pembanding atau nilai awal sebagai 100 kotak.
- $A$ sebagai persen dari $B$: $\frac{A}{B} \times 100\%$.
- Persen perubahan $= \frac{\text{baru} - \text{awal}}{\text{awal}} \times 100\%$.
- Selisih dua persen disebut **poin persen**, berbeda dengan persen perubahan.
- Persen balik: nilai akhir $= (100 \pm r)$ kotak, cari 1 kotak, lalu kalikan 100.
- Selalu cek dengan menghitung maju dari jawabanmu.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Nyatakan 45 sebagai persen dari 36.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Pembandingnya (100 kotak) adalah",
   "options": [
    "36",
    "45"
   ],
   "answer": "36",
   "hint": "Lihat kata \"dari\".",
   "explain": "36 = 100 kotak.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\frac{45}{36} \\times 100\\% = ?$",
   "answer": "125",
   "hint": "$\\frac{45}{36} = 1{,}25$.",
   "explain": "125%. Lebih dari 100% karena 45 > 36.",
   "error": "salah-langkah-materi",
   "suffix": "%"
  }
 ],
 "conclusion": "45 adalah 125% dari 36."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Berat badan Made naik dari 40 kg menjadi 46 kg. Berapa persen kenaikannya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Besar kenaikan?",
   "answer": "6",
   "hint": "46 − 40.",
   "explain": "6 kg.",
   "error": "salah-langkah-materi",
   "suffix": "kg"
  },
  {
   "kind": "number",
   "prompt": "Persen kenaikan?",
   "answer": "15",
   "hint": "Bagi dengan nilai awal 40.",
   "explain": "$\\frac{6}{40} \\times 100\\% = 15\\%$.",
   "error": "salah-langkah-materi",
   "suffix": "%"
  }
 ],
 "conclusion": "Naik 15%."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Harga cabai turun dari Rp60.000 menjadi Rp42.000 per kg. Berapa persen penurunannya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Besar penurunan?",
   "answer": "18000",
   "hint": "60.000 − 42.000.",
   "explain": "Rp18.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Persen penurunan?",
   "answer": "30",
   "hint": "Bagi dengan nilai awal.",
   "explain": "$\\frac{18.000}{60.000} \\times 100\\% = 30\\%$.",
   "error": "salah-langkah-materi",
   "suffix": "%"
  }
 ],
 "conclusion": "Turun 30%."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Tingkat kehadiran naik dari 80% menjadi 92%. Nyatakan kenaikan ini dalam poin persen dan dalam persen.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Kenaikan dalam poin persen?",
   "answer": "12",
   "hint": "92 − 80.",
   "explain": "12 poin persen.",
   "error": "salah-langkah-materi",
   "suffix": "poin persen"
  },
  {
   "kind": "number",
   "prompt": "Kenaikan dalam persen?",
   "answer": "15",
   "hint": "Bagi 12 dengan nilai awal 80.",
   "explain": "$\\frac{12}{80} \\times 100\\% = 15\\%$.",
   "error": "salah-langkah-materi",
   "suffix": "%"
  }
 ],
 "conclusion": "Naik 12 poin persen, atau naik 15%."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Harga sebuah tas setelah ditambah PPN 11% adalah Rp55.500. Berapa harga tas sebelum PPN?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Rp55.500 setara berapa kotak?",
   "answer": "111",
   "hint": "100 kotak ditambah 11 kotak PPN.",
   "explain": "111 kotak.",
   "error": "salah-langkah-materi",
   "suffix": "kotak"
  },
  {
   "kind": "number",
   "prompt": "Nilai 1 kotak?",
   "answer": "500",
   "hint": "55.500 ÷ 111.",
   "explain": "Rp500.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Harga sebelum PPN?",
   "answer": "50000",
   "hint": "100 kotak.",
   "explain": "Rp50.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Harga sebelum PPN Rp50.000."
}
```
