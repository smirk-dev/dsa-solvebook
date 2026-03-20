---
id: "51"
title: "N-Queens"
slug: "n-queens"
difficulty: "Hard"
tags: ["Array", "Backtracking"]
language: "python3"
date_solved: "2025-02-20"
status: "solved"
submission_id: "1549265454"
---

## Problem

The **n-queens** puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other.

Given an integer `n`, return _all distinct solutions to the**n-queens puzzle**_. You may return the answer in **any order**.

Each solution contains a distinct board configuration of the n-queens' placement, where `'Q'` and `'.'` both indicate a queen and an empty space, respectively.

 

**Example 1:**
    
    
    **Input:** n = 4
    **Output:** [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
    **Explanation:** There exist two distinct solutions to the 4-queens puzzle as shown above
    

**Example 2:**
    
    
    **Input:** n = 1
    **Output:** [["Q"]]
    

 

**Constraints:**

  * `1 <= n <= 9`

## Solution

```python
class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        def backtrack(r):
            if r == n:
                copy = board[:]
                sol = []
                for c in copy:
                    sol.append("".join(c[:]))
                ans.append(sol)
                return
            for c in range(n):
                if c in placedCol or r + c in placedPos or r - c in placedNeg: continue
                board[r][c] = "Q"
                placedCol.add(c)
                placedPos.add(r + c)
                placedNeg.add(r - c)
                backtrack(r + 1)
                board[r][c] = "."
                placedCol.remove(c)
                placedPos.remove(r + c)
                placedNeg.remove(r - c)
        board = [["."] * n for _ in range(n)]
        placedCol = set()
        placedPos = set()
        placedNeg = set()
        ans = []
        backtrack(0)
        return ans
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
