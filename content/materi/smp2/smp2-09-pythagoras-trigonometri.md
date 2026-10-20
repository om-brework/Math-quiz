---
id: smp2-09-pythagoras-trigonometri
judul: Teorema Pythagoras dan Trigonometri Dasar
jenjang: smp2
moe: "Secondary 2 · Geometry and Measurement · G4 Pythagoras' theorem and trigonometry"
prasyarat: [smp1-01-prima-fpb-kpk, smp2-02-ekspansi-faktorisasi, smp2-08-kongruen-sebangun]
durasi_menit: 55
---

## Kenapa belajar ini?

Tukang bangunan perlu tahu panjang tangga agar bisa mencapai atap. Pemasang kabel perlu tahu tinggi tiang dari panjang kabel dan sudutnya. Semua ini adalah soal segitiga siku-siku. Teorema Pythagoras menghubungkan ketiga sisinya, dan trigonometri menghubungkan sisi dengan sudut.

## Analogi

Bayangkan sebuah **tangga yang disandarkan ke dinding** rumah.

- **Dinding** berdiri tegak, **lantai** datar, jadi dinding dan lantai membentuk sudut siku-siku.
- **Tangga** adalah sisi terpanjang, berhadapan dengan sudut siku-siku. Sisi ini disebut **sisi miring** (hipotenusa).
- **Tinggi** ujung tangga di dinding dan **jarak** kaki tangga ke dinding adalah dua sisi lainnya.

Kita akan memakai tangga ini terus: Pythagoras menghitung salah satu dari tiga panjang itu jika dua lainnya diketahui, dan trigonometri memakai **sudut kemiringan tangga** terhadap lantai.

## Konsep

### Nama sisi segitiga siku-siku

Pada segitiga siku-siku, sisi di depan sudut $90^\circ$ adalah **sisi miring**, selalu yang terpanjang. Untuk sudut lancip $\theta$ yang sedang kita perhatikan:

- **sisi depan**: sisi di seberang sudut $\theta$ (pada tangga: tinggi di dinding, jika $\theta$ sudut di lantai),
- **sisi samping**: sisi yang mengapit $\theta$ selain sisi miring (pada tangga: jarak di lantai).

### Teorema Pythagoras

Pada segitiga siku-siku dengan sisi siku-siku $a$ dan $b$, serta sisi miring $c$:

$$a^2 + b^2 = c^2$$

**Kenapa benar?** Ambil empat segitiga siku-siku yang sama (sisi $a$, $b$, $c$), misalnya dari kertas karton. Letakkan satu segitiga di setiap pojok sebuah persegi besar bersisi $a + b$. Setiap sisi persegi besar terbagi menjadi bagian $a$ lalu $b$, berputar searah jarum jam. Sisi miring keempat segitiga membentuk sebuah **persegi miring** bersisi $c$ di tengah.

```
  bagian atas persegi besar :  |---- a ----|-- b --|
  di setiap pojok           :  1 segitiga, luas 1/2 ab
  di tengah                 :  persegi miring, luas c^2
```

Luas persegi besar dihitung dengan dua cara:

$$(a + b)^2 = 4 \times \tfrac{1}{2}ab + c^2$$
$$a^2 + 2ab + b^2 = 2ab + c^2$$

Kurangi kedua ruas dengan $2ab$, kita dapat $a^2 + b^2 = c^2$.

### Uji segitiga siku-siku (kebalikan Pythagoras)

Jika sisi terpanjang $c$ dan dua sisi lainnya $a$, $b$ memenuhi $a^2 + b^2 = c^2$, maka segitiga itu **siku-siku**, dengan sudut siku-siku di depan sisi $c$. Jika $a^2 + b^2 \ne c^2$, segitiga itu **bukan** siku-siku.

Tukang bangunan memakai ini untuk mengecek sudut siku-siku pondasi: ukur 3 m, 4 m, dan pastikan diagonalnya 5 m.

### Sinus, kosinus, tangen

Untuk sudut lancip $\theta$ pada segitiga siku-siku:

$$\sin\theta = \frac{\text{depan}}{\text{miring}}, \qquad \cos\theta = \frac{\text{samping}}{\text{miring}}, \qquad \tan\theta = \frac{\text{depan}}{\text{samping}}$$

Jembatan keledai: **sindemi, cossami, tandesa**.

**Kenapa perbandingan ini hanya bergantung pada sudut?** Bayangkan dua tangga dengan kemiringan sama, satu panjangnya 2 m dan satu 4 m. Kedua segitiganya **sebangun**, karena sudutnya sama semua. Tangga 4 m adalah "fotokopi 200%" dari tangga 2 m. Semua sisi dikali 2, jadi perbandingan $\frac{\text{depan}}{\text{miring}}$ tetap sama. Karena itu setiap sudut punya satu nilai sinus, kosinus, dan tangen, yang bisa dicari dengan kalkulator.

### Mencari sudut dari sisi

