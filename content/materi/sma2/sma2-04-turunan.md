---
id: sma2-04-turunan
judul: Turunan
jenjang: sma2
moe: "Additional Mathematics · C1 Differentiation and integration"
prasyarat: [smp1-08-fungsi-linear, sma1-09-binomial-newton, sma1-10-eksponen-logaritma, sma2-01-trigonometri-identitas]
durasi_menit: 90
---

## Kenapa belajar ini?

Speedometer motor menunjukkan kecepatan **saat ini**, bukan rata-rata perjalanan. Turunan adalah matematika di balik angka itu: laju perubahan sesaat. Dengan turunan, kita bisa tahu seberapa cepat kopi mendingin, kapan sebuah fungsi naik atau turun, dan di mana titik puncak serta lembahnya.

## Analogi

Bayangkan Budi naik motor di Jalan Bypass Ngurah Rai. Jarak yang sudah ditempuh setelah $t$ detik adalah $s(t)$.

- **Kecepatan rata-rata** dari detik $t$ sampai $t + h$ adalah $\frac{s(t + h) - s(t)}{h}$: jarak dibagi waktu.
- **Kecepatan sesaat** (angka speedometer) didapat dengan membuat selang waktu $h$ makin kecil, mendekati nol.

Turunan adalah "speedometer" untuk fungsi apa pun. Jika speedometer positif, motor maju (fungsi **naik**). Jika nol, motor sesaat berhenti (titik **stasioner**). Turunan kedua seperti membaca apakah motor sedang menambah atau mengurangi kecepatan.

```anim
{"type": "grafik", "title": "Dari kecepatan rata-rata ke kecepatan sesaat", "xmin": 0, "xmax": 3.5, "ymin": -1, "ymax": 10, "kurva": [{"f": "x^2", "label": "s(t) = t^2"}, {"f": "4x-3", "label": "h = 2:\\ \\text{gradien } 4"}, {"f": "3x-2", "label": "h = 1:\\ \\text{gradien } 3"}, {"f": "2x-1", "label": "h \\to 0:\\ \\text{gradien } 2"}], "titik": [{"x": 1, "y": 1, "label": "t = 1"}], "langkah": [{"say": "Jarak tempuh motor $s(t) = t^2$.", "kurva": 1, "titik": 1}, {"say": "Kecepatan rata-rata dari $t = 1$ sampai $t = 3$: gradien tali busur $= \\frac{9 - 1}{2} = 4$.", "kurva": 2, "titik": 1}, {"say": "Perkecil selangnya: dari $t = 1$ sampai $t = 2$, gradien $= 3$.", "kurva": 3, "titik": 1}, {"say": "Saat $h \\to 0$, tali busur menjadi garis singgung bergradien 2: kecepatan sesaat di $t = 1$.", "kurva": 4, "titik": 1}]}
```

## Konsep

### Gradien kurva dan definisi turunan

Pada grafik $y = f(x)$, kecepatan rata-rata adalah gradien **tali busur** yang menghubungkan $(x, f(x))$ dan $(x + h, f(x + h))$. Saat $h \to 0$, tali busur mendekati **garis singgung**. Gradien garis singgung itulah turunan:

$$
f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}
$$

Menghitung turunan langsung dari definisi ini disebut **turunan dari prinsip pertama**.

```anim
{"type": "persamaan", "title": "Prinsip pertama untuk f(x) = x²", "baris": [{"tex": "\\frac{f(x+h) - f(x)}{h} = \\frac{(x+h)^2 - x^2}{h}", "say": "Tulis gradien tali busur."}, {"tex": "= \\frac{x^2 + 2xh + h^2 - x^2}{h}", "say": "Uraikan $(x+h)^2$."}, {"tex": "= \\frac{2xh + h^2}{h} = 2x + h", "say": "$x^2$ habis, lalu bagi dengan $h$.", "op": "$\\div h$"}, {"tex": "f'(x) = \\lim_{h \\to 0}(2x + h) = 2x", "say": "Biarkan $h$ menuju 0. Di $x = 1$, gradiennya 2, sama dengan animasi motor.", "op": "$h \\to 0$"}]}
```

