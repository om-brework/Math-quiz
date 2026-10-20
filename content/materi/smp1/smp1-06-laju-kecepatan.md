---
id: smp1-06-laju-kecepatan
judul: Laju dan Kecepatan
jenjang: smp1
moe: "Secondary 1 · Number and Algebra · N4 Rate and speed"
prasyarat: [sd5-07-laju, smp1-04-perbandingan]
durasi_menit: 45
---

## Kenapa belajar ini?

Berapa lama perjalanan dari Denpasar ke Singaraja? Berapa menit keran mengisi penuh bak mandi? Pertanyaan seperti ini dijawab dengan laju dan kecepatan. Kamu juga akan paham kenapa "kecepatan rata-rata" sering berbeda dari angka di spidometer.

## Analogi

Bayangkan jalan raya yang diberi **patok kilometer** di pinggirnya, satu patok setiap 1 km.

Kecepatan 60 km/jam artinya: **dalam 1 jam, kamu melewati 60 patok.** Itu saja. Kecepatan adalah "berapa patok per satu jam".

- Kalau perjalanan 2 jam dengan kecepatan tetap 60 km/jam, kamu melewati $2 \times 60 = 120$ patok.
- Kalau kamu sudah melewati 120 patok dalam 3 jam, rata-rata kamu melewati $120 \div 3 = 40$ patok per jam.

Kalau kita gambar banyak patok yang dilewati terhadap waktu, kecepatan tetap menghasilkan garis lurus:

```anim
{"type": "grafik", "title": "Jarak terhadap waktu pada 60 km/jam", "xmin": 0, "xmax": 3.5, "ymin": 0, "ymax": 220, "kurva": [{"f": "60x", "label": "\\text{jarak} = 60 \\times \\text{waktu}", "dari": 0, "sampai": 3.5}], "titik": [{"x": 1, "y": 60, "label": "1 jam, 60 km"}, {"x": 2, "y": 120, "label": "2 jam, 120 km"}], "langkah": [{"say": "Sumbu mendatar: waktu (jam). Sumbu tegak: jarak (km).", "kurva": 0}, {"say": "Kecepatan tetap 60 km/jam membuat garis lurus.", "kurva": 1}, {"say": "Setelah 1 jam, 60 patok terlewati.", "kurva": 1, "titik": 1}, {"say": "Setelah 2 jam, 2 × 60 = 120 patok.", "kurva": 1, "titik": 2}]}
```

Laju lain bekerja sama. Keran yang mengalirkan 15 liter/menit seperti "melewati 15 patok liter" setiap menit.

## Konsep

### Laju dan laju rata-rata

**Laju** adalah banyaknya suatu besaran **per satu satuan** besaran lain. Contoh: liter per menit, lembar per menit, rupiah per kg.

$$\text{laju rata-rata} = \frac{\text{jumlah total}}{\text{waktu total}}$$

Disebut "rata-rata" karena dalam kenyataan lajunya bisa naik turun. Kita menganggap lajunya seolah-olah sama sepanjang waktu.

### Kecepatan tetap

Benda bergerak dengan **kecepatan tetap** kalau dalam setiap selang waktu yang sama, jarak yang ditempuh juga sama. Misalnya setiap 10 menit selalu menempuh 5 km. Untuk kecepatan tetap:

$$\text{jarak} = \text{kecepatan} \times \text{waktu}$$

Dari rumus ini kita dapat dua bentuk lain:

$$\text{kecepatan} = \frac{\text{jarak}}{\text{waktu}}, \qquad \text{waktu} = \frac{\text{jarak}}{\text{kecepatan}}$$

Ketiganya sama saja. Kalau ragu, pikirkan patok: jarak = banyak patok, kecepatan = patok per jam.

### Kecepatan rata-rata

Di jalan nyata, motor kadang cepat, kadang lambat, kadang berhenti. Kecepatan rata-rata adalah:

$$\text{kecepatan rata-rata} = \frac{\text{jarak total}}{\text{waktu total}}$$

Waktu total termasuk waktu berhenti. Kecepatan rata-rata **bukan** rata-rata dari angka-angka kecepatan. Alasannya, kamu menghabiskan waktu lebih lama di bagian yang lambat, jadi bagian lambat lebih "berpengaruh".

