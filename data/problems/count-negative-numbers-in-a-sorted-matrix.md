---
id: "1476"
title: "Count Negative Numbers in a Sorted Matrix"
slug: "count-negative-numbers-in-a-sorted-matrix"
difficulty: "Easy"
tags: ["Array", "Binary Search", "Matrix"]
language: "python3"
date_solved: "2025-12-28"
status: "solved"
submission_id: "1867236978"
---

## Problem

Given a `m x n` matrix `grid` which is sorted in non-increasing order both row-wise and column-wise, return _the number of**negative** numbers in_ `grid`.

 

**Example 1:**
    
    
    **Input:** grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
    **Output:** 8
    **Explanation:** There are 8 negatives number in the matrix.
    

**Example 2:**
    
    
    **Input:** grid = [[3,2],[1,0]]
    **Output:** 0
    

 

**Constraints:**

  * `m == grid.length`
  * `n == grid[i].length`
  * `1 <= m, n <= 100`
  * `-100 <= grid[i][j] <= 100`



 

**Follow up:** Could you find an `O(n + m)` solution?

## Solution

```python
class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        m = len(grid)
        n = len(grid[0])
        i = m - 1
        j = 0
        res = 0
        while i >= 0 and j < n:
            if grid[i][j] < 0:
                res += n - j
                i -= 1
            else:
                j += 1
        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
