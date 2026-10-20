---
id: sma3-08-distribusi-normal
judul: Distribusi Normal
jenjang: sma3
moe: "H2 Mathematics 9758 · Probability and Statistics · Normal distribution"
prasyarat: [sma3-07-variabel-acak-binomial, sma1-04-ukuran-penyebaran]
durasi_menit: 70
---

## Kenapa belajar ini?

Tinggi badan siswa, massa beras dalam karung, dan nilai ujian biasanya berkumpul di sekitar rata-rata, lalu makin jarang ke arah ekstrem. Pola ini disebut distribusi normal. Dengan distribusi normal, kamu bisa menjawab pertanyaan seperti "berapa persen karung beras yang kurang dari 5 kg?" atau "berapa nilai minimum untuk masuk 10% terbaik?".

## Analogi

Bayangkan **gundukan pasir** yang terbentuk saat pasir dituang dari satu titik. Paling tinggi di tengah, lalu menurun mulus dan simetris ke kedua sisi. Total pasirnya tepat **1 ember**. Peluang suatu rentang nilai adalah **banyak pasir** di atas rentang itu, yaitu luas di bawah kurva.

```anim
{"type": "grafik", "title": "Gundukan pasir: kurva normal", "xmin": -4, "xmax": 4, "ymin": -0.05, "ymax": 0.75, "kurva": [{"f": "exp(-x^2/2)/sqrt(2pi)", "label": "\\sigma = 1"}, {"f": "exp(-x^2/0.72)/(0.6sqrt(2pi))", "label": "\\sigma = 0{,}6"}, {"f": "exp(-x^2/4.5)/(1.5sqrt(2pi))", "label": "\\sigma = 1{,}5"}], "langkah": [{"say": "Pasir dituang dari satu titik: tinggi di tengah, menurun mulus dan simetris.", "kurva": 1}, {"say": "Gundukan sempit ($\\sigma$ kecil) lebih tinggi; isi pasirnya tetap 1 ember.", "kurva": 2}, {"say": "Gundukan lebar ($\\sigma$ besar) lebih rendah. Luas di bawah setiap kurva selalu 1.", "kurva": 3}]}
```

Setiap gundukan punya letak dan lebar sendiri. Supaya cukup memakai satu tabel, kita mengukur semua gundukan dengan **penggaris standar**: bukan dalam cm atau kg, melainkan dalam **"berapa langkah simpangan baku dari tengah"**. Penggaris ini adalah nilai $Z$.

## Konsep

### Kurva normal

$X \sim N(\mu, \sigma^2)$ berarti $X$ berdistribusi normal dengan rata-rata $\mu$ dan **variansi** $\sigma^2$ (perhatikan: parameter kedua adalah variansi, bukan simpangan baku). Sifat-sifatnya:

- Kurva berbentuk lonceng, simetris terhadap $x = \mu$; rata-rata = median = modus.
- Luas total di bawah kurva adalah 1.
- $\sigma$ menentukan lebar: $\sigma$ besar berarti gundukan lebar dan rendah.
- $X$ kontinu, jadi $P(X = a) = 0$. Akibatnya $P(X < a) = P(X \le a)$.
- Kira-kira 68% luas berada dalam $\mu \pm \sigma$, 95% dalam $\mu \pm 2\sigma$, dan 99,7% dalam $\mu \pm 3\sigma$.

```anim
{"type": "grafik", "title": "Aturan 68, 95, 99,7", "xmin": -4, "xmax": 4, "ymin": -0.05, "ymax": 0.5, "kurva": [{"f": "exp(-x^2/2)/sqrt(2pi)", "label": "y = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2}"}], "garis": [{"x": -1}, {"x": 1}, {"x": -2}, {"x": 2}, {"x": -3}, {"x": 3}], "titik": [{"x": 0, "y": 0.3989, "label": "puncak di rata-rata"}], "langkah": [{"say": "Kurva normal baku: rata-rata 0, simpangan baku 1.", "kurva": 1, "titik": 1}, {"say": "Antara $-1$ dan $1$ (satu $\\sigma$ dari tengah): sekitar 68% luas.", "kurva": 1, "titik": 1, "garis": 2}, {"say": "Antara $-2$ dan $2$: sekitar 95% luas.", "kurva": 1, "titik": 1, "garis": 4}, {"say": "Antara $-3$ dan $3$: sekitar 99,7%. Di luar itu hampir tidak ada pasir.", "kurva": 1, "titik": 1, "garis": 6}]}
```

