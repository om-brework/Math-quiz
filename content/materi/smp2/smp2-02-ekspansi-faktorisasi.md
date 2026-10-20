---
id: smp2-02-ekspansi-faktorisasi
judul: Ekspansi dan Faktorisasi
jenjang: smp2
moe: "Secondary 2 · Number and Algebra · N5 Algebraic expressions and formulae"
prasyarat: [smp1-07-bentuk-aljabar]
durasi_menit: 60
---

## Kenapa belajar ini?

Ekspansi (menjabarkan) dan faktorisasi adalah dua alat yang paling sering dipakai di aljabar SMP dan SMA. Faktorisasi nanti dipakai untuk menyelesaikan persamaan kuadrat, menyederhanakan pecahan aljabar, dan menggambar parabola. Bahkan hitung cepat seperti $101 \times 99$ bisa dikerjakan di kepala dengan identitas aljabar.

## Analogi

Kita memakai **ubin aljabar**, yaitu potongan-potongan kertas dengan luas tertentu:

- **Persegi besar** berukuran $x \times x$, luasnya $x^2$.
- **Persegi panjang** berukuran $x \times 1$, luasnya $x$.
- **Persegi kecil** berukuran $1 \times 1$, luasnya $1$.

Ide utamanya: **perkalian dua bentuk sama dengan luas persegi panjang.**

- **Ekspansi**: kita tahu panjang dan lebar, lalu mencari luas dengan menjumlahkan semua ubin.
- **Faktorisasi**: kita punya tumpukan ubin, lalu menyusunnya menjadi satu persegi panjang utuh untuk menemukan panjang dan lebarnya.

## Konsep

### Mengalikan bentuk aljabar

Setiap suku di kurung pertama dikalikan dengan **setiap** suku di kurung kedua. Dengan ubin, $(x + 3)(x + 5)$ adalah persegi panjang dengan sisi $(x + 3)$ dan $(x + 5)$:

```
          x        3
      +--------+-------+
   x  |   x²   |  3x   |
      +--------+-------+
   5  |   5x   |  15   |
      +--------+-------+
```

Luas total $= x^2 + 3x + 5x + 15 = x^2 + 8x + 15$. Tabel seperti ini disebut **tabel perkalian** dan membantu supaya tidak ada suku yang terlewat.

Untuk tanda negatif, ubin bisa dianggap "berwarna merah" (bernilai negatif). Aturan tanda tetap: negatif kali negatif positif.

### Tiga identitas penting

Dengan tabel perkalian, kita mendapat:

$$(a + b)^2 = a^2 + 2ab + b^2$$
$$(a - b)^2 = a^2 - 2ab + b^2$$
$$(a + b)(a - b) = a^2 - b^2$$

Kenapa ada $2ab$? Pada persegi bersisi $(a + b)$, ada **dua** persegi panjang $a \times b$ di pojok, selain persegi $a^2$ dan $b^2$. Pada $(a + b)(a - b)$, suku tengah $+ab$ dan $-ab$ saling menghapus.

### Faktorisasi dengan pengelompokan

Kalau ada empat suku, kelompokkan dua-dua, keluarkan faktor persekutuan tiap kelompok, lalu cari **kurung yang sama**:

$$ax + ay + 3x + 3y = a(x + y) + 3(x + y) = (x + y)(a + 3)$$

Dalam ubin: dua kelompok ubin yang sama-sama selebar $(x + y)$ ditempel menjadi satu persegi panjang.

### Faktorisasi $x^2 + bx + c$

Kita mencari $(x + p)(x + q)$. Kalau dijabarkan: $x^2 + (p + q)x + pq$. Jadi cari dua bilangan $p$ dan $q$ yang

- **hasil kalinya $c$**, dan
- **jumlahnya $b$**.

Dalam ubin: susun $x^2$, beberapa batang $x$, dan beberapa persegi kecil sehingga membentuk persegi panjang. Persegi kecil harus pas mengisi pojok berukuran $p \times q$.

### Faktorisasi $ax^2 + bx + c$ dengan $a \neq 1$

Cari dua bilangan yang **hasil kalinya $a \times c$** dan **jumlahnya $b$**. Pecah suku tengah dengan dua bilangan itu, lalu pakai pengelompokan.

Kenapa $a \times c$? Kalau $(px + q)(rx + s)$ dijabarkan, hasilnya $prx^2 + psx + qrx + qs$. Dua suku tengahnya $ps$ dan $qr$. Hasil kali keduanya $ps \cdot qr = pr \cdot qs = a \times c$. Jadi dua bilangan itu pasti ada kalau bentuknya bisa difaktorkan.

