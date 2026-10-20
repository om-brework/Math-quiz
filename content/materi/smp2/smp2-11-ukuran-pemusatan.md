---
id: smp2-11-ukuran-pemusatan
judul: Penyajian Data Lanjut dan Ukuran Pemusatan
jenjang: smp2
moe: "Secondary 2 · Statistics and Probability · S1 Data analysis"
prasyarat: [smp1-12-penyajian-data]
durasi_menit: 55
---

## Kenapa belajar ini?

Wali kelas ingin tahu "nilai ulangan kelas kita kira-kira berapa?". Toko sepatu ingin tahu ukuran apa yang paling banyak dibeli. Untuk menjawab, kita perlu menyajikan data dengan rapi lalu memilih **satu angka wakil** yang menggambarkan seluruh data.

## Analogi

Bayangkan kelasmu harus memilih **satu wakil** untuk mewakili sekelompok data. Ada tiga cara memilih wakil, masing-masing dengan cerita sendiri:

- **Rata-rata (mean): kumpulkan lalu bagi rata.** Semua anak mengumpulkan permennya ke satu kantong, lalu permen dibagi sama banyak. Banyak permen per anak itulah rata-rata.
- **Median: anak yang berdiri di tengah barisan.** Semua anak berbaris urut dari yang terpendek ke yang tertinggi. Anak yang berdiri tepat di tengah adalah median.
- **Modus: yang paling laris.** Di toko sepatu, ukuran yang paling sering dibeli adalah modus.

Ketiga wakil ini kita pakai terus di setiap contoh. Wakil mana yang paling adil bergantung pada datanya.

## Konsep

### Diagram titik

**Diagram titik** menaruh satu titik (atau tanda $\times$) di atas garis bilangan untuk setiap data. Cocok untuk data sedikit, dan langsung memperlihatkan nilai yang sering muncul dan nilai yang menyendiri.

```
                x
        x   x   x
    x   x   x   x   x   x
  --+---+---+---+---+---+--
    5   6   7   8   9   10
        Nilai ulangan
```

### Diagram batang-daun

**Diagram batang-daun** memecah setiap data menjadi **batang** (angka depan) dan **daun** (angka terakhir). Daun ditulis urut dari kecil ke besar. Diagram ini selalu memerlukan **keterangan**, misalnya "4 | 1 berarti 41". Kelebihannya: bentuk sebaran terlihat seperti diagram batang, tetapi data aslinya tidak hilang.

### Histogram

**Histogram** dipakai untuk data **kontinu** (berat, tinggi, waktu) yang dikelompokkan dalam kelas, misalnya $10 < t \le 20$. Bedanya dengan diagram batang:

- batang histogram **saling menempel** tanpa celah, karena kelasnya bersambung,
- sumbu mendatar adalah garis bilangan kontinu, bukan nama kategori.

Pada materi ini lebar semua kelas sama, sehingga tinggi batang menunjukkan frekuensi.

### Rata-rata, median, modus

Untuk data $x_1, x_2, \ldots, x_n$:

$$\text{rata-rata} = \bar{x} = \frac{\text{jumlah semua data}}{\text{banyak data}} = \frac{\sum x}{n}$$

**Kenapa begitu?** Ini persis "kumpulkan lalu bagi rata". Jumlah semua data adalah isi kantong; dibagi $n$ adalah bagian tiap anak.

**Median**: urutkan data dulu.

- Jika $n$ ganjil, median adalah data ke-$\frac{n+1}{2}$.
- Jika $n$ genap, median adalah rata-rata dua data di tengah, yaitu data ke-$\frac{n}{2}$ dan ke-$\left(\frac{n}{2} + 1\right)$.

**Modus**: data yang paling sering muncul. Data bisa punya satu modus, lebih dari satu modus, atau tidak punya modus.

### Kegunaan masing-masing

| Ukuran | Kelebihan | Kekurangan | Cocok untuk |
|---|---|---|---|
| Rata-rata | Memakai semua data | Mudah tertarik oleh nilai ekstrem | Data tanpa nilai yang sangat menyimpang |
| Median | Tidak terpengaruh nilai ekstrem | Tidak memakai semua nilai | Data dengan nilai ekstrem, misalnya uang saku atau harga rumah |
| Modus | Bisa untuk data bukan angka | Bisa tidak ada atau lebih dari satu | Ukuran sepatu, warna favorit |

### Rata-rata data berkelompok

Jika data sudah dikelompokkan dalam kelas, nilai aslinya tidak diketahui. Kita **menaksir** dengan menganggap setiap data dalam satu kelas bernilai **nilai tengah** kelas itu.

$$\bar{x} \approx \frac{\sum f x}{\sum f}$$

