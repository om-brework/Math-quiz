---
id: smp1-03-pembulatan-estimasi
judul: Pembulatan dan Estimasi
jenjang: smp1
moe: "Secondary 1 · Number and Algebra · N1 Numbers and their operations (Approximation and Estimation)"
prasyarat: [sd4-01-bilangan-sampai-100000, sd4-08-operasi-desimal, smp1-02-bilangan-bulat-real]
durasi_menit: 50
---

## Kenapa belajar ini?

Kalkulator sering memberi jawaban seperti $2{,}4916279\ldots$, padahal kita hanya butuh dua angka di belakang koma. Di kasir, kita ingin tahu dengan cepat apakah total belanja masuk akal. Pembulatan membuat bilangan lebih ringkas, dan estimasi membantu kita mendeteksi kesalahan hitung.

## Analogi

Bayangkan sebuah **jalan lurus dengan halte bus** pada jarak yang sama. Kamu berdiri di suatu titik di antara dua halte dan harus naik bus dari **halte terdekat**.

- Kalau kamu lebih dekat ke halte belakang, kamu mundur ke sana (**bulatkan ke bawah**).
- Kalau lebih dekat ke halte depan, kamu maju (**bulatkan ke atas**).
- Kalau tepat di tengah, aturannya: **maju** ke halte depan.

Jarak antarhalte ditentukan oleh "ketelitian" yang diminta. Membulatkan ke 1 tempat desimal berarti halte ada setiap 0,1. Membulatkan ke 2 tempat desimal berarti halte ada setiap 0,01.

## Konsep

### Aturan dasar pembulatan

1. Tentukan **angka terakhir yang dipertahankan**.
2. Lihat **satu angka sesudahnya** (angka penentu).
3. Jika angka penentu **0 sampai 4**, angka terakhir tetap. Jika **5 sampai 9**, angka terakhir ditambah 1.
4. Buang angka sesudahnya (atau ganti dengan 0 jika masih di depan koma).

Kenapa angka penentu saja yang dilihat? Angka penentu memberi tahu apakah kamu sudah melewati titik tengah antara dua halte. Angka 5 tepat di tengah atau lewat, jadi maju.

### Tempat desimal (t.d.)

**Tempat desimal** adalah banyak angka di belakang koma.

$7{,}3864$:

- 1 t.d.: angka penentu 8, jadi $7{,}4$.
- 2 t.d.: angka penentu 6, jadi $7{,}39$.
- 3 t.d.: angka penentu 4, jadi $7{,}386$.

Di garis bilangan, $7{,}3864$ terletak di antara halte $7{,}38$ dan $7{,}39$, lebih dekat ke $7{,}39$.

### Angka penting (a.p.)

**Angka penting** menunjukkan seberapa teliti sebuah bilangan. Aturannya:

1. Semua angka bukan nol adalah angka penting. ($254$ punya 3 a.p.)
2. Nol **di antara** angka bukan nol adalah angka penting. ($3{,}07$ punya 3 a.p.)
3. Nol **di depan** angka bukan nol pertama **bukan** angka penting. ($0{,}0045$ punya 2 a.p.)
4. Nol **di belakang** pada bilangan desimal adalah angka penting. ($2{,}50$ punya 3 a.p.)
5. Nol di belakang pada bilangan bulat, seperti $48.600$, bisa penting atau tidak. Kita harus melihat konteks atau keterangan pembulatannya.

Kenapa nol di depan tidak penting? $0{,}0045$ m sama dengan $4{,}5$ mm. Nol-nol di depan hanya menunjukkan letak koma karena satuannya, bukan ketelitian. Sebaliknya, $2{,}50$ berarti kita sudah mengukur sampai perseratus dan hasilnya tepat 0 perseratus.

**Cara membulatkan ke $n$ a.p.:** mulai menghitung dari **angka bukan nol pertama**, ambil $n$ angka, lalu lihat angka penentunya.

- $48.615$ ke 3 a.p.: angka penting pertama 4, ambil $4, 8, 6$. Angka penentu 1, jadi tetap. Ganti sisanya dengan 0: $48.600$.
- $0{,}004567$ ke 2 a.p.: mulai dari 4, ambil $4, 5$. Angka penentu 6, jadi naik: $0{,}0046$.

### Estimasi

**Estimasi** adalah perkiraan hasil hitung dengan membulatkan setiap bilangan, biasanya ke **1 angka penting**, lalu menghitung di kepala.

$$\frac{48{,}7 \times 0{,}198}{3{,}87} \approx \frac{50 \times 0{,}2}{4} = \frac{10}{4} = 2{,}5$$

