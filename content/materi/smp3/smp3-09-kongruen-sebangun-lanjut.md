---
id: smp3-09-kongruen-sebangun-lanjut
judul: Kesebangunan Lanjut
jenjang: smp3
moe: "Secondary 3 · Geometry and Measurement · G2 Congruence and similarity"
prasyarat: [smp2-08-kongruen-sebangun, smp1-10-sudut-segitiga-poligon, smp2-01-skala-proporsi]
durasi_menit: 55
---

## Kenapa belajar ini?

Arsitek menggambar denah rumah dengan skala, pabrik membuat kaleng susu dalam beberapa ukuran, dan perencana kota mencari lokasi yang adil bagi dua kampung. Semua itu memakai kesebangunan, kekongruenan, dan garis-garis istimewa yang kamu pelajari di sini.

## Analogi

Bayangkan **mesin fotokopi dengan tombol zoom** di toko fotokopi dekat sekolah.

- Zoom **100%** menghasilkan salinan yang **kongruen**: bentuk dan ukurannya sama persis.
- Zoom **200%** menghasilkan salinan yang **sebangun**: bentuknya sama, semua panjang menjadi 2 kali, dan semua sudut tetap.
- Sekarang bayangkan gambar asli terdiri dari **kotak-kotak kecil** 1 cm × 1 cm. Dengan zoom 200%, setiap kotak menjadi 2 cm × 2 cm, yaitu **4 kotak** asli. Jadi luas menjadi $2^2 = 4$ kali, bukan 2 kali.
- Kalau mesinnya **printer 3D** yang memperbesar benda, setiap kubus kecil 1 cm menjadi $2 \times 2 \times 2 = 8$ kubus. Volume menjadi $2^3 = 8$ kali.

```anim
{"type": "bangun", "title": "Zoom 200%: panjang ×2, luas ×4", "titik": {"A": [0, 0], "B": [1, 0], "C": [1, 1], "D": [0, 1], "E": [2.5, 0], "F": [4.5, 0], "G": [4.5, 2], "H": [2.5, 2], "I": [3.5, 0], "J": [3.5, 2], "K": [2.5, 1], "L": [4.5, 1]}, "sisi": [["A", "B", "1"], ["B", "C"], ["C", "D"], ["D", "A"], ["E", "F", "2"], ["F", "G"], ["G", "H"], ["H", "E", "2"], ["I", "J"], ["K", "L"]], "langkah": [{"say": "Gambar asli: kotak 1 cm × 1 cm.", "sisi": 4}, {"say": "Zoom 200%: setiap sisi menjadi 2 cm. Faktor skala $k = 2$.", "sisi": 8, "sorot": ["EF", "HE"]}, {"say": "Kotak besar berisi $2 \\times 2 = 4$ kotak asli. Luas menjadi $k^2 = 4$ kali, bukan 2 kali.", "sisi": 10, "sorot": ["IJ", "KL"]}]}
```

```visual
{"type": "grid", "width": 2, "height": 2, "shade": [{"x": 0, "y": 0, "w": 1, "h": 1}], "showDims": true, "unit": "cm", "caption": "Satu kotak asli (diarsir) hanya seperempat dari salinan zoom 200%."}
```

Angka zoom ini disebut **faktor skala** $k$.

## Konsep

### Gambar berskala

Skala $1 : n$ berarti 1 cm pada gambar mewakili $n$ cm sebenarnya. Gambar berskala adalah salinan sebangun yang diperkecil, dengan $k = \frac{1}{n}$.

- Panjang sebenarnya = panjang gambar × $n$.
- Luas sebenarnya = luas gambar × $n^2$.

### Uji kongruen segitiga

Dua segitiga kongruen jika memenuhi salah satu:

- **SSS (sisi-sisi-sisi):** ketiga sisi sama panjang.
- **SAS (sisi-sudut-sisi):** dua sisi dan **sudut yang diapit** sama.
- **ASA atau AAS:** dua sudut dan satu sisi yang bersesuaian sama.
- **RHS:** sama-sama siku-siku, sisi miring sama, dan satu sisi lain sama.

Kenapa cukup? Data itu sudah "mengunci" bentuk segitiga. Dengan jangka dan penggaris, hanya ada satu segitiga yang bisa digambar dari data tersebut.

