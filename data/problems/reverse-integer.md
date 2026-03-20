---
id: "7"
title: "Reverse Integer"
slug: "reverse-integer"
difficulty: "Medium"
tags: ["Math"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830305557"
---

## Problem

Given a signed 32-bit integer `x`, return `x` _with its digits reversed_. If reversing `x` causes the value to go outside the signed 32-bit integer range `[-231, 231 - 1]`, then return `0`.

**Assume the environment does not allow you to store 64-bit integers (signed or unsigned).**

 

**Example 1:**
    
    
    **Input:** x = 123
    **Output:** 321
    

**Example 2:**
    
    
    **Input:** x = -123
    **Output:** -321
    

**Example 3:**
    
    
    **Input:** x = 120
    **Output:** 21
    

 

**Constraints:**

  * `-231 <= x <= 231 - 1`

## Solution

```python
class Solution:
    def reverse(self, x: int) -> int:
        # 32-bit integer limits
        INT_MIN = -2**31
        INT_MAX = 2**31 - 1
        
        # Handle sign
        sign = -1 if x < 0 else 1
        x = abs(x)
        
        # Reverse the digits
        reversed_num = 0
        while x > 0:
            digit = x % 10
            
            # Check for overflow before adding the digit
            # If reversed_num > INT_MAX // 10, adding more digits will overflow
            # If reversed_num == INT_MAX // 10 and digit > 7, it will overflow
            if reversed_num > INT_MAX // 10 or (reversed_num == INT_MAX // 10 and digit > 7):
                return 0
            
            reversed_num = reversed_num * 10 + digit
            x //= 10
        
        # Apply the sign and return
        result = sign * reversed_num
        
        # Final check (shouldn't be needed if overflow check is correct)
        if result < INT_MIN or result > INT_MAX:
            return 0
        
        return result
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
