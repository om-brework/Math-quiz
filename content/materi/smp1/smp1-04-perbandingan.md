---
id: smp1-04-perbandingan
judul: Perbandingan
jenjang: smp1
moe: "Secondary 1 · Number and Algebra · N2 Ratio and proportion"
prasyarat: [sd6-03-perbandingan, smp1-01-prima-fpb-kpk, smp1-02-bilangan-bulat-real]
durasi_menit: 50
---

## Kenapa belajar ini?

Tukang bangunan mencampur semen dan pasir dengan perbandingan $1 : 2{,}5$. Resep kue menulis $\frac{3}{4}$ cangkir gula untuk setiap $1\frac{1}{2}$ cangkir tepung. Perbandingan di dunia nyata sering memakai pecahan dan desimal. Di materi ini kamu belajar menyederhanakan perbandingan seperti itu dan memakainya untuk menyelesaikan soal.

## Analogi

Bayangkan sebuah **resep adonan**. Resep menyebut takaran setiap bahan.

- Kalau semua takaran **dikalikan dengan bilangan yang sama**, adonan menjadi lebih banyak, tetapi **rasanya sama**.
- Kalau semua takaran **dibagi dengan bilangan yang sama**, adonan lebih sedikit, rasanya tetap sama.
- Kalau hanya satu bahan yang diubah, rasanya berubah.

```anim
{"type": "batang", "title": "Resep semen dan pasir 2 : 3", "bars": [{"label": "Semen", "units": 2}, {"label": "Pasir", "units": 3}], "langkah": [{"say": "Resep: 2 bagian semen.", "bars": 1}, {"say": "dan 3 bagian pasir. Perbandingannya 2 : 3.", "bars": 2}, {"say": "Kalau setiap bagian berisi 2 ember, takarannya 4 : 6 ember, tetapi pola 2 bagian : 3 bagian tidak berubah.", "bars": 2}]}
```

Perbandingan adalah "rasa" resep itu. Semua langkah menyederhanakan perbandingan sebenarnya adalah mengalikan atau membagi seluruh resep dengan bilangan yang sama.

## Konsep

### Perbandingan sebagai pecahan

Perbandingan $a : b$ (dengan $b \ne 0$) membandingkan dua besaran **bersatuan sama**. Nilainya sama dengan pecahan $\frac{a}{b}$.

**Kenapa boleh mengalikan semua suku dengan bilangan yang sama?** Untuk $k \ne 0$:

$$\frac{ka}{kb} = \frac{a}{b}$$

Mengalikan pembilang dan penyebut dengan $k$ tidak mengubah nilai pecahan. Jadi $a : b = ka : kb$. Ini sama dengan melipatgandakan seluruh resep.

Untuk tiga besaran, $a : b : c = ka : kb : kc$, karena setiap pasangan tetap senilai.

### Bentuk paling sederhana

Perbandingan dalam **bentuk paling sederhana** jika semua sukunya **bilangan bulat** dan **FPB-nya 1**.

Langkah umum:

1. Samakan satuan.
2. Hilangkan pecahan atau desimal dengan mengalikan semua suku.
3. Bagi semua suku dengan FPB.

### Perbandingan dengan pecahan

Kalikan semua suku dengan **KPK penyebut**. Mengapa KPK? Karena KPK adalah bilangan terkecil yang habis dibagi oleh semua penyebut, sehingga semua pecahan menjadi bilangan bulat dan angkanya tetap kecil.

```anim
{"type": "persamaan", "title": "Menghilangkan pecahan dengan KPK penyebut", "baris": [{"tex": "\\frac{1}{2} : \\frac{2}{3}", "say": "Penyebutnya 2 dan 3. KPK-nya 6."}, {"tex": "\\frac{1}{2} \\times 6 : \\frac{2}{3} \\times 6", "say": "Kalikan semua suku dengan 6.", "op": "× 6"}, {"tex": "3 : 4", "say": "FPB dari 3 dan 4 adalah 1. Sudah paling sederhana."}]}
```

### Perbandingan dengan desimal

Kalikan semua suku dengan $10$, $100$, atau $1.000$ sampai tidak ada desimal. Pilih berdasarkan desimal yang **paling banyak** tempat desimalnya.

$$0{,}6 : 1{,}5 \quad \xrightarrow{\times 10} \quad 6 : 15 \quad \xrightarrow{\div 3} \quad 2 : 5$$

### Perbandingan campuran pecahan dan desimal

Ubah semuanya ke pecahan (atau semuanya ke desimal) lebih dulu. Contoh: $0{,}4 : \frac{3}{5} = \frac{2}{5} : \frac{3}{5} = 2 : 3$.

### Menggabungkan dua perbandingan