Perhatikan bahwa **SSA (sudut tidak diapit) bukan uji kongruen**, karena bisa menghasilkan dua segitiga berbeda.

### Uji sebangun segitiga

Dua segitiga sebangun jika:

- **AA:** dua pasang sudut sama. Sudut ketiga otomatis sama karena jumlahnya $180^\circ$.
- **SSS sebanding:** ketiga pasang sisi punya perbandingan sama.
- **SAS sebanding:** dua pasang sisi sebanding dan sudut apitnya sama.

Situasi yang sering muncul: garis yang **sejajar** salah satu sisi segitiga memotong segitiga kecil yang sebangun, karena sudut-sudut sehadapnya sama.

```anim
{"type": "bangun", "title": "Garis sejajar memotong segitiga sebangun", "titik": {"A": [2, 5], "B": [0, 0], "C": [6, 0], "D": [1.2, 3], "E": [3.6, 3]}, "sisi": [["A", "B"], ["B", "C"], ["C", "A"], ["D", "E"]], "sudut": [{"di": "A", "dari": "B", "ke": "C"}, {"di": "D", "dari": "A", "ke": "E"}, {"di": "B", "dari": "A", "ke": "C"}], "langkah": [{"say": "Segitiga $ABC$.", "sisi": 3}, {"say": "Tarik $DE$ sejajar $BC$.", "sisi": 4, "sorot": ["DE", "BC"]}, {"say": "$\\angle A$ milik bersama kedua segitiga.", "sisi": 4, "sudut": 1, "sorot": ["A"]}, {"say": "$\\angle ADE = \\angle ABC$ karena sehadap. Jadi segitiga $ADE$ dan $ABC$ sebangun (AA).", "sisi": 4, "sudut": 3, "sorot": ["D", "B"]}]}
```

### Garis sumbu dan garis bagi sudut

**Garis sumbu** ruas $AB$ adalah garis yang tegak lurus $AB$ dan melalui titik tengahnya. Setiap titik $P$ di garis sumbu **berjarak sama** dari $A$ dan $B$. Alasannya: jika $M$ titik tengah, segitiga $PMA$ dan $PMB$ kongruen (SAS: $AM = BM$, sudut siku-siku, $PM$ bersama), jadi $PA = PB$.

```anim
{"type": "bangun", "title": "Titik di garis sumbu berjarak sama dari A dan B", "titik": {"A": [0, 0], "B": [6, 0], "M": [3, 0], "P": [3, 4], "Q": [3, -1.5]}, "sisi": [["A", "B"], ["P", "Q"], ["P", "A"], ["P", "B"]], "sudut": [{"di": "M", "dari": "B", "ke": "P", "siku": true}], "langkah": [{"say": "Ruas $AB$ dengan titik tengah $M$.", "sisi": 1}, {"say": "Garis sumbu: tegak lurus $AB$ melalui $M$.", "sisi": 2, "sudut": 1, "sorot": ["PQ"]}, {"say": "Ambil titik $P$ di garis sumbu. Segitiga $PMA$ dan $PMB$ kongruen (SAS).", "sisi": 4, "sudut": 1, "sorot": ["P"]}, {"say": "Jadi $PA = PB$.", "sisi": 4, "sudut": 1, "sorot": ["PA", "PB"]}]}
```

Melukis garis sumbu $AB$ dengan jangka:

1. Buka jangka lebih dari setengah $AB$.
2. Dari $A$, buat busur di atas dan di bawah $AB$.
3. Dengan bukaan sama, dari $B$ buat busur yang memotong kedua busur tadi.
4. Hubungkan kedua titik potong.

**Garis bagi sudut** membagi sudut menjadi dua sama besar. Setiap titik di garis bagi **berjarak sama dari kedua kaki sudut**. Alasannya: dua segitiga siku-siku yang terbentuk kongruen (AAS).

