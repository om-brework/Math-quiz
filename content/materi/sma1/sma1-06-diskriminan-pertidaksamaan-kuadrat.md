---
id: sma1-06-diskriminan-pertidaksamaan-kuadrat
judul: Diskriminan dan Pertidaksamaan Kuadrat
jenjang: sma1
moe: "Additional Mathematics · A2 Equations and inequalities"
prasyarat: [smp3-02-persamaan-kuadrat-lanjut, smp2-06-sistem-persamaan-linear, sma1-05-fungsi-kuadrat-lanjut]
durasi_menit: 60
---

## Kenapa belajar ini?

Insinyur jalan perlu tahu apakah rel lurus akan menabrak bukit, hanya menyentuhnya, atau lewat tanpa menyentuh. Pertanyaan seperti ini bisa dijawab tanpa menggambar, cukup dengan satu bilangan: diskriminan. Pertidaksamaan kuadrat juga muncul saat mencari rentang nilai yang aman, misalnya rentang harga yang tetap memberi untung.

## Analogi

Bayangkan parabola sebagai **mangkuk** dan sumbu $x$ sebagai **permukaan air**.

- Jika dasar mangkuk berada di bawah permukaan air, permukaan air memotong dinding mangkuk di **dua titik**.
- Jika dasar mangkuk tepat menyentuh permukaan air, ada **satu titik sentuh**.
- Jika mangkuk melayang di atas air, **tidak ada** titik potong.

Diskriminan memberi tahu kita posisi dasar mangkuk terhadap air. Untuk garis dan kurva, kita "memiringkan" permukaan air menjadi garis, dan pertanyaannya tetap sama.

## Konsep

### Diskriminan dan jenis akar

Dari melengkapkan kuadrat, persamaan $ax^2 + bx + c = 0$ setara dengan

$$
\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}
$$

Ruas kiri adalah kuadrat, jadi tidak pernah negatif. Tanda ruas kanan ditentukan oleh **diskriminan** $D = b^2 - 4ac$. Akarnya:

$$
x = \frac{-b \pm \sqrt{D}}{2a}
$$

- $D > 0$: dua akar real berbeda (mangkuk memotong air di dua titik).
- $D = 0$: dua akar real kembar, $x = -\frac{b}{2a}$ (mangkuk menyentuh air).
- $D < 0$: tidak ada akar real (mangkuk melayang).

"Akar real" (tanpa kata berbeda) berarti $D \ge 0$.

### Kedudukan garis terhadap kurva

Untuk garis $y = mx + n$ dan kurva $y = ax^2 + bx + c$, titik potong memenuhi keduanya. Samakan $y$:

$$
ax^2 + (b - m)x + (c - n) = 0
$$

Hitung $D$ persamaan baru ini:

- $D > 0$: garis **memotong** kurva di dua titik.
- $D = 0$: garis **menyinggung** kurva (garis singgung).
- $D < 0$: garis **tidak memotong** kurva.

### Persamaan simultan linear dan kuadrat

Untuk menyelesaikan satu persamaan linear dan satu persamaan kuadrat:

1. Dari persamaan linear, nyatakan satu variabel dengan variabel lain.
2. Substitusikan ke persamaan kuadrat.
3. Selesaikan persamaan kuadrat yang muncul.
4. Hitung variabel kedua dari persamaan **linear**, lalu cek ke kedua persamaan.

### Pertidaksamaan kuadrat

Untuk $ax^2 + bx + c > 0$ (atau $<, \ge, \le$):

1. Cari akar-akar persamaan $ax^2 + bx + c = 0$ (titik potong dengan sumbu $x$).
2. Sketsa parabola: lembah jika $a > 0$, bukit jika $a < 0$.
3. Pilih bagian grafik yang sesuai: di atas sumbu $x$ untuk $> 0$, di bawah untuk $< 0$.

Untuk $a > 0$ dengan akar $\alpha < \beta$:

