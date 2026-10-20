---
id: sma2-10-vektor-3d
judul: Vektor di Ruang, Garis, dan Bidang
jenjang: sma2
moe: "H2 Mathematics 9758 · Pure Mathematics · Vectors"
prasyarat: [sma1-02-vektor-2d, sma2-01-trigonometri-identitas]
durasi_menit: 90
---

## Kenapa belajar ini?

Pilot drone, arsitek, dan pembuat gim 3D bekerja di ruang tiga dimensi. Dengan vektor, kita bisa menghitung sudut antara dua kabel, jarak terdekat drone ke tiang, atau titik tempat sebuah lintasan menembus atap.

## Analogi

Bayangkan sebuah **drone di lapangan Puputan**. Posisinya ditentukan tiga perintah: berapa meter ke **timur** ($x$), ke **utara** ($y$), dan **ke atas** ($z$).

- **Vektor** adalah perintah terbang: arah dan panjang perpindahan.
- **Perkalian titik** mengukur "seberapa searah" dua perintah, seperti panjang **bayangan** satu tongkat pada tongkat lain saat matahari tepat di atasnya.
- **Perkalian silang** menghasilkan arah yang **tegak lurus** terhadap dua perintah sekaligus, seperti **tiang** yang berdiri tegak di atas lantai yang dibentuk dua arah itu.
- **Garis** adalah lintasan drone yang terbang lurus. **Bidang** adalah lantai atau atap yang datar (boleh miring).

```anim
{"type": "bangun", "title": "Perintah terbang drone: 3 ke timur, 2 ke utara, 4 ke atas", "titik": {"O": [0.0, 0.0], "X": [5.0, 0.0], "Y": [2.4, 1.6], "Z": [0.0, 5.0], "A": [3.0, 0.0], "B": [4.2, 0.8], "P": [4.2, 4.8]}, "sisi": [["O", "X"], ["O", "Y"], ["O", "Z"], ["O", "A", "3"], ["A", "B", "2"], ["B", "P", "4"], ["O", "P"]], "langkah": [{"say": "Sumbu $x$ ke timur, $y$ ke utara, $z$ ke atas.", "sisi": 3}, {"say": "Terbang 3 m ke timur.", "sisi": 4, "sorot": ["OA"]}, {"say": "Lalu 2 m ke utara.", "sisi": 5, "sorot": ["AB"]}, {"say": "Lalu 4 m ke atas, sampai di $P(3, 2, 4)$.", "sisi": 6, "sorot": ["BP"]}, {"say": "Vektor $\\overrightarrow{OP} = 3\\mathbf{i} + 2\\mathbf{j} + 4\\mathbf{k}$, panjangnya $\\sqrt{9 + 4 + 16} = \\sqrt{29}$.", "sisi": 7, "sorot": ["OP"]}]}
```

## Konsep

### Vektor di ruang

Dengan vektor satuan $\mathbf{i}, \mathbf{j}, \mathbf{k}$ ke arah sumbu $x, y, z$:
$$ \mathbf{a} = a_1\mathbf{i} + a_2\mathbf{j} + a_3\mathbf{k} = \begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix}, \qquad |\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2} $$
Vektor satuan searah $\mathbf{a}$ adalah $\hat{\mathbf{a}} = \frac{\mathbf{a}}{|\mathbf{a}|}$. Vektor dari $A$ ke $B$ adalah $\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$.

### Perkalian titik

$$ \mathbf{a} \cdot \mathbf{b} = a_1b_1 + a_2b_2 + a_3b_3 = |\mathbf{a}||\mathbf{b}|\cos\theta $$
Rumus kedua berasal dari aturan kosinus pada segitiga dengan sisi $\mathbf{a}$, $\mathbf{b}$, dan $\mathbf{a} - \mathbf{b}$. Akibatnya:
- $\mathbf{a} \perp \mathbf{b} \iff \mathbf{a} \cdot \mathbf{b} = 0$.
- Panjang proyeksi (bayangan) $\mathbf{a}$ pada arah $\mathbf{b}$ adalah $|\mathbf{a} \cdot \hat{\mathbf{b}}|$.

