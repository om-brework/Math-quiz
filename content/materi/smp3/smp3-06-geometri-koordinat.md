---
id: smp3-06-geometri-koordinat
judul: Geometri Koordinat
jenjang: smp3
moe: "Secondary 3 · Geometry and Measurement · G6 Coordinate geometry"
prasyarat: [smp1-08-fungsi-linear, smp2-09-pythagoras-trigonometri]
durasi_menit: 45
---

## Kenapa belajar ini?

Aplikasi peta di ponselmu menyimpan setiap tempat sebagai pasangan koordinat. Dari dua koordinat, aplikasi bisa menghitung jarak lurus, arah, dan rumus garis yang menghubungkannya. Di bab ini kamu belajar melakukan hal yang sama dengan pensil dan kalkulator.

## Analogi

Bayangkan sebuah **kota yang jalannya berpetak**, seperti kertas berpetak. Seorang **pengemudi ojek** berangkat dari titik $A$ menuju titik $B$.

- Ia harus **geser ke kanan atau kiri** sejauh selisih $x$, dan **naik atau turun** sejauh selisih $y$.
- **Gradien** menjawab: "Setiap geser 1 petak ke kanan, berapa petak naik?" Ini ukuran kecuraman jalan dari $A$ ke $B$.
- **Panjang ruas garis** adalah jarak **lurus seperti burung terbang** dari $A$ ke $B$, bukan jarak ojek yang berbelok di perempatan. Geser dan naik membentuk dua sisi siku-siku, jadi jarak lurusnya dihitung dengan Pythagoras.

```anim
{"type": "bangun", "title": "Ojek dari A ke B: geser, naik, dan jarak lurus", "titik": {"A": [1, 1], "C": [4, 1], "B": [4, 5]}, "sisi": [["A", "C", "\\text{geser } 3"], ["C", "B", "\\text{naik } 4"], ["A", "B", "\\text{lurus } 5"]], "sudut": [{"di": "C", "dari": "A", "ke": "B", "siku": true}], "langkah": [{"say": "Ojek berangkat dari $A(1, 1)$ menuju $B(4, 5)$.", "sisi": 0}, {"say": "Geser ke kanan sejauh $4 - 1 = 3$ petak.", "sisi": 1, "sorot": ["AC"]}, {"say": "Naik sejauh $5 - 1 = 4$ petak. Gradien = naik ÷ geser = $\\frac{4}{3}$.", "sisi": 2, "sorot": ["CB"]}, {"say": "Geser dan naik membentuk sudut siku-siku.", "sisi": 2, "sudut": 1}, {"say": "Jarak lurus (burung terbang): $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.", "sisi": 3, "sudut": 1, "sorot": ["AB"]}]}
```

## Konsep

### Gradien garis melalui dua titik

Untuk titik $A(x_1, y_1)$ dan $B(x_2, y_2)$:

$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{\text{naik}}{\text{geser}}$$

- $m > 0$: garis naik dari kiri ke kanan.
- $m < 0$: garis turun dari kiri ke kanan.
- $m = 0$: garis mendatar (naik = 0).
- Garis tegak: geser = 0, gradien tidak terdefinisi.

Urutan titik tidak penting, asalkan **atas dan bawah memakai urutan yang sama**. Membalik urutan membalik tanda pembilang dan penyebut sekaligus, jadi hasilnya sama.

**Garis sejajar punya gradien sama**, karena kecuraman jalannya sama.

```anim
{"type": "grafik", "title": "Tanda gradien", "xmin": -4, "xmax": 4, "ymin": -4, "ymax": 6, "kurva": [{"f": "2x+1", "label": "m = 2 > 0"}, {"f": "-x+3", "label": "m = -1 < 0"}, {"f": "-2", "label": "m = 0"}], "garis": [{"x": -3}], "langkah": [{"say": "$m > 0$: garis naik dari kiri ke kanan.", "kurva": 1}, {"say": "$m < 0$: garis turun dari kiri ke kanan.", "kurva": 2}, {"say": "$m = 0$: garis mendatar.", "kurva": 3}, {"say": "Garis tegak (putus-putus): geser = 0, gradiennya tidak terdefinisi.", "kurva": 3, "garis": 1}]}
```

