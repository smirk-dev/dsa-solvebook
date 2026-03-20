'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { clsx } from 'clsx';

const NAV_LINKS = [
  { href: '/', label: '~/dashboard' },
  { href: '/problems', label: '~/library' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-mono font-bold text-[var(--text)] hover:text-[var(--blue)] transition-colors">
            <span className="text-[var(--green)]">▶</span> dsa-solvebook
          </Link>

          <div className="hidden sm:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  'px-3 py-1.5 rounded-md text-sm font-mono transition-colors',
                  pathname === href
                    ? 'bg-[var(--surface)] text-[var(--text)] border border-[var(--border)]'
                    : 'text-[var(--muted)] hover:text-[var(--text)]'
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <kbd className="hidden md:flex items-center gap-1 px-2 py-1 text-xs font-mono text-[var(--muted)] border border-[var(--border)] rounded">
            <span>⌘</span><span>K</span>
          </kbd>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
