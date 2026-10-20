---
id: smp3-02-persamaan-kuadrat-lanjut
judul: Persamaan Kuadrat Lanjut
jenjang: smp3
moe: "Secondary 3 · Number and Algebra · N7 Equations and inequalities"
prasyarat: [smp2-03-pecahan-aljabar-rumus, smp2-04-fungsi-kuadrat, smp2-07-persamaan-kuadrat]
durasi_menit: 60
---

## Kenapa belajar ini?

Tidak semua persamaan kuadrat bisa difaktorkan dengan bilangan bulat. Coba faktorkan $x^2 - 4x - 3 = 0$: tidak ada dua bilangan bulat yang hasil kalinya $-3$ dan jumlahnya $-4$. Padahal soal sehari-hari, seperti ukuran kebun atau kecepatan perjalanan, sering menghasilkan persamaan seperti ini. Materi ini memberi cara yang **selalu** berhasil.

## Analogi

Bayangkan kamu memasang **ubin keramik** di lantai. Kamu punya:

- satu ubin besar berbentuk persegi, luasnya $x^2$ (sisinya $x$),
- beberapa ubin panjang, masing-masing berukuran $x \times 1$.

Untuk $x^2 + 6x$, kamu punya 1 ubin besar dan 6 ubin panjang. Agar susunannya **berbentuk persegi**, bagi ubin panjang menjadi dua kelompok: 3 di sisi kanan dan 3 di sisi bawah ubin besar. Ternyata ada **satu pojok yang kosong**, berukuran $3 \times 3 = 9$ ubin kecil. Kalau pojok itu diisi, susunannya menjadi persegi utuh bersisi $x + 3$:

$$x^2 + 6x + 9 = (x + 3)^2$$

```anim
{"type": "bangun", "title": "Ubin keramik: x² + 6x + 9 = (x + 3)²", "titik": {"A": [0, 5], "B": [5, 5], "C": [5, 0], "D": [0, 0], "E": [7, 5], "F": [7, 0], "G": [0, -2], "H": [5, -2], "I": [7, -2]}, "sisi": [["A", "B", "x"], ["B", "C"], ["C", "D"], ["D", "A", "x"], ["B", "E", "3"], ["E", "F"], ["F", "C"], ["D", "G", "3"], ["G", "H"], ["H", "C"], ["F", "I"], ["I", "H"]], "langkah": [{"say": "Ubin besar berbentuk persegi, sisinya $x$, luasnya $x^2$.", "sisi": 4}, {"say": "3 ubin panjang ($3x$) dipasang di kanan.", "sisi": 7, "sorot": ["BE", "EF", "FC"]}, {"say": "3 ubin panjang lagi ($3x$) dipasang di bawah. Total $6x$.", "sisi": 10, "sorot": ["DG", "GH", "HC"]}, {"say": "Pojok kanan bawah masih kosong: $3 \\times 3 = 9$ ubin kecil.", "sisi": 10, "sorot": ["F", "I", "H"]}, {"say": "Isi pojoknya. Sekarang persegi utuh bersisi $x + 3$: $x^2 + 6x + 9 = (x+3)^2$.", "sisi": 12, "sorot": ["FI", "IH"]}]}
```

Cara ini disebut **melengkapkan kuadrat sempurna**: kita "membeli" ubin pojok yang kurang. Analogi ubin ini akan kita pakai untuk menurunkan rumus abc.

## Konsep

### Melengkapkan kuadrat sempurna

Untuk $x^2 + bx$, ubin panjang sebanyak $b$ dibagi dua: $\frac{b}{2}$ di kanan dan $\frac{b}{2}$ di bawah. Pojok yang kosong berukuran $\left(\frac{b}{2}\right)^2$. Jadi:

$$x^2 + bx = \left(x + \frac{b}{2}\right)^2 - \left(\frac{b}{2}\right)^2$$

Kita menambah ubin pojok agar menjadi persegi, lalu menguranginya lagi agar nilainya tidak berubah.

**Cara menyelesaikan $x^2 + bx + c = 0$:**

