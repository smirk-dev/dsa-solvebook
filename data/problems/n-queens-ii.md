---
id: "52"
title: "N-Queens II"
slug: "n-queens-ii"
difficulty: "Hard"
tags: ["Backtracking"]
language: "python3"
date_solved: "2025-02-24"
status: "solved"
submission_id: "1553506715"
---

## Problem

The **n-queens** puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other.

Given an integer `n`, return _the number of distinct solutions to the  **n-queens puzzle**_.

 

**Example 1:**
    
    
    **Input:** n = 4
    **Output:** 2
    **Explanation:** There are two distinct solutions to the 4-queens puzzle as shown.
    

**Example 2:**
    
    
    **Input:** n = 1
    **Output:** 1
    

 

**Constraints:**

  * `1 <= n <= 9`

## Solution

```python
class Solution:
    def totalNQueens(self, n: int) -> int:
        res,col,pos,neg=0,set(),set(),set()
        def backtracking(r):
            if n==r:
                nonlocal res
                res+=1
            for c in range(n):
                if c in col or (c+r) in pos or (r-c) in neg:
                    continue
                col.add(c)
                pos.add(c+r)
                neg.add(r-c)
                backtracking(r+1)
                col.remove(c)
                pos.remove(c+r)
                neg.remove(r-c)
                
        backtracking(0)

        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
