---
id: sma1-07-bentuk-akar
judul: Bentuk Akar (Surd)
jenjang: sma1
moe: "Additional Mathematics · A3 Surds"
prasyarat: [smp1-02-bilangan-bulat-real, smp2-02-ekspansi-faktorisasi, smp3-02-persamaan-kuadrat-lanjut]
durasi_menit: 50
---

## Kenapa belajar ini?

Diagonal ubin persegi bersisi 1 m panjangnya $\sqrt{2}$ m, bukan 1,41 m. Angka 1,41 hanyalah pendekatan. Dalam fisika, teknik, dan matematika lanjut, kita sering perlu jawaban **eksak**. Bentuk akar membuat perhitungan tetap tepat sampai akhir.

```anim
{"type": "bangun", "title": "Diagonal ubin 1 m", "titik": {"A": [0, 0], "B": [1, 0], "C": [1, 1], "D": [0, 1]}, "sisi": [["A", "B", "1"], ["B", "C", "1"], ["C", "D"], ["D", "A"], ["A", "C", "\\sqrt{2}"]], "sudut": [{"di": "B", "dari": "A", "ke": "C", "siku": true}], "langkah": [{"say": "Ubin persegi bersisi 1 m.", "sisi": 4}, {"say": "Diagonal $AC$ membentuk segitiga siku-siku $ABC$.", "sisi": 5, "sudut": 1, "sorot": ["AC"]}, {"say": "Pythagoras: $AC^2 = 1^2 + 1^2 = 2$, jadi $AC = \\sqrt{2}$ m. Tepat, tanpa pembulatan.", "sisi": 5, "sudut": 1, "sorot": ["AC"]}]}
```

## Analogi

Perlakukan setiap bentuk akar seperti **jenis buah**. Misalnya $\sqrt{2}$ adalah "apel" dan $\sqrt{3}$ adalah "jeruk".

- $3\sqrt{2} + 5\sqrt{2} = 8\sqrt{2}$, sama seperti 3 apel + 5 apel = 8 apel.

```anim
{"type": "benda", "op": "+", "a": 3, "b": 5, "item": "apel", "title": "3 apel + 5 apel, seperti 3√2 + 5√2"}
```
- $\sqrt{2} + \sqrt{3}$ tidak bisa digabung, sama seperti apel + jeruk tetap "apel + jeruk".
- Kadang buah terlihat beda padahal sama. $\sqrt{8}$ ternyata $2\sqrt{2}$, yaitu "2 apel" yang disamarkan. Menyederhanakan akar berarti membuka samarannya.

## Konsep

### Apa itu bentuk akar

Untuk $a \ge 0$, $\sqrt{a}$ adalah bilangan **tak negatif** yang kuadratnya $a$. **Bentuk akar (surd)** adalah akar yang hasilnya bilangan irasional, seperti $\sqrt{2}$, $\sqrt{5}$, $\sqrt{12}$. Bilangan $\sqrt{9} = 3$ bukan surd.

### Sifat dasar

Untuk $a, b > 0$:

$$
\sqrt{ab} = \sqrt{a}\,\sqrt{b}, \qquad \sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}}, \qquad \sqrt{a}\,\sqrt{a} = a
$$

Alasannya: $(\sqrt{a}\sqrt{b})^2 = (\sqrt{a})^2(\sqrt{b})^2 = ab$, dan $\sqrt{a}\sqrt{b} \ge 0$. Jadi $\sqrt{a}\sqrt{b}$ adalah akar tak negatif dari $ab$.

**Hati-hati:** $\sqrt{a + b} \ne \sqrt{a} + \sqrt{b}$. Contoh: $\sqrt{9 + 16} = 5$, tetapi $\sqrt{9} + \sqrt{16} = 7$.

### Menyederhanakan

Cari faktor kuadrat sempurna terbesar: $\sqrt{72} = \sqrt{36 \times 2} = 6\sqrt{2}$. Bentuk sederhana berarti angka di dalam akar tidak punya faktor kuadrat sempurna selain 1.

```anim
{"type": "persamaan", "title": "Membuka samaran √50", "baris": [{"tex": "\\sqrt{50}", "say": "Cari faktor 50 yang merupakan kuadrat sempurna: 1, 4, 9, 16, 25, ..."}, {"tex": "\\sqrt{25 \\times 2}", "say": "25 membagi 50, dan 25 adalah $5^2$.", "op": "faktor kuadrat"}, {"tex": "\\sqrt{25}\\,\\sqrt{2}", "say": "Pecah dengan sifat $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$.", "op": "pecah akar"}, {"tex": "5\\sqrt{2}", "say": "Ternyata $\\sqrt{50}$ adalah \"5 apel\" yang disamarkan."}]}
```

