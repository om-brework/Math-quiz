---
id: sd6-07-sudut-bangun-gabungan
judul: Sudut pada Bangun Gabungan
jenjang: sd6
moe: "Primary 6 · Measurement and Geometry · Geometry (Unknown Angles in Composite Figures)"
prasyarat: [sd4-11-sifat-persegi-panjang, sd5-10-sudut-garis-titik, sd5-11-segitiga, sd5-12-jajargenjang-belah-ketupat-trapesium]
durasi_menit: 50
---

## Kenapa belajar ini?

Tukang kayu, arsitek, dan pembuat layang-layang sering harus tahu besar sudut yang tidak bisa diukur langsung. Mereka menghitungnya dari sudut lain yang sudah diketahui. Di materi ini kamu belajar mencari sudut pada gambar yang tersusun dari beberapa bangun datar.

## Analogi

Bayangkan kamu seorang **detektif sudut**. Kamu tidak boleh memakai busur derajat. Kamu hanya boleh memakai **kartu petunjuk**, yaitu sifat-sifat bangun yang sudah kamu pelajari.

Cara kerja detektif:

1. Lihat sudut mana yang sudah diketahui.
2. Pilih kartu petunjuk yang menghubungkan sudut itu dengan sudut lain.
3. Hitung satu sudut, lalu pakai sudut baru itu sebagai petunjuk berikutnya.

Setiap langkah di contoh nanti akan menyebut kartu petunjuk yang dipakai.

## Konsep

### Kartu petunjuk tentang garis dan titik

- **Kartu A, garis lurus:** sudut-sudut pada garis lurus jumlahnya $180^\circ$.
- **Kartu B, satu titik:** sudut-sudut di sekeliling satu titik jumlahnya $360^\circ$.
- **Kartu C, bertolak belakang:** dua sudut yang bertolak belakang sama besar.

```anim
{"type": "bangun", "title": "Kartu A: sudut pada garis lurus", "titik": {"A": [-4, 0], "B": [0, 0], "C": [4, 0], "D": [2.0, 3.46]}, "sisi": [["A", "B"], ["B", "C"], ["B", "D"]], "sudut": [{"di": "B", "dari": "D", "ke": "A", "label": "120^\\circ"}, {"di": "B", "dari": "C", "ke": "D", "label": "60^\\circ"}], "langkah": [{"say": "ABC adalah garis lurus. Garis BD memotongnya di B.", "sisi": 3, "sudut": 0}, {"say": "Sudut ABD = 120°.", "sisi": 3, "sudut": 1, "sorot": ["A", "B", "D"]}, {"say": "Sudut DBC = 180° − 120° = 60°. Jumlahnya 180°.", "sisi": 3, "sudut": 2, "sorot": ["D", "B", "C"]}]}
```

### Kartu petunjuk tentang segitiga

- **Kartu D, jumlah sudut segitiga:** $180^\circ$.
- **Kartu E, segitiga sama kaki:** dua sudut alasnya (sudut di depan dua sisi yang sama panjang) sama besar.
- **Kartu F, segitiga sama sisi:** semua sudutnya $60^\circ$.
- **Kartu G, segitiga siku-siku:** satu sudutnya $90^\circ$, dua sudut lain jumlahnya $90^\circ$.

### Kartu petunjuk tentang segiempat

- **Kartu H, persegi dan persegi panjang:** semua sudutnya $90^\circ$. Pada persegi, semua sisi sama panjang.
- **Kartu I, jajargenjang dan belah ketupat:** sudut yang berhadapan sama besar. Dua sudut yang berdekatan jumlahnya $180^\circ$. Pada belah ketupat, semua sisi sama panjang.
- **Kartu J, trapesium:** dua sudut di antara sepasang sisi sejajar (pada kaki yang sama) jumlahnya $180^\circ$.
- **Kartu K, segiempat apa pun:** jumlah keempat sudutnya $360^\circ$.

### Cara membaca nama sudut

$\angle ABC$ adalah sudut di titik $B$, di antara garis $BA$ dan $BC$. Huruf tengah selalu titik sudutnya.

```anim
{"type": "bangun", "title": "Membaca nama sudut ABC", "titik": {"A": [1, 4], "B": [0, 0], "C": [5, 0]}, "sisi": [["B", "A"], ["B", "C"]], "sudut": [{"di": "B", "dari": "C", "ke": "A", "label": "\\angle ABC"}], "langkah": [{"say": "Garis BA dan garis BC bertemu di titik B.", "sudut": 0}, {"say": "Sudut ABC ada di titik B, huruf tengahnya.", "sudut": 1, "sorot": ["B"]}]}
```

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Persegi panjang dan segitiga

