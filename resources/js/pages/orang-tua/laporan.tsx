import { AvatarAnak } from '@/components/avatar-anak';
import { MasteryBar } from '@/components/ortu-ui';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { tanggal } from '@/lib/format';
import { cn } from '@/lib/utils';
import { MathText } from '@/practice/MathText';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { ArrowRight, Award, BookOpen, CalendarCheck, ChevronDown, Clock, Flame, Home, Lightbulb, Printer, Target, TriangleAlert } from 'lucide-react';
import { useState } from 'react';

interface ErrorItem {
    code: string;
    count: number;
    name: string;
    category: string;
    explanation: string | null;
    advice: string | null;
    topics: { id: string; title: string }[];
    example: { question: string | null; given: string | null; skill: string };
}

interface Skill {
    code: string;
    name: string;
    mastery: number;
    level: number;
    attempts: number;
}

interface TopicRow {
    id: string;
    title: string;
    grade: string | null;
    mastery: number;
    questions: number;
    recentAccuracy: number | null;
    lastPracticed: string | null;
    skills: Skill[];
}

interface Report {
    periodDays: number;
    summary: { questions: number; accuracy: number | null; minutes: number; activeDays: number; sessions: number; streak: number };
    daily: { date: string; questions: number; correct: number }[];
    errors: ErrorItem[];
    topics: TopicRow[];
    weak: { topic: string; topicTitle: string; skill: string; mastery: number; level: number }[];
    strong: { topicTitle: string; skill: string; mastery: number }[];
    recommendations: { title: string; body: string; topic?: string | null }[];
}

interface Props {
    student: { id: number; name: string; grade: string; gradeName: string; avatar: string };
    report: Report;
}

const PERIODS = [7, 30, 90] as const;

/** Buka mode belajar anak lalu langsung ke halaman materi topik. */
function openTopic(studentId: number, topic: string) {
    router.post(route('students.switch', studentId), {}, { onSuccess: () => router.visit(route('siswa.topic', topic)) });
}

