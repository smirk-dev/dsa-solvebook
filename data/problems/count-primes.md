---
id: "204"
title: "Count Primes"
slug: "count-primes"
difficulty: "Medium"
tags: ["Array", "Math", "Enumeration", "Number Theory"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830311140"
---

## Problem

Given an integer `n`, return _the number of prime numbers that are strictly less than_ `n`.

 

**Example 1:**
    
    
    **Input:** n = 10
    **Output:** 4
    **Explanation:** There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
    

**Example 2:**
    
    
    **Input:** n = 0
    **Output:** 0
    

**Example 3:**
    
    
    **Input:** n = 1
    **Output:** 0
    

 

**Constraints:**

  * `0 <= n <= 5 * 106`

## Solution

```python
class Solution:
    def countPrimes(self, n: int) -> int:
        if n <= 2:
            return 0
        
        # Create a boolean array "is_prime" and initialize all entries as True
        is_prime = [True] * n
        is_prime[0] = is_prime[1] = False  # 0 and 1 are not prime
        
        # Sieve of Eratosthenes
        for i in range(2, int(n**0.5) + 1):
            if is_prime[i]:
                # Mark all multiples of i as not prime
                for j in range(i*i, n, i):
                    is_prime[j] = False
        
        # Count all True values (primes)
        return sum(is_prime)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
