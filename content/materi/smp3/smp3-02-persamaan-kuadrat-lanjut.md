---
id: smp3-02-persamaan-kuadrat-lanjut
judul: Persamaan Kuadrat Lanjut
jenjang: smp3
moe: "Secondary 3 · Number and Algebra · N7 Equations and inequalities"
prasyarat: [smp2-03-pecahan-aljabar-rumus, smp2-04-fungsi-kuadrat, smp2-07-persamaan-kuadrat]
durasi_menit: 60
---

## Kenapa belajar ini?

Tidak semua persamaan kuadrat bisa difaktorkan dengan bilangan bulat. Coba faktorkan $x^2 - 4x - 3 = 0$: tidak ada dua bilangan bulat yang hasil kalinya $-3$ dan jumlahnya $-4$. Padahal soal sehari-hari, seperti ukuran kebun atau kecepatan perjalanan, sering menghasilkan persamaan seperti ini. Materi ini memberi cara yang **selalu** berhasil.

## Analogi

Bayangkan kamu memasang **ubin keramik** di lantai. Kamu punya:

- satu ubin besar berbentuk persegi, luasnya $x^2$ (sisinya $x$),
- beberapa ubin panjang, masing-masing berukuran $x \times 1$.

Untuk $x^2 + 6x$, kamu punya 1 ubin besar dan 6 ubin panjang. Agar susunannya **berbentuk persegi**, bagi ubin panjang menjadi dua kelompok: 3 di sisi kanan dan 3 di sisi bawah ubin besar. Ternyata ada **satu pojok yang kosong**, berukuran $3 \times 3 = 9$ ubin kecil. Kalau pojok itu diisi, susunannya menjadi persegi utuh bersisi $x + 3$:

$$x^2 + 6x + 9 = (x + 3)^2$$

Cara ini disebut **melengkapkan kuadrat sempurna**: kita "membeli" ubin pojok yang kurang. Analogi ubin ini akan kita pakai untuk menurunkan rumus abc.

## Konsep

### Melengkapkan kuadrat sempurna

Untuk $x^2 + bx$, ubin panjang sebanyak $b$ dibagi dua: $\frac{b}{2}$ di kanan dan $\frac{b}{2}$ di bawah. Pojok yang kosong berukuran $\left(\frac{b}{2}\right)^2$. Jadi:

$$x^2 + bx = \left(x + \frac{b}{2}\right)^2 - \left(\frac{b}{2}\right)^2$$

Kita menambah ubin pojok agar menjadi persegi, lalu menguranginya lagi agar nilainya tidak berubah.

**Cara menyelesaikan $x^2 + bx + c = 0$:**

1. Pindahkan konstanta: $x^2 + bx = -c$.
2. Tambahkan $\left(\frac{b}{2}\right)^2$ ke **kedua ruas**.
3. Tulis ruas kiri sebagai $\left(x + \frac{b}{2}\right)^2$.
4. Akarkan kedua ruas, ingat tanda $\pm$.
5. Selesaikan untuk $x$.

Jika koefisien $x^2$ bukan 1, bagi seluruh persamaan dengan koefisien itu dulu.

### Rumus kuadrat (rumus abc)

Kita lakukan melengkapkan kuadrat pada bentuk umum $ax^2 + bx + c = 0$, dengan $a \ne 0$.

**Bagi dengan $a$:**
$$x^2 + \frac{b}{a}x + \frac{c}{a} = 0$$

**Pindahkan konstanta:**
$$x^2 + \frac{b}{a}x = -\frac{c}{a}$$

**Tambah ubin pojok** $\left(\frac{b}{2a}\right)^2 = \frac{b^2}{4a^2}$ di kedua ruas:
$$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2}{4a^2} - \frac{c}{a} = \frac{b^2 - 4ac}{4a^2}$$

**Akarkan kedua ruas:**
$$x + \frac{b}{2a} = \pm\frac{\sqrt{b^2 - 4ac}}{2a}$$

**Pindahkan** $\frac{b}{2a}$:

$$\boxed{x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}}$$

Jadi rumus abc **bukan** rumus ajaib. Rumus ini adalah hasil melengkapkan kuadrat yang sudah dikerjakan sekali untuk semua persamaan kuadrat.

Bilangan $b^2 - 4ac$ di bawah akar menentukan banyak penyelesaian. Jika $b^2 - 4ac < 0$, tidak ada bilangan real yang kuadratnya negatif, jadi persamaan **tidak punya penyelesaian real**.

