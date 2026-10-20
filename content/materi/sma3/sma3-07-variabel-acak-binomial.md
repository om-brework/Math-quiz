---
id: sma3-07-variabel-acak-binomial
judul: Variabel Acak Diskrit dan Distribusi Binomial
jenjang: sma3
moe: "H2 Mathematics 9758 · Probability and Statistics · Discrete random variables"
prasyarat: [sma3-06-peluang-lanjut, sma3-05-kaidah-pencacahan, sma1-04-ukuran-penyebaran]
durasi_menit: 70
---

## Kenapa belajar ini?

Apakah permainan di pasar malam menguntungkan pemainnya? Berapa benih yang kira-kira tumbuh jika petani menanam 15 benih? Variabel acak dan distribusi binomial menjawab pertanyaan seperti ini dengan angka: berapa rata-ratanya dalam jangka panjang dan seberapa besar variasinya.

## Analogi

Bayangkan sebuah **stan permainan di pasar malam**. Setiap kali bermain, hadiahnya acak. Satu putaran tidak bisa ditebak, tetapi jika permainan diulang **ribuan kali**, rata-rata hadiah per putaran menjadi stabil. Angka stabil itu adalah **nilai harapan**.

Distribusi binomial adalah keadaan saat kamu memainkan **permainan yang sama** sebanyak $n$ kali, setiap putaran hanya **menang atau kalah**, dan putaran satu tidak memengaruhi putaran lain.

## Konsep

### Variabel acak diskrit dan distribusi peluang

**Variabel acak** $X$ adalah aturan yang memberi angka pada setiap hasil percobaan acak. $X$ **diskrit** jika nilainya dapat didaftar, misalnya 0, 1, 2, dan seterusnya.

**Distribusi peluang** $X$ adalah daftar semua nilai $x$ beserta $P(X = x)$. Syaratnya:

$$0 \le P(X = x) \le 1 \quad\text{dan}\quad \sum_{x} P(X = x) = 1.$$

### Nilai harapan

Misalkan permainan diulang $N$ kali. Nilai $x$ muncul kira-kira $N \cdot P(X = x)$ kali. Rata-rata hadiahnya:

$$\frac{\sum x \cdot N\,P(X=x)}{N} = \sum x\,P(X = x).$$

Inilah definisi **nilai harapan** (rata-rata jangka panjang):

$$E(X) = \mu = \sum x\,P(X = x).$$

### Variansi

Variansi mengukur seberapa jauh nilai $X$ menyebar dari $\mu$, sama seperti simpangan baku pada data:

$$\operatorname{Var}(X) = E\big[(X - \mu)^2\big].$$

Uraikan kuadratnya, lalu pakai $\sum P(X=x) = 1$ dan $\sum x P(X=x) = \mu$:

$$E\big[(X-\mu)^2\big] = \sum (x^2 - 2\mu x + \mu^2)P(X=x) = E(X^2) - 2\mu^2 + \mu^2.$$

Jadi rumus hitung yang praktis adalah

$$\operatorname{Var}(X) = E(X^2) - [E(X)]^2, \qquad E(X^2) = \sum x^2 P(X = x).$$

Simpangan baku adalah $\sqrt{\operatorname{Var}(X)}$.

### Mengubah skala

Jika setiap hadiah dikali $a$ lalu ditambah $b$, rata-rata ikut berubah dengan cara yang sama. Penyebaran hanya terpengaruh oleh perkalian, dan dalam bentuk kuadrat:

$$E(aX + b) = aE(X) + b, \qquad \operatorname{Var}(aX + b) = a^2\operatorname{Var}(X).$$

Konstanta $b$ menggeser semua nilai bersama-sama, jadi jaraknya ke rata-rata tidak berubah.

### Distribusi binomial

$X \sim B(n, p)$ jika $X$ adalah banyak "sukses" dalam percobaan yang memenuhi empat syarat:

1. Banyak percobaan $n$ tetap.
2. Setiap percobaan hanya punya dua hasil: sukses atau gagal.
3. Peluang sukses $p$ sama di setiap percobaan.
4. Percobaan-percobaan saling bebas.

