---
id: sd3-10-waktu
judul: "Waktu: Detik, Lama Waktu, dan Jam 24"
jenjang: sd3
moe: "Primary 3 · Measurement and Geometry · Time"
prasyarat: [sd2-10-waktu]
durasi_menit: 40
---

## Kenapa belajar ini?

Jadwal kereta dan pesawat ditulis seperti 15.45 atau 20.10. Film mulai pukul 14.35 dan selesai pukul 16.10. Berapa lama filmnya? Materi ini mengajarkan cara membaca jam 24 dan cara menghitung lama waktu dengan teratur.

## Analogi

Bayangkan waktu sebagai **jalan lurus dengan halte di setiap jam bulat**: 13.00, 14.00, 15.00, dan seterusnya.

Untuk pergi dari satu waktu ke waktu lain, kamu **naik bus dari halte ke halte**:

1. Dari tempatmu, jalan kaki dulu ke halte jam bulat terdekat.
2. Naik bus melompati jam-jam penuh.
3. Turun, lalu jalan kaki sisa menitnya.

```visual
{"type": "numberLine", "from": 14, "to": 17, "step": 1, "marks": [14.5833, 15.0, 16.0, 16.1667], "jumps": [{"from": 14.5833, "to": 15.0, "label": "25 menit"}, {"from": 15.0, "to": 16.0, "label": "1 jam"}, {"from": 16.0, "to": 16.1667, "label": "10 menit"}], "caption": "Halte di jam bulat (14 = 14.00). Dari 14.35 jalan 25 menit, naik bus 1 jam, lalu jalan 10 menit sampai 16.10."}
```

Lama perjalanan = semua jalan kaki + semua lompatan bus. Cara ini disebut **garis waktu**.

## Konsep

### Detik

**Detik** adalah satuan waktu yang sangat singkat. Mengucapkan "satu-dua" kira-kira butuh 1 detik.

```visual
{"type": "table", "head": ["Satuan", "Sama dengan"], "rows": [["1 menit", "60 detik"], ["1 jam", "60 menit"]]}
```

Detik dipakai untuk waktu yang singkat, misalnya lomba lari. Kalau Budi berlari 48 detik dan Made berlari 1 menit (60 detik), Budi lebih cepat sampai.

```visual
{"type": "barModel", "bars": [{"label": "Budi", "units": 4, "known": "48 detik"}, {"label": "Made", "units": 5, "known": "60 detik"}], "caption": "Waktu Budi lebih singkat, jadi Budi lebih cepat sampai"}
```

### Sistem 24 jam

Dalam sehari ada 24 jam. Pada **sistem 12 jam**, kita memakai pagi, siang, sore, malam. Pada **sistem 24 jam**, jam dihitung dari 00.00 (tengah malam) sampai 23.59.

- Dari tengah malam sampai sebelum pukul 13.00, angka jamnya sama: 7.15 pagi = 07.15.
- Mulai pukul 1 siang, **tambah 12** pada angka jam: 3.45 sore = 15.45, karena 3 + 12 = 15.
- Sebaliknya, untuk jam 13 sampai 23, **kurangi 12**: 20.10 = 8.10 malam, karena 20 − 12 = 8.
- 12 tengah malam ditulis **00.00**, dan 12.30 tengah malam ditulis 00.30.

```visual
{"type": "clock", "hour": 3, "minute": 45, "caption": "Sore hari, jam ini dibaca 15.45"}
```

```visual
{"type": "table", "head": ["Sistem 12 jam", "Sistem 24 jam"], "rows": [["7.15 pagi", "07.15"], ["12.00 siang", "12.00"], ["3.45 sore", "15.45"], ["8.10 malam", "20.10"], ["12.30 tengah malam", "00.30"]]}
```

Jam ditulis dengan titik di antara jam dan menit, dan menit selalu 2 angka: 07.05, bukan 7.5.

### Tiga hal yang saling terkait

Setiap soal waktu berisi tiga hal:

- **waktu mulai**
- **lama waktu**
- **waktu selesai**

Kalau dua diketahui, yang ketiga bisa dicari:

