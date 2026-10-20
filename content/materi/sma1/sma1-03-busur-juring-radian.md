---
id: sma1-03-busur-juring-radian
judul: Panjang Busur, Luas Juring, dan Radian
jenjang: sma1
moe: "Secondary 4 · Geometry and Measurement · G5 Mensuration"
prasyarat: [smp3-08-sifat-lingkaran, smp3-07-trigonometri-lanjut]
durasi_menit: 50
---

## Kenapa belajar ini?

Penjual martabak memotong adonan bundar menjadi potongan sama besar, tukang las membuat pagar melengkung, dan insinyur menghitung lintasan roda. Semuanya butuh panjang busur dan luas potongan lingkaran. Kamu juga akan berkenalan dengan **radian**, satuan sudut yang membuat rumus-rumus ini jauh lebih sederhana.

## Analogi

Bayangkan sebuah **martabak manis bundar** dengan jari-jari $r$.

- Satu **potongan** berbentuk seperti kipas, dari pusat ke pinggir. Itulah **juring**.
- **Pinggiran renyah** pada potongan itu adalah **busur**.
- Jika martabak dipotong dengan satu irisan **lurus** yang tidak melewati pusat, bagian kecil di antara irisan lurus dan pinggiran adalah **tembereng**.
- Ambil seutas **tali sepanjang jari-jari**, lalu tempelkan melengkung di pinggiran martabak. Sudut potongan yang pinggirannya tepat sepanjang tali itu besarnya **1 radian**.

Semua rumus bab ini menjawab satu pertanyaan: **potongan ini berapa bagian dari martabak utuh?**

## Konsep

### Panjang busur dan luas juring dengan derajat

Martabak utuh bersudut $360^\circ$, kelilingnya $2\pi r$, dan luasnya $\pi r^2$. Potongan bersudut $\theta^\circ$ adalah $\frac{\theta}{360}$ bagian dari martabak utuh. Jadi:

$$\text{panjang busur} = \frac{\theta}{360} \times 2\pi r, \qquad \text{luas juring} = \frac{\theta}{360} \times \pi r^2$$

### Ukuran radian

**1 radian** adalah sudut pusat yang menghadap busur sepanjang jari-jari.

Berapa tali sepanjang $r$ yang muat mengelilingi martabak? Keliling $2\pi r$ dibagi $r$ sama dengan $2\pi$. Jadi satu putaran penuh $= 2\pi$ radian, sehingga:

$$\pi \text{ rad} = 180^\circ, \qquad 1 \text{ rad} = \frac{180^\circ}{\pi} \approx 57{,}3^\circ$$

Cara konversi:

- Derajat ke radian: kalikan $\frac{\pi}{180}$.
- Radian ke derajat: kalikan $\frac{180}{\pi}$.

Sudut-sudut penting: $30^\circ = \frac{\pi}{6}$, $45^\circ = \frac{\pi}{4}$, $60^\circ = \frac{\pi}{3}$, $90^\circ = \frac{\pi}{2}$, $180^\circ = \pi$, $360^\circ = 2\pi$.

Sudut dalam radian biasanya ditulis tanpa satuan. Jika tidak ada lambang derajat, anggap radian.

### Rumus dengan radian

Potongan bersudut $\theta$ radian adalah $\frac{\theta}{2\pi}$ bagian martabak. Maka:

$$s = \frac{\theta}{2\pi} \times 2\pi r = r\theta, \qquad L = \frac{\theta}{2\pi} \times \pi r^2 = \frac{1}{2}r^2\theta$$

Rumusnya jauh lebih bersih karena $2\pi$ saling meniadakan. Ini juga cocok dengan definisi: setiap 1 radian memberi busur sepanjang $r$, jadi $\theta$ radian memberi $r\theta$.

Dua rumus ini bisa digabung: $L = \frac{1}{2}r^2\theta = \frac{1}{2}r(r\theta) = \frac{1}{2}rs$.

**Keliling juring** = busur + dua jari-jari = $r\theta + 2r$.

### Luas tembereng

Tembereng = juring dikurangi segitiga $OAB$ (segitiga yang dibentuk dua jari-jari dan tali busur). Luas segitiga dengan dua sisi $r$ yang mengapit sudut $\theta$ adalah $\frac{1}{2}r^2\sin\theta$. Jadi, untuk $\theta$ dalam radian:

$$\text{luas tembereng} = \frac{1}{2}r^2\theta - \frac{1}{2}r^2\sin\theta = \frac{1}{2}r^2(\theta - \sin\theta)$$

Panjang tali busur bisa dihitung dengan membagi segitiga sama kaki menjadi dua segitiga siku-siku: $AB = 2r\sin\frac{\theta}{2}$.

## Contoh langkah demi langkah

### Contoh 1: Konversi derajat dan radian

**Soal.** (a) Ubah $60^\circ$ dan $225^\circ$ ke radian dalam $\pi$. (b) Ubah $2{,}5$ rad ke derajat.

1. **Langkah 1: Pilih faktor (a).** Derajat ke radian, kalikan $\frac{\pi}{180}$.
2. **Langkah 2: Hitung (a).** $60 \times \frac{\pi}{180} = \frac{\pi}{3}$ dan $225 \times \frac{\pi}{180} = \frac{5\pi}{4}$.
3. **Langkah 3: Hitung (b).** $2{,}5 \times \frac{180}{\pi} = \frac{450}{\pi} \approx 143{,}2^\circ$.
4. **Cek jawaban.** $1$ rad $\approx 57{,}3^\circ$, jadi $2{,}5$ rad $\approx 2{,}5 \times 57{,}3 = 143{,}25^\circ$. Cocok. Dan $\frac{5\pi}{4} = \pi + \frac{\pi}{4}$, sama dengan $180^\circ + 45^\circ = 225^\circ$.

**Jawaban:** $60^\circ = \frac{\pi}{3}$, $225^\circ = \frac{5\pi}{4}$, $2{,}5$ rad $\approx 143{,}2^\circ$.

### Contoh 2: Busur dan juring dalam derajat

**Soal.** Juring lingkaran berjari-jari 14 cm bersudut $72^\circ$. Hitung panjang busur dan luas juring (3 angka penting).

1. **Langkah 1: Hitung bagian dari lingkaran.** $\frac{72}{360} = \frac{1}{5}$. Potongan ini seperlima martabak.
2. **Langkah 2: Panjang busur.** $\frac{1}{5} \times 2\pi(14) = \frac{28\pi}{5} \approx 17{,}6$ cm.
3. **Langkah 3: Luas juring.** $\frac{1}{5} \times \pi(14)^2 = \frac{196\pi}{5} \approx 123$ cm$^2$.
4. **Cek jawaban.** Pakai rumus $L = \frac{1}{2}rs$: $\frac{1}{2} \times 14 \times 17{,}59 \approx 123$ cm$^2$. Sama.

**Jawaban:** Busur $\approx 17{,}6$ cm, luas $\approx 123$ cm$^2$.

### Contoh 3: Mencari sudut dalam radian

**Soal.** Busur sebuah juring panjangnya 15 cm dan jari-jarinya 6 cm. Hitung sudut juring dalam radian, luas juring, dan kelilingnya.

1. **Langkah 1: Pakai $s = r\theta$.** $15 = 6\theta$, jadi $\theta = 2{,}5$ rad. Artinya pinggiran potongan ini sepanjang $2{,}5$ tali jari-jari.
2. **Langkah 2: Luas.** $L = \frac{1}{2}(6)^2(2{,}5) = \frac{1}{2} \times 36 \times 2{,}5 = 45$ cm$^2$.
3. **Langkah 3: Keliling juring.** $15 + 2(6) = 27$ cm.
4. **Cek jawaban.** $L = \frac{1}{2}rs = \frac{1}{2} \times 6 \times 15 = 45$ cm$^2$. Sama.

**Jawaban:** $\theta = 2{,}5$ rad, luas 45 cm$^2$, keliling 27 cm.

### Contoh 4: Soal cerita, tembereng martabak

**Soal.** Martabak manis berjari-jari 12 cm. Bu Siti mengiris lurus dari titik $A$ ke titik $B$ di pinggiran, dengan $\angle AOB = 120^\circ$ di pusat $O$. Hitung luas bagian kecil yang terpotong (tembereng) dan kelilingnya.

