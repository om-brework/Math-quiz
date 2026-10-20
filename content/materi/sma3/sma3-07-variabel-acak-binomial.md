---
id: sma3-07-variabel-acak-binomial
judul: Variabel Acak Diskrit dan Distribusi Binomial
jenjang: sma3
moe: "H2 Mathematics 9758 · Probability and Statistics · Discrete random variables"
prasyarat: [sma3-06-peluang-lanjut, sma3-05-kaidah-pencacahan, sma1-04-ukuran-penyebaran]
durasi_menit: 70
---

## Kenapa belajar ini?

Apakah permainan di pasar malam menguntungkan pemainnya? Berapa benih yang kira-kira tumbuh jika petani menanam 15 benih? Variabel acak dan distribusi binomial menjawab pertanyaan seperti ini dengan angka: berapa rata-ratanya dalam jangka panjang dan seberapa besar variasinya.

## Analogi

Bayangkan sebuah **stan permainan di pasar malam**. Setiap kali bermain, hadiahnya acak. Satu putaran tidak bisa ditebak, tetapi jika permainan diulang **ribuan kali**, rata-rata hadiah per putaran menjadi stabil. Angka stabil itu adalah **nilai harapan**.

Distribusi binomial adalah keadaan saat kamu memainkan **permainan yang sama** sebanyak $n$ kali, setiap putaran hanya **menang atau kalah**, dan putaran satu tidak memengaruhi putaran lain.

```visual
{"type": "barChart", "title": "Banyak menang dalam 6 putaran, B(6; 0,5)", "unit": "peluang dalam %", "scaleStep": 5, "max": 35, "bars": [{"label": "0", "value": 1.6}, {"label": "1", "value": 9.4}, {"label": "2", "value": 23.4}, {"label": "3", "value": 31.2}, {"label": "4", "value": 23.4}, {"label": "5", "value": 9.4}, {"label": "6", "value": 1.6}], "caption": "Paling sering menang 3 kali dari 6, tetapi 0 sampai 6 kali pun mungkin"}
```

## Konsep

### Variabel acak diskrit dan distribusi peluang

**Variabel acak** $X$ adalah aturan yang memberi angka pada setiap hasil percobaan acak. $X$ **diskrit** jika nilainya dapat didaftar, misalnya 0, 1, 2, dan seterusnya.

**Distribusi peluang** $X$ adalah daftar semua nilai $x$ beserta $P(X = x)$. Syaratnya:

$$0 \le P(X = x) \le 1 \quad\text{dan}\quad \sum_{x} P(X = x) = 1.$$

### Nilai harapan

Misalkan permainan diulang $N$ kali. Nilai $x$ muncul kira-kira $N \cdot P(X = x)$ kali. Rata-rata hadiahnya:

$$\frac{\sum x \cdot N\,P(X=x)}{N} = \sum x\,P(X = x).$$

Inilah definisi **nilai harapan** (rata-rata jangka panjang):

$$E(X) = \mu = \sum x\,P(X = x).$$

```anim
{"type": "persamaan", "title": "Nilai harapan satu lemparan dadu", "baris": [{"tex": "E(X) = \\sum x\\,P(X = x)", "say": "Setiap mata dadu dikali peluangnya, lalu dijumlah."}, {"tex": "= 1 \\cdot \\tfrac{1}{6} + 2 \\cdot \\tfrac{1}{6} + \\cdots + 6 \\cdot \\tfrac{1}{6}", "say": "Semua mata punya peluang $\\frac{1}{6}$."}, {"tex": "= \\frac{21}{6}", "say": "Jumlah $1 + 2 + \\cdots + 6 = 21$."}, {"tex": "E(X) = 3{,}5", "say": "Rata-rata jangka panjang 3,5, walaupun mata 3,5 tidak pernah muncul."}]}
```

### Variansi

Variansi mengukur seberapa jauh nilai $X$ menyebar dari $\mu$, sama seperti simpangan baku pada data:

$$\operatorname{Var}(X) = E\big[(X - \mu)^2\big].$$

Uraikan kuadratnya, lalu pakai $\sum P(X=x) = 1$ dan $\sum x P(X=x) = \mu$:

