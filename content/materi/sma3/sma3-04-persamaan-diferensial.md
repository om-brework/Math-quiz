---
id: sma3-04-persamaan-diferensial
judul: Persamaan Diferensial
jenjang: sma3
moe: "H2 Mathematics 9758 · Pure Mathematics · Calculus (Differential Equations)"
prasyarat: [sma3-03-teknik-integral, sma1-10-eksponen-logaritma]
durasi_menit: 80
---

## Kenapa belajar ini?

Di dunia nyata, kita sering tahu **aturan perubahannya**, bukan rumus besarannya. Contohnya: "teh panas mendingin makin lambat saat suhunya mendekati suhu ruangan", atau "bakteri bertambah sebanding dengan jumlahnya". Persamaan diferensial menerjemahkan aturan seperti itu ke matematika, lalu kita menyelesaikannya untuk meramal keadaan di masa depan.

## Analogi

Bayangkan kamu mendaki di **Gunung Batur** dalam kabut tebal. Kamu tidak punya peta, tetapi punya **kompas ajaib**: di setiap titik, kompas itu memberi tahu **arah dan kemiringan** jalur yang harus diikuti.

- **Persamaan diferensial** adalah kompas itu: ia memberi $\frac{dy}{dx}$ di setiap titik.
- **Menyelesaikan** persamaan diferensial berarti **menelusuri jejak** lengkap yang mengikuti kompas, yaitu mencari $y$ sebagai fungsi $x$.
- Dari titik awal yang berbeda, jejaknya berbeda tetapi bentuknya serupa. Semua jejak itu disebut **solusi umum** (satu keluarga kurva, dibedakan oleh konstanta $C$).
- Jika **titik awal** diketahui, hanya satu jejak yang cocok. Itulah **solusi khusus**.

## Konsep

### Apa itu persamaan diferensial?

Persamaan diferensial (PD) adalah persamaan yang memuat turunan. **Orde** adalah turunan tertinggi yang muncul. Materi ini membahas PD orde satu, misalnya
$$ \frac{dy}{dx} = 6x^2 - 2x, \qquad \frac{dy}{dx} = 2xy, \qquad \frac{dT}{dt} = -k(T - 26) $$

### Pemisahan variabel

Jika ruas kanan bisa ditulis sebagai hasil kali fungsi $x$ dan fungsi $y$:
$$ \frac{dy}{dx} = g(x)\,h(y) $$
maka kumpulkan semua $y$ di kiri dan semua $x$ di kanan, lalu integralkan kedua ruas:
$$ \int \frac{1}{h(y)}\,dy = \int g(x)\,dx $$
Mengapa sah? Jika $H$ adalah antiturunan $\frac{1}{h}$, aturan rantai memberi $\frac{d}{dx}H(y) = \frac{1}{h(y)}\frac{dy}{dx} = g(x)$. Mengintegralkan terhadap $x$ menghasilkan persamaan di atas.

Kasus khusus:
- $\frac{dy}{dx} = f(x)$: langsung integralkan, $y = \int f(x)\,dx$.
- $\frac{dy}{dx} = f(y)$: pisahkan menjadi $\int \frac{1}{f(y)}\,dy = \int 1\,dx$.

Cukup tulis **satu** konstanta $C$, di ruas $x$.

### Solusi umum dan solusi khusus

- **Solusi umum** memuat konstanta sembarang. Grafiknya adalah keluarga kurva.
- **Solusi khusus** didapat dengan memasukkan syarat awal, misalnya $y = 3$ saat $x = 0$, untuk menentukan $C$.

Trik untuk eksponen: dari $\ln|y| = x^2 + C$ didapat $|y| = e^C e^{x^2}$, jadi $y = Ae^{x^2}$ dengan $A = \pm e^C$ (atau $A = 0$, yang juga solusi).

### Pemodelan

Menerjemahkan kalimat ke PD:

```
Kalimat                                              PD
"laju bertambah sebanding dengan jumlahnya"          dP/dt = kP,  k > 0
"laju berkurang sebanding dengan jumlahnya"          dN/dt = -kN, k > 0
"laju pendinginan sebanding dengan selisih           dT/dt = -k(T - T_s)
 suhu benda dan suhu ruangan T_s"
"masuk tetap a per menit, keluar sebanding jumlah"   dx/dt = a - kx
```

Langkah pemodelan: tentukan variabel dan satuannya, tulis PD, selesaikan, pakai data untuk mencari konstanta, lalu tafsirkan jawabannya (termasuk perilaku jangka panjang).

## Contoh langkah demi langkah

### Contoh 1: Integral langsung

**Soal.** Selesaikan $\dfrac{dy}{dx} = 6x^2 - 2x$ dengan $y = 4$ saat $x = 1$.

