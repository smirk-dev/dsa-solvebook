---
id: "1585"
title: "The kth Factor of n"
slug: "the-kth-factor-of-n"
difficulty: "Medium"
tags: ["Math", "Number Theory"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830359767"
---

## Problem

You are given two positive integers `n` and `k`. A factor of an integer `n` is defined as an integer `i` where `n % i == 0`.

Consider a list of all factors of `n` sorted in **ascending order** , return _the_`kth` _factor_ in this list or return `-1` if `n` has less than `k` factors.

 

**Example 1:**
    
    
    **Input:** n = 12, k = 3
    **Output:** 3
    **Explanation:** Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.
    

**Example 2:**
    
    
    **Input:** n = 7, k = 2
    **Output:** 7
    **Explanation:** Factors list is [1, 7], the 2nd factor is 7.
    

**Example 3:**
    
    
    **Input:** n = 4, k = 4
    **Output:** -1
    **Explanation:** Factors list is [1, 2, 4], there is only 3 factors. We should return -1.
    

 

**Constraints:**

  * `1 <= k <= n <= 1000`



 

**Follow up:**

Could you solve this problem in less than O(n) complexity?

## Solution

```python
class Solution:
    def kthFactor(self, n: int, k: int) -> int:
        count = 0
        for i in range(1, n + 1):
            if n % i == 0:
                count += 1
                if count == k:
                    return i
        return -1
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
