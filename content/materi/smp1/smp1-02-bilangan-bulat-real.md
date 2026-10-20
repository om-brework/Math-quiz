---
id: smp1-02-bilangan-bulat-real
judul: Bilangan Bulat, Rasional, dan Real
jenjang: smp1
moe: "Secondary 1 · Number and Algebra · N1 Numbers and their operations"
prasyarat: [sd5-04-operasi-pecahan, sd4-08-operasi-desimal, sd6-01-pembagian-pecahan]
durasi_menit: 60
---

## Kenapa belajar ini?

Suhu di dalam freezer $-18^\circ$C, lantai parkir basement disebut B1 dan B2, dan utang bisa ditulis sebagai bilangan negatif. Semua ini memerlukan bilangan yang lebih kecil dari nol. Di materi ini kamu mengenal bilangan negatif, bilangan rasional, dan bilangan real, serta cara menghitung dengannya.

## Analogi

Bayangkan **lift di sebuah mal** di Jakarta yang punya lantai parkir bawah tanah.

- Lantai dasar adalah **0**.
- Lantai di atasnya: **1, 2, 3, ...** (bilangan positif).
- Lantai basement: **B1, B2, B3, ...** yang kita tulis **$-1, -2, -3, \ldots$** (bilangan negatif).

Lorong lift ini adalah **garis bilangan** yang berdiri tegak.

- **Menambah** bilangan positif = lift **naik**.
- **Mengurangi** bilangan positif = lift **turun**.
- Makin tinggi lantainya, makin besar bilangannya. Jadi B5 lebih rendah dari B2, artinya $-5 < -2$.

Lift berangkat dari B3 ($-3$) lalu naik 5 lantai. Di garis bilangan, naik berarti melompat ke kanan:

```anim
{"type": "garis", "from": -5, "to": 5, "start": -3, "jumps": [5], "title": "Lift dari B3 naik 5 lantai"}
```

## Konsep

### Bilangan bulat dan garis bilangan

**Bilangan bulat** adalah $\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots$

```visual
{"type": "numberLine", "from": -4, "to": 4, "step": 1, "caption": "Garis bilangan bulat dari −4 sampai 4"}
```

Bilangan di sebelah kanan selalu lebih besar.

| Lambang | Arti | Contoh |
|---|---|---|
| $<$ | kurang dari | $-5 < -2$ |
| $>$ | lebih dari | $0 > -3$ |
| $\le$ | kurang dari atau sama dengan | $x \le 4$ berarti $x$ boleh 4 |
| $\ge$ | lebih dari atau sama dengan | $x \ge -1$ berarti $x$ boleh $-1$ |

### Penjumlahan dan pengurangan

- $a + b$ dengan $b$ positif: naik $b$ lantai. Contoh: $-3 + 5 = 2$.
- $a + (-b)$: menambah negatif sama dengan turun. Jadi $a + (-b) = a - b$.
- $a - (-b) = a + b$.

**Kenapa mengurangi negatif sama dengan menambah?** Perhatikan pola ini:

$$5 - 2 = 3, \quad 5 - 1 = 4, \quad 5 - 0 = 5, \quad 5 - (-1) = 6, \quad 5 - (-2) = 7$$

Setiap kali yang dikurangkan turun 1, hasilnya naik 1. Pola ini hanya konsisten jika $5 - (-2) = 7 = 5 + 2$.

Cara lain: $a - b$ menjawab "dari lantai $b$, berapa lantai harus naik untuk sampai ke lantai $a$?" Dari B2 ($-2$) ke lantai 5 harus naik 7 lantai. Jadi $5 - (-2) = 7$.

```anim
{"type": "garis", "from": -3, "to": 6, "start": -2, "jumps": [7], "title": "Dari B2 ke lantai 5: naik berapa lantai?"}
```

### Perkalian dan pembagian

| Tanda | Hasil |
|---|---|
| $(+) \times (+)$ | $+$ |
| $(+) \times (-)$ atau $(-) \times (+)$ | $-$ |
| $(-) \times (-)$ | $+$ |

Aturan yang sama berlaku untuk pembagian.

**Kenapa?** $3 \times (-2)$ artinya turun 2 lantai sebanyak 3 kali: $-6$. Sekarang lihat pola:

$$(-3) \times 2 = -6, \quad (-3) \times 1 = -3, \quad (-3) \times 0 = 0, \quad (-3) \times (-1) = 3, \quad (-3) \times (-2) = 6$$

