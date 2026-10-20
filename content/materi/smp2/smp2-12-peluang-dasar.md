---
id: smp2-12-peluang-dasar
judul: Peluang Dasar
jenjang: smp2
moe: "Secondary 2 · Statistics and Probability · S2 Probability"
prasyarat: [smp1-04-perbandingan, smp1-05-persentase]
durasi_menit: 40
---

## Kenapa belajar ini?

"Besok kemungkinan hujan 70%." "Peluang menang undian kecil sekali." Kita sering bicara tentang kemungkinan, tetapi dengan kata-kata yang kabur. Peluang membuat kemungkinan itu menjadi **angka**, sehingga bisa dibandingkan dan dihitung dengan tepat.

## Analogi

Bayangkan **kocokan arisan** ibu-ibu di kampungmu. Setiap peserta menulis namanya di gulungan kertas kecil. Semua gulungan dimasukkan ke gelas, dikocok, lalu **satu** gulungan jatuh keluar.

- Semua gulungan di dalam gelas adalah **semua hasil yang mungkin**.
- Karena dikocok dengan adil, setiap gulungan punya kesempatan yang **sama** untuk keluar.
- Kalau kita ingin tahu kemungkinan "yang keluar nama perempuan", kita tinggal menghitung: ada berapa gulungan bernama perempuan, dari seluruh gulungan di gelas.

Seluruh materi ini adalah variasi dari kocokan arisan. Dadu, koin, kartu, dan kelereng semuanya bisa dibayangkan sebagai gulungan kertas di gelas.

## Konsep

### Percobaan, hasil, dan ruang sampel

- **Percobaan**: kegiatan yang hasilnya tidak pasti, misalnya melempar dadu atau mengocok arisan.
- **Hasil** (titik sampel): satu kemungkinan yang bisa terjadi, misalnya mata dadu 4.
- **Ruang sampel** $S$: himpunan **semua** hasil yang mungkin. Untuk satu dadu, $S = \{1, 2, 3, 4, 5, 6\}$, jadi $n(S) = 6$.
- **Kejadian** $A$: sekumpulan hasil yang kita perhatikan, misalnya "mata dadu genap" $= \{2, 4, 6\}$, jadi $n(A) = 3$.

Pada analogi arisan, ruang sampel adalah seluruh gulungan di gelas, dan kejadian adalah gulungan yang "kita harapkan".

### Rumus peluang

Jika semua hasil **sama mungkin** (dikocok adil), peluang kejadian $A$ adalah

$$P(A) = \frac{\text{banyak hasil yang termasuk } A}{\text{banyak semua hasil}} = \frac{n(A)}{n(S)}$$

Syarat "sama mungkin" penting. Jika satu gulungan jauh lebih besar dari yang lain, ia lebih mudah keluar, dan rumus ini tidak berlaku. Dadu harus seimbang, koin harus tidak berat sebelah, dan pengambilan harus acak.

### Peluang bernilai 0 sampai 1

Karena $n(A)$ tidak mungkin negatif dan tidak mungkin lebih dari $n(S)$:

$$0 \le P(A) \le 1$$

- $P(A) = 0$: **mustahil**. Tidak ada gulungan yang cocok. Contoh: mata dadu 7.
- $P(A) = 1$: **pasti**. Semua gulungan cocok. Contoh: mata dadu kurang dari 7.
- $P(A) = \frac{1}{2}$: sama mungkin terjadi atau tidak.

```
  mustahil      kecil        sama mungkin       besar        pasti
     |-------------|-------------|-------------|-------------|
     0            1/4           1/2           3/4            1
```

Peluang boleh ditulis sebagai pecahan, desimal, atau persen: $\frac{1}{4} = 0{,}25 = 25\%$.

### Peluang kejadian tidak terjadi

Gulungan di gelas hanya ada dua jenis: yang cocok dengan $A$ dan yang tidak. Jadi

$$P(\text{bukan } A) = \frac{n(S) - n(A)}{n(S)} = 1 - P(A)$$

## Contoh langkah demi langkah

