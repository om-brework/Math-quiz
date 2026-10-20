---
id: sma1-09-binomial-newton
judul: Ekspansi Binomial
jenjang: sma1
moe: "Additional Mathematics · A5 Binomial expansions"
prasyarat: [smp2-02-ekspansi-faktorisasi, smp3-01-bentuk-baku-eksponen]
durasi_menit: 60
---

## Kenapa belajar ini?

Menguraikan $(a + b)^2$ itu mudah. Tetapi bagaimana dengan $(a + b)^{10}$? Mengalikan sepuluh kurung satu per satu sangat lama. Teorema binomial memberi semua suku sekaligus. Teorema ini juga dipakai untuk menaksir bunga tabungan, peluang, dan nanti deret di kalkulus.

## Analogi

Bayangkan ada $n$ **kantong** berjajar. Setiap kantong berisi dua kartu: kartu $a$ dan kartu $b$. Kamu mengambil **tepat satu kartu dari setiap kantong**, lalu mengalikan semua kartu yang terambil.

Menguraikan $(a + b)^n = (a + b)(a + b)\cdots(a + b)$ sama persis dengan menjumlahkan hasil dari **semua cara** mengambil kartu.

Misalnya kamu mengambil kartu $b$ dari $r$ kantong dan kartu $a$ dari sisanya. Hasilnya $a^{n-r}b^r$. Berapa kali hasil ini muncul? Sebanyak cara memilih $r$ kantong dari $n$ kantong. Itulah koefisien binomial.

## Konsep

### Notasi faktorial

Untuk bilangan bulat positif $n$:

$$
n! = n \times (n - 1) \times \dots \times 2 \times 1
$$

Contoh: $5! = 120$. Didefinisikan $0! = 1$, supaya rumus di bawah tetap berlaku saat $r = 0$ atau $r = n$.

### Kombinasi

Banyak cara memilih $r$ benda dari $n$ benda (urutan tidak penting) ditulis $\binom{n}{r}$ atau ${}^nC_r$:

$$
\binom{n}{r} = \frac{n!}{r!\,(n - r)!}
$$

Alasannya: menyusun $r$ benda berurutan dari $n$ ada $n(n-1)\cdots(n-r+1) = \frac{n!}{(n-r)!}$ cara. Setiap pilihan yang sama terhitung $r!$ kali (karena urutannya bisa diacak), jadi dibagi $r!$.

Sifat penting: $\binom{n}{0} = \binom{n}{n} = 1$ dan $\binom{n}{r} = \binom{n}{n - r}$. Memilih $r$ kantong untuk kartu $b$ sama dengan memilih $n - r$ kantong untuk kartu $a$.

### Segitiga Pascal

Koefisien $\binom{n}{r}$ untuk $n$ kecil tersusun dalam segitiga Pascal. Setiap bilangan adalah jumlah dua bilangan di atasnya.

```
n = 0:            1
n = 1:          1   1
n = 2:        1   2   1
n = 3:      1   3   3   1
n = 4:    1   4   6   4   1
n = 5:  1   5  10  10   5   1
```

### Teorema binomial

Untuk $n$ bilangan bulat positif:

$$
(a + b)^n = \sum_{r=0}^{n} \binom{n}{r} a^{n-r} b^r = a^n + \binom{n}{1}a^{n-1}b + \binom{n}{2}a^{n-2}b^2 + \dots + b^n
$$

Pola yang terlihat: pangkat $a$ turun dari $n$ ke $0$, pangkat $b$ naik dari $0$ ke $n$, dan jumlah pangkat di setiap suku selalu $n$. Ada $n + 1$ suku.

Bentuk khusus yang sering dipakai:

$$
(1 + x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \dots + x^n
$$

### Suku umum

Suku ke-$(r + 1)$ adalah

$$
T_{r+1} = \binom{n}{r} a^{n-r} b^r
$$

Perhatikan: suku **pertama** memakai $r = 0$. Untuk mencari suku tertentu (misalnya yang memuat $x^3$ atau yang bebas $x$), tulis $T_{r+1}$, kumpulkan pangkat $x$, lalu cari $r$.

## Contoh langkah demi langkah

### Contoh 1: Menguraikan penuh

**Soal.** Uraikan $(2 + x)^4$.

1. **Langkah 1: Ambil koefisien.** Baris $n = 4$ segitiga Pascal: $1, 4, 6, 4, 1$.
2. **Langkah 2: Susun pangkat.** Pangkat $2$ turun $4, 3, 2, 1, 0$; pangkat $x$ naik $0, 1, 2, 3, 4$.
3. **Langkah 3: Hitung setiap suku.** $1 \cdot 16 = 16$; $4 \cdot 8 \cdot x = 32x$; $6 \cdot 4 \cdot x^2 = 24x^2$; $4 \cdot 2 \cdot x^3 = 8x^3$; $1 \cdot x^4 = x^4$.
4. **Cek jawaban.** Substitusi $x = 1$: kiri $3^4 = 81$; kanan $16 + 32 + 24 + 8 + 1 = 81$. Cocok.

**Jawaban:** $16 + 32x + 24x^2 + 8x^3 + x^4$.

### Contoh 2: Koefisien suku tertentu

**Soal.** Tentukan koefisien $x^3$ pada uraian $(3x - 2)^5$.

1. **Langkah 1: Tulis suku umum.** Dengan $a = 3x$, $b = -2$, $n = 5$: $T_{r+1} = \binom{5}{r}(3x)^{5-r}(-2)^r$.
2. **Langkah 2: Cari $r$.** Pangkat $x$ adalah $5 - r$. Agar $5 - r = 3$, perlu $r = 2$.
3. **Langkah 3: Hitung.** $\binom{5}{2}(3x)^3(-2)^2 = 10 \times 27x^3 \times 4 = 1080x^3$.
4. **Cek jawaban.** $\binom{5}{2} = \frac{5 \times 4}{2} = 10$, sesuai baris $n = 5$ segitiga Pascal. Tanda: $(-2)^2$ positif. Pangkat total $3 + 2 = 5$. Cocok.

**Jawaban:** $1080$.

### Contoh 3: Suku bebas $x$

**Soal.** Tentukan suku yang tidak memuat $x$ pada uraian $\left(x^2 + \dfrac{2}{x}\right)^6$.

1. **Langkah 1: Tulis suku umum.** $T_{r+1} = \binom{6}{r}(x^2)^{6-r}\left(\frac{2}{x}\right)^r = \binom{6}{r}2^r x^{12 - 2r} x^{-r}$.
2. **Langkah 2: Kumpulkan pangkat $x$.** $x^{12 - 3r}$.
3. **Langkah 3: Cari $r$.** Bebas $x$ berarti pangkat nol: $12 - 3r = 0$, jadi $r = 4$.
4. **Langkah 4: Hitung.** $\binom{6}{4} \times 2^4 = 15 \times 16 = 240$.
5. **Cek jawaban.** Untuk $r = 4$: $(x^2)^2 = x^4$ dan $\left(\frac{1}{x}\right)^4 = x^{-4}$. Hasil kali $x^0$. Cocok.

**Jawaban:** $240$ (suku ke-5).

### Contoh 4: Soal cerita, tabungan Siti

**Soal.** Siti menabung Rp5.000.000 dengan bunga majemuk 3% per tahun. Tabungan setelah 5 tahun adalah $5.000.000 \times 1{,}03^5$. Taksir $1{,}03^5$ dengan empat suku pertama uraian binomial, lalu taksir saldonya.

1. **Langkah 1: Tulis sebagai binomial.** $1{,}03^5 = (1 + 0{,}03)^5$, dengan $n = 5$ dan $x = 0{,}03$.
2. **Langkah 2: Tulis empat suku pertama.** $1 + 5x + 10x^2 + 10x^3$ (baris $1, 5, 10, 10, \dots$).
3. **Langkah 3: Hitung setiap suku.** $5(0{,}03) = 0{,}15$; $10(0{,}0009) = 0{,}009$; $10(0{,}000027) = 0{,}00027$.
4. **Langkah 4: Jumlahkan.** $1 + 0{,}15 + 0{,}009 + 0{,}00027 = 1{,}15927$. Saldo $\approx 5.000.000 \times 1{,}15927 = 5.796.350$.
5. **Cek jawaban.** Kalkulator: $1{,}03^5 = 1{,}159274\ldots$, saldo sebenarnya sekitar Rp5.796.370. Selisihnya hanya sekitar Rp20, karena suku sisa ($5x^4$ dan $x^5$) sangat kecil saat $x$ kecil.

**Jawaban:** sekitar Rp5.796.350.

### Contoh 5: Mencari $n$

**Soal.** Pada uraian $(1 + 2x)^n$, koefisien $x^2$ adalah 60. Tentukan $n$.

1. **Langkah 1: Tulis suku $x^2$.** $T_3 = \binom{n}{2}(2x)^2 = 4\binom{n}{2}x^2$.
2. **Langkah 2: Susun persamaan.** $4 \cdot \frac{n(n - 1)}{2} = 60 \Rightarrow n(n - 1) = 30$.
3. **Langkah 3: Selesaikan.** $n^2 - n - 30 = 0 \Rightarrow (n - 6)(n + 5) = 0$. Karena $n$ bulat positif, $n = 6$.
4. **Cek jawaban.** $\binom{6}{2} \times 4 = 15 \times 4 = 60$. Cocok.

**Jawaban:** $n = 6$.

## Kesalahan yang sering terjadi

- **Lupa memangkatkan koefisien.** Menulis $(3x)^3 = 3x^3$. Yang benar $27x^3$; seluruh isi kurung ikut dipangkatkan.
- **Mengabaikan tanda negatif.** Pada $(3x - 2)^5$, $b = -2$, bukan $2$. Suku dengan $r$ ganjil bertanda negatif.
- **Salah nomor suku.** Suku ke-5 memakai $r = 4$, bukan $r = 5$, karena $T_{r+1}$.
- **Salah menghitung pangkat pada pecahan.** $\left(\frac{2}{x}\right)^r = 2^r x^{-r}$, jadi pangkat $x$ dikurangi, bukan ditambah.
- **Menganggap $0! = 0$.** Definisinya $0! = 1$, sehingga $\binom{n}{0} = 1$.

## Ringkasan

- $n! = n(n-1)\cdots 1$, $0! = 1$, dan $\binom{n}{r} = \frac{n!}{r!(n - r)!}$.
- $(a + b)^n = \sum_{r=0}^{n}\binom{n}{r}a^{n-r}b^r$: ambil satu kartu dari setiap kantong.
- Suku umum $T_{r+1} = \binom{n}{r}a^{n-r}b^r$; suku pertama $r = 0$.
- Untuk suku tertentu: tulis $T_{r+1}$, kumpulkan pangkat $x$, cari $r$, lalu hitung.
- Untuk $x$ kecil, beberapa suku pertama $(1 + x)^n$ sudah memberi taksiran yang baik.

## Cek pemahaman

1. Hitung $\binom{7}{3}$.
2. Uraikan $(1 - x)^5$.
3. Tentukan koefisien $x^4$ pada uraian $(2 + x)^7$.
4. Tentukan suku bebas $x$ pada uraian $\left(2x - \dfrac{1}{x}\right)^6$.
5. Koefisien $x^2$ pada uraian $(1 + 3x)^n$ adalah 135. Tentukan $n$.

### Kunci jawaban

1. $35$, karena $\frac{7 \times 6 \times 5}{3 \times 2 \times 1} = 35$.
2. $1 - 5x + 10x^2 - 10x^3 + 5x^4 - x^5$, koefisien baris $n = 5$ dengan tanda berganti.
3. $280$, karena $r = 4$: $\binom{7}{4} \times 2^3 = 35 \times 8$.
4. $-160$, karena $T_{r+1} = \binom{6}{r}2^{6-r}(-1)^r x^{6 - 2r}$, pangkat nol saat $r = 3$: $20 \times 8 \times (-1)$.
5. $n = 6$, karena $9 \cdot \frac{n(n-1)}{2} = 135$ memberi $n(n - 1) = 30$.
