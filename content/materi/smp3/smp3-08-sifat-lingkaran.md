---
id: smp3-08-sifat-lingkaran
judul: Sifat-sifat Lingkaran
jenjang: smp3
moe: "Secondary 3 · Geometry and Measurement · G3 Properties of circles"
prasyarat: [smp1-10-sudut-segitiga-poligon, smp2-08-kongruen-sebangun, smp2-09-pythagoras-trigonometri]
durasi_menit: 60
---

## Kenapa belajar ini?

Roda, meja bundar, kubah masjid, dan jam dinding semuanya berbentuk lingkaran. Tukang kayu memakai sifat lingkaran untuk mencari titik pusat meja, dan insinyur memakainya untuk merancang roda gigi. Di bab ini kamu belajar sifat-sifat itu **beserta alasannya**.

## Analogi

Bayangkan acara **layar tancap** di sebuah lapangan desa yang berbentuk lingkaran sempurna.

- **Proyektor** diletakkan di **pusat** lapangan $O$.
- **Layar** dibentangkan lurus di antara dua titik di tepi lapangan. Layar itu adalah **tali busur**.
- **Penonton** duduk di **tepi** lapangan, yaitu di lingkaran.
- **Pagar bambu lurus** yang hanya menyentuh tepi lapangan di satu titik adalah **garis singgung**.

```anim
{"type": "bangun", "title": "Layar tancap di lapangan bundar", "titik": {"O": [0, 0], "A": [-4, -3], "B": [4, -3], "C": [0, 5], "T": [5, 0], "F": [5, -3.5], "G": [5, 3.5]}, "sisi": [["A", "B", "\\text{layar}"], ["O", "A"], ["O", "B"], ["C", "A"], ["C", "B"], ["F", "G", "\\text{pagar}"]], "sudut": [{"di": "O", "dari": "A", "ke": "B", "label": "\\angle AOB"}, {"di": "C", "dari": "A", "ke": "B", "label": "\\angle ACB"}], "lingkaran": [{"pusat": [0, 0], "r": 5}], "langkah": [{"say": "Lapangan bundar dengan proyektor di pusat $O$.", "sisi": 0, "sudut": 0}, {"say": "Layar $AB$ dibentangkan di antara dua titik tepi: tali busur.", "sisi": 1, "sudut": 0, "sorot": ["AB"]}, {"say": "Dari proyektor, layar terlihat dengan sudut pusat $\\angle AOB$.", "sisi": 3, "sudut": 1, "sorot": ["O"]}, {"say": "Penonton $C$ di tepi melihat layar dengan sudut keliling $\\angle ACB$, lebih sempit.", "sisi": 5, "sudut": 2, "sorot": ["C"]}, {"say": "Pagar lurus yang hanya menyentuh tepi di $T$ adalah garis singgung.", "sisi": 6, "sudut": 2, "sorot": ["FG", "T"]}]}
```

Pertanyaan utama bab ini: seberapa lebar layar terlihat (sudutnya) dari proyektor dan dari kursi penonton yang berbeda-beda?

## Konsep

Ingat istilah: **jari-jari** (pusat ke tepi), **tali busur** (ruas garis antara dua titik di lingkaran), **diameter** (tali busur yang melalui pusat), **busur** (bagian lengkung lingkaran), **tembereng** (daerah antara tali busur dan busur).

### Sifat simetri 1: tali busur

**Garis dari pusat yang tegak lurus tali busur membagi tali busur itu sama panjang.**

Alasan: misalkan tali busur $AB$ dan $M$ kaki garis tegak lurus dari $O$. Segitiga $OMA$ dan $OMB$ sama-sama siku-siku di $M$, sisi miringnya $OA = OB$ (jari-jari), dan $OM$ sisi bersama. Jadi keduanya kongruen (RHS), sehingga $AM = BM$.

Akibatnya:

