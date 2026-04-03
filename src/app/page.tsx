import { getSolveStats, getProblemIndex, getGoalProgress } from '@/lib/problems';
import { StatCards } from '@/components/StatCards';
import { FocusCards } from '@/components/FocusCards';
import { HeatMap } from '@/components/HeatMap';
import { Analytics } from '@/components/Analytics';
import { GoalProgressWidget } from '@/components/GoalProgressWidget';
import Link from 'next/link';

export default function DashboardPage() {
  const stats = getSolveStats();
  const index = getProblemIndex();
  const goalProgress = getGoalProgress();

  const recentProblems = [...index.problems]
    .sort((a, b) => b.date_solved.localeCompare(a.date_solved))
    .slice(0, 5);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="text-[var(--muted)] font-mono text-sm mb-1">
          Last updated: {new Date(index.last_updated).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
          })}
        </p>
        <h1 className="text-3xl font-bold font-mono text-[var(--text)]">
          <span className="text-[var(--green)]">$</span> dsa-solvebook
        </h1>
        <p className="text-[var(--muted)] font-mono text-sm mt-2">
          Automated LeetCode proof-of-work portfolio — zero manual entry.
        </p>
      </div>

      {/* Stats */}
      <section>
        <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-3">
          Overview
        </h2>
        <StatCards stats={stats} />
      </section>

      {/* Heatmap */}
      <section>
        <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-3">
          Activity — Last 52 Weeks
        </h2>
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4">
          <HeatMap data={stats.heatmap} />
        </div>
      </section>

      {/* Focus cards */}
      <FocusCards stats={stats} />

      {/* Goals */}
      {goalProgress.length > 0 && (
        <section>
          <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-3">
            Progress Goals
          </h2>
          <GoalProgressWidget goalProgress={goalProgress} />
        </section>
      )}

      {/* Analytics */}
      <section>
        <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-3">
          Analytics
        </h2>
        <Analytics stats={stats} />
      </section>

      {/* Recent solves */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">
            Recently Solved
          </h2>
          <Link
            href="/problems"
            className="text-xs font-mono text-[var(--blue)] hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="space-y-1">
          {recentProblems.map((p) => (
            <Link
              key={p.slug}
              href={`/problems/${p.slug}`}
              className="flex items-center gap-4 px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg hover:border-[var(--muted)] transition-colors group"
            >
              <span className="text-xs font-mono text-[var(--muted)] w-10">#{p.id}</span>
              <span className="flex-1 font-mono text-sm text-[var(--text)] group-hover:text-[var(--blue)] transition-colors">
                {p.title}
              </span>
              <span
                className={
                  p.difficulty === 'Easy'
                    ? 'text-xs font-mono text-[var(--green)]'
                    : p.difficulty === 'Medium'
                    ? 'text-xs font-mono text-[var(--yellow)]'
                    : 'text-xs font-mono text-[var(--red)]'
                }
              >
                {p.difficulty}
              </span>
              <span className="text-xs font-mono text-[var(--muted)] hidden sm:block">
                {p.date_solved}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