### Standardisasi

Didefinisikan

$$Z = \frac{X - \mu}{\sigma}.$$

**Kenapa $Z \sim N(0, 1)$?** Mengurangi $\mu$ menggeser gundukan ke tengah 0, dan membagi dengan $\sigma$ mengubah lebarnya menjadi 1. Dengan sifat nilai harapan dan variansi:

$$E(Z) = \frac{E(X) - \mu}{\sigma} = 0, \qquad \operatorname{Var}(Z) = \frac{\operatorname{Var}(X)}{\sigma^2} = 1.$$

Transformasi linear dari variabel normal tetap normal, jadi $Z \sim N(0,1)$, yaitu **normal baku**. Peluangnya ditulis $\Phi(z) = P(Z < z)$ dan dibaca dari tabel atau kalkulator (normalcdf).

```anim
{"type": "persamaan", "title": "Memakai penggaris standar", "baris": [{"tex": "X \\sim N(70,\\ 25):\\quad P(X < 80)", "say": "Berat buah durian (ons) berdistribusi normal, rata-rata 70, variansi 25."}, {"tex": "\\sigma = \\sqrt{25} = 5", "say": "Parameter kedua adalah variansi; ambil akarnya."}, {"tex": "z = \\frac{80 - 70}{5} = 2", "say": "80 berada 2 langkah simpangan baku di kanan tengah.", "op": "standardisasi"}, {"tex": "P(X < 80) = \\Phi(2) = 0{,}9772", "say": "Baca tabel normal baku: luas di kiri $z = 2$."}]}
```

### Mencari peluang

Gambar sketsa kurva dan arsir daerah yang dicari. Lalu pakai:

- $P(Z > z) = 1 - \Phi(z)$
- $P(Z < -z) = 1 - \Phi(z)$ (simetri)
- $P(a < Z < b) = \Phi(b) - \Phi(a)$

### Mencari nilai batas

Jika peluang diketahui dan batasnya dicari, balik prosesnya. Cari $z$ dengan $\Phi(z)$ yang diketahui (tabel terbalik atau invNorm), lalu

$$x = \mu + z\sigma.$$

Jika $\mu$ atau $\sigma$ tidak diketahui, setiap informasi peluang memberi satu persamaan $\frac{x - \mu}{\sigma} = z$. Dua informasi memberi sistem dua persamaan linear.

```anim
{"type": "grafik", "title": "Batas untuk 2,5% teratas", "xmin": -4, "xmax": 4, "ymin": -0.05, "ymax": 0.5, "kurva": [{"f": "exp(-x^2/2)/sqrt(2pi)", "label": "Z \\sim N(0, 1)"}], "garis": [{"x": 1.96}], "langkah": [{"say": "Cari $z$ sehingga luas di kanannya 0,025, yaitu luas di kirinya 0,975.", "kurva": 1}, {"say": "Tabel terbalik: $\\Phi(z) = 0{,}975$ memberi $z \\approx 1{,}96$. Lalu ubah balik: $x = \\mu + z\\sigma$.", "kurva": 1, "garis": 1}]}
```

### Kombinasi linear variabel normal

Jika $X$ dan $Y$ **saling bebas** dan berdistribusi normal, maka $aX + bY$ juga normal dengan

$$E(aX + bY) = aE(X) + bE(Y), \qquad \operatorname{Var}(aX + bY) = a^2\operatorname{Var}(X) + b^2\operatorname{Var}(Y).$$

Perhatikan bahwa $\operatorname{Var}(X - Y) = \operatorname{Var}(X) + \operatorname{Var}(Y)$. Selisih dua besaran acak tetap **lebih** tidak pasti, bukan kurang.

Bedakan dua hal ini:

- $X_1 + X_2 + \cdots + X_n$ (jumlah $n$ pengamatan **berbeda** yang saling bebas): $N(n\mu,\ n\sigma^2)$.
- $nX$ (**satu** pengamatan dikali $n$): $N(n\mu,\ n^2\sigma^2)$.

