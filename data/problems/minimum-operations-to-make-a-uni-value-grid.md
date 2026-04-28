---
id: "2160"
title: "Minimum Operations to Make a Uni-Value Grid"
slug: "minimum-operations-to-make-a-uni-value-grid"
difficulty: "Medium"
tags: ["Array", "Math", "Sorting", "Matrix"]
language: "java"
date_solved: "2026-04-28"
status: "solved"
submission_id: "1989962517"
---

## Problem

You are given a 2D integer `grid` of size `m x n` and an integer `x`. In one operation, you can **add** `x` to or **subtract** `x` from any element in the `grid`.

A **uni-value grid** is a grid where all the elements of it are equal.

Return _the**minimum** number of operations to make the grid **uni-value**_. If it is not possible, return `-1`.

 

**Example 1:**
    
    
    **Input:** grid = [[2,4],[6,8]], x = 2
    **Output:** 4
    **Explanation:** We can make every element equal to 4 by doing the following: 
    - Add x to 2 once.
    - Subtract x from 6 once.
    - Subtract x from 8 twice.
    A total of 4 operations were used.
    

**Example 2:**
    
    
    **Input:** grid = [[1,5],[2,3]], x = 1
    **Output:** 5
    **Explanation:** We can make every element equal to 3.
    

**Example 3:**
    
    
    **Input:** grid = [[1,2],[3,4]], x = 2
    **Output:** -1
    **Explanation:** It is impossible to make every element equal.
    

 

**Constraints:**

  * `m == grid.length`
  * `n == grid[i].length`
  * `1 <= m, n <= 105`
  * `1 <= m * n <= 105`
  * `1 <= x, grid[i][j] <= 104`

## Solution

```java
class Solution {
    public int minOperations(int[][] grid, int x) {
        int n = grid.length, m = grid[0].length;
        int N = n * m;
        int[] freq = new int[10001];
        int min = grid[0][0], max = min;

        for (int[] row : grid) {
            for (int c : row) {
                if ((c - grid[0][0]) % x != 0) return -1;
                freq[c]++;
                min = Math.min(min, c);
                max = Math.max(max, c);
            }
        }

        int target = (N + 1) / 2;
        int acc = 0, med = min;

        for (int i = min; i <= max; i += x) {
            acc += freq[i];
            if (acc >= target) {
                med = i;
                break;
            }
        }

        int ops = 0;
        for (int i = min; i <= max; i += x)
            ops += Math.abs(i - med) / x * freq[i];

        return ops;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
