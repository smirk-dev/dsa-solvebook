---
id: "289"
title: "Game of Life"
slug: "game-of-life"
difficulty: "Medium"
tags: ["Array", "Matrix", "Simulation"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1825812744"
---

## Problem

According to [Wikipedia's article](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life): "The **Game of Life** , also known simply as **Life** , is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an `m x n` grid of cells, where each cell has an initial state: **live** (represented by a `1`) or **dead** (represented by a `0`). Each cell interacts with its [eight neighbors](https://en.wikipedia.org/wiki/Moore_neighborhood) (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

  1. Any live cell with fewer than two live neighbors dies as if caused by under-population.
  2. Any live cell with two or three live neighbors lives on to the next generation.
  3. Any live cell with more than three live neighbors dies, as if by over-population.
  4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.



The next state of the board is determined by applying the above rules simultaneously to every cell in the current state of the `m x n` grid `board`. In this process, births and deaths occur **simultaneously**.

Given the current state of the `board`, **update** the `board` to reflect its next state.

**Note** that you do not need to return anything.

 

**Example 1:**
    
    
    **Input:** board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
    **Output:** [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
    

**Example 2:**
    
    
    **Input:** board = [[1,1],[1,0]]
    **Output:** [[1,1],[1,1]]
    

 

**Constraints:**

  * `m == board.length`
  * `n == board[i].length`
  * `1 <= m, n <= 25`
  * `board[i][j]` is `0` or `1`.



 

**Follow up:**

  * Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
  * In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?

## Solution

```python
class Solution(object):
    def gameOfLife(self, board):
        if not board or not board[0]:
            return

        m, n = len(board), len(board[0])

        def count_live_neighbors(r, c):
            count = 0
            for dr in (-1, 0, 1):
                for dc in (-1, 0, 1):
                    if dr == 0 and dc == 0:
                        continue
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < m and 0 <= nc < n and abs(board[nr][nc]) == 1:
                        count += 1
            return count

        for r in range(m):
            for c in range(n):
                live_neighbors = count_live_neighbors(r, c)

                if board[r][c] == 1 and (live_neighbors < 2 or live_neighbors > 3):
                    board[r][c] = -1
                elif board[r][c] == 0 and live_neighbors == 3:
                    board[r][c] = 2

        for r in range(m):
            for c in range(n):
                if board[r][c] > 0:
                    board[r][c] = 1
                else:
                    board[r][c] = 0
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
