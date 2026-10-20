/**
 * Helper format bersama (Rupiah, tanggal, status badge).
 * Dipakai oleh area admin dan orang tua — jaga agar ekspor tetap stabil.
 */

const rupiahFmt = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 });

/** 79000 → "Rp79.000" */
export function rupiah(n: number | string | null | undefined): string {
    const v = Number(n ?? 0);
    const sign = v < 0 ? '-' : '';
    return `${sign}Rp${rupiahFmt.format(Math.abs(Math.round(v)))}`;
}

/** Ringkas untuk sumbu grafik: 1500000 → "Rp1,5 jt", 250000 → "Rp250 rb" */
export function rupiahRingkas(n: number): string {
    const v = Math.abs(n);
    if (v >= 1_000_000_000) return `Rp${trim(n / 1_000_000_000)} M`;
    if (v >= 1_000_000) return `Rp${trim(n / 1_000_000)} jt`;
    if (v >= 1_000) return `Rp${trim(n / 1_000)} rb`;
    return `Rp${Math.round(n)}`;
}

function trim(v: number): string {
    return new Intl.NumberFormat('id-ID', { maximumFractionDigits: 1 }).format(v);
}

/** Angka biasa dengan pemisah ribuan Indonesia: 12345 → "12.345" */
export function angka(n: number | string | null | undefined): string {
    return rupiahFmt.format(Number(n ?? 0));
}

const BULAN = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

function toDate(iso: string | Date | null | undefined): Date | null {
    if (!iso) return null;
    if (iso instanceof Date) return iso;
    // "2026-10-20" tanpa jam → anggap tanggal lokal, bukan UTC
    const d = /^\d{4}-\d{2}-\d{2}$/.test(iso) ? new Date(`${iso}T00:00:00`) : new Date(iso);
    return Number.isNaN(d.getTime()) ? null : d;
}

/** "2026-10-20T..." → "20 Okt 2026" (null → "—") */
export function tanggal(iso: string | Date | null | undefined): string {
    const d = toDate(iso);
    if (!d) return '—';
    return `${d.getDate()} ${BULAN[d.getMonth()]} ${d.getFullYear()}`;
}

/** "2026-10-20T14:05" → "20 Okt 2026, 14.05" */
export function tanggalJam(iso: string | Date | null | undefined): string {
    const d = toDate(iso);
    if (!d) return '—';
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    return `${tanggal(d)}, ${hh}.${mm}`;
}

/** "20 Okt" (tanpa tahun) — untuk label sumbu */
export function tanggalPendek(iso: string | Date | null | undefined): string {
    const d = toDate(iso);
    if (!d) return '—';
    return `${d.getDate()} ${BULAN[d.getMonth()]}`;
}

export type StatusTone = 'amber' | 'green' | 'red' | 'gray' | 'teal' | 'blue';

export interface StatusInfo {
    label: string;
    tone: StatusTone;
}

const STATUS: Record<string, StatusInfo> = {
    // pembayaran
    pending: { label: 'Menunggu', tone: 'amber' },
    paid: { label: 'Lunas', tone: 'green' },
    settlement: { label: 'Lunas', tone: 'green' },
    failed: { label: 'Gagal', tone: 'red' },
    expired: { label: 'Kedaluwarsa', tone: 'gray' },
    refunded: { label: 'Dikembalikan', tone: 'gray' },
    // langganan
    trial: { label: 'Coba gratis', tone: 'blue' },
    active: { label: 'Aktif', tone: 'green' },
    cancelled: { label: 'Dibatalkan', tone: 'gray' },
    canceled: { label: 'Dibatalkan', tone: 'gray' },
    none: { label: 'Belum berlangganan', tone: 'gray' },
};

export function statusInfo(status: string | null | undefined): StatusInfo {
    if (!status) return STATUS.none;
    return STATUS[status] ?? { label: status, tone: 'gray' };
}

/** Kelas Tailwind untuk tiap nada (aman di mode gelap). */
export const toneClass: Record<StatusTone, string> = {
    amber: 'bg-amber-100 text-amber-800 ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-400/25',
    green: 'bg-emerald-100 text-emerald-800 ring-emerald-600/20 dark:bg-emerald-400/10 dark:text-emerald-300 dark:ring-emerald-400/25',
    red: 'bg-red-100 text-red-800 ring-red-600/20 dark:bg-red-400/10 dark:text-red-300 dark:ring-red-400/25',
    gray: 'bg-zinc-100 text-zinc-700 ring-zinc-500/20 dark:bg-zinc-400/10 dark:text-zinc-300 dark:ring-zinc-400/25',
    teal: 'bg-teal-100 text-teal-800 ring-teal-600/20 dark:bg-teal-400/10 dark:text-teal-300 dark:ring-teal-400/25',
    blue: 'bg-sky-100 text-sky-800 ring-sky-600/20 dark:bg-sky-400/10 dark:text-sky-300 dark:ring-sky-400/25',
};

/** Kelas lengkap badge status: `<span className={statusBadgeClass(s)}>{statusLabel(s)}</span>` */
export function statusBadgeClass(status: string | null | undefined): string {
    return `inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-xs font-semibold ring-1 ring-inset ${toneClass[statusInfo(status).tone]}`;
}

export function statusLabel(status: string | null | undefined): string {
    return statusInfo(status).label;
}

/** Periode paket: 1 → "1 bulan", 12 → "1 tahun" */
export function periode(months: number): string {
    if (months > 0 && months % 12 === 0) return `${months / 12} tahun`;
    return `${months} bulan`;
}
