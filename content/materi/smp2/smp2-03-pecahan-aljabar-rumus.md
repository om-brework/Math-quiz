---
id: smp2-03-pecahan-aljabar-rumus
judul: Pecahan Aljabar dan Mengubah Subjek Rumus
jenjang: smp2
moe: "Secondary 2 · Number and Algebra · N5 Algebraic expressions and formulae"
prasyarat: [smp1-09-persamaan-linear, smp2-02-ekspansi-faktorisasi]
durasi_menit: 60
---

## Kenapa belajar ini?

Rumus sering harus "dibalik". Rumus suhu mengubah Celsius ke Fahrenheit, tetapi kadang kita perlu sebaliknya. Rumus luas memberi luas dari ukuran, tetapi kadang ukurannya yang dicari. Pecahan aljabar muncul saat kita menyederhanakan rumus seperti ini. Aturannya sama dengan pecahan biasa yang sudah kamu kuasai.

## Analogi

Bayangkan setiap bentuk aljabar sebagai **kado yang dibungkus berlapis-lapis**.

- **Faktor** adalah satu bungkus utuh. Pada $\frac{3(x + 2)}{5(x + 2)}$, $(x + 2)$ adalah satu bungkus utuh di atas dan di bawah. Bungkus yang sama di atas dan di bawah boleh dibuang bersama, karena $\frac{x + 2}{x + 2} = 1$.
- Pada $\frac{x + 2}{x}$, huruf $x$ di atas **terlem** di dalam bungkus bersama angka 2. Kamu tidak boleh mengambilnya sendirian.
- **Mengubah subjek rumus** seperti membuka kado. Huruf yang kita cari ada di tengah. Lapisan yang dipasang **terakhir** dibuka **pertama**.

## Konsep

### Menyederhanakan pecahan aljabar

Pecahan aljabar adalah pecahan yang pembilang atau penyebutnya memuat variabel, misalnya $\frac{x^2 - 9}{x + 3}$. Langkahnya:

1. **Faktorkan** pembilang dan penyebut sepenuhnya.
2. **Coret faktor yang sama** (bungkus utuh yang sama).

Alasannya sama dengan $\frac{6}{9} = \frac{2 \times 3}{3 \times 3} = \frac{2}{3}$. Kita membagi atas dan bawah dengan bilangan yang sama.

Penyebut tidak boleh nol, jadi nilai variabel yang membuat penyebut nol tidak diperbolehkan.

### Mengalikan dan membagi

Seperti pecahan biasa:

$$\frac{a}{b} \times \frac{c}{d} = \frac{ac}{bd}, \qquad \frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c}$$

Faktorkan dulu semua bagian, lalu coret faktor yang sama **sebelum** mengalikan. Hitungannya jadi jauh lebih ringan.

### Menjumlah dan mengurangi

Samakan penyebut dulu, juga seperti pecahan biasa. Penyebut bersama yang paling sederhana adalah **KPK** dari penyebut-penyebutnya.

$$\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}$$

Saat mengurangi, beri **kurung** pada pembilang kedua, karena tanda minus berlaku untuk seluruh bungkus.

### Mengubah subjek rumus

**Subjek** rumus adalah variabel yang berdiri sendiri di satu ruas. Pada $v = u + at$, subjeknya $v$. Untuk membuat $t$ menjadi subjek:

1. Lihat apa yang terjadi pada $t$: $t$ **dikali** $a$, lalu **ditambah** $u$.
2. Buka dari lapisan terakhir: **kurangi** $u$ dari kedua ruas, lalu **bagi** dengan $a$.

$$v - u = at \quad \Rightarrow \quad t = \frac{v - u}{a}$$

Setiap langkah dilakukan pada kedua ruas, seperti pada persamaan linear. Bedanya, hasil akhirnya rumus, bukan angka.

Kalau subjek baru dikuadratkan, buka dengan akar kuadrat di langkah terakhir.

### Mencari nilai dalam rumus

Ada dua cara:

- Masukkan angka ke rumus asli, lalu selesaikan persamaannya.
- Ubah subjek dulu, lalu masukkan angka. Cara ini lebih efisien kalau rumusnya dipakai berkali-kali.

## Contoh langkah demi langkah

### Contoh 1: Menyederhanakan

**Soal.** Sederhanakan (a) $\frac{6x^2y}{9xy^3}$ dan (b) $\frac{x^2 - 9}{x^2 + 5x + 6}$.

