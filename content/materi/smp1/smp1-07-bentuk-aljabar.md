---
id: smp1-07-bentuk-aljabar
judul: Bentuk Aljabar dan Rumus
jenjang: smp1
moe: "Secondary 1 · Number and Algebra · N5 Algebraic expressions and formulae"
prasyarat: [sd6-04-aljabar-dasar, smp1-02-bilangan-bulat-real]
durasi_menit: 50
---

## Kenapa belajar ini?

Aljabar adalah cara menulis aturan yang berlaku untuk banyak angka sekaligus. Ongkos ojek online, harga paket internet, dan pola susunan kursi bisa ditulis sebagai satu bentuk aljabar. Setelah itu, kamu tinggal memasukkan angka.

## Analogi

Bayangkan **kantong kelereng tertutup**. Semua kantong berlabel $x$ berisi kelereng yang sama banyak, tetapi kita belum tahu berapa. Ada juga **kelereng lepas** yang bisa langsung dihitung.

- $3x + 2$ artinya 3 kantong $x$ dan 2 kelereng lepas.
- Kantong $x$ hanya bisa digabung dengan kantong $x$. Kantong $y$ jenisnya lain. Kelereng lepas hanya digabung dengan kelereng lepas.
- $3(x + 2)$ artinya **3 paket**, dan setiap paket berisi 1 kantong $x$ dan 2 kelereng lepas.

```anim
{"type": "batang", "title": "3 paket (x + 2) dibongkar", "bars": [{"label": "3(x + 2)", "units": 3, "unitValue": "x + 2"}, {"label": "Kantong", "units": 3, "unitValue": "x"}, {"label": "Lepas", "units": 6, "unitValue": "1"}], "langkah": [{"say": "3 paket, setiap paket berisi 1 kantong x dan 2 kelereng lepas.", "bars": 1}, {"say": "Bongkar paketnya: ada 3 kantong x.", "bars": 2}, {"say": "dan 3 × 2 = 6 kelereng lepas. Jadi 3(x + 2) = 3x + 6.", "bars": 3}]}
```

Kita akan memakai kantong dan paket ini saat menyederhanakan, membuka kurung, dan memfaktorkan.

## Konsep

### Notasi aljabar

- $3x$ artinya $3 \times x$. Tanda kali tidak ditulis.
- $ab$ artinya $a \times b$.
- $x^2$ artinya $x \times x$, dan $3x^2$ artinya $3 \times x \times x$ (bukan $(3x)^2$).
- $\frac{x}{4}$ artinya $x \div 4$.

Pada $5x - 2y + 7$ ada tiga **suku**: $5x$, $-2y$, dan $7$. Angka 5 disebut **koefisien** dari $x$. Angka 7 disebut **konstanta**. Suku yang hurufnya sama persis (termasuk pangkatnya) disebut **suku sejenis**.

### Menghitung nilai bentuk aljabar dan rumus

Kalau isi kantong diketahui, ganti setiap huruf dengan angkanya, **pakai tanda kurung**, lalu hitung dengan urutan biasa: kurung, pangkat, kali-bagi, tambah-kurang.

**Rumus** adalah bentuk aljabar yang memberi nama pada hasilnya. Contoh: keliling persegi panjang $K = 2(p + l)$.

### Menerjemahkan kalimat ke aljabar

- "5 lebih dari $n$" ditulis $n + 5$.
- "3 kurang dari $n$" ditulis $n - 3$ (bukan $3 - n$).
- "dua kali $n$" ditulis $2n$.
- "$n$ dibagi 4" ditulis $\frac{n}{4}$.
- "kuadrat dari $(n + 1)$" ditulis $(n + 1)^2$.

### Suku ke-n sebuah pola

Pada barisan $5, 8, 11, 14, \ldots$ setiap suku bertambah 3. Bandingkan dengan kelipatan 3, yaitu $3, 6, 9, 12, \ldots$ atau $3n$. Setiap suku barisan kita selalu 2 lebih besar.

```visual
{"type": "table", "head": ["n", "1", "2", "3", "4"], "rows": [["3n", "3", "6", "9", "12"], ["Tₙ", "5", "8", "11", "14"]], "caption": "Setiap suku selalu 2 lebih besar dari 3n"}
```

Jadi suku ke-$n$ adalah

$$T_n = 3n + 2$$

