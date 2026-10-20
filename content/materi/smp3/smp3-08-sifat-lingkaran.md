---
id: smp3-08-sifat-lingkaran
judul: Sifat-sifat Lingkaran
jenjang: smp3
moe: "Secondary 3 · Geometry and Measurement · G3 Properties of circles"
prasyarat: [smp1-10-sudut-segitiga-poligon, smp2-08-kongruen-sebangun, smp2-09-pythagoras-trigonometri]
durasi_menit: 60
---

## Kenapa belajar ini?

Roda, meja bundar, kubah masjid, dan jam dinding semuanya berbentuk lingkaran. Tukang kayu memakai sifat lingkaran untuk mencari titik pusat meja, dan insinyur memakainya untuk merancang roda gigi. Di bab ini kamu belajar sifat-sifat itu **beserta alasannya**.

## Analogi

Bayangkan acara **layar tancap** di sebuah lapangan desa yang berbentuk lingkaran sempurna.

- **Proyektor** diletakkan di **pusat** lapangan $O$.
- **Layar** dibentangkan lurus di antara dua titik di tepi lapangan. Layar itu adalah **tali busur**.
- **Penonton** duduk di **tepi** lapangan, yaitu di lingkaran.
- **Pagar bambu lurus** yang hanya menyentuh tepi lapangan di satu titik adalah **garis singgung**.

Pertanyaan utama bab ini: seberapa lebar layar terlihat (sudutnya) dari proyektor dan dari kursi penonton yang berbeda-beda?

## Konsep

Ingat istilah: **jari-jari** (pusat ke tepi), **tali busur** (ruas garis antara dua titik di lingkaran), **diameter** (tali busur yang melalui pusat), **busur** (bagian lengkung lingkaran), **tembereng** (daerah antara tali busur dan busur).

### Sifat simetri 1: tali busur

**Garis dari pusat yang tegak lurus tali busur membagi tali busur itu sama panjang.**

Alasan: misalkan tali busur $AB$ dan $M$ kaki garis tegak lurus dari $O$. Segitiga $OMA$ dan $OMB$ sama-sama siku-siku di $M$, sisi miringnya $OA = OB$ (jari-jari), dan $OM$ sisi bersama. Jadi keduanya kongruen (RHS), sehingga $AM = BM$.

Akibatnya:

- Garis sumbu (tegak lurus di tengah) sebuah tali busur **selalu melalui pusat**.
- Tali busur yang sama panjang **berjarak sama** dari pusat.
- Jari-jari, setengah tali busur, dan jarak ke pusat membentuk segitiga siku-siku: $r^2 = \left(\tfrac{AB}{2}\right)^2 + OM^2$.

### Sifat simetri 2: garis singgung dari titik luar

**Garis singgung tegak lurus jari-jari di titik singgungnya.** Bayangkan pagar menyentuh lapangan di $T$. Jarak terpendek dari $O$ ke pagar adalah $OT$, karena semua titik lain di pagar berada di luar lingkaran. Jarak terpendek dari titik ke garis selalu tegak lurus, jadi $OT \perp$ garis singgung.

**Dua garis singgung dari titik luar $P$ sama panjang.** Misalkan menyinggung di $A$ dan $B$. Segitiga $OAP$ dan $OBP$ siku-siku di $A$ dan $B$, $OA = OB$, dan $OP$ sisi bersama. Jadi kongruen (RHS), sehingga:

- $PA = PB$,
- $OP$ membagi dua $\angle APB$ dan $\angle AOB$ sama besar.

### Sifat sudut 1: sudut pusat = 2 × sudut keliling

Sudut yang dibentuk layar $AB$ di proyektor ($\angle AOB$, **sudut pusat**) adalah **dua kali** sudut yang dibentuk di kursi penonton $C$ ($\angle ACB$, **sudut keliling**), asalkan $C$ dan $O$ berada di sisi yang sama dari layar.

**Bukti.** Tarik garis dari $C$ melalui $O$ sampai $D$.

1. $OA = OC$ (jari-jari), jadi segitiga $OAC$ sama kaki: $\angle OAC = \angle OCA = x$.
2. Sudut luar segitiga sama dengan jumlah dua sudut dalam yang tidak bersebelahan: $\angle AOD = x + x = 2x$.
3. Dengan cara sama pada segitiga $OBC$: $\angle OCB = y$ dan $\angle BOD = 2y$.
4. Jadi $\angle AOB = 2x + 2y = 2(x + y) = 2\angle ACB$.

### Sifat sudut 2: sudut di setengah lingkaran

Jika layar adalah **diameter**, sudut pusatnya $180^\circ$. Maka sudut keliling $= \frac{180^\circ}{2} = 90^\circ$. **Sudut di setengah lingkaran selalu siku-siku.**

### Sifat sudut 3: sudut pada tembereng yang sama

Semua penonton yang duduk di busur yang sama melihat layar $AB$ dengan sudut yang **sama besar**. Alasannya: setiap sudut itu sama dengan $\frac{1}{2}\angle AOB$, dan $\angle AOB$ hanya satu.

