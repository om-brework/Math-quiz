---
id: smp3-07-trigonometri-lanjut
judul: Trigonometri Lanjut
jenjang: smp3
moe: "Secondary 3 · Geometry and Measurement · G4 Pythagoras' theorem and trigonometry"
prasyarat: [smp2-09-pythagoras-trigonometri]
durasi_menit: 60
---

## Kenapa belajar ini?

Nelayan, pilot, dan tukang ukur tanah jarang bertemu segitiga siku-siku yang rapi. Mereka butuh cara menghitung jarak dan sudut pada **segitiga sembarang**, juga arah kapal dan tinggi menara. Bab ini memberi alat untuk semua itu.

## Analogi

Tukang bangunan memakai **unting-unting**: batu pemberat yang digantung tali, sehingga talinya selalu tegak lurus ke bawah.

Bayangkan kamu menggantungkan unting-unting dari satu sudut segitiga sembarang ke sisi di depannya. Tali itu adalah **garis tinggi**, dan ia **memotong segitiga sembarang menjadi dua segitiga siku-siku**. Di segitiga siku-siku, kamu sudah mahir memakai sin, cos, tan, dan Pythagoras.

```anim
{"type": "bangun", "title": "Unting-unting membelah segitiga sembarang", "titik": {"A": [2, 4], "B": [0, 0], "C": [6, 0], "D": [2, 0]}, "sisi": [["A", "B", "c"], ["B", "C", "a"], ["C", "A", "b"], ["A", "D", "h"]], "sudut": [{"di": "D", "dari": "C", "ke": "A", "siku": true}], "langkah": [{"say": "Segitiga sembarang $ABC$: tidak ada sudut siku-siku.", "sisi": 3}, {"say": "Gantung unting-unting dari $A$ ke sisi $BC$. Tali $AD$ adalah garis tinggi $h$.", "sisi": 4, "sorot": ["AD"]}, {"say": "Tali itu tegak lurus $BC$, jadi ada sudut siku-siku di $D$.", "sisi": 4, "sudut": 1, "sorot": ["D"]}, {"say": "Sekarang ada dua segitiga siku-siku: $ADB$ dan $ADC$. Di sana sin, cos, tan, dan Pythagoras berlaku.", "sisi": 4, "sudut": 1, "sorot": ["AB", "AC"]}]}
```

Hampir semua rumus di bab ini lahir dari satu trik itu: **gantung unting-unting, lalu kerjakan dua segitiga siku-sikunya.**

## Konsep

### Sinus dan kosinus sudut tumpul

Gambar lingkaran berjari-jari 1 dengan pusat $O(0, 0)$. Putar jari-jari dari sumbu-$x$ positif sebesar $\theta$ berlawanan arah jarum jam sampai titik $P(x, y)$. Definisikan:

$$\cos\theta = x, \qquad \sin\theta = y$$

Untuk sudut lancip, ini sama dengan definisi lama: jatuhkan unting-unting dari $P$ ke sumbu-$x$, sisi miringnya 1, jadi $\sin\theta = \frac{y}{1}$ dan $\cos\theta = \frac{x}{1}$.

Sekarang cerminkan $P$ terhadap sumbu-$y$. Titik barunya $(-x, y)$ dan sudutnya $180^\circ - \theta$. Tingginya tetap, tetapi posisi mendatarnya berganti tanda. Jadi:

$$\sin(180^\circ - \theta) = \sin\theta, \qquad \cos(180^\circ - \theta) = -\cos\theta$$

Contoh: $\sin 150^\circ = \sin 30^\circ = 0{,}5$ dan $\cos 120^\circ = -\cos 60^\circ = -0{,}5$. Kosinus sudut tumpul selalu **negatif**.