1. Pindahkan konstanta: $x^2 + bx = -c$.
2. Tambahkan $\left(\frac{b}{2}\right)^2$ ke **kedua ruas**.
3. Tulis ruas kiri sebagai $\left(x + \frac{b}{2}\right)^2$.
4. Akarkan kedua ruas, ingat tanda $\pm$.
5. Selesaikan untuk $x$.

Jika koefisien $x^2$ bukan 1, bagi seluruh persamaan dengan koefisien itu dulu.

### Rumus kuadrat (rumus abc)

Kita lakukan melengkapkan kuadrat pada bentuk umum $ax^2 + bx + c = 0$, dengan $a \ne 0$.

**Bagi dengan $a$:**
$$x^2 + \frac{b}{a}x + \frac{c}{a} = 0$$

**Pindahkan konstanta:**
$$x^2 + \frac{b}{a}x = -\frac{c}{a}$$

**Tambah ubin pojok** $\left(\frac{b}{2a}\right)^2 = \frac{b^2}{4a^2}$ di kedua ruas:
$$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2}{4a^2} - \frac{c}{a} = \frac{b^2 - 4ac}{4a^2}$$

**Akarkan kedua ruas:**
$$x + \frac{b}{2a} = \pm\frac{\sqrt{b^2 - 4ac}}{2a}$$

**Pindahkan** $\frac{b}{2a}$:

$$\boxed{x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}}$$

Jadi rumus abc **bukan** rumus ajaib. Rumus ini adalah hasil melengkapkan kuadrat yang sudah dikerjakan sekali untuk semua persamaan kuadrat.

```anim
{"type": "persamaan", "title": "Menurunkan rumus abc dengan ubin pojok", "baris": [{"tex": "ax^2 + bx + c = 0", "say": "Mulai dari bentuk umum."}, {"tex": "x^2 + \\frac{b}{a}x = -\\frac{c}{a}", "say": "Bagi dengan $a$, lalu pindahkan konstanta.", "op": "$\\div a$"}, {"tex": "\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}", "say": "Tambahkan ubin pojok $\\frac{b^2}{4a^2}$ di kedua ruas.", "op": "+ ubin pojok"}, {"tex": "x + \\frac{b}{2a} = \\pm\\frac{\\sqrt{b^2 - 4ac}}{2a}", "say": "Akarkan kedua ruas. Jangan lupa $\\pm$.", "op": "$\\sqrt{\\ }$"}, {"tex": "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}", "say": "Pindahkan $\\frac{b}{2a}$. Inilah rumus abc.", "op": "$-\\frac{b}{2a}$"}]}
```

Bilangan $b^2 - 4ac$ di bawah akar menentukan banyak penyelesaian. Jika $b^2 - 4ac < 0$, tidak ada bilangan real yang kuadratnya negatif, jadi persamaan **tidak punya penyelesaian real**.

### Cara grafik

Penyelesaian $ax^2 + bx + c = 0$ adalah nilai $x$ tempat grafik $y = ax^2 + bx + c$ **memotong sumbu-$x$** (karena di sana $y = 0$). Untuk menyelesaikan $ax^2 + bx + c = k$, cari nilai $x$ tempat parabola memotong garis mendatar $y = k$.

Cara grafik memberi jawaban **perkiraan**, sesuai ketelitian gambar. Jika parabola tidak menyentuh sumbu-$x$, persamaan tidak punya penyelesaian real.

```anim
{"type": "grafik", "title": "Titik potong dengan sumbu-x adalah penyelesaian", "xmin": -4, "xmax": 5, "ymin": -7, "ymax": 9, "kurva": [{"f": "x^2-x-6", "label": "y = x^2 - x - 6"}, {"f": "x^2+2x+3", "label": "y = x^2 + 2x + 3"}], "titik": [{"x": -2, "y": 0, "label": "x = −2"}, {"x": 3, "y": 0, "label": "x = 3"}], "langkah": [{"say": "Bidang koordinat.", "kurva": 0}, {"say": "$y = x^2 - x - 6$ memotong sumbu-$x$ di dua tempat.", "kurva": 1}, {"say": "Di titik potong $y = 0$, jadi $x = -2$ dan $x = 3$ adalah penyelesaian $x^2 - x - 6 = 0$.", "kurva": 1, "titik": 2}, {"say": "$y = x^2 + 2x + 3$ tidak menyentuh sumbu-$x$: tidak ada penyelesaian real ($b^2 - 4ac = -8 < 0$).", "kurva": 2, "titik": 2}]}
```

