---
id: sma2-01-trigonometri-identitas
judul: Fungsi, Identitas, dan Persamaan Trigonometri
jenjang: sma2
moe: "Additional Mathematics · G1 Trigonometric functions, identities and equations"
prasyarat: [smp3-07-trigonometri-lanjut, sma1-03-busur-juring-radian, sma1-07-bentuk-akar]
durasi_menit: 90
---

## Kenapa belajar ini?

Pasang surut air laut di Pelabuhan Benoa, arus listrik PLN, dan gelombang suara semuanya berulang secara teratur. Fungsi trigonometri adalah bahasa untuk gerak berulang seperti itu. Identitas dan persamaan trigonometri membuat kita bisa menyederhanakan model dan mencari kapan sesuatu terjadi.

## Analogi

Bayangkan sebuah **bianglala** (kincir ria) berjari-jari 1 dengan pusat di titik asal. Sebuah kursi mulai di posisi paling kanan, lalu berputar berlawanan arah jarum jam sejauh sudut $\theta$.

- Posisi mendatar kursi adalah $\cos\theta$.
- Ketinggian kursi (di atas atau di bawah pusat) adalah $\sin\theta$.

Karena bianglala terus berputar, sudut bisa lebih dari $90°$, lebih dari $360°$, bahkan negatif (berputar searah jarum jam). Semua sifat trigonometri di materi ini bisa dibaca dari bianglala tersebut.

## Konsep

### Enam fungsi untuk sudut sembarang

Untuk titik $(\cos\theta, \sin\theta)$ pada lingkaran satuan:

$$
\tan\theta = \frac{\sin\theta}{\cos\theta}, \quad \sec\theta = \frac{1}{\cos\theta}, \quad \csc\theta = \frac{1}{\sin\theta}, \quad \cot\theta = \frac{1}{\tan\theta}
$$

Tanda fungsi mengikuti kuadran posisi kursi:

```
Kuadran II  (90°-180°):  sin positif   | Kuadran I  (0°-90°):    semua positif
Kuadran III (180°-270°): tan positif   | Kuadran IV (270°-360°): cos positif
```

**Sudut acuan** adalah sudut lancip antara jari-jari kursi dan sumbu $x$. Nilai fungsi pada sudut $\theta$ sama dengan nilai pada sudut acuan, dengan tanda sesuai kuadran. Contoh: $\sin 150° = +\sin 30° = \frac{1}{2}$, $\cos 225° = -\cos 45° = -\frac{\sqrt{2}}{2}$.

### Nilai eksak sudut istimewa

```
sudut       0°     30°      45°      60°      90°
radian      0      π/6      π/4      π/3      π/2
sin         0      1/2      √2/2     √3/2     1
cos         1      √3/2     √2/2     1/2      0
tan         0      √3/3     1        √3       tidak terdefinisi
```

### Grafik, amplitudo, dan periode

Saat bianglala berputar, ketinggian kursi naik-turun membentuk grafik $y = \sin x$. Grafik ini berulang setiap $360°$ ($2\pi$ radian), dengan nilai antara $-1$ dan $1$. Grafik $y = \cos x$ sama bentuknya, tetapi bergeser $90°$. Grafik $y = \tan x$ berulang setiap $180°$ dan punya asimtot di $x = 90°, 270°, \dots$

Untuk $y = a\sin bx + c$ (atau $\cos$), dengan $b > 0$:

- **Amplitudo** $|a|$: jari-jari bianglala.
- **Periode** $\frac{360°}{b}$: waktu satu putaran penuh.
- $c$ menggeser grafik naik atau turun: tinggi poros bianglala.

Untuk $y = a\tan bx$, periodenya $\frac{180°}{b}$.

### Identitas dasar

Kursi selalu berjarak 1 dari pusat. Dengan Pythagoras:

$$
\sin^2\theta + \cos^2\theta = 1
$$

Bagi dengan $\cos^2\theta$, lalu dengan $\sin^2\theta$:

$$
1 + \tan^2\theta = \sec^2\theta, \qquad 1 + \cot^2\theta = \csc^2\theta
$$

### Rumus jumlah dan selisih

Ambil dua kursi: $P(\cos A, \sin A)$ dan $Q(\cos B, \sin B)$. Kuadrat jarak $PQ$ dengan rumus jarak:

