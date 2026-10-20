---
id: sd4-11-sifat-persegi-panjang
judul: Sifat Persegi dan Persegi Panjang
jenjang: sd4
moe: "Primary 4 · Measurement and Geometry · Rectangle and Square"
prasyarat: [sd4-10-sudut-derajat, sd3-13-garis-sejajar-tegak-lurus]
durasi_menit: 30
---

## Kenapa belajar ini?

Pintu, buku, layar ponsel, dan ubin lantai berbentuk persegi panjang atau persegi. Kalau kamu tahu sifat-sifatnya, kamu bisa mencari panjang sisi atau besar sudut tanpa mengukur, cukup dengan berpikir.

## Analogi

Bayangkan sebuah **bingkai foto** yang dibuat dari empat bilah kayu.

- Bilah atas dan bilah bawah **sama panjang**. Bilah kiri dan bilah kanan juga sama panjang. Kalau tidak, bingkainya miring.
- Setiap **pojok bingkai** pas dengan pojok buku atau penggaris segitiga. Artinya setiap pojok adalah sudut **siku-siku**, $90^\circ$.

Kalau keempat bilahnya sama panjang, bingkai itu berbentuk **persegi**.

```visual
{"type": "shapes", "items": [{"shape": "persegi-panjang", "color": "biru"}, {"shape": "persegi", "color": "hijau"}], "caption": "Bingkai persegi panjang dan bingkai persegi"}
```

Sebuah pojok bingkai seperti **sepotong kue $90^\circ$**. Kalau kue itu dibagi menjadi beberapa potong, jumlah semua potongannya tetap $90^\circ$.

```anim
{"type": "bangun", "title": "Pojok 90° dipotong tiga", "titik": {"O": [0, 0], "X": [5, 0], "Y": [0, 5], "M": [4.330127018922194, 2.4999999999999996], "N": [1.7101007166283442, 4.698463103929542]}, "sisi": [["O", "X"], ["O", "Y"], ["O", "M"], ["O", "N"]], "sudut": [{"di": "O", "dari": "X", "ke": "Y", "siku": true}, {"di": "O", "dari": "X", "ke": "M", "label": "30^\\circ"}, {"di": "O", "dari": "M", "ke": "N", "label": "40^\\circ"}, {"di": "O", "dari": "N", "ke": "Y", "label": "20^\\circ"}], "langkah": [{"say": "Pojok bingkai: sudut siku-siku, 90°.", "sisi": 2, "sudut": 1}, {"say": "Pojok dipotong menjadi tiga potong kue.", "sisi": 4, "sudut": 1}, {"say": "Ketiga potongnya: 30° + 40° + 20° = 90°. Jumlahnya tetap satu pojok.", "sisi": 4, "sudut": 4}]}
```

## Konsep

### Sifat persegi panjang

```anim
{"type": "bangun", "title": "Sifat persegi panjang ABCD", "titik": {"A": [0, 0], "B": [7, 0], "C": [7, 4], "D": [0, 4]}, "sisi": [["A", "B"], ["B", "C"], ["C", "D"], ["D", "A"]], "sudut": [{"di": "A", "dari": "B", "ke": "D", "siku": true}, {"di": "B", "dari": "C", "ke": "A", "siku": true}, {"di": "C", "dari": "D", "ke": "B", "siku": true}, {"di": "D", "dari": "A", "ke": "C", "siku": true}], "langkah": [{"say": "Persegi panjang ABCD: huruf berurutan mengelilingi bangun."}, {"say": "AB dan DC berhadapan: sama panjang dan sejajar.", "sorot": ["AB", "DC"]}, {"say": "AD dan BC berhadapan: sama panjang dan sejajar.", "sorot": ["AD", "BC"]}, {"say": "Keempat sudutnya siku-siku, 90°.", "sudut": 4}]}
```

1. **Sisi yang berhadapan sama panjang**: $AB = DC$ dan $AD = BC$.
2. **Sisi yang berhadapan sejajar**: AB sejajar DC, AD sejajar BC.
3. **Keempat sudutnya siku-siku**: $\angle A = \angle B = \angle C = \angle D = 90^\circ$.

### Sifat persegi

Persegi punya semua sifat persegi panjang, ditambah satu lagi:

1. **Keempat sisinya sama panjang**.
2. Sisi yang berhadapan sejajar.
3. Keempat sudutnya siku-siku.

Jadi **setiap persegi adalah persegi panjang yang istimewa**, karena semua sisinya sama.

