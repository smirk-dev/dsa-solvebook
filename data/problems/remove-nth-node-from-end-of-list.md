---
id: "19"
title: "Remove Nth Node From End of List"
slug: "remove-nth-node-from-end-of-list"
difficulty: "Medium"
tags: ["Linked List", "Two Pointers"]
language: "python3"
date_solved: "2025-02-17"
status: "solved"
submission_id: "1546191817"
---

## Problem

Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.

 

**Example 1:**
    
    
    **Input:** head = [1,2,3,4,5], n = 2
    **Output:** [1,2,3,5]
    

**Example 2:**
    
    
    **Input:** head = [1], n = 1
    **Output:** []
    

**Example 3:**
    
    
    **Input:** head = [1,2], n = 1
    **Output:** [1]
    

 

**Constraints:**

  * The number of nodes in the list is `sz`.
  * `1 <= sz <= 30`
  * `0 <= Node.val <= 100`
  * `1 <= n <= sz`



 

**Follow up:** Could you do this in one pass?

## Solution

```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def removeNthFromEnd(self, head, n):
        res = ListNode(0, head)
        dummy = res

        for _ in range(n):
            head = head.next
        
        while head:
            head = head.next
            dummy = dummy.next
        
        dummy.next = dummy.next.next

        return res.next
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
