---
id: "1299"
title: "K-Concatenation Maximum Sum"
slug: "k-concatenation-maximum-sum"
difficulty: "Medium"
tags: ["Array", "Dynamic Programming"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830358372"
---

## Problem

Given an integer array `arr` and an integer `k`, modify the array by repeating it `k` times.

For example, if `arr = [1, 2]` and `k = 3 `then the modified array will be `[1, 2, 1, 2, 1, 2]`.

Return the maximum sub-array sum in the modified array. Note that the length of the sub-array can be `0` and its sum in that case is `0`.

As the answer can be very large, return the answer **modulo** `109 + 7`.

 

**Example 1:**
    
    
    **Input:** arr = [1,2], k = 3
    **Output:** 9
    

**Example 2:**
    
    
    **Input:** arr = [1,-2,1], k = 5
    **Output:** 2
    

**Example 3:**
    
    
    **Input:** arr = [-1,-2], k = 7
    **Output:** 0
    

 

**Constraints:**

  * `1 <= arr.length <= 105`
  * `1 <= k <= 105`
  * `-104 <= arr[i] <= 104`

## Solution

```python
class Solution:
    def kConcatenationMaxSum(self, arr: List[int], k: int) -> int:
        MOD = 10**9 + 7

        def kadane(nums):
            max_sum = curr = 0
            for num in nums:
                curr = max(num, curr + num)
                max_sum = max(max_sum, curr)
            return max_sum

        if k == 1:
            return kadane(arr) % MOD
        
        # For k >= 2, need to consider max sum in arr+arr and possible full sums in between
        max_2 = kadane(arr * 2)
        total = sum(arr)
        if total > 0:
            return (max_2 + (k - 2) * total) % MOD
        else:
            return max_2 % MOD
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
