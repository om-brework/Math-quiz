---
id: sma1-02-vektor-2d
judul: Vektor di Bidang
jenjang: sma1
moe: "Secondary 4 · Geometry and Measurement · G7 Vectors in two dimensions"
prasyarat: [smp3-06-geometri-koordinat, smp2-09-pythagoras-trigonometri]
durasi_menit: 55
---

## Kenapa belajar ini?

Kurir paket, pilot drone, dan pembuat gim komputer perlu menyatakan **perpindahan**: bergerak berapa jauh dan ke arah mana. Bilangan biasa hanya menyatakan besar. Vektor menyatakan besar **dan** arah sekaligus, dan bisa dijumlahkan untuk menggabungkan beberapa perjalanan.

## Analogi

Bayangkan **kurir paket** yang menerima instruksi singkat dari aplikasi: "**geser 3 blok ke timur, lalu 4 blok ke utara**."

- Instruksi itu adalah **vektor**. Ia tidak menyebut dari mana kurir berangkat; instruksi yang sama bisa dipakai dari gudang mana pun.
- Dua instruksi berurutan bisa diganti **satu instruksi gabungan**. Inilah **penjumlahan vektor**.
- Instruksi "lakukan dua kali" adalah **perkalian skalar**. Instruksi "putar balik" adalah **vektor negatif**.
- Instruksi yang selalu dihitung **dari kantor pusat $O$** disebut **vektor posisi**. Ia menunjukkan alamat setiap titik.

```anim
{"type": "bangun", "title": "Instruksi kurir sebagai vektor", "titik": {"G": [0, 0], "T": [3, 0], "K": [3, 4]}, "sisi": [["G", "T", "3\\ \\text{timur}"], ["T", "K", "4\\ \\text{utara}"], ["G", "K", "\\text{gabungan}"]], "sudut": [{"di": "T", "dari": "G", "ke": "K", "siku": true}], "langkah": [{"say": "Kurir berangkat dari gudang $G$ dan bergeser 3 blok ke timur.", "sisi": 1}, {"say": "Lalu 4 blok ke utara, sampai di $K$.", "sisi": 2, "sudut": 1}, {"say": "Dua instruksi itu bisa diganti satu instruksi gabungan: panah langsung dari $G$ ke $K$.", "sisi": 3, "sudut": 1, "sorot": ["GK"]}, {"say": "Geser timur dan geser utara saling tegak lurus, jadi panjang panah gabungan dihitung dengan Pythagoras.", "sisi": 3, "sudut": 1, "sorot": ["GK", "T"]}]}
```

## Konsep

### Notasi vektor kolom dan ruas garis berarah

Vektor ditulis sebagai **vektor kolom**: angka atas = geser mendatar (positif ke kanan), angka bawah = geser tegak (positif ke atas).

$$\mathbf{a} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$$

Vektor digambar sebagai **ruas garis berarah**: panah dari titik pangkal ke titik ujung. Panah dari $A$ ke $B$ ditulis $\overrightarrow{AB}$. Di buku tulis, vektor $\mathbf{a}$ biasa ditulis $\underset{\sim}{a}$ atau $\vec{a}$.

Dua vektor **sama** jika besar dan arahnya sama, di mana pun letaknya. Panah-panah yang sejajar, searah, dan sama panjang mewakili vektor yang sama, seperti instruksi kurir yang sama dari gudang berbeda.

### Besar vektor

Besar (panjang) vektor $\begin{pmatrix} x \\ y \end{pmatrix}$ dihitung dengan Pythagoras, karena geser mendatar dan geser tegak saling tegak lurus:

$$\left|\begin{pmatrix} x \\ y \end{pmatrix}\right| = \sqrt{x^2 + y^2}$$

### Penjumlahan dan pengurangan

$$\begin{pmatrix} a \\ b \end{pmatrix} + \begin{pmatrix} c \\ d \end{pmatrix} = \begin{pmatrix} a + c \\ b + d \end{pmatrix}$$

Secara gambar: letakkan pangkal panah kedua di ujung panah pertama. Panah dari pangkal pertama ke ujung kedua adalah jumlahnya (**aturan segitiga**). Dalam bahasa titik: $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$.

