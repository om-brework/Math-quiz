---
id: sma1-05-fungsi-kuadrat-lanjut
judul: Fungsi Kuadrat Lanjut
jenjang: sma1
moe: "Additional Mathematics · A1 Quadratic functions"
prasyarat: [smp2-04-fungsi-kuadrat, smp3-02-persamaan-kuadrat-lanjut]
durasi_menit: 60
---

## Kenapa belajar ini?

Banyak masalah nyata meminta nilai terbaik: luas kandang terbesar dari pagar terbatas, tinggi maksimum bola, atau harga tiket yang memberi pendapatan terbesar. Jika masalahnya bisa dimodelkan dengan fungsi kuadrat, kita bisa menemukan nilai terbaik itu dengan tepat, tanpa coba-coba.

## Analogi

Bayangkan grafik $y = ax^2 + bx + c$ sebagai **lembah** (jika $a > 0$) atau **bukit** (jika $a < 0$).

Di lembah, ada satu titik terendah: **dasar lembah**. Ketinggian di titik mana pun sama dengan "tinggi dasar lembah" ditambah "tambahan karena kamu menjauh dari dasar". Tambahan itu tidak pernah negatif. Makin jauh kamu berjalan dari dasar, makin tinggi posisimu.

```anim
{"type": "grafik", "title": "Lembah dan bukit", "xmin": -6, "xmax": 6, "ymin": -3, "ymax": 8, "kurva": [{"f": "(x-2)^2+1", "label": "a > 0\\ \\text{(lembah)}"}, {"f": "-(x+2)^2+5", "label": "a < 0\\ \\text{(bukit)}"}], "titik": [{"x": 2, "y": 1, "label": "dasar (2, 1)"}, {"x": -2, "y": 5, "label": "puncak (-2, 5)"}], "langkah": [{"say": "Bidang koordinat.", "kurva": 0, "titik": 0}, {"say": "$y = (x-2)^2 + 1$: lembah, karena $a = 1 > 0$.", "kurva": 1, "titik": 0}, {"say": "Dasar lembahnya di $(2, 1)$. Di mana pun kamu berdiri, $y = 1 + $ tambahan yang tidak negatif.", "kurva": 1, "titik": 1}, {"say": "$y = -(x+2)^2 + 5$: bukit, karena $a = -1 < 0$. Puncaknya di $(-2, 5)$.", "kurva": 2, "titik": 2}]}
```

Melengkapkan kuadrat adalah cara menulis fungsi persis dalam bentuk itu:

$$
y = a(x - h)^2 + k
$$

Di sini $k$ adalah tinggi dasar lembah, dan $a(x-h)^2$ adalah tambahannya. Tambahan itu bernilai nol hanya ketika kamu berdiri tepat di dasar, yaitu $x = h$.

## Konsep

### Melengkapkan kuadrat

```anim
{"type": "persamaan", "title": "Melengkapkan kuadrat x² + 4x + 1", "baris": [{"tex": "y = x^2 + 4x + 1", "say": "Koefisien $x$ adalah 4. Setengahnya 2."}, {"tex": "x^2 + 4x = (x + 2)^2 - 4", "say": "Sebab $(x+2)^2 = x^2 + 4x + 4$; kelebihan 4 dikurangkan lagi.", "op": "$p = \\frac{4}{2}$"}, {"tex": "y = (x + 2)^2 - 4 + 1", "say": "Ganti $x^2 + 4x$ dengan bentuk barunya.", "op": "substitusi"}, {"tex": "y = (x + 2)^2 - 3", "say": "Dasar lembah di $(-2, -3)$: tambahan $(x+2)^2$ nol saat $x = -2$."}]}
```

Kuncinya adalah identitas $(x + p)^2 = x^2 + 2px + p^2$. Jadi $x^2 + 2px = (x+p)^2 - p^2$. Untuk bentuk umum, keluarkan $a$ dulu:

$$
ax^2 + bx + c = a\left(x^2 + \frac{b}{a}x\right) + c = a\left[\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a^2}\right] + c
$$

