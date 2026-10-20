---
id: smp2-04-fungsi-kuadrat
judul: Fungsi Kuadrat dan Grafiknya
jenjang: smp2
moe: "Secondary 2 · Number and Algebra · N6 Functions and graphs"
prasyarat: [smp1-08-fungsi-linear, smp2-02-ekspansi-faktorisasi]
durasi_menit: 60
---

## Kenapa belajar ini?

Bola yang ditendang, air dari air mancur, dan kabel jembatan gantung semuanya membentuk lengkungan yang sama, yaitu **parabola**. Fungsi kuadrat membantu kita menjawab pertanyaan seperti "seberapa tinggi bola naik?" atau "kapan bola mencapai titik tertinggi?".

## Analogi

Bayangkan **air yang menyembur dari selang** yang diarahkan miring ke atas. Air naik, melambat, mencapai **puncak**, lalu turun lagi. Lengkungannya **simetris**: bagian naik dan bagian turun seperti bayangan cermin.

Sekarang bayangkan lengkungan itu dibalik, seperti **mangkuk**. Mangkuk punya **titik terendah** di dasarnya.

- Lengkungan air mancur: terbuka ke bawah, punya titik **maksimum**.
- Mangkuk: terbuka ke atas, punya titik **minimum**.
- Garis tegak yang membelah lengkungan menjadi dua bagian kembar adalah **garis lipatan cermin**, disebut **sumbu simetri**.

Kita akan memakai air mancur, mangkuk, dan garis lipatan ini di setiap contoh.

```anim
{"type": "grafik", "title": "Air mancur dan mangkuk", "xmin": -4, "xmax": 4, "ymin": -5, "ymax": 6, "kurva": [{"f": "-x^2+5", "label": "\\text{air mancur: } y = -x^2 + 5"}, {"f": "x^2-4", "label": "\\text{mangkuk: } y = x^2 - 4"}], "garis": [{"x": 0, "label": "sumbu simetri"}], "titik": [{"x": 0, "y": 5, "label": "maksimum"}, {"x": 0, "y": -4, "label": "minimum"}], "langkah": [{"say": "Bidang koordinat.", "kurva": 0}, {"say": "Air mancur: naik, mencapai puncak, lalu turun. Terbuka ke bawah.", "kurva": 1}, {"say": "Mangkuk: terbuka ke atas, punya dasar.", "kurva": 2}, {"say": "Garis lipatan cermin $x = 0$ membelah keduanya menjadi dua bagian kembar.", "kurva": 2, "garis": 1}, {"say": "Puncak air mancur adalah titik maksimum; dasar mangkuk adalah titik minimum.", "kurva": 2, "garis": 1, "titik": 2}]}
```

## Konsep

### Bentuk fungsi kuadrat

Fungsi kuadrat berbentuk

$$y = ax^2 + bx + c, \qquad a \neq 0$$

Pangkat tertinggi $x$ adalah 2. Kalau $a = 0$, suku $x^2$ hilang dan fungsinya menjadi linear.

Grafiknya disebut **parabola**. Berbeda dengan fungsi linear, perubahan $y$ tidak tetap: kadang naik, kadang turun, sehingga grafiknya melengkung.

### Arah buka parabola

Lihat tanda $a$:

- $a > 0$: terbuka ke **atas**, seperti mangkuk. Punya titik **minimum**.
- $a < 0$: terbuka ke **bawah**, seperti air mancur. Punya titik **maksimum**.

Kenapa? Untuk $x$ yang sangat besar atau sangat kecil (negatif), suku $ax^2$ jauh lebih besar dari suku lain. Kalau $a$ positif, $ax^2$ sangat besar positif, sehingga kedua ujung grafik naik. Kalau $a$ negatif, kedua ujung turun.

### Titik potong sumbu-$y$

Saat $x = 0$, $y = c$. Jadi parabola memotong sumbu-$y$ di $(0, c)$.

### Sumbu simetri dan titik balik

Titik paling rendah atau paling tinggi disebut **titik balik** (titik minimum atau maksimum). Sumbu simetri selalu melewati titik balik.

**Cara menemukan sumbu simetri:** cari **dua titik dengan nilai $y$ sama**. Sumbu simetri tepat di tengah-tengahnya:

$$x = \frac{x_1 + x_2}{2}$$

