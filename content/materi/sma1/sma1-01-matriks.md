---
id: sma1-01-matriks
judul: Matriks
jenjang: sma1
moe: "Secondary 4 · Number and Algebra · N9 Matrices"
prasyarat: [smp1-07-bentuk-aljabar]
durasi_menit: 50
---

## Kenapa belajar ini?

Toko, kantin, dan pabrik menyimpan data dalam tabel: jumlah barang per hari, harga per jenis, stok per cabang. Matriks adalah cara matematika menulis tabel itu, lengkap dengan aturan menjumlah dan mengalikannya. Dengan matriks, menghitung pendapatan banyak hari sekaligus menjadi satu operasi yang rapi.

## Analogi

Bayangkan **buku catatan penjualan kantin sekolah**. Setiap **baris** adalah satu hari, setiap **kolom** adalah satu menu.

- Menggabungkan catatan dua kantin berarti menjumlahkan kotak yang **posisinya sama**.
- Kalau semua porsi dilipatgandakan, setiap kotak dikalikan bilangan yang sama.
- Kasir menghitung uang masuk dengan cara **"porsi kali harga, lalu dijumlah"** untuk setiap hari. Inilah inti perkalian matriks: satu **baris** porsi bertemu satu **kolom** harga.

Ingat kasir ini sepanjang bab. Hampir setiap aturan matriks bisa dijelaskan dengan apa yang masuk akal bagi kasir.

## Konsep

### Matriks, ordo, dan elemen

**Matriks** adalah susunan bilangan berbentuk persegi panjang dalam baris dan kolom, diapit kurung. Matriks diberi nama huruf kapital.

$$A = \begin{pmatrix} 20 & 15 & 12 \\ 18 & 22 & 10 \end{pmatrix}$$

- **Ordo** = banyak baris × banyak kolom. Matriks $A$ berordo $2 \times 3$ (dibaca "dua kali tiga"). Baris selalu disebut dulu.
- **Elemen** $a_{ij}$ adalah bilangan di baris ke-$i$, kolom ke-$j$. Di sini $a_{23} = 10$.
- Matriks berordo $1 \times n$ disebut **matriks baris**, berordo $m \times 1$ disebut **matriks kolom**, dan berordo $n \times n$ disebut **matriks persegi**.

Dua matriks **sama** jika ordonya sama dan semua elemen yang seletak sama.

### Penjumlahan dan pengurangan

Hanya bisa dilakukan jika **ordonya sama**. Jumlahkan (atau kurangkan) elemen yang seletak:

$$\begin{pmatrix} a & b \\ c & d \end{pmatrix} + \begin{pmatrix} p & q \\ r & s \end{pmatrix} = \begin{pmatrix} a + p & b + q \\ c + r & d + s \end{pmatrix}$$

**Kenapa ordo harus sama?** Menggabungkan catatan dua kantin hanya bermakna jika kotaknya mewakili hari dan menu yang sama.

### Perkalian skalar

Bilangan $k$ dikalikan ke **setiap** elemen:

$$k\begin{pmatrix} a & b \\ c & d \end{pmatrix} = \begin{pmatrix} ka & kb \\ kc & kd \end{pmatrix}$$

Contoh: jika semua pesanan berlipat 2, setiap kotak di catatan menjadi 2 kali.

### Perkalian matriks

Untuk menghitung $AB$, ambil **baris** dari $A$ dan **kolom** dari $B$. Kalikan pasangan yang bersesuaian, lalu jumlahkan. Hasilnya diletakkan di baris dan kolom yang sama:

$$\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} p & q \\ r & s \end{pmatrix} = \begin{pmatrix} ap + br & aq + bs \\ cp + dr & cq + ds \end{pmatrix}$$

**Syarat:** banyak kolom $A$ = banyak baris $B$.

$$A_{m \times n} \times B_{n \times p} = C_{m \times p}$$

