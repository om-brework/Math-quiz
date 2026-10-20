---
id: smp1-08-fungsi-linear
judul: Koordinat dan Grafik Fungsi Linear
jenjang: smp1
moe: "Secondary 1 · Number and Algebra · N6 Functions and graphs"
prasyarat: [smp1-02-bilangan-bulat-real, smp1-07-bentuk-aljabar]
durasi_menit: 50
---

## Kenapa belajar ini?

Tarif taksi online, tagihan air, dan tabungan yang bertambah tetap setiap bulan semuanya membentuk garis lurus kalau digambar. Dengan grafik, kamu bisa melihat sekilas mana yang naik cepat, mana yang turun, dan berapa nilainya untuk angka tertentu.

## Analogi

Bayangkan sebuah **gedung parkir bertingkat**. Untuk menemukan mobil, kamu perlu dua petunjuk:

1. **Berjalan di lantai dasar** ke kanan atau ke kiri dari pintu masuk. Ini koordinat $x$.
2. **Naik atau turun lift** dari lantai dasar. Ini koordinat $y$.

Urutannya selalu **jalan dulu, baru naik lift**. Pintu masuk di lantai dasar adalah titik asal $(0, 0)$. Lantai di bawah tanah dan arah ke kiri diberi tanda negatif.

Untuk garis, bayangkan **tangga** di gedung itu. **Gradien** menjawab: setiap kamu melangkah 1 petak ke kanan, kamu naik (atau turun) berapa lantai?

## Konsep

### Bidang Kartesius dan pasangan berurutan

Bidang Kartesius dibentuk oleh dua garis bilangan: **sumbu-$x$** mendatar dan **sumbu-$y$** tegak. Keduanya berpotongan di **titik asal** $O(0, 0)$.

Setiap titik ditulis sebagai **pasangan berurutan** $(x, y)$. Disebut "berurutan" karena urutannya penting: $(2, 5)$ dan $(5, 2)$ adalah dua titik berbeda.

Kedua sumbu membagi bidang menjadi empat **kuadran**:

```
            y
   Kuadran II  |  Kuadran I
   (-, +)      |  (+, +)
  -------------O------------- x
   Kuadran III |  Kuadran IV
   (-, -)      |  (+, -)
```

Titik yang berada tepat di sumbu tidak termasuk kuadran mana pun.

### Fungsi linear

**Fungsi** adalah aturan yang memasangkan setiap nilai $x$ dengan tepat satu nilai $y$. Fungsi linear berbentuk

$$y = ax + b$$

dengan $a$ dan $b$ bilangan tetap. Grafiknya selalu **garis lurus**. Kenapa lurus? Karena setiap $x$ bertambah 1, $y$ selalu bertambah tepat $a$. Langkah tangganya sama terus, tidak berubah-ubah.

- $b$ adalah nilai $y$ saat $x = 0$. Di sinilah garis memotong sumbu-$y$.
- $a$ adalah **gradien**, yaitu kemiringan garis.

### Gradien

$$\text{gradien} = \frac{\text{perubahan tegak}}{\text{perubahan mendatar}} = \frac{y_2 - y_1}{x_2 - x_1}$$

Selalu baca grafik **dari kiri ke kanan**, seperti berjalan maju:

- **Gradien positif**: garis naik. Tangga menanjak.
- **Gradien negatif**: garis turun. Tangga menurun.
- **Gradien nol**: garis mendatar. Lantai rata.

Semakin besar angka gradiennya (tanpa melihat tanda), semakin curam garisnya.

### Menggambar grafik fungsi linear

1. Buat tabel nilai: pilih beberapa nilai $x$, hitung $y$.
2. Gambar titik-titiknya pada bidang Kartesius.
3. Hubungkan dengan penggaris menjadi satu garis lurus.

Dua titik sudah cukup untuk membuat garis, tetapi tiga titik lebih aman. Kalau tiga titik tidak segaris, pasti ada yang salah hitung.