```anim
{"type": "bangun", "title": "Perkalian titik sebagai bayangan", "titik": {"O": [0, 0], "A": [4, 3], "B": [7, 0], "F": [4, 0]}, "sisi": [["O", "B", "\\mathbf{b}"], ["O", "A", "\\mathbf{a}"], ["A", "F"], ["O", "F", "|\\mathbf{a}|\\cos\\theta"]], "sudut": [{"di": "O", "dari": "B", "ke": "A", "label": "\\theta"}, {"di": "F", "dari": "O", "ke": "A", "siku": true}], "langkah": [{"say": "Dua tongkat $\\mathbf{a}$ dan $\\mathbf{b}$ membentuk sudut $\\theta$.", "sisi": 2, "sudut": 1}, {"say": "Matahari tepat di atas: bayangan $\\mathbf{a}$ jatuh tegak lurus ke $\\mathbf{b}$.", "sisi": 3, "sudut": 2}, {"say": "Panjang bayangan $|\\mathbf{a}|\\cos\\theta = \\mathbf{a} \\cdot \\hat{\\mathbf{b}}$. Jika $\\theta = 90°$, bayangannya nol: $\\mathbf{a} \\cdot \\mathbf{b} = 0$.", "sisi": 4, "sudut": 2, "sorot": ["OF"]}]}
```

### Perkalian silang

$$ \mathbf{a} \times \mathbf{b} = \begin{pmatrix} a_2b_3 - a_3b_2 \\ a_3b_1 - a_1b_3 \\ a_1b_2 - a_2b_1 \end{pmatrix} $$
Hasilnya tegak lurus terhadap $\mathbf{a}$ dan $\mathbf{b}$ (tiang di atas lantai), dengan $|\mathbf{a} \times \mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta$, yaitu luas jajargenjang yang dibentuk $\mathbf{a}$ dan $\mathbf{b}$. Luas segitiga adalah setengahnya. Urutan penting: $\mathbf{b} \times \mathbf{a} = -(\mathbf{a} \times \mathbf{b})$.

```anim
{"type": "bangun", "title": "Perkalian silang sebagai tiang", "titik": {"O": [0.0, 0.0], "A": [3.0, 0.0], "B": [2.2, 0.8], "C": [5.2, 0.8], "N": [0.0, 3.0]}, "sisi": [["O", "A", "\\mathbf{a}"], ["O", "B", "\\mathbf{b}"], ["A", "C"], ["B", "C"], ["O", "N", "\\mathbf{a} \\times \\mathbf{b}"]], "langkah": [{"say": "Dua arah $\\mathbf{a}$ dan $\\mathbf{b}$ membentuk lantai.", "sisi": 2}, {"say": "Jajargenjang yang dibentuk keduanya punya luas $|\\mathbf{a}||\\mathbf{b}|\\sin\\theta$.", "sisi": 4}, {"say": "$\\mathbf{a} \\times \\mathbf{b}$ berdiri tegak lurus lantai, panjangnya sama dengan luas itu. Contoh: $(3, 0, 0) \\times (1, 2, 0) = (0, 0, 6)$.", "sisi": 5, "sorot": ["ON"]}]}
```

### Persamaan garis

Garis melalui titik $A$ dengan arah $\mathbf{d}$: $\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}$, $\lambda \in \mathbb{R}$. Bentuk kartesiusnya
$$ \frac{x - a_1}{d_1} = \frac{y - a_2}{d_2} = \frac{z - a_3}{d_3} $$

### Persamaan bidang

Bidang ditentukan oleh satu titik $A$ dan **vektor normal** $\mathbf{n}$ (tiang tegak lurus bidang). Untuk setiap titik $R$ pada bidang, $\overrightarrow{AR}$ tegak lurus $\mathbf{n}$, jadi $(\mathbf{r} - \mathbf{a}) \cdot \mathbf{n} = 0$:
$$ \mathbf{r} \cdot \mathbf{n} = \mathbf{a} \cdot \mathbf{n} \quad\Longleftrightarrow\quad n_1x + n_2y + n_3z = p $$
Bentuk parametrik: $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b} + \mu\mathbf{c}$, dengan normal $\mathbf{n} = \mathbf{b} \times \mathbf{c}$.

### Sudut

