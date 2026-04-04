---
id: "405"
title: "Convert a Number to Hexadecimal"
slug: "convert-a-number-to-hexadecimal"
difficulty: "Easy"
tags: ["Math", "String", "Bit Manipulation"]
language: "java"
date_solved: "2026-04-01"
status: "solved"
submission_id: "1965508151"
---

## Problem

Given a 32-bit integer `num`, return _a string representing its hexadecimal representation_. For negative integers, [two's complement](https://en.wikipedia.org/wiki/Two%27s_complement) method is used.

All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.

**Note:  **You are not allowed to use any built-in library method to directly solve this problem.

 

**Example 1:**
    
    
    **Input:** num = 26
    **Output:** "1a"
    

**Example 2:**
    
    
    **Input:** num = -1
    **Output:** "ffffffff"
    

 

**Constraints:**

  * `-231 <= num <= 231 - 1`

## Solution

```java
class Solution {
    public String toHex(int num) {
        if (num == 0)
            return "0";

        long n = num & 0xffffffffL;
        String result = "";

        while (n > 0) {
            long rem = n & 15;
            if (rem < 10) {
                result = (char) ('0' + rem) + result;
            } else {
                result = (char) ('a' + (rem - 10)) + result;
            }
            n = n >> 4;
        }
        return result;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
