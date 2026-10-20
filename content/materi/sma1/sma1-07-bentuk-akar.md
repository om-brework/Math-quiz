---
id: sma1-07-bentuk-akar
judul: Bentuk Akar (Surd)
jenjang: sma1
moe: "Additional Mathematics · A3 Surds"
prasyarat: [smp1-02-bilangan-bulat-real, smp2-02-ekspansi-faktorisasi, smp3-02-persamaan-kuadrat-lanjut]
durasi_menit: 50
---

## Kenapa belajar ini?

Diagonal ubin persegi bersisi 1 m panjangnya $\sqrt{2}$ m, bukan 1,41 m. Angka 1,41 hanyalah pendekatan. Dalam fisika, teknik, dan matematika lanjut, kita sering perlu jawaban **eksak**. Bentuk akar membuat perhitungan tetap tepat sampai akhir.

## Analogi

Perlakukan setiap bentuk akar seperti **jenis buah**. Misalnya $\sqrt{2}$ adalah "apel" dan $\sqrt{3}$ adalah "jeruk".

- $3\sqrt{2} + 5\sqrt{2} = 8\sqrt{2}$, sama seperti 3 apel + 5 apel = 8 apel.
- $\sqrt{2} + \sqrt{3}$ tidak bisa digabung, sama seperti apel + jeruk tetap "apel + jeruk".
- Kadang buah terlihat beda padahal sama. $\sqrt{8}$ ternyata $2\sqrt{2}$, yaitu "2 apel" yang disamarkan. Menyederhanakan akar berarti membuka samarannya.

## Konsep

### Apa itu bentuk akar

Untuk $a \ge 0$, $\sqrt{a}$ adalah bilangan **tak negatif** yang kuadratnya $a$. **Bentuk akar (surd)** adalah akar yang hasilnya bilangan irasional, seperti $\sqrt{2}$, $\sqrt{5}$, $\sqrt{12}$. Bilangan $\sqrt{9} = 3$ bukan surd.

### Sifat dasar

Untuk $a, b > 0$:

$$
\sqrt{ab} = \sqrt{a}\,\sqrt{b}, \qquad \sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}}, \qquad \sqrt{a}\,\sqrt{a} = a
$$

Alasannya: $(\sqrt{a}\sqrt{b})^2 = (\sqrt{a})^2(\sqrt{b})^2 = ab$, dan $\sqrt{a}\sqrt{b} \ge 0$. Jadi $\sqrt{a}\sqrt{b}$ adalah akar tak negatif dari $ab$.

**Hati-hati:** $\sqrt{a + b} \ne \sqrt{a} + \sqrt{b}$. Contoh: $\sqrt{9 + 16} = 5$, tetapi $\sqrt{9} + \sqrt{16} = 7$.

### Menyederhanakan

Cari faktor kuadrat sempurna terbesar: $\sqrt{72} = \sqrt{36 \times 2} = 6\sqrt{2}$. Bentuk sederhana berarti angka di dalam akar tidak punya faktor kuadrat sempurna selain 1.

### Operasi

- **Tambah/kurang:** hanya akar sejenis (buah yang sama).
- **Kali:** kalikan bagian luar dengan bagian luar, akar dengan akar: $2\sqrt{3} \times 5\sqrt{6} = 10\sqrt{18} = 30\sqrt{2}$.
- **Ekspansi:** gunakan distributif seperti pada aljabar, ingat $\sqrt{a}\sqrt{a} = a$.

### Merasionalkan penyebut

Penyebut yang memuat akar kita ubah menjadi bilangan rasional, supaya hasil mudah dibandingkan dan dihitung.

- Bentuk $\dfrac{k}{\sqrt{b}}$: kalikan atas-bawah dengan $\sqrt{b}$.
- Bentuk $\dfrac{k}{a + \sqrt{b}}$: kalikan atas-bawah dengan **sekawan** $a - \sqrt{b}$, karena

$$
(a + \sqrt{b})(a - \sqrt{b}) = a^2 - b
$$

yang bebas dari akar. Dalam analogi, sekawan adalah "pasangan" yang membuat semua apel saling meniadakan. Hal yang sama berlaku untuk $\sqrt{a} + \sqrt{b}$ dengan sekawan $\sqrt{a} - \sqrt{b}$.

### Persamaan yang memuat bentuk akar

