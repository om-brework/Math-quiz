---
id: smp1-10-sudut-segitiga-poligon
judul: Sudut, Segitiga, dan Poligon
jenjang: smp1
moe: "Secondary 1 · Geometry and Measurement · G1 Angles, triangles and polygons"
prasyarat: [sd5-10-sudut-garis-titik, sd5-11-segitiga, sd5-12-jajargenjang-belah-ketupat-trapesium, smp1-09-persamaan-linear]
durasi_menit: 60
---

## Kenapa belajar ini?

Tukang kayu memeriksa apakah dua rangka atap sejajar. Arsitek menghitung sudut ubin segi enam supaya pas menutup lantai. Semua itu memakai sifat sudut, garis sejajar, segitiga, dan poligon. Dengan sifat-sifat ini kamu bisa menghitung sudut tanpa busur derajat.

## Analogi

Bayangkan sudut sebagai **besar putaran badanmu**. Kalau kamu berdiri menghadap utara lalu berputar sampai menghadap timur, kamu berputar $90^\circ$. Berputar satu keliling penuh berarti $360^\circ$.

```visual
{"type": "angle", "degrees": 90, "showRightMark": true, "caption": "Dari menghadap utara berputar ke timur: seperempat putaran, 90°"}
```

Analogi ini kita pakai dalam tiga cara:

- **Berjalan di garis lurus lalu berbalik arah** = putaran $180^\circ$. Karena itu sudut pada garis lurus berjumlah $180^\circ$.
- **Rel kereta dan jalan yang memotongnya.** Dua rel sejajar dipotong satu jalan. Di kedua perlintasan, jalan itu "berbelok" dengan cara yang sama terhadap rel. Jadi sudut-sudutnya kembar.
- **Berjalan mengelilingi lapangan berbentuk poligon.** Di setiap pojok kamu berbelok. Setelah kembali ke titik awal menghadap arah semula, total beloknya tepat satu putaran, $360^\circ$.

## Konsep

### Jenis sudut

- **Lancip**: lebih dari $0^\circ$ dan kurang dari $90^\circ$.
- **Siku-siku**: tepat $90^\circ$.
- **Tumpul**: lebih dari $90^\circ$ dan kurang dari $180^\circ$.
- **Lurus**: tepat $180^\circ$.
- **Refleks**: lebih dari $180^\circ$ dan kurang dari $360^\circ$.

Dua sudut yang jumlahnya $90^\circ$ disebut **berpenyiku**. Dua sudut yang jumlahnya $180^\circ$ disebut **berpelurus**. Sudut **bertolak belakang** (berhadapan di titik potong dua garis) selalu sama besar.

### Sudut pada garis sejajar

Dua garis sejajar dipotong oleh satu garis lain (garis **transversal**):

```anim
{"type": "bangun", "title": "Dua garis sejajar dipotong transversal", "titik": {"K": [-4, 2], "L": [6, 2], "M": [-4, -1], "N": [6, -1], "T": [-1, 3.5], "P": [0, 2], "Q": [2, -1], "U": [3, -2.5]}, "sisi": [["K", "L"], ["M", "N"], ["T", "P"], ["P", "Q"], ["Q", "U"]], "sudut": [{"di": "P", "dari": "K", "ke": "T", "label": "a"}, {"di": "Q", "dari": "M", "ke": "P", "label": "e"}, {"di": "P", "dari": "L", "ke": "Q", "label": "c"}, {"di": "Q", "dari": "P", "ke": "N", "label": "f"}], "langkah": [{"say": "Garis 1 (KL) sejajar garis 2 (MN). Garis TU memotong keduanya di P dan Q.", "sudut": 0}, {"say": "Sudut a: kiri atas di titik potong P.", "sudut": 1, "sorot": ["P"]}, {"say": "Sudut e: kiri atas di Q. a dan e sehadap, sama besar.", "sudut": 2, "sorot": ["Q"]}, {"say": "Sudut c: kanan bawah di P, bertolak belakang dengan a. c dan e dalam berseberangan, sama besar.", "sudut": 3, "sorot": ["P", "Q"]}, {"say": "Sudut f: kanan atas di Q. c dan f dalam sepihak, jumlahnya 180°.", "sudut": 4, "sorot": ["PQ"]}]}
```

