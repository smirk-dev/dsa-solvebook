---
id: "1990"
title: "Get Biggest Three Rhombus Sums in a Grid"
slug: "get-biggest-three-rhombus-sums-in-a-grid"
difficulty: "Medium"
tags: ["Array", "Math", "Sorting", "Heap (Priority Queue)", "Matrix", "Prefix Sum"]
language: "java"
date_solved: "2026-03-16"
status: "solved"
submission_id: "1949922437"
---

## Problem

You are given an `m x n` integer matrix `grid`​​​.

A **rhombus sum** is the sum of the elements that form **the** **border** of a regular rhombus shape in `grid`​​​. The rhombus must have the shape of a square rotated 45 degrees with each of the corners centered in a grid cell. Below is an image of four valid rhombus shapes with the corresponding colored cells that should be included in each **rhombus sum** :

Note that the rhombus can have an area of 0, which is depicted by the purple rhombus in the bottom right corner.

Return _the biggest three**distinct rhombus sums** in the _`grid` _in**descending order**_ _. If there are less than three distinct values, return all of them_.

 

**Example 1:**
    
    
    **Input:** grid = [[3,4,5,1,3],[3,3,4,2,3],[20,30,200,40,10],[1,5,5,4,1],[4,3,2,2,5]]
    **Output:** [228,216,211]
    **Explanation:** The rhombus shapes for the three biggest distinct rhombus sums are depicted above.
    - Blue: 20 + 3 + 200 + 5 = 228
    - Red: 200 + 2 + 10 + 4 = 216
    - Green: 5 + 200 + 4 + 2 = 211
    

**Example 2:**
    
    
    **Input:** grid = [[1,2,3],[4,5,6],[7,8,9]]
    **Output:** [20,9,8]
    **Explanation:** The rhombus shapes for the three biggest distinct rhombus sums are depicted above.
    - Blue: 4 + 2 + 6 + 8 = 20
    - Red: 9 (area 0 rhombus in the bottom right corner)
    - Green: 8 (area 0 rhombus in the bottom middle)
    

**Example 3:**
    
    
    **Input:** grid = [[7,7,7]]
    **Output:** [7]
    **Explanation:** All three possible rhombus sums are the same, so return [7].
    

 

**Constraints:**

  * `m == grid.length`
  * `n == grid[i].length`
  * `1 <= m, n <= 50`
  * `1 <= grid[i][j] <= 105`

## Solution

```java
class Solution {
    private int first = -1;
    private int second = -1;
    private int third = -1;
    public int[] getBiggestThree(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                add(grid[i][j]);
            }
        }
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                for (int k = 1;
                     i - k >= 0 && i + k < m && j - k >= 0 && j + k < n;
                     k++) {
                    int sum = 0;
                    for (int d = 0; d < k; d++)
                        sum += grid[i - k + d][j + d];
                    for (int d = 0; d < k; d++)
                        sum += grid[i + d][j + k - d];
                    for (int d = 0; d < k; d++)
                        sum += grid[i + k - d][j - d];
                    for (int d = 0; d < k; d++)
                        sum += grid[i - d][j - k + d];

                    add(sum);
                }
            }
        }
        if (second == -1) return new int[]{first};
        if (third == -1) return new int[]{first, second};
        return new int[]{first, second, third};
    }
    private void add(int val) {
        if (val == first || val == second || val == third) return;
        if (val > first) {
            third = second;
            second = first;
            first = val;
        } 
        else if (val > second) 
        {
            third = second;
            second = val;
        } 
        else if (val > third) 
        {
            third = val;
        }
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
