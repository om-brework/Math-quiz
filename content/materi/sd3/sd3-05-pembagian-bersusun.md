---
id: sd3-05-pembagian-bersusun
judul: Pembagian Bersusun (Porogapit)
jenjang: sd3
moe: "Primary 3 · Number and Algebra · Multiplication and Division"
prasyarat: [sd3-03-perkalian-6-7-8-9]
durasi_menit: 30
---

## Kenapa belajar ini?

Ibu membeli 96 kue untuk dibagi ke 4 piring sama banyak. Berapa kue di tiap piring? Kalau bilangannya besar, kita tidak bisa membagi di kepala. Pembagian bersusun membantu kita membagi sedikit demi sedikit, dengan rapi.

## Analogi

Bayangkan kamu membagi **uang** ke beberapa teman. Uangnya ada lembaran **puluhan** (Rp10) dan koin **satuan** (Rp1).

Kamu selalu membagi **lembaran besar dulu**. Kalau ada lembaran besar yang tidak bisa dibagi rata, kamu **tukar** dengan uang kecil, lalu bagi lagi. Uang yang benar-benar tidak bisa dibagi lagi adalah **sisa**.

Pembagian bersusun bekerja persis seperti itu: bagi angka paling kiri dulu, tukar yang tersisa ke kolom kanan, lalu lanjutkan.

Lihat bagaimana 12 kue dibagi rata ke 3 piring, satu-satu bergiliran:

```anim
{"type": "benda", "op": "÷", "a": 12, "b": 3, "item": "kue", "title": "Membagi rata 12 kue ke 3 piring"}
```

## Konsep

### Bagian-bagian pembagian

Pada 96 ÷ 4 = 24:

- 96 disebut **yang dibagi**.
- 4 disebut **pembagi**.
- 24 disebut **hasil bagi**.

### Pembagian dengan sisa

Tidak semua pembagian pas. Misalnya 14 kelereng dibagi ke 3 anak.

```anim
{"type": "benda", "op": "÷", "a": 14, "b": 3, "item": "kelereng", "title": "14 kelereng untuk 3 anak"}
```

- Tiap anak mendapat 4 kelereng (3 × 4 = 12).
- Masih ada 2 kelereng yang tidak bisa dibagi rata.

Kita tulis: 14 ÷ 3 = 4 sisa 2.

**Sisa selalu lebih kecil dari pembagi.** Kalau sisanya sama dengan atau lebih besar dari pembagi, berarti masih bisa dibagi lagi.

### Bentuk porogapit

Di sekolah Indonesia, pembagian bersusun ditulis dengan **porogapit**. Pembagi ditulis di kiri, yang dibagi di dalam "kurung", dan hasil bagi di atas.

```anim
{"type": "porogapit", "a": 96, "b": 4, "title": "Porogapit 96 ÷ 4"}
```

### Empat gerakan yang selalu diulang

Setiap putaran porogapit memakai empat gerakan yang sama. Hafalkan urutannya:

1. **Bagi**: berapa kali pembagi muat di angka yang sedang dilihat?
2. **Kali**: kalikan hasil itu dengan pembagi.
3. **Kurang**: kurangkan, untuk mencari yang tersisa.
4. **Turunkan**: turunkan angka berikutnya, lalu ulangi dari gerakan 1.

Cara mudah mengingat: **Bagi, Kali, Kurang, Turun**.

## Contoh langkah demi langkah

Kerjakan setiap gerakan sendiri: Bagi, Kali, Kurang, Turun. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Pembagian pas