### Cara grafik

Penyelesaian $ax^2 + bx + c = 0$ adalah nilai $x$ tempat grafik $y = ax^2 + bx + c$ **memotong sumbu-$x$** (karena di sana $y = 0$). Untuk menyelesaikan $ax^2 + bx + c = k$, cari nilai $x$ tempat parabola memotong garis mendatar $y = k$.

Cara grafik memberi jawaban **perkiraan**, sesuai ketelitian gambar. Jika parabola tidak menyentuh sumbu-$x$, persamaan tidak punya penyelesaian real.

### Persamaan pecahan yang menjadi kuadrat

Persamaan seperti $\frac{3}{x} + \frac{2}{x + 1} = 2$ diselesaikan dengan **mengalikan kedua ruas dengan KPK penyebut**. Hasilnya sering berupa persamaan kuadrat. Ingat: nilai yang membuat penyebut nol (di sini $x = 0$ dan $x = -1$) **tidak boleh** menjadi jawaban.

### Menyusun persamaan dari soal cerita

1. Pilih variabel dan tulis artinya beserta satuannya.
2. Nyatakan besaran lain dalam variabel itu.
3. Susun persamaan dari informasi di soal.
4. Selesaikan, lalu **tolak** jawaban yang tidak masuk akal (panjang negatif, kecepatan negatif).

## Contoh langkah demi langkah

Urutan berpikir: **rapikan ke bentuk baku → pilih cara (faktor, lengkapkan kuadrat, rumus abc, grafik) → hitung → cek dengan substitusi**.

### Contoh 1: Melengkapkan kuadrat

**Soal.** Selesaikan $x^2 - 4x - 3 = 0$ dengan melengkapkan kuadrat. Berikan jawaban dalam bentuk akar dan dalam 2 tempat desimal.

1. **Langkah 1: Pindahkan konstanta.** $x^2 - 4x = 3$.
2. **Langkah 2: Cari ubin pojok.** $b = -4$, jadi $\left(\frac{-4}{2}\right)^2 = (-2)^2 = 4$.
3. **Langkah 3: Tambahkan ke kedua ruas.** $x^2 - 4x + 4 = 3 + 4$, sehingga $(x - 2)^2 = 7$.
4. **Langkah 4: Akarkan, ingat $\pm$.** $x - 2 = \pm\sqrt{7}$.
5. **Langkah 5: Selesaikan.** $x = 2 + \sqrt{7} \approx 4{,}65$ atau $x = 2 - \sqrt{7} \approx -0{,}65$.
6. **Cek jawaban.** Substitusi $x \approx 4{,}646$: $4{,}646^2 - 4(4{,}646) - 3 \approx 21{,}585 - 18{,}584 - 3 \approx 0$. Cocok (selisih kecil karena pembulatan).

**Jawaban:** $x = 2 \pm \sqrt{7}$, yaitu $x \approx 4{,}65$ atau $x \approx -0{,}65$.

### Contoh 2: Rumus abc

**Soal.** Selesaikan $2x^2 + 5x - 4 = 0$ (2 tempat desimal).

1. **Langkah 1: Baca $a$, $b$, $c$.** $a = 2$, $b = 5$, $c = -4$. Perhatikan tanda $c$.
2. **Langkah 2: Hitung bagian di bawah akar.** $b^2 - 4ac = 25 - 4(2)(-4) = 25 + 32 = 57$. Positif, jadi ada dua penyelesaian.
3. **Langkah 3: Masukkan ke rumus.**
$$x = \frac{-5 \pm \sqrt{57}}{2(2)} = \frac{-5 \pm \sqrt{57}}{4}$$
4. **Langkah 4: Hitung kedua nilai.** $\sqrt{57} \approx 7{,}5498$.
$$x \approx \frac{-5 + 7{,}5498}{4} \approx 0{,}64 \quad\text{atau}\quad x \approx \frac{-5 - 7{,}5498}{4} \approx -3{,}14$$
5. **Cek jawaban.** Substitusi $x \approx 0{,}6375$: $2(0{,}4064) + 3{,}1875 - 4 \approx 0{,}8128 + 3{,}1875 - 4 \approx 0$. Cocok.

**Jawaban:** $x \approx 0{,}64$ atau $x \approx -3{,}14$.

### Contoh 3: Cara grafik

