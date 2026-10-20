---
id: sma1-04-ukuran-penyebaran
judul: Ukuran Penyebaran Data
jenjang: sma1
moe: "Secondary 4 · Statistics and Probability · S1 Data handling and analysis"
prasyarat: [smp2-11-ukuran-pemusatan]
durasi_menit: 60
---

## Kenapa belajar ini?

Dua kelas bisa punya rata-rata nilai yang sama, tetapi di satu kelas nilainya rapat, di kelas lain sangat beragam. Rata-rata saja tidak cukup. Ukuran penyebaran memberi tahu seberapa **konsisten** data, sehingga guru, pelatih, atau pemilik usaha bisa membandingkan dua kelompok dengan adil.

## Analogi

Bayangkan siswa satu angkatan **berbaris saat upacara bendera**, diurutkan dari yang paling pendek ke yang paling tinggi.

- Ketua kelas menancapkan **tiga tiang pembatas** sehingga barisan terbagi menjadi **empat regu sama banyak**. Tiang-tiang itu adalah **kuartil** $Q_1$, $Q_2$ (median), dan $Q_3$.
- Jarak dari siswa terpendek ke tertinggi adalah **jangkauan**. Jarak antara tiang pertama dan tiang ketiga adalah **jangkauan antarkuartil**: lebar dua regu di tengah.
- Pembina upacara berdiri di posisi **tinggi rata-rata**. **Simpangan baku** mengukur seberapa jauh, secara umum, tinggi tiap siswa dari posisi itu.
- **Ogive** adalah papan hitung: "sampai tinggi sekian, sudah berapa siswa yang lewat?"

## Konsep

### Kuartil, jangkauan, dan jangkauan antarkuartil

Untuk data tunggal yang sudah **diurutkan**:

1. Cari **median** $Q_2$, nilai tengah.
2. $Q_1$ adalah median **separuh bawah**, $Q_3$ adalah median **separuh atas**. Jika banyak data ganjil, median sendiri tidak ikut ke separuh mana pun.

Lalu:

$$\text{jangkauan} = \text{maks} - \text{min}, \qquad \text{JAK} = Q_3 - Q_1$$

Jangkauan mudah dihitung tetapi sangat terpengaruh **pencilan** (nilai ekstrem). JAK hanya melihat 50% data di tengah, jadi lebih tahan terhadap pencilan.

### Persentil

**Persentil ke-$k$** ($P_k$) adalah nilai yang di bawahnya terdapat $k\%$ data. Jadi $Q_1 = P_{25}$, median $= P_{50}$, dan $Q_3 = P_{75}$. Untuk data berkelompok, persentil dibaca dari ogive pada frekuensi kumulatif $\frac{k}{100} \times n$.

### Simpangan baku

Untuk setiap data, hitung **simpangan** $x - \bar{x}$. Simpangan positif dan negatif selalu saling menghapus (jumlahnya nol), jadi kita **kuadratkan** dulu, ambil rata-ratanya, lalu ambil **akar** agar satuannya kembali seperti data asli:

$$\sigma = \sqrt{\frac{\sum (x - \bar{x})^2}{n}} = \sqrt{\frac{\sum x^2}{n} - \bar{x}^2}$$

Bentuk kedua lebih praktis. Ia didapat dengan mengekspansi $(x - \bar{x})^2 = x^2 - 2x\bar{x} + \bar{x}^2$ lalu menjumlahkan, karena $\sum x = n\bar{x}$.

Untuk **data berkelompok** (atau tabel frekuensi), pakai titik tengah kelas sebagai $x$ dan frekuensi $f$:

$$\sigma = \sqrt{\frac{\sum f x^2}{\sum f} - \left(\frac{\sum f x}{\sum f}\right)^2}$$

Pada kalkulator ilmiah, pakai tombol $\sigma_x$ (pembagi $n$), bukan $s_x$.

### Ogive

**Ogive** adalah grafik frekuensi kumulatif. Sumbu mendatar berisi **batas atas kelas**, sumbu tegak berisi frekuensi kumulatif. Titik-titik dihubungkan dengan kurva mulus (atau garis lurus).

