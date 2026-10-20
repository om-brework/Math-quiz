---
id: sd6-05-lingkaran
judul: Lingkaran
jenjang: sd6
moe: "Primary 6 · Measurement and Geometry · Area and Circumference of Circle"
prasyarat: [sd4-09-luas-keliling-gabungan, sd5-08-luas-segitiga]
durasi_menit: 50
---

## Kenapa belajar ini?

Roda sepeda, tutup gelas, dan kolam bundar berbentuk lingkaran. Untuk memasang pagar di sekeliling kolam bundar, kita perlu kelilingnya. Untuk mengecat permukaan meja bundar, kita perlu luasnya. Materi ini mengajarkan cara menghitung keduanya.

## Analogi

Bayangkan sebuah **martabak manis bundar**.

- **Pinggiran** martabak yang renyah adalah **keliling** lingkaran.
- **Permukaan** martabak yang diolesi selai adalah **luas** lingkaran.
- Kalau martabak dipotong dua sama besar, kamu dapat **setengah lingkaran**. Dipotong empat, kamu dapat **seperempat lingkaran**.

Saat menghitung keliling potongan martabak, jangan lupa **sisi potongannya** yang lurus. Martabak ini akan kita pakai lagi di setiap contoh.

```visual
{"type": "shapes", "items": [{"shape": "lingkaran", "color": "#fbbf24"}, {"shape": "setengah-lingkaran", "color": "#fbbf24"}, {"shape": "seperempat-lingkaran", "color": "#fbbf24"}], "caption": "Martabak utuh, dipotong dua (setengah lingkaran), dan dipotong empat (seperempat lingkaran)."}
```

## Konsep

### Bagian-bagian lingkaran

```anim
{"type": "bangun", "title": "Bagian-bagian lingkaran", "titik": {"O": [0, 0], "A": [5, 0], "B": [-5, 0]}, "sisi": [["O", "A", "r"], ["B", "O", "r"]], "lingkaran": [{"pusat": [0, 0], "r": 5}], "langkah": [{"say": "Ini lingkaran dengan titik pusat O.", "sisi": 0, "sorot": ["O"]}, {"say": "Jari-jari r: jarak dari pusat O ke tepi, misalnya OA.", "sisi": 1, "sorot": ["O", "A"]}, {"say": "Diameter d: garis BA melewati pusat dari tepi ke tepi. d = 2r.", "sisi": 2, "sorot": ["B", "A"]}]}
```

- **Titik pusat** ($O$): titik tepat di tengah lingkaran.
- **Jari-jari** ($r$): jarak dari pusat ke tepi lingkaran.
- **Diameter** ($d$): garis lurus melewati pusat, dari tepi ke tepi. Diameter = 2 kali jari-jari.

$$d = 2r \qquad r = \frac{d}{2}$$

### Bilangan $\pi$ (pi)

Untuk lingkaran apa pun, keliling dibagi diameter hasilnya selalu sama, kira-kira 3,14. Bilangan ini diberi nama $\pi$ (dibaca "pi").

Di SD kita memakai $\pi \approx 3{,}14$ atau $\pi \approx \frac{22}{7}$. Pakai $\frac{22}{7}$ jika jari-jari atau diameternya kelipatan 7, supaya mudah dihitung.

### Keliling lingkaran

$$K = \pi \times d = 2 \times \pi \times r$$

Artinya, pinggiran martabak panjangnya sekitar 3,14 kali lebar martabak.

### Luas lingkaran

$$L = \pi \times r \times r$$

Kenapa begitu? Potong martabak menjadi banyak juring tipis. Susun berselang-seling, atas-bawah. Hasilnya hampir seperti persegi panjang:

- Panjangnya setengah keliling: $\pi \times r$.
- Lebarnya jari-jari: $r$.

Luas persegi panjang = panjang × lebar $= \pi \times r \times r$.

```anim
{"type": "persamaan", "title": "Contoh: luas martabak dengan r = 7 cm", "baris": [{"tex": "L = \\pi \\times r \\times r", "say": "Rumus luas lingkaran."}, {"tex": "L = \\frac{22}{7} \\times 7 \\times 7", "say": "Jari-jari 7, kelipatan 7, jadi pakai pi = 22/7.", "op": "ganti r = 7"}, {"tex": "L = 22 \\times 7", "say": "7 dibagi 7 menjadi 1, tinggal 22 × 7."}, {"tex": "L = 154 \\text{ cm}^2", "say": "Luasnya 154 cm persegi."}]}
```