```anim
{"type": "bangun", "title": "Titik di garis bagi sudut berjarak sama dari kedua kaki", "titik": {"B": [0, 0], "A": [6, 3.464], "C": [7, 0], "R": [5, 1.34], "X": [5, 0], "Y": [4.33, 2.5]}, "sisi": [["B", "A"], ["B", "C"], ["B", "R"], ["R", "X"], ["R", "Y"]], "sudut": [{"di": "B", "dari": "C", "ke": "R"}, {"di": "B", "dari": "R", "ke": "A"}, {"di": "X", "dari": "B", "ke": "R", "siku": true}, {"di": "Y", "dari": "R", "ke": "B", "siku": true}], "langkah": [{"say": "Sudut $ABC$.", "sisi": 2}, {"say": "Garis bagi $BR$ membagi sudut menjadi dua sama besar.", "sisi": 3, "sudut": 2, "sorot": ["BR"]}, {"say": "Jarak $R$ ke kedua kaki diukur tegak lurus: $RX$ dan $RY$.", "sisi": 5, "sudut": 4, "sorot": ["RX", "RY"]}, {"say": "Dua segitiga siku-siku itu kongruen (AAS), jadi $RX = RY$.", "sisi": 5, "sudut": 4, "sorot": ["RX", "RY", "R"]}]}
```

Melukis garis bagi $\angle ABC$:

1. Dari $B$, buat busur yang memotong $BA$ di $P$ dan $BC$ di $Q$.
2. Dari $P$ dan dari $Q$, buat dua busur sama besar yang berpotongan di $R$.
3. Hubungkan $B$ dan $R$.

### Perbandingan luas dan volume

Jika dua bangun sebangun dengan perbandingan panjang $l_1 : l_2$:

$$\frac{L_1}{L_2} = \left(\frac{l_1}{l_2}\right)^2, \qquad \frac{V_1}{V_2} = \left(\frac{l_1}{l_2}\right)^3$$

Ini berlaku untuk **semua** panjang yang bersesuaian (tinggi, jari-jari, keliling) dan **semua** luas (luas alas, luas permukaan), sesuai analogi kotak dan kubus kecil.

