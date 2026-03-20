---
id: "316"
title: "Remove Duplicate Letters"
slug: "remove-duplicate-letters"
difficulty: "Medium"
tags: ["String", "Stack", "Greedy", "Monotonic Stack"]
language: "python3"
date_solved: "2025-11-14"
status: "solved"
submission_id: "1829419812"
---

## Problem

Given a string `s`, remove duplicate letters so that every letter appears once and only once. You must make sure your result is **the smallest in lexicographical order** among all possible results.

 

**Example 1:**
    
    
    **Input:** s = "bcabc"
    **Output:** "abc"
    

**Example 2:**
    
    
    **Input:** s = "cbacdcbc"
    **Output:** "acdb"
    

 

**Constraints:**

  * `1 <= s.length <= 104`
  * `s` consists of lowercase English letters.



 

**Note:** This question is the same as 1081: <https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/>

## Solution

```python
class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        # Count the frequency of each character
        count = {}
        for char in s:
            count[char] = count.get(char, 0) + 1
        
        # Track which characters are in the result
        in_stack = set()
        stack = []
        
        for char in s:
            # Decrease the count for current character
            count[char] -= 1
            
            # If character already in result, skip it
            if char in in_stack:
                continue
            
            # Remove characters from stack if:
            # 1. Current char is smaller (lexicographically)
            # 2. The character in stack appears later in the string
            while stack and stack[-1] > char and count[stack[-1]] > 0:
                removed = stack.pop()
                in_stack.remove(removed)
            
            # Add current character to result
            stack.append(char)
            in_stack.add(char)
        
        return ''.join(stack)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
