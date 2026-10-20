---
id: smp3-04-grafik-fungsi-lanjut
judul: Grafik Fungsi Lanjut
jenjang: smp3
moe: "Secondary 3 · Number and Algebra · N6 Functions and graphs"
prasyarat: [smp2-04-fungsi-kuadrat, smp3-01-bentuk-baku-eksponen, smp3-02-persamaan-kuadrat-lanjut]
durasi_menit: 50
---

## Kenapa belajar ini?

Grafik membuat rumus bisa "dilihat". Dari bentuk grafik kita tahu kapan biaya paling kecil, seberapa cepat bakteri berkembang, atau bagaimana waktu tempuh berubah saat kecepatan naik. Kamu juga belajar mengukur seberapa curam sebuah kurva di satu titik.

## Analogi

Bayangkan grafik sebagai **profil jalan** yang dilalui seorang pesepeda dari kiri ke kanan.

- Ada jalan yang turun lalu naik, membentuk **lembah** (parabola terbuka ke atas). Titik terendahnya disebut **titik balik**.
- Ada jalan yang makin lama makin curam, seperti tanjakan ke Kintamani (grafik eksponen).
- **Kemiringan jalan** tepat di bawah roda adalah **gradien kurva** di titik itu. Untuk mengukurnya, tempelkan sebuah **penggaris lurus** yang hanya menyentuh jalan di titik roda. Penggaris itu adalah **garis singgung**.

Setiap keluarga rumus punya "bentuk jalan" yang khas. Kalau kamu hafal bentuknya, kamu bisa membuat sketsa tanpa menghitung banyak titik.

## Konsep

### Bentuk $y = (x - p)^2 + q$

Karena $(x - p)^2 \ge 0$ untuk semua $x$, nilai $y$ paling kecil adalah $q$, dan itu terjadi saat $x = p$. Jadi:

- **Titik balik (minimum):** $(p, q)$, dasar lembah.
- **Sumbu simetri:** garis $x = p$.
- **Titik potong sumbu-$y$:** substitusi $x = 0$, didapat $y = p^2 + q$.

Kalau bentuknya $y = -(x - p)^2 + q$, jalannya dibalik menjadi **bukit**: titik $(p, q)$ adalah titik maksimum.

Hati-hati dengan tanda: $y = (x + 2)^2 - 5$ sama dengan $y = (x - (-2))^2 - 5$, jadi $p = -2$.

### Bentuk $y = (x - a)(x - b)$

Saat $y = 0$, salah satu faktor harus nol, jadi $x = a$ atau $x = b$. Itulah **titik potong sumbu-$x$**.

- Lembah berada tepat di tengah kedua titik potong, karena parabola simetris. Sumbu simetrinya $x = \frac{a + b}{2}$.
- Titik potong sumbu-$y$: $y = (0 - a)(0 - b) = ab$.
- Nilai minimum didapat dengan memasukkan $x = \frac{a+b}{2}$ ke rumus.

### Grafik $y = ax^n$ untuk $n = -2, -1, 0, 1, 2, 3$

Ambil $a > 0$ dulu. Kalau $a < 0$, grafiknya dicerminkan terhadap sumbu-$x$.

- **$n = 0$:** $y = a$. Garis mendatar, jalan yang rata sempurna.
- **$n = 1$:** $y = ax$. Garis lurus melalui $(0, 0)$ dengan gradien $a$.
- **$n = 2$:** $y = ax^2$. Parabola dengan titik balik $(0, 0)$, simetris terhadap sumbu-$y$.
- **$n = 3$:** $y = ax^3$. Kurva berbentuk "S" melalui $(0, 0)$. Naik dari kiri bawah ke kanan atas, dan sempat landai di titik asal.
- **$n = -1$:** $y = \frac{a}{x}$. Ada dua cabang, di kuadran I dan III. Nilai $x = 0$ tidak boleh (pembagian nol), jadi grafik tidak pernah menyentuh sumbu-$y$. Grafik juga tidak pernah menyentuh sumbu-$x$, karena $\frac{a}{x}$ tidak pernah nol. Kedua sumbu disebut **asimtot**: garis yang didekati terus tetapi tidak pernah disentuh.
- **$n = -2$:** $y = \frac{a}{x^2}$. Karena $x^2 > 0$, nilai $y$ selalu positif. Dua cabang di kuadran I dan II, simetris terhadap sumbu-$y$. Asimtotnya juga kedua sumbu.

### Grafik eksponen $y = ka^x$

Di sini $x$ berada di **pangkat**. Ambil $k > 0$, $a > 0$, dan $a \ne 1$.

- Saat $x = 0$, $a^0 = 1$, jadi $y = k$. Grafik selalu memotong sumbu-$y$ di $(0, k)$.
- Jika $a > 1$: grafik **naik makin curam** (pertumbuhan). Seperti tanjakan yang makin terjal.
- Jika $0 < a < 1$: grafik **turun makin landai** (peluruhan).
- $a^x$ selalu positif, jadi grafik selalu di atas sumbu-$x$. Sumbu-$x$ adalah asimtot.

