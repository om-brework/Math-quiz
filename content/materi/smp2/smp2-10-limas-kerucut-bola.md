---
id: smp2-10-limas-kerucut-bola
judul: Volume dan Luas Permukaan Limas, Kerucut, dan Bola
jenjang: smp2
moe: "Secondary 2 · Geometry and Measurement · G5 Mensuration"
prasyarat: [smp1-11-pengukuran-bangun, smp2-09-pythagoras-trigonometri]
durasi_menit: 55
---

## Kenapa belajar ini?

Tumpeng nasi kuning berbentuk kerucut, atap joglo berbentuk limas, dan bola voli berbentuk bola. Untuk tahu berapa banyak isi yang muat, atau berapa banyak bahan untuk membungkusnya, kita perlu rumus volume dan luas permukaan bangun-bangun ini.

## Analogi

Bayangkan kamu sedang **menuang beras** di dapur. Kamu punya beberapa wadah plastik:

- Gelas berbentuk **tabung** dan cetakan tumpeng berbentuk **kerucut** dengan alas dan tinggi yang **sama**.
- Kotak berbentuk **prisma** dan wadah berbentuk **limas** dengan alas dan tinggi yang sama.

Isi cetakan kerucut penuh dengan beras, lalu tuang ke gelas tabung. Ternyata perlu **tepat 3 kali** tuang sampai tabung penuh. Hal yang sama terjadi pada limas dan prisma. Itulah asal angka $\frac{1}{3}$ pada rumus volume limas dan kerucut.

Untuk luas permukaan, bayangkan **membuka bungkus** bangun itu dan membentangkannya di meja, seperti membuka kertas pembungkus nasi. Luas permukaan adalah luas seluruh kertas yang terbentang.

## Konsep

### Limas

**Limas** punya satu alas berbentuk segi banyak dan sisi-sisi tegak berbentuk segitiga yang bertemu di satu titik puncak. Tinggi limas $t$ diukur **tegak lurus** dari puncak ke alas.

$$V_{\text{limas}} = \frac{1}{3} \times \text{luas alas} \times t$$

Ini sepertiga prisma dengan alas dan tinggi yang sama, sesuai percobaan menuang beras.

$$L_{\text{limas}} = \text{luas alas} + \text{jumlah luas semua segitiga sisi tegak}$$

Untuk menghitung luas segitiga sisi tegak, kita perlu **tinggi segitiga** itu (garis dari puncak ke tengah rusuk alas). Tinggi ini **berbeda** dari tinggi limas, dan biasanya dicari dengan Pythagoras.

### Kerucut

**Kerucut** punya alas lingkaran berjari-jari $r$, tinggi $t$, dan **garis pelukis** $s$, yaitu jarak dari puncak ke tepi alas. Karena $r$, $t$, dan $s$ membentuk segitiga siku-siku:

$$s^2 = r^2 + t^2$$

$$V_{\text{kerucut}} = \frac{1}{3}\pi r^2 t$$

**Luas selimut kerucut.** Jika selimut kerucut digunting dan dibentangkan, hasilnya adalah **juring lingkaran** berjari-jari $s$. Panjang busur juring itu sama dengan keliling alas, yaitu $2\pi r$. Satu lingkaran penuh berjari-jari $s$ punya keliling $2\pi s$ dan luas $\pi s^2$. Juring kita hanya sebagian dari lingkaran itu:

$$\text{luas selimut} = \frac{2\pi r}{2\pi s} \times \pi s^2 = \pi r s$$

$$L_{\text{kerucut}} = \pi r^2 + \pi r s$$

### Bola

**Bola** hanya ditentukan oleh jari-jarinya $r$.

$$V_{\text{bola}} = \frac{4}{3}\pi r^3, \qquad L_{\text{bola}} = 4\pi r^2$$

**Kenapa?** Archimedes membandingkan bola dengan tabung yang pas membungkusnya (jari-jari $r$, tinggi $2r$). Jika kita menuang beras, bola ternyata berisi $\frac{2}{3}$ isi tabung itu:

$$\frac{2}{3} \times \pi r^2 \times 2r = \frac{4}{3}\pi r^3$$

Untuk luas, kulit jeruk yang dikupas dan disusun ternyata tepat menutupi **empat lingkaran** berjari-jari sama dengan jeruk itu, jadi $4\pi r^2$.

**Setengah bola**: volumenya $\frac{2}{3}\pi r^3$. Luas permukaan setengah bola padat $= 2\pi r^2$ (kulit lengkung) $+ \pi r^2$ (tutup datar) $= 3\pi r^2$.

### Bangun gabungan

