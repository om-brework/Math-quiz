---
id: sd3-06-pecahan-senilai
judul: Pecahan Senilai dan Membandingkan Pecahan
jenjang: sd3
moe: "Primary 3 · Number and Algebra · Fractions"
prasyarat: [sd2-06-pecahan-bagian-utuh, sd3-03-perkalian-6-7-8-9]
durasi_menit: 40
---

## Kenapa belajar ini?

Siti makan $\frac{1}{2}$ martabak. Budi makan $\frac{2}{4}$ martabak yang sama besar. Siapa yang makan lebih banyak? Ternyata sama banyak! Materi ini mengajarkan cara mengenali pecahan yang sama besar, dan cara membandingkan pecahan yang penyebutnya berbeda.

## Analogi

Bayangkan sebuah **martabak manis** bundar.

Ibu memotong martabak menjadi 2 potong sama besar. Kamu mengambil 1 potong. Itu $\frac{1}{2}$ martabak.

```anim
{"type": "pecahan", "parts": 2, "shaded": 1, "shape": "lingkaran", "name": "martabak", "title": "Setengah martabak"}
```

Sekarang setiap potong dipotong lagi menjadi 2. Martabak sekarang punya 4 potong. Potonganmu tadi menjadi 2 potong kecil. Kamu memegang $\frac{2}{4}$ martabak.

```anim
{"type": "pecahan", "parts": 4, "shaded": 2, "shape": "lingkaran", "name": "martabak", "title": "Dipotong lagi: 2 dari 4 potong"}
```

Apakah martabakmu bertambah? **Tidak.** Banyaknya tetap, hanya potongannya lebih kecil. Jadi $\frac{1}{2} = \frac{2}{4}$.

Memotong lagi dan menggabungkan potongan tidak mengubah banyaknya martabak. Ide ini dipakai di seluruh materi.

## Konsep

### Pecahan senilai

**Pecahan senilai** adalah pecahan yang berbeda tulisannya tetapi sama besarnya.

Setiap potong dipotong lagi menjadi 2, artinya pembilang dan penyebut **dikali 2**:

$$\frac{1}{2} = \frac{1 \times 2}{2 \times 2} = \frac{2}{4}$$

Dipotong menjadi 3 artinya dikali 3, dan seterusnya:

$$\frac{1}{2} = \frac{2}{4} = \frac{3}{6} = \frac{4}{8} = \frac{5}{10} = \frac{6}{12}$$

```visual
{"type": "fraction", "shape": "bar", "parts": 8, "shaded": 4, "caption": "Batang yang sama dipotong 8: 4 potong diarsir, tetap setengah"}
```

Aturannya: **kalikan atau bagi pembilang dan penyebut dengan bilangan yang sama.**

### Bentuk paling sederhana

Kebalikan dari memotong adalah **menggabungkan** potongan. Misalnya $\frac{6}{8}$: gabungkan setiap 2 potong menjadi 1 potong besar.

$$\frac{6}{8} = \frac{6 \div 2}{8 \div 2} = \frac{3}{4}$$

Pecahan dalam **bentuk paling sederhana** kalau pembilang dan penyebut tidak bisa lagi dibagi bilangan yang sama (selain 1). $\frac{3}{4}$ sudah paling sederhana.

```visual
{"type": "fraction", "shape": "bar", "parts": 4, "shaded": 3, "caption": "Setiap 2 potong perdelapan digabung: 6 dari 8 menjadi 3 dari 4"}
```

### Mencari pecahan senilai yang belum lengkap

Kadang salah satu angka sudah diketahui:

- $\frac{2}{3} = \frac{?}{12}$. Penyebut 3 menjadi 12, berarti dikali 4. Pembilang juga dikali 4: 2 × 4 = 8.
- $\frac{3}{4} = \frac{9}{?}$. Pembilang 3 menjadi 9, berarti dikali 3. Penyebut juga dikali 3: 4 × 3 = 12.

### Membandingkan pecahan

Ada tiga keadaan:

1. **Penyebut sama.** Potongannya sama besar. Bandingkan pembilangnya. $\frac{5}{8} > \frac{3}{8}$.
2. **Pembilang sama.** Banyak potongnya sama. Makin besar penyebut, makin kecil tiap potongnya. Martabak dipotong 8 punya potongan lebih kecil daripada martabak dipotong 4. Jadi $\frac{1}{8} < \frac{1}{4}$, dan $\frac{3}{8} < \frac{3}{4}$.

