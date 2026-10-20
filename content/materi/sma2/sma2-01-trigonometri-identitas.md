---
id: sma2-01-trigonometri-identitas
judul: Fungsi, Identitas, dan Persamaan Trigonometri
jenjang: sma2
moe: "Additional Mathematics · G1 Trigonometric functions, identities and equations"
prasyarat: [smp3-07-trigonometri-lanjut, sma1-03-busur-juring-radian, sma1-07-bentuk-akar]
durasi_menit: 90
---

## Kenapa belajar ini?

Pasang surut air laut di Pelabuhan Benoa, arus listrik PLN, dan gelombang suara semuanya berulang secara teratur. Fungsi trigonometri adalah bahasa untuk gerak berulang seperti itu. Identitas dan persamaan trigonometri membuat kita bisa menyederhanakan model dan mencari kapan sesuatu terjadi.

## Analogi

Bayangkan sebuah **bianglala** (kincir ria) berjari-jari 1 dengan pusat di titik asal. Sebuah kursi mulai di posisi paling kanan, lalu berputar berlawanan arah jarum jam sejauh sudut $\theta$.

- Posisi mendatar kursi adalah $\cos\theta$.
- Ketinggian kursi (di atas atau di bawah pusat) adalah $\sin\theta$.

Karena bianglala terus berputar, sudut bisa lebih dari $90°$, lebih dari $360°$, bahkan negatif (berputar searah jarum jam). Semua sifat trigonometri di materi ini bisa dibaca dari bianglala tersebut.

```anim
{"type": "bangun", "title": "Kursi bianglala pada lingkaran satuan", "titik": {"O": [0, 0], "H": [0.643, 0], "P": [0.643, 0.766]}, "sisi": [["O", "P", "1"], ["O", "H", "\\cos\\theta"], ["H", "P", "\\sin\\theta"]], "sudut": [{"di": "O", "dari": "H", "ke": "P", "label": "\\theta"}, {"di": "H", "dari": "O", "ke": "P", "siku": true}], "lingkaran": [{"pusat": [0, 0], "r": 1}], "langkah": [{"say": "Bianglala berjari-jari 1 dengan pusat $O$.", "sisi": 0, "sudut": 0}, {"say": "Kursi $P$ sudah berputar sejauh $\\theta$. Jari-jarinya tetap 1.", "sisi": 1, "sudut": 1, "sorot": ["OP"]}, {"say": "Posisi mendatar kursi: $OH = \\cos\\theta$.", "sisi": 2, "sudut": 1, "sorot": ["OH"]}, {"say": "Ketinggian kursi: $HP = \\sin\\theta$.", "sisi": 3, "sudut": 2, "sorot": ["HP"]}, {"say": "Segitiga siku-siku $OHP$ memberi $\\sin^2\\theta + \\cos^2\\theta = 1$.", "sisi": 3, "sudut": 2, "sorot": ["OP", "OH", "HP"]}]}
```

## Konsep

### Enam fungsi untuk sudut sembarang

Untuk titik $(\cos\theta, \sin\theta)$ pada lingkaran satuan:

$$
\tan\theta = \frac{\sin\theta}{\cos\theta}, \quad \sec\theta = \frac{1}{\cos\theta}, \quad \csc\theta = \frac{1}{\sin\theta}, \quad \cot\theta = \frac{1}{\tan\theta}
$$

Tanda fungsi mengikuti kuadran posisi kursi:

```visual
{"type": "table", "caption": "Fungsi yang bernilai positif di tiap kuadran", "head": ["Kuadran", "Sudut", "Positif"], "rows": [["I", "0° sampai 90°", "semua"], ["II", "90° sampai 180°", "sin"], ["III", "180° sampai 270°", "tan"], ["IV", "270° sampai 360°", "cos"]]}
```

**Sudut acuan** adalah sudut lancip antara jari-jari kursi dan sumbu $x$. Nilai fungsi pada sudut $\theta$ sama dengan nilai pada sudut acuan, dengan tanda sesuai kuadran. Contoh: $\sin 150° = +\sin 30° = \frac{1}{2}$, $\cos 225° = -\cos 45° = -\frac{\sqrt{2}}{2}$.

### Nilai eksak sudut istimewa

```visual
{"type": "table", "caption": "Nilai eksak sudut istimewa", "head": ["sudut", "0°", "30°", "45°", "60°", "90°"], "rows": [["radian", "0", "π/6", "π/4", "π/3", "π/2"], ["sin", "0", "1/2", "√2/2", "√3/2", "1"], ["cos", "1", "√3/2", "√2/2", "1/2", "0"], ["tan", "0", "√3/3", "1", "√3", "tak terdefinisi"]]}
```

### Grafik, amplitudo, dan periode