$$E\big[(X-\mu)^2\big] = \sum (x^2 - 2\mu x + \mu^2)P(X=x) = E(X^2) - 2\mu^2 + \mu^2.$$

Jadi rumus hitung yang praktis adalah

$$\operatorname{Var}(X) = E(X^2) - [E(X)]^2, \qquad E(X^2) = \sum x^2 P(X = x).$$

Simpangan baku adalah $\sqrt{\operatorname{Var}(X)}$.

### Mengubah skala

Jika setiap hadiah dikali $a$ lalu ditambah $b$, rata-rata ikut berubah dengan cara yang sama. Penyebaran hanya terpengaruh oleh perkalian, dan dalam bentuk kuadrat:

$$E(aX + b) = aE(X) + b, \qquad \operatorname{Var}(aX + b) = a^2\operatorname{Var}(X).$$

Konstanta $b$ menggeser semua nilai bersama-sama, jadi jaraknya ke rata-rata tidak berubah.

### Distribusi binomial

$X \sim B(n, p)$ jika $X$ adalah banyak "sukses" dalam percobaan yang memenuhi empat syarat:

1. Banyak percobaan $n$ tetap.
2. Setiap percobaan hanya punya dua hasil: sukses atau gagal.
3. Peluang sukses $p$ sama di setiap percobaan.
4. Percobaan-percobaan saling bebas.

**Menurunkan rumusnya.** Satu urutan tertentu dengan $r$ sukses dan $n - r$ gagal, misalnya SS...SGG...G, punya peluang $p^r(1-p)^{n-r}$ karena percobaan saling bebas. Banyak urutan seperti itu sama dengan banyak cara memilih posisi $r$ sukses dari $n$ posisi, yaitu $\binom{n}{r}$. Maka

$$P(X = r) = \binom{n}{r} p^r (1-p)^{n-r}, \qquad r = 0, 1, \dots, n.$$

```anim
{"type": "persamaan", "title": "Menurunkan P(X = 2) untuk n = 4", "baris": [{"tex": "SSGG:\\ p \\cdot p \\cdot (1-p)(1-p) = p^2(1-p)^2", "say": "Satu urutan dengan 2 sukses: kalikan karena saling bebas."}, {"tex": "SSGG,\\ SGSG,\\ SGGS,\\ GSSG,\\ GSGS,\\ GGSS", "say": "Urutan lain punya peluang yang sama."}, {"tex": "\\binom{4}{2} = 6 \\text{ urutan}", "say": "Banyaknya = cara memilih 2 posisi sukses dari 4.", "op": "kombinasi"}, {"tex": "P(X = 2) = 6p^2(1-p)^2", "say": "Jumlahkan keenam jalur yang saling lepas."}]}
```

**Rata-rata dan variansi.** Tulis $X = X_1 + X_2 + \cdots + X_n$, dengan $X_i = 1$ jika percobaan ke-$i$ sukses dan $0$ jika gagal. Untuk satu $X_i$: $E(X_i) = p$ dan $E(X_i^2) = p$, jadi $\operatorname{Var}(X_i) = p - p^2 = p(1-p)$. Nilai harapan selalu bisa dijumlahkan, dan variansi bisa dijumlahkan karena $X_i$ saling bebas. Hasilnya

$$E(X) = np, \qquad \operatorname{Var}(X) = np(1-p).$$

**Kalkulator.** Kalkulator grafik menghitung $P(X = r)$ (binompdf) dan $P(X \le r)$ (binomcdf). Untuk $P(X \ge r)$, pakai $1 - P(X \le r - 1)$.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Distribusi dengan konstanta

