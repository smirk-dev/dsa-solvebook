---
id: "231"
title: "Power of Two"
slug: "power-of-two"
difficulty: "Easy"
tags: ["Math", "Bit Manipulation", "Recursion"]
language: "cpp"
date_solved: "2025-08-09"
status: "solved"
submission_id: "1728813931"
---

## Problem

Given an integer `n`, return _`true` if it is a power of two. Otherwise, return `false`_.

An integer `n` is a power of two, if there exists an integer `x` such that `n == 2x`.

 

**Example 1:**
    
    
    **Input:** n = 1
    **Output:** true
    **Explanation:** 20 = 1
    

**Example 2:**
    
    
    **Input:** n = 16
    **Output:** true
    **Explanation:** 24 = 16
    

**Example 3:**
    
    
    **Input:** n = 3
    **Output:** false
    

 

**Constraints:**

  * `-231 <= n <= 231 - 1`



 

**Follow up:** Could you solve it without loops/recursion?

## Solution

```cpp
class Solution {
public:
    bool isPowerOfTwo(int n) {
        return n > 0 && (n & (n - 1)) == 0;
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