$$
PQ^2 = (\cos A - \cos B)^2 + (\sin A - \sin B)^2 = 2 - 2(\cos A\cos B + \sin A\sin B)
$$

Sekarang putar bianglala sejauh $-B$ sehingga $Q$ pindah ke $(1, 0)$ dan $P$ ke $(\cos(A - B), \sin(A - B))$. Jarak tidak berubah, jadi $PQ^2 = 2 - 2\cos(A - B)$. Samakan kedua bentuk:

$$
\cos(A - B) = \cos A\cos B + \sin A\sin B
$$

Dari sini (ganti $B$ dengan $-B$, atau pakai $\sin\theta = \cos(90° - \theta)$) diperoleh:

$$
\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B, \qquad \sin(A \pm B) = \sin A\cos B \pm \cos A\sin B
$$

$$
\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A\tan B}
$$

### Rumus sudut ganda

Ambil $B = A$:

$$
\sin 2A = 2\sin A\cos A, \qquad \cos 2A = \cos^2 A - \sin^2 A = 2\cos^2 A - 1 = 1 - 2\sin^2 A
$$

$$
\tan 2A = \frac{2\tan A}{1 - \tan^2 A}
$$

### Bentuk $R\cos(\theta \pm \alpha)$

Jumlah dua gelombang $a\cos\theta + b\sin\theta$ (dengan $a, b > 0$) ternyata satu gelombang saja, seperti satu bianglala yang lebih besar dan mulai dari posisi lain. Uraikan:

$$
R\cos(\theta - \alpha) = R\cos\alpha\cos\theta + R\sin\alpha\sin\theta
$$

Samakan koefisien: $R\cos\alpha = a$ dan $R\sin\alpha = b$. Maka

$$
a\cos\theta + b\sin\theta = R\cos(\theta - \alpha), \quad R = \sqrt{a^2 + b^2}, \quad \tan\alpha = \frac{b}{a}
$$

Nilai maksimumnya $R$ dan minimumnya $-R$. Dengan cara yang sama, kita bisa menulis bentuk $R\cos(\theta + \alpha)$ atau $R\sin(\theta \pm \alpha)$.

### Persamaan dan pembuktian identitas

**Menyelesaikan persamaan:** ubah ke satu fungsi (pakai identitas), cari sudut acuan, tentukan kuadran yang sesuai tanda, lalu tulis semua jawaban dalam selang yang diminta.

**Membuktikan identitas:** mulai dari ruas yang lebih rumit, ubah langkah demi langkah dengan identitas yang sudah diketahui sampai sama dengan ruas lain. Jangan memindahkan suku antar ruas seperti pada persamaan.

## Contoh langkah demi langkah

### Contoh 1: Sudut tumpul dan sudut ganda

**Soal.** Diketahui $\sin A = \frac{3}{5}$ dan $A$ sudut tumpul. Tentukan $\cos A$, $\tan A$, dan $\sin 2A$.

1. **Langkah 1: Tentukan kuadran.** Sudut tumpul ada di kuadran II, tempat hanya $\sin$ positif.
2. **Langkah 2: Cari $\cos A$.** $\cos^2 A = 1 - \frac{9}{25} = \frac{16}{25}$. Di kuadran II, $\cos A = -\frac{4}{5}$.
3. **Langkah 3: Cari $\tan A$.** $\tan A = \frac{3/5}{-4/5} = -\frac{3}{4}$.
4. **Langkah 4: Pakai rumus sudut ganda.** $\sin 2A = 2 \cdot \frac{3}{5} \cdot \left(-\frac{4}{5}\right) = -\frac{24}{25}$.
5. **Cek jawaban.** $\cos 2A = 1 - 2\sin^2 A = \frac{7}{25}$. Lalu $\left(-\frac{24}{25}\right)^2 + \left(\frac{7}{25}\right)^2 = \frac{576 + 49}{625} = 1$. Cocok.

**Jawaban:** $\cos A = -\frac{4}{5}$, $\tan A = -\frac{3}{4}$, $\sin 2A = -\frac{24}{25}$.

### Contoh 2: Nilai eksak dengan rumus jumlah

