---
id: "334"
title: "Increasing Triplet Subsequence"
slug: "increasing-triplet-subsequence"
difficulty: "Medium"
tags: ["Array", "Greedy"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1823883267"
---

## Problem

Given an integer array `nums`, return `true` _if there exists a triple of indices_`(i, j, k)`_such that_`i < j < k` _and_`nums[i] < nums[j] < nums[k]`. If no such indices exists, return `false`.

 

**Example 1:**
    
    
    **Input:** nums = [1,2,3,4,5]
    **Output:** true
    **Explanation:** Any triplet where i < j < k is valid.
    

**Example 2:**
    
    
    **Input:** nums = [5,4,3,2,1]
    **Output:** false
    **Explanation:** No triplet exists.
    

**Example 3:**
    
    
    **Input:** nums = [2,1,5,0,4,6]
    **Output:** true
    **Explanation:** One of the valid triplet is (1, 4, 5), because nums[1] == 1 < nums[4] == 4 < nums[5] == 6.
    

 

**Constraints:**

  * `1 <= nums.length <= 5 * 105`
  * `-231 <= nums[i] <= 231 - 1`



 

**Follow up:** Could you implement a solution that runs in `O(n)` time complexity and `O(1)` space complexity?

## Solution

```python
class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        first = float('inf')
        second = float('inf')
        for num in nums:
            if num <= first:
                first = num
            elif num <= second:
                second = num
            else:
                return True
        return False
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
