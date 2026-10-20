---
id: smp3-10-peluang-majemuk
judul: Peluang Kejadian Majemuk
jenjang: smp3
moe: "Secondary 3 · Statistics and Probability · S2 Probability"
prasyarat: [smp2-12-peluang-dasar]
durasi_menit: 50
---

## Kenapa belajar ini?

Kejadian sehari-hari sering terdiri dari beberapa langkah: hujan atau tidak, lalu bus terlambat atau tidak. Peluang kejadian majemuk membantu kamu menghitung kemungkinan gabungan seperti "hujan **dan** terlambat" atau "merah **atau** hijau" dengan rapi dan tanpa menebak.

## Analogi

Bayangkan perjalanan dari rumah ke sekolah melewati **jalan bercabang**.

- Di setiap **persimpangan**, kamu memilih salah satu cabang. Setiap cabang punya peluang, dan jumlah peluang semua cabang di satu persimpangan selalu 1.
- Satu **rute lengkap** dari rumah ke ujung adalah satu hasil gabungan. Untuk melewati cabang pertama **dan** cabang kedua, peluangnya **dikalikan** sepanjang rute.
- Kalau ada beberapa rute yang sama-sama memenuhi syarat, kamu boleh lewat rute ini **atau** rute itu. Peluangnya **dijumlahkan**, karena dua rute berbeda tidak bisa dilewati sekaligus.

Peta jalan bercabang ini disebut **diagram pohon**. Pegangan utamanya: **kalikan sepanjang cabang, jumlahkan antar-rute.**

## Konsep

### Diagram kemungkinan

Jika ada dua percobaan sederhana, misalnya dua dadu, semua hasil bisa disusun dalam **tabel** seperti papan catur. Baris untuk dadu pertama, kolom untuk dadu kedua.

```
            Dadu 2
  +  |  1   2   3   4   5   6
-----+------------------------
  1  |  2   3   4   5   6   7
  2  |  3   4   5   6   7   8
D 3  |  4   5   6   7   8   9
1 4  |  5   6   7   8   9  10
  5  |  6   7   8   9  10  11
  6  |  7   8   9  10  11  12
```

Ada $6 \times 6 = 36$ kotak, semuanya sama mungkin. Peluang suatu kejadian adalah banyak kotak yang cocok dibagi 36.

### Kejadian saling lepas dan aturan penjumlahan

Dua kejadian **saling lepas** jika tidak bisa terjadi bersamaan. Contoh: mengambil satu kelereng, kelereng itu merah atau hijau, tidak mungkin keduanya.

$$P(A \text{ atau } B) = P(A) + P(B) \quad \text{(jika } A, B \text{ saling lepas)}$$

**Kenapa?** Hasil yang membuat $A$ terjadi dan hasil yang membuat $B$ terjadi tidak tumpang tindih, jadi banyak hasilnya tinggal dijumlah. Ini seperti dua rute berbeda di peta jalan.

Kasus khusus: $P(\text{bukan } A) = 1 - P(A)$, karena "$A$" dan "bukan $A$" saling lepas dan pasti salah satunya terjadi.

### Kejadian saling bebas dan aturan perkalian

Dua kejadian **saling bebas** jika terjadinya yang satu **tidak mengubah** peluang yang lain. Contoh: hasil lemparan koin tidak memengaruhi hasil dadu.

$$P(A \text{ dan } B) = P(A) \times P(B) \quad \text{(jika } A, B \text{ saling bebas)}$$

**Kenapa dikali?** Misalkan $P(A) = \frac{1}{2}$ dan $P(B) = \frac{1}{3}$. Dari banyak percobaan, kira-kira setengahnya memunculkan $A$. Dari bagian itu, sepertiganya juga memunculkan $B$. Jadi bagian yang memunculkan keduanya adalah $\frac{1}{3}$ dari $\frac{1}{2}$, yaitu $\frac{1}{2} \times \frac{1}{3} = \frac{1}{6}$.

### Diagram pohon

1. Gambar cabang untuk tahap pertama, tulis peluangnya di setiap cabang.
2. Dari ujung setiap cabang, gambar cabang tahap kedua.
3. Kalikan sepanjang cabang untuk mendapat peluang setiap rute.
4. Jumlahkan rute-rute yang memenuhi syarat.