```visual
{"type": "fraction", "shape": "circle", "parts": 8, "shaded": 1, "caption": "Satu potong dari 8: lebih kecil daripada satu potong dari 4"}
```
3. **Pembilang dan penyebut berbeda.** Ubah dulu menjadi pecahan senilai dengan **penyebut yang sama**, lalu bandingkan pembilangnya.

Untuk mengurutkan beberapa pecahan, ubah semuanya ke penyebut yang sama, lalu urutkan pembilangnya.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Melengkapi pecahan senilai

```soal
{
 "title": "Contoh 1",
 "text": "Isilah: a) $\\frac{2}{3} = \\frac{?}{12}$, b) $\\frac{3}{4} = \\frac{9}{?}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: a) Penyebut 3 menjadi 12. Dikali berapa?",
   "answer": "4",
   "hint": "3 × ? = 12.",
   "explain": "3 × 4 = 12. Setiap potong dipotong lagi menjadi 4.",
   "error": "salah-pengali-senilai"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: a) Pembilang juga dikali 4. 2 × 4 = ?",
   "answer": "8",
   "hint": "Pembilang dan penyebut dikali bilangan yang sama.",
   "explain": "2 × 4 = 8, jadi $\\frac{2}{3} = \\frac{8}{12}$.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: b) Pembilang 3 menjadi 9. Dikali berapa?",
   "answer": "3",
   "hint": "3 × ? = 9.",
   "explain": "3 × 3 = 9.",
   "error": "salah-pengali-senilai"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: b) Penyebut juga dikali 3. 4 × 3 = ?",
   "answer": "12",
   "hint": "Kalikan penyebut dengan pengali yang sama.",
   "explain": "4 × 3 = 12, jadi $\\frac{3}{4} = \\frac{9}{12}$.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "fraction",
   "prompt": "Cek jawaban: $\\frac{8}{12}$ dibagi 4 atas dan bawah menjadi ...",
   "answer": {
    "num": 2,
    "den": 3
   },
   "hint": "8 ÷ 4 dan 12 ÷ 4.",
   "explain": "$\\frac{8}{12} = \\frac{2}{3}$. Benar.",
   "error": "salah-pembagi-sama",
   "simplest": true
  }
 ],
 "conclusion": "Jadi a) $\\frac{8}{12}$, b) $\\frac{9}{12}$.",
 "visual": {
  "type": "fraction",
  "shape": "bar",
  "parts": 3,
  "shaded": 2
 }
}
```

### Contoh 2: Bentuk paling sederhana

```soal
{
 "title": "Contoh 2",
 "text": "Tulis $\\frac{8}{12}$ dalam bentuk paling sederhana.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Bilangan terbesar yang membagi 8 dan 12 sekaligus?",
   "answer": "4",
   "hint": "8 dan 12 bisa dibagi 2. Adakah yang lebih besar?",
   "explain": "8 dan 12 sama-sama habis dibagi 4.",
   "error": "salah-pembagi-sama"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Bagi pembilang. 8 ÷ 4 = ?",
   "answer": "2",
   "hint": "Delapan dibagi empat.",
   "explain": "8 ÷ 4 = 2.",
   "error": "salah-pembagi-sama"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Bagi penyebut. 12 ÷ 4 = ?",
   "answer": "3",
   "hint": "Dua belas dibagi empat.",
   "explain": "12 ÷ 4 = 3.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 4: Tulis bentuk paling sederhananya.",
   "answer": {
    "num": 2,
    "den": 3
   },
   "hint": "Pembilang dari Langkah 2, penyebut dari Langkah 3.",
   "explain": "$\\frac{2}{3}$. 2 dan 3 tidak bisa dibagi bilangan yang sama selain 1.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\frac{8}{12} = \\frac{2}{3}$.",
 "visual": {
  "type": "fraction",
  "shape": "bar",
  "parts": 12,
  "shaded": 8
 }
}
```

### Contoh 3: Mengurutkan pecahan