1. **Langkah 1: Ubah sudut ke radian.** $120^\circ = \frac{2\pi}{3}$.
2. **Langkah 2: Luas juring $OAB$.** $\frac{1}{2}(12)^2 \times \frac{2\pi}{3} = 72 \times \frac{2\pi}{3} = 48\pi \approx 150{,}80$ cm$^2$.
3. **Langkah 3: Luas segitiga $OAB$.** $\frac{1}{2}(12)^2\sin 120^\circ = 72 \times 0{,}8660 \approx 62{,}35$ cm$^2$.
4. **Langkah 4: Luas tembereng.** $150{,}80 - 62{,}35 = 88{,}45$, kira-kira $88{,}4$ cm$^2$ (3 angka penting; dengan nilai tak dibulatkan hasilnya $88{,}44$).
5. **Langkah 5: Keliling tembereng.** Busur $= 12 \times \frac{2\pi}{3} = 8\pi \approx 25{,}13$ cm. Tali busur $= 2(12)\sin 60^\circ \approx 20{,}78$ cm. Keliling $\approx 25{,}13 + 20{,}78 = 45{,}91$, kira-kira $45{,}9$ cm.
6. **Cek jawaban.** Tembereng harus lebih kecil dari juring (150,8) dan lebih besar dari nol. Juga, luas martabak utuh $144\pi \approx 452$ cm$^2$, dan juringnya tepat sepertiga ($150{,}8 \times 3 \approx 452$). Konsisten.

**Jawaban:** Luas tembereng $\approx 88{,}4$ cm$^2$, keliling $\approx 45{,}9$ cm.

## Kesalahan yang sering terjadi

- **Memakai $s = r\theta$ dengan $\theta$ dalam derajat.** $r = 5$ dan $\theta = 60^\circ$ tidak memberi busur $300$. Ubah dulu: $60^\circ = \frac{\pi}{3}$, jadi $s = \frac{5\pi}{3} \approx 5{,}24$.
- **Kalkulator salah mode.** Untuk $\sin\theta$ pada rumus tembereng dengan $\theta$ radian, kalkulator harus mode RAD; atau ubah sudut ke derajat dulu.
- **Keliling juring tanpa jari-jari.** Keliling potongan martabak = pinggiran **ditambah dua sisi potongan**, yaitu $r\theta + 2r$.
- **Tembereng dikira juring.** Tembereng dibatasi tali busur (irisan lurus), bukan dua jari-jari. Kurangkan luas segitiga.
- **Membulatkan terlalu awal.** Simpan nilai lengkap di kalkulator dan bulatkan di akhir, supaya angka penting terakhir tidak meleset.

## Ringkasan

- $\pi$ rad $= 180^\circ$; derajat ke radian kali $\frac{\pi}{180}$, radian ke derajat kali $\frac{180}{\pi}$.
- Dengan derajat: busur $= \frac{\theta}{360} \times 2\pi r$, juring $= \frac{\theta}{360} \times \pi r^2$.
- Dengan radian: $s = r\theta$, $L = \frac{1}{2}r^2\theta = \frac{1}{2}rs$.
- Tembereng $= \frac{1}{2}r^2(\theta - \sin\theta)$ dengan $\theta$ radian.
- Keliling juring $= r\theta + 2r$; tali busur $= 2r\sin\frac{\theta}{2}$.

## Cek pemahaman

1. Ubah $150^\circ$ ke radian dalam $\pi$.
2. Ubah $\frac{3\pi}{4}$ rad ke derajat.
3. Hitung panjang busur juring berjari-jari 9 cm dengan sudut $40^\circ$.
4. Juring berjari-jari 5 cm bersudut $1{,}6$ rad. Hitung panjang busur, luas, dan keliling juring.
5. Hitung luas tembereng lingkaran berjari-jari 6 cm dengan sudut pusat $\frac{\pi}{2}$.

### Kunci jawaban

1. $150 \times \frac{\pi}{180} = \frac{5\pi}{6}$.
2. $\frac{3\pi}{4} \times \frac{180}{\pi} = 135^\circ$.
3. $\frac{40}{360} \times 2\pi(9) = 2\pi \approx 6{,}28$ cm.
4. $s = 5(1{,}6) = 8$ cm; $L = \frac{1}{2}(25)(1{,}6) = 20$ cm$^2$; keliling $= 8 + 10 = 18$ cm.
5. $\frac{1}{2}(36)\left(\frac{\pi}{2} - 1\right) = 9\pi - 18 \approx 10{,}3$ cm$^2$, karena $\sin\frac{\pi}{2} = 1$.