```anim
{"type": "persamaan", "title": "Faktor skala k = 2", "baris": [{"tex": "\\frac{l_1}{l_2} = 2", "say": "Semua panjang menjadi 2 kali."}, {"tex": "\\frac{L_1}{L_2} = 2^2 = 4", "say": "Setiap kotak kecil menjadi 4 kotak: luas $\\times k^2$.", "op": "kuadratkan"}, {"tex": "\\frac{V_1}{V_2} = 2^3 = 8", "say": "Setiap kubus kecil menjadi 8 kubus: volume $\\times k^3$.", "op": "pangkat tiga"}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Gambar berskala

```soal
{
 "title": "Contoh 1",
 "text": "Denah rumah berskala $1 : 50$. Ruang tamu pada denah berukuran 9 cm × 8 cm. Hitung ukuran dan luas ruang tamu sebenarnya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Panjang sebenarnya = 9 × 50 = ?",
   "answer": "450",
   "hint": "Kalikan dengan 50.",
   "explain": "450 cm = 4,5 m.",
   "error": "salah-fakta-kali",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Lebar sebenarnya = 8 × 50 = ?",
   "answer": "400",
   "hint": "Kalikan dengan 50.",
   "explain": "400 cm = 4 m.",
   "error": "salah-fakta-kali",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Luas sebenarnya = 4,5 × 4 = ?",
   "answer": "18",
   "hint": "Pakai satuan meter.",
   "explain": "18 m².",
   "error": "salah-langkah-materi",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: luas denah 72 cm² dikali $50^2 = 2.500$. Hasilnya?",
   "answer": "180.000",
   "hint": "72 × 2.500.",
   "explain": "180.000 cm² = 18 m², karena 1 m² = 10.000 cm². Sama.",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Ruang tamu berukuran 4,5 m × 4 m, luasnya 18 m²."
}
```

### Contoh 2: Memilih uji yang tepat

```soal
{
 "title": "Contoh 2",
 "text": "(a) Segitiga $X$ bersisi 6, 8, 10 cm dan segitiga $Y$ bersisi 9, 12, 15 cm. (b) Segitiga $ABC$ dengan $AB = 5$ cm, $\\angle B = 40^\\circ$, $BC = 7$ cm, dan segitiga $PQR$ dengan $PQ = 5$ cm, $\\angle Q = 40^\\circ$, $QR = 7$ cm. Tentukan hubungan tiap pasangan.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: (a) Bandingkan sisi terpendek: $\\frac{9}{6}$ = ?",
   "answer": "1,5",
   "hint": "Bagi 9 dengan 6.",
   "explain": "1,5. Begitu juga $\\frac{12}{8}$ dan $\\frac{15}{10}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Kesimpulan (a)?",
   "options": [
    "Sebangun (SSS sebanding), $k = 1{,}5$",
    "Kongruen (SSS)",
    "Tidak sebangun"
   ],
   "answer": "Sebangun (SSS sebanding), $k = 1{,}5$",
   "hint": "Perbandingannya sama, tetapi bukan 1.",
   "explain": "Seperti fotokopi zoom 150%.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: (b) Di mana letak sudut $40^\\circ$?",
   "options": [
    "Diapit sisi 5 dan 7",
    "Di depan sisi 7",
    "Di depan sisi 5"
   ],
   "answer": "Diapit sisi 5 dan 7",
   "hint": "$\\angle B$ berada di antara $AB$ dan $BC$.",
   "explain": "Sudutnya diapit kedua sisi.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Kesimpulan (b)?",
   "options": [
    "Kongruen (SAS)",
    "Kongruen (SSA)",
    "Sebangun saja"
   ],
   "answer": "Kongruen (SAS)",
   "hint": "Dua sisi dan sudut apit sama.",
   "explain": "Kongruen menurut SAS.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $9^2 + 12^2$ = ?",
   "answer": "225",
   "hint": "81 + 144.",
   "explain": "$225 = 15^2$: keduanya siku-siku, konsisten dengan sebangun.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "(a) sebangun dengan $k = 1{,}5$; (b) kongruen (SAS)."
}
```

### Contoh 3: Garis sejajar dan perbandingan luas

```anim
{"type": "bangun", "title": "DE sejajar BC", "titik": {"A": [2, 5], "B": [0, 0], "C": [6, 0], "D": [1.2, 3], "E": [3.6, 3]}, "sisi": [["A", "D", "4"], ["D", "B", "6"], ["B", "C"], ["C", "E"], ["E", "A"], ["D", "E", "5"]], "langkah": [{"say": "$AD = 4$ cm, $DB = 6$ cm, $DE = 5$ cm, dan luas $ADE = 8$ cm²."}]}
```

```soal
{
 "title": "Contoh 3",
 "text": "Pada segitiga $ABC$, titik $D$ di $AB$ dan $E$ di $AC$ dengan $DE \\parallel BC$. Diketahui $AD = 4$ cm, $DB = 6$ cm, $DE = 5$ cm, dan luas segitiga $ADE = 8$ cm². Hitung $BC$, luas $ABC$, dan luas trapesium $DBCE$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Mengapa segitiga $ADE$ dan $ABC$ sebangun?",
   "options": [
    "AA: $\\angle A$ bersama dan $\\angle ADE = \\angle ABC$ (sehadap)",
    "SSS sebanding",
    "SAS: dua sisi sama"
   ],
   "answer": "AA: $\\angle A$ bersama dan $\\angle ADE = \\angle ABC$ (sehadap)",
   "hint": "$DE \\parallel BC$ membuat sudut sehadap.",
   "explain": "Dua pasang sudut sama, jadi sebangun (AA).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $AB$ = ?",
   "answer": "10",
   "hint": "$AD + DB$.",
   "explain": "$AB = 10$ cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Faktor skala $k = \\frac{AB}{AD}$ = ?",
   "answer": "2,5",
   "hint": "$\\frac{10}{4}$, bukan $\\frac{6}{4}$.",
   "explain": "$k = 2{,}5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $BC = 2{,}5 \\times 5$ = ?",
   "answer": "12,5",
   "hint": "Kalikan $DE$ dengan $k$.",
   "explain": "$BC = 12{,}5$ cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: $k^2$ = ?",
   "answer": "6,25",
   "hint": "$2{,}5 \\times 2{,}5$.",
   "explain": "Luas dikali 6,25.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 6: Luas $ABC = 8 \\times 6{,}25$ = ?",
   "answer": "50",
   "hint": "Kalikan luas $ADE$ dengan $k^2$.",
   "explain": "50 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 7: Luas trapesium $DBCE$ = ?",
   "answer": "42",
   "hint": "Luas $ABC$ dikurangi luas $ADE$.",
   "explain": "50 − 8 = 42 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "fraction",
   "prompt": "Cek jawaban: sederhanakan $\\frac{8}{50}$.",
   "answer": {
    "num": 4,
    "den": 25
   },
   "hint": "Bagi pembilang dan penyebut dengan 2.",
   "explain": "$\\frac{4}{25} = \\left(\\frac{4}{10}\\right)^2$. Cocok.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  }
 ],
 "conclusion": "$BC = 12{,}5$ cm, luas $ABC = 50$ cm², luas $DBCE = 42$ cm²."
}
```

### Contoh 4: Soal cerita volume

```soal
{
 "title": "Contoh 4",
 "text": "Dua kaleng susu berbentuk sebangun. Tinggi kaleng kecil 10 cm dan kaleng besar 15 cm. Kaleng kecil berisi 400 ml dan labelnya seluas 150 cm². Hitung isi kaleng besar dan luas labelnya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Faktor skala panjang $k = \\frac{15}{10}$ = ?",
   "answer": "1,5",
   "hint": "Tinggi besar dibagi tinggi kecil.",
   "explain": "$k = 1{,}5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $k^3 = 1{,}5^3$ = ?",
   "answer": "3,375",
   "hint": "$1{,}5 \\times 1{,}5 = 2{,}25$, lalu kali 1,5.",
   "explain": "$k^3 = 3{,}375$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Isi kaleng besar = $400 \\times 3{,}375$ = ?",
   "answer": "1.350",
   "hint": "Volume dikali $k^3$.",
   "explain": "1.350 ml.",
   "error": "salah-langkah-materi",
   "suffix": "ml"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $k^2$ = ?",
   "answer": "2,25",
   "hint": "$1{,}5 \\times 1{,}5$.",
   "explain": "$k^2 = 2{,}25$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Luas label besar = $150 \\times 2{,}25$ = ?",
   "answer": "337,5",
   "hint": "Luas dikali $k^2$.",
   "explain": "337,5 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Isi kaleng besar 1.350 ml dan labelnya 337,5 cm²."
}
```

### Contoh 5: Lokasi warung dengan garis sumbu

```soal
{
 "title": "Contoh 5",
 "text": "Pada peta berskala $1 : 20.000$, rumah Budi ($B$) dan rumah Siti ($S$) berjarak 6 cm. Sebuah warung akan dibangun dengan jarak sama ke kedua rumah, sejauh 4 cm (pada peta) dari titik tengah $BS$. Berapa jarak sebenarnya dari warung ke tiap rumah?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Warung berjarak sama dari $B$ dan $S$, jadi ia terletak di ...",
   "options": [
    "garis sumbu $BS$",
    "garis bagi sudut",
    "ruas $BS$"
   ],
   "answer": "garis sumbu $BS$",
   "hint": "Titik mana yang berjarak sama dari dua titik?",
   "explain": "Setiap titik di garis sumbu berjarak sama dari kedua ujung ruas.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jarak $M$ ke $B$ pada peta = ?",
   "answer": "3",
   "hint": "$M$ titik tengah ruas 6 cm.",
   "explain": "3 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Jarak warung ke $B$ pada peta $= \\sqrt{3^2 + 4^2}$ = ?",
   "answer": "5",
   "hint": "Garis sumbu tegak lurus $BS$, jadi pakai Pythagoras.",
   "explain": "5 cm pada peta.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Jarak sebenarnya dalam km? ($5 \\times 20.000$ cm)",
   "answer": "1",
   "hint": "100.000 cm = 1.000 m.",
   "explain": "100.000 cm = 1 km.",
   "error": "salah-pilih-satuan",
   "suffix": "km"
  }
 ],
 "conclusion": "Warung berjarak 1 km dari masing-masing rumah."
}
```

## Kesalahan yang sering terjadi

- **Mengalikan luas dengan $k$, bukan $k^2$.** Fotokopi zoom 200% membuat luas 4 kali, bukan 2 kali. Volume memakai $k^3$.
- **Mencocokkan sisi yang salah.** Urutkan sisi dari terpendek ke terpanjang, atau cocokkan sisi yang berhadapan dengan sudut yang sama.
- **Memakai SSA sebagai uji kongruen.** Sudut harus diapit kedua sisi (SAS), kecuali pada segitiga siku-siku (RHS).
- **Memakai $DB$ bukan $AB$ pada garis sejajar.** Pada Contoh 3, perbandingannya $\frac{AD}{AB} = \frac{4}{10}$, bukan $\frac{4}{6}$.
- **Lupa satuan saat memakai skala luas.** Ubah cm$^2$ ke m$^2$ dengan membagi 10.000, bukan 100.

## Ringkasan

- Gambar berskala $1 : n$: panjang × $n$, luas × $n^2$.
- Uji kongruen: SSS, SAS, ASA/AAS, RHS. Uji sebangun: AA, SSS sebanding, SAS sebanding.
- Titik di garis sumbu berjarak sama dari kedua ujung ruas; titik di garis bagi sudut berjarak sama dari kedua kaki sudut.
- Bangun sebangun dengan faktor skala $k$: luas × $k^2$, volume × $k^3$.
- Garis yang sejajar sisi segitiga membentuk segitiga kecil yang sebangun.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Pada denah berskala $1 : 200$, panjang sebuah kamar 3,5 cm. Berapa panjang sebenarnya dalam meter?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Panjang sebenarnya = 3,5 × 200 = ? cm",
   "answer": "700",
   "hint": "Kalikan dengan 200.",
   "explain": "700 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Dalam meter?",
   "answer": "7",
   "hint": "1 m = 100 cm.",
   "explain": "7 m.",
   "error": "salah-pilih-satuan",
   "suffix": "m"
  }
 ],
 "conclusion": "Panjang sebenarnya 7 m."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Segitiga $P$ bersudut $50^\\circ$ dan $60^\\circ$. Segitiga $Q$ bersudut $60^\\circ$ dan $70^\\circ$. Apakah keduanya sebangun? Jelaskan.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Sudut ketiga segitiga $P$ = ?",
   "answer": "70",
   "hint": "Jumlah sudut segitiga $180^\\circ$.",
   "explain": "$70^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Sudut ketiga segitiga $Q$ = ?",
   "answer": "50",
   "hint": "$180^\\circ - 60^\\circ - 70^\\circ$.",
   "explain": "$50^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "choice",
   "prompt": "Sebangun?",
   "options": [
    "Ya, ketiga sudutnya sama (AA)",
    "Tidak, sudut yang diketahui berbeda",
    "Tidak bisa ditentukan tanpa sisi"
   ],
   "answer": "Ya, ketiga sudutnya sama (AA)",
   "hint": "Bandingkan ketiga sudut masing-masing.",
   "explain": "Keduanya bersudut 50°, 60°, 70°.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Ya, sebangun (AA)."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Dua bangun sebangun dengan perbandingan panjang $2 : 5$. Luas bangun kecil 12 cm². Berapa luas bangun besar?",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\left(\\frac{5}{2}\\right)^2$ = ?",
   "answer": "6,25",
   "hint": "$2{,}5^2$.",
   "explain": "6,25.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Luas bangun besar = ?",
   "answer": "75",
   "hint": "$12 \\times 6{,}25$.",
   "explain": "75 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Luas bangun besar 75 cm²."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Dua botol sebangun memiliki perbandingan volume $8 : 27$. Tinggi botol kecil 6 cm. Berapa tinggi botol besar?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Perbandingan panjangnya?",
   "options": [
    "$2 : 3$",
    "$8 : 27$",
    "$4 : 9$"
   ],
   "answer": "$2 : 3$",
   "hint": "Volume memakai $k^3$; ambil akar pangkat tiga.",
   "explain": "$\\sqrt[3]{8} : \\sqrt[3]{27} = 2 : 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Tinggi botol besar = ?",
   "answer": "9",
   "hint": "$6 \\times \\frac{3}{2}$.",
   "explain": "9 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Tinggi botol besar 9 cm."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Dua segitiga siku-siku sama-sama memiliki sisi miring 13 cm dan satu sisi siku-siku 5 cm. Apakah keduanya kongruen? Berapa panjang sisi ketiganya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Kongruen?",
   "options": [
    "Ya, menurut RHS",
    "Tidak, karena SSA",
    "Hanya sebangun"
   ],
   "answer": "Ya, menurut RHS",
   "hint": "Siku-siku, sisi miring sama, dan satu sisi lain sama.",
   "explain": "Kongruen menurut RHS.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Sisi ketiga $= \\sqrt{13^2 - 5^2}$ = ?",
   "answer": "12",
   "hint": "$\\sqrt{169 - 25}$.",
   "explain": "$\\sqrt{144} = 12$ cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Kongruen (RHS); sisi ketiganya 12 cm."
}
```
