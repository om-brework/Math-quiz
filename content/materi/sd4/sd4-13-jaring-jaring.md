---
id: sd4-13-jaring-jaring
judul: Jaring-jaring Bangun Ruang
jenjang: sd4
moe: "Primary 4 · Measurement and Geometry · Nets"
prasyarat: [sd2-12-bangun-ruang]
durasi_menit: 35
---

## Kenapa belajar ini?

Kotak susu, kardus mi, dan kotak kue dibuat dari selembar karton yang dipotong lalu dilipat. Pola potongan itu disebut **jaring-jaring**. Kalau kamu memahaminya, kamu bisa membuat kotak sendiri, misalnya kotak hadiah atau dadu.

## Analogi

Ambil sebuah **kotak kue** dari karton. Gunting beberapa rusuknya dengan hati-hati, lalu **bentangkan** di atas meja sampai rata.

```visual
{"type": "solid", "solid": "balok", "caption": "Kotak kue berbentuk balok"}
```

Bentangan rata itulah **jaring-jaring**. Semua sisi kotak masih ada, hanya sekarang terbaring berdampingan.

```visual
{"type": "grid", "width": 4, "height": 3, "shade": [{"x": 1, "y": 0, "w": 1, "h": 1}, {"x": 0, "y": 1, "w": 1, "h": 1}, {"x": 1, "y": 1, "w": 1, "h": 1}, {"x": 2, "y": 1, "w": 1, "h": 1}, {"x": 3, "y": 1, "w": 1, "h": 1}, {"x": 1, "y": 2, "w": 1, "h": 1}], "caption": "Kotak berbentuk kubus yang dibentangkan: 6 persegi terbaring berdampingan"}
```

Kebalikannya, kalau kamu **melipat** jaring-jaring itu kembali, kotaknya terbentuk lagi. Jadi untuk memeriksa jaring-jaring, kita selalu membayangkan **melipat kotak**.

## Konsep

### Bagian bangun ruang

- **Sisi**: permukaan datar atau lengkung yang membatasi bangun.
- **Rusuk**: garis tempat dua sisi bertemu.
- **Titik sudut**: titik tempat beberapa rusuk bertemu.

### Mengenal bangun ruang dan sisinya

```visual
{"type": "table", "head": ["Bangun ruang", "Sisi"], "rows": [["Kubus", "6 persegi sama besar"], ["Balok", "6 persegi panjang, berpasangan sama besar"], ["Prisma segitiga", "2 segitiga + 3 persegi panjang"], ["Limas segiempat", "1 segi empat (alas) + 4 segitiga"], ["Limas segitiga", "4 segitiga"], ["Tabung", "2 lingkaran + 1 sisi lengkung"], ["Kerucut", "1 lingkaran + 1 sisi lengkung, 1 puncak"]]}
```

### Gambar 2D bangun ruang

Bangun ruang digambar di kertas datar dengan cara khusus supaya terlihat "timbul".

Kubus atau balok digambar dengan sisi depan berupa persegi atau persegi panjang, lalu rusuk ke belakang digambar **miring**.

```visual
{"type": "solid", "solid": "kubus", "caption": "Rusuk ke belakang miring, rusuk tersembunyi putus-putus"}
```

- Rusuk yang **tersembunyi** di belakang digambar **putus-putus**.
- Alas lingkaran pada **tabung** dan **kerucut** digambar sebagai bentuk lonjong (oval), karena dilihat dari samping.

```visual
{"type": "solid", "solid": "tabung", "caption": "Alas tabung dilihat dari samping: oval"}
```

- **Prisma** digambar dengan dua alas yang sama, dihubungkan rusuk-rusuk sejajar.
- **Limas** digambar dengan satu alas, lalu semua titik sudut alas dihubungkan ke satu titik puncak.

### Jaring-jaring kubus, balok, prisma, dan limas

Jaring-jaring kubus punya **6 persegi** yang tersambung. Contohnya bentuk salib. Beri nomor: persegi 1 di atas, baris tengah 2, 3, 4, 5 dari kiri, dan persegi 6 di bawah persegi 3.

