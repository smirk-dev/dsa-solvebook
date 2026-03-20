---
id: "830"
title: "Largest Triangle Area"
slug: "largest-triangle-area"
difficulty: "Easy"
tags: ["Array", "Math", "Geometry"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830313488"
---

## Problem

Given an array of points on the **X-Y** plane `points` where `points[i] = [xi, yi]`, return _the area of the largest triangle that can be formed by any three different points_. Answers within `10-5` of the actual answer will be accepted.

 

**Example 1:**
    
    
    **Input:** points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
    **Output:** 2.00000
    **Explanation:** The five points are shown in the above figure. The red triangle is the largest.
    

**Example 2:**
    
    
    **Input:** points = [[1,0],[0,0],[0,1]]
    **Output:** 0.50000
    

 

**Constraints:**

  * `3 <= points.length <= 50`
  * `-50 <= xi, yi <= 50`
  * All the given points are **unique**.

## Solution

```python
class Solution:
    def largestTriangleArea(self, points: List[List[int]]) -> float:
        max_area = 0.0
        n = len(points)
        for i in range(n):
            for j in range(i+1, n):
                for k in range(j+1, n):
                    x1, y1 = points[i]
                    x2, y2 = points[j]
                    x3, y3 = points[k]
                    # Shoelace formula for area
                    area = abs(x1*(y2-y3) + x2*(y3-y1) + x3*(y1-y2)) / 2
                    max_area = max(max_area, area)
        return max_area
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