```anim
{"type": "grafik", "title": "Perjalanan Pak Budi (Contoh 4)", "xmin": 0, "xmax": 2.6, "ymin": 0, "ymax": 140, "kurva": [{"f": "60x", "dari": 0, "sampai": 1.5, "label": "\\text{60 km/jam}"}, {"f": "90", "dari": 1.5, "sampai": 2, "label": "\\text{istirahat}"}, {"f": "90+80(x-2)", "dari": 2, "sampai": 2.5, "label": "\\text{80 km/jam}"}, {"f": "52x", "dari": 0, "sampai": 2.5, "label": "\\text{rata-rata 52 km/jam}"}], "titik": [{"x": 2.5, "y": 130, "label": "2,5 jam, 130 km"}], "langkah": [{"say": "90 km dengan 60 km/jam: 1,5 jam.", "kurva": 1}, {"say": "Istirahat 0,5 jam: jarak tidak bertambah, garis mendatar.", "kurva": 2}, {"say": "40 km dengan 80 km/jam: 0,5 jam, garis lebih curam.", "kurva": 3}, {"say": "Garis dari awal ke akhir: 130 km dalam 2,5 jam, yaitu 52 km/jam.", "kurva": 4, "titik": 1}]}
```

### Mengubah km/jam ke m/s

$1 \text{ km} = 1.000 \text{ m}$ dan $1 \text{ jam} = 3.600 \text{ s}$. Jadi

$$1 \text{ km/jam} = \frac{1.000 \text{ m}}{3.600 \text{ s}} = \frac{5}{18} \text{ m/s}$$

```anim
{"type": "persamaan", "title": "Mengubah 72 km/jam ke m/s", "baris": [{"tex": "72 \\text{ km/jam}", "say": "Mulai dari 72 km per jam."}, {"tex": "= \\frac{72 \\times 1.000 \\text{ m}}{3.600 \\text{ s}}", "say": "Ganti 1 km dengan 1.000 m dan 1 jam dengan 3.600 s.", "op": "satuan"}, {"tex": "= 72 \\times \\frac{5}{18} \\text{ m/s}", "say": "Sederhanakan 1.000/3.600 menjadi 5/18."}, {"tex": "= 20 \\text{ m/s}", "say": "Hasilnya lebih kecil dari 72, sesuai dugaan."}]}
```

- km/jam ke m/s: kalikan $\frac{5}{18}$ (atau bagi 3,6).
- m/s ke km/jam: kalikan $\frac{18}{5}$ (atau kali 3,6).

Cek kewajaran: angka dalam m/s selalu **lebih kecil** dari angka dalam km/jam, karena 1 m/s itu cukup cepat (3,6 km/jam).

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Laju keran

```soal
{
 "title": "Contoh 1",
 "text": "Sebuah keran mengisi 180 liter air dalam 12 menit dengan laju tetap. Berapa lajunya? Berapa menit untuk mengisi bak 300 liter?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Laju = 180 L ÷ 12 menit = ?",
   "answer": "15",
   "hint": "Liter per satu menit.",
   "explain": "15 L/menit.",
   "error": "salah-langkah-materi",
   "suffix": "L/menit"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Waktu untuk 300 L = 300 ÷ 15 = ?",
   "answer": "20",
   "hint": "Waktu = jumlah ÷ laju.",
   "explain": "20 menit.",
   "error": "salah-pilih-operasi",
   "suffix": "menit"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 15 × 20 = ?",
   "answer": "300",
   "hint": "Laju × waktu.",
   "explain": "300 liter. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "L"
  }
 ],
 "conclusion": "Lajunya 15 L/menit, dan bak 300 liter penuh dalam 20 menit."
}
```

### Contoh 2: Mengubah satuan kecepatan

```soal
{
 "title": "Contoh 2",
 "text": "Putu berlari 400 m dalam 1 menit 20 detik. Berapa kecepatannya dalam m/s dan km/jam? Siapa lebih cepat, Putu atau Siti yang bersepeda 15 km/jam?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 1 menit 20 detik = ? detik",
   "answer": "80",
   "hint": "1 menit = 60 detik.",
   "explain": "60 + 20 = 80 s.",
   "error": "salah-hitung-waktu",
   "suffix": "s"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kecepatan = 400 ÷ 80 = ?",
   "answer": "5",
   "hint": "Jarak dibagi waktu.",
   "explain": "5 m/s.",
   "error": "salah-langkah-materi",
   "suffix": "m/s"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Ubah ke km/jam (kali 3,6).",
   "answer": "18",
   "hint": "m/s ke km/jam angkanya membesar.",
   "explain": "5 × 3,6 = 18 km/jam.",
   "error": "salah-langkah-materi",
   "suffix": "km/jam"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Siapa lebih cepat?",
   "options": [
    "Putu",
    "Siti",
    "Sama cepat"
   ],
   "answer": "Putu",
   "hint": "Bandingkan 18 km/jam dengan 15 km/jam.",
   "explain": "18 > 15, jadi Putu lebih cepat.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Putu 5 m/s atau 18 km/jam, lebih cepat dari Siti."
}
```

