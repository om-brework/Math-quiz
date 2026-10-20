---
id: sd5-04-operasi-pecahan
judul: Operasi Hitung Pecahan
jenjang: sd5
moe: "Primary 5 · Number and Algebra · Fractions"
prasyarat: [sd4-04-pecahan-campuran, sd4-05-pecahan-dari-kumpulan, sd4-06-tambah-kurang-pecahan, sd5-03-pecahan-dan-pembagian]
durasi_menit: 45
---

## Kenapa belajar ini?

Resep kue sering memakai takaran seperti $1\frac{1}{2}$ gelas tepung atau $\frac{3}{4}$ sendok gula. Kalau resepnya dibuat dua kali lipat, atau kamu memakai sebagian bahan saja, kamu perlu menjumlah, mengurang, dan mengalikan pecahan.

## Analogi

Bayangkan **cokelat batang berpetak**. Satu batang utuh bernilai 1.

- **Menjumlah dan mengurang:** potongan cokelat baru bisa dihitung bersama kalau **ukuran petaknya sama**. Jadi kita potong ulang supaya petaknya sama kecil. Itulah menyamakan penyebut.
```visual
{"type": "fraction", "shape": "bar", "parts": 3, "shaded": 1, "caption": "1/3 batang: petaknya besar"}
```

```visual
{"type": "fraction", "shape": "bar", "parts": 12, "shaded": 4, "caption": "Dipotong ulang menjadi 12 petak: 1/3 = 4/12"}
```

- **Meminjam:** kalau potongan kecilmu kurang, **patahkan satu batang utuh** menjadi petak-petak kecil.
- **Mengalikan:** "$\frac{2}{3}$ dari $\frac{3}{4}$ batang" artinya ambil $\frac{3}{4}$ batang, lalu ambil $\frac{2}{3}$ dari potongan itu. Petak-petak cokelat menunjukkan hasilnya.

## Konsep

### Menjumlah dan mengurang pecahan campuran

1. Samakan penyebut pecahannya (potong ulang petak cokelat).
2. Jumlahkan atau kurangkan **bilangan bulat** dan **pecahan** secara terpisah.
3. Jika pecahan hasil penjumlahan lebih dari 1, ubah menjadi bilangan bulat dan pecahan.
4. Jika pecahan yang dikurangi lebih besar, **pinjam 1** dari bilangan bulat.

### Mengalikan pecahan dengan bilangan bulat

Kalikan pembilang dengan bilangan bulat. Penyebut tetap.

$$\frac{3}{8} \times 12 = \frac{3 \times 12}{8} = \frac{36}{8} = 4\frac{4}{8} = 4\frac{1}{2}$$

Ini sama dengan "$\frac{3}{8}$ dari 12", seperti pecahan dari suatu kumpulan.

```anim
{"type": "persamaan", "title": "Pecahan dikali bilangan bulat", "baris": [{"tex": "\\frac{3}{8} \\times 12", "say": "Bilangan bulat hanya mengalikan pembilang."}, {"tex": "\\frac{3 \\times 12}{8} = \\frac{36}{8}", "say": "Pembilang 3 × 12 = 36. Penyebut tetap 8.", "op": "kali pembilang"}, {"tex": "4\\frac{4}{8}", "say": "36 ÷ 8 = 4 sisa 4.", "op": "ubah ke campuran"}, {"tex": "4\\frac{1}{2}", "say": "Sederhanakan $\\frac{4}{8}$ menjadi $\\frac{1}{2}$."}]}
```

### Mengalikan pecahan dengan pecahan

Kalikan pembilang dengan pembilang, penyebut dengan penyebut:

$$\frac{a}{b} \times \frac{c}{d} = \frac{a \times c}{b \times d}$$

Kenapa begitu? Lihat cokelat dengan 3 baris dan 4 kolom (12 petak). Arsir 3 kolom untuk $\frac{3}{4}$. Dari bagian itu, ambil 2 baris untuk $\frac{2}{3}$-nya. Petak yang terkena keduanya (X) ada $2 \times 3 = 6$ dari $3 \times 4 = 12$ petak.

```visual
{"type": "grid", "width": 4, "height": 3, "shade": [{"x": 0, "y": 0, "w": 3, "h": 2}], "caption": "3 kolom = 3/4 batang; 2 dari 3 baris = 2/3 bagian itu; 6 dari 12 petak terarsir"}
```