Untuk bangun gabungan, pisahkan menjadi bangun-bangun dasar.

- **Volume**: jumlahkan volume setiap bagian.
- **Luas permukaan**: jumlahkan hanya bagian yang **terlihat dari luar**. Bidang tempel di antara dua bagian tidak dihitung.

Gunakan $\pi$ dari kalkulator, kecuali soal meminta $\pi = \frac{22}{7}$ atau $3{,}14$. Kalau memungkinkan, tulis dulu jawaban dalam $\pi$, baru dibulatkan di akhir.

## Contoh langkah demi langkah

Urutan berpikir: **kenali bangun dan ukurannya → cari ukuran yang hilang (sering dengan Pythagoras) → pakai rumus → cek**.

### Contoh 1: Limas persegi

**Soal.** Sebuah limas beralas persegi dengan sisi 10 cm dan tinggi limas 12 cm. Hitung volume dan luas permukaannya.

1. **Langkah 1: Kenali ukuran.** Luas alas $= 10 \times 10 = 100 \text{ cm}^2$, $t = 12$ cm.
2. **Langkah 2: Hitung volume.** Sepertiga prisma:
$$V = \frac{1}{3} \times 100 \times 12 = 400 \text{ cm}^3$$
3. **Langkah 3: Cari tinggi segitiga sisi tegak.** Dari puncak, turun 12 cm ke pusat alas, lalu mendatar 5 cm (setengah sisi alas) ke tengah rusuk. Pythagoras:
$$\sqrt{12^2 + 5^2} = \sqrt{144 + 25} = \sqrt{169} = 13 \text{ cm}$$
4. **Langkah 4: Hitung luas permukaan.** Ada 4 segitiga, masing-masing beralas 10 dan tinggi 13.
$$L = 100 + 4 \times \tfrac{1}{2} \times 10 \times 13 = 100 + 260 = 360 \text{ cm}^2$$
5. **Cek jawaban.** Prisma dengan alas dan tinggi sama bervolume $100 \times 12 = 1.200$, dan $1.200 \div 3 = 400$. Tinggi segitiga 13 lebih besar dari tinggi limas 12, wajar karena sisinya miring.

**Jawaban:** $V = 400 \text{ cm}^3$, $L = 360 \text{ cm}^2$.

### Contoh 2: Kerucut

**Soal.** Sebuah kerucut berjari-jari 5 cm dan tinggi 12 cm. Hitung volume dan luas permukaannya (2 tempat desimal).

1. **Langkah 1: Kenali ukuran.** $r = 5$, $t = 12$.
2. **Langkah 2: Cari garis pelukis.** $s = \sqrt{5^2 + 12^2} = \sqrt{169} = 13$ cm.
3. **Langkah 3: Hitung volume.**
$$V = \frac{1}{3}\pi (5)^2 (12) = 100\pi \approx 314{,}16 \text{ cm}^3$$
4. **Langkah 4: Hitung luas permukaan.** Alas lingkaran ditambah selimut yang dibentangkan.
$$L = \pi (5)^2 + \pi (5)(13) = 25\pi + 65\pi = 90\pi \approx 282{,}74 \text{ cm}^2$$
5. **Cek jawaban.** Tabung dengan alas dan tinggi sama: $\pi \times 25 \times 12 = 300\pi$. Sepertiganya $100\pi$, cocok dengan percobaan menuang beras.

**Jawaban:** $V \approx 314{,}16 \text{ cm}^3$, $L \approx 282{,}74 \text{ cm}^2$.

### Contoh 3: Bola

**Soal.** Sebuah bola plastik berdiameter 12 cm. Hitung volume dan luas permukaannya (2 tempat desimal).

1. **Langkah 1: Kenali ukuran.** Diameter 12, jadi $r = 6$ cm.
2. **Langkah 2: Hitung volume.**
$$V = \frac{4}{3}\pi (6)^3 = \frac{4}{3}\pi \times 216 = 288\pi \approx 904{,}78 \text{ cm}^3$$
3. **Langkah 3: Hitung luas permukaan.**
$$L = 4\pi (6)^2 = 144\pi \approx 452{,}39 \text{ cm}^2$$
4. **Cek jawaban.** Tabung pembungkus: $\pi \times 36 \times 12 = 432\pi$. Dua pertiganya $= 288\pi$, cocok.

**Jawaban:** $V \approx 904{,}78 \text{ cm}^3$, $L \approx 452{,}39 \text{ cm}^2$.

### Contoh 4: Soal cerita bangun gabungan