Ambil sudut lancip, jadi pakai nilai mutlak:
- Garis dan garis: $\cos\theta = \dfrac{|\mathbf{d}_1 \cdot \mathbf{d}_2|}{|\mathbf{d}_1||\mathbf{d}_2|}$.
- Bidang dan bidang: $\cos\theta = \dfrac{|\mathbf{n}_1 \cdot \mathbf{n}_2|}{|\mathbf{n}_1||\mathbf{n}_2|}$.
- Garis dan bidang: $\sin\theta = \dfrac{|\mathbf{d} \cdot \mathbf{n}|}{|\mathbf{d}||\mathbf{n}|}$. Pakai sinus karena sudut antara $\mathbf{d}$ dan normal adalah $90^\circ - \theta$.

```visual
{"type": "table", "caption": "Rumus sudut lancip: cos untuk garis-garis dan bidang-bidang, sin untuk garis-bidang", "head": ["Pasangan", "Vektor yang dipakai", "Rumus"], "rows": [["garis dan garis", "d₁ dan d₂", "cos θ"], ["bidang dan bidang", "n₁ dan n₂", "cos θ"], ["garis dan bidang", "d dan n", "sin θ"]]}
```

### Jarak

- Titik $P$ ke garis $\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}$: $\dfrac{|\overrightarrow{AP} \times \mathbf{d}|}{|\mathbf{d}|}$, atau cari kaki tegak lurus $F$ dengan syarat $\overrightarrow{FP} \cdot \mathbf{d} = 0$.
- Titik $P$ ke bidang $\mathbf{r} \cdot \mathbf{n} = p$: $\dfrac{|\mathbf{p} \cdot \mathbf{n} - p|}{|\mathbf{n}|}$, dengan $\mathbf{p}$ vektor posisi $P$.

### Perpotongan

- **Dua garis**: samakan $\mathbf{a}_1 + \lambda\mathbf{d}_1 = \mathbf{a}_2 + \mu\mathbf{d}_2$. Tiga persamaan, dua anu. Jika konsisten, garis berpotongan. Jika tidak konsisten dan arahnya tidak sejajar, garis **bersilangan**.
- **Garis dan bidang**: substitusi $\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}$ ke persamaan bidang, selesaikan $\lambda$.
- **Dua bidang**: garis potongnya berarah $\mathbf{n}_1 \times \mathbf{n}_2$ (tegak lurus kedua tiang); titiknya dicari dengan memilih satu koordinat, misalnya $y = 0$.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Sudut dan luas segitiga

```soal
{
 "title": "Contoh 1",
 "text": "$\\overrightarrow{OA} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 2 \\end{pmatrix}$ dan $\\overrightarrow{OB} = \\begin{pmatrix} 3 \\\\ 0 \\\\ 4 \\end{pmatrix}$. Tentukan sudut $AOB$ dan luas segitiga $OAB$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: $|\\mathbf{a}| = ?$",
   "answer": "3",
   "hint": "$\\sqrt{1 + 4 + 4}$.",
   "explain": "$|\\mathbf{a}| = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$|\\mathbf{b}| = ?$",
   "answer": "5",
   "hint": "$\\sqrt{9 + 0 + 16}$.",
   "explain": "$|\\mathbf{b}| = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\mathbf{a} \\cdot \\mathbf{b} = ?$",
   "answer": "11",
   "hint": "Kalikan komponen yang sepasang, lalu jumlahkan.",
   "explain": "$3 + 0 + 8 = 11$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Sudut $AOB$, dari $\\cos\\theta = \\frac{11}{15}$? Bulatkan ke 1 desimal.",
   "answer": "42,8",
   "hint": "$\\cos^{-1}\\frac{11}{15}$ dengan kalkulator mode derajat.",
   "explain": "$\\theta \\approx 42{,}8°$.",
   "error": "salah-pembulatan",
   "suffix": "°"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: $\\mathbf{a} \\times \\mathbf{b} = ?$",
   "options": [
    "$(8, 2, -6)$",
    "$(8, -2, -6)$",
    "$(3, 0, 8)$",
    "$(-8, 2, 6)$"
   ],
   "answer": "$(8, 2, -6)$",
   "hint": "Komponen tengah $a_3b_1 - a_1b_3 = 2(3) - 1(4)$.",
   "explain": "$(2 \\cdot 4 - 2 \\cdot 0,\\ 2 \\cdot 3 - 1 \\cdot 4,\\ 1 \\cdot 0 - 2 \\cdot 3)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Luas segitiga $= \\frac{1}{2}|\\mathbf{a} \\times \\mathbf{b}|$. Bulatkan ke 2 desimal.",
   "answer": "5,10",
   "hint": "$\\frac{1}{2}\\sqrt{64 + 4 + 36}$.",
   "explain": "$\\frac{1}{2}\\sqrt{104} = \\sqrt{26} \\approx 5{,}10$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $(8, 2, -6) \\cdot (1, 2, 2) = ?$",
   "answer": "0",
   "hint": "$8 + 4 - 12$.",
   "explain": "Nol: tiang tegak lurus lengan $\\mathbf{a}$. Dengan $\\mathbf{b}$: $24 + 0 - 24 = 0$ juga.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\angle AOB \\approx 42{,}8°$, luas $\\sqrt{26} \\approx 5{,}10$ satuan luas."
}
```