Jika $A : B = 2 : 3$ dan $B : C = 4 : 5$, suku $B$ belum sama (3 dan 4). Samakan $B$ dengan KPK-nya, yaitu 12:

$$A : B = 8 : 12, \qquad B : C = 12 : 15$$

```anim
{"type": "batang", "title": "Menyamakan suku B", "bars": [{"label": "A", "units": 8}, {"label": "B", "units": 12}, {"label": "C", "units": 15}], "langkah": [{"say": "A : B = 2 : 3 dikalikan 4 menjadi 8 : 12.", "bars": 2}, {"say": "B : C = 4 : 5 dikalikan 3 menjadi 12 : 15. Suku B sama-sama 12 unit.", "bars": 3}]}
```

Maka $A : B : C = 8 : 12 : 15$. Ini sah karena kita hanya mengalikan setiap "resep" dengan bilangan yang sama.

### Total tetap dan selisih tetap

Pada soal "sebelum dan sesudah", cari besaran yang **tidak berubah**:

- Jika barang hanya **berpindah** antar orang, **total** tetap.
- Jika keduanya **ditambah atau dikurangi sama banyak**, **selisih** tetap.

Samakan satuan "unit" pada besaran yang tetap itu.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Perbandingan pecahan

```soal
{
 "title": "Contoh 1",
 "text": "Sederhanakan $\\frac{3}{4} : \\frac{5}{6}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: KPK dari penyebut 4 dan 6 adalah?",
   "answer": "12",
   "hint": "Kelipatan 6: 6, 12, ... Mana yang habis dibagi 4?",
   "explain": "KPK-nya 12.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\frac{3}{4} \\times 12 = ?$",
   "answer": "9",
   "hint": "$12 \\div 4 \\times 3$.",
   "explain": "Suku pertama menjadi 9.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\frac{5}{6} \\times 12 = ?$",
   "answer": "10",
   "hint": "$12 \\div 6 \\times 5$.",
   "explain": "Suku kedua menjadi 10.",
   "error": "salah-pengali-senilai"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: FPB dari 9 dan 10 adalah?",
   "answer": "1",
   "hint": "Apakah ada faktor bersama selain 1?",
   "explain": "FPB 1, jadi 9 : 10 sudah paling sederhana.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Cek jawaban: $\\frac{3}{4} \\div \\frac{5}{6} = ?$",
   "answer": {
    "num": 9,
    "den": 10
   },
   "hint": "Kalikan dengan kebalikan.",
   "explain": "$\\frac{18}{20} = \\frac{9}{10}$, sama dengan $9 : 10$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "Jadi hasilnya 9 : 10."
}
```

### Contoh 2: Desimal dan satuan berbeda

```soal
{
 "title": "Contoh 2",
 "text": "Sederhanakan (a) $1{,}2 : 0{,}45$; (b) $2{,}5$ kg $: 750$ g.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: (a) Kalikan dengan 100. $0{,}45$ menjadi 45, dan $1{,}2$ menjadi?",
   "answer": "120",
   "hint": "Geser koma dua tempat ke kanan.",
   "explain": "120 : 45.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: (a) FPB dari 120 dan 45?",
   "answer": "15",
   "hint": "$120 = 2^3 \\times 3 \\times 5$, $45 = 3^2 \\times 5$.",
   "explain": "Bagi 15: 8 : 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: (b) Samakan satuan. 2,5 kg = ? g",
   "answer": "2500",
   "hint": "1 kg = 1.000 g.",
   "explain": "2.500 : 750.",
   "error": "banding-tanpa-samakan-satuan",
   "suffix": "g"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: (b) Bentuk paling sederhana dari 2.500 : 750",
   "options": [
    "10 : 3",
    "100 : 30",
    "1 : 300",
    "5 : 3"
   ],
   "answer": "10 : 3",
   "hint": "Bagi keduanya dengan 250.",
   "explain": "2.500 ÷ 250 = 10, 750 ÷ 250 = 3.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "(a) 8 : 3; (b) 10 : 3."
}
```

### Contoh 3: Menggabungkan perbandingan