- Cari **lama waktu**: berjalan maju dari waktu mulai ke waktu selesai.
- Cari **waktu selesai**: berjalan maju dari waktu mulai sejauh lama waktu.
- Cari **waktu mulai**: berjalan **mundur** dari waktu selesai sejauh lama waktu.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Mengubah ke sistem 24 jam

```soal
{
 "title": "Contoh 1",
 "text": "a) Tulis 3.45 sore dalam sistem 24 jam. b) Tulis 20.10 dalam sistem 12 jam.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: a) Apakah 3.45 sore sudah lewat pukul 12 siang?",
   "options": [
    "Sudah",
    "Belum"
   ],
   "answer": "Sudah",
   "hint": "Sore datang setelah siang.",
   "explain": "Sore sudah lewat pukul 12 siang, jadi angka jamnya ditambah 12.",
   "error": "salah-jam-24"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: a) 3 + 12 = ?",
   "answer": "15",
   "hint": "Tambahkan 12 pada angka jam.",
   "explain": "3 + 12 = 15.",
   "error": "salah-jam-24"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: a) Tulis lengkap dalam sistem 24 jam.",
   "options": [
    "15.45",
    "03.45",
    "15.4"
   ],
   "answer": "15.45",
   "hint": "Angka jam 15, menitnya tetap 45.",
   "explain": "3.45 sore = 15.45.",
   "error": "salah-jam-24"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: b) Angka jam 20 lebih dari 12. 20 − 12 = ?",
   "answer": "8",
   "hint": "Kurangi 12 dari angka jam.",
   "explain": "20 − 12 = 8.",
   "error": "salah-jam-24"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: b) Tulis dalam sistem 12 jam.",
   "options": [
    "8.10 malam",
    "8.10 pagi",
    "10.10 malam"
   ],
   "answer": "8.10 malam",
   "hint": "Pukul 20 sudah gelap.",
   "explain": "20.10 = 8.10 malam.",
   "error": "salah-pagi-siang-malam"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: dari 12.00 siang sampai 15.00 ada berapa jam?",
   "answer": "3",
   "hint": "Hitung jam: 13, 14, 15.",
   "explain": "3 jam, jadi 15.45 memang 3.45 sore. Benar.",
   "error": "salah-jam-24",
   "suffix": "jam"
  }
 ],
 "conclusion": "a) 15.45, b) 8.10 malam.",
 "visual": {
  "type": "clock",
  "hour": 3,
  "minute": 45
 }
}
```

### Contoh 2: Mencari lama waktu

```soal
{
 "title": "Contoh 2",
 "text": "Film mulai pukul 14.35 dan selesai pukul 16.10. Berapa lama film itu?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Jalan kaki ke halte terdekat. Dari 14.35 ke 15.00 ada berapa menit?",
   "answer": "25",
   "hint": "35 + ... = 60.",
   "explain": "35 + 25 = 60, jadi 25 menit.",
   "error": "salah-lewat-jam-bulat",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Naik bus. Dari 15.00 ke 16.00 ada berapa jam?",
   "answer": "1",
   "hint": "Dari jam bulat ke jam bulat berikutnya.",
   "explain": "1 jam.",
   "error": "salah-loncat-garis-waktu",
   "suffix": "jam"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Jalan kaki sisa menit. Dari 16.00 ke 16.10 ada berapa menit?",
   "answer": "10",
   "hint": "Lihat angka menit pada 16.10.",
   "explain": "10 menit.",
   "error": "salah-loncat-garis-waktu",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Jumlahkan semua jalan kaki. 25 + 10 = ?",
   "answer": "35",
   "hint": "Jumlahkan menit dari Langkah 1 dan 3.",
   "explain": "35 menit.",
   "error": "salah-fakta-tambah",
   "suffix": "menit"
  },
  {
   "kind": "choice",
   "prompt": "Jadi lama film itu ...",
   "options": [
    "1 jam 35 menit",
    "1 jam 75 menit",
    "2 jam 35 menit"
   ],
   "answer": "1 jam 35 menit",
   "hint": "1 jam dari bus, ditambah semua menit jalan kaki.",
   "explain": "1 jam + 35 menit = 1 jam 35 menit. Jangan mengurangkan seperti bilangan biasa.",
   "error": "waktu-seperti-desimal"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: 14.35 + 1 jam 35 menit = ?",
   "options": [
    "16.10",
    "15.70",
    "16.35"
   ],
   "answer": "16.10",
   "hint": "14.35 + 1 jam = 15.35. Lalu tambah 35 menit, lewati 16.00.",
   "explain": "15.35 + 25 menit = 16.00, + 10 menit = 16.10. Sama dengan waktu selesai.",
   "error": "salah-hitung-waktu"
  }
 ],
 "conclusion": "Film itu berlangsung 1 jam 35 menit.",
 "visual": {
  "type": "numberLine",
  "from": 14,
  "to": 17,
  "step": 1,
  "marks": [
   14.5833,
   15.0,
   16.0,
   16.1667
  ],
  "jumps": [
   {
    "from": 14.5833,
    "to": 15.0,
    "label": "?"
   },
   {
    "from": 15.0,
    "to": 16.0,
    "label": "?"
   },
   {
    "from": 16.0,
    "to": 16.1667,
    "label": "?"
   }
  ]
 }
}
```