**Soal.** Gambar grafik $y = x^2 - 2x - 2$ untuk $-2 \le x \le 4$. Gunakan grafik untuk menyelesaikan (a) $x^2 - 2x - 2 = 0$, (b) $x^2 - 2x - 2 = 1$.

1. **Langkah 1: Buat tabel nilai.**

```
  x     -2   -1    0    1    2    3    4
  y      6    1   -2   -3   -2    1    6
```

2. **Langkah 2: Gambar parabola.** Plot titik-titiknya dan hubungkan dengan kurva mulus. Titik terendah di $(1, -3)$.
3. **Langkah 3: Baca titik potong dengan sumbu-$x$ (a).** Grafik memotong $y = 0$ di antara $x = -1$ dan $x = 0$, serta di antara $x = 2$ dan $x = 3$. Dari gambar yang teliti: $x \approx -0{,}7$ dan $x \approx 2{,}7$.
4. **Langkah 4: Gambar garis $y = 1$ (b).** Garis mendatar ini memotong parabola tepat di $x = -1$ dan $x = 3$ (lihat tabel: $y = 1$ pada kedua nilai itu).
5. **Cek jawaban.** (a) Rumus abc memberi $x = 1 \pm \sqrt{3} \approx 2{,}73$ atau $-0{,}73$, cocok dengan bacaan grafik. (b) $(-1)^2 - 2(-1) - 2 = 1$ dan $3^2 - 2(3) - 2 = 1$, benar.

**Jawaban:** (a) $x \approx -0{,}7$ atau $x \approx 2{,}7$; (b) $x = -1$ atau $x = 3$.

### Contoh 4: Persamaan pecahan

**Soal.** Selesaikan $\dfrac{3}{x} + \dfrac{2}{x + 1} = 2$ (2 tempat desimal).

1. **Langkah 1: Catat nilai terlarang.** $x \ne 0$ dan $x \ne -1$.
2. **Langkah 2: Kalikan dengan KPK penyebut, $x(x + 1)$.**
$$3(x + 1) + 2x = 2x(x + 1)$$
3. **Langkah 3: Rapikan menjadi bentuk kuadrat.** $5x + 3 = 2x^2 + 2x$, sehingga $2x^2 - 3x - 3 = 0$.
4. **Langkah 4: Pakai rumus abc.** $a = 2$, $b = -3$, $c = -3$. $b^2 - 4ac = 9 + 24 = 33$.
$$x = \frac{3 \pm \sqrt{33}}{4} \approx \frac{3 \pm 5{,}7446}{4}$$
Jadi $x \approx 2{,}19$ atau $x \approx -0{,}69$. Keduanya bukan nilai terlarang.
5. **Cek jawaban.** $x \approx 2{,}186$: $\frac{3}{2{,}186} + \frac{2}{3{,}186} \approx 1{,}372 + 0{,}628 = 2{,}000$. Cocok.

**Jawaban:** $x \approx 2{,}19$ atau $x \approx -0{,}69$.

### Contoh 5: Soal cerita

**Soal.** Dimas bersepeda sejauh 30 km dari Ubud ke Denpasar. Jika ia mengayuh 3 km/jam lebih cepat, ia akan tiba setengah jam lebih awal. Berapa kecepatan Dimas semula?

1. **Langkah 1: Pilih variabel.** Misalkan kecepatan semula $x$ km/jam. Kecepatan baru $x + 3$ km/jam.
2. **Langkah 2: Nyatakan waktu.** Waktu $= \frac{\text{jarak}}{\text{kecepatan}}$: semula $\frac{30}{x}$ jam, baru $\frac{30}{x + 3}$ jam.
3. **Langkah 3: Susun persamaan.** Waktu semula setengah jam lebih lama:
$$\frac{30}{x} - \frac{30}{x + 3} = \frac{1}{2}$$
4. **Langkah 4: Kalikan dengan $2x(x + 3)$.**
$$60(x + 3) - 60x = x(x + 3) \quad\Rightarrow\quad 180 = x^2 + 3x \quad\Rightarrow\quad x^2 + 3x - 180 = 0$$
5. **Langkah 5: Pakai rumus abc.** $b^2 - 4ac = 9 + 720 = 729$, dan $\sqrt{729} = 27$.
$$x = \frac{-3 \pm 27}{2} \quad\Rightarrow\quad x = 12 \ \text{atau}\ x = -15$$
6. **Langkah 6: Tolak yang tidak masuk akal.** Kecepatan tidak negatif, jadi $x = -15$ ditolak.
7. **Cek jawaban.** Semula $\frac{30}{12} = 2{,}5$ jam; baru $\frac{30}{15} = 2$ jam. Selisihnya $0{,}5$ jam. Benar.

