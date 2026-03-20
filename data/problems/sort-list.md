---
id: "148"
title: "Sort List"
slug: "sort-list"
difficulty: "Medium"
tags: ["Linked List", "Two Pointers", "Divide and Conquer", "Sorting", "Merge Sort"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1826049545"
---

## Problem

Given the `head` of a linked list, return _the list after sorting it in**ascending order**_.

 

**Example 1:**
    
    
    **Input:** head = [4,2,1,3]
    **Output:** [1,2,3,4]
    

**Example 2:**
    
    
    **Input:** head = [-1,5,3,4,0]
    **Output:** [-1,0,3,4,5]
    

**Example 3:**
    
    
    **Input:** head = []
    **Output:** []
    

 

**Constraints:**

  * The number of nodes in the list is in the range `[0, 5 * 104]`.
  * `-105 <= Node.val <= 105`



 

**Follow up:** Can you sort the linked list in `O(n logn)` time and `O(1)` memory (i.e. constant space)?

## Solution

```python
class Solution(object):
    def sortList(self, head):
        if not head or not head.next:
            return head
        slow, fast = head, head
        prev = None
        while fast and fast.next:
            prev = slow
            slow = slow.next
            fast = fast.next.next
        prev.next = None
        left = self.sortList(head)
        right = self.sortList(slow)
        return self.merge(left, right)

    def merge(self, l1, l2):
        dummy = ListNode(0)
        cur = dummy
        while l1 and l2:
            if l1.val < l2.val:
                cur.next = l1
                l1 = l1.next
            else:
                cur.next = l2
                l2 = l2.next
            cur = cur.next
        if l1: cur.next = l1
        if l2: cur.next = l2
        return dummy.next
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
