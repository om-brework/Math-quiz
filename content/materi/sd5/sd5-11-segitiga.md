---
id: sd5-11-segitiga
judul: Segitiga
jenjang: sd5
moe: "Primary 5 · Measurement and Geometry · Triangles"
prasyarat: [sd4-10-sudut-derajat, sd5-10-sudut-garis-titik]
durasi_menit: 40
---

## Kenapa belajar ini?

Segitiga ada di mana-mana: kuda-kuda atap rumah, rangka jembatan, dan penyangga rak. Segitiga kuat karena bentuknya tidak mudah berubah. Dengan mengenal sifat-sifatnya, kamu bisa menghitung sudut yang belum diketahui.

## Analogi

Ambil **segitiga dari kertas**. Warnai ketiga sudutnya, lalu **sobek** ketiga ujung sudut itu. Jajarkan ketiga sobekan sehingga ujung-ujungnya bertemu di satu titik.

Apa yang terjadi? Ketiga sobekan selalu membentuk **garis lurus**. Dari materi sebelumnya, sudut pada garis lurus adalah $180^\circ$, atau **setengah pizza**. Jadi jumlah tiga sudut segitiga **selalu** $180^\circ$, berapa pun bentuk dan ukuran segitiganya.

```anim
{"type": "bangun", "title": "Tiga sudut segitiga", "titik": {"A": [3.68, 6.374], "B": [0, 0], "C": [6, 0]}, "sisi": [["B", "C"], ["C", "A"], ["A", "B"]], "sudut": [{"di": "A", "dari": "B", "ke": "C", "label": "50^\\circ"}, {"di": "B", "dari": "C", "ke": "A", "label": "60^\\circ"}, {"di": "C", "dari": "A", "ke": "B", "label": "70^\\circ"}], "langkah": [{"say": "Segitiga kertas ABC.", "sudut": 0}, {"say": "Warnai ketiga sudutnya: 50°, 60°, dan 70°.", "sudut": 3}, {"say": "Jumlahnya 50° + 60° + 70° = 180°.", "sudut": 3, "sorot": ["A", "B", "C"]}]}
```

```anim
{"type": "bangun", "title": "Sobekan sudut membentuk garis lurus", "titik": {"P": [-5, 0], "O": [0, 0], "Q": [5, 0], "X": [2.0, 3.464], "Y": [-2.571, 3.064]}, "sisi": [["P", "Q"], ["O", "X"], ["O", "Y"]], "sudut": [{"di": "O", "dari": "Q", "ke": "X", "label": "60^\\circ"}, {"di": "O", "dari": "X", "ke": "Y", "label": "70^\\circ"}, {"di": "O", "dari": "Y", "ke": "P", "label": "50^\\circ"}], "langkah": [{"say": "Jajarkan sobekan sudut 60° di titik O.", "sisi": 2, "sudut": 1}, {"say": "Tempelkan sobekan 70° di sebelahnya.", "sisi": 3, "sudut": 2}, {"say": "Sobekan 50° menutup sisanya. Ketiganya pas membentuk garis lurus: 180°.", "sisi": 3, "sudut": 3, "sorot": ["PQ"]}]}
```

Setiap kali mencari sudut segitiga, bayangkan tiga sobekan itu harus pas membentuk garis lurus.

## Konsep

### Jumlah sudut segitiga

$$\angle A + \angle B + \angle C = 180^\circ$$

Jika dua sudut diketahui, sudut ketiga $= 180^\circ -$ (jumlah dua sudut itu).

### Segitiga siku-siku

Salah satu sudutnya $90^\circ$ (ditandai kotak kecil). Dua sudut lainnya jumlahnya $180^\circ - 90^\circ = 90^\circ$.

```anim
{"type": "bangun", "title": "Segitiga siku-siku", "titik": {"A": [0, 5], "B": [0, 0], "C": [6, 0]}, "sisi": [["A", "B"], ["B", "C"], ["C", "A"]], "sudut": [{"di": "B", "dari": "C", "ke": "A", "siku": true}, {"di": "A", "dari": "B", "ke": "C", "label": "a"}, {"di": "C", "dari": "A", "ke": "B", "label": "c"}], "langkah": [{"say": "Sudut B siku-siku (90°), ditandai kotak kecil.", "sudut": 1, "sorot": ["B"]}, {"say": "Dua sudut lainnya: a + c = 180° − 90° = 90°.", "sudut": 3, "sorot": ["A", "C"]}]}
```
### Segitiga sama kaki

