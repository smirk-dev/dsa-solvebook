---
id: "507"
title: "Perfect Number"
slug: "perfect-number"
difficulty: "Easy"
tags: ["Math"]
language: "java"
date_solved: "2026-07-17"
status: "solved"
submission_id: "2071541293"
---

## Problem

A [**perfect number**](https://en.wikipedia.org/wiki/Perfect_number) is a **positive integer** that is equal to the sum of its **positive divisors** , excluding the number itself. A **divisor** of an integer `x` is an integer that can divide `x` evenly.

Given an integer `n`, return `true` _if_`n` _is a perfect number, otherwise return_`false`.

 

**Example 1:**
    
    
    **Input:** num = 28
    **Output:** true
    **Explanation:** 28 = 1 + 2 + 4 + 7 + 14
    1, 2, 4, 7, and 14 are all divisors of 28.
    

**Example 2:**
    
    
    **Input:** num = 7
    **Output:** false
    

 

**Constraints:**

  * `1 <= num <= 108`

## Solution

```java
class Solution{
    public boolean checkPerfectNumber(int num) {
        if (num == 6 || num == 28 || num == 496 || num == 8128 || num == 33550336) {
            return true;
        } else {
            return false;
        }
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
