---
id: sma1-08-polinomial-pecahan-parsial
judul: Polinomial dan Pecahan Parsial
jenjang: sma1
moe: "Additional Mathematics · A4 Polynomials and partial fractions"
prasyarat: [smp2-02-ekspansi-faktorisasi, smp2-03-pecahan-aljabar-rumus, smp3-02-persamaan-kuadrat-lanjut]
durasi_menit: 75
---

## Kenapa belajar ini?

Volume kotak, lintasan roller coaster, dan desain kurva jalan sering dimodelkan dengan polinomial. Untuk menyelesaikan persamaannya, kita perlu memfaktorkan polinomial berderajat tiga atau lebih. Pecahan parsial dipakai nanti di kalkulus untuk mengintegralkan pecahan aljabar.

## Analogi

Polinomial berperilaku seperti **bilangan bulat**.

- Bilangan bulat bisa dibagi dengan sisa: $17 = 5 \times 3 + 2$. Polinomial juga.

```anim
{"type": "porogapit", "a": 17, "b": 5, "title": "17 ÷ 5 = 3 sisa 2, polinomial juga dibagi seperti ini"}
```
- Bilangan bulat punya faktor: 3 adalah faktor 12 karena sisanya 0. Polinomial juga.
- Pecahan bisa dijumlahkan: $\frac{1}{2} + \frac{1}{3} = \frac{5}{6}$. Pecahan parsial adalah kebalikannya: membongkar $\frac{5}{6}$ kembali menjadi $\frac{1}{2} + \frac{1}{3}$.

Setiap kali bingung, tanyakan: "Bagaimana kalau ini bilangan biasa?"

## Konsep

### Polinomial, perkalian, dan pembagian

Polinomial dalam $x$ berbentuk $a_n x^n + \dots + a_1 x + a_0$ dengan $n$ bilangan cacah. **Derajat** adalah pangkat tertinggi. Perkalian polinomial memakai sifat distributif: kalikan setiap suku dengan setiap suku.

Pembagian polinomial $P(x)$ oleh $D(x)$ selalu menghasilkan **hasil bagi** $Q(x)$ dan **sisa** $R(x)$:

$$
P(x) = D(x)\,Q(x) + R(x), \qquad \text{derajat } R < \text{derajat } D
$$

Ini persis seperti $17 = 5 \times 3 + 2$ dengan sisa $2 < 3$. Jika pembaginya linear, sisanya konstanta.

```anim
{"type": "persamaan", "title": "Membagi x³ + 2x² − x + 3 dengan (x − 1)", "baris": [{"tex": "x^3 + 2x^2 - x + 3", "say": "Bagi suku terdepan: $x^3 \\div x = x^2$."}, {"tex": "- x^2(x - 1) \\Rightarrow 3x^2 - x + 3", "say": "Kurangkan $x^3 - x^2$. Tersisa $3x^2 - x + 3$.", "op": "hasil $x^2$"}, {"tex": "- 3x(x - 1) \\Rightarrow 2x + 3", "say": "$3x^2 \\div x = 3x$. Kurangkan $3x^2 - 3x$. Tersisa $2x + 3$.", "op": "hasil $3x$"}, {"tex": "- 2(x - 1) \\Rightarrow 5", "say": "$2x \\div x = 2$. Kurangkan $2x - 2$. Tersisa 5, berderajat 0: berhenti.", "op": "hasil $2$"}, {"tex": "x^3 + 2x^2 - x + 3 = (x - 1)(x^2 + 3x + 2) + 5", "say": "Hasil bagi $x^2 + 3x + 2$, sisa 5. Seperti $17 = 5 \\times 3 + 2$."}]}
```

### Teorema sisa

**Teorema.** Sisa pembagian $P(x)$ oleh $(x - a)$ adalah $P(a)$.

**Bukti.** Karena pembagi berderajat 1, sisanya konstanta $R$:

$$
P(x) = (x - a)\,Q(x) + R
$$

