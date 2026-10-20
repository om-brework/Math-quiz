---
id: sma1-05-fungsi-kuadrat-lanjut
judul: Fungsi Kuadrat Lanjut
jenjang: sma1
moe: "Additional Mathematics · A1 Quadratic functions"
prasyarat: [smp2-04-fungsi-kuadrat, smp3-02-persamaan-kuadrat-lanjut]
durasi_menit: 60
---

## Kenapa belajar ini?

Banyak masalah nyata meminta nilai terbaik: luas kandang terbesar dari pagar terbatas, tinggi maksimum bola, atau harga tiket yang memberi pendapatan terbesar. Jika masalahnya bisa dimodelkan dengan fungsi kuadrat, kita bisa menemukan nilai terbaik itu dengan tepat, tanpa coba-coba.

## Analogi

Bayangkan grafik $y = ax^2 + bx + c$ sebagai **lembah** (jika $a > 0$) atau **bukit** (jika $a < 0$).

Di lembah, ada satu titik terendah: **dasar lembah**. Ketinggian di titik mana pun sama dengan "tinggi dasar lembah" ditambah "tambahan karena kamu menjauh dari dasar". Tambahan itu tidak pernah negatif. Makin jauh kamu berjalan dari dasar, makin tinggi posisimu.

Melengkapkan kuadrat adalah cara menulis fungsi persis dalam bentuk itu:

$$
y = a(x - h)^2 + k
$$

Di sini $k$ adalah tinggi dasar lembah, dan $a(x-h)^2$ adalah tambahannya. Tambahan itu bernilai nol hanya ketika kamu berdiri tepat di dasar, yaitu $x = h$.

## Konsep

### Melengkapkan kuadrat

Kuncinya adalah identitas $(x + p)^2 = x^2 + 2px + p^2$. Jadi $x^2 + 2px = (x+p)^2 - p^2$. Untuk bentuk umum, keluarkan $a$ dulu:

$$
ax^2 + bx + c = a\left(x^2 + \frac{b}{a}x\right) + c = a\left[\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a^2}\right] + c
$$

Setelah disederhanakan:

$$
ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 + \frac{4ac - b^2}{4a}
$$

Jadi puncak (titik balik) parabola ada di $x = -\dfrac{b}{2a}$, dengan nilai $y = \dfrac{4ac - b^2}{4a}$.

### Nilai maksimum dan minimum

Dari bentuk $y = a(x-h)^2 + k$, dan karena $(x-h)^2 \ge 0$ untuk semua $x$:

- Jika $a > 0$ (lembah): $a(x-h)^2 \ge 0$, jadi $y \ge k$. **Nilai minimum** $k$, dicapai saat $x = h$.
- Jika $a < 0$ (bukit): $a(x-h)^2 \le 0$, jadi $y \le k$. **Nilai maksimum** $k$, dicapai saat $x = h$.

Titik $(h, k)$ disebut titik balik, dan garis $x = h$ adalah sumbu simetri.

### Definit positif dan definit negatif

Kadang kita ingin tahu apakah sebuah fungsi kuadrat **selalu positif** untuk semua $x$. Dalam analogi: apakah dasar lembah ada di atas permukaan tanah (sumbu $x$)?

Tulis $D = b^2 - 4ac$ (diskriminan). Dari bentuk melengkapkan kuadrat:

$$
ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 - \frac{D}{4a}
$$

- **Definit positif** ($ax^2+bx+c > 0$ untuk semua $x$): syaratnya $a > 0$ **dan** $D < 0$. Lembah menghadap ke atas, dan dasarnya $-\frac{D}{4a} > 0$ berada di atas sumbu $x$.
- **Definit negatif** ($ax^2+bx+c < 0$ untuk semua $x$): syaratnya $a < 0$ **dan** $D < 0$. Bukit menghadap ke bawah, dan puncaknya di bawah sumbu $x$.

Contoh cepat: $-x^2 + 4x - 7 = -(x-2)^2 - 3$. Puncaknya $-3$, jadi fungsi ini selalu negatif. Cocok dengan $a = -1 < 0$ dan $D = 16 - 28 = -12 < 0$.

### Fungsi kuadrat sebagai model

Untuk soal cerita, polanya selalu sama:

