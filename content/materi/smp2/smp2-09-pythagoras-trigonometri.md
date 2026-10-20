---
id: smp2-09-pythagoras-trigonometri
judul: Teorema Pythagoras dan Trigonometri Dasar
jenjang: smp2
moe: "Secondary 2 · Geometry and Measurement · G4 Pythagoras' theorem and trigonometry"
prasyarat: [smp1-01-prima-fpb-kpk, smp2-02-ekspansi-faktorisasi, smp2-08-kongruen-sebangun]
durasi_menit: 55
---

## Kenapa belajar ini?

Tukang bangunan perlu tahu panjang tangga agar bisa mencapai atap. Pemasang kabel perlu tahu tinggi tiang dari panjang kabel dan sudutnya. Semua ini adalah soal segitiga siku-siku. Teorema Pythagoras menghubungkan ketiga sisinya, dan trigonometri menghubungkan sisi dengan sudut.

## Analogi

Bayangkan sebuah **tangga yang disandarkan ke dinding** rumah.

- **Dinding** berdiri tegak, **lantai** datar, jadi dinding dan lantai membentuk sudut siku-siku.
- **Tangga** adalah sisi terpanjang, berhadapan dengan sudut siku-siku. Sisi ini disebut **sisi miring** (hipotenusa).
- **Tinggi** ujung tangga di dinding dan **jarak** kaki tangga ke dinding adalah dua sisi lainnya.

Kita akan memakai tangga ini terus: Pythagoras menghitung salah satu dari tiga panjang itu jika dua lainnya diketahui, dan trigonometri memakai **sudut kemiringan tangga** terhadap lantai.

```anim
{"type": "bangun", "title": "Tangga bersandar di dinding", "titik": {"D": [0, 0], "K": [3, 0], "U": [0, 4]}, "sisi": [["D", "U", "\\text{tinggi}"], ["D", "K", "\\text{jarak}"], ["K", "U", "\\text{tangga}"]], "sudut": [{"di": "D", "dari": "K", "ke": "U", "siku": true}, {"di": "K", "dari": "U", "ke": "D", "label": "\\theta"}], "langkah": [{"say": "Dinding $DU$ tegak dan lantai $DK$ datar.", "sisi": 2}, {"say": "Dinding dan lantai membentuk sudut siku-siku di $D$.", "sisi": 2, "sudut": 1, "sorot": ["D"]}, {"say": "Tangga $KU$ adalah sisi miring: terpanjang, di depan sudut siku-siku.", "sisi": 3, "sudut": 1, "sorot": ["KU"]}, {"say": "Sudut kemiringan tangga terhadap lantai kita sebut $\\theta$.", "sisi": 3, "sudut": 2, "sorot": ["K"]}]}
```

## Konsep

### Nama sisi segitiga siku-siku

Pada segitiga siku-siku, sisi di depan sudut $90^\circ$ adalah **sisi miring**, selalu yang terpanjang. Untuk sudut lancip $\theta$ yang sedang kita perhatikan:

- **sisi depan**: sisi di seberang sudut $\theta$ (pada tangga: tinggi di dinding, jika $\theta$ sudut di lantai),
- **sisi samping**: sisi yang mengapit $\theta$ selain sisi miring (pada tangga: jarak di lantai).

```anim
{"type": "bangun", "title": "Depan, samping, miring terhadap θ", "titik": {"A": [0, 0], "B": [4, 0], "C": [4, 3]}, "sisi": [["A", "B", "\\text{samping}"], ["B", "C", "\\text{depan}"], ["A", "C", "\\text{miring}"]], "sudut": [{"di": "B", "dari": "C", "ke": "A", "siku": true}, {"di": "A", "dari": "B", "ke": "C", "label": "\\theta"}], "langkah": [{"say": "Pilih dulu sudutnya: $\\theta$ di $A$.", "sisi": 3, "sudut": 2, "sorot": ["A"]}, {"say": "Sisi miring di depan sudut siku-siku.", "sisi": 3, "sudut": 2, "sorot": ["AC"]}, {"say": "Sisi depan di seberang $\\theta$.", "sisi": 3, "sudut": 2, "sorot": ["BC"]}, {"say": "Sisi samping mengapit $\\theta$, bukan sisi miring.", "sisi": 3, "sudut": 2, "sorot": ["AB"]}]}
```

