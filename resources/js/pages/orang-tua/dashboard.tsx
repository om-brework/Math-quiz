import { AVATAR_LABEL, AvatarAnak, AVATARS } from '@/components/avatar-anak';
import InputError from '@/components/input-error';
import { waktuRelatif } from '@/components/ortu-ui';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { tanggal } from '@/lib/format';
import { cn } from '@/lib/utils';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { BarChart3, BookOpen, CalendarClock, KeyRound, Pencil, Plus, Sparkles, Trash2, TriangleAlert } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

interface Student {
    id: number;
    name: string;
    grade: string;
    gradeName: string;
    username: string;
    avatar: string;
    lastActive: string | null;
    week: { questions: number; accuracy: number | null };
}

interface Subscription {
    status: string;
    plan: string | null;
    endsAt: string;
    daysLeft: number;
}

interface Props {
    students: Student[];
    subscription: Subscription | null;
    maxStudents: number;
    grades: Record<string, string>;
}

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Beranda', href: '/orang-tua' }];

export default function Dashboard({ students, subscription, maxStudents, grades }: Props) {
    const [adding, setAdding] = useState(false);
    const [editing, setEditing] = useState<Student | null>(null);
    const [deleting, setDeleting] = useState<Student | null>(null);
    const full = students.length >= maxStudents;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Beranda orang tua" />
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 p-4 md:p-6">
                <SubscriptionCard sub={subscription} />

                <section className="space-y-4">
                    <div className="flex flex-wrap items-end justify-between gap-3">
                        <div>
                            <h1 className="font-display text-2xl font-bold">Anak-anak</h1>
                            <p className="text-muted-foreground text-sm">
                                {students.length} dari {maxStudents} akun anak dipakai.
                            </p>
                        </div>
                        <Button onClick={() => setAdding(true)} disabled={full}>
                            <Plus className="size-4" /> Tambah anak
                        </Button>
                    </div>
                    {full && (
                        <p className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
                            Paket Anda dibatasi {maxStudents} anak. Untuk menambah anak, pilih paket yang lebih besar di{' '}
                            <Link href={route('billing.index')} className="font-semibold underline underline-offset-2">
                                halaman langganan
                            </Link>
                            .
                        </p>
                    )}

                    {students.length === 0 ? (
                        <div className="rounded-2xl border-2 border-dashed p-8 text-center">
                            <div className="mx-auto mb-3 flex w-fit gap-1">
                                <AvatarAnak name="roket" className="size-10" />
                                <AvatarAnak name="bunga" className="size-10" />
                                <AvatarAnak name="paus" className="size-10" />
                            </div>
                            <h2 className="font-display text-lg font-semibold">Buat akun pertama untuk anak Anda</h2>
                            <p className="text-muted-foreground mx-auto mt-1 max-w-md text-sm">
                                Cukup nama, kelas, username, dan PIN. Anak tidak perlu email.
                            </p>
                            <Button className="mt-4" onClick={() => setAdding(true)} disabled={full}>
                                <Plus className="size-4" /> Tambah anak
                            </Button>
                        </div>
                    ) : (
                        <div className="grid gap-4 md:grid-cols-2">
                            {students.map((s) => (
                                <ChildCard key={s.id} s={s} onEdit={() => setEditing(s)} onDelete={() => setDeleting(s)} />
                            ))}
                        </div>
                    )}
                </section>

                <section className="bg-brand-50 text-brand-700 dark:bg-brand-700/15 dark:text-brand-100 flex gap-4 rounded-2xl p-5">
                    <KeyRound className="mt-0.5 size-5 shrink-0" />
                    <div className="space-y-1 text-sm">
                        <h2 className="font-display text-base font-semibold">Cara anak masuk sendiri</h2>
                        <p>
                            Di perangkat anak, buka halaman{' '}
                            <a href="/masuk-siswa" className="font-semibold underline underline-offset-2">
                                Masuk siswa
                            </a>{' '}
                            (alamat <span className="font-mono">/masuk-siswa</span>), lalu ketik <b>username</b> dan <b>PIN</b> yang Anda buat di
                            sini. Di perangkat Anda sendiri, cukup tekan <b>Buka mode belajar</b> — tidak perlu PIN.
                        </p>
                    </div>
                </section>
            </div>

            <StudentDialog open={adding} onOpenChange={setAdding} grades={grades} />
            <StudentDialog open={!!editing} onOpenChange={(o) => !o && setEditing(null)} grades={grades} student={editing ?? undefined} />
            <DeleteDialog student={deleting} onClose={() => setDeleting(null)} />
        </AppLayout>
    );
}

