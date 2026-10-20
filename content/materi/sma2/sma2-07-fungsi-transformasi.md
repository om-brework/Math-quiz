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

## Konsep

### Daerah asal, daerah hasil, dan fungsi satu-satu

Fungsi $f$ ditulis lengkap dengan aturan dan daerah asalnya, misalnya $f : x \mapsto x^2,\ x \in \mathbb{R}$. Daerah asal ditulis $D_f$, daerah hasil $R_f$. Untuk contoh ini $D_f = \mathbb{R}$ dan $R_f = [0, \infty)$.

$f$ disebut **satu-satu** jika $f(x_1) = f(x_2)$ hanya terjadi saat $x_1 = x_2$. Uji grafiknya dengan **uji garis mendatar**: setiap garis $y = k$ memotong grafik paling banyak sekali. Fungsi $x^2$ pada $\mathbb{R}$ tidak satu-satu karena $f(-2) = f(2) = 4$.

### Fungsi invers

$f^{-1}$ ada **jika dan hanya jika** $f$ satu-satu. Sifatnya:
$$ D_{f^{-1}} = R_f, \qquad R_{f^{-1}} = D_f, \qquad f^{-1}f(x) = x $$
Cara mencari: tulis $y = f(x)$, ubah menjadi $x = \ldots$ dalam $y$, lalu ganti nama variabel. Grafik $y = f^{-1}(x)$ adalah **pencerminan** grafik $y = f(x)$ terhadap garis $y = x$, karena peran $x$ dan $y$ ditukar.

Kalau $f$ tidak satu-satu, kita bisa **membatasi daerah asal** agar menjadi satu-satu.

### Fungsi komposisi

$fg(x) = f(g(x))$. Fungsi ini **ada jika dan hanya jika** $R_g \subseteq D_f$ (semua produk mesin $g$ bisa masuk mesin $f$). Daerah asal $fg$ sama dengan $D_g$. Umumnya $fg \neq gf$.

### Transformasi grafik

Mulai dari $y = f(x)$, dengan $a > 0$:

```
Bentuk baru        Efek pada grafik                    Titik (p, q) menjadi
y = f(x) + a       geser ke atas a                     (p, q + a)
y = f(x + a)       geser ke KIRI a                     (p - a, q)
y = a f(x)         regang tegak, faktor a              (p, a q)
y = f(a x)         regang mendatar, faktor 1/a         (p / a, q)
y = -f(x)          cermin terhadap sumbu x             (p, -q)
y = f(-x)          cermin terhadap sumbu y             (-p, q)
```

Perubahan di dalam kurung (pintu masuk) bekerja terbalik: $f(x + a)$ bergeser ke kiri, $f(2x)$ menyempit setengah. Alasannya, untuk mendapat keluaran yang sama, masukan baru harus "mengimbangi" perubahan itu.

### Grafik $y = |f(x)|$ dan $y = \dfrac{1}{f(x)}$

**$y = |f(x)|$**: bagian grafik di atas sumbu $x$ tetap, bagian di bawah sumbu $x$ dicerminkan ke atas.

**$y = \dfrac{1}{f(x)}$**, dari grafik $y = f(x)$:
- Akar $f(x) = 0$ menjadi **asimtot tegak**.
- Jika $f(x) \to \pm\infty$, maka $\frac{1}{f(x)} \to 0$.
- Tanda tidak berubah. Titik dengan $f = 1$ atau $f = -1$ tetap.
- Titik maksimum $f$ menjadi titik minimum $\frac{1}{f}$, dan sebaliknya, dengan $x$ yang sama.

### Asimtot

Asimtot adalah garis yang didekati kurva makin lama makin rapat saat $x$ atau $y$ menuju tak hingga. Untuk $y = \dfrac{ax + b}{cx + d}$: asimtot tegak $x = -\dfrac{d}{c}$ (penyebut nol), asimtot datar $y = \dfrac{a}{c}$. Untuk bentuk $\dfrac{\text{kuadrat}}{\text{linear}}$, lakukan pembagian, misalnya $\dfrac{x^2 + 1}{x} = x + \dfrac{1}{x}$, sehingga ada asimtot miring $y = x$ dan asimtot tegak $x = 0$.