### Teorema Pythagoras

Pada segitiga siku-siku dengan sisi siku-siku $a$ dan $b$, serta sisi miring $c$:

$$a^2 + b^2 = c^2$$

**Kenapa benar?** Ambil empat segitiga siku-siku yang sama (sisi $a$, $b$, $c$), misalnya dari kertas karton. Letakkan satu segitiga di setiap pojok sebuah persegi besar bersisi $a + b$. Setiap sisi persegi besar terbagi menjadi bagian $a$ lalu $b$, berputar searah jarum jam. Sisi miring keempat segitiga membentuk sebuah **persegi miring** bersisi $c$ di tengah.

```anim
{"type": "bangun", "title": "Bukti Pythagoras dengan empat segitiga", "titik": {"A": [0, 0], "B": [5, 0], "C": [5, 5], "D": [0, 5], "P": [3, 0], "Q": [5, 3], "R": [2, 5], "S": [0, 2]}, "sisi": [["A", "P", "a"], ["P", "B", "b"], ["B", "Q", "a"], ["Q", "C", "b"], ["C", "R", "a"], ["R", "D", "b"], ["D", "S", "a"], ["S", "A", "b"], ["P", "Q", "c"], ["Q", "R", "c"], ["R", "S", "c"], ["S", "P", "c"]], "langkah": [{"say": "Persegi besar bersisi $a + b$. Setiap sisi terbagi menjadi $a$ lalu $b$.", "sisi": 8}, {"say": "Hubungkan titik-titik pembagi: terbentuk persegi miring bersisi $c$.", "sisi": 12, "sorot": ["PQ", "QR", "RS", "SP"]}, {"say": "Di setiap pojok ada satu segitiga siku-siku dengan sisi $a$ dan $b$, luasnya $\\tfrac{1}{2}ab$.", "sisi": 12, "sorot": ["A", "B", "C", "D"]}, {"say": "Luas besar: $(a + b)^2 = 4 \\times \\tfrac{1}{2}ab + c^2$.", "sisi": 12}]}
```

Luas persegi besar dihitung dengan dua cara:

$$(a + b)^2 = 4 \times \tfrac{1}{2}ab + c^2$$
$$a^2 + 2ab + b^2 = 2ab + c^2$$

Kurangi kedua ruas dengan $2ab$, kita dapat $a^2 + b^2 = c^2$.

```anim
{"type": "persamaan", "title": "Luas persegi besar dengan dua cara", "baris": [{"tex": "(a + b)^2 = 4 \\times \\tfrac{1}{2}ab + c^2", "say": "Kiri: sisi kali sisi. Kanan: empat segitiga ditambah persegi miring."}, {"tex": "a^2 + 2ab + b^2 = 2ab + c^2", "say": "Jabarkan kiri; $4 \\times \\tfrac{1}{2}ab = 2ab$."}, {"tex": "a^2 + b^2 = c^2", "say": "Kurangi kedua ruas dengan $2ab$.", "op": "- 2ab"}]}
```

### Uji segitiga siku-siku (kebalikan Pythagoras)

Jika sisi terpanjang $c$ dan dua sisi lainnya $a$, $b$ memenuhi $a^2 + b^2 = c^2$, maka segitiga itu **siku-siku**, dengan sudut siku-siku di depan sisi $c$. Jika $a^2 + b^2 \ne c^2$, segitiga itu **bukan** siku-siku.

Tukang bangunan memakai ini untuk mengecek sudut siku-siku pondasi: ukur 3 m, 4 m, dan pastikan diagonalnya 5 m.

### Sinus, kosinus, tangen

Untuk sudut lancip $\theta$ pada segitiga siku-siku:

$$\sin\theta = \frac{\text{depan}}{\text{miring}}, \qquad \cos\theta = \frac{\text{samping}}{\text{miring}}, \qquad \tan\theta = \frac{\text{depan}}{\text{samping}}$$

Jembatan keledai: **sindemi, cossami, tandesa**.

