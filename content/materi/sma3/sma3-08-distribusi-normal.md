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

Setiap gundukan punya letak dan lebar sendiri. Supaya cukup memakai satu tabel, kita mengukur semua gundukan dengan **penggaris standar**: bukan dalam cm atau kg, melainkan dalam **"berapa langkah simpangan baku dari tengah"**. Penggaris ini adalah nilai $Z$.

## Konsep

### Kurva normal

$X \sim N(\mu, \sigma^2)$ berarti $X$ berdistribusi normal dengan rata-rata $\mu$ dan **variansi** $\sigma^2$ (perhatikan: parameter kedua adalah variansi, bukan simpangan baku). Sifat-sifatnya:

- Kurva berbentuk lonceng, simetris terhadap $x = \mu$; rata-rata = median = modus.
- Luas total di bawah kurva adalah 1.
- $\sigma$ menentukan lebar: $\sigma$ besar berarti gundukan lebar dan rendah.
- $X$ kontinu, jadi $P(X = a) = 0$. Akibatnya $P(X < a) = P(X \le a)$.
- Kira-kira 68% luas berada dalam $\mu \pm \sigma$, 95% dalam $\mu \pm 2\sigma$, dan 99,7% dalam $\mu \pm 3\sigma$.

### Standardisasi

Didefinisikan

$$Z = \frac{X - \mu}{\sigma}.$$

**Kenapa $Z \sim N(0, 1)$?** Mengurangi $\mu$ menggeser gundukan ke tengah 0, dan membagi dengan $\sigma$ mengubah lebarnya menjadi 1. Dengan sifat nilai harapan dan variansi:

$$E(Z) = \frac{E(X) - \mu}{\sigma} = 0, \qquad \operatorname{Var}(Z) = \frac{\operatorname{Var}(X)}{\sigma^2} = 1.$$

Transformasi linear dari variabel normal tetap normal, jadi $Z \sim N(0,1)$, yaitu **normal baku**. Peluangnya ditulis $\Phi(z) = P(Z < z)$ dan dibaca dari tabel atau kalkulator (normalcdf).

### Mencari peluang

Gambar sketsa kurva dan arsir daerah yang dicari. Lalu pakai:

- $P(Z > z) = 1 - \Phi(z)$
- $P(Z < -z) = 1 - \Phi(z)$ (simetri)
- $P(a < Z < b) = \Phi(b) - \Phi(a)$

### Mencari nilai batas

Jika peluang diketahui dan batasnya dicari, balik prosesnya. Cari $z$ dengan $\Phi(z)$ yang diketahui (tabel terbalik atau invNorm), lalu

$$x = \mu + z\sigma.$$

Jika $\mu$ atau $\sigma$ tidak diketahui, setiap informasi peluang memberi satu persamaan $\frac{x - \mu}{\sigma} = z$. Dua informasi memberi sistem dua persamaan linear.

### Kombinasi linear variabel normal

Jika $X$ dan $Y$ **saling bebas** dan berdistribusi normal, maka $aX + bY$ juga normal dengan

$$E(aX + bY) = aE(X) + bE(Y), \qquad \operatorname{Var}(aX + bY) = a^2\operatorname{Var}(X) + b^2\operatorname{Var}(Y).$$

Perhatikan bahwa $\operatorname{Var}(X - Y) = \operatorname{Var}(X) + \operatorname{Var}(Y)$. Selisih dua besaran acak tetap **lebih** tidak pasti, bukan kurang.

Bedakan dua hal ini:

- $X_1 + X_2 + \cdots + X_n$ (jumlah $n$ pengamatan **berbeda** yang saling bebas): $N(n\mu,\ n\sigma^2)$.
- $nX$ (**satu** pengamatan dikali $n$): $N(n\mu,\ n^2\sigma^2)$.

Pada jumlah banyak pengamatan, kelebihan dan kekurangan sebagian saling menutupi, sehingga variansinya lebih kecil daripada $nX$.

## Contoh langkah demi langkah

### Contoh 1: Tinggi badan siswa

