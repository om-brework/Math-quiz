---
id: sma1-03-busur-juring-radian
judul: Panjang Busur, Luas Juring, dan Radian
jenjang: sma1
moe: "Secondary 4 · Geometry and Measurement · G5 Mensuration"
prasyarat: [smp3-08-sifat-lingkaran, smp3-07-trigonometri-lanjut]
durasi_menit: 50
---

## Kenapa belajar ini?

Penjual martabak memotong adonan bundar menjadi potongan sama besar, tukang las membuat pagar melengkung, dan insinyur menghitung lintasan roda. Semuanya butuh panjang busur dan luas potongan lingkaran. Kamu juga akan berkenalan dengan **radian**, satuan sudut yang membuat rumus-rumus ini jauh lebih sederhana.

## Analogi

Bayangkan sebuah **martabak manis bundar** dengan jari-jari $r$.

- Satu **potongan** berbentuk seperti kipas, dari pusat ke pinggir. Itulah **juring**.
- **Pinggiran renyah** pada potongan itu adalah **busur**.
- Jika martabak dipotong dengan satu irisan **lurus** yang tidak melewati pusat, bagian kecil di antara irisan lurus dan pinggiran adalah **tembereng**.
- Ambil seutas **tali sepanjang jari-jari**, lalu tempelkan melengkung di pinggiran martabak. Sudut potongan yang pinggirannya tepat sepanjang tali itu besarnya **1 radian**.

Semua rumus bab ini menjawab satu pertanyaan: **potongan ini berapa bagian dari martabak utuh?**

```anim
{"type": "bangun", "title": "Bagian-bagian martabak", "titik": {"O": [0, 0], "A": [3.0, 0.0], "B": [1.026, 2.819]}, "sisi": [["O", "A", "r"], ["O", "B", "r"], ["A", "B", "\\text{tali busur}"]], "sudut": [{"di": "O", "dari": "A", "ke": "B", "label": "\\theta"}], "lingkaran": [{"pusat": [0, 0], "r": 3}], "langkah": [{"say": "Martabak bundar berjari-jari $r$ dengan pusat $O$.", "sisi": 0, "lingkaran": 1}, {"say": "Dua irisan dari pusat membentuk potongan kipas: **juring** $OAB$ bersudut $\\theta$.", "sisi": 2, "sudut": 1, "lingkaran": 1, "sorot": ["OA", "OB"]}, {"say": "Pinggiran lengkung dari $A$ ke $B$ adalah **busur**.", "sisi": 2, "sudut": 1, "lingkaran": 1, "sorot": ["A", "B"]}, {"say": "Irisan lurus $AB$ adalah tali busur. Bagian kecil antara tali busur dan busur disebut **tembereng**.", "sisi": 3, "sudut": 1, "lingkaran": 1, "sorot": ["AB"]}]}
```

## Konsep

### Panjang busur dan luas juring dengan derajat

Martabak utuh bersudut $360^\circ$, kelilingnya $2\pi r$, dan luasnya $\pi r^2$. Potongan bersudut $\theta^\circ$ adalah $\frac{\theta}{360}$ bagian dari martabak utuh. Jadi:

$$\text{panjang busur} = \frac{\theta}{360} \times 2\pi r, \qquad \text{luas juring} = \frac{\theta}{360} \times \pi r^2$$

### Ukuran radian

**1 radian** adalah sudut pusat yang menghadap busur sepanjang jari-jari.

Berapa tali sepanjang $r$ yang muat mengelilingi martabak? Keliling $2\pi r$ dibagi $r$ sama dengan $2\pi$. Jadi satu putaran penuh $= 2\pi$ radian, sehingga:

$$\pi \text{ rad} = 180^\circ, \qquad 1 \text{ rad} = \frac{180^\circ}{\pi} \approx 57{,}3^\circ$$

