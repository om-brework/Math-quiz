---
id: smp2-01-skala-proporsi
judul: Skala Peta dan Proporsi
jenjang: smp2
moe: "Secondary 2 · Number and Algebra · N2 Ratio and proportion"
prasyarat: [smp1-04-perbandingan, smp1-11-pengukuran-bangun]
durasi_menit: 50
---

## Kenapa belajar ini?

Peta di aplikasi atau di buku atlas memakai skala, sehingga jarak sebenarnya bisa dihitung dari peta. Proporsi muncul setiap hari: makin banyak beras dibeli, makin mahal harganya; makin banyak pekerja, makin cepat pekerjaan selesai. Topik ini mengajarkan cara menghitung keduanya dengan rapi.

## Analogi

Bayangkan dua alat permainan di taman:

- **Lift**: dua orang di dalam lift **naik bersama dan turun bersama**. Kalau satu naik dua kali lipat, yang lain juga dua kali lipat. Ini **perbandingan senilai** (berbanding lurus).
- **Jungkat-jungkit**: kalau satu ujung naik, ujung lain turun. Ini **perbandingan berbalik nilai**.

Skala peta adalah contoh lift: jarak di peta dan jarak sebenarnya naik bersama. Peta yang baik ibarat **foto yang diperkecil**: semua jarak diperkecil dengan faktor yang sama.

```anim
{"type": "grafik", "title": "Lift dan jungkat-jungkit", "xmin": 0, "xmax": 8, "ymin": 0, "ymax": 12, "kurva": [{"f": "1.5x", "label": "\\text{lift: } y = 1{,}5x"}, {"f": "12/x", "label": "\\text{jungkat-jungkit: } y = \\frac{12}{x}", "dari": 1}], "titik": [{"x": 2, "y": 3, "label": "(2, 3)"}, {"x": 4, "y": 6, "label": "(4, 6)"}, {"x": 2, "y": 6, "label": "(2, 6)"}, {"x": 4, "y": 3, "label": "(4, 3)"}], "langkah": [{"say": "Ini bidang koordinat. Sumbu $x$ besaran pertama, sumbu $y$ besaran kedua.", "kurva": 0, "titik": 0}, {"say": "Lift: $x$ naik, $y$ ikut naik dengan rasio tetap.", "kurva": 1, "titik": 0}, {"say": "$x$ dari 2 menjadi 4 (dua kali), $y$ dari 3 menjadi 6 (juga dua kali).", "kurva": 1, "titik": 2}, {"say": "Jungkat-jungkit: $x$ naik, $y$ turun. Hasil kali $xy$ tetap 12.", "kurva": 2, "titik": 2}, {"say": "$x$ dari 2 menjadi 4 (dua kali), $y$ dari 6 menjadi 3 (setengahnya).", "kurva": 2, "titik": 4}]}
```

## Konsep

### Skala peta untuk jarak

Skala $1 : n$ artinya **1 cm di peta mewakili $n$ cm di tempat sebenarnya.** Contoh: skala $1 : 50.000$ berarti 1 cm di peta = 50.000 cm = 500 m = 0,5 km.

$$\text{jarak sebenarnya} = \text{jarak peta} \times n$$
$$\text{jarak peta} = \frac{\text{jarak sebenarnya}}{n}$$

Selalu **samakan satuan** sebelum membagi. Ingat: $1 \text{ km} = 1.000 \text{ m} = 100.000 \text{ cm}$.

Skala juga bisa ditulis "1 cm mewakili 0,5 km". Ini sama dengan $1 : 50.000$.

```anim
{"type": "persamaan", "title": "Mengubah skala ke km", "baris": [{"tex": "1 \\text{ cm} \\to 50.000 \\text{ cm}", "say": "Skala $1 : 50.000$: 1 cm di peta mewakili 50.000 cm."}, {"tex": "1 \\text{ cm} \\to 500 \\text{ m}", "say": "Bagi 100 untuk mengubah cm ke m.", "op": "\\div 100"}, {"tex": "1 \\text{ cm} \\to 0{,}5 \\text{ km}", "say": "Bagi 1.000 untuk mengubah m ke km.", "op": "\\div 1.000"}]}
```

### Skala peta untuk luas

Luas punya **dua arah**: panjang dan lebar. Keduanya diperbesar $n$ kali. Jadi luas diperbesar $n \times n = n^2$ kali.

