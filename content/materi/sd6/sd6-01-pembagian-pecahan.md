---
id: sd6-01-pembagian-pecahan
judul: Pembagian Pecahan
jenjang: sd6
moe: "Primary 6 · Number and Algebra · Fractions"
prasyarat: [sd5-03-pecahan-dan-pembagian, sd5-04-operasi-pecahan]
durasi_menit: 40
---

## Kenapa belajar ini?

Ibu punya $\frac{3}{4}$ kg gula dan ingin memasukkannya ke kantong kecil berisi $\frac{1}{8}$ kg. Berapa kantong yang dibutuhkan? Pertanyaan seperti ini dijawab dengan pembagian pecahan. Kamu akan memakainya saat memasak, memotong kain, atau membagi minuman.

## Analogi

Bayangkan kamu punya **pita**.

- Kalau pita **dibagi ke beberapa teman**, setiap teman mendapat potongan yang lebih pendek. Ini seperti pecahan dibagi bilangan bulat.
- Kalau pita **dipotong-potong dengan panjang tertentu**, kita bertanya: "Berapa potong yang **muat**?" Ini seperti membagi dengan pecahan.

Contoh: pita 3 meter dipotong-potong, tiap potong $\frac{1}{4}$ meter. Setiap 1 meter berisi 4 potong. Jadi 3 meter berisi $3 \times 4 = 12$ potong.

```visual
{"type": "barModel", "bars": [{"label": "Pita 3 m", "units": 12, "unitValue": "1/4"}], "total": "3 m", "caption": "Pita 3 m dipotong tiap 1/4 m: setiap meter berisi 4 potong, jadi ada 12 potong."}
```

Pita ini akan kita pakai terus di setiap contoh.

## Konsep

### Arti pembagian: "berapa kali muat"

$6 \div 2$ bisa dibaca: "Berapa kali 2 muat di dalam 6?" Jawabannya 3.

Hal yang sama berlaku untuk pecahan. $3 \div \frac{1}{4}$ dibaca: "Berapa kali $\frac{1}{4}$ muat di dalam 3?" Jawabannya 12.

Perhatikan: hasilnya **lebih besar** dari 3. Ini wajar. Potongannya kecil, jadi banyak yang muat.

```anim
{"type": "batang", "title": "Berapa kali 1/4 m muat di 3 m?", "bars": [{"label": "Pita", "units": 12, "unitValue": "1/4"}], "total": "3 m", "langkah": [{"say": "Pita sepanjang 3 m. Kita potong tiap 1/4 m.", "bars": 1, "total": true}, {"say": "1 meter berisi 4 potong. 3 meter berisi 3 × 4 potong.", "bars": 1, "total": true}, {"say": "Hitung semua kotak: ada 12 potong. Jadi 3 ÷ 1/4 = 12.", "bars": 1, "total": true}]}
```

### Kebalikan (resiprokal)

**Kebalikan** sebuah pecahan didapat dengan menukar pembilang dan penyebut.

- Kebalikan dari $\frac{2}{3}$ adalah $\frac{3}{2}$.
- Kebalikan dari $\frac{1}{4}$ adalah $\frac{4}{1} = 4$.
- Kebalikan dari bilangan bulat 5 adalah $\frac{1}{5}$, karena $5 = \frac{5}{1}$.

### Aturan utama: bagi = kali kebalikan

$$\text{yang dibagi} \div \frac{a}{b} = \text{yang dibagi} \times \frac{b}{a}$$

Kenapa begitu? Lihat pita lagi. Satu meter berisi 4 potong $\frac{1}{4}$ m. Jadi membagi dengan $\frac{1}{4}$ sama dengan mengalikan dengan 4.

Untuk potongan $\frac{2}{3}$ m: satu meter berisi $1 \div \frac{2}{3} = \frac{3}{2}$ potong (satu setengah potong). Jadi membagi dengan $\frac{2}{3}$ sama dengan mengalikan dengan $\frac{3}{2}$.

```visual
{"type": "barModel", "bars": [{"label": "1 meter", "units": 3, "unitValue": "1/3"}, {"label": "Potongan 2/3 m", "units": 2, "unitValue": "1/3"}], "caption": "Potongan 2/3 m muat 1 kali penuh di 1 m, dan sisanya setengah potongan: 3/2 kali."}
```

### Tiga jenis soal

