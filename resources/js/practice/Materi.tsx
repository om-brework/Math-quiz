/* Materi pelajaran sebagai kartu-kartu bergambar:
 * - setiap bagian (## …) jadi kartu dengan ikon dan warnanya sendiri,
 * - blok ```anim dan ```visual menjadi animasi / gambar,
 * - contoh soal dibuka langkah demi langkah,
 * - "Cek pemahaman" jadi kartu soal dengan tombol "Lihat jawaban" per soal.
 */
import { cn } from '@/lib/utils';
import 'katex/dist/katex.min.css';
import { AlertTriangle, BookOpen, CheckCircle2, ChevronDown, Eye, Lightbulb, ListOrdered, PencilLine, Sparkles, type LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, type ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { Anim, StaticVisual } from './anim';
import { SoalBlock } from './anim/soal';

/* ---------- Markdown dengan blok anim/visual ---------- */

function Md({ children, className }: { children: string; className?: string }) {
    return (
        <div className={cn('materi', className)}>
            <ReactMarkdown
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex]}
                components={{
                    pre: ({ children }) => <>{children}</>,
                    code: ({ className, children }) => {
                        const lang = /language-(\w+)/.exec(className ?? '')?.[1];
                        const text = String(children).replace(/\n$/, '');
                        if (lang === 'anim') return <Anim source={text} />;
                        if (lang === 'visual') return <StaticVisual source={text} />;
                        if (lang === 'soal') return <SoalBlock source={text} />;
                        if (!className && !text.includes('\n')) return <code>{children}</code>;
                        return <pre className="papan"><code>{text}</code></pre>;
                    },
                }}
            >
                {children}
            </ReactMarkdown>
        </div>
    );
}

/* ---------- Pemecah teks ---------- */

interface Section { title: string; body: string }

