---
id: "712"
title: "Minimum ASCII Delete Sum for Two Strings"
slug: "minimum-ascii-delete-sum-for-two-strings"
difficulty: "Medium"
tags: ["String", "Dynamic Programming"]
language: "python3"
date_solved: "2026-01-10"
status: "solved"
submission_id: "1880489056"
---

## Problem

Given two strings `s1` and `s2`, return _the lowest**ASCII** sum of deleted characters to make two strings equal_.

 

**Example 1:**
    
    
    **Input:** s1 = "sea", s2 = "eat"
    **Output:** 231
    **Explanation:** Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
    Deleting "t" from "eat" adds 116 to the sum.
    At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.
    

**Example 2:**
    
    
    **Input:** s1 = "delete", s2 = "leet"
    **Output:** 403
    **Explanation:** Deleting "dee" from "delete" to turn the string into "let",
    adds 100[d] + 101[e] + 101[e] to the sum.
    Deleting "e" from "leet" adds 101[e] to the sum.
    At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
    If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.
    

 

**Constraints:**

  * `1 <= s1.length, s2.length <= 1000`
  * `s1` and `s2` consist of lowercase English letters.

## Solution

```python
class Solution:
    def minimumDeleteSum(self, s1: str, s2: str) -> int:
        m, n = len(s1), len(s2)
        dp = [0] * (n + 1)

        for j in range(1, n + 1):
            dp[j] = dp[j - 1] + ord(s2[j - 1])
        
        for i in range(1, m + 1):
            prev = dp[0]
            dp[0] += ord(s1[i - 1])

            for j in range(1, n + 1):
                temp = dp[j]

                if s1[i - 1] == s2[j - 1]:
                    dp[j] = prev
                else:
                    dp[j] = min(dp[j] + ord(s1[i - 1]), dp[j - 1] + ord(s2[j - 1]))
                
                prev = temp
        
        return dp[n]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
