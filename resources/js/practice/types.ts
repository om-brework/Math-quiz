/*
 * Mesin soal bertahap.
 *
 * Setiap soal dipecah menjadi LANGKAH yang dikerjakan berurutan. Siswa menjawab satu langkah,
 * langsung diberi umpan balik, dan baru lanjut setelah langkah itu benar (atau setelah jawaban
 * ditunjukkan). Setiap langkah yang salah dicatat dengan KODE KESALAHAN, dan kode inilah yang
 * dirangkum di laporan orang tua ("di mana anak sering salah").
 *
 * Generator soal hidup di sisi klien (resources/js/practice/generators/<jenjang>/<topik>.ts),
 * memakai RNG berbenih supaya soal bisa direproduksi dari seed yang disimpan di server.
 */

/** Kode kesalahan, harus ada di content/kesalahan.json */
export type ErrorCode = string;

interface StepBase {
    /** id unik di dalam satu soal, misalnya "satuan", "simpan-puluhan" */
    id: string;
    /** instruksi langkah, singkat dan berbentuk perintah: "Jumlahkan angka satuan: 7 + 8" */
    prompt: string;
    /** petunjuk yang muncul setelah jawaban salah pertama */
    hint: string;
    /** penjelasan yang muncul setelah langkah selesai (benar atau ditunjukkan) */
    explain: string;
    /** kode kesalahan yang dicatat kalau langkah ini salah */
    error: ErrorCode;
}

/** Isian angka (boleh negatif/desimal dengan koma). Jawaban dibandingkan setelah dinormalkan. */
export interface NumberStep extends StepBase {
    kind: 'number';
    answer: string;
    /** teks kecil di depan/belakang kotak, misalnya "Rp" atau "cm" */
    prefix?: string;
    suffix?: string;
}

/** Pilihan ganda. `answer` harus salah satu dari `options`. */
export interface ChoiceStep extends StepBase {
    kind: 'choice';
    options: string[];
    answer: string;
    /** kode kesalahan khusus per pilihan salah (misalnya pilihan yang lupa menyimpan) */
    distractorErrors?: Record<string, ErrorCode>;
}

/** Pecahan a/b. Jika `simplest`, jawaban harus dalam bentuk paling sederhana. */
export interface FractionStep extends StepBase {
    kind: 'fraction';
    answer: { whole?: number; num: number; den: number };
    /** izinkan bagian bilangan bulat (pecahan campuran) */
    mixed?: boolean;
    simplest?: boolean;
}

/**
 * Hitung susun (penjumlahan, pengurangan, perkalian dengan 1 angka) di dalam satu widget.
 * Siswa mengisi kotak hasil dari kanan ke kiri, dan kotak simpanan/pinjaman sendiri (tidak otomatis).
 * Widget menilai per kolom dan mengembalikan kode kesalahan yang spesifik:
 *   tambah: lupa-simpan, salah-fakta-tambah, simpan-tidak-perlu
 *   kurang: lupa-pinjam, salah-pinjam, kurang-terbalik, salah-fakta-kurang
 *   kali:   lupa-simpan-kali, salah-fakta-kali
 */
export interface ColumnStep extends Omit<StepBase, 'error'> {
    kind: 'column';
    op: '+' | '-' | '×';
    /** dua bilangan, yang pertama di atas */
    a: number;
    b: number;
    error?: ErrorCode;
}

/** Pembagian bersusun porogapit: siswa mengisi hasil bagi digit demi digit, lalu sisa. */
export interface LongDivisionStep extends Omit<StepBase, 'error'> {
    kind: 'longdiv';
    dividend: number;
    divisor: number;
    error?: ErrorCode;
}

export type Step = NumberStep | ChoiceStep | FractionStep | ColumnStep | LongDivisionStep;

/* ---------- Visual (gambar pendukung soal) ---------- */