```anim
{"type": "grafik", "title": "Garis sejajar punya gradien sama", "xmin": -3, "xmax": 4, "ymin": -5, "ymax": 6, "kurva": [{"f": "2x+1", "label": "y = 2x + 1"}, {"f": "2x-3", "label": "y = 2x - 3"}], "titik": [{"x": 0, "y": 1, "label": "c = 1"}, {"x": 0, "y": -3, "label": "c = −3"}], "langkah": [{"say": "$y = 2x + 1$: gradien 2, memotong sumbu-$y$ di 1.", "kurva": 1}, {"say": "$y = 2x - 3$: gradien juga 2, jadi kedua garis sejajar.", "kurva": 2}, {"say": "Yang berbeda hanya $c$, titik potong sumbu-$y$.", "kurva": 2, "titik": 2}]}
```

### Panjang ruas garis

Geser $= x_2 - x_1$ dan naik $= y_2 - y_1$ adalah sisi siku-siku sebuah segitiga. Ruas $AB$ adalah sisi miringnya. Menurut Pythagoras:

$$AB = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

Tanda selisih tidak berpengaruh karena dikuadratkan.

### Persamaan garis $y = mx + c$

- $m$ adalah gradien.
- $c$ adalah titik potong sumbu-$y$, karena saat $x = 0$, $y = c$.

**Cara mencari persamaan garis** dari dua titik:

1. Hitung $m$ dari dua titik.
2. Substitusi salah satu titik ke $y = mx + c$ untuk mencari $c$.
3. Tulis persamaannya, lalu cek dengan titik yang lain.

Sebuah titik terletak **pada garis** jika koordinatnya memenuhi persamaan garis.

Jika persamaan tidak dalam bentuk $y = mx + c$, ubah dulu. Contoh: $2y = 6x - 8$ menjadi $y = 3x - 4$, jadi $m = 3$ dan $c = -4$.

```anim
{"type": "persamaan", "title": "Mengubah ke bentuk y = mx + c", "baris": [{"tex": "2y = 6x - 8", "say": "Bentuk ini belum $y = mx + c$."}, {"tex": "y = 3x - 4", "say": "Bagi semua suku dengan 2.", "op": "$\\div 2$"}, {"tex": "m = 3,\\quad c = -4", "say": "Sekarang gradien dan titik potong sumbu-$y$ bisa dibaca."}]}
```

### Soal geometri dengan koordinat

Dengan rumus panjang, kita bisa membuktikan sifat bangun:

- Dua sisi sama panjang: segitiga sama kaki.
- $AB^2 + BC^2 = AC^2$: segitiga siku-siku di $B$ (kebalikan teorema Pythagoras).
- Gradien sama: sisi-sisinya sejajar, misalnya pada jajargenjang.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Gradien dan panjang

```soal
{
 "title": "Contoh 1",
 "text": "Diketahui $A(1, 2)$ dan $B(5, 10)$. Hitung gradien $AB$ dan panjang $AB$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Geser = 5 − 1 = ?",
   "answer": "4",
   "hint": "Selisih koordinat $x$.",
   "explain": "Geser 4.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Naik = 10 − 2 = ?",
   "answer": "8",
   "hint": "Selisih koordinat $y$.",
   "explain": "Naik 8.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Gradien $m$ = naik ÷ geser = ?",
   "answer": "2",
   "hint": "$\\frac{8}{4}$.",
   "explain": "Setiap geser 1 petak ke kanan, naik 2 petak.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $AB^2 = 4^2 + 8^2$ = ?",
   "answer": "80",
   "hint": "16 + 64.",
   "explain": "$AB^2 = 80$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: $AB = \\sqrt{80}$ = ? (bulatkan ke 2 desimal)",
   "answer": "8,94",
   "hint": "$\\sqrt{80} = 4\\sqrt{5}$, dan $\\sqrt{5} \\approx 2{,}236$.",
   "explain": "$AB \\approx 8{,}94$ satuan.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: jarak lurus harus di antara sisi terpanjang (8) dan jarak ojek (4 + 8 = 12). Apakah 8,94 wajar?",
   "options": [
    "Wajar",
    "Tidak wajar"
   ],
   "answer": "Wajar",
   "hint": "Bandingkan 8,94 dengan 8 dan 12.",
   "explain": "8 < 8,94 < 12, jadi wajar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Gradien 2, panjang $\\sqrt{80} \\approx 8{,}94$ satuan."
}
```

