import AppLogo from '@/components/app-logo';
import { Link } from '@inertiajs/react';

interface AuthLayoutProps {
    children: React.ReactNode;
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: AuthLayoutProps) {
    return (
        <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden p-4 sm:p-10 dark:bg-zinc-950">
            {/* anak tangga dekoratif */}
            <svg
                viewBox="0 0 400 400"
                fill="currentColor"
                className="text-brand-100 dark:text-brand-700/15 pointer-events-none absolute -right-24 -bottom-16 h-80 w-auto sm:h-[26rem]"
                aria-hidden
            >
                <rect x="0" y="260" width="120" height="140" rx="24" />
                <rect x="140" y="160" width="120" height="240" rx="24" />
                <rect x="280" y="40" width="120" height="360" rx="24" />
            </svg>
            <div className="relative w-full max-w-md">
                <div className="flex flex-col gap-6">
                    <Link href={route('home')} className="flex w-fit items-center self-center" aria-label="Langkah, ke beranda">
                        <AppLogo />
                    </Link>
                    <div className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 dark:bg-zinc-900 dark:ring-white/10">
                        <div className="space-y-1 text-center">
                            <h1 className="font-display text-2xl font-bold">{title}</h1>
                            <p className="text-muted-foreground text-sm">{description}</p>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
