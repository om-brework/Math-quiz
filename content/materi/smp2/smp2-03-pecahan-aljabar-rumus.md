---
id: smp2-03-pecahan-aljabar-rumus
judul: Pecahan Aljabar dan Mengubah Subjek Rumus
jenjang: smp2
moe: "Secondary 2 · Number and Algebra · N5 Algebraic expressions and formulae"
prasyarat: [smp1-09-persamaan-linear, smp2-02-ekspansi-faktorisasi]
durasi_menit: 60
---

## Kenapa belajar ini?

Rumus sering harus "dibalik". Rumus suhu mengubah Celsius ke Fahrenheit, tetapi kadang kita perlu sebaliknya. Rumus luas memberi luas dari ukuran, tetapi kadang ukurannya yang dicari. Pecahan aljabar muncul saat kita menyederhanakan rumus seperti ini. Aturannya sama dengan pecahan biasa yang sudah kamu kuasai.

## Analogi

Bayangkan setiap bentuk aljabar sebagai **kado yang dibungkus berlapis-lapis**.

- **Faktor** adalah satu bungkus utuh. Pada $\frac{3(x + 2)}{5(x + 2)}$, $(x + 2)$ adalah satu bungkus utuh di atas dan di bawah. Bungkus yang sama di atas dan di bawah boleh dibuang bersama, karena $\frac{x + 2}{x + 2} = 1$.
- Pada $\frac{x + 2}{x}$, huruf $x$ di atas **terlem** di dalam bungkus bersama angka 2. Kamu tidak boleh mengambilnya sendirian.
- **Mengubah subjek rumus** seperti membuka kado. Huruf yang kita cari ada di tengah. Lapisan yang dipasang **terakhir** dibuka **pertama**.

```anim
{"type": "persamaan", "title": "Membungkus lalu membuka kado", "baris": [{"tex": "t", "say": "Kado di tengah adalah $t$."}, {"tex": "at", "say": "Lapisan pertama: $t$ dikali $a$.", "op": "\\times a"}, {"tex": "u + at = v", "say": "Lapisan kedua (terakhir): ditambah $u$. Jadilah rumus $v = u + at$.", "op": "+ u"}, {"tex": "at = v - u", "say": "Membuka: lapisan terakhir dibuka pertama. Kurangi $u$ di kedua ruas.", "op": "- u"}, {"tex": "t = \\frac{v - u}{a}", "say": "Lalu buka lapisan kali: bagi kedua ruas dengan $a$.", "op": "\\div a"}]}
```

## Konsep

### Menyederhanakan pecahan aljabar

Pecahan aljabar adalah pecahan yang pembilang atau penyebutnya memuat variabel, misalnya $\frac{x^2 - 9}{x + 3}$. Langkahnya:

1. **Faktorkan** pembilang dan penyebut sepenuhnya.
2. **Coret faktor yang sama** (bungkus utuh yang sama).

Alasannya sama dengan $\frac{6}{9} = \frac{2 \times 3}{3 \times 3} = \frac{2}{3}$. Kita membagi atas dan bawah dengan bilangan yang sama.

```anim
{"type": "pecahan", "parts": 9, "shaded": 6, "shape": "batang", "name": "6/9", "title": "6/9 sama dengan 2/3"}
```

Penyebut tidak boleh nol, jadi nilai variabel yang membuat penyebut nol tidak diperbolehkan.

```anim
{"type": "persamaan", "title": "Faktorkan, lalu coret bungkus yang sama", "baris": [{"tex": "\\frac{x^2 - 9}{x + 3}", "say": "Pecahan aljabar. Belum boleh mencoret apa pun."}, {"tex": "\\frac{(x - 3)(x + 3)}{x + 3}", "say": "Faktorkan pembilang: $x^2 - 9 = (x - 3)(x + 3)$.", "op": "\\text{faktorkan}"}, {"tex": "\\frac{(x - 3)\\cancel{(x + 3)}}{\\cancel{x + 3}}", "say": "Bungkus $(x + 3)$ ada di atas dan di bawah, jadi boleh dicoret.", "op": "\\text{coret}"}, {"tex": "x - 3", "say": "Hasilnya $x - 3$, dengan syarat $x \\neq -3$."}]}
```

