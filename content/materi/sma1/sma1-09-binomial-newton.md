---
id: sma1-09-binomial-newton
judul: Ekspansi Binomial
jenjang: sma1
moe: "Additional Mathematics · A5 Binomial expansions"
prasyarat: [smp2-02-ekspansi-faktorisasi, smp3-01-bentuk-baku-eksponen]
durasi_menit: 60
---

## Kenapa belajar ini?

Menguraikan $(a + b)^2$ itu mudah. Tetapi bagaimana dengan $(a + b)^{10}$? Mengalikan sepuluh kurung satu per satu sangat lama. Teorema binomial memberi semua suku sekaligus. Teorema ini juga dipakai untuk menaksir bunga tabungan, peluang, dan nanti deret di kalkulus.

## Analogi

Bayangkan ada $n$ **kantong** berjajar. Setiap kantong berisi dua kartu: kartu $a$ dan kartu $b$. Kamu mengambil **tepat satu kartu dari setiap kantong**, lalu mengalikan semua kartu yang terambil.

Menguraikan $(a + b)^n = (a + b)(a + b)\cdots(a + b)$ sama persis dengan menjumlahkan hasil dari **semua cara** mengambil kartu.

Misalnya kamu mengambil kartu $b$ dari $r$ kantong dan kartu $a$ dari sisanya. Hasilnya $a^{n-r}b^r$. Berapa kali hasil ini muncul? Sebanyak cara memilih $r$ kantong dari $n$ kantong. Itulah koefisien binomial.

```anim
{"type": "persamaan", "title": "Tiga kantong: (a + b)³", "baris": [{"tex": "(a + b)(a + b)(a + b)", "say": "Tiga kantong, masing-masing berisi kartu $a$ dan kartu $b$."}, {"tex": "aaa + (aab + aba + baa) + (abb + bab + bba) + bbb", "say": "Tulis semua cara mengambil satu kartu dari setiap kantong: ada $2^3 = 8$ cara.", "op": "semua cara"}, {"tex": "a^3 + 3a^2b + 3ab^2 + b^3", "say": "Kelompokkan. Kartu $b$ dari tepat 1 kantong ada $\\binom{3}{1} = 3$ cara, dari 2 kantong ada $\\binom{3}{2} = 3$ cara.", "op": "kelompokkan"}]}
```

## Konsep

### Notasi faktorial

Untuk bilangan bulat positif $n$:

$$
n! = n \times (n - 1) \times \dots \times 2 \times 1
$$

Contoh: $5! = 120$. Didefinisikan $0! = 1$, supaya rumus di bawah tetap berlaku saat $r = 0$ atau $r = n$.

### Kombinasi

Banyak cara memilih $r$ benda dari $n$ benda (urutan tidak penting) ditulis $\binom{n}{r}$ atau ${}^nC_r$:

$$
\binom{n}{r} = \frac{n!}{r!\,(n - r)!}
$$

Alasannya: menyusun $r$ benda berurutan dari $n$ ada $n(n-1)\cdots(n-r+1) = \frac{n!}{(n-r)!}$ cara. Setiap pilihan yang sama terhitung $r!$ kali (karena urutannya bisa diacak), jadi dibagi $r!$.

Sifat penting: $\binom{n}{0} = \binom{n}{n} = 1$ dan $\binom{n}{r} = \binom{n}{n - r}$. Memilih $r$ kantong untuk kartu $b$ sama dengan memilih $n - r$ kantong untuk kartu $a$.

```anim
{"type": "persamaan", "title": "Menghitung C(5, 2)", "baris": [{"tex": "\\binom{5}{2} = \\frac{5!}{2!\\,3!}", "say": "Pilih 2 kantong dari 5."}, {"tex": "= \\frac{5 \\times 4 \\times 3!}{2 \\times 1 \\times 3!}", "say": "Tulis $5! = 5 \\times 4 \\times 3!$ supaya $3!$ bisa dicoret.", "op": "coret $3!$"}, {"tex": "= \\frac{20}{2} = 10", "say": "Ada 10 cara memilih 2 kantong dari 5."}]}
```

