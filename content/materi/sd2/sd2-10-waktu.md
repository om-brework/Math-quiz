---
id: sd2-10-waktu
judul: Waktu dalam Jam dan Menit
jenjang: sd2
moe: "Primary 2 · Measurement and Geometry · Time"
prasyarat: [sd1-09-waktu]
durasi_menit: 35
---

## Kenapa belajar ini?

Les mulai pukul berapa? Berapa lama perjalanan ke rumah Nenek? Kamu perlu membaca jam dengan tepat sampai menit, dan menghitung lama waktu.

## Analogi

Bayangkan **jarum panjang** sebagai pelari yang berlari **keliling lapangan**.

- Satu putaran penuh butuh **60 menit**, yaitu **1 jam**.
- Di pinggir lapangan ada 12 bendera besar (angka 1 sampai 12). Dari satu bendera ke bendera berikutnya ada 5 langkah kecil. Satu langkah kecil = **1 menit**.
- Setiap kali pelari menyelesaikan satu putaran, **jarum pendek** maju satu angka. Jarum pendek menunjukkan **jam**.

```visual
{"type": "clock", "hour": 3, "minute": 0, "caption": "Pukul 03.00: pelari (jarum panjang) di garis start, angka 12"}
```

```visual
{"type": "clock", "hour": 4, "minute": 0, "caption": "Satu putaran kemudian: pukul 04.00. Jarum pendek maju dari 3 ke 4"}
```

## Konsep

### Membaca jam sampai menit

1. **Lihat jarum pendek.** Angka yang **sudah dilewati** adalah jamnya. Kalau jarum pendek di antara 7 dan 8, jamnya masih 7.
2. **Lihat jarum panjang.** Hitung loncat 5 untuk setiap angka besar yang sudah dilewati.
3. **Tambahkan garis kecil.** Setiap garis kecil setelah angka itu bernilai 1 menit.

Contoh: jarum panjang 3 garis kecil setelah angka 4. Angka 4 berarti 5, 10, 15, 20 menit. Ditambah 3, jadi 23 menit.

```visual
{"type": "clock", "hour": 7, "minute": 23, "caption": "Pukul 07.23"}
```

```anim
{"type": "garis", "from": 0, "to": 60, "start": 0, "jumps": [5, 5, 5, 5, 1, 1, 1], "step": 1, "title": "Pelari menghitung menit: loncat 5 empat kali, lalu 1 tiga kali"}
```

Waktu ditulis dengan titik: **pukul 07.23**. Dibaca "pukul tujuh lewat dua puluh tiga menit".

### Satu jam sama dengan 60 menit

$$1 \text{ jam} = 60 \text{ menit}$$

- 2 jam = 60 + 60 = 120 menit.
- 3 jam = 60 + 60 + 60 = 180 menit.

### Mengubah jam ke menit

Ubah jamnya menjadi menit, lalu tambahkan menitnya.

2 jam 15 menit = 120 menit + 15 menit = 135 menit.

### Mengubah menit ke jam

Ambil 60 menit sebanyak mungkin. Setiap 60 menit menjadi 1 jam. Sisanya tetap menit.

100 menit = 60 menit + 40 menit = 1 jam 40 menit.

### Menghitung lama waktu

Loncat di **garis waktu**. Loncat per jam dulu, lalu per menit. Kalau melewati jam bulat, loncat dulu sampai jam bulat.

```visual
{"type": "numberLine", "from": 0, "to": 150, "step": 10, "marks": [0, 120, 145], "jumps": [{"from": 0, "to": 120, "label": "+2 jam"}, {"from": 120, "to": 145, "label": "+25 menit"}], "caption": "Garis waktu dari 08.10 (angka = menit sejak 08.10): 08.10 → 10.10 → 10.35"}
```

Lama waktu: 2 jam 25 menit.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Membaca jam

