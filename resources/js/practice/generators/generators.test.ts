/* Uji semua generator: tiap keterampilan × tingkat × 60 seed harus menghasilkan soal yang sah. */
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { checkFraction, columnPlan, divisionPlan, normalizeNumber } from '../check';
import { makeRng } from '../rng';
import type { Question } from '../types';
import { TOPICS } from './index';

const root = resolve(__dirname, '../../../..');
const kurikulum = JSON.parse(readFileSync(resolve(root, 'content/kurikulum.json'), 'utf8'));
const topicIds = new Set<string>(kurikulum.jenjang.flatMap((j: { topik: { id: string }[] }) => j.topik.map((t) => t.id)));
const errorCodes = new Set<string>(
    readdirSync(resolve(root, 'content/kesalahan')).flatMap((f) => Object.keys(JSON.parse(readFileSync(resolve(root, 'content/kesalahan', f), 'utf8')))),
);
const SEEDS = 60;

function build(topic: string, skill: string, level: 1 | 2 | 3, seed: number, gen: (typeof TOPICS)[number]['skills'][number]['gen']): Question {
    return { topic, skill, level, seed, ...gen(makeRng(seed), level) };
}

describe.each(TOPICS.map((t) => [t.topic, t] as const))('%s', (topic, def) => {
    it('terdaftar di kurikulum dan punya keterampilan', () => {
        expect(topicIds.has(topic)).toBe(true);
        expect(def.skills.length).toBeGreaterThan(0);
        expect(new Set(def.skills.map((s) => s.code)).size).toBe(def.skills.length);
    });

    for (const skill of def.skills) {
        for (const level of [1, 2, 3] as const) {
            it(`${skill.code} tingkat ${level}`, () => {
                const texts = new Set<string>();
                for (let seed = 1; seed <= SEEDS; seed++) {
                    const q = build(topic, skill.code, level, seed, skill.gen);
                    const where = `${skill.code} L${level} seed ${seed}: ${q.text}`;
                    texts.add(q.text + JSON.stringify(q.visual ?? null) + JSON.stringify(q.steps));
                    expect(q.text.trim().length, where).toBeGreaterThan(3);
                    expect(q.conclusion.trim().length, where).toBeGreaterThan(3);
                    expect(q.steps.length, where).toBeGreaterThan(0);
                    expect(JSON.stringify(q), where).not.toMatch(/NaN|undefined|Infinity|\[object/);
                    expect(new Set(q.steps.map((s) => s.id)).size, where).toBe(q.steps.length);
                    for (const s of q.steps) {
                        expect(s.prompt.trim().length, where).toBeGreaterThan(2);
                        expect(s.explain.trim().length, where).toBeGreaterThan(2);
                        if (s.kind === 'number') {
                            expect(normalizeNumber(s.answer), where).toMatch(/^-?\d+(\.\d+)?$/);
                            expect(errorCodes.has(s.error), `${where} kode "${s.error}"`).toBe(true);
                        }
                        if (s.kind === 'choice') {
                            expect(s.options, where).toContain(s.answer);
                            expect(new Set(s.options).size, `${where} pilihan kembar`).toBe(s.options.length);
                            expect(s.options.length, where).toBeGreaterThanOrEqual(2);
                            expect(errorCodes.has(s.error), `${where} kode "${s.error}"`).toBe(true);
                            for (const code of Object.values(s.distractorErrors ?? {})) expect(errorCodes.has(code), `${where} kode "${code}"`).toBe(true);
                        }
                        if (s.kind === 'fraction') {
                            expect(s.answer.den, where).toBeGreaterThan(0);
                            expect(checkFraction(s.answer, s.answer, s.simplest).ok, `${where} kunci pecahan tidak sederhana`).toBe(true);
                            expect(errorCodes.has(s.error), `${where} kode "${s.error}"`).toBe(true);
                        }
                        if (s.kind === 'column') expect(() => columnPlan(s.op, s.a, s.b), where).not.toThrow();
                        if (s.kind === 'longdiv') {
                            expect(s.divisor, where).toBeGreaterThan(1);
                            expect(divisionPlan(s.dividend, s.divisor).quotient, where).toBeGreaterThan(0);
                        }
                    }
                }
                // soal harus bervariasi: minimal sepertiga seed menghasilkan soal berbeda
                expect(texts.size, `${skill.code} L${level} kurang bervariasi`).toBeGreaterThanOrEqual(Math.min(20, SEEDS / 3));
            });
        }
    }
});

/* Blok ```soal di materi: harus bisa diparse dan setiap langkahnya sah */
import { toQuestion, type SoalSpec } from '../anim/soal';
const materiDir = resolve(root, 'content/materi');
const soalBlocks = readdirSync(materiDir).flatMap((g) => readdirSync(resolve(materiDir, g)).map((f) => [g, f] as const))
    .flatMap(([g, f]) => [...readFileSync(resolve(materiDir, g, f), 'utf8').matchAll(/```soal\n([\s\S]*?)\n```/g)].map((m, i) => [`${f} #${i + 1}`, m[1]] as const));
describe('soal di materi', () => {
    it.each(soalBlocks)('%s', (_where, src) => {
        const q = toQuestion(JSON.parse(src) as SoalSpec);
        expect(q.text.length).toBeGreaterThan(3);
        expect(q.conclusion.length).toBeGreaterThan(3);
        for (const s of q.steps) {
            expect(s.prompt.length).toBeGreaterThan(2);
            expect(s.hint.length).toBeGreaterThan(2);
            expect(s.explain.length).toBeGreaterThan(2);
            if (s.kind === 'number') expect(normalizeNumber(s.answer)).toMatch(/^-?\d+(\.\d+)?$/);
            if (s.kind === 'choice') { expect(s.options).toContain(s.answer); expect(new Set(s.options).size).toBe(s.options.length); }
            if (s.kind === 'number' || s.kind === 'choice') expect(errorCodes.has(s.error), `kode "${s.error}"`).toBe(true);
            if (s.kind === 'column') expect(() => columnPlan(s.op, s.a, s.b)).not.toThrow();
            if (s.kind === 'longdiv') expect(divisionPlan(s.dividend, s.divisor).quotient).toBeGreaterThan(0);
        }
    });
});
