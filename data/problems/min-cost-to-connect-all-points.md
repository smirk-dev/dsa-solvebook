---
id: "1706"
title: "Min Cost to Connect All Points"
slug: "min-cost-to-connect-all-points"
difficulty: "Medium"
tags: ["Array", "Union-Find", "Graph Theory", "Minimum Spanning Tree"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830353102"
---

## Problem

You are given an array `points` representing integer coordinates of some points on a 2D-plane, where `points[i] = [xi, yi]`.

The cost of connecting two points `[xi, yi]` and `[xj, yj]` is the **manhattan distance** between them: `|xi - xj| + |yi - yj|`, where `|val|` denotes the absolute value of `val`.

Return _the minimum cost to make all points connected._ All points are connected if there is **exactly one** simple path between any two points.

 

**Example 1:**
    
    
    **Input:** points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
    **Output:** 20
    **Explanation:** 
    
    We can connect the points as shown above to get the minimum cost of 20.
    Notice that there is a unique path between every pair of points.
    

**Example 2:**
    
    
    **Input:** points = [[3,12],[-2,5],[-4,1]]
    **Output:** 18
    

 

**Constraints:**

  * `1 <= points.length <= 1000`
  * `-106 <= xi, yi <= 106`
  * All pairs `(xi, yi)` are distinct.

## Solution

```python
class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        import heapq

        n = len(points)
        visited = [False] * n
        minHeap = [(0, 0)]  # (cost, point_index)
        totalCost = 0
        connected = 0

        while connected < n:
            cost, u = heapq.heappop(minHeap)
            if visited[u]:
                continue
            visited[u] = True
            totalCost += cost
            connected += 1
            for v in range(n):
                if not visited[v]:
                    distance = abs(points[u][0] - points[v][0]) + abs(points[u][1] - points[v][1])
                    heapq.heappush(minHeap, (distance, v))
        return totalCost
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
