---
id: sma1-04-ukuran-penyebaran
judul: Ukuran Penyebaran Data
jenjang: sma1
moe: "Secondary 4 · Statistics and Probability · S1 Data handling and analysis"
prasyarat: [smp2-11-ukuran-pemusatan]
durasi_menit: 60
---

## Kenapa belajar ini?

Dua kelas bisa punya rata-rata nilai yang sama, tetapi di satu kelas nilainya rapat, di kelas lain sangat beragam. Rata-rata saja tidak cukup. Ukuran penyebaran memberi tahu seberapa **konsisten** data, sehingga guru, pelatih, atau pemilik usaha bisa membandingkan dua kelompok dengan adil.

## Analogi

Bayangkan siswa satu angkatan **berbaris saat upacara bendera**, diurutkan dari yang paling pendek ke yang paling tinggi.

- Ketua kelas menancapkan **tiga tiang pembatas** sehingga barisan terbagi menjadi **empat regu sama banyak**. Tiang-tiang itu adalah **kuartil** $Q_1$, $Q_2$ (median), dan $Q_3$.
- Jarak dari siswa terpendek ke tertinggi adalah **jangkauan**. Jarak antara tiang pertama dan tiang ketiga adalah **jangkauan antarkuartil**: lebar dua regu di tengah.
- Pembina upacara berdiri di posisi **tinggi rata-rata**. **Simpangan baku** mengukur seberapa jauh, secara umum, tinggi tiap siswa dari posisi itu.
- **Ogive** adalah papan hitung: "sampai tinggi sekian, sudah berapa siswa yang lewat?"

```visual
{"type": "barChart", "scaleStep": 20, "max": 180, "title": "Barisan upacara, urut dari terpendek", "unit": "cm", "bars": [{"label": "1", "value": 148}, {"label": "2", "value": 151}, {"label": "3", "value": 153}, {"label": "4", "value": 155}, {"label": "5", "value": 158}, {"label": "6", "value": 160}, {"label": "7", "value": 162}, {"label": "8", "value": 165}, {"label": "9", "value": 170}, {"label": "10", "value": 176}], "caption": "Jangkauan = tertinggi − terpendek. Kuartil membagi barisan yang sudah urut menjadi empat regu sama banyak."}
```

## Konsep

### Kuartil, jangkauan, dan jangkauan antarkuartil

Untuk data tunggal yang sudah **diurutkan**:

1. Cari **median** $Q_2$, nilai tengah.
2. $Q_1$ adalah median **separuh bawah**, $Q_3$ adalah median **separuh atas**. Jika banyak data ganjil, median sendiri tidak ikut ke separuh mana pun.

Lalu:

$$\text{jangkauan} = \text{maks} - \text{min}, \qquad \text{JAK} = Q_3 - Q_1$$

Jangkauan mudah dihitung tetapi sangat terpengaruh **pencilan** (nilai ekstrem). JAK hanya melihat 50% data di tengah, jadi lebih tahan terhadap pencilan.

### Persentil

**Persentil ke-$k$** ($P_k$) adalah nilai yang di bawahnya terdapat $k\%$ data. Jadi $Q_1 = P_{25}$, median $= P_{50}$, dan $Q_3 = P_{75}$. Untuk data berkelompok, persentil dibaca dari ogive pada frekuensi kumulatif $\frac{k}{100} \times n$.

### Simpangan baku

Untuk setiap data, hitung **simpangan** $x - \bar{x}$. Simpangan positif dan negatif selalu saling menghapus (jumlahnya nol), jadi kita **kuadratkan** dulu, ambil rata-ratanya, lalu ambil **akar** agar satuannya kembali seperti data asli:

$$\sigma = \sqrt{\frac{\sum (x - \bar{x})^2}{n}} = \sqrt{\frac{\sum x^2}{n} - \bar{x}^2}$$

```anim
{"type": "persamaan", "title": "Simpangan baku data 2, 4, 6", "baris": [{"tex": "\\bar{x} = \\frac{2 + 4 + 6}{3} = 4", "say": "Cari posisi pembina: rata-ratanya 4."}, {"tex": "x - \\bar{x}:\\ -2,\\ 0,\\ 2", "say": "Simpangan tiap data. Jumlahnya nol, jadi belum bisa dipakai.", "op": "kurangi $\\bar{x}$"}, {"tex": "(x - \\bar{x})^2:\\ 4,\\ 0,\\ 4", "say": "Kuadratkan supaya tidak saling menghapus.", "op": "kuadratkan"}, {"tex": "\\frac{4 + 0 + 4}{3} = \\frac{8}{3}", "say": "Rata-rata kuadrat simpangan disebut variansi.", "op": "bagi $n$"}, {"tex": "\\sigma = \\sqrt{\\tfrac{8}{3}} \\approx 1{,}63", "say": "Akarkan agar satuannya kembali seperti data asli.", "op": "akarkan"}]}
```