```anim
{"type": "bangun", "title": "Aturan segitiga", "titik": {"A": [0, 0], "B": [4, 1], "C": [5, 4]}, "sisi": [["A", "B", "\\mathbf{a}"], ["B", "C", "\\mathbf{b}"], ["A", "C", "\\mathbf{a}+\\mathbf{b}"]], "langkah": [{"say": "Gambar panah $\\mathbf{a}$ dari $A$ ke $B$.", "sisi": 1}, {"say": "Pangkal panah $\\mathbf{b}$ diletakkan di ujung $\\mathbf{a}$, yaitu di $B$.", "sisi": 2, "sorot": ["B"]}, {"say": "Panah dari pangkal pertama ($A$) ke ujung kedua ($C$) adalah $\\mathbf{a} + \\mathbf{b}$.", "sisi": 3, "sorot": ["AC"]}]}
```

**Vektor negatif** $-\mathbf{a}$ sama besar dengan $\mathbf{a}$ tetapi berlawanan arah: $\overrightarrow{BA} = -\overrightarrow{AB}$. **Vektor nol** $\mathbf{0} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$ berarti tidak berpindah.

Pengurangan adalah menjumlah dengan negatifnya: $\mathbf{a} - \mathbf{b} = \mathbf{a} + (-\mathbf{b})$.

### Perkalian skalar

$$k\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} kx \\ ky \end{pmatrix}$$

- $k > 0$: arah sama, panjang menjadi $k$ kali.
- $k < 0$: arah berlawanan.

Jadi jika $\mathbf{b} = k\mathbf{a}$, maka $\mathbf{a}$ dan $\mathbf{b}$ **sejajar**. Ini alat utama soal geometri.

### Translasi

Menggeser titik $(x, y)$ dengan vektor $\begin{pmatrix} p \\ q \end{pmatrix}$ menghasilkan titik $(x + p, y + q)$. Semua titik bangun digeser dengan instruksi yang sama, jadi bentuk dan ukurannya tidak berubah.

### Vektor posisi

Vektor posisi titik $A$ adalah $\overrightarrow{OA}$, panah dari titik asal $O$. Jika $A(2, 1)$, maka $\overrightarrow{OA} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$.

Untuk pergi dari $A$ ke $B$, kurir bisa kembali ke kantor pusat dulu lalu ke $B$:

$$\overrightarrow{AB} = \overrightarrow{AO} + \overrightarrow{OB} = \overrightarrow{OB} - \overrightarrow{OA}$$

"Ujung dikurangi pangkal."

```anim
{"type": "bangun", "title": "Ujung dikurangi pangkal", "titik": {"O": [0, 0], "A": [1, 3], "B": [5, 1]}, "sisi": [["O", "A", "\\overrightarrow{OA}"], ["O", "B", "\\overrightarrow{OB}"], ["A", "B", "\\overrightarrow{AB}"]], "langkah": [{"say": "Vektor posisi $A(1, 3)$ adalah panah dari $O$ ke $A$.", "sisi": 1}, {"say": "Vektor posisi $B(5, 1)$ adalah panah dari $O$ ke $B$.", "sisi": 2}, {"say": "Dari $A$ ke $B$: mundur ke $O$ (yaitu $-\\overrightarrow{OA}$), lalu maju ke $B$.", "sisi": 3, "sorot": ["AB", "OA", "OB"]}, {"say": "Jadi $\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA}$.", "sisi": 3, "sorot": ["AB"]}]}
```

```anim
{"type": "persamaan", "title": "Menghitung AB dari vektor posisi", "baris": [{"tex": "\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA}", "say": "Ujung ($B$) dikurangi pangkal ($A$)."}, {"tex": "= \\begin{pmatrix} 5 \\\\ 1 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}", "say": "Tulis vektor posisi masing-masing.", "op": "substitusi"}, {"tex": "= \\begin{pmatrix} 5 - 1 \\\\ 1 - 3 \\end{pmatrix}", "say": "Kurangkan komponen seletak.", "op": "per komponen"}, {"tex": "= \\begin{pmatrix} 4 \\\\ -2 \\end{pmatrix}", "say": "Dari $A$ ke $B$: geser 4 ke kanan dan 2 ke bawah."}]}
```

### Soal geometri dengan vektor

