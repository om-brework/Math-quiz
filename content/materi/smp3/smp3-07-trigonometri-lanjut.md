---
id: smp3-07-trigonometri-lanjut
judul: Trigonometri Lanjut
jenjang: smp3
moe: "Secondary 3 · Geometry and Measurement · G4 Pythagoras' theorem and trigonometry"
prasyarat: [smp2-09-pythagoras-trigonometri]
durasi_menit: 60
---

## Kenapa belajar ini?

Nelayan, pilot, dan tukang ukur tanah jarang bertemu segitiga siku-siku yang rapi. Mereka butuh cara menghitung jarak dan sudut pada **segitiga sembarang**, juga arah kapal dan tinggi menara. Bab ini memberi alat untuk semua itu.

## Analogi

Tukang bangunan memakai **unting-unting**: batu pemberat yang digantung tali, sehingga talinya selalu tegak lurus ke bawah.

Bayangkan kamu menggantungkan unting-unting dari satu sudut segitiga sembarang ke sisi di depannya. Tali itu adalah **garis tinggi**, dan ia **memotong segitiga sembarang menjadi dua segitiga siku-siku**. Di segitiga siku-siku, kamu sudah mahir memakai sin, cos, tan, dan Pythagoras.

Hampir semua rumus di bab ini lahir dari satu trik itu: **gantung unting-unting, lalu kerjakan dua segitiga siku-sikunya.**

## Konsep

### Sinus dan kosinus sudut tumpul

Gambar lingkaran berjari-jari 1 dengan pusat $O(0, 0)$. Putar jari-jari dari sumbu-$x$ positif sebesar $\theta$ berlawanan arah jarum jam sampai titik $P(x, y)$. Definisikan:

$$\cos\theta = x, \qquad \sin\theta = y$$

Untuk sudut lancip, ini sama dengan definisi lama: jatuhkan unting-unting dari $P$ ke sumbu-$x$, sisi miringnya 1, jadi $\sin\theta = \frac{y}{1}$ dan $\cos\theta = \frac{x}{1}$.

Sekarang cerminkan $P$ terhadap sumbu-$y$. Titik barunya $(-x, y)$ dan sudutnya $180^\circ - \theta$. Tingginya tetap, tetapi posisi mendatarnya berganti tanda. Jadi:

$$\sin(180^\circ - \theta) = \sin\theta, \qquad \cos(180^\circ - \theta) = -\cos\theta$$

Contoh: $\sin 150^\circ = \sin 30^\circ = 0{,}5$ dan $\cos 120^\circ = -\cos 60^\circ = -0{,}5$. Kosinus sudut tumpul selalu **negatif**.

Akibatnya, persamaan $\sin\theta = 0{,}5$ punya dua jawaban antara $0^\circ$ dan $180^\circ$: $30^\circ$ dan $150^\circ$. Sedangkan $\cos\theta$ menentukan sudut secara tunggal.

### Penamaan segitiga

Pada segitiga $ABC$, sisi di depan sudut $A$ diberi nama $a$, di depan $B$ diberi nama $b$, dan di depan $C$ diberi nama $c$.

### Luas segitiga $\frac{1}{2}ab\sin C$

Gantung unting-unting dari $A$ ke sisi $BC$, kena di titik $D$. Tingginya $h = AD$. Di segitiga siku-siku $ADC$: $h = b\sin C$. Maka:

$$\text{Luas} = \frac{1}{2} \times \text{alas} \times \text{tinggi} = \frac{1}{2} \times a \times b\sin C = \frac{1}{2}ab\sin C$$

Pakai rumus ini jika diketahui **dua sisi dan sudut yang diapitnya**.

### Aturan sinus

Dengan unting-unting yang sama, $h$ bisa dihitung dari dua segitiga siku-siku:

- Dari segitiga $ADC$: $h = b\sin C$.
- Dari segitiga $ADB$: $h = c\sin B$.

Jadi $b\sin C = c\sin B$, atau $\frac{b}{\sin B} = \frac{c}{\sin C}$. Menggantung unting-unting dari sudut lain memberi pasangan dengan $a$. Hasilnya:

$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

Pakai jika diketahui **pasangan sisi dan sudut di depannya**, ditambah satu sisi atau sudut lain.