Setelah disederhanakan:

$$
ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 + \frac{4ac - b^2}{4a}
$$

Jadi puncak (titik balik) parabola ada di $x = -\dfrac{b}{2a}$, dengan nilai $y = \dfrac{4ac - b^2}{4a}$.

### Nilai maksimum dan minimum

Dari bentuk $y = a(x-h)^2 + k$, dan karena $(x-h)^2 \ge 0$ untuk semua $x$:

- Jika $a > 0$ (lembah): $a(x-h)^2 \ge 0$, jadi $y \ge k$. **Nilai minimum** $k$, dicapai saat $x = h$.
- Jika $a < 0$ (bukit): $a(x-h)^2 \le 0$, jadi $y \le k$. **Nilai maksimum** $k$, dicapai saat $x = h$.

Titik $(h, k)$ disebut titik balik, dan garis $x = h$ adalah sumbu simetri.

### Definit positif dan definit negatif

Kadang kita ingin tahu apakah sebuah fungsi kuadrat **selalu positif** untuk semua $x$. Dalam analogi: apakah dasar lembah ada di atas permukaan tanah (sumbu $x$)?

Tulis $D = b^2 - 4ac$ (diskriminan). Dari bentuk melengkapkan kuadrat:

$$
ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 - \frac{D}{4a}
$$

- **Definit positif** ($ax^2+bx+c > 0$ untuk semua $x$): syaratnya $a > 0$ **dan** $D < 0$. Lembah menghadap ke atas, dan dasarnya $-\frac{D}{4a} > 0$ berada di atas sumbu $x$.
- **Definit negatif** ($ax^2+bx+c < 0$ untuk semua $x$): syaratnya $a < 0$ **dan** $D < 0$. Bukit menghadap ke bawah, dan puncaknya di bawah sumbu $x$.

Contoh cepat: $-x^2 + 4x - 7 = -(x-2)^2 - 3$. Puncaknya $-3$, jadi fungsi ini selalu negatif. Cocok dengan $a = -1 < 0$ dan $D = 16 - 28 = -12 < 0$.

```anim
{"type": "grafik", "title": "Definit positif dan definit negatif", "xmin": -4, "xmax": 6, "ymin": -9, "ymax": 9, "kurva": [{"f": "x^2-2x+3", "label": "x^2-2x+3"}, {"f": "-x^2+4x-7", "label": "-x^2+4x-7"}], "titik": [{"x": 1, "y": 2, "label": "(1, 2)"}, {"x": 2, "y": -3, "label": "(2, -3)"}], "langkah": [{"say": "Sumbu $x$ adalah permukaan tanah.", "kurva": 0, "titik": 0}, {"say": "$x^2 - 2x + 3 = (x-1)^2 + 2$: $a > 0$, $D = 4 - 12 < 0$. Dasar lembah di atas tanah, jadi selalu positif.", "kurva": 1, "titik": 1}, {"say": "$-x^2 + 4x - 7 = -(x-2)^2 - 3$: $a < 0$, $D < 0$. Puncak bukit di bawah tanah, jadi selalu negatif.", "kurva": 2, "titik": 2}]}
```

### Fungsi kuadrat sebagai model

Untuk soal cerita, polanya selalu sama:

1. Pilih variabel $x$ untuk besaran yang bisa kita atur.
2. Tulis besaran yang ingin dioptimalkan sebagai fungsi kuadrat dari $x$.
3. Lengkapkan kuadrat untuk menemukan nilai terbaik.
4. Pastikan nilai $x$ itu masuk akal di dunia nyata (misalnya panjang tidak negatif).

