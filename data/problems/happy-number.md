---
id: "202"
title: "Happy Number"
slug: "happy-number"
difficulty: "Easy"
tags: ["Hash Table", "Math", "Two Pointers"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1825945779"
---

## Problem

Write an algorithm to determine if a number `n` is happy.

A **happy number** is a number defined by the following process:

  * Starting with any positive integer, replace the number by the sum of the squares of its digits.
  * Repeat the process until the number equals 1 (where it will stay), or it **loops endlessly in a cycle** which does not include 1.
  * Those numbers for which this process **ends in 1** are happy.



Return `true` _if_ `n` _is a happy number, and_ `false` _if not_.

 

**Example 1:**
    
    
    **Input:** n = 19
    **Output:** true
    **Explanation:**
    12 + 92 = 82
    82 + 22 = 68
    62 + 82 = 100
    12 + 02 + 02 = 1
    

**Example 2:**
    
    
    **Input:** n = 2
    **Output:** false
    

 

**Constraints:**

  * `1 <= n <= 231 - 1`

## Solution

```python
class Solution:
    def isHappy(self, n: int) -> bool:    
        visit = set()
        
        def get_next_number(n):    
            output = 0
            
            while n:
                digit = n % 10
                output += digit ** 2
                n = n // 10
            
            return output

        while n not in visit:
            visit.add(n)
            n = get_next_number(n)
            if n == 1:
                return True
        
        return False
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
