---
id: sd2-09-panjang-massa-volume
judul: Panjang, Massa, dan Volume
jenjang: sd2
moe: "Primary 2 · Measurement and Geometry · Length, Mass and Volume"
prasyarat: [sd1-08-panjang-cm, sd2-01-bilangan-sampai-1000]
durasi_menit: 35
---

## Kenapa belajar ini?

Berapa panjang kain untuk taplak? Berapa berat beras yang dibeli Ibu? Berapa banyak air di ember? Kita mengukur panjang, massa (berat), dan volume (banyak cairan) setiap hari.

## Analogi

Mengukur itu seperti **menghitung berapa kali sebuah patokan dipakai**.

- **Panjang**: patokannya tongkat 1 meter. Tali sepanjang 5 meter berarti tongkat itu bisa dijajarkan 5 kali.
- **Massa**: patokannya sekantong gula 1 kilogram. Semangka 3 kilogram sama beratnya dengan 3 kantong gula.
- **Volume**: patokannya botol 1 liter. Ember berisi 4 liter berarti bisa diisi penuh dengan 4 botol.

```visual
{"type": "barModel", "bars": [{"label": "Tali", "units": 5, "unitValue": "1 m"}], "total": "5 m", "caption": "Tongkat 1 meter dijajarkan 5 kali: tali 5 m"}
```

```visual
{"type": "scale", "kind": "mass", "value": 3, "unit": "kg", "max": 5, "step": 1, "caption": "Semangka 3 kg, seberat 3 kantong gula 1 kg"}
```

```visual
{"type": "scale", "kind": "volume", "value": 4, "unit": "ℓ", "max": 5, "step": 1, "caption": "Ember berisi 4 ℓ, sama dengan 4 botol 1 liter"}
```

Angka hasil ukur selalu ditulis bersama **satuannya**, supaya kita tahu patokan apa yang dipakai.

## Konsep

### Panjang dalam meter (m)

Kamu sudah mengenal sentimeter (cm) untuk benda pendek, seperti pensil. Untuk benda panjang, kita pakai **meter**. Singkatannya **m**.

- Lebar pintu kelas kira-kira 1 m.
- Panjang papan tulis, kain, tali, atau halaman diukur dalam m.
- Alatnya: meteran gulung atau meteran kain.

### Massa dalam kilogram (kg) dan gram (g)

Massa menunjukkan seberapa berat sebuah benda. Alatnya **timbangan**.

- **Kilogram** (kg) untuk benda berat: beras, semangka, tas sekolah, badanmu.
- **Gram** (g) untuk benda ringan: permen, sebutir telur, pensil.

Benda besar belum tentu lebih berat. Balon besar lebih ringan dari batu kecil.

### Volume cairan dalam liter (ℓ)

Volume menunjukkan banyak cairan dalam wadah. Satuannya **liter**, singkatannya **ℓ**. Alatnya gelas ukur atau botol berukuran.

Contoh: sebotol besar air mineral, seember air, minyak goreng.

### Membaca alat ukur

Lihat angka di garis tempat jarum atau permukaan air berhenti. Kalau jarum di antara dua angka, hitung garis-garis kecilnya.

```visual
{"type": "scale", "kind": "mass", "value": 7, "unit": "kg", "max": 10, "step": 1, "caption": "Jarum di garis ke-7 dari 0: 7 kg"}
```

```visual
{"type": "scale", "kind": "volume", "value": 3, "unit": "ℓ", "max": 5, "step": 1, "caption": "Permukaan air di garis 3: 3 ℓ"}
```

### Membandingkan dan mengurutkan

Bandingkan dua ukuran yang **satuannya sama**. Bilangan lebih besar berarti lebih panjang, lebih berat, atau lebih banyak.

- Panjang: lebih panjang, lebih pendek, paling panjang.
- Massa: lebih berat, lebih ringan, paling berat.
- Volume: lebih banyak, lebih sedikit, paling banyak.

