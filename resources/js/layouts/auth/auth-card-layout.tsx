import AppLogo from '@/components/app-logo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@inertiajs/react';

export default function AuthCardLayout({
    children,
    title,
    description,
}: {
    children: React.ReactNode;
    name?: string;
    title?: string;
    description?: string;
}) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 dark:bg-zinc-950">
            <div className="flex w-full max-w-md flex-col gap-6">
                <Link href={route('home')} className="flex w-fit items-center self-center" aria-label="Langkah, ke beranda">
                    <AppLogo />
                </Link>

                <Card className="rounded-3xl">
                    <CardHeader className="px-6 pt-8 pb-0 text-center sm:px-10">
                        <CardTitle className="font-display text-2xl">{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </CardHeader>
                    <CardContent className="px-6 py-8 sm:px-10">{children}</CardContent>
                </Card>
            </div>
        </div>
    );
}
