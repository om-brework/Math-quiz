import { cn } from '@/lib/utils';
import { type SharedData } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { CircleAlert, CircleCheck, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

type Toast = { id: number; kind: 'success' | 'error'; text: string };

/**
 * Menampilkan pesan `flash.success` / `flash.error` dari server sebagai toast
 * setelah setiap navigasi Inertia. Pesan sukses hilang sendiri; pesan galat tetap
 * sampai ditutup.
 */
export function Flash({ className }: { className?: string }) {
    const { flash } = usePage<SharedData>().props;
    const [toasts, setToasts] = useState<Toast[]>([]);
    const seq = useRef(0);

    const push = useCallback((f: SharedData['flash'] | undefined) => {
        if (!f) return;
        const next: Toast[] = [];
        if (f.success) next.push({ id: ++seq.current, kind: 'success', text: f.success });
        if (f.error) next.push({ id: ++seq.current, kind: 'error', text: f.error });
        if (next.length) setToasts((t) => [...t.slice(-2), ...next]);
    }, []);

    // muatan halaman pertama
    useEffect(() => {
        push(flash);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // setiap kunjungan Inertia yang berhasil (termasuk redirect back() dengan pesan yang sama)
    useEffect(
        () =>
            router.on('success', (event) => {
                push((event.detail.page.props as unknown as SharedData).flash);
            }),
        [push],
    );

    const dismiss = (id: number) => setToasts((t) => t.filter((x) => x.id !== id));

    return (
        <div
            aria-live="polite"
            className={cn(
                'pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex flex-col items-center gap-2 p-4 sm:inset-x-auto sm:right-0 sm:items-end',
                className,
            )}
        >
            {toasts.map((t) => (
                <ToastItem key={t.id} toast={t} onClose={() => dismiss(t.id)} />
            ))}
        </div>
    );
}

function ToastItem({ toast, onClose }: { toast: Toast; onClose: () => void }) {
    const close = useRef(onClose);
    close.current = onClose;
    useEffect(() => {
        if (toast.kind !== 'success') return;
        const t = setTimeout(() => close.current(), 5000);
        return () => clearTimeout(t);
    }, [toast.id, toast.kind]);

    const Icon = toast.kind === 'success' ? CircleCheck : CircleAlert;

    return (
        <div
            role={toast.kind === 'error' ? 'alert' : 'status'}
            className={cn(
                'animate-in fade-in slide-in-from-bottom-2 pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-lg border bg-white p-3 pr-2 text-sm shadow-lg dark:bg-neutral-900',
                toast.kind === 'success'
                    ? 'border-emerald-200 text-emerald-900 dark:border-emerald-500/30 dark:text-emerald-100'
                    : 'border-red-200 text-red-900 dark:border-red-500/30 dark:text-red-100',
            )}
        >
            <Icon className={cn('mt-0.5 size-4 shrink-0', toast.kind === 'success' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400')} />
            <p className="flex-1 leading-snug">{toast.text}</p>
            <button
                type="button"
                onClick={onClose}
                className="-my-1 rounded-md p-1 opacity-60 transition hover:bg-black/5 hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none dark:hover:bg-white/10"
                aria-label="Tutup pesan"
            >
                <X className="size-4" />
            </button>
        </div>
    );
}