Saat bianglala berputar, ketinggian kursi naik-turun membentuk grafik $y = \sin x$. Grafik ini berulang setiap $360°$ ($2\pi$ radian), dengan nilai antara $-1$ dan $1$. Grafik $y = \cos x$ sama bentuknya, tetapi bergeser $90°$. Grafik $y = \tan x$ berulang setiap $180°$ dan punya asimtot di $x = 90°, 270°, \dots$

Untuk $y = a\sin bx + c$ (atau $\cos$), dengan $b > 0$:

- **Amplitudo** $|a|$: jari-jari bianglala.
- **Periode** $\frac{360°}{b}$: waktu satu putaran penuh.
- $c$ menggeser grafik naik atau turun: tinggi poros bianglala.

Untuk $y = a\tan bx$, periodenya $\frac{180°}{b}$.

```anim
{"type": "grafik", "title": "Ketinggian dan posisi mendatar kursi", "xmin": 0, "xmax": 6.6, "ymin": -1.5, "ymax": 1.5, "kurva": [{"f": "sin(x)", "label": "y=\\sin x"}, {"f": "cos(x)", "label": "y=\\cos x"}], "titik": [{"x": 1.5708, "y": 1, "label": "puncak sin di π/2 (90°)"}, {"x": 0, "y": 1, "label": "puncak cos di 0"}], "langkah": [{"say": "Sumbu $x$ dalam radian: $\\pi \\approx 3{,}14$ dan $2\\pi \\approx 6{,}28$ (satu putaran).", "kurva": 0}, {"say": "Ketinggian kursi naik-turun antara $-1$ dan $1$: grafik $y=\\sin x$.", "kurva": 1}, {"say": "Posisi mendatar memberi $y=\\cos x$, bentuknya sama tetapi bergeser $90°$.", "kurva": 2}, {"say": "Puncak $\\cos$ di $x=0$, puncak $\\sin$ di $x=\\frac{\\pi}{2}$.", "kurva": 2, "titik": 2}]}
```

```anim
{"type": "grafik", "title": "Amplitudo, periode, dan pergeseran", "xmin": 0, "xmax": 6.6, "ymin": -2.5, "ymax": 4.5, "kurva": [{"f": "sin(x)", "label": "y=\\sin x"}, {"f": "3sin(2x)+1", "label": "y=3\\sin 2x+1"}], "garis": [{"y": 1, "label": "poros y = 1"}], "titik": [{"x": 0.7854, "y": 4, "label": "maks 4"}, {"x": 2.3562, "y": -2, "label": "min −2"}], "langkah": [{"say": "Mulai dari $y=\\sin x$: amplitudo 1, periode $2\\pi$.", "kurva": 1}, {"say": "$y=3\\sin 2x+1$: poros naik ke $y=1$.", "kurva": 1, "garis": 1}, {"say": "Amplitudo 3, periode $\\frac{2\\pi}{2}=\\pi$ (atau $180°$): gelombang lebih tinggi dan lebih rapat.", "kurva": 2, "garis": 1}, {"say": "Maksimum $1+3=4$, minimum $1-3=-2$.", "kurva": 2, "garis": 1, "titik": 2}]}
```

### Identitas dasar

Kursi selalu berjarak 1 dari pusat. Dengan Pythagoras:

$$
\sin^2\theta + \cos^2\theta = 1
$$

Bagi dengan $\cos^2\theta$, lalu dengan $\sin^2\theta$:

$$
1 + \tan^2\theta = \sec^2\theta, \qquad 1 + \cot^2\theta = \csc^2\theta
$$

```anim
{"type": "persamaan", "title": "Dari satu identitas menjadi tiga", "baris": [{"tex": "\\sin^2\\theta + \\cos^2\\theta = 1", "say": "Mulai dari Pythagoras pada lingkaran satuan."}, {"tex": "\\frac{\\sin^2\\theta}{\\cos^2\\theta} + \\frac{\\cos^2\\theta}{\\cos^2\\theta} = \\frac{1}{\\cos^2\\theta}", "say": "Bagi setiap suku dengan $\\cos^2\\theta$.", "op": "$\\div \\cos^2\\theta$"}, {"tex": "\\tan^2\\theta + 1 = \\sec^2\\theta", "say": "Ingat $\\frac{\\sin}{\\cos} = \\tan$ dan $\\frac{1}{\\cos} = \\sec$."}, {"tex": "1 + \\cot^2\\theta = \\csc^2\\theta", "say": "Dengan membagi $\\sin^2\\theta$ dari identitas awal, didapat identitas ketiga.", "op": "$\\div \\sin^2\\theta$"}]}
```

### Rumus jumlah dan selisih

Ambil dua kursi: $P(\cos A, \sin A)$ dan $Q(\cos B, \sin B)$. Kuadrat jarak $PQ$ dengan rumus jarak:

