---
id: "234"
title: "Palindrome Linked List"
slug: "palindrome-linked-list"
difficulty: "Easy"
tags: ["Linked List", "Two Pointers", "Stack", "Recursion"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830370241"
---

## Problem

Given the `head` of a singly linked list, return `true` _if it is a_ _palindrome_ _or_`false` _otherwise_.

 

**Example 1:**
    
    
    **Input:** head = [1,2,2,1]
    **Output:** true
    

**Example 2:**
    
    
    **Input:** head = [1,2]
    **Output:** false
    

 

**Constraints:**

  * The number of nodes in the list is in the range `[1, 105]`.
  * `0 <= Node.val <= 9`



 

**Follow up:** Could you do it in `O(n)` time and `O(1)` space?

## Solution

```python
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        arr = []

        while head:
            arr.append(head.val)
            head = head.next
        
        left = 0
        right = len(arr) - 1

        while left < right:
            if arr[left] != arr[right]:
                return False
            left += 1
            right -= 1
        
        return True
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
