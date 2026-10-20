---
id: sd2-12-bangun-ruang
judul: Bangun Ruang
jenjang: sd2
moe: "Primary 2 · Measurement and Geometry · 2D and 3D Shapes"
prasyarat: [sd1-10-bangun-datar]
durasi_menit: 30
---

## Kenapa belajar ini?

Dadu, kaleng susu, tumpeng, dan bola sepak punya bentuk yang berbeda. Benda-benda itu bisa dipegang dan punya isi. Bentuk seperti ini disebut **bangun ruang**. Mengenal bangun ruang membantumu menyusun, menumpuk, dan menyimpan barang dengan rapi.

## Analogi

Bayangkan kamu melakukan **dua tes** pada sebuah benda:

1. **Tes gelinding**: dorong benda di lantai. Kalau bisa menggelinding, benda itu punya **sisi lengkung**.
2. **Tes tumpuk**: letakkan benda lain di atasnya. Kalau bisa berdiri tegak dan ditumpuk, benda itu punya **sisi datar**.

```visual
{"type": "solid", "solid": "bola", "caption": "Bola lulus tes gelinding: sisinya lengkung"}
```

```visual
{"type": "solid", "solid": "kubus", "caption": "Kubus lulus tes tumpuk: sisinya datar"}
```

Dua tes ini membantumu mengenali setiap bangun ruang.

## Konsep

### Sisi datar dan sisi lengkung

- **Sisi datar** rata seperti permukaan meja. Kalau diraba, tidak melengkung.
- **Sisi lengkung** melengkung seperti permukaan bola. Sisi lengkung membuat benda bisa menggelinding.

### Lima bangun ruang

**Kubus**

- Punya 6 sisi datar. Semuanya persegi yang sama besar.
- Tidak punya sisi lengkung.
- Contoh: dadu, kotak rubik.

```visual
{"type": "solid", "solid": "kubus", "caption": "Kubus"}
```

**Balok**

- Punya 6 sisi datar. Sisinya persegi panjang, kadang ada juga yang persegi.
- Tidak punya sisi lengkung.
- Contoh: kotak susu, batu bata, kotak sepatu, lemari.

```visual
{"type": "solid", "solid": "balok", "caption": "Balok"}
```

**Tabung**

- Punya 2 sisi datar berbentuk lingkaran, di atas dan di bawah.
- Punya 1 sisi lengkung yang mengelilinginya.
- Contoh: kaleng susu, pipa, drum, bedug.

```visual
{"type": "solid", "solid": "tabung", "caption": "Tabung"}
```

**Kerucut**

- Punya 1 sisi datar berbentuk lingkaran, di bagian alas.
- Punya 1 sisi lengkung yang meruncing ke satu titik di atas.
- Contoh: tumpeng, topi ulang tahun, cone es krim.

```visual
{"type": "solid", "solid": "kerucut", "caption": "Kerucut"}
```

**Bola**

- Hanya punya 1 sisi lengkung.
- Tidak punya sisi datar.
- Contoh: bola sepak, kelereng, jeruk.

```visual
{"type": "solid", "solid": "bola", "caption": "Bola"}
```

### Tabel ringkas

```visual
{"type": "table", "head": ["Bangun", "Sisi datar", "Sisi lengkung", "Gelinding?", "Bisa ditumpuk?"], "rows": [["Kubus", "6 (persegi)", "0", "tidak", "ya"], ["Balok", "6 (persegi panjang)", "0", "tidak", "ya"], ["Tabung", "2 (lingkaran)", "1", "ya", "ya, jika berdiri"], ["Kerucut", "1 (lingkaran)", "1", "ya", "tidak di atas ujungnya"], ["Bola", "0", "1", "ya", "tidak"]]}
```

### Menggolongkan bangun ruang

Kita bisa mengelompokkan bangun ruang menurut sisinya:

- **Hanya sisi datar**: kubus, balok.
- **Sisi datar dan sisi lengkung**: tabung, kerucut.
- **Hanya sisi lengkung**: bola.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Mengenali bangun ruang

