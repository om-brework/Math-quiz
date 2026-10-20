---
id: sma2-09-barisan-deret
judul: Barisan dan Deret
jenjang: sma2
moe: "H2 Mathematics 9758 · Pure Mathematics · Sequences and Series"
prasyarat: [sma1-10-eksponen-logaritma]
durasi_menit: 80
---

## Kenapa belajar ini?

Tabungan yang ditambah tetap setiap bulan, bunga bank yang berlipat, pantulan bola yang makin rendah, dan jumlah ikan di kolam dari bulan ke bulan semuanya adalah barisan. Dengan rumus deret, kita bisa menghitung totalnya tanpa menjumlahkan satu per satu.

## Analogi

Bayangkan kamu **menaiki anak tangga**, dan setiap tangga punya **aturan langkah**.

- **Tangga aritmetika**: setiap anak tangga **lebih tinggi sejumlah tetap**, misalnya selalu naik 15 cm. Aturannya "tambah $b$".
- **Tangga geometri**: setiap anak tangga adalah **kelipatan tetap** dari sebelumnya, misalnya selalu $\frac{3}{4}$ kali tinggi sebelumnya. Aturannya "kali $r$".
- **Deret** adalah **total tinggi** semua anak tangga yang kamu naiki.
- **Rumus rekursif** adalah aturan yang hanya memberi tahu "dari anak tangga sekarang, ke mana anak tangga berikutnya".

Analogi aturan "tambah" dan "kali" ini dipakai di seluruh materi.

## Konsep

### Barisan dan deret aritmetika

Suku pertama $a$, beda $b$. Setiap langkah menambah $b$, jadi untuk sampai ke suku ke-$n$ kita melangkah $n - 1$ kali:
$$ U_n = a + (n - 1)b $$

**Penurunan rumus jumlah (cara Gauss).** Tulis jumlahnya dua kali, maju dan mundur:
$$ S_n = a + (a + b) + \cdots + U_n, \qquad S_n = U_n + (U_n - b) + \cdots + a $$
Jumlahkan pasangan yang sejajar. Setiap pasangan bernilai $a + U_n$, dan ada $n$ pasangan, jadi $2S_n = n(a + U_n)$:
$$ S_n = \frac{n}{2}(a + U_n) = \frac{n}{2}\big(2a + (n - 1)b\big) $$

### Barisan dan deret geometri

Suku pertama $a$, rasio $r$. Setiap langkah mengali $r$:
$$ U_n = ar^{n-1} $$

**Penurunan rumus jumlah.** Tulis $S_n$ dan $rS_n$, lalu kurangkan. Hampir semua suku saling menghapus:
$$ S_n = a + ar + \cdots + ar^{n-1}, \qquad rS_n = ar + ar^2 + \cdots + ar^n $$
$$ S_n - rS_n = a - ar^n \quad\Rightarrow\quad S_n = \frac{a(1 - r^n)}{1 - r}, \quad r \neq 1 $$

### Deret geometri tak hingga

Jika $|r| < 1$, maka $r^n \to 0$ saat $n \to \infty$. Anak tangganya makin pendek, sehingga totalnya tidak tumbuh tanpa batas:
$$ S_\infty = \frac{a}{1 - r}, \qquad \text{hanya jika } -1 < r < 1 $$
Jika $|r| \geq 1$, deretnya **divergen** (tidak punya jumlah tak hingga).

### Notasi sigma

$\displaystyle\sum_{r=1}^{n} U_r$ berarti "jumlahkan $U_r$ dari $r = 1$ sampai $r = n$". Sifat penting:
$$ \sum_{r=1}^{n} (aU_r + bV_r) = a\sum U_r + b\sum V_r, \qquad \sum_{r=1}^{n} 1 = n, \qquad \sum_{r=1}^{n} r = \frac{n(n+1)}{2} $$

### Metode selisih

Jika setiap suku bisa ditulis sebagai selisih $U_r = f(r) - f(r + 1)$, maka saat dijumlahkan, suku-suku tengah saling menghapus berpasangan:
$$ \sum_{r=1}^{n} \big[f(r) - f(r+1)\big] = f(1) - f(n + 1) $$
Biasanya bentuk selisih didapat dengan pecahan parsial.

### Rumus rekursif

Barisan bisa didefinisikan dengan suku awal dan aturan $U_{n+1} = g(U_n)$. Jika barisannya **konvergen** ke $L$, maka untuk $n$ besar $U_{n+1}$ dan $U_n$ sama-sama mendekati $L$, sehingga
$$ L = g(L) $$

## Contoh langkah demi langkah

### Contoh 1: Aritmetika dari dua suku

**Soal.** Suku ke-3 barisan aritmetika adalah 11 dan suku ke-10 adalah 32. Tentukan jumlah 20 suku pertama.