Jika pengambilan dilakukan **tanpa pengembalian**, peluang di cabang kedua **berubah**, karena isi kantong sudah berkurang. Aturannya tetap sama: kalikan sepanjang cabang dengan peluang yang sudah disesuaikan.

## Contoh langkah demi langkah

### Contoh 1: Diagram kemungkinan dua dadu

**Soal.** Dua dadu dilempar. Hitung peluang jumlah mata dadu 8, dan peluang jumlahnya paling sedikit 10.

1. **Langkah 1: Tentukan ruang sampel.** Pakai tabel di atas: 36 hasil yang sama mungkin.
2. **Langkah 2: Hitung kotak berjumlah 8.** $(2,6), (3,5), (4,4), (5,3), (6,2)$: ada 5 kotak.
3. **Langkah 3: Peluang jumlah 8.** $\frac{5}{36}$.
4. **Langkah 4: Hitung kotak berjumlah 10, 11, atau 12.** Jumlah 10: $(4,6), (5,5), (6,4)$; jumlah 11: $(5,6), (6,5)$; jumlah 12: $(6,6)$. Total 6 kotak.
5. **Langkah 5: Peluang paling sedikit 10.** $\frac{6}{36} = \frac{1}{6}$.
6. **Cek jawaban.** Di tabel, angka 8 muncul pada diagonal sebanyak 5 kali. Angka 10, 11, 12 ada di pojok kanan bawah: $3 + 2 + 1 = 6$ kotak. Cocok.

**Jawaban:** $P(\text{jumlah } 8) = \frac{5}{36}$, $P(\text{jumlah} \ge 10) = \frac{1}{6}$.

### Contoh 2: Kejadian saling lepas

**Soal.** Kantong berisi 5 kelereng merah, 3 biru, dan 2 hijau. Satu kelereng diambil acak. Hitung peluang terambil merah atau hijau.

1. **Langkah 1: Hitung total.** $5 + 3 + 2 = 10$ kelereng.
2. **Langkah 2: Periksa saling lepas.** Satu kelereng tidak mungkin merah dan hijau sekaligus. Jadi saling lepas.
3. **Langkah 3: Jumlahkan.** $P(M) + P(H) = \frac{5}{10} + \frac{2}{10} = \frac{7}{10}$.
4. **Cek jawaban.** Cara lain: $1 - P(\text{biru}) = 1 - \frac{3}{10} = \frac{7}{10}$. Sama.

**Jawaban:** $\frac{7}{10}$.

### Contoh 3: Soal cerita dengan diagram pohon (saling bebas)

**Soal.** Peluang hujan pada pagi hari di Denpasar adalah 0,3. Peluang bus sekolah Putu terlambat adalah 0,2, dan tidak bergantung pada hujan. Hitung peluang (a) hujan dan bus terlambat, (b) tepat satu dari kedua kejadian itu terjadi.

1. **Langkah 1: Gambar pohon.** Persimpangan pertama: Hujan (0,3) atau Tidak hujan (0,7). Persimpangan kedua dari tiap cabang: Terlambat (0,2) atau Tepat waktu (0,8).

   ```
                 0,2  Terlambat     0,3 x 0,2 = 0,06
       0,3 Hujan <
                 0,8  Tepat waktu   0,3 x 0,8 = 0,24
   <
                 0,2  Terlambat     0,7 x 0,2 = 0,14
       0,7 Tidak <
                 0,8  Tepat waktu   0,7 x 0,8 = 0,56
   ```

2. **Langkah 2: Jawab (a), kalikan sepanjang satu rute.** $0{,}3 \times 0{,}2 = 0{,}06$.
3. **Langkah 3: Tentukan rute untuk (b).** "Tepat satu" berarti rute (Hujan, Tepat waktu) atau (Tidak hujan, Terlambat).
4. **Langkah 4: Jumlahkan rute.** $0{,}24 + 0{,}14 = 0{,}38$.
5. **Cek jawaban.** Keempat rute berjumlah $0{,}06 + 0{,}24 + 0{,}14 + 0{,}56 = 1$. Pohon benar.

**Jawaban:** (a) 0,06; (b) 0,38.

### Contoh 4: Tanpa pengembalian

**Soal.** Toples berisi 5 permen rasa stroberi dan 3 permen rasa jeruk. Siti mengambil 2 permen satu per satu tanpa mengembalikan. Hitung peluang kedua permen rasanya sama.

