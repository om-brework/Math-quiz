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

```anim
{"type": "grafik", "title": "Kompas dy/dx = 2x dan jejak-jejaknya", "xmin": -3, "xmax": 3, "ymin": -3, "ymax": 8, "kurva": [{"f": "x^2-2", "label": "y = x^2 - 2"}, {"f": "x^2", "label": "y = x^2"}, {"f": "x^2+2", "label": "y = x^2 + 2"}], "titik": [{"x": 1, "y": 3, "label": "titik awal (1, 3)"}], "langkah": [{"say": "Kompasnya: di setiap titik, kemiringan jalur adalah $\\frac{dy}{dx} = 2x$.", "kurva": 0}, {"say": "Satu jejak yang mengikuti kompas: $y = x^2 - 2$.", "kurva": 1}, {"say": "Mulai dari titik lain, jejaknya bergeser tetapi bentuknya sama: solusi umum $y = x^2 + C$.", "kurva": 3}, {"say": "Kalau titik awal $(1, 3)$ diketahui, hanya jejak $y = x^2 + 2$ yang lewat. Itulah solusi khusus.", "kurva": 3, "titik": 1}]}
```

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

```anim
{"type": "persamaan", "title": "Pemisahan variabel: dy/dx = −2y, y(0) = 5", "baris": [{"tex": "\\frac{dy}{dx} = -2y", "say": "Ruas kanan: fungsi $x$ (konstanta $-2$) kali fungsi $y$."}, {"tex": "\\int \\frac{1}{y}\\,dy = \\int -2\\,dx", "say": "Kumpulkan $y$ di kiri, $x$ di kanan.", "op": "pisahkan"}, {"tex": "\\ln|y| = -2x + C", "say": "Integralkan; cukup satu konstanta $C$."}, {"tex": "y = Ae^{-2x}", "say": "Bebaskan $y$: $A = \\pm e^C$.", "op": "pangkat e"}, {"tex": "5 = Ae^0 \\Rightarrow y = 5e^{-2x}", "say": "Titik awal menentukan $A$."}]}
```

### Pemodelan

Menerjemahkan kalimat ke PD:

```visual
{"type": "table", "head": ["Kalimat", "PD"], "rows": [["laju bertambah sebanding dengan jumlahnya", "dP/dt = kP,  k > 0"], ["laju berkurang sebanding dengan jumlahnya", "dN/dt = −kN,  k > 0"], ["laju pendinginan sebanding dengan selisih suhu benda dan suhu ruangan Tₛ", "dT/dt = −k(T − Tₛ)"], ["masuk tetap a per menit, keluar sebanding jumlah", "dx/dt = a − kx"]], "caption": "Dari kalimat ke persamaan diferensial"}
```

Langkah pemodelan: tentukan variabel dan satuannya, tulis PD, selesaikan, pakai data untuk mencari konstanta, lalu tafsirkan jawabannya (termasuk perilaku jangka panjang).

