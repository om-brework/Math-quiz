---
id: smp2-06-sistem-persamaan-linear
judul: Sistem Persamaan Linear Dua Variabel
jenjang: smp2
moe: "Secondary 2 · Number and Algebra · N7 Equations and inequalities"
prasyarat: [smp1-08-fungsi-linear, smp1-09-persamaan-linear]
durasi_menit: 50
---

## Kenapa belajar ini?

Kadang ada dua hal yang belum diketahui sekaligus, misalnya harga tahu dan harga tempe. Satu nota belanja saja tidak cukup untuk mengetahui keduanya. Dengan dua nota, kita bisa menemukan dua harga itu. Cara berpikir ini dipakai untuk menghitung harga, tiket, campuran, dan banyak soal lain.

## Analogi

Bayangkan kamu memegang **dua nota belanja** dari warung Bu Made.

- Nota A: 3 tahu dan 2 tempe, total Rp11.000.
- Nota B: 2 tahu dan 4 tempe, total Rp14.000.

Dari satu nota, ada banyak kemungkinan harga. Tetapi dua nota bersama hanya cocok dengan **satu** pasangan harga. Ada dua cara pintar memakai nota:

- **Membandingkan nota** (eliminasi): buat banyak tempe di kedua nota sama, lalu kurangkan. Selisih harga pasti hanya karena tahu.
- **Menukar barang** (substitusi): kalau sudah tahu "1 tempe = sekian", ganti setiap tempe dengan nilainya, sehingga nota hanya berisi tahu.

Dua cara ini akan kita pakai terus di contoh.

## Konsep

### Persamaan linear dua variabel dan grafiknya

Persamaan seperti $2x + 3y = 12$ disebut **persamaan linear dua variabel**. Penyelesaiannya adalah pasangan $(x, y)$ yang membuat persamaan benar, misalnya $(6, 0)$, $(0, 4)$, dan $(3, 2)$. Ada tak hingga banyak pasangan seperti itu, sama seperti satu nota yang cocok dengan banyak kemungkinan harga.

Semua pasangan itu terletak pada **satu garis lurus**. Cara cepat menggambarnya adalah mencari dua titik potong sumbu:

- Ambil $x = 0$: $3y = 12$, jadi $y = 4$. Titik $(0, 4)$.
- Ambil $y = 0$: $2x = 12$, jadi $x = 6$. Titik $(6, 0)$.

Hubungkan kedua titik dengan penggaris.

### Sistem persamaan

**Sistem persamaan linear dua variabel** (SPLDV) adalah dua persamaan yang harus benar **bersamaan**. Penyelesaiannya adalah pasangan $(x, y)$ yang memenuhi kedua persamaan sekaligus.

Secara grafik, setiap persamaan adalah sebuah garis. Pasangan yang memenuhi keduanya adalah **titik potong** kedua garis. Itulah sebabnya dua nota bisa menentukan satu pasangan harga: dua garis yang tidak sejajar berpotongan tepat di satu titik.

### Tiga metode

1. **Metode grafik.** Gambar kedua garis, baca titik potongnya. Bagus untuk melihat gambaran, tetapi kurang tepat jika jawabannya pecahan.
2. **Metode substitusi.** Nyatakan satu variabel dalam variabel lain dari satu persamaan, lalu masukkan ke persamaan yang lain. Cocok jika salah satu persamaan sudah berbentuk $y = \ldots$ atau $x = \ldots$.
3. **Metode eliminasi.** Kalikan persamaan agar koefisien satu variabel sama (atau berlawanan), lalu kurangkan (atau jumlahkan) untuk menghilangkan variabel itu.

### Kenapa eliminasi boleh?

Jika $A = B$ dan $C = D$, maka $A + C = B + D$ dan $A - C = B - D$. Menjumlah atau mengurangkan dua persamaan sama seperti menggabungkan atau membandingkan dua nota. Hasilnya tetap benar.

## Contoh langkah demi langkah

Urutan berpikir: **pilih metode → hilangkan satu variabel → cari variabel pertama → cari variabel kedua → cek di kedua persamaan**.

### Contoh 1: Substitusi

**Soal.** Selesaikan $y = 2x - 1$ dan $3x + y = 14$.

