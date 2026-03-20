'use client';

import { useMemo } from 'react';
import { HeatmapDay } from '@/lib/types';
import { clsx } from 'clsx';

interface HeatMapProps {
  data: HeatmapDay[];
}

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DAYS   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

/**
 * Returns Tailwind classes for a cell based on solve count.
 * Uses CSS variables so the palette adapts to dark/light mode automatically.
 */
function cellStyle(count: number): string {
  // Inline style approach — CSS custom properties make this theme-aware
  return count === 0 ? 'cell-empty' : `cell-level-${Math.min(count, 4)}`;
}

export function HeatMap({ data }: HeatMapProps) {
  const weeks = useMemo(() => {
    const cols: HeatmapDay[][] = [];
    let col: HeatmapDay[] = [];
    for (const day of data) {
      col.push(day);
      if (col.length === 7) {
        cols.push(col);
        col = [];
      }
    }
    if (col.length) cols.push(col);
    return cols;
  }, [data]);

  // Month labels — first week that starts a new month
  const monthLabels = useMemo(() => {
    const labels: { label: string; col: number }[] = [];
    let lastMonth = -1;
    weeks.forEach((week, wi) => {
      const m = new Date(week[0].date).getMonth();
      if (m !== lastMonth) {
        labels.push({ label: MONTHS[m], col: wi });
        lastMonth = m;
      }
    });
    return labels;
  }, [weeks]);

  return (
    <>
      {/* Inline styles injected once — avoids needing arbitrary Tailwind values */}
      <style>{`
        .cell-empty    { background: var(--hm-0); border: 1px solid var(--border); opacity: 0.7; }
        .cell-level-1  { background: var(--hm-1); }
        .cell-level-2  { background: var(--hm-2); }
        .cell-level-3  { background: var(--hm-3); }
        .cell-level-4  { background: var(--hm-4); }

        /* Dark mode palette */
        :root.dark {
          --hm-0: #161b22;
          --hm-1: #0e4429;
          --hm-2: #006d32;
          --hm-3: #26a641;
          --hm-4: #39d353;
        }
        /* Light mode palette */
        :root:not(.dark) {
          --hm-0: #ebedf0;
          --hm-1: #9be9a8;
          --hm-2: #40c463;
          --hm-3: #30a14e;
          --hm-4: #216e39;
        }
      `}</style>

      <div className="overflow-x-auto">
        <div className="inline-block">
          {/* Month labels */}
          <div className="flex mb-1" style={{ marginLeft: 28 }}>
            {monthLabels.map(({ label, col }, i) => (
              <div
                key={i}
                className="text-xs text-[var(--muted)] font-mono absolute"
                style={{ left: col * 13 }}
              >
                {label}
              </div>
            ))}
            {/* spacer so the relative container has the right width */}
            <div style={{ width: weeks.length * 13 }} />
          </div>

          <div className="flex gap-0">
            {/* Day-of-week labels */}
            <div className="flex flex-col gap-[2px] mr-1.5">
              {DAYS.map((d, i) => (
                <div
                  key={d}
                  className="text-[10px] text-[var(--muted)] font-mono h-[11px] flex items-center pr-1"
                  style={{ opacity: i % 2 === 1 ? 1 : 0 }}
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Grid */}
            <div className="flex gap-[2px]">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[2px]">
                  {week.map((day) => (
                    <div
                      key={day.date}
                      title={`${day.date}: ${day.count} solved`}
                      className={clsx(
                        'w-[11px] h-[11px] rounded-[2px] cursor-default transition-opacity hover:opacity-75',
                        cellStyle(day.count)
                      )}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-1.5 mt-2 justify-end">
            <span className="text-xs text-[var(--muted)] font-mono">Less</span>
            {[0, 1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className={clsx('w-[11px] h-[11px] rounded-[2px]', cellStyle(n))}
              />
            ))}
            <span className="text-xs text-[var(--muted)] font-mono">More</span>
          </div>
        </div>
      </div>
    </>
  );
}