**Menurunkan rumusnya.** Satu urutan tertentu dengan $r$ sukses dan $n - r$ gagal, misalnya SS...SGG...G, punya peluang $p^r(1-p)^{n-r}$ karena percobaan saling bebas. Banyak urutan seperti itu sama dengan banyak cara memilih posisi $r$ sukses dari $n$ posisi, yaitu $\binom{n}{r}$. Maka

$$P(X = r) = \binom{n}{r} p^r (1-p)^{n-r}, \qquad r = 0, 1, \dots, n.$$

**Rata-rata dan variansi.** Tulis $X = X_1 + X_2 + \cdots + X_n$, dengan $X_i = 1$ jika percobaan ke-$i$ sukses dan $0$ jika gagal. Untuk satu $X_i$: $E(X_i) = p$ dan $E(X_i^2) = p$, jadi $\operatorname{Var}(X_i) = p - p^2 = p(1-p)$. Nilai harapan selalu bisa dijumlahkan, dan variansi bisa dijumlahkan karena $X_i$ saling bebas. Hasilnya

$$E(X) = np, \qquad \operatorname{Var}(X) = np(1-p).$$

**Kalkulator.** Kalkulator grafik menghitung $P(X = r)$ (binompdf) dan $P(X \le r)$ (binomcdf). Untuk $P(X \ge r)$, pakai $1 - P(X \le r - 1)$.

## Contoh langkah demi langkah

### Contoh 1: Distribusi dengan konstanta

**Soal.** Variabel acak $X$ memiliki $P(X = x) = kx$ untuk $x = 1, 2, 3, 4$. Tentukan $k$, $E(X)$, dan $\operatorname{Var}(X)$.

1. **Langkah 1: Pakai syarat jumlah peluang = 1.** $k(1 + 2 + 3 + 4) = 10k = 1$, jadi $k = \frac{1}{10}$.
2. **Langkah 2: Buat tabel.**

```
x          1     2     3     4
P(X = x)  0,1   0,2   0,3   0,4
```

3. **Langkah 3: Hitung $E(X)$.** $1(0{,}1) + 2(0{,}2) + 3(0{,}3) + 4(0{,}4) = 0{,}1 + 0{,}4 + 0{,}9 + 1{,}6 = 3$.
4. **Langkah 4: Hitung $E(X^2)$.** $1(0{,}1) + 4(0{,}2) + 9(0{,}3) + 16(0{,}4) = 0{,}1 + 0{,}8 + 2{,}7 + 6{,}4 = 10$.
5. **Langkah 5: Hitung variansi.** $\operatorname{Var}(X) = 10 - 3^2 = 1$.
6. **Cek jawaban.** Pakai definisi: $\sum (x-3)^2P(X=x) = 4(0{,}1) + 1(0{,}2) + 0(0{,}3) + 1(0{,}4) = 1$. Sama.

**Jawaban:** $k = \frac{1}{10}$, $E(X) = 3$, $\operatorname{Var}(X) = 1$.

### Contoh 2: Apakah permainan ini adil?

**Soal.** Di pasar malam, sekali bermain membayar Rp5.000, lalu kamu melempar satu dadu. Mata 6 mendapat hadiah Rp15.000, mata 4 atau 5 mendapat Rp5.000, mata lainnya tidak mendapat apa-apa. Berapa rata-rata untung atau rugi pemain per permainan?

1. **Langkah 1: Definisikan variabel.** $X$ = hadiah (rupiah). $P(X = 15\,000) = \frac{1}{6}$, $P(X = 5\,000) = \frac{2}{6}$, $P(X = 0) = \frac{3}{6}$.
2. **Langkah 2: Hitung nilai harapan hadiah.**
$$E(X) = 15\,000 \cdot \tfrac{1}{6} + 5\,000 \cdot \tfrac{2}{6} + 0 = 2\,500 + 1\,666{,}67 = 4\,166{,}67.$$
3. **Langkah 3: Ubah ke keuntungan bersih.** Untung $G = X - 5\,000$. Dengan $E(aX + b) = aE(X) + b$: $E(G) = 4\,166{,}67 - 5\,000 = -833{,}33$.
4. **Langkah 4: Tafsirkan.** Rata-rata jangka panjang, pemain rugi sekitar Rp833 per permainan. Permainan ini tidak adil; pemilik stan untung.
5. **Cek jawaban.** Bayangkan 6.000 permainan: kira-kira 1.000 kali dapat Rp15.000 dan 2.000 kali dapat Rp5.000, total hadiah Rp25.000.000. Uang masuk $6\,000 \times 5\,000 = $ Rp30.000.000. Rugi pemain Rp5.000.000, yaitu $\frac{5\,000\,000}{6\,000} \approx 833$ per permainan. Cocok.

