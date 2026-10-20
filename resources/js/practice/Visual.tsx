/* Gambar pendukung soal. Semua gambar adalah SVG buatan sendiri (tanpa gambar luar), responsif, dan terbaca di mode terang/gelap. */
import type { Visual as VisualSpec } from './types';
import { BarChart, BarModel, Clock, Fraction, NumberLine, Table } from './visuals/numbers';
import { Base10, Money, Objects, Pictogram } from './visuals/counting';
import { Angle, Grid, Lines, Rect, Shape, Shapes, Solid } from './visuals/geometry';
import { Ruler, Scale } from './visuals/measure';

/**
 * Variabel warna dipakai oleh semua komponen di ./visuals. Garis dan teks utama memakai currentColor.
 */
const THEME = [
    'w-full max-w-md text-slate-800 dark:text-slate-100',
    '[--v-paper:#ffffff] dark:[--v-paper:#1e293b]',
    '[--v-soft:#eef2f7] dark:[--v-soft:#334155]',
    '[--v-line:#94a3b8] dark:[--v-line:#64748b]',
    '[--v-grid:#e2e8f0] dark:[--v-grid:#334155]',
    '[--v-muted:#64748b] dark:[--v-muted:#94a3b8]',
    '[--v-accent:#0ea5e9] dark:[--v-accent:#38bdf8]',
    '[--v-accent-strong:#0369a1] dark:[--v-accent-strong:#7dd3fc]',
    '[--v-shade:#7dd3fc] dark:[--v-shade:#0284c7]',
    '[--v-shade-soft:#e0f2fe] dark:[--v-shade-soft:#0c4a6e]',
    '[--v-q:#e11d48] dark:[--v-q:#fb7185]',
    '[--v-q-bg:#fff1f2] dark:[--v-q-bg:#4c0519]',
    '[--v-jump:#c026d3] dark:[--v-jump:#e879f9]',
    '[--v-hour:#e11d48] dark:[--v-hour:#fb7185]',
    '[--v-minute:#2563eb] dark:[--v-minute:#60a5fa]',
    '[--v-line-a:#e11d48] dark:[--v-line-a:#fb7185]',
    '[--v-line-b:#2563eb] dark:[--v-line-b:#60a5fa]',
].join(' ');

function Inner({ spec }: { spec: VisualSpec }) {
    switch (spec.type) {
        case 'objects': return <Objects {...spec} />;
        case 'base10': return <Base10 {...spec} />;
        case 'numberLine': return <NumberLine {...spec} />;
        case 'clock': return <Clock {...spec} />;
        case 'fraction': return <Fraction {...spec} />;
        case 'barModel': return <BarModel {...spec} />;
        case 'pictogram': return <Pictogram {...spec} />;
        case 'barChart': return <BarChart {...spec} />;
        case 'shape': return <Shape {...spec} />;
        case 'shapes': return <Shapes {...spec} />;
        case 'solid': return <Solid {...spec} />;
        case 'ruler': return <Ruler {...spec} />;
        case 'grid': return <Grid {...spec} />;
        case 'rect': return <Rect {...spec} />;
        case 'angle': return <Angle {...spec} />;
        case 'lines': return <Lines {...spec} />;
        case 'money': return <Money {...spec} />;
        case 'scale': return <Scale {...spec} />;
        case 'table': return <Table {...spec} />;
        default: {
            const never: never = spec;
            return <div className="text-sm text-slate-400">[{(never as { type: string }).type}]</div>;
        }
    }
}

/** Gambar pendukung soal. */
export function Visual({ spec }: { spec: VisualSpec }) {
    return (
        <div className={THEME} data-visual={spec.type}>
            <Inner spec={spec} />
        </div>
    );
}
