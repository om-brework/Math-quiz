---
id: sma1-10-eksponen-logaritma
judul: Fungsi Eksponen dan Logaritma
jenjang: sma1
moe: "Additional Mathematics · A6 Exponential and logarithmic functions"
prasyarat: [smp3-01-bentuk-baku-eksponen, smp3-02-persamaan-kuadrat-lanjut]
durasi_menit: 75
---

## Kenapa belajar ini?

Pertumbuhan bakteri, bunga majemuk, jumlah penduduk, dan peluruhan obat dalam darah semuanya berubah secara eksponensial. Fungsi eksponen menjawab "berapa banyak setelah sekian waktu". Logaritma menjawab kebalikannya: "berapa lama sampai mencapai sekian".

## Analogi

Bayangkan **satu bakteri** di laboratorium sekolah yang membelah menjadi dua setiap jam.

- Setelah $x$ jam, jumlahnya $2^x$. Ini **fungsi eksponen**: kita tahu waktu, mencari jumlah.
- Pertanyaan sebaliknya: "Berapa jam sampai ada 1.024 bakteri?" Jawabannya 10, karena $2^{10} = 1.024$. Ini **logaritma**: $\log_2 1.024 = 10$. Kita tahu jumlah, mencari waktu.

Jadi logaritma adalah **penghitung banyaknya penggandaan**. Analogi ini akan menjelaskan semua sifat logaritma.

## Konsep

### Fungsi eksponen $y = a^x$

Untuk $a > 0$ dan $a \ne 1$, fungsi $y = a^x$ berlaku untuk semua $x$ real. Sifat grafiknya:

- Selalu melalui $(0, 1)$, karena $a^0 = 1$.
- Selalu di atas sumbu $x$: $a^x > 0$. Sumbu $x$ ($y = 0$) adalah asimtot.
- Jika $a > 1$, grafik naik (pertumbuhan). Jika $0 < a < 1$, grafik turun (peluruhan).

```
x       -2     -1     0     1     2     3
2^x     0,25   0,5    1     2     4     8
(1/2)^x 4      2      1     0,5   0,25  0,125
```

### Bilangan $e$ dan fungsi $e^x$

Simpan Rp1 dengan bunga 100% per tahun. Jika bunga dihitung $n$ kali setahun, saldo akhir tahun $\left(1 + \frac{1}{n}\right)^n$. Untuk $n = 12$ hasilnya 2,6130; untuk $n = 365$ hasilnya 2,7146. Makin besar $n$, nilainya mendekati bilangan tetap:

$$
e = 2{,}71828\ldots
$$

Fungsi $y = e^x$ disebut fungsi eksponen alami. Grafiknya naik, melalui $(0, 1)$, dengan asimtot $y = 0$.

### Logaritma

**Definisi.** Untuk $a > 0$, $a \ne 1$, dan $x > 0$:

$$
y = \log_a x \iff a^y = x
$$

Di buku Indonesia, $\log_a x$ juga ditulis ${}^a\!\log x$. Dua basis khusus: $\lg x = \log_{10} x$ dan $\ln x = \log_e x$ (logaritma alami).

Grafik $y = \log_a x$ adalah pencerminan $y = a^x$ terhadap garis $y = x$. Jadi:

- Hanya terdefinisi untuk $x > 0$ (jumlah bakteri harus positif).
- Melalui $(1, 0)$, karena $a^0 = 1$.
- Sumbu $y$ ($x = 0$) adalah asimtot.
- Untuk $a > 1$ (termasuk $\ln x$), grafik naik, tetapi makin lama makin landai.

### Sifat-sifat logaritma

Dari $a^0 = 1$ dan $a^1 = a$: $\log_a 1 = 0$ dan $\log_a a = 1$.

**Hukum perkalian.** Misalkan $\log_a x = p$ dan $\log_a y = q$, jadi $x = a^p$ dan $y = a^q$. Maka $xy = a^{p+q}$, sehingga

$$
\log_a (xy) = \log_a x + \log_a y
$$

Dalam analogi: menggandakan $p$ kali lalu $q$ kali sama dengan menggandakan $p + q$ kali. Dengan cara sama:

$$
\log_a \frac{x}{y} = \log_a x - \log_a y, \qquad \log_a x^k = k \log_a x
$$

### Perubahan basis