### Persamaan pecahan yang menjadi kuadrat

Persamaan seperti $\frac{3}{x} + \frac{2}{x + 1} = 2$ diselesaikan dengan **mengalikan kedua ruas dengan KPK penyebut**. Hasilnya sering berupa persamaan kuadrat. Ingat: nilai yang membuat penyebut nol (di sini $x = 0$ dan $x = -1$) **tidak boleh** menjadi jawaban.

### Menyusun persamaan dari soal cerita

1. Pilih variabel dan tulis artinya beserta satuannya.
2. Nyatakan besaran lain dalam variabel itu.
3. Susun persamaan dari informasi di soal.
4. Selesaikan, lalu **tolak** jawaban yang tidak masuk akal (panjang negatif, kecepatan negatif).

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Melengkapkan kuadrat

```soal
{
 "title": "Contoh 1",
 "text": "Selesaikan $x^2 - 4x - 3 = 0$ dengan melengkapkan kuadrat. Berikan jawaban dalam 2 tempat desimal.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pindahkan konstanta.",
   "options": [
    "$x^2 - 4x = 3$",
    "$x^2 - 4x = -3$",
    "$x^2 = 4x - 3$"
   ],
   "answer": "$x^2 - 4x = 3$",
   "hint": "Tambahkan 3 ke kedua ruas.",
   "explain": "$-3$ pindah ke kanan menjadi $+3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Cari ubin pojok. $b = -4$, jadi $\\left(\\frac{b}{2}\\right)^2$ = ?",
   "answer": "4",
   "hint": "Setengah dari −4 adalah −2, lalu kuadratkan.",
   "explain": "$(-2)^2 = 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tambahkan 4 ke kedua ruas: $(x - 2)^2 = 3 + 4$. Ruas kanan = ?",
   "answer": "7",
   "hint": "Ubin pojok ditambah juga di ruas kanan.",
   "explain": "$(x - 2)^2 = 7$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Akarkan kedua ruas.",
   "options": [
    "$x - 2 = \\pm\\sqrt{7}$",
    "$x - 2 = \\sqrt{7}$",
    "$x - 2 = \\pm 7$"
   ],
   "answer": "$x - 2 = \\pm\\sqrt{7}$",
   "hint": "Bilangan negatif yang dikuadratkan juga positif.",
   "explain": "Ada dua kemungkinan: $+\\sqrt{7}$ dan $-\\sqrt{7}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: $x = 2 + \\sqrt{7}$ = ? (bulatkan ke 2 desimal)",
   "answer": "4,65",
   "hint": "$\\sqrt{7} \\approx 2{,}6458$.",
   "explain": "$x \\approx 4{,}65$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 6: $x = 2 - \\sqrt{7}$ = ? (bulatkan ke 2 desimal)",
   "answer": "-0,65",
   "hint": "Hasilnya negatif.",
   "explain": "$x \\approx -0{,}65$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: untuk $x = 2 + \\sqrt{7}$, berapa nilai $(x - 2)^2$?",
   "answer": "7",
   "hint": "$x - 2 = \\sqrt{7}$.",
   "explain": "$(\\sqrt{7})^2 = 7$, sesuai langkah 3. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x = 2 \\pm \\sqrt{7}$, yaitu $x \\approx 4{,}65$ atau $x \\approx -0{,}65$."
}
```

### Contoh 2: Rumus abc

