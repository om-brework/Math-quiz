---
id: sd1-09-waktu
judul: Membaca Jam
jenjang: sd1
moe: "Primary 1 · Measurement and Geometry · Time"
prasyarat: [sd1-01-bilangan-sampai-100]
durasi_menit: 35
---

## Kenapa belajar ini?

Jam berapa sekolah dimulai? Kapan acara kartun kesukaanmu tayang? Dengan membaca jam, kamu tahu kapan harus bangun, berangkat, dan pulang. Kamu juga tahu berapa lama sebuah kegiatan berlangsung.

## Analogi

Bayangkan muka jam adalah **lintasan lari berbentuk lingkaran**. Ada dua pelari di lintasan itu.

- **Jarum pendek** adalah **siput**. Ia berjalan sangat pelan. Siput menunjukkan **jam**.
- **Jarum panjang** adalah **kelinci**. Ia berlari cepat. Kelinci menunjukkan **menit**.

```visual
{"type": "clock", "hour": 8, "minute": 0, "caption": "Pukul 8.00: siput (jarum pendek) di 8, kelinci (jarum panjang) di 12"}
```

Saat kelinci berlari **satu putaran penuh**, siput hanya maju **satu angka**.

```visual
{"type": "clock", "hour": 9, "minute": 0, "caption": "Satu jam kemudian, pukul 9.00: kelinci kembali ke 12, siput maju ke 9"}
```

## Konsep

### Muka jam

```visual
{"type": "clock", "hour": 12, "minute": 0, "caption": "Muka jam: angka 1 sampai 12 tersusun melingkar"}
```

Angka 1 sampai 12 tersusun melingkar. Kedua jarum berputar searah jarum jam: dari 12 ke 1, 2, 3, dan seterusnya.

### Membaca jarum pendek (jam)

Lihat angka yang **sudah dilewati** siput.

- Jarum pendek tepat di 7: jam 7.
- Jarum pendek di antara 7 dan 8: masih jam 7, karena siput belum sampai di 8.

```visual
{"type": "clock", "hour": 7, "minute": 40, "caption": "Jarum pendek di antara 7 dan 8: masih jam 7"}
```

### Membaca jarum panjang (menit)

Kelinci melompat **5 menit** dari satu angka ke angka berikutnya. Hitung loncat 5.

```visual
{"type": "table", "head": ["Angka", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], "rows": [["Menit", "0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"]]}
```

```anim
{"type": "garis", "from": 0, "to": 60, "step": 5, "start": 0, "jumps": [5, 5, 5, 5], "title": "Kelinci di angka 4: hitung loncat 5 empat kali = 20 menit"}
```

Jarum panjang di 12 artinya **tepat** (0 menit). Jarum panjang di 4 artinya 20 menit.

### Menulis waktu

Tulis jam, lalu titik, lalu menit dengan dua angka.

- Jam 7 tepat ditulis **pukul 7.00**.
- Jam 7 lewat 20 menit ditulis **pukul 7.20**.
- Jam 7 lewat 5 menit ditulis **pukul 7.05**, bukan 7.5.

```visual
{"type": "clock", "hour": 7, "minute": 20, "caption": "Pukul 7.20"}
```

Singkatan: **jam** ditulis **j**, **menit** ditulis **mnt**. Contoh: 1 j artinya 1 jam, 30 mnt artinya 30 menit. Di buku berbahasa Inggris, jam ditulis **h** dan menit ditulis **min**.

### Pagi, siang, sore, malam (am dan pm)

Jarum jam berputar **dua kali** dalam sehari. Jadi pukul 7.00 bisa pagi atau malam.

- **Pagi:** saat matahari terbit, sekitar bangun tidur sampai berangkat sekolah.
- **Siang:** sekitar tengah hari, saat matahari tinggi.
- **Sore:** setelah pulang sekolah, sebelum gelap.
- **Malam:** setelah matahari terbenam.

Di jam internasional dipakai **am** dan **pm**:

- **am**: dari tengah malam sampai sebelum tengah hari. Pukul 7.00 am = pukul 7 pagi.
- **pm**: dari tengah hari sampai sebelum tengah malam. Pukul 7.00 pm = pukul 7 malam.

### Lamanya 1 jam dan setengah jam

- **1 jam**: kelinci berlari **satu putaran penuh**, dari 12 kembali ke 12. Siput maju satu angka. 1 jam = 60 menit.
- **Setengah jam**: kelinci berlari **setengah putaran**, dari 12 ke 6. Setengah jam = 30 menit.

```visual
{"type": "clock", "hour": 8, "minute": 30, "caption": "Pukul 8.30: setengah jam setelah pukul 8.00, kelinci di 6"}
```

