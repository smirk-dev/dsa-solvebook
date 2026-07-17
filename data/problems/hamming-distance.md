---
id: "461"
title: "Hamming Distance"
slug: "hamming-distance"
difficulty: "Easy"
tags: ["Bit Manipulation"]
language: "java"
date_solved: "2026-07-17"
status: "solved"
submission_id: "2071539144"
---

## Problem

The [Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance) between two integers is the number of positions at which the corresponding bits are different.

Given two integers `x` and `y`, return _the**Hamming distance** between them_.

 

**Example 1:**
    
    
    **Input:** x = 1, y = 4
    **Output:** 2
    **Explanation:**
    1   (0 0 0 1)
    4   (0 1 0 0)
           ↑   ↑
    The above arrows point to positions where the corresponding bits are different.
    

**Example 2:**
    
    
    **Input:** x = 3, y = 1
    **Output:** 1
    

 

**Constraints:**

  * `0 <= x, y <= 231 - 1`



 

**Note:** This question is the same as [ 2220: Minimum Bit Flips to Convert Number.](https://leetcode.com/problems/minimum-bit-flips-to-convert-number/description/)

## Solution

```java
class Solution {
    public int hammingDistance(int x, int y) {
        int count = 0;
        
        
        if (x == y)
            return count;
        
        
        while (x > 0 || y > 0) {
            int xBit = 0;
            int yBit = 0;
            
            
            if (x > 0) {
                xBit = x % 2;
                x = Math.floorDiv(x, 2);
            }
            
            
            if (y > 0) {
                yBit = y % 2;
                y = Math.floorDiv(y, 2);
            }
            
            
            if (xBit != yBit)
                count++;
        }
        
        
        return count;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
