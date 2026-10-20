---
id: sd5-05-desimal-satuan
judul: "Desimal: Kali-Bagi 10, 100, 1000 dan Konversi Satuan"
jenjang: sd5
moe: "Primary 5 · Number and Algebra · Decimals"
prasyarat: [sd3-09-satuan-ukur, sd4-07-desimal, sd4-08-operasi-desimal, sd5-02-operasi-hitung-campuran]
durasi_menit: 40
---

## Kenapa belajar ini?

Di toko, gula dijual per kg, tetapi resep memakai gram. Jarak di peta ditulis dalam km, tetapi lari di sekolah diukur dalam meter. Untuk berpindah satuan, kamu perlu mengalikan dan membagi desimal dengan 10, 100, atau 1.000.

## Analogi

Bayangkan sebuah **deretan kursi** dengan **tiang** tegak di tengahnya. Tiang itu adalah **koma**. Kursi di kiri tiang adalah satuan, puluhan, ratusan. Kursi di kanan tiang adalah persepuluhan, perseratusan, perseribuan.

- **Tiang (koma) tidak pernah bergerak.** Yang berpindah adalah **angka-angkanya**.
- **Dikali 10:** setiap angka pindah **1 kursi ke kiri**. Dikali 100: 2 kursi. Dikali 1.000: 3 kursi.
- **Dibagi 10:** setiap angka pindah **1 kursi ke kanan**. Dibagi 100: 2 kursi. Dibagi 1.000: 3 kursi.
- Kursi kosong di antara angka dan tiang diisi **0**.

```anim
{"type": "persamaan", "title": "Koma diam, angka bergeser", "baris": [{"tex": "4{,}6", "say": "Angka 4 di kursi satuan, angka 6 di kursi persepuluhan."}, {"tex": "46", "say": "Dikali 10: setiap angka pindah 1 kursi ke kiri.", "op": "\\times 10"}, {"tex": "460", "say": "Dikali 10 lagi: pindah 1 kursi lagi. Kursi satuan kosong diisi 0.", "op": "\\times 10"}, {"tex": "4{,}6 \\times 100 = 460", "say": "Jadi dikali 100 berarti pindah 2 kursi."}]}
```

## Konsep

### Kali dan bagi 10, 100, 1.000

```visual
{"type": "table", "head": ["", "Rb", "Rt", "P", "S", ",", "pS", "pR", "pRb"], "rows": [["3,145", "", "", "", "3", ",", "1", "4", "5"], ["× 10", "", "", "3", "1", ",", "4", "5", ""], ["× 100", "", "3", "1", "4", ",", "5", "", ""], ["× 1.000", "3", "1", "4", "5", ",", "", "", ""]], "caption": "Koma tetap di tempat, angka pindah ke kiri"}
```

(Rb = ribuan, Rt = ratusan, P = puluhan, S = satuan, pS = persepuluhan, pR = perseratusan, pRb = perseribuan.)

Jadi $3{,}145 \times 10 = 31{,}45$, $3{,}145 \times 100 = 314{,}5$, dan $3{,}145 \times 1.000 = 3.145$.

Untuk membagi, angka bergeser ke kanan: $52{,}8 \div 10 = 5{,}28$ dan $52{,}8 \div 100 = 0{,}528$.

Cara cepat: **banyak nol = banyak kursi yang dilompati.**

### Kali dan bagi kelipatan 10, 100, 1.000

Pecah kelipatan menjadi dua bagian. Contoh:

$$1{,}24 \times 300 = 1{,}24 \times 3 \times 100 = 3{,}72 \times 100 = 372$$

$$7{,}2 \div 400 = 7{,}2 \div 4 \div 100 = 1{,}8 \div 100 = 0{,}018$$

### Konversi satuan

```visual
{"type": "table", "head": ["Hubungan", "Besar ke kecil", "Kecil ke besar"], "rows": [["1 km = 1.000 m", "kali 1.000", "bagi 1.000"], ["1 m = 100 cm", "kali 100", "bagi 100"], ["1 kg = 1.000 g", "kali 1.000", "bagi 1.000"], ["1 ℓ = 1.000 mL", "kali 1.000", "bagi 1.000"]]}
```

```visual
{"type": "scale", "kind": "volume", "value": 860, "unit": "mL", "max": 1000, "step": 100, "caption": "860 mL, sedikit kurang dari 1 ℓ (1.000 mL)"}
```

