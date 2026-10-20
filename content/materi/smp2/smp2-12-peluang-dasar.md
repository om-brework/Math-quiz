---
id: smp2-12-peluang-dasar
judul: Peluang Dasar
jenjang: smp2
moe: "Secondary 2 · Statistics and Probability · S2 Probability"
prasyarat: [smp1-04-perbandingan, smp1-05-persentase]
durasi_menit: 40
---

## Kenapa belajar ini?

"Besok kemungkinan hujan 70%." "Peluang menang undian kecil sekali." Kita sering bicara tentang kemungkinan, tetapi dengan kata-kata yang kabur. Peluang membuat kemungkinan itu menjadi **angka**, sehingga bisa dibandingkan dan dihitung dengan tepat.

## Analogi

Bayangkan **kocokan arisan** ibu-ibu di kampungmu. Setiap peserta menulis namanya di gulungan kertas kecil. Semua gulungan dimasukkan ke gelas, dikocok, lalu **satu** gulungan jatuh keluar.

- Semua gulungan di dalam gelas adalah **semua hasil yang mungkin**.
- Karena dikocok dengan adil, setiap gulungan punya kesempatan yang **sama** untuk keluar.
- Kalau kita ingin tahu kemungkinan "yang keluar nama perempuan", kita tinggal menghitung: ada berapa gulungan bernama perempuan, dari seluruh gulungan di gelas.

Seluruh materi ini adalah variasi dari kocokan arisan. Dadu, koin, kartu, dan kelereng semuanya bisa dibayangkan sebagai gulungan kertas di gelas.

```anim
{"type": "pecahan", "parts": 10, "shaded": 4, "shape": "batang", "name": "4/10", "title": "10 gulungan, 4 bernama perempuan"}
```

## Konsep

### Percobaan, hasil, dan ruang sampel

- **Percobaan**: kegiatan yang hasilnya tidak pasti, misalnya melempar dadu atau mengocok arisan.
- **Hasil** (titik sampel): satu kemungkinan yang bisa terjadi, misalnya mata dadu 4.
- **Ruang sampel** $S$: himpunan **semua** hasil yang mungkin. Untuk satu dadu, $S = \{1, 2, 3, 4, 5, 6\}$, jadi $n(S) = 6$.
- **Kejadian** $A$: sekumpulan hasil yang kita perhatikan, misalnya "mata dadu genap" $= \{2, 4, 6\}$, jadi $n(A) = 3$.

Pada analogi arisan, ruang sampel adalah seluruh gulungan di gelas, dan kejadian adalah gulungan yang "kita harapkan".

```visual
{"type": "table", "head": ["Ruang sampel S", "Kejadian A: genap", "n(A)", "n(S)"], "rows": [["1, 2, 3, 4, 5, 6", "2, 4, 6", "3", "6"]], "caption": "Satu dadu: kejadian adalah bagian dari ruang sampel."}
```visual
{"type": "numberLine", "from": 0, "to": 1, "step": 0.25, "marks": [0, 0.5, 1], "caption": "0 mustahil, 0,25 kecil, 0,5 sama mungkin, 0,75 besar, 1 pasti."}
```
  mustahil      kecil        sama mungkin       besar        pasti
     |-------------|-------------|-------------|-------------|
     0            1/4           1/2           3/4            1
```

Peluang boleh ditulis sebagai pecahan, desimal, atau persen: $\frac{1}{4} = 0{,}25 = 25\%$.

### Peluang kejadian tidak terjadi

Gulungan di gelas hanya ada dua jenis: yang cocok dengan $A$ dan yang tidak. Jadi

$$P(\text{bukan } A) = \frac{n(S) - n(A)}{n(S)} = 1 - P(A)$$

```anim
{"type": "pecahan", "parts": 8, "shaded": 3, "shape": "lingkaran", "name": "3/8", "title": "3 dari 8 cocok dengan A, sisanya 5 dari 8 bukan A"}
```

## Contoh langkah demi langkah

