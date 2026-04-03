import { getAllSolvedProblems, getAllPlannedProblems } from '@/lib/problems';
import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/problems?tags=array,dp&difficulty=medium&language=python3&status=solved
 *
 * Returns filtered list of problems
 * Query parameters:
 *   - tags: comma-separated tag names (matches any tag — OR logic)
 *   - difficulty: 'Easy' | 'Medium' | 'Hard'                                                     1
 *   - language: programming language (e.g., 'python3', 'javascript')
 *   - status: 'solved' | 'planned' (default: both)
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const tagsParam = searchParams.get('tags');
    const difficultyParam = searchParams.get('difficulty');
    const languageParam = searchParams.get('language');
    const statusParam = searchParams.get('status') || 'all'; // 'solved', 'planned', 'all'

    const tags = tagsParam ? tagsParam.split(',').map((t) => t.trim()) : [];
    const difficulty = difficultyParam ? difficultyParam : null;
    const language = languageParam ? languageParam : null;

    let results: any[] = [];

    // Get solved problems
    if (statusParam === 'solved' || statusParam === 'all') {
      const solved = getAllSolvedProblems();
      results.push(
        ...solved.filter((p) => {
          const matchesTags = tags.length === 0 || tags.some((t) => p.tags.includes(t));
          const matchesDiff = !difficulty || p.difficulty === difficulty;
          const matchesLang = !language || p.language === language;
          return matchesTags && matchesDiff && matchesLang;
        })
      );
    }

    // Get planned problems
    if (statusParam === 'planned' || statusParam === 'all') {
      const planned = getAllPlannedProblems();
      results.push(
        ...planned.filter((p) => {
          const matchesTags = tags.length === 0 || tags.some((t) => p.tags.includes(t));
          const matchesDiff = !difficulty || p.difficulty === difficulty;
          return matchesTags && matchesDiff;
        })
      );
    }

    return NextResponse.json({
      success: true,
      count: results.length,
      problems: results,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
