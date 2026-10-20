---
id: sd5-10-sudut-garis-titik
judul: Sudut pada Garis Lurus dan di Satu Titik
jenjang: sd5
moe: "Primary 5 · Measurement and Geometry · Angles"
prasyarat: [sd3-12-sudut, sd4-10-sudut-derajat]
durasi_menit: 35
---

## Kenapa belajar ini?

Tukang kayu, arsitek, dan pembuat layang-layang sering perlu tahu besar sudut tanpa bisa mengukurnya langsung. Dengan beberapa aturan sederhana, kamu bisa **menghitung** sudut yang belum diketahui, tanpa busur derajat.

## Analogi

Bayangkan sebuah **pizza bulat** yang dipotong dari titik tengahnya.

- **Satu pizza utuh** = satu putaran penuh = $360^\circ$. Semua potongan di sekeliling titik tengah, kalau dijumlah, selalu $360^\circ$.
- **Setengah pizza** dibatasi oleh **garis lurus** yang melewati titik tengah. Semua potongan di satu sisi garis lurus itu jumlahnya $180^\circ$.
```anim
{"type": "bangun", "title": "Pizza dan sudut", "titik": {"O": [0, 0], "A": [4.0, 0.0], "B": [-1.368, 3.759], "C": [-4.0, 0.0], "D": [-1.368, -3.759]}, "sisi": [["O", "A"], ["O", "B"], ["O", "C"], ["O", "D"]], "lingkaran": [{"pusat": [0, 0], "r": 4}], "sudut": [{"di": "O", "dari": "A", "ke": "B", "label": "110^\\circ"}, {"di": "O", "dari": "B", "ke": "C", "label": "70^\\circ"}, {"di": "O", "dari": "C", "ke": "D", "label": "70^\\circ"}, {"di": "O", "dari": "D", "ke": "A", "label": "110^\\circ"}], "langkah": [{"say": "Satu pizza utuh: satu putaran penuh = 360°.", "sisi": 0, "sudut": 0}, {"say": "Potongan lurus AC melewati titik tengah O: setengah pizza = 180°.", "sisi": 3, "sudut": 0, "sorot": ["OA", "OC"]}, {"say": "Di atas garis AC: 110° + 70° = 180°.", "sisi": 4, "sudut": 2}, {"say": "Keempat potongan di sekeliling O: 110° + 70° + 70° + 110° = 360°.", "sisi": 4, "sudut": 4, "sorot": ["O"]}]}
```

- Kalau pizza dipotong dengan **dua potongan lurus yang bersilangan**, potongan yang **berhadapan** (saling membelakangi) selalu **sama besar**, seperti dua bilah gunting yang terbuka.

## Konsep

### Sudut pada garis lurus

Sudut-sudut yang berdampingan pada satu garis lurus jumlahnya $180^\circ$.

```anim
{"type": "bangun", "title": "Sudut pada garis lurus", "titik": {"A": [-5, 0], "O": [0, 0], "B": [5, 0], "C": [-2.113, 4.532]}, "sisi": [["A", "B"], ["O", "C"]], "sudut": [{"di": "O", "dari": "C", "ke": "A", "label": "a"}, {"di": "O", "dari": "B", "ke": "C", "label": "b"}], "langkah": [{"say": "Garis lurus AB dan sinar OC.", "sisi": 2}, {"say": "Sudut a dan sudut b berdampingan pada garis lurus AB.", "sisi": 2, "sudut": 2}, {"say": "Bersama-sama mereka membentuk setengah putaran: a + b = 180°.", "sisi": 2, "sudut": 2, "sorot": ["AB", "O"]}]}
```
$$\angle a + \angle b = 180^\circ$$

Jadi $\angle b = 180^\circ - \angle a$. Jika ada tiga sudut atau lebih pada garis lurus, jumlah semuanya tetap $180^\circ$.

### Sudut di sekitar satu titik

Sudut-sudut yang mengelilingi satu titik jumlahnya $360^\circ$ (satu pizza utuh).

$$\angle p + \angle q + \angle r + \dots = 360^\circ$$

### Sudut bertolak belakang

Jika dua garis lurus berpotongan, terbentuk empat sudut. Sudut yang **berhadapan** disebut **sudut bertolak belakang**, dan besarnya **sama**.

