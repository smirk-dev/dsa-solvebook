import { SolveStats } from '@/lib/types';
import { clsx } from 'clsx';

interface StatCardsProps {
  stats: SolveStats;
}

export function StatCards({ stats }: StatCardsProps) {
  const cards = [
    {
      label: 'Total Solved',
      value: stats.total,
      color: 'text-[var(--blue)]',
      icon: '◎',
    },
    {
      label: 'Easy',
      value: stats.easy,
      color: 'text-[var(--green)]',
      icon: '○',
    },
    {
      label: 'Medium',
      value: stats.medium,
      color: 'text-[var(--yellow)]',
      icon: '◑',
    },
    {
      label: 'Hard',
      value: stats.hard,
      color: 'text-[var(--red)]',
      icon: '●',
    },
    {
      label: 'Current Streak',
      value: `${stats.streak}d`,
      color: 'text-[var(--purple)]',
      icon: '⚡',
    },
    {
      label: 'Longest Streak',
      value: `${stats.longestStreak}d`,
      color: 'text-[var(--muted)]',
      icon: '🏆',
    },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
      {cards.map((card) => (
        <div
          key={card.label}
          className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-3 flex flex-col gap-1"
        >
          <span className="text-xs font-mono text-[var(--muted)]">{card.label}</span>
          <span className={clsx('text-2xl font-bold font-mono', card.color)}>
            {card.value}
          </span>
        </div>
      ))}
    </div>
  );
}
