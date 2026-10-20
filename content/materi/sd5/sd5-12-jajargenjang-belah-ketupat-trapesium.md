---
id: sd5-12-jajargenjang-belah-ketupat-trapesium
judul: Jajargenjang, Belah Ketupat, dan Trapesium
jenjang: sd5
moe: "Primary 5 · Measurement and Geometry · Parallelogram, Rhombus and Trapezium"
prasyarat: [sd3-13-garis-sejajar-tegak-lurus, sd4-11-sifat-persegi-panjang, sd5-10-sudut-garis-titik, sd5-11-segitiga]
durasi_menit: 40
---

## Kenapa belajar ini?

Ubin lantai, pagar lipat, dan bentuk ketupat lebaran memakai bangun segi empat yang miring. Dengan mengenal sifat sisi dan sudutnya, kamu bisa menghitung sudut yang belum diketahui tanpa mengukur.

## Analogi

Bayangkan kamu membuat **bingkai dari 4 stik es krim** yang ujung-ujungnya disambung dengan paku payung, sehingga sambungannya bisa bergerak.

- Mula-mula bingkai berbentuk **persegi panjang**. Lalu **dorong** bagian atasnya ke samping. Bingkai menjadi **jajargenjang**. Sisi yang berhadapan tetap sejajar dan tetap sama panjang, karena stiknya tidak berubah.
- Kalau keempat stik **sama panjang** (mula-mula persegi), bingkai yang didorong menjadi **belah ketupat**.
- Saat didorong, satu sudut **membesar** dan sudut di sebelahnya **mengecil** dengan jumlah yang sama. Jadi dua sudut bersebelahan selalu berjumlah $180^\circ$.
```anim
{"type": "bangun", "title": "Bingkai stik es krim didorong", "titik": {"D": [0, 0], "C": [6, 0], "B": [6, 4], "A": [0, 4], "A'": [2.0, 3.464], "B'": [8.0, 3.464]}, "sisi": [["D", "C"], ["C", "B"], ["B", "A"], ["A", "D"], ["D", "A'"], ["A'", "B'"], ["B'", "C"]], "sudut": [{"di": "D", "dari": "C", "ke": "A'", "label": "60^\\circ"}, {"di": "C", "dari": "B'", "ke": "D", "label": "120^\\circ"}], "langkah": [{"say": "Mula-mula bingkai berbentuk persegi panjang ABCD.", "sisi": 4}, {"say": "Dorong bagian atas ke samping. Bingkai menjadi jajargenjang A'B'CD; stiknya tetap sama panjang.", "sisi": 7, "sorot": ["DA'", "A'B'", "B'C"]}, {"say": "Sudut D mengecil menjadi 60°, sudut C membesar menjadi 120°. Jumlahnya tetap 180°.", "sisi": 7, "sudut": 2, "sorot": ["D", "C"]}]}
```

- **Trapesium** berbeda: bentuknya seperti tumpeng yang puncaknya dipotong datar. Hanya **satu pasang** sisinya yang sejajar.

## Konsep

### Jajargenjang

```anim
{"type": "bangun", "title": "Jajargenjang ABCD", "titik": {"A": [0, 4], "B": [7, 4], "C": [9, 0], "D": [2, 0]}, "sisi": [["A", "B"], ["B", "C"], ["C", "D"], ["D", "A"]], "sudut": [{"di": "A", "dari": "B", "ke": "D", "label": "x"}, {"di": "C", "dari": "D", "ke": "B", "label": "x"}, {"di": "B", "dari": "C", "ke": "A", "label": "y"}, {"di": "D", "dari": "A", "ke": "C", "label": "y"}], "langkah": [{"say": "AB sejajar DC, dan AD sejajar BC.", "sorot": ["AB", "CD"]}, {"say": "Sudut berhadapan sama besar: ∠A = ∠C.", "sudut": 2, "sorot": ["A", "C"]}, {"say": "∠B = ∠D. Sudut bersebelahan, misalnya x + y, berjumlah 180°.", "sudut": 4, "sorot": ["B", "D"]}]}
```
- Dua pasang sisi berhadapan **sejajar**: AB sejajar DC, AD sejajar BC.
- Sisi berhadapan **sama panjang**: AB = DC, AD = BC.
- Sudut berhadapan **sama besar**: $\angle A = \angle C$, $\angle B = \angle D$.
- Dua sudut bersebelahan jumlahnya $180^\circ$: $\angle A + \angle B = 180^\circ$, $\angle A + \angle D = 180^\circ$, dan seterusnya.
- Jumlah keempat sudut $360^\circ$.