Bentuk kedua lebih praktis. Ia didapat dengan mengekspansi $(x - \bar{x})^2 = x^2 - 2x\bar{x} + \bar{x}^2$ lalu menjumlahkan, karena $\sum x = n\bar{x}$.

Untuk **data berkelompok** (atau tabel frekuensi), pakai titik tengah kelas sebagai $x$ dan frekuensi $f$:

$$\sigma = \sqrt{\frac{\sum f x^2}{\sum f} - \left(\frac{\sum f x}{\sum f}\right)^2}$$

Pada kalkulator ilmiah, pakai tombol $\sigma_x$ (pembagi $n$), bukan $s_x$.

### Ogive

**Ogive** adalah grafik frekuensi kumulatif. Sumbu mendatar berisi **batas atas kelas**, sumbu tegak berisi frekuensi kumulatif. Titik-titik dihubungkan dengan kurva mulus (atau garis lurus).

Untuk membaca nilai pada frekuensi kumulatif tertentu: tarik garis mendatar dari sumbu tegak ke kurva, lalu turun ke sumbu mendatar. Jika titiknya dihubungkan garis lurus, pembacaan ini sama dengan **interpolasi linear** di dalam kelas.

Contoh: nilai kuis 30 siswa dengan frekuensi 3, 6, 12, 6, 3 pada kelas 0–20, 20–40, 40–60, 60–80, 80–100. Frekuensi kumulatifnya 3, 9, 21, 27, 30.

```anim
{"type": "grafik", "title": "Ogive dan cara membaca median", "xmin": -5, "xmax": 105, "ymin": -2, "ymax": 33, "kurva": [{"f": "0.15x", "dari": 0, "sampai": 20, "warna": "#0ea5e9", "label": "\\text{frekuensi kumulatif}"}, {"f": "3+0.3(x-20)", "dari": 20, "sampai": 40, "warna": "#0ea5e9"}, {"f": "9+0.6(x-40)", "dari": 40, "sampai": 60, "warna": "#0ea5e9"}, {"f": "21+0.3(x-60)", "dari": 60, "sampai": 80, "warna": "#0ea5e9"}, {"f": "27+0.15(x-80)", "dari": 80, "sampai": 100, "warna": "#0ea5e9"}], "titik": [{"x": 0, "y": 0}, {"x": 20, "y": 3}, {"x": 40, "y": 9}, {"x": 60, "y": 21}, {"x": 80, "y": 27}, {"x": 100, "y": 30}, {"x": 50, "y": 15, "label": "median 50"}], "garis": [{"y": 15}, {"x": 50}], "langkah": [{"say": "Sumbu mendatar: batas atas kelas. Sumbu tegak: frekuensi kumulatif.", "kurva": 0, "titik": 0, "garis": 0}, {"say": "Plot titik $(0, 0), (20, 3), (40, 9), (60, 21), (80, 27), (100, 30)$.", "kurva": 0, "titik": 6, "garis": 0}, {"say": "Hubungkan titik-titiknya: inilah ogive.", "kurva": 5, "titik": 6, "garis": 0}, {"say": "Median ada pada kumulatif $\\frac{1}{2}(30) = 15$. Tarik garis mendatar dari 15 ke kurva.", "kurva": 5, "titik": 6, "garis": 1}, {"say": "Turun ke sumbu mendatar: median $= 40 + \\frac{15 - 9}{12} \\times 20 = 50$.", "kurva": 5, "titik": 7, "garis": 2}]}
```

### Diagram kotak-garis

Diagram kotak-garis (box plot) meringkas lima angka: **minimum, $Q_1$, median, $Q_3$, maksimum**. Kotak membentang dari $Q_1$ ke $Q_3$ dengan garis di median, dan "kumis" menjulur ke minimum dan maksimum. Lebar kotak = JAK.

