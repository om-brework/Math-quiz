import { SVGAttributes } from 'react';

/** Tanda "Langkah": tiga anak tangga membulat yang naik. Warna mengikuti `currentColor`. */
export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
            <rect x="2" y="20" width="8" height="10" rx="2.5" opacity="0.55" />
            <rect x="12" y="13" width="8" height="17" rx="2.5" opacity="0.8" />
            <rect x="22" y="4" width="8" height="26" rx="2.5" />
        </svg>
    );
}
