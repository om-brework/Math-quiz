---
id: smp2-11-ukuran-pemusatan
judul: Penyajian Data Lanjut dan Ukuran Pemusatan
jenjang: smp2
moe: "Secondary 2 · Statistics and Probability · S1 Data analysis"
prasyarat: [smp1-12-penyajian-data]
durasi_menit: 55
---

## Kenapa belajar ini?

Wali kelas ingin tahu "nilai ulangan kelas kita kira-kira berapa?". Toko sepatu ingin tahu ukuran apa yang paling banyak dibeli. Untuk menjawab, kita perlu menyajikan data dengan rapi lalu memilih **satu angka wakil** yang menggambarkan seluruh data.

## Analogi

Bayangkan kelasmu harus memilih **satu wakil** untuk mewakili sekelompok data. Ada tiga cara memilih wakil, masing-masing dengan cerita sendiri:

- **Rata-rata (mean): kumpulkan lalu bagi rata.** Semua anak mengumpulkan permennya ke satu kantong, lalu permen dibagi sama banyak. Banyak permen per anak itulah rata-rata.
- **Median: anak yang berdiri di tengah barisan.** Semua anak berbaris urut dari yang terpendek ke yang tertinggi. Anak yang berdiri tepat di tengah adalah median.
- **Modus: yang paling laris.** Di toko sepatu, ukuran yang paling sering dibeli adalah modus.

Ketiga wakil ini kita pakai terus di setiap contoh. Wakil mana yang paling adil bergantung pada datanya.

```anim
{"type": "batang", "title": "Kumpulkan lalu bagi rata", "bars": [{"label": "Ani", "units": 2, "unitValue": "1 permen"}, {"label": "Budi", "units": 6}, {"label": "Citra", "units": 4}], "total": "12 permen di kantong", "question": "12 ÷ 3 = 4 permen per anak", "langkah": [{"say": "Ani punya 2 permen.", "bars": 1}, {"say": "Budi 6 permen, Citra 4 permen. Banyaknya berbeda-beda.", "bars": 3}, {"say": "Kumpulkan semua ke satu kantong: 2 + 6 + 4 = 12 permen.", "bars": 3, "total": true}, {"say": "Bagi rata ke 3 anak: masing-masing 4. Itulah rata-ratanya.", "bars": 3, "total": true, "question": true}]}
```

## Konsep

### Diagram titik

**Diagram titik** menaruh satu titik (atau tanda $\times$) di atas garis bilangan untuk setiap data. Cocok untuk data sedikit, dan langsung memperlihatkan nilai yang sering muncul dan nilai yang menyendiri.

```visual
{"type": "pictogram", "item": "kelereng", "scale": 1, "title": "Nilai ulangan 10 siswa", "rows": [{"label": "Nilai 5", "value": 1}, {"label": "Nilai 6", "value": 2}, {"label": "Nilai 7", "value": 2}, {"label": "Nilai 8", "value": 3}, {"label": "Nilai 9", "value": 1}, {"label": "Nilai 10", "value": 1}], "caption": "Diagram titik (dibaringkan): setiap bulatan adalah satu siswa."}
```

### Diagram batang-daun

**Diagram batang-daun** memecah setiap data menjadi **batang** (angka depan) dan **daun** (angka terakhir). Daun ditulis urut dari kecil ke besar. Diagram ini selalu memerlukan **keterangan**, misalnya "4 | 1 berarti 41". Kelebihannya: bentuk sebaran terlihat seperti diagram batang, tetapi data aslinya tidak hilang.

```visual
{"type": "table", "head": ["Batang", "Daun"], "rows": [["3", "8 9"], ["4", "1 2 5 5 5 7 8"], ["5", "0 3"]], "caption": "Keterangan: 4 | 1 berarti 41 kg."}
```

### Histogram

**Histogram** dipakai untuk data **kontinu** (berat, tinggi, waktu) yang dikelompokkan dalam kelas, misalnya $10 < t \le 20$. Bedanya dengan diagram batang:

- batang histogram **saling menempel** tanpa celah, karena kelasnya bersambung,
- sumbu mendatar adalah garis bilangan kontinu, bukan nama kategori.