```visual
{"type": "barChart", "scaleStep": 1, "max": 10, "unit": "kg", "title": "Massa tiga benda", "bars": [{"label": "Tas", "value": 3}, {"label": "Beras", "value": 5}, {"label": "Semangka", "value": 4}], "caption": "Batang lebih tinggi berarti lebih berat: beras paling berat"}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Memilih satuan

```soal
{
 "title": "Contoh 1",
 "text": "Pilih satuan yang cocok (m, kg, g, atau ℓ): (a) panjang lapangan, (b) massa sekarung beras, (c) massa sebutir permen, (d) banyak air dalam ember.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Yang diukur pada (d), banyak air dalam ember, adalah ...",
   "options": [
    "panjang",
    "massa",
    "volume cairan"
   ],
   "answer": "volume cairan",
   "hint": "Air adalah cairan di dalam wadah.",
   "explain": "Banyak air dalam wadah adalah volume cairan.",
   "error": "salah-pilih-besaran"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: (a) Panjang lapangan memakai satuan ...",
   "options": [
    "m",
    "kg",
    "g",
    "ℓ"
   ],
   "answer": "m",
   "hint": "Lapangan sangat panjang. Patokannya tongkat meter.",
   "explain": "Panjang benda panjang memakai meter (m).",
   "error": "salah-pilih-satuan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: (b) Massa sekarung beras memakai satuan ...",
   "options": [
    "m",
    "kg",
    "g",
    "ℓ"
   ],
   "answer": "kg",
   "hint": "Sekarung beras berat, seperti beberapa kantong gula.",
   "explain": "Benda berat memakai kilogram (kg).",
   "error": "salah-pilih-satuan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: (c) Massa sebutir permen memakai satuan ...",
   "options": [
    "m",
    "kg",
    "g",
    "ℓ"
   ],
   "answer": "g",
   "hint": "Permen sangat ringan.",
   "explain": "Benda ringan memakai gram (g).",
   "error": "salah-pilih-satuan"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: (d) Banyak air dalam ember memakai satuan ...",
   "options": [
    "m",
    "kg",
    "g",
    "ℓ"
   ],
   "answer": "ℓ",
   "hint": "Air diukur dengan botol liter.",
   "explain": "Volume cairan memakai liter (ℓ).",
   "error": "salah-pilih-satuan"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: Mana yang masuk akal?",
   "options": [
    "Permen 3 kg",
    "Lapangan 50 m",
    "Ember 20 g"
   ],
   "answer": "Lapangan 50 m",
   "hint": "Bayangkan patokannya. Permen seberat 3 kantong gula?",
   "explain": "Lapangan 50 m masuk akal. Dua lainnya tidak.",
   "error": "salah-pilih-satuan"
  }
 ],
 "conclusion": "(a) m, (b) kg, (c) g, (d) ℓ."
}
```

### Contoh 2: Membaca timbangan

```soal
{
 "title": "Contoh 2",
 "text": "Ibu menimbang semangka. Jarum timbangan berhenti seperti gambar. Berapa massa semangka?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Baca satuannya. Satuan di timbangan adalah ...",
   "options": [
    "kg",
    "g",
    "m"
   ],
   "answer": "kg",
   "hint": "Lihat tulisan di tengah timbangan.",
   "explain": "Timbangan ini memakai kg.",
   "error": "salah-pilih-satuan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Jarum berhenti di garis angka berapa?",
   "answer": "3",
   "hint": "Hitung garis dari 0: 1, 2, ...",
   "explain": "Jarum tepat di garis 3.",
   "error": "salah-baca-alat-ukur",
   "suffix": "kg"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: jarum ada di garis ke berapa dari 0?",
   "answer": "3",
   "hint": "Hitung garis panjang setelah 0 sampai jarum.",
   "explain": "Garis ketiga. Jadi 3 kg. Benar.",
   "error": "salah-baca-alat-ukur"
  }
 ],
 "conclusion": "Massa semangka 3 kg.",
 "visual": {
  "type": "scale",
  "kind": "mass",
  "value": 3,
  "unit": "kg",
  "max": 5,
  "step": 1
 }
}
```

### Contoh 3: Mengurutkan panjang

```soal
{
 "title": "Contoh 3",
 "text": "Tali A panjangnya 8 m. Tali B 12 m. Tali C 5 m. Urutkan dari yang terpendek.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Cek satuannya. Apakah bisa langsung dibandingkan?",
   "options": [
    "Ya, semua dalam m",
    "Tidak, satuannya berbeda"
   ],
   "answer": "Ya, semua dalam m",
   "hint": "Lihat satuan setiap tali.",
   "explain": "Semua dalam meter, jadi cukup bandingkan bilangannya.",
   "error": "salah-banding-ukuran"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Tali mana yang terpendek?",
   "options": [
    "Tali A",
    "Tali B",
    "Tali C"
   ],
   "answer": "Tali C",
   "hint": "Cari bilangan paling kecil di antara 8, 12, 5.",
   "explain": "5 paling kecil, jadi tali C terpendek.",
   "error": "salah-banding-ukuran"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Urutan dari yang terpendek adalah ...",
   "options": [
    "C, A, B",
    "A, B, C",
    "B, A, C"
   ],
   "answer": "C, A, B",
   "hint": "5 < 8 < 12.",
   "explain": "Tali C (5 m), tali A (8 m), tali B (12 m).",
   "error": "salah-urut-ukuran"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: tali B memakai tongkat meter berapa kali?",
   "answer": "12",
   "hint": "Panjang tali B 12 m.",
   "explain": "12 kali, paling banyak. Jadi B paling panjang dan ada di akhir urutan.",
   "error": "salah-urut-ukuran"
  }
 ],
 "conclusion": "Urutannya tali C, tali A, tali B.",
 "visual": {
  "type": "barChart",
  "scaleStep": 2,
  "max": 12,
  "unit": "m",
  "bars": [
   {
    "label": "A",
    "value": 8
   },
   {
    "label": "B",
    "value": 12
   },
   {
    "label": "C",
    "value": 5
   }
  ]
 }
}
```

### Contoh 4: Soal cerita membandingkan volume

```soal
{
 "title": "Contoh 4",
 "text": "Ember Budi berisi 7 ℓ air. Ember Siti berisi 4 ℓ air. Ember Made berisi 9 ℓ air. Ember siapa yang paling sedikit airnya? Berapa liter lebih banyak air di ember Made daripada ember Siti?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pahami soal. Ada berapa pertanyaan?",
   "options": [
    "Satu",
    "Dua: paling sedikit dan selisih",
    "Tiga"
   ],
   "answer": "Dua: paling sedikit dan selisih",
   "hint": "Baca dua kalimat tanya di akhir soal.",
   "explain": "Kita mencari yang paling sedikit, lalu selisih Made dan Siti.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Ember siapa yang paling sedikit airnya?",
   "options": [
    "Budi",
    "Siti",
    "Made"
   ],
   "answer": "Siti",
   "hint": "Bandingkan 7, 4, dan 9.",
   "explain": "4 paling kecil, jadi ember Siti.",
   "error": "salah-banding-ukuran"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Cari selisih. 9 ℓ − 4 ℓ = ?",
   "answer": "5",
   "hint": "Kurangkan air Siti dari air Made.",
   "explain": "9 − 4 = 5. Selisihnya 5 ℓ.",
   "error": "selisih-dijumlah",
   "suffix": "ℓ"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 4 ℓ + 5 ℓ = ?",
   "answer": "9",
   "hint": "Air Siti ditambah selisihnya.",
   "explain": "9 ℓ, sama dengan air Made. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "ℓ"
  }
 ],
 "conclusion": "Ember Siti paling sedikit. Air di ember Made 5 ℓ lebih banyak.",
 "visual": {
  "type": "barChart",
  "scaleStep": 1,
  "max": 10,
  "unit": "ℓ",
  "bars": [
   {
    "label": "Budi",
    "value": 7
   },
   {
    "label": "Siti",
    "value": 4
   },
   {
    "label": "Made",
    "value": 9
   }
  ]
 }
}
```

## Kesalahan yang sering terjadi

- **Mengira benda besar pasti lebih berat.** Bantal besar dianggap lebih berat dari batu bata. Timbang dulu, jangan hanya melihat ukurannya.
- **Memakai satuan yang tidak cocok.** Menulis "panjang lapangan 50 g". Gram untuk massa, bukan panjang. Panjang memakai m.
- **Lupa menulis satuan.** Menulis "semangka 3". Tiga apa? Tulis 3 kg.
- **Salah menulis singkatan.** Menulis Kg, gr, atau ltr. Yang benar kg, g, dan ℓ.
- **Tidak mulai dari 0.** Mengukur dengan meteran tetapi ujung benda diletakkan di angka 1. Ujung benda harus di angka 0.

## Ringkasan

- Mengukur artinya menghitung berapa kali patokan dipakai.
- Panjang benda panjang: meter (m).
- Massa: kilogram (kg) untuk benda berat, gram (g) untuk benda ringan.
- Volume cairan: liter (ℓ).
- Selalu tulis angka bersama satuannya.
- Bandingkan ukuran yang satuannya sama: bilangan lebih besar berarti lebih panjang, berat, atau banyak.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Satuan apa yang cocok untuk massa sekarung beras?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Yang diukur adalah ...",
   "options": [
    "panjang",
    "massa",
    "volume"
   ],
   "answer": "massa",
   "hint": "Kata kuncinya ada di soal.",
   "explain": "Kita mengukur massa (berat).",
   "error": "salah-pilih-besaran"
  },
  {
   "kind": "choice",
   "prompt": "Satuan yang cocok adalah ...",
   "options": [
    "m",
    "kg",
    "g",
    "ℓ"
   ],
   "answer": "kg",
   "hint": "Sekarung beras sangat berat.",
   "explain": "Benda berat memakai kg.",
   "error": "salah-pilih-satuan"
  }
 ],
 "conclusion": "Massa sekarung beras memakai kg."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Satuan apa yang cocok untuk massa sebutir telur?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Sebutir telur termasuk benda yang ...",
   "options": [
    "berat",
    "ringan"
   ],
   "answer": "ringan",
   "hint": "Bandingkan dengan sekantong gula 1 kg.",
   "explain": "Sebutir telur jauh lebih ringan dari 1 kg.",
   "error": "salah-pilih-satuan"
  },
  {
   "kind": "choice",
   "prompt": "Satuan yang cocok adalah ...",
   "options": [
    "m",
    "kg",
    "g",
    "ℓ"
   ],
   "answer": "g",
   "hint": "Benda ringan diukur dengan satuan kecil.",
   "explain": "Benda ringan memakai gram (g).",
   "error": "salah-pilih-satuan"
  }
 ],
 "conclusion": "Massa sebutir telur memakai g."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Urutkan dari yang paling sedikit: botol A 6 ℓ, botol B 2 ℓ, botol C 9 ℓ.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Botol mana yang paling sedikit isinya?",
   "options": [
    "A",
    "B",
    "C"
   ],
   "answer": "B",
   "hint": "Cari bilangan terkecil: 6, 2, 9.",
   "explain": "2 ℓ paling sedikit, jadi botol B.",
   "error": "salah-banding-ukuran"
  },
  {
   "kind": "choice",
   "prompt": "Urutan dari yang paling sedikit adalah ...",
   "options": [
    "B, A, C",
    "C, A, B",
    "A, B, C"
   ],
   "answer": "B, A, C",
   "hint": "2 < 6 < 9.",
   "explain": "B (2 ℓ), A (6 ℓ), C (9 ℓ).",
   "error": "salah-urut-ukuran"
  }
 ],
 "conclusion": "Urutannya B, A, C."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Pita merah panjangnya 15 m. Pita biru 11 m. Pita mana yang lebih panjang, dan berapa meter lebih panjang?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Pita mana yang lebih panjang?",
   "options": [
    "Pita merah",
    "Pita biru"
   ],
   "answer": "Pita merah",
   "hint": "Bandingkan 15 dan 11.",
   "explain": "15 lebih dari 11, jadi pita merah.",
   "error": "salah-banding-ukuran"
  },
  {
   "kind": "number",
   "prompt": "Berapa meter lebih panjang? 15 m − 11 m = ?",
   "answer": "4",
   "hint": "Kurangkan yang pendek dari yang panjang.",
   "explain": "15 − 11 = 4.",
   "error": "selisih-dijumlah",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Cek: 11 m + 4 m = ?",
   "answer": "15",
   "hint": "Pita biru ditambah selisihnya.",
   "explain": "15 m, sama dengan pita merah. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "m"
  }
 ],
 "conclusion": "Pita merah 4 m lebih panjang."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Paket A 4 kg, paket B 7 kg, paket C 5 kg. Urutkan dari yang paling berat.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Paket mana yang paling berat?",
   "options": [
    "A",
    "B",
    "C"
   ],
   "answer": "B",
   "hint": "Cari bilangan terbesar: 4, 7, 5.",
   "explain": "7 kg paling berat, jadi paket B.",
   "error": "salah-banding-ukuran"
  },
  {
   "kind": "choice",
   "prompt": "Urutan dari yang paling berat adalah ...",
   "options": [
    "B, C, A",
    "A, C, B",
    "B, A, C"
   ],
   "answer": "B, C, A",
   "hint": "7 > 5 > 4.",
   "explain": "B (7 kg), C (5 kg), A (4 kg).",
   "error": "salah-urut-ukuran"
  }
 ],
 "conclusion": "Urutannya B, C, A."
}
```
