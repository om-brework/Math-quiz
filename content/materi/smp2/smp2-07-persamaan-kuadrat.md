---
id: smp2-07-persamaan-kuadrat
judul: Persamaan Kuadrat dengan Pemfaktoran
jenjang: smp2
moe: "Secondary 2 · Number and Algebra · N7 Equations and inequalities"
prasyarat: [smp2-02-ekspansi-faktorisasi, smp1-09-persamaan-linear]
durasi_menit: 45
---

## Kenapa belajar ini?

Saat menghitung ukuran kebun dari luasnya, atau mencari dua bilangan dari hasil kalinya, kita sering bertemu bentuk $x^2$. Persamaan seperti ini disebut persamaan kuadrat. Kalau bentuknya bisa difaktorkan, ada cara yang sangat cepat untuk menyelesaikannya.

## Analogi

Bayangkan **mesin fotokopi** di koperasi sekolah. Banyak lembar yang keluar dihitung dengan:

$$\text{banyak lembar} = \text{banyak rangkap} \times \text{banyak halaman}$$

Suatu hari mesin mengeluarkan **0 lembar**. Apa artinya? Pasti **banyak rangkapnya 0**, atau **banyak halamannya 0** (atau dua-duanya). Tidak mungkin keduanya bukan nol, karena dua bilangan bukan nol jika dikalikan tidak pernah menghasilkan 0.

Inilah kunci seluruh materi ini. Kalau kita bisa menulis persamaan sebagai **perkalian dua faktor sama dengan nol**, kita cukup memeriksa: faktor pertama nol, atau faktor kedua nol.

## Konsep

### Persamaan kuadrat

**Persamaan kuadrat** adalah persamaan yang pangkat tertinggi variabelnya 2. Bentuk umumnya:

$$ax^2 + bx + c = 0, \quad a \ne 0$$

Contoh: $x^2 - 7x + 12 = 0$, $2x^2 + x - 6 = 0$, $x^2 = 5x$. Persamaan kuadrat bisa punya dua penyelesaian, satu penyelesaian, atau tidak punya penyelesaian real. Penyelesaian disebut juga **akar**.

### Sifat hasil kali nol

Untuk bilangan real $A$ dan $B$:

$$A \times B = 0 \quad\Rightarrow\quad A = 0 \ \text{atau}\ B = 0$$

Kenapa benar? Misalkan $A \ne 0$. Bagi kedua ruas dengan $A$, kita dapat $B = 0$. Jadi kalau $A$ bukan nol, $B$ pasti nol. Ini sama dengan mesin fotokopi tadi.

**Penting:** sifat ini hanya berlaku untuk **nol**. Jika $A \times B = 6$, kita **tidak** bisa menyimpulkan $A = 6$ atau $B = 6$, karena $6 = 2 \times 3 = 1 \times 6 = 12 \times \frac{1}{2}$, dan seterusnya.

### Mengingat cara memfaktorkan

Dari materi ekspansi dan faktorisasi, ada beberapa pola:

- **Faktor persekutuan:** $x^2 - 5x = x(x - 5)$.
- **Selisih dua kuadrat:** $x^2 - 16 = (x + 4)(x - 4)$.
- **Trinomial $x^2 + bx + c$:** cari dua bilangan yang hasil kalinya $c$ dan jumlahnya $b$. Contoh: $x^2 - 7x + 12$, dua bilangannya $-3$ dan $-4$, jadi $(x - 3)(x - 4)$.
- **Trinomial $ax^2 + bx + c$:** cari dua bilangan yang hasil kalinya $ac$ dan jumlahnya $b$, pecah suku tengah, lalu kelompokkan.

### Lima langkah tetap

1. **Rapikan:** pindahkan semua suku ke satu ruas sehingga ruas lain **0**.
2. **Faktorkan** bentuk kuadratnya.
3. **Pakai sifat hasil kali nol:** tulis "faktor 1 = 0 atau faktor 2 = 0".
4. **Selesaikan** dua persamaan linear kecil itu.
5. **Cek** setiap jawaban dengan memasukkannya ke persamaan awal (dan ke konteks soal cerita).

## Contoh langkah demi langkah

### Contoh 1: Sudah dalam bentuk faktor

