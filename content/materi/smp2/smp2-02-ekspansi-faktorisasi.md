---
id: smp2-02-ekspansi-faktorisasi
judul: Ekspansi dan Faktorisasi
jenjang: smp2
moe: "Secondary 2 · Number and Algebra · N5 Algebraic expressions and formulae"
prasyarat: [smp1-07-bentuk-aljabar]
durasi_menit: 60
---

## Kenapa belajar ini?

Ekspansi (menjabarkan) dan faktorisasi adalah dua alat yang paling sering dipakai di aljabar SMP dan SMA. Faktorisasi nanti dipakai untuk menyelesaikan persamaan kuadrat, menyederhanakan pecahan aljabar, dan menggambar parabola. Bahkan hitung cepat seperti $101 \times 99$ bisa dikerjakan di kepala dengan identitas aljabar.

## Analogi

Kita memakai **ubin aljabar**, yaitu potongan-potongan kertas dengan luas tertentu:

- **Persegi besar** berukuran $x \times x$, luasnya $x^2$.
- **Persegi panjang** berukuran $x \times 1$, luasnya $x$.
- **Persegi kecil** berukuran $1 \times 1$, luasnya $1$.

Ide utamanya: **perkalian dua bentuk sama dengan luas persegi panjang.**

- **Ekspansi**: kita tahu panjang dan lebar, lalu mencari luas dengan menjumlahkan semua ubin.
- **Faktorisasi**: kita punya tumpukan ubin, lalu menyusunnya menjadi satu persegi panjang utuh untuk menemukan panjang dan lebarnya.

```anim
{"type": "bangun", "title": "Ubin aljabar untuk (x + 3)(x + 5)", "titik": {"A": [0, 0], "B": [4, 0], "C": [7, 0], "D": [0, 5], "E": [4, 5], "F": [7, 5], "G": [0, 9], "H": [4, 9], "I": [7, 9]}, "sisi": [["G", "H", "x"], ["H", "I", "3"], ["I", "F"], ["F", "C"], ["C", "B"], ["B", "A"], ["A", "D", "5"], ["D", "G", "x"], ["D", "E"], ["E", "F"], ["H", "E"], ["E", "B"]], "langkah": [{"say": "Persegi panjang dengan sisi atas $x + 3$ dan sisi kiri $x + 5$.", "sisi": 8}, {"say": "Sisi atas terdiri dari $x$ dan $3$.", "sisi": 8, "sorot": ["GH", "HI"]}, {"say": "Sisi kiri terdiri dari $x$ dan $5$.", "sisi": 8, "sorot": ["DG", "AD"]}, {"say": "Potong menjadi empat ubin: $x^2$, $3x$, $5x$, dan $15$.", "sisi": 12}, {"say": "Luas total $= x^2 + 3x + 5x + 15 = x^2 + 8x + 15$.", "sisi": 12, "sorot": ["GH", "HI", "DG", "AD"]}]}
```

## Konsep

### Mengalikan bentuk aljabar

Setiap suku di kurung pertama dikalikan dengan **setiap** suku di kurung kedua. Dengan ubin, $(x + 3)(x + 5)$ adalah persegi panjang dengan sisi $(x + 3)$ dan $(x + 5)$:

```visual
{"type": "table", "head": ["×", "x", "3"], "rows": [["x", "x²", "3x"], ["5", "5x", "15"]], "caption": "Tabel perkalian (x + 3)(x + 5): setiap kotak = baris × kolom."}
```

Luas total $= x^2 + 3x + 5x + 15 = x^2 + 8x + 15$. Tabel seperti ini disebut **tabel perkalian** dan membantu supaya tidak ada suku yang terlewat.

Untuk tanda negatif, ubin bisa dianggap "berwarna merah" (bernilai negatif). Aturan tanda tetap: negatif kali negatif positif.

### Tiga identitas penting

Dengan tabel perkalian, kita mendapat:

$$(a + b)^2 = a^2 + 2ab + b^2$$
$$(a - b)^2 = a^2 - 2ab + b^2$$
$$(a + b)(a - b) = a^2 - b^2$$

Kenapa ada $2ab$? Pada persegi bersisi $(a + b)$, ada **dua** persegi panjang $a \times b$ di pojok, selain persegi $a^2$ dan $b^2$. Pada $(a + b)(a - b)$, suku tengah $+ab$ dan $-ab$ saling menghapus.