Di setiap titik potong ada empat sudut: kiri atas ($a$, $e$), kanan atas ($b$, $f$), kanan bawah ($c$, $g$), dan kiri bawah ($d$, $h$).

- **Sudut sehadap** sama besar, misalnya $a$ dan $e$. Bayangkan menggeser perlintasan atas turun sepanjang jalan sampai menimpa perlintasan bawah. Sudutnya menempel tepat.
- **Sudut dalam berseberangan** sama besar, misalnya $c$ dan $e$. Ini karena $c = a$ (bertolak belakang) dan $a = e$ (sehadap).
- **Sudut dalam sepihak** berjumlah $180^\circ$, misalnya $c$ dan $f$. Ini karena $c = e$ dan $e + f = 180^\circ$ (garis lurus).

Kebalikannya juga berlaku: kalau sudut sehadap sama besar, kedua garis pasti sejajar.

### Sifat segitiga

- **Jumlah sudut dalam segitiga $180^\circ$.** Kenapa? Tarik garis melalui puncak yang sejajar alas. Dua sudut alas "pindah" ke puncak sebagai sudut berseberangan. Ketiga sudut lalu berjajar membentuk garis lurus, yaitu $180^\circ$.
```anim
{"type": "bangun", "title": "Kenapa jumlah sudut segitiga 180°", "titik": {"A": [0, 0], "B": [6, 0], "C": [2, 3.5], "D": [-1.5, 3.5], "E": [5.5, 3.5]}, "sisi": [["A", "B"], ["B", "C"], ["C", "A"], ["D", "E"]], "sudut": [{"di": "A", "dari": "B", "ke": "C", "label": "\\alpha"}, {"di": "B", "dari": "C", "ke": "A", "label": "\\beta"}, {"di": "C", "dari": "A", "ke": "B", "label": "\\gamma"}, {"di": "C", "dari": "D", "ke": "A", "label": "\\alpha"}, {"di": "C", "dari": "B", "ke": "E", "label": "\\beta"}], "langkah": [{"say": "Segitiga ABC dengan sudut α, β, γ.", "sisi": 3, "sudut": 3}, {"say": "Tarik garis DE melalui C, sejajar alas AB.", "sisi": 4, "sudut": 3, "sorot": ["DE"]}, {"say": "Sudut DCA = α, karena dalam berseberangan dengan sudut A.", "sisi": 4, "sudut": 4, "sorot": ["A", "C"]}, {"say": "Sudut BCE = β, juga dalam berseberangan. α, γ, β berjajar di garis lurus DE: jumlahnya 180°.", "sisi": 4, "sudut": 5, "sorot": ["B", "C"]}]}
```

- **Sudut luar segitiga** sama dengan jumlah dua sudut dalam yang tidak bersebelahan dengannya.
- **Segitiga sama kaki**: dua sisi sama panjang, dua sudut alas sama besar.
- **Segitiga sama sisi**: tiga sisi sama, setiap sudut $60^\circ$.

### Sifat segiempat khusus

- **Jajargenjang**: sisi berhadapan sejajar dan sama panjang, sudut berhadapan sama besar, sudut berdekatan berjumlah $180^\circ$, diagonal saling membagi dua.
- **Persegi panjang**: jajargenjang dengan semua sudut $90^\circ$; kedua diagonal sama panjang.
- **Belah ketupat**: jajargenjang dengan keempat sisi sama panjang; diagonal saling tegak lurus.
- **Persegi**: semua sisi sama dan semua sudut $90^\circ$; diagonal sama panjang dan saling tegak lurus.
- **Trapesium**: tepat sepasang sisi sejajar; dua sudut di antara sisi sejajar (sepihak) berjumlah $180^\circ$.
- **Layang-layang**: dua pasang sisi berdekatan sama panjang; diagonalnya tegak lurus; sepasang sudut berhadapan sama besar.

Jumlah sudut dalam segiempat $360^\circ$, karena satu diagonal membaginya menjadi 2 segitiga.

### Poligon dan poligon beraturan

**Poligon** adalah bangun datar tertutup dengan sisi-sisi lurus. Poligon **beraturan** punya semua sisi sama panjang dan semua sudut sama besar.

