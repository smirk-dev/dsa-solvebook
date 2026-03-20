---
id: "812"
title: "Rotate String"
slug: "rotate-string"
difficulty: "Easy"
tags: ["String", "String Matching"]
language: "python3"
date_solved: "2025-11-14"
status: "solved"
submission_id: "1829415025"
---

## Problem

Given two strings `s` and `goal`, return `true` _if and only if_ `s` _can become_ `goal` _after some number of**shifts** on_ `s`.

A **shift** on `s` consists of moving the leftmost character of `s` to the rightmost position.

  * For example, if `s = "abcde"`, then it will be `"bcdea"` after one shift.



 

**Example 1:**
    
    
    **Input:** s = "abcde", goal = "cdeab"
    **Output:** true
    

**Example 2:**
    
    
    **Input:** s = "abcde", goal = "abced"
    **Output:** false
    

 

**Constraints:**

  * `1 <= s.length, goal.length <= 100`
  * `s` and `goal` consist of lowercase English letters.

## Solution

```python
class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
        # Check if goal is a substring of s + s (all possible rotations)
        return len(s) == len(goal) and goal in (s + s)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