Substitusikan $x = a$. Faktor $(x - a)$ menjadi nol, sehingga $P(a) = 0 \cdot Q(a) + R = R$. Terbukti.

Dengan cara sama, sisa pembagian oleh $(ax - b)$ adalah $P\!\left(\frac{b}{a}\right)$.

```anim
{"type": "grafik", "title": "Sisa = nilai P(a), faktor = titik potong", "xmin": -3.5, "xmax": 4.5, "ymin": -12, "ymax": 12, "kurva": [{"f": "x^3-2x^2-5x+6", "label": "P(x) = x^3 - 2x^2 - 5x + 6"}], "titik": [{"x": 2, "y": -4, "label": "P(2) = -4"}, {"x": -2, "y": 0, "label": "-2"}, {"x": 1, "y": 0, "label": "1"}, {"x": 3, "y": 0, "label": "3"}], "langkah": [{"say": "Grafik polinomial pangkat tiga $P(x)$.", "kurva": 1, "titik": 0}, {"say": "Sisa pembagian $P(x)$ oleh $(x - 2)$ adalah tinggi grafik di $x = 2$, yaitu $P(2) = -4$.", "kurva": 1, "titik": 1}, {"say": "Di $x = -2, 1, 3$ grafik memotong sumbu $x$: $P(a) = 0$, jadi $(x + 2)$, $(x - 1)$, $(x - 3)$ adalah faktor.", "kurva": 1, "titik": 4}]}
```

### Teorema faktor

$(x - a)$ adalah faktor $P(x)$ jika dan hanya jika $P(a) = 0$. Ini teorema sisa dengan sisa nol, sama seperti 3 faktor 12 karena $12 \div 3$ bersisa 0.

### Persamaan pangkat tiga

Untuk $P(x) = 0$ dengan $P$ berderajat 3 (koefisien bulat):

1. Coba nilai $x$ dari faktor-faktor konstanta (dibagi faktor koefisien utama), sampai $P(a) = 0$.
2. Bagi $P(x)$ dengan $(x - a)$ untuk mendapat faktor kuadrat.
3. Selesaikan faktor kuadrat itu (faktorkan atau rumus abc).

```anim
{"type": "persamaan", "title": "Menyelesaikan x³ − 2x² − 5x + 6 = 0", "baris": [{"tex": "P(1) = 1 - 2 - 5 + 6 = 0", "say": "Coba faktor dari 6: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$. Ternyata $P(1) = 0$."}, {"tex": "P(x) = (x - 1)(x^2 - x - 6)", "say": "Bagi $P(x)$ dengan $(x - 1)$ untuk mendapat faktor kuadrat.", "op": "bagi $(x - 1)$"}, {"tex": "P(x) = (x - 1)(x - 3)(x + 2)", "say": "Faktorkan bagian kuadratnya.", "op": "faktorkan"}, {"tex": "x = 1,\\ x = 3,\\ x = -2", "say": "Tiga akar, sama dengan titik potong grafik tadi."}]}
```

### Jumlah dan selisih pangkat tiga

$$
a^3 + b^3 = (a + b)(a^2 - ab + b^2), \qquad a^3 - b^3 = (a - b)(a^2 + ab + b^2)
$$

Cek dengan ekspansi: $(a - b)(a^2 + ab + b^2) = a^3 + a^2b + ab^2 - a^2b - ab^2 - b^3 = a^3 - b^3$. Contoh: $8x^3 - 27 = (2x)^3 - 3^3 = (2x - 3)(4x^2 + 6x + 9)$.

### Pecahan parsial

Pecahan aljabar **sejati** (derajat pembilang < derajat penyebut) bisa dibongkar sesuai bentuk penyebutnya:

$$
\frac{px + q}{(ax + b)(cx + d)} = \frac{A}{ax + b} + \frac{B}{cx + d}
$$

$$
\frac{px^2 + qx + r}{(ax + b)(cx + d)^2} = \frac{A}{ax + b} + \frac{B}{cx + d} + \frac{C}{(cx + d)^2}
$$

