---
id: sma3-09-sampling-uji-hipotesis
judul: Sampling dan Uji Hipotesis
jenjang: sma3
moe: "H2 Mathematics 9758 · Probability and Statistics · Sampling and Hypothesis testing"
prasyarat: [sma3-08-distribusi-normal]
durasi_menit: 80
---

## Kenapa belajar ini?

Pabrik mi instan menulis "berat bersih 75 g". Kita tidak mungkin menimbang semua bungkus di Indonesia. Kita hanya bisa menimbang sebagian, lalu memutuskan: apakah klaim pabrik masih masuk akal? Materi ini mengajarkan cara mengambil keputusan seperti itu secara jujur dan terukur.

## Analogi

Bayangkan kamu memasak **sepanci besar sayur asem**. Untuk tahu rasanya, kamu tidak menghabiskan satu panci. Kamu **mengaduk** lalu **mencicipi satu sendok**.

- Panci adalah **populasi**, sendok adalah **sampel**.
- Mengaduk dulu membuat sendok **acak** dan mewakili seluruh panci.
- Sendok yang lebih besar memberi gambaran yang lebih stabil.
- Resep mengklaim "asinnya pas". Kamu hanya menolak klaim itu jika sendokmu **jauh terlalu asin**, lebih asin daripada yang wajar terjadi karena variasi kecil antarsendok.

Analogi panci dan sendok dipakai di seluruh materi.

```anim
{"type": "grafik", "title": "Sendok makin besar, rasa makin stabil", "xmin": -3.5, "xmax": 3.5, "ymin": -0.1, "ymax": 1.7, "kurva": [{"f": "exp(-x^2/2)/sqrt(2pi)", "label": "\\text{satu butir}"}, {"f": "2exp(-2x^2)/sqrt(2pi)", "label": "\\bar{X},\\ n = 4"}, {"f": "4exp(-8x^2)/sqrt(2pi)", "label": "\\bar{X},\\ n = 16"}], "langkah": [{"say": "Rasa satu butir sayur sangat beragam: kurvanya lebar.", "kurva": 1}, {"say": "Rata-rata satu sendok berisi 4 butir: simpangan bakunya $\\frac{\\sigma}{\\sqrt{4}}$, separuhnya.", "kurva": 2}, {"say": "Sendok besar berisi 16 butir: simpangan baku $\\frac{\\sigma}{4}$. Rata-ratanya jarang jauh dari tengah.", "kurva": 3}]}
```

## Konsep

### Populasi dan sampel acak

**Populasi** adalah seluruh objek yang ingin diteliti. **Sampel** adalah sebagian objek yang benar-benar diamati. Sampel berukuran $n$ disebut **sampel acak** jika setiap anggota populasi punya peluang yang sama untuk terpilih dan pemilihan satu anggota tidak memengaruhi yang lain. Secara matematis, nilai-nilai sampel $X_1, X_2, \dots, X_n$ saling bebas dan berdistribusi sama dengan populasi.

### Menaksir rata-rata dan variansi populasi

Taksiran tak bias untuk $\mu$ adalah rata-rata sampel $\bar{x} = \frac{\sum x}{n}$. Taksiran tak bias untuk $\sigma^2$ adalah

$$s^2 = \frac{1}{n-1}\sum (x - \bar{x})^2 = \frac{1}{n-1}\left[\sum x^2 - \frac{(\sum x)^2}{n}\right].$$

Pembaginya $n - 1$, bukan $n$. Alasannya, simpangan diukur dari $\bar{x}$, yang selalu berada paling dekat dengan data sampel itu sendiri. Akibatnya $\sum(x - \bar{x})^2$ cenderung terlalu kecil, dan pembagi $n-1$ mengoreksinya.

Jika data diberikan dalam bentuk $x - a$, rumus yang sama berlaku dengan $x$ diganti $x - a$, karena pergeseran tidak mengubah penyebaran.

```anim
{"type": "persamaan", "title": "Menaksir dari sampel 4, 7, 10", "baris": [{"tex": "\\bar{x} = \\frac{4 + 7 + 10}{3} = 7", "say": "Taksiran rata-rata populasi."}, {"tex": "\\sum (x - \\bar{x})^2 = 9 + 0 + 9 = 18", "say": "Jumlah kuadrat simpangan dari $\\bar{x}$."}, {"tex": "s^2 = \\frac{18}{3 - 1} = 9", "say": "Bagi dengan $n - 1 = 2$, bukan 3.", "op": "$\\div\\,(n - 1)$"}, {"tex": "\\text{cek: } \\frac{1}{2}\\left[165 - \\frac{21^2}{3}\\right] = \\frac{165 - 147}{2} = 9", "say": "Rumus kedua memberi hasil yang sama."}]}
```

