---
id: smp1-01-prima-fpb-kpk
judul: Bilangan Prima, FPB, dan KPK
jenjang: smp1
moe: "Secondary 1 · Number and Algebra · N1 Numbers and their operations"
prasyarat: [sd4-02-faktor-kelipatan, sd6-06-volume-lanjut]
durasi_menit: 60
---

## Kenapa belajar ini?

Bu Siti ingin membuat parsel sebanyak-banyaknya dengan isi yang sama persis. Dua bus berangkat dari terminal dengan jadwal berbeda, dan kita ingin tahu kapan keduanya berangkat bersamaan lagi. Soal seperti ini diselesaikan dengan FPB dan KPK. Kuncinya adalah memecah bilangan menjadi faktor-faktor prima.

## Analogi

Bayangkan setiap bilangan bulat positif sebagai **bangunan dari balok Lego**. Balok dasarnya adalah **bilangan prima**: 2, 3, 5, 7, 11, dan seterusnya. Balok prima tidak bisa dipecah lagi.

- $12 = 2 \times 2 \times 3$: bangunan dari dua balok "2" dan satu balok "3".
- Setiap bilangan punya **satu resep balok saja**. Tidak ada cara lain menyusun 12 dari balok prima.

```anim
{"type": "persamaan", "title": "Memecah 12 menjadi balok prima", "baris": [{"tex": "12", "say": "Mulai dari bangunan 12."}, {"tex": "12 = 2 \\times 6", "say": "Lepas satu balok 2. Sisanya 6, masih bisa dipecah.", "op": "÷ 2"}, {"tex": "12 = 2 \\times 2 \\times 3", "say": "6 dipecah menjadi 2 dan 3. Keduanya prima.", "op": "÷ 2"}, {"tex": "12 = 2^2 \\times 3", "say": "Resep akhirnya: dua balok 2 dan satu balok 3."}]}
```

Dengan melihat resep balok, kita bisa menjawab banyak pertanyaan:

- **FPB**: balok apa saja yang dimiliki **kedua** bangunan.
- **KPK**: kotak terkecil yang cukup untuk menyusun **kedua** bangunan.
- **Kuadrat**: bangunan yang baloknya bisa dibagi menjadi **dua kelompok kembar**.

## Konsep

### Bilangan prima

**Bilangan prima** adalah bilangan bulat lebih dari 1 yang tepat mempunyai **dua faktor**: 1 dan dirinya sendiri.

- Bilangan prima di bawah 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.
- 2 adalah satu-satunya bilangan prima genap.
- Bilangan lebih dari 1 yang bukan prima disebut **bilangan komposit**. Contoh: $15 = 3 \times 5$.

Kenapa 1 bukan prima? Karena 1 hanya punya satu faktor. Selain itu, kalau 1 dianggap balok, resep balok tidak lagi tunggal: $6 = 2 \times 3 = 1 \times 2 \times 3 = 1 \times 1 \times 2 \times 3$. Dengan mengecualikan 1, setiap bilangan punya tepat satu resep.

**Mengecek apakah $n$ prima:** coba bagi $n$ dengan bilangan prima 2, 3, 5, 7, ... selama kuadrat prima itu tidak melebihi $n$. Kenapa cukup sampai situ? Kalau $n = a \times b$ dengan $a \le b$, maka $a \times a \le n$. Jadi salah satu faktor pasti tidak lebih dari $\sqrt{n}$.

### Faktorisasi prima

**Faktorisasi prima** adalah menulis bilangan sebagai hasil kali bilangan prima. Gunakan pembagian berulang dengan prima terkecil:

```visual
{"type": "table", "head": ["Bagi dengan prima", "Bilangan"], "rows": [["2", "360"], ["2", "180"], ["2", "90"], ["3", "45"], ["3", "15"], ["5", "5"], ["", "1"]], "caption": "Pembagian berulang 360 dengan prima terkecil"}
```

