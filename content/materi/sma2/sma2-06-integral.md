---
id: sma2-06-integral
judul: Integral
jenjang: sma2
moe: "Additional Mathematics 4049 · Calculus · Integration"
prasyarat: [sma2-04-turunan]
durasi_menit: 80
---

## Kenapa belajar ini?

Turunan menjawab "seberapa cepat sesuatu berubah". Integral menjawab kebalikannya: "kalau lajunya diketahui, berapa totalnya?". Dari catatan kecepatan motor, kita bisa menghitung jarak tempuh. Dari rumus kurva, kita bisa menghitung luas lahan yang batasnya melengkung.

## Analogi

Bayangkan sebuah motor ojek yang **odometernya rusak**, tetapi **spidometernya** merekam kecepatan setiap detik.

- Turunan itu seperti membaca spidometer dari catatan jarak: jarak → kecepatan.
- Integral itu kebalikannya: dari catatan kecepatan, kita **menyusun ulang** jarak yang ditempuh.

Caranya, bagi perjalanan menjadi potongan waktu yang sangat pendek. Di tiap potongan, jarak ≈ kecepatan × waktu. Jumlahkan semua potongan. Di grafik kecepatan, setiap potongan adalah **pita tipis** dengan luas = tinggi × lebar. Jadi **jarak = luas di bawah grafik kecepatan**.

Kalau motor **mundur**, kecepatannya negatif dan pitanya berada di bawah sumbu. Pita itu mengurangi posisi akhir, tetapi tetap menambah jarak yang ditempuh. Gagasan ini dipakai lagi saat menghitung luas dan gerak lurus.

```anim
{"type": "grafik", "title": "Grafik kecepatan motor ojek", "xmin": 0, "xmax": 6.5, "ymin": -5, "ymax": 9, "kurva": [{"f": "8-2x", "label": "v = 8 - 2t", "dari": 0, "sampai": 6}], "garis": [{"x": 2}, {"x": 2.25}], "titik": [{"x": 4, "y": 0, "label": "v = 0: berbalik arah"}, {"x": 2, "y": 4, "label": "pita: tinggi v, lebar kecil"}], "langkah": [{"say": "Spidometer merekam kecepatan $v$ setiap saat (sumbu mendatar: waktu $t$).", "kurva": 1}, {"say": "Satu pita tipis: jarak $\\approx v \\times$ lebar waktu, yaitu luas pita.", "kurva": 1, "garis": 2, "titik": 2}, {"say": "Setelah $t = 4$, $v$ negatif: motor mundur, pitanya di bawah sumbu.", "kurva": 1, "garis": 2, "titik": 1}, {"say": "Jumlah semua pita = luas di bawah grafik kecepatan = jarak.", "kurva": 1, "titik": 1}]}
```

## Konsep

### Integral sebagai kebalikan turunan

$F(x)$ disebut **antiturunan** dari $f(x)$ jika $F'(x) = f(x)$. Karena turunan konstanta adalah nol, antiturunan selalu memuat konstanta sembarang $C$:
$$ \int f(x)\,dx = F(x) + C $$

### Rumus dasar

Setiap rumus didapat dengan membalik rumus turunan:

```visual
{"type": "table", "caption": "Setiap rumus integral adalah rumus turunan yang dibalik", "head": ["Turunan", "Integral"], "rows": [["d/dx [xⁿ⁺¹] = (n+1)xⁿ", "∫ xⁿ dx = xⁿ⁺¹/(n+1) + C, n ≠ −1"], ["d/dx [−cos x] = sin x", "∫ sin x dx = −cos x + C"], ["d/dx [sin x] = cos x", "∫ cos x dx = sin x + C"], ["d/dx [tan x] = sec² x", "∫ sec² x dx = tan x + C"], ["d/dx [eˣ] = eˣ", "∫ eˣ dx = eˣ + C"]]}
```

Kasus $n = -1$ dikecualikan karena penyebutnya nol. Integral $\int \frac{1}{x}\,dx$ bernilai $\ln|x| + C$, kebalikan dari turunan $\ln x$.

### Bentuk $(ax + b)$