```anim
{"type": "persamaan", "title": "Dari mana 2ab?", "baris": [{"tex": "(a + b)^2", "say": "Kuadrat artinya dikalikan dengan dirinya sendiri."}, {"tex": "= (a + b)(a + b)", "say": "Tulis sebagai dua kurung."}, {"tex": "= a^2 + ab + ab + b^2", "say": "Setiap suku dikali setiap suku: ada dua ubin $ab$.", "op": "\\text{tabel ubin}"}, {"tex": "= a^2 + 2ab + b^2", "say": "Gabungkan $ab + ab = 2ab$. Suku tengah tidak boleh hilang."}]}
```

### Faktorisasi dengan pengelompokan

Kalau ada empat suku, kelompokkan dua-dua, keluarkan faktor persekutuan tiap kelompok, lalu cari **kurung yang sama**:

$$ax + ay + 3x + 3y = a(x + y) + 3(x + y) = (x + y)(a + 3)$$

```anim
{"type": "persamaan", "title": "Langkah pengelompokan", "baris": [{"tex": "ax + ay + 3x + 3y", "say": "Empat suku."}, {"tex": "(ax + ay) + (3x + 3y)", "say": "Kelompokkan dua-dua.", "op": "\\text{kelompokkan}"}, {"tex": "a(x + y) + 3(x + y)", "say": "Keluarkan faktor persekutuan tiap kelompok.", "op": "\\text{faktor}"}, {"tex": "(x + y)(a + 3)", "say": "Kurung $(x + y)$ sama, jadi keluarkan."}]}
```

Dalam ubin: dua kelompok ubin yang sama-sama selebar $(x + y)$ ditempel menjadi satu persegi panjang.

### Faktorisasi $x^2 + bx + c$

Kita mencari $(x + p)(x + q)$. Kalau dijabarkan: $x^2 + (p + q)x + pq$. Jadi cari dua bilangan $p$ dan $q$ yang

- **hasil kalinya $c$**, dan
- **jumlahnya $b$**.

```visual
{"type": "table", "head": ["Pasangan p, q", "Hasil kali p × q", "Jumlah p + q"], "rows": [["1 dan 15", "15", "16"], ["3 dan 5", "15", "8"]], "caption": "Untuk x² + 8x + 15: pasangan 3 dan 5 cocok, jadi (x + 3)(x + 5)."}
```

Dalam ubin: susun $x^2$, beberapa batang $x$, dan beberapa persegi kecil sehingga membentuk persegi panjang. Persegi kecil harus pas mengisi pojok berukuran $p \times q$.

### Faktorisasi $ax^2 + bx + c$ dengan $a \neq 1$

Cari dua bilangan yang **hasil kalinya $a \times c$** dan **jumlahnya $b$**. Pecah suku tengah dengan dua bilangan itu, lalu pakai pengelompokan.

Kenapa $a \times c$? Kalau $(px + q)(rx + s)$ dijabarkan, hasilnya $prx^2 + psx + qrx + qs$. Dua suku tengahnya $ps$ dan $qr$. Hasil kali keduanya $ps \cdot qr = pr \cdot qs = a \times c$. Jadi dua bilangan itu pasti ada kalau bentuknya bisa difaktorkan.

### Selalu cek dengan menjabarkan

Faktorisasi adalah kebalikan ekspansi. Jabarkan hasil faktorisasimu. Kalau kembali ke bentuk awal, berarti benar.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menjabarkan dua kurung

