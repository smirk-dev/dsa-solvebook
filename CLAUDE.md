# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**dsa-solvebook** is an automated "Proof of Work" portfolio that pulls accepted LeetCode submissions, stores them in Git as Markdown, and renders them as a static Next.js site — with zero manual entry.

## Commands

```bash
# Frontend
npm run dev          # dev server at http://localhost:3000
npm run build        # SSG build → out/
npm run lint         # ESLint
npm run type-check   # tsc --noEmit

# Scraper (from repo root)
cd scraper
pip install -r requirements.txt
python main.py --username <leetcode_username>   # needs LEETCODE_SESSION + LEETCODE_CSRF in env
```

## Architecture: Git-Flow Automation Pipeline

```text
LeetCode GraphQL API
    → Python Scraper (scraper/) — GitHub Actions cron, every 4 h
        → Commits data/index.json + data/problems/*.md
            → Vercel webhook → next build (SSG) → Live site
```

**Key constraint:** scraper failure must never take down the site. They are fully decoupled — the repo/data directory is the database.

## Project Structure

```text
.
├── .github/workflows/sync-leetcode.yml  # cron automation
├── scraper/
│   ├── main.py                # entry point; CLI args: --username, --limit
│   ├── leetcode_client.py     # GraphQL client; auth via LEETCODE_SESSION + LEETCODE_CSRF env vars
│   └── file_manager.py        # markdown generation, index.json read/write
├── data/
│   ├── index.json             # auto-updated by scraper; source of truth for all solved problems
│   ├── planned.json           # manually maintained target list (edit directly)
│   └── problems/[slug].md     # one file per solved problem (frontmatter + sections)
└── src/
    ├── app/
    │   ├── layout.tsx          # root layout: ThemeProvider, Navbar, SearchModal
    │   ├── page.tsx            # Dashboard: heatmap, stats, focus cards, recent solves
    │   ├── not-found.tsx
    │   └── problems/
    │       ├── page.tsx        # Library: full ProblemTable (server component, passes data down)
    │       └── [slug]/page.tsx # Problem detail: description + CodeBlock + editorial
    ├── components/
    │   ├── ThemeProvider.tsx   # dark/light/system — persists to localStorage, avoids FOUC
    │   ├── ThemeToggle.tsx
    │   ├── Navbar.tsx
    │   ├── SearchModal.tsx     # Cmd+K / Ctrl+K — fully client-side, arrow key navigation
    │   ├── HeatMap.tsx         # GitHub-style 52-week grid (client component)
    │   ├── StatCards.tsx       # total/easy/medium/hard/streak counters
    │   ├── FocusCards.tsx      # top-3 tags linking to /problems?tag=...
    │   ├── ProblemTable.tsx    # all filtering/sorting logic lives here (client component)
    │   ├── CodeBlock.tsx       # syntax highlighting via highlight.js (lazy-imported client-side)
    │   ├── MarkdownRenderer.tsx# react-markdown + remark-gfm + rehype-highlight
    │   ├── DifficultyBadge.tsx
    │   └── TagBadge.tsx
    └── lib/
        ├── types.ts            # shared TypeScript types (ProblemMeta, ProblemDetail, SolveStats…)
        └── problems.ts         # all data-access functions (reads from data/ at build time via fs)
```

## Data Model

**`data/index.json`** — array of solved problems, sorted by problem id. Auto-updated by scraper.

**`data/planned.json`** — array of planned problems. Edit manually.

**`data/problems/[slug].md`** — frontmatter (id, title, slug, difficulty, tags, language, date_solved, status, submission_id) followed by three `##` sections:
- `## Problem` — description (rendered Markdown)
- `## Solution` — fenced code block
- `## Editorial` — personal notes

The `splitSections()` function in [src/lib/problems.ts](src/lib/problems.ts) parses these sections.

## Key Design Decisions

- **SSG only** — `output: 'export'` in `next.config.js`. No server components that make runtime requests. All data is read from `data/` at build time via `fs` in Server Components.
- **Theme FOUC prevention** — an inline `<script>` in `layout.tsx` sets the `dark` class before first paint.
- **Filtering is all client-side** — `ProblemTable` receives the full problem list as props (serialised at build time) and filters in-browser. No API routes needed.
- **LeetCode credentials** — must live exclusively in GitHub Secrets (`LEETCODE_SESSION`, `LEETCODE_CSRF`, `LEETCODE_USERNAME`). Never commit these.
- **Scraper rate limiting** — 1.5 s sleep between problems to avoid triggering LeetCode's rate limiter.

## GitHub Secrets Required

| Secret              | Where used                          |
| ------------------- | ----------------------------------- |
| `LEETCODE_SESSION`  | Scraper cookie auth                 |
| `LEETCODE_CSRF`     | Scraper CSRF header + cookie        |
| `LEETCODE_USERNAME` | Passed as `--username` to scraper   |

## Design System

"Terminal Aesthetic" — CSS custom properties (not Tailwind colours) drive the palette so dark/light switch without rebuild. Variables defined in `globals.css`:

- `--bg`, `--surface`, `--border`, `--text`, `--muted`
- `--green` (Easy), `--yellow` (Medium), `--red` (Hard), `--blue` (links/accents), `--purple`
