---
id: sma2-08-persamaan-pertidaksamaan-lanjut
judul: Persamaan dan Pertidaksamaan Lanjut
jenjang: sma2
moe: "H2 Mathematics 9758 · Pure Mathematics · Functions and Graphs (Equations and Inequalities)"
prasyarat: [sma1-06-diskriminan-pertidaksamaan-kuadrat, sma2-07-fungsi-transformasi]
durasi_menit: 75
---

## Kenapa belajar ini?

Banyak keputusan berbentuk pertidaksamaan: "biaya rata-rata harus di bawah Rp5.000", "selisih ukuran tidak boleh lebih dari 2 mm". Sistem tiga persamaan muncul saat kita punya tiga besaran yang tidak diketahui, misalnya harga tiga barang dari tiga nota belanja.

## Analogi

Bayangkan garis bilangan sebagai **jalan raya panjang** yang dibagi oleh beberapa **gerbang tol**. Di antara dua gerbang, "warna" jalan (tanda positif atau negatif sebuah ekspresi) **tidak pernah berubah**. Warna hanya bisa berganti tepat di gerbang.

Gerbang itu adalah **titik kritis**: tempat pembilang bernilai nol, penyebut bernilai nol, atau dua kurva berpotongan. Jadi untuk menyelesaikan pertidaksamaan, kita cukup:

1. menemukan semua gerbang,
2. memeriksa warna satu titik di setiap ruas jalan,
3. memilih ruas yang warnanya sesuai.

Gerbang yang berasal dari penyebut nol adalah **gerbang tertutup**: tidak pernah boleh dilewati sebagai jawaban.

## Konsep

### Pertidaksamaan rasional

Bentuknya seperti $\dfrac{x + 3}{x - 2} \leq 2$. Aturan emas: **jangan mengalikan kedua ruas dengan penyebut yang tandanya belum diketahui**. Jika penyebut negatif, tanda pertidaksamaan harus dibalik, dan kita tidak tahu kapan itu terjadi.

Cara aman:

1. Pindahkan semua suku ke satu ruas sehingga ruas lain nol.
2. Satukan menjadi satu pecahan, lalu faktorkan pembilang dan penyebut.
3. Tandai titik kritis. Akar penyebut **selalu dikecualikan**.
4. Buat tabel tanda dan pilih ruas yang cocok.

Cara lain: kalikan kedua ruas dengan **kuadrat** penyebut, yang selalu positif, sehingga tanda tidak berubah.

### Pertidaksamaan nilai mutlak

$|x - a|$ adalah **jarak** antara $x$ dan $a$ pada garis bilangan. Untuk $b > 0$:
$$ |x - a| < b \iff a - b < x < a + b $$
$$ |x - a| > b \iff x < a - b \ \text{atau}\ x > a + b $$
Contoh: $|x - 5| < 2$ berarti jarak $x$ ke 5 kurang dari 2, jadi $3 < x < 7$.

Jika kedua ruas nilai mutlak, seperti $|f(x)| \geq |g(x)|$, keduanya tak negatif, jadi **boleh dikuadratkan**: $f(x)^2 \geq g(x)^2$. Jika ruas kanan bukan nilai mutlak, pecah menjadi kasus $f(x) \geq 0$ dan $f(x) < 0$.

### Sistem persamaan linear tiga variabel

Tiga persamaan dengan tiga variabel $x, y, z$ diselesaikan dengan **eliminasi**:

1. Pilih dua pasang persamaan, eliminasi variabel yang sama dari keduanya. Hasilnya dua persamaan dua variabel.
2. Selesaikan sistem dua variabel itu.
3. Substitusi balik untuk mendapat variabel ketiga.
4. Cek ke **ketiga** persamaan asal.

Secara geometris, setiap persamaan adalah sebuah bidang. Jawaban tunggal adalah satu titik tempat ketiga bidang bertemu. Sistem bisa juga tidak punya jawaban atau punya tak hingga jawaban.

### Penyelesaian dengan grafik

Untuk $f(x) > g(x)$, gambar $y = f(x)$ dan $y = g(x)$. Jawabannya adalah nilai $x$ tempat grafik $f$ berada **di atas** grafik $g$. Titik potong kedua grafik adalah gerbang tol. Grafik memberi gambaran, lalu aljabar memberi nilai titik potong yang tepat. Di ujian H2, kalkulator grafik boleh dipakai untuk mencari titik potong yang sulit.

## Contoh langkah demi langkah

### Contoh 1: Pertidaksamaan rasional

**Soal.** Selesaikan $\dfrac{x + 3}{x - 2} \leq 2$.

