---
id: sma2-06-integral
judul: Integral
jenjang: sma2
moe: "Additional Mathematics 4049 · Calculus · Integration"
prasyarat: [sma2-04-turunan]
durasi_menit: 80
---

## Kenapa belajar ini?

Turunan menjawab "seberapa cepat sesuatu berubah". Integral menjawab kebalikannya: "kalau lajunya diketahui, berapa totalnya?". Dari catatan kecepatan motor, kita bisa menghitung jarak tempuh. Dari rumus kurva, kita bisa menghitung luas lahan yang batasnya melengkung.

## Analogi

Bayangkan sebuah motor ojek yang **odometernya rusak**, tetapi **spidometernya** merekam kecepatan setiap detik.

- Turunan itu seperti membaca spidometer dari catatan jarak: jarak → kecepatan.
- Integral itu kebalikannya: dari catatan kecepatan, kita **menyusun ulang** jarak yang ditempuh.

Caranya, bagi perjalanan menjadi potongan waktu yang sangat pendek. Di tiap potongan, jarak ≈ kecepatan × waktu. Jumlahkan semua potongan. Di grafik kecepatan, setiap potongan adalah **pita tipis** dengan luas = tinggi × lebar. Jadi **jarak = luas di bawah grafik kecepatan**.

Kalau motor **mundur**, kecepatannya negatif dan pitanya berada di bawah sumbu. Pita itu mengurangi posisi akhir, tetapi tetap menambah jarak yang ditempuh. Gagasan ini dipakai lagi saat menghitung luas dan gerak lurus.

## Konsep

### Integral sebagai kebalikan turunan

$F(x)$ disebut **antiturunan** dari $f(x)$ jika $F'(x) = f(x)$. Karena turunan konstanta adalah nol, antiturunan selalu memuat konstanta sembarang $C$:
$$ \int f(x)\,dx = F(x) + C $$

### Rumus dasar

Setiap rumus didapat dengan membalik rumus turunan:

```
Turunan                  Integral
d/dx [x^(n+1)] = (n+1)x^n   ->  ∫ x^n dx   = x^(n+1)/(n+1) + C,  n ≠ -1
d/dx [-cos x]  = sin x      ->  ∫ sin x dx = -cos x + C
d/dx [sin x]   = cos x      ->  ∫ cos x dx = sin x + C
d/dx [tan x]   = sec² x     ->  ∫ sec² x dx = tan x + C
d/dx [e^x]     = e^x        ->  ∫ e^x dx   = e^x + C
```

Kasus $n = -1$ dikecualikan karena penyebutnya nol. Integral $\int \frac{1}{x}\,dx$ bernilai $\ln|x| + C$, kebalikan dari turunan $\ln x$.

### Bentuk $(ax + b)$

Dengan aturan rantai, $\dfrac{d}{dx}(ax + b)^{n+1} = a(n+1)(ax + b)^n$. Ada faktor $a$ tambahan, jadi saat membalik kita **membagi dengan $a$**:
$$ \int (ax+b)^n\,dx = \frac{(ax+b)^{n+1}}{a(n+1)} + C, \quad n \neq -1 $$
$$ \int \sin(ax+b)\,dx = -\frac{1}{a}\cos(ax+b) + C, \qquad \int \cos(ax+b)\,dx = \frac{1}{a}\sin(ax+b) + C $$
$$ \int \sec^2(ax+b)\,dx = \frac{1}{a}\tan(ax+b) + C, \qquad \int e^{ax+b}\,dx = \frac{1}{a}e^{ax+b} + C $$

### Integral tentu

Jika $F'(x) = f(x)$, maka
$$ \int_a^b f(x)\,dx = \big[F(x)\big]_a^b = F(b) - F(a) $$
Konstanta $C$ saling menghapus, jadi tidak perlu ditulis. Untuk $f(x) \geq 0$, nilai ini sama dengan luas di bawah kurva dari $x = a$ sampai $x = b$.

### Luas di bawah sumbu $x$

Jika kurva berada **di bawah** sumbu $x$, integral tentunya **negatif** (seperti motor mundur). Luas selalu positif, jadi:

1. Cari titik potong kurva dengan sumbu $x$.
2. Integralkan tiap bagian terpisah.
3. Ambil nilai mutlak setiap bagian, lalu jumlahkan.

### Perpindahan, kecepatan, percepatan

Untuk benda yang bergerak lurus dengan posisi $s$, kecepatan $v$, dan percepatan $a$:
$$ v = \frac{ds}{dt}, \quad a = \frac{dv}{dt} \qquad\Longleftrightarrow\qquad v = \int a\,dt, \quad s = \int v\,dt $$

