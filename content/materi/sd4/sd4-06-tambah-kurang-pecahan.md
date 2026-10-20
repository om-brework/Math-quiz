---
id: sd4-06-tambah-kurang-pecahan
judul: Penjumlahan dan Pengurangan Pecahan
jenjang: sd4
moe: "Primary 4 · Number and Algebra · Fractions"
prasyarat: [sd3-07-tambah-kurang-pecahan-berkaitan, sd4-04-pecahan-campuran]
durasi_menit: 35
---

## Kenapa belajar ini?

Ibu memakai $\frac{3}{4}$ kg tepung untuk kue dan $\frac{7}{8}$ kg untuk roti. Berapa kg tepung seluruhnya? Hasilnya lebih dari 1 kg. Di sini kamu belajar menjumlahkan dan mengurangkan pecahan dengan penyebut berbeda, lalu menulis hasilnya sebagai pecahan campuran.

## Analogi

Bayangkan **kue bolu** yang dipotong-potong. Ada potongan **seperempat** dan ada potongan **seperdelapan**.

Kamu tidak bisa langsung menghitung "3 potong besar + 5 potong kecil = 8 potong", karena ukurannya berbeda. Caranya: **potong lagi** potongan besar sampai ukurannya sama dengan potongan kecil. Satu potong seperempat dipotong dua menjadi dua potong seperdelapan.

```visual
{"type": "fraction", "shape": "bar", "parts": 4, "shaded": 3, "caption": "3 potong seperempat"}
```

```visual
{"type": "fraction", "shape": "bar", "parts": 8, "shaded": 6, "caption": "Setiap potong dibelah dua: 6 potong seperdelapan, panjangnya sama"}
```

Setelah semua potongan **sama besar**, barulah kamu bisa menghitung jumlahnya.

## Konsep

### Penyebut harus sama

Pecahan hanya bisa dijumlah atau dikurang langsung kalau **penyebutnya sama** (ukuran potongannya sama). Lalu:

$$\frac{a}{n} + \frac{b}{n} = \frac{a + b}{n} \qquad \frac{a}{n} - \frac{b}{n} = \frac{a - b}{n}$$

Penyebut **tidak ikut dijumlah**. Ukuran potongan tidak berubah, hanya banyak potongannya.

### Menyamakan penyebut

Pada materi ini, penyebut yang satu adalah **kelipatan** penyebut yang lain. Contoh: 4 dan 8, 3 dan 6, 5 dan 10, 3 dan 12.

Ubah pecahan dengan penyebut kecil menjadi **pecahan senilai** dengan penyebut besar. Kalikan pembilang dan penyebut dengan bilangan yang sama.

$$\frac{3}{4} = \frac{3 \times 2}{4 \times 2} = \frac{6}{8}$$

Ini sama seperti memotong setiap potong seperempat menjadi 2 potong seperdelapan.

```anim
{"type": "pecahan", "parts": 8, "shaded": 6, "shape": "batang", "name": "kue bolu", "title": "6/8: potongan seperdelapan, sama dengan 3/4"}
```

### Hasil lebih dari 1

Kalau pembilang hasilnya lebih besar dari penyebut, ubah menjadi **pecahan campuran**, lalu sederhanakan.

$$\frac{11}{8} = 1\frac{3}{8}$$

```visual
{"type": "fraction", "shape": "bar", "parts": 8, "shaded": 11, "wholes": 2, "caption": "11 potong seperdelapan = 1 utuh dan 3/8"}
```

### Tiga pecahan dengan dua penyebut

Kamu juga bisa menjumlahkan tiga pecahan, asalkan hanya ada dua penyebut berbeda. Caranya sama: samakan semua penyebut, lalu jumlahkan pembilangnya.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Penjumlahan dengan hasil lebih dari 1

