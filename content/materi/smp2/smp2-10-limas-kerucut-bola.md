---
id: smp2-10-limas-kerucut-bola
judul: Volume dan Luas Permukaan Limas, Kerucut, dan Bola
jenjang: smp2
moe: "Secondary 2 · Geometry and Measurement · G5 Mensuration"
prasyarat: [smp1-11-pengukuran-bangun, smp2-09-pythagoras-trigonometri]
durasi_menit: 55
---

## Kenapa belajar ini?

Tumpeng nasi kuning berbentuk kerucut, atap joglo berbentuk limas, dan bola voli berbentuk bola. Untuk tahu berapa banyak isi yang muat, atau berapa banyak bahan untuk membungkusnya, kita perlu rumus volume dan luas permukaan bangun-bangun ini.

## Analogi

Bayangkan kamu sedang **menuang beras** di dapur. Kamu punya beberapa wadah plastik:

- Gelas berbentuk **tabung** dan cetakan tumpeng berbentuk **kerucut** dengan alas dan tinggi yang **sama**.
- Kotak berbentuk **prisma** dan wadah berbentuk **limas** dengan alas dan tinggi yang sama.

Isi cetakan kerucut penuh dengan beras, lalu tuang ke gelas tabung. Ternyata perlu **tepat 3 kali** tuang sampai tabung penuh. Hal yang sama terjadi pada limas dan prisma. Itulah asal angka $\frac{1}{3}$ pada rumus volume limas dan kerucut.

```anim
{"type": "batang", "title": "Tiga kali tuang", "bars": [{"label": "Tabung", "units": 3, "unitValue": "1 kerucut"}, {"label": "Kerucut", "units": 1}], "total": "isi tabung", "question": "isi kerucut = ⅓ isi tabung", "langkah": [{"say": "Isi kerucut penuh dengan beras.", "bars": 2}, {"say": "Tuang ke tabung yang alas dan tingginya sama: perlu 3 kali tuang.", "bars": 2, "total": true}, {"say": "Jadi isi kerucut sepertiga isi tabung: $V = \\frac{1}{3}\\pi r^2 t$.", "bars": 2, "total": true, "question": true}]}
```

Untuk luas permukaan, bayangkan **membuka bungkus** bangun itu dan membentangkannya di meja, seperti membuka kertas pembungkus nasi. Luas permukaan adalah luas seluruh kertas yang terbentang.

## Konsep

### Limas

**Limas** punya satu alas berbentuk segi banyak dan sisi-sisi tegak berbentuk segitiga yang bertemu di satu titik puncak. Tinggi limas $t$ diukur **tegak lurus** dari puncak ke alas.

$$V_{\text{limas}} = \frac{1}{3} \times \text{luas alas} \times t$$

Ini sepertiga prisma dengan alas dan tinggi yang sama, sesuai percobaan menuang beras.

$$L_{\text{limas}} = \text{luas alas} + \text{jumlah luas semua segitiga sisi tegak}$$

Untuk menghitung luas segitiga sisi tegak, kita perlu **tinggi segitiga** itu (garis dari puncak ke tengah rusuk alas). Tinggi ini **berbeda** dari tinggi limas, dan biasanya dicari dengan Pythagoras.

```anim
{"type": "bangun", "title": "Tinggi limas dan tinggi segitiga sisi tegak", "titik": {"T": [0, 12], "O": [0, 0], "M": [5, 0], "N": [-5, 0]}, "sisi": [["N", "M", "\\text{sisi alas}"], ["T", "O", "t"], ["O", "M", "\\tfrac{1}{2}\\text{ sisi}"], ["T", "M", "\\text{tinggi segitiga}"], ["T", "N"]], "sudut": [{"di": "O", "dari": "M", "ke": "T", "siku": true}], "langkah": [{"say": "Potongan limas dari depan: puncak $T$ dan rusuk alas $NM$.", "sisi": 1}, {"say": "Tinggi limas $t$: tegak lurus dari $T$ ke pusat alas $O$.", "sisi": 2, "sudut": 1, "sorot": ["TO"]}, {"say": "Dari $O$ mendatar setengah sisi alas ke tengah rusuk $M$.", "sisi": 3, "sudut": 1, "sorot": ["OM"]}, {"say": "Tinggi segitiga sisi tegak $TM$ adalah sisi miring, jadi lebih panjang dari $t$.", "sisi": 5, "sudut": 1, "sorot": ["TM"]}]}
```

