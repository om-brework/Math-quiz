---
id: sd3-07-tambah-kurang-pecahan-berkaitan
judul: Penjumlahan dan Pengurangan Pecahan Berkaitan
jenjang: sd3
moe: "Primary 3 · Number and Algebra · Fractions"
prasyarat: [sd3-06-pecahan-senilai, sd2-07-tambah-kurang-pecahan-senama]
durasi_menit: 35
---

## Kenapa belajar ini?

Kakak makan $\frac{1}{2}$ martabak, adik makan $\frac{1}{4}$ martabak. Berapa bagian martabak yang sudah habis? Berapa yang masih tersisa? Untuk menjawabnya, kita perlu menjumlahkan dan mengurangkan pecahan yang penyebutnya berbeda.

## Analogi

Kita pakai lagi **martabak manis**.

Kakak memegang 1 potong besar ($\frac{1}{2}$). Adik memegang 1 potong kecil ($\frac{1}{4}$). Kalau kita bilang "1 potong + 1 potong = 2 potong", itu menyesatkan, karena **ukuran potongannya berbeda**.

```visual
{"type": "fraction", "shape": "circle", "parts": 2, "shaded": 1, "caption": "Potongan kakak: setengah martabak, potongannya besar"}
```

Supaya bisa dihitung, potong besar milik kakak dipotong lagi menjadi 2. Sekarang semua potongan berukuran $\frac{1}{4}$. Kakak punya 2 potong kecil, adik punya 1 potong kecil. Jumlahnya 3 potong kecil, yaitu $\frac{3}{4}$.

```anim
{"type": "pecahan", "parts": 4, "shaded": 3, "shape": "lingkaran", "name": "martabak", "title": "Semua potongan seperempat: 2 milik kakak + 1 milik adik"}
```

Aturannya: **samakan dulu ukuran potongan, baru hitung potongannya.**

## Konsep

### Pecahan berkaitan

Dua pecahan disebut **berkaitan** kalau penyebut yang satu adalah hasil kali penyebut yang lain. Contoh:

- $\frac{1}{2}$ dan $\frac{1}{4}$, karena 2 × 2 = 4
- $\frac{1}{3}$ dan $\frac{5}{12}$, karena 3 × 4 = 12
- $\frac{2}{5}$ dan $\frac{3}{10}$, karena 5 × 2 = 10

Pada pecahan berkaitan, kita cukup mengubah **satu** pecahan, yaitu yang penyebutnya lebih kecil. Penyebut yang besar menjadi penyebut bersama.

```visual
{"type": "fraction", "shape": "bar", "parts": 10, "shaded": 4, "caption": "2 perlima = 4 persepuluh: setiap potong perlima dipotong lagi menjadi 2"}
```

### Langkah menjumlah dan mengurang

1. **Samakan penyebut.** Ubah pecahan yang penyebutnya kecil menjadi pecahan senilai dengan penyebut yang besar.
2. **Hitung pembilang.** Jumlahkan atau kurangkan pembilangnya. Penyebut **tetap**, karena ukuran potongannya tetap.
3. **Sederhanakan.** Tulis jawaban dalam bentuk paling sederhana.

Contoh:

$$\frac{1}{2} + \frac{1}{4} = \frac{2}{4} + \frac{1}{4} = \frac{3}{4}$$

### Satu keseluruhan

Satu martabak utuh bisa ditulis sebagai pecahan: $1 = \frac{2}{2} = \frac{4}{4} = \frac{8}{8}$, dan seterusnya.

Ini berguna untuk mencari **sisa**. Kalau $\frac{3}{8}$ martabak dimakan, sisanya:

$$1 - \frac{3}{8} = \frac{8}{8} - \frac{3}{8} = \frac{5}{8}$$

```visual
{"type": "barModel", "bars": [{"label": "1 martabak", "units": 8, "unitValue": "1/8"}, {"label": "dimakan", "units": 3}, {"label": "sisa", "units": 5, "known": "?"}], "caption": "8 potong, 3 dimakan, sisa 5 potong"}
```

Di materi ini, jumlah pecahan tidak pernah lebih dari 1 keseluruhan.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Penjumlahan sederhana

