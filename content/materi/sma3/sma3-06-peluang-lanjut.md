---
id: sma3-06-peluang-lanjut
judul: Peluang Lanjut
jenjang: sma3
moe: "H2 Mathematics 9758 · Probability and Statistics · Probability"
prasyarat: [smp3-10-peluang-majemuk, smp3-05-himpunan, sma3-05-kaidah-pencacahan]
durasi_menit: 60
---

## Kenapa belajar ini?

Prakiraan cuaca, hasil tes kesehatan, dan keputusan asuransi semuanya memakai peluang yang **berubah setelah ada informasi baru**. Misalnya, peluang kamu terlambat ke sekolah berbeda jika kamu sudah tahu hari ini hujan. Materi ini mengajarkan cara menghitung peluang seperti itu dengan rapi.

## Analogi

Bayangkan satu **aula berisi 100 siswa**. Setiap siswa mewakili satu hasil yang sama mungkin. Peluang suatu kejadian adalah **proporsi siswa** di aula yang memenuhi kejadian itu.

Sekarang ada **pintu penyaring**: "hanya siswa yang memakai kacamata boleh tetap di aula." Siswa lain keluar. Aula menjadi lebih kecil. Peluang bersyarat adalah proporsi yang dihitung **di dalam aula yang sudah disaring**.

Analogi aula dan pintu penyaring ini dipakai terus di bawah.

## Konsep

### Mengingat dasar: komplemen dan aturan penjumlahan

Untuk kejadian $A$ dan $B$ dalam ruang sampel $S$:

