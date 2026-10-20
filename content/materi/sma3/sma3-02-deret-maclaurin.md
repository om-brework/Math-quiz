---
id: sma3-02-deret-maclaurin
judul: Deret Maclaurin
jenjang: sma3
moe: "H2 Mathematics 9758 · Pure Mathematics · Calculus (Maclaurin Series)"
prasyarat: [sma2-04-turunan, sma1-09-binomial-newton, sma2-09-barisan-deret]
durasi_menit: 75
---

## Kenapa belajar ini?

Kalkulator tidak "tahu" nilai $\sin 0{,}1$ atau $e^{0{,}05}$. Ia menghitungnya dengan menjumlahkan beberapa suku polinomial. Deret Maclaurin adalah cara mengganti fungsi yang rumit dengan polinomial yang mudah dihitung, terutama untuk $x$ yang kecil.

## Analogi

Bayangkan seorang **penjahit kebaya** yang harus meniru bentuk sebuah kebaya, tetapi hanya boleh mengukur **di satu titik**, yaitu di tengah ($x = 0$).

- Ukuran pertama: **posisi** di titik itu, $f(0)$.
- Ukuran kedua: **kemiringan** garis kain di titik itu, $f'(0)$.
- Ukuran ketiga: **seberapa melengkung** kainnya, $f''(0)$.
- Dan seterusnya: perubahan lengkungan, $f'''(0)$, ...

Makin banyak ukuran yang dipakai, makin mirip tiruannya. Namun tiruan itu paling akurat **dekat titik yang diukur**. Makin jauh dari $x = 0$, makin besar kemungkinan meleset. Inilah sifat deret Maclaurin.

```anim
{"type": "grafik", "title": "Tiruan sin x makin mirip", "xmin": -5, "xmax": 5, "ymin": -2, "ymax": 2, "kurva": [{"f": "sin(x)", "label": "y = \\sin x"}, {"f": "x", "label": "x"}, {"f": "x-x^3/6", "label": "x - \\frac{x^3}{6}"}, {"f": "x-x^3/6+x^5/120", "label": "x - \\frac{x^3}{6} + \\frac{x^5}{120}"}], "langkah": [{"say": "Kain yang ditiru: grafik $y = \\sin x$.", "kurva": 1}, {"say": "Satu ukuran (kemiringan di 0): garis $y = x$. Mirip hanya sangat dekat $x = 0$.", "kurva": 2}, {"say": "Tambah suku $-\\frac{x^3}{6}$: tiruan menempel lebih lebar.", "kurva": 3}, {"say": "Tambah suku $\\frac{x^5}{120}$: makin mirip, tetapi tetap meleset jauh dari $x = 0$.", "kurva": 4}]}
```

## Konsep

### Menurunkan rumus

Misalkan $f(x)$ bisa ditulis sebagai polinomial tak hingga:
$$ f(x) = a_0 + a_1x + a_2x^2 + a_3x^3 + \cdots $$
Kita cocokkan "ukuran" di $x = 0$:

- $x = 0$: $f(0) = a_0$.
- Turunkan sekali: $f'(x) = a_1 + 2a_2x + 3a_3x^2 + \cdots$, jadi $f'(0) = a_1$.
- Turunkan lagi: $f''(x) = 2a_2 + 6a_3x + \cdots$, jadi $f''(0) = 2a_2$, sehingga $a_2 = \frac{f''(0)}{2!}$.
- Sekali lagi: $f'''(0) = 6a_3 = 3!\,a_3$.

Polanya $a_n = \dfrac{f^{(n)}(0)}{n!}$. Jadi **deret Maclaurin**:
$$ f(x) = f(0) + f'(0)\,x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \cdots $$

### Deret standar

