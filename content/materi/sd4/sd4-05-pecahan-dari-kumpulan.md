---
id: sd4-05-pecahan-dari-kumpulan
judul: Pecahan dari Suatu Kumpulan
jenjang: sd4
moe: "Primary 4 · Number and Algebra · Fractions"
prasyarat: [sd3-06-pecahan-senilai, sd3-05-pembagian-bersusun]
durasi_menit: 30
---

## Kenapa belajar ini?

"Tiga perempat dari 20 siswa ikut lomba." "Ibu memakai $\frac{3}{8}$ dari telur di kulkas." Pecahan tidak hanya untuk kue atau martabak. Pecahan juga dipakai untuk sekumpulan benda atau orang.

## Analogi

Bayangkan kamu punya sekumpulan **permen** dan beberapa **kantong** kosong.

Untuk mencari $\frac{3}{4}$ dari 20 permen:

- **Penyebut 4** memberi tahu: siapkan **4 kantong**, lalu bagi permen sama banyak ke setiap kantong.
- **Pembilang 3** memberi tahu: **ambil 3 kantong**.

```anim
{"type": "benda", "op": "÷", "a": 20, "b": 4, "item": "permen", "title": "20 permen dibagi ke 4 kantong"}
```

Setiap kantong berisi 5 permen. Permen di 3 kantong itulah $\frac{3}{4}$ dari 20, yaitu 15 permen.

```visual
{"type": "objects", "item": "permen", "count": 20, "group": 5, "crossed": 5, "caption": "4 kantong berisi 5. Ambil 3 kantong (yang tidak dicoret): 15 permen"}
```

## Konsep

### Pecahan sebagai bagian dari kumpulan

Satu kumpulan dianggap sebagai **satu keseluruhan**. Pecahan menunjukkan bagian dari kumpulan itu.

Contoh: dari 5 bola, 2 berwarna biru. Bola biru adalah $\frac{2}{5}$ dari semua bola.

$$\text{pecahan} = \frac{\text{banyak bagian yang dimaksud}}{\text{banyak semua anggota}}$$

Kalau bisa, tulis dalam **bentuk paling sederhana**.

### Mencari pecahan dari suatu bilangan

Dua langkah, sesuai analogi kantong:

1. **Bagi** banyak benda dengan penyebut. Ini isi satu kantong.
2. **Kalikan** isi satu kantong dengan pembilang.

$$\frac{3}{4} \text{ dari } 20: \quad 20 \div 4 = 5, \quad 5 \times 3 = 15$$

### Model batang

Gambar satu batang untuk seluruh kumpulan. Potong batang menjadi bagian sama banyak sesuai penyebut. Setiap bagian disebut **unit**. Ambil bagian sesuai pembilang.

```anim
{"type": "batang", "bars": [{"label": "20 permen", "units": 4, "unitValue": "5", "known": "20"}, {"label": "3/4 bagian", "units": 3, "unitValue": "5", "known": "15"}], "langkah": [{"say": "Satu batang untuk 20 permen, dipotong menjadi 4 unit sama besar.", "bars": 1}, {"say": "1 unit = 20 ÷ 4 = 5 permen.", "bars": 1}, {"say": "Ambil 3 unit: 3 × 5 = 15 permen.", "bars": 2}], "title": "Model batang: 3/4 dari 20"}
```

Kata **"dari"** pada pecahan artinya kita mengambil bagian dari kumpulan itu.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menulis bagian sebagai pecahan

```soal
{
 "title": "Contoh 1",
 "text": "Budi punya 12 kelereng. 4 di antaranya berwarna merah. Berapa bagian kelereng Budi yang berwarna merah?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Berapa banyak semua kelereng? (ini penyebut)",
   "answer": "12",
   "hint": "Hitung semua kelereng.",
   "explain": "Ada 12 kelereng, jadi penyebutnya 12.",
   "error": "penyebut-bukan-semua-bagian"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Berapa kelereng merah? (ini pembilang)",
   "answer": "4",
   "hint": "Bagian yang dimaksud.",
   "explain": "Ada 4 kelereng merah, jadi pembilangnya 4.",
   "error": "pembilang-penyebut-tertukar"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Tulis pecahannya dalam bentuk paling sederhana.",
   "answer": {
    "num": 1,
    "den": 3
   },
   "hint": "4/12, lalu bagi pembilang dan penyebut dengan 4.",
   "explain": "4/12 = 1/3.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 12 kelereng dimasukkan ke 3 kantong. Isi tiap kantong?",
   "answer": "4",
   "hint": "12 ÷ 3.",
   "explain": "Tiap kantong 4. Kelereng merah tepat mengisi 1 dari 3 kantong. Cocok.",
   "error": "salah-fakta-bagi"
  }
 ],
 "conclusion": "$\\frac{1}{3}$ kelereng Budi berwarna merah.",
 "visual": {
  "type": "objects",
  "item": "kelereng",
  "count": 12,
  "group": 4
 }
}
```

