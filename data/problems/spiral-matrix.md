---
id: "54"
title: "Spiral Matrix"
slug: "spiral-matrix"
difficulty: "Medium"
tags: ["Array", "Matrix", "Simulation"]
language: "python3"
date_solved: "2025-02-24"
status: "solved"
submission_id: "1553840905"
---

## Problem

Given an `m x n` `matrix`, return _all elements of the_ `matrix` _in spiral order_.

 

**Example 1:**
    
    
    **Input:** matrix = [[1,2,3],[4,5,6],[7,8,9]]
    **Output:** [1,2,3,6,9,8,7,4,5]
    

**Example 2:**
    
    
    **Input:** matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
    **Output:** [1,2,3,4,8,12,11,10,9,5,6,7]
    

 

**Constraints:**

  * `m == matrix.length`
  * `n == matrix[i].length`
  * `1 <= m, n <= 10`
  * `-100 <= matrix[i][j] <= 100`

## Solution

```python
class Solution(object):
    def spiralOrder(self, matrix):
        rows, cols = len(matrix), len(matrix[0])
        x, y, dx, dy = 0, 0, 1, 0
        res = []

        for _ in range(rows * cols):
            res.append(matrix[y][x])
            matrix[y][x] = "."

            if not 0 <= x + dx < cols or not 0 <= y + dy < rows or matrix[y+dy][x+dx] == ".":
                dx, dy = -dy, dx
            
            x += dx
            y += dy
        
        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
