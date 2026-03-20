import { Difficulty } from '@/lib/types';
import { clsx } from 'clsx';

const styles: Record<Difficulty, string> = {
  Easy:   'text-[var(--green)]  bg-[var(--green)]/10  border-[var(--green)]/30',
  Medium: 'text-[var(--yellow)] bg-[var(--yellow)]/10 border-[var(--yellow)]/30',
  Hard:   'text-[var(--red)]    bg-[var(--red)]/10    border-[var(--red)]/30',
};

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium border',
        styles[difficulty]
      )}
    >
      {difficulty}
    </span>
  );
}
