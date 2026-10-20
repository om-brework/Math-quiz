---
id: smp3-10-peluang-majemuk
judul: Peluang Kejadian Majemuk
jenjang: smp3
moe: "Secondary 3 · Statistics and Probability · S2 Probability"
prasyarat: [smp2-12-peluang-dasar]
durasi_menit: 50
---

## Kenapa belajar ini?

Kejadian sehari-hari sering terdiri dari beberapa langkah: hujan atau tidak, lalu bus terlambat atau tidak. Peluang kejadian majemuk membantu kamu menghitung kemungkinan gabungan seperti "hujan **dan** terlambat" atau "merah **atau** hijau" dengan rapi dan tanpa menebak.

## Analogi

Bayangkan perjalanan dari rumah ke sekolah melewati **jalan bercabang**.

- Di setiap **persimpangan**, kamu memilih salah satu cabang. Setiap cabang punya peluang, dan jumlah peluang semua cabang di satu persimpangan selalu 1.
- Satu **rute lengkap** dari rumah ke ujung adalah satu hasil gabungan. Untuk melewati cabang pertama **dan** cabang kedua, peluangnya **dikalikan** sepanjang rute.
- Kalau ada beberapa rute yang sama-sama memenuhi syarat, kamu boleh lewat rute ini **atau** rute itu. Peluangnya **dijumlahkan**, karena dua rute berbeda tidak bisa dilewati sekaligus.

Peta jalan bercabang ini disebut **diagram pohon**. Pegangan utamanya: **kalikan sepanjang cabang, jumlahkan antar-rute.**

```anim
{"type": "bangun", "title": "Diagram pohon: koin dilempar dua kali", "titik": {"Mulai": [0, 0], "A": [3, 1.6], "G": [3, -1.6], "AA": [6, 2.4], "AG": [6, 0.8], "GA": [6, -0.8], "GG": [6, -2.4]}, "sisi": [["Mulai", "A", "\\tfrac{1}{2}"], ["Mulai", "G", "\\tfrac{1}{2}"], ["A", "AA", "\\tfrac{1}{2}"], ["A", "AG", "\\tfrac{1}{2}"], ["G", "GA", "\\tfrac{1}{2}"], ["G", "GG", "\\tfrac{1}{2}"]], "langkah": [{"say": "Persimpangan pertama: lemparan pertama Angka (A) atau Gambar (G). Peluang cabangnya berjumlah 1.", "sisi": 2}, {"say": "Dari setiap ujung, lemparan kedua bercabang lagi.", "sisi": 6}, {"say": "Rute A lalu A: kalikan sepanjang cabang, $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$.", "sisi": 6, "sorot": ["MulaiA", "AAA", "AA"]}, {"say": "Tepat satu Angka: rute AG atau GA. Jumlahkan antar-rute: $\\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$.", "sisi": 6, "sorot": ["AG", "GA", "AAG", "GGA"]}]}
```

## Konsep

### Diagram kemungkinan

Jika ada dua percobaan sederhana, misalnya dua dadu, semua hasil bisa disusun dalam **tabel** seperti papan catur. Baris untuk dadu pertama, kolom untuk dadu kedua.

```visual
{"type": "table", "head": ["+", "1", "2", "3", "4", "5", "6"], "rows": [["1", "2", "3", "4", "5", "6", "7"], ["2", "3", "4", "5", "6", "7", "8"], ["3", "4", "5", "6", "7", "8", "9"], ["4", "5", "6", "7", "8", "9", "10"], ["5", "6", "7", "8", "9", "10", "11"], ["6", "7", "8", "9", "10", "11", "12"]], "caption": "Baris: dadu 1. Kolom: dadu 2. Isi kotak: jumlah mata dadu."}
```

Ada $6 \times 6 = 36$ kotak, semuanya sama mungkin. Peluang suatu kejadian adalah banyak kotak yang cocok dibagi 36.

### Kejadian saling lepas dan aturan penjumlahan

Dua kejadian **saling lepas** jika tidak bisa terjadi bersamaan. Contoh: mengambil satu kelereng, kelereng itu merah atau hijau, tidak mungkin keduanya.

$$P(A \text{ atau } B) = P(A) + P(B) \quad \text{(jika } A, B \text{ saling lepas)}$$

**Kenapa?** Hasil yang membuat $A$ terjadi dan hasil yang membuat $B$ terjadi tidak tumpang tindih, jadi banyak hasilnya tinggal dijumlah. Ini seperti dua rute berbeda di peta jalan.

