---
id: sd1-03-konsep-tambah-kurang
judul: Konsep Penjumlahan dan Pengurangan
jenjang: sd1
moe: "Primary 1 · Number and Algebra · Addition and Subtraction"
prasyarat: [sd1-01-bilangan-sampai-100]
durasi_menit: 30
---

## Kenapa belajar ini?

Kakak memberimu 3 permen, padahal kamu sudah punya 5. Berapa permenmu sekarang? Kamu makan 2 permen. Berapa yang tersisa? Penjumlahan dan pengurangan membantu menjawab pertanyaan seperti ini setiap hari.

## Analogi

Bayangkan sebuah **toples kelereng**.

- Kalau kamu **memasukkan** kelereng ke toples, isinya **bertambah**. Itu penjumlahan.
- Kalau kamu **mengambil** kelereng dari toples, isinya **berkurang**. Itu pengurangan.

```anim
{"type": "benda", "op": "+", "a": 5, "b": 3, "item": "kelereng", "title": "Memasukkan 3 kelereng ke toples berisi 5"}
```

```anim
{"type": "benda", "op": "-", "a": 8, "b": 3, "item": "kelereng", "title": "Mengambil 3 kelereng dari toples berisi 8"}
```

Toples ini akan kita pakai terus di semua contoh.

## Konsep

### Penjumlahan: menggabungkan

Penjumlahan artinya **menggabungkan** dua kelompok menjadi satu.

Di toples ada 5 kelereng. Kamu memasukkan 3 kelereng lagi. Sekarang ada 8 kelereng.

Kita tulis: **5 + 3 = 8**. Dibaca "lima ditambah tiga sama dengan delapan".

### Pengurangan: mengambil

Pengurangan artinya **mengambil** sebagian dari sebuah kelompok.

Di toples ada 8 kelereng. Kamu mengambil 3 kelereng. Sisanya 5 kelereng.

```visual
{"type": "objects", "item": "kelereng", "count": 8, "crossed": 3, "caption": "8 kelereng, 3 diambil (dicoret). Sisa 5."}
```

Kita tulis: **8 − 3 = 5**. Dibaca "delapan dikurangi tiga sama dengan lima".

### Tiga lambang penting

- **+** dibaca "ditambah". Artinya menggabungkan.
- **−** dibaca "dikurangi". Artinya mengambil.
- **=** dibaca "sama dengan". Artinya nilai di kiri sama dengan nilai di kanan.

### Keluarga bilangan

Tiga bilangan bisa menjadi satu **keluarga**. Contoh: 3, 5, dan 8.

```visual
{"type": "barModel", "bars": [{"label": "bagian", "units": 3, "known": "3"}, {"label": "bagian", "units": 5, "known": "5"}], "total": "seluruh 8", "caption": "Dua bagian, 3 dan 5, membentuk seluruh, yaitu 8."}
```

```visual
{"type": "table", "head": ["Penjumlahan", "Pengurangan"], "rows": [["3 + 5 = 8", "8 − 3 = 5"], ["5 + 3 = 8", "8 − 5 = 3"]]}
```

Bilangan terbesar (8) adalah **seluruh isi toples**. Dua bilangan kecil (3 dan 5) adalah **dua bagiannya**.

- Bagian + bagian = seluruh.
- Seluruh − satu bagian = bagian lainnya.

Keluarga bilangan membantu mencari bilangan yang hilang. Contoh: 8 + ... = 12. Seluruhnya 12, satu bagian 8. Bagian lainnya 12 − 8 = 4.

Penjumlahan juga boleh ditukar urutannya: 3 + 5 dan 5 + 3 hasilnya sama. Pengurangan **tidak** boleh ditukar.

### Menjumlahkan tiga bilangan

Kita bisa memasukkan kelereng ke toples tiga kali. Contoh: 4 + 6 + 3.

Kita boleh menjumlahkan dua bilangan dulu, lalu menambah bilangan ketiga. Cari pasangan yang hasilnya **10**, karena 10 mudah ditambah.

```anim
{"type": "garis", "from": 0, "to": 15, "start": 4, "jumps": [6, 3], "title": "4 + 6 = 10, lalu 10 + 3 = 13"}
```

4 + 6 = 10, lalu 10 + 3 = 13.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menggabungkan

