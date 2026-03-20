---
id: "954"
title: "Maximum Sum Circular Subarray"
slug: "maximum-sum-circular-subarray"
difficulty: "Medium"
tags: ["Array", "Divide and Conquer", "Dynamic Programming", "Queue", "Monotonic Queue"]
language: "python3"
date_solved: "2025-11-09"
status: "solved"
submission_id: "1825179202"
---

## Problem

Given a **circular integer array** `nums` of length `n`, return _the maximum possible sum of a non-empty**subarray** of _`nums`.

A **circular array** means the end of the array connects to the beginning of the array. Formally, the next element of `nums[i]` is `nums[(i + 1) % n]` and the previous element of `nums[i]` is `nums[(i - 1 + n) % n]`.

A **subarray** may only include each element of the fixed buffer `nums` at most once. Formally, for a subarray `nums[i], nums[i + 1], ..., nums[j]`, there does not exist `i <= k1`, `k2 <= j` with `k1 % n == k2 % n`.

 

**Example 1:**
    
    
    **Input:** nums = [1,-2,3,-2]
    **Output:** 3
    **Explanation:** Subarray [3] has maximum sum 3.
    

**Example 2:**
    
    
    **Input:** nums = [5,-3,5]
    **Output:** 10
    **Explanation:** Subarray [5,5] has maximum sum 5 + 5 = 10.
    

**Example 3:**
    
    
    **Input:** nums = [-3,-2,-3]
    **Output:** -2
    **Explanation:** Subarray [-2] has maximum sum -2.
    

 

**Constraints:**

  * `n == nums.length`
  * `1 <= n <= 3 * 104`
  * `-3 * 104 <= nums[i] <= 3 * 104`

## Solution

```python
class Solution:
    def maxSubarraySumCircular(self, nums: List[int]) -> int:
        maxSum = nums[0]
        minSum = nums[0]
        currMaxSum = nums[0]
        currMinSum = nums[0]
        totalSum = nums[0]
        
        for i in range(1, len(nums)):
            # Kadane's algorithm for maximum sum
            # Either extend previous subarray or start a new one
            currMaxSum = max(currMaxSum + nums[i], nums[i])
            maxSum = max(maxSum, currMaxSum)
            
            # Kadane's algorithm for minimum sum
            # Either extend previous subarray or start a new one
            currMinSum = min(currMinSum + nums[i], nums[i])
            minSum = min(minSum, currMinSum)
            
            # Calculate the total sum of all elements
            totalSum += nums[i]
        
        # The circular sum is the total sum minus the minimum subarray sum
        circularSum = totalSum - minSum
        
        # Edge case: if all numbers are negative, then maxSum will be negative
        # and circularSum will be 0 (empty subarray), but we need to return the max negative value
        if circularSum == 0:
            return maxSum
        
        # Return the maximum of the regular subarray sum and the circular subarray sum
        return max(maxSum, circularSum)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
