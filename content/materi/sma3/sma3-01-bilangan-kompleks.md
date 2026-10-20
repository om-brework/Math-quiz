---
id: sma3-01-bilangan-kompleks
judul: Bilangan Kompleks
jenjang: sma3
moe: "H2 Mathematics 9758 · Pure Mathematics · Introduction to Complex Numbers"
prasyarat: [sma2-01-trigonometri-identitas, sma1-08-polinomial-pecahan-parsial]
durasi_menit: 90
---

## Kenapa belajar ini?

Persamaan $x^2 + 1 = 0$ tidak punya penyelesaian real. Dengan bilangan kompleks, **setiap** persamaan polinomial punya akar. Bilangan kompleks juga dipakai insinyur listrik untuk arus bolak-balik, dan programmer grafis untuk memutar gambar.

## Analogi

Bayangkan bilangan real sebagai titik di **jalan lurus** yang membentang dari barat ke timur. Mengalikan dengan $-1$ berarti **berbalik arah 180°**.

Sekarang tanyakan: langkah apa yang kalau dilakukan **dua kali** sama dengan berbalik 180°? Jawabannya: **belok kiri 90°**. Itulah $i$. Karena dua kali belok 90° sama dengan berbalik, $i \times i = -1$.

Begitu kita boleh belok, bilangan tidak lagi hanya di jalan lurus, tetapi di seluruh **peta** (bidang). Setiap bilangan kompleks adalah titik di peta itu. Mengalikan bilangan kompleks berarti **memutar dan meregangkan**. Ide "putar dan regang" ini kita pakai sampai akhir.

## Konsep

### Bentuk kartesius

Bilangan kompleks ditulis $z = a + bi$ dengan $a, b \in \mathbb{R}$ dan $i^2 = -1$. $a$ disebut bagian real, $\text{Re}(z) = a$; $b$ bagian imajiner, $\text{Im}(z) = b$. Dua bilangan kompleks sama jika bagian real **dan** imajinernya sama.

### Operasi

Jumlah dan selisih: gabungkan bagian sejenis. Perkalian: jabarkan, lalu ganti $i^2$ dengan $-1$:
$$ (a + bi)(c + di) = (ac - bd) + (ad + bc)i $$

**Sekawan** dari $z = a + bi$ adalah $z^* = a - bi$ (cermin terhadap sumbu real). Sifat penting:
$$ zz^* = a^2 + b^2 \quad (\text{selalu real}), \qquad z + z^* = 2a $$
Untuk membagi, kalikan pembilang dan penyebut dengan sekawan penyebut, sehingga penyebutnya menjadi real.

### Bidang Argand

Titik $(a, b)$ mewakili $z = a + bi$. Sumbu mendatar adalah sumbu real, sumbu tegak sumbu imajiner.

- **Modulus** $|z| = r = \sqrt{a^2 + b^2}$: jarak dari titik asal.
- **Argumen** $\arg z = \theta$: sudut dari sumbu real positif, dengan nilai utama $-\pi < \theta \leq \pi$. Hitung sudut acuan $\alpha = \tan^{-1}\left|\frac{b}{a}\right|$, lalu sesuaikan dengan kuadran dari gambar.

### Bentuk polar dan eksponensial

Dari gambar, $a = r\cos\theta$ dan $b = r\sin\theta$, jadi
$$ z = r(\cos\theta + i\sin\theta) = re^{i\theta} $$
Bentuk kedua memakai rumus Euler $e^{i\theta} = \cos\theta + i\sin\theta$.

**Perkalian dan pembagian.** Dengan sifat eksponen:
$$ z_1z_2 = r_1r_2\,e^{i(\theta_1 + \theta_2)}, \qquad \frac{z_1}{z_2} = \frac{r_1}{r_2}\,e^{i(\theta_1 - \theta_2)} $$
Jadi modulus **dikali** (regang), argumen **dijumlah** (putar). Inilah analogi "putar dan regang". Akibatnya $z^n = r^ne^{in\theta}$. Mengalikan dengan $i = e^{i\pi/2}$ adalah putar $90^\circ$ tanpa meregang.

### Akar kompleks persamaan polinomial

Jika polinomial berkoefisien **real** punya akar $z = a + bi$ ($b \neq 0$), maka **sekawannya** $a - bi$ juga akar. Alasannya, sekawankan kedua ruas $P(z) = 0$; koefisien real tidak berubah, jadi $P(z^*) = 0$.