```soal
{
 "title": "Contoh 1",
 "text": "Jarum pendek berada di antara angka 4 dan 5. Jarum panjang berada 3 garis kecil setelah angka 7. Pukul berapa?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Baca jarum pendek. Jamnya berapa?",
   "answer": "4",
   "hint": "Angka yang sudah dilewati jarum pendek.",
   "explain": "Sudah lewat 4, belum sampai 5. Jamnya 4.",
   "error": "salah-baca-jarum-pendek"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jarum panjang sudah melewati angka 7. Itu berapa menit?",
   "answer": "35",
   "hint": "Hitung loncat 5 tujuh kali.",
   "explain": "5, 10, 15, 20, 25, 30, 35. Jadi 35 menit.",
   "error": "menit-tidak-loncat-5",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tambah 3 garis kecil. 35 + 3 = ?",
   "answer": "38",
   "hint": "Setiap garis kecil 1 menit.",
   "explain": "35 + 3 = 38 menit.",
   "error": "salah-tulis-menit",
   "suffix": "menit"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Tulis waktunya.",
   "options": [
    "04.38",
    "07.20",
    "05.38",
    "04.07"
   ],
   "answer": "04.38",
   "hint": "Jam dulu, lalu menit, dipisah titik.",
   "explain": "Pukul 04.38, dibaca empat lewat tiga puluh delapan menit.",
   "error": "tertukar-jarum-jam"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: angka 8 berarti berapa menit?",
   "answer": "40",
   "hint": "Hitung loncat 5 delapan kali.",
   "explain": "40 menit. Jarum belum sampai 8, jadi menitnya kurang dari 40. 38 cocok.",
   "error": "menit-tidak-loncat-5",
   "suffix": "menit"
  }
 ],
 "conclusion": "Pukul 04.38.",
 "visual": {
  "type": "clock",
  "hour": 4,
  "minute": 38
 }
}
```

### Contoh 2: Mengubah satuan waktu

```soal
{
 "title": "Contoh 2",
 "text": "(a) 2 jam 25 menit = ... menit. (b) 95 menit = ... jam ... menit.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1 (a): Ubah 2 jam ke menit.",
   "answer": "120",
   "hint": "1 jam = 60 menit. Ada dua jam.",
   "explain": "60 + 60 = 120 menit.",
   "error": "satu-jam-100-menit",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2 (a): Tambahkan menitnya. 120 + 25 = ?",
   "answer": "145",
   "hint": "Tambahkan 25 menit.",
   "explain": "2 jam 25 menit = 145 menit.",
   "error": "salah-ubah-menit-ke-jam",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3 (b): 95 menit lebih dari 60. Ambil 60 menit menjadi berapa jam?",
   "answer": "1",
   "hint": "60 menit = 1 jam.",
   "explain": "Satu kali 60 menit = 1 jam.",
   "error": "satu-jam-100-menit",
   "suffix": "jam"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4 (b): Hitung sisa menitnya. 95 − 60 = ?",
   "answer": "35",
   "hint": "Kurangi 95 dengan 60.",
   "explain": "Sisa 35 menit, kurang dari 60, jadi berhenti.",
   "error": "salah-ubah-menit-ke-jam",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban (b): 1 jam 35 menit = 60 + 35 = ... menit?",
   "answer": "95",
   "hint": "Ubah lagi ke menit.",
   "explain": "95 menit. Cocok.",
   "error": "salah-ubah-menit-ke-jam",
   "suffix": "menit"
  }
 ],
 "conclusion": "(a) 145 menit. (b) 1 jam 35 menit."
}
```

### Contoh 3: Lama waktu tanpa melewati jam bulat

```soal
{
 "title": "Contoh 3",
 "text": "Siti les menari mulai pukul 14.15 dan selesai pukul 15.50. Berapa lama Siti les?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Loncat per jam dari 14.15. Berapa jam penuh sebelum melewati 15.50?",
   "answer": "1",
   "hint": "14.15 + 1 jam = 15.15. Tambah 1 jam lagi menjadi 16.15, sudah lewat.",
   "explain": "Hanya 1 jam, sampai 15.15.",
   "error": "salah-loncat-garis-waktu",
   "suffix": "jam"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Loncat per menit dari 15.15 ke 15.50. Berapa menit?",
   "answer": "35",
   "hint": "50 − 15.",
   "explain": "50 − 15 = 35 menit.",
   "error": "salah-loncat-garis-waktu",
   "suffix": "menit"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Gabungkan. Lama les adalah ...",
   "options": [
    "1 jam 35 menit",
    "1 jam 65 menit",
    "2 jam 35 menit"
   ],
   "answer": "1 jam 35 menit",
   "hint": "Jam dari langkah 1, menit dari langkah 2.",
   "explain": "1 jam + 35 menit = 1 jam 35 menit.",
   "error": "salah-loncat-garis-waktu"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: 14.15 ditambah 1 jam 35 menit menjadi pukul ...",
   "options": [
    "15.50",
    "16.50",
    "15.35"
   ],
   "answer": "15.50",
   "hint": "Tambah 1 jam dulu, lalu 35 menit.",
   "explain": "14.15 → 15.15 → 15.50. Sama dengan waktu selesai.",
   "error": "salah-loncat-garis-waktu"
  }
 ],
 "conclusion": "Siti les selama 1 jam 35 menit.",
 "visual": {
  "type": "numberLine",
  "from": 0,
  "to": 100,
  "step": 10,
  "marks": [
   0,
   60,
   95
  ],
  "jumps": [
   {
    "from": 0,
    "to": 60,
    "label": "+1 jam"
   },
   {
    "from": 60,
    "to": 95,
    "label": "+35 menit"
   }
  ],
  "caption": "Angka = menit sejak 14.15: 14.15 → 15.15 → 15.50"
 }
}
```

