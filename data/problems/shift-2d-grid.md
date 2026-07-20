---
id: "1386"
title: "Shift 2D Grid"
slug: "shift-2d-grid"
difficulty: "Easy"
tags: ["Array", "Matrix", "Simulation"]
language: "java"
date_solved: "2026-07-20"
status: "solved"
submission_id: "2074272911"
---

## Problem

Given a 2D `grid` of size `m x n` and an integer `k`. You need to shift the `grid` `k` times.

In one shift operation:

  * Element at `grid[i][j]` moves to `grid[i][j + 1]`.
  * Element at `grid[i][n - 1]` moves to `grid[i + 1][0]`.
  * Element at `grid[m - 1][n - 1]` moves to `grid[0][0]`.



Return the _2D grid_ after applying shift operation `k` times.

 

**Example 1:**
    
    
    **Input:** grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
    **Output:** [[9,1,2],[3,4,5],[6,7,8]]
    

**Example 2:**
    
    
    **Input:** grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
    **Output:** [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
    

**Example 3:**
    
    
    **Input:** grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
    **Output:** [[1,2,3],[4,5,6],[7,8,9]]
    

 

**Constraints:**

  * `m == grid.length`
  * `n == grid[i].length`
  * `1 <= m <= 50`
  * `1 <= n <= 50`
  * `-1000 <= grid[i][j] <= 1000`
  * `0 <= k <= 100`

## Solution

```java
class Solution {
    public List<List<Integer>> shiftGrid(int[][] grid, int k) {
        int m = grid.length;
        int n = grid[0].length;

        int total = m * n;
        k %= total;

        List<List<Integer>> ans = new ArrayList<>();

        for (int i = 0; i < m; i++) {
            List<Integer> row = new ArrayList<>();
            for (int j = 0; j < n; j++)
                row.add(0);
            ans.add(row);
        }

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {

                // index in 1D array (before rotation)
                int oldIndex = i * n + j;

                // index in 1D array (after rotation)
                int newIndex = (oldIndex + k) % total;

                // changing from 1D back to 2D
                int newRow = newIndex / n;
                int newCol = newIndex % n;

                ans.get(newRow).set(newCol, grid[i][j]);
            }
        }

        return ans;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
