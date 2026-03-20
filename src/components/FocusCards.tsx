import { SolveStats } from '@/lib/types';
import Link from 'next/link';

interface FocusCardsProps {
  stats: SolveStats;
}

const TAG_COLORS = [
  'border-[var(--blue)] text-[var(--blue)]',
  'border-[var(--purple)] text-[var(--purple)]',
  'border-[var(--green)] text-[var(--green)]',
];

export function FocusCards({ stats }: FocusCardsProps) {
  const top3 = stats.topTags.slice(0, 3);

  return (
    <div>
      <h2 className="text-sm font-mono text-[var(--muted)] uppercase tracking-widest mb-3">
        Current Focus
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {top3.map(({ tag, count }, i) => (
          <Link
            key={tag}
            href={`/problems?tag=${encodeURIComponent(tag)}`}
            className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 hover:border-[var(--muted)] transition-colors group"
          >
            <div className={`text-xs font-mono mb-2 ${TAG_COLORS[i]}`}>
              #{i + 1} tag
            </div>
            <div className="font-mono font-semibold text-[var(--text)] group-hover:text-[var(--blue)] transition-colors">
              {tag}
            </div>
            <div className="text-sm text-[var(--muted)] font-mono mt-1">
              {count} problem{count !== 1 ? 's' : ''}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
