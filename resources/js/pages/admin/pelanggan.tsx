import { AdminPage, DataTable, EmptyRow, nativeSelectClass, PageHeader, Pagination, Panel, SearchBox, Td, Th, Tr, type Paginator } from '@/components/admin/kit';
import InputError from '@/components/input-error';
import { StatusBadge } from '@/components/status-badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { angka, rupiah, tanggal } from '@/lib/format';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { CalendarPlus } from 'lucide-react';
import { FormEvent, useState } from 'react';

interface Subscriber {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    students: number;
    createdAt: string;
    subscription: { status: string; plan: string | null; endsAt: string } | null;
    paid: number;
}

interface Props {
    filters: { q: string };
    users: Paginator<Subscriber>;
    plans: { id: number; name: string }[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin', href: '/admin' },
    { title: 'Pelanggan', href: '/admin/pelanggan' },
];

function sisaHari(iso: string): number {
    return Math.ceil((new Date(iso).getTime() - Date.now()) / 86_400_000);
}

export default function Pelanggan({ filters, users, plans }: Props) {
    const [target, setTarget] = useState<Subscriber | null>(null);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pelanggan" />
            <AdminPage>
                <PageHeader
                    title="Pelanggan"
                    description={`${angka(users.total ?? users.meta?.total ?? users.data.length)} akun orang tua${filters.q ? ` cocok dengan “${filters.q}”` : ''}`}
                />

                <Panel title="Daftar orang tua" actions={<SearchBox value={filters.q} placeholder="Cari nama atau email" />}>
                    <DataTable minWidth={860}>
                        <thead>
                            <tr>
                                <Th>Orang tua</Th>
                                <Th align="center">Anak</Th>
                                <Th>Langganan</Th>
                                <Th>Berakhir</Th>
                                <Th align="right">Total dibayar</Th>
                                <Th>Terdaftar</Th>
                                <Th align="right">
                                    <span className="sr-only">Aksi</span>
                                </Th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.data.length === 0 && (
                                <EmptyRow colSpan={7}>{filters.q ? 'Tidak ada pelanggan yang cocok dengan pencarian.' : 'Belum ada pelanggan.'}</EmptyRow>
                            )}
                            {users.data.map((u) => {
                                const s = u.subscription;
                                const days = s ? sisaHari(s.endsAt) : null;
                                const current = s && days !== null && days > 0 && (s.status === 'active' || s.status === 'trial');
                                return (
                                    <Tr key={u.id}>
                                        <Td className="max-w-64">
                                            <div className="truncate font-medium">{u.name}</div>
                                            <div className="text-muted-foreground truncate text-xs">
                                                {u.email}
                                                {u.phone && <> · {u.phone}</>}
                                            </div>
                                        </Td>
                                        <Td align="center">{u.students}</Td>
                                        <Td>
                                            {s ? (
                                                <div className="flex flex-wrap items-center gap-1.5">
                                                    <StatusBadge status={s.status === 'active' || s.status === 'trial' ? (current ? s.status : 'expired') : s.status} />
                                                    {s.plan && <span className="text-xs">{s.plan}</span>}
                                                </div>
                                            ) : (
                                                <span className="text-muted-foreground text-xs">Belum berlangganan</span>
                                            )}
                                        </Td>
                                        <Td className="whitespace-nowrap">
                                            {s ? (
                                                <>
                                                    <div>{tanggal(s.endsAt)}</div>
                                                    {current && days !== null && (
                                                        <div className={days <= 7 ? 'text-xs font-medium text-amber-700 dark:text-amber-300' : 'text-muted-foreground text-xs'}>
                                                            {days} hari lagi
                                                        </div>
                                                    )}
                                                </>
                                            ) : (
                                                '—'
                                            )}
                                        </Td>
                                        <Td align="right" className={u.paid ? 'font-medium' : 'text-muted-foreground'}>
                                            {rupiah(u.paid)}
                                        </Td>
                                        <Td className="text-muted-foreground whitespace-nowrap">{tanggal(u.createdAt)}</Td>
                                        <Td align="right">
                                            <Button size="sm" variant="outline" className="h-8" onClick={() => setTarget(u)}>
                                                <CalendarPlus />
                                                Tambah masa
                                            </Button>
                                        </Td>
                                    </Tr>
                                );
                            })}
                        </tbody>
                    </DataTable>
                    <Pagination paginator={users} />
                </Panel>
            </AdminPage>

            <GrantDialog user={target} plans={plans} onClose={() => setTarget(null)} />
        </AppLayout>
    );
}

function GrantDialog({ user, plans, onClose }: { user: Subscriber | null; plans: Props['plans']; onClose: () => void }) {
    const form = useForm<{ days: string; plan_id: string; note: string }>({ days: '30', plan_id: '', note: '' });

    const close = () => {
        form.reset();
        form.clearErrors();
        onClose();
    };

    const submit = (e: FormEvent) => {
        e.preventDefault();
        if (!user) return;
        form.transform((d) => ({ days: Number(d.days), plan_id: d.plan_id ? Number(d.plan_id) : null, note: d.note }));
        form.post(route('admin.subscribers.grant', user.id), { preserveScroll: true, onSuccess: close });
    };

    return (
        <Dialog open={!!user} onOpenChange={(o) => !o && close()}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Tambah masa langganan</DialogTitle>
                    <DialogDescription>
                        Untuk <span className="text-foreground font-medium">{user?.name}</span> ({user?.email}). Dipakai untuk transfer bank manual,
                        kompensasi, atau sekolah mitra.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={submit} className="grid gap-4">
                    <div className="grid gap-1.5">
                        <Label htmlFor="grant-days">Jumlah hari</Label>
                        <div className="flex flex-wrap items-center gap-2">
                            <Input
                                id="grant-days"
                                type="number"
                                min={1}
                                max={730}
                                inputMode="numeric"
                                className="w-28 tabular-nums"
                                value={form.data.days}
                                onChange={(e) => form.setData('days', e.target.value)}
                                required
                            />
                            {[7, 30, 90, 365].map((d) => (
                                <Button key={d} type="button" size="sm" variant={form.data.days === String(d) ? 'secondary' : 'ghost'} className="h-8 px-2.5" onClick={() => form.setData('days', String(d))}>
                                    {d} hari
                                </Button>
                            ))}
                        </div>
                        <InputError message={form.errors.days} />
                    </div>
                    <div className="grid gap-1.5">
                        <Label htmlFor="grant-plan">Paket (opsional)</Label>
                        <select id="grant-plan" className={nativeSelectClass} value={form.data.plan_id} onChange={(e) => form.setData('plan_id', e.target.value)}>
                            <option value="">Pertahankan paket saat ini</option>
                            {plans.map((p) => (
                                <option key={p.id} value={p.id}>
                                    {p.name}
                                </option>
                            ))}
                        </select>
                        <InputError message={form.errors.plan_id} />
                    </div>
                    <div className="grid gap-1.5">
                        <Label htmlFor="grant-note">Catatan</Label>
                        <Input
                            id="grant-note"
                            maxLength={200}
                            placeholder="mis. Transfer BCA 20 Okt, kompensasi gangguan"
                            value={form.data.note}
                            onChange={(e) => form.setData('note', e.target.value)}
                            required
                        />
                        <InputError message={form.errors.note} />
                    </div>
                    <DialogFooter className="gap-2 sm:gap-0">
                        <Button type="button" variant="ghost" onClick={close}>
                            Batal
                        </Button>
                        <Button type="submit" disabled={form.processing}>
                            {form.processing ? 'Menyimpan…' : `Tambah ${form.data.days || 0} hari`}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