Kasus khusus: $P(\text{bukan } A) = 1 - P(A)$, karena "$A$" dan "bukan $A$" saling lepas dan pasti salah satunya terjadi.

### Kejadian saling bebas dan aturan perkalian

Dua kejadian **saling bebas** jika terjadinya yang satu **tidak mengubah** peluang yang lain. Contoh: hasil lemparan koin tidak memengaruhi hasil dadu.

$$P(A \text{ dan } B) = P(A) \times P(B) \quad \text{(jika } A, B \text{ saling bebas)}$$

**Kenapa dikali?** Misalkan $P(A) = \frac{1}{2}$ dan $P(B) = \frac{1}{3}$. Dari banyak percobaan, kira-kira setengahnya memunculkan $A$. Dari bagian itu, sepertiganya juga memunculkan $B$. Jadi bagian yang memunculkan keduanya adalah $\frac{1}{3}$ dari $\frac{1}{2}$, yaitu $\frac{1}{2} \times \frac{1}{3} = \frac{1}{6}$.

```visual
{"type": "grid", "width": 3, "height": 2, "shade": [{"x": 0, "y": 0, "w": 1, "h": 1}], "caption": "Setengah bagian (satu baris) memunculkan A; sepertiga dari bagian itu (satu kotak) juga memunculkan B: 1/2 × 1/3 = 1/6."}
```

```anim
{"type": "persamaan", "title": "Kenapa peluang “dan” dikalikan", "baris": [{"tex": "P(A) = \\tfrac{1}{2}", "say": "Kira-kira setengah percobaan memunculkan $A$."}, {"tex": "\\tfrac{1}{3} \\text{ dari } \\tfrac{1}{2}", "say": "Dari bagian itu, sepertiganya juga memunculkan $B$."}, {"tex": "P(A \\text{ dan } B) = \\tfrac{1}{2} \\times \\tfrac{1}{3} = \\tfrac{1}{6}", "say": "“Dari” berarti dikalikan.", "op": "$\\times$"}]}
```

### Diagram pohon

1. Gambar cabang untuk tahap pertama, tulis peluangnya di setiap cabang.
2. Dari ujung setiap cabang, gambar cabang tahap kedua.
3. Kalikan sepanjang cabang untuk mendapat peluang setiap rute.
4. Jumlahkan rute-rute yang memenuhi syarat.

Jika pengambilan dilakukan **tanpa pengembalian**, peluang di cabang kedua **berubah**, karena isi kantong sudah berkurang. Aturannya tetap sama: kalikan sepanjang cabang dengan peluang yang sudah disesuaikan.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Diagram kemungkinan dua dadu

```soal
{
 "title": "Contoh 1",
 "text": "Dua dadu dilempar. Hitung peluang jumlah mata dadu 8, dan peluang jumlahnya paling sedikit 10.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Ada berapa hasil yang sama mungkin?",
   "answer": "36",
   "hint": "Baris × kolom pada tabel.",
   "explain": "$6 \\times 6 = 36$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Berapa kotak yang berjumlah 8?",
   "answer": "5",
   "hint": "Cari angka 8 pada diagonal tabel.",
   "explain": "(2,6), (3,5), (4,4), (5,3), (6,2): ada 5.",
   "error": "salah-membilang-benda"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: $P(\\text{jumlah } 8)$ = ?",
   "answer": {
    "num": 5,
    "den": 36
   },
   "hint": "Kotak yang cocok dibagi semua kotak.",
   "explain": "$\\frac{5}{36}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Berapa kotak yang berjumlah 10, 11, atau 12?",
   "answer": "6",
   "hint": "Lihat pojok kanan bawah tabel.",
   "explain": "$3 + 2 + 1 = 6$ kotak.",
   "error": "salah-membilang-benda"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 5: $P(\\text{jumlah} \\ge 10)$ = ? (paling sederhana)",
   "answer": {
    "num": 1,
    "den": 6
   },
   "hint": "$\\frac{6}{36}$, lalu sederhanakan.",
   "explain": "$\\frac{6}{36} = \\frac{1}{6}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "$P(\\text{jumlah } 8) = \\frac{5}{36}$ dan $P(\\text{jumlah} \\ge 10) = \\frac{1}{6}$."
}
```

### Contoh 2: Kejadian saling lepas