Kalau 1 cm mewakili 0,5 km, maka persegi $1 \text{ cm} \times 1 \text{ cm}$ di peta mewakili persegi $0{,}5 \text{ km} \times 0{,}5 \text{ km}$:

$$1 \text{ cm}^2 \text{ mewakili } 0{,}25 \text{ km}^2$$

Cara paling aman: ubah skala ke "1 cm mewakili ... km" dulu, lalu kuadratkan.

```anim
{"type": "bangun", "title": "Persegi 1 cm di peta", "titik": {"A": [0, 0], "B": [1, 0], "C": [1, 1], "D": [0, 1]}, "sisi": [["A", "B", "1\\text{ cm} \\to 0{,}5\\text{ km}"], ["B", "C", "1\\text{ cm} \\to 0{,}5\\text{ km}"], ["C", "D"], ["D", "A"]], "langkah": [{"say": "Persegi $1 \\text{ cm} \\times 1 \\text{ cm}$ di peta.", "sisi": 4}, {"say": "Panjangnya mewakili 0,5 km.", "sisi": 4, "sorot": ["AB"]}, {"say": "Lebarnya juga mewakili 0,5 km.", "sisi": 4, "sorot": ["BC"]}, {"say": "Luasnya mewakili $0{,}5 \\times 0{,}5 = 0{,}25 \\text{ km}^2$, bukan 0,5.", "sisi": 4, "sorot": ["AB", "BC"]}]}
```

### Perbandingan senilai (berbanding lurus)

Dua besaran $x$ dan $y$ **berbanding lurus** jika $\frac{y}{x}$ selalu sama. Kita tulis

$$y = kx$$

dengan $k$ bilangan tetap (konstanta). Kalau $x$ dikali 2, $y$ juga dikali 2, seperti lift. Contoh: banyak beras dan harganya, jarak tempuh dan bensin yang dipakai.

Grafik $y = kx$ adalah garis lurus yang melalui titik asal $(0, 0)$.

```anim
{"type": "grafik", "title": "Grafik harga beras y = 13.500x", "xmin": 0, "xmax": 9, "ymin": 0, "ymax": 130000, "kurva": [{"f": "13500x", "label": "y = 13.500x"}], "titik": [{"x": 0, "y": 0, "label": "(0, 0)"}, {"x": 5, "y": 67500, "label": "(5; 67.500)"}, {"x": 8, "y": 108000, "label": "(8; 108.000)"}], "langkah": [{"say": "Sumbu $x$: berat beras (kg). Sumbu $y$: harga (Rp).", "kurva": 0, "titik": 0}, {"say": "Garis lurus melalui titik asal: 0 kg harganya Rp0.", "kurva": 1, "titik": 1}, {"say": "5 kg Rp67.500 dan 8 kg Rp108.000. Rasio keduanya sama, yaitu 13.500.", "kurva": 1, "titik": 3}]}
```

### Perbandingan berbalik nilai

Dua besaran $x$ dan $y$ **berbanding terbalik** jika hasil kali $xy$ selalu sama. Kita tulis

$$xy = k \quad \text{atau} \quad y = \frac{k}{x}$$

Kalau $x$ dikali 2, $y$ menjadi setengahnya, seperti jungkat-jungkit. Contoh: banyak pekerja dan lama pekerjaan, kecepatan dan waktu tempuh untuk jarak yang sama.

Kenapa hasil kalinya tetap? Misalnya membangun pagar butuh 60 "hari-orang". Itu jumlah kerja total. 6 orang $\times$ 10 hari = 60. 12 orang $\times$ 5 hari = 60. Jumlah kerjanya sama, hanya dibagi berbeda.

```visual
{"type": "table", "head": ["Banyak tukang", "Banyak hari", "Hasil kali (hari-orang)"], "rows": [["3", "20", "60"], ["6", "10", "60"], ["12", "5", "60"], ["15", "4", "60"]], "caption": "Berbalik nilai: tukang bertambah, hari berkurang, hasil kalinya tetap 60."}
```

### Cara mengenali jenisnya

Tanyakan: "Kalau besaran pertama bertambah, besaran kedua **bertambah** atau **berkurang**?" Bertambah berarti senilai (cek rasio tetap). Berkurang berarti berbalik nilai (cek hasil kali tetap). Tidak semua yang "bertambah bersama" itu senilai, jadi tetap cek rasionya.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Jarak pada peta