### Belah ketupat

Belah ketupat adalah jajargenjang yang **keempat sisinya sama panjang**. Jadi semua sifat jajargenjang berlaku:

- Sisi berhadapan sejajar.
- Sudut berhadapan sama besar.
- Dua sudut bersebelahan jumlahnya $180^\circ$.

### Trapesium

```anim
{"type": "bangun", "title": "Trapesium ABCD", "titik": {"A": [2, 4], "B": [6, 4], "C": [8, 0], "D": [0, 0]}, "sisi": [["A", "B"], ["B", "C"], ["C", "D"], ["D", "A"]], "sudut": [{"di": "A", "dari": "B", "ke": "D"}, {"di": "D", "dari": "A", "ke": "C"}, {"di": "B", "dari": "C", "ke": "A"}, {"di": "C", "dari": "D", "ke": "B"}], "langkah": [{"say": "Hanya AB dan DC yang sejajar.", "sorot": ["AB", "CD"]}, {"say": "Pada kaki AD: ∠A + ∠D = 180°.", "sudut": 2, "sorot": ["DA", "A", "D"]}, {"say": "Pada kaki BC: ∠B + ∠C = 180°.", "sudut": 4, "sorot": ["BC", "B", "C"]}]}
```
- Tepat **satu pasang** sisi sejajar: AB sejajar DC.
- Dua sudut di antara sepasang sisi sejajar, pada **kaki yang sama**, jumlahnya $180^\circ$: $\angle A + \angle D = 180^\circ$ dan $\angle B + \angle C = 180^\circ$.
- Jumlah keempat sudut $360^\circ$.

### Kenapa sudut bersebelahan berjumlah 180°?

Perpanjang sisi DC ke kanan melewati C. Sudut di luar C dan $\angle C$ berada pada garis lurus, jadi jumlahnya $180^\circ$. Karena AB sejajar DC, sudut di luar C itu sama besar dengan $\angle B$. Akibatnya $\angle B + \angle C = 180^\circ$. Pada bingkai stik es krim, ini terlihat sebagai "satu sudut membesar, sudut sebelahnya mengecil".

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Sudut jajargenjang

```soal
{
 "title": "Contoh 1",
 "text": "Pada jajargenjang ABCD, $\\angle A = 65^\\circ$. Hitung $\\angle B$, $\\angle C$, dan $\\angle D$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: ∠C berhadapan dengan ∠A. ∠C = ?",
   "answer": "65",
   "hint": "Sudut berhadapan sama besar.",
   "explain": "∠C = 65°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: ∠B bersebelahan dengan ∠A. ∠B = ?",
   "answer": "115",
   "hint": "Sudut bersebelahan berjumlah 180°.",
   "explain": "180° − 65° = 115°. Sudut A mengecil, sudut B membesar.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: ∠D berhadapan dengan ∠B. ∠D = ?",
   "answer": "115",
   "hint": "Sudut berhadapan sama besar.",
   "explain": "∠D = 115°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 65° + 115° + 65° + 115° = ?",
   "answer": "360",
   "hint": "Jumlah sudut segi empat.",
   "explain": "Jumlahnya 360°. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi ∠B = 115°, ∠C = 65°, dan ∠D = 115°."
}
```

### Contoh 2: Belah ketupat