$$
PQ^2 = (\cos A - \cos B)^2 + (\sin A - \sin B)^2 = 2 - 2(\cos A\cos B + \sin A\sin B)
$$

Sekarang putar bianglala sejauh $-B$ sehingga $Q$ pindah ke $(1, 0)$ dan $P$ ke $(\cos(A - B), \sin(A - B))$. Jarak tidak berubah, jadi $PQ^2 = 2 - 2\cos(A - B)$. Samakan kedua bentuk:

$$
\cos(A - B) = \cos A\cos B + \sin A\sin B
$$

Dari sini (ganti $B$ dengan $-B$, atau pakai $\sin\theta = \cos(90° - \theta)$) diperoleh:

$$
\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B, \qquad \sin(A \pm B) = \sin A\cos B \pm \cos A\sin B
$$

$$
\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A\tan B}
$$

### Rumus sudut ganda

Ambil $B = A$:

$$
\sin 2A = 2\sin A\cos A, \qquad \cos 2A = \cos^2 A - \sin^2 A = 2\cos^2 A - 1 = 1 - 2\sin^2 A
$$

$$
\tan 2A = \frac{2\tan A}{1 - \tan^2 A}
$$

### Bentuk $R\cos(\theta \pm \alpha)$

Jumlah dua gelombang $a\cos\theta + b\sin\theta$ (dengan $a, b > 0$) ternyata satu gelombang saja, seperti satu bianglala yang lebih besar dan mulai dari posisi lain. Uraikan:

$$
R\cos(\theta - \alpha) = R\cos\alpha\cos\theta + R\sin\alpha\sin\theta
$$

Samakan koefisien: $R\cos\alpha = a$ dan $R\sin\alpha = b$. Maka

$$
a\cos\theta + b\sin\theta = R\cos(\theta - \alpha), \quad R = \sqrt{a^2 + b^2}, \quad \tan\alpha = \frac{b}{a}
$$

```anim
{"type": "persamaan", "title": "Mengubah 3 cos θ + 4 sin θ", "baris": [{"tex": "3\\cos\\theta + 4\\sin\\theta = R\\cos\\alpha\\cos\\theta + R\\sin\\alpha\\sin\\theta", "say": "Samakan dengan uraian $R\\cos(\\theta-\\alpha)$."}, {"tex": "R\\cos\\alpha = 3,\\quad R\\sin\\alpha = 4", "say": "Bandingkan koefisien $\\cos\\theta$ dan $\\sin\\theta$."}, {"tex": "R^2 = 3^2 + 4^2 = 25 \\Rightarrow R = 5", "say": "Kuadratkan lalu jumlahkan: $\\cos^2\\alpha+\\sin^2\\alpha=1$.", "op": "kuadratkan"}, {"tex": "\\tan\\alpha = \\tfrac{4}{3} \\Rightarrow \\alpha \\approx 53{,}13^\\circ", "say": "Bagi persamaan kedua dengan yang pertama.", "op": "bagi"}, {"tex": "3\\cos\\theta + 4\\sin\\theta = 5\\cos(\\theta - 53{,}13^\\circ)", "say": "Dua gelombang menjadi satu gelombang beramplitudo 5."}]}
```

Nilai maksimumnya $R$ dan minimumnya $-R$. Dengan cara yang sama, kita bisa menulis bentuk $R\cos(\theta + \alpha)$ atau $R\sin(\theta \pm \alpha)$.

### Persamaan dan pembuktian identitas

**Menyelesaikan persamaan:** ubah ke satu fungsi (pakai identitas), cari sudut acuan, tentukan kuadran yang sesuai tanda, lalu tulis semua jawaban dalam selang yang diminta.

**Membuktikan identitas:** mulai dari ruas yang lebih rumit, ubah langkah demi langkah dengan identitas yang sudah diketahui sampai sama dengan ruas lain. Jangan memindahkan suku antar ruas seperti pada persamaan.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Sudut tumpul dan sudut ganda

