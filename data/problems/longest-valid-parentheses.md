---
id: "32"
title: "Longest Valid Parentheses"
slug: "longest-valid-parentheses"
difficulty: "Hard"
tags: ["String", "Dynamic Programming", "Stack"]
language: "python3"
date_solved: "2025-02-18"
status: "solved"
submission_id: "1547662817"
---

## Problem

Given a string containing just the characters `'('` and `')'`, return _the length of the longest valid (well-formed) parentheses_ _substring_.

 

**Example 1:**
    
    
    **Input:** s = "(()"
    **Output:** 2
    **Explanation:** The longest valid parentheses substring is "()".
    

**Example 2:**
    
    
    **Input:** s = ")()())"
    **Output:** 4
    **Explanation:** The longest valid parentheses substring is "()()".
    

**Example 3:**
    
    
    **Input:** s = ""
    **Output:** 0
    

 

**Constraints:**

  * `0 <= s.length <= 3 * 104`
  * `s[i]` is `'('`, or `')'`.

## Solution

```python
class Solution(object):
    def longestValidParentheses(self, s):
        stack = [-1]
        max_len = 0

        for i in range(len(s)):
            if s[i] == "(":
                stack.append(i)
            else:
                stack.pop()
                if len(stack) == 0:
                    stack.append(i)
                else:
                    max_len = max(max_len, i - stack[-1])
        
        return max_len
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