**Soal.** Tentukan nilai eksak $\sin 75°$.

1. **Langkah 1: Pecah sudut menjadi sudut istimewa.** $75° = 45° + 30°$.
2. **Langkah 2: Pakai rumus.** $\sin 75° = \sin 45°\cos 30° + \cos 45°\sin 30°$.
3. **Langkah 3: Substitusi.** $\frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2} \cdot \frac{1}{2} = \frac{\sqrt{6} + \sqrt{2}}{4}$.
4. **Cek jawaban.** $\frac{2{,}4495 + 1{,}4142}{4} = 0{,}9659$, dan kalkulator memberi $\sin 75° = 0{,}9659$. Cocok.

**Jawaban:** $\dfrac{\sqrt{6} + \sqrt{2}}{4}$.

### Contoh 3: Membuktikan identitas

**Soal.** Buktikan $\dfrac{1 - \cos 2\theta}{\sin 2\theta} = \tan\theta$.

1. **Langkah 1: Pilih ruas yang rumit.** Mulai dari ruas kiri.
2. **Langkah 2: Ganti sudut ganda.** Pilih $\cos 2\theta = 1 - 2\sin^2\theta$ agar angka 1 hilang: pembilang $= 2\sin^2\theta$. Penyebut $= 2\sin\theta\cos\theta$.
3. **Langkah 3: Sederhanakan.** $\dfrac{2\sin^2\theta}{2\sin\theta\cos\theta} = \dfrac{\sin\theta}{\cos\theta} = \tan\theta$ = ruas kanan. Terbukti.
4. **Cek jawaban.** Uji $\theta = 30°$: kiri $\frac{1 - 0{,}5}{0{,}866} = 0{,}577$; kanan $\tan 30° = 0{,}577$. Cocok.

### Contoh 4: Persamaan trigonometri

**Soal.** Selesaikan $2\sin^2 x - \cos x - 1 = 0$ untuk $0° \le x \le 360°$.

1. **Langkah 1: Ubah ke satu fungsi.** $\sin^2 x = 1 - \cos^2 x$, jadi $2 - 2\cos^2 x - \cos x - 1 = 0$, atau $2\cos^2 x + \cos x - 1 = 0$.
2. **Langkah 2: Faktorkan.** $(2\cos x - 1)(\cos x + 1) = 0$, jadi $\cos x = \frac{1}{2}$ atau $\cos x = -1$.
3. **Langkah 3: Selesaikan $\cos x = \frac{1}{2}$.** Sudut acuan $60°$. $\cos$ positif di kuadran I dan IV: $x = 60°$ dan $x = 360° - 60° = 300°$.
4. **Langkah 4: Selesaikan $\cos x = -1$.** Kursi di posisi paling kiri: $x = 180°$.
5. **Cek jawaban.** $x = 60°$: $2 \cdot \frac{3}{4} - \frac{1}{2} - 1 = 0$. $x = 180°$: $0 + 1 - 1 = 0$. $x = 300°$ sama dengan $60°$ karena $\sin^2$ dan $\cos$ sama. Cocok.

**Jawaban:** $x = 60°, 180°, 300°$.

### Contoh 5: Soal cerita, pasang surut di Benoa

**Soal.** Kedalaman air di dermaga $t$ jam setelah tengah malam dimodelkan $d = 10 + 3\cos(30t)° + 4\sin(30t)°$ meter. Tentukan kedalaman maksimum dan minimum, periodenya, dan kapan pertama kali kedalaman maksimum tercapai.

1. **Langkah 1: Ubah ke bentuk $R\cos(\theta - \alpha)$.** Dengan $\theta = 30t$: $R = \sqrt{3^2 + 4^2} = 5$ dan $\tan\alpha = \frac{4}{3}$, jadi $\alpha = 53{,}13°$.
2. **Langkah 2: Tulis model baru.** $d = 10 + 5\cos(30t - 53{,}13)°$.
3. **Langkah 3: Baca maksimum dan minimum.** $\cos$ bernilai antara $-1$ dan $1$, jadi $d$ antara $10 - 5 = 5$ m dan $10 + 5 = 15$ m.
4. **Langkah 4: Hitung periode.** $\frac{360°}{30} = 12$ jam.
5. **Langkah 5: Cari waktu maksimum.** Maksimum saat $30t - 53{,}13 = 0$, jadi $t = 1{,}771$ jam, sekitar 1 jam 46 menit, yaitu pukul 01.46.
6. **Cek jawaban.** Saat $30t = 53{,}13°$: $\cos = 0{,}6$ dan $\sin = 0{,}8$, jadi $d = 10 + 1{,}8 + 3{,}2 = 15$. Cocok.