```soal
{
 "title": "Contoh 3",
 "text": "Urutkan dari yang terkecil: $\\frac{1}{2}$, $\\frac{3}{4}$, $\\frac{5}{8}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Penyebut 2, 4, dan 8 semuanya bisa menjadi berapa?",
   "answer": "8",
   "hint": "Cari bilangan di tabel 2 dan tabel 4 yang juga ada di sini.",
   "explain": "Semua bisa diubah menjadi perdelapan.",
   "error": "banding-tanpa-samakan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\frac{1}{2} = \\frac{?}{8}$",
   "answer": "4",
   "hint": "2 dikali 4 menjadi 8.",
   "explain": "1 × 4 = 4, jadi $\\frac{4}{8}$.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\frac{3}{4} = \\frac{?}{8}$",
   "answer": "6",
   "hint": "4 dikali 2 menjadi 8.",
   "explain": "3 × 2 = 6, jadi $\\frac{6}{8}$.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Pembilangnya 4, 6, dan 5. Susun dari yang terkecil.",
   "options": [
    "$\\frac{1}{2}$, $\\frac{5}{8}$, $\\frac{3}{4}$",
    "$\\frac{1}{2}$, $\\frac{3}{4}$, $\\frac{5}{8}$",
    "$\\frac{3}{4}$, $\\frac{5}{8}$, $\\frac{1}{2}$"
   ],
   "answer": "$\\frac{1}{2}$, $\\frac{5}{8}$, $\\frac{3}{4}$",
   "hint": "Urutkan 4, 5, 6, lalu kembalikan ke pecahan asal.",
   "explain": "$\\frac{4}{8} < \\frac{5}{8} < \\frac{6}{8}$.",
   "error": "salah-urutan-bilangan"
  }
 ],
 "conclusion": "Urutannya $\\frac{1}{2}$, $\\frac{5}{8}$, $\\frac{3}{4}$."
}
```

### Contoh 4: Soal cerita

```soal
{
 "title": "Contoh 4",
 "text": "Made makan $\\frac{2}{3}$ martabak. Putu makan $\\frac{3}{4}$ martabak yang sama besar. Siapa yang makan lebih banyak?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Bilangan yang ada di tabel 3 dan tabel 4?",
   "answer": "12",
   "hint": "Tabel 3: 3, 6, 9, 12. Tabel 4: 4, 8, 12.",
   "explain": "12. Potong kedua martabak menjadi 12.",
   "error": "banding-tanpa-samakan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\frac{2}{3} = \\frac{?}{12}$",
   "answer": "8",
   "hint": "3 dikali 4 menjadi 12.",
   "explain": "2 × 4 = 8, jadi $\\frac{8}{12}$.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\frac{3}{4} = \\frac{?}{12}$",
   "answer": "9",
   "hint": "4 dikali 3 menjadi 12.",
   "explain": "3 × 3 = 9, jadi $\\frac{9}{12}$.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Siapa yang makan lebih banyak?",
   "options": [
    "Putu",
    "Made",
    "Sama banyak"
   ],
   "answer": "Putu",
   "hint": "Bandingkan 8 potong dan 9 potong.",
   "explain": "9 potong lebih banyak, jadi $\\frac{3}{4} > \\frac{2}{3}$.",
   "error": "banding-pecahan"
  }
 ],
 "conclusion": "Putu makan lebih banyak."
}
```

## Kesalahan yang sering terjadi

- **Hanya mengubah satu angka.** Menulis $\frac{2}{3} = \frac{2}{12}$. Kalau penyebut dikali 4, pembilang juga harus dikali 4. Kalau tidak, besar potongannya berubah.
- **Menambah, bukan mengali.** Menulis $\frac{2}{3} = \frac{3}{4}$ karena "atas dan bawah sama-sama ditambah 1". Pecahan senilai dibuat dengan **mengali atau membagi**, bukan menambah.
- **Mengira penyebut besar berarti pecahan besar.** Mengira $\frac{1}{8} > \frac{1}{4}$ karena 8 > 4. Martabak yang dipotong 8 punya potongan lebih kecil. Jadi $\frac{1}{8} < \frac{1}{4}$.
- **Berhenti sebelum paling sederhana.** Menulis $\frac{8}{12} = \frac{4}{6}$ lalu berhenti. 4 dan 6 masih bisa dibagi 2, jadi lanjutkan menjadi $\frac{2}{3}$.

## Ringkasan

