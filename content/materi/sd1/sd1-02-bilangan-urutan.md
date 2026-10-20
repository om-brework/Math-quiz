---
id: sd1-02-bilangan-urutan
judul: Bilangan Urutan
jenjang: sd1
moe: "Primary 1 · Number and Algebra · Whole Numbers"
prasyarat: [sd1-01-bilangan-sampai-100]
durasi_menit: 20
---

## Kenapa belajar ini?

Saat lomba lari, ada juara pertama, kedua, dan ketiga. Saat antre beli es di kantin, kamu ingin tahu kamu nomor berapa. Bilangan urutan memberi tahu **posisi** sesuatu, bukan banyaknya.

## Analogi

Bayangkan anak-anak sedang **antre naik perosotan** di taman.

Anak yang paling dekat dengan perosotan adalah yang **pertama**. Di belakangnya **kedua**, lalu **ketiga**, dan seterusnya.

```visual
{"type": "table", "head": ["ke-1", "ke-2", "ke-3", "ke-4", "ke-5"], "rows": [["Budi", "Siti", "Made", "Putu", "Ani"]], "caption": "Budi paling dekat dengan perosotan, jadi Budi pertama."}
```

Antrean ini bisa dilihat dari dua arah. Kalau dilihat dari perosotan, kita menghitung **dari depan**. Kalau dilihat dari ujung antrean, kita menghitung **dari belakang**.

## Konsep

### Bilangan biasa dan bilangan urutan

- **Bilangan biasa** menjawab "berapa banyak?". Contoh: ada **5** anak antre.
- **Bilangan urutan** menjawab "yang ke berapa?". Contoh: Budi anak **kelima**.

Perhatikan bedanya. "5 bola" artinya ada lima bola. "Bola kelima" artinya hanya satu bola, yaitu bola di posisi ke-5.

```visual
{"type": "objects", "item": "bola", "count": 5, "caption": "5 bola: ada lima bola."}
```

```visual
{"type": "numberLine", "from": 1, "to": 5, "step": 1, "marks": [5], "caption": "Bola kelima: hanya satu bola, di posisi ke-5."}
```

### Kata dan lambang

Bilangan urutan ditulis dengan kata atau dengan lambang.

```visual
{"type": "table", "head": ["Lambang", "Kata", "Lambang", "Kata"], "rows": [["ke-1", "pertama", "ke-6", "keenam"], ["ke-2", "kedua", "ke-7", "ketujuh"], ["ke-3", "ketiga", "ke-8", "kedelapan"], ["ke-4", "keempat", "ke-9", "kesembilan"], ["ke-5", "kelima", "ke-10", "kesepuluh"]]}
```

Ingat: ke-1 dibaca **pertama**, bukan "kesatu". Kata lainnya dibuat dengan menambah **ke-** di depan bilangan.

Lambang ditulis dengan tanda hubung: **ke-3**, bukan "ke3".

### Dari depan dan dari belakang

Satu anak bisa punya dua urutan:

- urutan **dari depan**, dan
- urutan **dari belakang**.

Cara paling aman: **tunjuk dan hitung**. Mulai dari ujung yang diminta. Ujung itu selalu "pertama".

Lihat antrean 10 anak. Wayan ada di tempat ke-3 dari depan. Katak mulai dari anak paling belakang (pertama dari belakang), lalu melompat mundur satu per satu sampai Wayan.

```anim
{"type": "garis", "from": 1, "to": 10, "start": 10, "jumps": [-1, -1, -1, -1, -1, -1, -1], "title": "Menghitung dari belakang: 10 anak, Wayan di tempat ke-3"}
```

Katak berdiri di anak pertama dari belakang, lalu melompat 7 kali. Jadi Wayan anak **kedelapan** dari belakang.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

Perhatikan antrean perosotan ini. Perosotan ada di sebelah kiri, dekat Budi. Rina paling belakang.

```visual
{"type": "table", "head": ["ke-1", "ke-2", "ke-3", "ke-4", "ke-5", "ke-6", "ke-7"], "rows": [["Budi", "Siti", "Made", "Putu", "Ani", "Dodi", "Rina"]], "caption": "Antrean perosotan. Perosotan ada di kiri, dekat Budi."}
```

### Contoh 1: Urutan dari depan

