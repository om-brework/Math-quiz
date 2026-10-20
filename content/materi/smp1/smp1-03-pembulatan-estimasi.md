---
id: smp1-03-pembulatan-estimasi
judul: Pembulatan dan Estimasi
jenjang: smp1
moe: "Secondary 1 · Number and Algebra · N1 Numbers and their operations (Approximation and Estimation)"
prasyarat: [sd4-01-bilangan-sampai-100000, sd4-08-operasi-desimal, smp1-02-bilangan-bulat-real]
durasi_menit: 50
---

## Kenapa belajar ini?

Kalkulator sering memberi jawaban seperti $2{,}4916279\ldots$, padahal kita hanya butuh dua angka di belakang koma. Di kasir, kita ingin tahu dengan cepat apakah total belanja masuk akal. Pembulatan membuat bilangan lebih ringkas, dan estimasi membantu kita mendeteksi kesalahan hitung.

## Analogi

Bayangkan sebuah **jalan lurus dengan halte bus** pada jarak yang sama. Kamu berdiri di suatu titik di antara dua halte dan harus naik bus dari **halte terdekat**.

- Kalau kamu lebih dekat ke halte belakang, kamu mundur ke sana (**bulatkan ke bawah**).
- Kalau lebih dekat ke halte depan, kamu maju (**bulatkan ke atas**).
- Kalau tepat di tengah, aturannya: **maju** ke halte depan.

Jarak antarhalte ditentukan oleh "ketelitian" yang diminta. Membulatkan ke 1 tempat desimal berarti halte ada setiap 0,1. Membulatkan ke 2 tempat desimal berarti halte ada setiap 0,01.

```visual
{"type": "numberLine", "from": 9.9, "to": 10.0, "step": 0.01, "marks": [9.96], "jumps": [{"from": 9.96, "to": 10.0, "label": "halte terdekat"}], "caption": "9,96 berdiri di antara halte 9,9 dan 10,0, lebih dekat ke 10,0"}
```

## Konsep

### Aturan dasar pembulatan

1. Tentukan **angka terakhir yang dipertahankan**.
2. Lihat **satu angka sesudahnya** (angka penentu).
3. Jika angka penentu **0 sampai 4**, angka terakhir tetap. Jika **5 sampai 9**, angka terakhir ditambah 1.
4. Buang angka sesudahnya (atau ganti dengan 0 jika masih di depan koma).

Kenapa angka penentu saja yang dilihat? Angka penentu memberi tahu apakah kamu sudah melewati titik tengah antara dua halte. Angka 5 tepat di tengah atau lewat, jadi maju.

### Tempat desimal (t.d.)

**Tempat desimal** adalah banyak angka di belakang koma.

$7{,}3864$:

- 1 t.d.: angka penentu 8, jadi $7{,}4$.
- 2 t.d.: angka penentu 6, jadi $7{,}39$.
- 3 t.d.: angka penentu 4, jadi $7{,}386$.

Di garis bilangan, $7{,}3864$ terletak di antara halte $7{,}38$ dan $7{,}39$, lebih dekat ke $7{,}39$.

```visual
{"type": "numberLine", "from": 7.38, "to": 7.39, "step": 0.001, "marks": [7.385], "jumps": [{"from": 7.3864, "to": 7.39, "label": "7,3864 maju ke 7,39"}], "caption": "Titik tengah 7,385 ditandai tebal. 7,3864 sudah melewatinya, jadi maju ke 7,39"}
```

### Angka penting (a.p.)

**Angka penting** menunjukkan seberapa teliti sebuah bilangan. Aturannya:

1. Semua angka bukan nol adalah angka penting. ($254$ punya 3 a.p.)
2. Nol **di antara** angka bukan nol adalah angka penting. ($3{,}07$ punya 3 a.p.)
3. Nol **di depan** angka bukan nol pertama **bukan** angka penting. ($0{,}0045$ punya 2 a.p.)
4. Nol **di belakang** pada bilangan desimal adalah angka penting. ($2{,}50$ punya 3 a.p.)
5. Nol di belakang pada bilangan bulat, seperti $48.600$, bisa penting atau tidak. Kita harus melihat konteks atau keterangan pembulatannya.

Kenapa nol di depan tidak penting? $0{,}0045$ m sama dengan $4{,}5$ mm. Nol-nol di depan hanya menunjukkan letak koma karena satuannya, bukan ketelitian. Sebaliknya, $2{,}50$ berarti kita sudah mengukur sampai perseratus dan hasilnya tepat 0 perseratus.

```visual
{"type": "table", "head": ["Bilangan", "Angka penting", "Banyak a.p."], "rows": [["254", "2, 5, 4", "3"], ["3,07", "3, 0, 7 (nol di antara)", "3"], ["0,0045", "4, 5 (nol di depan tidak)", "2"], ["2,50", "2, 5, 0 (nol di belakang desimal)", "3"]], "caption": "Contoh menghitung angka penting"}
```

