---
id: "41"
title: "First Missing Positive"
slug: "first-missing-positive"
difficulty: "Hard"
tags: ["Array", "Hash Table"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830321843"
---

## Problem

Given an unsorted integer array `nums`. Return the _smallest positive integer_ that is _not present_ in `nums`.

You must implement an algorithm that runs in `O(n)` time and uses `O(1)` auxiliary space.

 

**Example 1:**
    
    
    **Input:** nums = [1,2,0]
    **Output:** 3
    **Explanation:** The numbers in the range [1,2] are all in the array.
    

**Example 2:**
    
    
    **Input:** nums = [3,4,-1,1]
    **Output:** 2
    **Explanation:** 1 is in the array but 2 is missing.
    

**Example 3:**
    
    
    **Input:** nums = [7,8,9,11,12]
    **Output:** 1
    **Explanation:** The smallest positive integer 1 is missing.
    

 

**Constraints:**

  * `1 <= nums.length <= 105`
  * `-231 <= nums[i] <= 231 - 1`

## Solution

```python
class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        n = len(nums)
        for i in range(n):
            # Only place values 1..n at index value-1
            while 1 <= nums[i] <= n and nums[nums[i] - 1] != nums[i]:
                idx = nums[i] - 1
                nums[i], nums[idx] = nums[idx], nums[i]
        # First place where value doesn't match index + 1 is the answer
        for i in range(n):
            if nums[i] != i + 1:
                return i + 1
        return n + 1
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
