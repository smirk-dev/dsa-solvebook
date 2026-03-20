---
id: "5"
title: "Longest Palindromic Substring"
slug: "longest-palindromic-substring"
difficulty: "Medium"
tags: ["Two Pointers", "String", "Dynamic Programming"]
language: "python3"
date_solved: "2026-03-14"
status: "solved"
submission_id: "1947700779"
---

## Problem

Given a string `s`, return _the longest_ _palindromic_ _substring_ in `s`.

 

**Example 1:**
    
    
    **Input:** s = "babad"
    **Output:** "bab"
    **Explanation:** "aba" is also a valid answer.
    

**Example 2:**
    
    
    **Input:** s = "cbbd"
    **Output:** "bb"
    

 

**Constraints:**

  * `1 <= s.length <= 1000`
  * `s` consist of only digits and English letters.

## Solution

```python
class Solution(object):
    def longestPalindrome(self, s):
        if not s:
            return ""
        def expand_around_center(s, left, right):
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -=1
                right += 1
            return right - left - 1
        start = 0
        end = 0

        for i in range(len(s)):
            odd = expand_around_center(s, i, i)
            even = expand_around_center(s, i, i + 1)
            max_len = max(odd, even)
            if max_len > end - start:
                start = i - (max_len - 1) // 2
                end = i + max_len // 2
        return s[start:end+1]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
