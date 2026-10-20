import SiswaLayout from '@/layouts/siswa-layout';
import { Materi } from '@/practice/Materi';
import { Link, router } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, Lock, PencilLine } from 'lucide-react';

interface Props {
    topic: { id: string; title: string; grade: string; gradeName: string; number: number; minutes: number; hasPractice: boolean; moe: string | null; body: string | null; prerequisites: { id: string; title: string }[] };
    locked: boolean;
    prev: { id: string; title: string } | null;
    next: { id: string; title: string } | null;
}

export default function MateriPage({ topic, locked, prev, next }: Props) {
    const practice = topic.hasPractice && !locked && (
        <Link href={route('siswa.practice', topic.id)} className="flex items-center justify-center gap-2 rounded-2xl bg-brand-600 px-5 py-3 text-lg font-bold text-white shadow-sm active:translate-y-0.5">
            <PencilLine className="size-5" /> Mulai latihan
        </Link>
    );
    return (
        <SiswaLayout title={topic.title}>
            <button type="button" onClick={() => router.get(route('siswa.home'), { kelas: topic.grade })} className="mb-3 flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-slate-800">
                <ArrowLeft className="size-4" /> {topic.gradeName}
            </button>
            <p className="text-sm font-bold text-brand-700 dark:text-brand-400">Topik {topic.number} · {topic.minutes} menit</p>
            <h1 className="font-display mb-2 text-3xl leading-tight font-bold sm:text-4xl">{topic.title}</h1>
            {topic.prerequisites.length > 0 && (
                <p className="mb-4 text-sm text-slate-500">
                    Sebaiknya sudah paham:{' '}
                    {topic.prerequisites.map((p, i) => <span key={p.id}>{i > 0 && ', '}<Link className="font-semibold text-brand-700 underline dark:text-brand-400" href={route('siswa.topic', p.id)}>{p.title}</Link></span>)}
                </p>
            )}
            {locked ? (
                <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center dark:border-amber-900 dark:bg-amber-950/40">
                    <Lock className="size-10 text-amber-600" />
                    <p className="font-display text-xl font-bold">Topik ini masih terkunci</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Minta orang tuamu untuk berlangganan supaya semua materi dan latihan terbuka.</p>
                </div>
            ) : (
                <>
                    {practice && <div className="mb-2 sm:hidden">{practice}</div>}
                    <Materi body={topic.body ?? ''} />
                    <div className="mt-5">{practice || <p className="text-center text-sm text-slate-500">Latihan interaktif untuk topik ini sedang disiapkan. Kerjakan dulu soal "Cek pemahaman" di atas.</p>}</div>
                </>
            )}
            <nav className="mt-6 flex flex-wrap justify-between gap-3 text-sm font-semibold">
                {prev ? <Link href={route('siswa.topic', prev.id)} className="flex items-center gap-1 text-slate-600 hover:text-slate-900 dark:text-slate-300"><ArrowLeft className="size-4" /> {prev.title}</Link> : <span />}
                {next && <Link href={route('siswa.topic', next.id)} className="flex items-center gap-1 text-slate-600 hover:text-slate-900 dark:text-slate-300">{next.title} <ArrowRight className="size-4" /></Link>}
            </nav>
        </SiswaLayout>
    );
}