```anim
{"type": "bangun", "title": "Diagram kotak-garis: min 55, Q1 65, median 72, Q3 78, maks 90", "titik": {"55": [55, 6], "​": [65, 6], "65": [65, 2], "Q₁": [65, 10], "72": [72, 2], "Q₂": [72, 10], "78": [78, 2], "Q₃": [78, 10], "​​": [78, 6], "90": [90, 6]}, "sisi": [["55", "​"], ["65", "Q₁"], ["78", "Q₃"], ["65", "78"], ["Q₁", "Q₃"], ["72", "Q₂"], ["​​", "90"]], "langkah": [{"say": "Kumis kiri dari minimum (55) ke $Q_1$ (65).", "sisi": 1}, {"say": "Kotak dari $Q_1 = 65$ sampai $Q_3 = 78$. Lebarnya JAK $= 13$.", "sisi": 5, "sorot": ["65Q₁", "78Q₃"]}, {"say": "Garis median di 72 membelah kotak.", "sisi": 6, "sorot": ["72Q₂"]}, {"say": "Kumis kanan dari $Q_3$ ke maksimum (90). Lima angka ringkasan lengkap.", "sisi": 7}]}
```

### Membandingkan dua kelompok data

Selalu bandingkan **dua hal**, lalu tulis kesimpulan dalam konteks soal:

1. **Pusat** (rata-rata atau median): kelompok mana yang umumnya lebih tinggi?
2. **Sebaran** (simpangan baku atau JAK): kelompok mana yang lebih konsisten? Sebaran kecil berarti lebih konsisten.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Kuartil dan diagram kotak-garis

```soal
{
 "title": "Contoh 1",
 "text": "Nilai ulangan 11 siswa: 52, 60, 63, 65, 70, 72, 75, 78, 80, 85, 94. Tentukan kuartil, jangkauan, JAK, dan diagram kotak-garisnya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1–2: Data sudah urut. Ada 11 data, jadi median adalah data ke-6. Berapa $Q_2$?",
   "answer": "72",
   "hint": "Hitung dari kiri sampai data keenam.",
   "explain": "$Q_2 = 72$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $Q_1$ = median separuh bawah (52, 60, 63, 65, 70) = ?",
   "answer": "63",
   "hint": "Median tidak ikut. Ambil nilai tengah dari lima data.",
   "explain": "$Q_1 = 63$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$Q_3$ = median separuh atas (75, 78, 80, 85, 94) = ?",
   "answer": "80",
   "hint": "Ambil nilai tengah dari lima data.",
   "explain": "$Q_3 = 80$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Jangkauan = ?",
   "answer": "42",
   "hint": "Maksimum dikurangi minimum.",
   "explain": "$94 - 52 = 42$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "JAK = ?",
   "answer": "17",
   "hint": "$Q_3 - Q_1$.",
   "explain": "$80 - 63 = 17$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Diagram kotak-garis yang benar adalah ...",
   "options": [
    "Kumis 52–63, kotak 63–80 dengan garis di 72, kumis 80–94",
    "Kumis 52–60, kotak 60–85 dengan garis di 72, kumis 85–94",
    "Kotak 52–94 dengan garis di 72"
   ],
   "answer": "Kumis 52–63, kotak 63–80 dengan garis di 72, kumis 80–94",
   "hint": "Kotak membentang dari $Q_1$ ke $Q_3$.",
   "explain": "Lima angka: 52, 63, 72, 80, 94.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: tiga tiang (63, 72, 80) membagi sisa data menjadi empat regu. Berapa siswa di setiap regu?",
   "answer": "2",
   "hint": "Regu pertama: 52, 60.",
   "explain": "Empat regu: 52–60, 65–70, 75–78, 85–94, masing-masing 2 siswa. Seimbang.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$Q_1 = 63$, $Q_2 = 72$, $Q_3 = 80$, jangkauan 42, JAK 17."
}
```

### Contoh 2: Simpangan baku data tunggal