### Menamai persegi panjang

Huruf ditulis **berurutan mengelilingi** bangun, searah atau berlawanan arah jarum jam. Pada persegi panjang ABCD, sisinya AB, BC, CD, dan DA.

### Mencari sudut yang belum diketahui

Kalau sebuah garis ditarik dari salah satu pojok, pojok itu terbagi menjadi beberapa sudut. Jumlah sudut-sudut itu tetap $90^\circ$.

```anim
{"type": "bangun", "title": "Garis dari pojok A membagi 90°", "titik": {"A": [0, 4], "B": [7, 4], "C": [7, 0], "D": [0, 0], "E": [2.309401076758503, 0]}, "sisi": [["A", "B"], ["B", "C"], ["C", "D"], ["D", "A"], ["A", "E"]], "sudut": [{"di": "A", "dari": "D", "ke": "E", "label": "30^\\circ"}, {"di": "A", "dari": "E", "ke": "B", "label": "?"}], "langkah": [{"say": "Pojok A persegi panjang besarnya 90°.", "sisi": 4, "sorot": ["A"]}, {"say": "Garis AE membagi pojok A menjadi ∠DAE dan ∠EAB.", "sisi": 5, "sorot": ["AE"]}, {"say": "∠DAE = 30°.", "sudut": 1}, {"say": "∠EAB = 90° − 30° = 60°.", "sudut": 2, "sorot": ["A"]}]}
```

$$\text{sudut yang dicari} = 90^\circ - \text{sudut yang diketahui}$$

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Mencari sisi

```soal
{
 "title": "Kerjakan bersama",
 "text": "PQRS adalah persegi panjang. PQ = 12 cm dan QR = 5 cm. Berapa panjang RS dan SP? Berapa kelilingnya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Cari pasangan berhadapan. RS berhadapan dengan sisi mana?",
   "options": [
    "PQ",
    "QR",
    "SP"
   ],
   "answer": "PQ",
   "hint": "Sisi berhadapan tidak bertemu di satu pojok.",
   "explain": "RS berhadapan dengan PQ, dan SP berhadapan dengan QR.",
   "error": "salah-salin-bangun"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Pakai sifat. RS = ?",
   "answer": "12",
   "hint": "Sisi berhadapan sama panjang.",
   "explain": "RS = PQ = 12 cm.",
   "error": "salah-salin-bangun",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "SP = ?",
   "answer": "5",
   "hint": "SP berhadapan dengan QR.",
   "explain": "SP = QR = 5 cm.",
   "error": "salah-salin-bangun",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Keliling = 12 + 5 + 12 + 5 = ?",
   "answer": "34",
   "hint": "Jumlahkan keempat sisi.",
   "explain": "Keliling 34 cm.",
   "error": "keliling-dua-sisi",
   "suffix": "cm"
  }
 ],
 "conclusion": "RS = 12 cm, SP = 5 cm, keliling 34 cm.",
 "visual": {
  "type": "rect",
  "width": 12,
  "height": 5,
  "unit": "cm"
 }
}
```

### Contoh 2: Menggambar persegi panjang

```soal
{
 "title": "Kerjakan bersama",
 "text": "Gambar persegi panjang dengan panjang 5 cm dan lebar 3 cm. Pakai kertas berpetak 1 cm, lalu tanpa petak.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Di kertas berpetak, sisi mendatar pertama ditarik sepanjang berapa petak?",
   "answer": "5",
   "hint": "Satu petak = 1 cm.",
   "explain": "5 petak = 5 cm.",
   "error": "salah-langkah-petak",
   "suffix": "petak"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Dua sisi tegak ditarik ke atas sepanjang berapa petak?",
   "answer": "3",
   "hint": "Lebarnya 3 cm.",
   "explain": "3 petak. Garis petak sudah membentuk sudut siku-siku.",
   "error": "salah-langkah-petak",
   "suffix": "petak"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tutup bangunnya. Sisi atas pasti sepanjang berapa petak?",
   "answer": "5",
   "hint": "Sisi atas berhadapan dengan sisi bawah.",
   "explain": "5 petak, sama dengan sisi bawah.",
   "error": "salah-salin-bangun",
   "suffix": "petak"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Tanpa petak, sudut di A dan di B diukur dengan busur sebesar berapa derajat?",
   "answer": "90",
   "hint": "Semua pojok persegi panjang siku-siku.",
   "explain": "90° di A dan di B, lalu tarik garis 3 cm ke atas.",
   "error": "salah-banding-siku",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: ada berapa pojok yang harus pas dengan pojok buku?",
   "answer": "4",
   "hint": "Hitung semua pojok persegi panjang.",
   "explain": "Keempat pojok harus siku-siku.",
   "error": "salah-hitung-pojok",
   "suffix": "pojok"
  }
 ],
 "conclusion": "Persegi panjang ABCD dengan AB = DC = 5 cm dan AD = BC = 3 cm.",
 "visual": {
  "type": "grid",
  "width": 7,
  "height": 5,
  "shade": [
   {
    "x": 1,
    "y": 1,
    "w": 5,
    "h": 3
   }
  ],
  "showDims": true,
  "unit": "cm"
 }
}
```

