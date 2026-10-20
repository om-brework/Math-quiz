---
id: sd6-06-volume-lanjut
judul: Volume Lanjut
jenjang: sd6
moe: "Primary 6 · Measurement and Geometry · Volume of Cube and Cuboid"
prasyarat: [sd5-09-volume-kubus-balok, sd5-05-desimal-satuan]
durasi_menit: 45
---

## Kenapa belajar ini?

Kamu tahu akuarium berisi 36 liter air. Seberapa tinggi permukaan airnya? Atau, sebuah kotak kubus bervolume 1.000 cm³. Berapa panjang rusuknya? Di kelas 5 kamu menghitung volume dari ukuran. Sekarang kita bekerja **terbalik**: mencari ukuran dari volume.

## Analogi

Bayangkan kamu mengisi kotak dengan **dadu kecil** berukuran 1 cm × 1 cm × 1 cm. Setiap dadu bervolume 1 cm³.

- Dadu disusun di dasar kotak membentuk **satu lapisan**. Banyak dadu di satu lapisan = **luas alas**.
- Lapisan ditumpuk ke atas. Banyak lapisan = **tinggi**.

Kalau kamu tahu jumlah semua dadu dan banyak dadu di satu lapisan, kamu bisa mencari ada berapa lapisan. Dadu ini kita pakai di setiap contoh.

```visual
{"type": "grid", "width": 5, "height": 4, "shade": [{"x": 0, "y": 0, "w": 5, "h": 4}], "showDims": true, "unit": "cm", "caption": "Satu lapisan dadu di dasar kotak 5 cm × 4 cm: 20 dadu. Luas alas = 20 cm². Kalau ditumpuk 3 lapisan, ada 60 dadu."}
```

## Konsep

### Mengingat kembali rumus volume

$$V_{\text{balok}} = p \times l \times t \qquad V_{\text{kubus}} = s \times s \times s$$

Karena $p \times l$ adalah luas alas, kita juga bisa menulis:

$$V = \text{luas alas} \times t$$

Artinya: volume = banyak dadu per lapisan × banyak lapisan.

### Mencari satu ukuran balok

Jika volume dan ukuran lain diketahui, **bagi** volume dengan yang diketahui.

$$t = \frac{V}{\text{luas alas}} \qquad t = \frac{V}{p \times l} \qquad l = \frac{V}{p \times t} \qquad p = \frac{V}{l \times t}$$

```anim
{"type": "persamaan", "title": "Kotak 5 cm × 4 cm berisi 120 dadu. Berapa tingginya?", "baris": [{"tex": "5 \\times 4 \\times t = 120", "say": "Volume = panjang × lebar × tinggi."}, {"tex": "20 \\times t = 120", "say": "Satu lapisan berisi 5 × 4 = 20 dadu.", "op": "$5 \\times 4 = 20$"}, {"tex": "t = 120 \\div 20", "say": "Banyak lapisan = semua dadu ÷ dadu per lapisan.", "op": "kedua sisi $\\div\\,20$"}, {"tex": "t = 6 \\text{ cm}", "say": "Ada 6 lapisan, jadi tingginya 6 cm."}]}
```

### Kuadrat dan akar kuadrat

$7 \times 7 = 49$. Kita tulis $7^2 = 49$, dibaca "7 kuadrat".

Kebalikannya: bilangan berapa yang dikali dirinya sendiri hasilnya 49? Jawabannya 7. Kita tulis $\sqrt{49} = 7$, dibaca "akar kuadrat 49".

Gunanya: jika alas balok berbentuk persegi dengan luas 64 cm², sisinya $\sqrt{64} = 8$ cm.

### Pangkat tiga dan akar pangkat tiga

$5 \times 5 \times 5 = 125$. Kita tulis $5^3 = 125$, dibaca "5 pangkat tiga".

Kebalikannya: $\sqrt[3]{125} = 5$, dibaca "akar pangkat tiga 125".

Gunanya: kubus bervolume 125 cm³ punya rusuk $\sqrt[3]{125} = 5$ cm. Bayangkan kubus besar dari 125 dadu: di tiap rusuk ada 5 dadu.

```visual
{"type": "solid", "solid": "kubus", "caption": "Kubus dari 125 dadu kecil: 5 dadu di setiap rusuk, karena 5 × 5 × 5 = 125."}
```

Hafalkan tabel ini:

```visual
{"type": "table", "head": ["s", "s²", "s³"], "rows": [["1", "1", "1"], ["2", "4", "8"], ["3", "9", "27"], ["4", "16", "64"], ["5", "25", "125"], ["6", "36", "216"], ["7", "49", "343"], ["8", "64", "512"], ["9", "81", "729"], ["10", "100", "1.000"]], "caption": "Kuadrat dan pangkat tiga bilangan 1 sampai 10."}
```

### Satuan volume

$1 \text{ liter} = 1.000 \text{ cm}^3$ dan $1 \text{ ml} = 1 \text{ cm}^3$. Ubah liter ke cm³ sebelum membagi dengan luas alas dalam cm².

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Rusuk kubus dari volume

