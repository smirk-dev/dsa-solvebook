---
id: "1658"
title: "Minimum Swaps to Arrange a Binary Grid"
slug: "minimum-swaps-to-arrange-a-binary-grid"
difficulty: "Medium"
tags: ["Array", "Greedy", "Matrix"]
language: "java"
date_solved: "2026-03-02"
status: "solved"
submission_id: "1935699076"
---

## Problem

Given an `n x n` binary `grid`, in one step you can choose two **adjacent rows** of the grid and swap them.

A grid is said to be **valid** if all the cells above the main diagonal are **zeros**.

Return _the minimum number of steps_ needed to make the grid valid, or **-1** if the grid cannot be valid.

The main diagonal of a grid is the diagonal that starts at cell `(1, 1)` and ends at cell `(n, n)`.

 

**Example 1:**
    
    
    **Input:** grid = [[0,0,1],[1,1,0],[1,0,0]]
    **Output:** 3
    

**Example 2:**
    
    
    **Input:** grid = [[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0]]
    **Output:** -1
    **Explanation:** All rows are similar, swaps have no effect on the grid.
    

**Example 3:**
    
    
    **Input:** grid = [[1,0,0],[1,1,0],[1,1,1]]
    **Output:** 0
    

 

**Constraints:**

  * `n == grid.length` `== grid[i].length`
  * `1 <= n <= 200`
  * `grid[i][j]` is either `0` or `1`

## Solution

```java
class Solution {
    public int minSwaps(int[][] grid) {
        int n = grid.length;
        int[] zeros = new int[n];
        for (int i = 0; i < n; i++) {
            int count = 0;
            for (int j = n - 1; j >= 0 && grid[i][j] == 0; j--) {
                count++;
            }
            zeros[i] = count;
        }

        int swaps = 0;

        for (int i = 0; i < n; i++) {
            int needed = n - i - 1;
            int j = i;
            while (j < n && zeros[j] < needed) j++;

            if (j == n) return -1;
            while (j > i) {
                int temp = zeros[j];
                zeros[j] = zeros[j - 1];
                zeros[j - 1] = temp;
                j--;
                swaps++;
            }
        }

        return swaps;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
