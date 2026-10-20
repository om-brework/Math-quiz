---
id: smp3-01-bentuk-baku-eksponen
judul: Bentuk Baku dan Hukum Eksponen
jenjang: smp3
moe: "Secondary 3 · Number and Algebra · N1 Numbers and their operations"
prasyarat: [smp1-01-prima-fpb-kpk, smp1-03-pembulatan-estimasi, smp2-02-ekspansi-faktorisasi]
durasi_menit: 55
---

## Kenapa belajar ini?

Jarak Bumi ke Matahari sekitar 150.000.000 km, sedangkan ukuran sebuah bakteri sekitar 0,000002 m. Bilangan sebesar dan sekecil ini sulit dibaca dan mudah salah hitung nolnya. Hukum eksponen dan bentuk baku membuat bilangan seperti ini ringkas dan mudah dihitung.

## Analogi

Bayangkan sebuah **koloni bakteri** di laboratorium sekolah yang **menjadi 2 kali lipat setiap jam**. Mulai dengan 1 bakteri.

- Setelah 1 jam: $2$. Setelah 3 jam: $2 \times 2 \times 2 = 2^3 = 8$.
- **Pangkat** menyatakan **berapa jam berlalu**, dan bilangan pokok menyatakan **faktor pengali tiap jam**.

Hampir semua hukum eksponen bisa dimengerti dari cerita ini:

- Tunggu 3 jam, lalu 2 jam lagi: total 5 jam. Jadi $2^3 \times 2^2 = 2^5$.
- **0 jam** berlalu: koloni tidak berubah, faktornya 1. Jadi $2^0 = 1$.
- **Mundur** 3 jam ke masa lalu: koloni dibagi 2 tiga kali. Jadi $2^{-3} = \frac{1}{8}$.
- **Setengah jam**: faktor yang jika terjadi dua kali menghasilkan 2. Jadi $2^{1/2} = \sqrt{2}$.

```anim
{"type": "grafik", "title": "Koloni bakteri: banyak bakteri = 2 pangkat jam", "xmin": -3, "xmax": 4.5, "ymin": -1, "ymax": 17, "kurva": [{"f": "2^x", "label": "y = 2^x"}], "titik": [{"x": 0, "y": 1, "label": "0 jam: 1"}, {"x": 3, "y": 8, "label": "3 jam: 8"}, {"x": -1, "y": 0.5, "label": "mundur 1 jam: 1/2"}, {"x": 4, "y": 16, "label": "4 jam: 16"}], "langkah": [{"say": "Sumbu mendatar: jam yang berlalu. Sumbu tegak: banyak bakteri.", "kurva": 0, "titik": 0}, {"say": "Setiap maju 1 jam, banyak bakteri menjadi 2 kali lipat.", "kurva": 1, "titik": 0}, {"say": "Saat 0 jam, koloni belum berubah: $2^0 = 1$.", "kurva": 1, "titik": 1}, {"say": "Setelah 3 jam ada $2^3 = 8$ bakteri.", "kurva": 1, "titik": 2}, {"say": "Mundur 1 jam berarti dibagi 2: $2^{-1} = \\frac{1}{2}$. Bukan negatif!", "kurva": 1, "titik": 3}, {"say": "Setelah 4 jam ada $2^4 = 16$ bakteri.", "kurva": 1, "titik": 4}]}
```

```anim
{"type": "persamaan", "title": "Tunggu 3 jam, lalu 2 jam lagi", "baris": [{"tex": "2^3 \\times 2^2", "say": "Koloni tumbuh 3 jam, lalu 2 jam lagi."}, {"tex": "(2\\times2\\times2)\\times(2\\times2)", "say": "Tulis semua faktor pengalinya."}, {"tex": "2^{3+2}", "say": "Ada 3 + 2 faktor 2.", "op": "jumlahkan pangkat"}, {"tex": "2^5 = 32", "say": "Total 5 jam: 32 bakteri."}]}
```

Kita akan kembali ke koloni bakteri ini di setiap hukum dan contoh.

