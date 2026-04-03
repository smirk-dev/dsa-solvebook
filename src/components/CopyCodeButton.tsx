'use client';

import { useState } from 'react';

interface CopyCodeButtonProps {
  code: string;
}

export function CopyCodeButton({ code }: CopyCodeButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 px-3 py-1.5 rounded-md border border-[var(--border)] text-xs font-mono text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--muted)] transition-colors bg-[var(--surface)] hover:bg-[var(--border)]"
      aria-label="Copy code"
    >
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  );
}
