---
id: "1360"
title: "Maximum Length of a Concatenated String with Unique Characters"
slug: "maximum-length-of-a-concatenated-string-with-unique-characters"
difficulty: "Medium"
tags: ["Array", "String", "Backtracking", "Bit Manipulation"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830317601"
---

## Problem

You are given an array of strings `arr`. A string `s` is formed by the **concatenation** of a **subsequence** of `arr` that has **unique characters**.

Return _the**maximum** possible length_ of `s`.

A **subsequence** is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

 

**Example 1:**
    
    
    **Input:** arr = ["un","iq","ue"]
    **Output:** 4
    **Explanation:** All the valid concatenations are:
    - ""
    - "un"
    - "iq"
    - "ue"
    - "uniq" ("un" + "iq")
    - "ique" ("iq" + "ue")
    Maximum length is 4.
    

**Example 2:**
    
    
    **Input:** arr = ["cha","r","act","ers"]
    **Output:** 6
    **Explanation:** Possible longest valid concatenations are "chaers" ("cha" + "ers") and "acters" ("act" + "ers").
    

**Example 3:**
    
    
    **Input:** arr = ["abcdefghijklmnopqrstuvwxyz"]
    **Output:** 26
    **Explanation:** The only string in arr has all 26 characters.
    

 

**Constraints:**

  * `1 <= arr.length <= 16`
  * `1 <= arr[i].length <= 26`
  * `arr[i]` contains only lowercase English letters.

## Solution

```python
class Solution:
    def maxLength(self, arr: List[str]) -> int:
        def is_unique(s):
            return len(set(s)) == len(s)
        
        def backtrack(index, path):
            nonlocal max_len
            if is_unique(path):
                max_len = max(max_len, len(path))
            else:
                return
            for i in range(index, len(arr)):
                backtrack(i+1, path + arr[i])
        
        max_len = 0
        backtrack(0, "")
        return max_len
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