### Contoh 4: Soal cerita melewati jam bulat

```soal
{
 "title": "Contoh 4",
 "text": "Budi naik bus ke rumah Nenek. Bus berangkat pukul 08.40 dan tiba pukul 10.05. Berapa lama perjalanannya? Tulis juga dalam menit.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Loncat sampai jam bulat. Dari 08.40 ke 09.00 berapa menit?",
   "answer": "20",
   "hint": "Satu putaran 60 menit. Pelari sudah di menit 40.",
   "explain": "60 − 40 = 20 menit.",
   "error": "salah-lewat-jam-bulat",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Loncat per jam. Dari 09.00 ke 10.00 berapa jam?",
   "answer": "1",
   "hint": "Jarum pendek maju satu angka.",
   "explain": "1 jam.",
   "error": "salah-loncat-garis-waktu",
   "suffix": "jam"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Loncat sisa menit. Dari 10.00 ke 10.05 berapa menit?",
   "answer": "5",
   "hint": "Lihat menitnya saja.",
   "explain": "5 menit.",
   "error": "salah-loncat-garis-waktu",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Gabungkan menitnya. 20 + 5 = ? (jadi 1 jam ... menit)",
   "answer": "25",
   "hint": "Jumlahkan menit dari langkah 1 dan 3.",
   "explain": "1 jam 25 menit.",
   "error": "salah-loncat-garis-waktu",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Ubah ke menit. 60 + 25 = ?",
   "answer": "85",
   "hint": "1 jam = 60 menit.",
   "explain": "85 menit.",
   "error": "satu-jam-100-menit",
   "suffix": "menit"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: 08.40 + 1 jam = 09.40. Lalu 09.40 + 25 menit = ?",
   "options": [
    "10.05",
    "09.65",
    "10.25"
   ],
   "answer": "10.05",
   "hint": "Dari 09.40, 20 menit sampai 10.00, lalu 5 menit lagi.",
   "explain": "10.05, sama dengan waktu tiba. Benar.",
   "error": "salah-lewat-jam-bulat"
  }
 ],
 "conclusion": "Perjalanan 1 jam 25 menit, atau 85 menit.",
 "visual": {
  "type": "numberLine",
  "from": 0,
  "to": 90,
  "step": 5,
  "marks": [
   0,
   20,
   80,
   85
  ],
  "jumps": [
   {
    "from": 0,
    "to": 20,
    "label": "+20 menit"
   },
   {
    "from": 20,
    "to": 80,
    "label": "+1 jam"
   },
   {
    "from": 80,
    "to": 85,
    "label": "+5 menit"
   }
  ],
  "caption": "Angka = menit sejak 08.40: 08.40 → 09.00 → 10.00 → 10.05"
 }
}
```

## Kesalahan yang sering terjadi

- **Jarum tertukar.** Jarum panjang dibaca sebagai jam. Ingat: jarum pendek = jam, jarum panjang = menit.
- **Angka jarum panjang dibaca langsung.** Jarum panjang di angka 4 dibaca 4 menit. Padahal tiap angka bernilai 5 menit. Angka 4 berarti 20 menit.
- **Membaca jam berikutnya terlalu cepat.** Pukul 09.50 dibaca 10.50, karena jarum pendek sudah dekat angka 10. Jarum pendek belum melewati 10, jadi jamnya masih 9.
- **Menganggap 1 jam = 100 menit.** Lama dari 08.40 ke 10.05 dihitung 10.05 − 8.40 seperti bilangan biasa. Pakai garis waktu dan loncat sampai jam bulat.
- **Salah mengubah menit ke jam.** 95 menit ditulis 9 jam 5 menit. Ambil 60 menit untuk 1 jam: 1 jam 35 menit.

## Ringkasan

