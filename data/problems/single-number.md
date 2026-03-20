---
id: "136"
title: "Single Number"
slug: "single-number"
difficulty: "Easy"
tags: ["Array", "Bit Manipulation"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830315186"
---

## Problem

Given a **non-empty**  array of integers `nums`, every element appears _twice_ except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

**Example 1:**

**Input:** nums = [2,2,1]

**Output:** 1

**Example 2:**

**Input:** nums = [4,1,2,1,2]

**Output:** 4

**Example 3:**

**Input:** nums = [1]

**Output:** 1

 

**Constraints:**

  * `1 <= nums.length <= 3 * 104`
  * `-3 * 104 <= nums[i] <= 3 * 104`
  * Each element in the array appears twice except for one element which appears only once.

## Solution

```python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        result = 0
        for num in nums:
            result ^= num  # XOR cancels out pairs
        return result
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