1. **Langkah 1: Cabang pertama.** $P(S) = \frac{5}{8}$, $P(J) = \frac{3}{8}$.
2. **Langkah 2: Cabang kedua, sesuaikan isi toples.** Tinggal 7 permen. Jika pertama stroberi: $P(S) = \frac{4}{7}$, $P(J) = \frac{3}{7}$. Jika pertama jeruk: $P(S) = \frac{5}{7}$, $P(J) = \frac{2}{7}$.
3. **Langkah 3: Kalikan sepanjang rute yang cocok.** $P(S, S) = \frac{5}{8} \times \frac{4}{7} = \frac{20}{56}$ dan $P(J, J) = \frac{3}{8} \times \frac{2}{7} = \frac{6}{56}$.
4. **Langkah 4: Jumlahkan.** $\frac{20}{56} + \frac{6}{56} = \frac{26}{56} = \frac{13}{28}$.
5. **Cek jawaban.** Rute berbeda rasa: $\frac{5}{8} \times \frac{3}{7} + \frac{3}{8} \times \frac{5}{7} = \frac{30}{56}$. Total $\frac{26}{56} + \frac{30}{56} = 1$. Cocok.

**Jawaban:** $\frac{13}{28}$.

## Kesalahan yang sering terjadi

- **Menjumlah padahal harus mengali.** "Hujan **dan** terlambat" bukan $0{,}3 + 0{,}2 = 0{,}5$. Kata "dan" sepanjang satu rute berarti dikalikan.
- **Menjumlah kejadian yang tidak saling lepas.** Pada satu dadu, $P(\text{genap atau} > 3) \ne \frac{3}{6} + \frac{3}{6}$, karena 4 dan 6 terhitung dua kali. Jawaban benar $\frac{4}{6}$ (hasil 2, 4, 5, 6).
- **Lupa menyesuaikan cabang tanpa pengembalian.** Menulis $\frac{5}{8} \times \frac{5}{8}$ untuk dua stroberi. Setelah satu diambil, tinggal 4 stroberi dari 7 permen.
- **Hanya menghitung satu rute untuk "tepat satu".** Ada dua urutan: yang pertama terjadi atau yang kedua terjadi.
- **Tidak memeriksa jumlah cabang.** Peluang di satu persimpangan harus berjumlah 1, dan semua rute juga berjumlah 1.

## Ringkasan

- Diagram kemungkinan (tabel) cocok untuk dua percobaan sederhana seperti dua dadu.
- Saling lepas: $P(A \text{ atau } B) = P(A) + P(B)$.
- Saling bebas: $P(A \text{ dan } B) = P(A) \times P(B)$.
- Diagram pohon: kalikan sepanjang cabang, jumlahkan antar-rute.
- Tanpa pengembalian: peluang di cabang berikutnya berubah sesuai isi yang tersisa.
- Cek: semua rute berjumlah 1; $P(\text{bukan } A) = 1 - P(A)$.

## Cek pemahaman

1. Dua dadu dilempar. Berapa peluang kedua mata dadu genap?
2. Sebuah koin dan sebuah dadu dilempar bersama. Berapa peluang muncul sisi angka pada koin dan mata 6 pada dadu?
3. $A$ dan $B$ saling lepas dengan $P(A) = 0{,}35$ dan $P(B) = 0{,}4$. Hitung $P(A \text{ atau } B)$ dan $P(\text{bukan } A \text{ dan bukan } B)$.
4. Peluang Made memasukkan lemparan bebas basket adalah 0,7 dan setiap lemparan saling bebas. Ia melempar 2 kali. Berapa peluang tepat satu lemparan masuk?
5. Kotak berisi 4 bola merah dan 6 bola putih. Dua bola diambil tanpa pengembalian. Berapa peluang keduanya merah?

### Kunci jawaban

1. $\frac{3}{6} \times \frac{3}{6} = \frac{9}{36} = \frac{1}{4}$.
2. $\frac{1}{2} \times \frac{1}{6} = \frac{1}{12}$.
3. $0{,}35 + 0{,}4 = 0{,}75$; lalu $1 - 0{,}75 = 0{,}25$.
4. $0{,}7 \times 0{,}3 + 0{,}3 \times 0{,}7 = 0{,}21 + 0{,}21 = 0{,}42$.
5. $\frac{4}{10} \times \frac{3}{9} = \frac{12}{90} = \frac{2}{15}$.
