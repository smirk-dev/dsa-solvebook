'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ProblemMeta } from '@/lib/types';
import { DifficultyBadge } from './DifficultyBadge';
import { clsx } from 'clsx';

interface SearchModalProps {
  problems: ProblemMeta[];
}

export function SearchModal({ problems }: SearchModalProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const results = problems
    .filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.slug.includes(query.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
    )
    .slice(0, 8);

  const openModal = useCallback(() => {
    setOpen(true);
    setQuery('');
    setSelectedIdx(0);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    setQuery('');
  }, []);

  const navigate = useCallback((slug: string) => {
    router.push(`/problems/${slug}`);
    closeModal();
  }, [router, closeModal]);

  // Global Cmd+K / Ctrl+K listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        open ? closeModal() : openModal();
      }
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, openModal, closeModal]);

  // Focus input when modal opens
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  // Arrow key navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && results[selectedIdx]) {
      navigate(results[selectedIdx].slug);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]"
      onClick={closeModal}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-xl mx-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center px-4 border-b border-[var(--border)]">
          <SearchIcon className="w-4 h-4 text-[var(--muted)] flex-shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelectedIdx(0); }}
            onKeyDown={handleKeyDown}
            placeholder="Search problems…"
            className="flex-1 bg-transparent px-3 py-4 text-sm font-mono text-[var(--text)] placeholder-[var(--muted)] outline-none"
          />
          <kbd className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] rounded px-1.5 py-0.5">
            esc
          </kbd>
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <ul className="max-h-72 overflow-y-auto py-2">
            {results.map((p, i) => (
              <li key={p.slug}>
                <button
                  onClick={() => navigate(p.slug)}
                  className={clsx(
                    'w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors',
                    i === selectedIdx
                      ? 'bg-[var(--surface)]'
                      : 'hover:bg-[var(--surface)]/50'
                  )}
                >
                  <span className="text-xs font-mono text-[var(--muted)] w-8 flex-shrink-0">
                    #{p.id}
                  </span>
                  <span className="flex-1 text-sm font-mono text-[var(--text)] truncate">
                    {p.title}
                  </span>
                  <DifficultyBadge difficulty={p.difficulty} />
                </button>
              </li>
            ))}
          </ul>
        ) : query ? (
          <div className="px-4 py-8 text-center text-sm font-mono text-[var(--muted)]">
            No problems found for &quot;{query}&quot;
          </div>
        ) : (
          <div className="px-4 py-4">
            <p className="text-xs font-mono text-[var(--muted)] mb-2 uppercase tracking-wider">
              Recent
            </p>
            <ul>
              {problems.slice(0, 5).map((p, i) => (
                <li key={p.slug}>
                  <button
                    onClick={() => navigate(p.slug)}
                    className={clsx(
                      'w-full flex items-center gap-3 px-2 py-2 rounded text-left transition-colors',
                      i === selectedIdx
                        ? 'bg-[var(--surface)]'
                        : 'hover:bg-[var(--surface)]/50'
                    )}
                  >
                    <span className="text-xs font-mono text-[var(--muted)] w-8">#{p.id}</span>
                    <span className="flex-1 text-sm font-mono text-[var(--text)] truncate">{p.title}</span>
                    <DifficultyBadge difficulty={p.difficulty} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center gap-4 px-4 py-2 border-t border-[var(--border)] text-xs font-mono text-[var(--muted)]">
          <span><kbd className="border border-[var(--border)] rounded px-1">↑↓</kbd> navigate</span>
          <span><kbd className="border border-[var(--border)] rounded px-1">↵</kbd> open</span>
          <span><kbd className="border border-[var(--border)] rounded px-1">esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );
}
