---
id: sd4-10-sudut-derajat
judul: Mengukur dan Menggambar Sudut
jenjang: sd4
moe: "Primary 4 · Measurement and Geometry · Angles"
prasyarat: [sd3-12-sudut]
durasi_menit: 35
---

## Kenapa belajar ini?

Di kelas 3 kamu sudah tahu sudut siku-siku dan sudut yang lebih besar atau lebih kecil darinya. Sekarang kamu belajar **berapa besar** sebuah sudut dengan tepat. Tukang kayu, arsitek, dan pemain sepak bola yang menendang bola pojok semuanya memikirkan besar sudut.

## Analogi

Bayangkan sebuah **pintu kamar** yang dibuka.

- **Engsel** pintu adalah **titik sudut**.
- **Kusen** (yang diam) dan **daun pintu** (yang bergerak) adalah dua **kaki sudut**.
- **Seberapa lebar pintu terbuka** adalah **besar sudut**.

```anim
{"type": "bangun", "title": "Pintu dilihat dari atas", "titik": {"E": [0, 0], "K": [5, 0], "D": [2.5, 4.33]}, "sisi": [["E", "K"], ["E", "D"]], "sudut": [{"di": "E", "dari": "K", "ke": "D", "label": "60^\\circ"}], "langkah": [{"say": "E adalah engsel pintu: titik sudut.", "sorot": ["E"]}, {"say": "EK adalah kusen yang diam, ED adalah daun pintu. Keduanya kaki sudut.", "sorot": ["EK", "ED"]}, {"say": "Seberapa lebar pintu terbuka itulah besar sudutnya.", "sudut": 1}]}
```

Panjang daun pintu tidak mengubah besar sudut. Pintu kecil atau pintu besar, kalau dibuka sama lebar, sudutnya sama. Yang penting hanya **seberapa jauh pintu berputar**.

## Konsep

### Menamai sudut

Sudut punya satu **titik sudut** dan dua **kaki sudut**.

```anim
{"type": "bangun", "title": "Sudut ABC", "titik": {"A": [1.6, 2.8], "B": [0, 0], "C": [4.5, 0]}, "sisi": [["B", "A"], ["B", "C"]], "sudut": [{"di": "B", "dari": "C", "ke": "A"}], "langkah": [{"say": "B adalah titik sudut, tempat kedua kaki bertemu.", "sorot": ["B"], "sudut": 1}, {"say": "Kaki sudutnya BA dan BC.", "sorot": ["BA", "BC"], "sudut": 1}, {"say": "Namanya ∠ABC atau ∠CBA: huruf B selalu di tengah.", "sorot": ["B"], "sudut": 1}]}
```

Ada dua cara menamai sudut ini:

- **Tiga huruf**: $\angle ABC$ atau $\angle CBA$. Huruf **titik sudut selalu di tengah**. Di sini B adalah engselnya.
- **Satu huruf kecil** yang ditulis di dalam sudut: misalnya $\angle a$.

### Satuan derajat

Besar sudut diukur dalam **derajat**, ditulis dengan lambang $^\circ$. Satu putaran penuh dibagi menjadi 360 bagian sama. Setiap bagian adalah $1^\circ$.

### Putaran dan derajat

Bayangkan pintu, atau jarum menit jam, berputar dari posisi awal.

```visual
{"type": "table", "head": ["Putaran", "Derajat", "Keterangan"], "rows": [["1/4 putaran", "90°", "sudut siku-siku"], ["1/2 putaran", "180°", "garis lurus"], ["3/4 putaran", "270°", ""], ["1 putaran", "360°", "kembali ke posisi awal"]]}
```

```visual
{"type": "angle", "degrees": 90, "showRightMark": true, "caption": "1/4 putaran = 90°"}
```

```visual
{"type": "angle", "degrees": 180, "caption": "1/2 putaran = 180°, kedua kaki membentuk garis lurus"}
```

### Jenis sudut

