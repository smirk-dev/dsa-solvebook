---
id: "295"
title: "Find Median from Data Stream"
slug: "find-median-from-data-stream"
difficulty: "Hard"
tags: ["Two Pointers", "Design", "Sorting", "Heap (Priority Queue)", "Data Stream"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1826046805"
---

## Problem

The **median** is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

  * For example, for `arr = [2,3,4]`, the median is `3`.
  * For example, for `arr = [2,3]`, the median is `(2 + 3) / 2 = 2.5`.



Implement the MedianFinder class:

  * `MedianFinder()` initializes the `MedianFinder` object.
  * `void addNum(int num)` adds the integer `num` from the data stream to the data structure.
  * `double findMedian()` returns the median of all elements so far. Answers within `10-5` of the actual answer will be accepted.



 

**Example 1:**
    
    
    **Input**
    ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
    [[], [1], [2], [], [3], []]
    **Output**
    [null, null, null, 1.5, null, 2.0]
    
    **Explanation**
    MedianFinder medianFinder = new MedianFinder();
    medianFinder.addNum(1);    // arr = [1]
    medianFinder.addNum(2);    // arr = [1, 2]
    medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
    medianFinder.addNum(3);    // arr[1, 2, 3]
    medianFinder.findMedian(); // return 2.0
    

 

**Constraints:**

  * `-105 <= num <= 105`
  * There will be at least one element in the data structure before calling `findMedian`.
  * At most `5 * 104` calls will be made to `addNum` and `findMedian`.



 

**Follow up:**

  * If all integer numbers from the stream are in the range `[0, 100]`, how would you optimize your solution?
  * If `99%` of all integer numbers from the stream are in the range `[0, 100]`, how would you optimize your solution?

## Solution

```python
import heapq

class MedianFinder:
    def __init__(self):
        self.lowerHalf = []  # max-heap (store negatives)
        self.upperHalf = []  # min-heap

    def addNum(self, num: int) -> None:
        heapq.heappush(self.lowerHalf, -num)

        # Balance largest of lowerHalf into upperHalf
        heapq.heappush(self.upperHalf, -heapq.heappop(self.lowerHalf))

        # Maintain size property
        if len(self.upperHalf) > len(self.lowerHalf):
            heapq.heappush(self.lowerHalf, -heapq.heappop(self.upperHalf))

    def findMedian(self) -> float:
        if len(self.lowerHalf) > len(self.upperHalf):
            return -self.lowerHalf[0]
        return (-self.lowerHalf[0] + self.upperHalf[0]) / 2.0
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
