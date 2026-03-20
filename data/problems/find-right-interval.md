---
id: "436"
title: "Find Right Interval"
slug: "find-right-interval"
difficulty: "Medium"
tags: ["Array", "Binary Search", "Sorting"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830329132"
---

## Problem

You are given an array of `intervals`, where `intervals[i] = [starti, endi]` and each `starti` is **unique**.

The **right interval** for an interval `i` is an interval `j` such that `startj >= endi` and `startj` is **minimized**. Note that `i` may equal `j`.

Return _an array of**right interval** indices for each interval `i`_. If no **right interval** exists for interval `i`, then put `-1` at index `i`.

 

**Example 1:**
    
    
    **Input:** intervals = [[1,2]]
    **Output:** [-1]
    **Explanation:** There is only one interval in the collection, so it outputs -1.
    

**Example 2:**
    
    
    **Input:** intervals = [[3,4],[2,3],[1,2]]
    **Output:** [-1,0,1]
    **Explanation:** There is no right interval for [3,4].
    The right interval for [2,3] is [3,4] since start0 = 3 is the smallest start that is >= end1 = 3.
    The right interval for [1,2] is [2,3] since start1 = 2 is the smallest start that is >= end2 = 2.
    

**Example 3:**
    
    
    **Input:** intervals = [[1,4],[2,3],[3,4]]
    **Output:** [-1,2,-1]
    **Explanation:** There is no right interval for [1,4] and [3,4].
    The right interval for [2,3] is [3,4] since start2 = 3 is the smallest start that is >= end1 = 3.
    

 

**Constraints:**

  * `1 <= intervals.length <= 2 * 104`
  * `intervals[i].length == 2`
  * `-106 <= starti <= endi <= 106`
  * The start point of each interval is **unique**.

## Solution

```python
class Solution:
    def findRightInterval(self, intervals: List[List[int]]) -> List[int]:
        n = len(intervals)
        starts = sorted((interval[0], idx) for idx, interval in enumerate(intervals))
        result = []
        for intv in intervals:
            l, r = 0, n - 1
            idx = -1
            # binary search for minimal start >= end
            while l <= r:
                mid = (l + r) // 2
                if starts[mid][0] >= intv[1]:
                    idx = starts[mid][1]
                    r = mid - 1
                else:
                    l = mid + 1
            result.append(idx)
        return result
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