### Notasi

Jika $y = f(x)$, turunannya ditulis $\frac{dy}{dx}$, $y'$, atau $f'(x)$. Turunan kedua (turunan dari turunan) ditulis $\frac{d^2y}{dx^2}$ atau $f''(x)$. Notasi $\frac{dy}{dx}$ mengingatkan kita: "perubahan $y$ per perubahan $x$".

### Turunan $x^n$

Untuk $n$ bulat positif, uraian binomial memberi

$$
(x + h)^n = x^n + nx^{n-1}h + \binom{n}{2}x^{n-2}h^2 + \dots + h^n
$$

Kurangi $x^n$, bagi dengan $h$, maka semua suku kecuali $nx^{n-1}$ masih memuat $h$. Saat $h \to 0$, suku-suku itu hilang:

$$
\frac{d}{dx}\left(x^n\right) = nx^{n-1}
$$

Rumus ini juga berlaku untuk $n$ pecahan dan negatif, misalnya $\sqrt{x} = x^{1/2}$ dan $\frac{1}{x} = x^{-1}$. Konstanta pengali ikut, konstanta tunggal turunannya nol, dan turunan jumlah adalah jumlah turunan.

### Turunan $\sin x$, $\cos x$, $\tan x$

Sudut harus dalam **radian**. Dari rumus jumlah:

$$
\frac{\sin(x + h) - \sin x}{h} = \sin x \cdot \frac{\cos h - 1}{h} + \cos x \cdot \frac{\sin h}{h}
$$

Untuk $h$ kecil, $\frac{\sin h}{h} \to 1$ dan $\frac{\cos h - 1}{h} \to 0$. (Cek kalkulator, $h = 0{,}01$: $0{,}99998$ dan $-0{,}005$.) Jadi

$$
\frac{d}{dx}\sin x = \cos x, \qquad \frac{d}{dx}\cos x = -\sin x, \qquad \frac{d}{dx}\tan x = \sec^2 x
$$

Turunan $\cos x$ diperoleh dengan cara serupa. Turunan $\tan x$ diturunkan dengan aturan pembagian di bawah.

### Turunan $e^x$ dan $\ln x$

Bilangan $e$ istimewa karena gradien $y = e^x$ di $x = 0$ tepat 1, yaitu $\lim_{h \to 0}\frac{e^h - 1}{h} = 1$. Maka

$$
\frac{e^{x+h} - e^x}{h} = e^x \cdot \frac{e^h - 1}{h} \to e^x, \quad \text{jadi} \quad \frac{d}{dx}e^x = e^x
$$

Untuk $y = \ln x$: $x = e^y$, sehingga $\frac{dx}{dy} = e^y = x$. Balik perbandingannya:

$$
\frac{d}{dx}\ln x = \frac{1}{x}, \quad x > 0
$$

```anim
{"type": "grafik", "title": "Gradien e^x di x = 0 tepat 1", "xmin": -3, "xmax": 2, "ymin": -1, "ymax": 6, "kurva": [{"f": "e^x", "label": "y = e^x"}, {"f": "x+1", "label": "\\text{singgung: } y = x + 1"}], "titik": [{"x": 0, "y": 1, "label": "(0, 1)"}, {"x": 1, "y": 2.7183, "label": "gradien e di x = 1"}], "langkah": [{"say": "Grafik $y = e^x$.", "kurva": 1}, {"say": "Garis singgung di $(0, 1)$ bergradien tepat 1.", "kurva": 2, "titik": 1}, {"say": "Di setiap titik, gradien $e^x$ sama dengan tingginya: $\\frac{d}{dx}e^x = e^x$.", "kurva": 2, "titik": 2}]}
```

### Aturan rantai

Jika $y$ bergantung pada $u$, dan $u$ bergantung pada $x$:

$$
\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}
$$