### Kerucut

**Kerucut** punya alas lingkaran berjari-jari $r$, tinggi $t$, dan **garis pelukis** $s$, yaitu jarak dari puncak ke tepi alas. Karena $r$, $t$, dan $s$ membentuk segitiga siku-siku:

```anim
{"type": "bangun", "title": "r, t, dan s pada kerucut", "titik": {"P": [0, 4], "O": [0, 0], "A": [3, 0], "B": [-3, 0]}, "sisi": [["B", "A"], ["P", "O", "t"], ["O", "A", "r"], ["P", "A", "s"], ["P", "B"]], "sudut": [{"di": "O", "dari": "A", "ke": "P", "siku": true}], "langkah": [{"say": "Kerucut dilihat dari samping: puncak $P$, pusat alas $O$.", "sisi": 1}, {"say": "Tinggi $t$ tegak lurus dari puncak ke alas.", "sisi": 2, "sudut": 1, "sorot": ["PO"]}, {"say": "Jari-jari $r$ dari pusat ke tepi alas.", "sisi": 3, "sudut": 1, "sorot": ["OA"]}, {"say": "Garis pelukis $s$ miring dari puncak ke tepi. Segitiga siku-siku: $s^2 = r^2 + t^2$.", "sisi": 5, "sudut": 1, "sorot": ["PA"]}]}
```

$$s^2 = r^2 + t^2$$

$$V_{\text{kerucut}} = \frac{1}{3}\pi r^2 t$$

**Luas selimut kerucut.** Jika selimut kerucut digunting dan dibentangkan, hasilnya adalah **juring lingkaran** berjari-jari $s$. Panjang busur juring itu sama dengan keliling alas, yaitu $2\pi r$. Satu lingkaran penuh berjari-jari $s$ punya keliling $2\pi s$ dan luas $\pi s^2$. Juring kita hanya sebagian dari lingkaran itu:

$$\text{luas selimut} = \frac{2\pi r}{2\pi s} \times \pi s^2 = \pi r s$$

$$L_{\text{kerucut}} = \pi r^2 + \pi r s$$

### Bola

**Bola** hanya ditentukan oleh jari-jarinya $r$.

```visual
{"type": "solid", "solid": "bola", "caption": "Bola: semua titik di permukaan berjarak r dari pusat."}
```

$$V_{\text{bola}} = \frac{4}{3}\pi r^3, \qquad L_{\text{bola}} = 4\pi r^2$$

**Kenapa?** Archimedes membandingkan bola dengan tabung yang pas membungkusnya (jari-jari $r$, tinggi $2r$). Jika kita menuang beras, bola ternyata berisi $\frac{2}{3}$ isi tabung itu:

$$\frac{2}{3} \times \pi r^2 \times 2r = \frac{4}{3}\pi r^3$$

Untuk luas, kulit jeruk yang dikupas dan disusun ternyata tepat menutupi **empat lingkaran** berjari-jari sama dengan jeruk itu, jadi $4\pi r^2$.

```anim
{"type": "batang", "title": "Bola dan tabung pembungkusnya", "bars": [{"label": "Tabung (r, tinggi 2r)", "units": 3}, {"label": "Bola", "units": 2}], "total": "isi tabung = 2πr³", "question": "isi bola = ⅔ × 2πr³ = (4/3)πr³", "langkah": [{"say": "Bagi isi tabung pembungkus menjadi 3 bagian sama.", "bars": 1, "total": true}, {"say": "Bola berisi 2 dari 3 bagian itu.", "bars": 2, "total": true}, {"say": "$\\frac{2}{3} \\times 2\\pi r^3 = \\frac{4}{3}\\pi r^3$.", "bars": 2, "total": true, "question": true}]}
```

**Setengah bola**: volumenya $\frac{2}{3}\pi r^3$. Luas permukaan setengah bola padat $= 2\pi r^2$ (kulit lengkung) $+ \pi r^2$ (tutup datar) $= 3\pi r^2$.