```soal
{
 "title": "Contoh 1",
 "text": "Siapa anak ketiga dari depan?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tentukan ujungnya. Dari depan berarti mulai dari siapa?",
   "options": [
    "Budi",
    "Rina"
   ],
   "answer": "Budi",
   "hint": "Depan adalah ujung yang dekat perosotan.",
   "explain": "Budi paling dekat perosotan, jadi Budi pertama.",
   "error": "salah-ujung-antrean"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Tunjuk dan hitung: pertama, kedua, ketiga. Siapa yang ketiga?",
   "options": [
    "Siti",
    "Made",
    "Putu"
   ],
   "answer": "Made",
   "hint": "Budi pertama, Siti kedua, lalu?",
   "explain": "Budi pertama, Siti kedua, Made ketiga.",
   "error": "salah-hitung-posisi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: Made urutan ke berapa dengan lambang?",
   "options": [
    "ke-3",
    "ke3",
    "ke-2"
   ],
   "answer": "ke-3",
   "hint": "Lambang memakai tanda hubung.",
   "explain": "Budi ke-1, Siti ke-2, Made ke-3. Sama.",
   "error": "lambang-urutan-tanpa-hubung"
  }
 ],
 "conclusion": "Jadi anak ketiga dari depan adalah Made.",
 "visual": {
  "type": "table",
  "head": [
   "ke-1",
   "ke-2",
   "ke-3",
   "ke-4",
   "ke-5",
   "ke-6",
   "ke-7"
  ],
  "rows": [
   [
    "Budi",
    "Siti",
    "Made",
    "Putu",
    "Ani",
    "Dodi",
    "Rina"
   ]
  ],
  "caption": "Antrean perosotan. Perosotan ada di kiri, dekat Budi."
 }
}
```

### Contoh 2: Urutan dari belakang

```soal
{
 "title": "Contoh 2",
 "text": "Siti urutan ke berapa dari belakang?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tentukan ujungnya. Dari belakang berarti mulai dari siapa?",
   "options": [
    "Budi",
    "Rina"
   ],
   "answer": "Rina",
   "hint": "Belakang adalah ujung yang jauh dari perosotan.",
   "explain": "Rina paling ujung, jadi Rina pertama dari belakang.",
   "error": "salah-ujung-antrean"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Tunjuk dan hitung dari Rina: Rina, Dodi, Ani, Putu, Made, Siti. Siti hitungan ke berapa?",
   "answer": "6",
   "hint": "Rina 1, Dodi 2, Ani 3, ...",
   "explain": "Rina 1, Dodi 2, Ani 3, Putu 4, Made 5, Siti 6.",
   "error": "salah-urutan-dari-belakang"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Tulis dengan kata.",
   "options": [
    "keenam",
    "kedua",
    "keenam belas"
   ],
   "answer": "keenam",
   "hint": "Tambahkan ke- di depan enam.",
   "explain": "Ke-6 dibaca keenam.",
   "error": "salah-kata-urutan"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: ada berapa anak di belakang Siti?",
   "answer": "5",
   "hint": "Hitung Made, Putu, Ani, Dodi, Rina.",
   "explain": "Ada 5 anak di belakang Siti. Siti datang sesudah 5 anak itu, jadi ke-6 dari belakang. Benar.",
   "error": "salah-urutan-dari-belakang"
  }
 ],
 "conclusion": "Jadi Siti keenam (ke-6) dari belakang.",
 "visual": {
  "type": "table",
  "head": [
   "ke-1",
   "ke-2",
   "ke-3",
   "ke-4",
   "ke-5",
   "ke-6",
   "ke-7"
  ],
  "rows": [
   [
    "Budi",
    "Siti",
    "Made",
    "Putu",
    "Ani",
    "Dodi",
    "Rina"
   ]
  ],
  "caption": "Antrean perosotan. Perosotan ada di kiri, dekat Budi."
 }
}
```

### Contoh 3: Banyak atau posisi?

