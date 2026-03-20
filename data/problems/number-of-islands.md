---
id: "200"
title: "Number of Islands"
slug: "number-of-islands"
difficulty: "Medium"
tags: ["Array", "Depth-First Search", "Breadth-First Search", "Union-Find", "Matrix"]
language: "java"
date_solved: "2026-03-09"
status: "solved"
submission_id: "1942555017"
---

## Problem

Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return _the number of islands_.

An **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

**Example 1:**
    
    
    **Input:** grid = [
      ["1","1","1","1","0"],
      ["1","1","0","1","0"],
      ["1","1","0","0","0"],
      ["0","0","0","0","0"]
    ]
    **Output:** 1
    

**Example 2:**
    
    
    **Input:** grid = [
      ["1","1","0","0","0"],
      ["1","1","0","0","0"],
      ["0","0","1","0","0"],
      ["0","0","0","1","1"]
    ]
    **Output:** 3
    

 

**Constraints:**

  * `m == grid.length`
  * `n == grid[i].length`
  * `1 <= m, n <= 300`
  * `grid[i][j]` is `'0'` or `'1'`.

## Solution

```java
class Solution {
    public int numIslands(char[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;

        int count = 0;

        // dfs inside for loop, only for non adjacent cells 
        for(int i =0; i < rows; i++) {
            for(int j =0; j < cols; j++) {
                if(grid[i][j] == '1'){
                    count++;
                    dfs(i,j, grid);
                }
            }
        }

       // non adjacent dfs call count
        return count;
    }

    public void dfs(int i, int j, char[][] grid) {

        int rows = grid.length;
        int cols = grid[0].length;

        // checks for index bounds and breaking point
        if(i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] == '0') return;

        // work
        grid[i][j] = '0';

        int[][] directions = new int[][] {{-1,0}, {1,0}, {0,1}, {0,-1}}; // up, down, right, left

        // traverse adjacent rows and cols 

        for(int[] dir : directions) {
            int newRow = i + dir[0];
            int newCol = j + dir[1];

            dfs(newRow, newCol, grid);
        }
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
