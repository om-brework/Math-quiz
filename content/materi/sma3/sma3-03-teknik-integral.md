---
id: sma3-03-teknik-integral
judul: Teknik Integral dan Volume Benda Putar
jenjang: sma3
moe: "H2 Mathematics 9758 · Pure Mathematics · Calculus (Integration Techniques and Definite Integrals)"
prasyarat: [sma2-06-integral, sma1-08-polinomial-pecahan-parsial]
durasi_menit: 90
---

## Kenapa belajar ini?

Rumus integral dasar hanya bisa menangani bentuk sederhana. Bentuk seperti $x e^{2x}$, $x(x^2 + 1)^3$, atau $\frac{x + 5}{(x - 1)(x + 2)}$ butuh teknik khusus. Dengan teknik ini, kita juga bisa menghitung luas lahan di antara dua kurva dan volume benda berbentuk lengkung, seperti mangkuk atau vas gerabah.

## Analogi

Bayangkan kamu seorang **tukang** dengan **kotak perkakas**. Setiap integral adalah baut yang berbeda, dan tugasmu memilih alat yang pas.

- **Substitusi** adalah **kunci pas**: dipakai saat kamu melihat sebuah "bagian dalam" beserta turunannya. Kamu mengganti sudut pandang supaya bautnya terlihat sederhana.
- **Integral parsial** adalah **obeng tukar mata**: memindahkan beban turunan dari satu faktor ke faktor lain, kebalikan aturan perkalian.
- **Pecahan parsial** adalah **tang pemotong**: memecah satu pecahan besar menjadi beberapa pecahan kecil yang masing-masing mudah.
- **Volume benda putar** adalah **mengiris timun** menjadi koin tipis: volume = jumlah volume semua koin.

Sebelum mulai, selalu tanya: "Alat mana yang cocok untuk baut ini?"

## Konsep

### Integral substitusi

Dari aturan rantai, $\frac{d}{dx}F(g(x)) = F'(g(x))\,g'(x)$. Dibalik:
$$ \int f(g(x))\,g'(x)\,dx = \int f(u)\,du, \qquad u = g(x),\ du = g'(x)\,dx $$
Tanda cocok: ada fungsi di dalam fungsi, dan turunan bagian dalam (atau kelipatannya) ikut muncul. Untuk integral tentu, **ubah batas** ke $u$ supaya tidak perlu kembali ke $x$.

### Integral parsial

Dari aturan perkalian, $(uv)' = u'v + uv'$. Integralkan kedua ruas dan susun ulang:
$$ \int u\,\frac{dv}{dx}\,dx = uv - \int v\,\frac{du}{dx}\,dx $$
Pilih $u$ yang menjadi lebih sederhana saat diturunkan. Urutan prioritas memilih $u$ (LIATE): **L**ogaritma, **I**nvers trigonometri, **A**ljabar (polinomial), **T**rigonometri, **E**ksponen.

### Pecahan parsial

Pecahan rasional dengan penyebut yang bisa difaktorkan dipecah dulu, misalnya
$$ \frac{px + q}{(x - a)(x - b)} = \frac{A}{x - a} + \frac{B}{x - b} $$
Lalu setiap bagian diintegralkan dengan $\displaystyle\int \frac{1}{x - a}\,dx = \ln|x - a| + C$. Jika derajat pembilang $\geq$ derajat penyebut, bagi dulu.

### Luas antara dua kurva

Jika $f(x) \geq g(x)$ pada $a \leq x \leq b$:
$$ L = \int_a^b \big[f(x) - g(x)\big]\,dx $$
Bayangkan pita tegak setinggi "atas − bawah". Batas $a$ dan $b$ biasanya titik potong kedua kurva. Jika lebih mudah, iris mendatar: $L = \int_c^d (x_{\text{kanan}} - x_{\text{kiri}})\,dy$.

### Volume benda putar

Putar daerah di bawah $y = f(x)$ mengelilingi **sumbu $x$**. Irisan tegak setebal $\delta x$ menjadi **koin** berjari-jari $y$, volumenya $\pi y^2\,\delta x$. Jumlahkan dan ambil limit:
$$ V_x = \pi\int_a^b y^2\,dx $$
Diputar mengelilingi **sumbu $y$**, koinnya mendatar dengan jari-jari $x$:
$$ V_y = \pi\int_c^d x^2\,dy $$
Jika daerahnya di antara dua kurva, kurangkan volume luar dengan volume dalam (koin berlubang, seperti cincin).

## Contoh langkah demi langkah

### Contoh 1: Substitusi pada integral tentu

**Soal.** Hitung $\displaystyle\int_0^1 x(x^2 + 1)^3\,dx$.