**Soal.** Selesaikan $(x - 3)(x + 5) = 0$.

1. **Langkah 1: Periksa bentuk.** Ruas kanan sudah 0, dan ruas kiri sudah berupa perkalian dua faktor.
2. **Langkah 2: Pakai sifat hasil kali nol.** Mesin mengeluarkan 0 lembar, jadi salah satu faktor nol.
$$x - 3 = 0 \quad\text{atau}\quad x + 5 = 0$$
3. **Langkah 3: Selesaikan.** $x = 3$ atau $x = -5$.
4. **Cek jawaban.** $x = 3$: $(0)(8) = 0$, benar. $x = -5$: $(-8)(0) = 0$, benar.

**Jawaban:** $x = 3$ atau $x = -5$.

### Contoh 2: Trinomial dengan $a = 1$

**Soal.** Selesaikan $x^2 - 7x + 12 = 0$.

1. **Langkah 1: Rapikan.** Ruas kanan sudah 0.
2. **Langkah 2: Faktorkan.** Cari dua bilangan yang hasil kalinya $12$ dan jumlahnya $-7$. Pasangan $-3$ dan $-4$ cocok, karena $(-3)(-4) = 12$ dan $-3 + (-4) = -7$.
$$(x - 3)(x - 4) = 0$$
3. **Langkah 3: Pakai sifat hasil kali nol.** $x - 3 = 0$ atau $x - 4 = 0$.
4. **Langkah 4: Selesaikan.** $x = 3$ atau $x = 4$.
5. **Cek jawaban.** $x = 3$: $9 - 21 + 12 = 0$, benar. $x = 4$: $16 - 28 + 12 = 0$, benar.

**Jawaban:** $x = 3$ atau $x = 4$.

### Contoh 3: Jangan membagi dengan $x$

**Soal.** Selesaikan $x^2 = 5x$.

1. **Langkah 1: Rapikan.** Pindahkan $5x$ ke kiri: $x^2 - 5x = 0$. Jangan membagi kedua ruas dengan $x$, karena $x$ mungkin bernilai 0, dan membagi dengan 0 tidak boleh.
2. **Langkah 2: Faktorkan.** Faktor persekutuannya $x$: $x(x - 5) = 0$.
3. **Langkah 3: Pakai sifat hasil kali nol.** $x = 0$ atau $x - 5 = 0$.
4. **Langkah 4: Selesaikan.** $x = 0$ atau $x = 5$.
5. **Cek jawaban.** $x = 0$: $0 = 0$, benar. $x = 5$: $25 = 25$, benar. Kalau tadi kita membagi dengan $x$, jawaban $x = 0$ akan hilang.

**Jawaban:** $x = 0$ atau $x = 5$.

### Contoh 4: Trinomial dengan $a \ne 1$

**Soal.** Selesaikan $2x^2 + x - 6 = 0$.

1. **Langkah 1: Rapikan.** Ruas kanan sudah 0. $a = 2$, $b = 1$, $c = -6$.
2. **Langkah 2: Cari dua bilangan.** Hasil kali $ac = 2 \times (-6) = -12$, jumlah $b = 1$. Pasangan $4$ dan $-3$ cocok.
3. **Langkah 3: Pecah suku tengah dan kelompokkan.**
$$2x^2 + 4x - 3x - 6 = 2x(x + 2) - 3(x + 2) = (2x - 3)(x + 2)$$
4. **Langkah 4: Pakai sifat hasil kali nol.** $2x - 3 = 0$ atau $x + 2 = 0$, jadi $x = \frac{3}{2}$ atau $x = -2$.
5. **Cek jawaban.** $x = \frac{3}{2}$: $2 \cdot \frac{9}{4} + \frac{3}{2} - 6 = \frac{9}{2} + \frac{3}{2} - 6 = 6 - 6 = 0$, benar. $x = -2$: $8 - 2 - 6 = 0$, benar.

**Jawaban:** $x = \frac{3}{2}$ atau $x = -2$.

### Contoh 5: Soal cerita

**Soal.** Pak Wayan punya kebun berbentuk persegi panjang. Panjangnya 3 m lebih dari lebarnya. Luas kebun $40 \text{ m}^2$. Tentukan panjang dan lebar kebun.