```soal
{
 "title": "Contoh 1",
 "text": "Variabel acak $X$ memiliki $P(X = x) = kx$ untuk $x = 1, 2, 3, 4$. Tentukan $k$, $E(X)$, dan $\\operatorname{Var}(X)$.",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Langkah 1: Jumlah peluang = 1, jadi $10k = 1$. $k$ = ?",
   "answer": {
    "num": 1,
    "den": 10
   },
   "hint": "$k(1 + 2 + 3 + 4) = 10k$.",
   "explain": "$k = \\frac{1}{10}$, sehingga peluangnya 0,1; 0,2; 0,3; 0,4.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $E(X) = 1(0{,}1) + 2(0{,}2) + 3(0{,}3) + 4(0{,}4)$ = ?",
   "answer": "3",
   "hint": "0,1 + 0,4 + 0,9 + 1,6.",
   "explain": "$E(X) = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $E(X^2) = 1(0{,}1) + 4(0{,}2) + 9(0{,}3) + 16(0{,}4)$ = ?",
   "answer": "10",
   "hint": "0,1 + 0,8 + 2,7 + 6,4.",
   "explain": "$E(X^2) = 10$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: $\\operatorname{Var}(X) = E(X^2) - [E(X)]^2$ = ?",
   "answer": "1",
   "hint": "Kurangkan kuadrat rata-rata, bukan rata-ratanya.",
   "explain": "$10 - 3^2 = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $\\sum (x - 3)^2 P(X = x) = 4(0{,}1) + 1(0{,}2) + 0 + 1(0{,}4)$ = ?",
   "answer": "1",
   "hint": "0,4 + 0,2 + 0,4.",
   "explain": "Hasilnya 1. Sama.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $k = \\frac{1}{10}$, $E(X) = 3$, dan $\\operatorname{Var}(X) = 1$.",
 "visual": {
  "type": "table",
  "head": [
   "x",
   "1",
   "2",
   "3",
   "4"
  ],
  "rows": [
   [
    "P(X = x)",
    "k",
    "2k",
    "3k",
    "4k"
   ]
  ]
 }
}
```

### Contoh 2: Apakah permainan ini adil?

```soal
{
 "title": "Contoh 2",
 "text": "Di pasar malam, sekali bermain membayar Rp5.000, lalu kamu melempar satu dadu. Mata 6 mendapat hadiah Rp15.000, mata 4 atau 5 mendapat Rp5.000, mata lainnya tidak mendapat apa-apa. Berapa rata-rata untung atau rugi pemain per permainan?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: $P(X = 5.000)$ = ?",
   "options": [
    "$\\frac{2}{6}$",
    "$\\frac{1}{6}$",
    "$\\frac{3}{6}$"
   ],
   "answer": "$\\frac{2}{6}$",
   "hint": "Mata 4 atau 5.",
   "explain": "Dua mata dari enam: $\\frac{2}{6}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $E(X) = 15.000 \\cdot \\frac{1}{6} + 5.000 \\cdot \\frac{2}{6}$, bulatkan ke rupiah terdekat.",
   "answer": "4.167",
   "hint": "2.500 + 1.666,67.",
   "explain": "$E(X) \\approx 4.166{,}67$.",
   "error": "salah-pembulatan",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Untung $G = X - 5.000$. $E(G)$, bulatkan ke rupiah terdekat = ?",
   "answer": "-833",
   "hint": "$E(X - b) = E(X) - b$.",
   "explain": "$4.166{,}67 - 5.000 \\approx -833$.",
   "error": "salah-pembulatan",
   "prefix": "Rp"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Tafsirkan.",
   "options": [
    "Pemain rata-rata rugi, permainan tidak adil",
    "Permainan adil",
    "Pemain rata-rata untung"
   ],
   "answer": "Pemain rata-rata rugi, permainan tidak adil",
   "hint": "Perhatikan tanda $E(G)$.",
   "explain": "Nilai harapan negatif: pemain rugi sekitar Rp833 per permainan; pemilik stan untung.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: dalam 6.000 permainan, kira-kira 1.000 kali Rp15.000 dan 2.000 kali Rp5.000. Total hadiah = ?",
   "answer": "25.000.000",
   "hint": "15.000.000 + 10.000.000.",
   "explain": "Uang masuk Rp30.000.000, jadi rugi Rp5.000.000, yaitu $\\approx$ Rp833 per permainan. Cocok.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Jadi pemain rata-rata rugi sekitar Rp833 per permainan."
}
```

### Contoh 3: Menebak soal pilihan ganda

