---
id: sd5-03-pecahan-dan-pembagian
judul: Pecahan dan Pembagian
jenjang: sd5
moe: "Primary 5 · Number and Algebra · Fractions"
prasyarat: [sd3-06-pecahan-senilai, sd4-04-pecahan-campuran, sd4-07-desimal]
durasi_menit: 35
---

## Kenapa belajar ini?

Tidak semua pembagian menghasilkan bilangan bulat. Kalau 3 martabak dibagi untuk 4 anak, setiap anak tidak mendapat satu martabak utuh. Hasil seperti ini paling tepat ditulis sebagai **pecahan**, dan bisa juga diubah menjadi **desimal**.

## Analogi

Bayangkan kamu membagi **martabak** kepada teman-teman.

Kalau martabaknya kurang dari jumlah anak, kamu memotong **setiap martabak** menjadi potongan sebanyak jumlah anak. Lalu setiap anak mengambil **satu potong dari setiap martabak**.

Misalnya 3 martabak untuk 4 anak. Setiap martabak dipotong 4. Setiap anak mendapat 1 potong dari martabak pertama, 1 dari martabak kedua, dan 1 dari martabak ketiga. Jadi setiap anak mendapat 3 potong seperempat, yaitu $\frac{3}{4}$ martabak.

```visual
{"type": "fraction", "shape": "circle", "parts": 4, "shaded": 0, "wholes": 3, "caption": "3 martabak, masing-masing dipotong 4"}
```

```anim
{"type": "pecahan", "parts": 4, "shaded": 3, "shape": "lingkaran", "name": "martabak", "title": "Bagian satu anak: 3 potong seperempat"}
```

## Konsep

### Pembagian sebagai pecahan

Pembagian bilangan bulat bisa langsung ditulis sebagai pecahan:

$$a \div b = \frac{a}{b}$$

- Yang dibagi (jumlah martabak) menjadi **pembilang**.
- Pembagi (jumlah anak) menjadi **penyebut**.

Contoh: $3 \div 4 = \frac{3}{4}$, $2 \div 5 = \frac{2}{5}$.

Kalau yang dibagi lebih besar dari pembagi, hasilnya pecahan tidak sejati. Ubah ke pecahan campuran:

$$7 \div 3 = \frac{7}{3} = 2\frac{1}{3}$$

Artinya setiap anak mendapat 2 martabak utuh dan $\frac{1}{3}$ martabak.

```visual
{"type": "fraction", "shape": "circle", "parts": 3, "shaded": 7, "caption": "7 potong sepertiga = 2 utuh dan 1/3"}
```

### Mengubah pecahan ke desimal, cara 1: penyebut 10, 100, 1.000

Cari pecahan senilai yang penyebutnya 10, 100, atau 1.000.

- $\frac{3}{4} = \frac{3 \times 25}{4 \times 25} = \frac{75}{100} = 0{,}75$
- $\frac{3}{25} = \frac{3 \times 4}{25 \times 4} = \frac{12}{100} = 0{,}12$
- $\frac{3}{8} = \frac{3 \times 125}{8 \times 125} = \frac{375}{1.000} = 0{,}375$

### Mengubah pecahan ke desimal, cara 2: bagi bersusun

Karena $\frac{a}{b} = a \div b$, kita bisa langsung membagi pembilang dengan penyebut. Tambahkan koma dan angka 0 di belakang yang dibagi. Ini seperti memotong sisa martabak menjadi potongan persepuluhan, perseratusan, dan seterusnya.

Contoh $\frac{5}{8} = 5 \div 8$:

```anim
{"type": "persamaan", "title": "Bagi bersusun 5 ÷ 8", "baris": [{"tex": "5 \\div 8 = 0{,}\\dots", "say": "8 tidak muat di 5. Tulis 0 dan koma, lalu 5 menjadi 50 persepuluhan."}, {"tex": "50 \\div 8 = 6 \\text{ sisa } 2", "say": "Angka pertama setelah koma 6. Hasil sementara 0,6.", "op": "0,6"}, {"tex": "20 \\div 8 = 2 \\text{ sisa } 4", "say": "Turunkan 0: sisa 2 menjadi 20. Hasil sementara 0,62.", "op": "0,62"}, {"tex": "40 \\div 8 = 5 \\text{ sisa } 0", "say": "Turunkan 0: sisa 4 menjadi 40. Sisanya habis.", "op": "0,625"}, {"tex": "\\frac{5}{8} = 0{,}625", "say": "Pembagian selesai."}]}
```

Jadi $\frac{5}{8} = 0{,}625$.

Ada pecahan yang pembagiannya tidak pernah habis, misalnya $\frac{2}{3} = 0{,}666\dots$ Untuk pecahan seperti ini, bulatkan sesuai yang diminta: $\frac{2}{3} \approx 0{,}67$ (2 tempat desimal).