### Contoh 2: Garis yang berpotongan

```soal
{
 "title": "Contoh 2",
 "text": "Tunjukkan bahwa $l_1: \\mathbf{r} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} + \\lambda\\begin{pmatrix} 1 \\\\ -1 \\\\ 2 \\end{pmatrix}$ dan $l_2: \\mathbf{r} = \\begin{pmatrix} 1 \\\\ -2 \\\\ 7 \\end{pmatrix} + \\mu\\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$ berpotongan. Tentukan titik potong dan sudutnya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Komponen $z$: $3 + 2\\lambda = 7$. Berapa $\\lambda$?",
   "answer": "2",
   "hint": "Komponen $z$ pada $l_2$ selalu 7.",
   "explain": "$2\\lambda = 4$, jadi $\\lambda = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Komponen $x$: $1 + \\lambda = 1 + \\mu$. Berapa $\\mu$?",
   "answer": "2",
   "hint": "$\\mu = \\lambda$.",
   "explain": "$\\mu = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Uji komponen $y$: $2 - \\lambda$ vs $-2 + \\mu$.",
   "options": [
    "Sama-sama 0, konsisten: berpotongan",
    "Berbeda: bersilangan",
    "Tidak perlu diuji"
   ],
   "answer": "Sama-sama 0, konsisten: berpotongan",
   "hint": "Masukkan $\\lambda = 2$ dan $\\mu = 2$.",
   "explain": "$2 - 2 = 0$ dan $-2 + 2 = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Titik potongnya?",
   "options": [
    "$(3, 0, 7)$",
    "$(3, 4, 7)$",
    "$(2, 0, 7)$"
   ],
   "answer": "$(3, 0, 7)$",
   "hint": "Masukkan $\\lambda = 2$ ke $l_1$.",
   "explain": "$(1 + 2, 2 - 2, 3 + 4)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: $\\mathbf{d}_1 \\cdot \\mathbf{d}_2 = ?$",
   "answer": "0",
   "hint": "$(1)(1) + (-1)(1) + (2)(0)$.",
   "explain": "Nol, jadi sudutnya $90°$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: koordinat $x$ titik di $l_2$ saat $\\mu = 2$?",
   "answer": "3",
   "hint": "$1 + 2$.",
   "explain": "Titik di $l_2$: $(3, 0, 7)$. Sama.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Berpotongan di $(3, 0, 7)$ dengan sudut $90°$."
}
```

### Contoh 3: Bidang dari tiga titik dan garis yang menembusnya