Untuk membaca nilai pada frekuensi kumulatif tertentu: tarik garis mendatar dari sumbu tegak ke kurva, lalu turun ke sumbu mendatar. Jika titiknya dihubungkan garis lurus, pembacaan ini sama dengan **interpolasi linear** di dalam kelas.

### Diagram kotak-garis

Diagram kotak-garis (box plot) meringkas lima angka: **minimum, $Q_1$, median, $Q_3$, maksimum**. Kotak membentang dari $Q_1$ ke $Q_3$ dengan garis di median, dan "kumis" menjulur ke minimum dan maksimum. Lebar kotak = JAK.

### Membandingkan dua kelompok data

Selalu bandingkan **dua hal**, lalu tulis kesimpulan dalam konteks soal:

1. **Pusat** (rata-rata atau median): kelompok mana yang umumnya lebih tinggi?
2. **Sebaran** (simpangan baku atau JAK): kelompok mana yang lebih konsisten? Sebaran kecil berarti lebih konsisten.

## Contoh langkah demi langkah

### Contoh 1: Kuartil dan diagram kotak-garis

**Soal.** Nilai ulangan 11 siswa: 52, 60, 63, 65, 70, 72, 75, 78, 80, 85, 94. Tentukan kuartil, jangkauan, JAK, dan gambar diagram kotak-garisnya.

1. **Langkah 1: Pastikan data urut.** Sudah urut dari kecil ke besar.
2. **Langkah 2: Median.** Ada 11 data, median data ke-6: $Q_2 = 72$.
3. **Langkah 3: $Q_1$ dan $Q_3$.** Separuh bawah 52, 60, 63, 65, 70: $Q_1 = 63$. Separuh atas 75, 78, 80, 85, 94: $Q_3 = 80$.
4. **Langkah 4: Jangkauan dan JAK.** Jangkauan $= 94 - 52 = 42$. JAK $= 80 - 63 = 17$.
5. **Langkah 5: Gambar.**

   ```
         52         63       72      80            94
         |----------[========|=======]-------------|
       +----+----+----+----+----+----+----+----+----+
       50        60        70        80        90
   ```

6. **Cek jawaban.** Tiga tiang membagi barisan menjadi empat regu: 52–60, 65–70, 75–78, 85–94. Masing-masing berisi 2 siswa. Seimbang.

**Jawaban:** $Q_1 = 63$, $Q_2 = 72$, $Q_3 = 80$, jangkauan 42, JAK 17.

### Contoh 2: Simpangan baku data tunggal

**Soal.** Waktu Putu bermain ponsel dalam lima hari (jam): 4, 6, 7, 9, 14. Hitung simpangan bakunya.

1. **Langkah 1: Rata-rata.** $\bar{x} = \frac{4 + 6 + 7 + 9 + 14}{5} = \frac{40}{5} = 8$.
2. **Langkah 2: Simpangan dari posisi pembina.** $-4, -2, -1, 1, 6$. Jumlahnya 0, sesuai teori.
3. **Langkah 3: Kuadrat dan jumlah.** $16 + 4 + 1 + 1 + 36 = 58$.
4. **Langkah 4: Bagi $n$ lalu akar.** $\sigma = \sqrt{\frac{58}{5}} = \sqrt{11{,}6} \approx 3{,}41$ jam.
5. **Cek jawaban.** Rumus kedua: $\sum x^2 = 16 + 36 + 49 + 81 + 196 = 378$. Maka $\frac{378}{5} - 8^2 = 75{,}6 - 64 = 11{,}6$. Sama.

**Jawaban:** $\sigma \approx 3{,}41$ jam.

### Contoh 3: Simpangan baku data berkelompok

**Soal.** Waktu tempuh 40 siswa dari rumah ke sekolah:

```
Waktu t (menit)   Frekuensi
0  < t <= 10          5
10 < t <= 20         12
20 < t <= 30         15
30 < t <= 40          6
40 < t <= 50          2
```

Hitung rata-rata dan simpangan bakunya.