```anim
{"type": "persamaan", "title": "Faktorisasi prima 360", "baris": [{"tex": "360", "say": "Mulai dari 360. Bilangan genap, jadi bagi dengan 2."}, {"tex": "360 = 2 \\times 180", "say": "180 masih genap.", "op": "÷ 2"}, {"tex": "360 = 2 \\times 2 \\times 90", "say": "90 masih genap.", "op": "÷ 2"}, {"tex": "360 = 2 \\times 2 \\times 2 \\times 45", "say": "45 ganjil. Coba 3: jumlah angkanya 9.", "op": "÷ 2"}, {"tex": "360 = 2 \\times 2 \\times 2 \\times 3 \\times 15", "say": "15 habis dibagi 3.", "op": "÷ 3"}, {"tex": "360 = 2 \\times 2 \\times 2 \\times 3 \\times 3 \\times 5", "say": "Tinggal 5, sudah prima.", "op": "÷ 3"}, {"tex": "360 = 2^3 \\times 3^2 \\times 5", "say": "Tulis dengan notasi pangkat."}]}
```

$$360 = 2 \times 2 \times 2 \times 3 \times 3 \times 5 = 2^3 \times 3^2 \times 5$$

Bentuk $2^3$ disebut **notasi pangkat** (indeks). Pangkat menunjukkan berapa kali balok itu dipakai.

Sifat penting: setiap bilangan bulat lebih dari 1 punya **tepat satu** faktorisasi prima (urutan tidak diperhitungkan). Inilah alasan semua cara di bawah ini berhasil.

### FPB: faktor persekutuan terbesar

**FPB** dua bilangan adalah bilangan terbesar yang membagi habis keduanya.

**Aturan:** ambil faktor prima yang ada di **kedua** bilangan, dengan **pangkat terkecil**.

Kenapa? Pembagi suatu bilangan hanya boleh memakai balok yang ada di bilangan itu, dan tidak lebih banyak. Untuk membagi dua bilangan sekaligus, sebuah balok tidak boleh melebihi jumlahnya di bilangan mana pun. Maka kita ambil pangkat terkecil. Untuk mendapat yang **terbesar**, kita ambil semua balok bersama sebanyak mungkin.

### KPK: kelipatan persekutuan terkecil

**KPK** dua bilangan adalah bilangan positif terkecil yang habis dibagi keduanya.

**Aturan:** ambil **semua** faktor prima yang muncul, dengan **pangkat terbesar**.

Kenapa? Kelipatan suatu bilangan harus memuat semua balok bilangan itu. Supaya memuat balok kedua bilangan, setiap jenis balok harus sebanyak yang terbesar. Supaya **terkecil**, kita tidak menambah balok lain.

Untuk dua bilangan $a$ dan $b$ berlaku:

$$\text{FPB}(a, b) \times \text{KPK}(a, b) = a \times b$$

```visual
{"type": "table", "head": ["Bilangan", "2", "3", "5", "7"], "rows": [["84", "2²", "3¹", "-", "7¹"], ["90", "2¹", "3²", "5¹", "-"], ["FPB (pangkat terkecil, balok bersama)", "2¹", "3¹", "-", "-"], ["KPK (pangkat terbesar, semua balok)", "2²", "3²", "5¹", "7¹"]], "caption": "FPB(84, 90) = 6 dan KPK(84, 90) = 1.260"}
```

Ini karena setiap balok dipakai sekali di FPB (pangkat kecil) dan sekali di KPK (pangkat besar), sama seperti di $a \times b$. Rumus ini berguna untuk mengecek.

### Kuadrat, pangkat tiga, dan akarnya

- **Kuadrat sempurna** seperti $36 = 6^2$. Pada faktorisasi primanya, semua pangkat **genap**: $36 = 2^2 \times 3^2$.
- **Pangkat tiga sempurna** seperti $216 = 6^3$. Semua pangkatnya **kelipatan 3**: $216 = 2^3 \times 3^3$.

Kenapa? $6^2 = 6 \times 6$, jadi setiap balok di 6 muncul dua kali. Balok bisa dibagi menjadi dua kelompok kembar. Satu kelompok adalah akar kuadratnya.

**Cara mencari akar:**

- $\sqrt{n}$: bagi setiap pangkat dengan 2.
- $\sqrt[3]{n}$: bagi setiap pangkat dengan 3.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Faktorisasi prima dan uji prima

