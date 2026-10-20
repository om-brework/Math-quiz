---
id: sma2-02-koordinat-lingkaran
judul: "Geometri Koordinat: Garis dan Lingkaran"
jenjang: sma2
moe: "Additional Mathematics · G2 Coordinate geometry in two dimensions"
prasyarat: [smp3-06-geometri-koordinat, sma1-05-fungsi-kuadrat-lanjut, sma1-10-eksponen-logaritma]
durasi_menit: 75
---

## Kenapa belajar ini?

Peta digital di ponselmu menyimpan setiap tempat sebagai pasangan koordinat. Dengan koordinat, kita bisa menghitung luas sawah dari titik-titik batasnya, menentukan jangkauan sinyal menara, dan menemukan rumus tersembunyi dari data percobaan.

## Analogi

Bayangkan kamu bekerja dengan **peta digital berpetak** (seperti peta GPS) kota Denpasar. Setiap tempat punya alamat $(x, y)$.

- **Gradien** adalah kemiringan jalan lurus di peta.
- **Titik tengah** adalah tempat janjian yang adil bagi dua teman.
- **Luas** dihitung dari koordinat sudut-sudut sawah.
- **Lingkaran** adalah batas jangkauan sinyal menara BTS: semua titik yang berjarak sama dari menara.
- **Hukum linear** seperti mengganti skala peta. Kurva yang melengkung bisa terlihat lurus jika sumbunya diganti dengan skala logaritma.

## Konsep

### Gradien, garis sejajar, dan garis tegak lurus

Gradien garis melalui $(x_1, y_1)$ dan $(x_2, y_2)$:

$$
m = \frac{y_2 - y_1}{x_2 - x_1}
$$

- Dua garis **sejajar** jika gradiennya sama: $m_1 = m_2$.
- Dua garis **tegak lurus** jika $m_1 m_2 = -1$.

Alasan syarat tegak lurus: garis bergradien $m$ searah dengan langkah $(1, m)$ di peta. Putar langkah ini $90°$, hasilnya $(-m, 1)$. Gradien langkah baru $\frac{1}{-m}$. Jadi $m_2 = -\frac{1}{m_1}$, atau $m_1 m_2 = -1$.

Persamaan garis melalui $(x_1, y_1)$ dengan gradien $m$: $y - y_1 = m(x - x_1)$.

### Titik tengah

Titik tengah ruas garis $AB$ dengan $A(x_1, y_1)$ dan $B(x_2, y_2)$ adalah rata-rata koordinatnya:

$$
M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)
$$

**Garis sumbu** $AB$ adalah garis yang melalui $M$ dan tegak lurus $AB$. Setiap titik di garis ini berjarak sama ke $A$ dan $B$.

### Luas bangun dengan koordinat

Untuk poligon dengan titik sudut $(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)$ yang **diurutkan** keliling (searah atau berlawanan jarum jam):

$$
L = \frac{1}{2}\left|(x_1y_2 + x_2y_3 + \dots + x_ny_1) - (y_1x_2 + y_2x_3 + \dots + y_nx_1)\right|
$$

Cara praktis: tulis koordinat dalam dua baris, ulangi titik pertama di ujung, lalu kalikan menyilang.

```
x:  x1   x2   x3  ...  x1
y:  y1   y2   y3  ...  y1
```

Jumlahkan hasil kali "turun ke kanan" ($x_1y_2, x_2y_3, \dots$), kurangi jumlah hasil kali "naik ke kanan" ($y_1x_2, y_2x_3, \dots$), ambil nilai mutlak, lalu bagi 2.

### Persamaan lingkaran

Titik $(x, y)$ ada pada lingkaran berpusat $(a, b)$ dan berjari-jari $r$ jika jaraknya ke pusat $r$. Dengan rumus jarak, lalu dikuadratkan:

$$
(x - a)^2 + (y - b)^2 = r^2
$$

Jika diuraikan, bentuknya menjadi **bentuk umum**:

$$
x^2 + y^2 + 2gx + 2fy + c = 0, \quad \text{pusat } (-g, -f), \quad r = \sqrt{g^2 + f^2 - c}
$$