1. **Langkah 1: Titik tengah.** 5, 15, 25, 35, 45.
2. **Langkah 2: Hitung $\sum fx$.** $5(5) + 12(15) + 15(25) + 6(35) + 2(45) = 25 + 180 + 375 + 210 + 90 = 880$.
3. **Langkah 3: Rata-rata.** $\bar{x} = \frac{880}{40} = 22$ menit.
4. **Langkah 4: Hitung $\sum fx^2$.** $5(25) + 12(225) + 15(625) + 6(1.225) + 2(2.025) = 125 + 2.700 + 9.375 + 7.350 + 4.050 = 23.600$.
5. **Langkah 5: Simpangan baku.** $\sigma = \sqrt{\frac{23.600}{40} - 22^2} = \sqrt{590 - 484} = \sqrt{106} \approx 10{,}3$ menit.
6. **Cek jawaban.** Sebagian besar data ada di antara $22 - 10{,}3 \approx 12$ dan $22 + 10{,}3 \approx 32$ menit. Kelas 10–20 dan 20–30 memuat 27 dari 40 siswa. Masuk akal.

**Jawaban:** Rata-rata 22 menit, simpangan baku sekitar 10,3 menit.

### Contoh 4: Membaca ogive

**Soal.** Dengan data Contoh 3, buat tabel frekuensi kumulatif, lalu perkirakan median, $Q_1$, $Q_3$, JAK, persentil ke-90, dan banyak siswa yang butuh lebih dari 35 menit.

1. **Langkah 1: Frekuensi kumulatif.**

   ```
   t <=        10   20   30   40   50
   Kumulatif    5   17   32   38   40
   ```

   Ogive digambar melalui $(0, 0), (10, 5), (20, 17), (30, 32), (40, 38), (50, 40)$.
2. **Langkah 2: Tentukan posisi.** Median pada kumulatif $\frac{1}{2}(40) = 20$, $Q_1$ pada 10, $Q_3$ pada 30, $P_{90}$ pada $0{,}9 \times 40 = 36$.
3. **Langkah 3: Baca dari ogive (interpolasi garis lurus).**
   - Median: kumulatif 20 ada di kelas 20–30 (17 sampai 32). $20 + \frac{20 - 17}{15} \times 10 = 22$ menit.
   - $Q_1$: $10 + \frac{10 - 5}{12} \times 10 \approx 14{,}2$ menit.
   - $Q_3$: $20 + \frac{30 - 17}{15} \times 10 \approx 28{,}7$ menit.
   - $P_{90}$: $30 + \frac{36 - 32}{6} \times 10 \approx 36{,}7$ menit.
4. **Langkah 4: JAK.** $28{,}67 - 14{,}17 = 14{,}5$ menit.
5. **Langkah 5: Lebih dari 35 menit.** Di $t = 35$, kumulatif $= 32 + \frac{5}{10} \times 6 = 35$. Jadi $40 - 35 = 5$ siswa.
6. **Cek jawaban.** Urutan $Q_1 < $ median $< Q_3 < P_{90}$ terpenuhi: $14{,}2 < 22 < 28{,}7 < 36{,}7$.

**Jawaban:** Median 22 menit, $Q_1 \approx 14{,}2$, $Q_3 \approx 28{,}7$, JAK $\approx 14{,}5$ menit, $P_{90} \approx 36{,}7$ menit, sekitar 5 siswa.

### Contoh 5: Membandingkan dua kelas

**Soal.** Ringkasan nilai ujian dua kelas:

```
          Min   Q1   Median   Q3   Maks
Kelas A    55   65     72     78    90
Kelas B    40   60     75     85    98
```

Bandingkan kedua kelas.

1. **Langkah 1: Bandingkan pusat.** Median B (75) lebih tinggi dari median A (72). Secara umum siswa B sedikit lebih tinggi nilainya.
2. **Langkah 2: Hitung sebaran.** JAK A $= 78 - 65 = 13$, JAK B $= 85 - 60 = 25$. Jangkauan A $= 35$, B $= 58$.
3. **Langkah 3: Simpulkan dalam konteks.** Nilai kelas A lebih konsisten (sebaran lebih kecil), sedangkan kelas B lebih beragam: ada yang sangat tinggi dan ada yang rendah.
4. **Cek jawaban.** Pastikan kesimpulan menyebut **pusat dan sebaran**, dengan angka pendukung masing-masing.