1. **Langkah 1: Pilih metode.** Persamaan pertama sudah berbentuk $y = \ldots$, jadi pakai substitusi. Ini seperti sudah tahu "1 tempe senilai $2x - 1$".
2. **Langkah 2: Tukar $y$.** Ganti $y$ di persamaan kedua.
$$3x + (2x - 1) = 14$$
3. **Langkah 3: Cari $x$.** $5x - 1 = 14$, jadi $5x = 15$ dan $x = 3$.
4. **Langkah 4: Cari $y$.** $y = 2(3) - 1 = 5$.
5. **Cek jawaban.** Persamaan 1: $2(3) - 1 = 5$, benar. Persamaan 2: $3(3) + 5 = 14$, benar.

**Jawaban:** $x = 3$, $y = 5$.

### Contoh 2: Eliminasi langsung

**Soal.** Selesaikan $2x + 3y = 12$ dan $4x - 3y = 6$.

1. **Langkah 1: Pilih metode.** Koefisien $y$ adalah $+3$ dan $-3$, sudah berlawanan. Pakai eliminasi dengan **menjumlahkan**.
2. **Langkah 2: Jumlahkan kedua persamaan.**
$$(2x + 4x) + (3y - 3y) = 12 + 6 \quad\Rightarrow\quad 6x = 18$$
3. **Langkah 3: Cari $x$.** $x = 3$.
4. **Langkah 4: Cari $y$.** Masukkan ke persamaan pertama: $2(3) + 3y = 12$, jadi $3y = 6$ dan $y = 2$.
5. **Cek jawaban.** $2(3) + 3(2) = 12$, benar. $4(3) - 3(2) = 12 - 6 = 6$, benar.

**Jawaban:** $x = 3$, $y = 2$.

### Contoh 3: Eliminasi dengan mengalikan dulu

**Soal.** Selesaikan $3x + 2y = 16$ dan $5x - 3y = 14$.

1. **Langkah 1: Pilih variabel yang dihilangkan.** Hilangkan $y$. Koefisiennya 2 dan $-3$. KPK dari 2 dan 3 adalah 6.
2. **Langkah 2: Samakan koefisien.** Kalikan persamaan pertama dengan 3 dan persamaan kedua dengan 2. Ini seperti memfotokopi nota agar banyak tempenya sama.
$$9x + 6y = 48$$
$$10x - 6y = 28$$
3. **Langkah 3: Jumlahkan.** $19x = 76$, jadi $x = 4$.
4. **Langkah 4: Cari $y$.** $3(4) + 2y = 16$, jadi $2y = 4$ dan $y = 2$.
5. **Cek jawaban.** $3(4) + 2(2) = 16$, benar. $5(4) - 3(2) = 20 - 6 = 14$, benar.

**Jawaban:** $x = 4$, $y = 2$.

### Contoh 4: Metode grafik

**Soal.** Selesaikan $x + y = 5$ dan $x - y = 1$ dengan grafik.

1. **Langkah 1: Cari dua titik garis pertama.** $x + y = 5$: titik $(0, 5)$ dan $(5, 0)$.
2. **Langkah 2: Cari dua titik garis kedua.** $x - y = 1$: jika $x = 0$ maka $y = -1$, titik $(0, -1)$; jika $y = 0$ maka $x = 1$, titik $(1, 0)$.
3. **Langkah 3: Gambar dan baca titik potong.** Garis $x + y = 5$ turun ke kanan, garis $x - y = 1$ naik ke kanan. Tabel berikut menunjukkan nilai $y$ kedua garis untuk beberapa nilai $x$. Kedua garis bertemu di tempat nilai $y$-nya sama.

```
  x               0    1    2    3    4    5
  y (x + y = 5)   5    4    3    2    1    0
  y (x - y = 1)  -1    0    1    2    3    4
                                 ^
                          sama: titik potong (3, 2)
```

Pada kertas berpetak, kedua garis berpotongan di $(3, 2)$.

4. **Cek jawaban.** $3 + 2 = 5$, benar. $3 - 2 = 1$, benar. Dua nota cocok dengan satu pasangan yang sama.

**Jawaban:** $x = 3$, $y = 2$.

### Contoh 5: Soal cerita

**Soal.** Di warung Bu Made, 3 tahu dan 2 tempe harganya Rp11.000. Sementara 2 tahu dan 4 tempe harganya Rp14.000. Berapa harga 1 tahu dan 1 tempe?