### Bangun gabungan

Untuk bangun gabungan, pisahkan menjadi bangun-bangun dasar.

- **Volume**: jumlahkan volume setiap bagian.
- **Luas permukaan**: jumlahkan hanya bagian yang **terlihat dari luar**. Bidang tempel di antara dua bagian tidak dihitung.

Gunakan $\pi$ dari kalkulator, kecuali soal meminta $\pi = \frac{22}{7}$ atau $3{,}14$. Kalau memungkinkan, tulis dulu jawaban dalam $\pi$, baru dibulatkan di akhir.

## Contoh langkah demi langkah

Urutan berpikir: **kenali bangun dan ukurannya → cari ukuran yang hilang (sering dengan Pythagoras) → pakai rumus → cek**.

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Limas persegi

```soal
{
 "title": "Limas persegi",
 "text": "Limas beralas persegi dengan sisi 10 cm dan tinggi limas 12 cm. Hitung volume dan luas permukaannya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Luas alas?",
   "answer": "100",
   "hint": "10 × 10.",
   "explain": "100 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $V = \\frac{1}{3} \\times 100 \\times 12$.",
   "answer": "400",
   "hint": "Jangan lupa sepertiga.",
   "explain": "V = 400 cm³.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Tinggi segitiga sisi tegak $= \\sqrt{12^2 + 5^2}$.",
   "answer": "13",
   "hint": "144 + 25 = 169.",
   "explain": "13 cm. Mendatarnya 5 karena setengah sisi alas.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $L = 100 + 4 \\times \\tfrac{1}{2} \\times 10 \\times 13$.",
   "answer": "360",
   "hint": "Empat segitiga: 4 × 65 = 260.",
   "explain": "100 + 260 = 360 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: volume prisma dengan alas dan tinggi sama?",
   "answer": "1.200",
   "hint": "100 × 12.",
   "explain": "1.200 ÷ 3 = 400. Cocok.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  }
 ],
 "conclusion": "$V = 400 \\text{ cm}^3$, $L = 360 \\text{ cm}^2$."
}
```

### Contoh 2: Kerucut

```soal
{
 "title": "Kerucut",
 "text": "Kerucut berjari-jari 5 cm dan tinggi 12 cm. Hitung volume dan luas permukaannya (2 tempat desimal).",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 2: Garis pelukis $s = \\sqrt{5^2 + 12^2}$.",
   "answer": "13",
   "hint": "25 + 144.",
   "explain": "s = 13 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $V = \\frac{1}{3}\\pi (5)^2 (12) = k\\pi$. Berapa $k$?",
   "answer": "100",
   "hint": "$\\frac{1}{3} \\times 25 \\times 12$.",
   "explain": "V = 100π.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3 (lanjutan): $100\\pi$ dibulatkan ke 2 desimal.",
   "answer": "314,16",
   "hint": "Pakai π dari kalkulator.",
   "explain": "≈ 314,16 cm³.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $L = \\pi(5)^2 + \\pi(5)(13) = k\\pi$. Berapa $k$?",
   "answer": "90",
   "hint": "25 + 65.",
   "explain": "L = 90π. Selimut memakai s = 13, bukan t.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4 (lanjutan): $90\\pi$ dibulatkan ke 2 desimal.",
   "answer": "282,74",
   "hint": "Kalikan 90 dengan π.",
   "explain": "≈ 282,74 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: tabung dengan alas dan tinggi sama $= k\\pi$. Berapa $k$?",
   "answer": "300",
   "hint": "π × 25 × 12.",
   "explain": "300π, dan sepertiganya 100π. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$V \\approx 314{,}16 \\text{ cm}^3$, $L \\approx 282{,}74 \\text{ cm}^2$."
}
```

### Contoh 3: Bola

