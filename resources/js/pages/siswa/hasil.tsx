import SiswaLayout from '@/layouts/siswa-layout';
import { Link } from '@inertiajs/react';
import { Star } from 'lucide-react';

interface Props {
    session: { id: number; total: number; correct: number; minutes: number };
    topic: { id: string; title: string; grade: string };
    errors: { name: string; count: number }[];
    masteries: { skill: string; level: number; mastery: number }[];
}

export default function Hasil({ session, topic, errors }: Props) {
    const pct = session.total ? Math.round((100 * session.correct) / session.total) : 0;
    const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 40 ? 1 : 0;
    const msg = stars === 3 ? 'Luar biasa! Hampir semua langkah benar.' : stars === 2 ? 'Bagus! Sedikit lagi jadi juara.' : stars === 1 ? 'Kamu sudah berusaha. Baca lagi contohnya, lalu coba lagi.' : 'Tidak apa-apa. Pelajari lagi materinya pelan-pelan, ya.';
    return (
        <SiswaLayout title="Hasil latihan">
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-100 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-semibold text-slate-500">{topic.title}</p>
                <div className="flex gap-2" aria-label={`${stars} dari 3 bintang`}>
                    {[0, 1, 2].map((i) => <Star key={i} className={`size-14 ${i < stars ? 'fill-amber-400 text-amber-500' : 'text-slate-200 dark:text-slate-700'}`} />)}
                </div>
                <p className="font-display text-4xl font-bold">{session.correct} dari {session.total} benar</p>
                <p className="text-slate-600 dark:text-slate-300">{msg}</p>
                <p className="text-sm text-slate-400">Waktu belajar sekitar {Math.max(1, session.minutes)} menit</p>
            </div>
            {errors.length > 0 && (
                <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/40">
                    <h2 className="mb-2 font-bold">Yang perlu diperhatikan lagi</h2>
                    <ul className="flex flex-col gap-1 text-sm">
                        {errors.map((e) => <li key={e.name} className="flex justify-between gap-3"><span>{e.name}</span><span className="font-bold tabular-nums">{e.count}×</span></li>)}
                    </ul>
                </div>
            )}
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link href={route('siswa.practice', topic.id)} className="rounded-2xl bg-brand-600 py-4 text-center text-lg font-bold text-white shadow-sm">Latihan lagi</Link>
                <Link href={route('siswa.home', { kelas: topic.grade })} className="rounded-2xl border border-slate-200 bg-white py-4 text-center text-lg font-bold dark:border-slate-700 dark:bg-slate-900">Pilih topik lain</Link>
            </div>
        </SiswaLayout>
    );
}