```anim
{"type": "grafik", "title": "Bentuk solusi model", "xmin": 0, "xmax": 6, "ymin": 0, "ymax": 8, "kurva": [{"f": "exp(0.35x)", "label": "\\text{tumbuh: } P = e^{0{,}35t}"}, {"f": "6exp(-0.6x)", "label": "\\text{meluruh: } N = 6e^{-0{,}6t}"}, {"f": "2+5exp(-0.7x)", "label": "\\text{mendingin: } T = 2 + 5e^{-0{,}7t}"}], "garis": [{"y": 2}], "langkah": [{"say": "Bertambah sebanding jumlahnya: makin besar, makin cepat naik.", "kurva": 1}, {"say": "Berkurang sebanding jumlahnya: turun makin lambat mendekati 0.", "kurva": 2}, {"say": "Pendinginan: suhu turun makin lambat dan mendekati suhu ruangan (garis putus-putus).", "kurva": 3, "garis": 1}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Integral langsung

```soal
{
 "title": "Contoh 1",
 "text": "Selesaikan $\\dfrac{dy}{dx} = 6x^2 - 2x$ dengan $y = 4$ saat $x = 1$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Kenali jenis. Cara yang tepat?",
   "options": [
    "Integralkan langsung",
    "Pisahkan variabel $y$",
    "Turunkan lagi"
   ],
   "answer": "Integralkan langsung",
   "hint": "Ruas kanan hanya memuat $x$.",
   "explain": "Bentuk $\\frac{dy}{dx} = f(x)$: $y = \\int f(x)\\,dx$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Solusi umum?",
   "options": [
    "$y = 2x^3 - x^2 + C$",
    "$y = 12x - 2 + C$",
    "$y = 6x^3 - 2x^2 + C$"
   ],
   "answer": "$y = 2x^3 - x^2 + C$",
   "hint": "Integralkan: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1}$.",
   "explain": "$\\frac{6x^3}{3} - \\frac{2x^2}{2} + C$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Pakai titik awal $4 = 2 - 1 + C$. $C$ = ?",
   "answer": "3",
   "hint": "Pindahkan 1 ke ruas kiri.",
   "explain": "$C = 4 - 1 = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $y = 2x^3 - x^2 + 3$ di $x = 1$ = ?",
   "answer": "4",
   "hint": "$2 - 1 + 3$.",
   "explain": "$y(1) = 4$, cocok dengan syarat awal.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $y = 2x^3 - x^2 + 3$."
}
```

### Contoh 2: Pemisahan variabel dan keluarga kurva

```soal
{
 "title": "Contoh 2",
 "text": "Tentukan solusi umum $\\dfrac{dy}{dx} = 2xy$, lalu solusi khusus yang melalui $(0, 3)$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pisahkan variabel.",
   "options": [
    "$\\int \\frac{1}{y}\\,dy = \\int 2x\\,dx$",
    "$\\int y\\,dy = \\int 2x\\,dx$",
    "$\\int dy = \\int 2xy\\,dx$"
   ],
   "answer": "$\\int \\frac{1}{y}\\,dy = \\int 2x\\,dx$",
   "hint": "Bagi kedua ruas dengan $y$.",
   "explain": "Semua $y$ di kiri, semua $x$ di kanan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Integralkan.",
   "options": [
    "$\\ln|y| = x^2 + C$",
    "$\\frac{y^2}{2} = x^2 + C$",
    "$\\ln|y| = 2x^2 + C$"
   ],
   "answer": "$\\ln|y| = x^2 + C$",
   "hint": "$\\int \\frac{1}{y}\\,dy = \\ln|y|$.",
   "explain": "$\\ln|y| = x^2 + C$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Bebaskan $y$. Solusi umum?",
   "options": [
    "$y = Ae^{x^2}$",
    "$y = e^{x^2} + C$",
    "$y = x^2 + A$"
   ],
   "answer": "$y = Ae^{x^2}$",
   "hint": "$|y| = e^{x^2 + C} = e^C e^{x^2}$.",
   "explain": "Konstanta menjadi faktor pengali $A = \\pm e^C$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Melalui $(0, 3)$: $3 = Ae^0$. $A$ = ?",
   "answer": "3",
   "hint": "$e^0 = 1$.",
   "explain": "$A = 3$, jadi $y = 3e^{x^2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: turunan $y = 3e^{x^2}$ = ?",
   "options": [
    "$6xe^{x^2}$",
    "$3e^{x^2}$",
    "$6xe^{2x}$"
   ],
   "answer": "$6xe^{x^2}$",
   "hint": "Aturan rantai: kalikan dengan turunan $x^2$.",
   "explain": "$6xe^{x^2} = 2x \\cdot 3e^{x^2} = 2xy$. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi solusi umum $y = Ae^{x^2}$ dan solusi khusus $y = 3e^{x^2}$."
}
```

### Contoh 3: Teh panas di warung

```soal
{
 "title": "Contoh 3",
 "text": "Segelas teh bersuhu $90^\\circ$C diletakkan di ruangan bersuhu $26^\\circ$C. Laju penurunan suhu sebanding dengan selisih suhu teh dan ruangan. Setelah 5 menit suhunya $74^\\circ$C. Kapan suhunya mencapai $50^\\circ$C?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tulis model.",
   "options": [
    "$\\frac{dT}{dt} = -k(T - 26)$",
    "$\\frac{dT}{dt} = k(T - 26)$",
    "$\\frac{dT}{dt} = -kT$"
   ],
   "answer": "$\\frac{dT}{dt} = -k(T - 26)$",
   "hint": "Suhu turun, dan lajunya sebanding dengan selisih terhadap 26.",
   "explain": "Tanda minus karena suhu turun, $k > 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Pisahkan dan integralkan.",
   "options": [
    "$\\ln(T - 26) = -kt + C$",
    "$\\ln T = -kt + C$",
    "$T - 26 = -kt + C$"
   ],
   "answer": "$\\ln(T - 26) = -kt + C$",
   "hint": "$\\int \\frac{1}{T - 26}\\,dT = \\int -k\\,dt$.",
   "explain": "Nilai mutlak tidak perlu karena $T > 26$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $T - 26 = Ae^{-kt}$. Dari $T(0) = 90$, $A$ = ?",
   "answer": "64",
   "hint": "$90 - 26$.",
   "explain": "$A = 64$, jadi $T = 26 + 64e^{-kt}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: $74 = 26 + 64e^{-5k}$. $e^{-5k}$ = ? (paling sederhana)",
   "answer": {
    "num": 3,
    "den": 4
   },
   "hint": "$\\frac{74 - 26}{64}$.",
   "explain": "$\\frac{48}{64} = \\frac{3}{4}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Jadi $k = \\frac{1}{5}\\ln\\frac{4}{3}$. Bulatkan ke 4 desimal.",
   "answer": "0,0575",
   "hint": "$\\ln\\frac{4}{3} \\approx 0{,}2877$.",
   "explain": "$k \\approx 0{,}0575$ per menit.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 5: $50 = 26 + 64e^{-kt}$. $e^{-kt}$ = ? (paling sederhana)",
   "answer": {
    "num": 3,
    "den": 8
   },
   "hint": "$\\frac{50 - 26}{64}$.",
   "explain": "$\\frac{24}{64} = \\frac{3}{8}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "$t = \\frac{\\ln(8/3)}{k}$. Bulatkan ke 1 desimal.",
   "answer": "17,0",
   "hint": "$\\ln\\frac{8}{3} \\approx 0{,}9808$.",
   "explain": "$t = \\frac{5\\ln(8/3)}{\\ln(4/3)} \\approx 17{,}0$ menit.",
   "error": "salah-pembulatan",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: untuk $t \\to \\infty$, $T$ mendekati berapa?",
   "answer": "26",
   "hint": "$e^{-kt} \\to 0$.",
   "explain": "Suhu mendekati suhu ruangan 26°C. Dari 74 ke 50 butuh lebih lama dari 90 ke 74, karena pendinginan makin lambat.",
   "error": "salah-langkah-materi",
   "suffix": "°C"
  }
 ],
 "conclusion": "Jadi suhu teh mencapai 50°C sekitar 17 menit setelah diletakkan."
}
```

### Contoh 4: Obat lewat infus

```soal
{
 "title": "Contoh 4",
 "text": "Seorang pasien menerima obat lewat infus dengan laju tetap 2 mg per menit. Tubuh membuang obat dengan laju $0{,}1x$ mg per menit, dengan $x$ jumlah obat dalam darah (mg). Awalnya $x = 0$. Tentukan $x$ sebagai fungsi waktu $t$ (menit), dan jumlah obat dalam jangka panjang.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tulis model (masuk − keluar).",
   "options": [
    "$\\frac{dx}{dt} = 2 - 0{,}1x$",
    "$\\frac{dx}{dt} = 0{,}1x - 2$",
    "$\\frac{dx}{dt} = 2 - 0{,}1t$"
   ],
   "answer": "$\\frac{dx}{dt} = 2 - 0{,}1x$",
   "hint": "Laju bersih = yang masuk dikurangi yang keluar.",
   "explain": "$\\frac{dx}{dt} = 2 - 0{,}1x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: $\\int \\frac{1}{2 - 0{,}1x}\\,dx$ = ?",
   "options": [
    "$-10\\ln|2 - 0{,}1x|$",
    "$\\ln|2 - 0{,}1x|$",
    "$-0{,}1\\ln|2 - 0{,}1x|$"
   ],
   "answer": "$-10\\ln|2 - 0{,}1x|$",
   "hint": "Bentuk $\\frac{1}{ax + b}$: bagi dengan $a = -0{,}1$.",
   "explain": "$\\frac{1}{-0{,}1} = -10$, jadi $-10\\ln|2 - 0{,}1x| = t + C$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Masukkan $t = 0$, $x = 0$. $C$ = ?",
   "options": [
    "$-10\\ln 2$",
    "$10\\ln 2$",
    "$0$"
   ],
   "answer": "$-10\\ln 2$",
   "hint": "$-10\\ln 2 = 0 + C$.",
   "explain": "$C = -10\\ln 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Bebaskan $x$.",
   "options": [
    "$x = 20\\left(1 - e^{-t/10}\\right)$",
    "$x = 20e^{-t/10}$",
    "$x = 2\\left(1 - e^{-t/10}\\right)$"
   ],
   "answer": "$x = 20\\left(1 - e^{-t/10}\\right)$",
   "hint": "$2 - 0{,}1x = 2e^{-t/10}$, lalu kalikan dengan 10.",
   "explain": "$0{,}1x = 2 - 2e^{-t/10}$, jadi $x = 20(1 - e^{-t/10})$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 6: Jangka panjang, $x$ mendekati berapa mg?",
   "answer": "20",
   "hint": "Untuk $t \\to \\infty$, $e^{-t/10} \\to 0$.",
   "explain": "$x \\to 20$ mg.",
   "error": "salah-langkah-materi",
   "suffix": "mg"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: saat $x = 20$, laju keluar $0{,}1 \\times 20$ = ?",
   "answer": "2",
   "hint": "Kalikan.",
   "explain": "2 mg/menit, sama dengan yang masuk. Seimbang, jadi masuk akal.",
   "error": "salah-langkah-materi",
   "suffix": "mg/menit"
  }
 ],
 "conclusion": "Jadi $x = 20\\left(1 - e^{-t/10}\\right)$, dan dalam jangka panjang mendekati 20 mg."
}
```

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

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Selesaikan $\\dfrac{dy}{dx} = 3x^2 + 4$ dengan $y(0) = -1$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Solusi umum?",
   "options": [
    "$y = x^3 + 4x + C$",
    "$y = 6x + C$",
    "$y = x^3 + 4 + C$"
   ],
   "answer": "$y = x^3 + 4x + C$",
   "hint": "Integral 4 adalah $4x$.",
   "explain": "$y = x^3 + 4x + C$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$y(0) = -1$ memberi $C$ = ?",
   "answer": "-1",
   "hint": "Masukkan $x = 0$.",
   "explain": "$C = -1$, jadi $y = x^3 + 4x - 1$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $y = x^3 + 4x - 1$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Tentukan solusi umum $\\dfrac{dy}{dx} = \\dfrac{y}{x}$ untuk $x > 0$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Pisahkan variabel.",
   "options": [
    "$\\int \\frac{1}{y}\\,dy = \\int \\frac{1}{x}\\,dx$",
    "$\\int y\\,dy = \\int x\\,dx$",
    "$\\int x\\,dy = \\int y\\,dx$"
   ],
   "answer": "$\\int \\frac{1}{y}\\,dy = \\int \\frac{1}{x}\\,dx$",
   "hint": "Bagi dengan $y$, kalikan dengan $dx$.",
   "explain": "Semua $y$ di kiri, $x$ di kanan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Integralkan.",
   "options": [
    "$\\ln|y| = \\ln x + C$",
    "$\\ln|y| = \\ln x$",
    "$y = x + C$"
   ],
   "answer": "$\\ln|y| = \\ln x + C$",
   "hint": "Jangan lupa konstanta.",
   "explain": "$\\ln|y| = \\ln x + C$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Solusi umumnya?",
   "options": [
    "$y = Ax$",
    "$y = x + C$",
    "$y = e^x + C$"
   ],
   "answer": "$y = Ax$",
   "hint": "$|y| = e^C \\cdot x$.",
   "explain": "$y = Ax$ dengan $A = \\pm e^C$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $y = Ax$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Selesaikan $\\dfrac{dy}{dx} = xe^{-y}$ dengan $y(0) = 0$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Pisahkan variabel.",
   "options": [
    "$\\int e^y\\,dy = \\int x\\,dx$",
    "$\\int e^{-y}\\,dy = \\int x\\,dx$",
    "$\\int dy = \\int xe^{-y}\\,dx$"
   ],
   "answer": "$\\int e^y\\,dy = \\int x\\,dx$",
   "hint": "Kalikan kedua ruas dengan $e^y$.",
   "explain": "$e^y\\,dy = x\\,dx$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Integralkan.",
   "options": [
    "$e^y = \\frac{x^2}{2} + C$",
    "$e^y = x^2 + C$",
    "$y = \\frac{x^2}{2} + C$"
   ],
   "answer": "$e^y = \\frac{x^2}{2} + C$",
   "hint": "$\\int e^y\\,dy = e^y$.",
   "explain": "$e^y = \\frac{x^2}{2} + C$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$y(0) = 0$ memberi $C$ = ?",
   "answer": "1",
   "hint": "$e^0 = 0 + C$.",
   "explain": "$C = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Jadi $y$ = ?",
   "options": [
    "$\\ln\\left(\\frac{x^2}{2} + 1\\right)$",
    "$\\frac{x^2}{2} + 1$",
    "$\\ln\\frac{x^2}{2} + 1$"
   ],
   "answer": "$\\ln\\left(\\frac{x^2}{2} + 1\\right)$",
   "hint": "Ambil ln kedua ruas.",
   "explain": "$y = \\ln\\left(\\frac{x^2}{2} + 1\\right)$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $y = \\ln\\left(\\dfrac{x^2}{2} + 1\\right)$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Jumlah bakteri $P$ memenuhi $\\dfrac{dP}{dt} = kP$. Awalnya ada 500 bakteri dan jumlahnya menjadi dua kali lipat setiap 3 jam. Berapa jumlahnya setelah 6 jam, dan berapa $k$?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Setelah 3 jam, jumlahnya = ?",
   "answer": "1000",
   "hint": "Dua kali lipat dari 500.",
   "explain": "1.000 bakteri.",
   "error": "salah-langkah-materi",
   "suffix": "bakteri"
  },
  {
   "kind": "number",
   "prompt": "Setelah 6 jam, jumlahnya = ?",
   "answer": "2000",
   "hint": "Dua kali lipat lagi.",
   "explain": "$500 \\times 2^2 = 2.000$.",
   "error": "salah-langkah-materi",
   "suffix": "bakteri"
  },
  {
   "kind": "choice",
   "prompt": "$P = 500e^{kt}$ dengan $e^{3k} = 2$. $k$ = ?",
   "options": [
    "$\\frac{\\ln 2}{3}$",
    "$\\frac{2}{3}$",
    "$3\\ln 2$"
   ],
   "answer": "$\\frac{\\ln 2}{3}$",
   "hint": "Ambil ln kedua ruas.",
   "explain": "$3k = \\ln 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Nilai $k$, bulatkan ke 3 desimal.",
   "answer": "0,231",
   "hint": "$\\ln 2 \\approx 0{,}693$.",
   "explain": "$k \\approx 0{,}231$ per jam.",
   "error": "salah-pembulatan"
  }
 ],
 "conclusion": "Jadi setelah 6 jam ada 2.000 bakteri, dan $k = \\dfrac{\\ln 2}{3} \\approx 0{,}231$ per jam."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Air di tangki bocor sehingga laju turunnya tinggi air $h$ (m) sebanding dengan $\\sqrt{h}$. Awalnya $h = 16$, dan setelah 2 jam $h = 9$. Tentukan $h$ sebagai fungsi $t$ dan kapan tangki kosong.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Model $\\frac{dh}{dt} = -k\\sqrt{h}$. Setelah dipisah dan diintegralkan?",
   "options": [
    "$2\\sqrt{h} = -kt + C$",
    "$\\sqrt{h} = -kt + C$",
    "$\\ln h = -kt + C$"
   ],
   "answer": "$2\\sqrt{h} = -kt + C$",
   "hint": "$\\int h^{-1/2}\\,dh = 2h^{1/2}$.",
   "explain": "$2\\sqrt{h} = -kt + C$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$h(0) = 16$ memberi $C$ = ?",
   "answer": "8",
   "hint": "$2\\sqrt{16}$.",
   "explain": "$C = 8$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$h(2) = 9$: $2\\sqrt{9} = -2k + 8$. $k$ = ?",
   "answer": "1",
   "hint": "$6 = -2k + 8$.",
   "explain": "$k = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Jadi $h$ = ?",
   "options": [
    "$\\left(4 - \\frac{t}{2}\\right)^2$",
    "$(8 - t)^2$",
    "$16 - \\frac{7t}{2}$"
   ],
   "answer": "$\\left(4 - \\frac{t}{2}\\right)^2$",
   "hint": "$\\sqrt{h} = \\frac{8 - t}{2}$.",
   "explain": "$h = \\left(4 - \\frac{t}{2}\\right)^2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Tangki kosong saat $t$ = ?",
   "answer": "8",
   "hint": "$h = 0$ saat $4 - \\frac{t}{2} = 0$.",
   "explain": "$t = 8$ jam.",
   "error": "salah-langkah-materi",
   "suffix": "jam"
  }
 ],
 "conclusion": "Jadi $h = \\left(4 - \\dfrac{t}{2}\\right)^2$ dan tangki kosong setelah 8 jam."
}
```
