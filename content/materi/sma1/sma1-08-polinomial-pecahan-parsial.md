---
id: sma1-08-polinomial-pecahan-parsial
judul: Polinomial dan Pecahan Parsial
jenjang: sma1
moe: "Additional Mathematics · A4 Polynomials and partial fractions"
prasyarat: [smp2-02-ekspansi-faktorisasi, smp2-03-pecahan-aljabar-rumus, smp3-02-persamaan-kuadrat-lanjut]
durasi_menit: 75
---

## Kenapa belajar ini?

Volume kotak, lintasan roller coaster, dan desain kurva jalan sering dimodelkan dengan polinomial. Untuk menyelesaikan persamaannya, kita perlu memfaktorkan polinomial berderajat tiga atau lebih. Pecahan parsial dipakai nanti di kalkulus untuk mengintegralkan pecahan aljabar.

## Analogi

Polinomial berperilaku seperti **bilangan bulat**.

- Bilangan bulat bisa dibagi dengan sisa: $17 = 5 \times 3 + 2$. Polinomial juga.
- Bilangan bulat punya faktor: 3 adalah faktor 12 karena sisanya 0. Polinomial juga.
- Pecahan bisa dijumlahkan: $\frac{1}{2} + \frac{1}{3} = \frac{5}{6}$. Pecahan parsial adalah kebalikannya: membongkar $\frac{5}{6}$ kembali menjadi $\frac{1}{2} + \frac{1}{3}$.

Setiap kali bingung, tanyakan: "Bagaimana kalau ini bilangan biasa?"

## Konsep

### Polinomial, perkalian, dan pembagian

Polinomial dalam $x$ berbentuk $a_n x^n + \dots + a_1 x + a_0$ dengan $n$ bilangan cacah. **Derajat** adalah pangkat tertinggi. Perkalian polinomial memakai sifat distributif: kalikan setiap suku dengan setiap suku.

Pembagian polinomial $P(x)$ oleh $D(x)$ selalu menghasilkan **hasil bagi** $Q(x)$ dan **sisa** $R(x)$:

$$
P(x) = D(x)\,Q(x) + R(x), \qquad \text{derajat } R < \text{derajat } D
$$

Ini persis seperti $17 = 5 \times 3 + 2$ dengan sisa $2 < 3$. Jika pembaginya linear, sisanya konstanta.

### Teorema sisa

**Teorema.** Sisa pembagian $P(x)$ oleh $(x - a)$ adalah $P(a)$.

**Bukti.** Karena pembagi berderajat 1, sisanya konstanta $R$:

$$
P(x) = (x - a)\,Q(x) + R
$$

Substitusikan $x = a$. Faktor $(x - a)$ menjadi nol, sehingga $P(a) = 0 \cdot Q(a) + R = R$. Terbukti.

Dengan cara sama, sisa pembagian oleh $(ax - b)$ adalah $P\!\left(\frac{b}{a}\right)$.

### Teorema faktor

$(x - a)$ adalah faktor $P(x)$ jika dan hanya jika $P(a) = 0$. Ini teorema sisa dengan sisa nol, sama seperti 3 faktor 12 karena $12 \div 3$ bersisa 0.

### Persamaan pangkat tiga

Untuk $P(x) = 0$ dengan $P$ berderajat 3 (koefisien bulat):

1. Coba nilai $x$ dari faktor-faktor konstanta (dibagi faktor koefisien utama), sampai $P(a) = 0$.
2. Bagi $P(x)$ dengan $(x - a)$ untuk mendapat faktor kuadrat.
3. Selesaikan faktor kuadrat itu (faktorkan atau rumus abc).

### Jumlah dan selisih pangkat tiga

$$
a^3 + b^3 = (a + b)(a^2 - ab + b^2), \qquad a^3 - b^3 = (a - b)(a^2 + ab + b^2)
$$

Cek dengan ekspansi: $(a - b)(a^2 + ab + b^2) = a^3 + a^2b + ab^2 - a^2b - ab^2 - b^3 = a^3 - b^3$. Contoh: $8x^3 - 27 = (2x)^3 - 3^3 = (2x - 3)(4x^2 + 6x + 9)$.

### Pecahan parsial

Pecahan aljabar **sejati** (derajat pembilang < derajat penyebut) bisa dibongkar sesuai bentuk penyebutnya:

$$
\frac{px + q}{(ax + b)(cx + d)} = \frac{A}{ax + b} + \frac{B}{cx + d}
$$

$$
\frac{px^2 + qx + r}{(ax + b)(cx + d)^2} = \frac{A}{ax + b} + \frac{B}{cx + d} + \frac{C}{(cx + d)^2}
$$

$$
\frac{px^2 + qx + r}{(ax + b)(x^2 + c^2)} = \frac{A}{ax + b} + \frac{Bx + C}{x^2 + c^2}
$$

Cara mencari konstanta: kalikan kedua ruas dengan penyebut, lalu substitusi nilai $x$ yang membuat faktor nol, dan bandingkan koefisien bila perlu.

