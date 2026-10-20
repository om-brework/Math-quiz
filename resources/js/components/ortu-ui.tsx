import { cn } from '@/lib/utils';

/** "3 jam lalu", "kemarin", "5 hari lalu", atau tanggal. */
export function waktuRelatif(iso: string | null | undefined): string {
    if (!iso) return 'Belum pernah';
    const d = new Date(iso);
    const diff = (Date.now() - d.getTime()) / 1000;
    if (diff < 90) return 'Baru saja';
    if (diff < 3600) return `${Math.round(diff / 60)} menit lalu`;
    if (diff < 86400) return `${Math.round(diff / 3600)} jam lalu`;
    const days = Math.floor(diff / 86400);
    if (days === 1) return 'Kemarin';
    if (days < 30) return `${days} hari lalu`;
    return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }).format(d);
}

/** Batang kemajuan kecil, warna menurut nilai. */
export function MasteryBar({ value, className }: { value: number; className?: string }) {
    const v = Math.max(0, Math.min(100, value));
    const color = v >= 80 ? 'bg-emerald-500' : v >= 60 ? 'bg-brand-500' : 'bg-amber-500';
    return (
        <div
            className={cn('h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800', className)}
            role="meter"
            aria-valuenow={v}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            <div className={cn('h-full rounded-full', color)} style={{ width: `${v}%` }} />
        </div>
    );
}
