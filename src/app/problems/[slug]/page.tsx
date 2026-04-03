import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllSolvedSlugs, getProblemBySlug } from '@/lib/problems';
import { DifficultyBadge } from '@/components/DifficultyBadge';
import { TagBadge } from '@/components/TagBadge';
import { CodeBlock } from '@/components/CodeBlock';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ShareButton } from '@/components/ShareButton';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllSolvedSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const problem = getProblemBySlug(params.slug);
  if (!problem) return {};
  
  const title = `${problem.id}. ${problem.title} | DSA Solvebook`;
  const description = `${problem.difficulty} · ${problem.tags.join(', ')}`;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `/problems/${problem.slug}`,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: problem.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function ProblemDetailPage({ params }: Props) {
  const problem = getProblemBySlug(params.slug);
  if (!problem) notFound();

  const langMap: Record<string, string> = {
    python3: 'python',
    python: 'python',
    cpp: 'cpp',
    java: 'java',
    javascript: 'javascript',
    typescript: 'typescript',
    go: 'go',
    rust: 'rust',
  };
  const lang = langMap[problem.language] ?? problem.language;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Dashboard', href: '/' },
          { label: 'Library', href: '/problems' },
          { label: problem.title },
        ]}
      />

      {/* Header */}
      <header className="space-y-3">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--blue)]/10 text-[var(--blue)] font-mono text-xs font-bold">
              #{problem.id}
            </span>
            <DifficultyBadge difficulty={problem.difficulty} />
            <span className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-2 py-0.5 rounded">
              {problem.language}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ShareButton
              problemTitle={problem.title}
              problemSlug={problem.slug}
              difficulty={problem.difficulty}
              tags={problem.tags}
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold font-mono text-[var(--text)]">
          {problem.title}
        </h1>

        <div className="flex flex-wrap gap-1.5">
          {problem.tags.map((tag) => (
            <Link key={tag} href={`/problems?tag=${encodeURIComponent(tag)}`}>
              <TagBadge tag={tag} />
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)]">
          <span>Solved on {problem.date_solved}</span>
          {problem.submission_id && (
            <a
              href={`https://leetcode.com/submissions/detail/${problem.submission_id}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--blue)] hover:underline"
            >
              View submission ↗
            </a>
          )}
        </div>
      </header>

      {/* Problem statement */}
      {problem.description && (
        <section>
          <SectionHeader icon="📋" label="Problem" />
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
            <MarkdownRenderer content={problem.description} />
          </div>
        </section>
      )}

      {/* Solution */}
      {problem.solution && (
        <section>
          <SectionHeader icon="💡" label="Solution" />
          <CodeBlock code={problem.solution} language={lang} />
        </section>
      )}

      {/* Editorial */}
      {problem.editorial && (
        <section>
          <SectionHeader icon="📝" label="Editorial" />
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 border-l-2 border-l-[var(--blue)]">
            <MarkdownRenderer content={problem.editorial} />
          </div>
        </section>
      )}

      {/* Footer nav */}
      <div className="pt-4 border-t border-[var(--border)]">
        <Link
          href="/problems"
          className="inline-flex items-center gap-1 text-sm font-mono text-[var(--muted)] hover:text-[var(--text)] transition-colors"
        >
          ← Back to library
        </Link>
      </div>
    </div>
  );
}

function SectionHeader({ icon, label }: { icon: string; label: string }) {
  return (
    <h2 className="flex items-center gap-2 text-sm font-mono font-semibold text-[var(--muted)] uppercase tracking-widest mb-3">
      <span>{icon}</span>
      <span>{label}</span>
    </h2>
  );
}