```anim
{"type": "bangun", "title": "Satu radian", "titik": {"O": [0, 0], "A": [3.0, 0.0], "B": [1.621, 2.524]}, "sisi": [["O", "A", "r"], ["O", "B", "r"]], "sudut": [{"di": "O", "dari": "A", "ke": "B", "label": "1\\ \\text{rad}"}], "lingkaran": [{"pusat": [0, 0], "r": 3}], "langkah": [{"say": "Gambar jari-jari $OA$ sepanjang $r$.", "sisi": 1, "lingkaran": 1}, {"say": "Tempelkan tali sepanjang $r$ di pinggiran, mulai dari $A$ sampai $B$.", "sisi": 1, "lingkaran": 1, "sorot": ["A", "B"]}, {"say": "Tarik jari-jari $OB$. Sudut $AOB$ yang busurnya sepanjang $r$ itulah **1 radian**, kira-kira $57{,}3^\\circ$.", "sisi": 2, "sudut": 1, "lingkaran": 1, "sorot": ["O"]}]}
```

Cara konversi:

- Derajat ke radian: kalikan $\frac{\pi}{180}$.
- Radian ke derajat: kalikan $\frac{180}{\pi}$.

Sudut-sudut penting: $30^\circ = \frac{\pi}{6}$, $45^\circ = \frac{\pi}{4}$, $60^\circ = \frac{\pi}{3}$, $90^\circ = \frac{\pi}{2}$, $180^\circ = \pi$, $360^\circ = 2\pi$.

Sudut dalam radian biasanya ditulis tanpa satuan. Jika tidak ada lambang derajat, anggap radian.

### Rumus dengan radian

Potongan bersudut $\theta$ radian adalah $\frac{\theta}{2\pi}$ bagian martabak. Maka:

$$s = \frac{\theta}{2\pi} \times 2\pi r = r\theta, \qquad L = \frac{\theta}{2\pi} \times \pi r^2 = \frac{1}{2}r^2\theta$$

```anim
{"type": "persamaan", "title": "Kenapa rumus radian lebih bersih", "baris": [{"tex": "s = \\frac{\\theta}{2\\pi} \\times 2\\pi r", "say": "Potongan bersudut $\\theta$ radian adalah $\\frac{\\theta}{2\\pi}$ bagian keliling."}, {"tex": "s = \\theta \\times r", "say": "$2\\pi$ di pembilang dan penyebut saling meniadakan.", "op": "coret $2\\pi$"}, {"tex": "L = \\frac{\\theta}{2\\pi} \\times \\pi r^2", "say": "Dengan cara yang sama untuk luas."}, {"tex": "L = \\frac{1}{2} r^2 \\theta", "say": "$\\pi$ saling meniadakan, tersisa $\\frac{1}{2}$.", "op": "coret $\\pi$"}]}
```

Rumusnya jauh lebih bersih karena $2\pi$ saling meniadakan. Ini juga cocok dengan definisi: setiap 1 radian memberi busur sepanjang $r$, jadi $\theta$ radian memberi $r\theta$.

Dua rumus ini bisa digabung: $L = \frac{1}{2}r^2\theta = \frac{1}{2}r(r\theta) = \frac{1}{2}rs$.

**Keliling juring** = busur + dua jari-jari = $r\theta + 2r$.

### Luas tembereng

Tembereng = juring dikurangi segitiga $OAB$ (segitiga yang dibentuk dua jari-jari dan tali busur). Luas segitiga dengan dua sisi $r$ yang mengapit sudut $\theta$ adalah $\frac{1}{2}r^2\sin\theta$. Jadi, untuk $\theta$ dalam radian:

$$\text{luas tembereng} = \frac{1}{2}r^2\theta - \frac{1}{2}r^2\sin\theta = \frac{1}{2}r^2(\theta - \sin\theta)$$

