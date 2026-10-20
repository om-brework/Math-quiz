---
id: sma2-03-pembuktian-geometri
judul: Pembuktian Geometri Bidang
jenjang: sma2
moe: "Additional Mathematics · G3 Proofs in plane geometry"
prasyarat: [smp1-10-sudut-segitiga-poligon, smp3-08-sifat-lingkaran, smp3-09-kongruen-sebangun-lanjut]
durasi_menit: 75
---

## Kenapa belajar ini?

Gambar bisa menipu. Dua garis yang terlihat sejajar belum tentu sejajar. Pembuktian melatih kita menarik kesimpulan yang pasti benar dari fakta yang sudah diketahui. Cara berpikir ini dipakai di matematika lanjut, pemrograman, hukum, dan di mana pun argumen harus kuat.

## Analogi

Bayangkan kamu seorang **detektif** yang harus meyakinkan hakim di **persidangan**.

- Setiap pernyataan adalah **tuduhan**. Tuduhan hanya diterima jika disertai **barang bukti**, yaitu alasan berupa fakta yang diketahui, definisi, atau teorema.
- "Kelihatannya di gambar begitu" **bukan** barang bukti.
- Tuduhan yang sudah terbukti boleh dipakai sebagai barang bukti untuk tuduhan berikutnya. Begitulah rantai bukti dibangun.
- Detektif tidak boleh memakai kesimpulan akhir sebagai bukti. Itu namanya berputar-putar.

## Konsep

### Format pembuktian

Tulis setiap baris sebagai **pernyataan (alasan)**. Mulai dari yang diketahui, akhiri dengan yang harus dibuktikan. Alasan ditulis singkat dengan nama baku.

### Kotak barang bukti: garis sejajar dan segitiga

- **Sudut bertolak belakang** sama besar.
- Jika dua garis sejajar dipotong garis lain: **sudut sehadap** sama, **sudut dalam berseberangan** sama, **sudut dalam sepihak** berjumlah $180°$. Kebalikannya juga berlaku: jika sudut sehadap sama, kedua garis sejajar.
- Jumlah sudut segitiga $180°$. **Sudut luar** segitiga sama dengan jumlah dua sudut dalam yang tidak bersebelahan.
- Segitiga sama kaki: sudut alasnya sama besar, dan sebaliknya.

### Kotak barang bukti: segiempat

- **Jajargenjang:** sisi berhadapan sejajar dan sama panjang, sudut berhadapan sama, diagonal saling membagi dua.
- **Persegi panjang:** jajargenjang dengan sudut siku-siku; diagonalnya sama panjang.
- **Belah ketupat:** jajargenjang dengan semua sisi sama; diagonalnya saling tegak lurus.

### Kotak barang bukti: lingkaran

- Sudut pusat sama dengan dua kali sudut keliling yang menghadap busur sama.
- Sudut keliling yang menghadap busur sama, besarnya sama.
- Sudut keliling yang menghadap diameter (sudut dalam setengah lingkaran) $= 90°$.
- Sudut berhadapan pada segiempat tali busur berjumlah $180°$.
- Garis singgung tegak lurus jari-jari di titik singgung.
- Dua garis singgung dari satu titik di luar lingkaran sama panjang.

### Segitiga kongruen dan sebangun

**Kongruen** (sama bentuk dan ukuran), syaratnya salah satu:

- **SSS**: tiga sisi bersesuaian sama.
- **SAS** (sisi-sudut-sisi): sudutnya harus diapit kedua sisi.
- **ASA** atau **AAS**: dua sudut dan satu sisi bersesuaian sama.
- **RHS**: segitiga siku-siku dengan sisi miring dan satu sisi lain sama.

**Sebangun** (bentuk sama, ukuran boleh beda), syaratnya salah satu:

- **AA**: dua pasang sudut sama.
- **SAS**: dua pasang sisi sebanding dan sudut apitnya sama.
- **SSS**: tiga pasang sisi sebanding.

Setelah kongruen atau sebangun terbukti, kita boleh menyimpulkan sisi dan sudut bersesuaian sama (atau sebanding).

### Teorema titik tengah

Jika $M$ dan $N$ adalah titik tengah sisi $AB$ dan $AC$ pada segitiga $ABC$, maka

$$
MN \parallel BC \quad \text{dan} \quad MN = \tfrac{1}{2}BC
$$

Buktinya ada di contoh 2.

### Teorema tali busur dan garis singgung

Sudut antara garis singgung dan tali busur di titik singgung sama dengan sudut keliling di **tembereng seberang** yang menghadap tali busur itu. Buktinya ada di contoh 3.

## Contoh langkah demi langkah

### Contoh 1: Sisi berhadapan jajargenjang

**Soal.** $ABCD$ jajargenjang dengan $AB \parallel DC$ dan $AD \parallel BC$. Buktikan bahwa $AB = CD$ dan $BC = DA$.