```soal
{
 "title": "Contoh 1",
 "text": "Hitung $\\frac{3}{4} + \\frac{5}{8}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Penyebutnya 4 dan 8. Samakan ke penyebut berapa?",
   "answer": "8",
   "hint": "Pilih penyebut yang merupakan kelipatan penyebut lainnya.",
   "explain": "8 adalah kelipatan 4, jadi samakan ke 8.",
   "error": "penyebut-tidak-disamakan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Ubah 3/4 menjadi perdelapan. Isi pembilangnya (penyebut 8).",
   "answer": "6",
   "hint": "Kalikan pembilang dan penyebut dengan 2.",
   "explain": "3/4 = 6/8: setiap seperempat dibelah dua.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Jumlahkan 6/8 + 5/8 (pecahan tidak sejati).",
   "answer": {
    "num": 11,
    "den": 8
   },
   "hint": "Jumlahkan pembilangnya. Penyebut tetap 8.",
   "explain": "6/8 + 5/8 = 11/8.",
   "error": "pecahan-penyebut-dijumlah",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Ubah ke pecahan campuran.",
   "answer": {
    "num": 3,
    "den": 8,
    "whole": 1
   },
   "hint": "11 ÷ 8 = 1 sisa ...",
   "explain": "11/8 = 1 3/8.",
   "error": "salah-langkah-materi",
   "mixed": true,
   "simplest": true
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: apakah 1 3/8 masuk akal?",
   "options": [
    "Ya, antara 1 dan 2",
    "Tidak, harus kurang dari 1"
   ],
   "answer": "Ya, antara 1 dan 2",
   "hint": "3/4 hampir 1, 5/8 lebih dari setengah.",
   "explain": "Jumlahnya pasti lebih dari 1 tetapi kurang dari 2.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\frac{3}{4} + \\frac{5}{8} = 1\\frac{3}{8}$."
}
```

### Contoh 2: Pengurangan

```soal
{
 "title": "Contoh 2",
 "text": "Hitung $\\frac{11}{12} - \\frac{2}{3}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 3 × ? = 12",
   "answer": "4",
   "hint": "12 adalah kelipatan 3.",
   "explain": "3 × 4 = 12, jadi kalikan dengan 4.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Ubah 2/3 menjadi perduabelas. Isi pembilangnya (penyebut 12).",
   "answer": "8",
   "hint": "Kalikan pembilang dan penyebut dengan 4.",
   "explain": "2/3 = 8/12.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: 11/12 − 8/12 = ? (belum disederhanakan)",
   "answer": {
    "num": 3,
    "den": 12
   },
   "hint": "Kurangkan pembilangnya saja.",
   "explain": "11 − 8 = 3, jadi 3/12.",
   "error": "pecahan-penyebut-dikurang"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Sederhanakan.",
   "answer": {
    "num": 1,
    "den": 4
   },
   "hint": "Bagi pembilang dan penyebut dengan 3.",
   "explain": "3/12 = 1/4.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Cek jawaban: 1/4 + 2/3 = ?/12",
   "answer": {
    "num": 11,
    "den": 12
   },
   "hint": "1/4 = 3/12, 2/3 = 8/12.",
   "explain": "3/12 + 8/12 = 11/12. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\frac{11}{12} - \\frac{2}{3} = \\frac{1}{4}$."
}
```

### Contoh 3: Tiga pecahan

```soal
{
 "title": "Contoh 3",
 "text": "Hitung $\\frac{2}{3} + \\frac{5}{6} + \\frac{1}{3}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Penyebut bersama untuk 3 dan 6?",
   "answer": "6",
   "hint": "6 adalah kelipatan 3.",
   "explain": "Samakan ke 6.",
   "error": "penyebut-tidak-disamakan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Ubah 2/3 menjadi perenam. Isi pembilangnya (penyebut 6).",
   "answer": "4",
   "hint": "Kalikan atas dan bawah dengan 2.",
   "explain": "2/3 = 4/6.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Ubah 1/3 menjadi perenam. Isi pembilangnya (penyebut 6).",
   "answer": "2",
   "hint": "Kalikan atas dan bawah dengan 2.",
   "explain": "1/3 = 2/6.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: 4/6 + 5/6 + 2/6 = ? (pecahan tidak sejati)",
   "answer": {
    "num": 11,
    "den": 6
   },
   "hint": "Samakan penyebutnya dulu, lalu jumlahkan pembilangnya saja.",
   "explain": "4 + 5 + 2 = 11, jadi 11/6.",
   "error": "pecahan-penyebut-dijumlah",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 5: Ubah ke pecahan campuran.",
   "answer": {
    "num": 5,
    "den": 6,
    "whole": 1
   },
   "hint": "11 ÷ 6 = 1 sisa ...",
   "explain": "11/6 = 1 5/6.",
   "error": "salah-langkah-materi",
   "mixed": true,
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban dengan cara lain: 2/3 + 1/3 = ?",
   "answer": "1",
   "hint": "Penyebutnya sudah sama: 3/3.",
   "explain": "2/3 + 1/3 = 1, lalu 1 + 5/6 = 1 5/6. Sama.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi hasilnya $1\\frac{5}{6}$."
}
```