dengan $f$ frekuensi dan $x$ nilai tengah kelas. Ini tetap "kumpulkan lalu bagi rata": $f x$ adalah isi kantong dari satu kelas. Kelas dengan frekuensi terbesar disebut **kelas modus**.

## Contoh langkah demi langkah

Urutan berpikir: **urutkan atau tabelkan data → hitung yang diminta → tafsirkan → cek**.

### Contoh 1: Data dari diagram titik

**Soal.** Nilai ulangan 10 siswa (sesuai diagram titik di atas): 7, 8, 6, 9, 8, 5, 8, 7, 10, 6. Tentukan rata-rata, median, dan modus.

1. **Langkah 1: Urutkan data.** 5, 6, 6, 7, 7, 8, 8, 8, 9, 10.
2. **Langkah 2: Rata-rata (kumpulkan lalu bagi).** Jumlah $= 5 + 6 + 6 + 7 + 7 + 8 + 8 + 8 + 9 + 10 = 74$. Rata-rata $= \frac{74}{10} = 7{,}4$.
3. **Langkah 3: Median (anak di tengah barisan).** $n = 10$ genap, jadi ambil data ke-5 dan ke-6: 7 dan 8. Median $= \frac{7 + 8}{2} = 7{,}5$.
4. **Langkah 4: Modus (paling laris).** Nilai 8 muncul 3 kali, terbanyak. Modus $= 8$.
5. **Cek jawaban.** Diagram titik: kolom 8 paling tinggi (3 titik), cocok dengan modus. Jumlah titik $1 + 2 + 2 + 3 + 1 + 1 = 10$, cocok dengan $n$.

**Jawaban:** rata-rata 7,4; median 7,5; modus 8.

### Contoh 2: Diagram batang-daun

**Soal.** Berat badan (kg) 11 siswa: 38, 41, 45, 42, 50, 47, 39, 45, 53, 45, 48. Buat diagram batang-daun, lalu tentukan median, modus, dan rata-rata (1 tempat desimal).

1. **Langkah 1: Tentukan batang dan daun.** Batang = puluhan (3, 4, 5), daun = satuan, diurutkan.

```
  Batang | Daun
     3   | 8 9
     4   | 1 2 5 5 5 7 8
     5   | 0 3

  Keterangan: 4 | 1 berarti 41 kg
```

2. **Langkah 2: Median.** Data sudah urut di diagram. $n = 11$ ganjil, median adalah data ke-$\frac{11 + 1}{2}$ = data ke-6. Hitung dari awal: 38, 39, 41, 42, 45, **45**. Median $= 45$ kg.
3. **Langkah 3: Modus.** Daun 5 pada batang 4 muncul 3 kali. Modus $= 45$ kg.
4. **Langkah 4: Rata-rata.** Jumlah $= 38 + 39 + 41 + 42 + 45 + 45 + 45 + 47 + 48 + 50 + 53 = 493$. Rata-rata $= \frac{493}{11} \approx 44{,}8$ kg.
5. **Cek jawaban.** Banyak daun $2 + 7 + 2 = 11$, cocok. Rata-rata $44{,}8$ berada di antara data terkecil 38 dan terbesar 53, wajar.

**Jawaban:** median 45 kg, modus 45 kg, rata-rata $\approx 44{,}8$ kg.

### Contoh 3: Soal cerita, memilih wakil yang adil

**Soal.** Uang saku harian 6 siswa: Rp10.000, Rp12.000, Rp10.000, Rp15.000, Rp13.000, dan Rp100.000. Ukuran mana yang paling tepat menggambarkan uang saku "biasa" kelompok ini?

1. **Langkah 1: Urutkan.** 10.000; 10.000; 12.000; 13.000; 15.000; 100.000.
2. **Langkah 2: Hitung rata-rata.** Jumlah $= 160.000$. Rata-rata $= \frac{160.000}{6} \approx$ Rp26.667.
3. **Langkah 3: Hitung median.** $n = 6$, data ke-3 dan ke-4: $\frac{12.000 + 13.000}{2} =$ Rp12.500.
4. **Langkah 4: Hitung modus.** Rp10.000 muncul 2 kali. Modus = Rp10.000.
5. **Langkah 5: Tafsirkan.** Lima dari enam siswa menerima Rp15.000 atau kurang, tetapi rata-ratanya Rp26.667. Satu nilai ekstrem (Rp100.000) "menarik" rata-rata ke atas, seperti satu anak yang memasukkan sangat banyak permen ke kantong. Median Rp12.500 tidak terpengaruh, karena anak di tengah barisan tetap sama.
6. **Cek jawaban.** Jika Rp100.000 diganti Rp14.000, median tetap Rp12.500, sedangkan rata-rata turun menjadi $\frac{74.000}{6} \approx$ Rp12.333. Median memang stabil.

**Jawaban:** median (Rp12.500) paling tepat.

