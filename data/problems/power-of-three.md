---
id: "326"
title: "Power of Three"
slug: "power-of-three"
difficulty: "Easy"
tags: ["Math", "Recursion"]
language: "cpp"
date_solved: "2025-08-13"
status: "solved"
submission_id: "1733653396"
---

## Problem

Given an integer `n`, return _`true` if it is a power of three. Otherwise, return `false`_.

An integer `n` is a power of three, if there exists an integer `x` such that `n == 3x`.

 

**Example 1:**
    
    
    **Input:** n = 27
    **Output:** true
    **Explanation:** 27 = 33
    

**Example 2:**
    
    
    **Input:** n = 0
    **Output:** false
    **Explanation:** There is no x where 3x = 0.
    

**Example 3:**
    
    
    **Input:** n = -1
    **Output:** false
    **Explanation:** There is no x where 3x = (-1).
    

 

**Constraints:**

  * `-231 <= n <= 231 - 1`



 

**Follow up:** Could you solve it without loops/recursion?

## Solution

```cpp
class Solution {
public:
    bool isPowerOfThree(int n) {
        if(n <= 0) return false;
        while (n % 3 == 0){
            n /= 3;
        }
        return n == 1;
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