```soal
{
 "title": "Contoh 1",
 "text": "Budi punya 5 kelereng. Siti punya 3 kelereng. Mereka memasukkan semua kelereng ke satu toples. Berapa kelereng di toples?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Dua kelompok digabung. Ini ...",
   "options": [
    "penjumlahan (+)",
    "pengurangan (−)"
   ],
   "answer": "penjumlahan (+)",
   "hint": "Digabung berarti dimasukkan ke toples.",
   "explain": "Menggabungkan adalah penjumlahan.",
   "error": "salah-pilih-tambah-kurang"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Tulis kalimat matematikanya.",
   "options": [
    "5 + 3",
    "5 − 3",
    "3 − 5"
   ],
   "answer": "5 + 3",
   "hint": "Kelereng Budi ditambah kelereng Siti.",
   "explain": "Kalimatnya 5 + 3.",
   "error": "salah-pilih-tambah-kurang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung. Mulai dari 5, bilang maju 3 kali. 5 + 3 = ?",
   "answer": "8",
   "hint": "Bilang sesudah 5: 6, 7, ...",
   "explain": "6, 7, 8. Jadi 5 + 3 = 8.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: ambil lagi 3 kelereng Siti. 8 − 3 = ?",
   "answer": "5",
   "hint": "Hasilnya harus kembali ke kelereng Budi.",
   "explain": "8 − 3 = 5, kembali ke kelereng Budi. Benar.",
   "error": "salah-fakta-kurang"
  }
 ],
 "conclusion": "Jadi ada 8 kelereng di toples.",
 "visual": {
  "type": "objects",
  "item": "kelereng",
  "count": 8,
  "group": 5
 }
}
```

### Contoh 2: Mengambil

```soal
{
 "title": "Contoh 2",
 "text": "Ada 9 permen di toples. Made mengambil 4 permen. Berapa permen yang tersisa?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Ada yang diambil. Ini ...",
   "options": [
    "penjumlahan (+)",
    "pengurangan (−)"
   ],
   "answer": "pengurangan (−)",
   "hint": "Diambil berarti keluar dari toples.",
   "explain": "Mengambil adalah pengurangan.",
   "error": "salah-pilih-tambah-kurang"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Tulis kalimat matematikanya.",
   "options": [
    "9 − 4",
    "4 − 9",
    "9 + 4"
   ],
   "answer": "9 − 4",
   "hint": "Bilangan seluruh ditulis di depan.",
   "explain": "Kalimatnya 9 − 4.",
   "error": "kurang-urutan-terbalik"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung. Mulai dari 9, bilang mundur 4 kali. 9 − 4 = ?",
   "answer": "5",
   "hint": "Bilang mundur: 8, 7, ...",
   "explain": "8, 7, 6, 5. Jadi 9 − 4 = 5.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: kembalikan 4 permen. 5 + 4 = ?",
   "answer": "9",
   "hint": "Hasilnya harus 9 lagi.",
   "explain": "5 + 4 = 9. Benar.",
   "error": "salah-fakta-tambah"
  }
 ],
 "conclusion": "Jadi tersisa 5 permen.",
 "visual": {
  "type": "objects",
  "item": "permen",
  "count": 9,
  "crossed": 4
 }
}
```

### Contoh 3: Keluarga bilangan

```soal
{
 "title": "Contoh 3",
 "text": "Tulis keluarga bilangan dari 6, 7, dan 13.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Cari bilangan seluruh. Bilangan mana yang terbesar?",
   "answer": "13",
   "hint": "Seluruh isi toples adalah bilangan terbesar.",
   "explain": "13 adalah seluruh. 6 dan 7 adalah bagian.",
   "error": "salah-keluarga-bilangan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Penjumlahan mana yang benar?",
   "options": [
    "6 + 7 = 13",
    "6 + 13 = 7",
    "13 + 7 = 6"
   ],
   "answer": "6 + 7 = 13",
   "hint": "Bagian + bagian = seluruh.",
   "explain": "6 + 7 = 13 dan 7 + 6 = 13.",
   "error": "salah-keluarga-bilangan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Pengurangan. 13 − 6 = ?",
   "answer": "7",
   "hint": "Seluruh − bagian = bagian lain.",
   "explain": "13 − 6 = 7.",
   "error": "salah-keluarga-bilangan"
  },
  {
   "kind": "number",
   "prompt": "13 − 7 = ?",
   "answer": "6",
   "hint": "Seluruh − bagian = bagian lain.",
   "explain": "13 − 7 = 6.",
   "error": "salah-keluarga-bilangan"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: dari 6 bilang maju 7 kali. 6 + 7 = ?",
   "answer": "13",
   "hint": "7, 8, 9, 10, ...",
   "explain": "7, 8, 9, 10, 11, 12, 13. Benar 13.",
   "error": "salah-fakta-tambah"
  }
 ],
 "conclusion": "Jadi keluarganya: 6 + 7 = 13, 7 + 6 = 13, 13 − 6 = 7, 13 − 7 = 6.",
 "visual": {
  "type": "barModel",
  "bars": [
   {
    "label": "bagian",
    "units": 6,
    "known": "6"
   },
   {
    "label": "bagian",
    "units": 7,
    "known": "7"
   }
  ],
  "total": "13"
 }
}
```