Pada materi ini lebar semua kelas sama, sehingga tinggi batang menunjukkan frekuensi.

```visual
{"type": "barChart", "scaleStep": 2, "max": 12, "unit": "siswa", "title": "Waktu perjalanan ke sekolah (menit)", "bars": [{"label": "0–10", "value": 5}, {"label": "10–20", "value": 12}, {"label": "20–30", "value": 8}, {"label": "30–40", "value": 5}], "caption": "Pada histogram sungguhan, batang-batang ini digambar saling menempel."}
```

### Rata-rata, median, modus

Untuk data $x_1, x_2, \ldots, x_n$:

$$\text{rata-rata} = \bar{x} = \frac{\text{jumlah semua data}}{\text{banyak data}} = \frac{\sum x}{n}$$

**Kenapa begitu?** Ini persis "kumpulkan lalu bagi rata". Jumlah semua data adalah isi kantong; dibagi $n$ adalah bagian tiap anak.

**Median**: urutkan data dulu.

- Jika $n$ ganjil, median adalah data ke-$\frac{n+1}{2}$.
- Jika $n$ genap, median adalah rata-rata dua data di tengah, yaitu data ke-$\frac{n}{2}$ dan ke-$\left(\frac{n}{2} + 1\right)$.

**Modus**: data yang paling sering muncul. Data bisa punya satu modus, lebih dari satu modus, atau tidak punya modus.

### Kegunaan masing-masing

| Ukuran | Kelebihan | Kekurangan | Cocok untuk |
|---|---|---|---|
| Rata-rata | Memakai semua data | Mudah tertarik oleh nilai ekstrem | Data tanpa nilai yang sangat menyimpang |
| Median | Tidak terpengaruh nilai ekstrem | Tidak memakai semua nilai | Data dengan nilai ekstrem, misalnya uang saku atau harga rumah |
| Modus | Bisa untuk data bukan angka | Bisa tidak ada atau lebih dari satu | Ukuran sepatu, warna favorit |

### Rata-rata data berkelompok

Jika data sudah dikelompokkan dalam kelas, nilai aslinya tidak diketahui. Kita **menaksir** dengan menganggap setiap data dalam satu kelas bernilai **nilai tengah** kelas itu.

$$\bar{x} \approx \frac{\sum f x}{\sum f}$$

dengan $f$ frekuensi dan $x$ nilai tengah kelas. Ini tetap "kumpulkan lalu bagi rata": $f x$ adalah isi kantong dari satu kelas. Kelas dengan frekuensi terbesar disebut **kelas modus**.

## Contoh langkah demi langkah

Urutan berpikir: **urutkan atau tabelkan data → hitung yang diminta → tafsirkan → cek**.

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Data dari diagram titik

```soal
{
 "title": "Data dari diagram titik",
 "text": "Nilai ulangan 10 siswa: 7, 8, 6, 9, 8, 5, 8, 7, 10, 6. Tentukan rata-rata, median, dan modus.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 2: Jumlah semua nilai?",
   "answer": "74",
   "hint": "Kumpulkan semuanya ke satu kantong.",
   "explain": "Jumlahnya 74.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2 (lanjutan): Rata-rata?",
   "answer": "7,4",
   "hint": "Bagi jumlah dengan banyak data.",
   "explain": "74 ÷ 10 = 7,4.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Data urut 5, 6, 6, 7, 7, 8, 8, 8, 9, 10. Dua data tengahnya?",
   "options": [
    "Data ke-5 dan ke-6: 7 dan 8",
    "Data ke-5: 7",
    "Data ke-6 dan ke-7: 8 dan 8"
   ],
   "answer": "Data ke-5 dan ke-6: 7 dan 8",
   "hint": "n = 10 genap.",
   "explain": "Data ke-5 = 7 dan ke-6 = 8.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3 (lanjutan): Median?",
   "answer": "7,5",
   "hint": "Rata-ratakan dua data tengah.",
   "explain": "(7 + 8) ÷ 2 = 7,5.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Modus?",
   "answer": "8",
   "hint": "Baris bulatan terpanjang.",
   "explain": "8 muncul 3 kali, terbanyak.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: banyak bulatan seluruhnya?",
   "answer": "10",
   "hint": "Jumlahkan bulatan tiap baris.",
   "explain": "1 + 2 + 2 + 3 + 1 + 1 = 10, cocok dengan banyak siswa.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Rata-rata 7,4; median 7,5; modus 8.",
 "visual": {
  "type": "pictogram",
  "item": "kelereng",
  "scale": 1,
  "title": "Nilai ulangan",
  "rows": [
   {
    "label": "Nilai 5",
    "value": 1
   },
   {
    "label": "Nilai 6",
    "value": 2
   },
   {
    "label": "Nilai 7",
    "value": 2
   },
   {
    "label": "Nilai 8",
    "value": 3
   },
   {
    "label": "Nilai 9",
    "value": 1
   },
   {
    "label": "Nilai 10",
    "value": 1
   }
  ]
 }
}
```

