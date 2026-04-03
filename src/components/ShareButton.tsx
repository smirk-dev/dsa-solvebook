'use client';

import { useState } from 'react';
import { clsx } from 'clsx';

interface ShareButtonProps {
  problemTitle: string;
  problemSlug: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
}

export function ShareButton({ problemTitle, problemSlug, difficulty, tags }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const problemUrl = `${baseUrl}/problems/${problemSlug}`;
  const text = `I solved "${problemTitle}" (${difficulty}) on LeetCode using dsa-solvebook`;

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(problemUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(problemUrl)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const handleShareLinkedIn = () => {
    const linkedInUrl = `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(problemUrl)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--muted)] transition-colors text-sm font-mono"
        aria-label="Share problem"
        aria-expanded={isOpen}
      >
        <ShareIcon />
        <span>Share</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-md border border-[var(--border)] bg-[var(--surface)] shadow-lg z-50">
          <button
            onClick={() => {
              handleShareTwitter();
              setIsOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm font-mono text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--border)] transition-colors flex items-center gap-2"
          >
            <TwitterIcon />
            Twitter
          </button>
          <button
            onClick={() => {
              handleShareLinkedIn();
              setIsOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm font-mono text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--border)] transition-colors flex items-center gap-2"
          >
            <LinkedInIcon />
            LinkedIn
          </button>
          <button
            onClick={() => {
              handleCopyLink();
              setIsOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm font-mono text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--border)] transition-colors flex items-center gap-2"
          >
            <LinkIcon />
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      )}
    </div>
  );
}

function ShareIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.953 4.57a10 10 0 002.856-3.556 3.993 3.993 0 01-1.12 1.37 4 4 0 001.12-1.12 2 2 0 01-1.12.5 2 2 0 001.12-1.12 4 4 0 01-1.12.56 2 2 0 00-3.46 1.82 5.5 5.5 0 01-4-2 2 2 0 00-.67 2.67 2 2 0 00.56 1.1 1.99 1.99 0 01-.88-.25v.02a2 2 0 001.6 1.96 2 2 0 01-.88.03 2 2 0 001.88 1.36A4 4 0 012 7.7a5.5 5.5 0 003 1h2a3 3 0 003-3 3 3 0 003-3.46 4.5 4.5 0 001.13-2.94z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.002 1.413-.103.25-.129.597-.129.945v5.447h-3.554s.047-8.842 0-9.769h3.554v1.381c.43-.664 1.2-1.612 2.923-1.612 2.136 0 3.736 1.393 3.736 4.388v5.612zM5.337 9.433c-1.144 0-1.915-.761-1.915-1.715 0-.955.77-1.715 1.958-1.715 1.188 0 1.915.761 1.915 1.715 0 .954-.727 1.715-1.958 1.715zm1.581 11.019H3.756V9.684h3.162v10.768zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}