## Konsep

### Pangkat bilangan bulat positif

Untuk bilangan bulat positif $n$:

$$a^n = \underbrace{a \times a \times \cdots \times a}_{n \text{ faktor}}$$

$a$ disebut **bilangan pokok** dan $n$ disebut **pangkat** atau **eksponen**.

### Hukum-hukum eksponen

Untuk $a, b \ne 0$ dan pangkat $m, n$:

| Hukum | Rumus | Alasan (cerita bakteri) |
|---|---|---|
| Perkalian | $a^m \times a^n = a^{m+n}$ | $m$ jam lalu $n$ jam = $m + n$ jam |
| Pembagian | $a^m \div a^n = a^{m-n}$ | maju $m$ jam lalu mundur $n$ jam |
| Pangkat dari pangkat | $(a^m)^n = a^{mn}$ | $n$ kali periode $m$ jam = $mn$ jam |
| Pangkat perkalian | $(ab)^n = a^n b^n$ | dua koloni berbeda tumbuh bersama |
| Pangkat pembagian | $\left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}$ | sama dengan baris di atas |

Contoh alasan aljabarnya: $a^3 \times a^2 = (a \times a \times a) \times (a \times a) = a^5$. Faktor-faktornya tinggal dihitung.

### Pangkat nol dan pangkat negatif

Dari hukum pembagian, $a^3 \div a^3 = a^{0}$. Tetapi bilangan dibagi dirinya sendiri hasilnya 1. Supaya hukum tetap berlaku, kita **harus** mendefinisikan:

$$a^0 = 1 \quad (a \ne 0)$$

Dengan cara sama, $a^2 \div a^5 = a^{-3}$, padahal $\frac{a \times a}{a \times a \times a \times a \times a} = \frac{1}{a^3}$. Jadi:

$$a^{-n} = \frac{1}{a^n}$$

```anim
{"type": "persamaan", "title": "Mengapa a pangkat 0 sama dengan 1", "baris": [{"tex": "a^3 \\div a^3", "say": "Bagilah sebuah bilangan dengan dirinya sendiri."}, {"tex": "\\frac{a\\times a\\times a}{a\\times a\\times a} = 1", "say": "Semua faktor tercoret, hasilnya 1."}, {"tex": "a^3 \\div a^3 = a^{3-3} = a^0", "say": "Menurut hukum pembagian, pangkatnya dikurang.", "op": "kurangi pangkat"}, {"tex": "a^0 = 1", "say": "Kedua cara harus sama, jadi $a^0 = 1$."}]}
```

```anim
{"type": "persamaan", "title": "Mengapa pangkat negatif berarti membagi", "baris": [{"tex": "a^2 \\div a^5", "say": "Pembilang punya 2 faktor, penyebut 5 faktor."}, {"tex": "\\frac{a\\times a}{a\\times a\\times a\\times a\\times a} = \\frac{1}{a^3}", "say": "Coret 2 pasang faktor; sisa 3 faktor di bawah."}, {"tex": "a^{2-5} = a^{-3}", "say": "Hukum pembagian memberi pangkat −3.", "op": "kurangi pangkat"}, {"tex": "a^{-3} = \\frac{1}{a^3}", "say": "Jadi pangkat negatif artinya 1 dibagi pangkat positifnya."}]}
```

Pangkat negatif **tidak** membuat hasilnya negatif. Pangkat negatif berarti "mundur waktu", yaitu **membagi**. Akibatnya $\left(\frac{a}{b}\right)^{-n} = \left(\frac{b}{a}\right)^n$.

### Pangkat pecahan

Berapa $a^{1/2}$? Hukum pangkat dari pangkat memberi $\left(a^{1/2}\right)^2 = a^1 = a$. Jadi $a^{1/2}$ adalah bilangan yang dikuadratkan menjadi $a$, yaitu $\sqrt{a}$. Secara umum, untuk $a > 0$:

$$a^{\frac{1}{n}} = \sqrt[n]{a}, \qquad a^{\frac{m}{n}} = \left(\sqrt[n]{a}\right)^m = \sqrt[n]{a^m}$$

