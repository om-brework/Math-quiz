---
id: smp3-06-geometri-koordinat
judul: Geometri Koordinat
jenjang: smp3
moe: "Secondary 3 · Geometry and Measurement · G6 Coordinate geometry"
prasyarat: [smp1-08-fungsi-linear, smp2-09-pythagoras-trigonometri]
durasi_menit: 45
---

## Kenapa belajar ini?

Aplikasi peta di ponselmu menyimpan setiap tempat sebagai pasangan koordinat. Dari dua koordinat, aplikasi bisa menghitung jarak lurus, arah, dan rumus garis yang menghubungkannya. Di bab ini kamu belajar melakukan hal yang sama dengan pensil dan kalkulator.

## Analogi

Bayangkan sebuah **kota yang jalannya berpetak**, seperti kertas berpetak. Seorang **pengemudi ojek** berangkat dari titik $A$ menuju titik $B$.

- Ia harus **geser ke kanan atau kiri** sejauh selisih $x$, dan **naik atau turun** sejauh selisih $y$.
- **Gradien** menjawab: "Setiap geser 1 petak ke kanan, berapa petak naik?" Ini ukuran kecuraman jalan dari $A$ ke $B$.
- **Panjang ruas garis** adalah jarak **lurus seperti burung terbang** dari $A$ ke $B$, bukan jarak ojek yang berbelok di perempatan. Geser dan naik membentuk dua sisi siku-siku, jadi jarak lurusnya dihitung dengan Pythagoras.

## Konsep

### Gradien garis melalui dua titik

Untuk titik $A(x_1, y_1)$ dan $B(x_2, y_2)$:

$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{\text{naik}}{\text{geser}}$$

- $m > 0$: garis naik dari kiri ke kanan.
- $m < 0$: garis turun dari kiri ke kanan.
- $m = 0$: garis mendatar (naik = 0).
- Garis tegak: geser = 0, gradien tidak terdefinisi.

Urutan titik tidak penting, asalkan **atas dan bawah memakai urutan yang sama**. Membalik urutan membalik tanda pembilang dan penyebut sekaligus, jadi hasilnya sama.

**Garis sejajar punya gradien sama**, karena kecuraman jalannya sama.

### Panjang ruas garis

Geser $= x_2 - x_1$ dan naik $= y_2 - y_1$ adalah sisi siku-siku sebuah segitiga. Ruas $AB$ adalah sisi miringnya. Menurut Pythagoras:

$$AB = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

Tanda selisih tidak berpengaruh karena dikuadratkan.

### Persamaan garis $y = mx + c$

- $m$ adalah gradien.
- $c$ adalah titik potong sumbu-$y$, karena saat $x = 0$, $y = c$.

**Cara mencari persamaan garis** dari dua titik:

1. Hitung $m$ dari dua titik.
2. Substitusi salah satu titik ke $y = mx + c$ untuk mencari $c$.
3. Tulis persamaannya, lalu cek dengan titik yang lain.

Sebuah titik terletak **pada garis** jika koordinatnya memenuhi persamaan garis.

Jika persamaan tidak dalam bentuk $y = mx + c$, ubah dulu. Contoh: $2y = 6x - 8$ menjadi $y = 3x - 4$, jadi $m = 3$ dan $c = -4$.

### Soal geometri dengan koordinat

Dengan rumus panjang, kita bisa membuktikan sifat bangun:

- Dua sisi sama panjang: segitiga sama kaki.
- $AB^2 + BC^2 = AC^2$: segitiga siku-siku di $B$ (kebalikan teorema Pythagoras).
- Gradien sama: sisi-sisinya sejajar, misalnya pada jajargenjang.

## Contoh langkah demi langkah

### Contoh 1: Gradien dan panjang

**Soal.** Diketahui $A(1, 2)$ dan $B(5, 10)$. Hitung gradien $AB$ dan panjang $AB$.