Urutan berpikir: **tulis ruang sampel → tulis hasil yang termasuk kejadian → bagi → cek** (nilai di antara 0 dan 1, dan masuk akal).

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Dadu

```soal
{
 "title": "Dadu",
 "text": "Sebuah dadu seimbang dilempar sekali. Berapa peluang muncul bilangan prima?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Banyak hasil dalam ruang sampel, $n(S)$?",
   "answer": "6",
   "hint": "Mata dadu 1 sampai 6.",
   "explain": "n(S) = 6.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Kejadian bilangan prima?",
   "options": [
    "$\\{2, 3, 5\\}$",
    "$\\{1, 2, 3, 5\\}$",
    "$\\{2, 4, 6\\}$",
    "$\\{1, 3, 5\\}$"
   ],
   "answer": "$\\{2, 3, 5\\}$",
   "hint": "Bilangan prima punya tepat dua faktor. Apakah 1 termasuk?",
   "explain": "1 bukan prima. n(A) = 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: $P(A)$ dalam bentuk paling sederhana?",
   "answer": {
    "num": 1,
    "den": 2
   },
   "hint": "Bagi n(A) dengan n(S), lalu sederhanakan.",
   "explain": "$\\frac{3}{6} = \\frac{1}{2}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Cek jawaban: peluang bukan prima?",
   "answer": {
    "num": 1,
    "den": 2
   },
   "hint": "Bukan prima: {1, 4, 6}.",
   "explain": "$\\frac{3}{6} = \\frac{1}{2}$, dan $\\frac{1}{2} + \\frac{1}{2} = 1$. Benar.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "Peluangnya $\\frac{1}{2}$."
}
```

### Contoh 2: Kantong kelereng

```soal
{
 "title": "Kantong kelereng",
 "text": "Kantong berisi 5 kelereng merah, 3 biru, dan 2 hijau. Satu kelereng diambil acak. Tentukan peluang terambil (a) biru, (b) kuning, (c) bukan hijau.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: $n(S)$?",
   "answer": "10",
   "hint": "Jumlahkan semua kelereng.",
   "explain": "5 + 3 + 2 = 10.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: $P(\\text{biru})$?",
   "answer": {
    "num": 3,
    "den": 10
   },
   "hint": "Ada 3 kelereng biru dari 10.",
   "explain": "$\\frac{3}{10}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $P(\\text{kuning})$?",
   "answer": "0",
   "hint": "Ada berapa kelereng kuning?",
   "explain": "Tidak ada, jadi peluangnya 0 (mustahil).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: $P(\\text{bukan hijau})$ paling sederhana?",
   "answer": {
    "num": 4,
    "den": 5
   },
   "hint": "$1 - P(\\text{hijau})$, dengan $P(\\text{hijau}) = \\frac{2}{10}$.",
   "explain": "$1 - \\frac{2}{10} = \\frac{8}{10} = \\frac{4}{5}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: banyak kelereng merah atau biru?",
   "answer": "8",
   "hint": "5 + 3.",
   "explain": "8 dari 10, yaitu $\\frac{4}{5}$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "(a) $\\frac{3}{10}$, (b) $0$, (c) $\\frac{4}{5}$.",
 "visual": {
  "type": "table",
  "head": [
   "Warna",
   "Merah",
   "Biru",
   "Hijau"
  ],
  "rows": [
   [
    "Banyak",
    "5",
    "3",
    "2"
   ]
  ]
 }
}
```

### Contoh 3: Kartu bernomor, hati-hati menghitung dua kali

