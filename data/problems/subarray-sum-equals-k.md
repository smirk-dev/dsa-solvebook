---
id: "560"
title: "Subarray Sum Equals K"
slug: "subarray-sum-equals-k"
difficulty: "Medium"
tags: ["Array", "Hash Table", "Prefix Sum"]
language: "python3"
date_solved: "2026-03-14"
status: "solved"
submission_id: "1947697667"
---

## Problem

Given an array of integers `nums` and an integer `k`, return _the total number of subarrays whose sum equals to_ `k`.

A subarray is a contiguous **non-empty** sequence of elements within an array.

 

**Example 1:**
    
    
    **Input:** nums = [1,1,1], k = 2
    **Output:** 2
    

**Example 2:**
    
    
    **Input:** nums = [1,2,3], k = 3
    **Output:** 2
    

 

**Constraints:**

  * `1 <= nums.length <= 2 * 104`
  * `-1000 <= nums[i] <= 1000`
  * `-107 <= k <= 107`

## Solution

```python
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        sub_num = {0:1}
        total = count = 0

        for n in nums:
            total += n
            
            if total - k in sub_num:
                count += sub_num[total-k]
            
            sub_num[total] = 1 + sub_num.get(total, 0)
        
        return count
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
