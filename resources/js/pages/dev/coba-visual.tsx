/* Halaman pengembang: galeri semua jenis gambar soal. Hanya aktif di APP_ENV=local. */
import { Visual } from '@/practice/Visual';
import type { Visual as VisualSpec } from '@/practice/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const EXAMPLES: [string, VisualSpec][] = [
    ['objects: 4 apel', { type: 'objects', item: 'apel', count: 4 }],
    ['objects: 8 jeruk (baris 5)', { type: 'objects', item: 'jeruk', count: 8 }],
    ['objects: 27 kelereng (baris 10)', { type: 'objects', item: 'kelereng', count: 27 }],
    ['objects: 12 permen, 3 dicoret', { type: 'objects', item: 'permen', count: 12, crossed: 3 }],
    ['objects: 15 bintang, group 3', { type: 'objects', item: 'bintang', count: 15, group: 3 }],
    ['objects: 23 kue, group 5 (sisa 3)', { type: 'objects', item: 'kue', count: 23, group: 5 }],
    ['objects: buku', { type: 'objects', item: 'buku', count: 2 }],
    ['objects: pensil', { type: 'objects', item: 'pensil', count: 3 }],
    ['objects: bola', { type: 'objects', item: 'bola', count: 3 }],
    ['objects: ikan', { type: 'objects', item: 'ikan', count: 3 }],
    ['objects: bunga', { type: 'objects', item: 'bunga', count: 3 }],
    ['objects: mobil, 14 group 7', { type: 'objects', item: 'mobil', count: 14, group: 7 }],
    ['base10: 3 puluhan 7 satuan', { type: 'base10', tens: 3, ones: 7 }],
    ['base10: 2 ratusan 4 puluhan 5 satuan', { type: 'base10', hundreds: 2, tens: 4, ones: 5 }],
    ['base10: 1 ribuan 3 ratusan 0 puluhan 9 satuan', { type: 'base10', thousands: 1, hundreds: 3, tens: 0, ones: 9 }],
    ['base10: 2 ribuan 9 ratusan 9 puluhan 9 satuan', { type: 'base10', thousands: 2, hundreds: 9, tens: 9, ones: 9 }],
    ['numberLine 0–10, lompat +3 +3', { type: 'numberLine', from: 0, to: 10, jumps: [{ from: 2, to: 5, label: '+3' }, { from: 5, to: 8, label: '+3' }] }],
    ['numberLine 0–100 step 10, hide 70, mark 40', { type: 'numberLine', from: 0, to: 100, step: 10, marks: [40], hide: [70] }],
    ['numberLine 20–50 step 1, lompat mundur', { type: 'numberLine', from: 20, to: 50, step: 1, jumps: [{ from: 45, to: 30, label: '−15' }], hide: [30] }],
    ['numberLine 0–1 step 0,25', { type: 'numberLine', from: 0, to: 2, step: 0.25, jumps: [{ from: 0, to: 0.75, label: '?' }] }],
    ['clock 3:00', { type: 'clock', hour: 3, minute: 0 }],
    ['clock 9:30', { type: 'clock', hour: 9, minute: 30 }],
    ['clock 10:50', { type: 'clock', hour: 10, minute: 50 }],
    ['clock 12:17', { type: 'clock', hour: 12, minute: 17 }],
    ['fraction bar 3/5', { type: 'fraction', shape: 'bar', parts: 5, shaded: 3 }],
    ['fraction circle 3/8', { type: 'fraction', shape: 'circle', parts: 8, shaded: 3 }],
    ['fraction rect 5/12', { type: 'fraction', shape: 'rect', parts: 12, shaded: 5 }],
    ['fraction circle 7/4 (wholes 2)', { type: 'fraction', shape: 'circle', parts: 4, shaded: 7, wholes: 2 }],
    ['fraction bar 5/3 (wholes 2)', { type: 'fraction', shape: 'bar', parts: 3, shaded: 5, wholes: 2 }],
    ['fraction circle 1/2 ×3 wholes', { type: 'fraction', shape: 'circle', parts: 2, shaded: 3, wholes: 3 }],
    ['barModel: bagian-keseluruhan', { type: 'barModel', bars: [{ label: 'Ani', units: 3, unitValue: '12' }, { label: 'Budi', units: 1, unitValue: '12' }], total: '?' }],
    ['barModel: satu batang, total', { type: 'barModel', bars: [{ label: 'Pita', units: 4 }], total: '48 cm' }],
    ['barModel: perbandingan, selisih ditanya', { type: 'barModel', bars: [{ label: 'Kakak', units: 5, known: '75' }, { label: 'Adik', units: 2 }], total: '105', question: '?' }],
    ['barModel: banyak bar', { type: 'barModel', bars: [{ label: 'Merah', units: 2 }, { label: 'Biru', units: 4 }, { label: 'Hijau', units: 3 }], question: 'berapa semuanya?' }],
    ['pictogram scale 2', { type: 'pictogram', item: 'apel', scale: 2, title: 'Apel yang dipetik', rows: [{ label: 'Senin', value: 6 }, { label: 'Selasa', value: 10 }, { label: 'Rabu', value: 3 }, { label: 'Kamis', value: 8 }] }],
    ['pictogram scale 5', { type: 'pictogram', item: 'buku', scale: 5, rows: [{ label: 'Kelas 3A', value: 40 }, { label: 'Kelas 3B', value: 25 }, { label: 'Kelas 3C', value: 55 }] }],
    ['barChart', { type: 'barChart', scaleStep: 5, max: 30, title: 'Buah kesukaan', unit: 'anak', bars: [{ label: 'Apel', value: 15 }, { label: 'Jeruk', value: 25 }, { label: 'Mangga', value: 10 }, { label: 'Pisang', value: 20 }] }],
    ['barChart banyak batang', { type: 'barChart', scaleStep: 20, max: 200, unit: 'kg', bars: [{ label: 'Januari', value: 120 }, { label: 'Februari', value: 180 }, { label: 'Maret', value: 60 }, { label: 'April', value: 140 }, { label: 'Mei', value: 200 }, { label: 'Juni bulan libur', value: 40 }] }],
    ['shape persegi merah', { type: 'shape', shape: 'persegi', color: 'merah', label: 'A' }],
    ['shape segitiga kuning', { type: 'shape', shape: 'segitiga', color: 'kuning' }],
    ['shape setengah-lingkaran hijau', { type: 'shape', shape: 'setengah-lingkaran', color: 'hijau' }],
    ['shape seperempat-lingkaran biru', { type: 'shape', shape: 'seperempat-lingkaran', color: 'biru' }],
    ['shapes pola, missing 4', { type: 'shapes', items: [{ shape: 'lingkaran', color: 'merah' }, { shape: 'persegi', color: 'biru' }, { shape: 'segitiga', color: 'kuning' }, { shape: 'lingkaran', color: 'merah' }, { shape: 'persegi', color: 'biru' }, { shape: 'segitiga', color: 'kuning' }], missing: 4 }],
    ['shapes ukuran & rotasi', { type: 'shapes', items: [{ shape: 'persegi-panjang', color: 'ungu', size: 'big' }, { shape: 'persegi', color: 'hijau', size: 'small', rotate: 45 }, { shape: 'segitiga', color: 'oranye', rotate: 180 }, { shape: 'lingkaran', color: 'merah muda', size: 'small' }] }],
    ['solid kubus', { type: 'solid', solid: 'kubus' }],
    ['solid balok', { type: 'solid', solid: 'balok' }],
    ['solid kerucut', { type: 'solid', solid: 'kerucut' }],
    ['solid tabung', { type: 'solid', solid: 'tabung' }],
    ['solid bola', { type: 'solid', solid: 'bola' }],
    ['ruler pensil 0–7', { type: 'ruler', start: 0, end: 7 }],
    ['ruler ikan 2–9', { type: 'ruler', start: 2, end: 9, item: 'ikan' }],
    ['ruler mobil 3–15', { type: 'ruler', start: 3, end: 15, item: 'mobil' }],
    ['ruler apel 1–5', { type: 'ruler', start: 1, end: 5, item: 'apel' }],
    ['grid 8×5, arsir 6×3, dims', { type: 'grid', width: 8, height: 5, shade: [{ x: 1, y: 1, w: 6, h: 3 }], showDims: true, unit: 'cm' }],
    ['grid 10×6, bangun L (2 arsiran)', { type: 'grid', width: 10, height: 6, shade: [{ x: 1, y: 1, w: 3, h: 4 }, { x: 4, y: 3, w: 4, h: 2 }] }],
    ['grid 4×4 tanpa arsir', { type: 'grid', width: 4, height: 4, showDims: true }],
    ['rect 12 × 5 cm', { type: 'rect', width: 12, height: 5, unit: 'cm' }],
    ['rect lebar disembunyikan', { type: 'rect', width: 9, height: 6, unit: 'm', hideHeight: true }],
    ['rect panjang disembunyikan', { type: 'rect', width: 20, height: 4, unit: 'cm', hideWidth: true }],
    ['angle 90 siku', { type: 'angle', degrees: 90, showRightMark: true }],
    ['angle 40', { type: 'angle', degrees: 40 }],
    ['angle 130', { type: 'angle', degrees: 130 }],
    ['lines parallel', { type: 'lines', relation: 'parallel' }],
    ['lines perpendicular rotate 20', { type: 'lines', relation: 'perpendicular', rotate: 20 }],
    ['lines intersecting', { type: 'lines', relation: 'intersecting' }],
    ['money koin', { type: 'money', items: [100, 200, 500, 1000, 500] }],
    ['money kertas', { type: 'money', items: [2000, 5000, 10000, 20000, 50000, 100000] }],
    ['money campur', { type: 'money', items: [50000, 20000, 1000, 500, 200] }],
    ['scale mass 2,5 kg', { type: 'scale', kind: 'mass', value: 2.5, unit: 'kg', max: 5, step: 0.5 }],
    ['scale mass 700 g', { type: 'scale', kind: 'mass', value: 700, unit: 'g', max: 1000, step: 100 }],
    ['scale volume 350 mL', { type: 'scale', kind: 'volume', value: 350, unit: 'mL', max: 500, step: 50 }],
    ['scale volume 3 ℓ', { type: 'scale', kind: 'volume', value: 3, unit: 'ℓ', max: 5, step: 1 }],
    ['table', { type: 'table', head: ['Nama', 'Kelereng'], rows: [['Ani', '12'], ['Budi', '8'], ['Citra', '?']] }],
];

export default function CobaVisual() {
    const [dark, setDark] = useState(false);
    const toggle = () => {
        document.documentElement.classList.toggle('dark', !dark);
        setDark(!dark);
    };
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
            <Head title="Coba visual" />
            <div className="mx-auto max-w-5xl p-4">
                <div className="mb-4 flex items-center gap-3">
                    <h1 className="text-xl font-bold">Galeri visual ({EXAMPLES.length})</h1>
                    <button data-testid="dark" className="rounded bg-slate-800 px-3 py-1 text-sm text-white dark:bg-slate-200 dark:text-slate-900" onClick={toggle}>
                        {dark ? 'Mode terang' : 'Mode gelap'}
                    </button>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    {EXAMPLES.map(([cap, spec], i) => (
                        <figure key={i} className="flex min-w-0 flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                            <figcaption className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                                {cap}
                                <code className="mt-1 block truncate font-mono font-normal text-[10px] opacity-70">{JSON.stringify(spec)}</code>
                            </figcaption>
                            <div className="flex justify-center"><Visual spec={spec} /></div>
                        </figure>
                    ))}
                </div>
            </div>
        </div>
    );
}