### Contoh 3: Mencari waktu selesai

```soal
{
 "title": "Contoh 3",
 "text": "Siti mulai belajar pukul 19.20. Ia belajar selama 1 jam 55 menit. Pukul berapa Siti selesai?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Lompat jam penuh dulu. 19.20 + 1 jam = ?",
   "options": [
    "20.20",
    "19.21",
    "20.00"
   ],
   "answer": "20.20",
   "hint": "Angka jam bertambah 1, menitnya tetap.",
   "explain": "19.20 + 1 jam = 20.20. Sisa yang harus ditempuh 55 menit.",
   "error": "salah-hitung-waktu"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jalan ke halte jam bulat. Dari 20.20 ke 21.00 ada berapa menit?",
   "answer": "40",
   "hint": "20 + ... = 60.",
   "explain": "40 menit.",
   "error": "salah-lewat-jam-bulat",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Sisa menit yang belum ditempuh. 55 − 40 = ?",
   "answer": "15",
   "hint": "Kurangkan menit yang sudah dipakai.",
   "explain": "Sisa 15 menit.",
   "error": "salah-fakta-kurang",
   "suffix": "menit"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: 21.00 + 15 menit = ?",
   "options": [
    "21.15",
    "21.55",
    "20.15"
   ],
   "answer": "21.15",
   "hint": "Mulai dari jam bulat 21.00.",
   "explain": "21.15.",
   "error": "salah-hitung-waktu"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: dari 19.20 ke 20.00 ada berapa menit?",
   "answer": "40",
   "hint": "20 + ... = 60.",
   "explain": "40 menit, lalu 1 jam ke 21.00, lalu 15 menit. Total 1 jam 55 menit. Benar.",
   "error": "salah-lewat-jam-bulat",
   "suffix": "menit"
  }
 ],
 "conclusion": "Siti selesai pukul 21.15 (9.15 malam).",
 "visual": {
  "type": "numberLine",
  "from": 19,
  "to": 22,
  "step": 1,
  "marks": [
   19.3333,
   20.3333,
   21.0,
   21.25
  ],
  "jumps": [
   {
    "from": 19.3333,
    "to": 20.3333,
    "label": "1 jam"
   },
   {
    "from": 20.3333,
    "to": 21.0,
    "label": "40 menit"
   },
   {
    "from": 21.0,
    "to": 21.25,
    "label": "15 menit"
   }
  ]
 }
}
```

### Contoh 4: Soal cerita, mencari waktu mulai