**Jawaban:** 12 km/jam.

## Kesalahan yang sering terjadi

- **Lupa tanda $\pm$.** Dari $(x - 2)^2 = 7$ hanya menulis $x = 2 + \sqrt{7}$. Bilangan negatif yang dikuadratkan juga positif, jadi ada dua kemungkinan.
- **Ubin pojok hanya ditambah di satu ruas.** Dari $x^2 - 4x = 3$ menulis $(x - 2)^2 = 3$. Ubin pojok 4 harus ditambahkan di kedua ruas: $(x - 2)^2 = 7$.
- **Salah tanda pada rumus abc.** Dengan $b = -3$, menulis $-b = -3$. Yang benar $-b = -(-3) = 3$. Begitu juga $-4ac$ dengan $c$ negatif menjadi positif. Tulis $a$, $b$, $c$ beserta tandanya sebelum menghitung.
- **Garis pecahan rumus abc terlalu pendek.** Menghitung $-b \pm \frac{\sqrt{b^2 - 4ac}}{2a}$. Penyebut $2a$ membagi **seluruh** pembilang, termasuk $-b$.
- **Tidak memeriksa nilai terlarang atau konteks.** Pada persamaan pecahan, jawaban yang membuat penyebut nol harus dibuang. Pada soal cerita, kecepatan atau panjang negatif harus ditolak.

## Ringkasan

- Melengkapkan kuadrat: $x^2 + bx = \left(x + \frac{b}{2}\right)^2 - \left(\frac{b}{2}\right)^2$, seperti melengkapi ubin pojok.
- Rumus abc $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ diturunkan dari melengkapkan kuadrat pada $ax^2 + bx + c = 0$.
- Jika $b^2 - 4ac < 0$, tidak ada penyelesaian real.
- Cara grafik: penyelesaian $ax^2 + bx + c = k$ adalah absis titik potong parabola dengan garis $y = k$.
- Persamaan pecahan: kalikan dengan KPK penyebut, buang nilai yang membuat penyebut nol.
- Soal cerita: definisikan variabel, susun persamaan, selesaikan, tolak jawaban yang tidak masuk akal, cek.

## Cek pemahaman

1. Selesaikan $x^2 + 8x + 5 = 0$ dengan melengkapkan kuadrat (2 tempat desimal).
2. Selesaikan $3x^2 - 7x + 1 = 0$ dengan rumus abc (2 tempat desimal).
3. Tulis $x^2 - 6x + 2$ dalam bentuk $(x - p)^2 - q$, lalu selesaikan $x^2 - 6x + 2 = 0$ (2 tempat desimal).
4. Selesaikan $\dfrac{4}{x - 1} = x + 2$.
5. Panjang sebuah taman persegi panjang 4 m lebih dari lebarnya, dan luasnya $50 \text{ m}^2$. Hitung lebar dan panjang taman (2 tempat desimal).

### Kunci jawaban

1. $x \approx -0{,}68$ atau $x \approx -7{,}32$. $x^2 + 8x = -5$, tambah 16: $(x + 4)^2 = 11$, jadi $x = -4 \pm \sqrt{11}$.
2. $x \approx 2{,}18$ atau $x \approx 0{,}15$. $b^2 - 4ac = 49 - 12 = 37$, jadi $x = \frac{7 \pm \sqrt{37}}{6}$.
3. $(x - 3)^2 - 7$; $x \approx 5{,}65$ atau $x \approx 0{,}35$. Dari $(x - 3)^2 = 7$, $x = 3 \pm \sqrt{7}$.
4. $x = 2$ atau $x = -3$. Kalikan dengan $x - 1$: $4 = x^2 + x - 2$, jadi $x^2 + x - 6 = (x + 3)(x - 2) = 0$; keduanya bukan nilai terlarang $x = 1$.
5. Lebar $\approx 5{,}35$ m, panjang $\approx 9{,}35$ m. $w(w + 4) = 50$ memberi $w^2 + 4w - 50 = 0$, sehingga $w = \frac{-4 + \sqrt{216}}{2} \approx 5{,}35$; akar negatif ditolak.
