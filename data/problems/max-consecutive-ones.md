---
id: "485"
title: "Max Consecutive Ones"
slug: "max-consecutive-ones"
difficulty: "Easy"
tags: ["Array"]
language: "python3"
date_solved: "2025-11-14"
status: "solved"
submission_id: "1829401454"
---

## Problem

Given a binary array `nums`, return _the maximum number of consecutive_`1` _' s in the array_.

 

**Example 1:**
    
    
    **Input:** nums = [1,1,0,1,1,1]
    **Output:** 3
    **Explanation:** The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
    

**Example 2:**
    
    
    **Input:** nums = [1,0,1,1,0,1]
    **Output:** 2
    

 

**Constraints:**

  * `1 <= nums.length <= 105`
  * `nums[i]` is either `0` or `1`.

## Solution

```python
class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        max_count = 0
        current_count = 0
        for num in nums:
            if num == 1:
                current_count += 1
                max_count = max(max_count, current_count)
            else:
                current_count = 0
        return max_count
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
