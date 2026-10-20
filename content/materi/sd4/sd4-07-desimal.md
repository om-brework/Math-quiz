---
id: sd4-07-desimal
judul: Bilangan Desimal
jenjang: sd4
moe: "Primary 4 · Number and Algebra · Decimals"
prasyarat: [sd3-06-pecahan-senilai, sd4-04-pecahan-campuran, sd4-01-bilangan-sampai-100000]
durasi_menit: 40
---

## Kenapa belajar ini?

Tinggi badanmu 1,35 m. Waktu lari temanmu 14,38 detik. Berat gula 0,75 kg. Bilangan desimal ada di mana-mana untuk mengukur sesuatu yang tidak pas bilangan bulat.

## Analogi

Bayangkan sebuah **meteran sepanjang 1 meter**.

- Potong meteran menjadi **10 bagian** sama panjang. Setiap bagian panjangnya 10 cm, yaitu **0,1 m** (satu persepuluh meter).

```visual
{"type": "numberLine", "from": 0, "to": 1, "step": 0.1, "marks": [0.3], "caption": "1 meter dipotong 10: setiap bagian 0,1 m. Titik 0,3 m = 30 cm"}
```

- Potong setiap bagian itu menjadi 10 lagi. Sekarang ada **100 bagian** kecil. Setiap bagian 1 cm, yaitu **0,01 m** (satu perseratus meter).

```visual
{"type": "numberLine", "from": 0.3, "to": 0.4, "step": 0.01, "marks": [0.37], "caption": "Perbesar antara 0,3 dan 0,4: setiap bagian 0,01 m = 1 cm. Titik 0,37 m = 37 cm"}
```

- Potong lagi setiap 1 cm menjadi 10. Sekarang ada **1.000 bagian**. Setiap bagian 1 mm, yaitu **0,001 m** (satu perseribu meter).

Angka di belakang koma memberi tahu berapa potongan dari setiap ukuran yang kamu punya.

## Konsep

### Nilai tempat desimal

**Koma** memisahkan bagian bulat dan bagian pecahan. Setiap tempat ke kanan nilainya 10 kali lebih kecil.

```visual
{"type": "table", "head": ["Tempat", "Satuan", "Persepuluhan", "Perseratusan", "Perseribuan"], "rows": [["Angka", "3", "4", "7", "2"], ["Nilai", "3", "0,4", "0,07", "0,002"]], "caption": "Nilai tempat 3,472"}
```

Bilangan 3,472 dibaca "tiga koma empat tujuh dua".

$$3{,}472 = 3 + 0{,}4 + 0{,}07 + 0{,}002$$

Hubungannya dengan pecahan:

$$0{,}1 = \frac{1}{10} \qquad 0{,}01 = \frac{1}{100} \qquad 0{,}001 = \frac{1}{1.000}$$

- **1 tempat desimal**: satu angka di belakang koma, misalnya 2,5.
- **2 tempat desimal**: dua angka di belakang koma, misalnya 2,57.

### Membandingkan dan mengurutkan

1. Bandingkan bagian bulat dulu.
2. Kalau sama, bandingkan angka di belakang koma **satu per satu dari kiri**.
3. Supaya mudah, tambahkan **0 di belakang** agar banyak angka di belakang koma sama. Menambah 0 di paling belakang tidak mengubah nilai: $0{,}7 = 0{,}70 = 0{,}700$.

Dengan meteran: 0,7 m adalah 70 cm, dan 0,69 m adalah 69 cm. Jadi $0{,}7 > 0{,}69$.

```visual
{"type": "numberLine", "from": 0.6, "to": 0.75, "step": 0.01, "marks": [0.69, 0.7], "caption": "0,69 ada di kiri 0,7, jadi 0,69 < 0,7"}
```

### Desimal menjadi pecahan

Tulis angka di belakang koma sebagai pembilang. Penyebutnya 10 (1 tempat desimal) atau 100 (2 tempat desimal). Lalu sederhanakan.

$$0{,}6 = \frac{6}{10} = \frac{3}{5} \qquad 2{,}8 = 2\frac{8}{10} = 2\frac{4}{5}$$

```visual
{"type": "fraction", "shape": "bar", "parts": 10, "shaded": 6, "caption": "0,6 = 6 dari 10 bagian"}
```

### Pecahan menjadi desimal

Ubah pecahan menjadi pecahan senilai dengan penyebut 10 atau 100. Ini bisa kalau penyebutnya faktor dari 10 atau 100, seperti 2, 4, 5, 20, 25, atau 50.

$$\frac{3}{4} = \frac{75}{100} = 0{,}75 \qquad \frac{1}{2} = \frac{5}{10} = 0{,}5$$