Saran: **akarkan dulu, baru pangkatkan**, supaya angkanya tetap kecil.

### Bentuk baku

Sebuah bilangan positif ditulis dalam **bentuk baku** jika berbentuk

$$A \times 10^n, \qquad 1 \le A < 10, \quad n \text{ bilangan bulat}$$

- Bilangan besar → $n$ positif: $150.000.000 = 1{,}5 \times 10^8$ (koma bergeser 8 tempat ke kiri).
- Bilangan kecil → $n$ negatif: $0{,}000002 = 2 \times 10^{-6}$ (koma bergeser 6 tempat ke kanan).

```anim
{"type": "persamaan", "title": "Menulis bentuk baku", "baris": [{"tex": "150.000.000", "say": "Bilangan besar: hitung berapa tempat koma harus bergeser."}, {"tex": "1{,}5 \\times 100.000.000", "say": "Geser koma 8 tempat ke kiri supaya A di antara 1 dan 10."}, {"tex": "1{,}5 \\times 10^8", "say": "100.000.000 punya 8 nol, jadi $10^8$.", "op": "n = 8"}, {"tex": "0{,}000002 = 2 \\times 10^{-6}", "say": "Bilangan kecil: koma digeser 6 tempat ke kanan, jadi pangkatnya −6.", "op": "n = −6"}]}
```

Untuk mengalikan atau membagi bentuk baku, hitung bagian $A$ dan bagian $10^n$ terpisah memakai hukum eksponen, lalu rapikan agar $A$ kembali di antara 1 dan 10.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Hukum perkalian dan pembagian

```soal
{
 "title": "Contoh 1",
 "text": "Hitung $2^5 \\times 2^3 \\div 2^6$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Kenali hukum. Apa yang dilakukan pada pangkatnya?",
   "options": [
    "Pangkat dijumlah dan dikurang, bilangan pokok tetap 2",
    "Bilangan pokok dikalikan menjadi 4",
    "Pangkat dikalikan semua"
   ],
   "answer": "Pangkat dijumlah dan dikurang, bilangan pokok tetap 2",
   "hint": "Bilangan pokoknya sama, yaitu 2.",
   "explain": "Maju 5 jam, maju 3 jam, mundur 6 jam: pangkat dijumlah lalu dikurang.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Gabungkan pangkat. 5 + 3 − 6 = ?",
   "answer": "2",
   "hint": "Jumlahkan 5 dan 3 dulu, lalu kurangi 6.",
   "explain": "Pangkatnya 2, jadi hasilnya $2^2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Sederhanakan. $2^2$ = ?",
   "answer": "4",
   "hint": "2 × 2.",
   "explain": "$2^2 = 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $2^5 \\times 2^3 = 32 \\times 8 = 256$. Berapa $256 \\div 64$?",
   "answer": "4",
   "hint": "$2^6 = 64$.",
   "explain": "256 ÷ 64 = 4. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $2^5 \\times 2^3 \\div 2^6 = 4$."
}
```

### Contoh 2: Pangkat nol dan negatif

