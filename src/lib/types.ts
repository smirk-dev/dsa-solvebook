export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type Status = 'solved' | 'planned';

export interface ProblemMeta {
  id: string;
  title: string;
  slug: string;
  difficulty: Difficulty;
  tags: string[];
  language: string;
  date_solved: string;    // ISO date string, e.g. "2024-03-15"
  status: 'solved';
  submission_id?: string;
}

export interface PlannedProblem {
  id: string;
  title: string;
  slug: string;
  difficulty: Difficulty;
  tags: string[];
  status: 'planned';
  notes?: string;
}

export type AnyProblem = ProblemMeta | PlannedProblem;

export interface ProblemIndex {
  problems: ProblemMeta[];
  last_updated: string;
  total_solved: number;
}

export interface PlannedIndex {
  problems: PlannedProblem[];
}

/** Full problem data including parsed markdown content */
export interface ProblemDetail extends ProblemMeta {
  content: string;       // Full raw markdown (problem + solution + editorial)
  description: string;   // Problem statement markdown
  solution: string;      // Code solution (fenced code block content)
  editorial: string;     // Notes/editorial markdown
}

/** Heatmap data point */
export interface HeatmapDay {
  date: string;    // "YYYY-MM-DD"
  count: number;
}

/** Stats for the dashboard */
export interface SolveStats {
  total: number;
  easy: number;
  medium: number;
  hard: number;
  streak: number;           // current streak in days
  longestStreak: number;
  topTags: Array<{ tag: string; count: number }>;
  heatmap: HeatmapDay[];
}
