---
id: smp2-04-fungsi-kuadrat
judul: Fungsi Kuadrat dan Grafiknya
jenjang: smp2
moe: "Secondary 2 · Number and Algebra · N6 Functions and graphs"
prasyarat: [smp1-08-fungsi-linear, smp2-02-ekspansi-faktorisasi]
durasi_menit: 60
---

## Kenapa belajar ini?

Bola yang ditendang, air dari air mancur, dan kabel jembatan gantung semuanya membentuk lengkungan yang sama, yaitu **parabola**. Fungsi kuadrat membantu kita menjawab pertanyaan seperti "seberapa tinggi bola naik?" atau "kapan bola mencapai titik tertinggi?".

## Analogi

Bayangkan **air yang menyembur dari selang** yang diarahkan miring ke atas. Air naik, melambat, mencapai **puncak**, lalu turun lagi. Lengkungannya **simetris**: bagian naik dan bagian turun seperti bayangan cermin.

Sekarang bayangkan lengkungan itu dibalik, seperti **mangkuk**. Mangkuk punya **titik terendah** di dasarnya.

- Lengkungan air mancur: terbuka ke bawah, punya titik **maksimum**.
- Mangkuk: terbuka ke atas, punya titik **minimum**.
- Garis tegak yang membelah lengkungan menjadi dua bagian kembar adalah **garis lipatan cermin**, disebut **sumbu simetri**.

Kita akan memakai air mancur, mangkuk, dan garis lipatan ini di setiap contoh.

## Konsep

### Bentuk fungsi kuadrat

Fungsi kuadrat berbentuk

$$y = ax^2 + bx + c, \qquad a \neq 0$$

Pangkat tertinggi $x$ adalah 2. Kalau $a = 0$, suku $x^2$ hilang dan fungsinya menjadi linear.

Grafiknya disebut **parabola**. Berbeda dengan fungsi linear, perubahan $y$ tidak tetap: kadang naik, kadang turun, sehingga grafiknya melengkung.

### Arah buka parabola

Lihat tanda $a$:

- $a > 0$: terbuka ke **atas**, seperti mangkuk. Punya titik **minimum**.
- $a < 0$: terbuka ke **bawah**, seperti air mancur. Punya titik **maksimum**.

Kenapa? Untuk $x$ yang sangat besar atau sangat kecil (negatif), suku $ax^2$ jauh lebih besar dari suku lain. Kalau $a$ positif, $ax^2$ sangat besar positif, sehingga kedua ujung grafik naik. Kalau $a$ negatif, kedua ujung turun.

### Titik potong sumbu-$y$

Saat $x = 0$, $y = c$. Jadi parabola memotong sumbu-$y$ di $(0, c)$.

### Sumbu simetri dan titik balik

Titik paling rendah atau paling tinggi disebut **titik balik** (titik minimum atau maksimum). Sumbu simetri selalu melewati titik balik.

**Cara menemukan sumbu simetri:** cari **dua titik dengan nilai $y$ sama**. Sumbu simetri tepat di tengah-tengahnya:

$$x = \frac{x_1 + x_2}{2}$$

Ini seperti garis lipatan: dua titik kembar berjarak sama dari lipatan.

Cara cepat memakai faktorisasi: $y = c$ saat $ax^2 + bx = 0$, yaitu $x(ax + b) = 0$. Jadi $x = 0$ atau $x = -\frac{b}{a}$. Tengah-tengahnya:

$$x = -\frac{b}{2a}$$

Setelah sumbu simetri diketahui, masukkan nilai $x$ itu ke fungsi untuk mendapat $y$ titik balik.

### Menggambar parabola

1. Buat tabel nilai $x$ dan $y$, sebaiknya dengan sumbu simetri di tengah.
2. Gambar titik-titiknya.
3. Hubungkan dengan **kurva mulus**, bukan garis patah. Puncak atau dasarnya melengkung, bukan runcing.
4. Tandai titik balik dan sumbu simetri.

## Contoh langkah demi langkah

### Contoh 1: Tabel dan grafik

**Soal.** Gambar grafik $y = x^2 - 2x - 3$ untuk $-2 \le x \le 4$. Tentukan arah buka, titik potong sumbu, sumbu simetri, dan titik minimum.

Tabel dan grafik yang dipakai:

```
x  | -2  -1   0   1   2   3   4
---+----------------------------
y  |  5   0  -3  -4  -3   0   5
```

```
  5 *       |               *
  4         |
  3         |
  2         |
  1         |
  0 +---*---+---+---+---*---+
 -1         |
 -2         |
 -3         *       *
 -4         |   *
    -2  -1  0   1   2   3   4
```

1. **Langkah 1: Hitung tabel.** Contoh: $x = -2$ memberi $4 + 4 - 3 = 5$; $x = 1$ memberi $1 - 2 - 3 = -4$.
2. **Langkah 2: Tentukan arah buka.** $a = 1 > 0$, jadi seperti mangkuk, terbuka ke atas.
3. **Langkah 3: Baca titik potong.** Sumbu-$y$ di $(0, -3)$. Sumbu-$x$ di $(-1, 0)$ dan $(3, 0)$.
4. **Langkah 4: Cari sumbu simetri.** Pasangan kembar $y = 0$ di $x = -1$ dan $x = 3$. Tengahnya $\frac{-1 + 3}{2} = 1$. Sumbu simetri $x = 1$.
5. **Langkah 5: Titik minimum.** Di $x = 1$, $y = -4$. Titik minimum $(1, -4)$.
6. **Cek jawaban.** Pasangan kembar lain: $x = -2$ dan $x = 4$ sama-sama $y = 5$, tengahnya juga 1. Rumus cepat: $-\frac{-2}{2(1)} = 1$. Cocok.

**Jawaban:** Terbuka ke atas, memotong sumbu-$y$ di $(0, -3)$, sumbu-$x$ di $(-1, 0)$ dan $(3, 0)$, sumbu simetri $x = 1$, titik minimum $(1, -4)$.

### Contoh 2: Parabola terbuka ke bawah

**Soal.** Untuk $y = -x^2 + 4x + 1$, buat tabel $0 \le x \le 4$. Tentukan arah buka, sumbu simetri, dan titik maksimum.

Tabel nilai yang dipakai:

```
x  |  0   1   2   3   4
---+--------------------
y  |  1   4   5   4   1
```

1. **Langkah 1: Hitung tabel.** Contoh: $x = 1$ memberi $-1 + 4 + 1 = 4$; $x = 3$ memberi $-9 + 12 + 1 = 4$.
2. **Langkah 2: Tentukan arah buka.** $a = -1 < 0$, seperti air mancur, terbuka ke bawah.
3. **Langkah 3: Cari pasangan kembar.** $y = 1$ di $x = 0$ dan $x = 4$. Tengahnya $x = 2$.
4. **Langkah 4: Titik maksimum.** Di $x = 2$: $-4 + 8 + 1 = 5$. Titik maksimum $(2, 5)$.
5. **Cek jawaban.** Rumus cepat: $-\frac{4}{2(-1)} = 2$. Pasangan $x = 1$ dan $x = 3$ juga sama-sama $y = 4$. Cocok.

**Jawaban:** Terbuka ke bawah, sumbu simetri $x = 2$, titik maksimum $(2, 5)$.

### Contoh 3: Tanpa tabel lengkap

**Soal.** Tentukan sumbu simetri dan titik balik $y = 2x^2 + 8x + 5$. Apakah titik itu maksimum atau minimum?

1. **Langkah 1: Cari pasangan kembar dengan faktorisasi.** $y = 5$ saat $2x^2 + 8x = 0$, yaitu $2x(x + 4) = 0$. Jadi $x = 0$ atau $x = -4$.
2. **Langkah 2: Cari garis lipatan.** $\frac{0 + (-4)}{2} = -2$. Sumbu simetri $x = -2$.
3. **Langkah 3: Hitung $y$ di sumbu.** $2(-2)^2 + 8(-2) + 5 = 8 - 16 + 5 = -3$.
4. **Langkah 4: Tentukan jenisnya.** $a = 2 > 0$, mangkuk, jadi titik minimum.
5. **Cek jawaban.** Titik kembar di sekitar sumbu: $x = -1$ memberi $2 - 8 + 5 = -1$, dan $x = -3$ memberi $18 - 24 + 5 = -1$. Sama, dan keduanya lebih besar dari $-3$. Cocok.

**Jawaban:** Sumbu simetri $x = -2$, titik minimum $(-2, -3)$.

### Contoh 4: Soal cerita bola ditendang