```soal
{
 "title": "Contoh 1",
 "text": "Sebuah kotak kado berbentuk kubus bervolume 343 cm³. Berapa panjang rusuknya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tulis hubungannya.",
   "options": [
    "$s \\times s \\times s = 343$",
    "$s \\times 3 = 343$",
    "$s \\times s = 343$"
   ],
   "answer": "$s \\times s \\times s = 343$",
   "hint": "Volume kubus = rusuk × rusuk × rusuk.",
   "explain": "Jadi $s = \\sqrt[3]{343}$, bukan 343 ÷ 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung 7 × 7.",
   "answer": "49",
   "hint": "Fakta perkalian.",
   "explain": "7 × 7 = 49.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung 49 × 7.",
   "answer": "343",
   "hint": "49 × 7 = 280 + 63.",
   "explain": "49 × 7 = 343. Jadi 7 × 7 × 7 = 343.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Berapa panjang rusuknya?",
   "answer": "7",
   "hint": "Bilangan yang dikali dirinya sendiri tiga kali menjadi 343.",
   "explain": "Ada 7 dadu di setiap rusuk, jadi rusuk 7 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Jadi panjang rusuknya 7 cm.",
 "visual": {
  "type": "solid",
  "solid": "kubus"
 }
}
```

### Contoh 2: Tinggi balok dari volume dan luas alas

```soal
{
 "title": "Contoh 2",
 "text": "Volume sebuah balok 360 cm³. Luas alasnya 45 cm². Berapa tingginya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Hitungan apa yang dipakai untuk mencari banyak lapisan?",
   "options": [
    "360 ÷ 45",
    "360 × 45",
    "360 − 45"
   ],
   "answer": "360 ÷ 45",
   "hint": "Semua dadu dibagi dadu per lapisan.",
   "explain": "Banyak lapisan = 360 ÷ 45.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung 360 ÷ 45.",
   "answer": "8",
   "hint": "45 × 2 = 90, 45 × 4 = 180, 45 × 8 = ...",
   "explain": "360 ÷ 45 = 8 lapisan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Berapa tinggi balok?",
   "answer": "8",
   "hint": "Setiap lapisan setinggi 1 cm.",
   "explain": "8 lapisan = 8 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 45 × 8 = ?",
   "answer": "360",
   "hint": "40 × 8 + 5 × 8.",
   "explain": "360 cm³. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  }
 ],
 "conclusion": "Jadi tinggi balok 8 cm.",
 "visual": {
  "type": "solid",
  "solid": "balok"
 }
}
```

### Contoh 3: Lebar balok, lalu sisi alas persegi

```soal
{
 "title": "Contoh 3",
 "text": "(a) Volume balok 840 cm³, panjang 12 cm, tinggi 7 cm. Berapa lebarnya? (b) Balok lain beralas persegi, tingginya 10 cm, volumenya 640 cm³. Berapa panjang sisi alasnya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: (a) Kalikan ukuran yang diketahui: 12 × 7 = ?",
   "answer": "84",
   "hint": "Panjang × tinggi.",
   "explain": "12 × 7 = 84.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: (a) Lebar = 840 ÷ 84 = ?",
   "answer": "10",
   "hint": "84 × 10 = ...",
   "explain": "Lebar = 10 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: (b) Luas alas = 640 ÷ 10 = ?",
   "answer": "64",
   "hint": "Volume ÷ tinggi.",
   "explain": "Luas alas 64 cm², satu lapisan berisi 64 dadu.",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: (b) Sisi alas = $\\sqrt{64}$ = ?",
   "answer": "8",
   "hint": "Bilangan berapa dikali dirinya sendiri hasilnya 64?",
   "explain": "8 × 8 = 64, jadi sisi 8 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: (b) 8 × 8 × 10 = ?",
   "answer": "640",
   "hint": "64 × 10.",
   "explain": "640 cm³. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  }
 ],
 "conclusion": "Jadi (a) lebarnya 10 cm, (b) sisi alasnya 8 cm."
}
```

### Contoh 4: Soal cerita akuarium

```soal
{
 "title": "Contoh 4",
 "text": "Akuarium Putu berbentuk balok dengan alas 60 cm × 40 cm. Putu menuang 36 liter air ke dalamnya. Berapa tinggi air di akuarium?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Samakan satuan. 36 liter = ? cm³",
   "answer": "36.000",
   "hint": "1 liter = 1.000 cm³.",
   "explain": "36 × 1.000 = 36.000 cm³.",
   "error": "salah-angka-tukar",
   "suffix": "cm³"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Luas alas = 60 × 40 = ?",
   "answer": "2.400",
   "hint": "6 × 4 = 24, lalu tambah dua nol.",
   "explain": "2.400 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tinggi air = 36.000 ÷ 2.400 = ?",
   "answer": "15",
   "hint": "Coret dua nol: 360 ÷ 24.",
   "explain": "15 lapisan setinggi 1 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 2.400 × 15 = ? cm³",
   "answer": "36.000",
   "hint": "2.400 × 10 + 2.400 × 5.",
   "explain": "36.000 cm³ = 36 liter. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  }
 ],
 "conclusion": "Jadi tinggi air 15 cm.",
 "visual": {
  "type": "solid",
  "solid": "balok"
 }
}
```

