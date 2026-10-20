---
id: smp2-08-kongruen-sebangun
judul: Kekongruenan dan Kesebangunan
jenjang: smp2
moe: "Secondary 2 · Geometry and Measurement · G2 Congruence and similarity"
prasyarat: [smp1-04-perbandingan, smp1-10-sudut-segitiga-poligon]
durasi_menit: 40
---

## Kenapa belajar ini?

Foto yang dicetak lebih besar, denah rumah, model mobil mainan, dan ubin lantai yang sama persis semuanya berhubungan dengan bangun yang "sama bentuk". Dengan memahami kekongruenan dan kesebangunan, kamu bisa menghitung ukuran yang belum diketahui hanya dari bentuk yang mirip.

## Analogi

Bayangkan **mesin fotokopi** dengan tombol pengatur ukuran (zoom).

- Jika kamu memfotokopi sebuah gambar dengan pengaturan **100%**, hasilnya **sama persis**: bentuk sama, ukuran sama. Ini **kongruen**.
- Jika kamu memakai pengaturan **150%** atau **50%**, hasilnya **lebih besar atau lebih kecil**, tetapi bentuknya tidak berubah. Semua panjang dikali angka yang sama, dan semua sudut tetap. Ini **sebangun**.

Angka pengatur ukuran itu disebut **faktor skala**. Ingat mesin fotokopi ini setiap kali kita mencari sisi yang hilang.

## Konsep

### Bangun kongruen

Dua bangun **kongruen** jika bentuk dan ukurannya sama persis. Satu bangun bisa ditempatkan tepat menutupi bangun lainnya (mungkin setelah digeser, diputar, atau dibalik).

Pada dua bangun kongruen:

- **sudut-sudut yang bersesuaian sama besar**, dan
- **sisi-sisi yang bersesuaian sama panjang**.

Lambangnya $\cong$. Penulisan $\triangle ABC \cong \triangle PQR$ berarti titik-titiknya berpasangan **sesuai urutan**: $A$ dengan $P$, $B$ dengan $Q$, $C$ dengan $R$. Jadi $AB = PQ$, $BC = QR$, $AC = PR$, dan $\angle A = \angle P$, $\angle B = \angle Q$, $\angle C = \angle R$.

### Bangun sebangun

Dua bangun **sebangun** jika yang satu adalah pembesaran atau pengecilan dari yang lain. Syaratnya **dua-duanya** harus dipenuhi:

1. **sudut-sudut yang bersesuaian sama besar**, dan
2. **sisi-sisi yang bersesuaian sebanding** (perbandingannya sama).

Lambangnya $\sim$. Jika $ABCD \sim PQRS$, maka

$$\frac{PQ}{AB} = \frac{QR}{BC} = \frac{RS}{CD} = \frac{SP}{DA} = k$$

dengan $k$ adalah faktor skala dari $ABCD$ ke $PQRS$.

### Kenapa dua syarat itu perlu?

- Persegi dengan sisi 4 cm dan persegi panjang 4 cm × 8 cm punya sudut yang sama (semua $90^\circ$), tetapi sisinya tidak sebanding. Mereka **tidak sebangun**.
- Persegi dengan sisi 5 cm dan belah ketupat dengan sisi 10 cm punya sisi sebanding (semua dikali 2), tetapi sudut belah ketupat bukan $90^\circ$. Mereka juga **tidak sebangun**.

Mesin fotokopi tidak pernah meregangkan gambar ke satu arah saja, dan tidak pernah membengkokkan sudut. Karena itu kedua syarat harus dipenuhi.

### Pembesaran dan pengecilan

Faktor skala $k$ dihitung dari:

$$k = \frac{\text{panjang pada bangun baru}}{\text{panjang yang bersesuaian pada bangun asli}}$$

- $k > 1$: **pembesaran** (seperti zoom 150%, $k = 1{,}5$).
- $0 < k < 1$: **pengecilan** (seperti zoom 50%, $k = 0{,}5$).
- $k = 1$: ukuran sama, yaitu **kongruen**. Jadi bangun kongruen adalah kasus khusus bangun sebangun.

Sudut **tidak pernah** dikali $k$. Sudut $60^\circ$ tetap $60^\circ$ setelah difotokopi 200%.

## Contoh langkah demi langkah

Urutan berpikir: **pasangkan titik yang bersesuaian → cari faktor skala (jika sebangun) → hitung → cek**.