### Aturan kosinus

Masih dengan unting-unting dari $A$. Misalkan $CD = x$, sehingga $BD = a - x$.

- Segitiga $ADC$: $x = b\cos C$ dan $h^2 = b^2 - x^2$.
- Segitiga $ADB$: $c^2 = h^2 + (a - x)^2 = b^2 - x^2 + a^2 - 2ax + x^2 = a^2 + b^2 - 2ax$.

Ganti $x = b\cos C$:

$$c^2 = a^2 + b^2 - 2ab\cos C$$

Bentuk untuk mencari sudut: $\cos C = \frac{a^2 + b^2 - c^2}{2ab}$.

Pakai jika diketahui **dua sisi dan sudut apitnya** (cari sisi ketiga), atau **ketiga sisi** (cari sudut). Jika $C = 90^\circ$, $\cos C = 0$ dan rumusnya menjadi Pythagoras.

Jika sudutnya tumpul, unting-unting jatuh di luar segitiga, tetapi ketiga rumus tetap berlaku berkat definisi sin dan cos sudut tumpul di atas.

### Sudut elevasi dan depresi

- **Sudut elevasi**: sudut dari garis mendatar **ke atas** menuju benda.
- **Sudut depresi**: sudut dari garis mendatar **ke bawah** menuju benda.

Sudut depresi dari puncak menara ke mobil sama dengan sudut elevasi dari mobil ke puncak, karena keduanya sudut dalam berseberangan pada dua garis mendatar yang sejajar.

### Arah mata angin (bearing)

Bearing adalah sudut yang diukur **dari arah utara, searah jarum jam**, ditulis tiga angka. Timur = $090^\circ$, selatan = $180^\circ$, barat daya = $225^\circ$.

Bearing balik (arah pulang) = bearing pergi $\pm 180^\circ$. Kalau bearing $A$ ke $B$ adalah $060^\circ$, bearing $B$ ke $A$ adalah $240^\circ$.

### Soal tiga dimensi

Di ruang tiga dimensi, carilah **segitiga siku-siku yang tersembunyi**, biasanya dengan unting-unting dari titik tinggi ke lantai. Gambar ulang segitiga itu secara datar, lalu kerjakan seperti biasa.

## Contoh langkah demi langkah

### Contoh 1: Luas dengan sudut tumpul

**Soal.** Segitiga $PQR$ memiliki $PQ = 8$ cm, $QR = 5$ cm, dan $\angle PQR = 150^\circ$. Hitung luasnya.

1. **Langkah 1: Pilih rumus.** Diketahui dua sisi dan sudut apitnya, jadi pakai $\frac{1}{2}ab\sin C$.
2. **Langkah 2: Hitung sinus sudut tumpul.** $\sin 150^\circ = \sin 30^\circ = 0{,}5$.
3. **Langkah 3: Hitung luas.** $\frac{1}{2} \times 8 \times 5 \times 0{,}5 = 10$ cm$^2$.
4. **Cek jawaban.** Tinggi dari $P$ ke perpanjangan $QR$ adalah $8\sin 30^\circ = 4$ cm. Luas $= \frac{1}{2} \times 5 \times 4 = 10$ cm$^2$. Sama.

**Jawaban:** $10$ cm$^2$.

### Contoh 2: Aturan sinus

**Soal.** Pada segitiga $ABC$, $\angle A = 40^\circ$, $\angle B = 75^\circ$, dan $a = 10$ cm. Hitung $b$ dan $c$.

1. **Langkah 1: Lengkapi sudut.** $\angle C = 180^\circ - 40^\circ - 75^\circ = 65^\circ$.
2. **Langkah 2: Cari pasangan lengkap.** $a$ dan $\angle A$ sudah lengkap, jadi aturan sinus bisa dipakai.
3. **Langkah 3: Hitung $b$.** $b = \frac{10\sin 75^\circ}{\sin 40^\circ} = \frac{10 \times 0{,}9659}{0{,}6428} \approx 15{,}0$ cm.
4. **Langkah 4: Hitung $c$.** $c = \frac{10\sin 65^\circ}{\sin 40^\circ} = \frac{10 \times 0{,}9063}{0{,}6428} \approx 14{,}1$ cm.
5. **Cek jawaban.** Sudut terbesar $B = 75^\circ$ harus berhadapan dengan sisi terpanjang. Memang $b = 15{,}0$ paling panjang, dan $a = 10$ (di depan sudut terkecil) paling pendek.