```soal
{
 "title": "Contoh 2",
 "text": "Selesaikan $2x^2 + 5x - 4 = 0$ (2 tempat desimal).",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Baca koefisien. Berapa nilai $c$?",
   "answer": "-4",
   "hint": "Perhatikan tandanya.",
   "explain": "$a = 2$, $b = 5$, $c = -4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung $b^2 - 4ac$.",
   "answer": "57",
   "hint": "$25 - 4(2)(-4)$. Minus dikali minus menjadi plus.",
   "explain": "$25 + 32 = 57$. Positif, jadi ada dua penyelesaian.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Masukkan ke rumus.",
   "options": [
    "$x = \\frac{-5 \\pm \\sqrt{57}}{4}$",
    "$x = \\frac{5 \\pm \\sqrt{57}}{4}$",
    "$x = -5 \\pm \\frac{\\sqrt{57}}{4}$"
   ],
   "answer": "$x = \\frac{-5 \\pm \\sqrt{57}}{4}$",
   "hint": "Pembilang $-b$, penyebut $2a$ membagi seluruh pembilang.",
   "explain": "$-b = -5$ dan $2a = 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $x = \\frac{-5 + \\sqrt{57}}{4}$ = ? (2 desimal)",
   "answer": "0,64",
   "hint": "$\\sqrt{57} \\approx 7{,}5498$.",
   "explain": "$\\frac{2{,}5498}{4} \\approx 0{,}64$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: $x = \\frac{-5 - \\sqrt{57}}{4}$ = ? (2 desimal)",
   "answer": "-3,14",
   "hint": "$-5 - 7{,}5498 = -12{,}5498$.",
   "explain": "$\\frac{-12{,}5498}{4} \\approx -3{,}14$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: substitusi $x = 0{,}6375$ ke $2x^2 + 5x - 4$. Hasilnya kira-kira? (bulatkan ke 1 desimal)",
   "answer": "0",
   "hint": "$2(0{,}4064) + 3{,}1875 - 4$.",
   "explain": "Hasilnya hampir 0. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x \\approx 0{,}64$ atau $x \\approx -3{,}14$."
}
```

### Contoh 3: Cara grafik

Lihat grafiknya dulu, lalu jawab langkah-langkahnya.

```anim
{"type": "grafik", "title": "Grafik y = x² − 2x − 2 dan garis y = 1", "xmin": -2.5, "xmax": 4.5, "ymin": -4, "ymax": 7, "kurva": [{"f": "x^2-2x-2", "label": "y = x^2 - 2x - 2", "dari": -2, "sampai": 4}], "garis": [{"y": 1}], "langkah": [{"say": "Plot titik-titik dari tabel dan hubungkan dengan kurva mulus.", "kurva": 1, "garis": 0}, {"say": "Tambahkan garis mendatar $y = 1$ untuk bagian (b).", "kurva": 1, "garis": 1}]}
```

```soal
{
 "title": "Contoh 3",
 "text": "Gunakan grafik $y = x^2 - 2x - 2$ untuk menyelesaikan (a) $x^2 - 2x - 2 = 0$, (b) $x^2 - 2x - 2 = 1$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Lengkapi tabel. Nilai $y$ saat $x = 1$?",
   "answer": "-3",
   "hint": "$1 - 2 - 2$.",
   "explain": "$y = -3$. Ini titik terendah parabola, $(1, -3)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Nilai $y$ saat $x = -1$?",
   "answer": "1",
   "hint": "$(-1)^2 - 2(-1) - 2 = 1 + 2 - 2$.",
   "explain": "$y = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Di mana parabola memotong sumbu-$x$ (a)?",
   "options": [
    "Di antara −1 dan 0, serta di antara 2 dan 3",
    "Di antara 0 dan 1, serta di antara 1 dan 2",
    "Tidak memotong"
   ],
   "answer": "Di antara −1 dan 0, serta di antara 2 dan 3",
   "hint": "Cari tempat nilai $y$ di tabel berganti tanda.",
   "explain": "$y$ berganti dari 1 ke −2 dan dari −2 ke 1.",
   "error": "salah-baca-skala"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Perkiraan penyelesaian (a) dari gambar yang teliti?",
   "options": [
    "$x \\approx -0{,}7$ atau $x \\approx 2{,}7$",
    "$x \\approx -0{,}3$ atau $x \\approx 2{,}3$",
    "$x = -1$ atau $x = 3$"
   ],
   "answer": "$x \\approx -0{,}7$ atau $x \\approx 2{,}7$",
   "hint": "Titik potong lebih dekat ke −1 dan ke 3, karena $|1|$ lebih kecil dari $|-2|$.",
   "explain": "Grafiknya memotong sumbu-$x$ di sekitar −0,7 dan 2,7.",
   "error": "salah-baca-skala"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Garis $y = 1$ memotong parabola di dua titik (b). Berapa nilai $x$ yang negatif?",
   "answer": "-1",
   "hint": "Lihat tabel: di mana $y = 1$?",
   "explain": "Saat $x = -1$, $y = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 6: Berapa nilai $x$ yang positif (b)?",
   "answer": "3",
   "hint": "Parabola simetris terhadap $x = 1$.",
   "explain": "Saat $x = 3$, $y = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $3^2 - 2(3) - 2$ = ?",
   "answer": "1",
   "hint": "9 − 6 − 2.",
   "explain": "Hasilnya 1, jadi $x = 3$ benar. Rumus abc untuk (a) memberi $1 \\pm \\sqrt{3} \\approx 2{,}73$ atau $-0{,}73$, cocok dengan grafik.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi (a) $x \\approx -0{,}7$ atau $x \\approx 2{,}7$; (b) $x = -1$ atau $x = 3$.",
 "visual": {
  "type": "table",
  "head": [
   "x",
   "−2",
   "−1",
   "0",
   "1",
   "2",
   "3",
   "4"
  ],
  "rows": [
   [
    "y",
    "6",
    "?",
    "−2",
    "?",
    "−2",
    "1",
    "6"
   ]
  ]
 }
}
```

