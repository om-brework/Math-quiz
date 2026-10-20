import { Delete } from 'lucide-react';

/** Papan angka di layar untuk widget susun (ramah tablet; papan ketik fisik juga bisa dipakai). */
export function Keypad({ onDigit, onErase, disabled }: { onDigit: (d: string) => void; onErase: () => void; disabled?: boolean }) {
    return (
        <div className="grid w-full max-w-sm grid-cols-6 gap-2" role="group" aria-label="Papan angka">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((d) => (
                <button
                    key={d}
                    type="button"
                    disabled={disabled}
                    onClick={() => onDigit(d)}
                    className="h-12 rounded-xl border-2 border-b-4 border-slate-200 bg-white text-2xl font-bold text-slate-800 active:translate-y-0.5 disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                >
                    {d}
                </button>
            ))}
            <button
                type="button"
                disabled={disabled}
                onClick={onErase}
                aria-label="Hapus"
                className="col-start-6 row-span-2 row-start-1 flex items-center justify-center rounded-xl border-2 border-b-4 border-rose-200 bg-rose-50 text-rose-600 disabled:opacity-40 dark:border-rose-900 dark:bg-rose-950"
            >
                <Delete className="size-6" />
            </button>
        </div>
    );
}
