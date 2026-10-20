---
id: smp3-05-himpunan
judul: Himpunan dan Diagram Venn
jenjang: smp3
moe: "Secondary 3 · Number and Algebra · N8 Set language and notation"
prasyarat: []
durasi_menit: 45
---

## Kenapa belajar ini?

Wali kelas ingin tahu berapa siswa yang ikut futsal, paduan suara, keduanya, atau tidak ikut apa pun. Bahasa himpunan dan diagram Venn membuat data seperti ini rapi dan mudah dihitung, tanpa ada siswa yang terhitung dua kali.

## Analogi

Bayangkan seluruh siswa kelas 9A berkumpul di **lapangan sekolah**. Lapangan itu adalah **semesta**: tempat semua yang sedang kita bicarakan.

Di lantai lapangan ada dua **simpai (hula hoop) besar** yang saling tumpang tindih. Simpai merah untuk anggota klub futsal, simpai biru untuk anggota paduan suara.

- Siswa yang ikut keduanya berdiri di **bagian yang tumpang tindih**.
- Siswa yang hanya ikut satu klub berdiri di bagian simpainya saja.
- Siswa yang tidak ikut keduanya berdiri di lapangan, **di luar kedua simpai**.

```anim
{"type": "bangun", "title": "Lapangan dan dua simpai", "titik": {" ": [0, 0], "  ": [10, 0], "   ": [10, 6], "    ": [0, 6], "ξ": [0.6, 5.4], "Futsal": [2.2, 5.6], "Paduan suara": [7.9, 5.6]}, "sisi": [[" ", "  "], ["  ", "   "], ["   ", "    "], ["    ", " "]], "lingkaran": [{"pusat": [3.8, 3], "r": 2.2}, {"pusat": [6.2, 3], "r": 2.2}], "langkah": [{"say": "Lapangan sekolah adalah semesta $\\xi$: semua siswa 9A ada di sini.", "lingkaran": 0}, {"say": "Simpai merah: anggota klub futsal.", "lingkaran": 1, "sorot": ["Futsal"]}, {"say": "Simpai biru: anggota paduan suara. Kedua simpai tumpang tindih.", "lingkaran": 2, "sorot": ["Paduan suara"]}, {"say": "Yang ikut keduanya berdiri di bagian tumpang tindih; yang tidak ikut apa pun berdiri di luar kedua simpai.", "lingkaran": 2}]}
```

Setiap siswa berdiri di tepat satu tempat. Itulah kunci menghitung dengan diagram Venn.

## Konsep

### Himpunan dan anggota

**Himpunan** adalah kumpulan benda yang batasnya jelas: kita selalu bisa memutuskan apakah suatu benda termasuk atau tidak. Himpunan ditulis dengan huruf kapital dan kurung kurawal.

- $A = \{2, 4, 6, 8\}$ (cara mendaftar).
- $A = \{x : x \text{ bilangan genap}, 1 \le x \le 9\}$ (cara notasi pembentuk himpunan). Dibaca "himpunan $x$ sehingga $x$ bilangan genap antara 1 dan 9".

Lambang **$\in$** berarti "anggota dari": $4 \in A$. Lambang **$\notin$** berarti "bukan anggota": $5 \notin A$.

**$n(A)$** adalah banyak anggota himpunan $A$. Di sini $n(A) = 4$. Ini sama dengan menghitung siswa di dalam satu simpai.

### Himpunan kosong dan semesta

- **Himpunan kosong**, ditulis $\varnothing$ atau $\{\}$, tidak punya anggota. Contoh: himpunan siswa 9A yang tingginya 5 meter. Simpainya kosong.
- **Himpunan semesta**, ditulis $\xi$ (di buku Indonesia sering $S$), berisi semua anggota yang sedang dibicarakan. Ini lapangannya.

### Komplemen, irisan, gabungan