### Mengalikan dan membagi

Seperti pecahan biasa:

$$\frac{a}{b} \times \frac{c}{d} = \frac{ac}{bd}, \qquad \frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c}$$

Faktorkan dulu semua bagian, lalu coret faktor yang sama **sebelum** mengalikan. Hitungannya jadi jauh lebih ringan.

### Menjumlah dan mengurangi

Samakan penyebut dulu, juga seperti pecahan biasa. Penyebut bersama yang paling sederhana adalah **KPK** dari penyebut-penyebutnya.

$$\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}$$

Saat mengurangi, beri **kurung** pada pembilang kedua, karena tanda minus berlaku untuk seluruh bungkus.

### Mengubah subjek rumus

**Subjek** rumus adalah variabel yang berdiri sendiri di satu ruas. Pada $v = u + at$, subjeknya $v$. Untuk membuat $t$ menjadi subjek:

1. Lihat apa yang terjadi pada $t$: $t$ **dikali** $a$, lalu **ditambah** $u$.
2. Buka dari lapisan terakhir: **kurangi** $u$ dari kedua ruas, lalu **bagi** dengan $a$.

$$v - u = at \quad \Rightarrow \quad t = \frac{v - u}{a}$$

Setiap langkah dilakukan pada kedua ruas, seperti pada persamaan linear. Bedanya, hasil akhirnya rumus, bukan angka.

Kalau subjek baru dikuadratkan, buka dengan akar kuadrat di langkah terakhir.

```visual
{"type": "table", "head": ["Lapisan pada t (dipasang)", "Cara membuka (urutan terbalik)"], "rows": [["1. dikali a", "2. bagi kedua ruas dengan a"], ["2. ditambah u", "1. kurangi kedua ruas dengan u"]], "caption": "Yang dipasang terakhir dibuka pertama."}
```

### Mencari nilai dalam rumus

Ada dua cara:

- Masukkan angka ke rumus asli, lalu selesaikan persamaannya.
- Ubah subjek dulu, lalu masukkan angka. Cara ini lebih efisien kalau rumusnya dipakai berkali-kali.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menyederhanakan

```soal
{
 "title": "Menyederhanakan",
 "text": "Sederhanakan (a) $\\frac{6x^2y}{9xy^3}$ dan (b) $\\frac{x^2 - 9}{x^2 + 5x + 6}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1 (a): FPB dari 6 dan 9 adalah?",
   "answer": "3",
   "hint": "Bilangan terbesar yang membagi 6 dan 9.",
   "explain": "FPB = 3. Coret 3 di atas dan bawah: sisa 2 dan 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2 (a): Coret satu $x$ dan satu $y$. Hasilnya?",
   "options": [
    "$\\frac{2x}{3y^2}$",
    "$\\frac{2x^2}{3y^3}$",
    "$\\frac{2}{3xy^2}$"
   ],
   "answer": "$\\frac{2x}{3y^2}$",
   "hint": "Di atas ada $x^2$, di bawah $x$. Di atas $y$, di bawah $y^3$.",
   "explain": "Sisa $x$ di atas dan $y^2$ di bawah: $\\frac{2x}{3y^2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3 (b): Faktorkan $x^2 + 5x + 6$.",
   "options": [
    "$(x + 2)(x + 3)$",
    "$(x + 1)(x + 6)$",
    "$(x - 2)(x - 3)$"
   ],
   "answer": "$(x + 2)(x + 3)$",
   "hint": "Dua bilangan dengan hasil kali 6 dan jumlah 5.",
   "explain": "$(x + 2)(x + 3)$. Pembilangnya $(x - 3)(x + 3)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4 (b): Coret bungkus yang sama. Hasilnya?",
   "options": [
    "$\\frac{x - 3}{x + 2}$",
    "$\\frac{-9}{5x + 6}$",
    "$\\frac{x - 3}{x + 3}$"
   ],
   "answer": "$\\frac{x - 3}{x + 2}$",
   "hint": "Bungkus $(x + 3)$ ada di atas dan di bawah.",
   "explain": "$\\frac{x - 3}{x + 2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Cek jawaban: masukkan $x = 5$ ke $\\frac{x - 3}{x + 2}$.",
   "answer": {
    "num": 2,
    "den": 7
   },
   "hint": "Hitung 5 − 3 dan 5 + 2.",
   "explain": "$\\frac{2}{7}$. Bentuk awal: $\\frac{16}{56} = \\frac{2}{7}$. Sama.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "Jadi (a) $\\frac{2x}{3y^2}$ dan (b) $\\frac{x - 3}{x + 2}$."
}
```

