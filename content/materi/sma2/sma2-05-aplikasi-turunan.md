---
id: sma2-05-aplikasi-turunan
judul: Aplikasi Turunan
jenjang: sma2
moe: "H2 Mathematics 9758 · Pure Mathematics · Calculus (Applications of Differentiation)"
prasyarat: [sma2-04-turunan]
durasi_menit: 75
---

## Kenapa belajar ini?

Turunan bukan hanya rumus. Dengan turunan, kamu bisa mencari garis yang "menempel" pada kurva, menghitung seberapa cepat air naik di tangki, dan menentukan ukuran kotak yang paling hemat bahan. Insinyur, ekonom, dan perancang produk memakai cara berpikir ini setiap hari.

## Analogi

Bayangkan kamu berjalan di **jalan setapak yang naik-turun di bukit Kintamani**. Di setiap titik, kakimu merasakan **kemiringan** jalan. Kemiringan itu adalah nilai turunan $f'(x)$ di titik tersebut.

- Kalau kamu meletakkan **papan lurus** yang menempel pas di bawah kaki, papan itu adalah **garis singgung**. Kemiringannya sama dengan kemiringan jalan.
- Kalau kamu menancapkan **tiang** tegak lurus terhadap papan, tiang itu adalah **garis normal**.
- Di **puncak bukit** dan **dasar lembah**, jalan sesaat datar. Di sanalah kemiringan nol, dan di sanalah nilai maksimum atau minimum.
- Kalau kamu berjalan dengan kecepatan tertentu, ketinggianmu ikut berubah. Laju naik ketinggian = kemiringan × laju langkah. Inilah **laju yang berkaitan**.

```anim
{"type": "grafik", "title": "Papan dan tiang di jalan bukit", "xmin": -1, "xmax": 5.33, "ymin": 1.5, "ymax": 5.5, "kurva": [{"f": "4-0.5(x-2)^2", "label": "\\text{jalan bukit}"}, {"f": "x+2.5", "label": "\\text{papan (singgung), gradien } 1"}, {"f": "4.5-x", "label": "\\text{tiang (normal), gradien } -1"}, {"f": "4", "label": "\\text{puncak: papan datar}"}], "titik": [{"x": 1, "y": 3.5, "label": "kaki di x = 1"}, {"x": 2, "y": 4, "label": "puncak"}], "langkah": [{"say": "Jalan setapak naik-turun di bukit.", "kurva": 1}, {"say": "Di $x = 1$ kemiringan jalan 1. Papan yang menempel pas adalah garis singgung.", "kurva": 2, "titik": 1}, {"say": "Tiang tegak lurus papan adalah garis normal: gradiennya $-1$, karena $1 \\times (-1) = -1$.", "kurva": 3, "titik": 1}, {"say": "Di puncak, papan mendatar: kemiringan 0. Di sinilah nilai maksimum.", "kurva": 4, "titik": 2}]}
```

Analogi papan, tiang, dan puncak ini akan dipakai di setiap langkah.

## Konsep

### Garis singgung dan garis normal

Misalkan titik $P(x_1, y_1)$ terletak pada kurva $y = f(x)$.