### Contoh 2: Persamaan garis dari dua titik

```soal
{
 "title": "Contoh 2",
 "text": "Tentukan persamaan garis melalui $P(-2, 7)$ dan $Q(4, -5)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Naik = $-5 - 7$ = ?",
   "answer": "-12",
   "hint": "Kurangi $y$ titik $P$ dari $y$ titik $Q$.",
   "explain": "Naik −12 (berarti turun 12).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Geser = $4 - (-2)$ = ?",
   "answer": "6",
   "hint": "Mengurangi bilangan negatif sama dengan menambah.",
   "explain": "Geser 6.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Gradien $m$ = ?",
   "answer": "-2",
   "hint": "$\\frac{-12}{6}$.",
   "explain": "$m = -2$, garis turun.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Substitusi $P(-2, 7)$: $7 = -2(-2) + c$. Berapa $c$?",
   "answer": "3",
   "hint": "$-2 \\times (-2) = 4$.",
   "explain": "$7 = 4 + c$, jadi $c = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Persamaan garisnya?",
   "options": [
    "$y = -2x + 3$",
    "$y = 2x + 3$",
    "$y = -2x + 7$",
    "$y = -\\frac{1}{2}x + 3$"
   ],
   "answer": "$y = -2x + 3$",
   "hint": "Pakai $m$ dan $c$ yang sudah didapat.",
   "explain": "$y = -2x + 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: masukkan $x = 4$ ke $y = -2x + 3$. $y$ = ?",
   "answer": "-5",
   "hint": "$-8 + 3$.",
   "explain": "$y = -5$, sama dengan titik $Q$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Persamaan garisnya $y = -2x + 3$."
}
```

### Contoh 3: Membuktikan segitiga siku-siku

```anim
{"type": "bangun", "title": "Segitiga A(−1, 2), B(3, 5), C(6, 1)", "titik": {"A": [-1, 2], "B": [3, 5], "C": [6, 1]}, "sisi": [["A", "B"], ["B", "C"], ["C", "A"]], "langkah": [{"say": "Gambar ketiga titik pada bidang koordinat dan hubungkan."}]}
```

```soal
{
 "title": "Contoh 3",
 "text": "Titik $A(-1, 2)$, $B(3, 5)$, dan $C(6, 1)$ membentuk segitiga. Tunjukkan bahwa segitiga $ABC$ siku-siku sama kaki, lalu hitung luasnya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: $AB^2 = (3 - (-1))^2 + (5 - 2)^2$ = ?",
   "answer": "25",
   "hint": "$4^2 + 3^2$.",
   "explain": "$16 + 9 = 25$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $BC^2 = (6 - 3)^2 + (1 - 5)^2$ = ?",
   "answer": "25",
   "hint": "$3^2 + (-4)^2$.",
   "explain": "$9 + 16 = 25$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $AC^2 = (6 - (-1))^2 + (1 - 2)^2$ = ?",
   "answer": "50",
   "hint": "$7^2 + (-1)^2$.",
   "explain": "$49 + 1 = 50$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Uji Pythagoras. Siku-siku di titik mana?",
   "options": [
    "B",
    "A",
    "C",
    "Tidak siku-siku"
   ],
   "answer": "B",
   "hint": "$AB^2 + BC^2$ dibandingkan dengan $AC^2$. Sudut siku-siku berhadapan dengan sisi terpanjang.",
   "explain": "$25 + 25 = 50 = AC^2$, jadi siku-siku di $B$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: $AB = BC = 5$, jadi sama kaki. Luas = $\\frac{1}{2} \\times 5 \\times 5$ = ?",
   "answer": "12,5",
   "hint": "Kaki siku-sikunya $AB$ dan $BC$.",
   "explain": "Luas 12,5 satuan luas.",
   "error": "salah-langkah-materi",
   "suffix": "satuan luas"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: persegi panjang pembungkus luasnya 28, tiga segitiga di luar luasnya 6 + 6 + 3,5. Berapa 28 − 15,5?",
   "answer": "12,5",
   "hint": "Kurangkan.",
   "explain": "12,5. Sama.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Siku-siku di $B$, sama kaki ($AB = BC = 5$), luas 12,5 satuan luas."
}
```