```soal
{
 "title": "Contoh 1",
 "text": "Diketahui $\\sin A = \\frac{3}{5}$ dan $A$ sudut tumpul. Tentukan $\\cos A$, $\\tan A$, dan $\\sin 2A$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tentukan kuadran. Sudut tumpul ada di kuadran mana?",
   "options": [
    "Kuadran I",
    "Kuadran II",
    "Kuadran III",
    "Kuadran IV"
   ],
   "answer": "Kuadran II",
   "hint": "Sudut tumpul besarnya antara $90°$ dan $180°$.",
   "explain": "Sudut tumpul ada di kuadran II, tempat hanya $\\sin$ yang positif.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Hitung $\\cos^2 A = 1 - \\sin^2 A$.",
   "answer": {
    "num": 16,
    "den": 25
   },
   "hint": "$\\sin^2 A = \\frac{9}{25}$. Kurangkan dari 1.",
   "explain": "$\\cos^2 A = 1 - \\frac{9}{25} = \\frac{16}{25}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Pilih nilai $\\cos A$.",
   "options": [
    "$\\frac{4}{5}$",
    "$-\\frac{4}{5}$",
    "$\\frac{3}{5}$",
    "$-\\frac{3}{5}$"
   ],
   "answer": "$-\\frac{4}{5}$",
   "hint": "Akarkan $\\frac{16}{25}$, lalu ingat tanda $\\cos$ di kuadran II.",
   "explain": "$\\sqrt{16/25} = \\frac{4}{5}$, dan di kuadran II $\\cos$ negatif: $\\cos A = -\\frac{4}{5}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Hitung $\\tan A = \\frac{\\sin A}{\\cos A}$.",
   "options": [
    "$-\\frac{3}{4}$",
    "$\\frac{3}{4}$",
    "$-\\frac{4}{3}$",
    "$\\frac{4}{3}$"
   ],
   "answer": "$-\\frac{3}{4}$",
   "hint": "Bagi $\\frac{3}{5}$ dengan $-\\frac{4}{5}$.",
   "explain": "$\\tan A = \\frac{3/5}{-4/5} = -\\frac{3}{4}$. Di kuadran II $\\tan$ memang negatif.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Hitung $\\sin 2A = 2\\sin A\\cos A$.",
   "options": [
    "$-\\frac{24}{25}$",
    "$\\frac{24}{25}$",
    "$-\\frac{12}{25}$",
    "$-\\frac{6}{5}$"
   ],
   "answer": "$-\\frac{24}{25}$",
   "hint": "Kalikan $2$, $\\frac{3}{5}$, dan $-\\frac{4}{5}$. Jangan lupa angka 2.",
   "explain": "$2 \\cdot \\frac{3}{5} \\cdot \\left(-\\frac{4}{5}\\right) = -\\frac{24}{25}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Cek jawaban: hitung $\\cos 2A = 1 - 2\\sin^2 A$. (Lalu $\\sin^2 2A + \\cos^2 2A$ harus 1.)",
   "answer": {
    "num": 7,
    "den": 25
   },
   "hint": "$2 \\cdot \\frac{9}{25} = \\frac{18}{25}$.",
   "explain": "$\\cos 2A = \\frac{7}{25}$, dan $\\frac{576}{625} + \\frac{49}{625} = 1$. Cocok.",
   "error": "salah-langkah-materi",
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\cos A = -\\frac{4}{5}$, $\\tan A = -\\frac{3}{4}$, dan $\\sin 2A = -\\frac{24}{25}$."
}
```

### Contoh 2: Nilai eksak dengan rumus jumlah

```soal
{
 "title": "Contoh 2",
 "text": "Tentukan nilai eksak $\\sin 75°$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pecah $75°$ menjadi dua sudut istimewa.",
   "options": [
    "$45° + 30°$",
    "$50° + 25°$",
    "$60° + 15°$"
   ],
   "answer": "$45° + 30°$",
   "hint": "Sudut istimewa: $30°$, $45°$, $60°$, $90°$.",
   "explain": "$75° = 45° + 30°$, keduanya sudut istimewa.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Pilih rumus $\\sin(45° + 30°)$.",
   "options": [
    "$\\sin 45°\\cos 30° + \\cos 45°\\sin 30°$",
    "$\\sin 45° + \\sin 30°$",
    "$\\cos 45°\\cos 30° - \\sin 45°\\sin 30°$",
    "$\\sin 45°\\cos 30° - \\cos 45°\\sin 30°$"
   ],
   "answer": "$\\sin 45°\\cos 30° + \\cos 45°\\sin 30°$",
   "hint": "$\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B$.",
   "explain": "Rumus jumlah sinus: tandanya tetap plus.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Substitusi nilai eksak dan sederhanakan.",
   "options": [
    "$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$",
    "$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$",
    "$\\frac{\\sqrt{3} + 1}{2}$",
    "$\\frac{\\sqrt{2} + 1}{2}$"
   ],
   "answer": "$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$",
   "hint": "$\\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{6}}{4}$ dan $\\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{2}}{4}$.",
   "explain": "Jumlahnya $\\frac{\\sqrt{6} + \\sqrt{2}}{4}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung $\\frac{\\sqrt{6} + \\sqrt{2}}{4}$ dengan kalkulator, bulatkan ke 4 desimal.",
   "answer": "0,9659",
   "hint": "$\\sqrt{6} \\approx 2{,}4495$ dan $\\sqrt{2} \\approx 1{,}4142$.",
   "explain": "Hasilnya $0{,}9659$, sama dengan $\\sin 75°$ di kalkulator. Cocok.",
   "error": "salah-pembulatan"
  }
 ],
 "conclusion": "Jadi $\\sin 75° = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$."
}
```

