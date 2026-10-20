---
id: smp1-12-penyajian-data
judul: Penyajian Data
jenjang: smp1
moe: "Secondary 1 · Statistics and Probability · S1 Data handling and analysis"
prasyarat: [sd4-14-tabel-diagram, smp1-05-persentase]
durasi_menit: 50
---

## Kenapa belajar ini?

Berita, iklan, dan laporan sekolah sering memakai diagram. Diagram yang baik membuat data mudah dipahami dalam sekejap. Diagram yang buruk, kadang sengaja, bisa membuat kita salah menilai. Di topik ini kamu belajar menyajikan data dengan benar dan mengenali diagram yang menyesatkan.

## Analogi

Bayangkan data sebagai **pemandangan**, dan setiap jenis penyajian adalah **kacamata** yang berbeda:

- **Tabel** adalah kacamata baca: semua angka terlihat tepat.
- **Diagram batang** adalah kacamata pembanding: mana yang paling banyak, mana yang paling sedikit.
- **Diagram garis** adalah kacamata waktu: naik atau turun dari bulan ke bulan.
- **Diagram lingkaran** adalah kacamata "bagian dari keseluruhan": berapa bagian dari 100%.
- **Piktogram** adalah kacamata menarik: cepat dimengerti, tetapi kurang teliti.

```visual
{"type": "table", "head": ["Buah", "Frekuensi"], "rows": [["Mangga", "8"], ["Jeruk", "5"], ["Pisang", "4"], ["Salak", "3"]], "caption": "Kacamata baca: tabel menampilkan angka tepat"}
```

```visual
{"type": "barChart", "scaleStep": 2, "max": 10, "title": "Buah kesukaan 20 siswa", "unit": "siswa", "bars": [{"label": "Mangga", "value": 8}, {"label": "Jeruk", "value": 5}, {"label": "Pisang", "value": 4}, {"label": "Salak", "value": 3}], "caption": "Kacamata pembanding: data yang sama sebagai diagram batang"}
```

Ada juga **cermin lucu** di pasar malam yang membuat orang tampak gemuk atau kurus. Diagram yang menyesatkan seperti cermin lucu: datanya benar, tetapi bentuknya dibengkokkan.

## Konsep

### Mengumpulkan, menggolongkan, dan menabelkan data

1. **Kumpulkan** data, misalnya dengan angket, wawancara, atau pengamatan.
2. **Golongkan** data ke kategori yang jelas dan tidak tumpang-tindih.
3. **Tabelkan** dengan **turus** (tally) lalu hitung **frekuensi**, yaitu berapa kali setiap kategori muncul. Turus ditulis per lima: empat garis tegak lalu satu garis melintang.

Jumlah semua frekuensi harus sama dengan banyak data. Ini cara cek yang penting.

### Diagram batang

Setiap kategori digambar sebagai batang. **Tinggi batang = frekuensi.** Batang memiliki lebar sama dan diberi jarak. Sumbu tegak harus **mulai dari 0**.

- Kelebihan: mudah membandingkan kategori.
- Kekurangan: kurang cocok untuk melihat bagian dari keseluruhan.

### Piktogram

Data digambar dengan simbol. Setiap simbol mewakili jumlah tertentu yang ditulis di **keterangan**.

```visual
{"type": "pictogram", "item": "buku", "scale": 4, "title": "Buku yang dibaca bulan ini", "rows": [{"label": "Budi", "value": 12}, {"label": "Siti", "value": 20}, {"label": "Made", "value": 10}], "caption": "Satu gambar = 4 buku, setengah gambar = 2 buku"}
```

Di sini Budi membaca 12 buku, Siti 20 buku, dan Made 8 + 2 = 10 buku.

- Kelebihan: menarik dan mudah dibaca anak-anak.
- Kekurangan: sulit menunjukkan nilai yang tidak pas dengan simbol, jadi kurang tepat.

### Diagram garis

Titik-titik data digambar menurut **waktu**, lalu dihubungkan garis. Cocok untuk suhu harian, penjualan bulanan, atau tinggi tanaman dari minggu ke minggu.

- Kelebihan: kecenderungan naik atau turun terlihat jelas.
- Kekurangan: tidak cocok untuk kategori yang tidak berurutan, seperti jenis buah.

### Diagram lingkaran

Lingkaran $360^\circ$ dibagi menjadi juring. Besar sudut juring sebanding dengan frekuensi:

$$\text{sudut juring} = \frac{\text{frekuensi}}{\text{jumlah semua data}} \times 360^\circ$$

Kenapa $360^\circ$? Karena seluruh data (100%) digambar sebagai satu lingkaran penuh.