1. **Langkah 1 (a): Pecah menjadi faktor.** $\frac{2 \cdot 3 \cdot x \cdot x \cdot y}{3 \cdot 3 \cdot x \cdot y \cdot y \cdot y}$.
2. **Langkah 2 (a): Coret bungkus yang sama.** Coret $3$, satu $x$, dan satu $y$. Sisa $\frac{2x}{3y^2}$.
3. **Langkah 3 (b): Faktorkan atas dan bawah.** $x^2 - 9 = (x - 3)(x + 3)$ dan $x^2 + 5x + 6 = (x + 2)(x + 3)$.
4. **Langkah 4 (b): Coret bungkus $(x + 3)$.** Hasilnya $\frac{x - 3}{x + 2}$.
5. **Cek jawaban.** Untuk (b) pilih $x = 1$: bentuk awal $\frac{1 - 9}{1 + 5 + 6} = \frac{-8}{12} = -\frac{2}{3}$. Bentuk akhir $\frac{1 - 3}{1 + 2} = -\frac{2}{3}$. Sama.

**Jawaban:** (a) $\frac{2x}{3y^2}$; (b) $\frac{x - 3}{x + 2}$.

### Contoh 2: Mengalikan dan membagi

**Soal.** Hitung (a) $\frac{3a}{4b} \times \frac{8b^2}{9a^2}$ dan (b) $\frac{x + 1}{6} \div \frac{x^2 - 1}{9}$.

1. **Langkah 1 (a): Coret sebelum mengalikan.** $3$ dengan $9$ menjadi $1$ dan $3$. $4$ dengan $8$ menjadi $1$ dan $2$. $a$ dengan $a^2$ menyisakan $a$ di bawah. $b$ dengan $b^2$ menyisakan $b$ di atas.
2. **Langkah 2 (a): Kalikan sisanya.** $\frac{1 \cdot 2b}{1 \cdot 3a} = \frac{2b}{3a}$.
3. **Langkah 3 (b): Ubah bagi menjadi kali kebalikan.** $\frac{x + 1}{6} \times \frac{9}{x^2 - 1}$.
4. **Langkah 4 (b): Faktorkan dan coret.** $x^2 - 1 = (x - 1)(x + 1)$. Coret $(x + 1)$. Coret 3 dari 6 dan 9. Hasilnya $\frac{3}{2(x - 1)}$.
5. **Cek jawaban.** Untuk (b) pilih $x = 2$: $\frac{3}{6} \div \frac{3}{9} = \frac{1}{2} \times 3 = \frac{3}{2}$. Bentuk akhir $\frac{3}{2(1)} = \frac{3}{2}$. Sama.

**Jawaban:** (a) $\frac{2b}{3a}$; (b) $\frac{3}{2(x - 1)}$.

### Contoh 3: Menjumlah dan mengurangi

**Soal.** Sederhanakan (a) $\frac{x + 3}{4} - \frac{x - 1}{6}$ dan (b) $\frac{2}{x} + \frac{3}{x + 1}$.

1. **Langkah 1 (a): Samakan penyebut.** KPK dari 4 dan 6 adalah 12. $\frac{3(x + 3)}{12} - \frac{2(x - 1)}{12}$.
2. **Langkah 2 (a): Gabungkan dengan kurung.** $\frac{3x + 9 - 2x + 2}{12} = \frac{x + 11}{12}$.
3. **Langkah 3 (b): Samakan penyebut.** Penyebut bersama $x(x + 1)$. $\frac{2(x + 1)}{x(x + 1)} + \frac{3x}{x(x + 1)}$.
4. **Langkah 4 (b): Gabungkan.** $\frac{2x + 2 + 3x}{x(x + 1)} = \frac{5x + 2}{x(x + 1)}$.
5. **Cek jawaban.** (a) dengan $x = 1$: $\frac{4}{4} - \frac{0}{6} = 1$ dan $\frac{12}{12} = 1$. (b) dengan $x = 1$: $2 + \frac{3}{2} = \frac{7}{2}$ dan $\frac{7}{1 \cdot 2} = \frac{7}{2}$. Keduanya cocok.

**Jawaban:** (a) $\frac{x + 11}{12}$; (b) $\frac{5x + 2}{x(x + 1)}$.

### Contoh 4: Mengubah subjek dengan kuadrat

**Soal.** Rumus energi gerak adalah $E = \frac{1}{2}mv^2$. Jadikan $v$ sebagai subjek ($v$ positif).

1. **Langkah 1: Lihat lapisan pada $v$.** $v$ dikuadratkan, lalu dikali $m$, lalu dikali $\frac{1}{2}$.
2. **Langkah 2: Buka lapisan $\frac{1}{2}$.** Kalikan kedua ruas dengan 2: $2E = mv^2$.
3. **Langkah 3: Buka lapisan $m$.** Bagi kedua ruas dengan $m$: $\frac{2E}{m} = v^2$.
4. **Langkah 4: Buka lapisan kuadrat.** Ambil akar: $v = \sqrt{\frac{2E}{m}}$.
5. **Cek jawaban.** Coba $m = 2$, $v = 3$: $E = \frac{1}{2} \cdot 2 \cdot 9 = 9$. Rumus baru: $\sqrt{\frac{2 \cdot 9}{2}} = \sqrt{9} = 3$. Cocok.

