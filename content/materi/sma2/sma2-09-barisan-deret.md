---
id: sma2-09-barisan-deret
judul: Barisan dan Deret
jenjang: sma2
moe: "H2 Mathematics 9758 · Pure Mathematics · Sequences and Series"
prasyarat: [sma1-10-eksponen-logaritma]
durasi_menit: 80
---

## Kenapa belajar ini?

Tabungan yang ditambah tetap setiap bulan, bunga bank yang berlipat, pantulan bola yang makin rendah, dan jumlah ikan di kolam dari bulan ke bulan semuanya adalah barisan. Dengan rumus deret, kita bisa menghitung totalnya tanpa menjumlahkan satu per satu.

## Analogi

Bayangkan kamu **menaiki anak tangga**, dan setiap tangga punya **aturan langkah**.

- **Tangga aritmetika**: setiap anak tangga **lebih tinggi sejumlah tetap**, misalnya selalu naik 15 cm. Aturannya "tambah $b$".
- **Tangga geometri**: setiap anak tangga adalah **kelipatan tetap** dari sebelumnya, misalnya selalu $\frac{3}{4}$ kali tinggi sebelumnya. Aturannya "kali $r$".
- **Deret** adalah **total tinggi** semua anak tangga yang kamu naiki.
- **Rumus rekursif** adalah aturan yang hanya memberi tahu "dari anak tangga sekarang, ke mana anak tangga berikutnya".

```visual
{"type": "barChart", "title": "Tangga aritmetika: selalu tambah 15 cm", "scaleStep": 15, "max": 90, "unit": "cm", "bars": [{"label": "ke-1", "value": 15}, {"label": "ke-2", "value": 30}, {"label": "ke-3", "value": 45}, {"label": "ke-4", "value": 60}, {"label": "ke-5", "value": 75}]}
```

```visual
{"type": "barChart", "title": "Tangga geometri: selalu kali 3/4", "scaleStep": 50, "max": 300, "unit": "cm", "bars": [{"label": "ke-1", "value": 256}, {"label": "ke-2", "value": 192}, {"label": "ke-3", "value": 144}, {"label": "ke-4", "value": 108}, {"label": "ke-5", "value": 81}]}
```

Analogi aturan "tambah" dan "kali" ini dipakai di seluruh materi.

## Konsep

### Barisan dan deret aritmetika

Suku pertama $a$, beda $b$. Setiap langkah menambah $b$, jadi untuk sampai ke suku ke-$n$ kita melangkah $n - 1$ kali:
$$ U_n = a + (n - 1)b $$

**Penurunan rumus jumlah (cara Gauss).** Tulis jumlahnya dua kali, maju dan mundur:
$$ S_n = a + (a + b) + \cdots + U_n, \qquad S_n = U_n + (U_n - b) + \cdots + a $$
Jumlahkan pasangan yang sejajar. Setiap pasangan bernilai $a + U_n$, dan ada $n$ pasangan, jadi $2S_n = n(a + U_n)$:
$$ S_n = \frac{n}{2}(a + U_n) = \frac{n}{2}\big(2a + (n - 1)b\big) $$

```anim
{"type": "persamaan", "title": "Cara Gauss pada 3 + 7 + 11 + 15 + 19", "baris": [{"tex": "S = 3 + 7 + 11 + 15 + 19", "say": "Tulis jumlahnya maju."}, {"tex": "S = 19 + 15 + 11 + 7 + 3", "say": "Tulis lagi mundur."}, {"tex": "2S = 22 + 22 + 22 + 22 + 22", "say": "Jumlahkan pasangan yang sejajar: selalu $a + U_n = 22$.", "op": "jumlahkan"}, {"tex": "2S = 5 \\times 22 \\Rightarrow S = \\tfrac{5}{2}(3 + 19) = 55", "say": "Ada $n = 5$ pasangan, lalu bagi 2.", "op": "$\\div 2$"}]}
```

### Barisan dan deret geometri

Suku pertama $a$, rasio $r$. Setiap langkah mengali $r$:
$$ U_n = ar^{n-1} $$

