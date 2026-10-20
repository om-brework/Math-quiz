---
id: smp3-03-pertidaksamaan-simultan
judul: Pertidaksamaan Linear Simultan
jenjang: smp3
moe: "Secondary 3 · Number and Algebra · N7 Equations and inequalities"
prasyarat: [smp2-05-pertidaksamaan-linear]
durasi_menit: 45
---

## Kenapa belajar ini?

Sering kali sebuah jawaban harus memenuhi **dua syarat sekaligus**. Jumlah kursi harus cukup untuk semua tamu, tetapi biayanya tidak boleh melebihi anggaran. Nilai rapor harus di atas batas lulus, tetapi di bawah batas tertentu untuk masuk kelompok belajar tertentu. Pertidaksamaan simultan mencari semua nilai yang lolos kedua syarat.

## Analogi

Bayangkan sebuah **wahana di taman bermain** yang dijaga **dua petugas** di dua pintu berurutan.

- Petugas pintu pertama hanya meloloskan pengunjung yang tingginya **lebih dari 120 cm**.
- Petugas pintu kedua hanya meloloskan pengunjung yang tingginya **paling tinggi 190 cm**.

Yang boleh naik wahana adalah pengunjung yang lolos **kedua pintu**. Tinggi 110 cm tertahan di pintu pertama. Tinggi 195 cm lolos pintu pertama tetapi tertahan di pintu kedua. Yang naik hanya mereka dengan $120 < t \le 190$.

Pada garis bilangan, setiap pintu meloloskan satu daerah. Daerah yang lolos kedua pintu adalah **bagian yang tumpang tindih**, disebut **irisan**.

```anim
{"type": "grafik", "title": "Dua pintu wahana", "xmin": 90, "xmax": 220, "ymin": -0.8, "ymax": 2.8, "kurva": [{"f": "2", "label": "t > 120 \\text{ (pintu 1)}", "dari": 120, "sampai": 220}, {"f": "1", "label": "t \\le 190 \\text{ (pintu 2)}", "dari": 90, "sampai": 190}, {"f": "0", "label": "120 < t \\le 190 \\text{ (irisan)}", "dari": 120, "sampai": 190, "warna": "#22c55e"}], "titik": [{"x": 120, "y": 2, "label": "120 tidak ikut"}, {"x": 190, "y": 1, "label": "190 ikut"}, {"x": 120, "y": 0, "label": "120"}, {"x": 190, "y": 0, "label": "190"}], "langkah": [{"say": "Pintu 1 meloloskan tinggi lebih dari 120 cm (garis atas).", "kurva": 1, "titik": 0}, {"say": "Pintu 2 meloloskan tinggi paling tinggi 190 cm (garis tengah).", "kurva": 2, "titik": 0}, {"say": "Yang naik wahana hanya bagian yang tertutup keduanya: irisan $120 < t \\le 190$ (garis hijau di sumbu).", "kurva": 3, "titik": 4}]}
```

## Konsep

### Dua pertidaksamaan sekaligus

**Pertidaksamaan linear simultan** adalah dua (atau lebih) pertidaksamaan linear dengan variabel yang sama, yang harus dipenuhi **bersamaan**. Contoh:

$$x + 3 > 5 \quad\text{dan}\quad 2x - 1 \le 9$$

Penyelesaiannya adalah semua $x$ yang memenuhi **keduanya**, yaitu irisan dari dua daerah penyelesaian.

### Cara menyelesaikan

1. **Selesaikan setiap pertidaksamaan sendiri-sendiri** (seperti pada materi pertidaksamaan linear; ingat membalik tanda jika mengali atau membagi dengan bilangan negatif).
2. **Gambar kedua penyelesaian** pada satu garis bilangan, satu di atas yang lain.
3. **Ambil irisannya**: bagian garis bilangan yang tertutup oleh kedua daerah.
4. **Tulis jawaban** dalam bentuk ringkas, misalnya $2 < x \le 5$.

### Bentuk bersambung $a < bx + c \le d$

Pertidaksamaan seperti $-3 \le 2x + 1 < 9$ sebenarnya dua pertidaksamaan yang ditulis bersambung:

$$-3 \le 2x + 1 \quad\text{dan}\quad 2x + 1 < 9$$

Jika variabel **hanya ada di bagian tengah**, kita boleh mengolah ketiga bagian sekaligus: kurangi, tambah, kali, atau bagi ketiga bagian dengan bilangan yang sama. Jika membagi dengan bilangan negatif, **kedua** tanda dibalik.

