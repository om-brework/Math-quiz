---
id: sma1-01-matriks
judul: Matriks
jenjang: sma1
moe: "Secondary 4 · Number and Algebra · N9 Matrices"
prasyarat: [smp1-07-bentuk-aljabar]
durasi_menit: 50
---

## Kenapa belajar ini?

Toko, kantin, dan pabrik menyimpan data dalam tabel: jumlah barang per hari, harga per jenis, stok per cabang. Matriks adalah cara matematika menulis tabel itu, lengkap dengan aturan menjumlah dan mengalikannya. Dengan matriks, menghitung pendapatan banyak hari sekaligus menjadi satu operasi yang rapi.

## Analogi

Bayangkan **buku catatan penjualan kantin sekolah**. Setiap **baris** adalah satu hari, setiap **kolom** adalah satu menu.

```visual
{"type": "table", "head": ["Hari", "Nasi goreng", "Mi ayam", "Bakso"], "rows": [["Senin", "20", "15", "12"], ["Selasa", "18", "22", "10"]], "caption": "Catatan kantin: baris = hari, kolom = menu. Inilah matriks berordo 2 × 3."}
```

- Menggabungkan catatan dua kantin berarti menjumlahkan kotak yang **posisinya sama**.
- Kalau semua porsi dilipatgandakan, setiap kotak dikalikan bilangan yang sama.
- Kasir menghitung uang masuk dengan cara **"porsi kali harga, lalu dijumlah"** untuk setiap hari. Inilah inti perkalian matriks: satu **baris** porsi bertemu satu **kolom** harga.

Ingat kasir ini sepanjang bab. Hampir setiap aturan matriks bisa dijelaskan dengan apa yang masuk akal bagi kasir.

```anim
{"type": "persamaan", "title": "Kasir menghitung uang masuk hari Senin", "baris": [{"tex": "\\begin{pmatrix} 20 & 15 & 12 \\end{pmatrix}\\begin{pmatrix} 10.000 \\\\ 8.000 \\\\ 7.000 \\end{pmatrix}", "say": "Satu baris porsi (Senin) bertemu satu kolom harga."}, {"tex": "20(10.000) + 15(8.000) + 12(7.000)", "say": "Pasangkan: porsi pertama dengan harga pertama, dan seterusnya.", "op": "kali pasangan"}, {"tex": "200.000 + 120.000 + 84.000", "say": "Hitung tiap hasil kali.", "op": "jumlahkan"}, {"tex": "404.000", "say": "Uang masuk hari Senin Rp404.000."}]}
```

## Konsep

### Matriks, ordo, dan elemen

**Matriks** adalah susunan bilangan berbentuk persegi panjang dalam baris dan kolom, diapit kurung. Matriks diberi nama huruf kapital.

$$A = \begin{pmatrix} 20 & 15 & 12 \\ 18 & 22 & 10 \end{pmatrix}$$

- **Ordo** = banyak baris × banyak kolom. Matriks $A$ berordo $2 \times 3$ (dibaca "dua kali tiga"). Baris selalu disebut dulu.
- **Elemen** $a_{ij}$ adalah bilangan di baris ke-$i$, kolom ke-$j$. Di sini $a_{23} = 10$.
- Matriks berordo $1 \times n$ disebut **matriks baris**, berordo $m \times 1$ disebut **matriks kolom**, dan berordo $n \times n$ disebut **matriks persegi**.

Dua matriks **sama** jika ordonya sama dan semua elemen yang seletak sama.

### Penjumlahan dan pengurangan

Hanya bisa dilakukan jika **ordonya sama**. Jumlahkan (atau kurangkan) elemen yang seletak:

$$\begin{pmatrix} a & b \\ c & d \end{pmatrix} + \begin{pmatrix} p & q \\ r & s \end{pmatrix} = \begin{pmatrix} a + p & b + q \\ c + r & d + s \end{pmatrix}$$

**Kenapa ordo harus sama?** Menggabungkan catatan dua kantin hanya bermakna jika kotaknya mewakili hari dan menu yang sama.