```soal
{
 "title": "Contoh 1",
 "text": "Hitung $\\frac{3}{10} + \\frac{2}{5}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Penyebutnya 10 dan 5. Penyebut bersamanya berapa?",
   "answer": "10",
   "hint": "5 × 2 = 10.",
   "explain": "Penyebut yang besar, 10, menjadi penyebut bersama.",
   "error": "penyebut-tidak-disamakan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Samakan potongan. $\\frac{2}{5} = \\frac{?}{10}$",
   "answer": "4",
   "hint": "5 dikali 2 menjadi 10, pembilang juga dikali 2.",
   "explain": "2 × 2 = 4, jadi $\\frac{4}{10}$.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Jumlahkan. $\\frac{3}{10} + \\frac{4}{10} = ?$",
   "answer": {
    "num": 7,
    "den": 10
   },
   "hint": "Jumlahkan pembilangnya saja, penyebut tetap.",
   "explain": "3 + 4 = 7, jadi $\\frac{7}{10}$. Sudah paling sederhana.",
   "error": "jumlah-penyebut",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $\\frac{7}{10} - \\frac{4}{10} = \\frac{?}{10}$",
   "answer": "3",
   "hint": "Kurangkan kembali bagian yang ditambahkan.",
   "explain": "7 − 4 = 3, kembali ke $\\frac{3}{10}$. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\frac{3}{10} + \\frac{2}{5} = \\frac{7}{10}$.",
 "visual": {
  "type": "fraction",
  "shape": "bar",
  "parts": 10,
  "shaded": 3
 }
}
```

### Contoh 2: Pengurangan lalu disederhanakan

```soal
{
 "title": "Contoh 2",
 "text": "Hitung $\\frac{5}{6} - \\frac{1}{3}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Penyebutnya 6 dan 3. Penyebut bersamanya berapa?",
   "answer": "6",
   "hint": "3 × 2 = 6.",
   "explain": "Penyebut bersama 6.",
   "error": "penyebut-tidak-disamakan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\frac{1}{3} = \\frac{?}{6}$",
   "answer": "2",
   "hint": "Pembilang juga dikali 2.",
   "explain": "1 × 2 = 2, jadi $\\frac{2}{6}$.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\frac{5}{6} - \\frac{2}{6} = \\frac{?}{6}$",
   "answer": "3",
   "hint": "Kurangkan pembilangnya, penyebut tetap.",
   "explain": "5 − 2 = 3, jadi $\\frac{3}{6}$.",
   "error": "penyebut-tidak-disamakan"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Sederhanakan $\\frac{3}{6}$.",
   "answer": {
    "num": 1,
    "den": 2
   },
   "hint": "3 dan 6 sama-sama bisa dibagi 3.",
   "explain": "3 ÷ 3 = 1 dan 6 ÷ 3 = 2, jadi $\\frac{1}{2}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $\\frac{3}{6} + \\frac{2}{6} = \\frac{?}{6}$",
   "answer": "5",
   "hint": "Jumlahkan hasil dengan bagian yang dikurangi.",
   "explain": "3 + 2 = 5, kembali ke $\\frac{5}{6}$. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\frac{5}{6} - \\frac{1}{3} = \\frac{1}{2}$."
}
```

### Contoh 3: Penyebut 12

```soal
{
 "title": "Contoh 3",
 "text": "Hitung $\\frac{3}{4} - \\frac{5}{12}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Penyebutnya 4 dan 12. Penyebut bersamanya berapa?",
   "answer": "12",
   "hint": "4 × 3 = 12.",
   "explain": "Penyebut bersama 12.",
   "error": "penyebut-tidak-disamakan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\frac{3}{4} = \\frac{?}{12}$",
   "answer": "9",
   "hint": "4 dikali 3 menjadi 12, pembilang juga dikali 3.",
   "explain": "3 × 3 = 9, jadi $\\frac{9}{12}$.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\frac{9}{12} - \\frac{5}{12} = \\frac{?}{12}$",
   "answer": "4",
   "hint": "Kurangkan pembilangnya.",
   "explain": "9 − 5 = 4, jadi $\\frac{4}{12}$.",
   "error": "penyebut-tidak-disamakan"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Sederhanakan $\\frac{4}{12}$.",
   "answer": {
    "num": 1,
    "den": 3
   },
   "hint": "4 dan 12 sama-sama bisa dibagi 4.",
   "explain": "4 ÷ 4 = 1 dan 12 ÷ 4 = 3, jadi $\\frac{1}{3}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $\\frac{4}{12} + \\frac{5}{12} = \\frac{?}{12}$",
   "answer": "9",
   "hint": "Jumlahkan kembali.",
   "explain": "$\\frac{9}{12} = \\frac{3}{4}$. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\frac{3}{4} - \\frac{5}{12} = \\frac{1}{3}$."
}
```