**Jawaban:** Pemain rata-rata rugi sekitar Rp833 per permainan.

### Contoh 3: Menebak soal pilihan ganda

**Soal.** Ujian terdiri atas 10 soal pilihan ganda, masing-masing 4 pilihan. Andi menebak semua jawaban secara acak. Tentukan peluang Andi benar tepat 3 soal, peluang benar paling sedikit 3 soal, serta rata-rata dan variansi banyak jawaban benar.

1. **Langkah 1: Cek syarat binomial.** $n = 10$ tetap; benar/salah; $p = \frac{1}{4}$ sama tiap soal; tebakan saling bebas. Jadi $X \sim B(10;\ 0{,}25)$.
2. **Langkah 2: Tepat 3.**
$$P(X = 3) = \binom{10}{3}(0{,}25)^3(0{,}75)^7 = 120 \times 0{,}015625 \times 0{,}13348 \approx 0{,}2503.$$
3. **Langkah 3: Paling sedikit 3, pakai komplemen.** Nilai dari kalkulator: $P(X=0) = 0{,}0563$, $P(X=1) = 0{,}1877$, $P(X=2) = 0{,}2816$. Jadi $P(X \le 2) = 0{,}5256$ dan $P(X \ge 3) = 1 - 0{,}5256 = 0{,}4744$.
4. **Langkah 4: Rata-rata dan variansi.** $E(X) = 10 \times 0{,}25 = 2{,}5$; $\operatorname{Var}(X) = 10 \times 0{,}25 \times 0{,}75 = 1{,}875$.
5. **Cek jawaban.** $P(X=0) = 0{,}75^{10} \approx 0{,}0563$, sesuai nilai kalkulator. Rata-rata 2,5 juga masuk akal: seperempat dari 10 soal.

**Jawaban:** $P(X = 3) \approx 0{,}2503$; $P(X \ge 3) \approx 0{,}4744$; $E(X) = 2{,}5$; $\operatorname{Var}(X) = 1{,}875$.

### Contoh 4: Benih cabai Pak Wayan

**Soal.** Peluang sebutir benih cabai tumbuh adalah 0,8, saling bebas antarbenih. (a) Pak Wayan menanam 15 benih. Tentukan peluang paling sedikit 13 benih tumbuh, serta rata-rata dan simpangan baku banyak benih yang tumbuh. (b) Berapa benih paling sedikit yang harus ditanam agar peluang **paling sedikit satu benih gagal tumbuh** lebih dari 0,95?

1. **Langkah 1: Model.** $X$ = banyak benih tumbuh, $X \sim B(15;\ 0{,}8)$.
2. **Langkah 2: Hitung peluang (a).** Nilai dari kalkulator: $P(X=13) = 0{,}2309$, $P(X=14) = 0{,}1319$, $P(X=15) = 0{,}0352$. Jumlahnya $P(X \ge 13) = 0{,}3980$.
3. **Langkah 3: Rata-rata dan simpangan baku.** $E(X) = 15 \times 0{,}8 = 12$; $\operatorname{Var}(X) = 15 \times 0{,}8 \times 0{,}2 = 2{,}4$; simpangan baku $\sqrt{2{,}4} \approx 1{,}55$.
4. **Langkah 4: Susun pertidaksamaan (b).** Untuk $n$ benih, "paling sedikit satu gagal" adalah komplemen dari "semua tumbuh". Syaratnya $1 - 0{,}8^n > 0{,}95$, yaitu $0{,}8^n < 0{,}05$.
5. **Langkah 5: Selesaikan dengan logaritma.** $n \ln 0{,}8 < \ln 0{,}05$. Karena $\ln 0{,}8 < 0$, tanda berbalik: $n > \frac{\ln 0{,}05}{\ln 0{,}8} \approx 13{,}43$. Jadi $n = 14$.
6. **Cek jawaban.** $0{,}8^{13} \approx 0{,}0550 > 0{,}05$ (belum cukup), sedangkan $0{,}8^{14} \approx 0{,}0440 < 0{,}05$ (cukup). Jadi 14 adalah yang terkecil.

