---
id: "806"
title: "Domino and Tromino Tiling"
slug: "domino-and-tromino-tiling"
difficulty: "Medium"
tags: ["Dynamic Programming"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1824002991"
---

## Problem

You have two types of tiles: a `2 x 1` domino shape and a tromino shape. You may rotate these shapes.

Given an integer n, return _the number of ways to tile an_ `2 x n` _board_. Since the answer may be very large, return it **modulo** `109 + 7`.

In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.

 

**Example 1:**
    
    
    **Input:** n = 3
    **Output:** 5
    **Explanation:** The five different ways are shown above.
    

**Example 2:**
    
    
    **Input:** n = 1
    **Output:** 1
    

 

**Constraints:**

  * `1 <= n <= 1000`

## Solution

```python
class Solution:
    def numTilings(self, n: int) -> int:
        MOD = 10**9 + 7
        if n == 1:
            return 1
        if n == 2:
            return 2
        dp = [0] * (n + 1)
        dp[0] = 1
        dp[1] = 1
        dp[2] = 2
        for i in range(3, n + 1):
            dp[i] = (2 * dp[i - 1] + dp[i - 3]) % MOD
        return dp[n]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
