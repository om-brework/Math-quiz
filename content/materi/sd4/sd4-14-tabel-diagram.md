---
id: sd4-14-tabel-diagram
judul: Tabel, Diagram Garis, dan Diagram Lingkaran
jenjang: sd4
moe: "Primary 4 · Statistics · Tables, Line Graphs and Pie Charts"
prasyarat: [sd3-14-diagram-batang, sd4-05-pecahan-dari-kumpulan]
durasi_menit: 35
---

## Kenapa belajar ini?

Guru mencatat jumlah siswa per kelas. Petani mencatat tinggi tanaman setiap minggu. Kamu mencatat ke mana uang sakumu pergi. Tabel dan diagram membantu membaca banyak data dengan cepat dan menjawab pertanyaan seperti "berapa total", "kapan naik paling banyak", atau "berapa bagiannya".

## Analogi

Bayangkan satu cerita data disimpan dengan tiga cara:

- **Tabel** seperti **lemari berlaci**. Setiap laci punya label baris dan label kolom. Untuk mencari isi, temukan baris dan kolom yang tepat, lalu buka lacinya.
- **Diagram garis** seperti **jejak pendaki gunung**. Garis yang naik berarti nilainya bertambah. Garis yang turun berarti berkurang. Garis datar berarti tetap. Semakin curam, semakin cepat berubah.

```anim
{"type": "grafik", "xmin": 0, "xmax": 6, "ymin": 0, "ymax": 10, "title": "Jejak pendaki: naik, datar, naik curam, turun", "kurva": [{"f": "2+3*(x-1)+(-3/2)*((x-2)+abs(x-2))+2*((x-3)+abs(x-3))+(-7/2)*((x-4)+abs(x-4))", "dari": 1, "sampai": 5}], "titik": [{"x": 1, "y": 2}, {"x": 2, "y": 5}, {"x": 3, "y": 5}, {"x": 4, "y": 9}, {"x": 5, "y": 6}], "langkah": [{"say": "Sumbu mendatar: waktu. Sumbu tegak: ketinggian.", "kurva": 0, "titik": 0}, {"say": "Jejak pendaki tergambar dari kiri ke kanan.", "kurva": 1, "titik": 0}, {"say": "Titik-titik data. Bagian 3 ke 4 paling curam: naik paling cepat. Bagian 2 ke 3 datar: tetap.", "kurva": 1, "titik": 5}]}
```

- **Diagram lingkaran** seperti **satu loyang martabak** yang dipotong. Seluruh martabak adalah keseluruhan data. Setiap potongan adalah bagian, ditulis sebagai pecahan.

```anim
{"type": "pecahan", "parts": 8, "shaded": 3, "shape": "lingkaran", "name": "martabak", "title": "Martabak dipotong 8: 3 potong adalah 3/8 bagian"}
```

## Konsep

### Tabel

Tabel menyusun data dalam **baris** dan **kolom**. Kolom "Jumlah" atau baris "Total" berisi hasil penjumlahan.

Untuk **melengkapi tabel dari data**, kelompokkan data lalu hitung. Contoh: buah kesukaan 10 siswa adalah mangga, jeruk, mangga, salak, mangga, jeruk, salak, mangga, jeruk, mangga. Dihitung menjadi:

```visual
{"type": "table", "head": ["Buah", "Banyak siswa"], "rows": [["Mangga", "5"], ["Jeruk", "3"], ["Salak", "2"], ["Total", "10"]]}
```

Kalau ada isi tabel yang hilang, gunakan hubungan **bagian + bagian = jumlah**. Bagian yang hilang = jumlah − bagian yang diketahui.

### Diagram garis

Diagram garis menunjukkan **perubahan dari waktu ke waktu**. Sumbu mendatar biasanya waktu (jam, hari, minggu). Sumbu tegak menunjukkan nilai. Titik-titik data dihubungkan dengan garis lurus.

