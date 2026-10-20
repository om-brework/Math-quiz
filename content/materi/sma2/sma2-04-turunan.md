---
id: sma2-04-turunan
judul: Turunan
jenjang: sma2
moe: "Additional Mathematics · C1 Differentiation and integration"
prasyarat: [smp1-08-fungsi-linear, sma1-09-binomial-newton, sma1-10-eksponen-logaritma, sma2-01-trigonometri-identitas]
durasi_menit: 90
---

## Kenapa belajar ini?

Speedometer motor menunjukkan kecepatan **saat ini**, bukan rata-rata perjalanan. Turunan adalah matematika di balik angka itu: laju perubahan sesaat. Dengan turunan, kita bisa tahu seberapa cepat kopi mendingin, kapan sebuah fungsi naik atau turun, dan di mana titik puncak serta lembahnya.

## Analogi

Bayangkan Budi naik motor di Jalan Bypass Ngurah Rai. Jarak yang sudah ditempuh setelah $t$ detik adalah $s(t)$.

- **Kecepatan rata-rata** dari detik $t$ sampai $t + h$ adalah $\frac{s(t + h) - s(t)}{h}$: jarak dibagi waktu.
- **Kecepatan sesaat** (angka speedometer) didapat dengan membuat selang waktu $h$ makin kecil, mendekati nol.

Turunan adalah "speedometer" untuk fungsi apa pun. Jika speedometer positif, motor maju (fungsi **naik**). Jika nol, motor sesaat berhenti (titik **stasioner**). Turunan kedua seperti membaca apakah motor sedang menambah atau mengurangi kecepatan.

## Konsep

### Gradien kurva dan definisi turunan

Pada grafik $y = f(x)$, kecepatan rata-rata adalah gradien **tali busur** yang menghubungkan $(x, f(x))$ dan $(x + h, f(x + h))$. Saat $h \to 0$, tali busur mendekati **garis singgung**. Gradien garis singgung itulah turunan:

$$
f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}
$$

Menghitung turunan langsung dari definisi ini disebut **turunan dari prinsip pertama**.

### Notasi

Jika $y = f(x)$, turunannya ditulis $\frac{dy}{dx}$, $y'$, atau $f'(x)$. Turunan kedua (turunan dari turunan) ditulis $\frac{d^2y}{dx^2}$ atau $f''(x)$. Notasi $\frac{dy}{dx}$ mengingatkan kita: "perubahan $y$ per perubahan $x$".

### Turunan $x^n$

Untuk $n$ bulat positif, uraian binomial memberi

$$
(x + h)^n = x^n + nx^{n-1}h + \binom{n}{2}x^{n-2}h^2 + \dots + h^n
$$

Kurangi $x^n$, bagi dengan $h$, maka semua suku kecuali $nx^{n-1}$ masih memuat $h$. Saat $h \to 0$, suku-suku itu hilang:

$$
\frac{d}{dx}\left(x^n\right) = nx^{n-1}
$$

Rumus ini juga berlaku untuk $n$ pecahan dan negatif, misalnya $\sqrt{x} = x^{1/2}$ dan $\frac{1}{x} = x^{-1}$. Konstanta pengali ikut, konstanta tunggal turunannya nol, dan turunan jumlah adalah jumlah turunan.

### Turunan $\sin x$, $\cos x$, $\tan x$

Sudut harus dalam **radian**. Dari rumus jumlah:

$$
\frac{\sin(x + h) - \sin x}{h} = \sin x \cdot \frac{\cos h - 1}{h} + \cos x \cdot \frac{\sin h}{h}
$$

Untuk $h$ kecil, $\frac{\sin h}{h} \to 1$ dan $\frac{\cos h - 1}{h} \to 0$. (Cek kalkulator, $h = 0{,}01$: $0{,}99998$ dan $-0{,}005$.) Jadi

$$
\frac{d}{dx}\sin x = \cos x, \qquad \frac{d}{dx}\cos x = -\sin x, \qquad \frac{d}{dx}\tan x = \sec^2 x
$$

Turunan $\cos x$ diperoleh dengan cara serupa. Turunan $\tan x$ diturunkan dengan aturan pembagian di bawah.

### Turunan $e^x$ dan $\ln x$

Bilangan $e$ istimewa karena gradien $y = e^x$ di $x = 0$ tepat 1, yaitu $\lim_{h \to 0}\frac{e^h - 1}{h} = 1$. Maka

