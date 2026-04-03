'use client';

import { SolveStats } from '@/lib/types';

interface AnalyticsProps {
  stats: SolveStats;
}

export function Analytics({ stats }: AnalyticsProps) {
  const languageBreakdown = stats.languageBreakdown || [];
  const monthlyStats = stats.monthlyStats || [];

  return (
    <div className="space-y-6">
      {/* Language breakdown */}
      {languageBreakdown.length > 0 && (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4">
          <h3 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-4">
            Language Breakdown
          </h3>
          <div className="space-y-2">
            {languageBreakdown.map((lang) => (
              <div key={lang.language} className="flex items-center justify-between">
                <p className="font-mono text-sm text-[var(--text)]">{lang.language}</p>
                <div className="flex items-center gap-3">
                  <div className="h-2 bg-[var(--border)] rounded-full overflow-hidden flex-1 w-32">
                    <div
                      className="h-full bg-[var(--blue)] rounded-full transition-all"
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs font-mono text-[var(--muted)] w-12 text-right">
                    {lang.percentage}% ({lang.count})
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Monthly solve stats */}
      {monthlyStats.length > 0 && (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4">
          <h3 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-4">
            Monthly Solves (Last 12 Months)
          </h3>
          <div className="space-y-2">
            {monthlyStats.map((data) => {
              const maxCount = Math.max(...monthlyStats.map((m) => m.count), 1);
              const percentage = (data.count / maxCount) * 100;
              return (
                <div key={data.month} className="flex items-center justify-between">
                  <p className="font-mono text-sm text-[var(--muted)] w-16">{data.month}</p>
                  <div className="flex items-center gap-3 flex-1">
                    <div className="h-2 bg-[var(--border)] rounded-full overflow-hidden flex-1">
                      <div
                        className="h-full bg-[var(--green)] rounded-full transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <p className="text-xs font-mono text-[var(--text)] w-8 text-right">
                      {data.count}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Difficulty distribution */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4">
        <h3 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-4">
          Difficulty Distribution
        </h3>
        <div className="space-y-2">
          {[
            { label: 'Easy', count: stats.easy, color: 'var(--green)' },
            { label: 'Medium', count: stats.medium, color: 'var(--yellow)' },
            { label: 'Hard', count: stats.hard, color: 'var(--red)' },
          ].map((diff) => {
            const percentage = (diff.count / stats.total) * 100;
            return (
              <div key={diff.label} className="flex items-center justify-between">
                <p className="font-mono text-sm text-[var(--text)]">{diff.label}</p>
                <div className="flex items-center gap-3">
                  <div className="h-2 bg-[var(--border)] rounded-full overflow-hidden w-32">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ 
                        width: `${percentage}%`,
                        backgroundColor: `var(--${diff.label.toLowerCase()})`
                      }}
                    />
                  </div>
                  <p className="text-xs font-mono text-[var(--muted)] w-12 text-right">
                    {percentage.toFixed(0)}% ({diff.count})
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
