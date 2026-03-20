---
id: "2089"
title: "Maximum Matrix Sum"
slug: "maximum-matrix-sum"
difficulty: "Medium"
tags: ["Array", "Greedy", "Matrix"]
language: "python3"
date_solved: "2026-01-05"
status: "solved"
submission_id: "1874880602"
---

## Problem

You are given an `n x n` integer `matrix`. You can do the following operation **any** number of times:

  * Choose any two **adjacent** elements of `matrix` and **multiply** each of them by `-1`.



Two elements are considered **adjacent** if and only if they share a **border**.

Your goal is to **maximize** the summation of the matrix's elements. Return _the**maximum** sum of the matrix's elements using the operation mentioned above._

 

**Example 1:**
    
    
    **Input:** matrix = [[1,-1],[-1,1]]
    **Output:** 4
    **Explanation:** We can follow the following steps to reach sum equals 4:
    - Multiply the 2 elements in the first row by -1.
    - Multiply the 2 elements in the first column by -1.
    

**Example 2:**
    
    
    **Input:** matrix = [[1,2,3],[-1,-2,-3],[1,2,3]]
    **Output:** 16
    **Explanation:** We can follow the following step to reach sum equals 16:
    - Multiply the 2 last elements in the second row by -1.
    

 

**Constraints:**

  * `n == matrix.length == matrix[i].length`
  * `2 <= n <= 250`
  * `-105 <= matrix[i][j] <= 105`

## Solution

```python
class Solution:
    def maxMatrixSum(self, matrix: list[list[int]]) -> int:
        totalSum = 0
        neg = 0
        minAbs = float('inf')
        for row in matrix:
            for v in row:
                if v < 0:
                    neg += 1
                av = abs(v)
                totalSum += av
                minAbs = min(minAbs, av)
        return totalSum if neg % 2 == 0 else totalSum - 2 * minAbs
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
