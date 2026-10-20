---
id: smp3-09-kongruen-sebangun-lanjut
judul: Kesebangunan Lanjut
jenjang: smp3
moe: "Secondary 3 · Geometry and Measurement · G2 Congruence and similarity"
prasyarat: [smp2-08-kongruen-sebangun, smp1-10-sudut-segitiga-poligon, smp2-01-skala-proporsi]
durasi_menit: 55
---

## Kenapa belajar ini?

Arsitek menggambar denah rumah dengan skala, pabrik membuat kaleng susu dalam beberapa ukuran, dan perencana kota mencari lokasi yang adil bagi dua kampung. Semua itu memakai kesebangunan, kekongruenan, dan garis-garis istimewa yang kamu pelajari di sini.

## Analogi

Bayangkan **mesin fotokopi dengan tombol zoom** di toko fotokopi dekat sekolah.

- Zoom **100%** menghasilkan salinan yang **kongruen**: bentuk dan ukurannya sama persis.
- Zoom **200%** menghasilkan salinan yang **sebangun**: bentuknya sama, semua panjang menjadi 2 kali, dan semua sudut tetap.
- Sekarang bayangkan gambar asli terdiri dari **kotak-kotak kecil** 1 cm × 1 cm. Dengan zoom 200%, setiap kotak menjadi 2 cm × 2 cm, yaitu **4 kotak** asli. Jadi luas menjadi $2^2 = 4$ kali, bukan 2 kali.
- Kalau mesinnya **printer 3D** yang memperbesar benda, setiap kubus kecil 1 cm menjadi $2 \times 2 \times 2 = 8$ kubus. Volume menjadi $2^3 = 8$ kali.

Angka zoom ini disebut **faktor skala** $k$.

## Konsep

### Gambar berskala

Skala $1 : n$ berarti 1 cm pada gambar mewakili $n$ cm sebenarnya. Gambar berskala adalah salinan sebangun yang diperkecil, dengan $k = \frac{1}{n}$.

- Panjang sebenarnya = panjang gambar × $n$.
- Luas sebenarnya = luas gambar × $n^2$.

### Uji kongruen segitiga

Dua segitiga kongruen jika memenuhi salah satu:

- **SSS (sisi-sisi-sisi):** ketiga sisi sama panjang.
- **SAS (sisi-sudut-sisi):** dua sisi dan **sudut yang diapit** sama.
- **ASA atau AAS:** dua sudut dan satu sisi yang bersesuaian sama.
- **RHS:** sama-sama siku-siku, sisi miring sama, dan satu sisi lain sama.

Kenapa cukup? Data itu sudah "mengunci" bentuk segitiga. Dengan jangka dan penggaris, hanya ada satu segitiga yang bisa digambar dari data tersebut.

Perhatikan bahwa **SSA (sudut tidak diapit) bukan uji kongruen**, karena bisa menghasilkan dua segitiga berbeda.

### Uji sebangun segitiga

Dua segitiga sebangun jika:

- **AA:** dua pasang sudut sama. Sudut ketiga otomatis sama karena jumlahnya $180^\circ$.
- **SSS sebanding:** ketiga pasang sisi punya perbandingan sama.
- **SAS sebanding:** dua pasang sisi sebanding dan sudut apitnya sama.

Situasi yang sering muncul: garis yang **sejajar** salah satu sisi segitiga memotong segitiga kecil yang sebangun, karena sudut-sudut sehadapnya sama.

### Garis sumbu dan garis bagi sudut

**Garis sumbu** ruas $AB$ adalah garis yang tegak lurus $AB$ dan melalui titik tengahnya. Setiap titik $P$ di garis sumbu **berjarak sama** dari $A$ dan $B$. Alasannya: jika $M$ titik tengah, segitiga $PMA$ dan $PMB$ kongruen (SAS: $AM = BM$, sudut siku-siku, $PM$ bersama), jadi $PA = PB$.

Melukis garis sumbu $AB$ dengan jangka:

1. Buka jangka lebih dari setengah $AB$.
2. Dari $A$, buat busur di atas dan di bawah $AB$.
3. Dengan bukaan sama, dari $B$ buat busur yang memotong kedua busur tadi.
4. Hubungkan kedua titik potong.

**Garis bagi sudut** membagi sudut menjadi dua sama besar. Setiap titik di garis bagi **berjarak sama dari kedua kaki sudut**. Alasannya: dua segitiga siku-siku yang terbentuk kongruen (AAS).

Melukis garis bagi $\angle ABC$:

1. Dari $B$, buat busur yang memotong $BA$ di $P$ dan $BC$ di $Q$.
2. Dari $P$ dan dari $Q$, buat dua busur sama besar yang berpotongan di $R$.
3. Hubungkan $B$ dan $R$.

### Perbandingan luas dan volume

Jika dua bangun sebangun dengan perbandingan panjang $l_1 : l_2$:

$$\frac{L_1}{L_2} = \left(\frac{l_1}{l_2}\right)^2, \qquad \frac{V_1}{V_2} = \left(\frac{l_1}{l_2}\right)^3$$

Ini berlaku untuk **semua** panjang yang bersesuaian (tinggi, jari-jari, keliling) dan **semua** luas (luas alas, luas permukaan), sesuai analogi kotak dan kubus kecil.

## Contoh langkah demi langkah

### Contoh 1: Gambar berskala

**Soal.** Denah rumah berskala $1 : 50$. Ruang tamu pada denah berukuran 9 cm × 8 cm. Hitung ukuran dan luas ruang tamu sebenarnya.

1. **Langkah 1: Ubah panjang.** $9 \times 50 = 450$ cm $= 4{,}5$ m dan $8 \times 50 = 400$ cm $= 4$ m.
2. **Langkah 2: Hitung luas sebenarnya.** $4{,}5 \times 4 = 18$ m$^2$.
3. **Cek jawaban.** Pakai perbandingan luas. Luas denah $9 \times 8 = 72$ cm$^2$. Luas sebenarnya $72 \times 50^2 = 72 \times 2.500 = 180.000$ cm$^2$. Karena $1$ m$^2 = 10.000$ cm$^2$, hasilnya $18$ m$^2$. Sama.

**Jawaban:** 4,5 m × 4 m, luas 18 m$^2$.

### Contoh 2: Memilih uji yang tepat

**Soal.** (a) Segitiga $X$ bersisi 6, 8, 10 cm dan segitiga $Y$ bersisi 9, 12, 15 cm. (b) Segitiga $ABC$ dengan $AB = 5$ cm, $\angle B = 40^\circ$, $BC = 7$ cm, dan segitiga $PQR$ dengan $PQ = 5$ cm, $\angle Q = 40^\circ$, $QR = 7$ cm. Tentukan hubungan tiap pasangan.

1. **Langkah 1: Urutkan sisi (a) dari pendek ke panjang dan bandingkan.** $\frac{9}{6} = 1{,}5$, $\frac{12}{8} = 1{,}5$, $\frac{15}{10} = 1{,}5$.
2. **Langkah 2: Simpulkan (a).** Perbandingan sama tetapi bukan 1, jadi sebangun (SSS sebanding) dengan $k = 1{,}5$. Seperti fotokopi zoom 150%.
3. **Langkah 3: Periksa letak sudut (b).** Sudut $40^\circ$ berada di antara sisi 5 dan 7 pada kedua segitiga, jadi sudutnya diapit.
4. **Langkah 4: Simpulkan (b).** Kongruen menurut SAS.
5. **Cek jawaban.** Pada (a), $6^2 + 8^2 = 100 = 10^2$ dan $9^2 + 12^2 = 225 = 15^2$: keduanya siku-siku, konsisten dengan sebangun.

**Jawaban:** (a) sebangun, $k = 1{,}5$; (b) kongruen (SAS).

### Contoh 3: Garis sejajar dan perbandingan luas

**Soal.** Pada segitiga $ABC$, titik $D$ di $AB$ dan $E$ di $AC$ dengan $DE \parallel BC$. Diketahui $AD = 4$ cm, $DB = 6$ cm, $DE = 5$ cm, dan luas segitiga $ADE = 8$ cm$^2$. Hitung $BC$, luas $ABC$, dan luas trapesium $DBCE$.

1. **Langkah 1: Buktikan sebangun.** $\angle A$ milik bersama, dan $\angle ADE = \angle ABC$ (sehadap, karena $DE \parallel BC$). Jadi segitiga $ADE$ dan $ABC$ sebangun (AA).
2. **Langkah 2: Cari faktor skala.** $AB = 4 + 6 = 10$ cm, jadi $k = \frac{AB}{AD} = \frac{10}{4} = 2{,}5$.
3. **Langkah 3: Hitung $BC$.** $BC = 2{,}5 \times 5 = 12{,}5$ cm.
4. **Langkah 4: Hitung luas $ABC$.** Luas dikali $k^2 = 6{,}25$: $8 \times 6{,}25 = 50$ cm$^2$.
5. **Langkah 5: Luas trapesium.** $50 - 8 = 42$ cm$^2$.
6. **Cek jawaban.** $\frac{8}{50} = \frac{4}{25} = \left(\frac{4}{10}\right)^2$. Cocok dengan kuadrat perbandingan panjang.

**Jawaban:** $BC = 12{,}5$ cm, luas $ABC = 50$ cm$^2$, luas $DBCE = 42$ cm$^2$.

### Contoh 4: Soal cerita volume

**Soal.** Dua kaleng susu berbentuk sebangun. Tinggi kaleng kecil 10 cm dan kaleng besar 15 cm. Kaleng kecil berisi 400 ml dan labelnya seluas 150 cm$^2$. Hitung isi kaleng besar dan luas labelnya.