- **Sudut lancip**: lebih dari $0^\circ$ dan kurang dari $90^\circ$. Pintu terbuka sedikit.
- **Sudut siku-siku**: tepat $90^\circ$. Ditandai dengan kotak kecil di titik sudutnya.
- **Sudut tumpul**: lebih dari $90^\circ$ dan kurang dari $180^\circ$. Pintu terbuka lebar.

```visual
{"type": "angle", "degrees": 40, "caption": "Sudut lancip: 40°"}
```

```visual
{"type": "angle", "degrees": 130, "caption": "Sudut tumpul: 130°"}
```

### Busur derajat

**Busur derajat** adalah alat untuk mengukur sudut. Bentuknya setengah lingkaran dengan angka 0 sampai 180. Busur derajat punya **dua deret angka**:

- **Skala luar**: 0 di sebelah kiri, naik ke kanan.
- **Skala dalam**: 0 di sebelah kanan, naik ke kiri.

Di tengah sisi lurusnya ada **titik pusat**. Garis dari pusat ke angka 0 disebut **garis dasar**.

Aturan emas: **pakai skala yang dimulai dari 0 pada kaki pertama.** Dua angka yang dilewati satu kaki selalu berjumlah $180^\circ$, misalnya 55 dan 125.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Menamai sudut

```soal
{
 "title": "Kerjakan bersama",
 "text": "Garis QP dan garis QR bertemu di titik Q dan membentuk sebuah sudut. Tulis nama sudut itu dengan tiga huruf, lalu sebutkan titik sudut dan kakinya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Cari engselnya. Titik mana yang menjadi titik sudut?",
   "options": [
    "Q",
    "P",
    "R"
   ],
   "answer": "Q",
   "hint": "Titik sudut adalah tempat kedua garis bertemu.",
   "explain": "Kedua garis bertemu di Q, jadi Q titik sudut.",
   "error": "salah-titik-sudut"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Apa kaki sudutnya?",
   "options": [
    "QP dan QR",
    "PR dan QR",
    "PQ dan PR"
   ],
   "answer": "QP dan QR",
   "hint": "Kaki sudut berawal dari titik sudut.",
   "explain": "Kedua kaki berawal dari Q: QP dan QR.",
   "error": "salah-titik-sudut"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Tulis nama sudutnya.",
   "options": [
    "$\\angle PQR$",
    "$\\angle QPR$",
    "$\\angle PRQ$"
   ],
   "answer": "$\\angle PQR$",
   "hint": "Huruf titik sudut harus di tengah.",
   "explain": "Q di tengah: $\\angle PQR$.",
   "error": "salah-titik-sudut"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: nama lain yang juga benar?",
   "options": [
    "$\\angle RQP$",
    "$\\angle QRP$",
    "$\\angle RPQ$"
   ],
   "answer": "$\\angle RQP$",
   "hint": "Urutan kaki boleh dibalik, tetapi Q tetap di tengah.",
   "explain": "$\\angle RQP$ juga benar karena Q tetap di tengah.",
   "error": "salah-titik-sudut"
  }
 ],
 "conclusion": "Sudutnya $\\angle PQR$ (atau $\\angle RQP$), titik sudut Q, kaki QP dan QR.",
 "visual": {
  "type": "angle",
  "degrees": 35
 }
}
```

### Contoh 2: Mengukur sudut dengan busur derajat

