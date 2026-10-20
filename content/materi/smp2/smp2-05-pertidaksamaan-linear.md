---
id: smp2-05-pertidaksamaan-linear
judul: Pertidaksamaan Linear
jenjang: smp2
moe: "Secondary 2 · Number and Algebra · N7 Equations and inequalities"
prasyarat: [smp1-02-bilangan-bulat-real, smp1-09-persamaan-linear]
durasi_menit: 45
---

## Kenapa belajar ini?

Banyak keputusan sehari-hari berbentuk "paling banyak" atau "paling sedikit". Uangmu Rp50.000, berapa buku paling banyak yang bisa kamu beli? Berapa minggu paling sedikit kamu harus menabung? Pertanyaan seperti ini dijawab dengan pertidaksamaan, bukan persamaan.

## Analogi

Bayangkan sebuah **timbangan yang miring**. Piring kiri lebih berat daripada piring kanan, jadi timbangan miring ke kiri.

- Kalau kamu **menambah atau mengambil beban yang sama** di kedua piring, timbangan tetap miring ke arah yang sama.
- Kalau kamu **melipatgandakan** isi kedua piring (misalnya jadi 3 kali), sisi yang berat tetap lebih berat.

Tetapi ada satu gerakan aneh: **mengalikan dengan bilangan negatif**. Bayangkan isi piring berubah menjadi **utang**. Punya Rp5.000 lebih banyak daripada punya Rp3.000. Tetapi **utang** Rp5.000 lebih buruk (lebih kecil nilainya) daripada utang Rp3.000. Begitu diubah menjadi negatif, arah timbangan **terbalik**.

Ingat timbangan ini di setiap langkah: semua gerakan aman, kecuali kali atau bagi bilangan negatif, yang membalik arah.

## Konsep

### Arti pertidaksamaan

Pertidaksamaan adalah kalimat matematika yang membandingkan dua bentuk dengan salah satu lambang berikut.

| Lambang | Dibaca | Contoh |
|---|---|---|
| $<$ | kurang dari | $x < 4$ |
| $>$ | lebih dari | $x > -1$ |
| $\le$ | kurang dari atau sama dengan (paling banyak) | $x \le 7$ |
| $\ge$ | lebih dari atau sama dengan (paling sedikit) | $x \ge 2$ |

Persamaan $x + 2 = 5$ hanya punya satu jawaban, yaitu $x = 3$. Pertidaksamaan $x + 2 > 5$ punya **tak hingga banyak** jawaban: $x = 3{,}1$, $x = 4$, $x = 100$, dan seterusnya. Semua jawaban itu disebut **penyelesaian**, dan kita tulis ringkas sebagai $x > 3$.

**Pertidaksamaan linear** adalah pertidaksamaan yang variabelnya berpangkat satu, misalnya $3x - 4 \le 11$.

### Aturan yang boleh dilakukan

Untuk menyelesaikan pertidaksamaan, kita memakai gerakan yang sama seperti pada persamaan, dengan satu pengecualian.

1. **Tambah atau kurangi** kedua ruas dengan bilangan yang sama: tanda **tetap**.
2. **Kali atau bagi** kedua ruas dengan bilangan **positif**: tanda **tetap**.
3. **Kali atau bagi** kedua ruas dengan bilangan **negatif**: tanda **dibalik** ($<$ menjadi $>$, $\le$ menjadi $\ge$, dan sebaliknya).

### Kenapa tandanya dibalik?

Ambil pertidaksamaan yang jelas benar: $2 < 5$. Kalikan kedua ruas dengan $-1$. Kita dapat $-2$ dan $-5$. Pada garis bilangan, $-2$ ada di sebelah **kanan** $-5$, jadi $-2 > -5$.

Mengalikan dengan bilangan negatif sama seperti **mencerminkan** semua bilangan terhadap titik 0. Yang tadinya di kiri pindah ke kanan. Karena urutannya terbalik, tandanya juga harus dibalik. Ini persis seperti harta yang berubah menjadi utang pada analogi timbangan.

### Menggambar di garis bilangan

Penyelesaian pertidaksamaan digambar di garis bilangan.

- **Bulatan kosong** ($\circ$) untuk $<$ atau $>$: angka batas **tidak** termasuk.
- **Bulatan penuh** ($\bullet$) untuk $\le$ atau $\ge$: angka batas **termasuk**.
- Panah ke kanan untuk "lebih dari", panah ke kiri untuk "kurang dari".

