---
id: "143"
title: "Reorder List"
slug: "reorder-list"
difficulty: "Medium"
tags: ["Linked List", "Two Pointers", "Stack", "Recursion"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830335289"
---

## Problem

You are given the head of a singly linked-list. The list can be represented as:
    
    
    L0 -> L1 -> … -> Ln - 1 -> Ln
    

_Reorder the list to be on the following form:_
    
    
    L0 -> Ln -> L1 -> Ln - 1 -> L2 -> Ln - 2 -> …
    

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

**Example 1:**
    
    
    **Input:** head = [1,2,3,4]
    **Output:** [1,4,2,3]
    

**Example 2:**
    
    
    **Input:** head = [1,2,3,4,5]
    **Output:** [1,5,2,4,3]
    

 

**Constraints:**

  * The number of nodes in the list is in the range `[1, 5 * 104]`.
  * `1 <= Node.val <= 1000`

## Solution

```python
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        if not head or not head.next:
            return
        # Find middle
        slow, fast = head, head
        while fast and fast.next:
            slow, fast = slow.next, fast.next.next
        # Reverse second half
        prev, curr = None, slow.next
        slow.next = None
        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        # Merge alternating nodes
        first, second = head, prev
        while second:
            tmp1, tmp2 = first.next, second.next
            first.next = second
            second.next = tmp1
            first, second = tmp1, tmp2
        # Done; in-place modification
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