```soal
{
 "title": "Contoh 3",
 "text": "Ujian terdiri atas 10 soal pilihan ganda, masing-masing 4 pilihan. Andi menebak semua jawaban secara acak. Tentukan peluang Andi benar tepat 3 soal, peluang benar paling sedikit 3 soal, serta rata-rata dan variansi banyak jawaban benar.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Model yang tepat?",
   "options": [
    "$X \\sim B(10;\\ 0{,}25)$",
    "$X \\sim B(4;\\ 0{,}1)$",
    "$X \\sim B(10;\\ 0{,}75)$"
   ],
   "answer": "$X \\sim B(10;\\ 0{,}25)$",
   "hint": "$n$ = banyak soal, $p$ = peluang menebak benar satu soal.",
   "explain": "$n = 10$, $p = \\frac{1}{4}$, dan tebakan saling bebas.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\binom{10}{3}$ = ?",
   "answer": "120",
   "hint": "$\\frac{10 \\times 9 \\times 8}{6}$.",
   "explain": "120.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$P(X = 3) = 120(0{,}25)^3(0{,}75)^7$, bulatkan ke 4 desimal.",
   "answer": "0,2503",
   "hint": "$0{,}25^3 = 0{,}015625$ dan $0{,}75^7 \\approx 0{,}13348$.",
   "explain": "$\\approx 0{,}2503$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $P(X \\le 2) = 0{,}0563 + 0{,}1877 + 0{,}2816$ = ?",
   "answer": "0,5256",
   "hint": "Jumlahkan.",
   "explain": "$P(X \\le 2) = 0{,}5256$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$P(X \\ge 3)$ = ?",
   "answer": "0,4744",
   "hint": "Komplemen dari paling sedikit 3 adalah paling banyak 2.",
   "explain": "$1 - 0{,}5256 = 0{,}4744$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $E(X) = np$ = ?",
   "answer": "2,5",
   "hint": "$10 \\times 0{,}25$.",
   "explain": "$E(X) = 2{,}5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\operatorname{Var}(X) = np(1 - p)$ = ?",
   "answer": "1,875",
   "hint": "$10 \\times 0{,}25 \\times 0{,}75$.",
   "explain": "$1{,}875$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $P(X = 0) = 0{,}75^{10}$, bulatkan ke 4 desimal.",
   "answer": "0,0563",
   "hint": "Semua tebakan salah.",
   "explain": "0,0563, sesuai nilai kalkulator.",
   "error": "salah-pembulatan"
  }
 ],
 "conclusion": "Jadi $P(X = 3) \\approx 0{,}2503$, $P(X \\ge 3) \\approx 0{,}4744$, $E(X) = 2{,}5$, dan $\\operatorname{Var}(X) = 1{,}875$."
}
```

### Contoh 4: Benih cabai Pak Wayan

