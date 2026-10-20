/* Animasi langkah aljabar: baris demi baris muncul, operasi yang dilakukan ditempel di samping (seperti timbangan). */
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { MathText } from '../MathText';
import { AnimFrame } from './frame';

export interface PersamaanSpec {
    /** setiap baris: ekspresi LaTeX (tanpa $), keterangan, dan operasi opsional ("kedua ruas − 3") */
    baris: { tex: string; say: string; op?: string }[];
    title?: string;
}

export function PersamaanAnim({ baris, title }: PersamaanSpec) {
    return (
        <AnimFrame title={title ?? 'Animasi langkah demi langkah'} steps={baris.map((b, k) => ({ say: b.say, tag: k === 0 ? 'Mulai' : k === baris.length - 1 ? 'Hasil' : `Langkah ${k}` }))} interval={2600}>
            {(i) => (
                <div className="flex w-full max-w-md flex-col gap-2">
                    {baris.slice(0, i + 1).map((b, k) => (
                        <motion.div key={k} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                            className={cn('flex items-center gap-3 rounded-xl px-3 py-2 transition-colors', k === i ? 'bg-amber-100 dark:bg-amber-900/40' : 'bg-white/70 dark:bg-slate-800/60', k === baris.length - 1 && k === i && 'bg-emerald-100 dark:bg-emerald-900/40')}>
                            <MathText className="flex-1 text-center text-lg sm:text-xl">{`$${b.tex}$`}</MathText>
                            {b.op && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex-none rounded-full bg-violet-600 px-2.5 py-0.5 text-xs font-bold whitespace-nowrap text-white"><MathText>{!b.op.includes('$') && /[\\^_]/.test(b.op) ? `$${b.op}$` : b.op}</MathText></motion.span>}
                        </motion.div>
                    ))}
                </div>
            )}
        </AnimFrame>
    );
}