Pasangan akar $a \pm bi$ membentuk faktor kuadrat real:
$$ (z - (a + bi))(z - (a - bi)) = z^2 - 2az + (a^2 + b^2) $$
Persamaan kuadrat $az^2 + bz + c = 0$ dengan diskriminan negatif punya akar $z = \dfrac{-b \pm i\sqrt{4ac - b^2}}{2a}$.

## Contoh langkah demi langkah

### Contoh 1: Operasi dasar

**Soal.** $z = 3 + 4i$ dan $w = 1 - 2i$. Tentukan $z + w$, $zw$, dan $\dfrac{z}{w}$.

1. **Langkah 1: Jumlah.** $z + w = (3 + 1) + (4 - 2)i = 4 + 2i$.
2. **Langkah 2: Kali.** $zw = 3 - 6i + 4i - 8i^2 = 3 - 2i + 8 = 11 - 2i$.
3. **Langkah 3: Bagi dengan sekawan.** Kalikan atas dan bawah dengan $w^* = 1 + 2i$:
$$ \frac{(3 + 4i)(1 + 2i)}{(1 - 2i)(1 + 2i)} = \frac{3 + 6i + 4i + 8i^2}{1 + 4} = \frac{-5 + 10i}{5} = -1 + 2i $$
4. **Cek jawaban.** $w \times (-1 + 2i) = -1 + 2i + 2i - 4i^2 = 3 + 4i = z$. Benar.

**Jawaban:** $4 + 2i$; $11 - 2i$; $-1 + 2i$.

### Contoh 2: Bentuk polar, putar dan regang

**Soal.** $z = -1 + \sqrt{3}\,i$ dan $w = 1 + i$. Nyatakan $z$ dan $w$ dalam bentuk $re^{i\theta}$, lalu tentukan $zw$ dan $z^3$ dalam bentuk yang sama.

1. **Langkah 1: Modulus.** $|z| = \sqrt{1 + 3} = 2$, $|w| = \sqrt{2}$.
2. **Langkah 2: Argumen.** $z$ di kuadran II, sudut acuan $\tan^{-1}\sqrt{3} = \frac{\pi}{3}$, jadi $\arg z = \pi - \frac{\pi}{3} = \frac{2\pi}{3}$. $w$ di kuadran I, $\arg w = \frac{\pi}{4}$.
3. **Langkah 3: Kalikan.** Regang: $2 \times \sqrt{2} = 2\sqrt{2}$. Putar: $\frac{2\pi}{3} + \frac{\pi}{4} = \frac{11\pi}{12}$. Jadi $zw = 2\sqrt{2}\,e^{i\,11\pi/12}$.
4. **Langkah 4: Pangkat.** $z^3 = 2^3e^{i\,2\pi} = 8$, karena putaran $2\pi$ kembali ke sumbu real positif.
5. **Cek jawaban.** Hitung langsung: $(-1 + \sqrt{3}i)^2 = 1 - 2\sqrt{3}i - 3 = -2 - 2\sqrt{3}i$. Kalikan lagi dengan $(-1 + \sqrt{3}i)$: $2 - 2\sqrt{3}i + 2\sqrt{3}i - 6i^2 = 8$. Cocok.

**Jawaban:** $z = 2e^{i\,2\pi/3}$, $w = \sqrt{2}e^{i\pi/4}$, $zw = 2\sqrt{2}e^{i\,11\pi/12}$, $z^3 = 8$.

### Contoh 3: Akar persamaan pangkat tiga

**Soal.** Diketahui $1 + 2i$ adalah akar $z^3 - z^2 + 3z + 5 = 0$. Tentukan semua akarnya.

1. **Langkah 1: Pakai sifat sekawan.** Koefisien real, jadi $1 - 2i$ juga akar.
2. **Langkah 2: Faktor kuadrat.** $(z - 1 - 2i)(z - 1 + 2i) = (z - 1)^2 + 4 = z^2 - 2z + 5$.
3. **Langkah 3: Cari faktor ketiga.** $z^3 - z^2 + 3z + 5 = (z^2 - 2z + 5)(z + c)$. Bandingkan konstanta: $5c = 5$, jadi $c = 1$.
4. **Langkah 4: Tulis akar.** $z = 1 + 2i$, $1 - 2i$, $-1$.
5. **Cek jawaban.** Jabarkan $(z^2 - 2z + 5)(z + 1) = z^3 - z^2 + 3z + 5$. Cocok. Uji juga $z = -1$: $-1 - 1 - 3 + 5 = 0$.

**Jawaban:** $1 + 2i$, $1 - 2i$, dan $-1$.

### Contoh 4: Memasang tiang taman berbentuk persegi