```soal
{
 "title": "Contoh 2",
 "text": "PQRS adalah belah ketupat dengan sisi PQ = 7 cm dan $\\angle P = 128^\\circ$. Hitung panjang QR, keliling PQRS, $\\angle Q$, dan $\\angle R$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: QR = ?",
   "answer": "7",
   "hint": "Semua sisi belah ketupat sama panjang.",
   "explain": "QR = 7 cm.",
   "error": "lupa-sisi-bangun",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Keliling = 4 × 7 = ?",
   "answer": "28",
   "hint": "Ada empat sisi sama panjang.",
   "explain": "Keliling 28 cm.",
   "error": "lupa-sisi-bangun",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: ∠Q bersebelahan dengan ∠P. ∠Q = ?",
   "answer": "52",
   "hint": "180° − 128°.",
   "explain": "∠Q = 52°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: ∠R berhadapan dengan ∠P. ∠R = ?",
   "answer": "128",
   "hint": "Sudut berhadapan sama besar.",
   "explain": "∠R = 128°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 128° + 52° + 128° + 52° = ?",
   "answer": "360",
   "hint": "∠S = ∠Q = 52°.",
   "explain": "Jumlahnya 360°. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  }
 ],
 "conclusion": "QR = 7 cm, keliling 28 cm, ∠Q = 52°, dan ∠R = 128°."
}
```

### Contoh 3: Trapesium

```soal
{
 "title": "Contoh 3",
 "text": "Pada trapesium ABCD (gambar di atas), AB sejajar DC. $\\angle A = 108^\\circ$ dan $\\angle B = 105^\\circ$. Hitung $\\angle D$ dan $\\angle C$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pasangan sudut mana yang berjumlah 180°?",
   "options": [
    "∠A dengan ∠D, dan ∠B dengan ∠C",
    "∠A dengan ∠B, dan ∠C dengan ∠D",
    "∠A dengan ∠C, dan ∠B dengan ∠D"
   ],
   "answer": "∠A dengan ∠D, dan ∠B dengan ∠C",
   "hint": "Pasangannya ada pada kaki yang sama.",
   "explain": "Kaki AD dan kaki BC menghubungkan dua sisi sejajar.",
   "error": "salah-hitung-sudut"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: ∠D = 180° − 108° = ?",
   "answer": "72",
   "hint": "Kurangkan dari 180.",
   "explain": "∠D = 72°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: ∠C = 180° − 105° = ?",
   "answer": "75",
   "hint": "Kurangkan dari 180.",
   "explain": "∠C = 75°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 108° + 105° + 75° + 72° = ?",
   "answer": "360",
   "hint": "Jumlahkan keempatnya.",
   "explain": "Jumlahnya 360°. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi ∠D = 72° dan ∠C = 75°."
}
```

### Contoh 4: Jajargenjang dengan segitiga di dalamnya

```anim
{"type": "bangun", "title": "Segitiga ADE di dalam jajargenjang", "titik": {"A": [-1.539, 4.229], "B": [6.461, 4.229], "C": [8, 0], "D": [0, 0], "E": [3.501, 0]}, "sisi": [["A", "B"], ["B", "C"], ["C", "D"], ["D", "A"], ["A", "E"]], "sudut": [{"di": "B", "dari": "C", "ke": "A", "label": "110^\\circ"}, {"di": "A", "dari": "D", "ke": "E", "label": "30^\\circ"}, {"di": "D", "dari": "E", "ke": "A", "label": "?"}, {"di": "E", "dari": "A", "ke": "D", "label": "?"}], "langkah": [{"say": "Jajargenjang ABCD dengan ∠ABC = 110°.", "sisi": 4, "sudut": 1}, {"say": "Garis AE membentuk ∠DAE = 30°.", "sisi": 5, "sudut": 2, "sorot": ["AE"]}, {"say": "Lihat segitiga ADE: cari ∠ADE dulu, lalu ∠AED.", "sisi": 5, "sudut": 4, "sorot": ["DA", "AE", "D", "E"]}]}
```

