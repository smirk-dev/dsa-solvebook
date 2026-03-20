---
id: "1319"
title: "Unique Number of Occurrences"
slug: "unique-number-of-occurrences"
difficulty: "Easy"
tags: ["Array", "Hash Table"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1823947551"
---

## Problem

Given an array of integers `arr`, return `true` _if the number of occurrences of each value in the array is**unique** or _`false` _otherwise_.

 

**Example 1:**
    
    
    **Input:** arr = [1,2,2,1,1,3]
    **Output:** true
    **Explanation:**  The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

**Example 2:**
    
    
    **Input:** arr = [1,2]
    **Output:** false
    

**Example 3:**
    
    
    **Input:** arr = [-3,0,1,-3,1,1,1,-3,10,0]
    **Output:** true
    

 

**Constraints:**

  * `1 <= arr.length <= 1000`
  * `-1000 <= arr[i] <= 1000`

## Solution

```python
class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        from collections import Counter
        counts = Counter(arr)
        return len(counts.values()) == len(set(counts.values()))
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