- Jarum pendek menunjukkan jam. Jarum panjang menunjukkan menit.
- Setiap angka di jam bernilai 5 menit. Setiap garis kecil 1 menit.
- 1 jam = 60 menit.
- Jam ke menit: tambahkan 60 menit untuk setiap jam, lalu tambahkan menitnya.
- Menit ke jam: ambil 60 menit untuk setiap jam, sisanya tetap menit.
- Lama waktu: loncat di garis waktu, per jam lalu per menit, lewat jam bulat jika perlu.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Jarum pendek di antara 9 dan 10. Jarum panjang 2 garis kecil setelah angka 4. Pukul berapa?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jamnya berapa?",
   "answer": "9",
   "hint": "Angka yang sudah dilewati jarum pendek.",
   "explain": "Jamnya 9.",
   "error": "salah-baca-jarum-pendek"
  },
  {
   "kind": "number",
   "prompt": "Angka 4 pada jarum panjang berarti berapa menit?",
   "answer": "20",
   "hint": "Hitung loncat 5 empat kali.",
   "explain": "5, 10, 15, 20.",
   "error": "menit-tidak-loncat-5",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Tambah 2 garis kecil. Menitnya berapa?",
   "answer": "22",
   "hint": "Setiap garis kecil 1 menit.",
   "explain": "20 + 2 = 22. Jadi pukul 09.22.",
   "error": "salah-tulis-menit",
   "suffix": "menit"
  }
 ],
 "conclusion": "Pukul 09.22.",
 "visual": {
  "type": "clock",
  "hour": 9,
  "minute": 22
 }
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "3 jam = ... menit.",
 "steps": [
  {
   "kind": "number",
   "prompt": "2 jam = ... menit?",
   "answer": "120",
   "hint": "60 + 60.",
   "explain": "120 menit.",
   "error": "satu-jam-100-menit",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "3 jam = ... menit?",
   "answer": "180",
   "hint": "Tambah 60 lagi.",
   "explain": "120 + 60 = 180 menit.",
   "error": "satu-jam-100-menit",
   "suffix": "menit"
  }
 ],
 "conclusion": "3 jam = 180 menit."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "1 jam 50 menit = ... menit.",
 "steps": [
  {
   "kind": "number",
   "prompt": "1 jam = ... menit?",
   "answer": "60",
   "hint": "Satu putaran jarum panjang.",
   "explain": "60 menit.",
   "error": "satu-jam-100-menit",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Tambahkan 50 menit. Hasilnya?",
   "answer": "110",
   "hint": "60 + 50.",
   "explain": "110 menit.",
   "error": "salah-ubah-menit-ke-jam",
   "suffix": "menit"
  }
 ],
 "conclusion": "1 jam 50 menit = 110 menit."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "130 menit = ... jam ... menit.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa kali 60 menit bisa diambil dari 130 menit?",
   "answer": "2",
   "hint": "60, 120, lalu 180 sudah kelebihan.",
   "explain": "Dua kali, jadi 2 jam.",
   "error": "salah-ubah-menit-ke-jam",
   "suffix": "jam"
  },
  {
   "kind": "number",
   "prompt": "Berapa menit sisanya?",
   "answer": "10",
   "hint": "130 − 120.",
   "explain": "Sisa 10 menit.",
   "error": "salah-ubah-menit-ke-jam",
   "suffix": "menit"
  }
 ],
 "conclusion": "130 menit = 2 jam 10 menit."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Film di TV mulai pukul 19.35 dan selesai pukul 21.15. Berapa lama film itu?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Dari 19.35 ke 20.00 berapa menit?",
   "answer": "25",
   "hint": "60 − 35.",
   "explain": "25 menit.",
   "error": "salah-lewat-jam-bulat",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Dari 20.00 ke 21.00 berapa jam?",
   "answer": "1",
   "hint": "Jarum pendek maju satu angka.",
   "explain": "1 jam.",
   "error": "salah-loncat-garis-waktu",
   "suffix": "jam"
  },
  {
   "kind": "number",
   "prompt": "Dari 21.00 ke 21.15 berapa menit?",
   "answer": "15",
   "hint": "Lihat menitnya saja.",
   "explain": "15 menit.",
   "error": "salah-loncat-garis-waktu",
   "suffix": "menit"
  },
  {
   "kind": "choice",
   "prompt": "Gabungkan. Lama film adalah ...",
   "options": [
    "1 jam 40 menit",
    "1 jam 80 menit",
    "2 jam 20 menit"
   ],
   "answer": "1 jam 40 menit",
   "hint": "25 + 15 menit, ditambah 1 jam.",
   "explain": "1 jam + 40 menit = 1 jam 40 menit.",
   "error": "satu-jam-100-menit"
  }
 ],
 "conclusion": "Film itu 1 jam 40 menit."
}
```
