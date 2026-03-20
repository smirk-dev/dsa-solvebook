---
id: "14"
title: "Longest Common Prefix"
slug: "longest-common-prefix"
difficulty: "Easy"
tags: ["Array", "String", "Trie"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830351825"
---

## Problem

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

 

**Example 1:**
    
    
    **Input:** strs = ["flower","flow","flight"]
    **Output:** "fl"
    

**Example 2:**
    
    
    **Input:** strs = ["dog","racecar","car"]
    **Output:** ""
    **Explanation:** There is no common prefix among the input strings.
    

 

**Constraints:**

  * `1 <= strs.length <= 200`
  * `0 <= strs[i].length <= 200`
  * `strs[i]` consists of only lowercase English letters if it is non-empty.

## Solution

```python
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""
        
        # Start with the first string as the prefix
        prefix = strs[0]
        
        # Compare prefix with each string
        for s in strs[1:]:
            while not s.startswith(prefix):
                # Shorten the prefix until it matches
                prefix = prefix[:-1]
                if not prefix:
                    return ""
        return prefix
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
