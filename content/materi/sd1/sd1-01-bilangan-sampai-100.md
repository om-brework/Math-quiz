---
id: sd1-01-bilangan-sampai-100
judul: Bilangan sampai 100
jenjang: sd1
moe: "Primary 1 · Number and Algebra · Whole Numbers"
prasyarat: []
durasi_menit: 30
---

## Kenapa belajar ini?

Setiap hari kita membilang. Berapa kelereng di toples? Berapa anak di kelas? Halaman berapa buku ceritamu? Kalau kamu paham bilangan sampai 100, kamu bisa membilang dan membandingkan banyak benda dengan cepat.

## Analogi

Bayangkan kamu punya banyak **stik es krim**.

Setiap 10 stik kamu ikat dengan karet. Satu ikat berisi **10 stik**. Stik yang belum cukup 10 dibiarkan **lepas**.

- Ikatan adalah **puluhan**.
- Stik lepas adalah **satuan**.

```visual
{"type": "base10", "tens": 3, "ones": 4, "caption": "3 ikat dan 4 stik lepas = 34"}
```

Dengan cara ini, membilang jadi mudah. Kamu tidak perlu menghitung satu per satu. Hitung ikatannya dulu, lalu stik lepasnya.

Lihat apa yang terjadi kalau stik lepas sudah 10: stik itu diikat menjadi 1 ikat baru.

```anim
{"type": "stik", "op": "+", "a": 27, "b": 5, "title": "27 stik ditambah 5 stik"}
```

## Konsep

### Membilang benda

Membilang artinya menghitung banyak benda. Ada dua cara:

- **Satu-satu:** 1, 2, 3, 4, dan seterusnya.
- **Loncat sepuluh lalu satu-satu:** hitung ikatan dulu (10, 20, 30), lalu stik lepas (31, 32, 33).

Cara kedua jauh lebih cepat untuk benda yang banyak.

```visual
{"type": "objects", "item": "kelereng", "count": 34, "group": 10, "caption": "Hitung per kelompok: 10, 20, 30, lalu 31, 32, 33, 34"}
```

### Membaca dan menulis bilangan

Bilangan bisa ditulis dengan **angka** atau dengan **kata**.

```visual
{"type": "table", "head": ["Angka", "Dibaca", "Angka", "Dibaca"], "rows": [["10", "sepuluh", "60", "enam puluh"], ["11", "sebelas", "70", "tujuh puluh"], ["12", "dua belas", "80", "delapan puluh"], ["20", "dua puluh", "90", "sembilan puluh"], ["30", "tiga puluh", "100", "seratus"], ["40", "empat puluh", "", ""], ["50", "lima puluh", "", ""]]}
```

Bilangan lain tinggal digabung. Contoh: 47 dibaca **empat puluh tujuh**. 81 dibaca **delapan puluh satu**.

Ingat tiga kata khusus: **sepuluh**, **sebelas**, dan **seratus**. Kita tidak bilang "satu puluh" atau "satu ratus".

### Nilai tempat: puluhan dan satuan

Bilangan dua angka punya dua tempat.

```visual
{"type": "base10", "tens": 4, "ones": 7, "caption": "47: 4 puluhan (= 40) dan 7 satuan (= 7)"}
```

Angka kiri adalah **puluhan**. Angka kanan adalah **satuan**. Jadi 47 = 40 + 7.

Angka 4 pada 47 bernilai **40**, bukan 4. Tempatnya menentukan nilainya.

**100** adalah 10 ikat. Sepuluh ikat bisa diikat lagi menjadi satu ikatan besar.

### Membandingkan bilangan

Untuk tahu mana yang lebih banyak, bandingkan seperti stik:

1. Bandingkan **puluhan** dulu (banyak ikatan). Yang ikatannya lebih banyak, lebih besar.
2. Kalau puluhannya sama, bandingkan **satuan** (stik lepas).

```visual
{"type": "base10", "tens": 3, "ones": 1, "caption": "31: 3 ikat dan 1 lepas"}
```