- Garis sumbu (tegak lurus di tengah) sebuah tali busur **selalu melalui pusat**.
- Tali busur yang sama panjang **berjarak sama** dari pusat.
- Jari-jari, setengah tali busur, dan jarak ke pusat membentuk segitiga siku-siku: $r^2 = \left(\tfrac{AB}{2}\right)^2 + OM^2$.

```anim
{"type": "bangun", "title": "Garis dari pusat tegak lurus tali busur", "titik": {"O": [0, 0], "A": [-4, -3], "B": [4, -3], "M": [0, -3]}, "sisi": [["A", "B"], ["O", "M"], ["O", "A", "r"], ["O", "B", "r"]], "sudut": [{"di": "M", "dari": "B", "ke": "O", "siku": true}], "lingkaran": [{"pusat": [0, 0], "r": 5}], "langkah": [{"say": "Tali busur $AB$ pada lingkaran berpusat $O$.", "sisi": 1}, {"say": "Tarik garis dari $O$ tegak lurus $AB$, kena di $M$.", "sisi": 2, "sudut": 1, "sorot": ["OM"]}, {"say": "$OA = OB$ (jari-jari) dan $OM$ sisi bersama: segitiga $OMA$ dan $OMB$ kongruen (RHS).", "sisi": 4, "sudut": 1, "sorot": ["OA", "OB"]}, {"say": "Jadi $AM = BM$: tali busur terbagi sama panjang.", "sisi": 4, "sudut": 1, "sorot": ["A", "B", "M"]}]}
```

### Sifat simetri 2: garis singgung dari titik luar

**Garis singgung tegak lurus jari-jari di titik singgungnya.** Bayangkan pagar menyentuh lapangan di $T$. Jarak terpendek dari $O$ ke pagar adalah $OT$, karena semua titik lain di pagar berada di luar lingkaran. Jarak terpendek dari titik ke garis selalu tegak lurus, jadi $OT \perp$ garis singgung.

**Dua garis singgung dari titik luar $P$ sama panjang.** Misalkan menyinggung di $A$ dan $B$. Segitiga $OAP$ dan $OBP$ siku-siku di $A$ dan $B$, $OA = OB$, dan $OP$ sisi bersama. Jadi kongruen (RHS), sehingga:

- $PA = PB$,
- $OP$ membagi dua $\angle APB$ dan $\angle AOB$ sama besar.

```anim
{"type": "bangun", "title": "Dua garis singgung dari titik luar", "titik": {"O": [0, 0], "P": [5, 0], "A": [1.8, 2.4], "B": [1.8, -2.4]}, "sisi": [["O", "A", "r"], ["O", "B", "r"], ["P", "A"], ["P", "B"], ["O", "P"]], "sudut": [{"di": "A", "dari": "O", "ke": "P", "siku": true}, {"di": "B", "dari": "P", "ke": "O", "siku": true}], "lingkaran": [{"pusat": [0, 0], "r": 3}], "langkah": [{"say": "Dari titik luar $P$, tarik dua garis singgung yang menyentuh lingkaran di $A$ dan $B$.", "sisi": 4, "sudut": 0, "sorot": ["PA", "PB"]}, {"say": "Jari-jari ke titik singgung tegak lurus garis singgung.", "sisi": 4, "sudut": 2, "sorot": ["OA", "OB"]}, {"say": "Segitiga $OAP$ dan $OBP$ kongruen (RHS), dengan $OP$ sisi bersama.", "sisi": 5, "sudut": 2, "sorot": ["OP"]}, {"say": "Jadi $PA = PB$.", "sisi": 5, "sudut": 2, "sorot": ["PA", "PB"]}]}
```

### Sifat sudut 1: sudut pusat = 2 × sudut keliling

Sudut yang dibentuk layar $AB$ di proyektor ($\angle AOB$, **sudut pusat**) adalah **dua kali** sudut yang dibentuk di kursi penonton $C$ ($\angle ACB$, **sudut keliling**), asalkan $C$ dan $O$ berada di sisi yang sama dari layar.

**Bukti.** Tarik garis dari $C$ melalui $O$ sampai $D$.

