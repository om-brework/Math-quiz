import { cn } from '@/lib/utils';
import { Link, router } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, Search, X } from 'lucide-react';
import { FormEvent, ReactNode, useEffect, useState } from 'react';

/* ---------- Tata letak halaman ---------- */

export function AdminPage({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={cn('mx-auto flex w-full max-w-7xl min-w-0 flex-1 flex-col gap-6 p-4 md:p-6', className)}>{children}</div>;
}

export function PageHeader({ title, description, actions }: { title: string; description?: ReactNode; actions?: ReactNode }) {
    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
                <h1 className="font-display text-2xl leading-tight font-bold tracking-tight">{title}</h1>
                {description && <p className="text-muted-foreground mt-0.5 text-sm">{description}</p>}
            </div>
            {actions && <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div>}
        </div>
    );
}

export function Panel({ title, description, actions, children, className, bodyClassName }: {
    title?: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
    children: ReactNode;
    className?: string;
    bodyClassName?: string;
}) {
    return (
        <section className={cn('bg-card text-card-foreground min-w-0 rounded-xl border shadow-xs', className)}>
            {(title || actions) && (
                <header className="flex flex-wrap items-center justify-between gap-2 border-b px-4 py-3">
                    <div className="min-w-0">
                        {title && <h2 className="text-sm font-semibold">{title}</h2>}
                        {description && <p className="text-muted-foreground text-xs">{description}</p>}
                    </div>
                    {actions}
                </header>
            )}
            <div className={bodyClassName}>{children}</div>
        </section>
    );
}

/* ---------- Tabel ---------- */

/** Tabel padat yang menggulir horizontal di layar sempit. */
export function DataTable({ children, minWidth = 720, className }: { children: ReactNode; minWidth?: number; className?: string }) {
    return (
        <div className={cn('relative overflow-x-auto', className)}>
            <table className="w-full border-collapse text-sm tabular-nums" style={{ minWidth }}>
                {children}
            </table>
        </div>
    );
}

export function Th({ children, className, align = 'left' }: { children?: ReactNode; className?: string; align?: 'left' | 'right' | 'center' }) {
    return (
        <th
            scope="col"
            className={cn(
                'text-muted-foreground bg-muted/50 border-b px-4 py-2.5 text-xs font-semibold tracking-wide whitespace-nowrap uppercase dark:bg-white/[0.03]',
                align === 'right' && 'text-right',
                align === 'center' && 'text-center',
                align === 'left' && 'text-left',
                className,
            )}
        >
            {children}
        </th>
    );
}

export function Td({ children, className, align = 'left' }: { children?: ReactNode; className?: string; align?: 'left' | 'right' | 'center' }) {
    return (
        <td className={cn('border-b px-4 py-2.5 align-middle', align === 'right' && 'text-right', align === 'center' && 'text-center', className)}>
            {children}
        </td>
    );
}

export function Tr({ children, className }: { children: ReactNode; className?: string }) {
    return <tr className={cn('hover:bg-muted/40 transition-colors last:[&>td]:border-b-0 dark:hover:bg-white/[0.03]', className)}>{children}</tr>;
}

export function EmptyRow({ colSpan, children }: { colSpan: number; children: ReactNode }) {
    return (
        <tr>
            <td colSpan={colSpan} className="text-muted-foreground px-4 py-10 text-center text-sm">
                {children}
            </td>
        </tr>
    );
}

/* ---------- Paginasi (paginator Laravel) ---------- */

export interface PaginatorLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface Paginator<T> {
    data: T[];
    current_page?: number;
    last_page?: number;
    from?: number | null;
    to?: number | null;
    total?: number;
    per_page?: number;
    links?: PaginatorLink[] | { prev: string | null; next: string | null };
    meta?: { current_page: number; last_page: number; from: number | null; to: number | null; total: number; links?: PaginatorLink[] };
}

function cleanLabel(label: string): string {
    return label
        .replace(/&laquo;|«/g, '')
        .replace(/&raquo;|»/g, '')
        .replace(/Previous|Sebelumnya/i, '')
        .replace(/Next|Berikutnya/i, '')
        .trim();
}