### Selalu cek dengan menjabarkan

Faktorisasi adalah kebalikan ekspansi. Jabarkan hasil faktorisasimu. Kalau kembali ke bentuk awal, berarti benar.

## Contoh langkah demi langkah

### Contoh 1: Menjabarkan dua kurung

**Soal.** Jabarkan $(x + 3)(x + 5)$ dan $(2x - 1)(x + 4)$.

1. **Langkah 1: Buat tabel ubin untuk yang pertama.** Lihat tabel di bagian Konsep: $x^2$, $3x$, $5x$, $15$.
2. **Langkah 2: Gabungkan suku sejenis.** $x^2 + 8x + 15$.
3. **Langkah 3: Kalikan setiap suku untuk yang kedua.** $2x \cdot x = 2x^2$, $2x \cdot 4 = 8x$, $-1 \cdot x = -x$, $-1 \cdot 4 = -4$.
4. **Langkah 4: Gabungkan.** $2x^2 + 8x - x - 4 = 2x^2 + 7x - 4$.
5. **Cek jawaban.** Pilih $x = 1$. $(1 + 3)(1 + 5) = 24$ dan $1 + 8 + 15 = 24$. Lalu $(2 - 1)(1 + 4) = 5$ dan $2 + 7 - 4 = 5$. Keduanya cocok.

**Jawaban:** $x^2 + 8x + 15$ dan $2x^2 + 7x - 4$.

### Contoh 2: Memakai identitas

**Soal.** Jabarkan $(2x - 3)^2$ dan $(3y + 4)(3y - 4)$. Lalu hitung $101 \times 99$ tanpa kalkulator.

1. **Langkah 1: Kenali bentuk pertama.** $(a - b)^2$ dengan $a = 2x$, $b = 3$.
2. **Langkah 2: Pakai identitas.** $(2x)^2 - 2(2x)(3) + 3^2 = 4x^2 - 12x + 9$.
3. **Langkah 3: Kenali bentuk kedua.** $(a + b)(a - b)$ dengan $a = 3y$, $b = 4$. Hasilnya $9y^2 - 16$.
4. **Langkah 4: Hitung cepat.** $101 \times 99 = (100 + 1)(100 - 1) = 100^2 - 1^2 = 9.999$.
5. **Cek jawaban.** Untuk $x = 2$: $(4 - 3)^2 = 1$ dan $16 - 24 + 9 = 1$. Cocok. Untuk perkalian: $101 \times 99 = 10.100 - 101 = 9.999$. Cocok.

**Jawaban:** $4x^2 - 12x + 9$; $9y^2 - 16$; $9.999$.

### Contoh 3: Faktorisasi dengan pengelompokan

**Soal.** Faktorkan $6xy - 4x + 9y - 6$.

1. **Langkah 1: Kelompokkan dua-dua.** $(6xy - 4x) + (9y - 6)$.
2. **Langkah 2: Keluarkan faktor tiap kelompok.** $2x(3y - 2) + 3(3y - 2)$.
3. **Langkah 3: Keluarkan kurung yang sama.** $(3y - 2)(2x + 3)$.
4. **Cek jawaban.** Jabarkan: $3y \cdot 2x + 3y \cdot 3 - 2 \cdot 2x - 2 \cdot 3 = 6xy + 9y - 4x - 6$. Sama dengan bentuk awal.

**Jawaban:** $(3y - 2)(2x + 3)$.

### Contoh 4: Faktorisasi bentuk kuadrat

**Soal.** Faktorkan (a) $x^2 - 2x - 15$ dan (b) $6x^2 - x - 2$.

1. **Langkah 1 (a): Tentukan target.** Hasil kali $-15$, jumlah $-2$.
2. **Langkah 2 (a): Daftar pasangan faktor $-15$.** $(1, -15)$, $(-1, 15)$, $(3, -5)$, $(-3, 5)$. Yang jumlahnya $-2$ adalah $3$ dan $-5$.
3. **Langkah 3 (a): Tulis faktornya.** $(x + 3)(x - 5)$.
4. **Langkah 4 (b): Hitung $a \times c$.** $6 \times (-2) = -12$. Cari dua bilangan dengan hasil kali $-12$ dan jumlah $-1$: yaitu $3$ dan $-4$.
5. **Langkah 5 (b): Pecah suku tengah dan kelompokkan.**
$$6x^2 - 4x + 3x - 2 = 2x(3x - 2) + 1(3x - 2) = (3x - 2)(2x + 1)$$
6. **Cek jawaban.** $(x + 3)(x - 5) = x^2 - 5x + 3x - 15 = x^2 - 2x - 15$. Dan $(3x - 2)(2x + 1) = 6x^2 + 3x - 4x - 2 = 6x^2 - x - 2$. Keduanya cocok.

