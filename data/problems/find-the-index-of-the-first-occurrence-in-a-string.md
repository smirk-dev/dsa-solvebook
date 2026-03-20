---
id: "28"
title: "Find the Index of the First Occurrence in a String"
slug: "find-the-index-of-the-first-occurrence-in-a-string"
difficulty: "Easy"
tags: ["Two Pointers", "String", "String Matching"]
language: "python3"
date_solved: "2025-02-17"
status: "solved"
submission_id: "1546261664"
---

## Problem

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

 

**Example 1:**
    
    
    **Input:** haystack = "sadbutsad", needle = "sad"
    **Output:** 0
    **Explanation:** "sad" occurs at index 0 and 6.
    The first occurrence is at index 0, so we return 0.
    

**Example 2:**
    
    
    **Input:** haystack = "leetcode", needle = "leeto"
    **Output:** -1
    **Explanation:** "leeto" did not occur in "leetcode", so we return -1.
    

 

**Constraints:**

  * `1 <= haystack.length, needle.length <= 104`
  * `haystack` and `needle` consist of only lowercase English characters.

## Solution

```python
class Solution(object):
    def strStr(self, haystack, needle):
        for i in range(len(haystack) - len(needle) + 1):
            if haystack[i:i+len(needle)] == needle:
                return i
        return -1
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
