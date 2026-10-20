---
id: sd4-12-simetri-lipat
judul: Simetri Lipat
jenjang: sd4
moe: "Primary 4 · Measurement and Geometry · Symmetry"
prasyarat: [sd3-13-garis-sejajar-tegak-lurus]
durasi_menit: 30
---

## Kenapa belajar ini?

Sayap kupu-kupu, daun, wajah, dan banyak motif kain seperti endek atau batik terlihat seimbang di kiri dan kanan. Keseimbangan ini disebut **simetri**. Desainer memakainya untuk membuat logo, hiasan, dan bangunan yang indah.

## Analogi

Bayangkan kamu **melipat selembar kertas** bergambar tepat di tengah.

- Kalau kedua bagian gambar **saling menutupi dengan tepat**, tanpa ada yang menonjol, gambar itu **simetris**.
- Garis lipatannya disebut **sumbu simetri** atau **garis simetri**.

```anim
{"type": "bangun", "title": "Rumah simetris dan garis lipatnya", "titik": {"A": [0, 0], "B": [4, 0], "C": [4, 3], "D": [2, 5], "E": [0, 3], "M": [2, -0.6], "N": [2, 5.6]}, "sisi": [["A", "B"], ["B", "C"], ["C", "D"], ["D", "E"], ["E", "A"], ["M", "N"]], "langkah": [{"say": "Sebuah gambar rumah.", "sisi": 5}, {"say": "Garis MN di tengah adalah garis lipat (sumbu simetri).", "sisi": 6, "sorot": ["MN"]}, {"say": "A berkembar dengan B: jaraknya ke garis sama.", "sisi": 6, "sorot": ["A", "B"]}, {"say": "E berkembar dengan C. D tepat di garis, kembarannya dirinya sendiri.", "sisi": 6, "sorot": ["E", "C", "D"]}, {"say": "Dilipat pada MN, kiri dan kanan saling menutupi tepat.", "sisi": 6, "sorot": ["MN", "DE", "CD"]}]}
```

Sumbu simetri juga seperti **cermin**. Setiap titik di satu sisi punya **kembaran** di sisi lain. Kembarannya berada pada **jarak yang sama** dari cermin, dan berhadapan lurus.

## Konsep

### Bangun simetris

Sebuah bangun **simetris** kalau ada garis yang membaginya menjadi dua bagian yang sama persis, dan bagian satu adalah **bayangan cermin** bagian lainnya.

Contoh bangun simetris: persegi panjang, persegi, segitiga sama kaki, lingkaran, huruf A, huruf H.

```visual
{"type": "shapes", "items": [{"shape": "persegi-panjang", "color": "biru"}, {"shape": "persegi", "color": "hijau"}, {"shape": "segitiga", "color": "kuning"}, {"shape": "lingkaran", "color": "ungu"}], "caption": "Semua bangun ini simetris"}
```

Contoh bangun yang tidak simetris: huruf F, huruf J.

### Memeriksa sumbu simetri

Sebuah garis adalah sumbu simetri kalau:

1. Bangun dilipat pada garis itu, lalu kedua bagian saling menutupi tepat.
2. Atau, setiap titik di satu sisi punya kembaran di sisi lain dengan **jarak sama** dari garis.

Kalau ada satu saja bagian yang tidak punya kembaran, garis itu **bukan** sumbu simetri.

### Kertas berpetak

Di kertas berpetak, kita menghitung **kotak**. Pada soal di materi ini, ■ adalah kotak yang diarsir dan □ kotak kosong. Letak sumbu simetri selalu disebutkan di soal.

```visual
{"type": "grid", "width": 6, "height": 4, "shade": [{"x": 2, "y": 0, "w": 1, "h": 1}, {"x": 3, "y": 0, "w": 1, "h": 1}, {"x": 1, "y": 1, "w": 1, "h": 1}, {"x": 2, "y": 1, "w": 1, "h": 1}, {"x": 3, "y": 1, "w": 1, "h": 1}, {"x": 4, "y": 1, "w": 1, "h": 1}, {"x": 0, "y": 2, "w": 1, "h": 1}, {"x": 1, "y": 2, "w": 1, "h": 1}, {"x": 4, "y": 2, "w": 1, "h": 1}, {"x": 5, "y": 2, "w": 1, "h": 1}, {"x": 0, "y": 3, "w": 1, "h": 1}, {"x": 5, "y": 3, "w": 1, "h": 1}], "caption": "Simetris terhadap garis tegak di tengah, antara kolom ke-3 dan ke-4"}
```