Setiap kali pengali turun 1, hasilnya naik 3. Agar pola tetap berlaku, negatif kali negatif harus positif.

Pembagian adalah kebalikan perkalian. Karena $(-4) \times (-3) = 12$, maka $12 \div (-4) = -3$.

### Bilangan rasional

**Bilangan rasional** adalah bilangan yang bisa ditulis sebagai $\frac{a}{b}$, dengan $a$ dan $b$ bilangan bulat dan $b \ne 0$.

- Semua bilangan bulat rasional: $-5 = \frac{-5}{1}$.
- Desimal berhenti rasional: $0{,}75 = \frac{3}{4}$.
- Desimal berulang rasional: $0{,}333\ldots = \frac{1}{3}$.

Kenapa $b \ne 0$? Pembagian adalah kebalikan perkalian. $\frac{6}{0} = c$ berarti $c \times 0 = 6$, dan tidak ada $c$ yang memenuhi.

Aturan tanda tetap berlaku untuk pecahan: $-\frac{2}{3} = \frac{-2}{3} = \frac{2}{-3}$.

### Bilangan irasional dan bilangan real

Beberapa bilangan **tidak bisa** ditulis sebagai $\frac{a}{b}$. Desimalnya tidak berhenti dan tidak berulang. Bilangan ini disebut **irasional**. Contoh: $\sqrt{2} = 1{,}41421\ldots$, $\sqrt{7}$, dan $\pi = 3{,}14159\ldots$

Catatan: $\frac{22}{7}$ hanya **pendekatan** untuk $\pi$. $\frac{22}{7}$ rasional, sedangkan $\pi$ irasional.

**Bilangan real** adalah gabungan bilangan rasional dan irasional. Semuanya punya tempat di garis bilangan.

```visual
{"type": "table", "head": ["Bilangan real", "Contoh", "Desimalnya"], "rows": [["Rasional: bulat", "…, −2, −1, 0, 1, 2, …", "berhenti"], ["Rasional: bukan bulat", "3/4, 0,333…, −2/3", "berhenti atau berulang"], ["Irasional", "√2, √7, π", "tidak berhenti, tidak berulang"]], "caption": "Bilangan bulat termasuk rasional; rasional dan irasional bersama membentuk bilangan real"}
```

### Memakai kalkulator

- Gunakan tombol **$(-)$** untuk bilangan negatif, bukan tombol kurang.
- Pakai **kurung** untuk pembilang dan penyebut. Untuk $\frac{-3{,}6 + 1{,}2}{-0{,}8}$, ketik $(-3{,}6 + 1{,}2) \div (-0{,}8)$. Hasilnya 3.
- Untuk akar seperti $\sqrt{7}$, kalkulator menampilkan $2{,}6457513\ldots$. Ini hanya sebagian digit, karena desimalnya tidak pernah berhenti.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Mengurutkan bilangan

```soal
{
 "title": "Contoh 1",
 "text": "Urutkan dari yang terkecil: $-3$, $2$, $-7$, $0$, $-\\frac{1}{2}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Pisahkan tanda. Ada berapa bilangan negatif?",
   "answer": "3",
   "hint": "Hitung yang bertanda minus.",
   "explain": "Negatif: $-3$, $-7$, $-\\frac{1}{2}$. Lalu 0, lalu positif 2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Urutkan yang negatif dari terkecil.",
   "options": [
    "$-7, -3, -\\frac{1}{2}$",
    "$-\\frac{1}{2}, -3, -7$",
    "$-3, -7, -\\frac{1}{2}$"
   ],
   "answer": "$-7, -3, -\\frac{1}{2}$",
   "hint": "Di lift, B7 paling bawah.",
   "explain": "B7 paling bawah, lalu B3, lalu setengah lantai di bawah 0.",
   "error": "salah-urutkan-bilangan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Gabungkan semuanya.",
   "options": [
    "$-7, -3, -\\frac{1}{2}, 0, 2$",
    "$-\\frac{1}{2}, -3, -7, 0, 2$",
    "$0, -\\frac{1}{2}, -3, -7, 2$"
   ],
   "answer": "$-7, -3, -\\frac{1}{2}, 0, 2$",
   "hint": "Negatif dulu, lalu 0, lalu positif.",
   "explain": "Dari kiri ke kanan di garis bilangan.",
   "error": "salah-urutkan-bilangan"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: bilangan mana yang paling kanan di garis bilangan?",
   "answer": "2",
   "hint": "Paling kanan = paling besar.",
   "explain": "2 paling besar, cocok dengan urutan.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Urutannya $-7, -3, -\\frac{1}{2}, 0, 2$.",
 "visual": {
  "type": "numberLine",
  "from": -8,
  "to": 3,
  "step": 1
 }
}
```

