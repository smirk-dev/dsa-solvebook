---
id: "1567"
title: "Maximum Number of Vowels in a Substring of Given Length"
slug: "maximum-number-of-vowels-in-a-substring-of-given-length"
difficulty: "Medium"
tags: ["String", "Sliding Window"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1823892252"
---

## Problem

Given a string `s` and an integer `k`, return _the maximum number of vowel letters in any substring of_`s` _with length_`k`.

**Vowel letters** in English are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`.

 

**Example 1:**
    
    
    **Input:** s = "abciiidef", k = 3
    **Output:** 3
    **Explanation:** The substring "iii" contains 3 vowel letters.
    

**Example 2:**
    
    
    **Input:** s = "aeiou", k = 2
    **Output:** 2
    **Explanation:** Any substring of length 2 contains 2 vowels.
    

**Example 3:**
    
    
    **Input:** s = "leetcode", k = 3
    **Output:** 2
    **Explanation:** "lee", "eet" and "ode" contain 2 vowels.
    

 

**Constraints:**

  * `1 <= s.length <= 105`
  * `s` consists of lowercase English letters.
  * `1 <= k <= s.length`

## Solution

```python
class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = set('aeiou')
        current = sum(1 for i in range(k) if s[i] in vowels)
        max_vowels = current
        for i in range(k, len(s)):
            if s[i] in vowels:
                current += 1
            if s[i-k] in vowels:
                current -= 1
            max_vowels = max(max_vowels, current)
        return max_vowels
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
