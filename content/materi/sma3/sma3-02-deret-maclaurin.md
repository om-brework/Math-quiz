---
id: sma3-02-deret-maclaurin
judul: Deret Maclaurin
jenjang: sma3
moe: "H2 Mathematics 9758 · Pure Mathematics · Calculus (Maclaurin Series)"
prasyarat: [sma2-04-turunan, sma1-09-binomial-newton, sma2-09-barisan-deret]
durasi_menit: 75
---

## Kenapa belajar ini?

Kalkulator tidak "tahu" nilai $\sin 0{,}1$ atau $e^{0{,}05}$. Ia menghitungnya dengan menjumlahkan beberapa suku polinomial. Deret Maclaurin adalah cara mengganti fungsi yang rumit dengan polinomial yang mudah dihitung, terutama untuk $x$ yang kecil.

## Analogi

Bayangkan seorang **penjahit kebaya** yang harus meniru bentuk sebuah kebaya, tetapi hanya boleh mengukur **di satu titik**, yaitu di tengah ($x = 0$).

- Ukuran pertama: **posisi** di titik itu, $f(0)$.
- Ukuran kedua: **kemiringan** garis kain di titik itu, $f'(0)$.
- Ukuran ketiga: **seberapa melengkung** kainnya, $f''(0)$.
- Dan seterusnya: perubahan lengkungan, $f'''(0)$, ...

Makin banyak ukuran yang dipakai, makin mirip tiruannya. Namun tiruan itu paling akurat **dekat titik yang diukur**. Makin jauh dari $x = 0$, makin besar kemungkinan meleset. Inilah sifat deret Maclaurin.

## Konsep

### Menurunkan rumus

Misalkan $f(x)$ bisa ditulis sebagai polinomial tak hingga:
$$ f(x) = a_0 + a_1x + a_2x^2 + a_3x^3 + \cdots $$
Kita cocokkan "ukuran" di $x = 0$:

- $x = 0$: $f(0) = a_0$.
- Turunkan sekali: $f'(x) = a_1 + 2a_2x + 3a_3x^2 + \cdots$, jadi $f'(0) = a_1$.
- Turunkan lagi: $f''(x) = 2a_2 + 6a_3x + \cdots$, jadi $f''(0) = 2a_2$, sehingga $a_2 = \frac{f''(0)}{2!}$.
- Sekali lagi: $f'''(0) = 6a_3 = 3!\,a_3$.

Polanya $a_n = \dfrac{f^{(n)}(0)}{n!}$. Jadi **deret Maclaurin**:
$$ f(x) = f(0) + f'(0)\,x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \cdots $$

### Deret standar