Jika variabel ada di **lebih dari satu bagian**, misalnya $2x - 5 < x + 1 \le 3x + 7$, kita **wajib memecahnya** menjadi dua pertidaksamaan dulu.

### Kemungkinan hasil irisan

Garis atas dan tengah adalah daerah tiap pintu; garis hijau di sumbu adalah irisannya.

```anim
{"type": "grafik", "title": "Kasus 1: daerah bertumpang tindih", "xmin": -2, "xmax": 8, "ymin": -0.8, "ymax": 2.8, "kurva": [{"f": "2", "label": "x > 2", "dari": 2, "sampai": 8}, {"f": "1", "label": "x \\le 5", "dari": -2, "sampai": 5}, {"f": "0", "label": "2 < x \\le 5", "dari": 2, "sampai": 5, "warna": "#22c55e"}], "titik": [{"x": 2, "y": 0, "label": "2 (kosong)"}, {"x": 5, "y": 0, "label": "5 (penuh)"}], "langkah": [{"say": "Daerah $x > 2$: mulai dari 2 (tidak termasuk) ke kanan.", "kurva": 1, "titik": 0}, {"say": "Daerah $x \\le 5$: dari 5 (termasuk) ke kiri.", "kurva": 2, "titik": 0}, {"say": "Bagian yang tertutup keduanya berupa selang: $2 < x \\le 5$.", "kurva": 3, "titik": 2}]}
```

```anim
{"type": "grafik", "title": "Kasus 2: searah, pilih yang lebih ketat", "xmin": 0, "xmax": 9, "ymin": -0.8, "ymax": 2.8, "kurva": [{"f": "2", "label": "x \\ge 3", "dari": 3, "sampai": 9}, {"f": "1", "label": "x \\ge 5", "dari": 5, "sampai": 9}, {"f": "0", "label": "x \\ge 5", "dari": 5, "sampai": 9, "warna": "#22c55e"}], "titik": [{"x": 5, "y": 0, "label": "5"}], "langkah": [{"say": "Daerah $x \\ge 3$ ke kanan.", "kurva": 1, "titik": 0}, {"say": "Daerah $x \\ge 5$ juga ke kanan.", "kurva": 2, "titik": 0}, {"say": "Bilangan yang lolos $x \\ge 5$ pasti lolos $x \\ge 3$. Irisannya $x \\ge 5$.", "kurva": 3, "titik": 1}]}
```

```anim
{"type": "grafik", "title": "Kasus 3: tidak bertemu", "xmin": -3, "xmax": 8, "ymin": -0.8, "ymax": 2.8, "kurva": [{"f": "2", "label": "x < 1", "dari": -3, "sampai": 1}, {"f": "1", "label": "x > 4", "dari": 4, "sampai": 8}], "titik": [{"x": 1, "y": 2, "label": "1"}, {"x": 4, "y": 1, "label": "4"}], "langkah": [{"say": "Daerah $x < 1$ ke kiri.", "kurva": 1, "titik": 0}, {"say": "Daerah $x > 4$ ke kanan.", "kurva": 2, "titik": 0}, {"say": "Tidak ada bagian yang tertutup keduanya. Irisannya kosong: tidak ada penyelesaian.", "kurva": 2, "titik": 2}]}
```

### Bilangan bulat yang memenuhi

Banyak soal meminta **bilangan bulat** yang memenuhi. Setelah mendapat selang, daftar bilangan bulat di dalamnya dengan memperhatikan ujungnya:

- Pada $2 < x \le 5$, angka 2 **tidak** termasuk (bulatan kosong), angka 5 **termasuk** (bulatan penuh). Bilangan bulatnya 3, 4, 5.
- Pada $-2 \le x < 4$, bilangan bulatnya $-2, -1, 0, 1, 2, 3$.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Dua pertidaksamaan terpisah

