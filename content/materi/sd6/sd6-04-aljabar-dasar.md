---
id: sd6-04-aljabar-dasar
judul: Aljabar Dasar
jenjang: sd6
moe: "Primary 6 · Number and Algebra · Algebra"
prasyarat: [sd5-02-operasi-hitung-campuran]
durasi_menit: 45
---

## Kenapa belajar ini?

Kadang kita belum tahu sebuah bilangan, tetapi tetap ingin menuliskan hubungannya. Misalnya, "harga sebuah pensil" yang belum diketahui. Aljabar memakai huruf sebagai pengganti bilangan itu. Dengan aljabar, soal cerita yang rumit bisa ditulis singkat lalu diselesaikan.

## Analogi

Bayangkan **kantong tertutup** berisi kelereng. Semua kantong berisi kelereng **sama banyak**, tetapi kita belum tahu berapa. Banyak kelereng di satu kantong kita sebut $a$.

- Satu kantong ditambah 3 kelereng lepas: $a + 3$.
- Tiga kantong: $3a$.
- Isi satu kantong dibagi rata ke 3 anak: $\frac{a}{3}$.

Kalau kantong dibuka dan ternyata isinya 5, kita bisa menghitung semuanya. Kantong ini kita pakai terus di setiap langkah.

```visual
{"type": "barModel", "bars": [{"label": "Kantong", "units": 3, "unitValue": "a"}, {"label": "Lepas", "units": 3, "unitValue": "1"}], "caption": "Tiga kantong (3a) dan 3 kelereng lepas: 3a + 3. Kantong yang sama berisi sama banyak."}
```

## Konsep

### Huruf sebagai pengganti bilangan

Huruf seperti $a$, $n$, $x$, atau $p$ disebut **variabel**. Variabel mewakili bilangan yang belum diketahui atau bisa berubah.

Gabungan variabel, bilangan, dan tanda hitung disebut **bentuk aljabar**. Contoh: $a + 3$, $2n - 1$, $\frac{x}{4}$.

### Cara menulis bentuk aljabar

| Kalimat | Bentuk aljabar | Kantong kelereng |
|---|---|---|
| $a$ ditambah 3 | $a + 3$ | 1 kantong dan 3 kelereng lepas |
| $a$ dikurangi 3 | $a - 3$ | 1 kantong, diambil 3 kelereng |
| 3 dikali $a$ | $3a$ | 3 kantong |
| $a$ dibagi 3 | $\frac{a}{3}$ | 1 kantong dibagi ke 3 anak |

Aturan penulisan:

- $3 \times a$ ditulis $3a$. Bilangan ditulis di depan huruf.
- $1a$ cukup ditulis $a$.
- $a \div 3$ ditulis $\frac{a}{3}$.
- "3 dikurangi $a$" ditulis $3 - a$, berbeda dengan $a - 3$.

### Menyederhanakan bentuk linear

**Suku sejenis** adalah suku dengan huruf yang sama, misalnya $2a$ dan $5a$. Suku sejenis bisa dijumlahkan atau dikurangkan.

$$2a + 5a = 7a$$

Artinya: 2 kantong ditambah 5 kantong sama dengan 7 kantong.

Kantong dan kelereng lepas **tidak bisa digabung**. Jadi $3a + 4$ tetap $3a + 4$, bukan $7a$.

Contoh: $4a + 5 - a + 2$. Kumpulkan kantong: $4a - a = 3a$. Kumpulkan kelereng lepas: $5 + 2 = 7$. Hasilnya $3a + 7$.

```anim
{"type": "persamaan", "title": "Mengumpulkan suku sejenis", "baris": [{"tex": "4a + 5 - a + 2", "say": "Ada kantong (a) dan kelereng lepas (angka)."}, {"tex": "(4a - a) + (5 + 2)", "say": "Kumpulkan kantong dengan kantong, kelereng lepas dengan kelereng lepas.", "op": "kelompokkan"}, {"tex": "3a + 7", "say": "4 kantong diambil 1 kantong = 3 kantong. 5 + 2 = 7 kelereng."}]}
```

### Substitusi

**Substitusi** artinya mengganti huruf dengan bilangan. Ini seperti membuka kantong dan melihat isinya.

