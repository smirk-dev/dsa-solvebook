import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {
  ProblemIndex,
  PlannedIndex,
  ProblemMeta,
  PlannedProblem,
  ProblemDetail,
  SolveStats,
  HeatmapDay,
  GoalsIndex,
  GoalProgress,
  LanguageBreakdown,
  MonthlySolveData,
} from './types';

const DATA_DIR = path.join(process.cwd(), 'data');
const PROBLEMS_DIR = path.join(DATA_DIR, 'problems');

// ─── Index helpers ────────────────────────────────────────────────────────────

export function getProblemIndex(): ProblemIndex {
  const raw = fs.readFileSync(path.join(DATA_DIR, 'index.json'), 'utf-8');
  return JSON.parse(raw) as ProblemIndex;
}

export function getPlannedIndex(): PlannedIndex {
  const raw = fs.readFileSync(path.join(DATA_DIR, 'planned.json'), 'utf-8');
  return JSON.parse(raw) as PlannedIndex;
}

export function getGoalsIndex(): GoalsIndex {
  const path_ = path.join(DATA_DIR, 'goals.json');
  if (!fs.existsSync(path_)) return { goals: [] };
  const raw = fs.readFileSync(path_, 'utf-8');
  return JSON.parse(raw) as GoalsIndex;
}

export function getAllSolvedProblems(): ProblemMeta[] {
  return getProblemIndex().problems;
}

export function getAllPlannedProblems(): PlannedProblem[] {
  return getPlannedIndex().problems;
}

/** Returns all slugs for solved problems — used in generateStaticParams */
export function getAllSolvedSlugs(): string[] {
  return getAllSolvedProblems().map((p) => p.slug);
}

// ─── Problem detail ───────────────────────────────────────────────────────────