**Kenapa perbandingan ini hanya bergantung pada sudut?** Bayangkan dua tangga dengan kemiringan sama, satu panjangnya 2 m dan satu 4 m. Kedua segitiganya **sebangun**, karena sudutnya sama semua. Tangga 4 m adalah "fotokopi 200%" dari tangga 2 m. Semua sisi dikali 2, jadi perbandingan $\frac{\text{depan}}{\text{miring}}$ tetap sama. Karena itu setiap sudut punya satu nilai sinus, kosinus, dan tangen, yang bisa dicari dengan kalkulator.

```anim
{"type": "bangun", "title": "Dua tangga dengan kemiringan sama", "titik": {"A": [0, 0], "B": [1.6, 0], "C": [1.6, 1.2], "D": [3, 0], "E": [6.2, 0], "F": [6.2, 2.4]}, "sisi": [["A", "B", "1{,}6"], ["B", "C", "1{,}2"], ["A", "C", "2"], ["D", "E", "3{,}2"], ["E", "F", "2{,}4"], ["D", "F", "4"]], "sudut": [{"di": "A", "dari": "B", "ke": "C", "label": "\\theta"}, {"di": "D", "dari": "E", "ke": "F", "label": "\\theta"}], "langkah": [{"say": "Tangga 2 m dan tangga 4 m, sudut kemiringannya sama.", "sisi": 6, "sudut": 2}, {"say": "Tangga kecil: $\\frac{\\text{depan}}{\\text{miring}} = \\frac{1{,}2}{2} = 0{,}6$.", "sisi": 6, "sudut": 2, "sorot": ["BC", "AC"]}, {"say": "Tangga besar: $\\frac{2{,}4}{4} = 0{,}6$. Sama, karena kedua segitiga sebangun.", "sisi": 6, "sudut": 2, "sorot": ["EF", "DF"]}]}
```

### Mencari sudut dari sisi

Jika perbandingan sisi diketahui, sudut dicari dengan tombol kebalikan pada kalkulator: $\sin^{-1}$, $\cos^{-1}$, atau $\tan^{-1}$. Pastikan kalkulator dalam mode **derajat** (DEG).

### Memilih rumus yang tepat

Tandai sisi yang **diketahui** dan sisi yang **dicari** terhadap sudut $\theta$, lalu pilih:

- depan dan miring → $\sin$,
- samping dan miring → $\cos$,
- depan dan samping → $\tan$.

## Contoh langkah demi langkah

Urutan berpikir: **gambar dan beri nama sisi → pilih rumus → hitung → cek** (dengan Pythagoras atau kewajaran: sisi miring harus terpanjang).

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Mencari sisi miring

```soal
{
 "title": "Mencari sisi miring",
 "text": "Segitiga siku-siku punya sisi siku-siku 5 cm dan 12 cm. Hitung sisi miringnya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1–2: Rumus yang dipakai?",
   "options": [
    "$c^2 = 5^2 + 12^2$",
    "$c^2 = 12^2 - 5^2$",
    "$c = 5 + 12$"
   ],
   "answer": "$c^2 = 5^2 + 12^2$",
   "hint": "Yang dicari sisi miring.",
   "explain": "Mencari sisi miring: jumlahkan kuadratnya.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $c^2 = 25 + 144 = ?$",
   "answer": "169",
   "hint": "Jumlahkan.",
   "explain": "c² = 169.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3 (lanjutan): $c = \\sqrt{169}$.",
   "answer": "13",
   "hint": "Bilangan berapa yang kuadratnya 169?",
   "explain": "c = 13 cm. Jangan berhenti di 169.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: apakah 13 wajar?",
   "options": [
    "Ya, lebih panjang dari 5 dan 12",
    "Tidak, harus lebih pendek dari 12"
   ],
   "answer": "Ya, lebih panjang dari 5 dan 12",
   "hint": "Sisi miring selalu terpanjang.",
   "explain": "13 > 12 > 5. Wajar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Sisi miringnya 13 cm."
}
```

### Contoh 2: Soal cerita tangga

