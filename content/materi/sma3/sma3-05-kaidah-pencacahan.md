---
id: sma3-05-kaidah-pencacahan
judul: Permutasi dan Kombinasi
jenjang: sma3
moe: "H2 Mathematics 9758 · Probability and Statistics · Probability (permutations and combinations)"
prasyarat: [sma1-09-binomial-newton, smp2-12-peluang-dasar]
durasi_menit: 60
---

## Kenapa belajar ini?

Berapa banyak kode PIN yang mungkin? Berapa cara memilih 5 pengurus OSIS dari 12 calon? Menuliskan semua kemungkinan satu per satu tidak praktis. Kaidah pencacahan memberi cara menghitung banyaknya susunan dengan cepat dan pasti, dan menjadi dasar untuk menghitung peluang.

## Analogi

Bayangkan kamu mengisi **deretan kursi kosong** satu per satu. Untuk kursi pertama ada sejumlah pilihan orang. Setelah satu orang duduk, pilihan untuk kursi kedua berkurang satu, dan seterusnya.

- Kalau **kursinya bernomor** (kursi ketua, sekretaris, bendahara), urutan duduk penting. Ini **permutasi**.
- Kalau kursinya hanya **bangku panjang tanpa nomor**, yang penting hanya siapa yang duduk, bukan urutannya. Ini **kombinasi**.
- Kalau kursinya **mengelilingi meja bundar**, tidak ada kursi "pertama". Ini **susunan melingkar**.

Seluruh materi ini adalah variasi dari cara mengisi kursi.

## Konsep

### Aturan perkalian

Jika suatu proses terdiri atas tahap 1 dengan $n_1$ cara, lalu tahap 2 dengan $n_2$ cara (apa pun hasil tahap 1), dan seterusnya, maka banyak cara seluruh proses adalah

$$n_1 \times n_2 \times \cdots \times n_k.$$

Dalam analogi kursi: setiap kursi adalah satu tahap, dan banyak pilihan per kursi dikalikan.

Jika proses bisa terjadi melalui beberapa **kasus terpisah** yang tidak tumpang-tindih, banyak cara tiap kasus **dijumlahkan** (aturan penjumlahan). Ingat: "dan kemudian" berarti kali, "atau" (kasus terpisah) berarti tambah.

### Faktorial dan permutasi

Menyusun $n$ benda berbeda dalam $n$ kursi bernomor: kursi pertama $n$ pilihan, kedua $n-1$, sampai kursi terakhir 1 pilihan. Jadi banyak susunan adalah

$$n! = n(n-1)(n-2)\cdots 2 \cdot 1, \qquad 0! = 1.$$

Jika hanya ada $r$ kursi bernomor untuk $n$ benda berbeda ($r \le n$), kita berhenti setelah $r$ faktor:

$$^{n}P_{r} = n(n-1)\cdots(n-r+1) = \frac{n!}{(n-r)!}.$$

Bentuk pecahan muncul karena $\frac{n!}{(n-r)!}$ "membuang" faktor $(n-r)!$ dari kursi yang tidak ada.

### Permutasi dengan unsur yang sama

Susun huruf kata "PAPUA". Jika kedua P dianggap berbeda ($P_1, P_2$) dan kedua A juga berbeda, ada $5!$ susunan. Tetapi menukar $P_1$ dan $P_2$ tidak menghasilkan kata baru, jadi setiap kata terhitung $2!$ kali karena P dan $2!$ kali karena A. Secara umum, untuk $n$ benda dengan $p$ benda sama jenis pertama, $q$ benda sama jenis kedua, dan seterusnya:

$$\frac{n!}{p!\,q!\cdots}.$$

### Kombinasi

Sekarang $r$ kursi menjadi bangku panjang tanpa nomor. Setiap kelompok berisi $r$ orang dapat duduk di kursi bernomor dengan $r!$ urutan. Jadi setiap kelompok terhitung $r!$ kali di dalam $^{n}P_{r}$:

$$^{n}C_{r} = \binom{n}{r} = \frac{^{n}P_{r}}{r!} = \frac{n!}{r!\,(n-r)!}.$$

Sifat yang berguna: $\binom{n}{r} = \binom{n}{n-r}$, karena memilih $r$ orang yang ikut sama dengan memilih $n-r$ orang yang tidak ikut.

### Susunan dengan syarat

Selalu **penuhi syarat terlebih dahulu**, baru isi kursi sisanya.

- **Posisi tertentu:** isi dulu kursi yang dibatasi (misalnya angka terakhir harus genap).
- **Harus berdampingan:** ikat benda-benda itu menjadi satu **blok**, susun blok bersama benda lain, lalu kalikan dengan banyak susunan di dalam blok.
- **Tidak boleh berdampingan:** hitung (semua susunan) − (susunan yang berdampingan). Cara lain: susun benda lain dulu, lalu sisipkan benda terlarang ke **celah** di antaranya.
- **Paling sedikit / paling banyak:** pecah menjadi kasus, atau pakai komplemen (total dikurangi kasus yang tidak diinginkan).

### Susunan melingkar

