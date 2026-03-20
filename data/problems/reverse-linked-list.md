---
id: "206"
title: "Reverse Linked List"
slug: "reverse-linked-list"
difficulty: "Easy"
tags: ["Linked List", "Recursion"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1823965794"
---

## Problem

Given the `head` of a singly linked list, reverse the list, and return _the reversed list_.

 

**Example 1:**
    
    
    **Input:** head = [1,2,3,4,5]
    **Output:** [5,4,3,2,1]
    

**Example 2:**
    
    
    **Input:** head = [1,2]
    **Output:** [2,1]
    

**Example 3:**
    
    
    **Input:** head = []
    **Output:** []
    

 

**Constraints:**

  * The number of nodes in the list is the range `[0, 5000]`.
  * `-5000 <= Node.val <= 5000`



 

**Follow up:** A linked list can be reversed either iteratively or recursively. Could you implement both?

## Solution

```python
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        current = head
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        return prev
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