1. **Pecahan ÷ bilangan bulat.** $\frac{3}{4} \div 3 = \frac{3}{4} \times \frac{1}{3} = \frac{3}{12} = \frac{1}{4}$. Artinya: pita $\frac{3}{4}$ m dibagi ke 3 anak, tiap anak dapat $\frac{1}{4}$ m.
2. **Bilangan bulat ÷ pecahan.** $3 \div \frac{1}{4} = 3 \times 4 = 12$.
3. **Pecahan ÷ pecahan.** $\frac{3}{4} \div \frac{1}{8} = \frac{3}{4} \times \frac{8}{1} = \frac{24}{4} = 6$.

Yang dibalik **hanya pembagi** (bilangan sesudah tanda ÷). Yang dibagi tetap.

```anim
{"type": "persamaan", "title": "Bagi = kali kebalikan", "baris": [{"tex": "\\frac{3}{4} \\div \\frac{1}{8}", "say": "Soalnya: berapa kali 1/8 muat di 3/4?"}, {"tex": "\\frac{3}{4} \\times \\frac{8}{1}", "say": "Balik pembaginya saja, dan ganti ÷ menjadi ×.", "op": "balik pembagi"}, {"tex": "\\frac{24}{4}", "say": "Kalikan pembilang dengan pembilang, penyebut dengan penyebut."}, {"tex": "6", "say": "Sederhanakan: 24 ÷ 4 = 6. Jadi 6 kantong gula."}]}
```

### Cara mengecek

Pembagian bisa dicek dengan perkalian:

$$\text{hasil} \times \text{pembagi} = \text{yang dibagi}$$

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Pecahan dibagi bilangan bulat

```soal
{
 "title": "Contoh 1",
 "text": "Hitung $\\frac{4}{5} \\div 2$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Bayangkan pita $\\frac{4}{5}$ m dibagi ke 2 anak. Bagian tiap anak lebih besar atau lebih kecil dari $\\frac{4}{5}$ m?",
   "options": [
    "Lebih kecil dari $\\frac{4}{5}$ m",
    "Lebih besar dari $\\frac{4}{5}$ m"
   ],
   "answer": "Lebih kecil dari $\\frac{4}{5}$ m",
   "hint": "Pita yang sama dibagi ke beberapa anak.",
   "explain": "Dibagi ke 2 anak, tiap potongan pasti lebih pendek.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Ubah pembagi. Kebalikan dari 2 adalah ...",
   "answer": {
    "num": 1,
    "den": 2
   },
   "hint": "Tulis 2 sebagai 2/1, lalu tukar pembilang dan penyebut.",
   "explain": "$2 = \\frac{2}{1}$, kebalikannya $\\frac{1}{2}$. Soalnya menjadi $\\frac{4}{5} \\times \\frac{1}{2}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Kalikan. $\\frac{4}{5} \\times \\frac{1}{2} = \\frac{4 \\times 1}{5 \\times 2}$ = ... (belum perlu disederhanakan)",
   "answer": {
    "num": 4,
    "den": 10
   },
   "hint": "Pembilang kali pembilang, penyebut kali penyebut.",
   "explain": "$\\frac{4}{10}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Sederhanakan $\\frac{4}{10}$.",
   "answer": {
    "num": 2,
    "den": 5
   },
   "hint": "Bagi pembilang dan penyebut dengan 2.",
   "explain": "$\\frac{4}{10} = \\frac{2}{5}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Cek jawaban: $\\frac{2}{5} \\times 2$ = ...",
   "answer": {
    "num": 4,
    "den": 5
   },
   "hint": "Kalikan pembilangnya dengan 2.",
   "explain": "$\\frac{4}{5}$, sama dengan yang dibagi. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\frac{4}{5} \\div 2 = \\frac{2}{5}$."
}
```

### Contoh 2: Bilangan bulat dibagi pecahan

