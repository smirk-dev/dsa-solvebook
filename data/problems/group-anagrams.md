---
id: "49"
title: "Group Anagrams"
slug: "group-anagrams"
difficulty: "Medium"
tags: ["Array", "Hash Table", "String", "Sorting"]
language: "python3"
date_solved: "2026-03-17"
status: "solved"
submission_id: "1951115507"
---

## Problem

Given an array of strings `strs`, group the anagrams together. You can return the answer in **any order**.

 

**Example 1:**

**Input:** strs = ["eat","tea","tan","ate","nat","bat"]

**Output:** [["bat"],["nat","tan"],["ate","eat","tea"]]

**Explanation:**

  * There is no string in strs that can be rearranged to form `"bat"`.
  * The strings `"nat"` and `"tan"` are anagrams as they can be rearranged to form each other.
  * The strings `"ate"`, `"eat"`, and `"tea"` are anagrams as they can be rearranged to form each other.



**Example 2:**

**Input:** strs = [""]

**Output:** [[""]]

**Example 3:**

**Input:** strs = ["a"]

**Output:** [["a"]]

 

**Constraints:**

  * `1 <= strs.length <= 104`
  * `0 <= strs[i].length <= 100`
  * `strs[i]` consists of lowercase English letters.

## Solution

```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagram_map = defaultdict(list)
        
        for word in strs:
            sorted_word = ''.join(sorted(word))
            anagram_map[sorted_word].append(word)
        
        return list(anagram_map.values())
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