1. **Langkah 1: Kenali jenis.** Ruas kanan hanya memuat $x$, jadi integralkan langsung.
2. **Langkah 2: Solusi umum.** $y = 2x^3 - x^2 + C$.
3. **Langkah 3: Pakai titik awal.** $4 = 2 - 1 + C$, jadi $C = 3$.
4. **Cek jawaban.** $y = 2x^3 - x^2 + 3$ memberi $y' = 6x^2 - 2x$ dan $y(1) = 2 - 1 + 3 = 4$. Keduanya cocok.

**Jawaban:** $y = 2x^3 - x^2 + 3$.

### Contoh 2: Pemisahan variabel dan keluarga kurva

**Soal.** Tentukan solusi umum $\dfrac{dy}{dx} = 2xy$, lalu solusi khusus yang melalui $(0, 3)$.

1. **Langkah 1: Pisahkan.** $\displaystyle\int \frac{1}{y}\,dy = \int 2x\,dx$.
2. **Langkah 2: Integralkan.** $\ln|y| = x^2 + C$.
3. **Langkah 3: Bebaskan $y$.** $|y| = e^C e^{x^2}$, jadi solusi umum $y = Ae^{x^2}$, $A$ konstanta. Setiap nilai $A$ memberi satu jejak di keluarga kurva.
4. **Langkah 4: Pakai titik awal.** $3 = Ae^0$, jadi $A = 3$.
5. **Cek jawaban.** $y = 3e^{x^2}$ memberi $y' = 3e^{x^2} \cdot 2x = 2x \cdot y$. Dan $y(0) = 3$. Benar.

**Jawaban:** Umum $y = Ae^{x^2}$; khusus $y = 3e^{x^2}$.

### Contoh 3: Teh panas di warung

**Soal.** Segelas teh bersuhu $90^\circ$C diletakkan di ruangan bersuhu $26^\circ$C. Laju penurunan suhu sebanding dengan selisih suhu teh dan ruangan. Setelah 5 menit suhunya $74^\circ$C. Kapan suhunya mencapai $50^\circ$C?

1. **Langkah 1: Tulis model.** $\dfrac{dT}{dt} = -k(T - 26)$, $k > 0$, dengan $T(0) = 90$.
2. **Langkah 2: Pisahkan dan integralkan.** $\displaystyle\int \frac{1}{T - 26}\,dT = \int -k\,dt \Rightarrow \ln(T - 26) = -kt + C$. (Nilai mutlak tidak perlu karena $T > 26$.)
3. **Langkah 3: Bebaskan $T$.** $T - 26 = Ae^{-kt}$. Dari $T(0) = 90$: $A = 64$. Jadi $T = 26 + 64e^{-kt}$.
4. **Langkah 4: Cari $k$ dari data.** $74 = 26 + 64e^{-5k} \Rightarrow e^{-5k} = \frac{48}{64} = \frac{3}{4} \Rightarrow k = \frac{1}{5}\ln\frac{4}{3} \approx 0{,}0575$.
5. **Langkah 5: Jawab pertanyaan.** $50 = 26 + 64e^{-kt} \Rightarrow e^{-kt} = \frac{24}{64} = \frac{3}{8} \Rightarrow t = \dfrac{\ln(8/3)}{k} = \dfrac{5\ln(8/3)}{\ln(4/3)} \approx 17{,}0$ menit.
6. **Cek jawaban.** $T(17{,}05) = 26 + 64\left(\frac{3}{4}\right)^{17{,}05/5} \approx 26 + 64(0{,}375) = 50$. Masuk akal juga: dari 90 ke 74 butuh 5 menit, dari 74 ke 50 butuh lebih lama karena pendinginan makin lambat. Untuk $t \to \infty$, $T \to 26$, suhu ruangan.

**Jawaban:** Sekitar 17 menit setelah teh diletakkan.

### Contoh 4: Obat lewat infus

**Soal.** Seorang pasien menerima obat lewat infus dengan laju tetap 2 mg per menit. Tubuh membuang obat dengan laju $0{,}1x$ mg per menit, dengan $x$ jumlah obat dalam darah (mg). Awalnya $x = 0$. Tentukan $x$ sebagai fungsi waktu $t$ (menit), dan jumlah obat dalam jangka panjang.