1. **Langkah 1: Nolkan ruas kanan.** $\dfrac{x + 3}{x - 2} - 2 \leq 0 \Rightarrow \dfrac{x + 3 - 2(x - 2)}{x - 2} \leq 0 \Rightarrow \dfrac{7 - x}{x - 2} \leq 0$.
2. **Langkah 2: Rapikan tanda.** Kalikan dengan $-1$ dan balik tanda: $\dfrac{x - 7}{x - 2} \geq 0$.
3. **Langkah 3: Tandai gerbang.** $x = 7$ (boleh, pembilang nol) dan $x = 2$ (gerbang tertutup, penyebut nol).
4. **Langkah 4: Tabel tanda.**

   ```
                 x < 2     2 < x < 7     x > 7
   x - 7           -           -           +
   x - 2           -           +           +
   pecahan         +           -           +
   ```

5. **Langkah 5: Pilih ruas.** Pecahan $\geq 0$ pada $x < 2$ dan $x \geq 7$.
6. **Cek jawaban.** $x = 0$: $\frac{3}{-2} = -1{,}5 \leq 2$, benar. $x = 3$: $\frac{6}{1} = 6$, tidak $\leq 2$, sesuai karena 3 tidak termasuk. $x = 7$: $\frac{10}{5} = 2$, benar.

**Jawaban:** $x < 2$ atau $x \geq 7$.

### Contoh 2: Dua nilai mutlak

**Soal.** Selesaikan $|2x - 3| \geq |x + 1|$.

1. **Langkah 1: Pilih cara.** Kedua ruas tak negatif, jadi boleh dikuadratkan tanpa mengubah tanda.
2. **Langkah 2: Kuadratkan.** $(2x - 3)^2 \geq (x + 1)^2 \Rightarrow 4x^2 - 12x + 9 \geq x^2 + 2x + 1$.
3. **Langkah 3: Sederhanakan.** $3x^2 - 14x + 8 \geq 0 \Rightarrow (3x - 2)(x - 4) \geq 0$.
4. **Langkah 4: Gerbang dan tanda.** Gerbang $x = \frac{2}{3}$ dan $x = 4$. Parabola terbuka ke atas, jadi positif di luar kedua akar.
5. **Cek jawaban.** $x = 0$: $3 \geq 1$, benar. $x = 1$: $1 \geq 2$, salah, dan memang 1 di antara gerbang. $x = 5$: $7 \geq 6$, benar.

**Jawaban:** $x \leq \frac{2}{3}$ atau $x \geq 4$.

### Contoh 3: Penyelesaian dengan grafik

**Soal.** Selesaikan $|x^2 - 4| < 3x$.

1. **Langkah 1: Gambar kedua grafik.** $y = |x^2 - 4|$ berbentuk W: parabola $x^2 - 4$ dengan bagian antara $-2$ dan $2$ dicerminkan ke atas, puncak lokal $(0, 4)$. $y = 3x$ garis lurus melalui titik asal.
2. **Langkah 2: Amati.** Untuk $x \leq 0$, $3x \leq 0$, jadi garis tidak mungkin di atas grafik W yang tak negatif. Potongan hanya terjadi di $x > 0$: satu kali di bagian cermin ($0 < x < 2$), satu kali di bagian asli ($x > 2$).
3. **Langkah 3: Titik potong di bagian cermin.** $4 - x^2 = 3x \Rightarrow x^2 + 3x - 4 = 0 \Rightarrow (x + 4)(x - 1) = 0$. Yang berada di $0 < x < 2$: $x = 1$.
4. **Langkah 4: Titik potong di bagian asli.** $x^2 - 4 = 3x \Rightarrow (x - 4)(x + 1) = 0$. Yang berada di $x > 2$: $x = 4$.
5. **Langkah 5: Baca grafik.** Garis berada di atas W di antara kedua titik potong.
6. **Cek jawaban.** $x = 2$: $0 < 6$, benar. $x = 0$: $4 < 0$, salah. $x = 5$: $21 < 15$, salah. Sesuai.

**Jawaban:** $1 < x < 4$.

### Contoh 4: Tiga nota belanja

**Soal.** Di toko bahan kue di Denpasar, Siti membeli 2 kg tepung, 1 kg gula, dan 1 kg mentega seharga Rp67.000. Putu membeli 1 kg tepung, 2 kg gula, dan 2 kg mentega seharga Rp98.000. Made membeli 3 kg tepung, 1 kg gula, dan 2 kg mentega seharga Rp107.000. Tentukan harga per kg masing-masing.

