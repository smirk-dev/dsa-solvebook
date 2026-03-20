---
id: "191"
title: "Number of 1 Bits"
slug: "number-of-1-bits"
difficulty: "Easy"
tags: ["Divide and Conquer", "Bit Manipulation"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830314937"
---

## Problem

Given a positive integer `n`, write a function that returns the number of set bits in its binary representation (also known as the [Hamming weight](http://en.wikipedia.org/wiki/Hamming_weight)).

 

**Example 1:**

**Input:** n = 11

**Output:** 3

**Explanation:**

The input binary string **1011** has a total of three set bits.

**Example 2:**

**Input:** n = 128

**Output:** 1

**Explanation:**

The input binary string **10000000** has a total of one set bit.

**Example 3:**

**Input:** n = 2147483645

**Output:** 30

**Explanation:**

The input binary string **1111111111111111111111111111101** has a total of thirty set bits.

 

**Constraints:**

  * `1 <= n <= 231 - 1`



 

**Follow up:** If this function is called many times, how would you optimize it?

## Solution

```python
class Solution:
    def hammingWeight(self, n: int) -> int:
        count = 0
        while n:
            count += n & 1  # Add 1 if lowest bit is set
            n >>= 1         # Shift right by 1
        return count
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