```soal
{
 "title": "Contoh 2",
 "text": "Kantong berisi 5 kelereng merah, 3 biru, dan 2 hijau. Satu kelereng diambil acak. Hitung peluang terambil merah atau hijau.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Total kelereng?",
   "answer": "10",
   "hint": "5 + 3 + 2.",
   "explain": "10 kelereng.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Apakah \"merah\" dan \"hijau\" saling lepas?",
   "options": [
    "Ya, satu kelereng tidak bisa merah dan hijau sekaligus",
    "Tidak, keduanya bisa terjadi bersamaan"
   ],
   "answer": "Ya, satu kelereng tidak bisa merah dan hijau sekaligus",
   "hint": "Bisakah satu kelereng berwarna dua?",
   "explain": "Saling lepas, jadi peluangnya dijumlah.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: $P(M) + P(H) = \\frac{5}{10} + \\frac{2}{10}$ = ?",
   "answer": {
    "num": 7,
    "den": 10
   },
   "hint": "Jumlahkan pembilangnya.",
   "explain": "$\\frac{7}{10}$.",
   "error": "pecahan-penyebut-dijumlah",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Cek jawaban: $1 - P(\\text{biru})$ = ?",
   "answer": {
    "num": 7,
    "den": 10
   },
   "hint": "$P(\\text{biru}) = \\frac{3}{10}$.",
   "explain": "$1 - \\frac{3}{10} = \\frac{7}{10}$. Sama.",
   "error": "salah-langkah-materi",
   "simplest": true
  }
 ],
 "conclusion": "Peluang terambil merah atau hijau $\\frac{7}{10}$."
}
```

### Contoh 3: Soal cerita dengan diagram pohon (saling bebas)

```soal
{
 "title": "Contoh 3",
 "text": "Peluang hujan pada pagi hari di Denpasar adalah 0,3. Peluang bus sekolah Putu terlambat adalah 0,2, dan tidak bergantung pada hujan. Hitung peluang (a) hujan dan bus terlambat, (b) tepat satu dari kedua kejadian itu terjadi.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Peluang tidak hujan?",
   "answer": "0,7",
   "hint": "Cabang di satu persimpangan berjumlah 1.",
   "explain": "$1 - 0{,}3 = 0{,}7$; begitu juga tepat waktu $= 0{,}8$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: (a) Hujan dan terlambat = 0,3 × 0,2 = ?",
   "answer": "0,06",
   "hint": "Kalikan sepanjang satu rute.",
   "explain": "0,06.",
   "error": "tambah-bukan-kali"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Rute mana saja untuk \"tepat satu\" (b)?",
   "options": [
    "(Hujan, Tepat waktu) dan (Tidak hujan, Terlambat)",
    "(Hujan, Terlambat) saja",
    "(Tidak hujan, Tepat waktu) saja"
   ],
   "answer": "(Hujan, Tepat waktu) dan (Tidak hujan, Terlambat)",
   "hint": "Ada dua urutan: hanya hujan, atau hanya terlambat.",
   "explain": "Dua rute memenuhi syarat.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Rute (Hujan, Tepat waktu) = 0,3 × 0,8 = ?",
   "answer": "0,24",
   "hint": "Kalikan.",
   "explain": "0,24.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Rute (Tidak hujan, Terlambat) = 0,7 × 0,2 = ?",
   "answer": "0,14",
   "hint": "Kalikan.",
   "explain": "0,14.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 6: (b) Jumlahkan kedua rute.",
   "answer": "0,38",
   "hint": "0,24 + 0,14.",
   "explain": "0,38.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: jumlah keempat rute 0,06 + 0,24 + 0,14 + 0,56 = ?",
   "answer": "1",
   "hint": "Semua rute harus berjumlah 1.",
   "explain": "Jumlahnya 1. Pohon benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "(a) 0,06; (b) 0,38.",
 "visual": {
  "type": "table",
  "head": [
   "Rute",
   "Peluang"
  ],
  "rows": [
   [
    "Hujan, Terlambat",
    "0,3 × 0,2"
   ],
   [
    "Hujan, Tepat waktu",
    "0,3 × 0,8"
   ],
   [
    "Tidak hujan, Terlambat",
    "0,7 × 0,2"
   ],
   [
    "Tidak hujan, Tepat waktu",
    "0,7 × 0,8"
   ]
  ]
 }
}
```

### Contoh 4: Tanpa pengembalian

