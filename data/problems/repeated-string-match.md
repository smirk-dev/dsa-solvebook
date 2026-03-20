---
id: "686"
title: "Repeated String Match"
slug: "repeated-string-match"
difficulty: "Medium"
tags: ["String", "String Matching"]
language: "python3"
date_solved: "2025-11-14"
status: "solved"
submission_id: "1829415286"
---

## Problem

Given two strings `a` and `b`, return _the minimum number of times you should repeat string_`a` _so that string_ `b` _is a substring of it_. If it is impossible for `b`​​​​​​ to be a substring of `a` after repeating it, return `-1`.

**Notice:** string `"abc"` repeated 0 times is `""`, repeated 1 time is `"abc"` and repeated 2 times is `"abcabc"`.

 

**Example 1:**
    
    
    **Input:** a = "abcd", b = "cdabcdab"
    **Output:** 3
    **Explanation:** We return 3 because by repeating a three times "ab**cdabcdab** cd", b is a substring of it.
    

**Example 2:**
    
    
    **Input:** a = "a", b = "aa"
    **Output:** 2
    

 

**Constraints:**

  * `1 <= a.length, b.length <= 104`
  * `a` and `b` consist of lowercase English letters.

## Solution

```python
class Solution:
    def repeatedStringMatch(self, a: str, b: str) -> int:
        # Calculate the minimum number of repeats needed
        count = -(-len(b) // len(a))  # Same as math.ceil(len(b)/len(a))
        for i in range(count, count + 2):
            if b in a * i:
                return i
        return -1
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
