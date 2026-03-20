---
id: "888"
title: "Mirror Reflection"
slug: "mirror-reflection"
difficulty: "Medium"
tags: ["Math", "Geometry", "Number Theory"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830312882"
---

## Problem

There is a special square room with mirrors on each of the four walls. Except for the southwest corner, there are receptors on each of the remaining corners, numbered `0`, `1`, and `2`.

The square room has walls of length `p` and a laser ray from the southwest corner first meets the east wall at a distance `q` from the `0th` receptor.

Given the two integers `p` and `q`, return _the number of the receptor that the ray meets first_.

The test cases are guaranteed so that the ray will meet a receptor eventually.

 

**Example 1:**
    
    
    **Input:** p = 2, q = 1
    **Output:** 2
    **Explanation:** The ray meets receptor 2 the first time it gets reflected back to the left wall.
    

**Example 2:**
    
    
    **Input:** p = 3, q = 1
    **Output:** 1
    

 

**Constraints:**

  * `1 <= q <= p <= 1000`

## Solution

```python
class Solution:
    def mirrorReflection(self, p: int, q: int) -> int:
        # Reduce p and q by dividing out all factors of 2 (keep dividing by 2 if both are even)
        while p % 2 == 0 and q % 2 == 0:
            p //= 2
            q //= 2
        if p % 2 == 0:
            return 2
        if q % 2 == 0:
            return 0
        return 1
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