```soal
{
 "title": "Contoh 3",
 "text": "Ada 8 kelereng berjajar. Warnai kelereng ketiga dari kiri. Berapa kelereng yang diwarnai?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Baca kata kuncinya. “Ketiga” artinya ...",
   "options": [
    "satu kelereng di posisi ke-3",
    "tiga kelereng"
   ],
   "answer": "satu kelereng di posisi ke-3",
   "hint": "Ketiga adalah bilangan urutan.",
   "explain": "Bilangan urutan menunjuk satu benda saja.",
   "error": "tertukar-banyak-urutan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Tunjuk dan hitung dari kiri. Kelereng yang diwarnai ada di posisi ke berapa?",
   "answer": "3",
   "hint": "Pertama, kedua, ketiga.",
   "explain": "Kelereng ke-3 dari kiri yang diwarnai.",
   "error": "salah-hitung-posisi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: berapa kelereng yang diwarnai?",
   "answer": "1",
   "hint": "Soal tidak meminta “warnai 3 kelereng”.",
   "explain": "Hanya 1 kelereng, yaitu kelereng ke-3.",
   "error": "tertukar-banyak-urutan"
  }
 ],
 "conclusion": "Jadi hanya 1 kelereng yang diwarnai, yaitu kelereng ke-3 dari kiri.",
 "visual": {
  "type": "objects",
  "item": "kelereng",
  "count": 8
 }
}
```

### Contoh 4: Soal cerita

```soal
{
 "title": "Contoh 4",
 "text": "Ada 10 anak antre membeli bakso. Wayan berada di urutan ke-3 dari depan. Wayan urutan ke berapa dari belakang?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Berapa anak di depan Wayan?",
   "answer": "2",
   "hint": "Wayan ke-3, jadi ada anak ke-1 dan ke-2 di depannya.",
   "explain": "Di depan Wayan ada 2 anak.",
   "error": "salah-hitung-posisi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Berapa anak di belakang Wayan? 10 − 3 = ?",
   "answer": "7",
   "hint": "Semua anak dikurangi Wayan dan anak di depannya.",
   "explain": "10 − 3 = 7 anak di belakang Wayan.",
   "error": "salah-urutan-dari-belakang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Dari belakang, Wayan datang sesudah 7 anak. Wayan ke berapa?",
   "answer": "8",
   "hint": "Sesudah 7 anak berarti satu lagi.",
   "explain": "7 + 1 = 8. Wayan ke-8 dari belakang.",
   "error": "salah-urutan-dari-belakang"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 2 + 1 + 7 = ?",
   "answer": "10",
   "hint": "Anak di depan + Wayan + anak di belakang.",
   "explain": "2 + 1 + 7 = 10, sama dengan banyak anak. Benar.",
   "error": "salah-urutan-dari-belakang"
  }
 ],
 "conclusion": "Jadi Wayan kedelapan (ke-8) dari belakang.",
 "visual": {
  "type": "numberLine",
  "from": 1,
  "to": 10,
  "step": 1,
  "marks": [
   3
  ]
 }
}
```

## Kesalahan yang sering terjadi

- **Mulai menghitung dari ujung yang salah.** Soal minta "dari belakang", tetapi anak menghitung dari depan. Selalu tentukan ujungnya dulu, seperti mencari di mana perosotannya.
- **Menyebut "kesatu".** Yang benar adalah **pertama**.
- **Menulis lambang tanpa tanda hubung.** Menulis "ke5". Yang benar **ke-5**.
- **Mencampur banyak dan posisi.** Diminta "mobil keempat", tetapi menunjuk empat mobil. Bilangan urutan hanya menunjuk **satu** benda.
- **Urutan dari belakang dianggap sama dengan dari depan.** Siti ke-2 dari depan, bukan berarti ke-2 dari belakang. Hitung ulang dari ujung lainnya.

## Ringkasan