Di meja bundar, susunan yang hanya **diputar** dianggap sama, karena setiap orang tetap punya tetangga kiri dan kanan yang sama. Dari $n!$ susunan berderet, setiap susunan melingkar muncul $n$ kali (satu untuk setiap putaran). Jadi

$$\text{banyak susunan melingkar } n \text{ benda berbeda} = \frac{n!}{n} = (n-1)!.$$

Cara praktis: **dudukkan satu orang lebih dulu** sebagai patokan, lalu susun $n-1$ orang lainnya secara berderet relatif terhadap dia.

## Contoh langkah demi langkah

### Contoh 1: Bilangan tiga angka

**Soal.** Dari angka 1, 2, 3, 4, 5 akan dibentuk bilangan tiga angka tanpa pengulangan. (a) Berapa banyak bilangan yang dapat dibentuk? (b) Berapa banyak di antaranya yang genap?

1. **Langkah 1: Pahami soal.** Ada 3 kursi bernomor: ratusan, puluhan, satuan. Urutan penting, karena 123 berbeda dari 321.
2. **Langkah 2: Hitung tanpa syarat.** Ratusan 5 pilihan, puluhan 4, satuan 3. Jadi $5 \times 4 \times 3 = {}^{5}P_{3} = 60$.
3. **Langkah 3: Penuhi syarat dulu.** Bilangan genap berarti angka satuan 2 atau 4: ada 2 pilihan. Isi kursi satuan lebih dulu.
4. **Langkah 4: Isi kursi sisanya.** Tersisa 4 angka untuk ratusan, lalu 3 untuk puluhan. Banyaknya $2 \times 4 \times 3 = 24$.
5. **Cek jawaban.** Karena semua angka setara, proporsi bilangan genap seharusnya $\frac{2}{5}$ dari semua bilangan: $\frac{2}{5} \times 60 = 24$. Cocok.

**Jawaban:** (a) 60 bilangan, (b) 24 bilangan genap.

### Contoh 2: Huruf yang berulang dan syarat berdampingan

**Soal.** Huruf-huruf pada kata "BANYUWANGI" disusun ulang. (a) Berapa banyak susunan berbeda? (b) Berapa susunan dengan kedua huruf A berdampingan? (c) Berapa susunan dengan kedua huruf A tidak berdampingan?

1. **Langkah 1: Inventaris huruf.** B, A, N, Y, U, W, A, N, G, I: ada 10 huruf, dengan A muncul 2 kali dan N muncul 2 kali.
2. **Langkah 2: Hitung semua susunan.** $\dfrac{10!}{2!\,2!} = \dfrac{3\,628\,800}{4} = 907\,200$.
3. **Langkah 3: Buat blok untuk syarat berdampingan.** Ikat "AA" menjadi satu blok. Sekarang ada 9 unit: [AA], B, N, Y, U, W, N, G, I, dengan N tetap kembar. Susunan di dalam blok AA hanya 1 karena kedua A sama. Banyaknya $\dfrac{9!}{2!} = \dfrac{362\,880}{2} = 181\,440$.
4. **Langkah 4: Pakai komplemen.** Tidak berdampingan $= 907\,200 - 181\,440 = 725\,760$.
5. **Cek jawaban.** Cara celah: susun 8 huruf selain A dulu, $\frac{8!}{2!} = 20\,160$ cara. Ada 9 celah (termasuk kedua ujung). Pilih 2 celah untuk A: $\binom{9}{2} = 36$. Hasilnya $20\,160 \times 36 = 725\,760$. Sama.

**Jawaban:** (a) 907.200, (b) 181.440, (c) 725.760.

### Contoh 3: Memilih panitia dengan syarat "paling sedikit"

**Soal.** Panitia pentas seni beranggotakan 5 orang dipilih dari 7 siswa putra dan 5 siswi putri. Berapa banyak cara memilih panitia jika paling sedikit 2 anggotanya putri?

1. **Langkah 1: Pilih alat.** Panitia tanpa jabatan, jadi urutan tidak penting: kombinasi (bangku panjang).
2. **Langkah 2: Pecah menjadi kasus.** Putri sebanyak 2, 3, 4, atau 5. Setiap kasus terpisah, jadi hasilnya dijumlahkan.
3. **Langkah 3: Hitung tiap kasus dengan aturan perkalian.**
   - 2 putri, 3 putra: $\binom{5}{2}\binom{7}{3} = 10 \times 35 = 350$
   - 3 putri, 2 putra: $\binom{5}{3}\binom{7}{2} = 10 \times 21 = 210$
   - 4 putri, 1 putra: $\binom{5}{4}\binom{7}{1} = 5 \times 7 = 35$
   - 5 putri: $\binom{5}{5} = 1$
4. **Langkah 4: Jumlahkan.** $350 + 210 + 35 + 1 = 596$.
5. **Cek jawaban.** Pakai komplemen. Semua panitia: $\binom{12}{5} = 792$. Tanpa putri: $\binom{7}{5} = 21$. Tepat 1 putri: $\binom{5}{1}\binom{7}{4} = 175$. Maka $792 - 21 - 175 = 596$. Sama.

**Jawaban:** 596 cara.

### Contoh 4: Meja bundar dengan syarat