**Jawaban:** (a) $P(X \ge 13) \approx 0{,}398$, rata-rata 12 benih, simpangan baku $\approx 1{,}55$. (b) 14 benih.

## Kesalahan yang sering terjadi

- **Menulis $\operatorname{Var}(X) = E(X^2) - E(X)$.** Yang dikurangi adalah **kuadrat** rata-rata, $[E(X)]^2$. Pada Contoh 1, $10 - 3 = 7$ itu salah; yang benar $10 - 9 = 1$.
- **Menganggap konstanta memengaruhi variansi.** Menulis $\operatorname{Var}(3X - 1) = 3\operatorname{Var}(X) - 1$. Yang benar $\operatorname{Var}(3X - 1) = 9\operatorname{Var}(X)$.
- **Salah komplemen.** Menulis $P(X \ge 3) = 1 - P(X \le 3)$. Komplemen dari "paling sedikit 3" adalah "paling banyak 2", jadi $1 - P(X \le 2)$.
- **Memakai binomial saat peluang berubah.** Mengambil 3 bola tanpa pengembalian dari kotak kecil bukan binomial, karena $p$ berubah setelah setiap pengambilan. Selalu cek keempat syarat.
- **Membalik tanda pertidaksamaan logaritma dengan salah.** Membagi dengan $\ln 0{,}8$ yang negatif tanpa membalik tanda, sehingga mendapat $n < 13{,}43$.

## Ringkasan

- Distribusi peluang: semua $P(X=x)$ di antara 0 dan 1, jumlahnya 1.
- $E(X) = \sum x\,P(X=x)$ adalah rata-rata jangka panjang; $\operatorname{Var}(X) = E(X^2) - [E(X)]^2$.
- $E(aX+b) = aE(X)+b$ dan $\operatorname{Var}(aX+b) = a^2\operatorname{Var}(X)$.
- $X \sim B(n,p)$ jika $n$ tetap, dua hasil, $p$ tetap, dan saling bebas; $P(X=r) = \binom{n}{r}p^r(1-p)^{n-r}$.
- Untuk binomial: $E(X) = np$ dan $\operatorname{Var}(X) = np(1-p)$.

## Cek pemahaman

1. $P(X=0) = 0{,}2$, $P(X=1) = 0{,}5$, $P(X=2) = 0{,}3$. Tentukan $E(X)$ dan $\operatorname{Var}(X)$.
2. Diketahui $E(X) = 4$ dan $\operatorname{Var}(X) = 2$. Tentukan $E(3X - 1)$ dan $\operatorname{Var}(3X - 1)$.
3. $X \sim B(8;\ 0{,}5)$. Tentukan $P(X = 4)$.
4. $X \sim B(n, p)$ memiliki rata-rata 6 dan variansi 4,2. Tentukan $n$ dan $p$.
5. Sebanyak 5% lampu LED dari sebuah pabrik cacat. Satu kotak berisi 12 lampu. Tentukan peluang paling banyak 1 lampu cacat dalam satu kotak.

### Kunci jawaban

1. $E(X) = 0{,}5 + 0{,}6 = 1{,}1$; $E(X^2) = 0{,}5 + 1{,}2 = 1{,}7$; $\operatorname{Var}(X) = 1{,}7 - 1{,}21 = 0{,}49$.
2. $E(3X-1) = 3(4) - 1 = 11$ dan $\operatorname{Var}(3X-1) = 9(2) = 18$.
3. $\binom{8}{4}(0{,}5)^8 = \frac{70}{256} \approx 0{,}2734$.
4. $\frac{np(1-p)}{np} = 1 - p = \frac{4{,}2}{6} = 0{,}7$, jadi $p = 0{,}3$ dan $n = \frac{6}{0{,}3} = 20$.
5. $X \sim B(12;\ 0{,}05)$: $P(X \le 1) = 0{,}95^{12} + 12(0{,}05)(0{,}95)^{11} \approx 0{,}5404 + 0{,}3413 = 0{,}8816$.