Dengan aturan rantai, $\dfrac{d}{dx}(ax + b)^{n+1} = a(n+1)(ax + b)^n$. Ada faktor $a$ tambahan, jadi saat membalik kita **membagi dengan $a$**:

```anim
{"type": "persamaan", "title": "Mengapa dibagi a? Contoh (4x + 1)³", "baris": [{"tex": "\\int (4x+1)^3\\,dx = \\ ?", "say": "Pangkat naik satu menjadi 4."}, {"tex": "\\frac{d}{dx}(4x+1)^4 = 4(4x+1)^3 \\cdot 4 = 16(4x+1)^3", "say": "Cek dengan menurunkan: aturan rantai memunculkan faktor $a = 4$."}, {"tex": "\\int (4x+1)^3\\,dx = \\frac{(4x+1)^4}{4 \\times 4} + C", "say": "Jadi bagi dengan pangkat baru dan dengan $a$.", "op": "$\\div a(n+1)$"}, {"tex": "= \\frac{(4x+1)^4}{16} + C", "say": "Turunkan balik: hasilnya tepat $(4x+1)^3$."}]}
```
$$ \int (ax+b)^n\,dx = \frac{(ax+b)^{n+1}}{a(n+1)} + C, \quad n \neq -1 $$
$$ \int \sin(ax+b)\,dx = -\frac{1}{a}\cos(ax+b) + C, \qquad \int \cos(ax+b)\,dx = \frac{1}{a}\sin(ax+b) + C $$
$$ \int \sec^2(ax+b)\,dx = \frac{1}{a}\tan(ax+b) + C, \qquad \int e^{ax+b}\,dx = \frac{1}{a}e^{ax+b} + C $$

### Integral tentu

Jika $F'(x) = f(x)$, maka
$$ \int_a^b f(x)\,dx = \big[F(x)\big]_a^b = F(b) - F(a) $$
Konstanta $C$ saling menghapus, jadi tidak perlu ditulis. Untuk $f(x) \geq 0$, nilai ini sama dengan luas di bawah kurva dari $x = a$ sampai $x = b$.

### Luas di bawah sumbu $x$

Jika kurva berada **di bawah** sumbu $x$, integral tentunya **negatif** (seperti motor mundur). Luas selalu positif, jadi:

1. Cari titik potong kurva dengan sumbu $x$.
2. Integralkan tiap bagian terpisah.
3. Ambil nilai mutlak setiap bagian, lalu jumlahkan.

```anim
{"type": "grafik", "title": "Bagian di atas dan di bawah sumbu x", "xmin": 0, "xmax": 6.6, "ymin": -1.5, "ymax": 1.5, "kurva": [{"f": "sin(x)", "label": "y = \\sin x"}], "titik": [{"x": 1.5708, "y": 1, "label": "luas 2 (integral +2)"}, {"x": 4.7124, "y": -1, "label": "luas 2 (integral −2)"}, {"x": 3.1416, "y": 0, "label": "x = π"}], "langkah": [{"say": "Kurva $y = \\sin x$ dari $0$ sampai $2\\pi$.", "kurva": 1}, {"say": "Titik potong dengan sumbu $x$ di $x = \\pi$.", "kurva": 1, "titik": 3}, {"say": "$\\int_0^{\\pi} \\sin x\\,dx = 2$, tetapi $\\int_{\\pi}^{2\\pi} \\sin x\\,dx = -2$.", "kurva": 1, "titik": 3}, {"say": "Langsung $\\int_0^{2\\pi}$ memberi 0. Luas sebenarnya $|2| + |-2| = 4$.", "kurva": 1, "titik": 3}]}
```

### Perpindahan, kecepatan, percepatan

Untuk benda yang bergerak lurus dengan posisi $s$, kecepatan $v$, dan percepatan $a$:
$$ v = \frac{ds}{dt}, \quad a = \frac{dv}{dt} \qquad\Longleftrightarrow\qquad v = \int a\,dt, \quad s = \int v\,dt $$

- **Perpindahan** dari $t_1$ ke $t_2$: $\displaystyle\int_{t_1}^{t_2} v\,dt$ (boleh negatif).
- **Jarak tempuh**: jumlah nilai mutlak tiap bagian, dipisah di saat $v = 0$ (benda berbalik arah).

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Integral pangkat