```soal
{
 "title": "Contoh 2",
 "text": "Hitung $6 \\div \\frac{3}{4}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Baca artinya. Soal ini bertanya ...",
   "options": [
    "Berapa potong $\\frac{3}{4}$ m yang muat di pita 6 m?",
    "Berapa panjang $\\frac{3}{4}$ dari 6 m?",
    "Berapa 6 m dikurangi $\\frac{3}{4}$ m?"
   ],
   "answer": "Berapa potong $\\frac{3}{4}$ m yang muat di pita 6 m?",
   "hint": "Pembagian artinya berapa kali muat.",
   "explain": "$6 \\div \\frac{3}{4}$ = berapa kali $\\frac{3}{4}$ muat di 6.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Ubah pembagi. Kebalikan dari $\\frac{3}{4}$ adalah ...",
   "answer": {
    "num": 4,
    "den": 3
   },
   "hint": "Tukar pembilang dan penyebut.",
   "explain": "Kebalikannya $\\frac{4}{3}$. Soalnya menjadi $6 \\times \\frac{4}{3}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Kalikan. $6 \\times \\frac{4}{3}$ = ?",
   "answer": "8",
   "hint": "$6 \\times 4 = 24$, lalu bagi 3.",
   "explain": "$\\frac{24}{3} = 8$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Apakah hasil 8 masuk akal?",
   "options": [
    "Ya, potongan lebih pendek dari 1 m, jadi jumlahnya lebih dari 6",
    "Tidak, hasil bagi harus lebih kecil dari 6"
   ],
   "answer": "Ya, potongan lebih pendek dari 1 m, jadi jumlahnya lebih dari 6",
   "hint": "Potongan pendek, berapa banyak yang muat?",
   "explain": "Potongan kecil membuat banyak yang muat. 8 lebih dari 6, masuk akal.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $8 \\times \\frac{3}{4}$ = ?",
   "answer": "6",
   "hint": "$\\frac{24}{4}$ = ...",
   "explain": "Hasilnya 6, sama dengan yang dibagi. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $6 \\div \\frac{3}{4} = 8$."
}
```

### Contoh 3: Pecahan dibagi pecahan

```soal
{
 "title": "Contoh 3",
 "text": "Hitung $\\frac{5}{6} \\div \\frac{2}{9}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Ubah pembagi. Bentuk perkaliannya adalah ...",
   "options": [
    "$\\frac{5}{6} \\times \\frac{9}{2}$",
    "$\\frac{6}{5} \\times \\frac{2}{9}$",
    "$\\frac{5}{6} \\div \\frac{9}{2}$"
   ],
   "answer": "$\\frac{5}{6} \\times \\frac{9}{2}$",
   "hint": "Yang dibalik hanya pembagi, dan ÷ menjadi ×.",
   "explain": "Kebalikan $\\frac{2}{9}$ adalah $\\frac{9}{2}$, tanda menjadi ×.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Sederhanakan silang. 6 dan 9 sama-sama habis dibagi berapa?",
   "answer": "3",
   "hint": "Cari bilangan terbesar yang membagi 6 dan 9.",
   "explain": "Bagi dengan 3: 6 menjadi 2, 9 menjadi 3. Soalnya $\\frac{5}{2} \\times \\frac{3}{2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Kalikan $\\frac{5}{2} \\times \\frac{3}{2}$.",
   "answer": {
    "num": 15,
    "den": 4
   },
   "hint": "Pembilang kali pembilang, penyebut kali penyebut.",
   "explain": "$\\frac{5 \\times 3}{2 \\times 2} = \\frac{15}{4}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Ubah $\\frac{15}{4}$ ke pecahan campuran.",
   "answer": {
    "num": 3,
    "den": 4,
    "whole": 3
   },
   "hint": "15 ÷ 4 = berapa, sisa berapa?",
   "explain": "15 ÷ 4 = 3 sisa 3, jadi $3\\frac{3}{4}$.",
   "error": "salah-langkah-materi",
   "mixed": true,
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Cek jawaban: $\\frac{15}{4} \\times \\frac{2}{9}$ = ... (sederhanakan)",
   "answer": {
    "num": 5,
    "den": 6
   },
   "hint": "$\\frac{30}{36}$, lalu sederhanakan.",
   "explain": "$\\frac{30}{36} = \\frac{5}{6}$, sama dengan yang dibagi. Benar.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\frac{5}{6} \\div \\frac{2}{9} = 3\\frac{3}{4}$."
}
```

### Contoh 4: Soal cerita dengan sisa