```anim
{"type": "persamaan", "title": "Menjumlahkan elemen seletak", "baris": [{"tex": "\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} 5 & 0 \\\\ -1 & 2 \\end{pmatrix}", "say": "Kedua matriks berordo $2 \\times 2$, jadi bisa dijumlahkan."}, {"tex": "\\begin{pmatrix} 1+5 & 2+0 \\\\ 3+(-1) & 4+2 \\end{pmatrix}", "say": "Pasangkan setiap kotak dengan kotak di posisi yang sama.", "op": "seletak"}, {"tex": "\\begin{pmatrix} 6 & 2 \\\\ 2 & 6 \\end{pmatrix}", "say": "Hasilnya tetap berordo $2 \\times 2$."}]}
```

### Perkalian skalar

Bilangan $k$ dikalikan ke **setiap** elemen:

$$k\begin{pmatrix} a & b \\ c & d \end{pmatrix} = \begin{pmatrix} ka & kb \\ kc & kd \end{pmatrix}$$

Contoh: jika semua pesanan berlipat 2, setiap kotak di catatan menjadi 2 kali.

### Perkalian matriks

Untuk menghitung $AB$, ambil **baris** dari $A$ dan **kolom** dari $B$. Kalikan pasangan yang bersesuaian, lalu jumlahkan. Hasilnya diletakkan di baris dan kolom yang sama:

$$\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} p & q \\ r & s \end{pmatrix} = \begin{pmatrix} ap + br & aq + bs \\ cp + dr & cq + ds \end{pmatrix}$$

**Syarat:** banyak kolom $A$ = banyak baris $B$.

$$A_{m \times n} \times B_{n \times p} = C_{m \times p}$$

```anim
{"type": "persamaan", "title": "Baris kali kolom", "baris": [{"tex": "\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}\\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}", "say": "Hasilnya $2 \\times 2$: ada empat kotak yang harus diisi."}, {"tex": "c_{11} = 1(2) + 2(1) = 4", "say": "Baris 1 bertemu kolom 1.", "op": "baris 1 · kolom 1"}, {"tex": "c_{12} = 1(0) + 2(3) = 6", "say": "Baris 1 bertemu kolom 2.", "op": "baris 1 · kolom 2"}, {"tex": "c_{21} = 3(2) + 4(1) = 10", "say": "Baris 2 bertemu kolom 1.", "op": "baris 2 · kolom 1"}, {"tex": "c_{22} = 3(0) + 4(3) = 12", "say": "Baris 2 bertemu kolom 2.", "op": "baris 2 · kolom 2"}, {"tex": "\\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}", "say": "Setiap hasil diletakkan di baris dan kolom yang sama."}]}
```

**Kenapa syaratnya begitu?** Kasir memasangkan setiap jenis menu dengan harganya. Kalau ada 3 menu (3 kolom di catatan), harus ada 3 harga (3 baris di daftar harga). Kalau tidak cocok, ada menu tanpa harga.

**Urutan penting.** Umumnya $AB \ne BA$, bahkan $BA$ bisa tidak terdefinisi. "Porsi × harga" bermakna, tetapi "harga × porsi" dalam bentuk matriks belum tentu.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menyajikan informasi dalam matriks

