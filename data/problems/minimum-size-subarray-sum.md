---
id: "209"
title: "Minimum Size Subarray Sum"
slug: "minimum-size-subarray-sum"
difficulty: "Medium"
tags: ["Array", "Binary Search", "Sliding Window", "Prefix Sum"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1825808262"
---

## Problem

Given an array of positive integers `nums` and a positive integer `target`, return _the**minimal length** of a __subarray_ _whose sum is greater than or equal to_ `target`. If there is no such subarray, return `0` instead.

 

**Example 1:**
    
    
    **Input:** target = 7, nums = [2,3,1,2,4,3]
    **Output:** 2
    **Explanation:** The subarray [4,3] has the minimal length under the problem constraint.
    

**Example 2:**
    
    
    **Input:** target = 4, nums = [1,4,4]
    **Output:** 1
    

**Example 3:**
    
    
    **Input:** target = 11, nums = [1,1,1,1,1,1,1,1]
    **Output:** 0
    

 

**Constraints:**

  * `1 <= target <= 109`
  * `1 <= nums.length <= 105`
  * `1 <= nums[i] <= 104`



 

**Follow up:** If you have figured out the `O(n)` solution, try coding another solution of which the time complexity is `O(n log(n))`.

## Solution

```python
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        min_len = float("inf")
        left = 0
        cur_sum = 0

        for right in range(len(nums)):
            cur_sum += nums[right]

            while cur_sum >= target:
                if right - left + 1 < min_len:
                    min_len = right - left + 1
                cur_sum -= nums[left]
                left += 1
        
        return min_len if min_len != float("inf") else 0
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
