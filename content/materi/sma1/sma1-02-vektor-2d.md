---
id: sma1-02-vektor-2d
judul: Vektor di Bidang
jenjang: sma1
moe: "Secondary 4 · Geometry and Measurement · G7 Vectors in two dimensions"
prasyarat: [smp3-06-geometri-koordinat, smp2-09-pythagoras-trigonometri]
durasi_menit: 55
---

## Kenapa belajar ini?

Kurir paket, pilot drone, dan pembuat gim komputer perlu menyatakan **perpindahan**: bergerak berapa jauh dan ke arah mana. Bilangan biasa hanya menyatakan besar. Vektor menyatakan besar **dan** arah sekaligus, dan bisa dijumlahkan untuk menggabungkan beberapa perjalanan.

## Analogi

Bayangkan **kurir paket** yang menerima instruksi singkat dari aplikasi: "**geser 3 blok ke timur, lalu 4 blok ke utara**."

- Instruksi itu adalah **vektor**. Ia tidak menyebut dari mana kurir berangkat; instruksi yang sama bisa dipakai dari gudang mana pun.
- Dua instruksi berurutan bisa diganti **satu instruksi gabungan**. Inilah **penjumlahan vektor**.
- Instruksi "lakukan dua kali" adalah **perkalian skalar**. Instruksi "putar balik" adalah **vektor negatif**.
- Instruksi yang selalu dihitung **dari kantor pusat $O$** disebut **vektor posisi**. Ia menunjukkan alamat setiap titik.

## Konsep

### Notasi vektor kolom dan ruas garis berarah

Vektor ditulis sebagai **vektor kolom**: angka atas = geser mendatar (positif ke kanan), angka bawah = geser tegak (positif ke atas).

$$\mathbf{a} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$$

Vektor digambar sebagai **ruas garis berarah**: panah dari titik pangkal ke titik ujung. Panah dari $A$ ke $B$ ditulis $\overrightarrow{AB}$. Di buku tulis, vektor $\mathbf{a}$ biasa ditulis $\underset{\sim}{a}$ atau $\vec{a}$.

Dua vektor **sama** jika besar dan arahnya sama, di mana pun letaknya. Panah-panah yang sejajar, searah, dan sama panjang mewakili vektor yang sama, seperti instruksi kurir yang sama dari gudang berbeda.

### Besar vektor

Besar (panjang) vektor $\begin{pmatrix} x \\ y \end{pmatrix}$ dihitung dengan Pythagoras, karena geser mendatar dan geser tegak saling tegak lurus:

$$\left|\begin{pmatrix} x \\ y \end{pmatrix}\right| = \sqrt{x^2 + y^2}$$

### Penjumlahan dan pengurangan

$$\begin{pmatrix} a \\ b \end{pmatrix} + \begin{pmatrix} c \\ d \end{pmatrix} = \begin{pmatrix} a + c \\ b + d \end{pmatrix}$$

Secara gambar: letakkan pangkal panah kedua di ujung panah pertama. Panah dari pangkal pertama ke ujung kedua adalah jumlahnya (**aturan segitiga**). Dalam bahasa titik: $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$.

**Vektor negatif** $-\mathbf{a}$ sama besar dengan $\mathbf{a}$ tetapi berlawanan arah: $\overrightarrow{BA} = -\overrightarrow{AB}$. **Vektor nol** $\mathbf{0} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$ berarti tidak berpindah.

Pengurangan adalah menjumlah dengan negatifnya: $\mathbf{a} - \mathbf{b} = \mathbf{a} + (-\mathbf{b})$.

### Perkalian skalar

$$k\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} kx \\ ky \end{pmatrix}$$

- $k > 0$: arah sama, panjang menjadi $k$ kali.
- $k < 0$: arah berlawanan.

Jadi jika $\mathbf{b} = k\mathbf{a}$, maka $\mathbf{a}$ dan $\mathbf{b}$ **sejajar**. Ini alat utama soal geometri.

### Translasi

Menggeser titik $(x, y)$ dengan vektor $\begin{pmatrix} p \\ q \end{pmatrix}$ menghasilkan titik $(x + p, y + q)$. Semua titik bangun digeser dengan instruksi yang sama, jadi bentuk dan ukurannya tidak berubah.

### Vektor posisi

Vektor posisi titik $A$ adalah $\overrightarrow{OA}$, panah dari titik asal $O$. Jika $A(2, 1)$, maka $\overrightarrow{OA} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$.

Untuk pergi dari $A$ ke $B$, kurir bisa kembali ke kantor pusat dulu lalu ke $B$:

$$\overrightarrow{AB} = \overrightarrow{AO} + \overrightarrow{OB} = \overrightarrow{OB} - \overrightarrow{OA}$$