### Contoh 4: Persamaan pecahan

```soal
{
 "title": "Contoh 4",
 "text": "Selesaikan $\\dfrac{3}{x} + \\dfrac{2}{x + 1} = 2$ (2 tempat desimal).",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Catat nilai terlarang.",
   "options": [
    "$x \\ne 0$ dan $x \\ne -1$",
    "$x \\ne 0$ dan $x \\ne 1$",
    "$x \\ne 3$ dan $x \\ne 2$"
   ],
   "answer": "$x \\ne 0$ dan $x \\ne -1$",
   "hint": "Nilai yang membuat penyebut nol.",
   "explain": "Penyebut $x$ dan $x + 1$ nol saat $x = 0$ dan $x = -1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Kalikan kedua ruas dengan $x(x + 1)$. Hasilnya?",
   "options": [
    "$3(x + 1) + 2x = 2x(x + 1)$",
    "$3x + 2(x + 1) = 2$",
    "$3(x + 1) + 2x = 2$"
   ],
   "answer": "$3(x + 1) + 2x = 2x(x + 1)$",
   "hint": "Ruas kanan juga dikalikan.",
   "explain": "Setiap suku dikalikan $x(x + 1)$, termasuk angka 2 di ruas kanan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Rapikan menjadi bentuk kuadrat.",
   "options": [
    "$2x^2 - 3x - 3 = 0$",
    "$2x^2 + 3x + 3 = 0$",
    "$2x^2 - 5x - 3 = 0$"
   ],
   "answer": "$2x^2 - 3x - 3 = 0$",
   "hint": "Kiri: $5x + 3$. Kanan: $2x^2 + 2x$. Pindahkan semua ke kanan.",
   "explain": "$2x^2 + 2x - 5x - 3 = 2x^2 - 3x - 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Hitung $b^2 - 4ac$ dengan $a = 2$, $b = -3$, $c = -3$.",
   "answer": "33",
   "hint": "$9 - 4(2)(-3)$.",
   "explain": "$9 + 24 = 33$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: $x = \\frac{3 + \\sqrt{33}}{4}$ = ? (2 desimal)",
   "answer": "2,19",
   "hint": "$\\sqrt{33} \\approx 5{,}7446$. Ingat $-b = 3$.",
   "explain": "$\\frac{8{,}7446}{4} \\approx 2{,}19$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 6: $x = \\frac{3 - \\sqrt{33}}{4}$ = ? (2 desimal)",
   "answer": "-0,69",
   "hint": "$3 - 5{,}7446 = -2{,}7446$.",
   "explain": "$\\frac{-2{,}7446}{4} \\approx -0{,}69$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: apakah ada jawaban yang harus dibuang?",
   "options": [
    "Tidak, keduanya bukan 0 atau −1",
    "Ya, −0,69 dibuang karena negatif"
   ],
   "answer": "Tidak, keduanya bukan 0 atau −1",
   "hint": "Bandingkan dengan nilai terlarang di langkah 1.",
   "explain": "Nilai negatif boleh, asal tidak membuat penyebut nol. Substitusi $x \\approx 2{,}186$ memberi $1{,}372 + 0{,}628 = 2$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x \\approx 2{,}19$ atau $x \\approx -0{,}69$."
}
```

