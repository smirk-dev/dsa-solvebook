---
id: "53"
title: "Maximum Subarray"
slug: "maximum-subarray"
difficulty: "Medium"
tags: ["Array", "Divide and Conquer", "Dynamic Programming"]
language: "python3"
date_solved: "2025-02-24"
status: "solved"
submission_id: "1553840122"
---

## Problem

Given an integer array `nums`, find the subarray with the largest sum, and return _its sum_.

 

**Example 1:**
    
    
    **Input:** nums = [-2,1,-3,4,-1,2,1,-5,4]
    **Output:** 6
    **Explanation:** The subarray [4,-1,2,1] has the largest sum 6.
    

**Example 2:**
    
    
    **Input:** nums = [1]
    **Output:** 1
    **Explanation:** The subarray [1] has the largest sum 1.
    

**Example 3:**
    
    
    **Input:** nums = [5,4,-1,7,8]
    **Output:** 23
    **Explanation:** The subarray [5,4,-1,7,8] has the largest sum 23.
    

 

**Constraints:**

  * `1 <= nums.length <= 105`
  * `-104 <= nums[i] <= 104`



 

**Follow up:** If you have figured out the `O(n)` solution, try coding another solution using the **divide and conquer** approach, which is more subtle.

## Solution

```python
class Solution(object):
    def maxSubArray(self, nums):
        res = nums[0]
        total = 0

        for n in nums:
            if total < 0:
                total = 0

            total += n
            res = max(res, total)
        
        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