### Contoh 2: Mengalikan dan membagi

```soal
{
 "title": "Mengalikan dan membagi",
 "text": "Hitung (a) $\\frac{3a}{4b} \\times \\frac{8b^2}{9a^2}$ dan (b) $\\frac{x + 1}{6} \\div \\frac{x^2 - 1}{9}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1 (a): Coret angka dulu: 3 dengan 9, 4 dengan 8. Sisa angkanya?",
   "options": [
    "$\\frac{2}{3}$",
    "$\\frac{3}{2}$",
    "$\\frac{24}{36}$"
   ],
   "answer": "$\\frac{2}{3}$",
   "hint": "3 dan 9 menjadi 1 dan 3; 4 dan 8 menjadi 1 dan 2.",
   "explain": "Sisa 2 di atas dan 3 di bawah.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2 (a): Coret huruf, lalu kalikan sisanya. Hasilnya?",
   "options": [
    "$\\frac{2b}{3a}$",
    "$\\frac{2a}{3b}$",
    "$\\frac{2ab}{3}$"
   ],
   "answer": "$\\frac{2b}{3a}$",
   "hint": "$a$ dan $a^2$ menyisakan $a$ di bawah; $b$ dan $b^2$ menyisakan $b$ di atas.",
   "explain": "$\\frac{2b}{3a}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3 (b): Ubah bagi menjadi kali. Hasilnya?",
   "options": [
    "$\\frac{x + 1}{6} \\times \\frac{9}{x^2 - 1}$",
    "$\\frac{6}{x + 1} \\times \\frac{x^2 - 1}{9}$",
    "$\\frac{x + 1}{6} \\times \\frac{x^2 - 1}{9}$"
   ],
   "answer": "$\\frac{x + 1}{6} \\times \\frac{9}{x^2 - 1}$",
   "hint": "Hanya pecahan kedua yang dibalik.",
   "explain": "Kali dengan kebalikan pecahan kedua.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4 (b): Faktorkan $x^2 - 1$, coret $(x + 1)$ dan 3. Hasilnya?",
   "options": [
    "$\\frac{3}{2(x - 1)}$",
    "$\\frac{3}{2(x + 1)}$",
    "$\\frac{9}{6(x - 1)}$"
   ],
   "answer": "$\\frac{3}{2(x - 1)}$",
   "hint": "$x^2 - 1 = (x - 1)(x + 1)$; 9 dan 6 sama-sama dibagi 3.",
   "explain": "$\\frac{3}{2(x - 1)}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Cek jawaban: masukkan $x = 2$ ke $\\frac{3}{2(x - 1)}$.",
   "answer": {
    "num": 3,
    "den": 2
   },
   "hint": "Hitung penyebutnya 2(2 − 1).",
   "explain": "$\\frac{3}{2}$. Bentuk awal: $\\frac{3}{6} \\div \\frac{3}{9} = \\frac{3}{2}$. Sama.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "Jadi (a) $\\frac{2b}{3a}$ dan (b) $\\frac{3}{2(x - 1)}$."
}
```

### Contoh 3: Menjumlah dan mengurangi