### Contoh 5: Soal cerita

```soal
{
 "title": "Contoh 5",
 "text": "Dimas bersepeda sejauh 30 km dari Ubud ke Denpasar. Jika ia mengayuh 3 km/jam lebih cepat, ia akan tiba setengah jam lebih awal. Berapa kecepatan Dimas semula?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Misalkan kecepatan semula $x$ km/jam. Kecepatan baru?",
   "options": [
    "$x + 3$",
    "$3x$",
    "$x - 3$"
   ],
   "answer": "$x + 3$",
   "hint": "Ia mengayuh 3 km/jam lebih cepat.",
   "explain": "Kecepatan baru $x + 3$ km/jam.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Waktu semula (jam)?",
   "options": [
    "$\\frac{30}{x}$",
    "$30x$",
    "$\\frac{x}{30}$"
   ],
   "answer": "$\\frac{30}{x}$",
   "hint": "Waktu = jarak ÷ kecepatan.",
   "explain": "Waktu semula $\\frac{30}{x}$, waktu baru $\\frac{30}{x + 3}$.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Susun persamaan.",
   "options": [
    "$\\frac{30}{x} - \\frac{30}{x + 3} = \\frac{1}{2}$",
    "$\\frac{30}{x + 3} - \\frac{30}{x} = \\frac{1}{2}$",
    "$\\frac{30}{x} + \\frac{30}{x + 3} = \\frac{1}{2}$"
   ],
   "answer": "$\\frac{30}{x} - \\frac{30}{x + 3} = \\frac{1}{2}$",
   "hint": "Waktu semula lebih lama.",
   "explain": "Waktu semula dikurangi waktu baru sama dengan setengah jam.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Kalikan dengan $2x(x + 3)$ dan rapikan.",
   "options": [
    "$x^2 + 3x - 180 = 0$",
    "$x^2 + 3x + 180 = 0$",
    "$x^2 - 3x - 180 = 0$"
   ],
   "answer": "$x^2 + 3x - 180 = 0$",
   "hint": "$60(x + 3) - 60x = x(x + 3)$.",
   "explain": "$180 = x^2 + 3x$, jadi $x^2 + 3x - 180 = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Hitung $b^2 - 4ac$.",
   "answer": "729",
   "hint": "$9 - 4(1)(-180)$.",
   "explain": "$9 + 720 = 729$, dan $\\sqrt{729} = 27$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 6: $x = \\frac{-3 + 27}{2}$ = ?",
   "answer": "12",
   "hint": "24 ÷ 2.",
   "explain": "$x = 12$. Akar lainnya $\\frac{-3 - 27}{2} = -15$ ditolak karena kecepatan tidak negatif.",
   "error": "salah-langkah-materi",
   "suffix": "km/jam"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $\\frac{30}{12} - \\frac{30}{15}$ = ? (dalam jam)",
   "answer": "0,5",
   "hint": "2,5 − 2.",
   "explain": "Selisihnya 0,5 jam. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "jam"
  }
 ],
 "conclusion": "Kecepatan Dimas semula 12 km/jam."
}
```

## Kesalahan yang sering terjadi

- **Lupa tanda $\pm$.** Dari $(x - 2)^2 = 7$ hanya menulis $x = 2 + \sqrt{7}$. Bilangan negatif yang dikuadratkan juga positif, jadi ada dua kemungkinan.
- **Ubin pojok hanya ditambah di satu ruas.** Dari $x^2 - 4x = 3$ menulis $(x - 2)^2 = 3$. Ubin pojok 4 harus ditambahkan di kedua ruas: $(x - 2)^2 = 7$.
- **Salah tanda pada rumus abc.** Dengan $b = -3$, menulis $-b = -3$. Yang benar $-b = -(-3) = 3$. Begitu juga $-4ac$ dengan $c$ negatif menjadi positif. Tulis $a$, $b$, $c$ beserta tandanya sebelum menghitung.
- **Garis pecahan rumus abc terlalu pendek.** Menghitung $-b \pm \frac{\sqrt{b^2 - 4ac}}{2a}$. Penyebut $2a$ membagi **seluruh** pembilang, termasuk $-b$.
- **Tidak memeriksa nilai terlarang atau konteks.** Pada persamaan pecahan, jawaban yang membuat penyebut nol harus dibuang. Pada soal cerita, kecepatan atau panjang negatif harus ditolak.

