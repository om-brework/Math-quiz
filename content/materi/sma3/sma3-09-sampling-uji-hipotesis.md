---
id: sma3-09-sampling-uji-hipotesis
judul: Sampling dan Uji Hipotesis
jenjang: sma3
moe: "H2 Mathematics 9758 · Probability and Statistics · Sampling and Hypothesis testing"
prasyarat: [sma3-08-distribusi-normal]
durasi_menit: 80
---

## Kenapa belajar ini?

Pabrik mi instan menulis "berat bersih 75 g". Kita tidak mungkin menimbang semua bungkus di Indonesia. Kita hanya bisa menimbang sebagian, lalu memutuskan: apakah klaim pabrik masih masuk akal? Materi ini mengajarkan cara mengambil keputusan seperti itu secara jujur dan terukur.

## Analogi

Bayangkan kamu memasak **sepanci besar sayur asem**. Untuk tahu rasanya, kamu tidak menghabiskan satu panci. Kamu **mengaduk** lalu **mencicipi satu sendok**.

- Panci adalah **populasi**, sendok adalah **sampel**.
- Mengaduk dulu membuat sendok **acak** dan mewakili seluruh panci.
- Sendok yang lebih besar memberi gambaran yang lebih stabil.
- Resep mengklaim "asinnya pas". Kamu hanya menolak klaim itu jika sendokmu **jauh terlalu asin**, lebih asin daripada yang wajar terjadi karena variasi kecil antarsendok.

Analogi panci dan sendok dipakai di seluruh materi.

## Konsep

### Populasi dan sampel acak

**Populasi** adalah seluruh objek yang ingin diteliti. **Sampel** adalah sebagian objek yang benar-benar diamati. Sampel berukuran $n$ disebut **sampel acak** jika setiap anggota populasi punya peluang yang sama untuk terpilih dan pemilihan satu anggota tidak memengaruhi yang lain. Secara matematis, nilai-nilai sampel $X_1, X_2, \dots, X_n$ saling bebas dan berdistribusi sama dengan populasi.

### Menaksir rata-rata dan variansi populasi

Taksiran tak bias untuk $\mu$ adalah rata-rata sampel $\bar{x} = \frac{\sum x}{n}$. Taksiran tak bias untuk $\sigma^2$ adalah

$$s^2 = \frac{1}{n-1}\sum (x - \bar{x})^2 = \frac{1}{n-1}\left[\sum x^2 - \frac{(\sum x)^2}{n}\right].$$

Pembaginya $n - 1$, bukan $n$. Alasannya, simpangan diukur dari $\bar{x}$, yang selalu berada paling dekat dengan data sampel itu sendiri. Akibatnya $\sum(x - \bar{x})^2$ cenderung terlalu kecil, dan pembagi $n-1$ mengoreksinya.

Jika data diberikan dalam bentuk $x - a$, rumus yang sama berlaku dengan $x$ diganti $x - a$, karena pergeseran tidak mengubah penyebaran.

### Distribusi rata-rata sampel

Setiap sendok memberi rata-rata $\bar{X}$ yang sedikit berbeda. Jadi $\bar{X}$ sendiri adalah variabel acak. Dengan sifat kombinasi linear:

$$E(\bar{X}) = \frac{1}{n}\big(E(X_1) + \cdots + E(X_n)\big) = \mu,$$

$$\operatorname{Var}(\bar{X}) = \frac{1}{n^2}\big(\operatorname{Var}(X_1) + \cdots + \operatorname{Var}(X_n)\big) = \frac{n\sigma^2}{n^2} = \frac{\sigma^2}{n}.$$

Simpangan baku $\bar{X}$ adalah $\frac{\sigma}{\sqrt{n}}$. Makin besar sendok, makin kecil variasi rasanya.

- Jika populasi berdistribusi normal, maka $\bar{X} \sim N\!\left(\mu, \frac{\sigma^2}{n}\right)$ **tepat**, untuk $n$ berapa pun.

### Teorema limit pusat

Jika populasi **tidak** normal (atau tidak diketahui bentuknya), tetapi $n$ besar (biasanya $n \ge 30$), maka