### Sifat sudut 4: segiempat tali busur

Segiempat yang keempat titik sudutnya di lingkaran disebut **segiempat tali busur**. **Sudut-sudut yang berhadapan berjumlah $180^\circ$.**

Alasan: pada segiempat $ABCD$, sudut $A$ dan sudut $C$ "melihat" tali busur $BD$ dari busur yang berlawanan. Sudut pusat kedua busur itu berjumlah $360^\circ$. Masing-masing sudut keliling adalah setengahnya, jadi $\angle A + \angle C = \frac{360^\circ}{2} = 180^\circ$.

Akibatnya, sudut luar segiempat tali busur sama dengan sudut dalam di hadapannya.

## Contoh langkah demi langkah

### Contoh 1: Jarak tali busur ke pusat

**Soal.** Lingkaran berjari-jari 13 cm memiliki tali busur sepanjang 24 cm. Hitung jarak tali busur ke pusat.

1. **Langkah 1: Pilih sifat.** Garis tegak lurus dari pusat membagi tali busur sama panjang. Setengahnya $24 \div 2 = 12$ cm.
2. **Langkah 2: Bentuk segitiga siku-siku.** Sisi miring = jari-jari 13 cm, satu sisi 12 cm, sisi lain = jarak $d$.
3. **Langkah 3: Pythagoras.** $d = \sqrt{13^2 - 12^2} = \sqrt{169 - 144} = \sqrt{25} = 5$ cm.
4. **Cek jawaban.** $5^2 + 12^2 = 25 + 144 = 169 = 13^2$. Cocok.

**Jawaban:** 5 cm.

### Contoh 2: Garis singgung dari titik luar

**Soal.** Titik $P$ berjarak 17 cm dari pusat lingkaran berjari-jari 8 cm. Dari $P$ ditarik garis singgung $PA$ dan $PB$. Hitung $PA$, $PB$, dan luas layang-layang $OAPB$.

1. **Langkah 1: Pakai sifat tegak lurus.** $OA \perp PA$, jadi segitiga $OAP$ siku-siku di $A$ dengan sisi miring $OP = 17$.
2. **Langkah 2: Hitung $PA$.** $PA = \sqrt{17^2 - 8^2} = \sqrt{289 - 64} = \sqrt{225} = 15$ cm.
3. **Langkah 3: Hitung $PB$.** Dua garis singgung dari titik luar sama panjang: $PB = 15$ cm.
4. **Langkah 4: Luas layang-layang.** $OAPB$ terdiri dari dua segitiga kongruen: $2 \times \frac{1}{2} \times 8 \times 15 = 120$ cm$^2$.
5. **Cek jawaban.** $8^2 + 15^2 = 64 + 225 = 289 = 17^2$. Cocok.

**Jawaban:** $PA = PB = 15$ cm, luas $120$ cm$^2$.

### Contoh 3: Sudut pusat dan sudut keliling

**Soal.** $A$, $B$, $C$, $D$ terletak pada lingkaran berpusat $O$. $C$ dan $D$ berada di busur besar $AB$, dan $\angle ACB = 35^\circ$. Hitung $\angle AOB$, $\angle OAB$, dan $\angle ADB$.

1. **Langkah 1: Sudut pusat.** Proyektor melihat layar dua kali lebih lebar: $\angle AOB = 2 \times 35^\circ = 70^\circ$.
2. **Langkah 2: Segitiga sama kaki.** $OA = OB$, jadi $\angle OAB = \angle OBA = \frac{180^\circ - 70^\circ}{2} = 55^\circ$.
3. **Langkah 3: Tembereng yang sama.** $D$ duduk di busur yang sama dengan $C$, jadi $\angle ADB = \angle ACB = 35^\circ$.
4. **Cek jawaban.** Segitiga $OAB$: $70^\circ + 55^\circ + 55^\circ = 180^\circ$. Cocok.

**Jawaban:** $\angle AOB = 70^\circ$, $\angle OAB = 55^\circ$, $\angle ADB = 35^\circ$.

### Contoh 4: Segiempat tali busur dengan aljabar

**Soal.** $ABCD$ segiempat tali busur dengan $\angle DAB = (2x + 10)^\circ$, $\angle BCD = (3x - 5)^\circ$, dan $\angle ABC = 95^\circ$. Hitung $x$, $\angle DAB$, $\angle BCD$, dan $\angle ADC$.

1. **Langkah 1: Kenali pasangan berhadapan.** $A$ berhadapan dengan $C$, dan $B$ berhadapan dengan $D$.
2. **Langkah 2: Susun persamaan.** $(2x + 10) + (3x - 5) = 180$, jadi $5x + 5 = 180$, sehingga $x = 35$.
3. **Langkah 3: Hitung sudut.** $\angle DAB = 2(35) + 10 = 80^\circ$ dan $\angle BCD = 3(35) - 5 = 100^\circ$.
4. **Langkah 4: Pasangan lainnya.** $\angle ADC = 180^\circ - 95^\circ = 85^\circ$.
5. **Cek jawaban.** Jumlah sudut segiempat: $80^\circ + 95^\circ + 100^\circ + 85^\circ = 360^\circ$. Cocok.

