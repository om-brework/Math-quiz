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
### Contoh 1: <judul pendek>
**Soal.** ...

1. **Langkah 1: <nama langkah>.** penjelasan + hitungan
2. **Langkah 2: ...** ...
3. **Cek jawaban.** cara memastikan jawabannya benar

**Jawaban:** ...

### Contoh 2: ...
(Minimal 3 contoh, dari mudah ke sulit, termasuk satu soal cerita.)

## Kesalahan yang sering terjadi
- **<nama kesalahan>.** Contoh salah → kenapa salah → cara benar.
(3–5 butir.)

## Ringkasan
- (3–6 butir poin paling penting, termasuk rumus/langkah kunci.)

## Cek pemahaman
1. ...
2. ...
3. ...
4. ...
5. ...

### Kunci jawaban
1. jawaban + 1 kalimat alasan/langkah singkat
2. ...
```

## Aturan

1. **Langkah selalu bernomor dan bernama.** Setiap contoh dikerjakan dengan langkah eksplisit, supaya siswa belajar urutan berpikir yang sama setiap kali (pahami soal → pilih cara → hitung per langkah → cek).
2. **Analogi dulu, rumus kemudian.** Analogi dipakai lagi saat menjelaskan langkah, bukan hanya disebut sekali.
3. **Matematika pakai LaTeX**: inline `$\frac{3}{4}$`, blok `$$ ... $$` di baris sendiri. Untuk SD 1–3 boleh teks biasa (12 + 5 = 17) kecuali pecahan.
4. **Hitung susun / porogapit / tabel** ditulis di blok kode biasa (```` ``` ````) dengan spasi rata, supaya kolom sejajar:
   ```
     1
     4 7
   + 3 8
   -----
     8 5
   ```
5. **Konteks Indonesia**: Rupiah (Rp15.000), nama Indonesia (Budi, Siti, Made, Putu), tempat dan benda sehari-hari. Pemisah ribuan titik, desimal koma (2,5), kecuali di dalam LaTeX boleh `2{,}5`.
6. **Akurat.** Setiap angka di contoh dan kunci jawaban harus benar; hitung ulang sebelum menulis.
7. **Cakupan** mengikuti kolom `cakupan` di kurikulum.json: semua butirnya harus dibahas, jangan menambah materi jenjang lain.
8. Tidak ada emoji, tidak ada HTML. Panjang wajar: SD 1–3 sekitar 600–1.000 kata, SD 4–6 800–1.300, SMP/SMA 1.000–1.800.