$$\frac{2}{3} \times \frac{3}{4} = \frac{6}{12} = \frac{1}{2}$$

### Mengalikan pecahan campuran dengan bilangan bulat

Ada dua cara:

- **Cara pisah:** kalikan bilangan bulat dan pecahan masing-masing, lalu jumlahkan.
- **Cara ubah:** ubah pecahan campuran menjadi pecahan tidak sejati, lalu kalikan.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menjumlah pecahan campuran

```soal
{
 "title": "Contoh 1",
 "text": "Hitung $2\\frac{1}{3} + 1\\frac{3}{4}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Jumlahkan bilangan bulat. 2 + 1 = ?",
   "answer": "3",
   "hint": "Hitung batang utuhnya dulu.",
   "explain": "Ada 3 batang utuh.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Samakan ukuran petak. KPK dari 3 dan 4?",
   "answer": "12",
   "hint": "Kelipatan 4 yang juga kelipatan 3.",
   "explain": "KPK 3 dan 4 adalah 12.",
   "error": "penyebut-tidak-disamakan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\frac{1}{3} = \\frac{?}{12}$",
   "answer": "4",
   "hint": "3 dikali 4 menjadi 12.",
   "explain": "$\\frac{1}{3} = \\frac{4}{12}$.",
   "error": "salah-pengali-senilai"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $\\frac{3}{4} = \\frac{?}{12}$",
   "answer": "9",
   "hint": "4 dikali 3 menjadi 12.",
   "explain": "$\\frac{3}{4} = \\frac{9}{12}$.",
   "error": "salah-pengali-senilai"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 5: $\\frac{4}{12} + \\frac{9}{12} = ?$ Tulis sebagai pecahan campuran.",
   "answer": {
    "num": 1,
    "den": 12,
    "whole": 1
   },
   "hint": "Jumlahkan pembilangnya saja: 13 per 12.",
   "explain": "$\\frac{13}{12} = 1\\frac{1}{12}$. Cukup untuk 1 batang utuh lagi.",
   "error": "pecahan-penyebut-dijumlah",
   "mixed": true,
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 6: Gabungkan dengan 3 batang utuh.",
   "answer": {
    "num": 1,
    "den": 12,
    "whole": 4
   },
   "hint": "3 + 1 berapa?",
   "explain": "$3 + 1\\frac{1}{12} = 4\\frac{1}{12}$.",
   "error": "lupa-ubah-satu-utuh",
   "mixed": true,
   "simplest": true
  }
 ],
 "conclusion": "Jadi $2\\frac{1}{3} + 1\\frac{3}{4} = 4\\frac{1}{12}$."
}
```

### Contoh 2: Mengurang dengan meminjam

```soal
{
 "title": "Contoh 2",
 "text": "Hitung $4\\frac{1}{6} - 1\\frac{2}{3}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Samakan penyebut. $\\frac{2}{3} = \\frac{?}{6}$",
   "answer": "4",
   "hint": "3 dikali 2 menjadi 6.",
   "explain": "Soal menjadi $4\\frac{1}{6} - 1\\frac{4}{6}$.",
   "error": "salah-pengali-senilai"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Apakah $\\frac{1}{6}$ cukup untuk dikurangi $\\frac{4}{6}$?",
   "options": [
    "Tidak, pinjam 1 batang",
    "Ya, langsung kurangkan",
    "Balik saja: 4/6 − 1/6"
   ],
   "answer": "Tidak, pinjam 1 batang",
   "hint": "Bandingkan 1 petak dengan 4 petak.",
   "explain": "1 petak kurang dari 4 petak, jadi pinjam 1 batang.",
   "error": "kurang-terbalik"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Pinjam 1 batang: $4\\frac{1}{6} = 3\\frac{?}{6}$",
   "answer": "7",
   "hint": "1 batang = 6 petak, ditambah 1 petak.",
   "explain": "$4\\frac{1}{6} = 3\\frac{7}{6}$.",
   "error": "salah-pinjam"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Kurangkan bulat. 3 − 1 = ?",
   "answer": "2",
   "hint": "Bulat dikurangi bulat.",
   "explain": "3 − 1 = 2.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Kurangkan pecahan. $\\frac{7}{6} - \\frac{4}{6} = \\frac{?}{6}$",
   "answer": "3",
   "hint": "Kurangkan pembilangnya.",
   "explain": "7 − 4 = 3, jadi $\\frac{3}{6}$.",
   "error": "pecahan-penyebut-dikurang"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 6: Sederhanakan $2\\frac{3}{6}$.",
   "answer": {
    "num": 1,
    "den": 2,
    "whole": 2
   },
   "hint": "Bagi pembilang dan penyebut dengan 3.",
   "explain": "$2\\frac{3}{6} = 2\\frac{1}{2}$.",
   "error": "pecahan-belum-sederhana",
   "mixed": true,
   "simplest": true
  }
 ],
 "conclusion": "Jadi $4\\frac{1}{6} - 1\\frac{2}{3} = 2\\frac{1}{2}$.",
 "visual": {
  "type": "fraction",
  "shape": "bar",
  "parts": 6,
  "shaded": 25
 }
}
```

