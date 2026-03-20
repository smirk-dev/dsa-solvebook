---
id: "24"
title: "Swap Nodes in Pairs"
slug: "swap-nodes-in-pairs"
difficulty: "Medium"
tags: ["Linked List", "Recursion"]
language: "python3"
date_solved: "2025-02-17"
status: "solved"
submission_id: "1546253079"
---

## Problem

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

**Example 1:**

**Input:** head = [1,2,3,4]

**Output:** [2,1,4,3]

**Explanation:**

**Example 2:**

**Input:** head = []

**Output:** []

**Example 3:**

**Input:** head = [1]

**Output:** [1]

**Example 4:**

**Input:** head = [1,2,3]

**Output:** [2,1,3]

 

**Constraints:**

  * The number of nodes in the list is in the range `[0, 100]`.
  * `0 <= Node.val <= 100`

## Solution

```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def swapPairs(self, head):
        dummy = ListNode(0, head)
        prev, cur = dummy, head

        while cur and cur.next:
            npn = cur.next.next
            second = cur.next

            second.next = cur
            cur.next = npn
            prev.next = second

            prev = cur
            cur = npn
        
        return dummy.next
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