Dengan rumus di atas (dan tercantum di daftar rumus MF26):
$$ e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots \quad (\text{semua } x) $$
$$ \sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots \quad (\text{semua } x) $$
$$ \cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots \quad (\text{semua } x) $$
$$ \ln(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots \quad (-1 < x \leq 1) $$
$$ (1 + x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \cdots \quad (|x| < 1) $$

Contoh penurunan: untuk $f(x) = e^x$, semua turunan adalah $e^x$, dan $e^0 = 1$, jadi $a_n = \frac{1}{n!}$. Untuk $\sin x$, turunannya berputar $\sin, \cos, -\sin, -\cos$, sehingga di $x = 0$ nilainya $0, 1, 0, -1, \ldots$ Karena itu $\sin x$ hanya punya pangkat ganjil (fungsi ganjil) dan $\cos x$ hanya pangkat genap.

```anim
{"type": "persamaan", "title": "Menurunkan deret cos x", "baris": [{"tex": "f(0) = \\cos 0 = 1", "say": "Ukuran pertama: nilai di $x = 0$."}, {"tex": "f'(0) = -\\sin 0 = 0", "say": "Kemiringan di $x = 0$ nol: tidak ada suku $x$."}, {"tex": "f''(0) = -\\cos 0 = -1", "say": "Lengkungan: koefisien $x^2$ adalah $\\frac{-1}{2!}$."}, {"tex": "f'''(0) = \\sin 0 = 0,\\quad f^{(4)}(0) = \\cos 0 = 1", "say": "Polanya berulang setiap empat turunan."}, {"tex": "\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots", "say": "Hanya pangkat genap yang tersisa."}]}
```

Untuk $(1 + x)^n$ dengan $n$ bukan bilangan bulat positif, deretnya tak hingga dan **hanya berlaku untuk $|x| < 1$**.

```anim
{"type": "grafik", "title": "Deret (1 + x)⁻¹ hanya sah untuk |x| < 1", "xmin": -2, "xmax": 2, "ymin": -2, "ymax": 6, "kurva": [{"f": "1/(1+x)", "label": "y = \\frac{1}{1 + x}", "dari": -0.9}, {"f": "1-x+x^2-x^3+x^4", "label": "1 - x + x^2 - x^3 + x^4"}], "garis": [{"x": -1}, {"x": 1}], "langkah": [{"say": "Grafik $y = (1 + x)^{-1}$.", "kurva": 1}, {"say": "Lima suku pertama deretnya.", "kurva": 2}, {"say": "Di antara $x = -1$ dan $x = 1$ keduanya berimpit; di luar itu deret meleset jauh.", "kurva": 2, "garis": 2}]}
```

### Memakai deret standar

Ganti $x$ dengan ekspresi lain, misalnya $e^{2x}$: ganti $x$ dengan $2x$. Daerah berlakunya ikut berubah: $\ln(1 + 3x)$ berlaku untuk $-1 < 3x \leq 1$. Untuk hasil kali, kalikan deret dan kumpulkan suku sampai pangkat yang diminta.

### Hampiran untuk $x$ kecil

Jika $x$ kecil (dalam radian), suku pangkat tinggi sangat kecil dan bisa diabaikan:
$$ \sin x \approx x, \qquad \cos x \approx 1 - \frac{x^2}{2}, \qquad \tan x \approx x $$

```anim
{"type": "grafik", "title": "Hampiran untuk x kecil", "xmin": -3, "xmax": 3, "ymin": -2, "ymax": 1.5, "kurva": [{"f": "cos(x)", "label": "y = \\cos x"}, {"f": "1-x^2/2", "label": "y = 1 - \\frac{x^2}{2}"}], "langkah": [{"say": "Grafik $y = \\cos x$.", "kurva": 1}, {"say": "Hampiran $1 - \\frac{x^2}{2}$ hampir sama untuk $x$ dekat 0 (radian), lalu menjauh.", "kurva": 2}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Substitusi ke deret standar

```soal
{
 "title": "Contoh 1",
 "text": "Tentukan ekspansi $e^{2x}$ sampai suku $x^3$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pilih deret $e^u = 1 + u + \\frac{u^2}{2!} + \\frac{u^3}{3!} + \\cdots$. Nilai $u$ = ?",
   "options": [
    "$2x$",
    "$x^2$",
    "$x$"
   ],
   "answer": "$2x$",
   "hint": "Apa yang ada di pangkat $e$?",
   "explain": "$u = 2x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Substitusi. Suku $\\frac{u^2}{2!}$ menjadi?",
   "options": [
    "$2x^2$",
    "$x^2$",
    "$4x^2$"
   ],
   "answer": "$2x^2$",
   "hint": "Seluruh $2x$ dikuadratkan: $(2x)^2 = 4x^2$.",
   "explain": "$\\frac{4x^2}{2} = 2x^2$. Pilihan $x^2$ muncul kalau lupa kurung.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Sederhanakan suku $\\frac{(2x)^3}{3!} = \\frac{8x^3}{6}$. Koefisien $x^3$ = ?",
   "answer": {
    "num": 4,
    "den": 3
   },
   "hint": "Sederhanakan $\\frac{8}{6}$.",
   "explain": "$\\frac{8}{6} = \\frac{4}{3}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: dengan rumus Maclaurin, $f'''(x) = 2^3e^{2x}$. Nilai $f'''(0)$ = ?",
   "answer": "8",
   "hint": "$e^0 = 1$.",
   "explain": "$f'''(0) = 8$, dan $\\frac{8}{3!} = \\frac{4}{3}$. Sama.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $e^{2x} \\approx 1 + 2x + 2x^2 + \\frac{4}{3}x^3$."
}
```

### Contoh 2: Dengan turunan berulang

```soal
{
 "title": "Contoh 2",
 "text": "$y = e^{\\sin x}$. Tunjukkan bahwa $\\dfrac{dy}{dx} = y\\cos x$, lalu tentukan deret Maclaurin $y$ sampai suku $x^3$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Turunan pertama dengan aturan rantai: $\\frac{dy}{dx}$ = ?",
   "options": [
    "$y\\cos x$",
    "$y\\sin x$",
    "$e^{\\cos x}$"
   ],
   "answer": "$y\\cos x$",
   "hint": "Turunan bagian dalam $\\sin x$ adalah $\\cos x$.",
   "explain": "$e^{\\sin x}\\cos x = y\\cos x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Turunan kedua dari $y\\cos x$ (aturan perkalian): $y''$ = ?",
   "options": [
    "$y'\\cos x - y\\sin x$",
    "$y'\\cos x + y\\sin x$",
    "$-y\\sin x$"
   ],
   "answer": "$y'\\cos x - y\\sin x$",
   "hint": "$(uv)' = u'v + uv'$ dan turunan $\\cos x$ adalah $-\\sin x$.",
   "explain": "$y'' = y'\\cos x - y\\sin x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Turunan ketiga: $y'''$ = ?",
   "options": [
    "$y''\\cos x - 2y'\\sin x - y\\cos x$",
    "$y''\\cos x - y'\\sin x$",
    "$y''\\cos x + 2y'\\sin x - y\\cos x$"
   ],
   "answer": "$y''\\cos x - 2y'\\sin x - y\\cos x$",
   "hint": "Turunkan kedua suku $y'\\cos x$ dan $-y\\sin x$ dengan aturan perkalian.",
   "explain": "$(y''\\cos x - y'\\sin x) - (y'\\sin x + y\\cos x)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Ukur di $x = 0$. $y(0)$ = ?",
   "answer": "1",
   "hint": "$e^{\\sin 0} = e^0$.",
   "explain": "$y(0) = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$y'(0) = y(0)\\cos 0$ = ?",
   "answer": "1",
   "hint": "$\\cos 0 = 1$.",
   "explain": "$1 \\cdot 1 = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$y''(0) = y'(0)\\cos 0 - y(0)\\sin 0$ = ?",
   "answer": "1",
   "hint": "$\\sin 0 = 0$.",
   "explain": "$1 - 0 = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$y'''(0) = y''(0) - 0 - y(0)$ = ?",
   "answer": "0",
   "hint": "$1 - 0 - 1$.",
   "explain": "$y'''(0) = 0$, jadi suku $x^3$ bernilai nol.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Susun deretnya.",
   "options": [
    "$1 + x + \\frac{x^2}{2}$",
    "$1 + x + x^2$",
    "$1 + x + \\frac{x^2}{2} + \\frac{x^3}{6}$"
   ],
   "answer": "$1 + x + \\frac{x^2}{2}$",
   "hint": "Koefisien $x^n$ adalah $\\frac{f^{(n)}(0)}{n!}$.",
   "explain": "$1 + x + \\frac{1}{2!}x^2 + \\frac{0}{3!}x^3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: cara substitusi memberi suku $x^3$: $-\\frac{x^3}{6} + \\frac{x^3}{6}$. Koefisiennya = ?",
   "answer": "0",
   "hint": "Kedua suku saling menghapus.",
   "explain": "Koefisien $x^3$ memang 0. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $e^{\\sin x} \\approx 1 + x + \\dfrac{x^2}{2} + 0x^3$."
}
```

### Contoh 3: Hasil kali dua deret

```soal
{
 "title": "Contoh 3",
 "text": "Tentukan ekspansi $e^{2x}\\ln(1 + x)$ sampai suku $x^3$, dan nyatakan daerah berlakunya. Pakai $e^{2x} = 1 + 2x + 2x^2 + \\cdots$ dan $\\ln(1 + x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots$",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Koefisien $x$: hanya $1 \\cdot x$. Koefisiennya = ?",
   "answer": "1",
   "hint": "Pasangan pangkat yang jumlahnya 1: pangkat 0 dari $e^{2x}$ dan pangkat 1 dari $\\ln$.",
   "explain": "Koefisien $x$ adalah 1.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Koefisien $x^2$: $1 \\cdot \\left(-\\frac{1}{2}\\right) + 2 \\cdot 1$ = ?",
   "answer": {
    "num": 3,
    "den": 2
   },
   "hint": "Ambil semua pasangan pangkat yang jumlahnya 2.",
   "explain": "$-\\frac{1}{2} + 2 = \\frac{3}{2}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Koefisien $x^3$: $1 \\cdot \\frac{1}{3} + 2 \\cdot \\left(-\\frac{1}{2}\\right) + 2 \\cdot 1$ = ?",
   "answer": {
    "num": 4,
    "den": 3
   },
   "hint": "Tiga pasangan: $(0,3)$, $(1,2)$, $(2,1)$.",
   "explain": "$\\frac{1}{3} - 1 + 2 = \\frac{4}{3}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Daerah berlaku?",
   "options": [
    "$-1 < x \\leq 1$",
    "semua $x$",
    "$|x| < 2$"
   ],
   "answer": "$-1 < x \\leq 1$",
   "hint": "$e^{2x}$ berlaku untuk semua $x$; ambil irisan dengan daerah $\\ln(1 + x)$.",
   "explain": "Irisannya $-1 < x \\leq 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: nilai deret di $x = 0{,}1$, bulatkan ke 4 desimal.",
   "answer": "0,1163",
   "hint": "$0{,}1 + 1{,}5(0{,}01) + \\frac{4}{3}(0{,}001)$.",
   "explain": "$0{,}1 + 0{,}015 + 0{,}00133 \\approx 0{,}1163$; nilai sebenarnya $\\approx 0{,}1164$. Sangat dekat.",
   "error": "salah-pembulatan"
  }
 ],
 "conclusion": "Jadi $e^{2x}\\ln(1 + x) \\approx x + \\dfrac{3}{2}x^2 + \\dfrac{4}{3}x^3$, berlaku untuk $-1 < x \\leq 1$."
}
```

### Contoh 4: Tabungan dengan bunga kontinu

```soal
{
 "title": "Contoh 4",
 "text": "Bu Siti menyimpan Rp10.000.000 di deposito dengan bunga kontinu 5% per tahun. Setelah satu tahun, saldonya $10.000.000\\,e^{0{,}05}$. Hampiri saldo itu dengan tiga dan empat suku deret $e^x$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Tiga suku $1 + 0{,}05 + \\frac{0{,}05^2}{2}$ = ?",
   "answer": "1,05125",
   "hint": "$0{,}05^2 = 0{,}0025$, dibagi 2.",
   "explain": "$1 + 0{,}05 + 0{,}00125 = 1{,}05125$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Saldo dengan tiga suku = ?",
   "answer": "10.512.500",
   "hint": "Kalikan 10.000.000 dengan 1,05125.",
   "explain": "Saldo $\\approx$ Rp10.512.500.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Suku keempat dalam rupiah: $10.000.000 \\times \\frac{0{,}05^3}{6}$, bulatkan ke rupiah terdekat.",
   "answer": "208",
   "hint": "$0{,}05^3 = 0{,}000125$; kali 10.000.000 lalu bagi 6.",
   "explain": "$1.250 \\div 6 \\approx 208$.",
   "error": "salah-pembulatan",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Saldo dengan empat suku = ?",
   "answer": "10.512.708",
   "hint": "Tambahkan suku keempat ke saldo tiga suku.",
   "explain": "Rp10.512.500 + Rp208 = Rp10.512.708.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: kalkulator memberi Rp10.512.711. Selisihnya dengan hampiran tiga suku = ?",
   "answer": "211",
   "hint": "10.512.711 − 10.512.500.",
   "explain": "Tiga suku meleset Rp211, empat suku hanya sekitar Rp3.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Jadi hampiran tiga suku Rp10.512.500 dan empat suku Rp10.512.708 (nilai sebenarnya sekitar Rp10.512.711)."
}
```

## Kesalahan yang sering terjadi

- **Lupa faktorial.** Menulis koefisien $x^3$ sebagai $f'''(0)$, bukan $\frac{f'''(0)}{3!}$. Ingat penurunan rumus: setiap kali diturunkan, muncul faktor pengali.
- **Substitusi tanpa kurung.** Pada $e^{2x}$, menulis $\frac{2x^2}{2}$ alih-alih $\frac{(2x)^2}{2}$. Seluruh $u = 2x$ harus dipangkatkan.
- **Memakai derajat.** $\sin x \approx x$ hanya berlaku jika $x$ dalam **radian**. $\sin 5^\circ \approx 5$ jelas salah; yang benar $\sin\frac{5\pi}{180} \approx 0{,}0872$.
- **Mengabaikan daerah berlaku.** $(1 + x)^{-1} = 1 - x + x^2 - \cdots$ untuk $x = 2$ memberi $1 - 2 + 4 - \cdots$, tidak menuju $\frac{1}{3}$. Deret binomial hanya sah untuk $|x| < 1$.
- **Kurang suku saat mengalikan.** Untuk koefisien $x^3$ dari hasil kali, semua pasangan pangkat yang jumlahnya 3 harus diambil. Buat tabel seperti Contoh 3.

## Ringkasan

- Deret Maclaurin: $f(x) = \displaystyle\sum \frac{f^{(n)}(0)}{n!}x^n$, didapat dengan mencocokkan nilai dan turunan di $x = 0$.
- Deret standar: $e^x$, $\sin x$, $\cos x$ (semua $x$), $\ln(1 + x)$ ($-1 < x \leq 1$), $(1 + x)^n$ ($|x| < 1$).
- Gunakan substitusi, perkalian, dan turunan implisit (seperti $y' = y\cos x$) untuk fungsi baru.
- Untuk $x$ kecil (radian): $\sin x \approx x$, $\cos x \approx 1 - \frac{x^2}{2}$, $\tan x \approx x$.
- Hampiran paling akurat dekat $x = 0$; selalu sebutkan daerah berlaku.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tentukan ekspansi $\\cos 3x$ sampai suku $x^4$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Ganti $x$ dengan $3x$. $(3x)^2 = ?\\,x^2$",
   "answer": "9",
   "hint": "Kuadratkan 3 juga.",
   "explain": "$(3x)^2 = 9x^2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$(3x)^4 = ?\\,x^4$",
   "answer": "81",
   "hint": "$3^4$.",
   "explain": "$(3x)^4 = 81x^4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Koefisien $x^4$: $\\frac{81}{4!}$ = ? (paling sederhana)",
   "answer": {
    "num": 27,
    "den": 8
   },
   "hint": "$4! = 24$.",
   "explain": "$\\frac{81}{24} = \\frac{27}{8}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "choice",
   "prompt": "Ekspansinya?",
   "options": [
    "$1 - \\frac{9x^2}{2} + \\frac{27x^4}{8}$",
    "$1 - \\frac{3x^2}{2} + \\frac{3x^4}{24}$",
    "$1 + \\frac{9x^2}{2} + \\frac{27x^4}{8}$"
   ],
   "answer": "$1 - \\frac{9x^2}{2} + \\frac{27x^4}{8}$",
   "hint": "$\\cos u = 1 - \\frac{u^2}{2!} + \\frac{u^4}{4!}$; tanda berselang.",
   "explain": "$1 - \\frac{9x^2}{2} + \\frac{81x^4}{24}$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\cos 3x \\approx 1 - \\dfrac{9x^2}{2} + \\dfrac{27x^4}{8}$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Tentukan ekspansi $(1 - 2x)^{-1/2}$ sampai suku $x^2$, dan daerah berlakunya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Pakai $(1 + u)^n$ dengan $n = -\\frac{1}{2}$, $u = -2x$. Koefisien $x$ ($nu$) = ?",
   "answer": "1",
   "hint": "$\\left(-\\frac{1}{2}\\right)(-2)$.",
   "explain": "Koefisien $x$ adalah 1.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Koefisien $x^2$: $\\frac{n(n-1)}{2!}(-2)^2$ = ?",
   "answer": {
    "num": 3,
    "den": 2
   },
   "hint": "$\\frac{(-1/2)(-3/2)}{2} = \\frac{3}{8}$, lalu kali 4.",
   "explain": "$\\frac{3}{8} \\times 4 = \\frac{3}{2}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "choice",
   "prompt": "Daerah berlakunya?",
   "options": [
    "$|x| < \\frac{1}{2}$",
    "$|x| < 1$",
    "$|x| < 2$"
   ],
   "answer": "$|x| < \\frac{1}{2}$",
   "hint": "Syaratnya $|u| < 1$, yaitu $|2x| < 1$.",
   "explain": "$|x| < \\frac{1}{2}$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $(1 - 2x)^{-1/2} \\approx 1 + x + \\dfrac{3}{2}x^2$ untuk $|x| < \\frac{1}{2}$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Untuk $x$ kecil, tunjukkan $\\dfrac{\\cos x}{1 + \\sin x} \\approx 1 - x + \\dfrac{x^2}{2}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Hampiran $\\cos x$ sampai $x^2$?",
   "options": [
    "$1 - \\frac{x^2}{2}$",
    "$1 - x^2$",
    "$x$"
   ],
   "answer": "$1 - \\frac{x^2}{2}$",
   "hint": "Deret standar cos.",
   "explain": "$\\cos x \\approx 1 - \\frac{x^2}{2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$\\frac{1}{1 + \\sin x} \\approx (1 + x)^{-1}$ sampai $x^2$ = ?",
   "options": [
    "$1 - x + x^2$",
    "$1 + x + x^2$",
    "$1 - x - x^2$"
   ],
   "answer": "$1 - x + x^2$",
   "hint": "$(1 + u)^{-1} = 1 - u + u^2 - \\cdots$",
   "explain": "Dengan $u \\approx x$: $1 - x + x^2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Kalikan $(1 - \\frac{x^2}{2})(1 - x + x^2)$. Koefisien $x^2$ = ?",
   "answer": {
    "num": 1,
    "den": 2
   },
   "hint": "Pasangan: $1 \\cdot x^2$ dan $-\\frac{x^2}{2} \\cdot 1$.",
   "explain": "$1 - \\frac{1}{2} = \\frac{1}{2}$, jadi hasilnya $1 - x + \\frac{x^2}{2}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\dfrac{\\cos x}{1 + \\sin x} \\approx 1 - x + \\dfrac{x^2}{2}$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "$y = \\tan x$. Dengan $\\frac{dy}{dx} = 1 + y^2$, tentukan deret Maclaurin $y$ sampai suku $x^3$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$y(0) = \\tan 0$ = ?",
   "answer": "0",
   "hint": "$\\tan 0$.",
   "explain": "$y(0) = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$y'(0) = 1 + y(0)^2$ = ?",
   "answer": "1",
   "hint": "Masukkan $y(0) = 0$.",
   "explain": "$y'(0) = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$y'' = 2yy'$. Nilai $y''(0)$ = ?",
   "answer": "0",
   "hint": "$y(0) = 0$.",
   "explain": "$y''(0) = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$y''' = 2(y')^2 + 2yy''$. Nilai $y'''(0)$ = ?",
   "answer": "2",
   "hint": "$2(1)^2 + 2(0)(0)$.",
   "explain": "$y'''(0) = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Deretnya?",
   "options": [
    "$x + \\frac{x^3}{3}$",
    "$x + 2x^3$",
    "$x + \\frac{x^3}{6}$"
   ],
   "answer": "$x + \\frac{x^3}{3}$",
   "hint": "Koefisien $x^3$ adalah $\\frac{y'''(0)}{3!}$.",
   "explain": "$\\frac{2}{6} = \\frac{1}{3}$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\tan x \\approx x + \\dfrac{x^3}{3}$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Hampiri $\\ln 1{,}1$ dengan tiga suku pertama deret $\\ln(1 + x)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Nilai $x$ = ?",
   "answer": "0,1",
   "hint": "$1 + x = 1{,}1$.",
   "explain": "$x = 0{,}1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$x - \\frac{x^2}{2}$ = ?",
   "answer": "0,095",
   "hint": "$\\frac{0{,}01}{2} = 0{,}005$.",
   "explain": "$0{,}1 - 0{,}005 = 0{,}095$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Tambah $\\frac{x^3}{3}$. Hasil akhir, bulatkan ke 5 desimal.",
   "answer": "0,09533",
   "hint": "$\\frac{0{,}001}{3} \\approx 0{,}000333$.",
   "explain": "$0{,}095 + 0{,}000333 \\approx 0{,}09533$; nilai sebenarnya $0{,}09531$.",
   "error": "salah-pembulatan"
  }
 ],
 "conclusion": "Jadi $\\ln 1{,}1 \\approx 0{,}09533$."
}
```