```soal
{
 "title": "Contoh 1",
 "text": "Tentukan $\\displaystyle\\int \\left(6x^2 + \\frac{4}{x^3} + 3\\sqrt{x}\\right) dx$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tulis sebagai pangkat.",
   "options": [
    "$6x^2 + 4x^{-3} + 3x^{1/2}$",
    "$6x^2 + 4x^{3} + 3x^{1/2}$",
    "$6x^2 + 4x^{-3} + 3x^{2}$"
   ],
   "answer": "$6x^2 + 4x^{-3} + 3x^{1/2}$",
   "hint": "$\\frac{1}{x^3} = x^{-3}$ dan $\\sqrt{x} = x^{1/2}$.",
   "explain": "Sekarang setiap suku berbentuk $ax^n$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Integralkan suku per suku (naikkan pangkat, bagi dengan pangkat baru).",
   "options": [
    "$2x^3 - 2x^{-2} + 2x^{3/2}$",
    "$2x^3 + 2x^{-2} + 2x^{3/2}$",
    "$2x^3 - 2x^{-4} + 2x^{3/2}$",
    "$12x - 12x^{-4} + \\frac{3}{2}x^{-1/2}$"
   ],
   "answer": "$2x^3 - 2x^{-2} + 2x^{3/2}$",
   "hint": "$4x^{-3} \\to \\frac{4x^{-2}}{-2}$ dan $3x^{1/2} \\to \\frac{3x^{3/2}}{3/2}$.",
   "explain": "Pangkat $-3$ naik menjadi $-2$, dan pembaginya negatif.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Tulis hasil akhirnya.",
   "options": [
    "$2x^3 - \\frac{2}{x^2} + 2x^{3/2} + C$",
    "$2x^3 - \\frac{2}{x^2} + 2x^{3/2}$",
    "$2x^3 - 2x^2 + 2x^{3/2} + C$"
   ],
   "answer": "$2x^3 - \\frac{2}{x^2} + 2x^{3/2} + C$",
   "hint": "Integral tak tentu selalu punya konstanta.",
   "explain": "Jangan lupa $+C$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: turunkan $2x^{3/2}$. Berapa koefisien $x^{1/2}$?",
   "answer": "3",
   "hint": "$2 \\cdot \\frac{3}{2}$.",
   "explain": "Turunannya $3x^{1/2} = 3\\sqrt{x}$, sama dengan suku di soal. Suku lain juga cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Hasilnya $2x^3 - \\frac{2}{x^2} + 2x\\sqrt{x} + C$."
}
```

### Contoh 2: Integral tentu bentuk $(ax + b)$

```soal
{
 "title": "Contoh 2",
 "text": "Hitung $\\displaystyle\\int_0^1 (2x+1)^3\\,dx$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Bentuk $(ax + b)^n$. Berapa $a$?",
   "answer": "2",
   "hint": "Koefisien $x$ di dalam kurung.",
   "explain": "$a = 2$, $b = 1$, $n = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Antiturunannya?",
   "options": [
    "$\\frac{(2x+1)^4}{8}$",
    "$\\frac{(2x+1)^4}{4}$",
    "$\\frac{(2x+1)^4}{2}$"
   ],
   "answer": "$\\frac{(2x+1)^4}{8}$",
   "hint": "Bagi dengan pangkat baru dan dengan $a$.",
   "explain": "$\\frac{(2x+1)^4}{2 \\times 4}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Nilai antiturunan di $x = 1$?",
   "answer": {
    "num": 81,
    "den": 8
   },
   "hint": "$(2 + 1)^4 = 81$.",
   "explain": "$\\frac{81}{8}$. Di $x = 0$: $\\frac{1}{8}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Hasil $\\frac{81}{8} - \\frac{1}{8}$?",
   "answer": "10",
   "hint": "$\\frac{80}{8}$.",
   "explain": "Hasilnya 10.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $(2x+1)^3 = 8x^3 + 12x^2 + 6x + 1$. Integralnya dari 0 sampai 1 adalah $2 + 4 + 3 + 1 = ?$",
   "answer": "10",
   "hint": "Jumlahkan.",
   "explain": "Sama-sama 10. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\int_0^1 (2x+1)^3\\,dx = 10$."
}
```