Kegunaan utama estimasi: **memeriksa kewajaran** jawaban. Jika kalkulator memberi 24,9 atau 0,249 untuk soal di atas, estimasi 2,5 langsung memberi tahu ada salah ketik.

Tanda $\approx$ dibaca "kira-kira sama dengan".

## Contoh langkah demi langkah

### Contoh 1: Tempat desimal, termasuk kasus 9

**Soal.** Bulatkan (a) $12{,}0758$ ke 2 t.d.; (b) $9{,}96$ ke 1 t.d.

1. **Langkah 1: (a) Tandai angka terakhir.** 2 t.d. berarti sampai angka 7: $12{,}07|58$.
2. **Langkah 2: (a) Lihat angka penentu.** Angka penentu 5, jadi 7 naik menjadi 8. Hasil: $12{,}08$.
3. **Langkah 3: (b) Tandai dan lihat penentu.** $9{,}9|6$. Angka penentu 6, jadi 9 naik 1.
4. **Langkah 4: (b) Atasi angka 9 yang naik.** $9{,}9 + 0{,}1 = 10{,}0$. Tulis $10{,}0$, bukan $10$, karena diminta 1 t.d.
5. **Cek jawaban.** (a) $12{,}0758$ ada di antara halte $12{,}07$ dan $12{,}08$; jaraknya ke $12{,}08$ hanya $0{,}0042$. (b) $9{,}96$ ada di antara halte $9{,}9$ dan $10{,}0$, lebih dekat ke $10{,}0$. Benar.

**Jawaban:** (a) $12{,}08$; (b) $10{,}0$.

### Contoh 2: Angka penting

**Soal.** Bulatkan (a) $0{,}03059$ ke 2 a.p.; (b) $51.749$ ke 3 a.p.; (c) $2{,}0396$ ke 3 a.p.

1. **Langkah 1: (a) Cari angka penting pertama.** Nol di depan tidak dihitung. Angka penting pertama adalah 3. Ambil dua: $3, 0$. Jadi $0{,}030|59$.
2. **Langkah 2: (a) Bulatkan.** Angka penentu 5, jadi 0 naik menjadi 1. Hasil: $0{,}031$.
3. **Langkah 3: (b) Bulatkan.** Ambil $5, 1, 7$: $517|49$. Angka penentu 4, tetap. Ganti angka sisanya dengan 0 supaya nilainya tetap ribuan: $51.700$.
4. **Langkah 4: (c) Bulatkan.** Ambil $2, 0, 3$ (nol di antara angka bukan nol ikut dihitung): $2{,}03|96$. Angka penentu 9, jadi 3 naik menjadi 4. Hasil: $2{,}04$.
5. **Cek jawaban.** Hasil harus dekat dengan aslinya: $0{,}031 \approx 0{,}03059$, $51.700 \approx 51.749$, $2{,}04 \approx 2{,}0396$. Banyak angka pentingnya: $0{,}031$ punya 2, $51.700$ punya 3 (sesuai pembulatan), $2{,}04$ punya 3. Benar.

**Jawaban:** (a) $0{,}031$; (b) $51.700$; (c) $2{,}04$.

### Contoh 3: Estimasi lalu bandingkan

**Soal.** Estimasi nilai $\dfrac{48{,}7 \times 0{,}198}{3{,}87}$ dengan membulatkan ke 1 a.p. Lalu hitung dengan kalkulator dan bulatkan ke 3 a.p.

1. **Langkah 1: Bulatkan setiap bilangan ke 1 a.p.** $48{,}7 \approx 50$, $0{,}198 \approx 0{,}2$, $3{,}87 \approx 4$.
2. **Langkah 2: Hitung estimasi.** $\frac{50 \times 0{,}2}{4} = \frac{10}{4} = 2{,}5$.
3. **Langkah 3: Hitung dengan kalkulator.** $48{,}7 \times 0{,}198 = 9{,}6426$. Lalu $9{,}6426 \div 3{,}87 = 2{,}49162\ldots$
4. **Langkah 4: Bulatkan ke 3 a.p.** $2{,}49|162\ldots$ Angka penentu 1, jadi tetap: $2{,}49$.
5. **Cek jawaban.** Estimasi 2,5 dan hasil 2,49 sangat dekat. Letak koma sudah benar.

**Jawaban:** Estimasi $2{,}5$; nilai sebenarnya $\approx 2{,}49$ (3 a.p.).

### Contoh 4: Soal cerita, memeriksa kewajaran