export default function Laporan({ student, report }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Beranda', href: '/orang-tua' },
        { title: `Laporan ${student.name}`, href: route('students.report', student.id) },
    ];
    const s = report.summary;
    const empty = s.questions === 0 && report.topics.length === 0;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Laporan ${student.name}`} />
            <style>{`@media print {
                .group.peer[data-variant], [data-sidebar="sidebar"], main > header, nav { display: none !important; }
                main { margin: 0 !important; box-shadow: none !important; border: 0 !important; }
                body { background: #fff !important; }
                .laporan section { break-inside: avoid; }
            }`}</style>

            <div className="laporan mx-auto flex w-full max-w-5xl flex-col gap-8 p-4 md:p-6 print:max-w-none print:p-0">
                {/* Kepala laporan */}
                <header className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex flex-1 items-center gap-4">
                        <AvatarAnak name={student.avatar} className="size-16" />
                        <div>
                            <p className="text-muted-foreground text-sm">Laporan belajar · {student.gradeName}</p>
                            <h1 className="font-display text-3xl leading-tight font-bold">{student.name}</h1>
                            <p className="text-muted-foreground text-xs">
                                {report.periodDays} hari terakhir, dicetak {tanggal(new Date())}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 print:hidden">
                        <div role="tablist" aria-label="Periode laporan" className="bg-muted inline-flex rounded-lg p-1">
                            {PERIODS.map((p) => (
                                <Link
                                    key={p}
                                    href={route('students.report', { student: student.id, hari: p })}
                                    preserveScroll
                                    role="tab"
                                    aria-selected={report.periodDays === p}
                                    className={cn(
                                        'rounded-md px-3 py-1.5 text-sm font-semibold transition',
                                        report.periodDays === p
                                            ? 'bg-background text-foreground shadow-sm'
                                            : 'text-muted-foreground hover:text-foreground',
                                    )}
                                >
                                    {p} hari
                                </Link>
                            ))}
                        </div>
                        <Button variant="outline" size="icon" onClick={() => window.print()} aria-label="Cetak laporan">
                            <Printer className="size-4" />
                        </Button>
                    </div>
                </header>

                {empty ? (
                    <EmptyState student={student} report={report} />
                ) : (
                    <>
                        <Summary s={s} days={report.periodDays} />
                        <Recommendations report={report} studentId={student.id} />
                        <Errors errors={report.errors} name={student.name} />
                        <Activity daily={report.daily} />
                        <Topics topics={report.topics} />
                    </>
                )}
            </div>
        </AppLayout>
    );
}

function SectionTitle({ icon: Icon, title, hint }: { icon: typeof Target; title: string; hint?: string }) {
    return (
        <div className="mb-3">
            <h2 className="font-display flex items-center gap-2 text-xl font-bold">
                <Icon className="text-primary dark:text-brand-500 size-5" /> {title}
            </h2>
            {hint && <p className="text-muted-foreground text-sm">{hint}</p>}
        </div>
    );
}

function Summary({ s, days }: { s: Report['summary']; days: number }) {
    const items = [
        { icon: Target, label: 'Soal dikerjakan', value: String(s.questions), note: `${s.sessions} sesi latihan` },
        {
            icon: Award,
            label: 'Akurasi',
            value: s.accuracy === null ? '—' : `${s.accuracy}%`,
            note: s.accuracy === null ? '' : s.accuracy >= 80 ? 'Sangat baik' : s.accuracy >= 60 ? 'Cukup, terus berlatih' : 'Perlu pendampingan',
            tone:
                s.accuracy === null
                    ? ''
                    : s.accuracy >= 80
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : s.accuracy < 60
                        ? 'text-amber-600 dark:text-amber-400'
                        : '',
        },
        {
            icon: Clock,
            label: 'Menit belajar',
            value: String(s.minutes),
            note: s.activeDays ? `± ${Math.round(s.minutes / s.activeDays)} menit per hari aktif` : '',
        },
        { icon: CalendarCheck, label: 'Hari aktif', value: `${s.activeDays}`, note: `dari ${days} hari` },
        { icon: Flame, label: 'Beruntun', value: `${s.streak} hari`, note: s.streak >= 3 ? 'Pertahankan!' : 'Latihan tiap hari menambah beruntun' },
    ];
    return (
        <section aria-labelledby="ringkasan">
            <h2 id="ringkasan" className="sr-only">
                Ringkasan
            </h2>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
                {items.map((it, i) => (
                    <div key={it.label} className={cn('bg-card rounded-2xl border p-4', i === 4 && 'col-span-2 md:col-span-1')}>
                        <p className="text-muted-foreground flex items-center gap-1.5 text-xs font-semibold">
                            <it.icon className="size-3.5" /> {it.label}
                        </p>
                        <p className={cn('font-display mt-1 text-3xl leading-none font-bold', it.tone)}>{it.value}</p>
                        {it.note && <p className="text-muted-foreground mt-1 text-xs">{it.note}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
}

function Recommendations({ report, studentId }: { report: Report; studentId: number }) {
    if (!report.recommendations.length && !report.strong.length) return null;
    return (
        <section>
            <SectionTitle
                icon={Lightbulb}
                title="Yang perlu ditingkatkan"
                hint="Saran yang bisa langsung Anda lakukan bersama anak, urut dari yang paling berdampak."
            />
            <ol className="grid gap-3 md:grid-cols-2">
                {report.recommendations.map((r, i) => (
                    <li
                        key={i}
                        className="bg-sun-300/15 flex gap-3 rounded-2xl border border-amber-200 p-4 dark:border-amber-900/60 dark:bg-amber-950/20"
                    >
                        <span className="font-display flex size-7 shrink-0 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-amber-950">
                            {i + 1}
                        </span>
                        <div className="min-w-0 space-y-1">
                            <h3 className="font-semibold">{r.title}</h3>
                            <p className="text-sm text-zinc-700 dark:text-zinc-300">{r.body}</p>
                            {r.topic && (
                                <button
                                    type="button"
                                    onClick={() => openTopic(studentId, r.topic!)}
                                    className="text-primary dark:text-brand-500 inline-flex items-center gap-1 text-sm font-semibold hover:underline print:hidden"
                                >
                                    Buka materinya <ArrowRight className="size-3.5" />
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
            {report.strong.length > 0 && (
                <div className="mt-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm dark:border-emerald-900/60 dark:bg-emerald-950/30">
                    <p className="font-semibold text-emerald-900 dark:text-emerald-200">Sudah dikuasai dengan baik — beri pujian!</p>
                    <ul className="mt-1 flex flex-wrap gap-2">
                        {report.strong.map((st, i) => (
                            <li
                                key={i}
                                className="rounded-full bg-white px-2.5 py-1 text-xs text-emerald-800 ring-1 ring-emerald-200 dark:bg-emerald-950 dark:text-emerald-200 dark:ring-emerald-800"
                            >
                                {st.skill} <span className="text-emerald-600 dark:text-emerald-400">· {st.mastery}%</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
}

function Errors({ errors, name }: { errors: ErrorItem[]; name: string }) {
    const [all, setAll] = useState(false);
    const LIMIT = 3;
    return (
        <section>
            <SectionTitle
                icon={TriangleAlert}
                title="Kesalahan yang sering terjadi"
                hint={`Pola kesalahan ${name} yang terdeteksi saat mengerjakan langkah-langkah soal.`}
            />
            {errors.length === 0 ? (
                <p className="bg-card text-muted-foreground rounded-2xl border p-4 text-sm">
                    Belum ada pola kesalahan yang berulang pada periode ini. Bagus!
                </p>
            ) : (
                <div className="space-y-3">
                    {errors.map((e, i) => (
                        <article
                            key={e.code}
                            className={cn('bg-card overflow-hidden rounded-2xl border', !all && i >= LIMIT && 'hidden print:block')}
                        >
                            <div className="flex flex-wrap items-start gap-3 border-b p-4">
                                <div className="min-w-0 flex-1">
                                    <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">{e.category}</p>
                                    <h3 className="font-display text-lg leading-snug font-bold">{e.name}</h3>
                                </div>
                                <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-bold whitespace-nowrap text-red-800 dark:bg-red-950 dark:text-red-200">
                                    {e.count}× terjadi
                                </span>
                            </div>
                            <div className="grid gap-4 p-4 md:grid-cols-2">
                                <div className="space-y-3 text-sm">
                                    {e.explanation && (
                                        <div>
                                            <h4 className="font-semibold">Artinya</h4>
                                            <p className="text-zinc-700 dark:text-zinc-300">{e.explanation}</p>
                                        </div>
                                    )}
                                    {e.advice && (
                                        <div className="bg-brand-50 dark:bg-brand-700/15 rounded-xl p-3">
                                            <h4 className="text-brand-700 dark:text-brand-100 flex items-center gap-1.5 font-semibold">
                                                <Home className="size-4" /> Yang bisa dilakukan di rumah
                                            </h4>
                                            <p className="text-zinc-800 dark:text-zinc-200">{e.advice}</p>
                                        </div>
                                    )}
                                    {e.topics.length > 0 && (
                                        <p className="text-muted-foreground text-xs">
                                            Muncul di: <span className="text-foreground font-medium">{e.topics.map((t) => t.title).join(', ')}</span>
                                        </p>
                                    )}
                                </div>
                                <div className="rounded-xl border border-dashed p-3 text-sm">
                                    <h4 className="text-muted-foreground mb-2 text-xs font-semibold tracking-wide uppercase">Contoh terakhir</h4>
                                    {e.example.question ? (
                                        <MathText className="block text-base">{e.example.question}</MathText>
                                    ) : (
                                        <p className="text-muted-foreground italic">Teks soal tidak tersimpan.</p>
                                    )}
                                    <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
                                        <dt className="text-muted-foreground">Jawaban anak</dt>
                                        <dd className="font-mono font-semibold text-red-700 dark:text-red-300">{e.example.given ?? '—'}</dd>
                                        <dt className="text-muted-foreground">Keterampilan</dt>
                                        <dd>{e.example.skill}</dd>
                                    </dl>
                                </div>
                            </div>
                        </article>
                    ))}
                    {errors.length > LIMIT && (
                        <Button variant="outline" className="w-full print:hidden" onClick={() => setAll((a) => !a)}>
                            {all ? 'Tampilkan lebih sedikit' : `Tampilkan ${errors.length - LIMIT} kesalahan lainnya`}
                            <ChevronDown className={cn('size-4 transition', all && 'rotate-180')} />
                        </Button>
                    )}
                </div>
            )}
        </section>
    );
}

const HARI = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

function Activity({ daily }: { daily: Report['daily'] }) {
    const max = Math.max(5, ...daily.map((d) => d.questions));
    const total = daily.reduce((a, d) => a + d.questions, 0);
    return (
        <section>
            <SectionTitle
                icon={CalendarCheck}
                title="Aktivitas 14 hari terakhir"
                hint={`${total} soal dalam 14 hari. Hijau = dijawab benar, kuning = belum tepat.`}
            />
            <div className="bg-card rounded-2xl border p-4">
                <div className="flex h-44 items-end gap-1 sm:gap-2" role="img" aria-label="Grafik jumlah soal per hari">
                    {daily.map((d) => {
                        const date = new Date(`${d.date}T00:00:00`);
                        const h = (d.questions / max) * 100;
                        const c = (d.correct / max) * 100;
                        return (
                            <div
                                key={d.date}
                                className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-1"
                                title={`${tanggal(d.date)}: ${d.questions} soal, ${d.correct} benar`}
                            >
                                <span
                                    className={cn('text-[10px] font-semibold tabular-nums sm:text-xs', d.questions ? '' : 'text-muted-foreground/50')}
                                >
                                    {d.questions || ''}
                                </span>
                                <svg viewBox="0 0 10 100" preserveAspectRatio="none" className="w-full max-w-8 flex-1" aria-hidden>
                                    {d.questions === 0 ? (
                                        <rect x="0" y="98" width="10" height="2" className="fill-zinc-200 dark:fill-zinc-800" />
                                    ) : (
                                        <>
                                            <rect
                                                x="0"
                                                y={100 - h}
                                                width="10"
                                                height={h}
                                                rx="1.5"
                                                className="fill-amber-300 dark:fill-amber-500/60"
                                            />
                                            <rect x="0" y={100 - c} width="10" height={c} rx="1.5" className="fill-brand-500" />
                                        </>
                                    )}
                                </svg>
                                <span className="text-muted-foreground text-[10px] leading-tight sm:text-xs">{date.getDate()}</span>
                                <span className="text-muted-foreground hidden text-[10px] leading-none sm:block">{HARI[date.getDay()]}</span>
                            </div>
                        );
                    })}
                </div>
                <div className="text-muted-foreground mt-3 flex gap-4 text-xs">
                    <span className="flex items-center gap-1.5">
                        <span className="bg-brand-500 size-3 rounded-sm" /> Benar
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="size-3 rounded-sm bg-amber-300 dark:bg-amber-500/60" /> Belum tepat
                    </span>
                </div>
            </div>
        </section>
    );
}

function Topics({ topics }: { topics: TopicRow[] }) {
    const [open, setOpen] = useState<Record<string, boolean>>({});
    return (
        <section>
            <SectionTitle
                icon={BookOpen}
                title="Penguasaan per topik"
                hint="Tekan topik untuk melihat tiap keterampilan. Di bawah 60% perlu diulang, 80% ke atas sudah kuat."
            />
            {topics.length === 0 ? (
                <p className="bg-card text-muted-foreground rounded-2xl border p-4 text-sm">Belum ada topik yang dilatih.</p>
            ) : (
                <ul className="bg-card divide-y overflow-hidden rounded-2xl border">
                    {topics.map((t) => {
                        const isOpen = !!open[t.id];
                        const weak = t.mastery < 60;
                        const strong = t.mastery >= 80;
                        return (
                            <li key={t.id} className={cn(weak && 'bg-amber-50/60 dark:bg-amber-950/15')}>
                                <button
                                    type="button"
                                    onClick={() => setOpen((o) => ({ ...o, [t.id]: !o[t.id] }))}
                                    aria-expanded={isOpen}
                                    className="hover:bg-muted/60 flex w-full items-center gap-3 p-4 text-left"
                                >
                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="font-semibold">{t.title}</span>
                                            {weak && (
                                                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-800 dark:bg-amber-900/50 dark:text-amber-200">
                                                    Perlu diulang
                                                </span>
                                            )}
                                            {strong && (
                                                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200">
                                                    Kuat
                                                </span>
                                            )}
                                        </div>
                                        <div className="mt-2 flex items-center gap-3">
                                            <MasteryBar value={t.mastery} className="max-w-xs" />
                                            <span className="font-display w-11 text-right text-sm font-bold tabular-nums">{t.mastery}%</span>
                                        </div>
                                        <p className="text-muted-foreground mt-1 text-xs">
                                            {t.questions} soal total
                                            {t.recentAccuracy !== null && ` · ${t.recentAccuracy}% benar di periode ini`}
                                            {t.lastPracticed && ` · terakhir ${tanggal(t.lastPracticed)}`}
                                        </p>
                                    </div>
                                    <ChevronDown
                                        className={cn('text-muted-foreground size-5 shrink-0 transition print:hidden', isOpen && 'rotate-180')}
                                    />
                                </button>
                                <div className={cn('px-4 pb-4', !isOpen && 'hidden print:block')}>
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="text-muted-foreground text-left text-xs">
                                                <th className="py-1 font-semibold">Keterampilan</th>
                                                <th className="w-24 py-1 font-semibold sm:w-48">Penguasaan</th>
                                                <th className="w-14 py-1 text-center font-semibold">Tingkat</th>
                                                <th className="hidden w-16 py-1 text-right font-semibold sm:table-cell">Soal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {t.skills.map((sk) => (
                                                <tr key={sk.code} className="border-t border-dashed">
                                                    <td className="py-2 pr-2">
                                                        {sk.name}
                                                        <span className="text-muted-foreground block text-xs sm:hidden">{sk.attempts} soal</span>
                                                    </td>
                                                    <td className="py-2">
                                                        <div className="flex items-center gap-2">
                                                            <MasteryBar value={sk.mastery} className="hidden sm:block" />
                                                            <span
                                                                className={cn(
                                                                    'w-10 font-semibold tabular-nums',
                                                                    sk.mastery < 60
                                                                        ? 'text-amber-700 dark:text-amber-400'
                                                                        : sk.mastery >= 80
                                                                          ? 'text-emerald-700 dark:text-emerald-400'
                                                                          : '',
                                                                )}
                                                            >
                                                                {sk.mastery}%
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="py-2 text-center">
                                                        <LevelDots level={sk.level} />
                                                    </td>
                                                    <td className="hidden py-2 text-right tabular-nums sm:table-cell">{sk.attempts}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
            <p className="text-muted-foreground mt-2 text-xs">
                Tingkat soal: 1 = dasar, 2 = sedang, 3 = tantangan. Anak naik tingkat otomatis setelah 3 jawaban benar berturut-turut.
            </p>
        </section>
    );
}

function LevelDots({ level }: { level: number }) {
    return (
        <span className="inline-flex gap-0.5" aria-label={`Tingkat ${level} dari 3`} title={`Tingkat ${level}`}>
            {[1, 2, 3].map((i) => (
                <span key={i} className={cn('size-2 rounded-full', i <= level ? 'bg-brand-500' : 'bg-zinc-200 dark:bg-zinc-700')} />
            ))}
        </span>
    );
}

function EmptyState({ student, report }: { student: Props['student']; report: Report }) {
    const rec = report.recommendations[0];
    return (
        <section className="bg-card flex flex-col items-center rounded-2xl border p-8 text-center">
            <svg viewBox="0 0 160 90" className="mb-4 h-24 w-auto" aria-hidden>
                {[0, 1, 2, 3].map((i) => (
                    <rect
                        key={i}
                        x={20 + i * 30}
                        y={70 - i * 16}
                        width="28"
                        height={12 + i * 16}
                        rx="3"
                        className={i === 3 ? 'fill-sun-400' : 'fill-brand-100 dark:fill-brand-700/40'}
                    />
                ))}
                <circle cx="139" cy="14" r="6" className="fill-brand-500" />
            </svg>
            <h2 className="font-display text-2xl font-bold">Belum ada aktivitas</h2>
            <p className="text-muted-foreground mt-1 max-w-md text-sm">
                {rec?.body ?? `${student.name} belum mengerjakan latihan pada periode ini.`} Laporan akan terisi otomatis setelah latihan pertama.
            </p>
            <Button className="mt-5 print:hidden" onClick={() => router.post(route('students.switch', student.id))}>
                <BookOpen className="size-4" /> Mulai latihan bersama {student.name}
            </Button>
        </section>
    );
}