**Kenapa syaratnya begitu?** Kasir memasangkan setiap jenis menu dengan harganya. Kalau ada 3 menu (3 kolom di catatan), harus ada 3 harga (3 baris di daftar harga). Kalau tidak cocok, ada menu tanpa harga.

**Urutan penting.** Umumnya $AB \ne BA$, bahkan $BA$ bisa tidak terdefinisi. "Porsi × harga" bermakna, tetapi "harga × porsi" dalam bentuk matriks belum tentu.

## Contoh langkah demi langkah

### Contoh 1: Menyajikan informasi dalam matriks

**Soal.** Kantin sekolah menjual nasi goreng, mi ayam, dan bakso. Hari Senin terjual 20, 15, dan 12 porsi. Hari Selasa terjual 18, 22, dan 10 porsi. Sajikan dalam matriks $A$ dengan baris = hari. Tentukan ordo $A$ dan arti $a_{23}$.

1. **Langkah 1: Tentukan baris dan kolom.** Baris 1 = Senin, baris 2 = Selasa. Kolom 1 = nasi goreng, kolom 2 = mi ayam, kolom 3 = bakso.
2. **Langkah 2: Isi matriks.**
   $$A = \begin{pmatrix} 20 & 15 & 12 \\ 18 & 22 & 10 \end{pmatrix}$$
3. **Langkah 3: Ordo.** 2 baris dan 3 kolom, jadi $2 \times 3$.
4. **Langkah 4: Arti elemen.** $a_{23}$ ada di baris 2 (Selasa), kolom 3 (bakso): 10 porsi bakso terjual hari Selasa.
5. **Cek jawaban.** Banyak elemen $= 2 \times 3 = 6$, sama dengan banyak data di soal.

**Jawaban:** Ordo $2 \times 3$; $a_{23} = 10$ adalah porsi bakso hari Selasa.

### Contoh 2: Perkalian skalar dan pengurangan

**Soal.** Diketahui $A = \begin{pmatrix} 2 & -1 \\ 4 & 0 \end{pmatrix}$ dan $B = \begin{pmatrix} 1 & 3 \\ -2 & 5 \end{pmatrix}$. Hitung $3A - B$.

1. **Langkah 1: Cek ordo.** Keduanya $2 \times 2$, jadi pengurangan bisa dilakukan.
2. **Langkah 2: Perkalian skalar.** $3A = \begin{pmatrix} 6 & -3 \\ 12 & 0 \end{pmatrix}$.
3. **Langkah 3: Kurangkan elemen seletak.**
   $$3A - B = \begin{pmatrix} 6 - 1 & -3 - 3 \\ 12 - (-2) & 0 - 5 \end{pmatrix} = \begin{pmatrix} 5 & -6 \\ 14 & -5 \end{pmatrix}$$
4. **Cek jawaban.** Jumlahkan balik $B$: $\begin{pmatrix} 5 + 1 & -6 + 3 \\ 14 - 2 & -5 + 5 \end{pmatrix} = \begin{pmatrix} 6 & -3 \\ 12 & 0 \end{pmatrix} = 3A$. Cocok.

**Jawaban:** $\begin{pmatrix} 5 & -6 \\ 14 & -5 \end{pmatrix}$.

### Contoh 3: Perkalian dua matriks dan urutannya

**Soal.** Dengan $A = \begin{pmatrix} 2 & 1 \\ 3 & -1 \end{pmatrix}$ dan $B = \begin{pmatrix} 4 & 0 \\ -2 & 5 \end{pmatrix}$, hitung $AB$ dan $BA$.

