'use client';

import { useState } from 'react';
import { useTheme, THEME_LABELS_EXPORT } from './ThemeProvider';
import { clsx } from 'clsx';

export function ThemeToggle() {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--muted)] transition-colors text-sm font-mono"
        aria-label="Toggle theme"
        aria-expanded={isOpen}
      >
        <MoonIcon />
        <span>Theme</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-md border border-[var(--border)] bg-[var(--surface)] shadow-lg z-50">
          {themes.map((t) => (
            <button
              key={t}
              onClick={() => {
                setTheme(t);
                setIsOpen(false);
              }}
              className={clsx(
                'w-full text-left px-4 py-2 text-sm font-mono transition-colors',
                theme === t
                  ? 'bg-[var(--border)] text-[var(--text)] font-semibold'
                  : 'text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--border)]'
              )}
            >
              <span className="mr-2">{t === theme ? '✓' : ' '}</span>
              {THEME_LABELS_EXPORT[t as keyof typeof THEME_LABELS_EXPORT]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}