1. $OA = OC$ (jari-jari), jadi segitiga $OAC$ sama kaki: $\angle OAC = \angle OCA = x$.
2. Sudut luar segitiga sama dengan jumlah dua sudut dalam yang tidak bersebelahan: $\angle AOD = x + x = 2x$.
3. Dengan cara sama pada segitiga $OBC$: $\angle OCB = y$ dan $\angle BOD = 2y$.
4. Jadi $\angle AOB = 2x + 2y = 2(x + y) = 2\angle ACB$.

```anim
{"type": "bangun", "title": "Sudut pusat = 2 × sudut keliling", "titik": {"O": [0, 0], "A": [-3.214, -3.83], "B": [3.214, -3.83], "C": [0, 5], "D": [0, -5]}, "sisi": [["C", "A"], ["C", "B"], ["O", "A"], ["O", "B"], ["C", "D"]], "sudut": [{"di": "C", "dari": "B", "ke": "A", "label": "\\theta"}, {"di": "O", "dari": "B", "ke": "A", "label": "2\\theta"}], "lingkaran": [{"pusat": [0, 0], "r": 5}], "langkah": [{"say": "Penonton $C$ melihat layar $AB$ dengan sudut keliling $\\theta$.", "sisi": 2, "sudut": 1, "sorot": ["C"]}, {"say": "Proyektor $O$ melihat layar yang sama dengan sudut pusat $\\angle AOB$.", "sisi": 4, "sudut": 2, "sorot": ["O"]}, {"say": "Tarik $CD$ melalui $O$. $OA = OC$ dan $OB = OC$ membuat dua segitiga sama kaki.", "sisi": 5, "sudut": 2, "sorot": ["CD"]}, {"say": "Dengan sudut luar segitiga, $\\angle AOB = 2\\theta$.", "sisi": 5, "sudut": 2}]}
```

### Sifat sudut 2: sudut di setengah lingkaran

Jika layar adalah **diameter**, sudut pusatnya $180^\circ$. Maka sudut keliling $= \frac{180^\circ}{2} = 90^\circ$. **Sudut di setengah lingkaran selalu siku-siku.**

```anim
{"type": "bangun", "title": "Sudut di setengah lingkaran", "titik": {"A": [-5, 0], "B": [5, 0], "O": [0, 0], "C": [2.868, 4.096]}, "sisi": [["A", "B", "\\text{diameter}"], ["A", "C"], ["C", "B"]], "sudut": [{"di": "O", "dari": "B", "ke": "A", "label": "180^\\circ"}, {"di": "C", "dari": "A", "ke": "B", "siku": true}], "lingkaran": [{"pusat": [0, 0], "r": 5}], "langkah": [{"say": "Layar $AB$ adalah diameter, sudut pusatnya $180^\\circ$.", "sisi": 1, "sudut": 1}, {"say": "Penonton $C$ di mana pun di busur: sudut kelilingnya $\\frac{180^\\circ}{2} = 90^\\circ$.", "sisi": 3, "sudut": 2, "sorot": ["C"]}]}
```

### Sifat sudut 3: sudut pada tembereng yang sama

Semua penonton yang duduk di busur yang sama melihat layar $AB$ dengan sudut yang **sama besar**. Alasannya: setiap sudut itu sama dengan $\frac{1}{2}\angle AOB$, dan $\angle AOB$ hanya satu.

### Sifat sudut 4: segiempat tali busur

Segiempat yang keempat titik sudutnya di lingkaran disebut **segiempat tali busur**. **Sudut-sudut yang berhadapan berjumlah $180^\circ$.**

Alasan: pada segiempat $ABCD$, sudut $A$ dan sudut $C$ "melihat" tali busur $BD$ dari busur yang berlawanan. Sudut pusat kedua busur itu berjumlah $360^\circ$. Masing-masing sudut keliling adalah setengahnya, jadi $\angle A + \angle C = \frac{360^\circ}{2} = 180^\circ$.

Akibatnya, sudut luar segiempat tali busur sama dengan sudut dalam di hadapannya.