### Contoh 3: Pecahan campuran dikali bilangan bulat

```soal
{
 "title": "Contoh 3",
 "text": "Hitung $2\\frac{3}{5} \\times 4$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Kalikan bilangan bulat. 2 × 4 = ?",
   "answer": "8",
   "hint": "Cara pisah: bulat dulu.",
   "explain": "2 × 4 = 8.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Kalikan pecahan. $\\frac{3}{5} \\times 4 = ?$ Tulis sebagai pecahan campuran.",
   "answer": {
    "num": 2,
    "den": 5,
    "whole": 2
   },
   "hint": "Kalikan pembilangnya saja: 3 × 4 = 12.",
   "explain": "$\\frac{12}{5} = 2\\frac{2}{5}$.",
   "error": "salah-langkah-materi",
   "mixed": true,
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Jumlahkan. $8 + 2\\frac{2}{5} = ?$",
   "answer": {
    "num": 2,
    "den": 5,
    "whole": 10
   },
   "hint": "Tambahkan bilangan bulatnya.",
   "explain": "$8 + 2\\frac{2}{5} = 10\\frac{2}{5}$.",
   "error": "salah-fakta-tambah",
   "mixed": true,
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban dengan cara ubah: $2\\frac{3}{5} = \\frac{?}{5}$",
   "answer": "13",
   "hint": "2 × 5 + 3.",
   "explain": "$\\frac{13}{5} \\times 4 = \\frac{52}{5} = 10\\frac{2}{5}$. Sama.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $2\\frac{3}{5} \\times 4 = 10\\frac{2}{5}$."
}
```

### Contoh 4: Pecahan dikali pecahan

```soal
{
 "title": "Contoh 4",
 "text": "Hitung $\\frac{3}{5} \\times \\frac{5}{6}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Kalikan pembilang. 3 × 5 = ?",
   "answer": "15",
   "hint": "Pembilang kali pembilang.",
   "explain": "3 × 5 = 15 petak terkena.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kalikan penyebut. 5 × 6 = ?",
   "answer": "30",
   "hint": "Penyebut kali penyebut.",
   "explain": "Cokelat dibagi menjadi 30 petak.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Sederhanakan $\\frac{15}{30}$.",
   "answer": {
    "num": 1,
    "den": 2
   },
   "hint": "15 dan 30 sama-sama dibagi 15.",
   "explain": "$\\frac{15}{30} = \\frac{1}{2}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: apakah $\\frac{1}{2}$ masuk akal?",
   "options": [
    "Ya, lebih kecil dari kedua pecahan",
    "Tidak, harus lebih besar"
   ],
   "answer": "Ya, lebih kecil dari kedua pecahan",
   "hint": "Mengambil sebagian dari sebagian membuat hasilnya lebih kecil.",
   "explain": "Hasil kali dua pecahan sejati selalu lebih kecil dari keduanya.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\frac{3}{5} \\times \\frac{5}{6} = \\frac{1}{2}$."
}
```

### Contoh 5: Soal cerita

