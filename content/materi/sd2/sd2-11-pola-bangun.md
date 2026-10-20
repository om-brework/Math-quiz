---
id: sd2-11-pola-bangun
judul: Pola Bangun Datar
jenjang: sd2
moe: "Primary 2 · Measurement and Geometry · Patterns"
prasyarat: [sd1-10-bangun-datar]
durasi_menit: 25
---

## Kenapa belajar ini?

Lihat lantai ubin, motif kain batik, atau hiasan bendera saat 17 Agustus. Semuanya punya pola yang berulang. Kalau kamu tahu polanya, kamu bisa menebak bagian berikutnya.

## Analogi

Bayangkan kamu membuat **kalung manik-manik**. Kamu memasang beberapa manik dengan urutan tertentu, lalu mengulang urutan yang sama terus-menerus.

```visual
{"type": "shapes", "items": [{"shape": "lingkaran", "color": "merah"}, {"shape": "lingkaran", "color": "biru"}, {"shape": "lingkaran", "color": "biru"}, {"shape": "lingkaran", "color": "merah"}, {"shape": "lingkaran", "color": "biru"}, {"shape": "lingkaran", "color": "biru"}, {"shape": "lingkaran", "color": "merah"}, {"shape": "lingkaran", "color": "biru"}, {"shape": "lingkaran", "color": "biru"}], "caption": "Kalung manik: merah, biru, biru, lalu diulang"}
```

Urutan kecil yang diulang itu disebut **unit ulang**. Pada kalung di atas, unit ulangnya merah, biru, biru.

Kalau kamu tahu unit ulangnya, kamu bisa meneruskan kalung sepanjang apa pun.

## Konsep

### Sifat yang bisa berubah dalam pola

Bangun dalam pola bisa berbeda karena:

- **Bentuk**: segitiga, persegi, lingkaran, persegi panjang.
- **Ukuran**: besar atau kecil.
- **Warna**: merah, biru, kuning, dan lainnya.
- **Arah**: menghadap ke atas, kanan, bawah, atau kiri.

Pola bisa memakai **satu sifat** atau **dua sifat** sekaligus.

```visual
{"type": "shapes", "items": [{"shape": "persegi", "color": "hijau", "size": "big"}, {"shape": "persegi", "color": "hijau", "size": "small"}, {"shape": "persegi", "color": "hijau", "size": "big"}, {"shape": "persegi", "color": "hijau", "size": "small"}, {"shape": "persegi", "color": "hijau", "size": "big"}, {"shape": "persegi", "color": "hijau", "size": "small"}], "caption": "Pola satu sifat: ukuran (besar, kecil)"}
```

### Mencari unit ulang

1. Lihat bangun pertama.
2. Cari kapan bangun pertama muncul lagi **dengan semua sifat yang sama**.
3. Bangun-bangun sebelum itu adalah unit ulangnya.
4. Cek: apakah unit ulang benar-benar terulang di sepanjang pola?

### Membuat pola sendiri

Pilih satu atau dua sifat. Susun unit ulang. Ulangi minimal tiga kali, supaya polanya terlihat jelas.

Contoh pola dengan dua sifat (bentuk dan warna):

```visual
{"type": "shapes", "items": [{"shape": "persegi", "color": "merah"}, {"shape": "lingkaran", "color": "kuning"}, {"shape": "persegi", "color": "merah"}, {"shape": "lingkaran", "color": "kuning"}, {"shape": "persegi", "color": "merah"}, {"shape": "lingkaran", "color": "kuning"}], "caption": "Persegi merah, lingkaran kuning, diulang tiga kali"}
```

### Cara menulis pola di sini

Arah ditulis dengan panah. Contoh, segitiga yang ujungnya menghadap ke atas ditulis ↑.

