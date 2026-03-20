"""
dsa-solvebook scraper entry point.

Usage:
    python main.py --username <leetcode_username>

Required env vars:
    LEETCODE_SESSION   — value of the LEETCODE_SESSION cookie
    LEETCODE_CSRF      — value of the csrftoken cookie

Both are stored as GitHub Secrets and passed in via the workflow env block.
"""

from __future__ import annotations

import argparse
import logging
import os
import time
from datetime import datetime, timezone

from dotenv import load_dotenv

from leetcode_client import LeetCodeClient
from file_manager import (
    add_to_index,
    load_index,
    problem_in_index,
    save_index,
    write_problem_file,
)

load_dotenv()  # loads .env when running locally

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
)
logger = logging.getLogger(__name__)


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(description="Sync LeetCode submissions to Git repo")
    p.add_argument("--username", required=True, help="LeetCode username")
    p.add_argument("--limit", type=int, default=50, help="Number of recent AC submissions to fetch (ignored when --all is set)")
    p.add_argument("--all", dest="fetch_all", action="store_true",
                   help="Paginate through ALL submissions instead of just the most recent 20")
    return p.parse_args()


def unix_to_date(ts: str) -> str:
    """Convert a unix timestamp string to 'YYYY-MM-DD'."""
    return datetime.fromtimestamp(int(ts), tz=timezone.utc).strftime("%Y-%m-%d")


def main() -> None:
    args = parse_args()

    # Validate credentials and username are present
    for key in ("LEETCODE_SESSION", "LEETCODE_CSRF"):
        if not os.environ.get(key):
            raise EnvironmentError(f"Missing required environment variable: {key}")

    if not args.username or not args.username.strip():
        raise ValueError(
            "LeetCode username is empty. "
            "Pass --username <name> or set LEETCODE_USERNAME as a GitHub Variable."
        )

    client = LeetCodeClient()
    index = load_index()

    if args.fetch_all:
        logger.info("Full sync mode — paginating ALL submissions for @%s…", args.username)
        already_indexed = {p["slug"] for p in index["problems"]}
        submissions = client.get_all_ac_submissions(already_indexed)
    else:
        logger.info("Fetching %d recent AC submissions for @%s…", args.limit, args.username)
        submissions = client.get_recent_ac_submissions(args.username, args.limit)

    logger.info("Found %d new submissions to process", len(submissions))

    new_count = 0

    for sub in submissions:
        slug = sub.title_slug

        if problem_in_index(index, slug):
            logger.debug("Already indexed: %s — skipping", slug)
            continue

        logger.info("New problem: %s (id=%s)", sub.title, sub.id)

        # Fetch problem details
        try:
            problem = client.get_problem_details(slug)
        except Exception as exc:
            logger.error("Failed to fetch details for %s: %s", slug, exc)
            continue

        # Fetch submission code (requires auth)
        try:
            code = client.get_submission_code(sub.id)
            sub.code = code
        except Exception as exc:
            logger.warning("Could not fetch code for submission %s: %s — using placeholder", sub.id, exc)
            sub.code = "# Code could not be fetched automatically.\n# Please add your solution here."

        date_solved = unix_to_date(sub.timestamp)

        # Write markdown file
        try:
            path = write_problem_file(problem, sub, date_solved)
            logger.info("Written: %s", path)
        except Exception as exc:
            logger.error("Failed to write file for %s: %s", slug, exc)
            continue

        # Update index
        add_to_index(index, problem, sub, date_solved)
        new_count += 1

        # Polite rate limit — avoid hammering the API
        time.sleep(1.5)

    if new_count > 0:
        save_index(index)
        logger.info("Saved index — %d new problems added", new_count)
    else:
        logger.info("No new problems to add — index is up to date")


if __name__ == "__main__":
    main()