**Soal.** 96 ÷ 4 = ...

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung $96 \\div 4$ dengan porogapit.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Bagi. 4 muat berapa kali di 9?",
   "answer": "2",
   "hint": "Hitung loncat 4: 4, 8, 12. Mana yang tidak lebih dari 9?",
   "explain": "4 × 2 = 8, sedangkan 4 × 3 = 12 kelebihan. Tulis 2 di atas angka 9.",
   "error": "tebakan-bagi-kebesaran"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kali. 2 × 4 = ?",
   "answer": "8",
   "hint": "Dua kali empat.",
   "explain": "2 × 4 = 8. Tulis 8 di bawah 9.",
   "error": "salah-kali-porogapit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Kurang. 9 − 8 = ?",
   "answer": "1",
   "hint": "Sisa puluhan yang belum terbagi.",
   "explain": "9 − 8 = 1. Ada 1 puluhan tersisa, seperti 1 lembar Rp10 yang belum dibagi.",
   "error": "salah-kurang-porogapit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Turun. Turunkan angka 6. Sekarang ada berapa?",
   "answer": "16",
   "hint": "Angka 1 dan angka 6 yang diturunkan berdampingan.",
   "explain": "1 puluhan ditukar menjadi 10, ditambah 6 = 16.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Bagi lagi. 4 muat berapa kali di 16?",
   "answer": "4",
   "hint": "4, 8, 12, 16.",
   "explain": "4 × 4 = 16. Tulis 4 di atas angka 6.",
   "error": "tebakan-bagi-kekecilan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 6: Kali dan kurang. 16 − 4 × 4 = ?",
   "answer": "0",
   "hint": "4 × 4 = 16, lalu 16 − 16.",
   "explain": "Sisanya 0. Pembagian pas.",
   "error": "salah-kurang-porogapit"
  },
  {
   "kind": "number",
   "prompt": "Jadi 96 ÷ 4 = ?",
   "answer": "24",
   "hint": "Baca hasil bagi di atas: angka puluhan lalu satuan.",
   "explain": "Hasil bagi 24.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 24 × 4 = ?",
   "answer": "96",
   "hint": "Kalau benar, hasilnya 96.",
   "explain": "24 × 4 = 96. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 96 ÷ 4 = 24."
}
```

### Contoh 2: Pembagian dengan sisa

**Soal.** 75 ÷ 6 = ...

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung $75 \\div 6$ dengan porogapit.",
 "steps": [
  {
   "kind": "longdiv",
   "dividend": 75,
   "divisor": 6,
   "prompt": "Kerjakan porogapit sendiri: isi kotak yang menyala satu per satu (Bagi, Kali, Kurang, Turun).",
   "hint": "Mulai dari 7: 6 muat berapa kali di 7?",
   "explain": "1, lalu 6, sisa 1, turunkan 5 jadi 15, 2, 12, sisa 3."
  },
  {
   "kind": "number",
   "prompt": "Berapa sisanya?",
   "answer": "3",
   "hint": "Angka paling bawah setelah pengurangan terakhir.",
   "explain": "Sisa 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Apakah sisa 3 sudah benar?",
   "options": [
    "Ya, 3 lebih kecil dari 6",
    "Belum, 3 masih bisa dibagi 6"
   ],
   "answer": "Ya, 3 lebih kecil dari 6",
   "hint": "Sisa harus lebih kecil dari pembagi.",
   "explain": "3 lebih kecil dari 6, jadi selesai.",
   "error": "tebakan-bagi-kekecilan"
  },
  {
   "kind": "number",
   "prompt": "Cek: 12 × 6 + 3 = ?",
   "answer": "75",
   "hint": "12 × 6 = 72, lalu tambah 3.",
   "explain": "72 + 3 = 75. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 75 ÷ 6 = 12 sisa 3."
}
```

### Contoh 3: Tiga angka, angka pertama lebih kecil dari pembagi

**Soal.** 252 ÷ 7 = ...

```soal
{
 "title": "Kerjakan bersama",
 "text": "Hitung $252 \\div 7$ dengan porogapit.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Lihat angka pertama, 2. Apakah 7 muat di 2?",
   "options": [
    "Tidak, gabungkan dengan angka berikutnya menjadi 25",
    "Ya, 1 kali"
   ],
   "answer": "Tidak, gabungkan dengan angka berikutnya menjadi 25",
   "hint": "Bandingkan 2 dengan 7.",
   "explain": "2 lebih kecil dari 7, jadi kita lihat 25. Di atas angka 2 tidak ditulis apa-apa.",
   "error": "tebakan-bagi-kebesaran"
  },
  {
   "kind": "longdiv",
   "dividend": 252,
   "divisor": 7,
   "prompt": "Kerjakan porogapit sendiri.",
   "hint": "7 muat berapa kali di 25? Hitung loncat 7: 7, 14, 21, 28.",
   "explain": "3, 21, sisa 4, turunkan 2 jadi 42, 6, 42, sisa 0."
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 36 × 7 = ?",
   "answer": "252",
   "hint": "30 × 7 = 210, 6 × 7 = 42.",
   "explain": "210 + 42 = 252. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 252 ÷ 7 = 36."
}
```