1. **Langkah 1: Rencanakan.** Sisi-sisi itu ada di dua segitiga yang dibentuk diagonal $AC$. Kita buktikan $\triangle ABC \cong \triangle CDA$.
2. **Langkah 2: Kumpulkan bukti sudut pertama.** $\angle BAC = \angle DCA$ (sudut dalam berseberangan, $AB \parallel DC$).
3. **Langkah 3: Kumpulkan bukti sudut kedua.** $\angle BCA = \angle DAC$ (sudut dalam berseberangan, $AD \parallel BC$).
4. **Langkah 4: Kumpulkan bukti sisi.** $AC = CA$ (sisi bersama), dan sisi ini diapit kedua sudut tadi.
5. **Langkah 5: Simpulkan.** $\triangle ABC \cong \triangle CDA$ (ASA). Maka $AB = CD$ dan $BC = DA$ (sisi bersesuaian segitiga kongruen).
6. **Cek bukti.** Setiap baris punya alasan. Kita hanya memakai definisi jajargenjang (dua pasang sisi sejajar), bukan sifat yang sedang dibuktikan.

### Contoh 2: Membuktikan teorema titik tengah

**Soal.** Pada $\triangle ABC$, $M$ titik tengah $AB$ dan $N$ titik tengah $AC$. Buktikan $MN \parallel BC$ dan $MN = \frac{1}{2}BC$.

1. **Langkah 1: Rencanakan.** Bandingkan segitiga kecil $AMN$ dengan segitiga besar $ABC$.
2. **Langkah 2: Bukti perbandingan sisi.** $\frac{AM}{AB} = \frac{1}{2}$ dan $\frac{AN}{AC} = \frac{1}{2}$ (definisi titik tengah).
3. **Langkah 3: Bukti sudut apit.** $\angle MAN = \angle BAC$ (sudut bersama).
4. **Langkah 4: Simpulkan sebangun.** $\triangle AMN \sim \triangle ABC$ (SAS sebangun).
5. **Langkah 5: Simpulkan sejajar.** $\angle AMN = \angle ABC$ (sudut bersesuaian segitiga sebangun). Kedua sudut ini sehadap terhadap garis $AB$, jadi $MN \parallel BC$ (sudut sehadap sama).
6. **Langkah 6: Simpulkan panjang.** $\frac{MN}{BC} = \frac{1}{2}$ (perbandingan sisi segitiga sebangun), jadi $MN = \frac{1}{2}BC$.
7. **Cek bukti.** Uji dengan angka: jika $BC = 14$ cm, maka $MN$ harus 7 cm. Setiap baris punya alasan, dan kesimpulan tidak dipakai sebagai bukti.

### Contoh 3: Membuktikan teorema tali busur dan garis singgung

**Soal.** Garis $TA$ menyinggung lingkaran berpusat $O$ di $A$. $AB$ tali busur, dan $C$ titik pada busur besar $AB$. Buktikan $\angle TAB = \angle ACB$ (untuk $\angle TAB$ lancip).

1. **Langkah 1: Tambahkan garis bantu.** Tarik diameter $AD$, dengan $D$ pada busur yang sama dengan $C$. Hubungkan $B$ dan $D$. Misalkan $\angle TAB = x$.
2. **Langkah 2: Bukti dari garis singgung.** $\angle TAD = 90°$ (garis singgung tegak lurus jari-jari). Jadi $\angle BAD = 90° - x$.
3. **Langkah 3: Bukti dari diameter.** $\angle ABD = 90°$ (sudut dalam setengah lingkaran).
4. **Langkah 4: Jumlah sudut segitiga.** Pada $\triangle ABD$: $\angle ADB = 180° - 90° - (90° - x) = x$.
5. **Langkah 5: Sudut keliling.** $\angle ACB = \angle ADB$ (sudut keliling menghadap busur $AB$ yang sama). Jadi $\angle ACB = x = \angle TAB$. Terbukti.
6. **Cek bukti.** Uji kasus khusus: jika $AB$ diameter, $\angle TAB = 90°$ dan $\angle ACB = 90°$ (setengah lingkaran). Sesuai.

### Contoh 4: Dua garis singgung

**Soal.** Dari titik $P$ di luar lingkaran berpusat $O$, ditarik garis singgung $PA$ dan $PB$. Buktikan $PA = PB$ dan $OP$ membagi dua $\angle APB$.

1. **Langkah 1: Rencanakan.** Buktikan $\triangle OAP \cong \triangle OBP$.
2. **Langkah 2: Bukti sudut siku-siku.** $\angle OAP = \angle OBP = 90°$ (garis singgung tegak lurus jari-jari).
3. **Langkah 3: Bukti sisi.** $OA = OB$ (jari-jari) dan $OP = OP$ (sisi miring bersama).
4. **Langkah 4: Simpulkan.** $\triangle OAP \cong \triangle OBP$ (RHS). Maka $PA = PB$ dan $\angle APO = \angle BPO$ (bagian bersesuaian).
5. **Cek bukti.** RHS sah karena kedua segitiga siku-siku dan sisi miringnya ($OP$) sama.

### Contoh 5: Soal cerita, lebar Sungai Ayung