```anim
{"type": "bangun", "title": "Sin dan cos sudut tumpul pada lingkaran satuan", "titik": {"O": [0, 0], "X": [1, 0], "P": [0.866, 0.5], "Q": [-0.866, 0.5], "P'": [0.866, 0], "Q'": [-0.866, 0]}, "sisi": [["Q'", "X"], ["O", "P", "1"], ["P", "P'", "\\sin 30^\\circ"], ["O", "Q", "1"], ["Q", "Q'", "\\sin 150^\\circ"]], "sudut": [{"di": "O", "dari": "X", "ke": "P", "label": "30^\\circ"}, {"di": "O", "dari": "X", "ke": "Q", "label": "150^\\circ"}], "lingkaran": [{"pusat": [0, 0], "r": 1}], "langkah": [{"say": "Lingkaran berjari-jari 1 dengan pusat $O$.", "sisi": 1, "sudut": 0}, {"say": "Putar jari-jari $30^\\circ$ ke titik $P$. Tinggi $P$ = $\\sin 30^\\circ$, posisi mendatarnya = $\\cos 30^\\circ$.", "sisi": 3, "sudut": 1, "sorot": ["PP'"]}, {"say": "Cerminkan $P$ terhadap sumbu tegak: titik $Q$, sudutnya $150^\\circ$.", "sisi": 4, "sudut": 2, "sorot": ["Q"]}, {"say": "Tingginya sama: $\\sin 150^\\circ = \\sin 30^\\circ$. Posisi mendatarnya di kiri: $\\cos 150^\\circ = -\\cos 30^\\circ$.", "sisi": 5, "sudut": 2, "sorot": ["QQ'", "PP'"]}]}
```

Akibatnya, persamaan $\sin\theta = 0{,}5$ punya dua jawaban antara $0^\circ$ dan $180^\circ$: $30^\circ$ dan $150^\circ$. Sedangkan $\cos\theta$ menentukan sudut secara tunggal.

### Penamaan segitiga

Pada segitiga $ABC$, sisi di depan sudut $A$ diberi nama $a$, di depan $B$ diberi nama $b$, dan di depan $C$ diberi nama $c$.

### Luas segitiga $\frac{1}{2}ab\sin C$

Gantung unting-unting dari $A$ ke sisi $BC$, kena di titik $D$. Tingginya $h = AD$. Di segitiga siku-siku $ADC$: $h = b\sin C$. Maka:

$$\text{Luas} = \frac{1}{2} \times \text{alas} \times \text{tinggi} = \frac{1}{2} \times a \times b\sin C = \frac{1}{2}ab\sin C$$

Pakai rumus ini jika diketahui **dua sisi dan sudut yang diapitnya**.

### Aturan sinus

Dengan unting-unting yang sama, $h$ bisa dihitung dari dua segitiga siku-siku:

- Dari segitiga $ADC$: $h = b\sin C$.
- Dari segitiga $ADB$: $h = c\sin B$.

Jadi $b\sin C = c\sin B$, atau $\frac{b}{\sin B} = \frac{c}{\sin C}$. Menggantung unting-unting dari sudut lain memberi pasangan dengan $a$. Hasilnya:

$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

Pakai jika diketahui **pasangan sisi dan sudut di depannya**, ditambah satu sisi atau sudut lain.

### Aturan kosinus

Masih dengan unting-unting dari $A$. Misalkan $CD = x$, sehingga $BD = a - x$.

- Segitiga $ADC$: $x = b\cos C$ dan $h^2 = b^2 - x^2$.
- Segitiga $ADB$: $c^2 = h^2 + (a - x)^2 = b^2 - x^2 + a^2 - 2ax + x^2 = a^2 + b^2 - 2ax$.

Ganti $x = b\cos C$:

$$c^2 = a^2 + b^2 - 2ab\cos C$$

Bentuk untuk mencari sudut: $\cos C = \frac{a^2 + b^2 - c^2}{2ab}$.

```anim
{"type": "persamaan", "title": "Menurunkan aturan kosinus", "baris": [{"tex": "x = b\\cos C,\\quad h^2 = b^2 - x^2", "say": "Di segitiga siku-siku $ADC$."}, {"tex": "c^2 = h^2 + (a - x)^2", "say": "Pythagoras di segitiga siku-siku $ADB$."}, {"tex": "c^2 = b^2 - x^2 + a^2 - 2ax + x^2", "say": "Ganti $h^2$ dan uraikan $(a - x)^2$.", "op": "ekspansi"}, {"tex": "c^2 = a^2 + b^2 - 2ax", "say": "$-x^2$ dan $+x^2$ saling menghabiskan."}, {"tex": "c^2 = a^2 + b^2 - 2ab\\cos C", "say": "Ganti $x = b\\cos C$. Inilah aturan kosinus.", "op": "$x = b\\cos C$"}]}
```