### Contoh 4: Soal cerita, sisa harus dipikirkan

**Soal.** Ada 130 siswa yang akan naik bus mini. Satu bus mini memuat 8 siswa. Berapa bus mini yang dibutuhkan?

```soal
{
 "title": "Kerjakan bersama",
 "text": "Ada 130 siswa yang akan naik bus mini. Satu bus mini memuat 8 siswa. Berapa bus mini yang dibutuhkan?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Hitungan apa yang dipakai?",
   "options": [
    "130 ÷ 8",
    "130 × 8",
    "130 − 8"
   ],
   "answer": "130 ÷ 8",
   "hint": "Siswa dibagi ke kelompok berisi 8.",
   "explain": "Membagi 130 ke kelompok berisi 8: 130 ÷ 8.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "longdiv",
   "dividend": 130,
   "divisor": 8,
   "prompt": "Langkah 2: Hitung dengan porogapit.",
   "hint": "8 muat berapa kali di 13?",
   "explain": "1, 8, sisa 5, turunkan 0 jadi 50, 6, 48, sisa 2."
  },
  {
   "kind": "number",
   "prompt": "Ada berapa siswa yang tersisa (sisa)?",
   "answer": "2",
   "hint": "Angka paling bawah.",
   "explain": "16 bus penuh, masih ada 2 siswa.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Pikirkan sisanya. Berapa bus yang dibutuhkan?",
   "answer": "17",
   "hint": "2 siswa yang tersisa tidak boleh ditinggal.",
   "explain": "16 bus penuh ditambah 1 bus untuk 2 siswa = 17 bus.",
   "error": "salah-tafsir-sisa",
   "suffix": "bus"
  }
 ],
 "conclusion": "Dibutuhkan 17 bus mini."
}
```

## Kesalahan yang sering terjadi

- **Lupa menulis 0 di hasil bagi.** Pada 412 ÷ 4, setelah 4 ÷ 4 = 1, angka berikutnya 1 tidak bisa dibagi 4. Banyak anak langsung lanjut dan menulis 13. Yang benar: tulis **0** di atas angka 1, turunkan 2 menjadi 12, lalu 12 ÷ 4 = 3. Jawabannya 103.
- **Sisa lebih besar dari pembagi.** Menulis 75 ÷ 6 = 11 sisa 9. Sisa 9 masih bisa dibagi 6, jadi hasil baginya kurang. Selalu cek: sisa harus lebih kecil dari pembagi.
- **Lupa menurunkan angka.** Setelah mengurangi, langsung membagi sisa tanpa menurunkan angka berikutnya. Ingat urutan **Bagi, Kali, Kurang, Turun**.
- **Salah tabel perkalian.** Menebak 7 × 6 = 48. Kalau ragu, hitung loncat: 7, 14, 21, 28, 35, 42.
- **Mengabaikan arti sisa di soal cerita.** Menjawab "16 bus" pada contoh 4. Sisa siswa tetap butuh tempat duduk.

## Ringkasan

- Pembagian bersusun membagi angka dari **kiri ke kanan**, seperti membagi uang besar dulu.
- Setiap putaran: **Bagi, Kali, Kurang, Turun**.
- Kalau angka terlalu kecil untuk dibagi, tulis 0 di hasil (kecuali di paling depan), lalu gabungkan dengan angka berikutnya.
- **Sisa harus lebih kecil dari pembagi.**
- Cek jawaban: (hasil bagi × pembagi) + sisa = yang dibagi.

## Cek pemahaman

Kerjakan sendiri langkah demi langkah.

