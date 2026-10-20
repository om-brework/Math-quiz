import { StatusBadge } from '@/components/status-badge';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { periode, rupiah, tanggal, tanggalJam } from '@/lib/format';
import { cn } from '@/lib/utils';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Head, router, usePage } from '@inertiajs/react';
import { Check, CreditCard, FlaskConical, LoaderCircle, ShieldCheck, Sparkles, TriangleAlert } from 'lucide-react';
import { Fragment, useEffect, useRef, useState } from 'react';

interface Plan {
    id: number;
    name: string;
    description: string | null;
    price: number;
    monthly: number;
    months: number;
    maxStudents: number;
    features: string[];
}

interface Payment {
    id: number;
    orderId: string;
    plan: string | null;
    amount: number;
    status: string;
    method: string | null;
    createdAt: string;
    paidAt: string | null;
    snapToken: string | null;
}

interface Props {
    plans: Plan[];
    subscription: { status: string; plan: string | null; endsAt: string } | null;
    payments: Payment[];
    midtrans: { configured: boolean; clientKey: string | null; snapJs: string };
    canSimulate: boolean;
}

interface SnapResult {
    order_id?: string;
}

declare global {
    interface Window {
        snap?: {
            pay: (
                token: string,
                opts: {
                    onSuccess?: (r: SnapResult) => void;
                    onPending?: (r: SnapResult) => void;
                    onError?: (r: SnapResult) => void;
                    onClose?: () => void;
                },
            ) => void;
        };
    }
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Beranda', href: '/orang-tua' },
    { title: 'Langganan', href: '/orang-tua/langganan' },
];

const METODE: Record<string, string> = {
    qris: 'QRIS',
    gopay: 'GoPay',
    shopeepay: 'ShopeePay',
    bank_transfer: 'Transfer bank (VA)',
    echannel: 'Mandiri VA',
    permata: 'Permata VA',
    credit_card: 'Kartu kredit/debit',
    cstore: 'Gerai retail',
    akulaku: 'Akulaku',
    simulasi: 'Simulasi (dev)',
};

let snapPromise: Promise<void> | null = null;

/** Muat Snap.js Midtrans sekali saja. */
function loadSnap(src: string, clientKey: string | null): Promise<void> {
    if (window.snap) return Promise.resolve();
    if (snapPromise) return snapPromise;
    snapPromise = new Promise<void>((resolve, reject) => {
        const el = document.createElement('script');
        el.src = src;
        el.async = true;
        el.setAttribute('data-client-key', clientKey ?? '');
        el.onload = () => (window.snap ? resolve() : reject(new Error('snap tidak tersedia')));
        el.onerror = () => reject(new Error('gagal memuat snap.js'));
        document.head.appendChild(el);
        setTimeout(() => reject(new Error('timeout')), 15000);
    }).catch((e) => {
        snapPromise = null;
        throw e;
    });
    return snapPromise;
}