```visual
{"type": "base10", "tens": 2, "ones": 9, "caption": "29: hanya 2 ikat, walaupun stik lepasnya 9. Jadi 31 lebih besar dari 29"}
```

Kata yang dipakai: **lebih besar dari**, **lebih kecil dari**, dan **sama dengan**.

### Mengurutkan bilangan

Mengurutkan artinya menyusun bilangan:

- dari **terkecil ke terbesar**, atau
- dari **terbesar ke terkecil**.

Bandingkan dulu, lalu susun satu per satu. Di garis bilangan, bilangan yang lebih kecil ada di kiri.

```visual
{"type": "numberLine", "from": 40, "to": 80, "step": 5, "marks": [45, 47, 74], "caption": "45, 47, 74: makin ke kanan makin besar"}
```

### Pola barisan bilangan

Pola adalah barisan bilangan yang berubah dengan **aturan yang sama**.

- 2, 4, 6, 8, ... selalu **tambah 2**.
- 50, 45, 40, 35, ... selalu **kurang 5**.

```anim
{"type": "garis", "from": 0, "to": 10, "start": 2, "jumps": [2, 2, 2], "title": "2, 4, 6, 8: setiap lompatan tambah 2"}
```

Cari aturannya dengan melihat dua bilangan yang berdekatan.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Membilang stik

```soal
{
 "title": "Contoh 1",
 "text": "Rina punya 3 ikat stik dan 4 stik lepas. Berapa banyak stiknya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Hitung ikatan. 3 ikat berarti berapa stik?",
   "answer": "30",
   "hint": "Bilang loncat sepuluh: 10, 20, ...",
   "explain": "10, 20, 30. Tiga ikat berisi 30 stik.",
   "error": "lupa-ikat-sepuluh"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Lanjutkan dengan 4 stik lepas. 31, 32, 33, ...?",
   "answer": "34",
   "hint": "Dari 30, bilang 4 kali.",
   "explain": "31, 32, 33, 34. Semuanya 34 stik.",
   "error": "salah-membilang-benda"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Bagaimana 34 dibaca?",
   "options": [
    "tiga puluh empat",
    "empat puluh tiga",
    "tiga empat"
   ],
   "answer": "tiga puluh empat",
   "hint": "Angka kiri puluhan, angka kanan satuan.",
   "explain": "3 puluhan = tiga puluh, 4 satuan = empat.",
   "error": "salah-baca-bilangan-kata"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: 34 punya berapa puluhan dan satuan?",
   "options": [
    "3 puluhan dan 4 satuan",
    "4 puluhan dan 3 satuan"
   ],
   "answer": "3 puluhan dan 4 satuan",
   "hint": "Puluhan adalah angka kiri.",
   "explain": "3 puluhan dan 4 satuan, sama dengan 3 ikat dan 4 lepas. Benar.",
   "error": "tertukar-puluhan-satuan"
  }
 ],
 "conclusion": "Jadi ada 34 stik, dibaca tiga puluh empat.",
 "visual": {
  "type": "base10",
  "tens": 3,
  "ones": 4
 }
}
```

### Contoh 2: Nilai tempat