**Soal.** Siti membeli es krim. Bagian bawahnya kerucut wafer berjari-jari 3 cm dan tinggi 10 cm, penuh es krim. Di atasnya ada es krim berbentuk setengah bola dengan jari-jari 3 cm. Berapa volume seluruh es krim (2 tempat desimal)?

1. **Langkah 1: Pisahkan bangun.** Kerucut ($r = 3$, $t = 10$) dan setengah bola ($r = 3$).
2. **Langkah 2: Volume kerucut.**
$$\frac{1}{3}\pi (3)^2 (10) = 30\pi$$
3. **Langkah 3: Volume setengah bola.**
$$\frac{1}{2} \times \frac{4}{3}\pi (3)^3 = \frac{2}{3}\pi \times 27 = 18\pi$$
4. **Langkah 4: Jumlahkan.** $30\pi + 18\pi = 48\pi \approx 150{,}80 \text{ cm}^3$.
5. **Cek jawaban.** Hitung terpisah: $30\pi \approx 94{,}25$ dan $18\pi \approx 56{,}55$; jumlahnya $150{,}80$. Cocok.

**Jawaban:** sekitar $150{,}80 \text{ cm}^3$.

## Kesalahan yang sering terjadi

- **Lupa $\frac{1}{3}$.** Menghitung volume kerucut sebagai $\pi r^2 t$. Itu volume tabung, tiga kali terlalu besar. Ingat percobaan menuang beras.
- **Menukar tinggi dan garis pelukis.** Memakai $t = 12$ pada rumus selimut $\pi r s$, atau memakai $s = 13$ pada rumus volume. Volume selalu memakai tinggi **tegak**; selimut memakai garis pelukis **miring**.
- **Memakai diameter sebagai jari-jari.** Pada bola berdiameter 12 cm, memakai $r = 12$ membuat volume 8 kali lebih besar. Bagi 2 dulu.
- **Menghitung bidang tempel pada bangun gabungan.** Saat menghitung luas permukaan es krim, alas setengah bola dan alas kerucut menempel, jadi tidak terlihat dari luar dan tidak dihitung.
- **Membulatkan terlalu awal.** Membulatkan $\pi$ dan hasil antara lalu menjumlahkan membuat jawaban akhir meleset. Simpan dalam bentuk $\pi$ sampai akhir.

## Ringkasan

- Limas: $V = \frac{1}{3} \times \text{luas alas} \times t$; $L$ = alas + semua segitiga sisi tegak.
- Kerucut: $s^2 = r^2 + t^2$; $V = \frac{1}{3}\pi r^2 t$; $L = \pi r^2 + \pi r s$.
- Bola: $V = \frac{4}{3}\pi r^3$; $L = 4\pi r^2$. Setengah bola padat: $V = \frac{2}{3}\pi r^3$, $L = 3\pi r^2$.
- Angka $\frac{1}{3}$ berasal dari "tiga kali tuang" ke prisma atau tabung yang sama alas dan tingginya.
- Bangun gabungan: jumlahkan volume; untuk luas, hitung hanya permukaan luar.

## Cek pemahaman

1. Limas beralas persegi panjang 6 cm × 4 cm dengan tinggi 9 cm. Hitung volumenya.
2. Kerucut berjari-jari 7 cm dan tinggi 24 cm. Hitung luas permukaannya (2 tempat desimal).
3. Sebuah bola padat dari lilin mainan berdiameter 10 cm. Hitung volumenya (2 tempat desimal).
4. Setengah bola padat berjari-jari 5 cm. Hitung luas permukaan totalnya (2 tempat desimal).
5. Sebuah tugu kecil terdiri atas tabung berjari-jari 3 cm dan tinggi 8 cm, dengan kerucut berjari-jari 3 cm dan tinggi 4 cm di atasnya. Hitung volume tugu (2 tempat desimal).

### Kunci jawaban

1. $72 \text{ cm}^3$. $\frac{1}{3} \times (6 \times 4) \times 9 = \frac{1}{3} \times 216 = 72$.
2. $703{,}72 \text{ cm}^2$. $s = \sqrt{49 + 576} = 25$, jadi $L = 49\pi + 175\pi = 224\pi \approx 703{,}72$.
3. $523{,}60 \text{ cm}^3$. $r = 5$, $V = \frac{4}{3}\pi \times 125 = \frac{500}{3}\pi$.
4. $235{,}62 \text{ cm}^2$. $L = 3\pi r^2 = 3\pi \times 25 = 75\pi$.
5. $263{,}89 \text{ cm}^3$. Tabung $\pi \times 9 \times 8 = 72\pi$, kerucut $\frac{1}{3}\pi \times 9 \times 4 = 12\pi$, total $84\pi$.
