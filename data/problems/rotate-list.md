---
id: "61"
title: "Rotate List"
slug: "rotate-list"
difficulty: "Medium"
tags: ["Linked List", "Two Pointers"]
language: "python3"
date_solved: "2025-02-25"
status: "solved"
submission_id: "1554710243"
---

## Problem

Given the `head` of a linked list, rotate the list to the right by `k` places.

 

**Example 1:**
    
    
    **Input:** head = [1,2,3,4,5], k = 2
    **Output:** [4,5,1,2,3]
    

**Example 2:**
    
    
    **Input:** head = [0,1,2], k = 4
    **Output:** [2,0,1]
    

 

**Constraints:**

  * The number of nodes in the list is in the range `[0, 500]`.
  * `-100 <= Node.val <= 100`
  * `0 <= k <= 2 * 109`

## Solution

```python
class Solution:
    def rotateRight(self, head, k):
        if not head or not head.next or k == 0:
            return head

        # Step 1: Find the length of the list and the tail node
        length = 1
        tail = head
        while tail.next:
            length += 1
            tail = tail.next

        # Step 2: Handle cases where k >= length
        k = k % length
        if k == 0:
            return head

        # Step 3: Find the breaking point
        breakPoint = length - k
        current = head
        for _ in range(breakPoint - 1):
            current = current.next

        # Step 4: Rotate the list
        new_head = current.next
        current.next = None
        tail.next = head

        return new_head
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