### Contoh 4: Rata-rata data berkelompok

**Soal.** Waktu perjalanan 30 siswa dari rumah ke sekolah dicatat dalam tabel. Taksir rata-ratanya dan tentukan kelas modus.

| Waktu $t$ (menit) | Frekuensi $f$ |
|---|---|
| $0 < t \le 10$ | 5 |
| $10 < t \le 20$ | 12 |
| $20 < t \le 30$ | 8 |
| $30 < t \le 40$ | 5 |

1. **Langkah 1: Tentukan nilai tengah tiap kelas.** $\frac{0 + 10}{2} = 5$, lalu 15, 25, 35.
2. **Langkah 2: Hitung $f x$ (isi kantong tiap kelas).**

```
  Kelas       f     x     f x
  0 - 10      5     5      25
  10 - 20    12    15     180
  20 - 30     8    25     200
  30 - 40     5    35     175
  ---------------------------
  Jumlah     30           580
```

3. **Langkah 3: Bagi rata.** $\bar{x} \approx \frac{580}{30} \approx 19{,}3$ menit.
4. **Langkah 4: Kelas modus.** Frekuensi terbesar 12, yaitu kelas $10 < t \le 20$. Pada histogram, ini batang tertinggi.
5. **Cek jawaban.** $5 + 12 + 8 + 5 = 30$, cocok. Rata-rata 19,3 berada di kelas $10 < t \le 20$ yang paling padat, wajar.

**Jawaban:** rata-rata sekitar 19,3 menit; kelas modus $10 < t \le 20$.

## Kesalahan yang sering terjadi

- **Mencari median tanpa mengurutkan.** Dari 7, 8, 6, 9, 8 mengambil angka tengah 6. Barisan harus diurutkan dulu: 6, 7, 8, 8, 9, jadi median 8.
- **Median data genap.** Untuk $n = 10$, mengambil data ke-5 saja. Untuk $n$ genap, rata-ratakan dua data tengah.
- **Lupa keterangan batang-daun.** Tanpa keterangan, "4 | 1" bisa berarti 41, 4,1, atau 410.
- **Rata-rata berkelompok dibagi banyak kelas.** Menghitung $\frac{580}{4}$. Pembaginya jumlah frekuensi, $\sum f = 30$, bukan banyak kelas.
- **Menjumlahkan nilai tengah tanpa dikali frekuensi.** $5 + 15 + 25 + 35$ hanya menghitung satu anak per kelas. Setiap nilai tengah harus dikali frekuensinya.

## Ringkasan

- Diagram titik dan batang-daun menyimpan setiap data; histogram dipakai untuk data kontinu berkelompok dengan batang menempel.
- Rata-rata $= \frac{\sum x}{n}$ (kumpulkan lalu bagi rata); median = nilai tengah data urut; modus = nilai paling sering.
- Median lebih tepat jika ada nilai ekstrem; modus cocok untuk data kategori; rata-rata memakai semua data.
- Rata-rata data berkelompok: $\bar{x} \approx \frac{\sum f x}{\sum f}$ dengan $x$ nilai tengah kelas.
- Selalu cek: banyak data cocok, dan wakil berada di rentang data.

## Cek pemahaman

1. Tentukan rata-rata, median, dan modus dari 4, 7, 7, 9, 13.
2. Tentukan median dari 12, 5, 9, 20, 15, 8.
3. Diagram batang-daun berikut (keterangan $2 \mid 0$ berarti 20) menunjukkan skor 8 peserta lomba. Tentukan median, modus, dan rata-rata.

```
  1 | 2 5 8
  2 | 0 3 3 7
  3 | 1
```

4. Rata-rata nilai 5 ulangan Budi adalah 76. Setelah ulangan keenam dengan nilai 88, berapa rata-rata barunya?
5. Berat 20 paket di kantor pos: 4 paket di kelas $0 < m \le 2$ kg, 10 paket di kelas $2 < m \le 4$ kg, dan 6 paket di kelas $4 < m \le 6$ kg. Taksir rata-rata berat paket.

### Kunci jawaban

1. Rata-rata 8, median 7, modus 7. Jumlah 40 dibagi 5; data tengah ke-3 adalah 7.
2. 10,5. Urutan 5, 8, 9, 12, 15, 20; dua data tengah 9 dan 12.
3. Median 21,5; modus 23; rata-rata 21,125. Data: 12, 15, 18, 20, 23, 23, 27, 31; jumlah 169 dibagi 8.
4. 78. Jumlah 5 nilai $= 5 \times 76 = 380$; ditambah 88 menjadi 468; $468 \div 6 = 78$.
5. 3,2 kg. Nilai tengah 1, 3, 5; $\sum f x = 4 + 30 + 30 = 64$; $64 \div 20 = 3{,}2$.
