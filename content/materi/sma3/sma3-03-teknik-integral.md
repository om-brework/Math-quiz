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

```visual
{"type": "table", "head": ["Alat", "Tanda baut yang cocok", "Contoh"], "rows": [["Substitusi (kunci pas)", "fungsi di dalam fungsi, turunan bagian dalam ikut muncul", "∫ 2x(x² + 1)⁵ dx"], ["Parsial (obeng)", "hasil kali dua jenis fungsi", "∫ x eˣ dx"], ["Pecahan parsial (tang)", "pecahan dengan penyebut yang bisa difaktorkan", "∫ 1/((x − 1)(x + 1)) dx"], ["Volume (iris timun)", "daerah diputar mengelilingi sumbu", "π ∫ y² dx"]], "caption": "Kotak perkakas integral"}
```

## Konsep

### Integral substitusi

Dari aturan rantai, $\frac{d}{dx}F(g(x)) = F'(g(x))\,g'(x)$. Dibalik:
$$ \int f(g(x))\,g'(x)\,dx = \int f(u)\,du, \qquad u = g(x),\ du = g'(x)\,dx $$
Tanda cocok: ada fungsi di dalam fungsi, dan turunan bagian dalam (atau kelipatannya) ikut muncul. Untuk integral tentu, **ubah batas** ke $u$ supaya tidak perlu kembali ke $x$.

```anim
{"type": "persamaan", "title": "Substitusi pada ∫ 3x²(x³ + 1)⁴ dx", "baris": [{"tex": "\\int 3x^2(x^3 + 1)^4\\,dx", "say": "Bagian dalam $x^3 + 1$, turunannya $3x^2$ ikut muncul."}, {"tex": "u = x^3 + 1,\\quad du = 3x^2\\,dx", "say": "Ganti sudut pandang.", "op": "misalkan"}, {"tex": "\\int u^4\\,du", "say": "Bautnya kini sederhana."}, {"tex": "\\frac{u^5}{5} + C", "say": "Pakai rumus pangkat."}, {"tex": "\\frac{(x^3 + 1)^5}{5} + C", "say": "Kembalikan ke $x$."}]}
```

### Integral parsial

Dari aturan perkalian, $(uv)' = u'v + uv'$. Integralkan kedua ruas dan susun ulang:
$$ \int u\,\frac{dv}{dx}\,dx = uv - \int v\,\frac{du}{dx}\,dx $$
Pilih $u$ yang menjadi lebih sederhana saat diturunkan. Urutan prioritas memilih $u$ (LIATE): **L**ogaritma, **I**nvers trigonometri, **A**ljabar (polinomial), **T**rigonometri, **E**ksponen.

```anim
{"type": "persamaan", "title": "Parsial pada ∫ x eˣ dx", "baris": [{"tex": "\\int x e^x\\,dx", "say": "Aljabar kali eksponen. Menurut LIATE, $u = x$."}, {"tex": "u = x,\\ \\frac{du}{dx} = 1;\\quad \\frac{dv}{dx} = e^x,\\ v = e^x", "say": "Turunkan $u$, integralkan $\\frac{dv}{dx}$."}, {"tex": "x e^x - \\int e^x \\cdot 1\\,dx", "say": "Pakai $uv - \\int v\\,\\frac{du}{dx}\\,dx$.", "op": "rumus parsial"}, {"tex": "x e^x - e^x + C", "say": "Integral sisanya mudah."}]}
```

### Pecahan parsial

Pecahan rasional dengan penyebut yang bisa difaktorkan dipecah dulu, misalnya
$$ \frac{px + q}{(x - a)(x - b)} = \frac{A}{x - a} + \frac{B}{x - b} $$
Lalu setiap bagian diintegralkan dengan $\displaystyle\int \frac{1}{x - a}\,dx = \ln|x - a| + C$. Jika derajat pembilang $\geq$ derajat penyebut, bagi dulu.

### Luas antara dua kurva

