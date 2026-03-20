---
id: "1"
title: "Two Sum"
slug: "two-sum"
difficulty: "Easy"
tags: ["Array", "Hash Table"]
language: "python3"
date_solved: "2025-03-01"
status: "solved"
submission_id: "1234567890"
---

## Problem

Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

**Example 1:**
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**
```
Input: nums = [3,3], target = 6
Output: [0,1]
```

**Constraints:**
- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists.

## Solution

```python
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        seen = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        return []
```

## Editorial

The naive O(n²) approach checks every pair. The trick is to flip the question: instead of asking "does `nums[j]` pair with `nums[i]`?", ask "have I already seen `target - nums[i]`?"

A hash map gives O(1) lookups, so we get a single O(n) pass. Store each value → index as we go; the moment we find the complement already in the map, we're done.

**Pattern:** _Complement lookup via hash map_ — this exact pattern appears in 3Sum, 4Sum, and Two Sum variants everywhere.
