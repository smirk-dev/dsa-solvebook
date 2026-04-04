---
id: "4245"
title: "Count Commas in Range"
slug: "count-commas-in-range"
difficulty: "Easy"
tags: ["Math"]
language: "java"
date_solved: "2026-04-01"
status: "solved"
submission_id: "1965510346"
---

## Problem

You are given an integer `n`.

Return the **total** number of commas used when writing all integers from `[1, n]` (inclusive) in **standard** number formatting.

In **standard** formatting:

  * A comma is inserted after **every three** digits from the right.
  * Numbers with **fewer** than 4 digits contain no commas.



 

**Example 1:**

**Input:** n = 1002

**Output:** 3

**Explanation:**

The numbers `"1,000"`, `"1,001"`, and `"1,002"` each contain one comma, giving a total of 3.

**Example 2:**

**Input:** n = 998

**Output:** 0

**Explanation:**

All numbers from 1 to 998 have fewer than four digits. Therefore, no commas are used.

 

**Constraints:**

  * `1 <= n <= 105`

## Solution

```java
class Solution {
    public int countCommas(int n) {
        return Math.max(0, n - 999);
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
