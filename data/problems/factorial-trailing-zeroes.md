---
id: "172"
title: "Factorial Trailing Zeroes"
slug: "factorial-trailing-zeroes"
difficulty: "Medium"
tags: ["Math"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830311606"
---

## Problem

Given an integer `n`, return _the number of trailing zeroes in_`n!`.

Note that `n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1`.

 

**Example 1:**
    
    
    **Input:** n = 3
    **Output:** 0
    **Explanation:** 3! = 6, no trailing zero.
    

**Example 2:**
    
    
    **Input:** n = 5
    **Output:** 1
    **Explanation:** 5! = 120, one trailing zero.
    

**Example 3:**
    
    
    **Input:** n = 0
    **Output:** 0
    

 

**Constraints:**

  * `0 <= n <= 104`



 

**Follow up:** Could you write a solution that works in logarithmic time complexity?

## Solution

```python
class Solution:
    def trailingZeroes(self, n: int) -> int:
        # Trailing zeros are produced by factors of 10
        # 10 = 2 × 5
        # In n!, there are always more factors of 2 than 5
        # So we only need to count factors of 5
        
        count = 0
        divisor = 5
        
        while divisor <= n:
            count += n // divisor
            divisor *= 5
        
        return count
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