### Contoh 3: Mencari sudut yang belum diketahui

```soal
{
 "title": "Kerjakan bersama",
 "text": "ABCD adalah persegi panjang. Garis AE ditarik dari A ke titik E pada sisi DC. $\\angle DAE = 32^\\circ$. Berapa $\\angle EAB$?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Lihat pojok A. $\\angle DAB$ = ?",
   "answer": "90",
   "hint": "Pojok persegi panjang.",
   "explain": "∠DAB = 90°.",
   "error": "salah-banding-siku",
   "suffix": "°"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Garis AE membagi pojok A menjadi dua sudut apa?",
   "options": [
    "$\\angle DAE$ dan $\\angle EAB$",
    "$\\angle DAE$ dan $\\angle AEB$",
    "$\\angle ADE$ dan $\\angle EAB$"
   ],
   "answer": "$\\angle DAE$ dan $\\angle EAB$",
   "hint": "Kedua sudut harus bertitik sudut A (huruf tengah A).",
   "explain": "Seperti kue 90° yang dipotong dua: ∠DAE dan ∠EAB.",
   "error": "salah-titik-sudut"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\angle EAB = 90^\\circ - 32^\\circ$ = ?",
   "answer": "58",
   "hint": "Kurangkan dari 90, bukan dari 180.",
   "explain": "∠EAB = 58°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 32° + 58° = ?",
   "answer": "90",
   "hint": "Harus satu pojok penuh.",
   "explain": "90°. Cocok.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi $\\angle EAB = 58^\\circ$."
}
```

### Contoh 4: Soal cerita, pojok dibagi tiga

```soal
{
 "title": "Kerjakan bersama",
 "text": "Pak Made menghias ubin persegi KLMN. Dari pojok K, ia menggambar dua garis lurus ke sisi seberang. Pojok K terbagi menjadi tiga sudut: $25^\\circ$, $40^\\circ$, dan $\\angle x$. Berapa besar $\\angle x$?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Ubin berbentuk persegi. Pojok K besarnya berapa?",
   "answer": "90",
   "hint": "Semua pojok persegi siku-siku.",
   "explain": "Pojok K = 90°.",
   "error": "salah-banding-siku",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jumlahkan sudut yang diketahui. 25° + 40° = ?",
   "answer": "65",
   "hint": "Jumlahkan dulu semua sudut yang diketahui.",
   "explain": "65°.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\angle x = 90^\\circ - 65^\\circ$ = ?",
   "answer": "25",
   "hint": "Sisa dari 90°.",
   "explain": "∠x = 25°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 25° + 40° + 25° = ?",
   "answer": "90",
   "hint": "Ketiga potong kue.",
   "explain": "90°, satu pojok penuh.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi $\\angle x = 25^\\circ$."
}
```

## Kesalahan yang sering terjadi

- **Menganggap sisi yang bersebelahan sama panjang.** Pada persegi panjang PQRS, menulis $QR = PQ = 12$ cm. Yang sama panjang adalah sisi yang **berhadapan**, bukan yang bersebelahan. Hanya persegi yang keempat sisinya sama.
- **Memakai $180^\circ$ untuk pojok.** Menghitung $\angle EAB = 180^\circ - 32^\circ$. Pojok persegi atau persegi panjang besarnya $90^\circ$.
- **Lupa ada lebih dari satu sudut yang diketahui.** Pada Contoh 4, hanya mengurangi $90^\circ - 40^\circ = 50^\circ$. Semua sudut yang diketahui di pojok itu harus dijumlah dulu.
- **Menamai tidak berurutan.** Menyebut persegi panjang ABCD sebagai "ACBD". Huruf harus berurutan mengelilingi bangun.
- **Mengira bangun bersisi sama pasti persegi.** Bangun dengan empat sisi sama panjang tetapi pojoknya tidak siku-siku **bukan** persegi.

