---
id: sma1-06-diskriminan-pertidaksamaan-kuadrat
judul: Diskriminan dan Pertidaksamaan Kuadrat
jenjang: sma1
moe: "Additional Mathematics · A2 Equations and inequalities"
prasyarat: [smp3-02-persamaan-kuadrat-lanjut, smp2-06-sistem-persamaan-linear, sma1-05-fungsi-kuadrat-lanjut]
durasi_menit: 60
---

## Kenapa belajar ini?

Insinyur jalan perlu tahu apakah rel lurus akan menabrak bukit, hanya menyentuhnya, atau lewat tanpa menyentuh. Pertanyaan seperti ini bisa dijawab tanpa menggambar, cukup dengan satu bilangan: diskriminan. Pertidaksamaan kuadrat juga muncul saat mencari rentang nilai yang aman, misalnya rentang harga yang tetap memberi untung.

## Analogi

Bayangkan parabola sebagai **mangkuk** dan sumbu $x$ sebagai **permukaan air**.

- Jika dasar mangkuk berada di bawah permukaan air, permukaan air memotong dinding mangkuk di **dua titik**.
- Jika dasar mangkuk tepat menyentuh permukaan air, ada **satu titik sentuh**.
- Jika mangkuk melayang di atas air, **tidak ada** titik potong.

Diskriminan memberi tahu kita posisi dasar mangkuk terhadap air. Untuk garis dan kurva, kita "memiringkan" permukaan air menjadi garis, dan pertanyaannya tetap sama.

```anim
{"type": "grafik", "title": "Mangkuk dan permukaan air", "xmin": -8, "xmax": 8, "ymin": -3, "ymax": 8, "kurva": [{"f": "(x+4)^2-2", "label": "D > 0"}, {"f": "x^2", "label": "D = 0"}, {"f": "(x-4)^2+2", "label": "D < 0"}], "titik": [{"x": -5.414, "y": 0}, {"x": -2.586, "y": 0}, {"x": 0, "y": 0, "label": "menyentuh"}], "langkah": [{"say": "Sumbu $x$ adalah permukaan air.", "kurva": 0, "titik": 0}, {"say": "Dasar mangkuk di bawah air: memotong di dua titik ($D > 0$).", "kurva": 1, "titik": 2}, {"say": "Dasar mangkuk tepat di permukaan: satu titik sentuh ($D = 0$).", "kurva": 2, "titik": 3}, {"say": "Mangkuk melayang di atas air: tidak ada titik potong ($D < 0$).", "kurva": 3, "titik": 3}]}
```

## Konsep

### Diskriminan dan jenis akar

Dari melengkapkan kuadrat, persamaan $ax^2 + bx + c = 0$ setara dengan

$$
\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}
$$

Ruas kiri adalah kuadrat, jadi tidak pernah negatif. Tanda ruas kanan ditentukan oleh **diskriminan** $D = b^2 - 4ac$. Akarnya:

$$
x = \frac{-b \pm \sqrt{D}}{2a}
$$

- $D > 0$: dua akar real berbeda (mangkuk memotong air di dua titik).
- $D = 0$: dua akar real kembar, $x = -\frac{b}{2a}$ (mangkuk menyentuh air).
- $D < 0$: tidak ada akar real (mangkuk melayang).

"Akar real" (tanpa kata berbeda) berarti $D \ge 0$.

### Kedudukan garis terhadap kurva

Untuk garis $y = mx + n$ dan kurva $y = ax^2 + bx + c$, titik potong memenuhi keduanya. Samakan $y$:

$$
ax^2 + (b - m)x + (c - n) = 0
$$

Hitung $D$ persamaan baru ini:

- $D > 0$: garis **memotong** kurva di dua titik.
- $D = 0$: garis **menyinggung** kurva (garis singgung).
- $D < 0$: garis **tidak memotong** kurva.