Pukul 8.00 ditambah 1 jam menjadi pukul 9.00. Pukul 8.00 ditambah setengah jam menjadi pukul 8.30.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Jam tepat

```soal
{
 "title": "Contoh 1",
 "text": "Jarum pendek tepat di 3. Jarum panjang di 12. Pukul berapa?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Baca siput (jarum pendek). Jam berapa?",
   "answer": "3",
   "hint": "Jarum pendek menunjukkan jam.",
   "explain": "Jarum pendek di 3, jadi jam 3.",
   "error": "tertukar-jarum-jam"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Baca kelinci (jarum panjang). Berapa menit?",
   "answer": "0",
   "hint": "Jarum panjang di 12 artinya tepat.",
   "explain": "Di 12 artinya 0 menit.",
   "error": "tertukar-jarum-jam",
   "suffix": "menit"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Tulis waktunya.",
   "options": [
    "pukul 3.00",
    "pukul 12.03",
    "pukul 3.12"
   ],
   "answer": "pukul 3.00",
   "hint": "Jam, titik, lalu menit dua angka.",
   "explain": "Pukul 3.00.",
   "error": "salah-tulis-menit"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: kalau jam tepat, jarum pendek ada di mana?",
   "options": [
    "tepat di angka",
    "di antara dua angka"
   ],
   "answer": "tepat di angka",
   "hint": "Kelinci belum berlari sama sekali.",
   "explain": "Jarum pendek tepat di angka 3. Sesuai.",
   "error": "salah-baca-jarum-pendek"
  }
 ],
 "conclusion": "Jadi pukul 3.00.",
 "visual": {
  "type": "clock",
  "hour": 3,
  "minute": 0
 }
}
```

### Contoh 2: Kelipatan 5 menit

```soal
{
 "title": "Contoh 2",
 "text": "Jarum pendek di antara 8 dan 9. Jarum panjang di 4. Pukul berapa?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Baca siput. Sudah melewati 8, belum sampai 9. Jam berapa?",
   "answer": "8",
   "hint": "Pakai angka yang sudah dilewati.",
   "explain": "Jamnya 8.",
   "error": "salah-baca-jarum-pendek"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Baca kelinci. Hitung loncat 5 sampai angka 4: 5, 10, 15, ...?",
   "answer": "20",
   "hint": "Satu angka = 5 menit.",
   "explain": "5, 10, 15, 20. Menitnya 20.",
   "error": "menit-tidak-loncat-5",
   "suffix": "menit"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Tulis waktunya.",
   "options": [
    "pukul 8.20",
    "pukul 8.4",
    "pukul 9.20",
    "pukul 4.40"
   ],
   "answer": "pukul 8.20",
   "hint": "Jam 8, menit 20.",
   "explain": "Pukul 8.20.",
   "error": "salah-tulis-menit"
  }
 ],
 "conclusion": "Jadi pukul 8.20.",
 "visual": {
  "type": "clock",
  "hour": 8,
  "minute": 20
 }
}
```

### Contoh 3: Jarum pendek hampir di angka berikutnya

```soal
{
 "title": "Contoh 3",
 "text": "Jarum pendek di antara 10 dan 11, sudah dekat sekali ke 11. Jarum panjang di 9. Pukul berapa?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Baca siput. Sudah lewat 10, belum sampai 11. Jam berapa?",
   "answer": "10",
   "hint": "Siput belum sampai 11.",
   "explain": "Jamnya masih 10.",
   "error": "salah-baca-jarum-pendek"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Baca kelinci. Jarum panjang di 9. Berapa menit?",
   "answer": "45",
   "hint": "Hitung loncat 5 sebanyak 9 kali.",
   "explain": "5, 10, 15, 20, 25, 30, 35, 40, 45. Menitnya 45.",
   "error": "menit-tidak-loncat-5",
   "suffix": "menit"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Tulis waktunya.",
   "options": [
    "pukul 10.45",
    "pukul 11.45",
    "pukul 10.9",
    "pukul 9.50"
   ],
   "answer": "pukul 10.45",
   "hint": "Jam 10, menit 45.",
   "explain": "Pukul 10.45.",
   "error": "salah-baca-jarum-pendek"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: kenapa jam belum menjadi 11?",
   "options": [
    "Kelinci belum kembali ke 12",
    "Siput sudah sampai 11"
   ],
   "answer": "Kelinci belum kembali ke 12",
   "hint": "Jam berganti saat kelinci selesai satu putaran.",
   "explain": "Kelinci baru tiga perempat putaran, jadi masih jam 10.",
   "error": "salah-baca-jarum-pendek"
  }
 ],
 "conclusion": "Jadi pukul 10.45.",
 "visual": {
  "type": "clock",
  "hour": 10,
  "minute": 45
 }
}
```

### Contoh 4: Soal cerita, setengah jam