Pada jumlah banyak pengamatan, kelebihan dan kekurangan sebagian saling menutupi, sehingga variansinya lebih kecil daripada $nX$.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Tinggi badan siswa

```soal
{
 "title": "Contoh 1",
 "text": "Tinggi badan siswa kelas 12 di sebuah sekolah $X \\sim N(160, 64)$ dalam cm. Tentukan (a) $P(X < 172)$, (b) $P(150 < X < 172)$. Gunakan $\\Phi(1{,}5) = 0{,}9332$ dan $\\Phi(1{,}25) = 0{,}8944$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: $\\sigma$ = ?",
   "answer": "8",
   "hint": "Parameter kedua adalah variansi, $\\sigma^2 = 64$.",
   "explain": "$\\sigma = \\sqrt{64} = 8$.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $z$ untuk 172 = ?",
   "answer": "1,5",
   "hint": "$\\frac{172 - 160}{8}$.",
   "explain": "$z = 1{,}5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$z$ untuk 150 = ?",
   "answer": "-1,25",
   "hint": "$\\frac{150 - 160}{8}$; di bawah rata-rata, jadi negatif.",
   "explain": "$z = -1{,}25$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: (a) $P(X < 172) = \\Phi(1{,}5)$ = ?",
   "answer": "0,9332",
   "hint": "Tabel memberi luas di kiri.",
   "explain": "$0{,}9332$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $P(Z < -1{,}25) = 1 - \\Phi(1{,}25)$ = ?",
   "answer": "0,1056",
   "hint": "Pakai simetri.",
   "explain": "$1 - 0{,}8944 = 0{,}1056$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "(b) $P(150 < X < 172)$ = ?",
   "answer": "0,8276",
   "hint": "$\\Phi(1{,}5) - P(Z < -1{,}25)$.",
   "explain": "$0{,}9332 - 0{,}1056 = 0{,}8276$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: apakah 83% masuk akal?",
   "options": [
    "Ya, rentangnya sedikit lebih lebar dari μ ± σ (68%)",
    "Tidak, harus tepat 68%",
    "Tidak, harus lebih dari 95%"
   ],
   "answer": "Ya, rentangnya sedikit lebih lebar dari μ ± σ (68%)",
   "hint": "Rentang $-1{,}25\\sigma$ sampai $1{,}5\\sigma$ dibanding $\\pm\\sigma$ dan $\\pm 2\\sigma$.",
   "explain": "Lebih lebar dari 68% tetapi kurang dari 95%. Masuk akal.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi (a) $0{,}9332$ dan (b) $0{,}8276$."
}
```

### Contoh 2: Batas nilai untuk 10% terbaik

```soal
{
 "title": "Contoh 2",
 "text": "Nilai ujian matematika $X \\sim N(65, 100)$. Nilai A diberikan kepada 10% siswa terbaik. Berapa nilai minimum untuk mendapat A?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Terjemahkan ke peluang. Cari $a$ dengan...",
   "options": [
    "$P(X < a) = 0{,}9$",
    "$P(X < a) = 0{,}1$",
    "$P(X > a) = 0{,}9$"
   ],
   "answer": "$P(X < a) = 0{,}9$",
   "hint": "10% terbaik berada di ujung kanan.",
   "explain": "$P(X > a) = 0{,}1$, sama dengan $P(X < a) = 0{,}9$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Tabel terbalik $\\Phi(z) = 0{,}9$ memberi $z$ = ?",
   "options": [
    "1,2816",
    "−1,2816",
    "0,8159"
   ],
   "answer": "1,2816",
   "hint": "Batas di atas rata-rata, jadi $z$ positif.",
   "explain": "$z = 1{,}2816$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $a = 65 + 1{,}2816 \\times 10$, bulatkan ke 1 desimal.",
   "answer": "77,8",
   "hint": "$\\sigma = \\sqrt{100} = 10$.",
   "explain": "$65 + 12{,}816 = 77{,}816 \\approx 77{,}8$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $P(X > 77{,}8) = 1 - \\Phi(1{,}28)$ dengan $\\Phi(1{,}28) = 0{,}8997$. Hasilnya = ?",
   "answer": "0,1003",
   "hint": "Kurangkan dari 1.",
   "explain": "Sekitar 10%. Tepat.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi nilai minimum untuk A sekitar 77,8."
}
```

