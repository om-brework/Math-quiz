---
id: sd1-05-hitung-cepat
judul: Hitung Cepat (Mental)
jenjang: sd1
moe: "Primary 1 · Number and Algebra · Addition and Subtraction"
prasyarat: [sd1-03-konsep-tambah-kurang, sd1-04-tambah-kurang-bersusun-100]
durasi_menit: 30
---

## Kenapa belajar ini?

Tidak setiap hitungan perlu ditulis bersusun. Saat bermain kelereng atau menghitung kue di meja, kita ingin cepat tahu jawabannya. Hitung cepat adalah cara pintar menghitung **di kepala**.

## Analogi

Bayangkan sebuah **rak telur berisi 10 lubang**.

```visual
{"type": "objects", "item": "bola", "count": 8, "group": 10, "caption": "Rak 10 lubang berisi 8 telur. Masih ada 2 lubang kosong."}
```

Rak di atas berisi 8 telur. Ada 2 lubang kosong.

Hitung cepat sering memakai satu kebiasaan: **penuhi rak dulu**. Rak yang penuh berarti 10, dan 10 sangat mudah ditambah atau dikurangi.

Untuk bilangan besar, bayangkan banyak rak penuh (puluhan) dan beberapa telur lepas (satuan).

```visual
{"type": "base10", "tens": 4, "ones": 3, "caption": "43: 4 rak penuh dan 3 telur lepas"}
```

## Konsep

### Strategi 1: Membuat 10

Pecah bilangan kedua supaya bilangan pertama menjadi 10.

8 + 5: rak berisi 8, kurang 2 untuk penuh. Pecah 5 menjadi 2 dan 3. Pakai 2 untuk memenuhi rak (8 + 2 = 10), lalu tambah sisanya 3. Hasilnya 13.

```anim
{"type": "garis", "from": 0, "to": 15, "start": 8, "jumps": [2, 3], "title": "8 + 5: lompat 2 ke 10, lalu lompat 3 ke 13"}
```

Hafalkan pasangan 10: 1 dan 9, 2 dan 8, 3 dan 7, 4 dan 6, 5 dan 5.

### Strategi 2: Dobel

**Dobel** artinya menambah bilangan dengan dirinya sendiri: 6 + 6 = 12, 7 + 7 = 14, 8 + 8 = 16.

Dobel membantu soal yang **hampir dobel**:

- 6 + 7 = 6 + 6 + 1 = 12 + 1 = 13.
- 8 + 7 = 7 + 7 + 1 = 14 + 1 = 15.

```visual
{"type": "objects", "item": "kelereng", "count": 13, "group": 6, "caption": "6 + 7: dua kelompok 6 (dobel = 12), ditambah 1 lagi = 13"}
```

### Strategi 3: Mengurangi lewat 10

14 − 6: ambil 4 telur dulu supaya tersisa tepat 1 rak penuh (14 − 4 = 10). Masih harus diambil 2 lagi (karena 6 = 4 + 2). 10 − 2 = 8.

```anim
{"type": "garis", "from": 0, "to": 15, "start": 14, "jumps": [-4, -2], "title": "14 − 6: mundur 4 ke 10, lalu mundur 2 ke 8"}
```

Cara lain: pikirkan penjumlahan. 6 + ... = 14? Jawabannya 8.

### Strategi 4: Tambah atau kurang satuan

43 + 5: rak penuhnya tetap 4 (40). Hanya telur lepas yang berubah: 3 + 5 = 8. Hasilnya 48.

67 − 4: puluhan tetap 6. Satuan 7 − 4 = 3. Hasilnya 63.

Strategi ini dipakai kalau satuannya **tidak** melewati 10 (tidak perlu menyimpan atau meminjam).

### Strategi 5: Tambah atau kurang puluhan

35 + 20: menambah 2 rak penuh. Telur lepas tetap 5. Puluhan 3 + 2 = 5. Hasilnya 55.

```anim
{"type": "garis", "from": 0, "to": 60, "start": 35, "jumps": [10, 10], "title": "35 + 20: lompat 10 dua kali", "step": 5}
```

81 − 30: mengambil 3 rak penuh. Satuan tetap 1. Puluhan 8 − 3 = 5. Hasilnya 51.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Membuat 10

