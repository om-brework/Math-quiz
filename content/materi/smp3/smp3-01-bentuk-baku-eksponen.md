---
id: smp3-01-bentuk-baku-eksponen
judul: Bentuk Baku dan Hukum Eksponen
jenjang: smp3
moe: "Secondary 3 · Number and Algebra · N1 Numbers and their operations"
prasyarat: [smp1-01-prima-fpb-kpk, smp1-03-pembulatan-estimasi, smp2-02-ekspansi-faktorisasi]
durasi_menit: 55
---

## Kenapa belajar ini?

Jarak Bumi ke Matahari sekitar 150.000.000 km, sedangkan ukuran sebuah bakteri sekitar 0,000002 m. Bilangan sebesar dan sekecil ini sulit dibaca dan mudah salah hitung nolnya. Hukum eksponen dan bentuk baku membuat bilangan seperti ini ringkas dan mudah dihitung.

## Analogi

Bayangkan sebuah **koloni bakteri** di laboratorium sekolah yang **menjadi 2 kali lipat setiap jam**. Mulai dengan 1 bakteri.

- Setelah 1 jam: $2$. Setelah 3 jam: $2 \times 2 \times 2 = 2^3 = 8$.
- **Pangkat** menyatakan **berapa jam berlalu**, dan bilangan pokok menyatakan **faktor pengali tiap jam**.

Hampir semua hukum eksponen bisa dimengerti dari cerita ini:

- Tunggu 3 jam, lalu 2 jam lagi: total 5 jam. Jadi $2^3 \times 2^2 = 2^5$.
- **0 jam** berlalu: koloni tidak berubah, faktornya 1. Jadi $2^0 = 1$.
- **Mundur** 3 jam ke masa lalu: koloni dibagi 2 tiga kali. Jadi $2^{-3} = \frac{1}{8}$.
- **Setengah jam**: faktor yang jika terjadi dua kali menghasilkan 2. Jadi $2^{1/2} = \sqrt{2}$.

Kita akan kembali ke koloni bakteri ini di setiap hukum dan contoh.

## Konsep

### Pangkat bilangan bulat positif

Untuk bilangan bulat positif $n$:

$$a^n = \underbrace{a \times a \times \cdots \times a}_{n \text{ faktor}}$$

$a$ disebut **bilangan pokok** dan $n$ disebut **pangkat** atau **eksponen**.

### Hukum-hukum eksponen

Untuk $a, b \ne 0$ dan pangkat $m, n$:

| Hukum | Rumus | Alasan (cerita bakteri) |
|---|---|---|
| Perkalian | $a^m \times a^n = a^{m+n}$ | $m$ jam lalu $n$ jam = $m + n$ jam |
| Pembagian | $a^m \div a^n = a^{m-n}$ | maju $m$ jam lalu mundur $n$ jam |
| Pangkat dari pangkat | $(a^m)^n = a^{mn}$ | $n$ kali periode $m$ jam = $mn$ jam |
| Pangkat perkalian | $(ab)^n = a^n b^n$ | dua koloni berbeda tumbuh bersama |
| Pangkat pembagian | $\left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}$ | sama dengan baris di atas |

Contoh alasan aljabarnya: $a^3 \times a^2 = (a \times a \times a) \times (a \times a) = a^5$. Faktor-faktornya tinggal dihitung.

### Pangkat nol dan pangkat negatif

Dari hukum pembagian, $a^3 \div a^3 = a^{0}$. Tetapi bilangan dibagi dirinya sendiri hasilnya 1. Supaya hukum tetap berlaku, kita **harus** mendefinisikan:

$$a^0 = 1 \quad (a \ne 0)$$

Dengan cara sama, $a^2 \div a^5 = a^{-3}$, padahal $\frac{a \times a}{a \times a \times a \times a \times a} = \frac{1}{a^3}$. Jadi:

$$a^{-n} = \frac{1}{a^n}$$

Pangkat negatif **tidak** membuat hasilnya negatif. Pangkat negatif berarti "mundur waktu", yaitu **membagi**. Akibatnya $\left(\frac{a}{b}\right)^{-n} = \left(\frac{b}{a}\right)^n$.

### Pangkat pecahan

Berapa $a^{1/2}$? Hukum pangkat dari pangkat memberi $\left(a^{1/2}\right)^2 = a^1 = a$. Jadi $a^{1/2}$ adalah bilangan yang dikuadratkan menjadi $a$, yaitu $\sqrt{a}$. Secara umum, untuk $a > 0$:

$$a^{\frac{1}{n}} = \sqrt[n]{a}, \qquad a^{\frac{m}{n}} = \left(\sqrt[n]{a}\right)^m = \sqrt[n]{a^m}$$

Saran: **akarkan dulu, baru pangkatkan**, supaya angkanya tetap kecil.

### Bentuk baku

Sebuah bilangan positif ditulis dalam **bentuk baku** jika berbentuk

$$A \times 10^n, \qquad 1 \le A < 10, \quad n \text{ bilangan bulat}$$