$$
\frac{e^{x+h} - e^x}{h} = e^x \cdot \frac{e^h - 1}{h} \to e^x, \quad \text{jadi} \quad \frac{d}{dx}e^x = e^x
$$

Untuk $y = \ln x$: $x = e^y$, sehingga $\frac{dx}{dy} = e^y = x$. Balik perbandingannya:

$$
\frac{d}{dx}\ln x = \frac{1}{x}, \quad x > 0
$$

### Aturan rantai

Jika $y$ bergantung pada $u$, dan $u$ bergantung pada $x$:

$$
\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}
$$

Dalam analogi motor: bensin terpakai bergantung pada jarak, dan jarak bergantung pada waktu. Laju bensin per jam = (liter per km) $\times$ (km per jam). Contoh: $\frac{d}{dx}(ax + b)^n = n(ax + b)^{n-1} \cdot a$, dan $\frac{d}{dx}e^{f(x)} = f'(x)e^{f(x)}$.

### Aturan perkalian dan pembagian

Bayangkan persegi panjang bersisi $u$ dan $v$. Jika sisi bertambah $\Delta u$ dan $\Delta v$, luasnya bertambah $u\,\Delta v + v\,\Delta u + \Delta u\,\Delta v$. Bagi dengan $\Delta x$ dan buat $\Delta x \to 0$; suku terakhir hilang. Hasilnya:

$$
\frac{d}{dx}(uv) = u\frac{dv}{dx} + v\frac{du}{dx}, \qquad \frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2}
$$

Contoh: $\tan x = \frac{\sin x}{\cos x}$, jadi turunannya $\frac{\cos x \cos x - \sin x(-\sin x)}{\cos^2 x} = \frac{1}{\cos^2 x} = \sec^2 x$.

### Fungsi naik, fungsi turun, dan titik stasioner

- $f'(x) > 0$ pada suatu selang: $f$ **naik** (motor maju).
- $f'(x) < 0$: $f$ **turun**.
- $f'(x) = 0$: titik **stasioner** (motor sesaat berhenti).

**Uji turunan kedua** di titik stasioner $x = a$:

- $f''(a) > 0$: grafik melengkung ke atas, jadi **minimum**.
- $f''(a) < 0$: grafik melengkung ke bawah, jadi **maksimum**.
- $f''(a) = 0$: uji gagal. Periksa tanda $f'$ di kiri dan kanan $a$. Contoh: $y = x^4$ punya $f''(0) = 0$, tetapi $x = 0$ minimum.

## Contoh langkah demi langkah

### Contoh 1: Turunan dari prinsip pertama

**Soal.** Dengan prinsip pertama, tentukan turunan $f(x) = 3x^2 - x$.

1. **Langkah 1: Hitung $f(x + h)$.** $3(x + h)^2 - (x + h) = 3x^2 + 6xh + 3h^2 - x - h$.
2. **Langkah 2: Kurangi $f(x)$.** $f(x + h) - f(x) = 6xh + 3h^2 - h$.
3. **Langkah 3: Bagi dengan $h$.** $\frac{f(x + h) - f(x)}{h} = 6x + 3h - 1$.
4. **Langkah 4: Ambil limit $h \to 0$.** $f'(x) = 6x - 1$.
5. **Cek jawaban.** Dengan aturan pangkat: $3 \cdot 2x - 1 = 6x - 1$. Cocok.

**Jawaban:** $f'(x) = 6x - 1$.

### Contoh 2: Aturan pangkat dan aturan rantai

**Soal.** Turunkan (a) $y = 4x^3 - \dfrac{2}{x} + 5\sqrt{x}$; (b) $y = (2x + 1)^5$; (c) $y = \ln(5x - 2)$.

1. **Langkah 1: Tulis ulang (a) sebagai pangkat.** $y = 4x^3 - 2x^{-1} + 5x^{1/2}$.
2. **Langkah 2: Turunkan (a).** $\frac{dy}{dx} = 12x^2 + 2x^{-2} + \frac{5}{2}x^{-1/2} = 12x^2 + \frac{2}{x^2} + \frac{5}{2\sqrt{x}}$.
3. **Langkah 3: Kenali rantai pada (b).** Misalkan $u = 2x + 1$, $y = u^5$. Maka $\frac{dy}{du} = 5u^4$ dan $\frac{du}{dx} = 2$, jadi $\frac{dy}{dx} = 10(2x + 1)^4$.
4. **Langkah 4: Kenali rantai pada (c).** Misalkan $u = 5x - 2$, $y = \ln u$. Maka $\frac{dy}{dx} = \frac{1}{u} \cdot 5 = \frac{5}{5x - 2}$.
5. **Cek jawaban.** Uji (b) di $x = 0$ secara numerik: $\frac{(1{,}002)^5 - (0{,}998)^5}{0{,}002} = 10{,}0001$, dan rumus memberi $10(1)^4 = 10$. Cocok.

