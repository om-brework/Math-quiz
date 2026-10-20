/* Ikon benda sederhana, digambar di kotak 40×40. Warna tetap (berwarna) supaya terbaca di mode terang dan gelap. */
import type { ObjectName } from '../types';
import { fmt } from './core';

export const OBJECT_LABEL: Record<ObjectName, string> = {
    apel: 'apel', jeruk: 'jeruk', kelereng: 'kelereng', permen: 'permen', bintang: 'bintang', buku: 'buku',
    pensil: 'pensil', bola: 'bola', kue: 'kue', ikan: 'ikan', bunga: 'bunga', mobil: 'mobil-mobilan',
};

function star(cx: number, cy: number, ro: number, ri: number): string {
    const pts: string[] = [];
    for (let i = 0; i < 10; i++) {
        const r = i % 2 === 0 ? ro : ri;
        const a = -Math.PI / 2 + (i * Math.PI) / 5;
        pts.push(`${fmt(cx + r * Math.cos(a))},${fmt(cy + r * Math.sin(a))}`);
    }
    return pts.join(' ');
}

function Shapes({ name }: { name: ObjectName }) {
    switch (name) {
        case 'apel':
            return (
                <>
                    <path d="M20 12 C14 7 5 9 5 20 C5 30 12 37 20 34.5 C28 37 35 30 35 20 C35 9 26 7 20 12Z" fill="#D9503D" stroke="#b91c1c" strokeWidth={1.2} />
                    <path d="M20 12 Q20 7 23 3.5" stroke="#78350f" strokeWidth={2.4} fill="none" strokeLinecap="round" />
                    <path d="M22 8 Q28 2.5 34 5.5 Q28 11 22 8Z" fill="#279469" stroke="#15803d" strokeWidth={0.8} />
                    <ellipse cx="12.5" cy="19" rx="2.6" ry="4.5" fill="#fff" opacity={0.5} />
                </>
            );
        case 'jeruk':
            return (
                <>
                    <circle cx="20" cy="22" r="14" fill="#fb923c" stroke="#c2410c" strokeWidth={1.2} />
                    <g fill="#C65D16" opacity={0.7}>
                        <circle cx="25" cy="27" r="0.9" /><circle cx="15" cy="28" r="0.9" /><circle cx="27" cy="18" r="0.9" /><circle cx="20" cy="31" r="0.9" />
                    </g>
                    <path d="M20 8.5 Q20 6 21 4.5" stroke="#78350f" strokeWidth={2} fill="none" strokeLinecap="round" />
                    <path d="M21 7 Q26 2.5 31 5 Q26 10 21 7Z" fill="#279469" stroke="#15803d" strokeWidth={0.8} />
                    <ellipse cx="14" cy="17" rx="2.5" ry="3.6" fill="#fff" opacity={0.45} />
                </>
            );
        case 'kelereng':
            return (
                <>
                    <circle cx="20" cy="20" r="14" fill="#3b82f6" stroke="#1e40af" strokeWidth={1.2} />
                    <path d="M10 25 Q16 13 30 18" stroke="#bfdbfe" strokeWidth={3} fill="none" strokeLinecap="round" />
                    <path d="M13 29 Q22 24 29 27" stroke="#facc15" strokeWidth={2.4} fill="none" strokeLinecap="round" />
                    <circle cx="14.5" cy="13.5" r="3.4" fill="#fff" opacity={0.85} />
                </>
            );
        case 'permen':
            return (
                <>
                    <path d="M12 20 L3 12.5 Q1.5 20 3 27.5Z" fill="#f9a8d4" stroke="#be185d" strokeWidth={1} strokeLinejoin="round" />
                    <path d="M28 20 L37 12.5 Q38.5 20 37 27.5Z" fill="#f9a8d4" stroke="#be185d" strokeWidth={1} strokeLinejoin="round" />
                    <circle cx="20" cy="20" r="9.5" fill="#ec4899" stroke="#be185d" strokeWidth={1.2} />
                    <path d="M14 15 Q20 20 15 26 M20 11 Q26 18 20 29 M25.5 14 Q29 20 26 25" stroke="#fff" strokeWidth={1.8} fill="none" strokeLinecap="round" opacity={0.9} />
                </>
            );
        case 'bintang':
            return <polygon points={star(20, 21.5, 17, 7.2)} fill="#facc15" stroke="#ca8a04" strokeWidth={1.5} strokeLinejoin="round" />;
        case 'buku':
            return (
                <>
                    <rect x="11" y="30" width="21" height="5.5" rx="1" fill="#fff" stroke="#94a3b8" strokeWidth={1} />
                    <rect x="9" y="4.5" width="23" height="27" rx="2" fill="#2563eb" stroke="#1e3a8a" strokeWidth={1.2} />
                    <rect x="9" y="4.5" width="4.5" height="31" rx="1.5" fill="#1e40af" />
                    <rect x="17" y="10" width="11" height="5" rx="1" fill="#fde68a" />
                    <path d="M11 33 H31" stroke="#cbd5e1" strokeWidth={0.8} />
                </>
            );
        case 'pensil':
            return (
                <g transform="rotate(-45 20 20)">
                    <rect x="1.5" y="15.5" width="4.5" height="9" rx="1.5" fill="#f472b6" stroke="#9d174d" strokeWidth={0.9} />
                    <rect x="5.5" y="15.5" width="3.5" height="9" fill="#cbd5e1" stroke="#64748b" strokeWidth={0.9} />
                    <rect x="9" y="15.5" width="20" height="9" fill="#facc15" stroke="#a16207" strokeWidth={0.9} />
                    <path d="M9 18.5 H29 M9 21.5 H29" stroke="#eab308" strokeWidth={0.8} />
                    <path d="M29 15.5 L38.5 20 L29 24.5Z" fill="#fde7c3" stroke="#a16207" strokeWidth={0.9} strokeLinejoin="round" />
                    <path d="M35.3 18.5 L38.5 20 L35.3 21.5Z" fill="#334155" />
                </g>
            );
        case 'bola':
            return (
                <>
                    <path d="M20 6 A14 14 0 0 0 20 34 Q10 20 20 6Z" fill="#D9503D" />
                    <path d="M20 6 A14 14 0 0 1 20 34 Q30 20 20 6Z" fill="#3b82f6" />
                    <path d="M20 6 Q10 20 20 34 Q30 20 20 6Z" fill="#facc15" />
                    <circle cx="20" cy="20" r="14" fill="none" stroke="#475569" strokeWidth={1.2} />
                    <ellipse cx="13" cy="13" rx="2.2" ry="3.4" fill="#fff" opacity={0.6} transform="rotate(35 13 13)" />
                </>
            );
        case 'kue':
            return (
                <>
                    <path d="M10 22 H30 L27 36 H13Z" fill="#E2901F" stroke="#b45309" strokeWidth={1.1} strokeLinejoin="round" />
                    <path d="M15 22.5 L16 35.5 M20 22.5 V35.5 M25 22.5 L24 35.5" stroke="#b45309" strokeWidth={1} />
                    <path d="M7.5 23.5 Q6.5 15.5 13 15 Q14 9 20 9.5 Q26 9 27 15 Q33.5 15.5 32.5 23.5Z" fill="#fbcfe8" stroke="#db2777" strokeWidth={1.1} strokeLinejoin="round" />
                    <g fill="#6F8BEA"><rect x="12" y="18" width="3" height="1.4" rx="0.7" transform="rotate(-30 13.5 18.7)" /><rect x="22" y="14" width="3" height="1.4" rx="0.7" transform="rotate(25 23.5 14.7)" /><rect x="25" y="19" width="3" height="1.4" rx="0.7" transform="rotate(-15 26.5 19.7)" /></g>
                    <circle cx="20" cy="7" r="3.2" fill="#C23B29" />
                    <path d="M20 4 Q21 1.5 23.5 1" stroke="#15803d" strokeWidth={1} fill="none" />
                </>
            );
        case 'ikan':
            return (
                <>
                    <path d="M28 20 L38 11.5 Q35.5 20 38 28.5Z" fill="#0891b2" stroke="#155e75" strokeWidth={1} strokeLinejoin="round" />
                    <ellipse cx="17" cy="20" rx="14" ry="9.5" fill="#22d3ee" stroke="#0e7490" strokeWidth={1.2} />
                    <path d="M15 11.5 Q20 6 25 12" fill="#0891b2" stroke="#0e7490" strokeWidth={1} />
                    <path d="M16 15 Q19 20 16 25" stroke="#0e7490" strokeWidth={1.1} fill="none" />
                    <circle cx="9" cy="18" r="2.4" fill="#fff" /><circle cx="8.6" cy="18" r="1.2" fill="#0f172a" />
                    <path d="M3.5 21.5 Q5 22.5 6.5 21.8" stroke="#0e7490" strokeWidth={1} fill="none" strokeLinecap="round" />
                </>
            );
        case 'bunga':
            return (
                <>
                    <path d="M20 22 V38" stroke="#1A7A56" strokeWidth={2.4} strokeLinecap="round" />
                    <path d="M20 32 Q27 26 31 29 Q26 35 20 32Z" fill="#279469" />
                    {[0, 1, 2, 3, 4].map((i) => {
                        const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
                        return <circle key={i} cx={fmt(20 + 7.5 * Math.cos(a))} cy={fmt(15 + 7.5 * Math.sin(a))} r="5.8" fill="#f472b6" stroke="#be185d" strokeWidth={0.9} />;
                    })}
                    <circle cx="20" cy="15" r="4.6" fill="#facc15" stroke="#ca8a04" strokeWidth={0.9} />
                </>
            );
        case 'mobil':
            return (
                <>
                    <path d="M10 19 L14.5 10.5 H26 L31 19Z" fill="#D9503D" stroke="#991b1b" strokeWidth={1.1} strokeLinejoin="round" />
                    <path d="M14 18 L16.5 12.5 H19.5 V18Z M21.5 12.5 H25 L28 18 H21.5Z" fill="#bae6fd" />
                    <rect x="3" y="18" width="34" height="11" rx="3.5" fill="#D9503D" stroke="#991b1b" strokeWidth={1.1} />
                    <rect x="32.5" y="21" width="4" height="3" rx="1" fill="#fde68a" />
                    <circle cx="11" cy="29" r="4.6" fill="#1f2937" stroke="#94a3b8" strokeWidth={1} /><circle cx="11" cy="29" r="1.8" fill="#d1d5db" />
                    <circle cx="29" cy="29" r="4.6" fill="#1f2937" stroke="#94a3b8" strokeWidth={1} /><circle cx="29" cy="29" r="1.8" fill="#d1d5db" />
                </>
            );
    }
}

/** Ikon benda di (x, y) = pojok kiri atas, dengan sisi `size`. */
export function ObjectIcon({ name, x, y, size = 40 }: { name: ObjectName; x: number; y: number; size?: number }) {
    return (
        <g transform={`translate(${fmt(x)} ${fmt(y)}) scale(${fmt(size / 40)})`}>
            <Shapes name={name} />
        </g>
    );
}
