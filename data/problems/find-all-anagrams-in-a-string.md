---
id: "438"
title: "Find All Anagrams in a String"
slug: "find-all-anagrams-in-a-string"
difficulty: "Medium"
tags: ["Hash Table", "String", "Sliding Window"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830370968"
---

## Problem

Given two strings `s` and `p`, return an array of all the start indices of `p`'s anagrams in `s`. You may return the answer in **any order**.

 

**Example 1:**
    
    
    **Input:** s = "cbaebabacd", p = "abc"
    **Output:** [0,6]
    **Explanation:**
    The substring with start index = 0 is "cba", which is an anagram of "abc".
    The substring with start index = 6 is "bac", which is an anagram of "abc".
    

**Example 2:**
    
    
    **Input:** s = "abab", p = "ab"
    **Output:** [0,1,2]
    **Explanation:**
    The substring with start index = 0 is "ab", which is an anagram of "ab".
    The substring with start index = 1 is "ba", which is an anagram of "ab".
    The substring with start index = 2 is "ab", which is an anagram of "ab".
    

 

**Constraints:**

  * `1 <= s.length, p.length <= 3 * 104`
  * `s` and `p` consist of lowercase English letters.

## Solution

```python
class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        if(len(p) > len(s)):
            return []

        target_dict = Counter(p)
        freq_dict = dict()

        for i in range(len(p)):

            if(s[i] not in freq_dict):
                freq_dict[s[i]] = 1
            else:
                freq_dict[s[i]] += 1

        i = 0
        j = len(p) - 1
        ans = []
        if(freq_dict == target_dict):
            ans.append(i)

        while(i < len(s) - len(p)):
            
            freq_dict[s[i]] -= 1
            if(freq_dict[s[i]] == 0):
                freq_dict.pop(s[i])
            i += 1

            j += 1
            if(s[j] not in freq_dict):
                freq_dict[s[j]] = 1
            else:
                freq_dict[s[j]] += 1
            

            if(freq_dict == target_dict):
                ans.append(i)

        return ans
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