1. **Langkah 1: Pilih variabel.** Misalkan $t$ = harga 1 tahu, $p$ = harga 1 tempe (dalam rupiah).
2. **Langkah 2: Susun dua persamaan dari dua nota.**
$$3t + 2p = 11.000 \quad\text{(nota A)}$$
$$2t + 4p = 14.000 \quad\text{(nota B)}$$
3. **Langkah 3: Samakan banyak tempe.** Kalikan nota A dengan 2: $6t + 4p = 22.000$.
4. **Langkah 4: Bandingkan nota (kurangkan).** $(6t + 4p) - (2t + 4p) = 22.000 - 14.000$, jadi $4t = 8.000$ dan $t = 2.000$. Selisih harga memang hanya karena tahu.
5. **Langkah 5: Cari harga tempe.** $3(2.000) + 2p = 11.000$, jadi $2p = 5.000$ dan $p = 2.500$.
6. **Cek jawaban.** Nota A: $6.000 + 5.000 = 11.000$, benar. Nota B: $4.000 + 10.000 = 14.000$, benar.

**Jawaban:** 1 tahu Rp2.000 dan 1 tempe Rp2.500.

## Kesalahan yang sering terjadi

- **Hanya mengalikan satu ruas.** Mengalikan $3x + 2y = 16$ dengan 3 menjadi $9x + 6y = 16$. Seluruh nota harus difotokopi, termasuk totalnya: $9x + 6y = 48$.
- **Salah tanda saat mengurangkan.** Dari $(6t + 4p) - (2t + 4p)$, ada yang menulis $4t + 8p$. Kurung di depan tanda minus membuat setiap suku berganti tanda: $6t - 2t + 4p - 4p = 4t$.
- **Menjumlah padahal koefisien sama tandanya.** Jika koefisien $y$ adalah $+4$ dan $+4$, menjumlahkan menghasilkan $8y$, bukan 0. Koefisien **sama** → kurangkan; koefisien **berlawanan** → jumlahkan.
- **Berhenti setelah satu variabel.** Menjawab "$x = 4$" saja. Sistem ini meminta pasangan $(x, y)$, jadi cari juga $y$.
- **Cek hanya di satu persamaan.** Jawaban harus memenuhi **kedua** persamaan. Hitungan yang salah sering tetap cocok di persamaan yang dipakai untuk mencari variabel kedua.

## Ringkasan

- Grafik $ax + by = c$ adalah garis lurus; gambar dengan titik potong sumbu ($x = 0$ dan $y = 0$).
- Penyelesaian SPLDV adalah pasangan $(x, y)$ yang memenuhi kedua persamaan, yaitu titik potong kedua garis.
- Substitusi: tukar satu variabel dengan bentuk yang setara.
- Eliminasi: samakan koefisien satu variabel, lalu jumlahkan atau kurangkan.
- Soal cerita: tentukan dua variabel, tulis dua persamaan dari dua informasi, selesaikan, lalu cek di kedua persamaan.

## Cek pemahaman

1. Selesaikan dengan substitusi: $y = x + 2$ dan $2x + y = 11$.
2. Selesaikan dengan eliminasi: $x + 2y = 10$ dan $x - 2y = 2$.
3. Selesaikan: $2x + 5y = 1$ dan $3x - 2y = 11$.
4. Garis $y = 2x$ dan garis $x + y = 6$ berpotongan di titik mana?
5. Harga tiket masuk kebun binatang untuk 2 dewasa dan 3 anak adalah Rp95.000. Untuk 1 dewasa dan 2 anak, harganya Rp55.000. Berapa harga tiket dewasa dan tiket anak?

### Kunci jawaban

1. $x = 3$, $y = 5$. Substitusi memberi $2x + x + 2 = 11$, jadi $3x = 9$.
2. $x = 6$, $y = 2$. Jumlahkan: $2x = 12$; lalu $6 + 2y = 10$.
3. $x = 3$, $y = -1$. Kalikan persamaan pertama dengan 3 dan kedua dengan 2, kurangkan: $19y = -19$; lalu $2x - 5 = 1$.
4. $(2, 4)$. Substitusi $y = 2x$: $3x = 6$, jadi $x = 2$ dan $y = 4$.
5. Dewasa Rp25.000, anak Rp15.000. Kalikan persamaan kedua dengan 2: $2d + 4a = 110.000$; kurangkan dengan $2d + 3a = 95.000$ memberi $a = 15.000$.