```anim
{"type": "bangun", "title": "Tembereng = juring − segitiga", "titik": {"O": [0, 0], "A": [1.928, -2.298], "B": [1.928, 2.298], "M": [1.928, 0.0]}, "sisi": [["O", "A", "r"], ["O", "B", "r"], ["A", "B"], ["O", "M"]], "sudut": [{"di": "O", "dari": "A", "ke": "B", "label": "\\theta"}, {"di": "M", "dari": "O", "ke": "B", "siku": true}], "lingkaran": [{"pusat": [0, 0], "r": 3}], "langkah": [{"say": "Juring $OAB$: luasnya $\\frac{1}{2}r^2\\theta$.", "sisi": 2, "sudut": 1}, {"say": "Segitiga $OAB$ dibatasi dua jari-jari dan tali busur $AB$: luasnya $\\frac{1}{2}r^2\\sin\\theta$.", "sisi": 3, "sudut": 1, "sorot": ["AB"]}, {"say": "Tembereng adalah bagian di luar segitiga tetapi di dalam juring. Kurangkan kedua luas.", "sisi": 3, "sudut": 1, "sorot": ["A", "B"]}, {"say": "Garis $OM$ membagi segitiga menjadi dua segitiga siku-siku, sehingga $AB = 2r\\sin\\frac{\\theta}{2}$.", "sisi": 4, "sudut": 2, "sorot": ["OM", "AB"]}]}
```

Panjang tali busur bisa dihitung dengan membagi segitiga sama kaki menjadi dua segitiga siku-siku: $AB = 2r\sin\frac{\theta}{2}$.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Konversi derajat dan radian

```soal
{
 "title": "Contoh 1",
 "text": "(a) Ubah $60^\\circ$ dan $225^\\circ$ ke radian dalam $\\pi$. (b) Ubah $2{,}5$ rad ke derajat.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Untuk mengubah derajat ke radian, kalikan dengan ...",
   "options": [
    "$\\frac{\\pi}{180}$",
    "$\\frac{180}{\\pi}$",
    "$2\\pi$"
   ],
   "answer": "$\\frac{\\pi}{180}$",
   "hint": "Ingat $180^\\circ = \\pi$ rad. Satuan derajat harus hilang.",
   "explain": "Kalikan $\\frac{\\pi}{180}$ sehingga derajat berubah menjadi radian.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: $60 \\times \\frac{\\pi}{180}$ = ...",
   "options": [
    "$\\frac{\\pi}{3}$",
    "$\\frac{\\pi}{6}$",
    "$60\\pi$",
    "$\\frac{3}{\\pi}$"
   ],
   "answer": "$\\frac{\\pi}{3}$",
   "hint": "Sederhanakan $\\frac{60}{180}$.",
   "explain": "$\\frac{60}{180} = \\frac{1}{3}$, jadi $\\frac{\\pi}{3}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$225 \\times \\frac{\\pi}{180}$ = ...",
   "options": [
    "$\\frac{5\\pi}{4}$",
    "$\\frac{4\\pi}{5}$",
    "$\\frac{5\\pi}{2}$",
    "$\\frac{9\\pi}{4}$"
   ],
   "answer": "$\\frac{5\\pi}{4}$",
   "hint": "Bagi 225 dan 180 dengan FPB-nya, 45.",
   "explain": "$\\frac{225}{180} = \\frac{5}{4}$, jadi $\\frac{5\\pi}{4}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $2{,}5 \\times \\frac{180}{\\pi}$ = ? (bulatkan ke 1 desimal)",
   "answer": "143,2",
   "hint": "Hitung $\\frac{450}{\\pi}$ dengan kalkulator.",
   "explain": "$\\frac{450}{\\pi} \\approx 143{,}2^\\circ$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $1$ rad $\\approx 57{,}3^\\circ$. Berapa $2{,}5 \\times 57{,}3$? (2 desimal)",
   "answer": "143,25",
   "hint": "Kalikan biasa.",
   "explain": "$143{,}25^\\circ$, hampir sama dengan $143{,}2^\\circ$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $60^\\circ = \\frac{\\pi}{3}$, $225^\\circ = \\frac{5\\pi}{4}$, dan $2{,}5$ rad $\\approx 143{,}2^\\circ$."
}
```

### Contoh 2: Busur dan juring dalam derajat