## Ringkasan

- Persegi panjang: sisi berhadapan sama panjang dan sejajar, keempat sudut $90^\circ$.
- Persegi: keempat sisi sama panjang, sisi berhadapan sejajar, keempat sudut $90^\circ$.
- Setiap persegi juga persegi panjang.
- Menggambar: pakai garis petak, atau penggaris dan busur derajat untuk membuat sudut $90^\circ$.
- Sudut yang belum diketahui di pojok $= 90^\circ -$ jumlah sudut yang diketahui.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "KLMN adalah persegi dengan KL = 7 cm. Berapa panjang MN? Berapa besar $\\angle LMN$?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: MN = ?",
   "answer": "7",
   "hint": "Semua sisi persegi sama panjang.",
   "explain": "MN = 7 cm.",
   "error": "salah-salin-bangun",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\angle LMN$ = ?",
   "answer": "90",
   "hint": "Semua sudut persegi siku-siku.",
   "explain": "∠LMN = 90°.",
   "error": "salah-banding-siku",
   "suffix": "°"
  }
 ],
 "conclusion": "MN = 7 cm dan $\\angle LMN = 90^\\circ$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "PQRS adalah persegi panjang. PQ = 15 cm dan QR = 8 cm. Berapa panjang SP?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: SP berhadapan dengan sisi mana?",
   "options": [
    "QR",
    "PQ",
    "RS"
   ],
   "answer": "QR",
   "hint": "Sisi berhadapan tidak bertemu di satu pojok.",
   "explain": "SP berhadapan dengan QR.",
   "error": "salah-salin-bangun"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: SP = ?",
   "answer": "8",
   "hint": "Sisi berhadapan sama panjang.",
   "explain": "SP = QR = 8 cm.",
   "error": "salah-salin-bangun",
   "suffix": "cm"
  }
 ],
 "conclusion": "SP = 8 cm.",
 "visual": {
  "type": "rect",
  "width": 15,
  "height": 8,
  "unit": "cm"
 }
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "ABCD adalah persegi panjang. Garis AE ditarik dari A ke sisi DC. $\\angle BAE = 47^\\circ$. Berapa $\\angle DAE$?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Pojok A besarnya berapa?",
   "answer": "90",
   "hint": "Pojok persegi panjang.",
   "explain": "90°.",
   "error": "salah-banding-siku",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\angle DAE = 90^\\circ - 47^\\circ$ = ?",
   "answer": "43",
   "hint": "Kurangkan dari 90°.",
   "explain": "∠DAE = 43°. Cek: 43° + 47° = 90°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi $\\angle DAE = 43^\\circ$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Pojok sebuah persegi terbagi menjadi tiga sudut: $\\angle p = 18^\\circ$, $\\angle q = 35^\\circ$, dan $\\angle r$. Berapa $\\angle r$?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 18° + 35° = ?",
   "answer": "53",
   "hint": "Jumlahkan sudut yang diketahui.",
   "explain": "53°.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\angle r = 90^\\circ - 53^\\circ$ = ?",
   "answer": "37",
   "hint": "Sisa dari pojok 90°.",
   "explain": "∠r = 37°.",
   "error": "salah-fakta-kurang",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi $\\angle r = 37^\\circ$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Sebuah bangun punya empat sisi sama panjang, tetapi sudutnya tidak ada yang siku-siku. Apakah bangun itu persegi?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Sifat persegi mana yang tidak dipenuhi?",
   "options": [
    "Keempat sudut siku-siku",
    "Keempat sisi sama panjang",
    "Punya empat sisi"
   ],
   "answer": "Keempat sudut siku-siku",
   "hint": "Bangun ini sudah punya empat sisi sama panjang.",
   "explain": "Sudutnya tidak siku-siku, padahal persegi harus punya empat sudut 90°.",
   "error": "tertukar-persegi-persegi-panjang"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Jadi, apakah bangun itu persegi?",
   "options": [
    "Bukan persegi",
    "Ya, persegi"
   ],
   "answer": "Bukan persegi",
   "hint": "Semua sifat harus terpenuhi.",
   "explain": "Bukan persegi. Sisi sama panjang saja belum cukup.",
   "error": "tertukar-persegi-persegi-panjang"
  }
 ],
 "conclusion": "Bukan persegi, karena sudutnya tidak siku-siku."
}
```