1. Pilih variabel $x$ untuk besaran yang bisa kita atur.
2. Tulis besaran yang ingin dioptimalkan sebagai fungsi kuadrat dari $x$.
3. Lengkapkan kuadrat untuk menemukan nilai terbaik.
4. Pastikan nilai $x$ itu masuk akal di dunia nyata (misalnya panjang tidak negatif).

## Contoh langkah demi langkah

### Contoh 1: Nilai minimum

**Soal.** Tentukan nilai minimum $y = x^2 - 6x + 11$ dan nilai $x$ saat minimum terjadi.

1. **Langkah 1: Identifikasi bentuk.** $a = 1 > 0$, jadi grafiknya lembah. Kita mencari dasar lembah (minimum).
2. **Langkah 2: Lengkapkan kuadrat.** Setengah dari koefisien $x$ adalah $-3$. Maka $x^2 - 6x = (x-3)^2 - 9$. Jadi $y = (x-3)^2 - 9 + 11 = (x-3)^2 + 2$.
3. **Langkah 3: Baca titik balik.** Tambahan $(x-3)^2 \ge 0$ bernilai nol saat $x = 3$. Jadi minimum $y = 2$.
4. **Cek jawaban.** Substitusi $x = 3$ ke bentuk awal: $9 - 18 + 11 = 2$. Coba $x = 4$: $16 - 24 + 11 = 3 > 2$. Cocok.

**Jawaban:** nilai minimum $2$, terjadi saat $x = 3$.

### Contoh 2: Nilai maksimum dengan $a$ negatif

**Soal.** Nyatakan $y = -2x^2 + 8x - 3$ dalam bentuk $a(x-h)^2 + k$, lalu tentukan nilai maksimumnya.

1. **Langkah 1: Keluarkan $a$ dari suku yang memuat $x$.** $y = -2(x^2 - 4x) - 3$.
2. **Langkah 2: Lengkapkan kuadrat di dalam kurung.** $x^2 - 4x = (x-2)^2 - 4$. Maka $y = -2\left[(x-2)^2 - 4\right] - 3$.
3. **Langkah 3: Uraikan kurung siku.** $y = -2(x-2)^2 + 8 - 3 = -2(x-2)^2 + 5$.
4. **Langkah 4: Baca puncak bukit.** Karena $-2(x-2)^2 \le 0$, nilai $y$ paling besar $5$, saat $x = 2$.
5. **Cek jawaban.** $x = 2$: $-8 + 16 - 3 = 5$. Rumus puncak: $x = -\frac{b}{2a} = -\frac{8}{-4} = 2$. Cocok.

**Jawaban:** $y = -2(x-2)^2 + 5$; nilai maksimum $5$ saat $x = 2$.

### Contoh 3: Syarat definit positif

**Soal.** Tentukan nilai $k$ agar $2x^2 - 4x + k > 0$ untuk semua bilangan real $x$.

1. **Langkah 1: Tulis syarat definit positif.** Perlu $a > 0$ dan $D < 0$. Di sini $a = 2 > 0$, sudah terpenuhi.
2. **Langkah 2: Hitung diskriminan.** $D = (-4)^2 - 4(2)(k) = 16 - 8k$.
3. **Langkah 3: Selesaikan pertidaksamaan.** $16 - 8k < 0 \Rightarrow 8k > 16 \Rightarrow k > 2$.
4. **Cek jawaban.** Ambil $k = 3$: $2x^2 - 4x + 3 = 2(x-1)^2 + 1 \ge 1 > 0$. Ambil batas $k = 2$: $2(x-1)^2$ bernilai $0$ di $x = 1$, jadi tidak "lebih dari 0". Batasnya memang tidak ikut.

**Jawaban:** $k > 2$.

### Contoh 4: Soal cerita, kandang ayam

**Soal.** Pak Made punya kawat 60 m untuk membuat kandang ayam persegi panjang. Satu sisi kandang menempel tembok rumah, jadi tidak perlu kawat. Tentukan ukuran kandang agar luasnya maksimum.

