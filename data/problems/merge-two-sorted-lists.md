---
id: "21"
title: "Merge Two Sorted Lists"
slug: "merge-two-sorted-lists"
difficulty: "Easy"
tags: ["Linked List", "Recursion"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830332812"
---

## Problem

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return _the head of the merged linked list_.

 

**Example 1:**
    
    
    **Input:** list1 = [1,2,4], list2 = [1,3,4]
    **Output:** [1,1,2,3,4,4]
    

**Example 2:**
    
    
    **Input:** list1 = [], list2 = []
    **Output:** []
    

**Example 3:**
    
    
    **Input:** list1 = [], list2 = [0]
    **Output:** [0]
    

 

**Constraints:**

  * The number of nodes in both lists is in the range `[0, 50]`.
  * `-100 <= Node.val <= 100`
  * Both `list1` and `list2` are sorted in **non-decreasing** order.

## Solution

```python
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        curr = dummy
        while list1 and list2:
            if list1.val < list2.val:
                curr.next = list1
                list1 = list1.next
            else:
                curr.next = list2
                list2 = list2.next
            curr = curr.next
        curr.next = list1 if list1 else list2
        return dummy.next
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