### Operasi

- **Tambah/kurang:** hanya akar sejenis (buah yang sama).
- **Kali:** kalikan bagian luar dengan bagian luar, akar dengan akar: $2\sqrt{3} \times 5\sqrt{6} = 10\sqrt{18} = 30\sqrt{2}$.
- **Ekspansi:** gunakan distributif seperti pada aljabar, ingat $\sqrt{a}\sqrt{a} = a$.

### Merasionalkan penyebut

Penyebut yang memuat akar kita ubah menjadi bilangan rasional, supaya hasil mudah dibandingkan dan dihitung.

- Bentuk $\dfrac{k}{\sqrt{b}}$: kalikan atas-bawah dengan $\sqrt{b}$.
- Bentuk $\dfrac{k}{a + \sqrt{b}}$: kalikan atas-bawah dengan **sekawan** $a - \sqrt{b}$, karena

$$
(a + \sqrt{b})(a - \sqrt{b}) = a^2 - b
$$

yang bebas dari akar. Dalam analogi, sekawan adalah "pasangan" yang membuat semua apel saling meniadakan. Hal yang sama berlaku untuk $\sqrt{a} + \sqrt{b}$ dengan sekawan $\sqrt{a} - \sqrt{b}$.

```anim
{"type": "persamaan", "title": "Merasionalkan 1/(3 + √2)", "baris": [{"tex": "\\frac{1}{3 + \\sqrt{2}}", "say": "Penyebut memuat akar. Sekawannya $3 - \\sqrt{2}$."}, {"tex": "\\frac{1}{3 + \\sqrt{2}} \\times \\frac{3 - \\sqrt{2}}{3 - \\sqrt{2}}", "say": "Kalikan atas dan bawah dengan sekawan (sama dengan mengalikan 1).", "op": "× sekawan"}, {"tex": "\\frac{3 - \\sqrt{2}}{3^2 - (\\sqrt{2})^2}", "say": "Penyebut: $(a + \\sqrt{b})(a - \\sqrt{b}) = a^2 - b$.", "op": "a² − b"}, {"tex": "\\frac{3 - \\sqrt{2}}{7}", "say": "$9 - 2 = 7$. Penyebut sudah rasional."}]}
```

### Persamaan yang memuat bentuk akar

**Jenis 1: koefisien berbentuk akar.** Selesaikan seperti persamaan biasa, lalu rasionalkan. Jika $p + q\sqrt{2} = r + s\sqrt{2}$ dengan $p, q, r, s$ rasional, maka $p = r$ dan $q = s$ (bagian rasional sama, bagian akar sama).

**Jenis 2: variabel di dalam akar.** Contoh $\sqrt{2x + 7} = x + 2$. Pisahkan akar di satu ruas, kuadratkan kedua ruas, lalu selesaikan. Mengkuadratkan bisa memunculkan **akar palsu**, karena $(-3)^2 = 3^2$. Jadi setiap jawaban **wajib** dicek ke persamaan awal.

