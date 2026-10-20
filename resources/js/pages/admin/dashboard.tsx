import { AdminPage, DataTable, EmptyRow, PageHeader, Panel, Td, Th, Tr } from '@/components/admin/kit';
import { RevenueChart, type RevenuePoint } from '@/components/admin/revenue-chart';
import { StatusBadge } from '@/components/status-badge';
import AppLayout from '@/layouts/app-layout';
import { angka, rupiah, tanggal, tanggalJam } from '@/lib/format';
import { cn } from '@/lib/utils';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import {
    AlarmClock,
    ArrowRight,
    BookOpen,
    CalendarClock,
    CircleDollarSign,
    Clock3,
    GraduationCap,
    PenLine,
    Repeat,
    Sparkles,
    UserPlus,
    Users,
    type LucideIcon,
} from 'lucide-react';

interface Props {
    stats: {
        parents: number;
        students: number;
        activeSubscribers: number;
        trials: number;
        mrr: number;
        revenue30: number;
        signups30: number;
        pendingPayments: number;
        questions7: number;
        expiringSoon: number;
    };
    revenue: RevenuePoint[];
    content: { topics: number; withPractice: number };
    recentPayments: {
        id: number;
        orderId: string;
        user: string | null;
        plan: string | null;
        amount: number;
        status: string;
        createdAt: string;
    }[];
}

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Ringkasan', href: '/admin' }];