1. **Langkah 1: Pilih variabel.** Misalkan $x$ meter adalah panjang tiap sisi yang tegak lurus tembok. Ada dua sisi seperti itu, jadi sisi yang sejajar tembok panjangnya $60 - 2x$ meter.
2. **Langkah 2: Tulis model.** Luas $L = x(60 - 2x) = -2x^2 + 60x$, dengan $0 < x < 30$.
3. **Langkah 3: Lengkapkan kuadrat.** $L = -2(x^2 - 30x) = -2\left[(x-15)^2 - 225\right] = -2(x-15)^2 + 450$.
4. **Langkah 4: Baca puncak bukit.** Luas maksimum $450 \text{ m}^2$ saat $x = 15$. Sisi sejajar tembok $= 60 - 30 = 30$ m.
5. **Cek jawaban.** Kawat terpakai: $15 + 15 + 30 = 60$ m. Luas $15 \times 30 = 450$. Coba $x = 14$: $14 \times 32 = 448 < 450$. Coba $x = 16$: $16 \times 28 = 448 < 450$. Cocok dan simetris.

**Jawaban:** kandang berukuran 15 m (tegak lurus tembok) kali 30 m (sejajar tembok), luas maksimum $450 \text{ m}^2$.

## Kesalahan yang sering terjadi

- **Lupa mengalikan $a$ ke suku pengurang.** Menulis $-2\left[(x-2)^2 - 4\right] - 3 = -2(x-2)^2 - 4 - 3$. Suku $-4$ juga ada di dalam kurung, jadi harus dikali $-2$ menjadi $+8$. Hasil benar: $-2(x-2)^2 + 5$.
- **Salah tanda pada $h$.** Dari $(x+5)^2 + 5$ menyimpulkan minimum saat $x = 5$. Tambahan bernilai nol saat $x + 5 = 0$, yaitu $x = -5$.
- **Tertukar maksimum dan minimum.** Selalu lihat tanda $a$ dulu: $a > 0$ lembah (minimum), $a < 0$ bukit (maksimum).
- **Syarat definit tidak lengkap.** Hanya memeriksa $D < 0$. Fungsi $-x^2 - 1$ punya $D < 0$, tetapi selalu negatif, bukan positif. Tanda $a$ juga wajib dicek.
- **Mengabaikan batas nyata.** Pada soal kandang, $x$ harus di antara $0$ dan $30$. Jawaban di luar batas itu tidak bermakna.

## Ringkasan

- Melengkapkan kuadrat: $ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 + \frac{4ac - b^2}{4a}$.
- Pada $y = a(x-h)^2 + k$, titik baliknya $(h, k)$. Jika $a > 0$, $k$ minimum; jika $a < 0$, $k$ maksimum.
- Definit positif: $a > 0$ dan $D < 0$. Definit negatif: $a < 0$ dan $D < 0$.
- Soal cerita: pilih variabel, susun model kuadrat, lengkapkan kuadrat, cek batas nyata.

## Cek pemahaman

1. Nyatakan $x^2 + 10x + 30$ dalam bentuk $(x + p)^2 + q$, lalu tentukan nilai minimumnya.
2. Tentukan nilai maksimum $y = 3 + 4x - x^2$ dan nilai $x$ saat maksimum terjadi.
3. Nyatakan $2x^2 + 12x + 7$ dalam bentuk $a(x + p)^2 + q$.
4. Tentukan nilai $p$ agar $x^2 + px + 16 > 0$ untuk semua $x$ real.
5. Tinggi bola yang dilempar Putu setelah $t$ detik adalah $h = 2 + 12t - 3t^2$ meter. Tentukan tinggi maksimum bola dan kapan tercapai.

### Kunci jawaban

1. $(x+5)^2 + 5$; minimum $5$ saat $x = -5$, karena $x^2 + 10x = (x+5)^2 - 25$ dan $-25 + 30 = 5$.
2. Maksimum $7$ saat $x = 2$, karena $y = -(x^2 - 4x) + 3 = -(x-2)^2 + 7$.
3. $2(x+3)^2 - 11$, karena $2\left[(x+3)^2 - 9\right] + 7 = 2(x+3)^2 - 18 + 7$.
4. $-8 < p < 8$, karena $a = 1 > 0$ dan $D = p^2 - 64 < 0$.
5. Maksimum $14$ m saat $t = 2$ detik, karena $h = -3(t^2 - 4t) + 2 = -3(t-2)^2 + 14$.