### Contoh 2: Penjumlahan dan pengurangan

```soal
{
 "title": "Contoh 2",
 "text": "Hitung $-8 + 5 - (-6)$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: $-(-6)$ sama dengan",
   "options": [
    "$+6$",
    "$-6$"
   ],
   "answer": "$+6$",
   "hint": "Mengurangi negatif sama dengan menambah.",
   "explain": "Soal menjadi $-8 + 5 + 6$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung dari kiri. $-8 + 5 = ?$",
   "answer": "-3",
   "hint": "Dari B8 naik 5 lantai.",
   "explain": "$-8 + 5 = -3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Lanjutkan. $-3 + 6 = ?$",
   "answer": "3",
   "hint": "Dari B3 naik 6 lantai.",
   "explain": "$-3 + 6 = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: kumpulkan positif $5 + 6$, lalu kurangi 8. Hasilnya?",
   "answer": "3",
   "hint": "$11 - 8$.",
   "explain": "Sama, jadi benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $-8 + 5 - (-6) = 3$.",
 "visual": {
  "type": "numberLine",
  "from": -9,
  "to": 4,
  "step": 1,
  "jumps": [
   {
    "from": -8,
    "to": -3,
    "label": "+5"
   },
   {
    "from": -3,
    "to": 3,
    "label": "+6"
   }
  ]
 }
}
```

### Contoh 3: Perkalian dan pembagian

```soal
{
 "title": "Contoh 3",
 "text": "Hitung $(-12) \\times 3 \\div (-4)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Kerjakan dari kiri. $(-12) \\times 3 = ?$",
   "answer": "-36",
   "hint": "Negatif kali positif hasilnya negatif.",
   "explain": "$-36$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $(-36) \\div (-4) = ?$",
   "answer": "9",
   "hint": "Negatif dibagi negatif hasilnya positif.",
   "explain": "$9$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Cek tanda. Ada dua tanda negatif. Hasilnya bertanda",
   "options": [
    "positif",
    "negatif"
   ],
   "answer": "positif",
   "hint": "Jumlah tanda negatif genap atau ganjil?",
   "explain": "Dua negatif (genap) memberi hasil positif.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $9 \\times (-4) = ?$",
   "answer": "-36",
   "hint": "Positif kali negatif.",
   "explain": "$-36 \\div 3 = -12$. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $(-12) \\times 3 \\div (-4) = 9$."
}
```

### Contoh 4: Operasi bilangan rasional

```soal
{
 "title": "Contoh 4",
 "text": "Hitung $-\\frac{2}{3} + \\frac{5}{6} \\times \\left(-\\frac{3}{5}\\right)$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Kerjakan perkalian dulu. $\\frac{5}{6} \\times \\left(-\\frac{3}{5}\\right) = ?$",
   "options": [
    "$-\\frac{1}{2}$",
    "$\\frac{1}{2}$",
    "$-\\frac{15}{11}$"
   ],
   "answer": "$-\\frac{1}{2}$",
   "hint": "Positif kali negatif hasilnya negatif. Kalikan pembilang dan penyebut.",
   "explain": "$-\\frac{15}{30} = -\\frac{1}{2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Samakan penyebut $\\frac{2}{3}$ dan $\\frac{1}{2}$. Penyebut bersamanya?",
   "answer": "6",
   "hint": "KPK dari 3 dan 2.",
   "explain": "$-\\frac{4}{6} - \\frac{3}{6}$.",
   "error": "penyebut-tidak-disamakan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: $-\\frac{4}{6} - \\frac{3}{6} = ?$",
   "options": [
    "$-\\frac{7}{6}$",
    "$-\\frac{1}{6}$",
    "$\\frac{7}{6}$",
    "$-\\frac{7}{12}$"
   ],
   "answer": "$-\\frac{7}{6}$",
   "hint": "Turun 4/6 lalu turun lagi 3/6.",
   "explain": "Hasilnya $-\\frac{7}{6} = -1\\frac{1}{6}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: tulis $-\\frac{7}{6}$ sebagai desimal, bulatkan ke 2 desimal.",
   "answer": "-1,17",
   "hint": "$7 \\div 6 = 1{,}166\\ldots$",
   "explain": "$-1{,}17$, cocok dengan $-0{,}667 - 0{,}5$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi hasilnya $-\\frac{7}{6} = -1\\frac{1}{6}$."
}
```

