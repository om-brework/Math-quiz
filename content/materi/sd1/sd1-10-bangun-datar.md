---
id: sd1-10-bangun-datar
judul: Bangun Datar
jenjang: sd1
moe: "Primary 1 · Measurement and Geometry · Geometry"
prasyarat: []
durasi_menit: 30
---

## Kenapa belajar ini?

Lihat sekelilingmu. Pintu, ubin lantai, jam dinding, dan potongan kue punya bentuk. Kalau kamu mengenal bentuk, kamu bisa menyebutnya dengan tepat, mengelompokkannya, dan menyusun bentuk baru dari potongan-potongan.

## Analogi

Bayangkan kamu di **dapur Ibu** yang penuh kue dan roti.

- **Roti tawar** yang bujur sangkar adalah **persegi**.
- **Cokelat batangan** yang memanjang adalah **persegi panjang**.
- Roti tawar dipotong dari pojok ke pojok menjadi **segitiga**.
- **Kue bolu bundar** adalah **lingkaran**.
- Kue bolu dipotong dua sama besar menjadi **setengah lingkaran**.
- Dipotong empat sama besar menjadi **seperempat lingkaran**.

```visual
{"type": "shapes", "items": [{"shape": "persegi"}, {"shape": "persegi-panjang"}, {"shape": "segitiga"}, {"shape": "lingkaran"}, {"shape": "setengah-lingkaran"}, {"shape": "seperempat-lingkaran"}], "caption": "Persegi, persegi panjang, segitiga, lingkaran, setengah lingkaran, seperempat lingkaran"}
```

```visual
{"type": "fraction", "shape": "circle", "parts": 4, "shaded": 1, "caption": "Bolu bundar dipotong 4 sama besar. Satu potong adalah seperempat lingkaran."}
```

Kita akan memakai kue dan roti ini untuk mengenal, mengelompokkan, dan menyusun bentuk.

## Konsep

### Sisi dan pojok

Untuk mengenal bentuk, lihat dua hal:

- **Sisi**: garis tepi bentuk. Sisi bisa **lurus** atau **lengkung**.
- **Pojok**: tempat dua sisi bertemu. Pojok juga disebut **sudut**.

### Enam bangun datar

```visual
{"type": "table", "head": ["Bentuk", "Sisi lurus", "Sisi lengkung", "Pojok"], "rows": [["Persegi", "4", "0", "4"], ["Persegi panjang", "4", "0", "4"], ["Segitiga", "3", "0", "3"], ["Lingkaran", "0", "1", "0"], ["Setengah lingkaran", "1", "1", "2"], ["Seperempat lingkaran", "2", "1", "3"]]}
```

Ciri penting:

- **Persegi**: 4 sisi **sama panjang**. Contoh: ubin lantai, roti tawar.
- **Persegi panjang**: 4 sisi, dua sisi **panjang** dan dua sisi **pendek**. Contoh: pintu, buku tulis.
- **Segitiga**: 3 sisi lurus, 3 pojok. Contoh: potongan roti tawar, rambu peringatan.
- **Lingkaran**: bulat, tidak punya sisi lurus dan tidak punya pojok. Contoh: koin, tutup toples.
- **Setengah lingkaran**: satu sisi lurus dan satu sisi lengkung.
- **Seperempat lingkaran**: dua sisi lurus dan satu sisi lengkung, seperti potongan bolu.

Bentuk yang diputar tetap sama namanya:

```visual
{"type": "shapes", "items": [{"shape": "persegi"}, {"shape": "persegi", "rotate": 45}, {"shape": "segitiga"}, {"shape": "segitiga", "rotate": 180}], "caption": "Persegi miring tetap persegi. Segitiga terbalik tetap segitiga."}
```

### Menggolongkan bentuk

Menggolongkan artinya memasukkan bentuk ke kelompok yang sama. Kita bisa menggolongkan menurut:

- **jenis bentuk** (semua segitiga, semua lingkaran),
- **punya sisi lengkung atau tidak**,
- **banyak pojok**.

### Menyusun bentuk dari potongan

Potongan-potongan bisa digabung menjadi bentuk baru, seperti potongan kue disusun kembali:

- 2 segitiga sama besar menjadi 1 persegi (roti tawar utuh lagi).
- 2 setengah lingkaran menjadi 1 lingkaran.
- 4 seperempat lingkaran menjadi 1 lingkaran.
- 2 persegi yang ditempel berdampingan menjadi 1 persegi panjang.