Jika $f(x) \geq g(x)$ pada $a \leq x \leq b$:
$$ L = \int_a^b \big[f(x) - g(x)\big]\,dx $$
Bayangkan pita tegak setinggi "atas − bawah". Batas $a$ dan $b$ biasanya titik potong kedua kurva. Jika lebih mudah, iris mendatar: $L = \int_c^d (x_{\text{kanan}} - x_{\text{kiri}})\,dy$.

```anim
{"type": "grafik", "title": "Atas dikurangi bawah", "xmin": -2, "xmax": 3, "ymin": -1, "ymax": 6, "kurva": [{"f": "x+2", "label": "y = x + 2"}, {"f": "x^2", "label": "y = x^2"}], "titik": [{"x": -1, "y": 1, "label": "(−1, 1)"}, {"x": 2, "y": 4, "label": "(2, 4)"}], "garis": [{"x": 0.5}], "langkah": [{"say": "Garis $y = x + 2$.", "kurva": 1}, {"say": "Parabola $y = x^2$.", "kurva": 2}, {"say": "Titik potong: $x^2 = x + 2$, jadi $x = -1$ dan $x = 2$. Itulah batas integral.", "kurva": 2, "titik": 2}, {"say": "Pita tegak di tengah: tingginya (garis) − (parabola). Luas $= \\int_{-1}^{2} (x + 2 - x^2)\\,dx$.", "kurva": 2, "titik": 2, "garis": 1}]}
```

### Volume benda putar

Putar daerah di bawah $y = f(x)$ mengelilingi **sumbu $x$**. Irisan tegak setebal $\delta x$ menjadi **koin** berjari-jari $y$, volumenya $\pi y^2\,\delta x$. Jumlahkan dan ambil limit:
$$ V_x = \pi\int_a^b y^2\,dx $$
Diputar mengelilingi **sumbu $y$**, koinnya mendatar dengan jari-jari $x$:

```anim
{"type": "grafik", "title": "Irisan koin pada benda putar", "xmin": -0.5, "xmax": 4.5, "ymin": -2.5, "ymax": 2.5, "kurva": [{"f": "sqrt(x)", "label": "y = \\sqrt{x}", "dari": 0}, {"f": "-sqrt(x)", "label": "\\text{bayangan putaran}", "dari": 0}], "garis": [{"x": 2}, {"x": 4}], "langkah": [{"say": "Daerah di bawah $y = \\sqrt{x}$.", "kurva": 1}, {"say": "Diputar mengelilingi sumbu $x$, tepinya menyapu ke bawah juga: terbentuk benda seperti corong.", "kurva": 2}, {"say": "Irisan tegak di $x = 2$ adalah koin berjari-jari $y = \\sqrt{2}$, luasnya $\\pi y^2$. Jumlahkan semua koin.", "kurva": 2, "garis": 1}]}
```
$$ V_y = \pi\int_c^d x^2\,dy $$
Jika daerahnya di antara dua kurva, kurangkan volume luar dengan volume dalam (koin berlubang, seperti cincin).

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Substitusi pada integral tentu