### Contoh 3: Membuktikan identitas

```soal
{
 "title": "Contoh 3",
 "text": "Buktikan $\\dfrac{1 - \\cos 2\\theta}{\\sin 2\\theta} = \\tan\\theta$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Mulai dari ruas mana?",
   "options": [
    "Ruas kiri, karena lebih rumit",
    "Ruas kanan, karena lebih pendek",
    "Pindahkan semua suku ke satu ruas"
   ],
   "answer": "Ruas kiri, karena lebih rumit",
   "hint": "Pada pembuktian identitas, kita tidak memindahkan suku antar ruas.",
   "explain": "Ruas kiri punya sudut ganda yang bisa diuraikan, jadi mulai dari sana.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Bentuk $\\cos 2\\theta$ mana yang membuat angka 1 di pembilang hilang?",
   "options": [
    "$1 - 2\\sin^2\\theta$",
    "$2\\cos^2\\theta - 1$",
    "$\\cos^2\\theta - \\sin^2\\theta$"
   ],
   "answer": "$1 - 2\\sin^2\\theta$",
   "hint": "Kita ingin $1 - \\cos 2\\theta$ tidak lagi memuat angka 1.",
   "explain": "$1 - (1 - 2\\sin^2\\theta) = 2\\sin^2\\theta$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Pembilang menjadi apa?",
   "options": [
    "$2\\sin^2\\theta$",
    "$-2\\sin^2\\theta$",
    "$2 - 2\\sin^2\\theta$",
    "$2\\cos^2\\theta$"
   ],
   "answer": "$2\\sin^2\\theta$",
   "hint": "Hati-hati dengan tanda minus di depan kurung.",
   "explain": "$1 - 1 + 2\\sin^2\\theta = 2\\sin^2\\theta$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Uraikan penyebut $\\sin 2\\theta$.",
   "options": [
    "$2\\sin\\theta\\cos\\theta$",
    "$2\\sin\\theta$",
    "$\\sin^2\\theta - \\cos^2\\theta$"
   ],
   "answer": "$2\\sin\\theta\\cos\\theta$",
   "hint": "Rumus sudut ganda untuk sinus.",
   "explain": "$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Sederhanakan $\\dfrac{2\\sin^2\\theta}{2\\sin\\theta\\cos\\theta}$.",
   "options": [
    "$\\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$",
    "$\\frac{\\sin\\theta}{2\\cos\\theta}$",
    "$\\sin\\theta\\cos\\theta$"
   ],
   "answer": "$\\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$",
   "hint": "Coret $2$ dan satu $\\sin\\theta$ di atas dan bawah.",
   "explain": "Hasilnya sama dengan ruas kanan. Terbukti.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: uji $\\theta = 30°$. Hitung ruas kiri $\\frac{1 - \\cos 60°}{\\sin 60°}$, bulatkan ke 3 desimal.",
   "answer": "0,577",
   "hint": "$\\cos 60° = 0{,}5$ dan $\\sin 60° \\approx 0{,}866$.",
   "explain": "Ruas kiri $\\approx 0{,}577$ dan $\\tan 30° \\approx 0{,}577$. Cocok.",
   "error": "salah-pembulatan"
  }
 ],
 "conclusion": "Jadi $\\dfrac{1 - \\cos 2\\theta}{\\sin 2\\theta} = \\tan\\theta$ terbukti."
}
```

### Contoh 4: Persamaan trigonometri

