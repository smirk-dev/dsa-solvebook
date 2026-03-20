---
id: "383"
title: "Ransom Note"
slug: "ransom-note"
difficulty: "Easy"
tags: ["Hash Table", "String", "Counting"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1825946539"
---

## Problem

Given two strings `ransomNote` and `magazine`, return `true` _if_`ransomNote` _can be constructed by using the letters from_`magazine` _and_`false` _otherwise_.

Each letter in `magazine` can only be used once in `ransomNote`.

 

**Example 1:**
    
    
    **Input:** ransomNote = "a", magazine = "b"
    **Output:** false
    

**Example 2:**
    
    
    **Input:** ransomNote = "aa", magazine = "ab"
    **Output:** false
    

**Example 3:**
    
    
    **Input:** ransomNote = "aa", magazine = "aab"
    **Output:** true
    

 

**Constraints:**

  * `1 <= ransomNote.length, magazine.length <= 105`
  * `ransomNote` and `magazine` consist of lowercase English letters.

## Solution

```python
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        maga_hash = {}

        for c in magazine:
            maga_hash[c] = 1 + maga_hash.get(c, 0)

        for c in ransomNote:
            if c not in maga_hash or maga_hash[c] <= 0:
                return False
            maga_hash[c] -= 1
        
        return True
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
