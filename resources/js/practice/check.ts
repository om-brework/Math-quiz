/* Penilaian jawaban: isian, pecahan, hitung susun, dan porogapit. Tanpa React, supaya bisa diuji. */
import type { ErrorCode } from './types';

/** "1.250" → "1250", "2,5" → "2.5", " -3 " → "-3" */
export function normalizeNumber(raw: string): string {
    let s = String(raw ?? '').trim().replace(/\s+/g, '').replace(/^Rp/i, '');
    // jam ditulis 15:30 atau 15.30 → sama
    if (/^\d{1,2}:\d{2}$/.test(s)) s = s.replace(':', '.');
    // titik sebagai pemisah ribuan (1.250 atau 1.250.000), koma sebagai desimal
    if (/^-?\d{1,3}(\.\d{3})+(,\d+)?$/.test(s)) s = s.replace(/\./g, '');
    s = s.replace(',', '.');
    if (!/^-?\d*\.?\d+$/.test(s)) return s.toLowerCase();
    const n = Number(s);
    return Number.isFinite(n) ? String(n) : s;
}

export const sameNumber = (given: string, answer: string) => normalizeNumber(given) === normalizeNumber(answer);

const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));

export interface FractionValue { whole?: number; num: number; den: number }

/** Bandingkan pecahan; `simplest` mewajibkan bentuk paling sederhana. */
export function checkFraction(given: FractionValue, answer: FractionValue, simplest = false): { ok: boolean; reason?: 'belum-sederhana' | 'salah' } {
    if (!given.den) return { ok: false, reason: 'salah' };
    const g = (given.whole ?? 0) * given.den + given.num;
    const a = (answer.whole ?? 0) * answer.den + answer.num;
    if (g * answer.den !== a * given.den) return { ok: false, reason: 'salah' };
    if (simplest && (gcd(given.num, given.den) !== 1 || (answer.whole !== undefined && given.num >= given.den))) return { ok: false, reason: 'belum-sederhana' };
    return { ok: true };
}

/* ---------------- Hitung susun ---------------- */

const digits = (n: number, len: number) => Array.from({ length: len }, (_, i) => Math.floor(n / 10 ** i) % 10);

/**
 * Rencana hitung susun. Indeks kolom 0 = satuan.
 * - `result[i]`: angka hasil di kolom i ("" = kosong di depan)
 * - `aux[i]`: isi kotak kecil di atas kolom i:
 *     tambah/kali → simpanan yang MASUK ke kolom i (0 = tidak ada)
 *     kurang      → nilai baru angka atas setelah meminjam (null = tidak berubah)
 */
export interface ColumnPlan {
    op: '+' | '-' | '×';
    a: number;
    b: number;
    cols: number;
    as: number[];
    bs: number[];
    result: string[];
    aux: (number | null)[];
    answer: number;
}

export function columnPlan(op: '+' | '-' | '×', a: number, b: number): ColumnPlan {
    const answer = op === '+' ? a + b : op === '-' ? a - b : a * b;
    if (op === '-' && answer < 0) throw new Error('Pengurangan bersusun butuh a ≥ b');
    if (op === '×' && b > 9) throw new Error('Perkalian bersusun: pengali satu angka');
    // tambah/kali selalu diberi satu kolom ekstra di kiri, supaya banyak kotak tidak membocorkan ada-tidaknya simpanan terakhir
    const cols = op === '-' ? String(a).length : Math.max(String(a).length, String(b).length) + 1;
    const as = digits(a, cols), bs = op === '×' ? [b, ...Array(cols - 1).fill(0)] : digits(b, cols);
    const len = String(answer).length;
    const result = digits(answer, cols).map((d, i) => (i < len ? String(d) : ''));
    const aux: (number | null)[] = Array(cols).fill(op === '-' ? null : 0);
    if (op === '+') {
        let c = 0;
        for (let i = 0; i < cols; i++) { aux[i] = c; c = as[i] + bs[i] + c >= 10 ? 1 : 0; }
    } else if (op === '×') {
        let c = 0;
        for (let i = 0; i < cols; i++) { aux[i] = c; c = Math.floor((as[i] * b + c) / 10); }
    } else {
        const top = [...as];
        for (let i = 0; i < cols; i++) {
            if (top[i] < bs[i]) {
                // pinjam dari kolom kiri terdekat yang bukan nol; nol di tengah menjadi 9
                let j = i + 1;
                while (top[j] === 0) j++;
                top[j] -= 1; aux[j] = top[j];
                for (let k = j - 1; k > i; k--) { top[k] = 9; aux[k] = 9; }
                top[i] += 10; aux[i] = top[i];
            }
        }
    }
    return { op, a, b, cols, as, bs, result, aux, answer };
}

