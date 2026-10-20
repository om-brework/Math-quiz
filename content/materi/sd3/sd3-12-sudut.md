---
id: sd3-12-sudut
judul: Sudut
jenjang: sd3
moe: "Primary 3 · Measurement and Geometry · Angles"
prasyarat: [sd1-10-bangun-datar]
durasi_menit: 30
---

## Kenapa belajar ini?

Sudut ada di mana-mana: di pojok buku, di jarum jam, di pintu yang terbuka, dan di atap rumah. Tukang bangunan memeriksa sudut supaya dinding berdiri tegak. Materi ini mengajarkan cara mengenali sudut dan membandingkannya dengan sudut siku-siku.

## Analogi

Ambil sebuah **gunting**. Gunting punya dua bilah yang bertemu di satu paku.

- Dua bilah gunting adalah **kaki sudut**.
- Paku tempat keduanya bertemu adalah **titik sudut**.
- Seberapa lebar gunting terbuka adalah **besar sudut**.

Gunting yang terbuka sedikit membuat sudut kecil:

```visual
{"type": "angle", "degrees": 30, "caption": "Gunting terbuka sedikit: sudut kecil"}
```

Gunting yang terbuka lebar membuat sudut besar:

```visual
{"type": "angle", "degrees": 120, "caption": "Gunting terbuka lebar: sudut besar"}
```

Panjang bilahnya tidak penting. Yang penting **seberapa lebar bukaannya**.

## Konsep

### Apa itu sudut?

**Sudut** terbentuk saat dua garis lurus bertemu di satu titik. Titik pertemuannya disebut **titik sudut**, dan dua garisnya disebut **kaki sudut**.

```anim
{"type": "bangun", "titik": {"O": [0, 0], "A": [6, 0], "B": [2.868, 4.096]}, "sisi": [["O", "A"], ["O", "B"]], "sudut": [{"di": "O", "dari": "A", "ke": "B"}], "langkah": [{"say": "Garis pertama: kaki sudut OA.", "sisi": 1, "sorot": ["OA"]}, {"say": "Garis kedua: kaki sudut OB.", "sisi": 2, "sorot": ["OB"]}, {"say": "Keduanya bertemu di titik O. Itulah titik sudut.", "sisi": 2, "sorot": ["O"]}, {"say": "Bukaan di antara kedua kaki adalah sudutnya.", "sisi": 2, "sudut": 1, "sorot": ["O"]}], "title": "Bagian-bagian sudut"}
```

Persegi punya 4 sudut. Segitiga punya 3 sudut. Banyak sudut bangun datar sama dengan banyak titik pojoknya.

### Sudut siku-siku

**Sudut siku-siku** adalah sudut seperti pojok buku atau pojok kertas. Satu kaki tegak lurus ke atas, kaki lainnya mendatar.

```visual
{"type": "angle", "degrees": 90, "showRightMark": true, "caption": "Sudut siku-siku diberi tanda kotak kecil"}
```

Sudut siku-siku sering diberi tanda kotak kecil di titik sudutnya.

### Alat pengukur siku dari kertas

Kamu bisa membuat alat untuk memeriksa sudut siku-siku:

1. Ambil selembar kertas bekas, bentuk apa saja.
2. Lipat kertas menjadi dua.
3. Lipat sekali lagi sehingga garis lipatan pertama bertemu dengan dirinya sendiri.
4. Pojok hasil lipatan adalah **sudut siku-siku**.

### Membandingkan dengan sudut siku-siku

Tempelkan titik sudut alat kertasmu pada titik sudut yang diperiksa. Tempelkan satu sisi alat pada satu kaki sudut. Lalu lihat kaki yang lain:

- Kalau kaki itu **tepat menempel** sisi alat: sudut siku-siku.
- Kalau kaki itu **tersembunyi di bawah** alat: sudut **lebih kecil** dari siku-siku. Gunting terbuka sedikit.
- Kalau kaki itu **berada di luar** alat: sudut **lebih besar** dari siku-siku. Gunting terbuka lebar.

