---
id: sma3-01-bilangan-kompleks
judul: Bilangan Kompleks
jenjang: sma3
moe: "H2 Mathematics 9758 · Pure Mathematics · Introduction to Complex Numbers"
prasyarat: [sma2-01-trigonometri-identitas, sma1-08-polinomial-pecahan-parsial]
durasi_menit: 90
---

## Kenapa belajar ini?

Persamaan $x^2 + 1 = 0$ tidak punya penyelesaian real. Dengan bilangan kompleks, **setiap** persamaan polinomial punya akar. Bilangan kompleks juga dipakai insinyur listrik untuk arus bolak-balik, dan programmer grafis untuk memutar gambar.

## Analogi

Bayangkan bilangan real sebagai titik di **jalan lurus** yang membentang dari barat ke timur. Mengalikan dengan $-1$ berarti **berbalik arah 180°**.

Sekarang tanyakan: langkah apa yang kalau dilakukan **dua kali** sama dengan berbalik 180°? Jawabannya: **belok kiri 90°**. Itulah $i$. Karena dua kali belok 90° sama dengan berbalik, $i \times i = -1$.

```anim
{"type": "bangun", "title": "Belok kiri 90° dua kali", "titik": {"O": [0, 0], "1": [3, 0], "i": [0, 3], "−1": [-3, 0]}, "sisi": [["O", "1"], ["O", "i"], ["O", "−1"]], "sudut": [{"di": "O", "dari": "1", "ke": "i", "label": "90^\\circ", "siku": true}, {"di": "O", "dari": "i", "ke": "−1", "label": "90^\\circ"}], "langkah": [{"say": "Mulai dari bilangan 1 di jalan lurus (sumbu real).", "sisi": 1, "sorot": ["1"]}, {"say": "Kalikan dengan $i$: belok kiri 90°. Kita sampai di $i$.", "sisi": 2, "sudut": 1, "sorot": ["i"]}, {"say": "Kalikan lagi dengan $i$: belok kiri 90° lagi. Kita sampai di $-1$.", "sisi": 3, "sudut": 2, "sorot": ["−1"]}, {"say": "Dua kali belok 90° sama dengan berbalik 180°. Jadi $i \\times i = -1$.", "sisi": 3, "sudut": 2, "sorot": ["1", "−1"]}]}
```

Begitu kita boleh belok, bilangan tidak lagi hanya di jalan lurus, tetapi di seluruh **peta** (bidang). Setiap bilangan kompleks adalah titik di peta itu. Mengalikan bilangan kompleks berarti **memutar dan meregangkan**. Ide "putar dan regang" ini kita pakai sampai akhir.

## Konsep

### Bentuk kartesius

Bilangan kompleks ditulis $z = a + bi$ dengan $a, b \in \mathbb{R}$ dan $i^2 = -1$. $a$ disebut bagian real, $\text{Re}(z) = a$; $b$ bagian imajiner, $\text{Im}(z) = b$. Dua bilangan kompleks sama jika bagian real **dan** imajinernya sama.

### Operasi

Jumlah dan selisih: gabungkan bagian sejenis. Perkalian: jabarkan, lalu ganti $i^2$ dengan $-1$:
$$ (a + bi)(c + di) = (ac - bd) + (ad + bc)i $$

```anim
{"type": "persamaan", "title": "Mengalikan (1 + 2i)(3 + i)", "baris": [{"tex": "(1 + 2i)(3 + i)", "say": "Kalikan seperti dua suku aljabar."}, {"tex": "3 + i + 6i + 2i^2", "say": "Jabarkan: setiap suku dikali setiap suku."}, {"tex": "3 + 7i + 2(-1)", "say": "Ganti $i^2$ dengan $-1$.", "op": "$i^2 = -1$"}, {"tex": "1 + 7i", "say": "Kumpulkan bagian real dan bagian imajiner."}]}
```