- **Dua sisi sama panjang** (ditandai garis kecil yang sama).
- **Dua sudut alas sama besar.** Sudut alas adalah sudut di ujung sisi ketiga, yang berhadapan dengan sisi-sisi yang sama panjang.
- Sudut di antara dua sisi yang sama disebut **sudut puncak**.

```anim
{"type": "bangun", "title": "Segitiga sama kaki", "titik": {"P": [3, 5], "Q": [0, 0], "R": [6, 0]}, "sisi": [["P", "Q"], ["P", "R"], ["Q", "R"]], "sudut": [{"di": "Q", "dari": "R", "ke": "P", "label": "x"}, {"di": "R", "dari": "P", "ke": "Q", "label": "x"}, {"di": "P", "dari": "Q", "ke": "R", "label": "\\text{puncak}"}], "langkah": [{"say": "PQ dan PR sama panjang.", "sorot": ["PQ", "PR"]}, {"say": "Sudut alas Q dan R (di ujung sisi QR) sama besar.", "sudut": 2, "sorot": ["Q", "R"]}, {"say": "Sudut P, di antara dua sisi yang sama, adalah sudut puncak.", "sudut": 3, "sorot": ["P"]}]}
```
PQ = PR, jadi $\angle Q = \angle R$.

### Segitiga sama sisi

- **Ketiga sisi sama panjang.**
- **Ketiga sudut sama besar**, masing-masing $180^\circ \div 3 = 60^\circ$.

### Sudut di luar segitiga

Jika satu sisi segitiga diperpanjang, sudut di luar dan sudut di dalam yang bersebelahan berada pada **garis lurus**, jadi jumlahnya $180^\circ$.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Dua sudut diketahui

```soal
{
 "title": "Contoh 1",
 "text": "Pada segitiga ABC, $\\angle A = 48^\\circ$ dan $\\angle B = 67^\\circ$. Hitung $\\angle C$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Jumlah ketiga sudut segitiga?",
   "options": [
    "180°",
    "360°",
    "90°"
   ],
   "answer": "180°",
   "hint": "Tiga sobekan sudut membentuk garis lurus.",
   "explain": "Jumlah sudut segitiga selalu 180°.",
   "error": "salah-hitung-sudut"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 48° + 67° = ?",
   "answer": "115",
   "hint": "Jumlahkan yang diketahui.",
   "explain": "115°.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: ∠C = 180° − 115° = ?",
   "answer": "65",
   "hint": "Kurangkan dari 180.",
   "explain": "∠C = 65°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 48° + 67° + 65° = ?",
   "answer": "180",
   "hint": "Jumlahkan ketiganya.",
   "explain": "Jumlahnya 180°. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi ∠C = 65°."
}
```

### Contoh 2: Segitiga siku-siku

```soal
{
 "title": "Contoh 2",
 "text": "Segitiga ABC siku-siku di B. $\\angle A = 34^\\circ$. Hitung $\\angle C$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Berapa besar ∠B?",
   "answer": "90",
   "hint": "Siku-siku ditandai kotak kecil.",
   "explain": "∠B = 90°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 90° + 34° = ?",
   "answer": "124",
   "hint": "Jangan lupa sudut siku-siku ikut dijumlah.",
   "explain": "124°.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: ∠C = 180° − 124° = ?",
   "answer": "56",
   "hint": "Kurangkan dari 180.",
   "explain": "∠C = 56°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: dua sudut lancip 34° + 56° = ?",
   "answer": "90",
   "hint": "Pada segitiga siku-siku keduanya berjumlah 90°.",
   "explain": "34° + 56° = 90°. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi ∠C = 56°."
}
```

### Contoh 3: Segitiga sama kaki