```visual
{"type": "angle", "degrees": 50, "caption": "Lebih kecil dari siku-siku"}
```

```visual
{"type": "angle", "degrees": 90, "showRightMark": true, "caption": "Siku-siku"}
```

```visual
{"type": "angle", "degrees": 130, "caption": "Lebih besar dari siku-siku"}
```

### Sudut pada jarum jam

Dua jarum jam membentuk sudut, dengan titik sudut di tengah jam.

- Pukul 3.00 dan pukul 9.00: sudut **siku-siku**.
- Pukul 1.00 dan pukul 2.00: **lebih kecil** dari siku-siku.
- Pukul 4.00 dan pukul 5.00: **lebih besar** dari siku-siku.

```visual
{"type": "clock", "hour": 3, "minute": 0, "caption": "Pukul 3.00: jarum jam membentuk sudut siku-siku"}
```

Ingat: angka 12 ke angka 3 adalah seperempat putaran, yaitu satu sudut siku-siku.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menghitung sudut pada bangun

```soal
{
 "title": "Contoh 1",
 "text": "Berapa banyak sudut pada persegi panjang? Berapa yang siku-siku?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Cari titik sudut. Persegi panjang punya berapa pojok?",
   "answer": "4",
   "hint": "Pojok adalah tempat dua sisi bertemu, seperti paku gunting.",
   "explain": "Ada 4 pojok.",
   "error": "salah-hitung-pojok"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Setiap pojok adalah satu sudut. Ada berapa sudut?",
   "answer": "4",
   "hint": "Banyak sudut = banyak pojok.",
   "explain": "Ada 4 sudut.",
   "error": "salah-hitung-sudut"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Periksa setiap pojok dengan alat kertas. Hasilnya ...",
   "options": [
    "Semua siku-siku",
    "Hanya 2 yang siku-siku",
    "Tidak ada yang siku-siku"
   ],
   "answer": "Semua siku-siku",
   "hint": "Persegi panjang bentuknya seperti buku tulis.",
   "explain": "Kedua sisi alat menempel tepat di setiap pojok. Semuanya siku-siku.",
   "error": "salah-banding-siku"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: pojok benda apa yang bentuknya sama?",
   "options": [
    "Pojok buku tulis",
    "Ujung pensil yang runcing",
    "Tepi piring bundar"
   ],
   "answer": "Pojok buku tulis",
   "hint": "Cari benda yang berbentuk persegi panjang.",
   "explain": "Pojok buku adalah contoh sudut siku-siku. Cocok.",
   "error": "salah-banding-siku"
  }
 ],
 "conclusion": "Persegi panjang punya 4 sudut, semuanya siku-siku.",
 "visual": {
  "type": "shape",
  "shape": "persegi-panjang"
 }
}
```

### Contoh 2: Sudut pada jarum jam

```soal
{
 "title": "Contoh 2",
 "text": "Apakah sudut antara dua jarum jam pada pukul 2.00 siku-siku, lebih kecil, atau lebih besar dari siku-siku?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Bayangkan jarum jam. Jarum pendek menunjuk angka berapa?",
   "answer": "2",
   "hint": "Pukul 2.00 berarti jarum pendek di angka jamnya.",
   "explain": "Jarum pendek di angka 2, jarum panjang di angka 12.",
   "error": "salah-baca-jarum-pendek"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Cari patokan. Dari angka 12 ke angka berapa jarum membentuk siku-siku?",
   "answer": "3",
   "hint": "Seperempat putaran dari 12.",
   "explain": "Dari 12 ke 3 adalah siku-siku.",
   "error": "salah-banding-siku"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Angka 2 ada sebelum angka 3. Jadi sudutnya ...",
   "options": [
    "Lebih kecil dari siku-siku",
    "Siku-siku",
    "Lebih besar dari siku-siku"
   ],
   "answer": "Lebih kecil dari siku-siku",
   "hint": "Bukaannya lebih sempit atau lebih lebar dari 12 ke 3?",
   "explain": "Lebih sempit, seperti gunting yang terbuka sedikit.",
   "error": "salah-banding-siku"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: satu sisi alat kertas di jarum panjang. Jarum pendek ...",
   "options": [
    "Tersembunyi di bawah alat",
    "Tepat menempel sisi alat",
    "Berada di luar alat"
   ],
   "answer": "Tersembunyi di bawah alat",
   "hint": "Sudut lebih kecil berarti kaki kedua tertutup alat.",
   "explain": "Jarum pendek tersembunyi di bawah alat, jadi lebih kecil. Cocok.",
   "error": "salah-banding-siku"
  }
 ],
 "conclusion": "Sudutnya lebih kecil dari sudut siku-siku.",
 "visual": {
  "type": "clock",
  "hour": 2,
  "minute": 0
 }
}
```

