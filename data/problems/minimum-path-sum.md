---
id: "64"
title: "Minimum Path Sum"
slug: "minimum-path-sum"
difficulty: "Medium"
tags: ["Array", "Dynamic Programming", "Matrix"]
language: "c"
date_solved: "2025-03-19"
status: "solved"
submission_id: "1578868634"
---

## Problem

Given a `m x n` `grid` filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

**Note:** You can only move either down or right at any point in time.

 

**Example 1:**
    
    
    **Input:** grid = [[1,3,1],[1,5,1],[4,2,1]]
    **Output:** 7
    **Explanation:** Because the path 1 -> 3 -> 1 -> 1 -> 1 minimizes the sum.
    

**Example 2:**
    
    
    **Input:** grid = [[1,2,3],[4,5,6]]
    **Output:** 12
    

 

**Constraints:**

  * `m == grid.length`
  * `n == grid[i].length`
  * `1 <= m, n <= 200`
  * `0 <= grid[i][j] <= 200`

## Solution

```c
int min(int a, int b) {
    return (a < b) ? a : b;
}
int minPathSum(int** grid, int gridSize, int* gridColSize) {
    for (int i=0; i<gridSize; i++) {
        for (int x=0; x<*gridColSize; x++) {
            if (i > 0 && x > 0) {
                grid[i][x] += min(grid[i-1][x], grid[i][x-1]);
            } else if (i > 0) {
                grid[i][x] += grid[i-1][x];
            } else if (x > 0) {
                grid[i][x] += grid[i][x-1];
            }
        }
    }
    return grid[gridSize-1][*gridColSize-1];
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
