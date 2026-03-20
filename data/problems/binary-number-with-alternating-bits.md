---
id: "693"
title: "Binary Number with Alternating Bits"
slug: "binary-number-with-alternating-bits"
difficulty: "Easy"
tags: ["Bit Manipulation"]
language: "java"
date_solved: "2026-02-18"
status: "solved"
submission_id: "1922909021"
---

## Problem

Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

 

**Example 1:**
    
    
    **Input:** n = 5
    **Output:** true
    **Explanation:** The binary representation of 5 is: 101
    

**Example 2:**
    
    
    **Input:** n = 7
    **Output:** false
    **Explanation:** The binary representation of 7 is: 111.

**Example 3:**
    
    
    **Input:** n = 11
    **Output:** false
    **Explanation:** The binary representation of 11 is: 1011.

 

**Constraints:**

  * `1 <= n <= 231 - 1`

## Solution

```java
class Solution {
    public boolean hasAlternatingBits(int n) {
        int x = n ^ (n >> 1);
        return (x & (x + 1)) == 0;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
