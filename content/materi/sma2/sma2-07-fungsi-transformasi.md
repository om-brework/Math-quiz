---
id: sma2-07-fungsi-transformasi
judul: Fungsi dan Transformasi Grafik
jenjang: sma2
moe: "H2 Mathematics 9758 · Pure Mathematics · Functions and Graphs"
prasyarat: [sma1-05-fungsi-kuadrat-lanjut, sma1-10-eksponen-logaritma]
durasi_menit: 80
---

## Kenapa belajar ini?

Fungsi adalah bahasa untuk aturan "masukan menghasilkan keluaran": tarif ojek daring, konversi mata uang, rumus suhu. Dengan fungsi invers kita bisa berjalan mundur, misalnya dari ongkos yang dibayar ke jarak yang ditempuh. Transformasi grafik membuat kita bisa menggambar banyak kurva hanya dari beberapa grafik dasar.

## Analogi

Bayangkan fungsi sebagai **mesin di pabrik**.

- **Daerah asal** adalah bahan yang **boleh** dimasukkan ke mesin.
- **Daerah hasil** adalah semua produk yang **bisa** keluar.
- Mesin **satu-satu** tidak pernah membuat dua bahan berbeda menjadi produk yang sama. Hanya mesin seperti ini yang bisa **dijalankan mundur** (invers): dari produk, kita tahu pasti bahannya.
- **Komposisi** $fg$ adalah dua mesin berurutan: bahan masuk ke $g$ dulu, hasilnya masuk ke $f$. Produk $g$ harus cocok dengan pintu masuk $f$.
- **Transformasi** adalah memasang **pengatur** di pintu keluar (mengubah $y$) atau di pintu masuk (mengubah $x$). Pengatur di pintu masuk bekerja **terbalik** dari kesan pertama.

```visual
{"type": "table", "caption": "Mesin tarif ojek f(x) = 8000 + 2500x: maju dari jarak ke ongkos, mundur dari ongkos ke jarak", "head": ["Bahan: jarak x (km)", "0", "1", "2", "4"], "rows": [["Produk: f(x) (rupiah)", "8.000", "10.500", "13.000", "18.000"]]}
```

## Konsep

### Daerah asal, daerah hasil, dan fungsi satu-satu

Fungsi $f$ ditulis lengkap dengan aturan dan daerah asalnya, misalnya $f : x \mapsto x^2,\ x \in \mathbb{R}$. Daerah asal ditulis $D_f$, daerah hasil $R_f$. Untuk contoh ini $D_f = \mathbb{R}$ dan $R_f = [0, \infty)$.

$f$ disebut **satu-satu** jika $f(x_1) = f(x_2)$ hanya terjadi saat $x_1 = x_2$. Uji grafiknya dengan **uji garis mendatar**: setiap garis $y = k$ memotong grafik paling banyak sekali. Fungsi $x^2$ pada $\mathbb{R}$ tidak satu-satu karena $f(-2) = f(2) = 4$.

```anim
{"type": "grafik", "title": "Uji garis mendatar", "xmin": -3.5, "xmax": 3.5, "ymin": -1, "ymax": 9, "kurva": [{"f": "x^2", "label": "y = x^2"}, {"f": "x^2", "label": "y = x^2,\\ x \\ge 0", "dari": 0, "warna": "#22c55e"}], "garis": [{"y": 4, "label": "y = 4"}], "titik": [{"x": -2, "y": 4, "label": "(−2, 4)"}, {"x": 2, "y": 4, "label": "(2, 4)"}], "langkah": [{"say": "Grafik $y = x^2$ pada $\\mathbb{R}$.", "kurva": 1}, {"say": "Garis $y = 4$ memotong grafik dua kali: $f(-2) = f(2) = 4$. Tidak satu-satu.", "kurva": 1, "garis": 1, "titik": 2}, {"say": "Batasi daerah asal menjadi $x \\ge 0$: setiap garis mendatar memotong paling banyak sekali.", "kurva": 2, "garis": 1, "titik": 0}]}
```

### Fungsi invers

