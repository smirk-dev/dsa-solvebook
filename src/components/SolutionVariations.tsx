'use client';

import { useState } from 'react';
import { SolutionApproach } from '@/lib/types';
import { CodeBlock } from './CodeBlock';
import { clsx } from 'clsx';

interface SolutionVariationsProps {
  approaches?: SolutionApproach[];
}

export function SolutionVariations({ approaches }: SolutionVariationsProps) {
  const [activeApproachId, setActiveApproachId] = useState(approaches?.[0]?.id || '');

  if (!approaches || approaches.length === 0) {
    return null;
  }

  const activeApproach = approaches.find((a) => a.id === activeApproachId) || approaches[0];

  return (
    <div className="space-y-4">
      {/* Approach tabs */}
      {approaches.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {approaches.map((approach) => (
            <button
              key={approach.id}
              onClick={() => setActiveApproachId(approach.id)}
              className={clsx(
                'px-3 py-1.5 rounded-md text-sm font-mono whitespace-nowrap transition-colors',
                activeApproachId === approach.id
                  ? 'bg-[var(--blue)] text-white border border-[var(--blue)]'
                  : 'border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)]'
              )}
            >
              {approach.approach_name}
            </button>
          ))}
        </div>
      )}

      {/* Active approach details */}
      <div className="space-y-3">
        {/* Complexity */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-mono text-[var(--muted)] uppercase mb-1">
                Time Complexity
              </p>
              <p className="font-mono font-semibold text-[var(--text)]">
                {activeApproach.time_complexity}
              </p>
            </div>
            <div>
              <p className="text-xs font-mono text-[var(--muted)] uppercase mb-1">
                Space Complexity
              </p>
              <p className="font-mono font-semibold text-[var(--text)]">
                {activeApproach.space_complexity}
              </p>
            </div>
          </div>
        </div>

        {/* Explanation */}
        {activeApproach.explanation && (
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-3">
            <p className="text-xs font-mono text-[var(--muted)] uppercase mb-2">Approach</p>
            <p className="text-sm text-[var(--text)] leading-relaxed whitespace-pre-wrap">
              {activeApproach.explanation}
            </p>
          </div>
        )}

        {/* Code block */}
        <div>
          <p className="text-xs font-mono text-[var(--muted)] uppercase mb-2">Code</p>
          <CodeBlock code={activeApproach.code} language={activeApproach.language} />
        </div>
      </div>
    </div>
  );
}
