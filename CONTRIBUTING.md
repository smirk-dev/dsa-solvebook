# Contributing to dsa-solvebook

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Development Setup

### 1. Prerequisites
- Node.js 18+
- Python 3.11+
- Git

### 2. Fork & Clone
```bash
git clone https://github.com/<your-username>/dsa-solvebook.git
cd dsa-solvebook
npm install
```

### 3. Environment Variables

**Frontend:** No env vars needed for development.

**Scraper:** Create `scraper/.env`:
```env
LEETCODE_SESSION=<your-cookie-value>
LEETCODE_CSRF=<your-csrf-token-value>
```

Get these values from browser DevTools:
1. Log into leetcode.com
2. Open DevTools (F12) → Application → Cookies → leetcode.com
3. Copy the VALUE (not name) of `LEETCODE_SESSION` and `csrftoken`

### 4. Install Scraper Dependencies
```bash
cd scraper
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cd ..
```

## Running Locally

### Frontend Development
```bash
npm run dev
# Open http://localhost:3000
```

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

### Scraper (Local)
```bash
# Fetch last 20 submissions
npm run scrape:local

# Fetch last 10 submissions
npm run scrape:local:limit

# Fetch ALL submissions
npm run scrape:all
```

The scraper will:
1. Fetch submissions from LeetCode API
2. Generate markdown files in `data/problems/`
3. Update `data/index.json`

## Project Structure

```text
dsa-solvebook/
├── src/
│   ├── app/              # App Router pages & layouts
│   ├── components/       # Reusable React components
│   └── lib/              # Utilities & helpers
├── data/
│   ├── index.json        # All solved problems (auto-updated)
│   ├── planned.json      # Target problems (manual)
│   ├── goals.json        # Learning goals (manual)
│   └── problems/         # Individual problem markdown files
├── scraper/              # Python LeetCode scraper
├── docs/                 # Documentation
└── public/               # Static assets
```

## Key Design Principles

1. **SSG Only** — All data is fetched at build time. No server-side rendering.
2. **Git as Database** — Problems are stored as Markdown in Git, not in a traditional database.
3. **Zero Manual Entry** — Scraper automates all data collection from LeetCode.
4. **Decoupled Pipeline** — Scraper failures never affect the live site.
5. **Client-Side Filtering** — All problem filtering happens in the browser, no API calls needed.

## Data Model

### Problem Markdown Format
Each problem is a Markdown file (`data/problems/{slug}.md`) with:
- **Front Matter**: Metadata (id, title, difficulty, tags, language, date_solved, etc.)
- **Three Sections**:
  - `## Problem` — Problem statement (HTML → Markdown)
  - `## Solution` — Your accepted code (fenced code block)
  - `## Editorial` — Personal notes & insights

Example:
```markdown
---
id: "1"
title: "Two Sum"
slug: "two-sum"
difficulty: "Easy"
tags: ["Array", "Hash Table"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830321368"
---

## Problem
Given an array of integers `nums` and an integer `target`...

## Solution
```python
def twoSum(nums, target):
    # Your solution
    pass
```

## Editorial
Approach: Hash map for O(n) time complexity...
```

### Goals Format (`data/goals.json`)
```json
{
  "goals": [
    {
      "id": "weekly-5",
      "period": "weekly",
      "target": 5,
      "tags": null,
      "difficulty": null
    }
  ]
}
```

### Planned Problems (`data/planned.json`)
```json
{
  "problems": [
    {
      "id": "139",
      "title": "Word Break",
      "slug": "word-break",
      "difficulty": "Medium",
      "tags": ["Dynamic Programming", "String"]
    }
  ]
}
```

## Adding Features

### New Components
Create in `src/components/{ComponentName}.tsx`:
- Use functional, client components with 'use client' at top if needed
- Props should be typed with TypeScript interfaces
- Use Tailwind + CSS custom vars for styling
- Keep styles inline (no external CSS files)

### New Pages
Create in `src/app/path/page.tsx`:
- Use async Server Components by default
- Use generateMetadata for SEO
- Use generateStaticParams for dynamic routes

### New Data Access Functions
Add to `src/lib/problems.ts`:
- Use synchronous `fs` APIs (this is build-time only)
- Export typed functions
- Add TypeScript types to `src/lib/types.ts`

## Testing Workflow

1. **Lint Check**
   ```bash
   npm run lint
   ```

2. **Type Check**
   ```bash
   npm run type-check
   ```

3. **Local Build**
   ```bash
   npm run build
   ```

4. **Manual Testing**
   ```bash
   npm run dev
   # Test features at http://localhost:3000
   ```

## Pull Request Process

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/my-feature`
3. **Make** your changes, ensuring code quality:
   - Run `npm run lint` and `npm run type-check`
   - Test thoroughly with `npm run dev`
4. **Commit** with clear messages:
   ```bash
   git commit -m "feat: add feature description"
   ```
5. **Push** to your fork
6. **Open a PR** against `main` with:
   - Clear title describing the change
   - Description of what/why changed
   - Any relevant issue numbers

## Code Style

- **TypeScript**: Strict mode, no `any` unless absolutely necessary
- **React**: Prefer functional components, use hooks
- **CSS**: Tailwind for utility classes, CSS custom vars for theming
- **Components**: Keep small, composable, well-documented
- **File Structure**: Colocate related files

## Troubleshooting

### Scraper Auth Fails
- Cookies expire on logout. Re-log into LeetCode and update `.env`
- Try with `--username <username>` explicitly

### Build Fails with "Module not found"
- Run `npm install`
- Check imports use correct relative paths
- Verify file exists in expected location

### Changes Not Reflecting in Dev Server
- Restart dev server: `Ctrl+C`, then `npm run dev`
- Files in `data/` require server restart to reload

### TypeError: "Cannot read property X of undefined"
- Check types match between components and data
- Verify data files (index.json, goals.json) have expected structure

## Performance Considerations

- **Problem List**: Filters run client-side (200+ problems should be fine)
- **Images**: Optimize PNG/JPG before committing
- **Dependencies**: Avoid adding heavy libraries; prefer built-in solutions
- **Build Time**: Keep build-time operations efficient (no N+1 queries)

## Questions?

- Check existing [issues](https://github.com/smirk-dev/dsa-solvebook/issues)
- Review [CONTRIBUTING.md](CONTRIBUTING.md) in repo
- Reach out with a detailed issue or discussion post

---

Happy contributing! 🚀