```anim
{"type": "bangun", "title": "Persegi panjang ABCD dan garis AE", "titik": {"A": [0, 4], "B": [8, 4], "C": [8, 0], "D": [0, 0], "E": [2.8, 0]}, "sisi": [["A", "B"], ["B", "C"], ["C", "E"], ["E", "D"], ["D", "A"], ["A", "E"]], "sudut": [{"di": "A", "dari": "D", "ke": "E", "label": "35^\\circ"}, {"di": "D", "dari": "E", "ke": "A", "siku": true}, {"di": "E", "dari": "A", "ke": "D", "label": "?"}, {"di": "E", "dari": "C", "ke": "A", "label": "?"}], "langkah": [{"say": "ABCD persegi panjang, E pada DC. Sudut DAE = 35°, sudut ADE = 90°.", "sudut": 2}, {"say": "Segitiga ADE: sudut AED dicari dengan Kartu D.", "sudut": 3, "sorot": ["A", "D", "E"]}, {"say": "Garis lurus DEC: sudut AEC dicari dengan Kartu A.", "sudut": 4, "sorot": ["D", "E", "C"]}]}
```

```soal
{
 "title": "Contoh 1",
 "text": "$ABCD$ adalah persegi panjang. Titik $E$ terletak pada sisi $DC$. Garis $AE$ ditarik. $\\angle DAE = 35^\\circ$. Hitung $\\angle AED$ dan $\\angle AEC$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Kartu H. Berapa besar $\\angle ADE$?",
   "answer": "90",
   "hint": "D adalah pojok persegi panjang.",
   "explain": "Semua sudut persegi panjang $90^\\circ$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kartu D pada segitiga $ADE$. $\\angle AED$ = ?",
   "answer": "55",
   "hint": "$180^\\circ - 90^\\circ - 35^\\circ$.",
   "explain": "$\\angle AED = 55^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Kartu A pada garis lurus $DEC$. $\\angle AEC$ = ?",
   "answer": "125",
   "hint": "$180^\\circ - 55^\\circ$.",
   "explain": "$\\angle AEC = 125^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $55^\\circ + 125^\\circ$ = ?",
   "answer": "180",
   "hint": "Sudut pada garis lurus.",
   "explain": "$180^\\circ$. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi $\\angle AED = 55^\\circ$ dan $\\angle AEC = 125^\\circ$."
}
```

### Contoh 2: Jajargenjang dan segitiga

```anim
{"type": "bangun", "title": "Jajargenjang PQRS dan garis ST", "titik": {"P": [0, 0], "Q": [8, 0], "R": [9.54, 4.23], "S": [1.54, 4.23], "T": [3.08, 0]}, "sisi": [["P", "T"], ["T", "Q"], ["Q", "R"], ["R", "S"], ["S", "P"], ["S", "T"]], "sudut": [{"di": "P", "dari": "T", "ke": "S", "label": "70^\\circ"}, {"di": "S", "dari": "P", "ke": "T", "label": "40^\\circ"}, {"di": "T", "dari": "S", "ke": "P", "label": "?"}, {"di": "T", "dari": "Q", "ke": "S", "label": "?"}, {"di": "R", "dari": "S", "ke": "Q", "label": "?"}], "langkah": [{"say": "Diketahui sudut SPQ = 70° dan sudut PST = 40°.", "sudut": 2}, {"say": "Segitiga PST memberi sudut PTS (Kartu D).", "sudut": 3, "sorot": ["P", "S", "T"]}, {"say": "Garis lurus PTQ memberi sudut STQ (Kartu A).", "sudut": 4, "sorot": ["P", "T", "Q"]}, {"say": "Sudut QRS berhadapan dengan sudut SPQ (Kartu I).", "sudut": 5, "sorot": ["R", "P"]}]}
```