```soal
{
 "title": "Contoh 1",
 "text": "(a) Apakah 91 bilangan prima? (b) Tulis 504 dalam faktorisasi prima dengan notasi pangkat.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Tentukan batas uji. Berapa bilangan bulat terbesar yang kuadratnya tidak lebih dari 91?",
   "answer": "9",
   "hint": "Coba $9^2$ dan $10^2$.",
   "explain": "$9^2 = 81 \\le 91 < 100 = 10^2$. Cukup uji prima 2, 3, 5, 7.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Uji 2, 3, 5, 7. 91 habis dibagi prima berapa?",
   "answer": "7",
   "hint": "91 ganjil, jumlah angkanya 10, dan tidak berakhir 0 atau 5.",
   "explain": "$91 \\div 7 = 13$, habis.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Jadi, apakah 91 prima?",
   "options": [
    "Bukan, 91 = 7 × 13",
    "Ya, karena 91 ganjil",
    "Ya, karena tidak habis dibagi 3"
   ],
   "answer": "Bukan, 91 = 7 × 13",
   "hint": "Bilangan prima hanya punya faktor 1 dan dirinya sendiri.",
   "explain": "91 punya faktor 7 dan 13, jadi 91 komposit.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Bagi 504 dengan 2 terus-menerus. Berapa kali 504 bisa dibagi 2?",
   "answer": "3",
   "hint": "504, 252, 126, lalu 63 ganjil.",
   "explain": "$504 \\div 2 \\div 2 \\div 2 = 63$. Balok 2 dipakai tiga kali.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Lanjutkan: 63 dibagi 3 terus-menerus. Bilangan prima apa yang tersisa?",
   "answer": "7",
   "hint": "$63 \\div 3 = 21$, lalu $21 \\div 3$.",
   "explain": "$63 \\div 3 \\div 3 = 7$, dan 7 prima.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Tulis 504 dengan notasi pangkat.",
   "options": [
    "$2^3 \\times 3^2 \\times 7$",
    "$2^3 \\times 3 \\times 7$",
    "$2 \\times 3 \\times 7$",
    "$8 \\times 9 \\times 7$"
   ],
   "answer": "$2^3 \\times 3^2 \\times 7$",
   "hint": "Hitung berapa kali tiap balok dipakai, lalu tulis sebagai pangkat.",
   "explain": "Tiga balok 2, dua balok 3, satu balok 7.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $8 \\times 9 \\times 7 = ?$",
   "answer": "504",
   "hint": "$8 \\times 9 = 72$.",
   "explain": "$72 \\times 7 = 504$. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi 91 bukan prima ($91 = 7 \\times 13$) dan $504 = 2^3 \\times 3^2 \\times 7$."
}
```

### Contoh 2: FPB dan KPK

```soal
{
 "title": "Contoh 2",
 "text": "Tentukan FPB dan KPK dari 84 dan 90.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Faktorkan 84.",
   "options": [
    "$2^2 \\times 3 \\times 7$",
    "$2 \\times 3 \\times 14$",
    "$2^2 \\times 21$"
   ],
   "answer": "$2^2 \\times 3 \\times 7$",
   "hint": "Bagi berulang dengan 2, lalu 3, lalu 7.",
   "explain": "$84 = 2 \\times 2 \\times 3 \\times 7$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Faktorkan 90.",
   "options": [
    "$2 \\times 3^2 \\times 5$",
    "$2 \\times 45$",
    "$2 \\times 3 \\times 15$"
   ],
   "answer": "$2 \\times 3^2 \\times 5$",
   "hint": "Faktor harus semuanya prima.",
   "explain": "$90 = 2 \\times 3 \\times 3 \\times 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung FPB (balok bersama, pangkat terkecil).",
   "answer": "6",
   "hint": "Balok yang ada di keduanya hanya 2 dan 3.",
   "explain": "$2^1 \\times 3^1 = 6$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Hitung KPK (semua balok, pangkat terbesar).",
   "answer": "1260",
   "hint": "$2^2 \\times 3^2 \\times 5 \\times 7$.",
   "explain": "$4 \\times 9 \\times 35 = 1.260$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $\\text{FPB} \\times \\text{KPK} = 6 \\times 1.260 = ?$",
   "answer": "7560",
   "hint": "Bandingkan dengan $84 \\times 90$.",
   "explain": "$7.560 = 84 \\times 90$. Sama, jadi benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi FPB = 6 dan KPK = 1.260."
}
```

### Contoh 3: Akar kuadrat dan akar pangkat tiga