Contoh, $x \le 5$:

```
<===================●
 ---+---+---+---+---+---+---+---
    1   2   3   4   5   6   7
```

Contoh, $x > -3$:

```
                o========================>
 ---+---+---+---+---+---+---+---+---+---
   -6  -5  -4  -3  -2  -1   0   1   2
```

Pada gambar kedua, bulatan kosong ada di $-3$, dan panah mengarah ke kanan.

## Contoh langkah demi langkah

Setiap contoh memakai urutan yang sama: **pisahkan variabel → bagi koefisien (awasi tandanya) → gambar → cek**.

### Contoh 1: Satu langkah

**Soal.** Selesaikan $x + 5 > 12$.

1. **Langkah 1: Pisahkan variabel.** Kurangi kedua ruas dengan 5. Ini seperti mengambil beban 5 dari kedua piring timbangan, arah miringnya tetap.
$$x + 5 - 5 > 12 - 5 \quad\Rightarrow\quad x > 7$$
2. **Langkah 2: Gambar.** Bulatan kosong di 7, panah ke kanan.
3. **Cek jawaban.** Pilih satu bilangan di daerah penyelesaian, misalnya $x = 8$: $8 + 5 = 13 > 12$, benar. Pilih satu di luar, misalnya $x = 7$: $7 + 5 = 12 > 12$ salah. Jadi 7 memang tidak termasuk.

**Jawaban:** $x > 7$.

### Contoh 2: Dua langkah dengan $\le$

**Soal.** Selesaikan $3x - 4 \le 11$ dan gambar di garis bilangan.

1. **Langkah 1: Pisahkan variabel.** Tambahkan 4 ke kedua ruas.
$$3x \le 15$$
2. **Langkah 2: Bagi dengan koefisien.** Koefisiennya 3, positif. Tanda tetap.
$$x \le 5$$
3. **Langkah 3: Gambar.** Bulatan penuh di 5 (karena 5 termasuk), panah ke kiri.
4. **Cek jawaban.** Batas $x = 5$: $3(5) - 4 = 11 \le 11$, benar. Di luar, $x = 6$: $3(6) - 4 = 14 \le 11$ salah. Cocok.

**Jawaban:** $x \le 5$.

### Contoh 3: Koefisien negatif

**Soal.** Selesaikan $5 - 2x < 11$.

1. **Langkah 1: Pisahkan variabel.** Kurangi kedua ruas dengan 5.
$$-2x < 6$$
2. **Langkah 2: Bagi dengan koefisien.** Koefisiennya $-2$, **negatif**. Di timbangan, ini saat harta berubah menjadi utang, jadi tanda dibalik.
$$x > \frac{6}{-2} \quad\Rightarrow\quad x > -3$$
3. **Langkah 3: Gambar.** Bulatan kosong di $-3$, panah ke kanan.
4. **Cek jawaban.** Di dalam, $x = 0$: $5 - 0 = 5 < 11$, benar. Di luar, $x = -4$: $5 - 2(-4) = 5 + 8 = 13 < 11$ salah. Cocok, jadi pembalikan tanda memang perlu.

**Jawaban:** $x > -3$.

### Contoh 4: Variabel di dua ruas dan pecahan

**Soal.** Selesaikan $\dfrac{2x + 1}{3} \ge x - 2$.

1. **Langkah 1: Hilangkan pecahan.** Kalikan kedua ruas dengan 3 (positif, tanda tetap).
$$2x + 1 \ge 3x - 6$$
2. **Langkah 2: Kumpulkan variabel di satu ruas.** Kurangi kedua ruas dengan $3x$, lalu kurangi dengan 1.
$$2x - 3x \ge -6 - 1 \quad\Rightarrow\quad -x \ge -7$$
3. **Langkah 3: Bagi dengan koefisien.** Koefisien $-1$, negatif. Balik tanda.
$$x \le 7$$
4. **Cek jawaban.** Batas $x = 7$: ruas kiri $\frac{15}{3} = 5$, ruas kanan $7 - 2 = 5$. $5 \ge 5$, benar. Di luar, $x = 10$: kiri $\frac{21}{3} = 7$, kanan $8$. $7 \ge 8$ salah. Cocok.

**Jawaban:** $x \le 7$.

### Contoh 5: Soal cerita