### Contoh 4: Soal cerita tarif ojek daring

```soal
{
 "title": "Contoh 4",
 "text": "Tarif ojek daring di Denpasar mengikuti garis lurus. Perjalanan 4 km bertarif Rp18.000 dan perjalanan 10 km bertarif Rp36.000. Tentukan rumus tarif $y$ (rupiah) terhadap jarak $x$ (km), lalu hitung tarif untuk 15 km.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tulis sebagai titik koordinat $(x, y)$.",
   "options": [
    "$(4, 18.000)$ dan $(10, 36.000)$",
    "$(18.000, 4)$ dan $(36.000, 10)$",
    "$(4, 10)$ dan $(18.000, 36.000)$"
   ],
   "answer": "$(4, 18.000)$ dan $(10, 36.000)$",
   "hint": "$x$ = jarak, $y$ = tarif.",
   "explain": "Jarak di depan, tarif di belakang.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Gradien $\\frac{36.000 - 18.000}{10 - 4}$ = ?",
   "answer": "3.000",
   "hint": "18.000 ÷ 6.",
   "explain": "Tarif naik Rp3.000 setiap km.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $18.000 = 3.000 \\times 4 + c$. Berapa $c$?",
   "answer": "6.000",
   "hint": "18.000 − 12.000.",
   "explain": "Biaya awal Rp6.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Tarif 15 km = $3.000 \\times 15 + 6.000$ = ?",
   "answer": "51.000",
   "hint": "45.000 + 6.000.",
   "explain": "Rp51.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $3.000 \\times 10 + 6.000$ = ?",
   "answer": "36.000",
   "hint": "Masukkan $x = 10$.",
   "explain": "Rp36.000, cocok dengan data.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Rumusnya $y = 3.000x + 6.000$; tarif 15 km adalah Rp51.000."
}
```

## Kesalahan yang sering terjadi

- **Urutan pengurangan tidak konsisten.** Menghitung $\frac{y_2 - y_1}{x_1 - x_2}$ membuat tanda gradien terbalik. Kalau pembilang dimulai dari titik $B$, penyebut juga dimulai dari $B$.
- **Gradien dibalik.** Menulis $\frac{\text{geser}}{\text{naik}}$. Ingat ojek: "naik per geser", jadi selisih $y$ di atas.
- **Lupa tanda kurung saat mengurangi bilangan negatif.** $4 - (-2) = 6$, bukan 2.
- **Mengira $c$ selalu angka di belakang.** Pada $2y = 6x - 8$, $c$ bukan $-8$. Bagi dulu semua suku dengan 2: $c = -4$.
- **Menjumlahkan sebelum mengkuadratkan.** $\sqrt{(4 + 8)^2}$ adalah jarak ojek, bukan jarak lurus. Kuadratkan masing-masing dulu: $\sqrt{4^2 + 8^2}$.

## Ringkasan