Jika $a = 5$, maka $3a + 4 = 3 \times 5 + 4 = 15 + 4 = 19$.

### Persamaan linear sederhana

**Persamaan** adalah kalimat matematika dengan tanda $=$. Contoh: $3a + 4 = 19$.

Artinya: 3 kantong dan 4 kelereng lepas, jumlahnya 19 kelereng. Berapa isi satu kantong?

- Ambil 4 kelereng lepas dari kedua sisi: $3a = 15$.
- Tiga kantong berisi 15, jadi satu kantong: $a = 15 \div 3 = 5$.

Yang dilakukan di satu sisi harus dilakukan juga di sisi lain, supaya tetap sama.

```anim
{"type": "persamaan", "title": "Menyelesaikan 3a + 4 = 19 seperti timbangan", "baris": [{"tex": "3a + 4 = 19", "say": "3 kantong dan 4 kelereng lepas seimbang dengan 19 kelereng."}, {"tex": "3a = 15", "say": "Ambil 4 kelereng dari kedua sisi. Timbangan tetap seimbang.", "op": "kedua sisi $-\\,4$"}, {"tex": "a = 5", "say": "Tiga kantong berisi 15, jadi satu kantong berisi 5.", "op": "kedua sisi $\\div\\,3$"}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menulis bentuk aljabar

```soal
{
 "title": "Contoh 1",
 "text": "Budi punya $n$ permen. Tulis bentuk aljabar untuk: (a) permen Budi setelah diberi 5 lagi; (b) permen Siti yang banyaknya 3 kali permen Budi; (c) permen tiap anak jika permen Budi dibagi rata ke 4 anak.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: (a) Permen Budi setelah diberi 5 lagi.",
   "options": [
    "$n + 5$",
    "$5n$",
    "$n - 5$"
   ],
   "answer": "$n + 5$",
   "hint": "Diberi lagi artinya bertambah.",
   "explain": "Ditambah 5: $n + 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: (b) Permen Siti, 3 kali permen Budi.",
   "options": [
    "$3n$",
    "$n + 3$",
    "$\\frac{n}{3}$"
   ],
   "answer": "$3n$",
   "hint": "3 kali artinya dikali 3.",
   "explain": "$3 \\times n$ ditulis $3n$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: (c) Permen tiap anak jika dibagi rata ke 4 anak.",
   "options": [
    "$\\frac{n}{4}$",
    "$\\frac{4}{n}$",
    "$4n$"
   ],
   "answer": "$\\frac{n}{4}$",
   "hint": "Yang dibagi adalah permen Budi.",
   "explain": "$n \\div 4$ ditulis $\\frac{n}{4}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: coba $n = 8$. Berapa nilai $3n$?",
   "answer": "24",
   "hint": "$3n$ artinya $3 \\times n$.",
   "explain": "$3 \\times 8 = 24$ permen, sesuai cerita: Siti 3 kali Budi.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi (a) $n + 5$, (b) $3n$, (c) $\\frac{n}{4}$."
}
```

### Contoh 2: Menyederhanakan

```soal
{
 "title": "Contoh 2",
 "text": "Sederhanakan $7a + 4 - 2a + 6$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Suku yang sejenis dengan $7a$ adalah ...",
   "options": [
    "$-2a$",
    "$4$",
    "$6$"
   ],
   "answer": "$-2a$",
   "hint": "Cari suku yang juga punya huruf a.",
   "explain": "$7a$ dan $-2a$ sama-sama kantong. Ingat tanda minusnya.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Hitung kantong. $7a - 2a$ = ...",
   "options": [
    "$5a$",
    "$9a$",
    "$5$"
   ],
   "answer": "$5a$",
   "hint": "Tanda minus milik 2a.",
   "explain": "7 kantong diambil 2 kantong = $5a$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung kelereng lepas. 4 + 6 = ?",
   "answer": "10",
   "hint": "Jumlahkan bilangan tanpa huruf.",
   "explain": "4 + 6 = 10.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Tulis hasilnya.",
   "options": [
    "$5a + 10$",
    "$15a$",
    "$9a + 10$"
   ],
   "answer": "$5a + 10$",
   "hint": "Kantong dan kelereng lepas tidak bisa digabung.",
   "explain": "Hasilnya $5a + 10$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: coba $a = 1$. Berapa nilai $5a + 10$?",
   "answer": "15",
   "hint": "$5 \\times 1 + 10$.",
   "explain": "15. Bentuk awal juga $7 + 4 - 2 + 6 = 15$. Sama, jadi benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $7a + 4 - 2a + 6 = 5a + 10$."
}
```

### Contoh 3: Substitusi

```soal
{
 "title": "Contoh 3",
 "text": "Hitung nilai $\\frac{4k}{3} + 2k - 5$ jika $k = 6$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Ganti $k$ dengan 6. Berapa $4k$?",
   "answer": "24",
   "hint": "$4k = 4 \\times 6$.",
   "explain": "$4 \\times 6 = 24$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung pecahan $\\frac{24}{3}$.",
   "answer": "8",
   "hint": "24 ÷ 3.",
   "explain": "$\\frac{24}{3} = 8$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung $2k$.",
   "answer": "12",
   "hint": "$2 \\times 6$, bukan 26.",
   "explain": "$2 \\times 6 = 12$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Hitung 8 + 12 − 5.",
   "answer": "15",
   "hint": "Kerjakan dari kiri.",
   "explain": "8 + 12 = 20, lalu 20 − 5 = 15.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $\\frac{10k}{3} - 5$ untuk $k = 6$ = ?",
   "answer": "15",
   "hint": "$\\frac{60}{3} = 20$.",
   "explain": "20 − 5 = 15. Sama, jadi benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi nilainya 15."
}
```

### Contoh 4: Soal cerita dengan persamaan

```soal
{
 "title": "Contoh 4",
 "text": "Rina membeli 4 pensil dan 1 penghapus. Harga penghapus Rp3.000. Ia membayar Rp11.000. Berapa harga satu pensil?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Misalkan harga satu pensil $p$ rupiah. Persamaan yang tepat adalah ...",
   "options": [
    "$4p + 3.000 = 11.000$",
    "$4 + p + 3.000 = 11.000$",
    "$4p = 11.000 + 3.000$"
   ],
   "answer": "$4p + 3.000 = 11.000$",
   "hint": "4 pensil ditulis 4p, lalu tambah harga penghapus.",
   "explain": "4 pensil dan 1 penghapus: $4p + 3.000 = 11.000$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kurangi kedua sisi dengan 3.000. $4p$ = ?",
   "answer": "8.000",
   "hint": "11.000 − 3.000.",
   "explain": "$4p = 8.000$.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Bagi kedua sisi dengan 4. $p$ = ?",
   "answer": "2.000",
   "hint": "8.000 ÷ 4.",
   "explain": "$p = 2.000$.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $4 \\times 2.000 + 3.000$ = ?",
   "answer": "11.000",
   "hint": "8.000 + 3.000.",
   "explain": "11.000, sama dengan uang yang dibayar. Benar.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Jadi harga satu pensil Rp2.000."
}
```

## Kesalahan yang sering terjadi

- **Menggabungkan suku tidak sejenis.** Menulis $3a + 4 = 7a$. Salah, karena kantong dan kelereng lepas tidak bisa digabung. Biarkan sebagai $3a + 4$.
- **Salah membaca $3a$.** Jika $a = 5$, menulis $3a = 35$. Salah. $3a$ artinya $3 \times a = 15$, bukan angka 3 dan 5 ditempel.
- **Tanda minus tertinggal.** Pada $7a + 4 - 2a + 6$, menghitung $7a + 2a = 9a$. Tanda minus milik $2a$, jadi $7a - 2a = 5a$.
- **Urutan pengurangan terbalik.** "Kurangi 7 dari $m$" ditulis $7 - m$. Benar: $m - 7$.
- **Persamaan hanya diubah di satu sisi.** Dari $4p + 3.000 = 11.000$, menulis $4p = 11.000$. Kalau 3.000 diambil dari kiri, harus diambil juga dari kanan.

## Ringkasan

- Huruf (variabel) mewakili bilangan yang belum diketahui, seperti isi kantong tertutup.
- $a + 3$, $a - 3$, $3a$ (artinya $3 \times a$), dan $\frac{a}{3}$ (artinya $a \div 3$).
- Sederhanakan dengan menggabungkan suku sejenis saja.
- Substitusi: ganti huruf dengan bilangan, lalu hitung dengan urutan operasi yang benar.
- Persamaan: lakukan hal yang sama di kedua sisi sampai hurufnya sendirian.
- Cek dengan memasukkan jawaban kembali ke soal.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tulis bentuk aljabar untuk \"kurangi 7 dari $m$\".",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Bilangan mana yang dikurangi (ditulis di depan)?",
   "options": [
    "$m$",
    "7"
   ],
   "answer": "$m$",
   "hint": "Dari m diambil 7.",
   "explain": "Yang dikurangi adalah $m$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Bentuk aljabarnya adalah ...",
   "options": [
    "$m - 7$",
    "$7 - m$",
    "$7m$"
   ],
   "answer": "$m - 7$",
   "hint": "m ditulis di depan.",
   "explain": "Kurangi 7 dari $m$: $m - 7$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi bentuknya $m - 7$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Sederhanakan $6b + 9 - 4b - 2$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Hitung $6b - 4b$.",
   "options": [
    "$2b$",
    "$10b$",
    "$2$"
   ],
   "answer": "$2b$",
   "hint": "Tanda minus milik 4b.",
   "explain": "$6b - 4b = 2b$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Hitung 9 − 2.",
   "answer": "7",
   "hint": "Kelereng lepas.",
   "explain": "9 − 2 = 7.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasil penyederhanaannya ...",
   "options": [
    "$2b + 7$",
    "$9b$",
    "$2b - 7$"
   ],
   "answer": "$2b + 7$",
   "hint": "Suku tidak sejenis tidak digabung.",
   "explain": "$2b + 7$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $6b + 9 - 4b - 2 = 2b + 7$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Jika $x = 8$, hitung nilai $\\frac{3x}{4} + 5$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Hitung $3x$.",
   "answer": "24",
   "hint": "$3 \\times 8$.",
   "explain": "$3x = 24$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Hitung $\\frac{24}{4}$.",
   "answer": "6",
   "hint": "24 ÷ 4.",
   "explain": "$\\frac{24}{4} = 6$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Tambah 5.",
   "answer": "11",
   "hint": "6 + 5.",
   "explain": "6 + 5 = 11.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi nilainya 11."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Selesaikan persamaan $5y - 6 = 24$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Tambah 6 di kedua sisi. $5y$ = ?",
   "answer": "30",
   "hint": "24 + 6.",
   "explain": "$5y = 30$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Bagi kedua sisi dengan 5. $y$ = ?",
   "answer": "6",
   "hint": "30 ÷ 5.",
   "explain": "$y = 6$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek: $5 \\times 6 - 6$ = ?",
   "answer": "24",
   "hint": "30 − 6.",
   "explain": "24, sama dengan ruas kanan. Benar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $y = 6$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Umur Ayah 40 tahun. Umur Ayah sama dengan 3 kali umur Dodi ditambah 4 tahun. Berapa umur Dodi?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Misalkan umur Dodi $d$ tahun. Persamaannya adalah ...",
   "options": [
    "$3d + 4 = 40$",
    "$3 + d + 4 = 40$",
    "$3d = 40 + 4$"
   ],
   "answer": "$3d + 4 = 40$",
   "hint": "3 kali umur Dodi ditambah 4 sama dengan umur Ayah.",
   "explain": "$3d + 4 = 40$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Kurangi kedua sisi dengan 4. $3d$ = ?",
   "answer": "36",
   "hint": "40 − 4.",
   "explain": "$3d = 36$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Bagi dengan 3. $d$ = ?",
   "answer": "12",
   "hint": "36 ÷ 3.",
   "explain": "$d = 12$.",
   "error": "salah-langkah-materi",
   "suffix": "tahun"
  },
  {
   "kind": "number",
   "prompt": "Cek: $3 \\times 12 + 4$ = ?",
   "answer": "40",
   "hint": "36 + 4.",
   "explain": "40, sama dengan umur Ayah. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "tahun"
  }
 ],
 "conclusion": "Jadi umur Dodi 12 tahun."
}
```