**Soal.** Bu Rina membeli 19 kg beras seharga Rp14.850 per kg dan 6 bungkus minyak goreng seharga Rp38.200 per bungkus. Kasir menulis total Rp411.350. Apakah total ini wajar? Jika tidak, berapa total yang benar?

1. **Langkah 1: Bulatkan untuk estimasi.** $19 \approx 20$, $14.850 \approx 15.000$, $38.200 \approx 40.000$.
2. **Langkah 2: Hitung estimasi.** Beras $\approx 20 \times 15.000 = 300.000$. Minyak $\approx 6 \times 40.000 = 240.000$. Total $\approx 540.000$.
3. **Langkah 3: Bandingkan.** Ketiga bilangan dibulatkan ke atas, jadi estimasi sedikit lebih besar dari total sebenarnya. Tetapi selisih dengan Rp411.350 lebih dari Rp100.000. Itu terlalu jauh. Total kasir tidak wajar.
4. **Langkah 4: Hitung tepat.** Beras: $19 \times 14.850 = 20 \times 14.850 - 14.850 = 297.000 - 14.850 = 282.150$. Minyak: $6 \times 38.200 = 229.200$. Total $= 282.150 + 229.200 = 511.350$.
5. **Cek jawaban.** $511.350$ sedikit di bawah estimasi $540.000$, sesuai dugaan karena semua dibulatkan ke atas. Kasir tampaknya salah satu angka: $411.350$ seharusnya $511.350$.

**Jawaban:** Tidak wajar. Total yang benar Rp511.350.

## Kesalahan yang sering terjadi

- **Menghitung nol di depan sebagai angka penting.** $0{,}006049$ ke 2 a.p. ditulis $0{,}01$. Itu pembulatan ke 2 t.d., bukan 2 a.p. Mulai menghitung dari angka 6: $0{,}0060$.
- **Membuang nol yang menunjukkan ketelitian.** $0{,}006049$ ke 2 a.p. ditulis $0{,}006$. Itu hanya 1 a.p. Tulis $0{,}0060$.
- **Lupa mengganti dengan nol pada bilangan bulat.** $51.749$ ke 3 a.p. ditulis $517$. Nilainya berubah jauh. Benar: $51.700$.
- **Membulatkan bertahap.** $2{,}346$ ke 1 t.d.: dibulatkan dulu ke $2{,}35$, lalu ke $2{,}4$. Salah. Selalu bulatkan dari bilangan asli: angka penentunya 4, jadi $2{,}3$.
- **Membulatkan di tengah perhitungan.** Membulatkan $9{,}6426$ menjadi $9{,}6$ sebelum dibagi $3{,}87$, lalu hasilnya $2{,}48$. Simpan semua angka sampai langkah terakhir, baru bulatkan.

## Ringkasan

- Lihat angka penentu: 0 sampai 4 tetap, 5 sampai 9 naik.
- Tempat desimal dihitung dari koma. Angka penting dihitung dari angka bukan nol pertama.
- Nol di depan bukan angka penting; nol di antara angka bukan nol dan nol di belakang desimal adalah angka penting.
- Pertahankan nol yang diperlukan: $10{,}0$ (1 t.d.), $0{,}0060$ (2 a.p.), $51.700$.
- Estimasi: bulatkan ke 1 a.p., hitung di kepala, pakai untuk memeriksa kewajaran.
- Bulatkan hanya di langkah terakhir, dari bilangan asli.

## Cek pemahaman

1. Bulatkan $12{,}0758$ ke 1 t.d. dan ke 3 t.d.
2. Bulatkan $0{,}006049$ ke 2 a.p.
3. Bulatkan $395.280$ ke 2 a.p.
4. Estimasi $\dfrac{61{,}2 \times 3{,}89}{0{,}52}$ dengan membulatkan setiap bilangan ke 1 a.p.
5. Berapa banyak angka penting pada $0{,}04030$?

### Kunci jawaban

1. $12{,}1$ dan $12{,}076$. Untuk 1 t.d. angka penentunya 7; untuk 3 t.d. angka penentunya 8.
2. $0{,}0060$. Mulai dari 6, ambil $6, 0$; angka penentu 4 sehingga tetap, dan nol terakhir harus ditulis.
3. $400.000$. Ambil $3, 9$; angka penentu 5 sehingga 39 menjadi 40.
4. $480$. $\frac{60 \times 4}{0{,}5} = \frac{240}{0{,}5} = 480$; nilai sebenarnya sekitar $457{,}8$, jadi estimasi wajar.
5. 4 angka penting, yaitu $4, 0, 3, 0$. Dua nol di depan tidak dihitung.