```soal
{
 "title": "Contoh 1",
 "text": "Selesaikan $x + 3 > 5$ dan $2x - 1 \\le 9$. Sebutkan bilangan bulat yang memenuhi.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pintu pertama. $x + 3 > 5$ menjadi ...",
   "options": [
    "$x > 2$",
    "$x > 8$",
    "$x < 2$"
   ],
   "answer": "$x > 2$",
   "hint": "Kurangi kedua ruas dengan 3.",
   "explain": "$x > 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Pintu kedua. $2x \\le 10$, jadi $x \\le$ ?",
   "answer": "5",
   "hint": "Tambah 1 dulu, lalu bagi 2.",
   "explain": "$x \\le 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Ambil irisan.",
   "options": [
    "$2 < x \\le 5$",
    "$2 \\le x \\le 5$",
    "semua bilangan",
    "$x > 5$"
   ],
   "answer": "$2 < x \\le 5$",
   "hint": "Bagian yang tertutup keduanya, perhatikan ujung mana yang termasuk.",
   "explain": "Dari 2 (tidak termasuk) sampai 5 (termasuk).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Bilangan bulat yang memenuhi?",
   "options": [
    "3, 4, 5",
    "2, 3, 4, 5",
    "3, 4",
    "2, 3, 4"
   ],
   "answer": "3, 4, 5",
   "hint": "2 bertanda $<$, 5 bertanda $\\le$.",
   "explain": "2 tidak termasuk, 5 termasuk: 3, 4, 5.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: substitusi $x = 2$ ke $x + 3 > 5$. Benar atau salah?",
   "options": [
    "Salah, karena 5 > 5 tidak benar",
    "Benar, karena 5 = 5"
   ],
   "answer": "Salah, karena 5 > 5 tidak benar",
   "hint": "$2 + 3 = 5$. Apakah $5 > 5$?",
   "explain": "2 tertahan di pintu pertama, jadi memang tidak termasuk.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $2 < x \\le 5$; bilangan bulatnya 3, 4, 5.",
 "visual": {
  "type": "numberLine",
  "from": 0,
  "to": 7,
  "marks": [
   2,
   5
  ]
 }
}
```

### Contoh 2: Bentuk bersambung

```soal
{
 "title": "Contoh 2",
 "text": "Selesaikan $-3 \\le 2x + 1 < 9$ dan sebutkan bilangan bulat yang memenuhi.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Periksa letak variabel. Bolehkah ketiga bagian diolah sekaligus?",
   "options": [
    "Boleh, $x$ hanya di bagian tengah",
    "Tidak boleh, harus dipecah"
   ],
   "answer": "Boleh, $x$ hanya di bagian tengah",
   "hint": "Lihat bagian kiri dan kanan: adakah $x$?",
   "explain": "Ujung-ujungnya hanya angka, jadi boleh diolah sekaligus.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Kurangi ketiga bagian dengan 1.",
   "options": [
    "$-4 \\le 2x < 8$",
    "$-3 \\le 2x < 8$",
    "$-2 \\le 2x < 10$"
   ],
   "answer": "$-4 \\le 2x < 8$",
   "hint": "Kurangi 1 dari −3, dari $2x + 1$, dan dari 9.",
   "explain": "$-3 - 1 = -4$ dan $9 - 1 = 8$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Bagi ketiga bagian dengan 2.",
   "options": [
    "$-2 \\le x < 4$",
    "$-2 \\ge x > 4$",
    "$-8 \\le x < 16$"
   ],
   "answer": "$-2 \\le x < 4$",
   "hint": "2 positif, jadi tanda tetap.",
   "explain": "$-2 \\le x < 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Ada berapa bilangan bulat yang memenuhi?",
   "answer": "6",
   "hint": "−2 termasuk, 4 tidak termasuk. Daftar dari −2.",
   "explain": "−2, −1, 0, 1, 2, 3: ada 6.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung $2(4) + 1$.",
   "answer": "9",
   "hint": "Substitusi $x = 4$.",
   "explain": "$9 < 9$ salah, jadi 4 memang tidak termasuk. Cocok dengan ujungnya.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $-2 \\le x < 4$; bilangan bulatnya −2, −1, 0, 1, 2, 3."
}
```

### Contoh 3: Variabel di tiga bagian, dengan pembalikan tanda