- Gradien garis singgung (papan) adalah $m = f'(x_1)$.
- Persamaan garis singgung:
$$ y - y_1 = f'(x_1)\,(x - x_1) $$
- Garis normal (tiang) tegak lurus garis singgung. Dua garis tegak lurus memenuhi $m_1 \times m_2 = -1$, jadi gradien normal adalah
$$ m_N = -\frac{1}{f'(x_1)} \quad (f'(x_1) \neq 0) $$
- Persamaan garis normal: $y - y_1 = -\dfrac{1}{f'(x_1)}(x - x_1)$.

Kasus khusus: jika $f'(x_1) = 0$, garis singgung mendatar $y = y_1$ dan garis normal tegak $x = x_1$.

### Laju perubahan yang berkaitan

Sering dua besaran berubah terhadap waktu $t$ dan saling terhubung oleh rumus $y = f(x)$. Dari aturan rantai:
$$ \frac{dy}{dt} = \frac{dy}{dx} \times \frac{dx}{dt} $$

Artinya: laju perubahan $y$ = (kemiringan $y$ terhadap $x$) × (laju perubahan $x$). Persis seperti pendaki: laju naik ketinggian = kemiringan jalan × kecepatan berjalan.

Urutan kerja: tulis rumus penghubung, turunkan terhadap variabel penghubung, **baru** masukkan nilai pada saat yang ditanyakan.

```anim
{"type": "persamaan", "title": "Balon ditiup: laju volume dan laju jari-jari", "baris": [{"tex": "V = \\tfrac{4}{3}\\pi r^3", "say": "Rumus penghubung volume dan jari-jari balon."}, {"tex": "\\frac{dV}{dr} = 4\\pi r^2", "say": "Turunkan terhadap variabel penghubung $r$.", "op": "$\\frac{d}{dr}$"}, {"tex": "\\frac{dV}{dt} = 4\\pi r^2 \\cdot \\frac{dr}{dt}", "say": "Aturan rantai: kalikan dengan laju $r$.", "op": "$\\times \\frac{dr}{dt}$"}, {"tex": "r = 2,\\ \\frac{dr}{dt} = 0{,}5:\\ \\frac{dV}{dt} = 4\\pi(4)(0{,}5) = 8\\pi", "say": "Baru sekarang masukkan nilai saat itu."}]}
```

### Masalah maksimum dan minimum

Untuk mencari nilai terbesar atau terkecil sebuah besaran:

1. Nyatakan besaran itu sebagai fungsi **satu** variabel, memakai syarat (kendala) di soal.
2. Cari titik stasioner: $\dfrac{dy}{dx} = 0$ (puncak atau lembah, jalan datar).
3. Tentukan jenisnya dengan uji turunan kedua: $\dfrac{d^2y}{dx^2} < 0$ berarti maksimum, $\dfrac{d^2y}{dx^2} > 0$ berarti minimum.
4. Periksa daerah asal yang masuk akal (panjang tidak boleh negatif, dan sebagainya).

```anim
{"type": "grafik", "title": "Luas persegi panjang berkeliling 20", "xmin": 0, "xmax": 10.5, "ymin": 0, "ymax": 30, "kurva": [{"f": "x(10-x)", "label": "L = x(10 - x)"}], "titik": [{"x": 5, "y": 25, "label": "L' = 0: maksimum (5, 25)"}, {"x": 2, "y": 16, "label": "L' > 0"}, {"x": 8, "y": 16, "label": "L' < 0"}], "langkah": [{"say": "Kendala: keliling 20, jadi lebar $= 10 - x$ dan $L = x(10 - x)$, satu variabel.", "kurva": 1}, {"say": "Di kiri puncak $L'$ positif (naik), di kanan negatif (turun).", "kurva": 1, "titik": 3}, {"say": "$L' = 10 - 2x = 0$ di $x = 5$, dan $L'' = -2 < 0$: maksimum 25 (persegi 5 × 5).", "kurva": 1, "titik": 1}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Garis singgung dan garis normal

```soal
{
 "title": "Contoh 1",
 "text": "Tentukan persamaan garis singgung dan garis normal pada kurva $y = x^3 - 2x + 1$ di titik dengan $x = 2$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Cari titik singgung. Berapa $y$ saat $x = 2$?",
   "answer": "5",
   "hint": "Substitusi $x = 2$ ke rumus kurva.",
   "explain": "$8 - 4 + 1 = 5$, titiknya $(2, 5)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kemiringan papan: $\\frac{dy}{dx}$ di $x = 2$?",
   "answer": "10",
   "hint": "$\\frac{dy}{dx} = 3x^2 - 2$.",
   "explain": "$3(4) - 2 = 10$. Gradien dari turunan, bukan dari nilai $y$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Persamaan garis singgung?",
   "options": [
    "$y = 10x - 15$",
    "$y = 10x - 5$",
    "$y = 5x - 5$"
   ],
   "answer": "$y = 10x - 15$",
   "hint": "$y - 5 = 10(x - 2)$.",
   "explain": "$y = 10x - 20 + 5 = 10x - 15$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Gradien garis normal (tiang)?",
   "options": [
    "$-\\frac{1}{10}$",
    "$-10$",
    "$\\frac{1}{10}$"
   ],
   "answer": "$-\\frac{1}{10}$",
   "hint": "Hasil kali gradien dua garis tegak lurus adalah $-1$.",
   "explain": "$10 \\times \\left(-\\frac{1}{10}\\right) = -1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Persamaan garis normal?",
   "options": [
    "$x + 10y - 52 = 0$",
    "$x - 10y + 48 = 0$",
    "$10x + y - 25 = 0$"
   ],
   "answer": "$x + 10y - 52 = 0$",
   "hint": "$y - 5 = -\\frac{1}{10}(x - 2)$, lalu kalikan 10.",
   "explain": "$10y - 50 = -x + 2$, jadi $x + 10y - 52 = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung $2 + 10(5) - 52$.",
   "answer": "0",
   "hint": "Titik $(2, 5)$ harus ada di garis normal.",
   "explain": "Hasilnya 0, jadi titik singgung ada di garis normal. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Garis singgung $y = 10x - 15$, garis normal $x + 10y - 52 = 0$."
}
```

### Contoh 2: Air naik di tangki kerucut

```anim
{"type": "bangun", "title": "Penampang tangki kerucut terbalik", "titik": {"A": [-1, 3], "B": [1, 3], "V": [0, 0], "P": [-0.5, 1.5], "Q": [0.5, 1.5], "O": [0, 3], "M": [0, 1.5]}, "sisi": [["A", "B"], ["A", "V"], ["B", "V"], ["O", "B", "1"], ["O", "V", "3"], ["P", "Q"], ["M", "Q", "r"], ["M", "V", "h"]], "langkah": [{"say": "Tangki: tinggi 3 m, jari-jari atas 1 m.", "sisi": 5}, {"say": "Air setinggi $h$ dengan jari-jari permukaan $r$.", "sisi": 8, "sorot": ["MQ", "MV"]}, {"say": "Segitiga kecil $VMQ$ sebangun dengan segitiga besar $VOB$: $\\frac{r}{h} = \\frac{1}{3}$.", "sisi": 8, "sorot": ["MQ", "MV", "OB", "OV"]}]}
```

```soal
{
 "title": "Contoh 2",
 "text": "Tangki kerucut terbalik bertinggi 3 m dan berjari-jari atas 1 m. Air masuk dengan laju $0{,}2\\ \\text{m}^3$ per menit. Seberapa cepat permukaan air naik ketika kedalaman air 1,5 m?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Hubungkan $r$ dan $h$ dengan kesebangunan.",
   "options": [
    "$r = \\frac{h}{3}$",
    "$r = 3h$",
    "$r = \\frac{1}{3}$"
   ],
   "answer": "$r = \\frac{h}{3}$",
   "hint": "$\\frac{r}{h} = \\frac{1}{3}$ untuk setiap kedalaman.",
   "explain": "Jari-jari permukaan selalu sepertiga kedalaman.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Tulis $V = \\frac{1}{3}\\pi r^2 h$ dalam $h$ saja.",
   "options": [
    "$\\frac{\\pi h^3}{27}$",
    "$\\frac{\\pi h^3}{9}$",
    "$\\frac{\\pi h^2}{27}$"
   ],
   "answer": "$\\frac{\\pi h^3}{27}$",
   "hint": "Ganti $r$ dengan $\\frac{h}{3}$, lalu $\\left(\\frac{h}{3}\\right)^2 = \\frac{h^2}{9}$.",
   "explain": "$\\frac{1}{3}\\pi \\cdot \\frac{h^2}{9} \\cdot h = \\frac{\\pi h^3}{27}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Turunkan $\\frac{dV}{dh}$.",
   "options": [
    "$\\frac{\\pi h^2}{9}$",
    "$\\frac{\\pi h^2}{27}$",
    "$\\frac{3\\pi h^2}{9}$"
   ],
   "answer": "$\\frac{\\pi h^2}{9}$",
   "hint": "Aturan pangkat, lalu sederhanakan $\\frac{3}{27}$.",
   "explain": "$\\frac{3\\pi h^2}{27} = \\frac{\\pi h^2}{9}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Di $h = 1{,}5$, $\\frac{dV}{dh} = k\\pi$. Berapa $k$?",
   "answer": "0,25",
   "hint": "$\\frac{1{,}5^2}{9} = \\frac{2{,}25}{9}$.",
   "explain": "$\\frac{dV}{dh} = 0{,}25\\pi$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: $\\frac{dh}{dt} = \\frac{0{,}2}{0{,}25\\pi}$. Bulatkan ke 3 desimal.",
   "answer": "0,255",
   "hint": "$\\frac{0{,}2}{0{,}25} = 0{,}8$, lalu bagi dengan $\\pi$.",
   "explain": "$\\frac{0{,}8}{\\pi} \\approx 0{,}255$ m/menit.",
   "error": "salah-pembulatan",
   "suffix": "m/menit"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: satuan $(\\text{m}^3/\\text{menit}) \\div \\text{m}^2$ adalah?",
   "options": [
    "m/menit",
    "m²/menit",
    "m³/menit"
   ],
   "answer": "m/menit",
   "hint": "Coret satuan m.",
   "explain": "Satuannya m/menit, cocok dengan laju naik permukaan.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Permukaan air naik dengan laju $\\frac{0{,}8}{\\pi} \\approx 0{,}255$ m per menit."
}
```

### Contoh 3: Pagar kandang dengan kawat terbatas

```soal
{
 "title": "Contoh 3",
 "text": "Pak Made punya 60 m kawat untuk memagari kandang ayam persegi panjang. Satu sisi menempel tembok rumah, jadi hanya tiga sisi yang dipagari. Berapa luas kandang terbesar?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Dua sisi tegak lurus tembok masing-masing $x$ m. Panjang sisi sejajar tembok?",
   "options": [
    "$60 - 2x$",
    "$60 - x$",
    "$30 - x$"
   ],
   "answer": "$60 - 2x$",
   "hint": "Kawat dipakai untuk dua sisi $x$ dan satu sisi lagi.",
   "explain": "Sisa kawat $60 - 2x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Fungsi luasnya?",
   "options": [
    "$L = 60x - 2x^2$",
    "$L = 60x - x^2$",
    "$L = 2x(60 - x)$"
   ],
   "answer": "$L = 60x - 2x^2$",
   "hint": "Luas = panjang × lebar.",
   "explain": "$L = x(60 - 2x) = 60x - 2x^2$, untuk $0 < x < 30$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Selesaikan $\\frac{dL}{dx} = 0$. Berapa $x$?",
   "answer": "15",
   "hint": "$\\frac{dL}{dx} = 60 - 4x$.",
   "explain": "$60 - 4x = 0$, jadi $x = 15$.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Berapa $\\frac{d^2L}{dx^2}$?",
   "answer": "-4",
   "hint": "Turunkan $60 - 4x$.",
   "explain": "Negatif, jadi puncak (maksimum).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Berapa luas terbesar?",
   "answer": "450",
   "hint": "Sisi sejajar tembok $60 - 30 = 30$ m.",
   "explain": "$15 \\times 30 = 450$ m².",
   "error": "salah-langkah-materi",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: luas saat $x = 14$?",
   "answer": "448",
   "hint": "Sisi lain $60 - 28 = 32$.",
   "explain": "$14 \\times 32 = 448 < 450$. Begitu juga $x = 16$ memberi 448. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "m²"
  }
 ],
 "conclusion": "Luas terbesar 450 m², dengan ukuran 15 m × 30 m."
}
```

### Contoh 4: Kotak tanpa tutup dari karton

```soal
{
 "title": "Contoh 4",
 "text": "Siti memotong persegi $x$ cm dari setiap pojok karton persegi 30 cm × 30 cm, lalu melipatnya menjadi kotak tanpa tutup. Tentukan $x$ agar volume kotak maksimum, dan hitung volumenya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Rumus volumenya?",
   "options": [
    "$V = x(30 - 2x)^2$",
    "$V = x(30 - x)^2$",
    "$V = x^2(30 - 2x)$"
   ],
   "answer": "$V = x(30 - 2x)^2$",
   "hint": "Setiap sisi alas berkurang $x$ di kedua ujungnya; tingginya $x$.",
   "explain": "Alas $(30 - 2x) \\times (30 - 2x)$, tinggi $x$: $V = 4x^3 - 120x^2 + 900x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Faktorkan $\\frac{dV}{dx} = 12x^2 - 240x + 900$.",
   "options": [
    "$12(x - 5)(x - 15)$",
    "$12(x + 5)(x + 15)$",
    "$12(x - 3)(x - 25)$"
   ],
   "answer": "$12(x - 5)(x - 15)$",
   "hint": "Keluarkan 12, lalu cari dua bilangan berjumlah 20 dan berhasil kali 75.",
   "explain": "$12(x^2 - 20x + 75) = 12(x - 5)(x - 15)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Nilai $x$ yang masuk daerah asal $0 < x < 15$?",
   "answer": "5",
   "hint": "$x = 15$ membuat alas kotak hilang.",
   "explain": "$x = 5$.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $\\frac{d^2V}{dx^2} = 24x - 240$. Berapa nilainya di $x = 5$?",
   "answer": "-120",
   "hint": "$120 - 240$.",
   "explain": "Negatif, jadi maksimum.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Volume maksimumnya?",
   "answer": "2000",
   "hint": "$5 \\times 20^2$.",
   "explain": "$5 \\times 400 = 2000$ cm³.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: volume saat $x = 4$?",
   "answer": "1936",
   "hint": "$4 \\times 22^2$.",
   "explain": "$1936 < 2000$, dan $x = 6$ memberi $1944$. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  }
 ],
 "conclusion": "$x = 5$ cm, volume maksimum 2000 cm³."
}
```

## Kesalahan yang sering terjadi

- **Memakai nilai $y$ sebagai gradien.** Pada Contoh 1, menulis $m = 5$ karena $y = 5$. Gradien adalah $f'(x_1)$, bukan $f(x_1)$. Papan mengikuti kemiringan, bukan ketinggian.
- **Gradien normal hanya diberi tanda minus.** Menulis $m_N = -10$. Syarat tegak lurus adalah $m_1 m_2 = -1$, jadi $m_N = -\dfrac{1}{10}$.
- **Memasukkan nilai sebelum menurunkan.** Pada Contoh 2, langsung menulis $r = 0{,}5$ lalu $V = \dfrac{1}{3}\pi(0{,}25)h$. Akibatnya hubungan $r$ dengan $h$ hilang. Turunkan dulu, baru substitusi nilai saat itu.
- **Lupa menguji jenis titik stasioner.** Titik datar bisa puncak, bisa lembah. Selalu uji dengan $\dfrac{d^2y}{dx^2}$ atau tabel tanda.
- **Mengabaikan daerah asal.** Pada Contoh 4, $x = 15$ juga membuat $\dfrac{dV}{dx} = 0$, tetapi kotaknya bervolume 0. Selalu periksa apakah jawaban masuk akal.

## Ringkasan

- Garis singgung di $(x_1, y_1)$: $y - y_1 = f'(x_1)(x - x_1)$.
- Garis normal: gradien $-\dfrac{1}{f'(x_1)}$, karena $m_1 m_2 = -1$.
- Laju berkaitan: $\dfrac{dy}{dt} = \dfrac{dy}{dx} \times \dfrac{dx}{dt}$. Turunkan dulu, substitusi nilai kemudian.
- Maksimum/minimum: buat fungsi satu variabel, selesaikan $f'(x) = 0$, uji dengan $f''(x)$, periksa daerah asal.
- Selalu cek: titik ada di garis, satuan cocok, dan nilai di sekitar jawaban lebih kecil (untuk maksimum).

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tentukan persamaan garis singgung pada $y = x^2 + 3x$ di titik dengan $x = 1$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa $y$ saat $x = 1$?",
   "answer": "4",
   "hint": "$1 + 3$.",
   "explain": "Titiknya $(1, 4)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Berapa gradiennya?",
   "answer": "5",
   "hint": "$\\frac{dy}{dx} = 2x + 3$.",
   "explain": "$2 + 3 = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Persamaan garis singgung?",
   "options": [
    "$y = 5x - 1$",
    "$y = 5x + 4$",
    "$y = 4x + 1$"
   ],
   "answer": "$y = 5x - 1$",
   "hint": "$y - 4 = 5(x - 1)$.",
   "explain": "$y = 5x - 5 + 4 = 5x - 1$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Garis singgung $y = 5x - 1$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Tentukan persamaan garis normal pada $y = \\dfrac{4}{x}$ di titik $(2, 2)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Gradien garis singgung di $x = 2$?",
   "answer": "-1",
   "hint": "$\\frac{dy}{dx} = -\\frac{4}{x^2}$.",
   "explain": "$-\\frac{4}{4} = -1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Gradien garis normal?",
   "answer": "1",
   "hint": "Hasil kali kedua gradien $-1$.",
   "explain": "$-\\frac{1}{-1} = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Persamaan garis normal?",
   "options": [
    "$y = x$",
    "$y = -x + 4$",
    "$y = x + 2$"
   ],
   "answer": "$y = x$",
   "hint": "$y - 2 = 1(x - 2)$.",
   "explain": "$y = x$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Garis normal $y = x$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Jari-jari lingkaran bertambah $0{,}3$ cm/s. Berapa laju pertambahan luasnya saat jari-jari 5 cm?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Rumus $\\frac{dA}{dt}$?",
   "options": [
    "$2\\pi r \\frac{dr}{dt}$",
    "$\\pi r^2 \\frac{dr}{dt}$",
    "$2\\pi r$"
   ],
   "answer": "$2\\pi r \\frac{dr}{dt}$",
   "hint": "$A = \\pi r^2$, turunkan lalu kalikan $\\frac{dr}{dt}$.",
   "explain": "Aturan rantai.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Hitung lajunya, bulatkan ke 2 desimal.",
   "answer": "9,42",
   "hint": "$2\\pi(5)(0{,}3) = 3\\pi$.",
   "explain": "$3\\pi \\approx 9{,}42$ cm²/s.",
   "error": "salah-pembulatan",
   "suffix": "cm²/s"
  }
 ],
 "conclusion": "$\\frac{dA}{dt} = 3\\pi \\approx 9{,}42$ cm²/s."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Rusuk kubus logam yang dipanaskan bertambah $0{,}1$ cm/s. Berapa laju pertambahan volumenya saat rusuk 4 cm?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Rumus $\\frac{dV}{dt}$?",
   "options": [
    "$3s^2 \\frac{ds}{dt}$",
    "$s^3 \\frac{ds}{dt}$",
    "$3s \\frac{ds}{dt}$"
   ],
   "answer": "$3s^2 \\frac{ds}{dt}$",
   "hint": "$V = s^3$.",
   "explain": "Turunkan $s^3$ lalu kalikan $\\frac{ds}{dt}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Hitung lajunya.",
   "answer": "4,8",
   "hint": "$3(16)(0{,}1)$.",
   "explain": "$4{,}8$ cm³/s.",
   "error": "salah-langkah-materi",
   "suffix": "cm³/s"
  }
 ],
 "conclusion": "$\\frac{dV}{dt} = 4{,}8$ cm³/s."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Bilangan positif $x$ dan $y$ memenuhi $x + y = 12$. Tentukan nilai maksimum $P = x^2 y$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Tulis $P$ dalam $x$ saja.",
   "options": [
    "$P = 12x^2 - x^3$",
    "$P = 12x - x^3$",
    "$P = x^2 + 12 - x$"
   ],
   "answer": "$P = 12x^2 - x^3$",
   "hint": "Ganti $y = 12 - x$.",
   "explain": "$x^2(12 - x) = 12x^2 - x^3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Nilai $x$ positif yang membuat $P' = 0$?",
   "answer": "8",
   "hint": "$P' = 24x - 3x^2 = 3x(8 - x)$.",
   "explain": "$x = 8$; uji $P''(8) = 24 - 48 = -24 < 0$, maksimum.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Nilai maksimum $P$?",
   "answer": "256",
   "hint": "$y = 12 - 8 = 4$.",
   "explain": "$8^2 \\times 4 = 256$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Nilai maksimum $P = 256$."
}
```
