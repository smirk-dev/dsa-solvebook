---
id: "1630"
title: "Count Odd Numbers in an Interval Range"
slug: "count-odd-numbers-in-an-interval-range"
difficulty: "Easy"
tags: ["Math"]
language: "python3"
date_solved: "2025-12-07"
status: "solved"
submission_id: "1849198645"
---

## Problem

Given two non-negative integers `low` and `high`. Return the _count of odd numbers between_`low` _and_` high` _ (inclusive)_.

 

**Example 1:**
    
    
    **Input:** low = 3, high = 7
    **Output:** 3
    **Explanation:** The odd numbers between 3 and 7 are [3,5,7].

**Example 2:**
    
    
    **Input:** low = 8, high = 10
    **Output:** 1
    **Explanation:** The odd numbers between 8 and 10 are [9].

 

**Constraints:**

  * `0 <= low <= high <= 10^9`

## Solution

```python
class Solution:
    def countOdds(self, low: int, high: int) -> int:
        return (high + 1) // 2 - (low // 2)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
