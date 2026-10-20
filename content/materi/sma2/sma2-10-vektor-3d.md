---
id: sma2-10-vektor-3d
judul: Vektor di Ruang, Garis, dan Bidang
jenjang: sma2
moe: "H2 Mathematics 9758 · Pure Mathematics · Vectors"
prasyarat: [sma1-02-vektor-2d, sma2-01-trigonometri-identitas]
durasi_menit: 90
---

## Kenapa belajar ini?

Pilot drone, arsitek, dan pembuat gim 3D bekerja di ruang tiga dimensi. Dengan vektor, kita bisa menghitung sudut antara dua kabel, jarak terdekat drone ke tiang, atau titik tempat sebuah lintasan menembus atap.

## Analogi

Bayangkan sebuah **drone di lapangan Puputan**. Posisinya ditentukan tiga perintah: berapa meter ke **timur** ($x$), ke **utara** ($y$), dan **ke atas** ($z$).

- **Vektor** adalah perintah terbang: arah dan panjang perpindahan.
- **Perkalian titik** mengukur "seberapa searah" dua perintah, seperti panjang **bayangan** satu tongkat pada tongkat lain saat matahari tepat di atasnya.
- **Perkalian silang** menghasilkan arah yang **tegak lurus** terhadap dua perintah sekaligus, seperti **tiang** yang berdiri tegak di atas lantai yang dibentuk dua arah itu.
- **Garis** adalah lintasan drone yang terbang lurus. **Bidang** adalah lantai atau atap yang datar (boleh miring).

## Konsep

### Vektor di ruang

Dengan vektor satuan $\mathbf{i}, \mathbf{j}, \mathbf{k}$ ke arah sumbu $x, y, z$:
$$ \mathbf{a} = a_1\mathbf{i} + a_2\mathbf{j} + a_3\mathbf{k} = \begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix}, \qquad |\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2} $$
Vektor satuan searah $\mathbf{a}$ adalah $\hat{\mathbf{a}} = \frac{\mathbf{a}}{|\mathbf{a}|}$. Vektor dari $A$ ke $B$ adalah $\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$.

### Perkalian titik

$$ \mathbf{a} \cdot \mathbf{b} = a_1b_1 + a_2b_2 + a_3b_3 = |\mathbf{a}||\mathbf{b}|\cos\theta $$
Rumus kedua berasal dari aturan kosinus pada segitiga dengan sisi $\mathbf{a}$, $\mathbf{b}$, dan $\mathbf{a} - \mathbf{b}$. Akibatnya:
- $\mathbf{a} \perp \mathbf{b} \iff \mathbf{a} \cdot \mathbf{b} = 0$.
- Panjang proyeksi (bayangan) $\mathbf{a}$ pada arah $\mathbf{b}$ adalah $|\mathbf{a} \cdot \hat{\mathbf{b}}|$.

### Perkalian silang

$$ \mathbf{a} \times \mathbf{b} = \begin{pmatrix} a_2b_3 - a_3b_2 \\ a_3b_1 - a_1b_3 \\ a_1b_2 - a_2b_1 \end{pmatrix} $$
Hasilnya tegak lurus terhadap $\mathbf{a}$ dan $\mathbf{b}$ (tiang di atas lantai), dengan $|\mathbf{a} \times \mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta$, yaitu luas jajargenjang yang dibentuk $\mathbf{a}$ dan $\mathbf{b}$. Luas segitiga adalah setengahnya. Urutan penting: $\mathbf{b} \times \mathbf{a} = -(\mathbf{a} \times \mathbf{b})$.

### Persamaan garis

Garis melalui titik $A$ dengan arah $\mathbf{d}$: $\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}$, $\lambda \in \mathbb{R}$. Bentuk kartesiusnya
$$ \frac{x - a_1}{d_1} = \frac{y - a_2}{d_2} = \frac{z - a_3}{d_3} $$

### Persamaan bidang

Bidang ditentukan oleh satu titik $A$ dan **vektor normal** $\mathbf{n}$ (tiang tegak lurus bidang). Untuk setiap titik $R$ pada bidang, $\overrightarrow{AR}$ tegak lurus $\mathbf{n}$, jadi $(\mathbf{r} - \mathbf{a}) \cdot \mathbf{n} = 0$:
$$ \mathbf{r} \cdot \mathbf{n} = \mathbf{a} \cdot \mathbf{n} \quad\Longleftrightarrow\quad n_1x + n_2y + n_3z = p $$
Bentuk parametrik: $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b} + \mu\mathbf{c}$, dengan normal $\mathbf{n} = \mathbf{b} \times \mathbf{c}$.

