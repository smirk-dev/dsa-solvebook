---
id: "715"
title: "Range Module"
slug: "range-module"
difficulty: "Hard"
tags: ["Design", "Segment Tree", "Ordered Set"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830301604"
---

## Problem

A Range Module is a module that tracks ranges of numbers. Design a data structure to track the ranges represented as **half-open intervals** and query about them.

A **half-open interval** `[left, right)` denotes all the real numbers `x` where `left <= x < right`.

Implement the `RangeModule` class:

  * `RangeModule()` Initializes the object of the data structure.
  * `void addRange(int left, int right)` Adds the **half-open interval** `[left, right)`, tracking every real number in that interval. Adding an interval that partially overlaps with currently tracked numbers should add any numbers in the interval `[left, right)` that are not already tracked.
  * `boolean queryRange(int left, int right)` Returns `true` if every real number in the interval `[left, right)` is currently being tracked, and `false` otherwise.
  * `void removeRange(int left, int right)` Stops tracking every real number currently being tracked in the **half-open interval** `[left, right)`.



 

**Example 1:**
    
    
    **Input**
    ["RangeModule", "addRange", "removeRange", "queryRange", "queryRange", "queryRange"]
    [[], [10, 20], [14, 16], [10, 14], [13, 15], [16, 17]]
    **Output**
    [null, null, null, true, false, true]
    
    **Explanation**
    RangeModule rangeModule = new RangeModule();
    rangeModule.addRange(10, 20);
    rangeModule.removeRange(14, 16);
    rangeModule.queryRange(10, 14); // return True,(Every number in [10, 14) is being tracked)
    rangeModule.queryRange(13, 15); // return False,(Numbers like 14, 14.03, 14.17 in [13, 15) are not being tracked)
    rangeModule.queryRange(16, 17); // return True, (The number 16 in [16, 17) is still being tracked, despite the remove operation)
    

 

**Constraints:**

  * `1 <= left < right <= 109`
  * At most `104` calls will be made to `addRange`, `queryRange`, and `removeRange`.

## Solution

```python
class RangeModule:
    def __init__(self):
        # List of disjoint intervals represented as [start, end)
        self.ranges = []

    def addRange(self, left: int, right: int) -> None:
        new_ranges = []
        i = 0
        
        # Add all ranges that end before left
        while i < len(self.ranges) and self.ranges[i][1] < left:
            new_ranges.append(self.ranges[i])
            i += 1
        
        # Merge overlapping ranges
        while i < len(self.ranges) and self.ranges[i][0] <= right:
            left = min(left, self.ranges[i][0])
            right = max(right, self.ranges[i][1])
            i += 1
        
        new_ranges.append([left, right])
        
        # Add all remaining ranges
        while i < len(self.ranges):
            new_ranges.append(self.ranges[i])
            i += 1
        
        self.ranges = new_ranges

    def queryRange(self, left: int, right: int) -> bool:
        # Binary search to find the range that might contain [left, right)
        lo, hi = 0, len(self.ranges)
        
        while lo < hi:
            mid = (lo + hi) // 2
            if self.ranges[mid][1] < left:
                lo = mid + 1
            else:
                hi = mid
        
        # Check if the range at position lo covers [left, right)
        if lo < len(self.ranges) and self.ranges[lo][0] <= left and right <= self.ranges[lo][1]:
            return True
        return False

    def removeRange(self, left: int, right: int) -> None:
        new_ranges = []
        i = 0
        
        # Add all ranges that end before left
        while i < len(self.ranges) and self.ranges[i][1] <= left:
            new_ranges.append(self.ranges[i])
            i += 1
        
        # Process ranges that overlap with [left, right)
        while i < len(self.ranges) and self.ranges[i][0] < right:
            # If range starts before left, keep the part before left
            if self.ranges[i][0] < left:
                new_ranges.append([self.ranges[i][0], left])
            
            # If range ends after right, keep the part after right
            if self.ranges[i][1] > right:
                new_ranges.append([right, self.ranges[i][1]])
            
            i += 1
        
        # Add remaining ranges
        while i < len(self.ranges):
            new_ranges.append(self.ranges[i])
            i += 1
        
        self.ranges = new_ranges
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