## Contoh langkah demi langkah

Kerjakan setiap langkah sendiri. Kalau salah, baca petunjuknya lalu coba lagi.

### Contoh 1: Jarak tali busur ke pusat

```soal
{
 "title": "Contoh 1",
 "text": "Lingkaran berjari-jari 13 cm memiliki tali busur sepanjang 24 cm. Hitung jarak tali busur ke pusat.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Garis tegak lurus dari pusat membagi tali busur sama panjang. Setengah tali busur = ?",
   "answer": "12",
   "hint": "24 ÷ 2.",
   "explain": "Setengahnya 12 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Pada segitiga siku-sikunya, sisi miringnya adalah ...",
   "options": [
    "jari-jari 13 cm",
    "setengah tali busur 12 cm",
    "jarak ke pusat"
   ],
   "answer": "jari-jari 13 cm",
   "hint": "Sisi miring berhadapan dengan sudut siku-siku di tengah tali busur.",
   "explain": "Sisi miring = jari-jari, dari pusat ke ujung tali busur.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Jarak $d = \\sqrt{13^2 - 12^2}$ = ?",
   "answer": "5",
   "hint": "$\\sqrt{169 - 144}$.",
   "explain": "$\\sqrt{25} = 5$ cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $5^2 + 12^2$ = ?",
   "answer": "169",
   "hint": "25 + 144.",
   "explain": "$169 = 13^2$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jarak tali busur ke pusat 5 cm."
}
```

### Contoh 2: Garis singgung dari titik luar

```soal
{
 "title": "Contoh 2",
 "text": "Titik $P$ berjarak 17 cm dari pusat lingkaran berjari-jari 8 cm. Dari $P$ ditarik garis singgung $PA$ dan $PB$. Hitung $PA$, $PB$, dan luas layang-layang $OAPB$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: Besar $\\angle OAP$ = ?",
   "answer": "90",
   "hint": "Garis singgung dan jari-jari di titik singgung.",
   "explain": "Garis singgung tegak lurus jari-jari, jadi $90^\\circ$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $PA = \\sqrt{17^2 - 8^2}$ = ?",
   "answer": "15",
   "hint": "$\\sqrt{289 - 64}$.",
   "explain": "$\\sqrt{225} = 15$ cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $PB$ = ?",
   "answer": "15",
   "hint": "Dua garis singgung dari titik luar.",
   "explain": "Sama panjang dengan $PA$: 15 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Luas $OAPB = 2 \\times \\frac{1}{2} \\times 8 \\times 15$ = ?",
   "answer": "120",
   "hint": "Dua segitiga siku-siku kongruen.",
   "explain": "Luas 120 cm².",
   "error": "salah-langkah-materi",
   "suffix": "cm²"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $8^2 + 15^2$ = ?",
   "answer": "289",
   "hint": "64 + 225.",
   "explain": "$289 = 17^2$. Cocok.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "$PA = PB = 15$ cm dan luas layang-layang 120 cm²."
}
```

### Contoh 3: Sudut pusat dan sudut keliling

```anim
{"type": "bangun", "title": "Titik A, B, C, D pada lingkaran", "titik": {"O": [0, 0], "A": [-3.214, -3.83], "B": [3.214, -3.83], "C": [-0.868, 4.924], "D": [-4.698, 1.71]}, "sisi": [["C", "A"], ["C", "B"], ["D", "A"], ["D", "B"], ["O", "A"], ["O", "B"], ["A", "B"]], "sudut": [{"di": "C", "dari": "B", "ke": "A", "label": "35^\\circ"}], "lingkaran": [{"pusat": [0, 0], "r": 5}], "langkah": [{"say": "$C$ dan $D$ di busur besar $AB$; $\\angle ACB = 35^\\circ$.", "sudut": 1}]}
```

