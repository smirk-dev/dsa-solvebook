---
id: "4168"
title: "Mirror Distance of an Integer"
slug: "mirror-distance-of-an-integer"
difficulty: "Easy"
tags: ["Math"]
language: "java"
date_solved: "2026-04-18"
status: "solved"
submission_id: "1981507401"
---

## Problem

You are given an integer `n`.

Define its **mirror distance** as: `abs(n - reverse(n))`​​​​​​​ where `reverse(n)` is the integer formed by reversing the digits of `n`.

Return an integer denoting the mirror distance of `n`​​​​​​​.

`abs(x)` denotes the absolute value of `x`.

 

**Example 1:**

**Input:** n = 25

**Output:** 27

**Explanation:**

  * `reverse(25) = 52`.
  * Thus, the answer is `abs(25 - 52) = 27`.



**Example 2:**

**Input:** n = 10

**Output:** 9

**Explanation:**

  * `reverse(10) = 01` which is 1.
  * Thus, the answer is `abs(10 - 1) = 9`.



**Example 3:**

**Input:** n = 7

**Output:** 0

**Explanation:**

  * `reverse(7) = 7`.
  * Thus, the answer is `abs(7 - 7) = 0`.



 

**Constraints:**

  * `1 <= n <= 109`

## Solution

```java
class Solution {
    static public int mirrorDistance(int n) {
        int rev=0;
        for(int x=n; x>0; x/=10){
            rev=10*rev+x%10;
        }
        return Math.abs(rev-n);
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
