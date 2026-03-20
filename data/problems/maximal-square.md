---
id: "221"
title: "Maximal Square"
slug: "maximal-square"
difficulty: "Medium"
tags: ["Array", "Dynamic Programming", "Matrix"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830363889"
---

## Problem

Given an `m x n` binary `matrix` filled with `0`'s and `1`'s, _find the largest square containing only_ `1`'s _and return its area_.

 

**Example 1:**
    
    
    **Input:** matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
    **Output:** 4
    

**Example 2:**
    
    
    **Input:** matrix = [["0","1"],["1","0"]]
    **Output:** 1
    

**Example 3:**
    
    
    **Input:** matrix = [["0"]]
    **Output:** 0
    

 

**Constraints:**

  * `m == matrix.length`
  * `n == matrix[i].length`
  * `1 <= m, n <= 300`
  * `matrix[i][j]` is `'0'` or `'1'`.

## Solution

```python
class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        if not matrix: return 0
        rows, cols = len(matrix), len(matrix[0])
        dp = [[0] * (cols + 1) for _ in range(rows + 1)]
        max_side = 0
        for i in range(1, rows + 1):
            for j in range(1, cols + 1):
                if matrix[i-1][j-1] == '1':
                    dp[i][j] = min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1]) + 1
                    max_side = max(max_side, dp[i][j])
        return max_side * max_side
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