**Jawaban:** (a) $(x + 3)(x - 5)$; (b) $(3x - 2)(2x + 1)$.

### Contoh 5: Soal cerita kebun

**Soal.** Kebun Pak Budi berbentuk persegi dengan sisi $x$ meter. Ia memperpanjang satu sisi 4 m dan sisi lainnya 2 m. (a) Tulis luas kebun baru dalam bentuk terjabar. (b) Berapa tambahan luasnya? (c) Hitung luas baru jika $x = 10$.

1. **Langkah 1: Tulis ukuran baru.** Panjang $(x + 4)$ m, lebar $(x + 2)$ m.
2. **Langkah 2: Jabarkan dengan ubin.** $(x + 4)(x + 2) = x^2 + 2x + 4x + 8 = x^2 + 6x + 8$.
3. **Langkah 3: Cari tambahan.** Luas lama $x^2$, jadi tambahan $6x + 8$ meter persegi.
4. **Langkah 4: Masukkan $x = 10$.** $100 + 60 + 8 = 168 \text{ m}^2$.
5. **Cek jawaban.** Langsung: $14 \times 12 = 168$. Cocok.

**Jawaban:** (a) $x^2 + 6x + 8$; (b) $6x + 8$ m²; (c) $168 \text{ m}^2$.

## Kesalahan yang sering terjadi

- **Melupakan suku tengah.** Menulis $(x + 3)^2 = x^2 + 9$. Pada ubin, ada dua persegi panjang $3x$ yang hilang. Yang benar $x^2 + 6x + 9$.
- **Salah tanda pada $b^2$.** Menulis $(2x - 3)^2 = 4x^2 - 12x - 9$. Kuadrat selalu positif: $(-3)^2 = +9$.
- **Hanya mencocokkan hasil kali.** Untuk $x^2 - 2x - 15$ memilih $(x - 3)(x + 5)$. Hasil kalinya benar $-15$, tetapi jumlahnya $+2$, bukan $-2$. Cek keduanya.
- **Kurung tidak sama saat pengelompokan.** Dari $6xy - 4x + 9y - 6$ menulis $2x(3y - 2) - 3(3y + 2)$. Periksa tanda; kurungnya harus identik.
- **Tidak mengecek.** Selalu jabarkan kembali hasil faktorisasi.

## Ringkasan

- Ekspansi: kalikan setiap suku dengan setiap suku. Tabel ubin membantu.
- $(a \pm b)^2 = a^2 \pm 2ab + b^2$ dan $(a + b)(a - b) = a^2 - b^2$.
- Pengelompokan: kelompokkan dua-dua, keluarkan faktor, cari kurung yang sama.
- $x^2 + bx + c$: cari dua bilangan dengan hasil kali $c$ dan jumlah $b$.
- $ax^2 + bx + c$: cari dua bilangan dengan hasil kali $ac$ dan jumlah $b$, pecah suku tengah, lalu kelompokkan.
- Selalu cek faktorisasi dengan menjabarkan kembali.

## Cek pemahaman

1. Jabarkan $(x - 4)(x + 6)$.
2. Jabarkan $(3a + 2b)^2$.
3. Faktorkan $4x^2 - 25$.
4. Faktorkan $xy + 5x - 2y - 10$.
5. Faktorkan (a) $x^2 - 9x + 14$ dan (b) $3x^2 + 10x - 8$.

### Kunci jawaban

1. $x^2 + 2x - 24$. $x^2 + 6x - 4x - 24$.
2. $9a^2 + 12ab + 4b^2$. $(3a)^2 + 2(3a)(2b) + (2b)^2$.
3. $(2x + 5)(2x - 5)$. Bentuk $a^2 - b^2$ dengan $a = 2x$, $b = 5$.
4. $(y + 5)(x - 2)$. $x(y + 5) - 2(y + 5)$.
5. (a) $(x - 2)(x - 7)$, karena $(-2)(-7) = 14$ dan $-2 + (-7) = -9$. (b) $(3x - 2)(x + 4)$: $ac = -24$, pakai $12$ dan $-2$, sehingga $3x^2 + 12x - 2x - 8 = 3x(x + 4) - 2(x + 4)$.