```soal
{
 "title": "Contoh 2",
 "text": "Tulis 58 dengan kata. Berapa puluhan dan berapa satuannya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Pisahkan tempatnya. Berapa puluhan pada 58?",
   "answer": "5",
   "hint": "Puluhan adalah angka kiri.",
   "explain": "Angka kiri 5 adalah puluhan.",
   "error": "tertukar-puluhan-satuan"
  },
  {
   "kind": "number",
   "prompt": "Berapa satuan pada 58?",
   "answer": "8",
   "hint": "Satuan adalah angka kanan.",
   "explain": "Angka kanan 8 adalah satuan.",
   "error": "tertukar-puluhan-satuan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Baca puluhannya. 5 puluhan dibaca ...",
   "options": [
    "lima puluh",
    "lima",
    "lima ratus"
   ],
   "answer": "lima puluh",
   "hint": "5 ikat berisi 50 stik.",
   "explain": "5 puluhan bernilai 50, dibaca lima puluh.",
   "error": "salah-nilai-angka"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Gabungkan. 58 dibaca ...",
   "options": [
    "lima puluh delapan",
    "delapan puluh lima",
    "lima delapan"
   ],
   "answer": "lima puluh delapan",
   "hint": "Baca puluhan dulu, lalu satuan.",
   "explain": "Lima puluh dan delapan: lima puluh delapan.",
   "error": "salah-baca-bilangan-kata"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 50 + 8 = ?",
   "answer": "58",
   "hint": "5 ikat ditambah 8 stik lepas.",
   "explain": "50 + 8 = 58. Benar.",
   "error": "salah-nilai-angka"
  }
 ],
 "conclusion": "Jadi 58 dibaca lima puluh delapan: 5 puluhan dan 8 satuan."
}
```

### Contoh 3: Membandingkan dan mengurutkan

```soal
{
 "title": "Contoh 3",
 "text": "Urutkan 47, 74, dan 45 dari yang terkecil.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Bandingkan puluhan. Bilangan mana yang terbesar?",
   "answer": "74",
   "hint": "Puluhannya 4, 7, dan 4. Cari puluhan terbesar.",
   "explain": "7 puluhan paling banyak, jadi 74 terbesar.",
   "error": "bandingkan-satuan-dulu"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 47 dan 45 sama-sama 4 puluhan. Bandingkan satuan. Mana yang lebih kecil?",
   "answer": "45",
   "hint": "Satuannya 7 dan 5.",
   "explain": "5 lebih kecil dari 7, jadi 45 lebih kecil dari 47.",
   "error": "bandingkan-satuan-dulu"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Susun dari yang terkecil.",
   "options": [
    "45, 47, 74",
    "47, 45, 74",
    "74, 47, 45",
    "45, 74, 47"
   ],
   "answer": "45, 47, 74",
   "hint": "Mulai dari yang terkecil, akhiri dengan yang terbesar.",
   "explain": "Terkecil 45, lalu 47, lalu 74.",
   "error": "salah-urutkan-bilangan"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: kalau membilang dari 45 ke atas, mana yang muncul lebih dulu?",
   "options": [
    "47",
    "74"
   ],
   "answer": "47",
   "hint": "45, 46, 47, ...",
   "explain": "47 muncul sebelum 74, jadi urutannya benar.",
   "error": "salah-urutkan-bilangan"
  }
 ],
 "conclusion": "Jadi urutannya 45, 47, 74.",
 "visual": {
  "type": "numberLine",
  "from": 40,
  "to": 80,
  "step": 5,
  "marks": [
   45,
   47,
   74
  ]
 }
}
```

### Contoh 4: Melengkapi pola

```soal
{
 "title": "Contoh 4",
 "text": "Lengkapi: 15, 20, 25, ..., ..., 40.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Cari aturannya. 15 ke 20, lalu 20 ke 25.",
   "options": [
    "tambah 5",
    "tambah 10",
    "kurang 5"
   ],
   "answer": "tambah 5",
   "hint": "Berapa langkah dari 15 ke 20?",
   "explain": "15 ke 20 bertambah 5, 20 ke 25 juga bertambah 5.",
   "error": "salah-aturan-pola"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Isi bilangan kosong pertama. 25 + 5 = ?",
   "answer": "30",
   "hint": "Loncat 5 dari 25.",
   "explain": "25 + 5 = 30.",
   "error": "salah-lanjutkan-pola"
  },
  {
   "kind": "number",
   "prompt": "Isi bilangan kosong kedua. 30 + 5 = ?",
   "answer": "35",
   "hint": "Loncat 5 dari 30.",
   "explain": "30 + 5 = 35.",
   "error": "salah-lanjutkan-pola"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 35 + 5 = ?",
   "answer": "40",
   "hint": "Hasilnya harus sama dengan bilangan terakhir.",
   "explain": "35 + 5 = 40, cocok dengan bilangan terakhir. Benar.",
   "error": "salah-lanjutkan-pola"
  }
 ],
 "conclusion": "Jadi bilangan yang hilang adalah 30 dan 35."
}
```

