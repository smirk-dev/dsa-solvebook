---
id: "69"
title: "Sqrt(x)"
slug: "sqrtx"
difficulty: "Easy"
tags: ["Math", "Binary Search"]
language: "python3"
date_solved: "2025-03-19"
status: "solved"
submission_id: "1579250449"
---

## Problem

Given a non-negative integer `x`, return _the square root of_`x` _rounded down to the nearest integer_. The returned integer should be **non-negative** as well.

You **must not use** any built-in exponent function or operator.

  * For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.



 

**Example 1:**
    
    
    **Input:** x = 4
    **Output:** 2
    **Explanation:** The square root of 4 is 2, so we return 2.
    

**Example 2:**
    
    
    **Input:** x = 8
    **Output:** 2
    **Explanation:** The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
    

 

**Constraints:**

  * `0 <= x <= 231 - 1`

## Solution

```python
class Solution:
    def mySqrt(self, x: int) -> int:
        if x == 0:
            return 0
        first, last = 1, x
        while first <= last:
            mid = first + (last - first) // 2
            if mid == x // mid:
                return mid
            elif mid > x // mid:
                last = mid - 1
            else:
                first = mid + 1
        return last
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