```soal
{
 "title": "Contoh 2",
 "text": "Hitung (a) $5^0 + 4^{-2}$, (b) $\\left(\\frac{2}{3}\\right)^{-2}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Pangkat nol. $5^0$ = ?",
   "answer": "1",
   "hint": "Nol jam berlalu, koloni tidak berubah.",
   "explain": "Setiap bilangan bukan nol berpangkat 0 sama dengan 1.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Pangkat negatif (a). $4^{-2}$ = ?",
   "answer": {
    "num": 1,
    "den": 16
   },
   "hint": "Pangkat negatif berarti 1 dibagi pangkat positifnya.",
   "explain": "$4^{-2} = \\frac{1}{4^2} = \\frac{1}{16}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Jumlahkan (a). $1 + \\frac{1}{16}$ = ? (tulis sebagai pecahan biasa)",
   "answer": {
    "num": 17,
    "den": 16
   },
   "hint": "Tulis 1 sebagai $\\frac{16}{16}$.",
   "explain": "$\\frac{16}{16} + \\frac{1}{16} = \\frac{17}{16}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Pangkat negatif pecahan (b). $\\left(\\frac{2}{3}\\right)^{-2}$ = ?",
   "answer": {
    "num": 9,
    "den": 4
   },
   "hint": "Balik pecahannya, lalu pangkatkan dengan 2.",
   "explain": "$\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Cek jawaban: $\\left(\\frac{2}{3}\\right)^{2}$ = ?",
   "answer": {
    "num": 4,
    "den": 9
   },
   "hint": "Kuadratkan pembilang dan penyebut.",
   "explain": "$\\frac{4}{9}$, dan kebalikannya $\\frac{9}{4}$. Cocok.",
   "error": "salah-langkah-materi",
   "simplest": true
  }
 ],
 "conclusion": "Jadi (a) $\\frac{17}{16}$ dan (b) $\\frac{9}{4}$."
}
```

### Contoh 3: Pangkat pecahan

```soal
{
 "title": "Contoh 3",
 "text": "Hitung (a) $27^{\\frac{2}{3}}$, (b) $16^{-\\frac{3}{4}}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Arti pangkat $\\frac{2}{3}$ (a)?",
   "options": [
    "Akar pangkat 3, lalu dikuadratkan",
    "Akar kuadrat, lalu dipangkatkan 3",
    "Dikali 2 lalu dibagi 3"
   ],
   "answer": "Akar pangkat 3, lalu dikuadratkan",
   "hint": "Penyebut = akar, pembilang = pangkat.",
   "explain": "Penyebut 3 berarti akar pangkat tiga, pembilang 2 berarti kuadrat.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Akarkan dulu. $\\sqrt[3]{27}$ = ?",
   "answer": "3",
   "hint": "Bilangan berapa yang dikali tiga kali dengan dirinya menjadi 27?",
   "explain": "$3 \\times 3 \\times 3 = 27$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Pangkatkan. $3^2$ = ?",
   "answer": "9",
   "hint": "3 × 3.",
   "explain": "Jadi $27^{2/3} = 9$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Tangani tanda negatif (b). $16^{-\\frac{3}{4}}$ sama dengan ...",
   "options": [
    "$\\frac{1}{16^{3/4}}$",
    "$-16^{3/4}$",
    "$16^{4/3}$"
   ],
   "answer": "$\\frac{1}{16^{3/4}}$",
   "hint": "Pangkat negatif tidak membuat hasilnya negatif.",
   "explain": "Pangkat negatif berarti membagi: $\\frac{1}{16^{3/4}}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: $\\sqrt[4]{16}$ = ?",
   "answer": "2",
   "hint": "Bilangan berapa yang dipangkatkan 4 menjadi 16?",
   "explain": "$2^4 = 16$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 6: $2^3$ = ?",
   "answer": "8",
   "hint": "2 × 2 × 2.",
   "explain": "$16^{3/4} = 8$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 7: Jadi $16^{-\\frac{3}{4}}$ = ?",
   "answer": {
    "num": 1,
    "den": 8
   },
   "hint": "Ingat langkah 4: 1 dibagi hasil tadi.",
   "explain": "$\\frac{1}{8}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban (a): $27^2 = 729$. Berapa $9^3$?",
   "answer": "729",
   "hint": "9 × 9 × 9.",
   "explain": "$9^3 = 729 = 27^2$, jadi $9 = 27^{2/3}$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi (a) $9$ dan (b) $\\frac{1}{8}$."
}
```

### Contoh 4: Menyederhanakan bentuk aljabar