```soal
{
 "title": "Contoh 3",
 "text": "Tanpa kalkulator, hitung $\\sqrt{1.764}$ dan $\\sqrt[3]{2.744}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Faktorkan 1.764.",
   "options": [
    "$2^2 \\times 3^2 \\times 7^2$",
    "$2^2 \\times 3 \\times 7^2$",
    "$2 \\times 3^2 \\times 7^2$"
   ],
   "answer": "$2^2 \\times 3^2 \\times 7^2$",
   "hint": "1.764, 882, 441, 147, 49, 7, 1.",
   "explain": "Dua balok 2, dua balok 3, dua balok 7.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Bagi setiap pangkat dengan 2. $\\sqrt{1.764} = ?$",
   "answer": "42",
   "hint": "$2^1 \\times 3^1 \\times 7^1$.",
   "explain": "$2 \\times 3 \\times 7 = 42$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Faktorkan 2.744.",
   "options": [
    "$2^3 \\times 7^3$",
    "$2^3 \\times 7^2$",
    "$2^2 \\times 7^3$"
   ],
   "answer": "$2^3 \\times 7^3$",
   "hint": "2.744, 1.372, 686, 343, lalu bagi dengan 7.",
   "explain": "Tiga balok 2 dan tiga balok 7.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Bagi setiap pangkat dengan 3. $\\sqrt[3]{2.744} = ?$",
   "answer": "14",
   "hint": "$2^1 \\times 7^1$.",
   "explain": "$2 \\times 7 = 14$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $14 \\times 14 \\times 14 = ?$",
   "answer": "2744",
   "hint": "$14 \\times 14 = 196$.",
   "explain": "$196 \\times 14 = 2.744$. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\sqrt{1.764} = 42$ dan $\\sqrt[3]{2.744} = 14$."
}
```

### Contoh 4: Soal cerita FPB

```soal
{
 "title": "Contoh 4",
 "text": "Bu Siti punya 48 kue lapis dan 72 kue dadar. Ia ingin membuat parsel sebanyak-banyaknya, setiap parsel berisi kue lapis sama banyak dan kue dadar sama banyak, tanpa sisa. Berapa parsel yang bisa dibuat, dan apa isinya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Kenali jenis soal.",
   "options": [
    "FPB",
    "KPK",
    "Perkalian 48 × 72"
   ],
   "answer": "FPB",
   "hint": "Banyak parsel harus membagi habis 48 dan 72, dan sebesar mungkin.",
   "explain": "Pembagi bersama terbesar adalah FPB.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Faktorkan 48 dan 72.",
   "options": [
    "$48 = 2^4 \\times 3$, $72 = 2^3 \\times 3^2$",
    "$48 = 2^3 \\times 3$, $72 = 2^3 \\times 3^2$",
    "$48 = 2^4 \\times 3$, $72 = 2^2 \\times 3^3$"
   ],
   "answer": "$48 = 2^4 \\times 3$, $72 = 2^3 \\times 3^2$",
   "hint": "$48 = 16 \\times 3$ dan $72 = 8 \\times 9$.",
   "explain": "Itu faktorisasi primanya.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung FPB (pangkat terkecil).",
   "answer": "24",
   "hint": "$2^3 \\times 3^1$.",
   "explain": "$8 \\times 3 = 24$ parsel.",
   "error": "salah-langkah-materi",
   "suffix": "parsel"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Berapa kue lapis di tiap parsel?",
   "answer": "2",
   "hint": "$48 \\div 24$.",
   "explain": "$48 \\div 24 = 2$.",
   "error": "salah-langkah-materi",
   "suffix": "kue lapis"
  },
  {
   "kind": "number",
   "prompt": "Berapa kue dadar di tiap parsel?",
   "answer": "3",
   "hint": "$72 \\div 24$.",
   "explain": "$72 \\div 24 = 3$.",
   "error": "salah-langkah-materi",
   "suffix": "kue dadar"
  }
 ],
 "conclusion": "Jadi ada 24 parsel, masing-masing berisi 2 kue lapis dan 3 kue dadar."
}
```

### Contoh 5: Membuat kuadrat dan pangkat tiga sempurna

