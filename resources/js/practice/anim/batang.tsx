/* Animasi model batang (bar model): batang muncul satu per satu, lalu kurung kurawal total/ditanya. */
import { motion } from 'motion/react';
import { BarModel } from '../visuals/numbers';
import { AnimFrame } from './frame';

export interface BatangSpec {
    bars: { label: string; units: number; unitValue?: string; known?: string }[];
    total?: string;
    question?: string;
    /** langkah: berapa batang tampak, apakah total/tanya tampak, dan keterangannya */
    langkah: { say: string; bars: number; total?: boolean; question?: boolean }[];
    title?: string;
}

export function BatangAnim({ bars, total, question, langkah, title }: BatangSpec) {
    return (
        <AnimFrame title={title ?? 'Animasi model batang'} steps={langkah} interval={2500}>
            {(i) => {
                const s = langkah[i];
                return (
                    <motion.div key={i} initial={{ opacity: 0.4 }} animate={{ opacity: 1 }} className="w-full">
                        <BarModel bars={bars.slice(0, Math.max(1, s.bars))} total={s.total ? total : undefined} question={s.question ? question : undefined} />
                    </motion.div>
                );
            }}
        </AnimFrame>
    );
}