**Penurunan rumus jumlah.** Tulis $S_n$ dan $rS_n$, lalu kurangkan. Hampir semua suku saling menghapus:
$$ S_n = a + ar + \cdots + ar^{n-1}, \qquad rS_n = ar + ar^2 + \cdots + ar^n $$
$$ S_n - rS_n = a - ar^n \quad\Rightarrow\quad S_n = \frac{a(1 - r^n)}{1 - r}, \quad r \neq 1 $$

### Deret geometri tak hingga

Jika $|r| < 1$, maka $r^n \to 0$ saat $n \to \infty$. Anak tangganya makin pendek, sehingga totalnya tidak tumbuh tanpa batas:
$$ S_\infty = \frac{a}{1 - r}, \qquad \text{hanya jika } -1 < r < 1 $$
Jika $|r| \geq 1$, deretnya **divergen** (tidak punya jumlah tak hingga).

```anim
{"type": "grafik", "title": "Jumlah parsial 1 + 1/2 + 1/4 + ...", "xmin": 0, "xmax": 8.5, "ymin": 0, "ymax": 2.5, "kurva": [{"f": "2(1-0.5^x)", "label": "S_n = 2\\left(1 - \\left(\\tfrac{1}{2}\\right)^n\\right)"}], "garis": [{"y": 2, "label": "S∞ = 2"}], "titik": [{"x": 1, "y": 1.0}, {"x": 2, "y": 1.5}, {"x": 3, "y": 1.75}, {"x": 4, "y": 1.875}, {"x": 5, "y": 1.9375}, {"x": 6, "y": 1.96875}, {"x": 7, "y": 1.984375}], "langkah": [{"say": "Jumlah parsial $S_1 = 1$, $S_2 = 1{,}5$, $S_3 = 1{,}75$, ...", "kurva": 0, "titik": 7}, {"say": "Anak tangga makin pendek, jadi $S_n$ naik makin pelan.", "kurva": 1, "titik": 7}, {"say": "$S_n$ mendekati $\\frac{a}{1 - r} = \\frac{1}{1 - 1/2} = 2$ tetapi tidak pernah melewatinya.", "kurva": 1, "titik": 7, "garis": 1}]}
```

### Notasi sigma

$\displaystyle\sum_{r=1}^{n} U_r$ berarti "jumlahkan $U_r$ dari $r = 1$ sampai $r = n$". Sifat penting:
$$ \sum_{r=1}^{n} (aU_r + bV_r) = a\sum U_r + b\sum V_r, \qquad \sum_{r=1}^{n} 1 = n, \qquad \sum_{r=1}^{n} r = \frac{n(n+1)}{2} $$

### Metode selisih

Jika setiap suku bisa ditulis sebagai selisih $U_r = f(r) - f(r + 1)$, maka saat dijumlahkan, suku-suku tengah saling menghapus berpasangan:
$$ \sum_{r=1}^{n} \big[f(r) - f(r+1)\big] = f(1) - f(n + 1) $$
Biasanya bentuk selisih didapat dengan pecahan parsial.

### Rumus rekursif

Barisan bisa didefinisikan dengan suku awal dan aturan $U_{n+1} = g(U_n)$. Jika barisannya **konvergen** ke $L$, maka untuk $n$ besar $U_{n+1}$ dan $U_n$ sama-sama mendekati $L$, sehingga
$$ L = g(L) $$

