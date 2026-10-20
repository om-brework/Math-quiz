---
id: smp1-01-prima-fpb-kpk
judul: Bilangan Prima, FPB, dan KPK
jenjang: smp1
moe: "Secondary 1 · Number and Algebra · N1 Numbers and their operations"
prasyarat: [sd4-02-faktor-kelipatan, sd6-06-volume-lanjut]
durasi_menit: 60
---

## Kenapa belajar ini?

Bu Siti ingin membuat parsel sebanyak-banyaknya dengan isi yang sama persis. Dua bus berangkat dari terminal dengan jadwal berbeda, dan kita ingin tahu kapan keduanya berangkat bersamaan lagi. Soal seperti ini diselesaikan dengan FPB dan KPK. Kuncinya adalah memecah bilangan menjadi faktor-faktor prima.

## Analogi

Bayangkan setiap bilangan bulat positif sebagai **bangunan dari balok Lego**. Balok dasarnya adalah **bilangan prima**: 2, 3, 5, 7, 11, dan seterusnya. Balok prima tidak bisa dipecah lagi.

- $12 = 2 \times 2 \times 3$: bangunan dari dua balok "2" dan satu balok "3".
- Setiap bilangan punya **satu resep balok saja**. Tidak ada cara lain menyusun 12 dari balok prima.

Dengan melihat resep balok, kita bisa menjawab banyak pertanyaan:

- **FPB**: balok apa saja yang dimiliki **kedua** bangunan.
- **KPK**: kotak terkecil yang cukup untuk menyusun **kedua** bangunan.
- **Kuadrat**: bangunan yang baloknya bisa dibagi menjadi **dua kelompok kembar**.

## Konsep

### Bilangan prima

**Bilangan prima** adalah bilangan bulat lebih dari 1 yang tepat mempunyai **dua faktor**: 1 dan dirinya sendiri.

- Bilangan prima di bawah 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.
- 2 adalah satu-satunya bilangan prima genap.
- Bilangan lebih dari 1 yang bukan prima disebut **bilangan komposit**. Contoh: $15 = 3 \times 5$.

Kenapa 1 bukan prima? Karena 1 hanya punya satu faktor. Selain itu, kalau 1 dianggap balok, resep balok tidak lagi tunggal: $6 = 2 \times 3 = 1 \times 2 \times 3 = 1 \times 1 \times 2 \times 3$. Dengan mengecualikan 1, setiap bilangan punya tepat satu resep.

**Mengecek apakah $n$ prima:** coba bagi $n$ dengan bilangan prima 2, 3, 5, 7, ... selama kuadrat prima itu tidak melebihi $n$. Kenapa cukup sampai situ? Kalau $n = a \times b$ dengan $a \le b$, maka $a \times a \le n$. Jadi salah satu faktor pasti tidak lebih dari $\sqrt{n}$.

### Faktorisasi prima

**Faktorisasi prima** adalah menulis bilangan sebagai hasil kali bilangan prima. Gunakan pembagian berulang dengan prima terkecil:

```
2 | 360
2 | 180
2 |  90
3 |  45
3 |  15
5 |   5
  |   1
```

$$360 = 2 \times 2 \times 2 \times 3 \times 3 \times 5 = 2^3 \times 3^2 \times 5$$

Bentuk $2^3$ disebut **notasi pangkat** (indeks). Pangkat menunjukkan berapa kali balok itu dipakai.

Sifat penting: setiap bilangan bulat lebih dari 1 punya **tepat satu** faktorisasi prima (urutan tidak diperhitungkan). Inilah alasan semua cara di bawah ini berhasil.

### FPB: faktor persekutuan terbesar

**FPB** dua bilangan adalah bilangan terbesar yang membagi habis keduanya.

**Aturan:** ambil faktor prima yang ada di **kedua** bilangan, dengan **pangkat terkecil**.