```soal
{
 "title": "Contoh 4",
 "text": "Selesaikan $2\\sin^2 x - \\cos x - 1 = 0$ untuk $0° \\le x \\le 360°$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Ganti $\\sin^2 x = 1 - \\cos^2 x$. Persamaannya menjadi apa?",
   "options": [
    "$2\\cos^2 x + \\cos x - 1 = 0$",
    "$2\\cos^2 x - \\cos x - 1 = 0$",
    "$2\\cos^2 x + \\cos x + 1 = 0$"
   ],
   "answer": "$2\\cos^2 x + \\cos x - 1 = 0$",
   "hint": "$2(1 - \\cos^2 x) - \\cos x - 1 = 0$, lalu kalikan $-1$.",
   "explain": "$1 - 2\\cos^2 x - \\cos x = 0$, atau $2\\cos^2 x + \\cos x - 1 = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Faktorkan.",
   "options": [
    "$(2\\cos x - 1)(\\cos x + 1) = 0$",
    "$(2\\cos x + 1)(\\cos x - 1) = 0$",
    "$(2\\cos x - 1)(\\cos x - 1) = 0$"
   ],
   "answer": "$(2\\cos x - 1)(\\cos x + 1) = 0$",
   "hint": "Kalikan kembali tiap pilihan dan bandingkan suku tengahnya.",
   "explain": "Jadi $\\cos x = \\frac{1}{2}$ atau $\\cos x = -1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\cos x = \\frac{1}{2}$ di kuadran I. Berapa $x$?",
   "answer": "60",
   "hint": "Lihat tabel sudut istimewa.",
   "explain": "$\\cos 60° = \\frac{1}{2}$, jadi sudut acuannya $60°$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $\\cos$ juga positif di kuadran IV. Berapa $x$ di sana?",
   "answer": "300",
   "hint": "Di kuadran IV, $x = 360° - \\text{sudut acuan}$.",
   "explain": "$360° - 60° = 300°$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: $\\cos x = -1$ (kursi di posisi paling kiri). Berapa $x$?",
   "answer": "180",
   "hint": "Posisi paling kiri pada lingkaran satuan adalah $(-1, 0)$.",
   "explain": "$\\cos 180° = -1$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung $2\\sin^2 60° - \\cos 60° - 1$.",
   "answer": "0",
   "hint": "$\\sin^2 60° = \\frac{3}{4}$ dan $\\cos 60° = \\frac{1}{2}$.",
   "explain": "$\\frac{3}{2} - \\frac{1}{2} - 1 = 0$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x = 60°, 180°, 300°$."
}
```

### Contoh 5: Soal cerita, pasang surut di Benoa

```soal
{
 "title": "Contoh 5",
 "text": "Kedalaman air di dermaga Benoa $t$ jam setelah tengah malam adalah $d = 10 + 3\\cos(30t)° + 4\\sin(30t)°$ meter. Tentukan kedalaman maksimum dan minimum, periodenya, dan kapan pertama kali kedalaman maksimum tercapai.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Ubah $3\\cos\\theta + 4\\sin\\theta$ ke $R\\cos(\\theta - \\alpha)$. Berapa $R$?",
   "answer": "5",
   "hint": "$R = \\sqrt{a^2 + b^2}$.",
   "explain": "$R = \\sqrt{9 + 16} = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\tan\\alpha = \\frac{4}{3}$. Berapa $\\alpha$? Bulatkan ke 2 desimal.",
   "answer": "53,13",
   "hint": "Pakai $\\tan^{-1}$ di kalkulator mode derajat.",
   "explain": "$\\alpha = \\tan^{-1}\\frac{4}{3} \\approx 53{,}13°$. Jadi $d = 10 + 5\\cos(30t - 53{,}13)°$.",
   "error": "salah-pembulatan",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Berapa kedalaman maksimum?",
   "answer": "15",
   "hint": "Nilai terbesar $\\cos$ adalah 1.",
   "explain": "$10 + 5 = 15$ m.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Berapa kedalaman minimum?",
   "answer": "5",
   "hint": "Nilai terkecil $\\cos$ adalah $-1$.",
   "explain": "$10 - 5 = 5$ m.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Berapa periodenya?",
   "answer": "12",
   "hint": "Periode $= \\frac{360°}{b}$ dengan $b = 30$.",
   "explain": "$\\frac{360}{30} = 12$ jam.",
   "error": "salah-langkah-materi",
   "suffix": "jam"
  },
  {
   "kind": "number",
   "prompt": "Langkah 6: Maksimum saat $30t - 53{,}13 = 0$. Berapa $t$? Bulatkan ke 2 desimal.",
   "answer": "1,77",
   "hint": "Bagi $53{,}13$ dengan 30.",
   "explain": "$t \\approx 1{,}77$ jam.",
   "error": "salah-pembulatan",
   "suffix": "jam"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 7: $1{,}77$ jam itu pukul berapa?",
   "options": [
    "01.46",
    "01.77",
    "02.17",
    "01.07"
   ],
   "answer": "01.46",
   "hint": "Ubah $0{,}77$ jam ke menit dengan mengalikan 60.",
   "explain": "$0{,}771 \\times 60 \\approx 46$ menit, jadi pukul 01.46.",
   "error": "waktu-seperti-desimal"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: saat $30t = 53{,}13°$, $\\cos = 0{,}6$ dan $\\sin = 0{,}8$. Hitung $d = 10 + 3(0{,}6) + 4(0{,}8)$.",
   "answer": "15",
   "hint": "$1{,}8 + 3{,}2 = 5$.",
   "explain": "$d = 15$, sama dengan maksimum. Cocok.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  }
 ],
 "conclusion": "Kedalaman maksimum 15 m (pertama kali sekitar pukul 01.46), minimum 5 m, periode 12 jam."
}
```