### Distribusi rata-rata sampel

Setiap sendok memberi rata-rata $\bar{X}$ yang sedikit berbeda. Jadi $\bar{X}$ sendiri adalah variabel acak. Dengan sifat kombinasi linear:

$$E(\bar{X}) = \frac{1}{n}\big(E(X_1) + \cdots + E(X_n)\big) = \mu,$$

$$\operatorname{Var}(\bar{X}) = \frac{1}{n^2}\big(\operatorname{Var}(X_1) + \cdots + \operatorname{Var}(X_n)\big) = \frac{n\sigma^2}{n^2} = \frac{\sigma^2}{n}.$$

Simpangan baku $\bar{X}$ adalah $\frac{\sigma}{\sqrt{n}}$. Makin besar sendok, makin kecil variasi rasanya.

- Jika populasi berdistribusi normal, maka $\bar{X} \sim N\!\left(\mu, \frac{\sigma^2}{n}\right)$ **tepat**, untuk $n$ berapa pun.

### Teorema limit pusat

Jika populasi **tidak** normal (atau tidak diketahui bentuknya), tetapi $n$ besar (biasanya $n \ge 30$), maka

$$\bar{X} \approx N\!\left(\mu, \frac{\sigma^2}{n}\right).$$

Inilah **teorema limit pusat**. Rasa satu butir sayur bisa sangat beragam, tetapi rata-rata satu sendok besar hampir selalu berbentuk lonceng. Jika $\sigma^2$ tidak diketahui dan $n$ besar, pakai $s^2$ sebagai gantinya.

```anim
{"type": "grafik", "title": "Populasi miring, rata-rata sampel tetap lonceng", "xmin": -0.5, "xmax": 4, "ymin": -0.1, "ymax": 2.5, "kurva": [{"f": "exp(-x)", "label": "\\text{populasi (miring)}", "dari": 0}, {"f": "2.185exp(-15(x-1)^2)", "label": "\\bar{X},\\ n = 30"}], "langkah": [{"say": "Populasi waktu tunggu: miring, banyak yang singkat, sedikit yang sangat lama. Rata-ratanya 1.", "kurva": 1}, {"say": "Rata-rata 30 pengamatan berbentuk lonceng di sekitar 1, dengan simpangan baku $\\frac{\\sigma}{\\sqrt{30}}$.", "kurva": 2}]}
```

### Uji hipotesis untuk rata-rata (uji $z$)

1. **Hipotesis nol** $H_0: \mu = \mu_0$ adalah klaim yang dianggap benar sampai ada bukti kuat (resep bilang "pas").
2. **Hipotesis alternatif** $H_1$ adalah dugaan tandingan:
   - $\mu < \mu_0$ atau $\mu > \mu_0$: **uji satu arah**.
   - $\mu \ne \mu_0$: **uji dua arah**.
3. **Tingkat signifikansi** $\alpha$ (misalnya 5%) adalah peluang menolak $H_0$ padahal $H_0$ benar. Ini batas risiko salah tuduh yang kita terima.
4. **Statistik uji**, dengan anggapan $H_0$ benar:
$$z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}.$$
5. **Nilai-p** adalah peluang, dengan anggapan $H_0$ benar, mendapat hasil sampel **seekstrem atau lebih ekstrem** dari yang teramati, ke arah $H_1$. Untuk uji dua arah, peluang satu ekor dikali 2.
6. **Keputusan.** Tolak $H_0$ jika nilai-p $\le \alpha$, atau setara, jika $z$ jatuh di **daerah kritis**. Nilai kritis yang umum: satu arah 5% → $1{,}6449$; satu arah 1% → $2{,}3263$; dua arah 5% → $\pm 1{,}96$.