- Bilangan besar → $n$ positif: $150.000.000 = 1{,}5 \times 10^8$ (koma bergeser 8 tempat ke kiri).
- Bilangan kecil → $n$ negatif: $0{,}000002 = 2 \times 10^{-6}$ (koma bergeser 6 tempat ke kanan).

Untuk mengalikan atau membagi bentuk baku, hitung bagian $A$ dan bagian $10^n$ terpisah memakai hukum eksponen, lalu rapikan agar $A$ kembali di antara 1 dan 10.

## Contoh langkah demi langkah

Urutan berpikir: **kenali hukum yang dipakai → ubah ke bilangan pokok yang sama → gabungkan pangkat → sederhanakan → cek**.

### Contoh 1: Hukum perkalian dan pembagian

**Soal.** Hitung $2^5 \times 2^3 \div 2^6$.

1. **Langkah 1: Kenali hukum.** Bilangan pokok sama (2), jadi pangkat dijumlah atau dikurang.
2. **Langkah 2: Gabungkan pangkat.** Maju 5 jam, maju 3 jam, mundur 6 jam.
$$2^{5 + 3 - 6} = 2^2$$
3. **Langkah 3: Sederhanakan.** $2^2 = 4$.
4. **Cek jawaban.** Hitung langsung: $32 \times 8 = 256$, dan $256 \div 64 = 4$. Cocok.

**Jawaban:** $4$.

### Contoh 2: Pangkat nol dan negatif

**Soal.** Hitung (a) $5^0 + 4^{-2}$, (b) $\left(\frac{2}{3}\right)^{-2}$.

1. **Langkah 1: Pangkat nol.** $5^0 = 1$ (nol jam berlalu, tidak ada perubahan).
2. **Langkah 2: Pangkat negatif (a).** $4^{-2} = \frac{1}{4^2} = \frac{1}{16}$.
3. **Langkah 3: Jumlahkan (a).** $1 + \frac{1}{16} = \frac{17}{16}$.
4. **Langkah 4: Pangkat negatif pecahan (b).** Balik pecahannya, lalu pangkatkan positif: $\left(\frac{3}{2}\right)^2 = \frac{9}{4}$.
5. **Cek jawaban.** (b) $\left(\frac{2}{3}\right)^{2} = \frac{4}{9}$, dan $\frac{1}{4/9} = \frac{9}{4}$. Cocok.

**Jawaban:** (a) $\frac{17}{16}$, (b) $\frac{9}{4}$.

### Contoh 3: Pangkat pecahan

**Soal.** Hitung (a) $27^{\frac{2}{3}}$, (b) $16^{-\frac{3}{4}}$.

1. **Langkah 1: Pisahkan arti penyebut dan pembilang (a).** Penyebut 3 berarti akar pangkat tiga, pembilang 2 berarti dikuadratkan.
2. **Langkah 2: Akarkan dulu, lalu pangkatkan (a).** $\sqrt[3]{27} = 3$, lalu $3^2 = 9$.
3. **Langkah 3: Tangani tanda negatif (b).** $16^{-\frac{3}{4}} = \frac{1}{16^{3/4}}$.
4. **Langkah 4: Akarkan lalu pangkatkan (b).** $\sqrt[4]{16} = 2$, lalu $2^3 = 8$. Jadi hasilnya $\frac{1}{8}$.
5. **Cek jawaban.** $9^3 = 729$ dan $27^2 = 729$, jadi $9 = 27^{2/3}$ benar. $\left(\frac{1}{8}\right)^4 = \frac{1}{4096}$ dan $16^{-3} = \frac{1}{4096}$, cocok.

**Jawaban:** (a) $9$, (b) $\frac{1}{8}$.

### Contoh 4: Menyederhanakan bentuk aljabar

**Soal.** Sederhanakan $\dfrac{(3a^2 b^{-1})^3}{9a^4 b^{-5}}$ dan tulis dengan pangkat positif.

1. **Langkah 1: Pangkat dari perkalian.** Setiap faktor di dalam kurung dipangkatkan 3.
$$(3a^2 b^{-1})^3 = 3^3 a^{6} b^{-3} = 27a^6 b^{-3}$$
2. **Langkah 2: Bagi koefisien.** $27 \div 9 = 3$.
3. **Langkah 3: Bagi pangkat yang bilangan pokoknya sama.**
$$a^{6 - 4} = a^2, \qquad b^{-3 - (-5)} = b^{2}$$
4. **Langkah 4: Tulis hasil.** $3a^2 b^2$, semua pangkat sudah positif.
5. **Cek jawaban.** Ambil $a = 1$, $b = 2$. Soal: $\frac{(3 \times 1 \times \frac{1}{2})^3}{9 \times 1 \times \frac{1}{32}} = \frac{3{,}375}{0{,}28125} = 12$. Jawaban: $3 \times 1 \times 4 = 12$. Cocok.

**Jawaban:** $3a^2 b^2$.