## Contoh langkah demi langkah

### Contoh 1: Tarif ojek, diskon, dan berjalan mundur

**Soal.** Tarif ojek daring adalah $f(x) = 8000 + 2500x$ rupiah untuk jarak $x$ km, $x \geq 0$. Aplikasi memberi diskon 10%, yaitu $g(y) = 0{,}9y$. (a) Tentukan $gf(x)$. (b) Siti membayar Rp25.200. Berapa km perjalanannya?

1. **Langkah 1: Urutan mesin.** Jarak masuk ke $f$ (tarif), hasilnya masuk ke $g$ (diskon). Jadi yang dicari $gf$.
2. **Langkah 2: Susun komposisi.** $gf(x) = 0{,}9(8000 + 2500x) = 7200 + 2250x$.
3. **Langkah 3: Cek syarat.** $R_f = [8000, \infty) \subseteq D_g$, jadi $gf$ ada.
4. **Langkah 4: Jalankan mundur.** $gf$ linear dengan gradien positif, jadi satu-satu. Dari $y = 7200 + 2250x$: $x = \dfrac{y - 7200}{2250}$. Untuk $y = 25.200$: $x = \dfrac{18.000}{2250} = 8$.
5. **Cek jawaban.** Tarif 8 km: $8000 + 20.000 = 28.000$. Diskon 10%: $0{,}9 \times 28.000 = 25.200$. Benar.

**Jawaban:** (a) $gf(x) = 7200 + 2250x$; (b) 8 km.

### Contoh 2: Invers dengan daerah asal dibatasi

**Soal.** $f(x) = (x - 2)^2 + 1$, $x \geq 2$. Jelaskan mengapa $f^{-1}$ ada, lalu tentukan $f^{-1}(x)$ beserta daerah asalnya.

1. **Langkah 1: Periksa satu-satu.** Puncak parabola di $x = 2$. Untuk $x \geq 2$, grafik selalu naik, jadi setiap garis mendatar memotong paling banyak sekali. Tanpa batasan, $f(1) = f(3) = 2$ dan $f$ tidak satu-satu.
2. **Langkah 2: Cari daerah hasil.** Nilai terkecil $f(2) = 1$, jadi $R_f = [1, \infty)$.
3. **Langkah 3: Ubah persamaan.** $y = (x-2)^2 + 1 \Rightarrow (x - 2)^2 = y - 1 \Rightarrow x - 2 = \pm\sqrt{y - 1}$.
4. **Langkah 4: Pilih tanda.** Karena $x \geq 2$, $x - 2 \geq 0$, jadi ambil tanda plus: $x = 2 + \sqrt{y - 1}$.
5. **Langkah 5: Tulis invers.** $f^{-1}(x) = 2 + \sqrt{x - 1}$, dengan $D_{f^{-1}} = R_f = [1, \infty)$.
6. **Cek jawaban.** $f(5) = 9 + 1 = 10$. $f^{-1}(10) = 2 + \sqrt{9} = 5$. Kembali ke 5.

**Jawaban:** $f^{-1}(x) = 2 + \sqrt{x - 1}$, $x \geq 1$.

### Contoh 3: Grafik rasional sebagai transformasi $y = \frac{1}{x}$

**Soal.** Tentukan asimtot kurva $y = \dfrac{2x + 1}{x - 1}$ dan jelaskan transformasi dari $y = \dfrac{1}{x}$.

1. **Langkah 1: Bagi pembilang.** $2x + 1 = 2(x - 1) + 3$, jadi $y = 2 + \dfrac{3}{x - 1}$.
2. **Langkah 2: Baca transformasinya.** Dari $\frac{1}{x}$: ganti $x$ dengan $x - 1$ (geser kanan 1), kalikan 3 (regang tegak faktor 3), tambah 2 (geser atas 2).
3. **Langkah 3: Asimtot ikut berpindah.** Asimtot $y = \frac{1}{x}$ adalah $x = 0$ dan $y = 0$. Setelah digeser: $x = 1$ dan $y = 2$.
4. **Langkah 4: Titik potong sumbu.** $x = 0$: $y = -1$. $y = 0$: $x = -\frac{1}{2}$.
5. **Cek jawaban.** Penyebut nol di $x = 1$, cocok dengan asimtot tegak. Untuk $x = 1001$: $y = \frac{2003}{1000} \approx 2{,}003$, mendekati 2.