## Contoh langkah demi langkah

### Contoh 1: Membaca koordinat dan kuadran

**Soal.** Tentukan kuadran atau letak titik $A(3, 2)$, $B(-2, 4)$, $C(-3, -1)$, dan $D(4, 0)$.

1. **Langkah 1: Lihat tanda $x$ (jalan kanan atau kiri).** $A$ dan $D$ ke kanan. $B$ dan $C$ ke kiri.
2. **Langkah 2: Lihat tanda $y$ (lift naik atau turun).** $A$ dan $B$ naik. $C$ turun. $D$ tetap di lantai dasar.
3. **Langkah 3: Tentukan kuadran.** $A(+, +)$ kuadran I. $B(-, +)$ kuadran II. $C(-, -)$ kuadran III. $D$ punya $y = 0$, jadi berada **pada sumbu-$x$**.
4. **Cek jawaban.** Cocokkan dengan gambar kuadran di atas. Semua tanda sesuai.

**Jawaban:** $A$ kuadran I, $B$ kuadran II, $C$ kuadran III, $D$ pada sumbu-$x$.

### Contoh 2: Menggambar $y = 2x - 1$

**Soal.** Buat tabel nilai untuk $y = 2x - 1$ dengan $x$ dari $-1$ sampai 3, lalu gambar grafiknya. Tentukan gradien dan titik potong dengan sumbu-$y$.

Tabel nilai dan grafik yang dipakai di langkah-langkah:

```
x  | -1   0   1   2   3
---+--------------------
y  | -3  -1   1   3   5
```

```
  5         |           *
  4         |
  3         |       *
  2         |
  1         |   *
  0 +---+---+---+---+---+---+
 -1         *
 -2         |
 -3     *   |
    -2  -1  0   1   2   3   4
```

1. **Langkah 1: Buat tabel.** Masukkan setiap $x$ ke rumus. Contoh: $x = -1$ memberi $2(-1) - 1 = -3$, dan $x = 3$ memberi $2(3) - 1 = 5$. Hasilnya seperti tabel di atas.
2. **Langkah 2: Gambar titik dan hubungkan.** Untuk $(-1, -3)$: jalan 1 petak ke kiri, lalu turun 3 lantai. Lakukan untuk semua titik, lalu hubungkan dengan penggaris.
3. **Langkah 3: Baca gradien.** Setiap $x$ bertambah 1, $y$ bertambah 2. Gradien $= 2$, positif, jadi garis naik.
4. **Langkah 4: Baca titik potong sumbu-$y$.** Saat $x = 0$, $y = -1$. Titiknya $(0, -1)$.
5. **Cek jawaban.** Semua titik segaris. Gradien 2 dan konstanta $-1$ juga terlihat langsung dari rumus $y = 2x - 1$.

**Jawaban:** Gradien 2, memotong sumbu-$y$ di $(0, -1)$.

### Contoh 3: Gradien dari dua titik

**Soal.** Hitung gradien garis yang melalui $P(1, 5)$ dan $Q(4, -1)$. Apakah garisnya naik atau turun?

1. **Langkah 1: Hitung perubahan mendatar.** Dari $x = 1$ ke $x = 4$: $4 - 1 = 3$ (jalan 3 petak ke kanan).
2. **Langkah 2: Hitung perubahan tegak.** Dari $y = 5$ ke $y = -1$: $-1 - 5 = -6$ (turun 6 lantai).
3. **Langkah 3: Bagi.** $\frac{-6}{3} = -2$.
4. **Langkah 4: Artikan.** Gradien negatif, jadi garis turun dari kiri ke kanan.
5. **Cek jawaban.** Hitung dengan urutan terbalik: $\frac{5 - (-1)}{1 - 4} = \frac{6}{-3} = -2$. Sama.

**Jawaban:** Gradien $-2$, garis turun.