```soal
{
 "title": "Contoh 4",
 "text": "Bus Pak Made tiba di Denpasar pukul 10.05. Perjalanannya 2 jam 30 menit. Pukul berapa bus itu berangkat?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Ke arah mana kita berjalan di garis waktu?",
   "options": [
    "Mundur dari 10.05",
    "Maju dari 10.05"
   ],
   "answer": "Mundur dari 10.05",
   "hint": "Yang diketahui waktu tiba (selesai). Yang dicari waktu berangkat.",
   "explain": "Waktu berangkat ada sebelum waktu tiba, jadi kita mundur.",
   "error": "salah-arah-waktu"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Mundur jam penuh. 10.05 − 2 jam = ?",
   "options": [
    "08.05",
    "12.05",
    "08.00"
   ],
   "answer": "08.05",
   "hint": "Angka jam berkurang 2, menitnya tetap.",
   "explain": "08.05.",
   "error": "salah-hitung-waktu"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Dari 08.05 mundur ke 08.00 ada berapa menit?",
   "answer": "5",
   "hint": "Lihat angka menit pada 08.05.",
   "explain": "5 menit.",
   "error": "salah-lewat-jam-bulat",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Masih harus mundur berapa menit lagi? 30 − 5 = ?",
   "answer": "25",
   "hint": "Total mundur 30 menit, sudah 5.",
   "explain": "25 menit lagi.",
   "error": "salah-fakta-kurang",
   "suffix": "menit"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: 08.00 mundur 25 menit = ?",
   "options": [
    "07.35",
    "07.75",
    "08.25"
   ],
   "answer": "07.35",
   "hint": "Mundur dari 08.00 berarti masuk ke jam 7. 60 − 25 = ?",
   "explain": "60 − 25 = 35, jadi 07.35.",
   "error": "waktu-seperti-desimal"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: 07.35 + 2 jam 30 menit = ?",
   "options": [
    "10.05",
    "09.65",
    "10.35"
   ],
   "answer": "10.05",
   "hint": "07.35 + 2 jam = 09.35. Lalu tambah 30 menit, lewati 10.00.",
   "explain": "09.35 + 25 menit = 10.00, + 5 menit = 10.05. Sama dengan waktu tiba.",
   "error": "salah-hitung-waktu"
  }
 ],
 "conclusion": "Bus berangkat pukul 07.35."
}
```

## Kesalahan yang sering terjadi

- **Mengurangkan waktu seperti bilangan biasa.** Menghitung 16.10 − 14.35 = 1.75, lalu menjawab 1 jam 75 menit. Satu jam hanya 60 menit, bukan 100. Pakai garis waktu dengan halte jam bulat.
- **Lupa menambah 12.** Menulis 3.45 sore sebagai 03.45. Pada sistem 24 jam, 03.45 adalah dini hari. Untuk siang, sore, dan malam, tambah 12.
- **Salah menulis tengah malam.** Menulis 12.30 tengah malam sebagai 24.30. Yang benar 00.30.
- **Maju padahal harus mundur.** Mencari waktu berangkat dengan menambah: 10.05 + 2 jam 30 menit. Kalau waktu selesai yang diketahui, berjalanlah mundur.

## Ringkasan

