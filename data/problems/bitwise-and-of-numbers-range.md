---
id: "201"
title: "Bitwise AND of Numbers Range"
slug: "bitwise-and-of-numbers-range"
difficulty: "Medium"
tags: ["Bit Manipulation"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1825865877"
---

## Problem

Given two integers `left` and `right` that represent the range `[left, right]`, return _the bitwise AND of all numbers in this range, inclusive_.

 

**Example 1:**
    
    
    **Input:** left = 5, right = 7
    **Output:** 4
    

**Example 2:**
    
    
    **Input:** left = 0, right = 0
    **Output:** 0
    

**Example 3:**
    
    
    **Input:** left = 1, right = 2147483647
    **Output:** 0
    

 

**Constraints:**

  * `0 <= left <= right <= 231 - 1`

## Solution

```python
class Solution:
    def rangeBitwiseAnd(self, left: int, right: int) -> int:
        cnt = 0
        while left != right:
            left >>= 1
            right >>= 1
            cnt += 1
        return left << cnt
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