```soal
{
 "title": "Menjumlah dan mengurangi",
 "text": "Sederhanakan (a) $\\frac{x + 3}{4} - \\frac{x - 1}{6}$ dan (b) $\\frac{2}{x} + \\frac{3}{x + 1}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1 (a): KPK dari 4 dan 6?",
   "answer": "12",
   "hint": "Kelipatan 6: 6, 12, ... Mana yang juga kelipatan 4?",
   "explain": "KPK = 12.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2 (a): $\\frac{3(x + 3) - 2(x - 1)}{12}$. Pembilangnya menjadi?",
   "options": [
    "$x + 11$",
    "$x + 7$",
    "$5x + 7$"
   ],
   "answer": "$x + 11$",
   "hint": "Minus berlaku untuk seluruh $2(x - 1)$: hasilnya $-2x + 2$.",
   "explain": "$3x + 9 - 2x + 2 = x + 11$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3 (b): Penyebut bersamanya?",
   "options": [
    "$x(x + 1)$",
    "$2x + 1$",
    "$x + 1$"
   ],
   "answer": "$x(x + 1)$",
   "hint": "Kalikan kedua penyebut yang berbeda.",
   "explain": "$x(x + 1)$. Pembilang menjadi $2(x + 1) + 3x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4 (b): Hasilnya?",
   "options": [
    "$\\frac{5x + 2}{x(x + 1)}$",
    "$\\frac{5}{2x + 1}$",
    "$\\frac{5x + 1}{x(x + 1)}$"
   ],
   "answer": "$\\frac{5x + 2}{x(x + 1)}$",
   "hint": "$2(x + 1) + 3x = 2x + 2 + 3x$.",
   "explain": "$\\frac{5x + 2}{x(x + 1)}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Cek jawaban: masukkan $x = 1$ ke $\\frac{5x + 2}{x(x + 1)}$.",
   "answer": {
    "num": 7,
    "den": 2
   },
   "hint": "Hitung atas 5 + 2 dan bawah 1 × 2.",
   "explain": "$\\frac{7}{2}$. Bentuk awal: $2 + \\frac{3}{2} = \\frac{7}{2}$. Sama.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "Jadi (a) $\\frac{x + 11}{12}$ dan (b) $\\frac{5x + 2}{x(x + 1)}$."
}
```

### Contoh 4: Mengubah subjek dengan kuadrat

```soal
{
 "title": "Mengubah subjek dengan kuadrat",
 "text": "Rumus energi gerak $E = \\frac{1}{2}mv^2$. Jadikan $v$ subjek ($v$ positif).",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Buka lapisan $\\frac{1}{2}$. Kedua ruas dikali 2 menjadi?",
   "options": [
    "$2E = mv^2$",
    "$E = 2mv^2$",
    "$\\frac{E}{2} = mv^2$"
   ],
   "answer": "$2E = mv^2$",
   "hint": "Kedua ruas dikali 2.",
   "explain": "$2E = mv^2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Buka lapisan $m$.",
   "options": [
    "$\\frac{2E}{m} = v^2$",
    "$2E - m = v^2$",
    "$2Em = v^2$"
   ],
   "answer": "$\\frac{2E}{m} = v^2$",
   "hint": "$v^2$ dikali $m$, jadi dibuka dengan membagi $m$.",
   "explain": "$\\frac{2E}{m} = v^2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Buka lapisan kuadrat.",
   "options": [
    "$v = \\sqrt{\\frac{2E}{m}}$",
    "$v = \\frac{2E}{m^2}$",
    "$v = \\frac{\\sqrt{2E}}{m}$"
   ],
   "answer": "$v = \\sqrt{\\frac{2E}{m}}$",
   "hint": "Kebalikan kuadrat adalah akar kuadrat, untuk seluruh ruas.",
   "explain": "$v = \\sqrt{\\frac{2E}{m}}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $m = 2$ dan $E = 9$. Hitung $v = \\sqrt{\\frac{2 \\cdot 9}{2}}$.",
   "answer": "3",
   "hint": "$\\sqrt{9}$.",
   "explain": "$v = 3$, dan $\\frac{1}{2} \\cdot 2 \\cdot 3^2 = 9$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $v = \\sqrt{\\frac{2E}{m}}$."
}
```

### Contoh 5: Soal cerita suhu tubuh

