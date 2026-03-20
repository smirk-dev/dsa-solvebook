---
id: "978"
title: "Valid Mountain Array"
slug: "valid-mountain-array"
difficulty: "Easy"
tags: ["Array"]
language: "python3"
date_solved: "2025-11-14"
status: "solved"
submission_id: "1829418249"
---

## Problem

Given an array of integers `arr`, return _`true` if and only if it is a valid mountain array_.

Recall that arr is a mountain array if and only if:

  * `arr.length >= 3`
  * There exists some `i` with `0 < i < arr.length - 1` such that: 
    * `arr[0] < arr[1] < ... < arr[i - 1] < arr[i] `
    * `arr[i] > arr[i + 1] > ... > arr[arr.length - 1]`



 

**Example 1:**
    
    
    **Input:** arr = [2,1]
    **Output:** false
    

**Example 2:**
    
    
    **Input:** arr = [3,5,5]
    **Output:** false
    

**Example 3:**
    
    
    **Input:** arr = [0,3,2,1]
    **Output:** true
    

 

**Constraints:**

  * `1 <= arr.length <= 104`
  * `0 <= arr[i] <= 104`

## Solution

```python
class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
        n = len(arr)
        # Mountain array must have at least 3 elements
        if n < 3:
            return False
        
        i = 0
        # Walk up - strictly increasing
        while i + 1 < n and arr[i] < arr[i + 1]:
            i += 1
        
        # Peak can't be first or last element
        if i == 0 or i == n - 1:
            return False
        
        # Walk down - strictly decreasing
        while i + 1 < n and arr[i] > arr[i + 1]:
            i += 1
        
        # Check if we reached the end
        return i == n - 1
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