$$
(x - \alpha)(x - \beta) < 0 \iff \alpha < x < \beta, \qquad (x - \alpha)(x - \beta) > 0 \iff x < \alpha \text{ atau } x > \beta
$$

Dalam analogi: bagian mangkuk yang terendam air ada **di antara** dua titik potong.

## Contoh langkah demi langkah

### Contoh 1: Akar kembar

**Soal.** Tentukan nilai $k$ agar $x^2 - 6x + k = 0$ memiliki dua akar kembar. Tentukan juga akarnya.

1. **Langkah 1: Tulis syarat.** Akar kembar berarti $D = 0$.
2. **Langkah 2: Hitung $D$.** $D = (-6)^2 - 4(1)(k) = 36 - 4k$.
3. **Langkah 3: Selesaikan.** $36 - 4k = 0 \Rightarrow k = 9$.
4. **Langkah 4: Cari akar.** $x = -\frac{b}{2a} = \frac{6}{2} = 3$.
5. **Cek jawaban.** $x^2 - 6x + 9 = (x-3)^2$, nol hanya di $x = 3$. Cocok.

**Jawaban:** $k = 9$, akar kembarnya $x = 3$. (Untuk $k < 9$ akarnya real berbeda, untuk $k > 9$ tidak real.)

### Contoh 2: Garis yang tidak memotong kurva

**Soal.** Tentukan nilai $m$ agar garis $y = mx - 1$ tidak memotong kurva $y = x^2 + 3$.

1. **Langkah 1: Samakan $y$.** $x^2 + 3 = mx - 1 \Rightarrow x^2 - mx + 4 = 0$.
2. **Langkah 2: Tulis syarat.** Tidak memotong berarti $D < 0$. $D = m^2 - 16$.
3. **Langkah 3: Selesaikan pertidaksamaan.** $m^2 - 16 < 0 \Rightarrow (m-4)(m+4) < 0$. Bagian "terendam" ada di antara akar: $-4 < m < 4$.
4. **Cek jawaban.** Untuk $m = 0$: garis $y = -1$, sedangkan $x^2 + 3 \ge 3$, jadi memang tidak bertemu. Untuk $m = 5$: $x^2 - 5x + 4 = 0$ memberi $x = 1$ dan $x = 4$, jadi memotong. Cocok.

**Jawaban:** $-4 < m < 4$.

### Contoh 3: Pertidaksamaan kuadrat

**Soal.** Selesaikan $2x^2 + 5x - 3 \ge 0$.

1. **Langkah 1: Faktorkan.** $2x^2 + 5x - 3 = (2x - 1)(x + 3)$. Akarnya $x = \frac{1}{2}$ dan $x = -3$.
2. **Langkah 2: Sketsa.** $a = 2 > 0$, jadi lembah yang memotong sumbu $x$ di $-3$ dan $\frac{1}{2}$.
3. **Langkah 3: Pilih daerah.** Kita butuh $\ge 0$, yaitu bagian di atas atau pada sumbu $x$: di luar kedua akar, termasuk akarnya.
4. **Cek jawaban.** $x = 0$ (di antara akar): $-3 \ge 0$ salah, jadi $0$ memang tidak termasuk. $x = 1$: $2 + 5 - 3 = 4 \ge 0$ benar. $x = -4$: $32 - 20 - 3 = 9 \ge 0$ benar.

**Jawaban:** $x \le -3$ atau $x \ge \frac{1}{2}$.

### Contoh 4: Soal cerita, taman Bu Siti

**Soal.** Taman Bu Siti berbentuk persegi panjang dengan keliling 34 m. Jalan setapak dibuat sepanjang diagonalnya, yaitu 13 m. Tentukan panjang dan lebar taman.