```soal
{
 "title": "Soal cerita tangga",
 "text": "Pak Ketut menyandarkan tangga sepanjang 5 m ke dinding. Kaki tangga berjarak 1,4 m dari dinding. Seberapa tinggi ujung tangga di dinding?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Sisi miringnya adalah?",
   "options": [
    "Tangga, 5 m",
    "Jarak di lantai, 1,4 m",
    "Tinggi di dinding"
   ],
   "answer": "Tangga, 5 m",
   "hint": "Sisi miring berhadapan dengan sudut siku-siku antara dinding dan lantai.",
   "explain": "Tangga = sisi miring.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Rumusnya?",
   "options": [
    "$h^2 = 5^2 - 1{,}4^2$",
    "$h^2 = 5^2 + 1{,}4^2$",
    "$h = 5 - 1{,}4$"
   ],
   "answer": "$h^2 = 5^2 - 1{,}4^2$",
   "hint": "Yang dicari bukan sisi miring.",
   "explain": "Mencari sisi siku-siku: kurangkan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $h^2 = 25 - 1{,}96 = ?$",
   "answer": "23,04",
   "hint": "$1{,}4^2 = 1{,}96$.",
   "explain": "h² = 23,04.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3 (lanjutan): $h = \\sqrt{23{,}04}$.",
   "answer": "4,8",
   "hint": "Coba 4,8 × 4,8.",
   "explain": "h = 4,8 m.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $1{,}96 + 4{,}8^2 = ?$",
   "answer": "25",
   "hint": "$4{,}8^2 = 23{,}04$.",
   "explain": "25 = 5². Benar, dan 4,8 < 5.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Ujung tangga setinggi 4,8 m."
}
```

### Contoh 3: Uji segitiga siku-siku

```soal
{
 "title": "Uji segitiga siku-siku",
 "text": "Apakah segitiga dengan sisi 9 cm, 12 cm, 15 cm siku-siku? Bagaimana dengan 6 cm, 8 cm, 11 cm?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 2: $9^2 + 12^2 = ?$",
   "answer": "225",
   "hint": "81 + 144.",
   "explain": "225, sama dengan 15² = 225.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2 (lanjutan): $6^2 + 8^2 = ?$",
   "answer": "100",
   "hint": "36 + 64.",
   "explain": "100, sedangkan 11² = 121.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Kesimpulan?",
   "options": [
    "9, 12, 15 siku-siku; 6, 8, 11 bukan",
    "Keduanya siku-siku",
    "6, 8, 11 siku-siku; 9, 12, 15 bukan"
   ],
   "answer": "9, 12, 15 siku-siku; 6, 8, 11 bukan",
   "hint": "Siku-siku hanya jika $a^2 + b^2 = c^2$ untuk sisi terpanjang $c$.",
   "explain": "225 = 225, tetapi 100 ≠ 121.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: 9, 12, 15 adalah kelipatan dari?",
   "options": [
    "3, 4, 5",
    "1, 2, 3",
    "2, 3, 4"
   ],
   "answer": "3, 4, 5",
   "hint": "Bagi semuanya dengan 3.",
   "explain": "9, 12, 15 = 3 × (3, 4, 5), pasangan siku-siku yang sudah dikenal.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "9, 12, 15 siku-siku; 6, 8, 11 bukan."
}
```

### Contoh 4: Mencari sisi dengan trigonometri