Dari bentuk umum, kita kembali ke bentuk pusat-jari-jari dengan melengkapkan kuadrat. Ingat juga: garis singgung lingkaran tegak lurus jari-jari di titik singgungnya.

### Hukum linear

Jika data $(x, y)$ tidak membentuk garis lurus, kita bisa mengubah variabelnya menjadi $Y = mX + c$.

- $y = ax^n$. Ambil $\lg$: $\lg y = n\lg x + \lg a$. Gambar $Y = \lg y$ terhadap $X = \lg x$. Gradien $= n$, potongan sumbu $Y$ $= \lg a$.
- $y = kb^x$. Ambil $\lg$: $\lg y = (\lg b)x + \lg k$. Gambar $Y = \lg y$ terhadap $X = x$. Gradien $= \lg b$, potongan $= \lg k$.

Dalam analogi peta: kita tidak mengubah datanya, hanya "skala sumbunya", sehingga kurva tampak lurus dan konstanta bisa dibaca dari gradien serta potongan sumbu.

## Contoh langkah demi langkah

### Contoh 1: Garis sumbu ruas garis

**Soal.** Diketahui $A(-1, 2)$ dan $B(5, 6)$. Tentukan persamaan garis sumbu $AB$.

1. **Langkah 1: Cari titik tengah.** $M = \left(\frac{-1 + 5}{2}, \frac{2 + 6}{2}\right) = (2, 4)$.
2. **Langkah 2: Cari gradien $AB$.** $m_{AB} = \frac{6 - 2}{5 - (-1)} = \frac{4}{6} = \frac{2}{3}$.
3. **Langkah 3: Cari gradien tegak lurus.** $m = -\frac{3}{2}$, karena $\frac{2}{3} \times \left(-\frac{3}{2}\right) = -1$.
4. **Langkah 4: Tulis persamaan.** $y - 4 = -\frac{3}{2}(x - 2) \Rightarrow 2y - 8 = -3x + 6 \Rightarrow 3x + 2y = 14$.
5. **Cek jawaban.** Titik $(0, 7)$ ada di garis ini ($0 + 14 = 14$). Jaraknya ke $A$: $\sqrt{1 + 25} = \sqrt{26}$. Jaraknya ke $B$: $\sqrt{25 + 1} = \sqrt{26}$. Sama, sesuai sifat garis sumbu.

**Jawaban:** $3x + 2y = 14$.

### Contoh 2: Soal cerita, luas sawah Pak Wayan

**Soal.** Pada peta berskala 1 satuan = 10 m, sudut-sudut sawah Pak Wayan adalah $P(1, 1)$, $Q(6, 2)$, $R(5, 6)$, dan $S(2, 5)$. Tentukan luas sawah sebenarnya.

```
x:  1   6   5   2   1
y:  1   2   6   5   1
```

1. **Langkah 1: Pastikan titik berurutan.** $P \to Q \to R \to S$ mengelilingi sawah berlawanan arah jarum jam. Ulangi $P$ di ujung.
2. **Langkah 2: Hitung hasil kali turun ke kanan.** $1 \cdot 2 + 6 \cdot 6 + 5 \cdot 5 + 2 \cdot 1 = 2 + 36 + 25 + 2 = 65$.
3. **Langkah 3: Hitung hasil kali naik ke kanan.** $1 \cdot 6 + 2 \cdot 5 + 6 \cdot 2 + 5 \cdot 1 = 6 + 10 + 12 + 5 = 33$.
4. **Langkah 4: Hitung luas di peta.** $L = \frac{1}{2}|65 - 33| = 16$ satuan$^2$.
5. **Langkah 5: Ubah ke ukuran nyata.** 1 satuan$^2$ = $10 \times 10 = 100$ m$^2$, jadi luas $= 1.600$ m$^2$.
6. **Cek jawaban.** Bagi menjadi segitiga $PQR$ dan $PRS$. Luas $PQR = \frac{1}{2}|1(2 - 6) + 6(6 - 1) + 5(1 - 2)| = \frac{21}{2}$. Luas $PRS = \frac{1}{2}|1(6 - 5) + 5(5 - 1) + 2(1 - 6)| = \frac{11}{2}$. Jumlah $\frac{32}{2} = 16$. Cocok.

