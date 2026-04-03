"""
LeetCode GraphQL client.

Authentication uses cookie-based session:
  LEETCODE_SESSION  — value of the 'LEETCODE_SESSION' cookie
  LEETCODE_CSRF     — value of the 'csrftoken' cookie

Both are stored as GitHub Secrets and injected as environment variables.
"""

from __future__ import annotations

import os
import time
import logging
from dataclasses import dataclass, field
from typing import Any

import requests

logger = logging.getLogger(__name__)

GRAPHQL_URL = "https://leetcode.com/graphql"
BASE_HEADERS = {
    "Content-Type": "application/json",
    "Referer": "https://leetcode.com/",
    "Origin": "https://leetcode.com",
    "User-Agent": (
        "Mozilla/5.0 (X11; Linux x86_64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    ),
}


@dataclass
class Submission:
    id: str
    title: str
    title_slug: str
    timestamp: str          # unix timestamp string
    lang: str
    code: str = ""


@dataclass
class ProblemDetails:
    id: str
    title: str
    title_slug: str
    difficulty: str         # "Easy" | "Medium" | "Hard"
    tags: list[str] = field(default_factory=list)
    content_html: str = ""  # raw HTML problem statement


class LeetCodeClient:
    def __init__(self) -> None:
        session_cookie = os.environ["LEETCODE_SESSION"]
        csrf_token = os.environ["LEETCODE_CSRF"]

        self._session = requests.Session()
        self._session.headers.update(BASE_HEADERS)
        self._session.headers["x-csrftoken"] = csrf_token
        self._session.cookies.set("LEETCODE_SESSION", session_cookie, domain=".leetcode.com")
        self._session.cookies.set("csrftoken", csrf_token, domain=".leetcode.com")

    # ── GraphQL helper ────────────────────────────────────────────────────────

    def _gql(self, query: str, variables: dict[str, Any] | None = None) -> dict:
        payload: dict[str, Any] = {"query": query}
        if variables:
            payload["variables"] = variables

        for attempt in range(3):
            try:
                resp = self._session.post(GRAPHQL_URL, json=payload, timeout=15)
                resp.raise_for_status()
                data = resp.json()
                if "errors" in data:
                    raise RuntimeError(f"GraphQL errors: {data['errors']}")
                return data.get("data", {})
            except requests.RequestException as exc:
                if attempt == 2:
                    raise
                logger.warning("Request failed (attempt %d): %s", attempt + 1, exc)
                time.sleep(2 ** attempt)

        return {}  # unreachable but satisfies mypy

    # ── Public API ────────────────────────────────────────────────────────────

    def get_logged_in_username(self) -> str:
        """Return the username tied to the current authenticated session cookie."""
        query = """
        query userStatus {
            userStatus {
                username
                isSignedIn
            }
        }
        """
        data = self._gql(query)
        status = data.get("userStatus") or {}
        if not status.get("isSignedIn"):
            raise RuntimeError("LeetCode session is not signed in. Refresh LEETCODE_SESSION/LEETCODE_CSRF.")
        username = (status.get("username") or "").strip()
        if not username:
            raise RuntimeError("Could not determine signed-in LeetCode username from userStatus.")
        return username

    def get_recent_ac_submissions(self, username: str, limit: int = 50) -> list[Submission]:
        """Fetch recent accepted submissions (public, hard-capped at 20 by LeetCode)."""
        query = """
        query recentAcSubmissions($username: String!, $limit: Int!) {
            recentAcSubmissionList(username: $username, limit: $limit) {
                id
                title
                titleSlug
                timestamp
                lang
            }
        }
        """
        data = self._gql(query, {"username": username, "limit": limit})
        raw = data.get("recentAcSubmissionList") or []
        return [
            Submission(
                id=str(s["id"]),
                title=s["title"],
                title_slug=s["titleSlug"],
                timestamp=s["timestamp"],
                lang=s["lang"],
            )
            for s in raw
        ]

    def get_all_ac_submissions(self, already_indexed: set[str]) -> list[Submission]:
        """
        Paginate through ALL submissions (requires auth) and return only accepted ones.

        Stops early once an entire page contains only already-indexed problems —
        this makes incremental syncs fast even with thousands of submissions.

        already_indexed: set of title_slug strings already in index.json
        """
        query = """
        query submissionList($offset: Int!, $limit: Int!) {
            submissionList(offset: $offset, limit: $limit) {
                lastKey
                hasNext
                submissions {
                    id
                    statusDisplay
                    lang
                    timestamp
                    title
                    titleSlug
                }
            }
        }
        """
        PAGE = 20
        offset = 0
        seen_slugs: set[str] = set()   # deduplicate: keep first (most-recent) AC per problem
        results: list[Submission] = []

        while True:
            logger.info("Fetching submissions page offset=%d …", offset)
            data = self._gql(query, {"offset": offset, "limit": PAGE})
            page = data.get("submissionList") or {}
            raw = page.get("submissions") or []
            has_next = page.get("hasNext", False)

            new_on_page = 0
            for s in raw:
                if s.get("statusDisplay") != "Accepted":
                    continue
                slug = s["titleSlug"]
                if slug in seen_slugs:
                    continue                         # duplicate AC for same problem
                seen_slugs.add(slug)
                if slug not in already_indexed:
                    results.append(Submission(
                        id=str(s["id"]),
                        title=s["title"],
                        title_slug=slug,
                        timestamp=str(s["timestamp"]),
                        lang=s["lang"],
                    ))
                    new_on_page += 1

            # If the whole page was already indexed we've caught up — stop early
            all_indexed_on_page = all(
                s["titleSlug"] in already_indexed
                for s in raw
                if s.get("statusDisplay") == "Accepted"
            )
            if not raw or (not has_next) or (all_indexed_on_page and offset > 0):
                logger.info("Pagination complete — %d new AC submissions found", len(results))
                break

            offset += PAGE
            time.sleep(0.5)   # be polite between pages

        return results

    def get_submission_code(self, submission_id: str) -> str:
        """Fetch the actual code for a submission (requires auth)."""
        query = """
        query submissionDetails($submissionId: Int!) {
            submissionDetails(submissionId: $submissionId) {
                code
                lang { name }
            }
        }
        """
        data = self._gql(query, {"submissionId": int(submission_id)})
        details = data.get("submissionDetails") or {}
        code = (details.get("code") or "").strip()
        if not code:
            raise RuntimeError(
                "LeetCode returned empty code for submissionDetails. "
                "This usually means session cookies are expired or belong to a different account."
            )
        return code

    def get_problem_details(self, title_slug: str) -> ProblemDetails:
        """Fetch problem metadata + HTML content."""
        query = """
        query questionData($titleSlug: String!) {
            question(titleSlug: $titleSlug) {
                questionId
                title
                titleSlug
                content
                difficulty
                topicTags { name }
            }
        }
        """
        data = self._gql(query, {"titleSlug": title_slug})
        q = data.get("question") or {}
        return ProblemDetails(
            id=str(q.get("questionId", "")),
            title=q.get("title", title_slug),
            title_slug=q.get("titleSlug", title_slug),
            difficulty=q.get("difficulty", "Easy"),
            tags=[t["name"] for t in q.get("topicTags", [])],
            content_html=q.get("content", ""),
        )