1. **Langkah 1: Tulis dua persamaan.** $a + 2b = 11$ dan $a + 9b = 32$.
2. **Langkah 2: Cari beda.** Kurangkan: $7b = 21$, jadi $b = 3$. Lalu $a = 11 - 6 = 5$.
3. **Langkah 3: Pakai rumus jumlah.** $S_{20} = \dfrac{20}{2}\big(2(5) + 19(3)\big) = 10(10 + 57) = 670$.
4. **Cek jawaban.** $U_{20} = 5 + 19(3) = 62$, dan $\frac{20}{2}(5 + 62) = 670$. Cek juga $U_3 = 5 + 6 = 11$ dan $U_{10} = 5 + 27 = 32$.

**Jawaban:** $S_{20} = 670$.

### Contoh 2: Pantulan bola

**Soal.** Sebuah bola dijatuhkan dari ketinggian 8 m. Setiap memantul, bola naik $\frac{3}{4}$ dari tinggi sebelumnya. (a) Setelah pantulan ke berapa tinggi pantulan pertama kali kurang dari 1 m? (b) Berapa total lintasan bola sampai berhenti?

1. **Langkah 1: Kenali aturan.** Tinggi pantulan ke-$n$ adalah $8\left(\frac{3}{4}\right)^n$. Ini tangga geometri dengan rasio $\frac{3}{4}$.
2. **Langkah 2: Tulis pertidaksamaan.** $8\left(\frac{3}{4}\right)^n < 1 \Rightarrow \left(\frac{3}{4}\right)^n < \frac{1}{8}$.
3. **Langkah 3: Logaritma.** $n \ln\frac{3}{4} < \ln\frac{1}{8}$. Karena $\ln\frac{3}{4} < 0$, tanda dibalik saat membagi: $n > \dfrac{\ln(1/8)}{\ln(3/4)} \approx 7{,}23$. Jadi $n = 8$.
4. **Langkah 4: Total lintasan.** Jatuh 8 m, lalu setiap pantulan naik dan turun dengan tinggi sama: $8 + 2(6 + 4{,}5 + \cdots)$. Deret dalam kurung tak hingga dengan $a = 6$, $r = \frac{3}{4}$:
$$ S_\infty = \frac{6}{1 - \frac{3}{4}} = 24, \qquad \text{total} = 8 + 2(24) = 56 \text{ m} $$
5. **Cek jawaban.** $8(0{,}75)^7 \approx 1{,}07 > 1$ dan $8(0{,}75)^8 \approx 0{,}80 < 1$, jadi memang pantulan ke-8. Rasio $\frac{3}{4}$ memenuhi $|r| < 1$, jadi $S_\infty$ sah.

**Jawaban:** (a) Pantulan ke-8; (b) 56 m.

### Contoh 3: Metode selisih

**Soal.** Tentukan $\displaystyle\sum_{r=1}^{n} \frac{2}{r(r+2)}$, lalu nilai jumlah tak hingganya.

1. **Langkah 1: Pecahan parsial.** $\dfrac{2}{r(r+2)} = \dfrac{1}{r} - \dfrac{1}{r+2}$. (Cek: $\frac{(r + 2) - r}{r(r+2)} = \frac{2}{r(r+2)}$.)
2. **Langkah 2: Tulis baris per baris.**

   ```
   r = 1   :   1/1   - 1/3
   r = 2   :   1/2   - 1/4
   r = 3   :   1/3   - 1/5
   ...
   r = n-1 :   1/(n-1) - 1/(n+1)
   r = n   :   1/n   - 1/(n+2)
   ```

3. **Langkah 3: Coret pasangan.** Setiap $-\frac{1}{k}$ dihapus oleh $+\frac{1}{k}$ dua baris di bawahnya. Yang tersisa: dua suku positif pertama dan dua suku negatif terakhir.
$$ \sum_{r=1}^{n} \frac{2}{r(r+2)} = 1 + \frac{1}{2} - \frac{1}{n+1} - \frac{1}{n+2} = \frac{3}{2} - \frac{1}{n+1} - \frac{1}{n+2} $$
4. **Langkah 4: Jumlah tak hingga.** Saat $n \to \infty$, $\frac{1}{n+1}$ dan $\frac{1}{n+2}$ menuju 0, jadi jumlahnya $\frac{3}{2}$.
5. **Cek jawaban.** $n = 2$: langsung $\frac{2}{3} + \frac{2}{8} = \frac{11}{12}$. Rumus: $\frac{3}{2} - \frac{1}{3} - \frac{1}{4} = \frac{18 - 4 - 3}{12} = \frac{11}{12}$. Sama.

**Jawaban:** $\dfrac{3}{2} - \dfrac{1}{n+1} - \dfrac{1}{n+2}$; jumlah tak hingga $\dfrac{3}{2}$.

