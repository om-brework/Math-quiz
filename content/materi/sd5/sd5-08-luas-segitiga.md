---
id: sd5-08-luas-segitiga
judul: Luas Segitiga
jenjang: sd5
moe: "Primary 5 · Measurement and Geometry · Area of Triangle"
prasyarat: [sd3-11-luas-keliling, sd3-13-garis-sejajar-tegak-lurus, sd4-09-luas-keliling-gabungan]
durasi_menit: 40
---

## Kenapa belajar ini?

Atap rumah, layar perahu, dan potongan roti lapis sering berbentuk segitiga. Untuk menghitung berapa cat atau kain yang dibutuhkan, kita perlu tahu luas segitiga.

## Analogi

Bayangkan **selembar roti tawar** berbentuk persegi panjang. Potong roti itu menurut garis miring dari satu sudut ke sudut seberangnya. Kamu mendapat **dua potong segitiga yang sama persis**. Jadi setiap segitiga adalah **setengah roti**.

Ternyata **setiap segitiga** bisa dibungkus oleh sebuah "roti" persegi panjang yang panjangnya sama dengan **alas** segitiga dan lebarnya sama dengan **tinggi** segitiga. Segitiga itu selalu menempati tepat **setengah** dari roti pembungkusnya.

```anim
{"type": "bangun", "title": "Roti dipotong miring", "titik": {"A": [0, 0], "B": [8, 0], "C": [8, 5], "D": [0, 5]}, "sisi": [["A", "B", "\\text{alas}"], ["B", "C", "\\text{tinggi}"], ["C", "D"], ["D", "A"], ["A", "C"]], "langkah": [{"say": "Selembar roti berbentuk persegi panjang: panjang = alas, lebar = tinggi.", "sisi": 4}, {"say": "Potong miring dari sudut A ke sudut C.", "sisi": 5, "sorot": ["AC"]}, {"say": "Dua segitiga ABC dan ACD sama persis. Setiap segitiga adalah setengah roti.", "sisi": 5, "sorot": ["AB", "BC", "AC"]}]}
```

Itulah sebabnya rumus luas segitiga memakai "setengah".

## Konsep

### Alas dan tinggi

- **Alas** adalah salah satu sisi segitiga yang kita pilih sebagai dasar.
- **Tinggi** adalah jarak **tegak lurus** dari titik puncak (sudut di seberang alas) ke garis alas. Tinggi membentuk sudut siku-siku ($90^\circ$) dengan alas.

Bayangkan tinggi seperti tali berbandul yang dijatuhkan lurus dari puncak ke lantai. Tali itu selalu jatuh tegak lurus, tidak miring.

Segitiga siku-siku: dua sisi yang membentuk sudut siku-siku adalah alas dan tinggi.

```anim
{"type": "bangun", "title": "Segitiga siku-siku", "titik": {"A": [0, 6], "B": [0, 0], "C": [8, 0]}, "sisi": [["B", "C", "8\\text{ cm}"], ["A", "B", "6\\text{ cm}"], ["C", "A"]], "sudut": [{"di": "B", "dari": "A", "ke": "C", "siku": true}], "langkah": [{"say": "Segitiga siku-siku ABC, siku-siku di B.", "sisi": 3, "sudut": 1}, {"say": "Alas BC = 8 cm.", "sisi": 3, "sudut": 1, "sorot": ["BC"]}, {"say": "Tinggi AB = 6 cm, sudah tegak lurus terhadap alas.", "sisi": 3, "sudut": 1, "sorot": ["AB", "B"]}]}
```
Segitiga lancip: tinggi berada **di dalam** segitiga.

```anim
{"type": "bangun", "title": "Segitiga lancip: tinggi di dalam", "titik": {"A": [6, 8], "B": [0, 0], "C": [12, 0], "D": [6, 0]}, "sisi": [["B", "C", "\\text{alas}"], ["C", "A"], ["A", "B"], ["A", "D", "t"]], "sudut": [{"di": "D", "dari": "A", "ke": "C", "siku": true}], "langkah": [{"say": "Segitiga lancip ABC dengan alas BC.", "sisi": 3}, {"say": "Jatuhkan tali berbandul dari puncak A lurus ke alas.", "sisi": 4, "sorot": ["AD"]}, {"say": "Tinggi t tegak lurus alas dan berada di dalam segitiga.", "sisi": 4, "sudut": 1, "sorot": ["AD", "D"]}]}
```
Segitiga tumpul: tinggi bisa berada **di luar** segitiga. Garis alas **diperpanjang** (garis putus-putus), lalu tinggi dijatuhkan dari puncak ke perpanjangan itu.