Misalkan $y = \log_a x$, jadi $a^y = x$. Ambil $\log_b$ kedua ruas: $y \log_b a = \log_b x$. Maka

$$
\log_a x = \frac{\log_b x}{\log_b a}
$$

Rumus ini membuat kita bisa menghitung logaritma basis apa pun dengan tombol $\ln$ atau $\log$ di kalkulator.

### Menyelesaikan persamaan

- **Basis bisa disamakan:** $a^{f(x)} = a^{g(x)} \Rightarrow f(x) = g(x)$.
- **Basis tidak bisa disamakan:** ambil logaritma kedua ruas.
- **Bentuk kuadrat terselubung:** misalnya $3^{2x} = (3^x)^2$. Misalkan $u = 3^x$ (ingat $u > 0$).
- **Persamaan logaritma:** gabungkan dengan sifat logaritma, ubah ke bentuk eksponen, lalu **cek** bahwa semua bilangan di dalam log positif.

### Model pertumbuhan dan peluruhan

Bentuk umum: $N = N_0 e^{kt}$ atau $N = N_0 a^t$. $N_0$ adalah nilai awal (saat $t = 0$). Jika $k > 0$ (atau $a > 1$), terjadi pertumbuhan. Jika $k < 0$ (atau $0 < a < 1$), terjadi peluruhan. Waktu paruh peluruhan $N_0 e^{-\lambda t}$ adalah $\frac{\ln 2}{\lambda}$.

## Contoh langkah demi langkah

### Contoh 1: Menyederhanakan logaritma

**Soal.** Hitung $2\log_3 6 - \log_3 4$.

1. **Langkah 1: Pakai hukum pangkat.** $2\log_3 6 = \log_3 6^2 = \log_3 36$.
2. **Langkah 2: Pakai hukum pembagian.** $\log_3 36 - \log_3 4 = \log_3 \frac{36}{4} = \log_3 9$.
3. **Langkah 3: Hitung.** $3^2 = 9$, jadi $\log_3 9 = 2$.
4. **Cek jawaban.** Perubahan basis: $\log_3 6 = \frac{\ln 6}{\ln 3} \approx 1{,}6309$ dan $\log_3 4 \approx 1{,}2619$. Maka $2(1{,}6309) - 1{,}2619 = 1{,}9999 \approx 2$. Cocok.

**Jawaban:** $2$.

### Contoh 2: Persamaan eksponen bentuk kuadrat

**Soal.** Selesaikan $3^{2x} - 4 \cdot 3^x + 3 = 0$.

1. **Langkah 1: Kenali bentuk kuadrat.** $3^{2x} = (3^x)^2$. Misalkan $u = 3^x$, dengan $u > 0$.
2. **Langkah 2: Selesaikan dalam $u$.** $u^2 - 4u + 3 = 0 \Rightarrow (u - 1)(u - 3) = 0$, jadi $u = 1$ atau $u = 3$. Keduanya positif, jadi sah.
3. **Langkah 3: Kembali ke $x$.** $3^x = 1 \Rightarrow x = 0$. $3^x = 3 \Rightarrow x = 1$.
4. **Cek jawaban.** $x = 0$: $1 - 4 + 3 = 0$. $x = 1$: $9 - 12 + 3 = 0$. Cocok.

**Jawaban:** $x = 0$ atau $x = 1$.

### Contoh 3: Persamaan logaritma

**Soal.** Selesaikan $\log_2(x + 2) + \log_2(x - 2) = 5$.

1. **Langkah 1: Gabungkan.** $\log_2\left[(x + 2)(x - 2)\right] = 5$.
2. **Langkah 2: Ubah ke bentuk eksponen.** $(x + 2)(x - 2) = 2^5 = 32$, jadi $x^2 - 4 = 32$.
3. **Langkah 3: Selesaikan.** $x^2 = 36$, jadi $x = 6$ atau $x = -6$.
4. **Langkah 4: Cek syarat log.** Perlu $x + 2 > 0$ dan $x - 2 > 0$, yaitu $x > 2$. Maka $x = -6$ ditolak.
5. **Cek jawaban.** $x = 6$: $\log_2 8 + \log_2 4 = 3 + 2 = 5$. Cocok.

**Jawaban:** $x = 6$.

### Contoh 4: Soal cerita, obat dalam darah

