---
id: "352"
title: "Data Stream as Disjoint Intervals"
slug: "data-stream-as-disjoint-intervals"
difficulty: "Hard"
tags: ["Hash Table", "Binary Search", "Union-Find", "Design", "Data Stream", "Ordered Set"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830274952"
---

## Problem

Given a data stream input of non-negative integers `a1, a2, ..., an`, summarize the numbers seen so far as a list of disjoint intervals.

Implement the `SummaryRanges` class:

  * `SummaryRanges()` Initializes the object with an empty stream.
  * `void addNum(int value)` Adds the integer `value` to the stream.
  * `int[][] getIntervals()` Returns a summary of the integers in the stream currently as a list of disjoint intervals `[starti, endi]`. The answer should be sorted by `starti`.



 

**Example 1:**
    
    
    **Input**
    ["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"]
    [[], [1], [], [3], [], [7], [], [2], [], [6], []]
    **Output**
    [null, null, [[1, 1]], null, [[1, 1], [3, 3]], null, [[1, 1], [3, 3], [7, 7]], null, [[1, 3], [7, 7]], null, [[1, 3], [6, 7]]]
    
    **Explanation**
    SummaryRanges summaryRanges = new SummaryRanges();
    summaryRanges.addNum(1);      // arr = [1]
    summaryRanges.getIntervals(); // return [[1, 1]]
    summaryRanges.addNum(3);      // arr = [1, 3]
    summaryRanges.getIntervals(); // return [[1, 1], [3, 3]]
    summaryRanges.addNum(7);      // arr = [1, 3, 7]
    summaryRanges.getIntervals(); // return [[1, 1], [3, 3], [7, 7]]
    summaryRanges.addNum(2);      // arr = [1, 2, 3, 7]
    summaryRanges.getIntervals(); // return [[1, 3], [7, 7]]
    summaryRanges.addNum(6);      // arr = [1, 2, 3, 6, 7]
    summaryRanges.getIntervals(); // return [[1, 3], [6, 7]]
    

 

**Constraints:**

  * `0 <= value <= 104`
  * At most `3 * 104` calls will be made to `addNum` and `getIntervals`.
  * At most `102` calls will be made to `getIntervals`.



 

**Follow up:** What if there are lots of merges and the number of disjoint intervals is small compared to the size of the data stream?

## Solution

```python
from sortedcontainers import SortedDict

class SummaryRanges:
    def __init__(self):
        # Use SortedDict to maintain intervals sorted by start
        # Key: start of interval, Value: end of interval
        self.intervals = SortedDict()
    
    def addNum(self, value: int) -> None:
        # If value already in an interval, skip
        if self._in_interval(value):
            return
        
        # Find position where value would be inserted
        idx = self.intervals.bisect_left(value)
        
        # Check if we can merge with previous interval
        merge_prev = False
        if idx > 0:
            prev_start = self.intervals.keys()[idx - 1]
            prev_end = self.intervals[prev_start]
            if prev_end >= value - 1:
                merge_prev = True
        
        # Check if we can merge with next interval
        merge_next = False
        if idx < len(self.intervals):
            next_start = self.intervals.keys()[idx]
            if next_start <= value + 1:
                merge_next = True
        
        # Perform merging
        if merge_prev and merge_next:
            # Merge with both prev and next
            prev_start = self.intervals.keys()[idx - 1]
            next_start = self.intervals.keys()[idx]
            next_end = self.intervals[next_start]
            self.intervals[prev_start] = next_end
            del self.intervals[next_start]
        elif merge_prev:
            # Merge with previous only
            prev_start = self.intervals.keys()[idx - 1]
            self.intervals[prev_start] = max(self.intervals[prev_start], value)
        elif merge_next:
            # Merge with next only
            next_start = self.intervals.keys()[idx]
            next_end = self.intervals[next_start]
            del self.intervals[next_start]
            self.intervals[value] = next_end
        else:
            # Create new interval
            self.intervals[value] = value
    
    def _in_interval(self, value: int) -> bool:
        """Check if value is already in an existing interval"""
        idx = self.intervals.bisect_right(value)
        if idx == 0:
            return False
        start = self.intervals.keys()[idx - 1]
        end = self.intervals[start]
        return start <= value <= end
    
    def getIntervals(self) -> List[List[int]]:
        return [[start, end] for start, end in self.intervals.items()]


# Your SummaryRanges object will be instantiated and called as such:
# obj = SummaryRanges()
# obj.addNum(value)
# param_2 = obj.getIntervals()
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