```anim
{"type": "bangun", "title": "Segitiga tumpul: tinggi di luar", "titik": {"A": [0, 8], "D": [0, 0], "B": [3, 0], "C": [8, 0]}, "sisi": [["B", "C", "\\text{alas}"], ["C", "A"], ["A", "B"], ["D", "B"], ["A", "D", "t"]], "sudut": [{"di": "D", "dari": "A", "ke": "B", "siku": true}], "langkah": [{"say": "Segitiga tumpul ABC, sudut tumpul di B.", "sisi": 3}, {"say": "Perpanjang garis alas CB ke kiri sampai titik D.", "sisi": 4, "sorot": ["DB"]}, {"say": "Tinggi t dijatuhkan dari A ke perpanjangan alas. Tinggi berada di luar segitiga.", "sisi": 5, "sudut": 1, "sorot": ["AD", "D"]}]}
```
Penting: **alas dan tinggi harus berpasangan.** Tinggi selalu diukur tegak lurus terhadap alas yang dipilih.

### Rumus luas segitiga

$$\text{Luas segitiga} = \frac{1}{2} \times \text{alas} \times \text{tinggi}$$

Satuannya satuan persegi, misalnya $\text{cm}^2$ atau $\text{m}^2$.

### Luas bangun gabungan

Pecah bangun menjadi persegi, persegi panjang, dan segitiga. Hitung luas setiap bagian, lalu jumlahkan. Kalau ada bagian yang "dibuang" (bolong), kurangkan.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Segitiga siku-siku

```soal
{
 "title": "Contoh 1",
 "text": "Hitung luas segitiga siku-siku dengan alas 8 cm dan tinggi 6 cm (gambar segitiga siku-siku di atas).",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pasangan alas dan tinggi yang tepat?",
   "options": [
    "8 cm dan 6 cm (dua sisi siku-siku)",
    "8 cm dan sisi miring",
    "6 cm dan sisi miring"
   ],
   "answer": "8 cm dan 6 cm (dua sisi siku-siku)",
   "hint": "Alas dan tinggi harus tegak lurus.",
   "explain": "Dua sisi yang membentuk sudut siku-siku adalah alas dan tinggi.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Luas roti pembungkus = 8 × 6 = ?",
   "answer": "48",
   "hint": "Panjang × lebar.",
   "explain": "Persegi panjang pembungkus 48 cm².",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Ambil setengahnya.",
   "answer": "24",
   "hint": "Segitiga = setengah roti.",
   "explain": "½ × 48 = 24 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: ½ × 8 × 6 = 4 × 6 = ?",
   "answer": "24",
   "hint": "Rumus langsung.",
   "explain": "Hasilnya 24 cm². Sama.",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Luas segitiga 24 cm²."
}
```

### Contoh 2: Memilih tinggi yang benar

```soal
{
 "title": "Contoh 2",
 "text": "Segitiga ABC punya alas BC = 12 cm. Sisi AB = 10 cm, sisi AC = 10 cm, dan tinggi dari A ke BC = 8 cm. Hitung luasnya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Untuk alas BC, tingginya berapa?",
   "options": [
    "8 cm",
    "10 cm",
    "12 cm"
   ],
   "answer": "8 cm",
   "hint": "Tinggi harus tegak lurus terhadap BC. AB dan AC miring.",
   "explain": "Tinggi yang tegak lurus BC adalah 8 cm.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Luas = ½ × 12 × 8 = ?",
   "answer": "48",
   "hint": "½ × 12 = 6, lalu 6 × 8.",
   "explain": "6 × 8 = 48 cm².",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: roti pembungkus 12 × 8 = ?",
   "answer": "96",
   "hint": "Panjang × lebar.",
   "explain": "96 cm², setengahnya 48. Sama.",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Luas segitiga ABC 48 cm²."
}
```

### Contoh 3: Tinggi di luar segitiga

