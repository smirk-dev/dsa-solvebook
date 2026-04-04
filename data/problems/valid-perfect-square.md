---
id: "367"
title: "Valid Perfect Square"
slug: "valid-perfect-square"
difficulty: "Easy"
tags: ["Math", "Binary Search"]
language: "java"
date_solved: "2026-04-01"
status: "solved"
submission_id: "1965506151"
---

## Problem

Given a positive integer num, return `true` _if_ `num` _is a perfect square or_ `false` _otherwise_.

A **perfect square** is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as `sqrt`.

 

**Example 1:**
    
    
    **Input:** num = 16
    **Output:** true
    **Explanation:** We return true because 4 * 4 = 16 and 4 is an integer.
    

**Example 2:**
    
    
    **Input:** num = 14
    **Output:** false
    **Explanation:** We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.
    

 

**Constraints:**

  * `1 <= num <= 231 - 1`

## Solution

```java
class Solution {
    public boolean isPerfectSquare(int num) {
        
        long beg = 1, end = num;
        while(beg <= end){
            long mid = beg + (end - beg)/2;
            if(mid*mid == num) return true;
            else if(mid*mid > num) end = mid - 1;
            else beg = mid + 1;
        }
        return false;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
