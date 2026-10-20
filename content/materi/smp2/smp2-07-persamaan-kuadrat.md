---
id: smp2-07-persamaan-kuadrat
judul: Persamaan Kuadrat dengan Pemfaktoran
jenjang: smp2
moe: "Secondary 2 · Number and Algebra · N7 Equations and inequalities"
prasyarat: [smp2-02-ekspansi-faktorisasi, smp1-09-persamaan-linear]
durasi_menit: 45
---

## Kenapa belajar ini?

Saat menghitung ukuran kebun dari luasnya, atau mencari dua bilangan dari hasil kalinya, kita sering bertemu bentuk $x^2$. Persamaan seperti ini disebut persamaan kuadrat. Kalau bentuknya bisa difaktorkan, ada cara yang sangat cepat untuk menyelesaikannya.

## Analogi

Bayangkan **mesin fotokopi** di koperasi sekolah. Banyak lembar yang keluar dihitung dengan:

$$\text{banyak lembar} = \text{banyak rangkap} \times \text{banyak halaman}$$

Suatu hari mesin mengeluarkan **0 lembar**. Apa artinya? Pasti **banyak rangkapnya 0**, atau **banyak halamannya 0** (atau dua-duanya). Tidak mungkin keduanya bukan nol, karena dua bilangan bukan nol jika dikalikan tidak pernah menghasilkan 0.

```visual
{"type": "table", "head": ["Banyak rangkap", "Banyak halaman", "Banyak lembar"], "rows": [["3", "4", "12"], ["0", "4", "0"], ["3", "0", "0"], ["0", "0", "0"], ["2", "5", "10"]], "caption": "Lembar = 0 hanya terjadi kalau rangkap 0 atau halaman 0."}
```

Inilah kunci seluruh materi ini. Kalau kita bisa menulis persamaan sebagai **perkalian dua faktor sama dengan nol**, kita cukup memeriksa: faktor pertama nol, atau faktor kedua nol.

## Konsep

### Persamaan kuadrat

**Persamaan kuadrat** adalah persamaan yang pangkat tertinggi variabelnya 2. Bentuk umumnya:

$$ax^2 + bx + c = 0, \quad a \ne 0$$

Contoh: $x^2 - 7x + 12 = 0$, $2x^2 + x - 6 = 0$, $x^2 = 5x$. Persamaan kuadrat bisa punya dua penyelesaian, satu penyelesaian, atau tidak punya penyelesaian real. Penyelesaian disebut juga **akar**.

### Sifat hasil kali nol

Untuk bilangan real $A$ dan $B$:

$$A \times B = 0 \quad\Rightarrow\quad A = 0 \ \text{atau}\ B = 0$$

Kenapa benar? Misalkan $A \ne 0$. Bagi kedua ruas dengan $A$, kita dapat $B = 0$. Jadi kalau $A$ bukan nol, $B$ pasti nol. Ini sama dengan mesin fotokopi tadi.

```anim
{"type": "grafik", "title": "Di mana y = (x − 3)(x + 2) bernilai nol?", "xmin": -4, "xmax": 5, "ymin": -7, "ymax": 7, "kurva": [{"f": "(x-3)(x+2)", "label": "y = (x - 3)(x + 2)"}], "titik": [{"x": -2, "y": 0, "label": "x = −2"}, {"x": 3, "y": 0, "label": "x = 3"}], "langkah": [{"say": "Grafik $y = (x - 3)(x + 2)$.", "kurva": 1}, {"say": "Di $x = -2$, faktor $(x + 2)$ bernilai nol, jadi $y = 0$.", "kurva": 1, "titik": 1}, {"say": "Di $x = 3$, faktor $(x - 3)$ bernilai nol, jadi $y = 0$. Di tempat lain kedua faktor bukan nol.", "kurva": 1, "titik": 2}]}
```

**Penting:** sifat ini hanya berlaku untuk **nol**. Jika $A \times B = 6$, kita **tidak** bisa menyimpulkan $A = 6$ atau $B = 6$, karena $6 = 2 \times 3 = 1 \times 6 = 12 \times \frac{1}{2}$, dan seterusnya.

### Mengingat cara memfaktorkan