Cara mengingat: satuan **kecil** butuh **lebih banyak** angka. Jadi dari besar ke kecil, angkanya membesar (kali). Dari kecil ke besar, angkanya mengecil (bagi).

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Kali dengan 1.000 dan bagi dengan 100

```soal
{
 "title": "Contoh 1",
 "text": "Hitung $0{,}07 \\times 1.000$ dan $52{,}8 \\div 100$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Untuk 0,07 × 1.000, angka bergeser ke mana dan berapa kursi?",
   "options": [
    "ke kiri, 3 kursi",
    "ke kanan, 3 kursi",
    "ke kiri, 1 kursi"
   ],
   "answer": "ke kiri, 3 kursi",
   "hint": "Dikali berarti ke kiri. Hitung nol pada 1.000.",
   "explain": "Dikali 1.000: geser 3 kursi ke kiri.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Geser. 0,07 × 1.000 = ?",
   "answer": "70",
   "hint": "Angka 7 pindah dari perseratusan ke puluhan.",
   "explain": "Angka 7 sampai di puluhan, satuan diisi 0: 70.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Untuk 52,8 ÷ 100, angka bergeser ke mana?",
   "options": [
    "ke kanan, 2 kursi",
    "ke kiri, 2 kursi",
    "ke kanan, 1 kursi"
   ],
   "answer": "ke kanan, 2 kursi",
   "hint": "Dibagi berarti ke kanan. 100 punya dua nol.",
   "explain": "Dibagi 100: geser 2 kursi ke kanan.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Geser. 52,8 ÷ 100 = ?",
   "answer": "0,528",
   "hint": "Angka 5 pindah dari puluhan ke persepuluhan.",
   "explain": "Hasilnya 0,528. Kursi satuan diisi 0.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 0,528 × 100 = ?",
   "answer": "52,8",
   "hint": "Balikkan operasinya.",
   "explain": "0,528 × 100 = 52,8. Benar.",
   "error": "salah-nilai-tempat"
  }
 ],
 "conclusion": "Jadi 0,07 × 1.000 = 70 dan 52,8 ÷ 100 = 0,528."
}
```

### Contoh 2: Kali dan bagi kelipatan

```soal
{
 "title": "Contoh 2",
 "text": "Hitung $7{,}2 \\div 400$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pecah 400.",
   "options": [
    "4 × 100",
    "40 × 100",
    "4 × 10"
   ],
   "answer": "4 × 100",
   "hint": "Hitung nol pada 400.",
   "explain": "400 = 4 × 100.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 7,2 ÷ 4 = ?",
   "answer": "1,8",
   "hint": "4 × 1,8 = 7,2.",
   "explain": "7,2 ÷ 4 = 1,8.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Geser 2 kursi ke kanan. 1,8 ÷ 100 = ?",
   "answer": "0,018",
   "hint": "Angka 1 pindah ke perseratusan.",
   "explain": "1,8 ÷ 100 = 0,018.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 0,018 × 400 = ?",
   "answer": "7,2",
   "hint": "0,018 × 4 = 0,072, lalu × 100.",
   "explain": "0,072 × 100 = 7,2. Benar.",
   "error": "salah-nilai-tempat"
  }
 ],
 "conclusion": "Jadi 7,2 ÷ 400 = 0,018."
}
```

### Contoh 3: Konversi satuan

```soal
{
 "title": "Contoh 3",
 "text": "Ubah: (a) 2,35 km = ... m. (b) 860 mL = ... ℓ. (c) 3 kg 45 g = ... kg.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: km ke m dikali atau dibagi?",
   "options": [
    "kali 1.000",
    "bagi 1.000",
    "kali 100"
   ],
   "answer": "kali 1.000",
   "hint": "Dari besar ke kecil, angkanya membesar.",
   "explain": "km ke m: kali 1.000.",
   "error": "salah-pilih-satuan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 2,35 km = ? m",
   "answer": "2.350",
   "hint": "2,35 × 1.000.",
   "explain": "2,35 × 1.000 = 2.350 m.",
   "error": "salah-nilai-tempat",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: 860 mL = ? ℓ",
   "answer": "0,86",
   "hint": "Kecil ke besar: bagi 1.000.",
   "explain": "860 ÷ 1.000 = 0,86 ℓ.",
   "error": "salah-pilih-satuan",
   "suffix": "ℓ"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: 45 g = ? kg",
   "answer": "0,045",
   "hint": "45 ÷ 1.000. Geser 3 kursi ke kanan.",
   "explain": "45 g = 0,045 kg.",
   "error": "lupa-nol-tempat",
   "suffix": "kg"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: 3 kg 45 g = ? kg",
   "answer": "3,045",
   "hint": "3 + 0,045.",
   "explain": "3 kg 45 g = 3,045 kg.",
   "error": "lupa-nol-tempat",
   "suffix": "kg"
  }
 ],
 "conclusion": "Jadi (a) 2.350 m, (b) 0,86 ℓ, (c) 3,045 kg."
}
```