```visual
{"type": "grid", "width": 10, "height": 10, "shade": [{"x": 0, "y": 0, "w": 10, "h": 7}, {"x": 0, "y": 7, "w": 5, "h": 1}], "showDims": false, "caption": "75 dari 100 petak = 0,75 = 3/4"}
```

### Membulatkan desimal

Aturannya sama dengan membulatkan bilangan bulat. Lihat **satu angka di kanan** tempat tujuan. 0–4 tetap, 5–9 naik 1. Angka di kanannya dibuang.

- Ke **bilangan bulat terdekat**: lihat angka persepuluhan.
- Ke **1 tempat desimal**: lihat angka perseratusan.
- Ke **2 tempat desimal**: lihat angka perseribuan.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Nilai tempat

```soal
{
 "title": "Contoh 1",
 "text": "Tuliskan nilai setiap angka pada 3,472.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Angka 3 ada di kiri koma. Berapa nilainya?",
   "answer": "3",
   "hint": "Kiri koma adalah satuan.",
   "explain": "3 satuan = 3.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Angka 4 di persepuluhan. Berapa nilainya?",
   "answer": "0,4",
   "hint": "Seperti 4 potongan 10 cm.",
   "explain": "4 persepuluhan = 0,4.",
   "error": "salah-nilai-angka"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Angka 7 di perseratusan. Berapa nilainya?",
   "answer": "0,07",
   "hint": "Seperti 7 potongan 1 cm. Ada 2 angka di belakang koma.",
   "explain": "7 perseratusan = 0,07.",
   "error": "salah-nilai-angka"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Angka 2 di perseribuan. Berapa nilainya?",
   "answer": "0,002",
   "hint": "Ada 3 angka di belakang koma.",
   "explain": "2 perseribuan = 0,002.",
   "error": "salah-nilai-angka"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 3 + 0,4 + 0,07 + 0,002 = ?",
   "answer": "3,472",
   "hint": "Tulis setiap angka di tempatnya.",
   "explain": "Jumlahnya 3,472. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "3 bernilai 3, 4 bernilai 0,4, 7 bernilai 0,07, dan 2 bernilai 0,002."
}
```

### Contoh 2: Mengurutkan desimal

```soal
{
 "title": "Contoh 2",
 "text": "Urutkan dari yang terkecil: 0,7; 0,07; 0,075; 0,69.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Samakan menjadi 3 tempat desimal. 0,7 menjadi ...",
   "options": [
    "0,700",
    "0,007",
    "0,070"
   ],
   "answer": "0,700",
   "hint": "Tambahkan 0 di paling belakang.",
   "explain": "0,7 = 0,700. Begitu juga 0,070; 0,075; 0,690.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Bandingkan persepuluhan (7, 0, 0, 6). Mana dua yang paling kecil?",
   "options": [
    "0,070 dan 0,075",
    "0,690 dan 0,700",
    "0,075 dan 0,690"
   ],
   "answer": "0,070 dan 0,075",
   "hint": "Cari yang persepuluhannya 0.",
   "explain": "0,070 dan 0,075 punya 0 persepuluhan.",
   "error": "salah-banding-bilangan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Mana yang lebih kecil?",
   "options": [
    "0,070",
    "0,075"
   ],
   "answer": "0,070",
   "hint": "Bandingkan perseribuan: 0 dan 5.",
   "explain": "0,070 < 0,075.",
   "error": "salah-banding-bilangan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Tulis urutannya.",
   "options": [
    "0,07; 0,075; 0,69; 0,7",
    "0,7; 0,69; 0,075; 0,07",
    "0,07; 0,7; 0,075; 0,69",
    "0,075; 0,07; 0,69; 0,7"
   ],
   "answer": "0,07; 0,075; 0,69; 0,7",
   "hint": "Ingat: 0,69 < 0,7 karena 6 < 7 di persepuluhan.",
   "explain": "Dalam mm: 70, 75, 690, 700.",
   "error": "salah-urutkan-bilangan"
  }
 ],
 "conclusion": "Urutannya 0,07; 0,075; 0,69; 0,7."
}
```

### Contoh 3: Pecahan dan desimal

```soal
{
 "title": "Contoh 3",
 "text": "(a) Ubah $\\frac{7}{20}$ menjadi desimal. (b) Ubah 0,64 menjadi pecahan paling sederhana.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 20 × ? = 100",
   "answer": "5",
   "hint": "Cari pengali agar penyebut menjadi 100.",
   "explain": "20 × 5 = 100.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 7/20 = 35/100 = ? (desimal)",
   "answer": "0,35",
   "hint": "35 perseratus, 2 angka di belakang koma.",
   "explain": "7/20 = 0,35.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: 0,64 = ?/100",
   "answer": "64",
   "hint": "2 tempat desimal, penyebut 100.",
   "explain": "0,64 = 64/100.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Sederhanakan 64/100.",
   "answer": {
    "num": 16,
    "den": 25
   },
   "hint": "Bagi pembilang dan penyebut dengan 4.",
   "explain": "64/100 = 16/25.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 16/25 = ?/100",
   "answer": "64",
   "hint": "Kalikan atas dan bawah dengan 4.",
   "explain": "16 × 4 = 64, jadi 64/100 = 0,64. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "(a) 0,35. (b) $\\frac{16}{25}$."
}
```