Jika perbandingan sisi diketahui, sudut dicari dengan tombol kebalikan pada kalkulator: $\sin^{-1}$, $\cos^{-1}$, atau $\tan^{-1}$. Pastikan kalkulator dalam mode **derajat** (DEG).

### Memilih rumus yang tepat

Tandai sisi yang **diketahui** dan sisi yang **dicari** terhadap sudut $\theta$, lalu pilih:

- depan dan miring → $\sin$,
- samping dan miring → $\cos$,
- depan dan samping → $\tan$.

## Contoh langkah demi langkah

Urutan berpikir: **gambar dan beri nama sisi → pilih rumus → hitung → cek** (dengan Pythagoras atau kewajaran: sisi miring harus terpanjang).

### Contoh 1: Mencari sisi miring

**Soal.** Segitiga siku-siku punya sisi siku-siku 5 cm dan 12 cm. Hitung sisi miringnya.

1. **Langkah 1: Beri nama sisi.** $a = 5$, $b = 12$, sisi miring $c$ dicari.
2. **Langkah 2: Pilih rumus.** Tiga sisi tanpa sudut → Pythagoras.
3. **Langkah 3: Hitung.**
$$c^2 = 5^2 + 12^2 = 25 + 144 = 169 \quad\Rightarrow\quad c = \sqrt{169} = 13$$
4. **Cek jawaban.** $13$ lebih besar dari 5 dan 12, wajar untuk sisi miring.

**Jawaban:** 13 cm.

### Contoh 2: Soal cerita tangga

**Soal.** Pak Ketut menyandarkan tangga sepanjang 5 m ke dinding. Kaki tangga berjarak 1,4 m dari dinding. Seberapa tinggi ujung tangga di dinding?

1. **Langkah 1: Beri nama sisi.** Tangga = sisi miring $c = 5$. Jarak di lantai $a = 1{,}4$. Tinggi $h$ dicari.
2. **Langkah 2: Pilih rumus.** Pythagoras, tetapi yang dicari sisi siku-siku, jadi **kurangkan**: $h^2 = c^2 - a^2$.
3. **Langkah 3: Hitung.**
$$h^2 = 5^2 - 1{,}4^2 = 25 - 1{,}96 = 23{,}04 \quad\Rightarrow\quad h = \sqrt{23{,}04} = 4{,}8$$
4. **Cek jawaban.** $1{,}4^2 + 4{,}8^2 = 1{,}96 + 23{,}04 = 25 = 5^2$. Benar, dan $4{,}8 < 5$.

**Jawaban:** ujung tangga setinggi 4,8 m.

### Contoh 3: Uji segitiga siku-siku

**Soal.** Apakah segitiga dengan sisi 9 cm, 12 cm, dan 15 cm siku-siku? Bagaimana dengan 6 cm, 8 cm, dan 11 cm?

1. **Langkah 1: Tentukan sisi terpanjang.** Segitiga pertama: 15. Segitiga kedua: 11.
2. **Langkah 2: Bandingkan $a^2 + b^2$ dengan $c^2$.**
   - $9^2 + 12^2 = 81 + 144 = 225$, dan $15^2 = 225$. Sama.
   - $6^2 + 8^2 = 36 + 64 = 100$, dan $11^2 = 121$. Tidak sama.
3. **Langkah 3: Simpulkan.** Segitiga pertama siku-siku (sudut siku-siku di depan sisi 15). Segitiga kedua bukan siku-siku.
4. **Cek jawaban.** Sisi 9, 12, 15 adalah sisi 3, 4, 5 yang dikali 3, pasangan yang sudah dikenal siku-siku.

**Jawaban:** 9, 12, 15 siku-siku; 6, 8, 11 bukan.

### Contoh 4: Mencari sisi dengan trigonometri

**Soal.** Pada $\triangle ABC$, $\angle B = 90^\circ$, $\angle A = 35^\circ$, dan $AB = 8$ cm. Hitung $BC$ dan $AC$ (bulatkan ke 2 tempat desimal).

1. **Langkah 1: Beri nama sisi terhadap sudut $A$.** $AB$ mengapit sudut $A$ → **samping** $= 8$. $BC$ di seberang $A$ → **depan**. $AC$ di depan sudut siku-siku → **miring**.
2. **Langkah 2: Pilih rumus untuk $BC$.** Diketahui samping, dicari depan → $\tan$.
$$\tan 35^\circ = \frac{BC}{8} \quad\Rightarrow\quad BC = 8 \tan 35^\circ \approx 8 \times 0{,}7002 \approx 5{,}60 \text{ cm}$$
3. **Langkah 3: Pilih rumus untuk $AC$.** Diketahui samping, dicari miring → $\cos$. Karena yang dicari ada di penyebut, susun ulang.
$$\cos 35^\circ = \frac{8}{AC} \quad\Rightarrow\quad AC = \frac{8}{\cos 35^\circ} \approx \frac{8}{0{,}8192} \approx 9{,}77 \text{ cm}$$
4. **Cek jawaban.** Pythagoras: $8^2 + 5{,}60^2 = 64 + 31{,}36 = 95{,}36$, dan $\sqrt{95{,}36} \approx 9{,}77$. Cocok, dan $AC$ adalah sisi terpanjang.