**Jawaban:** (a) $12x^2 + \frac{2}{x^2} + \frac{5}{2\sqrt{x}}$; (b) $10(2x + 1)^4$; (c) $\frac{5}{5x - 2}$.

### Contoh 3: Aturan perkalian dan pembagian

**Soal.** Turunkan (a) $y = x^2 e^{3x}$; (b) $y = \dfrac{\ln x}{x}$.

1. **Langkah 1: Pilih aturan (a).** Perkalian: $u = x^2$, $v = e^{3x}$. Maka $u' = 2x$ dan $v' = 3e^{3x}$ (rantai).
2. **Langkah 2: Terapkan (a).** $y' = x^2 \cdot 3e^{3x} + e^{3x} \cdot 2x = xe^{3x}(3x + 2)$.
3. **Langkah 3: Pilih aturan (b).** Pembagian: $u = \ln x$, $v = x$. Maka $u' = \frac{1}{x}$ dan $v' = 1$.
4. **Langkah 4: Terapkan (b).** $y' = \frac{x \cdot \frac{1}{x} - \ln x \cdot 1}{x^2} = \frac{1 - \ln x}{x^2}$.
5. **Cek jawaban.** Uji (b) di $x = 1$: rumus memberi $\frac{1 - 0}{1} = 1$. Numerik, dengan $g(x) = \frac{\ln x}{x}$: $\frac{g(1{,}001) - g(0{,}999)}{0{,}002} \approx 1{,}000$. Cocok.

**Jawaban:** (a) $xe^{3x}(3x + 2)$; (b) $\frac{1 - \ln x}{x^2}$.

### Contoh 4: Naik, turun, dan titik stasioner

**Soal.** Untuk $f(x) = x^3 - 6x^2 + 9x + 1$, tentukan titik stasioner beserta jenisnya, serta selang tempat $f$ naik dan turun.

1. **Langkah 1: Turunkan.** $f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)$.
2. **Langkah 2: Cari titik stasioner.** $f'(x) = 0$ saat $x = 1$ atau $x = 3$. $f(1) = 1 - 6 + 9 + 1 = 5$ dan $f(3) = 27 - 54 + 27 + 1 = 1$.
3. **Langkah 3: Uji turunan kedua.** $f''(x) = 6x - 12$. $f''(1) = -6 < 0$, jadi $(1, 5)$ maksimum. $f''(3) = 6 > 0$, jadi $(3, 1)$ minimum.
4. **Langkah 4: Tentukan tanda $f'$.** $3(x - 1)(x - 3)$ positif di luar akar dan negatif di antara akar.

```
x        x < 1     x = 1     1 < x < 3     x = 3     x > 3
f'(x)      +         0           -           0         +
f        naik      maks        turun        min       naik
```

5. **Cek jawaban.** $f'(2) = 12 - 24 + 9 = -3 < 0$, jadi memang turun di antara 1 dan 3. $f(2) = 8 - 24 + 18 + 1 = 3$, berada di antara 5 dan 1. Cocok.

**Jawaban:** maksimum $(1, 5)$, minimum $(3, 1)$; naik untuk $x < 1$ atau $x > 3$, turun untuk $1 < x < 3$.

### Contoh 5: Soal cerita, kopi Kintamani mendingin

**Soal.** Suhu secangkir kopi Kintamani $t$ menit setelah diseduh adalah $T = 25 + 70e^{-0{,}1t}$ °C. (a) Tentukan laju perubahan suhu saat $t = 10$. (b) Kapan suhu turun dengan laju 3,5 °C per menit?

