---
id: "131"
title: "Palindrome Partitioning"
slug: "palindrome-partitioning"
difficulty: "Medium"
tags: ["String", "Dynamic Programming", "Backtracking"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830368423"
---

## Problem

Given a string `s`, partition `s` such that every substring of the partition is a **palindrome**. Return _all possible palindrome partitioning of_`s`.

 

**Example 1:**
    
    
    **Input:** s = "aab"
    **Output:** [["a","a","b"],["aa","b"]]
    

**Example 2:**
    
    
    **Input:** s = "a"
    **Output:** [["a"]]
    

 

**Constraints:**

  * `1 <= s.length <= 16`
  * `s` contains only lowercase English letters.

## Solution

```python
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        def is_palindrome(sub):
            return sub == sub[::-1]

        def backtrack(start, path):
            if start == len(s):
                result.append(path[:])
                return
            for end in range(start + 1, len(s) + 1):
                if is_palindrome(s[start:end]):
                    backtrack(end, path + [s[start:end]])

        result = []
        backtrack(0, [])
        return result
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