Kenapa? Pembagi suatu bilangan hanya boleh memakai balok yang ada di bilangan itu, dan tidak lebih banyak. Untuk membagi dua bilangan sekaligus, sebuah balok tidak boleh melebihi jumlahnya di bilangan mana pun. Maka kita ambil pangkat terkecil. Untuk mendapat yang **terbesar**, kita ambil semua balok bersama sebanyak mungkin.

### KPK: kelipatan persekutuan terkecil

**KPK** dua bilangan adalah bilangan positif terkecil yang habis dibagi keduanya.

**Aturan:** ambil **semua** faktor prima yang muncul, dengan **pangkat terbesar**.

Kenapa? Kelipatan suatu bilangan harus memuat semua balok bilangan itu. Supaya memuat balok kedua bilangan, setiap jenis balok harus sebanyak yang terbesar. Supaya **terkecil**, kita tidak menambah balok lain.

Untuk dua bilangan $a$ dan $b$ berlaku:

$$\text{FPB}(a, b) \times \text{KPK}(a, b) = a \times b$$

Ini karena setiap balok dipakai sekali di FPB (pangkat kecil) dan sekali di KPK (pangkat besar), sama seperti di $a \times b$. Rumus ini berguna untuk mengecek.

### Kuadrat, pangkat tiga, dan akarnya

- **Kuadrat sempurna** seperti $36 = 6^2$. Pada faktorisasi primanya, semua pangkat **genap**: $36 = 2^2 \times 3^2$.
- **Pangkat tiga sempurna** seperti $216 = 6^3$. Semua pangkatnya **kelipatan 3**: $216 = 2^3 \times 3^3$.

Kenapa? $6^2 = 6 \times 6$, jadi setiap balok di 6 muncul dua kali. Balok bisa dibagi menjadi dua kelompok kembar. Satu kelompok adalah akar kuadratnya.

**Cara mencari akar:**

- $\sqrt{n}$: bagi setiap pangkat dengan 2.
- $\sqrt[3]{n}$: bagi setiap pangkat dengan 3.

## Contoh langkah demi langkah

### Contoh 1: Faktorisasi prima dan uji prima

**Soal.** (a) Apakah 91 bilangan prima? (b) Tulis 504 dalam faktorisasi prima dengan notasi pangkat.

1. **Langkah 1: (a) Tentukan batas uji.** $9^2 = 81 < 91 < 100 = 10^2$. Cukup coba prima sampai 9, yaitu 2, 3, 5, 7.
2. **Langkah 2: (a) Uji satu per satu.** 91 ganjil, jadi tidak habis dibagi 2. Jumlah angkanya 10, jadi tidak habis dibagi 3. Tidak berakhir 0 atau 5. Coba 7: $91 \div 7 = 13$. Habis.
3. **Langkah 3: (b) Bagi berulang dengan prima terkecil.** $504 \div 2 = 252$, $\div 2 = 126$, $\div 2 = 63$, $\div 3 = 21$, $\div 3 = 7$, $\div 7 = 1$.
4. **Langkah 4: (b) Tulis dengan pangkat.** Balok 2 dipakai tiga kali, balok 3 dua kali, balok 7 sekali: $504 = 2^3 \times 3^2 \times 7$.
5. **Cek jawaban.** (a) $7 \times 13 = 91$. (b) $8 \times 9 \times 7 = 72 \times 7 = 504$. Benar.

**Jawaban:** (a) 91 bukan prima, $91 = 7 \times 13$. (b) $504 = 2^3 \times 3^2 \times 7$.

### Contoh 2: FPB dan KPK

**Soal.** Tentukan FPB dan KPK dari 84 dan 90.

