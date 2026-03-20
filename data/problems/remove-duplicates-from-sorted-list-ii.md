---
id: "82"
title: "Remove Duplicates from Sorted List II"
slug: "remove-duplicates-from-sorted-list-ii"
difficulty: "Medium"
tags: ["Linked List", "Two Pointers"]
language: "python3"
date_solved: "2025-03-27"
status: "solved"
submission_id: "1587887539"
---

## Problem

Given the `head` of a sorted linked list, _delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list_. Return _the linked list**sorted** as well_.

 

**Example 1:**
    
    
    **Input:** head = [1,2,3,3,4,4,5]
    **Output:** [1,2,5]
    

**Example 2:**
    
    
    **Input:** head = [1,1,1,2,3]
    **Output:** [2,3]
    

 

**Constraints:**

  * The number of nodes in the list is in the range `[0, 300]`.
  * `-100 <= Node.val <= 100`
  * The list is guaranteed to be **sorted** in ascending order.

## Solution

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        #Iterative T.C O(N) & S.C O(1)
        dummy=ListNode(-1)
        dummy.next=head
        prev,cur=dummy,head
        while cur:
            if cur.next and cur.next.val==cur.val:
                while cur.next and cur.next.val==cur.val:
                    cur=cur.next
                prev.next=cur.next
            else:
                prev=prev.next
            cur=cur.next
        return dummy.next
        #Recursion T.C O(N) & S.C O(N)
        if not head or not head.next:
            return head
        if head.val==head.next.val:
            while head.next and head.val==head.next.val:
                head=head.next
            return self.deleteDuplicates(head.next)
        else:
            head.next=self.deleteDuplicates(head.next)
            return head
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