### Contoh 4: Membulatkan

```soal
{
 "title": "Contoh 4",
 "text": "Bulatkan 12,463 ke bilangan bulat terdekat, ke 1 tempat desimal, dan ke 2 tempat desimal.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Ke bilangan bulat. Angka persepuluhan 4. Hasilnya?",
   "answer": "12",
   "hint": "4 < 5, jadi tetap.",
   "explain": "12,463 ≈ 12.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Ke 1 tempat desimal. Angka perseratusan 6. Hasilnya?",
   "answer": "12,5",
   "hint": "6 termasuk 5–9, persepuluhan naik 1.",
   "explain": "4 naik menjadi 5: 12,5.",
   "error": "salah-arah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Ke 2 tempat desimal. Angka perseribuan 3. Hasilnya?",
   "answer": "12,46",
   "hint": "3 < 5, perseratusan tetap.",
   "explain": "12,463 ≈ 12,46.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: titik tengah 12,4 dan 12,5 adalah?",
   "answer": "12,45",
   "hint": "Tengah-tengah dari 40 dan 50 perseratus.",
   "explain": "12,463 lewat dari 12,45, jadi memang lebih dekat ke 12,5.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "12,463 ≈ 12; ≈ 12,5; ≈ 12,46.",
 "visual": {
  "type": "numberLine",
  "from": 12.4,
  "to": 12.5,
  "step": 0.01,
  "marks": [
   12.45
  ]
 }
}
```

### Contoh 5: Soal cerita

```soal
{
 "title": "Contoh 5",
 "text": "Waktu lari 100 m: Budi 14,38 detik, Made 14,4 detik, Siti 14,35 detik. Waktu paling kecil adalah yang tercepat. Urutkan juara 1, 2, dan 3. Bulatkan juga waktu Budi ke 1 tempat desimal.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Juara 1 adalah waktu ...",
   "options": [
    "Paling kecil",
    "Paling besar"
   ],
   "answer": "Paling kecil",
   "hint": "Baca lagi soalnya.",
   "explain": "Waktu paling kecil = paling cepat.",
   "error": "salah-paling-banyak-sedikit"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Samakan tempat desimal. 14,4 menjadi ...",
   "options": [
    "14,40",
    "14,04",
    "14,4"
   ],
   "answer": "14,40",
   "hint": "Tambah 0 di belakang.",
   "explain": "14,4 = 14,40.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Siapa yang paling lambat?",
   "options": [
    "Made",
    "Budi",
    "Siti"
   ],
   "answer": "Made",
   "hint": "Persepuluhan: Budi 3, Made 4, Siti 3.",
   "explain": "Made punya 4 persepuluhan, paling besar.",
   "error": "salah-banding-bilangan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Urutan juara 1, 2, 3?",
   "options": [
    "Siti, Budi, Made",
    "Budi, Siti, Made",
    "Made, Budi, Siti"
   ],
   "answer": "Siti, Budi, Made",
   "hint": "Bandingkan perseratusan Budi (8) dan Siti (5).",
   "explain": "14,35 < 14,38 < 14,40.",
   "error": "salah-urutkan-bilangan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Bulatkan 14,38 ke 1 tempat desimal.",
   "answer": "14,4",
   "hint": "Perseratusan 8, persepuluhan naik.",
   "explain": "14,38 ≈ 14,4 detik. Terlihat sama dengan Made, jadi juara ditentukan dari waktu asli.",
   "error": "salah-arah-pembulatan",
   "suffix": "detik"
  }
 ],
 "conclusion": "Juara 1 Siti, juara 2 Budi, juara 3 Made. Waktu Budi ≈ 14,4 detik."
}
```

## Kesalahan yang sering terjadi

- **Mengira lebih banyak angka berarti lebih besar.** Menganggap $0{,}075 > 0{,}7$ karena 75 lebih besar dari 7. Samakan dulu: 0,075 dan 0,700. Jelas 0,700 lebih besar.
- **Salah nilai tempat.** Menulis 7 perseratus sebagai 0,7. Itu 7 persepuluh. 7 perseratus adalah 0,07, seperti 7 cm dari 1 m.
- **Penyebut salah saat mengubah ke pecahan.** Menulis $0{,}64 = \frac{64}{10}$. Dua tempat desimal artinya penyebut 100.
- **Melihat angka yang salah saat membulatkan.** Untuk 1 tempat desimal, lihat angka **kedua** di belakang koma, bukan angka terakhir.
- **Lupa menyimpan saat angka 9 naik.** Membulatkan 9,96 ke 1 tempat desimal menjadi "9,10". Persepuluhan 9 naik menjadi 10, jadi satuannya bertambah 1. Hasilnya 10,0.