- **Perpindahan** dari $t_1$ ke $t_2$: $\displaystyle\int_{t_1}^{t_2} v\,dt$ (boleh negatif).
- **Jarak tempuh**: jumlah nilai mutlak tiap bagian, dipisah di saat $v = 0$ (benda berbalik arah).

## Contoh langkah demi langkah

### Contoh 1: Integral pangkat

**Soal.** Tentukan $\displaystyle\int \left(6x^2 + \frac{4}{x^3} + 3\sqrt{x}\right) dx$.

1. **Langkah 1: Tulis sebagai pangkat.** $6x^2 + 4x^{-3} + 3x^{1/2}$.
2. **Langkah 2: Integralkan suku per suku.** Naikkan pangkat satu, lalu bagi dengan pangkat baru:
$$ \frac{6x^3}{3} + \frac{4x^{-2}}{-2} + \frac{3x^{3/2}}{3/2} = 2x^3 - 2x^{-2} + 2x^{3/2} $$
3. **Langkah 3: Tambahkan $C$.** Hasil: $2x^3 - \dfrac{2}{x^2} + 2x^{3/2} + C$.
4. **Cek jawaban.** Turunkan hasilnya: $6x^2 + 4x^{-3} + 3x^{1/2}$. Sama dengan soal.

**Jawaban:** $2x^3 - \dfrac{2}{x^2} + 2x\sqrt{x} + C$.

### Contoh 2: Integral tentu bentuk $(ax + b)$

**Soal.** Hitung $\displaystyle\int_0^1 (2x+1)^3\,dx$.

1. **Langkah 1: Kenali bentuknya.** $a = 2$, $b = 1$, $n = 3$.
2. **Langkah 2: Antiturunan.** $\dfrac{(2x+1)^4}{2 \times 4} = \dfrac{(2x+1)^4}{8}$.
3. **Langkah 3: Masukkan batas.** $\dfrac{3^4}{8} - \dfrac{1^4}{8} = \dfrac{81 - 1}{8} = 10$.
4. **Cek jawaban.** Jabarkan: $(2x+1)^3 = 8x^3 + 12x^2 + 6x + 1$. Integralnya dari 0 sampai 1: $2 + 4 + 3 + 1 = 10$. Sama.

**Jawaban:** $10$.

### Contoh 3: Luas yang sebagian di bawah sumbu $x$

**Soal.** Hitung luas daerah antara kurva $y = x^2 - 2x$ dan sumbu $x$, dari $x = 0$ sampai $x = 3$.

1. **Langkah 1: Cari titik potong.** $x^2 - 2x = x(x - 2) = 0$, jadi $x = 0$ atau $x = 2$. Di antara 0 dan 2 kurva di bawah sumbu (cek $x = 1$: $y = -1$). Di antara 2 dan 3 kurva di atas sumbu.
2. **Langkah 2: Antiturunan.** $F(x) = \dfrac{x^3}{3} - x^2$.
3. **Langkah 3: Bagian bawah.** $F(2) - F(0) = \dfrac{8}{3} - 4 = -\dfrac{4}{3}$. Luasnya $\dfrac{4}{3}$.
4. **Langkah 4: Bagian atas.** $F(3) - F(2) = (9 - 9) - \left(-\dfrac{4}{3}\right) = \dfrac{4}{3}$.
5. **Langkah 5: Jumlahkan luas.** $\dfrac{4}{3} + \dfrac{4}{3} = \dfrac{8}{3}$.
6. **Cek jawaban.** Kalau langsung $\int_0^3$, hasilnya $F(3) - F(0) = 0$. Nol jelas bukan luas, karena daerahnya terlihat ada. Ini bukti bagian bawah dan atas saling menghapus, sehingga perlu dipisah.

**Jawaban:** Luas $= \dfrac{8}{3}$ satuan luas.

### Contoh 4: Gerak motor yang berbalik arah

**Soal.** Putu mengendarai motor di jalan lurus. Percepatannya $a = 2t - 6$ m/s², dan kecepatan awalnya $8$ m/s. Tentukan (a) kecepatan $v$ sebagai fungsi $t$, (b) perpindahan, dan (c) jarak tempuh selama 5 detik pertama.

