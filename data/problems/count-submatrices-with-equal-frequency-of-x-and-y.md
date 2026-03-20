---
id: "3492"
title: "Count Submatrices With Equal Frequency of X and Y"
slug: "count-submatrices-with-equal-frequency-of-x-and-y"
difficulty: "Medium"
tags: ["Array", "Matrix", "Prefix Sum"]
language: "java"
date_solved: "2026-03-19"
status: "solved"
submission_id: "1953022629"
---

## Problem

Given a 2D character matrix `grid`, where `grid[i][j]` is either `'X'`, `'Y'`, or `'.'`, return the number of submatrices that contain:

  * `grid[0][0]`
  * an **equal** frequency of `'X'` and `'Y'`.
  * **at least** one `'X'`.



 

**Example 1:**

**Input:** grid = [["X","Y","."],["Y",".","."]]

**Output:** 3

**Explanation:**

****

**Example 2:**

**Input:** grid = [["X","X"],["X","Y"]]

**Output:** 0

**Explanation:**

No submatrix has an equal frequency of `'X'` and `'Y'`.

**Example 3:**

**Input:** grid = [[".","."],[".","."]]

**Output:** 0

**Explanation:**

No submatrix has at least one `'X'`.

 

**Constraints:**

  * `1 <= grid.length, grid[i].length <= 1000`
  * `grid[i][j]` is either `'X'`, `'Y'`, or `'.'`.

## Solution

```java
class Solution {
    public int numberOfSubmatrices(char[][] grid) {
        int rows = grid.length, cols = grid[0].length;
        int[] sumX = new int[cols];
        int[] sumY = new int[cols];
        int res = 0;

        for (int i = 0; i < rows; i++) {
            int rx = 0, ry = 0;

            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 'X') rx++;
                else if (grid[i][j] == 'Y') ry++;

                sumX[j] += rx;
                sumY[j] += ry;

                if (sumX[j] > 0 && sumX[j] == sumY[j]) res++;
            }
        }

        return res;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