```soal
{
 "title": "Menjabarkan dua kurung",
 "text": "Jabarkan $(x + 3)(x + 5)$ dan $(2x - 1)(x + 4)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Dari tabel ubin $(x + 3)(x + 5)$ ada $3x$ dan $5x$. Gabungkan: koefisien $x$ menjadi?",
   "answer": "8",
   "hint": "Jumlahkan 3 dan 5.",
   "explain": "$3x + 5x = 8x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Jadi $(x + 3)(x + 5) = ?$",
   "options": [
    "$x^2 + 8x + 15$",
    "$x^2 + 15$",
    "$x^2 + 8x + 8$"
   ],
   "answer": "$x^2 + 8x + 15$",
   "hint": "Suku tetapnya $3 \\times 5$, bukan $3 + 5$.",
   "explain": "$x^2 + 8x + 15$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Pada $(2x - 1)(x + 4)$, hasil $-1 \\cdot x$ dan $-1 \\cdot 4$ adalah?",
   "options": [
    "$-x$ dan $-4$",
    "$x$ dan $4$",
    "$-x$ dan $4$"
   ],
   "answer": "$-x$ dan $-4$",
   "hint": "Negatif kali positif hasilnya negatif.",
   "explain": "$-1 \\cdot x = -x$ dan $-1 \\cdot 4 = -4$. Dua suku lainnya $2x^2$ dan $8x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Gabungkan $8x - x$. Koefisien $x$ menjadi?",
   "answer": "7",
   "hint": "8 dikurangi 1.",
   "explain": "$8x - x = 7x$, jadi hasilnya $2x^2 + 7x - 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: masukkan $x = 1$ ke $2x^2 + 7x - 4$.",
   "answer": "5",
   "hint": "2 + 7 − 4.",
   "explain": "Hasilnya 5, sama dengan $(2 - 1)(1 + 4) = 5$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $(x + 3)(x + 5) = x^2 + 8x + 15$ dan $(2x - 1)(x + 4) = 2x^2 + 7x - 4$."
}
```

### Contoh 2: Memakai identitas

```soal
{
 "title": "Memakai identitas",
 "text": "Jabarkan $(2x - 3)^2$ dan $(3y + 4)(3y - 4)$. Lalu hitung $101 \\times 99$ tanpa kalkulator.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: $(2x - 3)^2$ cocok dengan identitas mana?",
   "options": [
    "$(a - b)^2$ dengan $a = 2x$, $b = 3$",
    "$(a + b)(a - b)$ dengan $a = 2x$, $b = 3$"
   ],
   "answer": "$(a - b)^2$ dengan $a = 2x$, $b = 3$",
   "hint": "Bentuknya satu kurung dikuadratkan.",
   "explain": "Ini $(a - b)^2 = a^2 - 2ab + b^2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Hasil $(2x - 3)^2$ adalah?",
   "options": [
    "$4x^2 - 12x + 9$",
    "$4x^2 - 9$",
    "$4x^2 - 12x - 9$",
    "$2x^2 - 6x + 9$"
   ],
   "answer": "$4x^2 - 12x + 9$",
   "hint": "$(2x)^2$, lalu $2(2x)(3)$, lalu $3^2$ yang selalu positif.",
   "explain": "$4x^2 - 12x + 9$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: $(3y + 4)(3y - 4) = ?$",
   "options": [
    "$9y^2 - 16$",
    "$9y^2 + 16$",
    "$3y^2 - 16$",
    "$9y^2 - 24y - 16$"
   ],
   "answer": "$9y^2 - 16$",
   "hint": "Bentuk $(a + b)(a - b) = a^2 - b^2$ dengan $a = 3y$.",
   "explain": "$(3y)^2 - 4^2 = 9y^2 - 16$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $101 \\times 99 = (100 + 1)(100 - 1) = 100^2 - 1^2 = ?$",
   "answer": "9.999",
   "hint": "10.000 dikurangi 1.",
   "explain": "$10.000 - 1 = 9.999$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: masukkan $x = 2$ ke $4x^2 - 12x + 9$.",
   "answer": "1",
   "hint": "16 − 24 + 9.",
   "explain": "Hasilnya 1, sama dengan $(4 - 3)^2 = 1$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $4x^2 - 12x + 9$; $9y^2 - 16$; dan $101 \\times 99 = 9.999$."
}
```

### Contoh 3: Faktorisasi dengan pengelompokan