### Contoh 5: Soal cerita suhu

```soal
{
 "title": "Contoh 5",
 "text": "Suhu malam hari di Puncak Jaya, Papua, $-6^\\circ$C. Siang harinya $9^\\circ$C. (a) Berapa kenaikan suhunya? (b) Malam berikutnya suhu turun $4^\\circ$C dari suhu malam sebelumnya. Berapa suhunya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Kenaikan suhu dihitung dengan",
   "options": [
    "$9 - (-6)$",
    "$9 - 6$",
    "$-6 - 9$"
   ],
   "answer": "$9 - (-6)$",
   "hint": "Kenaikan = suhu akhir dikurangi suhu awal.",
   "explain": "$9 - (-6)$.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung kenaikannya.",
   "answer": "15",
   "hint": "Mengurangi negatif sama dengan menambah.",
   "explain": "$9 + 6 = 15$.",
   "error": "salah-langkah-materi",
   "suffix": "°C"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: (b) Turun 4 dari $-6$. Suhunya?",
   "answer": "-10",
   "hint": "$-6 - 4$.",
   "explain": "$-10^\\circ$C.",
   "error": "salah-langkah-materi",
   "suffix": "°C"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $-6 + 15 = ?$",
   "answer": "9",
   "hint": "Dari suhu malam ditambah kenaikan.",
   "explain": "9, sama dengan suhu siang. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "(a) Naik $15^\\circ$C; (b) $-10^\\circ$C.",
 "visual": {
  "type": "numberLine",
  "from": -10,
  "to": 10,
  "step": 1,
  "jumps": [
   {
    "from": -6,
    "to": 9,
    "label": "naik ?"
   }
  ]
 }
}
```

## Kesalahan yang sering terjadi

- **Mengira $-7 > -3$ karena 7 > 3.** Di lift, B7 lebih rendah dari B3. Jadi $-7 < -3$.
- **$a - (-b)$ dihitung $a - b$.** Menulis $5 - (-2) = 3$. Mengurangi negatif sama dengan menambah: $5 + 2 = 7$.
- **Aturan tanda perkalian dipakai untuk penjumlahan.** Menulis $-3 + (-4) = 7$ karena "negatif ketemu negatif jadi positif". Salah. Turun 3 lalu turun 4 lantai: $-7$. Aturan "negatif kali negatif positif" hanya untuk perkalian dan pembagian.
- **Menganggap semua akar irasional.** $\sqrt{9} = 3$ dan $\sqrt{16} = 4$ rasional. Hanya akar dari bilangan yang bukan kuadrat sempurna (seperti $\sqrt{7}$) yang irasional.
- **Salah ketik di kalkulator.** Mengetik $-3{,}6 + 1{,}2 \div -0{,}8$ tanpa kurung. Kalkulator mengerjakan pembagian dulu, hasilnya $-3{,}6 + (-1{,}5) = -5{,}1$, bukan 3.

## Ringkasan

