---
id: "919"
title: "Projection Area of 3D Shapes"
slug: "projection-area-of-3d-shapes"
difficulty: "Easy"
tags: ["Array", "Math", "Geometry", "Matrix"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830313212"
---

## Problem

You are given an `n x n` `grid` where we place some `1 x 1 x 1` cubes that are axis-aligned with the `x`, `y`, and `z` axes.

Each value `v = grid[i][j]` represents a tower of `v` cubes placed on top of the cell `(i, j)`.

We view the projection of these cubes onto the `xy`, `yz`, and `zx` planes.

A **projection** is like a shadow, that maps our **3-dimensional** figure to a **2-dimensional** plane. We are viewing the "shadow" when looking at the cubes from the top, the front, and the side.

Return _the total area of all three projections_.

 

**Example 1:**
    
    
    **Input:** grid = [[1,2],[3,4]]
    **Output:** 17
    **Explanation:** Here are the three projections ("shadows") of the shape made with each axis-aligned plane.
    

**Example 2:**
    
    
    **Input:** grid = [[2]]
    **Output:** 5
    

**Example 3:**
    
    
    **Input:** grid = [[1,0],[0,2]]
    **Output:** 8
    

 

**Constraints:**

  * `n == grid.length == grid[i].length`
  * `1 <= n <= 50`
  * `0 <= grid[i][j] <= 50`

## Solution

```python
class Solution:
    def projectionArea(self, grid: List[List[int]]) -> int:
        n = len(grid)
        xy = 0  # top view
        yz = 0  # side view
        zx = 0  # front view
        
        for i in range(n):
            max_row = 0
            max_col = 0
            for j in range(n):
                if grid[i][j] > 0:
                    xy += 1  # counts all nonzero cells (top view)
                max_row = max(max_row, grid[i][j])      # max in the row (front/zx view)
                max_col = max(max_col, grid[j][i])      # max in the column (side/yz view)
            yz += max_col
            zx += max_row
        return xy + yz + zx
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