### Contoh 3: Mencari $\mu$ dan $\sigma$ sekaligus

```soal
{
 "title": "Contoh 3",
 "text": "Massa beras dalam karung berlabel 5 kg berdistribusi normal. Diketahui 15% karung bermassa kurang dari 4,9 kg dan 5% karung bermassa lebih dari 5,2 kg. Tentukan $\\mu$ dan $\\sigma$. Gunakan $\\Phi(-1{,}0364) = 0{,}15$ dan $\\Phi(1{,}6449) = 0{,}95$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Persamaan dari $P(X < 4{,}9) = 0{,}15$?",
   "options": [
    "$\\mu - 1{,}0364\\sigma = 4{,}9$",
    "$\\mu + 1{,}0364\\sigma = 4{,}9$",
    "$\\mu - 0{,}15\\sigma = 4{,}9$"
   ],
   "answer": "$\\mu - 1{,}0364\\sigma = 4{,}9$",
   "hint": "$\\frac{4{,}9 - \\mu}{\\sigma} = -1{,}0364$; batas bawah, $z$ negatif.",
   "explain": "Kalikan dengan $\\sigma$ lalu susun: $\\mu - 1{,}0364\\sigma = 4{,}9$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Persamaan dari $P(X > 5{,}2) = 0{,}05$?",
   "options": [
    "$\\mu + 1{,}6449\\sigma = 5{,}2$",
    "$\\mu - 1{,}6449\\sigma = 5{,}2$",
    "$\\mu + 0{,}05\\sigma = 5{,}2$"
   ],
   "answer": "$\\mu + 1{,}6449\\sigma = 5{,}2$",
   "hint": "$P(X < 5{,}2) = 0{,}95$ memberi $z = 1{,}6449$.",
   "explain": "$\\frac{5{,}2 - \\mu}{\\sigma} = 1{,}6449$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Eliminasi: $2{,}6813\\sigma = 0{,}3$. $\\sigma$, bulatkan ke 4 desimal.",
   "answer": "0,1119",
   "hint": "Bagi 0,3 dengan 2,6813.",
   "explain": "$\\sigma \\approx 0{,}1119$ kg.",
   "error": "salah-pembulatan",
   "suffix": "kg"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $\\mu = 4{,}9 + 1{,}0364 \\times 0{,}1119$, bulatkan ke 3 desimal.",
   "answer": "5,016",
   "hint": "$1{,}0364 \\times 0{,}1119 \\approx 0{,}116$.",
   "explain": "$\\mu \\approx 5{,}016$ kg.",
   "error": "salah-pembulatan",
   "suffix": "kg"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: $\\frac{4{,}9 - 5{,}016}{0{,}1119}$ kira-kira?",
   "options": [
    "−1,04",
    "1,04",
    "−0,15"
   ],
   "answer": "−1,04",
   "hint": "$\\frac{-0{,}116}{0{,}1119}$.",
   "explain": "Cocok dengan $z = -1{,}0364$ di Langkah 1.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\mu \\approx 5{,}016$ kg dan $\\sigma \\approx 0{,}112$ kg."
}
```

### Contoh 4: Kardus kopi bubuk

