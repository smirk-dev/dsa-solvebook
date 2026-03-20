---
id: "283"
title: "Move Zeroes"
slug: "move-zeroes"
difficulty: "Easy"
tags: ["Array", "Two Pointers"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1823887461"
---

## Problem

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

 

**Example 1:**
    
    
    **Input:** nums = [0,1,0,3,12]
    **Output:** [1,3,12,0,0]
    

**Example 2:**
    
    
    **Input:** nums = [0]
    **Output:** [0]
    

 

**Constraints:**

  * `1 <= nums.length <= 104`
  * `-231 <= nums[i] <= 231 - 1`



 

**Follow up:** Could you minimize the total number of operations done?

## Solution

```python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        left = 0
        for right in range(len(nums)):
            if nums[right] != 0:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