### Contoh 3: Jarak dari kecepatan tetap

```soal
{
 "title": "Contoh 3",
 "text": "Sebuah kereta melaju dengan kecepatan tetap 72 km/jam. Berapa meter yang ditempuh dalam 45 detik?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Satuan kecepatan yang cocok untuk soal ini",
   "options": [
    "m/s",
    "km/jam",
    "km/menit"
   ],
   "answer": "m/s",
   "hint": "Waktunya detik dan jawaban diminta meter.",
   "explain": "Ubah ke m/s.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 72 km/jam = ? m/s",
   "answer": "20",
   "hint": "Kalikan $\\frac{5}{18}$ atau bagi 3,6.",
   "explain": "72 ÷ 3,6 = 20 m/s.",
   "error": "salah-langkah-materi",
   "suffix": "m/s"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Jarak = 20 × 45 = ?",
   "answer": "900",
   "hint": "Kecepatan × waktu.",
   "explain": "900 m.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 45 detik = 0,0125 jam. 72 × 0,0125 = ? km",
   "answer": "0,9",
   "hint": "Kalikan saja.",
   "explain": "0,9 km = 900 m. Sama.",
   "error": "salah-langkah-materi",
   "suffix": "km"
  }
 ],
 "conclusion": "Kereta menempuh 900 m."
}
```

### Contoh 4: Soal cerita kecepatan rata-rata

```soal
{
 "title": "Contoh 4",
 "text": "Pak Budi menempuh 90 km dengan kecepatan 60 km/jam, beristirahat 30 menit, lalu menempuh 40 km lagi dengan kecepatan 80 km/jam. Berapa kecepatan rata-rata seluruh perjalanan?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Waktu bagian pertama = 90 ÷ 60 = ?",
   "answer": "1,5",
   "hint": "Waktu = jarak ÷ kecepatan.",
   "explain": "1,5 jam.",
   "error": "salah-langkah-materi",
   "suffix": "jam"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 30 menit = ? jam",
   "answer": "0,5",
   "hint": "Setengah jam.",
   "explain": "0,5 jam.",
   "error": "waktu-seperti-desimal",
   "suffix": "jam"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Waktu bagian kedua = 40 ÷ 80 = ?",
   "answer": "0,5",
   "hint": "Waktu = jarak ÷ kecepatan.",
   "explain": "0,5 jam.",
   "error": "salah-langkah-materi",
   "suffix": "jam"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Waktu total (termasuk istirahat)?",
   "answer": "2,5",
   "hint": "1,5 + 0,5 + 0,5.",
   "explain": "2,5 jam. Jarak total 130 km.",
   "error": "salah-langkah-materi",
   "suffix": "jam"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Kecepatan rata-rata = 130 ÷ 2,5 = ?",
   "answer": "52",
   "hint": "Jarak total ÷ waktu total.",
   "explain": "52 km/jam, lebih kecil dari 60 karena ada istirahat.",
   "error": "salah-langkah-materi",
   "suffix": "km/jam"
  }
 ],
 "conclusion": "Kecepatan rata-rata 52 km/jam."
}
```

## Kesalahan yang sering terjadi

- **Merata-ratakan angka kecepatan.** Pada Contoh 4, menghitung $\frac{60 + 80}{2} = 70$ km/jam. Salah, karena waktu di tiap bagian berbeda dan ada waktu istirahat. Selalu pakai jarak total dibagi waktu total.
- **Satuan waktu tidak disamakan.** Menulis 1 jam 30 menit sebagai 1,3 jam. Yang benar 1,5 jam, karena 30 menit adalah setengah jam.
- **Salah arah konversi.** Mengubah 72 km/jam menjadi $72 \times 3{,}6 = 259{,}2$ m/s. Itu terlalu cepat. Angka m/s harus lebih kecil, jadi bagi 3,6.
- **Lupa waktu berhenti.** Waktu istirahat tetap masuk ke waktu total ketika menghitung kecepatan rata-rata.

## Ringkasan