```anim
{"type": "grafik", "xmin": 0, "xmax": 6, "ymin": 0, "ymax": 30, "title": "Tabungan Budi (ribu rupiah) bulan ke-1 sampai ke-5", "kurva": [{"f": "10+5*(x-1)+(-5/2)*((x-2)+abs(x-2))+5*((x-3)+abs(x-3))+(-15/2)*((x-4)+abs(x-4))", "dari": 1, "sampai": 5}], "titik": [{"x": 1, "y": 10}, {"x": 2, "y": 15}, {"x": 3, "y": 15}, {"x": 4, "y": 25}, {"x": 5, "y": 20}], "langkah": [{"say": "Bulan ke-1: Rp10 ribu. Bulan ke-2: Rp15 ribu, naik 5 ribu.", "kurva": 0, "titik": 2}, {"say": "Bulan ke-3 tetap Rp15 ribu: garis datar.", "kurva": 0, "titik": 3}, {"say": "Bulan ke-4 Rp25 ribu: naik 10 ribu, bagian paling curam. Bulan ke-5 turun ke Rp20 ribu.", "kurva": 0, "titik": 5}, {"say": "Titik-titik dihubungkan dengan garis lurus.", "kurva": 1, "titik": 5}]}
```

Cara membaca:

1. Baca judul dan label kedua sumbu. Perhatikan **skalanya**, misalnya setiap garis bantu bernilai 2.
2. Untuk mencari nilai pada waktu tertentu, naik dari sumbu mendatar sampai titik, lalu lihat ke sumbu tegak.
3. **Kenaikan** = nilai akhir − nilai awal. Bagian garis yang **paling curam** menunjukkan perubahan terbesar.

### Diagram lingkaran

Diagram lingkaran menunjukkan **bagian-bagian dari satu keseluruhan**. Seluruh lingkaran adalah 1. Setiap potongan ditulis sebagai pecahan.

```visual
{"type": "fraction", "shape": "circle", "parts": 4, "shaded": 1, "caption": "Potongan yang diarsir adalah 1/4 dari seluruh lingkaran"}
```

- Jumlah semua pecahan potongan = 1.
- Banyak benda dalam satu potongan = pecahan × jumlah keseluruhan. Ini sama dengan mencari pecahan dari suatu kumpulan.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Melengkapi tabel

```soal
{
 "title": "Kerjakan bersama",
 "text": "Lengkapi tabel banyak siswa kelas 4 di SD Harapan.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Buka laci 4B, Laki-laki. 32 − 17 = ?",
   "answer": "15",
   "hint": "Jumlah 4B dikurangi perempuan 4B.",
   "explain": "4B laki-laki 15 siswa.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Buka laci 4C, Perempuan. 33 − 18 = ?",
   "answer": "15",
   "hint": "Jumlah 4C dikurangi laki-laki 4C.",
   "explain": "4C perempuan 15 siswa.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Total laki-laki = 16 + 15 + 18 = ?",
   "answer": "49",
   "hint": "Jumlahkan kolom Laki-laki, tiga baris.",
   "explain": "Total laki-laki 49.",
   "error": "lupa-satu-baris"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Total perempuan = 14 + 17 + 15 = ?",
   "answer": "46",
   "hint": "Jumlahkan kolom Perempuan, tiga baris.",
   "explain": "Total perempuan 46.",
   "error": "lupa-satu-baris"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Total semua = 49 + 46 = ?",
   "answer": "95",
   "hint": "Jumlahkan kedua total.",
   "explain": "Total semua 95.",
   "error": "salah-fakta-tambah"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 30 + 32 + 33 = ?",
   "answer": "95",
   "hint": "Jumlahkan kolom Jumlah.",
   "explain": "95, sama dengan Langkah 5.",
   "error": "lupa-satu-baris"
  }
 ],
 "conclusion": "4B laki-laki 15, 4C perempuan 15, total laki-laki 49, total perempuan 46, total semua 95.",
 "visual": {
  "type": "table",
  "head": [
   "Kelas",
   "Laki-laki",
   "Perempuan",
   "Jumlah"
  ],
  "rows": [
   [
    "4A",
    "16",
    "14",
    "30"
   ],
   [
    "4B",
    "?",
    "17",
    "32"
   ],
   [
    "4C",
    "18",
    "?",
    "33"
   ],
   [
    "Total",
    "?",
    "?",
    "?"
   ]
  ]
 }
}
```