```soal
{
 "title": "Contoh 4",
 "text": "Massa satu bungkus kopi bubuk $X \\sim N(200, 4^2)$ gram. Massa satu kardus kosong $K \\sim N(50, 3^2)$ gram. Satu kardus diisi 10 bungkus, semua massa saling bebas. (a) Tentukan peluang massa total kardus berisi lebih dari 2.060 gram. (b) Dua bungkus dipilih acak. Tentukan peluang selisih massanya kurang dari 5 gram.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Variabel total yang tepat?",
   "options": [
    "$T = X_1 + \\cdots + X_{10} + K$",
    "$T = 10X + K$"
   ],
   "answer": "$T = X_1 + \\cdots + X_{10} + K$",
   "hint": "Apakah isinya 10 bungkus berbeda, atau satu bungkus dilipatgandakan?",
   "explain": "Sepuluh bungkus berbeda yang saling bebas.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $E(T)$ = ?",
   "answer": "2050",
   "hint": "$10(200) + 50$.",
   "explain": "$E(T) = 2.050$ gram.",
   "error": "salah-langkah-materi",
   "suffix": "gram"
  },
  {
   "kind": "number",
   "prompt": "$\\operatorname{Var}(T)$ = ?",
   "answer": "169",
   "hint": "$10(16) + 9$.",
   "explain": "$169$, jadi $\\sigma_T = 13$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $z = \\frac{2060 - 2050}{13}$, bulatkan ke 3 desimal.",
   "answer": "0,769",
   "hint": "$\\frac{10}{13}$.",
   "explain": "$z \\approx 0{,}769$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "(a) $P(T > 2060) = 1 - \\Phi(0{,}769)$ dengan $\\Phi(0{,}769) = 0{,}7791$. Hasilnya = ?",
   "answer": "0,2209",
   "hint": "Luas di kanan.",
   "explain": "$1 - 0{,}7791 = 0{,}2209$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $D = X_1 - X_2$. $\\operatorname{Var}(D)$ = ?",
   "answer": "32",
   "hint": "Variansi selisih dijumlahkan, bukan dikurangkan.",
   "explain": "$16 + 16 = 32$, $\\sigma_D \\approx 5{,}657$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: (b) $P(|D| < 5) = 2\\Phi(0{,}8839) - 1$ dengan $\\Phi(0{,}8839) = 0{,}8116$. Hasilnya = ?",
   "answer": "0,6232",
   "hint": "$z = \\frac{5}{5{,}657} \\approx 0{,}8839$; daerahnya simetris.",
   "explain": "$2(0{,}8116) - 1 = 0{,}6232$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi (a) $\\approx 0{,}221$ dan (b) $\\approx 0{,}623$."
}
```

## Kesalahan yang sering terjadi

- **Memakai variansi sebagai simpangan baku.** Pada $N(160, 64)$, menulis $z = \frac{172 - 160}{64}$. Bagilah dengan $\sigma = \sqrt{64} = 8$.
- **Lupa arah daerah.** Membaca $\Phi(1{,}5) = 0{,}9332$ sebagai $P(Z > 1{,}5)$. Tabel memberi luas di **kiri**. Selalu buat sketsa dan arsir dulu.
- **Mengurangkan variansi pada selisih.** Menulis $\operatorname{Var}(X_1 - X_2) = 16 - 16 = 0$. Variansi selalu dijumlahkan: $16 + 16 = 32$.
- **Menyamakan $X_1 + X_2$ dengan $2X$.** $\operatorname{Var}(X_1 + X_2) = 2\sigma^2$, sedangkan $\operatorname{Var}(2X) = 4\sigma^2$. Baca soal: apakah benda yang dijumlahkan berbeda, atau satu benda dilipatgandakan?
- **Tanda $z$ salah saat mencari batas bawah.** Untuk 15% terbawah, $z$ harus negatif ($-1{,}0364$). Batas di bawah rata-rata selalu memiliki $z < 0$.

## Ringkasan

