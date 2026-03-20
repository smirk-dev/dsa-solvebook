---
id: "152"
title: "Maximum Product Subarray"
slug: "maximum-product-subarray"
difficulty: "Medium"
tags: ["Array", "Dynamic Programming"]
language: "python3"
date_solved: "2026-03-14"
status: "solved"
submission_id: "1947696280"
---

## Problem

Given an integer array `nums`, find a subarray that has the largest product, and return _the product_.

The test cases are generated so that the answer will fit in a **32-bit** integer.

**Note** that the product of an array with a single element is the value of that element.

 

**Example 1:**
    
    
    **Input:** nums = [2,3,-2,4]
    **Output:** 6
    **Explanation:** [2,3] has the largest product 6.
    

**Example 2:**
    
    
    **Input:** nums = [-2,0,-1]
    **Output:** 0
    **Explanation:** The result cannot be 2, because [-2,-1] is not a subarray.
    

 

**Constraints:**

  * `1 <= nums.length <= 2 * 104`
  * `-10 <= nums[i] <= 10`
  * The product of any subarray of `nums` is **guaranteed** to fit in a **32-bit** integer.

## Solution

```python
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        res = max(nums)
        cur_max = cur_min = 1

        for n in nums:
            temp = cur_max * n
            cur_max = max(temp, cur_min * n, n)
            cur_min = min(temp, cur_min * n, n)

            res = max(res, cur_max)
        
        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
