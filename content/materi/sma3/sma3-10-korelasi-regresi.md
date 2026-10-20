---
id: sma3-10-korelasi-regresi
judul: Korelasi dan Regresi Linear
jenjang: sma3
moe: "H2 Mathematics 9758 · Probability and Statistics · Correlation and linear regression"
prasyarat: [sma1-04-ukuran-penyebaran, smp3-06-geometri-koordinat, sma1-10-eksponen-logaritma, sma2-04-turunan]
durasi_menit: 70
---

## Kenapa belajar ini?

Apakah makin lama belajar, nilai makin tinggi? Berapa kira-kira harga motor bekas umur 3,5 tahun? Korelasi mengukur seberapa kuat hubungan linear dua besaran. Regresi memberi rumus garis untuk memperkirakan satu besaran dari besaran lain.

## Analogi

Bayangkan setiap data adalah **paku** yang ditancapkan di papan. Kita ingin memasang **sebatang penggaris** yang mewakili pola paku-paku itu. Setiap paku dihubungkan ke penggaris dengan **pegas tegak lurus ke atas atau ke bawah**. Pegas yang lebih teregang menarik lebih kuat, dan energinya sebanding dengan **kuadrat** panjang regangan.

- Penggaris akan berhenti di posisi yang membuat **total energi pegas paling kecil**. Itulah **garis regresi**.
- Jika paku-paku berbaris rapat di sekitar penggaris, pegas hampir tidak teregang: **korelasi kuat**.
- Jika paku-paku tersebar seperti awan bulat, penggaris tidak banyak membantu: **korelasi lemah**.

## Konsep

### Diagram pencar

Data berpasangan $(x, y)$ digambar sebagai titik pada **diagram pencar**. Perhatikan polanya:

- naik dari kiri ke kanan: korelasi linear **positif**;
- turun: korelasi linear **negatif**;
- tidak berpola: **tidak ada** korelasi linear;
- melengkung: hubungan **tak linear**, yang mungkin bisa diluruskan dengan transformasi.

### Koefisien korelasi $r$

Definisikan jumlah-jumlah berikut:

$$S_{xx} = \sum (x - \bar{x})^2 = \sum x^2 - \frac{(\sum x)^2}{n}, \qquad S_{yy} = \sum y^2 - \frac{(\sum y)^2}{n},$$

$$S_{xy} = \sum (x - \bar{x})(y - \bar{y}) = \sum xy - \frac{(\sum x)(\sum y)}{n}.$$

**Kenapa $S_{xy}$?** Tarik garis bantu $x = \bar{x}$ dan $y = \bar{y}$. Titik di kanan-atas dan kiri-bawah membuat $(x - \bar{x})(y - \bar{y})$ positif. Titik di kiri-atas dan kanan-bawah membuatnya negatif. Jadi tanda $S_{xy}$ menunjukkan arah hubungan.

Supaya tidak bergantung pada satuan, $S_{xy}$ dibagi dengan ukuran penyebaran masing-masing:

$$r = \frac{S_{xy}}{\sqrt{S_{xx}\,S_{yy}}}, \qquad -1 \le r \le 1.$$

- $r$ dekat $1$: hubungan linear positif kuat; $r$ dekat $-1$: negatif kuat.
- $r$ dekat $0$: **tidak ada hubungan linear**. Bisa saja ada hubungan melengkung yang kuat.
- **Korelasi bukan sebab-akibat.** Penjualan es krim dan kasus tenggelam sama-sama naik di musim panas, tetapi yang satu tidak menyebabkan yang lain.

### Garis regresi $y$ atas $x$

Kita mencari garis $y = a + bx$ yang meminimumkan total energi pegas, yaitu jumlah kuadrat jarak **tegak**:

$$Q(a, b) = \sum (y - a - bx)^2.$$

Turunkan $Q$ terhadap $a$ (dengan $b$ dianggap tetap) dan samakan dengan nol:

$$-2\sum (y - a - bx) = 0 \;\Longrightarrow\; \bar{y} = a + b\bar{x}.$$