**Soal.** Made berdiri di titik $A$ di tepi Sungai Ayung, tepat di seberang pohon $P$, sehingga $AP$ tegak lurus tepi sungai. Ia berjalan menyusuri tepi 12 m ke titik $B$ dan menancapkan tongkat, lalu berjalan 4 m lagi ke titik $C$. Dari $C$ ia berjalan tegak lurus menjauhi sungai sampai titik $D$, tempat $D$, $B$, dan $P$ segaris. Ternyata $CD = 6$ m. Buktikan $\triangle ABP \sim \triangle CBD$, lalu hitung lebar sungai $AP$.

1. **Langkah 1: Bukti sudut siku-siku.** $\angle PAB = \angle DCB = 90°$ (diketahui tegak lurus tepi sungai).
2. **Langkah 2: Bukti sudut kedua.** $\angle ABP = \angle CBD$ (sudut bertolak belakang, karena $P$, $B$, $D$ segaris dan $A$, $B$, $C$ segaris).
3. **Langkah 3: Simpulkan sebangun.** $\triangle ABP \sim \triangle CBD$ (AA).
4. **Langkah 4: Susun perbandingan.** $\frac{AP}{CD} = \frac{AB}{CB}$, jadi $\frac{AP}{6} = \frac{12}{4} = 3$.
5. **Langkah 5: Hitung.** $AP = 18$ m.
6. **Cek jawaban.** Perbandingan sisi siku-siku segitiga besar dan kecil: $12 : 4 = 3$ dan $18 : 6 = 3$. Sama, sesuai sebangun.

**Jawaban:** lebar sungai 18 m.

## Kesalahan yang sering terjadi

- **Memakai gambar sebagai bukti.** "$AB = CD$ karena terlihat sama panjang." Ini bukan alasan. Cari fakta yang menjaminnya.
- **Memakai SSA untuk kongruen.** Dua sisi dan sudut yang **tidak diapit** tidak menjamin kongruen (kecuali RHS pada segitiga siku-siku).
- **Berputar-putar.** Memakai "$MN \parallel BC$" untuk membuktikan $MN \parallel BC$. Pastikan setiap alasan sudah diketahui sebelumnya.
- **Urutan huruf tidak bersesuaian.** Menulis $\triangle ABC \cong \triangle DCA$ padahal $A$ berpasangan dengan $C$. Urutan huruf harus mengikuti titik yang bersesuaian.
- **Salah tembereng pada teorema tali busur-garis singgung.** Sudut singgung sama dengan sudut keliling di tembereng **seberang**, bukan di tembereng yang sama.

## Ringkasan

- Setiap pernyataan butuh alasan: definisi, fakta yang diketahui, atau teorema.
- Garis sejajar: sehadap sama, dalam berseberangan sama, dalam sepihak $180°$.
- Kongruen: SSS, SAS, ASA/AAS, RHS. Sebangun: AA, SAS, SSS (sebanding).
- Teorema titik tengah: $MN \parallel BC$ dan $MN = \frac{1}{2}BC$.
- Teorema tali busur-garis singgung: sudut singgung = sudut keliling di tembereng seberang.

## Cek pemahaman

1. Buktikan bahwa diagonal jajargenjang $ABCD$ saling membagi dua (misalkan diagonal berpotongan di $E$).
2. Pada $\triangle ABC$, $AB = AC$ dan $D$ titik tengah $BC$. Buktikan $AD \perp BC$.
3. $ABCD$ segiempat tali busur pada lingkaran berpusat $O$. Buktikan $\angle BAD + \angle BCD = 180°$.
4. $M$ dan $N$ titik tengah $AB$ dan $AC$ pada $\triangle ABC$. Jika $BC = 14$ cm dan $\angle ABC = 65°$, tentukan $MN$ dan $\angle AMN$.
5. $TA$ menyinggung lingkaran di $A$, $AB$ tali busur, dan $C$ pada busur besar. Jika $\angle TAB = 52°$ dan $\angle CAB = 70°$, tentukan $\angle ACB$ dan $\angle ABC$.

### Kunci jawaban

1. $\triangle ABE \cong \triangle CDE$ (ASA): $\angle BAE = \angle DCE$ dan $\angle ABE = \angle CDE$ (dalam berseberangan, $AB \parallel DC$), $AB = CD$ (sisi berhadapan jajargenjang). Maka $AE = CE$ dan $BE = DE$.
2. $\triangle ABD \cong \triangle ACD$ (SSS: $AB = AC$, $BD = CD$, $AD$ bersama), jadi $\angle ADB = \angle ADC$; keduanya berjumlah $180°$ (sudut pada garis lurus), sehingga masing-masing $90°$.
3. Sudut pusat yang menghadap busur $BCD$ dan busur $BAD$ berjumlah $360°$. $\angle BAD$ dan $\angle BCD$ masing-masing setengah dari salah satunya, jadi jumlahnya $180°$.
4. $MN = 7$ cm (teorema titik tengah) dan $\angle AMN = 65°$ (sehadap, karena $MN \parallel BC$).
5. $\angle ACB = 52°$ (teorema tali busur-garis singgung); $\angle ABC = 180° - 52° - 70° = 58°$.
