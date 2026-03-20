---
id: "62"
title: "Unique Paths"
slug: "unique-paths"
difficulty: "Medium"
tags: ["Math", "Dynamic Programming", "Combinatorics"]
language: "python3"
date_solved: "2025-02-25"
status: "solved"
submission_id: "1554899859"
---

## Problem

There is a robot on an `m x n` grid. The robot is initially located at the **top-left corner** (i.e., `grid[0][0]`). The robot tries to move to the **bottom-right corner** (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.

Given the two integers `m` and `n`, return _the number of possible unique paths that the robot can take to reach the bottom-right corner_.

The test cases are generated so that the answer will be less than or equal to `2 * 109`.

 

**Example 1:**
    
    
    **Input:** m = 3, n = 7
    **Output:** 28
    

**Example 2:**
    
    
    **Input:** m = 3, n = 2
    **Output:** 3
    **Explanation:** From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
    1. Right -> Down -> Down
    2. Down -> Down -> Right
    3. Down -> Right -> Down
    

 

**Constraints:**

  * `1 <= m, n <= 100`

## Solution

```python
class Solution(object):
    def uniquePaths(self, m, n):
        aboveRow = [1] * n
        for _ in range(m - 1):
            currentRow = [1] * n
            for i in range(1, n):
                currentRow[i] = currentRow[i - 1] + aboveRow[i]
            aboveRow = currentRow
        return aboveRow[-1]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