```soal
{
 "title": "Contoh 2",
 "text": "Waktu Putu bermain ponsel dalam lima hari (jam): 4, 6, 7, 9, 14. Hitung simpangan bakunya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Rata-rata $\\bar{x}$ = ?",
   "answer": "8",
   "hint": "Jumlahkan lalu bagi 5.",
   "explain": "$\\frac{40}{5} = 8$.",
   "error": "salah-langkah-materi",
   "suffix": "jam"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Simpangan $x - \\bar{x}$ tiap data adalah ...",
   "options": [
    "$-4, -2, -1, 1, 6$",
    "$4, 2, 1, 1, 6$",
    "$-4, -2, -1, 1, 4$"
   ],
   "answer": "$-4, -2, -1, 1, 6$",
   "hint": "Kurangi setiap data dengan 8; tandanya penting.",
   "explain": "Jumlahnya $0$, sesuai teori.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Jumlah kuadrat simpangan = ?",
   "answer": "58",
   "hint": "Kuadratkan setiap simpangan: hasilnya selalu positif.",
   "explain": "$16 + 4 + 1 + 1 + 36 = 58$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $\\sigma = \\sqrt{\\frac{58}{5}}$ = ? (2 desimal)",
   "answer": "3,41",
   "hint": "$\\frac{58}{5} = 11{,}6$.",
   "explain": "$\\sqrt{11{,}6} \\approx 3{,}41$ jam.",
   "error": "salah-langkah-materi",
   "suffix": "jam"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban dengan rumus kedua: $\\sum x^2 = 378$. Hitung $\\frac{378}{5} - 8^2$.",
   "answer": "11,6",
   "hint": "$\\frac{378}{5} = 75{,}6$.",
   "explain": "$75{,}6 - 64 = 11{,}6$. Sama dengan variansi di Langkah 4.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Simpangan baku ≈ 3,41 jam."
}
```

### Contoh 3: Simpangan baku data berkelompok

```soal
{
 "title": "Contoh 3",
 "text": "Waktu tempuh 40 siswa dari rumah ke sekolah tercantum pada tabel. Hitung rata-rata dan simpangan bakunya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Titik tengah kelas-kelasnya adalah ...",
   "options": [
    "5, 15, 25, 35, 45",
    "10, 20, 30, 40, 50",
    "0, 10, 20, 30, 40"
   ],
   "answer": "5, 15, 25, 35, 45",
   "hint": "Tengah-tengah batas bawah dan batas atas.",
   "explain": "Contoh: $\\frac{0 + 10}{2} = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\sum fx = 5(5) + 12(15) + 15(25) + 6(35) + 2(45)$ = ?",
   "answer": "880",
   "hint": "Hitung tiap hasil kali, lalu jumlahkan.",
   "explain": "$25 + 180 + 375 + 210 + 90 = 880$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Rata-rata $\\frac{880}{40}$ = ?",
   "answer": "22",
   "hint": "Bagi dengan banyak siswa.",
   "explain": "$\\bar{x} = 22$ menit.",
   "error": "salah-langkah-materi",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $\\sum fx^2 = 5(25) + 12(225) + 15(625) + 6(1.225) + 2(2.025)$ = ?",
   "answer": "23600",
   "hint": "Kalikan frekuensi dengan kuadrat titik tengah.",
   "explain": "$125 + 2.700 + 9.375 + 7.350 + 4.050 = 23.600$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Variansi $\\frac{23.600}{40} - 22^2$ = ?",
   "answer": "106",
   "hint": "Jangan lupa mengurangi $\\bar{x}^2$.",
   "explain": "$590 - 484 = 106$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\sigma = \\sqrt{106}$ = ? (1 desimal)",
   "answer": "10,3",
   "hint": "$10^2 = 100$, jadi sedikit lebih dari 10.",
   "explain": "$\\sigma \\approx 10{,}3$ menit.",
   "error": "salah-langkah-materi",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: berapa siswa di kelas 10–20 dan 20–30 (sekitar $22 \\pm 10{,}3$)?",
   "answer": "27",
   "hint": "Jumlahkan dua frekuensi itu.",
   "explain": "$12 + 15 = 27$ dari 40 siswa, sebagian besar data. Masuk akal.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Rata-rata 22 menit, simpangan baku ≈ 10,3 menit.",
 "visual": {
  "type": "table",
  "head": [
   "Waktu t (menit)",
   "Frekuensi"
  ],
  "rows": [
   [
    "0 < t ≤ 10",
    "5"
   ],
   [
    "10 < t ≤ 20",
    "12"
   ],
   [
    "20 < t ≤ 30",
    "15"
   ],
   [
    "30 < t ≤ 40",
    "6"
   ],
   [
    "40 < t ≤ 50",
    "2"
   ]
  ]
 }
}
```

### Contoh 4: Membaca ogive

