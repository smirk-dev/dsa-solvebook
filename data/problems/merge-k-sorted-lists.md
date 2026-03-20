---
id: "23"
title: "Merge k Sorted Lists"
slug: "merge-k-sorted-lists"
difficulty: "Hard"
tags: ["Linked List", "Divide and Conquer", "Heap (Priority Queue)", "Merge Sort"]
language: "python3"
date_solved: "2026-03-14"
status: "solved"
submission_id: "1947697847"
---

## Problem

You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

_Merge all the linked-lists into one sorted linked-list and return it._

 

**Example 1:**
    
    
    **Input:** lists = [[1,4,5],[1,3,4],[2,6]]
    **Output:** [1,1,2,3,4,4,5,6]
    **Explanation:** The linked-lists are:
    [
      1->4->5,
      1->3->4,
      2->6
    ]
    merging them into one sorted linked list:
    1->1->2->3->4->4->5->6
    

**Example 2:**
    
    
    **Input:** lists = []
    **Output:** []
    

**Example 3:**
    
    
    **Input:** lists = [[]]
    **Output:** []
    

 

**Constraints:**

  * `k == lists.length`
  * `0 <= k <= 104`
  * `0 <= lists[i].length <= 500`
  * `-104 <= lists[i][j] <= 104`
  * `lists[i]` is sorted in **ascending order**.
  * The sum of `lists[i].length` will not exceed `104`.

## Solution

```python
import heapq

class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        heap = []
        for idx, node in enumerate(lists):
            if node:
                heapq.heappush(heap, (node.val, idx, node))
        dummy = ListNode(0)
        curr = dummy
        while heap:
            val, idx, node = heapq.heappop(heap)
            curr.next = node
            curr = curr.next
            if node.next:
                heapq.heappush(heap, (node.next.val, idx, node.next))
        return dummy.next
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
