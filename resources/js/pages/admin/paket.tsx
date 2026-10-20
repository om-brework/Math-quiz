import { AdminPage, DataTable, EmptyRow, PageHeader, Panel, Td, textareaClass, Th, Tr } from '@/components/admin/kit';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { angka, periode, rupiah } from '@/lib/format';
import { cn } from '@/lib/utils';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Pencil, Plus } from 'lucide-react';
import { FormEvent, useState } from 'react';

interface Plan {
    id: number;
    slug: string;
    name: string;
    description: string | null;
    price: number;
    period_months: number;
    max_students: number;
    features: string[] | null;
    is_active: boolean;
    sort: number;
    active: number;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin', href: '/admin' },
    { title: 'Paket', href: '/admin/paket' },
];

type Editing = { mode: 'create' } | { mode: 'edit'; plan: Plan } | null;

export default function Paket({ plans }: { plans: Plan[] }) {
    const [editing, setEditing] = useState<Editing>(null);
    const totalActive = plans.reduce((s, p) => s + p.active, 0);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Paket langganan" />
            <AdminPage>
                <PageHeader
                    title="Paket langganan"
                    description={`${plans.filter((p) => p.is_active).length} paket dijual · ${angka(totalActive)} langganan aktif`}
                    actions={
                        <Button onClick={() => setEditing({ mode: 'create' })}>
                            <Plus />
                            Tambah paket
                        </Button>
                    }
                />

                <Panel>
                    <DataTable minWidth={800}>
                        <thead>
                            <tr>
                                <Th>Paket</Th>
                                <Th align="right">Harga</Th>
                                <Th align="right">Per bulan</Th>
                                <Th>Periode</Th>
                                <Th align="center">Maks. anak</Th>
                                <Th>Status</Th>
                                <Th align="right">Aktif</Th>
                                <Th align="right">
                                    <span className="sr-only">Aksi</span>
                                </Th>
                            </tr>
                        </thead>
                        <tbody>
                            {plans.length === 0 && <EmptyRow colSpan={8}>Belum ada paket. Tambahkan paket pertama.</EmptyRow>}
                            {plans.map((p) => (
                                <Tr key={p.id} className={cn(!p.is_active && 'opacity-70')}>
                                    <Td className="min-w-52">
                                        <div className="font-medium">{p.name}</div>
                                        <div className="text-muted-foreground text-xs leading-snug">
                                            <span className="font-mono">{p.slug}</span>
                                            {p.description && <> · {p.description}</>}
                                        </div>
                                    </Td>
                                    <Td align="right" className="font-medium whitespace-nowrap">
                                        {rupiah(p.price)}
                                    </Td>
                                    <Td align="right" className="text-muted-foreground whitespace-nowrap">
                                        {rupiah(Math.round(p.price / Math.max(1, p.period_months)))}
                                    </Td>
                                    <Td className="whitespace-nowrap">{periode(p.period_months)}</Td>
                                    <Td align="center">{p.max_students}</Td>
                                    <Td>
                                        <span
                                            className={cn(
                                                'inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-semibold whitespace-nowrap ring-1 ring-inset',
                                                p.is_active
                                                    ? 'bg-emerald-100 text-emerald-800 ring-emerald-600/20 dark:bg-emerald-400/10 dark:text-emerald-300 dark:ring-emerald-400/25'
                                                    : 'bg-zinc-100 text-zinc-700 ring-zinc-500/20 dark:bg-zinc-400/10 dark:text-zinc-300 dark:ring-zinc-400/25',
                                            )}
                                        >
                                            <span className={cn('size-1.5 rounded-full', p.is_active ? 'bg-emerald-500' : 'bg-zinc-400')} />
                                            {p.is_active ? 'Dijual' : 'Nonaktif'}
                                        </span>
                                    </Td>
                                    <Td align="right" className="font-medium">
                                        {angka(p.active)}
                                    </Td>
                                    <Td align="right">
                                        <Button size="sm" variant="outline" className="h-8" onClick={() => setEditing({ mode: 'edit', plan: p })}>
                                            <Pencil />
                                            Ubah
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </tbody>
                    </DataTable>
                </Panel>
                <p className="text-muted-foreground -mt-3 text-xs">
                    Perubahan harga hanya berlaku untuk pembayaran berikutnya. Paket nonaktif tidak tampil di halaman harga, tetapi langganan yang
                    sudah berjalan tetap berlaku.
                </p>
            </AdminPage>

            {editing && <PlanDialog key={editing.mode === 'edit' ? editing.plan.id : 'new'} editing={editing} nextSort={plans.length + 1} onClose={() => setEditing(null)} />}
        </AppLayout>
    );
}

type PlanForm = {
    slug: string;
    name: string;
    description: string;
    price: string;
    period_months: string;
    max_students: string;
    features: string;
    is_active: boolean;
    sort: string;
};

function slugify(s: string): string {
    return s
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 40);
}

function PlanDialog({ editing, nextSort, onClose }: { editing: NonNullable<Editing>; nextSort: number; onClose: () => void }) {
    const plan = editing.mode === 'edit' ? editing.plan : null;
    const [slugTouched, setSlugTouched] = useState(!!plan);
    const [open, setOpen] = useState(true);
    const form = useForm<PlanForm>({
        slug: plan?.slug ?? '',
        name: plan?.name ?? '',
        description: plan?.description ?? '',
        price: plan ? String(plan.price) : '',
        period_months: plan ? String(plan.period_months) : '1',
        max_students: plan ? String(plan.max_students) : '1',
        features: (plan?.features ?? []).join('\n'),
        is_active: plan?.is_active ?? true,
        sort: String(plan?.sort ?? nextSort),
    });

    const close = () => {
        setOpen(false);
        setTimeout(onClose, 150);
    };

    const submit = (e: FormEvent) => {
        e.preventDefault();
        form.transform((d) => ({
            ...d,
            price: Number(d.price),
            period_months: Number(d.period_months),
            max_students: Number(d.max_students),
            sort: Number(d.sort || 0),
        }));
        const opts = { preserveScroll: true, onSuccess: close };
        if (plan) form.put(route('admin.plans.update', plan.id), opts);
        else form.post(route('admin.plans.store'), opts);
    };

    const price = Number(form.data.price) || 0;
    const months = Math.max(1, Number(form.data.period_months) || 1);
    const e = form.errors;

    return (
        <Dialog open={open} onOpenChange={(o) => !o && close()}>
            <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-xl">
                <DialogHeader>
                    <DialogTitle>{plan ? `Ubah paket “${plan.name}”` : 'Tambah paket'}</DialogTitle>
                    <DialogDescription>
                        {plan ? 'Langganan yang sudah dibayar tidak berubah.' : 'Paket baru langsung tampil di halaman harga bila aktif.'}
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={submit} className="grid gap-4" noValidate>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Field id="plan-name" label="Nama paket" error={e.name}>
                            <Input
                                id="plan-name"
                                value={form.data.name}
                                maxLength={80}
                                onChange={(ev) => {
                                    form.setData((d) => ({ ...d, name: ev.target.value, slug: slugTouched ? d.slug : slugify(ev.target.value) }));
                                }}
                                placeholder="mis. Keluarga 6 bulan"
                                required
                            />
                        </Field>
                        <Field id="plan-slug" label="Slug" error={e.slug} hint="huruf kecil, angka, tanda -">
                            <Input
                                id="plan-slug"
                                className="font-mono"
                                value={form.data.slug}
                                maxLength={40}
                                onChange={(ev) => {
                                    setSlugTouched(true);
                                    form.setData('slug', ev.target.value);
                                }}
                                placeholder="keluarga-6-bulan"
                                required
                            />
                        </Field>
                    </div>

                    <Field id="plan-desc" label="Deskripsi singkat" error={e.description}>
                        <Input id="plan-desc" value={form.data.description} maxLength={255} onChange={(ev) => form.setData('description', ev.target.value)} />
                    </Field>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        <Field id="plan-price" label="Harga (Rp)" error={e.price} className="col-span-2 sm:col-span-1">
                            <Input
                                id="plan-price"
                                type="number"
                                min={1000}
                                step={1000}
                                inputMode="numeric"
                                className="tabular-nums"
                                value={form.data.price}
                                onChange={(ev) => form.setData('price', ev.target.value)}
                                required
                            />
                        </Field>
                        <Field id="plan-period" label="Periode (bulan)" error={e.period_months}>
                            <Input
                                id="plan-period"
                                type="number"
                                min={1}
                                max={36}
                                className="tabular-nums"
                                value={form.data.period_months}
                                onChange={(ev) => form.setData('period_months', ev.target.value)}
                                required
                            />
                        </Field>
                        <Field id="plan-max" label="Maks. anak" error={e.max_students}>
                            <Input
                                id="plan-max"
                                type="number"
                                min={1}
                                max={20}
                                className="tabular-nums"
                                value={form.data.max_students}
                                onChange={(ev) => form.setData('max_students', ev.target.value)}
                                required
                            />
                        </Field>
                    </div>
                    {price > 0 && (
                        <p className="text-muted-foreground -mt-2 text-xs tabular-nums">
                            {rupiah(price)} / {periode(months)} ≈ <span className="text-foreground font-medium">{rupiah(Math.round(price / months))}</span> per bulan
                        </p>
                    )}

                    <Field id="plan-features" label="Fitur" error={e.features} hint="satu fitur per baris">
                        <textarea
                            id="plan-features"
                            rows={4}
                            className={textareaClass}
                            value={form.data.features}
                            onChange={(ev) => form.setData('features', ev.target.value)}
                            placeholder={'Semua topik SD–SMP\nLaporan kemajuan mingguan'}
                        />
                    </Field>

                    <div className="flex flex-wrap items-end gap-6">
                        <Field id="plan-sort" label="Urutan" error={e.sort} className="w-24">
                            <Input id="plan-sort" type="number" min={0} className="tabular-nums" value={form.data.sort} onChange={(ev) => form.setData('sort', ev.target.value)} />
                        </Field>
                        <div className="flex items-center gap-2 pb-2">
                            <Checkbox id="plan-active" checked={form.data.is_active} onCheckedChange={(c) => form.setData('is_active', c === true)} />
                            <Label htmlFor="plan-active" className="cursor-pointer">
                                Aktif (dijual)
                            </Label>
                        </div>
                    </div>
                    <InputError message={e.is_active} />

                    <DialogFooter className="gap-2 sm:gap-0">
                        <Button type="button" variant="ghost" onClick={close}>
                            Batal
                        </Button>
                        <Button type="submit" disabled={form.processing}>
                            {form.processing ? 'Menyimpan…' : plan ? 'Simpan perubahan' : 'Tambah paket'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

function Field({ id, label, hint, error, children, className }: { id: string; label: string; hint?: string; error?: string; children: React.ReactNode; className?: string }) {
    return (
        <div className={cn('grid content-start gap-1.5', className)}>
            <Label htmlFor={id}>
                {label}
                {hint && <span className="text-muted-foreground ml-1 font-normal">({hint})</span>}
            </Label>
            {children}
            <InputError message={error} />
        </div>
    );
}