$$\bar{X} \approx N\!\left(\mu, \frac{\sigma^2}{n}\right).$$

Inilah **teorema limit pusat**. Rasa satu butir sayur bisa sangat beragam, tetapi rata-rata satu sendok besar hampir selalu berbentuk lonceng. Jika $\sigma^2$ tidak diketahui dan $n$ besar, pakai $s^2$ sebagai gantinya.

### Uji hipotesis untuk rata-rata (uji $z$)

1. **Hipotesis nol** $H_0: \mu = \mu_0$ adalah klaim yang dianggap benar sampai ada bukti kuat (resep bilang "pas").
2. **Hipotesis alternatif** $H_1$ adalah dugaan tandingan:
   - $\mu < \mu_0$ atau $\mu > \mu_0$: **uji satu arah**.
   - $\mu \ne \mu_0$: **uji dua arah**.
3. **Tingkat signifikansi** $\alpha$ (misalnya 5%) adalah peluang menolak $H_0$ padahal $H_0$ benar. Ini batas risiko salah tuduh yang kita terima.
4. **Statistik uji**, dengan anggapan $H_0$ benar:
$$z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}.$$
5. **Nilai-p** adalah peluang, dengan anggapan $H_0$ benar, mendapat hasil sampel **seekstrem atau lebih ekstrem** dari yang teramati, ke arah $H_1$. Untuk uji dua arah, peluang satu ekor dikali 2.
6. **Keputusan.** Tolak $H_0$ jika nilai-p $\le \alpha$, atau setara, jika $z$ jatuh di **daerah kritis**. Nilai kritis yang umum: satu arah 5% → $1{,}6449$; satu arah 1% → $2{,}3263$; dua arah 5% → $\pm 1{,}96$.
7. **Kesimpulan dalam konteks.** "Ada cukup bukti pada taraf 5% bahwa ..." atau "Tidak ada cukup bukti ...". Tidak menolak $H_0$ **tidak** sama dengan membuktikan $H_0$ benar.

## Contoh langkah demi langkah

### Contoh 1: Rata-rata sampel lebih stabil

**Soal.** Massa telur ayam $X \sim N(60, 25)$ gram. (a) Tentukan peluang satu telur lebih dari 62 g. (b) Untuk sampel acak 16 telur, tentukan peluang rata-ratanya lebih dari 62 g.

1. **Langkah 1: Satu telur.** $\sigma = 5$, $z = \frac{62 - 60}{5} = 0{,}4$. $P(X > 62) = 1 - \Phi(0{,}4) = 1 - 0{,}6554 = 0{,}3446$.
2. **Langkah 2: Distribusi rata-rata sampel.** Populasi normal, jadi $\bar{X} \sim N\!\left(60, \frac{25}{16}\right)$, dengan simpangan baku $\frac{5}{4} = 1{,}25$.
3. **Langkah 3: Hitung (b).** $z = \frac{62 - 60}{1{,}25} = 1{,}6$. $P(\bar{X} > 62) = 1 - \Phi(1{,}6) = 1 - 0{,}9452 = 0{,}0548$.
4. **Cek jawaban.** Satu sendok besar (16 telur) jauh lebih jarang menyimpang dari rata-rata dibanding satu butir. Peluang turun dari 0,34 menjadi 0,05, sesuai harapan.

**Jawaban:** (a) 0,3446; (b) 0,0548.

### Contoh 2: Teorema limit pusat

**Soal.** Waktu tunggu ojek daring di suatu kawasan memiliki rata-rata 8 menit dan simpangan baku 6 menit. Distribusinya miring, tidak normal. Untuk sampel acak 40 pesanan, tentukan peluang rata-rata waktu tunggunya kurang dari 7 menit.

1. **Langkah 1: Pilih alat.** Populasi tidak normal, tetapi $n = 40$ besar. Pakai teorema limit pusat.
2. **Langkah 2: Tulis distribusinya.** $\bar{X} \approx N\!\left(8, \frac{36}{40}\right)$, dengan simpangan baku $\frac{6}{\sqrt{40}} \approx 0{,}9487$.
3. **Langkah 3: Standardisasi.** $z = \frac{7 - 8}{0{,}9487} \approx -1{,}054$.
4. **Langkah 4: Baca tabel.** $P(\bar{X} < 7) \approx \Phi(-1{,}054) = 1 - 0{,}8541 = 0{,}1459$.
5. **Cek jawaban.** 7 menit kurang lebih satu simpangan baku $\bar{X}$ di bawah rata-rata. Peluang di bawah $\mu - \sigma$ kira-kira 16%, dekat dengan 14,6%.

