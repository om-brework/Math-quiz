import { statusBadgeClass, statusLabel } from '@/lib/format';
import { cn } from '@/lib/utils';

/** Badge status pembayaran / langganan (pending, paid, failed, expired, refunded, trial, active, cancelled). */
export function StatusBadge({ status, className }: { status: string | null | undefined; className?: string }) {
    return <span className={cn(statusBadgeClass(status), className)}>{statusLabel(status)}</span>;
}