- 1 menit = 60 detik, 1 jam = 60 menit.
- Sistem 24 jam: mulai pukul 1 siang, tambah 12 (3.45 sore = 15.45). Tengah malam = 00.00.
- Soal waktu punya tiga bagian: waktu mulai, lama waktu, waktu selesai.
- Pakai garis waktu: ke jam bulat, lompat jam penuh, lalu sisa menit.
- Cari waktu mulai dengan berjalan mundur dari waktu selesai.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tulis 7.15 malam dalam sistem 24 jam.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Malam sudah lewat pukul 12 siang. 7 + 12 = ?",
   "answer": "19",
   "hint": "Tambahkan 12 pada angka jam.",
   "explain": "7 + 12 = 19.",
   "error": "salah-jam-24"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Tulis lengkap.",
   "options": [
    "19.15",
    "07.15",
    "17.15"
   ],
   "answer": "19.15",
   "hint": "Menitnya tetap 15.",
   "explain": "7.15 malam = 19.15.",
   "error": "salah-jam-24"
  }
 ],
 "conclusion": "7.15 malam = 19.15.",
 "visual": {
  "type": "clock",
  "hour": 7,
  "minute": 15
 }
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Tulis 22.40 dalam sistem 12 jam.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 22 − 12 = ?",
   "answer": "10",
   "hint": "Kurangi 12 dari angka jam.",
   "explain": "22 − 12 = 10.",
   "error": "salah-jam-24"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Tulis dalam sistem 12 jam.",
   "options": [
    "10.40 malam",
    "10.40 pagi",
    "12.40 malam"
   ],
   "answer": "10.40 malam",
   "hint": "Pukul 22 sudah larut.",
   "explain": "22.40 = 10.40 malam.",
   "error": "salah-pagi-siang-malam"
  }
 ],
 "conclusion": "22.40 = 10.40 malam."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Pertandingan mulai pukul 09.45 dan selesai pukul 11.20. Berapa lama pertandingan itu?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Dari 09.45 ke 10.00 ada berapa menit?",
   "answer": "15",
   "hint": "45 + ... = 60.",
   "explain": "15 menit.",
   "error": "salah-lewat-jam-bulat",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Dari 10.00 ke 11.00 ada berapa jam?",
   "answer": "1",
   "hint": "Jam bulat ke jam bulat berikutnya.",
   "explain": "1 jam.",
   "error": "salah-loncat-garis-waktu",
   "suffix": "jam"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Dari 11.00 ke 11.20 ada berapa menit?",
   "answer": "20",
   "hint": "Lihat angka menit pada 11.20.",
   "explain": "20 menit.",
   "error": "salah-loncat-garis-waktu",
   "suffix": "menit"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Jadi lamanya ...",
   "options": [
    "1 jam 35 menit",
    "1 jam 75 menit",
    "2 jam 25 menit"
   ],
   "answer": "1 jam 35 menit",
   "hint": "1 jam ditambah 15 + 20 menit.",
   "explain": "15 + 20 = 35 menit. Lamanya 1 jam 35 menit.",
   "error": "waktu-seperti-desimal"
  }
 ],
 "conclusion": "Pertandingan berlangsung 1 jam 35 menit."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Putu mulai bermain pukul 13.50 selama 2 jam 25 menit. Pukul berapa ia selesai?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: 13.50 + 2 jam = ?",
   "options": [
    "15.50",
    "15.70",
    "13.52"
   ],
   "answer": "15.50",
   "hint": "Angka jam bertambah 2, menitnya tetap.",
   "explain": "15.50. Sisa 25 menit.",
   "error": "salah-hitung-waktu"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Dari 15.50 ke 16.00 ada berapa menit?",
   "answer": "10",
   "hint": "50 + ... = 60.",
   "explain": "10 menit.",
   "error": "salah-lewat-jam-bulat",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Sisa menit. 25 − 10 = ?",
   "answer": "15",
   "hint": "Total 25 menit, sudah dipakai 10.",
   "explain": "Sisa 15 menit.",
   "error": "salah-fakta-kurang",
   "suffix": "menit"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Jadi Putu selesai pukul ...",
   "options": [
    "16.15",
    "16.25",
    "15.75"
   ],
   "answer": "16.15",
   "hint": "16.00 ditambah sisa menit.",
   "explain": "16.00 + 15 menit = 16.15.",
   "error": "waktu-seperti-desimal"
  }
 ],
 "conclusion": "Putu selesai pukul 16.15."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Les renang Dimas selesai pukul 17.10. Lesnya berlangsung 1 jam 45 menit. Pukul berapa les dimulai?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Ke arah mana kita berjalan di garis waktu?",
   "options": [
    "Mundur dari 17.10",
    "Maju dari 17.10"
   ],
   "answer": "Mundur dari 17.10",
   "hint": "Yang diketahui waktu selesai.",
   "explain": "Cari waktu mulai dengan berjalan mundur.",
   "error": "salah-arah-waktu"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: 17.10 − 1 jam = ?",
   "options": [
    "16.10",
    "18.10",
    "16.00"
   ],
   "answer": "16.10",
   "hint": "Angka jam berkurang 1.",
   "explain": "16.10. Sisa mundur 45 menit.",
   "error": "salah-hitung-waktu"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Dari 16.10 mundur ke 16.00 ada berapa menit?",
   "answer": "10",
   "hint": "Lihat angka menit pada 16.10.",
   "explain": "10 menit. Sisa mundur 45 − 10 = 35 menit.",
   "error": "salah-lewat-jam-bulat",
   "suffix": "menit"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: 16.00 mundur 35 menit = ?",
   "options": [
    "15.25",
    "15.35",
    "16.35"
   ],
   "answer": "15.25",
   "hint": "Masuk ke jam 15. 60 − 35 = ?",
   "explain": "60 − 35 = 25, jadi 15.25.",
   "error": "waktu-seperti-desimal"
  }
 ],
 "conclusion": "Les dimulai pukul 15.25."
}
```
