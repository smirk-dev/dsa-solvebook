export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type Status = 'solved' | 'planned';
export type ThemeMode = 'dim' | 'dark' | 'black';
export type ThemeSetting = ThemeMode | 'light' | 'system';

/** Solution approach with code and complexity */
export interface SolutionApproach {
  id: string;                      // unique ID for this approach
  language: string;                // 'python3', 'javascript', etc.
  approach_name: string;           // 'Two Pointers', 'Binary Search', etc.
  time_complexity: string;         // 'O(n)', 'O(n log n)', etc.
  space_complexity: string;        // 'O(1)', 'O(n)', etc.
  code: string;                    // actual code
  explanation?: string;            // brief explanation of this approach
}

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
  content: string;                 // Full raw markdown
  description: string;             // Problem statement markdown
  solution: string;                // Primary code solution
  editorial: string;               // Notes/editorial markdown
  approaches?: SolutionApproach[]; // Multiple solution approaches
}

/** Goal tracking */
export interface Goal {
  id: string;
  period: 'weekly' | 'monthly';  // 'weekly' = week starting Sunday, 'monthly' = calendar month
  target: number;                 // e.g. 5 problems per week
  tags?: string[];                // optional: filter by tags
  difficulty?: Difficulty;        // optional: filter by difficulty
}

export interface GoalProgress {
  goal: Goal;
  current: number;
  target: number;
  percentage: number;
  completed: boolean;
  period_start: string;           // "YYYY-MM-DD"
  period_end: string;
}

export interface GoalsIndex {
  goals: Goal[];
}

/** Heatmap data point */
export interface HeatmapDay {
  date: string;    // "YYYY-MM-DD"
  count: number;
}

/** Language breakdown for analytics */
export interface LanguageBreakdown {
  language: string;
  count: number;
  percentage: number;
}

/** Monthly solve data for analytics */
export interface MonthlySolveData {
  month: string;           // "YYYY-MM"
  count: number;
}

/** Stats for the dashboard */
export interface SolveStats {
  total: number;
  easy: number;
  medium: number;
  hard: number;
  streak: number;                   // current streak in days
  longestStreak: number;
  topTags: Array<{ tag: string; count: number }>;
  heatmap: HeatmapDay[];
  languageBreakdown?: LanguageBreakdown[];
  monthlyStats?: MonthlySolveData[];
}
