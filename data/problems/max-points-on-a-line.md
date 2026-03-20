---
id: "149"
title: "Max Points on a Line"
slug: "max-points-on-a-line"
difficulty: "Hard"
tags: ["Array", "Hash Table", "Math", "Geometry"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830313781"
---

## Problem

Given an array of `points` where `points[i] = [xi, yi]` represents a point on the **X-Y** plane, return _the maximum number of points that lie on the same straight line_.

 

**Example 1:**
    
    
    **Input:** points = [[1,1],[2,2],[3,3]]
    **Output:** 3
    

**Example 2:**
    
    
    **Input:** points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
    **Output:** 4
    

 

**Constraints:**

  * `1 <= points.length <= 300`
  * `points[i].length == 2`
  * `-104 <= xi, yi <= 104`
  * All the `points` are **unique**.

## Solution

```python
from collections import defaultdict

class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:
        n = len(points)
        if n <= 2:
            return n
        result = 0
        for i in range(n):
            lines = defaultdict(int)
            duplicates = 1
            for j in range(n):
                if i == j:
                    continue
                x1, y1 = points[i]
                x2, y2 = points[j]
                if x1 == x2 and y1 == y2:
                    duplicates += 1
                else:
                    dx = x2 - x1
                    dy = y2 - y1
                    # Reduce fraction using gcd for slope
                    g = gcd(dx, dy)
                    slope = (dy // g if g else 0, dx // g if g else 0)
                    lines[slope] += 1
            max_online = max(lines.values(), default=0)
            result = max(result, max_online + duplicates)
        return result

def gcd(a, b):
    while b:
        a, b = b, a % b
    return a
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