```soal
{
 "title": "Contoh 3",
 "text": "Bidang $\\Pi$ melalui $A(1, 0, 2)$, $B(3, 1, 1)$, $C(2, -1, 4)$. (a) Tentukan persamaan kartesius $\\Pi$. (b) Garis $\\mathbf{r} = \\begin{pmatrix} 4 \\\\ 2 \\\\ 1 \\end{pmatrix} + \\lambda\\begin{pmatrix} 1 \\\\ 1 \\\\ -1 \\end{pmatrix}$ menembus $\\Pi$. Tentukan titik tembus dan sudut antara garis dan bidang.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: $\\overrightarrow{AB}$ dan $\\overrightarrow{AC}$?",
   "options": [
    "$(2, 1, -1)$ dan $(1, -1, 2)$",
    "$(4, 1, 3)$ dan $(3, -1, 6)$",
    "$(-2, -1, 1)$ dan $(1, -1, 2)$"
   ],
   "answer": "$(2, 1, -1)$ dan $(1, -1, 2)$",
   "hint": "$\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}$.",
   "explain": "Dua arah yang berada di bidang.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Normal $\\mathbf{n} = \\overrightarrow{AB} \\times \\overrightarrow{AC}$?",
   "options": [
    "$(1, -5, -3)$",
    "$(1, 5, -3)$",
    "$(3, -5, -1)$",
    "$(-1, 5, 3)$"
   ],
   "answer": "$(1, -5, -3)$",
   "hint": "Komponen tengah: $(-1)(1) - (2)(2)$.",
   "explain": "$(1 \\cdot 2 - (-1)(-1),\\ -1 - 4,\\ -2 - 1)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $p = \\mathbf{a} \\cdot \\mathbf{n}$?",
   "answer": "-5",
   "hint": "$(1)(1) + 0 + (2)(-3)$.",
   "explain": "$p = -5$, jadi $x - 5y - 3z = -5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Substitusi garis ke bidang: $-9 - \\lambda = -5$. Berapa $\\lambda$?",
   "answer": "-4",
   "hint": "$(4 + \\lambda) - 5(2 + \\lambda) - 3(1 - \\lambda)$.",
   "explain": "$\\lambda = -4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Titik tembusnya?",
   "options": [
    "$(0, -2, 5)$",
    "$(8, 6, -3)$",
    "$(0, 2, 5)$"
   ],
   "answer": "$(0, -2, 5)$",
   "hint": "Masukkan $\\lambda = -4$ ke persamaan garis.",
   "explain": "$(4 - 4, 2 - 4, 1 + 4)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: $\\mathbf{d} \\cdot \\mathbf{n} = ?$",
   "answer": "-1",
   "hint": "$1 - 5 + 3$.",
   "explain": "$|\\mathbf{d} \\cdot \\mathbf{n}| = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Sudut garis-bidang dari $\\sin\\theta = \\frac{1}{\\sqrt{3}\\sqrt{35}}$? Bulatkan ke 1 desimal.",
   "answer": "5,6",
   "hint": "Pakai $\\sin$, bukan $\\cos$: $\\sin^{-1}\\frac{1}{\\sqrt{105}}$.",
   "explain": "$\\theta \\approx 5{,}6°$.",
   "error": "salah-pembulatan",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung $x - 5y - 3z$ di titik $C(2, -1, 4)$.",
   "answer": "-5",
   "hint": "$2 + 5 - 12$.",
   "explain": "Hasilnya $-5$, jadi $C$ di bidang. Titik tembus: $0 + 10 - 15 = -5$ juga.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "(a) $x - 5y - 3z = -5$; (b) titik tembus $(0, -2, 5)$, sudut $\\approx 5{,}6°$."
}
```

### Contoh 4: Drone melewati tiang lampu