### Setengah dan seperempat lingkaran

| Bangun | Luas | Keliling |
|---|---|---|
| Setengah lingkaran | $\frac{1}{2} \times \pi r^2$ | $\frac{1}{2} \times \pi d + d$ |
| Seperempat lingkaran | $\frac{1}{4} \times \pi r^2$ | $\frac{1}{4} \times 2\pi r + r + r$ |

Catatan: $r^2$ artinya $r \times r$.

Keliling potongan = **lengkungan** (bagian dari pinggiran martabak) + **sisi lurus** bekas pisau. Pada setengah lingkaran, sisi lurusnya satu diameter. Pada seperempat lingkaran, sisi lurusnya dua jari-jari.

### Bangun gabungan

Pecah bangun menjadi bagian yang dikenal, misalnya persegi panjang dan setengah lingkaran.

- **Luas gabungan**: jumlahkan luas tiap bagian (atau kurangkan bagian yang dipotong).
- **Keliling gabungan**: jalan mengelilingi bagian **luar** saja. Garis di dalam bangun tidak dihitung.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Keliling dan luas lingkaran

```soal
{
 "title": "Contoh 1",
 "text": "Sebuah tutup panci berbentuk lingkaran dengan jari-jari 7 cm. Hitung keliling dan luasnya. Gunakan $\\pi = \\frac{22}{7}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Berapa diameternya?",
   "answer": "14",
   "hint": "Diameter = 2 × jari-jari.",
   "explain": "d = 2 × 7 = 14 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung keliling. $K = \\frac{22}{7} \\times 14$ = ?",
   "answer": "44",
   "hint": "14 dibagi 7 dulu, lalu kali 22.",
   "explain": "$22 \\times 2 = 44$ cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung luas. $L = \\frac{22}{7} \\times 7 \\times 7$ = ?",
   "answer": "154",
   "hint": "7 dibagi 7 = 1, jadi tinggal 22 × 7.",
   "explain": "$22 \\times 7 = 154$ cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: perkiraan dengan $\\pi \\approx 3$ memberi keliling 42 dan luas 147. Apakah hasilnya wajar?",
   "options": [
    "Ya, 44 dan 154 dekat dengan perkiraan",
    "Tidak, hasilnya terlalu jauh"
   ],
   "answer": "Ya, 44 dan 154 dekat dengan perkiraan",
   "hint": "Bandingkan 44 dengan 42, dan 154 dengan 147.",
   "explain": "Hasilnya sedikit lebih besar karena pi sedikit lebih dari 3. Wajar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi kelilingnya 44 cm dan luasnya 154 cm².",
 "visual": {
  "type": "shape",
  "shape": "lingkaran",
  "label": "r = 7 cm"
 }
}
```

### Contoh 2: Setengah lingkaran

```soal
{
 "title": "Contoh 2",
 "text": "Sepotong martabak berbentuk setengah lingkaran dengan diameter 20 cm. Hitung keliling dan luasnya. Gunakan $\\pi = 3{,}14$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Berapa jari-jarinya?",
   "answer": "10",
   "hint": "Jari-jari = diameter ÷ 2.",
   "explain": "r = 20 ÷ 2 = 10 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung lengkungan: $\\frac{1}{2} \\times 3{,}14 \\times 20$.",
   "answer": "31,4",
   "hint": "3,14 × 20 = 62,8, lalu bagi 2.",
   "explain": "Lengkungan = 31,4 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tambahkan sisi lurus (diameter). Keliling = ?",
   "answer": "51,4",
   "hint": "Sisi bekas pisau panjangnya 20 cm.",
   "explain": "31,4 + 20 = 51,4 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Hitung luas: $\\frac{1}{2} \\times 3{,}14 \\times 10 \\times 10$.",
   "answer": "157",
   "hint": "3,14 × 100 = 314, lalu bagi 2.",
   "explain": "Luas = 157 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: luas lingkaran penuh dengan r = 10 cm = ?",
   "answer": "314",
   "hint": "3,14 × 10 × 10.",
   "explain": "314 cm², setengahnya 157 cm². Benar.",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Jadi kelilingnya 51,4 cm dan luasnya 157 cm².",
 "visual": {
  "type": "shape",
  "shape": "setengah-lingkaran",
  "label": "d = 20 cm"
 }
}
```

### Contoh 3: Seperempat lingkaran