**Jawaban:** maksimum 15 m (pertama kali sekitar pukul 01.46), minimum 5 m, periode 12 jam.

## Kesalahan yang sering terjadi

- **Lupa tanda kuadran.** Menulis $\cos A = \frac{4}{5}$ untuk $A$ tumpul. Di kuadran II, $\cos$ negatif.
- **Memecah fungsi seperti perkalian.** Menulis $\sin(A + B) = \sin A + \sin B$. Uji $A = B = 45°$: kiri $\sin 90° = 1$, kanan $\sqrt{2}$. Pakai rumus jumlah.
- **Membagi dengan fungsi trigonometri.** Dari $\sin 2x = \cos x$ membagi dengan $\cos x$ menghilangkan jawaban $\cos x = 0$. Pindahkan ke satu ruas lalu faktorkan.
- **Jawaban tidak lengkap.** Hanya menulis sudut acuan. Selalu cek semua kuadran dengan tanda yang benar di seluruh selang.
- **Mode kalkulator salah.** Soal dalam derajat dihitung dalam radian, atau sebaliknya.

## Ringkasan

- Titik pada lingkaran satuan adalah $(\cos\theta, \sin\theta)$; tanda fungsi mengikuti kuadran, nilai mengikuti sudut acuan.
- $y = a\sin bx + c$: amplitudo $|a|$, periode $\frac{360°}{b}$.
- $\sin^2\theta + \cos^2\theta = 1$, $1 + \tan^2\theta = \sec^2\theta$, $1 + \cot^2\theta = \csc^2\theta$.
- Rumus jumlah/selisih dan sudut ganda; $\cos 2A$ punya tiga bentuk.
- $a\cos\theta + b\sin\theta = R\cos(\theta - \alpha)$ dengan $R = \sqrt{a^2 + b^2}$, $\tan\alpha = \frac{b}{a}$.
- Persamaan: satu fungsi, sudut acuan, kuadran, semua jawaban dalam selang.

## Cek pemahaman

1. (a) Tentukan nilai eksak $\cos 330°$. (b) Tentukan amplitudo dan periode $y = 3\sin 2x + 1$.
2. Diketahui $\tan A = \frac{5}{12}$ dan $A$ di kuadran III. Tentukan $\sin A$ dan $\cos 2A$.
3. Buktikan $(\sin\theta + \cos\theta)^2 = 1 + \sin 2\theta$.
4. Selesaikan $\sin 2x = \cos x$ untuk $0° \le x \le 360°$.
5. Nyatakan $\sqrt{3}\sin\theta + \cos\theta$ dalam bentuk $R\sin(\theta + \alpha)$, lalu tentukan nilai maksimumnya dan $\theta$ ($0° \le \theta \le 360°$) saat maksimum.

### Kunci jawaban

1. (a) $\frac{\sqrt{3}}{2}$, karena sudut acuan $30°$ di kuadran IV ($\cos$ positif). (b) Amplitudo 3, periode $\frac{360°}{2} = 180°$.
2. $\sin A = -\frac{5}{13}$ (sisi miring 13, $\sin$ negatif di kuadran III); $\cos 2A = 1 - 2\cdot\frac{25}{169} = \frac{119}{169}$.
3. Ruas kiri $= \sin^2\theta + 2\sin\theta\cos\theta + \cos^2\theta = 1 + \sin 2\theta$.
4. $30°, 90°, 150°, 270°$, karena $\cos x(2\sin x - 1) = 0$: $\cos x = 0$ atau $\sin x = \frac{1}{2}$.
5. $2\sin(\theta + 30°)$, karena $R\cos\alpha = \sqrt{3}$, $R\sin\alpha = 1$, $R = 2$; maksimum 2 saat $\theta + 30° = 90°$, yaitu $\theta = 60°$.