```soal
{
 "title": "Contoh 4",
 "text": "Budi punya kain 5 m. Ia memotongnya menjadi potongan $\\frac{2}{3}$ m untuk ikat kepala. Berapa potongan utuh yang ia dapat? Berapa meter kain yang tersisa?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Hitungan apa yang dipakai?",
   "options": [
    "$5 \\div \\frac{2}{3}$",
    "$5 \\times \\frac{2}{3}$",
    "$5 - \\frac{2}{3}$"
   ],
   "answer": "$5 \\div \\frac{2}{3}$",
   "hint": "Ini soal berapa kali muat.",
   "explain": "Berapa kali $\\frac{2}{3}$ m muat di 5 m: $5 \\div \\frac{2}{3}$.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Kali kebalikan. $5 \\times \\frac{3}{2}$ = ... (tulis sebagai pecahan campuran)",
   "answer": {
    "num": 1,
    "den": 2,
    "whole": 7
   },
   "hint": "$\\frac{15}{2}$, lalu 15 ÷ 2 = berapa sisa berapa?",
   "explain": "$\\frac{15}{2} = 7\\frac{1}{2}$.",
   "error": "salah-langkah-materi",
   "mixed": true,
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Berapa potongan utuh yang bisa dipakai?",
   "answer": "7",
   "hint": "Setengah potongan tidak bisa jadi ikat kepala.",
   "explain": "Ada 7 potongan utuh.",
   "error": "salah-tafsir-sisa",
   "suffix": "potong"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Kain yang terpakai: $7 \\times \\frac{2}{3}$ = ... m (pecahan campuran)",
   "answer": {
    "num": 2,
    "den": 3,
    "whole": 4
   },
   "hint": "$\\frac{14}{3}$, lalu 14 ÷ 3.",
   "explain": "$\\frac{14}{3} = 4\\frac{2}{3}$ m.",
   "error": "salah-langkah-materi",
   "mixed": true,
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 5: Sisa kain: $5 - 4\\frac{2}{3}$ = ... m",
   "answer": {
    "num": 1,
    "den": 3
   },
   "hint": "Dari $4\\frac{2}{3}$ ke 5 kurang berapa?",
   "explain": "Sisa $\\frac{1}{3}$ m, sama dengan setengah potongan: $\\frac{1}{2} \\times \\frac{2}{3} = \\frac{1}{3}$.",
   "error": "salah-tafsir-sisa",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $4\\frac{2}{3} + \\frac{1}{3}$ = ? m",
   "answer": "5",
   "hint": "$\\frac{2}{3} + \\frac{1}{3} = 1$.",
   "explain": "Totalnya 5 m, sama dengan panjang kain. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi Budi mendapat 7 potongan utuh, sisa kain $\\frac{1}{3}$ m."
}
```

## Kesalahan yang sering terjadi

- **Membalik pecahan yang salah.** Menulis $\frac{3}{4} \div \frac{1}{8} = \frac{4}{3} \times \frac{1}{8}$. Ini salah karena yang dibalik seharusnya pembagi. Benar: $\frac{3}{4} \times \frac{8}{1} = 6$.
- **Lupa mengganti tanda.** Menulis $\frac{3}{4} \div \frac{1}{8} = \frac{3}{4} \div \frac{8}{1}$. Kalau pembagi dibalik, tanda ÷ harus menjadi ×.
- **Mengalikan, bukan membagi, dengan bilangan bulat.** Menulis $\frac{3}{4} \div 3 = \frac{9}{4}$. Hasil ini malah lebih besar, padahal pita dibagi ke 3 anak harus jadi lebih pendek. Benar: $\frac{3}{4} \times \frac{1}{3} = \frac{1}{4}$.
- **Mengira hasil bagi selalu lebih kecil.** Banyak anak ragu karena $6 \div \frac{3}{4} = 8$ lebih besar dari 6. Ingat pita: potongan pendek, jadi banyak yang muat.
- **Salah menghitung sisa pada soal cerita.** Pada Contoh 4, menjawab sisa $\frac{1}{2}$ m. Padahal $\frac{1}{2}$ itu "setengah potongan", bukan setengah meter. Ubah ke meter: $\frac{1}{2} \times \frac{2}{3} = \frac{1}{3}$ m.

## Ringkasan