1. **Langkah 1: Pilih variabel.** Misalkan lebar $= w$ meter, maka panjang $= w + 3$ meter.
2. **Langkah 2: Susun persamaan.** Luas = panjang × lebar:
$$w(w + 3) = 40$$
3. **Langkah 3: Rapikan.** Ruas kanan belum 0, jadi sifat hasil kali nol belum boleh dipakai. Jabarkan dan pindahkan: $w^2 + 3w - 40 = 0$.
4. **Langkah 4: Faktorkan.** Hasil kali $-40$, jumlah $3$: pasangan $8$ dan $-5$. Jadi $(w + 8)(w - 5) = 0$.
5. **Langkah 5: Selesaikan.** $w = -8$ atau $w = 5$.
6. **Langkah 6: Pilih jawaban yang masuk akal.** Lebar tidak mungkin negatif, jadi $w = -8$ **ditolak**. Lebar $= 5$ m, panjang $= 8$ m.
7. **Cek jawaban.** $5 \times 8 = 40 \text{ m}^2$, dan $8$ memang 3 lebih dari 5.

**Jawaban:** panjang 8 m dan lebar 5 m.

## Kesalahan yang sering terjadi

- **Memakai sifat hasil kali nol ketika ruas kanan bukan 0.** Dari $(x - 2)(x + 3) = 6$ menulis $x - 2 = 6$ atau $x + 3 = 6$. Mesin yang mengeluarkan 6 lembar tidak memberi tahu apa-apa tentang tiap faktor. Yang benar: jabarkan menjadi $x^2 + x - 6 = 6$, lalu $x^2 + x - 12 = 0$, sehingga $(x + 4)(x - 3) = 0$ dan $x = -4$ atau $x = 3$.
- **Membagi dengan $x$.** Dari $x^2 = 5x$ langsung menulis $x = 5$. Akar $x = 0$ hilang. Pindahkan ke satu ruas lalu faktorkan.
- **Salah tanda akar.** Dari $(x + 5) = 0$ menulis $x = 5$. Yang benar $x = -5$. Cek selalu dengan substitusi.
- **Selisih kuadrat hanya satu akar.** Dari $x^2 = 16$ menulis $x = 4$ saja. Karena $(-4)^2 = 16$ juga, jawabannya $x = 4$ atau $x = -4$.
- **Lupa menolak jawaban yang tidak masuk akal.** Pada soal cerita, panjang, umur, atau banyak benda tidak boleh negatif.

## Ringkasan

- Persamaan kuadrat berbentuk $ax^2 + bx + c = 0$ dengan $a \ne 0$.
- Sifat hasil kali nol: jika $A \times B = 0$, maka $A = 0$ atau $B = 0$. Hanya berlaku untuk **nol**.
- Langkah: rapikan menjadi $= 0$ → faktorkan → sifat hasil kali nol → selesaikan → cek.
- Jangan membagi dengan variabel; faktorkan supaya akar $0$ tidak hilang.
- Pada soal cerita, tolak jawaban yang tidak sesuai konteks.

## Cek pemahaman

1. Selesaikan $(x + 4)(2x - 1) = 0$.
2. Selesaikan $x^2 + 2x - 15 = 0$.
3. Selesaikan $x^2 - 16 = 0$.
4. Selesaikan $3x^2 - 10x - 8 = 0$.
5. Hasil kali dua bilangan bulat positif yang berurutan adalah 132. Tentukan kedua bilangan itu.

### Kunci jawaban

1. $x = -4$ atau $x = \frac{1}{2}$. Dari $x + 4 = 0$ atau $2x - 1 = 0$.
2. $x = -5$ atau $x = 3$. Faktornya $(x + 5)(x - 3)$, karena $5 \times (-3) = -15$ dan $5 + (-3) = 2$.
3. $x = 4$ atau $x = -4$. Selisih dua kuadrat: $(x + 4)(x - 4) = 0$.
4. $x = 4$ atau $x = -\frac{2}{3}$. $ac = -24$, dua bilangannya $-12$ dan $2$, sehingga $(3x + 2)(x - 4) = 0$.
5. 11 dan 12. $n(n + 1) = 132$ memberi $n^2 + n - 132 = 0$, yaitu $(n + 12)(n - 11) = 0$; $n = -12$ ditolak karena harus positif.