1. **Langkah 1: Faktorkan.** $84 = 2^2 \times 3 \times 7$ dan $90 = 2 \times 3^2 \times 5$.
2. **Langkah 2: Susun dalam tabel balok.**
```
          2     3     5     7
  84 :   2^2   3^1    -    7^1
  90 :   2^1   3^2   5^1    -
```
3. **Langkah 3: Hitung FPB.** Balok bersama: 2 dan 3. Pangkat terkecil: $2^1$ dan $3^1$. FPB $= 2 \times 3 = 6$.
4. **Langkah 4: Hitung KPK.** Semua balok dengan pangkat terbesar: $2^2 \times 3^2 \times 5 \times 7 = 4 \times 9 \times 35 = 1.260$.
5. **Cek jawaban.** $\text{FPB} \times \text{KPK} = 6 \times 1.260 = 7.560$. Lalu $84 \times 90 = 7.560$. Sama, jadi benar.

**Jawaban:** FPB $= 6$, KPK $= 1.260$.

### Contoh 3: Akar kuadrat dan akar pangkat tiga

**Soal.** Tanpa kalkulator, hitung $\sqrt{1.764}$ dan $\sqrt[3]{2.744}$.

1. **Langkah 1: Faktorkan 1.764.** $1.764 \div 2 = 882$, $\div 2 = 441$, $\div 3 = 147$, $\div 3 = 49$, $\div 7 = 7$, $\div 7 = 1$. Jadi $1.764 = 2^2 \times 3^2 \times 7^2$.
2. **Langkah 2: Bagi pangkat dengan 2.** Semua pangkat genap, jadi kuadrat sempurna. $\sqrt{1.764} = 2 \times 3 \times 7 = 42$.
3. **Langkah 3: Faktorkan 2.744.** $2.744 \div 2 = 1.372$, $\div 2 = 686$, $\div 2 = 343$, $\div 7 = 49$, $\div 7 = 7$, $\div 7 = 1$. Jadi $2.744 = 2^3 \times 7^3$.
4. **Langkah 4: Bagi pangkat dengan 3.** $\sqrt[3]{2.744} = 2 \times 7 = 14$.
5. **Cek jawaban.** $42^2 = 1.764$. $14^3 = 14 \times 14 \times 14 = 196 \times 14 = 2.744$. Benar.

**Jawaban:** $\sqrt{1.764} = 42$ dan $\sqrt[3]{2.744} = 14$.

### Contoh 4: Soal cerita FPB

**Soal.** Bu Siti punya 48 kue lapis dan 72 kue dadar. Ia ingin membuat parsel sebanyak-banyaknya. Setiap parsel harus berisi kue lapis yang sama banyak dan kue dadar yang sama banyak, tanpa sisa. Berapa parsel yang bisa dibuat, dan apa isi tiap parsel?

1. **Langkah 1: Kenali jenis soal.** Banyak parsel harus membagi habis 48 dan 72, dan harus sebesar mungkin. Ini FPB.
2. **Langkah 2: Faktorkan.** $48 = 2^4 \times 3$ dan $72 = 2^3 \times 3^2$.
3. **Langkah 3: Hitung FPB.** Pangkat terkecil: $2^3 \times 3 = 24$.
4. **Langkah 4: Hitung isi parsel.** Kue lapis: $48 \div 24 = 2$. Kue dadar: $72 \div 24 = 3$.
5. **Cek jawaban.** $24 \times 2 = 48$ dan $24 \times 3 = 72$, tanpa sisa. Pembagi 48 yang lebih besar dari 24 hanya 48, dan 72 tidak habis dibagi 48. Jadi 24 memang yang terbesar.

**Jawaban:** 24 parsel, masing-masing berisi 2 kue lapis dan 3 kue dadar.

### Contoh 5: Membuat kuadrat dan pangkat tiga sempurna

**Soal.** Tentukan bilangan bulat positif terkecil $k$ sehingga $180k$ merupakan (a) kuadrat sempurna; (b) pangkat tiga sempurna.

