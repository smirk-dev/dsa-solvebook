---
id: "1663"
title: "Detect Cycles in 2D Grid"
slug: "detect-cycles-in-2d-grid"
difficulty: "Medium"
tags: ["Array", "Depth-First Search", "Breadth-First Search", "Union-Find", "Matrix"]
language: "java"
date_solved: "2026-04-26"
status: "solved"
submission_id: "1988340761"
---

## Problem

Given a 2D array of characters `grid` of size `m x n`, you need to find if there exists any cycle consisting of the **same value** in `grid`.

A cycle is a path of **length 4 or more** in the grid that starts and ends at the same cell. From a given cell, you can move to one of the cells adjacent to it - in one of the four directions (up, down, left, or right), if it has the **same value** of the current cell.

Also, you cannot move to the cell that you visited in your last move. For example, the cycle `(1, 1) -> (1, 2) -> (1, 1)` is invalid because from `(1, 2)` we visited `(1, 1)` which was the last visited cell.

Return `true` if any cycle of the same value exists in `grid`, otherwise, return `false`.

 

**Example 1:**

****
    
    
    **Input:** grid = [["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]]
    **Output:** true
    **Explanation:** There are two valid cycles shown in different colors in the image below:
    
    

**Example 2:**

****
    
    
    **Input:** grid = [["c","c","c","a"],["c","d","c","c"],["c","c","e","c"],["f","c","c","c"]]
    **Output:** true
    **Explanation:** There is only one valid cycle highlighted in the image below:
    
    

**Example 3:**

****
    
    
    **Input:** grid = [["a","b","b"],["b","z","b"],["b","b","a"]]
    **Output:** false
    

 

**Constraints:**

  * `m == grid.length`
  * `n == grid[i].length`
  * `1 <= m, n <= 500`
  * `grid` consists only of lowercase English letters.

## Solution

```java
class Solution {
    static int[][] dirs = { { 0, -1 }, { 0, 1 }, { -1, 0 }, { 1, 0 } };

    public boolean containsCycle(char[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        boolean[] visit = new boolean[m * n];

        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                if (!visit[i * n + j] && dfs(i, j, -1, -1, grid, visit, m, n))
                    return true;

        return false;
    }

    private static boolean dfs(int r, int c, int pr, int pc, char[][] grid, boolean[] visit, int m, int n) {
        visit[r * n + c] = true;

        for (int k = 0; k < 4; k++) {
            int nr = r + dirs[k][0];
            int nc = c + dirs[k][1];

            if ((nr != pr || nc != pc) &&
                    nr >= 0 && nr < m && nc >= 0 &&
                    nc < n && grid[nr][nc] == grid[r][c])
                if (visit[nr * n + nc] || dfs(nr, nc, r, c, grid, visit, m, n))
                    return true;
        }

        return false;
    }

}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
