---
id: "92"
title: "Reverse Linked List II"
slug: "reverse-linked-list-ii"
difficulty: "Medium"
tags: ["Linked List"]
language: "python3"
date_solved: "2025-03-30"
status: "solved"
submission_id: "1591291617"
---

## Problem

Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right`, and return _the reversed list_.

 

**Example 1:**
    
    
    **Input:** head = [1,2,3,4,5], left = 2, right = 4
    **Output:** [1,4,3,2,5]
    

**Example 2:**
    
    
    **Input:** head = [5], left = 1, right = 1
    **Output:** [5]
    

 

**Constraints:**

  * The number of nodes in the list is `n`.
  * `1 <= n <= 500`
  * `-500 <= Node.val <= 500`
  * `1 <= left <= right <= n`



 

**Follow up:** Could you do it in one pass?

## Solution

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:

        if not head or left == right:
            return head

        dummy = ListNode(0, head)
        prev = dummy

        for _ in range(left - 1):
            prev = prev.next

        cur = prev.next
        for _ in range(right - left):
            temp = cur.next
            cur.next = temp.next
            temp.next = prev.next
            prev.next = temp

        return dummy.next
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
