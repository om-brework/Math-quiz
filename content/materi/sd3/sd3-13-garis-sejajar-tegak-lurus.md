---
id: sd3-13-garis-sejajar-tegak-lurus
judul: Garis Sejajar dan Tegak Lurus
jenjang: sd3
moe: "Primary 3 · Measurement and Geometry · Perpendicular and Parallel Lines"
prasyarat: [sd3-12-sudut]
durasi_menit: 35
---

## Kenapa belajar ini?

Lihat rel kereta api, garis-garis di buku tulis, atau pojok jendela. Semuanya memakai garis sejajar dan garis tegak lurus. Tukang bangunan, arsitek, dan pembuat peta selalu memakainya. Di materi ini kamu belajar mengenali dan menggambar kedua jenis garis itu di kertas berpetak.

## Analogi

Bayangkan dua jenis jalan.

- **Rel kereta api.** Dua batang relnya berjalan berdampingan. Jaraknya selalu sama, dari stasiun satu sampai stasiun berikutnya. Kedua rel **tidak pernah bertemu**. Kalau bertemu, keretanya bisa terguling! Inilah **garis sejajar**.

```visual
{"type": "lines", "relation": "parallel", "caption": "Seperti rel kereta: garis sejajar"}
```

- **Perempatan jalan yang rapi.** Dua jalan saling memotong dan membentuk pojok seperti pojok buku, yaitu **sudut siku-siku**. Inilah **garis tegak lurus**.

```visual
{"type": "lines", "relation": "perpendicular", "caption": "Seperti perempatan yang rapi: garis tegak lurus"}
```

Saat menggambar, tanyakan: apakah aku membuat rel kereta, atau perempatan?

## Konsep

### Garis tegak lurus

Dua garis **tegak lurus** kalau keduanya bertemu dan membentuk **sudut siku-siku**. Contoh: tepi atas dan tepi samping papan tulis, tiang bendera dan tanah lapangan.

Cara memeriksa: pakai alat siku dari kertas yang dilipat dua kali (dari materi Sudut). Kalau kedua garis tepat menempel sisi alat, garis itu tegak lurus.

Hati-hati: dua garis yang berpotongan belum tentu tegak lurus.

```visual
{"type": "lines", "relation": "intersecting", "caption": "Berpotongan, tetapi tidak membentuk siku-siku: bukan tegak lurus"}
```

### Garis sejajar

Dua garis **sejajar** kalau jaraknya selalu sama dan **tidak akan pernah bertemu**, walaupun diperpanjang terus. Contoh: dua rel kereta, garis-garis di buku tulis, sisi atas dan sisi bawah pintu.

Cara memeriksa: hitung jarak antara dua garis di dua tempat yang berbeda. Kalau jaraknya sama, garis itu sejajar.

```visual
{"type": "lines", "relation": "parallel", "rotate": 30, "caption": "Garis sejajar boleh miring. Jaraknya tetap sama."}
```

### Kertas berpetak dan langkah petak

Pada kertas berpetak, titik-titik pojok petak membantu kita menggambar dengan tepat. Setiap garis bisa dijelaskan dengan **langkah petak**: berapa petak ke kanan atau kiri, dan berapa petak ke atas atau bawah.

- **Garis sejajar**: pakai **langkah petak yang sama**, tetapi mulai dari titik lain. Seperti rel kedua yang mengikuti rel pertama.
- **Garis tegak lurus** pada garis mendatar adalah garis tegak (lurus ke atas atau ke bawah), dan sebaliknya.
- **Garis tegak lurus** pada garis miring "kanan 1, naik 1" adalah garis miring "kanan 1, turun 1".

Contoh garis mendatar AB dan garis tegak PQ yang tegak lurus:

```anim
{"type": "bangun", "titik": {"A": [0, 0], "B": [6, 0], "P": [3, 0], "Q": [3, 3]}, "sisi": [["A", "B", "\\text{6 petak}"], ["P", "Q", "\\text{3 petak}"]], "sudut": [{"di": "P", "dari": "B", "ke": "Q", "siku": true}], "langkah": [{"say": "Garis AB mendatar: 6 petak ke kanan.", "sisi": 1, "sorot": ["AB"]}, {"say": "Dari P, garis PQ naik lurus 3 petak, 0 petak ke kanan.", "sisi": 2, "sorot": ["PQ"]}, {"say": "Garis tegak dan garis mendatar membentuk sudut siku-siku. PQ tegak lurus AB.", "sisi": 2, "sudut": 1, "sorot": ["P"]}], "title": "Garis tegak lurus di kertas berpetak"}
```