```soal
{
 "title": "Contoh 4",
 "text": "Drone terbang lurus mengikuti $\\mathbf{r} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 10 \\end{pmatrix} + \\lambda\\begin{pmatrix} 4 \\\\ 3 \\\\ 0 \\end{pmatrix}$ (meter). Ujung tiang lampu di $P(10, 20, 6)$. Berapa jarak terdekat drone ke ujung tiang, dan di titik mana?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Titik umum $F = (4\\lambda, 3\\lambda, 10)$. Maka $\\overrightarrow{FP} = ?$",
   "options": [
    "$(10 - 4\\lambda,\\ 20 - 3\\lambda,\\ -4)$",
    "$(4\\lambda - 10,\\ 3\\lambda - 20,\\ 4)$ lalu ditambah $P$",
    "$(10 + 4\\lambda,\\ 20 + 3\\lambda,\\ 16)$"
   ],
   "answer": "$(10 - 4\\lambda,\\ 20 - 3\\lambda,\\ -4)$",
   "hint": "$\\overrightarrow{FP} = \\mathbf{p} - \\mathbf{f}$.",
   "explain": "Kurangkan komponen demi komponen.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Syarat $\\overrightarrow{FP} \\cdot (4, 3, 0) = 0$ memberi $100 - 25\\lambda = 0$. Berapa $\\lambda$?",
   "answer": "4",
   "hint": "$4(10 - 4\\lambda) + 3(20 - 3\\lambda)$.",
   "explain": "$\\lambda = 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Kaki tegak lurus $F$?",
   "options": [
    "$(16, 12, 10)$",
    "$(4, 3, 10)$",
    "$(16, 12, 0)$"
   ],
   "answer": "$(16, 12, 10)$",
   "hint": "Masukkan $\\lambda = 4$.",
   "explain": "$F = (16, 12, 10)$ dan $\\overrightarrow{FP} = (-6, 8, -4)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $|\\overrightarrow{FP}|^2 = ?$",
   "answer": "116",
   "hint": "$36 + 64 + 16$.",
   "explain": "$|\\overrightarrow{FP}|^2 = 116$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Jarak terdekatnya? Bulatkan ke 1 desimal.",
   "answer": "10,8",
   "hint": "$\\sqrt{116}$.",
   "explain": "$\\sqrt{116} = 2\\sqrt{29} \\approx 10{,}8$ m.",
   "error": "salah-pembulatan",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $\\overrightarrow{AP} \\times \\mathbf{d} = (12, -16, -50)$. Berapa kuadrat panjangnya?",
   "answer": "2.900",
   "hint": "$144 + 256 + 2500$.",
   "explain": "$\\frac{\\sqrt{2900}}{5} = \\sqrt{116}$. Sama.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jarak terdekat $2\\sqrt{29} \\approx 10{,}8$ m, saat drone di $(16, 12, 10)$."
}
```

## Kesalahan yang sering terjadi

- **Menganggap perkalian titik menghasilkan vektor.** $\mathbf{a} \cdot \mathbf{b}$ adalah bilangan; $\mathbf{a} \times \mathbf{b}$ adalah vektor.
- **Salah tanda komponen tengah perkalian silang.** Komponen kedua adalah $a_3b_1 - a_1b_3$. Selalu cek hasilnya dengan perkalian titik terhadap kedua vektor: harus nol.
- **Memakai cos untuk sudut garis-bidang.** Normal tegak lurus bidang, jadi rumus dengan $\mathbf{n}$ memberi $\sin\theta$, bukan $\cos\theta$.
- **Menyimpulkan "berpotongan" dari dua persamaan saja.** Nilai $\lambda$ dan $\mu$ wajib diuji di persamaan ketiga. Jika tidak cocok dan arah tidak sejajar, garis bersilangan.
- **Lupa nilai mutlak.** Hasil perkalian titik negatif memberi sudut tumpul; sudut antara garis atau bidang biasanya diambil yang lancip.

## Ringkasan