```soal
{
 "title": "Contoh 3",
 "text": "Segitiga tumpul ABC punya alas BC = 5 cm. Tinggi dari A ke perpanjangan BC adalah 8 cm, dan titik kaki tinggi berjarak 3 cm dari B. Hitung luasnya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Luas = ½ × 5 × 8 = ?",
   "answer": "20",
   "hint": "Pakai alas 5 cm dan tinggi 8 cm.",
   "explain": "½ × 5 × 8 = 20 cm².",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Segitiga siku-siku besar: alas 3 + 5 = 8 cm, tinggi 8 cm. Luasnya?",
   "answer": "32",
   "hint": "½ × 8 × 8.",
   "explain": "Luas segitiga besar 32 cm².",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Segitiga siku-siku kecil: alas 3 cm, tinggi 8 cm. Luasnya?",
   "answer": "12",
   "hint": "½ × 3 × 8.",
   "explain": "Luas segitiga kecil 12 cm².",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: besar − kecil = ?",
   "answer": "20",
   "hint": "32 − 12.",
   "explain": "32 − 12 = 20 cm². Sama dengan hasil rumus.",
   "error": "salah-fakta-kurang",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Luas segitiga ABC 20 cm²; rumus tetap berlaku walau tinggi di luar."
}
```

### Contoh 4: Soal cerita bangun gabungan

```anim
{"type": "bangun", "title": "Dinding gudang", "titik": {"P": [0, 0], "Q": [6, 0], "R": [6, 3], "S": [0, 3], "T": [3, 5], "M": [3, 3]}, "sisi": [["P", "Q", "6\\text{ m}"], ["Q", "R", "3\\text{ m}"], ["R", "S"], ["S", "P"], ["S", "T"], ["T", "R"], ["T", "M", "2\\text{ m}"]], "langkah": [{"say": "Bagian bawah: persegi panjang 6 m × 3 m.", "sisi": 4, "sorot": ["PQ", "QR", "RS", "SP"]}, {"say": "Bagian atas: segitiga dengan alas 6 m dan tinggi 2 m.", "sisi": 7, "sorot": ["ST", "TR", "TM"]}]}
```

```soal
{
 "title": "Contoh 4",
 "text": "Dinding depan gudang terdiri dari persegi panjang 6 m × 3 m dan segitiga di atasnya dengan alas 6 m dan tinggi 2 m. Satu kaleng cat cukup untuk 8 m². Berapa kaleng cat yang dibutuhkan?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Luas persegi panjang = 6 × 3 = ?",
   "answer": "18",
   "hint": "Panjang × lebar.",
   "explain": "18 m².",
   "error": "salah-fakta-kali",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Luas segitiga = ½ × 6 × 2 = ?",
   "answer": "6",
   "hint": "Setengah dari roti 6 × 2.",
   "explain": "6 m².",
   "error": "salah-langkah-materi",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Luas dinding seluruhnya?",
   "answer": "24",
   "hint": "Jumlahkan kedua bagian.",
   "explain": "18 + 6 = 24 m².",
   "error": "salah-fakta-tambah",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Banyak kaleng = 24 ÷ 8 = ?",
   "answer": "3",
   "hint": "Satu kaleng untuk 8 m².",
   "explain": "24 ÷ 8 = 3 kaleng.",
   "error": "salah-fakta-bagi",
   "suffix": "kaleng"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 3 × 8 = ?",
   "answer": "24",
   "hint": "Kaleng × luas per kaleng.",
   "explain": "24 m², pas dengan luas dinding.",
   "error": "salah-fakta-kali",
   "suffix": "m²"
  }
 ],
 "conclusion": "Pak Made butuh 3 kaleng cat."
}
```

## Kesalahan yang sering terjadi

- **Memakai sisi miring sebagai tinggi.** Pada contoh 2, menghitung $\frac{1}{2} \times 12 \times 10 = 60$. Sisi AB miring, tidak tegak lurus alas. Tinggi yang benar 8 cm.
- **Lupa setengah.** Menghitung $8 \times 6 = 48$ untuk segitiga siku-siku. Itu luas roti pembungkus. Segitiganya setengah: 24.
- **Mengira tinggi harus di dalam.** Pada segitiga tumpul, mencari tinggi di dalam segitiga dan tidak menemukannya. Perpanjang alas, lalu jatuhkan tinggi di luar.
- **Alas dan tinggi tidak berpasangan.** Mengambil alas dari satu sisi dan tinggi dari sisi lain. Tinggi harus tegak lurus terhadap alas yang dipakai.
- **Satuan salah.** Menulis 24 cm. Luas memakai satuan persegi: $24\ \text{cm}^2$.