### Contoh 3: Panjang kaki tidak menentukan besar sudut

```anim
{"type": "bangun", "titik": {"P": [0, 0], "A": [1.5, 0], "B": [-1.061, 1.061], "Q": [4, 0], "C": [10, 0], "D": [9.196, 3.0]}, "sisi": [["P", "A"], ["P", "B"], ["Q", "C"], ["Q", "D"]], "sudut": [{"di": "P", "dari": "A", "ke": "B"}, {"di": "Q", "dari": "C", "ke": "D"}], "langkah": [{"say": "Sudut P: kakinya pendek, tetapi terbuka lebar.", "sisi": 2, "sudut": 1, "sorot": ["P"]}, {"say": "Sudut Q: kakinya panjang, tetapi terbuka sempit.", "sisi": 4, "sudut": 2, "sorot": ["Q"]}, {"say": "Bandingkan bukaannya, bukan panjang kakinya.", "sisi": 4, "sudut": 2}], "title": "Sudut P dan sudut Q"}
```

```soal
{
 "title": "Contoh 3",
 "text": "Sudut P punya kaki sepanjang 2 cm dan terbuka lebar. Sudut Q punya kaki sepanjang 8 cm dan terbuka sempit. Sudut mana yang lebih besar?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Besar sudut ditentukan oleh ...",
   "options": [
    "Lebar bukaannya",
    "Panjang kakinya"
   ],
   "answer": "Lebar bukaannya",
   "hint": "Ingat gunting kecil yang terbuka lebar.",
   "explain": "Besar sudut adalah lebar bukaan, bukan panjang kaki.",
   "error": "sudut-kaki-panjang"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Sudut P dibandingkan dengan siku-siku ...",
   "options": [
    "Lebih kecil dari siku-siku",
    "Siku-siku",
    "Lebih besar dari siku-siku"
   ],
   "answer": "Lebih besar dari siku-siku",
   "hint": "Sudut P terbuka lebar.",
   "explain": "Sudut P lebih besar dari siku-siku.",
   "error": "salah-banding-siku"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Sudut Q dibandingkan dengan siku-siku ...",
   "options": [
    "Lebih kecil dari siku-siku",
    "Siku-siku",
    "Lebih besar dari siku-siku"
   ],
   "answer": "Lebih kecil dari siku-siku",
   "hint": "Sudut Q terbuka sempit.",
   "explain": "Sudut Q lebih kecil dari siku-siku.",
   "error": "salah-banding-siku"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Jadi sudut mana yang lebih besar?",
   "options": [
    "Sudut P",
    "Sudut Q",
    "Sama besar"
   ],
   "answer": "Sudut P",
   "hint": "Bandingkan hasil Langkah 2 dan 3.",
   "explain": "Yang lebih besar dari siku-siku pasti lebih besar dari yang lebih kecil dari siku-siku.",
   "error": "sudut-kaki-panjang"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: kalau kaki sudut P diperpanjang, bukaannya ...",
   "options": [
    "Tetap sama",
    "Menjadi lebih besar",
    "Menjadi lebih kecil"
   ],
   "answer": "Tetap sama",
   "hint": "Memperpanjang kaki tidak menggerakkan kakinya.",
   "explain": "Bukaannya tetap. Panjang kaki memang tidak mengubah besar sudut.",
   "error": "sudut-kaki-panjang"
  }
 ],
 "conclusion": "Sudut P lebih besar."
}
```

