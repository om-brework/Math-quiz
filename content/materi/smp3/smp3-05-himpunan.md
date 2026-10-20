---
id: smp3-05-himpunan
judul: Himpunan dan Diagram Venn
jenjang: smp3
moe: "Secondary 3 · Number and Algebra · N8 Set language and notation"
prasyarat: []
durasi_menit: 45
---

## Kenapa belajar ini?

Wali kelas ingin tahu berapa siswa yang ikut futsal, paduan suara, keduanya, atau tidak ikut apa pun. Bahasa himpunan dan diagram Venn membuat data seperti ini rapi dan mudah dihitung, tanpa ada siswa yang terhitung dua kali.

## Analogi

Bayangkan seluruh siswa kelas 9A berkumpul di **lapangan sekolah**. Lapangan itu adalah **semesta**: tempat semua yang sedang kita bicarakan.

Di lantai lapangan ada dua **simpai (hula hoop) besar** yang saling tumpang tindih. Simpai merah untuk anggota klub futsal, simpai biru untuk anggota paduan suara.

- Siswa yang ikut keduanya berdiri di **bagian yang tumpang tindih**.
- Siswa yang hanya ikut satu klub berdiri di bagian simpainya saja.
- Siswa yang tidak ikut keduanya berdiri di lapangan, **di luar kedua simpai**.

Setiap siswa berdiri di tepat satu tempat. Itulah kunci menghitung dengan diagram Venn.

## Konsep

### Himpunan dan anggota

**Himpunan** adalah kumpulan benda yang batasnya jelas: kita selalu bisa memutuskan apakah suatu benda termasuk atau tidak. Himpunan ditulis dengan huruf kapital dan kurung kurawal.

- $A = \{2, 4, 6, 8\}$ (cara mendaftar).
- $A = \{x : x \text{ bilangan genap}, 1 \le x \le 9\}$ (cara notasi pembentuk himpunan). Dibaca "himpunan $x$ sehingga $x$ bilangan genap antara 1 dan 9".

Lambang **$\in$** berarti "anggota dari": $4 \in A$. Lambang **$\notin$** berarti "bukan anggota": $5 \notin A$.

**$n(A)$** adalah banyak anggota himpunan $A$. Di sini $n(A) = 4$. Ini sama dengan menghitung siswa di dalam satu simpai.

### Himpunan kosong dan semesta

- **Himpunan kosong**, ditulis $\varnothing$ atau $\{\}$, tidak punya anggota. Contoh: himpunan siswa 9A yang tingginya 5 meter. Simpainya kosong.
- **Himpunan semesta**, ditulis $\xi$ (di buku Indonesia sering $S$), berisi semua anggota yang sedang dibicarakan. Ini lapangannya.

### Komplemen, irisan, gabungan

- **Komplemen** $A'$: anggota semesta yang **tidak** di $A$. Semua siswa di luar simpai merah.
- **Irisan** $A \cap B$: anggota yang ada di $A$ **dan** di $B$. Bagian yang tumpang tindih.
- **Gabungan** $A \cup B$: anggota yang ada di $A$ **atau** $B$ (atau keduanya). Semua siswa yang berdiri di dalam simpai mana pun.

### Himpunan bagian

$A \subseteq B$ berarti setiap anggota $A$ juga anggota $B$. Bayangkan simpai $A$ terletak seluruhnya di dalam simpai $B$.

$A \subset B$ (**himpunan bagian sejati**) berarti $A \subseteq B$ tetapi $A \ne B$: $B$ punya anggota yang tidak ada di $A$.

Dua fakta penting: $\varnothing$ adalah himpunan bagian dari setiap himpunan, dan setiap himpunan adalah himpunan bagian dari dirinya sendiri.

### Empat daerah pada diagram Venn

Dua lingkaran di dalam persegi panjang membagi semesta menjadi empat daerah. Pada gambar teks di bawah, lingkaran digambar sebagai kotak:

```
+-------------------------------------------+
| ξ                                         |
|   +-----------------+                     |
|   | A               |                     |
|   |      I     +----+--------------+      |
|   |            | II |              |      |
|   +------------+----+     III      |      |
|                |                 B |      |
|                +-------------------+      |
|                                      IV   |
+-------------------------------------------+
```

- I: hanya $A$, yaitu $A \cap B'$.
- II: $A$ dan $B$, yaitu $A \cap B$.
- III: hanya $B$, yaitu $A' \cap B$.
- IV: bukan keduanya, yaitu $(A \cup B)'$.