```soal
{
 "title": "Contoh 3",
 "text": "Perbandingan siswa yang memilih futsal dan basket adalah $1\\frac{1}{2} : 2$, sedangkan basket dan voli $0{,}8 : 1$. Tentukan futsal : basket : voli dalam bentuk paling sederhana.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Sederhanakan $1\\frac{1}{2} : 2$.",
   "options": [
    "3 : 4",
    "1 : 2",
    "3 : 2"
   ],
   "answer": "3 : 4",
   "hint": "$1\\frac{1}{2} = \\frac{3}{2}$, lalu kalikan semua suku dengan 2.",
   "explain": "$\\frac{3}{2} \\times 2 = 3$, $2 \\times 2 = 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Sederhanakan $0{,}8 : 1$.",
   "options": [
    "4 : 5",
    "8 : 1",
    "8 : 10"
   ],
   "answer": "4 : 5",
   "hint": "Kalikan 10, lalu bagi FPB.",
   "explain": "8 : 10 = 4 : 5.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Suku basket bernilai berapa di kedua perbandingan?",
   "answer": "4",
   "hint": "Lihat suku kedua pada 3 : 4 dan suku pertama pada 4 : 5.",
   "explain": "Keduanya 4, sudah sama.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Gabungkan futsal : basket : voli.",
   "options": [
    "3 : 4 : 5",
    "3 : 8 : 5",
    "3 : 4 : 4 : 5"
   ],
   "answer": "3 : 4 : 5",
   "hint": "Suku basket ditulis sekali.",
   "explain": "3 : 4 : 5.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Futsal : basket : voli = 3 : 4 : 5."
}
```

### Contoh 4: Soal cerita, total tetap

```soal
{
 "title": "Contoh 4",
 "text": "Perbandingan uang Rina dan Sari adalah 7 : 4. Rina memberikan Rp30.000 kepada Sari, sehingga perbandingannya menjadi 4 : 7. Berapa uang masing-masing mula-mula?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Besaran apa yang tetap?",
   "options": [
    "Total uang mereka",
    "Selisih uang mereka",
    "Uang Sari"
   ],
   "answer": "Total uang mereka",
   "hint": "Uang hanya berpindah dari Rina ke Sari.",
   "explain": "Total tetap, sebelum dan sesudah sama-sama 11 unit.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Uang Rina turun dari 7 unit menjadi 4 unit. Berkurang berapa unit?",
   "answer": "3",
   "hint": "7 − 4.",
   "explain": "3 unit inilah Rp30.000 yang berpindah.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Nilai 1 unit?",
   "answer": "10000",
   "hint": "Rp30.000 dibagi 3 unit.",
   "explain": "1 unit = Rp10.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Uang Rina mula-mula?",
   "answer": "70000",
   "hint": "7 unit.",
   "explain": "7 × Rp10.000 = Rp70.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Uang Sari mula-mula?",
   "answer": "40000",
   "hint": "4 unit.",
   "explain": "4 × Rp10.000 = Rp40.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: sesudah memberi, Rina Rp40.000 dan Sari Rp70.000. Perbandingannya",
   "options": [
    "4 : 7",
    "7 : 4",
    "4 : 3"
   ],
   "answer": "4 : 7",
   "hint": "Bagi keduanya dengan 10.000.",
   "explain": "4 : 7, sesuai soal.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Mula-mula uang Rina Rp70.000 dan uang Sari Rp40.000.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Rina",
    "units": 7
   },
   {
    "label": "Sari",
    "units": 4
   }
  ],
  "total": "11 unit"
 }
}
```

## Kesalahan yang sering terjadi

- **Hanya mengalikan satu suku.** $\frac{1}{2} : 3$ diubah menjadi $1 : 3$ (hanya suku pertama dikali 2). Itu mengubah resep. Kalikan semua suku: $1 : 6$.
- **Berhenti sebelum paling sederhana.** $1{,}2 : 0{,}45$ dijawab $120 : 45$. Masih bisa dibagi 15. Jawaban akhir harus bilangan bulat dengan FPB 1.
- **Lupa menyamakan satuan.** $2{,}5$ kg $: 750$ g ditulis $2{,}5 : 750 = 1 : 300$. Salah, karena kilogram dan gram dibandingkan langsung.
- **Menggabungkan tanpa menyamakan suku tengah.** Dari $A : B = 2 : 3$ dan $B : C = 4 : 5$, menulis $A : B : C = 2 : 3 : 5$ atau $2 : 4 : 5$. Suku $B$ harus disamakan dulu: $8 : 12 : 15$.
- **Memakai unit yang berbeda nilainya.** Pada soal sebelum dan sesudah, menganggap "1 unit" sama padahal total unitnya berbeda. Samakan dulu jumlah unit pada besaran yang tetap.

## Ringkasan