```soal
{
 "title": "Contoh 4",
 "text": "Siti mulai les menggambar pukul 4.00 sore. Les berlangsung setengah jam. Pukul berapa les selesai? Tulis juga dengan am atau pm.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Setengah jam sama dengan berapa menit?",
   "answer": "30",
   "hint": "Kelinci berlari setengah putaran, dari 12 ke 6.",
   "explain": "Setengah jam = 30 menit.",
   "error": "salah-lama-waktu",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Siput belum sampai 5. Jam berapa?",
   "answer": "4",
   "hint": "Jam belum berganti.",
   "explain": "Jamnya tetap 4.",
   "error": "salah-lama-waktu"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Pukul berapa les selesai?",
   "options": [
    "pukul 4.30",
    "pukul 5.30",
    "pukul 4.50"
   ],
   "answer": "pukul 4.30",
   "hint": "Jam 4, menit 30.",
   "explain": "Pukul 4.30.",
   "error": "salah-lama-waktu"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Sore ditulis dengan ...",
   "options": [
    "pm",
    "am"
   ],
   "answer": "pm",
   "hint": "Sore adalah setelah tengah hari.",
   "explain": "Setelah tengah hari memakai pm: 4.30 pm.",
   "error": "tertukar-am-pm"
  }
 ],
 "conclusion": "Jadi les selesai pukul 4.30 sore (4.30 pm).",
 "visual": {
  "type": "clock",
  "hour": 4,
  "minute": 30
 }
}
```

### Contoh 5: Soal cerita, satu jam

```soal
{
 "title": "Contoh 5",
 "text": "Made berangkat ke rumah nenek pukul 9.15 pagi. Perjalanan memakan waktu 1 jam. Pukul berapa Made sampai?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 1 jam berarti kelinci berlari satu putaran penuh. Menitnya menjadi berapa?",
   "answer": "15",
   "hint": "Kelinci kembali ke tempat yang sama.",
   "explain": "Kelinci mulai di 3 dan kembali ke 3. Menit tetap 15.",
   "error": "salah-lama-waktu",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Siput maju satu angka. Jam 9 menjadi jam berapa?",
   "answer": "10",
   "hint": "Tambah 1 jam.",
   "explain": "Jam 9 menjadi jam 10.",
   "error": "salah-lama-waktu"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Pukul berapa Made sampai?",
   "options": [
    "pukul 10.15",
    "pukul 9.16",
    "pukul 10.00"
   ],
   "answer": "pukul 10.15",
   "hint": "Jam 10, menit 15.",
   "explain": "Pukul 10.15.",
   "error": "salah-lama-waktu"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: pukul 10.15 pagi ditulis dengan ...",
   "options": [
    "am",
    "pm"
   ],
   "answer": "am",
   "hint": "Masih sebelum tengah hari.",
   "explain": "Sebelum tengah hari memakai am: 10.15 am.",
   "error": "tertukar-am-pm"
  }
 ],
 "conclusion": "Jadi Made sampai pukul 10.15 pagi (10.15 am).",
 "visual": {
  "type": "clock",
  "hour": 10,
  "minute": 15
 }
}
```

## Kesalahan yang sering terjadi

- **Menukar jarum.** Membaca jarum panjang sebagai jam. Ingat: siput (pendek) untuk jam, kelinci (panjang) untuk menit.
- **Membaca angka di jarum panjang sebagai menit.** Jarum panjang di 4 dibaca "4 menit". Yang benar hitung loncat 5: 20 menit.
- **Membaca jam ke angka berikutnya.** Pada contoh 3, menjawab 11.45. Siput belum sampai 11, jadi masih jam 10.
- **Salah memahami "setengah".** Dalam bahasa sehari-hari, pukul 7.30 sering disebut "setengah delapan". Artinya setengah jam **menuju** 8, yaitu 7.30, bukan 8.30.
- **Menulis menit satu angka.** Menulis 7.5 untuk jam 7 lewat 5 menit. Yang benar 7.05.

## Ringkasan