1. **Langkah 1: Tulis sistem.** Misalkan harga tepung $x$, gula $y$, mentega $z$ (dalam ribuan rupiah):
$$ \begin{aligned} 2x + y + z &= 67 \quad (1)\\ x + 2y + 2z &= 98 \quad (2)\\ 3x + y + 2z &= 107 \quad (3) \end{aligned} $$
2. **Langkah 2: Eliminasi $y$ dan $z$ sekaligus.** $2 \times (1) - (2)$: $4x - x + 2y - 2y + 2z - 2z = 134 - 98$, jadi $3x = 36$ dan $x = 12$.
3. **Langkah 3: Eliminasi $y$.** $(3) - (1)$: $x + z = 40$, jadi $z = 28$.
4. **Langkah 4: Substitusi balik.** Dari (1): $24 + y + 28 = 67$, jadi $y = 15$.
5. **Cek jawaban.** (2): $12 + 30 + 56 = 98$. (3): $36 + 15 + 56 = 107$. Kedua persamaan lain juga terpenuhi.

**Jawaban:** Tepung Rp12.000/kg, gula Rp15.000/kg, mentega Rp28.000/kg.

## Kesalahan yang sering terjadi

- **Mengalikan silang penyebut.** Dari $\frac{x + 3}{x - 2} \leq 2$ langsung menulis $x + 3 \leq 2(x - 2)$, sehingga $x \geq 7$. Jawaban $x < 2$ hilang karena saat $x - 2 < 0$ tanda harus dibalik. Selalu nolkan ruas kanan dulu.
- **Memasukkan akar penyebut.** Menulis $x \leq 2$ pada Contoh 1. Di $x = 2$ pecahan tidak terdefinisi, jadi gerbang itu selalu tertutup.
- **Salah arti nilai mutlak.** Dari $|x - 5| > 2$ menulis $3 < x < 7$. Itu kebalikannya. "Jarak lebih dari 2" berarti $x < 3$ atau $x > 7$.
- **Menguadratkan saat satu ruas bisa negatif.** Pada $|x^2 - 4| < 3x$, ruas kanan bisa negatif, jadi kuadratkan langsung berisiko. Pakai kasus atau grafik.
- **Tidak mengecek ke semua persamaan.** Pada sistem tiga variabel, jawaban yang cocok di dua persamaan belum tentu cocok di yang ketiga.

## Ringkasan

- Pertidaksamaan rasional: nolkan satu ruas, jadikan satu pecahan, cari titik kritis, buat tabel tanda. Akar penyebut selalu dikecualikan.
- $|x - a| < b \iff a - b < x < a + b$; $|x - a| > b \iff x < a - b$ atau $x > a + b$.
- Dua ruas nilai mutlak boleh dikuadratkan; selain itu pakai kasus atau grafik.
- Sistem tiga variabel: eliminasi menjadi dua variabel, selesaikan, substitusi balik, cek ketiga persamaan.
- Secara grafik, $f(x) > g(x)$ adalah bagian $x$ tempat kurva $f$ di atas kurva $g$; batasnya titik potong.

## Cek pemahaman

1. Selesaikan $\dfrac{x - 1}{x + 4} > 0$.
2. Selesaikan $|3x - 2| \leq 7$.
3. Selesaikan $\dfrac{2x}{x - 3} \geq 1$.
4. Selesaikan sistem $x + y + z = 6$, $2x - y + z = 3$, $x + 2y - z = 2$.
5. Selesaikan $|x + 1| > 2x - 4$.

### Kunci jawaban

1. $x < -4$ atau $x > 1$. Titik kritis $-4$ (dikecualikan) dan $1$; pecahan positif di luar keduanya.
2. $-\frac{5}{3} \leq x \leq 3$. Dari $-7 \leq 3x - 2 \leq 7$ didapat $-5 \leq 3x \leq 9$.
3. $x \leq -3$ atau $x > 3$. $\frac{2x}{x - 3} - 1 = \frac{x + 3}{x - 3} \geq 0$, dengan $x = 3$ dikecualikan.
4. $x = 1$, $y = 2$, $z = 3$. Persamaan (1) + (3) memberi $2x + 3y = 8$, persamaan (2) + (3) memberi $3x + y = 5$; selesaikan, lalu cek ke ketiganya.
5. $x < 5$. Untuk $x \geq -1$: $x + 1 > 2x - 4$ memberi $x < 5$. Untuk $x < -1$: $-x - 1 > 2x - 4$ memberi $x < 1$, jadi semua $x < -1$ memenuhi. Gabungannya $x < 5$.