- **Sejajar:** $\overrightarrow{PQ} = k\,\overrightarrow{RS}$.
- **Segaris (kolinear):** $\overrightarrow{PQ} = k\,\overrightarrow{PR}$ dengan titik $P$ bersama. Sejajar dan berbagi satu titik berarti berada di satu garis lurus.
- **Titik tengah** $M$ dari $AB$: $\overrightarrow{OM} = \overrightarrow{OA} + \frac{1}{2}\overrightarrow{AB} = \frac{1}{2}(\mathbf{a} + \mathbf{b})$.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Operasi dan besar vektor

```soal
{
 "title": "Contoh 1",
 "text": "Diketahui $\\mathbf{a} = \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$ dan $\\mathbf{b} = \\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix}$. Hitung $|\\mathbf{a}|$, $2\\mathbf{a} - 3\\mathbf{b}$, dan $|\\mathbf{a} + \\mathbf{b}|$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Besar $\\mathbf{a}$. $\\sqrt{3^2 + (-4)^2}$ = ?",
   "answer": "5",
   "hint": "Ingat $(-4)^2 = 16$.",
   "explain": "$\\sqrt{9 + 16} = \\sqrt{25} = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Perkalian skalar. $2\\mathbf{a}$ dan $3\\mathbf{b}$ adalah ...",
   "options": [
    "$2\\mathbf{a} = \\begin{pmatrix} 6 \\\\ -8 \\end{pmatrix}$, $3\\mathbf{b} = \\begin{pmatrix} -3 \\\\ 6 \\end{pmatrix}$",
    "$2\\mathbf{a} = \\begin{pmatrix} 5 \\\\ -2 \\end{pmatrix}$, $3\\mathbf{b} = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}$",
    "$2\\mathbf{a} = \\begin{pmatrix} 6 \\\\ 8 \\end{pmatrix}$, $3\\mathbf{b} = \\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix}$"
   ],
   "answer": "$2\\mathbf{a} = \\begin{pmatrix} 6 \\\\ -8 \\end{pmatrix}$, $3\\mathbf{b} = \\begin{pmatrix} -3 \\\\ 6 \\end{pmatrix}$",
   "hint": "Kalikan setiap komponen; tanda negatif tetap ikut.",
   "explain": "Setiap komponen dikali skalar, tandanya dipertahankan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Komponen atas $2\\mathbf{a} - 3\\mathbf{b}$: $6 - (-3)$ = ?",
   "answer": "9",
   "hint": "Mengurangi negatif sama dengan menambah.",
   "explain": "$6 + 3 = 9$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Komponen bawah $2\\mathbf{a} - 3\\mathbf{b}$: $-8 - 6$ = ?",
   "answer": "-14",
   "hint": "Dari $-8$ bergerak 6 lagi ke kiri.",
   "explain": "$-8 - 6 = -14$, jadi $2\\mathbf{a} - 3\\mathbf{b} = \\begin{pmatrix} 9 \\\\ -14 \\end{pmatrix}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: $\\mathbf{a} + \\mathbf{b} = \\begin{pmatrix} 2 \\\\ -2 \\end{pmatrix}$. Besarnya $|\\mathbf{a} + \\mathbf{b}|$ adalah ...",
   "options": [
    "$2\\sqrt{2}$",
    "$4$",
    "$0$",
    "$5 + \\sqrt{5}$"
   ],
   "answer": "$2\\sqrt{2}$",
   "hint": "Jumlahkan komponen dulu, baru hitung $\\sqrt{x^2 + y^2}$.",
   "explain": "$\\sqrt{4 + 4} = \\sqrt{8} = 2\\sqrt{2}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Bulatkan $2\\sqrt{2}$ ke 2 desimal.",
   "answer": "2,83",
   "hint": "$\\sqrt{2} \\approx 1{,}414$.",
   "explain": "$2 \\times 1{,}414 \\approx 2{,}83$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $|\\mathbf{a}| + |\\mathbf{b}| = 5 + \\sqrt{5}$. Bulatkan ke 2 desimal.",
   "answer": "7,24",
   "hint": "$\\sqrt{5} \\approx 2{,}236$.",
   "explain": "$7{,}24$. Besar jumlah ($2{,}83$) memang tidak melebihi $7{,}24$; wajar karena $\\mathbf{a}$ dan $\\mathbf{b}$ hampir berlawanan arah.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $|\\mathbf{a}| = 5$, $2\\mathbf{a} - 3\\mathbf{b} = \\begin{pmatrix} 9 \\\\ -14 \\end{pmatrix}$, dan $|\\mathbf{a} + \\mathbf{b}| = 2\\sqrt{2} \\approx 2{,}83$."
}
```

