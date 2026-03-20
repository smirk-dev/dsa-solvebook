---
id: "2571"
title: "Find the Pivot Integer"
slug: "find-the-pivot-integer"
difficulty: "Easy"
tags: ["Math", "Prefix Sum"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830304497"
---

## Problem

Given a positive integer `n`, find the **pivot integer** `x` such that:

  * The sum of all elements between `1` and `x` inclusively equals the sum of all elements between `x` and `n` inclusively.



Return _the pivot integer_`x`. If no such integer exists, return `-1`. It is guaranteed that there will be at most one pivot index for the given input.

 

**Example 1:**
    
    
    **Input:** n = 8
    **Output:** 6
    **Explanation:** 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.
    

**Example 2:**
    
    
    **Input:** n = 1
    **Output:** 1
    **Explanation:** 1 is the pivot integer since: 1 = 1.
    

**Example 3:**
    
    
    **Input:** n = 4
    **Output:** -1
    **Explanation:** It can be proved that no such integer exist.
    

 

**Constraints:**

  * `1 <= n <= 1000`

## Solution

```python
class Solution:
    def pivotInteger(self, n: int) -> int:
        # Calculate total sum from 1 to n
        total_sum = n * (n + 1) // 2
        
        # Use prefix sum to find pivot
        left_sum = 0
        for x in range(1, n + 1):
            left_sum += x
            # Check if sum from 1 to x equals sum from x to n
            # left_sum = 1 + 2 + ... + x
            # right_sum = x + (x+1) + ... + n = total_sum - left_sum + x
            if left_sum == total_sum - left_sum + x:
                return x
        
        return -1
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