### Contoh 4: Soal cerita, sudut di sekitar kita

```soal
{
 "title": "Contoh 4",
 "text": "Budi membuka pintu kamarnya sedikit, hanya selebar badan kucing. Lalu ia membuka pintu lebar-lebar sampai melewati posisi tegak lurus dengan dinding. Bandingkan sudut antara pintu dan dinding pada kedua keadaan dengan sudut siku-siku.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Di mana titik sudutnya?",
   "options": [
    "Di engsel pintu",
    "Di gagang pintu",
    "Di lantai kamar"
   ],
   "answer": "Di engsel pintu",
   "hint": "Titik sudut adalah tempat kedua kaki bertemu.",
   "explain": "Daun pintu dan dinding bertemu di engsel.",
   "error": "salah-titik-sudut"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Pintu terbuka sedikit. Sudutnya ...",
   "options": [
    "Lebih kecil dari siku-siku",
    "Siku-siku",
    "Lebih besar dari siku-siku"
   ],
   "answer": "Lebih kecil dari siku-siku",
   "hint": "Seperti gunting yang baru dibuka.",
   "explain": "Lebih kecil dari siku-siku.",
   "error": "salah-banding-siku"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Pintu terbuka melewati posisi siku-siku. Sudutnya ...",
   "options": [
    "Lebih kecil dari siku-siku",
    "Siku-siku",
    "Lebih besar dari siku-siku"
   ],
   "answer": "Lebih besar dari siku-siku",
   "hint": "Melewati berarti lebih dari siku-siku.",
   "explain": "Lebih besar dari siku-siku.",
   "error": "salah-banding-siku"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: pintu yang tegak lurus dengan dinding membentuk ...",
   "options": [
    "Lebih kecil dari siku-siku",
    "Siku-siku",
    "Lebih besar dari siku-siku"
   ],
   "answer": "Siku-siku",
   "hint": "Ingat pojok buku.",
   "explain": "Siku-siku. Bukaan pertama kurang dari itu, bukaan kedua lebih. Cocok.",
   "error": "salah-banding-siku"
  }
 ],
 "conclusion": "Pertama lebih kecil dari siku-siku, kedua lebih besar dari siku-siku."
}
```

## Kesalahan yang sering terjadi

- **Mengira kaki panjang berarti sudut besar.** Pada contoh 3, memilih sudut Q karena kakinya panjang. Besar sudut ditentukan oleh lebar bukaan, bukan panjang kaki.
- **Menganggap semua pojok siku-siku.** Pojok segitiga sering tidak siku-siku. Selalu periksa dengan alat kertas.
- **Salah menaruh alat kertas.** Pojok alat tidak ditempel tepat di titik sudut, sehingga hasilnya keliru. Titik sudut alat harus menempel di titik sudut yang diperiksa, dan satu sisi alat harus lurus di atas satu kaki sudut.
- **Bingung saat sudut diputar.** Sudut yang posisinya diputar, misalnya kaki-kakinya miring, tetap bisa siku-siku. Putar alat kertasmu, jangan hanya mencari kaki yang mendatar.

## Ringkasan

