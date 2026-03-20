---
id: "1046"
title: "Max Consecutive Ones III"
slug: "max-consecutive-ones-iii"
difficulty: "Medium"
tags: ["Array", "Binary Search", "Sliding Window", "Prefix Sum"]
language: "python3"
date_solved: "2026-03-17"
status: "solved"
submission_id: "1951115917"
---

## Problem

Given a binary array `nums` and an integer `k`, return _the maximum number of consecutive_`1` _' s in the array if you can flip at most_ `k` `0`'s.

 

**Example 1:**
    
    
    **Input:** nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
    **Output:** 6
    **Explanation:** [1,1,1,0,0,_**1** ,1,1,1,1,**1**_]
    Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

**Example 2:**
    
    
    **Input:** nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
    **Output:** 10
    **Explanation:** [0,0,_1,1,**1** ,**1** ,1,1,1,**1** ,1,1_,0,0,0,1,1,1,1]
    Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
    

 

**Constraints:**

  * `1 <= nums.length <= 105`
  * `nums[i]` is either `0` or `1`.
  * `0 <= k <= nums.length`

## Solution

```python
class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        left = 0
        zeros = 0
        max_len = 0
        for right in range(len(nums)):
            if nums[right] == 0:
                zeros += 1
            while zeros > k:
                if nums[left] == 0:
                    zeros -= 1
                left += 1
            max_len = max(max_len, right - left + 1)
        return max_len
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