```anim
{"type": "bangun", "title": "Sudut bertolak belakang", "titik": {"A": [-5, 0], "B": [5, 0], "C": [-1.545, 4.755], "D": [1.545, -4.755], "O": [0, 0]}, "sisi": [["A", "B"], ["C", "D"]], "sudut": [{"di": "O", "dari": "C", "ke": "A", "label": "1"}, {"di": "O", "dari": "D", "ke": "B", "label": "3"}, {"di": "O", "dari": "B", "ke": "C", "label": "2"}, {"di": "O", "dari": "A", "ke": "D", "label": "4"}], "langkah": [{"say": "Garis AB dan CD berpotongan di O.", "sisi": 2}, {"say": "Sudut 1 (AOC) dan sudut 3 (BOD) berhadapan: sama besar.", "sisi": 2, "sudut": 2, "sorot": ["AB", "CD"]}, {"say": "Sudut 2 (COB) dan sudut 4 (DOA) juga berhadapan: sama besar.", "sisi": 2, "sudut": 4}, {"say": "Sudut bersebelahan, misalnya 1 dan 2, jumlahnya 180° karena ada pada garis lurus AB.", "sisi": 2, "sudut": 4, "sorot": ["AB"]}]}
```
Garis AB dan CD berpotongan di O.

- $\angle AOC = \angle BOD$ (bertolak belakang)
- $\angle COB = \angle DOA$ (bertolak belakang)

Kenapa? $\angle AOC + \angle COB = 180^\circ$ (pada garis AB), dan $\angle COB + \angle BOD = 180^\circ$ (pada garis CD). Keduanya memakai $\angle COB$, jadi sisa sudutnya harus sama: $\angle AOC = \angle BOD$.

### Langkah umum mencari sudut

1. Cari aturan yang cocok: garis lurus ($180^\circ$), satu titik ($360^\circ$), atau bertolak belakang (sama besar).
2. Jumlahkan sudut yang sudah diketahui.
3. Kurangkan dari $180^\circ$ atau $360^\circ$.
4. Cek: jumlah semua sudut harus tepat $180^\circ$ atau $360^\circ$.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Dua sudut pada garis lurus

```soal
{
 "title": "Contoh 1",
 "text": "Sudut $a$ dan $b$ berdampingan pada garis lurus AB (seperti gambar pertama di atas). $\\angle a = 65^\\circ$. Hitung $\\angle b$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Aturan mana yang dipakai?",
   "options": [
    "garis lurus, 180°",
    "satu titik, 360°",
    "bertolak belakang, sama besar"
   ],
   "answer": "garis lurus, 180°",
   "hint": "Kedua sudut ada pada garis lurus AB.",
   "explain": "Sudut pada garis lurus jumlahnya 180°, setengah pizza.",
   "error": "salah-hitung-sudut"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\angle b = 180^\\circ - 65^\\circ = ?$",
   "answer": "115",
   "hint": "Kurangkan dari 180.",
   "explain": "∠b = 115°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 65° + 115° = ?",
   "answer": "180",
   "hint": "Jumlahnya harus pas.",
   "explain": "65° + 115° = 180°. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi ∠b = 115°."
}
```

### Contoh 2: Tiga sudut pada garis lurus

```soal
{
 "title": "Contoh 2",
 "text": "Tiga sudut berdampingan pada satu garis lurus besarnya $47^\\circ$, $\\angle x$, dan $58^\\circ$. Hitung $\\angle x$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Aturan mana yang dipakai?",
   "options": [
    "garis lurus, 180°",
    "satu titik, 360°",
    "bertolak belakang, sama besar"
   ],
   "answer": "garis lurus, 180°",
   "hint": "Semua sudut ada pada satu garis lurus.",
   "explain": "Jumlah semuanya 180°.",
   "error": "salah-hitung-sudut"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jumlahkan yang diketahui. 47° + 58° = ?",
   "answer": "105",
   "hint": "Tambahkan pelan-pelan.",
   "explain": "47° + 58° = 105°.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: ∠x = 180° − 105° = ?",
   "answer": "75",
   "hint": "Kurangkan dari 180.",
   "explain": "∠x = 75°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 47° + 75° + 58° = ?",
   "answer": "180",
   "hint": "Jumlahkan ketiganya.",
   "explain": "Jumlahnya 180°. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi ∠x = 75°."
}
```

### Contoh 3: Sudut bertolak belakang