```soal
{
 "title": "Contoh 4",
 "text": "ABCD adalah jajargenjang dengan $\\angle ABC = 110^\\circ$. Titik E terletak pada sisi DC. Garis AE membentuk $\\angle DAE = 30^\\circ$. Hitung $\\angle AED$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: ∠ADE berhadapan dengan ∠ABC. ∠ADE = ?",
   "answer": "110",
   "hint": "Sudut berhadapan jajargenjang sama besar.",
   "explain": "∠ADE = 110°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Di segitiga ADE, 30° + 110° = ?",
   "answer": "140",
   "hint": "Jumlahkan dua sudut yang diketahui.",
   "explain": "140°.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: ∠AED = 180° − 140° = ?",
   "answer": "40",
   "hint": "Jumlah sudut segitiga 180°.",
   "explain": "∠AED = 40°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 30° + 110° + 40° = ?",
   "answer": "180",
   "hint": "Jumlahkan sudut segitiga ADE.",
   "explain": "Jumlahnya 180°. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi ∠AED = 40°."
}
```

### Contoh 5: Soal cerita ubin belah ketupat

```soal
{
 "title": "Contoh 5",
 "text": "Putu memasang ubin berbentuk belah ketupat. Sudut tumpul ubin itu 2 kali sudut lancipnya. Berapa besar sudut lancip dan sudut tumpul ubin?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Sudut lancip + sudut tumpul = ?",
   "answer": "180",
   "hint": "Kedua sudut itu bersebelahan.",
   "explain": "Sudut bersebelahan berjumlah 180°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Lancip 1 unit, tumpul 2 unit. Jumlahnya berapa unit?",
   "answer": "3",
   "hint": "1 + 2.",
   "explain": "Ada 3 unit = 180°.",
   "error": "lupa-batang",
   "suffix": "unit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: 1 unit = 180° ÷ 3 = ?",
   "answer": "60",
   "hint": "Bagi rata ke 3 unit.",
   "explain": "1 unit = 60°: sudut lancip.",
   "error": "salah-fakta-bagi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Sudut tumpul = 2 × 60° = ?",
   "answer": "120",
   "hint": "Dua unit.",
   "explain": "Sudut tumpul 120°.",
   "error": "salah-fakta-kali",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 60° + 120° = ?",
   "answer": "180",
   "hint": "Jumlahnya harus 180°.",
   "explain": "60° + 120° = 180°, dan 120° = 2 × 60°. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  }
 ],
 "conclusion": "Sudut lancip 60° dan sudut tumpul 120°.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "Lancip",
    "units": 1
   },
   {
    "label": "Tumpul",
    "units": 2
   }
  ],
  "total": "180°"
 }
}
```

## Kesalahan yang sering terjadi

- **Mengira sudut bersebelahan sama besar.** Pada jajargenjang dengan $\angle A = 65^\circ$, menulis $\angle B = 65^\circ$. Yang sama besar adalah sudut **berhadapan**. Sudut bersebelahan jumlahnya $180^\circ$.
- **Salah memasangkan sudut trapesium.** Menghitung $\angle A + \angle B = 180^\circ$ pada trapesium dengan AB sejajar DC. Pasangan yang benar ada pada **kaki yang sama**: $\angle A$ dengan $\angle D$, dan $\angle B$ dengan $\angle C$.
- **Mengira trapesium punya sudut berhadapan sama.** Sifat itu hanya milik jajargenjang dan belah ketupat. Trapesium hanya punya satu pasang sisi sejajar.
- **Mengira belah ketupat harus bersudut siku-siku.** Belah ketupat cukup punya empat sisi sama panjang. Sudutnya tidak harus $90^\circ$. Jika sudutnya $90^\circ$, bangun itu adalah persegi.
- **Lupa mengecek jumlah 360°.** Setelah menemukan semua sudut segi empat, jumlahkan. Jika bukan $360^\circ$, ada yang salah.