```soal
{
 "title": "Contoh 3",
 "text": "Hitung keliling dan luas seperempat lingkaran dengan jari-jari 14 cm. Gunakan $\\pi = \\frac{22}{7}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Keliling lingkaran penuh: $2 \\times \\frac{22}{7} \\times 14$ = ?",
   "answer": "88",
   "hint": "14 ÷ 7 = 2, lalu 2 × 22 × 2.",
   "explain": "Keliling penuh 88 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Lengkungan = seperempat keliling penuh.",
   "answer": "22",
   "hint": "88 ÷ 4.",
   "explain": "Lengkungan 22 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tambahkan dua sisi lurus (dua jari-jari). Keliling = ?",
   "answer": "50",
   "hint": "22 + 14 + 14.",
   "explain": "Keliling = 50 cm.",
   "error": "lupa-sisi-bangun",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Luas lingkaran penuh: $\\frac{22}{7} \\times 14 \\times 14$ = ?",
   "answer": "616",
   "hint": "22 × 2 × 14.",
   "explain": "Luas penuh 616 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Luas seperempat lingkaran = ?",
   "answer": "154",
   "hint": "616 ÷ 4.",
   "explain": "Luas = 154 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 4 × 154 = ?",
   "answer": "616",
   "hint": "Empat potong seperempat membentuk lingkaran penuh.",
   "explain": "616 cm², sama dengan luas penuh. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Jadi kelilingnya 50 cm dan luasnya 154 cm².",
 "visual": {
  "type": "shape",
  "shape": "seperempat-lingkaran",
  "label": "r = 14 cm"
 }
}
```

### Contoh 4: Soal cerita bangun gabungan

```soal
{
 "title": "Contoh 4",
 "text": "Taman Pak Made berbentuk persegi panjang 20 m × 14 m. Di salah satu sisi 14 m ditambahkan taman setengah lingkaran dengan diameter 14 m. Hitung luas seluruh taman dan panjang pagar di sekelilingnya. Gunakan $\\pi = \\frac{22}{7}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Luas persegi panjang 20 m × 14 m = ?",
   "answer": "280",
   "hint": "Panjang × lebar.",
   "explain": "20 × 14 = 280 m².",
   "error": "salah-langkah-materi",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Luas setengah lingkaran: $\\frac{1}{2} \\times \\frac{22}{7} \\times 7 \\times 7$ = ?",
   "answer": "77",
   "hint": "Luas lingkaran penuh r = 7 adalah 154.",
   "explain": "154 ÷ 2 = 77 m².",
   "error": "salah-langkah-materi",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Luas seluruh taman = ?",
   "answer": "357",
   "hint": "Jumlahkan kedua luas.",
   "explain": "280 + 77 = 357 m².",
   "error": "salah-langkah-materi",
   "suffix": "m²"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Sisi mana yang TIDAK dipagari?",
   "options": [
    "Sisi 14 m di kanan, tempat setengah lingkaran menempel",
    "Sisi 14 m di kiri",
    "Kedua sisi 20 m"
   ],
   "answer": "Sisi 14 m di kanan, tempat setengah lingkaran menempel",
   "hint": "Pagar hanya di tepi luar taman.",
   "explain": "Sisi itu ada di dalam taman, jadi tidak dipagari.",
   "error": "lupa-sisi-bangun"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Lengkungan: $\\frac{1}{2} \\times \\frac{22}{7} \\times 14$ = ?",
   "answer": "22",
   "hint": "Keliling penuh d = 14 adalah 44.",
   "explain": "44 ÷ 2 = 22 m.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Langkah 6: Panjang pagar = 20 + 20 + 14 + lengkungan = ?",
   "answer": "76",
   "hint": "20 + 20 + 14 + 22.",
   "explain": "Panjang pagar 76 m.",
   "error": "keliling-luas-tertukar",
   "suffix": "m"
  }
 ],
 "conclusion": "Jadi luas taman 357 m² dan panjang pagar 76 m."
}
```

## Kesalahan yang sering terjadi

