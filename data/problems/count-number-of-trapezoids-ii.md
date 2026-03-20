---
id: "3897"
title: "Count Number of Trapezoids II"
slug: "count-number-of-trapezoids-ii"
difficulty: "Hard"
tags: ["Array", "Hash Table", "Math", "Geometry"]
language: "python3"
date_solved: "2025-12-03"
status: "solved"
submission_id: "1846059066"
---

## Problem

You are given a 2D integer array `points` where `points[i] = [xi, yi]` represents the coordinates of the `ith` point on the Cartesian plane.

Return _the number of unique_ _trapezoids_ that can be formed by choosing any four distinct points from `points`.

A******trapezoid** is a convex quadrilateral with **at least one pair** of parallel sides. Two lines are parallel if and only if they have the same slope.

 

**Example 1:**

**Input:** points = [[-3,2],[3,0],[2,3],[3,2],[2,-3]]

**Output:** 2

**Explanation:**

There are two distinct ways to pick four points that form a trapezoid:

  * The points `[-3,2], [2,3], [3,2], [2,-3]` form one trapezoid.
  * The points `[2,3], [3,2], [3,0], [2,-3]` form another trapezoid.



**Example 2:**

**Input:** points = [[0,0],[1,0],[0,1],[2,1]]

**Output:** 1

**Explanation:**

There is only one trapezoid which can be formed.

 

**Constraints:**

  * `4 <= points.length <= 500`
  * `-1000 <= xi, yi <= 1000`
  * All points are pairwise distinct.

## Solution

```python
from math import gcd
from collections import defaultdict
from typing import List

class Solution:
    def countTrapezoids(self, points: List[List[int]]) -> int:
        t = defaultdict(lambda: defaultdict(int))
        v = defaultdict(lambda: defaultdict(int))

        n = len(points)

        for i in range(n):
            x1, y1 = points[i]
            for j in range(i + 1, n):
                x2, y2 = points[j]
                dx = x2 - x1
                dy = y2 - y1

                if dx < 0 or (dx == 0 and dy < 0):
                    dx = -dx
                    dy = -dy

                g = gcd(dx, abs(dy))
                sx = dx // g
                sy = dy // g

                des = sx * y1 - sy * x1

                key1 = (sx << 12) | (sy + 2000)
                key2 = (dx << 12) | (dy + 2000)

                t[key1][des] += 1
                v[key2][des] += 1

        return self.count(t) - self.count(v) // 2

    def count(self, mp):
        ans = 0

        for inner in mp.values():
            total = sum(inner.values())
            remaining = total

            for val in inner.values():
                remaining -= val
                ans += val * remaining

        return ans
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