Dari satu titik sudut, poligon bersisi $n$ bisa dibagi menjadi $(n - 2)$ segitiga. Jadi

$$\text{jumlah sudut dalam} = (n - 2) \times 180^\circ$$

```anim
{"type": "bangun", "title": "Segi lima dibagi menjadi 3 segitiga", "titik": {"A": [0, 0], "B": [4, 0], "C": [5.2, 3.8], "D": [2, 6.2], "E": [-1.2, 3.8]}, "sisi": [["A", "B"], ["B", "C"], ["C", "D"], ["D", "E"], ["E", "A"], ["A", "C"], ["A", "D"]], "langkah": [{"say": "Segi lima: n = 5 sisi.", "sisi": 5}, {"say": "Tarik diagonal dari titik A ke C.", "sisi": 6, "sorot": ["AC"]}, {"say": "dan dari A ke D. Terbentuk 5 − 2 = 3 segitiga, jadi jumlah sudut dalam 3 × 180° = 540°.", "sisi": 7, "sorot": ["AD"]}]}
```

Sudut luar adalah besar belokan di setiap pojok saat mengelilingi poligon. Total belokan satu keliling:

$$\text{jumlah sudut luar} = 360^\circ$$

Untuk poligon beraturan bersisi $n$: setiap sudut luar $= \frac{360^\circ}{n}$, dan setiap sudut dalam $= 180^\circ - \text{sudut luar}$.

### Melukis dengan jangka dan busur

- **Segitiga dengan tiga sisi diketahui:** lukis satu sisi dengan penggaris. Dari ujung-ujungnya, buat busur dengan jangka sepanjang dua sisi lainnya. Titik potong busur adalah titik sudut ketiga.
- **Sudut dengan ukuran tertentu:** letakkan pusat busur derajat di titik sudut, garis $0^\circ$ di atas sinar, tandai ukuran yang diminta, lalu tarik garis.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Garis sejajar

```soal
{
 "title": "Contoh 1",
 "text": "Dua garis sejajar dipotong transversal seperti gambar di bagian Konsep. Sudut $a = 65^\\circ$. Tentukan $e$, $c$, dan $f$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Hubungan a dan e",
   "options": [
    "sehadap",
    "dalam sepihak",
    "bertolak belakang"
   ],
   "answer": "sehadap",
   "hint": "Keduanya di kiri atas titik potong masing-masing.",
   "explain": "Sudut sehadap sama besar.",
   "error": "salah-hitung-sudut"
  },
  {
   "kind": "number",
   "prompt": "Jadi e = ?",
   "answer": "65",
   "hint": "Sehadap sama besar.",
   "explain": "e = 65°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: c bertolak belakang dengan a. c = ?",
   "answer": "65",
   "hint": "Bertolak belakang sama besar.",
   "explain": "c = 65°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: c dan f dalam sepihak. f = ?",
   "answer": "115",
   "hint": "Dalam sepihak berjumlah 180°.",
   "explain": "f = 180° − 65° = 115°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: e + f = ?",
   "answer": "180",
   "hint": "e dan f ada di garis lurus.",
   "explain": "65° + 115° = 180°. Cocok.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "$e = 65^\\circ$, $c = 65^\\circ$, $f = 115^\\circ$."
}
```

### Contoh 2: Segitiga sama kaki dan sudut luar

```soal
{
 "title": "Contoh 2",
 "text": "Segitiga $PQR$ sama kaki dengan $PQ = PR$ dan $\\angle P = 40^\\circ$. Sisi $QR$ diperpanjang melewati $R$ ke titik $S$. Hitung $\\angle Q$, $\\angle R$, dan sudut luar $\\angle PRS$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Sudut mana yang sama besar?",
   "options": [
    "$\\angle Q = \\angle R$",
    "$\\angle P = \\angle Q$",
    "$\\angle P = \\angle R$"
   ],
   "answer": "$\\angle Q = \\angle R$",
   "hint": "Sudut alas berhadapan dengan sisi yang sama panjang.",
   "explain": "PQ = PR, jadi sudut di Q dan R sama.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\angle Q + \\angle R = 180^\\circ - 40^\\circ = ?$",
   "answer": "140",
   "hint": "Jumlah sudut segitiga 180°.",
   "explain": "140°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Jadi $\\angle Q = ?$",
   "answer": "70",
   "hint": "Bagi dua.",
   "explain": "70°, begitu juga ∠R.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\angle PRS = \\angle P + \\angle Q = ?$",
   "answer": "110",
   "hint": "Sudut luar = jumlah dua sudut dalam yang berjauhan.",
   "explain": "40° + 70° = 110°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $\\angle PRS + \\angle R = ?$",
   "answer": "180",
   "hint": "Keduanya berpelurus.",
   "explain": "110° + 70° = 180°. Cocok.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "$\\angle Q = \\angle R = 70^\\circ$, $\\angle PRS = 110^\\circ$."
}
```

