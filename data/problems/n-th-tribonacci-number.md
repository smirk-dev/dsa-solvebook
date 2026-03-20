---
id: "1236"
title: "N-th Tribonacci Number"
slug: "n-th-tribonacci-number"
difficulty: "Easy"
tags: ["Math", "Dynamic Programming", "Memoization"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1824017350"
---

## Problem

The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn \+ Tn+1 \+ Tn+2 for n >= 0.

Given `n`, return the value of Tn.

 

**Example 1:**
    
    
    **Input:** n = 4
    **Output:** 4
    **Explanation:**
    T_3 = 0 + 1 + 1 = 2
    T_4 = 1 + 1 + 2 = 4
    

**Example 2:**
    
    
    **Input:** n = 25
    **Output:** 1389537
    

 

**Constraints:**

  * `0 <= n <= 37`
  * The answer is guaranteed to fit within a 32-bit integer, ie. `answer <= 2^31 - 1`.

## Solution

```python
class Solution:
    def tribonacci(self, n: int) -> int:
        mem={}
        def fibb(n,mem):
            if n==0:
                return 0
            if n<=2:
                return 1
            if n not in mem:
               mem[n]=fibb(n-1,mem)+fibb(n-2,mem)+fibb(n-3,mem)
            return mem [n]
        return(fibb(n,mem))
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
