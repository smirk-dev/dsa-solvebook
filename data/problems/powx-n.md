---
id: "50"
title: "Pow(x, n)"
slug: "powx-n"
difficulty: "Medium"
tags: ["Math", "Recursion"]
language: "python3"
date_solved: "2025-02-18"
status: "solved"
submission_id: "1547707985"
---

## Problem

Implement [pow(x, n)](http://www.cplusplus.com/reference/valarray/pow/), which calculates `x` raised to the power `n` (i.e., `xn`).

 

**Example 1:**
    
    
    **Input:** x = 2.00000, n = 10
    **Output:** 1024.00000
    

**Example 2:**
    
    
    **Input:** x = 2.10000, n = 3
    **Output:** 9.26100
    

**Example 3:**
    
    
    **Input:** x = 2.00000, n = -2
    **Output:** 0.25000
    **Explanation:** 2-2 = 1/22 = 1/4 = 0.25
    

 

**Constraints:**

  * `-100.0 < x < 100.0`
  * `-231 <= n <= 231-1`
  * `n` is an integer.
  * Either `x` is not zero or `n > 0`.
  * `-104 <= xn <= 104`

## Solution

```python
class Solution(object):
    def myPow(self, x, n):
        def calc_power(x, n):
            if x == 0:
                return 0
            if n == 0:
                return 1
            
            res = calc_power(x, n // 2)
            res = res * res

            if n % 2 == 1:
                return res * x
            
            return res

        ans = calc_power(x, abs(n))

        if n >= 0:
            return ans
        
        return 1 / ans
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