**Jawaban:** $x = 35$, $\angle DAB = 80^\circ$, $\angle BCD = 100^\circ$, $\angle ADC = 85^\circ$.

### Contoh 5: Soal cerita, mencari pusat meja bundar

**Soal.** Pak Made ingin mencari pusat meja bundar. Ia menempelkan sudut siku-siku penggaris tukang pada tepi meja. Kedua lengan penggaris memotong tepi meja di titik yang berjarak 48 cm dan 64 cm dari sudut penggaris. Berapa jari-jari meja, dan bagaimana menemukan pusatnya?

1. **Langkah 1: Pilih sifat.** Sudut siku-siku yang titik sudutnya di lingkaran adalah sudut di setengah lingkaran. Jadi ruas yang menghubungkan kedua titik potong adalah **diameter**.
2. **Langkah 2: Hitung diameter.** $\sqrt{48^2 + 64^2} = \sqrt{2.304 + 4.096} = \sqrt{6.400} = 80$ cm.
3. **Langkah 3: Jari-jari.** $80 \div 2 = 40$ cm.
4. **Langkah 4: Temukan pusat.** Ulangi di tempat lain untuk mendapat diameter kedua. Pusat adalah titik potong kedua diameter.
5. **Cek jawaban.** Perbandingan $48 : 64 : 80 = 3 : 4 : 5$, tripel Pythagoras yang sudah dikenal.

**Jawaban:** Jari-jari 40 cm; pusat = perpotongan dua diameter.

## Kesalahan yang sering terjadi

- **Membagi dua sudut yang salah.** Sudut pusat = 2 × sudut keliling, bukan sebaliknya. Proyektor di pusat melihat layar lebih lebar daripada penonton.
- **Memakai sudut keliling dari busur yang berlawanan.** Jika $C$ di busur kecil $AB$, maka $\angle ACB = 180^\circ - \frac{1}{2}\angle AOB$, bukan $\frac{1}{2}\angle AOB$. Periksa letak penonton.
- **Menganggap sudut berdampingan pada segiempat tali busur berjumlah $180^\circ$.** Yang berjumlah $180^\circ$ adalah sudut yang **berhadapan**.
- **Lupa sudut siku-siku antara garis singgung dan jari-jari.** Setiap kali ada garis singgung, gambar jari-jari ke titik singgungnya dan tandai $90^\circ$.
- **Tidak memberi alasan.** Dalam ujian, setiap langkah harus disertai sifat yang dipakai, misalnya "(sudut di setengah lingkaran)".

## Ringkasan

- Garis dari pusat yang tegak lurus tali busur membagi tali busur sama panjang; tali busur sama panjang berjarak sama dari pusat.
- Garis singgung $\perp$ jari-jari di titik singgung; dua garis singgung dari titik luar sama panjang.
- Sudut pusat $= 2 \times$ sudut keliling pada busur yang sama.
- Sudut di setengah lingkaran $= 90^\circ$; sudut pada tembereng yang sama besarnya sama.
- Sudut berhadapan pada segiempat tali busur berjumlah $180^\circ$.

## Cek pemahaman

1. Lingkaran berjari-jari 10 cm memiliki tali busur 16 cm. Berapa jarak tali busur ke pusat?
2. Dari titik $P$ ditarik garis singgung $PA$ dan $PB$ ke lingkaran berpusat $O$. Diketahui $PA = 9$ cm dan $\angle APB = 70^\circ$. Tentukan $PB$ dan $\angle AOB$.
3. $\angle AOB = 140^\circ$ dengan $O$ pusat lingkaran. $C$ terletak di busur besar $AB$. Hitung $\angle ACB$.
4. $AB$ adalah diameter dan $C$ titik pada lingkaran. Jika $\angle CAB = 28^\circ$, hitung $\angle ABC$.
5. Segiempat tali busur $ABCD$ memiliki $\angle BAD = 4x$ dan $\angle BCD = 5x$. Hitung $x$ dan kedua sudut itu.

### Kunci jawaban

1. $\sqrt{10^2 - 8^2} = \sqrt{36} = 6$ cm.
2. $PB = 9$ cm (garis singgung dari titik luar); $\angle AOB = 360^\circ - 90^\circ - 90^\circ - 70^\circ = 110^\circ$.
3. $\angle ACB = \frac{140^\circ}{2} = 70^\circ$.
4. $\angle ACB = 90^\circ$ (setengah lingkaran), jadi $\angle ABC = 180^\circ - 90^\circ - 28^\circ = 62^\circ$.
5. $4x + 5x = 180$, jadi $x = 20$; $\angle BAD = 80^\circ$ dan $\angle BCD = 100^\circ$.
