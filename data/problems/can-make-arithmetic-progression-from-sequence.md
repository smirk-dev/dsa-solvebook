---
id: "1626"
title: "Can Make Arithmetic Progression From Sequence"
slug: "can-make-arithmetic-progression-from-sequence"
difficulty: "Easy"
tags: ["Array", "Sorting"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830303816"
---

## Problem

A sequence of numbers is called an **arithmetic progression** if the difference between any two consecutive elements is the same.

Given an array of numbers `arr`, return `true` _if the array can be rearranged to form an**arithmetic progression**. Otherwise, return_ `false`.

 

**Example 1:**
    
    
    **Input:** arr = [3,5,1]
    **Output:** true
    **Explanation:** We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.
    

**Example 2:**
    
    
    **Input:** arr = [1,2,4]
    **Output:** false
    **Explanation:** There is no way to reorder the elements to obtain an arithmetic progression.
    

 

**Constraints:**

  * `2 <= arr.length <= 1000`
  * `-106 <= arr[i] <= 106`

## Solution

```python
class Solution:
    def canMakeArithmeticProgression(self, arr: List[int]) -> bool:
        # Sort the array
        arr.sort()
        
        # Calculate the common difference
        diff = arr[1] - arr[0]
        
        # Check if all consecutive differences are the same
        for i in range(2, len(arr)):
            if arr[i] - arr[i-1] != diff:
                return False
        
        return True
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
