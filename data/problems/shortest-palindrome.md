---
id: "214"
title: "Shortest Palindrome"
slug: "shortest-palindrome"
difficulty: "Hard"
tags: ["String", "Rolling Hash", "String Matching", "Hash Function"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830331972"
---

## Problem

You are given a string `s`. You can convert `s` to a palindrome by adding characters in front of it.

Return _the shortest palindrome you can find by performing this transformation_.

 

**Example 1:**
    
    
    **Input:** s = "aacecaaa"
    **Output:** "aaacecaaa"
    

**Example 2:**
    
    
    **Input:** s = "abcd"
    **Output:** "dcbabcd"
    

 

**Constraints:**

  * `0 <= s.length <= 5 * 104`
  * `s` consists of lowercase English letters only.

## Solution

```python
class Solution:
    def shortestPalindrome(self, s: str) -> str:
        rev = s[::-1]
        concat = s + "#" + rev
        lps = [0] * len(concat)
        for i in range(1, len(concat)):
            j = lps[i - 1]
            while j > 0 and concat[i] != concat[j]:
                j = lps[j - 1]
            if concat[i] == concat[j]:
                j += 1
            lps[i] = j
        add = rev[:len(s) - lps[-1]]
        return add + s
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