### Contoh 3: Luas yang sebagian di bawah sumbu $x$

```soal
{
 "title": "Contoh 3",
 "text": "Hitung luas daerah antara kurva $y = x^2 - 2x$ dan sumbu $x$, dari $x = 0$ sampai $x = 3$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Di mana kurva memotong sumbu $x$?",
   "options": [
    "$x = 0$ dan $x = 2$",
    "$x = 0$ dan $x = -2$",
    "$x = 2$ saja"
   ],
   "answer": "$x = 0$ dan $x = 2$",
   "hint": "Faktorkan $x(x - 2) = 0$.",
   "explain": "Di antara 0 dan 2 kurva di bawah sumbu (cek $x = 1$: $y = -1$).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Antiturunannya?",
   "options": [
    "$\\frac{x^3}{3} - x^2$",
    "$x^3 - x^2$",
    "$2x - 2$"
   ],
   "answer": "$\\frac{x^3}{3} - x^2$",
   "hint": "Naikkan pangkat dan bagi.",
   "explain": "$F(x) = \\frac{x^3}{3} - x^2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: $F(2) - F(0) = ?$",
   "options": [
    "$-\\frac{4}{3}$",
    "$\\frac{4}{3}$",
    "$\\frac{8}{3}$"
   ],
   "answer": "$-\\frac{4}{3}$",
   "hint": "$\\frac{8}{3} - 4$.",
   "explain": "Negatif karena di bawah sumbu. Luas bagian ini $\\frac{4}{3}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Luas bagian atas, $F(3) - F(2)$?",
   "answer": {
    "num": 4,
    "den": 3
   },
   "hint": "$F(3) = 9 - 9 = 0$.",
   "explain": "$0 - \\left(-\\frac{4}{3}\\right) = \\frac{4}{3}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 5: Luas total?",
   "answer": {
    "num": 8,
    "den": 3
   },
   "hint": "Jumlahkan nilai mutlak kedua bagian.",
   "explain": "$\\frac{4}{3} + \\frac{4}{3} = \\frac{8}{3}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: kalau langsung $\\int_0^3$, berapa hasilnya?",
   "answer": "0",
   "hint": "$F(3) - F(0)$.",
   "explain": "Hasilnya 0, padahal daerahnya ada. Jadi memang harus dipisah.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Luas $= \\frac{8}{3}$ satuan luas."
}
```

### Contoh 4: Gerak motor yang berbalik arah

```soal
{
 "title": "Contoh 4",
 "text": "Putu mengendarai motor di jalan lurus dengan percepatan $a = 2t - 6$ m/s² dan kecepatan awal $8$ m/s. Tentukan (a) $v$ sebagai fungsi $t$, (b) perpindahan, dan (c) jarak tempuh selama 5 detik pertama.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Integralkan $a$ dan pakai $v(0) = 8$.",
   "options": [
    "$v = t^2 - 6t + 8$",
    "$v = t^2 - 6t$",
    "$v = 2t^2 - 6t + 8$"
   ],
   "answer": "$v = t^2 - 6t + 8$",
   "hint": "$\\int (2t - 6)\\,dt = t^2 - 6t + C$, lalu cari $C$.",
   "explain": "Saat $t = 0$, $v = C = 8$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Kapan motor berbalik arah ($v = 0$)?",
   "options": [
    "$t = 2$ dan $t = 4$",
    "$t = 3$",
    "$t = -2$ dan $t = -4$"
   ],
   "answer": "$t = 2$ dan $t = 4$",
   "hint": "Faktorkan $t^2 - 6t + 8$.",
   "explain": "$(t - 2)(t - 4) = 0$. Di antaranya $v < 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Dengan $S(t) = \\frac{t^3}{3} - 3t^2 + 8t$, berapa $S(2)$?",
   "answer": {
    "num": 20,
    "den": 3
   },
   "hint": "$\\frac{8}{3} - 12 + 16$.",
   "explain": "$S(2) = \\frac{20}{3}$. Juga $S(4) = \\frac{16}{3}$ dan $S(5) = \\frac{20}{3}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Perpindahan $S(5) - S(0)$?",
   "answer": {
    "num": 20,
    "den": 3
   },
   "hint": "$S(0) = 0$.",
   "explain": "Perpindahan $\\frac{20}{3} \\approx 6{,}67$ m.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 5: Jarak tempuh (jumlah nilai mutlak tiap bagian)?",
   "answer": {
    "num": 28,
    "den": 3
   },
   "hint": "$\\frac{20}{3} + \\left|\\frac{16}{3} - \\frac{20}{3}\\right| + \\left(\\frac{20}{3} - \\frac{16}{3}\\right)$.",
   "explain": "$\\frac{20}{3} + \\frac{4}{3} + \\frac{4}{3} = \\frac{28}{3}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: tulis jarak tempuh dalam desimal, bulatkan ke 2 desimal.",
   "answer": "9,33",
   "hint": "$28 \\div 3$.",
   "explain": "$\\approx 9{,}33$ m, lebih besar dari perpindahan karena motor sempat mundur.",
   "error": "salah-pembulatan",
   "suffix": "m"
  }
 ],
 "conclusion": "(a) $v = t^2 - 6t + 8$; (b) perpindahan $\\frac{20}{3}$ m; (c) jarak $\\frac{28}{3}$ m."
}
```