### Pecahan campuran ke desimal

Bilangan bulatnya tetap, ubah pecahannya saja: $2\frac{3}{5} = 2 + \frac{6}{10} = 2{,}6$.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Pembagian dengan hasil pecahan

```soal
{
 "title": "Contoh 1",
 "text": "Hitung $3 \\div 4$ dan tulis sebagai pecahan. Bayangkan 3 martabak untuk 4 anak.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Setiap martabak dipotong menjadi berapa bagian?",
   "answer": "4",
   "hint": "Potong sebanyak jumlah anak.",
   "explain": "Ada 4 anak, jadi setiap martabak dipotong 4. Setiap potong $\\frac{1}{4}$.",
   "error": "pembilang-penyebut-tertukar"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Setiap anak mendapat berapa potong?",
   "answer": "3",
   "hint": "Satu anak mengambil satu potong dari setiap martabak.",
   "explain": "Ada 3 martabak, jadi setiap anak mendapat 3 potong.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Tulis bagian satu anak sebagai pecahan.",
   "answer": {
    "num": 3,
    "den": 4
   },
   "hint": "Yang dibagi menjadi pembilang, pembagi menjadi penyebut.",
   "explain": "3 potong seperempat = $\\frac{3}{4}$.",
   "error": "pembilang-penyebut-tertukar",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 4 anak masing-masing $\\frac{3}{4}$. Totalnya berapa martabak?",
   "answer": "3",
   "hint": "$4 \\times \\frac{3}{4} = \\frac{12}{4}$.",
   "explain": "$\\frac{12}{4} = 3$ martabak. Sesuai.",
   "error": "pembilang-penyebut-tertukar"
  }
 ],
 "conclusion": "Jadi $3 \\div 4 = \\frac{3}{4}$.",
 "visual": {
  "type": "fraction",
  "shape": "circle",
  "parts": 4,
  "shaded": 0,
  "wholes": 3
 }
}
```

### Contoh 2: Hasil lebih dari 1

```soal
{
 "title": "Contoh 2",
 "text": "Hitung $7 \\div 3$ dan tulis sebagai pecahan campuran.",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Langkah 1: Tulis sebagai pecahan.",
   "answer": {
    "num": 7,
    "den": 3
   },
   "hint": "Yang dibagi di atas.",
   "explain": "$7 \\div 3 = \\frac{7}{3}$.",
   "error": "pembilang-penyebut-tertukar"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Bagikan martabak utuh dulu. Setiap anak mendapat berapa utuh?",
   "answer": "2",
   "hint": "3 × berapa yang paling dekat ke 7 tanpa lebih?",
   "explain": "3 × 2 = 6, jadi setiap anak mendapat 2 utuh.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Sisa berapa martabak?",
   "answer": "1",
   "hint": "7 dikurangi 6.",
   "explain": "Sisa 1 martabak, dipotong 3 untuk 3 anak.",
   "error": "salah-tafsir-sisa"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Gabungkan. Bagian satu anak?",
   "answer": {
    "num": 1,
    "den": 3,
    "whole": 2
   },
   "hint": "2 utuh ditambah sepertiga.",
   "explain": "Setiap anak mendapat $2\\frac{1}{3}$.",
   "error": "lupa-ubah-satu-utuh",
   "mixed": true,
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $3 \\times 2\\frac{1}{3} = ?$",
   "answer": "7",
   "hint": "3 × 2 = 6, dan $3 \\times \\frac{1}{3} = 1$.",
   "explain": "6 + 1 = 7. Benar.",
   "error": "salah-fakta-kali"
  }
 ],
 "conclusion": "Jadi $7 \\div 3 = \\frac{7}{3} = 2\\frac{1}{3}$."
}
```

### Contoh 3: Pecahan ke desimal