### Rumus banyak anggota gabungan

$$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$

**Kenapa dikurangi?** Saat menghitung $n(A)$ lalu $n(B)$, siswa di daerah tumpang tindih terhitung **dua kali**: sekali di simpai merah, sekali di simpai biru. Jadi kita kurangi sekali.

## Contoh langkah demi langkah

### Contoh 1: Mendaftar anggota

**Soal.** $\xi = \{x : x \text{ bilangan bulat}, 1 \le x \le 12\}$, $A = \{x : x \text{ genap}\}$, $B = \{x : x \text{ kelipatan } 3\}$. Tentukan $A \cap B$, $A \cup B$, $A'$, dan $(A \cup B)'$.

1. **Langkah 1: Daftar setiap himpunan.** $A = \{2, 4, 6, 8, 10, 12\}$, $B = \{3, 6, 9, 12\}$.
2. **Langkah 2: Irisan.** Anggota yang ada di keduanya: $A \cap B = \{6, 12\}$.
3. **Langkah 3: Gabungan.** Semua anggota, tanpa menulis dua kali: $A \cup B = \{2, 3, 4, 6, 8, 9, 10, 12\}$.
4. **Langkah 4: Komplemen.** $A' = \{1, 3, 5, 7, 9, 11\}$ dan $(A \cup B)' = \{1, 5, 7, 11\}$.
5. **Cek jawaban.** Pakai rumus: $n(A \cup B) = 6 + 4 - 2 = 8$. Hitung langsung juga 8. Lalu $8 + 4 = 12 = n(\xi)$, cocok.

**Jawaban:** $A \cap B = \{6, 12\}$, $A \cup B = \{2, 3, 4, 6, 8, 9, 10, 12\}$, $A' = \{1, 3, 5, 7, 9, 11\}$, $(A \cup B)' = \{1, 5, 7, 11\}$.

### Contoh 2: Himpunan bagian dan notasi

**Soal.** Dengan $A$ dan $B$ dari Contoh 1, mana yang benar? (a) $\{6, 12\} \subset A$, (b) $9 \in A$, (c) $\{3\} \in B$, (d) $\varnothing \subseteq B$.

1. **Langkah 1: Bedakan lambang.** $\in$ menghubungkan **satu anggota** dengan himpunan. $\subset$ dan $\subseteq$ menghubungkan **himpunan** dengan himpunan.
2. **Langkah 2: Periksa (a).** 6 dan 12 keduanya di $A$, dan $A$ punya anggota lain (misalnya 2). Benar.
3. **Langkah 3: Periksa (b).** 9 ganjil, tidak di $A$. Salah; yang benar $9 \notin A$.
4. **Langkah 4: Periksa (c).** $\{3\}$ adalah himpunan, bukan anggota. Salah; yang benar $3 \in B$ atau $\{3\} \subset B$.
5. **Langkah 5: Periksa (d).** Himpunan kosong adalah himpunan bagian dari setiap himpunan. Benar.
6. **Cek jawaban.** Bayangkan simpai: simpai kecil $\{6, 12\}$ muat seluruhnya di dalam simpai $A$, sedangkan anak bernomor 9 berdiri di luar simpai $A$.

**Jawaban:** (a) dan (d) benar; (b) dan (c) salah.

### Contoh 3: Soal cerita dengan diagram Venn

**Soal.** Kelas 9A berisi 36 siswa. Sebanyak 20 siswa ikut futsal, 15 ikut paduan suara, dan 6 ikut keduanya. Berapa siswa yang tidak ikut kedua klub?

1. **Langkah 1: Isi daerah tengah dulu.** Irisan selalu diisi pertama. Daerah II = 6.
2. **Langkah 2: Hitung "hanya futsal".** $20 - 6 = 14$. Daerah I = 14.
3. **Langkah 3: Hitung "hanya paduan suara".** $15 - 6 = 9$. Daerah III = 9.
4. **Langkah 4: Hitung di luar simpai.** $36 - (14 + 6 + 9) = 36 - 29 = 7$.
5. **Cek jawaban.** Dengan rumus: $n(F \cup P) = 20 + 15 - 6 = 29$, dan $36 - 29 = 7$. Sama.

**Jawaban:** 7 siswa tidak ikut kedua klub.

### Contoh 4: Irisan belum diketahui

