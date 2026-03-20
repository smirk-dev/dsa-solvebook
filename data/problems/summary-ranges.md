---
id: "228"
title: "Summary Ranges"
slug: "summary-ranges"
difficulty: "Easy"
tags: ["Array"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1825817185"
---

## Problem

You are given a **sorted unique** integer array `nums`.

A **range** `[a,b]` is the set of all integers from `a` to `b` (inclusive).

Return _the**smallest sorted** list of ranges that **cover all the numbers in the array exactly**_. That is, each element of `nums` is covered by exactly one of the ranges, and there is no integer `x` such that `x` is in one of the ranges but not in `nums`.

Each range `[a,b]` in the list should be output as:

  * `"a->b"` if `a != b`
  * `"a"` if `a == b`



 

**Example 1:**
    
    
    **Input:** nums = [0,1,2,4,5,7]
    **Output:** ["0->2","4->5","7"]
    **Explanation:** The ranges are:
    [0,2] --> "0->2"
    [4,5] --> "4->5"
    [7,7] --> "7"
    

**Example 2:**
    
    
    **Input:** nums = [0,2,3,4,6,8,9]
    **Output:** ["0","2->4","6","8->9"]
    **Explanation:** The ranges are:
    [0,0] --> "0"
    [2,4] --> "2->4"
    [6,6] --> "6"
    [8,9] --> "8->9"
    

 

**Constraints:**

  * `0 <= nums.length <= 20`
  * `-231 <= nums[i] <= 231 - 1`
  * All the values of `nums` are **unique**.
  * `nums` is sorted in ascending order.

## Solution

```python
class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        if not nums:
            return []
        if len(nums) == 1:
            return [f"{nums[0]}"]
        res = []
        last_start = nums[0]
        for i in range(1, len(nums)):
            if nums[i] - 1 != nums[i-1]:
                if nums[i-1] != last_start:
                    res.append(f"{last_start}->{nums[i-1]}")
                else:
                    res.append(f"{last_start}")
                last_start = nums[i]
        if nums[i] != last_start:
            res.append(f"{last_start}->{nums[i]}")
        else:
            res.append(f"{last_start}")
        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