```soal
{
 "title": "Contoh 3",
 "text": "Segitiga PQR sama kaki dengan PQ = PR (gambar di atas). (a) Jika $\\angle P = 40^\\circ$, hitung $\\angle Q$ dan $\\angle R$. (b) Jika $\\angle Q = 52^\\circ$, hitung $\\angle P$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Sudut mana yang sama besar?",
   "options": [
    "∠Q dan ∠R",
    "∠P dan ∠Q",
    "∠P dan ∠R"
   ],
   "answer": "∠Q dan ∠R",
   "hint": "Sudut alas ada di ujung sisi ketiga, QR.",
   "explain": "PQ = PR, jadi sudut alas ∠Q = ∠R.",
   "error": "salah-hitung-sudut"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2 (a): Jumlah dua sudut alas = 180° − 40° = ?",
   "answer": "140",
   "hint": "Kurangkan sudut puncak dari 180.",
   "explain": "Dua sudut alas bersama-sama 140°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3 (a): ∠Q = ∠R = ?",
   "answer": "70",
   "hint": "Bagi dua.",
   "explain": "140° ÷ 2 = 70°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4 (b): Jumlah dua sudut alas = 52° + 52° = ?",
   "answer": "104",
   "hint": "∠R juga 52°.",
   "explain": "104°.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5 (b): ∠P = 180° − 104° = ?",
   "answer": "76",
   "hint": "Kurangkan dari 180.",
   "explain": "∠P = 76°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban (b): 76° + 52° + 52° = ?",
   "answer": "180",
   "hint": "Jumlahkan ketiganya.",
   "explain": "Jumlahnya 180°. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  }
 ],
 "conclusion": "(a) ∠Q = ∠R = 70°. (b) ∠P = 76°."
}
```

### Contoh 4: Sisi diperpanjang

```anim
{"type": "bangun", "title": "Sisi BC diperpanjang sampai D", "titik": {"A": [3, 5], "B": [0, 0], "C": [6, 0], "D": [11, 0]}, "sisi": [["A", "B"], ["A", "C"], ["B", "C"], ["C", "D"]], "sudut": [{"di": "C", "dari": "D", "ke": "A", "label": "115^\\circ"}, {"di": "C", "dari": "A", "ke": "B", "label": "?"}, {"di": "A", "dari": "B", "ke": "C", "label": "?"}], "langkah": [{"say": "Segitiga sama kaki ABC dengan AB = AC.", "sisi": 3, "sorot": ["AB", "AC"]}, {"say": "BC diperpanjang ke D. Sudut luar ACD = 115°.", "sisi": 4, "sudut": 1, "sorot": ["CD"]}, {"say": "∠ACB dan ∠ACD ada pada garis lurus BD. Lalu cari ∠BAC.", "sisi": 4, "sudut": 3, "sorot": ["BC", "CD"]}]}
```

```soal
{
 "title": "Contoh 4",
 "text": "Segitiga ABC sama kaki dengan AB = AC. Sisi BC diperpanjang sampai D, sehingga B, C, D segaris. $\\angle ACD = 115^\\circ$. Hitung $\\angle BAC$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: ∠ACB = 180° − 115° = ?",
   "answer": "65",
   "hint": "∠ACB dan ∠ACD ada pada garis lurus BD.",
   "explain": "∠ACB = 65°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: AB = AC, jadi ∠ABC = ?",
   "answer": "65",
   "hint": "Sudut alas sama besar.",
   "explain": "∠ABC = ∠ACB = 65°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: ∠BAC = 180° − 65° − 65° = ?",
   "answer": "50",
   "hint": "Jumlah sudut segitiga 180°.",
   "explain": "∠BAC = 50°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 50° + 65° + 65° = ?",
   "answer": "180",
   "hint": "Jumlahkan ketiganya.",
   "explain": "Jumlahnya 180°. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi ∠BAC = 50°."
}
```

### Contoh 5: Soal cerita kuda-kuda atap

```soal
{
 "title": "Contoh 5",
 "text": "Pak Ketut membuat kuda-kuda atap berbentuk segitiga sama kaki. Sudut di puncak atap $110^\\circ$. Berapa besar sudut di kedua ujung bawah atap?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Jumlah dua sudut alas = 180° − 110° = ?",
   "answer": "70",
   "hint": "Kurangkan sudut puncak dari 180.",
   "explain": "Dua ujung bawah bersama-sama 70°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Masing-masing = 70° ÷ 2 = ?",
   "answer": "35",
   "hint": "Dua sudut alas sama besar.",
   "explain": "70° ÷ 2 = 35°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 110° + 35° + 35° = ?",
   "answer": "180",
   "hint": "Jumlahkan ketiganya.",
   "explain": "Jumlahnya 180°. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  }
 ],
 "conclusion": "Setiap ujung bawah atap membentuk sudut 35°.",
 "visual": {
  "type": "table",
  "head": [
   "Puncak",
   "Ujung kiri",
   "Ujung kanan",
   "Jumlah"
  ],
  "rows": [
   [
    "110°",
    "?",
    "?",
    "180°"
   ]
  ]
 }
}
```

