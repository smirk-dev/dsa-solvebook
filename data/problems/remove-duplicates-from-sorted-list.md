---
id: "83"
title: "Remove Duplicates from Sorted List"
slug: "remove-duplicates-from-sorted-list"
difficulty: "Easy"
tags: ["Linked List"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830318492"
---

## Problem

Given the `head` of a sorted linked list, _delete all duplicates such that each element appears only once_. Return _the linked list**sorted** as well_.

 

**Example 1:**
    
    
    **Input:** head = [1,1,2]
    **Output:** [1,2]
    

**Example 2:**
    
    
    **Input:** head = [1,1,2,3,3]
    **Output:** [1,2,3]
    

 

**Constraints:**

  * The number of nodes in the list is in the range `[0, 300]`.
  * `-100 <= Node.val <= 100`
  * The list is guaranteed to be **sorted** in ascending order.

## Solution

```python
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        current = head
        while current and current.next:
            if current.val == current.next.val:
                current.next = current.next.next  # Skip duplicate node
            else:
                current = current.next  # Move to next node
        return head
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