$$
\frac{px^2 + qx + r}{(ax + b)(x^2 + c^2)} = \frac{A}{ax + b} + \frac{Bx + C}{x^2 + c^2}
$$

Cara mencari konstanta: kalikan kedua ruas dengan penyebut, lalu substitusi nilai $x$ yang membuat faktor nol, dan bandingkan koefisien bila perlu.

```anim
{"type": "persamaan", "title": "Membongkar (x + 5)/((x − 1)(x + 2))", "baris": [{"tex": "\\frac{x + 5}{(x - 1)(x + 2)} = \\frac{A}{x - 1} + \\frac{B}{x + 2}", "say": "Dua faktor linear berbeda, jadi dua suku."}, {"tex": "x + 5 = A(x + 2) + B(x - 1)", "say": "Kalikan kedua ruas dengan penyebut.", "op": "× penyebut"}, {"tex": "x = 1:\\ 6 = 3A \\Rightarrow A = 2", "say": "Pilih $x = 1$ supaya suku $B$ hilang.", "op": "$x = 1$"}, {"tex": "x = -2:\\ 3 = -3B \\Rightarrow B = -1", "say": "Pilih $x = -2$ supaya suku $A$ hilang.", "op": "$x = -2$"}, {"tex": "\\frac{2}{x - 1} - \\frac{1}{x + 2}", "say": "Seperti membongkar $\\frac{5}{6}$ menjadi $\\frac{1}{2} + \\frac{1}{3}$."}]}
```

Jika pecahannya **tidak sejati** (derajat pembilang $\ge$ derajat penyebut), lakukan pembagian dulu, sama seperti $\frac{17}{5} = 3 + \frac{2}{5}$.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Pembagian bersusun polinomial

```soal
{
 "title": "Contoh 1",
 "text": "Bagilah $2x^3 - 3x^2 + 4x - 5$ dengan $(x - 2)$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Suku pertama hasil bagi: $2x^3 \\div x$ = ...",
   "options": [
    "$2x^2$",
    "$2x^3$",
    "$x^2$"
   ],
   "answer": "$2x^2$",
   "hint": "Bagi koefisien dan kurangi pangkat satu.",
   "explain": "$2x^2$. Kalikan: $2x^2(x - 2) = 2x^3 - 4x^2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Kurangkan: $(2x^3 - 3x^2) - (2x^3 - 4x^2)$ = ...",
   "options": [
    "$x^2$",
    "$-7x^2$",
    "$-x^2$"
   ],
   "answer": "$x^2$",
   "hint": "$-3x^2 - (-4x^2)$.",
   "explain": "$-3x^2 + 4x^2 = x^2$. Turunkan $+4x$: $x^2 + 4x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Suku berikutnya: $x^2 \\div x$ = ...",
   "options": [
    "$x$",
    "$x^2$",
    "$1$"
   ],
   "answer": "$x$",
   "hint": "Pangkat turun satu.",
   "explain": "$x$. Kalikan: $x(x - 2) = x^2 - 2x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Kurangkan: $(x^2 + 4x) - (x^2 - 2x)$ = ...",
   "options": [
    "$6x$",
    "$2x$",
    "$-6x$"
   ],
   "answer": "$6x$",
   "hint": "$4x - (-2x)$.",
   "explain": "$6x$. Turunkan $-5$: $6x - 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Suku terakhir hasil bagi: $6x \\div x$ = ?",
   "answer": "6",
   "hint": "Bagi koefisiennya.",
   "explain": "6. Kalikan: $6(x - 2) = 6x - 12$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Kurangkan: $(6x - 5) - (6x - 12)$ = ?",
   "answer": "7",
   "hint": "$-5 - (-12)$.",
   "explain": "$-5 + 12 = 7$. Sisa berderajat 0: berhenti.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban dengan teorema sisa: $P(2) = 16 - 12 + 8 - 5$ = ?",
   "answer": "7",
   "hint": "Substitusikan $x = 2$.",
   "explain": "$P(2) = 7$, sama dengan sisa. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Hasil bagi $2x^2 + x + 6$, sisa 7."
}
```

