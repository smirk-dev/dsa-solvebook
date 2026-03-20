---
id: "224"
title: "Basic Calculator"
slug: "basic-calculator"
difficulty: "Hard"
tags: ["Math", "String", "Stack", "Recursion"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1825840601"
---

## Problem

Given a string `s` representing a valid expression, implement a basic calculator to evaluate it, and return _the result of the evaluation_.

**Note:** You are **not** allowed to use any built-in function which evaluates strings as mathematical expressions, such as `eval()`.

 

**Example 1:**
    
    
    **Input:** s = "1 + 1"
    **Output:** 2
    

**Example 2:**
    
    
    **Input:** s = " 2-1 + 2 "
    **Output:** 3
    

**Example 3:**
    
    
    **Input:** s = "(1+(4+5+2)-3)+(6+8)"
    **Output:** 23
    

 

**Constraints:**

  * `1 <= s.length <= 3 * 105`
  * `s` consists of digits, `'+'`, `'-'`, `'('`, `')'`, and `' '`.
  * `s` represents a valid expression.
  * `'+'` is **not** used as a unary operation (i.e., `"+1"` and `"+(2 + 3)"` is invalid).
  * `'-'` could be used as a unary operation (i.e., `"-1"` and `"-(2 + 3)"` is valid).
  * There will be no two consecutive operators in the input.
  * Every number and running calculation will fit in a signed 32-bit integer.

## Solution

```python
class Solution:
    def calculate(self, s: str) -> int:
        cur = res = 0
        sign = 1
        stack = []

        for char in s:
            if char.isdigit():
                cur = cur * 10 + int(char)
            
            elif char in ['+', '-']:
                res += sign * cur
                sign = 1 if char == '+' else -1
                cur = 0
            
            elif char == "(":
                stack.append(res)
                stack.append(sign)
                sign = 1
                res = 0
            
            elif char == ")":
                res += sign * cur
                res *= stack.pop()
                res += stack.pop()
                cur = 0
        
        return res + sign * cur
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