function SubscriptionCard({ sub }: { sub: Subscription | null }) {
    if (!sub) {
        return (
            <section className="flex flex-col gap-4 rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:flex-row sm:items-center dark:border-amber-800 dark:bg-amber-950/40">
                <TriangleAlert className="size-8 shrink-0 text-amber-600 dark:text-amber-400" />
                <div className="flex-1">
                    <h2 className="font-display text-lg font-bold text-amber-950 dark:text-amber-100">Langganan belum aktif</h2>
                    <p className="text-sm text-amber-900 dark:text-amber-200">
                        Anak-anak belum bisa membuka latihan. Riwayat dan laporan tetap tersimpan — aktifkan paket untuk melanjutkan belajar.
                    </p>
                </div>
                <Button asChild className="shrink-0">
                    <Link href={route('billing.index')}>Pilih paket</Link>
                </Button>
            </section>
        );
    }

    const trial = sub.status === 'trial';
    const soon = sub.daysLeft <= 3;
    return (
        <section
            className={cn(
                'flex flex-col gap-4 rounded-2xl border p-5 sm:flex-row sm:items-center',
                soon ? 'border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/40' : 'bg-card',
            )}
        >
            <div
                className={cn(
                    'flex size-12 shrink-0 items-center justify-center rounded-xl',
                    trial ? 'bg-sun-300/40 text-amber-700' : 'bg-brand-100 text-brand-700',
                )}
            >
                {trial ? <Sparkles className="size-6" /> : <CalendarClock className="size-6" />}
            </div>
            <div className="flex-1">
                <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    {trial ? 'Masa coba gratis' : `Paket ${sub.plan ?? ''}`}
                </p>
                <h2 className="font-display text-xl font-bold">{sub.daysLeft <= 0 ? 'Berakhir hari ini' : `Sisa ${sub.daysLeft} hari`}</h2>
                <p className="text-muted-foreground text-sm">
                    Aktif sampai {tanggal(sub.endsAt)}.{' '}
                    {trial
                        ? 'Setelah masa coba habis, pilih paket agar anak tetap bisa berlatih.'
                        : soon
                          ? 'Perpanjang sekarang; masa baru ditambahkan setelah masa ini berakhir.'
                          : ''}
                </p>
            </div>
            <Button asChild variant={trial || soon ? 'default' : 'outline'} className="shrink-0">
                <Link href={route('billing.index')}>{trial ? 'Lihat paket' : 'Perpanjang'}</Link>
            </Button>
        </section>
    );
}

function ChildCard({ s, onEdit, onDelete }: { s: Student; onEdit: () => void; onDelete: () => void }) {
    const acc = s.week.accuracy;
    return (
        <article className="bg-card flex flex-col gap-4 rounded-2xl border p-5 shadow-xs">
            <div className="flex items-center gap-3">
                <AvatarAnak name={s.avatar} className="size-14" />
                <div className="min-w-0 flex-1">
                    <h3 className="font-display truncate text-xl leading-tight font-bold">{s.name}</h3>
                    <p className="text-muted-foreground text-sm">
                        {s.gradeName} · <span className="font-mono">@{s.username}</span>
                    </p>
                </div>
                <div className="flex gap-1">
                    <Button variant="ghost" size="icon" onClick={onEdit} aria-label={`Ubah data ${s.name}`}>
                        <Pencil className="size-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onDelete}
                        aria-label={`Hapus akun ${s.name}`}
                        className="text-muted-foreground hover:text-red-600"
                    >
                        <Trash2 className="size-4" />
                    </Button>
                </div>
            </div>

            <dl className="grid grid-cols-3 gap-2 rounded-xl bg-zinc-50 p-3 text-center dark:bg-zinc-900">
                <div>
                    <dt className="text-muted-foreground text-xs">Soal 7 hari</dt>
                    <dd className="font-display text-xl font-bold">{s.week.questions}</dd>
                </div>
                <div>
                    <dt className="text-muted-foreground text-xs">Benar</dt>
                    <dd
                        className={cn(
                            'font-display text-xl font-bold',
                            acc === null ? 'text-muted-foreground' : acc >= 80 ? 'text-emerald-600' : acc < 60 ? 'text-amber-600' : '',
                        )}
                    >
                        {acc === null ? '—' : `${acc}%`}
                    </dd>
                </div>
                <div>
                    <dt className="text-muted-foreground text-xs">Terakhir aktif</dt>
                    <dd className="mt-1 text-sm font-semibold">{waktuRelatif(s.lastActive)}</dd>
                </div>
            </dl>

            <div className="flex flex-wrap gap-2">
                <Button asChild className="flex-1">
                    <Link href={route('students.report', s.id)}>
                        <BarChart3 className="size-4" /> Lihat laporan
                    </Link>
                </Button>
                <Button variant="outline" className="flex-1" onClick={() => router.post(route('students.switch', s.id))}>
                    <BookOpen className="size-4" /> Buka mode belajar
                </Button>
            </div>
        </article>
    );
}

type StudentForm = {
    name: string;
    grade: string;
    username: string;
    pin: string;
    avatar: string;
};