### Contoh 2: Mencari koefisien yang hilang

```soal
{
 "title": "Contoh 2",
 "text": "$P(x) = x^3 + ax^2 + bx - 6$. Diketahui $(x - 1)$ faktor $P(x)$, dan sisa pembagian $P(x)$ oleh $(x + 1)$ adalah $-8$. Tentukan $a$ dan $b$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: $P(1) = 0$ memberi ...",
   "options": [
    "$a + b = 5$",
    "$a + b = -5$",
    "$a - b = 5$"
   ],
   "answer": "$a + b = 5$",
   "hint": "$1 + a + b - 6 = 0$.",
   "explain": "$a + b = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: $P(-1) = -8$ memberi ...",
   "options": [
    "$a - b = -1$",
    "$a + b = -1$",
    "$a - b = 1$"
   ],
   "answer": "$a - b = -1$",
   "hint": "$(-1)^3 + a(-1)^2 + b(-1) - 6 = -8$.",
   "explain": "$-1 + a - b - 6 = -8$, jadi $a - b = -1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Jumlahkan kedua persamaan. $a$ = ?",
   "answer": "2",
   "hint": "$2a = 5 + (-1)$.",
   "explain": "$2a = 4$, $a = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$b$ = ?",
   "answer": "3",
   "hint": "$a + b = 5$.",
   "explain": "$b = 5 - 2 = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $P(-1) = -1 + 2 - 3 - 6$ = ?",
   "answer": "-8",
   "hint": "Hitung dengan $a = 2$, $b = 3$.",
   "explain": "$-8$. Cocok, dan $P(1) = 1 + 2 + 3 - 6 = 0$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$a = 2$ dan $b = 3$."
}
```

### Contoh 3: Soal cerita, kotak kayu Pak Budi

```soal
{
 "title": "Contoh 3",
 "text": "Pak Budi membuat kotak kayu berbentuk balok. Lebarnya 1 dm lebih panjang dari tingginya, dan panjangnya 2 dm lebih panjang dari tingginya. Volumenya 60 dm³. Tentukan ukuran kotak.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Misalkan tinggi $x$ dm. Persamaannya ...",
   "options": [
    "$x^3 + 3x^2 + 2x - 60 = 0$",
    "$x^3 + 3x - 60 = 0$",
    "$3x + 3 = 60$"
   ],
   "answer": "$x^3 + 3x^2 + 2x - 60 = 0$",
   "hint": "Volume $= x(x + 1)(x + 2)$.",
   "explain": "$x(x^2 + 3x + 2) = 60$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Coba faktor dari 60. $P(3) = 27 + 27 + 6 - 60$ = ?",
   "answer": "0",
   "hint": "Hitung tiap suku.",
   "explain": "$P(3) = 0$, jadi $(x - 3)$ faktor.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Bagi dengan $(x - 3)$. Faktor kuadratnya ...",
   "options": [
    "$x^2 + 6x + 20$",
    "$x^2 + 6x - 20$",
    "$x^2 - 6x + 20$"
   ],
   "answer": "$x^2 + 6x + 20$",
   "hint": "Pembagian sintetis: 1, 3, 2, −60 dengan 3.",
   "explain": "$P(x) = (x - 3)(x^2 + 6x + 20)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Diskriminan $x^2 + 6x + 20$ = ?",
   "answer": "-44",
   "hint": "$36 - 80$.",
   "explain": "$D = -44 < 0$: tidak ada akar real lain. Jadi $x = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Lebar kotak = ?",
   "answer": "4",
   "hint": "Tinggi + 1.",
   "explain": "4 dm.",
   "error": "salah-langkah-materi",
   "suffix": "dm"
  },
  {
   "kind": "number",
   "prompt": "Panjang kotak = ?",
   "answer": "5",
   "hint": "Tinggi + 2.",
   "explain": "5 dm.",
   "error": "salah-langkah-materi",
   "suffix": "dm"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: volume $3 \\times 4 \\times 5$ = ?",
   "answer": "60",
   "hint": "Kalikan ketiganya.",
   "explain": "60 dm³. Cocok.",
   "error": "salah-langkah-materi",
   "suffix": "dm³"
  }
 ],
 "conclusion": "Tinggi 3 dm, lebar 4 dm, panjang 5 dm.",
 "visual": {
  "type": "solid",
  "solid": "balok"
 }
}
```