**Cara membulatkan ke $n$ a.p.:** mulai menghitung dari **angka bukan nol pertama**, ambil $n$ angka, lalu lihat angka penentunya.

- $48.615$ ke 3 a.p.: angka penting pertama 4, ambil $4, 8, 6$. Angka penentu 1, jadi tetap. Ganti sisanya dengan 0: $48.600$.
- $0{,}004567$ ke 2 a.p.: mulai dari 4, ambil $4, 5$. Angka penentu 6, jadi naik: $0{,}0046$.

### Estimasi

**Estimasi** adalah perkiraan hasil hitung dengan membulatkan setiap bilangan, biasanya ke **1 angka penting**, lalu menghitung di kepala.

$$\frac{48{,}7 \times 0{,}198}{3{,}87} \approx \frac{50 \times 0{,}2}{4} = \frac{10}{4} = 2{,}5$$

Kegunaan utama estimasi: **memeriksa kewajaran** jawaban. Jika kalkulator memberi 24,9 atau 0,249 untuk soal di atas, estimasi 2,5 langsung memberi tahu ada salah ketik.

Tanda $\approx$ dibaca "kira-kira sama dengan".

```anim
{"type": "persamaan", "title": "Estimasi dengan 1 angka penting", "baris": [{"tex": "\\frac{48{,}7 \\times 0{,}198}{3{,}87}", "say": "Bilangannya sulit dihitung di kepala."}, {"tex": "\\approx \\frac{50 \\times 0{,}2}{4}", "say": "Bulatkan setiap bilangan ke 1 angka penting.", "op": "1 a.p."}, {"tex": "= \\frac{10}{4}", "say": "50 kali 0,2 sama dengan 10."}, {"tex": "= 2{,}5", "say": "Hasil estimasi. Kalkulator memberi 2,49..., sangat dekat."}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Tempat desimal, termasuk kasus 9

```soal
{
 "title": "Contoh 1",
 "text": "Bulatkan (a) $12{,}0758$ ke 2 t.d.; (b) $9{,}96$ ke 1 t.d.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: (a) 2 t.d. berarti sampai angka ke-2 di belakang koma. Angka apa itu?",
   "answer": "7",
   "hint": "Hitung dari koma: 0 lalu 7.",
   "explain": "$12{,}07|58$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: (a) Angka penentu (satu angka sesudahnya) adalah?",
   "answer": "5",
   "hint": "Angka tepat sesudah garis.",
   "explain": "5 termasuk 5 sampai 9, jadi 7 naik.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Jadi $12{,}0758$ ke 2 t.d. = ?",
   "answer": "12,08",
   "hint": "7 naik menjadi 8, buang sisanya.",
   "explain": "$12{,}08$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: (b) $9{,}9|6$. Angka penentunya 6. Apa yang terjadi?",
   "options": [
    "9 di tempat persepuluhan naik 1",
    "9 tetap",
    "Angka 6 dibuang saja"
   ],
   "answer": "9 di tempat persepuluhan naik 1",
   "hint": "6 termasuk 5 sampai 9.",
   "explain": "Naik 1, sehingga terjadi simpanan.",
   "error": "salah-arah-pembulatan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: (b) Hasil pembulatan ke 1 t.d. ditulis",
   "options": [
    "$10{,}0$",
    "$10$",
    "$9{,}10$",
    "$9{,}0$"
   ],
   "answer": "$10{,}0$",
   "hint": "$9{,}9 + 0{,}1$, dan harus tetap ada 1 angka di belakang koma.",
   "explain": "$10{,}0$, bukan $10$, karena diminta 1 t.d.",
   "error": "salah-pembulatan"
  }
 ],
 "conclusion": "(a) $12{,}08$; (b) $10{,}0$."
}
```

### Contoh 2: Angka penting

```soal
{
 "title": "Contoh 2",
 "text": "Bulatkan (a) $0{,}03059$ ke 2 a.p.; (b) $51.749$ ke 3 a.p.; (c) $2{,}0396$ ke 3 a.p.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: (a) Angka penting pertama pada $0{,}03059$ adalah?",
   "answer": "3",
   "hint": "Nol di depan tidak dihitung.",
   "explain": "Ambil dua angka: 3 dan 0, yaitu $0{,}030|59$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: (a) Angka penentu 5. Hasilnya",
   "options": [
    "$0{,}031$",
    "$0{,}03$",
    "$0{,}030$",
    "$0{,}0306$"
   ],
   "answer": "$0{,}031$",
   "hint": "Angka 0 terakhir yang diambil naik 1.",
   "explain": "$0{,}031$, dua angka penting: 3 dan 1.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: (b) $51.749$ ke 3 a.p. adalah",
   "options": [
    "$51.700$",
    "$517$",
    "$51.750$",
    "$52.000$"
   ],
   "answer": "$51.700$",
   "hint": "Ambil 5, 1, 7; penentu 4. Jangan lupa nilai ribuannya.",
   "explain": "Ganti sisanya dengan 0: 51.700.",
   "error": "lupa-nol-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: (c) $2{,}0396$ ke 3 a.p. = ?",
   "answer": "2,04",
   "hint": "Ambil 2, 0, 3 (nol di antara dihitung). Penentunya 9.",
   "explain": "3 naik menjadi 4: $2{,}04$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: ada berapa angka penting pada $0{,}031$?",
   "options": [
    "2",
    "3",
    "4"
   ],
   "answer": "2",
   "hint": "Nol di depan tidak dihitung.",
   "explain": "Hanya 3 dan 1. Sesuai permintaan.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "(a) $0{,}031$; (b) $51.700$; (c) $2{,}04$."
}
```

### Contoh 3: Estimasi lalu bandingkan

```soal
{
 "title": "Contoh 3",
 "text": "Estimasi nilai $\\dfrac{48{,}7 \\times 0{,}198}{3{,}87}$ dengan membulatkan ke 1 a.p. Lalu hitung dengan kalkulator dan bulatkan ke 3 a.p.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Bulatkan $48{,}7$ ke 1 a.p.",
   "answer": "50",
   "hint": "Penentunya 8.",
   "explain": "$48{,}7 \\approx 50$. Juga $0{,}198 \\approx 0{,}2$ dan $3{,}87 \\approx 4$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung estimasi $\\frac{50 \\times 0{,}2}{4}$.",
   "answer": "2,5",
   "hint": "$50 \\times 0{,}2 = 10$.",
   "explain": "$10 \\div 4 = 2{,}5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Dengan kalkulator, $48{,}7 \\times 0{,}198 = ?$",
   "answer": "9,6426",
   "hint": "Jangan dibulatkan dulu.",
   "explain": "$9{,}6426$, lalu dibagi $3{,}87$ menjadi $2{,}49162\\ldots$",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Bulatkan $2{,}49162\\ldots$ ke 3 a.p.",
   "answer": "2,49",
   "hint": "Ambil 2, 4, 9. Penentunya 1.",
   "explain": "Tetap: $2{,}49$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: apakah hasil kalkulator wajar?",
   "options": [
    "Ya, dekat dengan estimasi 2,5",
    "Tidak, harusnya sekitar 25",
    "Tidak, harusnya sekitar 0,25"
   ],
   "answer": "Ya, dekat dengan estimasi 2,5",
   "hint": "Bandingkan dengan estimasi.",
   "explain": "2,49 sangat dekat dengan 2,5, letak koma benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Estimasi $2{,}5$; nilai sebenarnya $\\approx 2{,}49$ (3 a.p.)."
}
```

### Contoh 4: Soal cerita, memeriksa kewajaran

```soal
{
 "title": "Contoh 4",
 "text": "Bu Rina membeli 19 kg beras seharga Rp14.850 per kg dan 6 bungkus minyak goreng seharga Rp38.200 per bungkus. Kasir menulis total Rp411.350. Apakah total ini wajar? Jika tidak, berapa total yang benar?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Estimasi harga beras: 20 × Rp15.000 = ?",
   "answer": "300000",
   "hint": "20 × 15 ribu.",
   "explain": "Sekitar Rp300.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Estimasi minyak: 6 × Rp40.000 = ?",
   "answer": "240000",
   "hint": "6 × 40 ribu.",
   "explain": "Sekitar Rp240.000, total sekitar Rp540.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Apakah Rp411.350 wajar?",
   "options": [
    "Tidak, selisihnya lebih dari Rp100.000",
    "Ya, cukup dekat"
   ],
   "answer": "Tidak, selisihnya lebih dari Rp100.000",
   "hint": "Bandingkan dengan estimasi Rp540.000.",
   "explain": "Pembulatan ke atas membuat estimasi sedikit lebih besar, tapi tidak sejauh itu.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Hitung tepat 19 × Rp14.850.",
   "answer": "282150",
   "hint": "20 × 14.850 − 14.850.",
   "explain": "297.000 − 14.850 = 282.150.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Total tepat = Rp282.150 + 6 × Rp38.200 = ?",
   "answer": "511350",
   "hint": "6 × 38.200 = 229.200.",
   "explain": "Rp282.150 + Rp229.200 = Rp511.350.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Total kasir tidak wajar. Total yang benar Rp511.350."
}
```

## Kesalahan yang sering terjadi

- **Menghitung nol di depan sebagai angka penting.** $0{,}006049$ ke 2 a.p. ditulis $0{,}01$. Itu pembulatan ke 2 t.d., bukan 2 a.p. Mulai menghitung dari angka 6: $0{,}0060$.
- **Membuang nol yang menunjukkan ketelitian.** $0{,}006049$ ke 2 a.p. ditulis $0{,}006$. Itu hanya 1 a.p. Tulis $0{,}0060$.
- **Lupa mengganti dengan nol pada bilangan bulat.** $51.749$ ke 3 a.p. ditulis $517$. Nilainya berubah jauh. Benar: $51.700$.
- **Membulatkan bertahap.** $2{,}346$ ke 1 t.d.: dibulatkan dulu ke $2{,}35$, lalu ke $2{,}4$. Salah. Selalu bulatkan dari bilangan asli: angka penentunya 4, jadi $2{,}3$.
- **Membulatkan di tengah perhitungan.** Membulatkan $9{,}6426$ menjadi $9{,}6$ sebelum dibagi $3{,}87$, lalu hasilnya $2{,}48$. Simpan semua angka sampai langkah terakhir, baru bulatkan.

## Ringkasan

- Lihat angka penentu: 0 sampai 4 tetap, 5 sampai 9 naik.
- Tempat desimal dihitung dari koma. Angka penting dihitung dari angka bukan nol pertama.
- Nol di depan bukan angka penting; nol di antara angka bukan nol dan nol di belakang desimal adalah angka penting.
- Pertahankan nol yang diperlukan: $10{,}0$ (1 t.d.), $0{,}0060$ (2 a.p.), $51.700$.
- Estimasi: bulatkan ke 1 a.p., hitung di kepala, pakai untuk memeriksa kewajaran.
- Bulatkan hanya di langkah terakhir, dari bilangan asli.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Bulatkan $12{,}0758$ ke 1 t.d. dan ke 3 t.d.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Ke 1 t.d. (angka penentunya 7):",
   "answer": "12,1",
   "hint": "0 naik menjadi 1.",
   "explain": "$12{,}1$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Ke 3 t.d. (angka penentunya 8):",
   "answer": "12,076",
   "hint": "5 naik menjadi 6.",
   "explain": "$12{,}076$.",
   "error": "salah-pembulatan"
  }
 ],
 "conclusion": "$12{,}1$ dan $12{,}076$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Bulatkan $0{,}006049$ ke 2 a.p.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Angka penting pertama adalah?",
   "answer": "6",
   "hint": "Lewati nol di depan.",
   "explain": "Ambil 6 dan 0; penentunya 4.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasil pembulatannya",
   "options": [
    "$0{,}0060$",
    "$0{,}006$",
    "$0{,}01$",
    "$0{,}0061$"
   ],
   "answer": "$0{,}0060$",
   "hint": "Penentu 4 berarti tetap, dan angka penting kedua (0) harus ditulis.",
   "explain": "$0{,}0060$ punya 2 a.p.",
   "error": "salah-pembulatan"
  }
 ],
 "conclusion": "$0{,}0060$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Bulatkan $395.280$ ke 2 a.p.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Angka penentunya adalah?",
   "answer": "5",
   "hint": "Ambil 3 dan 9, lalu lihat angka sesudahnya.",
   "explain": "Penentu 5, jadi 39 naik menjadi 40.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Hasil pembulatannya:",
   "answer": "400000",
   "hint": "39 ribuan-puluh naik menjadi 40, sisanya nol.",
   "explain": "400.000.",
   "error": "lupa-nol-tempat"
  }
 ],
 "conclusion": "$400.000$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Estimasi $\\dfrac{61{,}2 \\times 3{,}89}{0{,}52}$ dengan membulatkan setiap bilangan ke 1 a.p.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$61{,}2$ ke 1 a.p.",
   "answer": "60",
   "hint": "Penentu 1.",
   "explain": "60.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$0{,}52$ ke 1 a.p.",
   "answer": "0,5",
   "hint": "Angka penting pertama 5, penentu 2.",
   "explain": "$0{,}5$. Juga $3{,}89 \\approx 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\frac{60 \\times 4}{0{,}5} = ?$",
   "answer": "480",
   "hint": "Membagi dengan 0,5 sama dengan mengalikan 2.",
   "explain": "240 ÷ 0,5 = 480; nilai sebenarnya sekitar 457,8.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Estimasinya 480."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Berapa banyak angka penting pada $0{,}04030$?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Dua nol di depan ($0{,}0$) termasuk angka penting?",
   "options": [
    "Tidak",
    "Ya"
   ],
   "answer": "Tidak",
   "hint": "Nol di depan hanya menunjukkan letak koma.",
   "explain": "Mulai menghitung dari 4.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Banyak angka penting:",
   "answer": "4",
   "hint": "Hitung 4, 0, 3, 0.",
   "explain": "Nol di antara dan nol di belakang desimal dihitung: 4 a.p.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Ada 4 angka penting."
}
```