Pakai jika diketahui **dua sisi dan sudut apitnya** (cari sisi ketiga), atau **ketiga sisi** (cari sudut). Jika $C = 90^\circ$, $\cos C = 0$ dan rumusnya menjadi Pythagoras.

Jika sudutnya tumpul, unting-unting jatuh di luar segitiga, tetapi ketiga rumus tetap berlaku berkat definisi sin dan cos sudut tumpul di atas.

### Sudut elevasi dan depresi

- **Sudut elevasi**: sudut dari garis mendatar **ke atas** menuju benda.
- **Sudut depresi**: sudut dari garis mendatar **ke bawah** menuju benda.

Sudut depresi dari puncak menara ke mobil sama dengan sudut elevasi dari mobil ke puncak, karena keduanya sudut dalam berseberangan pada dua garis mendatar yang sejajar.

```anim
{"type": "bangun", "title": "Sudut elevasi dan depresi", "titik": {"T": [0, 4], "K": [0, 0], "M": [8, 0], "H": [8, 4]}, "sisi": [["K", "T", "\\text{menara}"], ["K", "M"], ["T", "H", "\\text{mendatar}"], ["T", "M"]], "sudut": [{"di": "M", "dari": "K", "ke": "T", "label": "\\text{elevasi}"}, {"di": "T", "dari": "H", "ke": "M", "label": "\\text{depresi}"}], "langkah": [{"say": "Menara $KT$ dan mobil di $M$.", "sisi": 2, "sudut": 0}, {"say": "Dari mobil, lihat ke atas ke puncak $T$: sudut elevasi, diukur dari garis mendatar $MK$.", "sisi": 4, "sudut": 1, "sorot": ["M"]}, {"say": "Dari puncak, lihat ke bawah ke mobil: sudut depresi, diukur dari garis mendatar $TH$.", "sisi": 4, "sudut": 2, "sorot": ["T"]}, {"say": "$TH$ sejajar $KM$, jadi kedua sudut itu sudut dalam berseberangan: besarnya sama.", "sisi": 4, "sudut": 2, "sorot": ["TH", "KM"]}]}
```

### Arah mata angin (bearing)

Bearing adalah sudut yang diukur **dari arah utara, searah jarum jam**, ditulis tiga angka. Timur = $090^\circ$, selatan = $180^\circ$, barat daya = $225^\circ$.

Bearing balik (arah pulang) = bearing pergi $\pm 180^\circ$. Kalau bearing $A$ ke $B$ adalah $060^\circ$, bearing $B$ ke $A$ adalah $240^\circ$.

### Soal tiga dimensi

Di ruang tiga dimensi, carilah **segitiga siku-siku yang tersembunyi**, biasanya dengan unting-unting dari titik tinggi ke lantai. Gambar ulang segitiga itu secara datar, lalu kerjakan seperti biasa.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Luas dengan sudut tumpul

```soal
{
 "title": "Contoh 1",
 "text": "Segitiga $PQR$ memiliki $PQ = 8$ cm, $QR = 5$ cm, dan $\\angle PQR = 150^\\circ$. Hitung luasnya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pilih rumus.",
   "options": [
    "$\\frac{1}{2}ab\\sin C$",
    "Aturan sinus",
    "Aturan kosinus"
   ],
   "answer": "$\\frac{1}{2}ab\\sin C$",
   "hint": "Yang diketahui: dua sisi dan sudut yang diapitnya.",
   "explain": "Dua sisi dan sudut apit: pakai $\\frac{1}{2}ab\\sin C$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\sin 150^\\circ$ = ?",
   "answer": "0,5",
   "hint": "$\\sin(180^\\circ - \\theta) = \\sin\\theta$.",
   "explain": "$\\sin 150^\\circ = \\sin 30^\\circ = 0{,}5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Luas = $\\frac{1}{2} \\times 8 \\times 5 \\times 0{,}5$ = ?",
   "answer": "10",
   "hint": "$\\frac{1}{2} \\times 40 = 20$, lalu kali 0,5.",
   "explain": "Luas 10 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: tinggi dari $P$ ke perpanjangan $QR$ = $8\\sin 30^\\circ$ = ?",
   "answer": "4",
   "hint": "$8 \\times 0{,}5$.",
   "explain": "Tinggi 4 cm, dan $\\frac{1}{2} \\times 5 \\times 4 = 10$. Sama.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Luasnya 10 cm²."
}
```

