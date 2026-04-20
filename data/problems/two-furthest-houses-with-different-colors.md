---
id: "2199"
title: "Two Furthest Houses With Different Colors"
slug: "two-furthest-houses-with-different-colors"
difficulty: "Easy"
tags: ["Array", "Greedy"]
language: "java"
date_solved: "2026-04-20"
status: "solved"
submission_id: "1983161256"
---

## Problem

There are `n` houses evenly lined up on the street, and each house is beautifully painted. You are given a **0-indexed** integer array `colors` of length `n`, where `colors[i]` represents the color of the `ith` house.

Return _the**maximum** distance between **two** houses with **different** colors_.

The distance between the `ith` and `jth` houses is `abs(i - j)`, where `abs(x)` is the **absolute value** of `x`.

 

**Example 1:**
    
    
    **Input:** colors = [_**1**_ ,1,1,**_6_** ,1,1,1]
    **Output:** 3
    **Explanation:** In the above image, color 1 is blue, and color 6 is red.
    The furthest two houses with different colors are house 0 and house 3.
    House 0 has color 1, and house 3 has color 6. The distance between them is abs(0 - 3) = 3.
    Note that houses 3 and 6 can also produce the optimal answer.
    

**Example 2:**
    
    
    **Input:** colors = [_**1**_ ,8,3,8,_**3**_]
    **Output:** 4
    **Explanation:** In the above image, color 1 is blue, color 8 is yellow, and color 3 is green.
    The furthest two houses with different colors are house 0 and house 4.
    House 0 has color 1, and house 4 has color 3. The distance between them is abs(0 - 4) = 4.
    

**Example 3:**
    
    
    **Input:** colors = [_**0**_ ,**_1_**]
    **Output:** 1
    **Explanation:** The furthest two houses with different colors are house 0 and house 1.
    House 0 has color 0, and house 1 has color 1. The distance between them is abs(0 - 1) = 1.
    

 

**Constraints:**

  * `n == colors.length`
  * `2 <= n <= 100`
  * `0 <= colors[i] <= 100`
  * Test data are generated such that **at least** two houses have different colors.

## Solution

```java
class Solution {
    public int maxDistance(int[] A) {
        int n = A.length;
        int left = 0, right = 0;

        for (int i = 0; i < n; i++)
            if (A[i] != A[n - 1]) {
                left = i;
                break;
            }

        for (int i = n - 1; i >= 0; i--)
            if (A[i] != A[0]) {
                right = i;
                break;
            }

        return Math.max(n - 1 - left, right);
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