### Contoh 4: Soal cerita dua bagian

```soal
{
 "title": "Contoh 4",
 "text": "Rina makan $\\frac{1}{4}$ kue. Adiknya makan $\\frac{3}{8}$ kue yang sama. a) Berapa bagian kue yang mereka makan? b) Berapa bagian kue yang tersisa?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Samakan potongan. $\\frac{1}{4} = \\frac{?}{8}$",
   "answer": "2",
   "hint": "4 dikali 2 menjadi 8.",
   "explain": "1 × 2 = 2, jadi $\\frac{2}{8}$.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: a) $\\frac{2}{8} + \\frac{3}{8} = ?$",
   "answer": {
    "num": 5,
    "den": 8
   },
   "hint": "Jumlahkan pembilangnya, penyebut tetap 8.",
   "explain": "2 + 3 = 5, jadi $\\frac{5}{8}$ kue dimakan.",
   "error": "jumlah-penyebut",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Satu kue utuh ditulis $\\frac{?}{8}$",
   "answer": "8",
   "hint": "Kue utuh dipotong 8, semua potongan diambil.",
   "explain": "1 = $\\frac{8}{8}$.",
   "error": "satu-utuh-pecahan"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: b) $\\frac{8}{8} - \\frac{5}{8} = ?$",
   "answer": {
    "num": 3,
    "den": 8
   },
   "hint": "Kurangkan pembilangnya.",
   "explain": "8 − 5 = 3, jadi $\\frac{3}{8}$ kue tersisa.",
   "error": "satu-utuh-pecahan",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $\\frac{5}{8} + \\frac{3}{8} = \\frac{?}{8}$",
   "answer": "8",
   "hint": "Dimakan ditambah sisa harus 1 kue.",
   "explain": "$\\frac{8}{8} = 1$. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi a) $\\frac{5}{8}$ kue dimakan, b) $\\frac{3}{8}$ kue tersisa.",
 "visual": {
  "type": "fraction",
  "shape": "circle",
  "parts": 8,
  "shaded": 5
 }
}
```

## Kesalahan yang sering terjadi

- **Menjumlahkan penyebut.** Menulis $\frac{1}{2} + \frac{1}{4} = \frac{2}{6}$. Penyebut menunjukkan ukuran potongan, jadi tidak dijumlahkan. Samakan penyebut, lalu jumlahkan pembilangnya saja: $\frac{3}{4}$.
- **Tidak menyamakan penyebut.** Menulis $\frac{5}{6} - \frac{1}{3} = \frac{4}{6}$ dengan langsung mengurangkan 5 − 1. Potongan perenam dan pertiga berbeda ukuran. Ubah dulu $\frac{1}{3}$ menjadi $\frac{2}{6}$.
- **Hanya mengubah penyebut.** Menulis $\frac{1}{3} = \frac{1}{6}$. Pembilang juga harus dikali 2: $\frac{2}{6}$.
- **Lupa menyederhanakan.** Berhenti di $\frac{3}{6}$. Jawaban terbaik adalah $\frac{1}{2}$.
- **Lupa bahwa 1 utuh bisa ditulis sebagai pecahan.** Bingung menghitung $1 - \frac{5}{8}$. Tulis 1 sebagai $\frac{8}{8}$.

## Ringkasan