```visual
{"type": "shapes", "items": [{"shape": "segitiga", "color": "biru", "rotate": 0}, {"shape": "segitiga", "color": "biru", "rotate": 90}, {"shape": "segitiga", "color": "biru", "rotate": 180}, {"shape": "segitiga", "color": "biru", "rotate": 270}], "caption": "Segitiga menghadap ↑, →, ↓, ←"}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Pola satu sifat (bentuk)

```soal
{
 "title": "Contoh 1",
 "text": "Lanjutkan pola: lingkaran, segitiga, persegi, lingkaran, segitiga, persegi, ..., ...",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Apa bangun pertama?",
   "options": [
    "lingkaran",
    "segitiga",
    "persegi"
   ],
   "answer": "lingkaran",
   "hint": "Lihat bangun paling kiri.",
   "explain": "Bangun pertama adalah lingkaran.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Lingkaran muncul lagi di urutan ke berapa?",
   "answer": "4",
   "hint": "Hitung dari kiri sampai bertemu lingkaran lagi.",
   "explain": "Lingkaran muncul lagi di urutan ke-4.",
   "error": "unit-ulang-terlalu-cepat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Ada berapa bangun dalam satu unit ulang?",
   "answer": "3",
   "hint": "Bangun-bangun sebelum lingkaran kedua.",
   "explain": "Lingkaran, segitiga, persegi: 3 bangun.",
   "error": "unit-ulang-terlalu-cepat",
   "suffix": "bangun"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Bangun ke-7 adalah ...",
   "options": [
    "lingkaran",
    "segitiga",
    "persegi"
   ],
   "answer": "lingkaran",
   "hint": "Unit kedua selesai di urutan ke-6. Unit baru dimulai.",
   "explain": "Unit baru dimulai dengan lingkaran.",
   "error": "salah-lanjut-pola-bangun"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Bangun ke-8 adalah ...",
   "options": [
    "lingkaran",
    "segitiga",
    "persegi"
   ],
   "answer": "segitiga",
   "hint": "Bangun kedua dalam unit.",
   "explain": "Setelah lingkaran datang segitiga.",
   "error": "salah-lanjut-pola-bangun"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: kelompokkan per unit. Apakah setiap unit sama?",
   "options": [
    "Ya, setiap unit lingkaran, segitiga, persegi",
    "Tidak"
   ],
   "answer": "Ya, setiap unit lingkaran, segitiga, persegi",
   "hint": "Tulis (lingkaran, segitiga, persegi) berulang.",
   "explain": "Setiap unit sama, jadi jawabannya benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Dua bangun berikutnya: lingkaran, segitiga.",
 "visual": {
  "type": "shapes",
  "items": [
   {
    "shape": "lingkaran",
    "color": "kuning"
   },
   {
    "shape": "segitiga",
    "color": "hijau"
   },
   {
    "shape": "persegi",
    "color": "biru"
   },
   {
    "shape": "lingkaran",
    "color": "kuning"
   },
   {
    "shape": "segitiga",
    "color": "hijau"
   },
   {
    "shape": "persegi",
    "color": "biru"
   }
  ],
  "missing": 6
 }
}
```

### Contoh 2: Pola arah

```soal
{
 "title": "Contoh 2",
 "text": "Sebuah segitiga diputar. Polanya: ↑ → ↓ ← ↑ → ... Ke mana arah segitiga ke-7 dan ke-10?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: ↑ muncul lagi di urutan ke-5. Ada berapa bangun dalam unit ulang?",
   "answer": "4",
   "hint": "Hitung bangun sebelum ↑ yang kedua.",
   "explain": "Unit ulangnya ↑ → ↓ ←, ada 4.",
   "error": "unit-ulang-terlalu-cepat",
   "suffix": "bangun"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Bagaimana segitiga berubah setiap langkah?",
   "options": [
    "Berputar seperempat putaran searah jarum jam",
    "Berputar setengah putaran",
    "Tidak berubah"
   ],
   "answer": "Berputar seperempat putaran searah jarum jam",
   "hint": "Dari ↑ ke →, lalu ke ↓.",
   "explain": "Setiap langkah berputar seperempat putaran searah jarum jam.",
   "error": "salah-lanjut-pola-bangun"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Ke mana arah segitiga ke-7?",
   "options": [
    "↑",
    "→",
    "↓",
    "←"
   ],
   "answer": "↓",
   "hint": "Unit kedua dimulai di urutan ke-5. Urutan ke-7 adalah bangun ketiga di unit itu.",
   "explain": "Urutan 5, 6, 7: ↑ → ↓. Jadi ke bawah.",
   "error": "salah-hitung-urutan-pola"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Ke mana arah segitiga ke-10?",
   "options": [
    "↑",
    "→",
    "↓",
    "←"
   ],
   "answer": "→",
   "hint": "Unit ketiga mulai di urutan ke-9.",
   "explain": "Urutan 9 adalah ↑, urutan 10 adalah →.",
   "error": "salah-hitung-urutan-pola"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: unit ketiga mulai di urutan ke berapa?",
   "answer": "9",
   "hint": "Setiap unit 4 bangun: 1–4, 5–8, ...",
   "explain": "Unit ketiga mulai di urutan ke-9 dengan ↑, jadi ke-10 adalah →. Cocok.",
   "error": "salah-hitung-urutan-pola"
  }
 ],
 "conclusion": "Segitiga ke-7 menghadap ke bawah (↓). Segitiga ke-10 menghadap ke kanan (→).",
 "visual": {
  "type": "shapes",
  "items": [
   {
    "shape": "segitiga",
    "color": "biru",
    "rotate": 0
   },
   {
    "shape": "segitiga",
    "color": "biru",
    "rotate": 90
   },
   {
    "shape": "segitiga",
    "color": "biru",
    "rotate": 180
   },
   {
    "shape": "segitiga",
    "color": "biru",
    "rotate": 270
   },
   {
    "shape": "segitiga",
    "color": "biru",
    "rotate": 0
   },
   {
    "shape": "segitiga",
    "color": "biru",
    "rotate": 90
   }
  ],
  "missing": 6
 }
}
```

### Contoh 3: Pola dua sifat dengan bagian hilang

```soal
{
 "title": "Contoh 3",
 "text": "Lengkapi bagian yang hilang: persegi merah, persegi biru, lingkaran merah, lingkaran biru, persegi merah, ..., lingkaran merah, ...",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Perhatikan bentuk. Bentuk berganti setiap berapa bangun?",
   "options": [
    "Setiap 1 bangun",
    "Setiap 2 bangun",
    "Tidak berganti"
   ],
   "answer": "Setiap 2 bangun",
   "hint": "Persegi, persegi, lingkaran, lingkaran.",
   "explain": "Bentuk berganti setiap 2 bangun.",
   "error": "pola-satu-sifat-saja"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Perhatikan warna. Warna berganti setiap berapa bangun?",
   "options": [
    "Setiap 1 bangun",
    "Setiap 2 bangun",
    "Tidak berganti"
   ],
   "answer": "Setiap 1 bangun",
   "hint": "Merah, biru, merah, biru.",
   "explain": "Warna berganti setiap 1 bangun.",
   "error": "pola-satu-sifat-saja"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Persegi merah muncul lagi di urutan ke-5. Ada berapa bangun dalam unit ulang?",
   "answer": "4",
   "hint": "Hitung bangun sebelum persegi merah yang kedua.",
   "explain": "Unit ulangnya 4 bangun.",
   "error": "unit-ulang-terlalu-cepat",
   "suffix": "bangun"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Bangun ke-6 sama dengan bangun ke-2. Bangun ke-6 adalah ...",
   "options": [
    "persegi biru",
    "lingkaran biru",
    "persegi merah"
   ],
   "answer": "persegi biru",
   "hint": "Lihat bangun kedua dalam pola.",
   "explain": "Urutan ke-6 = urutan ke-2 = persegi biru.",
   "error": "pola-satu-sifat-saja"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Bangun ke-8 sama dengan bangun ke-4. Bangun ke-8 adalah ...",
   "options": [
    "lingkaran merah",
    "lingkaran biru",
    "persegi biru"
   ],
   "answer": "lingkaran biru",
   "hint": "Lihat bangun keempat dalam pola.",
   "explain": "Urutan ke-8 = urutan ke-4 = lingkaran biru.",
   "error": "pola-satu-sifat-saja"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: sifat apa saja yang harus dicek?",
   "options": [
    "Bentuk dan warna",
    "Warna saja",
    "Bentuk saja"
   ],
   "answer": "Bentuk dan warna",
   "hint": "Pola ini memakai dua sifat.",
   "explain": "Bentuk dan warna sama-sama cocok. Benar.",
   "error": "pola-satu-sifat-saja"
  }
 ],
 "conclusion": "Bagian yang hilang: persegi biru dan lingkaran biru.",
 "visual": {
  "type": "shapes",
  "items": [
   {
    "shape": "persegi",
    "color": "merah"
   },
   {
    "shape": "persegi",
    "color": "biru"
   },
   {
    "shape": "lingkaran",
    "color": "merah"
   },
   {
    "shape": "lingkaran",
    "color": "biru"
   },
   {
    "shape": "persegi",
    "color": "merah"
   },
   {
    "shape": "persegi",
    "color": "biru"
   },
   {
    "shape": "lingkaran",
    "color": "merah"
   }
  ],
  "missing": 5
 }
}
```

### Contoh 4: Soal cerita

```soal
{
 "title": "Contoh 4",
 "text": "Rina menempel bendera segitiga di tali untuk lomba 17 Agustus. Urutannya: besar merah, kecil putih, kecil putih, besar merah, kecil putih, kecil putih, dan seterusnya. Seperti apa bendera ke-11?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Sifat apa yang berubah?",
   "options": [
    "Ukuran dan warna",
    "Bentuk saja",
    "Arah saja"
   ],
   "answer": "Ukuran dan warna",
   "hint": "Semua bendera segitiga. Apa yang berbeda?",
   "explain": "Ukuran (besar, kecil) dan warna (merah, putih).",
   "error": "pola-satu-sifat-saja"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Besar merah muncul lagi di urutan ke-4. Ada berapa bendera dalam unit ulang?",
   "answer": "3",
   "hint": "Jangan berhenti di bendera kedua. Lihat sampai besar merah muncul lagi.",
   "explain": "Unit ulangnya besar merah, kecil putih, kecil putih: 3 bendera.",
   "error": "unit-ulang-terlalu-cepat",
   "suffix": "bendera"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Unit 1 berisi urutan 1–3, unit 2 urutan 4–6. Bendera ke-11 ada di unit ke berapa?",
   "answer": "4",
   "hint": "Unit 3 urutan 7–9, lalu unit berikutnya.",
   "explain": "Unit 4 berisi urutan 10–12. Jadi bendera ke-11 di unit 4.",
   "error": "salah-hitung-urutan-pola"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Bendera ke-11 adalah bendera ke berapa di dalam unit 4?",
   "answer": "2",
   "hint": "Unit 4 dimulai di urutan ke-10.",
   "explain": "10 adalah yang pertama, 11 yang kedua.",
   "error": "salah-hitung-urutan-pola"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Jadi bendera ke-11 adalah ...",
   "options": [
    "besar merah",
    "kecil putih",
    "besar putih"
   ],
   "answer": "kecil putih",
   "hint": "Bendera kedua dalam unit.",
   "explain": "Bendera kedua dalam unit adalah kecil putih.",
   "error": "salah-lanjut-pola-bangun"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: bendera ke-10 adalah ...",
   "options": [
    "besar merah",
    "kecil putih"
   ],
   "answer": "besar merah",
   "hint": "Bendera ke-10 memulai unit 4.",
   "explain": "Ke-10 besar merah, jadi ke-11 kecil putih. Cocok.",
   "error": "salah-hitung-urutan-pola"
  }
 ],
 "conclusion": "Bendera ke-11 adalah bendera kecil berwarna putih.",
 "visual": {
  "type": "shapes",
  "items": [
   {
    "shape": "segitiga",
    "color": "merah",
    "size": "big"
   },
   {
    "shape": "segitiga",
    "color": "putih",
    "size": "small"
   },
   {
    "shape": "segitiga",
    "color": "putih",
    "size": "small"
   },
   {
    "shape": "segitiga",
    "color": "merah",
    "size": "big"
   },
   {
    "shape": "segitiga",
    "color": "putih",
    "size": "small"
   },
   {
    "shape": "segitiga",
    "color": "putih",
    "size": "small"
   }
  ]
 }
}
```

## Kesalahan yang sering terjadi

- **Menentukan unit ulang terlalu cepat.** Melihat "besar merah, kecil putih" lalu mengira unitnya 2 bangun. Lihat terus sampai bangun pertama muncul lagi. Pada contoh 4, unitnya 3 bangun.
- **Hanya melihat satu sifat.** Pada contoh 3, hanya memperhatikan warna, lalu mengisi "lingkaran biru" di urutan ke-6. Warnanya benar, tetapi bentuknya salah. Cek setiap sifat.
- **Salah arah putaran.** Pada pola ↑ → ↓ ←, mengisi ↑ setelah ↓. Lihat lagi: setiap langkah berputar seperempat ke arah yang sama.
- **Salah menghitung urutan.** Menebak bendera ke-11 tanpa menulis nomor. Tulis nomor urutan atau kelompokkan per unit.

## Ringkasan

- Pola adalah susunan yang berulang, seperti kalung manik-manik.
- Bagian yang diulang disebut unit ulang.
- Sifat yang bisa berubah: bentuk, ukuran, warna, arah.
- Cari unit ulang: lihat kapan bangun pertama muncul lagi dengan semua sifat yang sama.
- Pola dua sifat: periksa setiap sifat satu per satu.
- Untuk urutan jauh, kelompokkan per unit.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Lanjutkan pola: besar, kecil, kecil, besar, kecil, kecil, ...",
 "steps": [
  {
   "kind": "number",
   "prompt": "Ada berapa bangun dalam unit ulang?",
   "answer": "3",
   "hint": "Lihat kapan bangun besar muncul lagi.",
   "explain": "Unit ulangnya besar, kecil, kecil.",
   "error": "unit-ulang-terlalu-cepat",
   "suffix": "bangun"
  },
  {
   "kind": "choice",
   "prompt": "Bangun berikutnya adalah ...",
   "options": [
    "besar",
    "kecil"
   ],
   "answer": "besar",
   "hint": "Unit kedua sudah selesai.",
   "explain": "Unit baru dimulai dengan besar.",
   "error": "salah-lanjut-pola-bangun"
  }
 ],
 "conclusion": "Bangun berikutnya besar.",
 "visual": {
  "type": "shapes",
  "items": [
   {
    "shape": "lingkaran",
    "color": "ungu",
    "size": "big"
   },
   {
    "shape": "lingkaran",
    "color": "ungu",
    "size": "small"
   },
   {
    "shape": "lingkaran",
    "color": "ungu",
    "size": "small"
   },
   {
    "shape": "lingkaran",
    "color": "ungu",
    "size": "big"
   },
   {
    "shape": "lingkaran",
    "color": "ungu",
    "size": "small"
   },
   {
    "shape": "lingkaran",
    "color": "ungu",
    "size": "small"
   }
  ],
  "missing": 6
 }
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Lanjutkan pola: segitiga, persegi, lingkaran, lingkaran, segitiga, persegi, lingkaran, lingkaran, ...",
 "steps": [
  {
   "kind": "number",
   "prompt": "Ada berapa bangun dalam unit ulang?",
   "answer": "4",
   "hint": "Segitiga muncul lagi di urutan ke berapa?",
   "explain": "Unit ulangnya segitiga, persegi, lingkaran, lingkaran: 4 bangun.",
   "error": "unit-ulang-terlalu-cepat",
   "suffix": "bangun"
  },
  {
   "kind": "choice",
   "prompt": "Bangun berikutnya adalah ...",
   "options": [
    "segitiga",
    "persegi",
    "lingkaran"
   ],
   "answer": "segitiga",
   "hint": "Dua unit sudah lengkap.",
   "explain": "Unit ketiga dimulai dengan segitiga.",
   "error": "salah-lanjut-pola-bangun"
  }
 ],
 "conclusion": "Bangun berikutnya segitiga.",
 "visual": {
  "type": "shapes",
  "items": [
   {
    "shape": "segitiga",
    "color": "merah"
   },
   {
    "shape": "persegi",
    "color": "biru"
   },
   {
    "shape": "lingkaran",
    "color": "kuning"
   },
   {
    "shape": "lingkaran",
    "color": "kuning"
   },
   {
    "shape": "segitiga",
    "color": "merah"
   },
   {
    "shape": "persegi",
    "color": "biru"
   },
   {
    "shape": "lingkaran",
    "color": "kuning"
   },
   {
    "shape": "lingkaran",
    "color": "kuning"
   }
  ],
  "missing": 8
 }
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Lanjutkan pola arah: → ↓ ← ↑ → ↓ ..., ...",
 "steps": [
  {
   "kind": "number",
   "prompt": "Ada berapa arah dalam unit ulang?",
   "answer": "4",
   "hint": "→ muncul lagi di urutan ke berapa?",
   "explain": "Unit ulangnya → ↓ ← ↑.",
   "error": "unit-ulang-terlalu-cepat"
  },
  {
   "kind": "choice",
   "prompt": "Arah ke-7 adalah ...",
   "options": [
    "→",
    "↓",
    "←",
    "↑"
   ],
   "answer": "←",
   "hint": "Berputar seperempat putaran searah jarum jam dari ↓.",
   "explain": "Setelah ↓ datang ←.",
   "error": "salah-lanjut-pola-bangun"
  },
  {
   "kind": "choice",
   "prompt": "Arah ke-8 adalah ...",
   "options": [
    "→",
    "↓",
    "←",
    "↑"
   ],
   "answer": "↑",
   "hint": "Putar seperempat lagi dari ←.",
   "explain": "Setelah ← datang ↑.",
   "error": "salah-lanjut-pola-bangun"
  }
 ],
 "conclusion": "Dua arah berikutnya: ←, ↑.",
 "visual": {
  "type": "shapes",
  "items": [
   {
    "shape": "segitiga",
    "color": "biru",
    "rotate": 90
   },
   {
    "shape": "segitiga",
    "color": "biru",
    "rotate": 180
   },
   {
    "shape": "segitiga",
    "color": "biru",
    "rotate": 270
   },
   {
    "shape": "segitiga",
    "color": "biru",
    "rotate": 0
   },
   {
    "shape": "segitiga",
    "color": "biru",
    "rotate": 90
   },
   {
    "shape": "segitiga",
    "color": "biru",
    "rotate": 180
   }
  ],
  "missing": 6
 }
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Lengkapi: persegi besar kuning, persegi kecil hijau, lingkaran besar kuning, lingkaran kecil hijau, persegi besar kuning, ..., ...",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Sifat mana yang berganti setiap 2 bangun?",
   "options": [
    "Bentuk",
    "Ukuran",
    "Warna"
   ],
   "answer": "Bentuk",
   "hint": "Persegi, persegi, lingkaran, lingkaran.",
   "explain": "Bentuk berganti setiap 2 bangun. Ukuran dan warna berganti setiap 1 bangun.",
   "error": "pola-satu-sifat-saja"
  },
  {
   "kind": "choice",
   "prompt": "Bangun ke-6 adalah ...",
   "options": [
    "persegi kecil hijau",
    "lingkaran kecil hijau",
    "persegi besar kuning"
   ],
   "answer": "persegi kecil hijau",
   "hint": "Bangun ke-6 sama dengan bangun ke-2.",
   "explain": "Persegi kecil hijau.",
   "error": "pola-satu-sifat-saja"
  },
  {
   "kind": "choice",
   "prompt": "Bangun ke-7 adalah ...",
   "options": [
    "lingkaran besar kuning",
    "persegi besar kuning",
    "lingkaran kecil hijau"
   ],
   "answer": "lingkaran besar kuning",
   "hint": "Bangun ke-7 sama dengan bangun ke-3.",
   "explain": "Lingkaran besar kuning.",
   "error": "pola-satu-sifat-saja"
  }
 ],
 "conclusion": "Bagian yang hilang: persegi kecil hijau, lingkaran besar kuning.",
 "visual": {
  "type": "shapes",
  "items": [
   {
    "shape": "persegi",
    "color": "kuning",
    "size": "big"
   },
   {
    "shape": "persegi",
    "color": "hijau",
    "size": "small"
   },
   {
    "shape": "lingkaran",
    "color": "kuning",
    "size": "big"
   },
   {
    "shape": "lingkaran",
    "color": "hijau",
    "size": "small"
   },
   {
    "shape": "persegi",
    "color": "kuning",
    "size": "big"
   }
  ],
  "missing": 5
 }
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Dayu membuat pola sendiri dengan dua sifat. Unit ulangnya: segitiga merah, lingkaran biru. Ia mengulang unit itu tiga kali.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Dua sifat apa yang berubah dalam pola Dayu?",
   "options": [
    "Bentuk dan warna",
    "Ukuran dan arah",
    "Warna saja"
   ],
   "answer": "Bentuk dan warna",
   "hint": "Bandingkan segitiga merah dan lingkaran biru.",
   "explain": "Bentuknya berbeda dan warnanya juga berbeda.",
   "error": "pola-satu-sifat-saja"
  },
  {
   "kind": "number",
   "prompt": "Ada berapa bangun dalam unit ulangnya?",
   "answer": "2",
   "hint": "Hitung bangun di unit ulang.",
   "explain": "Segitiga merah dan lingkaran biru: 2 bangun.",
   "error": "unit-ulang-terlalu-cepat",
   "suffix": "bangun"
  },
  {
   "kind": "number",
   "prompt": "Unit diulang tiga kali. Berapa bangun semuanya?",
   "answer": "6",
   "hint": "2 + 2 + 2.",
   "explain": "Ada 6 bangun.",
   "error": "salah-hitung-urutan-pola",
   "suffix": "bangun"
  },
  {
   "kind": "choice",
   "prompt": "Bangun ke-5 dalam pola Dayu adalah ...",
   "options": [
    "segitiga merah",
    "lingkaran biru"
   ],
   "answer": "segitiga merah",
   "hint": "Unit ketiga dimulai di urutan ke-5.",
   "explain": "Urutan ke-5 memulai unit ketiga: segitiga merah.",
   "error": "salah-hitung-urutan-pola"
  }
 ],
 "conclusion": "Pola Dayu: segitiga merah, lingkaran biru, diulang tiga kali. Kamu juga bisa membuat pola sendiri dengan cara yang sama.",
 "visual": {
  "type": "shapes",
  "items": [
   {
    "shape": "segitiga",
    "color": "merah"
   },
   {
    "shape": "lingkaran",
    "color": "biru"
   },
   {
    "shape": "segitiga",
    "color": "merah"
   },
   {
    "shape": "lingkaran",
    "color": "biru"
   },
   {
    "shape": "segitiga",
    "color": "merah"
   },
   {
    "shape": "lingkaran",
    "color": "biru"
   }
  ]
 }
}
```
