---
id: "1250"
title: "Longest Common Subsequence"
slug: "longest-common-subsequence"
difficulty: "Medium"
tags: ["String", "Dynamic Programming"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1824004129"
---

## Problem

Given two strings `text1` and `text2`, return _the length of their longest**common subsequence**. _If there is no **common subsequence** , return `0`.

A **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

  * For example, `"ace"` is a subsequence of `"abcde"`.



A **common subsequence** of two strings is a subsequence that is common to both strings.

 

**Example 1:**
    
    
    **Input:** text1 = "abcde", text2 = "ace" 
    **Output:** 3  
    **Explanation:** The longest common subsequence is "ace" and its length is 3.
    

**Example 2:**
    
    
    **Input:** text1 = "abc", text2 = "abc"
    **Output:** 3
    **Explanation:** The longest common subsequence is "abc" and its length is 3.
    

**Example 3:**
    
    
    **Input:** text1 = "abc", text2 = "def"
    **Output:** 0
    **Explanation:** There is no such common subsequence, so the result is 0.
    

 

**Constraints:**

  * `1 <= text1.length, text2.length <= 1000`
  * `text1` and `text2` consist of only lowercase English characters.

## Solution

```python
class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        m, n = len(text1), len(text2)
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if text1[i - 1] == text2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                else:
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
        return dp[m][n]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