1. **Langkah 1: Hitung geser dan naik.** Geser $= 5 - 1 = 4$. Naik $= 10 - 2 = 8$.
2. **Langkah 2: Gradien.** $m = \frac{8}{4} = 2$. Setiap geser 1 petak ke kanan, naik 2 petak.
3. **Langkah 3: Panjang.** $AB = \sqrt{4^2 + 8^2} = \sqrt{16 + 64} = \sqrt{80} = 4\sqrt{5} \approx 8{,}94$ satuan.
4. **Cek jawaban.** Jarak lurus harus lebih panjang dari sisi terpanjang (8) dan lebih pendek dari jarak ojek $4 + 8 = 12$. Nilai $8{,}94$ ada di antaranya.

**Jawaban:** Gradien 2, panjang $\sqrt{80} \approx 8{,}94$ satuan.

### Contoh 2: Persamaan garis dari dua titik

**Soal.** Tentukan persamaan garis melalui $P(-2, 7)$ dan $Q(4, -5)$.

1. **Langkah 1: Gradien.** $m = \frac{-5 - 7}{4 - (-2)} = \frac{-12}{6} = -2$. Garis turun.
2. **Langkah 2: Cari $c$.** Substitusi $P(-2, 7)$ ke $y = -2x + c$: $7 = -2(-2) + c = 4 + c$, jadi $c = 3$.
3. **Langkah 3: Tulis persamaan.** $y = -2x + 3$.
4. **Cek jawaban.** Masukkan $Q(4, -5)$: $-2(4) + 3 = -8 + 3 = -5$. Cocok.

**Jawaban:** $y = -2x + 3$.

### Contoh 3: Membuktikan segitiga siku-siku

**Soal.** Titik $A(-1, 2)$, $B(3, 5)$, dan $C(6, 1)$ membentuk segitiga. Tunjukkan bahwa segitiga $ABC$ siku-siku sama kaki, lalu hitung luasnya.

1. **Langkah 1: Hitung kuadrat setiap sisi.** Kuadrat lebih mudah dibandingkan daripada akar.
   - $AB^2 = (3 - (-1))^2 + (5 - 2)^2 = 16 + 9 = 25$.
   - $BC^2 = (6 - 3)^2 + (1 - 5)^2 = 9 + 16 = 25$.
   - $AC^2 = (6 - (-1))^2 + (1 - 2)^2 = 49 + 1 = 50$.
2. **Langkah 2: Uji Pythagoras.** $AB^2 + BC^2 = 25 + 25 = 50 = AC^2$. Jadi sudut di $B$ siku-siku.
3. **Langkah 3: Uji sama kaki.** $AB = BC = 5$. Jadi segitiganya sama kaki.
4. **Langkah 4: Luas.** Kaki siku-sikunya $AB$ dan $BC$: $\text{Luas} = \frac{1}{2} \times 5 \times 5 = 12{,}5$ satuan luas.
5. **Cek jawaban.** Hitung luas dengan cara lain. Segitiga muat dalam persegi panjang dari $x = -1$ sampai $6$ dan $y = 1$ sampai $5$, luasnya $7 \times 4 = 28$. Di luar segitiga ada tiga segitiga siku-siku dengan luas $\frac{1}{2}(4)(3) = 6$, $\frac{1}{2}(3)(4) = 6$, dan $\frac{1}{2}(7)(1) = 3{,}5$. Jadi luas $ABC = 28 - 15{,}5 = 12{,}5$. Sama.

**Jawaban:** Siku-siku di $B$, sama kaki ($AB = BC = 5$), luas $12{,}5$ satuan luas.

### Contoh 4: Soal cerita tarif ojek daring

**Soal.** Tarif ojek daring di Denpasar mengikuti garis lurus. Perjalanan 4 km bertarif Rp18.000 dan perjalanan 10 km bertarif Rp36.000. Tentukan rumus tarif $y$ (rupiah) terhadap jarak $x$ (km), lalu hitung tarif untuk 15 km.