### Contoh 4: Kolam ikan Pak Wayan (rumus rekursif)

**Soal.** Awal bulan pertama ada 1.000 ikan di kolam Pak Wayan. Setiap bulan ia menjual 20% ikan, lalu menebar 300 bibit baru. Jadi $U_{n+1} = 0{,}8U_n + 300$ dengan $U_1 = 1000$. Tentukan $U_2$, $U_3$, $U_4$, dan jumlah ikan dalam jangka panjang.

1. **Langkah 1: Hitung beberapa suku.** $U_2 = 800 + 300 = 1100$. $U_3 = 880 + 300 = 1180$. $U_4 = 944 + 300 = 1244$.
2. **Langkah 2: Amati pola.** Kenaikannya 100, 80, 64: mengecil dengan rasio $0{,}8$. Barisan tampak konvergen.
3. **Langkah 3: Cari limit.** $L = 0{,}8L + 300 \Rightarrow 0{,}2L = 300 \Rightarrow L = 1500$.
4. **Langkah 4: Hubungkan dengan geometri.** Selisih ke limit: $U_n - 1500$ bernilai $-500, -400, -320, \ldots$. Ini barisan geometri dengan $r = 0{,}8$, jadi $U_n = 1500 - 500(0{,}8)^{n-1}$, dan memang menuju 1500.
5. **Cek jawaban.** Rumus untuk $n = 3$: $1500 - 500(0{,}64) = 1180$. Cocok dengan Langkah 1.

**Jawaban:** $U_2 = 1100$, $U_3 = 1180$, $U_4 = 1244$; jangka panjang sekitar 1.500 ikan.

## Kesalahan yang sering terjadi

- **Salah pangkat pada suku geometri.** Menulis $U_n = ar^n$. Suku pertama adalah $a = ar^0$, jadi suku ke-$n$ adalah $ar^{n-1}$: ada $n - 1$ langkah.
- **Memakai $S_\infty$ saat $|r| \geq 1$.** Untuk $2 + 4 + 8 + \cdots$, rumus memberi $\frac{2}{1 - 2} = -2$, jelas mustahil. Cek $|r| < 1$ dulu.
- **Lupa membalik tanda saat membagi dengan logaritma negatif.** Pada Contoh 2, $\ln\frac{3}{4} < 0$, sehingga $<$ berubah menjadi $>$.
- **Salah mencoret pada metode selisih.** Jika selisihnya berjarak dua ($r$ dan $r + 2$), yang tersisa dua suku di awal dan dua di akhir, bukan satu. Tulis beberapa baris awal dan akhir sebelum mencoret.
- **Menganggap $\sum r^2 = \left(\sum r\right)^2$.** Sigma tidak bisa dipindah masuk ke pangkat. Gunakan sifat linear saja.

## Ringkasan

- Aritmetika: $U_n = a + (n-1)b$, $S_n = \frac{n}{2}(2a + (n-1)b)$.
- Geometri: $U_n = ar^{n-1}$, $S_n = \frac{a(1 - r^n)}{1 - r}$; $S_\infty = \frac{a}{1 - r}$ hanya jika $|r| < 1$.
- Sigma bersifat linear; $\sum_{r=1}^{n} r = \frac{n(n+1)}{2}$.
- Metode selisih: tulis suku sebagai $f(r) - f(r + k)$, lalu coret berpasangan.
- Rekursif $U_{n+1} = g(U_n)$: limit $L$ (jika ada) memenuhi $L = g(L)$.

## Cek pemahaman

1. Barisan aritmetika $4, 9, 14, \ldots$ Tentukan $U_{25}$ dan $S_{25}$.
2. Hitung $\displaystyle\sum_{r=1}^{20} (3r + 2)$.
3. Barisan geometri memiliki $U_2 = 6$ dan $U_5 = 162$. Tentukan $S_6$.
4. Tentukan jumlah tak hingga $12 + 4 + \frac{4}{3} + \cdots$.
5. Dengan menulis $2r + 1 = (r + 1)^2 - r^2$, tentukan $\displaystyle\sum_{r=1}^{n} (2r + 1)$ memakai metode selisih.

### Kunci jawaban

1. $U_{25} = 124$, $S_{25} = 1600$. $U_{25} = 4 + 24(5)$, lalu $\frac{25}{2}(4 + 124)$.
2. $670$. $3 \times \frac{20 \times 21}{2} + 2 \times 20 = 630 + 40$.
3. $728$. $r^3 = \frac{162}{6} = 27$, jadi $r = 3$ dan $a = 2$; $S_6 = \frac{2(3^6 - 1)}{3 - 1} = 728$.
4. $18$. $a = 12$, $r = \frac{1}{3}$, $S_\infty = \frac{12}{2/3}$.
5. $n^2 + 2n$. Jumlah selisih menyisakan $(n+1)^2 - 1^2$.
