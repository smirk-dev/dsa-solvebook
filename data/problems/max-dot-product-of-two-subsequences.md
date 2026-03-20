---
id: "1569"
title: "Max Dot Product of Two Subsequences"
slug: "max-dot-product-of-two-subsequences"
difficulty: "Hard"
tags: ["Array", "Dynamic Programming"]
language: "python3"
date_solved: "2026-03-14"
status: "solved"
submission_id: "1947701728"
---

## Problem

Given two arrays `nums1` and `nums2`.

Return the maximum dot product between **non-empty** subsequences of nums1 and nums2 with the same length.

A subsequence of an array is a new array which is formed from the original array by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, `[2,3,5]` is a subsequence of `[1,2,3,4,5]` while `[1,5,3]` is not).

 

**Example 1:**
    
    
    **Input:** nums1 = [2,1,-2,5], nums2 = [3,0,-6]
    **Output:** 18
    **Explanation:** Take subsequence [2,-2] from nums1 and subsequence [3,-6] from nums2.
    Their dot product is (2*3 + (-2)*(-6)) = 18.

**Example 2:**
    
    
    **Input:** nums1 = [3,-2], nums2 = [2,-6,7]
    **Output:** 21
    **Explanation:** Take subsequence [3] from nums1 and subsequence [7] from nums2.
    Their dot product is (3*7) = 21.

**Example 3:**
    
    
    **Input:** nums1 = [-1,-1], nums2 = [1,1]
    **Output:** -1
    **Explanation:** Take subsequence [-1] from nums1 and subsequence [1] from nums2.
    Their dot product is -1.

 

**Constraints:**

  * `1 <= nums1.length, nums2.length <= 500`
  * `-1000 <= nums1[i], nums2[i] <= 1000`

## Solution

```python
class Solution:
    def maxDotProduct(self, nums1: List[int], nums2: List[int]) -> int:
        memo = {}
        # max dot product of two subsequences starting at i,j
        def dp(i,j):
            if i == len(nums1) or j == len(nums2):
                return float("-inf") # if we are passed the boundary, dont pick anything from there.
            if (i,j) in memo:
                return memo[(i,j)]
            take = nums1[i] * nums2[j]
            res = max(
            # take i,j. move forward
                take + dp(i+1, j+1),
            # take this subsequence and just end.
                take,
            # skip i: i+1,j
                dp(i+1,j),
            # skip j: i,j+1
                dp(i,j+1),
            )
            memo[(i,j)] = res
            return memo[(i,j)]
        return dp(0,0)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
