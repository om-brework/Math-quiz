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

### Masalah maksimum dan minimum

Untuk mencari nilai terbesar atau terkecil sebuah besaran:

1. Nyatakan besaran itu sebagai fungsi **satu** variabel, memakai syarat (kendala) di soal.
2. Cari titik stasioner: $\dfrac{dy}{dx} = 0$ (puncak atau lembah, jalan datar).
3. Tentukan jenisnya dengan uji turunan kedua: $\dfrac{d^2y}{dx^2} < 0$ berarti maksimum, $\dfrac{d^2y}{dx^2} > 0$ berarti minimum.
4. Periksa daerah asal yang masuk akal (panjang tidak boleh negatif, dan sebagainya).

## Contoh langkah demi langkah

### Contoh 1: Garis singgung dan garis normal

**Soal.** Tentukan persamaan garis singgung dan garis normal pada kurva $y = x^3 - 2x + 1$ di titik dengan $x = 2$.

1. **Langkah 1: Cari titik singgung.** $y = 2^3 - 2(2) + 1 = 8 - 4 + 1 = 5$. Titiknya $(2, 5)$.
2. **Langkah 2: Cari kemiringan papan.** $\dfrac{dy}{dx} = 3x^2 - 2$. Di $x = 2$: $3(4) - 2 = 10$.
3. **Langkah 3: Tulis garis singgung.** $y - 5 = 10(x - 2)$, jadi $y = 10x - 15$.
4. **Langkah 4: Cari kemiringan tiang.** $m_N = -\dfrac{1}{10}$.
5. **Langkah 5: Tulis garis normal.** $y - 5 = -\dfrac{1}{10}(x - 2)$. Kalikan 10: $10y - 50 = -x + 2$, jadi $x + 10y - 52 = 0$.
6. **Cek jawaban.** Titik $(2, 5)$ harus terletak di kedua garis: $10(2) - 15 = 5$ dan $2 + 10(5) - 52 = 0$. Hasil kali gradien: $10 \times \left(-\dfrac{1}{10}\right) = -1$. Benar.

**Jawaban:** Garis singgung $y = 10x - 15$, garis normal $x + 10y - 52 = 0$.

### Contoh 2: Air naik di tangki kerucut

**Soal.** Sebuah tangki berbentuk kerucut terbalik memiliki tinggi 3 m dan jari-jari atas 1 m. Air dialirkan masuk dengan laju $0{,}2\ \text{m}^3$ per menit. Seberapa cepat permukaan air naik ketika kedalaman air 1,5 m?

1. **Langkah 1: Pahami soal.** Diketahui $\dfrac{dV}{dt} = 0{,}2$. Ditanya $\dfrac{dh}{dt}$ saat $h = 1{,}5$.
2. **Langkah 2: Hubungkan $r$ dan $h$.** Dengan kesebangunan, $\dfrac{r}{h} = \dfrac{1}{3}$, jadi $r = \dfrac{h}{3}$.
3. **Langkah 3: Tulis $V$ dalam satu variabel.** $V = \dfrac{1}{3}\pi r^2 h = \dfrac{1}{3}\pi \left(\dfrac{h}{3}\right)^2 h = \dfrac{\pi h^3}{27}$.
4. **Langkah 4: Turunkan.** $\dfrac{dV}{dh} = \dfrac{3\pi h^2}{27} = \dfrac{\pi h^2}{9}$. Di $h = 1{,}5$: $\dfrac{\pi (2{,}25)}{9} = 0{,}25\pi$.
5. **Langkah 5: Pakai aturan rantai.** $\dfrac{dV}{dt} = \dfrac{dV}{dh} \times \dfrac{dh}{dt}$, jadi
$$ \frac{dh}{dt} = \frac{0{,}2}{0{,}25\pi} = \frac{0{,}8}{\pi} \approx 0{,}255 \text{ m/menit} $$
6. **Cek jawaban.** Satuan: $(\text{m}^3/\text{menit}) \div \text{m}^2 = \text{m/menit}$, cocok. Masuk akal juga: makin tinggi air, permukaannya makin lebar, jadi lajunya akan makin lambat. Rumus $\dfrac{0{,}2 \cdot 9}{\pi h^2}$ memang mengecil saat $h$ membesar.

**Jawaban:** Permukaan air naik dengan laju $\dfrac{0{,}8}{\pi} \approx 0{,}255$ m per menit.

### Contoh 3: Pagar kandang dengan kawat terbatas

**Soal.** Pak Made punya 60 m kawat untuk memagari kandang ayam berbentuk persegi panjang. Satu sisi kandang menempel pada tembok rumah, jadi hanya tiga sisi yang dipagari. Berapa luas kandang terbesar?