### Contoh 2: Diagram batang-daun

```soal
{
 "title": "Diagram batang-daun",
 "text": "Berat badan (kg) 11 siswa: 38, 41, 45, 42, 50, 47, 39, 45, 53, 45, 48. Diagram batang-daunnya ditunjukkan di bawah. Tentukan median, modus, dan rata-rata (1 tempat desimal).",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 2: Median adalah data ke berapa?",
   "answer": "6",
   "hint": "$n = 11$ ganjil: data ke-$\\frac{n + 1}{2}$.",
   "explain": "Data ke-6.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2 (lanjutan): Median?",
   "answer": "45",
   "hint": "Hitung dari daun pertama: 38, 39, 41, ...",
   "explain": "Data ke-6 adalah 45 kg.",
   "error": "salah-langkah-materi",
   "suffix": "kg"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Modus?",
   "answer": "45",
   "hint": "Daun yang paling sering muncul pada satu batang.",
   "explain": "Daun 5 pada batang 4 muncul 3 kali: 45 kg.",
   "error": "salah-langkah-materi",
   "suffix": "kg"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Jumlah semua berat?",
   "answer": "493",
   "hint": "Jumlahkan per batang.",
   "explain": "Jumlahnya 493.",
   "error": "salah-langkah-materi",
   "suffix": "kg"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4 (lanjutan): Rata-rata (1 desimal)?",
   "answer": "44,8",
   "hint": "493 ÷ 11.",
   "explain": "≈ 44,8 kg.",
   "error": "salah-langkah-materi",
   "suffix": "kg"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: banyak daun seluruhnya?",
   "answer": "11",
   "hint": "2 + 7 + 2.",
   "explain": "11, cocok dengan banyak siswa.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Median 45 kg, modus 45 kg, rata-rata ≈ 44,8 kg.",
 "visual": {
  "type": "table",
  "head": [
   "Batang",
   "Daun"
  ],
  "rows": [
   [
    "3",
    "8 9"
   ],
   [
    "4",
    "1 2 5 5 5 7 8"
   ],
   [
    "5",
    "0 3"
   ]
  ]
 }
}
```

### Contoh 3: Soal cerita, memilih wakil yang adil

```soal
{
 "title": "Soal cerita, memilih wakil yang adil",
 "text": "Uang saku harian 6 siswa: Rp10.000, Rp12.000, Rp10.000, Rp15.000, Rp13.000, dan Rp100.000. Ukuran mana yang paling tepat menggambarkan uang saku \"biasa\"?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 2: Rata-rata, dibulatkan ke rupiah terdekat?",
   "answer": "26.667",
   "hint": "Jumlahnya 160.000, bagi 6.",
   "explain": "≈ Rp26.667.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Median?",
   "answer": "12.500",
   "hint": "Urutkan dulu, lalu rata-ratakan data ke-3 dan ke-4.",
   "explain": "(12.000 + 13.000) ÷ 2 = 12.500.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Modus?",
   "answer": "10.000",
   "hint": "Nilai yang muncul dua kali.",
   "explain": "Rp10.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Wakil yang paling tepat?",
   "options": [
    "Median",
    "Rata-rata",
    "Modus"
   ],
   "answer": "Median",
   "hint": "Lima dari enam siswa menerima Rp15.000 atau kurang. Mana yang tidak tertarik nilai ekstrem?",
   "explain": "Rp100.000 menarik rata-rata ke atas; median tetap di tengah.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: kalau Rp100.000 diganti Rp14.000, mediannya?",
   "answer": "12.500",
   "hint": "Urutkan ulang; dua data tengah tetap sama.",
   "explain": "Tetap Rp12.500. Median stabil.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Median (Rp12.500) paling tepat."
}
```