```soal
{
 "title": "Contoh 4",
 "text": "Sederhanakan $\\dfrac{(3a^2 b^{-1})^3}{9a^4 b^{-5}}$ dan tulis dengan pangkat positif.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pangkat dari perkalian. $(3a^2 b^{-1})^3$ = ?",
   "options": [
    "$27a^6 b^{-3}$",
    "$3a^6 b^{-3}$",
    "$27a^5 b^{2}$",
    "$9a^6 b^{-3}$"
   ],
   "answer": "$27a^6 b^{-3}$",
   "hint": "Setiap faktor di dalam kurung dipangkatkan 3, termasuk angka 3.",
   "explain": "$3^3 = 27$, $(a^2)^3 = a^6$, $(b^{-1})^3 = b^{-3}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Bagi koefisien. 27 ÷ 9 = ?",
   "answer": "3",
   "hint": "Bagi angka di depan saja.",
   "explain": "27 ÷ 9 = 3.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Pangkat $a$: $6 - 4$ = ?",
   "answer": "2",
   "hint": "Hukum pembagian: pangkat dikurang.",
   "explain": "$a^{6-4} = a^2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Pangkat $b$: $-3 - (-5)$ = ?",
   "answer": "2",
   "hint": "Mengurangi bilangan negatif sama dengan menambah.",
   "explain": "$-3 + 5 = 2$, jadi $b^2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Tulis hasil.",
   "options": [
    "$3a^2 b^2$",
    "$3a^2 b^{-8}$",
    "$27a^2 b^2$",
    "$3a^{10} b^2$"
   ],
   "answer": "$3a^2 b^2$",
   "hint": "Gabungkan koefisien dan kedua pangkat tadi.",
   "explain": "Semua pangkat sudah positif: $3a^2 b^2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: ambil $a = 1$, $b = 2$. Berapa nilai $3a^2 b^2$?",
   "answer": "12",
   "hint": "$3 \\times 1 \\times 4$.",
   "explain": "Soal aslinya juga bernilai 12 untuk $a = 1$, $b = 2$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi hasilnya $3a^2 b^2$."
}
```

### Contoh 5: Soal cerita dengan bentuk baku

```soal
{
 "title": "Contoh 5",
 "text": "Penduduk Indonesia sekitar $2{,}8 \\times 10^8$ orang. Setiap orang rata-rata menghasilkan 0,7 kg sampah per hari. Hitung perkiraan total sampah dalam satu tahun (365 hari), dalam bentuk baku.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tulis 0,7 dalam bentuk baku.",
   "options": [
    "$7 \\times 10^{-1}$",
    "$7 \\times 10^{1}$",
    "$0{,}7 \\times 10^{0}$"
   ],
   "answer": "$7 \\times 10^{-1}$",
   "hint": "Bilangan kecil dari 1 berpangkat negatif.",
   "explain": "Koma bergeser 1 tempat ke kanan: $7 \\times 10^{-1}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Sampah per hari, bagian A. 2,8 × 7 = ?",
   "answer": "19,6",
   "hint": "28 × 7 = 196, lalu letakkan koma.",
   "explain": "2,8 × 7 = 19,6.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Bagian pangkat. $10^8 \\times 10^{-1} = 10^n$. Berapa $n$?",
   "answer": "7",
   "hint": "Jumlahkan pangkatnya.",
   "explain": "8 + (−1) = 7.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Rapikan $19{,}6 \\times 10^7$ ke bentuk baku.",
   "options": [
    "$1{,}96 \\times 10^8$",
    "$1{,}96 \\times 10^6$",
    "$19{,}6 \\times 10^7$",
    "$196 \\times 10^6$"
   ],
   "answer": "$1{,}96 \\times 10^8$",
   "hint": "A harus di antara 1 dan 10. Kalau A dibagi 10, pangkatnya naik 1.",
   "explain": "$19{,}6 = 1{,}96 \\times 10^1$, jadi $1{,}96 \\times 10^8$ kg per hari.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Sampah per tahun, bagian A. 1,96 × 3,65 = ?",
   "answer": "7,154",
   "hint": "196 × 365 = 71.540, lalu letakkan 4 angka di belakang koma.",
   "explain": "1,96 × 3,65 = 7,154.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 6: Hasil akhir, dengan $365 = 3{,}65 \\times 10^2$.",
   "options": [
    "$7{,}154 \\times 10^{10}$ kg",
    "$7{,}154 \\times 10^{16}$ kg",
    "$7{,}154 \\times 10^{8}$ kg"
   ],
   "answer": "$7{,}154 \\times 10^{10}$ kg",
   "hint": "Pangkatnya dijumlah: 8 + 2.",
   "explain": "$10^8 \\times 10^2 = 10^{10}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: estimasi kasar $3 \\times 10^8 \\times 1 \\times 400 = 1{,}2 \\times 10^{11}$. Apakah jawaban kita wajar?",
   "options": [
    "Wajar, ordonya sama",
    "Tidak wajar, terlalu kecil"
   ],
   "answer": "Wajar, ordonya sama",
   "hint": "Bandingkan $7 \\times 10^{10}$ dengan $1{,}2 \\times 10^{11}$.",
   "explain": "Keduanya sekitar ratusan miliar, jadi wajar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Total sampah sekitar $7{,}154 \\times 10^{10}$ kg per tahun."
}
```