```soal
{
 "title": "Faktorisasi dengan pengelompokan",
 "text": "Faktorkan $6xy - 4x + 9y - 6$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Faktor persekutuan dari $6xy - 4x$ adalah?",
   "options": [
    "$2x$",
    "$x$",
    "$6x$"
   ],
   "answer": "$2x$",
   "hint": "FPB dari 6 dan 4 adalah 2, dan keduanya memuat $x$.",
   "explain": "$6xy - 4x = 2x(3y - 2)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: $9y - 6$ ditulis sebagai?",
   "options": [
    "$3(3y - 2)$",
    "$3(3y + 2)$",
    "$-3(3y - 2)$"
   ],
   "answer": "$3(3y - 2)$",
   "hint": "Kurungnya harus sama dengan kelompok pertama.",
   "explain": "$9y - 6 = 3(3y - 2)$. Kurungnya sama: $(3y - 2)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Keluarkan kurung yang sama. Hasilnya?",
   "options": [
    "$(3y - 2)(2x + 3)$",
    "$(3y - 2)(2x - 3)$",
    "$(3y + 2)(2x + 3)$"
   ],
   "answer": "$(3y - 2)(2x + 3)$",
   "hint": "Sisa di luar kurung: $2x$ dan $+3$.",
   "explain": "$2x(3y - 2) + 3(3y - 2) = (3y - 2)(2x + 3)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: masukkan $x = 1$, $y = 1$ ke $(3y - 2)(2x + 3)$.",
   "answer": "5",
   "hint": "(3 − 2)(2 + 3).",
   "explain": "Hasilnya 5. Bentuk awal: $6 - 4 + 9 - 6 = 5$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $6xy - 4x + 9y - 6 = (3y - 2)(2x + 3)$."
}
```

### Contoh 4: Faktorisasi bentuk kuadrat

```soal
{
 "title": "Faktorisasi bentuk kuadrat",
 "text": "Faktorkan (a) $x^2 - 2x - 15$ dan (b) $6x^2 - x - 2$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1 (a): Cari dua bilangan dengan hasil kali $-15$ dan jumlah $-2$.",
   "options": [
    "3 dan −5",
    "−3 dan 5",
    "1 dan −15",
    "−1 dan 15"
   ],
   "answer": "3 dan −5",
   "hint": "Cek hasil kali dan jumlah sekaligus.",
   "explain": "$3 \\times (-5) = -15$ dan $3 + (-5) = -2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2 (a): Faktornya?",
   "options": [
    "$(x + 3)(x - 5)$",
    "$(x - 3)(x + 5)$",
    "$(x + 3)(x + 5)$"
   ],
   "answer": "$(x + 3)(x - 5)$",
   "hint": "Pakai pasangan bilangan dari Langkah 1.",
   "explain": "$(x + 3)(x - 5)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3 (b): Hitung $a \\times c$ untuk $6x^2 - x - 2$.",
   "answer": "-12",
   "hint": "Kalikan 6 dengan −2.",
   "explain": "$6 \\times (-2) = -12$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4 (b): Dua bilangan dengan hasil kali $-12$ dan jumlah $-1$?",
   "options": [
    "3 dan −4",
    "−3 dan 4",
    "2 dan −6",
    "−2 dan 6"
   ],
   "answer": "3 dan −4",
   "hint": "Jumlahnya harus −1.",
   "explain": "$3 \\times (-4) = -12$ dan $3 + (-4) = -1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5 (b): Pecah suku tengah: $6x^2 - 4x + 3x - 2 = 2x(3x - 2) + 1(3x - 2)$. Hasilnya?",
   "options": [
    "$(3x - 2)(2x + 1)$",
    "$(3x + 2)(2x - 1)$",
    "$(3x - 2)(2x - 1)$"
   ],
   "answer": "$(3x - 2)(2x + 1)$",
   "hint": "Kurung yang sama $(3x - 2)$, sisanya $2x$ dan $+1$.",
   "explain": "$(3x - 2)(2x + 1)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: masukkan $x = 1$ ke $(3x - 2)(2x + 1)$.",
   "answer": "3",
   "hint": "(3 − 2)(2 + 1).",
   "explain": "Hasilnya 3. Bentuk awal: $6 - 1 - 2 = 3$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi (a) $(x + 3)(x - 5)$ dan (b) $(3x - 2)(2x + 1)$."
}
```

### Contoh 5: Soal cerita kebun