## Ringkasan

- Luas segitiga $= \frac{1}{2} \times \text{alas} \times \text{tinggi}$.
- Segitiga selalu setengah dari persegi panjang pembungkusnya (alas × tinggi).
- Tinggi tegak lurus terhadap alas. Pada segitiga tumpul, tinggi bisa di luar segitiga.
- Pada segitiga siku-siku, dua sisi siku-sikunya adalah alas dan tinggi.
- Bangun gabungan: pecah, hitung tiap bagian, lalu jumlahkan atau kurangkan.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Sebuah segitiga punya alas 14 cm dan tinggi 9 cm. Berapa luasnya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "½ × 14 = ?",
   "answer": "7",
   "hint": "Setengah dari alas.",
   "explain": "½ × 14 = 7.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Luas = 7 × 9 = ?",
   "answer": "63",
   "hint": "Kalikan dengan tinggi.",
   "explain": "Luasnya 63 cm².",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Luas segitiga 63 cm²."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Segitiga siku-siku punya sisi 5 cm, 12 cm, dan sisi miring 13 cm. Berapa luasnya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Alas dan tinggi yang dipakai?",
   "options": [
    "5 cm dan 12 cm",
    "12 cm dan 13 cm",
    "5 cm dan 13 cm"
   ],
   "answer": "5 cm dan 12 cm",
   "hint": "Sisi miring tidak tegak lurus sisi lain.",
   "explain": "Dua sisi siku-siku: 5 cm dan 12 cm.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Luas = ½ × 5 × 12 = ?",
   "answer": "30",
   "hint": "½ × 12 = 6, lalu × 5.",
   "explain": "Luasnya 30 cm².",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Luas segitiga 30 cm²."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Segitiga tumpul punya alas 6 cm. Tingginya di luar segitiga, 7 cm. Berapa luasnya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "½ × 6 = ?",
   "answer": "3",
   "hint": "Setengah dari alas.",
   "explain": "½ × 6 = 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Luas = 3 × 7 = ?",
   "answer": "21",
   "hint": "Rumusnya sama walau tinggi di luar.",
   "explain": "Luasnya 21 cm².",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Luas segitiga 21 cm²."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Sebuah bangun terdiri dari persegi bersisi 8 cm dan segitiga di atasnya dengan alas 8 cm dan tinggi 5 cm. Berapa luas bangun itu?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Luas persegi = 8 × 8 = ?",
   "answer": "64",
   "hint": "Sisi × sisi.",
   "explain": "64 cm².",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Luas segitiga = ½ × 8 × 5 = ?",
   "answer": "20",
   "hint": "4 × 5.",
   "explain": "20 cm².",
   "error": "salah-fakta-kali",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Luas bangun?",
   "answer": "84",
   "hint": "Jumlahkan.",
   "explain": "64 + 20 = 84 cm².",
   "error": "salah-fakta-tambah",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Luas bangun 84 cm²."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Taman Bu Siti berbentuk persegi panjang 12 m × 9 m. Di dalamnya ada petak bunga segitiga dengan alas 12 m dan tinggi 9 m. Sisanya rumput. Berapa luas rumputnya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Luas taman = 12 × 9 = ?",
   "answer": "108",
   "hint": "Panjang × lebar.",
   "explain": "108 m².",
   "error": "salah-fakta-kali",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Luas petak bunga = ½ × 12 × 9 = ?",
   "answer": "54",
   "hint": "Setengah dari 108.",
   "explain": "54 m².",
   "error": "salah-langkah-materi",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Luas rumput?",
   "answer": "54",
   "hint": "Bagian bunga dibuang dari taman.",
   "explain": "108 − 54 = 54 m².",
   "error": "salah-pilih-operasi",
   "suffix": "m²"
  }
 ],
 "conclusion": "Luas rumput 54 m²."
}
```
