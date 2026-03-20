import { getAllSolvedProblems, getAllPlannedProblems } from '@/lib/problems';
import { ProblemTable } from '@/components/ProblemTable';

interface Props {
  searchParams: { tag?: string };
}

export default function LibraryPage({ searchParams }: Props) {
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

      {/* Table — fully client-side for filtering/sorting */}
      <ProblemTable
        solved={solved}
        planned={planned}
        initialTag={searchParams.tag}
      />
    </div>
  );
}