### Sudut

Ambil sudut lancip, jadi pakai nilai mutlak:
- Garis dan garis: $\cos\theta = \dfrac{|\mathbf{d}_1 \cdot \mathbf{d}_2|}{|\mathbf{d}_1||\mathbf{d}_2|}$.
- Bidang dan bidang: $\cos\theta = \dfrac{|\mathbf{n}_1 \cdot \mathbf{n}_2|}{|\mathbf{n}_1||\mathbf{n}_2|}$.
- Garis dan bidang: $\sin\theta = \dfrac{|\mathbf{d} \cdot \mathbf{n}|}{|\mathbf{d}||\mathbf{n}|}$. Pakai sinus karena sudut antara $\mathbf{d}$ dan normal adalah $90^\circ - \theta$.

### Jarak

- Titik $P$ ke garis $\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}$: $\dfrac{|\overrightarrow{AP} \times \mathbf{d}|}{|\mathbf{d}|}$, atau cari kaki tegak lurus $F$ dengan syarat $\overrightarrow{FP} \cdot \mathbf{d} = 0$.
- Titik $P$ ke bidang $\mathbf{r} \cdot \mathbf{n} = p$: $\dfrac{|\mathbf{p} \cdot \mathbf{n} - p|}{|\mathbf{n}|}$, dengan $\mathbf{p}$ vektor posisi $P$.

### Perpotongan

- **Dua garis**: samakan $\mathbf{a}_1 + \lambda\mathbf{d}_1 = \mathbf{a}_2 + \mu\mathbf{d}_2$. Tiga persamaan, dua anu. Jika konsisten, garis berpotongan. Jika tidak konsisten dan arahnya tidak sejajar, garis **bersilangan**.
- **Garis dan bidang**: substitusi $\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}$ ke persamaan bidang, selesaikan $\lambda$.
- **Dua bidang**: garis potongnya berarah $\mathbf{n}_1 \times \mathbf{n}_2$ (tegak lurus kedua tiang); titiknya dicari dengan memilih satu koordinat, misalnya $y = 0$.

## Contoh langkah demi langkah

### Contoh 1: Sudut dan luas segitiga

**Soal.** $\overrightarrow{OA} = \begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}$ dan $\overrightarrow{OB} = \begin{pmatrix} 3 \\ 0 \\ 4 \end{pmatrix}$. Tentukan sudut $AOB$ dan luas segitiga $OAB$.

1. **Langkah 1: Panjang.** $|\mathbf{a}| = \sqrt{1 + 4 + 4} = 3$, $|\mathbf{b}| = \sqrt{9 + 0 + 16} = 5$.
2. **Langkah 2: Perkalian titik.** $\mathbf{a} \cdot \mathbf{b} = 3 + 0 + 8 = 11$, jadi $\cos\theta = \frac{11}{15}$ dan $\theta \approx 42{,}8^\circ$.
3. **Langkah 3: Perkalian silang.** $\mathbf{a} \times \mathbf{b} = \begin{pmatrix} 2(4) - 2(0) \\ 2(3) - 1(4) \\ 1(0) - 2(3) \end{pmatrix} = \begin{pmatrix} 8 \\ 2 \\ -6 \end{pmatrix}$.
4. **Langkah 4: Luas.** $\frac{1}{2}\sqrt{64 + 4 + 36} = \frac{1}{2}\sqrt{104} = \sqrt{26} \approx 5{,}10$.
5. **Cek jawaban.** Tiang harus tegak lurus kedua lengan: $(8)(1) + (2)(2) + (-6)(2) = 0$ dan $(8)(3) + 0 + (-6)(4) = 0$. Juga $\cos^2\theta + \sin^2\theta = \frac{121}{225} + \frac{104}{225} = 1$.

**Jawaban:** $\angle AOB \approx 42{,}8^\circ$, luas $\sqrt{26} \approx 5{,}10$ satuan luas.

### Contoh 2: Garis yang berpotongan

**Soal.** Tunjukkan bahwa $l_1: \mathbf{r} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} + \lambda\begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix}$ dan $l_2: \mathbf{r} = \begin{pmatrix} 1 \\ -2 \\ 7 \end{pmatrix} + \mu\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$ berpotongan. Tentukan titik potong dan sudutnya.