**Soal.** Empat siswa putra dan empat siswi putri, termasuk Budi dan Siti, duduk mengelilingi meja bundar. Berapa banyak susunan jika (a) bebas, (b) putra dan putri duduk selang-seling, (c) Budi dan Siti harus bersebelahan?

1. **Langkah 1: Tetapkan patokan.** Ada 8 orang berbeda. Dudukkan satu orang sebagai patokan, lalu 7 orang lain mengisi kursi relatif terhadapnya.
2. **Langkah 2: Bagian (a).** $(8-1)! = 7! = 5040$.
3. **Langkah 3: Bagian (b), penuhi syarat dulu.** Dudukkan 4 putra melingkar dengan kursi kosong di antara mereka: $(4-1)! = 3! = 6$ cara. Sekarang meja sudah punya patokan, jadi 4 kursi kosong itu menjadi kursi bernomor. Putri mengisinya dalam $4! = 24$ cara. Total $6 \times 24 = 144$.
4. **Langkah 4: Bagian (c), buat blok.** Ikat Budi dan Siti menjadi satu blok. Ada 7 unit melingkar: $(7-1)! = 720$. Di dalam blok, urutan Budi–Siti atau Siti–Budi: $2! = 2$. Total $720 \times 2 = 1440$.
5. **Cek jawaban.** Untuk (c), dudukkan Budi sebagai patokan. Siti harus di kiri atau kanannya: 2 pilihan. Enam orang lain mengisi 6 kursi sisa: $6! = 720$. Total $2 \times 720 = 1440$. Sama.

**Jawaban:** (a) 5.040, (b) 144, (c) 1.440.

## Kesalahan yang sering terjadi

- **Memakai permutasi untuk kelompok tanpa jabatan.** Memilih 3 anggota tim dari 8 orang dihitung $^{8}P_{3} = 336$. Padahal tim {Ani, Budi, Citra} sama dengan {Citra, Ani, Budi}. Yang benar $\binom{8}{3} = 56$. Tanyakan: apakah menukar urutan menghasilkan hal baru?
- **Mengisi kursi bebas sebelum kursi bersyarat.** Pada Contoh 1(b), mengisi ratusan dulu membuat pilihan untuk satuan bergantung pada angka yang sudah terpakai. Selalu isi kursi bersyarat terlebih dahulu.
- **Lupa susunan di dalam blok.** Pada Contoh 4(c), menjawab 720. Budi–Siti dan Siti–Budi adalah dua susunan berbeda, jadi kalikan $2!$.
- **Menghitung ganda pada "paling sedikit".** Memilih 2 putri dulu ($\binom{5}{2}$), lalu 3 orang bebas dari 10 sisanya ($\binom{10}{3}$), sehingga $10 \times 120 = 1200$. Panitia dengan 3 putri terhitung lebih dari sekali. Pakai pemecahan kasus atau komplemen.
- **Memakai $n!$ untuk meja bundar.** Putaran susunan yang sama dihitung berulang. Untuk $n$ orang di meja bundar, gunakan $(n-1)!$.

## Ringkasan

- Aturan perkalian: tahap berurutan dikalikan; kasus terpisah dijumlahkan.
- Permutasi (urutan penting): $^{n}P_{r} = \frac{n!}{(n-r)!}$. Dengan unsur sama: $\frac{n!}{p!\,q!\cdots}$.
- Kombinasi (urutan tidak penting): $\binom{n}{r} = \frac{n!}{r!(n-r)!}$, yaitu permutasi dibagi $r!$.
- Syarat dipenuhi dulu: posisi khusus diisi lebih dulu, "berdampingan" pakai blok, "tidak berdampingan" pakai komplemen atau celah.
- Susunan melingkar $n$ benda berbeda: $(n-1)!$, dengan satu orang sebagai patokan.

## Cek pemahaman

1. Ada berapa cara menyusun 6 buku berbeda dalam satu deret di rak?
2. Dari 8 anggota kelompok belajar akan dipilih ketua, sekretaris, dan bendahara. Ada berapa cara?
3. Berapa banyak susunan berbeda dari huruf-huruf kata "PAPUA"?
4. Seorang siswa harus menjawab 3 dari 10 soal, dan soal nomor 1 wajib dikerjakan. Ada berapa cara memilih soal?
5. Enam orang, termasuk Made dan Putu, duduk mengelilingi meja bundar. Ada berapa susunan jika Made dan Putu tidak boleh bersebelahan?

### Kunci jawaban

1. 720. Susunan berderet 6 benda berbeda: $6! = 720$.
2. 336. Jabatan berbeda berarti urutan penting: $^{8}P_{3} = 8 \times 7 \times 6 = 336$.
3. 30. Ada 5 huruf dengan P dua kali dan A dua kali: $\frac{5!}{2!\,2!} = \frac{120}{4} = 30$.
4. 36. Soal 1 sudah pasti, tinggal memilih 2 dari 9 soal lain: $\binom{9}{2} = 36$.
5. 72. Semua susunan $5! = 120$; Made dan Putu bersebelahan $4! \times 2 = 48$; jadi $120 - 48 = 72$.