**Jawaban:** Kelas B umumnya sedikit lebih tinggi (median 75 vs 72), tetapi kelas A lebih konsisten (JAK 13 vs 25).

## Kesalahan yang sering terjadi

- **Mencari kuartil dari data yang belum diurutkan.** Barisan upacara harus diurutkan dulu sebelum tiang dipasang.
- **Membagi $\sum f x^2$ lalu lupa mengurangi $\bar{x}^2$.** $\frac{23.600}{40} = 590$ bukan variansi. Variansinya $590 - 484 = 106$.
- **Memakai batas bawah kelas pada ogive.** Frekuensi kumulatif diplot terhadap **batas atas** kelas, karena "sampai 20 menit sudah 17 siswa".
- **Membandingkan hanya rata-rata.** Selalu sebut juga sebaran, dan tulis artinya dalam konteks soal.
- **Mengira sebaran besar berarti nilai lebih tinggi.** JAK atau simpangan baku besar berarti **kurang konsisten**, bukan lebih baik.

## Ringkasan

- Kuartil membagi data urut menjadi empat bagian sama banyak; $Q_1 = P_{25}$, median $= P_{50}$, $Q_3 = P_{75}$.
- Jangkauan $=$ maks $-$ min; JAK $= Q_3 - Q_1$ (tahan pencilan).
- $\sigma = \sqrt{\frac{\sum x^2}{n} - \bar{x}^2}$; data berkelompok: $\sigma = \sqrt{\frac{\sum fx^2}{\sum f} - \left(\frac{\sum fx}{\sum f}\right)^2}$.
- Ogive: frekuensi kumulatif terhadap batas atas kelas; dipakai membaca median, kuartil, dan persentil.
- Diagram kotak-garis: min, $Q_1$, median, $Q_3$, maks.
- Membandingkan dua kelompok: pusat dan sebaran, disimpulkan dalam konteks.

## Cek pemahaman

1. Data: 3, 5, 6, 8, 10, 12, 15, 18. Tentukan median, $Q_1$, $Q_3$, JAK, dan jangkauan.
2. Hitung simpangan baku dari 2, 4, 4, 4, 5, 5, 7, 9.
3. Tabel frekuensi: nilai 1 muncul 2 kali, nilai 2 muncul 5 kali, nilai 3 muncul 3 kali. Hitung rata-rata dan simpangan baku.
4. Dengan ogive pada Contoh 4, perkirakan persentil ke-60 waktu tempuh.
5. Toko A: median waktu layanan 50 detik, JAK 10 detik. Toko B: median 55 detik, JAK 25 detik. Toko mana yang lebih cepat dan lebih konsisten?

### Kunci jawaban

1. Median $\frac{8 + 10}{2} = 9$; $Q_1 = \frac{5 + 6}{2} = 5{,}5$; $Q_3 = \frac{12 + 15}{2} = 13{,}5$; JAK $= 8$; jangkauan $= 15$.
2. $\bar{x} = 5$, jumlah kuadrat simpangan $9 + 1 + 1 + 1 + 0 + 0 + 4 + 16 = 32$, jadi $\sigma = \sqrt{\frac{32}{8}} = 2$.
3. $\bar{x} = \frac{2 + 10 + 9}{10} = 2{,}1$; $\sigma = \sqrt{\frac{2 + 20 + 27}{10} - 2{,}1^2} = \sqrt{4{,}9 - 4{,}41} = \sqrt{0{,}49} = 0{,}7$.
4. Kumulatif $0{,}6 \times 40 = 24$, di kelas 20–30: $20 + \frac{24 - 17}{15} \times 10 \approx 24{,}7$ menit.
5. Toko A: median lebih kecil (umumnya lebih cepat) dan JAK lebih kecil (lebih konsisten).