```soal
{
 "title": "Contoh 1",
 "text": "Kantin sekolah menjual nasi goreng, mi ayam, dan bakso. Hari Senin terjual 20, 15, dan 12 porsi. Hari Selasa terjual 18, 22, dan 10 porsi. Sajikan dalam matriks $A$ dengan baris = hari. Tentukan ordo $A$ dan arti $a_{23}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tentukan baris dan kolom. Kalau baris = hari, kolom mewakili apa?",
   "options": [
    "Menu",
    "Hari",
    "Harga"
   ],
   "answer": "Menu",
   "hint": "Setiap hari punya data untuk beberapa menu.",
   "explain": "Baris 1 = Senin, baris 2 = Selasa; kolom 1 = nasi goreng, kolom 2 = mi ayam, kolom 3 = bakso.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Isi matriks. Bilangan apa yang ada di baris 1, kolom 2?",
   "answer": "15",
   "hint": "Baris 1 = Senin, kolom 2 = mi ayam.",
   "explain": "Senin terjual 15 porsi mi ayam, jadi $a_{12} = 15$. Matriksnya $A = \\begin{pmatrix} 20 & 15 & 12 \\\\ 18 & 22 & 10 \\end{pmatrix}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Ordo $A$ adalah ...",
   "options": [
    "$2 \\times 3$",
    "$3 \\times 2$",
    "$6$"
   ],
   "answer": "$2 \\times 3$",
   "hint": "Ordo = banyak baris × banyak kolom. Baris disebut dulu.",
   "explain": "Ada 2 baris (hari) dan 3 kolom (menu), jadi ordonya $2 \\times 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Berapa nilai $a_{23}$?",
   "answer": "10",
   "hint": "Baris 2, kolom 3.",
   "explain": "Baris 2 = Selasa, kolom 3 = bakso, jadi $a_{23} = 10$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Arti $a_{23}$ adalah ...",
   "options": [
    "Porsi bakso terjual hari Selasa",
    "Porsi mi ayam terjual hari Selasa",
    "Porsi bakso terjual hari Senin"
   ],
   "answer": "Porsi bakso terjual hari Selasa",
   "hint": "Indeks pertama menunjuk baris (hari), indeks kedua menunjuk kolom (menu).",
   "explain": "10 porsi bakso terjual hari Selasa.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: berapa banyak elemen matriks $A$?",
   "answer": "6",
   "hint": "Kalikan banyak baris dengan banyak kolom.",
   "explain": "$2 \\times 3 = 6$, sama dengan banyak data di soal.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi ordo $A$ adalah $2 \\times 3$ dan $a_{23} = 10$, yaitu porsi bakso hari Selasa.",
 "visual": {
  "type": "table",
  "head": [
   "Hari",
   "Nasi goreng",
   "Mi ayam",
   "Bakso"
  ],
  "rows": [
   [
    "Senin",
    "20",
    "15",
    "12"
   ],
   [
    "Selasa",
    "18",
    "22",
    "10"
   ]
  ]
 }
}
```

### Contoh 2: Perkalian skalar dan pengurangan

```soal
{
 "title": "Contoh 2",
 "text": "Diketahui $A = \\begin{pmatrix} 2 & -1 \\\\ 4 & 0 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 1 & 3 \\\\ -2 & 5 \\end{pmatrix}$. Hitung $3A - B$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Cek ordo. Apakah pengurangan bisa dilakukan?",
   "options": [
    "Bisa, keduanya $2 \\times 2$",
    "Tidak bisa",
    "Bisa, karena $3A$ selalu lebih besar"
   ],
   "answer": "Bisa, keduanya $2 \\times 2$",
   "hint": "Penjumlahan dan pengurangan butuh ordo yang sama.",
   "explain": "Keduanya berordo $2 \\times 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Perkalian skalar. Elemen baris 1 kolom 2 dari $3A$ = ?",
   "answer": "-3",
   "hint": "Kalikan $-1$ dengan 3.",
   "explain": "$3A = \\begin{pmatrix} 6 & -3 \\\\ 12 & 0 \\end{pmatrix}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Kurangkan elemen seletak. Baris 1 kolom 1: $6 - 1$ = ?",
   "answer": "5",
   "hint": "Ambil elemen $3A$, kurangi elemen $B$ di posisi yang sama.",
   "explain": "$6 - 1 = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Baris 1 kolom 2: $-3 - 3$ = ?",
   "answer": "-6",
   "hint": "Bergerak lebih jauh ke kiri dari $-3$.",
   "explain": "$-3 - 3 = -6$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Baris 2 kolom 1: $12 - (-2)$ = ?",
   "answer": "14",
   "hint": "Mengurangi bilangan negatif sama dengan menambah.",
   "explain": "$12 - (-2) = 12 + 2 = 14$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Baris 2 kolom 2: $0 - 5$ = ?",
   "answer": "-5",
   "hint": "Nol dikurangi 5.",
   "explain": "$0 - 5 = -5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: jumlahkan balik baris 2 kolom 1, $14 + (-2)$ = ?",
   "answer": "12",
   "hint": "Kalau benar, hasilnya sama dengan elemen $3A$.",
   "explain": "$14 - 2 = 12$, sama dengan elemen $3A$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $3A - B = \\begin{pmatrix} 5 & -6 \\\\ 14 & -5 \\end{pmatrix}$."
}
```