Urutan berpikir: **tulis ruang sampel → tulis hasil yang termasuk kejadian → bagi → cek** (nilai di antara 0 dan 1, dan masuk akal).

### Contoh 1: Dadu

**Soal.** Sebuah dadu seimbang dilempar sekali. Berapa peluang muncul bilangan prima?

1. **Langkah 1: Tulis ruang sampel.** $S = \{1, 2, 3, 4, 5, 6\}$, $n(S) = 6$. Ini seperti 6 gulungan di gelas.
2. **Langkah 2: Tulis kejadian.** Bilangan prima di antara 1 sampai 6: $A = \{2, 3, 5\}$, $n(A) = 3$. Ingat, 1 bukan bilangan prima.
3. **Langkah 3: Bagi.** $P(A) = \frac{3}{6} = \frac{1}{2}$.
4. **Cek jawaban.** Bukan prima: $\{1, 4, 6\}$, juga 3 hasil, peluangnya $\frac{1}{2}$. Jumlah keduanya $1$, benar.

**Jawaban:** $\frac{1}{2}$.

### Contoh 2: Kantong kelereng

**Soal.** Sebuah kantong berisi 5 kelereng merah, 3 biru, dan 2 hijau. Satu kelereng diambil secara acak. Tentukan peluang terambil (a) biru, (b) kuning, (c) bukan hijau.

1. **Langkah 1: Tulis ruang sampel.** Total $5 + 3 + 2 = 10$ kelereng, jadi $n(S) = 10$. Setiap kelereng seperti satu gulungan arisan.
2. **Langkah 2: Peluang biru.** $n(\text{biru}) = 3$, jadi $P(\text{biru}) = \frac{3}{10}$.
3. **Langkah 3: Peluang kuning.** Tidak ada kelereng kuning, $n = 0$. $P(\text{kuning}) = \frac{0}{10} = 0$, mustahil.
4. **Langkah 4: Peluang bukan hijau.** $P(\text{hijau}) = \frac{2}{10}$, jadi $P(\text{bukan hijau}) = 1 - \frac{2}{10} = \frac{8}{10} = \frac{4}{5}$.
5. **Cek jawaban.** Hitung langsung: bukan hijau berarti merah atau biru, $5 + 3 = 8$ kelereng, $\frac{8}{10} = \frac{4}{5}$. Cocok.

**Jawaban:** (a) $\frac{3}{10}$, (b) $0$, (c) $\frac{4}{5}$.

### Contoh 3: Kartu bernomor, hati-hati menghitung dua kali

**Soal.** Dua puluh kartu bernomor 1 sampai 20 dikocok, lalu diambil satu. Tentukan peluang terambil (a) kelipatan 3, (b) kelipatan 3 atau kelipatan 5.

1. **Langkah 1: Tulis ruang sampel.** $n(S) = 20$.
2. **Langkah 2: Kelipatan 3.** $\{3, 6, 9, 12, 15, 18\}$, ada 6. $P = \frac{6}{20} = \frac{3}{10}$.
3. **Langkah 3: Kelipatan 3 atau 5.** Kelipatan 5: $\{5, 10, 15, 20\}$. Gabungkan dengan kelipatan 3, tetapi **15 muncul di keduanya**. Kartu 15 hanya satu, jadi dihitung sekali:
$$\{3, 5, 6, 9, 10, 12, 15, 18, 20\}, \quad n = 9$$
4. **Langkah 4: Bagi.** $P = \frac{9}{20}$.
5. **Cek jawaban.** $6 + 4 = 10$, dikurangi 1 kartu yang terhitung dua kali, menjadi 9. Cocok.

**Jawaban:** (a) $\frac{3}{10}$, (b) $\frac{9}{20}$.

### Contoh 4: Soal cerita arisan

**Soal.** Arisan RT diikuti 12 orang: 5 laki-laki dan 7 perempuan. Setiap bulan satu nama dikocok, dan nama yang sudah keluar tidak dimasukkan lagi.

(a) Berapa peluang pemenang bulan pertama perempuan?
(b) Bulan pertama ternyata dimenangkan Pak Budi. Berapa peluang pemenang bulan kedua perempuan?