```soal
{
 "title": "Contoh 3",
 "text": "Ubah $\\frac{7}{20}$ dan $\\frac{3}{8}$ ke desimal.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 20 dikali berapa supaya menjadi 100?",
   "answer": "5",
   "hint": "20 × ? = 100.",
   "explain": "20 × 5 = 100.",
   "error": "salah-pengali-senilai"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\frac{7}{20} = \\frac{?}{100}$",
   "answer": "35",
   "hint": "Pembilang juga harus dikali 5.",
   "explain": "$\\frac{7 \\times 5}{20 \\times 5} = \\frac{35}{100}$.",
   "error": "salah-pengali-senilai"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tulis $\\frac{35}{100}$ sebagai desimal.",
   "answer": "0,35",
   "hint": "Perseratusan: dua angka di belakang koma.",
   "explain": "$\\frac{35}{100} = 0{,}35$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Untuk $\\frac{3}{8}$, bagi 3 ÷ 8. Mulai dari 30 ÷ 8 = 3 sisa berapa?",
   "answer": "6",
   "hint": "8 × 3 = 24.",
   "explain": "30 − 24 = 6. Angka pertama setelah koma 3.",
   "error": "salah-kurang-porogapit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Turunkan 0: 60 ÷ 8 = 7 sisa berapa?",
   "answer": "4",
   "hint": "8 × 7 = 56.",
   "explain": "60 − 56 = 4. Angka kedua 7.",
   "error": "salah-kurang-porogapit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 6: Turunkan 0: 40 ÷ 8 = ?",
   "answer": "5",
   "hint": "Delapan kali berapa sama dengan 40?",
   "explain": "40 ÷ 8 = 5 sisa 0. Selesai.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 7: Jadi $\\frac{3}{8}$ = ?",
   "answer": "0,375",
   "hint": "Susun angka setelah koma: 3, 7, 5.",
   "explain": "$\\frac{3}{8} = 0{,}375$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 0,375 × 8 = ?",
   "answer": "3",
   "hint": "0,375 × 8 = 3,000.",
   "explain": "Hasilnya 3, sama dengan pembilang. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\frac{7}{20} = 0{,}35$ dan $\\frac{3}{8} = 0{,}375$."
}
```

### Contoh 4: Soal cerita

```soal
{
 "title": "Contoh 4",
 "text": "Bu Putu punya 5 kg beras. Beras itu dibagi rata ke dalam 8 kantong. Berapa kg beras di setiap kantong? Tulis sebagai pecahan dan desimal.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Hitungan apa yang dipakai?",
   "options": [
    "5 ÷ 8",
    "8 ÷ 5",
    "5 × 8"
   ],
   "answer": "5 ÷ 8",
   "hint": "Berasnya dibagi ke kantong.",
   "explain": "5 kg dibagi rata ke 8 kantong: 5 ÷ 8.",
   "error": "pembilang-penyebut-tertukar"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Tulis sebagai pecahan.",
   "answer": {
    "num": 5,
    "den": 8
   },
   "hint": "Yang dibagi menjadi pembilang.",
   "explain": "$5 \\div 8 = \\frac{5}{8}$ kg.",
   "error": "pembilang-penyebut-tertukar",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Ubah ke desimal.",
   "answer": "0,625",
   "hint": "Bagi bersusun 5 ÷ 8 seperti di bagian Konsep.",
   "explain": "$\\frac{5}{8} = 0{,}625$.",
   "error": "salah-langkah-materi",
   "suffix": "kg"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 8 × 0,625 = ?",
   "answer": "5",
   "hint": "8 × 0,6 = 4,8 dan 8 × 0,025 = 0,2.",
   "explain": "4,8 + 0,2 = 5 kg. Sesuai.",
   "error": "salah-langkah-materi",
   "suffix": "kg"
  }
 ],
 "conclusion": "Setiap kantong berisi $\\frac{5}{8}$ kg atau 0,625 kg beras.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Beras",
    "units": 8,
    "unitValue": "?"
   }
  ],
  "total": "5 kg"
 }
}
```

## Kesalahan yang sering terjadi

- **Membalik pecahan.** Menulis $3 \div 4 = \frac{4}{3}$. Salah, karena yang dibagi (martabak) selalu di atas. Yang benar $\frac{3}{4}$.
- **Menyalin angka langsung jadi desimal.** Menulis $\frac{3}{4} = 3{,}4$ atau $\frac{1}{8} = 0{,}8$. Pecahan bukan dua angka yang dipisah koma. Yang benar $\frac{3}{4} = 0{,}75$ dan $\frac{1}{8} = 0{,}125$.
- **Lupa nol pada perseratusan.** Menulis $\frac{3}{50} = \frac{6}{100} = 0{,}6$. Padahal 0,6 artinya enam persepuluh. Enam perseratus ditulis 0,06.
- **Mengubah penyebut saja.** Menulis $\frac{7}{20} = \frac{7}{100}$. Pembilang juga harus dikali 5: $\frac{35}{100}$.
- **Berhenti terlalu cepat saat bagi bersusun.** Pada $5 \div 8$, berhenti di 0,6 padahal masih ada sisa. Teruskan menurunkan 0 sampai sisanya 0, atau sampai cukup untuk dibulatkan.

## Ringkasan