**Jenis 1: koefisien berbentuk akar.** Selesaikan seperti persamaan biasa, lalu rasionalkan. Jika $p + q\sqrt{2} = r + s\sqrt{2}$ dengan $p, q, r, s$ rasional, maka $p = r$ dan $q = s$ (bagian rasional sama, bagian akar sama).

**Jenis 2: variabel di dalam akar.** Contoh $\sqrt{2x + 7} = x + 2$. Pisahkan akar di satu ruas, kuadratkan kedua ruas, lalu selesaikan. Mengkuadratkan bisa memunculkan **akar palsu**, karena $(-3)^2 = 3^2$. Jadi setiap jawaban **wajib** dicek ke persamaan awal.

## Contoh langkah demi langkah

### Contoh 1: Menyederhanakan dan menjumlahkan

**Soal.** Sederhanakan $\sqrt{72} + \sqrt{18} - \sqrt{8}$.

1. **Langkah 1: Buka samaran tiap akar.** $\sqrt{72} = \sqrt{36 \times 2} = 6\sqrt{2}$. $\sqrt{18} = \sqrt{9 \times 2} = 3\sqrt{2}$. $\sqrt{8} = \sqrt{4 \times 2} = 2\sqrt{2}$.
2. **Langkah 2: Gabungkan buah sejenis.** $6\sqrt{2} + 3\sqrt{2} - 2\sqrt{2} = 7\sqrt{2}$.
3. **Cek jawaban.** Dengan kalkulator: $8{,}485 + 4{,}243 - 2{,}828 = 9{,}900$, dan $7 \times 1{,}4142 = 9{,}899$. Cocok (selisih karena pembulatan).

**Jawaban:** $7\sqrt{2}$.

### Contoh 2: Ekspansi dua kurung

**Soal.** Sederhanakan $(3 + \sqrt{5})(2 - \sqrt{5})$.

1. **Langkah 1: Kalikan setiap suku.** $3 \cdot 2 - 3\sqrt{5} + 2\sqrt{5} - \sqrt{5}\sqrt{5}$.
2. **Langkah 2: Pakai $\sqrt{5}\sqrt{5} = 5$.** $6 - 3\sqrt{5} + 2\sqrt{5} - 5$.
3. **Langkah 3: Kelompokkan.** Bagian rasional: $6 - 5 = 1$. Bagian akar: $-3\sqrt{5} + 2\sqrt{5} = -\sqrt{5}$.
4. **Cek jawaban.** $3 + \sqrt{5} \approx 5{,}236$ dan $2 - \sqrt{5} \approx -0{,}236$. Hasil kali $\approx -1{,}236$. Lalu $1 - \sqrt{5} \approx -1{,}236$. Cocok.

**Jawaban:** $1 - \sqrt{5}$.

### Contoh 3: Merasionalkan dengan sekawan

**Soal.** Rasionalkan $\dfrac{2 + \sqrt{3}}{2 - \sqrt{3}}$.

1. **Langkah 1: Tentukan sekawan penyebut.** Penyebut $2 - \sqrt{3}$, sekawannya $2 + \sqrt{3}$.
2. **Langkah 2: Kalikan atas dan bawah.** $\dfrac{(2 + \sqrt{3})^2}{(2 - \sqrt{3})(2 + \sqrt{3})}$.
3. **Langkah 3: Hitung penyebut.** $2^2 - 3 = 1$.
4. **Langkah 4: Hitung pembilang.** $(2 + \sqrt{3})^2 = 4 + 4\sqrt{3} + 3 = 7 + 4\sqrt{3}$.
5. **Cek jawaban.** $\frac{3{,}732}{0{,}268} \approx 13{,}93$ dan $7 + 4(1{,}732) = 13{,}93$. Cocok.

**Jawaban:** $7 + 4\sqrt{3}$.

### Contoh 4: Persamaan dengan variabel di dalam akar

**Soal.** Selesaikan $\sqrt{2x + 7} = x + 2$.

1. **Langkah 1: Pastikan akar sendirian di satu ruas.** Sudah: ruas kiri hanya akar.
2. **Langkah 2: Kuadratkan kedua ruas.** $2x + 7 = x^2 + 4x + 4$.
3. **Langkah 3: Susun dan faktorkan.** $x^2 + 2x - 3 = 0 \Rightarrow (x + 3)(x - 1) = 0$. Calon jawaban $x = 1$ atau $x = -3$.
4. **Cek jawaban.** $x = 1$: kiri $\sqrt{9} = 3$, kanan $3$. Benar. $x = -3$: kiri $\sqrt{1} = 1$, kanan $-1$. Salah, karena akar tidak pernah negatif. Jadi $x = -3$ akar palsu.

