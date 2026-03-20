---
id: "240"
title: "Search a 2D Matrix II"
slug: "search-a-2d-matrix-ii"
difficulty: "Medium"
tags: ["Array", "Binary Search", "Divide and Conquer", "Matrix"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830370458"
---

## Problem

Write an efficient algorithm that searches for a value `target` in an `m x n` integer matrix `matrix`. This matrix has the following properties:

  * Integers in each row are sorted in ascending from left to right.
  * Integers in each column are sorted in ascending from top to bottom.



 

**Example 1:**
    
    
    **Input:** matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
    **Output:** true
    

**Example 2:**
    
    
    **Input:** matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
    **Output:** false
    

 

**Constraints:**

  * `m == matrix.length`
  * `n == matrix[i].length`
  * `1 <= n, m <= 300`
  * `-109 <= matrix[i][j] <= 109`
  * All the integers in each row are **sorted** in ascending order.
  * All the integers in each column are **sorted** in ascending order.
  * `-109 <= target <= 109`

## Solution

```python
class Solution:
    def searchMatrix(self, mat: List[List[int]], target: int) -> bool:
        
        m=len(mat)
        n=len(mat[0])
        
        i=m-1
        j=0
        
        while i>=0 and j<n:
            if mat[i][j]==target:
                return True
            elif mat[i][j]<target:
                j+=1
            else:
                i-=1
                
        return False
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
