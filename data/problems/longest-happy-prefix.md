---
id: "1508"
title: "Longest Happy Prefix"
slug: "longest-happy-prefix"
difficulty: "Hard"
tags: ["String", "Rolling Hash", "String Matching", "Hash Function"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830332226"
---

## Problem

A string is called a **happy prefix** if is a **non-empty** prefix which is also a suffix (excluding itself).

Given a string `s`, return _the**longest happy prefix** of_ `s`. Return an empty string `""` if no such prefix exists.

 

**Example 1:**
    
    
    **Input:** s = "level"
    **Output:** "l"
    **Explanation:** s contains 4 prefix excluding itself ("l", "le", "lev", "leve"), and suffix ("l", "el", "vel", "evel"). The largest prefix which is also suffix is given by "l".
    

**Example 2:**
    
    
    **Input:** s = "ababab"
    **Output:** "abab"
    **Explanation:** "abab" is the largest prefix which is also suffix. They can overlap in the original string.
    

 

**Constraints:**

  * `1 <= s.length <= 105`
  * `s` contains only lowercase English letters.

## Solution

```python
class Solution:
    def longestPrefix(self, s: str) -> str:
        lps = [0] * len(s)  # longest prefix suffix array
        j = 0
        for i in range(1, len(s)):
            while j > 0 and s[i] != s[j]:
                j = lps[j-1]
            if s[i] == s[j]:
                j += 1
                lps[i] = j
        return s[:lps[-1]]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