export default function Langganan({ plans, subscription, payments, midtrans, canSimulate }: Props) {
    const { flash } = usePage<SharedData>().props;
    const [busyPlan, setBusyPlan] = useState<number | null>(null);
    const [paying, setPaying] = useState(false);
    const handled = useRef<string | null>(null);

    const bestValue = plans.length > 1 ? plans.reduce((a, b) => (b.monthly < a.monthly ? b : a)) : null;
    const highlightPayment = flash?.pay?.paymentId ?? null;
    const devNoKeys = canSimulate && !!flash?.pay?.paymentId;

    const openSnap = (token: string, orderId: string | undefined, redirectUrl?: string) => {
        const fallback = redirectUrl ?? midtrans.snapJs.replace(/snap\/snap\.js$/, `snap/v2/vtweb/${token}`);
        setPaying(true);
        loadSnap(midtrans.snapJs, midtrans.clientKey)
            .then(() => {
                const finish = (r: SnapResult) => router.visit(route('billing.finish', { order_id: r?.order_id ?? orderId }));
                window.snap!.pay(token, {
                    onSuccess: finish,
                    onPending: finish,
                    onError: () => {
                        setPaying(false);
                        router.reload({ only: ['payments', 'subscription'] });
                    },
                    onClose: () => setPaying(false),
                });
            })
            .catch(() => {
                window.location.href = fallback;
            });
    };

    // Setelah checkout: server mengirim token Snap lewat flash.pay
    useEffect(() => {
        const pay = flash?.pay;
        if (!pay?.snapToken || handled.current === pay.snapToken) return;
        handled.current = pay.snapToken;
        openSnap(pay.snapToken, pay.orderId, pay.redirectUrl);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [flash?.pay?.snapToken]);

    const choose = (plan: Plan) => {
        setBusyPlan(plan.id);
        router.post(route('billing.checkout'), { plan_id: plan.id }, { preserveScroll: true, onFinish: () => setBusyPlan(null) });
    };

    const endsAt = subscription ? new Date(subscription.endsAt) : null;
    const daysLeft = endsAt ? Math.max(0, Math.ceil((endsAt.getTime() - Date.now()) / 86400000)) : 0;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Langganan" />
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 p-4 md:p-6">
                {devNoKeys && (
                    <div className="flex items-start gap-3 rounded-xl border border-dashed border-violet-400 bg-violet-50 px-4 py-3 text-sm text-violet-900 dark:bg-violet-950/40 dark:text-violet-100">
                        <FlaskConical className="mt-0.5 size-4 shrink-0" />
                        <p>
                            <b>Mode pengembangan:</b> kunci Midtrans belum diisi, jadi popup pembayaran tidak dibuka. Pesanan sudah dibuat — tekan{' '}
                            <b>Simulasikan lunas</b> di riwayat pembayaran untuk menguji alurnya.
                        </p>
                    </div>
                )}
                {paying && (
                    <div className="bg-brand-50 text-brand-700 dark:bg-brand-700/20 dark:text-brand-100 flex items-center gap-2 rounded-xl px-4 py-3 text-sm">
                        <LoaderCircle className="size-4 animate-spin" /> Membuka halaman pembayaran Midtrans…
                    </div>
                )}

                {/* Status */}
                <section className="bg-card flex flex-col gap-3 rounded-2xl border p-5 sm:flex-row sm:items-center">
                    <div className="flex-1">
                        <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">Status langganan</p>
                        {subscription ? (
                            <>
                                <h1 className="font-display mt-1 flex flex-wrap items-center gap-2 text-2xl font-bold">
                                    {subscription.status === 'trial' ? 'Coba gratis' : `Paket ${subscription.plan ?? ''}`}
                                    <StatusBadge status={subscription.status} />
                                </h1>
                                <p className="text-muted-foreground text-sm">
                                    Berlaku sampai <b className="text-foreground">{tanggal(subscription.endsAt)}</b> · sisa {daysLeft} hari. Membeli
                                    paket sekarang akan menambah masa setelah tanggal ini.
                                </p>
                            </>
                        ) : (
                            <>
                                <h1 className="font-display mt-1 text-2xl font-bold">Belum ada langganan aktif</h1>
                                <p className="text-muted-foreground text-sm">
                                    Pilih paket di bawah agar anak bisa kembali berlatih. Riwayat belajar tetap tersimpan.
                                </p>
                            </>
                        )}
                    </div>
                    <div className="text-muted-foreground flex items-center gap-2 text-xs">
                        <ShieldCheck className="text-primary dark:text-brand-500 size-5" /> Pembayaran aman lewat Midtrans
                    </div>
                </section>

                {/* Paket */}
                <section>
                    <h2 className="font-display mb-1 text-2xl font-bold">Pilih paket</h2>
                    <p className="text-muted-foreground mb-4 text-sm">Satu langganan untuk semua anak dalam keluarga. Semua materi SD–SMA terbuka.</p>
                    <div className="grid gap-4 md:grid-cols-3">
                        {plans.map((p) => {
                            const best = bestValue?.id === p.id;
                            return (
                                <article
                                    key={p.id}
                                    className={cn(
                                        'bg-card relative flex flex-col rounded-2xl border p-5',
                                        best && 'border-primary ring-primary/20 dark:border-brand-500 shadow-lg ring-4 md:-translate-y-2',
                                    )}
                                >
                                    {best && (
                                        <span className="bg-sun-400 absolute -top-3 left-5 inline-flex items-center gap-1 rounded-full px-3 py-0.5 text-xs font-bold text-amber-950">
                                            <Sparkles className="size-3" /> Paling hemat
                                        </span>
                                    )}
                                    <h3 className="font-display text-xl font-bold">{p.name}</h3>
                                    {p.description && <p className="text-muted-foreground text-sm">{p.description}</p>}
                                    <p className="font-display mt-4 text-3xl font-bold">{rupiah(p.price)}</p>
                                    <p className="text-muted-foreground text-sm">
                                        untuk {periode(p.months)}
                                        {p.months > 1 && (
                                            <>
                                                {' '}
                                                · <b className="text-foreground">{rupiah(p.monthly)}</b>/bulan
                                            </>
                                        )}
                                    </p>
                                    <ul className="my-5 flex-1 space-y-2 text-sm">
                                        <li className="flex gap-2">
                                            <Check className="text-primary dark:text-brand-500 mt-0.5 size-4 shrink-0" /> Sampai {p.maxStudents} anak
                                        </li>
                                        {p.features
                                            .filter((f) => !/^sampai \d+ anak$/i.test(f))
                                            .map((f) => (
                                                <li key={f} className="flex gap-2">
                                                    <Check className="text-primary dark:text-brand-500 mt-0.5 size-4 shrink-0" /> {f}
                                                </li>
                                            ))}
                                    </ul>
                                    <Button
                                        onClick={() => choose(p)}
                                        disabled={busyPlan !== null || paying}
                                        variant={best ? 'default' : 'outline'}
                                        className="w-full"
                                    >
                                        {busyPlan === p.id ? <LoaderCircle className="size-4 animate-spin" /> : <CreditCard className="size-4" />}
                                        Pilih paket
                                    </Button>
                                </article>
                            );
                        })}
                    </div>
                    {!midtrans.configured && !canSimulate && (
                        <p className="mt-3 flex items-center gap-2 text-sm text-amber-700 dark:text-amber-400">
                            <TriangleAlert className="size-4" /> Pembayaran online sedang tidak tersedia. Silakan hubungi admin.
                        </p>
                    )}
                </section>

                {/* Riwayat */}
                <section>
                    <h2 className="font-display mb-3 text-2xl font-bold">Riwayat pembayaran</h2>
                    {payments.length === 0 ? (
                        <p className="bg-card text-muted-foreground rounded-2xl border p-4 text-sm">Belum ada pembayaran.</p>
                    ) : (
                        <div className="bg-card overflow-hidden rounded-2xl border">
                            <table className="w-full text-sm">
                                <thead className="bg-muted/60 text-muted-foreground text-left text-xs">
                                    <tr>
                                        <th className="px-4 py-2 font-semibold">Tanggal</th>
                                        <th className="px-4 py-2 font-semibold">Paket</th>
                                        <th className="hidden px-4 py-2 font-semibold md:table-cell">Metode</th>
                                        <th className="px-4 py-2 text-right font-semibold">Jumlah</th>
                                        <th className="px-4 py-2 font-semibold">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {payments.map((p) => {
                                        const canPay = p.status === 'pending' && !!p.snapToken && midtrans.configured;
                                        const canSim = p.status === 'pending' && canSimulate;
                                        return (
                                            <Fragment key={p.id}>
                                                <tr
                                                    className={cn(
                                                        'border-t first:border-t-0',
                                                        highlightPayment === p.id && 'bg-violet-50/70 dark:bg-violet-950/30',
                                                    )}
                                                >
                                                    <td className="px-4 py-3 align-top">
                                                        <span className="block">{tanggal(p.paidAt ?? p.createdAt)}</span>
                                                        <span className="text-muted-foreground hidden font-mono text-[11px] sm:block">
                                                            {p.orderId}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 align-top">{p.plan ?? '—'}</td>
                                                    <td className="text-muted-foreground hidden px-4 py-3 align-top md:table-cell">
                                                        {p.method ? (METODE[p.method] ?? p.method) : '—'}
                                                    </td>
                                                    <td className="px-4 py-3 text-right align-top font-semibold whitespace-nowrap tabular-nums">
                                                        {rupiah(p.amount)}
                                                    </td>
                                                    <td className="px-4 py-3 align-top">
                                                        <div className="flex flex-col items-start gap-2">
                                                            <StatusBadge status={p.status} />
                                                            {p.status === 'paid' && p.paidAt && (
                                                                <span className="text-muted-foreground hidden text-[11px] sm:block">
                                                                    {tanggalJam(p.paidAt)}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                                {(canPay || canSim) && (
                                                    <tr className={cn(highlightPayment === p.id && 'bg-violet-50/70 dark:bg-violet-950/30')}>
                                                        <td colSpan={5} className="px-4 pt-0 pb-3">
                                                            <div className="flex flex-wrap justify-end gap-2">
                                                                {canPay && (
                                                                    <Button
                                                                        size="sm"
                                                                        onClick={() => openSnap(p.snapToken!, p.orderId)}
                                                                        disabled={paying}
                                                                    >
                                                                        Lanjutkan bayar
                                                                    </Button>
                                                                )}
                                                                {canSim && (
                                                                    <Button
                                                                        size="sm"
                                                                        variant="outline"
                                                                        className="border-dashed border-violet-400 text-violet-700 dark:text-violet-300"
                                                                        onClick={() =>
                                                                            router.post(route('billing.simulate', p.id), {}, { preserveScroll: true })
                                                                        }
                                                                        title="Hanya tersedia di lingkungan lokal tanpa kunci Midtrans"
                                                                    >
                                                                        <FlaskConical className="size-3.5" /> Simulasikan lunas (dev)
                                                                    </Button>
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                            </Fragment>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="font-display mb-3 text-2xl font-bold">Pertanyaan umum</h2>
                    <div className="bg-card divide-y rounded-2xl border">
                        {FAQ.map((f) => (
                            <details key={f.q} className="group p-4">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                                    {f.q}
                                    <span className="text-primary dark:text-brand-500 text-xl leading-none transition group-open:rotate-45">+</span>
                                </summary>
                                <p className="text-muted-foreground mt-2 text-sm">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}

const FAQ = [
    {
        q: 'Bisa bayar pakai apa saja?',
        a: 'QRIS (semua aplikasi bank & e-wallet), GoPay, ShopeePay, transfer ke virtual account bank, dan kartu kredit/debit. Semua diproses oleh Midtrans.',
    },
    {
        q: 'Apakah langganan diperpanjang otomatis?',
        a: 'Tidak. Kami tidak menyimpan kartu dan tidak menagih otomatis. Saat masa langganan hampir habis, cukup bayar lagi di halaman ini.',
    },
    {
        q: 'Kalau saya bayar sebelum masa sekarang habis?',
        a: 'Tidak ada yang hilang. Masa paket baru ditambahkan setelah masa yang sekarang berakhir.',
    },
    {
        q: 'Sudah bayar tapi status masih "Menunggu"?',
        a: 'Biasanya status berubah dalam beberapa menit setelah Midtrans mengonfirmasi. Muat ulang halaman ini. Jika lebih dari 1 jam, hubungi admin dengan menyertakan nomor pesanan.',
    },
    {
        q: 'Apa yang terjadi jika langganan habis?',
        a: 'Akun dan riwayat anak tetap tersimpan, dan Anda tetap bisa melihat laporan. Latihan baru terbuka lagi setelah Anda memilih paket.',
    },
];