```soal
{
 "title": "Contoh 2",
 "text": "$PQRS$ adalah jajargenjang. $\\angle SPQ = 70^\\circ$. Titik $T$ terletak pada $PQ$, dan $\\angle PST = 40^\\circ$. Hitung $\\angle PTS$, $\\angle STQ$, dan $\\angle QRS$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Kartu D pada segitiga $PST$. $\\angle PTS$ = ?",
   "answer": "70",
   "hint": "$180^\\circ - 70^\\circ - 40^\\circ$.",
   "explain": "$\\angle PTS = 70^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kartu A pada garis $PTQ$. $\\angle STQ$ = ?",
   "answer": "110",
   "hint": "$180^\\circ - 70^\\circ$.",
   "explain": "$\\angle STQ = 110^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Sudut mana yang berhadapan dengan $\\angle QRS$?",
   "options": [
    "$\\angle SPQ$",
    "$\\angle PQR$",
    "$\\angle PSR$"
   ],
   "answer": "$\\angle SPQ$",
   "hint": "Sudut berhadapan ada di pojok seberang.",
   "explain": "R berseberangan dengan P, jadi $\\angle QRS = \\angle SPQ$.",
   "error": "salah-titik-sudut"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Kartu I. $\\angle QRS$ = ?",
   "answer": "70",
   "hint": "Sudut berhadapan sama besar.",
   "explain": "$\\angle QRS = 70^\\circ$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $70^\\circ + 110^\\circ + 70^\\circ + 110^\\circ$ = ?",
   "answer": "360",
   "hint": "Jumlah sudut segiempat (Kartu K).",
   "explain": "$360^\\circ$. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi $\\angle PTS = 70^\\circ$, $\\angle STQ = 110^\\circ$, dan $\\angle QRS = 70^\\circ$."
}
```

### Contoh 3: Soal cerita rangka trapesium

```anim
{"type": "bangun", "title": "Rangka trapesium sama kaki ABCD dengan tiang DE", "titik": {"A": [0, 0], "B": [10, 0], "C": [6.79, 3.83], "D": [3.21, 3.83], "E": [3.21, 0]}, "sisi": [["A", "E"], ["E", "B"], ["B", "C"], ["C", "D"], ["D", "A"], ["D", "E"]], "sudut": [{"di": "A", "dari": "B", "ke": "D", "label": "50^\\circ"}, {"di": "E", "dari": "D", "ke": "A", "siku": true}, {"di": "D", "dari": "A", "ke": "E", "label": "?"}, {"di": "D", "dari": "E", "ke": "C", "label": "?"}], "langkah": [{"say": "AB sejajar DC. Sudut DAB = 50°.", "sisi": 5, "sudut": 1}, {"say": "Tiang DE tegak lurus AB, jadi sudut AED = 90°.", "sudut": 2, "sorot": ["D", "E"]}, {"say": "Segitiga siku-siku AED memberi sudut ADE (Kartu G).", "sudut": 3, "sorot": ["A", "E", "D"]}, {"say": "Sudut EDC = sudut ADC dikurangi sudut ADE.", "sudut": 4, "sorot": ["E", "D", "C"]}]}
```

```soal
{
 "title": "Contoh 3",
 "text": "Rangka dinding berbentuk trapesium sama kaki $ABCD$, dengan $AB$ sejajar $DC$ dan $AD = BC$. $\\angle DAB = 50^\\circ$. Tiang $DE$ dipasang dari $D$ tegak lurus ke $AB$. Hitung $\\angle ADC$, $\\angle ADE$, dan $\\angle EDC$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Kartu J. $\\angle ADC$ = ?",
   "answer": "130",
   "hint": "$\\angle DAB$ dan $\\angle ADC$ ada pada kaki yang sama, di antara sisi sejajar.",
   "explain": "$180^\\circ - 50^\\circ = 130^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Kartu G pada segitiga siku-siku $AED$. $\\angle ADE$ = ?",
   "answer": "40",
   "hint": "$90^\\circ - 50^\\circ$.",
   "explain": "$\\angle ADE = 40^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\angle EDC = \\angle ADC - \\angle ADE$ = ?",
   "answer": "90",
   "hint": "$130^\\circ - 40^\\circ$.",
   "explain": "$\\angle EDC = 90^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: kenapa $\\angle EDC = 90^\\circ$ masuk akal?",
   "options": [
    "Tiang tegak lurus AB, dan DC sejajar AB",
    "Karena semua sudut trapesium 90°",
    "Karena DE sama panjang dengan AD"
   ],
   "answer": "Tiang tegak lurus AB, dan DC sejajar AB",
   "hint": "Ingat hubungan DC dan AB.",
   "explain": "Garis yang tegak lurus AB juga tegak lurus DC karena keduanya sejajar.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\angle ADC = 130^\\circ$, $\\angle ADE = 40^\\circ$, dan $\\angle EDC = 90^\\circ$."
}
```

### Contoh 4: Persegi dan segitiga sama sisi