```soal
{
 "title": "Contoh 2",
 "text": "Juring lingkaran berjari-jari 14 cm bersudut $72^\\circ$. Hitung panjang busur dan luas juring (3 angka penting).",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Langkah 1: Juring ini berapa bagian dari lingkaran? $\\frac{72}{360}$ = ?",
   "answer": {
    "num": 1,
    "den": 5
   },
   "hint": "Sederhanakan dengan membagi 72.",
   "explain": "$\\frac{72}{360} = \\frac{1}{5}$: seperlima martabak.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Panjang busur $= \\frac{1}{5} \\times 2\\pi(14)$ = ? (3 angka penting)",
   "answer": "17,6",
   "hint": "Hitung $\\frac{28\\pi}{5}$.",
   "explain": "$\\frac{28\\pi}{5} \\approx 17{,}6$ cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Luas juring $= \\frac{1}{5} \\times \\pi(14)^2$ = ? (3 angka penting)",
   "answer": "123",
   "hint": "Hitung $\\frac{196\\pi}{5}$.",
   "explain": "$\\frac{196\\pi}{5} \\approx 123$ cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $\\frac{1}{2}rs = \\frac{1}{2} \\times 14 \\times 17{,}59$ = ? (bulatkan ke satuan)",
   "answer": "123",
   "hint": "Kalikan $7 \\times 17{,}59$.",
   "explain": "$\\approx 123$ cm². Sama.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Panjang busur ≈ 17,6 cm dan luas juring ≈ 123 cm²."
}
```

### Contoh 3: Mencari sudut dalam radian

```soal
{
 "title": "Contoh 3",
 "text": "Busur sebuah juring panjangnya 15 cm dan jari-jarinya 6 cm. Hitung sudut juring dalam radian, luas juring, dan kelilingnya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Pakai $s = r\\theta$, yaitu $15 = 6\\theta$. Berapa $\\theta$?",
   "answer": "2,5",
   "hint": "Bagi 15 dengan 6.",
   "explain": "$\\theta = 2{,}5$ rad: pinggirannya sepanjang $2{,}5$ tali jari-jari.",
   "error": "salah-langkah-materi",
   "suffix": "rad"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Luas $= \\frac{1}{2}(6)^2(2{,}5)$ = ?",
   "answer": "45",
   "hint": "$\\frac{1}{2} \\times 36 = 18$, lalu kali $2{,}5$.",
   "explain": "$18 \\times 2{,}5 = 45$ cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Keliling juring = busur + dua jari-jari = ?",
   "answer": "27",
   "hint": "Jangan lupa dua sisi lurus potongan.",
   "explain": "$15 + 2(6) = 27$ cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $\\frac{1}{2}rs = \\frac{1}{2} \\times 6 \\times 15$ = ?",
   "answer": "45",
   "hint": "Kalikan $3 \\times 15$.",
   "explain": "45 cm². Sama dengan Langkah 2.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\theta = 2{,}5$ rad, luas 45 cm², dan keliling 27 cm."
}
```

### Contoh 4: Soal cerita, tembereng martabak