### Segitiga Pascal

Koefisien $\binom{n}{r}$ untuk $n$ kecil tersusun dalam segitiga Pascal. Setiap bilangan adalah jumlah dua bilangan di atasnya.

```visual
{"type": "table", "head": ["n", "r = 0", "r = 1", "r = 2", "r = 3", "r = 4", "r = 5"], "rows": [["0", "1", "", "", "", "", ""], ["1", "1", "1", "", "", "", ""], ["2", "1", "2", "1", "", "", ""], ["3", "1", "3", "3", "1", "", ""], ["4", "1", "4", "6", "4", "1", ""], ["5", "1", "5", "10", "10", "5", "1"]], "caption": "Segitiga Pascal: baris n berisi C(n, 0), C(n, 1), ..., C(n, n)."}
```

```anim
{"type": "persamaan", "title": "Membuat baris n = 5 dari baris n = 4", "baris": [{"tex": "1,\\ 4,\\ 6,\\ 4,\\ 1", "say": "Mulai dari baris $n = 4$."}, {"tex": "1,\\ 1+4,\\ 4+6,\\ 6+4,\\ 4+1,\\ 1", "say": "Setiap bilangan baru = jumlah dua bilangan di atasnya. Ujungnya selalu 1.", "op": "jumlahkan berdampingan"}, {"tex": "1,\\ 5,\\ 10,\\ 10,\\ 5,\\ 1", "say": "Baris $n = 5$. Cocok dengan $\\binom{5}{2} = 10$."}]}
```

### Teorema binomial

Untuk $n$ bilangan bulat positif:

$$
(a + b)^n = \sum_{r=0}^{n} \binom{n}{r} a^{n-r} b^r = a^n + \binom{n}{1}a^{n-1}b + \binom{n}{2}a^{n-2}b^2 + \dots + b^n
$$

Pola yang terlihat: pangkat $a$ turun dari $n$ ke $0$, pangkat $b$ naik dari $0$ ke $n$, dan jumlah pangkat di setiap suku selalu $n$. Ada $n + 1$ suku.

Bentuk khusus yang sering dipakai:

$$
(1 + x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \dots + x^n
$$

### Suku umum

Suku ke-$(r + 1)$ adalah

$$
T_{r+1} = \binom{n}{r} a^{n-r} b^r
$$

Perhatikan: suku **pertama** memakai $r = 0$. Untuk mencari suku tertentu (misalnya yang memuat $x^3$ atau yang bebas $x$), tulis $T_{r+1}$, kumpulkan pangkat $x$, lalu cari $r$.

```anim
{"type": "persamaan", "title": "Koefisien x² pada (x + 3)⁵", "baris": [{"tex": "T_{r+1} = \\binom{5}{r} x^{5-r}\\, 3^r", "say": "Tulis suku umum dengan $a = x$, $b = 3$."}, {"tex": "5 - r = 2 \\Rightarrow r = 3", "say": "Pangkat $x$ harus 2.", "op": "cari $r$"}, {"tex": "T_4 = \\binom{5}{3} x^2\\, 3^3 = 10 \\times 27\\, x^2", "say": "Substitusikan $r = 3$: ini suku ke-4.", "op": "substitusi"}, {"tex": "270x^2", "say": "Koefisien $x^2$ adalah 270."}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menguraikan penuh

```soal
{
 "title": "Contoh 1",
 "text": "Uraikan $(2 + x)^4$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Koefisien dari baris $n = 4$ segitiga Pascal ...",
   "options": [
    "1, 4, 6, 4, 1",
    "1, 3, 3, 1",
    "1, 5, 10, 10, 5, 1"
   ],
   "answer": "1, 4, 6, 4, 1",
   "hint": "Ada $n + 1 = 5$ suku.",
   "explain": "Baris $n = 4$: 1, 4, 6, 4, 1.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Pangkat 2 dan pangkat $x$ pada setiap suku ...",
   "options": [
    "Pangkat 2 turun 4 ke 0, pangkat $x$ naik 0 ke 4",
    "Keduanya naik dari 0 ke 4",
    "Pangkat 2 selalu 4"
   ],
   "answer": "Pangkat 2 turun 4 ke 0, pangkat $x$ naik 0 ke 4",
   "hint": "Jumlah pangkat di setiap suku selalu 4.",
   "explain": "$2^4, 2^3x, 2^2x^2, 2x^3, x^4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Suku pertama $1 \\cdot 2^4$ = ?",
   "answer": "16",
   "hint": "$2^4$.",
   "explain": "16.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Koefisien suku kedua $4 \\cdot 2^3$ = ?",
   "answer": "32",
   "hint": "$2^3 = 8$.",
   "explain": "$32x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Koefisien suku ketiga $6 \\cdot 2^2$ = ?",
   "answer": "24",
   "hint": "$2^2 = 4$.",
   "explain": "$24x^2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Koefisien suku keempat $4 \\cdot 2$ = ?",
   "answer": "8",
   "hint": "$2^1 = 2$.",
   "explain": "$8x^3$, lalu suku terakhir $x^4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: substitusi $x = 1$ ke hasilmu, $16 + 32 + 24 + 8 + 1$ = ?",
   "answer": "81",
   "hint": "Jumlahkan semua koefisien.",
   "explain": "81, sama dengan $3^4$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$(2 + x)^4 = 16 + 32x + 24x^2 + 8x^3 + x^4$."
}
```

### Contoh 2: Koefisien suku tertentu

```soal
{
 "title": "Contoh 2",
 "text": "Tentukan koefisien $x^3$ pada uraian $(3x - 2)^5$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Suku umumnya ...",
   "options": [
    "$\\binom{5}{r}(3x)^{5-r}(-2)^r$",
    "$\\binom{5}{r}(3x)^{5-r}2^r$",
    "$\\binom{5}{r}3x^{5-r}(-2)^r$"
   ],
   "answer": "$\\binom{5}{r}(3x)^{5-r}(-2)^r$",
   "hint": "$a = 3x$ dan $b = -2$ masuk utuh ke dalam pangkat.",
   "explain": "Tanda negatif dan koefisien 3 ikut dipangkatkan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Pangkat $x$ adalah $5 - r$. Agar sama dengan 3, $r$ = ?",
   "answer": "2",
   "hint": "$5 - r = 3$.",
   "explain": "$r = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\binom{5}{2}$ = ?",
   "answer": "10",
   "hint": "$\\frac{5 \\times 4}{2}$.",
   "explain": "10, sesuai baris $n = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$3^3$ = ?",
   "answer": "27",
   "hint": "$(3x)^3 = 27x^3$, bukan $3x^3$.",
   "explain": "27.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Koefisien $x^3 = 10 \\times 27 \\times (-2)^2$ = ?",
   "answer": "1080",
   "hint": "$(-2)^2 = 4$.",
   "explain": "$10 \\times 27 \\times 4 = 1080$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: tanda koefisiennya ...",
   "options": [
    "Positif, karena $(-2)^2 > 0$",
    "Negatif, karena ada $-2$"
   ],
   "answer": "Positif, karena $(-2)^2 > 0$",
   "hint": "Pangkat genap dari bilangan negatif.",
   "explain": "$r = 2$ genap, jadi positif. Pangkat total $3 + 2 = 5$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Koefisien $x^3$ adalah 1080."
}
```

### Contoh 3: Suku bebas $x$

```soal
{
 "title": "Contoh 3",
 "text": "Tentukan suku yang tidak memuat $x$ pada uraian $\\left(x^2 + \\dfrac{2}{x}\\right)^6$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Suku umumnya ...",
   "options": [
    "$\\binom{6}{r}(x^2)^{6-r}\\left(\\frac{2}{x}\\right)^r$",
    "$\\binom{6}{r}x^{6-r}\\left(\\frac{2}{x}\\right)^r$",
    "$\\binom{6}{r}(x^2)^r\\left(\\frac{2}{x}\\right)^{6-r}$"
   ],
   "answer": "$\\binom{6}{r}(x^2)^{6-r}\\left(\\frac{2}{x}\\right)^r$",
   "hint": "$a = x^2$, $b = \\frac{2}{x}$.",
   "explain": "$\\binom{6}{r}2^r x^{12 - 2r} x^{-r}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Pangkat $x$ setelah dikumpulkan ...",
   "options": [
    "$12 - 3r$",
    "$12 - r$",
    "$12 + r$",
    "$6 - 3r$"
   ],
   "answer": "$12 - 3r$",
   "hint": "$\\left(\\frac{1}{x}\\right)^r = x^{-r}$: pangkat dikurangi.",
   "explain": "$12 - 2r - r = 12 - 3r$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Bebas $x$ berarti $12 - 3r = 0$. $r$ = ?",
   "answer": "4",
   "hint": "Bagi 12 dengan 3.",
   "explain": "$r = 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $\\binom{6}{4}$ = ?",
   "answer": "15",
   "hint": "$\\binom{6}{4} = \\binom{6}{2}$.",
   "explain": "$\\frac{6 \\times 5}{2} = 15$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Suku bebas $x$: $15 \\times 2^4$ = ?",
   "answer": "240",
   "hint": "$2^4 = 16$.",
   "explain": "$15 \\times 16 = 240$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: ini suku ke berapa?",
   "answer": "5",
   "hint": "Suku ke-$(r + 1)$.",
   "explain": "$r = 4$, jadi suku ke-5. Pangkat: $x^4 \\cdot x^{-4} = x^0$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Suku bebas $x$ adalah 240 (suku ke-5)."
}
```

### Contoh 4: Soal cerita, tabungan Siti

```soal
{
 "title": "Contoh 4",
 "text": "Siti menabung Rp5.000.000 dengan bunga majemuk 3% per tahun. Tabungan setelah 5 tahun adalah $5.000.000 \\times 1{,}03^5$. Taksir $1{,}03^5$ dengan empat suku pertama uraian binomial, lalu taksir saldonya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tulis sebagai binomial.",
   "options": [
    "$(1 + 0{,}03)^5$",
    "$(1 + 0{,}3)^5$",
    "$(1 + 3)^5$"
   ],
   "answer": "$(1 + 0{,}03)^5$",
   "hint": "3% = 0,03.",
   "explain": "$n = 5$, $x = 0{,}03$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Empat suku pertama $(1 + x)^5$ ...",
   "options": [
    "$1 + 5x + 10x^2 + 10x^3$",
    "$1 + 5x + 5x^2 + 5x^3$",
    "$1 + x + x^2 + x^3$"
   ],
   "answer": "$1 + 5x + 10x^2 + 10x^3$",
   "hint": "Baris $n = 5$: 1, 5, 10, 10, 5, 1.",
   "explain": "Koefisien 1, 5, 10, 10.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $5(0{,}03)$ = ?",
   "answer": "0,15",
   "hint": "Kalikan biasa.",
   "explain": "$0{,}15$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$10(0{,}03)^2$ = ?",
   "answer": "0,009",
   "hint": "$0{,}03^2 = 0{,}0009$.",
   "explain": "$0{,}009$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$10(0{,}03)^3$ = ?",
   "answer": "0,00027",
   "hint": "$0{,}03^3 = 0{,}000027$.",
   "explain": "$0{,}00027$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Jumlah keempat suku = ?",
   "answer": "1,15927",
   "hint": "$1 + 0{,}15 + 0{,}009 + 0{,}00027$.",
   "explain": "$1{,}15927$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Taksiran saldo $5.000.000 \\times 1{,}15927$ = ?",
   "answer": "5796350",
   "hint": "Geser koma: kalikan 5 juta.",
   "explain": "Rp5.796.350.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: nilai sebenarnya sekitar Rp5.796.370. Kenapa selisihnya kecil?",
   "options": [
    "Suku sisa ($5x^4$ dan $x^5$) sangat kecil karena $x$ kecil",
    "Karena bunganya tetap",
    "Karena 5 tahun itu singkat"
   ],
   "answer": "Suku sisa ($5x^4$ dan $x^5$) sangat kecil karena $x$ kecil",
   "hint": "Bandingkan ukuran tiap suku: makin lama makin kecil.",
   "explain": "Selisih hanya sekitar Rp20.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Saldo setelah 5 tahun sekitar Rp5.796.350."
}
```

### Contoh 5: Mencari $n$

```soal
{
 "title": "Contoh 5",
 "text": "Pada uraian $(1 + 2x)^n$, koefisien $x^2$ adalah 60. Tentukan $n$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Suku yang memuat $x^2$ ...",
   "options": [
    "$\\binom{n}{2}(2x)^2 = 4\\binom{n}{2}x^2$",
    "$\\binom{n}{2}2x^2$",
    "$\\binom{n}{3}(2x)^2$"
   ],
   "answer": "$\\binom{n}{2}(2x)^2 = 4\\binom{n}{2}x^2$",
   "hint": "Suku $x^2$ memakai $r = 2$; seluruh $2x$ dikuadratkan.",
   "explain": "$T_3 = 4\\binom{n}{2}x^2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $4 \\cdot \\frac{n(n-1)}{2} = 60$. Berapa $n(n - 1)$?",
   "answer": "30",
   "hint": "$2n(n - 1) = 60$.",
   "explain": "$n(n - 1) = 30$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $n^2 - n - 30 = (n - 6)(n + 5) = 0$. Karena $n$ bulat positif, $n$ = ?",
   "answer": "6",
   "hint": "Pilih akar yang positif.",
   "explain": "$n = 6$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $\\binom{6}{2} \\times 4$ = ?",
   "answer": "60",
   "hint": "$\\binom{6}{2} = 15$.",
   "explain": "60. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$n = 6$."
}
```

## Kesalahan yang sering terjadi

- **Lupa memangkatkan koefisien.** Menulis $(3x)^3 = 3x^3$. Yang benar $27x^3$; seluruh isi kurung ikut dipangkatkan.
- **Mengabaikan tanda negatif.** Pada $(3x - 2)^5$, $b = -2$, bukan $2$. Suku dengan $r$ ganjil bertanda negatif.
- **Salah nomor suku.** Suku ke-5 memakai $r = 4$, bukan $r = 5$, karena $T_{r+1}$.
- **Salah menghitung pangkat pada pecahan.** $\left(\frac{2}{x}\right)^r = 2^r x^{-r}$, jadi pangkat $x$ dikurangi, bukan ditambah.
- **Menganggap $0! = 0$.** Definisinya $0! = 1$, sehingga $\binom{n}{0} = 1$.

## Ringkasan

- $n! = n(n-1)\cdots 1$, $0! = 1$, dan $\binom{n}{r} = \frac{n!}{r!(n - r)!}$.
- $(a + b)^n = \sum_{r=0}^{n}\binom{n}{r}a^{n-r}b^r$: ambil satu kartu dari setiap kantong.
- Suku umum $T_{r+1} = \binom{n}{r}a^{n-r}b^r$; suku pertama $r = 0$.
- Untuk suku tertentu: tulis $T_{r+1}$, kumpulkan pangkat $x$, cari $r$, lalu hitung.
- Untuk $x$ kecil, beberapa suku pertama $(1 + x)^n$ sudah memberi taksiran yang baik.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung $\\binom{7}{3}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\binom{7}{3} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1}$. Pembilangnya = ?",
   "answer": "210",
   "hint": "Kalikan tiga bilangan.",
   "explain": "$7 \\times 6 \\times 5 = 210$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Bagi dengan $3! = 6$. Hasilnya = ?",
   "answer": "35",
   "hint": "$210 \\div 6$.",
   "explain": "35.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\binom{7}{3} = 35$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Uraikan $(1 - x)^5$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Koefisien dari baris $n = 5$ ...",
   "options": [
    "1, 5, 10, 10, 5, 1",
    "1, 4, 6, 4, 1",
    "1, 5, 10, 5, 1"
   ],
   "answer": "1, 5, 10, 10, 5, 1",
   "hint": "Ada 6 suku.",
   "explain": "Baris $n = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Uraiannya ...",
   "options": [
    "$1 - 5x + 10x^2 - 10x^3 + 5x^4 - x^5$",
    "$1 - 5x - 10x^2 - 10x^3 - 5x^4 - x^5$",
    "$1 + 5x + 10x^2 + 10x^3 + 5x^4 + x^5$"
   ],
   "answer": "$1 - 5x + 10x^2 - 10x^3 + 5x^4 - x^5$",
   "hint": "$b = -x$: pangkat ganjil bertanda negatif.",
   "explain": "Tanda berganti-ganti.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$(1 - x)^5 = 1 - 5x + 10x^2 - 10x^3 + 5x^4 - x^5$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Tentukan koefisien $x^4$ pada uraian $(2 + x)^7$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Suku umum $\\binom{7}{r}2^{7-r}x^r$. Untuk $x^4$, $r$ = ?",
   "answer": "4",
   "hint": "Pangkat $x$ adalah $r$.",
   "explain": "$r = 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\binom{7}{4}$ = ?",
   "answer": "35",
   "hint": "$\\binom{7}{4} = \\binom{7}{3}$.",
   "explain": "35.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Koefisien $= 35 \\times 2^3$ = ?",
   "answer": "280",
   "hint": "$2^{7-4} = 8$.",
   "explain": "$35 \\times 8 = 280$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Koefisien $x^4$ adalah 280."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Tentukan suku bebas $x$ pada uraian $\\left(2x - \\dfrac{1}{x}\\right)^6$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Pangkat $x$ pada $\\binom{6}{r}(2x)^{6-r}\\left(-\\frac{1}{x}\\right)^r$ adalah ...",
   "options": [
    "$6 - 2r$",
    "$6 - r$",
    "$6 + r$"
   ],
   "answer": "$6 - 2r$",
   "hint": "$x^{6-r} \\cdot x^{-r}$.",
   "explain": "$6 - r - r = 6 - 2r$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Bebas $x$: $6 - 2r = 0$. $r$ = ?",
   "answer": "3",
   "hint": "Bagi 6 dengan 2.",
   "explain": "$r = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Suku bebas $= \\binom{6}{3} \\times 2^3 \\times (-1)^3$ = ?",
   "answer": "-160",
   "hint": "$\\binom{6}{3} = 20$; $(-1)^3 = -1$.",
   "explain": "$20 \\times 8 \\times (-1) = -160$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Suku bebas $x$ adalah $-160$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Koefisien $x^2$ pada uraian $(1 + 3x)^n$ adalah 135. Tentukan $n$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Persamaannya ...",
   "options": [
    "$9 \\cdot \\frac{n(n-1)}{2} = 135$",
    "$3 \\cdot \\frac{n(n-1)}{2} = 135$",
    "$9n = 135$"
   ],
   "answer": "$9 \\cdot \\frac{n(n-1)}{2} = 135$",
   "hint": "$(3x)^2 = 9x^2$.",
   "explain": "$\\binom{n}{2} \\cdot 9 = 135$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$n(n - 1)$ = ?",
   "answer": "30",
   "hint": "Kalikan 2, bagi 9.",
   "explain": "$270 \\div 9 = 30$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$n$ = ?",
   "answer": "6",
   "hint": "Dua bilangan berurutan yang hasil kalinya 30.",
   "explain": "$6 \\times 5 = 30$, jadi $n = 6$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$n = 6$."
}
```