Jika pecahannya **tidak sejati** (derajat pembilang $\ge$ derajat penyebut), lakukan pembagian dulu, sama seperti $\frac{17}{5} = 3 + \frac{2}{5}$.

## Contoh langkah demi langkah

### Contoh 1: Pembagian bersusun polinomial

**Soal.** Bagilah $2x^3 - 3x^2 + 4x - 5$ dengan $(x - 2)$.

```
               2x² +  x  +  6
         ---------------------------
 x - 2 ) 2x³ - 3x² + 4x  - 5
         2x³ - 4x²
         ---------
                x² + 4x
                x² - 2x
                -------
                     6x  - 5
                     6x  - 12
                     --------
                            7
```

1. **Langkah 1: Bagi suku terdepan.** $2x^3 \div x = 2x^2$. Kalikan: $2x^2(x - 2) = 2x^3 - 4x^2$. Kurangkan: sisa $x^2$, turunkan $+4x$.
2. **Langkah 2: Ulangi.** $x^2 \div x = x$. Kalikan: $x^2 - 2x$. Kurangkan: $6x$, turunkan $-5$.
3. **Langkah 3: Ulangi lagi.** $6x \div x = 6$. Kalikan: $6x - 12$. Kurangkan: $-5 - (-12) = 7$.
4. **Langkah 4: Berhenti.** Sisa 7 berderajat 0, lebih kecil dari derajat pembagi.
5. **Cek jawaban.** Teorema sisa: $P(2) = 16 - 12 + 8 - 5 = 7$. Cocok dengan sisa.

**Jawaban:** hasil bagi $2x^2 + x + 6$, sisa $7$.

### Contoh 2: Mencari koefisien yang hilang

**Soal.** $P(x) = x^3 + ax^2 + bx - 6$. Diketahui $(x - 1)$ faktor $P(x)$, dan sisa pembagian $P(x)$ oleh $(x + 1)$ adalah $-8$. Tentukan $a$ dan $b$.

1. **Langkah 1: Terjemahkan informasi pertama.** Teorema faktor: $P(1) = 0$, jadi $1 + a + b - 6 = 0 \Rightarrow a + b = 5$.
2. **Langkah 2: Terjemahkan informasi kedua.** Teorema sisa: $P(-1) = -8$, jadi $-1 + a - b - 6 = -8 \Rightarrow a - b = -1$.
3. **Langkah 3: Selesaikan sistem.** Jumlahkan: $2a = 4$, jadi $a = 2$ dan $b = 3$.
4. **Cek jawaban.** $P(x) = x^3 + 2x^2 + 3x - 6$. $P(1) = 1 + 2 + 3 - 6 = 0$. $P(-1) = -1 + 2 - 3 - 6 = -8$. Cocok.

**Jawaban:** $a = 2$, $b = 3$.

### Contoh 3: Soal cerita, kotak kayu Pak Budi

**Soal.** Pak Budi membuat kotak kayu berbentuk balok. Lebarnya 1 dm lebih panjang dari tingginya, dan panjangnya 2 dm lebih panjang dari tingginya. Volumenya 60 dm$^3$. Tentukan ukuran kotak.

1. **Langkah 1: Susun model.** Misalkan tinggi $x$ dm. Volume $x(x + 1)(x + 2) = 60$, jadi $x^3 + 3x^2 + 2x - 60 = 0$.
2. **Langkah 2: Cari satu akar.** Coba faktor dari 60. $P(3) = 27 + 27 + 6 - 60 = 0$. Jadi $(x - 3)$ faktor.
3. **Langkah 3: Bagi untuk mendapat faktor kuadrat.** Membagi dengan $(x - 3)$ memberi $x^2 + 6x + 20$. Jadi $P(x) = (x - 3)(x^2 + 6x + 20)$.
4. **Langkah 4: Periksa faktor kuadrat.** $D = 36 - 80 = -44 < 0$, tidak ada akar real lain. Jadi $x = 3$ satu-satunya.
5. **Cek jawaban.** Ukuran $3 \times 4 \times 5$, volume $60$. Ekspansi: $(x - 3)(x^2 + 6x + 20) = x^3 + 6x^2 + 20x - 3x^2 - 18x - 60 = x^3 + 3x^2 + 2x - 60$. Cocok.

**Jawaban:** tinggi 3 dm, lebar 4 dm, panjang 5 dm.

### Contoh 4: Pecahan parsial, faktor linear berbeda

**Soal.** Nyatakan $\dfrac{5x + 1}{(x - 1)(x + 2)}$ dalam pecahan parsial.

1. **Langkah 1: Tulis bentuk.** $\dfrac{5x + 1}{(x - 1)(x + 2)} = \dfrac{A}{x - 1} + \dfrac{B}{x + 2}$.
2. **Langkah 2: Kalikan dengan penyebut.** $5x + 1 = A(x + 2) + B(x - 1)$.
3. **Langkah 3: Substitusi $x = 1$.** $6 = 3A$, jadi $A = 2$.
4. **Langkah 4: Substitusi $x = -2$.** $-9 = -3B$, jadi $B = 3$.
5. **Cek jawaban.** $2(x + 2) + 3(x - 1) = 5x + 1$. Cocok.