1. **Langkah 1: Pilih alat.** Ada $(x^2 + 1)^3$ dan turunan bagian dalam $2x$ (kelipatan dari $x$). Pakai substitusi $u = x^2 + 1$.
2. **Langkah 2: Ubah $dx$.** $du = 2x\,dx$, jadi $x\,dx = \frac{1}{2}du$.
3. **Langkah 3: Ubah batas.** $x = 0 \Rightarrow u = 1$; $x = 1 \Rightarrow u = 2$.
4. **Langkah 4: Integralkan.** $\displaystyle\frac{1}{2}\int_1^2 u^3\,du = \frac{1}{2}\left[\frac{u^4}{4}\right]_1^2 = \frac{1}{2} \cdot \frac{16 - 1}{4} = \frac{15}{8}$.
5. **Cek jawaban.** Jabarkan: $x(x^2+1)^3 = x^7 + 3x^5 + 3x^3 + x$. Integral 0 sampai 1: $\frac{1}{8} + \frac{1}{2} + \frac{3}{4} + \frac{1}{2} = \frac{15}{8}$. Sama.

**Jawaban:** $\dfrac{15}{8}$.

### Contoh 2: Integral parsial dengan logaritma

**Soal.** Hitung $\displaystyle\int_1^e x\ln x\,dx$.

1. **Langkah 1: Pilih alat dan $u$.** Hasil kali dua jenis fungsi, jadi parsial. Menurut LIATE, Logaritma didahulukan: $u = \ln x$, $\frac{dv}{dx} = x$.
2. **Langkah 2: Turunkan dan integralkan.** $\frac{du}{dx} = \frac{1}{x}$, $v = \frac{x^2}{2}$.
3. **Langkah 3: Pakai rumus.**
$$ \int x\ln x\,dx = \frac{x^2}{2}\ln x - \int \frac{x^2}{2} \cdot \frac{1}{x}\,dx = \frac{x^2}{2}\ln x - \frac{x^2}{4} + C $$
4. **Langkah 4: Masukkan batas.** Di $x = e$: $\frac{e^2}{2} - \frac{e^2}{4} = \frac{e^2}{4}$. Di $x = 1$: $0 - \frac{1}{4}$. Selisih: $\frac{e^2}{4} + \frac{1}{4} = \frac{e^2 + 1}{4}$.
5. **Cek jawaban.** Turunkan antiturunan: $x\ln x + \frac{x^2}{2} \cdot \frac{1}{x} - \frac{x}{2} = x\ln x$. Benar. Nilainya $\approx 2{,}10$, positif seperti seharusnya karena $x\ln x > 0$ untuk $x > 1$.

**Jawaban:** $\dfrac{e^2 + 1}{4} \approx 2{,}10$.

### Contoh 3: Pecahan parsial

**Soal.** Hitung $\displaystyle\int_2^3 \frac{x + 5}{(x - 1)(x + 2)}\,dx$, nyatakan dalam bentuk $\ln k$.

1. **Langkah 1: Pecah.** $\dfrac{x + 5}{(x - 1)(x + 2)} = \dfrac{A}{x - 1} + \dfrac{B}{x + 2}$, jadi $x + 5 = A(x + 2) + B(x - 1)$.
2. **Langkah 2: Cari $A$ dan $B$.** $x = 1$: $6 = 3A$, $A = 2$. $x = -2$: $3 = -3B$, $B = -1$.
3. **Langkah 3: Integralkan.** $\big[2\ln|x - 1| - \ln|x + 2|\big]_2^3$.
4. **Langkah 4: Masukkan batas.** $(2\ln 2 - \ln 5) - (2\ln 1 - \ln 4) = 2\ln 2 - \ln 5 + 2\ln 2 = 4\ln 2 - \ln 5 = \ln\frac{16}{5}$.
5. **Cek jawaban.** Uji pecahan parsial di $x = 0$: kiri $\frac{5}{-2} = -2{,}5$; kanan $\frac{2}{-1} - \frac{1}{2} = -2{,}5$. Cocok. Nilai $\ln 3{,}2 \approx 1{,}16$; integran bernilai antara $1{,}75$ (di $x = 2$) dan $0{,}8$ (di $x = 3$), jadi rata-rata sekitar 1,16 masuk akal.

**Jawaban:** $\ln\dfrac{16}{5} \approx 1{,}16$.

### Contoh 4: Luas di antara dua kurva

**Soal.** Hitung luas daerah yang dibatasi $y = 2x$ dan $y = x^2$.

1. **Langkah 1: Titik potong.** $x^2 = 2x \Rightarrow x(x - 2) = 0$, jadi $x = 0$ dan $x = 2$.
2. **Langkah 2: Mana yang di atas?** Di $x = 1$: $2x = 2$, $x^2 = 1$. Garis di atas parabola.
3. **Langkah 3: Integralkan atas − bawah.** $\displaystyle\int_0^2 (2x - x^2)\,dx = \left[x^2 - \frac{x^3}{3}\right]_0^2 = 4 - \frac{8}{3} = \frac{4}{3}$.
4. **Cek jawaban.** Iris mendatar: $x$ dari $\frac{y}{2}$ ke $\sqrt{y}$, $0 \leq y \leq 4$. $\int_0^4 \left(\sqrt{y} - \frac{y}{2}\right)dy = \frac{2}{3}(8) - 4 = \frac{4}{3}$. Sama.