- **Komplemen** $A'$: anggota semesta yang **tidak** di $A$. Semua siswa di luar simpai merah.
- **Irisan** $A \cap B$: anggota yang ada di $A$ **dan** di $B$. Bagian yang tumpang tindih.
- **Gabungan** $A \cup B$: anggota yang ada di $A$ **atau** $B$ (atau keduanya). Semua siswa yang berdiri di dalam simpai mana pun.

### Himpunan bagian

$A \subseteq B$ berarti setiap anggota $A$ juga anggota $B$. Bayangkan simpai $A$ terletak seluruhnya di dalam simpai $B$.

$A \subset B$ (**himpunan bagian sejati**) berarti $A \subseteq B$ tetapi $A \ne B$: $B$ punya anggota yang tidak ada di $A$.

Dua fakta penting: $\varnothing$ adalah himpunan bagian dari setiap himpunan, dan setiap himpunan adalah himpunan bagian dari dirinya sendiri.

### Empat daerah pada diagram Venn

Dua lingkaran di dalam persegi panjang membagi semesta menjadi empat daerah:

```anim
{"type": "bangun", "title": "Empat daerah diagram Venn", "titik": {" ": [0, 0], "  ": [10, 0], "   ": [10, 6], "    ": [0, 6], "ξ": [0.6, 5.4], "A": [2.0, 5.0], "B": [8.0, 5.0], "I": [2.7, 3], "II": [5, 3], "III": [7.3, 3], "IV": [9, 1]}, "sisi": [[" ", "  "], ["  ", "   "], ["   ", "    "], ["    ", " "]], "lingkaran": [{"pusat": [3.8, 3], "r": 2.2}, {"pusat": [6.2, 3], "r": 2.2}], "langkah": [{"say": "Persegi panjang adalah semesta $\\xi$, dua lingkaran adalah $A$ dan $B$."}, {"say": "Daerah I: hanya $A$, yaitu $A \\cap B'$.", "sorot": ["I"]}, {"say": "Daerah II: $A$ dan $B$, yaitu $A \\cap B$.", "sorot": ["II"]}, {"say": "Daerah III: hanya $B$, yaitu $A' \\cap B$.", "sorot": ["III"]}, {"say": "Daerah IV: bukan keduanya, yaitu $(A \\cup B)'$.", "sorot": ["IV"]}]}
```

- I: hanya $A$, yaitu $A \cap B'$.
- II: $A$ dan $B$, yaitu $A \cap B$.
- III: hanya $B$, yaitu $A' \cap B$.
- IV: bukan keduanya, yaitu $(A \cup B)'$.

### Rumus banyak anggota gabungan

$$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$

**Kenapa dikurangi?** Saat menghitung $n(A)$ lalu $n(B)$, siswa di daerah tumpang tindih terhitung **dua kali**: sekali di simpai merah, sekali di simpai biru. Jadi kita kurangi sekali.