```soal
{
 "title": "Contoh 4",
 "text": "Martabak manis berjari-jari 12 cm. Bu Siti mengiris lurus dari titik $A$ ke titik $B$ di pinggiran, dengan $\\angle AOB = 120^\\circ$ di pusat $O$. Hitung luas bagian kecil yang terpotong (tembereng) dan kelilingnya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: $120^\\circ$ dalam radian = ...",
   "options": [
    "$\\frac{2\\pi}{3}$",
    "$\\frac{3\\pi}{2}$",
    "$\\frac{\\pi}{3}$",
    "$\\frac{2}{3}$"
   ],
   "answer": "$\\frac{2\\pi}{3}$",
   "hint": "Kalikan $\\frac{\\pi}{180}$.",
   "explain": "$\\frac{120}{180}\\pi = \\frac{2\\pi}{3}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Luas juring $= \\frac{1}{2}(12)^2 \\times \\frac{2\\pi}{3}$ = ? (2 desimal)",
   "answer": "150,80",
   "hint": "$\\frac{1}{2} \\times 144 = 72$, lalu $72 \\times \\frac{2\\pi}{3} = 48\\pi$.",
   "explain": "$48\\pi \\approx 150{,}80$ cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Luas segitiga $OAB = \\frac{1}{2}(12)^2\\sin 120^\\circ$ = ? (2 desimal)",
   "answer": "62,35",
   "hint": "$\\sin 120^\\circ \\approx 0{,}8660$.",
   "explain": "$72 \\times 0{,}8660 \\approx 62{,}35$ cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Luas tembereng = juring − segitiga = ? (3 angka penting)",
   "answer": "88,4",
   "hint": "Pakai nilai yang belum dibulatkan bila bisa.",
   "explain": "$150{,}80 - 62{,}35 \\approx 88{,}4$ cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Panjang busur $= 12 \\times \\frac{2\\pi}{3}$ = ? (2 desimal)",
   "answer": "25,13",
   "hint": "$12 \\times \\frac{2\\pi}{3} = 8\\pi$.",
   "explain": "$8\\pi \\approx 25{,}13$ cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Tali busur $AB = 2(12)\\sin 60^\\circ$ = ? (2 desimal)",
   "answer": "20,78",
   "hint": "$\\sin 60^\\circ \\approx 0{,}8660$.",
   "explain": "$24 \\times 0{,}8660 \\approx 20{,}78$ cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Keliling tembereng = busur + tali busur = ? (3 angka penting)",
   "answer": "45,9",
   "hint": "Jumlahkan dua hasil terakhir.",
   "explain": "$25{,}13 + 20{,}78 = 45{,}91 \\approx 45{,}9$ cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: juring $120^\\circ$ adalah berapa bagian martabak utuh?",
   "options": [
    "Sepertiga",
    "Seperempat",
    "Setengah"
   ],
   "answer": "Sepertiga",
   "hint": "$\\frac{120}{360}$.",
   "explain": "Luas utuh $144\\pi \\approx 452$ cm², dan $150{,}8 \\times 3 \\approx 452$. Tembereng 88,4 lebih kecil dari juring. Konsisten.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Luas tembereng ≈ 88,4 cm² dan kelilingnya ≈ 45,9 cm."
}
```

## Kesalahan yang sering terjadi

- **Memakai $s = r\theta$ dengan $\theta$ dalam derajat.** $r = 5$ dan $\theta = 60^\circ$ tidak memberi busur $300$. Ubah dulu: $60^\circ = \frac{\pi}{3}$, jadi $s = \frac{5\pi}{3} \approx 5{,}24$.
- **Kalkulator salah mode.** Untuk $\sin\theta$ pada rumus tembereng dengan $\theta$ radian, kalkulator harus mode RAD; atau ubah sudut ke derajat dulu.
- **Keliling juring tanpa jari-jari.** Keliling potongan martabak = pinggiran **ditambah dua sisi potongan**, yaitu $r\theta + 2r$.
- **Tembereng dikira juring.** Tembereng dibatasi tali busur (irisan lurus), bukan dua jari-jari. Kurangkan luas segitiga.
- **Membulatkan terlalu awal.** Simpan nilai lengkap di kalkulator dan bulatkan di akhir, supaya angka penting terakhir tidak meleset.

## Ringkasan

