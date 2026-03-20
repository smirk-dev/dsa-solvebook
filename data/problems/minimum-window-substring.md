---
id: "76"
title: "Minimum Window Substring"
slug: "minimum-window-substring"
difficulty: "Hard"
tags: ["Hash Table", "String", "Sliding Window"]
language: "python3"
date_solved: "2025-03-25"
status: "solved"
submission_id: "1585376169"
---

## Problem

Given two strings `s` and `t` of lengths `m` and `n` respectively, return _the**minimum window**_ **_substring_** _of_`s` _such that every character in_`t` _(**including duplicates**) is included in the window_. If there is no such substring, return _the empty string_`""`.

The testcases will be generated such that the answer is **unique**.

 

**Example 1:**
    
    
    **Input:** s = "ADOBECODEBANC", t = "ABC"
    **Output:** "BANC"
    **Explanation:** The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
    

**Example 2:**
    
    
    **Input:** s = "a", t = "a"
    **Output:** "a"
    **Explanation:** The entire string s is the minimum window.
    

**Example 3:**
    
    
    **Input:** s = "a", t = "aa"
    **Output:** ""
    **Explanation:** Both 'a's from t must be included in the window.
    Since the largest window of s only has one 'a', return empty string.
    

 

**Constraints:**

  * `m == s.length`
  * `n == t.length`
  * `1 <= m, n <= 105`
  * `s` and `t` consist of uppercase and lowercase English letters.



 

**Follow up:** Could you find an algorithm that runs in `O(m + n)` time?

## Solution

```python
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(s) < len(t):
            return ""
        char_count = defaultdict(int)
        for ch in t:
            char_count[ch] += 1
        target_chars_remaining = len(t)
        min_window = (0, float("inf"))
        start_index = 0
        for end_index, ch in enumerate(s):
            if char_count[ch] > 0:
                target_chars_remaining -= 1
            char_count[ch] -= 1
            if target_chars_remaining == 0:
                while True:
                    char_at_start = s[start_index]
                    if char_count[char_at_start] == 0:
                        break
                    char_count[char_at_start] += 1
                    start_index += 1
                if end_index - start_index < min_window[1] - min_window[0]:
                    min_window = (start_index, end_index)
                char_count[s[start_index]] += 1
                target_chars_remaining += 1
                start_index += 1
        return "" if min_window[1] > len(s) else s[min_window[0]:min_window[1]+1]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
