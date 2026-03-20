---
id: "85"
title: "Maximal Rectangle"
slug: "maximal-rectangle"
difficulty: "Hard"
tags: ["Array", "Dynamic Programming", "Stack", "Matrix", "Monotonic Stack"]
language: "python3"
date_solved: "2026-03-17"
status: "solved"
submission_id: "1951116362"
---

## Problem

Given a `rows x cols` binary `matrix` filled with `0`'s and `1`'s, find the largest rectangle containing only `1`'s and return _its area_.

 

**Example 1:**
    
    
    **Input:** matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
    **Output:** 6
    **Explanation:** The maximal rectangle is shown in the above picture.
    

**Example 2:**
    
    
    **Input:** matrix = [["0"]]
    **Output:** 0
    

**Example 3:**
    
    
    **Input:** matrix = [["1"]]
    **Output:** 1
    

 

**Constraints:**

  * `rows == matrix.length`
  * `cols == matrix[i].length`
  * `1 <= rows, cols <= 200`
  * `matrix[i][j]` is `'0'` or `'1'`.

## Solution

```python
class Solution:
    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        if not matrix or not matrix[0]:
            return 0

        M = len(matrix)
        N = len(matrix[0])

        # Convert characters to integers
        for i in range(M):
            for j in range(N):
                matrix[i][j] = int(matrix[i][j])

        # Row-wise prefix widths
        for i in range(M):
            for j in range(1, N):
                if matrix[i][j] == 1:
                    matrix[i][j] += matrix[i][j - 1]

        Ans = 0

        # Fix each column
        for j in range(N):
            for i in range(M):
                width = matrix[i][j]
                if width == 0:
                    continue

                # Expand downward
                currWidth = width
                k = i
                while k < M and matrix[k][j] > 0:
                    currWidth = min(currWidth, matrix[k][j])
                    height = k - i + 1
                    Ans = max(Ans, currWidth * height)
                    k += 1

                # Expand upward
                currWidth = width
                k = i
                while k >= 0 and matrix[k][j] > 0:
                    currWidth = min(currWidth, matrix[k][j])
                    height = i - k + 1
                    Ans = max(Ans, currWidth * height)
                    k -= 1

        return Ans
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
