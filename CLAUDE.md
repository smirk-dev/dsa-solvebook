# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**dsa-solvebook** is an automated "Proof of Work" portfolio that pulls accepted LeetCode submissions, stores them in Git, and displays them on a static website — with zero manual entry.

## Planned Tech Stack

| Layer | Choice |
|---|---|
| Scraper | Python 3.11 + `gql` / `requests` |
| Automation | GitHub Actions (cron, every 3–6 hours) |
| Frontend | Next.js 14 (App Router) + Tailwind CSS |
| Content | Static JSON index + Markdown solution files |
| Hosting | Vercel / Netlify (SSG) |

## Architecture: Git-Flow Automation Pipeline

```
LeetCode GraphQL API
    → Python Scraper (GitHub Actions cron)
        → Commits JSON index + Markdown files to repo
            → Vercel webhook triggers SSG rebuild
                → Live static site
```

Key design principle: the scraper and frontend are **decoupled** — a scraper failure must never take down the website (NFR-1). The repo itself is the database.

## Data Model

- Each solved problem → one Markdown/code file in the repo (Git-as-DB, FR-2)
- A `planned.json` tracks "Target" problems not yet solved (FR-4)
- A static JSON index powers frontend search/filter without a backend

## Frontend Pages & Features

- **Dashboard (Home):** GitHub-style activity heatmap, "Current Focus" tag cards (top 3), stat counters (total solved, streak, difficulty breakdown)
- **Library (`/problems`):** Searchable table (Title, Difficulty, Language, Date Solved) with filter chips by topic tag
- **Problem Detail (`/problems/[slug]`):** Rendered Markdown prompt, syntax-highlighted solution, editorial/notes section
- **Interactions:** Dark/Light theme toggle (system default), Cmd+K quick-search by slug

## Design System

"The Terminal Aesthetic" — clean, high-contrast, developer-centric. Dark mode first.

## Key Implementation Notes

- LeetCode credentials must live in **GitHub Secrets** only — never in code or committed files
- Frontend must be SSG (no SSR/API routes for data fetching) to meet performance and resilience requirements
- Filtering by Difficulty (Easy/Med/Hard), Topic Tags, and Solved/Planned status is a hard requirement (FR-3, FR-4)
- The scraper targets LeetCode's GraphQL endpoint for accepted submissions (AC status only)

## Development Epics (Build Order)

1. **Epic 1 — Data Engine:** GitHub Actions cron → Python LeetCode GraphQL scraper → Git commit logic for file updates + index generation
2. **Epic 2 — Core Frontend:** Next.js scaffold → dynamic `/problems/[slug]` routing from local files → search/filter on main table
3. **Epic 3 — Polish:** Planned vs. Solved visual states → Vercel deployment
