import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { SearchModal } from '@/components/SearchModal';
import { getAllSolvedProblems } from '@/lib/problems';

export const metadata: Metadata = {
  title: 'DSA Solvebook',
  description: 'Automated proof-of-work LeetCode portfolio — zero manual entry.',
  openGraph: {
    title: 'DSA Solvebook',
    description: 'Automated proof-of-work LeetCode portfolio.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const problems = getAllSolvedProblems();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent FOUC — set theme class before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (t === 'dark' || (!t && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 py-8">
            {children}
          </main>
          <SearchModal problems={problems} />
        </ThemeProvider>
      </body>
    </html>
  );
}
