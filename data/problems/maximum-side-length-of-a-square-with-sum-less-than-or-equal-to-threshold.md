---
id: "1413"
title: "Maximum Side Length of a Square with Sum Less than or Equal to Threshold"
slug: "maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold"
difficulty: "Medium"
tags: ["Array", "Binary Search", "Matrix", "Prefix Sum"]
language: "java"
date_solved: "2026-01-19"
status: "solved"
submission_id: "1889553909"
---

## Problem

Given a `m x n` matrix `mat` and an integer `threshold`, return _the maximum side-length of a square with a sum less than or equal to_`threshold` _or return_`0` _if there is no such square_.

 

**Example 1:**
    
    
    **Input:** mat = [[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]], threshold = 4
    **Output:** 2
    **Explanation:** The maximum side length of square with sum less than or equal to 4 is 2 as shown.
    

**Example 2:**
    
    
    **Input:** mat = [[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]], threshold = 1
    **Output:** 0
    

 

**Constraints:**

  * `m == mat.length`
  * `n == mat[i].length`
  * `1 <= m, n <= 300`
  * `0 <= mat[i][j] <= 104`
  * `0 <= threshold <= 105`

## Solution

```java
class Solution {
    public int maxSideLength(int[][] mat, int threshold) {
        int m = mat.length, n = mat[0].length;
        int maxSide = Math.min(m,n);

        int[][] pref = new int[m+1][n+1];
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                pref[i][j] =
                    mat[i-1][j-1]
                  + pref[i-1][j]
                  + pref[i][j-1]
                  - pref[i-1][j-1];
            }
        }

        while (maxSide > 0) {
            for (int i = 0; i + maxSide <= m; i++) {
                for (int j = 0; j + maxSide <= n; j++) {
                    if (helper(pref, threshold, i, j, maxSide))
                        return maxSide;
                }
            }
            maxSide--;
        }

        return 0;
    }

    private boolean helper(int[][] pref, int t, int x, int y, int side) {
        int x2 = x + side;
        int y2 = y + side;

        int sum =
            pref[x2][y2]
        - pref[x][y2]
        - pref[x2][y]
        + pref[x][y];

        return sum <= t;
    }

}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