```soal
{
 "title": "Bola",
 "text": "Bola plastik berdiameter 12 cm. Hitung volume dan luas permukaannya (2 tempat desimal).",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Jari-jari bola?",
   "answer": "6",
   "hint": "Diameter dibagi 2.",
   "explain": "r = 6 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $V = \\frac{4}{3}\\pi (6)^3 = k\\pi$. Berapa $k$?",
   "answer": "288",
   "hint": "$6^3 = 216$, lalu kali $\\frac{4}{3}$.",
   "explain": "V = 288π.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2 (lanjutan): $288\\pi$ dibulatkan ke 2 desimal.",
   "answer": "904,78",
   "hint": "Kalikan dengan π.",
   "explain": "≈ 904,78 cm³.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $L = 4\\pi(6)^2 = k\\pi$. Berapa $k$?",
   "answer": "144",
   "hint": "4 × 36.",
   "explain": "L = 144π ≈ 452,39 cm².",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: tabung pembungkus $\\pi \\times 36 \\times 12 = k\\pi$. Berapa $k$?",
   "answer": "432",
   "hint": "36 × 12.",
   "explain": "432π, dan dua pertiganya 288π. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$V \\approx 904{,}78 \\text{ cm}^3$, $L \\approx 452{,}39 \\text{ cm}^2$."
}
```

### Contoh 4: Soal cerita bangun gabungan

```soal
{
 "title": "Soal cerita bangun gabungan",
 "text": "Es krim Siti: bagian bawah kerucut wafer berjari-jari 3 cm dan tinggi 10 cm, penuh es krim. Di atasnya setengah bola berjari-jari 3 cm. Berapa volume seluruh es krim (2 tempat desimal)?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Bangun-bangun penyusunnya?",
   "options": [
    "Kerucut dan setengah bola",
    "Tabung dan bola",
    "Limas dan setengah bola"
   ],
   "answer": "Kerucut dan setengah bola",
   "hint": "Lihat bentuk wafer dan bagian atasnya.",
   "explain": "Kerucut (r = 3, t = 10) dan setengah bola (r = 3).",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Volume kerucut $\\frac{1}{3}\\pi(3)^2(10) = k\\pi$. Berapa $k$?",
   "answer": "30",
   "hint": "9 × 10 ÷ 3.",
   "explain": "30π.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Volume setengah bola $\\frac{2}{3}\\pi(3)^3 = k\\pi$. Berapa $k$?",
   "answer": "18",
   "hint": "27 × 2 ÷ 3.",
   "explain": "18π.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Total $48\\pi$, bulatkan ke 2 desimal.",
   "answer": "150,80",
   "hint": "Jumlahkan dulu dalam π, baru bulatkan.",
   "explain": "≈ 150,80 cm³.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $30\\pi \\approx 94{,}25$ dan $18\\pi \\approx 56{,}55$. Jumlahnya?",
   "answer": "150,80",
   "hint": "Jumlahkan.",
   "explain": "150,80. Cocok.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  }
 ],
 "conclusion": "Volume es krim sekitar $150{,}80 \\text{ cm}^3$."
}
```

## Kesalahan yang sering terjadi

- **Lupa $\frac{1}{3}$.** Menghitung volume kerucut sebagai $\pi r^2 t$. Itu volume tabung, tiga kali terlalu besar. Ingat percobaan menuang beras.
- **Menukar tinggi dan garis pelukis.** Memakai $t = 12$ pada rumus selimut $\pi r s$, atau memakai $s = 13$ pada rumus volume. Volume selalu memakai tinggi **tegak**; selimut memakai garis pelukis **miring**.
- **Memakai diameter sebagai jari-jari.** Pada bola berdiameter 12 cm, memakai $r = 12$ membuat volume 8 kali lebih besar. Bagi 2 dulu.
- **Menghitung bidang tempel pada bangun gabungan.** Saat menghitung luas permukaan es krim, alas setengah bola dan alas kerucut menempel, jadi tidak terlihat dari luar dan tidak dihitung.
- **Membulatkan terlalu awal.** Membulatkan $\pi$ dan hasil antara lalu menjumlahkan membuat jawaban akhir meleset. Simpan dalam bentuk $\pi$ sampai akhir.

## Ringkasan

