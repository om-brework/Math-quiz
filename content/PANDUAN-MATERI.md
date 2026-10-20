# Panduan Menulis Materi

Satu file Markdown per topik di `content/materi/<jenjang>/<id-topik>.md`, dengan `id` persis seperti di `content/kurikulum.json`. Aplikasi membaca file ini apa adanya, jadi format harus konsisten.

## Pembaca

Siswa sesuai jenjangnya, belajar sendiri tanpa guru. Orang tua juga ikut membaca. Bahasa Indonesia baku tapi ramah, kalimat pendek (di bawah 20 kata untuk SD, di bawah 25 kata untuk SMP/SMA), sapa siswa dengan "kamu".

- **SD 1–3:** kalimat sangat sederhana, satu ide per kalimat, banyak contoh benda nyata (kelereng, permen, kue, uang jajan). Hindari istilah asing.
- **SD 4–6:** boleh istilah matematika, selalu dijelaskan saat pertama muncul. Pakai model batang (bar model) untuk soal cerita.
- **SMP:** definisi tepat, notasi resmi, alasan di balik rumus ("kenapa rumusnya begitu").
- **SMA:** formal dan rapi, tetap dengan intuisi dan analogi sebelum rumus. Turunkan rumus penting, jangan sekadar memberi.

## Format file

```markdown
---
id: sd3-05-pembagian-bersusun
judul: Pembagian Bersusun (Porogapit)
jenjang: sd3
moe: "Primary 3 · Number and Algebra · Multiplication and Division"
prasyarat: [sd3-03-perkalian-6-7-8-9]
durasi_menit: 30
---

## Kenapa belajar ini?
(1–3 kalimat: kapan ini dipakai di kehidupan nyata.)

## Analogi
(Satu analogi utama yang dipakai terus di seluruh materi. Konkret, bisa dibayangkan.)

## Konsep
### <sub-konsep 1>
...
### <sub-konsep 2>
...

## Contoh langkah demi langkah
Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: <judul pendek>

```soal
{"title": "Kerjakan bersama", "text": "...", "steps": [ ...langkah bernama... , ...cek jawaban... ], "conclusion": "Jadi ..."}
```

### Contoh 2: ...
(Minimal 3 contoh, dari mudah ke sulit, termasuk satu soal cerita.)

## Kesalahan yang sering terjadi
- **<nama kesalahan>.** Contoh salah → kenapa salah → cara benar.
(3–5 butir.)

## Ringkasan
- (3–6 butir poin paling penting, termasuk rumus/langkah kunci.)

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1
```soal
{"title": "Soal 1", "text": "...", "steps": [...], "conclusion": "..."}
```
(5 soal; tidak ada "Kunci jawaban" — jawaban hanya muncul setelah 3 kali salah.)
```

## Aturan

1. **Langkah selalu bernomor dan bernama.** Setiap contoh dikerjakan dengan langkah eksplisit, supaya siswa belajar urutan berpikir yang sama setiap kali (pahami soal → pilih cara → hitung per langkah → cek).
2. **Analogi dulu, rumus kemudian.** Analogi dipakai lagi saat menjelaskan langkah, bukan hanya disebut sekali.
3. **Matematika pakai LaTeX**: inline `$\frac{3}{4}$`, blok `$$ ... $$` di baris sendiri. Untuk SD 1–3 boleh teks biasa (12 + 5 = 17) kecuali pecahan.
4. **Gambar dulu, teks kemudian.** Hitung susun, porogapit, garis bilangan, pecahan, grafik, bangun, dan model batang ditampilkan dengan blok ```` ```anim ```` (animasi) atau ```` ```visual ```` (gambar diam), bukan gambar ASCII. Lihat bagian *Blok bergambar dan interaktif* di bawah. Blok kode biasa hanya untuk tabel sederhana yang memang lebih jelas sebagai teks (ditampilkan sebagai papan tulis).
5. **Konteks Indonesia**: Rupiah (Rp15.000), nama Indonesia (Budi, Siti, Made, Putu), tempat dan benda sehari-hari. Pemisah ribuan titik, desimal koma (2,5), kecuali di dalam LaTeX boleh `2{,}5`.
6. **Akurat.** Setiap angka di contoh dan kunci jawaban harus benar; hitung ulang sebelum menulis.
7. **Cakupan** mengikuti kolom `cakupan` di kurikulum.json: semua butirnya harus dibahas, jangan menambah materi jenjang lain.
8. Tidak ada emoji, tidak ada HTML. Panjang wajar: SD 1–3 sekitar 600–1.000 kata, SD 4–6 800–1.300, SMP/SMA 1.000–1.800.

## Blok bergambar dan interaktif