"Ujung dikurangi pangkal."

### Soal geometri dengan vektor

- **Sejajar:** $\overrightarrow{PQ} = k\,\overrightarrow{RS}$.
- **Segaris (kolinear):** $\overrightarrow{PQ} = k\,\overrightarrow{PR}$ dengan titik $P$ bersama. Sejajar dan berbagi satu titik berarti berada di satu garis lurus.
- **Titik tengah** $M$ dari $AB$: $\overrightarrow{OM} = \overrightarrow{OA} + \frac{1}{2}\overrightarrow{AB} = \frac{1}{2}(\mathbf{a} + \mathbf{b})$.

## Contoh langkah demi langkah

### Contoh 1: Operasi dan besar vektor

**Soal.** Diketahui $\mathbf{a} = \begin{pmatrix} 3 \\ -4 \end{pmatrix}$ dan $\mathbf{b} = \begin{pmatrix} -1 \\ 2 \end{pmatrix}$. Hitung $|\mathbf{a}|$, $2\mathbf{a} - 3\mathbf{b}$, dan $|\mathbf{a} + \mathbf{b}|$.

1. **Langkah 1: Besar $\mathbf{a}$.** $|\mathbf{a}| = \sqrt{3^2 + (-4)^2} = \sqrt{25} = 5$.
2. **Langkah 2: Perkalian skalar.** $2\mathbf{a} = \begin{pmatrix} 6 \\ -8 \end{pmatrix}$ dan $3\mathbf{b} = \begin{pmatrix} -3 \\ 6 \end{pmatrix}$.
3. **Langkah 3: Kurangkan.** $2\mathbf{a} - 3\mathbf{b} = \begin{pmatrix} 6 - (-3) \\ -8 - 6 \end{pmatrix} = \begin{pmatrix} 9 \\ -14 \end{pmatrix}$.
4. **Langkah 4: Jumlah lalu besar.** $\mathbf{a} + \mathbf{b} = \begin{pmatrix} 2 \\ -2 \end{pmatrix}$, jadi $|\mathbf{a} + \mathbf{b}| = \sqrt{4 + 4} = \sqrt{8} = 2\sqrt{2} \approx 2{,}83$.
5. **Cek jawaban.** Besar jumlah tidak boleh melebihi $|\mathbf{a}| + |\mathbf{b}| = 5 + \sqrt{5} \approx 7{,}24$. Nilai $2{,}83$ wajar, karena $\mathbf{a}$ dan $\mathbf{b}$ hampir berlawanan arah.

**Jawaban:** $|\mathbf{a}| = 5$, $2\mathbf{a} - 3\mathbf{b} = \begin{pmatrix} 9 \\ -14 \end{pmatrix}$, $|\mathbf{a} + \mathbf{b}| = 2\sqrt{2} \approx 2{,}83$.

### Contoh 2: Vektor posisi dan translasi

**Soal.** Titik $A(2, 1)$ dan $B(7, -3)$. Tentukan $\overrightarrow{AB}$ dan $|\overrightarrow{AB}|$. Lalu titik $P(-1, 4)$ ditranslasikan oleh $\overrightarrow{AB}$. Tentukan bayangannya.

1. **Langkah 1: Tulis vektor posisi.** $\overrightarrow{OA} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$, $\overrightarrow{OB} = \begin{pmatrix} 7 \\ -3 \end{pmatrix}$.
2. **Langkah 2: Ujung dikurangi pangkal.** $\overrightarrow{AB} = \begin{pmatrix} 7 - 2 \\ -3 - 1 \end{pmatrix} = \begin{pmatrix} 5 \\ -4 \end{pmatrix}$.
3. **Langkah 3: Besar.** $|\overrightarrow{AB}| = \sqrt{25 + 16} = \sqrt{41} \approx 6{,}40$.
4. **Langkah 4: Translasi.** $P'(-1 + 5, 4 + (-4)) = P'(4, 0)$.
5. **Cek jawaban.** Dari $A(2, 1)$, geser 5 ke kanan dan 4 ke bawah, sampai di $(7, -3) = B$. Benar.

**Jawaban:** $\overrightarrow{AB} = \begin{pmatrix} 5 \\ -4 \end{pmatrix}$, $|\overrightarrow{AB}| = \sqrt{41} \approx 6{,}40$, bayangan $P'(4, 0)$.

### Contoh 3: Membuktikan teorema titik tengah

**Soal.** Pada segitiga $OAB$, $\overrightarrow{OA} = \mathbf{a}$ dan $\overrightarrow{OB} = \mathbf{b}$. $P$ titik tengah $OA$ dan $Q$ titik tengah $OB$. Buktikan $PQ$ sejajar $AB$ dan panjangnya setengah $AB$.