Jadi garis regresi **selalu melalui titik rata-rata** $(\bar{x}, \bar{y})$. Turunkan terhadap $b$ (dengan $a$ tetap):

$$-2\sum x(y - a - bx) = 0 \;\Longrightarrow\; \sum xy = a\sum x + b\sum x^2.$$

Substitusi $a = \bar{y} - b\bar{x}$, lalu sederhanakan:

$$b = \frac{S_{xy}}{S_{xx}}, \qquad a = \bar{y} - b\bar{x}.$$

Garis ini disebut **garis regresi kuadrat terkecil $y$ atas $x$**. Garis ini dipakai untuk memperkirakan $y$ dari $x$, terutama jika $x$ adalah variabel yang dikendalikan atau bebas.

### Menafsirkan dan memperkirakan

- **Gradien $b$**: setiap $x$ naik 1 satuan, $y$ diperkirakan berubah $b$ satuan.
- **Interpolasi** (nilai $x$ di dalam rentang data) dapat dipercaya jika $|r|$ dekat 1.
- **Ekstrapolasi** (nilai $x$ di luar rentang data) tidak dapat dipercaya, karena pola belum tentu berlanjut.

### Transformasi ke bentuk linear

Jika diagram pencar melengkung, ubah variabel supaya titik-titik berbaris lurus.

```
Model           Bentuk linear                Variabel yang diregresikan
y = a + b x^2   y = a + b (x^2)              y atas x^2
y = a + b ln x  y = a + b (ln x)             y atas ln x
y = a e^(bx)    ln y = ln a + b x            ln y atas x
y = a x^b       ln y = ln a + b (ln x)       ln y atas ln x
```

Pilih model yang $|r|$-nya paling dekat dengan 1, dan yang diagram pencarnya paling lurus. Setelah mendapat garis, kembalikan ke model asal.

## Contoh langkah demi langkah

### Contoh 1: Menghitung $r$ dari ringkasan data

**Soal.** Untuk 8 siswa, $x$ adalah jam bermain gim per minggu dan $y$ adalah skor kuis (skala 20). Diketahui $\sum x = 40$, $\sum y = 96$, $\sum x^2 = 240$, $\sum y^2 = 1240$, $\sum xy = 440$. Hitung $r$ dan tafsirkan.

1. **Langkah 1: Hitung $S_{xx}$ dan $S_{yy}$.** $S_{xx} = 240 - \frac{40^2}{8} = 240 - 200 = 40$. $S_{yy} = 1240 - \frac{96^2}{8} = 1240 - 1152 = 88$.
2. **Langkah 2: Hitung $S_{xy}$.** $S_{xy} = 440 - \frac{40 \times 96}{8} = 440 - 480 = -40$.
3. **Langkah 3: Hitung $r$.** $r = \frac{-40}{\sqrt{40 \times 88}} = \frac{-40}{59{,}33} \approx -0{,}674$.
4. **Langkah 4: Tafsirkan.** Ada korelasi linear negatif sedang: siswa yang lebih lama bermain gim cenderung mendapat skor lebih rendah. Ini tidak membuktikan bahwa gim **menyebabkan** skor turun.
5. **Cek jawaban.** $S_{xx}$ dan $S_{yy}$ positif (wajib), dan $|S_{xy}| = 40 \le \sqrt{3520} \approx 59{,}3$, sehingga $|r| \le 1$. Konsisten.

**Jawaban:** $r \approx -0{,}674$, korelasi linear negatif sedang.

### Contoh 2: Garis regresi dan perkiraan

**Soal.** Data jam belajar tambahan per minggu ($x$) dan nilai ujian ($y$) enam siswa:

```
x   1    2    3    4    5    6
y   52   58   61   70   72   81
```

Tentukan $r$, garis regresi $y$ atas $x$, lalu perkirakan nilai untuk $x = 4{,}5$ dan komentari perkiraan untuk $x = 12$.