### Gradien kurva dengan garis singgung

Gradien garis lurus sama di semua titik. Gradien kurva berubah-ubah, seperti kemiringan jalan berbukit. Untuk mengukurnya di satu titik:

1. Gambar kurva dengan teliti di kertas berpetak.
2. Letakkan penggaris yang menyentuh kurva **hanya di titik itu**, lalu tarik garis singgung.
3. Pilih dua titik yang jauh satu sama lain pada garis singgung.
4. Hitung $\text{gradien} = \frac{\text{perubahan } y}{\text{perubahan } x}$.

Hasilnya perkiraan, karena bergantung pada ketelitian gambar.

## Contoh langkah demi langkah

### Contoh 1: Sketsa bentuk $(x - p)^2 + q$

**Soal.** Buat sketsa $y = (x - 3)^2 - 4$. Tentukan titik balik, sumbu simetri, dan titik potong dengan kedua sumbu.

1. **Langkah 1: Baca $p$ dan $q$.** Bandingkan dengan $(x - p)^2 + q$: $p = 3$, $q = -4$.
2. **Langkah 2: Titik balik dan sumbu simetri.** Titik minimum $(3, -4)$, dasar lembah. Sumbu simetri $x = 3$.
3. **Langkah 3: Potong sumbu-$y$.** $x = 0$: $y = (0 - 3)^2 - 4 = 9 - 4 = 5$. Titik $(0, 5)$.
4. **Langkah 4: Potong sumbu-$x$.** $y = 0$: $(x - 3)^2 = 4$, jadi $x - 3 = 2$ atau $x - 3 = -2$. Didapat $x = 5$ atau $x = 1$.
5. **Langkah 5: Sketsa.** Parabola terbuka ke atas melalui $(1, 0)$, $(5, 0)$, $(0, 5)$, dengan dasar $(3, -4)$.
6. **Cek jawaban.** Kedua titik potong $x = 1$ dan $x = 5$ berjarak sama (2 satuan) dari sumbu $x = 3$. Ekspansi juga cocok: $(x-3)^2 - 4 = x^2 - 6x + 5 = (x - 1)(x - 5)$.

**Jawaban:** Titik balik $(3, -4)$, sumbu $x = 3$, memotong sumbu-$y$ di $(0, 5)$ dan sumbu-$x$ di $(1, 0)$ dan $(5, 0)$.

### Contoh 2: Sketsa bentuk $(x - a)(x - b)$

**Soal.** Buat sketsa $y = (x + 2)(x - 4)$ dan tentukan nilai minimumnya.

1. **Langkah 1: Titik potong sumbu-$x$.** $x + 2 = 0$ atau $x - 4 = 0$, jadi $x = -2$ atau $x = 4$.
2. **Langkah 2: Sumbu simetri.** Tepat di tengah: $x = \frac{-2 + 4}{2} = 1$.
3. **Langkah 3: Nilai minimum.** $x = 1$: $y = (1 + 2)(1 - 4) = 3 \times (-3) = -9$. Titik balik $(1, -9)$.
4. **Langkah 4: Potong sumbu-$y$.** $x = 0$: $y = (2)(-4) = -8$. Titik $(0, -8)$.
5. **Cek jawaban.** Titik $(2, -8)$ harus juga di grafik, karena merupakan cerminan $(0, -8)$ terhadap $x = 1$. Hitung: $(2 + 2)(2 - 4) = 4 \times (-2) = -8$. Cocok.

**Jawaban:** Parabola terbuka ke atas, memotong sumbu-$x$ di $-2$ dan $4$, sumbu-$y$ di $-8$, nilai minimum $-9$ saat $x = 1$.

### Contoh 3: Mengenali grafik $y = ax^n$

**Soal.** Sebuah grafik tidak pernah menyentuh kedua sumbu, berada di kuadran I dan II, dan melalui $(2, 3)$. Rumusnya berbentuk $y = ax^n$. Tentukan $n$ dan $a$.

1. **Langkah 1: Saring berdasarkan asimtot.** Tidak menyentuh kedua sumbu berarti $n$ negatif: $n = -1$ atau $n = -2$.
2. **Langkah 2: Saring berdasarkan kuadran.** $y = \frac{a}{x}$ ada di kuadran I dan III. $y = \frac{a}{x^2}$ dengan $a > 0$ ada di kuadran I dan II. Jadi $n = -2$.
3. **Langkah 3: Cari $a$.** $3 = \frac{a}{2^2} = \frac{a}{4}$, jadi $a = 12$.
4. **Cek jawaban.** Untuk $x = -2$: $y = \frac{12}{4} = 3 > 0$, di kuadran II. Cocok.

**Jawaban:** $y = \frac{12}{x^2}$, jadi $n = -2$ dan $a = 12$.

### Contoh 4: Soal cerita eksponen dan garis singgung