1. **Langkah 1: Integralkan percepatan.** $v = \int (2t - 6)\,dt = t^2 - 6t + C$. Saat $t = 0$, $v = 8$, jadi $C = 8$. Maka $v = t^2 - 6t + 8$.
2. **Langkah 2: Cari saat berbalik arah.** $v = (t - 2)(t - 4) = 0$, jadi $t = 2$ dan $t = 4$. Antara keduanya $v < 0$ (motor mundur).
3. **Langkah 3: Antiturunan kecepatan.** $S(t) = \dfrac{t^3}{3} - 3t^2 + 8t$. Hitung $S(0) = 0$, $S(2) = \dfrac{20}{3}$, $S(4) = \dfrac{16}{3}$, $S(5) = \dfrac{20}{3}$.
4. **Langkah 4: Perpindahan.** $S(5) - S(0) = \dfrac{20}{3} \approx 6{,}67$ m.
5. **Langkah 5: Jarak per bagian.** $0 \to 2$: $\dfrac{20}{3}$. $2 \to 4$: $\left|\dfrac{16}{3} - \dfrac{20}{3}\right| = \dfrac{4}{3}$. $4 \to 5$: $\dfrac{20}{3} - \dfrac{16}{3} = \dfrac{4}{3}$. Total $\dfrac{28}{3} \approx 9{,}33$ m.
6. **Cek jawaban.** Perpindahan = maju − mundur = $\left(\dfrac{20}{3} + \dfrac{4}{3}\right) - \dfrac{4}{3} = \dfrac{20}{3}$. Cocok dengan Langkah 4. Turunkan $v$: $2t - 6$, sama dengan $a$.

**Jawaban:** (a) $v = t^2 - 6t + 8$; (b) perpindahan $\dfrac{20}{3}$ m; (c) jarak $\dfrac{28}{3}$ m.

## Kesalahan yang sering terjadi

- **Lupa $+C$.** Integral tak tentu selalu punya konstanta. Tanpa $C$, kamu tidak bisa memakai syarat awal seperti $v(0) = 8$.
- **Tidak membagi dengan $a$.** Menulis $\int (2x+1)^3\,dx = \dfrac{(2x+1)^4}{4}$. Turunkan balik dan kamu mendapat $2(2x+1)^3$, dua kali lipat. Yang benar dibagi $2 \times 4 = 8$.
- **Salah tanda pada sin.** $\int \sin x\,dx = -\cos x + C$, bukan $\cos x$. Cek dengan menurunkan: $\dfrac{d}{dx}(-\cos x) = \sin x$.
- **Langsung mengintegralkan untuk luas.** Seperti Contoh 3, bagian di bawah sumbu memberi nilai negatif. Pisahkan di titik potong.
- **Menyamakan jarak dengan perpindahan.** Saat benda berbalik arah, jarak = jumlah nilai mutlak tiap bagian.

## Ringkasan

- $\displaystyle\int x^n\,dx = \frac{x^{n+1}}{n+1} + C$ untuk $n \neq -1$. Selalu cek dengan menurunkan hasilnya.
- Untuk bentuk $(ax+b)$, integralkan seperti biasa lalu **bagi dengan $a$**.
- $\int \sin x\,dx = -\cos x + C$, $\int \cos x\,dx = \sin x + C$, $\int \sec^2 x\,dx = \tan x + C$, $\int e^x\,dx = e^x + C$.
- $\displaystyle\int_a^b f(x)\,dx = F(b) - F(a)$. Untuk luas, pisahkan bagian di bawah sumbu $x$ dan ambil nilai mutlaknya.
- $v = \int a\,dt$, $s = \int v\,dt$. Jarak tempuh dipisah di saat $v = 0$.

## Cek pemahaman

1. Tentukan $\displaystyle\int (4x^3 - 6x + 5)\,dx$.
2. Tentukan $\displaystyle\int (3x - 2)^5\,dx$.
3. Hitung $\displaystyle\int_0^{\pi/4} (\sec^2 x + 2\cos 2x)\,dx$.
4. Hitung luas daerah antara $y = x^2 - 4$ dan sumbu $x$ dari $x = 0$ sampai $x = 3$.
5. Sebuah bola menggelinding di lantai lurus dengan kecepatan $v = 6 - 2t$ m/s. Tentukan perpindahan dan jarak tempuhnya selama 5 detik pertama.

### Kunci jawaban

1. $x^4 - 3x^2 + 5x + C$. Integralkan suku per suku.
2. $\dfrac{(3x-2)^6}{18} + C$. Pangkat naik jadi 6, lalu bagi dengan $3 \times 6 = 18$.
3. $2$. Antiturunan $\tan x + \sin 2x$; di $\frac{\pi}{4}$ bernilai $1 + 1 = 2$, di 0 bernilai 0.
4. $\dfrac{23}{3}$. Kurva memotong sumbu di $x = 2$; $\int_0^2 = -\dfrac{16}{3}$ (luas $\dfrac{16}{3}$) dan $\int_2^3 = \dfrac{7}{3}$, jumlah $\dfrac{23}{3}$.
5. Perpindahan 5 m, jarak 13 m. $s = 6t - t^2$; berbalik di $t = 3$ dengan $s(3) = 9$, lalu $s(5) = 5$, jadi jarak $9 + 4 = 13$.