- Garis bilangan seperti lorong lift: makin ke atas (kanan), makin besar.
- $a + (-b) = a - b$ dan $a - (-b) = a + b$.
- Perkalian dan pembagian: tanda sama hasilnya positif, tanda beda hasilnya negatif.
- Rasional: bisa ditulis $\frac{a}{b}$ dengan $b \ne 0$; desimalnya berhenti atau berulang.
- Irasional: desimal tidak berhenti dan tidak berulang, misalnya $\sqrt{2}$ dan $\pi$. Rasional dan irasional bersama membentuk bilangan real.
- Di kalkulator, pakai tombol $(-)$ dan tanda kurung.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Isi dengan $<$ atau $>$: (a) $-9 \\;\\_\\_\\; -4$; (b) $-\\frac{1}{3} \\;\\_\\_\\; -\\frac{1}{2}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "(a) $-9 \\;\\_\\_\\; -4$",
   "options": [
    "$<$",
    "$>$"
   ],
   "answer": "$<$",
   "hint": "Mana yang lebih ke kiri di garis bilangan?",
   "explain": "$-9$ lebih ke kiri, jadi $-9 < -4$.",
   "error": "salah-banding-bilangan"
  },
  {
   "kind": "number",
   "prompt": "(b) Tulis $-\\frac{1}{3}$ sebagai desimal, bulatkan ke 2 desimal.",
   "answer": "-0,33",
   "hint": "$1 \\div 3 = 0{,}333\\ldots$",
   "explain": "$-0{,}33$, sedangkan $-\\frac{1}{2} = -0{,}5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "(b) $-\\frac{1}{3} \\;\\_\\_\\; -\\frac{1}{2}$",
   "options": [
    "$>$",
    "$<$"
   ],
   "answer": "$>$",
   "hint": "Mana yang lebih dekat ke 0?",
   "explain": "$-0{,}33$ lebih dekat ke 0, jadi lebih besar.",
   "error": "salah-banding-pecahan"
  }
 ],
 "conclusion": "(a) $-9 < -4$; (b) $-\\frac{1}{3} > -\\frac{1}{2}$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $-15 - (-7) + 3$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$-15 - (-7) = ?$",
   "answer": "-8",
   "hint": "Mengurangi negatif sama dengan menambah.",
   "explain": "$-15 + 7 = -8$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$-8 + 3 = ?$",
   "answer": "-5",
   "hint": "Dari B8 naik 3.",
   "explain": "$-5$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$-15 - (-7) + 3 = -5$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung $(-6) \\times (-5) \\div (-3)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$(-6) \\times (-5) = ?$",
   "answer": "30",
   "hint": "Negatif kali negatif.",
   "explain": "Hasilnya positif 30.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$30 \\div (-3) = ?$",
   "answer": "-10",
   "hint": "Positif dibagi negatif.",
   "explain": "$-10$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$(-6) \\times (-5) \\div (-3) = -10$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Hitung $\\frac{3}{4} - \\left(-\\frac{1}{2}\\right) \\times \\frac{1}{3}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Perkalian dulu: $\\left(-\\frac{1}{2}\\right) \\times \\frac{1}{3} = ?$",
   "options": [
    "$-\\frac{1}{6}$",
    "$\\frac{1}{6}$",
    "$-\\frac{2}{5}$"
   ],
   "answer": "$-\\frac{1}{6}$",
   "hint": "Negatif kali positif.",
   "explain": "$-\\frac{1}{6}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Soal menjadi $\\frac{3}{4} - \\left(-\\frac{1}{6}\\right)$, sama dengan",
   "options": [
    "$\\frac{3}{4} + \\frac{1}{6}$",
    "$\\frac{3}{4} - \\frac{1}{6}$"
   ],
   "answer": "$\\frac{3}{4} + \\frac{1}{6}$",
   "hint": "Mengurangi negatif sama dengan menambah.",
   "explain": "Jadi dijumlahkan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Hitung $\\frac{3}{4} + \\frac{1}{6}$.",
   "answer": {
    "num": 11,
    "den": 12
   },
   "hint": "Samakan penyebut menjadi 12.",
   "explain": "$\\frac{9}{12} + \\frac{2}{12} = \\frac{11}{12}$.",
   "error": "penyebut-tidak-disamakan",
   "simplest": true
  }
 ],
 "conclusion": "Hasilnya $\\frac{11}{12}$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Golongkan menjadi rasional atau irasional: $-4$, $\\sqrt{16}$, $\\sqrt{5}$, $0{,}25$, $\\pi$, $\\frac{1}{3}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "$\\sqrt{16}$ termasuk",
   "options": [
    "rasional",
    "irasional"
   ],
   "answer": "rasional",
   "hint": "Apakah 16 kuadrat sempurna?",
   "explain": "$\\sqrt{16} = 4$, bilangan bulat, jadi rasional.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$\\sqrt{5}$ termasuk",
   "options": [
    "irasional",
    "rasional"
   ],
   "answer": "irasional",
   "hint": "Apakah 5 kuadrat sempurna?",
   "explain": "5 bukan kuadrat sempurna, desimalnya tidak berhenti dan tidak berulang.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Kelompok irasional seluruhnya adalah",
   "options": [
    "$\\sqrt{5}$ dan $\\pi$",
    "$\\sqrt{16}$, $\\sqrt{5}$, dan $\\pi$",
    "$\\pi$ dan $\\frac{1}{3}$"
   ],
   "answer": "$\\sqrt{5}$ dan $\\pi$",
   "hint": "$\\frac{1}{3} = 0{,}333\\ldots$ berulang.",
   "explain": "Rasional: $-4$, $\\sqrt{16}$, $0{,}25$, $\\frac{1}{3}$. Irasional: $\\sqrt{5}$ dan $\\pi$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Semuanya bilangan real: empat rasional dan dua irasional."
}
```