```anim
{"type": "grafik", "title": "Tiga garis dan kurva y = x² + 1", "xmin": -3, "xmax": 4, "ymin": -3, "ymax": 10, "kurva": [{"f": "x^2+1", "label": "y = x^2 + 1"}, {"f": "3x-1", "label": "y = 3x - 1\\ (D = 1)"}, {"f": "2x", "label": "y = 2x\\ (D = 0)"}, {"f": "x-1", "label": "y = x - 1\\ (D = -7)"}], "titik": [{"x": 1, "y": 2, "label": "(1, 2)"}, {"x": 2, "y": 5, "label": "(2, 5)"}], "langkah": [{"say": "Kurva $y = x^2 + 1$.", "kurva": 1, "titik": 0}, {"say": "$y = 3x - 1$: $x^2 - 3x + 2 = 0$, $D = 9 - 8 = 1 > 0$. Memotong di dua titik.", "kurva": 2, "titik": 2}, {"say": "$y = 2x$: $x^2 - 2x + 1 = 0$, $D = 0$. Menyinggung di $(1, 2)$.", "kurva": 3, "titik": 2}, {"say": "$y = x - 1$: $x^2 - x + 2 = 0$, $D = 1 - 8 = -7 < 0$. Tidak memotong.", "kurva": 4, "titik": 2}]}
```

### Persamaan simultan linear dan kuadrat

Untuk menyelesaikan satu persamaan linear dan satu persamaan kuadrat:

1. Dari persamaan linear, nyatakan satu variabel dengan variabel lain.
2. Substitusikan ke persamaan kuadrat.
3. Selesaikan persamaan kuadrat yang muncul.
4. Hitung variabel kedua dari persamaan **linear**, lalu cek ke kedua persamaan.

```anim
{"type": "persamaan", "title": "Menyelesaikan y = 2x dan y = x² − 3", "baris": [{"tex": "x^2 - 3 = 2x", "say": "Substitusikan $y = 2x$ dari persamaan linear ke persamaan kuadrat."}, {"tex": "x^2 - 2x - 3 = 0", "say": "Pindahkan semua suku ke satu ruas.", "op": "$-2x$"}, {"tex": "(x - 3)(x + 1) = 0", "say": "Faktorkan.", "op": "faktorkan"}, {"tex": "x = 3 \\ \\text{atau}\\ x = -1", "say": "Dua nilai $x$.", "op": "nolkan faktor"}, {"tex": "(3, 6) \\ \\text{dan}\\ (-1, -2)", "say": "Hitung $y$ dari persamaan linear $y = 2x$.", "op": "$y = 2x$"}]}
```

### Pertidaksamaan kuadrat

Untuk $ax^2 + bx + c > 0$ (atau $<, \ge, \le$):

1. Cari akar-akar persamaan $ax^2 + bx + c = 0$ (titik potong dengan sumbu $x$).
2. Sketsa parabola: lembah jika $a > 0$, bukit jika $a < 0$.
3. Pilih bagian grafik yang sesuai: di atas sumbu $x$ untuk $> 0$, di bawah untuk $< 0$.

Untuk $a > 0$ dengan akar $\alpha < \beta$:

$$
(x - \alpha)(x - \beta) < 0 \iff \alpha < x < \beta, \qquad (x - \alpha)(x - \beta) > 0 \iff x < \alpha \text{ atau } x > \beta
$$

Dalam analogi: bagian mangkuk yang terendam air ada **di antara** dua titik potong.

