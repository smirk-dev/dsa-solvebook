---
id: "2470"
title: "Removing Stars From a String"
slug: "removing-stars-from-a-string"
difficulty: "Medium"
tags: ["String", "Stack", "Simulation"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1823954403"
---

## Problem

You are given a string `s`, which contains stars `*`.

In one operation, you can:

  * Choose a star in `s`.
  * Remove the closest **non-star** character to its **left** , as well as remove the star itself.



Return _the string after**all** stars have been removed_.

**Note:**

  * The input will be generated such that the operation is always possible.
  * It can be shown that the resulting string will always be unique.



 

**Example 1:**
    
    
    **Input:** s = "leet**cod*e"
    **Output:** "lecoe"
    **Explanation:** Performing the removals from left to right:
    - The closest character to the 1st star is 't' in "lee** _t_** **cod*e". s becomes "lee*cod*e".
    - The closest character to the 2nd star is 'e' in "le** _e_** *cod*e". s becomes "lecod*e".
    - The closest character to the 3rd star is 'd' in "leco** _d_** *e". s becomes "lecoe".
    There are no more stars, so we return "lecoe".

**Example 2:**
    
    
    **Input:** s = "erase*****"
    **Output:** ""
    **Explanation:** The entire string is removed, so we return an empty string.
    

 

**Constraints:**

  * `1 <= s.length <= 105`
  * `s` consists of lowercase English letters and stars `*`.
  * The operation above can be performed on `s`.

## Solution

```python
class Solution:
    def removeStars(self, s: str) -> str:
        stack = []
        for char in s:
            if char == '*':
                if stack:
                    stack.pop()
            else:
                stack.append(char)
        return ''.join(stack)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