**Jawaban:** $b \approx 15{,}0$ cm, $c \approx 14{,}1$ cm.

### Contoh 3: Aturan kosinus untuk mencari sudut

**Soal.** Sebuah taman berbentuk segitiga dengan sisi 5 m, 7 m, dan 8 m. Hitung sudut di depan sisi 7 m, lalu hitung luas taman.

1. **Langkah 1: Pilih rumus.** Ketiga sisi diketahui, jadi pakai bentuk kosinus untuk sudut. Sisi di depan sudut yang dicari adalah 7.
2. **Langkah 2: Hitung kosinus.** $\cos\theta = \frac{5^2 + 8^2 - 7^2}{2 \times 5 \times 8} = \frac{25 + 64 - 49}{80} = \frac{40}{80} = 0{,}5$.
3. **Langkah 3: Cari sudut.** $\theta = 60^\circ$.
4. **Langkah 4: Hitung luas.** Sudut $60^\circ$ diapit sisi 5 dan 8: $\frac{1}{2} \times 5 \times 8 \times \sin 60^\circ = 20 \times 0{,}8660 \approx 17{,}3$ m$^2$.
5. **Cek jawaban.** Masukkan balik: $5^2 + 8^2 - 2(5)(8)(0{,}5) = 89 - 40 = 49 = 7^2$. Cocok.

**Jawaban:** Sudutnya $60^\circ$, luas taman sekitar $17{,}3$ m$^2$.

### Contoh 4: Soal cerita bearing

**Soal.** Perahu nelayan berangkat dari Pelabuhan Benoa ($H$), berlayar 12 km dengan bearing $060^\circ$ ke titik $P$, lalu 8 km dengan bearing $130^\circ$ ke titik $S$. Hitung jarak $HS$ dan bearing $S$ dari $H$.

1. **Langkah 1: Cari sudut di titik belok.** Dari $P$, arah pulang ke $H$ adalah $060^\circ + 180^\circ = 240^\circ$. Arah ke $S$ adalah $130^\circ$. Sudut di antaranya $\angle HPS = 240^\circ - 130^\circ = 110^\circ$.
2. **Langkah 2: Aturan kosinus.** $HS^2 = 12^2 + 8^2 - 2(12)(8)\cos 110^\circ = 208 - 192 \times (-0{,}3420) = 208 + 65{,}67 = 273{,}67$. Jadi $HS \approx 16{,}54$ km.
3. **Langkah 3: Aturan sinus untuk sudut di $H$.** $\sin\angle PHS = \frac{8\sin 110^\circ}{16{,}54} = \frac{8 \times 0{,}9397}{16{,}54} \approx 0{,}4545$, jadi $\angle PHS \approx 27{,}0^\circ$. Sudut ini pasti lancip karena berhadapan dengan sisi yang bukan terpanjang.
4. **Langkah 4: Hitung bearing.** Perahu berbelok ke kanan (searah jarum jam), jadi $S$ berada searah jarum jam dari arah $060^\circ$: bearing $= 060^\circ + 27{,}0^\circ = 087{,}0^\circ$.
5. **Cek jawaban.** $HS$ harus lebih kecil dari $12 + 8 = 20$ km dan lebih besar dari 12 km karena sudut di $P$ tumpul. Nilai $16{,}5$ km masuk akal.

**Jawaban:** Jarak sekitar $16{,}5$ km, bearing $087{,}0^\circ$.

### Contoh 5: Tiga dimensi dan sudut elevasi

**Soal.** Ruang kelas berbentuk balok 8 m × 6 m, tinggi 3 m. Sebuah kamera CCTV dipasang di sudut langit-langit. Dari sudut lantai yang berseberangan diagonal, berapa sudut elevasi ke kamera? Berapa panjang kabel lurus dari sudut lantai itu ke kamera?