Dalam analogi motor: bensin terpakai bergantung pada jarak, dan jarak bergantung pada waktu. Laju bensin per jam = (liter per km) $\times$ (km per jam). Contoh: $\frac{d}{dx}(ax + b)^n = n(ax + b)^{n-1} \cdot a$, dan $\frac{d}{dx}e^{f(x)} = f'(x)e^{f(x)}$.

### Aturan perkalian dan pembagian

Bayangkan persegi panjang bersisi $u$ dan $v$. Jika sisi bertambah $\Delta u$ dan $\Delta v$, luasnya bertambah $u\,\Delta v + v\,\Delta u + \Delta u\,\Delta v$. Bagi dengan $\Delta x$ dan buat $\Delta x \to 0$; suku terakhir hilang. Hasilnya:

$$
\frac{d}{dx}(uv) = u\frac{dv}{dx} + v\frac{du}{dx}, \qquad \frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2}
$$

Contoh: $\tan x = \frac{\sin x}{\cos x}$, jadi turunannya $\frac{\cos x \cos x - \sin x(-\sin x)}{\cos^2 x} = \frac{1}{\cos^2 x} = \sec^2 x$.

### Fungsi naik, fungsi turun, dan titik stasioner

- $f'(x) > 0$ pada suatu selang: $f$ **naik** (motor maju).
- $f'(x) < 0$: $f$ **turun**.
- $f'(x) = 0$: titik **stasioner** (motor sesaat berhenti).

**Uji turunan kedua** di titik stasioner $x = a$:

- $f''(a) > 0$: grafik melengkung ke atas, jadi **minimum**.
- $f''(a) < 0$: grafik melengkung ke bawah, jadi **maksimum**.
- $f''(a) = 0$: uji gagal. Periksa tanda $f'$ di kiri dan kanan $a$. Contoh: $y = x^4$ punya $f''(0) = 0$, tetapi $x = 0$ minimum.

```anim
{"type": "grafik", "title": "Tanda turunan dan titik stasioner", "xmin": -3, "xmax": 3, "ymin": -4, "ymax": 4, "kurva": [{"f": "x^3-3x", "label": "f(x) = x^3 - 3x"}, {"f": "3x^2-3", "label": "f'(x) = 3x^2 - 3"}], "titik": [{"x": -1, "y": 2, "label": "maks (−1, 2)"}, {"x": 1, "y": -2, "label": "min (1, −2)"}], "langkah": [{"say": "Grafik $f(x) = x^3 - 3x$.", "kurva": 1}, {"say": "Grafik $f'(x) = 3x^2 - 3$: positif saat $f$ naik, negatif saat $f$ turun.", "kurva": 2}, {"say": "$f'(x) = 0$ di $x = \\pm 1$: titik stasioner. $f''(-1) = -6 < 0$ maksimum, $f''(1) = 6 > 0$ minimum.", "kurva": 2, "titik": 2}]}
```