```soal
{
 "title": "Contoh 4",
 "text": "Peluang sebutir benih cabai tumbuh adalah 0,8, saling bebas antarbenih. (a) Pak Wayan menanam 15 benih. Tentukan peluang paling sedikit 13 benih tumbuh, serta rata-rata dan simpangan baku banyak benih yang tumbuh. (b) Berapa benih paling sedikit yang harus ditanam agar peluang paling sedikit satu benih gagal tumbuh lebih dari 0,95?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: $X \\sim B(15;\\ 0{,}8)$. Dari kalkulator $P(X=13) = 0{,}2309$, $P(X=14) = 0{,}1319$, $P(X=15) = 0{,}0352$. $P(X \\ge 13)$ = ?",
   "answer": "0,3980",
   "hint": "Jumlahkan ketiganya.",
   "explain": "$P(X \\ge 13) = 0{,}3980$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $E(X)$ = ?",
   "answer": "12",
   "hint": "$np = 15 \\times 0{,}8$.",
   "explain": "12 benih.",
   "error": "salah-langkah-materi",
   "suffix": "benih"
  },
  {
   "kind": "number",
   "prompt": "$\\operatorname{Var}(X)$ = ?",
   "answer": "2,4",
   "hint": "$15 \\times 0{,}8 \\times 0{,}2$.",
   "explain": "$2{,}4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Simpangan baku, bulatkan ke 2 desimal.",
   "answer": "1,55",
   "hint": "$\\sqrt{2{,}4}$.",
   "explain": "$\\sqrt{2{,}4} \\approx 1{,}55$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: (b) Syarat untuk $n$ benih?",
   "options": [
    "$0{,}8^n < 0{,}05$",
    "$0{,}2^n < 0{,}05$",
    "$0{,}8^n > 0{,}95$"
   ],
   "answer": "$0{,}8^n < 0{,}05$",
   "hint": "Paling sedikit satu gagal adalah komplemen dari semua tumbuh.",
   "explain": "$1 - 0{,}8^n > 0{,}95$, yaitu $0{,}8^n < 0{,}05$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: $n > \\frac{\\ln 0{,}05}{\\ln 0{,}8}$. Bulatkan ke 2 desimal.",
   "answer": "13,43",
   "hint": "$\\ln 0{,}8 < 0$, jadi tanda berbalik saat membagi.",
   "explain": "$\\frac{-2{,}996}{-0{,}223} \\approx 13{,}43$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Jadi paling sedikit berapa benih?",
   "answer": "14",
   "hint": "Bilangan bulat terkecil yang lebih dari 13,43.",
   "explain": "$n = 14$.",
   "error": "salah-arah-pembulatan",
   "suffix": "benih"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: $0{,}8^{13} \\approx 0{,}0550$ dan $0{,}8^{14} \\approx 0{,}0440$. Kesimpulannya?",
   "options": [
    "13 belum cukup, 14 cukup",
    "13 sudah cukup",
    "14 belum cukup"
   ],
   "answer": "13 belum cukup, 14 cukup",
   "hint": "Bandingkan masing-masing dengan 0,05.",
   "explain": "0,0550 > 0,05 tetapi 0,0440 < 0,05. Jadi 14 yang terkecil.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi (a) $P(X \\ge 13) \\approx 0{,}398$, rata-rata 12 benih, simpangan baku $\\approx 1{,}55$; (b) 14 benih."
}
```

## Kesalahan yang sering terjadi

- **Menulis $\operatorname{Var}(X) = E(X^2) - E(X)$.** Yang dikurangi adalah **kuadrat** rata-rata, $[E(X)]^2$. Pada Contoh 1, $10 - 3 = 7$ itu salah; yang benar $10 - 9 = 1$.
- **Menganggap konstanta memengaruhi variansi.** Menulis $\operatorname{Var}(3X - 1) = 3\operatorname{Var}(X) - 1$. Yang benar $\operatorname{Var}(3X - 1) = 9\operatorname{Var}(X)$.
- **Salah komplemen.** Menulis $P(X \ge 3) = 1 - P(X \le 3)$. Komplemen dari "paling sedikit 3" adalah "paling banyak 2", jadi $1 - P(X \le 2)$.
- **Memakai binomial saat peluang berubah.** Mengambil 3 bola tanpa pengembalian dari kotak kecil bukan binomial, karena $p$ berubah setelah setiap pengambilan. Selalu cek keempat syarat.
- **Membalik tanda pertidaksamaan logaritma dengan salah.** Membagi dengan $\ln 0{,}8$ yang negatif tanpa membalik tanda, sehingga mendapat $n < 13{,}43$.

## Ringkasan