```soal
{
 "title": "Jarak pada peta",
 "text": "Peta berskala $1 : 50.000$. (a) Jarak dua desa di peta 6 cm. Berapa km jarak sebenarnya? (b) Jarak sebenarnya dua pantai 7,5 km. Berapa cm di peta?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Ubah skala. 1 cm di peta mewakili berapa km?",
   "answer": "0,5",
   "hint": "50.000 cm dibagi 100.000 (karena 1 km = 100.000 cm).",
   "explain": "50.000 cm = 500 m = 0,5 km.",
   "error": "salah-langkah-materi",
   "suffix": "km"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Hitung (a). 6 cm di peta mewakili berapa km?",
   "answer": "3",
   "hint": "Setiap 1 cm mewakili 0,5 km. Kalikan dengan 6.",
   "explain": "$6 \\times 0{,}5 = 3$ km.",
   "error": "salah-langkah-materi",
   "suffix": "km"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung (b). 7,5 km sebenarnya digambar berapa cm di peta?",
   "answer": "15",
   "hint": "Ada berapa kali 0,5 km di dalam 7,5 km?",
   "explain": "$7{,}5 \\div 0{,}5 = 15$ cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $15 \\times 0{,}5 = ?$",
   "answer": "7,5",
   "hint": "Kalau benar, hasilnya kembali ke jarak sebenarnya.",
   "explain": "15 × 0,5 = 7,5 km. Cocok.",
   "error": "salah-langkah-materi",
   "suffix": "km"
  }
 ],
 "conclusion": "Jadi (a) 3 km dan (b) 15 cm."
}
```

### Contoh 2: Luas pada peta

```soal
{
 "title": "Luas pada peta",
 "text": "Pada peta berskala $1 : 50.000$, sebuah danau digambar dengan luas $4 \\text{ cm}^2$. Berapa luas danau sebenarnya dalam $\\text{km}^2$?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Skala panjang. 1 cm mewakili berapa km?",
   "answer": "0,5",
   "hint": "50.000 cm diubah ke km.",
   "explain": "1 cm mewakili 0,5 km.",
   "error": "salah-langkah-materi",
   "suffix": "km"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Skala luas. $1 \\text{ cm}^2$ mewakili berapa $\\text{km}^2$?",
   "answer": "0,25",
   "hint": "Luas punya dua arah: panjang dan lebar. Kalikan 0,5 dengan 0,5.",
   "explain": "$0{,}5 \\times 0{,}5 = 0{,}25 \\text{ km}^2$.",
   "error": "salah-langkah-materi",
   "suffix": "km²"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Kalikan. $4 \\text{ cm}^2$ mewakili berapa $\\text{km}^2$?",
   "answer": "1",
   "hint": "Kalikan 4 dengan skala luas.",
   "explain": "$4 \\times 0{,}25 = 1 \\text{ km}^2$.",
   "error": "salah-langkah-materi",
   "suffix": "km²"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: Danau di peta bisa dibayangkan persegi 2 cm × 2 cm. Ukuran sebenarnya?",
   "options": [
    "1 km × 1 km",
    "2 km × 2 km",
    "0,5 km × 0,5 km"
   ],
   "answer": "1 km × 1 km",
   "hint": "2 cm mewakili 2 × 0,5 km.",
   "explain": "2 cm mewakili 1 km, jadi luasnya 1 km × 1 km = 1 km². Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi luas danau sebenarnya $1 \\text{ km}^2$."
}
```

### Contoh 3: Perbandingan senilai