1. **Langkah 1: Susun persamaan.** Misalkan panjang $p$ dan lebar $l$. Keliling: $2(p + l) = 34$, jadi $p + l = 17$ (linear). Diagonal (Pythagoras): $p^2 + l^2 = 169$ (kuadrat).
2. **Langkah 2: Substitusi.** Dari persamaan linear, $l = 17 - p$. Maka $p^2 + (17 - p)^2 = 169$.
3. **Langkah 3: Sederhanakan.** $p^2 + 289 - 34p + p^2 = 169 \Rightarrow 2p^2 - 34p + 120 = 0 \Rightarrow p^2 - 17p + 60 = 0$.
4. **Langkah 4: Faktorkan.** $(p - 12)(p - 5) = 0$, jadi $p = 12$ atau $p = 5$.
5. **Langkah 5: Cari variabel kedua.** Jika $p = 12$ maka $l = 5$. Jika $p = 5$ maka $l = 12$. Karena panjang biasanya sisi yang lebih besar, panjang 12 m dan lebar 5 m.
6. **Cek jawaban.** Keliling $2(12 + 5) = 34$. Diagonal $\sqrt{144 + 25} = \sqrt{169} = 13$. Cocok.

**Jawaban:** panjang 12 m, lebar 5 m.

## Kesalahan yang sering terjadi

- **Memakai $D$ tanpa menyusun persamaan $= 0$ dulu.** Pada $x^2 + 3 = mx - 1$, ada yang langsung memakai $a = 1, b = 0, c = 3$. Semua suku harus dipindah ke satu ruas dulu: $x^2 - mx + 4 = 0$.
- **Salah arah daerah pertidaksamaan.** Menulis $(x-2)(x-5) < 0 \Rightarrow x < 2$ atau $x > 5$. Untuk $a > 0$, nilai negatif ada di antara akar: $2 < x < 5$. Selalu sketsa atau uji satu titik.
- **Membagi dengan variabel.** Dari $x^2 > 3x$ menulis $x > 3$. Ini membuang $x < 0$. Yang benar: $x(x - 3) > 0$, sehingga $x < 0$ atau $x > 3$.
- **Menghitung variabel kedua dari persamaan kuadrat.** Ini bisa memberi pasangan palsu, misalnya $l = -5$ dari $l^2 = 25$. Pakai persamaan linear.
- **Lupa membedakan "real" dan "real berbeda".** Akar real berarti $D \ge 0$, bukan $D > 0$.

## Ringkasan

- $D = b^2 - 4ac$. $D > 0$: dua akar real berbeda; $D = 0$: kembar; $D < 0$: tidak real.
- Garis dan kurva: samakan $y$, susun persamaan kuadrat, lalu periksa $D$ (memotong, menyinggung, tidak memotong).
- Persamaan simultan linear-kuadrat: substitusi dari persamaan linear, selesaikan, lalu cek.
- Pertidaksamaan kuadrat: cari akar, sketsa parabola, pilih daerah. Untuk $a > 0$, "$< 0$" ada di antara akar.

## Cek pemahaman

1. Tentukan jenis akar persamaan $3x^2 - 4x + 2 = 0$.
2. Tentukan nilai $p$ agar $x^2 + px + 9 = 0$ memiliki akar kembar.
3. Selesaikan $x^2 - 7x + 10 \le 0$.
4. Selesaikan sistem $y = x + 1$ dan $y = x^2 - 1$.
5. Tentukan nilai $k$ agar garis $y = kx + 2$ memotong kurva $y = x^2 + x + 3$ di dua titik berbeda.

### Kunci jawaban

1. Tidak real, karena $D = 16 - 24 = -8 < 0$.
2. $p = 6$ atau $p = -6$, karena $D = p^2 - 36 = 0$.
3. $2 \le x \le 5$, karena $(x-2)(x-5) \le 0$ dan nilai tak positif ada di antara akar, termasuk akarnya.
4. $(2, 3)$ dan $(-1, 0)$, karena $x^2 - 1 = x + 1$ memberi $x^2 - x - 2 = (x-2)(x+1) = 0$.
5. $k < -1$ atau $k > 3$, karena $x^2 + (1-k)x + 1 = 0$ butuh $D = (1-k)^2 - 4 > 0$, yaitu $(k-3)(k+1) > 0$.