### Contoh 2: Aturan sinus

```soal
{
 "title": "Contoh 2",
 "text": "Pada segitiga $ABC$, $\\angle A = 40^\\circ$, $\\angle B = 75^\\circ$, dan $a = 10$ cm. Hitung $b$ dan $c$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Lengkapi sudut. $\\angle C$ = ?",
   "answer": "65",
   "hint": "Jumlah sudut segitiga 180°.",
   "explain": "$180^\\circ - 40^\\circ - 75^\\circ = 65^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Mengapa aturan sinus bisa dipakai?",
   "options": [
    "Ada pasangan lengkap: $a$ dan $\\angle A$",
    "Ada dua sisi dan sudut apit",
    "Ketiga sisi diketahui"
   ],
   "answer": "Ada pasangan lengkap: $a$ dan $\\angle A$",
   "hint": "Aturan sinus butuh sisi dan sudut di depannya.",
   "explain": "$a = 10$ berhadapan dengan $\\angle A = 40^\\circ$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $b = \\frac{10\\sin 75^\\circ}{\\sin 40^\\circ}$ = ? (1 desimal)",
   "answer": "15",
   "hint": "$\\frac{10 \\times 0{,}9659}{0{,}6428}$.",
   "explain": "$b \\approx 15{,}0$ cm.",
   "error": "salah-pembulatan",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $c = \\frac{10\\sin 65^\\circ}{\\sin 40^\\circ}$ = ? (1 desimal)",
   "answer": "14,1",
   "hint": "$\\frac{10 \\times 0{,}9063}{0{,}6428}$.",
   "explain": "$c \\approx 14{,}1$ cm.",
   "error": "salah-pembulatan",
   "suffix": "cm"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: sisi terpanjang harus berhadapan dengan sudut terbesar. Sisi mana yang terpanjang?",
   "options": [
    "$b$",
    "$a$",
    "$c$"
   ],
   "answer": "$b$",
   "hint": "Sudut terbesar adalah $\\angle B = 75^\\circ$.",
   "explain": "$b \\approx 15{,}0$ memang paling panjang. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $b \\approx 15{,}0$ cm dan $c \\approx 14{,}1$ cm."
}
```

### Contoh 3: Aturan kosinus untuk mencari sudut

```soal
{
 "title": "Contoh 3",
 "text": "Sebuah taman berbentuk segitiga dengan sisi 5 m, 7 m, dan 8 m. Hitung sudut di depan sisi 7 m, lalu hitung luas taman.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pilih rumus.",
   "options": [
    "$\\cos\\theta = \\frac{5^2 + 8^2 - 7^2}{2 \\times 5 \\times 8}$",
    "$\\cos\\theta = \\frac{5^2 + 7^2 - 8^2}{2 \\times 5 \\times 7}$",
    "$\\sin\\theta = \\frac{7}{8}$"
   ],
   "answer": "$\\cos\\theta = \\frac{5^2 + 8^2 - 7^2}{2 \\times 5 \\times 8}$",
   "hint": "Sisi di depan sudut yang dicari (7) dikurangkan.",
   "explain": "Ketiga sisi diketahui; sisi 7 berada di depan $\\theta$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\cos\\theta = \\frac{25 + 64 - 49}{80}$ = ?",
   "answer": "0,5",
   "hint": "$\\frac{40}{80}$.",
   "explain": "$\\cos\\theta = 0{,}5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\theta$ = ?",
   "answer": "60",
   "hint": "Sudut berapa yang kosinusnya 0,5?",
   "explain": "$\\theta = 60^\\circ$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Luas = $\\frac{1}{2} \\times 5 \\times 8 \\times \\sin 60^\\circ$ = ? (1 desimal)",
   "answer": "17,3",
   "hint": "$20 \\times 0{,}8660$.",
   "explain": "Luas $\\approx 17{,}3$ m².",
   "error": "salah-pembulatan",
   "suffix": "m²"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $5^2 + 8^2 - 2(5)(8)(0{,}5)$ = ?",
   "answer": "49",
   "hint": "89 − 40.",
   "explain": "$49 = 7^2$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Sudutnya 60° dan luas taman sekitar 17,3 m²."
}
```