1. **Langkah 1: Beri nama variabel.** Misalkan dua sisi yang tegak lurus tembok masing-masing $x$ m. Sisi sejajar tembok adalah $60 - 2x$ m.
2. **Langkah 2: Tulis fungsi satu variabel.** $L = x(60 - 2x) = 60x - 2x^2$, dengan $0 < x < 30$.
3. **Langkah 3: Cari titik datar.** $\dfrac{dL}{dx} = 60 - 4x = 0$, jadi $x = 15$.
4. **Langkah 4: Uji jenisnya.** $\dfrac{d^2L}{dx^2} = -4 < 0$, berarti puncak (maksimum).
5. **Langkah 5: Hitung nilainya.** Sisi sejajar tembok $60 - 30 = 30$ m, luas $15 \times 30 = 450\ \text{m}^2$.
6. **Cek jawaban.** Coba nilai di sekitar: $x = 14$ memberi $14 \times 32 = 448$, dan $x = 16$ memberi $16 \times 28 = 448$. Keduanya lebih kecil dari 450. Benar.

**Jawaban:** Luas terbesar $450\ \text{m}^2$, dengan ukuran 15 m × 30 m.

### Contoh 4: Kotak tanpa tutup dari karton

**Soal.** Siti memotong persegi berukuran $x$ cm dari setiap pojok karton persegi 30 cm × 30 cm, lalu melipat sisinya menjadi kotak tanpa tutup. Tentukan $x$ agar volume kotak maksimum, dan hitung volumenya.

1. **Langkah 1: Tulis volume.** Alas kotak berukuran $(30 - 2x)$ × $(30 - 2x)$, tinggi $x$. Jadi $V = x(30 - 2x)^2 = 4x^3 - 120x^2 + 900x$, dengan $0 < x < 15$.
2. **Langkah 2: Turunkan.** $\dfrac{dV}{dx} = 12x^2 - 240x + 900 = 12(x^2 - 20x + 75) = 12(x - 5)(x - 15)$.
3. **Langkah 3: Cari titik datar di daerah asal.** $x = 5$ atau $x = 15$. Nilai $x = 15$ di luar daerah asal (kotaknya hilang), jadi $x = 5$.
4. **Langkah 4: Uji turunan kedua.** $\dfrac{d^2V}{dx^2} = 24x - 240$. Di $x = 5$: $120 - 240 = -120 < 0$, maksimum.
5. **Langkah 5: Hitung volume.** $V = 5 \times 20^2 = 2000\ \text{cm}^3$.
6. **Cek jawaban.** $x = 4$: $4 \times 22^2 = 1936$. $x = 6$: $6 \times 18^2 = 1944$. Keduanya kurang dari 2000. Benar.

**Jawaban:** $x = 5$ cm, volume maksimum $2000\ \text{cm}^3$.

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

1. Tentukan persamaan garis singgung pada $y = x^2 + 3x$ di titik dengan $x = 1$.
2. Tentukan persamaan garis normal pada $y = \dfrac{4}{x}$ di titik $(2, 2)$.
3. Jari-jari sebuah lingkaran bertambah $0{,}3$ cm/s. Berapa laju pertambahan luasnya saat jari-jari 5 cm?
4. Rusuk sebuah kubus logam yang dipanaskan bertambah $0{,}1$ cm/s. Berapa laju pertambahan volumenya saat rusuk 4 cm?
5. Bilangan positif $x$ dan $y$ memenuhi $x + y = 12$. Tentukan nilai maksimum $P = x^2 y$.

### Kunci jawaban

1. $y = 5x - 1$. Titiknya $(1, 4)$, gradien $2(1) + 3 = 5$, jadi $y - 4 = 5(x - 1)$.
2. $y = x$. $\dfrac{dy}{dx} = -\dfrac{4}{x^2} = -1$ di $x = 2$, jadi gradien normal 1 dan $y - 2 = x - 2$.
3. $3\pi \approx 9{,}42\ \text{cm}^2/\text{s}$. $\dfrac{dA}{dt} = 2\pi r \dfrac{dr}{dt} = 2\pi(5)(0{,}3)$.
4. $4{,}8\ \text{cm}^3/\text{s}$. $\dfrac{dV}{dt} = 3s^2 \dfrac{ds}{dt} = 3(16)(0{,}1)$.
5. $256$. $P = 12x^2 - x^3$, $P' = 3x(8 - x) = 0$ memberi $x = 8$, $P'' = 24 - 6x = -24 < 0$, jadi maksimum $8^2 \times 4 = 256$.
