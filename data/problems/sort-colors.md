---
id: "75"
title: "Sort Colors"
slug: "sort-colors"
difficulty: "Medium"
tags: ["Array", "Two Pointers", "Sorting"]
language: "python3"
date_solved: "2025-03-24"
status: "solved"
submission_id: "1584034719"
---

## Problem

Given an array `nums` with `n` objects colored red, white, or blue, sort them **[in-place](https://en.wikipedia.org/wiki/In-place_algorithm) **so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

**Example 1:**
    
    
    **Input:** nums = [2,0,2,1,1,0]
    **Output:** [0,0,1,1,2,2]
    

**Example 2:**
    
    
    **Input:** nums = [2,0,1]
    **Output:** [0,1,2]
    

 

**Constraints:**

  * `n == nums.length`
  * `1 <= n <= 300`
  * `nums[i]` is either `0`, `1`, or `2`.



 

**Follow up:**  Could you come up with a one-pass algorithm using only constant extra space?

## Solution

```python
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        count = {}
        for i in range(len(nums)):
            count[nums[i]] = count.get(nums[i], 0) + 1
        
        idx = 0

        for color in range(3):
            freq = count.get(color, 0)
            nums[idx : idx + freq] = [color] * freq
            idx += freq
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