```soal
{
 "title": "Contoh 3",
 "text": "$A$, $B$, $C$, $D$ terletak pada lingkaran berpusat $O$. $C$ dan $D$ berada di busur besar $AB$, dan $\\angle ACB = 35^\\circ$. Hitung $\\angle AOB$, $\\angle OAB$, dan $\\angle ADB$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "Langkah 1: $\\angle AOB$ = ?",
   "answer": "70",
   "hint": "Sudut pusat = 2 × sudut keliling.",
   "explain": "$2 \\times 35^\\circ = 70^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: Segitiga $OAB$ sama kaki. $\\angle OAB$ = ?",
   "answer": "55",
   "hint": "$\\frac{180^\\circ - 70^\\circ}{2}$.",
   "explain": "$\\angle OAB = \\angle OBA = 55^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $\\angle ADB$ = ?",
   "answer": "35",
   "hint": "$D$ di busur yang sama dengan $C$.",
   "explain": "Sudut pada tembereng yang sama: $35^\\circ$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $70^\\circ + 55^\\circ + 55^\\circ$ = ?",
   "answer": "180",
   "hint": "Jumlahkan sudut segitiga $OAB$.",
   "explain": "$180^\\circ$. Cocok.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "$\\angle AOB = 70^\\circ$, $\\angle OAB = 55^\\circ$, $\\angle ADB = 35^\\circ$."
}
```

### Contoh 4: Segiempat tali busur dengan aljabar

```soal
{
 "title": "Contoh 4",
 "text": "$ABCD$ segiempat tali busur dengan $\\angle DAB = (2x + 10)^\\circ$, $\\angle BCD = (3x - 5)^\\circ$, dan $\\angle ABC = 95^\\circ$. Hitung $x$, $\\angle DAB$, $\\angle BCD$, dan $\\angle ADC$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Sudut $A$ berhadapan dengan sudut ...",
   "options": [
    "$C$",
    "$B$",
    "$D$"
   ],
   "answer": "$C$",
   "hint": "Sudut berhadapan tidak berbagi sisi.",
   "explain": "$A$ berhadapan dengan $C$, $B$ dengan $D$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 2: Persamaannya?",
   "options": [
    "$(2x + 10) + (3x - 5) = 180$",
    "$(2x + 10) = (3x - 5)$",
    "$(2x + 10) + (3x - 5) = 360$"
   ],
   "answer": "$(2x + 10) + (3x - 5) = 180$",
   "hint": "Sudut berhadapan pada segiempat tali busur.",
   "explain": "Sudut berhadapan berjumlah $180^\\circ$: $5x + 5 = 180$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: $x$ = ?",
   "answer": "35",
   "hint": "$5x = 175$.",
   "explain": "$x = 35$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: $\\angle DAB = 2(35) + 10$ = ?",
   "answer": "80",
   "hint": "70 + 10.",
   "explain": "$80^\\circ$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 5: $\\angle BCD = 3(35) - 5$ = ?",
   "answer": "100",
   "hint": "105 − 5.",
   "explain": "$100^\\circ$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Langkah 6: $\\angle ADC$ = ?",
   "answer": "85",
   "hint": "Berhadapan dengan $\\angle ABC = 95^\\circ$.",
   "explain": "$180^\\circ - 95^\\circ = 85^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "Cek jawaban: $80 + 95 + 100 + 85$ = ?",
   "answer": "360",
   "hint": "Jumlah sudut segiempat.",
   "explain": "$360^\\circ$. Cocok.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "$x = 35$, $\\angle DAB = 80^\\circ$, $\\angle BCD = 100^\\circ$, $\\angle ADC = 85^\\circ$."
}
```

### Contoh 5: Soal cerita, mencari pusat meja bundar