### Contoh 5: Soal cerita

```soal
{
 "title": "Contoh 5",
 "text": "Siti punya 62 manik-manik. Putu punya 26 manik-manik. Siapa yang punya lebih banyak?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Bilangan apa yang dibandingkan?",
   "options": [
    "62 dan 26",
    "62 dan 62",
    "6 dan 2"
   ],
   "answer": "62 dan 26",
   "hint": "Lihat banyak manik-manik masing-masing anak.",
   "explain": "Kita membandingkan 62 dan 26.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Berapa puluhan pada 62?",
   "answer": "6",
   "hint": "Angka kiri.",
   "explain": "62 punya 6 puluhan.",
   "error": "tertukar-puluhan-satuan"
  },
  {
   "kind": "number",
   "prompt": "Berapa puluhan pada 26?",
   "answer": "2",
   "hint": "Angka kiri.",
   "explain": "26 punya 2 puluhan.",
   "error": "tertukar-puluhan-satuan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Simpulkan.",
   "options": [
    "62 lebih besar dari 26",
    "26 lebih besar dari 62",
    "sama banyak"
   ],
   "answer": "62 lebih besar dari 26",
   "hint": "Bilangan dengan puluhan lebih banyak, lebih besar.",
   "explain": "6 puluhan lebih banyak dari 2 puluhan.",
   "error": "bandingkan-satuan-dulu"
  },
  {
   "kind": "choice",
   "prompt": "Siapa yang punya lebih banyak?",
   "options": [
    "Siti",
    "Putu"
   ],
   "answer": "Siti",
   "hint": "Siti punya 62.",
   "explain": "Siti punya 6 ikat, Putu hanya 2 ikat.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi Siti punya lebih banyak manik-manik."
}
```

## Kesalahan yang sering terjadi

- **Menukar puluhan dan satuan.** Menulis "tiga puluh empat" sebagai 43. Puluhan selalu di kiri. Tiga puluh empat = 34.
- **Hanya melihat satuan saat membandingkan.** Mengira 29 lebih besar dari 31 karena 9 lebih besar dari 1. Bandingkan puluhan dulu: 3 ikat lebih banyak dari 2 ikat. Jadi 31 lebih besar.
- **Salah menyebut 11 dan 100.** Menyebut "satu puluh satu" atau "satu ratus". Yang benar: sebelas dan seratus.
- **Mengira aturan pola tanpa mengecek.** Melihat 2, 4 lalu menebak tambah 2, padahal barisannya 2, 4, 8. Cek aturan pada beberapa pasang bilangan.

## Ringkasan

