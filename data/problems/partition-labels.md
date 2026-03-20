---
id: "768"
title: "Partition Labels"
slug: "partition-labels"
difficulty: "Medium"
tags: ["Hash Table", "Two Pointers", "String", "Greedy"]
language: "python3"
date_solved: "2025-03-30"
status: "solved"
submission_id: "1591289206"
---

## Problem

You are given a string `s`. We want to partition the string into as many parts as possible so that each letter appears in at most one part. For example, the string `"ababcc"` can be partitioned into `["abab", "cc"]`, but partitions such as `["aba", "bcc"]` or `["ab", "ab", "cc"]` are invalid.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be `s`.

Return _a list of integers representing the size of these parts_.

 

**Example 1:**
    
    
    **Input:** s = "ababcbacadefegdehijhklij"
    **Output:** [9,7,8]
    **Explanation:**
    The partition is "ababcbaca", "defegde", "hijhklij".
    This is a partition so that each letter appears in at most one part.
    A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
    

**Example 2:**
    
    
    **Input:** s = "eccbbbbdec"
    **Output:** [10]
    

 

**Constraints:**

  * `1 <= s.length <= 500`
  * `s` consists of lowercase English letters.

## Solution

```python
from typing import List
class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        lastIndex = {}
        for i, c in enumerate(s):
            lastIndex[c] = i
        res = []
        size = end = 0
        for i, c in enumerate(s):
            size += 1
            if lastIndex[c] > end:
                end = lastIndex[c]
            if i == end:
                res.append(size)
                size = 0
        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