1. **Langkah 1: Samakan komponen.** $1 + \lambda = 1 + \mu$; $\ 2 - \lambda = -2 + \mu$; $\ 3 + 2\lambda = 7$.
2. **Langkah 2: Selesaikan dua persamaan.** Dari yang ketiga, $\lambda = 2$. Dari yang pertama, $\mu = \lambda = 2$.
3. **Langkah 3: Uji persamaan sisa.** Persamaan kedua: $2 - 2 = 0$ dan $-2 + 2 = 0$. Konsisten, jadi berpotongan.
4. **Langkah 4: Titik potong.** $\lambda = 2$ di $l_1$: $(3, 0, 7)$.
5. **Langkah 5: Sudut.** $\mathbf{d}_1 \cdot \mathbf{d}_2 = 1 - 1 + 0 = 0$, jadi tegak lurus.
6. **Cek jawaban.** $\mu = 2$ di $l_2$: $(1 + 2, -2 + 2, 7) = (3, 0, 7)$. Sama.

**Jawaban:** Berpotongan di $(3, 0, 7)$ dengan sudut $90^\circ$.

### Contoh 3: Bidang dari tiga titik dan garis yang menembusnya

**Soal.** Bidang $\Pi$ melalui $A(1, 0, 2)$, $B(3, 1, 1)$, $C(2, -1, 4)$. (a) Tentukan persamaan kartesius $\Pi$. (b) Garis $\mathbf{r} = \begin{pmatrix} 4 \\ 2 \\ 1 \end{pmatrix} + \lambda\begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix}$ menembus $\Pi$. Tentukan titik tembus dan sudut antara garis dan bidang.

1. **Langkah 1: Dua arah di bidang.** $\overrightarrow{AB} = (2, 1, -1)$, $\overrightarrow{AC} = (1, -1, 2)$.
2. **Langkah 2: Tiang (normal).** $\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC} = \big(1(2) - (-1)(-1),\ (-1)(1) - 2(2),\ 2(-1) - 1(1)\big) = (1, -5, -3)$.
3. **Langkah 3: Persamaan bidang.** $p = \mathbf{a} \cdot \mathbf{n} = 1 + 0 - 6 = -5$, jadi $x - 5y - 3z = -5$.
4. **Langkah 4: Substitusi garis.** $(4 + \lambda) - 5(2 + \lambda) - 3(1 - \lambda) = -5 \Rightarrow -9 - \lambda = -5 \Rightarrow \lambda = -4$. Titik tembus $(0, -2, 5)$.
5. **Langkah 5: Sudut.** $\mathbf{d} \cdot \mathbf{n} = 1 - 5 + 3 = -1$. $\sin\theta = \dfrac{1}{\sqrt{3}\sqrt{35}} = \dfrac{1}{\sqrt{105}}$, jadi $\theta \approx 5{,}6^\circ$.
6. **Cek jawaban.** $B$: $3 - 5 - 3 = -5$. $C$: $2 + 5 - 12 = -5$. Titik tembus: $0 + 10 - 15 = -5$. Semua di bidang.

**Jawaban:** (a) $x - 5y - 3z = -5$; (b) titik tembus $(0, -2, 5)$, sudut $\approx 5{,}6^\circ$.

### Contoh 4: Drone melewati tiang lampu

**Soal.** Sebuah drone terbang lurus mengikuti $\mathbf{r} = \begin{pmatrix} 0 \\ 0 \\ 10 \end{pmatrix} + \lambda\begin{pmatrix} 4 \\ 3 \\ 0 \end{pmatrix}$ (dalam meter). Ujung tiang lampu berada di $P(10, 20, 6)$. Berapa jarak terdekat drone ke ujung tiang, dan di titik mana?