```soal
{
 "title": "Soal cerita kebun",
 "text": "Kebun Pak Budi berbentuk persegi dengan sisi $x$ meter. Satu sisi diperpanjang 4 m dan sisi lainnya 2 m. (a) Tulis luas baru dalam bentuk terjabar. (b) Berapa tambahan luasnya? (c) Hitung luas baru jika $x = 10$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Ukuran kebun baru?",
   "options": [
    "$(x + 4)$ m dan $(x + 2)$ m",
    "$(x + 6)$ m dan $x$ m",
    "$4x$ m dan $2x$ m"
   ],
   "answer": "$(x + 4)$ m dan $(x + 2)$ m",
   "hint": "Setiap sisi ditambah, bukan dikali.",
   "explain": "Panjang $(x + 4)$ m, lebar $(x + 2)$ m.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Jabarkan $(x + 4)(x + 2)$.",
   "options": [
    "$x^2 + 6x + 8$",
    "$x^2 + 8$",
    "$x^2 + 6x + 6$"
   ],
   "answer": "$x^2 + 6x + 8$",
   "hint": "Ubinnya: $x^2$, $2x$, $4x$, dan $4 \\times 2$.",
   "explain": "$x^2 + 2x + 4x + 8 = x^2 + 6x + 8$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Tambahan luasnya?",
   "options": [
    "$6x + 8$ m²",
    "$x^2 + 6x + 8$ m²",
    "$8$ m²"
   ],
   "answer": "$6x + 8$ m²",
   "hint": "Kurangi luas lama $x^2$.",
   "explain": "$(x^2 + 6x + 8) - x^2 = 6x + 8$ m².",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Masukkan $x = 10$ ke $x^2 + 6x + 8$.",
   "answer": "168",
   "hint": "100 + 60 + 8.",
   "explain": "Luas baru 168 m².",
   "error": "salah-langkah-materi",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung langsung $14 \\times 12$.",
   "answer": "168",
   "hint": "Sisi baru 10 + 4 dan 10 + 2.",
   "explain": "14 × 12 = 168. Cocok.",
   "error": "salah-langkah-materi",
   "suffix": "m²"
  }
 ],
 "conclusion": "Jadi (a) $x^2 + 6x + 8$; (b) $6x + 8$ m²; (c) 168 m²."
}
```

## Kesalahan yang sering terjadi

- **Melupakan suku tengah.** Menulis $(x + 3)^2 = x^2 + 9$. Pada ubin, ada dua persegi panjang $3x$ yang hilang. Yang benar $x^2 + 6x + 9$.
- **Salah tanda pada $b^2$.** Menulis $(2x - 3)^2 = 4x^2 - 12x - 9$. Kuadrat selalu positif: $(-3)^2 = +9$.
- **Hanya mencocokkan hasil kali.** Untuk $x^2 - 2x - 15$ memilih $(x - 3)(x + 5)$. Hasil kalinya benar $-15$, tetapi jumlahnya $+2$, bukan $-2$. Cek keduanya.
- **Kurung tidak sama saat pengelompokan.** Dari $6xy - 4x + 9y - 6$ menulis $2x(3y - 2) - 3(3y + 2)$. Periksa tanda; kurungnya harus identik.
- **Tidak mengecek.** Selalu jabarkan kembali hasil faktorisasi.

## Ringkasan