**Soal.** Pak Ketut memasang empat tiang lampu taman membentuk persegi $ABCD$ (berlawanan arah jarum jam). Pada denah, $A$ diwakili $1 + i$ dan $B$ diwakili $4 + 2i$ (satuan meter). Tentukan posisi $C$ dan $D$.

1. **Langkah 1: Vektor sisi.** $\overrightarrow{AB} = (4 + 2i) - (1 + i) = 3 + i$.
2. **Langkah 2: Putar $90^\circ$.** Sisi $BC$ adalah $AB$ yang diputar $90^\circ$ berlawanan arah jarum jam, yaitu dikali $i$: $i(3 + i) = -1 + 3i$.
3. **Langkah 3: Cari $C$ dan $D$.** $C = B + (-1 + 3i) = 3 + 5i$. $D = A + (-1 + 3i) = 3i$.
4. **Cek jawaban.** $|AB| = \sqrt{9 + 1} = \sqrt{10}$, $|BC| = |-1 + 3i| = \sqrt{10}$. $\overrightarrow{DC} = (3 + 5i) - 3i = 3 + i = \overrightarrow{AB}$, jadi sisi berhadapan sejajar dan sama panjang.

**Jawaban:** $C = 3 + 5i$ dan $D = 3i$, yaitu titik $(3, 5)$ dan $(0, 3)$ pada denah.

## Kesalahan yang sering terjadi

- **Lupa $i^2 = -1$.** Menulis $(3 + 4i)(1 - 2i) = 3 - 2i - 8i^2$ lalu berhenti, atau mengganti $-8i^2$ dengan $-8$. Yang benar $-8i^2 = +8$.
- **Argumen di kuadran salah.** Untuk $-1 + \sqrt{3}i$, kalkulator memberi $\tan^{-1}\frac{\sqrt{3}}{-1} = -\frac{\pi}{3}$. Titiknya di kuadran II, jadi argumen $\frac{2\pi}{3}$. Selalu gambar titiknya dulu.
- **Mengalikan argumen.** Pada perkalian, argumen **dijumlah**, bukan dikali. Hanya modulus yang dikali.
- **Memakai sifat sekawan tanpa syarat.** Akar berpasangan sekawan hanya jika **semua koefisien real**. Untuk $z^2 - iz + 2 = 0$, sifat ini tidak berlaku.
- **$|a + bi| = a + b$.** Modulus adalah $\sqrt{a^2 + b^2}$, seperti teorema Pythagoras di bidang Argand.

## Ringkasan

- $z = a + bi$, $i^2 = -1$; dua bilangan kompleks sama jika bagian real dan imajinernya sama.
- Sekawan $z^* = a - bi$; $zz^* = |z|^2$; pembagian memakai sekawan penyebut.
- Bidang Argand: $|z| = \sqrt{a^2 + b^2}$, $\arg z$ di $(-\pi, \pi]$, sesuaikan kuadran.
- $z = r(\cos\theta + i\sin\theta) = re^{i\theta}$. Kali: modulus dikali, argumen dijumlah (putar dan regang).
- Polinomial berkoefisien real: akar tidak real muncul berpasangan sekawan dan membentuk faktor $z^2 - 2az + (a^2 + b^2)$.

## Cek pemahaman

1. Sederhanakan $(2 + 3i)(4 - i)$.
2. Sederhanakan $\dfrac{5 + 5i}{2 - i}$.
3. Nyatakan $z = -2 - 2i$ dalam bentuk $re^{i\theta}$ dengan $-\pi < \theta \leq \pi$.
4. Selesaikan $z^2 + 4z + 13 = 0$.
5. Diketahui $2 - i$ adalah akar $z^3 - 5z^2 + 9z - 5 = 0$. Tentukan akar-akar lainnya.

### Kunci jawaban

1. $11 + 10i$. $8 - 2i + 12i - 3i^2 = 8 + 10i + 3$.
2. $1 + 3i$. Kalikan dengan $\frac{2 + i}{2 + i}$: $\frac{10 + 15i + 5i^2}{5} = \frac{5 + 15i}{5}$.
3. $2\sqrt{2}\,e^{-i\,3\pi/4}$. Modulus $\sqrt{8}$; titik di kuadran III dengan sudut acuan $\frac{\pi}{4}$, jadi $\theta = -\pi + \frac{\pi}{4}$.
4. $z = -2 \pm 3i$. $z = \frac{-4 \pm \sqrt{16 - 52}}{2} = \frac{-4 \pm 6i}{2}$.
5. $2 + i$ dan $1$. Faktor $(z - 2)^2 + 1 = z^2 - 4z + 5$, dan $z^3 - 5z^2 + 9z - 5 = (z^2 - 4z + 5)(z - 1)$.