Materi tidak boleh hanya teks. Setiap materi punya minimal **2 blok `anim`/`visual`** (di Analogi dan Konsep), semua contoh di **Contoh langkah demi langkah** berupa blok `soal`, dan **Cek pemahaman** berisi 5 blok `soal`. Isi blok adalah JSON satu objek. Di dalam string JSON, garis miring LaTeX ditulis ganda: `"$\\frac{1}{2}$"`.

### Blok `soal` (dikerjakan siswa langkah demi langkah)

```soal
{"title": "Contoh 2", "text": "Hitung $47 + 38$.", "visual": {"type": "base10", "tens": 4, "ones": 7},
 "steps": [
  {"kind": "number", "prompt": "Langkah 1: Jumlahkan satuan. 7 + 8 = ?", "answer": "15", "hint": "...", "explain": "...", "error": "salah-fakta-tambah"},
  {"kind": "choice", "prompt": "Perlu menyimpan?", "options": ["Ya", "Tidak"], "answer": "Ya", "hint": "...", "explain": "...", "error": "lupa-simpan"},
  {"kind": "column", "op": "+", "a": 47, "b": 38, "prompt": "Kerjakan bersusun.", "hint": "...", "explain": "..."}
 ],
 "conclusion": "Jadi 47 + 38 = 85."}
```

Jenis langkah:
- `number` — isian angka (bulat, negatif, desimal "2,5", ribuan "1.250"). `prefix`/`suffix` opsional ("Rp", "cm").
- `choice` — pilihan ganda 2–5 opsi; dipakai untuk jawaban berbentuk aljabar, akar, teks, atau alasan. Opsi pengecoh harus kesalahan yang masuk akal.
- `fraction` — pecahan positif `{"num": 3, "den": 4}` (campuran: tambah `"whole"` dan `"mixed": true`; `"simplest": true` mewajibkan bentuk paling sederhana).
- `column` — widget hitung susun (`op` `+`, `-`, `×`; untuk × pengali satu angka).
- `longdiv` — widget porogapit (`dividend`, `divisor`).

Aturan langkah: setiap langkah bernama ("Langkah 2: Kurangi kedua ruas dengan 5"), satu hitungan kecil per langkah, langkah terakhir biasanya **cek jawaban**. `hint` memberi arah tanpa membocorkan jawaban; `explain` menjelaskan hasilnya. `error` diambil dari `content/kesalahan/*.json` (default `salah-langkah-materi`).

### Blok `anim` (animasi dengan tombol putar/langkah)

| type | isi | untuk |
|---|---|---|
| `susun` | `op` (`+` `-` `×`), `a`, `b` | hitung susun dengan simpan/pinjam |
| `porogapit` | `a`, `b` | pembagian bersusun |
| `stik` | `op` (`+` `-`), `a`, `b` ≤ 99 | stik es krim ikat sepuluhan |
| `benda` | `op` (`+` `-` `×` `÷`), `a`, `b`, `item` | benda dikumpulkan/dibagi |
| `garis` | `from`, `to`, `start`, `jumps` [+/−], `step` | lompatan katak di garis bilangan |
| `pecahan` | `parts`, `shaded`, `shape` (`lingkaran`/`batang`), `name` | pecahan diarsir bertahap |
| `persamaan` | `baris`: [{`tex`, `say`, `op`?}] | langkah aljabar baris demi baris (timbangan) |
| `grafik` | `xmin` `xmax` `ymin` `ymax`, `kurva`: [{`f`: "x^2-2x-3", `label`}], `titik`, `garis` (asimtot `{"x": 2}`), `langkah`? | grafik fungsi tergambar perlahan |
| `batang` | `bars` (seperti visual barModel), `total`, `question`, `langkah`: [{`say`, `bars`, `total`?, `question`?}] | model batang soal cerita |
| `bangun` | `titik` {"A": [0,0], ...}, `sisi` [["A","B","4 cm"]], `sudut` [{`di`,`dari`,`ke`,`label`,`siku`}], `lingkaran`, `langkah`: [{`say`, `sisi`, `sudut`, `sorot`}] | geometri, trigonometri, Pythagoras |

Ekspresi `f` di grafik: `x`, angka, `+ - * / ^`, kurung, perkalian tersirat (`2x`, `3(x+1)`), `sin cos tan exp ln log sqrt abs`, `pi`, `e`.

### Blok `visual` (gambar diam)

Semua jenis di `resources/js/practice/types.ts`: `objects`, `base10`, `numberLine`, `clock`, `fraction`, `barModel`, `pictogram`, `barChart`, `shape`, `shapes`, `solid`, `ruler`, `grid`, `rect`, `angle`, `lines`, `money`, `scale`, `table`. Tambah `"caption"` untuk keterangan di bawah gambar.

Contoh lengkap: `sd1/sd1-04-tambah-kurang-bersusun-100.md` dan `sd3/sd3-05-pembagian-bersusun.md`. Semua blok diperiksa oleh `npx vitest run -t "materi"`.
