---
id: "151"
title: "Reverse Words in a String"
slug: "reverse-words-in-a-string"
difficulty: "Medium"
tags: ["Two Pointers", "String"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1823881540"
---

## Problem

Given an input string `s`, reverse the order of the **words**.

A **word** is defined as a sequence of non-space characters. The **words** in `s` will be separated by at least one space.

Return _a string of the words in reverse order concatenated by a single space._

**Note** that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

**Example 1:**
    
    
    **Input:** s = "the sky is blue"
    **Output:** "blue is sky the"
    

**Example 2:**
    
    
    **Input:** s = "  hello world  "
    **Output:** "world hello"
    **Explanation:** Your reversed string should not contain leading or trailing spaces.
    

**Example 3:**
    
    
    **Input:** s = "a good   example"
    **Output:** "example good a"
    **Explanation:** You need to reduce multiple spaces between two words to a single space in the reversed string.
    

 

**Constraints:**

  * `1 <= s.length <= 104`
  * `s` contains English letters (upper-case and lower-case), digits, and spaces `' '`.
  * There is **at least one** word in `s`.



 

**Follow-up:  **If the string data type is mutable in your language, can you solve it **in-place**  with `O(1)` extra space?

## Solution

```python
class Solution:
    def reverseWords(self, s: str) -> str:
        return ' '.join(reversed(s.split()))
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