### Contoh 2: Vektor posisi dan translasi

```soal
{
 "title": "Contoh 2",
 "text": "Titik $A(2, 1)$ dan $B(7, -3)$. Tentukan $\\overrightarrow{AB}$ dan $|\\overrightarrow{AB}|$. Lalu titik $P(-1, 4)$ ditranslasikan oleh $\\overrightarrow{AB}$. Tentukan bayangannya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Rumus $\\overrightarrow{AB}$ dari vektor posisi adalah ...",
   "options": [
    "$\\overrightarrow{OB} - \\overrightarrow{OA}$",
    "$\\overrightarrow{OA} - \\overrightarrow{OB}$",
    "$\\overrightarrow{OA} + \\overrightarrow{OB}$"
   ],
   "answer": "$\\overrightarrow{OB} - \\overrightarrow{OA}$",
   "hint": "Ujung dikurangi pangkal.",
   "explain": "Ujung $B$ dikurangi pangkal $A$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Komponen atas $\\overrightarrow{AB}$: $7 - 2$ = ?",
   "answer": "5",
   "hint": "Koordinat $x$ ujung dikurangi koordinat $x$ pangkal.",
   "explain": "$7 - 2 = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Komponen bawah $\\overrightarrow{AB}$: $-3 - 1$ = ?",
   "answer": "-4",
   "hint": "Koordinat $y$ ujung dikurangi koordinat $y$ pangkal.",
   "explain": "$-3 - 1 = -4$, jadi $\\overrightarrow{AB} = \\begin{pmatrix} 5 \\\\ -4 \\end{pmatrix}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: $|\\overrightarrow{AB}|$ = ...",
   "options": [
    "$\\sqrt{41}$",
    "$\\sqrt{9}$",
    "$9$",
    "$1$"
   ],
   "answer": "$\\sqrt{41}$",
   "hint": "Kuadratkan setiap komponen, jumlahkan, lalu akarkan.",
   "explain": "$\\sqrt{25 + 16} = \\sqrt{41}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Bulatkan $\\sqrt{41}$ ke 1 desimal.",
   "answer": "6,4",
   "hint": "$6^2 = 36$ dan $7^2 = 49$, jadi hasilnya antara 6 dan 7.",
   "explain": "$\\sqrt{41} \\approx 6{,}40$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Translasi. Koordinat $x$ bayangan $P$: $-1 + 5$ = ?",
   "answer": "4",
   "hint": "Tambahkan komponen atas vektor ke $x$.",
   "explain": "$-1 + 5 = 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Koordinat $y$ bayangan $P$: $4 + (-4)$ = ?",
   "answer": "0",
   "hint": "Tambahkan komponen bawah vektor ke $y$.",
   "explain": "$4 - 4 = 0$, jadi $P'(4, 0)$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: dari $A(2, 1)$ geser 5 ke kanan. Koordinat $x$ yang dicapai = ?",
   "answer": "7",
   "hint": "Kalau benar, kamu sampai di koordinat $x$ titik $B$.",
   "explain": "$2 + 5 = 7$, dan $1 - 4 = -3$. Sampai tepat di $B(7, -3)$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\overrightarrow{AB} = \\begin{pmatrix} 5 \\\\ -4 \\end{pmatrix}$, $|\\overrightarrow{AB}| = \\sqrt{41} \\approx 6{,}40$, dan bayangan $P$ adalah $P'(4, 0)$."
}
```

### Contoh 3: Membuktikan teorema titik tengah

