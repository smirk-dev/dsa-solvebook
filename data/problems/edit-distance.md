---
id: "72"
title: "Edit Distance"
slug: "edit-distance"
difficulty: "Medium"
tags: ["String", "Dynamic Programming"]
language: "python3"
date_solved: "2025-03-24"
status: "solved"
submission_id: "1584046360"
---

## Problem

Given two strings `word1` and `word2`, return _the minimum number of operations required to convert`word1` to `word2`_.

You have the following three operations permitted on a word:

  * Insert a character
  * Delete a character
  * Replace a character



 

**Example 1:**
    
    
    **Input:** word1 = "horse", word2 = "ros"
    **Output:** 3
    **Explanation:** 
    horse -> rorse (replace 'h' with 'r')
    rorse -> rose (remove 'r')
    rose -> ros (remove 'e')
    

**Example 2:**
    
    
    **Input:** word1 = "intention", word2 = "execution"
    **Output:** 5
    **Explanation:** 
    intention -> inention (remove 't')
    inention -> enention (replace 'i' with 'e')
    enention -> exention (replace 'n' with 'x')
    exention -> exection (replace 'n' with 'c')
    exection -> execution (insert 'u')
    

 

**Constraints:**

  * `0 <= word1.length, word2.length <= 500`
  * `word1` and `word2` consist of lowercase English letters.

## Solution

```python
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        m, n = len(word1), len(word2)
        
        # Ensure word2 is the shorter string to minimize space
        if m < n:
            word1, word2 = word2, word1
            m, n = n, m
        
        # Use a single 1D array to store the DP values
        dp = list(range(n + 1))
        
        for i in range(1, m + 1):
            prev = dp[0]  # Store the previous diagonal value
            dp[0] = i  # Initialize the first column of the current row
            for j in range(1, n + 1):
                temp = dp[j]  # Store the current value before updating
                if word1[i - 1] == word2[j - 1]:
                    dp[j] = prev
                else:
                    dp[j] = 1 + min(prev, dp[j], dp[j - 1])
                prev = temp  # Update prev for the next iteration
        
        return dp[n]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