function sections(body: string): { intro: string; list: Section[] } {
    const parts = body.split(/^## /m);
    return { intro: parts[0].trim(), list: parts.slice(1).map((p) => { const nl = p.indexOf('\n'); return { title: p.slice(0, nl).trim(), body: p.slice(nl + 1).trim() }; }) };
}

/** potong di setiap baris "### …" */
function subsections(body: string): { intro: string; list: Section[] } {
    const parts = body.split(/^### /m);
    return { intro: parts[0].trim(), list: parts.slice(1).map((p) => { const nl = p.indexOf('\n'); return { title: p.slice(0, nl).trim(), body: p.slice(nl + 1).trim() }; }) };
}

/** potong di setiap baris yang diawali "N. " (di luar blok kode). Teks sebelum nomor pertama = pembuka. */
function numbered(body: string): { intro: string; items: { n: number; text: string }[] } {
    const lines = body.split('\n');
    let inCode = false;
    const intro: string[] = [];
    const items: { n: number; text: string[] }[] = [];
    for (const line of lines) {
        if (/^\s*```/.test(line)) inCode = !inCode;
        const m = !inCode && /^(\d+)\.\s/.exec(line);
        if (m) items.push({ n: Number(m[1]), text: [line] });
        else if (items.length) items[items.length - 1].text.push(line);
        else intro.push(line);
    }
    return { intro: intro.join('\n').trim(), items: items.map((x) => ({ n: x.n, text: x.text.join('\n').trim() })) };
}

/** potong di setiap butir "- " tingkat atas */
function bullets(body: string): { intro: string; items: string[] } {
    const lines = body.split('\n');
    const intro: string[] = [], items: string[][] = [];
    for (const line of lines) {
        if (/^- /.test(line)) items.push([line.slice(2)]);
        else if (items.length) items[items.length - 1].push(line);
        else intro.push(line);
    }
    return { intro: intro.join('\n').trim(), items: items.map((x) => x.join('\n').trim()) };
}

/* ---------- Kartu ---------- */

const THEME: Record<string, { icon: LucideIcon; ring: string; head: string; chip: string }> = {
    kenapa: { icon: Lightbulb, ring: 'border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/30', head: 'text-amber-800 dark:text-amber-300', chip: 'bg-amber-400' },
    analogi: { icon: Sparkles, ring: 'border-violet-200 bg-violet-50 dark:border-violet-900 dark:bg-violet-950/30', head: 'text-violet-800 dark:text-violet-300', chip: 'bg-violet-500' },
    konsep: { icon: BookOpen, ring: 'border-sky-200 bg-white dark:border-sky-900 dark:bg-slate-900', head: 'text-sky-800 dark:text-sky-300', chip: 'bg-sky-500' },
    contoh: { icon: ListOrdered, ring: 'border-emerald-200 bg-white dark:border-emerald-900 dark:bg-slate-900', head: 'text-emerald-800 dark:text-emerald-300', chip: 'bg-emerald-500' },
    kesalahan: { icon: AlertTriangle, ring: 'border-rose-200 bg-rose-50/60 dark:border-rose-900 dark:bg-rose-950/20', head: 'text-rose-800 dark:text-rose-300', chip: 'bg-rose-500' },
    ringkasan: { icon: CheckCircle2, ring: 'border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/30', head: 'text-emerald-800 dark:text-emerald-300', chip: 'bg-emerald-500' },
    cek: { icon: PencilLine, ring: 'border-orange-200 bg-orange-50/60 dark:border-orange-900 dark:bg-orange-950/20', head: 'text-orange-800 dark:text-orange-300', chip: 'bg-orange-500' },
    lain: { icon: BookOpen, ring: 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900', head: 'text-slate-800 dark:text-slate-200', chip: 'bg-slate-400' },
};

function kindOf(title: string): keyof typeof THEME {
    const t = title.toLowerCase();
    if (t.startsWith('kenapa')) return 'kenapa';
    if (t.startsWith('analogi')) return 'analogi';
    if (t.startsWith('konsep')) return 'konsep';
    if (t.startsWith('contoh')) return 'contoh';
    if (t.startsWith('kesalahan')) return 'kesalahan';
    if (t.startsWith('ringkasan')) return 'ringkasan';
    if (t.startsWith('cek')) return 'cek';
    return 'lain';
}

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function Card({ title, kind, children }: { title: string; kind: keyof typeof THEME; children: ReactNode }) {
    const th = THEME[kind];
    const Icon = th.icon;
    return (
        <motion.section id={slug(title)} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.45 }}
            className={cn('-mx-1 scroll-mt-20 rounded-3xl border-2 p-4 sm:mx-0 sm:p-7', th.ring)}>
            <h2 className={cn('font-display mb-3 flex items-center gap-3 text-2xl leading-tight font-bold sm:text-3xl', th.head)}>
                <span className={cn('flex size-11 flex-none items-center justify-center rounded-2xl text-white shadow-sm', th.chip)}><Icon className="size-6" /></span>
                {title}
            </h2>
            {children}
        </motion.section>
    );
}

/* ---------- Bagian khusus ---------- */

/** Satu contoh soal: pembuka selalu tampak, langkah dibuka satu per satu. */
function Example({ title, body }: { title: string; body: string }) {
    const { intro, items } = numbered(body);
    // baris jawaban akhir ("**Jawaban:** …") dipisah dari langkah terakhir
    let answer = '';
    if (items.length) {
        const last = items[items.length - 1];
        const at = last.text.search(/^\*\*Jawaban/m);
        if (at >= 0) { answer = last.text.slice(at).trim(); last.text = last.text.slice(0, at).trim(); }
    }
    const interactive = /```soal/.test(body);
    const [shown, setShown] = useState(items.length ? 1 : 0);
    const all = shown >= items.length;
    if (interactive) {
        return (
            <div className="-mx-2 mt-5 overflow-hidden rounded-2xl border-2 border-emerald-100 sm:mx-0 dark:border-emerald-900">
                <h3 className="bg-emerald-600 px-4 py-2 font-bold text-white">{title}</h3>
                <div className="p-3 sm:p-4"><Md>{body.replace(/^\*\*Jawaban.*$/m, '').replace(/^\*\*Soal\.\*\*.*$/m, '')}</Md></div>
            </div>
        );
    }
    return (
        <div className="-mx-2 mt-5 overflow-hidden rounded-2xl border-2 border-emerald-100 sm:mx-0 dark:border-emerald-900">
            <h3 className="bg-emerald-600 px-4 py-2 font-bold text-white">{title}</h3>
            <div className="p-3 sm:p-4">
                {intro && <Md>{intro}</Md>}
                {items.length > 0 && (
                    <div className="mt-2 flex flex-col gap-2">
                        {items.slice(0, shown).map((it) => (
                            <motion.div key={it.n} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="rounded-xl bg-emerald-50/70 px-3 py-1 dark:bg-emerald-950/30">
                                <Md className="langkah">{it.text}</Md>
                            </motion.div>
                        ))}
                    </div>
                )}
                {!all ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                        <button type="button" onClick={() => setShown(shown + 1)} className="flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 font-bold text-white shadow-[0_3px_0_#047857] active:translate-y-0.5">
                            Langkah berikutnya <ChevronDown className="size-4" />
                        </button>
                        <button type="button" onClick={() => setShown(items.length)} className="rounded-full px-3 py-2 text-sm font-semibold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">Tampilkan semua</button>
                        <span className="self-center text-sm text-slate-400">{shown} dari {items.length} langkah</span>
                    </div>
                ) : answer && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-3 rounded-xl bg-emerald-600 px-4 py-2 text-white [&_.materi]:text-white">
                        <Md>{answer}</Md>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

function Mistakes({ body }: { body: string }) {
    const { intro, items } = bullets(body);
    return (
        <>
            {intro && <Md>{intro}</Md>}
            <div className="grid gap-3 sm:grid-cols-2">
                {items.map((t, k) => (
                    <div key={k} className="flex gap-3 rounded-2xl bg-white p-3 shadow-sm dark:bg-slate-900">
                        <span className="mt-1 flex size-7 flex-none items-center justify-center rounded-full bg-rose-100 font-bold text-rose-600 dark:bg-rose-950">!</span>
                        <Md className="text-[0.95rem]">{t}</Md>
                    </div>
                ))}
            </div>
        </>
    );
}

function Summary({ body }: { body: string }) {
    const { intro, items } = bullets(body);
    return (
        <>
            {intro && <Md>{intro}</Md>}
            <ul className="flex flex-col gap-2">
                {items.map((t, k) => (
                    <li key={k} className="flex gap-3 rounded-2xl bg-white/80 p-3 dark:bg-slate-900/60">
                        <CheckCircle2 className="mt-1 size-5 flex-none text-emerald-600" />
                        <Md>{t}</Md>
                    </li>
                ))}
            </ul>
        </>
    );
}

function Practice({ body, answerKey }: { body: string; answerKey?: string }) {
    if (/```soal/.test(body)) return <Md>{body}</Md>;
    const { intro, items } = numbered(body);
    const answers = new Map(numbered(answerKey ?? '').items.map((x) => [x.n, x.text.replace(/^\d+\.\s*/, '')]));
    return (
        <>
            {intro && <Md>{intro}</Md>}
            <div className="flex flex-col gap-3">
                {items.map((q) => <PracticeItem key={q.n} n={q.n} text={q.text.replace(/^\d+\.\s*/, '')} answer={answers.get(q.n)} />)}
            </div>
        </>
    );
}

function PracticeItem({ n, text, answer }: { n: number; text: string; answer?: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900">
            <div className="flex gap-3">
                <span className="font-display flex size-9 flex-none items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">{n}</span>
                <Md className="flex-1">{text}</Md>
            </div>
            {answer && (open ? (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-3 rounded-xl bg-emerald-50 px-3 py-1 dark:bg-emerald-950/40">
                    <Md>{answer}</Md>
                </motion.div>
            ) : (
                <button type="button" onClick={() => setOpen(true)} className="mt-3 ml-12 flex items-center gap-1.5 rounded-full border-2 border-orange-200 px-3 py-1 text-sm font-bold text-orange-700 hover:bg-orange-50 dark:border-orange-900 dark:text-orange-300">
                    <Eye className="size-4" /> Lihat jawaban
                </button>
            ))}
        </div>
    );
}

/* ---------- Halaman ---------- */

export function Materi({ body }: { body: string }) {
    const { intro, list } = sections(body);
    return (
        <div className="flex flex-col gap-5">
            <nav className="not-prose -mx-1 flex gap-2 overflow-x-auto px-1 pb-1" aria-label="Bagian materi">
                {list.map((s) => {
                    const th = THEME[kindOf(s.title)];
                    const Icon = th.icon;
                    return (
                        <a key={s.title} href={`#${slug(s.title)}`} className="flex flex-none items-center gap-1.5 rounded-full border-2 border-slate-200 bg-white px-3 py-1.5 text-sm font-bold whitespace-nowrap text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                            <Icon className="size-4" /> {s.title}
                        </a>
                    );
                })}
            </nav>
            {intro && <Md>{intro}</Md>}
            {list.map((s) => {
                const kind = kindOf(s.title);
                if (kind === 'contoh') {
                    const sub = subsections(s.body);
                    return (
                        <Card key={s.title} title={s.title} kind={kind}>
                            {sub.intro && <Md>{sub.intro}</Md>}
                            {sub.list.map((ex) => <Example key={ex.title} title={ex.title} body={ex.body} />)}
                        </Card>
                    );
                }
                if (kind === 'konsep') {
                    const sub = subsections(s.body);
                    return (
                        <Card key={s.title} title={s.title} kind={kind}>
                            {sub.intro && <Md>{sub.intro}</Md>}
                            <div className="flex flex-col gap-4">
                                {sub.list.map((c) => (
                                    <div key={c.title} className="rounded-2xl border-2 border-sky-100 bg-sky-50/40 p-4 dark:border-sky-900 dark:bg-sky-950/20">
                                        <h3 className="mb-1 text-lg font-extrabold text-sky-900 dark:text-sky-200">{c.title}</h3>
                                        <Md>{c.body}</Md>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    );
                }
                if (kind === 'kesalahan') return <Card key={s.title} title={s.title} kind={kind}><Mistakes body={s.body} /></Card>;
                if (kind === 'ringkasan') return <Card key={s.title} title={s.title} kind={kind}><Summary body={s.body} /></Card>;
                if (kind === 'cek') {
                    const at = s.body.indexOf('### Kunci jawaban');
                    const q = at >= 0 ? s.body.slice(0, at) : s.body;
                    const k = at >= 0 ? s.body.slice(at).replace('### Kunci jawaban', '') : '';
                    return <Card key={s.title} title={s.title} kind={kind}><Practice body={q} answerKey={k} /></Card>;
                }
                return <Card key={s.title} title={s.title} kind={kind}><Md className={kind === 'kenapa' ? 'text-lg' : undefined}>{s.body}</Md></Card>;
            })}
        </div>
    );
}