```soal
{
 "title": "Contoh 3",
 "text": "Pada segitiga $OAB$, $\\overrightarrow{OA} = \\mathbf{a}$ dan $\\overrightarrow{OB} = \\mathbf{b}$. $P$ titik tengah $OA$ dan $Q$ titik tengah $OB$. Buktikan $PQ$ sejajar $AB$ dan panjangnya setengah $AB$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: $\\overrightarrow{OP}$ = ...",
   "options": [
    "$\\frac{1}{2}\\mathbf{a}$",
    "$2\\mathbf{a}$",
    "$\\frac{1}{2}\\mathbf{b}$"
   ],
   "answer": "$\\frac{1}{2}\\mathbf{a}$",
   "hint": "$P$ ada di tengah $OA$.",
   "explain": "$\\overrightarrow{OP} = \\frac{1}{2}\\mathbf{a}$, dan dengan cara sama $\\overrightarrow{OQ} = \\frac{1}{2}\\mathbf{b}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: $\\overrightarrow{AB}$ = ...",
   "options": [
    "$\\mathbf{b} - \\mathbf{a}$",
    "$\\mathbf{a} - \\mathbf{b}$",
    "$\\mathbf{a} + \\mathbf{b}$"
   ],
   "answer": "$\\mathbf{b} - \\mathbf{a}$",
   "hint": "Ujung dikurangi pangkal.",
   "explain": "Ujung $B$ ($\\mathbf{b}$) dikurangi pangkal $A$ ($\\mathbf{a}$).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: $\\overrightarrow{PQ} = \\overrightarrow{OQ} - \\overrightarrow{OP}$ = ...",
   "options": [
    "$\\frac{1}{2}(\\mathbf{b} - \\mathbf{a})$",
    "$\\frac{1}{2}(\\mathbf{a} - \\mathbf{b})$",
    "$\\frac{1}{2}(\\mathbf{a} + \\mathbf{b})$"
   ],
   "answer": "$\\frac{1}{2}(\\mathbf{b} - \\mathbf{a})$",
   "hint": "Substitusikan $\\frac{1}{2}\\mathbf{b}$ dan $\\frac{1}{2}\\mathbf{a}$, lalu faktorkan $\\frac{1}{2}$.",
   "explain": "$\\frac{1}{2}\\mathbf{b} - \\frac{1}{2}\\mathbf{a} = \\frac{1}{2}(\\mathbf{b} - \\mathbf{a})$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Karena $\\overrightarrow{PQ} = \\frac{1}{2}\\overrightarrow{AB}$, kesimpulannya ...",
   "options": [
    "$PQ \\parallel AB$ dan $PQ = \\frac{1}{2}AB$",
    "$PQ$ tegak lurus $AB$",
    "$PQ = 2AB$"
   ],
   "answer": "$PQ \\parallel AB$ dan $PQ = \\frac{1}{2}AB$",
   "hint": "Kelipatan skalar positif berarti searah dan sejajar.",
   "explain": "Kelipatan skalar berarti sejajar, dan faktor $\\frac{1}{2}$ berarti panjangnya setengah.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban dengan angka: $\\mathbf{a} = \\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}$, $\\mathbf{b} = \\begin{pmatrix} 2 \\\\ 6 \\end{pmatrix}$. Komponen atas $\\overrightarrow{PQ} = 1 - 2$ = ?",
   "answer": "-1",
   "hint": "$\\overrightarrow{OQ} = \\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}$ dan $\\overrightarrow{OP} = \\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}$.",
   "explain": "$\\overrightarrow{PQ} = \\begin{pmatrix} -1 \\\\ 3 \\end{pmatrix}$, tepat setengah dari $\\overrightarrow{AB} = \\begin{pmatrix} -2 \\\\ 6 \\end{pmatrix}$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\overrightarrow{PQ} = \\frac{1}{2}\\overrightarrow{AB}$: $PQ \\parallel AB$ dan $PQ = \\frac{1}{2}AB$."
}
```

### Contoh 4: Tiga titik segaris