```soal
{
 "title": "Contoh 5",
 "text": "Tentukan bilangan bulat positif terkecil $k$ sehingga $180k$ merupakan (a) kuadrat sempurna; (b) pangkat tiga sempurna.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Faktorkan 180.",
   "options": [
    "$2^2 \\times 3^2 \\times 5$",
    "$2 \\times 3^2 \\times 10$",
    "$2^2 \\times 3 \\times 15$"
   ],
   "answer": "$2^2 \\times 3^2 \\times 5$",
   "hint": "Semua faktor harus prima.",
   "explain": "$180 = 4 \\times 9 \\times 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: (a) Supaya semua pangkat genap, berapa k terkecil?",
   "answer": "5",
   "hint": "Pangkat mana yang masih ganjil?",
   "explain": "Hanya $5^1$ yang ganjil, jadi tambah satu balok 5: $k = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: (b) Supaya semua pangkat kelipatan 3, berapa k terkecil?",
   "answer": "150",
   "hint": "Hitung kekurangan tiap balok sampai pangkat 3.",
   "explain": "Perlu satu 2, satu 3, dan dua 5: $k = 2 \\times 3 \\times 25 = 150$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $180 \\times 150 = ?$",
   "answer": "27000",
   "hint": "$180 \\times 100 + 180 \\times 50$.",
   "explain": "$27.000 = 30^3$. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi (a) k = 5 dan (b) k = 150."
}
```

## Kesalahan yang sering terjadi

- **Menganggap 1 bilangan prima, atau semua bilangan ganjil prima.** 1 bukan prima. 9, 15, 21, 91 ganjil tetapi komposit.
- **Faktorisasi belum selesai.** Menulis $360 = 4 \times 9 \times 10$. Itu belum faktorisasi prima karena 4, 9, dan 10 masih bisa dipecah.
- **Tertukar aturan pangkat.** Mengambil pangkat terbesar untuk FPB. Ingat: FPB adalah balok **bersama**, jadi pangkat terkecil. KPK adalah kotak **cukup untuk semua**, jadi pangkat terbesar.
- **KPK hanya dari faktor bersama.** Pada Contoh 2, menulis KPK $= 2^2 \times 3^2 = 36$. Faktor 5 dan 7 terlupa, padahal 36 tidak habis dibagi 84.
- **Salah memilih FPB atau KPK di soal cerita.** "Membagi sebanyak-banyaknya tanpa sisa" biasanya FPB. "Kapan bersamaan lagi" biasanya KPK.

## Ringkasan

