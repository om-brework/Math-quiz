---
id: smp3-03-pertidaksamaan-simultan
judul: Pertidaksamaan Linear Simultan
jenjang: smp3
moe: "Secondary 3 · Number and Algebra · N7 Equations and inequalities"
prasyarat: [smp2-05-pertidaksamaan-linear]
durasi_menit: 45
---

## Kenapa belajar ini?

Sering kali sebuah jawaban harus memenuhi **dua syarat sekaligus**. Jumlah kursi harus cukup untuk semua tamu, tetapi biayanya tidak boleh melebihi anggaran. Nilai rapor harus di atas batas lulus, tetapi di bawah batas tertentu untuk masuk kelompok belajar tertentu. Pertidaksamaan simultan mencari semua nilai yang lolos kedua syarat.

## Analogi

Bayangkan sebuah **wahana di taman bermain** yang dijaga **dua petugas** di dua pintu berurutan.

- Petugas pintu pertama hanya meloloskan pengunjung yang tingginya **lebih dari 120 cm**.
- Petugas pintu kedua hanya meloloskan pengunjung yang tingginya **paling tinggi 190 cm**.

Yang boleh naik wahana adalah pengunjung yang lolos **kedua pintu**. Tinggi 110 cm tertahan di pintu pertama. Tinggi 195 cm lolos pintu pertama tetapi tertahan di pintu kedua. Yang naik hanya mereka dengan $120 < t \le 190$.

Pada garis bilangan, setiap pintu meloloskan satu daerah. Daerah yang lolos kedua pintu adalah **bagian yang tumpang tindih**, disebut **irisan**.

## Konsep

### Dua pertidaksamaan sekaligus

**Pertidaksamaan linear simultan** adalah dua (atau lebih) pertidaksamaan linear dengan variabel yang sama, yang harus dipenuhi **bersamaan**. Contoh:

$$x + 3 > 5 \quad\text{dan}\quad 2x - 1 \le 9$$

Penyelesaiannya adalah semua $x$ yang memenuhi **keduanya**, yaitu irisan dari dua daerah penyelesaian.

### Cara menyelesaikan

1. **Selesaikan setiap pertidaksamaan sendiri-sendiri** (seperti pada materi pertidaksamaan linear; ingat membalik tanda jika mengali atau membagi dengan bilangan negatif).
2. **Gambar kedua penyelesaian** pada satu garis bilangan, satu di atas yang lain.
3. **Ambil irisannya**: bagian garis bilangan yang tertutup oleh kedua daerah.
4. **Tulis jawaban** dalam bentuk ringkas, misalnya $2 < x \le 5$.

### Bentuk bersambung $a < bx + c \le d$

Pertidaksamaan seperti $-3 \le 2x + 1 < 9$ sebenarnya dua pertidaksamaan yang ditulis bersambung:

$$-3 \le 2x + 1 \quad\text{dan}\quad 2x + 1 < 9$$

Jika variabel **hanya ada di bagian tengah**, kita boleh mengolah ketiga bagian sekaligus: kurangi, tambah, kali, atau bagi ketiga bagian dengan bilangan yang sama. Jika membagi dengan bilangan negatif, **kedua** tanda dibalik.

Jika variabel ada di **lebih dari satu bagian**, misalnya $2x - 5 < x + 1 \le 3x + 7$, kita **wajib memecahnya** menjadi dua pertidaksamaan dulu.

### Kemungkinan hasil irisan

```
  Kasus 1: daerah bertumpang tindih -> ada penyelesaian, berupa selang
     x > 2         o=====================>
     x <= 5   <================●
     irisan        o===========●            2 < x <= 5

  Kasus 2: searah -> pilih yang lebih ketat
     x >= 3          ●=====================>
     x >= 5                  ●=============>
     irisan                  ●=============>  x >= 5

  Kasus 3: tidak bertemu -> tidak ada penyelesaian
     x < 1    <=====o
     x > 4                     o===========>
     irisan   (kosong)
```

### Bilangan bulat yang memenuhi

Banyak soal meminta **bilangan bulat** yang memenuhi. Setelah mendapat selang, daftar bilangan bulat di dalamnya dengan memperhatikan ujungnya:

- Pada $2 < x \le 5$, angka 2 **tidak** termasuk (bulatan kosong), angka 5 **termasuk** (bulatan penuh). Bilangan bulatnya 3, 4, 5.
- Pada $-2 \le x < 4$, bilangan bulatnya $-2, -1, 0, 1, 2, 3$.

## Contoh langkah demi langkah

Urutan berpikir: **pintu pertama → pintu kedua → gambar bersama → irisan → (bilangan bulat) → cek**.

### Contoh 1: Dua pertidaksamaan terpisah

**Soal.** Selesaikan $x + 3 > 5$ dan $2x - 1 \le 9$. Sebutkan bilangan bulat yang memenuhi.