```anim
{"type": "bangun", "title": "Memodelkan kandang di tepi tembok", "titik": {"A": [0, 0], "B": [0, 3], "C": [6, 3], "D": [6, 0]}, "sisi": [["A", "D", "\\text{tembok}"], ["A", "B", "x"], ["B", "C", "60 - 2x"], ["C", "D", "x"]], "langkah": [{"say": "Satu sisi kandang menempel tembok, jadi tidak perlu kawat.", "sisi": 1}, {"say": "Pilih $x$ = panjang sisi yang tegak lurus tembok. Ada dua sisi seperti itu.", "sisi": 4, "sorot": ["AB", "CD"]}, {"say": "Kawat 60 m dipakai untuk $x + x + $ sisi depan, jadi sisi depan $= 60 - 2x$.", "sisi": 4, "sorot": ["BC"]}, {"say": "Luas $= x(60 - 2x)$: sebuah fungsi kuadrat dalam $x$. Tinggal lengkapkan kuadrat.", "sisi": 4}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Nilai minimum

```soal
{
 "title": "Contoh 1",
 "text": "Tentukan nilai minimum $y = x^2 - 6x + 11$ dan nilai $x$ saat minimum terjadi.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Identifikasi bentuk. Grafiknya ...",
   "options": [
    "Lembah, jadi punya minimum",
    "Bukit, jadi punya maksimum"
   ],
   "answer": "Lembah, jadi punya minimum",
   "hint": "Lihat tanda $a$.",
   "explain": "$a = 1 > 0$: lembah.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Setengah dari koefisien $x$ = ?",
   "answer": "-3",
   "hint": "Koefisien $x$ adalah $-6$.",
   "explain": "$-6 \\div 2 = -3$, jadi $x^2 - 6x = (x-3)^2 - 9$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Bentuk lengkapnya $y$ = ...",
   "options": [
    "$(x-3)^2 + 2$",
    "$(x-3)^2 + 20$",
    "$(x+3)^2 + 2$",
    "$(x-3)^2 - 2$"
   ],
   "answer": "$(x-3)^2 + 2$",
   "hint": "$(x-3)^2 - 9 + 11$.",
   "explain": "$-9 + 11 = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tambahan $(x-3)^2$ bernilai nol saat $x$ = ?",
   "answer": "3",
   "hint": "Kapan $x - 3 = 0$?",
   "explain": "Saat $x = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Nilai minimum $y$ = ?",
   "answer": "2",
   "hint": "Saat tambahannya nol, yang tersisa hanya konstanta.",
   "explain": "Minimum $y = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung $y$ saat $x = 4$ dari bentuk awal.",
   "answer": "3",
   "hint": "$16 - 24 + 11$.",
   "explain": "$y = 3 > 2$. Titik lain memang lebih tinggi dari dasar lembah.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Nilai minimum 2, terjadi saat $x = 3$."
}
```

### Contoh 2: Nilai maksimum dengan $a$ negatif

```soal
{
 "title": "Contoh 2",
 "text": "Nyatakan $y = -2x^2 + 8x - 3$ dalam bentuk $a(x-h)^2 + k$, lalu tentukan nilai maksimumnya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Keluarkan $a$ dari suku yang memuat $x$.",
   "options": [
    "$-2(x^2 - 4x) - 3$",
    "$-2(x^2 + 4x) - 3$",
    "$-2(x^2 - 8x) - 3$"
   ],
   "answer": "$-2(x^2 - 4x) - 3$",
   "hint": "Bagi $-2x^2$ dan $8x$ dengan $-2$.",
   "explain": "$8x \\div (-2) = -4x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: $x^2 - 4x$ = ...",
   "options": [
    "$(x-2)^2 - 4$",
    "$(x-2)^2 + 4$",
    "$(x-4)^2 - 16$"
   ],
   "answer": "$(x-2)^2 - 4$",
   "hint": "Setengah dari $-4$ adalah $-2$.",
   "explain": "$(x-2)^2 = x^2 - 4x + 4$, jadi kurangi 4.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Uraikan $-2\\left[(x-2)^2 - 4\\right] - 3$. Konstantanya $-2(-4) - 3$ = ?",
   "answer": "5",
   "hint": "Suku $-4$ juga dikali $-2$.",
   "explain": "$8 - 3 = 5$, jadi $y = -2(x-2)^2 + 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Karena $a = -2 < 0$, titik $(2, 5)$ adalah ...",
   "options": [
    "Puncak bukit (maksimum)",
    "Dasar lembah (minimum)"
   ],
   "answer": "Puncak bukit (maksimum)",
   "hint": "$-2(x-2)^2 \\le 0$.",
   "explain": "$y$ paling besar 5.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Nilai maksimum $y$ = ?",
   "answer": "5",
   "hint": "Baca $k$.",
   "explain": "Maksimum $5$ saat $x = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $x = -\\frac{b}{2a}$ = ?",
   "answer": "2",
   "hint": "$b = 8$, $a = -2$.",
   "explain": "$-\\frac{8}{-4} = 2$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $y = -2(x-2)^2 + 5$, dengan nilai maksimum 5 saat $x = 2$."
}
```

### Contoh 3: Syarat definit positif

```soal
{
 "title": "Contoh 3",
 "text": "Tentukan nilai $k$ agar $2x^2 - 4x + k > 0$ untuk semua bilangan real $x$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Syarat definit positif adalah ...",
   "options": [
    "$a > 0$ dan $D < 0$",
    "$a > 0$ dan $D > 0$",
    "$D < 0$ saja",
    "$a < 0$ dan $D < 0$"
   ],
   "answer": "$a > 0$ dan $D < 0$",
   "hint": "Lembah menghadap ke atas dan dasarnya di atas sumbu $x$.",
   "explain": "$a = 2 > 0$ sudah terpenuhi; tinggal $D < 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: $D = (-4)^2 - 4(2)(k)$ = ...",
   "options": [
    "$16 - 8k$",
    "$-16 - 8k$",
    "$16 - 2k$",
    "$8 - 8k$"
   ],
   "answer": "$16 - 8k$",
   "hint": "$(-4)^2 = 16$.",
   "explain": "$D = 16 - 8k$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Selesaikan $16 - 8k < 0$.",
   "options": [
    "$k > 2$",
    "$k < 2$",
    "$k > -2$",
    "$k \\ge 2$"
   ],
   "answer": "$k > 2$",
   "hint": "Pindahkan $8k$ ke ruas kanan: $16 < 8k$.",
   "explain": "$8k > 16$, jadi $k > 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: untuk $k = 2$, $2x^2 - 4x + 2 = 2(x-1)^2$. Apakah selalu $> 0$?",
   "options": [
    "Tidak, bernilai 0 di $x = 1$",
    "Ya, selalu positif"
   ],
   "answer": "Tidak, bernilai 0 di $x = 1$",
   "hint": "Coba $x = 1$.",
   "explain": "$2(0)^2 = 0$, bukan lebih dari 0. Jadi batas $k = 2$ tidak ikut.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $k > 2$."
}
```

### Contoh 4: Soal cerita, kandang ayam

```soal
{
 "title": "Contoh 4",
 "text": "Pak Made punya kawat 60 m untuk membuat kandang ayam persegi panjang. Satu sisi kandang menempel tembok rumah, jadi tidak perlu kawat. Tentukan ukuran kandang agar luasnya maksimum.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Misalkan $x$ = panjang tiap sisi yang tegak lurus tembok. Sisi yang sejajar tembok = ...",
   "options": [
    "$60 - 2x$",
    "$60 - x$",
    "$30 - x$"
   ],
   "answer": "$60 - 2x$",
   "hint": "Ada dua sisi tegak lurus tembok.",
   "explain": "Kawat: $x + x + (60 - 2x) = 60$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Model luasnya $L$ = ...",
   "options": [
    "$-2x^2 + 60x$",
    "$2x^2 - 60x$",
    "$-x^2 + 60x$"
   ],
   "answer": "$-2x^2 + 60x$",
   "hint": "$L = x(60 - 2x)$, lalu uraikan.",
   "explain": "$L = 60x - 2x^2$, dengan $0 < x < 30$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Lengkapkan kuadrat. $L$ = ...",
   "options": [
    "$-2(x-15)^2 + 450$",
    "$-2(x-15)^2 + 225$",
    "$-2(x-30)^2 + 900$"
   ],
   "answer": "$-2(x-15)^2 + 450$",
   "hint": "$-2\\left[(x-15)^2 - 225\\right]$, lalu kalikan $-2$ ke $-225$.",
   "explain": "$-2 \\times (-225) = 450$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Luas maksimum saat $x$ = ?",
   "answer": "15",
   "hint": "Kapan $(x - 15)^2 = 0$?",
   "explain": "$x = 15$ m.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Sisi sejajar tembok = ?",
   "answer": "30",
   "hint": "$60 - 2x$.",
   "explain": "$60 - 30 = 30$ m.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Luas maksimum = ?",
   "answer": "450",
   "hint": "Baca $k$, atau kalikan kedua sisi.",
   "explain": "$15 \\times 30 = 450$ m².",
   "error": "salah-langkah-materi",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: luas jika $x = 14$ = ?",
   "answer": "448",
   "hint": "Sisi lainnya $60 - 28 = 32$.",
   "explain": "$14 \\times 32 = 448 < 450$. Begitu juga $x = 16$ memberi 448. Cocok dan simetris.",
   "error": "salah-langkah-materi",
   "suffix": "m²"
  }
 ],
 "conclusion": "Kandang 15 m (tegak lurus tembok) kali 30 m (sejajar tembok), luas maksimum 450 m²."
}
```

## Kesalahan yang sering terjadi

- **Lupa mengalikan $a$ ke suku pengurang.** Menulis $-2\left[(x-2)^2 - 4\right] - 3 = -2(x-2)^2 - 4 - 3$. Suku $-4$ juga ada di dalam kurung, jadi harus dikali $-2$ menjadi $+8$. Hasil benar: $-2(x-2)^2 + 5$.
- **Salah tanda pada $h$.** Dari $(x+5)^2 + 5$ menyimpulkan minimum saat $x = 5$. Tambahan bernilai nol saat $x + 5 = 0$, yaitu $x = -5$.
- **Tertukar maksimum dan minimum.** Selalu lihat tanda $a$ dulu: $a > 0$ lembah (minimum), $a < 0$ bukit (maksimum).
- **Syarat definit tidak lengkap.** Hanya memeriksa $D < 0$. Fungsi $-x^2 - 1$ punya $D < 0$, tetapi selalu negatif, bukan positif. Tanda $a$ juga wajib dicek.
- **Mengabaikan batas nyata.** Pada soal kandang, $x$ harus di antara $0$ dan $30$. Jawaban di luar batas itu tidak bermakna.

## Ringkasan

- Melengkapkan kuadrat: $ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 + \frac{4ac - b^2}{4a}$.
- Pada $y = a(x-h)^2 + k$, titik baliknya $(h, k)$. Jika $a > 0$, $k$ minimum; jika $a < 0$, $k$ maksimum.
- Definit positif: $a > 0$ dan $D < 0$. Definit negatif: $a < 0$ dan $D < 0$.
- Soal cerita: pilih variabel, susun model kuadrat, lengkapkan kuadrat, cek batas nyata.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Nyatakan $x^2 + 10x + 30$ dalam bentuk $(x + p)^2 + q$, lalu tentukan nilai minimumnya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "$x^2 + 10x$ = ...",
   "options": [
    "$(x+5)^2 - 25$",
    "$(x+5)^2 + 25$",
    "$(x+10)^2 - 100$"
   ],
   "answer": "$(x+5)^2 - 25$",
   "hint": "Setengah dari 10 adalah 5.",
   "explain": "$(x+5)^2 = x^2 + 10x + 25$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$q = -25 + 30$ = ?",
   "answer": "5",
   "hint": "Jumlahkan konstanta.",
   "explain": "Bentuknya $(x+5)^2 + 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Minimum terjadi saat $x$ = ?",
   "answer": "-5",
   "hint": "Kapan $x + 5 = 0$?",
   "explain": "$x = -5$, minimum 5.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$(x+5)^2 + 5$; minimum 5 saat $x = -5$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Tentukan nilai maksimum $y = 3 + 4x - x^2$ dan nilai $x$ saat maksimum terjadi.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Bentuk kuadrat sempurnanya $y$ = ...",
   "options": [
    "$-(x-2)^2 + 7$",
    "$-(x-2)^2 - 1$",
    "$-(x+2)^2 + 7$"
   ],
   "answer": "$-(x-2)^2 + 7$",
   "hint": "$y = -(x^2 - 4x) + 3$ dan $x^2 - 4x = (x-2)^2 - 4$.",
   "explain": "$-[(x-2)^2 - 4] + 3 = -(x-2)^2 + 7$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Nilai maksimum = ?",
   "answer": "7",
   "hint": "$a < 0$, jadi $k$ adalah maksimum.",
   "explain": "Maksimum 7.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Dicapai saat $x$ = ?",
   "answer": "2",
   "hint": "Kapan $x - 2 = 0$?",
   "explain": "$x = 2$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Maksimum 7 saat $x = 2$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Nyatakan $2x^2 + 12x + 7$ dalam bentuk $a(x + p)^2 + q$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Keluarkan 2.",
   "options": [
    "$2(x^2 + 6x) + 7$",
    "$2(x^2 + 12x) + 7$",
    "$2(x^2 + 6x + 7)$"
   ],
   "answer": "$2(x^2 + 6x) + 7$",
   "hint": "Bagi $12x$ dengan 2; konstanta 7 tetap di luar.",
   "explain": "$2(x^2 + 6x) + 7$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $p$ = ?",
   "answer": "3",
   "hint": "Setengah dari 6.",
   "explain": "$x^2 + 6x = (x+3)^2 - 9$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $q = 2(-9) + 7$ = ?",
   "answer": "-11",
   "hint": "Kalikan $-9$ dengan 2 dulu.",
   "explain": "$-18 + 7 = -11$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$2x^2 + 12x + 7 = 2(x+3)^2 - 11$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Tentukan nilai $p$ agar $x^2 + px + 16 > 0$ untuk semua $x$ real.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "$D$ = ...",
   "options": [
    "$p^2 - 64$",
    "$p^2 - 16$",
    "$p^2 + 64$"
   ],
   "answer": "$p^2 - 64$",
   "hint": "$D = b^2 - 4ac$ dengan $a = 1$, $c = 16$.",
   "explain": "$p^2 - 4(1)(16) = p^2 - 64$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$p^2 - 64 < 0$ berarti ...",
   "options": [
    "$-8 < p < 8$",
    "$p < 8$",
    "$p < -8$ atau $p > 8$"
   ],
   "answer": "$-8 < p < 8$",
   "hint": "$p^2 < 64$: $p$ di antara akar-akar $\\pm 8$.",
   "explain": "$a = 1 > 0$ sudah terpenuhi, jadi $-8 < p < 8$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$-8 < p < 8$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Tinggi bola yang dilempar Putu setelah $t$ detik adalah $h = 2 + 12t - 3t^2$ meter. Tentukan tinggi maksimum bola dan kapan tercapai.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Bentuk kuadrat sempurnanya $h$ = ...",
   "options": [
    "$-3(t-2)^2 + 14$",
    "$-3(t-2)^2 - 10$",
    "$-3(t-4)^2 + 50$"
   ],
   "answer": "$-3(t-2)^2 + 14$",
   "hint": "$h = -3(t^2 - 4t) + 2$.",
   "explain": "$-3[(t-2)^2 - 4] + 2 = -3(t-2)^2 + 12 + 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Tinggi maksimum tercapai saat $t$ = ?",
   "answer": "2",
   "hint": "Kapan $t - 2 = 0$?",
   "explain": "$t = 2$ detik.",
   "error": "salah-langkah-materi",
   "suffix": "detik"
  },
  {
   "kind": "number",
   "prompt": "Tinggi maksimum = ?",
   "answer": "14",
   "hint": "Baca $k$.",
   "explain": "14 m.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  }
 ],
 "conclusion": "Tinggi maksimum 14 m, tercapai saat $t = 2$ detik."
}
```