### Contoh 4: Rata-rata data berkelompok

```soal
{
 "title": "Rata-rata data berkelompok",
 "text": "Waktu perjalanan 30 siswa dari rumah ke sekolah dicatat dalam tabel. Taksir rata-ratanya (1 desimal) dan tentukan kelas modus.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Nilai tengah kelas $10 < t \\le 20$?",
   "answer": "15",
   "hint": "(10 + 20) ÷ 2.",
   "explain": "15. Nilai tengah lainnya 5, 25, 35.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $f x$ untuk kelas $10 < t \\le 20$?",
   "answer": "180",
   "hint": "12 × 15.",
   "explain": "180.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2 (lanjutan): $\\sum f x$?",
   "answer": "580",
   "hint": "25 + 180 + 200 + 175.",
   "explain": "580.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Rata-rata $\\approx \\frac{580}{30}$ (1 desimal)?",
   "answer": "19,3",
   "hint": "Bagi dengan jumlah frekuensi, bukan banyak kelas.",
   "explain": "≈ 19,3 menit.",
   "error": "salah-langkah-materi",
   "suffix": "menit"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Kelas modus?",
   "options": [
    "$10 < t \\le 20$",
    "$0 < t \\le 10$",
    "$20 < t \\le 30$"
   ],
   "answer": "$10 < t \\le 20$",
   "hint": "Kelas dengan frekuensi terbesar.",
   "explain": "Frekuensi 12, terbesar.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: jumlah frekuensi?",
   "answer": "30",
   "hint": "5 + 12 + 8 + 5.",
   "explain": "30, cocok dengan banyak siswa.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Rata-rata sekitar 19,3 menit; kelas modus $10 < t \\le 20$.",
 "visual": {
  "type": "table",
  "head": [
   "Waktu t (menit)",
   "f",
   "Nilai tengah x",
   "f × x"
  ],
  "rows": [
   [
    "0 < t ≤ 10",
    "5",
    "5",
    "25"
   ],
   [
    "10 < t ≤ 20",
    "12",
    "?",
    "?"
   ],
   [
    "20 < t ≤ 30",
    "8",
    "25",
    "200"
   ],
   [
    "30 < t ≤ 40",
    "5",
    "35",
    "175"
   ]
  ]
 }
}
```

## Kesalahan yang sering terjadi

- **Mencari median tanpa mengurutkan.** Dari 7, 8, 6, 9, 8 mengambil angka tengah 6. Barisan harus diurutkan dulu: 6, 7, 8, 8, 9, jadi median 8.
- **Median data genap.** Untuk $n = 10$, mengambil data ke-5 saja. Untuk $n$ genap, rata-ratakan dua data tengah.
- **Lupa keterangan batang-daun.** Tanpa keterangan, "4 | 1" bisa berarti 41, 4,1, atau 410.
- **Rata-rata berkelompok dibagi banyak kelas.** Menghitung $\frac{580}{4}$. Pembaginya jumlah frekuensi, $\sum f = 30$, bukan banyak kelas.
- **Menjumlahkan nilai tengah tanpa dikali frekuensi.** $5 + 15 + 25 + 35$ hanya menghitung satu anak per kelas. Setiap nilai tengah harus dikali frekuensinya.

## Ringkasan

