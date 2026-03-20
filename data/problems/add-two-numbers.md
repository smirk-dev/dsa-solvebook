---
id: "2"
title: "Add Two Numbers"
slug: "add-two-numbers"
difficulty: "Medium"
tags: ["Linked List", "Math", "Recursion"]
language: "python3"
date_solved: "2025-03-28"
status: "solved"
submission_id: "1588897563"
---

## Problem

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order** , and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

**Example 1:**
    
    
    **Input:** l1 = [2,4,3], l2 = [5,6,4]
    **Output:** [7,0,8]
    **Explanation:** 342 + 465 = 807.
    

**Example 2:**
    
    
    **Input:** l1 = [0], l2 = [0]
    **Output:** [0]
    

**Example 3:**
    
    
    **Input:** l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    **Output:** [8,9,9,9,0,0,0,1]
    

 

**Constraints:**

  * The number of nodes in each linked list is in the range `[1, 100]`.
  * `0 <= Node.val <= 9`
  * It is guaranteed that the list represents a number that does not have leading zeros.

## Solution

```python
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        ans = ListNode()
        currentNode = ans
        carry = 0
        while l1 or l2:
            value = carry
            carry = 0
            if l1:
                value += l1.val
            if l2:
                value += l2.val
            carry = value // 10
            value = value % 10
            currentNode.next = ListNode(value)
            currentNode = currentNode.next
            if l1:
                l1 = l1.next
            if l2:
                l2 = l2.next
        if carry > 0:
            currentNode.next = ListNode(carry)
        return ans.next
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
