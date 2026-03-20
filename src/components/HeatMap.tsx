'use client';

import { useMemo } from 'react';
import { HeatmapDay } from '@/lib/types';
import { clsx } from 'clsx';

interface HeatMapProps {
  data: HeatmapDay[];
}

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
// Show label only for odd-indexed days to avoid clutter (Mon, Wed, Fri)
const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

const CELL = 11;   // px — cell width/height
const GAP  = 2;    // px — gap between cells
const STEP = CELL + GAP; // 13px per column/row
const DAY_COL_W = 28; // px — width reserved for Mon/Wed/Fri labels

function cellLevel(count: number): number {
  return count === 0 ? 0 : Math.min(count, 4);
}

export function HeatMap({ data }: HeatMapProps) {
  // Split flat data into 7-day columns (weeks)
  const weeks = useMemo(() => {
    const cols: HeatmapDay[][] = [];
    let col: HeatmapDay[] = [];
    for (const day of data) {
      col.push(day);
      if (col.length === 7) { cols.push(col); col = []; }
    }
    if (col.length) cols.push(col);
    return cols;
  }, [data]);

  // Month labels: first week index where the month changes
  const monthLabels = useMemo(() => {
    const labels: { label: string; colIndex: number }[] = [];
    let lastMonth = -1;
    weeks.forEach((week, wi) => {
      const m = new Date(week[0].date + 'T00:00:00').getMonth();
      if (m !== lastMonth) {
        labels.push({ label: MONTHS[m], colIndex: wi });
        lastMonth = m;
      }
    });
    return labels;
  }, [weeks]);

  const gridWidth = weeks.length * STEP;

  if (data.length === 0) {
    return (
      <p className="text-[var(--muted)] font-mono text-sm py-4">
        No activity yet — run the scraper to populate your heatmap.
      </p>
    );
  }

  return (
    <>
      <style>{`
        .hm-0 { background: var(--hm-0); border: 1px solid var(--border); }
        .hm-1 { background: var(--hm-1); }
        .hm-2 { background: var(--hm-2); }
        .hm-3 { background: var(--hm-3); }
        .hm-4 { background: var(--hm-4); }
        :root.dark  { --hm-0:#161b22; --hm-1:#0e4429; --hm-2:#006d32; --hm-3:#26a641; --hm-4:#39d353; }
        :root:not(.dark) { --hm-0:#ebedf0; --hm-1:#9be9a8; --hm-2:#40c463; --hm-3:#30a14e; --hm-4:#216e39; }
      `}</style>

      <div className="overflow-x-auto select-none">
        <div className="inline-flex flex-col" style={{ minWidth: DAY_COL_W + gridWidth }}>

          {/* ── Month labels ─────────────────────────────────────────────── */}
          <div className="relative mb-1" style={{ marginLeft: DAY_COL_W, height: 16 }}>
            {monthLabels.map(({ label, colIndex }) => (
              <span
                key={`${label}-${colIndex}`}
                className="absolute text-[10px] text-[var(--muted)] font-mono leading-none"
                style={{ left: colIndex * STEP }}
              >
                {label}
              </span>
            ))}
          </div>

          {/* ── Grid + day labels ─────────────────────────────────────────── */}
          <div className="flex gap-0">
            {/* Day-of-week labels (Mon / Wed / Fri) */}
            <div
              className="flex flex-col justify-between pr-1.5 pb-[2px]"
              style={{ width: DAY_COL_W, paddingTop: 1 }}
            >
              {DAY_LABELS.map((label, i) => (
                <span
                  key={i}
                  className="text-[10px] text-[var(--muted)] font-mono leading-none"
                  style={{ height: CELL, lineHeight: `${CELL}px`, marginBottom: i < 6 ? GAP : 0 }}
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Week columns */}
            <div className="flex" style={{ gap: GAP }}>
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col" style={{ gap: GAP }}>
                  {week.map((day) => (
                    <div
                      key={day.date}
                      title={`${day.date}: ${day.count} solved`}
                      className={clsx(
                        'rounded-[2px] cursor-default transition-opacity hover:opacity-70',
                        `hm-${cellLevel(day.count)}`
                      )}
                      style={{ width: CELL, height: CELL }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* ── Legend ───────────────────────────────────────────────────── */}
          <div className="flex items-center gap-[3px] mt-2 justify-end">
            <span className="text-[10px] text-[var(--muted)] font-mono mr-1">Less</span>
            {[0,1,2,3,4].map((n) => (
              <div
                key={n}
                className={clsx('rounded-[2px]', `hm-${n}`)}
                style={{ width: CELL, height: CELL }}
              />
            ))}
            <span className="text-[10px] text-[var(--muted)] font-mono ml-1">More</span>
          </div>

        </div>
      </div>
    </>
  );
}
