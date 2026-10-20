---
id: sd4-02-faktor-kelipatan
judul: Faktor dan Kelipatan
jenjang: sd4
moe: "Primary 4 · Number and Algebra · Whole Numbers"
prasyarat: [sd3-03-perkalian-6-7-8-9, sd3-05-pembagian-bersusun]
durasi_menit: 35
---

## Kenapa belajar ini?

Ibu ingin membagi kue ke beberapa kotak tanpa sisa. Dua lampu hias berkedip dengan irama berbeda, kapan menyala bersamaan? Faktor dan kelipatan membantu menjawab pertanyaan seperti ini dengan cepat.

## Analogi

Bayangkan kamu menata **kue di loyang** dalam baris-baris yang rapi. Setiap baris harus **penuh**, tidak boleh ada baris yang kurang.

- Kamu punya **12 kue**. Bisakah ditata 3 kue per baris? Bisa: 4 baris penuh. Jadi **3 adalah faktor dari 12**.

```visual
{"type": "objects", "item": "kue", "count": 12, "group": 3, "caption": "12 kue, 3 per baris: 4 baris penuh"}
```

- Bisakah 5 kue per baris? Tidak bisa, karena ada 2 kue yang tidak membentuk baris penuh. Jadi **5 bukan faktor dari 12**.

```visual
{"type": "objects", "item": "kue", "count": 12, "group": 5, "caption": "12 kue, 5 per baris: 2 baris penuh dan 2 kue tersisa"}
```

Sekarang dibalik. Kamu selalu menata **4 kue per baris**. Satu baris berisi 4 kue, dua baris 8 kue, tiga baris 12 kue. Banyak kue 4, 8, 12, ... disebut **kelipatan 4**.

```anim
{"type": "benda", "op": "×", "a": 3, "b": 4, "item": "kue", "title": "3 baris, masing-masing 4 kue"}
```

## Konsep

### Faktor

**Faktor** sebuah bilangan adalah bilangan yang membagi bilangan itu **tanpa sisa**.

Contoh: $12 \div 3 = 4$ tanpa sisa, jadi 3 adalah faktor dari 12.

Semua faktor 12 bisa dicari dengan **pasangan perkalian**, seperti semua cara menata 12 kue di loyang:

```visual
{"type": "table", "head": ["Kue per baris", "Banyak baris", "Perkalian"], "rows": [["1", "12", "1 × 12"], ["2", "6", "2 × 6"], ["3", "4", "3 × 4"]], "caption": "Pasangan faktor 12"}
```

Faktor dari 12: 1, 2, 3, 4, 6, 12.

Catatan penting:

- 1 adalah faktor dari setiap bilangan.
- Setiap bilangan adalah faktor dari dirinya sendiri.

### Kelipatan

**Kelipatan** sebuah bilangan adalah hasil kali bilangan itu dengan 1, 2, 3, 4, dan seterusnya.

```anim
{"type": "garis", "from": 0, "to": 24, "start": 0, "jumps": [4, 4, 4, 4, 4, 4], "title": "Kelipatan 4: lompat 4 setiap kali"}
```

Kelipatan 4: 4, 8, 12, 16, 20, 24, ...

Daftar kelipatan **tidak pernah berhenti**. Daftar faktor selalu berhenti.

### Hubungan faktor dan kelipatan

Keduanya adalah dua sisi dari satu perkalian. Karena $3 \times 4 = 12$:

- 3 dan 4 adalah **faktor** dari 12.
- 12 adalah **kelipatan** dari 3, dan juga kelipatan dari 4.

### Faktor persekutuan

**Faktor persekutuan** dua bilangan adalah faktor yang dimiliki **keduanya**. Kata "persekutuan" artinya "milik bersama".

### Kelipatan persekutuan

**Kelipatan persekutuan** dua bilangan adalah bilangan yang ada di **kedua** daftar kelipatan.

```visual
{"type": "numberLine", "from": 0, "to": 24, "step": 2, "marks": [12, 24], "jumps": [{"from": 0, "to": 4}, {"from": 4, "to": 8}, {"from": 8, "to": 12}, {"from": 12, "to": 16}, {"from": 16, "to": 20}, {"from": 20, "to": 24}], "caption": "Lompatan 4: 4, 8, 12, 16, 20, 24"}
```