1. **Langkah 1: Cek syarat.** $2 \times 2$ kali $2 \times 2$: kolom $A$ (2) = baris $B$ (2). Hasil $2 \times 2$.
2. **Langkah 2: Baris 1 $A$ dengan tiap kolom $B$.** $(2)(4) + (1)(-2) = 6$ dan $(2)(0) + (1)(5) = 5$.
3. **Langkah 3: Baris 2 $A$ dengan tiap kolom $B$.** $(3)(4) + (-1)(-2) = 14$ dan $(3)(0) + (-1)(5) = -5$.
4. **Langkah 4: Tulis $AB$.** $AB = \begin{pmatrix} 6 & 5 \\ 14 & -5 \end{pmatrix}$.
5. **Langkah 5: Hitung $BA$ dengan cara yang sama.** Baris 1 $B$: $(4)(2) + (0)(3) = 8$ dan $(4)(1) + (0)(-1) = 4$. Baris 2 $B$: $(-2)(2) + (5)(3) = 11$ dan $(-2)(1) + (5)(-1) = -7$. Jadi $BA = \begin{pmatrix} 8 & 4 \\ 11 & -7 \end{pmatrix}$.
6. **Cek jawaban.** Hitung ulang satu elemen secara acak, misalnya baris 2 kolom 1 dari $AB$: $12 + 2 = 14$. Benar. Terlihat $AB \ne BA$.

**Jawaban:** $AB = \begin{pmatrix} 6 & 5 \\ 14 & -5 \end{pmatrix}$, $BA = \begin{pmatrix} 8 & 4 \\ 11 & -7 \end{pmatrix}$.

### Contoh 4: Soal kontekstual, pendapatan dan laba toko kue

**Soal.** Toko kue Bu Siti menjual kue lapis, onde-onde, dan klepon. Pesanan hari Senin: 20, 30, 40 buah. Selasa: 25, 10, 50 buah. Harga jual per buah Rp3.000, Rp2.000, Rp1.500, dan modal per buah Rp2.000, Rp1.200, Rp1.000. Hitung pendapatan, modal, dan laba tiap hari dengan matriks.

1. **Langkah 1: Susun matriks pesanan $Q$** (baris = hari, kolom = jenis kue):
   $$Q = \begin{pmatrix} 20 & 30 & 40 \\ 25 & 10 & 50 \end{pmatrix}$$
2. **Langkah 2: Susun matriks harga $P$** (baris = jenis kue, kolom = harga jual, modal):
   $$P = \begin{pmatrix} 3.000 & 2.000 \\ 2.000 & 1.200 \\ 1.500 & 1.000 \end{pmatrix}$$
3. **Langkah 3: Cek syarat.** $Q$ berordo $2 \times 3$ dan $P$ berordo $3 \times 2$. Kolom $Q$ = baris $P$ = 3 (tiga jenis kue). Hasil berordo $2 \times 2$.
4. **Langkah 4: Hitung $QP$ seperti kasir.**
   - Senin, jual: $20(3.000) + 30(2.000) + 40(1.500) = 60.000 + 60.000 + 60.000 = 180.000$.
   - Senin, modal: $20(2.000) + 30(1.200) + 40(1.000) = 40.000 + 36.000 + 40.000 = 116.000$.
   - Selasa, jual: $25(3.000) + 10(2.000) + 50(1.500) = 75.000 + 20.000 + 75.000 = 170.000$.
   - Selasa, modal: $25(2.000) + 10(1.200) + 50(1.000) = 50.000 + 12.000 + 50.000 = 112.000$.
   $$QP = \begin{pmatrix} 180.000 & 116.000 \\ 170.000 & 112.000 \end{pmatrix}$$
5. **Langkah 5: Hitung laba.** Senin: $180.000 - 116.000 = 64.000$. Selasa: $170.000 - 112.000 = 58.000$.
6. **Cek jawaban.** Laba per buah: lapis Rp1.000, onde-onde Rp800, klepon Rp500. Senin: $20(1.000) + 30(800) + 40(500) = 20.000 + 24.000 + 20.000 = 64.000$. Cocok.

