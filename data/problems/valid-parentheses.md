---
id: "20"
title: "Valid Parentheses"
slug: "valid-parentheses"
difficulty: "Easy"
tags: ["String", "Stack"]
language: "python3"
date_solved: "2025-03-02"
status: "solved"
submission_id: "1234567891"
---

## Problem

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

**Example 1:**
```
Input: s = "()"
Output: true
```

**Example 2:**
```
Input: s = "()[]{}"
Output: true
```

**Example 3:**
```
Input: s = "(]"
Output: false
```

**Constraints:**
- `1 <= s.length <= 10^4`
- `s` consists of parentheses only `'()[]{}'`.

## Solution

```python
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {')': '(', '}': '{', ']': '['}

        for ch in s:
            if ch in mapping:
                top = stack.pop() if stack else '#'
                if mapping[ch] != top:
                    return False
            else:
                stack.append(ch)

        return not stack
```

## Editorial

The stack is the natural data structure here: push every opening bracket, and when a closing bracket appears, the top of the stack must be its matching opener.

Key edge case: an empty stack when we encounter a closer — guard with a sentinel `'#'` so `mapping[ch] != top` still fires correctly without an IndexError.

Final check: `not stack` handles unmatched openers left over (e.g. `"(("`).