Dengan rumus di atas (dan tercantum di daftar rumus MF26):
$$ e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots \quad (\text{semua } x) $$
$$ \sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots \quad (\text{semua } x) $$
$$ \cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots \quad (\text{semua } x) $$
$$ \ln(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots \quad (-1 < x \leq 1) $$
$$ (1 + x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \cdots \quad (|x| < 1) $$

Contoh penurunan: untuk $f(x) = e^x$, semua turunan adalah $e^x$, dan $e^0 = 1$, jadi $a_n = \frac{1}{n!}$. Untuk $\sin x$, turunannya berputar $\sin, \cos, -\sin, -\cos$, sehingga di $x = 0$ nilainya $0, 1, 0, -1, \ldots$ Karena itu $\sin x$ hanya punya pangkat ganjil (fungsi ganjil) dan $\cos x$ hanya pangkat genap.

Untuk $(1 + x)^n$ dengan $n$ bukan bilangan bulat positif, deretnya tak hingga dan **hanya berlaku untuk $|x| < 1$**.

### Memakai deret standar

Ganti $x$ dengan ekspresi lain, misalnya $e^{2x}$: ganti $x$ dengan $2x$. Daerah berlakunya ikut berubah: $\ln(1 + 3x)$ berlaku untuk $-1 < 3x \leq 1$. Untuk hasil kali, kalikan deret dan kumpulkan suku sampai pangkat yang diminta.

### Hampiran untuk $x$ kecil

Jika $x$ kecil (dalam radian), suku pangkat tinggi sangat kecil dan bisa diabaikan:
$$ \sin x \approx x, \qquad \cos x \approx 1 - \frac{x^2}{2}, \qquad \tan x \approx x $$

## Contoh langkah demi langkah

### Contoh 1: Substitusi ke deret standar

**Soal.** Tentukan ekspansi $e^{2x}$ sampai suku $x^3$.

1. **Langkah 1: Pilih deret.** $e^u = 1 + u + \frac{u^2}{2!} + \frac{u^3}{3!} + \cdots$ dengan $u = 2x$.
2. **Langkah 2: Substitusi.** $1 + 2x + \frac{4x^2}{2} + \frac{8x^3}{6}$.
3. **Langkah 3: Sederhanakan.** $1 + 2x + 2x^2 + \frac{4}{3}x^3$.
4. **Cek jawaban.** Dengan rumus Maclaurin: $f^{(n)}(x) = 2^ne^{2x}$, jadi $f'''(0) = 8$ dan koefisien $x^3$ adalah $\frac{8}{3!} = \frac{4}{3}$. Sama.

**Jawaban:** $e^{2x} \approx 1 + 2x + 2x^2 + \frac{4}{3}x^3$.

### Contoh 2: Dengan turunan berulang

**Soal.** $y = e^{\sin x}$. Tunjukkan bahwa $\dfrac{dy}{dx} = y\cos x$, lalu tentukan deret Maclaurin $y$ sampai suku $x^3$.

1. **Langkah 1: Turunan pertama.** Aturan rantai: $\dfrac{dy}{dx} = e^{\sin x}\cos x = y\cos x$.
2. **Langkah 2: Turunan kedua.** Aturan perkalian pada $y\cos x$: $y'' = y'\cos x - y\sin x$.
3. **Langkah 3: Turunan ketiga.** $y''' = y''\cos x - y'\sin x - y'\sin x - y\cos x = y''\cos x - 2y'\sin x - y\cos x$.
4. **Langkah 4: Ukur di $x = 0$.** $y(0) = e^0 = 1$. $y'(0) = 1 \cdot 1 = 1$. $y''(0) = 1 \cdot 1 - 0 = 1$. $y'''(0) = 1 - 0 - 1 = 0$.
5. **Langkah 5: Susun deret.** $y = 1 + x + \frac{1}{2!}x^2 + \frac{0}{3!}x^3 = 1 + x + \frac{x^2}{2}$ (suku $x^3$ bernilai nol).
6. **Cek jawaban.** Cara lain: $\sin x \approx x - \frac{x^3}{6}$, lalu $e^u \approx 1 + u + \frac{u^2}{2} + \frac{u^3}{6}$. Hasilnya $1 + x - \frac{x^3}{6} + \frac{x^2}{2} + \frac{x^3}{6} = 1 + x + \frac{x^2}{2}$. Suku $x^3$ memang saling menghapus.

**Jawaban:** $e^{\sin x} \approx 1 + x + \dfrac{x^2}{2} + 0x^3$.

### Contoh 3: Hasil kali dua deret

**Soal.** Tentukan ekspansi $e^{2x}\ln(1 + x)$ sampai suku $x^3$, dan nyatakan daerah berlakunya.

1. **Langkah 1: Tulis kedua deret.** $e^{2x} = 1 + 2x + 2x^2 + \cdots$ dan $\ln(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots$
2. **Langkah 2: Kalikan, kumpulkan per pangkat.**

   ```
   x   :  1 · x                                  =  x
   x^2 :  1 · (-x^2/2) + 2x · x                  =  (3/2) x^2
   x^3 :  1 · (x^3/3) + 2x · (-x^2/2) + 2x^2 · x =  (1/3 - 1 + 2) x^3 = (4/3) x^3
   ```

3. **Langkah 3: Daerah berlaku.** $e^{2x}$ berlaku untuk semua $x$, $\ln(1 + x)$ untuk $-1 < x \leq 1$. Irisannya $-1 < x \leq 1$.
4. **Cek jawaban.** Untuk $x = 0{,}1$: nilai sebenarnya $e^{0{,}2}\ln 1{,}1 \approx 1{,}2214 \times 0{,}09531 \approx 0{,}11641$. Deret: $0{,}1 + 0{,}015 + 0{,}00133 = 0{,}11633$. Sangat dekat.

**Jawaban:** $x + \dfrac{3}{2}x^2 + \dfrac{4}{3}x^3$, berlaku untuk $-1 < x \leq 1$.

### Contoh 4: Tabungan dengan bunga kontinu

**Soal.** Bu Siti menyimpan Rp10.000.000 di deposito dengan bunga kontinu 5% per tahun. Setelah satu tahun, saldonya $10.000.000\,e^{0{,}05}$. Hampiri saldo itu dengan tiga dan empat suku deret $e^x$.

1. **Langkah 1: Pilih deret.** $e^x = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \cdots$ dengan $x = 0{,}05$ (kecil, jadi deret cepat akurat).
2. **Langkah 2: Tiga suku.** $1 + 0{,}05 + 0{,}00125 = 1{,}05125$. Saldo $\approx$ Rp10.512.500.
3. **Langkah 3: Suku keempat.** $\frac{0{,}05^3}{6} = \frac{0{,}000125}{6} \approx 0{,}0000208$. Jumlah $\approx 1{,}0512708$. Saldo $\approx$ Rp10.512.708.
4. **Cek jawaban.** Kalkulator: $e^{0{,}05} \approx 1{,}0512711$, saldo $\approx$ Rp10.512.711. Tiga suku meleset sekitar Rp211, empat suku hanya sekitar Rp3. Setiap suku tambahan membuat tiruannya jauh lebih mirip.

**Jawaban:** Tiga suku: Rp10.512.500; empat suku: Rp10.512.708 (nilai sebenarnya sekitar Rp10.512.711).

## Kesalahan yang sering terjadi

- **Lupa faktorial.** Menulis koefisien $x^3$ sebagai $f'''(0)$, bukan $\frac{f'''(0)}{3!}$. Ingat penurunan rumus: setiap kali diturunkan, muncul faktor pengali.
- **Substitusi tanpa kurung.** Pada $e^{2x}$, menulis $\frac{2x^2}{2}$ alih-alih $\frac{(2x)^2}{2}$. Seluruh $u = 2x$ harus dipangkatkan.
- **Memakai derajat.** $\sin x \approx x$ hanya berlaku jika $x$ dalam **radian**. $\sin 5^\circ \approx 5$ jelas salah; yang benar $\sin\frac{5\pi}{180} \approx 0{,}0872$.
- **Mengabaikan daerah berlaku.** $(1 + x)^{-1} = 1 - x + x^2 - \cdots$ untuk $x = 2$ memberi $1 - 2 + 4 - \cdots$, tidak menuju $\frac{1}{3}$. Deret binomial hanya sah untuk $|x| < 1$.
- **Kurang suku saat mengalikan.** Untuk koefisien $x^3$ dari hasil kali, semua pasangan pangkat yang jumlahnya 3 harus diambil. Buat tabel seperti Contoh 3.

## Ringkasan

- Deret Maclaurin: $f(x) = \displaystyle\sum \frac{f^{(n)}(0)}{n!}x^n$, didapat dengan mencocokkan nilai dan turunan di $x = 0$.
- Deret standar: $e^x$, $\sin x$, $\cos x$ (semua $x$), $\ln(1 + x)$ ($-1 < x \leq 1$), $(1 + x)^n$ ($|x| < 1$).
- Gunakan substitusi, perkalian, dan turunan implisit (seperti $y' = y\cos x$) untuk fungsi baru.
- Untuk $x$ kecil (radian): $\sin x \approx x$, $\cos x \approx 1 - \frac{x^2}{2}$, $\tan x \approx x$.
- Hampiran paling akurat dekat $x = 0$; selalu sebutkan daerah berlaku.

## Cek pemahaman

1. Tentukan ekspansi $\cos 3x$ sampai suku $x^4$.
2. Tentukan ekspansi $(1 - 2x)^{-1/2}$ sampai suku $x^2$, dan daerah berlakunya.
3. Untuk $x$ kecil, tunjukkan $\dfrac{\cos x}{1 + \sin x} \approx 1 - x + \dfrac{x^2}{2}$.
4. $y = \tan x$. Dengan $\frac{dy}{dx} = 1 + y^2$, tentukan deret Maclaurin $y$ sampai suku $x^3$.
5. Hampiri $\ln 1{,}1$ dengan tiga suku pertama deret $\ln(1 + x)$.

### Kunci jawaban

1. $1 - \dfrac{9x^2}{2} + \dfrac{27x^4}{8}$. Ganti $x$ dengan $3x$: $\frac{9x^2}{2}$ dan $\frac{81x^4}{24}$.
2. $1 + x + \dfrac{3}{2}x^2$, berlaku untuk $|x| < \frac{1}{2}$. Dengan $n = -\frac{1}{2}$, $u = -2x$: $\frac{(-1/2)(-3/2)}{2}(4x^2) = \frac{3}{2}x^2$.
3. $\cos x \approx 1 - \frac{x^2}{2}$, $\frac{1}{1 + \sin x} \approx (1 + x)^{-1} \approx 1 - x + x^2$; hasil kalinya $1 - x + x^2 - \frac{x^2}{2} = 1 - x + \frac{x^2}{2}$.
4. $x + \dfrac{x^3}{3}$. $y'' = 2yy'$, $y''' = 2(y')^2 + 2yy''$; di $x = 0$: $y = 0$, $y' = 1$, $y'' = 0$, $y''' = 2$, jadi koefisien $x^3$ adalah $\frac{2}{3!}$.
5. $\approx 0{,}09533$. $0{,}1 - 0{,}005 + 0{,}000333$; nilai sebenarnya $0{,}09531$.
