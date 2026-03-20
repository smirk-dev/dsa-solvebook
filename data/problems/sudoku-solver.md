---
id: "37"
title: "Sudoku Solver"
slug: "sudoku-solver"
difficulty: "Hard"
tags: ["Array", "Hash Table", "Backtracking", "Matrix"]
language: "python3"
date_solved: "2025-02-18"
status: "solved"
submission_id: "1547680875"
---

## Problem

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy **all of the following rules** :

  1. Each of the digits `1-9` must occur exactly once in each row.
  2. Each of the digits `1-9` must occur exactly once in each column.
  3. Each of the digits `1-9` must occur exactly once in each of the 9 `3x3` sub-boxes of the grid.



The `'.'` character indicates empty cells.

 

**Example 1:**
    
    
    **Input:** board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
    **Output:** [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
    **Explanation:**  The input board is shown above and the only valid solution is shown below:
    
    
    

 

**Constraints:**

  * `board.length == 9`
  * `board[i].length == 9`
  * `board[i][j]` is a digit or `'.'`.
  * It is **guaranteed** that the input board has only one solution.

## Solution

```python
class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        rows = [set() for _ in range(9)] # numbers used in row
        cols = [set() for _ in range(9)] # numbers used in col
        grids = [[set() for _ in range(3)] for _ in range(3)] # numbers used in grid
        empty_cells = []
        for i, row in enumerate(board): # collect numbers and add empty cells
            for j, value in enumerate(row):
                if value == ".": # found empty cell
                    empty_cells.append((i, j))
                else: # found number
                    rows[i].add(value)
                    cols[j].add(value)
                    grids[i//3][j//3].add(value)                     

        # [ (potential numbers for cell), i, j] 
        empty_cells = [
            (9 - len(rows[i] | cols[j] | grids[i//3][j//3]), i, j)
            for i, j in empty_cells
        ]
        heapq.heapify(empty_cells) # sort by lowest potential numbers for cell

        def fill_board():
            if not empty_cells: 
                return True # finished filling board

            _, i, j = heapq.heappop(empty_cells)
            row = rows[i]
            col = cols[j]
            grid = grids[i//3][j//3]
            potential_nums = 0  
            for value in '123456789': # check possible numbers for each cell
                if (value in row or value in col or value in grid): 
                    continue # skip if number present in row, col, or grid

                board[i][j] = value # add number to board and row / col / grid
                row.add(value)
                col.add(value)
                grid.add(value)

                if fill_board(): # try to fill in rest of board
                    return True

                row.remove(value) # couldn't fill rest of board, take out used number
                col.remove(value)
                grid.remove(value)
                potential_nums += 1 # didn't use value, add another option for cell

            heapq.heappush(empty_cells, (potential_nums, i, j)) # didn't fill cell, add back to empty cells
            return False
            
        fill_board()
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