### Contoh 3: Perkalian dua matriks dan urutannya

```soal
{
 "title": "Contoh 3",
 "text": "Dengan $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & -1 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 4 & 0 \\\\ -2 & 5 \\end{pmatrix}$, hitung $AB$ dan $BA$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Cek syarat. Ordo hasil $AB$ adalah ...",
   "options": [
    "$2 \\times 2$",
    "$4 \\times 4$",
    "Tidak terdefinisi"
   ],
   "answer": "$2 \\times 2$",
   "hint": "Kolom $A$ harus sama dengan baris $B$; hasilnya baris $A$ × kolom $B$.",
   "explain": "Kolom $A$ (2) = baris $B$ (2), hasilnya $2 \\times 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Baris 1 $A$ dengan kolom 1 $B$: $(2)(4) + (1)(-2)$ = ?",
   "answer": "6",
   "hint": "Kalikan pasangan, lalu jumlahkan.",
   "explain": "$8 - 2 = 6$.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Baris 1 $A$ dengan kolom 2 $B$: $(2)(0) + (1)(5)$ = ?",
   "answer": "5",
   "hint": "Kolom 2 dari $B$ adalah 0 dan 5.",
   "explain": "$0 + 5 = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Baris 2 $A$ dengan kolom 1 $B$: $(3)(4) + (-1)(-2)$ = ?",
   "answer": "14",
   "hint": "Negatif kali negatif hasilnya positif.",
   "explain": "$12 + 2 = 14$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Baris 2 $A$ dengan kolom 2 $B$: $(3)(0) + (-1)(5)$ = ?",
   "answer": "-5",
   "hint": "Negatif kali positif hasilnya negatif.",
   "explain": "$0 - 5 = -5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Hitung $BA$ dengan cara yang sama (baris $B$ kali kolom $A$). Hasilnya ...",
   "options": [
    "$\\begin{pmatrix} 8 & 4 \\\\ 11 & -7 \\end{pmatrix}$",
    "$\\begin{pmatrix} 6 & 5 \\\\ 14 & -5 \\end{pmatrix}$",
    "$\\begin{pmatrix} 8 & 0 \\\\ -6 & -5 \\end{pmatrix}$"
   ],
   "answer": "$\\begin{pmatrix} 8 & 4 \\\\ 11 & -7 \\end{pmatrix}$",
   "hint": "Sekarang baris diambil dari $B$, kolom dari $A$. Contoh: $(4)(2) + (0)(3)$.",
   "explain": "Baris 1 $B$: $8$ dan $4$. Baris 2 $B$: $-4 + 15 = 11$ dan $-2 - 5 = -7$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: apakah $AB = BA$?",
   "options": [
    "Tidak, hasilnya berbeda",
    "Ya, perkalian selalu bisa ditukar"
   ],
   "answer": "Tidak, hasilnya berbeda",
   "hint": "Bandingkan elemen baris 1 kolom 1 dari keduanya.",
   "explain": "6 dan 8 berbeda, jadi $AB \\ne BA$. Urutan perkalian matriks penting.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $AB = \\begin{pmatrix} 6 & 5 \\\\ 14 & -5 \\end{pmatrix}$ dan $BA = \\begin{pmatrix} 8 & 4 \\\\ 11 & -7 \\end{pmatrix}$."
}
```

### Contoh 4: Soal kontekstual, pendapatan dan laba toko kue

