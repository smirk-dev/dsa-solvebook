---
id: "1507"
title: "Check if There is a Valid Path in a Grid"
slug: "check-if-there-is-a-valid-path-in-a-grid"
difficulty: "Medium"
tags: ["Array", "Depth-First Search", "Breadth-First Search", "Union-Find", "Matrix"]
language: "java"
date_solved: "2026-04-27"
status: "solved"
submission_id: "1989192655"
---

## Problem

You are given an `m x n` `grid`. Each cell of `grid` represents a street. The street of `grid[i][j]` can be:

  * `1` which means a street connecting the left cell and the right cell.
  * `2` which means a street connecting the upper cell and the lower cell.
  * `3` which means a street connecting the left cell and the lower cell.
  * `4` which means a street connecting the right cell and the lower cell.
  * `5` which means a street connecting the left cell and the upper cell.
  * `6` which means a street connecting the right cell and the upper cell.



You will initially start at the street of the upper-left cell `(0, 0)`. A valid path in the grid is a path that starts from the upper left cell `(0, 0)` and ends at the bottom-right cell `(m - 1, n - 1)`. **The path should only follow the streets**.

**Notice** that you are **not allowed** to change any street.

Return `true` _if there is a valid path in the grid or_`false` _otherwise_.

 

**Example 1:**
    
    
    **Input:** grid = [[2,4,3],[6,5,2]]
    **Output:** true
    **Explanation:** As shown you can start at cell (0, 0) and visit all the cells of the grid to reach (m - 1, n - 1).
    

**Example 2:**
    
    
    **Input:** grid = [[1,2,1],[1,2,1]]
    **Output:** false
    **Explanation:** As shown you the street at cell (0, 0) is not connected with any street of any other cell and you will get stuck at cell (0, 0)
    

**Example 3:**
    
    
    **Input:** grid = [[1,1,2]]
    **Output:** false
    **Explanation:** You will get stuck at cell (0, 1) and you cannot reach cell (0, 2).
    

 

**Constraints:**

  * `m == grid.length`
  * `n == grid[i].length`
  * `1 <= m, n <= 300`
  * `1 <= grid[i][j] <= 6`

## Solution

```java
class Solution {
    private static final int[][] TRANS = {
        {-1, 1, -1, 3},
        {0, -1, 2, -1},
        {3, 2, -1, -1},
        {1, -1, -1, 2},
        {-1, 0, 3, -1},
        {-1, -1, 1, 0}
    };
    private static final int[][] DIRS = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};
    private static final int[][] START = {{1, 3}, {0, 2}, {2, 3},
                                          {1, 2}, {0, 3}, {0, 1}};

    public boolean hasValidPath(int[][] grid) {
        if (grid[0][0] == 5) return false;
        if (grid[grid.length - 1][grid[0].length - 1] == 4) return false;

        int m = grid.length, n = grid[0].length;
        if (m == 1 && n == 1) return true;

        int[] s = START[grid[0][0] - 1];
        return check(grid, s[0]) || check(grid, s[1]);
    }

    private boolean check(int[][] grid, int di) {
        if (di == -1) return false;
        int m = grid.length, n = grid[0].length;
        int r = DIRS[di][0];
        int c = DIRS[di][1];

        while (r >= 0 && r < m && c >= 0 && c < n) {
            di = TRANS[grid[r][c] - 1][di];
            if (di == -1 || r == 0 && c == 0) return false;
            if (r == m - 1 && c == n - 1) return true;

            r += DIRS[di][0];
            c += DIRS[di][1];
        }
        return false;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