```soal
{
 "title": "Contoh 4",
 "text": "Dengan data Contoh 3, buat tabel frekuensi kumulatif, lalu perkirakan median, $Q_1$, $Q_3$, JAK, persentil ke-90, dan banyak siswa yang butuh lebih dari 35 menit.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Frekuensi kumulatif untuk $t \\le 10, 20, 30, 40, 50$ adalah ...",
   "options": [
    "5, 17, 32, 38, 40",
    "5, 12, 15, 6, 2",
    "5, 17, 27, 33, 35"
   ],
   "answer": "5, 17, 32, 38, 40",
   "hint": "Tambahkan frekuensi satu per satu.",
   "explain": "Ogive melalui $(0, 0), (10, 5), (20, 17), (30, 32), (40, 38), (50, 40)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Median dibaca pada frekuensi kumulatif berapa?",
   "answer": "20",
   "hint": "Setengah dari 40.",
   "explain": "$\\frac{1}{2}(40) = 20$. Dengan cara sama, $Q_1$ pada 10, $Q_3$ pada 30, $P_{90}$ pada 36.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Median $= 20 + \\frac{20 - 17}{15} \\times 10$ = ?",
   "answer": "22",
   "hint": "Kumulatif 20 ada di kelas 20–30 (17 sampai 32).",
   "explain": "$20 + 2 = 22$ menit.",
   "error": "salah-langkah-materi",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "$Q_1 = 10 + \\frac{10 - 5}{12} \\times 10$ = ? (1 desimal)",
   "answer": "14,2",
   "hint": "$\\frac{5}{12} \\times 10 \\approx 4{,}17$.",
   "explain": "$Q_1 \\approx 14{,}2$ menit.",
   "error": "salah-langkah-materi",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "$Q_3 = 20 + \\frac{30 - 17}{15} \\times 10$ = ? (1 desimal)",
   "answer": "28,7",
   "hint": "$\\frac{13}{15} \\times 10 \\approx 8{,}67$.",
   "explain": "$Q_3 \\approx 28{,}7$ menit.",
   "error": "salah-langkah-materi",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "$P_{90} = 30 + \\frac{36 - 32}{6} \\times 10$ = ? (1 desimal)",
   "answer": "36,7",
   "hint": "$\\frac{4}{6} \\times 10 \\approx 6{,}67$.",
   "explain": "$P_{90} \\approx 36{,}7$ menit.",
   "error": "salah-langkah-materi",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: JAK $= 28{,}67 - 14{,}17$ = ?",
   "answer": "14,5",
   "hint": "$Q_3 - Q_1$.",
   "explain": "JAK $\\approx 14{,}5$ menit.",
   "error": "salah-langkah-materi",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Di $t = 35$, kumulatif $= 32 + \\frac{5}{10} \\times 6 = 35$. Berapa siswa yang butuh lebih dari 35 menit?",
   "answer": "5",
   "hint": "Kurangkan dari total 40.",
   "explain": "$40 - 35 = 5$ siswa.",
   "error": "salah-langkah-materi",
   "suffix": "siswa"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: urutan yang benar adalah ...",
   "options": [
    "$Q_1 < \\text{median} < Q_3 < P_{90}$",
    "$\\text{median} < Q_1 < Q_3 < P_{90}$"
   ],
   "answer": "$Q_1 < \\text{median} < Q_3 < P_{90}$",
   "hint": "Bandingkan angka-angka yang sudah kamu dapat.",
   "explain": "$14{,}2 < 22 < 28{,}7 < 36{,}7$. Terpenuhi.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Median 22 menit, $Q_1 \\approx 14{,}2$, $Q_3 \\approx 28{,}7$, JAK ≈ 14,5 menit, $P_{90} \\approx 36{,}7$ menit, dan sekitar 5 siswa butuh lebih dari 35 menit.",
 "visual": {
  "type": "table",
  "head": [
   "Waktu t (menit)",
   "Frekuensi"
  ],
  "rows": [
   [
    "0 < t ≤ 10",
    "5"
   ],
   [
    "10 < t ≤ 20",
    "12"
   ],
   [
    "20 < t ≤ 30",
    "15"
   ],
   [
    "30 < t ≤ 40",
    "6"
   ],
   [
    "40 < t ≤ 50",
    "2"
   ]
  ]
 }
}
```

### Contoh 5: Membandingkan dua kelas