```soal
{
 "title": "Soal cerita suhu tubuh",
 "text": "Rumus suhu $F = \\frac{9}{5}C + 32$. Termometer menunjukkan $98{,}6^\\circ$F. (a) Jadikan $C$ subjek. (b) Berapa suhunya dalam Celsius?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Lapisan terakhir pada $C$ adalah $+32$. Buka dulu:",
   "options": [
    "$F - 32 = \\frac{9}{5}C$",
    "$\\frac{5}{9}F = C + 32$",
    "$F + 32 = \\frac{9}{5}C$"
   ],
   "answer": "$F - 32 = \\frac{9}{5}C$",
   "hint": "Kurangi 32 dari kedua ruas.",
   "explain": "$F - 32 = \\frac{9}{5}C$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Buka lapisan perkalian $\\frac{9}{5}$.",
   "options": [
    "$C = \\frac{5(F - 32)}{9}$",
    "$C = \\frac{5F}{9} - 32$",
    "$C = \\frac{9(F - 32)}{5}$"
   ],
   "answer": "$C = \\frac{5(F - 32)}{9}$",
   "hint": "Kalikan kedua ruas dengan $\\frac{5}{9}$, seluruh $F - 32$.",
   "explain": "$C = \\frac{5(F - 32)}{9}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung $98{,}6 - 32$.",
   "answer": "66,6",
   "hint": "Kurangkan.",
   "explain": "98,6 − 32 = 66,6.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $C = \\frac{5 \\times 66{,}6}{9} = ?$",
   "answer": "37",
   "hint": "$5 \\times 66{,}6 = 333$, lalu bagi 9.",
   "explain": "333 ÷ 9 = 37.",
   "error": "salah-langkah-materi",
   "suffix": "°C"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $\\frac{9}{5} \\times 37 + 32 = ?$",
   "answer": "98,6",
   "hint": "$\\frac{9}{5} \\times 37 = 66{,}6$.",
   "explain": "66,6 + 32 = 98,6. Cocok, dan 37 °C memang suhu tubuh normal.",
   "error": "salah-langkah-materi",
   "suffix": "°F"
  }
 ],
 "conclusion": "Jadi (a) $C = \\frac{5(F - 32)}{9}$ dan (b) $37^\\circ$C."
}
```

## Kesalahan yang sering terjadi

- **Mencoret suku, bukan faktor.** Menulis $\frac{x + 2}{x} = 2$ dengan mencoret $x$. Salah, karena $x$ di atas terlem dengan 2 dalam satu bungkus. Coba $x = 1$: $\frac{3}{1} = 3$, bukan 2.
- **Lupa kurung saat mengurangi.** Menulis $\frac{3(x + 3) - 2x - 1}{12}$. Minus berlaku untuk seluruh $2(x - 1)$, jadi $-2x + 2$.
- **Menjumlah penyebut.** Menulis $\frac{2}{x} + \frac{3}{x + 1} = \frac{5}{2x + 1}$. Pecahan dijumlah dengan menyamakan penyebut, bukan menjumlah atas dan bawah.
- **Membuka lapisan dengan urutan salah.** Dari $F = \frac{9}{5}C + 32$ langsung mengalikan $\frac{5}{9}$ hanya pada $F$, lalu mengurangi 32. Lapisan $+32$ dipasang terakhir, jadi harus dibuka pertama.
- **Lupa membagi seluruh ruas.** Dari $v - u = at$ menulis $t = v - \frac{u}{a}$. Seluruh $v - u$ harus dibagi $a$.

## Ringkasan

