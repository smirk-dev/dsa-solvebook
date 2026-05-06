---
id: "1972"
title: "Rotating the Box"
slug: "rotating-the-box"
difficulty: "Medium"
tags: ["Array", "Two Pointers", "Matrix"]
language: "java"
date_solved: "2026-05-06"
status: "solved"
submission_id: "1996857853"
---

## Problem

You are given an `m x n` matrix of characters `boxGrid` representing a side-view of a box. Each cell of the box is one of the following:

  * A stone `'#'`
  * A stationary obstacle `'*'`
  * Empty `'.'`



The box is rotated **90 degrees clockwise** , causing some of the stones to fall due to gravity. Each stone falls down until it lands on an obstacle, another stone, or the bottom of the box. Gravity **does not** affect the obstacles' positions, and the inertia from the box's rotation **does not** affect the stones' horizontal positions.

It is **guaranteed** that each stone in `boxGrid` rests on an obstacle, another stone, or the bottom of the box.

Return _an_`n x m` _matrix representing the box after the rotation described above_.

 

**Example 1:**
    
    
    **Input:** boxGrid = [["#",".","#"]]
    **Output:** [["."],
             ["#"],
             ["#"]]
    

**Example 2:**
    
    
    **Input:** boxGrid = [["#",".","*","."],
                  ["#","#","*","."]]
    **Output:** [["#","."],
             ["#","#"],
             ["*","*"],
             [".","."]]
    

**Example 3:**
    
    
    **Input:** boxGrid = [["#","#","*",".","*","."],
                  ["#","#","#","*",".","."],
                  ["#","#","#",".","#","."]]
    **Output:** [[".","#","#"],
             [".","#","#"],
             ["#","#","*"],
             ["#","*","."],
             ["#",".","*"],
             ["#",".","."]]
    

 

**Constraints:**

  * `m == boxGrid.length`
  * `n == boxGrid[i].length`
  * `1 <= m, n <= 500`
  * `boxGrid[i][j]` is either `'#'`, `'*'`, or `'.'`.

## Solution

```java
class Solution {
    public char[][] rotateTheBox(char[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;
        for (int r = 0; r < rows; r++) {
            int p = 0;
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == '.') {
                    char temp = grid[r][c];
                    grid[r][c] = grid[r][p];
                    grid[r][p] = temp;
                    p++;
                } else if (grid[r][c] == '*')
                    p = c + 1;
            }
        }
        
        char[][] res = new char[cols][rows];
        for (int r = 0; r < rows; r++)
            for (int c = 0; c < cols; c++)
                res[c][rows - 1 - r] = grid[r][c];
                
        return res;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