- Bilangan prima tepat punya dua faktor. 1 bukan prima, 2 satu-satunya prima genap.
- Setiap bilangan lebih dari 1 punya tepat satu faktorisasi prima. Tulis dengan notasi pangkat.
- FPB: faktor prima bersama, pangkat terkecil. KPK: semua faktor prima, pangkat terbesar.
- $\text{FPB}(a,b) \times \text{KPK}(a,b) = a \times b$, berguna untuk mengecek.
- Kuadrat sempurna: semua pangkat genap; $\sqrt{n}$ = bagi pangkat dengan 2.
- Pangkat tiga sempurna: pangkat kelipatan 3; $\sqrt[3]{n}$ = bagi pangkat dengan 3.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Apakah 119 bilangan prima? Jelaskan.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Uji prima sampai berapa? Tulis bilangan bulat terbesar yang kuadratnya tidak lebih dari 119.",
   "answer": "10",
   "hint": "$10^2 = 100$, $11^2 = 121$.",
   "explain": "Cukup uji prima 2, 3, 5, 7.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "119 habis dibagi prima berapa?",
   "answer": "7",
   "hint": "Coba 7.",
   "explain": "$119 \\div 7 = 17$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Apakah 119 prima?",
   "options": [
    "Bukan, 119 = 7 × 17",
    "Ya, karena ganjil",
    "Ya, karena tidak habis dibagi 3"
   ],
   "answer": "Bukan, 119 = 7 × 17",
   "hint": "Prima hanya punya dua faktor.",
   "explain": "119 punya faktor 7 dan 17, jadi bukan prima.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "119 bukan prima, $119 = 7 \\times 17$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Tulis 600 dalam faktorisasi prima dengan notasi pangkat.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa kali 600 bisa dibagi 2?",
   "answer": "3",
   "hint": "600, 300, 150, lalu 75 ganjil.",
   "explain": "Pangkat 2 adalah 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Sisa 75. Berapa kali 75 bisa dibagi 5?",
   "answer": "2",
   "hint": "$75 \\div 5 = 15$, $15 \\div 5 = 3$.",
   "explain": "Pangkat 5 adalah 2, tersisa 3.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Tulis faktorisasinya.",
   "options": [
    "$2^3 \\times 3 \\times 5^2$",
    "$2^3 \\times 75$",
    "$2^2 \\times 3 \\times 5^2$",
    "$2^3 \\times 3^2 \\times 5$"
   ],
   "answer": "$2^3 \\times 3 \\times 5^2$",
   "hint": "Gabungkan balok 2, 3, dan 5.",
   "explain": "$8 \\times 3 \\times 25 = 600$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$600 = 2^3 \\times 3 \\times 5^2$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Tentukan FPB dan KPK dari 60 dan 126.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Faktorkan kedua bilangan.",
   "options": [
    "$60 = 2^2 \\times 3 \\times 5$, $126 = 2 \\times 3^2 \\times 7$",
    "$60 = 2^2 \\times 15$, $126 = 2 \\times 63$",
    "$60 = 2 \\times 3 \\times 10$, $126 = 2 \\times 3^2 \\times 7$"
   ],
   "answer": "$60 = 2^2 \\times 3 \\times 5$, $126 = 2 \\times 3^2 \\times 7$",
   "hint": "Semua faktor harus prima.",
   "explain": "Itu faktorisasi primanya.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "FPB = ?",
   "answer": "6",
   "hint": "Balok bersama dengan pangkat terkecil.",
   "explain": "$2 \\times 3 = 6$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "KPK = ?",
   "answer": "1260",
   "hint": "Semua balok dengan pangkat terbesar.",
   "explain": "$2^2 \\times 3^2 \\times 5 \\times 7 = 1.260$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek: $6 \\times 1.260 = ?$",
   "answer": "7560",
   "hint": "Harus sama dengan $60 \\times 126$.",
   "explain": "$7.560 = 60 \\times 126$. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "FPB = 6 dan KPK = 1.260."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Dengan faktorisasi prima, hitung $\\sqrt{576}$ dan $\\sqrt[3]{3.375}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Faktorisasi 576 adalah",
   "options": [
    "$2^6 \\times 3^2$",
    "$2^5 \\times 3^2$",
    "$2^6 \\times 3$"
   ],
   "answer": "$2^6 \\times 3^2$",
   "hint": "Bagi 576 dengan 2 sampai ganjil.",
   "explain": "576 dibagi 2 enam kali menjadi 9.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\sqrt{576} = ?$",
   "answer": "24",
   "hint": "Bagi setiap pangkat dengan 2.",
   "explain": "$2^3 \\times 3 = 24$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Faktorisasi 3.375 adalah",
   "options": [
    "$3^3 \\times 5^3$",
    "$3^2 \\times 5^3$",
    "$3^3 \\times 5^2$"
   ],
   "answer": "$3^3 \\times 5^3$",
   "hint": "3.375 berakhir 5, bagi dengan 5 dulu.",
   "explain": "$3.375 = 27 \\times 125$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\sqrt[3]{3.375} = ?$",
   "answer": "15",
   "hint": "Bagi setiap pangkat dengan 3.",
   "explain": "$3 \\times 5 = 15$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\sqrt{576} = 24$ dan $\\sqrt[3]{3.375} = 15$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Lampu merah berkedip setiap 8 detik, lampu kuning setiap 12 detik, dan lampu hijau setiap 20 detik. Ketiganya berkedip bersamaan pukul 19.00.00. Setelah berapa detik ketiganya berkedip bersamaan lagi?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Ini soal FPB atau KPK?",
   "options": [
    "KPK",
    "FPB"
   ],
   "answer": "KPK",
   "hint": "Kapan bersamaan lagi = kelipatan bersama terkecil.",
   "explain": "Waktu bersamaan adalah kelipatan ketiganya.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "choice",
   "prompt": "Faktorkan 8, 12, 20.",
   "options": [
    "$2^3$, $2^2 \\times 3$, $2^2 \\times 5$",
    "$2^3$, $2 \\times 6$, $2 \\times 10$",
    "$2^2$, $2^2 \\times 3$, $2^2 \\times 5$"
   ],
   "answer": "$2^3$, $2^2 \\times 3$, $2^2 \\times 5$",
   "hint": "Pecah sampai semuanya prima.",
   "explain": "Itu faktorisasi primanya.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "KPK = ?",
   "answer": "120",
   "hint": "Semua balok, pangkat terbesar.",
   "explain": "$2^3 \\times 3 \\times 5 = 120$.",
   "error": "salah-langkah-materi",
   "suffix": "detik"
  }
 ],
 "conclusion": "Setelah 120 detik (2 menit)."
}
```