Untuk sumbu **tegak**, kotak yang menempel di kiri garis berkembar dengan kotak yang menempel di kanan garis. Kotak kedua dari garis berkembar dengan kotak kedua di seberang, dan seterusnya. Barisnya tetap sama.

Untuk sumbu **mendatar**, idenya sama, tetapi kita menghitung ke atas dan ke bawah. Kolomnya tetap sama.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Apakah garis ini sumbu simetri?

```soal
{
 "title": "Kerjakan bersama",
 "text": "Tentukan apakah garis berikut sumbu simetri: (a) garis tegak tepat di tengah persegi panjang, (b) garis dari pojok ke pojok seberang pada persegi panjang (bukan persegi), (c) garis dari puncak segitiga sama kaki ke tengah alasnya.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Bayangkan melipat (a), garis tegak di tengah persegi panjang.",
   "options": [
    "Ya, sumbu simetri",
    "Bukan sumbu simetri"
   ],
   "answer": "Ya, sumbu simetri",
   "hint": "Kedua bagian sama lebar dan sama tinggi?",
   "explain": "Kedua bagian saling menutupi tepat. Ya, sumbu simetri.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Bayangkan melipat (b), garis pojok ke pojok.",
   "options": [
    "Ya, sumbu simetri",
    "Bukan sumbu simetri"
   ],
   "answer": "Bukan sumbu simetri",
   "hint": "Setelah dilipat, apakah pojok-pojoknya bertemu?",
   "explain": "Pojok-pojoknya tidak bertemu, ada yang menonjol. Bukan sumbu simetri.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Bayangkan melipat (c), puncak ke tengah alas segitiga sama kaki.",
   "options": [
    "Ya, sumbu simetri",
    "Bukan sumbu simetri"
   ],
   "answer": "Ya, sumbu simetri",
   "hint": "Kedua sisi miring segitiga sama kaki sama panjang.",
   "explain": "Kedua sisi miring bertemu tepat. Ya, sumbu simetri.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Cek jawaban: kenapa (b) bukan sumbu simetri, padahal membagi dua sama luas?",
   "options": [
    "Sama luas belum tentu saling menutupi saat dilipat",
    "Karena garisnya miring",
    "Karena persegi panjang tidak simetris"
   ],
   "answer": "Sama luas belum tentu saling menutupi saat dilipat",
   "hint": "Ingat syarat lipatan.",
   "explain": "Simetris berarti saling menutupi tepat, bukan hanya sama luas.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "(a) ya, (b) bukan, (c) ya.",
 "visual": {
  "type": "shape",
  "shape": "persegi-panjang"
 }
}
```

### Contoh 2: Memeriksa di kertas berpetak