**Soal.** Tinggi badan siswa kelas 12 di sebuah sekolah $X \sim N(160, 64)$ dalam cm. Tentukan (a) $P(X < 172)$, (b) $P(150 < X < 172)$.

1. **Langkah 1: Baca parameter.** $\mu = 160$, $\sigma^2 = 64$, jadi $\sigma = 8$.
2. **Langkah 2: Standardisasi.** Untuk 172: $z = \frac{172 - 160}{8} = 1{,}5$. Untuk 150: $z = \frac{150 - 160}{8} = -1{,}25$.
3. **Langkah 3: Baca tabel untuk (a).** $P(X < 172) = P(Z < 1{,}5) = 0{,}9332$.
4. **Langkah 4: Bagian (b).** $P(Z < -1{,}25) = 1 - \Phi(1{,}25) = 1 - 0{,}8944 = 0{,}1056$. Jadi $P(150 < X < 172) = 0{,}9332 - 0{,}1056 = 0{,}8276$.
5. **Cek jawaban.** Rentang 150 sampai 172 mencakup kira-kira $\mu - 1{,}25\sigma$ sampai $\mu + 1{,}5\sigma$, sedikit lebih lebar dari $\mu \pm \sigma$ (68%). Hasil 83% masuk akal.

**Jawaban:** (a) 0,9332; (b) 0,8276.

### Contoh 2: Batas nilai untuk 10% terbaik

**Soal.** Nilai ujian matematika $X \sim N(65, 100)$. Nilai A diberikan kepada 10% siswa terbaik. Berapa nilai minimum untuk mendapat A?

1. **Langkah 1: Terjemahkan ke peluang.** Cari $a$ dengan $P(X > a) = 0{,}1$, atau $P(X < a) = 0{,}9$.
2. **Langkah 2: Cari $z$ dengan tabel terbalik.** $\Phi(z) = 0{,}9$ memberi $z = 1{,}2816$.
3. **Langkah 3: Ubah balik ke skala nilai.** $\sigma = 10$, jadi $a = 65 + 1{,}2816 \times 10 = 77{,}816 \approx 77{,}8$.
4. **Cek jawaban.** $P(X > 77{,}8) = P\!\left(Z > \frac{12{,}8}{10}\right) = 1 - \Phi(1{,}28) = 1 - 0{,}8997 \approx 0{,}100$. Tepat sekitar 10%.

**Jawaban:** Nilai minimum sekitar 77,8.

### Contoh 3: Mencari $\mu$ dan $\sigma$ sekaligus

**Soal.** Massa beras dalam karung berlabel 5 kg berdistribusi normal. Diketahui 15% karung bermassa kurang dari 4,9 kg dan 5% karung bermassa lebih dari 5,2 kg. Tentukan $\mu$ dan $\sigma$.

1. **Langkah 1: Ubah informasi pertama.** $P(X < 4{,}9) = 0{,}15$. Dari tabel, $\Phi(z) = 0{,}15$ memberi $z = -1{,}0364$. Jadi $\frac{4{,}9 - \mu}{\sigma} = -1{,}0364$, atau $\mu - 1{,}0364\sigma = 4{,}9$.
2. **Langkah 2: Ubah informasi kedua.** $P(X > 5{,}2) = 0{,}05$, jadi $P(X < 5{,}2) = 0{,}95$ dan $z = 1{,}6449$. Jadi $\mu + 1{,}6449\sigma = 5{,}2$.
3. **Langkah 3: Eliminasi.** Kurangkan persamaan pertama dari kedua: $2{,}6813\sigma = 0{,}3$, sehingga $\sigma \approx 0{,}1119$ kg.
4. **Langkah 4: Substitusi.** $\mu = 4{,}9 + 1{,}0364 \times 0{,}1119 \approx 5{,}016$ kg.
5. **Cek jawaban.** $\frac{4{,}9 - 5{,}016}{0{,}1119} \approx -1{,}04$ dan $\frac{5{,}2 - 5{,}016}{0{,}1119} \approx 1{,}64$. Keduanya cocok dengan nilai $z$ di Langkah 1 dan 2.