```soal
{
 "title": "Contoh 3",
 "text": "Selesaikan $2x - 5 < x + 1 \\le 3x + 7$. Tentukan banyak bilangan bulat yang memenuhi, dan sebutkan bilangan prima yang memenuhi.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: $x$ ada di ketiga bagian. Pecah menjadi dua pintu.",
   "options": [
    "$2x - 5 < x + 1$ dan $x + 1 \\le 3x + 7$",
    "$2x - 5 < 3x + 7$ saja",
    "$2x - 5 < x + 1$ saja"
   ],
   "answer": "$2x - 5 < x + 1$ dan $x + 1 \\le 3x + 7$",
   "hint": "Bagian tengah dibandingkan dengan kiri, lalu dengan kanan.",
   "explain": "Dua pintu: kiri–tengah dan tengah–kanan.",
   "error": "salah-urutan-langkah"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Pintu pertama. $2x - x < 1 + 5$, jadi $x <$ ?",
   "answer": "6",
   "hint": "Kumpulkan $x$ di kiri, angka di kanan.",
   "explain": "$x < 6$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Pintu kedua. $-2x \\le 6$ menjadi ...",
   "options": [
    "$x \\ge -3$",
    "$x \\le -3$",
    "$x \\ge 3$"
   ],
   "answer": "$x \\ge -3$",
   "hint": "Membagi dengan bilangan negatif membalik tanda.",
   "explain": "Bagi dengan −2 dan balik tanda: $x \\ge -3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Irisan?",
   "options": [
    "$-3 \\le x < 6$",
    "$-3 < x \\le 6$",
    "$x < -3$ atau $x > 6$"
   ],
   "answer": "$-3 \\le x < 6$",
   "hint": "Gabungkan $x \\ge -3$ dan $x < 6$.",
   "explain": "$-3 \\le x < 6$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Ada berapa bilangan bulat yang memenuhi?",
   "answer": "9",
   "hint": "Daftar dari −3 sampai 5.",
   "explain": "−3, −2, −1, 0, 1, 2, 3, 4, 5: ada 9.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 6: Bilangan prima yang memenuhi?",
   "options": [
    "2, 3, 5",
    "1, 2, 3, 5",
    "3, 5",
    "2, 3, 5, 6"
   ],
   "answer": "2, 3, 5",
   "hint": "Bilangan prima punya tepat dua faktor; 1 bukan prima.",
   "explain": "Di antara −3 sampai 5, bilangan primanya 2, 3, 5.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: untuk $x = 6$, berapa $2x - 5$?",
   "answer": "7",
   "hint": "Substitusi $x = 6$.",
   "explain": "$x + 1 = 7$ juga, dan $7 < 7$ salah. Jadi 6 tidak termasuk.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $-3 \\le x < 6$; ada 9 bilangan bulat; bilangan primanya 2, 3, 5."
}
```

### Contoh 4: Irisan kosong dan irisan searah

```soal
{
 "title": "Contoh 4",
 "text": "Selesaikan (a) $3x + 2 < 5$ dan $x - 1 > 3$; (b) $x + 4 \\ge 7$ dan $2x \\ge 10$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: (a) $3x < 3$, jadi $x <$ ?",
   "answer": "1",
   "hint": "Kurangi 2, lalu bagi 3.",
   "explain": "$x < 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: (a) $x - 1 > 3$, jadi $x >$ ?",
   "answer": "4",
   "hint": "Tambah 1 ke kedua ruas.",
   "explain": "$x > 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Irisan (a)?",
   "options": [
    "Tidak ada penyelesaian",
    "$1 < x < 4$",
    "$4 < x < 1$",
    "Semua bilangan"
   ],
   "answer": "Tidak ada penyelesaian",
   "hint": "Adakah bilangan yang kurang dari 1 sekaligus lebih dari 4?",
   "explain": "Kedua daerah tidak bertemu, jadi irisannya kosong.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: (b) Pintunya $x \\ge 3$ dan $x \\ge 5$. Irisannya?",
   "options": [
    "$x \\ge 5$",
    "$x \\ge 3$",
    "$3 \\le x \\le 5$"
   ],
   "answer": "$x \\ge 5$",
   "hint": "Keduanya menunjuk ke kanan. Pilih yang lebih ketat.",
   "explain": "Bilangan yang memenuhi $x \\ge 5$ pasti memenuhi $x \\ge 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban (b): untuk $x = 4$, berapa $2x$?",
   "answer": "8",
   "hint": "Substitusi $x = 4$.",
   "explain": "$8 \\ge 10$ salah, jadi 4 memang tidak termasuk. $x \\ge 5$ benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi (a) tidak ada penyelesaian; (b) $x \\ge 5$."
}
```

### Contoh 5: Soal cerita

