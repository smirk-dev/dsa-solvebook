'use client';

import { useEffect, useRef, useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'python' }: CodeBlockProps) {
  const ref = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  // Extract raw code from a fenced markdown block if present
  const rawCode = extractCode(code);

  useEffect(() => {
    // Dynamically import highlight.js to avoid SSR issues
    import('highlight.js').then((hljs) => {
      if (ref.current) {
        ref.current.textContent = rawCode;
        hljs.default.highlightElement(ref.current);
      }
    });
  }, [rawCode]);

  const copy = async () => {
    await navigator.clipboard.writeText(rawCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="flex items-center justify-between bg-[var(--surface)] border border-[var(--border)] rounded-t-lg px-4 py-2">
        <span className="text-xs font-mono text-[var(--muted)]">{language}</span>
        <button
          onClick={copy}
          className="text-xs font-mono text-[var(--muted)] hover:text-[var(--text)] transition-colors"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className="m-0 rounded-t-none rounded-b-lg border border-t-0 border-[var(--border)] overflow-x-auto">
        <code ref={ref} className={`language-${language} hljs`}>
          {rawCode}
        </code>
      </pre>
    </div>
  );
}

function extractCode(raw: string): string {
  // Strip fenced code block markers if present
  const match = raw.match(/^```[\w]*\n?([\s\S]*?)```$/m);
  return match ? match[1].trim() : raw.trim();
}