```soal
{
 "title": "Contoh 1",
 "text": "Hitung $\\displaystyle\\int_0^1 x(x^2 + 1)^3\\,dx$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pilih alat. Substitusi yang tepat?",
   "options": [
    "$u = x^2 + 1$",
    "$u = x$",
    "$u = (x^2 + 1)^3$"
   ],
   "answer": "$u = x^2 + 1$",
   "hint": "Cari bagian dalam yang turunannya (atau kelipatannya) ikut muncul.",
   "explain": "Turunan $x^2 + 1$ adalah $2x$, kelipatan dari $x$ yang ada.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: $du = 2x\\,dx$, jadi $x\\,dx = ?\\,du$",
   "answer": {
    "num": 1,
    "den": 2
   },
   "hint": "Bagi kedua ruas dengan 2.",
   "explain": "$x\\,dx = \\frac{1}{2}du$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Ubah batas. Untuk $x = 1$, $u$ = ?",
   "answer": "2",
   "hint": "$u = 1^2 + 1$.",
   "explain": "Batas atas $u = 2$; untuk $x = 0$, $u = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: $\\frac{1}{2}\\left[\\frac{u^4}{4}\\right]_1^2$ = ?",
   "answer": {
    "num": 15,
    "den": 8
   },
   "hint": "$\\frac{1}{2} \\cdot \\frac{16 - 1}{4}$.",
   "explain": "$\\frac{15}{8}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: jabarkan dan integralkan: $\\frac{1}{8} + \\frac{1}{2} + \\frac{3}{4} + \\frac{1}{2}$ dalam desimal = ?",
   "answer": "1,875",
   "hint": "Ubah tiap pecahan ke desimal lalu jumlahkan.",
   "explain": "$0{,}125 + 0{,}5 + 0{,}75 + 0{,}5 = 1{,}875 = \\frac{15}{8}$. Sama.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\displaystyle\\int_0^1 x(x^2 + 1)^3\\,dx = \\frac{15}{8}$."
}
```

### Contoh 2: Integral parsial dengan logaritma

```soal
{
 "title": "Contoh 2",
 "text": "Hitung $\\displaystyle\\int_1^e x\\ln x\\,dx$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Integral parsial. Menurut LIATE, $u$ = ?",
   "options": [
    "$\\ln x$",
    "$x$",
    "$x\\ln x$"
   ],
   "answer": "$\\ln x$",
   "hint": "Logaritma didahulukan.",
   "explain": "$u = \\ln x$ dan $\\frac{dv}{dx} = x$. Kalau $u = x$, kita harus mengintegralkan $\\ln x$, lebih sulit.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: $\\frac{du}{dx}$ dan $v$ = ?",
   "options": [
    "$\\frac{1}{x}$ dan $\\frac{x^2}{2}$",
    "$\\frac{1}{x}$ dan $1$",
    "$x$ dan $\\frac{x^2}{2}$"
   ],
   "answer": "$\\frac{1}{x}$ dan $\\frac{x^2}{2}$",
   "hint": "Turunkan $\\ln x$; integralkan $x$.",
   "explain": "$\\frac{du}{dx} = \\frac{1}{x}$, $v = \\frac{x^2}{2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Antiturunannya?",
   "options": [
    "$\\frac{x^2}{2}\\ln x - \\frac{x^2}{4}$",
    "$\\frac{x^2}{2}\\ln x - \\frac{x^2}{2}$",
    "$\\frac{x^2}{2}\\ln x + \\frac{x^2}{4}$"
   ],
   "answer": "$\\frac{x^2}{2}\\ln x - \\frac{x^2}{4}$",
   "hint": "$\\int \\frac{x^2}{2} \\cdot \\frac{1}{x}\\,dx = \\int \\frac{x}{2}\\,dx$.",
   "explain": "$\\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + C$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Nilai di $x = 1$?",
   "options": [
    "$-\\frac{1}{4}$",
    "$0$",
    "$\\frac{1}{4}$"
   ],
   "answer": "$-\\frac{1}{4}$",
   "hint": "$\\ln 1 = 0$.",
   "explain": "$0 - \\frac{1}{4} = -\\frac{1}{4}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Nilai di $x = e$ dikurangi nilai di $x = 1$?",
   "options": [
    "$\\frac{e^2 + 1}{4}$",
    "$\\frac{e^2 - 1}{4}$",
    "$\\frac{e^2}{4}$"
   ],
   "answer": "$\\frac{e^2 + 1}{4}$",
   "hint": "Di $x = e$: $\\frac{e^2}{2} - \\frac{e^2}{4} = \\frac{e^2}{4}$.",
   "explain": "$\\frac{e^2}{4} - \\left(-\\frac{1}{4}\\right) = \\frac{e^2 + 1}{4}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: nilai desimalnya, bulatkan ke 2 desimal.",
   "answer": "2,10",
   "hint": "$e^2 \\approx 7{,}389$.",
   "explain": "$\\frac{8{,}389}{4} \\approx 2{,}10$. Positif, cocok karena $x\\ln x > 0$ untuk $x > 1$.",
   "error": "salah-pembulatan"
  }
 ],
 "conclusion": "Jadi $\\displaystyle\\int_1^e x\\ln x\\,dx = \\frac{e^2 + 1}{4} \\approx 2{,}10$."
}
```