1. **Langkah 1: Nyatakan vektor yang diketahui.** $\overrightarrow{OP} = \frac{1}{2}\mathbf{a}$ dan $\overrightarrow{OQ} = \frac{1}{2}\mathbf{b}$.
2. **Langkah 2: Hitung $\overrightarrow{AB}$.** Ujung dikurangi pangkal: $\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$.
3. **Langkah 3: Hitung $\overrightarrow{PQ}$.** $\overrightarrow{PQ} = \overrightarrow{OQ} - \overrightarrow{OP} = \frac{1}{2}\mathbf{b} - \frac{1}{2}\mathbf{a} = \frac{1}{2}(\mathbf{b} - \mathbf{a})$.
4. **Langkah 4: Bandingkan.** $\overrightarrow{PQ} = \frac{1}{2}\overrightarrow{AB}$. Kelipatan skalar berarti sejajar, dan faktor $\frac{1}{2}$ berarti panjangnya setengah.
5. **Cek jawaban.** Coba angka: $\mathbf{a} = \begin{pmatrix} 4 \\ 0 \end{pmatrix}$, $\mathbf{b} = \begin{pmatrix} 2 \\ 6 \end{pmatrix}$. Maka $\overrightarrow{AB} = \begin{pmatrix} -2 \\ 6 \end{pmatrix}$ dan $\overrightarrow{PQ} = \begin{pmatrix} 1 \\ 3 \end{pmatrix} - \begin{pmatrix} 2 \\ 0 \end{pmatrix} = \begin{pmatrix} -1 \\ 3 \end{pmatrix}$, tepat setengahnya.

**Jawaban:** $\overrightarrow{PQ} = \frac{1}{2}\overrightarrow{AB}$, jadi $PQ \parallel AB$ dan $PQ = \frac{1}{2}AB$.

### Contoh 4: Tiga titik segaris

**Soal.** Diketahui $\overrightarrow{OP} = 2\mathbf{a} + \mathbf{b}$, $\overrightarrow{OQ} = 4\mathbf{a} + 3\mathbf{b}$, dan $\overrightarrow{OR} = 7\mathbf{a} + 6\mathbf{b}$, dengan $\mathbf{a}$ dan $\mathbf{b}$ tidak sejajar. Tunjukkan $P$, $Q$, $R$ segaris dan tentukan $PQ : QR$.

1. **Langkah 1: Hitung $\overrightarrow{PQ}$.** $(4\mathbf{a} + 3\mathbf{b}) - (2\mathbf{a} + \mathbf{b}) = 2\mathbf{a} + 2\mathbf{b}$.
2. **Langkah 2: Hitung $\overrightarrow{QR}$.** $(7\mathbf{a} + 6\mathbf{b}) - (4\mathbf{a} + 3\mathbf{b}) = 3\mathbf{a} + 3\mathbf{b}$.
3. **Langkah 3: Cari hubungan skalar.** $\overrightarrow{QR} = \frac{3}{2}(2\mathbf{a} + 2\mathbf{b}) = \frac{3}{2}\overrightarrow{PQ}$. Jadi sejajar.
4. **Langkah 4: Simpulkan segaris.** $\overrightarrow{PQ}$ dan $\overrightarrow{QR}$ sejajar dan berbagi titik $Q$, jadi $P$, $Q$, $R$ pada satu garis. Perbandingan $PQ : QR = 2 : 3$.
5. **Cek jawaban.** Langsung dari vektor posisi: $\overrightarrow{PR} = (7\mathbf{a} + 6\mathbf{b}) - (2\mathbf{a} + \mathbf{b}) = 5\mathbf{a} + 5\mathbf{b}$. Ini sama dengan $\overrightarrow{PQ} + \overrightarrow{QR}$ dan sama dengan $\frac{5}{2}\overrightarrow{PQ}$, sesuai $2 + 3 = 5$ bagian. Cocok.

**Jawaban:** Segaris, dengan $PQ : QR = 2 : 3$.

### Contoh 5: Soal cerita kurir

**Soal.** Seorang kurir di Denpasar berangkat dari gudang dengan perpindahan $\mathbf{p} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$ km, lalu $\mathbf{q} = \begin{pmatrix} 5 \\ -10 \end{pmatrix}$ km (komponen atas ke timur, bawah ke utara). Hitung perpindahan totalnya, jarak lurus dari gudang, dan panjang jalur yang ditempuh.