1. **Langkah 1: Hitung jumlah-jumlah.** $\sum x = 21$, $\sum y = 394$, $\sum x^2 = 91$, $\sum y^2 = 26\,434$, $\sum xy = 1477$.
2. **Langkah 2: Hitung $S$.** $S_{xx} = 91 - \frac{21^2}{6} = 17{,}5$. $S_{yy} = 26\,434 - \frac{394^2}{6} \approx 561{,}33$. $S_{xy} = 1477 - \frac{21 \times 394}{6} = 1477 - 1379 = 98$.
3. **Langkah 3: Hitung $r$.** $r = \frac{98}{\sqrt{17{,}5 \times 561{,}33}} = \frac{98}{99{,}11} \approx 0{,}989$. Korelasi linear positif sangat kuat.
4. **Langkah 4: Hitung $b$ dan $a$.** $b = \frac{98}{17{,}5} = 5{,}6$. $\bar{x} = 3{,}5$ dan $\bar{y} = \frac{394}{6} \approx 65{,}67$, jadi $a = 65{,}67 - 5{,}6 \times 3{,}5 \approx 46{,}07$. Garisnya $y = 46{,}07 + 5{,}6x$.
5. **Langkah 5: Perkirakan.** Untuk $x = 4{,}5$: $y \approx 46{,}07 + 25{,}2 = 71{,}27$. Ini interpolasi dan $r$ dekat 1, jadi dapat dipercaya. Untuk $x = 12$: $y \approx 113{,}3$, melebihi nilai maksimum 100. Ini ekstrapolasi dan tidak dapat dipercaya.
6. **Cek jawaban.** Garis harus melalui $(\bar{x}, \bar{y})$: $46{,}07 + 5{,}6 \times 3{,}5 = 65{,}67 = \bar{y}$. Benar.

**Jawaban:** $r \approx 0{,}989$; $y = 46{,}07 + 5{,}6x$; perkiraan untuk $x = 4{,}5$ sekitar 71,3; perkiraan untuk $x = 12$ tidak dapat dipercaya.

### Contoh 3: Harga motor bekas, model eksponensial

**Soal.** Harga pasaran ($y$, juta rupiah) sebuah model motor menurut umurnya ($x$, tahun):

```
x   1      2      3      4      5      6
y   16,0   13,5   11,2   9,6    8,0    6,9
```

Bandingkan model $y = a + bx$ dan $y = ae^{bx}$, pilih yang lebih cocok, lalu perkirakan harga motor berumur 3,5 tahun.

1. **Langkah 1: Hitung $r$ untuk model linear.** Dengan kalkulator, $r$ untuk $y$ atas $x$ adalah $-0{,}9900$.
2. **Langkah 2: Transformasi.** $y = ae^{bx}$ menjadi $\ln y = \ln a + bx$. Hitung $\ln y$: 2,7726; 2,6027; 2,4159; 2,2618; 2,0794; 1,9315.
3. **Langkah 3: Hitung $r$ untuk $\ln y$ atas $x$.** Dengan kalkulator, $r = -0{,}9996$.
4. **Langkah 4: Pilih model.** $|-0{,}9996| > |-0{,}9900|$, jadi model eksponensial lebih cocok. Ini juga masuk akal: motor kehilangan **persentase** harga yang kira-kira sama setiap tahun.
5. **Langkah 5: Cari garis regresi $\ln y$ atas $x$.** Dari kalkulator: $\ln y = 2{,}9369 - 0{,}1694x$. Jadi $b = -0{,}1694$ dan $a = e^{2{,}9369} \approx 18{,}86$. Modelnya $y = 18{,}86\,e^{-0{,}1694x}$.
6. **Langkah 6: Perkirakan.** Untuk $x = 3{,}5$: $\ln y = 2{,}9369 - 0{,}5929 = 2{,}3440$, jadi $y = e^{2{,}3440} \approx 10{,}42$. Ini interpolasi.
7. **Cek jawaban.** Nilai 10,42 berada di antara harga umur 3 tahun (11,2) dan 4 tahun (9,6), sesuai harapan. Faktor tahunan $e^{-0{,}1694} \approx 0{,}844$ berarti harga turun sekitar 15,6% per tahun; misalnya $16{,}0 \times 0{,}844 \approx 13{,}5$, cocok dengan data umur 2 tahun.

