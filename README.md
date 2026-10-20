# Langkah — belajar matematika selangkah demi selangkah

Aplikasi belajar matematika SD–SMA berbasis silabus Singapura (MOE), untuk keluarga Indonesia. Ada tiga peran:

- **Siswa**: membaca materi dengan analogi, lalu mengerjakan latihan yang dipecah menjadi langkah-langkah (hitung susun dengan kotak simpanan/pinjaman, porogapit Bagi → Kali → Kurang → Turun, dan seterusnya). Tingkat soal naik/turun otomatis.
- **Orang tua**: membuat akun anak, melihat laporan per anak (kesalahan yang paling sering, artinya, dan apa yang bisa dilatih di rumah), dan berlangganan.
- **Admin**: ringkasan bisnis (MRR, pendapatan, trial), pelanggan, pembayaran, dan paket langganan.

Stack: Laravel 12, Inertia 2, React 19 + TypeScript, Tailwind 4, MySQL (SQLite untuk lokal/tes), Midtrans Snap.

## Isi

| | Jumlah | Lokasi |
|---|---|---|
| Peta kurikulum (SD 1 – SMA 12) | 12 kelas, 136 topik | `content/kurikulum.json` |
| Materi lengkap per topik | 136 file Markdown (±185 ribu kata) | `content/materi/<kelas>/<topik>.md` |
| Generator soal bertahap | SD 1–3: 38 topik, 123 keterampilan, 3 tingkat | `resources/js/practice/generators/` |
| Kode kesalahan untuk laporan | 191 kode | `content/kesalahan/*.json` |

Pemetaan kelas: SD 1–6 = Primary 1–6, SMP 7–9 = Secondary 1–3, SMA 10 = Secondary 4 + Additional Mathematics, SMA 11–12 = Additional Mathematics lanjutan + H2 Mathematics (JC1–2). Konteks soal memakai Rupiah dan nama Indonesia.

Cara menulis materi: `content/PANDUAN-MATERI.md`. Setelah mengubah isi `content/`, jalankan `php artisan konten:impor`. Setelah menambah generator, jalankan `npm run manifest` lalu `php artisan konten:impor`.

## Cara kerja latihan

1. Soal dibuat di peramban oleh generator berbenih (`seed` disimpan, jadi soal bisa dibuat ulang persis).
2. Tiap soal terdiri dari langkah (`number`, `choice`, `fraction`, `column`, `longdiv`). Langkah berikutnya baru muncul setelah langkah sekarang selesai. Maksimal 3 percobaan per langkah; petunjuk muncul setelah salah pertama.
3. Setiap langkah yang salah mengirim **kode kesalahan** yang spesifik (misalnya `lupa-simpan`, `kurang-terbalik`, `lupa-nol-hasil-bagi`, `keliling-luas-tertukar`). Server menyimpannya di `attempt_errors`.
4. Penguasaan per keterampilan (`skill_masteries`): 3 benar berturut-turut → naik tingkat; 2 salah dari 3 terakhir → turun tingkat.
5. Laporan orang tua (`app/Services/ReportService.php`) merangkum kode kesalahan yang paling sering, contoh soal terakhir dan jawaban anak, keterampilan lemah/kuat, aktivitas 14 hari, dan saran.

## Langganan dan Midtrans

- Daftar → otomatis **7 hari gratis** (2 anak). Topik 1–2 di setiap kelas selalu gratis.
- Paket (bisa diubah di Admin → Paket): Bulanan Rp79.000, 6 Bulan Rp399.000, Tahunan Rp699.000. **Harga ini contoh; sesuaikan sendiri.**
- Bayar lewat Midtrans Snap (QRIS, e-wallet, VA bank, kartu). Langganan diperpanjang hanya oleh **notifikasi server-ke-server** yang tanda tangannya valid (`POST /midtrans/notifikasi`), idempoten, dan masa baru ditambahkan setelah masa aktif berakhir.
- Pengaturan di Midtrans Dashboard → Settings → Configuration:
  - Payment Notification URL: `https://DOMAIN-ANDA/midtrans/notifikasi`
  - Finish Redirect URL: `https://DOMAIN-ANDA/orang-tua/langganan/selesai`
- Admin bisa menambah masa langganan manual (transfer bank, sekolah mitra) di Admin → Pelanggan.

## Menjalankan di lokal

```bash
composer install && npm install
cp .env.example .env && php artisan key:generate
touch database/database.sqlite          # atau isi DB_* untuk MySQL
php artisan migrate --seed              # impor konten, paket, dan akun contoh
composer run dev                         # server + vite
```

Akun contoh (hanya `APP_ENV=local`): admin `admin@langkah.test` / `password`, orang tua `ortu@langkah.test` / `password`, siswa `putu` / PIN `1234` (punya riwayat latihan 30 hari). Halaman pengembang: `/coba-soal` (semua generator) dan `/coba-visual` (semua gambar soal). Tanpa kunci Midtrans di lokal, halaman langganan menampilkan tombol "Simulasikan lunas".

## Produksi (MySQL)

```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://domain-anda
DB_CONNECTION=mysql
DB_HOST=...  DB_DATABASE=...  DB_USERNAME=...  DB_PASSWORD=...
ADMIN_EMAIL=email-admin@domain   ADMIN_PASSWORD=kata-sandi-kuat
MIDTRANS_SERVER_KEY=...  MIDTRANS_CLIENT_KEY=...  MIDTRANS_IS_PRODUCTION=true
MAIL_* (untuk reset kata sandi)
```

```bash
composer install --no-dev --optimize-autoloader
npm ci && npm run build
php artisan migrate --force && php artisan db:seed --force   # konten + paket + admin dari .env
php artisan config:cache route:cache view:cache
```

Butuh hosting PHP 8.2+ (VPS, Laravel Forge/Cloud, atau shared hosting dengan SSH), bukan Vercel. Pasang cron `* * * * * php artisan schedule:run` (menandai langganan kedaluwarsa tiap jam).

## Tes

```bash
php artisan test     # backend: daftar+trial, akun anak & PIN, kunci topik, latihan & laporan, Midtrans (signature, jumlah, idempoten, perpanjangan), admin
npm test             # mesin soal + semua generator (60 seed × keterampilan × tingkat)
npx tsc --noEmit
```