```anim
{"type": "grafik", "title": "Daerah kritis uji dua arah 5%", "xmin": -4, "xmax": 4, "ymin": -0.05, "ymax": 0.5, "kurva": [{"f": "exp(-x^2/2)/sqrt(2pi)", "label": "Z \\text{ jika } H_0 \\text{ benar}"}], "garis": [{"x": -1.96}, {"x": 1.96}], "langkah": [{"say": "Jika $H_0$ benar, statistik uji $z$ mengikuti kurva normal baku.", "kurva": 1}, {"say": "Di luar $\\pm 1{,}96$ hanya ada 2,5% di tiap ekor, total 5%. Kalau $z$ jatuh di sana, hasilnya terlalu ekstrem: tolak $H_0$.", "kurva": 1, "garis": 2}]}
```
7. **Kesimpulan dalam konteks.** "Ada cukup bukti pada taraf 5% bahwa ..." atau "Tidak ada cukup bukti ...". Tidak menolak $H_0$ **tidak** sama dengan membuktikan $H_0$ benar.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Rata-rata sampel lebih stabil

```soal
{
 "title": "Contoh 1",
 "text": "Massa telur ayam $X \\sim N(60, 25)$ gram. (a) Tentukan peluang satu telur lebih dari 62 g. (b) Untuk sampel acak 16 telur, tentukan peluang rata-ratanya lebih dari 62 g. Gunakan $\\Phi(0{,}4) = 0{,}6554$ dan $\\Phi(1{,}6) = 0{,}9452$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: $z$ untuk satu telur = ?",
   "answer": "0,4",
   "hint": "$\\sigma = 5$, $z = \\frac{62 - 60}{5}$.",
   "explain": "$z = 0{,}4$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "(a) $P(X > 62)$ = ?",
   "answer": "0,3446",
   "hint": "$1 - \\Phi(0{,}4)$.",
   "explain": "$1 - 0{,}6554 = 0{,}3446$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Simpangan baku $\\bar{X}$ = $\\frac{5}{\\sqrt{16}}$ = ?",
   "answer": "1,25",
   "hint": "$\\sqrt{16} = 4$.",
   "explain": "$\\bar{X} \\sim N\\left(60, \\frac{25}{16}\\right)$ dengan simpangan baku 1,25.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $z$ untuk $\\bar{X} = 62$ = ?",
   "answer": "1,6",
   "hint": "$\\frac{62 - 60}{1{,}25}$.",
   "explain": "$z = 1{,}6$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "(b) $P(\\bar{X} > 62)$ = ?",
   "answer": "0,0548",
   "hint": "$1 - \\Phi(1{,}6)$.",
   "explain": "$1 - 0{,}9452 = 0{,}0548$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: mengapa (b) jauh lebih kecil dari (a)?",
   "options": [
    "Rata-rata 16 telur lebih stabil",
    "Telur dalam sampel lebih ringan",
    "Salah hitung"
   ],
   "answer": "Rata-rata 16 telur lebih stabil",
   "hint": "Ingat analogi sendok besar.",
   "explain": "Simpangan baku turun dari 5 menjadi 1,25, jadi rata-rata jarang menyimpang jauh.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi (a) $0{,}3446$ dan (b) $0{,}0548$."
}
```

### Contoh 2: Teorema limit pusat

```soal
{
 "title": "Contoh 2",
 "text": "Waktu tunggu ojek daring di suatu kawasan memiliki rata-rata 8 menit dan simpangan baku 6 menit. Distribusinya miring, tidak normal. Untuk sampel acak 40 pesanan, tentukan peluang rata-rata waktu tunggunya kurang dari 7 menit. Gunakan $\\Phi(1{,}054) = 0{,}8541$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Pilih alat.",
   "options": [
    "Teorema limit pusat",
    "Distribusi binomial",
    "Tidak bisa dihitung karena tidak normal"
   ],
   "answer": "Teorema limit pusat",
   "hint": "Populasi tidak normal, tetapi berapa ukuran sampelnya?",
   "explain": "$n = 40 \\ge 30$, jadi $\\bar{X}$ mendekati normal.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Simpangan baku $\\bar{X} = \\frac{6}{\\sqrt{40}}$, bulatkan ke 4 desimal.",
   "answer": "0,9487",
   "hint": "$\\sqrt{40} \\approx 6{,}3246$.",
   "explain": "$\\approx 0{,}9487$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $z = \\frac{7 - 8}{0{,}9487}$, bulatkan ke 3 desimal.",
   "answer": "-1,054",
   "hint": "Di bawah rata-rata, jadi negatif.",
   "explain": "$z \\approx -1{,}054$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $P(\\bar{X} < 7) = 1 - \\Phi(1{,}054)$ = ?",
   "answer": "0,1459",
   "hint": "Simetri.",
   "explain": "$1 - 0{,}8541 = 0{,}1459$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi peluangnya sekitar $0{,}146$."
}
```