```anim
{"type": "pecahan", "parts": 20, "shaded": 8, "shape": "lingkaran", "name": "8 dari 20 siswa", "title": "Juring mangga: 8 dari 20 siswa"}
```

Setiap siswa mendapat $\frac{360^\circ}{20} = 18^\circ$, jadi juring mangga $8 \times 18^\circ = 144^\circ$.

- Kelebihan: bagian dari keseluruhan terlihat jelas.
- Kekurangan: sulit membandingkan juring yang hampir sama besar; nilai tepat tidak terlihat tanpa label.

### Diagram yang menyesatkan

Beberapa cara cermin lucu bekerja:

- **Sumbu tegak tidak mulai dari 0.** Selisih kecil tampak sangat besar.
- **Skala sumbu tidak rata.** Jarak 0 ke 10 sama dengan jarak 10 ke 100.
- **Simbol atau gambar diperbesar ke dua arah.** Gambar yang tingginya dua kali juga lebarnya dua kali, sehingga luasnya tampak empat kali.
- **Diagram 3D yang dimiringkan.** Juring di depan tampak lebih besar.
- **Tanpa judul, label, atau satuan.**

Bandingkan dengan diagram jujur berikut. Toko A menjual 55 ponsel dan Toko B 50 ponsel. Kalau sumbu dimulai dari 45, batang A tampak dua kali batang B. Dengan sumbu dari 0, keduanya tampak hampir sama, sesuai kenyataan:

```visual
{"type": "barChart", "scaleStep": 10, "max": 60, "title": "Penjualan ponsel", "unit": "ponsel", "bars": [{"label": "Toko A", "value": 55}, {"label": "Toko B", "value": 50}], "caption": "Sumbu tegak mulai dari 0: selisihnya kecil"}
```

Saat membaca diagram, selalu periksa angka di sumbu, bukan hanya bentuknya.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menabelkan data

```soal
{
 "title": "Contoh 1",
 "text": "Buah kesukaan 20 siswa (M = mangga, J = jeruk, P = pisang, S = salak): M J P M S M J P M M J S P M J M P J M S. Buat tabel frekuensi.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Ada berapa kategori buah?",
   "answer": "4",
   "hint": "M, J, P, S.",
   "explain": "Empat kategori, setiap data masuk tepat satu.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2–3: Beri turus dan hitung. Frekuensi mangga?",
   "answer": "8",
   "hint": "Hitung semua huruf M, coret yang sudah dihitung.",
   "explain": "Mangga 8.",
   "error": "salah-membilang-benda"
  },
  {
   "kind": "number",
   "prompt": "Frekuensi jeruk?",
   "answer": "5",
   "hint": "Hitung huruf J.",
   "explain": "Jeruk 5.",
   "error": "salah-membilang-benda"
  },
  {
   "kind": "number",
   "prompt": "Frekuensi pisang?",
   "answer": "4",
   "hint": "Hitung huruf P.",
   "explain": "Pisang 4, sehingga salak 3.",
   "error": "salah-membilang-benda"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 8 + 5 + 4 + 3 = ?",
   "answer": "20",
   "hint": "Harus sama dengan banyak siswa.",
   "explain": "20. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Mangga 8, jeruk 5, pisang 4, salak 3.",
 "visual": {
  "type": "table",
  "head": [
   "Buah",
   "Turus",
   "Frekuensi"
  ],
  "rows": [
   [
    "Mangga",
    "?",
    "?"
   ],
   [
    "Jeruk",
    "?",
    "?"
   ],
   [
    "Pisang",
    "?",
    "?"
   ],
   [
    "Salak",
    "?",
    "?"
   ]
  ]
 }
}
```

### Contoh 2: Menghitung sudut diagram lingkaran

```soal
{
 "title": "Contoh 2",
 "text": "Gambarkan data Contoh 1 (mangga 8, jeruk 5, pisang 4, salak 3) sebagai diagram lingkaran. Hitung sudut setiap juring.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Sudut per siswa = 360° ÷ 20 = ?",
   "answer": "18",
   "hint": "Seluruh lingkaran untuk 20 siswa.",
   "explain": "18° per siswa.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Juring mangga = 8 × 18° = ?",
   "answer": "144",
   "hint": "Kalikan frekuensi.",
   "explain": "144°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Juring jeruk?",
   "answer": "90",
   "hint": "5 × 18°.",
   "explain": "90°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Juring pisang?",
   "answer": "72",
   "hint": "4 × 18°.",
   "explain": "72°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Juring salak?",
   "answer": "54",
   "hint": "3 × 18°.",
   "explain": "54°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: jumlah semua juring?",
   "answer": "360",
   "hint": "144 + 90 + 72 + 54.",
   "explain": "360°, lingkaran penuh.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "Mangga 144°, jeruk 90°, pisang 72°, salak 54°."
}
```

