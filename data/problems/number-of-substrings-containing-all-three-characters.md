---
id: "1460"
title: "Number of Substrings Containing All Three Characters"
slug: "number-of-substrings-containing-all-three-characters"
difficulty: "Medium"
tags: ["Hash Table", "String", "Sliding Window"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830331419"
---

## Problem

Given a string `s` consisting only of characters _a_ , _b_ and _c_.

Return the number of substrings containing **at least**  one occurrence of all these characters _a_ , _b_ and _c_.

 

**Example 1:**
    
    
    **Input:** s = "abcabc"
    **Output:** 10
    **Explanation:** The substrings containing at least one occurrence of the characters _a_ , _b_  and _c are "_abc _" , "_abca _" , "_abcab _" , "_abcabc _" , "_bca _" , "_bcab _" , "_bcabc _" , "_cab _" , "_cabc _" _and _ "_abc _" _(**again**)_._
    

**Example 2:**
    
    
    **Input:** s = "aaacb"
    **Output:** 3
    **Explanation:** The substrings containing at least one occurrence of the characters _a_ , _b_  and _c are "_aaacb _" , "_aacb _" _and _ "_acb _".___
    

**Example 3:**
    
    
    **Input:** s = "abc"
    **Output:** 1
    

 

**Constraints:**

  * `3 <= s.length <= 5 x 10^4`
  * `s` only consists of _a_ , _b_ or _c  _characters.

## Solution

```python
class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        last_seen = {'a': -1, 'b': -1, 'c': -1}
        res = 0
        for i, ch in enumerate(s):
            last_seen[ch] = i
            res += min(last_seen.values()) + 1
        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