- $a : b = \frac{a}{b}$, sehingga $a : b = ka : kb$ untuk $k \ne 0$. Ini seperti melipatgandakan seluruh resep.
- Bentuk paling sederhana: semua suku bilangan bulat dengan FPB 1.
- Pecahan: kalikan dengan KPK penyebut. Desimal: kalikan dengan 10, 100, atau 1.000.
- Samakan satuan sebelum membandingkan.
- Gabungkan $A : B$ dan $B : C$ dengan menyamakan suku $B$ memakai KPK.
- Soal sebelum dan sesudah: cari yang tetap (total atau selisih), samakan unitnya.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Sederhanakan $\\frac{2}{5} : \\frac{3}{10}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "KPK penyebut 5 dan 10?",
   "answer": "10",
   "hint": "10 habis dibagi 5.",
   "explain": "Kalikan semua suku dengan 10.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasilnya",
   "options": [
    "4 : 3",
    "2 : 3",
    "3 : 4",
    "20 : 30"
   ],
   "answer": "4 : 3",
   "hint": "$\\frac{2}{5} \\times 10$ dan $\\frac{3}{10} \\times 10$.",
   "explain": "4 : 3, FPB 1.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "4 : 3."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Sederhanakan $0{,}35 : 1{,}4$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Kalikan dengan 100, menjadi",
   "options": [
    "35 : 140",
    "35 : 14",
    "3,5 : 14"
   ],
   "answer": "35 : 140",
   "hint": "Kalikan kedua suku dengan bilangan yang sama.",
   "explain": "35 : 140.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "FPB dari 35 dan 140?",
   "answer": "35",
   "hint": "140 = 4 × 35.",
   "explain": "Bagi 35.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Bentuk paling sederhana",
   "options": [
    "1 : 4",
    "7 : 28",
    "4 : 1"
   ],
   "answer": "1 : 4",
   "hint": "35 ÷ 35 dan 140 ÷ 35.",
   "explain": "1 : 4.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "1 : 4."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Sederhanakan $1{,}5$ jam $: 40$ menit.",
 "steps": [
  {
   "kind": "number",
   "prompt": "1,5 jam = ? menit",
   "answer": "90",
   "hint": "1 jam = 60 menit.",
   "explain": "90 menit.",
   "error": "banding-tanpa-samakan-satuan",
   "suffix": "menit"
  },
  {
   "kind": "choice",
   "prompt": "90 : 40 dalam bentuk paling sederhana",
   "options": [
    "9 : 4",
    "3 : 40",
    "90 : 40",
    "4 : 9"
   ],
   "answer": "9 : 4",
   "hint": "Bagi 10.",
   "explain": "9 : 4.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "9 : 4."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Diketahui $P : Q = 3 : 4$ dan $Q : R = 6 : 5$. Tentukan $P : Q : R$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "KPK suku Q (4 dan 6)?",
   "answer": "12",
   "hint": "Kelipatan 6 yang habis dibagi 4.",
   "explain": "Samakan Q menjadi 12.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "P : Q menjadi",
   "options": [
    "9 : 12",
    "3 : 12",
    "6 : 8"
   ],
   "answer": "9 : 12",
   "hint": "Kalikan 3 : 4 dengan 3.",
   "explain": "9 : 12.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Q : R menjadi 12 : ?, jadi P : Q : R =",
   "options": [
    "9 : 12 : 10",
    "3 : 4 : 5",
    "9 : 12 : 5",
    "3 : 6 : 5"
   ],
   "answer": "9 : 12 : 10",
   "hint": "Kalikan 6 : 5 dengan 2.",
   "explain": "12 : 10, jadi 9 : 12 : 10.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "P : Q : R = 9 : 12 : 10."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Pak Wayan mencampur semen dan pasir dengan perbandingan $1 : 2{,}5$. Ia memakai 14 karung campuran. Berapa karung semen dan berapa karung pasir?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "$1 : 2{,}5$ dalam bilangan bulat",
   "options": [
    "2 : 5",
    "1 : 25",
    "10 : 25 tidak bisa disederhanakan"
   ],
   "answer": "2 : 5",
   "hint": "Kalikan 2.",
   "explain": "2 : 5, total 7 unit.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "1 unit = ? karung",
   "answer": "2",
   "hint": "14 karung dibagi 7 unit.",
   "explain": "2 karung per unit.",
   "error": "salah-langkah-materi",
   "suffix": "karung"
  },
  {
   "kind": "number",
   "prompt": "Banyak karung semen",
   "answer": "4",
   "hint": "2 unit.",
   "explain": "2 × 2 = 4 karung.",
   "error": "salah-langkah-materi",
   "suffix": "karung"
  },
  {
   "kind": "number",
   "prompt": "Banyak karung pasir",
   "answer": "10",
   "hint": "5 unit.",
   "explain": "5 × 2 = 10 karung.",
   "error": "salah-langkah-materi",
   "suffix": "karung"
  }
 ],
 "conclusion": "4 karung semen dan 10 karung pasir.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Semen",
    "units": 2
   },
   {
    "label": "Pasir",
    "units": 5
   }
  ],
  "total": "14 karung"
 }
}
```
