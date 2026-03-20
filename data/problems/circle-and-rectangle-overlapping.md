---
id: "1501"
title: "Circle and Rectangle Overlapping"
slug: "circle-and-rectangle-overlapping"
difficulty: "Medium"
tags: ["Math", "Geometry"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830314465"
---

## Problem

You are given a circle represented as `(radius, xCenter, yCenter)` and an axis-aligned rectangle represented as `(x1, y1, x2, y2)`, where `(x1, y1)` are the coordinates of the bottom-left corner, and `(x2, y2)` are the coordinates of the top-right corner of the rectangle.

Return `true` _if the circle and rectangle are overlapped otherwise return_`false`. In other words, check if there is **any** point `(xi, yi)` that belongs to the circle and the rectangle at the same time.

 

**Example 1:**
    
    
    **Input:** radius = 1, xCenter = 0, yCenter = 0, x1 = 1, y1 = -1, x2 = 3, y2 = 1
    **Output:** true
    **Explanation:** Circle and rectangle share the point (1,0).
    

**Example 2:**
    
    
    **Input:** radius = 1, xCenter = 1, yCenter = 1, x1 = 1, y1 = -3, x2 = 2, y2 = -1
    **Output:** false
    

**Example 3:**
    
    
    **Input:** radius = 1, xCenter = 0, yCenter = 0, x1 = -1, y1 = 0, x2 = 0, y2 = 1
    **Output:** true
    

 

**Constraints:**

  * `1 <= radius <= 2000`
  * `-104 <= xCenter, yCenter <= 104`
  * `-104 <= x1 < x2 <= 104`
  * `-104 <= y1 < y2 <= 104`

## Solution

```python
class Solution:
    def checkOverlap(self, radius: int, xCenter: int, yCenter: int,
                     x1: int, y1: int, x2: int, y2: int) -> bool:
        # Clamp: find closest point on the rectangle to the circle center
        closest_x = min(max(xCenter, x1), x2)
        closest_y = min(max(yCenter, y1), y2)
        # Calculate distance from circle center to this closest point
        dx = closest_x - xCenter
        dy = closest_y - yCenter
        return dx * dx + dy * dy <= radius * radius
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
