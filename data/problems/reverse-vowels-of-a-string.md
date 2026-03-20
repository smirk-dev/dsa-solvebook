---
id: "345"
title: "Reverse Vowels of a String"
slug: "reverse-vowels-of-a-string"
difficulty: "Easy"
tags: ["Two Pointers", "String"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1823880880"
---

## Problem

Given a string `s`, reverse only all the vowels in the string and return it.

The vowels are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`, and they can appear in both lower and upper cases, more than once.

 

**Example 1:**

**Input:** s = "IceCreAm"

**Output:** "AceCreIm"

**Explanation:**

The vowels in `s` are `['I', 'e', 'e', 'A']`. On reversing the vowels, s becomes `"AceCreIm"`.

**Example 2:**

**Input:** s = "leetcode"

**Output:** "leotcede"

 

**Constraints:**

  * `1 <= s.length <= 3 * 105`
  * `s` consist of **printable ASCII** characters.

## Solution

```python
class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = set('aeiouAEIOU')
        s_list = list(s)
        left, right = 0, len(s) - 1
        while left < right:
            if s_list[left] not in vowels:
                left += 1
            elif s_list[right] not in vowels:
                right -= 1
            else:
                s_list[left], s_list[right] = s_list[right], s_list[left]
                left += 1
                right -= 1
        return ''.join(s_list)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
