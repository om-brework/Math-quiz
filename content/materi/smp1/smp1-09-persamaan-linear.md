---
id: smp1-09-persamaan-linear
judul: Persamaan Linear Satu Variabel
jenjang: smp1
moe: "Secondary 1 · Number and Algebra · N7 Equations and inequalities"
prasyarat: [smp1-07-bentuk-aljabar]
durasi_menit: 50
---

## Kenapa belajar ini?

"Harga buku Rp3.000 lebih mahal dari pensil. Empat buku dan tiga pensil harganya Rp40.000. Berapa harga pensil?" Soal seperti ini sulit ditebak, tetapi mudah diselesaikan dengan persamaan. Persamaan adalah alat untuk mencari bilangan yang belum diketahui secara teratur, bukan menebak.

## Analogi

Bayangkan **timbangan dua lengan** di pasar. Persamaan adalah timbangan yang **seimbang**: isi piring kiri sama berat dengan isi piring kanan.

Di piring ada **kantong tertutup** berisi $x$ gram, dan ada **anak timbangan** biasa. Tugas kita: membuat satu kantong $x$ berdiri sendiri di satu piring.

Aturan emasnya: **apa pun yang kamu lakukan pada satu piring, lakukan juga pada piring lain.** Mengambil 5 gram dari kiri? Ambil juga 5 gram dari kanan. Membagi isi kiri menjadi 3 bagian sama? Bagi juga isi kanan menjadi 3. Dengan begitu timbangan tetap seimbang.

```anim
{"type": "persamaan", "title": "Timbangan 3x + 5 = 20", "baris": [{"tex": "3x + 5 = 20", "say": "Kiri: 3 kantong dan 5 gram. Kanan: 20 gram. Seimbang."}, {"tex": "3x + 5 - 5 = 20 - 5", "say": "Ambil 5 gram dari kedua piring.", "op": "kedua ruas − 5"}, {"tex": "3x = 15", "say": "Tinggal 3 kantong di kiri dan 15 gram di kanan."}, {"tex": "x = 5", "say": "Bagi kedua piring menjadi 3 bagian sama. Satu kantong 5 gram.", "op": "kedua ruas ÷ 3"}]}
```

## Konsep

### Arti persamaan

**Persamaan** adalah kalimat matematika dengan tanda $=$ yang menyatakan dua bentuk bernilai sama. Contoh: $3x + 5 = 20$.

- $x$ disebut **variabel** atau bilangan yang belum diketahui.
- **Penyelesaian** adalah nilai $x$ yang membuat kedua ruas benar-benar sama.
- **Persamaan linear** adalah persamaan yang pangkat tertinggi variabelnya 1. Tidak ada $x^2$ atau $\frac{1}{x}$ setelah disederhanakan.

Bedakan dengan **bentuk aljabar** seperti $3x + 5$, yang tidak punya tanda $=$. Bentuk aljabar disederhanakan; persamaan diselesaikan.

### Operasi yang menjaga keseimbangan

Kita boleh melakukan ini pada **kedua ruas sekaligus**:

1. Menambah atau mengurangi bilangan atau suku yang sama.
2. Mengalikan dengan bilangan yang sama (bukan nol).
3. Membagi dengan bilangan yang sama (bukan nol).

Kenapa bukan nol? Mengalikan kedua ruas dengan 0 membuat semuanya 0, sehingga informasi hilang. Membagi dengan 0 tidak terdefinisi.

Kalimat "pindah ruas, ganti tanda" sebenarnya singkatan dari aturan 1. Misalnya dari $3x + 5 = 20$, kita mengurangi 5 dari kedua ruas, sehingga $+5$ seolah "pindah" menjadi $-5$ di kanan.

### Urutan menyelesaikan

1. Buka kurung kalau ada.
2. Kalau ada pecahan, kalikan kedua ruas dengan KPK penyebut.
3. Kumpulkan suku $x$ di satu ruas dan bilangan di ruas lain.
4. Bagi dengan koefisien $x$.
5. Cek dengan memasukkan jawaban ke persamaan awal.

### Persamaan pecahan sederhana

Pecahan seperti $\frac{x}{3}$ ibarat sepertiga kantong. Supaya utuh lagi, kalikan kedua ruas dengan penyebutnya. Kalau penyebutnya lebih dari satu, kalikan dengan **KPK** semua penyebut agar semua pecahan hilang sekaligus.

