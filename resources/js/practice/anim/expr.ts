/* Pengurai ekspresi matematika kecil (tanpa eval) untuk animasi grafik.
   Mendukung: angka, x, pi, e, + − * / ^, tanda kurung, perkalian tersirat (2x, 3(x+1), x(x-2)),
   fungsi sin cos tan exp ln log sqrt abs. */

type Fn = (x: number) => number;
const FUNCS: Record<string, (v: number) => number> = {
    sin: Math.sin, cos: Math.cos, tan: Math.tan, exp: Math.exp, ln: Math.log, log: Math.log10, sqrt: Math.sqrt, abs: Math.abs,
};

export function compile(src: string): Fn {
    const s = src.replace(/\s+/g, '').replace(/−/g, '-').replace(/×/g, '*').replace(/·/g, '*').replace(/\*\*/g, '^');
    let i = 0;
    const peek = () => s[i];
    const fail = (m: string): never => { throw new Error(`Ekspresi "${src}": ${m}`); };

    // expr := term (('+'|'-') term)*
    function expr(): Fn {
        let f = term();
        while (peek() === '+' || peek() === '-') {
            const op = s[i++]; const g = term(); const a = f;
            f = op === '+' ? (x) => a(x) + g(x) : (x) => a(x) - g(x);
        }
        return f;
    }
    // term := unary (('*'|'/'|implicit) unary)*
    function term(): Fn {
        let f = unary();
        for (;;) {
            const c = peek();
            if (c === '*' || c === '/') {
                i++; const g = unary(); const a = f;
                f = c === '*' ? (x) => a(x) * g(x) : (x) => a(x) / g(x);
            } else if (c !== undefined && /[0-9a-z(.]/i.test(c)) {
                const g = unary(); const a = f; f = (x) => a(x) * g(x);
            } else return f;
        }
    }
    // unary := '-' unary | power
    function unary(): Fn {
        if (peek() === '-') { i++; const g = unary(); return (x) => -g(x); }
        if (peek() === '+') { i++; return unary(); }
        return power();
    }
    // power := atom ('^' unary)?
    function power(): Fn {
        const b = atom();
        if (peek() === '^') { i++; const e = unary(); return (x) => Math.pow(b(x), e(x)); }
        return b;
    }
    function atom(): Fn {
        const c = peek();
        if (c === '(') { i++; const f = expr(); if (s[i++] !== ')') fail('kurung tidak tertutup'); return f; }
        const num = /^\d*\.?\d+/.exec(s.slice(i));
        if (num) { i += num[0].length; const v = Number(num[0]); return () => v; }
        const id = /^[a-z]+/i.exec(s.slice(i));
        if (id) {
            const w = id[0];
            const fn = Object.keys(FUNCS).find((k) => w.startsWith(k));
            if (fn) { i += fn.length; const arg = atom(); return (x) => FUNCS[fn](arg(x)); }
            if (w.startsWith('pi')) { i += 2; return () => Math.PI; }
            if (w[0] === 'x') { i += 1; return (x) => x; }
            if (w[0] === 'e') { i += 1; return () => Math.E; }
            fail(`nama "${w}" tidak dikenal`);
        }
        return fail(`karakter "${c ?? 'akhir'}" tidak terduga`);
    }
    const f = expr();
    if (i < s.length) fail(`sisa "${s.slice(i)}"`);
    return f;
}
