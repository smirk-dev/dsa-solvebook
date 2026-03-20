---
id: "63"
title: "Unique Paths II"
slug: "unique-paths-ii"
difficulty: "Medium"
tags: ["Array", "Dynamic Programming", "Matrix"]
language: "c"
date_solved: "2025-03-09"
status: "solved"
submission_id: "1568272941"
---

## Problem

You are given an `m x n` integer array `grid`. There is a robot initially located at the **top-left corner** (i.e., `grid[0][0]`). The robot tries to move to the **bottom-right corner** (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.

An obstacle and space are marked as `1` or `0` respectively in `grid`. A path that the robot takes cannot include **any** square that is an obstacle.

Return _the number of possible unique paths that the robot can take to reach the bottom-right corner_.

The testcases are generated so that the answer will be less than or equal to `2 * 109`.

 

**Example 1:**
    
    
    **Input:** obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
    **Output:** 2
    **Explanation:** There is one obstacle in the middle of the 3x3 grid above.
    There are two ways to reach the bottom-right corner:
    1. Right -> Right -> Down -> Down
    2. Down -> Down -> Right -> Right
    

**Example 2:**
    
    
    **Input:** obstacleGrid = [[0,1],[0,0]]
    **Output:** 1
    

 

**Constraints:**

  * `m == obstacleGrid.length`
  * `n == obstacleGrid[i].length`
  * `1 <= m, n <= 100`
  * `obstacleGrid[i][j]` is `0` or `1`.

## Solution

```c
#include <stdio.h>
#include <stdlib.h>
int uniquePathsWithObstacles(int** obstacleGrid, int obstacleGridSize, int* obstacleGridColSize) {
    if (obstacleGrid == NULL || obstacleGrid[0][0] == 1) {
        return 0;
    }
    int rows = obstacleGridSize;
    int cols = *obstacleGridColSize;
    int* dp = (int*)calloc(cols, sizeof(int));
    dp[0] = 1;
    for (int r = 0; r < rows; r++) {
        for (int c = 0; c < cols; c++) {
            if (obstacleGrid[r][c] == 1) {
                dp[c] = 0;
            } else {
                if (c > 0) {
                    dp[c] += dp[c - 1];
                }
            }
        }
    }
    int result = dp[cols - 1];
    free(dp);
    return result;
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
