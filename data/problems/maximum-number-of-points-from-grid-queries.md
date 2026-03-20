---
id: "2588"
title: "Maximum Number of Points From Grid Queries"
slug: "maximum-number-of-points-from-grid-queries"
difficulty: "Hard"
tags: ["Array", "Two Pointers", "Breadth-First Search", "Union-Find", "Sorting", "Heap (Priority Queue)", "Matrix"]
language: "python3"
date_solved: "2025-03-28"
status: "solved"
submission_id: "1588823321"
---

## Problem

You are given an `m x n` integer matrix `grid` and an array `queries` of size `k`.

Find an array `answer` of size `k` such that for each integer `queries[i]` you start in the **top left** cell of the matrix and repeat the following process:

  * If `queries[i]` is **strictly** greater than the value of the current cell that you are in, then you get one point if it is your first time visiting this cell, and you can move to any **adjacent** cell in all `4` directions: up, down, left, and right.
  * Otherwise, you do not get any points, and you end this process.



After the process, `answer[i]` is the **maximum** number of points you can get. **Note** that for each query you are allowed to visit the same cell **multiple** times.

Return _the resulting array_ `answer`.

 

**Example 1:**
    
    
    **Input:** grid = [[1,2,3],[2,5,7],[3,5,1]], queries = [5,6,2]
    **Output:** [5,8,1]
    **Explanation:** The diagrams above show which cells we visit to get points for each query.

**Example 2:**
    
    
    **Input:** grid = [[5,2,1],[1,1,2]], queries = [3]
    **Output:** [0]
    **Explanation:** We can not get any points because the value of the top left cell is already greater than or equal to 3.
    

 

**Constraints:**

  * `m == grid.length`
  * `n == grid[i].length`
  * `2 <= m, n <= 1000`
  * `4 <= m * n <= 105`
  * `k == queries.length`
  * `1 <= k <= 104`
  * `1 <= grid[i][j], queries[i] <= 106`

## Solution

```python
import heapq
class Solution(object):
    def maxPoints(self, grid, queries):
        m, n = len(grid), len(grid[0])
        q_len = len(queries)
        queries_sorted = sorted(enumerate(queries), key=lambda x: x[1])
        answer = [0] * q_len
        min_heap = [(grid[0][0], 0, 0)]
        visited = [[False] * n for _ in range(m)]
        visited[0][0] = True
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        count = 0
        for idx, query in queries_sorted:
            while min_heap and min_heap[0][0] < query:
                height, x, y = heapq.heappop(min_heap)
                count += 1
                for dx, dy in directions:
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < m and 0 <= ny < n and not visited[nx][ny]:
                        heapq.heappush(min_heap, (grid[nx][ny], nx, ny))
                        visited[nx][ny] = True
            answer[idx] = count
        return answer
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