1. **Langkah 1: Ubah ke titik koordinat.** $(4, 18.000)$ dan $(10, 36.000)$.
2. **Langkah 2: Gradien.** $m = \frac{36.000 - 18.000}{10 - 4} = \frac{18.000}{6} = 3.000$. Artinya tarif naik Rp3.000 setiap km.
3. **Langkah 3: Cari $c$.** $18.000 = 3.000 \times 4 + c = 12.000 + c$, jadi $c = 6.000$. Ini biaya awal (buka pintu) Rp6.000.
4. **Langkah 4: Rumus dan tarif 15 km.** $y = 3.000x + 6.000$. Untuk $x = 15$: $y = 45.000 + 6.000 = 51.000$.
5. **Cek jawaban.** Titik kedua: $3.000 \times 10 + 6.000 = 36.000$. Cocok. Tarif 15 km juga harus lebih dari Rp36.000, dan memang begitu.

**Jawaban:** $y = 3.000x + 6.000$; tarif 15 km adalah Rp51.000.

## Kesalahan yang sering terjadi

- **Urutan pengurangan tidak konsisten.** Menghitung $\frac{y_2 - y_1}{x_1 - x_2}$ membuat tanda gradien terbalik. Kalau pembilang dimulai dari titik $B$, penyebut juga dimulai dari $B$.
- **Gradien dibalik.** Menulis $\frac{\text{geser}}{\text{naik}}$. Ingat ojek: "naik per geser", jadi selisih $y$ di atas.
- **Lupa tanda kurung saat mengurangi bilangan negatif.** $4 - (-2) = 6$, bukan 2.
- **Mengira $c$ selalu angka di belakang.** Pada $2y = 6x - 8$, $c$ bukan $-8$. Bagi dulu semua suku dengan 2: $c = -4$.
- **Menjumlahkan sebelum mengkuadratkan.** $\sqrt{(4 + 8)^2}$ adalah jarak ojek, bukan jarak lurus. Kuadratkan masing-masing dulu: $\sqrt{4^2 + 8^2}$.

## Ringkasan

- Gradien: $m = \frac{y_2 - y_1}{x_2 - x_1}$ (naik dibagi geser). Garis sejajar punya gradien sama.
- Panjang ruas garis: $\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, berasal dari Pythagoras.
- Persamaan garis $y = mx + c$: $m$ gradien, $c$ titik potong sumbu-$y$.
- Langkah mencari persamaan: hitung $m$, substitusi satu titik untuk $c$, cek dengan titik lain.
- Sifat bangun dibuktikan dengan panjang sisi (Pythagoras, sama kaki) dan gradien (sejajar).

## Cek pemahaman

1. Hitung gradien garis melalui $(2, -3)$ dan $(6, 5)$.
2. Hitung jarak antara $(-2, 1)$ dan $(4, 9)$.
3. Tentukan persamaan garis dengan gradien $-3$ yang melalui $(1, 4)$.
4. Garis melalui $(0, -2)$ dan $(3, 4)$. Tentukan persamaannya, lalu periksa apakah $(5, 8)$ terletak pada garis itu.
5. Tentukan gradien dan titik potong sumbu-$y$ dari $2y = 6x - 8$. Lalu tentukan persamaan garis yang sejajar dengannya dan melalui $(1, 1)$.

### Kunci jawaban

1. $m = \frac{5 - (-3)}{6 - 2} = \frac{8}{4} = 2$.
2. $\sqrt{6^2 + 8^2} = \sqrt{100} = 10$ satuan.
3. $4 = -3(1) + c$, jadi $c = 7$; persamaannya $y = -3x + 7$.
4. $m = \frac{4 - (-2)}{3} = 2$ dan $c = -2$, jadi $y = 2x - 2$; $2(5) - 2 = 8$, jadi $(5, 8)$ terletak pada garis.
5. $y = 3x - 4$, jadi $m = 3$, $c = -4$; garis sejajar: $1 = 3(1) + c$ memberi $c = -2$, jadi $y = 3x - 2$.