**Sekawan** dari $z = a + bi$ adalah $z^* = a - bi$ (cermin terhadap sumbu real). Sifat penting:
$$ zz^* = a^2 + b^2 \quad (\text{selalu real}), \qquad z + z^* = 2a $$
Untuk membagi, kalikan pembilang dan penyebut dengan sekawan penyebut, sehingga penyebutnya menjadi real.

### Bidang Argand

Titik $(a, b)$ mewakili $z = a + bi$. Sumbu mendatar adalah sumbu real, sumbu tegak sumbu imajiner.

- **Modulus** $|z| = r = \sqrt{a^2 + b^2}$: jarak dari titik asal.
- **Argumen** $\arg z = \theta$: sudut dari sumbu real positif, dengan nilai utama $-\pi < \theta \leq \pi$. Hitung sudut acuan $\alpha = \tan^{-1}\left|\frac{b}{a}\right|$, lalu sesuaikan dengan kuadran dari gambar.

```anim
{"type": "bangun", "title": "z = 3 + 4i di bidang Argand", "titik": {"O": [0, 0], "P": [3, 0], "Z": [3, 4]}, "sisi": [["O", "P", "3"], ["P", "Z", "4"], ["O", "Z", "r = 5"]], "sudut": [{"di": "P", "dari": "O", "ke": "Z", "siku": true}, {"di": "O", "dari": "P", "ke": "Z", "label": "\\theta"}], "langkah": [{"say": "Bagian real 3: jalan 3 satuan di sumbu real.", "sisi": 1}, {"say": "Bagian imajiner 4: naik 4 satuan. Titik $Z$ mewakili $3 + 4i$.", "sisi": 2, "sudut": 1, "sorot": ["Z"]}, {"say": "Modulus = jarak ke titik asal: $\\sqrt{3^2 + 4^2} = 5$.", "sisi": 3, "sudut": 1}, {"say": "Argumen = sudut dari sumbu real positif: $\\theta = \\tan^{-1}\\frac{4}{3} \\approx 0{,}927$ rad.", "sisi": 3, "sudut": 2}]}
```

### Bentuk polar dan eksponensial

Dari gambar, $a = r\cos\theta$ dan $b = r\sin\theta$, jadi
$$ z = r(\cos\theta + i\sin\theta) = re^{i\theta} $$
Bentuk kedua memakai rumus Euler $e^{i\theta} = \cos\theta + i\sin\theta$.

**Perkalian dan pembagian.** Dengan sifat eksponen:
$$ z_1z_2 = r_1r_2\,e^{i(\theta_1 + \theta_2)}, \qquad \frac{z_1}{z_2} = \frac{r_1}{r_2}\,e^{i(\theta_1 - \theta_2)} $$
Jadi modulus **dikali** (regang), argumen **dijumlah** (putar). Inilah analogi "putar dan regang". Akibatnya $z^n = r^ne^{in\theta}$. Mengalikan dengan $i = e^{i\pi/2}$ adalah putar $90^\circ$ tanpa meregang.

```anim
{"type": "bangun", "title": "Kali i = putar 90°", "titik": {"O": [0, 0], "Z": [2, 1], "W": [-1, 2]}, "sisi": [["O", "Z", "|z|"], ["O", "W", "|iz|"]], "sudut": [{"di": "O", "dari": "Z", "ke": "W", "label": "90^\\circ", "siku": true}], "langkah": [{"say": "Titik $Z$ mewakili $z = 2 + i$.", "sisi": 1, "sorot": ["Z"]}, {"say": "$iz = 2i + i^2 = -1 + 2i$, yaitu titik $W$.", "sisi": 2, "sorot": ["W"]}, {"say": "$OW$ adalah $OZ$ yang diputar 90°, panjangnya tetap $\\sqrt{5}$.", "sisi": 2, "sudut": 1}]}
```

### Akar kompleks persamaan polinomial

Jika polinomial berkoefisien **real** punya akar $z = a + bi$ ($b \neq 0$), maka **sekawannya** $a - bi$ juga akar. Alasannya, sekawankan kedua ruas $P(z) = 0$; koefisien real tidak berubah, jadi $P(z^*) = 0$.