### Contoh 4: Soal cerita

```soal
{
 "title": "Contoh 4",
 "text": "Bu Siti memakai $\\frac{3}{4}$ kg tepung untuk kue dan $\\frac{7}{8}$ kg tepung untuk roti. (a) Berapa kg tepung yang ia pakai seluruhnya? (b) Berapa kg lebih banyak tepung untuk roti dibanding untuk kue?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Operasi untuk (a) dan (b)?",
   "options": [
    "(a) tambah, (b) kurang",
    "(a) kurang, (b) tambah",
    "Keduanya tambah"
   ],
   "answer": "(a) tambah, (b) kurang",
   "hint": "'Seluruhnya' dan 'lebih banyak berapa'.",
   "explain": "Seluruhnya = jumlah. Lebih banyak berapa = selisih.",
   "error": "salah-pilih-tambah-kurang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Samakan penyebut. 3/4 = ?/8 Isi pembilangnya (penyebut 8).",
   "answer": "6",
   "hint": "Kalikan atas dan bawah dengan 2.",
   "explain": "3/4 = 6/8: tepung kue 6 kotak.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: (a) 6/8 + 7/8 = ? kg (pecahan campuran)",
   "answer": {
    "num": 5,
    "den": 8,
    "whole": 1
   },
   "hint": "6 + 7 = 13, lalu 13 ÷ 8.",
   "explain": "13/8 = 1 5/8 kg.",
   "error": "pecahan-penyebut-dijumlah",
   "mixed": true,
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: (b) 7/8 − 6/8 = ? kg",
   "answer": {
    "num": 1,
    "den": 8
   },
   "hint": "Kurangkan pembilangnya.",
   "explain": "Roti lebih 1 kotak: 1/8 kg.",
   "error": "pecahan-penyebut-dikurang",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung kotak. 6 + 7 = ?",
   "answer": "13",
   "hint": "Jumlah kotak seperdelapan.",
   "explain": "13 kotak = 8 kotak (1 kg) dan 5 kotak. Cocok dengan 1 5/8.",
   "error": "salah-langkah-materi",
   "suffix": "kotak"
  }
 ],
 "conclusion": "(a) $1\\frac{5}{8}$ kg. (b) $\\frac{1}{8}$ kg.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Kue",
    "units": 6,
    "known": "6/8 kg"
   },
   {
    "label": "Roti",
    "units": 7,
    "known": "7/8 kg"
   }
  ],
  "total": "jumlah ?",
  "question": "selisih ?"
 }
}
```

## Kesalahan yang sering terjadi

- **Menjumlahkan penyebut.** Menulis $\frac{3}{4} + \frac{5}{8} = \frac{8}{12}$. Ini salah, karena potongan yang berbeda ukuran tidak bisa langsung dihitung. Samakan penyebut dulu, lalu jumlahkan pembilangnya saja.
- **Hanya mengubah penyebut.** Menulis $\frac{3}{4} = \frac{3}{8}$. Pembilang juga harus dikalikan: $\frac{3 \times 2}{4 \times 2} = \frac{6}{8}$. Kalau potongannya dibelah dua, banyak potongannya juga jadi dua kali.
- **Membiarkan hasil sebagai pecahan tidak sejati.** Menjawab $\frac{11}{8}$. Soal biasanya meminta pecahan campuran: $1\frac{3}{8}$.
- **Tidak menyederhanakan.** Menjawab $\frac{3}{12}$. Bentuk paling sederhana adalah $\frac{1}{4}$.
- **Salah memilih operasi.** Pada "lebih banyak berapa", menjumlahkan. Kata "lebih banyak berapa" atau "selisih" artinya mengurangkan.

## Ringkasan