## Kesalahan yang sering terjadi

- **Membagi volume kubus dengan 3.** Rusuk kubus 125 cm³ ditulis $125 \div 3$. Salah. Yang dicari bilangan yang dikali dirinya sendiri tiga kali: $5 \times 5 \times 5 = 125$.
- **Membagi luas persegi dengan 2 atau 4.** Sisi persegi luas 64 cm² ditulis $64 \div 4 = 16$. Salah. Sisinya $\sqrt{64} = 8$, karena $8 \times 8 = 64$.
- **Lupa mengubah liter.** Pada Contoh 4, menghitung $36 \div 2.400$. Hasilnya sangat kecil dan tidak masuk akal. Ubah dulu 36 liter menjadi 36.000 cm³.
- **Hanya membagi dengan satu ukuran.** Mencari lebar balok dengan $840 \div 12 = 70$. Salah, karena tinggi belum dipakai. Bagi dengan $p \times t$, yaitu 84.
- **Satuan salah.** Menulis rusuk 7 cm³. Rusuk adalah panjang, jadi satuannya cm.

## Ringkasan

- $V = \text{luas alas} \times t$, jadi $t = V \div \text{luas alas}$.
- Satu ukuran balok yang hilang = volume ÷ (hasil kali dua ukuran lain).
- Rusuk kubus $s = \sqrt[3]{V}$. Sisi alas persegi $= \sqrt{\text{luas alas}}$.
- Hafalkan kuadrat dan pangkat tiga dari 1 sampai 10.
- $1 \text{ liter} = 1.000 \text{ cm}^3$. Samakan satuan sebelum membagi.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Sebuah kubus bervolume 512 cm³. Berapa panjang rusuknya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Rusuknya adalah ...",
   "options": [
    "$\\sqrt[3]{512}$",
    "$512 \\div 3$",
    "$\\sqrt{512}$"
   ],
   "answer": "$\\sqrt[3]{512}$",
   "hint": "Rusuk × rusuk × rusuk = volume.",
   "explain": "Cari bilangan yang dipangkatkan tiga menjadi 512.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Panjang rusuknya = ?",
   "answer": "8",
   "hint": "Lihat tabel pangkat tiga.",
   "explain": "8 × 8 × 8 = 512, jadi rusuk 8 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Jadi rusuknya 8 cm."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Luas sebuah persegi 81 cm². Berapa panjang sisinya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Sisinya adalah ...",
   "options": [
    "$\\sqrt{81}$",
    "$81 \\div 4$",
    "$81 \\div 2$"
   ],
   "answer": "$\\sqrt{81}$",
   "hint": "Sisi × sisi = luas.",
   "explain": "Cari bilangan yang dikuadratkan menjadi 81.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Panjang sisinya = ?",
   "answer": "9",
   "hint": "Bilangan berapa dikali dirinya sendiri = 81?",
   "explain": "9 × 9 = 81, jadi sisi 9 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Jadi sisinya 9 cm."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Volume balok 600 cm³ dan luas alasnya 75 cm². Berapa tingginya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Rumus tinggi adalah ...",
   "options": [
    "V ÷ luas alas",
    "V × luas alas",
    "V − luas alas"
   ],
   "answer": "V ÷ luas alas",
   "hint": "Semua dadu ÷ dadu per lapisan.",
   "explain": "t = V ÷ luas alas.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "Hitung 600 ÷ 75.",
   "answer": "8",
   "hint": "75 × 4 = 300.",
   "explain": "75 × 8 = 600, jadi tinggi 8 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Jadi tingginya 8 cm."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Volume balok 1.008 cm³, panjang 14 cm, lebar 9 cm. Berapa tingginya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Luas alas = 14 × 9 = ?",
   "answer": "126",
   "hint": "10 × 9 + 4 × 9.",
   "explain": "Luas alas 126 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Tinggi = 1.008 ÷ 126 = ?",
   "answer": "8",
   "hint": "126 × 8 = ...",
   "explain": "126 × 8 = 1.008, jadi tinggi 8 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Jadi tingginya 8 cm."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Bak mandi berbentuk kubus berisi penuh 216 liter air. Berapa panjang rusuk bagian dalamnya dalam cm?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Ubah ke cm³: 216 liter = ?",
   "answer": "216.000",
   "hint": "1 liter = 1.000 cm³.",
   "explain": "216.000 cm³.",
   "error": "salah-angka-tukar",
   "suffix": "cm³"
  },
  {
   "kind": "number",
   "prompt": "6 × 6 × 6 = ?",
   "answer": "216",
   "hint": "6 × 6 = 36.",
   "explain": "36 × 6 = 216.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Panjang rusuk = ?",
   "answer": "60",
   "hint": "216.000 = 216 × 1.000, dan 1.000 = 10 × 10 × 10.",
   "explain": "60 × 60 × 60 = 216.000, jadi rusuk 60 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Jadi rusuk bagian dalamnya 60 cm."
}
```