**Jawaban:** $\dfrac{4}{3}$ satuan luas.

### Contoh 5: Mangkuk gerabah dari Kasongan

**Soal.** Bagian dalam mangkuk gerabah dibuat dengan memutar kurva $y = \frac{x^2}{4}$, $0 \leq y \leq 9$ (dalam cm), mengelilingi sumbu $y$. Berapa volume air yang bisa ditampung?

1. **Langkah 1: Pilih rumus.** Diputar terhadap sumbu $y$, jadi irisan mendatar: $V = \pi\int_0^9 x^2\,dy$.
2. **Langkah 2: Nyatakan $x^2$ dalam $y$.** Dari $y = \frac{x^2}{4}$: $x^2 = 4y$.
3. **Langkah 3: Integralkan.** $V = \pi\int_0^9 4y\,dy = \pi\big[2y^2\big]_0^9 = 162\pi$.
4. **Langkah 4: Nilai desimal.** $162\pi \approx 509\ \text{cm}^3$, sekitar setengah liter.
5. **Cek jawaban.** Di tepi atas, $x^2 = 36$, jadi jari-jari 6 cm. Tabung berjari-jari 6 dan tinggi 9 bervolume $\pi(36)(9) = 324\pi$. Paraboloid seperti ini selalu setengah tabung yang membungkusnya (ditemukan Archimedes), dan $\frac{324\pi}{2} = 162\pi$. Cocok.

**Jawaban:** $162\pi \approx 509\ \text{cm}^3$.

## Kesalahan yang sering terjadi

- **Tidak mengubah batas saat substitusi.** Menghitung $\frac{1}{2}\left[\frac{u^4}{4}\right]_0^1$ pada Contoh 1. Batas 0 dan 1 adalah nilai $x$, bukan $u$. Ubah batas, atau kembalikan ke $x$ sebelum memasukkan batas.
- **Salah memilih $u$ pada parsial.** Memilih $u = x$ dan $\frac{dv}{dx} = \ln x$ pada Contoh 2 membuat kita harus mengintegralkan $\ln x$, yang justru lebih sulit. Ikuti LIATE.
- **Lupa nilai mutlak di logaritma.** $\int \frac{1}{x + 2}\,dx = \ln|x + 2| + C$. Tanpa nilai mutlak, hasilnya salah untuk $x < -2$.
- **Volume dengan $\pi(y_1 - y_2)^2$.** Untuk daerah di antara dua kurva, volume adalah $\pi\int (y_1^2 - y_2^2)\,dx$, yaitu koin besar dikurangi lubang, bukan selisih jari-jari lalu dikuadratkan.
- **Lupa $\pi$ atau memakai $dx$ untuk putaran sumbu $y$.** Putaran terhadap sumbu $y$ memakai $x^2\,dy$ dengan batas nilai $y$.

## Ringkasan

- Substitusi: cari "bagian dalam" yang turunannya muncul; untuk integral tentu, ubah batas.
- Parsial: $\int u\,v'\,dx = uv - \int v\,u'\,dx$; pilih $u$ dengan urutan LIATE.
- Pecahan parsial: pecah penyebut menjadi faktor linear, lalu setiap bagian menjadi $\ln|\ldots|$.
- Luas antara kurva: $\int (\text{atas} - \text{bawah})\,dx$ antara titik potong.
- Volume: $V_x = \pi\int y^2\,dx$, $V_y = \pi\int x^2\,dy$.

## Cek pemahaman

1. Tentukan $\displaystyle\int \frac{2x}{x^2 + 3}\,dx$.
2. Tentukan $\displaystyle\int x\cos x\,dx$.
3. Hitung $\displaystyle\int_1^2 \frac{1}{x(x + 1)}\,dx$ dalam bentuk $\ln k$.
4. Hitung luas daerah yang dibatasi $y = x$ dan $y = x^2$.
5. Daerah di bawah $y = \sqrt{x}$ untuk $0 \leq x \leq 4$ diputar mengelilingi sumbu $x$. Hitung volumenya.

### Kunci jawaban

1. $\ln(x^2 + 3) + C$. Dengan $u = x^2 + 3$, $du = 2x\,dx$; nilai mutlak tidak perlu karena $x^2 + 3 > 0$.
2. $x\sin x + \cos x + C$. $u = x$, $v = \sin x$: $x\sin x - \int \sin x\,dx$.
3. $\ln\dfrac{4}{3}$. $\frac{1}{x(x+1)} = \frac{1}{x} - \frac{1}{x+1}$; $[\ln x - \ln(x + 1)]_1^2 = (\ln 2 - \ln 3) - (0 - \ln 2)$.
4. $\dfrac{1}{6}$. Potong di $x = 0$ dan $1$; $\int_0^1 (x - x^2)\,dx = \frac{1}{2} - \frac{1}{3}$.
5. $8\pi$. $\pi\int_0^4 (\sqrt{x})^2\,dx = \pi\left[\frac{x^2}{2}\right]_0^4$.