```soal
{
 "title": "Contoh 1",
 "text": "Hitung $9 + 6$ dengan membuat 10.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Lihat rak. Rak berisi 9. Kurang berapa untuk penuh?",
   "answer": "1",
   "hint": "Pasangan 10 dari 9.",
   "explain": "9 + 1 = 10, jadi kurang 1.",
   "error": "salah-pasangan-sepuluh"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Pecah 6 menjadi 1 dan berapa?",
   "answer": "5",
   "hint": "1 + ? = 6",
   "explain": "6 = 1 + 5.",
   "error": "salah-pecah-bilangan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Penuhi rak. 9 + 1 = ?",
   "answer": "10",
   "hint": "Rak menjadi penuh.",
   "explain": "9 + 1 = 10.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Tambah sisanya. 10 + 5 = ?",
   "answer": "15",
   "hint": "Sisa dari 6 adalah 5.",
   "explain": "10 + 5 = 15.",
   "error": "lupa-sisa-ambil"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 15 − 6 = ?",
   "answer": "9",
   "hint": "Harus kembali ke 9.",
   "explain": "15 − 6 = 9. Benar.",
   "error": "salah-fakta-kurang"
  }
 ],
 "conclusion": "Jadi 9 + 6 = 15.",
 "visual": {
  "type": "objects",
  "item": "bola",
  "count": 15,
  "group": 10
 }
}
```

### Contoh 2: Hampir dobel

```soal
{
 "title": "Contoh 2",
 "text": "Hitung $7 + 8$ dengan dobel.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Cari dobel terdekat. 7 + 7 = ?",
   "answer": "14",
   "hint": "Dobel 7.",
   "explain": "7 + 7 = 14.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Sesuaikan. 8 adalah 7 + 1. Jadi 7 + 8 sama dengan ...",
   "options": [
    "14 + 1",
    "14 − 1",
    "16 + 1"
   ],
   "answer": "14 + 1",
   "hint": "8 lebih besar 1 dari 7.",
   "explain": "Karena 8 = 7 + 1, maka 7 + 8 = 14 + 1.",
   "error": "salah-sesuaikan-dobel"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung. 14 + 1 = ?",
   "answer": "15",
   "hint": "Satu lagi sesudah 14.",
   "explain": "14 + 1 = 15.",
   "error": "salah-sesuaikan-dobel"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban dengan membuat 10: 8 + 2 = 10, sisa dari 7 adalah 5. 10 + 5 = ?",
   "answer": "15",
   "hint": "Tambahkan sisanya ke 10.",
   "explain": "10 + 5 = 15. Sama.",
   "error": "salah-fakta-tambah"
  }
 ],
 "conclusion": "Jadi 7 + 8 = 15."
}
```

### Contoh 3: Mengurangi lewat 10

```soal
{
 "title": "Contoh 3",
 "text": "Hitung $15 - 7$ lewat 10.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Turun ke 10. 15 dikurangi berapa supaya menjadi 10?",
   "answer": "5",
   "hint": "15 − ? = 10",
   "explain": "15 − 5 = 10.",
   "error": "salah-pecah-bilangan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 7 = 5 + ?. Berapa lagi yang harus diambil?",
   "answer": "2",
   "hint": "Sudah diambil 5 dari 7.",
   "explain": "7 = 5 + 2, jadi masih harus diambil 2.",
   "error": "lupa-sisa-ambil"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Ambil sisanya. 10 − 2 = ?",
   "answer": "8",
   "hint": "Mundur 2 dari 10.",
   "explain": "10 − 2 = 8.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 8 + 7 = ?",
   "answer": "15",
   "hint": "Harus kembali ke 15.",
   "explain": "8 + 7 = 15. Benar.",
   "error": "salah-fakta-tambah"
  }
 ],
 "conclusion": "Jadi 15 − 7 = 8."
}
```

### Contoh 4: Satuan dan puluhan