**Jawaban:** $1.600$ m$^2$.

### Contoh 3: Lingkaran dan garis singgung

**Soal.** Lingkaran $x^2 + y^2 - 6x + 4y - 12 = 0$. (a) Tentukan pusat dan jari-jari. (b) Tunjukkan $(6, 2)$ pada lingkaran, lalu tentukan garis singgung di titik itu.

1. **Langkah 1: Lengkapkan kuadrat.** $(x^2 - 6x) + (y^2 + 4y) = 12 \Rightarrow (x - 3)^2 - 9 + (y + 2)^2 - 4 = 12$.
2. **Langkah 2: Baca pusat dan jari-jari.** $(x - 3)^2 + (y + 2)^2 = 25$. Pusat $(3, -2)$, $r = 5$.
3. **Langkah 3: Periksa titik.** $(6 - 3)^2 + (2 + 2)^2 = 9 + 16 = 25$. Jadi $(6, 2)$ pada lingkaran.
4. **Langkah 4: Gradien jari-jari.** Dari $(3, -2)$ ke $(6, 2)$: $m = \frac{4}{3}$.
5. **Langkah 5: Garis singgung tegak lurus jari-jari.** Gradien $-\frac{3}{4}$: $y - 2 = -\frac{3}{4}(x - 6) \Rightarrow 4y - 8 = -3x + 18 \Rightarrow 3x + 4y = 26$.
6. **Cek jawaban.** $(6, 2)$: $18 + 8 = 26$, jadi garis melalui titik singgung. $\frac{4}{3} \times \left(-\frac{3}{4}\right) = -1$, jadi tegak lurus jari-jari. Rumus bentuk umum: $g = -3$, $f = 2$, $c = -12$, pusat $(3, -2)$, $r = \sqrt{9 + 4 + 12} = 5$. Cocok.

**Jawaban:** (a) pusat $(3, -2)$, $r = 5$; (b) $3x + 4y = 26$.

### Contoh 4: Hukum linear $y = ax^n$

**Soal.** Data percobaan diduga mengikuti $y = ax^n$. Grafik $\lg y$ terhadap $\lg x$ berupa garis lurus melalui $(0{,}2;\ 0{,}901)$ dan $(0{,}6;\ 2{,}101)$. Tentukan $a$ dan $n$.

1. **Langkah 1: Ubah ke bentuk linear.** $\lg y = n\lg x + \lg a$, jadi gradien $= n$ dan potongan $= \lg a$.
2. **Langkah 2: Hitung gradien.** $n = \frac{2{,}101 - 0{,}901}{0{,}6 - 0{,}2} = \frac{1{,}2}{0{,}4} = 3$.
3. **Langkah 3: Hitung potongan.** $0{,}901 = 3(0{,}2) + \lg a$, jadi $\lg a = 0{,}301$ dan $a = 10^{0{,}301} \approx 2{,}00$.
4. **Cek jawaban.** Titik kedua: $3(0{,}6) + 0{,}301 = 2{,}101$. Cocok.

**Jawaban:** $a \approx 2$, $n = 3$, jadi $y = 2x^3$.

### Contoh 5: Hukum linear $y = kb^x$, bakteri di lab

**Soal.** Banyak bakteri $N$ setelah $t$ jam tercatat sebagai berikut. Tunjukkan bahwa $N = kb^t$, tentukan $k$ dan $b$, lalu taksir $N$ saat $t = 8$.

```
t       1       2       3       4       5
N       100     200     400     800     1600
lg N    2,000   2,301   2,602   2,903   3,204
```