1. **Langkah 1: Tulis model.** Laju bersih = masuk − keluar: $\dfrac{dx}{dt} = 2 - 0{,}1x$.
2. **Langkah 2: Pisahkan.** $\displaystyle\int \frac{1}{2 - 0{,}1x}\,dx = \int 1\,dt$.
3. **Langkah 3: Integralkan.** Bentuk $(ax + b)$ dengan $a = -0{,}1$: $-10\ln|2 - 0{,}1x| = t + C$.
4. **Langkah 4: Pakai titik awal.** $t = 0$, $x = 0$: $C = -10\ln 2$. Maka $\ln|2 - 0{,}1x| = \ln 2 - \frac{t}{10}$.
5. **Langkah 5: Bebaskan $x$.** Awalnya $2 - 0{,}1x = 2 > 0$, jadi $2 - 0{,}1x = 2e^{-t/10}$, sehingga
$$ x = 20\left(1 - e^{-t/10}\right) $$
6. **Langkah 6: Jangka panjang.** Saat $t \to \infty$, $e^{-t/10} \to 0$, jadi $x \to 20$ mg.
7. **Cek jawaban.** $x' = 2e^{-t/10}$, dan $2 - 0{,}1x = 2 - 2 + 2e^{-t/10} = 2e^{-t/10}$. Sama. Juga $x(0) = 0$. Nilai 20 mg masuk akal: pada saat itu obat keluar $0{,}1 \times 20 = 2$ mg/menit, sama dengan yang masuk.

**Jawaban:** $x = 20\left(1 - e^{-t/10}\right)$; jangka panjang mendekati 20 mg.

## Kesalahan yang sering terjadi

- **Lupa konstanta, atau menambahkannya terlambat.** Menulis $\ln y = x^2$ lalu baru menambah $+C$ setelah menjadi $y = e^{x^2} + C$. Itu keliru: $C$ harus ditambahkan **saat mengintegralkan**, sehingga menjadi faktor pengali $A$.
- **Memisahkan yang tidak bisa dipisah.** $\frac{dy}{dx} = x + y$ tidak bisa ditulis sebagai $g(x)h(y)$. Pemisahan variabel hanya untuk bentuk hasil kali.
- **Salah tanda pada model.** "Berkurang sebanding" harus diberi tanda minus, $\frac{dN}{dt} = -kN$ dengan $k > 0$. Cek: apakah besaran memang turun dalam model?
- **Lupa faktor saat integral bentuk $(ax + b)$.** $\int \frac{1}{2 - 0{,}1x}\,dx = -10\ln|2 - 0{,}1x|$, bukan $\ln|2 - 0{,}1x|$. Bagi dengan $a = -0{,}1$.
- **Tidak menafsirkan jawaban.** Soal pemodelan biasanya bertanya perilaku jangka panjang atau waktu. Jawab dengan kalimat dan satuan.

## Ringkasan

- PD orde satu memberi "kompas" $\frac{dy}{dx}$; menyelesaikannya berarti mencari jejak $y$.
- Pemisahan variabel: $\frac{dy}{dx} = g(x)h(y) \Rightarrow \int \frac{1}{h(y)}\,dy = \int g(x)\,dx$.
- Solusi umum memuat konstanta (keluarga kurva); syarat awal memberi solusi khusus.
- $\ln|y| = f(x) + C \Rightarrow y = Ae^{f(x)}$.
- Pemodelan: kalimat → PD → selesaikan → cari konstanta dari data → tafsirkan.

## Cek pemahaman

1. Selesaikan $\dfrac{dy}{dx} = 3x^2 + 4$ dengan $y(0) = -1$.
2. Tentukan solusi umum $\dfrac{dy}{dx} = \dfrac{y}{x}$ untuk $x > 0$.
3. Selesaikan $\dfrac{dy}{dx} = xe^{-y}$ dengan $y(0) = 0$.
4. Jumlah bakteri $P$ memenuhi $\dfrac{dP}{dt} = kP$. Awalnya ada 500 bakteri dan jumlahnya menjadi dua kali lipat setiap 3 jam. Berapa jumlahnya setelah 6 jam, dan berapa $k$?
5. Air di tangki bocor sehingga laju turunnya tinggi air $h$ (m) sebanding dengan $\sqrt{h}$. Awalnya $h = 16$, dan setelah 2 jam $h = 9$. Tentukan $h$ sebagai fungsi $t$ dan kapan tangki kosong.

### Kunci jawaban

1. $y = x^3 + 4x - 1$. Integralkan, lalu $y(0) = C = -1$.
2. $y = Ax$. $\int \frac{1}{y}\,dy = \int \frac{1}{x}\,dx$ memberi $\ln|y| = \ln x + C$.
3. $y = \ln\left(\dfrac{x^2}{2} + 1\right)$. $\int e^y\,dy = \int x\,dx$ memberi $e^y = \frac{x^2}{2} + C$, dan $y(0) = 0$ memberi $C = 1$.
4. $2000$ bakteri, $k = \dfrac{\ln 2}{3} \approx 0{,}231$ per jam. $P = 500e^{kt}$ dengan $e^{3k} = 2$; setelah 6 jam $500 \times 2^2$.
5. $h = \left(4 - \dfrac{t}{2}\right)^2$, kosong saat $t = 8$ jam. $\frac{dh}{dt} = -k\sqrt{h}$ memberi $2\sqrt{h} = -kt + C$; $h(0) = 16$ memberi $C = 8$, $h(2) = 9$ memberi $k = 1$.
