---
id: "34"
title: "Find First and Last Position of Element in Sorted Array"
slug: "find-first-and-last-position-of-element-in-sorted-array"
difficulty: "Medium"
tags: ["Array", "Binary Search"]
language: "python3"
date_solved: "2025-02-18"
status: "solved"
submission_id: "1547667084"
---

## Problem

Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

You must write an algorithm with `O(log n)` runtime complexity.

 

**Example 1:**
    
    
    **Input:** nums = [5,7,7,8,8,10], target = 8
    **Output:** [3,4]
    

**Example 2:**
    
    
    **Input:** nums = [5,7,7,8,8,10], target = 6
    **Output:** [-1,-1]
    

**Example 3:**
    
    
    **Input:** nums = [], target = 0
    **Output:** [-1,-1]
    

 

**Constraints:**

  * `0 <= nums.length <= 105`
  * `-109 <= nums[i] <= 109`
  * `nums` is a non-decreasing array.
  * `-109 <= target <= 109`

## Solution

```python
class Solution(object):
    def searchRange(self, nums, target):
        def binary_search(nums, target, is_searching_left):
            left = 0
            right = len(nums) - 1
            idx = -1
            
            while left <= right:
                mid = (left + right) // 2
                
                if nums[mid] > target:
                    right = mid - 1
                elif nums[mid] < target:
                    left = mid + 1
                else:
                    idx = mid
                    if is_searching_left:
                        right = mid - 1
                    else:
                        left = mid + 1
            
            return idx
        
        left = binary_search(nums, target, True)
        right = binary_search(nums, target, False)
        
        return [left, right]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