**Jawaban:** $\mu \approx 5{,}016$ kg dan $\sigma \approx 0{,}112$ kg.

### Contoh 4: Kardus kopi bubuk

**Soal.** Massa satu bungkus kopi bubuk $X \sim N(200, 4^2)$ gram. Massa satu kardus kosong $K \sim N(50, 3^2)$ gram. Satu kardus diisi 10 bungkus, semua massa saling bebas. (a) Tentukan peluang massa total kardus berisi lebih dari 2.060 gram. (b) Dua bungkus dipilih acak. Tentukan peluang selisih massanya kurang dari 5 gram.

1. **Langkah 1: Susun variabel total.** $T = X_1 + X_2 + \cdots + X_{10} + K$. Ini jumlah 10 bungkus **berbeda**, bukan $10X$.
2. **Langkah 2: Rata-rata dan variansi $T$.** $E(T) = 10(200) + 50 = 2050$. $\operatorname{Var}(T) = 10(16) + 9 = 169$, jadi $\sigma_T = 13$. Maka $T \sim N(2050, 169)$.
3. **Langkah 3: Hitung (a).** $z = \frac{2060 - 2050}{13} \approx 0{,}769$. Nilai dari kalkulator: $\Phi(0{,}769) = 0{,}7791$. Jadi $P(T > 2060) = 1 - 0{,}7791 = 0{,}2209$.
4. **Langkah 4: Susun selisih untuk (b).** $D = X_1 - X_2$. $E(D) = 0$ dan $\operatorname{Var}(D) = 16 + 16 = 32$. Maka $D \sim N(0, 32)$, $\sigma_D = \sqrt{32} \approx 5{,}657$.
5. **Langkah 5: Hitung (b).** "Selisih kurang dari 5" berarti $|D| < 5$, yaitu $-5 < D < 5$. $z = \frac{5}{5{,}657} \approx 0{,}8839$. Nilai dari kalkulator: $\Phi(0{,}8839) = 0{,}8116$. Jadi $P(|D| < 5) = 2(0{,}8116) - 1 = 0{,}6232$.
6. **Cek jawaban.** Andaikan salah memakai $10X$: variansinya $100 \times 16 + 9 = 1609$, jauh lebih besar dari 169. Jumlah bungkus berbeda memang lebih stabil, jadi $\sigma_T = 13$ yang benar. Untuk (b), simpangan baku selisih (5,66) lebih besar dari simpangan satu bungkus (4), sesuai bahwa variansi selisih dijumlahkan.

**Jawaban:** (a) $\approx 0{,}221$; (b) $\approx 0{,}623$.

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

1. $X \sim N(50, 25)$. Tentukan $P(X > 58)$.
2. $X \sim N(50, 25)$. Tentukan $P(45 < X < 55)$.
3. Tentukan $a$ jika $P(Z < a) = 0{,}9$.
4. $X \sim N(\mu, 16)$ dan $P(X < 30) = 0{,}2$. Tentukan $\mu$.
5. $X \sim N(10, 4)$ dan $Y \sim N(15, 9)$ saling bebas. Tentukan $P(X + Y > 28)$.

### Kunci jawaban

1. 0,0548. $z = \frac{58 - 50}{5} = 1{,}6$, jadi $1 - \Phi(1{,}6) = 1 - 0{,}9452 = 0{,}0548$.
2. 0,6827. $z = \pm 1$, jadi $2\Phi(1) - 1 = 2(0{,}8413) - 1 = 0{,}6827$ (sesuai aturan 68%).
3. $a = 1{,}2816$, dari tabel terbalik $\Phi(a) = 0{,}9$.
4. $\mu \approx 33{,}37$. $\Phi(z) = 0{,}2$ memberi $z = -0{,}8416$, jadi $\frac{30 - \mu}{4} = -0{,}8416$ dan $\mu = 30 + 3{,}366 = 33{,}37$ (dibulatkan).
5. 0,2027. $X + Y \sim N(25, 13)$; $z = \frac{3}{\sqrt{13}} \approx 0{,}832$; $1 - \Phi(0{,}832) = 1 - 0{,}7973 = 0{,}2027$.
