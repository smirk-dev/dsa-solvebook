---
id: "130"
title: "Surrounded Regions"
slug: "surrounded-regions"
difficulty: "Medium"
tags: ["Array", "Depth-First Search", "Breadth-First Search", "Union-Find", "Matrix"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1826053214"
---

## Problem

You are given an `m x n` matrix `board` containing **letters** `'X'` and `'O'`, **capture regions** that are **surrounded** :

  * **Connect** : A cell is connected to adjacent cells horizontally or vertically.
  * **Region** : To form a region **connect every** `'O'` cell.
  * **Surround** : A region is surrounded if none of the `'O'` cells in that region are on the edge of the board. Such regions are **completely enclosed** by `'X'` cells.



To capture a **surrounded region** , replace all `'O'`s with `'X'`s **in-place** within the original board. You do not need to return anything.

 

**Example 1:**

**Input:** board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

**Output:** [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

**Explanation:**

In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.

**Example 2:**

**Input:** board = [["X"]]

**Output:** [["X"]]

 

**Constraints:**

  * `m == board.length`
  * `n == board[i].length`
  * `1 <= m, n <= 200`
  * `board[i][j]` is `'X'` or `'O'`.

## Solution

```python
from collections import deque

class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        
        o = "O"
        
        n = len(board) 
        m = len(board[0])

        Q = deque()
        
        for i in range(n):
            if board[i][0] == o:
                Q.append((i,0))
            if board[i][m-1] == o:
                Q.append((i, m-1))
                
        for j in range(m):
            if board[0][j] == o:
                Q.append((0,j))
            if board[n-1][j] == o:
                Q.append((n-1, j))
                
        def inBounds(i,j):
            return (0 <= i < n) and (0 <= j < m)
                
        while Q:
            i,j = Q.popleft()
            board[i][j] = "#"
            
            for ii, jj in [(i+1, j), (i-1, j), (i, j+1), (i, j-1)]:
                if not inBounds(ii, jj):
                    continue
                if board[ii][jj] != o:
                    continue
                Q.append((ii,jj))
                board[ii][jj] = '#'
            
        for i in range(n):
            for j in range(m):
                if board[i][j] == o:
                    board[i][j] = 'X'
                elif board[i][j] == '#':
                    board[i][j] = o
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