```soal
{
 "title": "Contoh 1",
 "text": "Kotak tisu berbentuk bangun ruang apa?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Tes gelinding. Apakah kotak tisu bisa menggelinding?",
   "options": [
    "Ya",
    "Tidak"
   ],
   "answer": "Tidak",
   "hint": "Bayangkan kotak tisu didorong di lantai.",
   "explain": "Tidak menggelinding, jadi tidak ada sisi lengkung.",
   "error": "salah-sisi-lengkung"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung sisi datarnya. Atas, bawah, depan, belakang, kiri, kanan. Ada berapa?",
   "answer": "6",
   "hint": "Hitung satu per satu.",
   "explain": "Ada 6 sisi datar.",
   "error": "salah-hitung-sisi-datar",
   "suffix": "sisi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Sisinya berbentuk apa?",
   "options": [
    "Semua persegi sama besar",
    "Ada yang persegi panjang",
    "Lingkaran"
   ],
   "answer": "Ada yang persegi panjang",
   "hint": "Sisi depan panjang, sisi kiri pendek.",
   "explain": "Tidak semua sisinya sama besar. Ada yang persegi panjang.",
   "error": "salah-bentuk-sisi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Jadi kotak tisu berbentuk ...",
   "options": [
    "kubus",
    "balok",
    "tabung",
    "kerucut",
    "bola"
   ],
   "answer": "balok",
   "hint": "6 sisi datar, ada yang persegi panjang.",
   "explain": "Itu ciri balok.",
   "error": "kubus-balok-tertukar"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: kenapa bukan kubus?",
   "options": [
    "Sisi kubus semua persegi sama besar",
    "Kubus bisa menggelinding",
    "Kubus punya 4 sisi"
   ],
   "answer": "Sisi kubus semua persegi sama besar",
   "hint": "Ingat ciri kubus.",
   "explain": "Kotak tisu tidak begitu, jadi balok.",
   "error": "kubus-balok-tertukar"
  }
 ],
 "conclusion": "Kotak tisu berbentuk balok.",
 "visual": {
  "type": "solid",
  "solid": "balok"
 }
}
```

### Contoh 2: Membedakan tabung dan kerucut

```soal
{
 "title": "Contoh 2",
 "text": "Kaleng susu dan tumpeng sama-sama bisa menggelinding. Apa bedanya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Keduanya menggelinding. Artinya keduanya punya ...",
   "options": [
    "sisi lengkung",
    "hanya sisi datar"
   ],
   "answer": "sisi lengkung",
   "hint": "Ingat tes gelinding.",
   "explain": "Benda yang menggelinding punya sisi lengkung.",
   "error": "salah-sisi-lengkung"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Ada berapa sisi datar pada kaleng susu?",
   "answer": "2",
   "hint": "Lihat tutup atas dan alas bawah.",
   "explain": "2 sisi datar berbentuk lingkaran.",
   "error": "salah-hitung-sisi-datar",
   "suffix": "sisi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Ada berapa sisi datar pada tumpeng?",
   "answer": "1",
   "hint": "Bagian atas tumpeng runcing.",
   "explain": "Hanya alasnya: 1 sisi datar.",
   "error": "salah-hitung-sisi-datar",
   "suffix": "sisi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Jadi kaleng susu dan tumpeng berbentuk ...",
   "options": [
    "tabung dan kerucut",
    "kerucut dan tabung",
    "tabung dan tabung"
   ],
   "answer": "tabung dan kerucut",
   "hint": "Bangun dengan 2 sisi datar lingkaran adalah tabung.",
   "explain": "Kaleng susu tabung, tumpeng kerucut.",
   "error": "tabung-kerucut-tertukar"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Bagaimana kerucut menggelinding?",
   "options": [
    "Lurus",
    "Berputar melingkar",
    "Tidak bisa"
   ],
   "answer": "Berputar melingkar",
   "hint": "Ujung kerucut diam di satu titik.",
   "explain": "Kerucut menggelinding berputar melingkar. Tabung menggelinding lurus.",
   "error": "salah-sisi-lengkung"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: tabung dan kerucut masing-masing punya berapa sisi lengkung?",
   "answer": "1",
   "hint": "Lihat tabel ringkas.",
   "explain": "Keduanya punya 1 sisi lengkung. Bedanya ada di sisi datar.",
   "error": "salah-sisi-lengkung",
   "suffix": "sisi"
  }
 ],
 "conclusion": "Kaleng susu (tabung) punya 2 sisi datar. Tumpeng (kerucut) hanya punya 1 sisi datar dan ujung yang runcing.",
 "visual": {
  "type": "solid",
  "solid": "kerucut"
 }
}
```