**Jawaban:** Model $y = 18{,}86\,e^{-0{,}1694x}$ lebih cocok; harga motor umur 3,5 tahun sekitar Rp10,4 juta.

## Kesalahan yang sering terjadi

- **Menganggap $r \approx 0$ berarti tidak ada hubungan.** Data $(-2, 4), (-1, 1), (0, 0), (1, 1), (2, 4)$ memiliki $r = 0$, padahal $y = x^2$ tepat. $r$ hanya mengukur hubungan **linear**. Selalu lihat diagram pencarnya.
- **Menyimpulkan sebab-akibat dari $r$ yang kuat.** Korelasi tinggi bisa disebabkan faktor ketiga. Tulis "berkorelasi", bukan "menyebabkan".
- **Lupa membagi dengan $n$ di $S_{xy}$.** Menulis $S_{xy} = \sum xy - \sum x \sum y$. Rumus yang benar: $\sum xy - \frac{(\sum x)(\sum y)}{n}$.
- **Mempercayai ekstrapolasi.** Seperti nilai 113 pada Contoh 2. Garis hanya dapat dipercaya di dalam rentang data.
- **Lupa mengembalikan transformasi.** Pada Contoh 3, menjawab harga 2,344 juta. Itu nilai $\ln y$; harganya $e^{2{,}344} \approx 10{,}42$ juta.

## Ringkasan

- Diagram pencar dulu: lihat arah, kekuatan, dan apakah polanya lurus atau melengkung.
- $r = \frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}$ dengan $-1 \le r \le 1$; mengukur kekuatan hubungan **linear**, bukan sebab-akibat.
- Garis regresi $y$ atas $x$: $b = \frac{S_{xy}}{S_{xx}}$, $a = \bar{y} - b\bar{x}$; selalu melalui $(\bar{x}, \bar{y})$.
- Interpolasi dapat dipercaya jika $|r|$ dekat 1; ekstrapolasi tidak.
- Hubungan melengkung diluruskan dengan transformasi ($x^2$, $\ln x$, $\ln y$); pilih model dengan $|r|$ paling dekat 1.

## Cek pemahaman

1. Diketahui $S_{xx} = 40$, $S_{yy} = 90$, $S_{xy} = 54$. Hitung $r$.
2. Dengan data nomor 1, $\bar{x} = 5$ dan $\bar{y} = 20$. Tentukan garis regresi $y$ atas $x$.
3. Dengan garis dari nomor 2, perkirakan $y$ untuk $x = 7$ (nilai $x$ data berkisar 1 sampai 10).
4. Model $y = ax^b$ ingin diuji. Variabel apa yang harus dihitung koefisien korelasinya, dan apa arti gradien serta titik potong garisnya?
5. Hitung $r$ untuk data $(-2, 4), (-1, 1), (0, 0), (1, 1), (2, 4)$, lalu jelaskan artinya.

### Kunci jawaban

1. $r = \frac{54}{\sqrt{40 \times 90}} = \frac{54}{60} = 0{,}9$.
2. $b = \frac{54}{40} = 1{,}35$ dan $a = 20 - 1{,}35 \times 5 = 13{,}25$, jadi $y = 13{,}25 + 1{,}35x$.
3. $y = 13{,}25 + 1{,}35 \times 7 = 22{,}7$; ini interpolasi dan $r = 0{,}9$, jadi cukup dapat dipercaya.
4. Hitung $r$ antara $\ln y$ dan $\ln x$, karena $\ln y = \ln a + b\ln x$; gradiennya $b$ dan titik potongnya $\ln a$.
5. $\sum x = 0$ dan $\sum xy = -8 - 1 + 0 + 1 + 8 = 0$, jadi $S_{xy} = 0$ dan $r = 0$; tidak ada hubungan linear, tetapi ada hubungan kuadrat sempurna $y = x^2$.
