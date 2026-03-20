---
id: "219"
title: "Contains Duplicate II"
slug: "contains-duplicate-ii"
difficulty: "Easy"
tags: ["Array", "Hash Table", "Sliding Window"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830331155"
---

## Problem

Given an integer array `nums` and an integer `k`, return `true` _if there are two**distinct indices** _`i` _and_`j` _in the array such that_`nums[i] == nums[j]`_and_`abs(i - j) <= k`.

 

**Example 1:**
    
    
    **Input:** nums = [1,2,3,1], k = 3
    **Output:** true
    

**Example 2:**
    
    
    **Input:** nums = [1,0,1,1], k = 1
    **Output:** true
    

**Example 3:**
    
    
    **Input:** nums = [1,2,3,1,2,3], k = 2
    **Output:** false
    

 

**Constraints:**

  * `1 <= nums.length <= 105`
  * `-109 <= nums[i] <= 109`
  * `0 <= k <= 105`

## Solution

```python
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        index_map = {}
        for i, num in enumerate(nums):
            if num in index_map and i - index_map[num] <= k:
                return True
            index_map[num] = i
        return False
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