### Contoh 3: Uji satu arah untuk klaim pabrik

```soal
{
 "title": "Contoh 3",
 "text": "Pabrik mi instan mengklaim berat bersih rata-rata 75 g dengan simpangan baku 3 g. Lembaga konsumen menduga beratnya kurang. Sampel acak 36 bungkus memberi $\\bar{x} = 74{,}1$ g. Ujilah pada taraf signifikansi 5% dan 1%. Gunakan $\\Phi(1{,}8) = 0{,}9641$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Hipotesis alternatif?",
   "options": [
    "$H_1: \\mu < 75$",
    "$H_1: \\mu \\ne 75$",
    "$H_1: \\bar{x} < 75$"
   ],
   "answer": "$H_1: \\mu < 75$",
   "hint": "Dugaannya beratnya kurang; hipotesis selalu tentang $\\mu$.",
   "explain": "$H_0: \\mu = 75$, $H_1: \\mu < 75$, uji satu arah.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Simpangan baku $\\bar{X} = \\frac{3}{\\sqrt{36}}$ = ?",
   "answer": "0,5",
   "hint": "$\\sqrt{36} = 6$.",
   "explain": "$0{,}5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $z = \\frac{74{,}1 - 75}{0{,}5}$ = ?",
   "answer": "-1,8",
   "hint": "$\\frac{-0{,}9}{0{,}5}$.",
   "explain": "$z = -1{,}8$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Nilai-p $P(Z \\le -1{,}8)$ = ?",
   "answer": "0,0359",
   "hint": "$1 - \\Phi(1{,}8)$.",
   "explain": "$1 - 0{,}9641 = 0{,}0359$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Keputusan pada taraf 5%?",
   "options": [
    "Tolak $H_0$",
    "Jangan tolak $H_0$"
   ],
   "answer": "Tolak $H_0$",
   "hint": "Bandingkan nilai-p dengan 0,05.",
   "explain": "$0{,}0359 \\le 0{,}05$: tolak $H_0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Keputusan pada taraf 1%?",
   "options": [
    "Tolak $H_0$",
    "Jangan tolak $H_0$"
   ],
   "answer": "Jangan tolak $H_0$",
   "hint": "Bandingkan nilai-p dengan 0,01.",
   "explain": "$0{,}0359 > 0{,}01$: buktinya belum cukup.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban dengan nilai kritis 5% ($z \\le -1{,}6449$): apakah $-1{,}8$ masuk daerah kritis?",
   "options": [
    "Ya",
    "Tidak"
   ],
   "answer": "Ya",
   "hint": "Bandingkan $-1{,}8$ dengan $-1{,}6449$.",
   "explain": "$-1{,}8 < -1{,}6449$, masuk. Pada 1%, batasnya $-2{,}3263$ dan $-1{,}8$ tidak masuk. Keputusan sama.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi pada taraf 5% ada cukup bukti bahwa rata-rata berat kurang dari 75 g; pada taraf 1% buktinya belum cukup."
}
```

### Contoh 4: Uji dua arah, variansi tidak diketahui

