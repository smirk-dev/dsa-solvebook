---
id: "290"
title: "Word Pattern"
slug: "word-pattern"
difficulty: "Easy"
tags: ["Hash Table", "String"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1825946153"
---

## Problem

Given a `pattern` and a string `s`, find if `s` follows the same pattern.

Here **follow** means a full match, such that there is a bijection between a letter in `pattern` and a **non-empty** word in `s`. Specifically:

  * Each letter in `pattern` maps to **exactly** one unique word in `s`.
  * Each unique word in `s` maps to **exactly** one letter in `pattern`.
  * No two letters map to the same word, and no two words map to the same letter.



 

**Example 1:**

**Input:** pattern = "abba", s = "dog cat cat dog"

**Output:** true

**Explanation:**

The bijection can be established as:

  * `'a'` maps to `"dog"`.
  * `'b'` maps to `"cat"`.



**Example 2:**

**Input:** pattern = "abba", s = "dog cat cat fish"

**Output:** false

**Example 3:**

**Input:** pattern = "aaaa", s = "dog cat cat dog"

**Output:** false

 

**Constraints:**

  * `1 <= pattern.length <= 300`
  * `pattern` contains only lower-case English letters.
  * `1 <= s.length <= 3000`
  * `s` contains only lowercase English letters and spaces `' '`.
  * `s` **does not contain** any leading or trailing spaces.
  * All the words in `s` are separated by a **single space**.

## Solution

```python
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        words = s.split(" ")
        if len(pattern) != len(words):
            return False
        
        seen = {}

        for p, w in zip(pattern, words):
            key_p = ("p", p)
            key_w = ("w", w)

            if key_p in seen and seen[key_p] != w:
                return False
            if key_w in seen and seen[key_w] != p:
                return False
            
            seen[key_p] = w
            seen[key_w] = p
        
        return True
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
