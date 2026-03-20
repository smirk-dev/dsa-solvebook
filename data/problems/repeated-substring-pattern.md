---
id: "459"
title: "Repeated Substring Pattern"
slug: "repeated-substring-pattern"
difficulty: "Easy"
tags: ["String", "String Matching"]
language: "python3"
date_solved: "2025-11-14"
status: "solved"
submission_id: "1829414742"
---

## Problem

Given a string `s`, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

 

**Example 1:**
    
    
    **Input:** s = "abab"
    **Output:** true
    **Explanation:** It is the substring "ab" twice.
    

**Example 2:**
    
    
    **Input:** s = "aba"
    **Output:** false
    

**Example 3:**
    
    
    **Input:** s = "abcabcabcabc"
    **Output:** true
    **Explanation:** It is the substring "abc" four times or the substring "abcabc" twice.
    

 

**Constraints:**

  * `1 <= s.length <= 104`
  * `s` consists of lowercase English letters.

## Solution

```python
class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        # Double the string, remove first and last char, and check if s exists in it
        return s in (s + s)[1:-1]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
