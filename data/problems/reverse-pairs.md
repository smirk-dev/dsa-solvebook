---
id: "493"
title: "Reverse Pairs"
slug: "reverse-pairs"
difficulty: "Hard"
tags: ["Array", "Binary Search", "Divide and Conquer", "Binary Indexed Tree", "Segment Tree", "Merge Sort", "Ordered Set"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830328420"
---

## Problem

Given an integer array `nums`, return _the number of**reverse pairs** in the array_.

A **reverse pair** is a pair `(i, j)` where:

  * `0 <= i < j < nums.length` and
  * `nums[i] > 2 * nums[j]`.



 

**Example 1:**
    
    
    **Input:** nums = [1,3,2,3,1]
    **Output:** 2
    **Explanation:** The reverse pairs are:
    (1, 4) --> nums[1] = 3, nums[4] = 1, 3 > 2 * 1
    (3, 4) --> nums[3] = 3, nums[4] = 1, 3 > 2 * 1
    

**Example 2:**
    
    
    **Input:** nums = [2,4,3,5,1]
    **Output:** 3
    **Explanation:** The reverse pairs are:
    (1, 4) --> nums[1] = 4, nums[4] = 1, 4 > 2 * 1
    (2, 4) --> nums[2] = 3, nums[4] = 1, 3 > 2 * 1
    (3, 4) --> nums[3] = 5, nums[4] = 1, 5 > 2 * 1
    

 

**Constraints:**

  * `1 <= nums.length <= 5 * 104`
  * `-231 <= nums[i] <= 231 - 1`

## Solution

```python
class Solution:
    def reversePairs(self, nums: List[int]) -> int:
        def merge_sort(lo, hi):
            if lo >= hi:
                return 0
            mid = (lo + hi) // 2
            count = merge_sort(lo, mid) + merge_sort(mid + 1, hi)
            j = mid + 1
            # Count reverse pairs
            for i in range(lo, mid + 1):
                while j <= hi and nums[i] > 2 * nums[j]:
                    j += 1
                count += j - (mid + 1)
            # Merge step
            nums[lo:hi+1] = sorted(nums[lo:hi+1])
            return count
        return merge_sort(0, len(nums) - 1)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