```soal
{
 "title": "Contoh 5",
 "text": "Ringkasan nilai ujian dua kelas tercantum pada tabel. Bandingkan kedua kelas.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Bandingkan pusat. Kelas mana yang umumnya lebih tinggi?",
   "options": [
    "Kelas B (median 75)",
    "Kelas A (median 72)",
    "Sama saja"
   ],
   "answer": "Kelas B (median 75)",
   "hint": "Lihat kolom median.",
   "explain": "Median B (75) lebih tinggi dari median A (72).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: JAK kelas A = ?",
   "answer": "13",
   "hint": "$Q_3 - Q_1$.",
   "explain": "$78 - 65 = 13$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "JAK kelas B = ?",
   "answer": "25",
   "hint": "$Q_3 - Q_1$.",
   "explain": "$85 - 60 = 25$. Jangkauan A $= 35$ dan B $= 58$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Kesimpulan dalam konteks ...",
   "options": [
    "Kelas A lebih konsisten, kelas B lebih beragam",
    "Kelas B lebih konsisten karena JAK-nya besar",
    "Kelas A lebih pintar karena sebarannya kecil"
   ],
   "answer": "Kelas A lebih konsisten, kelas B lebih beragam",
   "hint": "Sebaran kecil berarti lebih konsisten, bukan lebih tinggi.",
   "explain": "Nilai kelas A lebih rapat; kelas B ada yang sangat tinggi dan ada yang rendah.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: kesimpulan yang lengkap harus menyebut ...",
   "options": [
    "Pusat dan sebaran, dengan angka",
    "Rata-rata saja",
    "Nilai maksimum saja"
   ],
   "answer": "Pusat dan sebaran, dengan angka",
   "hint": "Ada dua hal yang selalu dibandingkan.",
   "explain": "Pusat (median) dan sebaran (JAK), masing-masing dengan angka pendukung.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Kelas B umumnya sedikit lebih tinggi (median 75 vs 72), tetapi kelas A lebih konsisten (JAK 13 vs 25).",
 "visual": {
  "type": "table",
  "head": [
   "Kelas",
   "Min",
   "Q1",
   "Median",
   "Q3",
   "Maks"
  ],
  "rows": [
   [
    "A",
    "55",
    "65",
    "72",
    "78",
    "90"
   ],
   [
    "B",
    "40",
    "60",
    "75",
    "85",
    "98"
   ]
  ]
 }
}
```

## Kesalahan yang sering terjadi

- **Mencari kuartil dari data yang belum diurutkan.** Barisan upacara harus diurutkan dulu sebelum tiang dipasang.
- **Membagi $\sum f x^2$ lalu lupa mengurangi $\bar{x}^2$.** $\frac{23.600}{40} = 590$ bukan variansi. Variansinya $590 - 484 = 106$.
- **Memakai batas bawah kelas pada ogive.** Frekuensi kumulatif diplot terhadap **batas atas** kelas, karena "sampai 20 menit sudah 17 siswa".
- **Membandingkan hanya rata-rata.** Selalu sebut juga sebaran, dan tulis artinya dalam konteks soal.
- **Mengira sebaran besar berarti nilai lebih tinggi.** JAK atau simpangan baku besar berarti **kurang konsisten**, bukan lebih baik.

## Ringkasan