```soal
{
 "title": "Mencari sisi dengan trigonometri",
 "text": "Pada $\\triangle ABC$, $\\angle B = 90^\\circ$, $\\angle A = 35^\\circ$, dan $AB = 8$ cm. Hitung $BC$ dan $AC$ (bulatkan ke 2 tempat desimal).",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Terhadap sudut $A$, sisi $AB$ adalah?",
   "options": [
    "Samping",
    "Depan",
    "Miring"
   ],
   "answer": "Samping",
   "hint": "$AB$ mengapit sudut $A$ dan bukan sisi miring.",
   "explain": "AB = samping, BC = depan, AC = miring.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Untuk $BC$ (depan) dari samping, pakai?",
   "options": [
    "$\\tan$",
    "$\\sin$",
    "$\\cos$"
   ],
   "answer": "$\\tan$",
   "hint": "Depan dan samping: tandesa.",
   "explain": "$BC = 8 \\tan 35^\\circ$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2 (lanjutan): $BC = 8 \\tan 35^\\circ$. Bulatkan ke 2 desimal.",
   "answer": "5,60",
   "hint": "$\\tan 35^\\circ \\approx 0{,}7002$.",
   "explain": "BC ≈ 5,60 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Dari $\\cos 35^\\circ = \\frac{8}{AC}$, maka?",
   "options": [
    "$AC = \\frac{8}{\\cos 35^\\circ}$",
    "$AC = 8 \\cos 35^\\circ$",
    "$AC = \\frac{\\cos 35^\\circ}{8}$"
   ],
   "answer": "$AC = \\frac{8}{\\cos 35^\\circ}$",
   "hint": "AC ada di penyebut; kalikan silang.",
   "explain": "Kalau dikali, hasilnya 6,55 yang lebih pendek dari 8, mustahil untuk sisi miring.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3 (lanjutan): $AC = \\frac{8}{\\cos 35^\\circ}$. Bulatkan ke 2 desimal.",
   "answer": "9,77",
   "hint": "$\\cos 35^\\circ \\approx 0{,}8192$.",
   "explain": "AC ≈ 9,77 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $\\sqrt{8^2 + 5{,}60^2}$, bulatkan ke 2 desimal.",
   "answer": "9,77",
   "hint": "64 + 31,36 = 95,36.",
   "explain": "≈ 9,77. Cocok dengan AC.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "$BC \\approx 5{,}60$ cm dan $AC \\approx 9{,}77$ cm."
}
```

### Contoh 5: Mencari sudut

```soal
{
 "title": "Mencari sudut",
 "text": "Jalur landai untuk kursi roda di depan puskesmas naik setinggi 1,2 m sepanjang jarak mendatar 5 m. Berapa sudut kemiringannya terhadap tanah (bulatkan ke 1 tempat desimal)?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1–2: Tinggi 1,2 m dan jarak 5 m terhadap $\\theta$ adalah depan dan samping. Pakai?",
   "options": [
    "$\\tan\\theta$",
    "$\\sin\\theta$",
    "$\\cos\\theta$"
   ],
   "answer": "$\\tan\\theta$",
   "hint": "Depan dan samping.",
   "explain": "$\\tan\\theta = \\frac{1{,}2}{5}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2 (lanjutan): $\\tan\\theta = \\frac{1{,}2}{5} = ?$",
   "answer": "0,24",
   "hint": "1,2 ÷ 5.",
   "explain": "0,24.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\theta = \\tan^{-1}(0{,}24)$. Bulatkan ke 1 desimal.",
   "answer": "13,5",
   "hint": "Pakai tombol tan⁻¹ dalam mode DEG.",
   "explain": "θ ≈ 13,5°.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: apakah sudut kecil wajar?",
   "options": [
    "Ya, jalurnya naik sedikit tetapi maju jauh",
    "Tidak, seharusnya lebih dari 45°"
   ],
   "answer": "Ya, jalurnya naik sedikit tetapi maju jauh",
   "hint": "Bandingkan tinggi dengan jarak mendatar.",
   "explain": "Tinggi jauh lebih kecil dari jarak, jadi sudutnya kecil.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Sudut kemiringannya sekitar $13{,}5^\\circ$."
}
```

## Kesalahan yang sering terjadi

- **Menjumlahkan saat mencari sisi siku-siku.** Pada contoh tangga, menulis $h^2 = 25 + 1{,}96$. Hasilnya lebih panjang dari tangga, mustahil. Jika yang dicari bukan sisi miring, **kurangkan** dari kuadrat sisi miring.
- **Lupa mengakarkan.** Berhenti di $c^2 = 169$ dan menjawab 169. Langkah terakhir Pythagoras selalu akar kuadrat.
- **Salah memberi nama sisi.** Sisi "depan" dan "samping" bergantung pada sudut yang dipakai. Untuk $\angle C$ pada contoh 4, $AB$ menjadi sisi depan. Beri nama sisi **setelah** memilih sudut.
- **Mengalikan padahal harus membagi.** Dari $\cos 35^\circ = \frac{8}{AC}$ menulis $AC = 8 \cos 35^\circ \approx 6{,}55$. Hasil ini lebih pendek dari sisi samping 8, mustahil untuk sisi miring. Yang benar $AC = \frac{8}{\cos 35^\circ}$.
- **Kalkulator dalam mode radian.** $\sin 30$ muncul $-0{,}988$, bukan $0{,}5$. Periksa tanda DEG di layar.

