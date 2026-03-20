'use client';

import { useMemo } from 'react';
import { HeatmapDay } from '@/lib/types';
import { clsx } from 'clsx';

interface HeatMapProps {
  data: HeatmapDay[];
}

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DAYS   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

function intensityClass(count: number): string {
  if (count === 0) return 'bg-[var(--surface)] border border-[var(--border)]';
  if (count === 1) return 'bg-[#0e4429] dark:bg-[#0e4429] bg-[#9be9a8]';
  if (count === 2) return 'bg-[#26a641] dark:bg-[#26a641] bg-[#40c463]';
  if (count === 3) return 'bg-[#39d353] dark:bg-[#39d353] bg-[#30a14e]';
  return               'bg-[#39d353]';
}

// Dark-mode–aware intensity (single class approach)
function cellClass(count: number): string {
  if (count === 0) return 'bg-[var(--surface)] border border-[var(--border)] opacity-60';
  if (count === 1) return 'bg-[#0e4429]';
  if (count === 2) return 'bg-[#006d32]';
  if (count === 3) return 'bg-[#26a641]';
  return               'bg-[#39d353]';
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

  // Month labels — find first week of each month
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
    <div className="overflow-x-auto">
      <div className="inline-block">
        {/* Month labels */}
        <div className="flex mb-1" style={{ marginLeft: 28 }}>
          {monthLabels.map(({ label, col }, i) => (
            <div
              key={i}
              className="text-xs text-[var(--muted)] font-mono"
              style={{ position: 'relative', left: col * 14, minWidth: 0 }}
            >
              {label}
            </div>
          ))}
        </div>

        <div className="flex gap-0">
          {/* Day-of-week labels */}
          <div className="flex flex-col gap-[2px] mr-1">
            {DAYS.map((d, i) => (
              <div
                key={d}
                className="text-[10px] text-[var(--muted)] font-mono h-[11px] flex items-center"
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
                      'w-[11px] h-[11px] rounded-[2px] cursor-default transition-opacity hover:opacity-80',
                      cellClass(day.count)
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
            <div key={n} className={clsx('w-[11px] h-[11px] rounded-[2px]', cellClass(n))} />
          ))}
          <span className="text-xs text-[var(--muted)] font-mono">More</span>
        </div>
      </div>
    </div>
  );
}