```soal
{
 "title": "Kerjakan bersama",
 "text": "Busur derajat diletakkan pada $\\angle XYZ$. Kaki YZ tepat di angka 0 skala dalam. Kaki YX melewati angka 55 di skala luar dan 125 di skala dalam. Berapa besar $\\angle XYZ$?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Perkirakan dulu. Sudut pada gambar termasuk jenis apa?",
   "options": [
    "Tumpul",
    "Lancip",
    "Siku-siku"
   ],
   "answer": "Tumpul",
   "hint": "Bandingkan dengan pojok buku (90°).",
   "explain": "Terbuka lebih lebar dari siku-siku, jadi tumpul: lebih dari 90°.",
   "error": "salah-banding-siku"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Titik pusat busur harus diletakkan di mana?",
   "options": [
    "Tepat di Y",
    "Di X",
    "Di Z"
   ],
   "answer": "Tepat di Y",
   "hint": "Pusat busur di engsel sudut.",
   "explain": "Y adalah titik sudut, jadi pusat busur di Y.",
   "error": "salah-titik-sudut"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Skala mana yang dibaca?",
   "options": [
    "Skala dalam",
    "Skala luar"
   ],
   "answer": "Skala dalam",
   "hint": "Lihat skala mana yang angka 0-nya ada di kaki YZ.",
   "explain": "Kaki YZ di 0 skala dalam, jadi baca skala dalam.",
   "error": "salah-baca-alat-ukur"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Baca angkanya. $\\angle XYZ$ = ?",
   "answer": "125",
   "hint": "Angka di skala dalam yang dilewati kaki YX.",
   "explain": "∠XYZ = 125°.",
   "error": "salah-baca-alat-ukur",
   "suffix": "°"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: apakah 125° cocok dengan perkiraan?",
   "options": [
    "Ya, 125° di antara 90° dan 180°",
    "Tidak, seharusnya 55°"
   ],
   "answer": "Ya, 125° di antara 90° dan 180°",
   "hint": "Sudut tumpul lebih dari 90°.",
   "explain": "125° tumpul, cocok. 55° lancip, jadi pasti salah.",
   "error": "salah-banding-siku"
  }
 ],
 "conclusion": "Jadi $\\angle XYZ = 125^\\circ$.",
 "visual": {
  "type": "angle",
  "degrees": 125
 }
}
```

### Contoh 3: Menggambar sudut

```soal
{
 "title": "Kerjakan bersama",
 "text": "Gambar $\\angle ABC = 70^\\circ$. Kaki BC digambar mendatar, dengan B di kiri dan C di kanan.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Setelah menggambar garis BC, titik mana yang menjadi engsel?",
   "options": [
    "B",
    "C",
    "A"
   ],
   "answer": "B",
   "hint": "Huruf tengah nama sudut adalah titik sudut.",
   "explain": "Pada ∠ABC, B di tengah, jadi B engselnya.",
   "error": "salah-titik-sudut"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Di mana pusat busur diletakkan?",
   "options": [
    "Tepat di B, garis dasar di atas BC",
    "Tepat di C",
    "Di tengah garis BC"
   ],
   "answer": "Tepat di B, garis dasar di atas BC",
   "hint": "Pusat busur selalu di titik sudut.",
   "explain": "Pusat di B, garis dasar menempel pada BC.",
   "error": "salah-titik-sudut"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: C ada di kanan. Skala mana yang dipakai?",
   "options": [
    "Skala yang 0-nya di kanan (skala dalam)",
    "Skala yang 0-nya di kiri (skala luar)"
   ],
   "answer": "Skala yang 0-nya di kanan (skala dalam)",
   "hint": "Cari angka 0 yang berada di atas kaki BC.",
   "explain": "Kaki BC mengarah ke kanan, jadi pakai skala dalam.",
   "error": "salah-baca-alat-ukur"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Ikuti skala itu sampai angka berapa untuk memberi titik A?",
   "answer": "70",
   "hint": "Besar sudut yang diminta.",
   "explain": "Beri titik A di angka 70, lalu hubungkan B ke A.",
   "error": "salah-baca-alat-ukur",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: kalau memakai skala yang salah, sudut yang tergambar berapa derajat?",
   "answer": "110",
   "hint": "Dua angka pada satu posisi berjumlah 180.",
   "explain": "180 − 70 = 110°, sudut tumpul. Sudut 70° harus terlihat lancip.",
   "error": "salah-baca-alat-ukur",
   "suffix": "°"
  }
 ],
 "conclusion": "Sudut lancip $\\angle ABC = 70^\\circ$ dengan kaki BC dan BA.",
 "visual": {
  "type": "angle",
  "degrees": 70
 }
}
```

### Contoh 4: Soal cerita tentang putaran