### Contoh 4: Soal cerita bearing

```anim
{"type": "bangun", "title": "Perjalanan perahu dari Benoa", "titik": {"H": [0, 0], "U": [0, 4], "P": [10.39, 6.0], "U'": [10.39, 10.0], "S": [16.52, 0.86]}, "sisi": [["H", "U"], ["H", "P", "12\\text{ km}"], ["P", "U'"], ["P", "S", "8\\text{ km}"], ["H", "S"]], "sudut": [{"di": "H", "dari": "U", "ke": "P", "label": "060^\\circ"}, {"di": "P", "dari": "U'", "ke": "S", "label": "130^\\circ"}], "langkah": [{"say": "Dari $H$, ukur bearing dari utara ($HU$) searah jarum jam: $060^\\circ$, lalu berlayar 12 km ke $P$.", "sisi": 2, "sudut": 1}, {"say": "Di $P$, gambar lagi panah utara. Bearing $130^\\circ$, berlayar 8 km ke $S$.", "sisi": 4, "sudut": 2}, {"say": "Jarak $HS$ dan sudut di $H$ yang dicari.", "sisi": 5, "sudut": 2, "sorot": ["HS"]}]}
```

```soal
{
 "title": "Contoh 4",
 "text": "Perahu nelayan berangkat dari Pelabuhan Benoa ($H$), berlayar 12 km dengan bearing $060^\\circ$ ke titik $P$, lalu 8 km dengan bearing $130^\\circ$ ke titik $S$. Hitung jarak $HS$ dan bearing $S$ dari $H$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Bearing $P$ ke $H$ = $060^\\circ + 180^\\circ = 240^\\circ$. Sudut $\\angle HPS = 240^\\circ - 130^\\circ$ = ?",
   "answer": "110",
   "hint": "Kurangkan kedua arah dari titik $P$.",
   "explain": "$\\angle HPS = 110^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Tanda $\\cos 110^\\circ$?",
   "options": [
    "Negatif",
    "Positif"
   ],
   "answer": "Negatif",
   "hint": "Kosinus sudut tumpul.",
   "explain": "$\\cos 110^\\circ \\approx -0{,}3420$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $HS^2 = 12^2 + 8^2 - 2(12)(8)\\cos 110^\\circ$ = ? (2 desimal)",
   "answer": "273,67",
   "hint": "$208 - 192 \\times (-0{,}3420)$.",
   "explain": "$208 + 65{,}67 = 273{,}67$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $HS$ = ? (2 desimal)",
   "answer": "16,54",
   "hint": "Akarkan hasil langkah 3.",
   "explain": "$HS \\approx 16{,}54$ km.",
   "error": "salah-pembulatan",
   "suffix": "km"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: $\\sin\\angle PHS = \\frac{8\\sin 110^\\circ}{16{,}54}$. Berapa $\\angle PHS$? (1 desimal)",
   "answer": "27",
   "hint": "$\\frac{8 \\times 0{,}9397}{16{,}54} \\approx 0{,}4545$, lalu pakai $\\sin^{-1}$.",
   "explain": "$\\angle PHS \\approx 27{,}0^\\circ$ (lancip, karena tidak berhadapan dengan sisi terpanjang).",
   "error": "salah-pembulatan",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 6: Bearing $S$ dari $H$ = $060^\\circ + 27{,}0^\\circ$ = ? (tulis angkanya saja)",
   "answer": "87",
   "hint": "Perahu berbelok searah jarum jam.",
   "explain": "Bearing $087{,}0^\\circ$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: apakah $HS \\approx 16{,}5$ km masuk akal?",
   "options": [
    "Ya, di antara 12 dan 20 km",
    "Tidak, harus lebih dari 20 km"
   ],
   "answer": "Ya, di antara 12 dan 20 km",
   "hint": "$HS < 12 + 8$, dan lebih dari 12 karena sudut di $P$ tumpul.",
   "explain": "16,5 km masuk akal.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jarak $HS \\approx 16{,}5$ km dengan bearing $087{,}0^\\circ$."
}
```

### Contoh 5: Tiga dimensi dan sudut elevasi