### Contoh 3: Pecahan parsial

```soal
{
 "title": "Contoh 3",
 "text": "Hitung $\\displaystyle\\int_2^3 \\frac{x + 5}{(x - 1)(x + 2)}\\,dx$, nyatakan dalam bentuk $\\ln k$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: $x + 5 = A(x + 2) + B(x - 1)$. Substitusi $x = 1$: $A$ = ?",
   "answer": "2",
   "hint": "$6 = 3A$.",
   "explain": "$A = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Substitusi $x = -2$: $B$ = ?",
   "answer": "-1",
   "hint": "$3 = -3B$.",
   "explain": "$B = -1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Antiturunannya?",
   "options": [
    "$2\\ln|x - 1| - \\ln|x + 2|$",
    "$2\\ln|x + 2| - \\ln|x - 1|$",
    "$\\frac{2}{x - 1} - \\frac{1}{x + 2}$"
   ],
   "answer": "$2\\ln|x - 1| - \\ln|x + 2|$",
   "hint": "$\\int \\frac{1}{x - a}\\,dx = \\ln|x - a|$.",
   "explain": "$2\\ln|x - 1| - \\ln|x + 2|$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Masukkan batas 2 dan 3. Hasilnya?",
   "options": [
    "$\\ln\\frac{16}{5}$",
    "$\\ln\\frac{4}{5}$",
    "$\\ln\\frac{5}{16}$"
   ],
   "answer": "$\\ln\\frac{16}{5}$",
   "hint": "$(2\\ln 2 - \\ln 5) - (2\\ln 1 - \\ln 4)$.",
   "explain": "$4\\ln 2 - \\ln 5 = \\ln\\frac{16}{5}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: nilai desimalnya, bulatkan ke 2 desimal.",
   "answer": "1,16",
   "hint": "$\\ln 3{,}2$.",
   "explain": "$\\ln 3{,}2 \\approx 1{,}16$, di antara nilai integran 0,8 dan 1,75. Masuk akal.",
   "error": "salah-pembulatan"
  }
 ],
 "conclusion": "Jadi integralnya $\\ln\\dfrac{16}{5} \\approx 1{,}16$."
}
```

### Contoh 4: Luas di antara dua kurva

```soal
{
 "title": "Contoh 4",
 "text": "Hitung luas daerah yang dibatasi $y = 2x$ dan $y = x^2$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Titik potong: $x^2 = 2x$. Selain $x = 0$, nilai $x$ = ?",
   "answer": "2",
   "hint": "Faktorkan $x(x - 2) = 0$.",
   "explain": "$x = 0$ dan $x = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Uji di $x = 1$. Mana yang di atas?",
   "options": [
    "$y = 2x$",
    "$y = x^2$"
   ],
   "answer": "$y = 2x$",
   "hint": "Bandingkan $2(1)$ dengan $1^2$.",
   "explain": "Garis bernilai 2, parabola 1: garis di atas.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: $\\int_0^2 (2x - x^2)\\,dx = \\left[x^2 - \\frac{x^3}{3}\\right]_0^2$ = ?",
   "answer": {
    "num": 4,
    "den": 3
   },
   "hint": "$4 - \\frac{8}{3}$.",
   "explain": "$\\frac{12 - 8}{3} = \\frac{4}{3}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Cek jawaban: iris mendatar, $\\int_0^4 \\left(\\sqrt{y} - \\frac{y}{2}\\right)dy = \\frac{16}{3} - 4$ = ?",
   "answer": {
    "num": 4,
    "den": 3
   },
   "hint": "Samakan penyebut: $\\frac{16}{3} - \\frac{12}{3}$.",
   "explain": "$\\frac{4}{3}$. Sama.",
   "error": "salah-langkah-materi",
   "simplest": true
  }
 ],
 "conclusion": "Jadi luasnya $\\dfrac{4}{3}$ satuan luas."
}
```