```anim
{"type": "bangun", "title": "Pohon tanpa pengembalian", "titik": {"Mulai": [0, 0], "S": [3, 1.6], "J": [3, -1.6], "SS": [6, 2.4], "SJ": [6, 0.8], "JS": [6, -0.8], "JJ": [6, -2.4]}, "sisi": [["Mulai", "S", "\\tfrac{5}{8}"], ["Mulai", "J", "\\tfrac{3}{8}"], ["S", "SS", "?"], ["S", "SJ", "\\tfrac{3}{7}"], ["J", "JS", "\\tfrac{5}{7}"], ["J", "JJ", "?"]], "langkah": [{"say": "Pengambilan pertama dari 8 permen: 5 stroberi (S), 3 jeruk (J).", "sisi": 2}, {"say": "Pengambilan kedua dari 7 permen yang tersisa. Peluangnya bergantung pada cabang pertama.", "sisi": 6}, {"say": "Rasa sama: rute SS dan JJ.", "sisi": 6, "sorot": ["SS", "JJ"]}]}
```

```soal
{
 "title": "Contoh 4",
 "text": "Toples berisi 5 permen rasa stroberi dan 3 permen rasa jeruk. Siti mengambil 2 permen satu per satu tanpa mengembalikan. Hitung peluang kedua permen rasanya sama.",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Langkah 1: Jika pertama stroberi, peluang kedua juga stroberi?",
   "answer": {
    "num": 4,
    "den": 7
   },
   "hint": "Setelah satu stroberi diambil, sisa berapa stroberi dari berapa permen?",
   "explain": "Sisa 4 stroberi dari 7 permen: $\\frac{4}{7}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: $P(S, S) = \\frac{5}{8} \\times \\frac{4}{7}$ = ? (paling sederhana)",
   "answer": {
    "num": 5,
    "den": 14
   },
   "hint": "$\\frac{20}{56}$, lalu sederhanakan.",
   "explain": "$\\frac{20}{56} = \\frac{5}{14}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: Jika pertama jeruk, peluang kedua juga jeruk?",
   "answer": {
    "num": 2,
    "den": 7
   },
   "hint": "Sisa jeruk setelah satu diambil.",
   "explain": "Sisa 2 jeruk dari 7 permen: $\\frac{2}{7}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: $P(J, J) = \\frac{3}{8} \\times \\frac{2}{7}$ = ? (paling sederhana)",
   "answer": {
    "num": 3,
    "den": 28
   },
   "hint": "$\\frac{6}{56}$, lalu sederhanakan.",
   "explain": "$\\frac{6}{56} = \\frac{3}{28}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 5: Jumlahkan kedua rute. (paling sederhana)",
   "answer": {
    "num": 13,
    "den": 28
   },
   "hint": "$\\frac{5}{14} = \\frac{10}{28}$.",
   "explain": "$\\frac{10}{28} + \\frac{3}{28} = \\frac{13}{28}$.",
   "error": "penyebut-tidak-disamakan",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Cek jawaban: peluang rasa berbeda $\\frac{5}{8} \\times \\frac{3}{7} + \\frac{3}{8} \\times \\frac{5}{7}$ = ? (paling sederhana)",
   "answer": {
    "num": 15,
    "den": 28
   },
   "hint": "$\\frac{15}{56} + \\frac{15}{56}$.",
   "explain": "$\\frac{30}{56} = \\frac{15}{28}$, dan $\\frac{13}{28} + \\frac{15}{28} = 1$. Cocok.",
   "error": "salah-langkah-materi",
   "simplest": true
  }
 ],
 "conclusion": "Peluang kedua permen rasanya sama $\\frac{13}{28}$."
}
```

## Kesalahan yang sering terjadi

- **Menjumlah padahal harus mengali.** "Hujan **dan** terlambat" bukan $0{,}3 + 0{,}2 = 0{,}5$. Kata "dan" sepanjang satu rute berarti dikalikan.
- **Menjumlah kejadian yang tidak saling lepas.** Pada satu dadu, $P(\text{genap atau} > 3) \ne \frac{3}{6} + \frac{3}{6}$, karena 4 dan 6 terhitung dua kali. Jawaban benar $\frac{4}{6}$ (hasil 2, 4, 5, 6).
- **Lupa menyesuaikan cabang tanpa pengembalian.** Menulis $\frac{5}{8} \times \frac{5}{8}$ untuk dua stroberi. Setelah satu diambil, tinggal 4 stroberi dari 7 permen.
- **Hanya menghitung satu rute untuk "tepat satu".** Ada dua urutan: yang pertama terjadi atau yang kedua terjadi.
- **Tidak memeriksa jumlah cabang.** Peluang di satu persimpangan harus berjumlah 1, dan semua rute juga berjumlah 1.

## Ringkasan

