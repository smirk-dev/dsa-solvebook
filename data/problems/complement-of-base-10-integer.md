---
id: "1054"
title: "Complement of Base 10 Integer"
slug: "complement-of-base-10-integer"
difficulty: "Easy"
tags: ["Bit Manipulation"]
language: "java"
date_solved: "2026-03-11"
status: "solved"
submission_id: "1944750873"
---

## Problem

The **complement** of an integer is the integer you get when you flip all the `0`'s to `1`'s and all the `1`'s to `0`'s in its binary representation.

  * For example, The integer `5` is `"101"` in binary and its **complement** is `"010"` which is the integer `2`.



Given an integer `n`, return _its complement_.

 

**Example 1:**
    
    
    **Input:** n = 5
    **Output:** 2
    **Explanation:** 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.
    

**Example 2:**
    
    
    **Input:** n = 7
    **Output:** 0
    **Explanation:** 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.
    

**Example 3:**
    
    
    **Input:** n = 10
    **Output:** 5
    **Explanation:** 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.
    

 

**Constraints:**

  * `0 <= n < 109`



 

**Note:** This question is the same as 476: <https://leetcode.com/problems/number-complement/>

## Solution

```java
class Solution {
    public int bitwiseComplement(int n) {
        int bits = 32 - Integer.numberOfLeadingZeros(n | 1);
        int mask = (1 << bits) - 1;
        return ~n & mask;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
