---
id: "5"
title: "Longest Palindromic Substring"
slug: "longest-palindromic-substring"
difficulty: "Medium"
tags: ["String", "Dynamic Programming", "Two Pointers"]
language: "python3"
date_solved: "2025-03-10"
status: "solved"
submission_id: "1234567895"
---

## Problem

Given a string `s`, return *the longest palindromic substring* in `s`.

**Example 1:**
```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

**Example 2:**
```
Input: s = "cbbd"
Output: "bb"
```

**Constraints:**
- `1 <= s.length <= 1000`
- `s` consist of only digits and English letters.

## Solution

```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = ""

        def expand(l: int, r: int) -> str:
            while l >= 0 and r < len(s) and s[l] == s[r]:
                l -= 1
                r += 1
            return s[l + 1:r]

        for i in range(len(s)):
            odd = expand(i, i)        # odd-length centre
            even = expand(i, i + 1)  # even-length centre
            if len(odd) > len(res):
                res = odd
            if len(even) > len(res):
                res = even

        return res
```

## Editorial

**Expand Around Centre** — O(n²) time, O(1) space. For every possible centre (n odd centres + n-1 even centres = 2n-1 total), expand outward while characters match.

The DP approach builds an n×n table (`dp[i][j]` = is `s[i..j]` a palindrome?) but uses O(n²) space with the same time complexity — expand-around-centre is strictly better.

Manacher's algorithm solves it in O(n) but is interview overkill — the expand approach is the sweet spot for clarity vs. efficiency.