```anim
{"type": "bangun", "title": "Persegi ABCD dan segitiga sama sisi BCE", "titik": {"A": [0, 4], "B": [4, 4], "C": [4, 0], "D": [0, 0], "E": [7.46, 2]}, "sisi": [["A", "B"], ["B", "C"], ["C", "D"], ["D", "A"], ["B", "E"], ["E", "C"], ["A", "E"]], "sudut": [{"di": "B", "dari": "C", "ke": "A", "siku": true}, {"di": "B", "dari": "E", "ke": "C", "label": "60^\\circ"}, {"di": "A", "dari": "E", "ke": "B", "label": "?"}], "langkah": [{"say": "Persegi ABCD dan segitiga sama sisi BCE.", "sisi": 6, "sudut": 0}, {"say": "Di titik B: 90° dari persegi dan 60° dari segitiga.", "sisi": 6, "sudut": 2, "sorot": ["B"]}, {"say": "Tarik AE. AB = BC = BE, jadi segitiga ABE sama kaki.", "sisi": 7, "sudut": 2, "sorot": ["A", "B", "E"]}, {"say": "Sudut BAE dicari dari segitiga sama kaki ABE.", "sisi": 7, "sudut": 3, "sorot": ["A"]}]}
```

```soal
{
 "title": "Contoh 4",
 "text": "$ABCD$ adalah persegi. Segitiga sama sisi $BCE$ digambar di luar persegi, menempel pada sisi $BC$. Garis $AE$ ditarik. Hitung $\\angle BAE$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Kartu H dan F. $\\angle ABE = \\angle ABC + \\angle CBE$ = ?",
   "answer": "150",
   "hint": "$90^\\circ + 60^\\circ$.",
   "explain": "$\\angle ABE = 150^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Mengapa $AB = BE$?",
   "options": [
    "AB = BC (persegi) dan BC = BE (sama sisi)",
    "Karena keduanya garis miring",
    "Karena sudutnya sama"
   ],
   "answer": "AB = BC (persegi) dan BC = BE (sama sisi)",
   "hint": "Cari sisi yang dipakai bersama oleh kedua bangun.",
   "explain": "Jadi segitiga $ABE$ sama kaki.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Kartu D. $\\angle BAE + \\angle BEA$ = ?",
   "answer": "30",
   "hint": "$180^\\circ - 150^\\circ$.",
   "explain": "Kedua sudut alas jumlahnya $30^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Kartu E. $\\angle BAE$ = ?",
   "answer": "15",
   "hint": "Kedua sudut alas sama besar.",
   "explain": "$30^\\circ \\div 2 = 15^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $150^\\circ + 15^\\circ + 15^\\circ$ = ?",
   "answer": "180",
   "hint": "Jumlah sudut segitiga.",
   "explain": "$180^\\circ$. Benar.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi $\\angle BAE = 15^\\circ$."
}
```

## Kesalahan yang sering terjadi

- **Mengukur atau menebak dari gambar.** Gambar tidak selalu digambar tepat. Selalu hitung memakai kartu petunjuk, bukan dari "kelihatannya".
- **Salah membaca nama sudut.** $\angle AED$ dibaca sebagai sudut di titik $A$. Salah. Huruf tengah, $E$, adalah titik sudutnya.
- **Memakai sifat yang tidak berlaku.** Menganggap sudut-sudut jajargenjang semuanya $90^\circ$. Hanya persegi dan persegi panjang yang semua sudutnya siku-siku.
- **Lupa melihat sisi yang sama panjang.** Pada Contoh 4, tidak sadar bahwa $AB = BE$, sehingga buntu. Saat bangun menempel, cari sisi yang dipakai bersama.
- **Salah memasangkan sudut trapesium.** Menjumlahkan $\angle DAB + \angle ABC = 180^\circ$. Salah. Pasangan $180^\circ$ adalah dua sudut pada kaki yang sama, di antara sisi sejajar, misalnya $\angle DAB + \angle ADC$.

## Ringkasan