Dari materi ekspansi dan faktorisasi, ada beberapa pola:

- **Faktor persekutuan:** $x^2 - 5x = x(x - 5)$.
- **Selisih dua kuadrat:** $x^2 - 16 = (x + 4)(x - 4)$.
- **Trinomial $x^2 + bx + c$:** cari dua bilangan yang hasil kalinya $c$ dan jumlahnya $b$. Contoh: $x^2 - 7x + 12$, dua bilangannya $-3$ dan $-4$, jadi $(x - 3)(x - 4)$.
- **Trinomial $ax^2 + bx + c$:** cari dua bilangan yang hasil kalinya $ac$ dan jumlahnya $b$, pecah suku tengah, lalu kelompokkan.

### Lima langkah tetap

1. **Rapikan:** pindahkan semua suku ke satu ruas sehingga ruas lain **0**.
2. **Faktorkan** bentuk kuadratnya.
3. **Pakai sifat hasil kali nol:** tulis "faktor 1 = 0 atau faktor 2 = 0".
4. **Selesaikan** dua persamaan linear kecil itu.
5. **Cek** setiap jawaban dengan memasukkannya ke persamaan awal (dan ke konteks soal cerita).

```anim
{"type": "persamaan", "title": "Lima langkah pada x² + x = 6", "baris": [{"tex": "x^2 + x = 6", "say": "Ruas kanan belum 0. Sifat hasil kali nol belum boleh dipakai."}, {"tex": "x^2 + x - 6 = 0", "say": "Rapikan: kurangi 6 di kedua ruas.", "op": "- 6"}, {"tex": "(x + 3)(x - 2) = 0", "say": "Faktorkan: hasil kali $-6$, jumlah $1$, yaitu $3$ dan $-2$.", "op": "\\text{faktorkan}"}, {"tex": "x + 3 = 0 \\ \\text{atau}\\ x - 2 = 0", "say": "Sifat hasil kali nol."}, {"tex": "x = -3 \\ \\text{atau}\\ x = 2", "say": "Selesaikan. Cek: $9 - 3 = 6$ dan $4 + 2 = 6$. Benar."}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Sudah dalam bentuk faktor

```soal
{
 "title": "Sudah dalam bentuk faktor",
 "text": "Selesaikan $(x - 3)(x + 5) = 0$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Apakah sifat hasil kali nol boleh langsung dipakai?",
   "options": [
    "Ya, ruas kanan 0 dan ruas kiri perkalian",
    "Tidak, harus dijabarkan dulu"
   ],
   "answer": "Ya, ruas kanan 0 dan ruas kiri perkalian",
   "hint": "Periksa ruas kanan dan bentuk ruas kiri.",
   "explain": "Bentuknya sudah faktor × faktor = 0.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Dari $x - 3 = 0$, $x = ?$",
   "answer": "3",
   "hint": "Tambah 3 di kedua ruas.",
   "explain": "x = 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Dari $x + 5 = 0$, $x = ?$",
   "answer": "-5",
   "hint": "Kurangi 5 di kedua ruas.",
   "explain": "x = −5, bukan 5.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: untuk $x = -5$, hitung faktor $(x - 3)$.",
   "answer": "-8",
   "hint": "−5 − 3.",
   "explain": "(−8)(0) = 0. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x = 3$ atau $x = -5$."
}
```

### Contoh 2: Trinomial dengan $a = 1$

```soal
{
 "title": "Trinomial dengan a = 1",
 "text": "Selesaikan $x^2 - 7x + 12 = 0$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1–2: Dua bilangan dengan hasil kali 12 dan jumlah −7?",
   "options": [
    "−3 dan −4",
    "3 dan 4",
    "−2 dan −6",
    "−12 dan −1"
   ],
   "answer": "−3 dan −4",
   "hint": "Hasil kali positif dan jumlah negatif: keduanya negatif.",
   "explain": "(−3)(−4) = 12, −3 + (−4) = −7.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Bentuk faktornya?",
   "options": [
    "$(x - 3)(x - 4) = 0$",
    "$(x + 3)(x + 4) = 0$",
    "$(x - 3)(x + 4) = 0$"
   ],
   "answer": "$(x - 3)(x - 4) = 0$",
   "hint": "Pakai pasangan tadi.",
   "explain": "$(x - 3)(x - 4) = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3–4: Akar yang lebih kecil?",
   "answer": "3",
   "hint": "x − 3 = 0.",
   "explain": "x = 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Akar yang lebih besar?",
   "answer": "4",
   "hint": "x − 4 = 0.",
   "explain": "x = 4.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: masukkan $x = 4$: $16 - 28 + 12 = ?$",
   "answer": "0",
   "hint": "Hitung pelan-pelan.",
   "explain": "Hasilnya 0. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x = 3$ atau $x = 4$."
}
```

### Contoh 3: Jangan membagi dengan $x$

```soal
{
 "title": "Jangan membagi dengan x",
 "text": "Selesaikan $x^2 = 5x$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Langkah pertama yang benar?",
   "options": [
    "Pindahkan: $x^2 - 5x = 0$",
    "Bagi kedua ruas dengan $x$",
    "Akarkan kedua ruas"
   ],
   "answer": "Pindahkan: $x^2 - 5x = 0$",
   "hint": "$x$ bisa bernilai 0, dan membagi dengan 0 tidak boleh.",
   "explain": "$x^2 - 5x = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Faktorkan.",
   "options": [
    "$x(x - 5) = 0$",
    "$(x - 5)^2 = 0$",
    "$x(x + 5) = 0$"
   ],
   "answer": "$x(x - 5) = 0$",
   "hint": "Keluarkan faktor persekutuan $x$.",
   "explain": "$x(x - 5) = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3–4: Penyelesaiannya?",
   "options": [
    "$x = 0$ atau $x = 5$",
    "$x = 5$ saja",
    "$x = 0$ atau $x = -5$"
   ],
   "answer": "$x = 0$ atau $x = 5$",
   "hint": "Faktor pertama $x$ sendiri juga bisa nol.",
   "explain": "$x = 0$ atau $x = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: untuk $x = 0$, ruas kiri $x^2 = ?$",
   "answer": "0",
   "hint": "Nol dikuadratkan.",
   "explain": "0 = 5 × 0. Benar, jadi x = 0 memang akar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x = 0$ atau $x = 5$."
}
```

### Contoh 4: Trinomial dengan $a \ne 1$

```soal
{
 "title": "Trinomial dengan a ≠ 1",
 "text": "Selesaikan $2x^2 + x - 6 = 0$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1–2: Hitung $ac$.",
   "answer": "-12",
   "hint": "2 × (−6).",
   "explain": "ac = −12.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Dua bilangan dengan hasil kali −12 dan jumlah 1?",
   "options": [
    "4 dan −3",
    "−4 dan 3",
    "6 dan −2",
    "12 dan −1"
   ],
   "answer": "4 dan −3",
   "hint": "Jumlahnya harus +1.",
   "explain": "4 × (−3) = −12, 4 + (−3) = 1.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: $2x^2 + 4x - 3x - 6 = 2x(x + 2) - 3(x + 2)$. Faktornya?",
   "options": [
    "$(2x - 3)(x + 2)$",
    "$(2x + 3)(x - 2)$",
    "$(2x - 3)(x - 2)$"
   ],
   "answer": "$(2x - 3)(x + 2)$",
   "hint": "Kurung sama $(x + 2)$.",
   "explain": "$(2x - 3)(x + 2) = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Dari $2x - 3 = 0$, $x = ?$ (tulis sebagai pecahan)",
   "answer": {
    "num": 3,
    "den": 2
   },
   "hint": "Tambah 3, lalu bagi 2.",
   "explain": "$x = \\frac{3}{2}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 4 (lanjutan): Dari $x + 2 = 0$, $x = ?$",
   "answer": "-2",
   "hint": "Kurangi 2.",
   "explain": "x = −2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: masukkan $x = -2$: $8 - 2 - 6 = ?$",
   "answer": "0",
   "hint": "Hitung.",
   "explain": "0. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x = \\frac{3}{2}$ atau $x = -2$."
}
```

### Contoh 5: Soal cerita

```soal
{
 "title": "Soal cerita",
 "text": "Kebun Pak Wayan berbentuk persegi panjang. Panjangnya 3 m lebih dari lebarnya, dan luasnya $40 \\text{ m}^2$. Tentukan panjang dan lebarnya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1–2: Jika lebar $w$ m, persamaannya?",
   "options": [
    "$w(w + 3) = 40$",
    "$w + (w + 3) = 40$",
    "$3w = 40$"
   ],
   "answer": "$w(w + 3) = 40$",
   "hint": "Luas = panjang × lebar.",
   "explain": "$w(w + 3) = 40$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Rapikan.",
   "options": [
    "$w^2 + 3w - 40 = 0$",
    "$w^2 + 3w = 0$",
    "$w = 40$ atau $w + 3 = 40$"
   ],
   "answer": "$w^2 + 3w - 40 = 0$",
   "hint": "Ruas kanan belum 0. Jabarkan, lalu kurangi 40.",
   "explain": "$w^2 + 3w - 40 = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Faktornya?",
   "options": [
    "$(w + 8)(w - 5) = 0$",
    "$(w - 8)(w + 5) = 0$",
    "$(w + 10)(w - 4) = 0$"
   ],
   "answer": "$(w + 8)(w - 5) = 0$",
   "hint": "Hasil kali −40, jumlah 3.",
   "explain": "8 × (−5) = −40, 8 + (−5) = 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5–6: Lebar kebun (tolak yang tidak masuk akal)?",
   "answer": "5",
   "hint": "Akarnya −8 dan 5. Lebar tidak mungkin negatif.",
   "explain": "w = −8 ditolak, jadi lebar 5 m.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Panjang kebun?",
   "answer": "8",
   "hint": "Panjang = lebar + 3.",
   "explain": "8 m.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: panjang × lebar = ?",
   "answer": "40",
   "hint": "8 × 5.",
   "explain": "40 m². Cocok.",
   "error": "salah-langkah-materi",
   "suffix": "m²"
  }
 ],
 "conclusion": "Panjang 8 m dan lebar 5 m."
}
```

## Kesalahan yang sering terjadi

- **Memakai sifat hasil kali nol ketika ruas kanan bukan 0.** Dari $(x - 2)(x + 3) = 6$ menulis $x - 2 = 6$ atau $x + 3 = 6$. Mesin yang mengeluarkan 6 lembar tidak memberi tahu apa-apa tentang tiap faktor. Yang benar: jabarkan menjadi $x^2 + x - 6 = 6$, lalu $x^2 + x - 12 = 0$, sehingga $(x + 4)(x - 3) = 0$ dan $x = -4$ atau $x = 3$.
- **Membagi dengan $x$.** Dari $x^2 = 5x$ langsung menulis $x = 5$. Akar $x = 0$ hilang. Pindahkan ke satu ruas lalu faktorkan.
- **Salah tanda akar.** Dari $(x + 5) = 0$ menulis $x = 5$. Yang benar $x = -5$. Cek selalu dengan substitusi.
- **Selisih kuadrat hanya satu akar.** Dari $x^2 = 16$ menulis $x = 4$ saja. Karena $(-4)^2 = 16$ juga, jawabannya $x = 4$ atau $x = -4$.
- **Lupa menolak jawaban yang tidak masuk akal.** Pada soal cerita, panjang, umur, atau banyak benda tidak boleh negatif.

## Ringkasan

- Persamaan kuadrat berbentuk $ax^2 + bx + c = 0$ dengan $a \ne 0$.
- Sifat hasil kali nol: jika $A \times B = 0$, maka $A = 0$ atau $B = 0$. Hanya berlaku untuk **nol**.
- Langkah: rapikan menjadi $= 0$ → faktorkan → sifat hasil kali nol → selesaikan → cek.
- Jangan membagi dengan variabel; faktorkan supaya akar $0$ tidak hilang.
- Pada soal cerita, tolak jawaban yang tidak sesuai konteks.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Selesaikan $(x + 4)(2x - 1) = 0$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Dari $x + 4 = 0$, $x = ?$",
   "answer": "-4",
   "hint": "Kurangi 4.",
   "explain": "x = −4.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Dari $2x - 1 = 0$, $x = ?$",
   "answer": {
    "num": 1,
    "den": 2
   },
   "hint": "Tambah 1, lalu bagi 2.",
   "explain": "$x = \\frac{1}{2}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "$x = -4$ atau $x = \\frac{1}{2}$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Selesaikan $x^2 + 2x - 15 = 0$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Bentuk faktornya?",
   "options": [
    "$(x + 5)(x - 3) = 0$",
    "$(x - 5)(x + 3) = 0$",
    "$(x + 15)(x - 1) = 0$"
   ],
   "answer": "$(x + 5)(x - 3) = 0$",
   "hint": "Hasil kali −15, jumlah 2.",
   "explain": "5 × (−3) = −15, 5 + (−3) = 2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Penyelesaiannya?",
   "options": [
    "$x = -5$ atau $x = 3$",
    "$x = 5$ atau $x = -3$",
    "$x = 5$ atau $x = 3$"
   ],
   "answer": "$x = -5$ atau $x = 3$",
   "hint": "Setiap faktor = 0; awasi tandanya.",
   "explain": "$x = -5$ atau $x = 3$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x = -5$ atau $x = 3$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Selesaikan $x^2 - 16 = 0$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Bentuk faktornya?",
   "options": [
    "$(x + 4)(x - 4) = 0$",
    "$(x - 4)^2 = 0$",
    "$(x - 8)(x + 2) = 0$"
   ],
   "answer": "$(x + 4)(x - 4) = 0$",
   "hint": "Selisih dua kuadrat.",
   "explain": "$(x + 4)(x - 4) = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Penyelesaiannya?",
   "options": [
    "$x = 4$ atau $x = -4$",
    "$x = 4$ saja",
    "$x = 16$"
   ],
   "answer": "$x = 4$ atau $x = -4$",
   "hint": "$(-4)^2$ juga 16.",
   "explain": "Dua akar: 4 dan −4.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x = 4$ atau $x = -4$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Selesaikan $3x^2 - 10x - 8 = 0$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Hitung $ac$.",
   "answer": "-24",
   "hint": "3 × (−8).",
   "explain": "ac = −24; dua bilangannya −12 dan 2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Bentuk faktornya?",
   "options": [
    "$(3x + 2)(x - 4) = 0$",
    "$(3x - 2)(x + 4) = 0$",
    "$(3x - 4)(x + 2) = 0$"
   ],
   "answer": "$(3x + 2)(x - 4) = 0$",
   "hint": "$3x^2 - 12x + 2x - 8 = 3x(x - 4) + 2(x - 4)$.",
   "explain": "$(3x + 2)(x - 4) = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Penyelesaiannya?",
   "options": [
    "$x = 4$ atau $x = -\\frac{2}{3}$",
    "$x = -4$ atau $x = \\frac{2}{3}$",
    "$x = 4$ atau $x = -2$"
   ],
   "answer": "$x = 4$ atau $x = -\\frac{2}{3}$",
   "hint": "$3x + 2 = 0$ memberi $x = -\\frac{2}{3}$.",
   "explain": "$x = 4$ atau $x = -\\frac{2}{3}$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x = 4$ atau $x = -\\frac{2}{3}$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Hasil kali dua bilangan bulat positif yang berurutan adalah 132. Tentukan kedua bilangan itu.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Persamaannya (bilangan pertama $n$)?",
   "options": [
    "$n(n + 1) = 132$",
    "$n + (n + 1) = 132$",
    "$2n = 132$"
   ],
   "answer": "$n(n + 1) = 132$",
   "hint": "Berurutan: $n$ dan $n + 1$; yang diketahui hasil kalinya.",
   "explain": "$n^2 + n - 132 = 0$, yaitu $(n + 12)(n - 11) = 0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Nilai $n$ yang diterima?",
   "answer": "11",
   "hint": "Akarnya −12 dan 11; bilangannya harus positif.",
   "explain": "n = −12 ditolak, jadi n = 11.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Bilangan kedua?",
   "answer": "12",
   "hint": "n + 1.",
   "explain": "12. Cek: 11 × 12 = 132.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Kedua bilangan itu 11 dan 12."
}
```
