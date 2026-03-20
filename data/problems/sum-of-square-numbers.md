---
id: "633"
title: "Sum of Square Numbers"
slug: "sum-of-square-numbers"
difficulty: "Medium"
tags: ["Math", "Two Pointers", "Binary Search"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830327394"
---

## Problem

Given a non-negative integer `c`, decide whether there're two integers `a` and `b` such that `a2 + b2 = c`.

 

**Example 1:**
    
    
    **Input:** c = 5
    **Output:** true
    **Explanation:** 1 * 1 + 2 * 2 = 5
    

**Example 2:**
    
    
    **Input:** c = 3
    **Output:** false
    

 

**Constraints:**

  * `0 <= c <= 231 - 1`

## Solution

```python
class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        left, right = 0, int(c ** 0.5)
        while left <= right:
            curr = left * left + right * right
            if curr == c:
                return True
            elif curr < c:
                left += 1
            else:
                right -= 1
        return False
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
