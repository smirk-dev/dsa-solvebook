---
id: "1894"
title: "Merge Strings Alternately"
slug: "merge-strings-alternately"
difficulty: "Easy"
tags: ["Two Pointers", "String"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1823877071"
---

## Problem

You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return _the merged string._

 

**Example 1:**
    
    
    **Input:** word1 = "abc", word2 = "pqr"
    **Output:** "apbqcr"
    **Explanation:**  The merged string will be merged as so:
    word1:  a   b   c
    word2:    p   q   r
    merged: a p b q c r
    

**Example 2:**
    
    
    **Input:** word1 = "ab", word2 = "pqrs"
    **Output:** "apbqrs"
    **Explanation:**  Notice that as word2 is longer, "rs" is appended to the end.
    word1:  a   b 
    word2:    p   q   r   s
    merged: a p b q   r   s
    

**Example 3:**
    
    
    **Input:** word1 = "abcd", word2 = "pq"
    **Output:** "apbqcd"
    **Explanation:**  Notice that as word1 is longer, "cd" is appended to the end.
    word1:  a   b   c   d
    word2:    p   q 
    merged: a p b q c   d
    

 

**Constraints:**

  * `1 <= word1.length, word2.length <= 100`
  * `word1` and `word2` consist of lowercase English letters.

## Solution

```python
class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        result = []
        i = 0
        while i < len(word1) or i < len(word2):
            if i < len(word1):
                result.append(word1[i])
            if i < len(word2):
                result.append(word2[i])
            i += 1
        return ''.join(result)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