- Gradien: $m = \frac{y_2 - y_1}{x_2 - x_1}$ (naik dibagi geser). Garis sejajar punya gradien sama.
- Panjang ruas garis: $\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, berasal dari Pythagoras.
- Persamaan garis $y = mx + c$: $m$ gradien, $c$ titik potong sumbu-$y$.
- Langkah mencari persamaan: hitung $m$, substitusi satu titik untuk $c$, cek dengan titik lain.
- Sifat bangun dibuktikan dengan panjang sisi (Pythagoras, sama kaki) dan gradien (sejajar).

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung gradien garis melalui $(2, -3)$ dan $(6, 5)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Naik = $5 - (-3)$ = ?",
   "answer": "8",
   "hint": "Mengurangi bilangan negatif sama dengan menambah.",
   "explain": "Naik 8.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Gradien = ?",
   "answer": "2",
   "hint": "Naik ÷ geser, dengan geser 6 − 2.",
   "explain": "$\\frac{8}{4} = 2$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Gradiennya 2."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung jarak antara $(-2, 1)$ dan $(4, 9)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Geser = $4 - (-2)$ = ?",
   "answer": "6",
   "hint": "Selisih $x$.",
   "explain": "Geser 6.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Naik = 9 − 1 = ?",
   "answer": "8",
   "hint": "Selisih $y$.",
   "explain": "Naik 8.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Jarak = $\\sqrt{6^2 + 8^2}$ = ?",
   "answer": "10",
   "hint": "$\\sqrt{36 + 64}$.",
   "explain": "$\\sqrt{100} = 10$.",
   "error": "salah-langkah-materi",
   "suffix": "satuan"
  }
 ],
 "conclusion": "Jaraknya 10 satuan."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Tentukan persamaan garis dengan gradien $-3$ yang melalui $(1, 4)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$4 = -3(1) + c$. Berapa $c$?",
   "answer": "7",
   "hint": "Tambahkan 3 ke kedua ruas.",
   "explain": "$c = 7$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Persamaan garisnya?",
   "options": [
    "$y = -3x + 7$",
    "$y = -3x + 4$",
    "$y = 3x + 7$"
   ],
   "answer": "$y = -3x + 7$",
   "hint": "Pakai $m = -3$ dan $c$ tadi.",
   "explain": "$y = -3x + 7$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Persamaannya $y = -3x + 7$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Garis melalui $(0, -2)$ dan $(3, 4)$. Tentukan persamaannya, lalu periksa apakah $(5, 8)$ terletak pada garis itu.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Gradien = ?",
   "answer": "2",
   "hint": "$\\frac{4 - (-2)}{3 - 0}$.",
   "explain": "$\\frac{6}{3} = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Persamaannya?",
   "options": [
    "$y = 2x - 2$",
    "$y = 2x + 2$",
    "$y = -2x + 2$"
   ],
   "answer": "$y = 2x - 2$",
   "hint": "Titik $(0, -2)$ adalah titik potong sumbu-$y$.",
   "explain": "$c = -2$, jadi $y = 2x - 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Apakah $(5, 8)$ pada garis?",
   "options": [
    "Ya, karena $2(5) - 2 = 8$",
    "Tidak, karena $2(5) - 2 = 12$"
   ],
   "answer": "Ya, karena $2(5) - 2 = 8$",
   "hint": "Masukkan $x = 5$.",
   "explain": "$10 - 2 = 8$, sama dengan $y$-nya.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Persamaannya $y = 2x - 2$, dan $(5, 8)$ terletak pada garis."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Tentukan gradien dan titik potong sumbu-$y$ dari $2y = 6x - 8$. Lalu tentukan persamaan garis yang sejajar dengannya dan melalui $(1, 1)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Gradien = ?",
   "answer": "3",
   "hint": "Bagi dulu semua suku dengan 2.",
   "explain": "$y = 3x - 4$, jadi $m = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Titik potong sumbu-$y$, $c$ = ?",
   "answer": "-4",
   "hint": "Lihat $y = 3x - 4$.",
   "explain": "$c = -4$, bukan $-8$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Garis sejajar melalui $(1, 1)$?",
   "options": [
    "$y = 3x - 2$",
    "$y = 3x - 4$",
    "$y = -\\frac{1}{3}x + \\frac{4}{3}$",
    "$y = 3x + 1$"
   ],
   "answer": "$y = 3x - 2$",
   "hint": "Sejajar berarti gradien sama; cari $c$ dari $1 = 3(1) + c$.",
   "explain": "$c = -2$, jadi $y = 3x - 2$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$m = 3$, $c = -4$; garis sejajarnya $y = 3x - 2$."
}
```
