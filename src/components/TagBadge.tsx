import { clsx } from 'clsx';

interface TagBadgeProps {
  tag: string;
  active?: boolean;
  onClick?: () => void;
}

export function TagBadge({ tag, active, onClick }: TagBadgeProps) {
  const base =
    'inline-flex items-center px-2 py-0.5 rounded text-xs font-mono border transition-colors';

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={clsx(
          base,
          active
            ? 'bg-[var(--blue)]/20 border-[var(--blue)]/50 text-[var(--blue)]'
            : 'bg-[var(--surface)] border-[var(--border)] text-[var(--muted)] hover:border-[var(--muted)] hover:text-[var(--text)]'
        )}
      >
        {tag}
      </button>
    );
  }

  return (
    <span
      className={clsx(
        base,
        'bg-[var(--surface)] border-[var(--border)] text-[var(--muted)]'
      )}
    >
      {tag}
    </span>
  );
}
