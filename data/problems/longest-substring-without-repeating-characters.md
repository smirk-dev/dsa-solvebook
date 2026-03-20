---
id: "3"
title: "Longest Substring Without Repeating Characters"
slug: "longest-substring-without-repeating-characters"
difficulty: "Medium"
tags: ["Hash Table", "String", "Sliding Window"]
language: "python3"
date_solved: "2025-02-17"
status: "solved"
submission_id: "1546156488"
---

## Problem

Given a string `s`, find the length of the **longest** **substring** without duplicate characters.

 

**Example 1:**
    
    
    **Input:** s = "abcabcbb"
    **Output:** 3
    **Explanation:** The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
    

**Example 2:**
    
    
    **Input:** s = "bbbbb"
    **Output:** 1
    **Explanation:** The answer is "b", with the length of 1.
    

**Example 3:**
    
    
    **Input:** s = "pwwkew"
    **Output:** 3
    **Explanation:** The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
    

 

**Constraints:**

  * `0 <= s.length <= 5 * 104`
  * `s` consists of English letters, digits, symbols and spaces.

## Solution

```python
class Solution(object):
    def lengthOfLongestSubstring(self, s):
        left = max_length = 0
        char_set = set()
        for right in range(len(s)):
            while s[right] in char_set:
                char_set.remove(s[left])
                left += 1
            char_set.add(s[right])
            max_length = max(max_length, right - left + 1)
        return max_length
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
