# dsa-solvebook

> Automated LeetCode proof-of-work portfolio — zero manual entry.

A self-sustaining pipeline that pulls accepted LeetCode submissions every 4 hours, commits them as Markdown to this repo, and rebuilds a static Next.js site on Vercel.

---

## How It Works

```text
LeetCode GraphQL API
    → Python Scraper (GitHub Actions, every 4 h)
        → Commits JSON index + Markdown files
            → Vercel webhook → SSG rebuild → Live site
```

The repo is the database. A scraper failure never takes the site down.

---

## Setup

### 1. Fork & clone

```bash
git clone https://github.com/<you>/dsa-solvebook
cd dsa-solvebook
npm install
```

### 2. Configure GitHub Secrets & Variables

Go to your repo → **Settings → Secrets and variables → Actions**.

**Secrets** (encrypted — use the "Secrets" tab):

| Secret             | Description                            |
| ------------------ | -------------------------------------- |
| `LEETCODE_SESSION` | Value of the `LEETCODE_SESSION` cookie |
| `LEETCODE_CSRF`    | Value of the `csrftoken` cookie        |

**Variables** (not secret — use the "Variables" tab):

| Variable            | Description                        |
| ------------------- | ---------------------------------- |
| `LEETCODE_USERNAME` | Your public LeetCode username      |

> **How to get cookies:** Log into leetcode.com → DevTools → Application tab → Cookies → `leetcode.com`. Copy the VALUE (not the name) of `LEETCODE_SESSION` and `csrftoken`.
>
> **Your username** is the slug in your profile URL: `leetcode.com/u/<username>/`
>
> **Tip:** Cookies expire on logout. If the workflow stops syncing, re-log into LeetCode and update the two secrets.

### 3. Deploy to Vercel

1. Import this repo in [Vercel](https://vercel.com).
2. Framework: **Next.js**. Root directory: `/`. Output: leave default.
3. Done — Vercel rebuilds automatically on every push (including automated scraper commits).

### 4. Trigger the first sync

Go to **Actions → Sync LeetCode Submissions → Run workflow**. This fetches your accepted submissions, creates Markdown files under `data/problems/`, and updates `data/index.json`. Subsequent runs happen automatically every 4 hours.

---

## Local Development

```bash
npm run dev          # start dev server at http://localhost:3000
npm run build        # SSG build → out/
npm run lint         # ESLint
npm run type-check   # tsc --noEmit
```

### Run the scraper locally

```bash
cd scraper
python -m venv venv && source venv/bin/activate   # (or venv\Scripts\activate on Windows)
pip install -r requirements.txt

# create scraper/.env with:
# LEETCODE_SESSION=...
# LEETCODE_CSRF=...

python main.py --username <your_username>
```

---

## Adding Planned Problems

Edit `data/planned.json` directly. Format:

```json
{
  "problems": [
    {
      "id": "139",
      "title": "Word Break",
      "slug": "word-break",
      "difficulty": "Medium",
      "tags": ["Dynamic Programming"],
      "status": "planned",
      "notes": "Optional notes"
    }
  ]
}
```

---

## Project Structure

```text
.
├── .github/workflows/sync-leetcode.yml   # cron automation
├── scraper/                              # Python scraper
│   ├── main.py
│   ├── leetcode_client.py
│   ├── file_manager.py
│   └── requirements.txt
├── data/
│   ├── index.json                        # all solved problems (auto-updated)
│   ├── planned.json                      # manually maintained target list
│   └── problems/                         # one .md per solved problem
├── src/
│   ├── app/                              # Next.js App Router pages
│   └── components/                       # React components
└── docs/                                 # planning documents
```
