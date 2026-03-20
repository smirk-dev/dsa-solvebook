---
id: "1441"
title: "Minimum Flips to Make a OR b Equal to c"
slug: "minimum-flips-to-make-a-or-b-equal-to-c"
difficulty: "Medium"
tags: ["Bit Manipulation"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1824008456"
---

## Problem

Given 3 positives numbers `a`, `b` and `c`. Return the minimum flips required in some bits of `a` and `b` to make ( `a` OR `b` == `c` ). (bitwise OR operation).  
Flip operation consists of change **any**  single bit 1 to 0 or change the bit 0 to 1 in their binary representation.

 

**Example 1:**
    
    
    **Input:** a = 2, b = 6, c = 5
    **Output:** 3
    **Explanation:** After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)

**Example 2:**
    
    
    **Input:** a = 4, b = 2, c = 7
    **Output:** 1
    

**Example 3:**
    
    
    **Input:** a = 1, b = 2, c = 3
    **Output:** 0
    

 

**Constraints:**

  * `1 <= a <= 10^9`
  * `1 <= b <= 10^9`
  * `1 <= c <= 10^9`

## Solution

```python
class Solution:
    def minFlips(self, a: int, b: int, c: int) -> int:
        flips = 0
        while a or b or c:
            bit_a = a & 1
            bit_b = b & 1
            bit_c = c & 1
            if bit_c == 0:
                flips += bit_a + bit_b
            else:
                if bit_a == 0 and bit_b == 0:
                    flips += 1
            a >>= 1
            b >>= 1
            c >>= 1
        return flips
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
