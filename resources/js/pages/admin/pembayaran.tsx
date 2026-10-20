import { AdminPage, DataTable, EmptyRow, PageHeader, Pagination, Panel, SearchBox, Td, Th, Tr, type Paginator } from '@/components/admin/kit';
import { StatusBadge } from '@/components/status-badge';
import AppLayout from '@/layouts/app-layout';
import { angka, rupiah, tanggal, tanggalJam } from '@/lib/format';
import { cn } from '@/lib/utils';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

interface PaymentRow {
    id: number;
    orderId: string;
    user: { id: number; name: string; email: string } | null;
    plan: string | null;
    amount: number;
    status: string;
    method: string | null;
    createdAt: string;
    paidAt: string | null;
}

interface Props {
    filters: { status: string | null; q: string };
    payments: Paginator<PaymentRow>;
    totals: { paid: number; paidCount: number };
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin', href: '/admin' },
    { title: 'Pembayaran', href: '/admin/pembayaran' },
];

const TABS: { value: string | null; label: string }[] = [
    { value: null, label: 'Semua' },
    { value: 'paid', label: 'Lunas' },
    { value: 'pending', label: 'Menunggu' },
    { value: 'failed', label: 'Gagal' },
    { value: 'expired', label: 'Kedaluwarsa' },
    { value: 'refunded', label: 'Dikembalikan' },
];

const METODE: Record<string, string> = {
    bank_transfer: 'Transfer bank',
    echannel: 'Mandiri Bill',
    gopay: 'GoPay',
    shopeepay: 'ShopeePay',
    qris: 'QRIS',
    credit_card: 'Kartu kredit',
    cstore: 'Gerai retail',
    manual: 'Manual',
    simulasi: 'Simulasi',
};

function metode(m: string | null): string {
    if (!m) return '—';
    return METODE[m] ?? m.replace(/_/g, ' ');
}

export default function Pembayaran({ filters, payments, totals }: Props) {
    const total = payments.total ?? payments.meta?.total ?? payments.data.length;
    const status = filters.status || null;

    const tabHref = (s: string | null) => {
        const p = new URLSearchParams();
        if (s) p.set('status', s);
        if (filters.q) p.set('q', filters.q);
        const qs = p.toString();
        return `/admin/pembayaran${qs ? `?${qs}` : ''}`;
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pembayaran" />
            <AdminPage>
                <PageHeader title="Pembayaran" description="Semua transaksi Midtrans dan pemberian manual" />

                <div className="grid grid-cols-2 gap-3 sm:max-w-xl">
                    <div className="bg-card rounded-xl border p-4 shadow-xs">
                        <p className="text-muted-foreground text-sm">Total lunas (sepanjang waktu)</p>
                        <p className="font-display mt-1 truncate text-2xl font-bold tabular-nums">{rupiah(totals.paid)}</p>
                    </div>
                    <div className="bg-card rounded-xl border p-4 shadow-xs">
                        <p className="text-muted-foreground text-sm">Transaksi lunas</p>
                        <p className="font-display mt-1 text-2xl font-bold tabular-nums">{angka(totals.paidCount)}</p>
                    </div>
                </div>

                <Panel bodyClassName="">
                    <div className="flex flex-col gap-3 border-b px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
                        <nav aria-label="Filter status" className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-0.5">
                            {TABS.map((t) => {
                                const active = status === t.value;
                                return (
                                    <Link
                                        key={t.label}
                                        href={tabHref(t.value)}
                                        preserveScroll
                                        aria-current={active ? 'page' : undefined}
                                        className={cn(
                                            'rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors',
                                            active
                                                ? 'bg-brand-600 text-white dark:bg-brand-500'
                                                : 'text-muted-foreground hover:bg-muted hover:text-foreground dark:hover:bg-white/5',
                                        )}
                                    >
                                        {t.label}
                                    </Link>
                                );
                            })}
                        </nav>
                        <SearchBox value={filters.q} placeholder="Cari order ID, email, atau nama" params={{ status }} />
                    </div>

                    <DataTable minWidth={880}>
                        <thead>
                            <tr>
                                <Th>Order ID</Th>
                                <Th>Pelanggan</Th>
                                <Th>Paket</Th>
                                <Th align="right">Jumlah</Th>
                                <Th>Metode</Th>
                                <Th>Status</Th>
                                <Th>Dibuat</Th>
                                <Th>Dibayar</Th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.data.length === 0 && (
                                <EmptyRow colSpan={8}>{filters.q || status ? 'Tidak ada pembayaran yang cocok dengan filter.' : 'Belum ada pembayaran.'}</EmptyRow>
                            )}
                            {payments.data.map((p) => (
                                <Tr key={p.id}>
                                    <Td className="font-mono text-xs whitespace-nowrap">{p.orderId}</Td>
                                    <Td className="max-w-52">
                                        {p.user ? (
                                            <>
                                                <div className="truncate font-medium">{p.user.name}</div>
                                                <div className="text-muted-foreground truncate text-xs">{p.user.email}</div>
                                            </>
                                        ) : (
                                            <span className="text-muted-foreground">Akun dihapus</span>
                                        )}
                                    </Td>
                                    <Td className="whitespace-nowrap">{p.plan ?? '—'}</Td>
                                    <Td align="right" className="font-medium whitespace-nowrap">
                                        {rupiah(p.amount)}
                                    </Td>
                                    <Td className="text-muted-foreground whitespace-nowrap capitalize">{metode(p.method)}</Td>
                                    <Td>
                                        <StatusBadge status={p.status} />
                                    </Td>
                                    <Td className="text-muted-foreground whitespace-nowrap">
                                        <DateCell iso={p.createdAt} />
                                    </Td>
                                    <Td className="whitespace-nowrap">{p.paidAt ? <DateCell iso={p.paidAt} /> : <span className="text-muted-foreground">—</span>}</Td>
                                </Tr>
                            ))}
                        </tbody>
                    </DataTable>
                    <Pagination paginator={payments} />
                    {total > 0 && <span className="sr-only">{total} pembayaran</span>}
                </Panel>
            </AdminPage>
        </AppLayout>
    );
}

function DateCell({ iso }: { iso: string }) {
    return (
        <time dateTime={iso} title={tanggalJam(iso)}>
            <span className="block">{tanggal(iso)}</span>
            <span className="text-muted-foreground block text-xs">{tanggalJam(iso).split(', ')[1]}</span>
        </time>
    );
}