```soal
{
 "title": "Contoh 5",
 "text": "Pak Made ingin mencari pusat meja bundar. Ia menempelkan sudut siku-siku penggaris tukang pada tepi meja. Kedua lengan penggaris memotong tepi meja di titik yang berjarak 48 cm dan 64 cm dari sudut penggaris. Berapa jari-jari meja, dan bagaimana menemukan pusatnya?",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Langkah 1: Ruas yang menghubungkan kedua titik potong adalah ...",
   "options": [
    "diameter",
    "jari-jari",
    "garis singgung"
   ],
   "answer": "diameter",
   "hint": "Sudut siku-siku dengan titik sudut di lingkaran.",
   "explain": "Sudut di setengah lingkaran $90^\\circ$, jadi ruas itu diameter.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 2: $48^2 + 64^2$ = ?",
   "answer": "6.400",
   "hint": "2.304 + 4.096.",
   "explain": "6.400.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "Langkah 3: Diameter = $\\sqrt{6.400}$ = ?",
   "answer": "80",
   "hint": "80 × 80 = 6.400.",
   "explain": "Diameter 80 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Langkah 4: Jari-jari = ?",
   "answer": "40",
   "hint": "Setengah diameter.",
   "explain": "40 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "choice",
   "prompt": "Langkah 5: Bagaimana menemukan pusat?",
   "options": [
    "Ulangi di tempat lain; pusat = perpotongan dua diameter",
    "Pusat = titik tengah lengan 48 cm",
    "Pusat = sudut penggaris"
   ],
   "answer": "Ulangi di tempat lain; pusat = perpotongan dua diameter",
   "hint": "Semua diameter melalui pusat.",
   "explain": "Dua diameter berpotongan tepat di pusat.",
   "error": "salah-langkah-materi"
  }
 ],
 "conclusion": "Jari-jari meja 40 cm; pusatnya di perpotongan dua diameter."
}
```

## Kesalahan yang sering terjadi

- **Membagi dua sudut yang salah.** Sudut pusat = 2 × sudut keliling, bukan sebaliknya. Proyektor di pusat melihat layar lebih lebar daripada penonton.
- **Memakai sudut keliling dari busur yang berlawanan.** Jika $C$ di busur kecil $AB$, maka $\angle ACB = 180^\circ - \frac{1}{2}\angle AOB$, bukan $\frac{1}{2}\angle AOB$. Periksa letak penonton.
- **Menganggap sudut berdampingan pada segiempat tali busur berjumlah $180^\circ$.** Yang berjumlah $180^\circ$ adalah sudut yang **berhadapan**.
- **Lupa sudut siku-siku antara garis singgung dan jari-jari.** Setiap kali ada garis singgung, gambar jari-jari ke titik singgungnya dan tandai $90^\circ$.
- **Tidak memberi alasan.** Dalam ujian, setiap langkah harus disertai sifat yang dipakai, misalnya "(sudut di setengah lingkaran)".

## Ringkasan

- Garis dari pusat yang tegak lurus tali busur membagi tali busur sama panjang; tali busur sama panjang berjarak sama dari pusat.
- Garis singgung $\perp$ jari-jari di titik singgung; dua garis singgung dari titik luar sama panjang.
- Sudut pusat $= 2 \times$ sudut keliling pada busur yang sama.
- Sudut di setengah lingkaran $= 90^\circ$; sudut pada tembereng yang sama besarnya sama.
- Sudut berhadapan pada segiempat tali busur berjumlah $180^\circ$.

## Cek pemahaman

Kerjakan sendiri. Petunjuk muncul kalau jawabanmu belum tepat.

### Soal 1

```soal
{
 "title": "Soal 1",
 "text": "Lingkaran berjari-jari 10 cm memiliki tali busur 16 cm. Berapa jarak tali busur ke pusat?",
 "steps": [
  {
   "kind": "number",
   "prompt": "Setengah tali busur = ?",
   "answer": "8",
   "hint": "16 ÷ 2.",
   "explain": "8 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "Jarak = $\\sqrt{10^2 - 8^2}$ = ?",
   "answer": "6",
   "hint": "$\\sqrt{100 - 64}$.",
   "explain": "$\\sqrt{36} = 6$ cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  }
 ],
 "conclusion": "Jaraknya 6 cm."
}
```

### Soal 2

