---
id: "347"
title: "Top K Frequent Elements"
slug: "top-k-frequent-elements"
difficulty: "Medium"
tags: ["Array", "Hash Table", "Divide and Conquer", "Sorting", "Heap (Priority Queue)", "Bucket Sort", "Counting", "Quickselect"]
language: "python3"
date_solved: "2026-03-17"
status: "solved"
submission_id: "1951116721"
---

## Problem

Given an integer array `nums` and an integer `k`, return _the_ `k` _most frequent elements_. You may return the answer in **any order**.

 

**Example 1:**

**Input:** nums = [1,1,1,2,2,3], k = 2

**Output:** [1,2]

**Example 2:**

**Input:** nums = [1], k = 1

**Output:** [1]

**Example 3:**

**Input:** nums = [1,2,1,2,1,2,3,1,3,2], k = 2

**Output:** [1,2]

 

**Constraints:**

  * `1 <= nums.length <= 105`
  * `-104 <= nums[i] <= 104`
  * `k` is in the range `[1, the number of unique elements in the array]`.
  * It is **guaranteed** that the answer is **unique**.



 

**Follow up:** Your algorithm's time complexity must be better than `O(n log n)`, where n is the array's size.

## Solution

```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        heap = []
        counter = {}
        for n in nums:
            counter[n] = 1 + counter.get(n, 0)
        
        for key, val in counter.items():
            heapq.heappush(heap, (-val, key))
        
        res = []
        while len(res) < k:
            res.append(heapq.heappop(heap)[1])
        
        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
