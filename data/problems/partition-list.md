---
id: "86"
title: "Partition List"
slug: "partition-list"
difficulty: "Medium"
tags: ["Linked List", "Two Pointers"]
language: "python3"
date_solved: "2025-03-28"
status: "solved"
submission_id: "1588824125"
---

## Problem

Given the `head` of a linked list and a value `x`, partition it such that all nodes **less than** `x` come before nodes **greater than or equal** to `x`.

You should **preserve** the original relative order of the nodes in each of the two partitions.

 

**Example 1:**
    
    
    **Input:** head = [1,4,3,2,5,2], x = 3
    **Output:** [1,2,2,4,3,5]
    

**Example 2:**
    
    
    **Input:** head = [2,1], x = 2
    **Output:** [1,2]
    

 

**Constraints:**

  * The number of nodes in the list is in the range `[0, 200]`.
  * `-100 <= Node.val <= 100`
  * `-200 <= x <= 200`

## Solution

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:

        slist, blist = ListNode(), ListNode()
        small, big = slist, blist # dummy lists

        while head:
            if head.val < x:
                small.next = head
                small = small.next
            else:
                big.next = head
                big = big.next

            head = head.next

        small.next = blist.next
        big.next = None # prevent linked list circle

        return slist.next
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