### Contoh 2: Membaca diagram garis

```anim
{"type": "grafik", "xmin": 0, "xmax": 7, "ymin": 0, "ymax": 18, "title": "Tinggi tanaman cabai Made (cm) minggu ke-1 sampai ke-6", "kurva": [{"f": "4+2*(x-1)+2*((x-3)+abs(x-3))-2*((x-4)+abs(x-4))-1*((x-5)+abs(x-5))", "dari": 1, "sampai": 6}], "titik": [{"x": 1, "y": 4}, {"x": 2, "y": 6}, {"x": 3, "y": 8}, {"x": 4, "y": 14}, {"x": 5, "y": 16}, {"x": 6, "y": 16}], "langkah": [{"say": "Sumbu mendatar: minggu ke-. Sumbu tegak: tinggi (cm).", "kurva": 0, "titik": 0}, {"say": "Titik-titik hasil pengukuran setiap minggu.", "kurva": 0, "titik": 6}, {"say": "Titik dihubungkan dengan garis lurus.", "kurva": 1, "titik": 6}]}
```

```soal
{
 "title": "Kerjakan bersama",
 "text": "Made mengukur tinggi tanaman cabainya setiap minggu (lihat diagram garis di atas). (a) Berapa tinggi pada minggu ke-3? (b) Antara minggu berapa tanaman tumbuh paling banyak, dan berapa cm? (c) Kapan tanaman tidak bertambah tinggi? (d) Berapa cm tanaman tumbuh dari minggu ke-1 sampai ke-6?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Baca skala. Setiap garis bantu di sumbu tegak bernilai berapa cm?",
   "answer": "2",
   "hint": "Lihat angka-angka di sumbu tegak.",
   "explain": "Setiap garis bantu bernilai 2 cm.",
   "error": "salah-baca-skala",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jawab (a). Tinggi minggu ke-3 = ?",
   "answer": "8",
   "hint": "Naik dari angka 3 di sumbu mendatar sampai titik.",
   "explain": "Tinggi minggu ke-3 adalah 8 cm.",
   "error": "salah-baca-skala",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Kenaikan minggu ke-3 ke minggu ke-4 (14 − 8) = ?",
   "answer": "6",
   "hint": "Nilai akhir − nilai awal.",
   "explain": "Naik 6 cm. Kenaikan lain hanya 2, 2, 2, dan 0.",
   "error": "selisih-dijumlah",
   "suffix": "cm"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Jawab (b). Kapan tumbuh paling banyak?",
   "options": [
    "Minggu ke-3 ke minggu ke-4",
    "Minggu ke-5 ke minggu ke-6",
    "Minggu ke-1 ke minggu ke-2"
   ],
   "answer": "Minggu ke-3 ke minggu ke-4",
   "hint": "Cari bagian garis yang paling curam, bukan titik tertinggi.",
   "explain": "Minggu ke-3 ke ke-4, naik 6 cm.",
   "error": "salah-paling-banyak-sedikit"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Jawab (c). Kapan tidak bertambah tinggi?",
   "options": [
    "Minggu ke-3 ke minggu ke-4",
    "Minggu ke-5 ke minggu ke-6",
    "Minggu ke-1 ke minggu ke-2"
   ],
   "answer": "Minggu ke-5 ke minggu ke-6",
   "hint": "Cari bagian garis yang datar.",
   "explain": "Minggu ke-5 dan ke-6 sama-sama 16 cm.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 6: Jawab (d). 16 − 4 = ?",
   "answer": "12",
   "hint": "Tinggi minggu ke-6 dikurangi tinggi minggu ke-1.",
   "explain": "Tanaman tumbuh 12 cm.",
   "error": "jumlah-bukan-selisih",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 2 + 2 + 6 + 2 + 0 = ?",
   "answer": "12",
   "hint": "Jumlahkan semua kenaikan.",
   "explain": "12 cm, sama dengan (d).",
   "error": "salah-fakta-tambah",
   "suffix": "cm"
  }
 ],
 "conclusion": "(a) 8 cm. (b) Minggu ke-3 ke minggu ke-4, 6 cm. (c) Minggu ke-5 ke minggu ke-6. (d) 12 cm."
}
```