### Contoh 1: Memakai kekongruenan

**Soal.** Diketahui $\triangle ABC \cong \triangle PQR$, dengan $AB = 5$ cm, $BC = 7$ cm, $\angle A = 60^\circ$, dan $\angle B = 75^\circ$. Tentukan $PQ$, $QR$, $\angle P$, dan $\angle R$.

1. **Langkah 1: Pasangkan titik sesuai urutan.** $A \leftrightarrow P$, $B \leftrightarrow Q$, $C \leftrightarrow R$.
2. **Langkah 2: Salin ukuran yang bersesuaian.** Kongruen berarti fotokopi 100%. $PQ = AB = 5$ cm, $QR = BC = 7$ cm, $\angle P = \angle A = 60^\circ$.
3. **Langkah 3: Hitung sudut yang tersisa.** $\angle C = 180^\circ - 60^\circ - 75^\circ = 45^\circ$, jadi $\angle R = 45^\circ$.
4. **Cek jawaban.** Sudut $\triangle PQR$: $60^\circ + 75^\circ + 45^\circ = 180^\circ$, benar.

**Jawaban:** $PQ = 5$ cm, $QR = 7$ cm, $\angle P = 60^\circ$, $\angle R = 45^\circ$.

### Contoh 2: Apakah dua persegi panjang sebangun?

**Soal.** Persegi panjang I berukuran 4 cm × 6 cm. Persegi panjang II berukuran 6 cm × 9 cm. Persegi panjang III berukuran 6 cm × 8 cm. Mana yang sebangun dengan persegi panjang I?

1. **Langkah 1: Periksa sudut.** Semua persegi panjang punya empat sudut $90^\circ$. Syarat sudut terpenuhi.
2. **Langkah 2: Pasangkan sisi.** Sisi pendek dengan sisi pendek, sisi panjang dengan sisi panjang.
3. **Langkah 3: Bandingkan perbandingan sisi.**
   - I ke II: $\frac{6}{4} = 1{,}5$ dan $\frac{9}{6} = 1{,}5$. Sama.
   - I ke III: $\frac{6}{4} = 1{,}5$ dan $\frac{8}{6} \approx 1{,}33$. Tidak sama.
4. **Cek jawaban.** Fotokopi I dengan zoom 150%: $4 \times 1{,}5 = 6$ dan $6 \times 1{,}5 = 9$. Hasilnya tepat persegi panjang II. Tidak ada satu zoom yang mengubah I menjadi III.

**Jawaban:** hanya persegi panjang II yang sebangun dengan I.

### Contoh 3: Mencari sisi yang hilang

**Soal.** Segiempat $ABCD \sim PQRS$. Diketahui $AB = 6$ cm, $BC = 4$ cm, $PQ = 9$ cm, dan $RS = 12$ cm. Tentukan $QR$ dan $CD$.

1. **Langkah 1: Pasangkan sisi.** $AB \leftrightarrow PQ$, $BC \leftrightarrow QR$, $CD \leftrightarrow RS$.
2. **Langkah 2: Cari faktor skala.** Pakai pasangan yang keduanya diketahui: $k = \frac{PQ}{AB} = \frac{9}{6} = 1{,}5$. Jadi $PQRS$ adalah fotokopi $ABCD$ dengan zoom 150%.
3. **Langkah 3: Hitung $QR$ (dari kecil ke besar, kali $k$).** $QR = 1{,}5 \times 4 = 6$ cm.
4. **Langkah 4: Hitung $CD$ (dari besar ke kecil, bagi $k$).** $CD = \frac{12}{1{,}5} = 8$ cm.
5. **Cek jawaban.** Semua perbandingan sama: $\frac{9}{6} = \frac{6}{4} = \frac{12}{8} = 1{,}5$.

**Jawaban:** $QR = 6$ cm dan $CD = 8$ cm.

### Contoh 4: Soal cerita pembesaran foto

**Soal.** Made punya foto berukuran 4 cm × 6 cm. Ia mencetak ulang foto itu di studio di Denpasar sehingga sisi 4 cm menjadi 10 cm, tanpa mengubah bentuk. Berapa panjang sisi lainnya? Berapa besar sudut di pojok foto baru?

