---
id: "53"
title: "Maximum Subarray"
slug: "maximum-subarray"
difficulty: "Medium"
tags: ["Array", "Divide and Conquer", "Dynamic Programming"]
language: "python3"
date_solved: "2025-03-04"
status: "solved"
submission_id: "1234567892"
---

## Problem

Given an integer array `nums`, find the subarray with the largest sum, and return *its sum*.

**Example 1:**
```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
```

**Example 2:**
```
Input: nums = [1]
Output: 1
```

**Example 3:**
```
Input: nums = [5,4,-1,7,8]
Output: 23
```

**Constraints:**
- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

**Follow up:** If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

## Solution

```python
class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        max_sum = nums[0]
        current = nums[0]

        for num in nums[1:]:
            current = max(num, current + num)
            max_sum = max(max_sum, current)

        return max_sum
```

## Editorial

**Kadane's Algorithm** — the key insight: at each position, the maximum subarray ending here is either just `nums[i]` alone (start fresh) or `current + nums[i]` (extend the previous subarray). Pick whichever is larger.

If `current` goes negative, it's a drag on any future extension — so we drop it and start fresh. This gives O(n) time, O(1) space.

The divide-and-conquer approach is O(n log n) and works by finding the max crossing subarray at the midpoint recursively — elegant but overkill for this problem.