## Kesalahan yang sering terjadi

- **Mengalikan bilangan pokok.** Menulis $2^3 \times 2^4 = 4^7$. Bilangan pokok tetap 2; hanya pangkat yang dijumlah: $2^7$. Koloni yang sama tidak berubah faktor pengalinya.
- **Mengira pangkat negatif menghasilkan bilangan negatif.** Menulis $3^{-2} = -9$. Yang benar $3^{-2} = \frac{1}{9}$: mundur waktu berarti membagi.
- **Mengira $a^0 = 0$.** Nol jam berlalu berarti tidak ada perubahan, jadi $a^0 = 1$.
- **Salah urutan pangkat pecahan.** Menghitung $27^{2/3}$ sebagai $\frac{27 \times 2}{3} = 18$. Penyebut adalah akar, pembilang adalah pangkat: $(\sqrt[3]{27})^2 = 9$.
- **Bentuk baku belum rapi.** Menjawab $19{,}6 \times 10^7$ atau $0{,}5 \times 10^4$. Syaratnya $1 \le A < 10$, jadi tulis $1{,}96 \times 10^8$ dan $5 \times 10^3$.

## Ringkasan

- $a^m \times a^n = a^{m+n}$, $a^m \div a^n = a^{m-n}$, $(a^m)^n = a^{mn}$, $(ab)^n = a^n b^n$.
- $a^0 = 1$ dan $a^{-n} = \frac{1}{a^n}$; keduanya didefinisikan agar hukum pembagian tetap berlaku.
- $a^{\frac{m}{n}} = (\sqrt[n]{a})^m$: penyebut = akar, pembilang = pangkat.
- Bentuk baku: $A \times 10^n$ dengan $1 \le A < 10$ dan $n$ bulat.
- Saat menghitung bentuk baku, olah $A$ dan $10^n$ terpisah, lalu rapikan $A$.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tulis dalam bentuk baku: (a) 36.000.000, (b) 0,000045.",
 "steps": [
  {
   "kind": "number",
   "prompt": "(a) $36.000.000 = 3{,}6 \\times 10^n$. Berapa $n$?",
   "answer": "7",
   "hint": "Hitung berapa tempat koma bergeser ke kiri.",
   "explain": "Koma bergeser 7 tempat ke kiri: $3{,}6 \\times 10^7$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "(b) $0{,}000045 = 4{,}5 \\times 10^n$. Berapa $n$?",
   "answer": "-5",
   "hint": "Bilangan kecil: pangkatnya negatif. Hitung geseran koma ke kanan.",
   "explain": "Koma bergeser 5 tempat ke kanan: $4{,}5 \\times 10^{-5}$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "(a) $3{,}6 \\times 10^7$, (b) $4{,}5 \\times 10^{-5}$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $(4 \\times 10^3) \\times (6 \\times 10^5)$ dalam bentuk baku.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Kalikan bagian A: 4 × 6 = ?",
   "answer": "24",
   "hint": "Kalikan angka di depan.",
   "explain": "4 × 6 = 24.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Bagian pangkat: $10^3 \\times 10^5 = 10^n$. Berapa $n$?",
   "answer": "8",
   "hint": "Jumlahkan pangkat.",
   "explain": "3 + 5 = 8.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Rapikan $24 \\times 10^8$.",
   "options": [
    "$2{,}4 \\times 10^9$",
    "$2{,}4 \\times 10^7$",
    "$24 \\times 10^8$"
   ],
   "answer": "$2{,}4 \\times 10^9$",
   "hint": "A harus di antara 1 dan 10.",
   "explain": "$24 = 2{,}4 \\times 10$, jadi pangkat naik 1 menjadi 9.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Hasilnya $2{,}4 \\times 10^9$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung $8^{\\frac{2}{3}} + 9^{-\\frac{1}{2}}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$8^{\\frac{2}{3}} = (\\sqrt[3]{8})^2$ = ?",
   "answer": "4",
   "hint": "Akarkan dulu: $\\sqrt[3]{8} = 2$.",
   "explain": "$2^2 = 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "$9^{-\\frac{1}{2}}$ = ?",
   "answer": {
    "num": 1,
    "den": 3
   },
   "hint": "Pangkat negatif berarti membagi; pangkat $\\frac{1}{2}$ berarti akar kuadrat.",
   "explain": "$\\frac{1}{\\sqrt{9}} = \\frac{1}{3}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Jumlahkan: $4 + \\frac{1}{3}$ = ? (pecahan biasa)",
   "answer": {
    "num": 13,
    "den": 3
   },
   "hint": "Tulis 4 sebagai $\\frac{12}{3}$.",
   "explain": "$\\frac{12}{3} + \\frac{1}{3} = \\frac{13}{3}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  }
 ],
 "conclusion": "Hasilnya $\\frac{13}{3}$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Sederhanakan $\\dfrac{x^5 \\times x^{-2}}{(x^{1/2})^2}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Pembilang: $x^5 \\times x^{-2} = x^n$. Berapa $n$?",
   "answer": "3",
   "hint": "Jumlahkan pangkat.",
   "explain": "5 + (−2) = 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Penyebut: $(x^{1/2})^2 = x^n$. Berapa $n$?",
   "answer": "1",
   "hint": "Pangkat dari pangkat: kalikan.",
   "explain": "$\\frac{1}{2} \\times 2 = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasil akhirnya?",
   "options": [
    "$x^2$",
    "$x^4$",
    "$x^3$",
    "$x^{3/2}$"
   ],
   "answer": "$x^2$",
   "hint": "Bagi: pangkat dikurang.",
   "explain": "$x^{3-1} = x^2$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Hasilnya $x^2$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Jarak Bumi ke Bulan sekitar $3{,}84 \\times 10^5$ km. Cahaya menempuh $3 \\times 10^5$ km setiap detik. Berapa detik yang diperlukan cahaya dari Bulan untuk sampai ke Bumi?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Hitungan apa yang dipakai?",
   "options": [
    "Jarak dibagi kecepatan",
    "Jarak dikali kecepatan",
    "Kecepatan dibagi jarak"
   ],
   "answer": "Jarak dibagi kecepatan",
   "hint": "Waktu = jarak ÷ kecepatan.",
   "explain": "$\\frac{3{,}84 \\times 10^5}{3 \\times 10^5}$.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "Bagian pangkat: $10^5 \\div 10^5 = 10^n$. Berapa $n$?",
   "answer": "0",
   "hint": "Kurangi pangkat.",
   "explain": "$10^0 = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Bagian A: 3,84 ÷ 3 = ?",
   "answer": "1,28",
   "hint": "384 ÷ 3 = 128.",
   "explain": "3,84 ÷ 3 = 1,28, jadi waktunya 1,28 detik.",
   "error": "salah-langkah-materi",
   "suffix": "detik"
  }
 ],
 "conclusion": "Cahaya perlu sekitar 1,28 detik."
}
```