```soal
{
 "title": "Kartu bernomor, hati-hati menghitung dua kali",
 "text": "Dua puluh kartu bernomor 1 sampai 20 dikocok, lalu diambil satu. Tentukan peluang terambil (a) kelipatan 3, (b) kelipatan 3 atau kelipatan 5.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 2: Banyak kelipatan 3 dari 1 sampai 20?",
   "answer": "6",
   "hint": "3, 6, 9, ...",
   "explain": "{3, 6, 9, 12, 15, 18}: ada 6.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2 (lanjutan): $P(\\text{kelipatan 3})$ paling sederhana?",
   "answer": {
    "num": 3,
    "den": 10
   },
   "hint": "6 dari 20.",
   "explain": "$\\frac{6}{20} = \\frac{3}{10}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Kartu mana yang kelipatan 3 sekaligus kelipatan 5?",
   "answer": "15",
   "hint": "Cek kelipatan 5: 5, 10, 15, 20.",
   "explain": "Kartu 15 muncul di kedua daftar.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3 (lanjutan): Banyak kartu kelipatan 3 atau 5 (tanpa dobel)?",
   "answer": "9",
   "hint": "6 + 4, lalu kurangi kartu yang terhitung dua kali.",
   "explain": "6 + 4 − 1 = 9.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: $P(\\text{kelipatan 3 atau 5})$?",
   "answer": {
    "num": 9,
    "den": 20
   },
   "hint": "9 dari 20.",
   "explain": "$\\frac{9}{20}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "(a) $\\frac{3}{10}$, (b) $\\frac{9}{20}$."
}
```

### Contoh 4: Soal cerita arisan

```soal
{
 "title": "Soal cerita arisan",
 "text": "Arisan RT diikuti 12 orang: 5 laki-laki dan 7 perempuan. Nama yang sudah keluar tidak dimasukkan lagi. (a) Berapa peluang pemenang bulan pertama perempuan? (b) Bulan pertama dimenangkan Pak Budi. Berapa peluang pemenang bulan kedua perempuan?",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Peluang perempuan bulan pertama?",
   "answer": {
    "num": 7,
    "den": 12
   },
   "hint": "7 gulungan perempuan dari 12.",
   "explain": "$\\frac{7}{12}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Sisa gulungan di gelas setelah bulan pertama?",
   "answer": "11",
   "hint": "Gulungan Pak Budi tidak dikembalikan.",
   "explain": "12 − 1 = 11: 4 laki-laki dan 7 perempuan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Peluang perempuan bulan kedua?",
   "answer": {
    "num": 7,
    "den": 11
   },
   "hint": "Perempuan tetap 7, penyebutnya berubah.",
   "explain": "$\\frac{7}{11}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: apakah peluang bulan kedua lebih besar?",
   "options": [
    "Ya, gelasnya berkurang satu gulungan laki-laki",
    "Tidak, harus sama",
    "Tidak, harus lebih kecil"
   ],
   "answer": "Ya, gelasnya berkurang satu gulungan laki-laki",
   "hint": "Bandingkan $\\frac{7}{11} \\approx 0{,}64$ dengan $\\frac{7}{12} \\approx 0{,}58$.",
   "explain": "Perempuan tetap 7 tetapi total berkurang, jadi peluangnya naik.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "(a) $\\frac{7}{12}$, (b) $\\frac{7}{11}$."
}
```

## Kesalahan yang sering terjadi

- **Peluang lebih dari 1.** Menulis peluang biru sebagai $\frac{10}{3}$. Pembilang adalah hasil yang diharapkan, penyebut adalah semua hasil. Jawaban di atas 1 pasti salah.
- **Menganggap 1 bilangan prima.** Lalu menjawab $\frac{4}{6}$ pada contoh 1. Bilangan prima punya tepat dua faktor; 1 hanya punya satu.
- **Menghitung dua kali.** Pada "kelipatan 3 atau 5", menjawab $\frac{10}{20}$ karena 15 dihitung dua kali. Daftar semua hasil dan pastikan setiap kartu hanya muncul sekali.
- **Tidak memperbarui ruang sampel.** Pada arisan bulan kedua, tetap memakai penyebut 12. Gulungan yang sudah keluar tidak ada lagi di gelas.
- **Mengira hasil yang mungkin selalu sama mungkin.** "Besok hujan atau tidak, jadi peluangnya $\frac{1}{2}$." Rumus $\frac{n(A)}{n(S)}$ hanya berlaku jika setiap hasil sama mungkin, seperti gulungan yang dikocok adil.