### Contoh 3: Menggolongkan benda

```soal
{
 "title": "Contoh 3",
 "text": "Golongkan benda-benda ini: dadu, kelereng, topi ulang tahun, kaleng cat, kotak sepatu, bola voli.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Topi ulang tahun berbentuk ...",
   "options": [
    "kubus",
    "balok",
    "tabung",
    "kerucut",
    "bola"
   ],
   "answer": "kerucut",
   "hint": "Alasnya lingkaran, atasnya runcing.",
   "explain": "Topi ulang tahun berbentuk kerucut.",
   "error": "salah-nama-bangun-ruang"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Kaleng cat berbentuk ...",
   "options": [
    "kubus",
    "balok",
    "tabung",
    "kerucut",
    "bola"
   ],
   "answer": "tabung",
   "hint": "Ada tutup dan alas lingkaran.",
   "explain": "Kaleng cat berbentuk tabung.",
   "error": "salah-nama-bangun-ruang"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Dadu dan kotak sepatu masuk kelompok ...",
   "options": [
    "Hanya sisi datar",
    "Sisi datar dan sisi lengkung",
    "Hanya sisi lengkung"
   ],
   "answer": "Hanya sisi datar",
   "hint": "Dadu kubus, kotak sepatu balok.",
   "explain": "Kubus dan balok hanya punya sisi datar.",
   "error": "salah-golongkan-bangun-ruang"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Topi ulang tahun dan kaleng cat masuk kelompok ...",
   "options": [
    "Hanya sisi datar",
    "Sisi datar dan sisi lengkung",
    "Hanya sisi lengkung"
   ],
   "answer": "Sisi datar dan sisi lengkung",
   "hint": "Kerucut dan tabung punya alas datar dan bisa menggelinding.",
   "explain": "Keduanya punya sisi datar dan sisi lengkung.",
   "error": "salah-golongkan-bangun-ruang"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Kelereng dan bola voli masuk kelompok ...",
   "options": [
    "Hanya sisi datar",
    "Sisi datar dan sisi lengkung",
    "Hanya sisi lengkung"
   ],
   "answer": "Hanya sisi lengkung",
   "hint": "Keduanya berbentuk bola.",
   "explain": "Bola hanya punya sisi lengkung.",
   "error": "salah-golongkan-bangun-ruang"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 2 + 2 + 2 = ? Sama dengan banyak benda di soal?",
   "answer": "6",
   "hint": "Jumlahkan isi ketiga kelompok.",
   "explain": "6 benda, sama dengan di soal. Tidak ada yang terlewat.",
   "error": "salah-golongkan-bangun-ruang",
   "suffix": "benda"
  }
 ],
 "conclusion": "Hanya sisi datar: dadu, kotak sepatu. Datar dan lengkung: kaleng cat, topi ulang tahun. Hanya lengkung: kelereng, bola voli."
}
```

### Contoh 4: Soal cerita menyusun menara

