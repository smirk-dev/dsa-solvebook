---
id: "645"
title: "Set Mismatch"
slug: "set-mismatch"
difficulty: "Easy"
tags: ["Array", "Hash Table", "Bit Manipulation", "Sorting"]
language: "python3"
date_solved: "2025-11-14"
status: "solved"
submission_id: "1829402255"
---

## Problem

You have a set of integers `s`, which originally contains all the numbers from `1` to `n`. Unfortunately, due to some error, one of the numbers in `s` got duplicated to another number in the set, which results in **repetition of one** number and **loss of another** number.

You are given an integer array `nums` representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return _them in the form of an array_.

 

**Example 1:**
    
    
    **Input:** nums = [1,2,2,4]
    **Output:** [2,3]
    

**Example 2:**
    
    
    **Input:** nums = [1,1]
    **Output:** [1,2]
    

 

**Constraints:**

  * `2 <= nums.length <= 104`
  * `1 <= nums[i] <= 104`

## Solution

```python
class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        n = len(nums)
        num_set = set()
        duplicate = -1
        for num in nums:
            if num in num_set:
                duplicate = num
            else:
                num_set.add(num)
        expected_sum = n * (n + 1) // 2
        actual_sum = sum(nums) - duplicate
        missing = expected_sum - actual_sum
        return [duplicate, missing]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