```soal
{
 "title": "Contoh 5",
 "text": "Ruang kelas berbentuk balok 8 m × 6 m, tinggi 3 m. Sebuah kamera CCTV dipasang di sudut langit-langit. Dari sudut lantai yang berseberangan diagonal, berapa sudut elevasi ke kamera? Berapa panjang kabel lurus dari sudut lantai itu ke kamera?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Segitiga siku-siku tersembunyinya terdiri dari ...",
   "options": [
    "diagonal lantai, tinggi ruang, dan kabel",
    "panjang, lebar, dan tinggi ruang",
    "dua diagonal lantai"
   ],
   "answer": "diagonal lantai, tinggi ruang, dan kabel",
   "hint": "Gantung unting-unting dari kamera ke lantai.",
   "explain": "Diagonal lantai mendatar, tinggi tegak, kabel miring.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Diagonal lantai $\\sqrt{8^2 + 6^2}$ = ?",
   "answer": "10",
   "hint": "$\\sqrt{64 + 36}$.",
   "explain": "Diagonal lantai 10 m.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\tan\\theta = \\frac{3}{10}$ = ?",
   "answer": "0,3",
   "hint": "Depan dibagi samping.",
   "explain": "$\\tan\\theta = 0{,}3$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $\\theta$ = ? (1 desimal)",
   "answer": "16,7",
   "hint": "Pakai $\\tan^{-1}$ di kalkulator mode derajat.",
   "explain": "$\\theta \\approx 16{,}7^\\circ$.",
   "error": "salah-pembulatan",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Kabel $\\sqrt{10^2 + 3^2}$ = ? (1 desimal)",
   "answer": "10,4",
   "hint": "$\\sqrt{109}$.",
   "explain": "Kabel $\\approx 10{,}4$ m.",
   "error": "salah-pembulatan",
   "suffix": "m"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: $\\sin\\theta = \\frac{3}{10{,}44} \\approx 0{,}287$. Apakah $\\sin 16{,}7^\\circ \\approx 0{,}287$?",
   "options": [
    "Ya, cocok",
    "Tidak"
   ],
   "answer": "Ya, cocok",
   "hint": "Hitung $\\sin 16{,}7^\\circ$ dengan kalkulator.",
   "explain": "$\\sin 16{,}7^\\circ \\approx 0{,}287$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Sudut elevasi sekitar 16,7° dan panjang kabel sekitar 10,4 m."
}
```

## Kesalahan yang sering terjadi

- **Lupa tanda negatif kosinus sudut tumpul.** Pada Contoh 4, memakai $\cos 110^\circ = +0{,}342$ menghasilkan $HS^2 = 142{,}3$, jadi $HS \approx 11{,}9$ km, terlalu pendek. Kalkulator memberi tanda yang benar; jangan dihapus.
- **Sudut ambigu pada aturan sinus.** $\sin\theta = 0{,}5$ bisa berarti $30^\circ$ atau $150^\circ$. Periksa apakah sudut tumpul mungkin, misalnya dengan melihat sisi terpanjang.
- **Sudut pada $\frac{1}{2}ab\sin C$ bukan sudut apit.** Sudut harus berada di antara kedua sisi yang dipakai.
- **Bearing diukur dari arah yang salah.** Bearing selalu dari utara dan searah jarum jam. Gambar panah utara di setiap titik.
- **Kalkulator dalam mode radian.** Pastikan layar menunjukkan D atau DEG.

## Ringkasan

