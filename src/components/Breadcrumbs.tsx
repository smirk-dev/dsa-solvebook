'use client';

import Link from 'next/link';
import { clsx } from 'clsx';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      className="mb-6 flex items-center gap-2 text-sm font-mono text-[var(--muted)]"
      aria-label="Breadcrumb"
    >
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-[var(--text)] hover:underline transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--text)]">{item.label}</span>
          )}
          {idx < items.length - 1 && <span className="opacity-50">/</span>}
        </div>
      ))}
    </nav>
  );
}