**Jawaban:** Senin: pendapatan Rp180.000, modal Rp116.000, laba Rp64.000. Selasa: pendapatan Rp170.000, modal Rp112.000, laba Rp58.000.

## Kesalahan yang sering terjadi

- **Ordo terbalik.** Menulis matriks 2 baris 3 kolom sebagai $3 \times 2$. Ingat: **baris dulu, baru kolom**.
- **Mengalikan elemen seletak.** $\begin{pmatrix} 2 & 1 \\ 3 & -1 \end{pmatrix}\begin{pmatrix} 4 & 0 \\ -2 & 5 \end{pmatrix} \ne \begin{pmatrix} 8 & 0 \\ -6 & -5 \end{pmatrix}$. Perkalian matriks adalah **baris kali kolom**, seperti kasir.
- **Menganggap $AB = BA$.** Pada Contoh 3, $AB$ dan $BA$ berbeda. Perhatikan urutan yang diminta soal.
- **Mengalikan matriks yang ordonya tidak cocok.** $Q_{2 \times 3} \times Q_{2 \times 3}$ tidak terdefinisi, karena 3 kolom tidak bisa dipasangkan dengan 2 baris.
- **Lupa tanda negatif.** $12 - (-2) = 14$, bukan 10. Tulis tanda kurung saat mengurangi bilangan negatif.

## Ringkasan

- Matriks menyajikan data dalam baris dan kolom; ordo = baris × kolom; $a_{ij}$ = elemen baris $i$ kolom $j$.
- Penjumlahan dan pengurangan: ordo harus sama, operasikan elemen seletak.
- Perkalian skalar: kalikan setiap elemen.
- Perkalian matriks: baris kali kolom lalu dijumlah; syarat $A_{m \times n}B_{n \times p} = C_{m \times p}$.
- Umumnya $AB \ne BA$.
- Dalam soal konteks, susun matriks agar "kolom kiri" dan "baris kanan" mewakili hal yang sama.

## Cek pemahaman

1. Tentukan ordo $\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$ dan elemen $a_{21}$.
2. Hitung $\begin{pmatrix} 3 & -2 \\ 1 & 4 \end{pmatrix} + \begin{pmatrix} -1 & 5 \\ 6 & 0 \end{pmatrix}$.
3. Diketahui $A = \begin{pmatrix} 1 & 4 \\ -2 & 3 \end{pmatrix}$ dan $B = \begin{pmatrix} 2 & 1 \\ 0 & -1 \end{pmatrix}$. Hitung $2A - 3B$.
4. Hitung $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 5 \\ 6 \end{pmatrix}$.
5. Rina membeli 3 buku dan 2 pensil. Doni membeli 1 buku dan 5 pensil. Harga buku Rp5.000 dan pensil Rp2.000. Tuliskan perkalian matriks untuk menghitung belanja masing-masing, lalu hitung hasilnya.

### Kunci jawaban

1. Ordo $2 \times 3$; $a_{21} = 4$ (baris 2, kolom 1).
2. $\begin{pmatrix} 2 & 3 \\ 7 & 4 \end{pmatrix}$.
3. $2A = \begin{pmatrix} 2 & 8 \\ -4 & 6 \end{pmatrix}$, $3B = \begin{pmatrix} 6 & 3 \\ 0 & -3 \end{pmatrix}$, jadi $2A - 3B = \begin{pmatrix} -4 & 5 \\ -4 & 9 \end{pmatrix}$.
4. $\begin{pmatrix} 1(5) + 2(6) \\ 3(5) + 4(6) \end{pmatrix} = \begin{pmatrix} 17 \\ 39 \end{pmatrix}$.
5. $\begin{pmatrix} 3 & 2 \\ 1 & 5 \end{pmatrix}\begin{pmatrix} 5.000 \\ 2.000 \end{pmatrix} = \begin{pmatrix} 19.000 \\ 15.000 \end{pmatrix}$: Rina Rp19.000, Doni Rp15.000.