### Contoh 4: Pecahan parsial, faktor linear berbeda

```soal
{
 "title": "Contoh 4",
 "text": "Nyatakan $\\dfrac{5x + 1}{(x - 1)(x + 2)}$ dalam pecahan parsial.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Bentuk pecahan parsialnya ...",
   "options": [
    "$\\dfrac{A}{x - 1} + \\dfrac{B}{x + 2}$",
    "$\\dfrac{A}{(x - 1)(x + 2)}$",
    "$\\dfrac{Ax + B}{x - 1}$"
   ],
   "answer": "$\\dfrac{A}{x - 1} + \\dfrac{B}{x + 2}$",
   "hint": "Satu suku untuk setiap faktor linear.",
   "explain": "Dua faktor linear berbeda, dua suku.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Kalikan dengan penyebut.",
   "options": [
    "$5x + 1 = A(x + 2) + B(x - 1)$",
    "$5x + 1 = A(x - 1) + B(x + 2)$",
    "$5x + 1 = AB$"
   ],
   "answer": "$5x + 1 = A(x + 2) + B(x - 1)$",
   "hint": "$A$ kehilangan penyebut $(x - 1)$, jadi tinggal dikali $(x + 2)$.",
   "explain": "Setiap konstanta dikali faktor yang bukan penyebutnya.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Substitusi $x = 1$: $6 = 3A$. $A$ = ?",
   "answer": "2",
   "hint": "Bagi 6 dengan 3.",
   "explain": "$A = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Substitusi $x = -2$: $-9 = -3B$. $B$ = ?",
   "answer": "3",
   "hint": "Bagi $-9$ dengan $-3$.",
   "explain": "$B = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: $2(x + 2) + 3(x - 1)$ = ...",
   "options": [
    "$5x + 1$",
    "$5x + 7$",
    "$5x - 1$"
   ],
   "answer": "$5x + 1$",
   "hint": "Ekspansi lalu jumlahkan.",
   "explain": "$2x + 4 + 3x - 3 = 5x + 1$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\dfrac{5x + 1}{(x - 1)(x + 2)} = \\dfrac{2}{x - 1} + \\dfrac{3}{x + 2}$."
}
```

### Contoh 5: Pecahan parsial, faktor berulang

```soal
{
 "title": "Contoh 5",
 "text": "Nyatakan $\\dfrac{3x^2 + x + 2}{(x + 1)(x - 1)^2}$ dalam pecahan parsial.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Bentuknya ...",
   "options": [
    "$\\dfrac{A}{x + 1} + \\dfrac{B}{x - 1} + \\dfrac{C}{(x - 1)^2}$",
    "$\\dfrac{A}{x + 1} + \\dfrac{C}{(x - 1)^2}$",
    "$\\dfrac{A}{x + 1} + \\dfrac{Bx + C}{(x - 1)^2}$"
   ],
   "answer": "$\\dfrac{A}{x + 1} + \\dfrac{B}{x - 1} + \\dfrac{C}{(x - 1)^2}$",
   "hint": "Faktor berulang butuh dua suku.",
   "explain": "$(x - 1)^2$ memberi suku $\\frac{B}{x - 1}$ dan $\\frac{C}{(x - 1)^2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2–3: $3x^2 + x + 2 = A(x - 1)^2 + B(x + 1)(x - 1) + C(x + 1)$. Substitusi $x = 1$: $6 = 2C$. $C$ = ?",
   "answer": "3",
   "hint": "Suku $A$ dan $B$ menjadi nol.",
   "explain": "$C = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Substitusi $x = -1$: $4 = 4A$. $A$ = ?",
   "answer": "1",
   "hint": "Suku $B$ dan $C$ menjadi nol.",
   "explain": "$A = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Koefisien $x^2$: $3 = A + B$. $B$ = ?",
   "answer": "2",
   "hint": "$A = 1$.",
   "explain": "$B = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: substitusi $x = 0$ ke ruas kanan, $A - B + C$ = ?",
   "answer": "2",
   "hint": "$1 - 2 + 3$.",
   "explain": "2, sama dengan ruas kiri saat $x = 0$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\dfrac{1}{x + 1} + \\dfrac{2}{x - 1} + \\dfrac{3}{(x - 1)^2}$."
}
```

