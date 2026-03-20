"""
Manages writing problem markdown files and keeping index.json up to date.
"""

from __future__ import annotations

import json
import os
import re
import textwrap
from datetime import datetime, timezone
from pathlib import Path

import html2text

from leetcode_client import ProblemDetails, Submission

DATA_DIR = Path(__file__).parent.parent / "data"
PROBLEMS_DIR = DATA_DIR / "problems"
INDEX_PATH = DATA_DIR / "index.json"


# ── HTML → Markdown conversion ────────────────────────────────────────────────

def _html_to_md(html: str) -> str:
    h = html2text.HTML2Text()
    h.ignore_links = False
    h.body_width = 0          # no line-wrapping
    h.ignore_images = True
    return h.handle(html).strip()


# ── Markdown file generation ──────────────────────────────────────────────────

def _lang_display(lang: str) -> str:
    mapping = {
        "python3": "python3",
        "python": "python3",
        "cpp": "cpp",
        "java": "java",
        "javascript": "javascript",
        "typescript": "typescript",
        "golang": "go",
        "rust": "rust",
        "c": "c",
    }
    return mapping.get(lang.lower(), lang)


def build_markdown(
    problem: ProblemDetails,
    submission: Submission,
    date_solved: str,
) -> str:
    description_md = _html_to_md(problem.content_html) if problem.content_html else "_No description fetched._"
    lang = _lang_display(submission.lang)
    tags_yaml = json.dumps(problem.tags)

    frontmatter = textwrap.dedent(f"""\
        ---
        id: "{problem.id}"
        title: "{problem.title.replace('"', '\\"')}"
        slug: "{problem.title_slug}"
        difficulty: "{problem.difficulty}"
        tags: {tags_yaml}
        language: "{lang}"
        date_solved: "{date_solved}"
        status: "solved"
        submission_id: "{submission.id}"
        ---
    """)

    fence_lang = "python" if lang in ("python3", "python") else lang

    return (
        frontmatter
        + "\n## Problem\n\n"
        + description_md
        + "\n\n## Solution\n\n"
        + f"```{fence_lang}\n{submission.code.strip()}\n```"
        + "\n\n## Editorial\n\n"
        + "_Add your notes here — why did you choose this approach? What's the time/space complexity?_\n"
    )


# ── Index management ──────────────────────────────────────────────────────────

def load_index() -> dict:
    if INDEX_PATH.exists():
        return json.loads(INDEX_PATH.read_text(encoding="utf-8"))
    return {"problems": [], "last_updated": "", "total_solved": 0}


def save_index(index: dict) -> None:
    index["last_updated"] = datetime.now(timezone.utc).isoformat()
    index["total_solved"] = len(index["problems"])
    INDEX_PATH.write_text(
        json.dumps(index, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )


def problem_in_index(index: dict, slug: str) -> bool:
    return any(p["slug"] == slug for p in index["problems"])


def add_to_index(index: dict, problem: ProblemDetails, submission: Submission, date_solved: str) -> None:
    entry = {
        "id": problem.id,
        "title": problem.title,
        "slug": problem.title_slug,
        "difficulty": problem.difficulty,
        "tags": problem.tags,
        "language": _lang_display(submission.lang),
        "date_solved": date_solved,
        "status": "solved",
        "submission_id": submission.id,
    }
    # Keep index sorted by problem id
    index["problems"].append(entry)
    index["problems"].sort(key=lambda p: int(p["id"]))


# ── Write file ────────────────────────────────────────────────────────────────

def write_problem_file(
    problem: ProblemDetails,
    submission: Submission,
    date_solved: str,
) -> Path:
    PROBLEMS_DIR.mkdir(parents=True, exist_ok=True)
    path = PROBLEMS_DIR / f"{problem.title_slug}.md"
    content = build_markdown(problem, submission, date_solved)
    path.write_text(content, encoding="utf-8")
    return path