- $\sin(180^\circ - \theta) = \sin\theta$ dan $\cos(180^\circ - \theta) = -\cos\theta$.
- Luas segitiga $= \frac{1}{2}ab\sin C$ (dua sisi dan sudut apit).
- Aturan sinus: $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$ (ada pasangan sisi-sudut).
- Aturan kosinus: $c^2 = a^2 + b^2 - 2ab\cos C$ (dua sisi dan sudut apit, atau tiga sisi).
- Semua rumus berasal dari unting-unting: garis tinggi membelah segitiga menjadi dua segitiga siku-siku.
- Bearing diukur dari utara searah jarum jam; untuk soal 3D, cari segitiga siku-siku tersembunyi.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Tanpa kalkulator, tentukan $\\sin 135^\\circ$ dan $\\cos 135^\\circ$ dalam $\\sin 45^\\circ$ dan $\\cos 45^\\circ$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "$\\sin 135^\\circ$ = ?",
   "options": [
    "$\\sin 45^\\circ$",
    "$-\\sin 45^\\circ$",
    "$-\\cos 45^\\circ$"
   ],
   "answer": "$\\sin 45^\\circ$",
   "hint": "$\\sin(180^\\circ - \\theta) = \\sin\\theta$.",
   "explain": "$\\sin 135^\\circ = \\sin 45^\\circ \\approx 0{,}707$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$\\cos 135^\\circ$ = ?",
   "options": [
    "$-\\cos 45^\\circ$",
    "$\\cos 45^\\circ$",
    "$\\sin 135^\\circ$"
   ],
   "answer": "$-\\cos 45^\\circ$",
   "hint": "Kosinus sudut tumpul negatif.",
   "explain": "$\\cos 135^\\circ = -\\cos 45^\\circ \\approx -0{,}707$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$\\sin 135^\\circ = \\sin 45^\\circ$ dan $\\cos 135^\\circ = -\\cos 45^\\circ$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung luas segitiga dengan dua sisi 6 cm dan 10 cm yang mengapit sudut $30^\\circ$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\frac{1}{2} \\times 6 \\times 10$ = ?",
   "answer": "30",
   "hint": "Setengah dari 60.",
   "explain": "30.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Luas = $30 \\times \\sin 30^\\circ$ = ?",
   "answer": "15",
   "hint": "$\\sin 30^\\circ = 0{,}5$.",
   "explain": "Luas 15 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Luasnya 15 cm²."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Pada segitiga $ABC$, $\\angle A = 30^\\circ$, $\\angle B = 45^\\circ$, $a = 6$ cm. Hitung $b$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Rumus untuk $b$?",
   "options": [
    "$b = \\frac{6\\sin 45^\\circ}{\\sin 30^\\circ}$",
    "$b = \\frac{6\\sin 30^\\circ}{\\sin 45^\\circ}$",
    "$b = 6\\sin 45^\\circ$"
   ],
   "answer": "$b = \\frac{6\\sin 45^\\circ}{\\sin 30^\\circ}$",
   "hint": "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$.",
   "explain": "Kalikan kedua ruas dengan $\\sin B$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$b$ = ? (2 desimal)",
   "answer": "8,49",
   "hint": "$\\frac{6 \\times 0{,}7071}{0{,}5}$.",
   "explain": "$b \\approx 8{,}49$ cm.",
   "error": "salah-pembulatan",
   "suffix": "cm"
  }
 ],
 "conclusion": "$b \\approx 8{,}49$ cm."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Pada segitiga $ABC$, $b = 5$ cm, $c = 8$ cm, $\\angle A = 60^\\circ$. Hitung $a$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$a^2 = 25 + 64 - 2(5)(8)(0{,}5)$ = ?",
   "answer": "49",
   "hint": "89 − 40.",
   "explain": "$a^2 = 49$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$a$ = ?",
   "answer": "7",
   "hint": "Akarkan.",
   "explain": "$a = 7$ cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "$a = 7$ cm."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Dari puncak gedung setinggi 40 m, sudut depresi ke sebuah mobil adalah $25^\\circ$. Berapa jarak mendatar mobil dari kaki gedung?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Sudut elevasi dari mobil ke puncak = ?",
   "answer": "25",
   "hint": "Sudut depresi dan elevasi adalah sudut dalam berseberangan.",
   "explain": "Sudut elevasi juga 25°.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "choice",
   "prompt": "Rumus jarak mendatar $d$?",
   "options": [
    "$d = \\frac{40}{\\tan 25^\\circ}$",
    "$d = 40\\tan 25^\\circ$",
    "$d = \\frac{40}{\\sin 25^\\circ}$"
   ],
   "answer": "$d = \\frac{40}{\\tan 25^\\circ}$",
   "hint": "$\\tan 25^\\circ = \\frac{\\text{tinggi}}{d}$.",
   "explain": "$d = \\frac{40}{\\tan 25^\\circ}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$d$ = ? (1 desimal)",
   "answer": "85,8",
   "hint": "$\\tan 25^\\circ \\approx 0{,}4663$.",
   "explain": "$d \\approx 85{,}8$ m.",
   "error": "salah-pembulatan",
   "suffix": "m"
  }
 ],
 "conclusion": "Jarak mendatarnya sekitar 85,8 m."
}
```
