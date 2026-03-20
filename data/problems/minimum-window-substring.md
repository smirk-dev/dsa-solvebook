---
id: "76"
title: "Minimum Window Substring"
slug: "minimum-window-substring"
difficulty: "Hard"
tags: ["Hash Table", "String", "Sliding Window"]
language: "python3"
date_solved: "2025-03-12"
status: "solved"
submission_id: "1234567896"
---

## Problem

Given two strings `s` and `t` of lengths `m` and `n` respectively, return *the **minimum window substring** of `s` such that every character in `t` (including duplicates) is included in the window*. If there is no such substring, return the empty string `""`.

**Example 1:**
```
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
```

**Example 2:**
```
Input: s = "a", t = "a"
Output: "a"
```

**Example 3:**
```
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
```

**Constraints:**
- `m == s.length`, `n == t.length`
- `1 <= m, n <= 10^5`
- `s` and `t` consist of uppercase and lowercase English letters.

**Follow up:** Could you find an algorithm that runs in `O(m + n)` time?

## Solution

```python
from collections import Counter

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if not t or not s:
            return ""

        need = Counter(t)
        missing = len(t)     # how many chars still needed
        best_l, best_r = 0, float("inf")
        l = 0

        for r, ch in enumerate(s):
            if need[ch] > 0:
                missing -= 1
            need[ch] -= 1

            if missing == 0:
                # shrink from the left
                while need[s[l]] < 0:
                    need[s[l]] += 1
                    l += 1

                if r - l < best_r - best_l:
                    best_l, best_r = l, r

                # move left pointer past the current match to search for next
                need[s[l]] += 1
                missing += 1
                l += 1

        return "" if best_r == float("inf") else s[best_l:best_r + 1]
```

## Editorial

Classic **sliding window with frequency tracking**. Two pointers `l` and `r` define the window. `missing` tracks how many characters from `t` are still unmet — it only decrements when we satisfy a *needed* character (i.e. `need[ch] > 0`), not just any occurrence.

Once `missing == 0` (valid window found), shrink from the left as much as possible: advance `l` while `need[s[l]] < 0` (we have surplus of that char). Record window size, then move `l` one more step to break the current match and continue searching.

O(m + n) time — each character is visited at most twice (once by `r`, once by `l`).