```anim
{"type": "persamaan", "title": "Kenapa irisan dikurangi sekali", "baris": [{"tex": "n(F) + n(P) = 20 + 15 = 35", "say": "Hitung simpai futsal (20) dan simpai paduan suara (15)."}, {"tex": "n(F \\cap P) = 6", "say": "Tetapi 6 siswa di daerah tumpang tindih terhitung dua kali."}, {"tex": "n(F \\cup P) = 35 - 6 = 29", "say": "Kurangi sekali, supaya setiap siswa terhitung tepat satu kali.", "op": "$-\\,n(F \\cap P)$"}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Mendaftar anggota

```soal
{
 "title": "Contoh 1",
 "text": "$\\xi = \\{x : x \\text{ bilangan bulat}, 1 \\le x \\le 12\\}$, $A = \\{x : x \\text{ genap}\\}$, $B = \\{x : x \\text{ kelipatan } 3\\}$. Tentukan $A \\cap B$, $A \\cup B$, $A'$, dan $(A \\cup B)'$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Daftar anggota $B$.",
   "options": [
    "$\\{3, 6, 9, 12\\}$",
    "$\\{3, 6, 9\\}$",
    "$\\{1, 3, 6, 9, 12\\}$"
   ],
   "answer": "$\\{3, 6, 9, 12\\}$",
   "hint": "Kelipatan 3 dari 1 sampai 12.",
   "explain": "$B = \\{3, 6, 9, 12\\}$, dan $A = \\{2, 4, 6, 8, 10, 12\\}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: $A \\cap B$ = ?",
   "options": [
    "$\\{6, 12\\}$",
    "$\\{6\\}$",
    "$\\{2, 3, 4, 6, 8, 9, 10, 12\\}$"
   ],
   "answer": "$\\{6, 12\\}$",
   "hint": "Anggota yang ada di $A$ dan di $B$.",
   "explain": "6 dan 12 genap sekaligus kelipatan 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: $A \\cup B$ = ?",
   "options": [
    "$\\{2, 3, 4, 6, 8, 9, 10, 12\\}$",
    "$\\{6, 12\\}$",
    "$\\{2, 3, 4, 6, 6, 8, 9, 10, 12, 12\\}$"
   ],
   "answer": "$\\{2, 3, 4, 6, 8, 9, 10, 12\\}$",
   "hint": "Semua anggota $A$ atau $B$, masing-masing ditulis sekali.",
   "explain": "Ada 8 anggota.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: $A'$ = ?",
   "options": [
    "$\\{1, 3, 5, 7, 9, 11\\}$",
    "$\\{3, 6, 9, 12\\}$",
    "$\\{1, 5, 7, 11\\}$"
   ],
   "answer": "$\\{1, 3, 5, 7, 9, 11\\}$",
   "hint": "Anggota semesta yang tidak genap.",
   "explain": "$A'$ berisi semua bilangan ganjil 1 sampai 11.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: $(A \\cup B)'$ = ?",
   "options": [
    "$\\{1, 5, 7, 11\\}$",
    "$\\{1, 3, 5, 7, 9, 11\\}$",
    "$\\varnothing$"
   ],
   "answer": "$\\{1, 5, 7, 11\\}$",
   "hint": "Anggota semesta yang tidak ada di $A \\cup B$.",
   "explain": "Bilangan yang bukan genap dan bukan kelipatan 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $n(A \\cup B) = 6 + 4 - 2$ = ?",
   "answer": "8",
   "hint": "$n(A) + n(B) - n(A \\cap B)$.",
   "explain": "8, sama dengan hitungan langsung. Lalu $8 + 4 = 12 = n(\\xi)$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $A \\cap B = \\{6, 12\\}$, $A \\cup B = \\{2, 3, 4, 6, 8, 9, 10, 12\\}$, $A' = \\{1, 3, 5, 7, 9, 11\\}$, $(A \\cup B)' = \\{1, 5, 7, 11\\}$."
}
```

### Contoh 2: Himpunan bagian dan notasi

```soal
{
 "title": "Contoh 2",
 "text": "Dengan $A = \\{2, 4, 6, 8, 10, 12\\}$ dan $B = \\{3, 6, 9, 12\\}$, mana yang benar? (a) $\\{6, 12\\} \\subset A$, (b) $9 \\in A$, (c) $\\{3\\} \\in B$, (d) $\\varnothing \\subseteq B$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Lambang $\\in$ menghubungkan ...",
   "options": [
    "satu anggota dengan himpunan",
    "himpunan dengan himpunan"
   ],
   "answer": "satu anggota dengan himpunan",
   "hint": "Ingat cara membaca $4 \\in A$.",
   "explain": "$\\in$ untuk anggota; $\\subset$ dan $\\subseteq$ untuk himpunan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: (a) $\\{6, 12\\} \\subset A$?",
   "options": [
    "Benar",
    "Salah"
   ],
   "answer": "Benar",
   "hint": "Apakah 6 dan 12 di $A$, dan $A$ punya anggota lain?",
   "explain": "Keduanya di $A$, dan $A$ punya anggota lain seperti 2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: (b) $9 \\in A$?",
   "options": [
    "Benar",
    "Salah"
   ],
   "answer": "Salah",
   "hint": "Apakah 9 genap?",
   "explain": "9 ganjil; yang benar $9 \\notin A$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: (c) $\\{3\\} \\in B$?",
   "options": [
    "Benar",
    "Salah"
   ],
   "answer": "Salah",
   "hint": "$\\{3\\}$ itu anggota atau himpunan?",
   "explain": "$\\{3\\}$ himpunan; yang benar $3 \\in B$ atau $\\{3\\} \\subset B$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: (d) $\\varnothing \\subseteq B$?",
   "options": [
    "Benar",
    "Salah"
   ],
   "answer": "Benar",
   "hint": "Ingat fakta tentang himpunan kosong.",
   "explain": "Himpunan kosong adalah himpunan bagian dari setiap himpunan.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi (a) dan (d) benar; (b) dan (c) salah."
}
```

### Contoh 3: Soal cerita dengan diagram Venn

```soal
{
 "title": "Contoh 3",
 "text": "Kelas 9A berisi 36 siswa. Sebanyak 20 siswa ikut futsal, 15 ikut paduan suara, dan 6 ikut keduanya. Berapa siswa yang tidak ikut kedua klub?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Isi daerah tengah (irisan) dulu. Daerah II = ?",
   "answer": "6",
   "hint": "Siswa yang ikut keduanya.",
   "explain": "Daerah II = 6.",
   "error": "salah-langkah-materi",
   "suffix": "siswa"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hanya futsal = 20 − 6 = ?",
   "answer": "14",
   "hint": "Kurangi irisan dari futsal.",
   "explain": "Daerah I = 14.",
   "error": "salah-fakta-kurang",
   "suffix": "siswa"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hanya paduan suara = 15 − 6 = ?",
   "answer": "9",
   "hint": "Kurangi irisan dari paduan suara.",
   "explain": "Daerah III = 9.",
   "error": "salah-fakta-kurang",
   "suffix": "siswa"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Di luar kedua simpai = 36 − (14 + 6 + 9) = ?",
   "answer": "7",
   "hint": "14 + 6 + 9 = 29.",
   "explain": "36 − 29 = 7.",
   "error": "salah-langkah-materi",
   "suffix": "siswa"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $n(F \\cup P) = 20 + 15 - 6$ = ?",
   "answer": "29",
   "hint": "Pakai rumus gabungan.",
   "explain": "29, dan 36 − 29 = 7. Sama.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Ada 7 siswa yang tidak ikut kedua klub."
}
```

### Contoh 4: Irisan belum diketahui

```soal
{
 "title": "Contoh 4",
 "text": "Dari 40 siswa, 25 suka bakso, 18 suka soto, dan 5 tidak suka keduanya. Berapa siswa yang suka keduanya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Misalkan $x$ siswa suka keduanya. Berapa yang hanya suka bakso?",
   "options": [
    "$25 - x$",
    "$25$",
    "$25 + x$"
   ],
   "answer": "$25 - x$",
   "hint": "Siswa di irisan juga termasuk 25 penyuka bakso.",
   "explain": "Hanya bakso: $25 - x$; hanya soto: $18 - x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Semua daerah jumlahnya 40. Persamaannya?",
   "options": [
    "$48 - x = 40$",
    "$48 + x = 40$",
    "$43 - x = 40$"
   ],
   "answer": "$48 - x = 40$",
   "hint": "$(25 - x) + x + (18 - x) + 5$.",
   "explain": "$25 + 18 + 5 - x = 48 - x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Berapa $x$?",
   "answer": "8",
   "hint": "48 − 40.",
   "explain": "$x = 8$.",
   "error": "salah-langkah-materi",
   "suffix": "siswa"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hanya bakso = 25 − 8 = ?",
   "answer": "17",
   "hint": "Kurangi irisan.",
   "explain": "Daerahnya 17, 8, 10, 5; jumlahnya 40 dan tidak ada yang negatif.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Ada 8 siswa yang suka bakso dan soto."
}
```

## Kesalahan yang sering terjadi

- **Menghitung irisan dua kali.** Menulis daerah "futsal" = 20 lalu "paduan suara" = 15, sehingga totalnya 41 siswa padahal sebagian sama. Isi irisan dulu, lalu kurangkan dari tiap himpunan.
- **Tertukar $\in$ dan $\subset$.** $\{3\} \in B$ salah. Anggota memakai $\in$, himpunan memakai $\subset$ atau $\subseteq$.
- **Lupa daerah di luar lingkaran.** Komplemen dan $(A \cup B)'$ berada di dalam semesta tetapi di luar lingkaran. Jangan lupakan siswa yang berdiri di luar simpai.
- **Menulis anggota ganda pada gabungan.** $A \cup B = \{2, 4, 6, 12, 3, 6, 9, 12\}$ salah karena 6 dan 12 ditulis dua kali. Tiap anggota cukup ditulis sekali.
- **Mengira $\cap$ berarti "atau".** $\cap$ = dan (irisan), $\cup$ = atau (gabungan). Ingat: huruf "U" pada $\cup$ seperti "union" atau ember yang menampung semua.

## Ringkasan

- Himpunan ditulis dengan $\{\ \}$; $x \in A$ berarti $x$ anggota $A$; $n(A)$ = banyak anggota.
- $\xi$ = semesta, $\varnothing$ = himpunan kosong, $A'$ = komplemen.
- $A \cap B$ = di keduanya, $A \cup B$ = di salah satu atau keduanya.
- $A \subseteq B$: semua anggota $A$ ada di $B$; $A \subset B$: himpunan bagian sejati.
- $n(A \cup B) = n(A) + n(B) - n(A \cap B)$.
- Pada soal cerita: isi irisan dulu, lalu daerah "hanya", lalu daerah luar.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "$\\xi = \\{1, 2, 3, \\ldots, 10\\}$, $A = \\{x : x \\text{ bilangan prima}\\}$, $B = \\{1, 2, 3, 4\\}$. Tentukan $A \\cap B$, $A \\cup B$, dan $A'$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Daftar anggota $A$.",
   "options": [
    "$\\{2, 3, 5, 7\\}$",
    "$\\{1, 2, 3, 5, 7\\}$",
    "$\\{3, 5, 7, 9\\}$"
   ],
   "answer": "$\\{2, 3, 5, 7\\}$",
   "hint": "1 bukan prima; 9 = 3 × 3.",
   "explain": "$A = \\{2, 3, 5, 7\\}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$A \\cap B$ = ?",
   "options": [
    "$\\{2, 3\\}$",
    "$\\{1, 2, 3, 4, 5, 7\\}$",
    "$\\{1, 2, 3\\}$"
   ],
   "answer": "$\\{2, 3\\}$",
   "hint": "Di $A$ dan di $B$.",
   "explain": "2 dan 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$A \\cup B$ = ?",
   "options": [
    "$\\{1, 2, 3, 4, 5, 7\\}$",
    "$\\{2, 3\\}$",
    "$\\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$"
   ],
   "answer": "$\\{1, 2, 3, 4, 5, 7\\}$",
   "hint": "Di $A$ atau di $B$, tulis sekali.",
   "explain": "Ada 6 anggota.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$A'$ = ?",
   "options": [
    "$\\{1, 4, 6, 8, 9, 10\\}$",
    "$\\{5, 6, 7, 8, 9, 10\\}$",
    "$\\{6, 8, 9, 10\\}$"
   ],
   "answer": "$\\{1, 4, 6, 8, 9, 10\\}$",
   "hint": "Anggota semesta yang bukan prima.",
   "explain": "1, 4, 6, 8, 9, 10.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $A \\cap B = \\{2, 3\\}$, $A \\cup B = \\{1, 2, 3, 4, 5, 7\\}$, $A' = \\{1, 4, 6, 8, 9, 10\\}$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Diketahui $n(A) = 12$, $n(B) = 9$, dan $n(A \\cap B) = 4$. Hitung $n(A \\cup B)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$n(A) + n(B)$ = ?",
   "answer": "21",
   "hint": "12 + 9.",
   "explain": "21, tetapi irisan terhitung dua kali.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$n(A \\cup B)$ = ?",
   "answer": "17",
   "hint": "Kurangi irisan sekali.",
   "explain": "21 − 4 = 17.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$n(A \\cup B) = 17$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Benar atau salah: (a) $3 \\in \\{1, 3, 5\\}$; (b) $\\{3\\} \\in \\{1, 3, 5\\}$; (c) $\\{1, 5\\} \\subset \\{1, 3, 5\\}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "(a) $3 \\in \\{1, 3, 5\\}$?",
   "options": [
    "Benar",
    "Salah"
   ],
   "answer": "Benar",
   "hint": "Apakah 3 tertulis di dalam kurung?",
   "explain": "3 adalah anggota.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "(b) $\\{3\\} \\in \\{1, 3, 5\\}$?",
   "options": [
    "Benar",
    "Salah"
   ],
   "answer": "Salah",
   "hint": "$\\{3\\}$ itu himpunan.",
   "explain": "Seharusnya $\\{3\\} \\subset \\{1, 3, 5\\}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "(c) $\\{1, 5\\} \\subset \\{1, 3, 5\\}$?",
   "options": [
    "Benar",
    "Salah"
   ],
   "answer": "Benar",
   "hint": "Apakah 1 dan 5 ada, dan masih ada anggota lain?",
   "explain": "1 dan 5 ada, dan 3 tidak termasuk $\\{1, 5\\}$, jadi himpunan bagian sejati.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "(a) Benar, (b) Salah, (c) Benar."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Dari 30 siswa, 17 ikut klub matematika, 12 ikut klub sains, dan 4 tidak ikut keduanya. Berapa siswa yang ikut keduanya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa siswa yang ikut minimal satu klub?",
   "answer": "26",
   "hint": "Kurangi yang tidak ikut keduanya dari 30.",
   "explain": "30 − 4 = 26.",
   "error": "salah-langkah-materi",
   "suffix": "siswa"
  },
  {
   "kind": "number",
   "prompt": "$17 + 12 - x = 26$. Berapa $x$?",
   "answer": "3",
   "hint": "17 + 12 = 29.",
   "explain": "29 − 26 = 3.",
   "error": "salah-langkah-materi",
   "suffix": "siswa"
  }
 ],
 "conclusion": "Ada 3 siswa yang ikut keduanya."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Tuliskan semua himpunan bagian dari $\\{p, q\\}$. Berapa yang merupakan himpunan bagian sejati?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Semua himpunan bagian dari $\\{p, q\\}$?",
   "options": [
    "$\\varnothing$, $\\{p\\}$, $\\{q\\}$, $\\{p, q\\}$",
    "$\\{p\\}$, $\\{q\\}$",
    "$\\{p\\}$, $\\{q\\}$, $\\{p, q\\}$"
   ],
   "answer": "$\\varnothing$, $\\{p\\}$, $\\{q\\}$, $\\{p, q\\}$",
   "hint": "Jangan lupa himpunan kosong dan himpunan itu sendiri.",
   "explain": "Ada 4 himpunan bagian.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Berapa yang merupakan himpunan bagian sejati?",
   "answer": "3",
   "hint": "Himpunan bagian sejati tidak sama dengan himpunannya sendiri.",
   "explain": "Semua kecuali $\\{p, q\\}$: ada 3.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Himpunan bagiannya $\\varnothing$, $\\{p\\}$, $\\{q\\}$, $\\{p, q\\}$; yang sejati ada 3."
}
```