## Kesalahan yang sering terjadi

- **Lupa tanda kuadran.** Menulis $\cos A = \frac{4}{5}$ untuk $A$ tumpul. Di kuadran II, $\cos$ negatif.
- **Memecah fungsi seperti perkalian.** Menulis $\sin(A + B) = \sin A + \sin B$. Uji $A = B = 45°$: kiri $\sin 90° = 1$, kanan $\sqrt{2}$. Pakai rumus jumlah.
- **Membagi dengan fungsi trigonometri.** Dari $\sin 2x = \cos x$ membagi dengan $\cos x$ menghilangkan jawaban $\cos x = 0$. Pindahkan ke satu ruas lalu faktorkan.
- **Jawaban tidak lengkap.** Hanya menulis sudut acuan. Selalu cek semua kuadran dengan tanda yang benar di seluruh selang.
- **Mode kalkulator salah.** Soal dalam derajat dihitung dalam radian, atau sebaliknya.

## Ringkasan

- Titik pada lingkaran satuan adalah $(\cos\theta, \sin\theta)$; tanda fungsi mengikuti kuadran, nilai mengikuti sudut acuan.
- $y = a\sin bx + c$: amplitudo $|a|$, periode $\frac{360°}{b}$.
- $\sin^2\theta + \cos^2\theta = 1$, $1 + \tan^2\theta = \sec^2\theta$, $1 + \cot^2\theta = \csc^2\theta$.
- Rumus jumlah/selisih dan sudut ganda; $\cos 2A$ punya tiga bentuk.
- $a\cos\theta + b\sin\theta = R\cos(\theta - \alpha)$ dengan $R = \sqrt{a^2 + b^2}$, $\tan\alpha = \frac{b}{a}$.
- Persamaan: satu fungsi, sudut acuan, kuadran, semua jawaban dalam selang.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "(a) Tentukan nilai eksak $\\cos 330°$. (b) Tentukan amplitudo dan periode $y = 3\\sin 2x + 1$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa sudut acuan $330°$?",
   "answer": "30",
   "hint": "$330°$ ada di kuadran IV. Hitung $360° - 330°$.",
   "explain": "Sudut acuan $30°$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "choice",
   "prompt": "Berapa $\\cos 330°$?",
   "options": [
    "$\\frac{\\sqrt{3}}{2}$",
    "$-\\frac{\\sqrt{3}}{2}$",
    "$\\frac{1}{2}$",
    "$-\\frac{1}{2}$"
   ],
   "answer": "$\\frac{\\sqrt{3}}{2}$",
   "hint": "Di kuadran IV, $\\cos$ positif.",
   "explain": "$\\cos 330° = +\\cos 30° = \\frac{\\sqrt{3}}{2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Amplitudo $y = 3\\sin 2x + 1$?",
   "answer": "3",
   "hint": "Amplitudo $= |a|$.",
   "explain": "Amplitudo 3. Angka $+1$ hanya menggeser poros.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Periodenya?",
   "answer": "180",
   "hint": "Periode $= \\frac{360°}{b}$.",
   "explain": "$\\frac{360°}{2} = 180°$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "(a) $\\cos 330° = \\frac{\\sqrt{3}}{2}$. (b) Amplitudo 3, periode $180°$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Diketahui $\\tan A = \\frac{5}{12}$ dan $A$ di kuadran III. Tentukan $\\sin A$ dan $\\cos 2A$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Gambar segitiga dengan sisi depan 5 dan sisi samping 12. Berapa sisi miringnya?",
   "answer": "13",
   "hint": "$\\sqrt{5^2 + 12^2}$.",
   "explain": "$\\sqrt{169} = 13$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Berapa $\\sin A$?",
   "options": [
    "$-\\frac{5}{13}$",
    "$\\frac{5}{13}$",
    "$-\\frac{12}{13}$",
    "$\\frac{12}{13}$"
   ],
   "answer": "$-\\frac{5}{13}$",
   "hint": "Di kuadran III hanya $\\tan$ yang positif.",
   "explain": "$\\sin A = -\\frac{5}{13}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Hitung $\\cos 2A = 1 - 2\\sin^2 A$.",
   "answer": {
    "num": 119,
    "den": 169
   },
   "hint": "$\\sin^2 A = \\frac{25}{169}$; tanda minus hilang saat dikuadratkan.",
   "explain": "$1 - \\frac{50}{169} = \\frac{119}{169}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  }
 ],
 "conclusion": "$\\sin A = -\\frac{5}{13}$ dan $\\cos 2A = \\frac{119}{169}$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Buktikan $(\\sin\\theta + \\cos\\theta)^2 = 1 + \\sin 2\\theta$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Uraikan ruas kiri.",
   "options": [
    "$\\sin^2\\theta + 2\\sin\\theta\\cos\\theta + \\cos^2\\theta$",
    "$\\sin^2\\theta + \\cos^2\\theta$",
    "$\\sin^2\\theta + \\sin\\theta\\cos\\theta + \\cos^2\\theta$"
   ],
   "answer": "$\\sin^2\\theta + 2\\sin\\theta\\cos\\theta + \\cos^2\\theta$",
   "hint": "$(a + b)^2 = a^2 + 2ab + b^2$.",
   "explain": "Suku tengah $2\\sin\\theta\\cos\\theta$ jangan dilupakan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$\\sin^2\\theta + \\cos^2\\theta$ sama dengan?",
   "options": [
    "$1$",
    "$\\sin 2\\theta$",
    "$\\cos 2\\theta$"
   ],
   "answer": "$1$",
   "hint": "Identitas Pythagoras.",
   "explain": "$\\sin^2\\theta + \\cos^2\\theta = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$2\\sin\\theta\\cos\\theta$ sama dengan?",
   "options": [
    "$\\sin 2\\theta$",
    "$\\cos 2\\theta$",
    "$2\\sin 2\\theta$"
   ],
   "answer": "$\\sin 2\\theta$",
   "hint": "Rumus sudut ganda sinus.",
   "explain": "Ruas kiri $= 1 + \\sin 2\\theta$ = ruas kanan. Terbukti.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $(\\sin\\theta + \\cos\\theta)^2 = 1 + \\sin 2\\theta$ terbukti."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Selesaikan $\\sin 2x = \\cos x$ untuk $0° \\le x \\le 360°$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah pertama yang tepat?",
   "options": [
    "$\\cos x(2\\sin x - 1) = 0$",
    "Bagi dengan $\\cos x$: $2\\sin x = 1$",
    "$\\sin x = \\frac{1}{2}\\cos x$"
   ],
   "answer": "$\\cos x(2\\sin x - 1) = 0$",
   "hint": "Ganti $\\sin 2x = 2\\sin x\\cos x$, pindahkan ke satu ruas, lalu faktorkan.",
   "explain": "Membagi dengan $\\cos x$ akan menghilangkan jawaban $\\cos x = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Penyelesaian $\\cos x = 0$?",
   "options": [
    "$90°$ dan $270°$",
    "$0°$ dan $180°$",
    "$90°$ saja"
   ],
   "answer": "$90°$ dan $270°$",
   "hint": "Di mana posisi mendatar kursi bianglala 0?",
   "explain": "Kursi tepat di atas atau di bawah pusat: $90°$ dan $270°$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Penyelesaian $\\sin x = \\frac{1}{2}$?",
   "options": [
    "$30°$ dan $150°$",
    "$30°$ dan $330°$",
    "$30°$ saja",
    "$60°$ dan $120°$"
   ],
   "answer": "$30°$ dan $150°$",
   "hint": "$\\sin$ positif di kuadran I dan II.",
   "explain": "$30°$ dan $180° - 30° = 150°$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Ada berapa penyelesaian seluruhnya?",
   "answer": "4",
   "hint": "Gabungkan hasil dua langkah sebelumnya.",
   "explain": "$30°, 90°, 150°, 270°$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x = 30°, 90°, 150°, 270°$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Nyatakan $\\sqrt{3}\\sin\\theta + \\cos\\theta$ dalam bentuk $R\\sin(\\theta + \\alpha)$, lalu tentukan nilai maksimumnya dan $\\theta$ ($0° \\le \\theta \\le 360°$) saat maksimum.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa $R$?",
   "answer": "2",
   "hint": "$R\\cos\\alpha = \\sqrt{3}$ dan $R\\sin\\alpha = 1$, jadi $R = \\sqrt{3 + 1}$.",
   "explain": "$R = \\sqrt{4} = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\tan\\alpha = \\frac{1}{\\sqrt{3}}$. Berapa $\\alpha$?",
   "answer": "30",
   "hint": "Sudut istimewa mana yang $\\tan$-nya $\\frac{\\sqrt{3}}{3}$?",
   "explain": "$\\alpha = 30°$, jadi bentuknya $2\\sin(\\theta + 30°)$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Berapa nilai maksimumnya?",
   "answer": "2",
   "hint": "Nilai terbesar $\\sin$ adalah 1.",
   "explain": "Maksimum $= R = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Untuk $\\theta$ berapa nilai maksimum tercapai?",
   "answer": "60",
   "hint": "$\\sin$ maksimum saat sudutnya $90°$: $\\theta + 30° = 90°$.",
   "explain": "$\\theta = 60°$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "$\\sqrt{3}\\sin\\theta + \\cos\\theta = 2\\sin(\\theta + 30°)$, maksimum 2 saat $\\theta = 60°$."
}
```