```anim
{"type": "grafik", "title": "Membaca x² − 2x − 3 < 0", "xmin": -3, "xmax": 5, "ymin": -5, "ymax": 6, "kurva": [{"f": "x^2-2x-3", "label": "y = (x+1)(x-3)"}, {"f": "x^2-2x-3", "dari": -1, "sampai": 3, "warna": "#e11d48", "label": "\\text{bagian} < 0"}], "titik": [{"x": -1, "y": 0, "label": "-1"}, {"x": 3, "y": 0, "label": "3"}], "langkah": [{"say": "Akar-akarnya $-1$ dan $3$. Karena $a > 0$, grafiknya lembah.", "kurva": 1, "titik": 2}, {"say": "Bagian yang terendam (di bawah sumbu $x$) ada di antara akar: $-1 < x < 3$.", "kurva": 2, "titik": 2}, {"say": "Bagian di atas sumbu $x$ ada di luar akar: $x < -1$ atau $x > 3$ untuk $> 0$.", "kurva": 2, "titik": 2}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Akar kembar

```soal
{
 "title": "Contoh 1",
 "text": "Tentukan nilai $k$ agar $x^2 - 6x + k = 0$ memiliki dua akar kembar. Tentukan juga akarnya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Akar kembar berarti ...",
   "options": [
    "$D = 0$",
    "$D > 0$",
    "$D < 0$"
   ],
   "answer": "$D = 0$",
   "hint": "Mangkuk tepat menyentuh air.",
   "explain": "Akar kembar: $D = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: $D = (-6)^2 - 4(1)(k)$ = ...",
   "options": [
    "$36 - 4k$",
    "$-36 - 4k$",
    "$36 + 4k$",
    "$12 - 4k$"
   ],
   "answer": "$36 - 4k$",
   "hint": "$(-6)^2$ positif.",
   "explain": "$D = 36 - 4k$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Dari $36 - 4k = 0$, $k$ = ?",
   "answer": "9",
   "hint": "Pindahkan $4k$, lalu bagi 4.",
   "explain": "$k = 9$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Akarnya $x = -\\frac{b}{2a}$ = ?",
   "answer": "3",
   "hint": "$b = -6$, $a = 1$.",
   "explain": "$\\frac{6}{2} = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: $x^2 - 6x + 9$ = ...",
   "options": [
    "$(x-3)^2$",
    "$(x+3)^2$",
    "$(x-9)(x+1)$"
   ],
   "answer": "$(x-3)^2$",
   "hint": "Bentuk kuadrat sempurna.",
   "explain": "Nol hanya di $x = 3$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$k = 9$, dan akar kembarnya $x = 3$. (Untuk $k < 9$ akarnya real berbeda, untuk $k > 9$ tidak real.)"
}
```

### Contoh 2: Garis yang tidak memotong kurva

```soal
{
 "title": "Contoh 2",
 "text": "Tentukan nilai $m$ agar garis $y = mx - 1$ tidak memotong kurva $y = x^2 + 3$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Samakan $y$ dan susun menjadi $= 0$.",
   "options": [
    "$x^2 - mx + 4 = 0$",
    "$x^2 + mx + 2 = 0$",
    "$x^2 + 3 = 0$"
   ],
   "answer": "$x^2 - mx + 4 = 0$",
   "hint": "$x^2 + 3 = mx - 1$, lalu pindahkan semua ke kiri.",
   "explain": "$x^2 - mx + 3 + 1 = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Syarat tidak memotong dan nilai $D$-nya ...",
   "options": [
    "$D = m^2 - 16 < 0$",
    "$D = m^2 - 16 > 0$",
    "$D = m^2 + 16 < 0$"
   ],
   "answer": "$D = m^2 - 16 < 0$",
   "hint": "$D = b^2 - 4ac$ dengan $b = -m$, $c = 4$.",
   "explain": "$(-m)^2 - 4(1)(4) = m^2 - 16$, dan tidak memotong berarti $D < 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: $(m - 4)(m + 4) < 0$ berarti ...",
   "options": [
    "$-4 < m < 4$",
    "$m < -4$ atau $m > 4$",
    "$m < 4$"
   ],
   "answer": "$-4 < m < 4$",
   "hint": "Bagian negatif lembah ada di antara akar.",
   "explain": "$-4 < m < 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: untuk $m = 5$, $x^2 - 5x + 4 = 0$. Ada berapa titik potong?",
   "answer": "2",
   "hint": "Faktorkan: $(x-1)(x-4)$.",
   "explain": "Dua titik ($x = 1$ dan $x = 4$), jadi $m = 5$ memang di luar jawaban. Untuk $m = 0$, garis $y = -1$ tidak bertemu $y \\ge 3$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$-4 < m < 4$."
}
```

### Contoh 3: Pertidaksamaan kuadrat

```soal
{
 "title": "Contoh 3",
 "text": "Selesaikan $2x^2 + 5x - 3 \\ge 0$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Faktorkan $2x^2 + 5x - 3$.",
   "options": [
    "$(2x - 1)(x + 3)$",
    "$(2x + 1)(x - 3)$",
    "$(2x - 3)(x + 1)$"
   ],
   "answer": "$(2x - 1)(x + 3)$",
   "hint": "Cek dengan mengalikan kembali.",
   "explain": "Akar-akarnya $x = \\frac{1}{2}$ dan $x = -3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Sketsa. Grafiknya ...",
   "options": [
    "Lembah yang memotong sumbu $x$ di $-3$ dan $\\frac{1}{2}$",
    "Bukit yang memotong sumbu $x$ di $-3$ dan $\\frac{1}{2}$"
   ],
   "answer": "Lembah yang memotong sumbu $x$ di $-3$ dan $\\frac{1}{2}$",
   "hint": "$a = 2$.",
   "explain": "$a > 0$: lembah.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Uji titik di antara akar. Nilai $2x^2 + 5x - 3$ saat $x = 0$ = ?",
   "answer": "-3",
   "hint": "Substitusikan $x = 0$.",
   "explain": "$-3 < 0$, jadi daerah di antara akar tidak memenuhi.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Daerah penyelesaiannya ...",
   "options": [
    "$x \\le -3$ atau $x \\ge \\frac{1}{2}$",
    "$-3 \\le x \\le \\frac{1}{2}$",
    "$x < -3$ atau $x > \\frac{1}{2}$"
   ],
   "answer": "$x \\le -3$ atau $x \\ge \\frac{1}{2}$",
   "hint": "Pakai $\\ge$, jadi akar ikut.",
   "explain": "Di luar kedua akar, termasuk akarnya.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: nilai saat $x = -4$ = ?",
   "answer": "9",
   "hint": "$2(16) - 20 - 3$.",
   "explain": "$9 \\ge 0$, benar. Juga $x = 1$ memberi $4 \\ge 0$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x \\le -3$ atau $x \\ge \\frac{1}{2}$."
}
```

### Contoh 4: Soal cerita, taman Bu Siti

```soal
{
 "title": "Contoh 4",
 "text": "Taman Bu Siti berbentuk persegi panjang dengan keliling 34 m. Jalan setapak dibuat sepanjang diagonalnya, yaitu 13 m. Tentukan panjang dan lebar taman.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Persamaan dari keliling adalah ...",
   "options": [
    "$p + l = 17$",
    "$p + l = 34$",
    "$pl = 34$"
   ],
   "answer": "$p + l = 17$",
   "hint": "$2(p + l) = 34$.",
   "explain": "Persamaan linear: $p + l = 17$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Persamaan dari diagonal adalah ...",
   "options": [
    "$p^2 + l^2 = 169$",
    "$p + l = 13$",
    "$p^2 + l^2 = 13$"
   ],
   "answer": "$p^2 + l^2 = 169$",
   "hint": "Pythagoras: $p^2 + l^2 = 13^2$.",
   "explain": "Persamaan kuadrat: $p^2 + l^2 = 169$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2–3: Substitusi $l = 17 - p$ dan sederhanakan.",
   "options": [
    "$p^2 - 17p + 60 = 0$",
    "$p^2 - 17p + 120 = 0$",
    "$p^2 + 17p - 60 = 0$"
   ],
   "answer": "$p^2 - 17p + 60 = 0$",
   "hint": "$(17 - p)^2 = 289 - 34p + p^2$.",
   "explain": "$2p^2 - 34p + 120 = 0$, lalu bagi 2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Akar-akarnya ...",
   "options": [
    "$p = 12$ atau $p = 5$",
    "$p = 15$ atau $p = 4$",
    "$p = 10$ atau $p = 6$"
   ],
   "answer": "$p = 12$ atau $p = 5$",
   "hint": "Dua bilangan yang hasil kalinya 60 dan jumlahnya 17.",
   "explain": "$(p - 12)(p - 5) = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Jika $p = 12$, berapa $l$?",
   "answer": "5",
   "hint": "Pakai persamaan linear $l = 17 - p$.",
   "explain": "$l = 5$. Panjang adalah sisi yang lebih besar: 12 m.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: diagonal $\\sqrt{12^2 + 5^2}$ = ?",
   "answer": "13",
   "hint": "$144 + 25$.",
   "explain": "$\\sqrt{169} = 13$, dan keliling $2(17) = 34$. Cocok.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  }
 ],
 "conclusion": "Panjang 12 m dan lebar 5 m."
}
```

## Kesalahan yang sering terjadi

- **Memakai $D$ tanpa menyusun persamaan $= 0$ dulu.** Pada $x^2 + 3 = mx - 1$, ada yang langsung memakai $a = 1, b = 0, c = 3$. Semua suku harus dipindah ke satu ruas dulu: $x^2 - mx + 4 = 0$.
- **Salah arah daerah pertidaksamaan.** Menulis $(x-2)(x-5) < 0 \Rightarrow x < 2$ atau $x > 5$. Untuk $a > 0$, nilai negatif ada di antara akar: $2 < x < 5$. Selalu sketsa atau uji satu titik.
- **Membagi dengan variabel.** Dari $x^2 > 3x$ menulis $x > 3$. Ini membuang $x < 0$. Yang benar: $x(x - 3) > 0$, sehingga $x < 0$ atau $x > 3$.
- **Menghitung variabel kedua dari persamaan kuadrat.** Ini bisa memberi pasangan palsu, misalnya $l = -5$ dari $l^2 = 25$. Pakai persamaan linear.
- **Lupa membedakan "real" dan "real berbeda".** Akar real berarti $D \ge 0$, bukan $D > 0$.

## Ringkasan

- $D = b^2 - 4ac$. $D > 0$: dua akar real berbeda; $D = 0$: kembar; $D < 0$: tidak real.
- Garis dan kurva: samakan $y$, susun persamaan kuadrat, lalu periksa $D$ (memotong, menyinggung, tidak memotong).
- Persamaan simultan linear-kuadrat: substitusi dari persamaan linear, selesaikan, lalu cek.
- Pertidaksamaan kuadrat: cari akar, sketsa parabola, pilih daerah. Untuk $a > 0$, "$< 0$" ada di antara akar.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tentukan jenis akar persamaan $3x^2 - 4x + 2 = 0$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$D = (-4)^2 - 4(3)(2)$ = ?",
   "answer": "-8",
   "hint": "$16 - 24$.",
   "explain": "$D = -8$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Jenis akarnya ...",
   "options": [
    "Tidak real",
    "Dua akar real berbeda",
    "Akar kembar"
   ],
   "answer": "Tidak real",
   "hint": "Lihat tanda $D$.",
   "explain": "$D < 0$: tidak ada akar real.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Akarnya tidak real karena $D = -8 < 0$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Tentukan nilai $p$ agar $x^2 + px + 9 = 0$ memiliki akar kembar.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "$D$ = ...",
   "options": [
    "$p^2 - 36$",
    "$p^2 - 9$",
    "$p^2 + 36$"
   ],
   "answer": "$p^2 - 36$",
   "hint": "$b^2 - 4ac$ dengan $a = 1$, $c = 9$.",
   "explain": "$D = p^2 - 36$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$p^2 - 36 = 0$ memberi ...",
   "options": [
    "$p = 6$ atau $p = -6$",
    "$p = 6$ saja",
    "$p = 18$"
   ],
   "answer": "$p = 6$ atau $p = -6$",
   "hint": "Bilangan yang kuadratnya 36 ada dua.",
   "explain": "$p = \\pm 6$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$p = 6$ atau $p = -6$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Selesaikan $x^2 - 7x + 10 \\le 0$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Akar-akar $x^2 - 7x + 10 = 0$ ...",
   "options": [
    "$2$ dan $5$",
    "$-2$ dan $-5$",
    "$1$ dan $10$"
   ],
   "answer": "$2$ dan $5$",
   "hint": "Dua bilangan yang hasil kalinya 10 dan jumlahnya 7.",
   "explain": "$(x-2)(x-5) = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Penyelesaiannya ...",
   "options": [
    "$2 \\le x \\le 5$",
    "$x \\le 2$ atau $x \\ge 5$",
    "$2 < x < 5$"
   ],
   "answer": "$2 \\le x \\le 5$",
   "hint": "Lembah: nilai tak positif ada di antara akar.",
   "explain": "Di antara akar, termasuk akarnya.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$2 \\le x \\le 5$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Selesaikan sistem $y = x + 1$ dan $y = x^2 - 1$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Samakan $y$ dan susun.",
   "options": [
    "$x^2 - x - 2 = 0$",
    "$x^2 + x = 0$",
    "$x^2 - x + 2 = 0$"
   ],
   "answer": "$x^2 - x - 2 = 0$",
   "hint": "$x^2 - 1 = x + 1$.",
   "explain": "Pindahkan $x + 1$ ke kiri.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Nilai $x$ ...",
   "options": [
    "$x = 2$ atau $x = -1$",
    "$x = -2$ atau $x = 1$",
    "$x = 2$ saja"
   ],
   "answer": "$x = 2$ atau $x = -1$",
   "hint": "Faktorkan.",
   "explain": "$(x - 2)(x + 1) = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Untuk $x = 2$, $y$ = ?",
   "answer": "3",
   "hint": "Pakai persamaan linear.",
   "explain": "$y = 2 + 1 = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Untuk $x = -1$, $y$ = ?",
   "answer": "0",
   "hint": "Pakai persamaan linear.",
   "explain": "$y = -1 + 1 = 0$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Penyelesaiannya $(2, 3)$ dan $(-1, 0)$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Tentukan nilai $k$ agar garis $y = kx + 2$ memotong kurva $y = x^2 + x + 3$ di dua titik berbeda.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Samakan $y$.",
   "options": [
    "$x^2 + (1-k)x + 1 = 0$",
    "$x^2 + (1+k)x + 5 = 0$",
    "$x^2 + x + 1 = 0$"
   ],
   "answer": "$x^2 + (1-k)x + 1 = 0$",
   "hint": "$x^2 + x + 3 - kx - 2 = 0$.",
   "explain": "Kelompokkan suku $x$: $(1 - k)x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Syarat dua titik berbeda ...",
   "options": [
    "$(1-k)^2 - 4 > 0$",
    "$(1-k)^2 - 4 = 0$",
    "$(1-k)^2 - 4 < 0$"
   ],
   "answer": "$(1-k)^2 - 4 > 0$",
   "hint": "Dua titik berbeda: $D > 0$.",
   "explain": "$D = (1-k)^2 - 4(1)(1)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: $(k - 3)(k + 1) > 0$ memberi ...",
   "options": [
    "$k < -1$ atau $k > 3$",
    "$-1 < k < 3$",
    "$k > 3$"
   ],
   "answer": "$k < -1$ atau $k > 3$",
   "hint": "Lembah: nilai positif ada di luar akar.",
   "explain": "$k < -1$ atau $k > 3$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$k < -1$ atau $k > 3$."
}
```
