---
id: "233"
title: "Number of Digit One"
slug: "number-of-digit-one"
difficulty: "Hard"
tags: ["Math", "Dynamic Programming", "Recursion"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830316770"
---

## Problem

Given an integer `n`, count _the total number of digit_`1` _appearing in all non-negative integers less than or equal to_ `n`.

 

**Example 1:**
    
    
    **Input:** n = 13
    **Output:** 6
    

**Example 2:**
    
    
    **Input:** n = 0
    **Output:** 0
    

 

**Constraints:**

  * `0 <= n <= 109`

## Solution

```python
class Solution:
    def countDigitOne(self, n: int) -> int:
        count = 0
        factor = 1
        while factor <= n:
            lower = n % factor
            curr = (n // factor) % 10
            higher = n // (factor * 10)
            if curr == 0:
                count += higher * factor
            elif curr == 1:
                count += higher * factor + lower + 1
            else:
                count += (higher + 1) * factor
            factor *= 10
        return count
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