- Jarum pendek (siput) menunjukkan **jam**. Jarum panjang (kelinci) menunjukkan **menit**.
- Setiap angka pada jarum panjang bernilai 5 menit. Hitung loncat 5.
- Tulis waktu: jam, titik, menit dua angka (pukul 8.20, pukul 7.05).
- Singkatan: jam = j, menit = mnt.
- am: tengah malam sampai sebelum tengah hari. pm: tengah hari sampai sebelum tengah malam.
- 1 jam = satu putaran jarum panjang. Setengah jam = setengah putaran (30 menit).

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Jarum pendek tepat di 6. Jarum panjang di 12. Pukul berapa?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jam berapa?",
   "answer": "6",
   "hint": "Lihat jarum pendek.",
   "explain": "Jarum pendek di 6: jam 6.",
   "error": "tertukar-jarum-jam"
  },
  {
   "kind": "choice",
   "prompt": "Tulis waktunya.",
   "options": [
    "pukul 6.00",
    "pukul 12.06",
    "pukul 6.12"
   ],
   "answer": "pukul 6.00",
   "hint": "Jarum panjang di 12 artinya tepat.",
   "explain": "Pukul 6.00.",
   "error": "salah-tulis-menit"
  }
 ],
 "conclusion": "Jadi pukul 6.00.",
 "visual": {
  "type": "clock",
  "hour": 6,
  "minute": 0
 }
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Jarum pendek di antara 2 dan 3. Jarum panjang di 7. Pukul berapa?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jam berapa?",
   "answer": "2",
   "hint": "Siput belum sampai 3.",
   "explain": "Jamnya 2.",
   "error": "salah-baca-jarum-pendek"
  },
  {
   "kind": "number",
   "prompt": "Jarum panjang di 7. Berapa menit?",
   "answer": "35",
   "hint": "Hitung loncat 5 sebanyak 7 kali.",
   "explain": "7 loncatan 5 = 35 menit.",
   "error": "menit-tidak-loncat-5",
   "suffix": "menit"
  },
  {
   "kind": "choice",
   "prompt": "Tulis waktunya.",
   "options": [
    "pukul 2.35",
    "pukul 2.7",
    "pukul 3.35"
   ],
   "answer": "pukul 2.35",
   "hint": "Jam 2, menit 35.",
   "explain": "Pukul 2.35.",
   "error": "salah-tulis-menit"
  }
 ],
 "conclusion": "Jadi pukul 2.35.",
 "visual": {
  "type": "clock",
  "hour": 2,
  "minute": 35
 }
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Jarum pendek di antara 9 dan 10. Jarum panjang di 11. Pukul berapa?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jam berapa?",
   "answer": "9",
   "hint": "Siput belum sampai 10.",
   "explain": "Jamnya masih 9.",
   "error": "salah-baca-jarum-pendek"
  },
  {
   "kind": "number",
   "prompt": "Jarum panjang di 11. Berapa menit?",
   "answer": "55",
   "hint": "Hitung loncat 5 sebanyak 11 kali.",
   "explain": "11 loncatan 5 = 55 menit.",
   "error": "menit-tidak-loncat-5",
   "suffix": "menit"
  },
  {
   "kind": "choice",
   "prompt": "Tulis waktunya.",
   "options": [
    "pukul 9.55",
    "pukul 10.55",
    "pukul 9.11"
   ],
   "answer": "pukul 9.55",
   "hint": "Jam 9, menit 55.",
   "explain": "Pukul 9.55.",
   "error": "salah-baca-jarum-pendek"
  }
 ],
 "conclusion": "Jadi pukul 9.55.",
 "visual": {
  "type": "clock",
  "hour": 9,
  "minute": 55
 }
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Budi sarapan pukul 6.30 pagi. Ditulis dengan am atau pm?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Pagi itu sebelum atau sesudah tengah hari?",
   "options": [
    "sebelum tengah hari",
    "sesudah tengah hari"
   ],
   "answer": "sebelum tengah hari",
   "hint": "Matahari baru terbit.",
   "explain": "Pagi adalah sebelum tengah hari.",
   "error": "salah-pagi-siang-malam"
  },
  {
   "kind": "choice",
   "prompt": "Jadi ditulis ...",
   "options": [
    "6.30 am",
    "6.30 pm"
   ],
   "answer": "6.30 am",
   "hint": "Sebelum tengah hari memakai am.",
   "explain": "6.30 am.",
   "error": "tertukar-am-pm"
  }
 ],
 "conclusion": "Jadi ditulis 6.30 am.",
 "visual": {
  "type": "clock",
  "hour": 6,
  "minute": 30
 }
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Film mulai pukul 5.00 sore dan berlangsung 1 jam. Pukul berapa film selesai?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Satu jam kemudian, jam 5 menjadi jam berapa?",
   "answer": "6",
   "hint": "Siput maju satu angka.",
   "explain": "Jam 5 menjadi jam 6.",
   "error": "salah-lama-waktu"
  },
  {
   "kind": "choice",
   "prompt": "Pukul berapa film selesai?",
   "options": [
    "pukul 6.00",
    "pukul 5.60",
    "pukul 5.01"
   ],
   "answer": "pukul 6.00",
   "hint": "Kelinci kembali ke 12.",
   "explain": "Pukul 6.00 sore (6.00 pm).",
   "error": "salah-lama-waktu"
  }
 ],
 "conclusion": "Jadi film selesai pukul 6.00 sore (6.00 pm).",
 "visual": {
  "type": "clock",
  "hour": 5,
  "minute": 0
 }
}
```