- Sudut terbentuk dari dua kaki yang bertemu di titik sudut, seperti bilah gunting dan pakunya.
- Besar sudut = lebar bukaan. Panjang kaki tidak berpengaruh.
- Sudut siku-siku seperti pojok buku. Pada jam, pukul 3.00 dan 9.00 membentuk siku-siku.
- Pakai alat kertas yang dilipat dua kali untuk memeriksa: sama, lebih kecil, atau lebih besar dari siku-siku.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Berapa banyak sudut pada bangun segi lima?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Banyak sudut bangun datar sama dengan banyak ...",
   "options": [
    "titik pojoknya",
    "warna sisinya",
    "kata pada namanya"
   ],
   "answer": "titik pojoknya",
   "hint": "Sudut ada di setiap pojok.",
   "explain": "Banyak sudut = banyak titik pojok.",
   "error": "salah-hitung-sudut"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Segi lima punya berapa sudut?",
   "answer": "5",
   "hint": "Segi lima punya 5 sisi dan 5 pojok.",
   "explain": "5 sudut.",
   "error": "salah-hitung-sudut"
  }
 ],
 "conclusion": "Segi lima punya 5 sudut."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Pukul 9.00, apakah sudut antara dua jarum jam siku-siku, lebih kecil, atau lebih besar dari siku-siku?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Dari angka 9 ke angka 12 ada berapa loncatan angka?",
   "answer": "3",
   "hint": "Hitung: 10, 11, 12.",
   "explain": "3 loncatan, sama seperti dari 12 ke 3.",
   "error": "salah-hitung-loncat"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Jadi sudutnya ...",
   "options": [
    "Lebih kecil dari siku-siku",
    "Siku-siku",
    "Lebih besar dari siku-siku"
   ],
   "answer": "Siku-siku",
   "hint": "Seperempat putaran.",
   "explain": "Siku-siku.",
   "error": "salah-banding-siku"
  }
 ],
 "conclusion": "Pukul 9.00 membentuk sudut siku-siku.",
 "visual": {
  "type": "clock",
  "hour": 9,
  "minute": 0
 }
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Bagaimana dengan pukul 1.00?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Dari angka 12 ke angka 1 ada berapa loncatan angka?",
   "answer": "1",
   "hint": "Hitung dari 12 ke angka berikutnya.",
   "explain": "1 loncatan, kurang dari 3.",
   "error": "salah-hitung-loncat"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Jadi sudutnya ...",
   "options": [
    "Lebih kecil dari siku-siku",
    "Siku-siku",
    "Lebih besar dari siku-siku"
   ],
   "answer": "Lebih kecil dari siku-siku",
   "hint": "Siku-siku butuh 3 loncatan.",
   "explain": "Lebih kecil dari siku-siku.",
   "error": "salah-banding-siku"
  }
 ],
 "conclusion": "Pukul 1.00 membentuk sudut lebih kecil dari siku-siku.",
 "visual": {
  "type": "clock",
  "hour": 1,
  "minute": 0
 }
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Bagaimana dengan pukul 8.00? (Lihat sudut yang lebih kecil di antara dua jarum.)",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Dari angka 8 ke angka 12 ada berapa loncatan angka?",
   "answer": "4",
   "hint": "Hitung: 9, 10, 11, 12.",
   "explain": "4 loncatan.",
   "error": "salah-hitung-loncat"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Siku-siku hanya 3 loncatan. Jadi sudutnya ...",
   "options": [
    "Lebih kecil dari siku-siku",
    "Siku-siku",
    "Lebih besar dari siku-siku"
   ],
   "answer": "Lebih besar dari siku-siku",
   "hint": "4 lebih banyak dari 3.",
   "explain": "Lebih besar dari siku-siku.",
   "error": "salah-banding-siku"
  }
 ],
 "conclusion": "Pukul 8.00 membentuk sudut lebih besar dari siku-siku.",
 "visual": {
  "type": "clock",
  "hour": 8,
  "minute": 0
 }
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Sebutkan dua benda di kelasmu yang punya sudut siku-siku.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Benda mana yang punya sudut siku-siku?",
   "options": [
    "Pojok papan tulis",
    "Ujung pensil yang runcing",
    "Tepi jam dinding bundar"
   ],
   "answer": "Pojok papan tulis",
   "hint": "Cari pojok yang pas dengan alat kertas.",
   "explain": "Pojok papan tulis pas dengan alat kertas.",
   "error": "salah-banding-siku"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Benda mana lagi?",
   "options": [
    "Pojok meja",
    "Ujung atap rumah yang lancip",
    "Bola"
   ],
   "answer": "Pojok meja",
   "hint": "Pojok yang lancip lebih kecil dari siku-siku. Bola tidak punya pojok.",
   "explain": "Pojok meja juga siku-siku. Pojok buku dan jendela juga boleh.",
   "error": "salah-banding-siku"
  }
 ],
 "conclusion": "Contoh: pojok papan tulis dan pojok meja. Pojok buku dan jendela juga boleh."
}
```
