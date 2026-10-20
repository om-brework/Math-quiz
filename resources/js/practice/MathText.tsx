import 'katex/dist/katex.min.css';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

/** Teks soal atau langkah: Markdown ringan + LaTeX ($...$). */
export function MathText({ children, className }: { children: string; className?: string }) {
    return (
        <span className={className}>
            <ReactMarkdown
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex]}
                components={{ p: ({ children }) => <span className="block">{children}</span> }}
            >
                {children}
            </ReactMarkdown>
        </span>
    );
}