1. **Langkah 1: Pintu pertama.** $x + 3 > 5$, jadi $x > 2$.
2. **Langkah 2: Pintu kedua.** $2x - 1 \le 9$, jadi $2x \le 10$ dan $x \le 5$.
3. **Langkah 3: Gambar bersama.** $x > 2$: bulatan kosong di 2, panah ke kanan. $x \le 5$: bulatan penuh di 5, panah ke kiri.
4. **Langkah 4: Ambil irisan.** Bagian yang tertutup keduanya: dari 2 (tidak termasuk) sampai 5 (termasuk). Jadi $2 < x \le 5$.
5. **Langkah 5: Bilangan bulat.** 3, 4, 5.
6. **Cek jawaban.** $x = 5$: $8 > 5$ benar dan $9 \le 9$ benar. $x = 2$: $5 > 5$ salah, jadi 2 tertahan di pintu pertama. $x = 6$: $11 \le 9$ salah, tertahan di pintu kedua.

**Jawaban:** $2 < x \le 5$; bilangan bulat 3, 4, 5.

### Contoh 2: Bentuk bersambung

**Soal.** Selesaikan $-3 \le 2x + 1 < 9$ dan sebutkan bilangan bulat yang memenuhi.

1. **Langkah 1: Periksa letak variabel.** $x$ hanya ada di bagian tengah, jadi ketiga bagian boleh diolah sekaligus.
2. **Langkah 2: Kurangi ketiga bagian dengan 1.** $-4 \le 2x < 8$.
3. **Langkah 3: Bagi ketiga bagian dengan 2 (positif, tanda tetap).** $-2 \le x < 4$.
4. **Langkah 4: Bilangan bulat.** $-2$ termasuk, 4 tidak termasuk: $-2, -1, 0, 1, 2, 3$.
5. **Cek jawaban.** $x = -2$: $2(-2) + 1 = -3$, dan $-3 \le -3 < 9$ benar. $x = 4$: $2(4) + 1 = 9$, dan $9 < 9$ salah. Cocok dengan ujung-ujungnya.

**Jawaban:** $-2 \le x < 4$; bilangan bulat $-2, -1, 0, 1, 2, 3$.

### Contoh 3: Variabel di tiga bagian, dengan pembalikan tanda

**Soal.** Selesaikan $2x - 5 < x + 1 \le 3x + 7$. Tentukan banyak bilangan bulat yang memenuhi, dan sebutkan bilangan prima yang memenuhi.

1. **Langkah 1: Pecah menjadi dua pintu.** Karena $x$ ada di ketiga bagian:
$$2x - 5 < x + 1 \quad\text{dan}\quad x + 1 \le 3x + 7$$
2. **Langkah 2: Pintu pertama.** $2x - x < 1 + 5$, jadi $x < 6$.
3. **Langkah 3: Pintu kedua.** $x - 3x \le 7 - 1$, jadi $-2x \le 6$. Bagi dengan $-2$ dan **balik tanda**: $x \ge -3$.
4. **Langkah 4: Irisan.** $-3 \le x < 6$.
5. **Langkah 5: Bilangan bulat dan prima.** Bilangan bulat: $-3, -2, -1, 0, 1, 2, 3, 4, 5$, ada 9. Bilangan prima di antaranya: 2, 3, 5.
6. **Cek jawaban.** $x = -3$: $-11 < -2$ benar, dan $-2 \le -2$ benar. $x = 6$: $7 < 7$ salah. $x = -4$: $-3 \le -5$ salah. Kedua ujung cocok.

**Jawaban:** $-3 \le x < 6$; ada 9 bilangan bulat; bilangan prima 2, 3, 5.

### Contoh 4: Irisan kosong dan irisan searah

**Soal.** Selesaikan (a) $3x + 2 < 5$ dan $x - 1 > 3$; (b) $x + 4 \ge 7$ dan $2x \ge 10$.

1. **Langkah 1: Selesaikan setiap pintu (a).** $3x < 3$, jadi $x < 1$. Dan $x > 4$.
2. **Langkah 2: Irisan (a).** Pintu pertama hanya meloloskan bilangan di kiri 1, pintu kedua hanya di kanan 4. Tidak ada bilangan yang lolos keduanya.
3. **Langkah 3: Selesaikan setiap pintu (b).** $x \ge 3$ dan $x \ge 5$.
4. **Langkah 4: Irisan (b).** Keduanya menunjuk ke kanan. Bilangan yang lolos pintu kedua ($x \ge 5$) pasti lolos pintu pertama. Jadi irisannya $x \ge 5$, syarat yang lebih ketat.
5. **Cek jawaban.** (b) $x = 4$: lolos $x \ge 3$, tetapi $2(4) = 8 \ge 10$ salah. Jadi 4 memang tidak termasuk, dan $x \ge 5$ benar.