## Ringkasan

- Melengkapkan kuadrat: $x^2 + bx = \left(x + \frac{b}{2}\right)^2 - \left(\frac{b}{2}\right)^2$, seperti melengkapi ubin pojok.
- Rumus abc $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ diturunkan dari melengkapkan kuadrat pada $ax^2 + bx + c = 0$.
- Jika $b^2 - 4ac < 0$, tidak ada penyelesaian real.
- Cara grafik: penyelesaian $ax^2 + bx + c = k$ adalah absis titik potong parabola dengan garis $y = k$.
- Persamaan pecahan: kalikan dengan KPK penyebut, buang nilai yang membuat penyebut nol.
- Soal cerita: definisikan variabel, susun persamaan, selesaikan, tolak jawaban yang tidak masuk akal, cek.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Selesaikan $x^2 + 8x + 5 = 0$ dengan melengkapkan kuadrat (2 tempat desimal).",
 "steps": [
  {
   "kind": "number",
   "prompt": "Pindahkan 5, lalu cari ubin pojok $\\left(\\frac{8}{2}\\right)^2$.",
   "answer": "16",
   "hint": "Setengah dari 8, lalu kuadratkan.",
   "explain": "$4^2 = 16$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$(x + 4)^2 = -5 + 16$. Ruas kanan = ?",
   "answer": "11",
   "hint": "Tambahkan 16 ke $-5$.",
   "explain": "$(x + 4)^2 = 11$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$x = -4 + \\sqrt{11}$ = ? (2 desimal)",
   "answer": "-0,68",
   "hint": "$\\sqrt{11} \\approx 3{,}3166$.",
   "explain": "$x \\approx -0{,}68$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "$x = -4 - \\sqrt{11}$ = ? (2 desimal)",
   "answer": "-7,32",
   "hint": "Jangan lupa tanda minus.",
   "explain": "$x \\approx -7{,}32$.",
   "error": "salah-pembulatan"
  }
 ],
 "conclusion": "Jadi $x \\approx -0{,}68$ atau $x \\approx -7{,}32$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Selesaikan $3x^2 - 7x + 1 = 0$ dengan rumus abc (2 tempat desimal).",
 "steps": [
  {
   "kind": "number",
   "prompt": "Hitung $b^2 - 4ac$.",
   "answer": "37",
   "hint": "$(-7)^2 - 4(3)(1)$.",
   "explain": "$49 - 12 = 37$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Masukkan ke rumus.",
   "options": [
    "$x = \\frac{7 \\pm \\sqrt{37}}{6}$",
    "$x = \\frac{-7 \\pm \\sqrt{37}}{6}$",
    "$x = \\frac{7 \\pm \\sqrt{37}}{3}$"
   ],
   "answer": "$x = \\frac{7 \\pm \\sqrt{37}}{6}$",
   "hint": "$-b = -(-7)$ dan $2a = 6$.",
   "explain": "$-b = 7$, penyebut $2a = 6$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Nilai $x$ yang lebih besar (2 desimal)?",
   "answer": "2,18",
   "hint": "$\\sqrt{37} \\approx 6{,}0828$.",
   "explain": "$\\frac{13{,}0828}{6} \\approx 2{,}18$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Nilai $x$ yang lebih kecil (2 desimal)?",
   "answer": "0,15",
   "hint": "$7 - 6{,}0828 = 0{,}9172$.",
   "explain": "$\\frac{0{,}9172}{6} \\approx 0{,}15$.",
   "error": "salah-pembulatan"
  }
 ],
 "conclusion": "Jadi $x \\approx 2{,}18$ atau $x \\approx 0{,}15$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Tulis $x^2 - 6x + 2$ dalam bentuk $(x - p)^2 - q$, lalu selesaikan $x^2 - 6x + 2 = 0$ (2 tempat desimal).",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Bentuk $(x - p)^2 - q$-nya?",
   "options": [
    "$(x - 3)^2 - 7$",
    "$(x - 3)^2 + 2$",
    "$(x - 6)^2 - 34$",
    "$(x - 3)^2 - 11$"
   ],
   "answer": "$(x - 3)^2 - 7$",
   "hint": "Ubin pojoknya $\\left(\\frac{-6}{2}\\right)^2 = 9$; tambah 9 lalu kurangi 9.",
   "explain": "$x^2 - 6x + 9 - 9 + 2 = (x - 3)^2 - 7$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Dari $(x - 3)^2 = 7$: $x = 3 + \\sqrt{7}$ = ? (2 desimal)",
   "answer": "5,65",
   "hint": "$\\sqrt{7} \\approx 2{,}6458$.",
   "explain": "$x \\approx 5{,}65$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "$x = 3 - \\sqrt{7}$ = ? (2 desimal)",
   "answer": "0,35",
   "hint": "Ingat tanda $\\pm$.",
   "explain": "$x \\approx 0{,}35$.",
   "error": "salah-pembulatan"
  }
 ],
 "conclusion": "Jadi $(x - 3)^2 - 7$, dan $x \\approx 5{,}65$ atau $x \\approx 0{,}35$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Selesaikan $\\dfrac{4}{x - 1} = x + 2$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Kalikan kedua ruas dengan $x - 1$ dan rapikan.",
   "options": [
    "$x^2 + x - 6 = 0$",
    "$x^2 + x + 2 = 0$",
    "$x^2 - x - 6 = 0$"
   ],
   "answer": "$x^2 + x - 6 = 0$",
   "hint": "$(x + 2)(x - 1) = x^2 + x - 2$.",
   "explain": "$4 = x^2 + x - 2$, jadi $x^2 + x - 6 = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Faktorkan.",
   "options": [
    "$(x + 3)(x - 2) = 0$",
    "$(x - 3)(x + 2) = 0$",
    "$(x + 6)(x - 1) = 0$"
   ],
   "answer": "$(x + 3)(x - 2) = 0$",
   "hint": "Cari dua bilangan yang hasil kalinya −6 dan jumlahnya 1.",
   "explain": "3 × (−2) = −6 dan 3 + (−2) = 1.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Penyelesaian yang positif?",
   "answer": "2",
   "hint": "Dari $x - 2 = 0$.",
   "explain": "$x = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Penyelesaian yang negatif?",
   "answer": "-3",
   "hint": "Dari $x + 3 = 0$.",
   "explain": "$x = -3$. Keduanya bukan nilai terlarang $x = 1$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x = 2$ atau $x = -3$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Panjang sebuah taman persegi panjang 4 m lebih dari lebarnya, dan luasnya $50 \\text{ m}^2$. Hitung lebar dan panjang taman (2 tempat desimal).",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Misalkan lebar $w$ m. Persamaannya?",
   "options": [
    "$w^2 + 4w - 50 = 0$",
    "$w^2 + 4w + 50 = 0$",
    "$2w + 4 = 50$"
   ],
   "answer": "$w^2 + 4w - 50 = 0$",
   "hint": "Luas = panjang × lebar = $w(w + 4)$.",
   "explain": "$w(w + 4) = 50$, jadi $w^2 + 4w - 50 = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Hitung $b^2 - 4ac$.",
   "answer": "216",
   "hint": "$16 - 4(1)(-50)$.",
   "explain": "$16 + 200 = 216$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Lebar taman (2 desimal)?",
   "answer": "5,35",
   "hint": "$w = \\frac{-4 + \\sqrt{216}}{2}$; akar negatif ditolak. $\\sqrt{216} \\approx 14{,}697$.",
   "explain": "$w \\approx 5{,}35$ m.",
   "error": "salah-pembulatan",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Panjang taman (2 desimal)?",
   "answer": "9,35",
   "hint": "Panjang = lebar + 4.",
   "explain": "Panjang $\\approx 9{,}35$ m.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  }
 ],
 "conclusion": "Lebar sekitar 5,35 m dan panjang sekitar 9,35 m."
}
```