- $X \sim N(\mu, \sigma^2)$: simetris terhadap $\mu$, luas total 1, peluang = luas di bawah kurva.
- Standardisasi: $Z = \frac{X - \mu}{\sigma} \sim N(0, 1)$, lalu baca $\Phi(z) = P(Z < z)$.
- Mencari batas: cari $z$ dari peluang, lalu $x = \mu + z\sigma$. Dua informasi peluang memberi dua persamaan untuk $\mu$ dan $\sigma$.
- Untuk $X, Y$ normal saling bebas: $aX + bY \sim N(a\mu_X + b\mu_Y,\ a^2\sigma_X^2 + b^2\sigma_Y^2)$.
- $X_1 + \cdots + X_n \sim N(n\mu, n\sigma^2)$, berbeda dengan $nX \sim N(n\mu, n^2\sigma^2)$.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "$X \\sim N(50, 25)$. Tentukan $P(X > 58)$. Gunakan $\\Phi(1{,}6) = 0{,}9452$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\sigma$ = ?",
   "answer": "5",
   "hint": "$\\sqrt{25}$.",
   "explain": "$\\sigma = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$z$ = ?",
   "answer": "1,6",
   "hint": "$\\frac{58 - 50}{5}$.",
   "explain": "$z = 1{,}6$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$P(X > 58)$ = ?",
   "answer": "0,0548",
   "hint": "$1 - \\Phi(1{,}6)$.",
   "explain": "$1 - 0{,}9452 = 0{,}0548$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $P(X > 58) = 0{,}0548$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "$X \\sim N(50, 25)$. Tentukan $P(45 < X < 55)$. Gunakan $\\Phi(1) = 0{,}84134$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$z$ untuk 55 = ?",
   "answer": "1",
   "hint": "$\\frac{55 - 50}{5}$.",
   "explain": "$z = 1$; untuk 45, $z = -1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$P(-1 < Z < 1) = 2\\Phi(1) - 1$, bulatkan ke 4 desimal.",
   "answer": "0,6827",
   "hint": "$2(0{,}84134) - 1$.",
   "explain": "$0{,}68268 \\approx 0{,}6827$, sesuai aturan 68%.",
   "error": "salah-pembulatan"
  }
 ],
 "conclusion": "Jadi $P(45 < X < 55) \\approx 0{,}6827$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Tentukan $a$ jika $P(Z < a) = 0{,}9$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Apakah $a$ positif atau negatif?",
   "options": [
    "Positif",
    "Negatif",
    "Nol"
   ],
   "answer": "Positif",
   "hint": "Luas di kiri $a$ lebih dari 0,5.",
   "explain": "Lebih dari separuh luas di kiri, jadi $a$ di kanan 0.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Dari tabel terbalik, $a$ = ?",
   "options": [
    "1,2816",
    "−1,2816",
    "0,8159"
   ],
   "answer": "1,2816",
   "hint": "Cari $z$ dengan $\\Phi(z) = 0{,}9$.",
   "explain": "$a = 1{,}2816$. Nilai 0,8159 adalah $\\Phi(0{,}9)$, arahnya terbalik.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $a = 1{,}2816$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "$X \\sim N(\\mu, 16)$ dan $P(X < 30) = 0{,}2$. Tentukan $\\mu$. Gunakan $\\Phi(-0{,}8416) = 0{,}2$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\sigma$ = ?",
   "answer": "4",
   "hint": "$\\sqrt{16}$.",
   "explain": "$\\sigma = 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Persamaannya?",
   "options": [
    "$\\frac{30 - \\mu}{4} = -0{,}8416$",
    "$\\frac{30 - \\mu}{4} = 0{,}8416$",
    "$\\frac{30 - \\mu}{16} = -0{,}8416$"
   ],
   "answer": "$\\frac{30 - \\mu}{4} = -0{,}8416$",
   "hint": "Peluang 0,2 < 0,5, jadi 30 di bawah rata-rata dan $z$ negatif.",
   "explain": "$\\frac{30 - \\mu}{4} = -0{,}8416$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\mu$, bulatkan ke 2 desimal.",
   "answer": "33,37",
   "hint": "$\\mu = 30 + 0{,}8416 \\times 4$.",
   "explain": "$30 + 3{,}366 \\approx 33{,}37$.",
   "error": "salah-pembulatan"
  }
 ],
 "conclusion": "Jadi $\\mu \\approx 33{,}37$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "$X \\sim N(10, 4)$ dan $Y \\sim N(15, 9)$ saling bebas. Tentukan $P(X + Y > 28)$. Gunakan $\\Phi(0{,}832) = 0{,}7973$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$E(X + Y)$ = ?",
   "answer": "25",
   "hint": "Jumlahkan rata-rata.",
   "explain": "$10 + 15 = 25$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\operatorname{Var}(X + Y)$ = ?",
   "answer": "13",
   "hint": "Jumlahkan variansi (saling bebas).",
   "explain": "$4 + 9 = 13$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$z = \\frac{28 - 25}{\\sqrt{13}}$, bulatkan ke 3 desimal.",
   "answer": "0,832",
   "hint": "$\\sqrt{13} \\approx 3{,}606$.",
   "explain": "$z \\approx 0{,}832$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "$P(X + Y > 28)$ = ?",
   "answer": "0,2027",
   "hint": "$1 - \\Phi(0{,}832)$.",
   "explain": "$1 - 0{,}7973 = 0{,}2027$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $P(X + Y > 28) \\approx 0{,}2027$."
}
```