- Diagram titik dan batang-daun menyimpan setiap data; histogram dipakai untuk data kontinu berkelompok dengan batang menempel.
- Rata-rata $= \frac{\sum x}{n}$ (kumpulkan lalu bagi rata); median = nilai tengah data urut; modus = nilai paling sering.
- Median lebih tepat jika ada nilai ekstrem; modus cocok untuk data kategori; rata-rata memakai semua data.
- Rata-rata data berkelompok: $\bar{x} \approx \frac{\sum f x}{\sum f}$ dengan $x$ nilai tengah kelas.
- Selalu cek: banyak data cocok, dan wakil berada di rentang data.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tentukan rata-rata, median, dan modus dari 4, 7, 7, 9, 13.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Rata-rata?",
   "answer": "8",
   "hint": "Jumlah 40 dibagi 5.",
   "explain": "40 ÷ 5 = 8.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Median?",
   "answer": "7",
   "hint": "Data sudah urut; ambil data ke-3.",
   "explain": "Data ke-3 adalah 7.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Modus?",
   "answer": "7",
   "hint": "Paling sering muncul.",
   "explain": "7 muncul dua kali.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Rata-rata 8, median 7, modus 7."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Tentukan median dari 12, 5, 9, 20, 15, 8.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Data setelah diurutkan?",
   "options": [
    "5, 8, 9, 12, 15, 20",
    "12, 5, 9, 20, 15, 8",
    "20, 15, 12, 9, 8, 5"
   ],
   "answer": "5, 8, 9, 12, 15, 20",
   "hint": "Dari terkecil ke terbesar.",
   "explain": "5, 8, 9, 12, 15, 20.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Median?",
   "answer": "10,5",
   "hint": "n = 6 genap: rata-ratakan data ke-3 dan ke-4.",
   "explain": "(9 + 12) ÷ 2 = 10,5.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Median 10,5."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Diagram batang-daun (keterangan 2 | 0 berarti 20) menunjukkan skor 8 peserta lomba. Tentukan median, modus, dan rata-rata.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Median?",
   "answer": "21,5",
   "hint": "n = 8: rata-ratakan data ke-4 dan ke-5, yaitu 20 dan 23.",
   "explain": "(20 + 23) ÷ 2 = 21,5.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Modus?",
   "answer": "23",
   "hint": "Daun yang berulang.",
   "explain": "23 muncul dua kali.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Rata-rata?",
   "answer": "21,125",
   "hint": "Jumlah 169 dibagi 8.",
   "explain": "169 ÷ 8 = 21,125.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Median 21,5; modus 23; rata-rata 21,125.",
 "visual": {
  "type": "table",
  "head": [
   "Batang",
   "Daun"
  ],
  "rows": [
   [
    "1",
    "2 5 8"
   ],
   [
    "2",
    "0 3 3 7"
   ],
   [
    "3",
    "1"
   ]
  ]
 }
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Rata-rata nilai 5 ulangan Budi adalah 76. Setelah ulangan keenam dengan nilai 88, berapa rata-rata barunya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jumlah 5 nilai pertama?",
   "answer": "380",
   "hint": "Rata-rata × banyak data.",
   "explain": "5 × 76 = 380.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Jumlah 6 nilai?",
   "answer": "468",
   "hint": "Tambahkan 88.",
   "explain": "380 + 88 = 468.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Rata-rata baru?",
   "answer": "78",
   "hint": "Bagi 6.",
   "explain": "468 ÷ 6 = 78.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Rata-rata barunya 78."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Berat 20 paket: 4 paket di kelas $0 < m \\le 2$ kg, 10 paket di kelas $2 < m \\le 4$ kg, dan 6 paket di kelas $4 < m \\le 6$ kg. Taksir rata-rata berat paket.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\sum f x$ dengan nilai tengah 1, 3, 5?",
   "answer": "64",
   "hint": "4 × 1 + 10 × 3 + 6 × 5.",
   "explain": "4 + 30 + 30 = 64.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Rata-rata?",
   "answer": "3,2",
   "hint": "Bagi dengan 20.",
   "explain": "64 ÷ 20 = 3,2 kg.",
   "error": "salah-langkah-materi",
   "suffix": "kg"
  }
 ],
 "conclusion": "Rata-rata sekitar 3,2 kg."
}
```