Aturannya: **beda tetap** menjadi koefisien $n$, lalu sesuaikan konstantanya dengan suku pertama.

### Menjumlah dan mengurangi bentuk linear

Gabungkan suku sejenis saja: $4x + 3 + 2x - 5 = 6x - 2$. Kantong $x$ digabung dengan kantong $x$, kelereng lepas dengan kelereng lepas.

### Tanda kurung

Angka di depan kurung dikalikan ke **setiap** suku di dalamnya:

$$3(x + 2) = 3x + 6$$

Alasannya: 3 paket, masing-masing berisi 1 kantong dan 2 kelereng, berarti total 3 kantong dan 6 kelereng. Hati-hati dengan tanda negatif: $-2(x - 4) = -2x + 8$.

```anim
{"type": "persamaan", "title": "Membuka kurung dengan tanda negatif", "baris": [{"tex": "-2(x - 4)", "say": "Angka −2 dikalikan ke setiap suku di dalam kurung."}, {"tex": "= (-2)(x) + (-2)(-4)", "say": "Tulis perkaliannya satu per satu.", "op": "kali tiap suku"}, {"tex": "= -2x + 8", "say": "Negatif kali negatif hasilnya positif."}]}
```

### Memfaktorkan dengan faktor persekutuan

Memfaktorkan adalah kebalikan membuka kurung: kita **mengemas ulang** menjadi paket-paket yang sama. Cari faktor persekutuan terbesar dari semua suku, lalu keluarkan:

$$12x - 18 = 6(2x - 3)$$

Artinya 6 paket, masing-masing berisi $2x - 3$.