```soal
{
 "title": "Perbandingan senilai",
 "text": "Harga 5 kg beras Rp67.500. Harga berbanding lurus dengan berat. (a) Tulis rumus harga $y$ untuk $x$ kg. (b) Berapa harga 8 kg?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Kenali jenis. Beras bertambah, harga ...",
   "options": [
    "bertambah, jadi senilai: $y = kx$",
    "berkurang, jadi berbalik nilai: $xy = k$"
   ],
   "answer": "bertambah, jadi senilai: $y = kx$",
   "hint": "Bayangkan membeli lebih banyak beras.",
   "explain": "Beras bertambah, harga ikut bertambah dengan rasio tetap. Ini lift: senilai.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Cari $k = \\frac{67.500}{5}$.",
   "answer": "13.500",
   "hint": "Bagi harga dengan beratnya.",
   "explain": "k = 13.500, yaitu harga 1 kg.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "choice",
   "prompt": "Rumus harganya adalah ...",
   "options": [
    "$y = 13.500x$",
    "$y = 67.500x$",
    "$y = \\frac{13.500}{x}$"
   ],
   "answer": "$y = 13.500x$",
   "hint": "Senilai berbentuk $y = kx$.",
   "explain": "Dengan $k = 13.500$, rumusnya $y = 13.500x$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Hitung harga 8 kg.",
   "answer": "108.000",
   "hint": "Hitung $13.500 \\times 8$.",
   "explain": "13.500 × 8 = 108.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $\\frac{108.000}{8} = ?$",
   "answer": "13.500",
   "hint": "Rasionya harus sama dengan rasio awal.",
   "explain": "Rasionya 13.500, sama dengan awal. Benar.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Jadi $y = 13.500x$ dan harga 8 kg adalah Rp108.000."
}
```

### Contoh 4: Soal cerita berbalik nilai

```soal
{
 "title": "Soal cerita berbalik nilai",
 "text": "Enam tukang dapat memasang pagar dalam 10 hari. Tukangnya ditambah menjadi 15 orang yang bekerja sama cepat. Berapa hari pagar selesai?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Kenali jenis. Tukang bertambah, hari ...",
   "options": [
    "berkurang, jadi berbalik nilai",
    "bertambah, jadi senilai"
   ],
   "answer": "berkurang, jadi berbalik nilai",
   "hint": "Makin banyak orang bekerja, makin cepat atau makin lama?",
   "explain": "Tukang bertambah, hari berkurang: jungkat-jungkit, berbalik nilai.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Cari kerja total. 6 tukang × 10 hari = ?",
   "answer": "60",
   "hint": "Kalikan banyak tukang dengan banyak hari.",
   "explain": "k = 60 hari-orang.",
   "error": "salah-langkah-materi",
   "suffix": "hari-orang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Bagi kerja total dengan 15 tukang.",
   "answer": "4",
   "hint": "60 dibagi 15.",
   "explain": "60 ÷ 15 = 4 hari.",
   "error": "salah-langkah-materi",
   "suffix": "hari"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 15 × 4 = ?",
   "answer": "60",
   "hint": "Hasil kali harus sama dengan kerja total.",
   "explain": "15 × 4 = 60. Cocok, dan masuk akal: lebih banyak tukang, lebih sedikit hari.",
   "error": "salah-langkah-materi",
   "suffix": "hari-orang"
  }
 ],
 "conclusion": "Jadi pagar selesai dalam 4 hari."
}
```

## Kesalahan yang sering terjadi

- **Satuan tidak disamakan.** Pada skala $1 : 50.000$, menulis 6 cm di peta = 300.000 km. Hasilnya dalam cm, bukan km. Ubah: 300.000 cm = 3 km.
- **Skala luas tidak dikuadratkan.** Menulis $4 \text{ cm}^2$ mewakili $4 \times 0{,}5 = 2 \text{ km}^2$. Luas punya dua arah, jadi pakai $0{,}5^2 = 0{,}25$.
- **Memakai cara senilai pada soal berbalik nilai.** Pada Contoh 4 menghitung $\frac{15}{6} \times 10 = 25$ hari. Lebih banyak tukang kok lebih lama? Selalu tanya dulu: bertambah atau berkurang?
- **Menganggap "naik bersama" pasti senilai.** Tarif taksi Rp10.000 + Rp4.000/km naik bersama jarak, tetapi rasionya tidak tetap karena ada biaya awal. Itu bukan perbandingan senilai.

## Ringkasan

