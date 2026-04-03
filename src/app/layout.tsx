import type { Metadata } from 'next';
import './globals.css';
// highlight.js base theme (light); dark-mode colours are overridden in globals.css
import 'highlight.js/styles/github.css';
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
                var themeClass = 'dark';
                
                if (t === 'light') {
                  themeClass = '';
                } else if (t === 'dim') {
                  themeClass = 'dim';
                } else if (t === 'black') {
                  themeClass = 'black';
                } else if (t === 'dark' || t === 'system') {
                  themeClass = prefersDark ? 'dark' : '';
                }
                
                if (themeClass) {
                  document.documentElement.classList.add(themeClass);
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