**Soal.** Dari 40 siswa, 25 suka bakso, 18 suka soto, dan 5 tidak suka keduanya. Berapa siswa yang suka keduanya?

1. **Langkah 1: Beri nama yang belum diketahui.** Misalkan $x$ siswa suka keduanya (daerah II).
2. **Langkah 2: Nyatakan daerah lain dengan $x$.** Hanya bakso: $25 - x$. Hanya soto: $18 - x$. Di luar: 5.
3. **Langkah 3: Susun persamaan.** Semua daerah jumlahnya 40:
   $$(25 - x) + x + (18 - x) + 5 = 40$$
   $$48 - x = 40 \quad\Rightarrow\quad x = 8$$
4. **Cek jawaban.** Daerah-daerahnya $17, 8, 10, 5$. Jumlahnya $17 + 8 + 10 + 5 = 40$. Semua daerah tidak negatif, jadi masuk akal.

**Jawaban:** 8 siswa suka bakso dan soto.

## Kesalahan yang sering terjadi

- **Menghitung irisan dua kali.** Menulis daerah "futsal" = 20 lalu "paduan suara" = 15, sehingga totalnya 41 siswa padahal sebagian sama. Isi irisan dulu, lalu kurangkan dari tiap himpunan.
- **Tertukar $\in$ dan $\subset$.** $\{3\} \in B$ salah. Anggota memakai $\in$, himpunan memakai $\subset$ atau $\subseteq$.
- **Lupa daerah di luar lingkaran.** Komplemen dan $(A \cup B)'$ berada di dalam semesta tetapi di luar lingkaran. Jangan lupakan siswa yang berdiri di luar simpai.
- **Menulis anggota ganda pada gabungan.** $A \cup B = \{2, 4, 6, 12, 3, 6, 9, 12\}$ salah karena 6 dan 12 ditulis dua kali. Tiap anggota cukup ditulis sekali.
- **Mengira $\cap$ berarti "atau".** $\cap$ = dan (irisan), $\cup$ = atau (gabungan). Ingat: huruf "U" pada $\cup$ seperti "union" atau ember yang menampung semua.

## Ringkasan

- Himpunan ditulis dengan $\{\ \}$; $x \in A$ berarti $x$ anggota $A$; $n(A)$ = banyak anggota.
- $\xi$ = semesta, $\varnothing$ = himpunan kosong, $A'$ = komplemen.
- $A \cap B$ = di keduanya, $A \cup B$ = di salah satu atau keduanya.
- $A \subseteq B$: semua anggota $A$ ada di $B$; $A \subset B$: himpunan bagian sejati.
- $n(A \cup B) = n(A) + n(B) - n(A \cap B)$.
- Pada soal cerita: isi irisan dulu, lalu daerah "hanya", lalu daerah luar.

## Cek pemahaman

1. $\xi = \{1, 2, 3, \ldots, 10\}$, $A = \{x : x \text{ bilangan prima}\}$, $B = \{1, 2, 3, 4\}$. Tentukan $A \cap B$, $A \cup B$, dan $A'$.
2. Diketahui $n(A) = 12$, $n(B) = 9$, dan $n(A \cap B) = 4$. Hitung $n(A \cup B)$.
3. Benar atau salah: (a) $3 \in \{1, 3, 5\}$; (b) $\{3\} \in \{1, 3, 5\}$; (c) $\{1, 5\} \subset \{1, 3, 5\}$.
4. Dari 30 siswa, 17 ikut klub matematika, 12 ikut klub sains, dan 4 tidak ikut keduanya. Berapa siswa yang ikut keduanya?
5. Tuliskan semua himpunan bagian dari $\{p, q\}$. Berapa yang merupakan himpunan bagian sejati?

### Kunci jawaban

1. $A = \{2, 3, 5, 7\}$, jadi $A \cap B = \{2, 3\}$, $A \cup B = \{1, 2, 3, 4, 5, 7\}$, $A' = \{1, 4, 6, 8, 9, 10\}$.
2. $12 + 9 - 4 = 17$.
3. (a) Benar; (b) Salah, $\{3\}$ himpunan sehingga harus $\{3\} \subset \{1, 3, 5\}$; (c) Benar.
4. 3 siswa: yang ikut minimal satu klub $30 - 4 = 26$, dan $17 + 12 - x = 26$ memberi $x = 3$.
5. $\varnothing$, $\{p\}$, $\{q\}$, $\{p, q\}$; himpunan bagian sejati ada 3 (semua kecuali $\{p, q\}$).