## Ringkasan

- Ruang sampel $S$ = semua hasil yang mungkin; kejadian $A$ = hasil yang diperhatikan.
- Jika setiap hasil sama mungkin: $P(A) = \frac{n(A)}{n(S)}$.
- $0 \le P(A) \le 1$; 0 berarti mustahil, 1 berarti pasti.
- $P(\text{bukan } A) = 1 - P(A)$.
- Langkah: tulis ruang sampel → daftar hasil yang termasuk kejadian (tanpa dobel) → bagi → cek.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Sebuah koin seimbang dilempar sekali. Berapa peluang muncul sisi angka?",
 "steps": [
  {
   "kind": "number",
   "prompt": "$n(S)$?",
   "answer": "2",
   "hint": "Sisi koin: angka dan gambar.",
   "explain": "n(S) = 2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "$P(\\text{angka})$?",
   "answer": {
    "num": 1,
    "den": 2
   },
   "hint": "1 sisi dari 2.",
   "explain": "$\\frac{1}{2}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "$\\frac{1}{2}$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Sebuah dadu seimbang dilempar sekali. Berapa peluang muncul mata dadu lebih dari 4?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Banyak hasil yang lebih dari 4?",
   "answer": "2",
   "hint": "Hanya 5 dan 6; 4 tidak termasuk.",
   "explain": "{5, 6}: ada 2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Peluangnya (paling sederhana)?",
   "answer": {
    "num": 1,
    "den": 3
   },
   "hint": "2 dari 6.",
   "explain": "$\\frac{2}{6} = \\frac{1}{3}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "$\\frac{1}{3}$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Setiap huruf kata MATEMATIKA ditulis di kartu terpisah, lalu satu kartu diambil acak. Berapa peluang terambil huruf A?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Banyak kartu?",
   "answer": "10",
   "hint": "Hitung semua huruf, termasuk yang berulang.",
   "explain": "M-A-T-E-M-A-T-I-K-A: 10 huruf.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Banyak kartu huruf A?",
   "answer": "3",
   "hint": "Hitung huruf A satu per satu.",
   "explain": "Ada 3 huruf A.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Peluangnya?",
   "answer": {
    "num": 3,
    "den": 10
   },
   "hint": "3 dari 10.",
   "explain": "$\\frac{3}{10}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "$\\frac{3}{10}$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Kotak berisi 4 bola merah dan 6 bola putih. Satu bola diambil acak. Tentukan peluang terambil bola merah dan peluang terambil bola hitam.",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "$P(\\text{merah})$ paling sederhana?",
   "answer": {
    "num": 2,
    "den": 5
   },
   "hint": "4 dari 10.",
   "explain": "$\\frac{4}{10} = \\frac{2}{5}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "$P(\\text{hitam})$?",
   "answer": "0",
   "hint": "Ada bola hitam?",
   "explain": "Tidak ada bola hitam, jadi mustahil: 0.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Merah $\\frac{2}{5}$, hitam $0$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Kotak berisi 30 donat rasa cokelat, keju, dan stroberi. Ada 12 donat cokelat, dan peluang mengambil donat keju adalah $\\frac{1}{3}$. Berapa peluang mengambil donat stroberi?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Banyak donat keju?",
   "answer": "10",
   "hint": "$\\frac{1}{3} \\times 30$.",
   "explain": "10 donat keju.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Banyak donat stroberi?",
   "answer": "8",
   "hint": "30 − 12 − 10.",
   "explain": "8 donat stroberi.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Peluang stroberi (paling sederhana)?",
   "answer": {
    "num": 4,
    "den": 15
   },
   "hint": "8 dari 30, lalu sederhanakan.",
   "explain": "$\\frac{8}{30} = \\frac{4}{15}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "$\\frac{4}{15}$."
}
```