- Distribusi peluang: semua $P(X=x)$ di antara 0 dan 1, jumlahnya 1.
- $E(X) = \sum x\,P(X=x)$ adalah rata-rata jangka panjang; $\operatorname{Var}(X) = E(X^2) - [E(X)]^2$.
- $E(aX+b) = aE(X)+b$ dan $\operatorname{Var}(aX+b) = a^2\operatorname{Var}(X)$.
- $X \sim B(n,p)$ jika $n$ tetap, dua hasil, $p$ tetap, dan saling bebas; $P(X=r) = \binom{n}{r}p^r(1-p)^{n-r}$.
- Untuk binomial: $E(X) = np$ dan $\operatorname{Var}(X) = np(1-p)$.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "$P(X=0) = 0{,}2$, $P(X=1) = 0{,}5$, $P(X=2) = 0{,}3$. Tentukan $E(X)$ dan $\\operatorname{Var}(X)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$E(X)$ = ?",
   "answer": "1,1",
   "hint": "$0(0{,}2) + 1(0{,}5) + 2(0{,}3)$.",
   "explain": "$0{,}5 + 0{,}6 = 1{,}1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$E(X^2)$ = ?",
   "answer": "1,7",
   "hint": "$0 + 1(0{,}5) + 4(0{,}3)$.",
   "explain": "$0{,}5 + 1{,}2 = 1{,}7$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\operatorname{Var}(X)$ = ?",
   "answer": "0,49",
   "hint": "$E(X^2) - [E(X)]^2$.",
   "explain": "$1{,}7 - 1{,}21 = 0{,}49$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $E(X) = 1{,}1$ dan $\\operatorname{Var}(X) = 0{,}49$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Diketahui $E(X) = 4$ dan $\\operatorname{Var}(X) = 2$. Tentukan $E(3X - 1)$ dan $\\operatorname{Var}(3X - 1)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$E(3X - 1)$ = ?",
   "answer": "11",
   "hint": "$aE(X) + b$.",
   "explain": "$3(4) - 1 = 11$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\operatorname{Var}(3X - 1)$ = ?",
   "answer": "18",
   "hint": "$a^2\\operatorname{Var}(X)$; konstanta tidak berpengaruh.",
   "explain": "$9(2) = 18$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $E(3X - 1) = 11$ dan $\\operatorname{Var}(3X - 1) = 18$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "$X \\sim B(8;\\ 0{,}5)$. Tentukan $P(X = 4)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\binom{8}{4}$ = ?",
   "answer": "70",
   "hint": "$\\frac{8 \\times 7 \\times 6 \\times 5}{24}$.",
   "explain": "70.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$P(X = 4) = 70(0{,}5)^8$, bulatkan ke 4 desimal.",
   "answer": "0,2734",
   "hint": "$0{,}5^8 = \\frac{1}{256}$.",
   "explain": "$\\frac{70}{256} \\approx 0{,}2734$.",
   "error": "salah-pembulatan"
  }
 ],
 "conclusion": "Jadi $P(X = 4) \\approx 0{,}2734$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "$X \\sim B(n, p)$ memiliki rata-rata 6 dan variansi 4,2. Tentukan $n$ dan $p$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\frac{np(1 - p)}{np} = 1 - p$ = ?",
   "answer": "0,7",
   "hint": "$\\frac{4{,}2}{6}$.",
   "explain": "$1 - p = 0{,}7$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$p$ = ?",
   "answer": "0,3",
   "hint": "$1 - 0,7$.",
   "explain": "$p = 0{,}3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$n$ = ?",
   "answer": "20",
   "hint": "$np = 6$.",
   "explain": "$n = \\frac{6}{0{,}3} = 20$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $n = 20$ dan $p = 0{,}3$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Sebanyak 5% lampu LED dari sebuah pabrik cacat. Satu kotak berisi 12 lampu. Tentukan peluang paling banyak 1 lampu cacat dalam satu kotak.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$X \\sim B(12;\\ 0{,}05)$. $P(X = 0) = 0{,}95^{12}$, bulatkan ke 4 desimal.",
   "answer": "0,5404",
   "hint": "Semua lampu baik.",
   "explain": "$\\approx 0{,}5404$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "$P(X = 1) = 12(0{,}05)(0{,}95)^{11}$, bulatkan ke 4 desimal.",
   "answer": "0,3413",
   "hint": "$0{,}95^{11} \\approx 0{,}5688$.",
   "explain": "$\\approx 0{,}3413$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "$P(X \\le 1)$, bulatkan ke 3 desimal.",
   "answer": "0,882",
   "hint": "Jumlahkan kedua peluang.",
   "explain": "$0{,}5404 + 0{,}3413 \\approx 0{,}882$.",
   "error": "salah-pembulatan"
  }
 ],
 "conclusion": "Jadi $P(X \\le 1) \\approx 0{,}882$."
}
```
