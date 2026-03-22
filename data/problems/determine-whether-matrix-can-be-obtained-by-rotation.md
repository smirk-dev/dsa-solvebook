---
id: "2015"
title: "Determine Whether Matrix Can Be Obtained By Rotation"
slug: "determine-whether-matrix-can-be-obtained-by-rotation"
difficulty: "Easy"
tags: ["Array", "Matrix"]
language: "java"
date_solved: "2026-03-22"
status: "solved"
submission_id: "1955670975"
---

## Problem

Given two `n x n` binary matrices `mat` and `target`, return `true` _if it is possible to make_`mat` _equal to_`target` _by**rotating** _`mat` _in**90-degree increments** , or _`false` _otherwise._

 

**Example 1:**
    
    
    **Input:** mat = [[0,1],[1,0]], target = [[1,0],[0,1]]
    **Output:** true
    **Explanation:** We can rotate mat 90 degrees clockwise to make mat equal target.
    

**Example 2:**
    
    
    **Input:** mat = [[0,1],[1,1]], target = [[1,0],[0,1]]
    **Output:** false
    **Explanation:** It is impossible to make mat equal to target by rotating mat.
    

**Example 3:**
    
    
    **Input:** mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]
    **Output:** true
    **Explanation:** We can rotate mat 90 degrees clockwise two times to make mat equal target.
    

 

**Constraints:**

  * `n == mat.length == target.length`
  * `n == mat[i].length == target[i].length`
  * `1 <= n <= 10`
  * `mat[i][j]` and `target[i][j]` are either `0` or `1`.

## Solution

```java
class Solution {
    public boolean findRotation(int[][] mat, int[][] target) {
        int n = mat.length;
        int m = 0b1111;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (mat[i][j] != target[i][j]) m &= 0b1110;
                if (mat[i][j] != target[j][n - 1 - i]) m &= 0b1101;
                if (mat[i][j] != target[n - 1 - i][n - 1 - j]) m &= 0b1011;
                if (mat[i][j] != target[n - 1 - j][i]) m &= 0b0111;

                if (m == 0)
                    return false;
            }
        }

        return m != 0;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
