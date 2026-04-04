---
id: "4194"
title: "Count Monobit Integers"
slug: "count-monobit-integers"
difficulty: "Easy"
tags: ["Bit Manipulation", "Enumeration"]
language: "java"
date_solved: "2026-04-01"
status: "solved"
submission_id: "1965516250"
---

## Problem

You are given an integer `n`.

An integer is called **Monobit** if all bits in its binary representation are the same.

Return the count of **Monobit** integers in the range `[0, n]` (inclusive).

 

**Example 1:**

**Input:** n = 1

**Output:** 2

**Explanation:**

  * The integers in the range `[0, 1]` have binary representations `"0"` and `"1"`.
  * Each representation consists of identical bits. Thus, the answer is 2.



**Example 2:**

**Input:** n = 4

**Output:** 3

**Explanation:**

  * The integers in the range `[0, 4]` include binaries `"0"`, `"1"`, `"10"`, `"11"`, and `"100"`.
  * Only 0, 1 and 3 satisfy the Monobit condition. Thus, the answer is 3.



 

**Constraints:**

  * `0 <= n <= 1000`

## Solution

```java
class Solution {
    public int countMonobit(int n) {
        return 32 - Integer.numberOfLeadingZeros(n + 1);
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