1. **Langkah 1: Faktor skala panjang.** $k = \frac{15}{10} = 1{,}5$.
2. **Langkah 2: Volume (kubus kecil).** $k^3 = 1{,}5^3 = 3{,}375$. Isi besar $= 400 \times 3{,}375 = 1.350$ ml.
3. **Langkah 3: Luas (kotak kecil).** $k^2 = 1{,}5^2 = 2{,}25$. Label besar $= 150 \times 2{,}25 = 337{,}5$ cm$^2$.
4. **Cek jawaban.** Balik: $\frac{1.350}{400} = 3{,}375$ dan $\sqrt[3]{3{,}375} = 1{,}5$. Sama dengan perbandingan tinggi.

**Jawaban:** 1.350 ml dan 337,5 cm$^2$.

### Contoh 5: Lokasi warung dengan garis sumbu

**Soal.** Pada peta berskala $1 : 20.000$, rumah Budi ($B$) dan rumah Siti ($S$) berjarak 6 cm. Sebuah warung akan dibangun dengan jarak sama ke kedua rumah, sejauh 4 cm (pada peta) dari titik tengah $BS$. Berapa jarak sebenarnya dari warung ke tiap rumah?

1. **Langkah 1: Pilih garis istimewa.** "Berjarak sama dari dua titik" berarti warung ada di **garis sumbu** $BS$.
2. **Langkah 2: Bentuk segitiga siku-siku.** Titik tengah $M$ membagi $BS$ menjadi 3 cm dan 3 cm. Garis sumbu tegak lurus $BS$, jadi jarak warung ke $B$ adalah $\sqrt{3^2 + 4^2} = 5$ cm pada peta.
3. **Langkah 3: Ubah dengan skala.** $5 \times 20.000 = 100.000$ cm $= 1$ km.
4. **Cek jawaban.** Jarak ke $S$ juga $\sqrt{3^2 + 4^2} = 5$ cm, sesuai sifat garis sumbu.

**Jawaban:** 1 km ke masing-masing rumah.

## Kesalahan yang sering terjadi

- **Mengalikan luas dengan $k$, bukan $k^2$.** Fotokopi zoom 200% membuat luas 4 kali, bukan 2 kali. Volume memakai $k^3$.
- **Mencocokkan sisi yang salah.** Urutkan sisi dari terpendek ke terpanjang, atau cocokkan sisi yang berhadapan dengan sudut yang sama.
- **Memakai SSA sebagai uji kongruen.** Sudut harus diapit kedua sisi (SAS), kecuali pada segitiga siku-siku (RHS).
- **Memakai $DB$ bukan $AB$ pada garis sejajar.** Pada Contoh 3, perbandingannya $\frac{AD}{AB} = \frac{4}{10}$, bukan $\frac{4}{6}$.
- **Lupa satuan saat memakai skala luas.** Ubah cm$^2$ ke m$^2$ dengan membagi 10.000, bukan 100.

## Ringkasan

- Gambar berskala $1 : n$: panjang × $n$, luas × $n^2$.
- Uji kongruen: SSS, SAS, ASA/AAS, RHS. Uji sebangun: AA, SSS sebanding, SAS sebanding.
- Titik di garis sumbu berjarak sama dari kedua ujung ruas; titik di garis bagi sudut berjarak sama dari kedua kaki sudut.
- Bangun sebangun dengan faktor skala $k$: luas × $k^2$, volume × $k^3$.
- Garis yang sejajar sisi segitiga membentuk segitiga kecil yang sebangun.

## Cek pemahaman

1. Pada denah berskala $1 : 200$, panjang sebuah kamar 3,5 cm. Berapa panjang sebenarnya dalam meter?
2. Segitiga $P$ bersudut $50^\circ$ dan $60^\circ$. Segitiga $Q$ bersudut $60^\circ$ dan $70^\circ$. Apakah keduanya sebangun? Jelaskan.
3. Dua bangun sebangun dengan perbandingan panjang $2 : 5$. Luas bangun kecil 12 cm$^2$. Berapa luas bangun besar?
4. Dua botol sebangun memiliki perbandingan volume $8 : 27$. Tinggi botol kecil 6 cm. Berapa tinggi botol besar?
5. Dua segitiga siku-siku sama-sama memiliki sisi miring 13 cm dan satu sisi siku-siku 5 cm. Apakah keduanya kongruen? Berapa panjang sisi ketiganya?

### Kunci jawaban

1. $3{,}5 \times 200 = 700$ cm $= 7$ m.
2. Ya. Sudut ketiga $P$ adalah $70^\circ$ dan sudut ketiga $Q$ adalah $50^\circ$, jadi ketiga sudut sama (AA).
3. $12 \times \left(\frac{5}{2}\right)^2 = 12 \times 6{,}25 = 75$ cm$^2$.
4. Perbandingan panjang $\sqrt[3]{8} : \sqrt[3]{27} = 2 : 3$, jadi tinggi $= 6 \times \frac{3}{2} = 9$ cm.
5. Ya, kongruen menurut RHS; sisi ketiga $\sqrt{13^2 - 5^2} = \sqrt{144} = 12$ cm.
