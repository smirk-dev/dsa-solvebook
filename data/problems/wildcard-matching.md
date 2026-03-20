---
id: "44"
title: "Wildcard Matching"
slug: "wildcard-matching"
difficulty: "Hard"
tags: ["String", "Dynamic Programming", "Greedy", "Recursion"]
language: "python3"
date_solved: "2025-02-18"
status: "solved"
submission_id: "1547693382"
---

## Problem

Given an input string (`s`) and a pattern (`p`), implement wildcard pattern matching with support for `'?'` and `'*'` where:

  * `'?'` Matches any single character.
  * `'*'` Matches any sequence of characters (including the empty sequence).



The matching should cover the **entire** input string (not partial).

 

**Example 1:**
    
    
    **Input:** s = "aa", p = "a"
    **Output:** false
    **Explanation:** "a" does not match the entire string "aa".
    

**Example 2:**
    
    
    **Input:** s = "aa", p = "*"
    **Output:** true
    **Explanation:**  '*' matches any sequence.
    

**Example 3:**
    
    
    **Input:** s = "cb", p = "?a"
    **Output:** false
    **Explanation:**  '?' matches 'c', but the second letter is 'a', which does not match 'b'.
    

 

**Constraints:**

  * `0 <= s.length, p.length <= 2000`
  * `s` contains only lowercase English letters.
  * `p` contains only lowercase English letters, `'?'` or `'*'`.

## Solution

```python
class Solution(object):
    def isMatch(self, s, p):
        dp = [[False for _ in range(len(p)+1)] for i in range(len(s)+1)]
        dp[0][0] = True
        for j in range(1, len(p)+1):
            if p[j-1] != '*':
                break
            dp[0][j] = True
                
        for i in range(1, len(s)+1):
            for j in range(1, len(p)+1):
                if p[j-1] in {s[i-1], '?'}:
                    dp[i][j] = dp[i-1][j-1]
                elif p[j-1] == '*':
                    dp[i][j] = dp[i-1][j] or dp[i][j-1]
        return dp[-1][-1]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
