---
id: "300"
title: "Longest Increasing Subsequence"
slug: "longest-increasing-subsequence"
difficulty: "Medium"
tags: ["Array", "Binary Search", "Dynamic Programming"]
language: "python3"
date_solved: "2025-11-09"
status: "solved"
submission_id: "1825185633"
---

## Problem

Given an integer array `nums`, return _the length of the longest**strictly increasing**_ _**subsequence**_.

 

**Example 1:**
    
    
    **Input:** nums = [10,9,2,5,3,7,101,18]
    **Output:** 4
    **Explanation:** The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
    

**Example 2:**
    
    
    **Input:** nums = [0,1,0,3,2,3]
    **Output:** 4
    

**Example 3:**
    
    
    **Input:** nums = [7,7,7,7,7,7,7]
    **Output:** 1
    

 

**Constraints:**

  * `1 <= nums.length <= 2500`
  * `-104 <= nums[i] <= 104`



 

**Follow up:**  Can you come up with an algorithm that runs in `O(n log(n))` time complexity?

## Solution

```python
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        res = []

        def binary_search(res, n):
            left = 0
            right = len(res) - 1

            while left <= right:
                mid = (left + right) // 2
                if res[mid] == n:
                    return mid
                elif res[mid] > n:
                    right = mid - 1
                else:
                    left = mid + 1
            
            return left

        for n in nums:
            if not res or res[-1] < n:
                res.append(n)
            else:
                idx = binary_search(res, n)
                res[idx] = n
        
        return len(res)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