### Contoh 3: Soal cerita dengan diagram lingkaran

```soal
{
 "title": "Kerjakan bersama",
 "text": "Diagram lingkaran menunjukkan cara Siti memakai uang sakunya sebulan, Rp40.000. Lingkaran dibagi 8 potong sama besar: tabungan 2 potong, jajan 3 potong, transportasi 1 potong, sisanya buku. (a) Berapa bagian untuk buku? (b) Berapa rupiah untuk jajan? (c) Berapa rupiah lebih banyak uang jajan daripada tabungan?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Berapa potong untuk buku? 8 − (2 + 3 + 1) = ?",
   "answer": "2",
   "hint": "Seluruh lingkaran 8 potong.",
   "explain": "8 − 6 = 2 potong untuk buku.",
   "error": "lupa-satu-baris",
   "suffix": "potong"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Jawab (a). Bagian buku dalam bentuk paling sederhana?",
   "answer": {
    "num": 1,
    "den": 4
   },
   "hint": "2 dari 8 potong, lalu sederhanakan.",
   "explain": "2/8 = 1/4.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Nilai satu potong = Rp40.000 ÷ 8 = ?",
   "answer": "5.000",
   "hint": "Seluruh martabak Rp40.000 dibagi 8 potong.",
   "explain": "Satu potong Rp5.000.",
   "error": "salah-fakta-bagi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Jawab (b). Jajan 3 potong = ?",
   "answer": "15.000",
   "hint": "3 × Rp5.000.",
   "explain": "Jajan Rp15.000.",
   "error": "salah-fakta-kali",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Jawab (c). Tabungan 2 potong = Rp10.000. Selisih jajan dan tabungan = ?",
   "answer": "5.000",
   "hint": "Ditanya lebih banyak berapa: kurangkan.",
   "explain": "Rp15.000 − Rp10.000 = Rp5.000.",
   "error": "jumlah-bukan-selisih",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 10.000 + 15.000 + 5.000 + 10.000 = ?",
   "answer": "40.000",
   "hint": "Tabungan + jajan + transportasi + buku.",
   "explain": "Rp40.000, sama dengan uang saku.",
   "error": "salah-fakta-tambah",
   "prefix": "Rp"
  }
 ],
 "conclusion": "(a) $\\frac{1}{4}$. (b) Rp15.000. (c) Rp5.000.",
 "visual": {
  "type": "fraction",
  "shape": "circle",
  "parts": 8,
  "shaded": 3
 }
}
```

## Kesalahan yang sering terjadi

- **Salah membaca skala.** Menganggap setiap garis bantu bernilai 1, padahal 2. Selalu baca angka di sumbu tegak dulu.
- **Mengira titik tertinggi berarti kenaikan terbesar.** Pada Contoh 2, minggu ke-5 dan ke-6 paling tinggi, tetapi kenaikan terbesar terjadi antara minggu ke-3 dan ke-4. Kenaikan dilihat dari **selisih**, yaitu bagian garis yang paling curam.
- **Membuka laci yang salah di tabel.** Membaca baris 4C padahal ditanya 4B. Telusuri baris dan kolom dengan jari.
- **Lupa bahwa seluruh lingkaran adalah 1.** Pada diagram lingkaran, bagian yang tidak diketahui dicari dengan mengurangkan semua bagian lain dari keseluruhan.
- **Mengalikan pecahan dengan bilangan yang salah.** Menghitung bagian jajan dari jumlah tabungan, bukan dari Rp40.000. Pecahan selalu dari **keseluruhan** data.

