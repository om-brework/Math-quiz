import type { Rng } from './types';

/** RNG berbenih (mulberry32): seed yang sama selalu menghasilkan soal yang sama. */
export function makeRng(seed: number): Rng {
    let s = seed >>> 0;
    const next = () => {
        s = (s + 0x6d2b79f5) >>> 0;
        let t = s;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const int = (a: number, b: number) => a + Math.floor(next() * (b - a + 1));
    return {
        int,
        pick: (list) => list[int(0, list.length - 1)],
        shuffle: (list) => {
            const out = [...list];
            for (let i = out.length - 1; i > 0; i--) {
                const j = int(0, i);
                [out[i], out[j]] = [out[j], out[i]];
            }
            return out;
        },
        chance: (p) => next() < p,
    };
}

export const newSeed = () => Math.floor(Math.random() * 2 ** 31);
