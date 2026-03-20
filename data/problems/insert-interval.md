---
id: "57"
title: "Insert Interval"
slug: "insert-interval"
difficulty: "Medium"
tags: ["Array"]
language: "python3"
date_solved: "2025-02-24"
status: "solved"
submission_id: "1553843305"
---

## Problem

You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [starti, endi]` represent the start and the end of the `ith` interval and `intervals` is sorted in ascending order by `starti`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.

Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `starti` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return `intervals` _after the insertion_.

**Note** that you don't need to modify `intervals` in-place. You can make a new array and return it.

 

**Example 1:**
    
    
    **Input:** intervals = [[1,3],[6,9]], newInterval = [2,5]
    **Output:** [[1,5],[6,9]]
    

**Example 2:**
    
    
    **Input:** intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
    **Output:** [[1,2],[3,10],[12,16]]
    **Explanation:** Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
    

 

**Constraints:**

  * `0 <= intervals.length <= 104`
  * `intervals[i].length == 2`
  * `0 <= starti <= endi <= 105`
  * `intervals` is sorted by `starti` in **ascending** order.
  * `newInterval.length == 2`
  * `0 <= start <= end <= 105`

## Solution

```python
class Solution(object):
    def insert(self, intervals, newInterval):
        intervals.append(newInterval)
        intervals.sort()

        res = [intervals[0]]

        for i in range(1, len(intervals)):
            if res[-1][1] >= intervals[i][0]:
                res[-1][1] = max(res[-1][1], intervals[i][1])
            else:
                res.append(intervals[i])

        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