Dan garis miring yang tegak lurus:

```anim
{"type": "bangun", "titik": {"K": [0, 0], "L": [2, 2], "M": [2, -2]}, "sisi": [["K", "L", "\\text{kanan 1, naik 1}"], ["K", "M", "\\text{kanan 1, turun 1}"]], "sudut": [{"di": "K", "dari": "M", "ke": "L", "siku": true}], "langkah": [{"say": "Garis KL: setiap langkah kanan 1, naik 1.", "sisi": 1, "sorot": ["KL"]}, {"say": "Garis KM: setiap langkah kanan 1, turun 1.", "sisi": 2, "sorot": ["KM"]}, {"say": "Keduanya membentuk sudut siku-siku di K, walaupun tidak ada yang berdiri tegak.", "sisi": 2, "sudut": 1, "sorot": ["K"]}], "title": "Garis miring yang tegak lurus"}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Mencari pasangan garis pada bangun

```anim
{"type": "bangun", "titik": {"A": [0, 3], "B": [4, 3], "C": [4, 0], "D": [0, 0]}, "sisi": [["A", "B", "\\text{4 petak}"], ["B", "C", "\\text{3 petak}"], ["C", "D"], ["D", "A"]], "sudut": [{"di": "A", "dari": "D", "ke": "B", "siku": true}, {"di": "B", "dari": "A", "ke": "C", "siku": true}, {"di": "C", "dari": "B", "ke": "D", "siku": true}, {"di": "D", "dari": "C", "ke": "A", "siku": true}], "langkah": [{"say": "Persegi panjang ABCD di kertas berpetak.", "sisi": 4}, {"say": "AB dan DC berhadapan.", "sisi": 4, "sorot": ["AB", "DC"]}, {"say": "AD dan BC berhadapan.", "sisi": 4, "sorot": ["AD", "BC"]}, {"say": "Di setiap pojok, dua sisi bertemu membentuk siku-siku.", "sisi": 4, "sudut": 4}], "title": "Persegi panjang ABCD"}
```

```soal
{
 "title": "Contoh 1",
 "text": "Perhatikan persegi panjang ABCD di atas. Sebutkan pasangan sisi yang sejajar dan pasangan sisi yang tegak lurus.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Cari sisi yang berhadapan. AB berhadapan dengan ...",
   "options": [
    "DC",
    "AD",
    "BC"
   ],
   "answer": "DC",
   "hint": "Sisi yang berhadapan tidak bertemu di pojok.",
   "explain": "AB berhadapan dengan DC. AD berhadapan dengan BC.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jarak AB ke DC di kiri berapa petak?",
   "answer": "3",
   "hint": "Hitung petak dari A turun ke D.",
   "explain": "3 petak. Di kanan, dari B ke C, juga 3 petak.",
   "error": "hitung-titik-bukan-jarak",
   "suffix": "petak"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Jaraknya sama di kiri dan kanan. Jadi AB dan DC ...",
   "options": [
    "Sejajar",
    "Tegak lurus"
   ],
   "answer": "Sejajar",
   "hint": "Jarak selalu sama berarti tidak pernah bertemu.",
   "explain": "AB sejajar DC, seperti rel kereta. Begitu juga AD dan BC.",
   "error": "sejajar-tegak-lurus-tertukar"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: AB dan AD bertemu di pojok A. Keduanya ...",
   "options": [
    "Tegak lurus",
    "Sejajar"
   ],
   "answer": "Tegak lurus",
   "hint": "Pojok persegi panjang adalah siku-siku.",
   "explain": "AB tegak lurus AD, seperti perempatan yang rapi.",
   "error": "sejajar-tegak-lurus-tertukar"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: ada berapa pasang sisi yang tegak lurus?",
   "answer": "4",
   "hint": "Satu pasang di setiap pojok.",
   "explain": "4 pasang: AB-AD, AB-BC, BC-DC, DC-AD. Dan 2 pasang sejajar.",
   "error": "salah-hitung-pojok",
   "suffix": "pasang"
  }
 ],
 "conclusion": "Sejajar: AB dan DC, AD dan BC. Tegak lurus: AB dan AD, AB dan BC, BC dan DC, DC dan AD."
}
```

### Contoh 2: Menggambar garis sejajar yang miring

```anim
{"type": "bangun", "titik": {"A": [0, 0], "B": [3, 3], "C": [4, -1]}, "sisi": [["A", "B", "\\text{kanan 3, naik 3}"]], "langkah": [{"say": "Garis AB dan titik C. Gambar garis melalui C yang sejajar dengan AB.", "sisi": 1, "sorot": ["C"]}], "title": "Soal contoh 2"}
```

```soal
{
 "title": "Contoh 2",
 "text": "Gambarlah garis melalui titik C yang sejajar dengan garis AB.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Hitung langkah petak AB. Dari A ke B, berapa petak ke kanan?",
   "answer": "3",
   "hint": "Hitung petak mendatar dari A sampai tepat di bawah B.",
   "explain": "3 petak ke kanan.",
   "error": "salah-langkah-petak",
   "suffix": "petak"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Dari A ke B, berapa petak ke atas?",
   "answer": "3",
   "hint": "Hitung petak tegak dari baris A sampai baris B.",
   "explain": "3 petak ke atas. Setiap langkahnya kanan 1, naik 1.",
   "error": "salah-langkah-petak",
   "suffix": "petak"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Dari C, kita menggambar dengan langkah ...",
   "options": [
    "Kanan 3, naik 3",
    "Kanan 3, turun 3",
    "Kanan 2, naik 1"
   ],
   "answer": "Kanan 3, naik 3",
   "hint": "Garis sejajar memakai langkah petak yang sama.",
   "explain": "Kanan 3, naik 3 dari C. Kita sampai di D, lalu hubungkan C dan D.",
   "error": "salah-langkah-petak"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: pada baris titik A, jarak dari A ke garis CD berapa petak?",
   "answer": "5",
   "hint": "Garis CD memotong baris A satu langkah setelah C.",
   "explain": "5 petak. Pada baris D, jarak AB ke D juga 5 petak. Sama, jadi sejajar.",
   "error": "hitung-titik-bukan-jarak",
   "suffix": "petak"
  }
 ],
 "conclusion": "Garis CD berjalan kanan 1, naik 1 sebanyak 3 kali dari C."
}
```

Setelah selesai, bandingkan dengan gambarmu:

```anim
{"type": "bangun", "titik": {"A": [0, 0], "B": [3, 3], "C": [4, -1], "D": [7, 2]}, "sisi": [["A", "B", "\\text{kanan 3, naik 3}"], ["C", "D", "\\text{kanan 3, naik 3}"]], "langkah": [{"say": "Garis AB: kanan 3, naik 3.", "sisi": 1, "sorot": ["AB"]}, {"say": "Dari C, langkah yang sama: kanan 3, naik 3. Sampai di D.", "sisi": 2, "sorot": ["CD"]}, {"say": "AB dan CD sejajar, seperti dua rel kereta.", "sisi": 2}], "title": "Hasil gambar"}
```

### Contoh 3: Menggambar garis tegak lurus pada garis miring

```anim
{"type": "bangun", "titik": {"A": [0, 0], "P": [2, 2], "B": [3, 3]}, "sisi": [["A", "B", "\\text{kanan 1, naik 1}"]], "langkah": [{"say": "Titik P ada pada garis AB. Gambar garis melalui P yang tegak lurus AB.", "sisi": 1, "sorot": ["P"]}], "title": "Soal contoh 3"}
```

```soal
{
 "title": "Contoh 3",
 "text": "Titik P ada pada garis AB. Gambarlah garis melalui P yang tegak lurus dengan AB.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Setiap langkah petak garis AB adalah ...",
   "options": [
    "Kanan 1, naik 1",
    "Kanan 1, turun 1",
    "Kanan 2, naik 1"
   ],
   "answer": "Kanan 1, naik 1",
   "hint": "Dari A, ikuti garis ke titik pojok petak berikutnya.",
   "explain": "Kanan 1, naik 1.",
   "error": "salah-langkah-petak"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Garis yang tegak lurus dengannya berjalan ...",
   "options": [
    "Kanan 1, turun 1",
    "Kanan 1, naik 1",
    "Lurus ke atas"
   ],
   "answer": "Kanan 1, turun 1",
   "hint": "Ingat aturan garis miring yang tegak lurus.",
   "explain": "\"Kanan 1, naik 1\" tegak lurus dengan \"kanan 1, turun 1\".",
   "error": "tegak-lurus-harus-berdiri"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Dari P, berapa kali melangkah \"kanan 1, turun 1\" sampai di baris titik A?",
   "answer": "2",
   "hint": "P ada 2 petak di atas baris A.",
   "explain": "2 kali. Kita sampai di Q, lalu hubungkan P dan Q.",
   "error": "salah-langkah-petak",
   "suffix": "kali"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: pojok alat siku di P, satu sisi di atas AB. Garis PQ ...",
   "options": [
    "Menempel tepat sisi alat yang lain",
    "Tersembunyi di bawah alat"
   ],
   "answer": "Menempel tepat sisi alat yang lain",
   "hint": "Kalau tegak lurus, sudutnya pas dengan alat.",
   "explain": "PQ menempel tepat, jadi sudutnya siku-siku.",
   "error": "salah-banding-siku"
  }
 ],
 "conclusion": "Garis PQ berjalan kanan 1, turun 1 dari P."
}
```

Setelah selesai, bandingkan dengan gambarmu:

```anim
{"type": "bangun", "titik": {"A": [0, 0], "P": [2, 2], "B": [3, 3], "Q": [4, 0]}, "sisi": [["A", "B"], ["P", "Q", "\\text{kanan 1, turun 1}"]], "sudut": [{"di": "P", "dari": "Q", "ke": "B", "siku": true}], "langkah": [{"say": "Dari P: kanan 1 turun 1, dua kali. Sampai di Q.", "sisi": 2, "sorot": ["PQ"]}, {"say": "Sudut di P siku-siku. PQ tegak lurus AB, walaupun miring.", "sisi": 2, "sudut": 1, "sorot": ["P"]}], "title": "Hasil gambar"}
```

### Contoh 4: Soal cerita

```anim
{"type": "bangun", "titik": {"A": [0, 2], "B": [4, 2], "C": [0, 0]}, "sisi": [["A", "B", "\\text{4 petak}"], ["A", "C", "\\text{2 petak}"]], "langkah": [{"say": "Bedeng pertama AB dan selang AC.", "sisi": 2}], "title": "Rencana kebun"}
```

```soal
{
 "title": "Contoh 4",
 "text": "Pak Putu menggambar rencana kebun di kertas berpetak. Bedeng pertama digambar dari A ke B, 4 petak ke kanan. Bedeng kedua harus sejajar dengan bedeng pertama dan sama panjang. Bedeng kedua mulai dari C, yaitu 2 petak tepat di bawah A. Selang air dipasang dari A ke C. a) Di mana ujung bedeng kedua (D)? b) Apakah selang AC tegak lurus dengan bedeng AB?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Langkah petak AB adalah ...",
   "options": [
    "4 petak ke kanan, 0 petak ke atas",
    "4 petak ke kanan, 2 petak ke bawah",
    "2 petak ke kanan"
   ],
   "answer": "4 petak ke kanan, 0 petak ke atas",
   "hint": "AB adalah garis mendatar.",
   "explain": "4 petak ke kanan saja. Garis mendatar.",
   "error": "salah-langkah-petak"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Bedeng kedua sejajar dan sama panjang. Titik D ada di ...",
   "options": [
    "4 petak di kanan C",
    "4 petak di atas C",
    "2 petak di kanan C"
   ],
   "answer": "4 petak di kanan C",
   "hint": "Ulangi langkah petak AB dari C.",
   "explain": "D ada 4 petak di kanan C, tepat 2 petak di bawah B.",
   "error": "salah-langkah-petak"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: AC garis tegak, AB garis mendatar. Apakah AC tegak lurus AB?",
   "options": [
    "Ya, tegak lurus",
    "Tidak, sejajar"
   ],
   "answer": "Ya, tegak lurus",
   "hint": "Garis tegak dan garis mendatar yang bertemu membentuk sudut apa?",
   "explain": "Siku-siku, jadi AC tegak lurus AB.",
   "error": "sejajar-tegak-lurus-tertukar"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: jarak AB ke CD di sisi kanan (dari B ke D) berapa petak?",
   "answer": "2",
   "hint": "D tepat di bawah B.",
   "explain": "2 petak, sama dengan di kiri. Jadi AB sejajar CD.",
   "error": "hitung-titik-bukan-jarak",
   "suffix": "petak"
  }
 ],
 "conclusion": "a) D ada 4 petak di kanan C, tepat 2 petak di bawah B. b) Ya, AC tegak lurus AB."
}
```

Setelah selesai, bandingkan dengan gambarmu:

```anim
{"type": "bangun", "titik": {"A": [0, 2], "B": [4, 2], "C": [0, 0], "D": [4, 0]}, "sisi": [["A", "B", "\\text{4 petak}"], ["A", "C", "\\text{2 petak}"], ["C", "D", "\\text{4 petak}"]], "sudut": [{"di": "A", "dari": "C", "ke": "B", "siku": true}], "langkah": [{"say": "Dari C, 4 petak ke kanan: titik D.", "sisi": 3, "sorot": ["CD"]}, {"say": "AC tegak dan AB mendatar: siku-siku di A.", "sisi": 3, "sudut": 1, "sorot": ["A"]}], "title": "Hasil gambar"}
```

## Kesalahan yang sering terjadi

- **Menganggap garis yang hampir sejajar itu sejajar.** Dua garis yang jaraknya makin dekat pasti akan bertemu kalau diperpanjang. Hitung jarak di dua tempat. Harus sama.
- **Menganggap semua garis yang berpotongan tegak lurus.** Dua garis yang bertemu belum tentu membentuk siku-siku. Selalu periksa dengan alat siku.
- **Mengira garis tegak lurus harus berdiri tegak.** Garis miring PQ pada contoh 3 juga tegak lurus dengan AB. "Tegak lurus" berarti membentuk siku-siku dengan garis lain, bukan berarti berdiri.
- **Salah menghitung langkah petak.** Menggambar garis sejajar dengan langkah "kanan 2, naik 1" padahal garis aslinya "kanan 1, naik 1". Hitung ulang langkah petak sebelum menggambar.

## Ringkasan

- Garis sejajar: jaraknya selalu sama dan tidak pernah bertemu, seperti rel kereta.
- Garis tegak lurus: bertemu membentuk sudut siku-siku, seperti perempatan yang rapi.
- Di kertas berpetak, garis sejajar memakai langkah petak yang sama dari titik lain.
- Garis mendatar tegak lurus dengan garis tegak. Garis "kanan 1, naik 1" tegak lurus dengan garis "kanan 1, turun 1".
- Cek sejajar dengan menghitung jarak di dua tempat. Cek tegak lurus dengan alat siku.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Huruf H terdiri dari dua garis tegak dan satu garis tengah yang mendatar. Berapa pasang garis yang sejajar? Berapa pasang yang tegak lurus?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Berapa pasang garis yang sejajar?",
   "answer": "1",
   "hint": "Garis mana yang berdampingan dan tidak pernah bertemu?",
   "explain": "1 pasang: dua garis tegak.",
   "error": "sejajar-tegak-lurus-tertukar",
   "suffix": "pasang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Berapa pasang garis yang tegak lurus?",
   "answer": "2",
   "hint": "Garis tengah bertemu dengan garis tegak mana saja?",
   "explain": "2 pasang: garis tengah dengan masing-masing garis tegak.",
   "error": "sejajar-tegak-lurus-tertukar",
   "suffix": "pasang"
  }
 ],
 "conclusion": "Huruf H: 1 pasang sejajar dan 2 pasang tegak lurus."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Pada sebuah persegi, berapa pasang sisi yang sejajar? Berapa pasang sisi yang tegak lurus?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Berapa pasang sisi yang sejajar?",
   "answer": "2",
   "hint": "Pasangkan sisi yang berhadapan.",
   "explain": "2 pasang: atas dengan bawah, kiri dengan kanan.",
   "error": "sejajar-tegak-lurus-tertukar",
   "suffix": "pasang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Berapa pasang sisi yang tegak lurus?",
   "answer": "4",
   "hint": "Satu pasang di setiap pojok.",
   "explain": "4 pasang.",
   "error": "salah-hitung-pojok",
   "suffix": "pasang"
  }
 ],
 "conclusion": "Persegi: 2 pasang sejajar dan 4 pasang tegak lurus.",
 "visual": {
  "type": "shape",
  "shape": "persegi"
 }
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Garis PQ di kertas berpetak berjalan 3 petak ke kanan dan 1 petak ke atas. Kamu ingin menggambar garis yang sejajar dengan PQ, mulai dari titik R. Bagaimana caranya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Garis sejajar memakai langkah petak yang ...",
   "options": [
    "sama dengan PQ",
    "berbeda dari PQ"
   ],
   "answer": "sama dengan PQ",
   "hint": "Ingat rel kedua yang mengikuti rel pertama.",
   "explain": "Langkah petaknya harus sama.",
   "error": "salah-langkah-petak"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Dari R, berapa petak ke kanan?",
   "answer": "3",
   "hint": "Sama seperti PQ.",
   "explain": "3 petak ke kanan.",
   "error": "salah-langkah-petak",
   "suffix": "petak"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Lalu berapa petak ke atas?",
   "answer": "1",
   "hint": "Sama seperti PQ.",
   "explain": "1 petak ke atas. Hubungkan dengan penggaris.",
   "error": "salah-langkah-petak",
   "suffix": "petak"
  }
 ],
 "conclusion": "Dari R, hitung 3 petak ke kanan dan 1 petak ke atas, lalu hubungkan dengan penggaris."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Garis KL berjalan 2 petak ke kanan dan 2 petak ke atas. Garis yang tegak lurus dengan KL dan melalui K berjalan bagaimana?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Setiap langkah KL adalah kanan 1, naik 1. Langkah yang tegak lurus adalah ...",
   "options": [
    "Kanan 1, turun 1",
    "Kanan 1, naik 1",
    "Kanan 2, naik 1"
   ],
   "answer": "Kanan 1, turun 1",
   "hint": "Ingat aturan garis miring yang tegak lurus.",
   "explain": "\"Kanan 1, naik 1\" tegak lurus dengan \"kanan 1, turun 1\".",
   "error": "tegak-lurus-harus-berdiri"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Jadi garisnya berjalan ...",
   "options": [
    "2 petak ke kanan dan 2 petak ke bawah",
    "2 petak ke kanan dan 2 petak ke atas",
    "2 petak ke kanan saja"
   ],
   "answer": "2 petak ke kanan dan 2 petak ke bawah",
   "hint": "Ulangi \"kanan 1, turun 1\" dua kali.",
   "explain": "2 petak ke kanan dan 2 petak ke bawah (atau 2 ke kiri dan 2 ke atas).",
   "error": "salah-langkah-petak"
  }
 ],
 "conclusion": "2 petak ke kanan dan 2 petak ke bawah (atau 2 petak ke kiri dan 2 petak ke atas)."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Sejajar atau tegak lurus? a) dua rel kereta api, b) tiang bendera dan tanah lapangan, c) garis-garis pada buku tulis bergaris.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: a) Dua rel kereta api.",
   "options": [
    "Sejajar",
    "Tegak lurus"
   ],
   "answer": "Sejajar",
   "hint": "Apakah keduanya pernah bertemu?",
   "explain": "Sejajar.",
   "error": "sejajar-tegak-lurus-tertukar"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: b) Tiang bendera dan tanah lapangan.",
   "options": [
    "Sejajar",
    "Tegak lurus"
   ],
   "answer": "Tegak lurus",
   "hint": "Tiang bertemu tanah membentuk pojok seperti apa?",
   "explain": "Tegak lurus.",
   "error": "sejajar-tegak-lurus-tertukar"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: c) Garis-garis pada buku tulis bergaris.",
   "options": [
    "Sejajar",
    "Tegak lurus"
   ],
   "answer": "Sejajar",
   "hint": "Jaraknya selalu sama.",
   "explain": "Sejajar.",
   "error": "sejajar-tegak-lurus-tertukar"
  }
 ],
 "conclusion": "a) sejajar, b) tegak lurus, c) sejajar."
}
```