```soal
{
 "title": "Kerjakan bersama",
 "text": "Apakah garis tegak di tengah gambar (antara kolom ke-2 dan ke-3) sumbu simetri?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Baris 1, kiri □ ■ dan kanan ■ □. Apakah setiap kotak punya kembaran?",
   "options": [
    "Cocok",
    "Tidak cocok"
   ],
   "answer": "Cocok",
   "hint": "Bandingkan kotak yang menempel garis, lalu kotak kedua.",
   "explain": "■ dengan ■, □ dengan □. Cocok.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Baris 2, semua kotak diarsir. Cocok?",
   "options": [
    "Cocok",
    "Tidak cocok"
   ],
   "answer": "Cocok",
   "hint": "Bandingkan dari garis ke luar.",
   "explain": "■ ■ dengan ■ ■. Cocok.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Baris 3, kiri □ ■ dan kanan □ □. Cocok?",
   "options": [
    "Cocok",
    "Tidak cocok"
   ],
   "answer": "Tidak cocok",
   "hint": "Kotak yang menempel di kiri garis diarsir. Bagaimana kembarannya?",
   "explain": "Kiri ■ menempel garis, kanan □. Tidak cocok.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Kesimpulan: apakah garis itu sumbu simetri?",
   "options": [
    "Ya, sumbu simetri",
    "Bukan sumbu simetri"
   ],
   "answer": "Bukan sumbu simetri",
   "hint": "Satu pasang yang tidak cocok sudah cukup.",
   "explain": "Bukan sumbu simetri. Kalau dilipat, kotak di baris 3 tidak tertutupi.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Garis itu bukan sumbu simetri.",
 "visual": {
  "type": "grid",
  "width": 4,
  "height": 3,
  "shade": [
   {
    "x": 1,
    "y": 0,
    "w": 1,
    "h": 1
   },
   {
    "x": 2,
    "y": 0,
    "w": 1,
    "h": 1
   },
   {
    "x": 0,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 1,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 2,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 3,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 1,
    "y": 2,
    "w": 1,
    "h": 1
   }
  ]
 }
}
```

### Contoh 3: Melengkapi bangun dengan sumbu tegak

```soal
{
 "title": "Kerjakan bersama",
 "text": "Lengkapi gambar ini agar simetris terhadap garis tegak di tengah (antara kolom ke-4 dan ke-5).",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Baris 1. Isi 4 kotak di kanan garis, dari garis ke kanan.",
   "options": [
    "■ ■ □ □",
    "□ □ ■ ■",
    "■ ■ ■ ■"
   ],
   "answer": "■ ■ □ □",
   "hint": "Baca kotak di kiri dari garis ke kiri, lalu salin dengan urutan yang sama dari garis ke kanan.",
   "explain": "Dari garis ke kiri: ■ ■ □ □. Jadi dari garis ke kanan juga ■ ■ □ □.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Baris 2. Isi 4 kotak di kanan garis, dari garis ke kanan.",
   "options": [
    "■ ■ ■ □",
    "□ ■ ■ ■",
    "■ □ □ □",
    "■ ■ ■ ■"
   ],
   "answer": "■ ■ ■ □",
   "hint": "Baca kotak di kiri dari garis ke kiri, lalu salin dengan urutan yang sama dari garis ke kanan.",
   "explain": "Dari garis ke kiri: ■ ■ ■ □. Jadi dari garis ke kanan juga ■ ■ ■ □.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Baris 3. Isi 4 kotak di kanan garis, dari garis ke kanan.",
   "options": [
    "■ □ ■ ■",
    "■ ■ □ ■",
    "□ □ ■ □",
    "■ ■ ■ ■"
   ],
   "answer": "■ □ ■ ■",
   "hint": "Baca kotak di kiri dari garis ke kiri, lalu salin dengan urutan yang sama dari garis ke kanan.",
   "explain": "Dari garis ke kiri: ■ □ ■ ■. Jadi dari garis ke kanan juga ■ □ ■ ■.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Baris 4. Isi 4 kotak di kanan garis, dari garis ke kanan.",
   "options": [
    "■ □ □ □",
    "□ □ □ ■",
    "■ ■ ■ □",
    "■ ■ ■ ■"
   ],
   "answer": "■ □ □ □",
   "hint": "Baca kotak di kiri dari garis ke kiri, lalu salin dengan urutan yang sama dari garis ke kanan.",
   "explain": "Dari garis ke kiri: ■ □ □ □. Jadi dari garis ke kanan juga ■ □ □ □.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: berapa kotak arsiran seluruhnya setelah lengkap?",
   "answer": "18",
   "hint": "Kiri ada 2 + 3 + 3 + 1 kotak. Kanan harus sama banyak.",
   "explain": "9 + 9 = 18 kotak.",
   "error": "salah-membilang-benda"
  }
 ],
 "conclusion": "Gambar lengkap punya 18 kotak arsiran, 9 di setiap sisi garis.",
 "visual": {
  "type": "grid",
  "width": 8,
  "height": 4,
  "shade": [
   {
    "x": 2,
    "y": 0,
    "w": 1,
    "h": 1
   },
   {
    "x": 3,
    "y": 0,
    "w": 1,
    "h": 1
   },
   {
    "x": 1,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 2,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 3,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 0,
    "y": 2,
    "w": 1,
    "h": 1
   },
   {
    "x": 1,
    "y": 2,
    "w": 1,
    "h": 1
   },
   {
    "x": 3,
    "y": 2,
    "w": 1,
    "h": 1
   },
   {
    "x": 3,
    "y": 3,
    "w": 1,
    "h": 1
   }
  ]
 }
}
```