function StudentDialog({
    open,
    onOpenChange,
    grades,
    student,
}: {
    open: boolean;
    onOpenChange: (o: boolean) => void;
    grades: Record<string, string>;
    student?: Student;
}) {
    const editing = !!student;
    const { data, setData, post, put, processing, errors, reset, clearErrors } = useForm<StudentForm>({
        name: '',
        grade: 'sd1',
        username: '',
        pin: '',
        avatar: 'bintang',
    });
    const [lastKey, setLastKey] = useState<string>('');
    const key = `${open}-${student?.id ?? 'new'}`;
    if (key !== lastKey) {
        setLastKey(key);
        if (open) {
            clearErrors();
            setData(
                student
                    ? { name: student.name, grade: student.grade, username: student.username, pin: '', avatar: student.avatar || 'bintang' }
                    : { name: '', grade: 'sd1', username: '', pin: '', avatar: 'bintang' },
            );
        }
    }

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        const opts = {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                onOpenChange(false);
            },
        };
        if (student) put(route('students.update', student.id), opts);
        else post(route('students.store'), opts);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-h-[92svh] overflow-y-auto sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle className="font-display text-xl">{editing ? `Ubah data ${student.name}` : 'Tambah anak'}</DialogTitle>
                    <DialogDescription>
                        {editing ? 'Kosongkan PIN jika tidak ingin menggantinya.' : 'Anak akan masuk dengan username dan PIN ini. Tidak perlu email.'}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={submit} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="s-name">Nama panggilan</Label>
                        <Input
                            id="s-name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="mis. Putu"
                            required
                            maxLength={60}
                        />
                        <InputError message={errors.name} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="s-grade">Kelas</Label>
                        <select
                            id="s-grade"
                            value={data.grade}
                            onChange={(e) => setData('grade', e.target.value)}
                            className="border-input bg-background focus-visible:ring-ring/50 h-9 rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-[3px]"
                        >
                            {Object.entries(grades).map(([k, v]) => (
                                <option key={k} value={k}>
                                    {v}
                                </option>
                            ))}
                        </select>
                        <InputError message={errors.grade} />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="grid gap-2">
                            <Label htmlFor="s-username">Username</Label>
                            <Input
                                id="s-username"
                                value={data.username}
                                onChange={(e) => setData('username', e.target.value.toLowerCase().replace(/\s/g, ''))}
                                placeholder="mis. putu.cerdas"
                                autoCapitalize="none"
                                autoComplete="off"
                                required
                                minLength={3}
                                maxLength={40}
                            />
                            <p className="text-muted-foreground text-xs">Huruf kecil, angka, titik, atau garis bawah.</p>
                            <InputError message={errors.username} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="s-pin">PIN {editing && <span className="text-muted-foreground font-normal">(opsional)</span>}</Label>
                            <Input
                                id="s-pin"
                                value={data.pin}
                                onChange={(e) => setData('pin', e.target.value.replace(/\D/g, '').slice(0, 6))}
                                inputMode="numeric"
                                pattern="\d{4,6}"
                                placeholder={editing ? '••••' : '4–6 angka'}
                                autoComplete="off"
                                required={!editing}
                            />
                            <p className="text-muted-foreground text-xs">4–6 angka yang mudah diingat anak.</p>
                            <InputError message={errors.pin} />
                        </div>
                    </div>
                    <fieldset className="grid gap-2">
                        <legend className="mb-2 text-sm font-medium">Pilih gambar</legend>
                        <div className="grid grid-cols-4 gap-2">
                            {AVATARS.map((a) => (
                                <button
                                    type="button"
                                    key={a}
                                    onClick={() => setData('avatar', a)}
                                    aria-pressed={data.avatar === a}
                                    className={cn(
                                        'flex flex-col items-center gap-1 rounded-xl border-2 p-2 text-xs transition',
                                        data.avatar === a ? 'border-primary bg-brand-50 dark:bg-brand-700/20' : 'hover:bg-muted border-transparent',
                                    )}
                                >
                                    <AvatarAnak name={a} className="size-11" />
                                    {AVATAR_LABEL[a]}
                                </button>
                            ))}
                        </div>
                        <InputError message={errors.avatar} />
                    </fieldset>
                    <DialogFooter className="gap-2">
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                Batal
                            </Button>
                        </DialogClose>
                        <Button type="submit" disabled={processing}>
                            {editing ? 'Simpan perubahan' : 'Buat akun anak'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

function DeleteDialog({ student, onClose }: { student: Student | null; onClose: () => void }) {
    const [busy, setBusy] = useState(false);
    return (
        <Dialog open={!!student} onOpenChange={(o) => !o && onClose()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="font-display text-xl">Hapus akun {student?.name}?</DialogTitle>
                    <DialogDescription>
                        Semua riwayat latihan, laporan, dan kemajuan {student?.name} akan ikut terhapus dan tidak bisa dikembalikan.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="gap-2">
                    <DialogClose asChild>
                        <Button variant="outline">Batal</Button>
                    </DialogClose>
                    <Button
                        variant="destructive"
                        disabled={busy}
                        onClick={() => {
                            if (!student) return;
                            setBusy(true);
                            router.delete(route('students.destroy', student.id), {
                                preserveScroll: true,
                                onFinish: () => {
                                    setBusy(false);
                                    onClose();
                                },
                            });
                        }}
                    >
                        Ya, hapus
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
