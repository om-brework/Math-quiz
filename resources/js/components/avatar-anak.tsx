import { cn } from '@/lib/utils';

/** Avatar anak: ikon SVG sederhana buatan sendiri (bukan emoji). */
export const AVATARS = ['bintang', 'roket', 'kucing', 'paus', 'pelangi', 'bola', 'robot', 'bunga'] as const;
export type AvatarName = (typeof AVATARS)[number];

const BG: Record<AvatarName, string> = {
    bintang: '#fef3c7',
    roket: '#e0f2fe',
    kucing: '#ffedd5',
    paus: '#dbeafe',
    pelangi: '#fce7f3',
    bola: '#dcfce7',
    robot: '#e5e7eb',
    bunga: '#fae8ff',
};

export const AVATAR_LABEL: Record<AvatarName, string> = {
    bintang: 'Bintang',
    roket: 'Roket',
    kucing: 'Kucing',
    paus: 'Paus',
    pelangi: 'Pelangi',
    bola: 'Bola',
    robot: 'Robot',
    bunga: 'Bunga',
};

function Glyph({ name }: { name: AvatarName }) {
    switch (name) {
        case 'bintang':
            return (
                <path
                    d="M20 7.5l3.6 7.4 8.1 1.1-5.9 5.7 1.4 8.1L20 26l-7.2 3.8 1.4-8.1-5.9-5.7 8.1-1.1z"
                    fill="#E2901F"
                    stroke="#b45309"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                />
            );
        case 'roket':
            return (
                <g strokeLinejoin="round">
                    <path d="M20 6c5 3.5 6.5 9 6 16h-12c-.5-7 1-12.5 6-16z" fill="#f8fafc" stroke="#2440B4" strokeWidth="1.4" />
                    <circle cx="20" cy="15" r="2.6" fill="#6F8BEA" stroke="#2440B4" strokeWidth="1.2" />
                    <path d="M14 18l-4 6h4.5zM26 18l4 6h-4.5z" fill="#D9503D" stroke="#b91c1c" strokeWidth="1" />
                    <path d="M17 23h6l-1.2 5h-3.6z" fill="#fb923c" />
                    <path d="M18.6 28h2.8L20 33z" fill="#facc15" />
                </g>
            );
        case 'kucing':
            return (
                <g strokeLinejoin="round" strokeLinecap="round">
                    <path
                        d="M10.5 15L12 7l5.5 5h5L28 7l1.5 8c1.5 2 2 4 2 6 0 6-5 9.5-11.5 9.5S8.5 27 8.5 21c0-2 .5-4 2-6z"
                        fill="#fb923c"
                        stroke="#c2410c"
                        strokeWidth="1.3"
                    />
                    <circle cx="16" cy="19.5" r="1.4" fill="#431407" />
                    <circle cx="24" cy="19.5" r="1.4" fill="#431407" />
                    <path d="M18.8 23h2.4l-1.2 1.2z" fill="#be185d" />
                    <path d="M20 24.2v1.2M17.5 26c1.4 1 3.6 1 5 0" stroke="#431407" strokeWidth="1" fill="none" />
                </g>
            );
        case 'paus':
            return (
                <g strokeLinejoin="round" strokeLinecap="round">
                    <path
                        d="M7 22c0-5.5 5-9 12-9 6.5 0 10 3.5 10.5 7.5L34 16c.5 3-1 6.5-3.5 7.5C28 28 23.5 30 18 30c-6.5 0-11-3.5-11-8z"
                        fill="#3b82f6"
                        stroke="#1d4ed8"
                        strokeWidth="1.3"
                    />
                    <path d="M9 24c3 3 13 3.5 19 .5" fill="none" stroke="#bfdbfe" strokeWidth="1.6" />
                    <circle cx="14" cy="20" r="1.4" fill="#0f172a" />
                    <path d="M17 12c0-2 1-3.5 2-4M17 12c-1-1.5-2.5-2-4-2" stroke="#60a5fa" strokeWidth="1.3" fill="none" />
                </g>
            );
        case 'pelangi':
            return (
                <g fill="none" strokeLinecap="round" strokeWidth="2.6">
                    <path d="M7 27a13 13 0 0126 0" stroke="#D9503D" />
                    <path d="M10 27a10 10 0 0120 0" stroke="#E2901F" />
                    <path d="M13 27a7 7 0 0114 0" stroke="#279469" />
                    <path d="M16 27a4 4 0 018 0" stroke="#3b82f6" />
                </g>
            );
        case 'bola':
            return (
                <g strokeLinejoin="round">
                    <circle cx="20" cy="20" r="11" fill="#fff" stroke="#15803d" strokeWidth="1.4" />
                    <path d="M20 14.5l4.3 3.1-1.6 5h-5.4l-1.6-5z" fill="#166534" />
                    <path d="M20 14.5V9.2M24.3 17.6l5-1.6M22.7 22.6l3 4.3M17.3 22.6l-3 4.3M15.7 17.6l-5-1.6" stroke="#166534" strokeWidth="1.2" />
                </g>
            );
        case 'robot':
            return (
                <g strokeLinejoin="round" strokeLinecap="round">
                    <path d="M20 8v3.5" stroke="#475569" strokeWidth="1.4" />
                    <circle cx="20" cy="7.5" r="1.6" fill="#D9503D" />
                    <rect x="10" y="11.5" width="20" height="16" rx="4" fill="#94a3b8" stroke="#334155" strokeWidth="1.3" />
                    <circle cx="15.5" cy="18.5" r="2.4" fill="#fef08a" stroke="#334155" strokeWidth="1" />
                    <circle cx="24.5" cy="18.5" r="2.4" fill="#fef08a" stroke="#334155" strokeWidth="1" />
                    <path d="M15.5 24h9" stroke="#334155" strokeWidth="1.4" />
                    <path d="M8 18v4M32 18v4" stroke="#475569" strokeWidth="2" />
                </g>
            );
        case 'bunga':
            return (
                <g strokeLinejoin="round">
                    <path d="M20 23v9" stroke="#1A7A56" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M20 29c-3.5 0-5-2-5.5-3.5 2.5-.5 4.5.5 5.5 3.5z" fill="#279469" />
                    {[0, 72, 144, 216, 288].map((r) => (
                        <ellipse
                            key={r}
                            cx="20"
                            cy="12"
                            rx="3.6"
                            ry="5"
                            fill="#e879f9"
                            stroke="#a21caf"
                            strokeWidth="1"
                            transform={`rotate(${r} 20 17)`}
                        />
                    ))}
                    <circle cx="20" cy="17" r="3" fill="#facc15" stroke="#a16207" strokeWidth="1" />
                </g>
            );
    }
}

export function isAvatar(v: string | null | undefined): v is AvatarName {
    return !!v && (AVATARS as readonly string[]).includes(v);
}

export function AvatarAnak({ name, className, title }: { name: string | null | undefined; className?: string; title?: string }) {
    const a: AvatarName = isAvatar(name) ? name : 'bintang';
    return (
        <svg viewBox="0 0 40 40" className={cn('size-12 shrink-0 rounded-full', className)} role="img" aria-label={title ?? AVATAR_LABEL[a]}>
            <circle cx="20" cy="20" r="20" fill={BG[a]} />
            <Glyph name={a} />
        </svg>
    );
}