```visual
{"type": "fraction", "shape": "circle", "parts": 2, "shaded": 2, "caption": "2 setengah lingkaran sama besar menjadi 1 lingkaran"}
```

```visual
{"type": "grid", "width": 2, "height": 1, "shade": [{"x": 0, "y": 0, "w": 1, "h": 1}], "caption": "2 persegi berdampingan menjadi 1 persegi panjang"}
```

### Menyalin bentuk pada kertas berpetak atau bertitik

Saat menyalin, **hitung kotak atau titik** untuk setiap sisi. Mulai dari satu pojok, lalu ikuti sisinya satu per satu.

```anim
{"type": "bangun", "titik": {"A": [0, 0], "B": [3, 0], "C": [0, 3]}, "sisi": [["A", "B", "3 titik"], ["A", "C", "3 titik"], ["B", "C"]], "langkah": [{"say": "Tandai pojok A di kiri bawah.", "sisi": 0, "sorot": ["A"]}, {"say": "Dari A, hitung 3 lompatan ke kanan. Tandai B, lalu tarik garis A ke B.", "sisi": 1, "sorot": ["B"]}, {"say": "Dari A, hitung 3 lompatan ke atas. Tandai C, lalu tarik garis A ke C.", "sisi": 2, "sorot": ["C"]}, {"say": "Hubungkan B ke C. Segitiga selesai: 3 sisi lurus dan 3 pojok.", "sisi": 3}], "title": "Menyalin segitiga di kertas bertitik"}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Mengenali bentuk benda

```soal
{
 "title": "Contoh 1",
 "text": "Sebutkan bentuk benda ini: ubin lantai yang keempat sisinya sama panjang, pintu kelas, dan jam dinding.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Hitung pojok. Pintu punya berapa pojok?",
   "answer": "4",
   "hint": "Pojok adalah tempat dua sisi bertemu.",
   "explain": "Pintu punya 4 pojok.",
   "error": "salah-hitung-pojok"
  },
  {
   "kind": "number",
   "prompt": "Jam dinding punya berapa pojok?",
   "answer": "0",
   "hint": "Tepinya melengkung.",
   "explain": "Jam dinding tidak punya pojok.",
   "error": "salah-hitung-pojok"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Ubin punya 4 sisi sama panjang. Bentuknya ...",
   "options": [
    "persegi",
    "persegi panjang",
    "segitiga"
   ],
   "answer": "persegi",
   "hint": "4 sisi sama panjang.",
   "explain": "4 sisi sama panjang adalah persegi.",
   "error": "tertukar-persegi-persegi-panjang"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Pintu punya 4 sisi, dua panjang dan dua pendek. Bentuknya ...",
   "options": [
    "persegi",
    "persegi panjang",
    "lingkaran"
   ],
   "answer": "persegi panjang",
   "hint": "Sisinya tidak sama panjang.",
   "explain": "Pintu adalah persegi panjang.",
   "error": "tertukar-persegi-persegi-panjang"
  },
  {
   "kind": "choice",
   "prompt": "Jam dinding bentuknya ...",
   "options": [
    "lingkaran",
    "setengah lingkaran",
    "persegi"
   ],
   "answer": "lingkaran",
   "hint": "Tidak punya sisi lurus dan pojok.",
   "explain": "Jam dinding adalah lingkaran.",
   "error": "salah-kenali-bangun"
  }
 ],
 "conclusion": "Jadi ubin persegi, pintu persegi panjang, jam dinding lingkaran.",
 "visual": {
  "type": "shapes",
  "items": [
   {
    "shape": "persegi"
   },
   {
    "shape": "persegi-panjang"
   },
   {
    "shape": "lingkaran"
   }
  ]
 }
}
```

### Contoh 2: Menggolongkan

```soal
{
 "title": "Contoh 2",
 "text": "Ada bentuk: segitiga, lingkaran, persegi, setengah lingkaran, persegi panjang, seperempat lingkaran. Kelompokkan menjadi “punya sisi lengkung” dan “semua sisi lurus”.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Apakah setengah lingkaran punya sisi lengkung?",
   "options": [
    "Ya",
    "Tidak"
   ],
   "answer": "Ya",
   "hint": "Lihat tepinya yang seperti tepi bolu.",
   "explain": "Setengah lingkaran punya 1 sisi lengkung.",
   "error": "lupa-sisi-lurus-lengkung"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Kelompok “punya sisi lengkung” berisi ...",
   "options": [
    "lingkaran, setengah lingkaran, seperempat lingkaran",
    "lingkaran saja",
    "segitiga, persegi, persegi panjang"
   ],
   "answer": "lingkaran, setengah lingkaran, seperempat lingkaran",
   "hint": "Semua bentuk dari bolu punya tepi lengkung.",
   "explain": "Lingkaran, setengah lingkaran, dan seperempat lingkaran.",
   "error": "salah-golongkan-bangun"
  },
  {
   "kind": "choice",
   "prompt": "Kelompok “semua sisi lurus” berisi ...",
   "options": [
    "segitiga, persegi, persegi panjang",
    "segitiga dan persegi saja",
    "persegi, setengah lingkaran, segitiga"
   ],
   "answer": "segitiga, persegi, persegi panjang",
   "hint": "Bentuk yang tidak punya tepi lengkung.",
   "explain": "Segitiga, persegi, dan persegi panjang.",
   "error": "salah-golongkan-bangun"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 3 + 3 = ? bentuk",
   "answer": "6",
   "hint": "Jumlahkan isi kedua kelompok.",
   "explain": "3 + 3 = 6. Tidak ada yang tertinggal.",
   "error": "salah-golongkan-bangun"
  }
 ],
 "conclusion": "Jadi sisi lengkung: lingkaran, setengah lingkaran, seperempat lingkaran. Semua sisi lurus: segitiga, persegi, persegi panjang.",
 "visual": {
  "type": "shapes",
  "items": [
   {
    "shape": "segitiga"
   },
   {
    "shape": "lingkaran"
   },
   {
    "shape": "persegi"
   },
   {
    "shape": "setengah-lingkaran"
   },
   {
    "shape": "persegi-panjang"
   },
   {
    "shape": "seperempat-lingkaran"
   }
  ]
 }
}
```

### Contoh 3: Soal cerita, menyusun bentuk

```soal
{
 "title": "Contoh 3",
 "text": "Ibu memotong satu kue bolu bundar menjadi 4 potong sama besar. Bentuk apa setiap potongnya? Berapa potong yang harus disusun untuk membuat setengah lingkaran?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Bolu bundar bentuknya ...",
   "options": [
    "lingkaran",
    "persegi",
    "segitiga"
   ],
   "answer": "lingkaran",
   "hint": "Bundar.",
   "explain": "Bolu bundar adalah lingkaran.",
   "error": "salah-kenali-bangun"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Satu dari 4 potong sama besar bentuknya ...",
   "options": [
    "seperempat lingkaran",
    "setengah lingkaran",
    "segitiga"
   ],
   "answer": "seperempat lingkaran",
   "hint": "Dipotong empat sama besar.",
   "explain": "Satu dari empat bagian lingkaran adalah seperempat lingkaran.",
   "error": "tertukar-bagian-lingkaran"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Berapa potong untuk membuat setengah lingkaran?",
   "answer": "2",
   "hint": "Setengah adalah separuh dari 4 potong.",
   "explain": "2 seperempat lingkaran berdampingan membentuk setengah lingkaran.",
   "error": "salah-susun-potongan",
   "suffix": "potong"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 2 setengah lingkaran membentuk lingkaran. 2 + 2 = ? potong",
   "answer": "4",
   "hint": "Setiap setengah butuh 2 potong.",
   "explain": "2 + 2 = 4, sama dengan potongan Ibu. Benar.",
   "error": "salah-susun-potongan"
  }
 ],
 "conclusion": "Jadi setiap potong berbentuk seperempat lingkaran, dan butuh 2 potong untuk setengah lingkaran.",
 "visual": {
  "type": "fraction",
  "shape": "circle",
  "parts": 4,
  "shaded": 2
 }
}
```

### Contoh 4: Menyalin persegi panjang di kertas berpetak

```soal
{
 "title": "Contoh 4",
 "text": "Salin persegi panjang yang panjangnya 4 kotak dan lebarnya 2 kotak.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Dari mana mulai menggambar?",
   "options": [
    "dari satu pojok kotak",
    "dari tengah kotak"
   ],
   "answer": "dari satu pojok kotak",
   "hint": "Sisi bertemu di pojok.",
   "explain": "Mulai di satu pojok, misalnya kiri atas.",
   "error": "salah-salin-bangun"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Sisi atas ditarik ke kanan sepanjang berapa kotak?",
   "answer": "4",
   "hint": "Panjangnya.",
   "explain": "Sisi atas 4 kotak.",
   "error": "hitung-titik-bukan-jarak",
   "suffix": "kotak"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Sisi kanan ditarik ke bawah sepanjang berapa kotak?",
   "answer": "2",
   "hint": "Lebarnya.",
   "explain": "Sisi kanan 2 kotak.",
   "error": "hitung-titik-bukan-jarak",
   "suffix": "kotak"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Sisi bawah ke kiri sepanjang berapa kotak?",
   "answer": "4",
   "hint": "Sama dengan sisi atas.",
   "explain": "Sisi bawah 4 kotak, lalu sisi kiri 2 kotak ke atas.",
   "error": "salah-salin-bangun",
   "suffix": "kotak"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: ada berapa pojok?",
   "answer": "4",
   "hint": "Hitung tempat dua sisi bertemu.",
   "explain": "Ada 4 pojok. Benar persegi panjang.",
   "error": "salah-hitung-pojok"
  }
 ],
 "conclusion": "Jadi persegi panjangnya 4 kotak kali 2 kotak.",
 "visual": {
  "type": "grid",
  "width": 4,
  "height": 2,
  "showDims": true,
  "unit": "kotak"
 }
}
```

### Contoh 5: Menyalin segitiga di kertas bertitik

```soal
{
 "title": "Contoh 5",
 "text": "Salin segitiga ABC pada kertas bertitik. A di kiri bawah, B 3 lompatan titik ke kanan dari A, C 3 lompatan titik ke atas dari A.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pojok mana yang ditandai lebih dulu?",
   "options": [
    "A",
    "B",
    "C"
   ],
   "answer": "A",
   "hint": "Mulai dari pojok kiri bawah.",
   "explain": "Tandai A di satu titik kiri bawah.",
   "error": "salah-salin-bangun"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Dari A, berapa lompatan ke kanan untuk B?",
   "answer": "3",
   "hint": "Hitung lompatan, bukan titik.",
   "explain": "3 lompatan ke kanan. Tandai B.",
   "error": "hitung-titik-bukan-jarak"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Dari A, berapa lompatan ke atas untuk C?",
   "answer": "3",
   "hint": "Hitung lompatan, bukan titik.",
   "explain": "3 lompatan ke atas. Tandai C.",
   "error": "hitung-titik-bukan-jarak"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Hubungkan A ke B, B ke C, C ke A. Ada berapa sisi?",
   "answer": "3",
   "hint": "Hitung garis yang ditarik.",
   "explain": "Ada 3 sisi lurus.",
   "error": "salah-hitung-sisi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: ada berapa pojok?",
   "answer": "3",
   "hint": "Segitiga.",
   "explain": "3 sisi dan 3 pojok. Benar segitiga.",
   "error": "salah-hitung-pojok"
  }
 ],
 "conclusion": "Jadi segitiga ABC punya pojok A, B, dan C, dengan AB dan AC masing-masing 3 lompatan.",
 "visual": {
  "type": "shape",
  "shape": "segitiga"
 }
}
```

## Kesalahan yang sering terjadi

- **Menyebut semua bentuk 4 sisi "persegi".** Pintu punya 4 sisi, tetapi tidak sama panjang. Pintu adalah persegi panjang. Persegi harus 4 sisi **sama panjang**.
- **Mengira bentuk yang diputar berubah nama.** Persegi yang diputar miring tetap persegi. Segitiga yang terbalik tetap segitiga. Hitung sisi dan pojoknya.
- **Lupa sisi lurus pada setengah lingkaran.** Setengah lingkaran punya 1 sisi lurus dan 1 sisi lengkung, bukan hanya lengkung.
- **Salah menghitung saat menyalin.** Menghitung titik, bukan jarak, sehingga sisi kelebihan satu. Dari titik A ke B, hitung **lompatan** antar titik.
- **Potongan tidak sama besar.** Dua potongan berbeda ukuran tidak bisa disebut setengah. Setengah dan seperempat harus **sama besar**.

## Ringkasan

- Kenali bentuk dari **banyak sisi** (lurus atau lengkung) dan **banyak pojok**.
- Persegi: 4 sisi sama panjang. Persegi panjang: 4 sisi, dua panjang dua pendek.
- Segitiga: 3 sisi, 3 pojok. Lingkaran: tanpa sisi lurus, tanpa pojok.
- 2 setengah lingkaran atau 4 seperempat lingkaran membentuk 1 lingkaran.
- Menyalin bentuk: mulai dari satu pojok, hitung kotak atau titik setiap sisi.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Bentuk apa yang punya 3 sisi lurus dan 3 pojok?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Bentuknya ...",
   "options": [
    "segitiga",
    "persegi",
    "seperempat lingkaran"
   ],
   "answer": "segitiga",
   "hint": "Seperempat lingkaran punya sisi lengkung.",
   "explain": "Segitiga selalu punya 3 sisi lurus dan 3 pojok.",
   "error": "salah-kenali-bangun"
  },
  {
   "kind": "choice",
   "prompt": "Kalau segitiga itu dibalik, namanya ...",
   "options": [
    "tetap segitiga",
    "berubah menjadi bentuk lain"
   ],
   "answer": "tetap segitiga",
   "hint": "Hitung lagi sisi dan pojoknya.",
   "explain": "Bentuk yang diputar tetap sama namanya.",
   "error": "salah-kenali-bangun"
  }
 ],
 "conclusion": "Jadi bentuknya segitiga."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Bentuk apa yang punya 4 sisi sama panjang?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa sisi yang dimiliki bentuk ini?",
   "answer": "4",
   "hint": "Baca soalnya.",
   "explain": "Bentuk ini punya 4 sisi.",
   "error": "salah-hitung-sisi"
  },
  {
   "kind": "choice",
   "prompt": "Bentuknya ...",
   "options": [
    "persegi",
    "persegi panjang",
    "segitiga"
   ],
   "answer": "persegi",
   "hint": "Semua sisinya sama panjang.",
   "explain": "Persegi panjang juga 4 sisi, tetapi tidak semuanya sama panjang.",
   "error": "tertukar-persegi-persegi-panjang"
  }
 ],
 "conclusion": "Jadi bentuknya persegi."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Berapa pojok yang dimiliki setengah lingkaran?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Setengah lingkaran punya sisi apa saja?",
   "options": [
    "1 sisi lurus dan 1 sisi lengkung",
    "1 sisi lengkung saja",
    "2 sisi lurus"
   ],
   "answer": "1 sisi lurus dan 1 sisi lengkung",
   "hint": "Lihat tepi yang dipotong.",
   "explain": "1 sisi lurus dan 1 sisi lengkung.",
   "error": "lupa-sisi-lurus-lengkung"
  },
  {
   "kind": "number",
   "prompt": "Berapa pojoknya?",
   "answer": "2",
   "hint": "Pojok ada di ujung-ujung sisi lurus.",
   "explain": "Ada 2 pojok, di dua ujung sisi lurus.",
   "error": "salah-hitung-pojok"
  }
 ],
 "conclusion": "Jadi setengah lingkaran punya 2 pojok.",
 "visual": {
  "type": "shape",
  "shape": "setengah-lingkaran"
 }
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Dua setengah lingkaran yang sama besar disusun. Bentuk apa yang terjadi?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa setengah untuk membuat satu utuh?",
   "answer": "2",
   "hint": "Setengah artinya satu dari dua bagian sama besar.",
   "explain": "2 setengah = 1 utuh.",
   "error": "salah-susun-potongan"
  },
  {
   "kind": "choice",
   "prompt": "Bentuk yang terjadi adalah ...",
   "options": [
    "lingkaran",
    "persegi",
    "seperempat lingkaran"
   ],
   "answer": "lingkaran",
   "hint": "Setengah dari apa?",
   "explain": "Dua setengah lingkaran menjadi satu lingkaran.",
   "error": "salah-susun-potongan"
  }
 ],
 "conclusion": "Jadi bentuknya lingkaran.",
 "visual": {
  "type": "fraction",
  "shape": "circle",
  "parts": 2,
  "shaded": 2
 }
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Siti memotong martabak bundar menjadi 4 potong sama besar. Bentuk apa setiap potong?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Martabak bundar bentuknya ...",
   "options": [
    "lingkaran",
    "persegi"
   ],
   "answer": "lingkaran",
   "hint": "Bundar.",
   "explain": "Martabak bundar adalah lingkaran.",
   "error": "salah-kenali-bangun"
  },
  {
   "kind": "choice",
   "prompt": "Setiap potong bentuknya ...",
   "options": [
    "seperempat lingkaran",
    "setengah lingkaran",
    "segitiga"
   ],
   "answer": "seperempat lingkaran",
   "hint": "Dipotong 4 sama besar.",
   "explain": "Lingkaran dibagi 4 sama besar menjadi seperempat lingkaran.",
   "error": "tertukar-bagian-lingkaran"
  }
 ],
 "conclusion": "Jadi setiap potong berbentuk seperempat lingkaran.",
 "visual": {
  "type": "fraction",
  "shape": "circle",
  "parts": 4,
  "shaded": 1
 }
}
```