```anim
{"type": "grafik", "title": "Rumus rekursif U(n+1) = 0,5 U(n) + 2, U(1) = 0", "xmin": 0, "xmax": 7.5, "ymin": 0, "ymax": 5, "kurva": [{"f": "4", "label": "L = 4", "warna": "#94a3b8"}], "titik": [{"x": 1, "y": 0.0, "label": "U1"}, {"x": 2, "y": 2.0, "label": "U2"}, {"x": 3, "y": 3.0, "label": "U3"}, {"x": 4, "y": 3.5}, {"x": 5, "y": 3.75}, {"x": 6, "y": 3.875}, {"x": 7, "y": 3.9375}], "langkah": [{"say": "Hitung suku demi suku: $0, 2, 3, 3{,}5, 3{,}75, \\ldots$", "kurva": 0, "titik": 7}, {"say": "Limit memenuhi $L = 0{,}5L + 2$, jadi $L = 4$. Titik-titik mendekati garis ini.", "kurva": 1, "titik": 7}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Aritmetika dari dua suku

```soal
{
 "title": "Contoh 1",
 "text": "Suku ke-3 barisan aritmetika adalah 11 dan suku ke-10 adalah 32. Tentukan jumlah 20 suku pertama.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tulis dua persamaan.",
   "options": [
    "$a + 2b = 11$ dan $a + 9b = 32$",
    "$a + 3b = 11$ dan $a + 10b = 32$",
    "$3a = 11$ dan $10a = 32$"
   ],
   "answer": "$a + 2b = 11$ dan $a + 9b = 32$",
   "hint": "Suku ke-$n$: $a + (n - 1)b$.",
   "explain": "Ke suku ke-3 ada 2 langkah, ke suku ke-10 ada 9 langkah.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kurangkan kedua persamaan. Berapa beda $b$?",
   "answer": "3",
   "hint": "$7b = 32 - 11$.",
   "explain": "$7b = 21$, jadi $b = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Berapa suku pertama $a$?",
   "answer": "5",
   "hint": "$a = 11 - 2b$.",
   "explain": "$a = 11 - 6 = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $S_{20} = \\frac{20}{2}\\big(2a + 19b\\big) = ?$",
   "answer": "670",
   "hint": "$10(10 + 57)$.",
   "explain": "$S_{20} = 670$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung $U_{20}$.",
   "answer": "62",
   "hint": "$5 + 19(3)$.",
   "explain": "$U_{20} = 62$, dan $\\frac{20}{2}(5 + 62) = 670$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$S_{20} = 670$."
}
```

### Contoh 2: Pantulan bola

```soal
{
 "title": "Contoh 2",
 "text": "Bola dijatuhkan dari ketinggian 8 m. Setiap memantul, bola naik $\\frac{3}{4}$ dari tinggi sebelumnya. (a) Setelah pantulan ke berapa tinggi pantulan pertama kali kurang dari 1 m? (b) Berapa total lintasan bola sampai berhenti?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tinggi pantulan ke-$n$?",
   "options": [
    "$8\\left(\\frac{3}{4}\\right)^n$",
    "$8\\left(\\frac{3}{4}\\right)^{n-1}$",
    "$8 - \\frac{3}{4}n$"
   ],
   "answer": "$8\\left(\\frac{3}{4}\\right)^n$",
   "hint": "Pantulan pertama sudah $\\frac{3}{4} \\times 8 = 6$.",
   "explain": "Tangga geometri dengan rasio $\\frac{3}{4}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Dari $n\\ln\\frac{3}{4} < \\ln\\frac{1}{8}$, bagi dengan $\\ln\\frac{3}{4}$.",
   "options": [
    "$n > \\frac{\\ln(1/8)}{\\ln(3/4)}$",
    "$n < \\frac{\\ln(1/8)}{\\ln(3/4)}$"
   ],
   "answer": "$n > \\frac{\\ln(1/8)}{\\ln(3/4)}$",
   "hint": "Apakah $\\ln\\frac{3}{4}$ positif atau negatif?",
   "explain": "$\\ln\\frac{3}{4} < 0$, jadi tanda dibalik.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Hitung $\\frac{\\ln(1/8)}{\\ln(3/4)}$, bulatkan ke 2 desimal.",
   "answer": "7,23",
   "hint": "Pakai kalkulator.",
   "explain": "$\\approx 7{,}23$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Pantulan ke berapa yang pertama kali di bawah 1 m?",
   "answer": "8",
   "hint": "Bilangan bulat terkecil yang lebih dari 7,23.",
   "explain": "Pantulan ke-8.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Jumlah tinggi pantulan $6 + 4{,}5 + \\cdots$ (tak hingga)?",
   "answer": "24",
   "hint": "$S_\\infty = \\frac{a}{1 - r}$ dengan $a = 6$, $r = \\frac{3}{4}$.",
   "explain": "$\\frac{6}{1/4} = 24$.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Total lintasan?",
   "answer": "56",
   "hint": "Jatuh awal 8 m, lalu setiap pantulan naik dan turun.",
   "explain": "$8 + 2(24) = 56$ m.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: tinggi pantulan ke-8, $8(0{,}75)^8$, bulatkan ke 2 desimal.",
   "answer": "0,80",
   "hint": "Pakai kalkulator.",
   "explain": "$\\approx 0{,}80 < 1$, sedangkan pantulan ke-7 $\\approx 1{,}07 > 1$. Benar.",
   "error": "salah-pembulatan",
   "suffix": "m"
  }
 ],
 "conclusion": "(a) Pantulan ke-8; (b) total lintasan 56 m."
}
```

### Contoh 3: Metode selisih

```soal
{
 "title": "Contoh 3",
 "text": "Tentukan $\\displaystyle\\sum_{r=1}^{n} \\frac{2}{r(r+2)}$, lalu nilai jumlah tak hingganya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pecahan parsial $\\frac{2}{r(r+2)}$?",
   "options": [
    "$\\frac{1}{r} - \\frac{1}{r+2}$",
    "$\\frac{2}{r} - \\frac{2}{r+2}$",
    "$\\frac{1}{r} - \\frac{1}{r+1}$"
   ],
   "answer": "$\\frac{1}{r} - \\frac{1}{r+2}$",
   "hint": "Satukan pilihanmu kembali dan bandingkan pembilangnya.",
   "explain": "$\\frac{(r + 2) - r}{r(r+2)} = \\frac{2}{r(r+2)}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Setelah mencoret pasangan (lihat tabel), suku apa yang tersisa?",
   "options": [
    "$1 + \\frac{1}{2} - \\frac{1}{n+1} - \\frac{1}{n+2}$",
    "$1 - \\frac{1}{n+2}$",
    "$1 + \\frac{1}{2} - \\frac{1}{n+2}$"
   ],
   "answer": "$1 + \\frac{1}{2} - \\frac{1}{n+1} - \\frac{1}{n+2}$",
   "hint": "Selisihnya berjarak dua, jadi yang tersisa dua suku di awal dan dua di akhir.",
   "explain": "Jumlahnya $\\frac{3}{2} - \\frac{1}{n+1} - \\frac{1}{n+2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Jumlah tak hingganya?",
   "answer": {
    "num": 3,
    "den": 2
   },
   "hint": "Saat $n \\to \\infty$, $\\frac{1}{n+1}$ dan $\\frac{1}{n+2}$ menuju 0.",
   "explain": "$\\frac{3}{2}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Cek jawaban: hitung langsung untuk $n = 2$: $\\frac{2}{1 \\cdot 3} + \\frac{2}{2 \\cdot 4}$.",
   "answer": {
    "num": 11,
    "den": 12
   },
   "hint": "$\\frac{2}{3} + \\frac{1}{4}$.",
   "explain": "$\\frac{11}{12}$, sama dengan rumus $\\frac{3}{2} - \\frac{1}{3} - \\frac{1}{4}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  }
 ],
 "conclusion": "$\\sum_{r=1}^{n} \\frac{2}{r(r+2)} = \\frac{3}{2} - \\frac{1}{n+1} - \\frac{1}{n+2}$; jumlah tak hingganya $\\frac{3}{2}$.",
 "visual": {
  "type": "table",
  "head": [
   "r",
   "suku positif",
   "suku negatif"
  ],
  "rows": [
   [
    "1",
    "1/1",
    "− 1/3"
   ],
   [
    "2",
    "1/2",
    "− 1/4"
   ],
   [
    "3",
    "1/3",
    "− 1/5"
   ],
   [
    "...",
    "...",
    "..."
   ],
   [
    "n − 1",
    "1/(n − 1)",
    "− 1/(n + 1)"
   ],
   [
    "n",
    "1/n",
    "− 1/(n + 2)"
   ]
  ]
 }
}
```

### Contoh 4: Kolam ikan Pak Wayan (rumus rekursif)

```soal
{
 "title": "Contoh 4",
 "text": "Awal bulan pertama ada 1.000 ikan di kolam Pak Wayan. Setiap bulan ia menjual 20% ikan, lalu menebar 300 bibit baru: $U_{n+1} = 0{,}8U_n + 300$ dengan $U_1 = 1000$. Tentukan $U_2$, $U_3$, $U_4$, dan jumlah ikan dalam jangka panjang.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Hitung $U_2$.",
   "answer": "1.100",
   "hint": "$0{,}8 \\times 1000 + 300$.",
   "explain": "$800 + 300 = 1100$.",
   "error": "salah-langkah-materi",
   "suffix": "ikan"
  },
  {
   "kind": "number",
   "prompt": "Hitung $U_3$.",
   "answer": "1.180",
   "hint": "$0{,}8 \\times 1100 + 300$.",
   "explain": "$880 + 300 = 1180$.",
   "error": "salah-langkah-materi",
   "suffix": "ikan"
  },
  {
   "kind": "number",
   "prompt": "Hitung $U_4$.",
   "answer": "1.244",
   "hint": "$0{,}8 \\times 1180 + 300$.",
   "explain": "$944 + 300 = 1244$. Kenaikannya 100, 80, 64: mengecil.",
   "error": "salah-langkah-materi",
   "suffix": "ikan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Limit $L$ memenuhi $L = 0{,}8L + 300$. Berapa $L$?",
   "answer": "1.500",
   "hint": "$0{,}2L = 300$.",
   "explain": "$L = 1500$.",
   "error": "salah-langkah-materi",
   "suffix": "ikan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: $U_n - 1500$ bernilai $-500, -400, -320, \\ldots$ Rumus $U_n$?",
   "options": [
    "$1500 - 500(0{,}8)^{n-1}$",
    "$1500 - 500(0{,}8)^{n}$",
    "$1000 + 100(n - 1)$"
   ],
   "answer": "$1500 - 500(0{,}8)^{n-1}$",
   "hint": "Barisan geometri dengan suku pertama $-500$ dan rasio $0{,}8$.",
   "explain": "Saat $n$ besar, $(0{,}8)^{n-1} \\to 0$, jadi $U_n \\to 1500$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: rumus untuk $n = 3$: $1500 - 500(0{,}64)$.",
   "answer": "1.180",
   "hint": "$500 \\times 0{,}64 = 320$.",
   "explain": "Hasilnya 1180, sama dengan langkah 1.",
   "error": "salah-langkah-materi",
   "suffix": "ikan"
  }
 ],
 "conclusion": "$U_2 = 1100$, $U_3 = 1180$, $U_4 = 1244$; jangka panjang sekitar 1.500 ikan."
}
```

## Kesalahan yang sering terjadi

- **Salah pangkat pada suku geometri.** Menulis $U_n = ar^n$. Suku pertama adalah $a = ar^0$, jadi suku ke-$n$ adalah $ar^{n-1}$: ada $n - 1$ langkah.
- **Memakai $S_\infty$ saat $|r| \geq 1$.** Untuk $2 + 4 + 8 + \cdots$, rumus memberi $\frac{2}{1 - 2} = -2$, jelas mustahil. Cek $|r| < 1$ dulu.
- **Lupa membalik tanda saat membagi dengan logaritma negatif.** Pada Contoh 2, $\ln\frac{3}{4} < 0$, sehingga $<$ berubah menjadi $>$.
- **Salah mencoret pada metode selisih.** Jika selisihnya berjarak dua ($r$ dan $r + 2$), yang tersisa dua suku di awal dan dua di akhir, bukan satu. Tulis beberapa baris awal dan akhir sebelum mencoret.
- **Menganggap $\sum r^2 = \left(\sum r\right)^2$.** Sigma tidak bisa dipindah masuk ke pangkat. Gunakan sifat linear saja.

## Ringkasan

- Aritmetika: $U_n = a + (n-1)b$, $S_n = \frac{n}{2}(2a + (n-1)b)$.
- Geometri: $U_n = ar^{n-1}$, $S_n = \frac{a(1 - r^n)}{1 - r}$; $S_\infty = \frac{a}{1 - r}$ hanya jika $|r| < 1$.
- Sigma bersifat linear; $\sum_{r=1}^{n} r = \frac{n(n+1)}{2}$.
- Metode selisih: tulis suku sebagai $f(r) - f(r + k)$, lalu coret berpasangan.
- Rekursif $U_{n+1} = g(U_n)$: limit $L$ (jika ada) memenuhi $L = g(L)$.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Barisan aritmetika $4, 9, 14, \\ldots$ Tentukan $U_{25}$ dan $S_{25}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa beda $b$?",
   "answer": "5",
   "hint": "$9 - 4$.",
   "explain": "$b = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$U_{25} = ?$",
   "answer": "124",
   "hint": "$4 + 24 \\times 5$.",
   "explain": "$U_{25} = 124$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$S_{25} = ?$",
   "answer": "1.600",
   "hint": "$\\frac{25}{2}(4 + 124)$.",
   "explain": "$\\frac{25}{2} \\times 128 = 1600$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$U_{25} = 124$ dan $S_{25} = 1600$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $\\displaystyle\\sum_{r=1}^{20} (3r + 2)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\sum_{r=1}^{20} r = ?$",
   "answer": "210",
   "hint": "$\\frac{n(n+1)}{2}$ dengan $n = 20$.",
   "explain": "$\\frac{20 \\times 21}{2} = 210$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$3 \\times 210 + 2 \\times 20 = ?$",
   "answer": "670",
   "hint": "Sifat linear sigma; $\\sum 2 = 2 \\times 20$.",
   "explain": "$630 + 40 = 670$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Hasilnya 670."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Barisan geometri memiliki $U_2 = 6$ dan $U_5 = 162$. Tentukan $S_6$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa rasio $r$?",
   "answer": "3",
   "hint": "$r^3 = \\frac{162}{6}$.",
   "explain": "$r^3 = 27$, jadi $r = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Berapa $a$?",
   "answer": "2",
   "hint": "$a = \\frac{U_2}{r}$.",
   "explain": "$\\frac{6}{3} = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$S_6 = ?$",
   "answer": "728",
   "hint": "$\\frac{a(r^6 - 1)}{r - 1}$.",
   "explain": "$\\frac{2(729 - 1)}{2} = 728$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$S_6 = 728$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Tentukan jumlah tak hingga $12 + 4 + \\frac{4}{3} + \\cdots$",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Berapa rasionya?",
   "answer": {
    "num": 1,
    "den": 3
   },
   "hint": "$\\frac{4}{12}$.",
   "explain": "$r = \\frac{1}{3}$, dan $|r| < 1$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "$S_\\infty = ?$",
   "answer": "18",
   "hint": "$\\frac{12}{1 - \\frac{1}{3}}$.",
   "explain": "$\\frac{12}{2/3} = 18$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$S_\\infty = 18$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Dengan menulis $2r + 1 = (r + 1)^2 - r^2$, tentukan $\\displaystyle\\sum_{r=1}^{n} (2r + 1)$ memakai metode selisih.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Setelah dicoret berpasangan, yang tersisa?",
   "options": [
    "$(n + 1)^2 - 1^2$",
    "$n^2 - 1$",
    "$(n + 1)^2 - 2^2$"
   ],
   "answer": "$(n + 1)^2 - 1^2$",
   "hint": "Tulis baris $r = 1$: $2^2 - 1^2$, $r = 2$: $3^2 - 2^2$, ...",
   "explain": "Suku terakhir $(n+1)^2$ dan suku pertama $1^2$ tersisa.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Bentuk sederhananya?",
   "options": [
    "$n^2 + 2n$",
    "$n^2 + 2n + 1$",
    "$n^2$"
   ],
   "answer": "$n^2 + 2n$",
   "hint": "Uraikan $(n + 1)^2$.",
   "explain": "$n^2 + 2n + 1 - 1 = n^2 + 2n$. Cek $n = 1$: $3 = 1 + 2$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\sum_{r=1}^{n} (2r + 1) = n^2 + 2n$."
}
```