- Skala $1 : n$: 1 cm di peta mewakili $n$ cm sebenarnya. Samakan satuan.
- Skala luas: kuadratkan skala panjang.
- Senilai: $y = kx$, rasio $\frac{y}{x}$ tetap, seperti lift.
- Berbalik nilai: $xy = k$ atau $y = \frac{k}{x}$, hasil kali tetap, seperti jungkat-jungkit.
- Cari $k$ dari data yang diketahui, lalu pakai untuk nilai baru. Cek dengan rasio atau hasil kali.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Peta berskala $1 : 200.000$. Jarak dua kota di peta 4,5 cm. Berapa km jarak sebenarnya?",
 "steps": [
  {
   "kind": "number",
   "prompt": "1 cm di peta mewakili berapa km?",
   "answer": "2",
   "hint": "200.000 cm dibagi 100.000.",
   "explain": "200.000 cm = 2 km.",
   "error": "salah-langkah-materi",
   "suffix": "km"
  },
  {
   "kind": "number",
   "prompt": "Jarak sebenarnya berapa km?",
   "answer": "9",
   "hint": "Kalikan 4,5 dengan 2.",
   "explain": "4,5 × 2 = 9 km.",
   "error": "salah-langkah-materi",
   "suffix": "km"
  }
 ],
 "conclusion": "Jarak sebenarnya 9 km."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Jarak sebenarnya Denpasar ke Ubud kira-kira 24 km. Berapa cm jaraknya pada peta berskala $1 : 300.000$?",
 "steps": [
  {
   "kind": "number",
   "prompt": "1 cm di peta mewakili berapa km?",
   "answer": "3",
   "hint": "300.000 cm dibagi 100.000.",
   "explain": "300.000 cm = 3 km.",
   "error": "salah-langkah-materi",
   "suffix": "km"
  },
  {
   "kind": "number",
   "prompt": "Jarak di peta berapa cm?",
   "answer": "8",
   "hint": "Ada berapa kali 3 km di dalam 24 km?",
   "explain": "24 ÷ 3 = 8 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Jaraknya 8 cm di peta."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Pada peta berskala $1 : 20.000$, sebuah kebun digambar dengan luas $5 \\text{ cm}^2$. Berapa luas kebun sebenarnya dalam $\\text{km}^2$?",
 "steps": [
  {
   "kind": "number",
   "prompt": "1 cm di peta mewakili berapa km?",
   "answer": "0,2",
   "hint": "20.000 cm dibagi 100.000.",
   "explain": "20.000 cm = 0,2 km.",
   "error": "salah-langkah-materi",
   "suffix": "km"
  },
  {
   "kind": "number",
   "prompt": "$1 \\text{ cm}^2$ mewakili berapa $\\text{km}^2$?",
   "answer": "0,04",
   "hint": "Kuadratkan skala panjang: 0,2 × 0,2.",
   "explain": "0,2 × 0,2 = 0,04 km².",
   "error": "salah-langkah-materi",
   "suffix": "km²"
  },
  {
   "kind": "number",
   "prompt": "Luas kebun sebenarnya?",
   "answer": "0,2",
   "hint": "Kalikan 5 dengan 0,04.",
   "explain": "5 × 0,04 = 0,2 km².",
   "error": "salah-langkah-materi",
   "suffix": "km²"
  }
 ],
 "conclusion": "Luas kebun $0{,}2 \\text{ km}^2$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Sebuah mobil menghabiskan 6 liter bensin untuk 84 km. Berapa liter untuk 210 km, jika pemakaian bensin berbanding lurus dengan jarak?",
 "steps": [
  {
   "kind": "number",
   "prompt": "1 liter cukup untuk berapa km?",
   "answer": "14",
   "hint": "Bagi 84 dengan 6.",
   "explain": "84 ÷ 6 = 14 km per liter.",
   "error": "salah-langkah-materi",
   "suffix": "km"
  },
  {
   "kind": "number",
   "prompt": "Untuk 210 km butuh berapa liter?",
   "answer": "15",
   "hint": "Ada berapa kali 14 km di dalam 210 km?",
   "explain": "210 ÷ 14 = 15 liter.",
   "error": "salah-langkah-materi",
   "suffix": "liter"
  },
  {
   "kind": "number",
   "prompt": "Cek: 15 liter × 14 km = ?",
   "answer": "210",
   "hint": "Kalikan.",
   "explain": "15 × 14 = 210 km. Cocok.",
   "error": "salah-langkah-materi",
   "suffix": "km"
  }
 ],
 "conclusion": "Butuh 15 liter bensin."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "$y$ berbanding terbalik dengan $x$. Jika $y = 12$ saat $x = 3$, tentukan $y$ saat $x = 9$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Cari $k = xy$.",
   "answer": "36",
   "hint": "Kalikan 12 dengan 3.",
   "explain": "k = 3 × 12 = 36.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Saat $x = 9$, $y = ?$",
   "answer": "4",
   "hint": "$y = \\frac{k}{x}$.",
   "explain": "36 ÷ 9 = 4. Masuk akal: $x$ tiga kali lipat, $y$ menjadi sepertiganya.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $y = 4$."
}
```
