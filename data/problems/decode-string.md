---
id: "394"
title: "Decode String"
slug: "decode-string"
difficulty: "Medium"
tags: ["String", "Stack", "Recursion"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830333290"
---

## Problem

Given an encoded string, return its decoded string.

The encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times. Note that `k` is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, `k`. For example, there will not be input like `3a` or `2[4]`.

The test cases are generated so that the length of the output will never exceed `105`.

 

**Example 1:**
    
    
    **Input:** s = "3[a]2[bc]"
    **Output:** "aaabcbc"
    

**Example 2:**
    
    
    **Input:** s = "3[a2[c]]"
    **Output:** "accaccacc"
    

**Example 3:**
    
    
    **Input:** s = "2[abc]3[cd]ef"
    **Output:** "abcabccdcdcdef"
    

 

**Constraints:**

  * `1 <= s.length <= 30`
  * `s` consists of lowercase English letters, digits, and square brackets `'[]'`.
  * `s` is guaranteed to be **a valid** input.
  * All the integers in `s` are in the range `[1, 300]`.

## Solution

```python
class Solution:
    def decodeString(self, s: str) -> str:
        stack = []
        curr_str = ""
        num = 0
        for char in s:
            if char.isdigit():
                num = num * 10 + int(char)
            elif char == "[":
                stack.append((curr_str, num))
                curr_str, num = "", 0
            elif char == "]":
                last_str, k = stack.pop()
                curr_str = last_str + curr_str * k
            else:
                curr_str += char
        return curr_str
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