```soal
{
 "title": "Contoh 4",
 "text": "Diketahui $\\overrightarrow{OP} = 2\\mathbf{a} + \\mathbf{b}$, $\\overrightarrow{OQ} = 4\\mathbf{a} + 3\\mathbf{b}$, dan $\\overrightarrow{OR} = 7\\mathbf{a} + 6\\mathbf{b}$, dengan $\\mathbf{a}$ dan $\\mathbf{b}$ tidak sejajar. Tunjukkan $P$, $Q$, $R$ segaris dan tentukan $PQ : QR$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: $\\overrightarrow{PQ}$ = ...",
   "options": [
    "$2\\mathbf{a} + 2\\mathbf{b}$",
    "$6\\mathbf{a} + 4\\mathbf{b}$",
    "$-2\\mathbf{a} - 2\\mathbf{b}$"
   ],
   "answer": "$2\\mathbf{a} + 2\\mathbf{b}$",
   "hint": "$\\overrightarrow{OQ} - \\overrightarrow{OP}$.",
   "explain": "$(4\\mathbf{a} + 3\\mathbf{b}) - (2\\mathbf{a} + \\mathbf{b}) = 2\\mathbf{a} + 2\\mathbf{b}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: $\\overrightarrow{QR}$ = ...",
   "options": [
    "$3\\mathbf{a} + 3\\mathbf{b}$",
    "$11\\mathbf{a} + 9\\mathbf{b}$",
    "$5\\mathbf{a} + 5\\mathbf{b}$"
   ],
   "answer": "$3\\mathbf{a} + 3\\mathbf{b}$",
   "hint": "$\\overrightarrow{OR} - \\overrightarrow{OQ}$.",
   "explain": "$(7\\mathbf{a} + 6\\mathbf{b}) - (4\\mathbf{a} + 3\\mathbf{b}) = 3\\mathbf{a} + 3\\mathbf{b}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 3: $\\overrightarrow{QR} = k\\,\\overrightarrow{PQ}$. Berapa $k$?",
   "answer": {
    "num": 3,
    "den": 2
   },
   "hint": "Bagi koefisien $\\mathbf{a}$ di $\\overrightarrow{QR}$ dengan koefisien $\\mathbf{a}$ di $\\overrightarrow{PQ}$.",
   "explain": "$3 \\div 2 = \\frac{3}{2}$, dan untuk $\\mathbf{b}$ juga $\\frac{3}{2}$. Jadi sejajar.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Kenapa $P$, $Q$, $R$ segaris?",
   "options": [
    "Sejajar dan berbagi titik $Q$",
    "Karena panjangnya sama",
    "Karena $\\mathbf{a}$ dan $\\mathbf{b}$ tidak sejajar"
   ],
   "answer": "Sejajar dan berbagi titik $Q$",
   "hint": "Sejajar saja belum cukup.",
   "explain": "Dua panah sejajar yang berbagi titik pasti terletak di satu garis.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Perbandingan $PQ : QR$ adalah ...",
   "options": [
    "$2 : 3$",
    "$3 : 2$",
    "$2 : 5$"
   ],
   "answer": "$2 : 3$",
   "hint": "$\\overrightarrow{PQ}$ memuat 2 bagian, $\\overrightarrow{QR}$ memuat 3 bagian.",
   "explain": "$2(\\mathbf{a} + \\mathbf{b})$ dan $3(\\mathbf{a} + \\mathbf{b})$, jadi $2 : 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: $\\overrightarrow{PR} = \\overrightarrow{OR} - \\overrightarrow{OP}$ = ...",
   "options": [
    "$5\\mathbf{a} + 5\\mathbf{b}$",
    "$9\\mathbf{a} + 7\\mathbf{b}$",
    "$5\\mathbf{a} + 6\\mathbf{b}$"
   ],
   "answer": "$5\\mathbf{a} + 5\\mathbf{b}$",
   "hint": "Kurangkan koefisien $\\mathbf{a}$ dan $\\mathbf{b}$ masing-masing.",
   "explain": "$5(\\mathbf{a} + \\mathbf{b})$: ada $2 + 3 = 5$ bagian. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $P$, $Q$, $R$ segaris dengan $PQ : QR = 2 : 3$."
}
```

### Contoh 5: Soal cerita kurir