```visual
{"type": "grid", "width": 4, "height": 3, "shade": [{"x": 1, "y": 0, "w": 1, "h": 1}, {"x": 0, "y": 1, "w": 1, "h": 1}, {"x": 1, "y": 1, "w": 1, "h": 1}, {"x": 2, "y": 1, "w": 1, "h": 1}, {"x": 3, "y": 1, "w": 1, "h": 1}, {"x": 1, "y": 2, "w": 1, "h": 1}], "caption": "Bentuk salib: persegi 1 di atas persegi 3, persegi 6 di bawahnya"}
```

Kalau persegi 3 dijadikan alas: 1, 2, 4, dan 6 dilipat ke atas menjadi dinding, lalu 5 dilipat menjadi tutup. Pasangan sisi yang **berhadapan** pada kubus: 1 dan 6, 2 dan 4, 3 dan 5.

Tidak semua susunan 6 persegi adalah jaring-jaring kubus. Susunan ini **bukan**:

```visual
{"type": "grid", "width": 3, "height": 2, "shade": [{"x": 0, "y": 0, "w": 1, "h": 1}, {"x": 1, "y": 0, "w": 1, "h": 1}, {"x": 2, "y": 0, "w": 1, "h": 1}, {"x": 0, "y": 1, "w": 1, "h": 1}, {"x": 1, "y": 1, "w": 1, "h": 1}, {"x": 2, "y": 1, "w": 1, "h": 1}], "caption": "Susunan 2 × 3: bukan jaring-jaring kubus"}
```

Jaring-jaring prisma segitiga: 3 persegi panjang berjajar, ditambah 2 segitiga.

```anim
{"type": "bangun", "title": "Jaring-jaring prisma segitiga", "titik": {"A": [0, 0], "B": [3, 0], "C": [6, 0], "D": [9, 0], "E": [9, 3], "F": [6, 3], "G": [3, 3], "H": [0, 3], "T": [4.5, 5.6], "U": [4.5, -2.6]}, "sisi": [["A", "D"], ["D", "E"], ["E", "H"], ["H", "A"], ["B", "G"], ["C", "F"], ["G", "T"], ["T", "F"], ["B", "U"], ["U", "C"]], "langkah": [{"say": "Tiga persegi panjang berjajar: dinding prisma.", "sisi": 6}, {"say": "Satu segitiga di atas: alas pertama.", "sisi": 8, "sorot": ["GT", "TF"]}, {"say": "Satu segitiga di bawah: alas kedua. Jumlahnya 5 sisi.", "sisi": 10, "sorot": ["BU", "UC"]}]}
```

Jaring-jaring limas segiempat: 1 persegi di tengah, dengan 4 segitiga di setiap sisinya, seperti kelopak bunga.