- Pecahan aljabar mengikuti aturan pecahan biasa.
- Sederhanakan: faktorkan dulu, lalu coret faktor (bungkus utuh) yang sama. Jangan mencoret suku.
- Kali: kalikan atas dan bawah. Bagi: kali dengan kebalikan. Coret sebelum mengalikan.
- Tambah dan kurang: samakan penyebut dengan KPK, beri kurung pada pembilang.
- Ubah subjek: buka lapisan dari yang terakhir dipasang, lakukan pada kedua ruas.
- Cek dengan memasukkan angka ke bentuk awal dan bentuk akhir.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Sederhanakan $\\frac{12a^3b}{18ab^2}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "FPB dari 12 dan 18?",
   "answer": "6",
   "hint": "Bilangan terbesar yang membagi keduanya.",
   "explain": "FPB = 6, sisa 2 dan 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasilnya?",
   "options": [
    "$\\frac{2a^2}{3b}$",
    "$\\frac{2a^3}{3b}$",
    "$\\frac{2a^2b}{3}$"
   ],
   "answer": "$\\frac{2a^2}{3b}$",
   "hint": "Coret satu $a$ dan satu $b$.",
   "explain": "$\\frac{2a^2}{3b}$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\frac{12a^3b}{18ab^2} = \\frac{2a^2}{3b}$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Sederhanakan $\\frac{x^2 - 4x}{x^2 - 16}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Bentuk terfaktornya?",
   "options": [
    "$\\frac{x(x - 4)}{(x - 4)(x + 4)}$",
    "$\\frac{x(x - 4)}{(x - 4)^2}$",
    "$\\frac{x^2 - 4x}{(x - 8)(x + 2)}$"
   ],
   "answer": "$\\frac{x(x - 4)}{(x - 4)(x + 4)}$",
   "hint": "Atas: keluarkan $x$. Bawah: $a^2 - b^2$.",
   "explain": "Atas dan bawah memuat $(x - 4)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasilnya?",
   "options": [
    "$\\frac{x}{x + 4}$",
    "$\\frac{-4x}{-16}$",
    "$\\frac{x}{x - 4}$"
   ],
   "answer": "$\\frac{x}{x + 4}$",
   "hint": "Coret bungkus $(x - 4)$.",
   "explain": "$\\frac{x}{x + 4}$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\frac{x^2 - 4x}{x^2 - 16} = \\frac{x}{x + 4}$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Sederhanakan $\\frac{3}{x - 2} - \\frac{1}{x}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Pembilang setelah penyebut disamakan?",
   "options": [
    "$3x - (x - 2)$",
    "$3x - x - 2$",
    "$3 - 1$"
   ],
   "answer": "$3x - (x - 2)$",
   "hint": "Beri kurung pada pembilang kedua.",
   "explain": "Penyebut $x(x - 2)$, pembilang $3x - (x - 2)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasilnya?",
   "options": [
    "$\\frac{2(x + 1)}{x(x - 2)}$",
    "$\\frac{2(x - 1)}{x(x - 2)}$",
    "$\\frac{2}{-2}$"
   ],
   "answer": "$\\frac{2(x + 1)}{x(x - 2)}$",
   "hint": "$3x - x + 2$.",
   "explain": "$\\frac{2x + 2}{x(x - 2)} = \\frac{2(x + 1)}{x(x - 2)}$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\frac{2(x + 1)}{x(x - 2)}$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Hitung $\\frac{2x}{5} \\div \\frac{4x^2}{15}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Ubah menjadi perkalian:",
   "options": [
    "$\\frac{2x}{5} \\times \\frac{15}{4x^2}$",
    "$\\frac{5}{2x} \\times \\frac{4x^2}{15}$",
    "$\\frac{2x}{5} \\times \\frac{4x^2}{15}$"
   ],
   "answer": "$\\frac{2x}{5} \\times \\frac{15}{4x^2}$",
   "hint": "Balik pecahan kedua saja.",
   "explain": "Kali dengan kebalikan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasil paling sederhana?",
   "options": [
    "$\\frac{3}{2x}$",
    "$\\frac{3x}{2}$",
    "$\\frac{30x}{20x^2}$"
   ],
   "answer": "$\\frac{3}{2x}$",
   "hint": "$\\frac{30x}{20x^2}$ lalu coret 10 dan $x$.",
   "explain": "$\\frac{3}{2x}$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\frac{3}{2x}$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Keliling persegi panjang $K = 2(p + l)$. Jadikan $l$ subjek, lalu hitung $l$ jika $K = 50$ cm dan $p = 14$ cm.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "$l$ sebagai subjek:",
   "options": [
    "$l = \\frac{K}{2} - p$",
    "$l = \\frac{K - p}{2}$",
    "$l = 2K - p$"
   ],
   "answer": "$l = \\frac{K}{2} - p$",
   "hint": "Lapisan terakhir dikali 2, buka dulu dengan membagi 2.",
   "explain": "$\\frac{K}{2} = p + l$, lalu kurangi $p$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Hitung $l$.",
   "answer": "11",
   "hint": "50 ÷ 2 lalu kurangi 14.",
   "explain": "25 − 14 = 11 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Cek: 2 × (14 + 11) = ?",
   "answer": "50",
   "hint": "Hitung maju.",
   "explain": "2 × 25 = 50. Cocok.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "$l = \\frac{K}{2} - p = 11$ cm."
}
```