**Soal.** Jumlah bakteri dalam tempe yang sedang difermentasi dimodelkan $N = 200 \times 2^t$, dengan $t$ dalam jam. Buat tabel nilai untuk $t = 0$ sampai $4$. Siti menggambar grafiknya, lalu menarik garis singgung di $t = 2$. Garis itu melalui $(1, 245)$ dan $(3, 1.355)$. Perkirakan laju pertumbuhan bakteri saat $t = 2$.

1. **Langkah 1: Kenali bentuk.** Ini $y = ka^x$ dengan $k = 200$ dan $a = 2 > 1$, jadi grafik naik makin curam, memotong sumbu tegak di 200.
2. **Langkah 2: Buat tabel.**

   ```
   t (jam) |   0    1    2      3      4
   N       | 200  400  800  1.600  3.200
   ```

3. **Langkah 3: Pastikan titiknya benar.** Pada $t = 2$, $N = 800$. Garis singgung harus menyentuh kurva di $(2, 800)$. Titik tengah antara $(1, 245)$ dan $(3, 1.355)$ adalah $(2, 800)$, jadi garis itu memang lewat sana.
4. **Langkah 4: Hitung gradien garis singgung.** $\frac{1.355 - 245}{3 - 1} = \frac{1.110}{2} = 555$.
5. **Langkah 5: Artikan.** Gradien adalah "kemiringan jalan" di titik itu: sekitar 555 bakteri bertambah per jam saat $t = 2$.
6. **Cek jawaban.** Gradien rata-rata dari $t = 1$ ke $t = 3$ adalah $\frac{1.600 - 400}{2} = 600$. Nilainya dekat dengan 555, dan sedikit lebih besar karena kurva makin curam di kanan. Masuk akal.

**Jawaban:** Laju pertumbuhan sekitar 555 bakteri per jam pada $t = 2$.

## Kesalahan yang sering terjadi

- **Salah tanda titik balik.** Pada $y = (x + 2)^2 - 5$, menulis titik balik $(2, -5)$. Bentuknya $(x - p)^2$, jadi $x + 2 = x - (-2)$ dan titik baliknya $(-2, -5)$.
- **Mengira $y = \frac{a}{x}$ menyentuh sumbu.** Grafik ini tidak punya nilai di $x = 0$ dan tidak pernah bernilai 0. Gambar cabangnya mendekati sumbu tanpa menyentuh.
- **Tertukar $y = \frac{a}{x}$ dan $y = \frac{a}{x^2}$.** Ingat: $x^2$ selalu positif, jadi $\frac{a}{x^2}$ (dengan $a > 0$) selalu di atas sumbu-$x$.
- **Grafik eksponen dibuat menembus sumbu-$x$.** $ka^x$ dengan $k > 0$ tidak pernah nol atau negatif.
- **Garis singgung memotong kurva di titik itu.** Penggaris harus "menempel", bukan menyilang. Pilih dua titik yang jauh di garis singgung agar gradien lebih teliti.

## Ringkasan

- $y = (x - p)^2 + q$: titik balik $(p, q)$, sumbu simetri $x = p$.
- $y = (x - a)(x - b)$: memotong sumbu-$x$ di $a$ dan $b$, sumbu simetri $x = \frac{a + b}{2}$, memotong sumbu-$y$ di $ab$.
- $y = ax^n$: $n = 0$ garis datar, $n = 1$ garis miring, $n = 2$ parabola, $n = 3$ kurva S, $n = -1$ dan $n = -2$ punya asimtot di kedua sumbu.
- $y = ka^x$: melalui $(0, k)$, naik jika $a > 1$, turun jika $0 < a < 1$, tidak pernah menyentuh sumbu-$x$.
- Gradien kurva di satu titik = gradien garis singgung di titik itu.

## Cek pemahaman

1. Tentukan titik balik, sumbu simetri, dan titik potong sumbu-$y$ dari $y = (x - 5)^2 + 2$.
2. Untuk $y = (x - 1)(x - 7)$, tentukan titik potong sumbu-$x$, sumbu simetri, dan nilai minimum.
3. Untuk $y = 3 \times 2^x$, hitung $y$ saat $x = 0, 1, 2, 3$. Di mana grafik memotong sumbu-$y$?
4. Untuk $y = \frac{4}{x}$, hitung $y$ saat $x = -2$. Di kuadran mana saja grafik ini berada?
5. Garis singgung kurva $y = x^2$ di titik $(2, 4)$ juga melalui $(4, 12)$. Berapa gradien kurva di $(2, 4)$?

### Kunci jawaban

1. Titik balik $(5, 2)$, sumbu $x = 5$, potong sumbu-$y$ di $(0, 27)$ karena $(0 - 5)^2 + 2 = 27$.
2. Memotong di $x = 1$ dan $x = 7$, sumbu $x = 4$, minimum $(4 - 1)(4 - 7) = -9$.
3. $3, 6, 12, 24$; memotong sumbu-$y$ di $(0, 3)$ karena $2^0 = 1$.
4. $y = \frac{4}{-2} = -2$; grafik ada di kuadran I dan III karena $a = 4 > 0$.
5. Gradien $= \frac{12 - 4}{4 - 2} = 4$.