### Contoh 4: Tiga bilangan

```soal
{
 "title": "Contoh 4",
 "text": "Hitung $7 + 2 + 3$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Cari pasangan 10.",
   "options": [
    "7 dan 3",
    "7 dan 2",
    "2 dan 3"
   ],
   "answer": "7 dan 3",
   "hint": "Dua bilangan mana yang hasilnya 10?",
   "explain": "7 + 3 = 10, jadi 7 dan 3 berpasangan.",
   "error": "salah-pasangan-sepuluh"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jumlahkan pasangan dulu. 7 + 3 = ?",
   "answer": "10",
   "hint": "Pasangan 10.",
   "explain": "7 + 3 = 10.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tambah bilangan sisanya. 10 + 2 = ?",
   "answer": "12",
   "hint": "Bilangan yang belum dipakai adalah 2.",
   "explain": "10 + 2 = 12.",
   "error": "lupa-bilangan-ketiga"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: urut dari kiri. 7 + 2 = 9, lalu 9 + 3 = ?",
   "answer": "12",
   "hint": "Bilang maju 3 dari 9.",
   "explain": "9 + 3 = 12. Hasilnya sama.",
   "error": "salah-fakta-tambah"
  }
 ],
 "conclusion": "Jadi 7 + 2 + 3 = 12."
}
```

### Contoh 5: Soal cerita tiga bilangan

```soal
{
 "title": "Contoh 5",
 "text": "Made memetik 5 mangga. Putu memetik 4 mangga. Wayan memetik 6 mangga. Semua mangga dimasukkan ke satu keranjang. Berapa mangga di keranjang?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Kalimat matematikanya adalah ...",
   "options": [
    "5 + 4 + 6",
    "5 + 4",
    "6 − 4 + 5"
   ],
   "answer": "5 + 4 + 6",
   "hint": "Tiga kelompok digabung.",
   "explain": "Tiga kelompok digabung: 5 + 4 + 6.",
   "error": "salah-pilih-tambah-kurang"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Cari pasangan 10.",
   "options": [
    "4 dan 6",
    "5 dan 4",
    "5 dan 6"
   ],
   "answer": "4 dan 6",
   "hint": "Dua bilangan mana yang hasilnya 10?",
   "explain": "4 + 6 = 10.",
   "error": "salah-pasangan-sepuluh"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tambah bilangan sisanya. 10 + 5 = ?",
   "answer": "15",
   "hint": "Bilangan yang belum dipakai adalah 5.",
   "explain": "10 + 5 = 15.",
   "error": "lupa-bilangan-ketiga"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: urut dari kiri. 5 + 4 = 9, lalu 9 + 6 = ?",
   "answer": "15",
   "hint": "Buat 10 dulu: 9 + 1 = 10, lalu tambah 5.",
   "explain": "9 + 6 = 15. Sama.",
   "error": "salah-fakta-tambah"
  }
 ],
 "conclusion": "Jadi ada 15 mangga di keranjang."
}
```

## Kesalahan yang sering terjadi

- **Salah memilih tambah atau kurang.** Soal berkata "diambil" atau "dimakan", tetapi anak menambah. Bayangkan toples: kalau benda keluar, isinya berkurang. Pakai **−**.
- **Menukar urutan pengurangan.** Menulis 4 − 9 untuk "9 permen diambil 4". Yang benar 9 − 4. Bilangan seluruh selalu di depan.
- **Ikut menghitung bilangan awal.** Pada 5 + 3, anak bilang "5, 6, 7" dan menjawab 7. Bilangan 5 sudah ada di toples. Mulai bilang dari bilangan **sesudahnya**: 6, 7, 8.
- **Lupa bilangan ketiga.** Pada 7 + 2 + 3, anak berhenti setelah 7 + 3 = 10. Coret setiap bilangan yang sudah dipakai.

## Ringkasan