```soal
{
 "title": "Contoh 3",
 "text": "Garis AB dan CD berpotongan di O (seperti gambar kedua di atas). $\\angle AOC = 72^\\circ$. Hitung $\\angle BOD$, $\\angle COB$, dan $\\angle DOA$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: ∠BOD berhadapan dengan ∠AOC. ∠BOD = ?",
   "answer": "72",
   "hint": "Sudut bertolak belakang sama besar.",
   "explain": "∠BOD = 72°, seperti bilah gunting yang terbuka sama lebar.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: ∠COB ada di samping ∠AOC pada garis AB. ∠COB = ?",
   "answer": "108",
   "hint": "Pakai aturan garis lurus: 180° − 72°.",
   "explain": "∠COB = 108°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: ∠DOA berhadapan dengan ∠COB. ∠DOA = ?",
   "answer": "108",
   "hint": "Bertolak belakang lagi.",
   "explain": "∠DOA = 108°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 72° + 108° + 72° + 108° = ?",
   "answer": "360",
   "hint": "Keempat sudut mengelilingi O.",
   "explain": "Jumlahnya 360°. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi ∠BOD = 72°, ∠COB = 108°, dan ∠DOA = 108°.",
 "visual": {
  "type": "lines",
  "relation": "intersecting"
 }
}
```

### Contoh 4: Soal cerita, sudut di satu titik

```soal
{
 "title": "Contoh 4",
 "text": "Ibu memotong pizza dari titik tengah menjadi 5 potong yang tidak sama besar. Sudut empat potong pertama $80^\\circ$, $65^\\circ$, $70^\\circ$, dan $75^\\circ$. Berapa sudut potongan kelima?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Aturan mana yang dipakai?",
   "options": [
    "garis lurus, 180°",
    "satu titik, 360°",
    "bertolak belakang, sama besar"
   ],
   "answer": "satu titik, 360°",
   "hint": "Semua potongan mengelilingi titik tengah.",
   "explain": "Satu pizza utuh: jumlahnya 360°.",
   "error": "salah-hitung-sudut"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 80° + 65° + 70° + 75° = ?",
   "answer": "290",
   "hint": "Jumlahkan dua demi dua: 145°, lalu 215°, lalu ...",
   "explain": "Jumlahnya 290°.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: 360° − 290° = ?",
   "answer": "70",
   "hint": "Kurangkan dari 360.",
   "explain": "Potongan kelima 70°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 290° + 70° = ?",
   "answer": "360",
   "hint": "Harus satu putaran penuh.",
   "explain": "290° + 70° = 360°. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  }
 ],
 "conclusion": "Sudut potongan kelima 70°."
}
```

### Contoh 5: Dua sudut sama besar di satu titik

```soal
{
 "title": "Contoh 5",
 "text": "Di sekitar titik O ada empat sudut: $100^\\circ$, $120^\\circ$, dan dua sudut lain yang sama besar. Berapa besar masing-masing sudut yang sama itu?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Aturan mana yang dipakai?",
   "options": [
    "garis lurus, 180°",
    "satu titik, 360°",
    "bertolak belakang, sama besar"
   ],
   "answer": "satu titik, 360°",
   "hint": "Sudut-sudut mengelilingi titik O.",
   "explain": "Jumlahnya 360°.",
   "error": "salah-hitung-sudut"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 100° + 120° = ?",
   "answer": "220",
   "hint": "Jumlahkan yang diketahui.",
   "explain": "220°.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Sisa untuk dua sudut = 360° − 220° = ?",
   "answer": "140",
   "hint": "Kurangkan dari 360.",
   "explain": "Dua sudut itu bersama-sama 140°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Masing-masing = 140° ÷ 2 = ?",
   "answer": "70",
   "hint": "Dua sudut sama besar, jadi bagi dua.",
   "explain": "Masing-masing 70°.",
   "error": "salah-fakta-bagi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 100° + 120° + 70° + 70° = ?",
   "answer": "360",
   "hint": "Jumlahkan keempatnya.",
   "explain": "Jumlahnya 360°. Benar.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  }
 ],
 "conclusion": "Masing-masing sudut 70°.",
 "visual": {
  "type": "table",
  "head": [
   "Sudut 1",
   "Sudut 2",
   "Sudut 3",
   "Sudut 4",
   "Jumlah"
  ],
  "rows": [
   [
    "100°",
    "120°",
    "?",
    "?",
    "360°"
   ]
  ]
 }
}
```

## Kesalahan yang sering terjadi