### Contoh 5: Mangkuk gerabah dari Kasongan

```soal
{
 "title": "Contoh 5",
 "text": "Bagian dalam mangkuk gerabah Kasongan dibuat dengan memutar kurva $y = \\frac{x^2}{4}$, $0 \\leq y \\leq 9$ (dalam cm), mengelilingi sumbu $y$. Berapa volume air yang bisa ditampung?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Rumus yang tepat?",
   "options": [
    "$\\pi\\int_0^9 x^2\\,dy$",
    "$\\pi\\int_0^9 y^2\\,dx$",
    "$\\int_0^9 x\\,dy$"
   ],
   "answer": "$\\pi\\int_0^9 x^2\\,dy$",
   "hint": "Diputar terhadap sumbu $y$: irisan mendatar.",
   "explain": "$V_y = \\pi\\int x^2\\,dy$ dengan batas nilai $y$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Dari $y = \\frac{x^2}{4}$, $x^2 = ?\\,y$",
   "answer": "4",
   "hint": "Kalikan kedua ruas dengan 4.",
   "explain": "$x^2 = 4y$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\pi\\int_0^9 4y\\,dy = \\pi\\left[2y^2\\right]_0^9$. Hasilnya $?\\,\\pi$",
   "answer": "162",
   "hint": "$2 \\times 81$.",
   "explain": "$162\\pi$.",
   "error": "salah-langkah-materi",
   "suffix": "π"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Nilai desimal, bulatkan ke cm³ terdekat.",
   "answer": "509",
   "hint": "$\\pi \\approx 3{,}1416$.",
   "explain": "$162\\pi \\approx 509$ cm³, sekitar setengah liter.",
   "error": "salah-pembulatan",
   "suffix": "cm³"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: tabung pembungkus berjari-jari 6 dan tinggi 9 bervolume $?\\,\\pi$",
   "answer": "324",
   "hint": "$\\pi r^2 t = \\pi(36)(9)$.",
   "explain": "$324\\pi$; paraboloid adalah setengahnya, $162\\pi$. Cocok.",
   "error": "salah-langkah-materi",
   "suffix": "π"
  }
 ],
 "conclusion": "Jadi mangkuk menampung $162\\pi \\approx 509$ cm³."
}
```

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

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tentukan $\\displaystyle\\int \\frac{2x}{x^2 + 3}\\,dx$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Substitusi yang tepat?",
   "options": [
    "$u = x^2 + 3$",
    "$u = 2x$",
    "$u = \\frac{1}{x^2 + 3}$"
   ],
   "answer": "$u = x^2 + 3$",
   "hint": "Turunan penyebut muncul di pembilang.",
   "explain": "$du = 2x\\,dx$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasilnya?",
   "options": [
    "$\\ln(x^2 + 3) + C$",
    "$\\ln|2x| + C$",
    "$\\frac{1}{x^2 + 3} + C$"
   ],
   "answer": "$\\ln(x^2 + 3) + C$",
   "hint": "$\\int \\frac{1}{u}\\,du = \\ln|u|$.",
   "explain": "$\\ln(x^2 + 3) + C$; nilai mutlak tidak perlu karena $x^2 + 3 > 0$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi hasilnya $\\ln(x^2 + 3) + C$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Tentukan $\\displaystyle\\int x\\cos x\\,dx$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Menurut LIATE, $u$ = ?",
   "options": [
    "$x$",
    "$\\cos x$"
   ],
   "answer": "$x$",
   "hint": "Aljabar didahulukan dari trigonometri.",
   "explain": "$u = x$, $\\frac{dv}{dx} = \\cos x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$v$ = ?",
   "options": [
    "$\\sin x$",
    "$-\\sin x$",
    "$-\\cos x$"
   ],
   "answer": "$\\sin x$",
   "hint": "Integral $\\cos x$.",
   "explain": "$v = \\sin x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasilnya?",
   "options": [
    "$x\\sin x + \\cos x + C$",
    "$x\\sin x - \\cos x + C$",
    "$\\frac{x^2}{2}\\sin x + C$"
   ],
   "answer": "$x\\sin x + \\cos x + C$",
   "hint": "$x\\sin x - \\int \\sin x\\,dx$, dan $\\int \\sin x\\,dx = -\\cos x$.",
   "explain": "$x\\sin x - (-\\cos x) = x\\sin x + \\cos x$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi hasilnya $x\\sin x + \\cos x + C$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung $\\displaystyle\\int_1^2 \\frac{1}{x(x + 1)}\\,dx$ dalam bentuk $\\ln k$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\frac{1}{x(x + 1)} = \\frac{A}{x} + \\frac{B}{x + 1}$. $A$ = ?",
   "answer": "1",
   "hint": "$1 = A(x + 1) + Bx$; substitusi $x = 0$.",
   "explain": "$A = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$B$ = ?",
   "answer": "-1",
   "hint": "Substitusi $x = -1$.",
   "explain": "$1 = -B$, jadi $B = -1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasilnya?",
   "options": [
    "$\\ln\\frac{4}{3}$",
    "$\\ln\\frac{2}{3}$",
    "$\\ln 6$"
   ],
   "answer": "$\\ln\\frac{4}{3}$",
   "hint": "$[\\ln x - \\ln(x + 1)]_1^2$.",
   "explain": "$(\\ln 2 - \\ln 3) - (0 - \\ln 2) = 2\\ln 2 - \\ln 3 = \\ln\\frac{4}{3}$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi integralnya $\\ln\\dfrac{4}{3}$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Hitung luas daerah yang dibatasi $y = x$ dan $y = x^2$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Titik potong selain $x = 0$: $x$ = ?",
   "answer": "1",
   "hint": "$x^2 = x \\Rightarrow x(x - 1) = 0$.",
   "explain": "$x = 0$ dan $x = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Di $0 < x < 1$, mana yang di atas?",
   "options": [
    "$y = x$",
    "$y = x^2$"
   ],
   "answer": "$y = x$",
   "hint": "Uji $x = \\frac{1}{2}$.",
   "explain": "$\\frac{1}{2} > \\frac{1}{4}$: garis di atas.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "$\\int_0^1 (x - x^2)\\,dx$ = ?",
   "answer": {
    "num": 1,
    "den": 6
   },
   "hint": "$\\frac{1}{2} - \\frac{1}{3}$.",
   "explain": "$\\frac{1}{6}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  }
 ],
 "conclusion": "Jadi luasnya $\\dfrac{1}{6}$ satuan luas."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Daerah di bawah $y = \\sqrt{x}$ untuk $0 \\leq x \\leq 4$ diputar mengelilingi sumbu $x$. Hitung volumenya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Bentuk integralnya?",
   "options": [
    "$\\pi\\int_0^4 x\\,dx$",
    "$\\pi\\int_0^4 \\sqrt{x}\\,dx$",
    "$\\int_0^4 x\\,dx$"
   ],
   "answer": "$\\pi\\int_0^4 x\\,dx$",
   "hint": "$V_x = \\pi\\int y^2\\,dx$ dan $(\\sqrt{x})^2 = x$.",
   "explain": "$\\pi\\int_0^4 x\\,dx$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\pi\\left[\\frac{x^2}{2}\\right]_0^4 = ?\\,\\pi$",
   "answer": "8",
   "hint": "$\\frac{16}{2}$.",
   "explain": "$8\\pi$.",
   "error": "salah-langkah-materi",
   "suffix": "π"
  }
 ],
 "conclusion": "Jadi volumenya $8\\pi$ satuan volume."
}
```
