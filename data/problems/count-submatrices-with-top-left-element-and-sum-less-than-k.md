---
id: "3338"
title: "Count Submatrices with Top-Left Element and Sum Less Than k"
slug: "count-submatrices-with-top-left-element-and-sum-less-than-k"
difficulty: "Medium"
tags: ["Array", "Matrix", "Prefix Sum"]
language: "java"
date_solved: "2026-03-18"
status: "solved"
submission_id: "1951808719"
---

## Problem

You are given a **0-indexed** integer matrix `grid` and an integer `k`.

Return _the**number** of submatrices that contain the top-left element of the_ `grid`, _and have a sum less than or equal to_`k`.

 

**Example 1:**
    
    
    **Input:** grid = [[7,6,3],[6,6,1]], k = 18
    **Output:** 4
    **Explanation:** There are only 4 submatrices, shown in the image above, that contain the top-left element of grid, and have a sum less than or equal to 18.

**Example 2:**
    
    
    **Input:** grid = [[7,2,9],[1,5,0],[2,6,6]], k = 20
    **Output:** 6
    **Explanation:** There are only 6 submatrices, shown in the image above, that contain the top-left element of grid, and have a sum less than or equal to 20.
    

 

**Constraints:**

  * `m == grid.length `
  * `n == grid[i].length`
  * `1 <= n, m <= 1000 `
  * `0 <= grid[i][j] <= 1000`
  * `1 <= k <= 109`

## Solution

```java
// Added using AI
class Solution {
    public int countSubmatrices(int[][] grid, int k) {
        int m = grid.length, n = grid[0].length;
        int ans = 0;
        int[][] px = new int[m + 1][n + 1];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                px[i+1][j+1] = grid[i][j] + px[i][j+1] + px[i+1][j] - px[i][j];
                if (px[i+1][j+1] <= k) ans++;
            }
        }
        return ans;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