```soal
{
 "title": "Contoh 4",
 "text": "Toko kue Bu Siti menjual kue lapis, onde-onde, dan klepon. Pesanan Senin: 20, 30, 40 buah. Selasa: 25, 10, 50 buah. Harga jual per buah Rp3.000, Rp2.000, Rp1.500, dan modal per buah Rp2.000, Rp1.200, Rp1.000. Dengan $Q = \\begin{pmatrix} 20 & 30 & 40 \\\\ 25 & 10 & 50 \\end{pmatrix}$ dan $P = \\begin{pmatrix} 3.000 & 2.000 \\\\ 2.000 & 1.200 \\\\ 1.500 & 1.000 \\end{pmatrix}$, hitung pendapatan, modal, dan laba tiap hari.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Cek syarat $QP$. Ordo hasilnya ...",
   "options": [
    "$2 \\times 2$",
    "$3 \\times 3$",
    "Tidak terdefinisi"
   ],
   "answer": "$2 \\times 2$",
   "hint": "$Q$ berordo $2 \\times 3$, $P$ berordo $3 \\times 2$.",
   "explain": "Kolom $Q$ = baris $P$ = 3 (tiga jenis kue). Hasilnya $2 \\times 2$: baris = hari, kolom = jual dan modal.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Senin, pendapatan: $20(3.000) + 30(2.000) + 40(1.500)$ = ?",
   "answer": "180000",
   "hint": "Hitung tiga hasil kali, lalu jumlahkan.",
   "explain": "$60.000 + 60.000 + 60.000 = 180.000$.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Senin, modal: $20(2.000) + 30(1.200) + 40(1.000)$ = ?",
   "answer": "116000",
   "hint": "Pakai kolom kedua dari $P$.",
   "explain": "$40.000 + 36.000 + 40.000 = 116.000$.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Selasa, pendapatan: $25(3.000) + 10(2.000) + 50(1.500)$ = ?",
   "answer": "170000",
   "hint": "Baris kedua $Q$ dengan kolom pertama $P$.",
   "explain": "$75.000 + 20.000 + 75.000 = 170.000$.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Selasa, modal: $25(2.000) + 10(1.200) + 50(1.000)$ = ?",
   "answer": "112000",
   "hint": "Baris kedua $Q$ dengan kolom kedua $P$.",
   "explain": "$50.000 + 12.000 + 50.000 = 112.000$.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Laba Senin = pendapatan − modal = ?",
   "answer": "64000",
   "hint": "Kurangkan dua elemen di baris Senin.",
   "explain": "$180.000 - 116.000 = 64.000$.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Laba Selasa = ?",
   "answer": "58000",
   "hint": "Kurangkan dua elemen di baris Selasa.",
   "explain": "$170.000 - 112.000 = 58.000$.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: laba per buah lapis Rp1.000, onde-onde Rp800, klepon Rp500. Laba Senin $= 20(1.000) + 30(800) + 40(500)$ = ?",
   "answer": "64000",
   "hint": "Hitung langsung dari laba per buah.",
   "explain": "$20.000 + 24.000 + 20.000 = 64.000$. Cocok dengan Langkah 4.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Senin: pendapatan Rp180.000, modal Rp116.000, laba Rp64.000. Selasa: pendapatan Rp170.000, modal Rp112.000, laba Rp58.000."
}
```

## Kesalahan yang sering terjadi

- **Ordo terbalik.** Menulis matriks 2 baris 3 kolom sebagai $3 \times 2$. Ingat: **baris dulu, baru kolom**.
- **Mengalikan elemen seletak.** $\begin{pmatrix} 2 & 1 \\ 3 & -1 \end{pmatrix}\begin{pmatrix} 4 & 0 \\ -2 & 5 \end{pmatrix} \ne \begin{pmatrix} 8 & 0 \\ -6 & -5 \end{pmatrix}$. Perkalian matriks adalah **baris kali kolom**, seperti kasir.
- **Menganggap $AB = BA$.** Pada Contoh 3, $AB$ dan $BA$ berbeda. Perhatikan urutan yang diminta soal.
- **Mengalikan matriks yang ordonya tidak cocok.** $Q_{2 \times 3} \times Q_{2 \times 3}$ tidak terdefinisi, karena 3 kolom tidak bisa dipasangkan dengan 2 baris.
- **Lupa tanda negatif.** $12 - (-2) = 14$, bukan 10. Tulis tanda kurung saat mengurangi bilangan negatif.