export function getProblemBySlug(slug: string): ProblemDetail | null {
  const filePath = path.join(PROBLEMS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  // Split content into sections delimited by H2 headings
  const sections = splitSections(content);

  return {
    id: String(data.id ?? ''),
    title: String(data.title ?? slug),
    slug,
    difficulty: data.difficulty ?? 'Easy',
    tags: Array.isArray(data.tags) ? data.tags : [],
    language: String(data.language ?? 'python3'),
    date_solved: String(data.date_solved ?? ''),
    status: 'solved',
    submission_id: data.submission_id ? String(data.submission_id) : undefined,
    content,
    description: sections.description ?? '',
    solution: sections.solution ?? '',
    editorial: sections.editorial ?? '',
  };
}

/**
 * Splits markdown content into:
 *   ## Problem  → description
 *   ## Solution → solution
 *   ## Editorial → editorial
 */
function splitSections(content: string): {
  description: string;
  solution: string;
  editorial: string;
} {
  const result = { description: '', solution: '', editorial: '' };
  const lines = content.split('\n');
  let current: keyof typeof result | null = null;
  const buckets: Record<string, string[]> = {
    description: [],
    solution: [],
    editorial: [],
  };

  for (const line of lines) {
    const trimmed = line.trimEnd();
    if (/^## Problem/i.test(trimmed)) { current = 'description'; continue; }
    if (/^## Solution/i.test(trimmed)) { current = 'solution'; continue; }
    if (/^## Editorial/i.test(trimmed)) { current = 'editorial'; continue; }
    if (current) buckets[current].push(line);
  }

  result.description = buckets.description.join('\n').trim();
  result.solution = buckets.solution.join('\n').trim();
  result.editorial = buckets.editorial.join('\n').trim();
  return result;
}

// ─── Stats ────────────────────────────────────────────────────────────────────

export function getSolveStats(): SolveStats {
  const problems = getAllSolvedProblems();

  const easy = problems.filter((p) => p.difficulty === 'Easy').length;
  const medium = problems.filter((p) => p.difficulty === 'Medium').length;
  const hard = problems.filter((p) => p.difficulty === 'Hard').length;

  // Tag frequency
  const tagCount: Record<string, number> = {};
  for (const p of problems) {
    for (const tag of p.tags) {
      tagCount[tag] = (tagCount[tag] ?? 0) + 1;
    }
  }
  const topTags = Object.entries(tagCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([tag, count]) => ({ tag, count }));

  // Heatmap — last 53 weeks
  const heatmap = buildHeatmap(problems);

  // Streak calculation
  const { streak, longestStreak } = calcStreak(problems);

  // Language breakdown
  const languageBreakdown = buildLanguageBreakdown(problems);

  // Monthly stats
  const monthlyStats = buildMonthlySolveData(problems);

  return {
    total: problems.length,
    easy,
    medium,
    hard,
    streak,
    longestStreak,
    topTags,
    heatmap,
    languageBreakdown,
    monthlyStats,
  };
}

function buildHeatmap(problems: ProblemMeta[]): HeatmapDay[] {
  const countByDate: Record<string, number> = {};
  for (const p of problems) {
    const day = p.date_solved.slice(0, 10); // "YYYY-MM-DD"
    countByDate[day] = (countByDate[day] ?? 0) + 1;
  }

  const days: HeatmapDay[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Go back 52 weeks (364 days) + offset to Sunday
  const offset = today.getDay(); // 0=Sun
  const start = new Date(today);
  start.setDate(start.getDate() - 364 - offset);

  const cursor = new Date(start);
  while (cursor <= today) {
    const key = cursor.toISOString().slice(0, 10);
    days.push({ date: key, count: countByDate[key] ?? 0 });
    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
}

function calcStreak(problems: ProblemMeta[]): {
  streak: number;
  longestStreak: number;
} {
  if (problems.length === 0) return { streak: 0, longestStreak: 0 };

  const dates = Array.from(new Set(problems.map((p) => p.date_solved.slice(0, 10)))).sort();
  const today = new Date().toISOString().slice(0, 10);

  let streak = 0;
  let longestStreak = 0;
  let current = 1;

  // Current streak from today backwards
  let d = new Date(today);
  while (true) {
    const key = d.toISOString().slice(0, 10);
    if (dates.includes(key)) {
      streak++;
      d.setDate(d.getDate() - 1);
    } else {
      break;
    }
  }

  // Longest streak
  for (let i = 1; i < dates.length; i++) {
    const prev = new Date(dates[i - 1]);
    const curr = new Date(dates[i]);
    const diff = (curr.getTime() - prev.getTime()) / 86400000;
    if (diff === 1) {
      current++;
    } else {
      longestStreak = Math.max(longestStreak, current);
      current = 1;
    }
  }
  longestStreak = Math.max(longestStreak, current);

  return { streak, longestStreak };
}

function buildLanguageBreakdown(problems: ProblemMeta[]): LanguageBreakdown[] {
  const langCount: Record<string, number> = {};
  for (const p of problems) {
    langCount[p.language] = (langCount[p.language] ?? 0) + 1;
  }

  const total = problems.length;
  return Object.entries(langCount)
    .map(([language, count]) => ({
      language,
      count,
      percentage: Math.round((count / total) * 100),
    }))
    .sort((a, b) => b.count - a.count);
}

function buildMonthlySolveData(problems: ProblemMeta[]): MonthlySolveData[] {
  const monthCount: Record<string, number> = {};
  for (const p of problems) {
    const month = p.date_solved.slice(0, 7); // "YYYY-MM"
    monthCount[month] = (monthCount[month] ?? 0) + 1;
  }

  return Object.entries(monthCount)
    .map(([month, count]) => ({ month, count }))
    .sort((a, b) => a.month.localeCompare(b.month))
    .slice(-12); // Last 12 months
}

// ─── Goals ────────────────────────────────────────────────────────────────────

export function getGoalProgress(): GoalProgress[] {
  const goals = getGoalsIndex().goals;
  const problems = getAllSolvedProblems();
  const today = new Date();

  return goals.map((goal) => {
    const { periodStart, periodEnd } = getPeriodRange(goal.period, today);
    
    // Filter problems matching the goal criteria and period
    const matching = problems.filter((p) => {
      const solveDate = new Date(p.date_solved);
      const inPeriod = solveDate >= periodStart && solveDate <= periodEnd;
      const matchesTags = !goal.tags || goal.tags.length === 0 || goal.tags.some((t) => p.tags.includes(t));
      const matchesDiff = !goal.difficulty || p.difficulty === goal.difficulty;
      return inPeriod && matchesTags && matchesDiff;
    });

    const current = matching.length;
    const percentage = Math.min(100, Math.round((current / goal.target) * 100));

    return {
      goal,
      current,
      target: goal.target,
      percentage,
      completed: current >= goal.target,
      period_start: periodStart.toISOString().slice(0, 10),
      period_end: periodEnd.toISOString().slice(0, 10),
    };
  });
}

function getPeriodRange(
  period: 'weekly' | 'monthly',
  date: Date
): { periodStart: Date; periodEnd: Date } {
  if (period === 'weekly') {
    const dayOfWeek = date.getDay(); // 0 = Sunday
    const start = new Date(date);
    start.setDate(date.getDate() - dayOfWeek);
    start.setHours(0, 0, 0, 0);

    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    end.setHours(23, 59, 59, 999);

    return { periodStart: start, periodEnd: end };
  } else {
    // monthly
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    end.setHours(23, 59, 59, 999);
    return { periodStart: start, periodEnd: end };
  }
}