- $|\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$; $\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$; tegak lurus jika hasilnya 0.
- $\mathbf{a} \times \mathbf{b}$ tegak lurus keduanya, panjangnya luas jajargenjang.
- Garis $\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}$; bidang $\mathbf{r} \cdot \mathbf{n} = p$ atau $n_1x + n_2y + n_3z = p$.
- Sudut: cos untuk garis-garis dan bidang-bidang, sin untuk garis-bidang.
- Jarak titik ke bidang $\frac{|\mathbf{p} \cdot \mathbf{n} - p|}{|\mathbf{n}|}$; titik ke garis lewat kaki tegak lurus atau $\frac{|\overrightarrow{AP} \times \mathbf{d}|}{|\mathbf{d}|}$.
- Garis potong dua bidang berarah $\mathbf{n}_1 \times \mathbf{n}_2$.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tentukan panjang dan vektor satuan dari $\\begin{pmatrix} 2 \\\\ -1 \\\\ 2 \\end{pmatrix}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Panjangnya?",
   "answer": "3",
   "hint": "$\\sqrt{4 + 1 + 4}$.",
   "explain": "$\\sqrt{9} = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Vektor satuannya?",
   "options": [
    "$\\frac{1}{3}(2, -1, 2)$",
    "$\\frac{1}{9}(2, -1, 2)$",
    "$3(2, -1, 2)$"
   ],
   "answer": "$\\frac{1}{3}(2, -1, 2)$",
   "hint": "Bagi vektor dengan panjangnya.",
   "explain": "Panjangnya sekarang 1.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Panjang 3, vektor satuan $\\frac{1}{3}(2, -1, 2)$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Apakah $\\begin{pmatrix} 1 \\\\ 2 \\\\ -3 \\end{pmatrix}$ tegak lurus $\\begin{pmatrix} 4 \\\\ 1 \\\\ 2 \\end{pmatrix}$?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Hitung perkalian titiknya.",
   "answer": "0",
   "hint": "$4 + 2 - 6$.",
   "explain": "Hasilnya 0.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Kesimpulan?",
   "options": [
    "Ya, tegak lurus",
    "Tidak",
    "Sejajar"
   ],
   "answer": "Ya, tegak lurus",
   "hint": "Tegak lurus jika perkalian titik nol.",
   "explain": "Perkalian titik 0, jadi tegak lurus.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Ya, keduanya tegak lurus."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Tentukan persamaan kartesius bidang yang melalui $(1, 2, 3)$ dengan normal $\\begin{pmatrix} 2 \\\\ -1 \\\\ 4 \\end{pmatrix}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$p = \\mathbf{a} \\cdot \\mathbf{n} = ?$",
   "answer": "12",
   "hint": "$2(1) - 2 + 4(3)$.",
   "explain": "$p = 12$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Persamaannya?",
   "options": [
    "$2x - y + 4z = 12$",
    "$x + 2y + 3z = 12$",
    "$2x - y + 4z = 0$"
   ],
   "answer": "$2x - y + 4z = 12$",
   "hint": "Koefisien $x, y, z$ adalah komponen normal.",
   "explain": "$2x - y + 4z = 12$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$2x - y + 4z = 12$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Tentukan jarak titik $(1, 1, 1)$ ke bidang $2x + y - 2z = 7$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$|\\mathbf{p} \\cdot \\mathbf{n} - p| = |2 + 1 - 2 - 7| = ?$",
   "answer": "6",
   "hint": "Hitung isinya dulu, lalu nilai mutlak.",
   "explain": "$|-6| = 6$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$|\\mathbf{n}| = ?$",
   "answer": "3",
   "hint": "$\\sqrt{4 + 1 + 4}$.",
   "explain": "$|\\mathbf{n}| = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Jaraknya?",
   "answer": "2",
   "hint": "$\\frac{6}{3}$.",
   "explain": "Jarak 2 satuan.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jaraknya 2."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Tentukan persamaan vektor garis potong bidang $x + y + z = 6$ dan $x - y + 2z = 5$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Arah garis potong $= \\mathbf{n}_1 \\times \\mathbf{n}_2$?",
   "options": [
    "$(3, -1, -2)$",
    "$(3, 1, -2)$",
    "$(1, -1, 2)$"
   ],
   "answer": "$(3, -1, -2)$",
   "hint": "$(1, 1, 1) \\times (1, -1, 2)$; awas komponen tengah.",
   "explain": "$(1 \\cdot 2 - 1 \\cdot (-1),\\ 1 \\cdot 1 - 1 \\cdot 2,\\ 1 \\cdot (-1) - 1 \\cdot 1)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Pilih $y = 0$: $x + z = 6$ dan $x + 2z = 5$. Berapa $z$?",
   "answer": "-1",
   "hint": "Kurangkan kedua persamaan.",
   "explain": "$z = -1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Berapa $x$?",
   "answer": "7",
   "hint": "$x = 6 - z$.",
   "explain": "$x = 7$, jadi titiknya $(7, 0, -1)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Persamaan garisnya?",
   "options": [
    "$\\mathbf{r} = (7, 0, -1) + t(3, -1, -2)$",
    "$\\mathbf{r} = (3, -1, -2) + t(7, 0, -1)$",
    "$\\mathbf{r} = (7, 0, -1) + t(1, 1, 1)$"
   ],
   "answer": "$\\mathbf{r} = (7, 0, -1) + t(3, -1, -2)$",
   "hint": "Titik + parameter × arah.",
   "explain": "Titik $(7, 0, -1)$ memenuhi kedua bidang: $7 - 1 = 6$ dan $7 - 2 = 5$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\mathbf{r} = \\begin{pmatrix} 7 \\\\ 0 \\\\ -1 \\end{pmatrix} + t\\begin{pmatrix} 3 \\\\ -1 \\\\ -2 \\end{pmatrix}$."
}
```