1. **Langkah 1: Temukan segitiga siku-siku tersembunyi.** Gantung unting-unting dari kamera ke lantai. Segitiganya: diagonal lantai (mendatar), tinggi ruang (tegak), dan kabel (miring).
2. **Langkah 2: Hitung diagonal lantai.** $\sqrt{8^2 + 6^2} = \sqrt{100} = 10$ m.
3. **Langkah 3: Sudut elevasi.** $\tan\theta = \frac{3}{10} = 0{,}3$, jadi $\theta \approx 16{,}7^\circ$.
4. **Langkah 4: Panjang kabel.** $\sqrt{10^2 + 3^2} = \sqrt{109} \approx 10{,}4$ m.
5. **Cek jawaban.** $\sin\theta = \frac{3}{10{,}44} \approx 0{,}287$, dan $\sin 16{,}7^\circ \approx 0{,}287$. Cocok.

**Jawaban:** Sudut elevasi sekitar $16{,}7^\circ$, panjang kabel sekitar $10{,}4$ m.

## Kesalahan yang sering terjadi

- **Lupa tanda negatif kosinus sudut tumpul.** Pada Contoh 4, memakai $\cos 110^\circ = +0{,}342$ menghasilkan $HS^2 = 142{,}3$, jadi $HS \approx 11{,}9$ km, terlalu pendek. Kalkulator memberi tanda yang benar; jangan dihapus.
- **Sudut ambigu pada aturan sinus.** $\sin\theta = 0{,}5$ bisa berarti $30^\circ$ atau $150^\circ$. Periksa apakah sudut tumpul mungkin, misalnya dengan melihat sisi terpanjang.
- **Sudut pada $\frac{1}{2}ab\sin C$ bukan sudut apit.** Sudut harus berada di antara kedua sisi yang dipakai.
- **Bearing diukur dari arah yang salah.** Bearing selalu dari utara dan searah jarum jam. Gambar panah utara di setiap titik.
- **Kalkulator dalam mode radian.** Pastikan layar menunjukkan D atau DEG.

## Ringkasan

- $\sin(180^\circ - \theta) = \sin\theta$ dan $\cos(180^\circ - \theta) = -\cos\theta$.
- Luas segitiga $= \frac{1}{2}ab\sin C$ (dua sisi dan sudut apit).
- Aturan sinus: $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$ (ada pasangan sisi-sudut).
- Aturan kosinus: $c^2 = a^2 + b^2 - 2ab\cos C$ (dua sisi dan sudut apit, atau tiga sisi).
- Semua rumus berasal dari unting-unting: garis tinggi membelah segitiga menjadi dua segitiga siku-siku.
- Bearing diukur dari utara searah jarum jam; untuk soal 3D, cari segitiga siku-siku tersembunyi.

## Cek pemahaman

1. Tanpa kalkulator, tentukan $\sin 135^\circ$ dan $\cos 135^\circ$ dalam $\sin 45^\circ$ dan $\cos 45^\circ$.
2. Hitung luas segitiga dengan dua sisi 6 cm dan 10 cm yang mengapit sudut $30^\circ$.
3. Pada segitiga $ABC$, $\angle A = 30^\circ$, $\angle B = 45^\circ$, $a = 6$ cm. Hitung $b$.
4. Pada segitiga $ABC$, $b = 5$ cm, $c = 8$ cm, $\angle A = 60^\circ$. Hitung $a$.
5. Dari puncak gedung setinggi 40 m, sudut depresi ke sebuah mobil adalah $25^\circ$. Berapa jarak mendatar mobil dari kaki gedung?

### Kunci jawaban

1. $\sin 135^\circ = \sin 45^\circ \approx 0{,}707$ dan $\cos 135^\circ = -\cos 45^\circ \approx -0{,}707$.
2. $\frac{1}{2} \times 6 \times 10 \times \sin 30^\circ = 30 \times 0{,}5 = 15$ cm$^2$.
3. $b = \frac{6\sin 45^\circ}{\sin 30^\circ} = \frac{6 \times 0{,}7071}{0{,}5} \approx 8{,}49$ cm.
4. $a^2 = 25 + 64 - 2(5)(8)(0{,}5) = 89 - 40 = 49$, jadi $a = 7$ cm.
5. Sudut elevasi dari mobil juga $25^\circ$, jadi jarak $= \frac{40}{\tan 25^\circ} = \frac{40}{0{,}4663} \approx 85{,}8$ m.
