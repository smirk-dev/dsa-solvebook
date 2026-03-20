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

    def get_recent_ac_submissions(self, username: str, limit: int = 50) -> list[Submission]:
        """Fetch recent accepted submissions (public endpoint, no auth needed)."""
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
        return details.get("code", "")

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