1. **Langkah 1: Faktorkan.** $180 = 2^2 \times 3^2 \times 5$.
2. **Langkah 2: (a) Lengkapi pangkat menjadi genap.** $2^2$ dan $3^2$ sudah genap. $5^1$ perlu satu balok 5 lagi. Jadi $k = 5$.
3. **Langkah 3: (b) Lengkapi pangkat menjadi kelipatan 3.** $2^2$ perlu satu 2, $3^2$ perlu satu 3, $5^1$ perlu dua 5. Jadi $k = 2 \times 3 \times 5^2 = 150$.
4. **Cek jawaban.** (a) $180 \times 5 = 900 = 30^2$. (b) $180 \times 150 = 27.000 = 30^3$. Benar.

**Jawaban:** (a) $k = 5$; (b) $k = 150$.

## Kesalahan yang sering terjadi

- **Menganggap 1 bilangan prima, atau semua bilangan ganjil prima.** 1 bukan prima. 9, 15, 21, 91 ganjil tetapi komposit.
- **Faktorisasi belum selesai.** Menulis $360 = 4 \times 9 \times 10$. Itu belum faktorisasi prima karena 4, 9, dan 10 masih bisa dipecah.
- **Tertukar aturan pangkat.** Mengambil pangkat terbesar untuk FPB. Ingat: FPB adalah balok **bersama**, jadi pangkat terkecil. KPK adalah kotak **cukup untuk semua**, jadi pangkat terbesar.
- **KPK hanya dari faktor bersama.** Pada Contoh 2, menulis KPK $= 2^2 \times 3^2 = 36$. Faktor 5 dan 7 terlupa, padahal 36 tidak habis dibagi 84.
- **Salah memilih FPB atau KPK di soal cerita.** "Membagi sebanyak-banyaknya tanpa sisa" biasanya FPB. "Kapan bersamaan lagi" biasanya KPK.

## Ringkasan

- Bilangan prima tepat punya dua faktor. 1 bukan prima, 2 satu-satunya prima genap.
- Setiap bilangan lebih dari 1 punya tepat satu faktorisasi prima. Tulis dengan notasi pangkat.
- FPB: faktor prima bersama, pangkat terkecil. KPK: semua faktor prima, pangkat terbesar.
- $\text{FPB}(a,b) \times \text{KPK}(a,b) = a \times b$, berguna untuk mengecek.
- Kuadrat sempurna: semua pangkat genap; $\sqrt{n}$ = bagi pangkat dengan 2.
- Pangkat tiga sempurna: pangkat kelipatan 3; $\sqrt[3]{n}$ = bagi pangkat dengan 3.

## Cek pemahaman

1. Apakah 119 bilangan prima? Jelaskan.
2. Tulis 600 dalam faktorisasi prima dengan notasi pangkat.
3. Tentukan FPB dan KPK dari 60 dan 126.
4. Dengan faktorisasi prima, hitung $\sqrt{576}$ dan $\sqrt[3]{3.375}$.
5. Lampu merah berkedip setiap 8 detik, lampu kuning setiap 12 detik, dan lampu hijau setiap 20 detik. Ketiganya berkedip bersamaan pada pukul 19.00.00. Setelah berapa detik ketiganya berkedip bersamaan lagi?

### Kunci jawaban

1. Bukan prima. $119 = 7 \times 17$; cukup uji prima sampai 10 karena $11^2 = 121 > 119$.
2. $600 = 2^3 \times 3 \times 5^2$. Cek: $8 \times 3 \times 25 = 600$.
3. FPB $= 6$, KPK $= 1.260$. $60 = 2^2 \times 3 \times 5$ dan $126 = 2 \times 3^2 \times 7$; cek $6 \times 1.260 = 7.560 = 60 \times 126$.
4. $\sqrt{576} = 24$ dan $\sqrt[3]{3.375} = 15$. $576 = 2^6 \times 3^2$ sehingga akarnya $2^3 \times 3 = 24$; $3.375 = 3^3 \times 5^3$ sehingga akar pangkat tiganya $3 \times 5 = 15$.
5. 120 detik (2 menit). $8 = 2^3$, $12 = 2^2 \times 3$, $20 = 2^2 \times 5$, jadi KPK $= 2^3 \times 3 \times 5 = 120$.
