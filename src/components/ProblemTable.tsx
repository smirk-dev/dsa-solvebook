'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ProblemMeta, PlannedProblem, Difficulty } from '@/lib/types';
import { DifficultyBadge } from './DifficultyBadge';
import { TagBadge } from './TagBadge';
import { clsx } from 'clsx';

type AnyProblem = ProblemMeta | PlannedProblem;

interface ProblemTableProps {
  solved: ProblemMeta[];
  planned: PlannedProblem[];
}

const DIFFICULTIES: Difficulty[] = ['Easy', 'Medium', 'Hard'];

type SortKey = 'id' | 'title' | 'difficulty' | 'date';
type SortDir = 'asc' | 'desc';

const DIFF_ORDER: Record<Difficulty, number> = { Easy: 0, Medium: 1, Hard: 2 };

export function ProblemTable({ solved, planned }: ProblemTableProps) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');
  // Read ?tag= from URL on first render (e.g. from FocusCards links)
  const [activeTag, setActiveTag] = useState<string>(searchParams.get('tag') ?? '');
  const [activeDiff, setActiveDiff] = useState<Difficulty | ''>('');
  const [showPlanned, setShowPlanned] = useState(true);
  const [showSolved, setShowSolved] = useState(true);
  const [sortKey, setSortKey] = useState<SortKey>('id');
  const [sortDir, setSortDir] = useState<SortDir>('asc');

  // All unique tags
  const allTags = useMemo(() => {
    const set = new Set<string>();
    [...solved, ...planned].forEach((p) => p.tags.forEach((t) => set.add(t)));
    return [...set].sort();
  }, [solved, planned]);

  const combined: AnyProblem[] = useMemo(() => {
    const list: AnyProblem[] = [];
    if (showSolved) list.push(...solved);
    if (showPlanned) list.push(...planned);
    return list;
  }, [solved, planned, showSolved, showPlanned]);

  const filtered = useMemo(() => {
    return combined.filter((p) => {
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.slug.includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.id.includes(q);
      const matchesTag = !activeTag || p.tags.includes(activeTag);
      const matchesDiff = !activeDiff || p.difficulty === activeDiff;
      return matchesQuery && matchesTag && matchesDiff;
    });
  }, [combined, query, activeTag, activeDiff]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      let cmp = 0;
      if (sortKey === 'id')         cmp = Number(a.id) - Number(b.id);
      else if (sortKey === 'title') cmp = a.title.localeCompare(b.title);
      else if (sortKey === 'difficulty')
        cmp = DIFF_ORDER[a.difficulty] - DIFF_ORDER[b.difficulty];
      else if (sortKey === 'date') {
        const da = (a as ProblemMeta).date_solved ?? '';
        const db = (b as ProblemMeta).date_solved ?? '';
        cmp = da.localeCompare(db);
      }
      return sortDir === 'asc' ? cmp : -cmp;
    });
  }, [filtered, sortKey, sortDir]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else { setSortKey(key); setSortDir('asc'); }
  };

  const SortIcon = ({ k }: { k: SortKey }) => {
    if (sortKey !== k) return <span className="opacity-30">↕</span>;
    return <span>{sortDir === 'asc' ? '↑' : '↓'}</span>;
  };

  return (
    <div className="space-y-4">
      {/* Search + filters */}
      <div className="flex flex-col gap-3">
        {/* Search bar */}
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, tag, or #id…"
            className="w-full pl-10 pr-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-lg text-sm font-mono text-[var(--text)] placeholder-[var(--muted)] outline-none focus:border-[var(--blue)] transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--text)]"
            >
              ✕
            </button>
          )}
        </div>

        {/* Status toggles */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setShowSolved((s) => !s)}
            className={clsx(
              'px-3 py-1 rounded-md text-xs font-mono border transition-colors',
              showSolved
                ? 'bg-[var(--green)]/10 border-[var(--green)]/40 text-[var(--green)]'
                : 'border-[var(--border)] text-[var(--muted)]'
            )}
          >
            ✓ Solved ({solved.length})
          </button>
          <button
            onClick={() => setShowPlanned((s) => !s)}
            className={clsx(
              'px-3 py-1 rounded-md text-xs font-mono border transition-colors',
              showPlanned
                ? 'bg-[var(--blue)]/10 border-[var(--blue)]/40 text-[var(--blue)]'
                : 'border-[var(--border)] text-[var(--muted)]'
            )}
          >
            ◷ Planned ({planned.length})
          </button>

          <div className="w-px h-4 bg-[var(--border)]" />

          {/* Difficulty filters */}
          {DIFFICULTIES.map((d) => (
            <button
              key={d}
              onClick={() => setActiveDiff((prev) => (prev === d ? '' : d))}
              className={clsx(
                'px-3 py-1 rounded-md text-xs font-mono border transition-colors',
                activeDiff === d
                  ? d === 'Easy'
                    ? 'bg-[var(--green)]/10 border-[var(--green)]/40 text-[var(--green)]'
                    : d === 'Medium'
                    ? 'bg-[var(--yellow)]/10 border-[var(--yellow)]/40 text-[var(--yellow)]'
                    : 'bg-[var(--red)]/10 border-[var(--red)]/40 text-[var(--red)]'
                  : 'border-[var(--border)] text-[var(--muted)]'
              )}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Tag chips */}
        <div className="flex flex-wrap gap-1.5">
          {activeTag && (
            <TagBadge
              tag={`✕ ${activeTag}`}
              active
              onClick={() => setActiveTag('')}
            />
          )}
          {allTags
            .filter((t) => t !== activeTag)
            .map((tag) => (
              <TagBadge
                key={tag}
                tag={tag}
                onClick={() => setActiveTag(tag)}
              />
            ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs font-mono text-[var(--muted)]">
        {sorted.length} problem{sorted.length !== 1 ? 's' : ''}
        {query && ` matching "${query}"`}
      </p>

      {/* Table */}
      <div className="border border-[var(--border)] rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[var(--surface)] border-b border-[var(--border)]">
            <tr>
              <th
                className="px-4 py-2.5 text-left font-mono text-xs text-[var(--muted)] cursor-pointer hover:text-[var(--text)] w-16"
                onClick={() => toggleSort('id')}
              >
                # <SortIcon k="id" />
              </th>
              <th
                className="px-4 py-2.5 text-left font-mono text-xs text-[var(--muted)] cursor-pointer hover:text-[var(--text)]"
                onClick={() => toggleSort('title')}
              >
                Title <SortIcon k="title" />
              </th>
              <th
                className="px-4 py-2.5 text-left font-mono text-xs text-[var(--muted)] cursor-pointer hover:text-[var(--text)] hidden sm:table-cell"
                onClick={() => toggleSort('difficulty')}
              >
                Difficulty <SortIcon k="difficulty" />
              </th>
              <th className="px-4 py-2.5 text-left font-mono text-xs text-[var(--muted)] hidden md:table-cell">
                Tags
              </th>
              <th
                className="px-4 py-2.5 text-left font-mono text-xs text-[var(--muted)] cursor-pointer hover:text-[var(--text)] hidden lg:table-cell"
                onClick={() => toggleSort('date')}
              >
                Date <SortIcon k="date" />
              </th>
              <th className="px-4 py-2.5 text-left font-mono text-xs text-[var(--muted)]">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {sorted.map((p) => {
              const isSolved = p.status === 'solved';
              return (
                <tr
                  key={`${p.status}-${p.slug}`}
                  className="hover:bg-[var(--surface)] transition-colors group"
                >
                  <td className="px-4 py-3 font-mono text-xs text-[var(--muted)]">
                    {p.id}
                  </td>
                  <td className="px-4 py-3">
                    {isSolved ? (
                      <Link
                        href={`/problems/${p.slug}`}
                        className="font-mono text-[var(--text)] hover:text-[var(--blue)] transition-colors"
                      >
                        {p.title}
                      </Link>
                    ) : (
                      <span className="font-mono text-[var(--muted)]">{p.title}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    <DifficultyBadge difficulty={p.difficulty} />
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {p.tags.slice(0, 3).map((tag) => (
                        <TagBadge key={tag} tag={tag} onClick={() => setActiveTag(tag)} />
                      ))}
                      {p.tags.length > 3 && (
                        <span className="text-xs font-mono text-[var(--muted)]">
                          +{p.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell font-mono text-xs text-[var(--muted)]">
                    {isSolved ? (p as ProblemMeta).date_solved : '—'}
                  </td>
                  <td className="px-4 py-3">
                    {isSolved ? (
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-[var(--green)]">
                        <span>✓</span> Solved
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-[var(--blue)]">
                        <span>◷</span> Planned
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {sorted.length === 0 && (
          <div className="text-center py-12 text-[var(--muted)] font-mono text-sm">
            No problems match your filters.
          </div>
        )}
      </div>
    </div>
  );
}
