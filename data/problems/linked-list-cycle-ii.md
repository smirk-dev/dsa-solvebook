---
id: "142"
title: "Linked List Cycle II"
slug: "linked-list-cycle-ii"
difficulty: "Medium"
tags: ["Hash Table", "Linked List", "Two Pointers"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830369802"
---

## Problem

Given the `head` of a linked list, return _the node where the cycle begins. If there is no cycle, return_`null`.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to (**0-indexed**). It is `-1` if there is no cycle. **Note that** `pos` **is not passed as a parameter**.

**Do not modify** the linked list.

 

**Example 1:**
    
    
    **Input:** head = [3,2,0,-4], pos = 1
    **Output:** tail connects to node index 1
    **Explanation:** There is a cycle in the linked list, where tail connects to the second node.
    

**Example 2:**
    
    
    **Input:** head = [1,2], pos = 0
    **Output:** tail connects to node index 0
    **Explanation:** There is a cycle in the linked list, where tail connects to the first node.
    

**Example 3:**
    
    
    **Input:** head = [1], pos = -1
    **Output:** no cycle
    **Explanation:** There is no cycle in the linked list.
    

 

**Constraints:**

  * The number of the nodes in the list is in the range `[0, 104]`.
  * `-105 <= Node.val <= 105`
  * `pos` is `-1` or a **valid index** in the linked-list.



 

**Follow up:** Can you solve it using `O(1)` (i.e. constant) memory?

## Solution

```python
class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow = fast = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

            if slow == fast:
                break
        else: return None

        fast = head

        while fast != slow:
            fast = fast.next
            slow = slow.next
        
        return slow
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