**Jawaban:** $BC \approx 5{,}60$ cm dan $AC \approx 9{,}77$ cm.

### Contoh 5: Mencari sudut

**Soal.** Sebuah jalur landai untuk kursi roda di depan puskesmas naik setinggi 1,2 m sepanjang jarak mendatar 5 m. Berapa sudut kemiringan jalur itu terhadap tanah (bulatkan ke 1 tempat desimal)?

1. **Langkah 1: Beri nama sisi.** Terhadap sudut kemiringan $\theta$: tinggi 1,2 m = **depan**, jarak mendatar 5 m = **samping**.
2. **Langkah 2: Pilih rumus.** Depan dan samping → $\tan$.
$$\tan\theta = \frac{1{,}2}{5} = 0{,}24$$
3. **Langkah 3: Hitung sudut.** $\theta = \tan^{-1}(0{,}24) \approx 13{,}5^\circ$.
4. **Cek jawaban.** $\tan 13{,}5^\circ \approx 0{,}240$. Sudut kecil juga wajar karena jalurnya landai (naik sedikit, maju jauh).

**Jawaban:** sekitar $13{,}5^\circ$.

## Kesalahan yang sering terjadi

- **Menjumlahkan saat mencari sisi siku-siku.** Pada contoh tangga, menulis $h^2 = 25 + 1{,}96$. Hasilnya lebih panjang dari tangga, mustahil. Jika yang dicari bukan sisi miring, **kurangkan** dari kuadrat sisi miring.
- **Lupa mengakarkan.** Berhenti di $c^2 = 169$ dan menjawab 169. Langkah terakhir Pythagoras selalu akar kuadrat.
- **Salah memberi nama sisi.** Sisi "depan" dan "samping" bergantung pada sudut yang dipakai. Untuk $\angle C$ pada contoh 4, $AB$ menjadi sisi depan. Beri nama sisi **setelah** memilih sudut.
- **Mengalikan padahal harus membagi.** Dari $\cos 35^\circ = \frac{8}{AC}$ menulis $AC = 8 \cos 35^\circ \approx 6{,}55$. Hasil ini lebih pendek dari sisi samping 8, mustahil untuk sisi miring. Yang benar $AC = \frac{8}{\cos 35^\circ}$.
- **Kalkulator dalam mode radian.** $\sin 30$ muncul $-0{,}988$, bukan $0{,}5$. Periksa tanda DEG di layar.

## Ringkasan

- Sisi miring berhadapan dengan sudut siku-siku dan selalu terpanjang.
- Pythagoras: $a^2 + b^2 = c^2$; mencari sisi miring → jumlahkan, mencari sisi siku-siku → kurangkan.
- Jika $a^2 + b^2 = c^2$ untuk sisi terpanjang $c$, segitiga itu siku-siku.
- $\sin\theta = \frac{\text{de}}{\text{mi}}$, $\cos\theta = \frac{\text{sa}}{\text{mi}}$, $\tan\theta = \frac{\text{de}}{\text{sa}}$; nilainya hanya bergantung pada sudut karena segitiga dengan sudut sama sebangun.
- Mencari sudut: pakai $\sin^{-1}$, $\cos^{-1}$, atau $\tan^{-1}$ dalam mode derajat.

## Cek pemahaman

1. Sisi siku-siku sebuah segitiga 9 cm dan 40 cm. Hitung sisi miringnya.
2. Sisi miring 17 cm dan salah satu sisi siku-siku 8 cm. Hitung sisi siku-siku yang lain.
3. Apakah segitiga dengan sisi 8 cm, 15 cm, dan 18 cm siku-siku?
4. Pada segitiga siku-siku, sisi miringnya 10 cm dan salah satu sudut lancipnya $40^\circ$. Hitung sisi di depan sudut $40^\circ$ (2 tempat desimal).
5. Benang layang-layang Putu sepanjang 50 m terentang lurus. Layang-layang berada 30 m di atas tangan Putu. Berapa sudut antara benang dan garis mendatar (1 tempat desimal)?

### Kunci jawaban

1. 41 cm. $81 + 1.600 = 1.681 = 41^2$.
2. 15 cm. $17^2 - 8^2 = 289 - 64 = 225 = 15^2$.
3. Bukan. $8^2 + 15^2 = 64 + 225 = 289$, sedangkan $18^2 = 324$.
4. $6{,}43$ cm. Depan dan miring → $\sin$: $10 \sin 40^\circ \approx 10 \times 0{,}6428 \approx 6{,}43$.
5. $36{,}9^\circ$. Depan 30 dan miring 50 → $\sin\theta = 0{,}6$, jadi $\theta = \sin^{-1}(0{,}6) \approx 36{,}9^\circ$.
