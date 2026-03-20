---
id: "1586"
title: "Longest Subarray of 1's After Deleting One Element"
slug: "longest-subarray-of-1s-after-deleting-one-element"
difficulty: "Medium"
tags: ["Array", "Dynamic Programming", "Sliding Window"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1823894316"
---

## Problem

Given a binary array `nums`, you should delete one element from it.

Return _the size of the longest non-empty subarray containing only_`1` _' s in the resulting array_. Return `0` if there is no such subarray.

 

**Example 1:**
    
    
    **Input:** nums = [1,1,0,1]
    **Output:** 3
    **Explanation:** After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
    

**Example 2:**
    
    
    **Input:** nums = [0,1,1,1,0,1,1,0,1]
    **Output:** 5
    **Explanation:** After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
    

**Example 3:**
    
    
    **Input:** nums = [1,1,1]
    **Output:** 2
    **Explanation:** You must delete one element.
    

 

**Constraints:**

  * `1 <= nums.length <= 105`
  * `nums[i]` is either `0` or `1`.

## Solution

```python
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        left = 0
        zeros = 0
        max_len = 0
        for right in range(len(nums)):
            if nums[right] == 0:
                zeros += 1
            while zeros > 1:
                if nums[left] == 0:
                    zeros -= 1
                left += 1
            max_len = max(max_len, right - left)
        return max_len
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