- Bilangan urutan menunjukkan **posisi**: pertama, kedua, ketiga, sampai kesepuluh.
- Lambangnya ke-1 sampai ke-10, dengan tanda hubung.
- Ke-1 dibaca **pertama**.
- Tentukan dulu ujungnya (depan atau belakang), lalu **tunjuk dan hitung**.
- Cek: anak di depan + anak itu sendiri + anak di belakang = jumlah semua anak.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tulis “ketujuh” dengan lambang.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Ketujuh berasal dari bilangan berapa?",
   "answer": "7",
   "hint": "Buang ke- di depan.",
   "explain": "Ketujuh berasal dari tujuh, yaitu 7.",
   "error": "salah-kata-urutan"
  },
  {
   "kind": "choice",
   "prompt": "Lambangnya adalah ...",
   "options": [
    "ke-7",
    "ke7",
    "7"
   ],
   "answer": "ke-7",
   "hint": "Jangan lupa tanda hubung.",
   "explain": "Ketujuh ditulis ke-7.",
   "error": "lambang-urutan-tanpa-hubung"
  }
 ],
 "conclusion": "Jadi ketujuh ditulis ke-7."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Tulis “ke-9” dengan kata.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Ke-9 dibaca ...",
   "options": [
    "kesembilan",
    "sembilan",
    "kesembilan puluh"
   ],
   "answer": "kesembilan",
   "hint": "Tambahkan ke di depan sembilan.",
   "explain": "Ke-9 dibaca kesembilan.",
   "error": "salah-kata-urutan"
  },
  {
   "kind": "choice",
   "prompt": "Apakah “kesembilan” berarti 9 benda atau satu benda di posisi ke-9?",
   "options": [
    "satu benda di posisi ke-9",
    "9 benda"
   ],
   "answer": "satu benda di posisi ke-9",
   "hint": "Bilangan urutan menunjuk posisi.",
   "explain": "Kesembilan menunjuk satu benda saja.",
   "error": "tertukar-banyak-urutan"
  }
 ],
 "conclusion": "Jadi ke-9 dibaca kesembilan."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Antrean dari depan: Ani, Budi, Citra, Dewi, Eko. Siapa yang keempat dari depan?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Mulai menghitung dari siapa?",
   "options": [
    "Ani",
    "Eko"
   ],
   "answer": "Ani",
   "hint": "Dari depan.",
   "explain": "Ani paling depan, jadi Ani pertama.",
   "error": "salah-ujung-antrean"
  },
  {
   "kind": "choice",
   "prompt": "Siapa yang keempat?",
   "options": [
    "Citra",
    "Dewi",
    "Eko"
   ],
   "answer": "Dewi",
   "hint": "Ani 1, Budi 2, Citra 3, ...",
   "explain": "Ani pertama, Budi kedua, Citra ketiga, Dewi keempat.",
   "error": "salah-hitung-posisi"
  }
 ],
 "conclusion": "Jadi yang keempat dari depan adalah Dewi.",
 "visual": {
  "type": "table",
  "head": [
   "ke-1",
   "ke-2",
   "ke-3",
   "ke-4",
   "ke-5"
  ],
  "rows": [
   [
    "Ani",
    "Budi",
    "Citra",
    "Dewi",
    "Eko"
   ]
  ],
  "caption": "Ani paling depan, Eko paling belakang."
 }
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Pada antrean di Soal 3, Budi urutan ke berapa dari belakang?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Mulai menghitung dari siapa?",
   "options": [
    "Ani",
    "Eko"
   ],
   "answer": "Eko",
   "hint": "Dari belakang.",
   "explain": "Eko paling belakang, jadi Eko pertama dari belakang.",
   "error": "salah-ujung-antrean"
  },
  {
   "kind": "number",
   "prompt": "Eko, Dewi, Citra, Budi. Budi hitungan ke berapa?",
   "answer": "4",
   "hint": "Eko 1, Dewi 2, ...",
   "explain": "Eko 1, Dewi 2, Citra 3, Budi 4.",
   "error": "salah-urutan-dari-belakang"
  }
 ],
 "conclusion": "Jadi Budi keempat (ke-4) dari belakang.",
 "visual": {
  "type": "table",
  "head": [
   "ke-1",
   "ke-2",
   "ke-3",
   "ke-4",
   "ke-5"
  ],
  "rows": [
   [
    "Ani",
    "Budi",
    "Citra",
    "Dewi",
    "Eko"
   ]
  ],
  "caption": "Ani paling depan, Eko paling belakang."
 }
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Ada 8 mobil berbaris. Mobil merah urutan ke-2 dari depan. Mobil merah urutan ke berapa dari belakang?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa mobil di belakang mobil merah? 8 − 2 = ?",
   "answer": "6",
   "hint": "Semua mobil dikurangi mobil merah dan mobil di depannya.",
   "explain": "8 − 2 = 6 mobil di belakang mobil merah.",
   "error": "salah-urutan-dari-belakang"
  },
  {
   "kind": "number",
   "prompt": "Mobil merah datang sesudah 6 mobil itu. Ke berapa dari belakang?",
   "answer": "7",
   "hint": "Satu lagi sesudah 6.",
   "explain": "6 + 1 = 7. Ketujuh dari belakang.",
   "error": "salah-urutan-dari-belakang"
  }
 ],
 "conclusion": "Jadi mobil merah ketujuh (ke-7) dari belakang.",
 "visual": {
  "type": "objects",
  "item": "mobil",
  "count": 8
 }
}
```