**Jawaban:** $x = 1$.

### Contoh 5: Soal cerita, karton Putu

**Soal.** Putu memotong karton persegi panjang dengan luas $(8 + 2\sqrt{3})$ cm$^2$ dan lebar $(1 + \sqrt{3})$ cm. Tentukan panjangnya dalam bentuk $a + b\sqrt{3}$.

1. **Langkah 1: Susun persamaan.** Panjang $= \dfrac{\text{luas}}{\text{lebar}} = \dfrac{8 + 2\sqrt{3}}{1 + \sqrt{3}}$.
2. **Langkah 2: Kalikan dengan sekawan.** Sekawan $1 + \sqrt{3}$ adalah $\sqrt{3} - 1$. Penyebut menjadi $(\sqrt{3})^2 - 1^2 = 2$.
3. **Langkah 3: Hitung pembilang.** $(8 + 2\sqrt{3})(\sqrt{3} - 1) = 8\sqrt{3} - 8 + 6 - 2\sqrt{3} = 6\sqrt{3} - 2$.
4. **Langkah 4: Bagi.** $\dfrac{6\sqrt{3} - 2}{2} = 3\sqrt{3} - 1$.
5. **Cek jawaban.** Kalikan balik: $(1 + \sqrt{3})(3\sqrt{3} - 1) = 3\sqrt{3} - 1 + 9 - \sqrt{3} = 8 + 2\sqrt{3}$. Sama dengan luas. Cocok.

**Jawaban:** panjang $(-1 + 3\sqrt{3})$ cm, yaitu sekitar 4,20 cm.

## Kesalahan yang sering terjadi

- **Memecah akar penjumlahan.** Menulis $\sqrt{x^2 + 9} = x + 3$. Akar tidak bisa dipecah pada penjumlahan; cek dengan $x = 4$: $\sqrt{25} = 5$, bukan 7.
- **Menggabung akar yang tidak sejenis.** Menulis $\sqrt{2} + \sqrt{3} = \sqrt{5}$. Apel + jeruk tidak menjadi buah baru.
- **Salah memilih pengali.** Untuk $\frac{4}{3 - \sqrt{5}}$, mengalikan dengan $\sqrt{5}$ saja tidak menghilangkan akar. Pakai sekawan $3 + \sqrt{5}$, sehingga hasilnya $\frac{4(3 + \sqrt{5})}{4} = 3 + \sqrt{5}$.
- **Tidak mengecek akar palsu.** Setelah mengkuadratkan, setiap calon jawaban harus disubstitusi ke persamaan awal.
- **Lupa menyederhanakan.** Jawaban $\sqrt{50}$ belum selesai; tulis $5\sqrt{2}$.

## Ringkasan

- $\sqrt{ab} = \sqrt{a}\sqrt{b}$ dan $\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}}$, tetapi $\sqrt{a + b} \ne \sqrt{a} + \sqrt{b}$.
- Sederhanakan dengan mengeluarkan faktor kuadrat sempurna terbesar.
- Hanya akar sejenis yang bisa dijumlahkan.
- Rasionalkan dengan sekawan: $(a + \sqrt{b})(a - \sqrt{b}) = a^2 - b$.
- Setelah mengkuadratkan persamaan, selalu cek akar palsu.

## Cek pemahaman

1. Sederhanakan $\sqrt{48} - \sqrt{12}$.
2. Sederhanakan $(\sqrt{7} + 2)(\sqrt{7} - 2)$.
3. Rasionalkan $\dfrac{6}{\sqrt{3}}$.
4. Rasionalkan $\dfrac{1}{\sqrt{5} - \sqrt{2}}$.
5. Selesaikan $\sqrt{x + 3} = x - 3$.

### Kunci jawaban

1. $2\sqrt{3}$, karena $4\sqrt{3} - 2\sqrt{3} = 2\sqrt{3}$.
2. $3$, karena bentuk sekawan: $7 - 4 = 3$.
3. $2\sqrt{3}$, karena $\frac{6\sqrt{3}}{3} = 2\sqrt{3}$.
4. $\dfrac{\sqrt{5} + \sqrt{2}}{3}$, karena penyebut menjadi $5 - 2 = 3$.
5. $x = 6$. Kuadratkan: $x^2 - 7x + 6 = 0$, calon $x = 1$ atau $6$; $x = 1$ palsu karena $\sqrt{4} = 2 \ne -2$.
