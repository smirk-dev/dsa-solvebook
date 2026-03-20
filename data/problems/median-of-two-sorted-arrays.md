---
id: "4"
title: "Median of Two Sorted Arrays"
slug: "median-of-two-sorted-arrays"
difficulty: "Hard"
tags: ["Array", "Binary Search", "Divide and Conquer"]
language: "python3"
date_solved: "2026-03-17"
status: "solved"
submission_id: "1951115193"
---

## Problem

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median** of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

 

**Example 1:**
    
    
    **Input:** nums1 = [1,3], nums2 = [2]
    **Output:** 2.00000
    **Explanation:** merged array = [1,2,3] and median is 2.
    

**Example 2:**
    
    
    **Input:** nums1 = [1,2], nums2 = [3,4]
    **Output:** 2.50000
    **Explanation:** merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
    

 

**Constraints:**

  * `nums1.length == m`
  * `nums2.length == n`
  * `0 <= m <= 1000`
  * `0 <= n <= 1000`
  * `1 <= m + n <= 2000`
  * `-106 <= nums1[i], nums2[i] <= 106`

## Solution

```python
class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        merged = nums1 + nums2
        merged.sort()
        total = len(merged)
        if total % 2 == 1:
            return float(merged[total // 2])
        else:
            middle1 = merged[total // 2 -1]
            middle2 = merged[total // 2]
            return (float(middle1) + float(middle2)) / 2.0
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