**Soal.** Siti membawa Rp50.000 ke toko buku. Ia sudah membeli sebuah pulpen seharga Rp8.000. Sisanya untuk membeli buku tulis seharga Rp6.500 per buah. Berapa buku tulis paling banyak yang bisa dibeli Siti?

1. **Langkah 1: Pahami soal dan pilih variabel.** Misalkan $n$ = banyak buku tulis. Total belanja tidak boleh lebih dari Rp50.000, jadi lambangnya $\le$.
2. **Langkah 2: Susun pertidaksamaan.**
$$6.500n + 8.000 \le 50.000$$
3. **Langkah 3: Selesaikan.** Kurangi 8.000, lalu bagi 6.500 (positif).
$$6.500n \le 42.000 \quad\Rightarrow\quad n \le \frac{42.000}{6.500} \approx 6{,}46$$
4. **Langkah 4: Tafsirkan.** Banyak buku harus bilangan bulat. Bilangan bulat terbesar yang $\le 6{,}46$ adalah 6.
5. **Cek jawaban.** 6 buku: $6 \times 6.500 + 8.000 = 39.000 + 8.000 = 47.000$, cukup. 7 buku: $45.500 + 8.000 = 53.500$, melebihi Rp50.000.

**Jawaban:** paling banyak 6 buku tulis.

## Kesalahan yang sering terjadi

- **Lupa membalik tanda.** Dari $-2x < 6$ menulis $x < -3$. Cek dengan $x = -4$: $-2(-4) = 8 < 6$ salah. Ingat timbangan: dibagi bilangan negatif, arah dibalik, jadi $x > -3$.
- **Membalik tanda padahal tidak perlu.** Dari $-6 < 2x$ menulis $x < -3$ karena melihat angka negatif. Yang dibagi adalah koefisien $2$, positif, jadi tanda tetap: $-3 < x$, atau $x > -3$. Tanda dibalik hanya jika **pengali atau pembaginya** negatif.
- **Salah memilih bulatan.** Menggambar $x \le 5$ dengan bulatan kosong. Lambang $\le$ berarti 5 termasuk, jadi pakai bulatan penuh.
- **Salah membulatkan di soal cerita.** Menjawab "7 buku" karena $6{,}46$ dibulatkan ke 7. Pada soal "paling banyak", kita ambil bilangan bulat di **bawah**. Selalu cek dengan memasukkan jawaban ke soal.
- **Menukar ruas tanpa membalik arah.** $7 > x$ ditulis menjadi $x > 7$. Kalau ruas ditukar, ujung lancip lambang harus tetap menunjuk ke yang lebih kecil: $7 > x$ sama dengan $x < 7$.

## Ringkasan

- Pertidaksamaan memakai $<, >, \le, \ge$ dan biasanya punya tak hingga banyak penyelesaian.
- Tambah, kurang, kali, atau bagi dengan bilangan **positif**: tanda tetap.
- Kali atau bagi dengan bilangan **negatif**: tanda **dibalik**, karena urutan bilangan tercermin terhadap 0.
- Garis bilangan: bulatan kosong untuk $<, >$, bulatan penuh untuk $\le, \ge$.
- Langkah kunci: pisahkan variabel → bagi koefisien (awasi tanda) → gambar → cek dengan satu bilangan di dalam dan satu di luar.

## Cek pemahaman

1. Selesaikan $x - 4 < 9$.
2. Selesaikan $4x + 3 \ge 19$ dan sebutkan jenis bulatan di garis bilangan.
3. Selesaikan $7 - 3x > 22$.
4. Selesaikan $2(x - 3) \le 5x + 9$.
5. Putu sudah punya tabungan Rp120.000. Setiap minggu ia menabung Rp15.000. Ia ingin tabungannya paling sedikit Rp310.000. Berapa minggu paling sedikit ia harus menabung?

### Kunci jawaban

1. $x < 13$. Tambahkan 4 ke kedua ruas.
2. $x \ge 4$, bulatan penuh di 4. Dari $4x \ge 16$, bagi 4 (positif).
3. $x < -5$. Dari $-3x > 15$, bagi $-3$ dan balik tanda.
4. $x \ge -5$. Dari $2x - 6 \le 5x + 9$ didapat $-3x \le 15$, bagi $-3$ dan balik tanda.
5. 13 minggu. $120.000 + 15.000m \ge 310.000$ memberi $m \ge 12{,}67$; dengan 12 minggu tabungan baru Rp300.000, dengan 13 minggu Rp315.000.