### Contoh 4: Soal cerita tarif taksi online

**Soal.** Tarif taksi online adalah Rp10.000 untuk naik, ditambah Rp4.000 per km. (a) Tulis fungsi biaya $y$ (rupiah) untuk jarak $x$ km. (b) Berapa biaya untuk 7 km? (c) Apa arti gradiennya?

1. **Langkah 1: Tentukan bagian tetap.** Rp10.000 dibayar walau $x = 0$. Jadi $b = 10.000$.
2. **Langkah 2: Tentukan bagian yang bertambah.** Setiap 1 km menambah Rp4.000. Jadi $a = 4.000$.
3. **Langkah 3: Tulis fungsinya.** $y = 4.000x + 10.000$.
4. **Langkah 4: Hitung untuk 7 km.** $y = 4.000(7) + 10.000 = 28.000 + 10.000 = 38.000$.
5. **Langkah 5: Artikan gradien.** Gradien 4.000 berarti biaya naik Rp4.000 untuk setiap tambahan 1 km.
6. **Cek jawaban.** Ambil dua titik pada garis: $(0, 10.000)$ dan $(5, 30.000)$. Gradien $= \frac{30.000 - 10.000}{5 - 0} = 4.000$. Cocok.

**Jawaban:** (a) $y = 4.000x + 10.000$; (b) Rp38.000; (c) biaya bertambah Rp4.000 per km.

## Kesalahan yang sering terjadi

- **Menukar urutan koordinat.** Menggambar $(2, 5)$ dengan naik 2 lalu ke kanan 5. Ingat: jalan dulu ($x$), baru naik lift ($y$).
- **Tanda negatif pada gradien hilang.** Pada Contoh 3 menulis gradien 2. Garis yang turun dari kiri ke kanan selalu bergradien negatif.
- **Mencampur urutan titik.** Menghitung $\frac{-1 - 5}{1 - 4}$. Pembilang dari $Q$ ke $P$, penyebut dari $P$ ke $Q$. Hasilnya $+2$, salah. Urutan titik di atas dan di bawah harus sama.
- **Menghubungkan titik dengan garis bengkok.** Kalau titik tidak segaris, periksa lagi tabelmu. Grafik fungsi linear selalu lurus.

## Ringkasan

- Titik ditulis $(x, y)$: $x$ mendatar dulu, lalu $y$ tegak.
- Empat kuadran: I $(+, +)$, II $(-, +)$, III $(-, -)$, IV $(+, -)$.
- Fungsi linear $y = ax + b$ grafiknya garis lurus. $b$ adalah titik potong sumbu-$y$.
- Gradien $= \frac{y_2 - y_1}{x_2 - x_1}$. Positif berarti naik, negatif berarti turun.
- Gambar grafik dari tabel nilai, minimal tiga titik.

## Cek pemahaman

1. Di kuadran mana titik $(-5, 3)$?
2. Lengkapi tabel $y = 3x + 1$ untuk $x = -2$, $0$, dan $2$.
3. Hitung gradien garis yang melalui $(2, 3)$ dan $(6, 11)$.
4. Hitung gradien garis yang melalui $(-1, 4)$ dan $(3, -4)$. Naik atau turun?
5. Untuk $y = -x + 5$, tentukan gradien dan titik potong sumbu-$y$. Apakah titik $(2, 3)$ terletak pada garis ini?

### Kunci jawaban

1. Kuadran II, karena $x$ negatif dan $y$ positif.
2. $y = -5$, $1$, dan $7$. Misalnya $3(-2) + 1 = -5$.
3. 2. $\frac{11 - 3}{6 - 2} = \frac{8}{4} = 2$.
4. $-2$, turun. $\frac{-4 - 4}{3 - (-1)} = \frac{-8}{4} = -2$.
5. Gradien $-1$, memotong sumbu-$y$ di $(0, 5)$. Ya, karena $-2 + 5 = 3$.
