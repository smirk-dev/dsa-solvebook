---
id: "448"
title: "Find All Numbers Disappeared in an Array"
slug: "find-all-numbers-disappeared-in-an-array"
difficulty: "Easy"
tags: ["Array", "Hash Table"]
language: "python3"
date_solved: "2025-11-14"
status: "solved"
submission_id: "1829403466"
---

## Problem

Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, return _an array of all the integers in the range_ `[1, n]` _that do not appear in_ `nums`.

 

**Example 1:**
    
    
    **Input:** nums = [4,3,2,7,8,2,3,1]
    **Output:** [5,6]
    

**Example 2:**
    
    
    **Input:** nums = [1,1]
    **Output:** [2]
    

 

**Constraints:**

  * `n == nums.length`
  * `1 <= n <= 105`
  * `1 <= nums[i] <= n`



 

**Follow up:** Could you do it without extra space and in `O(n)` runtime? You may assume the returned list does not count as extra space.

## Solution

```python
class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        for num in nums:
            index = abs(num) - 1
            if nums[index] > 0:
                nums[index] = -nums[index]
        return [i + 1 for i, num in enumerate(nums) if num > 0]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
