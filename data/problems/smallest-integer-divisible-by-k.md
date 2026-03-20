---
id: "1064"
title: "Smallest Integer Divisible by K"
slug: "smallest-integer-divisible-by-k"
difficulty: "Medium"
tags: ["Hash Table", "Math"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830306325"
---

## Problem

Given a positive integer `k`, you need to find the **length** of the **smallest** positive integer `n` such that `n` is divisible by `k`, and `n` only contains the digit `1`.

Return _the**length** of _`n`. If there is no such `n`, return -1.

**Note:** `n` may not fit in a 64-bit signed integer.

 

**Example 1:**
    
    
    **Input:** k = 1
    **Output:** 1
    **Explanation:** The smallest answer is n = 1, which has length 1.
    

**Example 2:**
    
    
    **Input:** k = 2
    **Output:** -1
    **Explanation:** There is no such positive integer n divisible by 2.
    

**Example 3:**
    
    
    **Input:** k = 3
    **Output:** 3
    **Explanation:** The smallest answer is n = 111, which has length 3.
    

 

**Constraints:**

  * `1 <= k <= 105`

## Solution

```python
class Solution:
    def smallestRepunitDivByK(self, k: int) -> int:
        # If k is divisible by 2 or 5, no repunit (all 1s) can divide it
        # because repunits only have prime factors that are not 2 or 5
        if k % 2 == 0 or k % 5 == 0:
            return -1
        
        # Track remainders we've seen to detect cycles
        seen = set()
        remainder = 0
        
        # Build repunit: 1, 11, 111, 1111, ...
        # We only track remainder % k instead of building the actual number
        for length in range(1, k + 1):
            # next repunit = previous_repunit * 10 + 1
            # remainder: (remainder * 10 + 1) % k
            remainder = (remainder * 10 + 1) % k
            
            # If remainder is 0, we found a repunit divisible by k
            if remainder == 0:
                return length
            
            # If we've seen this remainder before, we're in a cycle
            # and will never find a valid repunit
            if remainder in seen:
                return -1
            
            seen.add(remainder)
        
        return -1
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
