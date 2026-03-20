---
id: "1072"
title: "Next Greater Node In Linked List"
slug: "next-greater-node-in-linked-list"
difficulty: "Medium"
tags: ["Array", "Linked List", "Stack", "Monotonic Stack"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830323321"
---

## Problem

You are given the `head` of a linked list with `n` nodes.

For each node in the list, find the value of the **next greater node**. That is, for each node, find the value of the first node that is next to it and has a **strictly larger** value than it.

Return an integer array `answer` where `answer[i]` is the value of the next greater node of the `ith` node (**1-indexed**). If the `ith` node does not have a next greater node, set `answer[i] = 0`.

 

**Example 1:**
    
    
    **Input:** head = [2,1,5]
    **Output:** [5,5,0]
    

**Example 2:**
    
    
    **Input:** head = [2,7,4,3,5]
    **Output:** [7,0,5,5,0]
    

 

**Constraints:**

  * The number of nodes in the list is `n`.
  * `1 <= n <= 104`
  * `1 <= Node.val <= 109`

## Solution

```python
class Solution:
    def nextLargerNodes(self, head: Optional[ListNode]) -> List[int]:
        # Convert linked list to array
        vals = []
        while head:
            vals.append(head.val)
            head = head.next
        res = [0] * len(vals)
        stack = []
        for i, v in enumerate(vals):
            while stack and v > vals[stack[-1]]:
                res[stack.pop()] = v
            stack.append(i)
        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