### Contoh 4: Soal cerita dengan sumbu mendatar

```soal
{
 "title": "Kerjakan bersama",
 "text": "Komang mendesain motif kain endek. Ia sudah menggambar 3 baris bagian atas. Motifnya harus simetris terhadap garis mendatar di bawah baris ke-3. Lengkapi 3 baris bagian bawah.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Sumbunya mendatar. Baris tepat di bawah garis berkembar dengan baris mana?",
   "options": [
    "Baris tepat di atas garis",
    "Baris paling atas",
    "Baris tengah"
   ],
   "answer": "Baris tepat di atas garis",
   "hint": "Baris yang paling dekat garis berkembar dengan baris yang paling dekat garis.",
   "explain": "Baris yang menempel garis berkembar dengan baris yang menempel garis.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Baris ke-1 di bawah garis.",
   "options": [
    "□ ■ ■ ■ □",
    "□ ■ □ □ □",
    "■ ■ ■ □ □"
   ],
   "answer": "□ ■ ■ ■ □",
   "hint": "Salin baris ke-1 di atas garis (dihitung dari garis).",
   "explain": "Baris ke-1 di bawah garis = □ ■ ■ ■ □.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Baris ke-2 di bawah garis.",
   "options": [
    "■ ■ ■ □ □",
    "□ ■ □ □ □",
    "□ ■ ■ ■ □"
   ],
   "answer": "■ ■ ■ □ □",
   "hint": "Salin baris ke-2 di atas garis (dihitung dari garis).",
   "explain": "Baris ke-2 di bawah garis = ■ ■ ■ □ □.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 4: Baris ke-3 di bawah garis.",
   "options": [
    "□ ■ □ □ □",
    "■ ■ ■ □ □",
    "□ ■ ■ ■ □"
   ],
   "answer": "□ ■ □ □ □",
   "hint": "Salin baris ke-3 di atas garis (dihitung dari garis).",
   "explain": "Baris ke-3 di bawah garis = □ ■ □ □ □.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Bagian bawah: □ ■ ■ ■ □, ■ ■ ■ □ □, □ ■ □ □ □. Urutan barisnya terbalik, seperti bayangan di air danau.",
 "visual": {
  "type": "grid",
  "width": 5,
  "height": 6,
  "shade": [
   {
    "x": 1,
    "y": 0,
    "w": 1,
    "h": 1
   },
   {
    "x": 0,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 1,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 2,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 1,
    "y": 2,
    "w": 1,
    "h": 1
   },
   {
    "x": 2,
    "y": 2,
    "w": 1,
    "h": 1
   },
   {
    "x": 3,
    "y": 2,
    "w": 1,
    "h": 1
   }
  ]
 }
}
```

## Kesalahan yang sering terjadi

- **Menggeser, bukan mencerminkan.** Pada Contoh 3, menyalin baris 1 apa adanya ke kanan (□ □ ■ ■). Yang benar dicerminkan dari garis: kotak yang menempel garis berkembar dengan kotak yang menempel garis, jadi ■ ■ □ □.
- **Tidak membalik urutan baris pada sumbu mendatar.** Menyalin baris paling atas ke baris tepat di bawah garis. Baris yang paling dekat garis harus berkembar dengan baris yang paling dekat garis.
- **Mengira garis pojok ke pojok persegi panjang adalah sumbu simetri.** Garis itu membagi dua sama luas, tetapi lipatannya tidak saling menutupi. Sama luas belum tentu simetris.
- **Salah menghitung jarak.** Ingat, jarak dihitung dalam kotak dari garis, bukan dari tepi kertas.
- **Berhenti memeriksa terlalu cepat.** Memeriksa dua baris saja lalu menyimpulkan simetris. Periksa **semua** baris.