- Diagram kemungkinan (tabel) cocok untuk dua percobaan sederhana seperti dua dadu.
- Saling lepas: $P(A \text{ atau } B) = P(A) + P(B)$.
- Saling bebas: $P(A \text{ dan } B) = P(A) \times P(B)$.
- Diagram pohon: kalikan sepanjang cabang, jumlahkan antar-rute.
- Tanpa pengembalian: peluang di cabang berikutnya berubah sesuai isi yang tersisa.
- Cek: semua rute berjumlah 1; $P(\text{bukan } A) = 1 - P(A)$.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Dua dadu dilempar. Berapa peluang kedua mata dadu genap?",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Peluang satu dadu genap?",
   "answer": {
    "num": 1,
    "den": 2
   },
   "hint": "Mata genap: 2, 4, 6.",
   "explain": "$\\frac{3}{6} = \\frac{1}{2}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Peluang keduanya genap?",
   "answer": {
    "num": 1,
    "den": 4
   },
   "hint": "Saling bebas: kalikan.",
   "explain": "$\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$, sama dengan $\\frac{9}{36}$.",
   "error": "tambah-bukan-kali",
   "simplest": true
  }
 ],
 "conclusion": "Peluangnya $\\frac{1}{4}$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Sebuah koin dan sebuah dadu dilempar bersama. Berapa peluang muncul sisi angka pada koin dan mata 6 pada dadu?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Aturan apa yang dipakai?",
   "options": [
    "Perkalian, karena saling bebas",
    "Penjumlahan, karena saling lepas"
   ],
   "answer": "Perkalian, karena saling bebas",
   "hint": "Apakah hasil koin memengaruhi dadu?",
   "explain": "Saling bebas, dan kata \"dan\" berarti dikalikan.",
   "error": "tambah-bukan-kali"
  },
  {
   "kind": "fraction",
   "prompt": "Peluangnya?",
   "answer": {
    "num": 1,
    "den": 12
   },
   "hint": "$\\frac{1}{2} \\times \\frac{1}{6}$.",
   "explain": "$\\frac{1}{12}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  }
 ],
 "conclusion": "Peluangnya $\\frac{1}{12}$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "$A$ dan $B$ saling lepas dengan $P(A) = 0{,}35$ dan $P(B) = 0{,}4$. Hitung $P(A \\text{ atau } B)$ dan $P(\\text{bukan } A \\text{ dan bukan } B)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$P(A \\text{ atau } B)$ = ?",
   "answer": "0,75",
   "hint": "Saling lepas: jumlahkan.",
   "explain": "$0{,}35 + 0{,}4 = 0{,}75$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$P(\\text{bukan } A \\text{ dan bukan } B)$ = ?",
   "answer": "0,25",
   "hint": "Kebalikan dari \"A atau B\".",
   "explain": "$1 - 0{,}75 = 0{,}25$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "0,75 dan 0,25."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Peluang Made memasukkan lemparan bebas basket adalah 0,7 dan setiap lemparan saling bebas. Ia melempar 2 kali. Berapa peluang tepat satu lemparan masuk?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Rute (masuk, gagal) = 0,7 × 0,3 = ?",
   "answer": "0,21",
   "hint": "Peluang gagal 1 − 0,7.",
   "explain": "0,21.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Peluang tepat satu masuk?",
   "answer": "0,42",
   "hint": "Ada dua rute: (masuk, gagal) dan (gagal, masuk).",
   "explain": "0,21 + 0,21 = 0,42.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Peluangnya 0,42."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Kotak berisi 4 bola merah dan 6 bola putih. Dua bola diambil tanpa pengembalian. Berapa peluang keduanya merah?",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Peluang bola pertama merah? (paling sederhana)",
   "answer": {
    "num": 2,
    "den": 5
   },
   "hint": "$\\frac{4}{10}$.",
   "explain": "$\\frac{4}{10} = \\frac{2}{5}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Peluang bola kedua merah, jika pertama merah? (paling sederhana)",
   "answer": {
    "num": 1,
    "den": 3
   },
   "hint": "Sisa 3 merah dari 9 bola.",
   "explain": "$\\frac{3}{9} = \\frac{1}{3}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "fraction",
   "prompt": "Peluang keduanya merah?",
   "answer": {
    "num": 2,
    "den": 15
   },
   "hint": "Kalikan sepanjang rute.",
   "explain": "$\\frac{2}{5} \\times \\frac{1}{3} = \\frac{2}{15}$.",
   "error": "salah-langkah-materi",
   "simplest": true
  }
 ],
 "conclusion": "Peluangnya $\\frac{2}{15}$."
}
```
