---
id: "147"
title: "Insertion Sort List"
slug: "insertion-sort-list"
difficulty: "Medium"
tags: ["Linked List", "Sorting"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830326401"
---

## Problem

Given the `head` of a singly linked list, sort the list using **insertion sort** , and return _the sorted list 's head_.

The steps of the **insertion sort** algorithm:

  1. Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
  2. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
  3. It repeats until no input elements remain.



The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.

 

**Example 1:**
    
    
    **Input:** head = [4,2,1,3]
    **Output:** [1,2,3,4]
    

**Example 2:**
    
    
    **Input:** head = [-1,5,3,4,0]
    **Output:** [-1,0,3,4,5]
    

 

**Constraints:**

  * The number of nodes in the list is in the range `[1, 5000]`.
  * `-5000 <= Node.val <= 5000`

## Solution

```python
class Solution:
    def insertionSortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        curr = head
        while curr:
            prev = dummy
            # Find insertion position
            while prev.next and prev.next.val < curr.val:
                prev = prev.next
            next_temp = curr.next
            curr.next = prev.next
            prev.next = curr
            curr = next_temp
        return dummy.next
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