- Pecahan senilai: besarnya sama, tulisannya berbeda. $\frac{1}{2} = \frac{2}{4} = \frac{4}{8}$.
- Kalikan atau bagi pembilang **dan** penyebut dengan bilangan yang sama.
- Bentuk paling sederhana: bagi sampai pembilang dan penyebut tidak bisa dibagi bilangan yang sama lagi.
- Penyebut sama: bandingkan pembilang. Pembilang sama: penyebut lebih besar berarti pecahan lebih kecil.
- Penyebut berbeda: samakan penyebut dulu, lalu bandingkan.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "$\\frac{4}{5} = \\frac{8}{?}$",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Pembilang 4 menjadi 8. Dikali berapa?",
   "answer": "2",
   "hint": "4 × ? = 8.",
   "explain": "4 × 2 = 8.",
   "error": "salah-pengali-senilai"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Penyebutnya berapa?",
   "answer": "10",
   "hint": "Penyebut 5 juga dikali 2.",
   "explain": "5 × 2 = 10.",
   "error": "senilai-satu-angka"
  }
 ],
 "conclusion": "Jadi $\\frac{4}{5} = \\frac{8}{10}$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "$\\frac{1}{3} = \\frac{?}{9}$",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Penyebut 3 menjadi 9. Dikali berapa?",
   "answer": "3",
   "hint": "3 × ? = 9.",
   "explain": "3 × 3 = 9.",
   "error": "salah-pengali-senilai"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Pembilangnya berapa?",
   "answer": "3",
   "hint": "Pembilang 1 juga dikali 3.",
   "explain": "1 × 3 = 3.",
   "error": "senilai-satu-angka"
  }
 ],
 "conclusion": "Jadi $\\frac{1}{3} = \\frac{3}{9}$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Tulis $\\frac{10}{12}$ dalam bentuk paling sederhana.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Bilangan terbesar yang membagi 10 dan 12 sekaligus?",
   "answer": "2",
   "hint": "Keduanya bilangan genap.",
   "explain": "10 dan 12 sama-sama habis dibagi 2, tidak ada yang lebih besar.",
   "error": "salah-pembagi-sama"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Tulis bentuk paling sederhananya.",
   "answer": {
    "num": 5,
    "den": 6
   },
   "hint": "Bagi atas dan bawah dengan 2.",
   "explain": "10 ÷ 2 = 5 dan 12 ÷ 2 = 6.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "Jadi $\\frac{10}{12} = \\frac{5}{6}$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Urutkan dari yang terbesar: $\\frac{2}{3}$, $\\frac{1}{6}$, $\\frac{1}{2}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Ubah ke perenam. $\\frac{2}{3} = \\frac{?}{6}$",
   "answer": "4",
   "hint": "3 dikali 2 menjadi 6.",
   "explain": "2 × 2 = 4.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\frac{1}{2} = \\frac{?}{6}$",
   "answer": "3",
   "hint": "2 dikali 3 menjadi 6.",
   "explain": "1 × 3 = 3.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Susun dari yang terbesar.",
   "options": [
    "$\\frac{2}{3}$, $\\frac{1}{2}$, $\\frac{1}{6}$",
    "$\\frac{1}{6}$, $\\frac{1}{2}$, $\\frac{2}{3}$",
    "$\\frac{1}{2}$, $\\frac{2}{3}$, $\\frac{1}{6}$"
   ],
   "answer": "$\\frac{2}{3}$, $\\frac{1}{2}$, $\\frac{1}{6}$",
   "hint": "Bandingkan 4, 1, dan 3 perenam.",
   "explain": "$\\frac{4}{6} > \\frac{3}{6} > \\frac{1}{6}$.",
   "error": "banding-tanpa-samakan"
  }
 ],
 "conclusion": "Urutannya $\\frac{2}{3}$, $\\frac{1}{2}$, $\\frac{1}{6}$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Rina menghabiskan $\\frac{3}{5}$ botol jus. Dimas menghabiskan $\\frac{7}{10}$ botol jus yang sama besar. Siapa yang minum lebih banyak?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: $\\frac{3}{5} = \\frac{?}{10}$",
   "answer": "6",
   "hint": "5 dikali 2 menjadi 10.",
   "explain": "3 × 2 = 6.",
   "error": "senilai-satu-angka"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Siapa yang minum lebih banyak?",
   "options": [
    "Dimas",
    "Rina",
    "Sama banyak"
   ],
   "answer": "Dimas",
   "hint": "Bandingkan 6 persepuluh dan 7 persepuluh.",
   "explain": "$\\frac{7}{10} > \\frac{6}{10}$, jadi Dimas.",
   "error": "banding-pecahan"
  }
 ],
 "conclusion": "Dimas minum lebih banyak."
}
```
