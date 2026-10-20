import AppLogo from '@/components/app-logo';
import { Head, Link, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

export default function MasukSiswa() {
    const { data, setData, post, processing, errors } = useForm({ username: '', pin: '' });
    return (
        <div className="flex min-h-screen items-center justify-center p-4 dark:bg-slate-950">
            <Head title="Masuk siswa" />
            <div className="w-full max-w-sm rounded-2xl border border-brand-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
                <div className="mb-4 flex justify-center"><AppLogo /></div>
                <h1 className="font-display text-center text-2xl font-bold">Halo! Ayo belajar</h1>
                <p className="mb-5 text-center text-sm text-slate-500">Masukkan username dan PIN dari orang tuamu.</p>
                <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); post(route('siswa.login.store')); }}>
                    <label className="flex flex-col gap-1 font-semibold">
                        Username
                        <input className="h-12 rounded-xl border-2 border-slate-200 px-3 text-lg outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-950" autoComplete="username" autoCapitalize="none" value={data.username} onChange={(e) => setData('username', e.target.value)} required autoFocus />
                    </label>
                    <label className="flex flex-col gap-1 font-semibold">
                        PIN
                        <input className="h-12 rounded-xl border-2 border-slate-200 px-3 text-center text-2xl tracking-[0.5em] outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-950" type="password" inputMode="numeric" autoComplete="current-password" maxLength={6} value={data.pin} onChange={(e) => setData('pin', e.target.value.replace(/\D/g, ''))} required />
                    </label>
                    {(errors.pin || errors.username) && <p className="rounded-lg bg-rose-50 p-2 text-sm font-semibold text-rose-700 dark:bg-rose-950 dark:text-rose-300">{errors.pin ?? errors.username}</p>}
                    <button type="submit" disabled={processing} className="flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-600 text-lg font-bold text-white shadow-sm active:translate-y-0.5 disabled:opacity-60">
                        {processing && <LoaderCircle className="size-5 animate-spin" />} Masuk
                    </button>
                </form>
                <p className="mt-5 text-center text-sm text-slate-500">Orang tua? <Link href={route('login')} className="font-semibold text-brand-700 underline dark:text-brand-400">Masuk di sini</Link></p>
            </div>
        </div>
    );
}