### Contoh 2: Mencari 3/4 dari 20

```soal
{
 "title": "Contoh 2",
 "text": "Ada 20 siswa di kelas 4B. $\\frac{3}{4}$ dari mereka ikut lomba. Berapa siswa yang ikut lomba?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Batang dibagi menjadi berapa unit?",
   "answer": "4",
   "hint": "Lihat penyebutnya.",
   "explain": "Penyebut 4, jadi 4 unit sama besar.",
   "error": "penyebut-bukan-semua-bagian",
   "suffix": "unit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Nilai 1 unit = 20 ÷ 4 = ?",
   "answer": "5",
   "hint": "Bagi 20 siswa ke 4 kantong.",
   "explain": "1 unit = 5 siswa.",
   "error": "salah-fakta-bagi",
   "suffix": "siswa"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Nilai 3 unit = ?",
   "answer": "15",
   "hint": "3 × nilai 1 unit.",
   "explain": "3 × 5 = 15 siswa.",
   "error": "salah-fakta-kali",
   "suffix": "siswa"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: yang tidak ikut 1 unit. 15 + 5 = ?",
   "answer": "20",
   "hint": "Jumlahkan.",
   "explain": "20, sama dengan banyak siswa. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "15 siswa ikut lomba.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "20 siswa",
    "units": 4,
    "unitValue": "?"
   }
  ],
  "total": "20"
 }
}
```

### Contoh 3: Penyebut lebih besar

```soal
{
 "title": "Contoh 3",
 "text": "Berapa $\\frac{5}{8}$ dari 48?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Siapkan berapa kantong (unit)?",
   "answer": "8",
   "hint": "Lihat penyebutnya.",
   "explain": "8 unit.",
   "error": "pembilang-penyebut-tertukar",
   "suffix": "unit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Nilai 1 unit = 48 ÷ 8 = ?",
   "answer": "6",
   "hint": "Delapan kali berapa sama dengan 48?",
   "explain": "48 ÷ 8 = 6.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Ambil 5 unit. 5 × 6 = ?",
   "answer": "30",
   "hint": "Lima kali nilai 1 unit.",
   "explain": "5 × 6 = 30.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 3 unit sisanya bernilai 18. 30 + 18 = ?",
   "answer": "48",
   "hint": "Jumlahkan.",
   "explain": "48. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\frac{5}{8}$ dari 48 adalah 30."
}
```

### Contoh 4: Soal cerita, mencari sisa

```soal
{
 "title": "Contoh 4",
 "text": "Rina punya 36 stiker. Ia memberikan $\\frac{2}{9}$ dari stikernya kepada adiknya. Berapa stiker yang masih dimiliki Rina?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Apa yang ditanya?",
   "options": [
    "Banyak stiker yang tersisa",
    "Banyak stiker yang diberikan",
    "Banyak semua stiker"
   ],
   "answer": "Banyak stiker yang tersisa",
   "hint": "Baca kalimat terakhir soal.",
   "explain": "Yang ditanya sisanya, bukan yang diberikan.",
   "error": "abaikan-keterangan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Nilai 1 unit = 36 ÷ 9 = ?",
   "answer": "4",
   "hint": "Batang dibagi 9 unit.",
   "explain": "1 unit = 4 stiker.",
   "error": "salah-fakta-bagi",
   "suffix": "stiker"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Yang diberikan = 2 unit = ?",
   "answer": "8",
   "hint": "2 × 4.",
   "explain": "8 stiker diberikan.",
   "error": "salah-fakta-kali",
   "suffix": "stiker"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Sisanya = 36 − 8 = ?",
   "answer": "28",
   "hint": "Kurangi semua stiker dengan yang diberikan.",
   "explain": "28 stiker.",
   "error": "salah-fakta-kurang",
   "suffix": "stiker"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: sisa 7 unit. 7 × 4 = ?",
   "answer": "28",
   "hint": "9 − 2 = 7 unit.",
   "explain": "28, sama. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Rina masih punya 28 stiker.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "36 stiker",
    "units": 9,
    "unitValue": "?"
   }
  ],
  "total": "36"
 }
}
```

## Kesalahan yang sering terjadi