- Pecahan hanya bisa dijumlah atau dikurang kalau ukuran potongannya sama, yaitu penyebutnya sama.
- Pada pecahan berkaitan, ubah pecahan berpenyebut kecil ke penyebut yang besar.
- Jumlahkan atau kurangkan **pembilang**. Penyebut tetap.
- Sederhanakan jawaban.
- Satu utuh = $\frac{2}{2} = \frac{4}{4} = \frac{8}{8}$, dan seterusnya. Pakai ini untuk mencari sisa.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung $\\frac{1}{3} + \\frac{1}{6}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: $\\frac{1}{3} = \\frac{?}{6}$",
   "answer": "2",
   "hint": "3 dikali 2 menjadi 6.",
   "explain": "1 × 2 = 2.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\frac{2}{6} + \\frac{1}{6} = \\frac{?}{6}$",
   "answer": "3",
   "hint": "Jumlahkan pembilangnya.",
   "explain": "2 + 1 = 3.",
   "error": "jumlah-penyebut"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Tulis dalam bentuk paling sederhana.",
   "answer": {
    "num": 1,
    "den": 2
   },
   "hint": "3 dan 6 sama-sama bisa dibagi 3.",
   "explain": "$\\frac{3}{6} = \\frac{1}{2}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\frac{1}{3} + \\frac{1}{6} = \\frac{1}{2}$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $\\frac{7}{8} - \\frac{1}{2}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: $\\frac{1}{2} = \\frac{?}{8}$",
   "answer": "4",
   "hint": "2 dikali 4 menjadi 8.",
   "explain": "1 × 4 = 4.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: $\\frac{7}{8} - \\frac{4}{8} = ?$",
   "answer": {
    "num": 3,
    "den": 8
   },
   "hint": "Kurangkan pembilangnya, penyebut tetap.",
   "explain": "7 − 4 = 3, jadi $\\frac{3}{8}$.",
   "error": "penyebut-tidak-disamakan",
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\frac{7}{8} - \\frac{1}{2} = \\frac{3}{8}$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung $\\frac{1}{5} + \\frac{3}{10}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: $\\frac{1}{5} = \\frac{?}{10}$",
   "answer": "2",
   "hint": "5 dikali 2 menjadi 10.",
   "explain": "1 × 2 = 2.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\frac{2}{10} + \\frac{3}{10} = \\frac{?}{10}$",
   "answer": "5",
   "hint": "Jumlahkan pembilangnya.",
   "explain": "2 + 3 = 5.",
   "error": "jumlah-penyebut"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Tulis dalam bentuk paling sederhana.",
   "answer": {
    "num": 1,
    "den": 2
   },
   "hint": "5 dan 10 sama-sama bisa dibagi 5.",
   "explain": "$\\frac{5}{10} = \\frac{1}{2}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\frac{1}{5} + \\frac{3}{10} = \\frac{1}{2}$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Hitung $\\frac{2}{3} - \\frac{5}{12}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: $\\frac{2}{3} = \\frac{?}{12}$",
   "answer": "8",
   "hint": "3 dikali 4 menjadi 12.",
   "explain": "2 × 4 = 8.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\frac{8}{12} - \\frac{5}{12} = \\frac{?}{12}$",
   "answer": "3",
   "hint": "Kurangkan pembilangnya.",
   "explain": "8 − 5 = 3.",
   "error": "penyebut-tidak-disamakan"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Tulis dalam bentuk paling sederhana.",
   "answer": {
    "num": 1,
    "den": 4
   },
   "hint": "3 dan 12 sama-sama bisa dibagi 3.",
   "explain": "$\\frac{3}{12} = \\frac{1}{4}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\frac{2}{3} - \\frac{5}{12} = \\frac{1}{4}$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Pak Budi mengecat pagar. Pagi hari ia mengecat $\\frac{1}{4}$ pagar. Sore hari ia mengecat $\\frac{5}{12}$ pagar. Berapa bagian pagar yang belum dicat?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: $\\frac{1}{4} = \\frac{?}{12}$",
   "answer": "3",
   "hint": "4 dikali 3 menjadi 12.",
   "explain": "1 × 3 = 3.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Sudah dicat $\\frac{3}{12} + \\frac{5}{12} = \\frac{?}{12}$",
   "answer": "8",
   "hint": "Jumlahkan pembilangnya.",
   "explain": "3 + 5 = 8.",
   "error": "jumlah-penyebut"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Pagar utuh ditulis $\\frac{?}{12}$",
   "answer": "12",
   "hint": "Semua potongan diambil.",
   "explain": "1 = $\\frac{12}{12}$.",
   "error": "satu-utuh-pecahan"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Bagian yang belum dicat, dalam bentuk paling sederhana?",
   "answer": {
    "num": 1,
    "den": 3
   },
   "hint": "$\\frac{12}{12} - \\frac{8}{12}$, lalu sederhanakan.",
   "explain": "$\\frac{4}{12} = \\frac{1}{3}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "Pagar yang belum dicat $\\frac{1}{3}$ bagian."
}
```