- $\pi$ rad $= 180^\circ$; derajat ke radian kali $\frac{\pi}{180}$, radian ke derajat kali $\frac{180}{\pi}$.
- Dengan derajat: busur $= \frac{\theta}{360} \times 2\pi r$, juring $= \frac{\theta}{360} \times \pi r^2$.
- Dengan radian: $s = r\theta$, $L = \frac{1}{2}r^2\theta = \frac{1}{2}rs$.
- Tembereng $= \frac{1}{2}r^2(\theta - \sin\theta)$ dengan $\theta$ radian.
- Keliling juring $= r\theta + 2r$; tali busur $= 2r\sin\frac{\theta}{2}$.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Ubah $150^\\circ$ ke radian dalam $\\pi$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Kalikan dengan ...",
   "options": [
    "$\\frac{\\pi}{180}$",
    "$\\frac{180}{\\pi}$"
   ],
   "answer": "$\\frac{\\pi}{180}$",
   "hint": "Derajat ke radian.",
   "explain": "$150 \\times \\frac{\\pi}{180}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "$\\frac{150}{180}\\pi$ = ...",
   "options": [
    "$\\frac{5\\pi}{6}$",
    "$\\frac{6\\pi}{5}$",
    "$\\frac{5\\pi}{3}$",
    "$\\frac{3\\pi}{5}$"
   ],
   "answer": "$\\frac{5\\pi}{6}$",
   "hint": "Bagi 150 dan 180 dengan 30.",
   "explain": "$\\frac{150}{180} = \\frac{5}{6}$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$150^\\circ = \\frac{5\\pi}{6}$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Ubah $\\frac{3\\pi}{4}$ rad ke derajat.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Kalikan dengan ...",
   "options": [
    "$\\frac{180}{\\pi}$",
    "$\\frac{\\pi}{180}$"
   ],
   "answer": "$\\frac{180}{\\pi}$",
   "hint": "Radian ke derajat: $\\pi$ harus hilang.",
   "explain": "$\\frac{3\\pi}{4} \\times \\frac{180}{\\pi}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\frac{3}{4} \\times 180$ = ?",
   "answer": "135",
   "hint": "Seperempat dari 180 adalah 45.",
   "explain": "$3 \\times 45 = 135^\\circ$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "$\\frac{3\\pi}{4}$ rad $= 135^\\circ$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung panjang busur juring berjari-jari 9 cm dengan sudut $40^\\circ$.",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Langkah 1: $\\frac{40}{360}$ = ?",
   "answer": {
    "num": 1,
    "den": 9
   },
   "hint": "Bagi pembilang dan penyebut dengan 40.",
   "explain": "$\\frac{40}{360} = \\frac{1}{9}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: $\\frac{1}{9} \\times 2\\pi(9)$ = ...",
   "options": [
    "$2\\pi$",
    "$18\\pi$",
    "$\\pi$",
    "$9\\pi$"
   ],
   "answer": "$2\\pi$",
   "hint": "9 di pembilang dan penyebut saling meniadakan.",
   "explain": "$\\frac{18\\pi}{9} = 2\\pi$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $2\\pi$ = ? (2 desimal)",
   "answer": "6,28",
   "hint": "$\\pi \\approx 3{,}1416$.",
   "explain": "$\\approx 6{,}28$ cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Panjang busur $2\\pi \\approx 6{,}28$ cm."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Juring berjari-jari 5 cm bersudut $1{,}6$ rad. Hitung panjang busur, luas, dan keliling juring.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Panjang busur $s = r\\theta$ = ?",
   "answer": "8",
   "hint": "$5 \\times 1{,}6$.",
   "explain": "$s = 8$ cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Luas $= \\frac{1}{2}r^2\\theta$ = ?",
   "answer": "20",
   "hint": "$\\frac{1}{2} \\times 25 \\times 1{,}6$.",
   "explain": "$12{,}5 \\times 1{,}6 = 20$ cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Keliling juring = ?",
   "answer": "18",
   "hint": "Busur ditambah dua jari-jari.",
   "explain": "$8 + 2(5) = 18$ cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Busur 8 cm, luas 20 cm², keliling 18 cm."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Hitung luas tembereng lingkaran berjari-jari 6 cm dengan sudut pusat $\\frac{\\pi}{2}$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: $\\sin\\frac{\\pi}{2}$ = ?",
   "answer": "1",
   "hint": "$\\frac{\\pi}{2} = 90^\\circ$.",
   "explain": "$\\sin 90^\\circ = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: $\\frac{1}{2}(36)\\left(\\frac{\\pi}{2} - 1\\right)$ = ...",
   "options": [
    "$9\\pi - 18$",
    "$18\\pi - 18$",
    "$9\\pi - 1$",
    "$9\\pi$"
   ],
   "answer": "$9\\pi - 18$",
   "hint": "Kalikan 18 ke setiap suku di dalam kurung.",
   "explain": "$18 \\times \\frac{\\pi}{2} - 18 \\times 1 = 9\\pi - 18$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Nilainya = ? (3 angka penting)",
   "answer": "10,3",
   "hint": "$9\\pi \\approx 28{,}27$.",
   "explain": "$28{,}27 - 18 \\approx 10{,}3$ cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  }
 ],
 "conclusion": "Luas tembereng $= 9\\pi - 18 \\approx 10{,}3$ cm²."
}
```