- Kuartil membagi data urut menjadi empat bagian sama banyak; $Q_1 = P_{25}$, median $= P_{50}$, $Q_3 = P_{75}$.
- Jangkauan $=$ maks $-$ min; JAK $= Q_3 - Q_1$ (tahan pencilan).
- $\sigma = \sqrt{\frac{\sum x^2}{n} - \bar{x}^2}$; data berkelompok: $\sigma = \sqrt{\frac{\sum fx^2}{\sum f} - \left(\frac{\sum fx}{\sum f}\right)^2}$.
- Ogive: frekuensi kumulatif terhadap batas atas kelas; dipakai membaca median, kuartil, dan persentil.
- Diagram kotak-garis: min, $Q_1$, median, $Q_3$, maks.
- Membandingkan dua kelompok: pusat dan sebaran, disimpulkan dalam konteks.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Data: 3, 5, 6, 8, 10, 12, 15, 18. Tentukan median, $Q_1$, $Q_3$, JAK, dan jangkauan.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Median = ?",
   "answer": "9",
   "hint": "Ada 8 data: rata-rata data ke-4 dan ke-5.",
   "explain": "$\\frac{8 + 10}{2} = 9$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$Q_1$ = ?",
   "answer": "5,5",
   "hint": "Median dari 3, 5, 6, 8.",
   "explain": "$\\frac{5 + 6}{2} = 5{,}5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$Q_3$ = ?",
   "answer": "13,5",
   "hint": "Median dari 10, 12, 15, 18.",
   "explain": "$\\frac{12 + 15}{2} = 13{,}5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "JAK = ?",
   "answer": "8",
   "hint": "$Q_3 - Q_1$.",
   "explain": "$13{,}5 - 5{,}5 = 8$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Jangkauan = ?",
   "answer": "15",
   "hint": "Maks − min.",
   "explain": "$18 - 3 = 15$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Median 9, $Q_1 = 5{,}5$, $Q_3 = 13{,}5$, JAK 8, jangkauan 15."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung simpangan baku dari 2, 4, 4, 4, 5, 5, 7, 9.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Rata-rata = ?",
   "answer": "5",
   "hint": "Jumlahnya 40, banyak data 8.",
   "explain": "$\\frac{40}{8} = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Jumlah kuadrat simpangan = ?",
   "answer": "32",
   "hint": "$(2-5)^2 + (4-5)^2 + \\dots$",
   "explain": "$9 + 1 + 1 + 1 + 0 + 0 + 4 + 16 = 32$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\sigma = \\sqrt{\\frac{32}{8}}$ = ?",
   "answer": "2",
   "hint": "$\\frac{32}{8} = 4$.",
   "explain": "$\\sqrt{4} = 2$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Simpangan baku $= 2$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Tabel frekuensi: nilai 1 muncul 2 kali, nilai 2 muncul 5 kali, nilai 3 muncul 3 kali. Hitung rata-rata dan simpangan baku.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Rata-rata $\\frac{\\sum fx}{\\sum f}$ = ?",
   "answer": "2,1",
   "hint": "$\\sum fx = 2 + 10 + 9$.",
   "explain": "$\\frac{21}{10} = 2{,}1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\frac{\\sum fx^2}{\\sum f}$ = ?",
   "answer": "4,9",
   "hint": "$\\sum fx^2 = 2(1) + 5(4) + 3(9)$.",
   "explain": "$\\frac{49}{10} = 4{,}9$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\sigma = \\sqrt{4{,}9 - 2{,}1^2}$ = ?",
   "answer": "0,7",
   "hint": "$2{,}1^2 = 4{,}41$.",
   "explain": "$\\sqrt{0{,}49} = 0{,}7$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Rata-rata 2,1 dan simpangan baku 0,7.",
 "visual": {
  "type": "table",
  "head": [
   "Nilai",
   "Frekuensi"
  ],
  "rows": [
   [
    "1",
    "2"
   ],
   [
    "2",
    "5"
   ],
   [
    "3",
    "3"
   ]
  ]
 }
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Dengan ogive pada Contoh 4 (kumulatif 5, 17, 32, 38, 40 pada batas atas 10, 20, 30, 40, 50), perkirakan persentil ke-60 waktu tempuh.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Persentil ke-60 dibaca pada kumulatif berapa?",
   "answer": "24",
   "hint": "$0{,}6 \\times 40$.",
   "explain": "$0{,}6 \\times 40 = 24$, di kelas 20–30.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $P_{60} = 20 + \\frac{24 - 17}{15} \\times 10$ = ? (1 desimal)",
   "answer": "24,7",
   "hint": "$\\frac{7}{15} \\times 10 \\approx 4{,}67$.",
   "explain": "$P_{60} \\approx 24{,}7$ menit.",
   "error": "salah-langkah-materi",
   "suffix": "menit"
  }
 ],
 "conclusion": "Persentil ke-60 ≈ 24,7 menit."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Toko A: median waktu layanan 50 detik, JAK 10 detik. Toko B: median 55 detik, JAK 25 detik. Toko mana yang lebih cepat dan lebih konsisten?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Toko mana yang umumnya lebih cepat?",
   "options": [
    "Toko A",
    "Toko B"
   ],
   "answer": "Toko A",
   "hint": "Waktu layanan lebih kecil berarti lebih cepat.",
   "explain": "Median A (50) lebih kecil dari B (55).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Toko mana yang lebih konsisten?",
   "options": [
    "Toko A",
    "Toko B"
   ],
   "answer": "Toko A",
   "hint": "Sebaran kecil berarti lebih konsisten.",
   "explain": "JAK A (10) lebih kecil dari B (25).",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Toko A lebih cepat dan lebih konsisten."
}
```
