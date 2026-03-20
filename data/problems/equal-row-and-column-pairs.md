---
id: "2428"
title: "Equal Row and Column Pairs"
slug: "equal-row-and-column-pairs"
difficulty: "Medium"
tags: ["Array", "Hash Table", "Matrix", "Simulation"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1823951087"
---

## Problem

Given a **0-indexed** `n x n` integer matrix `grid`, _return the number of pairs_`(ri, cj)`_such that row_`ri` _and column_`cj` _are equal_.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

 

**Example 1:**
    
    
    **Input:** grid = [[3,2,1],[1,7,6],[2,7,7]]
    **Output:** 1
    **Explanation:** There is 1 equal row and column pair:
    - (Row 2, Column 1): [2,7,7]
    

**Example 2:**
    
    
    **Input:** grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
    **Output:** 3
    **Explanation:** There are 3 equal row and column pairs:
    - (Row 0, Column 0): [3,1,2,2]
    - (Row 2, Column 2): [2,4,2,2]
    - (Row 3, Column 2): [2,4,2,2]
    

 

**Constraints:**

  * `n == grid.length == grid[i].length`
  * `1 <= n <= 200`
  * `1 <= grid[i][j] <= 105`

## Solution

```python
class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        from collections import Counter
        n = len(grid)
        rows = Counter(tuple(row) for row in grid)
        cols = Counter(tuple(grid[i][j] for i in range(n)) for j in range(n))
        return sum(rows[t] * cols[t] for t in rows)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