## Ringkasan

- Bangun simetris bisa dilipat sehingga kedua bagian saling menutupi tepat.
- Garis lipatannya disebut sumbu simetri, dan bekerja seperti cermin.
- Untuk memeriksa: setiap bagian harus punya kembaran dengan jarak sama di seberang garis.
- Melengkapi di kertas berpetak: kerjakan baris demi baris (sumbu tegak) atau kolom demi kolom (sumbu mendatar), hitung jarak dari garis.
- Cek: banyak kotak arsiran di kedua sisi harus sama.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Dari huruf A, F, H, dan J, mana yang punya sumbu simetri tegak?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Bayangkan setiap huruf dilipat tegak di tengah. Huruf F, apakah kedua bagiannya saling menutupi?",
   "options": [
    "Tidak",
    "Ya"
   ],
   "answer": "Tidak",
   "hint": "Garis mendatar F hanya ada di kanan.",
   "explain": "F tidak simetris tegak.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Jadi, huruf mana saja yang punya sumbu simetri tegak?",
   "options": [
    "A dan H",
    "A, F, dan H",
    "H saja",
    "F dan J"
   ],
   "answer": "A dan H",
   "hint": "Periksa A, H, dan J juga.",
   "explain": "A dan H saling menutupi saat dilipat tegak. F dan J tidak.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "A dan H."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Sebuah persegi panjang (bukan persegi) dilipat dari satu pojok ke pojok seberangnya. Apakah garis lipatan itu sumbu simetri?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Setelah dilipat, apakah pojok-pojoknya bertemu?",
   "options": [
    "Tidak bertemu",
    "Bertemu tepat"
   ],
   "answer": "Tidak bertemu",
   "hint": "Coba bayangkan atau lipat kertas sungguhan.",
   "explain": "Pojok-pojoknya tidak bertemu, ada yang menonjol.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Jadi, apakah garis itu sumbu simetri?",
   "options": [
    "Ya, sumbu simetri",
    "Bukan sumbu simetri"
   ],
   "answer": "Bukan sumbu simetri",
   "hint": "Sumbu simetri harus membuat kedua bagian saling menutupi.",
   "explain": "Bukan sumbu simetri.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Bukan sumbu simetri."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "Lengkapi gambar ini agar simetris terhadap garis tegak di tengah (antara kolom ke-3 dan ke-4).",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Baris 1. Isi 3 kotak di kanan garis, dari garis ke kanan.",
   "options": [
    "□ □ ■",
    "■ □ □",
    "■ ■ ■",
    "□ □ □"
   ],
   "answer": "□ □ ■",
   "hint": "Baca kotak kiri dari garis ke kiri, lalu salin dari garis ke kanan.",
   "explain": "Dari garis ke kanan: □ □ ■.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Baris 2. Isi 3 kotak di kanan garis, dari garis ke kanan.",
   "options": [
    "□ ■ ■",
    "■ ■ □",
    "■ ■ ■",
    "□ □ □"
   ],
   "answer": "□ ■ ■",
   "hint": "Baca kotak kiri dari garis ke kiri, lalu salin dari garis ke kanan.",
   "explain": "Dari garis ke kanan: □ ■ ■.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Baris 3. Isi 3 kotak di kanan garis, dari garis ke kanan.",
   "options": [
    "■ ■ □",
    "□ ■ ■",
    "■ ■ ■",
    "□ □ □"
   ],
   "answer": "■ ■ □",
   "hint": "Baca kotak kiri dari garis ke kiri, lalu salin dari garis ke kanan.",
   "explain": "Dari garis ke kanan: ■ ■ □.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Gambar lengkap: ■ □ □ □ □ ■; ■ ■ □ □ ■ ■; □ ■ ■ ■ ■ □.",
 "visual": {
  "type": "grid",
  "width": 6,
  "height": 3,
  "shade": [
   {
    "x": 0,
    "y": 0,
    "w": 1,
    "h": 1
   },
   {
    "x": 0,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 1,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 1,
    "y": 2,
    "w": 1,
    "h": 1
   },
   {
    "x": 2,
    "y": 2,
    "w": 1,
    "h": 1
   }
  ]
 }
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "Apakah garis tegak di tengah gambar (antara kolom ke-3 dan ke-4) sumbu simetri?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Baris 1. Cocok?",
   "options": [
    "Cocok",
    "Tidak cocok"
   ],
   "answer": "Cocok",
   "hint": "Bandingkan dari garis ke luar.",
   "explain": "Kiri dari garis ■ ■ □, kanan dari garis ■ ■ □. Cocok.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Baris 2. Cocok?",
   "options": [
    "Cocok",
    "Tidak cocok"
   ],
   "answer": "Cocok",
   "hint": "Bandingkan dari garis ke luar.",
   "explain": "Kiri dari garis ■ □ ■, kanan dari garis ■ □ ■. Cocok.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 3: Jadi, apakah garis itu sumbu simetri?",
   "options": [
    "Ya, sumbu simetri",
    "Bukan sumbu simetri"
   ],
   "answer": "Ya, sumbu simetri",
   "hint": "Semua baris sudah diperiksa.",
   "explain": "Ya. Setiap kotak punya kembaran dengan jarak sama dari garis.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Ya, garis itu sumbu simetri.",
 "visual": {
  "type": "grid",
  "width": 6,
  "height": 2,
  "shade": [
   {
    "x": 1,
    "y": 0,
    "w": 1,
    "h": 1
   },
   {
    "x": 2,
    "y": 0,
    "w": 1,
    "h": 1
   },
   {
    "x": 3,
    "y": 0,
    "w": 1,
    "h": 1
   },
   {
    "x": 4,
    "y": 0,
    "w": 1,
    "h": 1
   },
   {
    "x": 0,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 2,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 3,
    "y": 1,
    "w": 1,
    "h": 1
   },
   {
    "x": 5,
    "y": 1,
    "w": 1,
    "h": 1
   }
  ]
 }
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Lengkapi gambar ini agar simetris terhadap garis mendatar di bawah baris ke-2.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Baris ke-1 di bawah garis.",
   "options": [
    "□ ■ □ □",
    "■ ■ ■ □",
    "□ □ □ □"
   ],
   "answer": "□ ■ □ □",
   "hint": "Baris yang paling dekat garis berkembar dengan baris yang paling dekat garis.",
   "explain": "Baris ke-1 di bawah garis = □ ■ □ □.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Baris ke-2 di bawah garis.",
   "options": [
    "■ ■ ■ □",
    "□ ■ □ □",
    "□ □ □ □"
   ],
   "answer": "■ ■ ■ □",
   "hint": "Baris yang paling dekat garis berkembar dengan baris yang paling dekat garis.",
   "explain": "Baris ke-2 di bawah garis = ■ ■ ■ □.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: berapa kotak arsiran di bagian bawah?",
   "answer": "4",
   "hint": "Harus sama dengan bagian atas.",
   "explain": "3 + 1 = 4, sama dengan bagian atas.",
   "error": "salah-membilang-benda"
  }
 ],
 "conclusion": "Bagian bawah: □ ■ □ □, ■ ■ ■ □. Urutan baris dibalik.",
 "visual": {
  "type": "grid",
  "width": 4,
  "height": 4,
  "shade": [
   {
    "x": 0,
    "y": 0,
    "w": 1,
    "h": 1
   },
   {
    "x": 1,
    "y": 0,
    "w": 1,
    "h": 1
   },
   {
    "x": 2,
    "y": 0,
    "w": 1,
    "h": 1
   },
   {
    "x": 1,
    "y": 1,
    "w": 1,
    "h": 1
   }
  ]
 }
}
```