**Jawaban:** (a) tidak ada penyelesaian; (b) $x \ge 5$.

### Contoh 5: Soal cerita

**Soal.** Panitia acara 17 Agustus di kampung menyewa kursi plastik dengan harga Rp8.000 per kursi, ditambah biaya antar Rp30.000. Anggarannya paling banyak Rp250.000. Kursi harus cukup untuk paling sedikit 22 tamu. Berapa banyak kursi yang boleh disewa? Berapa paling banyak?

1. **Langkah 1: Pilih variabel.** Misalkan $n$ = banyak kursi (bilangan bulat).
2. **Langkah 2: Pintu pertama (anggaran).**
$$8.000n + 30.000 \le 250.000 \quad\Rightarrow\quad 8.000n \le 220.000 \quad\Rightarrow\quad n \le 27{,}5$$
3. **Langkah 3: Pintu kedua (tamu).** $n \ge 22$.
4. **Langkah 4: Irisan.** $22 \le n \le 27{,}5$. Karena $n$ bilangan bulat: $n = 22, 23, 24, 25, 26, 27$.
5. **Cek jawaban.** 27 kursi: $27 \times 8.000 + 30.000 = 216.000 + 30.000 = 246.000 \le 250.000$, cukup. 28 kursi: $224.000 + 30.000 = 254.000$, melebihi anggaran.

**Jawaban:** antara 22 dan 27 kursi; paling banyak 27 kursi.

## Kesalahan yang sering terjadi

- **Mengambil gabungan, bukan irisan.** Pada $x > 2$ dan $x \le 5$, menjawab "semua bilangan" karena setiap bilangan lolos salah satu pintu. Kata "dan" berarti harus lolos **kedua** pintu.
- **Mengolah tiga bagian sekaligus padahal variabel ada di beberapa bagian.** Pada $2x - 5 < x + 1 \le 3x + 7$, mengurangi $x$ dari semua bagian tidak menghilangkan $x$ dari ujung-ujungnya. Pecah menjadi dua pertidaksamaan.
- **Membalik hanya satu tanda.** Dari $-8 < -2x \le 4$, menulis $4 > x \le -2$. Membagi dengan $-2$ membalik **kedua** tanda: $4 > x \ge -2$, yaitu $-2 \le x < 4$.
- **Salah memasukkan ujung saat mendaftar bilangan bulat.** Pada $2 < x \le 5$, menulis 2, 3, 4, 5. Angka 2 bertanda $<$, jadi tidak termasuk.
- **Menulis selang yang mustahil.** Pada soal tanpa irisan, menulis $4 < x < 1$. Tidak ada bilangan yang lebih dari 4 sekaligus kurang dari 1. Tulis "tidak ada penyelesaian".

## Ringkasan

- Pertidaksamaan simultan: semua syarat harus dipenuhi bersamaan, jadi penyelesaiannya adalah **irisan**.
- Selesaikan tiap pertidaksamaan, gambar pada satu garis bilangan, ambil bagian yang tertutup keduanya.
- Bentuk $a < bx + c \le d$ boleh diolah sekaligus jika variabel hanya di tengah; kalau tidak, pecah menjadi dua.
- Membagi dengan bilangan negatif membalik **semua** tanda.
- Irisan bisa berupa selang, satu arah (pilih yang lebih ketat), atau kosong.
- Saat mendaftar bilangan bulat, periksa apakah ujung termasuk ($\le, \ge$) atau tidak ($<, >$).

## Cek pemahaman

1. Selesaikan $x - 2 \ge 1$ dan $3x < 21$, lalu sebutkan bilangan bulat yang memenuhi.
2. Selesaikan $1 < 2x + 3 \le 11$.
3. Selesaikan $3x - 1 \le x + 7 < 4x + 1$, lalu sebutkan bilangan bulat yang memenuhi.
4. Selesaikan $4 - x > 1$ dan $2x + 5 \ge 13$.
5. Tentukan bilangan bulat terkecil dan terbesar yang memenuhi $-7 < 1 - 2x \le 5$.

### Kunci jawaban

1. $3 \le x < 7$; bilangan bulat 3, 4, 5, 6. Pintu pertama $x \ge 3$, pintu kedua $x < 7$.
2. $-1 < x \le 4$. Kurangi 3: $-2 < 2x \le 8$, lalu bagi 2.
3. $2 < x \le 4$; bilangan bulat 3 dan 4. Dari $2x \le 8$ didapat $x \le 4$; dari $6 < 3x$ didapat $x > 2$.
4. Tidak ada penyelesaian. Pintu pertama $x < 3$, pintu kedua $x \ge 4$; keduanya tidak bertemu.
5. Terkecil $-2$, terbesar 3. Kurangi 1: $-8 < -2x \le 4$; bagi $-2$ dan balik kedua tanda: $4 > x \ge -2$, yaitu $-2 \le x < 4$.
