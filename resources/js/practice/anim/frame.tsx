/* Bingkai animasi materi: gambar + keterangan per langkah, dengan tombol mundur / putar / maju / ulang.
   Setiap animasi hanyalah daftar "keadaan" (step) yang digambar ulang; transisi antar-keadaan dihaluskan oleh motion. */
import { cn } from '@/lib/utils';
import { Pause, Play, RotateCcw, SkipBack, SkipForward } from 'lucide-react';
import { MotionConfig } from 'motion/react';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { MathText } from '../MathText';

export interface AnimStep {
    /** keterangan di bawah gambar (boleh LaTeX) */
    say: string;
    /** sorotan kecil di atas keterangan, misalnya "Langkah 2: Kali" */
    tag?: string;
}

export function AnimFrame({ title, steps, children, auto = true, interval = 2200 }: {
    title?: string;
    steps: AnimStep[];
    /** gambar untuk langkah ke-i */
    children: (i: number) => ReactNode;
    auto?: boolean;
    interval?: number;
}) {
    const [i, setI] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [seen, setSeen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const last = steps.length - 1;

    // mulai otomatis sekali saat pertama kali terlihat di layar
    useEffect(() => {
        if (!auto || seen || !ref.current) return;
        const io = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setSeen(true); setPlaying(true); io.disconnect(); }
        }, { threshold: 0.6 });
        io.observe(ref.current);
        return () => io.disconnect();
    }, [auto, seen]);

    useEffect(() => {
        if (!playing) return;
        if (i >= last) { setPlaying(false); return; }
        const t = setTimeout(() => setI((x) => Math.min(last, x + 1)), interval);
        return () => clearTimeout(t);
    }, [playing, i, last, interval]);

    const step = steps[i];
    const btn = 'flex size-10 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300';
    return (
        <MotionConfig reducedMotion="user">
            <figure ref={ref} className="anim not-prose my-5 overflow-hidden rounded-3xl border-2 border-sky-100 bg-gradient-to-b from-sky-50 to-white dark:border-slate-700 dark:from-slate-900 dark:to-slate-950">
                {title && <figcaption className="flex items-center gap-2 px-4 pt-3 text-xs font-bold tracking-wide text-sky-700 uppercase dark:text-sky-300">
                    <Play className="size-3.5 fill-current" /> {title}
                </figcaption>}
                <div className="flex min-h-40 items-center justify-center px-3 py-4">{children(i)}</div>
                <div className="border-t-2 border-sky-100 bg-white/70 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/60">
                    <div className="min-h-12 text-center" aria-live="polite">
                        {step.tag && <span className="mb-1 inline-block rounded-full bg-sky-600 px-2.5 py-0.5 text-xs font-bold text-white">{step.tag}</span>}
                        <MathText className="block text-base leading-snug font-semibold text-slate-800 sm:text-lg dark:text-slate-100">{step.say}</MathText>
                    </div>
                    <div className="mt-3 flex items-center justify-center gap-2">
                        <button type="button" className={btn} onClick={() => { setPlaying(false); setI(Math.max(0, i - 1)); }} disabled={i === 0} aria-label="Langkah sebelumnya"><SkipBack className="size-4" /></button>
                        {i < last ? (
                            <button type="button" className="flex h-10 items-center gap-1.5 rounded-full bg-sky-600 px-4 font-bold text-white shadow-[0_3px_0_#0369a1] active:translate-y-0.5" onClick={() => setPlaying(!playing)}>
                                {playing ? <><Pause className="size-4" /> Jeda</> : <><Play className="size-4 fill-current" /> Putar</>}
                            </button>
                        ) : (
                            <button type="button" className="flex h-10 items-center gap-1.5 rounded-full bg-emerald-600 px-4 font-bold text-white shadow-[0_3px_0_#047857] active:translate-y-0.5" onClick={() => { setI(0); setPlaying(true); }}>
                                <RotateCcw className="size-4" /> Ulang
                            </button>
                        )}
                        <button type="button" className={btn} onClick={() => { setPlaying(false); setI(Math.min(last, i + 1)); }} disabled={i === last} aria-label="Langkah berikutnya"><SkipForward className="size-4" /></button>
                    </div>
                    <div className="mt-2 flex justify-center gap-1" aria-hidden="true">
                        {steps.map((_, k) => <i key={k} className={cn('h-1.5 rounded-full transition-all', k === i ? 'w-5 bg-sky-500' : k < i ? 'w-1.5 bg-sky-300' : 'w-1.5 bg-slate-200 dark:bg-slate-700')} />)}
                    </div>
                </div>
            </figure>
        </MotionConfig>
    );
}

/** Angka yang "meletup" saat muncul atau berubah. */
export const pop = { initial: { scale: 0.3, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { type: 'spring' as const, stiffness: 420, damping: 20 } };
