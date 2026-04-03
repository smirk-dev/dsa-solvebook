'use client';

import { GoalProgress } from '@/lib/types';

interface GoalProgressWidgetProps {
  goalProgress: GoalProgress[];
}

export function GoalProgressWidget({ goalProgress }: GoalProgressWidgetProps) {
  if (goalProgress.length === 0) {
    return (
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 text-center text-[var(--muted)]">
        No goals configured. Edit <code className="text-xs">data/goals.json</code> to add goals.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {goalProgress.map((gp) => (
        <div
          key={gp.goal.id}
          className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="font-mono text-sm font-semibold text-[var(--text)]">
                {gp.goal.period === 'weekly' ? 'Weekly' : 'Monthly'} Goal
              </p>
              <p className="text-xs text-[var(--muted)] font-mono">
                {gp.period_start} to {gp.period_end}
              </p>
            </div>
            <div className="text-right">
              <p className="font-mono font-bold text-lg text-[var(--blue)]">
                {gp.current} / {gp.target}
              </p>
              <p className={`text-xs font-mono font-semibold ${gp.completed ? 'text-[var(--green)]' : 'text-[var(--muted)]'}`}>
                {gp.percentage}%
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-[var(--border)] rounded-full h-2 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${
                gp.completed ? 'bg-[var(--green)]' : 'bg-[var(--blue)]'
              }`}
              style={{ width: `${gp.percentage}%` }}
            />
          </div>

          {/* Filters */}
          {(gp.goal.tags || gp.goal.difficulty) && (
            <p className="text-xs text-[var(--muted)] font-mono mt-3">
              {gp.goal.tags && gp.goal.tags.length > 0
                ? `Tags: ${gp.goal.tags.join(', ')}`
                : ''}{' '}
              {gp.goal.difficulty && `${gp.goal.tags ? ' · ' : ''}Difficulty: ${gp.goal.difficulty}`}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