$$P(A') = 1 - P(A).$$

Untuk menghitung $P(A \cup B)$, kita menjumlah siswa di $A$ dan siswa di $B$. Siswa yang berada di keduanya terhitung dua kali, jadi dikurangi sekali:

$$P(A \cup B) = P(A) + P(B) - P(A \cap B).$$

Ini **aturan penjumlahan**. Gambarlah diagram Venn: irisan adalah daerah yang terhitung dua kali.

### Kejadian saling lepas

$A$ dan $B$ **saling lepas** jika tidak mungkin terjadi bersamaan: $A \cap B = \varnothing$, sehingga $P(A \cap B) = 0$ dan

$$P(A \cup B) = P(A) + P(B).$$

Di aula: tidak ada satu siswa pun yang berada di $A$ sekaligus di $B$.

### Peluang bersyarat

Peluang $A$ **dengan syarat** $B$ sudah terjadi ditulis $P(A \mid B)$. Pintu penyaring hanya meloloskan siswa di $B$. Di aula baru itu, siswa yang juga di $A$ adalah siswa di $A \cap B$. Jika semua hasil sama mungkin:

$$P(A \mid B) = \frac{n(A \cap B)}{n(B)} = \frac{n(A \cap B)/n(S)}{n(B)/n(S)} = \frac{P(A \cap B)}{P(B)}, \qquad P(B) > 0.$$

Rumus terakhir dipakai sebagai definisi umum.

### Aturan perkalian

Dengan menyusun ulang definisi tadi:

$$P(A \cap B) = P(B)\,P(A \mid B) = P(A)\,P(B \mid A).$$

Artinya: peluang keduanya terjadi = peluang lolos penyaring pertama × peluang lolos penyaring kedua di dalam aula yang sudah disaring.

### Kejadian saling bebas

$A$ dan $B$ **saling bebas** jika informasi tentang $B$ tidak mengubah peluang $A$: penyaring $B$ tidak mengubah proporsi siswa $A$ di aula.

$$P(A \mid B) = P(A) \quad\Longleftrightarrow\quad P(A \cap B) = P(A)\,P(B).$$

Untuk membuktikan dua kejadian saling bebas, cek salah satu persamaan di atas dengan angka.

**Saling lepas berbeda dengan saling bebas.** Jika $P(A) > 0$, $P(B) > 0$, dan $A, B$ saling lepas, maka $P(A \mid B) = 0 \ne P(A)$. Jadi kejadian saling lepas justru **tidak** saling bebas: mengetahui $B$ terjadi memberi tahu bahwa $A$ pasti tidak terjadi.

### Diagram pohon

Diagram pohon menyajikan kejadian bertahap. Cabang pada tahap kedua adalah **peluang bersyarat** terhadap cabang sebelumnya.

- **Kalikan** peluang sepanjang satu jalur (aturan perkalian).
- **Jumlahkan** hasil beberapa jalur yang berbeda (jalur-jalur itu saling lepas).
- Jumlah peluang cabang yang keluar dari satu titik selalu 1.

Untuk "membalik" syarat, misalnya mencari $P(\text{tahap 1} \mid \text{tahap 2})$, pakai definisi: peluang jalur yang diinginkan dibagi jumlah peluang semua jalur yang memenuhi syarat.

## Contoh langkah demi langkah

### Contoh 1: Dua dadu

**Soal.** Dua dadu dilempar. $A$: jumlah mata dadu 8. $B$: mata dadu pertama genap. Tentukan $P(A \mid B)$ dan selidiki apakah $A$ dan $B$ saling bebas.

1. **Langkah 1: Tentukan ruang sampel.** Ada $6 \times 6 = 36$ pasangan yang sama mungkin.
2. **Langkah 2: Daftar kejadian.** $A = \{(2,6), (3,5), (4,4), (5,3), (6,2)\}$, jadi $P(A) = \frac{5}{36}$. $B$ memuat $3 \times 6 = 18$ pasangan, jadi $P(B) = \frac{1}{2}$.
3. **Langkah 3: Cari irisan.** $A \cap B = \{(2,6), (4,4), (6,2)\}$, jadi $P(A \cap B) = \frac{3}{36} = \frac{1}{12}$.
4. **Langkah 4: Hitung peluang bersyarat.** $P(A \mid B) = \dfrac{1/12}{1/2} = \dfrac{1}{6}$.
5. **Langkah 5: Uji kebebasan.** $P(A) = \frac{5}{36} \approx 0{,}139$, sedangkan $P(A \mid B) = \frac{1}{6} \approx 0{,}167$. Tidak sama, jadi tidak saling bebas.
6. **Cek jawaban.** Dengan pintu penyaring: aula tersisa 18 pasangan dengan mata pertama genap. Yang berjumlah 8 ada 3. Proporsinya $\frac{3}{18} = \frac{1}{6}$. Cocok.

**Jawaban:** $P(A \mid B) = \frac{1}{6}$; $A$ dan $B$ tidak saling bebas.

### Contoh 2: Memakai aturan penjumlahan

**Soal.** Diketahui $P(A) = 0{,}4$, $P(B) = 0{,}5$, dan $P(A \cup B) = 0{,}7$. Tentukan $P(A \cap B)$, $P(A \mid B)$, dan $P(A' \cap B)$. Apakah $A$ dan $B$ saling bebas?

1. **Langkah 1: Pakai aturan penjumlahan.** $0{,}7 = 0{,}4 + 0{,}5 - P(A \cap B)$, jadi $P(A \cap B) = 0{,}2$.
2. **Langkah 2: Peluang bersyarat.** $P(A \mid B) = \dfrac{0{,}2}{0{,}5} = 0{,}4$.
3. **Langkah 3: Daerah $B$ tanpa $A$.** $P(A' \cap B) = P(B) - P(A \cap B) = 0{,}5 - 0{,}2 = 0{,}3$.
4. **Langkah 4: Uji kebebasan.** $P(A)\,P(B) = 0{,}4 \times 0{,}5 = 0{,}2 = P(A \cap B)$. Jadi saling bebas.
5. **Cek jawaban.** Isi diagram Venn: hanya $A$ = 0,2, irisan 0,2, hanya $B$ = 0,3, di luar keduanya 0,3. Jumlahnya $0{,}2 + 0{,}2 + 0{,}3 + 0{,}3 = 1$. Konsisten, dan $P(A \mid B) = P(A) = 0{,}4$ sesuai Langkah 4.

**Jawaban:** $P(A \cap B) = 0{,}2$, $P(A \mid B) = 0{,}4$, $P(A' \cap B) = 0{,}3$; saling bebas.

### Contoh 3: Soal cerita dengan diagram pohon

**Soal.** Di Jakarta, peluang hari hujan adalah 0,3. Jika hujan, peluang Rina terlambat ke sekolah 0,4. Jika tidak hujan, peluangnya 0,1. (a) Berapa peluang Rina terlambat? (b) Diketahui Rina terlambat, berapa peluang hari itu hujan?

1. **Langkah 1: Beri nama kejadian.** $H$: hujan, $T$: terlambat. Diketahui $P(H) = 0{,}3$, $P(T \mid H) = 0{,}4$, $P(T \mid H') = 0{,}1$.
2. **Langkah 2: Gambar pohon.**

```
           T   0,4   ->  0,3 x 0,4 = 0,12
  H  0,3 <
           T'  0,6   ->  0,3 x 0,6 = 0,18
           T   0,1   ->  0,7 x 0,1 = 0,07
  H' 0,7 <
           T'  0,9   ->  0,7 x 0,9 = 0,63
```

3. **Langkah 3: Jumlahkan jalur yang berakhir di $T$.** $P(T) = 0{,}12 + 0{,}07 = 0{,}19$.
4. **Langkah 4: Balik syaratnya.** Pintu penyaring sekarang adalah "Rina terlambat". Di aula itu, bagian karena hujan adalah
$$P(H \mid T) = \frac{P(H \cap T)}{P(T)} = \frac{0{,}12}{0{,}19} = \frac{12}{19} \approx 0{,}632.$$
5. **Cek jawaban.** Keempat ujung jalur berjumlah $0{,}12 + 0{,}18 + 0{,}07 + 0{,}63 = 1$. Hasil (b) juga masuk akal: hujan hanya 30% hari, tetapi menyumbang sebagian besar keterlambatan.

**Jawaban:** (a) 0,19; (b) $\frac{12}{19} \approx 0{,}632$.

### Contoh 4: Tanpa pengembalian, memakai kombinasi

**Soal.** Sebuah kantong berisi 5 kelereng merah dan 3 kelereng biru. Tiga kelereng diambil sekaligus secara acak. (a) Tentukan peluang terambil tepat 2 merah. (b) Diketahui paling sedikit 2 kelereng merah, tentukan peluang ketiganya merah.

1. **Langkah 1: Ruang sampel.** Mengambil sekaligus berarti urutan tidak penting: $\binom{8}{3} = 56$ cara yang sama mungkin.
2. **Langkah 2: Bagian (a).** Pilih 2 dari 5 merah dan 1 dari 3 biru: $\binom{5}{2}\binom{3}{1} = 10 \times 3 = 30$. Peluangnya $\frac{30}{56} = \frac{15}{28}$.
3. **Langkah 3: Peluang syarat "paling sedikit 2 merah".** Tiga merah: $\binom{5}{3} = 10$ cara. Jadi paling sedikit 2 merah: $30 + 10 = 40$ cara.
4. **Langkah 4: Peluang bersyarat.** Aula hanya berisi 40 hasil itu. Yang semuanya merah ada 10. $P = \frac{10}{40} = \frac{1}{4}$.
5. **Cek jawaban.** Dengan rumus: $P(\text{3 merah} \cap \text{min. 2 merah}) = \frac{10}{56}$ dan $P(\text{min. 2 merah}) = \frac{40}{56}$. Hasil bagi $\frac{10}{40} = \frac{1}{4}$. Sama.

**Jawaban:** (a) $\frac{15}{28}$; (b) $\frac{1}{4}$.

## Kesalahan yang sering terjadi

- **Menyamakan saling lepas dengan saling bebas.** Menulis $P(A \cap B) = P(A)P(B)$ untuk kejadian yang tidak bisa terjadi bersamaan. Kejadian saling lepas memiliki $P(A \cap B) = 0$. Cek definisinya masing-masing.
- **Membagi dengan peluang yang salah.** Menghitung $P(H \mid T)$ sebagai $\frac{0{,}12}{0{,}3}$. Itu $P(T \mid H)$. Penyebut selalu peluang **syarat**, yaitu kejadian di belakang garis tegak.
- **Lupa mengurangi irisan.** Menulis $P(A \cup B) = P(A) + P(B)$ untuk kejadian yang tidak saling lepas, sehingga hasilnya bisa lebih dari 1.
- **Menganggap pengambilan tanpa pengembalian saling bebas.** Peluang kelereng kedua merah bergantung pada kelereng pertama. Pakai peluang bersyarat di cabang pohon, atau pakai kombinasi.
- **Cabang pohon tidak berjumlah 1.** Menulis 0,4 dan 0,1 sebagai dua cabang dari titik yang sama. Cabang dari satu titik harus lengkap, misalnya 0,4 dan 0,6.

## Ringkasan

- Aturan penjumlahan: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$; untuk saling lepas, irisannya 0.
- Peluang bersyarat: $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$, yaitu proporsi di dalam aula yang sudah disaring oleh $B$.
- Aturan perkalian: $P(A \cap B) = P(B)\,P(A \mid B)$.
- Saling bebas: $P(A \cap B) = P(A)P(B)$, atau $P(A \mid B) = P(A)$.
- Diagram pohon: kalikan sepanjang jalur, jumlahkan antarjalur; untuk membalik syarat, bagi peluang jalur dengan jumlah jalur yang memenuhi syarat.

## Cek pemahaman

1. $A$ dan $B$ saling lepas dengan $P(A) = 0{,}3$ dan $P(B) = 0{,}5$. Tentukan $P(A \cup B)$.
2. $A$ dan $B$ saling bebas dengan $P(A) = 0{,}3$ dan $P(B) = 0{,}5$. Tentukan $P(A \cup B)$.
3. Diketahui $P(A \cap B) = 0{,}12$ dan $P(B) = 0{,}4$. Tentukan $P(A \mid B)$.
4. Sebuah dadu dilempar dan diketahui hasilnya lebih dari 3. Berapa peluang hasilnya genap?
5. Kotak I berisi 3 bola merah dan 2 putih. Kotak II berisi 1 bola merah dan 4 putih. Sebuah koin dilempar: jika muncul angka, satu bola diambil dari kotak I; jika gambar, dari kotak II. Tentukan peluang bola merah, dan peluang bola berasal dari kotak I jika diketahui bola itu merah.

### Kunci jawaban

1. 0,8. Saling lepas, jadi $P(A \cup B) = 0{,}3 + 0{,}5 = 0{,}8$.
2. 0,65. $P(A \cap B) = 0{,}3 \times 0{,}5 = 0{,}15$, jadi $0{,}3 + 0{,}5 - 0{,}15 = 0{,}65$.
3. 0,3. $P(A \mid B) = \frac{0{,}12}{0{,}4} = 0{,}3$.
4. $\frac{2}{3}$. Aula tersaring berisi {4, 5, 6}; yang genap {4, 6}.
5. $P(\text{merah}) = 0{,}5 \times 0{,}6 + 0{,}5 \times 0{,}2 = 0{,}4$, dan $P(\text{kotak I} \mid \text{merah}) = \frac{0{,}3}{0{,}4} = 0{,}75$.