**Soal.** Made menendang bola ke atas. Tinggi bola $h$ meter setelah $t$ detik adalah $h = -5t^2 + 20t$. Kapan bola mencapai tinggi maksimum, dan berapa tingginya? Kapan bola kembali ke tanah?

1. **Langkah 1: Tentukan arah buka.** $a = -5 < 0$, seperti air mancur, jadi ada tinggi maksimum.
2. **Langkah 2: Cari saat bola di tanah.** $h = 0$ saat $-5t^2 + 20t = 0$, yaitu $-5t(t - 4) = 0$. Jadi $t = 0$ (saat ditendang) atau $t = 4$ (saat jatuh).
3. **Langkah 3: Cari sumbu simetri.** Tengah antara 0 dan 4 adalah $t = 2$.
4. **Langkah 4: Hitung tinggi maksimum.** $h = -5(2)^2 + 20(2) = -20 + 40 = 20$ meter.
5. **Cek jawaban.** $t = 1$ memberi $-5 + 20 = 15$, dan $t = 3$ memberi $-45 + 60 = 15$. Simetris terhadap $t = 2$, dan keduanya lebih rendah dari 20. Cocok.

**Jawaban:** Tinggi maksimum 20 m pada detik ke-2; bola kembali ke tanah pada detik ke-4.

## Kesalahan yang sering terjadi

- **Salah menentukan arah buka.** Melihat tanda $c$ atau $b$. Arah buka hanya ditentukan tanda $a$, koefisien $x^2$.
- **Salah menghitung kuadrat bilangan negatif.** Menulis $(-2)^2 = -4$, atau menulis $-x^2$ untuk $x = -2$ sebagai $+4$. Ingat: $(-2)^2 = 4$, sedangkan $-x^2 = -(x^2) = -4$.
- **Menyambung titik dengan garis patah.** Parabola adalah kurva mulus. Titik balik melengkung, bukan runcing seperti huruf V.
- **Menulis sumbu simetri sebagai titik.** Sumbu simetri adalah garis, ditulis $x = 1$, bukan $(1, -4)$.
- **Lupa tanda negatif pada rumus cepat.** Untuk $y = x^2 - 2x - 3$ menulis $x = \frac{-2}{2} = -1$. Yang benar $x = -\frac{-2}{2} = 1$.

## Ringkasan

- Fungsi kuadrat $y = ax^2 + bx + c$ ($a \neq 0$) grafiknya parabola.
- $a > 0$: terbuka ke atas (mangkuk), titik minimum. $a < 0$: terbuka ke bawah (air mancur), titik maksimum.
- Memotong sumbu-$y$ di $(0, c)$.
- Sumbu simetri ada di tengah dua titik dengan $y$ sama; cara cepat $x = -\frac{b}{2a}$.
- Titik balik: masukkan nilai $x$ sumbu simetri ke fungsi.
- Gambar dengan tabel nilai dan kurva mulus.

## Cek pemahaman

1. Untuk $y = 3x^2 - x + 7$, ke mana parabola terbuka, dan di mana memotong sumbu-$y$?
2. Untuk $y = -2x^2 + 5$, tentukan arah buka, sumbu simetri, dan titik baliknya.
3. Untuk $y = x^2 - 6x + 5$, tentukan sumbu simetri dan titik minimum.
4. Sebuah parabola melalui titik $(-1, 6)$ dan $(5, 6)$. Tentukan sumbu simetrinya.
5. Tinggi roket air Putu $h = -5t^2 + 30t$ meter setelah $t$ detik. Berapa tinggi maksimumnya?

### Kunci jawaban

1. Terbuka ke atas karena $a = 3 > 0$; memotong sumbu-$y$ di $(0, 7)$.
2. Terbuka ke bawah, sumbu simetri $x = 0$, titik maksimum $(0, 5)$. Tidak ada suku $x$, jadi $b = 0$.
3. Sumbu simetri $x = 3$, titik minimum $(3, -4)$. $y = 5$ di $x = 0$ dan $x = 6$; $9 - 18 + 5 = -4$.
4. $x = 2$. Tengah dari $-1$ dan $5$ adalah $\frac{-1 + 5}{2} = 2$.
5. 45 meter. $h = 0$ di $t = 0$ dan $t = 6$, sumbu $t = 3$, $h = -45 + 90 = 45$.