## Ringkasan

- Matriks menyajikan data dalam baris dan kolom; ordo = baris × kolom; $a_{ij}$ = elemen baris $i$ kolom $j$.
- Penjumlahan dan pengurangan: ordo harus sama, operasikan elemen seletak.
- Perkalian skalar: kalikan setiap elemen.
- Perkalian matriks: baris kali kolom lalu dijumlah; syarat $A_{m \times n}B_{n \times p} = C_{m \times p}$.
- Umumnya $AB \ne BA$.
- Dalam soal konteks, susun matriks agar "kolom kiri" dan "baris kanan" mewakili hal yang sama.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tentukan ordo $\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}$ dan elemen $a_{21}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Ordo matriks ini adalah ...",
   "options": [
    "$2 \\times 3$",
    "$3 \\times 2$",
    "$2 \\times 2$"
   ],
   "answer": "$2 \\times 3$",
   "hint": "Hitung baris dulu, lalu kolom.",
   "explain": "2 baris dan 3 kolom.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$a_{21}$ = ?",
   "answer": "4",
   "hint": "Baris 2, kolom 1.",
   "explain": "Baris 2 adalah 4, 5, 6; kolom 1-nya 4.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Ordo $2 \\times 3$ dan $a_{21} = 4$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $\\begin{pmatrix} 3 & -2 \\\\ 1 & 4 \\end{pmatrix} + \\begin{pmatrix} -1 & 5 \\\\ 6 & 0 \\end{pmatrix}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Baris 1 kolom 1: $3 + (-1)$ = ?",
   "answer": "2",
   "hint": "Jumlahkan elemen seletak.",
   "explain": "$3 - 1 = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Baris 1 kolom 2: $-2 + 5$ = ?",
   "answer": "3",
   "hint": "Mulai dari $-2$, naik 5.",
   "explain": "$-2 + 5 = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Baris 2 kolom 1: $1 + 6$ = ?",
   "answer": "7",
   "hint": "Jumlahkan elemen seletak.",
   "explain": "$1 + 6 = 7$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Baris 2 kolom 2: $4 + 0$ = ?",
   "answer": "4",
   "hint": "Menambah nol tidak mengubah bilangan.",
   "explain": "$4 + 0 = 4$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Hasilnya $\\begin{pmatrix} 2 & 3 \\\\ 7 & 4 \\end{pmatrix}$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Diketahui $A = \\begin{pmatrix} 1 & 4 \\\\ -2 & 3 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 1 \\\\ 0 & -1 \\end{pmatrix}$. Hitung $2A - 3B$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Hitung $2A$ dan $3B$. Yang benar adalah ...",
   "options": [
    "$2A = \\begin{pmatrix} 2 & 8 \\\\ -4 & 6 \\end{pmatrix}$, $3B = \\begin{pmatrix} 6 & 3 \\\\ 0 & -3 \\end{pmatrix}$",
    "$2A = \\begin{pmatrix} 2 & 8 \\\\ -2 & 3 \\end{pmatrix}$, $3B = \\begin{pmatrix} 6 & 1 \\\\ 0 & -1 \\end{pmatrix}$",
    "$2A = \\begin{pmatrix} 3 & 6 \\\\ 0 & 5 \\end{pmatrix}$, $3B = \\begin{pmatrix} 5 & 4 \\\\ 3 & 2 \\end{pmatrix}$"
   ],
   "answer": "$2A = \\begin{pmatrix} 2 & 8 \\\\ -4 & 6 \\end{pmatrix}$, $3B = \\begin{pmatrix} 6 & 3 \\\\ 0 & -3 \\end{pmatrix}$",
   "hint": "Skalar dikalikan ke SETIAP elemen, bukan ditambahkan.",
   "explain": "Setiap elemen $A$ dikali 2, setiap elemen $B$ dikali 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Baris 1 kolom 1: $2 - 6$ = ?",
   "answer": "-4",
   "hint": "Kurangkan elemen seletak.",
   "explain": "$2 - 6 = -4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Baris 1 kolom 2: $8 - 3$ = ?",
   "answer": "5",
   "hint": "Kurangkan elemen seletak.",
   "explain": "$8 - 3 = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Baris 2 kolom 1: $-4 - 0$ = ?",
   "answer": "-4",
   "hint": "Mengurangi nol tidak mengubah bilangan.",
   "explain": "$-4 - 0 = -4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Baris 2 kolom 2: $6 - (-3)$ = ?",
   "answer": "9",
   "hint": "Mengurangi bilangan negatif sama dengan menambah.",
   "explain": "$6 + 3 = 9$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $2A - 3B = \\begin{pmatrix} -4 & 5 \\\\ -4 & 9 \\end{pmatrix}$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Hitung $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}\\begin{pmatrix} 5 \\\\ 6 \\end{pmatrix}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Ordo hasilnya ...",
   "options": [
    "$2 \\times 1$",
    "$1 \\times 2$",
    "$2 \\times 2$"
   ],
   "answer": "$2 \\times 1$",
   "hint": "$(2 \\times 2)(2 \\times 1)$: ambil baris kiri dan kolom kanan.",
   "explain": "Hasilnya matriks kolom $2 \\times 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Baris 1: $1(5) + 2(6)$ = ?",
   "answer": "17",
   "hint": "Kalikan pasangan lalu jumlahkan.",
   "explain": "$5 + 12 = 17$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Baris 2: $3(5) + 4(6)$ = ?",
   "answer": "39",
   "hint": "Kalikan pasangan lalu jumlahkan.",
   "explain": "$15 + 24 = 39$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Hasilnya $\\begin{pmatrix} 17 \\\\ 39 \\end{pmatrix}$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Rina membeli 3 buku dan 2 pensil. Doni membeli 1 buku dan 5 pensil. Harga buku Rp5.000 dan pensil Rp2.000. Tuliskan perkalian matriks untuk menghitung belanja masing-masing, lalu hitung hasilnya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Perkalian matriks yang tepat adalah ...",
   "options": [
    "$\\begin{pmatrix} 3 & 2 \\\\ 1 & 5 \\end{pmatrix}\\begin{pmatrix} 5.000 \\\\ 2.000 \\end{pmatrix}$",
    "$\\begin{pmatrix} 5.000 \\\\ 2.000 \\end{pmatrix}\\begin{pmatrix} 3 & 2 \\\\ 1 & 5 \\end{pmatrix}$",
    "$\\begin{pmatrix} 3 & 1 \\\\ 2 & 5 \\end{pmatrix}\\begin{pmatrix} 2.000 \\\\ 5.000 \\end{pmatrix}$"
   ],
   "answer": "$\\begin{pmatrix} 3 & 2 \\\\ 1 & 5 \\end{pmatrix}\\begin{pmatrix} 5.000 \\\\ 2.000 \\end{pmatrix}$",
   "hint": "Baris = orang, kolom = barang; lalu kolom harga dengan urutan barang yang sama.",
   "explain": "Kolom kiri (buku, pensil) cocok dengan baris kanan (harga buku, harga pensil).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Belanja Rina: $3(5.000) + 2(2.000)$ = ?",
   "answer": "19000",
   "hint": "Kalikan banyak barang dengan harganya, lalu jumlahkan.",
   "explain": "$15.000 + 4.000 = 19.000$.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Belanja Doni: $1(5.000) + 5(2.000)$ = ?",
   "answer": "15000",
   "hint": "Kalikan banyak barang dengan harganya, lalu jumlahkan.",
   "explain": "$5.000 + 10.000 = 15.000$.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Rina Rp19.000, Doni Rp15.000."
}
```
