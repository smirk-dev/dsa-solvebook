---
id: "2610"
title: "Closest Prime Numbers in Range"
slug: "closest-prime-numbers-in-range"
difficulty: "Medium"
tags: ["Math", "Number Theory"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830311930"
---

## Problem

Given two positive integers `left` and `right`, find the two integers `num1` and `num2` such that:

  * `left <= num1 < num2 <= right `.
  * Both `num1` and `num2` are prime numbers.
  * `num2 - num1` is the **minimum** amongst all other pairs satisfying the above conditions.



Return the positive integer array `ans = [num1, num2]`. If there are multiple pairs satisfying these conditions, return the one with the **smallest** `num1` value. If no such numbers exist, return `[-1, -1]`_._

 

**Example 1:**
    
    
    **Input:** left = 10, right = 19
    **Output:** [11,13]
    **Explanation:** The prime numbers between 10 and 19 are 11, 13, 17, and 19.
    The closest gap between any pair is 2, which can be achieved by [11,13] or [17,19].
    Since 11 is smaller than 17, we return the first pair.
    

**Example 2:**
    
    
    **Input:** left = 4, right = 6
    **Output:** [-1,-1]
    **Explanation:** There exists only one prime number in the given range, so the conditions cannot be satisfied.
    

 

**Constraints:**

  * `1 <= left <= right <= 106`

## Solution

```python
class Solution:
    def closestPrimes(self, left: int, right: int) -> List[int]:
        # Sieve of Eratosthenes to find all primes up to right
        def sieve(n):
            if n < 2:
                return [False] * (n + 1)
            
            is_prime = [True] * (n + 1)
            is_prime[0] = is_prime[1] = False
            
            for i in range(2, int(n**0.5) + 1):
                if is_prime[i]:
                    for j in range(i*i, n + 1, i):
                        is_prime[j] = False
            
            return is_prime
        
        # Get all primes up to right
        is_prime = sieve(right)
        
        # Find two primes with minimum gap in [left, right]
        prev_prime = -1
        min_gap = float('inf')
        result = [-1, -1]
        
        for num in range(left, right + 1):
            if is_prime[num]:
                if prev_prime != -1:
                    # Found a pair of consecutive primes
                    gap = num - prev_prime
                    
                    # Update result if this gap is smaller
                    if gap < min_gap:
                        min_gap = gap
                        result = [prev_prime, num]
                
                prev_prime = num
        
        return result
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
