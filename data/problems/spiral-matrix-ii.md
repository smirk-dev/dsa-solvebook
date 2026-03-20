---
id: "59"
title: "Spiral Matrix II"
slug: "spiral-matrix-ii"
difficulty: "Medium"
tags: ["Array", "Matrix", "Simulation"]
language: "python3"
date_solved: "2025-02-24"
status: "solved"
submission_id: "1553844373"
---

## Problem

Given a positive integer `n`, generate an `n x n` `matrix` filled with elements from `1` to `n2` in spiral order.

 

**Example 1:**
    
    
    **Input:** n = 3
    **Output:** [[1,2,3],[8,9,4],[7,6,5]]
    

**Example 2:**
    
    
    **Input:** n = 1
    **Output:** [[1]]
    

 

**Constraints:**

  * `1 <= n <= 20`

## Solution

```python
class Solution(object):
    def generateMatrix(self, n):
        x, y, dx, dy = 0, 0, 1, 0
        res = [[0 for _ in range(n)] for _ in range(n)]

        for i in range(n * n):
            res[y][x] = i + 1

            if not 0 <= x + dx < n or not 0 <= y + dy < n or res[y+dy][x+dx] != 0:
                dx, dy = -dy, dx
            
            x += dx
            y += dy

        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
