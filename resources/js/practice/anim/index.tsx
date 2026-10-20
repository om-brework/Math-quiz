/* Blok animasi dan gambar di dalam materi Markdown:
 *
 *   ```anim
 *   {"type": "susun", "op": "-", "a": 403, "b": 158}
 *   ```
 *   ```visual
 *   {"type": "objects", "item": "apel", "count": 7}
 *   ```
 *
 * Jenis animasi: susun (op + − ×), porogapit, stik (op + −, bilangan ≤ 99), benda (op + − × ÷), garis (garis bilangan), pecahan.
 * Gambar diam: semua jenis Visual di practice/types.ts.
 */
import type { ObjectName, Visual as VisualSpec } from '../types';
import { Visual } from '../Visual';
import { BendaAnim } from './benda';
import { GarisAnim } from './garis';
import { PecahanAnim } from './pecahan';
import { PorogapitAnim } from './porogapit';
import { StikAnim } from './stik';
import { SusunAnim } from './susun';

export type AnimSpec =
    | { type: 'susun'; op: '+' | '-' | '×'; a: number; b: number; title?: string }
    | { type: 'porogapit'; a: number; b: number; title?: string }
    | { type: 'stik'; op: '+' | '-'; a: number; b: number; title?: string }
    | { type: 'benda'; op: '+' | '-' | '×' | '÷'; a: number; b: number; item?: ObjectName; title?: string }
    | { type: 'garis'; from: number; to: number; start: number; jumps: number[]; step?: number; title?: string }
    | { type: 'pecahan'; parts: number; shaded: number; shape?: 'lingkaran' | 'batang'; name?: string; title?: string };

function Broken({ msg }: { msg: string }) {
    return <div className="my-3 rounded-xl border-2 border-dashed border-rose-300 bg-rose-50 p-3 text-sm text-rose-700">Animasi tidak bisa ditampilkan: {msg}</div>;
}

export function Anim({ source }: { source: string }) {
    let spec: AnimSpec;
    try { spec = JSON.parse(source); } catch { return <Broken msg="format JSON salah" />; }
    switch (spec.type) {
        case 'susun': return <SusunAnim {...spec} />;
        case 'porogapit': return <PorogapitAnim {...spec} />;
        case 'stik': return spec.a <= 99 && spec.b <= 99 ? <StikAnim {...spec} /> : <Broken msg="stik hanya untuk bilangan sampai 99" />;
        case 'benda': return <BendaAnim {...spec} />;
        case 'garis': return <GarisAnim {...spec} />;
        case 'pecahan': return <PecahanAnim {...spec} />;
        default: return <Broken msg={`jenis "${(spec as { type: string }).type}" tidak dikenal`} />;
    }
}

export function StaticVisual({ source }: { source: string }) {
    let spec: VisualSpec & { caption?: string };
    try { spec = JSON.parse(source); } catch { return <Broken msg="format JSON salah" />; }
    return (
        <figure className="not-prose my-4 rounded-3xl border-2 border-slate-100 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <Visual spec={spec} />
            {spec.caption && <figcaption className="mt-2 text-center text-sm font-semibold text-slate-500">{spec.caption}</figcaption>}
        </figure>
    );
}