- Pecahan hanya bisa dijumlah atau dikurang kalau penyebutnya sama.
- Samakan penyebut dengan pecahan senilai: kalikan pembilang **dan** penyebut dengan bilangan yang sama.
- Jumlahkan atau kurangkan **pembilang** saja. Penyebut tetap.
- Hasil lebih dari 1 ditulis sebagai pecahan campuran.
- Selalu sederhanakan hasil akhir.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung $\\frac{1}{2} + \\frac{3}{4}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Ubah 1/2 menjadi perempat. Isi pembilangnya (penyebut 4).",
   "answer": "2",
   "hint": "Kalikan atas dan bawah dengan 2.",
   "explain": "1/2 = 2/4.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: 2/4 + 3/4 = ? (pecahan campuran)",
   "answer": {
    "num": 1,
    "den": 4,
    "whole": 1
   },
   "hint": "2 + 3 = 5, lalu 5/4.",
   "explain": "5/4 = 1 1/4.",
   "error": "pecahan-penyebut-dijumlah",
   "mixed": true,
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\frac{1}{2} + \\frac{3}{4} = 1\\frac{1}{4}$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $\\frac{7}{10} + \\frac{4}{5}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Ubah 4/5 menjadi persepuluh. Isi pembilangnya (penyebut 10).",
   "answer": "8",
   "hint": "Kalikan atas dan bawah dengan 2.",
   "explain": "4/5 = 8/10.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: 7/10 + 8/10 = ? (pecahan tidak sejati)",
   "answer": {
    "num": 15,
    "den": 10
   },
   "hint": "Samakan penyebutnya dulu, lalu jumlahkan pembilangnya saja.",
   "explain": "15/10.",
   "error": "pecahan-penyebut-dijumlah"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Ubah ke pecahan campuran paling sederhana.",
   "answer": {
    "num": 1,
    "den": 2,
    "whole": 1
   },
   "hint": "15/10 = 1 5/10, lalu sederhanakan 5/10.",
   "explain": "1 5/10 = 1 1/2.",
   "error": "pecahan-belum-sederhana",
   "mixed": true,
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\frac{7}{10} + \\frac{4}{5} = 1\\frac{1}{2}$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung $\\frac{5}{6} - \\frac{7}{12}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Ubah 5/6 menjadi perduabelas. Isi pembilangnya (penyebut 12).",
   "answer": "10",
   "hint": "Kalikan atas dan bawah dengan 2.",
   "explain": "5/6 = 10/12.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: 10/12 − 7/12 = ? (paling sederhana)",
   "answer": {
    "num": 1,
    "den": 4
   },
   "hint": "10 − 7 = 3, lalu sederhanakan 3/12.",
   "explain": "3/12 = 1/4.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\frac{5}{6} - \\frac{7}{12} = \\frac{1}{4}$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Hitung $\\frac{3}{8} + \\frac{1}{4} + \\frac{5}{8}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Ubah 1/4 menjadi perdelapan. Isi pembilangnya (penyebut 8).",
   "answer": "2",
   "hint": "Kalikan atas dan bawah dengan 2.",
   "explain": "1/4 = 2/8.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: 3/8 + 2/8 + 5/8 = ? (pecahan tidak sejati)",
   "answer": {
    "num": 10,
    "den": 8
   },
   "hint": "Samakan penyebutnya dulu, lalu jumlahkan pembilangnya saja.",
   "explain": "10/8.",
   "error": "pecahan-penyebut-dijumlah"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Ubah ke pecahan campuran paling sederhana.",
   "answer": {
    "num": 1,
    "den": 4,
    "whole": 1
   },
   "hint": "10/8 = 1 2/8, lalu sederhanakan.",
   "explain": "1 2/8 = 1 1/4.",
   "error": "pecahan-belum-sederhana",
   "mixed": true,
   "simplest": true
  }
 ],
 "conclusion": "Jadi hasilnya $1\\frac{1}{4}$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Dimas berlari $\\frac{5}{6}$ km pada pagi hari dan $\\frac{2}{3}$ km pada sore hari. Berapa km ia berlari seluruhnya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Operasi apa yang dipakai?",
   "options": [
    "Penjumlahan",
    "Pengurangan"
   ],
   "answer": "Penjumlahan",
   "hint": "'Seluruhnya'.",
   "explain": "Seluruhnya berarti dijumlahkan.",
   "error": "salah-pilih-tambah-kurang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Ubah 2/3 menjadi perenam. Isi pembilangnya (penyebut 6).",
   "answer": "4",
   "hint": "Kalikan atas dan bawah dengan 2.",
   "explain": "2/3 = 4/6.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: 5/6 + 4/6 = ? km (pecahan campuran paling sederhana)",
   "answer": {
    "num": 1,
    "den": 2,
    "whole": 1
   },
   "hint": "9/6 = 1 3/6, lalu sederhanakan.",
   "explain": "9/6 = 1 3/6 = 1 1/2 km.",
   "error": "pecahan-belum-sederhana",
   "mixed": true,
   "simplest": true
  }
 ],
 "conclusion": "Dimas berlari $1\\frac{1}{2}$ km seluruhnya."
}
```