**Jawaban:** sekitar 0,146.

### Contoh 3: Uji satu arah untuk klaim pabrik

**Soal.** Pabrik mi instan mengklaim berat bersih rata-rata 75 g dengan simpangan baku 3 g. Lembaga konsumen menduga beratnya kurang. Sampel acak 36 bungkus memberi $\bar{x} = 74{,}1$ g. Ujilah pada taraf signifikansi 5% dan 1%.

1. **Langkah 1: Tulis hipotesis.** $H_0: \mu = 75$, $H_1: \mu < 75$ (satu arah, karena dugaan "kurang").
2. **Langkah 2: Distribusi di bawah $H_0$.** $n = 36$ besar, jadi $\bar{X} \approx N\!\left(75, \frac{9}{36}\right)$, simpangan baku $0{,}5$.
3. **Langkah 3: Statistik uji.** $z = \frac{74{,}1 - 75}{0{,}5} = -1{,}8$.
4. **Langkah 4: Nilai-p.** $P(Z \le -1{,}8) = 1 - \Phi(1{,}8) = 1 - 0{,}9641 = 0{,}0359$.
5. **Langkah 5: Putuskan.** Pada 5%: $0{,}0359 \le 0{,}05$, tolak $H_0$. Pada 1%: $0{,}0359 > 0{,}01$, jangan tolak $H_0$.
6. **Langkah 6: Kesimpulan dalam konteks.** Pada taraf 5% ada cukup bukti bahwa rata-rata berat kurang dari 75 g. Pada taraf 1% buktinya belum cukup.
7. **Cek jawaban.** Pakai nilai kritis: daerah kritis 5% adalah $z \le -1{,}6449$, dan $-1{,}8$ masuk. Daerah kritis 1% adalah $z \le -2{,}3263$, dan $-1{,}8$ tidak masuk. Keputusan sama dengan cara nilai-p.

**Jawaban:** Tolak $H_0$ pada 5%, tidak tolak pada 1%.

### Contoh 4: Uji dua arah, variansi tidak diketahui

**Soal.** Teh botol dikemas dengan isi tertulis 250 ml. Petugas memeriksa apakah rata-rata isinya berbeda dari 250 ml. Untuk sampel acak 50 botol diperoleh $\sum (x - 250) = -32$ dan $\sum (x - 250)^2 = 420$. Ujilah pada taraf 5%.

1. **Langkah 1: Tulis hipotesis.** $H_0: \mu = 250$, $H_1: \mu \ne 250$ (dua arah, karena "berbeda").
2. **Langkah 2: Taksir rata-rata.** $\bar{x} = 250 + \frac{-32}{50} = 249{,}36$ ml.
3. **Langkah 3: Taksir variansi.** $s^2 = \frac{1}{49}\left[420 - \frac{(-32)^2}{50}\right] = \frac{420 - 20{,}48}{49} = \frac{399{,}52}{49} \approx 8{,}1535$, jadi $s \approx 2{,}8554$.
4. **Langkah 4: Statistik uji.** $n = 50$ besar, jadi pakai teorema limit pusat dengan $s$ sebagai pengganti $\sigma$:
$$z = \frac{249{,}36 - 250}{2{,}8554/\sqrt{50}} = \frac{-0{,}64}{0{,}4038} \approx -1{,}585.$$
5. **Langkah 5: Nilai-p dua arah.** $P(Z \le -1{,}585) = 1 - \Phi(1{,}585) = 1 - 0{,}9435 = 0{,}0565$. Nilai-p $= 2 \times 0{,}0565 = 0{,}113$.
6. **Langkah 6: Putuskan.** $0{,}113 > 0{,}05$, jadi $H_0$ tidak ditolak. Tidak ada cukup bukti pada taraf 5% bahwa rata-rata isi berbeda dari 250 ml.
7. **Cek jawaban.** Daerah kritis dua arah 5% adalah $|z| \ge 1{,}96$. Karena $|-1{,}585| < 1{,}96$, keputusan sama.