1. **Langkah 1: Titik umum di lintasan.** $F = (4\lambda, 3\lambda, 10)$, jadi $\overrightarrow{FP} = (10 - 4\lambda,\ 20 - 3\lambda,\ -4)$.
2. **Langkah 2: Syarat terdekat.** Garis $FP$ harus tegak lurus lintasan: $\overrightarrow{FP} \cdot (4, 3, 0) = 0$.
$$ 4(10 - 4\lambda) + 3(20 - 3\lambda) = 0 \Rightarrow 100 - 25\lambda = 0 \Rightarrow \lambda = 4 $$
3. **Langkah 3: Kaki tegak lurus.** $F = (16, 12, 10)$ dan $\overrightarrow{FP} = (-6, 8, -4)$.
4. **Langkah 4: Jarak.** $|\overrightarrow{FP}| = \sqrt{36 + 64 + 16} = \sqrt{116} = 2\sqrt{29} \approx 10{,}8$ m.
5. **Cek jawaban.** Pakai rumus silang dengan $A(0, 0, 10)$: $\overrightarrow{AP} = (10, 20, -4)$, $\overrightarrow{AP} \times (4, 3, 0) = (12, -16, -50)$, panjangnya $\sqrt{2900}$. Bagi $|\mathbf{d}| = 5$: $\frac{\sqrt{2900}}{5} = \sqrt{116}$. Sama.

**Jawaban:** Jarak terdekat $2\sqrt{29} \approx 10{,}8$ m, saat drone di $(16, 12, 10)$.

## Kesalahan yang sering terjadi

- **Menganggap perkalian titik menghasilkan vektor.** $\mathbf{a} \cdot \mathbf{b}$ adalah bilangan; $\mathbf{a} \times \mathbf{b}$ adalah vektor.
- **Salah tanda komponen tengah perkalian silang.** Komponen kedua adalah $a_3b_1 - a_1b_3$. Selalu cek hasilnya dengan perkalian titik terhadap kedua vektor: harus nol.
- **Memakai cos untuk sudut garis-bidang.** Normal tegak lurus bidang, jadi rumus dengan $\mathbf{n}$ memberi $\sin\theta$, bukan $\cos\theta$.
- **Menyimpulkan "berpotongan" dari dua persamaan saja.** Nilai $\lambda$ dan $\mu$ wajib diuji di persamaan ketiga. Jika tidak cocok dan arah tidak sejajar, garis bersilangan.
- **Lupa nilai mutlak.** Hasil perkalian titik negatif memberi sudut tumpul; sudut antara garis atau bidang biasanya diambil yang lancip.

## Ringkasan

- $|\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$; $\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$; tegak lurus jika hasilnya 0.
- $\mathbf{a} \times \mathbf{b}$ tegak lurus keduanya, panjangnya luas jajargenjang.
- Garis $\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}$; bidang $\mathbf{r} \cdot \mathbf{n} = p$ atau $n_1x + n_2y + n_3z = p$.
- Sudut: cos untuk garis-garis dan bidang-bidang, sin untuk garis-bidang.
- Jarak titik ke bidang $\frac{|\mathbf{p} \cdot \mathbf{n} - p|}{|\mathbf{n}|}$; titik ke garis lewat kaki tegak lurus atau $\frac{|\overrightarrow{AP} \times \mathbf{d}|}{|\mathbf{d}|}$.
- Garis potong dua bidang berarah $\mathbf{n}_1 \times \mathbf{n}_2$.

## Cek pemahaman

1. Tentukan panjang dan vektor satuan dari $\begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix}$.
2. Apakah $\begin{pmatrix} 1 \\ 2 \\ -3 \end{pmatrix}$ tegak lurus $\begin{pmatrix} 4 \\ 1 \\ 2 \end{pmatrix}$?
3. Tentukan persamaan kartesius bidang yang melalui $(1, 2, 3)$ dengan normal $\begin{pmatrix} 2 \\ -1 \\ 4 \end{pmatrix}$.
4. Tentukan jarak titik $(1, 1, 1)$ ke bidang $2x + y - 2z = 7$.
5. Tentukan persamaan vektor garis potong bidang $x + y + z = 6$ dan $x - y + 2z = 5$.

### Kunci jawaban

1. Panjang 3, vektor satuan $\frac{1}{3}(2, -1, 2)$. $\sqrt{4 + 1 + 4} = 3$.
2. Ya. $4 + 2 - 6 = 0$.
3. $2x - y + 4z = 12$. $p = 2(1) - 2 + 4(3) = 12$.
4. $2$. $\frac{|2 + 1 - 2 - 7|}{\sqrt{4 + 1 + 4}} = \frac{6}{3}$.
5. $\mathbf{r} = \begin{pmatrix} 7 \\ 0 \\ -1 \end{pmatrix} + t\begin{pmatrix} 3 \\ -1 \\ -2 \end{pmatrix}$. Arah $(1, 1, 1) \times (1, -1, 2) = (3, -1, -2)$; dengan $y = 0$ didapat $x + z = 6$, $x + 2z = 5$, jadi $z = -1$, $x = 7$.
