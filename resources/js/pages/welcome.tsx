import AppLogo from '@/components/app-logo';
import { periode, rupiah } from '@/lib/format';
import { cn } from '@/lib/utils';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowRight, BookOpenText, Check, ClipboardList, Footprints, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';

interface Plan {
    id: number;
    name: string;
    description: string | null;
    price: number;
    period_months: number;
    max_students: number;
    features: string[] | null;
}

interface Props {
    plans: Plan[];
    topicCount: number;
}

export default function Welcome({ plans, topicCount }: Props) {
    const { auth } = usePage<SharedData>().props;
    const bestId = plans.length > 1 ? plans.reduce((a, b) => (b.price / b.period_months < a.price / a.period_months ? b : a)).id : null;

    return (
        <>
            <Head title="Belajar matematika selangkah demi selangkah">
                <meta
                    name="description"
                    content="Langkah: latihan matematika kurikulum Singapura (MOE) untuk SD–SMA. Tiap soal dipecah jadi langkah kecil, dengan laporan kesalahan untuk orang tua. Coba gratis 7 hari."
                />
            </Head>
            <div className="min-h-screen text-[#1A1F36] dark:bg-zinc-950 dark:text-zinc-100">
                {/* Header */}
                <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/85 backdrop-blur dark:border-white/10 dark:bg-zinc-950/85">
                    <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
                        <Link href="/" className="flex items-center" aria-label="Langkah, ke beranda">
                            <AppLogo />
                        </Link>
                        <nav className="ml-auto flex items-center gap-1 text-sm font-semibold sm:gap-2">
                            {auth.user ? (
                                <Link href={route('dashboard')} className="bg-brand-600 hover:bg-brand-700 rounded-full px-4 py-2 text-white">
                                    Ke dasbor
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="hidden rounded-full px-3 py-2 hover:bg-slate-900/5 sm:inline-block dark:hover:bg-white/5"
                                    >
                                        Masuk orang tua
                                    </Link>
                                    <Link href="/masuk-siswa" className="rounded-full px-3 py-2 hover:bg-slate-900/5 dark:hover:bg-white/5">
                                        Masuk siswa
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="bg-brand-600 hover:bg-brand-700 rounded-full px-4 py-2 whitespace-nowrap text-white shadow-sm"
                                    >
                                        Daftar gratis
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                <main>
                    {/* Hero */}
                    <section className="relative overflow-hidden">
                        <Stairs className="text-brand-100 dark:text-brand-700/20 pointer-events-none absolute -right-24 -bottom-10 hidden h-[420px] w-auto lg:block" />
                        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-12 pb-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:pt-20 lg:pb-24">
                            <div>
                                <p className="text-brand-700 dark:text-brand-100 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold ring-1 ring-slate-200 dark:bg-white/5 dark:ring-white/10">
                                    <span className="bg-sun-400 size-2 rounded-full" /> Kurikulum Singapura (MOE) · SD sampai SMA
                                </p>
                                <h1 className="font-display mt-5 text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                                    Belajar matematika selangkah demi selangkah
                                </h1>
                                <p className="mt-5 max-w-xl text-lg text-zinc-700 dark:text-zinc-300">
                                    Anak memahami konsep lewat analogi sehari-hari, lalu berlatih soal yang dipecah menjadi langkah-langkah kecil.
                                    Anda menerima laporan yang jelas: di mana anak sering keliru, dan apa yang bisa dibantu di rumah.
                                </p>
                                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                                    <Link
                                        href={route('register')}
                                        className="bg-brand-600 hover:bg-brand-700 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold text-white shadow-md transition"
                                    >
                                        Coba gratis 7 hari
                                    </Link>
                                    <span className="text-sm text-zinc-600 dark:text-zinc-400">Tanpa kartu kredit · tidak diperpanjang otomatis</span>
                                </div>
                            </div>
                            <ColumnAddition />
                        </div>
                    </section>

                    {/* Cara kerja */}
                    <section className="border-y border-slate-200 bg-white dark:border-white/10 dark:bg-zinc-900/40" aria-labelledby="cara-kerja">
                        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
                            <h2 id="cara-kerja" className="font-display max-w-2xl text-3xl font-bold sm:text-4xl">
                                Tiga langkah yang saling menyambung
                            </h2>
                            <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
                                Bukan sekadar bank soal. Setiap bagian dirancang supaya anak paham, bukan menghafal.
                            </p>
                            <ol className="mt-10 grid gap-6 md:grid-cols-3">
                                {STEPS.map((s, i) => (
                                    <li
                                        key={s.title}
                                        className="relative rounded-3xl bg-white p-6 ring-1 ring-slate-200 dark:bg-zinc-900 dark:ring-white/10"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="font-display bg-brand-600 flex size-10 items-center justify-center rounded-2xl text-lg font-bold text-white">
                                                {i + 1}
                                            </span>
                                            <s.icon className="text-brand-600 dark:text-brand-500 size-6" />
                                        </div>
                                        <h3 className="font-display mt-4 text-xl font-bold">{s.title}</h3>
                                        <p className="mt-2 text-zinc-700 dark:text-zinc-300">{s.body}</p>
                                        <p className="mt-4 rounded-xl bg-white p-3 text-sm text-zinc-600 ring-1 ring-slate-200 dark:bg-zinc-950 dark:text-zinc-400 dark:ring-white/10">
                                            {s.example}
                                        </p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </section>

                    {/* Kurikulum */}
                    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20" aria-labelledby="kurikulum">
                        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
                            <div>
                                <h2 id="kurikulum" className="font-display text-3xl font-bold sm:text-4xl">
                                    Mengikuti kurikulum matematika Singapura
                                </h2>
                                <p className="mt-3 text-zinc-700 dark:text-zinc-300">
                                    Urutan materi disusun mengikuti silabus Kementerian Pendidikan Singapura (MOE) yang terkenal dengan pendekatan
                                    konkret → gambar → abstrak, dan dijelaskan dalam Bahasa Indonesia.
                                </p>
                                <p className="font-display text-brand-600 dark:text-brand-500 mt-6 text-5xl font-extrabold">{topicCount}</p>
                                <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">topik materi tersedia</p>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-3">
                                {LEVELS.map((l) => (
                                    <div key={l.name} className={cn('rounded-3xl p-5 ring-1', l.className)}>
                                        <p className="font-display text-2xl font-bold">{l.name}</p>
                                        <p className="text-sm font-semibold opacity-80">{l.range}</p>
                                        <ul className="mt-4 space-y-1.5 text-sm">
                                            {l.items.map((it) => (
                                                <li key={it} className="flex gap-2">
                                                    <Check className="mt-0.5 size-4 shrink-0" /> {it}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="mt-4 rounded-xl bg-white/70 px-3 py-1.5 text-xs font-bold dark:bg-black/20">{l.status}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Harga */}
                    {plans.length > 0 && (
                        <section className="bg-brand-700 text-white dark:bg-brand-950" aria-labelledby="harga">
                            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
                                <h2 id="harga" className="font-display text-3xl font-bold sm:text-4xl">
                                    Satu langganan untuk seluruh keluarga
                                </h2>
                                <p className="mt-2 max-w-2xl text-white/80">
                                    Mulai dengan 7 hari gratis. Setelah itu pilih paket — semua materi dan laporan terbuka di setiap paket.
                                </p>
                                <div className="mt-10 grid gap-5 md:grid-cols-3">
                                    {plans.map((p) => {
                                        const best = p.id === bestId;
                                        return (
                                            <div
                                                key={p.id}
                                                className={cn(
                                                    'relative flex flex-col rounded-3xl p-6',
                                                    best ? 'bg-white text-zinc-900 shadow-2xl md:-translate-y-3' : 'bg-white/10 ring-1 ring-white/20',
                                                )}
                                            >
                                                {best && (
                                                    <span className="bg-sun-400 absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full px-3 py-0.5 text-xs font-bold text-amber-950">
                                                        <Sparkles className="size-3" /> Paling hemat
                                                    </span>
                                                )}
                                                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                                                {p.description && (
                                                    <p className={cn('text-sm', best ? 'text-zinc-600' : 'text-white/75')}>{p.description}</p>
                                                )}
                                                <p className="font-display mt-5 text-4xl font-bold">{rupiah(p.price)}</p>
                                                <p className={cn('text-sm', best ? 'text-zinc-600' : 'text-white/75')}>
                                                    per {periode(p.period_months)}
                                                    {p.period_months > 1 && ` · ${rupiah(Math.round(p.price / p.period_months))}/bulan`}
                                                </p>
                                                <ul className="mt-5 flex-1 space-y-2 text-sm">
                                                    <li className="flex gap-2">
                                                        <Check className={cn('mt-0.5 size-4 shrink-0', best ? 'text-brand-600' : 'text-sun-300')} />{' '}
                                                        Sampai {p.max_students} anak
                                                    </li>
                                                    {(p.features ?? [])
                                                        .filter((f) => !/^sampai \d+ anak$/i.test(f))
                                                        .map((f) => (
                                                            <li key={f} className="flex gap-2">
                                                                <Check
                                                                    className={cn('mt-0.5 size-4 shrink-0', best ? 'text-brand-600' : 'text-sun-300')}
                                                                />{' '}
                                                                {f}
                                                            </li>
                                                        ))}
                                                </ul>
                                                <Link
                                                    href={route('register')}
                                                    className={cn(
                                                        'mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold transition',
                                                        best
                                                            ? 'bg-brand-600 hover:bg-brand-700 text-white'
                                                            : 'text-brand-700 bg-white hover:bg-white/90',
                                                    )}
                                                >
                                                    Mulai gratis
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </div>
                                <p className="mt-6 flex items-center gap-2 text-sm text-white/80">
                                    <ShieldCheck className="size-4" /> Bayar lewat QRIS, e-wallet, virtual account bank, atau kartu. Tidak ada tagihan
                                    otomatis.
                                </p>
                            </div>
                        </section>
                    )}

                    {/* FAQ */}
                    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20" aria-labelledby="faq">
                        <h2 id="faq" className="font-display text-3xl font-bold sm:text-4xl">
                            Pertanyaan orang tua
                        </h2>
                        <div className="mt-8 divide-y divide-amber-900/10 rounded-3xl bg-white ring-1 ring-slate-200 dark:divide-white/10 dark:bg-zinc-900 dark:ring-white/10">
                            {FAQ.map((f) => (
                                <details key={f.q} className="group p-5">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                                        {f.q}
                                        <span className="text-brand-600 dark:text-brand-500 font-display text-2xl leading-none transition group-open:rotate-45">
                                            +
                                        </span>
                                    </summary>
                                    <p className="mt-3 text-zinc-700 dark:text-zinc-300">{f.a}</p>
                                </details>
                            ))}
                        </div>
                        <div className="mt-12 flex flex-col items-center gap-3 text-center">
                            <p className="font-display text-2xl font-bold">Siap mencoba langkah pertama?</p>
                            <Link
                                href={route('register')}
                                className="bg-brand-600 hover:bg-brand-700 inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-white shadow-md"
                            >
                                Daftar gratis <ArrowRight className="size-4" />
                            </Link>
                        </div>
                    </section>
                </main>

                <footer className="border-t border-slate-200 dark:border-white/10">
                    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:px-6 dark:text-zinc-400">
                        <div className="flex items-center">
                            <AppLogo />
                        </div>
                        <p className="sm:ml-4">Latihan matematika bertahap untuk anak Indonesia.</p>
                        <nav className="flex gap-4 sm:ml-auto">
                            <Link href={route('login')} className="hover:text-zinc-900 dark:hover:text-white">
                                Masuk orang tua
                            </Link>
                            <Link href="/masuk-siswa" className="hover:text-zinc-900 dark:hover:text-white">
                                Masuk siswa
                            </Link>
                        </nav>
                        <p className="sm:hidden">© {new Date().getFullYear()} Langkah</p>
                    </div>
                </footer>
            </div>
        </>
    );
}

const STEPS = [
    {
        icon: BookOpenText,
        title: 'Materi dengan analogi',
        body: 'Setiap topik dibuka dengan cerita yang dekat dengan anak — membagi kue, menabung uang jajan, menimbang buah — sebelum masuk ke angka.',
        example: 'Pecahan ½ = setengah martabak. ¼ = martabak yang dipotong jadi empat, ambil satu.',
    },
    {
        icon: Footprints,
        title: 'Latihan bertahap',
        body: 'Soal dipecah menjadi langkah. Anak mengisi satu kotak dalam satu waktu, dan langsung tahu langkah mana yang keliru.',
        example: 'Hitung susun: satuan dulu, 7 + 8 = 15. Tulis 5, angka 1 masuk kotak simpanan di atas puluhan.',
    },
    {
        icon: ClipboardList,
        title: 'Laporan untuk orang tua',
        body: 'Anda melihat kesalahan yang sering terjadi, contoh soalnya, dan saran singkat yang bisa dilakukan di rumah.',
        example: '"Lupa menambahkan simpanan" terjadi 6×. Saran: minta anak menulis angka simpanan dengan warna lain.',
    },
];

const LEVELS = [
    {
        name: 'SD',
        range: 'Kelas 1–6',
        items: ['Bilangan & nilai tempat', 'Hitung bersusun & porogapit', 'Pecahan, desimal, persen', 'Pengukuran & bangun datar'],
        status: 'Latihan interaktif kelas 1–3 sudah tersedia',
        className: 'bg-brand-50 text-brand-700 ring-brand-500/20 dark:bg-brand-700/20 dark:text-brand-100',
    },
    {
        name: 'SMP',
        range: 'Kelas 7–9',
        items: ['FPB, KPK, bilangan bulat', 'Aljabar & persamaan', 'Fungsi & grafik', 'Trigonometri & lingkaran'],
        status: 'Materi tersedia · latihan menyusul',
        className: 'bg-amber-50 text-amber-900 ring-amber-500/20 dark:bg-amber-400/10 dark:text-amber-100',
    },
    {
        name: 'SMA',
        range: 'Kelas 10–12',
        items: ['Matriks & vektor', 'Turunan & integral', 'Bilangan kompleks', 'Peluang & distribusi'],
        status: 'Materi tersedia · latihan menyusul',
        className: 'bg-sky-50 text-sky-900 ring-sky-500/20 dark:bg-sky-400/10 dark:text-sky-100',
    },
];

const FAQ = [
    {
        q: 'Apa itu kurikulum matematika Singapura?',
        a: 'Silabus dari Kementerian Pendidikan Singapura (MOE) yang dikenal dengan pendekatan konkret → gambar → abstrak dan model batang (bar model). Fokusnya pemahaman konsep, bukan hafalan rumus. Materi di Langkah tetap relevan untuk pelajaran di sekolah Indonesia.',
    },
    {
        q: 'Untuk usia berapa?',
        a: 'Materi mencakup SD kelas 1 sampai SMA kelas 12. Latihan interaktif bertahap saat ini tersedia untuk SD kelas 1–3, jenjang lain menyusul secara bertahap.',
    },
    {
        q: 'Bagaimana anak masuk? Apakah perlu email?',
        a: 'Tidak perlu. Orang tua membuat akun anak dengan username dan PIN 4–6 angka. Anak masuk lewat halaman "Masuk siswa".',
    },
    {
        q: 'Berapa anak yang bisa memakai satu langganan?',
        a: 'Tergantung paket — lihat bagian harga di atas. Setiap anak punya akun, kemajuan, dan laporannya sendiri.',
    },
    {
        q: 'Apakah langganan diperpanjang otomatis?',
        a: 'Tidak. Tidak ada tagihan otomatis. Saat masa paket habis, Anda cukup membayar lagi; masa baru ditambahkan setelah masa sekarang berakhir.',
    },
    {
        q: 'Bagaimana cara membayar?',
        a: 'Pembayaran diproses Midtrans: QRIS, e-wallet (GoPay, ShopeePay), virtual account bank, atau kartu kredit/debit.',
    },
];

/** Ilustrasi hitung susun 47 + 38 dengan kotak simpanan. */
function ColumnAddition() {
    const cell = 'font-display flex h-14 w-12 items-center justify-center text-4xl font-bold sm:h-16 sm:w-14 sm:text-5xl';
    return (
        <div
            className="relative mx-auto w-full max-w-md"
            aria-label="Contoh soal: 47 tambah 38 dengan hitung susun, satuan 7 tambah 8 sama dengan 15, tulis 5 simpan 1."
            role="img"
        >
            <div className="bg-sun-300/50 dark:bg-sun-400/10 absolute -inset-3 -rotate-2 rounded-[2rem]" aria-hidden />
            <div className="relative rounded-[1.75rem] bg-white p-5 shadow-xl ring-1 ring-slate-200 sm:p-7 dark:bg-zinc-900 dark:ring-white/10">
                <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-brand-700 dark:text-brand-100 bg-brand-50 dark:bg-brand-700/30 rounded-full px-2.5 py-1">
                        Langkah 2 dari 3
                    </span>
                    <span className="text-zinc-500">Penjumlahan bersusun</span>
                </div>
                <div className="mt-2 flex gap-1" aria-hidden>
                    <span className="bg-brand-500 h-1.5 flex-1 rounded-full" />
                    <span className="bg-brand-500 h-1.5 flex-1 rounded-full" />
                    <span className="h-1.5 flex-1 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                </div>

                <div className="mt-6 flex justify-center" aria-hidden>
                    <div className="grid grid-cols-[2.5rem_auto_auto] items-center">
                        {/* kotak simpanan */}
                        <span />
                        <div className="flex h-12 w-12 items-center justify-center sm:w-14">
                            <span className="border-sun-400 bg-sun-300/30 font-display flex size-9 items-center justify-center rounded-lg border-2 border-dashed text-xl font-bold text-amber-700 dark:text-amber-300">
                                1
                            </span>
                        </div>
                        <span />
                        {/* 47 */}
                        <span />
                        <span className={cell}>4</span>
                        <span className={cell}>7</span>
                        {/* + 38 */}
                        <span className="font-display text-center text-3xl font-bold text-zinc-400">+</span>
                        <span className={cell}>3</span>
                        <span className={cell}>8</span>
                        {/* garis */}
                        <span className="col-span-3 my-1 h-1 rounded-full bg-zinc-800 dark:bg-zinc-200" />
                        {/* hasil */}
                        <span />
                        <span
                            className={cn(
                                cell,
                                'rounded-xl border-2 border-dashed border-zinc-300 text-zinc-300 dark:border-zinc-600 dark:text-zinc-600',
                            )}
                        >
                            ?
                        </span>
                        <span
                            className={cn(
                                cell,
                                'bg-brand-50 text-brand-700 ring-brand-500 dark:bg-brand-700/30 dark:text-brand-100 rounded-xl ring-2',
                            )}
                        >
                            5
                        </span>
                    </div>
                </div>

                <div className="mt-6 rounded-2xl bg-white p-4 text-sm ring-1 ring-slate-200 dark:bg-zinc-950 dark:ring-white/10">
                    <p className="font-bold">Satuan: 7 + 8 = 15</p>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                        Tulis <b className="text-brand-700 dark:text-brand-100">5</b> di kolom satuan, lalu simpan{' '}
                        <b className="text-amber-700 dark:text-amber-300">1</b> di kotak atas kolom puluhan.
                    </p>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    <HeartHandshake className="size-4" /> Benar! Sekarang jumlahkan puluhan: 1 + 4 + 3.
                </div>
            </div>
        </div>
    );
}

function Stairs({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 400 400" fill="currentColor" className={className} aria-hidden>
            <rect x="0" y="260" width="120" height="140" rx="24" />
            <rect x="140" y="160" width="120" height="240" rx="24" />
            <rect x="280" y="40" width="120" height="360" rx="24" />
        </svg>
    );
}