1. **Langkah 1: Pahami arti turunan.** Laju perubahan suhu adalah $\frac{dT}{dt}$, seperti speedometer untuk suhu.
2. **Langkah 2: Turunkan dengan rantai.** $\frac{dT}{dt} = 70 \cdot (-0{,}1)e^{-0{,}1t} = -7e^{-0{,}1t}$.
3. **Langkah 3: Jawab (a).** $t = 10$: $-7e^{-1} = -7 \times 0{,}3679 \approx -2{,}58$ °C per menit. Tanda negatif berarti suhu turun.
4. **Langkah 4: Jawab (b).** $-7e^{-0{,}1t} = -3{,}5 \Rightarrow e^{-0{,}1t} = 0{,}5 \Rightarrow t = 10\ln 2 \approx 6{,}93$ menit.
5. **Cek jawaban.** Numerik untuk (a): $\frac{T(10{,}01) - T(9{,}99)}{0{,}02} \approx -2{,}575$. Untuk (b): $-7e^{-0{,}693} = -7 \times 0{,}5 = -3{,}5$. Cocok.

**Jawaban:** (a) sekitar $-2{,}58$ °C per menit (turun 2,58 °C per menit); (b) sekitar 6,93 menit setelah diseduh.

## Kesalahan yang sering terjadi

- **Lupa mengalikan turunan bagian dalam.** Menulis $\frac{d}{dx}(2x + 1)^5 = 5(2x + 1)^4$. Aturan rantai menuntut dikali $2$: hasilnya $10(2x + 1)^4$.
- **Menurunkan perkalian per faktor.** Menulis $\frac{d}{dx}(x^2e^{3x}) = 2x \cdot 3e^{3x}$. Pakai aturan perkalian $uv' + vu'$.
- **Urutan pembilang aturan pembagian terbalik.** Yang benar $vu' - uv'$, bukan $uv' - vu'$. Tanda hasil akan salah jika tertukar.
- **Memakai derajat untuk turunan trigonometri.** $\frac{d}{dx}\sin x = \cos x$ hanya berlaku jika $x$ dalam radian.
- **Menganggap $f''(a) = 0$ berarti titik belok.** Uji turunan kedua gagal di sini; periksa tanda $f'$ di sekitar $a$.

## Ringkasan

- $f'(x) = \lim_{h \to 0}\frac{f(x + h) - f(x)}{h}$: gradien garis singgung, laju perubahan sesaat.
- $\frac{d}{dx}x^n = nx^{n-1}$, $\frac{d}{dx}\sin x = \cos x$, $\frac{d}{dx}\cos x = -\sin x$, $\frac{d}{dx}\tan x = \sec^2 x$, $\frac{d}{dx}e^x = e^x$, $\frac{d}{dx}\ln x = \frac{1}{x}$.
- Rantai: $\frac{dy}{dx} = \frac{dy}{du}\cdot\frac{du}{dx}$. Perkalian: $uv' + vu'$. Pembagian: $\frac{vu' - uv'}{v^2}$.
- $f' > 0$ naik, $f' < 0$ turun, $f' = 0$ stasioner.
- Uji turunan kedua: $f'' > 0$ minimum, $f'' < 0$ maksimum, $f'' = 0$ periksa tanda $f'$.

## Cek pemahaman

1. Turunkan $y = 5x^4 - 3x + \dfrac{7}{x^2}$.
2. Turunkan $y = (3x - 2)^4$.
3. Turunkan $y = x\cos x$.
4. Turunkan $y = \dfrac{e^{2x}}{x + 1}$.
5. Tentukan titik stasioner $y = 2x^3 + 3x^2 - 12x$ beserta jenisnya, dan selang tempat $y$ turun.

### Kunci jawaban

1. $20x^3 - 3 - \dfrac{14}{x^3}$, karena $7x^{-2}$ diturunkan menjadi $-14x^{-3}$.
2. $12(3x - 2)^3$, karena $4(3x - 2)^3 \times 3$.
3. $\cos x - x\sin x$, dengan aturan perkalian: $1 \cdot \cos x + x(-\sin x)$.
4. $\dfrac{e^{2x}(2x + 1)}{(x + 1)^2}$, karena $\frac{(x + 1)2e^{2x} - e^{2x}}{(x + 1)^2}$ dan $2(x + 1) - 1 = 2x + 1$.
5. $y' = 6(x + 2)(x - 1)$. Maksimum $(-2, 20)$ karena $y'' = 12x + 6 = -18 < 0$; minimum $(1, -7)$ karena $y'' = 18 > 0$; turun untuk $-2 < x < 1$.