```anim
{"type": "bangun", "title": "Jaring-jaring limas segiempat", "titik": {"P": [0, 0], "Q": [3, 0], "R": [3, 3], "S": [0, 3], "A": [1.5, 5.6], "B": [5.6, 1.5], "C": [1.5, -2.6], "D": [-2.6, 1.5]}, "sisi": [["P", "Q"], ["Q", "R"], ["R", "S"], ["S", "P"], ["S", "A"], ["A", "R"], ["R", "B"], ["B", "Q"], ["Q", "C"], ["C", "P"], ["P", "D"], ["D", "S"]], "langkah": [{"say": "Persegi PQRS di tengah adalah alas.", "sisi": 4}, {"say": "Empat segitiga menempel di setiap sisi, seperti kelopak bunga.", "sisi": 12}, {"say": "Kalau dilipat ke atas, titik A, B, C, dan D bertemu di satu puncak.", "sisi": 12, "sorot": ["A", "B", "C", "D"]}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Bangun ruang dari jaring-jaring

```soal
{
 "title": "Kerjakan bersama",
 "text": "Sebuah jaring-jaring terdiri dari 2 segitiga sama besar dan 3 persegi panjang. Bangun ruang apa yang terbentuk? Bagaimana dengan jaring-jaring dari 1 persegi dan 4 segitiga?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Hitung sisi jaring pertama. Ada berapa sisi?",
   "answer": "5",
   "hint": "2 segitiga ditambah 3 persegi panjang.",
   "explain": "Ada 5 sisi.",
   "error": "salah-hitung-sisi-datar",
   "suffix": "sisi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Cocokkan dengan tabel. Bangun apa jaring pertama?",
   "options": [
    "Prisma segitiga",
    "Limas segiempat",
    "Limas segitiga",
    "Balok"
   ],
   "answer": "Prisma segitiga",
   "hint": "Dua segitiga sama besar menjadi dua alas.",
   "explain": "2 alas segitiga + 3 dinding persegi panjang = prisma segitiga.",
   "error": "salah-nama-bangun-ruang"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Bangun apa jaring kedua (1 persegi dan 4 segitiga)?",
   "options": [
    "Prisma segitiga",
    "Limas segiempat",
    "Limas segitiga",
    "Balok"
   ],
   "answer": "Limas segiempat",
   "hint": "Persegi menjadi alas, segitiga bertemu di satu puncak.",
   "explain": "1 alas persegi + 4 segitiga = limas segiempat.",
   "error": "salah-nama-bangun-ruang"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: apa bedanya prisma dan limas?",
   "options": [
    "Prisma punya dua alas, limas satu alas dan satu puncak",
    "Prisma punya puncak, limas tidak",
    "Keduanya punya dua alas"
   ],
   "answer": "Prisma punya dua alas, limas satu alas dan satu puncak",
   "hint": "Bayangkan melipat masing-masing jaring.",
   "explain": "Prisma: 2 alas sama. Limas: 1 alas, dinding segitiga bertemu di puncak.",
   "error": "salah-golongkan-bangun-ruang"
  }
 ],
 "conclusion": "Prisma segitiga dan limas segiempat."
}
```

### Contoh 2: Apakah ini jaring-jaring kubus?

```soal
{
 "title": "Kerjakan bersama",
 "text": "Manakah yang merupakan jaring-jaring kubus: bentuk salib di bagian Konsep, atau susunan 2 baris × 3 persegi (gambar)?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Hitung persegi pada setiap susunan. Ada berapa?",
   "answer": "6",
   "hint": "Hitung semua kotak.",
   "explain": "Keduanya punya 6 persegi. Syarat pertama terpenuhi.",
   "error": "salah-membilang-benda",
   "suffix": "persegi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Lipat bentuk salib dengan persegi 3 sebagai alas. Apakah kotaknya tertutup rapat?",
   "options": [
    "Ya, jaring-jaring kubus",
    "Bukan jaring-jaring kubus"
   ],
   "answer": "Ya, jaring-jaring kubus",
   "hint": "Empat persegi menjadi dinding, satu menjadi tutup.",
   "explain": "Tidak ada yang bertumpuk atau bolong. Bentuk salib adalah jaring-jaring kubus.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Periksa susunan 2 × 3.",
   "options": [
    "Ya, jaring-jaring kubus",
    "Bukan jaring-jaring kubus"
   ],
   "answer": "Bukan jaring-jaring kubus",
   "hint": "Lihat empat persegi yang bertemu di satu titik.",
   "explain": "Saat dilipat ada persegi yang bertumpuk dan ada sisi yang terbuka.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: kenapa susunan 2 × 3 gagal?",
   "options": [
    "Ada 4 persegi bertemu di satu titik, padahal titik sudut kubus hanya dipertemukan 3 sisi",
    "Jumlah perseginya kurang",
    "Perseginya tidak sama besar"
   ],
   "answer": "Ada 4 persegi bertemu di satu titik, padahal titik sudut kubus hanya dipertemukan 3 sisi",
   "hint": "Hitung sisi yang bertemu di satu titik sudut kubus.",
   "explain": "Setiap titik sudut kubus hanya dipertemukan 3 sisi, jadi kotak 2 × 2 tidak bisa dilipat rapi.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Bentuk salib adalah jaring-jaring kubus. Susunan 2 × 3 bukan.",
 "visual": {
  "type": "grid",
  "width": 3,
  "height": 2,
  "shade": [
   {
    "x": 0,
    "y": 0,
    "w": 1,
    "h": 1
   },
   {
    "x": 1,
    "y": 0,
    "w": 1,
    "h": 1
   },
   {
    "x": 2,
    "y": 0,
    "w": 1,
    "h": 1
   },
   {
    "x": 0,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 1,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 2,
    "y": 1,
    "w": 1,
    "h": 1
   }
  ]
 }
}
```

### Contoh 3: Soal cerita, jaring-jaring balok

```soal
{
 "title": "Kerjakan bersama",
 "text": "Putu membongkar kotak tisu berbentuk balok berukuran 24 cm × 12 cm × 10 cm (panjang × lebar × tinggi) menjadi jaring-jaring. Ada berapa persegi panjang? Sebutkan ukurannya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Balok punya berapa sisi?",
   "answer": "6",
   "hint": "Alas, tutup, depan, belakang, kiri, kanan.",
   "explain": "6 sisi, semuanya persegi panjang.",
   "error": "salah-hitung-sisi-datar",
   "suffix": "sisi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Ukuran alas dan tutup (panjang × lebar)?",
   "options": [
    "24 cm × 12 cm",
    "24 cm × 10 cm",
    "12 cm × 10 cm"
   ],
   "answer": "24 cm × 12 cm",
   "hint": "Panjang 24 cm, lebar 12 cm.",
   "explain": "Alas dan tutup: 24 cm × 12 cm.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Ukuran depan dan belakang (panjang × tinggi)?",
   "options": [
    "24 cm × 12 cm",
    "24 cm × 10 cm",
    "12 cm × 10 cm"
   ],
   "answer": "24 cm × 10 cm",
   "hint": "Panjang 24 cm, tinggi 10 cm.",
   "explain": "Depan dan belakang: 24 cm × 10 cm.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Ukuran kiri dan kanan (lebar × tinggi)?",
   "options": [
    "24 cm × 12 cm",
    "24 cm × 10 cm",
    "12 cm × 10 cm"
   ],
   "answer": "12 cm × 10 cm",
   "hint": "Lebar 12 cm, tinggi 10 cm.",
   "explain": "Kiri dan kanan: 12 cm × 10 cm.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: ada berapa persegi panjang untuk setiap ukuran?",
   "answer": "2",
   "hint": "Sisi yang berhadapan sama besar.",
   "explain": "Masing-masing 2, jadi 2 + 2 + 2 = 6.",
   "error": "salah-hitung-sisi-datar"
  }
 ],
 "conclusion": "6 persegi panjang: 2 berukuran 24 cm × 12 cm, 2 berukuran 24 cm × 10 cm, dan 2 berukuran 12 cm × 10 cm.",
 "visual": {
  "type": "solid",
  "solid": "balok"
 }
}
```

### Contoh 4: Jaring-jaring dadu

```soal
{
 "title": "Kerjakan bersama",
 "text": "Pada dadu, angka di sisi yang berhadapan selalu berjumlah 7. Jaring-jaringnya berbentuk salib: persegi atas berisi 1, baris tengah dari kiri berisi 3, 2, A, B, dan persegi bawah (di bawah angka 2) berisi C. Berapa A, B, dan C?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tentukan pasangan. Angka 3 (kotak ke-1 baris tengah) berhadapan dengan kotak mana?",
   "options": [
    "A (kotak ke-3)",
    "2 (kotak ke-2)",
    "B (kotak ke-4)"
   ],
   "answer": "A (kotak ke-3)",
   "hint": "Pada baris 4 persegi, kotak yang berhadapan tidak berdampingan.",
   "explain": "Kotak ke-1 berhadapan dengan ke-3, ke-2 dengan ke-4. Atas berhadapan dengan bawah.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: C berhadapan dengan 1. C = ?",
   "answer": "6",
   "hint": "1 + C = 7.",
   "explain": "C = 7 − 1 = 6.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: A berhadapan dengan 3. A = ?",
   "answer": "4",
   "hint": "3 + A = 7.",
   "explain": "A = 7 − 3 = 4.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: B berhadapan dengan 2. B = ?",
   "answer": "5",
   "hint": "2 + B = 7.",
   "explain": "B = 7 − 2 = 5.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: apakah angka 1 sampai 6 muncul tepat sekali?",
   "options": [
    "Ya: 1, 3, 2, 4, 5, 6",
    "Tidak, ada angka kembar"
   ],
   "answer": "Ya: 1, 3, 2, 4, 5, 6",
   "hint": "Daftar semua angka di jaring.",
   "explain": "Semua angka 1–6 muncul sekali. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "A = 4, B = 5, C = 6.",
 "visual": {
  "type": "grid",
  "width": 4,
  "height": 3,
  "shade": [
   {
    "x": 1,
    "y": 0,
    "w": 1,
    "h": 1
   },
   {
    "x": 0,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 1,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 2,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 3,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 1,
    "y": 2,
    "w": 1,
    "h": 1
   }
  ]
 }
}
```

## Kesalahan yang sering terjadi

- **Mengira semua susunan 6 persegi adalah jaring-jaring kubus.** Susunan 2 × 3 atau 6 persegi berderet tidak bisa dilipat menjadi kubus. Selalu bayangkan melipatnya.
- **Tertukar prisma dan limas.** Prisma punya **dua** alas yang sama dan dinding persegi panjang. Limas punya **satu** alas dan dinding segitiga yang bertemu di puncak.
- **Menganggap sisi bersebelahan di jaring-jaring juga bersebelahan di kubus, lalu salah menentukan sisi berhadapan.** Pada baris 4 persegi, yang berhadapan adalah kotak ke-1 dan ke-3, serta ke-2 dan ke-4. Bukan kotak yang berdampingan.
- **Lupa sepasang sisi balok.** Hanya menulis 4 persegi panjang. Balok punya 6 sisi: alas-tutup, depan-belakang, kiri-kanan.
- **Menggambar alas tabung sebagai lingkaran penuh pada gambar 2D.** Dari samping, lingkaran terlihat lonjong (oval).

## Ringkasan

- Jaring-jaring adalah bentangan rata semua sisi bangun ruang. Kalau dilipat, bangunnya terbentuk.
- Kubus: 6 persegi. Balok: 6 persegi panjang, berpasangan. Prisma segitiga: 2 segitiga + 3 persegi panjang. Limas segiempat: 1 segi empat + 4 segitiga.
- Untuk memeriksa jaring-jaring: hitung sisinya, lalu bayangkan melipat. Tidak boleh ada yang bertumpuk atau bolong.
- Pada baris 4 persegi di jaring-jaring kubus, kotak ke-1 berhadapan dengan ke-3, dan ke-2 dengan ke-4.
- Gambar 2D: rusuk ke belakang digambar miring, rusuk tersembunyi putus-putus, alas lingkaran digambar oval.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Bangun ruang apa yang punya satu alas lingkaran, satu sisi lengkung, dan satu titik puncak?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Ada berapa sisi datar?",
   "answer": "1",
   "hint": "Hanya alasnya yang datar.",
   "explain": "1 sisi datar (lingkaran).",
   "error": "salah-hitung-sisi-datar"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Bangun apa itu?",
   "options": [
    "Kerucut",
    "Tabung",
    "Limas segiempat",
    "Bola"
   ],
   "answer": "Kerucut",
   "hint": "Tabung punya dua alas lingkaran.",
   "explain": "Kerucut: 1 alas lingkaran, 1 sisi lengkung, 1 puncak.",
   "error": "tabung-kerucut-tertukar"
  }
 ],
 "conclusion": "Kerucut."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Sebuah jaring-jaring terdiri dari 4 segitiga sama besar. Bangun ruang apa yang terbentuk?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Berapa segitiga yang menjadi alas?",
   "answer": "1",
   "hint": "Sisanya dilipat ke atas.",
   "explain": "1 segitiga menjadi alas, 3 lainnya bertemu di puncak.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Bangun apa itu?",
   "options": [
    "Limas segitiga",
    "Prisma segitiga",
    "Limas segiempat"
   ],
   "answer": "Limas segitiga",
   "hint": "Satu alas dan satu puncak berarti limas. Alasnya segitiga.",
   "explain": "Limas segitiga.",
   "error": "salah-nama-bangun-ruang"
  }
 ],
 "conclusion": "Limas segitiga."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Apakah susunan ini jaring-jaring kubus? Satu persegi di atas kotak paling kiri, empat persegi berderet, dan satu persegi di bawah kotak paling kanan.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Ada berapa persegi?",
   "answer": "6",
   "hint": "Hitung semua kotak.",
   "explain": "6 persegi.",
   "error": "salah-membilang-benda"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Baris 4 persegi dilipat menjadi apa?",
   "options": [
    "Empat dinding melingkar seperti sabuk",
    "Alas dan tutup",
    "Tidak bisa dilipat"
   ],
   "answer": "Empat dinding melingkar seperti sabuk",
   "hint": "Bayangkan menggulung baris itu.",
   "explain": "Baris 4 persegi melingkar menjadi empat dinding.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Persegi atas dan bawah menutup kedua ujung. Jadi?",
   "options": [
    "Ya, jaring-jaring kubus",
    "Bukan jaring-jaring kubus"
   ],
   "answer": "Ya, jaring-jaring kubus",
   "hint": "Apakah ada yang bertumpuk atau bolong?",
   "explain": "Ya, jaring-jaring kubus. Satu persegi menutup ujung atas, satu menutup ujung bawah.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Ya, susunan itu jaring-jaring kubus.",
 "visual": {
  "type": "grid",
  "width": 4,
  "height": 3,
  "shade": [
   {
    "x": 0,
    "y": 0,
    "w": 1,
    "h": 1
   },
   {
    "x": 0,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 1,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 2,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 3,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 3,
    "y": 2,
    "w": 1,
    "h": 1
   }
  ]
 }
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Sebuah balok berukuran 6 cm × 4 cm × 3 cm (panjang × lebar × tinggi). Sebutkan ukuran semua persegi panjang pada jaring-jaringnya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Alas dan tutup (panjang × lebar)?",
   "options": [
    "6 cm × 4 cm",
    "6 cm × 3 cm",
    "4 cm × 3 cm"
   ],
   "answer": "6 cm × 4 cm",
   "hint": "Panjang 6, lebar 4.",
   "explain": "2 persegi panjang 6 cm × 4 cm.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Depan dan belakang (panjang × tinggi)?",
   "options": [
    "6 cm × 4 cm",
    "6 cm × 3 cm",
    "4 cm × 3 cm"
   ],
   "answer": "6 cm × 3 cm",
   "hint": "Panjang 6, tinggi 3.",
   "explain": "2 persegi panjang 6 cm × 3 cm.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Kiri dan kanan (lebar × tinggi)?",
   "options": [
    "6 cm × 4 cm",
    "6 cm × 3 cm",
    "4 cm × 3 cm"
   ],
   "answer": "4 cm × 3 cm",
   "hint": "Lebar 4, tinggi 3.",
   "explain": "2 persegi panjang 4 cm × 3 cm.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Ada berapa persegi panjang seluruhnya?",
   "answer": "6",
   "hint": "Setiap pasangan ada 2.",
   "explain": "2 + 2 + 2 = 6.",
   "error": "salah-hitung-sisi-datar"
  }
 ],
 "conclusion": "2 berukuran 6 cm × 4 cm, 2 berukuran 6 cm × 3 cm, dan 2 berukuran 4 cm × 3 cm.",
 "visual": {
  "type": "solid",
  "solid": "balok"
 }
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Pada jaring-jaring dadu berbentuk salib, baris tengah dari kiri berisi 6, 4, 1, dan ?. Angka berhadapan berjumlah 7. Berapa angka di kotak bertanda tanya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Kotak ? (ke-4 di baris tengah) berhadapan dengan kotak mana?",
   "options": [
    "Kotak ke-2, berisi 4",
    "Kotak ke-3, berisi 1",
    "Kotak ke-1, berisi 6"
   ],
   "answer": "Kotak ke-2, berisi 4",
   "hint": "Kotak ke-2 berhadapan dengan ke-4.",
   "explain": "Kotak ke-4 berhadapan dengan kotak ke-2 yang berisi 4.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Angka di kotak ? = ?",
   "answer": "3",
   "hint": "4 + ? = 7.",
   "explain": "7 − 4 = 3.",
   "error": "salah-fakta-kurang"
  }
 ],
 "conclusion": "Angkanya 3.",
 "visual": {
  "type": "grid",
  "width": 4,
  "height": 3,
  "shade": [
   {
    "x": 1,
    "y": 0,
    "w": 1,
    "h": 1
   },
   {
    "x": 0,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 1,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 2,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 3,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 1,
    "y": 2,
    "w": 1,
    "h": 1
   }
  ]
 }
}
```
