/* Tata letak area siswa: kepala sederhana dengan logo, nama anak, dan tombol keluar. */
import AppLogo from '@/components/app-logo';
import { AvatarAnak } from '@/components/avatar-anak';
import { Flash } from '@/components/flash';
import type { SharedData } from '@/types';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { LogOut } from 'lucide-react';
import type { ReactNode } from 'react';

export default function SiswaLayout({ title, children, wide = false }: { title: string; children: ReactNode; wide?: boolean }) {
    const { auth } = usePage<SharedData>().props;
    const s = auth.student;
    return (
        <div className="min-h-screen text-slate-800 dark:bg-slate-950 dark:text-slate-100">
            <Head title={title} />
            <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
                <div className="mx-auto flex h-14 max-w-5xl items-center gap-3 px-4">
                    <Link href={route('siswa.home')} className="flex items-center" aria-label="Beranda belajar"><AppLogo /></Link>
                    <div className="flex-1" />
                    {s && (
                        <div className="flex items-center gap-2">
                            <AvatarAnak name={s.avatar} className="size-9" />
                            <span className="hidden font-bold sm:inline">{s.name}</span>
                            <button type="button" onClick={() => router.post(route('siswa.logout'))} className="ml-1 flex items-center gap-1 rounded-lg px-2 py-1.5 text-sm font-semibold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
                                <LogOut className="size-4" /> <span className="hidden sm:inline">Keluar</span>
                            </button>
                        </div>
                    )}
                </div>
            </header>
            <Flash />
            <main className={`mx-auto px-4 py-6 ${wide ? 'max-w-5xl' : 'max-w-3xl'}`}>{children}</main>
        </div>
    );
}
