---
id: "3973"
title: "Flip Square Submatrix Vertically"
slug: "flip-square-submatrix-vertically"
difficulty: "Easy"
tags: ["Array", "Two Pointers", "Matrix"]
language: "java"
date_solved: "2026-03-21"
status: "solved"
submission_id: "1954450818"
---

## Problem

You are given an `m x n` integer matrix `grid`, and three integers `x`, `y`, and `k`.

The integers `x` and `y` represent the row and column indices of the **top-left** corner of a **square** submatrix and the integer `k` represents the size (side length) of the square submatrix.

Your task is to flip the submatrix by reversing the order of its rows vertically.

Return the updated matrix.

 

**Example 1:**

**Input:** grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], x = 1, y = 0, k = 3

**Output:** [[1,2,3,4],[13,14,15,8],[9,10,11,12],[5,6,7,16]]

**Explanation:**

The diagram above shows the grid before and after the transformation.

**Example 2:**

​​​​​​​ 

**Input:** grid = [[3,4,2,3],[2,3,4,2]], x = 0, y = 2, k = 2

**Output:** [[3,4,4,2],[2,3,2,3]]

**Explanation:**

The diagram above shows the grid before and after the transformation.

 

**Constraints:**

  * `m == grid.length`
  * `n == grid[i].length`
  * `1 <= m, n <= 50`
  * `1 <= grid[i][j] <= 100`
  * `0 <= x < m`
  * `0 <= y < n`
  * `1 <= k <= min(m - x, n - y)`

## Solution

```java
class Solution {
    public int[][] reverseSubmatrix(int[][] grid, int x, int y, int k) {
        for (int i = 0; i < k; i++) {
            for (int j = 0; j < k >> 1; j++) {
                int temp = grid[x + j][y + i];
                grid[x + j][y + i] = grid[x + k - j - 1][y + i];
                grid[x + k - j - 1][y + i] = temp;
            }
        }

        return grid;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