### Contoh 3: Poligon beraturan

```soal
{
 "title": "Contoh 3",
 "text": "Setiap sudut luar sebuah poligon beraturan $24^\\circ$. Berapa banyak sisinya, dan berapa besar setiap sudut dalamnya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Total semua sudut luar poligon?",
   "answer": "360",
   "hint": "Total belokan satu keliling.",
   "explain": "360°.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Banyak sisi n = 360° ÷ 24° = ?",
   "answer": "15",
   "hint": "Semua sudut luar sama.",
   "explain": "15 sisi.",
   "error": "salah-langkah-materi",
   "suffix": "sisi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Sudut dalam = 180° − 24° = ?",
   "answer": "156",
   "hint": "Sudut dalam dan sudut luar berpelurus.",
   "explain": "156°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: (15 − 2) × 180° = ?",
   "answer": "2340",
   "hint": "13 × 180.",
   "explain": "2.340° = 15 × 156°. Sama.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "15 sisi, setiap sudut dalam $156^\\circ$."
}
```

### Contoh 4: Soal cerita taman segi lima

```soal
{
 "title": "Contoh 4",
 "text": "Taman Pak Made berbentuk segi lima. Tiga sudut dalamnya $100^\\circ$, $110^\\circ$, dan $120^\\circ$. Dua sudut lainnya $x$ dan $2x$. Hitung kedua sudut itu.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Jumlah sudut dalam segi lima?",
   "answer": "540",
   "hint": "(5 − 2) × 180°.",
   "explain": "540°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Persamaannya",
   "options": [
    "$330 + 3x = 540$",
    "$330 + 2x = 540$",
    "$330 + 3x = 360$"
   ],
   "answer": "$330 + 3x = 540$",
   "hint": "Jumlahkan semua sudut.",
   "explain": "100 + 110 + 120 = 330, ditambah x + 2x.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: x = ?",
   "answer": "70",
   "hint": "3x = 210.",
   "explain": "x = 70°.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Sudut 2x = ?",
   "answer": "140",
   "hint": "Kalikan 2.",
   "explain": "140°.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "Kedua sudut itu $70^\\circ$ dan $140^\\circ$."
}
```

### Contoh 5: Melukis segitiga

```soal
{
 "title": "Contoh 5",
 "text": "Lukis segitiga ABC dengan AB = 6 cm, AC = 5 cm, dan BC = 4 cm.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Alas AB dilukis dengan penggaris sepanjang?",
   "answer": "6",
   "hint": "Lihat soal.",
   "explain": "AB = 6 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jangka ditusuk di A dan dibuka selebar?",
   "answer": "5",
   "hint": "Busur dari A menandai jarak ke C.",
   "explain": "AC = 5 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Jangka ditusuk di B dan dibuka selebar?",
   "answer": "4",
   "hint": "Busur dari B menandai jarak ke C.",
   "explain": "BC = 4 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Titik C adalah",
   "options": [
    "titik potong kedua busur",
    "titik tengah AB",
    "ujung busur dari A"
   ],
   "answer": "titik potong kedua busur",
   "hint": "C harus berjarak 5 cm dari A dan 4 cm dari B sekaligus.",
   "explain": "Tarik AC dan BC. Cek dengan penggaris: 5 cm dan 4 cm.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Segitiga ABC terlukis dengan sisi 6 cm, 5 cm, dan 4 cm."
}
```

## Kesalahan yang sering terjadi

