---
id: "56"
title: "Merge Intervals"
slug: "merge-intervals"
difficulty: "Medium"
tags: ["Array", "Sorting"]
language: "python3"
date_solved: "2025-03-08"
status: "solved"
submission_id: "1234567894"
---

## Problem

Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*.

**Example 1:**
```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
```

**Example 2:**
```
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```

**Constraints:**
- `1 <= intervals.length <= 10^4`
- `intervals[i].length == 2`
- `0 <= starti <= endi <= 10^4`

## Solution

```python
class Solution:
    def merge(self, intervals: list[list[int]]) -> list[list[int]]:
        intervals.sort(key=lambda x: x[0])
        merged = [intervals[0]]

        for start, end in intervals[1:]:
            if start <= merged[-1][1]:
                merged[-1][1] = max(merged[-1][1], end)
            else:
                merged.append([start, end])

        return merged
```

## Editorial

Sort by start time first — this ensures any overlapping interval with the last merged one will appear immediately after it. Then a single linear pass suffices: if the current interval's start is ≤ the last merged interval's end, they overlap → extend the end. Otherwise, push a new interval.

`max(merged[-1][1], end)` handles the containment case `[1,10], [2,5]` correctly (don't shrink the end).

O(n log n) time (dominated by sort), O(n) space for output.