```soal
{
 "title": "Contoh 4",
 "text": "Teh botol dikemas dengan isi tertulis 250 ml. Petugas memeriksa apakah rata-rata isinya berbeda dari 250 ml. Untuk sampel acak 50 botol diperoleh $\\sum (x - 250) = -32$ dan $\\sum (x - 250)^2 = 420$. Ujilah pada taraf 5%. Gunakan $\\Phi(1{,}585) = 0{,}9435$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Hipotesis alternatif?",
   "options": [
    "$H_1: \\mu \\ne 250$",
    "$H_1: \\mu < 250$",
    "$H_1: \\mu > 250$"
   ],
   "answer": "$H_1: \\mu \\ne 250$",
   "hint": "Kata kuncinya \"berbeda\".",
   "explain": "Uji dua arah.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $\\bar{x} = 250 + \\frac{-32}{50}$ = ?",
   "answer": "249,36",
   "hint": "$\\frac{-32}{50} = -0{,}64$.",
   "explain": "$\\bar{x} = 249{,}36$ ml.",
   "error": "salah-langkah-materi",
   "suffix": "ml"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $s^2 = \\frac{1}{49}\\left[420 - \\frac{(-32)^2}{50}\\right]$, bulatkan ke 4 desimal.",
   "answer": "8,1535",
   "hint": "$\\frac{1024}{50} = 20{,}48$; bagi dengan $n - 1 = 49$.",
   "explain": "$\\frac{399{,}52}{49} \\approx 8{,}1535$, jadi $s \\approx 2{,}8554$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $z = \\frac{249{,}36 - 250}{2{,}8554/\\sqrt{50}}$, bulatkan ke 3 desimal.",
   "answer": "-1,585",
   "hint": "$\\frac{2{,}8554}{\\sqrt{50}} \\approx 0{,}4038$.",
   "explain": "$\\frac{-0{,}64}{0{,}4038} \\approx -1{,}585$.",
   "error": "salah-pembulatan"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: Peluang satu ekor $P(Z \\le -1{,}585)$ = ?",
   "answer": "0,0565",
   "hint": "$1 - \\Phi(1{,}585)$.",
   "explain": "$1 - 0{,}9435 = 0{,}0565$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Nilai-p dua arah = ?",
   "answer": "0,113",
   "hint": "Uji dua arah: kalikan 2.",
   "explain": "$2 \\times 0{,}0565 = 0{,}113$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 6: Keputusan pada taraf 5%?",
   "options": [
    "Tidak tolak $H_0$",
    "Tolak $H_0$"
   ],
   "answer": "Tidak tolak $H_0$",
   "hint": "Bandingkan 0,113 dengan 0,05.",
   "explain": "$0{,}113 > 0{,}05$. Tidak ada cukup bukti bahwa rata-rata isi berbeda dari 250 ml; juga $|-1{,}585| < 1{,}96$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $H_0$ tidak ditolak, nilai-p $\\approx 0{,}113$."
}
```

## Kesalahan yang sering terjadi

- **Memakai $\sigma$ alih-alih $\frac{\sigma}{\sqrt{n}}$.** Pada Contoh 1(b), menulis $z = \frac{62 - 60}{5}$. Untuk rata-rata sampel, simpangan bakunya $\frac{\sigma}{\sqrt{n}}$.
- **Membagi dengan $n$ saat menaksir variansi.** Menulis $s^2 = \frac{399{,}52}{50}$. Taksiran tak bias memakai pembagi $n - 1 = 49$.
- **Lupa mengalikan 2 pada uji dua arah.** Melaporkan nilai-p 0,0565 pada Contoh 4. Untuk $H_1: \mu \ne \mu_0$, kedua ekor dihitung, jadi 0,113.
- **Menulis hipotesis dengan $\bar{x}$.** Menulis $H_0: \bar{x} = 75$. Hipotesis selalu tentang parameter populasi $\mu$, bukan hasil sampel.
- **Menyimpulkan "$H_0$ terbukti benar".** Tidak menolak $H_0$ hanya berarti buktinya belum cukup. Sendok yang tidak terlalu asin belum membuktikan resepnya pas.

## Ringkasan