## Ringkasan

- Tabel: cari baris dan kolom yang tepat. Bagian yang hilang = jumlah − bagian yang diketahui.
- Diagram garis menunjukkan perubahan dari waktu ke waktu. Naik = bertambah, turun = berkurang, datar = tetap.
- Kenaikan = nilai akhir − nilai awal. Bagian paling curam = perubahan terbesar.
- Diagram lingkaran: seluruh lingkaran = 1. Setiap bagian adalah pecahan dari keseluruhan.
- Nilai satu bagian = pecahan × jumlah keseluruhan.
- Selalu cek: total harus cocok.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

Gunakan tabel penjualan roti untuk soal 1 dan 2.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Lengkapi bagian yang kosong pada tabel penjualan roti.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Roti keju hari Selasa = 52 − 30 = ?",
   "answer": "22",
   "hint": "Jumlah dikurangi roti cokelat.",
   "explain": "Selasa roti keju 22.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Roti cokelat hari Rabu = 47 − 20 = ?",
   "answer": "27",
   "hint": "Jumlah dikurangi roti keju.",
   "explain": "Rabu roti cokelat 27.",
   "error": "salah-fakta-kurang"
  }
 ],
 "conclusion": "Selasa roti keju 22, Rabu roti cokelat 27.",
 "visual": {
  "type": "table",
  "head": [
   "Hari",
   "Roti cokelat",
   "Roti keju",
   "Jumlah"
  ],
  "rows": [
   [
    "Senin",
    "25",
    "18",
    "43"
   ],
   [
    "Selasa",
    "30",
    "?",
    "52"
   ],
   [
    "Rabu",
    "?",
    "20",
    "47"
   ]
  ]
 }
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Berapa roti cokelat yang terjual dari Senin sampai Rabu?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Roti cokelat hari Rabu (dari soal 1) = ?",
   "answer": "27",
   "hint": "47 − 20.",
   "explain": "27 roti.",
   "error": "salah-fakta-kurang"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 25 + 30 + 27 = ?",
   "answer": "82",
   "hint": "Jumlahkan ketiga hari.",
   "explain": "82 roti cokelat.",
   "error": "lupa-satu-baris",
   "suffix": "roti"
  }
 ],
 "conclusion": "82 roti cokelat.",
 "visual": {
  "type": "table",
  "head": [
   "Hari",
   "Roti cokelat",
   "Roti keju",
   "Jumlah"
  ],
  "rows": [
   [
    "Senin",
    "25",
    "18",
    "43"
   ],
   [
    "Selasa",
    "30",
    "?",
    "52"
   ],
   [
    "Rabu",
    "?",
    "20",
    "47"
   ]
  ]
 }
}
```

Gunakan diagram garis suhu udara ini untuk soal 3 dan 4.

```anim
{"type": "grafik", "xmin": 5, "xmax": 15, "ymin": 24, "ymax": 35, "title": "Suhu udara (°C) pukul 06.00 sampai 14.00 (sumbu mendatar: pukul)", "kurva": [{"f": "26+1*(x-6)+(1/4)*((x-8)+abs(x-8))+(-1/4)*((x-10)+abs(x-10))+(-3/4)*((x-12)+abs(x-12))", "dari": 6, "sampai": 14}], "titik": [{"x": 6, "y": 26}, {"x": 8, "y": 28}, {"x": 10, "y": 31}, {"x": 12, "y": 33}, {"x": 14, "y": 32}], "langkah": [{"say": "Sumbu mendatar: pukul 6, 8, 10, 12, 14. Sumbu tegak: suhu (°C).", "kurva": 0, "titik": 0}, {"say": "Titik-titik hasil pengukuran suhu.", "kurva": 0, "titik": 5}, {"say": "Titik dihubungkan dengan garis lurus.", "kurva": 1, "titik": 5}]}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Lihat diagram garis suhu di atas. Antara pukul berapa suhu naik paling banyak? Berapa derajat?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Kenaikan 06.00–08.00 (28 − 26) = ?",
   "answer": "2",
   "hint": "Nilai akhir − nilai awal.",
   "explain": "Naik 2 °C.",
   "error": "salah-baca-skala",
   "suffix": "°C"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kenaikan 08.00–10.00 (31 − 28) = ?",
   "answer": "3",
   "hint": "Nilai akhir − nilai awal.",
   "explain": "Naik 3 °C.",
   "error": "salah-baca-skala",
   "suffix": "°C"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Kenaikan 10.00–12.00 (33 − 31) = ?",
   "answer": "2",
   "hint": "Nilai akhir − nilai awal.",
   "explain": "Naik 2 °C.",
   "error": "salah-baca-skala",
   "suffix": "°C"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Kapan naik paling banyak?",
   "options": [
    "08.00–10.00",
    "06.00–08.00",
    "10.00–12.00",
    "12.00–14.00"
   ],
   "answer": "08.00–10.00",
   "hint": "Bandingkan ketiga kenaikan.",
   "explain": "Pukul 08.00–10.00, naik 3 °C.",
   "error": "salah-paling-banyak-sedikit"
  }
 ],
 "conclusion": "Pukul 08.00 sampai 10.00, naik 3 °C."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Lihat diagram garis suhu. Antara pukul berapa suhu turun? Berapa derajat?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Bagian garis mana yang turun?",
   "options": [
    "08.00–10.00",
    "06.00–08.00",
    "10.00–12.00",
    "12.00–14.00"
   ],
   "answer": "12.00–14.00",
   "hint": "Cari bagian yang arahnya ke bawah.",
   "explain": "Pukul 12.00–14.00, dari 33 °C ke 32 °C.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Turun berapa derajat? 33 − 32 = ?",
   "answer": "1",
   "hint": "Nilai awal − nilai akhir.",
   "explain": "Turun 1 °C.",
   "error": "salah-baca-skala",
   "suffix": "°C"
  }
 ],
 "conclusion": "Pukul 12.00 sampai 14.00, turun 1 °C."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Diagram lingkaran menunjukkan olahraga kesukaan 32 siswa: sepak bola $\\frac{1}{2}$, bulu tangkis $\\frac{1}{4}$, voli $\\frac{1}{8}$, dan renang $\\frac{1}{8}$. Berapa siswa menyukai bulu tangkis? Berapa siswa lebih banyak yang menyukai sepak bola daripada voli?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Bulu tangkis = 1/4 dari 32 = ?",
   "answer": "8",
   "hint": "32 ÷ 4.",
   "explain": "8 siswa.",
   "error": "salah-fakta-bagi",
   "suffix": "siswa"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Sepak bola = 1/2 dari 32 = ?",
   "answer": "16",
   "hint": "32 ÷ 2.",
   "explain": "16 siswa.",
   "error": "salah-fakta-bagi",
   "suffix": "siswa"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Voli = 1/8 dari 32 = ?",
   "answer": "4",
   "hint": "32 ÷ 8.",
   "explain": "4 siswa.",
   "error": "salah-fakta-bagi",
   "suffix": "siswa"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Selisih sepak bola dan voli = ?",
   "answer": "12",
   "hint": "Lebih banyak berapa: kurangkan.",
   "explain": "16 − 4 = 12 siswa.",
   "error": "jumlah-bukan-selisih",
   "suffix": "siswa"
  }
 ],
 "conclusion": "Bulu tangkis 8 siswa. Sepak bola 12 siswa lebih banyak daripada voli.",
 "visual": {
  "type": "fraction",
  "shape": "circle",
  "parts": 8,
  "shaded": 4
 }
}
```
