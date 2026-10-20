---
id: sma2-03-pembuktian-geometri
judul: Pembuktian Geometri Bidang
jenjang: sma2
moe: "Additional Mathematics · G3 Proofs in plane geometry"
prasyarat: [smp1-10-sudut-segitiga-poligon, smp3-08-sifat-lingkaran, smp3-09-kongruen-sebangun-lanjut]
durasi_menit: 75
---

## Kenapa belajar ini?

Gambar bisa menipu. Dua garis yang terlihat sejajar belum tentu sejajar. Pembuktian melatih kita menarik kesimpulan yang pasti benar dari fakta yang sudah diketahui. Cara berpikir ini dipakai di matematika lanjut, pemrograman, hukum, dan di mana pun argumen harus kuat.

## Analogi

Bayangkan kamu seorang **detektif** yang harus meyakinkan hakim di **persidangan**.

- Setiap pernyataan adalah **tuduhan**. Tuduhan hanya diterima jika disertai **barang bukti**, yaitu alasan berupa fakta yang diketahui, definisi, atau teorema.
- "Kelihatannya di gambar begitu" **bukan** barang bukti.
- Tuduhan yang sudah terbukti boleh dipakai sebagai barang bukti untuk tuduhan berikutnya. Begitulah rantai bukti dibangun.
- Detektif tidak boleh memakai kesimpulan akhir sebagai bukti. Itu namanya berputar-putar.

```visual
{"type": "table", "caption": "Berkas perkara: setiap tuduhan disertai barang bukti", "head": ["Tuduhan (pernyataan)", "Barang bukti (alasan)"], "rows": [["∠OAP = ∠OBP = 90°", "garis singgung tegak lurus jari-jari"], ["OA = OB", "jari-jari lingkaran"], ["OP = OP", "sisi bersama"], ["△OAP ≅ △OBP", "RHS, memakai tiga baris di atas"], ["PA = PB", "sisi bersesuaian segitiga kongruen"]]}
```

## Konsep

### Format pembuktian

Tulis setiap baris sebagai **pernyataan (alasan)**. Mulai dari yang diketahui, akhiri dengan yang harus dibuktikan. Alasan ditulis singkat dengan nama baku.

### Kotak barang bukti: garis sejajar dan segitiga

- **Sudut bertolak belakang** sama besar.
- Jika dua garis sejajar dipotong garis lain: **sudut sehadap** sama, **sudut dalam berseberangan** sama, **sudut dalam sepihak** berjumlah $180°$. Kebalikannya juga berlaku: jika sudut sehadap sama, kedua garis sejajar.
- Jumlah sudut segitiga $180°$. **Sudut luar** segitiga sama dengan jumlah dua sudut dalam yang tidak bersebelahan.
- Segitiga sama kaki: sudut alasnya sama besar, dan sebaliknya.

```anim
{"type": "bangun", "title": "Dua garis sejajar dipotong garis lain", "titik": {"A": [-1, 2], "B": [7, 2], "C": [-1, 0], "D": [7, 0], "P": [1, -1], "Q": [5, 3], "X": [2, 0], "Y": [4, 2]}, "sisi": [["A", "B"], ["C", "D"], ["P", "Q"]], "sudut": [{"di": "X", "dari": "D", "ke": "Y", "label": "x"}, {"di": "Y", "dari": "B", "ke": "Q", "label": "x"}, {"di": "Y", "dari": "A", "ke": "X", "label": "x"}], "langkah": [{"say": "Garis $AB \\parallel CD$ dipotong garis $PQ$ di $X$ dan $Y$.", "sisi": 3}, {"say": "Sudut di $X$ kita sebut $x$.", "sisi": 3, "sudut": 1, "sorot": ["X"]}, {"say": "Sudut sehadap di $Y$ (posisi sama, kanan atas) juga $x$.", "sisi": 3, "sudut": 2, "sorot": ["Y"]}, {"say": "Sudut dalam berseberangan di $Y$ (kiri bawah) juga $x$, karena bertolak belakang dengan sudut sehadap.", "sisi": 3, "sudut": 3, "sorot": ["Y", "X"]}]}
```