```soal
{
 "title": "Contoh 5",
 "text": "Panitia acara 17 Agustus di kampung menyewa kursi plastik Rp8.000 per kursi, ditambah biaya antar Rp30.000. Anggarannya paling banyak Rp250.000. Kursi harus cukup untuk paling sedikit 22 tamu. Berapa banyak kursi yang boleh disewa? Berapa paling banyak?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Misalkan $n$ = banyak kursi. Pintu pertama (anggaran)?",
   "options": [
    "$8.000n + 30.000 \\le 250.000$",
    "$8.000n + 30.000 \\ge 250.000$",
    "$8.000n \\le 250.000$"
   ],
   "answer": "$8.000n + 30.000 \\le 250.000$",
   "hint": "Biaya total = harga kursi + biaya antar, tidak boleh melebihi anggaran.",
   "explain": "Biaya total paling banyak Rp250.000.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kurangi 30.000 dari kedua ruas. $8.000n \\le$ ?",
   "answer": "220.000",
   "hint": "250.000 − 30.000.",
   "explain": "$8.000n \\le 220.000$.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Bagi dengan 8.000. $n \\le$ ?",
   "answer": "27,5",
   "hint": "220.000 ÷ 8.000 = 220 ÷ 8.",
   "explain": "$n \\le 27{,}5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Pintu kedua (tamu)?",
   "options": [
    "$n \\ge 22$",
    "$n \\le 22$",
    "$n > 22$"
   ],
   "answer": "$n \\ge 22$",
   "hint": "Paling sedikit 22 berarti 22 atau lebih.",
   "explain": "$n \\ge 22$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: $n$ bilangan bulat. Paling banyak berapa kursi?",
   "answer": "27",
   "hint": "$n$ tidak boleh lebih dari 27,5.",
   "explain": "Bilangan bulat terbesar yang $\\le 27{,}5$ adalah 27.",
   "error": "salah-langkah-materi",
   "suffix": "kursi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: biaya 27 kursi = $27 \\times 8.000 + 30.000$ = ?",
   "answer": "246.000",
   "hint": "216.000 + 30.000.",
   "explain": "Rp246.000 masih di bawah Rp250.000. Kursi ke-28 membuatnya Rp254.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Panitia boleh menyewa 22 sampai 27 kursi; paling banyak 27 kursi."
}
```

## Kesalahan yang sering terjadi

- **Mengambil gabungan, bukan irisan.** Pada $x > 2$ dan $x \le 5$, menjawab "semua bilangan" karena setiap bilangan lolos salah satu pintu. Kata "dan" berarti harus lolos **kedua** pintu.
- **Mengolah tiga bagian sekaligus padahal variabel ada di beberapa bagian.** Pada $2x - 5 < x + 1 \le 3x + 7$, mengurangi $x$ dari semua bagian tidak menghilangkan $x$ dari ujung-ujungnya. Pecah menjadi dua pertidaksamaan.
- **Membalik hanya satu tanda.** Dari $-8 < -2x \le 4$, menulis $4 > x \le -2$. Membagi dengan $-2$ membalik **kedua** tanda: $4 > x \ge -2$, yaitu $-2 \le x < 4$.
- **Salah memasukkan ujung saat mendaftar bilangan bulat.** Pada $2 < x \le 5$, menulis 2, 3, 4, 5. Angka 2 bertanda $<$, jadi tidak termasuk.
- **Menulis selang yang mustahil.** Pada soal tanpa irisan, menulis $4 < x < 1$. Tidak ada bilangan yang lebih dari 4 sekaligus kurang dari 1. Tulis "tidak ada penyelesaian".

## Ringkasan