```soal
{
 "title": "Soal 1",
 "text": "Hitung $84 \\div 3$.",
 "steps": [
  {
   "kind": "longdiv",
   "dividend": 84,
   "divisor": 3,
   "prompt": "Kerjakan dengan porogapit.",
   "hint": "3 muat berapa kali di 8?",
   "explain": "2, 6, sisa 2, turunkan 4 jadi 24, 8."
  }
 ],
 "conclusion": "Jadi 84 ÷ 3 = 28."
}
```

```soal
{
 "title": "Soal 2",
 "text": "Hitung $59 \\div 4$.",
 "steps": [
  {
   "kind": "longdiv",
   "dividend": 59,
   "divisor": 4,
   "prompt": "Kerjakan dengan porogapit.",
   "hint": "4 muat berapa kali di 5?",
   "explain": "1, 4, sisa 1, turunkan 9 jadi 19, 4, 16, sisa 3."
  },
  {
   "kind": "number",
   "prompt": "Berapa sisanya?",
   "answer": "3",
   "hint": "Angka paling bawah.",
   "explain": "Sisa 3.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 59 ÷ 4 = 14 sisa 3."
}
```

```soal
{
 "title": "Soal 3",
 "text": "Hitung $312 \\div 6$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Apakah 6 muat di angka pertama, 3?",
   "options": [
    "Tidak, lihat 31",
    "Ya"
   ],
   "answer": "Tidak, lihat 31",
   "hint": "Bandingkan 3 dengan 6.",
   "explain": "3 lebih kecil dari 6, jadi kita lihat 31.",
   "error": "tebakan-bagi-kebesaran"
  },
  {
   "kind": "longdiv",
   "dividend": 312,
   "divisor": 6,
   "prompt": "Kerjakan dengan porogapit.",
   "hint": "6 muat berapa kali di 31?",
   "explain": "5, 30, sisa 1, turunkan 2 jadi 12, 2."
  }
 ],
 "conclusion": "Jadi 312 ÷ 6 = 52."
}
```

```soal
{
 "title": "Soal 4",
 "text": "Hitung $618 \\div 3$.",
 "steps": [
  {
   "kind": "longdiv",
   "dividend": 618,
   "divisor": 3,
   "prompt": "Kerjakan dengan porogapit. Hati-hati dengan angka 1!",
   "hint": "Kalau 3 tidak muat di 1, tulis 0 di hasil bagi.",
   "explain": "2, lalu 0 (3 tidak muat di 1), turunkan 8 jadi 18, 6."
  },
  {
   "kind": "number",
   "prompt": "Jadi 618 ÷ 3 = ?",
   "answer": "206",
   "hint": "Baca hasil bagi di atas, jangan lupa angka 0.",
   "explain": "Hasilnya 206.",
   "error": "lupa-nol-hasil-bagi"
  }
 ],
 "conclusion": "Jadi 618 ÷ 3 = 206."
}
```

```soal
{
 "title": "Soal 5",
 "text": "Bu Made punya 100 tangkai bunga. Setiap ikat berisi 7 tangkai. Berapa ikat yang bisa dibuat, dan berapa tangkai yang tersisa?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Hitungan apa yang dipakai?",
   "options": [
    "100 ÷ 7",
    "100 × 7",
    "100 − 7"
   ],
   "answer": "100 ÷ 7",
   "hint": "Bunga dibagi menjadi ikatan berisi 7.",
   "explain": "100 ÷ 7.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "longdiv",
   "dividend": 100,
   "divisor": 7,
   "prompt": "Kerjakan dengan porogapit.",
   "hint": "7 muat berapa kali di 10?",
   "explain": "1, 7, sisa 3, turunkan 0 jadi 30, 4, 28, sisa 2."
  },
  {
   "kind": "number",
   "prompt": "Berapa ikat yang bisa dibuat?",
   "answer": "14",
   "hint": "Hasil bagi.",
   "explain": "14 ikat.",
   "error": "salah-langkah-materi",
   "suffix": "ikat"
  },
  {
   "kind": "number",
   "prompt": "Berapa tangkai yang tersisa?",
   "answer": "2",
   "hint": "Sisa pembagian.",
   "explain": "Sisa 2 tangkai.",
   "error": "salah-tafsir-sisa",
   "suffix": "tangkai"
  }
 ],
 "conclusion": "14 ikat, sisa 2 tangkai."
}
```