1. **Langkah 1: Ruang sampel bulan pertama.** 12 gulungan, $n(S) = 12$.
2. **Langkah 2: Peluang perempuan bulan pertama.** 7 gulungan perempuan, $P = \frac{7}{12}$.
3. **Langkah 3: Perbarui ruang sampel.** Gulungan Pak Budi sudah keluar dan tidak dikembalikan. Sisa 11 gulungan: 4 laki-laki, 7 perempuan.
4. **Langkah 4: Peluang perempuan bulan kedua.** $P = \frac{7}{11}$.
5. **Cek jawaban.** $\frac{7}{11} \approx 0{,}64$ lebih besar dari $\frac{7}{12} \approx 0{,}58$. Masuk akal: jumlah perempuan tetap, tetapi gelasnya berkurang satu gulungan laki-laki.

**Jawaban:** (a) $\frac{7}{12}$, (b) $\frac{7}{11}$.

## Kesalahan yang sering terjadi

- **Peluang lebih dari 1.** Menulis peluang biru sebagai $\frac{10}{3}$. Pembilang adalah hasil yang diharapkan, penyebut adalah semua hasil. Jawaban di atas 1 pasti salah.
- **Menganggap 1 bilangan prima.** Lalu menjawab $\frac{4}{6}$ pada contoh 1. Bilangan prima punya tepat dua faktor; 1 hanya punya satu.
- **Menghitung dua kali.** Pada "kelipatan 3 atau 5", menjawab $\frac{10}{20}$ karena 15 dihitung dua kali. Daftar semua hasil dan pastikan setiap kartu hanya muncul sekali.
- **Tidak memperbarui ruang sampel.** Pada arisan bulan kedua, tetap memakai penyebut 12. Gulungan yang sudah keluar tidak ada lagi di gelas.
- **Mengira hasil yang mungkin selalu sama mungkin.** "Besok hujan atau tidak, jadi peluangnya $\frac{1}{2}$." Rumus $\frac{n(A)}{n(S)}$ hanya berlaku jika setiap hasil sama mungkin, seperti gulungan yang dikocok adil.

## Ringkasan

- Ruang sampel $S$ = semua hasil yang mungkin; kejadian $A$ = hasil yang diperhatikan.
- Jika setiap hasil sama mungkin: $P(A) = \frac{n(A)}{n(S)}$.
- $0 \le P(A) \le 1$; 0 berarti mustahil, 1 berarti pasti.
- $P(\text{bukan } A) = 1 - P(A)$.
- Langkah: tulis ruang sampel → daftar hasil yang termasuk kejadian (tanpa dobel) → bagi → cek.

## Cek pemahaman

1. Sebuah koin seimbang dilempar sekali. Berapa peluang muncul sisi angka?
2. Sebuah dadu seimbang dilempar sekali. Berapa peluang muncul mata dadu lebih dari 4?
3. Setiap huruf kata MATEMATIKA ditulis di kartu terpisah, lalu satu kartu diambil acak. Berapa peluang terambil huruf A?
4. Sebuah kotak berisi 4 bola merah dan 6 bola putih. Satu bola diambil acak. Tentukan peluang terambil bola merah, dan peluang terambil bola hitam.
5. Sebuah kotak berisi 30 donat rasa cokelat, keju, dan stroberi. Ada 12 donat cokelat, dan peluang mengambil donat keju adalah $\frac{1}{3}$. Berapa peluang mengambil donat stroberi?

### Kunci jawaban

1. $\frac{1}{2}$. Ruang sampel {angka, gambar}, satu yang diharapkan.
2. $\frac{1}{3}$. Hasilnya {5, 6}, jadi $\frac{2}{6}$.
3. $\frac{3}{10}$. MATEMATIKA punya 10 huruf, dan huruf A muncul 3 kali.
4. Merah $\frac{2}{5}$, hitam $0$. Merah $\frac{4}{10}$; tidak ada bola hitam, jadi mustahil.
5. $\frac{4}{15}$. Donat keju $\frac{1}{3} \times 30 = 10$, stroberi $30 - 12 - 10 = 8$, jadi $\frac{8}{30} = \frac{4}{15}$.