### Contoh 5: Soal cerita dengan bentuk baku

**Soal.** Penduduk Indonesia sekitar $2{,}8 \times 10^8$ orang. Misalkan setiap orang rata-rata menghasilkan 0,7 kg sampah per hari. Hitung perkiraan total sampah dalam satu tahun (365 hari), dalam bentuk baku.

1. **Langkah 1: Tulis semua bilangan dalam bentuk baku.** $0{,}7 = 7 \times 10^{-1}$ dan $365 = 3{,}65 \times 10^2$.
2. **Langkah 2: Sampah per hari.** Kalikan bagian $A$ dan bagian pangkat terpisah:
$$(2{,}8 \times 10^8)(7 \times 10^{-1}) = 19{,}6 \times 10^{7}$$
3. **Langkah 3: Rapikan.** $19{,}6$ bukan di antara 1 dan 10. $19{,}6 = 1{,}96 \times 10^1$, jadi hasilnya $1{,}96 \times 10^8$ kg per hari.
4. **Langkah 4: Sampah per tahun.**
$$(1{,}96 \times 10^8)(3{,}65 \times 10^2) = 7{,}154 \times 10^{10} \text{ kg}$$
5. **Cek jawaban.** Estimasi kasar: $3 \times 10^8$ orang × 1 kg × 400 hari $= 1{,}2 \times 10^{11}$. Jawaban kita $7 \times 10^{10}$ berada di ordo yang sama, jadi wajar.

**Jawaban:** sekitar $7{,}154 \times 10^{10}$ kg sampah per tahun.

## Kesalahan yang sering terjadi

- **Mengalikan bilangan pokok.** Menulis $2^3 \times 2^4 = 4^7$. Bilangan pokok tetap 2; hanya pangkat yang dijumlah: $2^7$. Koloni yang sama tidak berubah faktor pengalinya.
- **Mengira pangkat negatif menghasilkan bilangan negatif.** Menulis $3^{-2} = -9$. Yang benar $3^{-2} = \frac{1}{9}$: mundur waktu berarti membagi.
- **Mengira $a^0 = 0$.** Nol jam berlalu berarti tidak ada perubahan, jadi $a^0 = 1$.
- **Salah urutan pangkat pecahan.** Menghitung $27^{2/3}$ sebagai $\frac{27 \times 2}{3} = 18$. Penyebut adalah akar, pembilang adalah pangkat: $(\sqrt[3]{27})^2 = 9$.
- **Bentuk baku belum rapi.** Menjawab $19{,}6 \times 10^7$ atau $0{,}5 \times 10^4$. Syaratnya $1 \le A < 10$, jadi tulis $1{,}96 \times 10^8$ dan $5 \times 10^3$.

## Ringkasan

- $a^m \times a^n = a^{m+n}$, $a^m \div a^n = a^{m-n}$, $(a^m)^n = a^{mn}$, $(ab)^n = a^n b^n$.
- $a^0 = 1$ dan $a^{-n} = \frac{1}{a^n}$; keduanya didefinisikan agar hukum pembagian tetap berlaku.
- $a^{\frac{m}{n}} = (\sqrt[n]{a})^m$: penyebut = akar, pembilang = pangkat.
- Bentuk baku: $A \times 10^n$ dengan $1 \le A < 10$ dan $n$ bulat.
- Saat menghitung bentuk baku, olah $A$ dan $10^n$ terpisah, lalu rapikan $A$.

## Cek pemahaman

1. Tulis dalam bentuk baku: (a) 36.000.000, (b) 0,000045.
2. Hitung $(4 \times 10^3) \times (6 \times 10^5)$ dalam bentuk baku.
3. Hitung $8^{\frac{2}{3}} + 9^{-\frac{1}{2}}$.
4. Sederhanakan $\dfrac{x^5 \times x^{-2}}{(x^{1/2})^2}$.
5. Jarak Bumi ke Bulan sekitar $3{,}84 \times 10^5$ km. Cahaya menempuh $3 \times 10^5$ km setiap detik. Berapa detik yang diperlukan cahaya dari Bulan untuk sampai ke Bumi?

### Kunci jawaban

1. (a) $3{,}6 \times 10^7$, (b) $4{,}5 \times 10^{-5}$. Koma bergeser 7 tempat ke kiri dan 5 tempat ke kanan.
2. $2{,}4 \times 10^9$. $4 \times 6 = 24$ dan $10^{3+5} = 10^8$, lalu $24 \times 10^8 = 2{,}4 \times 10^9$.
3. $\frac{13}{3}$. $8^{2/3} = (\sqrt[3]{8})^2 = 4$ dan $9^{-1/2} = \frac{1}{3}$.
4. $x^2$. Pembilang $x^{5-2} = x^3$, penyebut $x^{1}$, jadi $x^{3-1} = x^2$.
5. 1,28 detik. Waktu $= \frac{3{,}84 \times 10^5}{3 \times 10^5} = 1{,}28 \times 10^0 = 1{,}28$.
