---
id: "2413"
title: "Smallest Number in Infinite Set"
slug: "smallest-number-in-infinite-set"
difficulty: "Medium"
tags: ["Hash Table", "Design", "Heap (Priority Queue)", "Ordered Set"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1823995744"
---

## Problem

You have a set which contains all positive integers `[1, 2, 3, 4, 5, ...]`.

Implement the `SmallestInfiniteSet` class:

  * `SmallestInfiniteSet()` Initializes the **SmallestInfiniteSet** object to contain **all** positive integers.
  * `int popSmallest()` **Removes** and returns the smallest integer contained in the infinite set.
  * `void addBack(int num)` **Adds** a positive integer `num` back into the infinite set, if it is **not** already in the infinite set.



 

**Example 1:**
    
    
    **Input**
    ["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack", "popSmallest", "popSmallest", "popSmallest"]
    [[], [2], [], [], [], [1], [], [], []]
    **Output**
    [null, null, 1, 2, 3, null, 1, 4, 5]
    
    **Explanation**
    SmallestInfiniteSet smallestInfiniteSet = new SmallestInfiniteSet();
    smallestInfiniteSet.addBack(2);    // 2 is already in the set, so no change is made.
    smallestInfiniteSet.popSmallest(); // return 1, since 1 is the smallest number, and remove it from the set.
    smallestInfiniteSet.popSmallest(); // return 2, and remove it from the set.
    smallestInfiniteSet.popSmallest(); // return 3, and remove it from the set.
    smallestInfiniteSet.addBack(1);    // 1 is added back to the set.
    smallestInfiniteSet.popSmallest(); // return 1, since 1 was added back to the set and
                                       // is the smallest number, and remove it from the set.
    smallestInfiniteSet.popSmallest(); // return 4, and remove it from the set.
    smallestInfiniteSet.popSmallest(); // return 5, and remove it from the set.
    

 

**Constraints:**

  * `1 <= num <= 1000`
  * At most `1000` calls will be made **in total** to `popSmallest` and `addBack`.

## Solution

```python
class SmallestInfiniteSet:
    def __init__(self):
        import heapq
        self.current = 1
        self.added_back = []
        self.added_set = set()
    def popSmallest(self) -> int:
        import heapq
        if self.added_back:
            smallest = heapq.heappop(self.added_back)
            self.added_set.remove(smallest)
            return smallest
        else:
            smallest = self.current
            self.current += 1
            return smallest
    def addBack(self, num: int) -> None:
        import heapq
        if num < self.current and num not in self.added_set:
            heapq.heappush(self.added_back, num)
            self.added_set.add(num)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