### Contoh 4: Soal cerita

```soal
{
 "title": "Contoh 4",
 "text": "Setiap botol minyak di toko Pak Budi berisi 0,375 ℓ. Pak Budi punya 40 botol. Berapa liter minyak seluruhnya? Berapa mL?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Hitungan apa yang dipakai?",
   "options": [
    "0,375 × 40",
    "0,375 ÷ 40",
    "0,375 + 40"
   ],
   "answer": "0,375 × 40",
   "hint": "40 botol yang isinya sama.",
   "explain": "Kalikan isi satu botol dengan banyak botol.",
   "error": "salah-pilih-operasi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Pecah 40 = 4 × 10. Hitung 0,375 × 4.",
   "answer": "1,5",
   "hint": "0,375 × 2 = 0,75, lalu dikali 2 lagi.",
   "explain": "0,375 × 4 = 1,5.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Geser 1 kursi ke kiri. 1,5 × 10 = ?",
   "answer": "15",
   "hint": "Dikali 10.",
   "explain": "1,5 × 10 = 15 ℓ.",
   "error": "salah-nilai-tempat",
   "suffix": "ℓ"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Ubah ke mL.",
   "answer": "15.000",
   "hint": "ℓ ke mL: kali 1.000.",
   "explain": "15 × 1.000 = 15.000 mL.",
   "error": "salah-pilih-satuan",
   "suffix": "mL"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 1 botol = 375 mL. 375 × 40 = ?",
   "answer": "15.000",
   "hint": "375 × 4 = 1.500, lalu × 10.",
   "explain": "375 × 40 = 15.000 mL. Sama.",
   "error": "salah-fakta-kali",
   "suffix": "mL"
  }
 ],
 "conclusion": "Minyak seluruhnya 15 ℓ atau 15.000 mL.",
 "visual": {
  "type": "scale",
  "kind": "volume",
  "value": 375,
  "unit": "mL",
  "max": 500,
  "step": 125
 }
}
```

## Kesalahan yang sering terjadi

- **Menambah nol di belakang desimal.** $2{,}35 \times 10 = 2{,}350$. Salah, 2,350 sama nilainya dengan 2,35. Angka harus bergeser: $23{,}5$.
- **Lupa nol pengisi kursi.** $52{,}8 \div 100 = 5{,}28$. Itu baru geser 1 kursi. Geser 2 kursi: $0{,}528$.
- **Arah konversi terbalik.** 850 g = 850.000 kg. Dari kecil (g) ke besar (kg) harus dibagi: $850 \div 1.000 = 0{,}85$ kg.
- **Salah menulis satuan gabungan.** 3 kg 45 g ditulis 3,45 kg. Padahal 45 g = 0,045 kg, jadi 3,045 kg. Angka 45 harus mengisi kursi perseratusan dan perseribuan.
- **Salah memakai kelipatan.** $1{,}24 \times 300$ dihitung $1{,}24 \times 100 = 124$ saja. Jangan lupa kali 3 dulu: $3{,}72 \times 100 = 372$.

## Ringkasan