## Ringkasan

- Jajargenjang: dua pasang sisi sejajar dan sama panjang, sudut berhadapan sama besar, sudut bersebelahan berjumlah $180^\circ$.
- Belah ketupat: jajargenjang dengan empat sisi sama panjang.
- Trapesium: tepat satu pasang sisi sejajar; dua sudut pada kaki yang sama berjumlah $180^\circ$.
- Jumlah keempat sudut segi empat selalu $360^\circ$.
- Untuk soal gabungan, cari segitiga di dalam bangun dan pakai jumlah sudut $180^\circ$.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Pada jajargenjang KLMN, $\\angle K = 58^\\circ$. Hitung $\\angle L$, $\\angle M$, dan $\\angle N$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "∠L (bersebelahan dengan ∠K)?",
   "answer": "122",
   "hint": "180° − 58°.",
   "explain": "∠L = 122°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "∠M (berhadapan dengan ∠K)?",
   "answer": "58",
   "hint": "Sudut berhadapan sama besar.",
   "explain": "∠M = 58°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "∠N (berhadapan dengan ∠L)?",
   "answer": "122",
   "hint": "Sudut berhadapan sama besar.",
   "explain": "∠N = 122°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  }
 ],
 "conclusion": "∠L = 122°, ∠M = 58°, ∠N = 122°."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Sebuah belah ketupat punya sisi 9 cm dan salah satu sudutnya $140^\\circ$. Hitung kelilingnya dan besar sudut yang bersebelahan dengan sudut $140^\\circ$ itu.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Keliling?",
   "answer": "36",
   "hint": "Empat sisi sama panjang.",
   "explain": "4 × 9 = 36 cm.",
   "error": "lupa-sisi-bangun",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Sudut yang bersebelahan?",
   "answer": "40",
   "hint": "Sudut bersebelahan berjumlah 180°.",
   "explain": "180° − 140° = 40°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  }
 ],
 "conclusion": "Keliling 36 cm dan sudutnya 40°."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Pada trapesium PQRS, PQ sejajar SR. $\\angle P = 80^\\circ$ dan $\\angle Q = 65^\\circ$. Hitung $\\angle S$ dan $\\angle R$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "∠S (satu kaki dengan ∠P)?",
   "answer": "100",
   "hint": "∠P + ∠S = 180°.",
   "explain": "180° − 80° = 100°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "∠R (satu kaki dengan ∠Q)?",
   "answer": "115",
   "hint": "∠Q + ∠R = 180°.",
   "explain": "180° − 65° = 115°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  }
 ],
 "conclusion": "∠S = 100° dan ∠R = 115°."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Pada jajargenjang ABCD, $\\angle B$ sama dengan 3 kali $\\angle A$. Hitung $\\angle A$ dan $\\angle B$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "∠A = 1 unit, ∠B = 3 unit, jumlahnya 180°. 1 unit = ?",
   "answer": "45",
   "hint": "Ada 4 unit: 180° ÷ 4.",
   "explain": "1 unit = 45°.",
   "error": "salah-fakta-bagi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "∠B = 3 unit = ?",
   "answer": "135",
   "hint": "3 × 45°.",
   "explain": "∠B = 135°.",
   "error": "salah-fakta-kali",
   "suffix": "°"
  }
 ],
 "conclusion": "∠A = 45° dan ∠B = 135°."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "ABCD adalah jajargenjang dengan $\\angle D = 70^\\circ$. Titik E terletak pada DC, dan $\\angle DAE = 45^\\circ$. Hitung $\\angle AED$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Di segitiga ADE, 70° + 45° = ?",
   "answer": "115",
   "hint": "Jumlahkan dua sudut yang diketahui.",
   "explain": "115°.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "∠AED = ?",
   "answer": "65",
   "hint": "Jumlah sudut segitiga 180°.",
   "explain": "180° − 115° = 65°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi ∠AED = 65°."
}
```