## Ringkasan

- Tempat di belakang koma: persepuluhan (0,1), perseratusan (0,01), perseribuan (0,001).
- Untuk membandingkan, samakan banyak angka di belakang koma dengan menambah 0, lalu bandingkan dari kiri.
- Desimal ke pecahan: penyebut 10 atau 100, lalu sederhanakan.
- Pecahan ke desimal: ubah ke penyebut 10 atau 100.
- Membulatkan: lihat satu angka di kanan tempat tujuan. 0–4 tetap, 5–9 naik 1.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Berapa nilai angka 6 pada 8,264?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Angka 6 ada di tempat apa?",
   "options": [
    "Perseratusan",
    "Persepuluhan",
    "Perseribuan"
   ],
   "answer": "Perseratusan",
   "hint": "Hitung tempat setelah koma: 2, 6, 4.",
   "explain": "6 adalah angka kedua di belakang koma: perseratusan.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Berapa nilainya?",
   "answer": "0,06",
   "hint": "6 perseratus.",
   "explain": "6 perseratusan = 0,06.",
   "error": "salah-nilai-angka"
  }
 ],
 "conclusion": "Nilai angka 6 pada 8,264 adalah 0,06."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Urutkan dari yang terkecil: 2,05; 2,5; 2,055; 2,45.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Samakan menjadi 3 tempat desimal. 2,5 menjadi ...",
   "options": [
    "2,500",
    "2,005",
    "2,050"
   ],
   "answer": "2,500",
   "hint": "Tambah 0 di belakang.",
   "explain": "2,5 = 2,500.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Tulis urutan dari yang terkecil.",
   "options": [
    "2,05; 2,055; 2,45; 2,5",
    "2,5; 2,05; 2,45; 2,055",
    "2,05; 2,45; 2,5; 2,055",
    "2,055; 2,05; 2,45; 2,5"
   ],
   "answer": "2,05; 2,055; 2,45; 2,5",
   "hint": "2,050; 2,055; 2,450; 2,500.",
   "explain": "2,050 < 2,055 < 2,450 < 2,500.",
   "error": "salah-urutkan-bilangan"
  }
 ],
 "conclusion": "Urutannya 2,05; 2,055; 2,45; 2,5."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Tulis $\\frac{3}{25}$ sebagai bilangan desimal.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 3/25 = ?/100",
   "answer": "12",
   "hint": "Kalikan atas dan bawah dengan 4.",
   "explain": "3 × 4 = 12, jadi 12/100.",
   "error": "salah-pengali-senilai"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Tulis sebagai desimal.",
   "answer": "0,12",
   "hint": "12 perseratus.",
   "explain": "12/100 = 0,12.",
   "error": "salah-nilai-tempat"
  }
 ],
 "conclusion": "$\\frac{3}{25} = 0{,}12$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Tulis 1,75 sebagai pecahan campuran paling sederhana.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 0,75 = ?/100",
   "answer": "75",
   "hint": "2 tempat desimal.",
   "explain": "0,75 = 75/100, jadi 1,75 = 1 75/100.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Sederhanakan 1 75/100.",
   "answer": {
    "num": 3,
    "den": 4,
    "whole": 1
   },
   "hint": "Bagi pembilang dan penyebut dengan 25.",
   "explain": "75/100 = 3/4, jadi 1 3/4.",
   "error": "pecahan-belum-sederhana",
   "mixed": true,
   "simplest": true
  }
 ],
 "conclusion": "$1{,}75 = 1\\frac{3}{4}$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Bulatkan 9,965 ke 1 tempat desimal dan ke bilangan bulat terdekat.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Ke 1 tempat desimal, angka mana yang dilihat? (tulis angkanya)",
   "answer": "6",
   "hint": "Angka kedua di belakang koma.",
   "explain": "Perseratusan 6, jadi persepuluhan 9 naik.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hasil pembulatan ke 1 tempat desimal?",
   "answer": "10,0",
   "hint": "9 persepuluhan naik menjadi 10 persepuluhan = 1 satuan.",
   "explain": "9,9 + 0,1 = 10,0.",
   "error": "salah-genapkan-satu"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hasil pembulatan ke bilangan bulat terdekat?",
   "answer": "10",
   "hint": "Lihat persepuluhan: 9.",
   "explain": "9 naik menjadi 10.",
   "error": "salah-arah-pembulatan"
  }
 ],
 "conclusion": "9,965 ≈ 10,0 (1 tempat desimal) dan ≈ 10 (bilangan bulat)."
}
```
