---
id: "74"
title: "Search a 2D Matrix"
slug: "search-a-2d-matrix"
difficulty: "Medium"
tags: ["Array", "Binary Search", "Matrix"]
language: "python3"
date_solved: "2025-03-25"
status: "solved"
submission_id: "1585356542"
---

## Problem

You are given an `m x n` integer matrix `matrix` with the following two properties:

  * Each row is sorted in non-decreasing order.
  * The first integer of each row is greater than the last integer of the previous row.



Given an integer `target`, return `true` _if_ `target` _is in_ `matrix` _or_ `false` _otherwise_.

You must write a solution in `O(log(m * n))` time complexity.

 

**Example 1:**
    
    
    **Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
    **Output:** true
    

**Example 2:**
    
    
    **Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
    **Output:** false
    

 

**Constraints:**

  * `m == matrix.length`
  * `n == matrix[i].length`
  * `1 <= m, n <= 100`
  * `-104 <= matrix[i][j], target <= 104`

## Solution

```python
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        top = 0
        bot = len(matrix) - 1
        while top <= bot:
            mid = (top + bot) // 2
            if matrix[mid][0] < target and matrix[mid][-1] > target:
                break
            elif matrix[mid][0] > target:
                bot = mid - 1
            else:
                top = mid + 1
        row = (top + bot) // 2
        left = 0
        right = len(matrix[row]) - 1
        while left <= right:
            mid = (left + right) // 2
            if matrix[row][mid] == target:
                return True
            elif matrix[row][mid] > target:
                right = mid - 1
            else:
                left = mid + 1
        return False
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
