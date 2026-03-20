---
id: "3886"
title: "Count Number of Trapezoids I"
slug: "count-number-of-trapezoids-i"
difficulty: "Medium"
tags: ["Array", "Hash Table", "Math", "Geometry"]
language: "python3"
date_solved: "2025-12-02"
status: "solved"
submission_id: "1844947182"
---

## Problem

You are given a 2D integer array `points`, where `points[i] = [xi, yi]` represents the coordinates of the `ith` point on the Cartesian plane.

A **horizontal** **trapezoid** is a convex quadrilateral with **at least one pair** of horizontal sides (i.e. parallel to the x-axis). Two lines are parallel if and only if they have the same slope.

Return the _number of unique_** _horizontal_ _trapezoids_** that can be formed by choosing any four distinct points from `points`.

Since the answer may be very large, return it **modulo** `109 + 7`.

 

**Example 1:**

**Input:** points = [[1,0],[2,0],[3,0],[2,2],[3,2]]

**Output:** 3

**Explanation:**

There are three distinct ways to pick four points that form a horizontal trapezoid:

  * Using points `[1,0]`, `[2,0]`, `[3,2]`, and `[2,2]`.
  * Using points `[2,0]`, `[3,0]`, `[3,2]`, and `[2,2]`.
  * Using points `[1,0]`, `[3,0]`, `[3,2]`, and `[2,2]`.



**Example 2:**

**Input:** points = [[0,0],[1,0],[0,1],[2,1]]

**Output:** 1

**Explanation:**

There is only one horizontal trapezoid that can be formed.

 

**Constraints:**

  * `4 <= points.length <= 105`
  * `-108 <= xi, yi <= 108`
  * All points are pairwise distinct.

## Solution

```python
class Solution:
    def countTrapezoids(self, points: List[List[int]]) -> int:
        freq=Counter(p[1] for p in points)
        Sum, c2=0, 0
        for f in freq.values():
            if f<=1: continue
            c=f*(f-1)//2
            Sum+=c
            c2+=c*c
        return (Sum*Sum-c2)//2%(10**9+7)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