**Jawaban:** $H_0$ tidak ditolak; nilai-p $\approx 0{,}113$.

## Kesalahan yang sering terjadi

- **Memakai $\sigma$ alih-alih $\frac{\sigma}{\sqrt{n}}$.** Pada Contoh 1(b), menulis $z = \frac{62 - 60}{5}$. Untuk rata-rata sampel, simpangan bakunya $\frac{\sigma}{\sqrt{n}}$.
- **Membagi dengan $n$ saat menaksir variansi.** Menulis $s^2 = \frac{399{,}52}{50}$. Taksiran tak bias memakai pembagi $n - 1 = 49$.
- **Lupa mengalikan 2 pada uji dua arah.** Melaporkan nilai-p 0,0565 pada Contoh 4. Untuk $H_1: \mu \ne \mu_0$, kedua ekor dihitung, jadi 0,113.
- **Menulis hipotesis dengan $\bar{x}$.** Menulis $H_0: \bar{x} = 75$. Hipotesis selalu tentang parameter populasi $\mu$, bukan hasil sampel.
- **Menyimpulkan "$H_0$ terbukti benar".** Tidak menolak $H_0$ hanya berarti buktinya belum cukup. Sendok yang tidak terlalu asin belum membuktikan resepnya pas.

## Ringkasan

- Sampel acak: setiap anggota peluangnya sama dan saling bebas. Taksiran tak bias: $\bar{x}$ dan $s^2 = \frac{1}{n-1}\left[\sum x^2 - \frac{(\sum x)^2}{n}\right]$.
- $E(\bar{X}) = \mu$ dan $\operatorname{Var}(\bar{X}) = \frac{\sigma^2}{n}$. Jika populasi normal, $\bar{X}$ tepat normal.
- Teorema limit pusat: untuk $n$ besar, $\bar{X} \approx N\!\left(\mu, \frac{\sigma^2}{n}\right)$ apa pun bentuk populasinya.
- Uji $z$: $z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}$; tolak $H_0$ jika nilai-p $\le \alpha$ atau $z$ di daerah kritis.
- Langkah uji: hipotesis → distribusi di bawah $H_0$ → statistik uji → nilai-p atau nilai kritis → keputusan → kesimpulan dalam konteks.

## Cek pemahaman

1. $X \sim N(40, 36)$. Tuliskan distribusi rata-rata sampel acak berukuran 9.
2. Dari soal nomor 1, tentukan $P(\bar{X} > 42)$.
3. Sebuah uji menghasilkan nilai-p 0,03. Apa keputusannya pada taraf 5% dan pada taraf 1%?
4. Diketahui $\sigma = 20$. Sampel acak 64 data memberi $\bar{x} = 505$. Ujilah $H_0: \mu = 500$ melawan $H_1: \mu > 500$ pada taraf 5%.
5. Sampel acak: 12, 15, 11, 14, 13. Tentukan taksiran tak bias untuk rata-rata dan variansi populasi.

### Kunci jawaban

1. $\bar{X} \sim N\!\left(40, \frac{36}{9}\right) = N(40, 4)$, karena populasi normal.
2. 0,1587. Simpangan baku $\bar{X}$ adalah 2, jadi $z = 1$ dan $1 - \Phi(1) = 1 - 0{,}8413 = 0{,}1587$.
3. Pada 5%: $0{,}03 \le 0{,}05$, tolak $H_0$. Pada 1%: $0{,}03 > 0{,}01$, tidak tolak $H_0$.
4. $z = \frac{505 - 500}{20/8} = 2$; nilai-p $= 1 - \Phi(2) = 0{,}0228 \le 0{,}05$, jadi tolak $H_0$: ada cukup bukti bahwa $\mu > 500$.
5. $\bar{x} = \frac{65}{5} = 13$; $\sum(x - 13)^2 = 1 + 4 + 4 + 1 + 0 = 10$, jadi $s^2 = \frac{10}{4} = 2{,}5$.