```visual
{"type": "numberLine", "from": 0, "to": 24, "step": 2, "marks": [12, 24], "jumps": [{"from": 0, "to": 6}, {"from": 6, "to": 12}, {"from": 12, "to": 18}, {"from": 18, "to": 24}], "caption": "Lompatan 6: 6, 12, 18, 24. Keduanya mendarat di 12 dan 24: kelipatan persekutuan"}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Apakah faktor atau bukan?

```soal
{
 "title": "Contoh 1",
 "text": "Apakah 7 faktor dari 91? Apakah 9 faktor dari 84?",
 "steps": [
  {
   "kind": "longdiv",
   "dividend": 91,
   "divisor": 7,
   "prompt": "Langkah 1: Bagi 91 dengan 7 memakai porogapit.",
   "hint": "7 muat berapa kali di 9?",
   "explain": "1, 7, sisa 2, turunkan 1 jadi 21, 3, sisa 0. Jadi 91 ÷ 7 = 13."
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Sisanya 0. Apakah 7 faktor dari 91?",
   "options": [
    "Ya",
    "Bukan"
   ],
   "answer": "Ya",
   "hint": "Faktor membagi tanpa sisa.",
   "explain": "Sisa 0, jadi 7 faktor dari 91: 13 baris penuh.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Bagi 84 dengan 9. 9 × 9 = 81. Berapa sisanya?",
   "answer": "3",
   "hint": "84 − 81.",
   "explain": "84 ÷ 9 = 9 sisa 3.",
   "error": "salah-tafsir-sisa"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Apakah 9 faktor dari 84?",
   "options": [
    "Ya",
    "Bukan"
   ],
   "answer": "Bukan",
   "hint": "Lihat sisanya. Apakah 0?",
   "explain": "Sisa 3, bukan 0. Jadi 9 bukan faktor dari 84.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 7 × 13 = ?",
   "answer": "91",
   "hint": "7 × 10 + 7 × 3.",
   "explain": "70 + 21 = 91. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "7 adalah faktor dari 91, sedangkan 9 bukan faktor dari 84."
}
```

### Contoh 2: Mencari semua faktor

```soal
{
 "title": "Contoh 2",
 "text": "Tulis semua faktor dari 36.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Mulai dari 1. 1 × ? = 36",
   "answer": "36",
   "hint": "1 dikali berapa hasilnya 36?",
   "explain": "Pasangan pertama: 1 dan 36.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Coba 2. 2 × ? = 36",
   "answer": "18",
   "hint": "Setengah dari 36.",
   "explain": "Pasangan: 2 dan 18.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Coba 3. 3 × ? = 36",
   "answer": "12",
   "hint": "36 ÷ 3.",
   "explain": "Pasangan: 3 dan 12.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Coba 4. 4 × ? = 36",
   "answer": "9",
   "hint": "36 ÷ 4.",
   "explain": "Pasangan: 4 dan 9.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Coba 5. Apakah 5 faktor dari 36?",
   "options": [
    "Bukan, sisa 1",
    "Ya, 5 × 7 = 36"
   ],
   "answer": "Bukan, sisa 1",
   "hint": "5 × 7 = 35.",
   "explain": "36 ÷ 5 = 7 sisa 1, jadi 5 bukan faktor.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 6: Coba 6. 6 × ? = 36",
   "answer": "6",
   "hint": "6 dikali dirinya sendiri.",
   "explain": "6 × 6 = 36. Angka 6 ditulis sekali saja.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 7: Berhenti. Mana daftar faktor 36 yang lengkap?",
   "options": [
    "1, 2, 3, 4, 6, 9, 12, 18, 36",
    "1, 2, 3, 4, 6, 12, 18, 36",
    "2, 3, 4, 6, 9, 12, 18",
    "1, 2, 3, 4, 5, 6, 9, 12, 18, 36"
   ],
   "answer": "1, 2, 3, 4, 6, 9, 12, 18, 36",
   "hint": "Kumpulkan semua pasangan dari langkah 1 sampai 6.",
   "explain": "Pasangan 1–36, 2–18, 3–12, 4–9, 6–6.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Faktor 36: 1, 2, 3, 4, 6, 9, 12, 18, 36."
}
```

### Contoh 3: Faktor persekutuan dalam soal cerita

```soal
{
 "title": "Contoh 3",
 "text": "Bu Siti punya 18 roti dan 24 kue. Ia ingin membaginya ke beberapa kantong. Setiap kantong harus berisi roti sama banyak dan kue sama banyak, tanpa sisa. Berapa saja banyak kantong yang mungkin? Berapa paling banyak?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Apa yang dicari?",
   "options": [
    "Faktor persekutuan 18 dan 24",
    "Kelipatan persekutuan 18 dan 24",
    "18 + 24"
   ],
   "answer": "Faktor persekutuan 18 dan 24",
   "hint": "Banyak kantong harus membagi 18 dan 24 tanpa sisa.",
   "explain": "Yang membagi keduanya tanpa sisa adalah faktor persekutuan.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Tulis faktor 18.",
   "options": [
    "1, 2, 3, 6, 9, 18",
    "18, 36, 54, 72",
    "2, 3, 6, 9"
   ],
   "answer": "1, 2, 3, 6, 9, 18",
   "hint": "Pasangan: 1 × 18, 2 × 9, 3 × 6.",
   "explain": "Faktor 18: 1, 2, 3, 6, 9, 18.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Tulis faktor 24.",
   "options": [
    "1, 2, 3, 4, 6, 8, 12, 24",
    "1, 2, 3, 4, 6, 12, 24",
    "24, 48, 72"
   ],
   "answer": "1, 2, 3, 4, 6, 8, 12, 24",
   "hint": "Pasangan: 1 × 24, 2 × 12, 3 × 8, 4 × 6.",
   "explain": "Faktor 24: 1, 2, 3, 4, 6, 8, 12, 24.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Faktor yang sama adalah 1, 2, 3, 6. Berapa paling banyak kantong?",
   "answer": "6",
   "hint": "Pilih faktor persekutuan yang paling besar.",
   "explain": "Paling banyak 6 kantong.",
   "error": "salah-langkah-materi",
   "suffix": "kantong"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Dengan 6 kantong, berapa roti per kantong?",
   "answer": "3",
   "hint": "18 ÷ 6.",
   "explain": "18 ÷ 6 = 3 roti.",
   "error": "salah-fakta-bagi",
   "suffix": "roti"
  },
  {
   "kind": "number",
   "prompt": "Langkah 6: Berapa kue per kantong?",
   "answer": "4",
   "hint": "24 ÷ 6.",
   "explain": "24 ÷ 6 = 4 kue. Cek: 6 × 3 = 18 dan 6 × 4 = 24, tanpa sisa.",
   "error": "salah-fakta-bagi",
   "suffix": "kue"
  }
 ],
 "conclusion": "Banyak kantong bisa 1, 2, 3, atau 6. Paling banyak 6 kantong, masing-masing 3 roti dan 4 kue."
}
```

### Contoh 4: Kelipatan persekutuan dalam soal cerita

```soal
{
 "title": "Contoh 4",
 "text": "Lampu merah berkedip setiap 4 detik. Lampu hijau berkedip setiap 6 detik. Keduanya baru saja berkedip bersama. Setelah berapa detik keduanya berkedip bersama lagi? Kapan saja dalam 36 detik pertama?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Lampu merah berkedip pada detik ke berapa saja?",
   "options": [
    "Kelipatan 4",
    "Faktor 4",
    "Kelipatan 6"
   ],
   "answer": "Kelipatan 4",
   "hint": "Detik ke-4, 8, 12, ...",
   "explain": "Lampu merah berkedip pada kelipatan 4, lampu hijau pada kelipatan 6.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Tulis kelipatan 4 sampai 36.",
   "options": [
    "4, 8, 12, 16, 20, 24, 28, 32, 36",
    "1, 2, 4",
    "4, 8, 12, 16, 24, 32, 36"
   ],
   "answer": "4, 8, 12, 16, 20, 24, 28, 32, 36",
   "hint": "Lompat 4 terus dari 4.",
   "explain": "Ada 9 kelipatan 4 sampai 36.",
   "error": "salah-hitung-loncat"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Tulis kelipatan 6 sampai 36.",
   "options": [
    "6, 12, 18, 24, 30, 36",
    "1, 2, 3, 6",
    "6, 12, 18, 24, 36"
   ],
   "answer": "6, 12, 18, 24, 30, 36",
   "hint": "Lompat 6 terus dari 6.",
   "explain": "Ada 6 kelipatan 6 sampai 36.",
   "error": "salah-hitung-loncat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Bilangan pertama yang ada di kedua daftar?",
   "answer": "12",
   "hint": "Cari angka terkecil yang muncul di dua daftar.",
   "explain": "12 ada di kedua daftar, dan 4 serta 8 tidak ada di daftar hijau.",
   "error": "salah-langkah-materi",
   "suffix": "detik"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: kapan saja keduanya berkedip bersama dalam 36 detik?",
   "options": [
    "Detik ke-12, 24, 36",
    "Detik ke-12 saja",
    "Detik ke-24 dan 36"
   ],
   "answer": "Detik ke-12, 24, 36",
   "hint": "Kelipatan persekutuan ada lebih dari satu.",
   "explain": "12, 24, 36 ada di kedua daftar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Setelah 12 detik. Dalam 36 detik pertama: detik ke-12, 24, dan 36.",
 "visual": {
  "type": "numberLine",
  "from": 0,
  "to": 36,
  "step": 2
 }
}
```

## Kesalahan yang sering terjadi

- **Tertukar faktor dan kelipatan.** Menulis "faktor 4 adalah 4, 8, 12". Itu kelipatan. Ingat loyang kue: faktor adalah banyak kue **per baris** yang pas, jadi tidak lebih besar dari bilangannya. Faktor 4 adalah 1, 2, 4.
- **Lupa 1 dan bilangan itu sendiri.** Menulis faktor 12 hanya 2, 3, 4, 6. Padahal $1 \times 12 = 12$, jadi 1 dan 12 juga faktor.
- **Ada faktor yang terlewat.** Menulis faktor 36 tanpa 4 dan 9. Cari dengan pasangan, mulai dari 1, dan coba setiap bilangan berurutan.
- **Menganggap semua bilangan ganjil sulit dibagi.** Menyangka 91 tidak punya faktor selain 1 dan 91. Padahal $7 \times 13 = 91$. Selalu periksa dengan membagi.
- **Mengira kelipatan persekutuan hanya satu.** Kelipatan persekutuan 4 dan 6 ada banyak: 12, 24, 36, 48, dan seterusnya.

## Ringkasan

- **Faktor**: bilangan yang membagi tanpa sisa. Cari dengan pasangan perkalian.
- **Kelipatan**: hasil kali bilangan dengan 1, 2, 3, dan seterusnya. Daftarnya tidak berhenti.
- Jika $a \times b = c$, maka $a$ dan $b$ faktor dari $c$, dan $c$ kelipatan dari $a$ dan $b$.
- **Faktor persekutuan**: faktor yang dimiliki kedua bilangan.
- **Kelipatan persekutuan**: bilangan yang ada di kedua daftar kelipatan.
- Untuk memeriksa apakah suatu bilangan faktor, bagi dan lihat apakah sisanya 0.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tulis semua faktor dari 28.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 2 × ? = 28",
   "answer": "14",
   "hint": "Setengah dari 28.",
   "explain": "Pasangan 2 dan 14.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 4 × ? = 28",
   "answer": "7",
   "hint": "28 ÷ 4.",
   "explain": "Pasangan 4 dan 7.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Mana daftar faktor 28 yang lengkap?",
   "options": [
    "1, 2, 4, 7, 14, 28",
    "2, 4, 7, 14",
    "28, 56, 84",
    "1, 2, 3, 4, 7, 14, 28"
   ],
   "answer": "1, 2, 4, 7, 14, 28",
   "hint": "Jangan lupa 1 dan 28. Apakah 3 membagi 28?",
   "explain": "Pasangan 1 × 28, 2 × 14, 4 × 7.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Faktor 28: 1, 2, 4, 7, 14, 28."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Apakah 6 faktor dari 74? Jelaskan.",
 "steps": [
  {
   "kind": "longdiv",
   "dividend": 74,
   "divisor": 6,
   "prompt": "Langkah 1: Bagi 74 dengan 6.",
   "hint": "6 muat berapa kali di 7?",
   "explain": "1, 6, sisa 1, turunkan 4 jadi 14, 2, 12, sisa 2."
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Berapa sisanya?",
   "answer": "2",
   "hint": "Angka paling bawah.",
   "explain": "74 ÷ 6 = 12 sisa 2.",
   "error": "salah-tafsir-sisa"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Jadi, apakah 6 faktor dari 74?",
   "options": [
    "Bukan, karena sisanya bukan 0",
    "Ya, karena 74 genap"
   ],
   "answer": "Bukan, karena sisanya bukan 0",
   "hint": "Faktor harus membagi tanpa sisa.",
   "explain": "Sisa 2, jadi 6 bukan faktor dari 74.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "6 bukan faktor dari 74, karena 74 ÷ 6 = 12 sisa 2."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Tulis lima kelipatan pertama dari 7.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 7 × 3 = ?",
   "answer": "21",
   "hint": "7 + 7 + 7.",
   "explain": "7 × 3 = 21.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 7 × 5 = ?",
   "answer": "35",
   "hint": "7 × 4 = 28, tambah 7.",
   "explain": "7 × 5 = 35.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Mana lima kelipatan pertama 7?",
   "options": [
    "7, 14, 21, 28, 35",
    "1, 7",
    "14, 21, 28, 35, 42",
    "7, 14, 21, 27, 35"
   ],
   "answer": "7, 14, 21, 28, 35",
   "hint": "Kalikan 7 dengan 1, 2, 3, 4, 5.",
   "explain": "7, 14, 21, 28, 35.",
   "error": "salah-hitung-loncat"
  }
 ],
 "conclusion": "Lima kelipatan pertama 7: 7, 14, 21, 28, 35."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Tulis semua faktor persekutuan dari 16 dan 40.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Faktor 16?",
   "options": [
    "1, 2, 4, 8, 16",
    "2, 4, 8",
    "16, 32, 48"
   ],
   "answer": "1, 2, 4, 8, 16",
   "hint": "Pasangan: 1 × 16, 2 × 8, 4 × 4.",
   "explain": "Faktor 16: 1, 2, 4, 8, 16.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Faktor 40?",
   "options": [
    "1, 2, 4, 5, 8, 10, 20, 40",
    "1, 2, 4, 8, 10, 20, 40",
    "40, 80, 120"
   ],
   "answer": "1, 2, 4, 5, 8, 10, 20, 40",
   "hint": "Pasangan: 1 × 40, 2 × 20, 4 × 10, 5 × 8.",
   "explain": "Faktor 40: 1, 2, 4, 5, 8, 10, 20, 40.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Faktor persekutuannya?",
   "options": [
    "1, 2, 4, 8",
    "1, 2, 4, 8, 16",
    "2, 4, 8",
    "8"
   ],
   "answer": "1, 2, 4, 8",
   "hint": "Ambil yang ada di kedua daftar.",
   "explain": "1, 2, 4, 8 ada di keduanya. 16 bukan faktor 40.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Faktor persekutuan 16 dan 40: 1, 2, 4, 8."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Bus A berangkat dari terminal setiap 6 menit. Bus B setiap 8 menit. Keduanya berangkat bersama pukul 07.00. Pukul berapa mereka berangkat bersama lagi untuk pertama kali?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Yang dicari adalah ...",
   "options": [
    "Kelipatan persekutuan pertama 6 dan 8",
    "Faktor persekutuan 6 dan 8",
    "6 + 8"
   ],
   "answer": "Kelipatan persekutuan pertama 6 dan 8",
   "hint": "Bus berangkat pada menit ke-6, 12, ... dan ke-8, 16, ...",
   "explain": "Kita cari kelipatan persekutuan terkecil.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Bilangan terkecil yang ada di kelipatan 6 dan kelipatan 8?",
   "answer": "24",
   "hint": "Kelipatan 6: 6, 12, 18, 24. Kelipatan 8: 8, 16, 24.",
   "explain": "24 muncul pertama kali di kedua daftar.",
   "error": "salah-langkah-materi",
   "suffix": "menit"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Pukul berapa?",
   "options": [
    "07.24",
    "07.48",
    "07.14"
   ],
   "answer": "07.24",
   "hint": "07.00 ditambah 24 menit.",
   "explain": "07.00 + 24 menit = 07.24.",
   "error": "salah-hitung-waktu"
  }
 ],
 "conclusion": "Mereka berangkat bersama lagi pukul 07.24."
}
```