### Kotak barang bukti: segiempat

- **Jajargenjang:** sisi berhadapan sejajar dan sama panjang, sudut berhadapan sama, diagonal saling membagi dua.
- **Persegi panjang:** jajargenjang dengan sudut siku-siku; diagonalnya sama panjang.
- **Belah ketupat:** jajargenjang dengan semua sisi sama; diagonalnya saling tegak lurus.

### Kotak barang bukti: lingkaran

- Sudut pusat sama dengan dua kali sudut keliling yang menghadap busur sama.
- Sudut keliling yang menghadap busur sama, besarnya sama.
- Sudut keliling yang menghadap diameter (sudut dalam setengah lingkaran) $= 90°$.
- Sudut berhadapan pada segiempat tali busur berjumlah $180°$.
- Garis singgung tegak lurus jari-jari di titik singgung.
- Dua garis singgung dari satu titik di luar lingkaran sama panjang.

### Segitiga kongruen dan sebangun

**Kongruen** (sama bentuk dan ukuran), syaratnya salah satu:

- **SSS**: tiga sisi bersesuaian sama.
- **SAS** (sisi-sudut-sisi): sudutnya harus diapit kedua sisi.
- **ASA** atau **AAS**: dua sudut dan satu sisi bersesuaian sama.
- **RHS**: segitiga siku-siku dengan sisi miring dan satu sisi lain sama.

**Sebangun** (bentuk sama, ukuran boleh beda), syaratnya salah satu:

- **AA**: dua pasang sudut sama.
- **SAS**: dua pasang sisi sebanding dan sudut apitnya sama.
- **SSS**: tiga pasang sisi sebanding.

Setelah kongruen atau sebangun terbukti, kita boleh menyimpulkan sisi dan sudut bersesuaian sama (atau sebanding).

### Teorema titik tengah

Jika $M$ dan $N$ adalah titik tengah sisi $AB$ dan $AC$ pada segitiga $ABC$, maka

$$
MN \parallel BC \quad \text{dan} \quad MN = \tfrac{1}{2}BC
$$

Buktinya ada di contoh 2.

```anim
{"type": "bangun", "title": "Teorema titik tengah", "titik": {"A": [2, 4], "B": [0, 0], "C": [6, 0], "M": [1, 2], "N": [4, 2]}, "sisi": [["A", "B"], ["A", "C"], ["B", "C", "14"], ["M", "N", "7"]], "sudut": [{"di": "B", "dari": "C", "ke": "A"}, {"di": "M", "dari": "N", "ke": "A"}], "langkah": [{"say": "Segitiga $ABC$ dengan $BC = 14$.", "sisi": 3}, {"say": "$M$ titik tengah $AB$, $N$ titik tengah $AC$. Hubungkan $MN$.", "sisi": 4, "sorot": ["M", "N"]}, {"say": "$\\angle AMN = \\angle ABC$ (sehadap), jadi $MN \\parallel BC$.", "sisi": 4, "sudut": 2, "sorot": ["MN", "BC"]}, {"say": "$MN = \\frac{1}{2} BC = 7$.", "sisi": 4, "sudut": 2, "sorot": ["MN"]}]}
```

### Teorema tali busur dan garis singgung

Sudut antara garis singgung dan tali busur di titik singgung sama dengan sudut keliling di **tembereng seberang** yang menghadap tali busur itu. Buktinya ada di contoh 3.

