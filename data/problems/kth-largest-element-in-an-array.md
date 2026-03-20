---
id: "215"
title: "Kth Largest Element in an Array"
slug: "kth-largest-element-in-an-array"
difficulty: "Medium"
tags: ["Array", "Divide and Conquer", "Sorting", "Heap (Priority Queue)", "Quickselect"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830325653"
---

## Problem

Given an integer array `nums` and an integer `k`, return _the_ `kth` _largest element in the array_.

Note that it is the `kth` largest element in the sorted order, not the `kth` distinct element.

Can you solve it without sorting?

 

**Example 1:**
    
    
    **Input:** nums = [3,2,1,5,6,4], k = 2
    **Output:** 5
    

**Example 2:**
    
    
    **Input:** nums = [3,2,3,1,2,4,5,5,6], k = 4
    **Output:** 4
    

 

**Constraints:**

  * `1 <= k <= nums.length <= 105`
  * `-104 <= nums[i] <= 104`

## Solution

```python
import heapq

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        return heapq.nlargest(k, nums)[-1]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