```soal
{
 "title": "Contoh 5",
 "text": "Bu Sari punya $\\frac{3}{4}$ kg tepung. Ia memakai $\\frac{2}{5}$ dari tepung itu untuk membuat kue lapis. Berapa kg tepung yang dipakai? Berapa kg yang tersisa?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Hitungan apa untuk tepung yang dipakai?",
   "options": [
    "$\\frac{2}{5} \\times \\frac{3}{4}$",
    "$\\frac{3}{4} - \\frac{2}{5}$",
    "$\\frac{3}{4} + \\frac{2}{5}$"
   ],
   "answer": "$\\frac{2}{5} \\times \\frac{3}{4}$",
   "hint": "\"Pecahan dari\" berarti dikali.",
   "explain": "$\\frac{2}{5}$ dari $\\frac{3}{4}$ kg = $\\frac{2}{5} \\times \\frac{3}{4}$.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Tepung yang dipakai (paling sederhana).",
   "answer": {
    "num": 3,
    "den": 10
   },
   "hint": "$\\frac{2 \\times 3}{5 \\times 4} = \\frac{6}{20}$, lalu sederhanakan.",
   "explain": "$\\frac{6}{20} = \\frac{3}{10}$ kg.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Untuk menghitung sisa, $\\frac{3}{4} = \\frac{?}{20}$",
   "answer": "15",
   "hint": "4 dikali 5 menjadi 20.",
   "explain": "$\\frac{3}{4} = \\frac{15}{20}$, dan $\\frac{3}{10} = \\frac{6}{20}$.",
   "error": "salah-pengali-senilai"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Sisa tepung $= \\frac{15}{20} - \\frac{6}{20}$",
   "answer": {
    "num": 9,
    "den": 20
   },
   "hint": "Kurangkan pembilangnya.",
   "explain": "Sisanya $\\frac{9}{20}$ kg.",
   "error": "pecahan-penyebut-dikurang",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $\\frac{6}{20} + \\frac{9}{20} = \\frac{?}{20}$",
   "answer": "15",
   "hint": "Dipakai + sisa harus sama dengan semua tepung.",
   "explain": "$\\frac{15}{20} = \\frac{3}{4}$. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Tepung dipakai $\\frac{3}{10}$ kg, sisanya $\\frac{9}{20}$ kg.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Dipakai",
    "units": 2
   },
   {
    "label": "Sisa",
    "units": 3
   }
  ],
  "total": "3/4 kg"
 }
}
```

## Kesalahan yang sering terjadi

- **Menjumlah pembilang dan penyebut.** $\frac{1}{3} + \frac{3}{4} = \frac{4}{7}$. Salah, petaknya belum sama ukuran. Samakan penyebut dulu: $\frac{4}{12} + \frac{9}{12} = \frac{13}{12}$.
- **Membalik pengurangan pecahan.** Pada $4\frac{1}{6} - 1\frac{4}{6}$, menghitung $\frac{4}{6} - \frac{1}{6}$ supaya tidak meminjam. Salah. Pinjam 1 batang: $3\frac{7}{6} - 1\frac{4}{6} = 2\frac{3}{6}$.
- **Hanya mengalikan bilangan bulatnya.** $2\frac{3}{5} \times 4 = 8\frac{3}{5}$. Pecahannya juga harus dikali 4. Yang benar $10\frac{2}{5}$.
- **Mengalikan penyebut dengan bilangan bulat.** $\frac{3}{8} \times 12 = \frac{36}{96}$. Bilangan bulat hanya mengalikan pembilang: $\frac{36}{8}$.
- **Lupa menyederhanakan.** Menjawab $\frac{6}{20}$ atau $2\frac{3}{6}$. Sederhanakan: $\frac{3}{10}$ dan $2\frac{1}{2}$.

## Ringkasan