- 10 satuan = 1 puluhan, seperti 10 stik = 1 ikat.
- Bilangan dua angka: angka kiri **puluhan**, angka kanan **satuan**.
- Ingat kata khusus: sepuluh, sebelas, seratus.
- Membandingkan: lihat **puluhan dulu**, baru satuan.
- Pola: cari aturan yang sama di setiap langkah, lalu lanjutkan.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tulis 91 dengan kata.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa puluhan pada 91?",
   "answer": "9",
   "hint": "Angka kiri.",
   "explain": "Angka 9 ada di puluhan, bernilai 90.",
   "error": "tertukar-puluhan-satuan"
  },
  {
   "kind": "choice",
   "prompt": "Bagaimana 91 dibaca?",
   "options": [
    "sembilan puluh satu",
    "satu puluh sembilan",
    "sembilan satu"
   ],
   "answer": "sembilan puluh satu",
   "hint": "Baca puluhan dulu, lalu satuan.",
   "explain": "9 puluhan = sembilan puluh, 1 satuan = satu.",
   "error": "salah-baca-bilangan-kata"
  }
 ],
 "conclusion": "Jadi 91 dibaca sembilan puluh satu."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Bilangan apa yang punya 7 puluhan dan 3 satuan?",
 "steps": [
  {
   "kind": "number",
   "prompt": "7 puluhan bernilai berapa?",
   "answer": "70",
   "hint": "7 ikat, masing-masing 10.",
   "explain": "7 puluhan = 70.",
   "error": "salah-nilai-angka"
  },
  {
   "kind": "number",
   "prompt": "Tambahkan 3 satuan. 70 + 3 = ?",
   "answer": "73",
   "hint": "Puluhan di kiri, satuan di kanan.",
   "explain": "70 + 3 = 73.",
   "error": "tertukar-puluhan-satuan"
  }
 ],
 "conclusion": "Jadi bilangannya 73.",
 "visual": {
  "type": "base10",
  "tens": 7,
  "ones": 3
 }
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Mana yang lebih besar, 39 atau 93?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Apa yang dibandingkan lebih dulu?",
   "options": [
    "puluhan",
    "satuan"
   ],
   "answer": "puluhan",
   "hint": "Ikatan dulu, baru stik lepas.",
   "explain": "Bandingkan puluhan dulu: 3 dan 9.",
   "error": "bandingkan-satuan-dulu"
  },
  {
   "kind": "number",
   "prompt": "Mana yang lebih besar?",
   "answer": "93",
   "hint": "9 puluhan atau 3 puluhan?",
   "explain": "93 punya 9 puluhan, lebih banyak dari 3 puluhan.",
   "error": "bandingkan-satuan-dulu"
  }
 ],
 "conclusion": "Jadi 93 lebih besar dari 39."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Urutkan dari yang terbesar: 56, 65, 50.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Bilangan mana yang terbesar?",
   "answer": "65",
   "hint": "Cari puluhan terbesar.",
   "explain": "65 punya 6 puluhan, paling banyak.",
   "error": "bandingkan-satuan-dulu"
  },
  {
   "kind": "number",
   "prompt": "56 dan 50 sama-sama 5 puluhan. Mana yang lebih besar?",
   "answer": "56",
   "hint": "Bandingkan satuannya: 6 dan 0.",
   "explain": "Satuan 6 lebih besar dari 0, jadi 56 lebih besar.",
   "error": "bandingkan-satuan-dulu"
  },
  {
   "kind": "choice",
   "prompt": "Urutan dari yang terbesar adalah ...",
   "options": [
    "65, 56, 50",
    "50, 56, 65",
    "56, 65, 50"
   ],
   "answer": "65, 56, 50",
   "hint": "Mulai dari yang terbesar.",
   "explain": "65, lalu 56, lalu 50.",
   "error": "salah-urutkan-bilangan"
  }
 ],
 "conclusion": "Jadi urutannya 65, 56, 50."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Lengkapi pola: 80, 78, 76, ..., ...",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Apa aturannya?",
   "options": [
    "kurang 2",
    "tambah 2",
    "kurang 1"
   ],
   "answer": "kurang 2",
   "hint": "Bandingkan 80 dan 78.",
   "explain": "80 ke 78 berkurang 2, 78 ke 76 juga berkurang 2.",
   "error": "salah-aturan-pola"
  },
  {
   "kind": "number",
   "prompt": "Bilangan kosong pertama: 76 − 2 = ?",
   "answer": "74",
   "hint": "Mundur 2 dari 76.",
   "explain": "76 − 2 = 74.",
   "error": "salah-lanjutkan-pola"
  },
  {
   "kind": "number",
   "prompt": "Bilangan kosong kedua: 74 − 2 = ?",
   "answer": "72",
   "hint": "Mundur 2 dari 74.",
   "explain": "74 − 2 = 72.",
   "error": "salah-lanjutkan-pola"
  }
 ],
 "conclusion": "Jadi bilangan yang hilang adalah 74 dan 72."
}
```