1. **Langkah 1: Ubah ke bentuk linear.** $\lg N = (\lg b)t + \lg k$. Gambar $\lg N$ terhadap $t$.
2. **Langkah 2: Periksa kelurusan.** Selisih $\lg N$ berturut-turut selalu $0{,}301$, jadi titik-titiknya segaris.
3. **Langkah 3: Baca gradien.** $\lg b = 0{,}301$, jadi $b = 2$.
4. **Langkah 4: Baca potongan.** $\lg k = 2{,}000 - 0{,}301 = 1{,}699$, jadi $k = 10^{1{,}699} \approx 50$.
5. **Langkah 5: Taksir.** $N(8) = 50 \times 2^8 = 12.800$.
6. **Cek jawaban.** $N(3) = 50 \times 8 = 400$, sesuai tabel. Cocok.

**Jawaban:** $N = 50 \times 2^t$; saat $t = 8$, sekitar 12.800 bakteri.

## Kesalahan yang sering terjadi

- **Gradien tegak lurus hanya dibalik.** Dari $m = \frac{2}{3}$ menulis $\frac{3}{2}$. Harus dibalik **dan** diberi tanda berlawanan: $-\frac{3}{2}$.
- **Titik sudut tidak berurutan.** Rumus luas memberi hasil salah jika titik diloncati. Urutkan keliling dan ulangi titik pertama.
- **Salah tanda pusat lingkaran.** Dari $(x - 3)^2 + (y + 2)^2 = 25$ menulis pusat $(-3, 2)$. Pusatnya $(3, -2)$.
- **Lupa akar pada jari-jari.** Dari $(x - 3)^2 + (y + 2)^2 = 25$ menulis $r = 25$. Yang benar $r = 5$.
- **Salah membaca potongan pada hukum linear.** Potongan sumbu adalah $\lg a$, bukan $a$. Ingat menghitung $a = 10^{\text{potongan}}$.

## Ringkasan

- Sejajar: $m_1 = m_2$. Tegak lurus: $m_1 m_2 = -1$.
- Titik tengah: rata-rata koordinat.
- Luas poligon: $\frac{1}{2}|\text{jumlah turun kanan} - \text{jumlah naik kanan}|$, titik berurutan.
- Lingkaran: $(x - a)^2 + (y - b)^2 = r^2$, atau $x^2 + y^2 + 2gx + 2fy + c = 0$ dengan pusat $(-g, -f)$ dan $r = \sqrt{g^2 + f^2 - c}$.
- Hukum linear: $y = ax^n \to \lg y = n\lg x + \lg a$; $y = kb^x \to \lg y = (\lg b)x + \lg k$.

## Cek pemahaman

1. Diketahui $A(2, -3)$ dan $B(8, 5)$. Tentukan titik tengah dan gradien $AB$.
2. Tentukan persamaan garis melalui $(1, 4)$ yang tegak lurus garis $2x - y = 3$.
3. Tentukan luas segitiga dengan titik sudut $(0, 0)$, $(4, 1)$, dan $(1, 5)$.
4. Tentukan pusat dan jari-jari lingkaran $x^2 + y^2 + 4x - 10y + 13 = 0$.
5. Grafik $\lg y$ terhadap $x$ berupa garis lurus melalui $(0;\ 0{,}477)$ dan $(2;\ 1{,}431)$. Jika $y = kb^x$, tentukan $k$ dan $b$.

### Kunci jawaban

1. Titik tengah $(5, 1)$; gradien $\frac{8}{6} = \frac{4}{3}$.
2. $x + 2y = 9$. Gradien garis $2$, jadi gradien tegak lurus $-\frac{1}{2}$: $y - 4 = -\frac{1}{2}(x - 1)$.
3. $9{,}5$ satuan$^2$, karena $\frac{1}{2}|0(1 - 5) + 4(5 - 0) + 1(0 - 1)| = \frac{19}{2}$.
4. Pusat $(-2, 5)$, $r = 4$, karena $g = 2$, $f = -5$, $c = 13$, dan $\sqrt{4 + 25 - 13} = 4$.
5. $k = 3$, $b = 3$. Potongan $\lg k = 0{,}477$ memberi $k = 3$; gradien $\lg b = \frac{1{,}431 - 0{,}477}{2} = 0{,}477$ memberi $b = 3$.
