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

### 2. Add GitHub Secrets

| Secret | Description |
|--------|-------------|
| `LEETCODE_SESSION` | Value of the `LEETCODE_SESSION` cookie from your browser |
| `LEETCODE_CSRF` | Value of the `csrftoken` cookie |
| `LEETCODE_USERNAME` | Your LeetCode username (public) |

> **How to get the cookies:** Log into leetcode.com, open DevTools → Application → Cookies → `leetcode.com`. Copy the two values above.

### 3. Deploy to Vercel

1. Import this repo in [Vercel](https://vercel.com).
2. Framework: **Next.js**.
3. Root directory: leave as `/`.
4. Done — Vercel auto-deploys on every push.

### 4. Enable the GitHub Action

The workflow at `.github/workflows/sync-leetcode.yml` runs on a cron every 4 hours. It requires the three secrets above. You can also trigger it manually from the **Actions** tab.

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

```
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