```anim
{"type": "bangun", "title": "Sudut singgung dan sudut keliling", "titik": {"O": [0, 0], "A": [0, -3], "T": [4, -3], "B": [2.819, 1.026], "C": [-2.598, 1.5], "D": [0, 3]}, "lingkaran": [{"pusat": [0, 0], "r": 3}], "sisi": [["A", "T"], ["A", "B"], ["A", "C"], ["C", "B"], ["A", "D"], ["D", "B"]], "sudut": [{"di": "A", "dari": "T", "ke": "B", "label": "x"}, {"di": "C", "dari": "A", "ke": "B", "label": "x"}, {"di": "D", "dari": "A", "ke": "B", "label": "x"}, {"di": "B", "dari": "A", "ke": "D", "siku": true}], "langkah": [{"say": "$TA$ menyinggung lingkaran di $A$, $AB$ tali busur.", "sisi": 2, "sudut": 1, "sorot": ["A"]}, {"say": "$C$ di tembereng seberang. Sudut keliling $\\angle ACB$ juga $x$.", "sisi": 4, "sudut": 2, "sorot": ["C"]}, {"say": "Garis bantu: diameter $AD$ dan tali busur $BD$ (dipakai di contoh 3).", "sisi": 6, "sudut": 4, "sorot": ["AD", "DB"]}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Sisi berhadapan jajargenjang

```soal
{
 "title": "Contoh 1",
 "text": "$ABCD$ jajargenjang dengan $AB \\parallel DC$ dan $AD \\parallel BC$. Buktikan bahwa $AB = CD$ dan $BC = DA$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Rencanakan. Garis bantu apa yang membagi jajargenjang menjadi dua segitiga yang memuat sisi-sisi itu?",
   "options": [
    "Diagonal $AC$",
    "Garis tinggi dari $D$",
    "Garis melalui $C$ sejajar $AD$"
   ],
   "answer": "Diagonal $AC$",
   "hint": "Kita ingin $AB$ dan $CD$ berada di dua segitiga berbeda.",
   "explain": "Diagonal $AC$ membentuk $\\triangle ABC$ dan $\\triangle CDA$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Alasan $\\angle BAC = \\angle DCA$?",
   "options": [
    "Sudut dalam berseberangan, $AB \\parallel DC$",
    "Sudut dalam berseberangan, $AD \\parallel BC$",
    "Sudut sehadap",
    "Kelihatan sama di gambar"
   ],
   "answer": "Sudut dalam berseberangan, $AB \\parallel DC$",
   "hint": "Garis sejajar mana yang dipotong oleh $AC$ di titik $A$ dan $C$ dengan sudut ini?",
   "explain": "Sudut dalam berseberangan, karena $AB \\parallel DC$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Alasan $\\angle BCA = \\angle DAC$?",
   "options": [
    "Sudut dalam berseberangan, $AB \\parallel DC$",
    "Sudut dalam berseberangan, $AD \\parallel BC$",
    "Sudut sehadap",
    "Kelihatan sama di gambar"
   ],
   "answer": "Sudut dalam berseberangan, $AD \\parallel BC$",
   "hint": "Sudut ini dibentuk oleh $BC$ dan $AD$.",
   "explain": "Sudut dalam berseberangan, karena $AD \\parallel BC$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Alasan $AC = CA$?",
   "options": [
    "Sisi bersama",
    "Diagonal jajargenjang sama panjang",
    "Definisi jajargenjang"
   ],
   "answer": "Sisi bersama",
   "hint": "Ruas garis ini dimiliki kedua segitiga.",
   "explain": "$AC$ adalah sisi bersama, dan diapit kedua sudut tadi.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Syarat kongruen yang dipakai?",
   "options": [
    "ASA",
    "SAS",
    "SSA",
    "AA"
   ],
   "answer": "ASA",
   "hint": "Dua sudut dan sisi yang diapitnya.",
   "explain": "$\\triangle ABC \\cong \\triangle CDA$ (ASA).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek bukti: apakah ada baris yang memakai \"$AB = CD$\" sebagai alasan?",
   "options": [
    "Tidak, hanya definisi jajargenjang dan sifat garis sejajar",
    "Ya, di langkah 4"
   ],
   "answer": "Tidak, hanya definisi jajargenjang dan sifat garis sejajar",
   "hint": "Periksa alasan di tiap baris.",
   "explain": "Tidak berputar-putar. Maka $AB = CD$ dan $BC = DA$ (sisi bersesuaian).",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\triangle ABC \\cong \\triangle CDA$ (ASA), jadi $AB = CD$ dan $BC = DA$."
}
```

### Contoh 2: Membuktikan teorema titik tengah

```soal
{
 "title": "Contoh 2",
 "text": "Pada $\\triangle ABC$, $M$ titik tengah $AB$ dan $N$ titik tengah $AC$. Buktikan $MN \\parallel BC$ dan $MN = \\frac{1}{2}BC$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Segitiga mana yang dibandingkan?",
   "options": [
    "$\\triangle AMN$ dan $\\triangle ABC$",
    "$\\triangle MBN$ dan $\\triangle NBC$",
    "$\\triangle AMN$ dan $\\triangle MBC$"
   ],
   "answer": "$\\triangle AMN$ dan $\\triangle ABC$",
   "hint": "Segitiga kecil di dalam segitiga besar, dengan titik sudut $A$ bersama.",
   "explain": "Bandingkan $\\triangle AMN$ dengan $\\triangle ABC$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Berapa $\\frac{AM}{AB}$?",
   "answer": {
    "num": 1,
    "den": 2
   },
   "hint": "$M$ titik tengah $AB$.",
   "explain": "$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{1}{2}$ (definisi titik tengah).",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Alasan $\\angle MAN = \\angle BAC$?",
   "options": [
    "Sudut bersama",
    "Sudut bertolak belakang",
    "Sudut sehadap"
   ],
   "answer": "Sudut bersama",
   "hint": "Kedua sudut berada di titik $A$.",
   "explain": "Sudut yang sama persis: sudut bersama.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Syarat sebangun?",
   "options": [
    "SAS sebangun",
    "AA",
    "SSS kongruen",
    "RHS"
   ],
   "answer": "SAS sebangun",
   "hint": "Dua sisi sebanding dan sudut apitnya sama.",
   "explain": "$\\triangle AMN \\sim \\triangle ABC$ (SAS).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Mengapa $MN \\parallel BC$?",
   "options": [
    "$\\angle AMN = \\angle ABC$ adalah sudut sehadap yang sama",
    "$MN$ dan $BC$ terlihat sejajar",
    "$MN = \\frac{1}{2}BC$"
   ],
   "answer": "$\\angle AMN = \\angle ABC$ adalah sudut sehadap yang sama",
   "hint": "Pakai kebalikan sifat sudut sehadap.",
   "explain": "Sudut sehadap sama, jadi kedua garis sejajar.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 6: Berapa $\\frac{MN}{BC}$?",
   "answer": {
    "num": 1,
    "den": 2
   },
   "hint": "Perbandingan sisi segitiga sebangun sama dengan langkah 2.",
   "explain": "$MN = \\frac{1}{2}BC$.",
   "error": "salah-langkah-materi",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Cek bukti: jika $BC = 14$ cm, berapa $MN$?",
   "answer": "7",
   "hint": "Setengah dari 14.",
   "explain": "$MN = 7$ cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Terbukti $MN \\parallel BC$ dan $MN = \\frac{1}{2}BC$."
}
```

### Contoh 3: Membuktikan teorema tali busur dan garis singgung

```soal
{
 "title": "Contoh 3",
 "text": "Garis $TA$ menyinggung lingkaran berpusat $O$ di $A$. $AB$ tali busur, dan $C$ titik pada busur besar $AB$. Buktikan $\\angle TAB = \\angle ACB$ (untuk $\\angle TAB$ lancip). Misalkan $\\angle TAB = x$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Garis bantu apa yang ditarik?",
   "options": [
    "Diameter $AD$, lalu hubungkan $B$ dan $D$",
    "Garis $OB$ saja",
    "Garis singgung di $B$"
   ],
   "answer": "Diameter $AD$, lalu hubungkan $B$ dan $D$",
   "hint": "Kita butuh sudut siku-siku dari diameter dan dari garis singgung.",
   "explain": "Diameter $AD$ dengan $D$ di busur yang sama dengan $C$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: $\\angle TAD = 90°$ karena?",
   "options": [
    "Garis singgung tegak lurus jari-jari",
    "Sudut dalam setengah lingkaran",
    "Sudut pada garis lurus"
   ],
   "answer": "Garis singgung tegak lurus jari-jari",
   "hint": "$AD$ melalui pusat $O$.",
   "explain": "Jadi $\\angle BAD = 90° - x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: $\\angle ABD = 90°$ karena?",
   "options": [
    "Sudut dalam setengah lingkaran",
    "Garis singgung tegak lurus jari-jari",
    "Segitiga sama kaki"
   ],
   "answer": "Sudut dalam setengah lingkaran",
   "hint": "$\\angle ABD$ menghadap diameter $AD$.",
   "explain": "Sudut keliling yang menghadap diameter $= 90°$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Pada $\\triangle ABD$, $\\angle ADB = 180° - 90° - (90° - x) = ?$",
   "options": [
    "$x$",
    "$90° - x$",
    "$180° - x$"
   ],
   "answer": "$x$",
   "hint": "Hapus kurung dengan hati-hati.",
   "explain": "$180 - 90 - 90 + x = x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: $\\angle ACB = \\angle ADB$ karena?",
   "options": [
    "Sudut keliling menghadap busur $AB$ yang sama",
    "Sudut sehadap",
    "Sudut pusat dua kali sudut keliling"
   ],
   "answer": "Sudut keliling menghadap busur $AB$ yang sama",
   "hint": "$C$ dan $D$ sama-sama di busur besar.",
   "explain": "Jadi $\\angle ACB = x = \\angle TAB$. Terbukti.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek bukti: jika $x = 40°$, hitung $\\angle ADB = 180° - 90° - \\angle BAD$.",
   "answer": "40",
   "hint": "$\\angle BAD = 90° - 40° = 50°$.",
   "explain": "$180 - 90 - 50 = 40$, sama dengan $x$. Cocok.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "Terbukti $\\angle TAB = \\angle ACB$."
}
```

### Contoh 4: Dua garis singgung

```anim
{"type": "bangun", "title": "Dua garis singgung dari P", "titik": {"O": [0, 0], "P": [5, 0], "A": [1.8, 2.4], "B": [1.8, -2.4]}, "lingkaran": [{"pusat": [0, 0], "r": 3}], "sisi": [["P", "A"], ["P", "B"], ["O", "A"], ["O", "B"], ["O", "P"]], "sudut": [{"di": "A", "dari": "O", "ke": "P", "siku": true}, {"di": "B", "dari": "O", "ke": "P", "siku": true}], "langkah": [{"say": "Garis singgung $PA$ dan $PB$ dari titik $P$.", "sisi": 2}, {"say": "Tarik jari-jari $OA$, $OB$, dan garis $OP$.", "sisi": 5, "sudut": 2}, {"say": "Dua segitiga siku-siku $OAP$ dan $OBP$ dengan sisi miring bersama $OP$.", "sisi": 5, "sudut": 2, "sorot": ["OP"]}]}
```

```soal
{
 "title": "Contoh 4",
 "text": "Dari titik $P$ di luar lingkaran berpusat $O$, ditarik garis singgung $PA$ dan $PB$. Buktikan $PA = PB$ dan $OP$ membagi dua $\\angle APB$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Alasan $\\angle OAP = \\angle OBP = 90°$?",
   "options": [
    "Garis singgung tegak lurus jari-jari",
    "Sudut dalam setengah lingkaran",
    "Segiempat tali busur"
   ],
   "answer": "Garis singgung tegak lurus jari-jari",
   "hint": "$OA$ dan $OB$ jari-jari ke titik singgung.",
   "explain": "Kedua segitiga siku-siku.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Alasan $OA = OB$?",
   "options": [
    "Jari-jari lingkaran",
    "Garis singgung sama panjang",
    "Sisi bersama"
   ],
   "answer": "Jari-jari lingkaran",
   "hint": "Dari pusat ke lingkaran.",
   "explain": "$OA = OB$ (jari-jari), dan $OP$ sisi miring bersama.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Syarat kongruen?",
   "options": [
    "RHS",
    "SSA",
    "AA",
    "SAS"
   ],
   "answer": "RHS",
   "hint": "Siku-siku, sisi miring, dan satu sisi lain.",
   "explain": "$\\triangle OAP \\cong \\triangle OBP$ (RHS).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Kesimpulan?",
   "options": [
    "$PA = PB$ dan $\\angle APO = \\angle BPO$",
    "$PA = PB$ saja",
    "$OA = PA$"
   ],
   "answer": "$PA = PB$ dan $\\angle APO = \\angle BPO$",
   "hint": "Ambil semua bagian bersesuaian yang diminta soal.",
   "explain": "Bagian bersesuaian segitiga kongruen sama.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek bukti: jika $OA = 3$ dan $OP = 5$, berapa $PA$?",
   "answer": "4",
   "hint": "Pythagoras: $PA^2 = OP^2 - OA^2$.",
   "explain": "$\\sqrt{25 - 9} = 4$, dan $PB$ juga 4.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Terbukti $PA = PB$ dan $OP$ membagi dua $\\angle APB$."
}
```

### Contoh 5: Soal cerita, lebar Sungai Ayung

```anim
{"type": "bangun", "title": "Mengukur lebar Sungai Ayung", "titik": {"A": [0, 0], "B": [12, 0], "C": [16, 0], "D": [16, -6], "P": [0, 18]}, "sisi": [["A", "B", "12"], ["B", "C", "4"], ["C", "D", "6"], ["A", "P", "?"], ["P", "B"], ["B", "D"]], "sudut": [{"di": "A", "dari": "B", "ke": "P", "siku": true}, {"di": "C", "dari": "B", "ke": "D", "siku": true}, {"di": "B", "dari": "A", "ke": "P"}, {"di": "B", "dari": "C", "ke": "D"}], "langkah": [{"say": "Made berjalan di tepi sungai dari $A$ ke $B$ (12 m) lalu ke $C$ (4 m).", "sisi": 2}, {"say": "Dari $C$ ia berjalan tegak lurus 6 m ke $D$.", "sisi": 3, "sudut": 2}, {"say": "$D$, $B$, $P$ segaris. Lebar sungai $AP$ dicari.", "sisi": 6, "sudut": 4, "sorot": ["AP"]}]}
```

```soal
{
 "title": "Contoh 5",
 "text": "Made berdiri di $A$, tepat di seberang pohon $P$ ($AP$ tegak lurus tepi sungai). Ia berjalan 12 m ke $B$, lalu 4 m lagi ke $C$. Dari $C$ ia berjalan tegak lurus menjauhi sungai sampai $D$, dengan $D$, $B$, $P$ segaris dan $CD = 6$ m. Buktikan $\\triangle ABP \\sim \\triangle CBD$, lalu hitung lebar sungai $AP$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Alasan $\\angle PAB = \\angle DCB = 90°$?",
   "options": [
    "Diketahui tegak lurus tepi sungai",
    "Sudut bertolak belakang",
    "Sudut dalam setengah lingkaran"
   ],
   "answer": "Diketahui tegak lurus tepi sungai",
   "hint": "Baca keterangan soal.",
   "explain": "Keduanya diketahui siku-siku.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Alasan $\\angle ABP = \\angle CBD$?",
   "options": [
    "Sudut bertolak belakang",
    "Sudut sehadap",
    "Sudut bersama"
   ],
   "answer": "Sudut bertolak belakang",
   "hint": "$P, B, D$ segaris dan $A, B, C$ segaris; dua garis berpotongan di $B$.",
   "explain": "Sudut bertolak belakang sama besar.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Syarat sebangun?",
   "options": [
    "AA",
    "SAS",
    "SSS",
    "RHS"
   ],
   "answer": "AA",
   "hint": "Sudah ada dua pasang sudut sama.",
   "explain": "$\\triangle ABP \\sim \\triangle CBD$ (AA).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Hitung $\\frac{AB}{CB}$.",
   "answer": "3",
   "hint": "$\\frac{12}{4}$.",
   "explain": "$\\frac{AP}{CD} = \\frac{AB}{CB} = 3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Berapa lebar sungai $AP$?",
   "answer": "18",
   "hint": "$AP = 3 \\times CD$.",
   "explain": "$3 \\times 6 = 18$ m.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: hitung $\\frac{AP}{CD}$ dengan $AP$ hasilmu.",
   "answer": "3",
   "hint": "$\\frac{18}{6}$.",
   "explain": "Sama dengan $12 : 4 = 3$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Lebar Sungai Ayung 18 m."
}
```

## Kesalahan yang sering terjadi

- **Memakai gambar sebagai bukti.** "$AB = CD$ karena terlihat sama panjang." Ini bukan alasan. Cari fakta yang menjaminnya.
- **Memakai SSA untuk kongruen.** Dua sisi dan sudut yang **tidak diapit** tidak menjamin kongruen (kecuali RHS pada segitiga siku-siku).
- **Berputar-putar.** Memakai "$MN \parallel BC$" untuk membuktikan $MN \parallel BC$. Pastikan setiap alasan sudah diketahui sebelumnya.
- **Urutan huruf tidak bersesuaian.** Menulis $\triangle ABC \cong \triangle DCA$ padahal $A$ berpasangan dengan $C$. Urutan huruf harus mengikuti titik yang bersesuaian.
- **Salah tembereng pada teorema tali busur-garis singgung.** Sudut singgung sama dengan sudut keliling di tembereng **seberang**, bukan di tembereng yang sama.

## Ringkasan

- Setiap pernyataan butuh alasan: definisi, fakta yang diketahui, atau teorema.
- Garis sejajar: sehadap sama, dalam berseberangan sama, dalam sepihak $180°$.
- Kongruen: SSS, SAS, ASA/AAS, RHS. Sebangun: AA, SAS, SSS (sebanding).
- Teorema titik tengah: $MN \parallel BC$ dan $MN = \frac{1}{2}BC$.
- Teorema tali busur-garis singgung: sudut singgung = sudut keliling di tembereng seberang.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Buktikan bahwa diagonal jajargenjang $ABCD$ saling membagi dua (diagonal berpotongan di $E$).",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Segitiga mana yang dibuktikan kongruen?",
   "options": [
    "$\\triangle ABE$ dan $\\triangle CDE$",
    "$\\triangle ABE$ dan $\\triangle ADE$",
    "$\\triangle ABC$ dan $\\triangle ADC$"
   ],
   "answer": "$\\triangle ABE$ dan $\\triangle CDE$",
   "hint": "Kita butuh $AE$ dan $CE$ di dua segitiga berbeda, juga $BE$ dan $DE$.",
   "explain": "$\\triangle ABE$ memuat $AE, BE$; $\\triangle CDE$ memuat $CE, DE$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Alasan $\\angle BAE = \\angle DCE$ dan $\\angle ABE = \\angle CDE$?",
   "options": [
    "Sudut dalam berseberangan, $AB \\parallel DC$",
    "Sudut bertolak belakang",
    "Sudut sehadap"
   ],
   "answer": "Sudut dalam berseberangan, $AB \\parallel DC$",
   "hint": "Diagonal memotong dua sisi sejajar.",
   "explain": "Sudut dalam berseberangan sama.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Alasan $AB = CD$?",
   "options": [
    "Sisi berhadapan jajargenjang",
    "Sisi bersama",
    "Diagonal saling membagi dua"
   ],
   "answer": "Sisi berhadapan jajargenjang",
   "hint": "Sifat ini sudah dibuktikan di contoh 1.",
   "explain": "Sisi berhadapan jajargenjang sama panjang.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Syarat kongruen dan kesimpulan?",
   "options": [
    "ASA, jadi $AE = CE$ dan $BE = DE$",
    "SSS, jadi $AE = CE$",
    "AA, jadi $AE = BE$"
   ],
   "answer": "ASA, jadi $AE = CE$ dan $BE = DE$",
   "hint": "Dua sudut dan sisi yang diapitnya.",
   "explain": "Diagonal saling membagi dua.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Terbukti $AE = CE$ dan $BE = DE$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Pada $\\triangle ABC$, $AB = AC$ dan $D$ titik tengah $BC$. Buktikan $AD \\perp BC$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Syarat $\\triangle ABD \\cong \\triangle ACD$?",
   "options": [
    "SSS",
    "SAS",
    "RHS",
    "AA"
   ],
   "answer": "SSS",
   "hint": "$AB = AC$, $BD = CD$, dan $AD$ bersama.",
   "explain": "Tiga pasang sisi sama: SSS.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Akibatnya?",
   "options": [
    "$\\angle ADB = \\angle ADC$",
    "$\\angle BAD = \\angle ABD$",
    "$AD = BD$"
   ],
   "answer": "$\\angle ADB = \\angle ADC$",
   "hint": "Sudut bersesuaian di titik $D$.",
   "explain": "Sudut bersesuaian segitiga kongruen sama.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\angle ADB + \\angle ADC = 180°$ (sudut pada garis lurus). Berapa $\\angle ADB$?",
   "answer": "90",
   "hint": "Dua sudut sama yang berjumlah $180°$.",
   "explain": "$180 \\div 2 = 90$, jadi $AD \\perp BC$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "Terbukti $AD \\perp BC$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "$ABCD$ segiempat tali busur pada lingkaran berpusat $O$. Buktikan $\\angle BAD + \\angle BCD = 180°$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Sudut pusat yang menghadap busur $BCD$ dan busur $BAD$ berjumlah berapa derajat?",
   "answer": "360",
   "hint": "Kedua busur membentuk satu lingkaran penuh.",
   "explain": "Satu putaran penuh $= 360°$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "choice",
   "prompt": "Hubungan $\\angle BAD$ dengan sudut pusat yang menghadap busur $BCD$?",
   "options": [
    "Setengahnya",
    "Sama besar",
    "Dua kalinya"
   ],
   "answer": "Setengahnya",
   "hint": "Sudut pusat dua kali sudut keliling.",
   "explain": "Begitu juga $\\angle BCD$ setengah sudut pusat yang menghadap busur $BAD$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Jadi $\\angle BAD + \\angle BCD = ?$",
   "answer": "180",
   "hint": "Setengah dari jumlah kedua sudut pusat.",
   "explain": "$\\frac{1}{2} \\times 360° = 180°$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "Terbukti $\\angle BAD + \\angle BCD = 180°$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "$M$ dan $N$ titik tengah $AB$ dan $AC$ pada $\\triangle ABC$. Jika $BC = 14$ cm dan $\\angle ABC = 65°$, tentukan $MN$ dan $\\angle AMN$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa $MN$?",
   "answer": "7",
   "hint": "Teorema titik tengah.",
   "explain": "$MN = \\frac{1}{2} \\times 14 = 7$ cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Berapa $\\angle AMN$?",
   "answer": "65",
   "hint": "$MN \\parallel BC$.",
   "explain": "$\\angle AMN = \\angle ABC = 65°$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "choice",
   "prompt": "Alasan $\\angle AMN = \\angle ABC$?",
   "options": [
    "Sudut sehadap, $MN \\parallel BC$",
    "Sudut dalam berseberangan",
    "Sudut bertolak belakang"
   ],
   "answer": "Sudut sehadap, $MN \\parallel BC$",
   "hint": "Kedua sudut berada di posisi yang sama terhadap garis $AB$.",
   "explain": "Sudut sehadap sama besar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$MN = 7$ cm dan $\\angle AMN = 65°$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "$TA$ menyinggung lingkaran di $A$, $AB$ tali busur, dan $C$ pada busur besar. Jika $\\angle TAB = 52°$ dan $\\angle CAB = 70°$, tentukan $\\angle ACB$ dan $\\angle ABC$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Berapa $\\angle ACB$?",
   "answer": "52",
   "hint": "Teorema tali busur dan garis singgung.",
   "explain": "$\\angle ACB = \\angle TAB = 52°$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Berapa $\\angle ABC$?",
   "answer": "58",
   "hint": "Jumlah sudut segitiga $180°$.",
   "explain": "$180° - 52° - 70° = 58°$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "$\\angle ACB = 52°$ dan $\\angle ABC = 58°$."
}
```