Ini seperti garis lipatan: dua titik kembar berjarak sama dari lipatan.

```anim
{"type": "grafik", "title": "Mencari garis lipatan y = x² − 4x + 3", "xmin": -1, "xmax": 5, "ymin": -2, "ymax": 6, "kurva": [{"f": "x^2-4x+3", "label": "y = x^2 - 4x + 3"}], "garis": [{"y": 3}, {"x": 2}], "titik": [{"x": 0, "y": 3, "label": "(0, 3)"}, {"x": 4, "y": 3, "label": "(4, 3)"}, {"x": 2, "y": -1, "label": "(2, −1)"}], "langkah": [{"say": "Gambar parabolanya.", "kurva": 1}, {"say": "Cari dua titik dengan $y$ sama: $(0, 3)$ dan $(4, 3)$.", "kurva": 1, "garis": 1, "titik": 2}, {"say": "Tengah-tengahnya $\\frac{0 + 4}{2} = 2$. Sumbu simetri $x = 2$.", "kurva": 1, "garis": 2, "titik": 2}, {"say": "Masukkan $x = 2$: $y = 4 - 8 + 3 = -1$. Titik minimum $(2, -1)$.", "kurva": 1, "garis": 2, "titik": 3}]}
```

Cara cepat memakai faktorisasi: $y = c$ saat $ax^2 + bx = 0$, yaitu $x(ax + b) = 0$. Jadi $x = 0$ atau $x = -\frac{b}{a}$. Tengah-tengahnya:

$$x = -\frac{b}{2a}$$

```anim
{"type": "persamaan", "title": "Dari mana rumus cepat?", "baris": [{"tex": "ax^2 + bx + c = c", "say": "Cari titik-titik dengan $y = c$ (sama dengan titik potong sumbu-$y$)."}, {"tex": "ax^2 + bx = 0", "say": "Kurangi $c$ di kedua ruas.", "op": "- c"}, {"tex": "x(ax + b) = 0", "say": "Faktorkan $x$."}, {"tex": "x = 0 \\text{ atau } x = -\\frac{b}{a}", "say": "Dua titik kembar."}, {"tex": "x = \\frac{0 + \\left(-\\frac{b}{a}\\right)}{2} = -\\frac{b}{2a}", "say": "Sumbu simetri ada di tengahnya."}]}
```

Setelah sumbu simetri diketahui, masukkan nilai $x$ itu ke fungsi untuk mendapat $y$ titik balik.

### Menggambar parabola

```visual
{"type": "table", "head": ["x", "0", "1", "2", "3", "4"], "rows": [["y = x² − 4x + 3", "3", "0", "−1", "0", "3"]], "caption": "Tabel dengan sumbu simetri x = 2 di tengah: nilai y kembar di kiri dan kanan."}
```

1. Buat tabel nilai $x$ dan $y$, sebaiknya dengan sumbu simetri di tengah.
2. Gambar titik-titiknya.
3. Hubungkan dengan **kurva mulus**, bukan garis patah. Puncak atau dasarnya melengkung, bukan runcing.
4. Tandai titik balik dan sumbu simetri.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Tabel dan grafik