```anim
{"type": "persamaan", "title": "Memfaktorkan 12x − 18", "baris": [{"tex": "12x - 18", "say": "Cari FPB dari 12 dan 18, yaitu 6."}, {"tex": "= 6 \\times 2x - 6 \\times 3", "say": "Tulis setiap suku sebagai 6 kali sesuatu.", "op": "FPB 6"}, {"tex": "= 6(2x - 3)", "say": "Keluarkan 6: 6 paket berisi 2x − 3."}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menghitung nilai

```soal
{
 "title": "Contoh 1",
 "text": "Hitung nilai $5a^2 - 2b$ jika $a = 3$ dan $b = -2$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Ganti huruf dengan angka dalam kurung.",
   "options": [
    "$5(3)^2 - 2(-2)$",
    "$53^2 - 2 - 2$",
    "$(5 \\times 3)^2 - 2(-2)$"
   ],
   "answer": "$5(3)^2 - 2(-2)$",
   "hint": "Huruf diganti angka, tanda kali tidak hilang.",
   "explain": "Kurung menjaga tanda negatif dan perkaliannya.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $5(3)^2 = ?$",
   "answer": "45",
   "hint": "Pangkat dulu: 3² = 9.",
   "explain": "$5 \\times 9 = 45$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $-2 \\times (-2) = ?$",
   "answer": "4",
   "hint": "Negatif kali negatif.",
   "explain": "+4.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: 45 + 4 = ?",
   "answer": "49",
   "hint": "Jumlahkan.",
   "explain": "49.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Nilainya 49."
}
```

### Contoh 2: Membuka kurung dan menyederhanakan

```soal
{
 "title": "Contoh 2",
 "text": "Sederhanakan $3(2x - 5) - 2(x - 4)$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: $3(2x - 5) = ?$",
   "options": [
    "$6x - 15$",
    "$6x - 5$",
    "$5x - 15$"
   ],
   "answer": "$6x - 15$",
   "hint": "Kalikan 3 ke setiap suku.",
   "explain": "$3 \\times 2x = 6x$, $3 \\times (-5) = -15$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: $-2(x - 4) = ?$",
   "options": [
    "$-2x + 8$",
    "$-2x - 8$",
    "$-2x - 4$"
   ],
   "answer": "$-2x + 8$",
   "hint": "Perhatikan tanda: (−2)(−4).",
   "explain": "Negatif kali negatif positif: +8.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Kumpulkan suku x. 6x − 2x = ?x",
   "answer": "4",
   "hint": "Kantong x digabung dengan kantong x.",
   "explain": "4x.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Kumpulkan konstanta. −15 + 8 = ?",
   "answer": "-7",
   "hint": "Kelereng lepas digabung.",
   "explain": "−7. Jadi hasilnya 4x − 7.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: masukkan x = 1 ke 4x − 7.",
   "answer": "-3",
   "hint": "4 − 7.",
   "explain": "−3, sama dengan bentuk awal 3(−3) − 2(−3) = −3.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Hasilnya $4x - 7$."
}
```

### Contoh 3: Suku ke-n

```soal
{
 "title": "Contoh 3",
 "text": "Susunan meja: 1 meja untuk 4 orang, 2 meja berjajar untuk 6 orang, 3 meja untuk 8 orang, dan seterusnya. Tuliskan banyak orang untuk n meja, lalu hitung untuk 20 meja.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Setiap tambah 1 meja, bertambah berapa orang?",
   "answer": "2",
   "hint": "4, 6, 8.",
   "explain": "Beda 2, jadi koefisien n adalah 2.",
   "error": "salah-aturan-pola"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: $2n$ memberi 2, 4, 6. Rumus suku ke-n adalah",
   "options": [
    "$T_n = 2n + 2$",
    "$T_n = 4n + 2$",
    "$T_n = 2n + 4$"
   ],
   "answer": "$T_n = 2n + 2$",
   "hint": "Barisan kita selalu berapa lebih besar dari 2n?",
   "explain": "Selalu 2 lebih besar.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Untuk n = 20, banyak orang?",
   "answer": "42",
   "hint": "2(20) + 2.",
   "explain": "42 orang.",
   "error": "salah-langkah-materi",
   "suffix": "orang"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: rumus untuk n = 3 memberi?",
   "answer": "8",
   "hint": "2(3) + 2.",
   "explain": "8, cocok dengan barisan.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$T_n = 2n + 2$; 20 meja untuk 42 orang.",
 "visual": {
  "type": "table",
  "head": [
   "Meja (n)",
   "1",
   "2",
   "3"
  ],
  "rows": [
   [
    "Orang",
    "4",
    "6",
    "8"
   ]
  ]
 }
}
```

### Contoh 4: Soal cerita dan faktorisasi

```soal
{
 "title": "Contoh 4",
 "text": "Made membeli x buku seharga Rp4.500 per buku dan 3 pulpen seharga y rupiah per pulpen. Ia membayar dengan Rp50.000. (a) Tulis kembalian dalam x dan y. (b) Hitung kembalian jika x = 6 dan y = 3.000. (c) Faktorkan 4.500x + 3y.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Kembalian dalam x dan y",
   "options": [
    "$50.000 - 4.500x - 3y$",
    "$50.000 - 4.500x + 3y$",
    "$4.500x + 3y - 50.000$"
   ],
   "answer": "$50.000 - 4.500x - 3y$",
   "hint": "Uang bayar dikurangi semua harga belanja.",
   "explain": "Harga buku 4.500x dan pulpen 3y, keduanya dikurangkan.",
   "error": "kembalian-terbalik"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kembalian jika x = 6 dan y = 3.000?",
   "answer": "14000",
   "hint": "50.000 − 27.000 − 9.000.",
   "explain": "Rp14.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: FPB dari 4.500 dan 3?",
   "answer": "3",
   "hint": "4.500 habis dibagi 3.",
   "explain": "FPB 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Faktorkan 4.500x + 3y.",
   "options": [
    "$3(1.500x + y)$",
    "$3(1.500x + 3y)$",
    "$4.500(x + 3y)$"
   ],
   "answer": "$3(1.500x + y)$",
   "hint": "Bagi setiap suku dengan 3.",
   "explain": "Cek: 3 × 1.500x = 4.500x dan 3 × y = 3y.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "(a) $50.000 - 4.500x - 3y$; (b) Rp14.000; (c) $3(1.500x + y)$."
}
```

## Kesalahan yang sering terjadi

- **Menggabungkan suku tidak sejenis.** Menulis $3x + 2 = 5x$. Salah, karena 2 kelereng lepas bukan kantong. Bentuk $3x + 2$ sudah paling sederhana.
- **Hanya mengalikan suku pertama dalam kurung.** Menulis $3(x + 2) = 3x + 2$. Setiap paket berisi 2 kelereng, jadi 3 paket berisi 6. Yang benar $3x + 6$.
- **Salah tanda saat ada negatif di depan kurung.** Menulis $-2(x - 4) = -2x - 8$. Negatif kali negatif hasilnya positif: $-2x + 8$.
- **Lupa kurung saat mengganti huruf negatif.** Untuk $b = -2$, menulis $-2b$ sebagai $-2 - 2$. Yang benar $-2(-2) = 4$.
- **Suku ke-n memakai suku pertama sebagai koefisien.** Untuk $5, 8, 11$ menulis $T_n = 5n + 3$. Koefisien $n$ harus beda tetap, yaitu 3.

## Ringkasan

- Huruf mewakili bilangan yang belum diketahui, seperti kantong tertutup.
- Hanya suku sejenis yang boleh digabung.
- Membuka kurung: kalikan ke setiap suku, perhatikan tanda.
- Suku ke-n pola linear: (beda) $\times n$ + penyesuaian.
- Memfaktorkan = mengeluarkan faktor persekutuan terbesar, kebalikan membuka kurung.
- Cek dengan memasukkan satu angka ke bentuk awal dan bentuk akhir.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung nilai $3p - q^2$ jika $p = 4$ dan $q = -3$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$(-3)^2 = ?$",
   "answer": "9",
   "hint": "Negatif kali negatif.",
   "explain": "(−3) × (−3) = 9.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$3(4) - 9 = ?$",
   "answer": "3",
   "hint": "Kurangkan.",
   "explain": "12 − 9 = 3.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Nilainya 3."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Sederhanakan $4(3y + 2) - 5(y - 1)$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "$-5(y - 1) = ?$",
   "options": [
    "$-5y + 5$",
    "$-5y - 5$",
    "$-5y - 1$"
   ],
   "answer": "$-5y + 5$",
   "hint": "(−5)(−1).",
   "explain": "Positif 5.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasil akhirnya",
   "options": [
    "$7y + 13$",
    "$7y + 3$",
    "$17y + 13$",
    "$7y + 7$"
   ],
   "answer": "$7y + 13$",
   "hint": "$12y + 8 - 5y + 5$.",
   "explain": "7y + 13.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$7y + 13$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Tentukan suku ke-$n$ dari pola $7, 11, 15, 19, \\ldots$ lalu hitung suku ke-25.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Bedanya?",
   "answer": "4",
   "hint": "11 − 7.",
   "explain": "Koefisien n adalah 4.",
   "error": "salah-aturan-pola"
  },
  {
   "kind": "choice",
   "prompt": "Rumus suku ke-n",
   "options": [
    "$T_n = 4n + 3$",
    "$T_n = 7n + 4$",
    "$T_n = 4n + 7$"
   ],
   "answer": "$T_n = 4n + 3$",
   "hint": "4n memberi 4, 8, 12. Selisihnya dengan barisan?",
   "explain": "Selalu 3 lebih besar.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Suku ke-25?",
   "answer": "103",
   "hint": "4(25) + 3.",
   "explain": "103.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$T_n = 4n + 3$, suku ke-25 = 103."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Faktorkan $15mn - 10m$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "FPB dari 15mn dan 10m",
   "options": [
    "$5m$",
    "$5$",
    "$m$",
    "$5mn$"
   ],
   "answer": "$5m$",
   "hint": "FPB angka 15 dan 10, lalu huruf yang ada di keduanya.",
   "explain": "5 dan m sama-sama ada.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Bentuk faktornya",
   "options": [
    "$5m(3n - 2)$",
    "$5(3mn - 2m)$",
    "$5m(3n - 10)$"
   ],
   "answer": "$5m(3n - 2)$",
   "hint": "Bagi setiap suku dengan 5m.",
   "explain": "$15mn \\div 5m = 3n$, $10m \\div 5m = 2$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$5m(3n - 2)$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Harga tiket kebun binatang a rupiah untuk dewasa dan b rupiah untuk anak. Keluarga Putu terdiri dari 2 dewasa dan 3 anak. Tulis total harga tiket, lalu hitung jika a = 25.000 dan b = 15.000.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Total harga tiket",
   "options": [
    "$2a + 3b$",
    "$3a + 2b$",
    "$5ab$",
    "$2a \\times 3b$"
   ],
   "answer": "$2a + 3b$",
   "hint": "2 tiket dewasa dan 3 tiket anak.",
   "explain": "2a + 3b.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Total jika a = 25.000 dan b = 15.000?",
   "answer": "95000",
   "hint": "50.000 + 45.000.",
   "explain": "Rp95.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Total Rp95.000."
}
```