- Tambah atau kurang pecahan campuran: samakan penyebut, hitung bulat dan pecahan terpisah, pinjam 1 bila perlu.
- Pecahan × bilangan bulat: kalikan pembilang saja.
- Pecahan × pecahan: $\frac{a}{b} \times \frac{c}{d} = \frac{a \times c}{b \times d}$.
- Pecahan campuran × bilangan bulat: cara pisah atau ubah ke pecahan tidak sejati.
- "Pecahan dari" sesuatu berarti dikali. Selalu sederhanakan jawaban akhir.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung $1\\frac{1}{2} + 2\\frac{2}{5}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jumlahkan bilangan bulat.",
   "answer": "3",
   "hint": "1 + 2.",
   "explain": "1 + 2 = 3.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "number",
   "prompt": "$\\frac{1}{2} + \\frac{2}{5} = \\frac{?}{10}$",
   "answer": "9",
   "hint": "$\\frac{1}{2} = \\frac{5}{10}$ dan $\\frac{2}{5} = \\frac{4}{10}$.",
   "explain": "5 + 4 = 9, jadi $\\frac{9}{10}$.",
   "error": "penyebut-tidak-disamakan"
  },
  {
   "kind": "fraction",
   "prompt": "Tulis hasil akhirnya.",
   "answer": {
    "num": 9,
    "den": 10,
    "whole": 3
   },
   "hint": "Gabungkan bulat dan pecahan.",
   "explain": "$3\\frac{9}{10}$.",
   "error": "pecahan-penyebut-dijumlah",
   "mixed": true,
   "simplest": true
  }
 ],
 "conclusion": "Jadi hasilnya $3\\frac{9}{10}$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $5\\frac{1}{4} - 2\\frac{5}{6}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "KPK dari 4 dan 6?",
   "answer": "12",
   "hint": "Kelipatan 6 yang juga kelipatan 4.",
   "explain": "KPK 12: soal menjadi $5\\frac{3}{12} - 2\\frac{10}{12}$.",
   "error": "penyebut-tidak-disamakan"
  },
  {
   "kind": "number",
   "prompt": "$\\frac{3}{12}$ kurang dari $\\frac{10}{12}$. Pinjam 1: $5\\frac{3}{12} = 4\\frac{?}{12}$",
   "answer": "15",
   "hint": "1 = 12 petak, tambah 3 petak.",
   "explain": "$5\\frac{3}{12} = 4\\frac{15}{12}$.",
   "error": "salah-pinjam"
  },
  {
   "kind": "fraction",
   "prompt": "Kurangkan: $4\\frac{15}{12} - 2\\frac{10}{12}$",
   "answer": {
    "num": 5,
    "den": 12,
    "whole": 2
   },
   "hint": "Bulat: 4 − 2. Pecahan: 15 − 10.",
   "explain": "$2\\frac{5}{12}$.",
   "error": "pecahan-penyebut-dikurang",
   "mixed": true,
   "simplest": true
  }
 ],
 "conclusion": "Jadi hasilnya $2\\frac{5}{12}$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung $\\frac{5}{6} \\times 9$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Kalikan pembilang. 5 × 9 = ?",
   "answer": "45",
   "hint": "Penyebut tetap.",
   "explain": "$\\frac{45}{6}$.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "fraction",
   "prompt": "Ubah ke pecahan campuran paling sederhana.",
   "answer": {
    "num": 1,
    "den": 2,
    "whole": 7
   },
   "hint": "45 ÷ 6 = 7 sisa 3, lalu sederhanakan $\\frac{3}{6}$.",
   "explain": "$\\frac{45}{6} = 7\\frac{3}{6} = 7\\frac{1}{2}$.",
   "error": "pecahan-belum-sederhana",
   "mixed": true,
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\frac{5}{6} \\times 9 = 7\\frac{1}{2}$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Hitung $\\frac{3}{5} \\times \\frac{5}{8}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Kalikan pembilang.",
   "answer": "15",
   "hint": "3 × 5.",
   "explain": "3 × 5 = 15.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Kalikan penyebut.",
   "answer": "40",
   "hint": "5 × 8.",
   "explain": "5 × 8 = 40.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "fraction",
   "prompt": "Sederhanakan $\\frac{15}{40}$.",
   "answer": {
    "num": 3,
    "den": 8
   },
   "hint": "Bagi pembilang dan penyebut dengan 5.",
   "explain": "$\\frac{15}{40} = \\frac{3}{8}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "Jadi hasilnya $\\frac{3}{8}$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Satu botol berisi $1\\frac{3}{4}$ liter jus jeruk. Berapa liter jus dalam 6 botol?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Cara pisah: 1 × 6 = ?",
   "answer": "6",
   "hint": "Kalikan bilangan bulat dulu.",
   "explain": "1 × 6 = 6 liter.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "fraction",
   "prompt": "$\\frac{3}{4} \\times 6 = ?$ (pecahan campuran paling sederhana)",
   "answer": {
    "num": 1,
    "den": 2,
    "whole": 4
   },
   "hint": "$\\frac{18}{4} = 4\\frac{2}{4}$.",
   "explain": "$\\frac{18}{4} = 4\\frac{1}{2}$.",
   "error": "pecahan-belum-sederhana",
   "mixed": true,
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Jumlahkan: $6 + 4\\frac{1}{2}$",
   "answer": {
    "num": 1,
    "den": 2,
    "whole": 10
   },
   "hint": "Tambahkan bilangan bulatnya.",
   "explain": "$10\\frac{1}{2}$ liter.",
   "error": "salah-fakta-tambah",
   "mixed": true,
   "simplest": true
  }
 ],
 "conclusion": "Dalam 6 botol ada $10\\frac{1}{2}$ liter jus."
}
```