$f^{-1}$ ada **jika dan hanya jika** $f$ satu-satu. Sifatnya:
$$ D_{f^{-1}} = R_f, \qquad R_{f^{-1}} = D_f, \qquad f^{-1}f(x) = x $$
Cara mencari: tulis $y = f(x)$, ubah menjadi $x = \ldots$ dalam $y$, lalu ganti nama variabel. Grafik $y = f^{-1}(x)$ adalah **pencerminan** grafik $y = f(x)$ terhadap garis $y = x$, karena peran $x$ dan $y$ ditukar.

Kalau $f$ tidak satu-satu, kita bisa **membatasi daerah asal** agar menjadi satu-satu.

```anim
{"type": "grafik", "title": "Grafik invers: cermin terhadap y = x", "xmin": -3, "xmax": 6, "ymin": -3, "ymax": 6, "kurva": [{"f": "e^x", "label": "y = e^x"}, {"f": "x", "label": "y = x"}, {"f": "ln(x)", "label": "y = \\ln x", "dari": 0.01}], "titik": [{"x": 0, "y": 1, "label": "(0, 1)"}, {"x": 1, "y": 0, "label": "(1, 0)"}], "langkah": [{"say": "Grafik $y = e^x$, satu-satu, jadi punya invers.", "kurva": 1}, {"say": "Garis cermin $y = x$.", "kurva": 2}, {"say": "Tukar $x$ dan $y$: $(0, 1)$ menjadi $(1, 0)$. Inversnya $y = \\ln x$.", "kurva": 3, "titik": 2}]}
```

### Fungsi komposisi

$fg(x) = f(g(x))$. Fungsi ini **ada jika dan hanya jika** $R_g \subseteq D_f$ (semua produk mesin $g$ bisa masuk mesin $f$). Daerah asal $fg$ sama dengan $D_g$. Umumnya $fg \neq gf$.

### Transformasi grafik

Mulai dari $y = f(x)$, dengan $a > 0$:

```visual
{"type": "table", "caption": "Transformasi dari y = f(x), dengan a > 0", "head": ["Bentuk baru", "Efek pada grafik", "Titik (p, q) menjadi"], "rows": [["y = f(x) + a", "geser ke atas a", "(p, q + a)"], ["y = f(x + a)", "geser ke KIRI a", "(p − a, q)"], ["y = a·f(x)", "regang tegak, faktor a", "(p, a·q)"], ["y = f(a·x)", "regang mendatar, faktor 1/a", "(p/a, q)"], ["y = −f(x)", "cermin terhadap sumbu x", "(p, −q)"], ["y = f(−x)", "cermin terhadap sumbu y", "(−p, q)"]]}
```

Perubahan di dalam kurung (pintu masuk) bekerja terbalik: $f(x + a)$ bergeser ke kiri, $f(2x)$ menyempit setengah. Alasannya, untuk mendapat keluaran yang sama, masukan baru harus "mengimbangi" perubahan itu.

```anim
{"type": "grafik", "title": "Pengatur di pintu masuk bekerja terbalik", "xmin": -5, "xmax": 3, "ymin": -4, "ymax": 6, "kurva": [{"f": "x^2", "label": "y = x^2"}, {"f": "(x+2)^2", "label": "y = (x + 2)^2"}, {"f": "(x+2)^2-3", "label": "y = (x + 2)^2 - 3"}], "titik": [{"x": 0, "y": 0, "label": "(0, 0)"}, {"x": -2, "y": 0, "label": "(−2, 0)"}, {"x": -2, "y": -3, "label": "(−2, −3)"}], "langkah": [{"say": "Grafik dasar $y = x^2$ dengan puncak $(0, 0)$.", "kurva": 1, "titik": 1}, {"say": "$+2$ di dalam kurung: grafik bergeser ke KIRI 2, bukan ke kanan.", "kurva": 2, "titik": 2}, {"say": "$-3$ di luar: grafik turun 3. Puncak menjadi $(-2, -3)$.", "kurva": 3, "titik": 3}]}
```

### Grafik $y = |f(x)|$ dan $y = \dfrac{1}{f(x)}$

**$y = |f(x)|$**: bagian grafik di atas sumbu $x$ tetap, bagian di bawah sumbu $x$ dicerminkan ke atas.

**$y = \dfrac{1}{f(x)}$**, dari grafik $y = f(x)$:
- Akar $f(x) = 0$ menjadi **asimtot tegak**.
- Jika $f(x) \to \pm\infty$, maka $\frac{1}{f(x)} \to 0$.
- Tanda tidak berubah. Titik dengan $f = 1$ atau $f = -1$ tetap.
- Titik maksimum $f$ menjadi titik minimum $\frac{1}{f}$, dan sebaliknya, dengan $x$ yang sama.