- Ekspansi: kalikan setiap suku dengan setiap suku. Tabel ubin membantu.
- $(a \pm b)^2 = a^2 \pm 2ab + b^2$ dan $(a + b)(a - b) = a^2 - b^2$.
- Pengelompokan: kelompokkan dua-dua, keluarkan faktor, cari kurung yang sama.
- $x^2 + bx + c$: cari dua bilangan dengan hasil kali $c$ dan jumlah $b$.
- $ax^2 + bx + c$: cari dua bilangan dengan hasil kali $ac$ dan jumlah $b$, pecah suku tengah, lalu kelompokkan.
- Selalu cek faktorisasi dengan menjabarkan kembali.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Jabarkan $(x - 4)(x + 6)$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Gabungkan $6x - 4x$. Koefisien $x$?",
   "answer": "2",
   "hint": "6 dikurangi 4.",
   "explain": "$6x - 4x = 2x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Suku tetap $-4 \\times 6 = ?$",
   "answer": "-24",
   "hint": "Negatif kali positif.",
   "explain": "−4 × 6 = −24.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasil penjabarannya?",
   "options": [
    "$x^2 + 2x - 24$",
    "$x^2 - 2x - 24$",
    "$x^2 + 2x + 24$"
   ],
   "answer": "$x^2 + 2x - 24$",
   "hint": "Pakai dua langkah sebelumnya.",
   "explain": "$x^2 + 2x - 24$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$(x - 4)(x + 6) = x^2 + 2x - 24$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Jabarkan $(3a + 2b)^2$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Suku tengah $2(3a)(2b) = ?ab$. Isi koefisiennya.",
   "answer": "12",
   "hint": "2 × 3 × 2.",
   "explain": "$2 \\cdot 3a \\cdot 2b = 12ab$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Hasilnya?",
   "options": [
    "$9a^2 + 12ab + 4b^2$",
    "$9a^2 + 4b^2$",
    "$3a^2 + 12ab + 2b^2$",
    "$9a^2 + 6ab + 4b^2$"
   ],
   "answer": "$9a^2 + 12ab + 4b^2$",
   "hint": "$(3a)^2$ dan $(2b)^2$, jangan lupa suku tengah.",
   "explain": "$9a^2 + 12ab + 4b^2$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$(3a + 2b)^2 = 9a^2 + 12ab + 4b^2$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Faktorkan $4x^2 - 25$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Bentuk ini cocok dengan identitas?",
   "options": [
    "$a^2 - b^2$",
    "$(a - b)^2$",
    "$a^2 + 2ab + b^2$"
   ],
   "answer": "$a^2 - b^2$",
   "hint": "Dua kuadrat dikurangkan, tanpa suku tengah.",
   "explain": "$4x^2 = (2x)^2$ dan $25 = 5^2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Faktornya?",
   "options": [
    "$(2x + 5)(2x - 5)$",
    "$(2x - 5)^2$",
    "$(4x + 5)(4x - 5)$"
   ],
   "answer": "$(2x + 5)(2x - 5)$",
   "hint": "$a = 2x$, $b = 5$.",
   "explain": "$(2x + 5)(2x - 5)$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$4x^2 - 25 = (2x + 5)(2x - 5)$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Faktorkan $xy + 5x - 2y - 10$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Kelompok pertama $xy + 5x = ?$",
   "options": [
    "$x(y + 5)$",
    "$y(x + 5)$",
    "$5(x + y)$"
   ],
   "answer": "$x(y + 5)$",
   "hint": "Keluarkan $x$.",
   "explain": "$x(y + 5)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Kelompok kedua $-2y - 10 = ?$",
   "options": [
    "$-2(y + 5)$",
    "$-2(y - 5)$",
    "$2(y + 5)$"
   ],
   "answer": "$-2(y + 5)$",
   "hint": "Keluarkan −2 supaya kurungnya sama.",
   "explain": "$-2(y + 5)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Faktornya?",
   "options": [
    "$(y + 5)(x - 2)$",
    "$(y + 5)(x + 2)$",
    "$(y - 5)(x - 2)$"
   ],
   "answer": "$(y + 5)(x - 2)$",
   "hint": "Kurung sama $(y + 5)$.",
   "explain": "$(y + 5)(x - 2)$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$xy + 5x - 2y - 10 = (y + 5)(x - 2)$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Faktorkan (a) $x^2 - 9x + 14$ dan (b) $3x^2 + 10x - 8$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "(a) Dua bilangan dengan hasil kali 14 dan jumlah $-9$?",
   "options": [
    "−2 dan −7",
    "2 dan 7",
    "−1 dan −14"
   ],
   "answer": "−2 dan −7",
   "hint": "Hasil kali positif, jumlah negatif: keduanya negatif.",
   "explain": "(−2)(−7) = 14 dan −2 + (−7) = −9.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "(a) Faktornya?",
   "options": [
    "$(x - 2)(x - 7)$",
    "$(x + 2)(x + 7)$",
    "$(x - 2)(x + 7)$"
   ],
   "answer": "$(x - 2)(x - 7)$",
   "hint": "Pakai pasangan tadi.",
   "explain": "$(x - 2)(x - 7)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "(b) Hitung $a \\times c$.",
   "answer": "-24",
   "hint": "3 × (−8).",
   "explain": "ac = −24. Pasangan yang jumlahnya 10: 12 dan −2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "(b) $3x^2 + 12x - 2x - 8 = 3x(x + 4) - 2(x + 4)$. Faktornya?",
   "options": [
    "$(3x - 2)(x + 4)$",
    "$(3x + 2)(x - 4)$",
    "$(3x - 2)(x - 4)$"
   ],
   "answer": "$(3x - 2)(x + 4)$",
   "hint": "Kurung sama $(x + 4)$.",
   "explain": "$(3x - 2)(x + 4)$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "(a) $(x - 2)(x - 7)$; (b) $(3x - 2)(x + 4)$."
}
```