## Ringkasan

- Sisi miring berhadapan dengan sudut siku-siku dan selalu terpanjang.
- Pythagoras: $a^2 + b^2 = c^2$; mencari sisi miring → jumlahkan, mencari sisi siku-siku → kurangkan.
- Jika $a^2 + b^2 = c^2$ untuk sisi terpanjang $c$, segitiga itu siku-siku.
- $\sin\theta = \frac{\text{de}}{\text{mi}}$, $\cos\theta = \frac{\text{sa}}{\text{mi}}$, $\tan\theta = \frac{\text{de}}{\text{sa}}$; nilainya hanya bergantung pada sudut karena segitiga dengan sudut sama sebangun.
- Mencari sudut: pakai $\sin^{-1}$, $\cos^{-1}$, atau $\tan^{-1}$ dalam mode derajat.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Sisi siku-siku sebuah segitiga 9 cm dan 40 cm. Hitung sisi miringnya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$c^2 = 9^2 + 40^2 = ?$",
   "answer": "1.681",
   "hint": "81 + 1.600.",
   "explain": "c² = 1.681.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$c = ?$",
   "answer": "41",
   "hint": "Akar dari 1.681.",
   "explain": "41 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Sisi miringnya 41 cm."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Sisi miring 17 cm dan salah satu sisi siku-siku 8 cm. Hitung sisi siku-siku yang lain.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$b^2 = 17^2 - 8^2 = ?$",
   "answer": "225",
   "hint": "289 − 64. Kurangkan, karena yang dicari bukan sisi miring.",
   "explain": "b² = 225.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$b = ?$",
   "answer": "15",
   "hint": "Akar dari 225.",
   "explain": "15 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Sisi yang lain 15 cm."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Apakah segitiga dengan sisi 8 cm, 15 cm, dan 18 cm siku-siku?",
 "steps": [
  {
   "kind": "number",
   "prompt": "$8^2 + 15^2 = ?$",
   "answer": "289",
   "hint": "64 + 225.",
   "explain": "289.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$18^2 = ?$",
   "answer": "324",
   "hint": "18 × 18.",
   "explain": "324.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Kesimpulan?",
   "options": [
    "Bukan siku-siku",
    "Siku-siku"
   ],
   "answer": "Bukan siku-siku",
   "hint": "Bandingkan dua hasil tadi.",
   "explain": "289 ≠ 324, jadi bukan siku-siku.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Bukan segitiga siku-siku."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Pada segitiga siku-siku, sisi miringnya 10 cm dan salah satu sudut lancipnya $40^\\circ$. Hitung sisi di depan sudut $40^\\circ$ (2 tempat desimal).",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Rumus yang dipakai?",
   "options": [
    "$\\sin 40^\\circ = \\frac{\\text{depan}}{10}$",
    "$\\cos 40^\\circ = \\frac{\\text{depan}}{10}$",
    "$\\tan 40^\\circ = \\frac{\\text{depan}}{10}$"
   ],
   "answer": "$\\sin 40^\\circ = \\frac{\\text{depan}}{10}$",
   "hint": "Depan dan miring: sindemi.",
   "explain": "depan $= 10 \\sin 40^\\circ$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Hitung $10 \\sin 40^\\circ$, bulatkan ke 2 desimal.",
   "answer": "6,43",
   "hint": "$\\sin 40^\\circ \\approx 0{,}6428$.",
   "explain": "≈ 6,43 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Sisi depan $\\approx 6{,}43$ cm."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Benang layang-layang Putu sepanjang 50 m terentang lurus. Layang-layang berada 30 m di atas tangan Putu. Berapa sudut antara benang dan garis mendatar (1 tempat desimal)?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Depan 30 dan miring 50: $\\sin\\theta = ?$",
   "answer": "0,6",
   "hint": "30 ÷ 50.",
   "explain": "sin θ = 0,6.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\theta = \\sin^{-1}(0{,}6)$, bulatkan ke 1 desimal.",
   "answer": "36,9",
   "hint": "Mode DEG.",
   "explain": "θ ≈ 36,9°.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "Sudutnya sekitar $36{,}9^\\circ$."
}
```