**Jawaban:** Asimtot $x = 1$ dan $y = 2$; geser kanan 1, regang tegak faktor 3, geser atas 2.

### Contoh 4: Grafik $|f(x)|$ dan $\frac{1}{f(x)}$

**Soal.** $f(x) = x^2 - 2x - 3$. Jelaskan ciri penting grafik $y = |f(x)|$ dan $y = \dfrac{1}{f(x)}$.

1. **Langkah 1: Ciri grafik asal.** $f(x) = (x - 3)(x + 1)$, akar $-1$ dan $3$. $f(x) = (x - 1)^2 - 4$, minimum $(1, -4)$. Titik potong sumbu $y$: $(0, -3)$.
2. **Langkah 2: $y = |f(x)|$.** Bagian antara $-1$ dan $3$ (di bawah sumbu) dicerminkan ke atas. Minimum $(1, -4)$ menjadi maksimum lokal $(1, 4)$. Titik $(0, -3)$ menjadi $(0, 3)$. Di $x = -1$ dan $x = 3$ grafik menyentuh sumbu dengan ujung lancip.
3. **Langkah 3: $y = \frac{1}{f(x)}$, asimtot.** Akar menjadi asimtot tegak $x = -1$ dan $x = 3$. Karena $f(x) \to \infty$ saat $|x|$ besar, ada asimtot datar $y = 0$.
4. **Langkah 4: Titik stasioner dan potong sumbu.** Minimum $(1, -4)$ menjadi maksimum $\left(1, -\frac{1}{4}\right)$. Potong sumbu $y$: $\left(0, -\frac{1}{3}\right)$.
5. **Cek jawaban.** Hitung langsung: $\dfrac{1}{1 - 2 - 3} = -\dfrac{1}{4}$ dan $\dfrac{1}{0 - 0 - 3} = -\dfrac{1}{3}$. Cocok.

**Jawaban:** $|f|$: maksimum lokal $(1, 4)$, menyentuh sumbu di $-1$ dan $3$. $\frac{1}{f}$: asimtot $x = -1$, $x = 3$, $y = 0$; maksimum $\left(1, -\frac{1}{4}\right)$; memotong sumbu $y$ di $-\frac{1}{3}$.

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

1. $f(x) = 3x - 1$ dan $g(x) = x^2 + 2$, keduanya untuk $x \in \mathbb{R}$. Tentukan $fg(x)$ dan $gf(2)$.
2. Tentukan $f^{-1}(x)$ jika $f(x) = \dfrac{x + 4}{x - 2}$, $x \neq 2$.
3. Titik $(2, -3)$ terletak pada $y = f(x)$. Tentukan bayangannya pada $y = 2f(x - 1) + 4$.
4. Tentukan asimtot kurva $y = \dfrac{3x - 2}{x + 4}$.
5. $f(x) = x^2 - 4x$. (a) Nilai $k$ terbesar agar $f$ dengan daerah asal $x \leq k$ satu-satu? (b) Tentukan asimtot tegak dan titik stasioner $y = \dfrac{1}{f(x)}$.

### Kunci jawaban

1. $fg(x) = 3x^2 + 5$ dan $gf(2) = 27$. $fg(x) = 3(x^2 + 2) - 1$; $f(2) = 5$, lalu $g(5) = 27$.
2. $f^{-1}(x) = \dfrac{2x + 4}{x - 1}$, $x \neq 1$. Dari $y(x - 2) = x + 4$ didapat $x(y - 1) = 2y + 4$.
3. $(3, -2)$. $x$ bertambah 1, $y$ menjadi $2(-3) + 4$.
4. $x = -4$ dan $y = 3$. Penyebut nol di $x = -4$; untuk $x$ besar, $y \to \frac{3}{1}$.
5. (a) $k = 2$, karena puncak parabola di $x = 2$. (b) Asimtot tegak $x = 0$ dan $x = 4$; minimum $f$ di $(2, -4)$ menjadi maksimum $\left(2, -\frac{1}{4}\right)$.
