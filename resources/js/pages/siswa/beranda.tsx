/* Beranda siswa: peta topik satu kelas, berurutan seperti anak tangga. */
import SiswaLayout from '@/layouts/siswa-layout';
import { cn } from '@/lib/utils';
import type { SharedData } from '@/types';
import { Link, router, usePage } from '@inertiajs/react';
import { BookOpen, Lock, PencilLine, Star } from 'lucide-react';

interface TopicItem { id: string; number: number; title: string; scope: string; minutes: number; hasPractice: boolean; locked: boolean; mastery: number | null }

function Stars({ mastery }: { mastery: number | null }) {
    const n = mastery === null ? 0 : mastery >= 85 ? 3 : mastery >= 60 ? 2 : mastery >= 30 ? 1 : 0;
    return (
        <span className="flex gap-0.5" aria-label={mastery === null ? 'Belum dilatih' : `Penguasaan ${mastery}%`}>
            {[0, 1, 2].map((i) => <Star key={i} className={cn('size-4', i < n ? 'fill-amber-400 text-amber-500' : 'text-slate-300 dark:text-slate-600')} />)}
        </span>
    );
}

export default function Beranda({ grade, grades, topics, hasAccess }: { grade: string; grades: Record<string, string>; topics: TopicItem[]; hasAccess: boolean }) {
    const { auth } = usePage<SharedData>().props;
    const s = auth.student!;
    const practiced = topics.filter((t) => t.mastery !== null).length;
    return (
        <SiswaLayout title="Belajar" wide>
            <div className="mb-6 flex flex-wrap items-end gap-3">
                <div className="flex-1">
                    <p className="text-sm font-semibold text-brand-700 dark:text-brand-400">Halo, {s.name}!</p>
                    <h1 className="font-display text-3xl leading-tight font-bold">{grades[grade]}</h1>
                    <p className="text-sm text-slate-500">{topics.length} topik · {practiced} sudah dilatih</p>
                </div>
                <label className="text-sm font-semibold">
                    <span className="sr-only">Pilih kelas</span>
                    <select className="h-10 rounded-xl border-2 border-slate-200 bg-white px-3 dark:border-slate-700 dark:bg-slate-900" value={grade} onChange={(e) => router.get(route('siswa.home'), { kelas: e.target.value }, { preserveScroll: false })}>
                        {Object.entries(grades).map(([id, name]) => <option key={id} value={id}>{name}{id === s.grade ? ' (kelasku)' : ''}</option>)}
                    </select>
                </label>
            </div>
            {!hasAccess && (
                <div className="mb-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200">
                    Topik bergembok bisa dibuka setelah orang tuamu berlangganan. Topik pertama di setiap kelas tetap gratis.
                </div>
            )}
            <ol className="grid gap-3 sm:grid-cols-2">
                {topics.map((t) => (
                    <li key={t.id}>
                        <Link href={route('siswa.topic', t.id)} className={cn('group flex h-full gap-3 rounded-2xl border bg-white p-4 transition-colors dark:bg-slate-900', t.locked ? 'border-slate-200 opacity-75 dark:border-slate-800' : 'border-slate-200 hover:border-brand-300 dark:border-slate-700')}>
                            <span className={cn('font-display flex size-10 flex-none items-center justify-center rounded-lg text-lg font-bold', t.locked ? 'bg-slate-100 text-slate-400 dark:bg-slate-800' : 'bg-brand-50 text-brand-700 ring-1 ring-brand-100 tabular-nums dark:bg-brand-900/40 dark:text-brand-200 dark:ring-brand-800')}>
                                {t.locked ? <Lock className="size-5" /> : t.number}
                            </span>
                            <span className="flex min-w-0 flex-1 flex-col gap-1">
                                <span className="font-bold leading-snug">{t.title}</span>
                                <span className="line-clamp-2 text-xs text-slate-500">{t.scope}</span>
                                <span className="mt-auto flex items-center gap-3 pt-1 text-xs font-semibold text-slate-500">
                                    <span className="flex items-center gap-1"><BookOpen className="size-3.5" /> {t.minutes} menit</span>
                                    {t.hasPractice ? <span className="flex items-center gap-1 text-brand-700 dark:text-brand-400"><PencilLine className="size-3.5" /> Latihan</span> : <span>Latihan segera</span>}
                                    <span className="flex-1" />
                                    {t.hasPractice && <Stars mastery={t.mastery} />}
                                </span>
                            </span>
                        </Link>
                    </li>
                ))}
            </ol>
        </SiswaLayout>
    );
}