### Contoh 3: Mengenali diagram yang menyesatkan

```soal
{
 "title": "Contoh 3",
 "text": "Iklan Toko A memasang diagram batang: Toko A menjual 55 ponsel, Toko B 50 ponsel. Sumbu tegaknya mulai dari 45. Batang Toko A tampak dua kali tinggi batang Toko B. Benarkah Toko A menjual dua kali lipat?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Tinggi batang Toko A yang terlihat (55 − 45)?",
   "answer": "10",
   "hint": "Ukur dari 45.",
   "explain": "10 satuan; Toko B 5 satuan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Selisih penjualan sebenarnya?",
   "answer": "5",
   "hint": "55 − 50.",
   "explain": "5 ponsel.",
   "error": "salah-langkah-materi",
   "suffix": "ponsel"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Selisih itu berapa persen dari penjualan Toko B?",
   "answer": "10",
   "hint": "$\\frac{5}{50} \\times 100\\%$.",
   "explain": "Hanya 10% lebih banyak.",
   "error": "salah-langkah-materi",
   "suffix": "%"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Cara memperbaiki diagram",
   "options": [
    "Mulai sumbu tegak dari 0",
    "Perlebar batang Toko A",
    "Hapus angka di sumbu"
   ],
   "answer": "Mulai sumbu tegak dari 0",
   "hint": "Apa yang membuat selisih tampak besar?",
   "explain": "Dengan sumbu dari 0, batang 55 dan 50 tampak hampir sama.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Tidak. Toko A hanya menjual 10% lebih banyak; diagramnya menyesatkan karena sumbu tidak mulai dari 0."
}
```

### Contoh 4: Soal cerita membaca diagram lingkaran

```soal
{
 "title": "Contoh 4",
 "text": "Uang saku Putu sebulan Rp600.000. Diagram lingkaran pengeluarannya: makan 150°, transportasi 90°, tabungan 72°, lain-lain 48°. Berapa rupiah untuk setiap bagian?",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Langkah 1: Juring makan adalah pecahan berapa dari lingkaran? ($\\frac{150}{360}$ paling sederhana)",
   "answer": {
    "num": 5,
    "den": 12
   },
   "hint": "Bagi pembilang dan penyebut dengan 30.",
   "explain": "$\\frac{150}{360} = \\frac{5}{12}$.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Uang makan?",
   "answer": "250000",
   "hint": "$\\frac{5}{12} \\times 600.000$.",
   "explain": "Rp250.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Uang transportasi (90°)?",
   "answer": "150000",
   "hint": "90° adalah seperempat lingkaran.",
   "explain": "Rp150.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Uang tabungan (72°)?",
   "answer": "120000",
   "hint": "$\\frac{72}{360} = \\frac{1}{5}$.",
   "explain": "Rp120.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Uang lain-lain (48°)?",
   "answer": "80000",
   "hint": "$\\frac{48}{360} = \\frac{2}{15}$.",
   "explain": "Rp80.000.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: jumlah keempatnya?",
   "answer": "600000",
   "hint": "Jumlahkan.",
   "explain": "Rp600.000, sama dengan uang saku.",
   "error": "salah-langkah-materi",
   "prefix": "Rp"
  }
 ],
 "conclusion": "Makan Rp250.000, transportasi Rp150.000, tabungan Rp120.000, lain-lain Rp80.000."
}
```

## Kesalahan yang sering terjadi

- **Jumlah frekuensi tidak sama dengan banyak data.** Biasanya ada data terlewat atau terhitung dua kali. Hitung ulang turus.
- **Sudut juring dihitung dari 100, bukan 360.** Menulis mangga $\frac{8}{20} \times 100 = 40^\circ$. Itu persen (40%), bukan sudut. Sudutnya $\frac{8}{20} \times 360^\circ = 144^\circ$.
- **Memakai diagram garis untuk kategori.** Menghubungkan mangga, jeruk, pisang dengan garis tidak bermakna, karena tidak ada urutan waktu.
- **Hanya melihat bentuk diagram.** Pada Contoh 3, menyimpulkan "dua kali lipat" tanpa membaca angka sumbu.
- **Lupa keterangan piktogram.** Tanpa keterangan "1 simbol = 4 buku", piktogram tidak bisa dibaca.

## Ringkasan