```soal
{
 "title": "Contoh 5",
 "text": "Seorang kurir di Denpasar berangkat dari gudang dengan perpindahan $\\mathbf{p} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ km, lalu $\\mathbf{q} = \\begin{pmatrix} 5 \\\\ -10 \\end{pmatrix}$ km (komponen atas ke timur, bawah ke utara). Hitung perpindahan totalnya, jarak lurus dari gudang, dan panjang jalur yang ditempuh.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Komponen atas $\\mathbf{p} + \\mathbf{q}$ = ?",
   "answer": "8",
   "hint": "Jumlahkan komponen atas.",
   "explain": "$3 + 5 = 8$: 8 km ke timur.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Komponen bawah $\\mathbf{p} + \\mathbf{q}$ = ?",
   "answer": "-6",
   "hint": "Jumlahkan komponen bawah.",
   "explain": "$4 + (-10) = -6$: 6 km ke selatan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jarak lurus dari gudang = ?",
   "answer": "10",
   "hint": "Hitung $\\sqrt{8^2 + (-6)^2}$.",
   "explain": "$\\sqrt{64 + 36} = \\sqrt{100} = 10$ km.",
   "error": "salah-langkah-materi",
   "suffix": "km"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $|\\mathbf{p}|$ = ?",
   "answer": "5",
   "hint": "$\\sqrt{3^2 + 4^2}$.",
   "explain": "$\\sqrt{25} = 5$ km.",
   "error": "salah-langkah-materi",
   "suffix": "km"
  },
  {
   "kind": "number",
   "prompt": "$|\\mathbf{q}| = \\sqrt{125}$. Bulatkan ke 2 desimal.",
   "answer": "11,18",
   "hint": "$11^2 = 121$, jadi sedikit lebih dari 11.",
   "explain": "$\\sqrt{125} \\approx 11{,}18$ km.",
   "error": "salah-langkah-materi",
   "suffix": "km"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Total panjang jalur (2 desimal) = ?",
   "answer": "16,18",
   "hint": "Jumlahkan panjang kedua bagian jalur.",
   "explain": "$5 + 11{,}18 = 16{,}18$ km.",
   "error": "salah-langkah-materi",
   "suffix": "km"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: mana yang lebih pendek?",
   "options": [
    "Jarak lurus",
    "Panjang jalur",
    "Sama panjang"
   ],
   "answer": "Jarak lurus",
   "hint": "Garis lurus adalah jalan terpendek.",
   "explain": "10 km lebih pendek dari 16,18 km. Masuk akal.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Perpindahan total $\\begin{pmatrix} 8 \\\\ -6 \\end{pmatrix}$ km, jarak lurus 10 km, dan jalur sekitar 16,2 km."
}
```

## Kesalahan yang sering terjadi

- **Pangkal dikurangi ujung.** $\overrightarrow{AB} = \overrightarrow{OA} - \overrightarrow{OB}$ salah arah. Ingat: **ujung dikurangi pangkal**, $\overrightarrow{OB} - \overrightarrow{OA}$.
- **Menjumlahkan besar vektor.** $|\mathbf{a} + \mathbf{b}| \ne |\mathbf{a}| + |\mathbf{b}|$ pada umumnya. Jumlahkan komponennya dulu, baru hitung besar.
- **Tertukar vektor posisi dan titik.** Titik $A(2, 1)$ ditulis dengan koma; vektor posisinya ditulis sebagai kolom $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$.
- **Menyimpulkan segaris hanya dari sejajar.** Dua panah sejajar bisa berada di garis berbeda. Pastikan ada titik bersama.
- **Lupa tanda negatif saat mengkuadratkan.** $(-4)^2 = 16$, bukan $-16$.

## Ringkasan

