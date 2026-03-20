import { Suspense } from 'react';
import { getAllSolvedProblems, getAllPlannedProblems } from '@/lib/problems';
import { ProblemTable } from '@/components/ProblemTable';

export default function LibraryPage() {
  const solved = getAllSolvedProblems();
  const planned = getAllPlannedProblems();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold font-mono text-[var(--text)]">
          <span className="text-[var(--blue)]">~/</span>library
        </h1>
        <p className="text-[var(--muted)] font-mono text-sm mt-1">
          {solved.length} solved · {planned.length} planned
        </p>
      </div>

      {/*
        ProblemTable is a 'use client' component that reads ?tag= via useSearchParams().
        It must be wrapped in Suspense (required by Next.js for static export + useSearchParams).
      */}
      <Suspense fallback={<TableSkeleton />}>
        <ProblemTable solved={solved} planned={planned} />
      </Suspense>
    </div>
  );
}

function TableSkeleton() {
  return (
    <div className="border border-[var(--border)] rounded-lg overflow-hidden animate-pulse">
      <div className="h-10 bg-[var(--surface)] border-b border-[var(--border)]" />
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-12 border-b border-[var(--border)] last:border-0" />
      ))}
    </div>
  );
}