- Kerjakan seperti detektif: mulai dari sudut yang diketahui, pakai satu sifat per langkah, dan tulis alasannya.
- Garis lurus $180^\circ$, satu titik $360^\circ$, segitiga $180^\circ$, segiempat $360^\circ$.
- Segitiga sama kaki: dua sudut alas sama. Segitiga sama sisi: semua $60^\circ$.
- Jajargenjang dan belah ketupat: sudut berhadapan sama, sudut berdekatan jumlahnya $180^\circ$.
- Trapesium: dua sudut di antara sisi sejajar pada kaki yang sama jumlahnya $180^\circ$.
- Cek dengan menjumlahkan sudut segitiga atau segiempat.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Pada segitiga $ABC$, $\\angle A = 48^\\circ$ dan $\\angle B = 77^\\circ$. Hitung $\\angle C$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\angle A + \\angle B$ = ?",
   "answer": "125",
   "hint": "48 + 77.",
   "explain": "$125^\\circ$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "$\\angle C$ = ?",
   "answer": "55",
   "hint": "Jumlah sudut segitiga $180^\\circ$.",
   "explain": "$180^\\circ - 125^\\circ = 55^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi $\\angle C = 55^\\circ$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "$KLMN$ adalah jajargenjang dengan $\\angle K = 64^\\circ$. Hitung $\\angle L$ dan $\\angle M$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\angle L$ berdekatan dengan $\\angle K$. $\\angle L$ = ?",
   "answer": "116",
   "hint": "Sudut berdekatan jumlahnya $180^\\circ$.",
   "explain": "$180^\\circ - 64^\\circ = 116^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "$\\angle M$ berhadapan dengan $\\angle K$. $\\angle M$ = ?",
   "answer": "64",
   "hint": "Sudut berhadapan sama besar.",
   "explain": "$\\angle M = 64^\\circ$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi $\\angle L = 116^\\circ$ dan $\\angle M = 64^\\circ$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "$ABCD$ adalah belah ketupat dengan $\\angle ABC = 120^\\circ$. Diagonal $AC$ ditarik. Hitung $\\angle BAC$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Segitiga $ABC$ termasuk segitiga ...",
   "options": [
    "sama kaki, karena AB = BC",
    "sama sisi",
    "siku-siku"
   ],
   "answer": "sama kaki, karena AB = BC",
   "hint": "Semua sisi belah ketupat sama panjang.",
   "explain": "$AB = BC$, jadi $\\angle BAC = \\angle BCA$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\angle BAC + \\angle BCA$ = ?",
   "answer": "60",
   "hint": "$180^\\circ - 120^\\circ$.",
   "explain": "$60^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "$\\angle BAC$ = ?",
   "answer": "30",
   "hint": "Bagi dua sama besar.",
   "explain": "$60^\\circ \\div 2 = 30^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi $\\angle BAC = 30^\\circ$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "$PQRS$ adalah trapesium dengan $PQ$ sejajar $SR$. $\\angle SPQ = 72^\\circ$ dan $\\angle PQR = 58^\\circ$. Hitung $\\angle PSR$ dan $\\angle QRS$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Pasangan sudut yang jumlahnya $180^\\circ$ adalah ...",
   "options": [
    "$\\angle SPQ$ dan $\\angle PSR$",
    "$\\angle SPQ$ dan $\\angle PQR$",
    "$\\angle SPQ$ dan $\\angle QRS$"
   ],
   "answer": "$\\angle SPQ$ dan $\\angle PSR$",
   "hint": "Dua sudut pada kaki yang sama, di antara sisi sejajar.",
   "explain": "Kaki $PS$: $\\angle SPQ + \\angle PSR = 180^\\circ$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\angle PSR$ = ?",
   "answer": "108",
   "hint": "$180^\\circ - 72^\\circ$.",
   "explain": "$\\angle PSR = 108^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "$\\angle QRS$ = ?",
   "answer": "122",
   "hint": "Kaki $QR$: $180^\\circ - 58^\\circ$.",
   "explain": "$\\angle QRS = 122^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi $\\angle PSR = 108^\\circ$ dan $\\angle QRS = 122^\\circ$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "$ABCD$ adalah persegi panjang. Diagonal $AC$ ditarik. $\\angle BAC = 28^\\circ$. Hitung $\\angle CAD$ dan $\\angle ACB$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\angle CAD = \\angle DAB - \\angle BAC$ = ?",
   "answer": "62",
   "hint": "$\\angle DAB = 90^\\circ$.",
   "explain": "$90^\\circ - 28^\\circ = 62^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Segitiga $ABC$ siku-siku di $B$. $\\angle ACB$ = ?",
   "answer": "62",
   "hint": "Dua sudut lain jumlahnya $90^\\circ$.",
   "explain": "$90^\\circ - 28^\\circ = 62^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  }
 ],
 "conclusion": "Jadi $\\angle CAD = 62^\\circ$ dan $\\angle ACB = 62^\\circ$."
}
```