```soal
{
 "title": "Contoh 4",
 "text": "Made punya mainan berbentuk kubus, balok, tabung, kerucut, dan bola. Ia ingin menyusun menara setinggi mungkin. Mainan mana yang bisa ditaruh di bawah? Mainan mana yang hanya cocok di paling atas? Mainan mana yang sulit dipakai?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Benda di bawah harus punya ...",
   "options": [
    "sisi datar di atas dan di bawah",
    "sisi lengkung",
    "ujung runcing"
   ],
   "answer": "sisi datar di atas dan di bawah",
   "hint": "Benda lain harus bisa diletakkan di atasnya.",
   "explain": "Perlu sisi datar di atas dan di bawah.",
   "error": "salah-tumpuk-bangun"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Mainan mana yang bisa ditaruh di bawah?",
   "options": [
    "Kubus, balok, dan tabung berdiri",
    "Kerucut dan bola",
    "Hanya kubus"
   ],
   "answer": "Kubus, balok, dan tabung berdiri",
   "hint": "Cek sisi atas dan bawah setiap mainan.",
   "explain": "Kubus, balok, dan tabung yang berdiri punya sisi datar di atas dan bawah.",
   "error": "salah-tumpuk-bangun"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Mainan mana yang hanya cocok di paling atas?",
   "options": [
    "kubus",
    "balok",
    "tabung",
    "kerucut",
    "bola"
   ],
   "answer": "kerucut",
   "hint": "Bisa berdiri di alasnya, tetapi atasnya runcing.",
   "explain": "Tidak ada yang bisa ditaruh di atas ujung kerucut.",
   "error": "salah-tumpuk-bangun"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Mainan mana yang sulit dipakai?",
   "options": [
    "kubus",
    "balok",
    "tabung",
    "kerucut",
    "bola"
   ],
   "answer": "bola",
   "hint": "Mana yang tidak punya sisi datar sama sekali?",
   "explain": "Bola akan menggelinding jatuh.",
   "error": "salah-tumpuk-bangun"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: susunan mana yang bisa berdiri?",
   "options": [
    "Balok, kubus, tabung, kerucut di puncak",
    "Kerucut, balok, kubus",
    "Bola, kubus, balok"
   ],
   "answer": "Balok, kubus, tabung, kerucut di puncak",
   "hint": "Semua sisi yang bersentuhan harus datar.",
   "explain": "Susunan ini bisa berdiri karena sisi yang bersentuhan datar.",
   "error": "salah-tumpuk-bangun"
  }
 ],
 "conclusion": "Kubus, balok, dan tabung (berdiri) bisa di bawah. Kerucut hanya cocok di paling atas. Bola sulit dipakai karena menggelinding."
}
```

## Kesalahan yang sering terjadi

- **Menyebut nama bangun datar.** Dadu disebut persegi. Persegi adalah bangun datar, hanya satu sisinya. Dadu yang bisa dipegang adalah kubus.
- **Kubus dan balok tertukar.** Kotak sepatu disebut kubus. Cek sisinya: kalau tidak semua sisi persegi sama besar, itu balok.
- **Mengira kerucut tidak bisa menggelinding.** Kerucut punya sisi lengkung, jadi bisa menggelinding. Hanya saja ia berputar melingkar.
- **Mengira tabung punya 1 sisi datar.** Lupa menghitung alasnya. Kaleng punya tutup dan alas, jadi 2 sisi datar.
- **Mengira bola punya sisi datar.** Bola tidak punya bagian rata sama sekali. Bola hanya punya 1 sisi lengkung.

## Ringkasan