- **Memakai diameter sebagai jari-jari.** Pada lingkaran dengan $d = 20$, menghitung luas $3{,}14 \times 20 \times 20 = 1.256$. Salah. Ubah dulu: $r = 10$, luas $= 314$ cm².
- **Lupa sisi lurus.** Keliling setengah lingkaran $d = 20$ ditulis 31,4 cm saja. Ingat potongan martabak: sisi bekas pisau juga ikut dikelilingi. Benar: 51,4 cm.
- **Menghitung garis di dalam bangun gabungan.** Pada Contoh 4, menambahkan sisi 14 m di kanan ke dalam keliling. Garis itu ada di dalam taman, bukan di tepi luar.
- **Tertukar rumus.** Memakai $\pi r^2$ untuk keliling atau $2\pi r$ untuk luas. Ingat: luas memakai satuan persegi (cm²) karena ada $r \times r$.
- **Salah satuan.** Menulis luas dalam cm, atau keliling dalam cm². Keliling = panjang (cm, m), luas = cm², m².

## Ringkasan

- $d = 2r$.
- Keliling lingkaran $K = \pi d = 2\pi r$.
- Luas lingkaran $L = \pi r^2 = \pi \times r \times r$.
- Setengah lingkaran: luas $\frac{1}{2}\pi r^2$, keliling = lengkungan + diameter.
- Seperempat lingkaran: luas $\frac{1}{4}\pi r^2$, keliling = lengkungan + 2 jari-jari.
- Bangun gabungan: pecah menjadi bagian, jumlahkan luas, keliling hanya sisi luar.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Diameter sebuah piring 18 cm. Berapa jari-jarinya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Hubungan jari-jari dan diameter adalah ...",
   "options": [
    "r = d ÷ 2",
    "r = d × 2",
    "r = d"
   ],
   "answer": "r = d ÷ 2",
   "hint": "Diameter = dua jari-jari.",
   "explain": "Jari-jari setengah dari diameter.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Berapa jari-jarinya?",
   "answer": "9",
   "hint": "18 ÷ 2.",
   "explain": "r = 9 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Jadi jari-jarinya 9 cm."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung keliling lingkaran dengan jari-jari 21 cm. Gunakan $\\pi = \\frac{22}{7}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa diameternya?",
   "answer": "42",
   "hint": "2 × 21.",
   "explain": "d = 42 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Hitung $\\frac{22}{7} \\times 42$.",
   "answer": "132",
   "hint": "42 ÷ 7 = 6, lalu 22 × 6.",
   "explain": "Keliling = 132 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Jadi kelilingnya 132 cm."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung luas lingkaran dengan diameter 20 cm. Gunakan $\\pi = 3{,}14$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa jari-jarinya?",
   "answer": "10",
   "hint": "Jangan langsung pakai diameter.",
   "explain": "r = 20 ÷ 2 = 10 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Hitung $3{,}14 \\times 10 \\times 10$.",
   "answer": "314",
   "hint": "3,14 × 100.",
   "explain": "Luas = 314 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Jadi luasnya 314 cm²."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Hitung keliling dan luas setengah lingkaran dengan diameter 28 cm. Gunakan $\\pi = \\frac{22}{7}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Lengkungan: $\\frac{1}{2} \\times \\frac{22}{7} \\times 28$ = ?",
   "answer": "44",
   "hint": "Keliling penuh = 88.",
   "explain": "Lengkungan 44 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Keliling setengah lingkaran = lengkungan + diameter = ?",
   "answer": "72",
   "hint": "Jangan lupa sisi lurus 28 cm.",
   "explain": "44 + 28 = 72 cm.",
   "error": "lupa-sisi-bangun",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Luas: $\\frac{1}{2} \\times \\frac{22}{7} \\times 14 \\times 14$ = ?",
   "answer": "308",
   "hint": "Luas penuh r = 14 adalah 616.",
   "explain": "616 ÷ 2 = 308 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Jadi kelilingnya 72 cm dan luasnya 308 cm²."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Roda sepeda Siti berdiameter 70 cm. Roda berputar 50 kali. Berapa meter jarak yang ditempuh? Gunakan $\\pi = \\frac{22}{7}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jarak satu putaran = keliling roda $= \\frac{22}{7} \\times 70$ = ?",
   "answer": "220",
   "hint": "70 ÷ 7 = 10.",
   "explain": "Satu putaran 220 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Jarak 50 putaran = ? cm",
   "answer": "11.000",
   "hint": "50 × 220.",
   "explain": "11.000 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Ubah ke meter.",
   "answer": "110",
   "hint": "1 m = 100 cm.",
   "explain": "11.000 ÷ 100 = 110 m.",
   "error": "salah-angka-tukar",
   "suffix": "m"
  }
 ],
 "conclusion": "Jadi jarak yang ditempuh 110 m."
}
```