```anim
{"type": "grafik", "title": "Asal-usul akar palsu: √(x + 2) = x", "xmin": -3, "xmax": 4, "ymin": -3, "ymax": 4, "kurva": [{"f": "sqrt(x+2)", "label": "y = \\sqrt{x + 2}"}, {"f": "x", "label": "y = x"}, {"f": "-sqrt(x+2)", "label": "y = -\\sqrt{x + 2}", "warna": "#94a3b8"}], "titik": [{"x": 2, "y": 2, "label": "x = 2 (benar)"}, {"x": -1, "y": -1, "label": "x = -1 (palsu)"}], "langkah": [{"say": "Kuadratkan $\\sqrt{x + 2} = x$: $x + 2 = x^2$, jadi $x = 2$ atau $x = -1$.", "kurva": 2, "titik": 0}, {"say": "Kurva akar dan garis $y = x$ hanya bertemu di $x = 2$.", "kurva": 2, "titik": 1}, {"say": "$x = -1$ berasal dari cabang $-\\sqrt{x + 2}$ yang ikut terbawa saat dikuadratkan. Cek: $\\sqrt{1} = 1 \\ne -1$, palsu.", "kurva": 3, "titik": 2}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menyederhanakan dan menjumlahkan

```soal
{
 "title": "Contoh 1",
 "text": "Sederhanakan $\\sqrt{72} + \\sqrt{18} - \\sqrt{8}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: $\\sqrt{72}$ = ...",
   "options": [
    "$6\\sqrt{2}$",
    "$2\\sqrt{6}$",
    "$3\\sqrt{8}$",
    "$36\\sqrt{2}$"
   ],
   "answer": "$6\\sqrt{2}$",
   "hint": "Faktor kuadrat terbesar dari 72 adalah 36.",
   "explain": "$\\sqrt{36 \\times 2} = 6\\sqrt{2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$\\sqrt{18}$ = ...",
   "options": [
    "$3\\sqrt{2}$",
    "$2\\sqrt{3}$",
    "$9\\sqrt{2}$"
   ],
   "answer": "$3\\sqrt{2}$",
   "hint": "$18 = 9 \\times 2$.",
   "explain": "$\\sqrt{9 \\times 2} = 3\\sqrt{2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$\\sqrt{8}$ = ...",
   "options": [
    "$2\\sqrt{2}$",
    "$4\\sqrt{2}$",
    "$2\\sqrt{4}$"
   ],
   "answer": "$2\\sqrt{2}$",
   "hint": "$8 = 4 \\times 2$.",
   "explain": "$\\sqrt{4 \\times 2} = 2\\sqrt{2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Gabungkan buah sejenis. $6 + 3 - 2$ apel = ? (koefisien $\\sqrt{2}$)",
   "answer": "7",
   "hint": "Semua sudah berbentuk $\\sqrt{2}$.",
   "explain": "$7\\sqrt{2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $7\\sqrt{2}$ = ? (2 desimal)",
   "answer": "9,9",
   "hint": "$\\sqrt{2} \\approx 1{,}4142$.",
   "explain": "$7\\sqrt{2} \\approx 9{,}90$, dan $8{,}485 + 4{,}243 - 2{,}828 \\approx 9{,}90$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\sqrt{72} + \\sqrt{18} - \\sqrt{8} = 7\\sqrt{2}$."
}
```

### Contoh 2: Ekspansi dua kurung

```soal
{
 "title": "Contoh 2",
 "text": "Sederhanakan $(3 + \\sqrt{5})(2 - \\sqrt{5})$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Kalikan setiap suku.",
   "options": [
    "$6 - 3\\sqrt{5} + 2\\sqrt{5} - \\sqrt{5}\\sqrt{5}$",
    "$6 - 3\\sqrt{5} + 2\\sqrt{5} + \\sqrt{5}\\sqrt{5}$",
    "$6 - \\sqrt{5}\\sqrt{5}$"
   ],
   "answer": "$6 - 3\\sqrt{5} + 2\\sqrt{5} - \\sqrt{5}\\sqrt{5}$",
   "hint": "Empat hasil kali: depan-depan, depan-belakang, belakang-depan, belakang-belakang.",
   "explain": "Suku terakhir $\\sqrt{5} \\times (-\\sqrt{5})$ bertanda negatif.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\sqrt{5}\\sqrt{5}$ = ?",
   "answer": "5",
   "hint": "$\\sqrt{a}\\sqrt{a} = a$.",
   "explain": "$\\sqrt{5}\\sqrt{5} = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Bagian rasional $6 - 5$ = ?",
   "answer": "1",
   "hint": "Kumpulkan bilangan tanpa akar.",
   "explain": "$6 - 5 = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Bagian akar $-3\\sqrt{5} + 2\\sqrt{5}$ = ...",
   "options": [
    "$-\\sqrt{5}$",
    "$\\sqrt{5}$",
    "$-5\\sqrt{5}$"
   ],
   "answer": "$-\\sqrt{5}$",
   "hint": "$-3 + 2$ apel.",
   "explain": "$-1 \\cdot \\sqrt{5} = -\\sqrt{5}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $1 - \\sqrt{5}$ = ? (2 desimal)",
   "answer": "-1,24",
   "hint": "$\\sqrt{5} \\approx 2{,}236$.",
   "explain": "$\\approx -1{,}24$, sama dengan $5{,}236 \\times (-0{,}236)$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $(3 + \\sqrt{5})(2 - \\sqrt{5}) = 1 - \\sqrt{5}$."
}
```

### Contoh 3: Merasionalkan dengan sekawan

```soal
{
 "title": "Contoh 3",
 "text": "Rasionalkan $\\dfrac{2 + \\sqrt{3}}{2 - \\sqrt{3}}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Sekawan penyebut adalah ...",
   "options": [
    "$2 + \\sqrt{3}$",
    "$\\sqrt{3}$",
    "$2 - \\sqrt{3}$"
   ],
   "answer": "$2 + \\sqrt{3}$",
   "hint": "Ganti tanda di depan akar.",
   "explain": "Sekawan $2 - \\sqrt{3}$ adalah $2 + \\sqrt{3}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2–3: Penyebut $(2 - \\sqrt{3})(2 + \\sqrt{3})$ = ?",
   "answer": "1",
   "hint": "$a^2 - b$.",
   "explain": "$4 - 3 = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Pembilang $(2 + \\sqrt{3})^2$ = ...",
   "options": [
    "$7 + 4\\sqrt{3}$",
    "$7 + 2\\sqrt{3}$",
    "$4 + 3$",
    "$1 + 4\\sqrt{3}$"
   ],
   "answer": "$7 + 4\\sqrt{3}$",
   "hint": "$(a + b)^2 = a^2 + 2ab + b^2$.",
   "explain": "$4 + 4\\sqrt{3} + 3 = 7 + 4\\sqrt{3}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $7 + 4\\sqrt{3}$ = ? (2 desimal)",
   "answer": "13,93",
   "hint": "$\\sqrt{3} \\approx 1{,}732$.",
   "explain": "$\\approx 13{,}93$, sama dengan $3{,}732 \\div 0{,}268$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi hasilnya $7 + 4\\sqrt{3}$."
}
```

### Contoh 4: Persamaan dengan variabel di dalam akar

```soal
{
 "title": "Contoh 4",
 "text": "Selesaikan $\\sqrt{2x + 7} = x + 2$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1–2: Akar sudah sendirian. Kuadratkan kedua ruas.",
   "options": [
    "$2x + 7 = x^2 + 4x + 4$",
    "$2x + 7 = x^2 + 4$",
    "$\\sqrt{2x} + 7 = x^2 + 4$"
   ],
   "answer": "$2x + 7 = x^2 + 4x + 4$",
   "hint": "$(x + 2)^2$ punya suku tengah.",
   "explain": "$(x + 2)^2 = x^2 + 4x + 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Susun dan faktorkan.",
   "options": [
    "$(x + 3)(x - 1) = 0$",
    "$(x - 3)(x + 1) = 0$",
    "$(x + 3)(x + 1) = 0$"
   ],
   "answer": "$(x + 3)(x - 1) = 0$",
   "hint": "Pindahkan semua ke ruas kanan: $x^2 + 2x - 3 = 0$.",
   "explain": "Calon jawaban $x = 1$ atau $x = -3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: substitusi $x = -3$. Kiri $\\sqrt{1} = 1$, kanan $-1$. Kesimpulannya ...",
   "options": [
    "$x = -3$ akar palsu",
    "$x = -3$ jawaban sah"
   ],
   "answer": "$x = -3$ akar palsu",
   "hint": "Akar kuadrat tidak pernah negatif.",
   "explain": "$1 \\ne -1$, jadi $x = -3$ dibuang.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Jadi penyelesaiannya $x$ = ?",
   "answer": "1",
   "hint": "Calon yang tersisa.",
   "explain": "$x = 1$: kiri $\\sqrt{9} = 3$, kanan $3$. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Penyelesaiannya $x = 1$."
}
```

### Contoh 5: Soal cerita, karton Putu

```soal
{
 "title": "Contoh 5",
 "text": "Putu memotong karton persegi panjang dengan luas $(8 + 2\\sqrt{3})$ cm² dan lebar $(1 + \\sqrt{3})$ cm. Tentukan panjangnya dalam bentuk $a + b\\sqrt{3}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Panjang = ...",
   "options": [
    "$\\dfrac{8 + 2\\sqrt{3}}{1 + \\sqrt{3}}$",
    "$(8 + 2\\sqrt{3})(1 + \\sqrt{3})$",
    "$(8 + 2\\sqrt{3}) - (1 + \\sqrt{3})$"
   ],
   "answer": "$\\dfrac{8 + 2\\sqrt{3}}{1 + \\sqrt{3}}$",
   "hint": "Luas = panjang × lebar.",
   "explain": "Panjang = luas ÷ lebar.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Kalikan dengan sekawan penyebut, yaitu ...",
   "options": [
    "$\\sqrt{3} - 1$",
    "$1 + \\sqrt{3}$",
    "$\\sqrt{3}$"
   ],
   "answer": "$\\sqrt{3} - 1$",
   "hint": "Ganti salah satu tanda.",
   "explain": "Sekawan $1 + \\sqrt{3}$ adalah $\\sqrt{3} - 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Penyebut baru $(\\sqrt{3})^2 - 1^2$ = ?",
   "answer": "2",
   "hint": "$3 - 1$.",
   "explain": "Penyebut $= 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Pembilang $(8 + 2\\sqrt{3})(\\sqrt{3} - 1)$ = ...",
   "options": [
    "$6\\sqrt{3} - 2$",
    "$10\\sqrt{3} - 14$",
    "$6\\sqrt{3} + 2$"
   ],
   "answer": "$6\\sqrt{3} - 2$",
   "hint": "$8\\sqrt{3} - 8 + 2 \\cdot 3 - 2\\sqrt{3}$.",
   "explain": "$8\\sqrt{3} - 8 + 6 - 2\\sqrt{3} = 6\\sqrt{3} - 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Bagi dengan 2.",
   "options": [
    "$3\\sqrt{3} - 1$",
    "$3\\sqrt{3} - 2$",
    "$6\\sqrt{3} - 1$"
   ],
   "answer": "$3\\sqrt{3} - 1$",
   "hint": "Bagi setiap suku dengan 2.",
   "explain": "$\\frac{6\\sqrt{3}}{2} - \\frac{2}{2} = 3\\sqrt{3} - 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $3\\sqrt{3} - 1$ = ? (2 desimal)",
   "answer": "4,2",
   "hint": "$\\sqrt{3} \\approx 1{,}732$.",
   "explain": "$\\approx 4{,}20$ cm. Kalikan balik: $(1 + \\sqrt{3})(3\\sqrt{3} - 1) = 8 + 2\\sqrt{3}$. Cocok.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Panjangnya $(-1 + 3\\sqrt{3})$ cm, sekitar 4,20 cm."
}
```

## Kesalahan yang sering terjadi

- **Memecah akar penjumlahan.** Menulis $\sqrt{x^2 + 9} = x + 3$. Akar tidak bisa dipecah pada penjumlahan; cek dengan $x = 4$: $\sqrt{25} = 5$, bukan 7.
- **Menggabung akar yang tidak sejenis.** Menulis $\sqrt{2} + \sqrt{3} = \sqrt{5}$. Apel + jeruk tidak menjadi buah baru.
- **Salah memilih pengali.** Untuk $\frac{4}{3 - \sqrt{5}}$, mengalikan dengan $\sqrt{5}$ saja tidak menghilangkan akar. Pakai sekawan $3 + \sqrt{5}$, sehingga hasilnya $\frac{4(3 + \sqrt{5})}{4} = 3 + \sqrt{5}$.
- **Tidak mengecek akar palsu.** Setelah mengkuadratkan, setiap calon jawaban harus disubstitusi ke persamaan awal.
- **Lupa menyederhanakan.** Jawaban $\sqrt{50}$ belum selesai; tulis $5\sqrt{2}$.

## Ringkasan

- $\sqrt{ab} = \sqrt{a}\sqrt{b}$ dan $\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}}$, tetapi $\sqrt{a + b} \ne \sqrt{a} + \sqrt{b}$.
- Sederhanakan dengan mengeluarkan faktor kuadrat sempurna terbesar.
- Hanya akar sejenis yang bisa dijumlahkan.
- Rasionalkan dengan sekawan: $(a + \sqrt{b})(a - \sqrt{b}) = a^2 - b$.
- Setelah mengkuadratkan persamaan, selalu cek akar palsu.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Sederhanakan $\\sqrt{48} - \\sqrt{12}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "$\\sqrt{48}$ = ...",
   "options": [
    "$4\\sqrt{3}$",
    "$3\\sqrt{4}$",
    "$16\\sqrt{3}$",
    "$2\\sqrt{12}$"
   ],
   "answer": "$4\\sqrt{3}$",
   "hint": "Faktor kuadrat terbesar dari 48 adalah 16.",
   "explain": "$\\sqrt{16 \\times 3} = 4\\sqrt{3}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$\\sqrt{12}$ = ...",
   "options": [
    "$2\\sqrt{3}$",
    "$3\\sqrt{2}$",
    "$4\\sqrt{3}$"
   ],
   "answer": "$2\\sqrt{3}$",
   "hint": "$12 = 4 \\times 3$.",
   "explain": "$2\\sqrt{3}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasilnya ...",
   "options": [
    "$2\\sqrt{3}$",
    "$\\sqrt{36}$",
    "$6\\sqrt{3}$"
   ],
   "answer": "$2\\sqrt{3}$",
   "hint": "$4$ apel $-$ $2$ apel.",
   "explain": "$4\\sqrt{3} - 2\\sqrt{3} = 2\\sqrt{3}$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\sqrt{48} - \\sqrt{12} = 2\\sqrt{3}$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Sederhanakan $(\\sqrt{7} + 2)(\\sqrt{7} - 2)$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Bentuk ini termasuk ...",
   "options": [
    "Pasangan sekawan: $a^2 - b^2$",
    "Kuadrat sempurna: $a^2 + 2ab + b^2$"
   ],
   "answer": "Pasangan sekawan: $a^2 - b^2$",
   "hint": "Dua kurung hanya beda tanda.",
   "explain": "$(\\sqrt{7})^2 - 2^2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Hasilnya = ?",
   "answer": "3",
   "hint": "$7 - 4$.",
   "explain": "$7 - 4 = 3$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Hasilnya 3."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Rasionalkan $\\dfrac{6}{\\sqrt{3}}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Kalikan atas dan bawah dengan ...",
   "options": [
    "$\\sqrt{3}$",
    "$3$",
    "$6$"
   ],
   "answer": "$\\sqrt{3}$",
   "hint": "$\\sqrt{3}\\sqrt{3} = 3$.",
   "explain": "$\\frac{6\\sqrt{3}}{3}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasilnya ...",
   "options": [
    "$2\\sqrt{3}$",
    "$6\\sqrt{3}$",
    "$\\sqrt{2}$",
    "$3\\sqrt{2}$"
   ],
   "answer": "$2\\sqrt{3}$",
   "hint": "$6 \\div 3$.",
   "explain": "$\\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Rasionalkan $\\dfrac{1}{\\sqrt{5} - \\sqrt{2}}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Sekawan penyebut ...",
   "options": [
    "$\\sqrt{5} + \\sqrt{2}$",
    "$\\sqrt{5} - \\sqrt{2}$",
    "$\\sqrt{3}$"
   ],
   "answer": "$\\sqrt{5} + \\sqrt{2}$",
   "hint": "Ganti tanda tengahnya.",
   "explain": "$\\sqrt{5} + \\sqrt{2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Penyebut baru $(\\sqrt{5})^2 - (\\sqrt{2})^2$ = ?",
   "answer": "3",
   "hint": "$5 - 2$.",
   "explain": "Penyebut $= 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasilnya ...",
   "options": [
    "$\\dfrac{\\sqrt{5} + \\sqrt{2}}{3}$",
    "$\\dfrac{\\sqrt{5} - \\sqrt{2}}{3}$",
    "$\\sqrt{5} + \\sqrt{2}$"
   ],
   "answer": "$\\dfrac{\\sqrt{5} + \\sqrt{2}}{3}$",
   "hint": "Pembilang menjadi $1 \\times$ sekawan.",
   "explain": "$\\frac{\\sqrt{5} + \\sqrt{2}}{3}$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\dfrac{\\sqrt{5} + \\sqrt{2}}{3}$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Selesaikan $\\sqrt{x + 3} = x - 3$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Kuadratkan dan susun.",
   "options": [
    "$x^2 - 7x + 6 = 0$",
    "$x^2 - 5x + 6 = 0$",
    "$x^2 - 7x + 12 = 0$"
   ],
   "answer": "$x^2 - 7x + 6 = 0$",
   "hint": "$x + 3 = x^2 - 6x + 9$.",
   "explain": "Pindahkan ke satu ruas: $x^2 - 7x + 6 = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Calon jawabannya ...",
   "options": [
    "$x = 1$ atau $x = 6$",
    "$x = 2$ atau $x = 3$",
    "$x = -1$ atau $x = -6$"
   ],
   "answer": "$x = 1$ atau $x = 6$",
   "hint": "Faktorkan.",
   "explain": "$(x - 1)(x - 6) = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek ke persamaan awal. Penyelesaian yang sah $x$ = ?",
   "answer": "6",
   "hint": "Coba $x = 1$: $\\sqrt{4}$ vs $-2$.",
   "explain": "$x = 6$: $\\sqrt{9} = 3 = 6 - 3$. $x = 1$ palsu karena $2 \\ne -2$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x = 6$."
}
```