```anim
{"type": "grafik", "title": "Dari f(x) = x² − 1 ke |f(x)| dan 1/f(x)", "xmin": -3, "xmax": 3, "ymin": -3, "ymax": 4, "kurva": [{"f": "x^2-1", "label": "y = x^2 - 1"}, {"f": "abs(x^2-1)", "label": "y = |x^2 - 1|"}, {"f": "1/(x^2-1)", "label": "y = \\frac{1}{x^2 - 1}"}], "garis": [{"x": -1}, {"x": 1}], "titik": [{"x": 0, "y": -1, "label": "min f (0, −1)"}, {"x": 0, "y": 1, "label": "maks |f| (0, 1)"}], "langkah": [{"say": "Grafik $f(x) = x^2 - 1$, akar $\\pm 1$, minimum $(0, -1)$.", "kurva": 1, "titik": 1}, {"say": "$|f(x)|$: bagian di bawah sumbu $x$ dicerminkan ke atas, minimum menjadi $(0, 1)$.", "kurva": 2, "titik": 2}, {"say": "$\\frac{1}{f(x)}$: akar menjadi asimtot tegak $x = \\pm 1$, dan $y \\to 0$ saat $|x|$ besar.", "kurva": 3, "garis": 2, "titik": 1}, {"say": "Minimum $f$ di $(0, -1)$ menjadi maksimum $\\frac{1}{f}$ di titik yang sama, karena $\\frac{1}{-1} = -1$.", "kurva": 3, "garis": 2, "titik": 1}]}
```

### Asimtot

Asimtot adalah garis yang didekati kurva makin lama makin rapat saat $x$ atau $y$ menuju tak hingga. Untuk $y = \dfrac{ax + b}{cx + d}$: asimtot tegak $x = -\dfrac{d}{c}$ (penyebut nol), asimtot datar $y = \dfrac{a}{c}$. Untuk bentuk $\dfrac{\text{kuadrat}}{\text{linear}}$, lakukan pembagian, misalnya $\dfrac{x^2 + 1}{x} = x + \dfrac{1}{x}$, sehingga ada asimtot miring $y = x$ dan asimtot tegak $x = 0$.