- **Memakai 360° untuk garis lurus.** Pada contoh 1 menghitung $360^\circ - 65^\circ$. Sudut pada garis lurus hanya setengah pizza: $180^\circ$.
- **Memakai 180° untuk sudut di satu titik.** Sudut yang mengelilingi titik penuh satu putaran: $360^\circ$.
- **Mengira sudut bersebelahan sama besar.** Pada dua garis berpotongan, yang sama besar adalah sudut yang **berhadapan**, bukan yang bersebelahan. Sudut bersebelahan jumlahnya $180^\circ$.
- **Memakai aturan garis lurus pada garis yang tidak lurus.** Pastikan garisnya benar-benar lurus (satu garis yang menembus titik), bukan dua garis yang membentuk tikungan.
- **Salah menjumlah.** Jumlahkan sudut yang diketahui pelan-pelan, dua demi dua. Lalu cek jumlah akhirnya.

## Ringkasan

- Sudut pada garis lurus jumlahnya $180^\circ$ (setengah pizza).
- Sudut di sekitar satu titik jumlahnya $360^\circ$ (satu pizza utuh).
- Sudut bertolak belakang sama besar.
- Cara mencari sudut: pilih aturan, jumlahkan yang diketahui, kurangkan dari $180^\circ$ atau $360^\circ$.
- Selalu cek: jumlah semua sudut harus pas.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Dua sudut pada garis lurus: $124^\\circ$ dan $\\angle x$. Hitung $\\angle x$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Jumlah kedua sudut?",
   "options": [
    "180°",
    "360°",
    "90°"
   ],
   "answer": "180°",
   "hint": "Sudut pada garis lurus.",
   "explain": "Setengah pizza: 180°.",
   "error": "salah-hitung-sudut"
  },
  {
   "kind": "number",
   "prompt": "∠x = ?",
   "answer": "56",
   "hint": "180 − 124.",
   "explain": "∠x = 56°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi ∠x = 56°."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Tiga sudut pada garis lurus: $35^\\circ$, $90^\\circ$, dan $\\angle y$. Hitung $\\angle y$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "35° + 90° = ?",
   "answer": "125",
   "hint": "Jumlahkan yang diketahui.",
   "explain": "125°.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "∠y = ?",
   "answer": "55",
   "hint": "Kurangkan dari 180°.",
   "explain": "180° − 125° = 55°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi ∠y = 55°."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Empat sudut di sekitar satu titik: $150^\\circ$, $85^\\circ$, $70^\\circ$, dan $\\angle z$. Hitung $\\angle z$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "150° + 85° + 70° = ?",
   "answer": "305",
   "hint": "150 + 85 = 235, lalu tambah 70.",
   "explain": "305°.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "∠z = ?",
   "answer": "55",
   "hint": "Sudut di satu titik jumlahnya 360°.",
   "explain": "360° − 305° = 55°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi ∠z = 55°."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Dua garis lurus berpotongan. Salah satu sudutnya $47^\\circ$. Berapa besar tiga sudut lainnya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Sudut yang berhadapan dengan 47°?",
   "answer": "47",
   "hint": "Sudut bertolak belakang sama besar.",
   "explain": "Sudut lawannya 47°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Sudut yang bersebelahan dengan 47°?",
   "answer": "133",
   "hint": "Bersebelahan pada garis lurus: 180° − 47°.",
   "explain": "180° − 47° = 133°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Sudut keempat (lawan dari 133°)?",
   "answer": "133",
   "hint": "Bertolak belakang lagi.",
   "explain": "Sudut keempat 133°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  }
 ],
 "conclusion": "Tiga sudut lainnya 47°, 133°, dan 133°."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Sebuah kipas kertas dibuka penuh membentuk setengah lingkaran (garis lurus). Kipas terdiri dari 6 lipatan yang sama besar. Berapa sudut setiap lipatan?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Jumlah semua lipatan?",
   "options": [
    "180°",
    "360°",
    "90°"
   ],
   "answer": "180°",
   "hint": "Setengah lingkaran sama dengan garis lurus.",
   "explain": "Semua lipatan berada pada garis lurus: 180°.",
   "error": "salah-hitung-sudut"
  },
  {
   "kind": "number",
   "prompt": "Sudut setiap lipatan = 180° ÷ 6 = ?",
   "answer": "30",
   "hint": "Enam lipatan sama besar.",
   "explain": "180° ÷ 6 = 30°.",
   "error": "salah-fakta-bagi",
   "suffix": "°"
  }
 ],
 "conclusion": "Setiap lipatan 30°."
}
```