Pasangan akar $a \pm bi$ membentuk faktor kuadrat real:
$$ (z - (a + bi))(z - (a - bi)) = z^2 - 2az + (a^2 + b^2) $$
Persamaan kuadrat $az^2 + bz + c = 0$ dengan diskriminan negatif punya akar $z = \dfrac{-b \pm i\sqrt{4ac - b^2}}{2a}$.

```anim
{"type": "grafik", "title": "Tidak memotong sumbu x", "xmin": -4, "xmax": 2, "ymin": -1, "ymax": 8, "kurva": [{"f": "x^2+2x+2", "label": "y = x^2 + 2x + 2"}], "titik": [{"x": -1, "y": 1, "label": "puncak (-1, 1)"}], "langkah": [{"say": "Ini bidang koordinat.", "kurva": 0}, {"say": "Grafik $y = x^2 + 2x + 2$ selalu di atas sumbu $x$: tidak ada akar real.", "kurva": 1}, {"say": "Diskriminan $4 - 8 = -4 < 0$. Akarnya pasangan sekawan $z = -1 \\pm i$.", "kurva": 1, "titik": 1}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Operasi dasar

```soal
{
 "title": "Contoh 1",
 "text": "$z = 3 + 4i$ dan $w = 1 - 2i$. Tentukan $z + w$, $zw$, dan $\\dfrac{z}{w}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Jumlah. Bagian real $z + w$ = ?",
   "answer": "4",
   "hint": "Jumlahkan bagian real saja: 3 dan 1.",
   "explain": "$3 + 1 = 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Bagian imajiner $z + w$ = ?",
   "answer": "2",
   "hint": "Jumlahkan koefisien $i$: 4 dan $-2$.",
   "explain": "$4 + (-2) = 2$, jadi $z + w = 4 + 2i$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Kali. $zw = 3 - 6i + 4i - 8i^2$. Suku $-8i^2$ sama dengan?",
   "options": [
    "$+8$",
    "$-8$",
    "$-8i$"
   ],
   "answer": "$+8$",
   "hint": "Ingat $i^2 = -1$.",
   "explain": "$-8i^2 = -8(-1) = +8$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Bagian real $zw$ = ?",
   "answer": "11",
   "hint": "Bagian real: 3 dan +8.",
   "explain": "$3 + 8 = 11$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Bagian imajiner $zw$ = ?",
   "answer": "-2",
   "hint": "Koefisien $i$: $-6i + 4i$.",
   "explain": "$-6 + 4 = -2$, jadi $zw = 11 - 2i$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Bagi dengan sekawan. Penyebut $(1 - 2i)(1 + 2i)$ = ?",
   "answer": "5",
   "hint": "Pakai $zz^* = a^2 + b^2$.",
   "explain": "$1^2 + 2^2 = 5$, penyebut menjadi real.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Pembilang $(3 + 4i)(1 + 2i)$ = ?",
   "options": [
    "$-5 + 10i$",
    "$11 + 10i$",
    "$3 + 8i$"
   ],
   "answer": "$-5 + 10i$",
   "hint": "Jabarkan: $3 + 6i + 4i + 8i^2$.",
   "explain": "$8i^2 = -8$, jadi $3 - 8 + 10i = -5 + 10i$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Jadi $\\dfrac{z}{w}$ = ?",
   "options": [
    "$-1 + 2i$",
    "$-5 + 10i$",
    "$1 + 2i$"
   ],
   "answer": "$-1 + 2i$",
   "hint": "Bagi kedua bagian pembilang dengan 5.",
   "explain": "$\\frac{-5 + 10i}{5} = -1 + 2i$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: $w \\times (-1 + 2i)$ = ?",
   "options": [
    "$3 + 4i$",
    "$-5 + 4i$",
    "$3 - 4i$"
   ],
   "answer": "$3 + 4i$",
   "hint": "$(1 - 2i)(-1 + 2i) = -1 + 2i + 2i - 4i^2$.",
   "explain": "Hasilnya $3 + 4i = z$. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $z + w = 4 + 2i$, $zw = 11 - 2i$, dan $\\dfrac{z}{w} = -1 + 2i$."
}
```

### Contoh 2: Bentuk polar, putar dan regang

```soal
{
 "title": "Contoh 2",
 "text": "$z = -1 + \\sqrt{3}\\,i$ dan $w = 1 + i$. Nyatakan $z$ dan $w$ dalam bentuk $re^{i\\theta}$, lalu tentukan $zw$ dan $z^3$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Modulus. $|z|$ = ?",
   "answer": "2",
   "hint": "$|z| = \\sqrt{a^2 + b^2}$ dengan $a = -1$, $b = \\sqrt{3}$.",
   "explain": "$\\sqrt{1 + 3} = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$|w|$ = ?",
   "options": [
    "$\\sqrt{2}$",
    "$2$",
    "$1$"
   ],
   "answer": "$\\sqrt{2}$",
   "hint": "$\\sqrt{1^2 + 1^2}$.",
   "explain": "$|w| = \\sqrt{2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Argumen. $z$ di kuadran II dengan sudut acuan $\\frac{\\pi}{3}$. $\\arg z$ = ?",
   "options": [
    "$\\frac{2\\pi}{3}$",
    "$-\\frac{\\pi}{3}$",
    "$\\frac{\\pi}{3}$",
    "$\\frac{4\\pi}{3}$"
   ],
   "answer": "$\\frac{2\\pi}{3}$",
   "hint": "Di kuadran II, argumen = $\\pi -$ sudut acuan.",
   "explain": "$\\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$. Kalkulator memberi $-\\frac{\\pi}{3}$, tetapi titiknya di kuadran II.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$\\arg w$ = ?",
   "options": [
    "$\\frac{\\pi}{4}$",
    "$\\frac{\\pi}{2}$",
    "$1$"
   ],
   "answer": "$\\frac{\\pi}{4}$",
   "hint": "$w$ di kuadran I dan $\\tan\\theta = \\frac{1}{1}$.",
   "explain": "$\\tan^{-1} 1 = \\frac{\\pi}{4}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Kalikan (regang). $|zw|$ = ?",
   "options": [
    "$2\\sqrt{2}$",
    "$2 + \\sqrt{2}$",
    "$\\sqrt{2}$"
   ],
   "answer": "$2\\sqrt{2}$",
   "hint": "Modulus dikali.",
   "explain": "$2 \\times \\sqrt{2} = 2\\sqrt{2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Kalikan (putar). $\\arg(zw)$ = ?",
   "options": [
    "$\\frac{11\\pi}{12}$",
    "$\\frac{\\pi^2}{6}$",
    "$\\frac{5\\pi}{12}$"
   ],
   "answer": "$\\frac{11\\pi}{12}$",
   "hint": "Argumen dijumlah, bukan dikali.",
   "explain": "$\\frac{2\\pi}{3} + \\frac{\\pi}{4} = \\frac{8\\pi + 3\\pi}{12} = \\frac{11\\pi}{12}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Pangkat. $z^3 = 2^3 e^{i\\,2\\pi}$. Nilainya = ?",
   "answer": "8",
   "hint": "Putaran $2\\pi$ kembali ke sumbu real positif.",
   "explain": "$e^{i2\\pi} = 1$, jadi $z^3 = 8$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $(-1 + \\sqrt{3}i)^2 = -2 - 2\\sqrt{3}i$. Kalikan lagi dengan $(-1 + \\sqrt{3}i)$, hasilnya = ?",
   "answer": "8",
   "hint": "Jabarkan; ingat $i^2 = -1$.",
   "explain": "$2 - 2\\sqrt{3}i + 2\\sqrt{3}i - 6i^2 = 2 + 6 = 8$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $z = 2e^{i\\,2\\pi/3}$, $w = \\sqrt{2}e^{i\\pi/4}$, $zw = 2\\sqrt{2}e^{i\\,11\\pi/12}$, dan $z^3 = 8$."
}
```

### Contoh 3: Akar persamaan pangkat tiga

```soal
{
 "title": "Contoh 3",
 "text": "Diketahui $1 + 2i$ adalah akar $z^3 - z^2 + 3z + 5 = 0$. Tentukan semua akarnya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pakai sifat sekawan. Akar lain yang pasti ada adalah?",
   "options": [
    "$1 - 2i$",
    "$-1 + 2i$",
    "$-1 - 2i$"
   ],
   "answer": "$1 - 2i$",
   "hint": "Koefisiennya real, jadi akar tidak real berpasangan dengan sekawannya.",
   "explain": "Sekawan $1 + 2i$ adalah $1 - 2i$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Faktor kuadrat $(z - 1 - 2i)(z - 1 + 2i)$ = ?",
   "options": [
    "$z^2 - 2z + 5$",
    "$z^2 - 2z - 3$",
    "$z^2 + 2z + 5$"
   ],
   "answer": "$z^2 - 2z + 5$",
   "hint": "Tulis sebagai $(z - 1)^2 - (2i)^2$.",
   "explain": "$(z - 1)^2 + 4 = z^2 - 2z + 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $z^3 - z^2 + 3z + 5 = (z^2 - 2z + 5)(z + c)$. Bandingkan konstanta: $c$ = ?",
   "answer": "1",
   "hint": "Konstanta di kanan adalah $5c$.",
   "explain": "$5c = 5$, jadi $c = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Akar ketiga (real) = ?",
   "answer": "-1",
   "hint": "Faktor ketiga $z + 1 = 0$.",
   "explain": "$z = -1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: substitusi $z = -1$ ke $z^3 - z^2 + 3z + 5$. Hasilnya = ?",
   "answer": "0",
   "hint": "$-1 - 1 - 3 + 5$.",
   "explain": "Hasilnya 0, jadi $-1$ memang akar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi akarnya $1 + 2i$, $1 - 2i$, dan $-1$."
}
```

### Contoh 4: Memasang tiang taman berbentuk persegi

```soal
{
 "title": "Contoh 4",
 "text": "Pak Ketut memasang empat tiang lampu taman membentuk persegi $ABCD$ (berlawanan arah jarum jam). Pada denah, $A$ diwakili $1 + i$ dan $B$ diwakili $4 + 2i$ (satuan meter). Tentukan posisi $C$ dan $D$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Vektor sisi $\\overrightarrow{AB} = (4 + 2i) - (1 + i)$. Bagian real = ?",
   "answer": "3",
   "hint": "Kurangkan bagian real: 4 − 1.",
   "explain": "$4 - 1 = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Bagian imajiner = ?",
   "answer": "1",
   "hint": "Kurangkan bagian imajiner: 2 − 1.",
   "explain": "$\\overrightarrow{AB} = 3 + i$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Putar 90° berlawanan arah jarum jam: $\\overrightarrow{BC} = i(3 + i)$ = ?",
   "options": [
    "$-1 + 3i$",
    "$1 + 3i$",
    "$3 - i$"
   ],
   "answer": "$-1 + 3i$",
   "hint": "$i(3 + i) = 3i + i^2$.",
   "explain": "$3i - 1 = -1 + 3i$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $C = B + (-1 + 3i)$. Koordinat $x$ titik $C$ = ?",
   "answer": "3",
   "hint": "Bagian real: 4 + (−1).",
   "explain": "$4 - 1 = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Koordinat $y$ titik $C$ = ?",
   "answer": "5",
   "hint": "Bagian imajiner: 2 + 3.",
   "explain": "$C = 3 + 5i$, titik (3, 5).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$D = A + (-1 + 3i)$. Koordinat $x$ titik $D$ = ?",
   "answer": "0",
   "hint": "Bagian real: 1 + (−1).",
   "explain": "$1 - 1 = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Koordinat $y$ titik $D$ = ?",
   "answer": "4",
   "hint": "Bagian imajiner: 1 + 3.",
   "explain": "$D = 4i$, titik (0, 4).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $|BC|^2 = |-1 + 3i|^2$ = ?",
   "answer": "10",
   "hint": "$a^2 + b^2$.",
   "explain": "$1 + 9 = 10 = |AB|^2$. Sisi sama panjang, dan $\\overrightarrow{DC} = (3 + 5i) - 4i = 3 + i = \\overrightarrow{AB}$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $C = 3 + 5i$ dan $D = 4i$, yaitu titik $(3, 5)$ dan $(0, 4)$ pada denah."
}
```

## Kesalahan yang sering terjadi

- **Lupa $i^2 = -1$.** Menulis $(3 + 4i)(1 - 2i) = 3 - 2i - 8i^2$ lalu berhenti, atau mengganti $-8i^2$ dengan $-8$. Yang benar $-8i^2 = +8$.
- **Argumen di kuadran salah.** Untuk $-1 + \sqrt{3}i$, kalkulator memberi $\tan^{-1}\frac{\sqrt{3}}{-1} = -\frac{\pi}{3}$. Titiknya di kuadran II, jadi argumen $\frac{2\pi}{3}$. Selalu gambar titiknya dulu.
- **Mengalikan argumen.** Pada perkalian, argumen **dijumlah**, bukan dikali. Hanya modulus yang dikali.
- **Memakai sifat sekawan tanpa syarat.** Akar berpasangan sekawan hanya jika **semua koefisien real**. Untuk $z^2 - iz + 2 = 0$, sifat ini tidak berlaku.
- **$|a + bi| = a + b$.** Modulus adalah $\sqrt{a^2 + b^2}$, seperti teorema Pythagoras di bidang Argand.

## Ringkasan

- $z = a + bi$, $i^2 = -1$; dua bilangan kompleks sama jika bagian real dan imajinernya sama.
- Sekawan $z^* = a - bi$; $zz^* = |z|^2$; pembagian memakai sekawan penyebut.
- Bidang Argand: $|z| = \sqrt{a^2 + b^2}$, $\arg z$ di $(-\pi, \pi]$, sesuaikan kuadran.
- $z = r(\cos\theta + i\sin\theta) = re^{i\theta}$. Kali: modulus dikali, argumen dijumlah (putar dan regang).
- Polinomial berkoefisien real: akar tidak real muncul berpasangan sekawan dan membentuk faktor $z^2 - 2az + (a^2 + b^2)$.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Sederhanakan $(2 + 3i)(4 - i)$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Jabarkan: $8 - 2i + 12i - 3i^2$. Suku $-3i^2$ sama dengan?",
   "options": [
    "$+3$",
    "$-3$",
    "$-3i$"
   ],
   "answer": "$+3$",
   "hint": "$i^2 = -1$.",
   "explain": "$-3(-1) = +3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Bagian real = ?",
   "answer": "11",
   "hint": "Jumlahkan 8 dan +3.",
   "explain": "$8 + 3 = 11$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Bagian imajiner = ?",
   "answer": "10",
   "hint": "Koefisien $i$: $-2 + 12$.",
   "explain": "$10$, jadi hasilnya $11 + 10i$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $(2 + 3i)(4 - i) = 11 + 10i$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Sederhanakan $\\dfrac{5 + 5i}{2 - i}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Kalikan atas-bawah dengan $2 + i$. Penyebut $(2 - i)(2 + i)$ = ?",
   "answer": "5",
   "hint": "$a^2 + b^2$.",
   "explain": "$4 + 1 = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Pembilang $(5 + 5i)(2 + i)$ = ?",
   "options": [
    "$5 + 15i$",
    "$15 + 15i$",
    "$10 + 5i$"
   ],
   "answer": "$5 + 15i$",
   "hint": "$10 + 5i + 10i + 5i^2$.",
   "explain": "$5i^2 = -5$, jadi $5 + 15i$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasil akhirnya?",
   "options": [
    "$1 + 3i$",
    "$5 + 15i$",
    "$1 + 15i$"
   ],
   "answer": "$1 + 3i$",
   "hint": "Bagi kedua bagian dengan 5.",
   "explain": "$\\frac{5 + 15i}{5} = 1 + 3i$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\dfrac{5 + 5i}{2 - i} = 1 + 3i$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Nyatakan $z = -2 - 2i$ dalam bentuk $re^{i\\theta}$ dengan $-\\pi < \\theta \\leq \\pi$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Modulus $|z|$ = ?",
   "options": [
    "$2\\sqrt{2}$",
    "$4$",
    "$2$"
   ],
   "answer": "$2\\sqrt{2}$",
   "hint": "$\\sqrt{(-2)^2 + (-2)^2}$.",
   "explain": "$\\sqrt{8} = 2\\sqrt{2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Titik $(-2, -2)$ ada di kuadran mana?",
   "options": [
    "I",
    "II",
    "III",
    "IV"
   ],
   "answer": "III",
   "hint": "Real negatif, imajiner negatif.",
   "explain": "Kiri bawah: kuadran III.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Argumen (nilai utama) = ?",
   "options": [
    "$-\\frac{3\\pi}{4}$",
    "$\\frac{\\pi}{4}$",
    "$\\frac{5\\pi}{4}$",
    "$\\frac{3\\pi}{4}$"
   ],
   "answer": "$-\\frac{3\\pi}{4}$",
   "hint": "Sudut acuan $\\frac{\\pi}{4}$; di kuadran III, putar searah jarum jam dari sumbu real positif.",
   "explain": "$-\\pi + \\frac{\\pi}{4} = -\\frac{3\\pi}{4}$. $\\frac{5\\pi}{4}$ di luar rentang nilai utama.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $z = 2\\sqrt{2}\\,e^{-i\\,3\\pi/4}$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Selesaikan $z^2 + 4z + 13 = 0$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Diskriminan $b^2 - 4ac$ = ?",
   "answer": "-36",
   "hint": "$16 - 4(1)(13)$.",
   "explain": "$16 - 52 = -36$, negatif, jadi akarnya tidak real.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$\\sqrt{-36}$ = ?",
   "options": [
    "$6i$",
    "$-6$",
    "$36i$"
   ],
   "answer": "$6i$",
   "hint": "$\\sqrt{-36} = \\sqrt{36}\\,\\sqrt{-1}$.",
   "explain": "$6i$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Akar-akarnya?",
   "options": [
    "$-2 \\pm 3i$",
    "$2 \\pm 3i$",
    "$-4 \\pm 6i$",
    "$-2 \\pm 6i$"
   ],
   "answer": "$-2 \\pm 3i$",
   "hint": "$z = \\frac{-4 \\pm 6i}{2}$; bagi kedua suku dengan 2.",
   "explain": "$z = -2 \\pm 3i$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $z = -2 \\pm 3i$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Diketahui $2 - i$ adalah akar $z^3 - 5z^2 + 9z - 5 = 0$. Tentukan akar-akar lainnya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Akar tidak real yang lain?",
   "options": [
    "$2 + i$",
    "$-2 + i$",
    "$-2 - i$"
   ],
   "answer": "$2 + i$",
   "hint": "Koefisien real: akar berpasangan sekawan.",
   "explain": "Sekawan $2 - i$ adalah $2 + i$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Faktor kuadratnya?",
   "options": [
    "$z^2 - 4z + 5$",
    "$z^2 + 4z + 5$",
    "$z^2 - 4z + 3$"
   ],
   "answer": "$z^2 - 4z + 5$",
   "hint": "$(z - 2)^2 - i^2$.",
   "explain": "$(z - 2)^2 + 1 = z^2 - 4z + 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Akar real ketiga = ?",
   "answer": "1",
   "hint": "$(z^2 - 4z + 5)(z + c)$; bandingkan konstanta: $5c = -5$.",
   "explain": "$c = -1$, faktor $z - 1$, jadi $z = 1$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi akar lainnya $2 + i$ dan $1$."
}
```