- Pertidaksamaan simultan: semua syarat harus dipenuhi bersamaan, jadi penyelesaiannya adalah **irisan**.
- Selesaikan tiap pertidaksamaan, gambar pada satu garis bilangan, ambil bagian yang tertutup keduanya.
- Bentuk $a < bx + c \le d$ boleh diolah sekaligus jika variabel hanya di tengah; kalau tidak, pecah menjadi dua.
- Membagi dengan bilangan negatif membalik **semua** tanda.
- Irisan bisa berupa selang, satu arah (pilih yang lebih ketat), atau kosong.
- Saat mendaftar bilangan bulat, periksa apakah ujung termasuk ($\le, \ge$) atau tidak ($<, >$).

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Selesaikan $x - 2 \\ge 1$ dan $3x < 21$, lalu sebutkan bilangan bulat yang memenuhi.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Pintu pertama: $x \\ge$ ?",
   "answer": "3",
   "hint": "Tambah 2 ke kedua ruas.",
   "explain": "$x \\ge 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Pintu kedua: $x <$ ?",
   "answer": "7",
   "hint": "Bagi kedua ruas dengan 3.",
   "explain": "$x < 7$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Irisan dan bilangan bulatnya?",
   "options": [
    "$3 \\le x < 7$; 3, 4, 5, 6",
    "$3 \\le x < 7$; 3, 4, 5, 6, 7",
    "$3 < x < 7$; 4, 5, 6"
   ],
   "answer": "$3 \\le x < 7$; 3, 4, 5, 6",
   "hint": "3 termasuk ($\\ge$), 7 tidak ($<$).",
   "explain": "$3 \\le x < 7$; bilangan bulatnya 3, 4, 5, 6.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $3 \\le x < 7$; bilangan bulat 3, 4, 5, 6."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Selesaikan $1 < 2x + 3 \\le 11$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Kurangi ketiga bagian dengan 3.",
   "options": [
    "$-2 < 2x \\le 8$",
    "$-2 < 2x \\le 11$",
    "$4 < 2x \\le 14$"
   ],
   "answer": "$-2 < 2x \\le 8$",
   "hint": "Ketiga bagian dikurangi 3.",
   "explain": "$1 - 3 = -2$ dan $11 - 3 = 8$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Bagi ketiga bagian dengan 2.",
   "options": [
    "$-1 < x \\le 4$",
    "$-1 > x \\ge 4$",
    "$-4 < x \\le 16$"
   ],
   "answer": "$-1 < x \\le 4$",
   "hint": "2 positif, tanda tetap.",
   "explain": "$-1 < x \\le 4$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $-1 < x \\le 4$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Selesaikan $3x - 1 \\le x + 7 < 4x + 1$, lalu sebutkan bilangan bulat yang memenuhi.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Pintu pertama $3x - 1 \\le x + 7$ memberi $2x \\le 8$, jadi $x \\le$ ?",
   "answer": "4",
   "hint": "Bagi dengan 2.",
   "explain": "$x \\le 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Pintu kedua $x + 7 < 4x + 1$ memberi $6 < 3x$, jadi $x >$ ?",
   "answer": "2",
   "hint": "Bagi dengan 3.",
   "explain": "$x > 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Irisan dan bilangan bulatnya?",
   "options": [
    "$2 < x \\le 4$; 3 dan 4",
    "$2 \\le x \\le 4$; 2, 3, 4",
    "$2 < x < 4$; 3"
   ],
   "answer": "$2 < x \\le 4$; 3 dan 4",
   "hint": "2 tidak termasuk, 4 termasuk.",
   "explain": "$2 < x \\le 4$; bilangan bulat 3 dan 4.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $2 < x \\le 4$; bilangan bulat 3 dan 4."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Selesaikan $4 - x > 1$ dan $2x + 5 \\ge 13$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Pintu pertama: $4 - x > 1$ menjadi ...",
   "options": [
    "$x < 3$",
    "$x > 3$",
    "$x < -3$"
   ],
   "answer": "$x < 3$",
   "hint": "$-x > -3$, lalu kalikan −1 dan balik tanda.",
   "explain": "$x < 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Pintu kedua: $2x \\ge 8$, jadi $x \\ge$ ?",
   "answer": "4",
   "hint": "Kurangi 5, lalu bagi 2.",
   "explain": "$x \\ge 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Irisannya?",
   "options": [
    "Tidak ada penyelesaian",
    "$3 < x \\le 4$",
    "$4 \\le x < 3$"
   ],
   "answer": "Tidak ada penyelesaian",
   "hint": "Adakah bilangan yang kurang dari 3 sekaligus paling sedikit 4?",
   "explain": "Kedua daerah tidak bertemu.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Tidak ada penyelesaian."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Tentukan bilangan bulat terkecil dan terbesar yang memenuhi $-7 < 1 - 2x \\le 5$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Kurangi ketiga bagian dengan 1.",
   "options": [
    "$-8 < -2x \\le 4$",
    "$-6 < -2x \\le 6$",
    "$-8 < 2x \\le 4$"
   ],
   "answer": "$-8 < -2x \\le 4$",
   "hint": "Kurangi 1 dari −7, dari $1 - 2x$, dan dari 5.",
   "explain": "$-8 < -2x \\le 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Bagi ketiga bagian dengan −2.",
   "options": [
    "$4 > x \\ge -2$",
    "$4 < x \\le -2$",
    "$4 > x \\le -2$"
   ],
   "answer": "$4 > x \\ge -2$",
   "hint": "Membagi dengan bilangan negatif membalik kedua tanda.",
   "explain": "$4 > x \\ge -2$, yaitu $-2 \\le x < 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Bilangan bulat terkecil?",
   "answer": "-2",
   "hint": "−2 termasuk ($\\ge$).",
   "explain": "Terkecil −2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Bilangan bulat terbesar?",
   "answer": "3",
   "hint": "4 tidak termasuk ($<$).",
   "explain": "Terbesar 3.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Terkecil −2 dan terbesar 3."
}
```