- Kumpulkan, golongkan, lalu tabelkan dengan turus dan frekuensi. Cek jumlahnya.
- Batang untuk membandingkan, garis untuk perubahan waktu, lingkaran untuk bagian dari keseluruhan, piktogram untuk tampilan menarik.
- Sudut juring $= \frac{\text{frekuensi}}{\text{jumlah}} \times 360^\circ$.
- Diagram menyesatkan: sumbu tidak dari 0, skala tidak rata, gambar diperbesar dua arah, efek 3D.
- Selalu baca judul, label, satuan, dan angka sumbu.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Diagram apa yang paling cocok untuk menyajikan suhu udara setiap hari selama seminggu?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Pilih diagram",
   "options": [
    "Diagram garis",
    "Diagram lingkaran",
    "Piktogram",
    "Diagram batang"
   ],
   "answer": "Diagram garis",
   "hint": "Datanya berubah menurut apa?",
   "explain": "Suhu berubah menurut waktu.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Alasannya",
   "options": [
    "Naik turun dari hari ke hari terlihat jelas",
    "Bagian dari keseluruhan terlihat jelas",
    "Lebih menarik untuk anak-anak"
   ],
   "answer": "Naik turun dari hari ke hari terlihat jelas",
   "hint": "Kacamata waktu.",
   "explain": "Diagram garis menunjukkan kecenderungan naik atau turun.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Diagram garis, karena data berubah menurut waktu."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Dari 30 siswa, 12 siswa berjalan kaki ke sekolah. Berapa sudut juring untuk \"jalan kaki\" pada diagram lingkaran?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Sudut per siswa = 360° ÷ 30 = ?",
   "answer": "12",
   "hint": "Seluruh lingkaran untuk 30 siswa.",
   "explain": "12° per siswa.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Sudut juring jalan kaki?",
   "answer": "144",
   "hint": "12 × 12°.",
   "explain": "144°.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  }
 ],
 "conclusion": "Sudut juringnya 144°."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Pada diagram lingkaran, juring 90° mewakili 45 siswa. Berapa banyak siswa seluruhnya?",
 "steps": [
  {
   "kind": "fraction",
   "prompt": "Juring 90° adalah pecahan berapa dari lingkaran?",
   "answer": {
    "num": 1,
    "den": 4
   },
   "hint": "90 dari 360.",
   "explain": "Seperempat lingkaran.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Banyak siswa seluruhnya?",
   "answer": "180",
   "hint": "Seperempat = 45 siswa.",
   "explain": "45 × 4 = 180 siswa.",
   "error": "salah-langkah-materi",
   "suffix": "siswa"
  }
 ],
 "conclusion": "Seluruhnya 180 siswa."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Pada piktogram, 1 simbol mewakili 4 buku. Baris Siti berisi 3 simbol utuh dan setengah simbol. Berapa buku Siti?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Setengah simbol mewakili berapa buku?",
   "answer": "2",
   "hint": "Setengah dari 4.",
   "explain": "2 buku.",
   "error": "lupa-skala-piktogram",
   "suffix": "buku"
  },
  {
   "kind": "number",
   "prompt": "Banyak buku Siti?",
   "answer": "14",
   "hint": "3 × 4 + 2.",
   "explain": "14 buku.",
   "error": "lupa-skala-piktogram",
   "suffix": "buku"
  }
 ],
 "conclusion": "Siti membaca 14 buku.",
 "visual": {
  "type": "pictogram",
  "item": "buku",
  "scale": 4,
  "rows": [
   {
    "label": "Siti",
    "value": 14
   }
  ]
 }
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Diagram batang menunjukkan nilai rata-rata kelas 7A 80 dan kelas 7B 88, dengan sumbu tegak mulai dari 76. Batang 7B tampak berapa kali tinggi batang 7A? Berapa persen sebenarnya nilai 7B lebih tinggi?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Tinggi batang 7B yang terlihat (88 − 76)?",
   "answer": "12",
   "hint": "Ukur dari 76.",
   "explain": "12 satuan; 7A hanya 4 satuan.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Batang 7B tampak berapa kali batang 7A?",
   "answer": "3",
   "hint": "12 ÷ 4.",
   "explain": "Tampak 3 kali.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Sebenarnya 7B lebih tinggi berapa persen?",
   "answer": "10",
   "hint": "$\\frac{88 - 80}{80} \\times 100\\%$.",
   "explain": "Hanya 10%.",
   "error": "salah-langkah-materi",
   "suffix": "%"
  }
 ],
 "conclusion": "Tampak 3 kali, padahal hanya 10% lebih tinggi."
}
```