**Jawaban:** $v = \sqrt{\frac{2E}{m}}$.

### Contoh 5: Soal cerita suhu tubuh

**Soal.** Rumus suhu adalah $F = \frac{9}{5}C + 32$. Termometer kiriman sepupu Siti dari luar negeri menunjukkan $98{,}6^\circ$F. (a) Jadikan $C$ subjek. (b) Berapa suhu itu dalam Celsius?

1. **Langkah 1: Lihat lapisan pada $C$.** $C$ dikali $\frac{9}{5}$, lalu ditambah 32.
2. **Langkah 2: Buka lapisan terakhir.** Kurangi 32: $F - 32 = \frac{9}{5}C$.
3. **Langkah 3: Buka lapisan perkalian.** Kalikan dengan $\frac{5}{9}$: $C = \frac{5(F - 32)}{9}$.
4. **Langkah 4: Masukkan angka.** $C = \frac{5(98{,}6 - 32)}{9} = \frac{5 \times 66{,}6}{9} = \frac{333}{9} = 37$.
5. **Cek jawaban.** Hitung maju: $\frac{9}{5} \times 37 + 32 = 66{,}6 + 32 = 98{,}6$. Cocok. Juga masuk akal, karena $37^\circ$C adalah suhu tubuh normal.

**Jawaban:** (a) $C = \frac{5(F - 32)}{9}$; (b) $37^\circ$C.

## Kesalahan yang sering terjadi

- **Mencoret suku, bukan faktor.** Menulis $\frac{x + 2}{x} = 2$ dengan mencoret $x$. Salah, karena $x$ di atas terlem dengan 2 dalam satu bungkus. Coba $x = 1$: $\frac{3}{1} = 3$, bukan 2.
- **Lupa kurung saat mengurangi.** Menulis $\frac{3(x + 3) - 2x - 1}{12}$. Minus berlaku untuk seluruh $2(x - 1)$, jadi $-2x + 2$.
- **Menjumlah penyebut.** Menulis $\frac{2}{x} + \frac{3}{x + 1} = \frac{5}{2x + 1}$. Pecahan dijumlah dengan menyamakan penyebut, bukan menjumlah atas dan bawah.
- **Membuka lapisan dengan urutan salah.** Dari $F = \frac{9}{5}C + 32$ langsung mengalikan $\frac{5}{9}$ hanya pada $F$, lalu mengurangi 32. Lapisan $+32$ dipasang terakhir, jadi harus dibuka pertama.
- **Lupa membagi seluruh ruas.** Dari $v - u = at$ menulis $t = v - \frac{u}{a}$. Seluruh $v - u$ harus dibagi $a$.

## Ringkasan

- Pecahan aljabar mengikuti aturan pecahan biasa.
- Sederhanakan: faktorkan dulu, lalu coret faktor (bungkus utuh) yang sama. Jangan mencoret suku.
- Kali: kalikan atas dan bawah. Bagi: kali dengan kebalikan. Coret sebelum mengalikan.
- Tambah dan kurang: samakan penyebut dengan KPK, beri kurung pada pembilang.
- Ubah subjek: buka lapisan dari yang terakhir dipasang, lakukan pada kedua ruas.
- Cek dengan memasukkan angka ke bentuk awal dan bentuk akhir.

## Cek pemahaman

1. Sederhanakan $\frac{12a^3b}{18ab^2}$.
2. Sederhanakan $\frac{x^2 - 4x}{x^2 - 16}$.
3. Sederhanakan $\frac{3}{x - 2} - \frac{1}{x}$.
4. Hitung $\frac{2x}{5} \div \frac{4x^2}{15}$.
5. Keliling persegi panjang $K = 2(p + l)$. Jadikan $l$ subjek, lalu hitung $l$ jika $K = 50$ cm dan $p = 14$ cm.

### Kunci jawaban

1. $\frac{2a^2}{3b}$. Coret $6$, $a$, dan $b$.
2. $\frac{x}{x + 4}$. $\frac{x(x - 4)}{(x - 4)(x + 4)}$, lalu coret $(x - 4)$.
3. $\frac{2(x + 1)}{x(x - 2)}$. $\frac{3x - (x - 2)}{x(x - 2)} = \frac{2x + 2}{x(x - 2)}$.
4. $\frac{3}{2x}$. $\frac{2x}{5} \times \frac{15}{4x^2} = \frac{30x}{20x^2} = \frac{3}{2x}$.
5. $l = \frac{K}{2} - p$, jadi $l = 25 - 14 = 11$ cm.