```soal
{
 "title": "Contoh 4",
 "text": "Hitung di kepala: (a) $52 + 6$, (b) $52 + 30$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pada 52 + 6, angka mana yang berubah?",
   "options": [
    "satuan",
    "puluhan"
   ],
   "answer": "satuan",
   "hint": "6 adalah satuan.",
   "explain": "Yang ditambah satuan, jadi angka satuan yang berubah.",
   "error": "ubah-tempat-salah"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung (a). Satuan 2 + 6 = 8, puluhan tetap 5. 52 + 6 = ?",
   "answer": "58",
   "hint": "Puluhan 5, satuan 8.",
   "explain": "52 + 6 = 58.",
   "error": "ubah-tempat-salah"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung (b). 30 adalah 3 puluhan. Puluhan 5 + 3 = 8, satuan tetap 2. 52 + 30 = ?",
   "answer": "82",
   "hint": "Puluhan 8, satuan 2.",
   "explain": "52 + 30 = 82.",
   "error": "ubah-tempat-salah"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 82 − 30 = ?",
   "answer": "52",
   "hint": "Kurangi puluhannya.",
   "explain": "82 − 30 = 52. Benar.",
   "error": "ubah-tempat-salah"
  }
 ],
 "conclusion": "Jadi (a) 52 + 6 = 58 dan (b) 52 + 30 = 82.",
 "visual": {
  "type": "base10",
  "tens": 5,
  "ones": 2
 }
}
```

### Contoh 5: Soal cerita

```soal
{
 "title": "Contoh 5",
 "text": "Rina punya 74 stiker. Kakak memberinya 20 stiker. Lalu Rina memberi 3 stiker kepada adiknya. Berapa stiker Rina sekarang?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Apa yang dilakukan berurutan?",
   "options": [
    "tambah 20, lalu kurang 3",
    "kurang 20, lalu tambah 3",
    "tambah 20, lalu tambah 3"
   ],
   "answer": "tambah 20, lalu kurang 3",
   "hint": "Diberi berarti bertambah, memberi berarti berkurang.",
   "explain": "Dapat 20 (tambah), lalu memberi 3 (kurang).",
   "error": "salah-pilih-tambah-kurang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Tambah puluhan. 74 + 20 = ?",
   "answer": "94",
   "hint": "Satuan tetap 4, puluhan 7 + 2.",
   "explain": "74 + 20 = 94.",
   "error": "ubah-tempat-salah"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Kurangi satuan. 94 − 3 = ?",
   "answer": "91",
   "hint": "Puluhan tetap 9, satuan 4 − 3.",
   "explain": "94 − 3 = 91.",
   "error": "ubah-tempat-salah"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: mundur. 91 + 3 = 94, lalu 94 − 20 = ?",
   "answer": "74",
   "hint": "Kurangi 2 puluhan.",
   "explain": "94 − 20 = 74, kembali ke awal. Benar.",
   "error": "ubah-tempat-salah"
  }
 ],
 "conclusion": "Jadi Rina sekarang punya 91 stiker."
}
```

## Kesalahan yang sering terjadi

- **Salah memecah bilangan.** Pada 8 + 5, memecah 5 menjadi 1 dan 4, lalu 8 + 1 = 9, bukan 10. Lihat dulu berapa lubang kosong di rak: 8 butuh 2.
- **Dobel yang salah.** Pada 7 + 8, memakai 8 + 8 = 16 lalu menambah 1 menjadi 17. Kalau mulai dari dobel yang lebih besar, harus **dikurangi** 1: 16 − 1 = 15.
- **Mengubah tempat yang salah.** Pada 52 + 30, menambah 3 ke satuan sehingga menjawab 55. Angka 30 adalah 3 puluhan, jadi yang berubah puluhannya: 82.
- **Lupa sisa yang harus diambil.** Pada 15 − 7, berhenti setelah 15 − 5 = 10. Ingat, 7 = 5 + 2, masih ada 2 yang harus diambil.

## Ringkasan