```anim
{"type": "grafik", "title": "Asimtot miring y = x", "xmin": -5, "xmax": 5, "ymin": -6, "ymax": 6, "kurva": [{"f": "x+1/x", "label": "y = x + \\frac{1}{x}"}, {"f": "x", "label": "\\text{asimtot miring } y = x"}], "garis": [{"x": 0, "label": "x = 0"}], "langkah": [{"say": "$\\frac{x^2 + 1}{x} = x + \\frac{1}{x}$.", "kurva": 1}, {"say": "Untuk $|x|$ besar, $\\frac{1}{x} \\to 0$, jadi kurva mendekati $y = x$.", "kurva": 2}, {"say": "Penyebut nol di $x = 0$: asimtot tegak.", "kurva": 2, "garis": 1}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Tarif ojek, diskon, dan berjalan mundur

```soal
{
 "title": "Contoh 1",
 "text": "Tarif ojek daring $f(x) = 8000 + 2500x$ rupiah untuk jarak $x$ km, $x \\geq 0$. Aplikasi memberi diskon 10%: $g(y) = 0{,}9y$. (a) Tentukan $gf(x)$. (b) Siti membayar Rp25.200. Berapa km perjalanannya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Jarak masuk mesin tarif dulu, lalu mesin diskon. Komposisi yang dicari?",
   "options": [
    "$gf$",
    "$fg$",
    "$f + g$"
   ],
   "answer": "$gf$",
   "hint": "$gf(x) = g(f(x))$: mesin yang ditulis paling kanan bekerja duluan.",
   "explain": "$f$ dulu, lalu $g$: $gf$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: $gf(x) = ?$",
   "options": [
    "$7200 + 2250x$",
    "$8000 + 2250x$",
    "$7200 + 2500x$",
    "$0{,}9x + 8000 + 2500x$"
   ],
   "answer": "$7200 + 2250x$",
   "hint": "$0{,}9 \\times (8000 + 2500x)$.",
   "explain": "$0{,}9 \\times 8000 = 7200$ dan $0{,}9 \\times 2500 = 2250$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Mengapa $gf$ ada?",
   "options": [
    "$R_f = [8000, \\infty)$ termuat di $D_g$",
    "$R_g$ termuat di $D_f$",
    "$f$ dan $g$ sama-sama linear"
   ],
   "answer": "$R_f = [8000, \\infty)$ termuat di $D_g$",
   "hint": "Produk mesin pertama harus bisa masuk mesin kedua.",
   "explain": "Syaratnya $R_f \\subseteq D_g$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Jalankan mundur. Hitung $25.200 - 7200$.",
   "answer": "18.000",
   "hint": "Kurangkan dulu tarif dasar setelah diskon.",
   "explain": "Sisanya 18.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Berapa km, yaitu $\\frac{18.000}{2250}$?",
   "answer": "8",
   "hint": "Bagi dengan tarif per km setelah diskon.",
   "explain": "$x = 8$ km.",
   "error": "salah-langkah-materi",
   "suffix": "km"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: tarif 8 km sebelum diskon, $f(8)$?",
   "answer": "28.000",
   "hint": "$8000 + 2500 \\times 8$.",
   "explain": "Rp28.000; setelah diskon $0{,}9 \\times 28.000 = 25.200$. Benar.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "(a) $gf(x) = 7200 + 2250x$; (b) perjalanan Siti 8 km."
}
```

### Contoh 2: Invers dengan daerah asal dibatasi

```soal
{
 "title": "Contoh 2",
 "text": "$f(x) = (x - 2)^2 + 1$, $x \\geq 2$. Jelaskan mengapa $f^{-1}$ ada, lalu tentukan $f^{-1}(x)$ beserta daerah asalnya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Mengapa $f^{-1}$ ada?",
   "options": [
    "Untuk $x \\geq 2$ grafik selalu naik, jadi $f$ satu-satu",
    "Semua fungsi kuadrat punya invers",
    "Karena $f(1) = f(3)$"
   ],
   "answer": "Untuk $x \\geq 2$ grafik selalu naik, jadi $f$ satu-satu",
   "hint": "Puncak parabola di $x = 2$. Pakai uji garis mendatar.",
   "explain": "Tanpa batasan, $f(1) = f(3) = 2$ dan $f$ tidak satu-satu.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Nilai terkecil $f$ (untuk menentukan $R_f$)?",
   "answer": "1",
   "hint": "Hitung $f(2)$.",
   "explain": "$f(2) = 1$, jadi $R_f = [1, \\infty)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Dari $y = (x - 2)^2 + 1$, nyatakan $x - 2$.",
   "options": [
    "$x - 2 = \\pm\\sqrt{y - 1}$",
    "$x - 2 = \\sqrt{y} - 1$",
    "$x - 2 = \\pm\\sqrt{y + 1}$"
   ],
   "answer": "$x - 2 = \\pm\\sqrt{y - 1}$",
   "hint": "Kurangi 1 dulu, baru akarkan.",
   "explain": "$(x - 2)^2 = y - 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Tanda yang dipakai?",
   "options": [
    "Plus, karena $x - 2 \\geq 0$",
    "Minus, karena invers selalu negatif",
    "Keduanya"
   ],
   "answer": "Plus, karena $x - 2 \\geq 0$",
   "hint": "Ingat daerah asal $x \\geq 2$.",
   "explain": "$x = 2 + \\sqrt{y - 1}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Tulis inversnya.",
   "options": [
    "$f^{-1}(x) = 2 + \\sqrt{x - 1}$, $x \\geq 1$",
    "$f^{-1}(x) = 2 + \\sqrt{x - 1}$, $x \\geq 2$",
    "$f^{-1}(x) = \\frac{1}{(x - 2)^2 + 1}$"
   ],
   "answer": "$f^{-1}(x) = 2 + \\sqrt{x - 1}$, $x \\geq 1$",
   "hint": "$D_{f^{-1}} = R_f$.",
   "explain": "Daerah asal invers sama dengan daerah hasil $f$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung $f(5)$.",
   "answer": "10",
   "hint": "$9 + 1$.",
   "explain": "Lalu $f^{-1}(10) = 2 + \\sqrt{9} = 5$, kembali ke 5.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$f^{-1}(x) = 2 + \\sqrt{x - 1}$, $x \\geq 1$."
}
```

### Contoh 3: Grafik rasional sebagai transformasi $y = \frac{1}{x}$

```soal
{
 "title": "Contoh 3",
 "text": "Tentukan asimtot kurva $y = \\dfrac{2x + 1}{x - 1}$ dan jelaskan transformasi dari $y = \\dfrac{1}{x}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Bagi pembilang dengan penyebut.",
   "options": [
    "$2 + \\frac{3}{x - 1}$",
    "$2 + \\frac{1}{x - 1}$",
    "$1 + \\frac{3}{x - 1}$"
   ],
   "answer": "$2 + \\frac{3}{x - 1}$",
   "hint": "$2x + 1 = 2(x - 1) + \\ldots$",
   "explain": "$2x + 1 = 2(x - 1) + 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Transformasi dari $\\frac{1}{x}$?",
   "options": [
    "Geser kanan 1, regang tegak faktor 3, geser atas 2",
    "Geser kiri 1, regang tegak faktor 3, geser atas 2",
    "Geser kanan 1, regang tegak faktor 2, geser atas 3"
   ],
   "answer": "Geser kanan 1, regang tegak faktor 3, geser atas 2",
   "hint": "$x - 1$ di pintu masuk bekerja terbalik.",
   "explain": "$x \\to x - 1$ geser kanan, $\\times 3$ regang, $+2$ naik.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Asimtot tegak $x = ?$",
   "answer": "1",
   "hint": "Asimtot $x = 0$ ikut bergeser kanan 1.",
   "explain": "Asimtot tegak $x = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Asimtot datar $y = ?$",
   "answer": "2",
   "hint": "Asimtot $y = 0$ ikut naik 2.",
   "explain": "Asimtot datar $y = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Titik potong sumbu $y$ (nilai $y$ saat $x = 0$)?",
   "answer": "-1",
   "hint": "$\\frac{0 + 1}{0 - 1}$.",
   "explain": "$y = -1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Titik potong sumbu $x$?",
   "options": [
    "$x = -\\frac{1}{2}$",
    "$x = \\frac{1}{2}$",
    "$x = 1$"
   ],
   "answer": "$x = -\\frac{1}{2}$",
   "hint": "Pembilang nol.",
   "explain": "$2x + 1 = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung $y$ saat $x = 1001$, bulatkan ke 3 desimal.",
   "answer": "2,003",
   "hint": "$\\frac{2003}{1000}$.",
   "explain": "Mendekati 2, sesuai asimtot datar.",
   "error": "salah-pembulatan"
  }
 ],
 "conclusion": "Asimtot $x = 1$ dan $y = 2$; geser kanan 1, regang tegak faktor 3, geser atas 2."
}
```

### Contoh 4: Grafik $|f(x)|$ dan $\frac{1}{f(x)}$

```soal
{
 "title": "Contoh 4",
 "text": "$f(x) = x^2 - 2x - 3$. Jelaskan ciri penting grafik $y = |f(x)|$ dan $y = \\dfrac{1}{f(x)}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Akar-akar $f$?",
   "options": [
    "$-1$ dan $3$",
    "$1$ dan $-3$",
    "$-1$ dan $-3$"
   ],
   "answer": "$-1$ dan $3$",
   "hint": "Faktorkan $x^2 - 2x - 3$.",
   "explain": "$(x - 3)(x + 1)$. Minimum $f$ di $(1, -4)$, potong sumbu $y$ di $(0, -3)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Minimum $(1, -4)$ pada $f$ menjadi maksimum lokal $|f|$. Berapa nilai $y$-nya?",
   "answer": "4",
   "hint": "Bagian di bawah sumbu dicerminkan ke atas.",
   "explain": "$|-4| = 4$: maksimum lokal $(1, 4)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Titik potong sumbu $y$ grafik $|f|$?",
   "answer": "3",
   "hint": "$|f(0)| = |-3|$.",
   "explain": "$(0, 3)$. Di $x = -1$ dan $3$ grafik menyentuh sumbu dengan ujung lancip.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Asimtot grafik $\\frac{1}{f(x)}$?",
   "options": [
    "$x = -1$, $x = 3$, dan $y = 0$",
    "$x = 1$ dan $y = -4$",
    "$x = -1$ dan $x = 3$ saja"
   ],
   "answer": "$x = -1$, $x = 3$, dan $y = 0$",
   "hint": "Akar $f$ menjadi asimtot tegak; $f$ besar membuat $\\frac{1}{f}$ kecil.",
   "explain": "Ketiga asimtot itu.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Titik stasioner $\\frac{1}{f}$?",
   "options": [
    "Maksimum $\\left(1, -\\frac{1}{4}\\right)$",
    "Minimum $\\left(1, -\\frac{1}{4}\\right)$",
    "Maksimum $\\left(1, \\frac{1}{4}\\right)$"
   ],
   "answer": "Maksimum $\\left(1, -\\frac{1}{4}\\right)$",
   "hint": "Minimum $f$ menjadi maksimum $\\frac{1}{f}$; tanda tidak berubah.",
   "explain": "$\\frac{1}{-4} = -\\frac{1}{4}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek: titik potong sumbu $y$ grafik $\\frac{1}{f}$?",
   "options": [
    "$-\\frac{1}{3}$",
    "$\\frac{1}{3}$",
    "$-3$"
   ],
   "answer": "$-\\frac{1}{3}$",
   "hint": "$\\frac{1}{f(0)}$.",
   "explain": "$\\frac{1}{-3} = -\\frac{1}{3}$. Cocok dengan hitungan langsung.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$|f|$: maksimum lokal $(1, 4)$, menyentuh sumbu di $-1$ dan $3$. $\\frac{1}{f}$: asimtot $x = -1$, $x = 3$, $y = 0$; maksimum $\\left(1, -\\frac{1}{4}\\right)$; memotong sumbu $y$ di $-\\frac{1}{3}$."
}
```

## Kesalahan yang sering terjadi

- **Arah geser terbalik.** Mengira $y = f(x + 3)$ bergeser ke kanan. Pengatur di pintu masuk bekerja terbalik: grafik bergeser ke **kiri** 3.
- **Mengira $f^{-1}(x) = \frac{1}{f(x)}$.** Invers adalah mesin mundur, bukan kebalikan nilai. Untuk $f(x) = 2x$, $f^{-1}(x) = \frac{x}{2}$, sedangkan $\frac{1}{f(x)} = \frac{1}{2x}$.
- **Lupa daerah asal invers.** Menulis $f^{-1}(x) = 2 + \sqrt{x - 1}$ tanpa $x \geq 1$. Ingat $D_{f^{-1}} = R_f$.
- **Urutan komposisi terbalik.** $fg(x)$ artinya $g$ dikerjakan dulu. Periksa syaratnya dengan $R_g \subseteq D_f$, bukan sebaliknya.
- **Grafik $\frac{1}{f}$ menyeberang asimtot datar sembarangan.** Kurva $\frac{1}{f}$ hanya bernilai 0 jika $f$ tak hingga, jadi $\frac{1}{f}$ tidak pernah memotong $y = 0$.

## Ringkasan

- Fungsi = aturan + daerah asal. Invers ada jika dan hanya jika fungsi satu-satu (uji garis mendatar).
- $D_{f^{-1}} = R_f$; grafik invers adalah cermin terhadap $y = x$.
- $fg$ ada jika dan hanya jika $R_g \subseteq D_f$; $fg$ berarti $g$ dulu.
- Perubahan di luar $f$ memengaruhi $y$ secara langsung; perubahan di dalam kurung memengaruhi $x$ secara terbalik.
- $|f(x)|$: cerminkan bagian bawah ke atas. $\frac{1}{f(x)}$: akar menjadi asimtot tegak, maksimum dan minimum bertukar.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "$f(x) = 3x - 1$ dan $g(x) = x^2 + 2$, keduanya untuk $x \\in \\mathbb{R}$. Tentukan $fg(x)$ dan $gf(2)$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "$fg(x) = ?$",
   "options": [
    "$3x^2 + 5$",
    "$9x^2 - 6x + 3$",
    "$3x^2 + 1$"
   ],
   "answer": "$3x^2 + 5$",
   "hint": "$g$ dulu, lalu hasilnya masuk $f$.",
   "explain": "$3(x^2 + 2) - 1 = 3x^2 + 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Untuk $gf(2)$, hitung $f(2)$ dulu.",
   "answer": "5",
   "hint": "$3(2) - 1$.",
   "explain": "$f(2) = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$gf(2) = g(5) = ?$",
   "answer": "27",
   "hint": "$5^2 + 2$.",
   "explain": "$gf(2) = 27$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$fg(x) = 3x^2 + 5$ dan $gf(2) = 27$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Tentukan $f^{-1}(x)$ jika $f(x) = \\dfrac{x + 4}{x - 2}$, $x \\neq 2$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Dari $y(x - 2) = x + 4$, kumpulkan suku $x$.",
   "options": [
    "$x(y - 1) = 2y + 4$",
    "$x(y + 1) = 2y - 4$",
    "$x(y - 1) = 4 - 2y$"
   ],
   "answer": "$x(y - 1) = 2y + 4$",
   "hint": "$xy - 2y = x + 4$. Pindahkan $x$ ke kiri dan $2y$ ke kanan.",
   "explain": "$xy - x = 2y + 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$f^{-1}(x) = ?$",
   "options": [
    "$\\frac{2x + 4}{x - 1}$, $x \\neq 1$",
    "$\\frac{x - 2}{x + 4}$, $x \\neq -4$",
    "$\\frac{2x - 4}{x + 1}$, $x \\neq -1$"
   ],
   "answer": "$\\frac{2x + 4}{x - 1}$, $x \\neq 1$",
   "hint": "Bagi dengan $y - 1$, lalu ganti nama variabel.",
   "explain": "Bukan kebalikan pecahan: invers adalah mesin mundur.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$f^{-1}(x) = \\frac{2x + 4}{x - 1}$, $x \\neq 1$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Titik $(2, -3)$ terletak pada $y = f(x)$. Tentukan bayangannya pada $y = 2f(x - 1) + 4$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Koordinat $x$ bayangannya?",
   "answer": "3",
   "hint": "$x - 1$ di dalam kurung menggeser ke kanan 1.",
   "explain": "$2 + 1 = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Koordinat $y$ bayangannya?",
   "answer": "-2",
   "hint": "Kalikan 2, lalu tambah 4.",
   "explain": "$2(-3) + 4 = -2$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Bayangannya $(3, -2)$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Tentukan asimtot kurva $y = \\dfrac{3x - 2}{x + 4}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Asimtot tegak $x = ?$",
   "answer": "-4",
   "hint": "Penyebut nol.",
   "explain": "$x + 4 = 0$, jadi $x = -4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Asimtot datar $y = ?$",
   "answer": "3",
   "hint": "Untuk $x$ besar, $y \\to \\frac{a}{c}$.",
   "explain": "$\\frac{3}{1} = 3$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Asimtot $x = -4$ dan $y = 3$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "$f(x) = x^2 - 4x$. (a) Nilai $k$ terbesar agar $f$ dengan daerah asal $x \\leq k$ satu-satu? (b) Tentukan asimtot tegak dan titik stasioner $y = \\dfrac{1}{f(x)}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "(a) Berapa $k$?",
   "answer": "2",
   "hint": "Cari puncak parabola: $x = -\\frac{b}{2a}$.",
   "explain": "Puncak di $x = 2$; sebelum itu grafik selalu turun.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "(b) Asimtot tegak $\\frac{1}{f}$?",
   "options": [
    "$x = 0$ dan $x = 4$",
    "$x = 2$",
    "$x = -4$ dan $x = 0$"
   ],
   "answer": "$x = 0$ dan $x = 4$",
   "hint": "Akar-akar $f$.",
   "explain": "$x(x - 4) = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Titik stasioner $\\frac{1}{f}$?",
   "options": [
    "Maksimum $\\left(2, -\\frac{1}{4}\\right)$",
    "Minimum $\\left(2, -\\frac{1}{4}\\right)$",
    "Maksimum $(2, -4)$"
   ],
   "answer": "Maksimum $\\left(2, -\\frac{1}{4}\\right)$",
   "hint": "Minimum $f$ di $(2, -4)$.",
   "explain": "Minimum menjadi maksimum, $y = \\frac{1}{-4}$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "(a) $k = 2$. (b) Asimtot tegak $x = 0$ dan $x = 4$; maksimum $\\left(2, -\\frac{1}{4}\\right)$."
}
```