**Soal.** Setelah Pak Wayan minum obat, massa obat dalam darahnya $t$ jam kemudian adalah $M = 400e^{-0{,}2t}$ mg. (a) Berapa massa obat setelah 3 jam? (b) Kapan massa obat tinggal 100 mg?

1. **Langkah 1: Pahami model.** $M_0 = 400$ mg saat $t = 0$, dan eksponen negatif berarti peluruhan.
2. **Langkah 2: Jawab (a) dengan substitusi.** $M = 400e^{-0{,}6} = 400 \times 0{,}5488 \approx 219{,}5$ mg.
3. **Langkah 3: Susun persamaan (b).** $400e^{-0{,}2t} = 100 \Rightarrow e^{-0{,}2t} = 0{,}25$.
4. **Langkah 4: Ambil $\ln$.** $-0{,}2t = \ln 0{,}25 = -1{,}3863$, jadi $t = 6{,}93$ jam.
5. **Cek jawaban.** Waktu paruh $= \frac{\ln 2}{0{,}2} = 3{,}47$ jam. Dari 400 ke 100 mg berarti dua kali paruh: $2 \times 3{,}47 = 6{,}93$ jam. Cocok.

**Jawaban:** (a) sekitar 219,5 mg; (b) sekitar 6,93 jam.

## Kesalahan yang sering terjadi

- **Memecah log penjumlahan.** Menulis $\log(x + y) = \log x + \log y$. Hukum perkalian berlaku untuk $\log(xy)$, bukan $\log(x + y)$.
- **Salah membagi log.** Menulis $\frac{\log_a x}{\log_a y} = \log_a \frac{x}{y}$. Yang benar $\log_a x - \log_a y = \log_a \frac{x}{y}$. Bentuk $\frac{\log_a x}{\log_a y}$ sama dengan $\log_y x$.
- **Tidak mengecek syarat.** Jawaban yang membuat bilangan di dalam log nol atau negatif harus ditolak, seperti $x = -6$ pada contoh 3.
- **Menerima $a^x$ negatif.** Pada substitusi $u = 3^x$, nilai $u \le 0$ harus ditolak, karena $3^x$ selalu positif.
- **Salah memindahkan pangkat.** $\log_a x^2 = 2\log_a x$, tetapi $(\log_a x)^2 \ne 2\log_a x$.

## Ringkasan

- $y = \log_a x \iff a^y = x$; logaritma menghitung "berapa kali dikalikan".
- Grafik $a^x$ melalui $(0, 1)$ dengan asimtot $y = 0$; grafik $\log_a x$ melalui $(1, 0)$ dengan asimtot $x = 0$; keduanya cermin terhadap $y = x$.
- $\log_a(xy) = \log_a x + \log_a y$, $\log_a \frac{x}{y} = \log_a x - \log_a y$, $\log_a x^k = k\log_a x$.
- Perubahan basis: $\log_a x = \frac{\log_b x}{\log_b a}$.
- Model $N = N_0 e^{kt}$: tumbuh jika $k > 0$, meluruh jika $k < 0$.

## Cek pemahaman

1. Hitung $\log_4 64$.
2. Sederhanakan $\lg 5 + \lg 8 - \lg 4$.
3. Selesaikan $2^{x+1} = 7$, sampai 3 angka desimal.
4. Selesaikan $\lg x + \lg(x - 3) = 1$.
5. Penduduk sebuah kota $P = 2.000.000 \times 1{,}02^t$, dengan $t$ dalam tahun. Setelah berapa tahun penuh penduduknya pertama kali melebihi 3.000.000?

### Kunci jawaban

1. $3$, karena $4^3 = 64$.
2. $1$, karena $\lg \frac{5 \times 8}{4} = \lg 10 = 1$.
3. $x \approx 1{,}807$, karena $x + 1 = \frac{\ln 7}{\ln 2} \approx 2{,}807$.
4. $x = 5$. $x(x - 3) = 10$ memberi $(x - 5)(x + 2) = 0$; $x = -2$ ditolak karena $\lg(-2)$ tidak terdefinisi.
5. 21 tahun. $1{,}02^t > 1{,}5$ memberi $t > \frac{\ln 1{,}5}{\ln 1{,}02} \approx 20{,}48$; cek $t = 20$: sekitar 2,97 juta, $t = 21$: sekitar 3,03 juta.