- Bangun ruang punya sisi datar, sisi lengkung, atau keduanya.
- Tes gelinding menunjukkan sisi lengkung. Tes tumpuk menunjukkan sisi datar.
- Kubus: 6 sisi datar persegi sama besar. Balok: 6 sisi datar, ada yang persegi panjang.
- Tabung: 2 sisi datar lingkaran dan 1 sisi lengkung. Kerucut: 1 sisi datar lingkaran dan 1 sisi lengkung.
- Bola: hanya 1 sisi lengkung.
- Golongan: hanya datar (kubus, balok), datar dan lengkung (tabung, kerucut), hanya lengkung (bola).

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Kaleng biskuit yang bulat berbentuk bangun ruang apa?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Ada berapa sisi datar pada kaleng biskuit?",
   "answer": "2",
   "hint": "Hitung tutup dan alasnya.",
   "explain": "2 sisi datar berbentuk lingkaran.",
   "error": "salah-hitung-sisi-datar",
   "suffix": "sisi"
  },
  {
   "kind": "choice",
   "prompt": "Kaleng biskuit berbentuk ...",
   "options": [
    "kubus",
    "balok",
    "tabung",
    "kerucut",
    "bola"
   ],
   "answer": "tabung",
   "hint": "2 sisi datar lingkaran dan 1 sisi lengkung.",
   "explain": "Itu ciri tabung.",
   "error": "tabung-kerucut-tertukar"
  }
 ],
 "conclusion": "Kaleng biskuit berbentuk tabung."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Berapa sisi datar yang dimiliki kubus?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Hitung sisi datar kubus.",
   "answer": "6",
   "hint": "Atas, bawah, depan, belakang, kiri, kanan.",
   "explain": "Kubus punya 6 sisi datar.",
   "error": "salah-hitung-sisi-datar",
   "suffix": "sisi"
  },
  {
   "kind": "choice",
   "prompt": "Sisi-sisi kubus berbentuk ...",
   "options": [
    "persegi sama besar",
    "persegi panjang",
    "lingkaran"
   ],
   "answer": "persegi sama besar",
   "hint": "Ingat dadu.",
   "explain": "Semua sisi kubus persegi yang sama besar.",
   "error": "salah-bentuk-sisi"
  }
 ],
 "conclusion": "Kubus punya 6 sisi datar, semuanya persegi sama besar.",
 "visual": {
  "type": "solid",
  "solid": "kubus"
 }
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Bangun ruang apa yang hanya punya sisi lengkung?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Bangun yang hanya punya sisi lengkung punya berapa sisi datar?",
   "options": [
    "0",
    "1",
    "2"
   ],
   "answer": "0",
   "hint": "Hanya sisi lengkung artinya tidak ada yang rata.",
   "explain": "Tidak punya sisi datar sama sekali.",
   "error": "salah-sisi-lengkung"
  },
  {
   "kind": "choice",
   "prompt": "Bangun itu adalah ...",
   "options": [
    "kubus",
    "balok",
    "tabung",
    "kerucut",
    "bola"
   ],
   "answer": "bola",
   "hint": "Seperti kelereng.",
   "explain": "Bola hanya punya 1 sisi lengkung.",
   "error": "salah-nama-bangun-ruang"
  }
 ],
 "conclusion": "Bola hanya punya sisi lengkung."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Tumpeng berbentuk bangun ruang apa? Sebutkan sisi datar dan sisi lengkungnya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Tumpeng berbentuk ...",
   "options": [
    "kubus",
    "balok",
    "tabung",
    "kerucut",
    "bola"
   ],
   "answer": "kerucut",
   "hint": "Alasnya lingkaran dan atasnya runcing.",
   "explain": "Tumpeng berbentuk kerucut.",
   "error": "tabung-kerucut-tertukar"
  },
  {
   "kind": "number",
   "prompt": "Berapa sisi datarnya?",
   "answer": "1",
   "hint": "Hanya ada di bagian alas.",
   "explain": "1 sisi datar berbentuk lingkaran.",
   "error": "salah-hitung-sisi-datar",
   "suffix": "sisi"
  },
  {
   "kind": "number",
   "prompt": "Berapa sisi lengkungnya?",
   "answer": "1",
   "hint": "Sisi yang meruncing ke atas.",
   "explain": "1 sisi lengkung.",
   "error": "salah-sisi-lengkung",
   "suffix": "sisi"
  }
 ],
 "conclusion": "Tumpeng berbentuk kerucut: 1 sisi datar lingkaran dan 1 sisi lengkung.",
 "visual": {
  "type": "solid",
  "solid": "kerucut"
 }
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Golongkan benda ini: buku tebal, jeruk, pipa, dadu. Mana yang punya sisi lengkung? Mana yang hanya punya sisi datar?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Pipa berbentuk ...",
   "options": [
    "kubus",
    "balok",
    "tabung",
    "kerucut",
    "bola"
   ],
   "answer": "tabung",
   "hint": "Panjang dan bulat, ujungnya lingkaran.",
   "explain": "Pipa berbentuk tabung.",
   "error": "salah-nama-bangun-ruang"
  },
  {
   "kind": "choice",
   "prompt": "Benda yang punya sisi lengkung adalah ...",
   "options": [
    "jeruk dan pipa",
    "buku tebal dan dadu",
    "jeruk dan dadu"
   ],
   "answer": "jeruk dan pipa",
   "hint": "Mana yang bisa menggelinding?",
   "explain": "Jeruk (bola) dan pipa (tabung) punya sisi lengkung.",
   "error": "salah-golongkan-bangun-ruang"
  },
  {
   "kind": "choice",
   "prompt": "Benda yang hanya punya sisi datar adalah ...",
   "options": [
    "buku tebal dan dadu",
    "jeruk dan pipa",
    "pipa dan dadu"
   ],
   "answer": "buku tebal dan dadu",
   "hint": "Mana yang tidak bisa menggelinding?",
   "explain": "Buku tebal (balok) dan dadu (kubus) hanya punya sisi datar.",
   "error": "salah-golongkan-bangun-ruang"
  }
 ],
 "conclusion": "Punya sisi lengkung: jeruk dan pipa. Hanya sisi datar: buku tebal dan dadu."
}
```