```soal
{
 "title": "Kerjakan bersama",
 "text": "Dimas mulai mengerjakan PR pukul 07.00 dan selesai pukul 07.45. Berapa bagian putaran yang dilalui jarum menit? Berapa derajat?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Pahami soal. Berapa menit Dimas belajar?",
   "answer": "45",
   "hint": "Dari 07.00 sampai 07.45.",
   "explain": "45 menit. Satu putaran jarum menit = 60 menit.",
   "error": "salah-lama-waktu",
   "suffix": "menit"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Berapa bagian putaran? (paling sederhana)",
   "answer": {
    "num": 3,
    "den": 4
   },
   "hint": "15 menit adalah 1/4 putaran. 45 menit ada berapa kali 15 menit?",
   "explain": "45 menit = 3 × 15 menit = 3/4 putaran.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: 1/4 putaran = 90°. Berapa derajat 3/4 putaran?",
   "answer": "270",
   "hint": "3 × 90.",
   "explain": "3 × 90° = 270°.",
   "error": "salah-fakta-kali",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: 270° + 90° (sisa 15 menit) = ?",
   "answer": "360",
   "hint": "Harus sama dengan satu putaran penuh.",
   "explain": "360°, satu putaran penuh. Cocok.",
   "error": "salah-fakta-tambah",
   "suffix": "°"
  }
 ],
 "conclusion": "Jarum menit berputar $\\frac{3}{4}$ putaran, yaitu $270^\\circ$.",
 "visual": {
  "type": "clock",
  "hour": 7,
  "minute": 45
 }
}
```

## Kesalahan yang sering terjadi

- **Membaca skala yang salah.** Membaca 55° padahal sudutnya tumpul. Selalu perkirakan dulu (lancip atau tumpul), lalu baca skala yang dimulai dari 0 pada kaki pertama.
- **Titik pusat busur tidak di titik sudut.** Kalau busur bergeser dari engsel, angka yang terbaca salah. Pastikan pusat busur tepat di titik sudut.
- **Huruf tengah bukan titik sudut.** Menulis $\angle QPR$ untuk sudut di Q. Huruf tengah harus engselnya: $\angle PQR$.
- **Mengira kaki yang lebih panjang berarti sudut lebih besar.** Ingat pintu: panjang daun pintu tidak mengubah seberapa lebar pintu terbuka.
- **Salah menghubungkan putaran dan derajat.** Menulis $\frac{1}{2}$ putaran $= 90^\circ$. Ingat: $\frac{1}{4} = 90^\circ$, $\frac{1}{2} = 180^\circ$, $\frac{3}{4} = 270^\circ$, 1 putaran $= 360^\circ$.

## Ringkasan