export type Visual =
    /** deretan benda yang dihitung, dikelompokkan per `group` kalau ada (untuk perkalian) */
    | { type: 'objects'; item: ObjectName; count: number; group?: number; crossed?: number }
    /** blok basis sepuluh: ratusan, puluhan, satuan */
    | { type: 'base10'; hundreds?: number; tens: number; ones: number; thousands?: number }
    /** garis bilangan dengan lompatan opsional */
    | { type: 'numberLine'; from: number; to: number; step?: number; marks?: number[]; jumps?: { from: number; to: number; label?: string }[]; hide?: number[] }
    /** jam analog */
    | { type: 'clock'; hour: number; minute: number }
    /** pecahan sebagai batang atau lingkaran yang diarsir */
    | { type: 'fraction'; shape: 'bar' | 'circle' | 'rect'; parts: number; shaded: number; wholes?: number }
    /** model batang (bar model) Singapura */
    | { type: 'barModel'; bars: { label: string; units: number; unitValue?: string; known?: string }[]; total?: string; question?: string }
    /** piktogram: baris kategori, tiap gambar mewakili `scale` */
    | { type: 'pictogram'; item: ObjectName; scale: number; rows: { label: string; value: number }[]; title?: string }
    /** diagram batang */
    | { type: 'barChart'; scaleStep: number; max: number; bars: { label: string; value: number }[]; title?: string; unit?: string }
    /** bangun datar */
    | { type: 'shape'; shape: ShapeName; label?: string; color?: string }
    /** beberapa bangun berjajar, untuk pola atau memilih */
    | { type: 'shapes'; items: { shape: ShapeName; color?: string; size?: 'small' | 'big'; rotate?: number }[]; missing?: number }
    /** bangun ruang */
    | { type: 'solid'; solid: SolidName }
    /** penggaris dan benda yang diukur (cm) */
    | { type: 'ruler'; start: number; end: number; item?: ObjectName }
    /** persegi panjang di kertas berpetak, untuk luas dan keliling; `cells` true = arsir petak */
    | { type: 'grid'; width: number; height: number; shade?: { x: number; y: number; w: number; h: number }[]; showDims?: boolean; unit?: string }
    /** persegi panjang berlabel sisi (tidak berpetak) */
    | { type: 'rect'; width: number; height: number; unit: string; hideWidth?: boolean; hideHeight?: boolean }
    /** sudut: dua kaki dari satu titik */
    | { type: 'angle'; degrees: number; showRightMark?: boolean }
    /** dua garis untuk sejajar/tegak lurus/berpotongan */
    | { type: 'lines'; relation: 'parallel' | 'perpendicular' | 'intersecting'; rotate?: number }
    /** uang: koin dan lembaran Rupiah */
    | { type: 'money'; items: number[] }
    /** timbangan atau gelas ukur */
    | { type: 'scale'; kind: 'mass' | 'volume'; value: number; unit: 'kg' | 'g' | 'ℓ' | 'mL'; max: number; step: number }
    /** tabel sederhana */
    | { type: 'table'; head: string[]; rows: string[][] };

export type ObjectName = 'apel' | 'jeruk' | 'kelereng' | 'permen' | 'bintang' | 'buku' | 'pensil' | 'bola' | 'kue' | 'ikan' | 'bunga' | 'mobil';
export type ShapeName = 'persegi' | 'persegi-panjang' | 'segitiga' | 'lingkaran' | 'setengah-lingkaran' | 'seperempat-lingkaran';
export type SolidName = 'kubus' | 'balok' | 'kerucut' | 'tabung' | 'bola';

/* ---------- Soal ---------- */

export interface Question {
    /** topik kurikulum, misalnya "sd3-05-pembagian-bersusun" */
    topic: string;
    /** kode keterampilan di dalam topik, misalnya "bagi-3-angka-sisa" */
    skill: string;
    /** tingkat 1 (dasar), 2 (sedang), 3 (tantangan) */
    level: 1 | 2 | 3;
    /** seed yang dipakai, supaya soal bisa dibuat ulang persis */
    seed: number;
    /** teks soal (boleh berisi LaTeX $...$) */
    text: string;
    visual?: Visual;
    /** langkah-langkah, dikerjakan berurutan. Langkah terakhir = jawaban akhir. */
    steps: Step[];
    /** kalimat penutup setelah semua langkah selesai: "Jadi 75 ÷ 6 = 12 sisa 3." */
    conclusion: string;
}

/** Fungsi pembuat soal. Wajib deterministik terhadap rng. */
export type Generator = (rng: Rng, level: 1 | 2 | 3) => Omit<Question, 'topic' | 'skill' | 'level' | 'seed'>;

export interface SkillDef {
    code: string;
    /** nama keterampilan untuk siswa dan laporan: "Membagi 3 angka dengan sisa" */
    name: string;
    gen: Generator;
}

export interface TopicDef {
    topic: string;
    skills: SkillDef[];
}

export interface Rng {
    /** bilangan bulat a..b inklusif */
    int(a: number, b: number): number;
    pick<T>(list: readonly T[]): T;
    shuffle<T>(list: readonly T[]): T[];
    /** true dengan peluang p */
    chance(p: number): boolean;
}

/* ---------- Hasil yang dikirim ke server ---------- */

export interface StepResult {
    id: string;
    /** benar pada percobaan pertama */
    ok: boolean;
    tries: number;
    /** jawaban ditunjukkan karena terlalu banyak salah */
    revealed: boolean;
    /** kode kesalahan yang terjadi (bisa lebih dari satu untuk widget susun) */
    errors: ErrorCode[];
    /** jawaban pertama siswa, untuk ditampilkan di laporan */
    given?: string;
}

export interface QuestionResult {
    topic: string;
    skill: string;
    level: number;
    seed: number;
    text: string;
    correct: boolean;
    steps: StepResult[];
    hintsUsed: number;
    durationMs: number;
}