- $a \div b = \frac{a}{b}$: yang dibagi menjadi pembilang, pembagi menjadi penyebut.
- Jika hasilnya pecahan tidak sejati, ubah ke pecahan campuran: $7 \div 3 = 2\frac{1}{3}$.
- Pecahan ke desimal cara 1: jadikan penyebut 10, 100, atau 1.000.
- Pecahan ke desimal cara 2: bagi pembilang dengan penyebut secara bersusun.
- Cek: hasil dikali pembagi harus sama dengan yang dibagi.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tulis $5 \\div 6$ sebagai pecahan.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Angka 5 (yang dibagi) menjadi apa?",
   "options": [
    "pembilang",
    "penyebut"
   ],
   "answer": "pembilang",
   "hint": "Martabak selalu di atas.",
   "explain": "Yang dibagi menjadi pembilang.",
   "error": "pembilang-penyebut-tertukar"
  },
  {
   "kind": "fraction",
   "prompt": "Tulis pecahannya.",
   "answer": {
    "num": 5,
    "den": 6
   },
   "hint": "Pembilang 5, penyebut 6.",
   "explain": "$5 \\div 6 = \\frac{5}{6}$.",
   "error": "pembilang-penyebut-tertukar",
   "simplest": true
  }
 ],
 "conclusion": "Jadi $5 \\div 6 = \\frac{5}{6}$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Tulis $11 \\div 4$ sebagai pecahan campuran.",
 "steps": [
  {
   "kind": "number",
   "prompt": "11 ÷ 4 = berapa utuh?",
   "answer": "2",
   "hint": "4 × 2 = 8, 4 × 3 = 12.",
   "explain": "Hasil bagi 2.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "number",
   "prompt": "Sisanya?",
   "answer": "3",
   "hint": "11 − 8.",
   "explain": "Sisa 3, menjadi pembilang.",
   "error": "salah-tafsir-sisa"
  },
  {
   "kind": "fraction",
   "prompt": "Tulis pecahan campurannya.",
   "answer": {
    "num": 3,
    "den": 4,
    "whole": 2
   },
   "hint": "Utuh 2, sisa 3 per 4.",
   "explain": "$\\frac{11}{4} = 2\\frac{3}{4}$.",
   "error": "lupa-ubah-satu-utuh",
   "mixed": true,
   "simplest": true
  }
 ],
 "conclusion": "Jadi $11 \\div 4 = 2\\frac{3}{4}$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Ubah $\\frac{2}{5}$ ke desimal.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\frac{2}{5} = \\frac{?}{10}$",
   "answer": "4",
   "hint": "Kali pembilang dan penyebut dengan 2.",
   "explain": "$\\frac{2 \\times 2}{5 \\times 2} = \\frac{4}{10}$.",
   "error": "salah-pengali-senilai"
  },
  {
   "kind": "number",
   "prompt": "Tulis sebagai desimal.",
   "answer": "0,4",
   "hint": "Persepuluhan: satu angka di belakang koma.",
   "explain": "$\\frac{4}{10} = 0{,}4$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\frac{2}{5} = 0{,}4$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Ubah $\\frac{7}{8}$ ke desimal.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\frac{7}{8} = \\frac{?}{1.000}$",
   "answer": "875",
   "hint": "8 × 125 = 1.000, jadi pembilang juga dikali 125.",
   "explain": "7 × 125 = 875.",
   "error": "salah-pengali-senilai"
  },
  {
   "kind": "number",
   "prompt": "Tulis sebagai desimal.",
   "answer": "0,875",
   "hint": "Perseribuan: tiga angka di belakang koma.",
   "explain": "$\\frac{875}{1.000} = 0{,}875$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\frac{7}{8} = 0{,}875$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Pak Made membagi 6 liter susu sama rata ke 5 botol. Berapa liter susu di setiap botol? Tulis sebagai pecahan campuran dan desimal.",
 "steps": [
  {
   "kind": "number",
   "prompt": "6 ÷ 5 = berapa utuh?",
   "answer": "1",
   "hint": "5 muat berapa kali di 6?",
   "explain": "Setiap botol mendapat 1 liter utuh, sisa 1 liter.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "fraction",
   "prompt": "Tulis sebagai pecahan campuran.",
   "answer": {
    "num": 1,
    "den": 5,
    "whole": 1
   },
   "hint": "Sisa 1 liter dibagi 5 botol.",
   "explain": "$6 \\div 5 = \\frac{6}{5} = 1\\frac{1}{5}$.",
   "error": "lupa-ubah-satu-utuh",
   "mixed": true,
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Tulis sebagai desimal.",
   "answer": "1,2",
   "hint": "$\\frac{1}{5} = \\frac{2}{10}$.",
   "explain": "$1\\frac{1}{5} = 1{,}2$.",
   "error": "salah-langkah-materi",
   "suffix": "liter"
  }
 ],
 "conclusion": "Setiap botol berisi $1\\frac{1}{5}$ liter atau 1,2 liter susu."
}
```
