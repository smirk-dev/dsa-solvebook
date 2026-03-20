---
id: "416"
title: "Partition Equal Subset Sum"
slug: "partition-equal-subset-sum"
difficulty: "Medium"
tags: ["Array", "Dynamic Programming"]
language: "python3"
date_solved: "2025-04-07"
status: "solved"
submission_id: "1599807381"
---

## Problem

Given an integer array `nums`, return `true` _if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or_`false` _otherwise_.

 

**Example 1:**
    
    
    **Input:** nums = [1,5,11,5]
    **Output:** true
    **Explanation:** The array can be partitioned as [1, 5, 5] and [11].
    

**Example 2:**
    
    
    **Input:** nums = [1,2,3,5]
    **Output:** false
    **Explanation:** The array cannot be partitioned into equal sum subsets.
    

 

**Constraints:**

  * `1 <= nums.length <= 200`
  * `1 <= nums[i] <= 100`

## Solution

```python
class Solution:
    def canPartition(self, nums: list[int]) -> bool:
        total = sum(nums)
        if total % 2 != 0:
            return False
        target = total // 2
        dp = 1 << 0
        for num in nums:
            dp |= dp << num
        return (dp & (1 << target)) != 0
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