- **Membuat 10:** penuhi rak dulu, lalu tambah sisanya.
- **Dobel:** pakai dobel yang sudah hafal, lalu tambah atau kurang 1.
- **Mengurangi lewat 10:** turun ke 10 dulu, lalu ambil sisanya.
- Tambah atau kurang **satuan**: hanya angka satuan yang berubah.
- Tambah atau kurang **puluhan**: hanya angka puluhan yang berubah.
- Cek dengan operasi kebalikannya.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung $8 + 7$ dengan membuat 10.",
 "steps": [
  {
   "kind": "number",
   "prompt": "8 butuh berapa untuk menjadi 10?",
   "answer": "2",
   "hint": "Pasangan 10 dari 8.",
   "explain": "8 + 2 = 10.",
   "error": "salah-pasangan-sepuluh"
  },
  {
   "kind": "number",
   "prompt": "7 = 2 + ?",
   "answer": "5",
   "hint": "Sisa dari 7 setelah diambil 2.",
   "explain": "7 = 2 + 5.",
   "error": "salah-pecah-bilangan"
  },
  {
   "kind": "number",
   "prompt": "10 + 5 = ?",
   "answer": "15",
   "hint": "Tambahkan sisanya.",
   "explain": "10 + 5 = 15.",
   "error": "lupa-sisa-ambil"
  }
 ],
 "conclusion": "Jadi 8 + 7 = 15."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $6 + 5$ dengan dobel.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Dobel 5: 5 + 5 = ?",
   "answer": "10",
   "hint": "Lima ditambah lima.",
   "explain": "5 + 5 = 10.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "choice",
   "prompt": "6 = 5 + 1. Jadi 6 + 5 sama dengan ...",
   "options": [
    "10 + 1",
    "10 − 1",
    "12 + 1"
   ],
   "answer": "10 + 1",
   "hint": "6 lebih besar 1 dari 5.",
   "explain": "6 + 5 = 10 + 1.",
   "error": "salah-sesuaikan-dobel"
  },
  {
   "kind": "number",
   "prompt": "10 + 1 = ?",
   "answer": "11",
   "hint": "Satu lagi sesudah 10.",
   "explain": "10 + 1 = 11.",
   "error": "salah-sesuaikan-dobel"
  }
 ],
 "conclusion": "Jadi 6 + 5 = 11."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung $13 - 5$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Turun ke 10 dulu. 13 − ? = 10",
   "answer": "3",
   "hint": "Berapa telur lepas di atas 10?",
   "explain": "13 − 3 = 10.",
   "error": "salah-pecah-bilangan"
  },
  {
   "kind": "number",
   "prompt": "5 = 3 + ?. Masih harus diambil berapa?",
   "answer": "2",
   "hint": "Sudah diambil 3 dari 5.",
   "explain": "5 = 3 + 2.",
   "error": "lupa-sisa-ambil"
  },
  {
   "kind": "number",
   "prompt": "10 − 2 = ?",
   "answer": "8",
   "hint": "Mundur 2 dari 10.",
   "explain": "10 − 2 = 8.",
   "error": "salah-fakta-kurang"
  }
 ],
 "conclusion": "Jadi 13 − 5 = 8."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Hitung $64 - 3$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Angka mana yang berubah?",
   "options": [
    "satuan",
    "puluhan"
   ],
   "answer": "satuan",
   "hint": "3 adalah satuan.",
   "explain": "Yang dikurangi satuan, puluhan tetap 6.",
   "error": "ubah-tempat-salah"
  },
  {
   "kind": "number",
   "prompt": "Satuan 4 − 3 = 1. Jadi 64 − 3 = ?",
   "answer": "61",
   "hint": "Puluhan 6, satuan 1.",
   "explain": "64 − 3 = 61.",
   "error": "ubah-tempat-salah"
  }
 ],
 "conclusion": "Jadi 64 − 3 = 61."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Di perpustakaan ada 38 buku cerita. Datang 40 buku cerita baru. Berapa buku cerita sekarang?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "40 adalah ...",
   "options": [
    "4 puluhan",
    "4 satuan"
   ],
   "answer": "4 puluhan",
   "hint": "40 = 4 rak penuh.",
   "explain": "40 adalah 4 puluhan, jadi angka puluhan yang berubah.",
   "error": "ubah-tempat-salah"
  },
  {
   "kind": "number",
   "prompt": "Puluhan 3 + 4 = 7, satuan tetap 8. 38 + 40 = ?",
   "answer": "78",
   "hint": "Puluhan 7, satuan 8.",
   "explain": "38 + 40 = 78.",
   "error": "ubah-tempat-salah",
   "suffix": "buku"
  }
 ],
 "conclusion": "Jadi sekarang ada 78 buku cerita."
}
```
