---
id: sd5-08-luas-segitiga
judul: Luas Segitiga
jenjang: sd5
moe: "Primary 5 · Measurement and Geometry · Area of Triangle"
prasyarat: [sd3-11-luas-keliling, sd3-13-garis-sejajar-tegak-lurus, sd4-09-luas-keliling-gabungan]
durasi_menit: 40
---

## Kenapa belajar ini?

Atap rumah, layar perahu, dan potongan roti lapis sering berbentuk segitiga. Untuk menghitung berapa cat atau kain yang dibutuhkan, kita perlu tahu luas segitiga.

## Analogi

Bayangkan **selembar roti tawar** berbentuk persegi panjang. Potong roti itu menurut garis miring dari satu sudut ke sudut seberangnya. Kamu mendapat **dua potong segitiga yang sama persis**. Jadi setiap segitiga adalah **setengah roti**.

Ternyata **setiap segitiga** bisa dibungkus oleh sebuah "roti" persegi panjang yang panjangnya sama dengan **alas** segitiga dan lebarnya sama dengan **tinggi** segitiga. Segitiga itu selalu menempati tepat **setengah** dari roti pembungkusnya.

Itulah sebabnya rumus luas segitiga memakai "setengah".

## Konsep

### Alas dan tinggi

- **Alas** adalah salah satu sisi segitiga yang kita pilih sebagai dasar.
- **Tinggi** adalah jarak **tegak lurus** dari titik puncak (sudut di seberang alas) ke garis alas. Tinggi membentuk sudut siku-siku ($90^\circ$) dengan alas.

Bayangkan tinggi seperti tali berbandul yang dijatuhkan lurus dari puncak ke lantai. Tali itu selalu jatuh tegak lurus, tidak miring.

Segitiga siku-siku: dua sisi yang membentuk sudut siku-siku adalah alas dan tinggi.

```
  |\
  | \
6 |  \
cm|   \
  |    \
  |_____\
   8 cm
```

Segitiga lancip: tinggi berada **di dalam** segitiga.

```
         A
        /|\
       / | \
      /  |t \
     /   |   \
    B----+----C
       alas
```

Segitiga tumpul: tinggi bisa berada **di luar** segitiga. Garis alas **diperpanjang** (garis putus-putus), lalu tinggi dijatuhkan dari puncak ke perpanjangan itu.

```
     A
     |`.
     |\ `.
t    | \  `.
     |  \   `.
     |   \    `.
     + - -B----C
           alas
```

Penting: **alas dan tinggi harus berpasangan.** Tinggi selalu diukur tegak lurus terhadap alas yang dipilih.

### Rumus luas segitiga

$$\text{Luas segitiga} = \frac{1}{2} \times \text{alas} \times \text{tinggi}$$

Satuannya satuan persegi, misalnya $\text{cm}^2$ atau $\text{m}^2$.

### Luas bangun gabungan

Pecah bangun menjadi persegi, persegi panjang, dan segitiga. Hitung luas setiap bagian, lalu jumlahkan. Kalau ada bagian yang "dibuang" (bolong), kurangkan.

## Contoh langkah demi langkah

### Contoh 1: Segitiga siku-siku

**Soal.** Hitung luas segitiga siku-siku dengan alas 8 cm dan tinggi 6 cm (gambar pertama di atas).

1. **Langkah 1: Tentukan alas dan tinggi.** Dua sisi yang membentuk sudut siku-siku: alas 8 cm, tinggi 6 cm.
2. **Langkah 2: Hitung luas roti pembungkus.** Persegi panjang $8 \times 6 = 48\ \text{cm}^2$.
3. **Langkah 3: Ambil setengahnya.** $\frac{1}{2} \times 48 = 24\ \text{cm}^2$.
4. **Cek jawaban.** Pakai rumus langsung: $\frac{1}{2} \times 8 \times 6 = 4 \times 6 = 24$. Sama.

**Jawaban:** $24\ \text{cm}^2$.

### Contoh 2: Memilih tinggi yang benar

**Soal.** Segitiga ABC (gambar kedua) punya alas BC = 12 cm. Sisi AB = 10 cm, sisi AC = 10 cm, dan tinggi dari A ke BC = 8 cm. Hitung luasnya.

1. **Langkah 1: Tentukan alas.** Alas BC = 12 cm.
2. **Langkah 2: Pilih tinggi.** Yang tegak lurus terhadap BC adalah garis t = 8 cm. Sisi AB dan AC miring, jadi **bukan** tinggi.
3. **Langkah 3: Hitung.** $\frac{1}{2} \times 12 \times 8 = 6 \times 8 = 48\ \text{cm}^2$.
4. **Cek jawaban.** Roti pembungkusnya $12 \times 8 = 96\ \text{cm}^2$. Setengahnya 48. Sama.

**Jawaban:** $48\ \text{cm}^2$.

### Contoh 3: Tinggi di luar segitiga

**Soal.** Segitiga tumpul ABC (gambar ketiga) punya alas BC = 5 cm. Tinggi dari A ke perpanjangan BC adalah 8 cm. Hitung luasnya.

1. **Langkah 1: Tentukan alas dan tinggi.** Alas BC = 5 cm. Tinggi 8 cm, berada di luar segitiga tetapi tetap tegak lurus terhadap garis alas.
2. **Langkah 2: Hitung dengan rumus.** $\frac{1}{2} \times 5 \times 8 = 20\ \text{cm}^2$.
3. **Langkah 3: Pahami kenapa rumusnya tetap berlaku.** Misalkan jarak titik kaki tinggi ke B adalah 3 cm. Segitiga siku-siku besar (alas $3 + 5 = 8$ cm, tinggi 8 cm) luasnya $\frac{1}{2} \times 8 \times 8 = 32$. Segitiga siku-siku kecil (alas 3 cm, tinggi 8 cm) luasnya $\frac{1}{2} \times 3 \times 8 = 12$. Segitiga ABC = besar − kecil.
4. **Cek jawaban.** $32 - 12 = 20\ \text{cm}^2$. Sama dengan hasil rumus.

**Jawaban:** $20\ \text{cm}^2$.

### Contoh 4: Soal cerita bangun gabungan

**Soal.** Pak Made akan mengecat dinding depan gudang. Dinding itu terdiri dari persegi panjang 6 m × 3 m dan segitiga di atasnya dengan alas 6 m dan tinggi 2 m. Satu kaleng cat cukup untuk $8\ \text{m}^2$. Berapa kaleng cat yang dibutuhkan?

```
        /\
       /  \
      /    \   2 m
     /      \
    +--------+
    |        |
    |        |  3 m
    |        |
    +--------+
       6 m
