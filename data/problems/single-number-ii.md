---
id: "137"
title: "Single Number II"
slug: "single-number-ii"
difficulty: "Medium"
tags: ["Array", "Bit Manipulation"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830317011"
---

## Problem

Given an integer array `nums` where every element appears **three times** except for one, which appears **exactly once**. _Find the single element and return it_.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

**Example 1:**
    
    
    **Input:** nums = [2,2,3,2]
    **Output:** 3
    

**Example 2:**
    
    
    **Input:** nums = [0,1,0,1,0,1,99]
    **Output:** 99
    

 

**Constraints:**

  * `1 <= nums.length <= 3 * 104`
  * `-231 <= nums[i] <= 231 - 1`
  * Each element in `nums` appears exactly **three times** except for one element which appears **once**.

## Solution

```python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        ones, twos = 0, 0
        for num in nums:
            ones = (ones ^ num) & ~twos
            twos = (twos ^ num) & ~ones
        return ones
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