```anim
{"type": "persamaan", "title": "Membuat sepertiga kantong menjadi utuh", "baris": [{"tex": "\\frac{x}{3} - 1 = 4", "say": "Ada sepertiga kantong di kiri."}, {"tex": "\\frac{x}{3} = 5", "say": "Tambah 1 ke kedua ruas.", "op": "kedua ruas + 1"}, {"tex": "x = 15", "say": "Kalikan kedua ruas dengan 3 supaya kantongnya utuh.", "op": "kedua ruas × 3"}]}
```

Kalau variabel ada di penyebut, misalnya $\frac{3}{x - 2} = 6$, kalikan kedua ruas dengan $(x - 2)$. Ingat bahwa $x - 2$ tidak boleh nol.

### Menyusun persamaan dari soal cerita

1. Tentukan apa yang dicari, beri nama variabel (misal $p$ = harga pensil).
2. Tulis besaran lain dalam variabel itu.
3. Cari kalimat yang menyatakan "sama dengan", lalu tulis persamaannya.
4. Selesaikan, lalu jawab dengan kalimat dan satuan.

```anim
{"type": "batang", "title": "Harga buku dan pensil", "bars": [{"label": "Pensil", "units": 4, "known": "p"}, {"label": "Buku", "units": 5, "known": "p + Rp3.000"}], "langkah": [{"say": "Harga pensil kita sebut p.", "bars": 1}, {"say": "Buku Rp3.000 lebih mahal, jadi batangnya lebih panjang: p + 3.000.", "bars": 2}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Dua langkah

```soal
{
 "title": "Contoh 1",
 "text": "Selesaikan $3x + 5 = 20$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Operasi pertama pada kedua ruas",
   "options": [
    "kurangi 5",
    "bagi 3",
    "tambah 5"
   ],
   "answer": "kurangi 5",
   "hint": "Singkirkan bilangan di sisi x dulu.",
   "explain": "3x + 5 − 5 = 20 − 5.",
   "error": "salah-operasi-kebalikan"
  },
  {
   "kind": "number",
   "prompt": "Hasilnya 3x = ?",
   "answer": "15",
   "hint": "20 − 5.",
   "explain": "3x = 15.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Bagi dengan koefisien. x = ?",
   "answer": "5",
   "hint": "Tiga kantong beratnya 15.",
   "explain": "x = 15 ÷ 3 = 5.",
   "error": "salah-operasi-kebalikan"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 3(5) + 5 = ?",
   "answer": "20",
   "hint": "Masukkan x = 5.",
   "explain": "20, sama dengan ruas kanan. Seimbang.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x = 5$."
}
```

### Contoh 2: Variabel di kedua ruas dan tanda kurung

```soal
{
 "title": "Contoh 2",
 "text": "Selesaikan $5(x - 2) = 2x + 11$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Buka kurung.",
   "options": [
    "$5x - 10 = 2x + 11$",
    "$5x - 2 = 2x + 11$",
    "$5x + 10 = 2x + 11$"
   ],
   "answer": "$5x - 10 = 2x + 11$",
   "hint": "Kalikan 5 ke setiap suku.",
   "explain": "5 × (−2) = −10.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Ambil 2x dari kedua ruas.",
   "options": [
    "$3x - 10 = 11$",
    "$7x - 10 = 11$",
    "$3x - 10 = 11 - 2x$"
   ],
   "answer": "$3x - 10 = 11$",
   "hint": "5x − 2x.",
   "explain": "Semua kantong ada di kiri.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tambah 10 ke kedua ruas. 3x = ?",
   "answer": "21",
   "hint": "11 + 10.",
   "explain": "3x = 21.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: x = ?",
   "answer": "7",
   "hint": "Bagi dengan 3.",
   "explain": "x = 7.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 5(7 − 2) = ?",
   "answer": "25",
   "hint": "Ruas kanan 2(7) + 11 = 25.",
   "explain": "Kedua ruas 25. Seimbang.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x = 7$."
}
```

### Contoh 3: Persamaan pecahan

```soal
{
 "title": "Contoh 3",
 "text": "Selesaikan $\\frac{x}{3} + \\frac{x - 1}{4} = 5$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: KPK penyebut 3 dan 4?",
   "answer": "12",
   "hint": "Kelipatan 4 yang habis dibagi 3.",
   "explain": "KPK-nya 12.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Kalikan setiap suku di kedua ruas dengan 12.",
   "options": [
    "$4x + 3(x - 1) = 60$",
    "$4x + 3(x - 1) = 5$",
    "$4x + 3x - 1 = 60$"
   ],
   "answer": "$4x + 3(x - 1) = 60$",
   "hint": "Ruas kanan juga dikali 12, dan pembilang x − 1 tetap dalam kurung.",
   "explain": "$12 \\cdot \\frac{x}{3} = 4x$, $12 \\cdot \\frac{x-1}{4} = 3(x - 1)$, $12 \\cdot 5 = 60$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Buka kurung dan sederhanakan.",
   "options": [
    "$7x - 3 = 60$",
    "$7x - 1 = 60$",
    "$7x + 3 = 60$"
   ],
   "answer": "$7x - 3 = 60$",
   "hint": "3(x − 1) = 3x − 3.",
   "explain": "4x + 3x − 3 = 7x − 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: x = ?",
   "answer": "9",
   "hint": "7x = 63.",
   "explain": "x = 63 ÷ 7 = 9.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $\\frac{9}{3} + \\frac{9 - 1}{4} = ?$",
   "answer": "5",
   "hint": "3 + 2.",
   "explain": "5. Seimbang.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $x = 9$."
}
```

### Contoh 4: Soal cerita

```soal
{
 "title": "Contoh 4",
 "text": "Harga sebuah buku tulis Rp3.000 lebih mahal dari harga sebuah pensil. Siti membeli 4 buku tulis dan 3 pensil seharga Rp40.000. Berapa harga sebuah pensil dan sebuah buku tulis?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Jika harga pensil p, harga buku adalah",
   "options": [
    "$p + 3.000$",
    "$p - 3.000$",
    "$3.000p$"
   ],
   "answer": "$p + 3.000$",
   "hint": "Buku lebih mahal.",
   "explain": "Buku = p + 3.000.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Persamaannya",
   "options": [
    "$4(p + 3.000) + 3p = 40.000$",
    "$4p + 3.000 + 3p = 40.000$",
    "$4(p + 3.000) = 3p + 40.000$"
   ],
   "answer": "$4(p + 3.000) + 3p = 40.000$",
   "hint": "4 buku ditambah 3 pensil sama dengan total.",
   "explain": "Harga 4 buku 4(p + 3.000), harga 3 pensil 3p.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Setelah dibuka, 7p + 12.000 = 40.000. Maka 7p = ?",
   "answer": "28000",
   "hint": "Kurangi 12.000 dari kedua ruas.",
   "explain": "7p = 28.000.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Harga pensil p = ?",
   "answer": "4000",
   "hint": "Bagi 7.",
   "explain": "Rp4.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Harga buku tulis?",
   "answer": "7000",
   "hint": "p + 3.000.",
   "explain": "Rp7.000. Jangan lupa, buku juga ditanya.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Pensil Rp4.000 dan buku tulis Rp7.000.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Pensil",
    "units": 4,
    "known": "p"
   },
   {
    "label": "Buku",
    "units": 5,
    "known": "p + Rp3.000"
   }
  ]
 }
}
```

## Kesalahan yang sering terjadi

- **Hanya mengubah satu ruas.** Dari $3x + 5 = 20$ menulis $3x = 20$. Kamu mengambil 5 dari kiri saja, timbangan jadi miring. Kurangi juga 5 dari kanan: $3x = 15$.
- **Lupa mengalikan semua suku dengan KPK.** Dari $\frac{x}{3} + \frac{x-1}{4} = 5$ menulis $4x + 3(x - 1) = 5$. Ruas kanan juga harus dikali 12, jadi 60.
- **Salah tanda saat membuka kurung pecahan.** Dari $-\frac{x - 1}{4}$ dikali 4 menjadi $-x - 1$. Yang benar $-(x - 1) = -x + 1$. Selalu beri kurung pada pembilang.
- **Membagi dengan cara salah.** Dari $3x = 15$ menulis $x = 15 - 3 = 12$. Tiga kantong dibagi rata, bukan dikurangi 3. Jadi $x = 15 \div 3 = 5$.
- **Tidak menjawab pertanyaan.** Pada Contoh 4 berhenti di $p = 4.000$, padahal harga buku juga ditanya.

## Ringkasan

- Persamaan seperti timbangan seimbang: lakukan operasi yang sama pada kedua ruas.
- Urutan: buka kurung, hilangkan pecahan dengan KPK, kumpulkan suku sejenis, bagi dengan koefisien.
- Jangan mengalikan atau membagi dengan nol.
- Soal cerita: beri nama variabel, tulis besaran lain, susun persamaan, selesaikan, jawab dengan kalimat.
- Selalu cek dengan memasukkan jawaban ke persamaan awal.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Selesaikan $7x - 4 = 24$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Tambah 4 ke kedua ruas: 7x = ?",
   "answer": "28",
   "hint": "24 + 4.",
   "explain": "7x = 28.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "x = ?",
   "answer": "4",
   "hint": "Bagi 7.",
   "explain": "x = 4.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x = 4$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Selesaikan $2(3x + 1) = 4x - 8$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Buka kurung",
   "options": [
    "$6x + 2 = 4x - 8$",
    "$6x + 1 = 4x - 8$",
    "$5x + 2 = 4x - 8$"
   ],
   "answer": "$6x + 2 = 4x - 8$",
   "hint": "Kalikan 2 ke setiap suku.",
   "explain": "6x + 2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Kumpulkan: 2x = ?",
   "answer": "-10",
   "hint": "Kurangi 4x dan 2 dari kedua ruas.",
   "explain": "2x = −8 − 2 = −10.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "x = ?",
   "answer": "-5",
   "hint": "Bagi 2.",
   "explain": "x = −5. Cek: kedua ruas −28.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x = -5$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Selesaikan $\\frac{x + 2}{5} = \\frac{x - 1}{2}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Kalikan kedua ruas dengan 10",
   "options": [
    "$2(x + 2) = 5(x - 1)$",
    "$5(x + 2) = 2(x - 1)$",
    "$2x + 2 = 5x - 1$"
   ],
   "answer": "$2(x + 2) = 5(x - 1)$",
   "hint": "$10 \\div 5 = 2$ dan $10 \\div 2 = 5$.",
   "explain": "2x + 4 = 5x − 5.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Kumpulkan: 3x = ?",
   "answer": "9",
   "hint": "Pindahkan 2x ke kanan dan −5 ke kiri.",
   "explain": "4 + 5 = 5x − 2x, jadi 3x = 9.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "x = ?",
   "answer": "3",
   "hint": "Bagi 3.",
   "explain": "x = 3. Cek: 5/5 = 1 dan 2/2 = 1.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x = 3$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Selesaikan $\\frac{3}{x - 2} = 6$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Kalikan kedua ruas dengan (x − 2)",
   "options": [
    "$3 = 6(x - 2)$",
    "$3 = 6x - 2$",
    "$3(x - 2) = 6$"
   ],
   "answer": "$3 = 6(x - 2)$",
   "hint": "Penyebut berpindah sebagai pengali di ruas kanan.",
   "explain": "3 = 6x − 12.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "6x = ?",
   "answer": "15",
   "hint": "Tambah 12 ke kedua ruas.",
   "explain": "6x = 15.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "x = ? (tulis desimal)",
   "answer": "2,5",
   "hint": "15 ÷ 6.",
   "explain": "x = 2,5. Cek: 3 ÷ 0,5 = 6.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$x = 2{,}5$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Umur ayah sekarang 3 kali umur Budi. Sepuluh tahun lagi, umur ayah 2 kali umur Budi. Berapa umur Budi sekarang?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Jika umur Budi b, persamaannya",
   "options": [
    "$3b + 10 = 2(b + 10)$",
    "$3b + 10 = 2b + 10$",
    "$3(b + 10) = 2b$"
   ],
   "answer": "$3b + 10 = 2(b + 10)$",
   "hint": "Sepuluh tahun lagi, keduanya bertambah 10.",
   "explain": "Ayah 3b + 10, Budi b + 10.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Buka kurung: 3b + 10 = 2b + 20. Maka b = ?",
   "answer": "10",
   "hint": "Kurangi 2b dan 10 dari kedua ruas.",
   "explain": "b = 10.",
   "error": "salah-langkah-materi",
   "suffix": "tahun"
  },
  {
   "kind": "number",
   "prompt": "Cek: 10 tahun lagi umur ayah?",
   "answer": "40",
   "hint": "Sekarang 30.",
   "explain": "40 = 2 × 20. Cocok.",
   "error": "salah-langkah-materi",
   "suffix": "tahun"
  }
 ],
 "conclusion": "Umur Budi sekarang 10 tahun."
}
```
