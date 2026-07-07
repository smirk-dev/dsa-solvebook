---
id: "4135"
title: "Concatenate Non-Zero Digits and Multiply by Sum I"
slug: "concatenate-non-zero-digits-and-multiply-by-sum-i"
difficulty: "Easy"
tags: ["Math"]
language: "java"
date_solved: "2026-07-07"
status: "solved"
submission_id: "2058882238"
---

## Problem

You are given an integer `n`.

Form a new integer `x` by concatenating all the **non-zero digits** of `n` in their original order. If there are no **non-zero** digits, `x = 0`.

Let `sum` be the **sum of digits** in `x`.

Return an integer representing the value of `x * sum`.

 

**Example 1:**

**Input:** n = 10203004

**Output:** 12340

**Explanation:**

  * The non-zero digits are 1, 2, 3, and 4. Thus, `x = 1234`.
  * The sum of digits is `sum = 1 + 2 + 3 + 4 = 10`.
  * Therefore, the answer is `x * sum = 1234 * 10 = 12340`.



**Example 2:**

**Input:** n = 1000

**Output:** 1

**Explanation:**

  * The non-zero digit is 1, so `x = 1` and `sum = 1`.
  * Therefore, the answer is `x * sum = 1 * 1 = 1`.



 

**Constraints:**

  * `0 <= n <= 109`

## Solution

```java
class Solution {
    public long sumAndMultiply(int n) {
        long x = 0, s = 0;
        for (char c : String.valueOf(n).toCharArray())
            if (c != '0') {
                x = x * 10 + c - '0';
                s += c - '0';
            }
        return x * s;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