```soal
{
 "title": "Soal 2",
 "text": "Dari titik $P$ ditarik garis singgung $PA$ dan $PB$ ke lingkaran berpusat $O$. Diketahui $PA = 9$ cm dan $\\angle APB = 70^\\circ$. Tentukan $PB$ dan $\\angle AOB$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$PB$ = ?",
   "answer": "9",
   "hint": "Dua garis singgung dari titik luar.",
   "explain": "Sama panjang: 9 cm.",
   "error": "salah-langkah-materi",
   "suffix": "cm"
  },
  {
   "kind": "number",
   "prompt": "$\\angle OAP$ = ?",
   "answer": "90",
   "hint": "Jari-jari dan garis singgung.",
   "explain": "$90^\\circ$, begitu juga $\\angle OBP$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "$\\angle AOB$ = ?",
   "answer": "110",
   "hint": "Jumlah sudut segiempat $OAPB$ adalah $360^\\circ$.",
   "explain": "$360^\\circ - 90^\\circ - 90^\\circ - 70^\\circ = 110^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  }
 ],
 "conclusion": "$PB = 9$ cm dan $\\angle AOB = 110^\\circ$."
}
```

### Soal 3

```soal
{
 "title": "Soal 3",
 "text": "$\\angle AOB = 140^\\circ$ dengan $O$ pusat lingkaran. $C$ terletak di busur besar $AB$. Hitung $\\angle ACB$.",
 "steps": [
  {
   "kind": "choice",
   "prompt": "Hubungan $\\angle ACB$ dengan $\\angle AOB$?",
   "options": [
    "$\\angle ACB = \\frac{1}{2}\\angle AOB$",
    "$\\angle ACB = 2\\angle AOB$",
    "$\\angle ACB = 180^\\circ - \\angle AOB$"
   ],
   "answer": "$\\angle ACB = \\frac{1}{2}\\angle AOB$",
   "hint": "Proyektor melihat layar lebih lebar daripada penonton.",
   "explain": "Sudut keliling = setengah sudut pusat.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\angle ACB$ = ?",
   "answer": "70",
   "hint": "140 ÷ 2.",
   "explain": "$70^\\circ$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "$\\angle ACB = 70^\\circ$."
}
```

### Soal 4

```soal
{
 "title": "Soal 4",
 "text": "$AB$ adalah diameter dan $C$ titik pada lingkaran. Jika $\\angle CAB = 28^\\circ$, hitung $\\angle ABC$.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$\\angle ACB$ = ?",
   "answer": "90",
   "hint": "Sudut di setengah lingkaran.",
   "explain": "$90^\\circ$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "$\\angle ABC$ = ?",
   "answer": "62",
   "hint": "Jumlah sudut segitiga $180^\\circ$.",
   "explain": "$180^\\circ - 90^\\circ - 28^\\circ = 62^\\circ$.",
   "error": "salah-hitung-sudut",
   "suffix": "°"
  }
 ],
 "conclusion": "$\\angle ABC = 62^\\circ$."
}
```

### Soal 5

```soal
{
 "title": "Soal 5",
 "text": "Segiempat tali busur $ABCD$ memiliki $\\angle BAD = 4x$ dan $\\angle BCD = 5x$. Hitung $x$ dan kedua sudut itu.",
 "steps": [
  {
   "kind": "number",
   "prompt": "$4x + 5x = 180$. $x$ = ?",
   "answer": "20",
   "hint": "$9x = 180$.",
   "explain": "$x = 20$.",
   "error": "salah-langkah-materi"
  },
  {
   "kind": "number",
   "prompt": "$\\angle BAD$ = ?",
   "answer": "80",
   "hint": "$4 \\times 20$.",
   "explain": "$80^\\circ$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  },
  {
   "kind": "number",
   "prompt": "$\\angle BCD$ = ?",
   "answer": "100",
   "hint": "$5 \\times 20$.",
   "explain": "$100^\\circ$; jumlahnya $180^\\circ$.",
   "error": "salah-langkah-materi",
   "suffix": "°"
  }
 ],
 "conclusion": "$x = 20$, $\\angle BAD = 80^\\circ$, $\\angle BCD = 100^\\circ$."
}
```
