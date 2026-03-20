---
id: "1445"
title: "Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold"
slug: "number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold"
difficulty: "Medium"
tags: ["Array", "Sliding Window"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830334622"
---

## Problem

Given an array of integers `arr` and two integers `k` and `threshold`, return _the number of sub-arrays of size_`k` _and average greater than or equal to_`threshold`.

 

**Example 1:**
    
    
    **Input:** arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
    **Output:** 3
    **Explanation:** Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).
    

**Example 2:**
    
    
    **Input:** arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
    **Output:** 6
    **Explanation:** The first 6 sub-arrays of size 3 have averages greater than 5. Note that averages are not integers.
    

 

**Constraints:**

  * `1 <= arr.length <= 105`
  * `1 <= arr[i] <= 104`
  * `1 <= k <= arr.length`
  * `0 <= threshold <= 104`

## Solution

```python
class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        target = k * threshold
        window_sum = sum(arr[:k])
        count = 1 if window_sum >= target else 0
        for i in range(k, len(arr)):
            window_sum += arr[i] - arr[i - k]
            if window_sum >= target:
                count += 1
        return count
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
