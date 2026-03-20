---
id: "371"
title: "Sum of Two Integers"
slug: "sum-of-two-integers"
difficulty: "Medium"
tags: ["Math", "Bit Manipulation"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830315545"
---

## Problem

Given two integers `a` and `b`, return _the sum of the two integers without using the operators_ `+` _and_ `-`.

 

**Example 1:**
    
    
    **Input:** a = 1, b = 2
    **Output:** 3
    

**Example 2:**
    
    
    **Input:** a = 2, b = 3
    **Output:** 5
    

 

**Constraints:**

  * `-1000 <= a, b <= 1000`

## Solution

```python
class Solution:
    def getSum(self, a: int, b: int) -> int:
        MASK = 0xFFFFFFFF
        MAX = 0x7FFFFFFF
        while b != 0:
            carry = (a & b) & MASK
            a = (a ^ b) & MASK
            b = (carry << 1) & MASK
        # If a is negative:
        return a if a <= MAX else ~(a ^ MASK)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
