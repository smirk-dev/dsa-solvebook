---
id: "728"
title: "Self Dividing Numbers"
slug: "self-dividing-numbers"
difficulty: "Easy"
tags: ["Math"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830307116"
---

## Problem

A **self-dividing number** is a number that is divisible by every digit it contains.

  * For example, `128` is **a self-dividing number** because `128 % 1 == 0`, `128 % 2 == 0`, and `128 % 8 == 0`.



A **self-dividing number** is not allowed to contain the digit zero.

Given two integers `left` and `right`, return _a list of all the**self-dividing numbers** in the range_ `[left, right]` (both **inclusive**).

 

**Example 1:**
    
    
    **Input:** left = 1, right = 22
    **Output:** [1,2,3,4,5,6,7,8,9,11,12,15,22]
    

**Example 2:**
    
    
    **Input:** left = 47, right = 85
    **Output:** [48,55,66,77]
    

 

**Constraints:**

  * `1 <= left <= right <= 104`

## Solution

```python
class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        result = []
        
        # Check each number in the range
        for num in range(left, right + 1):
            if self.isSelfDividing(num):
                result.append(num)
        
        return result
    
    def isSelfDividing(self, num: int) -> bool:
        # Convert number to string to extract digits
        for digit_char in str(num):
            digit = int(digit_char)
            
            # Self-dividing numbers cannot contain 0
            if digit == 0:
                return False
            
            # Check if the digit divides the number
            if num % digit != 0:
                return False
        
        return True
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