- **Memakai sifat garis sejajar pada garis yang tidak sejajar.** Sudut sehadap hanya sama besar kalau garisnya sejajar. Periksa tanda panah sejajar pada gambar.
- **Menganggap sudut dalam sepihak sama besar.** Sudut dalam sepihak berjumlah $180^\circ$, bukan sama besar.
- **Salah rumus sudut dalam poligon.** Menulis jumlah sudut dalam segi enam $6 \times 180^\circ$. Yang benar $(6 - 2) \times 180^\circ = 720^\circ$.
- **Mengira jumlah sudut luar bergantung pada banyak sisi.** Untuk poligon apa pun, total belokan selalu $360^\circ$.
- **Memakai skala busur yang salah.** Busur derajat punya dua skala. Mulailah dari $0^\circ$ yang menempel pada sinar.

## Ringkasan

- Sudut pada garis lurus $180^\circ$, di sekitar titik $360^\circ$, bertolak belakang sama besar.
- Garis sejajar: sehadap sama, dalam berseberangan sama, dalam sepihak berjumlah $180^\circ$.
- Segitiga: jumlah sudut $180^\circ$, sudut luar = jumlah dua sudut dalam yang berjauhan.
- Poligon bersisi $n$: jumlah sudut dalam $(n - 2) \times 180^\circ$, jumlah sudut luar $360^\circ$.
- Poligon beraturan: sudut luar $\frac{360^\circ}{n}$, sudut dalam $180^\circ$ dikurangi sudut luar.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Sudut $128^\\circ$ termasuk jenis apa? Kalau sudut ini adalah sudut dalam sepihak pada dua garis sejajar, berapa pasangannya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Jenis sudut 128°",
   "options": [
    "tumpul",
    "lancip",
    "refleks",
    "lurus"
   ],
   "answer": "tumpul",
   "hint": "Antara 90° dan 180°.",
   "explain": "128° tumpul.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Pasangan sudut dalam sepihaknya?",
   "answer": "52",
   "hint": "Jumlahnya 180°.",
   "explain": "180° − 128° = 52°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  }
 ],
 "conclusion": "Tumpul; pasangannya $52^\\circ$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Sudut-sudut sebuah segitiga $3x$, $4x$, dan $5x$. Hitung ketiga sudutnya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "12x = 180, jadi x = ?",
   "answer": "15",
   "hint": "3x + 4x + 5x = 12x.",
   "explain": "x = 15.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Sudut 3x = ?",
   "answer": "45",
   "hint": "3 × 15.",
   "explain": "45°.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Sudut 5x = ?",
   "answer": "75",
   "hint": "5 × 15.",
   "explain": "75°. Sudut 4x = 60°.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "$45^\\circ$, $60^\\circ$, $75^\\circ$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung jumlah sudut dalam segi delapan dan besar setiap sudut dalam segi delapan beraturan.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jumlah sudut dalam segi delapan?",
   "answer": "1080",
   "hint": "(8 − 2) × 180°.",
   "explain": "1.080°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Setiap sudut dalam segi delapan beraturan?",
   "answer": "135",
   "hint": "Bagi 8.",
   "explain": "1.080° ÷ 8 = 135°.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "$1.080^\\circ$ dan $135^\\circ$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Setiap sudut dalam sebuah poligon beraturan $140^\\circ$. Berapa banyak sisinya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Sudut luar = ?",
   "answer": "40",
   "hint": "180° − 140°.",
   "explain": "40°.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Banyak sisi?",
   "answer": "9",
   "hint": "360° ÷ sudut luar.",
   "explain": "360 ÷ 40 = 9.",
   "error": "salah-langkah-materi",
   "suffix": "sisi"
  }
 ],
 "conclusion": "Poligon itu bersisi 9."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Salah satu sudut jajargenjang $72^\\circ$. Tentukan tiga sudut lainnya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Sudut yang berdekatan dengan 72°?",
   "answer": "108",
   "hint": "Sudut berdekatan berjumlah 180°.",
   "explain": "108°.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Sudut yang berhadapan dengan 72°?",
   "answer": "72",
   "hint": "Sudut berhadapan sama besar.",
   "explain": "72°.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "Tiga sudut lainnya $108^\\circ$, $72^\\circ$, $108^\\circ$."
}
```