- Sudut punya titik sudut dan dua kaki. Nama tiga huruf: titik sudut di tengah, misalnya $\angle ABC$. Atau satu huruf, misalnya $\angle a$.
- Besar sudut diukur dalam derajat ($^\circ$) dengan busur derajat.
- Mengukur: pusat busur di titik sudut, garis dasar di satu kaki, baca skala yang dimulai dari 0 di kaki itu.
- Lancip: kurang dari $90^\circ$. Siku-siku: $90^\circ$. Tumpul: antara $90^\circ$ dan $180^\circ$.
- $\frac{1}{4}$ putaran $= 90^\circ$, $\frac{1}{2}$ putaran $= 180^\circ$, $\frac{3}{4}$ putaran $= 270^\circ$, 1 putaran $= 360^\circ$.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Perhatikan $\\angle KLM$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Titik mana yang menjadi titik sudut?",
   "options": [
    "L",
    "K",
    "M"
   ],
   "answer": "L",
   "hint": "Lihat huruf tengah.",
   "explain": "L adalah huruf tengah, jadi titik sudut.",
   "error": "salah-titik-sudut"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Apa kedua kakinya?",
   "options": [
    "LK dan LM",
    "KL dan KM",
    "KM dan LM"
   ],
   "answer": "LK dan LM",
   "hint": "Kaki berawal dari titik sudut.",
   "explain": "Kakinya LK dan LM.",
   "error": "salah-titik-sudut"
  }
 ],
 "conclusion": "L titik sudut, kakinya LK dan LM."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Tentukan jenis sudut $89^\\circ$, $90^\\circ$, dan $91^\\circ$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: 89° termasuk sudut apa?",
   "options": [
    "Lancip",
    "Siku-siku",
    "Tumpul"
   ],
   "answer": "Lancip",
   "hint": "Bandingkan dengan 90°.",
   "explain": "89° kurang dari 90°, jadi lancip.",
   "error": "salah-banding-siku"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: 90° termasuk sudut apa?",
   "options": [
    "Lancip",
    "Siku-siku",
    "Tumpul"
   ],
   "answer": "Siku-siku",
   "hint": "Tepat 90°.",
   "explain": "90° tepat siku-siku.",
   "error": "salah-banding-siku"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: 91° termasuk sudut apa?",
   "options": [
    "Lancip",
    "Siku-siku",
    "Tumpul"
   ],
   "answer": "Tumpul",
   "hint": "Lebih dari 90° tetapi kurang dari 180°.",
   "explain": "91° lebih dari 90°, jadi tumpul.",
   "error": "salah-banding-siku"
  }
 ],
 "conclusion": "89° lancip, 90° siku-siku, 91° tumpul."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Pada $\\angle AOB$, kaki OA tepat di angka 0 skala luar. Kaki OB melewati angka 40 di skala luar dan 140 di skala dalam. Berapa besar $\\angle AOB$?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Skala mana yang dibaca?",
   "options": [
    "Skala luar",
    "Skala dalam"
   ],
   "answer": "Skala luar",
   "hint": "Skala yang 0-nya di kaki pertama.",
   "explain": "OA di 0 skala luar, jadi baca skala luar.",
   "error": "salah-baca-alat-ukur"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Dari gambar, sudut ini jenis apa?",
   "options": [
    "Lancip",
    "Siku-siku",
    "Tumpul"
   ],
   "answer": "Lancip",
   "hint": "Bandingkan dengan pojok buku.",
   "explain": "Pintunya terbuka sedikit: lancip.",
   "error": "salah-banding-siku"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\angle AOB$ = ?",
   "answer": "40",
   "hint": "Angka skala luar yang dilewati OB.",
   "explain": "40°, cocok dengan sudut lancip.",
   "error": "salah-baca-alat-ukur",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi $\\angle AOB = 40^\\circ$.",
 "visual": {
  "type": "angle",
  "degrees": 40
 }
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Berapa derajat $\\frac{1}{2}$ putaran? Berapa derajat $\\frac{3}{4}$ putaran?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: 1/2 putaran = ?",
   "answer": "180",
   "hint": "Satu putaran 360°.",
   "explain": "360° ÷ 2 = 180°.",
   "error": "salah-fakta-bagi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: 3/4 putaran = ?",
   "answer": "270",
   "hint": "1/4 putaran = 90°.",
   "explain": "3 × 90° = 270°.",
   "error": "salah-fakta-kali",
   "suffix": "°"
  }
 ],
 "conclusion": "$\\frac{1}{2}$ putaran $= 180^\\circ$, $\\frac{3}{4}$ putaran $= 270^\\circ$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Jarum menit bergerak dari pukul 08.15 sampai pukul 08.45. Berapa derajat jarum menit berputar?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Berapa menit berlalu?",
   "answer": "30",
   "hint": "Dari menit 15 ke menit 45.",
   "explain": "45 − 15 = 30 menit.",
   "error": "salah-lama-waktu",
   "suffix": "menit"
  },
  {
   "kind": "fraction",
   "prompt": "Langkah 2: Berapa bagian putaran? (paling sederhana)",
   "answer": {
    "num": 1,
    "den": 2
   },
   "hint": "Satu putaran = 60 menit.",
   "explain": "30 dari 60 menit = 1/2 putaran.",
   "error": "pecahan-belum-sederhana",
   "simplest": true
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Berapa derajat?",
   "answer": "180",
   "hint": "1/2 putaran.",
   "explain": "1/2 putaran = 180°.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "Jarum menit berputar $180^\\circ$.",
 "visual": {
  "type": "clock",
  "hour": 8,
  "minute": 45
 }
}
```
