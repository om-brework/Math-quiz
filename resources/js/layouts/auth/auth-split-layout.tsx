import AppLogo from '@/components/app-logo';
import AppLogoIcon from '@/components/app-logo-icon';
import { Link } from '@inertiajs/react';

interface AuthLayoutProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
}

export default function AuthSplitLayout({ children, title, description }: AuthLayoutProps) {
    return (
        <div className="relative grid h-dvh flex-col items-center justify-center px-6 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="bg-brand-700 relative hidden h-full flex-col p-10 text-white lg:flex">
                <Link href={route('home')} className="relative z-20 flex items-center gap-2 text-lg font-bold">
                    <AppLogoIcon className="text-sun-300 size-8" />
                    <span className="font-display text-2xl">Langkah</span>
                </Link>
                <div className="relative z-20 mt-auto max-w-md">
                    <p className="font-display text-3xl leading-tight font-bold">Belajar matematika selangkah demi selangkah.</p>
                    <p className="mt-2 text-white/80">
                        Latihan bertahap kurikulum Singapura untuk SD–SMA, dengan laporan yang jelas untuk orang tua.
                    </p>
                </div>
            </div>
            <div className="w-full lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[380px]">
                    <Link
                        href={route('home')}
                        className="relative z-20 flex w-fit items-center self-center lg:hidden"
                        aria-label="Langkah, ke beranda"
                    >
                        <AppLogo />
                    </Link>
                    <div className="flex flex-col items-start gap-2 text-left sm:items-center sm:text-center">
                        <h1 className="font-display text-2xl font-bold">{title}</h1>
                        <p className="text-muted-foreground text-sm text-balance">{description}</p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