```soal
{
 "title": "Tabel dan grafik",
 "text": "Untuk $y = x^2 - 2x - 3$ dengan $-2 \\le x \\le 4$, tentukan arah buka, titik potong sumbu, sumbu simetri, dan titik minimum.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Lengkapi tabel. Untuk $x = -2$, $y = ?$",
   "answer": "5",
   "hint": "$(-2)^2 - 2(-2) - 3 = 4 + 4 - 3$.",
   "explain": "y = 5. Ingat, (−2)² = 4.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 1 (lanjutan): Untuk $x = 1$, $y = ?$",
   "answer": "-4",
   "hint": "1 − 2 − 3.",
   "explain": "y = −4.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Arah buka parabola?",
   "options": [
    "Ke atas (mangkuk)",
    "Ke bawah (air mancur)"
   ],
   "answer": "Ke atas (mangkuk)",
   "hint": "Lihat tanda koefisien $x^2$.",
   "explain": "a = 1 > 0, jadi terbuka ke atas.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Titik potong sumbu-$x$ (saat $y = 0$) dari tabel?",
   "options": [
    "$(-1, 0)$ dan $(3, 0)$",
    "$(0, -3)$",
    "$(1, -4)$",
    "$(-2, 0)$ dan $(4, 0)$"
   ],
   "answer": "$(-1, 0)$ dan $(3, 0)$",
   "hint": "Cari kolom yang nilai $y$-nya 0.",
   "explain": "$y = 0$ di $x = -1$ dan $x = 3$. Titik potong sumbu-$y$ adalah $(0, -3)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Sumbu simetri $x = \\frac{-1 + 3}{2} = ?$",
   "answer": "1",
   "hint": "Tengah-tengah dua titik kembar.",
   "explain": "Sumbu simetri x = 1.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Titik minimumnya?",
   "options": [
    "$(1, -4)$",
    "$(-4, 1)$",
    "$(0, -3)$"
   ],
   "answer": "$(1, -4)$",
   "hint": "Pakai $y$ di $x = 1$ dari tabel.",
   "explain": "Titik minimum $(1, -4)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: rumus cepat $x = -\\frac{b}{2a}$ dengan $b = -2$, $a = 1$.",
   "answer": "1",
   "hint": "Hati-hati dengan dua tanda negatif.",
   "explain": "$-\\frac{-2}{2} = 1$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Terbuka ke atas, memotong sumbu-$y$ di $(0, -3)$ dan sumbu-$x$ di $(-1, 0)$ dan $(3, 0)$, sumbu simetri $x = 1$, titik minimum $(1, -4)$.",
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
    "?",
    "0",
    "−3",
    "?",
    "−3",
    "0",
    "5"
   ]
  ]
 }
}
```

### Contoh 2: Parabola terbuka ke bawah

```soal
{
 "title": "Parabola terbuka ke bawah",
 "text": "Untuk $y = -x^2 + 4x + 1$ dengan $0 \\le x \\le 4$, tentukan arah buka, sumbu simetri, dan titik maksimum.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Lengkapi tabel. Untuk $x = 3$, $y = ?$",
   "answer": "4",
   "hint": "$-x^2$ artinya $-(3^2) = -9$.",
   "explain": "−9 + 12 + 1 = 4.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Arah buka?",
   "options": [
    "Ke bawah (air mancur)",
    "Ke atas (mangkuk)"
   ],
   "answer": "Ke bawah (air mancur)",
   "hint": "Lihat tanda $a$.",
   "explain": "a = −1 < 0, terbuka ke bawah.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Pasangan kembar $y = 1$ di $x = 0$ dan $x = 4$. Sumbu simetri $x = ?$",
   "answer": "2",
   "hint": "Tengah antara 0 dan 4.",
   "explain": "x = 2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Hitung $y$ di $x = 2$.",
   "answer": "5",
   "hint": "−4 + 8 + 1.",
   "explain": "y = 5. Titik maksimum (2, 5).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: rumus cepat $-\\frac{4}{2(-1)} = ?$",
   "answer": "2",
   "hint": "Penyebutnya −2.",
   "explain": "Hasilnya 2. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Terbuka ke bawah, sumbu simetri $x = 2$, titik maksimum $(2, 5)$.",
 "visual": {
  "type": "table",
  "head": [
   "x",
   "0",
   "1",
   "2",
   "3",
   "4"
  ],
  "rows": [
   [
    "y",
    "1",
    "4",
    "5",
    "?",
    "1"
   ]
  ]
 }
}
```

### Contoh 3: Tanpa tabel lengkap

```soal
{
 "title": "Tanpa tabel lengkap",
 "text": "Tentukan sumbu simetri dan titik balik $y = 2x^2 + 8x + 5$. Apakah titik itu maksimum atau minimum?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: $y = 5$ saat $2x^2 + 8x = 0$, yaitu $2x(x + 4) = 0$. Nilai $x$-nya?",
   "options": [
    "$x = 0$ atau $x = -4$",
    "$x = 0$ atau $x = 4$",
    "$x = 2$ atau $x = -4$"
   ],
   "answer": "$x = 0$ atau $x = -4$",
   "hint": "Setiap faktor bisa bernilai nol: $2x = 0$ atau $x + 4 = 0$.",
   "explain": "$x = 0$ atau $x = -4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Sumbu simetri $x = ?$",
   "answer": "-2",
   "hint": "Tengah antara 0 dan −4.",
   "explain": "(0 + (−4)) ÷ 2 = −2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung $y$ di $x = -2$.",
   "answer": "-3",
   "hint": "$2(-2)^2 + 8(-2) + 5 = 8 - 16 + 5$.",
   "explain": "y = −3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Jenis titik baliknya?",
   "options": [
    "Minimum",
    "Maksimum"
   ],
   "answer": "Minimum",
   "hint": "Lihat tanda $a = 2$.",
   "explain": "a > 0: mangkuk, titik minimum (−2, −3).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung $y$ di $x = -1$.",
   "answer": "-1",
   "hint": "2 − 8 + 5.",
   "explain": "$y = -1$, sama dengan $y$ di $x = -3$, dan lebih besar dari $-3$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Sumbu simetri $x = -2$, titik minimum $(-2, -3)$."
}
```