- Laju = banyaknya per satu satuan. Laju rata-rata = jumlah total ÷ waktu total.
- Kecepatan tetap: jarak = kecepatan × waktu.
- Kecepatan rata-rata = jarak total ÷ waktu total (termasuk waktu berhenti).
- $1 \text{ km/jam} = \frac{5}{18}$ m/s. km/jam ke m/s bagi 3,6; m/s ke km/jam kali 3,6.
- Samakan satuan dulu, lalu hitung, lalu cek apakah jawabannya masuk akal.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Mesin fotokopi mencetak 450 lembar dalam 9 menit. Berapa lajunya? Berapa menit untuk mencetak 1.200 lembar?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Laju?",
   "answer": "50",
   "hint": "450 ÷ 9.",
   "explain": "50 lembar/menit.",
   "error": "salah-langkah-materi",
   "suffix": "lembar/menit"
  },
  {
   "kind": "number",
   "prompt": "Waktu untuk 1.200 lembar?",
   "answer": "24",
   "hint": "1.200 ÷ 50.",
   "explain": "24 menit.",
   "error": "salah-langkah-materi",
   "suffix": "menit"
  }
 ],
 "conclusion": "50 lembar/menit dan 24 menit."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Ubah 90 km/jam ke m/s.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Arah konversi km/jam ke m/s adalah",
   "options": [
    "bagi 3,6",
    "kali 3,6"
   ],
   "answer": "bagi 3,6",
   "hint": "Angka m/s selalu lebih kecil.",
   "explain": "Atau kalikan $\\frac{5}{18}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "90 km/jam = ? m/s",
   "answer": "25",
   "hint": "90 ÷ 3,6.",
   "explain": "25 m/s.",
   "error": "salah-langkah-materi",
   "suffix": "m/s"
  }
 ],
 "conclusion": "90 km/jam = 25 m/s."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Ubah 12 m/s ke km/jam.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Arah konversi m/s ke km/jam adalah",
   "options": [
    "kali 3,6",
    "bagi 3,6"
   ],
   "answer": "kali 3,6",
   "hint": "Angka km/jam lebih besar.",
   "explain": "Atau kalikan $\\frac{18}{5}$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "12 m/s = ? km/jam",
   "answer": "43,2",
   "hint": "12 × 3,6.",
   "explain": "43,2 km/jam.",
   "error": "salah-langkah-materi",
   "suffix": "km/jam"
  }
 ],
 "conclusion": "12 m/s = 43,2 km/jam."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Sebuah bus melaju tetap 80 km/jam selama 2 jam 15 menit. Berapa jarak yang ditempuh?",
 "steps": [
  {
   "kind": "number",
   "prompt": "2 jam 15 menit = ? jam",
   "answer": "2,25",
   "hint": "15 menit = seperempat jam.",
   "explain": "2,25 jam.",
   "error": "waktu-seperti-desimal",
   "suffix": "jam"
  },
  {
   "kind": "number",
   "prompt": "Jarak = 80 × 2,25 = ?",
   "answer": "180",
   "hint": "Kecepatan × waktu.",
   "explain": "180 km.",
   "error": "salah-langkah-materi",
   "suffix": "km"
  }
 ],
 "conclusion": "Jaraknya 180 km."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Siti bersepeda ke rumah nenek sejauh 6 km dengan kecepatan 12 km/jam. Ia pulang lewat jalan yang sama dengan kecepatan 8 km/jam. Berapa kecepatan rata-rata pergi-pulang?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Waktu pergi = 6 ÷ 12 = ?",
   "answer": "0,5",
   "hint": "Jarak ÷ kecepatan.",
   "explain": "0,5 jam.",
   "error": "salah-langkah-materi",
   "suffix": "jam"
  },
  {
   "kind": "number",
   "prompt": "Waktu pulang = 6 ÷ 8 = ?",
   "answer": "0,75",
   "hint": "Jarak ÷ kecepatan.",
   "explain": "0,75 jam.",
   "error": "salah-langkah-materi",
   "suffix": "jam"
  },
  {
   "kind": "number",
   "prompt": "Kecepatan rata-rata = 12 km ÷ 1,25 jam = ?",
   "answer": "9,6",
   "hint": "Jarak total pergi-pulang 12 km.",
   "explain": "9,6 km/jam, bukan 10.",
   "error": "salah-langkah-materi",
   "suffix": "km/jam"
  }
 ],
 "conclusion": "Kecepatan rata-rata 9,6 km/jam."
}
```