- Membagi dengan pecahan artinya bertanya "berapa kali muat".
- Aturan: $\div \frac{a}{b}$ sama dengan $\times \frac{b}{a}$. Hanya pembagi yang dibalik.
- Pecahan ÷ bilangan bulat $n$: kalikan dengan $\frac{1}{n}$.
- Sederhanakan silang sebelum mengalikan supaya angkanya kecil.
- Cek: hasil × pembagi = yang dibagi.
- Di soal cerita, pikirkan arti potongan yang tidak utuh.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung $\\frac{6}{7} \\div 3$.",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Kebalikan dari 3 adalah ...",
   "answer": {
    "num": 1,
    "den": 3
   },
   "hint": "Tulis 3 sebagai 3/1, lalu balik.",
   "explain": "Soalnya menjadi $\\frac{6}{7} \\times \\frac{1}{3}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Hitung $\\frac{6}{7} \\times \\frac{1}{3}$ dalam bentuk paling sederhana.",
   "answer": {
    "num": 2,
    "den": 7
   },
   "hint": "$\\frac{6}{21}$, lalu bagi atas dan bawah dengan 3.",
   "explain": "$\\frac{6}{21} = \\frac{2}{7}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\frac{6}{7} \\div 3 = \\frac{2}{7}$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $4 \\div \\frac{2}{5}$.",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Kebalikan dari $\\frac{2}{5}$ adalah ...",
   "answer": {
    "num": 5,
    "den": 2
   },
   "hint": "Tukar pembilang dan penyebut.",
   "explain": "Soalnya menjadi $4 \\times \\frac{5}{2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Hitung $4 \\times \\frac{5}{2}$.",
   "answer": "10",
   "hint": "$\\frac{20}{2}$ = ...",
   "explain": "$\\frac{20}{2} = 10$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $4 \\div \\frac{2}{5} = 10$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung $\\frac{3}{5} \\div \\frac{3}{10}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Ubah menjadi perkalian.",
   "options": [
    "$\\frac{3}{5} \\times \\frac{10}{3}$",
    "$\\frac{5}{3} \\times \\frac{3}{10}$",
    "$\\frac{3}{5} \\times \\frac{3}{10}$"
   ],
   "answer": "$\\frac{3}{5} \\times \\frac{10}{3}$",
   "hint": "Balik pembaginya saja.",
   "explain": "Kebalikan $\\frac{3}{10}$ adalah $\\frac{10}{3}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Hitung hasilnya.",
   "answer": "2",
   "hint": "$\\frac{30}{15}$ = ...",
   "explain": "$\\frac{30}{15} = 2$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\frac{3}{5} \\div \\frac{3}{10} = 2$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Hitung $\\frac{7}{8} \\div \\frac{1}{3}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Kebalikan dari $\\frac{1}{3}$ adalah bilangan bulat ...",
   "answer": "3",
   "hint": "$\\frac{3}{1}$ = ...",
   "explain": "$\\frac{3}{1} = 3$, jadi soalnya $\\frac{7}{8} \\times 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Hitung $\\frac{7}{8} \\times 3$.",
   "answer": {
    "num": 21,
    "den": 8
   },
   "hint": "Kalikan pembilangnya dengan 3.",
   "explain": "$\\frac{21}{8}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Ubah $\\frac{21}{8}$ ke pecahan campuran.",
   "answer": {
    "num": 5,
    "den": 8,
    "whole": 2
   },
   "hint": "21 ÷ 8 = berapa, sisa berapa?",
   "explain": "21 ÷ 8 = 2 sisa 5, jadi $2\\frac{5}{8}$.",
   "error": "salah-langkah-materi",
   "mixed": true,
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\frac{7}{8} \\div \\frac{1}{3} = 2\\frac{5}{8}$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Sebotol berisi $\\frac{9}{10}$ liter air. Setiap gelas diisi $\\frac{3}{20}$ liter. Berapa gelas yang bisa diisi penuh?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Hitungan apa yang dipakai?",
   "options": [
    "$\\frac{9}{10} \\div \\frac{3}{20}$",
    "$\\frac{9}{10} \\times \\frac{3}{20}$",
    "$\\frac{3}{20} \\div \\frac{9}{10}$"
   ],
   "answer": "$\\frac{9}{10} \\div \\frac{3}{20}$",
   "hint": "Berapa kali satu gelas muat di dalam botol?",
   "explain": "Air botol dibagi isi satu gelas.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "fraction",
   "prompt": "Kebalikan dari $\\frac{3}{20}$ adalah ...",
   "answer": {
    "num": 20,
    "den": 3
   },
   "hint": "Tukar pembilang dan penyebut.",
   "explain": "Soalnya menjadi $\\frac{9}{10} \\times \\frac{20}{3}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Hitung $\\frac{9}{10} \\times \\frac{20}{3}$.",
   "answer": "6",
   "hint": "$\\frac{180}{30}$ = ...",
   "explain": "Hasilnya 6.",
   "error": "salah-langkah-materi",
   "suffix": "gelas"
  },
  {
   "kind": "fraction",
   "prompt": "Cek: $6 \\times \\frac{3}{20}$ = ... (paling sederhana)",
   "answer": {
    "num": 9,
    "den": 10
   },
   "hint": "$\\frac{18}{20}$, lalu sederhanakan.",
   "explain": "$\\frac{18}{20} = \\frac{9}{10}$ liter. Benar.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "Jadi ada 6 gelas yang bisa diisi penuh."
}
```