**Jawaban:** $\dfrac{2}{x - 1} + \dfrac{3}{x + 2}$.

### Contoh 5: Pecahan parsial, faktor berulang

**Soal.** Nyatakan $\dfrac{3x^2 + x + 2}{(x + 1)(x - 1)^2}$ dalam pecahan parsial.

1. **Langkah 1: Tulis bentuk.** Faktor berulang $(x - 1)^2$ butuh dua suku: $\dfrac{A}{x + 1} + \dfrac{B}{x - 1} + \dfrac{C}{(x - 1)^2}$.
2. **Langkah 2: Kalikan dengan penyebut.** $3x^2 + x + 2 = A(x - 1)^2 + B(x + 1)(x - 1) + C(x + 1)$.
3. **Langkah 3: Substitusi $x = 1$.** $6 = 2C$, jadi $C = 3$.
4. **Langkah 4: Substitusi $x = -1$.** $3 - 1 + 2 = 4 = 4A$, jadi $A = 1$.
5. **Langkah 5: Bandingkan koefisien $x^2$.** $3 = A + B$, jadi $B = 2$.
6. **Cek jawaban.** Substitusi $x = 0$: kiri $2$; kanan $A(1) + B(-1) + C(1) = 1 - 2 + 3 = 2$. Cocok.

**Jawaban:** $\dfrac{1}{x + 1} + \dfrac{2}{x - 1} + \dfrac{3}{(x - 1)^2}$.

## Kesalahan yang sering terjadi

- **Lupa suku nol saat membagi.** Untuk $x^3 - 4$, tulis $x^3 + 0x^2 + 0x - 4$ supaya kolom tidak bergeser.
- **Salah tanda pada teorema sisa.** Pembagi $(x + 1)$ berarti $a = -1$, jadi hitung $P(-1)$, bukan $P(1)$.
- **Salah tanda pada selisih pangkat tiga.** Menulis $a^3 - b^3 = (a - b)(a^2 - ab + b^2)$. Suku tengah di kurung kedua bertanda **berlawanan** dengan kurung pertama: $(a - b)(a^2 + ab + b^2)$.
- **Bentuk parsial kurang lengkap.** Untuk $(x - 1)^2$ hanya menulis $\frac{C}{(x - 1)^2}$. Perlu juga $\frac{B}{x - 1}$. Untuk $x^2 + c^2$, pembilangnya $Bx + C$, bukan hanya konstanta.
- **Langsung membongkar pecahan tak sejati.** Jika derajat pembilang tidak lebih kecil, bagi dulu.

## Ringkasan

- $P(x) = D(x)Q(x) + R(x)$ dengan derajat $R$ < derajat $D$.
- Teorema sisa: sisa $P(x) \div (x - a)$ adalah $P(a)$. Teorema faktor: $(x - a)$ faktor jika $P(a) = 0$.
- Persamaan pangkat tiga: tebak satu akar, bagi, selesaikan faktor kuadratnya.
- $a^3 \pm b^3 = (a \pm b)(a^2 \mp ab + b^2)$.
- Pecahan parsial: bentuk mengikuti penyebut (linear, berulang, kuadrat $x^2 + c^2$); cari konstanta dengan substitusi dan membandingkan koefisien.

## Cek pemahaman

1. Tentukan sisa pembagian $x^3 - 4x^2 + x + 5$ oleh $(x - 3)$.
2. Tunjukkan bahwa $(x + 2)$ faktor dari $x^3 + 3x^2 - 4$, lalu faktorkan sepenuhnya.
3. Selesaikan $2x^3 + x^2 - 13x + 6 = 0$.
4. Faktorkan $27x^3 + 1$.
5. Nyatakan $\dfrac{3x^2 - 5x + 8}{(x - 2)(x^2 + 1)}$ dalam pecahan parsial.

### Kunci jawaban

1. $-1$, karena $P(3) = 27 - 36 + 3 + 5 = -1$.
2. $P(-2) = -8 + 12 - 4 = 0$, jadi faktor. Membagi memberi $x^2 + x - 2 = (x + 2)(x - 1)$, sehingga $x^3 + 3x^2 - 4 = (x + 2)^2(x - 1)$.
3. $x = 2$, $x = \frac{1}{2}$, atau $x = -3$. $P(2) = 16 + 4 - 26 + 6 = 0$, lalu hasil baginya $2x^2 + 5x - 3 = (2x - 1)(x + 3)$.
4. $(3x + 1)(9x^2 - 3x + 1)$, karena $27x^3 + 1 = (3x)^3 + 1^3$.
5. $\dfrac{2}{x - 2} + \dfrac{x - 3}{x^2 + 1}$. Dari $3x^2 - 5x + 8 = A(x^2 + 1) + (Bx + C)(x - 2)$: $x = 2$ memberi $10 = 5A$, $A = 2$; koefisien $x^2$: $B = 1$; konstanta: $8 = 2 - 2C$, $C = -3$.