1. **Langkah 1: Pahami soal.** "Tanpa mengubah bentuk" berarti foto baru sebangun dengan foto lama.
2. **Langkah 2: Cari faktor skala.** $k = \frac{10}{4} = 2{,}5$. Ini pembesaran, karena $k > 1$.
3. **Langkah 3: Hitung sisi baru.** $6 \times 2{,}5 = 15$ cm.
4. **Langkah 4: Tentukan sudut.** Pada pembesaran, sudut tidak berubah. Sudut pojok tetap $90^\circ$.
5. **Cek jawaban.** $\frac{10}{4} = 2{,}5$ dan $\frac{15}{6} = 2{,}5$. Perbandingan sama, jadi sebangun.

**Jawaban:** sisi lainnya 15 cm, sudut pojok tetap $90^\circ$.

## Kesalahan yang sering terjadi

- **Salah memasangkan titik.** Dari $\triangle ABC \cong \triangle PQR$, menganggap $AB = QR$. Pasangan mengikuti urutan huruf: $AB$ dengan $PQ$. Tulis dulu $A \leftrightarrow P$, $B \leftrightarrow Q$, $C \leftrightarrow R$.
- **Mengalikan sudut dengan faktor skala.** Menganggap sudut $40^\circ$ menjadi $80^\circ$ saat diperbesar 2 kali. Mesin fotokopi tidak mengubah sudut, jadi tetap $40^\circ$.
- **Hanya memeriksa satu syarat.** Menyimpulkan dua bangun sebangun karena sudutnya sama (seperti persegi dan persegi panjang). Untuk segiempat dan bangun lain, periksa sudut **dan** perbandingan sisi.
- **Memakai selisih, bukan perbandingan.** Mengira 4 cm × 6 cm sebangun dengan 6 cm × 8 cm karena "keduanya ditambah 2". Sebangun berarti **dikali** angka yang sama, bukan ditambah.
- **Faktor skala terbalik.** Mengalikan $k$ ketika berpindah dari bangun besar ke kecil. Dari kecil ke besar, kali $k$; dari besar ke kecil, bagi $k$.

## Ringkasan

- **Kongruen** ($\cong$): bentuk dan ukuran sama; sudut dan sisi bersesuaian sama.
- **Sebangun** ($\sim$): sudut bersesuaian sama **dan** sisi bersesuaian sebanding.
- Faktor skala $k = \dfrac{\text{panjang baru}}{\text{panjang asli}}$; $k > 1$ pembesaran, $0 < k < 1$ pengecilan, $k = 1$ kongruen.
- Sudut tidak berubah oleh pembesaran atau pengecilan.
- Langkah: pasangkan titik → cari $k$ → kali atau bagi $k$ → cek perbandingan.

## Cek pemahaman

1. $\triangle KLM \cong \triangle XYZ$. Diketahui $KL = 8$ cm dan $\angle M = 40^\circ$. Tentukan $XY$ dan $\angle Z$.
2. Apakah persegi panjang 3 cm × 5 cm sebangun dengan persegi panjang 6 cm × 10 cm? Jelaskan.
3. Apakah persegi panjang 5 cm × 8 cm sebangun dengan persegi panjang 10 cm × 14 cm? Jelaskan.
4. $ABCD \sim EFGH$. Diketahui $AB = 12$ cm, $EF = 8$ cm, dan $FG = 6$ cm. Tentukan $BC$.
5. Sebuah poster berukuran 60 cm × 90 cm diperkecil untuk brosur tanpa mengubah bentuk, sehingga sisi 60 cm menjadi 20 cm. Berapa panjang sisi lainnya, dan berapa faktor skalanya?

### Kunci jawaban

1. $XY = 8$ cm dan $\angle Z = 40^\circ$. $K \leftrightarrow X$, $L \leftrightarrow Y$, $M \leftrightarrow Z$.
2. Ya. Sudut semua $90^\circ$, dan $\frac{6}{3} = \frac{10}{5} = 2$.
3. Tidak. $\frac{10}{5} = 2$ tetapi $\frac{14}{8} = 1{,}75$, perbandingannya berbeda.
4. $BC = 9$ cm. Faktor skala dari $EFGH$ ke $ABCD$ adalah $\frac{12}{8} = 1{,}5$, jadi $BC = 1{,}5 \times 6 = 9$.
5. 30 cm, faktor skala $\frac{1}{3}$. $k = \frac{20}{60} = \frac{1}{3}$, jadi $90 \times \frac{1}{3} = 30$ cm.