```visual
{"type": "table", "caption": "Tabel tanda untuk f(x) = x³ − 3x", "head": ["x", "x < −1", "−1", "−1 < x < 1", "1", "x > 1"], "rows": [["f'(x)", "+", "0", "−", "0", "+"], ["f", "naik", "maks", "turun", "min", "naik"]]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Turunan dari prinsip pertama

```soal
{
 "title": "Contoh 1",
 "text": "Dengan prinsip pertama, tentukan turunan $f(x) = 3x^2 - x$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Hitung $f(x + h)$.",
   "options": [
    "$3x^2 + 6xh + 3h^2 - x - h$",
    "$3x^2 + 3h^2 - x - h$",
    "$3x^2 + 6xh + 3h^2 - x$",
    "$3x^2 + 6xh + h^2 - x - h$"
   ],
   "answer": "$3x^2 + 6xh + 3h^2 - x - h$",
   "hint": "$(x + h)^2 = x^2 + 2xh + h^2$, lalu kalikan 3. Jangan lupa $-(x + h)$.",
   "explain": "$3(x^2 + 2xh + h^2) - x - h$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: $f(x + h) - f(x) = ?$",
   "options": [
    "$6xh + 3h^2 - h$",
    "$6xh + 3h^2$",
    "$3h^2 - h$"
   ],
   "answer": "$6xh + 3h^2 - h$",
   "hint": "Suku $3x^2$ dan $-x$ saling menghapus.",
   "explain": "Sisa suku yang memuat $h$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Bagi dengan $h$.",
   "options": [
    "$6x + 3h - 1$",
    "$6x + 3h^2 - 1$",
    "$6x + 3h$"
   ],
   "answer": "$6x + 3h - 1$",
   "hint": "Setiap suku memuat $h$, bagi satu per satu.",
   "explain": "$\\frac{6xh + 3h^2 - h}{h} = 6x + 3h - 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Ambil limit $h \\to 0$.",
   "options": [
    "$6x - 1$",
    "$6x + 2$",
    "$6x$"
   ],
   "answer": "$6x - 1$",
   "hint": "Ganti $h$ dengan 0.",
   "explain": "$f'(x) = 6x - 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung $f'(2)$ dari hasilmu.",
   "answer": "11",
   "hint": "Substitusi $x = 2$.",
   "explain": "$6(2) - 1 = 11$. Aturan pangkat juga memberi $3 \\cdot 2x - 1 = 11$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $f'(x) = 6x - 1$."
}
```

### Contoh 2: Aturan pangkat dan aturan rantai

```soal
{
 "title": "Contoh 2",
 "text": "Turunkan (a) $y = 4x^3 - \\dfrac{2}{x} + 5\\sqrt{x}$; (b) $y = (2x + 1)^5$; (c) $y = \\ln(5x - 2)$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tulis ulang (a) sebagai pangkat.",
   "options": [
    "$4x^3 - 2x^{-1} + 5x^{1/2}$",
    "$4x^3 - 2x + 5x^{1/2}$",
    "$4x^3 - 2x^{-1} + 5x^{2}$"
   ],
   "answer": "$4x^3 - 2x^{-1} + 5x^{1/2}$",
   "hint": "$\\frac{1}{x} = x^{-1}$ dan $\\sqrt{x} = x^{1/2}$.",
   "explain": "Semua suku sekarang berbentuk $ax^n$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Turunkan (a).",
   "options": [
    "$12x^2 + \\frac{2}{x^2} + \\frac{5}{2\\sqrt{x}}$",
    "$12x^2 - \\frac{2}{x^2} + \\frac{5}{2\\sqrt{x}}$",
    "$12x^2 + \\frac{2}{x^2} + \\frac{5\\sqrt{x}}{2}$"
   ],
   "answer": "$12x^2 + \\frac{2}{x^2} + \\frac{5}{2\\sqrt{x}}$",
   "hint": "$-2x^{-1} \\to (-2)(-1)x^{-2}$; $5x^{1/2} \\to \\frac{5}{2}x^{-1/2}$.",
   "explain": "Dua tanda negatif menjadi positif.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Turunkan (b) dengan $u = 2x + 1$.",
   "options": [
    "$10(2x + 1)^4$",
    "$5(2x + 1)^4$",
    "$10(2x + 1)^5$"
   ],
   "answer": "$10(2x + 1)^4$",
   "hint": "$\\frac{dy}{du} = 5u^4$, lalu kalikan $\\frac{du}{dx}$.",
   "explain": "$5u^4 \\cdot 2 = 10(2x + 1)^4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Turunkan (c) dengan $u = 5x - 2$.",
   "options": [
    "$\\frac{5}{5x - 2}$",
    "$\\frac{1}{5x - 2}$",
    "$\\frac{5}{x}$"
   ],
   "answer": "$\\frac{5}{5x - 2}$",
   "hint": "$\\frac{d}{du}\\ln u = \\frac{1}{u}$, lalu kalikan $\\frac{du}{dx}$.",
   "explain": "$\\frac{1}{u} \\cdot 5 = \\frac{5}{5x - 2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung turunan (b) di $x = 0$ dengan rumusmu.",
   "answer": "10",
   "hint": "Substitusi $x = 0$ ke $10(2x + 1)^4$.",
   "explain": "$10$. Numerik: $\\frac{1{,}002^5 - 0{,}998^5}{0{,}002} \\approx 10{,}0001$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "(a) $12x^2 + \\frac{2}{x^2} + \\frac{5}{2\\sqrt{x}}$; (b) $10(2x + 1)^4$; (c) $\\frac{5}{5x - 2}$."
}
```

### Contoh 3: Aturan perkalian dan pembagian

```soal
{
 "title": "Contoh 3",
 "text": "Turunkan (a) $y = x^2 e^{3x}$; (b) $y = \\dfrac{\\ln x}{x}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Untuk (a), $u = x^2$ dan $v = e^{3x}$. Berapa $v'$?",
   "options": [
    "$3e^{3x}$",
    "$e^{3x}$",
    "$3xe^{3x}$"
   ],
   "answer": "$3e^{3x}$",
   "hint": "Aturan rantai: turunan pangkat $3x$ adalah 3.",
   "explain": "$v' = 3e^{3x}$, dan $u' = 2x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Terapkan $uv' + vu'$ untuk (a).",
   "options": [
    "$xe^{3x}(3x + 2)$",
    "$6xe^{3x}$",
    "$3x^2e^{3x}$",
    "$xe^{3x}(x + 2)$"
   ],
   "answer": "$xe^{3x}(3x + 2)$",
   "hint": "$x^2 \\cdot 3e^{3x} + e^{3x} \\cdot 2x$, lalu faktorkan $xe^{3x}$.",
   "explain": "$3x^2e^{3x} + 2xe^{3x} = xe^{3x}(3x + 2)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Untuk (b), $u = \\ln x$ dan $v = x$. Berapa $u'$ dan $v'$?",
   "options": [
    "$u' = \\frac{1}{x}$, $v' = 1$",
    "$u' = \\ln x$, $v' = 1$",
    "$u' = \\frac{1}{x}$, $v' = x$"
   ],
   "answer": "$u' = \\frac{1}{x}$, $v' = 1$",
   "hint": "Turunan $\\ln x$ dan turunan $x$.",
   "explain": "Siap memakai aturan pembagian.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Terapkan $\\frac{vu' - uv'}{v^2}$ untuk (b).",
   "options": [
    "$\\frac{1 - \\ln x}{x^2}$",
    "$\\frac{\\ln x - 1}{x^2}$",
    "$\\frac{1}{x^2}$"
   ],
   "answer": "$\\frac{1 - \\ln x}{x^2}$",
   "hint": "$\\frac{x \\cdot \\frac{1}{x} - \\ln x \\cdot 1}{x^2}$. Urutan pembilang: $vu'$ dulu.",
   "explain": "$x \\cdot \\frac{1}{x} = 1$, jadi $\\frac{1 - \\ln x}{x^2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung turunan (b) di $x = 1$.",
   "answer": "1",
   "hint": "$\\ln 1 = 0$.",
   "explain": "$\\frac{1 - 0}{1} = 1$. Numerik juga $\\approx 1{,}000$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "(a) $xe^{3x}(3x + 2)$; (b) $\\frac{1 - \\ln x}{x^2}$."
}
```

### Contoh 4: Naik, turun, dan titik stasioner

```soal
{
 "title": "Contoh 4",
 "text": "Untuk $f(x) = x^3 - 6x^2 + 9x + 1$, tentukan titik stasioner beserta jenisnya, serta selang tempat $f$ naik dan turun.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Turunkan dan faktorkan $f'(x)$.",
   "options": [
    "$3(x - 1)(x - 3)$",
    "$3(x + 1)(x + 3)$",
    "$3(x - 1)(x + 3)$",
    "$(x - 1)(x - 3)$"
   ],
   "answer": "$3(x - 1)(x - 3)$",
   "hint": "$f'(x) = 3x^2 - 12x + 9$. Keluarkan 3 dulu.",
   "explain": "$3(x^2 - 4x + 3) = 3(x - 1)(x - 3)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Titik stasioner di $x = 1$. Berapa $f(1)$?",
   "answer": "5",
   "hint": "Substitusi ke $f$, bukan ke $f'$.",
   "explain": "$1 - 6 + 9 + 1 = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Titik stasioner lain di $x = 3$. Berapa $f(3)$?",
   "answer": "1",
   "hint": "$27 - 54 + 27 + 1$.",
   "explain": "$f(3) = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $f''(x) = 6x - 12$. Berapa $f''(1)$?",
   "answer": "-6",
   "hint": "Substitusi $x = 1$.",
   "explain": "$f''(1) = -6 < 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Jadi titik $(1, 5)$ adalah?",
   "options": [
    "Maksimum",
    "Minimum",
    "Belum bisa ditentukan"
   ],
   "answer": "Maksimum",
   "hint": "$f'' < 0$ berarti grafik melengkung ke bawah.",
   "explain": "Maksimum. Dengan cara sama, $f''(3) = 6 > 0$, jadi $(3, 1)$ minimum.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Di mana $f$ turun?",
   "options": [
    "$1 < x < 3$",
    "$x < 1$ atau $x > 3$",
    "$x > 3$"
   ],
   "answer": "$1 < x < 3$",
   "hint": "$3(x - 1)(x - 3)$ negatif di antara kedua akar.",
   "explain": "Turun untuk $1 < x < 3$, naik untuk $x < 1$ atau $x > 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung $f'(2)$.",
   "answer": "-3",
   "hint": "$12 - 24 + 9$.",
   "explain": "$f'(2) = -3 < 0$, memang turun di antara 1 dan 3. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Maksimum $(1, 5)$, minimum $(3, 1)$; naik untuk $x < 1$ atau $x > 3$, turun untuk $1 < x < 3$."
}
```

### Contoh 5: Soal cerita, kopi Kintamani mendingin

```soal
{
 "title": "Contoh 5",
 "text": "Suhu secangkir kopi Kintamani $t$ menit setelah diseduh adalah $T = 25 + 70e^{-0{,}1t}$ °C. (a) Tentukan laju perubahan suhu saat $t = 10$. (b) Kapan suhu turun dengan laju 3,5 °C per menit?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Turunkan $\\frac{dT}{dt}$.",
   "options": [
    "$-7e^{-0{,}1t}$",
    "$70e^{-0{,}1t}$",
    "$-0{,}1e^{-0{,}1t}$",
    "$25 - 7e^{-0{,}1t}$"
   ],
   "answer": "$-7e^{-0{,}1t}$",
   "hint": "Konstanta 25 turunannya 0. Untuk $e^{-0{,}1t}$ pakai rantai.",
   "explain": "$70 \\cdot (-0{,}1)e^{-0{,}1t} = -7e^{-0{,}1t}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung $\\frac{dT}{dt}$ saat $t = 10$. Bulatkan ke 2 desimal.",
   "answer": "-2,58",
   "hint": "$-7e^{-1}$, dengan $e^{-1} \\approx 0{,}3679$.",
   "explain": "$\\approx -2{,}58$ °C per menit. Negatif: suhu turun.",
   "error": "salah-pembulatan",
   "suffix": "°C/menit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Dari $-7e^{-0{,}1t} = -3{,}5$, berapa $e^{-0{,}1t}$?",
   "answer": "0,5",
   "hint": "Bagi kedua ruas dengan $-7$.",
   "explain": "$e^{-0{,}1t} = 0{,}5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Berapa $t$? Bulatkan ke 2 desimal.",
   "answer": "6,93",
   "hint": "$-0{,}1t = \\ln 0{,}5$, jadi $t = 10\\ln 2$.",
   "explain": "$t \\approx 6{,}93$ menit.",
   "error": "salah-pembulatan",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung $-7 \\times 0{,}5$.",
   "answer": "-3,5",
   "hint": "Laju saat $e^{-0{,}1t} = 0{,}5$.",
   "explain": "Hasilnya $-3{,}5$ °C per menit. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "(a) Sekitar $-2{,}58$ °C per menit (turun 2,58 °C per menit); (b) sekitar 6,93 menit setelah diseduh."
}
```

## Kesalahan yang sering terjadi

- **Lupa mengalikan turunan bagian dalam.** Menulis $\frac{d}{dx}(2x + 1)^5 = 5(2x + 1)^4$. Aturan rantai menuntut dikali $2$: hasilnya $10(2x + 1)^4$.
- **Menurunkan perkalian per faktor.** Menulis $\frac{d}{dx}(x^2e^{3x}) = 2x \cdot 3e^{3x}$. Pakai aturan perkalian $uv' + vu'$.
- **Urutan pembilang aturan pembagian terbalik.** Yang benar $vu' - uv'$, bukan $uv' - vu'$. Tanda hasil akan salah jika tertukar.
- **Memakai derajat untuk turunan trigonometri.** $\frac{d}{dx}\sin x = \cos x$ hanya berlaku jika $x$ dalam radian.
- **Menganggap $f''(a) = 0$ berarti titik belok.** Uji turunan kedua gagal di sini; periksa tanda $f'$ di sekitar $a$.

## Ringkasan

- $f'(x) = \lim_{h \to 0}\frac{f(x + h) - f(x)}{h}$: gradien garis singgung, laju perubahan sesaat.
- $\frac{d}{dx}x^n = nx^{n-1}$, $\frac{d}{dx}\sin x = \cos x$, $\frac{d}{dx}\cos x = -\sin x$, $\frac{d}{dx}\tan x = \sec^2 x$, $\frac{d}{dx}e^x = e^x$, $\frac{d}{dx}\ln x = \frac{1}{x}$.
- Rantai: $\frac{dy}{dx} = \frac{dy}{du}\cdot\frac{du}{dx}$. Perkalian: $uv' + vu'$. Pembagian: $\frac{vu' - uv'}{v^2}$.
- $f' > 0$ naik, $f' < 0$ turun, $f' = 0$ stasioner.
- Uji turunan kedua: $f'' > 0$ minimum, $f'' < 0$ maksimum, $f'' = 0$ periksa tanda $f'$.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Turunkan $y = 5x^4 - 3x + \\dfrac{7}{x^2}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Tulis $\\frac{7}{x^2}$ sebagai pangkat.",
   "options": [
    "$7x^{-2}$",
    "$7x^{2}$",
    "$7x^{-1/2}$"
   ],
   "answer": "$7x^{-2}$",
   "hint": "$\\frac{1}{x^n} = x^{-n}$.",
   "explain": "$\\frac{7}{x^2} = 7x^{-2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasil $\\frac{dy}{dx}$?",
   "options": [
    "$20x^3 - 3 - \\frac{14}{x^3}$",
    "$20x^3 - 3 + \\frac{14}{x^3}$",
    "$20x^3 - 3 - \\frac{14}{x}$",
    "$20x^3 - \\frac{14}{x^3}$"
   ],
   "answer": "$20x^3 - 3 - \\frac{14}{x^3}$",
   "hint": "$7x^{-2} \\to 7(-2)x^{-3}$.",
   "explain": "$-14x^{-3} = -\\frac{14}{x^3}$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\frac{dy}{dx} = 20x^3 - 3 - \\frac{14}{x^3}$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Turunkan $y = (3x - 2)^4$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Turunan bagian dalam $3x - 2$?",
   "answer": "3",
   "hint": "Turunkan $3x - 2$ terhadap $x$.",
   "explain": "Turunannya 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasil $\\frac{dy}{dx}$?",
   "options": [
    "$12(3x - 2)^3$",
    "$4(3x - 2)^3$",
    "$12(3x - 2)^4$"
   ],
   "answer": "$12(3x - 2)^3$",
   "hint": "Turunkan bagian luar, lalu kalikan 3.",
   "explain": "$4(3x - 2)^3 \\times 3 = 12(3x - 2)^3$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\frac{dy}{dx} = 12(3x - 2)^3$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Turunkan $y = x\\cos x$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Dengan $u = x$ dan $v = \\cos x$, berapa $v'$?",
   "options": [
    "$-\\sin x$",
    "$\\sin x$",
    "$-\\cos x$"
   ],
   "answer": "$-\\sin x$",
   "hint": "Turunan $\\cos x$ bertanda negatif.",
   "explain": "$v' = -\\sin x$ dan $u' = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasil $\\frac{dy}{dx}$?",
   "options": [
    "$\\cos x - x\\sin x$",
    "$-\\sin x$",
    "$\\cos x + x\\sin x$"
   ],
   "answer": "$\\cos x - x\\sin x$",
   "hint": "$uv' + vu' = x(-\\sin x) + \\cos x \\cdot 1$.",
   "explain": "Aturan perkalian memberi $\\cos x - x\\sin x$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\frac{dy}{dx} = \\cos x - x\\sin x$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Turunkan $y = \\dfrac{e^{2x}}{x + 1}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Pembilang aturan pembagian $vu' - uv'$?",
   "options": [
    "$(x + 1) \\cdot 2e^{2x} - e^{2x}$",
    "$e^{2x} - (x + 1) \\cdot 2e^{2x}$",
    "$(x + 1)e^{2x} - 2e^{2x}$"
   ],
   "answer": "$(x + 1) \\cdot 2e^{2x} - e^{2x}$",
   "hint": "$u = e^{2x}$, $u' = 2e^{2x}$; $v = x + 1$, $v' = 1$.",
   "explain": "$v$ dikali $u'$, dikurangi $u$ dikali $v'$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Bentuk sederhananya?",
   "options": [
    "$\\frac{e^{2x}(2x + 1)}{(x + 1)^2}$",
    "$\\frac{e^{2x}(2x + 3)}{(x + 1)^2}$",
    "$\\frac{2e^{2x}}{x + 1}$"
   ],
   "answer": "$\\frac{e^{2x}(2x + 1)}{(x + 1)^2}$",
   "hint": "Faktorkan $e^{2x}$: $2(x + 1) - 1$.",
   "explain": "$2x + 2 - 1 = 2x + 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek: hitung turunannya di $x = 0$.",
   "answer": "1",
   "hint": "$e^0 = 1$.",
   "explain": "$\\frac{1 \\cdot 1}{1} = 1$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\frac{dy}{dx} = \\frac{e^{2x}(2x + 1)}{(x + 1)^2}$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Tentukan titik stasioner $y = 2x^3 + 3x^2 - 12x$ beserta jenisnya, dan selang tempat $y$ turun.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Faktorkan $y'$.",
   "options": [
    "$6(x + 2)(x - 1)$",
    "$6(x - 2)(x + 1)$",
    "$3(x + 2)(x - 1)$"
   ],
   "answer": "$6(x + 2)(x - 1)$",
   "hint": "$y' = 6x^2 + 6x - 12$. Keluarkan 6.",
   "explain": "$6(x^2 + x - 2) = 6(x + 2)(x - 1)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Berapa $y(-2)$?",
   "answer": "20",
   "hint": "$2(-8) + 3(4) - 12(-2)$.",
   "explain": "$-16 + 12 + 24 = 20$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Berapa $y(1)$?",
   "answer": "-7",
   "hint": "$2 + 3 - 12$.",
   "explain": "$y(1) = -7$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$y'' = 12x + 6$. Jenis titik $(-2, 20)$?",
   "options": [
    "Maksimum",
    "Minimum"
   ],
   "answer": "Maksimum",
   "hint": "Hitung $y''(-2)$ dan lihat tandanya.",
   "explain": "$y''(-2) = -18 < 0$: maksimum. $y''(1) = 18 > 0$: $(1, -7)$ minimum.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Selang tempat $y$ turun?",
   "options": [
    "$-2 < x < 1$",
    "$x < -2$ atau $x > 1$",
    "$x > 1$"
   ],
   "answer": "$-2 < x < 1$",
   "hint": "$y'$ negatif di antara akar-akarnya.",
   "explain": "Turun untuk $-2 < x < 1$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Maksimum $(-2, 20)$, minimum $(1, -7)$; turun untuk $-2 < x < 1$."
}
```