export interface ColumnEntry {
    /** isi kotak hasil per kolom ("" = kosong) */
    result: string[];
    /** isi kotak kecil per kolom ("" = kosong) */
    aux: string[];
}

export interface ColumnCheck {
    ok: boolean;
    /** status tiap kotak hasil dan kotak kecil */
    resultOk: boolean[];
    auxOk: boolean[];
    errors: ErrorCode[];
}

/** Nilai hitung susun dan klasifikasikan kesalahannya per kolom. */
export function checkColumn(plan: ColumnPlan, entry: ColumnEntry): ColumnCheck {
    const errors = new Set<ErrorCode>();
    const resultOk: boolean[] = [], auxOk: boolean[] = [];
    for (let i = 0; i < plan.cols; i++) {
        const want = plan.result[i];
        const got = (entry.result[i] ?? '').trim();
        const okDigit = got === want || (want === '' && (got === '' || got === '0'));
        resultOk.push(okDigit);

        const auxWant = plan.aux[i];
        const auxGot = (entry.aux[i] ?? '').trim();
        let okAux: boolean;
        if (plan.op === '-') okAux = auxWant === null ? auxGot === '' || Number(auxGot) === plan.as[i] : Number(auxGot) === auxWant && auxGot !== '';
        else okAux = Number(auxGot || 0) === auxWant;
        auxOk.push(okAux);

        if (!okAux) {
            if (plan.op === '+') errors.add(auxWant ? 'lupa-simpan' : 'simpan-tidak-perlu');
            else if (plan.op === '×') errors.add(auxGot === '' && auxWant ? 'lupa-simpan-kali' : 'salah-simpan-kali');
            else errors.add(auxWant !== null && auxGot === '' ? 'lupa-pinjam' : 'salah-pinjam');
        }
        if (!okDigit && got !== '') {
            const g = Number(got);
            if (plan.op === '+') errors.add(plan.aux[i] && g === (plan.as[i] + plan.bs[i]) % 10 ? 'lupa-simpan' : 'salah-fakta-tambah');
            else if (plan.op === '×') errors.add(plan.aux[i] && g === (plan.as[i] * plan.b) % 10 ? 'lupa-simpan-kali' : 'salah-fakta-kali');
            else if (plan.as[i] < plan.bs[i] && g === plan.bs[i] - plan.as[i]) errors.add('kurang-terbalik');
            else if (plan.aux[i] !== null && g === plan.as[i] - plan.bs[i]) errors.add('lupa-pinjam');
            else errors.add('salah-fakta-kurang');
        }
        if (!okDigit && got === '') errors.add('kolom-kosong');
    }
    return { ok: resultOk.every(Boolean) && auxOk.every(Boolean), resultOk, auxOk, errors: [...errors] };
}

/* ---------------- Porogapit ---------------- */

/** Satu putaran Bagi-Kali-Kurang-Turun pada pembagian bersusun. */
export interface DivisionCycle {
    /** bilangan yang sedang dibagi pada putaran ini (misalnya 15) */
    part: number;
    /** posisi angka yang dibagi yang menjadi ujung kanan `part` (0 = paling kiri) */
    at: number;
    quotientDigit: number;
    product: number;
    remainder: number;
}

export interface DivisionPlan {
    dividend: number;
    divisor: number;
    quotient: number;
    remainder: number;
    /** angka hasil bagi di atas tiap angka yang dibagi ("" = tidak ditulis) */
    quotientDigits: string[];
    cycles: DivisionCycle[];
}

export function divisionPlan(dividend: number, divisor: number): DivisionPlan {
    const ds = String(dividend).split('').map(Number);
    const quotientDigits: string[] = [];
    const cycles: DivisionCycle[] = [];
    let cur = 0, started = false;
    ds.forEach((d, at) => {
        cur = cur * 10 + d;
        if (!started && cur < divisor && at < ds.length - 1) { quotientDigits.push(''); return; }
        started = true;
        const q = Math.floor(cur / divisor);
        cycles.push({ part: cur, at, quotientDigit: q, product: q * divisor, remainder: cur - q * divisor });
        quotientDigits.push(String(q));
        cur -= q * divisor;
    });
    return { dividend, divisor, quotient: Math.floor(dividend / divisor), remainder: dividend % divisor, quotientDigits, cycles };
}

/** Klasifikasi jawaban angka hasil bagi yang salah pada satu putaran. */
export function divisionDigitError(cycle: DivisionCycle, divisor: number, given: number): ErrorCode {
    if (cycle.quotientDigit === 0 && given !== 0) return 'lupa-nol-hasil-bagi';
    if (given * divisor > cycle.part) return 'tebakan-bagi-kebesaran';
    if (cycle.part - given * divisor >= divisor) return 'tebakan-bagi-kekecilan';
    return 'salah-fakta-kali';
}