- Sampel acak: setiap anggota peluangnya sama dan saling bebas. Taksiran tak bias: $\bar{x}$ dan $s^2 = \frac{1}{n-1}\left[\sum x^2 - \frac{(\sum x)^2}{n}\right]$.
- $E(\bar{X}) = \mu$ dan $\operatorname{Var}(\bar{X}) = \frac{\sigma^2}{n}$. Jika populasi normal, $\bar{X}$ tepat normal.
- Teorema limit pusat: untuk $n$ besar, $\bar{X} \approx N\!\left(\mu, \frac{\sigma^2}{n}\right)$ apa pun bentuk populasinya.
- Uji $z$: $z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}$; tolak $H_0$ jika nilai-p $\le \alpha$ atau $z$ di daerah kritis.
- Langkah uji: hipotesis → distribusi di bawah $H_0$ → statistik uji → nilai-p atau nilai kritis → keputusan → kesimpulan dalam konteks.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "$X \\sim N(40, 36)$. Tuliskan distribusi rata-rata sampel acak berukuran 9.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\operatorname{Var}(\\bar{X}) = \\frac{\\sigma^2}{n}$ = ?",
   "answer": "4",
   "hint": "$\\frac{36}{9}$.",
   "explain": "Variansinya 4.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Distribusinya?",
   "options": [
    "$\\bar{X} \\sim N(40, 4)$",
    "$\\bar{X} \\sim N(40, 36)$",
    "$\\bar{X} \\approx N\\left(\\frac{40}{9}, 4\\right)$"
   ],
   "answer": "$\\bar{X} \\sim N(40, 4)$",
   "hint": "Rata-rata tetap $\\mu$; populasi normal, jadi tepat normal.",
   "explain": "$\\bar{X} \\sim N(40, 4)$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\bar{X} \\sim N(40, 4)$."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Dari soal nomor 1, tentukan $P(\\bar{X} > 42)$. Gunakan $\\Phi(1) = 0{,}8413$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Simpangan baku $\\bar{X}$ = ?",
   "answer": "2",
   "hint": "$\\sqrt{4}$.",
   "explain": "Simpangan bakunya 2.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$z$ = ?",
   "answer": "1",
   "hint": "$\\frac{42 - 40}{2}$.",
   "explain": "$z = 1$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$P(\\bar{X} > 42)$ = ?",
   "answer": "0,1587",
   "hint": "$1 - \\Phi(1)$.",
   "explain": "$1 - 0{,}8413 = 0{,}1587$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $P(\\bar{X} > 42) = 0{,}1587$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Sebuah uji menghasilkan nilai-p 0,03. Apa keputusannya pada taraf 5% dan pada taraf 1%?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Pada taraf 5%?",
   "options": [
    "Tolak $H_0$",
    "Tidak tolak $H_0$"
   ],
   "answer": "Tolak $H_0$",
   "hint": "Tolak jika nilai-p $\\le \\alpha$.",
   "explain": "$0{,}03 \\le 0{,}05$: tolak $H_0$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Pada taraf 1%?",
   "options": [
    "Tolak $H_0$",
    "Tidak tolak $H_0$"
   ],
   "answer": "Tidak tolak $H_0$",
   "hint": "Bandingkan 0,03 dengan 0,01.",
   "explain": "$0{,}03 > 0{,}01$: tidak tolak $H_0$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi tolak $H_0$ pada 5%, tidak tolak pada 1%."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Diketahui $\\sigma = 20$. Sampel acak 64 data memberi $\\bar{x} = 505$. Ujilah $H_0: \\mu = 500$ melawan $H_1: \\mu > 500$ pada taraf 5%. Gunakan $\\Phi(2) = 0{,}9772$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Simpangan baku $\\bar{X} = \\frac{20}{\\sqrt{64}}$ = ?",
   "answer": "2,5",
   "hint": "$\\sqrt{64} = 8$.",
   "explain": "$2{,}5$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$z$ = ?",
   "answer": "2",
   "hint": "$\\frac{505 - 500}{2{,}5}$.",
   "explain": "$z = 2$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Nilai-p = ?",
   "answer": "0,0228",
   "hint": "$1 - \\Phi(2)$.",
   "explain": "$1 - 0{,}9772 = 0{,}0228$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Keputusan?",
   "options": [
    "Tolak $H_0$: ada cukup bukti $\\mu > 500$",
    "Tidak tolak $H_0$",
    "$H_0$ terbukti benar"
   ],
   "answer": "Tolak $H_0$: ada cukup bukti $\\mu > 500$",
   "hint": "Bandingkan nilai-p dengan 0,05.",
   "explain": "$0{,}0228 \\le 0{,}05$, tolak $H_0$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $H_0$ ditolak: ada cukup bukti pada taraf 5% bahwa $\\mu > 500$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Sampel acak: 12, 15, 11, 14, 13. Tentukan taksiran tak bias untuk rata-rata dan variansi populasi.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\bar{x}$ = ?",
   "answer": "13",
   "hint": "$\\frac{65}{5}$.",
   "explain": "$\\bar{x} = 13$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\sum (x - 13)^2$ = ?",
   "answer": "10",
   "hint": "1 + 4 + 4 + 1 + 0.",
   "explain": "10.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$s^2$ = ?",
   "answer": "2,5",
   "hint": "Bagi dengan $n - 1 = 4$.",
   "explain": "$\\frac{10}{4} = 2{,}5$.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jadi $\\bar{x} = 13$ dan $s^2 = 2{,}5$."
}
```