```

1. **Langkah 1: Pecah bangun.** Bagian bawah persegi panjang, bagian atas segitiga.
2. **Langkah 2: Hitung luas persegi panjang.** $6 \times 3 = 18\ \text{m}^2$.
3. **Langkah 3: Hitung luas segitiga.** $\frac{1}{2} \times 6 \times 2 = 6\ \text{m}^2$. Segitiga ini setengah dari "roti" $6 \times 2$.
4. **Langkah 4: Jumlahkan.** $18 + 6 = 24\ \text{m}^2$.
5. **Langkah 5: Hitung kaleng cat.** $24 \div 8 = 3$ kaleng.
6. **Cek jawaban.** 3 kaleng × $8\ \text{m}^2$ = $24\ \text{m}^2$, pas sama dengan luas dinding.

**Jawaban:** 3 kaleng cat.

## Kesalahan yang sering terjadi

- **Memakai sisi miring sebagai tinggi.** Pada contoh 2, menghitung $\frac{1}{2} \times 12 \times 10 = 60$. Sisi AB miring, tidak tegak lurus alas. Tinggi yang benar 8 cm.
- **Lupa setengah.** Menghitung $8 \times 6 = 48$ untuk segitiga siku-siku. Itu luas roti pembungkus. Segitiganya setengah: 24.
- **Mengira tinggi harus di dalam.** Pada segitiga tumpul, mencari tinggi di dalam segitiga dan tidak menemukannya. Perpanjang alas, lalu jatuhkan tinggi di luar.
- **Alas dan tinggi tidak berpasangan.** Mengambil alas dari satu sisi dan tinggi dari sisi lain. Tinggi harus tegak lurus terhadap alas yang dipakai.
- **Satuan salah.** Menulis 24 cm. Luas memakai satuan persegi: $24\ \text{cm}^2$.

## Ringkasan

- Luas segitiga $= \frac{1}{2} \times \text{alas} \times \text{tinggi}$.
- Segitiga selalu setengah dari persegi panjang pembungkusnya (alas × tinggi).
- Tinggi tegak lurus terhadap alas. Pada segitiga tumpul, tinggi bisa di luar segitiga.
- Pada segitiga siku-siku, dua sisi siku-sikunya adalah alas dan tinggi.
- Bangun gabungan: pecah, hitung tiap bagian, lalu jumlahkan atau kurangkan.

## Cek pemahaman

1. Sebuah segitiga punya alas 14 cm dan tinggi 9 cm. Berapa luasnya?
2. Segitiga siku-siku punya sisi 5 cm, 12 cm, dan sisi miring 13 cm. Berapa luasnya?
3. Segitiga tumpul punya alas 6 cm. Tingginya di luar segitiga, 7 cm. Berapa luasnya?
4. Sebuah bangun terdiri dari persegi bersisi 8 cm dan segitiga di atasnya dengan alas 8 cm dan tinggi 5 cm. Berapa luas bangun itu?
5. Taman Bu Siti berbentuk persegi panjang 12 m × 9 m. Di dalamnya ada petak bunga berbentuk segitiga dengan alas 12 m (sepanjang satu sisi taman) dan tinggi 9 m. Sisanya ditanami rumput. Berapa luas rumputnya?

### Kunci jawaban

1. $63\ \text{cm}^2$. $\frac{1}{2} \times 14 \times 9 = 7 \times 9 = 63$.
2. $30\ \text{cm}^2$. Sisi siku-sikunya 5 cm dan 12 cm: $\frac{1}{2} \times 5 \times 12 = 30$. Sisi miring 13 cm tidak dipakai.
3. $21\ \text{cm}^2$. $\frac{1}{2} \times 6 \times 7 = 3 \times 7 = 21$.
4. $84\ \text{cm}^2$. Persegi $8 \times 8 = 64$, segitiga $\frac{1}{2} \times 8 \times 5 = 20$, jumlah 84.
5. $54\ \text{m}^2$. Taman $12 \times 9 = 108$, segitiga $\frac{1}{2} \times 12 \times 9 = 54$, rumput $108 - 54 = 54$.