export function Pagination({ paginator, className }: { paginator: Paginator<unknown>; className?: string }) {
    const m = paginator.meta ?? paginator;
    const links: PaginatorLink[] = Array.isArray(paginator.links) ? paginator.links : (paginator.meta?.links ?? []);
    const total = m.total ?? 0;
    const from = m.from ?? 0;
    const to = m.to ?? 0;
    const lastPage = m.last_page ?? 1;

    const prev = links[0];
    const next = links[links.length - 1];
    const pages = links.slice(1, -1);

    return (
        <div className={cn('flex flex-col items-center justify-between gap-3 border-t px-4 py-3 text-sm sm:flex-row', className)}>
            <p className="text-muted-foreground tabular-nums">
                {total === 0 ? 'Tidak ada data' : `Menampilkan ${from}–${to} dari ${new Intl.NumberFormat('id-ID').format(total)}`}
            </p>
            {lastPage > 1 && (
                <nav aria-label="Halaman" className="flex items-center gap-1">
                    <PageLink link={prev} label={<ChevronLeft className="size-4" />} ariaLabel="Halaman sebelumnya" />
                    {pages.map((l, i) =>
                        l.url === null ? (
                            <span key={i} className="text-muted-foreground px-1.5">
                                …
                            </span>
                        ) : (
                            <PageLink key={i} link={l} label={cleanLabel(l.label)} className="hidden sm:inline-flex" />
                        ),
                    )}
                    <span className="text-muted-foreground px-2 tabular-nums sm:hidden">
                        {m.current_page} / {lastPage}
                    </span>
                    <PageLink link={next} label={<ChevronRight className="size-4" />} ariaLabel="Halaman berikutnya" />
                </nav>
            )}
        </div>
    );
}

function PageLink({ link, label, ariaLabel, className }: { link?: PaginatorLink; label: ReactNode; ariaLabel?: string; className?: string }) {
    const base = 'inline-flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-sm tabular-nums transition-colors';
    if (!link || !link.url) {
        return (
            <span aria-disabled className={cn(base, 'text-muted-foreground/50', className)} aria-label={ariaLabel}>
                {label}
            </span>
        );
    }
    return (
        <Link
            href={link.url}
            preserveScroll
            preserveState
            aria-label={ariaLabel}
            aria-current={link.active ? 'page' : undefined}
            className={cn(
                base,
                link.active ? 'bg-brand-600 font-semibold text-white dark:bg-brand-500' : 'hover:bg-muted border',
                className,
            )}
        >
            {label}
        </Link>
    );
}

/* ---------- Pencarian ---------- */

/** Kotak cari yang mengirim ?q= ke url saat ini (debounce), mempertahankan filter lain. */
export function SearchBox({
    value,
    placeholder,
    params = {},
    className,
}: {
    value: string;
    placeholder: string;
    params?: Record<string, string | null | undefined>;
    className?: string;
}) {
    const [q, setQ] = useState(value ?? '');

    useEffect(() => setQ(value ?? ''), [value]);

    const go = (term: string) => {
        const query: Record<string, string> = {};
        Object.entries(params).forEach(([k, v]) => {
            if (v) query[k] = v;
        });
        if (term.trim()) query.q = term.trim();
        router.get(window.location.pathname, query, { preserveState: true, preserveScroll: true, replace: true });
    };

    useEffect(() => {
        if ((value ?? '') === q) return;
        const t = setTimeout(() => go(q), 400);
        return () => clearTimeout(t);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [q]);

    const submit = (e: FormEvent) => {
        e.preventDefault();
        go(q);
    };

    return (
        <form onSubmit={submit} role="search" className={cn('relative w-full sm:w-72', className)}>
            <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
            <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={placeholder}
                aria-label={placeholder}
                className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring h-9 w-full rounded-md border pr-8 pl-9 text-sm focus-visible:ring-2 focus-visible:outline-none [&::-webkit-search-cancel-button]:hidden"
            />
            {q && (
                <button
                    type="button"
                    onClick={() => {
                        setQ('');
                        go('');
                    }}
                    className="text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2 rounded p-0.5"
                    aria-label="Hapus pencarian"
                >
                    <X className="size-4" />
                </button>
            )}
        </form>
    );
}

/* ---------- Form kecil ---------- */

export const textareaClass =
    'border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-24 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50';

export const nativeSelectClass =
    'border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none';