- Limas: $V = \frac{1}{3} \times \text{luas alas} \times t$; $L$ = alas + semua segitiga sisi tegak.
- Kerucut: $s^2 = r^2 + t^2$; $V = \frac{1}{3}\pi r^2 t$; $L = \pi r^2 + \pi r s$.
- Bola: $V = \frac{4}{3}\pi r^3$; $L = 4\pi r^2$. Setengah bola padat: $V = \frac{2}{3}\pi r^3$, $L = 3\pi r^2$.
- Angka $\frac{1}{3}$ berasal dari "tiga kali tuang" ke prisma atau tabung yang sama alas dan tingginya.
- Bangun gabungan: jumlahkan volume; untuk luas, hitung hanya permukaan luar.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Limas beralas persegi panjang 6 cm × 4 cm dengan tinggi 9 cm. Hitung volumenya.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Luas alas?",
   "answer": "24",
   "hint": "6 × 4.",
   "explain": "24 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Volume?",
   "answer": "72",
   "hint": "$\\frac{1}{3} \\times 24 \\times 9$.",
   "explain": "72 cm³.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  }
 ],
 "conclusion": "$V = 72 \\text{ cm}^3$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Kerucut berjari-jari 7 cm dan tinggi 24 cm. Hitung luas permukaannya (2 tempat desimal).",
 "steps": [
  {
   "kind": "number",
   "prompt": "Garis pelukis $s = \\sqrt{49 + 576}$.",
   "answer": "25",
   "hint": "Akar dari 625.",
   "explain": "s = 25 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "$L = \\pi(7)^2 + \\pi(7)(25) = k\\pi$. Berapa $k$?",
   "answer": "224",
   "hint": "49 + 175.",
   "explain": "224π.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$224\\pi$ dibulatkan ke 2 desimal.",
   "answer": "703,72",
   "hint": "Kalikan dengan π.",
   "explain": "≈ 703,72 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  }
 ],
 "conclusion": "$L \\approx 703{,}72 \\text{ cm}^2$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Bola padat dari lilin mainan berdiameter 10 cm. Hitung volumenya (2 tempat desimal).",
 "steps": [
  {
   "kind": "number",
   "prompt": "Jari-jari?",
   "answer": "5",
   "hint": "Diameter dibagi 2.",
   "explain": "r = 5 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "$V = \\frac{4}{3}\\pi \\times 125$, bulatkan ke 2 desimal.",
   "answer": "523,60",
   "hint": "$\\frac{500}{3}\\pi$.",
   "explain": "≈ 523,60 cm³.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  }
 ],
 "conclusion": "$V \\approx 523{,}60 \\text{ cm}^3$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Setengah bola padat berjari-jari 5 cm. Hitung luas permukaan totalnya (2 tempat desimal).",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Rumus luas setengah bola padat?",
   "options": [
    "$3\\pi r^2$",
    "$2\\pi r^2$",
    "$4\\pi r^2$"
   ],
   "answer": "$3\\pi r^2$",
   "hint": "Kulit lengkung ditambah tutup datar.",
   "explain": "$2\\pi r^2 + \\pi r^2 = 3\\pi r^2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$L = 75\\pi$, bulatkan ke 2 desimal.",
   "answer": "235,62",
   "hint": "3 × 25 = 75.",
   "explain": "≈ 235,62 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  }
 ],
 "conclusion": "$L \\approx 235{,}62 \\text{ cm}^2$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Tugu kecil terdiri atas tabung berjari-jari 3 cm dan tinggi 8 cm, dengan kerucut berjari-jari 3 cm dan tinggi 4 cm di atasnya. Hitung volume tugu (2 tempat desimal).",
 "steps": [
  {
   "kind": "number",
   "prompt": "Volume tabung $\\pi \\times 9 \\times 8 = k\\pi$. Berapa $k$?",
   "answer": "72",
   "hint": "9 × 8.",
   "explain": "72π.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Volume kerucut $\\frac{1}{3}\\pi \\times 9 \\times 4 = k\\pi$. Berapa $k$?",
   "answer": "12",
   "hint": "36 ÷ 3.",
   "explain": "12π.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Total $84\\pi$, bulatkan ke 2 desimal.",
   "answer": "263,89",
   "hint": "Kalikan 84 dengan π.",
   "explain": "≈ 263,89 cm³.",
   "error": "salah-langkah-materi",
   "suffix": "cm³"
  }
 ],
 "conclusion": "$V \\approx 263{,}89 \\text{ cm}^3$."
}
```