### Contoh 4: Soal cerita bola ditendang

```soal
{
 "title": "Soal cerita bola ditendang",
 "text": "Tinggi bola Made $h = -5t^2 + 20t$ meter setelah $t$ detik. Kapan tinggi maksimum dicapai dan berapa tingginya? Kapan bola kembali ke tanah?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Apakah ada tinggi maksimum?",
   "options": [
    "Ya, karena $a = -5 < 0$",
    "Tidak, karena $a = -5 < 0$",
    "Ya, karena $b = 20 > 0$"
   ],
   "answer": "Ya, karena $a = -5 < 0$",
   "hint": "Arah buka ditentukan oleh $a$.",
   "explain": "Terbuka ke bawah seperti air mancur, jadi ada puncak.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $-5t(t - 4) = 0$. Bola jatuh ke tanah pada detik ke berapa ($t \\neq 0$)?",
   "answer": "4",
   "hint": "$t - 4 = 0$.",
   "explain": "t = 4 detik.",
   "error": "salah-langkah-materi",
   "suffix": "detik"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Sumbu simetri $t = ?$",
   "answer": "2",
   "hint": "Tengah antara 0 dan 4.",
   "explain": "t = 2.",
   "error": "salah-langkah-materi",
   "suffix": "detik"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Tinggi maksimum $h = -5(2)^2 + 20(2)$.",
   "answer": "20",
   "hint": "−20 + 40.",
   "explain": "h = 20 meter.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: tinggi pada $t = 1$?",
   "answer": "15",
   "hint": "−5 + 20.",
   "explain": "15 m, sama dengan pada t = 3, dan lebih rendah dari 20. Cocok.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  }
 ],
 "conclusion": "Tinggi maksimum 20 m pada detik ke-2; bola kembali ke tanah pada detik ke-4."
}
```

## Kesalahan yang sering terjadi

- **Salah menentukan arah buka.** Melihat tanda $c$ atau $b$. Arah buka hanya ditentukan tanda $a$, koefisien $x^2$.
- **Salah menghitung kuadrat bilangan negatif.** Menulis $(-2)^2 = -4$, atau menulis $-x^2$ untuk $x = -2$ sebagai $+4$. Ingat: $(-2)^2 = 4$, sedangkan $-x^2 = -(x^2) = -4$.
- **Menyambung titik dengan garis patah.** Parabola adalah kurva mulus. Titik balik melengkung, bukan runcing seperti huruf V.
- **Menulis sumbu simetri sebagai titik.** Sumbu simetri adalah garis, ditulis $x = 1$, bukan $(1, -4)$.
- **Lupa tanda negatif pada rumus cepat.** Untuk $y = x^2 - 2x - 3$ menulis $x = \frac{-2}{2} = -1$. Yang benar $x = -\frac{-2}{2} = 1$.

## Ringkasan