## Kesalahan yang sering terjadi

- **Lupa $+C$.** Integral tak tentu selalu punya konstanta. Tanpa $C$, kamu tidak bisa memakai syarat awal seperti $v(0) = 8$.
- **Tidak membagi dengan $a$.** Menulis $\int (2x+1)^3\,dx = \dfrac{(2x+1)^4}{4}$. Turunkan balik dan kamu mendapat $2(2x+1)^3$, dua kali lipat. Yang benar dibagi $2 \times 4 = 8$.
- **Salah tanda pada sin.** $\int \sin x\,dx = -\cos x + C$, bukan $\cos x$. Cek dengan menurunkan: $\dfrac{d}{dx}(-\cos x) = \sin x$.
- **Langsung mengintegralkan untuk luas.** Seperti Contoh 3, bagian di bawah sumbu memberi nilai negatif. Pisahkan di titik potong.
- **Menyamakan jarak dengan perpindahan.** Saat benda berbalik arah, jarak = jumlah nilai mutlak tiap bagian.

## Ringkasan

- $\displaystyle\int x^n\,dx = \frac{x^{n+1}}{n+1} + C$ untuk $n \neq -1$. Selalu cek dengan menurunkan hasilnya.
- Untuk bentuk $(ax+b)$, integralkan seperti biasa lalu **bagi dengan $a$**.
- $\int \sin x\,dx = -\cos x + C$, $\int \cos x\,dx = \sin x + C$, $\int \sec^2 x\,dx = \tan x + C$, $\int e^x\,dx = e^x + C$.
- $\displaystyle\int_a^b f(x)\,dx = F(b) - F(a)$. Untuk luas, pisahkan bagian di bawah sumbu $x$ dan ambil nilai mutlaknya.
- $v = \int a\,dt$, $s = \int v\,dt$. Jarak tempuh dipisah di saat $v = 0$.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tentukan $\\displaystyle\\int (4x^3 - 6x + 5)\\,dx$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Integral $4x^3$?",
   "options": [
    "$x^4$",
    "$12x^2$",
    "$4x^4$"
   ],
   "answer": "$x^4$",
   "hint": "$\\frac{4x^4}{4}$.",
   "explain": "$x^4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasil lengkapnya?",
   "options": [
    "$x^4 - 3x^2 + 5x + C$",
    "$x^4 - 6x^2 + 5x + C$",
    "$x^4 - 3x^2 + 5 + C$",
    "$x^4 - 3x^2 + 5x$"
   ],
   "answer": "$x^4 - 3x^2 + 5x + C$",
   "hint": "Integralkan suku per suku; konstanta 5 menjadi $5x$.",
   "explain": "$-6x \\to -3x^2$, $5 \\to 5x$, dan $+C$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x^4 - 3x^2 + 5x + C$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Tentukan $\\displaystyle\\int (3x - 2)^5\\,dx$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Pangkat baru setelah diintegralkan?",
   "answer": "6",
   "hint": "Naikkan satu.",
   "explain": "Pangkat menjadi 6.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasilnya?",
   "options": [
    "$\\frac{(3x-2)^6}{18} + C$",
    "$\\frac{(3x-2)^6}{6} + C$",
    "$\\frac{(3x-2)^6}{3} + C$"
   ],
   "answer": "$\\frac{(3x-2)^6}{18} + C$",
   "hint": "Bagi dengan pangkat baru dan dengan $a = 3$.",
   "explain": "$3 \\times 6 = 18$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\frac{(3x-2)^6}{18} + C$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung $\\displaystyle\\int_0^{\\pi/4} (\\sec^2 x + 2\\cos 2x)\\,dx$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Antiturunannya?",
   "options": [
    "$\\tan x + \\sin 2x$",
    "$\\tan x + 4\\sin 2x$",
    "$\\tan x - \\sin 2x$"
   ],
   "answer": "$\\tan x + \\sin 2x$",
   "hint": "$\\int 2\\cos 2x\\,dx = 2 \\cdot \\frac{1}{2}\\sin 2x$.",
   "explain": "Bagi dengan $a = 2$, sehingga koefisiennya 1.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Nilai integralnya?",
   "answer": "2",
   "hint": "Di $\\frac{\\pi}{4}$: $\\tan\\frac{\\pi}{4} + \\sin\\frac{\\pi}{2}$. Di 0: 0.",
   "explain": "$1 + 1 - 0 = 2$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Hasilnya 2."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Hitung luas daerah antara $y = x^2 - 4$ dan sumbu $x$ dari $x = 0$ sampai $x = 3$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Di $x$ positif berapa kurva memotong sumbu $x$?",
   "answer": "2",
   "hint": "$x^2 - 4 = 0$.",
   "explain": "$x = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Luas bagian dari 0 sampai 2 (nilai mutlak integralnya)?",
   "answer": {
    "num": 16,
    "den": 3
   },
   "hint": "$\\left[\\frac{x^3}{3} - 4x\\right]_0^2 = \\frac{8}{3} - 8$.",
   "explain": "Integralnya $-\\frac{16}{3}$, luasnya $\\frac{16}{3}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Luas bagian dari 2 sampai 3?",
   "answer": {
    "num": 7,
    "den": 3
   },
   "hint": "$(9 - 12) - \\left(\\frac{8}{3} - 8\\right)$.",
   "explain": "$-3 + \\frac{16}{3} = \\frac{7}{3}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Luas total?",
   "answer": {
    "num": 23,
    "den": 3
   },
   "hint": "Jumlahkan kedua luas.",
   "explain": "$\\frac{16}{3} + \\frac{7}{3} = \\frac{23}{3}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  }
 ],
 "conclusion": "Luas $= \\frac{23}{3}$ satuan luas."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Sebuah bola menggelinding di lantai lurus dengan kecepatan $v = 6 - 2t$ m/s. Tentukan perpindahan dan jarak tempuhnya selama 5 detik pertama.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Kapan bola berbalik arah?",
   "answer": "3",
   "hint": "$v = 0$.",
   "explain": "$6 - 2t = 0$, jadi $t = 3$.",
   "error": "salah-langkah-materi",
   "suffix": "s"
  },
  {
   "kind": "number",
   "prompt": "Dengan $s = 6t - t^2$, berapa $s(3)$?",
   "answer": "9",
   "hint": "$18 - 9$.",
   "explain": "$s(3) = 9$ m.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Perpindahan selama 5 detik, $s(5) - s(0)$?",
   "answer": "5",
   "hint": "$30 - 25$.",
   "explain": "Perpindahan 5 m.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Jarak tempuh?",
   "answer": "13",
   "hint": "Maju 9 m, lalu mundur dari 9 ke 5.",
   "explain": "$9 + 4 = 13$ m.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  }
 ],
 "conclusion": "Perpindahan 5 m, jarak tempuh 13 m."
}
```
