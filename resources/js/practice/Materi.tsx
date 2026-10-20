/* Isi materi: Markdown + LaTeX. Bagian "Kunci jawaban" disembunyikan sampai anak membukanya. */
import 'katex/dist/katex.min.css';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

const md = (text: string) => <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{text}</ReactMarkdown>;

export function Materi({ body }: { body: string }) {
    const at = body.indexOf('### Kunci jawaban');
    const main = at >= 0 ? body.slice(0, at) : body;
    const kunci = at >= 0 ? body.slice(at).replace('### Kunci jawaban', '').trim() : null;
    return (
        <article className="materi">
            {md(main)}
            {kunci && (
                <details className="mt-4 rounded-2xl border-2 border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/40">
                    <summary className="cursor-pointer font-bold text-amber-900 dark:text-amber-200">Kunci jawaban (buka setelah mencoba sendiri)</summary>
                    <div className="mt-2">{md(kunci)}</div>
                </details>
            )}
        </article>
    );
}