export default function AdminDashboard({ stats, revenue, content, recentPayments }: Props) {
    const practicePct = content.topics ? Math.round((content.withPractice / content.topics) * 100) : 0;
    const best = revenue.reduce<RevenuePoint | null>((b, d) => (!b || d.amount > b.amount ? d : b), null);
    const paidDays = revenue.filter((d) => d.amount > 0).length;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Ringkasan admin" />
            <AdminPage>
                <PageHeader title="Ringkasan" description={`Keadaan Langkah per ${tanggal(new Date())}`} />

                {/* KPI utama */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    <Kpi primary icon={Users} label="Pelanggan berbayar aktif" value={angka(stats.activeSubscribers)} hint={`dari ${angka(stats.parents)} akun orang tua`} />
                    <Kpi icon={Repeat} label="Pendapatan berulang bulanan" value={rupiah(stats.mrr)} hint="MRR dari langganan aktif" />
                    <Kpi icon={CircleDollarSign} label="Pendapatan 30 hari" value={rupiah(stats.revenue30)} hint="pembayaran lunas" />
                    <Kpi icon={UserPlus} label="Pendaftar baru 30 hari" value={angka(stats.signups30)} hint="akun orang tua baru" />
                </div>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
                    <MiniKpi icon={Sparkles} label="Trial aktif" value={angka(stats.trials)} />
                    <MiniKpi icon={GraduationCap} label="Anak terdaftar" value={angka(stats.students)} />
                    <MiniKpi icon={PenLine} label="Soal dikerjakan 7 hari" value={angka(stats.questions7)} />
                    <MiniKpi
                        icon={CalendarClock}
                        label="Akan berakhir 7 hari"
                        value={angka(stats.expiringSoon)}
                        tone={stats.expiringSoon > 0 ? 'amber' : undefined}
                        href="/admin/pelanggan"
                    />
                    <MiniKpi
                        icon={Clock3}
                        label="Pembayaran menunggu"
                        value={angka(stats.pendingPayments)}
                        sub="24 jam terakhir"
                        tone={stats.pendingPayments > 0 ? 'amber' : undefined}
                        href="/admin/pembayaran?status=pending"
                        className="col-span-2 md:col-span-1"
                    />
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <Panel
                        className="lg:col-span-2"
                        title="Pendapatan 30 hari terakhir"
                        description={
                            best && best.amount > 0
                                ? `${paidDays} hari dengan pembayaran · tertinggi ${rupiah(best.amount)} (${tanggal(best.date)})`
                                : 'Belum ada pembayaran lunas'
                        }
                        actions={<span className="font-display text-lg font-bold tabular-nums">{rupiah(stats.revenue30)}</span>}
                        bodyClassName="px-3 pt-4 pb-2"
                    >
                        <RevenueChart data={revenue} />
                        <details className="text-muted-foreground mt-1 px-1 text-xs">
                            <summary className="hover:text-foreground cursor-pointer py-1">Lihat sebagai tabel</summary>
                            <div className="mt-2 max-h-56 overflow-y-auto rounded-md border">
                                <table className="w-full text-xs tabular-nums">
                                    <tbody>
                                        {revenue.map((d) => (
                                            <tr key={d.date} className="border-b last:border-0">
                                                <td className="px-3 py-1">{tanggal(d.date)}</td>
                                                <td className="text-foreground px-3 py-1 text-right">{rupiah(d.amount)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </details>
                    </Panel>

                    <Panel title="Konten" description="Materi kurikulum yang sudah diimpor" bodyClassName="p-4">
                        <div className="flex items-baseline gap-2">
                            <BookOpen className="text-brand-600 dark:text-brand-500 size-5 self-center" />
                            <span className="font-display text-3xl font-bold tabular-nums">{angka(content.topics)}</span>
                            <span className="text-muted-foreground text-sm">topik</span>
                        </div>
                        <div className="mt-5">
                            <div className="mb-1.5 flex items-center justify-between text-sm">
                                <span>Topik dengan latihan</span>
                                <span className="font-semibold tabular-nums">
                                    {angka(content.withPractice)} <span className="text-muted-foreground font-normal">({practicePct}%)</span>
                                </span>
                            </div>
                            <div
                                className="h-2.5 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800"
                                role="progressbar"
                                aria-valuenow={practicePct}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="Topik dengan latihan"
                            >
                                <div className="bg-brand-600 dark:bg-brand-500 h-full rounded-full" style={{ width: `${practicePct}%` }} />
                            </div>
                            <p className="text-muted-foreground mt-2 text-xs">
                                {angka(content.topics - content.withPractice)} topik masih berupa materi saja (tanpa soal latihan).
                            </p>
                        </div>
                    </Panel>
                </div>

                <Panel
                    title="Pembayaran terbaru"
                    actions={
                        <Link href="/admin/pembayaran" className="text-brand-700 dark:text-brand-100 inline-flex items-center gap-1 text-sm font-medium hover:underline">
                            Semua pembayaran <ArrowRight className="size-4" />
                        </Link>
                    }
                >
                    <DataTable minWidth={640}>
                        <thead>
                            <tr>
                                <Th>Order</Th>
                                <Th>Pelanggan</Th>
                                <Th>Paket</Th>
                                <Th align="right">Jumlah</Th>
                                <Th>Status</Th>
                                <Th>Dibuat</Th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentPayments.length === 0 && <EmptyRow colSpan={6}>Belum ada pembayaran.</EmptyRow>}
                            {recentPayments.map((p) => (
                                <Tr key={p.id}>
                                    <Td className="font-mono text-xs whitespace-nowrap">{p.orderId}</Td>
                                    <Td className="max-w-48 truncate">{p.user ?? '—'}</Td>
                                    <Td>{p.plan ?? '—'}</Td>
                                    <Td align="right" className="font-medium">
                                        {rupiah(p.amount)}
                                    </Td>
                                    <Td>
                                        <StatusBadge status={p.status} />
                                    </Td>
                                    <Td className="text-muted-foreground whitespace-nowrap">{tanggalJam(p.createdAt)}</Td>
                                </Tr>
                            ))}
                        </tbody>
                    </DataTable>
                </Panel>
            </AdminPage>
        </AppLayout>
    );
}

function Kpi({ icon: Icon, label, value, hint, primary }: { icon: LucideIcon; label: string; value: string; hint?: string; primary?: boolean }) {
    return (
        <div
            className={cn(
                'relative min-w-0 overflow-hidden rounded-xl border p-4 shadow-xs',
                primary ? 'border-brand-600/30 bg-brand-50 dark:border-brand-500/30 dark:bg-brand-500/10' : 'bg-card',
            )}
        >
            <div className="flex items-start justify-between gap-2">
                <p className={cn('text-sm font-medium', primary ? 'text-brand-700 dark:text-brand-100' : 'text-muted-foreground')}>{label}</p>
                <Icon className={cn('size-4 shrink-0', primary ? 'text-brand-600 dark:text-brand-500' : 'text-muted-foreground')} />
            </div>
            <p className="font-display mt-2 truncate text-[1.75rem] leading-none font-bold tabular-nums">{value}</p>
            {hint && <p className="text-muted-foreground mt-1.5 truncate text-xs">{hint}</p>}
        </div>
    );
}

function MiniKpi({
    icon: Icon,
    label,
    value,
    sub,
    tone,
    href,
    className,
}: {
    icon: LucideIcon;
    label: string;
    value: string;
    sub?: string;
    tone?: 'amber';
    href?: string;
    className?: string;
}) {
    const body = (
        <>
            <div
                className={cn(
                    'flex size-9 shrink-0 items-center justify-center rounded-lg',
                    tone === 'amber' ? 'bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300' : 'bg-muted text-muted-foreground dark:bg-white/5',
                )}
            >
                {tone === 'amber' ? <AlarmClock className="size-4" /> : <Icon className="size-4" />}
            </div>
            <div className="min-w-0">
                <p className="font-display text-xl leading-none font-bold tabular-nums">{value}</p>
                <p className="text-muted-foreground mt-1 text-xs leading-tight">
                    {label}
                    {sub && <span className="block opacity-80">{sub}</span>}
                </p>
            </div>
        </>
    );
    const cls = cn('bg-card flex min-w-0 items-center gap-3 rounded-xl border p-3 shadow-xs', className);
    return href ? (
        <Link href={href} className={cn(cls, 'hover:border-brand-600/40 focus-visible:ring-ring transition-colors focus-visible:ring-2 focus-visible:outline-none')}>
            {body}
        </Link>
    ) : (
        <div className={cls}>{body}</div>
    );
}