## Kesalahan yang sering terjadi

- **Memakai 360° untuk segitiga.** Tiga sobekan sudut membentuk garis lurus, bukan satu putaran. Jumlahnya $180^\circ$.
- **Salah memilih sudut yang sama.** Pada segitiga sama kaki, yang sama adalah **sudut alas** (di ujung sisi ketiga), bukan sudut puncak dengan sudut alas.
- **Lupa membagi dua.** Pada contoh 3(a), menjawab $\angle Q = 140^\circ$. Angka $140^\circ$ adalah jumlah dua sudut alas, jadi masih harus dibagi 2.
- **Lupa sudut siku-siku.** Pada segitiga siku-siku, $90^\circ$ juga harus ikut dijumlahkan, meskipun hanya ditandai kotak kecil.
- **Segitiga dengan dua sudut tumpul atau dua siku-siku.** Ini tidak mungkin, karena dua sudut itu saja sudah $180^\circ$ atau lebih. Jika hasil hitunganmu seperti itu, periksa kembali.

## Ringkasan

- Jumlah ketiga sudut segitiga selalu $180^\circ$.
- Segitiga siku-siku: satu sudut $90^\circ$, dua sudut lain jumlahnya $90^\circ$.
- Segitiga sama kaki: dua sisi sama panjang, dua sudut alas sama besar.
- Segitiga sama sisi: tiga sisi sama panjang, setiap sudut $60^\circ$.
- Sudut di luar dan sudut di dalam pada sisi yang diperpanjang jumlahnya $180^\circ$.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Dua sudut sebuah segitiga $75^\\circ$ dan $38^\\circ$. Hitung sudut ketiga.",
 "steps": [
  {
   "kind": "number",
   "prompt": "75° + 38° = ?",
   "answer": "113",
   "hint": "Jumlahkan yang diketahui.",
   "explain": "113°.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Sudut ketiga?",
   "answer": "67",
   "hint": "Kurangkan dari 180°.",
   "explain": "180° − 113° = 67°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  }
 ],
 "conclusion": "Sudut ketiga 67°."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Sebuah segitiga siku-siku punya satu sudut $29^\\circ$. Hitung sudut lancip yang lain.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Jumlah dua sudut lancip pada segitiga siku-siku?",
   "options": [
    "90°",
    "180°",
    "360°"
   ],
   "answer": "90°",
   "hint": "180° dikurangi sudut siku-siku.",
   "explain": "180° − 90° = 90°.",
   "error": "salah-hitung-sudut"
  },
  {
   "kind": "number",
   "prompt": "Sudut lancip yang lain?",
   "answer": "61",
   "hint": "90 − 29.",
   "explain": "90° − 29° = 61°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  }
 ],
 "conclusion": "Sudut lancip yang lain 61°."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Segitiga sama kaki punya sudut alas $64^\\circ$. Hitung sudut puncaknya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jumlah dua sudut alas?",
   "answer": "128",
   "hint": "Kedua sudut alas sama besar.",
   "explain": "64° + 64° = 128°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Sudut puncak?",
   "answer": "52",
   "hint": "Kurangkan dari 180°.",
   "explain": "180° − 128° = 52°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  }
 ],
 "conclusion": "Sudut puncaknya 52°."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Segitiga sama kaki punya sudut puncak $96^\\circ$. Hitung setiap sudut alasnya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jumlah dua sudut alas?",
   "answer": "84",
   "hint": "180° − 96°.",
   "explain": "84°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Setiap sudut alas?",
   "answer": "42",
   "hint": "Jangan lupa bagi dua.",
   "explain": "84° ÷ 2 = 42°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  }
 ],
 "conclusion": "Setiap sudut alas 42°."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Segitiga ABC sama sisi. Sisi BC diperpanjang sampai D. Hitung $\\angle ACD$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "∠ACB pada segitiga sama sisi?",
   "answer": "60",
   "hint": "Tiga sudut sama besar: 180° ÷ 3.",
   "explain": "∠ACB = 60°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "∠ACD?",
   "answer": "120",
   "hint": "∠ACB dan ∠ACD ada pada garis lurus.",
   "explain": "180° − 60° = 120°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi ∠ACD = 120°."
}
```