1. **Langkah 1: Jumlahkan instruksi.** $\mathbf{p} + \mathbf{q} = \begin{pmatrix} 8 \\ -6 \end{pmatrix}$: 8 km ke timur dan 6 km ke selatan.
2. **Langkah 2: Jarak lurus.** $\sqrt{8^2 + (-6)^2} = \sqrt{100} = 10$ km.
3. **Langkah 3: Panjang tiap bagian jalur.** $|\mathbf{p}| = \sqrt{9 + 16} = 5$ km dan $|\mathbf{q}| = \sqrt{25 + 100} = \sqrt{125} \approx 11{,}18$ km.
4. **Langkah 4: Total jalur.** $5 + 11{,}18 = 16{,}18$ km.
5. **Cek jawaban.** Jarak lurus (10 km) harus lebih pendek dari jalur yang ditempuh (16,18 km). Benar.

**Jawaban:** Perpindahan $\begin{pmatrix} 8 \\ -6 \end{pmatrix}$ km, jarak lurus 10 km, jalur sekitar 16,2 km.

## Kesalahan yang sering terjadi

- **Pangkal dikurangi ujung.** $\overrightarrow{AB} = \overrightarrow{OA} - \overrightarrow{OB}$ salah arah. Ingat: **ujung dikurangi pangkal**, $\overrightarrow{OB} - \overrightarrow{OA}$.
- **Menjumlahkan besar vektor.** $|\mathbf{a} + \mathbf{b}| \ne |\mathbf{a}| + |\mathbf{b}|$ pada umumnya. Jumlahkan komponennya dulu, baru hitung besar.
- **Tertukar vektor posisi dan titik.** Titik $A(2, 1)$ ditulis dengan koma; vektor posisinya ditulis sebagai kolom $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$.
- **Menyimpulkan segaris hanya dari sejajar.** Dua panah sejajar bisa berada di garis berbeda. Pastikan ada titik bersama.
- **Lupa tanda negatif saat mengkuadratkan.** $(-4)^2 = 16$, bukan $-16$.

## Ringkasan

- Vektor kolom $\begin{pmatrix} x \\ y \end{pmatrix}$: geser mendatar dan tegak; besarnya $\sqrt{x^2 + y^2}$.
- Jumlah: komponen dijumlah; secara gambar $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$.
- Skalar $k\mathbf{a}$ sejajar $\mathbf{a}$; $k < 0$ berarti berlawanan arah.
- Translasi $(x, y)$ oleh $\begin{pmatrix} p \\ q \end{pmatrix}$ menjadi $(x + p, y + q)$.
- $\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA}$ (ujung dikurangi pangkal).
- Sejajar: $\overrightarrow{PQ} = k\overrightarrow{RS}$; segaris: sejajar dan berbagi titik.

## Cek pemahaman

1. Hitung $\left|\begin{pmatrix} -5 \\ 12 \end{pmatrix}\right|$.
2. Diketahui $\mathbf{a} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$ dan $\mathbf{b} = \begin{pmatrix} -4 \\ 1 \end{pmatrix}$. Hitung $\mathbf{a} + 2\mathbf{b}$ dan $\mathbf{a} - \mathbf{b}$.
3. Titik $A(1, -2)$ dan $B(4, 2)$. Tentukan $\overrightarrow{AB}$ dan $|\overrightarrow{AB}|$.
4. Vektor $\begin{pmatrix} k \\ 6 \end{pmatrix}$ sejajar dengan $\begin{pmatrix} 2 \\ 3 \end{pmatrix}$. Tentukan $k$.
5. Pada segitiga $OAB$, $\overrightarrow{OA} = \mathbf{a}$, $\overrightarrow{OB} = \mathbf{b}$, dan $M$ titik tengah $AB$. Nyatakan $\overrightarrow{OM}$ dalam $\mathbf{a}$ dan $\mathbf{b}$.

### Kunci jawaban

1. $\sqrt{25 + 144} = \sqrt{169} = 13$.
2. $\mathbf{a} + 2\mathbf{b} = \begin{pmatrix} 2 - 8 \\ 3 + 2 \end{pmatrix} = \begin{pmatrix} -6 \\ 5 \end{pmatrix}$; $\mathbf{a} - \mathbf{b} = \begin{pmatrix} 6 \\ 2 \end{pmatrix}$.
3. $\overrightarrow{AB} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$ dan $|\overrightarrow{AB}| = 5$.
4. $\begin{pmatrix} k \\ 6 \end{pmatrix} = 2\begin{pmatrix} 2 \\ 3 \end{pmatrix}$ karena $6 = 2 \times 3$, jadi $k = 4$.
5. $\overrightarrow{OM} = \mathbf{a} + \frac{1}{2}(\mathbf{b} - \mathbf{a}) = \frac{1}{2}(\mathbf{a} + \mathbf{b})$.