- **+** artinya menggabungkan (memasukkan ke toples).
- **−** artinya mengambil (mengeluarkan dari toples).
- **=** artinya sama dengan.
- Keluarga bilangan: bagian + bagian = seluruh, seluruh − bagian = bagian lain.
- Tiga bilangan: cari pasangan 10 dulu, lalu tambah sisanya.
- Cek penjumlahan dengan pengurangan, dan sebaliknya.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung $6 + 3$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Mulai dari 6, bilang maju 3 kali. 6 + 3 = ?",
   "answer": "9",
   "hint": "Bilang sesudah 6: 7, 8, ...",
   "explain": "7, 8, 9. Jadi 6 + 3 = 9.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "number",
   "prompt": "Cek: 9 − 3 = ?",
   "answer": "6",
   "hint": "Harus kembali ke 6.",
   "explain": "9 − 3 = 6. Benar.",
   "error": "salah-fakta-kurang"
  }
 ],
 "conclusion": "Jadi 6 + 3 = 9."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $11 - 5$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Mulai dari 11, bilang mundur 5 kali. 11 − 5 = ?",
   "answer": "6",
   "hint": "Bilang mundur: 10, 9, 8, ...",
   "explain": "10, 9, 8, 7, 6. Jadi 11 − 5 = 6.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "number",
   "prompt": "Cek: 6 + 5 = ?",
   "answer": "11",
   "hint": "Harus kembali ke 11.",
   "explain": "6 + 5 = 11. Benar.",
   "error": "salah-fakta-tambah"
  }
 ],
 "conclusion": "Jadi 11 − 5 = 6."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Tulis keluarga bilangan dari 4, 9, dan 13.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Bilangan mana yang menjadi seluruh?",
   "answer": "13",
   "hint": "Bilangan terbesar.",
   "explain": "13 adalah seluruh.",
   "error": "salah-keluarga-bilangan"
  },
  {
   "kind": "choice",
   "prompt": "Penjumlahan mana yang termasuk keluarga ini?",
   "options": [
    "9 + 4 = 13",
    "13 + 4 = 9",
    "9 + 13 = 4"
   ],
   "answer": "9 + 4 = 13",
   "hint": "Bagian + bagian = seluruh.",
   "explain": "4 + 9 = 13 dan 9 + 4 = 13.",
   "error": "salah-keluarga-bilangan"
  },
  {
   "kind": "number",
   "prompt": "13 − 4 = ?",
   "answer": "9",
   "hint": "Seluruh − bagian = bagian lain.",
   "explain": "13 − 4 = 9.",
   "error": "salah-keluarga-bilangan"
  },
  {
   "kind": "number",
   "prompt": "13 − 9 = ?",
   "answer": "4",
   "hint": "Seluruh − bagian = bagian lain.",
   "explain": "13 − 9 = 4.",
   "error": "salah-keluarga-bilangan"
  }
 ],
 "conclusion": "Jadi keluarganya: 4 + 9 = 13, 9 + 4 = 13, 13 − 4 = 9, 13 − 9 = 4."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Hitung $8 + 5 + 2$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Cari pasangan 10.",
   "options": [
    "8 dan 2",
    "8 dan 5",
    "5 dan 2"
   ],
   "answer": "8 dan 2",
   "hint": "Dua bilangan mana yang hasilnya 10?",
   "explain": "8 + 2 = 10.",
   "error": "salah-pasangan-sepuluh"
  },
  {
   "kind": "number",
   "prompt": "10 + 5 = ?",
   "answer": "15",
   "hint": "Tambah bilangan yang belum dipakai.",
   "explain": "10 + 5 = 15.",
   "error": "lupa-bilangan-ketiga"
  }
 ],
 "conclusion": "Jadi 8 + 5 + 2 = 15."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Ada 14 burung di pohon. 6 burung terbang pergi. Berapa burung yang masih di pohon?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Kalimat matematikanya adalah ...",
   "options": [
    "14 − 6",
    "14 + 6",
    "6 − 14"
   ],
   "answer": "14 − 6",
   "hint": "Burung yang pergi diambil dari 14.",
   "explain": "Pergi berarti berkurang: 14 − 6.",
   "error": "salah-pilih-tambah-kurang"
  },
  {
   "kind": "number",
   "prompt": "14 − 6 = ?",
   "answer": "8",
   "hint": "Mundur 4 dulu ke 10, lalu mundur 2 lagi.",
   "explain": "14 − 4 = 10, lalu 10 − 2 = 8.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "number",
   "prompt": "Cek: 8 + 6 = ?",
   "answer": "14",
   "hint": "Harus kembali ke 14.",
   "explain": "8 + 6 = 14. Benar.",
   "error": "salah-fakta-tambah"
  }
 ],
 "conclusion": "Jadi masih ada 8 burung di pohon."
}
```