- Vektor kolom $\begin{pmatrix} x \\ y \end{pmatrix}$: geser mendatar dan tegak; besarnya $\sqrt{x^2 + y^2}$.
- Jumlah: komponen dijumlah; secara gambar $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$.
- Skalar $k\mathbf{a}$ sejajar $\mathbf{a}$; $k < 0$ berarti berlawanan arah.
- Translasi $(x, y)$ oleh $\begin{pmatrix} p \\ q \end{pmatrix}$ menjadi $(x + p, y + q)$.
- $\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA}$ (ujung dikurangi pangkal).
- Sejajar: $\overrightarrow{PQ} = k\overrightarrow{RS}$; segaris: sejajar dan berbagi titik.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung $\\left|\\begin{pmatrix} -5 \\\\ 12 \\end{pmatrix}\\right|$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: $(-5)^2 + 12^2$ = ?",
   "answer": "169",
   "hint": "Kuadrat bilangan negatif hasilnya positif.",
   "explain": "$25 + 144 = 169$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\sqrt{169}$ = ?",
   "answer": "13",
   "hint": "Bilangan berapa yang kuadratnya 169?",
   "explain": "$13^2 = 169$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Besarnya 13."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Diketahui $\\mathbf{a} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$ dan $\\mathbf{b} = \\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix}$. Hitung $\\mathbf{a} + 2\\mathbf{b}$ dan $\\mathbf{a} - \\mathbf{b}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Komponen atas $\\mathbf{a} + 2\\mathbf{b}$: $2 + 2(-4)$ = ?",
   "answer": "-6",
   "hint": "Kalikan dulu, baru jumlahkan.",
   "explain": "$2 - 8 = -6$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Komponen bawah $\\mathbf{a} + 2\\mathbf{b}$: $3 + 2(1)$ = ?",
   "answer": "5",
   "hint": "Kalikan dulu, baru jumlahkan.",
   "explain": "$3 + 2 = 5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Komponen atas $\\mathbf{a} - \\mathbf{b}$: $2 - (-4)$ = ?",
   "answer": "6",
   "hint": "Mengurangi negatif sama dengan menambah.",
   "explain": "$2 + 4 = 6$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Komponen bawah $\\mathbf{a} - \\mathbf{b}$: $3 - 1$ = ?",
   "answer": "2",
   "hint": "Kurangkan komponen bawah.",
   "explain": "$3 - 1 = 2$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\mathbf{a} + 2\\mathbf{b} = \\begin{pmatrix} -6 \\\\ 5 \\end{pmatrix}$ dan $\\mathbf{a} - \\mathbf{b} = \\begin{pmatrix} 6 \\\\ 2 \\end{pmatrix}$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Titik $A(1, -2)$ dan $B(4, 2)$. Tentukan $\\overrightarrow{AB}$ dan $|\\overrightarrow{AB}|$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Komponen atas $\\overrightarrow{AB}$ = ?",
   "answer": "3",
   "hint": "Ujung dikurangi pangkal: $4 - 1$.",
   "explain": "$4 - 1 = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Komponen bawah $\\overrightarrow{AB}$ = ?",
   "answer": "4",
   "hint": "Ujung dikurangi pangkal: $2 - (-2)$.",
   "explain": "$2 + 2 = 4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$|\\overrightarrow{AB}|$ = ?",
   "answer": "5",
   "hint": "$\\sqrt{3^2 + 4^2}$.",
   "explain": "$\\sqrt{9 + 16} = 5$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\overrightarrow{AB} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ dan $|\\overrightarrow{AB}| = 5$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Vektor $\\begin{pmatrix} k \\\\ 6 \\end{pmatrix}$ sejajar dengan $\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$. Tentukan $k$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Vektor pertama $= m$ kali vektor kedua. Dari komponen bawah, $6 = 3m$. Berapa $m$?",
   "answer": "2",
   "hint": "Bagi 6 dengan 3.",
   "explain": "$m = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $k = 2 \\times 2$ = ?",
   "answer": "4",
   "hint": "Komponen atas juga dikali $m$.",
   "explain": "$k = 4$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $k = 4$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Pada segitiga $OAB$, $\\overrightarrow{OA} = \\mathbf{a}$, $\\overrightarrow{OB} = \\mathbf{b}$, dan $M$ titik tengah $AB$. Nyatakan $\\overrightarrow{OM}$ dalam $\\mathbf{a}$ dan $\\mathbf{b}$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: $\\overrightarrow{AB}$ = ...",
   "options": [
    "$\\mathbf{b} - \\mathbf{a}$",
    "$\\mathbf{a} - \\mathbf{b}$",
    "$\\mathbf{a} + \\mathbf{b}$"
   ],
   "answer": "$\\mathbf{b} - \\mathbf{a}$",
   "hint": "Ujung dikurangi pangkal.",
   "explain": "$\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: $\\overrightarrow{OM} = \\overrightarrow{OA} + \\frac{1}{2}\\overrightarrow{AB}$ = ...",
   "options": [
    "$\\frac{1}{2}(\\mathbf{a} + \\mathbf{b})$",
    "$\\frac{1}{2}(\\mathbf{b} - \\mathbf{a})$",
    "$\\mathbf{a} + \\mathbf{b}$"
   ],
   "answer": "$\\frac{1}{2}(\\mathbf{a} + \\mathbf{b})$",
   "hint": "$\\mathbf{a} + \\frac{1}{2}\\mathbf{b} - \\frac{1}{2}\\mathbf{a}$, lalu sederhanakan.",
   "explain": "$\\mathbf{a} + \\frac{1}{2}(\\mathbf{b} - \\mathbf{a}) = \\frac{1}{2}\\mathbf{a} + \\frac{1}{2}\\mathbf{b}$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\overrightarrow{OM} = \\frac{1}{2}(\\mathbf{a} + \\mathbf{b})$."
}
```