- Fungsi kuadrat $y = ax^2 + bx + c$ ($a \neq 0$) grafiknya parabola.
- $a > 0$: terbuka ke atas (mangkuk), titik minimum. $a < 0$: terbuka ke bawah (air mancur), titik maksimum.
- Memotong sumbu-$y$ di $(0, c)$.
- Sumbu simetri ada di tengah dua titik dengan $y$ sama; cara cepat $x = -\frac{b}{2a}$.
- Titik balik: masukkan nilai $x$ sumbu simetri ke fungsi.
- Gambar dengan tabel nilai dan kurva mulus.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Untuk $y = 3x^2 - x + 7$, ke mana parabola terbuka, dan di mana memotong sumbu-$y$?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Arah buka?",
   "options": [
    "Ke atas",
    "Ke bawah"
   ],
   "answer": "Ke atas",
   "hint": "Lihat tanda $a$.",
   "explain": "a = 3 > 0, terbuka ke atas.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Memotong sumbu-$y$ di $(0, ?)$",
   "answer": "7",
   "hint": "Masukkan $x = 0$.",
   "explain": "y = c = 7, jadi (0, 7).",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Terbuka ke atas, memotong sumbu-$y$ di $(0, 7)$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Untuk $y = -2x^2 + 5$, tentukan arah buka, sumbu simetri, dan titik baliknya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Arah buka?",
   "options": [
    "Ke bawah",
    "Ke atas"
   ],
   "answer": "Ke bawah",
   "hint": "Lihat tanda $a$.",
   "explain": "a = −2 < 0, terbuka ke bawah.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Sumbu simetri $x = ?$",
   "answer": "0",
   "hint": "Tidak ada suku $x$, jadi $b = 0$. Pakai $-\\frac{b}{2a}$.",
   "explain": "x = 0.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Titik baliknya?",
   "options": [
    "maksimum $(0, 5)$",
    "minimum $(0, 5)$",
    "maksimum $(5, 0)$"
   ],
   "answer": "maksimum $(0, 5)$",
   "hint": "Masukkan $x = 0$; ingat arah bukanya.",
   "explain": "y = 5, dan terbuka ke bawah: maksimum (0, 5).",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Terbuka ke bawah, sumbu simetri $x = 0$, titik maksimum $(0, 5)$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Untuk $y = x^2 - 6x + 5$, tentukan sumbu simetri dan titik minimum.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "$y = 5$ saat $x^2 - 6x = 0$. Nilai $x$-nya?",
   "options": [
    "$0$ dan $6$",
    "$0$ dan $-6$",
    "$1$ dan $5$"
   ],
   "answer": "$0$ dan $6$",
   "hint": "Faktorkan: $x(x - 6) = 0$.",
   "explain": "x = 0 atau x = 6.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Sumbu simetri $x = ?$",
   "answer": "3",
   "hint": "Tengah antara 0 dan 6.",
   "explain": "x = 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$y$ minimum (di $x = 3$)?",
   "answer": "-4",
   "hint": "9 − 18 + 5.",
   "explain": "y = −4. Titik minimum (3, −4).",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Sumbu simetri $x = 3$, titik minimum $(3, -4)$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Sebuah parabola melalui titik $(-1, 6)$ dan $(5, 6)$. Tentukan sumbu simetrinya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Kenapa dua titik ini berguna?",
   "options": [
    "Nilai $y$-nya sama, jadi kembar",
    "Keduanya titik potong sumbu",
    "Keduanya titik balik"
   ],
   "answer": "Nilai $y$-nya sama, jadi kembar",
   "hint": "Bandingkan nilai $y$ keduanya.",
   "explain": "Titik dengan $y$ sama berjarak sama dari sumbu simetri.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Sumbu simetri $x = ?$",
   "answer": "2",
   "hint": "$\\frac{-1 + 5}{2}$.",
   "explain": "x = 2.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Sumbu simetrinya $x = 2$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Tinggi roket air Putu $h = -5t^2 + 30t$ meter setelah $t$ detik. Berapa tinggi maksimumnya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "$h = 0$ saat $-5t(t - 6) = 0$. Roket jatuh pada detik ke?",
   "answer": "6",
   "hint": "t − 6 = 0.",
   "explain": "t = 6.",
   "error": "salah-langkah-materi",
   "suffix": "detik"
  },
  {
   "kind": "number",
   "prompt": "Sumbu simetri $t = ?$",
   "answer": "3",
   "hint": "Tengah antara 0 dan 6.",
   "explain": "t = 3.",
   "error": "salah-langkah-materi",
   "suffix": "detik"
  },
  {
   "kind": "number",
   "prompt": "Tinggi maksimum?",
   "answer": "45",
   "hint": "−5(9) + 30(3).",
   "explain": "−45 + 90 = 45 m.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  }
 ],
 "conclusion": "Tinggi maksimum 45 m."
}
```