## Kesalahan yang sering terjadi

- **Lupa suku nol saat membagi.** Untuk $x^3 - 4$, tulis $x^3 + 0x^2 + 0x - 4$ supaya kolom tidak bergeser.
- **Salah tanda pada teorema sisa.** Pembagi $(x + 1)$ berarti $a = -1$, jadi hitung $P(-1)$, bukan $P(1)$.
- **Salah tanda pada selisih pangkat tiga.** Menulis $a^3 - b^3 = (a - b)(a^2 - ab + b^2)$. Suku tengah di kurung kedua bertanda **berlawanan** dengan kurung pertama: $(a - b)(a^2 + ab + b^2)$.
- **Bentuk parsial kurang lengkap.** Untuk $(x - 1)^2$ hanya menulis $\frac{C}{(x - 1)^2}$. Perlu juga $\frac{B}{x - 1}$. Untuk $x^2 + c^2$, pembilangnya $Bx + C$, bukan hanya konstanta.
- **Langsung membongkar pecahan tak sejati.** Jika derajat pembilang tidak lebih kecil, bagi dulu.

## Ringkasan

- $P(x) = D(x)Q(x) + R(x)$ dengan derajat $R$ < derajat $D$.
- Teorema sisa: sisa $P(x) \div (x - a)$ adalah $P(a)$. Teorema faktor: $(x - a)$ faktor jika $P(a) = 0$.
- Persamaan pangkat tiga: tebak satu akar, bagi, selesaikan faktor kuadratnya.
- $a^3 \pm b^3 = (a \pm b)(a^2 \mp ab + b^2)$.
- Pecahan parsial: bentuk mengikuti penyebut (linear, berulang, kuadrat $x^2 + c^2$); cari konstanta dengan substitusi dan membandingkan koefisien.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tentukan sisa pembagian $x^3 - 4x^2 + x + 5$ oleh $(x - 3)$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Menurut teorema sisa, hitung ...",
   "options": [
    "$P(3)$",
    "$P(-3)$",
    "$P(0)$"
   ],
   "answer": "$P(3)$",
   "hint": "Pembagi $(x - a)$ dengan $a = 3$.",
   "explain": "Sisa $= P(3)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$P(3) = 27 - 36 + 3 + 5$ = ?",
   "answer": "-1",
   "hint": "Hitung pelan-pelan.",
   "explain": "$-1$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Sisanya $-1$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Tunjukkan bahwa $(x + 2)$ faktor dari $x^3 + 3x^2 - 4$, lalu faktorkan sepenuhnya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$P(-2) = -8 + 12 - 4$ = ?",
   "answer": "0",
   "hint": "Ingat suku $0x$.",
   "explain": "$P(-2) = 0$, jadi $(x + 2)$ faktor.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasil bagi $x^3 + 3x^2 + 0x - 4$ oleh $(x + 2)$ ...",
   "options": [
    "$x^2 + x - 2$",
    "$x^2 + 5x + 10$",
    "$x^2 + x + 2$"
   ],
   "answer": "$x^2 + x - 2$",
   "hint": "Pembagian sintetis dengan $-2$: 1, 3, 0, −4.",
   "explain": "1, 1, −2, sisa 0.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Faktorisasi lengkap ...",
   "options": [
    "$(x + 2)^2(x - 1)$",
    "$(x + 2)(x - 1)(x - 2)$",
    "$(x + 2)(x + 1)(x - 2)$"
   ],
   "answer": "$(x + 2)^2(x - 1)$",
   "hint": "Faktorkan $x^2 + x - 2$.",
   "explain": "$x^2 + x - 2 = (x + 2)(x - 1)$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x^3 + 3x^2 - 4 = (x + 2)^2(x - 1)$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Selesaikan $2x^3 + x^2 - 13x + 6 = 0$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Coba $x = 2$: $16 + 4 - 26 + 6$ = ?",
   "answer": "0",
   "hint": "Hitung tiap suku.",
   "explain": "$P(2) = 0$, jadi $(x - 2)$ faktor.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasil baginya ...",
   "options": [
    "$2x^2 + 5x - 3$",
    "$2x^2 - 3x + 5$",
    "$2x^2 + 5x + 3$"
   ],
   "answer": "$2x^2 + 5x - 3$",
   "hint": "Pembagian sintetis dengan 2: 2, 1, −13, 6.",
   "explain": "2, 5, −3, sisa 0.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Semua penyelesaiannya ...",
   "options": [
    "$x = 2$, $x = \\frac{1}{2}$, $x = -3$",
    "$x = 2$, $x = -\\frac{1}{2}$, $x = 3$",
    "$x = 2$ saja"
   ],
   "answer": "$x = 2$, $x = \\frac{1}{2}$, $x = -3$",
   "hint": "Faktorkan $2x^2 + 5x - 3$.",
   "explain": "$(2x - 1)(x + 3) = 0$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x = 2$, $x = \\frac{1}{2}$, atau $x = -3$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Faktorkan $27x^3 + 1$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Tulis sebagai jumlah pangkat tiga.",
   "options": [
    "$(3x)^3 + 1^3$",
    "$(9x)^3 + 1^3$",
    "$(3x)^3 - 1^3$"
   ],
   "answer": "$(3x)^3 + 1^3$",
   "hint": "$3^3 = 27$.",
   "explain": "$a = 3x$, $b = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Faktorisasinya ...",
   "options": [
    "$(3x + 1)(9x^2 - 3x + 1)$",
    "$(3x + 1)(9x^2 + 3x + 1)$",
    "$(3x - 1)(9x^2 + 3x + 1)$"
   ],
   "answer": "$(3x + 1)(9x^2 - 3x + 1)$",
   "hint": "$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$.",
   "explain": "Suku tengah kurung kedua bertanda berlawanan: $-3x$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$27x^3 + 1 = (3x + 1)(9x^2 - 3x + 1)$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Nyatakan $\\dfrac{3x^2 - 5x + 8}{(x - 2)(x^2 + 1)}$ dalam pecahan parsial.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$3x^2 - 5x + 8 = A(x^2 + 1) + (Bx + C)(x - 2)$. Substitusi $x = 2$: $10 = 5A$. $A$ = ?",
   "answer": "2",
   "hint": "Suku kedua menjadi nol.",
   "explain": "$A = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Koefisien $x^2$: $3 = A + B$. $B$ = ?",
   "answer": "1",
   "hint": "$A = 2$.",
   "explain": "$B = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Konstanta: $8 = A - 2C$. $C$ = ?",
   "answer": "-3",
   "hint": "$8 = 2 - 2C$.",
   "explain": "$-2C = 6$, $C = -3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasilnya ...",
   "options": [
    "$\\dfrac{2}{x - 2} + \\dfrac{x - 3}{x^2 + 1}$",
    "$\\dfrac{2}{x - 2} + \\dfrac{x + 3}{x^2 + 1}$",
    "$\\dfrac{2}{x - 2} - \\dfrac{3}{x^2 + 1}$"
   ],
   "answer": "$\\dfrac{2}{x - 2} + \\dfrac{x - 3}{x^2 + 1}$",
   "hint": "Pembilang suku kedua $Bx + C$.",
   "explain": "$Bx + C = x - 3$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\dfrac{2}{x - 2} + \\dfrac{x - 3}{x^2 + 1}$."
}
```