- **Membagi dengan pembilang.** Menghitung $\frac{3}{4}$ dari 20 sebagai $20 \div 3$. Yang menentukan banyak kantong adalah **penyebut**: $20 \div 4$. Pembilang menentukan berapa kantong yang diambil.
- **Lupa mengalikan dengan pembilang.** Berhenti di $20 \div 4 = 5$. Itu baru $\frac{1}{4}$. Untuk $\frac{3}{4}$, kalikan lagi dengan 3.
- **Menjawab bagian yang salah.** Soal menanyakan sisa stiker, tetapi menjawab 8 (yang diberikan). Baca lagi pertanyaannya dan tandai di model batang.
- **Penyebut bukan jumlah semua.** Pada Contoh 1, menulis $\frac{4}{8}$ (merah dibanding bukan merah). Penyebut harus banyak **semua** kelereng, yaitu 12.
- **Tidak menyederhanakan.** Menjawab $\frac{4}{12}$. Bentuk paling sederhana adalah $\frac{1}{3}$.

## Ringkasan

- Satu kumpulan benda dianggap sebagai satu keseluruhan.
- Pecahan bagian = banyak bagian yang dimaksud dibagi banyak semua anggota. Sederhanakan.
- Mencari $\frac{a}{b}$ dari suatu bilangan: bagi dengan $b$ (nilai 1 unit), lalu kalikan dengan $a$.
- Model batang: bagi batang sesuai penyebut, arsir sesuai pembilang.
- Untuk mencari sisa: kurangkan dari jumlah semua, atau hitung unit yang tidak diambil.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Ada 24 bola. 9 di antaranya biru. Berapa bagian bola yang berwarna biru? Tulis dalam bentuk paling sederhana.",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Langkah 1: Tulis pecahannya dulu (belum perlu disederhanakan).",
   "answer": {
    "num": 9,
    "den": 24
   },
   "hint": "Pembilang = bola biru, penyebut = semua bola.",
   "explain": "9/24.",
   "error": "pembilang-penyebut-tertukar"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Sederhanakan.",
   "answer": {
    "num": 3,
    "den": 8
   },
   "hint": "Bagi pembilang dan penyebut dengan 3.",
   "explain": "9/24 = 3/8.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "$\\frac{3}{8}$ bola berwarna biru."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Berapa $\\frac{1}{6}$ dari 42?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 1 unit = 42 ÷ 6 = ?",
   "answer": "7",
   "hint": "Enam kali berapa sama dengan 42?",
   "explain": "42 ÷ 6 = 7.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Ambil 1 unit. Hasilnya?",
   "answer": "7",
   "hint": "Pembilangnya 1.",
   "explain": "1 × 7 = 7.",
   "error": "salah-fakta-kali"
  }
 ],
 "conclusion": "$\\frac{1}{6}$ dari 42 adalah 7."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Berapa $\\frac{2}{3}$ dari 27?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 1 unit = 27 ÷ 3 = ?",
   "answer": "9",
   "hint": "Bagi dengan penyebut.",
   "explain": "27 ÷ 3 = 9.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 2 unit = ?",
   "answer": "18",
   "hint": "Kalikan dengan pembilang.",
   "explain": "2 × 9 = 18.",
   "error": "salah-fakta-kali"
  }
 ],
 "conclusion": "$\\frac{2}{3}$ dari 27 adalah 18."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Berapa $\\frac{7}{10}$ dari 60?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 1 unit = 60 ÷ 10 = ?",
   "answer": "6",
   "hint": "Bagi dengan penyebut.",
   "explain": "60 ÷ 10 = 6.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 7 unit = ?",
   "answer": "42",
   "hint": "Kalikan dengan pembilang.",
   "explain": "7 × 6 = 42.",
   "error": "salah-fakta-kali"
  }
 ],
 "conclusion": "$\\frac{7}{10}$ dari 60 adalah 42."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Ibu membeli 32 butir telur. $\\frac{3}{8}$ dari telur itu dipakai untuk membuat kue. Berapa butir telur yang tersisa?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 1 unit = 32 ÷ 8 = ?",
   "answer": "4",
   "hint": "Batang dibagi 8 unit.",
   "explain": "1 unit = 4 butir.",
   "error": "salah-fakta-bagi",
   "suffix": "butir"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Telur yang dipakai = 3 unit = ?",
   "answer": "12",
   "hint": "3 × 4.",
   "explain": "12 butir dipakai.",
   "error": "salah-fakta-kali",
   "suffix": "butir"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Telur yang tersisa = ?",
   "answer": "20",
   "hint": "32 − yang dipakai.",
   "explain": "32 − 12 = 20 butir.",
   "error": "salah-fakta-kurang",
   "suffix": "butir"
  }
 ],
 "conclusion": "Telur yang tersisa 20 butir."
}
```
