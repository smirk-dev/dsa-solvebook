---
id: "263"
title: "Ugly Number"
slug: "ugly-number"
difficulty: "Easy"
tags: ["Math"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830305967"
---

## Problem

An **ugly number** is a _positive_ integer which does not have a prime factor other than 2, 3, and 5.

Given an integer `n`, return `true` _if_ `n` _is an**ugly number**_.

 

**Example 1:**
    
    
    **Input:** n = 6
    **Output:** true
    **Explanation:** 6 = 2 × 3
    

**Example 2:**
    
    
    **Input:** n = 1
    **Output:** true
    **Explanation:** 1 has no prime factors.
    

**Example 3:**
    
    
    **Input:** n = 14
    **Output:** false
    **Explanation:** 14 is not ugly since it includes the prime factor 7.
    

 

**Constraints:**

  * `-231 <= n <= 231 - 1`

## Solution

```python
class Solution:
    def isUgly(self, n: int) -> bool:
        # Ugly numbers must be positive
        if n <= 0:
            return False
        
        # Divide out all factors of 2, 3, and 5
        for prime in [2, 3, 5]:
            while n % prime == 0:
                n //= prime
        
        # If n is 1 after removing all 2s, 3s, and 5s, it's ugly
        # Otherwise, it has other prime factors
        return n == 1
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
