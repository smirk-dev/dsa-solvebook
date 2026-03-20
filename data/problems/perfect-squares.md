---
id: "279"
title: "Perfect Squares"
slug: "perfect-squares"
difficulty: "Medium"
tags: ["Math", "Dynamic Programming", "Breadth-First Search"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830368940"
---

## Problem

Given an integer `n`, return _the least number of perfect square numbers that sum to_ `n`.

A **perfect square** is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, `1`, `4`, `9`, and `16` are perfect squares while `3` and `11` are not.

 

**Example 1:**
    
    
    **Input:** n = 12
    **Output:** 3
    **Explanation:** 12 = 4 + 4 + 4.
    

**Example 2:**
    
    
    **Input:** n = 13
    **Output:** 2
    **Explanation:** 13 = 4 + 9.
    

 

**Constraints:**

  * `1 <= n <= 104`

## Solution

```python
class Solution:
    def numSquares(self, n: int) -> int:
        dp = [float('inf')] * (n + 1)
        dp[0] = 0
        for i in range(1, n + 1):
            min_val = float('inf')
            j = 1
            while j * j <= i:
                min_val = min(min_val, dp[i - j * j] + 1)
                j += 1
            dp[i] = min_val
        return dp[n]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