- Koma diam, angka bergeser. Banyak nol = banyak kursi.
- Kali: geser ke kiri. Bagi: geser ke kanan. Isi kursi kosong dengan 0.
- Kelipatan (300, 40, 4.000): kali/bagi angka depannya dulu, lalu geser.
- 1 km = 1.000 m, 1 m = 100 cm, 1 kg = 1.000 g, 1 ℓ = 1.000 mL.
- Besar ke kecil: kali. Kecil ke besar: bagi.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Hitung $0{,}659 \\times 100$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Angka bergeser ke mana?",
   "options": [
    "ke kiri, 2 kursi",
    "ke kanan, 2 kursi",
    "ke kiri, 3 kursi"
   ],
   "answer": "ke kiri, 2 kursi",
   "hint": "Dikali, dan 100 punya dua nol.",
   "explain": "Geser 2 kursi ke kiri.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "0,659 × 100 = ?",
   "answer": "65,9",
   "hint": "Angka 6 pindah dari persepuluhan ke puluhan.",
   "explain": "0,659 × 100 = 65,9.",
   "error": "salah-nilai-tempat"
  }
 ],
 "conclusion": "Jadi 0,659 × 100 = 65,9."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Hitung $8{,}4 \\div 100$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Angka bergeser ke mana?",
   "options": [
    "ke kanan, 2 kursi",
    "ke kiri, 2 kursi",
    "ke kanan, 1 kursi"
   ],
   "answer": "ke kanan, 2 kursi",
   "hint": "Dibagi, dan 100 punya dua nol.",
   "explain": "Geser 2 kursi ke kanan.",
   "error": "salah-nilai-tempat"
  },
  {
   "kind": "number",
   "prompt": "8,4 ÷ 100 = ?",
   "answer": "0,084",
   "hint": "Kursi satuan dan persepuluhan diisi 0.",
   "explain": "8,4 ÷ 100 = 0,084.",
   "error": "lupa-nol-tempat"
  }
 ],
 "conclusion": "Jadi 8,4 ÷ 100 = 0,084."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Hitung $2{,}07 \\times 600$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Kali dengan 6 dulu. 2,07 × 6 = ?",
   "answer": "12,42",
   "hint": "2 × 6 = 12 dan 0,07 × 6 = 0,42.",
   "explain": "2,07 × 6 = 12,42.",
   "error": "salah-fakta-kali"
  },
  {
   "kind": "number",
   "prompt": "Geser 2 kursi ke kiri. 12,42 × 100 = ?",
   "answer": "1.242",
   "hint": "Dikali 100.",
   "explain": "12,42 × 100 = 1.242.",
   "error": "salah-nilai-tempat"
  }
 ],
 "conclusion": "Jadi 2,07 × 600 = 1.242."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Ubah: (a) 4 m 5 cm = ... m. (b) 0,85 ℓ = ... mL.",
 "steps": [
  {
   "kind": "number",
   "prompt": "5 cm = ? m",
   "answer": "0,05",
   "hint": "cm ke m: bagi 100.",
   "explain": "5 ÷ 100 = 0,05 m.",
   "error": "lupa-nol-tempat",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "(a) 4 m 5 cm = ? m",
   "answer": "4,05",
   "hint": "4 + 0,05.",
   "explain": "4 m 5 cm = 4,05 m.",
   "error": "lupa-nol-tempat",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "(b) 0,85 ℓ = ? mL",
   "answer": "850",
   "hint": "ℓ ke mL: kali 1.000.",
   "explain": "0,85 × 1.000 = 850 mL.",
   "error": "salah-pilih-satuan",
   "suffix": "mL"
  }
 ],
 "conclusion": "Jadi (a) 4,05 m dan (b) 850 mL."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Siti punya pita sepanjang 4,5 m. Pita itu dipotong menjadi 20 potong sama panjang. Berapa cm panjang setiap potong?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Pecah 20 = 2 × 10. Hitung 4,5 ÷ 2.",
   "answer": "2,25",
   "hint": "Setengah dari 4,5.",
   "explain": "4,5 ÷ 2 = 2,25.",
   "error": "salah-fakta-bagi"
  },
  {
   "kind": "number",
   "prompt": "Lalu bagi 10. Panjang satu potong dalam m?",
   "answer": "0,225",
   "hint": "Geser 1 kursi ke kanan.",
   "explain": "2,25 ÷ 10 = 0,225 m.",
   "error": "salah-nilai-tempat",
   "suffix": "m"
  },
  {
   "kind": "number",
   "prompt": "Ubah ke cm.",
   "answer": "22,5",
   "hint": "m ke cm: kali 100.",
   "explain": "0,225 × 100 = 22,5 cm.",
   "error": "salah-pilih-satuan",
   "suffix": "cm"
  }
 ],
 "conclusion": "Setiap potong panjangnya 22,5 cm."
}
```
